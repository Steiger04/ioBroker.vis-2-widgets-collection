import { v as p, R as ya, a as x, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { g as hs, c as wn } from "./_commonjsHelpers-Cpj98o6Y.js";
import { v as Rf } from "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let Bh, fd, I0, MA, Qo, Nm, U0, Ov, Ca, p0, Pv, Gv, Rv, rv, Sa, Gt, Oa, tn, en, kv, Gr, Sp, hr, it, lh, id, Pt, ae, Ce, me, bh, ut, dv, fv, $U, dh, Vs, yi, _v, $v, Cl, Ah, Ks, Ru, st, NU, Ts, GU, ks, fn, Ta, d0, WU, Dt, Ep, bA, Ke, Qi, ke, Nu, IA, L, Br, Ye, se, t0, Ut, Nr, Ze, pp, kA, VU, ye, _m, ee, Fi, zs, xo;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var lu = {
    exports: {}
  }, Vo = {};
  var Df = p, Mf = /* @__PURE__ */ Symbol.for("react.element"), _f = /* @__PURE__ */ Symbol.for("react.fragment"), Pf = Object.prototype.hasOwnProperty, Gf = Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Nf = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function cu(A, e, t) {
    var r, n = {}, o = null, i = null;
    t !== void 0 && (o = "" + t), e.key !== void 0 && (o = "" + e.key), e.ref !== void 0 && (i = e.ref);
    for (r in e) Pf.call(e, r) && !Nf.hasOwnProperty(r) && (n[r] = e[r]);
    if (A && A.defaultProps) for (r in e = A.defaultProps, e) n[r] === void 0 && (n[r] = e[r]);
    return {
      $$typeof: Mf,
      type: A,
      key: o,
      ref: i,
      props: n,
      _owner: Gf.current
    };
  }
  Vo.Fragment = _f;
  Vo.jsx = cu;
  Vo.jsxs = cu;
  lu.exports = Vo;
  L = lu.exports;
  const Jr = {
    black: "#000",
    white: "#fff"
  }, Vt = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  }, $t = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  }, Wt = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  }, jt = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  }, Xt = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  }, br = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, Vf = {
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
  Pt = function(A, ...e) {
    const t = new URL(`https://mui.com/production-error/?code=${A}`);
    return e.forEach((r) => t.searchParams.append("args[]", r)), `Minified MUI error #${A}; visit ${t} for the full message.`;
  };
  const Xe = "$$material";
  function po() {
    return po = Object.assign ? Object.assign.bind() : function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }, po.apply(null, arguments);
  }
  function $f(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function Wf(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var jf = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Wf(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = $f(n);
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
  })(), ne = "-ms-", vo = "-moz-", CA = "-webkit-", uu = "comm", ps = "rule", vs = "decl", Xf = "@import", du = "@keyframes", zf = "@layer", Yf = Math.abs, $o = String.fromCharCode, Jf = Object.assign;
  function Zf(A, e) {
    return Ae(A, 0) ^ 45 ? (((e << 2 ^ Ae(A, 0)) << 2 ^ Ae(A, 1)) << 2 ^ Ae(A, 2)) << 2 ^ Ae(A, 3) : 0;
  }
  function fu(A) {
    return A.trim();
  }
  function qf(A, e) {
    return (A = e.exec(A)) ? A[0] : A;
  }
  function yA(A, e, t) {
    return A.replace(e, t);
  }
  function ba(A, e) {
    return A.indexOf(e);
  }
  function Ae(A, e) {
    return A.charCodeAt(e) | 0;
  }
  function Zr(A, e, t) {
    return A.slice(e, t);
  }
  function Ge(A) {
    return A.length;
  }
  function ms(A) {
    return A.length;
  }
  function Cn(A, e) {
    return e.push(A), A;
  }
  function Ag(A, e) {
    return A.map(e).join("");
  }
  var Wo = 1, gr = 1, gu = 0, ge = 0, $A = 0, wr = "";
  function jo(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: Wo,
      column: gr,
      length: i,
      return: ""
    };
  }
  function Qr(A, e) {
    return Jf(jo("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function eg() {
    return $A;
  }
  function tg() {
    return $A = ge > 0 ? Ae(wr, --ge) : 0, gr--, $A === 10 && (gr = 1, Wo--), $A;
  }
  function ve() {
    return $A = ge < gu ? Ae(wr, ge++) : 0, gr++, $A === 10 && (gr = 1, Wo++), $A;
  }
  function ze() {
    return Ae(wr, ge);
  }
  function io() {
    return ge;
  }
  function sn(A, e) {
    return Zr(wr, A, e);
  }
  function qr(A) {
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
  function Bu(A) {
    return Wo = gr = 1, gu = Ge(wr = A), ge = 0, [];
  }
  function hu(A) {
    return wr = "", A;
  }
  function ao(A) {
    return fu(sn(ge - 1, Qa(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function rg(A) {
    for (; ($A = ze()) && $A < 33; ) ve();
    return qr(A) > 2 || qr($A) > 3 ? "" : " ";
  }
  function ng(A, e) {
    for (; --e && ve() && !($A < 48 || $A > 102 || $A > 57 && $A < 65 || $A > 70 && $A < 97); ) ;
    return sn(A, io() + (e < 6 && ze() == 32 && ve() == 32));
  }
  function Qa(A) {
    for (; ve(); ) switch ($A) {
      case A:
        return ge;
      case 34:
      case 39:
        A !== 34 && A !== 39 && Qa($A);
        break;
      case 40:
        A === 41 && Qa(A);
        break;
      case 92:
        ve();
        break;
    }
    return ge;
  }
  function og(A, e) {
    for (; ve() && A + $A !== 57; ) if (A + $A === 84 && ze() === 47) break;
    return "/*" + sn(e, ge - 1) + "*" + $o(A === 47 ? A : ve());
  }
  function ig(A) {
    for (; !qr(ze()); ) ve();
    return sn(A, ge);
  }
  function ag(A) {
    return hu(so("", null, null, null, [
      ""
    ], A = Bu(A), 0, [
      0
    ], A));
  }
  function so(A, e, t, r, n, o, i, a, s) {
    for (var l = 0, c = 0, u = i, d = 0, f = 0, g = 0, h = 1, F = 1, w = 1, C = 0, b = "", Q = n, S = o, v = r, U = b; F; ) switch (g = C, C = ve()) {
      case 40:
        if (g != 108 && Ae(U, u - 1) == 58) {
          ba(U += yA(ao(C), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        U += ao(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        U += rg(g);
        break;
      case 92:
        U += ng(io() - 1, 7);
        continue;
      case 47:
        switch (ze()) {
          case 42:
          case 47:
            Cn(sg(og(ve(), io()), e, t), s);
            break;
          default:
            U += "/";
        }
        break;
      case 123 * h:
        a[l++] = Ge(U) * w;
      case 125 * h:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            F = 0;
          case 59 + c:
            w == -1 && (U = yA(U, /\f/g, "")), f > 0 && Ge(U) - u && Cn(f > 32 ? al(U + ";", r, t, u - 1) : al(yA(U, " ", "") + ";", r, t, u - 2), s);
            break;
          case 59:
            U += ";";
          default:
            if (Cn(v = il(U, e, t, l, c, n, a, b, Q = [], S = [], u), o), C === 123) if (c === 0) so(U, e, v, v, Q, o, u, a, S);
            else switch (d === 99 && Ae(U, 3) === 110 ? 100 : d) {
              case 100:
              case 108:
              case 109:
              case 115:
                so(A, v, v, r && Cn(il(A, v, v, 0, 0, n, a, b, n, Q = [], u), S), n, S, u, a, r ? Q : S);
                break;
              default:
                so(U, v, v, v, [
                  ""
                ], S, 0, a, S);
            }
        }
        l = c = f = 0, h = w = 1, b = U = "", u = i;
        break;
      case 58:
        u = 1 + Ge(U), f = g;
      default:
        if (h < 1) {
          if (C == 123) --h;
          else if (C == 125 && h++ == 0 && tg() == 125) continue;
        }
        switch (U += $o(C), C * h) {
          case 38:
            w = c > 0 ? 1 : (U += "\f", -1);
            break;
          case 44:
            a[l++] = (Ge(U) - 1) * w, w = 1;
            break;
          case 64:
            ze() === 45 && (U += ao(ve())), d = ze(), c = u = Ge(b = U += ig(io())), C++;
            break;
          case 45:
            g === 45 && Ge(U) == 2 && (h = 0);
        }
    }
    return o;
  }
  function il(A, e, t, r, n, o, i, a, s, l, c) {
    for (var u = n - 1, d = n === 0 ? o : [
      ""
    ], f = ms(d), g = 0, h = 0, F = 0; g < r; ++g) for (var w = 0, C = Zr(A, u + 1, u = Yf(h = i[g])), b = A; w < f; ++w) (b = fu(h > 0 ? d[w] + " " + C : yA(C, /&\f/g, d[w]))) && (s[F++] = b);
    return jo(A, e, t, n === 0 ? ps : a, s, l, c);
  }
  function sg(A, e, t) {
    return jo(A, e, t, uu, $o(eg()), Zr(A, 2, -2), 0);
  }
  function al(A, e, t, r) {
    return jo(A, e, t, vs, Zr(A, 0, r), Zr(A, r + 1, -1), r);
  }
  function cr(A, e) {
    for (var t = "", r = ms(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function lg(A, e, t, r) {
    switch (A.type) {
      case zf:
        if (A.children.length) break;
      case Xf:
      case vs:
        return A.return = A.return || A.value;
      case uu:
        return "";
      case du:
        return A.return = A.value + "{" + cr(A.children, r) + "}";
      case ps:
        A.value = A.props.join(",");
    }
    return Ge(t = cr(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function cg(A) {
    var e = ms(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function ug(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function pu(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var dg = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = ze(), n === 38 && o === 12 && (t[r] = 1), !qr(o); ) ve();
    return sn(e, ge);
  }, fg = function(e, t) {
    var r = -1, n = 44;
    do
      switch (qr(n)) {
        case 0:
          n === 38 && ze() === 12 && (t[r] = 1), e[r] += dg(ge - 1, t, r);
          break;
        case 2:
          e[r] += ao(n);
          break;
        case 4:
          if (n === 44) {
            e[++r] = ze() === 58 ? "&\f" : "", t[r] = e[r].length;
            break;
          }
        default:
          e[r] += $o(n);
      }
    while (n = ve());
    return e;
  }, gg = function(e, t) {
    return hu(fg(Bu(e), t));
  }, sl = /* @__PURE__ */ new WeakMap(), Bg = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !sl.get(r)) && !n) {
        sl.set(e, true);
        for (var o = [], i = gg(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
      }
    }
  }, hg = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function vu(A, e) {
    switch (Zf(A, e)) {
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
        return CA + A + vo + A + ne + A + A;
      case 6828:
      case 4268:
        return CA + A + ne + A + A;
      case 6165:
        return CA + A + ne + "flex-" + A + A;
      case 5187:
        return CA + A + yA(A, /(\w+).+(:[^]+)/, CA + "box-$1$2" + ne + "flex-$1$2") + A;
      case 5443:
        return CA + A + ne + "flex-item-" + yA(A, /flex-|-self/, "") + A;
      case 4675:
        return CA + A + ne + "flex-line-pack" + yA(A, /align-content|flex-|-self/, "") + A;
      case 5548:
        return CA + A + ne + yA(A, "shrink", "negative") + A;
      case 5292:
        return CA + A + ne + yA(A, "basis", "preferred-size") + A;
      case 6060:
        return CA + "box-" + yA(A, "-grow", "") + CA + A + ne + yA(A, "grow", "positive") + A;
      case 4554:
        return CA + yA(A, /([^-])(transform)/g, "$1" + CA + "$2") + A;
      case 6187:
        return yA(yA(yA(A, /(zoom-|grab)/, CA + "$1"), /(image-set)/, CA + "$1"), A, "") + A;
      case 5495:
      case 3959:
        return yA(A, /(image-set\([^]*)/, CA + "$1$`$1");
      case 4968:
        return yA(yA(A, /(.+:)(flex-)?(.*)/, CA + "box-pack:$3" + ne + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + CA + A + A;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return yA(A, /(.+)-inline(.+)/, CA + "$1$2") + A;
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
        if (Ge(A) - 1 - e > 6) switch (Ae(A, e + 1)) {
          case 109:
            if (Ae(A, e + 4) !== 45) break;
          case 102:
            return yA(A, /(.+:)(.+)-([^]+)/, "$1" + CA + "$2-$3$1" + vo + (Ae(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~ba(A, "stretch") ? vu(yA(A, "stretch", "fill-available"), e) + A : A;
        }
        break;
      case 4949:
        if (Ae(A, e + 1) !== 115) break;
      case 6444:
        switch (Ae(A, Ge(A) - 3 - (~ba(A, "!important") && 10))) {
          case 107:
            return yA(A, ":", ":" + CA) + A;
          case 101:
            return yA(A, /(.+:)([^;!]+)(;|!.+)?/, "$1" + CA + (Ae(A, 14) === 45 ? "inline-" : "") + "box$3$1" + CA + "$2$3$1" + ne + "$2box$3") + A;
        }
        break;
      case 5936:
        switch (Ae(A, e + 11)) {
          case 114:
            return CA + A + ne + yA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
          case 108:
            return CA + A + ne + yA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
          case 45:
            return CA + A + ne + yA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
        }
        return CA + A + ne + A + A;
    }
    return A;
  }
  var pg = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case vs:
        e.return = vu(e.value, e.length);
        break;
      case du:
        return cr([
          Qr(e, {
            value: yA(e.value, "@", "@" + CA)
          })
        ], n);
      case ps:
        if (e.length) return Ag(e.props, function(o) {
          switch (qf(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return cr([
                Qr(e, {
                  props: [
                    yA(o, /:(read-\w+)/, ":" + vo + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return cr([
                Qr(e, {
                  props: [
                    yA(o, /:(plac\w+)/, ":" + CA + "input-$1")
                  ]
                }),
                Qr(e, {
                  props: [
                    yA(o, /:(plac\w+)/, ":" + vo + "$1")
                  ]
                }),
                Qr(e, {
                  props: [
                    yA(o, /:(plac\w+)/, ne + "input-$1")
                  ]
                })
              ], n);
          }
          return "";
        });
    }
  }, vg = [
    pg
  ], mg = function(e) {
    var t = e.key;
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(h) {
        var F = h.getAttribute("data-emotion");
        F.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || vg, o = {}, i, a = [];
    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(h) {
      for (var F = h.getAttribute("data-emotion").split(" "), w = 1; w < F.length; w++) o[F[w]] = true;
      a.push(h);
    });
    var s, l = [
      Bg,
      hg
    ];
    {
      var c, u = [
        lg,
        ug(function(h) {
          c.insert(h);
        })
      ], d = cg(l.concat(n, u)), f = function(F) {
        return cr(ag(F), d);
      };
      s = function(F, w, C, b) {
        c = C, f(F ? F + "{" + w.styles + "}" : w.styles), b && (g.inserted[w.name] = true);
      };
    }
    var g = {
      key: t,
      sheet: new jf({
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
    return g.sheet.hydrate(a), g;
  }, mu = {
    exports: {}
  }, FA = {};
  var JA = typeof Symbol == "function" && Symbol.for, ws = JA ? /* @__PURE__ */ Symbol.for("react.element") : 60103, Cs = JA ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, Xo = JA ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, zo = JA ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Yo = JA ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Jo = JA ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, Zo = JA ? /* @__PURE__ */ Symbol.for("react.context") : 60110, ys = JA ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, qo = JA ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Ai = JA ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, ei = JA ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, wg = JA ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, ti = JA ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, ri = JA ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, Cg = JA ? /* @__PURE__ */ Symbol.for("react.block") : 60121, yg = JA ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, bg = JA ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, Qg = JA ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function we(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case ws:
          switch (A = A.type, A) {
            case ys:
            case qo:
            case Xo:
            case Yo:
            case zo:
            case ei:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case Zo:
                case Ai:
                case ri:
                case ti:
                case Jo:
                  return A;
                default:
                  return e;
              }
          }
        case Cs:
          return e;
      }
    }
  }
  function wu(A) {
    return we(A) === qo;
  }
  FA.AsyncMode = ys;
  FA.ConcurrentMode = qo;
  FA.ContextConsumer = Zo;
  FA.ContextProvider = Jo;
  FA.Element = ws;
  FA.ForwardRef = Ai;
  FA.Fragment = Xo;
  FA.Lazy = ri;
  FA.Memo = ti;
  FA.Portal = Cs;
  FA.Profiler = Yo;
  FA.StrictMode = zo;
  FA.Suspense = ei;
  FA.isAsyncMode = function(A) {
    return wu(A) || we(A) === ys;
  };
  FA.isConcurrentMode = wu;
  FA.isContextConsumer = function(A) {
    return we(A) === Zo;
  };
  FA.isContextProvider = function(A) {
    return we(A) === Jo;
  };
  FA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === ws;
  };
  FA.isForwardRef = function(A) {
    return we(A) === Ai;
  };
  FA.isFragment = function(A) {
    return we(A) === Xo;
  };
  FA.isLazy = function(A) {
    return we(A) === ri;
  };
  FA.isMemo = function(A) {
    return we(A) === ti;
  };
  FA.isPortal = function(A) {
    return we(A) === Cs;
  };
  FA.isProfiler = function(A) {
    return we(A) === Yo;
  };
  FA.isStrictMode = function(A) {
    return we(A) === zo;
  };
  FA.isSuspense = function(A) {
    return we(A) === ei;
  };
  FA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Xo || A === qo || A === Yo || A === zo || A === ei || A === wg || typeof A == "object" && A !== null && (A.$$typeof === ri || A.$$typeof === ti || A.$$typeof === Jo || A.$$typeof === Zo || A.$$typeof === Ai || A.$$typeof === yg || A.$$typeof === bg || A.$$typeof === Qg || A.$$typeof === Cg);
  };
  FA.typeOf = we;
  mu.exports = FA;
  var Fg = mu.exports, Cu = Fg, Ug = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, Eg = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, yu = {};
  yu[Cu.ForwardRef] = Ug;
  yu[Cu.Memo] = Eg;
  var Sg = true;
  function bu(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var bs = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || Sg === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  }, Qs = function(e, t, r) {
    bs(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do
        e.insert(t === o ? "." + n : "", o, e.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function xg(A) {
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
  var Ig = {
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
  }, Hg = /[A-Z]|^ms/g, Tg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Qu = function(e) {
    return e.charCodeAt(1) === 45;
  }, ll = function(e) {
    return e != null && typeof e != "boolean";
  }, Pi = pu(function(A) {
    return Qu(A) ? A : A.replace(Hg, "-$&").toLowerCase();
  }), cl = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(Tg, function(r, n, o) {
          return Ne = {
            name: n,
            styles: o,
            next: Ne
          }, n;
        });
    }
    return Ig[e] !== 1 && !Qu(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
  };
  function An(A, e, t) {
    if (t == null) return "";
    var r = t;
    if (r.__emotion_styles !== void 0) return r;
    switch (typeof t) {
      case "boolean":
        return "";
      case "object": {
        var n = t;
        if (n.anim === 1) return Ne = {
          name: n.name,
          styles: n.styles,
          next: Ne
        }, n.name;
        var o = t;
        if (o.styles !== void 0) {
          var i = o.next;
          if (i !== void 0) for (; i !== void 0; ) Ne = {
            name: i.name,
            styles: i.styles,
            next: Ne
          }, i = i.next;
          var a = o.styles + ";";
          return a;
        }
        return Lg(A, e, t);
      }
      case "function": {
        if (A !== void 0) {
          var s = Ne, l = t(A);
          return Ne = s, An(A, e, l);
        }
        break;
      }
    }
    var c = t;
    if (e == null) return c;
    var u = e[c];
    return u !== void 0 ? u : c;
  }
  function Lg(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += An(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : ll(a) && (r += Pi(o) + ":" + cl(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var s = 0; s < i.length; s++) ll(i[s]) && (r += Pi(o) + ":" + cl(o, i[s]) + ";");
      else {
        var l = An(A, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += Pi(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
    return r;
  }
  var ul = /label:\s*([^\s;{]+)\s*(;|$)/g, Ne;
  function ln(A, e, t) {
    if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0) return A[0];
    var r = true, n = "";
    Ne = void 0;
    var o = A[0];
    if (o == null || o.raw === void 0) r = false, n += An(t, e, o);
    else {
      var i = o;
      n += i[0];
    }
    for (var a = 1; a < A.length; a++) if (n += An(t, e, A[a]), r) {
      var s = o;
      n += s[a];
    }
    ul.lastIndex = 0;
    for (var l = "", c; (c = ul.exec(n)) !== null; ) l += "-" + c[1];
    var u = xg(n) + l;
    return {
      name: u,
      styles: n,
      next: Ne
    };
  }
  var kg = function(e) {
    return e();
  }, Fu = ya.useInsertionEffect ? ya.useInsertionEffect : false, Uu = Fu || kg, dl = Fu || p.useLayoutEffect, Eu = p.createContext(typeof HTMLElement < "u" ? mg({
    key: "css"
  }) : null);
  Eu.Provider;
  var Fs = function(e) {
    return p.forwardRef(function(t, r) {
      var n = p.useContext(Eu);
      return e(t, n, r);
    });
  }, cn = p.createContext({}), Us = {}.hasOwnProperty, Fa = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Og = function(e, t) {
    var r = {};
    for (var n in t) Us.call(t, n) && (r[n] = t[n]);
    return r[Fa] = e, r;
  }, Kg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return bs(t, r, n), Uu(function() {
      return Qs(t, r, n);
    }), null;
  }, Rg = Fs(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[Fa], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = bu(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = ln(o, void 0, p.useContext(cn));
    i += e.key + "-" + a.name;
    var s = {};
    for (var l in A) Us.call(A, l) && l !== "css" && l !== Fa && (s[l] = A[l]);
    return s.className = i, t && (s.ref = t), p.createElement(p.Fragment, null, p.createElement(Kg, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), p.createElement(n, s));
  }), Dg = Rg, fl = function(e, t) {
    var r = arguments;
    if (t == null || !Us.call(t, "css")) return p.createElement.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = Dg, o[1] = Og(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return p.createElement.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(fl || (fl = {}));
  var Mg = Fs(function(A, e) {
    var t = A.styles, r = ln([
      t
    ], void 0, p.useContext(cn)), n = p.useRef();
    return dl(function() {
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
    ]), dl(function() {
      var o = n.current, i = o[0], a = o[1];
      if (a) {
        o[1] = false;
        return;
      }
      if (r.next !== void 0 && Qs(e, r.next, true), i.tags.length) {
        var s = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = s, i.flush();
      }
      e.insert("", r, i, false);
    }, [
      e,
      r.name
    ]), null;
  });
  function Es() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return ln(e);
  }
  function un() {
    var A = Es.apply(void 0, arguments), e = "animation-" + A.name;
    return {
      name: e,
      styles: "@keyframes " + e + "{" + A.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  }
  var _g = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Pg = pu(function(A) {
    return _g.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), Gg = Pg, Ng = function(e) {
    return e !== "theme";
  }, gl = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? Gg : Ng;
  }, Bl = function(e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n = e.__emotion_forwardProp && o ? function(i) {
        return e.__emotion_forwardProp(i) && o(i);
      } : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  }, Vg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return bs(t, r, n), Uu(function() {
      return Qs(t, r, n);
    }), null;
  }, $g = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = Bl(e, t, r), s = a || gl(n), l = !s("as");
    return function() {
      var c = arguments, u = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && u.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) u.push.apply(u, c);
      else {
        var d = c[0];
        u.push(d[0]);
        for (var f = c.length, g = 1; g < f; g++) u.push(c[g], d[g]);
      }
      var h = Fs(function(F, w, C) {
        var b = l && F.as || n, Q = "", S = [], v = F;
        if (F.theme == null) {
          v = {};
          for (var U in F) v[U] = F[U];
          v.theme = p.useContext(cn);
        }
        typeof F.className == "string" ? Q = bu(w.registered, S, F.className) : F.className != null && (Q = F.className + " ");
        var T = ln(u.concat(S), w.registered, v);
        Q += w.key + "-" + T.name, i !== void 0 && (Q += " " + i);
        var I = l && a === void 0 ? gl(b) : s, B = {};
        for (var H in F) l && H === "as" || I(H) && (B[H] = F[H]);
        return B.className = Q, C && (B.ref = C), p.createElement(p.Fragment, null, p.createElement(Vg, {
          cache: w,
          serialized: T,
          isStringTag: typeof b == "string"
        }), p.createElement(b, B));
      });
      return h.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", h.defaultProps = e.defaultProps, h.__emotion_real = h, h.__emotion_base = n, h.__emotion_styles = u, h.__emotion_forwardProp = a, Object.defineProperty(h, "toString", {
        value: function() {
          return "." + i;
        }
      }), h.withComponent = function(F, w) {
        var C = A(F, po({}, t, w, {
          shouldForwardProp: Bl(h, w, true)
        }));
        return C.apply(void 0, u);
      }, h;
    };
  }, Wg = [
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
  ], Ua = $g.bind(null);
  Wg.forEach(function(A) {
    Ua[A] = Ua(A);
  });
  function jg(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function Su(A) {
    const { styles: e, defaultTheme: t = {} } = A, r = typeof e == "function" ? (n) => e(jg(n) ? t : n) : e;
    return L.jsx(Mg, {
      styles: r
    });
  }
  function xu(A, e) {
    return Ua(A, e);
  }
  function Xg(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const hl = [];
  function Ct(A) {
    return hl[0] = A, ln(hl);
  }
  var Iu = {
    exports: {}
  }, HA = {};
  var Ss = /* @__PURE__ */ Symbol.for("react.transitional.element"), xs = /* @__PURE__ */ Symbol.for("react.portal"), ni = /* @__PURE__ */ Symbol.for("react.fragment"), oi = /* @__PURE__ */ Symbol.for("react.strict_mode"), ii = /* @__PURE__ */ Symbol.for("react.profiler"), ai = /* @__PURE__ */ Symbol.for("react.consumer"), si = /* @__PURE__ */ Symbol.for("react.context"), li = /* @__PURE__ */ Symbol.for("react.forward_ref"), ci = /* @__PURE__ */ Symbol.for("react.suspense"), ui = /* @__PURE__ */ Symbol.for("react.suspense_list"), di = /* @__PURE__ */ Symbol.for("react.memo"), fi = /* @__PURE__ */ Symbol.for("react.lazy"), zg = /* @__PURE__ */ Symbol.for("react.view_transition"), Yg = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Te(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case Ss:
          switch (A = A.type, A) {
            case ni:
            case ii:
            case oi:
            case ci:
            case ui:
            case zg:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case si:
                case li:
                case fi:
                case di:
                  return A;
                case ai:
                  return A;
                default:
                  return e;
              }
          }
        case xs:
          return e;
      }
    }
  }
  HA.ContextConsumer = ai;
  HA.ContextProvider = si;
  HA.Element = Ss;
  HA.ForwardRef = li;
  HA.Fragment = ni;
  HA.Lazy = fi;
  HA.Memo = di;
  HA.Portal = xs;
  HA.Profiler = ii;
  HA.StrictMode = oi;
  HA.Suspense = ci;
  HA.SuspenseList = ui;
  HA.isContextConsumer = function(A) {
    return Te(A) === ai;
  };
  HA.isContextProvider = function(A) {
    return Te(A) === si;
  };
  HA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === Ss;
  };
  HA.isForwardRef = function(A) {
    return Te(A) === li;
  };
  HA.isFragment = function(A) {
    return Te(A) === ni;
  };
  HA.isLazy = function(A) {
    return Te(A) === fi;
  };
  HA.isMemo = function(A) {
    return Te(A) === di;
  };
  HA.isPortal = function(A) {
    return Te(A) === xs;
  };
  HA.isProfiler = function(A) {
    return Te(A) === ii;
  };
  HA.isStrictMode = function(A) {
    return Te(A) === oi;
  };
  HA.isSuspense = function(A) {
    return Te(A) === ci;
  };
  HA.isSuspenseList = function(A) {
    return Te(A) === ui;
  };
  HA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === ni || A === ii || A === oi || A === ci || A === ui || typeof A == "object" && A !== null && (A.$$typeof === fi || A.$$typeof === di || A.$$typeof === si || A.$$typeof === ai || A.$$typeof === li || A.$$typeof === Yg || A.getModuleId !== void 0);
  };
  HA.typeOf = Te;
  Iu.exports = HA;
  var Hu = Iu.exports;
  function We(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function Tu(A) {
    if (p.isValidElement(A) || Hu.isValidElementType(A) || !We(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = Tu(A[t]);
    }), e;
  }
  ae = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return We(A) && We(e) && Object.keys(e).forEach((n) => {
      p.isValidElement(e[n]) || Hu.isValidElementType(e[n]) ? r[n] = e[n] : We(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && We(A[n]) ? r[n] = ae(A[n], e[n], t) : t.clone ? r[n] = We(e[n]) ? Tu(e[n]) : e[n] : r[n] = e[n];
    }), r;
  };
  const Jg = (A) => {
    const e = Object.keys(A).map((t) => ({
      key: t,
      val: A[t]
    })) || [];
    return e.sort((t, r) => t.val - r.val), e.reduce((t, r) => ({
      ...t,
      [r.key]: r.val
    }), {});
  };
  function Zg(A) {
    const { values: e = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: t = "px", step: r = 5, ...n } = A, o = Jg(e), i = Object.keys(o);
    function a(d) {
      return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t})`;
    }
    function s(d) {
      return `@media (max-width:${(typeof e[d] == "number" ? e[d] : d) - r / 100}${t})`;
    }
    function l(d, f) {
      const g = i.indexOf(f);
      return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t}) and (max-width:${(g !== -1 && typeof e[i[g]] == "number" ? e[i[g]] : f) - r / 100}${t})`;
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
  function pl(A, e) {
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
  function qg(A, e) {
    return e === "@" || e.startsWith("@") && (A.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/));
  }
  function AB(A, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/);
    if (!t) return null;
    const [, r, n] = t, o = Number.isNaN(+r) ? r || 0 : +r;
    return A.containerQueries(n).up(o);
  }
  function eB(A) {
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
  const tB = {
    borderRadius: 4
  };
  function _r(A, e) {
    return e ? ae(A, e, {
      clone: false
    }) : A;
  }
  const gi = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, vl = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (A) => `@media (min-width:${gi[A]}px)`
  }, rB = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : gi[e] || e;
        return typeof t == "number" && (t = `${t}px`), A ? `@container ${A} (min-width:${t})` : `@container (min-width:${t})`;
      }
    })
  };
  st = function(A, e, t) {
    const r = A.theme || {};
    if (Array.isArray(e)) {
      const o = r.breakpoints || vl;
      return e.reduce((i, a, s) => (i[o.up(o.keys[s])] = t(e[s]), i), {});
    }
    if (typeof e == "object") {
      const o = r.breakpoints || vl;
      return Object.keys(e).reduce((i, a) => {
        if (qg(o.keys, a)) {
          const s = AB(r.containerQueries ? r : rB, a);
          s && (i[s] = t(e[a], a));
        } else if (Object.keys(o.values || gi).includes(a)) {
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
  function Lu(A = {}) {
    var _a2;
    return ((_a2 = A.keys) == null ? void 0 : _a2.reduce((t, r) => {
      const n = A.up(r);
      return t[n] = {}, t;
    }, {})) || {};
  }
  function Ea(A, e) {
    return A.reduce((t, r) => {
      const n = t[r];
      return (!n || Object.keys(n).length === 0) && delete t[r], t;
    }, e);
  }
  GU = function(A, ...e) {
    const t = Lu(A), r = [
      t,
      ...e
    ].reduce((n, o) => ae(n, o), {});
    return Ea(Object.keys(t), r);
  };
  function nB(A, e) {
    if (typeof A != "object") return {};
    const t = {}, r = Object.keys(e);
    return Array.isArray(A) ? r.forEach((n, o) => {
      o < A.length && (t[n] = true);
    }) : r.forEach((n) => {
      A[n] != null && (t[n] = true);
    }), t;
  }
  NU = function({ values: A, breakpoints: e, base: t }) {
    const r = t || nB(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, s) => (Array.isArray(A) ? (i[a] = A[s] != null ? A[s] : A[o], o = s) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  IA = function(A) {
    if (typeof A != "string") throw new Error(Pt(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  function Bi(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  }
  function mo(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = Bi(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function NA(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], s = i.theme, l = Bi(s, r) || {};
      return st(i, a, (u) => {
        let d = mo(l, n, u);
        return u === d && typeof u == "string" && (d = mo(l, n, `${e}${u === "default" ? "" : IA(u)}`, u)), t === false ? d : {
          [t]: d
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      e
    ], o;
  }
  function oB(A) {
    const e = {};
    return (t) => (e[t] === void 0 && (e[t] = A(t)), e[t]);
  }
  const iB = {
    m: "margin",
    p: "padding"
  }, aB = {
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
  }, ml = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, sB = oB((A) => {
    if (A.length > 2) if (ml[A]) A = ml[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = iB[e], n = aB[t] || "";
    return Array.isArray(n) ? n.map((o) => r + o) : [
      r + n
    ];
  }), Is = [
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
  ], Hs = [
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
    ...Is,
    ...Hs
  ];
  function dn(A, e, t, r) {
    const n = Bi(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  Ts = function(A) {
    return dn(A, "spacing", 8);
  };
  fn = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function lB(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = fn(e, t), r), {});
  }
  function cB(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = sB(t), o = lB(n, r), i = A[t];
    return st(A, i, o);
  }
  function ku(A, e) {
    const t = Ts(A.theme);
    return Object.keys(A).map((r) => cB(A, e, r, t)).reduce(_r, {});
  }
  function RA(A) {
    return ku(A, Is);
  }
  RA.propTypes = {};
  RA.filterProps = Is;
  function DA(A) {
    return ku(A, Hs);
  }
  DA.propTypes = {};
  DA.filterProps = Hs;
  function Ou(A = 8, e = Ts({
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
  function hi(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? _r(n, e[o](r)) : n, {});
    return t.propTypes = {}, t.filterProps = A.reduce((r, n) => r.concat(n.filterProps), []), t;
  }
  function Ue(A) {
    return typeof A != "number" ? A : `${A}px solid`;
  }
  function Le(A, e) {
    return NA({
      prop: A,
      themeKey: "borders",
      transform: e
    });
  }
  const uB = Le("border", Ue), dB = Le("borderTop", Ue), fB = Le("borderRight", Ue), gB = Le("borderBottom", Ue), BB = Le("borderLeft", Ue), hB = Le("borderColor"), pB = Le("borderTopColor"), vB = Le("borderRightColor"), mB = Le("borderBottomColor"), wB = Le("borderLeftColor"), CB = Le("outline", Ue), yB = Le("outlineColor"), pi = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = dn(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: fn(e, r)
      });
      return st(A, A.borderRadius, t);
    }
    return null;
  };
  pi.propTypes = {};
  pi.filterProps = [
    "borderRadius"
  ];
  hi(uB, dB, fB, gB, BB, hB, pB, vB, mB, wB, pi, CB, yB);
  const vi = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = dn(A.theme, "spacing", 8), t = (r) => ({
        gap: fn(e, r)
      });
      return st(A, A.gap, t);
    }
    return null;
  };
  vi.propTypes = {};
  vi.filterProps = [
    "gap"
  ];
  const mi = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = dn(A.theme, "spacing", 8), t = (r) => ({
        columnGap: fn(e, r)
      });
      return st(A, A.columnGap, t);
    }
    return null;
  };
  mi.propTypes = {};
  mi.filterProps = [
    "columnGap"
  ];
  const wi = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = dn(A.theme, "spacing", 8), t = (r) => ({
        rowGap: fn(e, r)
      });
      return st(A, A.rowGap, t);
    }
    return null;
  };
  wi.propTypes = {};
  wi.filterProps = [
    "rowGap"
  ];
  const bB = NA({
    prop: "gridColumn"
  }), QB = NA({
    prop: "gridRow"
  }), FB = NA({
    prop: "gridAutoFlow"
  }), UB = NA({
    prop: "gridAutoColumns"
  }), EB = NA({
    prop: "gridAutoRows"
  }), SB = NA({
    prop: "gridTemplateColumns"
  }), xB = NA({
    prop: "gridTemplateRows"
  }), IB = NA({
    prop: "gridTemplateAreas"
  }), HB = NA({
    prop: "gridArea"
  });
  hi(vi, mi, wi, bB, QB, FB, UB, EB, SB, xB, IB, HB);
  function ur(A, e) {
    return e === "grey" ? e : A;
  }
  const TB = NA({
    prop: "color",
    themeKey: "palette",
    transform: ur
  }), LB = NA({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: ur
  }), kB = NA({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: ur
  });
  hi(TB, LB, kB);
  function pe(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const OB = NA({
    prop: "width",
    transform: pe
  }), Ls = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || gi[t];
        return r ? ((_e2 = (_d2 = A.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? {
          maxWidth: `${r}${A.theme.breakpoints.unit}`
        } : {
          maxWidth: r
        } : {
          maxWidth: pe(t)
        };
      };
      return st(A, A.maxWidth, e);
    }
    return null;
  };
  Ls.filterProps = [
    "maxWidth"
  ];
  const KB = NA({
    prop: "minWidth",
    transform: pe
  }), RB = NA({
    prop: "height",
    transform: pe
  }), DB = NA({
    prop: "maxHeight",
    transform: pe
  }), MB = NA({
    prop: "minHeight",
    transform: pe
  });
  NA({
    prop: "size",
    cssProperty: "width",
    transform: pe
  });
  NA({
    prop: "size",
    cssProperty: "height",
    transform: pe
  });
  const _B = NA({
    prop: "boxSizing"
  });
  hi(OB, Ls, KB, RB, DB, MB, _B);
  const gn = {
    border: {
      themeKey: "borders",
      transform: Ue
    },
    borderTop: {
      themeKey: "borders",
      transform: Ue
    },
    borderRight: {
      themeKey: "borders",
      transform: Ue
    },
    borderBottom: {
      themeKey: "borders",
      transform: Ue
    },
    borderLeft: {
      themeKey: "borders",
      transform: Ue
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
      transform: Ue
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: pi
    },
    color: {
      themeKey: "palette",
      transform: ur
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: ur
    },
    backgroundColor: {
      themeKey: "palette",
      transform: ur
    },
    p: {
      style: DA
    },
    pt: {
      style: DA
    },
    pr: {
      style: DA
    },
    pb: {
      style: DA
    },
    pl: {
      style: DA
    },
    px: {
      style: DA
    },
    py: {
      style: DA
    },
    padding: {
      style: DA
    },
    paddingTop: {
      style: DA
    },
    paddingRight: {
      style: DA
    },
    paddingBottom: {
      style: DA
    },
    paddingLeft: {
      style: DA
    },
    paddingX: {
      style: DA
    },
    paddingY: {
      style: DA
    },
    paddingInline: {
      style: DA
    },
    paddingInlineStart: {
      style: DA
    },
    paddingInlineEnd: {
      style: DA
    },
    paddingBlock: {
      style: DA
    },
    paddingBlockStart: {
      style: DA
    },
    paddingBlockEnd: {
      style: DA
    },
    m: {
      style: RA
    },
    mt: {
      style: RA
    },
    mr: {
      style: RA
    },
    mb: {
      style: RA
    },
    ml: {
      style: RA
    },
    mx: {
      style: RA
    },
    my: {
      style: RA
    },
    margin: {
      style: RA
    },
    marginTop: {
      style: RA
    },
    marginRight: {
      style: RA
    },
    marginBottom: {
      style: RA
    },
    marginLeft: {
      style: RA
    },
    marginX: {
      style: RA
    },
    marginY: {
      style: RA
    },
    marginInline: {
      style: RA
    },
    marginInlineStart: {
      style: RA
    },
    marginInlineEnd: {
      style: RA
    },
    marginBlock: {
      style: RA
    },
    marginBlockStart: {
      style: RA
    },
    marginBlockEnd: {
      style: RA
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
      style: vi
    },
    rowGap: {
      style: wi
    },
    columnGap: {
      style: mi
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
      transform: pe
    },
    maxWidth: {
      style: Ls
    },
    minWidth: {
      transform: pe
    },
    height: {
      transform: pe
    },
    maxHeight: {
      transform: pe
    },
    minHeight: {
      transform: pe
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
  function PB(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function GB(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function NB() {
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
      const d = Bi(n, l) || {};
      return u ? u(i) : st(i, r, (g) => {
        let h = mo(d, c, g);
        return g === h && typeof g == "string" && (h = mo(d, c, `${t}${g === "default" ? "" : IA(g)}`, g)), s === false ? h : {
          [s]: h
        };
      });
    }
    function e(t) {
      const { sx: r, theme: n = {}, nested: o } = t || {};
      if (!r) return null;
      const i = n.unstable_sxConfig ?? gn;
      function a(s) {
        let l = s;
        if (typeof s == "function") l = s(n);
        else if (typeof s != "object") return s;
        if (!l) return null;
        const c = Lu(n.breakpoints), u = Object.keys(c);
        let d = c;
        return Object.keys(l).forEach((f) => {
          const g = GB(l[f], n);
          if (g != null) if (typeof g == "object") if (i[f]) d = _r(d, A(f, g, n, i));
          else {
            const h = st({
              theme: n
            }, g, (F) => ({
              [f]: F
            }));
            PB(h, g) ? d[f] = e({
              sx: g,
              theme: n,
              nested: true
            }) : d = _r(d, h);
          }
          else d = _r(d, A(f, g, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": pl(n, Ea(u, d))
        } : pl(n, Ea(u, d));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const Qt = NB();
  Qt.filterProps = [
    "sx"
  ];
  function VB(A, e) {
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
  ks = function(A = {}, ...e) {
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = Zg(t), s = Ou(n);
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
        ...tB,
        ...o
      }
    }, i);
    return l = eB(l), l.applyStyles = VB, l = e.reduce((c, u) => ae(c, u), l), l.unstable_sxConfig = {
      ...gn,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, l.unstable_sx = function(u) {
      return Qt({
        sx: u,
        theme: this
      });
    }, l;
  };
  function $B(A) {
    return Object.keys(A).length === 0;
  }
  function Os(A = null) {
    const e = p.useContext(cn);
    return !e || $B(e) ? A : e;
  }
  const WB = ks();
  Ks = function(A = WB) {
    return Os(A);
  };
  function Gi(A) {
    const e = Ct(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function Ku({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = Ks(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => Gi(typeof i == "function" ? i(n) : i)) : o = Gi(o)), L.jsx(Su, {
      styles: o
    });
  }
  const jB = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? gn;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  Ru = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = jB(t);
    let o;
    return Array.isArray(e) ? o = [
      r,
      ...e
    ] : typeof e == "function" ? o = (...i) => {
      const a = e(...i);
      return We(a) ? {
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
  const wl = (A) => A, XB = () => {
    let A = wl;
    return {
      configure(e) {
        A = e;
      },
      generate(e) {
        return A(e);
      },
      reset() {
        A = wl;
      }
    };
  }, Du = XB();
  function Mu(A) {
    var e, t, r = "";
    if (typeof A == "string" || typeof A == "number") r += A;
    else if (typeof A == "object") if (Array.isArray(A)) {
      var n = A.length;
      for (e = 0; e < n; e++) A[e] && (t = Mu(A[e])) && (r && (r += " "), r += t);
    } else for (t in A) A[t] && (r && (r += " "), r += t);
    return r;
  }
  bA = function() {
    for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = Mu(A)) && (r && (r += " "), r += e);
    return r;
  };
  function zB(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = xu("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(Qt);
    return p.forwardRef(function(s, l) {
      const c = Ks(t), { className: u, component: d = "div", ...f } = Ru(s);
      return L.jsx(o, {
        as: d,
        ref: l,
        className: bA(u, n ? n(r) : r),
        theme: e && c[e] || c,
        ...f
      });
    });
  }
  const YB = {
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
  ke = function(A, e, t = "Mui") {
    const r = YB[e];
    return r ? `${t}-${r}` : `${Du.generate(A)}-${e}`;
  };
  Ce = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = ke(A, n, t);
    }), r;
  };
  function _u(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: Ct(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = Ct(n.style));
    }), r;
  }
  const JB = ks();
  function Ni(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  }
  function Ot(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function ZB(A) {
    return A ? (e, t) => t[A] : null;
  }
  function qB(A, e, t) {
    A.theme = th(A.theme) ? t : A.theme[e] || A.theme;
  }
  function lo(A, e, t) {
    const r = typeof e == "function" ? e(A) : e;
    if (Array.isArray(r)) return r.flatMap((n) => lo(A, n, t));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
      let n;
      if (r.isProcessed) n = t ? Ot(r.style, t) : r.style;
      else {
        const { variants: o, ...i } = r;
        n = t ? Ot(Ct(i), t) : i;
      }
      return Pu(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? Ot(Ct(r.style), t) : r.style : t ? Ot(Ct(r), t) : r;
  }
  function Pu(A, e, t = [], r = void 0) {
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
      }, t.push(r ? Ot(Ct(i.style(n)), r) : i.style(n))) : t.push(r ? Ot(Ct(i.style), r) : i.style);
    }
    return t;
  }
  Ah = function(A = {}) {
    const { themeId: e, defaultTheme: t = JB, rootShouldForwardProp: r = Ni, slotShouldForwardProp: n = Ni } = A;
    function o(a) {
      qB(a, e, t);
    }
    return (a, s = {}) => {
      Xg(a, (v) => v.filter((U) => U !== Qt));
      const { name: l, slot: c, skipVariantsResolver: u, skipSx: d, overridesResolver: f = ZB(nh(c)), ...g } = s, h = l && l.startsWith("Mui") || c ? "components" : "custom", F = u !== void 0 ? u : c && c !== "Root" && c !== "root" || false, w = d || false;
      let C = Ni;
      c === "Root" || c === "root" ? C = r : c ? C = n : rh(a) && (C = void 0);
      const b = xu(a, {
        shouldForwardProp: C,
        label: eh(),
        ...g
      }), Q = (v) => {
        if (v.__emotion_real === v) return v;
        if (typeof v == "function") return function(T) {
          return lo(T, v, T.theme.modularCssLayers ? h : void 0);
        };
        if (We(v)) {
          const U = _u(v);
          return function(I) {
            return U.variants ? lo(I, U, I.theme.modularCssLayers ? h : void 0) : I.theme.modularCssLayers ? Ot(U.style, h) : U.style;
          };
        }
        return v;
      }, S = (...v) => {
        const U = [], T = v.map(Q), I = [];
        if (U.push(o), l && f && I.push(function(O) {
          var _a2, _b2;
          const M = (_b2 = (_a2 = O.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b2.styleOverrides;
          if (!M) return null;
          const k = {};
          for (const Y in M) k[Y] = lo(O, M[Y], O.theme.modularCssLayers ? "theme" : void 0);
          return f(O, k);
        }), l && !F && I.push(function(O) {
          var _a2, _b2, _c2;
          const M = (_c2 = (_b2 = (_a2 = O.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[l]) == null ? void 0 : _c2.variants;
          return M ? Pu(O, M, [], O.theme.modularCssLayers ? "theme" : void 0) : null;
        }), w || I.push(Qt), Array.isArray(T[0])) {
          const R = T.shift(), O = new Array(U.length).fill(""), _ = new Array(I.length).fill("");
          let M;
          M = [
            ...O,
            ...R,
            ..._
          ], M.raw = [
            ...O,
            ...R.raw,
            ..._
          ], U.unshift(M);
        }
        const B = [
          ...U,
          ...T,
          ...I
        ], H = b(...B);
        return a.muiName && (H.muiName = a.muiName), H;
      };
      return b.withConfig && (S.withConfig = b.withConfig), S;
    };
  };
  function eh(A, e) {
    return void 0;
  }
  function th(A) {
    for (const e in A) return false;
    return true;
  }
  function rh(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function nh(A) {
    return A && A.charAt(0).toLowerCase() + A.slice(1);
  }
  Sa = function(A, e) {
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
            t[n][s] = Sa(o[s], i[s]);
          }
        }
      } else t[n] === void 0 && (t[n] = A[n]);
    }
    return t;
  };
  Br = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
  function nr(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  }
  function Rs(A, e = 0, t = 1) {
    return nr(A, e, t);
  }
  function oh(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function Ft(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return Ft(oh(A));
    const e = A.indexOf("("), t = A.substring(0, e);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(t)) throw new Error(Pt(9, A));
    let r = A.substring(e + 1, A.length - 1), n;
    if (t === "color") {
      if (r = r.split(" "), n = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(n)) throw new Error(Pt(10, n));
    } else r = r.split(",");
    return r = r.map((o) => parseFloat(o)), {
      type: t,
      values: r,
      colorSpace: n
    };
  }
  const ih = (A) => {
    const e = Ft(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, Ir = (A, e) => {
    try {
      return ih(A);
    } catch {
      return A;
    }
  };
  function Ci(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function Gu(A) {
    A = Ft(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (l, c = (l + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const s = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", s.push(e[3])), Ci({
      type: a,
      values: s
    });
  }
  function xa(A) {
    A = Ft(A);
    let e = A.type === "hsl" || A.type === "hsla" ? Ft(Gu(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function ah(A, e) {
    const t = xa(A), r = xa(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  Ut = function(A, e) {
    return A = Ft(A), e = Rs(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, Ci(A);
  };
  function yn(A, e, t) {
    try {
      return Ut(A, e);
    } catch {
      return A;
    }
  }
  en = function(A, e) {
    if (A = Ft(A), e = Rs(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return Ci(A);
  };
  function SA(A, e, t) {
    try {
      return en(A, e);
    } catch {
      return A;
    }
  }
  tn = function(A, e) {
    if (A = Ft(A), e = Rs(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return Ci(A);
  };
  function xA(A, e, t) {
    try {
      return tn(A, e);
    } catch {
      return A;
    }
  }
  function sh(A, e = 0.15) {
    return xa(A) > 0.5 ? en(A, e) : tn(A, e);
  }
  function bn(A, e, t) {
    try {
      return sh(A, e);
    } catch {
      return A;
    }
  }
  Cl = function(...A) {
    return A.reduce((e, t) => t == null ? e : function(...n) {
      e.apply(this, n), t.apply(this, n);
    }, () => {
    });
  };
  lh = function(A, e = 166) {
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
  };
  me = function(A) {
    return A && A.ownerDocument || document;
  };
  hr = function(A) {
    return me(A).defaultView || window;
  };
  function yl(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  }
  let bl = 0;
  function ch(A) {
    const [e, t] = p.useState(A), r = A || e;
    return p.useEffect(() => {
      e == null && (bl += 1, t(`mui-${bl}`));
    }, [
      e
    ]), r;
  }
  const uh = {
    ...ya
  }, Ql = uh.useId;
  Nu = function(A) {
    if (Ql !== void 0) {
      const e = Ql();
      return A ?? e;
    }
    return ch(A);
  };
  dh = function({ controlled: A, default: e, name: t, state: r = "value" }) {
    const { current: n } = p.useRef(A !== void 0), [o, i] = p.useState(e), a = n ? A : o, s = p.useCallback((l) => {
      n || i(l);
    }, []);
    return [
      a,
      s
    ];
  };
  it = function(A) {
    const e = p.useRef(A);
    return Br(() => {
      e.current = A;
    }), p.useRef((...t) => (0, e.current)(...t)).current;
  };
  Ye = function(...A) {
    const e = p.useRef(void 0), t = p.useCallback((r) => {
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
    return p.useMemo(() => A.every((r) => r == null) ? null : (r) => {
      e.current && (e.current(), e.current = void 0), r != null && (e.current = t(r));
    }, A);
  };
  const Fl = {};
  function Vu(A, e) {
    const t = p.useRef(Fl);
    return t.current === Fl && (t.current = A(e)), t;
  }
  const fh = [];
  function gh(A) {
    p.useEffect(A, fh);
  }
  class Ds {
    static create() {
      return new Ds();
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
  function $u() {
    const A = Vu(Ds.create).current;
    return gh(A.disposeEffect), A;
  }
  function wo(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  }
  Bh = function(A = window) {
    const e = A.document.documentElement.clientWidth;
    return A.innerWidth - e;
  };
  const hh = {
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
  Ke = function(A, e, t = void 0) {
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
  function ph(A) {
    return typeof A == "string";
  }
  function Wu(A, e, t) {
    return A === void 0 || ph(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  function Pr(A, e = []) {
    if (A === void 0) return {};
    const t = {};
    return Object.keys(A).filter((r) => r.match(/^on[A-Z]/) && typeof A[r] == "function" && !e.includes(r)).forEach((r) => {
      t[r] = A[r];
    }), t;
  }
  function Ul(A) {
    if (A === void 0) return {};
    const e = {};
    return Object.keys(A).filter((t) => !(t.match(/^on[A-Z]/) && typeof A[t] == "function")).forEach((t) => {
      e[t] = A[t];
    }), e;
  }
  function ju(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const f = bA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), g = {
        ...t == null ? void 0 : t.style,
        ...n == null ? void 0 : n.style,
        ...r == null ? void 0 : r.style
      }, h = {
        ...t,
        ...n,
        ...r
      };
      return f.length > 0 && (h.className = f), Object.keys(g).length > 0 && (h.style = g), {
        props: h,
        internalRef: void 0
      };
    }
    const i = Pr({
      ...n,
      ...r
    }), a = Ul(r), s = Ul(n), l = e(i), c = bA(l == null ? void 0 : l.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), u = {
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
  function Xu(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  }
  ut = function(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : Xu(t, r), { props: a, internalRef: s } = ju({
      ...o,
      externalSlotProps: i
    }), l = Ye(s, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return Wu(e, {
      ...a,
      ref: l
    }, r);
  };
  yi = function(A) {
    var _a2;
    return parseInt(p.version, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  };
  const zu = p.createContext(null);
  function Ms() {
    return p.useContext(zu);
  }
  const vh = typeof Symbol == "function" && Symbol.for, mh = vh ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function wh(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function Ch(A) {
    const { children: e, theme: t } = A, r = Ms(), n = p.useMemo(() => {
      const o = r === null ? {
        ...t
      } : wh(r, t);
      return o != null && (o[mh] = r !== null), o;
    }, [
      t,
      r
    ]);
    return L.jsx(zu.Provider, {
      value: n,
      children: e
    });
  }
  const Yu = p.createContext();
  function yh({ value: A, ...e }) {
    return L.jsx(Yu.Provider, {
      value: A ?? true,
      ...e
    });
  }
  let Ju;
  bh = () => p.useContext(Yu) ?? false;
  Ju = p.createContext(void 0);
  function Qh({ value: A, children: e }) {
    return L.jsx(Ju.Provider, {
      value: A,
      children: e
    });
  }
  function Fh(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? Sa(n.defaultProps, r) : !n.styleOverrides && !n.variants ? Sa(n, r) : r;
  }
  function Uh({ props: A, name: e }) {
    const t = p.useContext(Ju);
    return Fh({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function Eh(A) {
    const e = Os(), t = Nu() || "", { modularCssLayers: r } = A;
    let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
    return !r || e !== null ? n = "" : typeof r == "string" ? n = r.replace(/mui(?!\.)/g, n) : n = `@layer ${n};`, Br(() => {
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
    ]), n ? L.jsx(Ku, {
      styles: n
    }) : null;
  }
  const El = {};
  function Sl(A, e, t, r = false) {
    return p.useMemo(() => {
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
  function Zu(A) {
    const { children: e, theme: t, themeId: r } = A, n = Os(El), o = Ms() || El, i = Sl(r, n, t), a = Sl(r, o, t, true), s = (r ? i[r] : i).direction === "rtl", l = Eh(i);
    return L.jsx(Ch, {
      theme: a,
      children: L.jsx(cn.Provider, {
        value: i,
        children: L.jsx(yh, {
          value: s,
          children: L.jsxs(Qh, {
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
  const xl = {
    theme: void 0
  };
  function Sh(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (xl.theme = n.theme, o = _u(A(xl)), e = o, t = n.theme), o;
    };
  }
  const _s = "mode", Ps = "color-scheme", xh = "data-color-scheme";
  function Ih(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = _s, colorSchemeStorageKey: o = Ps, attribute: i = xh, colorSchemeNode: a = "document.documentElement", nonce: s } = A || {};
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
    return L.jsx("script", {
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
  function Hh() {
  }
  const Th = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
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
      if (!e) return Hh;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function Vi() {
  }
  function Il(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function qu(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function Lh(A) {
    return qu(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function kh(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = _s, colorSchemeStorageKey: i = Ps, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: s = Th, noSsr: l = false } = A, c = n.join(","), u = n.length > 1, d = p.useMemo(() => s == null ? void 0 : s({
      key: o,
      storageWindow: a
    }), [
      s,
      o,
      a
    ]), f = p.useMemo(() => s == null ? void 0 : s({
      key: `${i}-light`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), g = p.useMemo(() => s == null ? void 0 : s({
      key: `${i}-dark`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), [h, F] = p.useState(() => {
      const T = (d == null ? void 0 : d.get(e)) || e, I = (f == null ? void 0 : f.get(t)) || t, B = (g == null ? void 0 : g.get(r)) || r;
      return {
        mode: T,
        systemMode: Il(T),
        lightColorScheme: I,
        darkColorScheme: B
      };
    }), [w, C] = p.useState(l || !u);
    p.useEffect(() => {
      C(true);
    }, []);
    const b = Lh(h), Q = p.useCallback((T) => {
      F((I) => {
        if (T === I.mode) return I;
        const B = T ?? e;
        return d == null ? void 0 : d.set(B), {
          ...I,
          mode: B,
          systemMode: Il(B)
        };
      });
    }, [
      d,
      e
    ]), S = p.useCallback((T) => {
      T ? typeof T == "string" ? T && !c.includes(T) ? console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`) : F((I) => {
        const B = {
          ...I
        };
        return qu(I, (H) => {
          H === "light" && (f == null ? void 0 : f.set(T), B.lightColorScheme = T), H === "dark" && (g == null ? void 0 : g.set(T), B.darkColorScheme = T);
        }), B;
      }) : F((I) => {
        const B = {
          ...I
        }, H = T.light === null ? t : T.light, R = T.dark === null ? r : T.dark;
        return H && (c.includes(H) ? (B.lightColorScheme = H, f == null ? void 0 : f.set(H)) : console.error(`\`${H}\` does not exist in \`theme.colorSchemes\`.`)), R && (c.includes(R) ? (B.darkColorScheme = R, g == null ? void 0 : g.set(R)) : console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`)), B;
      }) : F((I) => (f == null ? void 0 : f.set(t), g == null ? void 0 : g.set(r), {
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
    ]), v = p.useCallback((T) => {
      h.mode === "system" && F((I) => {
        const B = (T == null ? void 0 : T.matches) ? "dark" : "light";
        return I.systemMode === B ? I : {
          ...I,
          systemMode: B
        };
      });
    }, [
      h.mode
    ]), U = p.useRef(v);
    return U.current = v, p.useEffect(() => {
      if (typeof window.matchMedia != "function" || !u) return;
      const T = (...B) => U.current(...B), I = window.matchMedia("(prefers-color-scheme: dark)");
      return I.addListener(T), T(I), () => {
        I.removeListener(T);
      };
    }, [
      u
    ]), p.useEffect(() => {
      if (u) {
        const T = (d == null ? void 0 : d.subscribe((H) => {
          (!H || [
            "light",
            "dark",
            "system"
          ].includes(H)) && Q(H || e);
        })) || Vi, I = (f == null ? void 0 : f.subscribe((H) => {
          (!H || c.match(H)) && S({
            light: H
          });
        })) || Vi, B = (g == null ? void 0 : g.subscribe((H) => {
          (!H || c.match(H)) && S({
            dark: H
          });
        })) || Vi;
        return () => {
          T(), I(), B();
        };
      }
    }, [
      S,
      Q,
      c,
      e,
      a,
      u,
      d,
      f,
      g
    ]), {
      ...h,
      mode: w ? h.mode : void 0,
      systemMode: w ? h.systemMode : void 0,
      colorScheme: w ? b : void 0,
      setMode: Q,
      setColorScheme: S
    };
  }
  const Oh = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function Kh(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = _s, colorSchemeStorageKey: n = Ps, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, s = {
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
    }, l = p.createContext(void 0), c = () => p.useContext(l) || s, u = {}, d = {};
    function f(w) {
      var _a2, _b2, _c2, _d2;
      const { children: C, theme: b, modeStorageKey: Q = r, colorSchemeStorageKey: S = n, disableTransitionOnChange: v = o, storageManager: U, storageWindow: T = typeof window > "u" ? void 0 : window, documentNode: I = typeof document > "u" ? void 0 : document, colorSchemeNode: B = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: H = false, disableStyleSheetGeneration: R = false, defaultMode: O = "system", noSsr: _ } = w, M = p.useRef(false), k = Ms(), Y = p.useContext(l), z = !!Y && !H, W = p.useMemo(() => b || (typeof t == "function" ? t() : t), [
        b
      ]), V = W[e], J = V || W, { colorSchemes: oA = u, components: K = d, cssVarPrefix: AA } = J, Z = Object.keys(oA).filter((aA) => !!oA[aA]).join(","), rA = p.useMemo(() => Z.split(","), [
        Z
      ]), pA = typeof i == "string" ? i : i.light, uA = typeof i == "string" ? i : i.dark, sA = oA[pA] && oA[uA] ? O : ((_b2 = (_a2 = oA[J.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = J.palette) == null ? void 0 : _c2.mode), { mode: eA, setMode: lA, systemMode: dA, lightColorScheme: m, darkColorScheme: E, colorScheme: y, setColorScheme: P } = kh({
        supportedColorSchemes: rA,
        defaultLightColorScheme: pA,
        defaultDarkColorScheme: uA,
        modeStorageKey: Q,
        colorSchemeStorageKey: S,
        defaultMode: sA,
        storageManager: U,
        storageWindow: T,
        noSsr: _
      });
      let j = eA, $ = y;
      z && (j = Y.mode, $ = Y.colorScheme);
      const fA = p.useMemo(() => {
        var _a3;
        const aA = $ || J.defaultColorScheme, X = ((_a3 = J.generateThemeVars) == null ? void 0 : _a3.call(J)) || J.vars, q = {
          ...J,
          components: K,
          colorSchemes: oA,
          cssVarPrefix: AA,
          vars: X
        };
        if (typeof q.generateSpacing == "function" && (q.spacing = q.generateSpacing()), aA) {
          const cA = oA[aA];
          cA && typeof cA == "object" && Object.keys(cA).forEach((hA) => {
            cA[hA] && typeof cA[hA] == "object" ? q[hA] = {
              ...q[hA],
              ...cA[hA]
            } : q[hA] = cA[hA];
          });
        }
        return a ? a(q) : q;
      }, [
        J,
        $,
        K,
        oA,
        AA
      ]), BA = J.colorSchemeSelector;
      Br(() => {
        if ($ && B && BA && BA !== "media") {
          const aA = BA;
          let X = BA;
          if (aA === "class" && (X = ".%s"), aA === "data" && (X = "[data-%s]"), (aA == null ? void 0 : aA.startsWith("data-")) && !aA.includes("%s") && (X = `[${aA}="%s"]`), X.startsWith(".")) B.classList.remove(...rA.map((q) => X.substring(1).replace("%s", q))), B.classList.add(X.substring(1).replace("%s", $));
          else {
            const q = X.replace("%s", $).match(/\[([^\]]+)\]/);
            if (q) {
              const [cA, hA] = q[1].split("=");
              hA || rA.forEach((wA) => {
                B.removeAttribute(cA.replace($, wA));
              }), B.setAttribute(cA, hA ? hA.replace(/"|'/g, "") : "");
            } else B.setAttribute(X, $);
          }
        }
      }, [
        $,
        BA,
        B,
        rA
      ]), p.useEffect(() => {
        let aA;
        if (v && M.current && I) {
          const X = I.createElement("style");
          X.appendChild(I.createTextNode(Oh)), I.head.appendChild(X), window.getComputedStyle(I.body), aA = setTimeout(() => {
            I.head.removeChild(X);
          }, 1);
        }
        return () => {
          clearTimeout(aA);
        };
      }, [
        $,
        v,
        I
      ]), p.useEffect(() => (M.current = true, () => {
        M.current = false;
      }), []);
      const G = p.useMemo(() => ({
        allColorSchemes: rA,
        colorScheme: $,
        darkColorScheme: E,
        lightColorScheme: m,
        mode: j,
        setColorScheme: P,
        setMode: lA,
        systemMode: dA
      }), [
        rA,
        $,
        E,
        m,
        j,
        P,
        lA,
        dA,
        fA.colorSchemeSelector
      ]);
      let N = true;
      (R || J.cssVariables === false || z && (k == null ? void 0 : k.cssVarPrefix) === AA) && (N = false);
      const gA = L.jsxs(p.Fragment, {
        children: [
          L.jsx(Zu, {
            themeId: V ? e : void 0,
            theme: fA,
            children: C
          }),
          N && L.jsx(Su, {
            styles: ((_d2 = fA.generateStyleSheets) == null ? void 0 : _d2.call(fA)) || []
          })
        ]
      });
      return z ? gA : L.jsx(l.Provider, {
        value: G,
        children: gA
      });
    }
    const g = typeof i == "string" ? i : i.light, h = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: f,
      useColorScheme: c,
      getInitColorSchemeScript: (w) => Ih({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: g,
        defaultDarkColorScheme: h,
        modeStorageKey: r,
        ...w
      })
    };
  }
  function Rh(A = "") {
    function e(...r) {
      if (!r.length) return "";
      const n = r[0];
      return typeof n == "string" && !n.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${A ? `${A}-` : ""}${n}${e(...r.slice(1))})` : `, ${n}`;
    }
    return (r, ...n) => `var(--${A ? `${A}-` : ""}${r}${e(...n)})`;
  }
  const Hl = (A, e, t, r = []) => {
    let n = A;
    e.forEach((o, i) => {
      i === e.length - 1 ? Array.isArray(n) ? n[Number(o)] = t : n && typeof n == "object" && (n[o] = t) : n && typeof n == "object" && (n[o] || (n[o] = r.includes(o) ? [] : {}), n = n[o]);
    });
  }, Dh = (A, e, t) => {
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
  }, Mh = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function $i(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return Dh(A, (a, s, l) => {
      if ((typeof s == "string" || typeof s == "number") && (!r || !r(a, s))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, u = Mh(a, s);
        Object.assign(n, {
          [c]: u
        }), Hl(o, a, `var(${c})`, l), Hl(i, a, `var(${c}, ${u})`, l);
      }
    }, (a) => a[0] === "vars"), {
      css: n,
      vars: o,
      varsWithDefaults: i
    };
  }
  function _h(A, e = {}) {
    const { getSelector: t = F, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...s } = A, { vars: l, css: c, varsWithDefaults: u } = $i(s, e);
    let d = u;
    const f = {}, { [a]: g, ...h } = o;
    if (Object.entries(h || {}).forEach(([b, Q]) => {
      const { vars: S, css: v, varsWithDefaults: U } = $i(Q, e);
      d = ae(d, U), f[b] = {
        css: v,
        vars: S
      };
    }), g) {
      const { css: b, vars: Q, varsWithDefaults: S } = $i(g, e);
      d = ae(d, S), f[a] = {
        css: b,
        vars: Q
      };
    }
    function F(b, Q) {
      var _a2, _b2;
      let S = n;
      if (n === "class" && (S = ".%s"), n === "data" && (S = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (S = `[${n}="%s"]`), b) {
        if (S === "media") return A.defaultColorScheme === b ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b2 = (_a2 = o[b]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || b})`]: {
            ":root": Q
          }
        };
        if (S) return A.defaultColorScheme === b ? `:root, ${S.replace("%s", String(b))}` : S.replace("%s", String(b));
      }
      return ":root";
    }
    return {
      vars: d,
      generateThemeVars: () => {
        let b = {
          ...l
        };
        return Object.entries(f).forEach(([, { vars: Q }]) => {
          b = ae(b, Q);
        }), b;
      },
      generateStyleSheets: () => {
        var _a2, _b2;
        const b = [], Q = A.defaultColorScheme || "light";
        function S(T, I) {
          Object.keys(I).length && b.push(typeof T == "string" ? {
            [T]: {
              ...I
            }
          } : T);
        }
        S(t(void 0, {
          ...c
        }), c);
        const { [Q]: v, ...U } = f;
        if (v) {
          const { css: T } = v, I = (_b2 = (_a2 = o[Q]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, B = !r && I ? {
            colorScheme: I,
            ...T
          } : {
            ...T
          };
          S(t(Q, {
            ...B
          }), B);
        }
        return Object.entries(U).forEach(([T, { css: I }]) => {
          var _a3, _b3;
          const B = (_b3 = (_a3 = o[T]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, H = !r && B ? {
            colorScheme: B,
            ...I
          } : {
            ...I
          };
          S(t(T, {
            ...H
          }), H);
        }), b;
      }
    };
  }
  function Ph(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function Ad() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: Jr.white,
        default: Jr.white
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
  const Gh = Ad();
  function ed() {
    return {
      text: {
        primary: Jr.white,
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
        active: Jr.white,
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
  const Tl = ed();
  function Ll(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = tn(A.main, n) : e === "dark" && (A.dark = en(A.main, o)));
  }
  function Nh(A = "light") {
    return A === "dark" ? {
      main: Wt[200],
      light: Wt[50],
      dark: Wt[400]
    } : {
      main: Wt[700],
      light: Wt[400],
      dark: Wt[800]
    };
  }
  function Vh(A = "light") {
    return A === "dark" ? {
      main: $t[200],
      light: $t[50],
      dark: $t[400]
    } : {
      main: $t[500],
      light: $t[300],
      dark: $t[700]
    };
  }
  function $h(A = "light") {
    return A === "dark" ? {
      main: Vt[500],
      light: Vt[300],
      dark: Vt[700]
    } : {
      main: Vt[700],
      light: Vt[400],
      dark: Vt[800]
    };
  }
  function Wh(A = "light") {
    return A === "dark" ? {
      main: jt[400],
      light: jt[300],
      dark: jt[700]
    } : {
      main: jt[700],
      light: jt[500],
      dark: jt[900]
    };
  }
  function jh(A = "light") {
    return A === "dark" ? {
      main: Xt[400],
      light: Xt[300],
      dark: Xt[700]
    } : {
      main: Xt[800],
      light: Xt[500],
      dark: Xt[900]
    };
  }
  function Xh(A = "light") {
    return A === "dark" ? {
      main: br[400],
      light: br[300],
      dark: br[700]
    } : {
      main: "#ed6c02",
      light: br[500],
      dark: br[900]
    };
  }
  function Gs(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || Nh(e), i = A.secondary || Vh(e), a = A.error || $h(e), s = A.info || Wh(e), l = A.success || jh(e), c = A.warning || Xh(e);
    function u(h) {
      return ah(h, Tl.text.primary) >= t ? Tl.text.primary : Gh.text.primary;
    }
    const d = ({ color: h, name: F, mainShade: w = 500, lightShade: C = 300, darkShade: b = 700 }) => {
      if (h = {
        ...h
      }, !h.main && h[w] && (h.main = h[w]), !h.hasOwnProperty("main")) throw new Error(Pt(11, F ? ` (${F})` : "", w));
      if (typeof h.main != "string") throw new Error(Pt(12, F ? ` (${F})` : "", JSON.stringify(h.main)));
      return Ll(h, "light", C, r), Ll(h, "dark", b, r), h.contrastText || (h.contrastText = u(h.main)), h;
    };
    let f;
    return e === "light" ? f = Ad() : e === "dark" && (f = ed()), ae({
      common: {
        ...Jr
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
      grey: Vf,
      contrastThreshold: t,
      getContrastText: u,
      augmentColor: d,
      tonalOffset: r,
      ...f
    }, n);
  }
  function zh(A) {
    const e = {};
    return Object.entries(A).forEach((r) => {
      const [n, o] = r;
      typeof o == "object" && (e[n] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), e;
  }
  function Yh(A, e) {
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
  function Jh(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const kl = {
    textTransform: "uppercase"
  }, Ol = '"Roboto", "Helvetica", "Arial", sans-serif';
  function td(A, e) {
    const { fontFamily: t = Ol, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: s = 16, allVariants: l, pxToRem: c, ...u } = typeof e == "function" ? e(A) : e, d = r / 14, f = c || ((F) => `${F / s * d}rem`), g = (F, w, C, b, Q) => ({
      fontFamily: t,
      fontWeight: F,
      fontSize: f(w),
      lineHeight: C,
      ...t === Ol ? {
        letterSpacing: `${Jh(b / w)}em`
      } : {},
      ...Q,
      ...l
    }), h = {
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
      button: g(i, 14, 1.75, 0.4, kl),
      caption: g(o, 12, 1.66, 0.4),
      overline: g(o, 12, 2.66, 1, kl),
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
      ...h
    }, u, {
      clone: false
    });
  }
  const Zh = 0.2, qh = 0.14, Ap = 0.12;
  function OA(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${Zh})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${qh})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${Ap})`
    ].join(",");
  }
  const ep = [
    "none",
    OA(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    OA(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    OA(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    OA(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    OA(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    OA(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    OA(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    OA(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    OA(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    OA(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    OA(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    OA(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    OA(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    OA(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    OA(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    OA(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    OA(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    OA(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    OA(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    OA(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    OA(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    OA(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    OA(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    OA(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ], tp = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  }, rp = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function Kl(A) {
    return `${Math.round(A)}ms`;
  }
  function np(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function op(A) {
    const e = {
      ...tp,
      ...A.easing
    }, t = {
      ...rp,
      ...A.duration
    };
    return {
      getAutoHeightDuration: np,
      create: (n = [
        "all"
      ], o = {}) => {
        const { duration: i = t.standard, easing: a = e.easeInOut, delay: s = 0, ...l } = o;
        return (Array.isArray(n) ? n : [
          n
        ]).map((c) => `${c} ${typeof i == "string" ? i : Kl(i)} ${a} ${typeof s == "string" ? s : Kl(s)}`).join(",");
      },
      ...A,
      easing: e,
      duration: t
    };
  }
  const ip = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function ap(A) {
    return We(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function rd(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !ap(a) || i.startsWith("unstable_") ? delete r[i] : We(a) && (r[i] = {
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
  function Ia(A = {}, ...e) {
    const { breakpoints: t, mixins: r = {}, spacing: n, palette: o = {}, transitions: i = {}, typography: a = {}, shape: s, ...l } = A;
    if (A.vars && A.generateThemeVars === void 0) throw new Error(Pt(20));
    const c = Gs(o), u = ks(A);
    let d = ae(u, {
      mixins: Yh(u.breakpoints, r),
      palette: c,
      shadows: ep.slice(),
      typography: td(c, a),
      transitions: op(i),
      zIndex: {
        ...ip
      }
    });
    return d = ae(d, l), d = e.reduce((f, g) => ae(f, g), d), d.unstable_sxConfig = {
      ...gn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, d.unstable_sx = function(g) {
      return Qt({
        sx: g,
        theme: this
      });
    }, d.toRuntimeSource = rd, d;
  }
  function Ha(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const sp = [
    ...Array(25)
  ].map((A, e) => {
    if (e === 0) return "none";
    const t = Ha(e);
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
  });
  function nd(A) {
    return {
      inputPlaceholder: A === "dark" ? 0.5 : 0.42,
      inputUnderline: A === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: A === "dark" ? 0.2 : 0.12,
      switchTrack: A === "dark" ? 0.3 : 0.38
    };
  }
  function od(A) {
    return A === "dark" ? sp : [];
  }
  function lp(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = Gs(e);
    return {
      palette: o,
      opacity: {
        ...nd(o.mode),
        ...t
      },
      overlays: r || od(o.mode),
      ...n
    };
  }
  function cp(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const up = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], dp = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return up(A.cssVarPrefix).forEach((a) => {
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
  function fp(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function D(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function Hr(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : Gu(A);
  }
  function tt(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = Ir(Hr(A[e])));
  }
  function gp(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const Me = (A) => {
    try {
      return A();
    } catch {
    }
  }, Bp = (A = "mui") => Rh(A);
  function Wi(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = lp({
        ...e,
        palette: {
          mode: n,
          ...e == null ? void 0 : e.palette
        }
      });
      return;
    }
    const { palette: o, ...i } = Ia({
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
        ...nd(n),
        ...e == null ? void 0 : e.opacity
      },
      overlays: (e == null ? void 0 : e.overlays) || od(n)
    }, i;
  }
  function hp(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = cp, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: s = ":root", ...l } = A, c = Object.keys(t)[0], u = r || (t.light && c !== "light" ? "light" : c), d = Bp(o), { [u]: f, light: g, dark: h, ...F } = t, w = {
      ...F
    };
    let C = f;
    if ((u === "dark" && !("dark" in t) || u === "light" && !("light" in t)) && (C = true), !C) throw new Error(Pt(21, u));
    const b = Wi(w, C, l, u);
    g && !w.light && Wi(w, g, void 0, "light"), h && !w.dark && Wi(w, h, void 0, "dark");
    let Q = {
      defaultColorScheme: u,
      ...b,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: s,
      getCssVar: d,
      colorSchemes: w,
      font: {
        ...zh(b.typography),
        ...b.font
      },
      spacing: gp(l.spacing)
    };
    Object.keys(Q.colorSchemes).forEach((I) => {
      const B = Q.colorSchemes[I].palette, H = (R) => {
        const O = R.split("-"), _ = O[1], M = O[2];
        return d(R, B[_][M]);
      };
      if (B.mode === "light" && (D(B.common, "background", "#fff"), D(B.common, "onBackground", "#000")), B.mode === "dark" && (D(B.common, "background", "#000"), D(B.common, "onBackground", "#fff")), fp(B, [
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
        D(B.Alert, "errorColor", SA(B.error.light, 0.6)), D(B.Alert, "infoColor", SA(B.info.light, 0.6)), D(B.Alert, "successColor", SA(B.success.light, 0.6)), D(B.Alert, "warningColor", SA(B.warning.light, 0.6)), D(B.Alert, "errorFilledBg", H("palette-error-main")), D(B.Alert, "infoFilledBg", H("palette-info-main")), D(B.Alert, "successFilledBg", H("palette-success-main")), D(B.Alert, "warningFilledBg", H("palette-warning-main")), D(B.Alert, "errorFilledColor", Me(() => B.getContrastText(B.error.main))), D(B.Alert, "infoFilledColor", Me(() => B.getContrastText(B.info.main))), D(B.Alert, "successFilledColor", Me(() => B.getContrastText(B.success.main))), D(B.Alert, "warningFilledColor", Me(() => B.getContrastText(B.warning.main))), D(B.Alert, "errorStandardBg", xA(B.error.light, 0.9)), D(B.Alert, "infoStandardBg", xA(B.info.light, 0.9)), D(B.Alert, "successStandardBg", xA(B.success.light, 0.9)), D(B.Alert, "warningStandardBg", xA(B.warning.light, 0.9)), D(B.Alert, "errorIconColor", H("palette-error-main")), D(B.Alert, "infoIconColor", H("palette-info-main")), D(B.Alert, "successIconColor", H("palette-success-main")), D(B.Alert, "warningIconColor", H("palette-warning-main")), D(B.AppBar, "defaultBg", H("palette-grey-100")), D(B.Avatar, "defaultBg", H("palette-grey-400")), D(B.Button, "inheritContainedBg", H("palette-grey-300")), D(B.Button, "inheritContainedHoverBg", H("palette-grey-A100")), D(B.Chip, "defaultBorder", H("palette-grey-400")), D(B.Chip, "defaultAvatarColor", H("palette-grey-700")), D(B.Chip, "defaultIconColor", H("palette-grey-700")), D(B.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), D(B.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), D(B.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), D(B.LinearProgress, "primaryBg", xA(B.primary.main, 0.62)), D(B.LinearProgress, "secondaryBg", xA(B.secondary.main, 0.62)), D(B.LinearProgress, "errorBg", xA(B.error.main, 0.62)), D(B.LinearProgress, "infoBg", xA(B.info.main, 0.62)), D(B.LinearProgress, "successBg", xA(B.success.main, 0.62)), D(B.LinearProgress, "warningBg", xA(B.warning.main, 0.62)), D(B.Skeleton, "bg", `rgba(${H("palette-text-primaryChannel")} / 0.11)`), D(B.Slider, "primaryTrack", xA(B.primary.main, 0.62)), D(B.Slider, "secondaryTrack", xA(B.secondary.main, 0.62)), D(B.Slider, "errorTrack", xA(B.error.main, 0.62)), D(B.Slider, "infoTrack", xA(B.info.main, 0.62)), D(B.Slider, "successTrack", xA(B.success.main, 0.62)), D(B.Slider, "warningTrack", xA(B.warning.main, 0.62));
        const R = bn(B.background.default, 0.8);
        D(B.SnackbarContent, "bg", R), D(B.SnackbarContent, "color", Me(() => B.getContrastText(R))), D(B.SpeedDialAction, "fabHoverBg", bn(B.background.paper, 0.15)), D(B.StepConnector, "border", H("palette-grey-400")), D(B.StepContent, "border", H("palette-grey-400")), D(B.Switch, "defaultColor", H("palette-common-white")), D(B.Switch, "defaultDisabledColor", H("palette-grey-100")), D(B.Switch, "primaryDisabledColor", xA(B.primary.main, 0.62)), D(B.Switch, "secondaryDisabledColor", xA(B.secondary.main, 0.62)), D(B.Switch, "errorDisabledColor", xA(B.error.main, 0.62)), D(B.Switch, "infoDisabledColor", xA(B.info.main, 0.62)), D(B.Switch, "successDisabledColor", xA(B.success.main, 0.62)), D(B.Switch, "warningDisabledColor", xA(B.warning.main, 0.62)), D(B.TableCell, "border", xA(yn(B.divider, 1), 0.88)), D(B.Tooltip, "bg", yn(B.grey[700], 0.92));
      }
      if (B.mode === "dark") {
        D(B.Alert, "errorColor", xA(B.error.light, 0.6)), D(B.Alert, "infoColor", xA(B.info.light, 0.6)), D(B.Alert, "successColor", xA(B.success.light, 0.6)), D(B.Alert, "warningColor", xA(B.warning.light, 0.6)), D(B.Alert, "errorFilledBg", H("palette-error-dark")), D(B.Alert, "infoFilledBg", H("palette-info-dark")), D(B.Alert, "successFilledBg", H("palette-success-dark")), D(B.Alert, "warningFilledBg", H("palette-warning-dark")), D(B.Alert, "errorFilledColor", Me(() => B.getContrastText(B.error.dark))), D(B.Alert, "infoFilledColor", Me(() => B.getContrastText(B.info.dark))), D(B.Alert, "successFilledColor", Me(() => B.getContrastText(B.success.dark))), D(B.Alert, "warningFilledColor", Me(() => B.getContrastText(B.warning.dark))), D(B.Alert, "errorStandardBg", SA(B.error.light, 0.9)), D(B.Alert, "infoStandardBg", SA(B.info.light, 0.9)), D(B.Alert, "successStandardBg", SA(B.success.light, 0.9)), D(B.Alert, "warningStandardBg", SA(B.warning.light, 0.9)), D(B.Alert, "errorIconColor", H("palette-error-main")), D(B.Alert, "infoIconColor", H("palette-info-main")), D(B.Alert, "successIconColor", H("palette-success-main")), D(B.Alert, "warningIconColor", H("palette-warning-main")), D(B.AppBar, "defaultBg", H("palette-grey-900")), D(B.AppBar, "darkBg", H("palette-background-paper")), D(B.AppBar, "darkColor", H("palette-text-primary")), D(B.Avatar, "defaultBg", H("palette-grey-600")), D(B.Button, "inheritContainedBg", H("palette-grey-800")), D(B.Button, "inheritContainedHoverBg", H("palette-grey-700")), D(B.Chip, "defaultBorder", H("palette-grey-700")), D(B.Chip, "defaultAvatarColor", H("palette-grey-300")), D(B.Chip, "defaultIconColor", H("palette-grey-300")), D(B.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), D(B.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), D(B.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), D(B.LinearProgress, "primaryBg", SA(B.primary.main, 0.5)), D(B.LinearProgress, "secondaryBg", SA(B.secondary.main, 0.5)), D(B.LinearProgress, "errorBg", SA(B.error.main, 0.5)), D(B.LinearProgress, "infoBg", SA(B.info.main, 0.5)), D(B.LinearProgress, "successBg", SA(B.success.main, 0.5)), D(B.LinearProgress, "warningBg", SA(B.warning.main, 0.5)), D(B.Skeleton, "bg", `rgba(${H("palette-text-primaryChannel")} / 0.13)`), D(B.Slider, "primaryTrack", SA(B.primary.main, 0.5)), D(B.Slider, "secondaryTrack", SA(B.secondary.main, 0.5)), D(B.Slider, "errorTrack", SA(B.error.main, 0.5)), D(B.Slider, "infoTrack", SA(B.info.main, 0.5)), D(B.Slider, "successTrack", SA(B.success.main, 0.5)), D(B.Slider, "warningTrack", SA(B.warning.main, 0.5));
        const R = bn(B.background.default, 0.98);
        D(B.SnackbarContent, "bg", R), D(B.SnackbarContent, "color", Me(() => B.getContrastText(R))), D(B.SpeedDialAction, "fabHoverBg", bn(B.background.paper, 0.15)), D(B.StepConnector, "border", H("palette-grey-600")), D(B.StepContent, "border", H("palette-grey-600")), D(B.Switch, "defaultColor", H("palette-grey-300")), D(B.Switch, "defaultDisabledColor", H("palette-grey-600")), D(B.Switch, "primaryDisabledColor", SA(B.primary.main, 0.55)), D(B.Switch, "secondaryDisabledColor", SA(B.secondary.main, 0.55)), D(B.Switch, "errorDisabledColor", SA(B.error.main, 0.55)), D(B.Switch, "infoDisabledColor", SA(B.info.main, 0.55)), D(B.Switch, "successDisabledColor", SA(B.success.main, 0.55)), D(B.Switch, "warningDisabledColor", SA(B.warning.main, 0.55)), D(B.TableCell, "border", SA(yn(B.divider, 1), 0.68)), D(B.Tooltip, "bg", yn(B.grey[700], 0.92));
      }
      tt(B.background, "default"), tt(B.background, "paper"), tt(B.common, "background"), tt(B.common, "onBackground"), tt(B, "divider"), Object.keys(B).forEach((R) => {
        const O = B[R];
        R !== "tonalOffset" && O && typeof O == "object" && (O.main && D(B[R], "mainChannel", Ir(Hr(O.main))), O.light && D(B[R], "lightChannel", Ir(Hr(O.light))), O.dark && D(B[R], "darkChannel", Ir(Hr(O.dark))), O.contrastText && D(B[R], "contrastTextChannel", Ir(Hr(O.contrastText))), R === "text" && (tt(B[R], "primary"), tt(B[R], "secondary")), R === "action" && (O.active && tt(B[R], "active"), O.selected && tt(B[R], "selected")));
      });
    }), Q = e.reduce((I, B) => ae(I, B), Q);
    const S = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: dp(Q)
    }, { vars: v, generateThemeVars: U, generateStyleSheets: T } = _h(Q, S);
    return Q.vars = v, Object.entries(Q.colorSchemes[Q.defaultColorScheme]).forEach(([I, B]) => {
      Q[I] = B;
    }), Q.generateThemeVars = U, Q.generateStyleSheets = T, Q.generateSpacing = function() {
      return Ou(l.spacing, Ts(this));
    }, Q.getColorSchemeSelector = Ph(a), Q.spacing = Q.generateSpacing(), Q.shouldSkipGeneratingVar = i, Q.unstable_sxConfig = {
      ...gn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, Q.unstable_sx = function(B) {
      return Qt({
        sx: B,
        theme: this
      });
    }, Q.toRuntimeSource = rd, Q;
  }
  function Rl(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: Gs({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  function bi(A = {}, ...e) {
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
      if (!("colorSchemes" in A)) return Ia(A, ...e);
      let c = t;
      "palette" in A || l[a] && (l[a] !== true ? c = l[a].palette : a === "dark" && (c = {
        mode: "dark"
      }));
      const u = Ia({
        ...A,
        palette: c
      }, ...e);
      return u.defaultColorScheme = a, u.colorSchemes = l, u.palette.mode === "light" && (u.colorSchemes.light = {
        ...l.light !== true && l.light,
        palette: u.palette
      }, Rl(u, "dark", l.dark)), u.palette.mode === "dark" && (u.colorSchemes.dark = {
        ...l.dark !== true && l.dark,
        palette: u.palette
      }, Rl(u, "light", l.light)), u;
    }
    return !t && !("light" in l) && a === "light" && (l.light = true), hp({
      ...i,
      colorSchemes: l,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  }
  const Ns = bi();
  Qi = function() {
    const A = Ks(Ns);
    return A[Xe] || A;
  };
  Vs = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  pp = (A) => Vs(A) && A !== "classes";
  kA = Ah({
    themeId: Xe,
    defaultTheme: Ns,
    rootShouldForwardProp: pp
  });
  function vp({ theme: A, ...e }) {
    const t = Xe in A ? A[Xe] : void 0;
    return L.jsx(Zu, {
      ...e,
      themeId: t ? Xe : void 0,
      theme: t || A
    });
  }
  const Qn = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: mp } = Kh({
    themeId: Xe,
    theme: () => bi({
      cssVariables: true
    }),
    colorSchemeStorageKey: Qn.colorSchemeStorageKey,
    modeStorageKey: Qn.modeStorageKey,
    defaultColorScheme: {
      light: Qn.defaultLightColorScheme,
      dark: Qn.defaultDarkColorScheme
    },
    resolveTheme: (A) => {
      const e = {
        ...A,
        typography: td(A.palette, A.typography)
      };
      return e.unstable_sx = function(r) {
        return Qt({
          sx: r,
          theme: this
        });
      }, e;
    }
  }), wp = mp;
  function Cp({ theme: A, ...e }) {
    const t = p.useMemo(() => {
      if (typeof A == "function") return A;
      const r = Xe in A ? A[Xe] : A;
      return "colorSchemes" in r ? null : "vars" in r ? A : {
        ...A,
        vars: null
      };
    }, [
      A
    ]);
    return t ? L.jsx(vp, {
      theme: t,
      ...e
    }) : L.jsx(wp, {
      theme: A,
      ...e
    });
  }
  function yp(A) {
    return L.jsx(Ku, {
      ...A,
      defaultTheme: Ns,
      themeId: Xe
    });
  }
  id = function(A) {
    return function(t) {
      return L.jsx(yp, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  };
  function bp() {
    return Ru;
  }
  se = Sh;
  ye = function(A) {
    return Uh(A);
  };
  function Qp(A) {
    return ke("MuiSvgIcon", A);
  }
  Ce("MuiSvgIcon", [
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
  let Fp, Up;
  Fp = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${IA(e)}`,
        `fontSize${IA(t)}`
      ]
    };
    return Ke(n, Qp, r);
  };
  Up = kA("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.color !== "inherit" && e[`color${IA(t.color)}`],
        e[`fontSize${IA(t.fontSize)}`]
      ];
    }
  })(se(({ theme: A }) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k, _l2, _m2, _n2;
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
            fontSize: ((_j = (_i = A.typography) == null ? void 0 : _i.pxToRem) == null ? void 0 : _j.call(_i, 35)) || "2.1875rem"
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
  Ta = p.forwardRef(function(e, t) {
    const r = ye({
      props: e,
      name: "MuiSvgIcon"
    }), { children: n, className: o, color: i = "inherit", component: a = "svg", fontSize: s = "medium", htmlColor: l, inheritViewBox: c = false, titleAccess: u, viewBox: d = "0 0 24 24", ...f } = r, g = p.isValidElement(n) && n.type === "svg", h = {
      ...r,
      color: i,
      component: a,
      fontSize: s,
      instanceFontSize: e.fontSize,
      inheritViewBox: c,
      viewBox: d,
      hasSvgAsChild: g
    }, F = {};
    c || (F.viewBox = d);
    const w = Fp(h);
    return L.jsxs(Up, {
      as: a,
      className: bA(w.root, o),
      focusable: "false",
      color: l,
      "aria-hidden": u ? void 0 : true,
      role: u ? "img" : void 0,
      ref: t,
      ...F,
      ...f,
      ...g && n.props,
      ownerState: h,
      children: [
        g ? n.props.children : n,
        u ? L.jsx("title", {
          children: u
        }) : null
      ]
    });
  });
  Ta.muiName = "SvgIcon";
  Ep = function(A, e) {
    function t(r, n) {
      return L.jsx(Ta, {
        "data-testid": `${e}Icon`,
        ref: n,
        ...r,
        children: A
      });
    }
    return t.muiName = Ta.muiName, p.memo(p.forwardRef(t));
  };
  Sp = function(A, e) {
    if (!A) return e;
    if (typeof A == "function" || typeof e == "function") return (n) => {
      const o = typeof e == "function" ? e(n) : e, i = typeof A == "function" ? A({
        ...n,
        ...o
      }) : A, a = bA(n == null ? void 0 : n.className, o == null ? void 0 : o.className, i == null ? void 0 : i.className);
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
    const t = e, r = bA(t == null ? void 0 : t.className, A == null ? void 0 : A.className);
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
  function ad(A, e) {
    if (A == null) return {};
    var t = {};
    for (var r in A) if ({}.hasOwnProperty.call(A, r)) {
      if (e.indexOf(r) !== -1) continue;
      t[r] = A[r];
    }
    return t;
  }
  function La(A, e) {
    return La = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, La(A, e);
  }
  function sd(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, La(A, e);
  }
  const { initPromise: xp } = Rf, Ip = xp.then((A) => A.loadShare("react-dom", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), Hp = await Ip.then((A) => A());
  var $s = Hp;
  const Fn = hs($s), Dl = {
    disabled: false
  }, Co = x.createContext(null);
  var Tp = function(e) {
    return e.scrollTop;
  }, Tr = "unmounted", It = "exited", Ht = "entering", or = "entered", ka = "exiting", Je = (function(A) {
    sd(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, s;
      return o.appearStatus = null, r.in ? a ? (s = It, o.appearStatus = Ht) : s = or : r.unmountOnExit || r.mountOnEnter ? s = Tr : s = It, o.state = {
        status: s
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === Tr ? {
        status: It
      } : null;
    };
    var t = e.prototype;
    return t.componentDidMount = function() {
      this.updateStatus(true, this.appearStatus);
    }, t.componentDidUpdate = function(n) {
      var o = null;
      if (n !== this.props) {
        var i = this.state.status;
        this.props.in ? i !== Ht && i !== or && (o = Ht) : (i === Ht || i === or) && (o = ka);
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
      if (n === void 0 && (n = false), o !== null) if (this.cancelNextCallback(), o === Ht) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : Fn.findDOMNode(this);
          i && Tp(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === It && this.setState({
        status: Tr
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, s = this.props.nodeRef ? [
        a
      ] : [
        Fn.findDOMNode(this),
        a
      ], l = s[0], c = s[1], u = this.getTimeouts(), d = a ? u.appear : u.enter;
      if (!n && !i || Dl.disabled) {
        this.safeSetState({
          status: or
        }, function() {
          o.props.onEntered(l);
        });
        return;
      }
      this.props.onEnter(l, c), this.safeSetState({
        status: Ht
      }, function() {
        o.props.onEntering(l, c), o.onTransitionEnd(d, function() {
          o.safeSetState({
            status: or
          }, function() {
            o.props.onEntered(l, c);
          });
        });
      });
    }, t.performExit = function() {
      var n = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Fn.findDOMNode(this);
      if (!o || Dl.disabled) {
        this.safeSetState({
          status: It
        }, function() {
          n.props.onExited(a);
        });
        return;
      }
      this.props.onExit(a), this.safeSetState({
        status: ka
      }, function() {
        n.props.onExiting(a), n.onTransitionEnd(i.exit, function() {
          n.safeSetState({
            status: It
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
      var i = this.props.nodeRef ? this.props.nodeRef.current : Fn.findDOMNode(this), a = n == null && !this.props.addEndListener;
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
      if (n === Tr) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = ad(o, [
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
      return x.createElement(Co.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : x.cloneElement(x.Children.only(i), a));
    }, e;
  })(x.Component);
  Je.contextType = Co;
  Je.propTypes = {};
  function zt() {
  }
  Je.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: zt,
    onEntering: zt,
    onEntered: zt,
    onExit: zt,
    onExiting: zt,
    onExited: zt
  };
  Je.UNMOUNTED = Tr;
  Je.EXITED = It;
  Je.ENTERING = Ht;
  Je.ENTERED = or;
  Je.EXITING = ka;
  function Lp(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function Ws(A, e) {
    var t = function(o) {
      return e && p.isValidElement(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && p.Children.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function kp(A, e) {
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
  function Kt(A, e, t) {
    return t[e] != null ? t[e] : A.props[e];
  }
  function Op(A, e) {
    return Ws(A.children, function(t) {
      return p.cloneElement(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: Kt(t, "appear", A),
        enter: Kt(t, "enter", A),
        exit: Kt(t, "exit", A)
      });
    });
  }
  function Kp(A, e, t) {
    var r = Ws(A.children), n = kp(e, r);
    return Object.keys(n).forEach(function(o) {
      var i = n[o];
      if (p.isValidElement(i)) {
        var a = o in e, s = o in r, l = e[o], c = p.isValidElement(l) && !l.props.in;
        s && (!a || c) ? n[o] = p.cloneElement(i, {
          onExited: t.bind(null, i),
          in: true,
          exit: Kt(i, "exit", A),
          enter: Kt(i, "enter", A)
        }) : !s && a && !c ? n[o] = p.cloneElement(i, {
          in: false
        }) : s && a && p.isValidElement(l) && (n[o] = p.cloneElement(i, {
          onExited: t.bind(null, i),
          in: l.props.in,
          exit: Kt(i, "exit", A),
          enter: Kt(i, "enter", A)
        }));
      }
    }), n;
  }
  var Rp = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  }, Dp = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  }, js = (function(A) {
    sd(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(Lp(o));
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
        children: s ? Op(n, a) : Kp(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = Ws(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var s = po({}, a.children);
        return delete s[n.key], {
          children: s
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = ad(n, [
        "component",
        "childFactory"
      ]), s = this.state.contextValue, l = Rp(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? x.createElement(Co.Provider, {
        value: s
      }, l) : x.createElement(Co.Provider, {
        value: s
      }, x.createElement(o, a, l));
    }, e;
  })(x.Component);
  js.propTypes = {};
  js.defaultProps = Dp;
  const ld = (A) => A.scrollTop;
  function yo(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  }
  function Mp(A) {
    return ke("MuiPaper", A);
  }
  Ce("MuiPaper", [
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
  let _p, Pp;
  _p = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return Ke(o, Mp, n);
  };
  Pp = kA("div", {
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
  })(se(({ theme: A }) => ({
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
  Oa = p.forwardRef(function(e, t) {
    var _a2;
    const r = ye({
      props: e,
      name: "MuiPaper"
    }), n = Qi(), { className: o, component: i = "div", elevation: a = 1, square: s = false, variant: l = "elevation", ...c } = r, u = {
      ...r,
      component: i,
      elevation: a,
      square: s,
      variant: l
    }, d = _p(u);
    return L.jsx(Pp, {
      as: i,
      ownerState: u,
      className: bA(d.root, o),
      ref: t,
      ...c,
      style: {
        ...l === "elevation" && {
          "--Paper-shadow": (n.vars || n).shadows[a],
          ...n.vars && {
            "--Paper-overlay": (_a2 = n.vars.overlays) == null ? void 0 : _a2[a]
          },
          ...!n.vars && n.palette.mode === "dark" && {
            "--Paper-overlay": `linear-gradient(${Ut("#fff", Ha(a))}, ${Ut("#fff", Ha(a))})`
          }
        },
        ...c.style
      }
    });
  });
  Dt = function(A, e) {
    const { className: t, elementType: r, ownerState: n, externalForwardedProps: o, internalForwardedProps: i, shouldForwardComponentProp: a = false, ...s } = e, { component: l, slots: c = {
      [A]: void 0
    }, slotProps: u = {
      [A]: void 0
    }, ...d } = o, f = c[A] || r, g = Xu(u[A], n), { props: { component: h, ...F }, internalRef: w } = ju({
      className: t,
      ...s,
      externalForwardedProps: A === "root" ? d : void 0,
      externalSlotProps: g
    }), C = Ye(w, g == null ? void 0 : g.ref, e.ref), b = A === "root" ? h || l : h, Q = Wu(f, {
      ...A === "root" && !l && !c[A] && i,
      ...A !== "root" && !c[A] && i,
      ...F,
      ...b && !a && {
        as: b
      },
      ...b && a && {
        component: b
      },
      ref: C
    }, n);
    return [
      f,
      Q
    ];
  };
  class bo {
    static create() {
      return new bo();
    }
    static use() {
      const e = Vu(bo.create).current, [t, r] = p.useState(false);
      return e.shouldMount = t, e.setShouldMount = r, p.useEffect(e.mountEffect, [
        t
      ]), e;
    }
    constructor() {
      this.ref = {
        current: null
      }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
    }
    mount() {
      return this.mounted || (this.mounted = Np(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
  function Gp() {
    return bo.use();
  }
  function Np() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function Vp(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: s, timeout: l } = A, [c, u] = p.useState(false), d = bA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), f = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, g = bA(t.child, c && t.childLeaving, r && t.childPulsate);
    return !a && !c && u(true), p.useEffect(() => {
      if (!a && s != null) {
        const h = setTimeout(s, l);
        return () => {
          clearTimeout(h);
        };
      }
    }, [
      s,
      a,
      l
    ]), L.jsx("span", {
      className: d,
      style: f,
      children: L.jsx("span", {
        className: g
      })
    });
  }
  const Fe = Ce("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate"
  ]), Ka = 550, $p = 80, Wp = un`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, jp = un`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Xp = un`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, zp = kA("span", {
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
  }), Yp = kA(Vp, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${Fe.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Wp};
    animation-duration: ${Ka}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  &.${Fe.ripplePulsate} {
    animation-duration: ${({ theme: A }) => A.transitions.duration.shorter}ms;
  }

  & .${Fe.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Fe.childLeaving} {
    opacity: 0;
    animation-name: ${jp};
    animation-duration: ${Ka}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${Fe.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Xp};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Jp = p.forwardRef(function(e, t) {
    const r = ye({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [s, l] = p.useState([]), c = p.useRef(0), u = p.useRef(null);
    p.useEffect(() => {
      u.current && (u.current(), u.current = null);
    }, [
      s
    ]);
    const d = p.useRef(false), f = $u(), g = p.useRef(null), h = p.useRef(null), F = p.useCallback((Q) => {
      const { pulsate: S, rippleX: v, rippleY: U, rippleSize: T, cb: I } = Q;
      l((B) => [
        ...B,
        L.jsx(Yp, {
          classes: {
            ripple: bA(o.ripple, Fe.ripple),
            rippleVisible: bA(o.rippleVisible, Fe.rippleVisible),
            ripplePulsate: bA(o.ripplePulsate, Fe.ripplePulsate),
            child: bA(o.child, Fe.child),
            childLeaving: bA(o.childLeaving, Fe.childLeaving),
            childPulsate: bA(o.childPulsate, Fe.childPulsate)
          },
          timeout: Ka,
          pulsate: S,
          rippleX: v,
          rippleY: U,
          rippleSize: T
        }, c.current)
      ]), c.current += 1, u.current = I;
    }, [
      o
    ]), w = p.useCallback((Q = {}, S = {}, v = () => {
    }) => {
      const { pulsate: U = false, center: T = n || S.pulsate, fakeElement: I = false } = S;
      if ((Q == null ? void 0 : Q.type) === "mousedown" && d.current) {
        d.current = false;
        return;
      }
      (Q == null ? void 0 : Q.type) === "touchstart" && (d.current = true);
      const B = I ? null : h.current, H = B ? B.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let R, O, _;
      if (T || Q === void 0 || Q.clientX === 0 && Q.clientY === 0 || !Q.clientX && !Q.touches) R = Math.round(H.width / 2), O = Math.round(H.height / 2);
      else {
        const { clientX: M, clientY: k } = Q.touches && Q.touches.length > 0 ? Q.touches[0] : Q;
        R = Math.round(M - H.left), O = Math.round(k - H.top);
      }
      if (T) _ = Math.sqrt((2 * H.width ** 2 + H.height ** 2) / 3), _ % 2 === 0 && (_ += 1);
      else {
        const M = Math.max(Math.abs((B ? B.clientWidth : 0) - R), R) * 2 + 2, k = Math.max(Math.abs((B ? B.clientHeight : 0) - O), O) * 2 + 2;
        _ = Math.sqrt(M ** 2 + k ** 2);
      }
      (Q == null ? void 0 : Q.touches) ? g.current === null && (g.current = () => {
        F({
          pulsate: U,
          rippleX: R,
          rippleY: O,
          rippleSize: _,
          cb: v
        });
      }, f.start($p, () => {
        g.current && (g.current(), g.current = null);
      })) : F({
        pulsate: U,
        rippleX: R,
        rippleY: O,
        rippleSize: _,
        cb: v
      });
    }, [
      n,
      F,
      f
    ]), C = p.useCallback(() => {
      w({}, {
        pulsate: true
      });
    }, [
      w
    ]), b = p.useCallback((Q, S) => {
      if (f.clear(), (Q == null ? void 0 : Q.type) === "touchend" && g.current) {
        g.current(), g.current = null, f.start(0, () => {
          b(Q, S);
        });
        return;
      }
      g.current = null, l((v) => v.length > 0 ? v.slice(1) : v), u.current = S;
    }, [
      f
    ]);
    return p.useImperativeHandle(t, () => ({
      pulsate: C,
      start: w,
      stop: b
    }), [
      C,
      w,
      b
    ]), L.jsx(zp, {
      className: bA(Fe.root, o.root, i),
      ref: h,
      ...a,
      children: L.jsx(js, {
        component: null,
        exit: true,
        children: s
      })
    });
  });
  function Zp(A) {
    return ke("MuiButtonBase", A);
  }
  let qp, A0, e0;
  qp = Ce("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  A0 = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = Ke({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, Zp, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  e0 = kA("button", {
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
    [`&.${qp.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  t0 = p.forwardRef(function(e, t) {
    const r = ye({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: s = "button", disabled: l = false, disableRipple: c = false, disableTouchRipple: u = false, focusRipple: d = false, focusVisibleClassName: f, LinkComponent: g = "a", onBlur: h, onClick: F, onContextMenu: w, onDragLeave: C, onFocus: b, onFocusVisible: Q, onKeyDown: S, onKeyUp: v, onMouseDown: U, onMouseLeave: T, onMouseUp: I, onTouchEnd: B, onTouchMove: H, onTouchStart: R, tabIndex: O = 0, TouchRippleProps: _, touchRippleRef: M, type: k, ...Y } = r, z = p.useRef(null), W = Gp(), V = Ye(W.ref, M), [J, oA] = p.useState(false);
    l && J && oA(false), p.useImperativeHandle(n, () => ({
      focusVisible: () => {
        oA(true), z.current.focus();
      }
    }), []);
    const K = W.shouldMount && !c && !l;
    p.useEffect(() => {
      J && d && !c && W.pulsate();
    }, [
      c,
      d,
      J,
      W
    ]);
    const AA = rt(W, "start", U, u), Z = rt(W, "stop", w, u), rA = rt(W, "stop", C, u), pA = rt(W, "stop", I, u), uA = rt(W, "stop", (N) => {
      J && N.preventDefault(), T && T(N);
    }, u), sA = rt(W, "start", R, u), eA = rt(W, "stop", B, u), lA = rt(W, "stop", H, u), dA = rt(W, "stop", (N) => {
      wo(N.target) || oA(false), h && h(N);
    }, false), m = it((N) => {
      z.current || (z.current = N.currentTarget), wo(N.target) && (oA(true), Q && Q(N)), b && b(N);
    }), E = () => {
      const N = z.current;
      return s && s !== "button" && !(N.tagName === "A" && N.href);
    }, y = it((N) => {
      d && !N.repeat && J && N.key === " " && W.stop(N, () => {
        W.start(N);
      }), N.target === N.currentTarget && E() && N.key === " " && N.preventDefault(), S && S(N), N.target === N.currentTarget && E() && N.key === "Enter" && !l && (N.preventDefault(), F && F(N));
    }), P = it((N) => {
      d && N.key === " " && J && !N.defaultPrevented && W.stop(N, () => {
        W.pulsate(N);
      }), v && v(N), F && N.target === N.currentTarget && E() && N.key === " " && !N.defaultPrevented && F(N);
    });
    let j = s;
    j === "button" && (Y.href || Y.to) && (j = g);
    const $ = {};
    j === "button" ? ($.type = k === void 0 ? "button" : k, $.disabled = l) : (!Y.href && !Y.to && ($.role = "button"), l && ($["aria-disabled"] = l));
    const fA = Ye(t, z), BA = {
      ...r,
      centerRipple: o,
      component: s,
      disabled: l,
      disableRipple: c,
      disableTouchRipple: u,
      focusRipple: d,
      tabIndex: O,
      focusVisible: J
    }, G = A0(BA);
    return L.jsxs(e0, {
      as: j,
      className: bA(G.root, a),
      ownerState: BA,
      onBlur: dA,
      onClick: F,
      onContextMenu: Z,
      onFocus: m,
      onKeyDown: y,
      onKeyUp: P,
      onMouseDown: AA,
      onMouseLeave: uA,
      onMouseUp: pA,
      onDragLeave: rA,
      onTouchEnd: eA,
      onTouchMove: lA,
      onTouchStart: sA,
      ref: fA,
      tabIndex: l ? -1 : O,
      type: k,
      ...$,
      ...Y,
      children: [
        i,
        K ? L.jsx(Jp, {
          ref: V,
          center: o,
          ..._
        }) : null
      ]
    });
  });
  function rt(A, e, t, r = false) {
    return it((n) => (t && t(n), r || A[e](n), true));
  }
  function r0(A) {
    return typeof A.main == "string";
  }
  function n0(A, e = []) {
    if (!r0(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  Gt = function(A = []) {
    return ([, e]) => e && n0(e, A);
  };
  function o0(A) {
    return ke("MuiCircularProgress", A);
  }
  Ce("MuiCircularProgress", [
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
  let dt, Ra, Da, i0, a0, s0, l0, c0, u0;
  dt = 44;
  Ra = un`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  Da = un`
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
  i0 = typeof Ra != "string" ? Es`
        animation: ${Ra} 1.4s linear infinite;
      ` : null;
  a0 = typeof Da != "string" ? Es`
        animation: ${Da} 1.4s ease-in-out infinite;
      ` : null;
  s0 = (A) => {
    const { classes: e, variant: t, color: r, disableShrink: n } = A, o = {
      root: [
        "root",
        t,
        `color${IA(r)}`
      ],
      svg: [
        "svg"
      ],
      circle: [
        "circle",
        `circle${IA(t)}`,
        n && "circleDisableShrink"
      ]
    };
    return Ke(o, o0, e);
  };
  l0 = kA("span", {
    name: "MuiCircularProgress",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[t.variant],
        e[`color${IA(t.color)}`]
      ];
    }
  })(se(({ theme: A }) => ({
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
        style: i0 || {
          animation: `${Ra} 1.4s linear infinite`
        }
      },
      ...Object.entries(A.palette).filter(Gt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      }))
    ]
  })));
  c0 = kA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  u0 = kA("circle", {
    name: "MuiCircularProgress",
    slot: "Circle",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.circle,
        e[`circle${IA(t.variant)}`],
        t.disableShrink && e.circleDisableShrink
      ];
    }
  })(se(({ theme: A }) => ({
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
        style: a0 || {
          animation: `${Da} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  d0 = p.forwardRef(function(e, t) {
    const r = ye({
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
    }, g = s0(f), h = {}, F = {}, w = {};
    if (u === "determinate") {
      const C = 2 * Math.PI * ((dt - l) / 2);
      h.strokeDasharray = C.toFixed(3), w["aria-valuenow"] = Math.round(c), h.strokeDashoffset = `${((100 - c) / 100 * C).toFixed(3)}px`, F.transform = "rotate(-90deg)";
    }
    return L.jsx(l0, {
      className: bA(g.root, n),
      style: {
        width: a,
        height: a,
        ...F,
        ...s
      },
      ownerState: f,
      ref: t,
      role: "progressbar",
      ...w,
      ...d,
      children: L.jsx(c0, {
        className: g.svg,
        ownerState: f,
        viewBox: `${dt / 2} ${dt / 2} ${dt} ${dt}`,
        children: L.jsx(u0, {
          className: g.circle,
          style: h,
          ownerState: f,
          cx: dt,
          cy: dt,
          r: (dt - l) / 2,
          fill: "none",
          strokeWidth: l
        })
      })
    });
  });
  function f0(A) {
    return ke("MuiIconButton", A);
  }
  let Ml, g0, B0, h0;
  Ml = Ce("MuiIconButton", [
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
  g0 = (A) => {
    const { classes: e, disabled: t, color: r, edge: n, size: o, loading: i } = A, a = {
      root: [
        "root",
        i && "loading",
        t && "disabled",
        r !== "default" && `color${IA(r)}`,
        n && `edge${IA(n)}`,
        `size${IA(o)}`
      ],
      loadingIndicator: [
        "loadingIndicator"
      ],
      loadingWrapper: [
        "loadingWrapper"
      ]
    };
    return Ke(a, f0, e);
  };
  B0 = kA(t0, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.loading && e.loading,
        t.color !== "default" && e[`color${IA(t.color)}`],
        t.edge && e[`edge${IA(t.edge)}`],
        e[`size${IA(t.size)}`]
      ];
    }
  })(se(({ theme: A }) => ({
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
          "--IconButton-hoverBg": A.vars ? `rgba(${A.vars.palette.action.activeChannel} / ${A.vars.palette.action.hoverOpacity})` : Ut(A.palette.action.active, A.palette.action.hoverOpacity),
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
  })), se(({ theme: A }) => ({
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      ...Object.entries(A.palette).filter(Gt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      })),
      ...Object.entries(A.palette).filter(Gt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          "--IconButton-hoverBg": A.vars ? `rgba(${(A.vars || A).palette[e].mainChannel} / ${A.vars.palette.action.hoverOpacity})` : Ut((A.vars || A).palette[e].main, A.palette.action.hoverOpacity)
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
    [`&.${Ml.disabled}`]: {
      backgroundColor: "transparent",
      color: (A.vars || A).palette.action.disabled
    },
    [`&.${Ml.loading}`]: {
      color: "transparent"
    }
  })));
  h0 = kA("span", {
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
  p0 = p.forwardRef(function(e, t) {
    const r = ye({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: s = false, disableFocusRipple: l = false, size: c = "medium", id: u, loading: d = null, loadingIndicator: f, ...g } = r, h = Nu(u), F = f ?? L.jsx(d0, {
      "aria-labelledby": h,
      color: "inherit",
      size: 16
    }), w = {
      ...r,
      edge: n,
      color: a,
      disabled: s,
      disableFocusRipple: l,
      loading: d,
      loadingIndicator: F,
      size: c
    }, C = g0(w);
    return L.jsxs(B0, {
      id: d ? h : u,
      className: bA(C.root, i),
      centerRipple: true,
      focusRipple: !l,
      disabled: s || d,
      ref: t,
      ...g,
      ownerState: w,
      children: [
        typeof d == "boolean" && L.jsx("span", {
          className: C.loadingWrapper,
          style: {
            display: "contents"
          },
          children: L.jsx(h0, {
            className: C.loadingIndicator,
            ownerState: w,
            children: d && F
          })
        }),
        o
      ]
    });
  });
  function v0(A) {
    return ke("MuiTypography", A);
  }
  let m0, w0, C0, y0, _l;
  VU = Ce("MuiTypography", [
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
  m0 = {
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
  w0 = bp();
  C0 = (A) => {
    const { align: e, gutterBottom: t, noWrap: r, paragraph: n, variant: o, classes: i } = A, a = {
      root: [
        "root",
        o,
        A.align !== "inherit" && `align${IA(e)}`,
        t && "gutterBottom",
        r && "noWrap",
        n && "paragraph"
      ]
    };
    return Ke(a, v0, i);
  };
  y0 = kA("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        t.variant && e[t.variant],
        t.align !== "inherit" && e[`align${IA(t.align)}`],
        t.noWrap && e.noWrap,
        t.gutterBottom && e.gutterBottom,
        t.paragraph && e.paragraph
      ];
    }
  })(se(({ theme: A }) => {
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
        ...Object.entries(A.palette).filter(Gt()).map(([e]) => ({
          props: {
            color: e
          },
          style: {
            color: (A.vars || A).palette[e].main
          }
        })),
        ...Object.entries(((_a2 = A.palette) == null ? void 0 : _a2.text) || {}).filter(([, e]) => typeof e == "string").map(([e]) => ({
          props: {
            color: `text${IA(e)}`
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
  _l = {
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
  Gr = p.forwardRef(function(e, t) {
    const { color: r, ...n } = ye({
      props: e,
      name: "MuiTypography"
    }), o = !m0[r], i = w0({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: s, component: l, gutterBottom: c = false, noWrap: u = false, paragraph: d = false, variant: f = "body1", variantMapping: g = _l, ...h } = i, F = {
      ...i,
      align: a,
      color: r,
      className: s,
      component: l,
      gutterBottom: c,
      noWrap: u,
      paragraph: d,
      variant: f,
      variantMapping: g
    }, w = l || (d ? "p" : g[f] || _l[f]) || "span", C = C0(F);
    return L.jsx(y0, {
      as: w,
      ref: t,
      className: bA(C.root, s),
      ...h,
      ownerState: F,
      style: {
        ...a !== "inherit" && {
          "--Typography-textAlign": a
        },
        ...h.style
      }
    });
  });
  function b0(A) {
    return typeof A == "function" ? A() : A;
  }
  const Q0 = p.forwardRef(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = p.useState(null), s = Ye(p.isValidElement(r) ? yi(r) : null, t);
    if (Br(() => {
      o || a(b0(n) || document.body);
    }, [
      n,
      o
    ]), Br(() => {
      if (i && !o) return yl(t, i), () => {
        yl(t, null);
      };
    }, [
      t,
      i,
      o
    ]), o) {
      if (p.isValidElement(r)) {
        const l = {
          ref: s
        };
        return p.cloneElement(r, l);
      }
      return r;
    }
    return i && $s.createPortal(r, i);
  });
  Nr = function(A) {
    return typeof A == "string";
  };
  let F0;
  F0 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  U0 = p.forwardRef(function(e, t) {
    const r = Qi(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: s, in: l, onEnter: c, onEntered: u, onEntering: d, onExit: f, onExited: g, onExiting: h, style: F, timeout: w = n, TransitionComponent: C = Je, ...b } = e, Q = p.useRef(null), S = Ye(Q, yi(a), t), v = (_) => (M) => {
      if (_) {
        const k = Q.current;
        M === void 0 ? _(k) : _(k, M);
      }
    }, U = v(d), T = v((_, M) => {
      ld(_);
      const k = yo({
        style: F,
        timeout: w,
        easing: s
      }, {
        mode: "enter"
      });
      _.style.webkitTransition = r.transitions.create("opacity", k), _.style.transition = r.transitions.create("opacity", k), c && c(_, M);
    }), I = v(u), B = v(h), H = v((_) => {
      const M = yo({
        style: F,
        timeout: w,
        easing: s
      }, {
        mode: "exit"
      });
      _.style.webkitTransition = r.transitions.create("opacity", M), _.style.transition = r.transitions.create("opacity", M), f && f(_);
    }), R = v(g), O = (_) => {
      o && o(Q.current, _);
    };
    return L.jsx(C, {
      appear: i,
      in: l,
      nodeRef: Q,
      onEnter: T,
      onEntered: I,
      onEntering: U,
      onExit: H,
      onExited: R,
      onExiting: B,
      addEndListener: O,
      timeout: w,
      ...b,
      children: (_, { ownerState: M, ...k }) => p.cloneElement(a, {
        style: {
          opacity: 0,
          visibility: _ === "exited" && !l ? "hidden" : void 0,
          ...F0[_],
          ...F,
          ...a.props.style
        },
        ref: S,
        ...k
      })
    });
  });
  function E0(A) {
    return ke("MuiBackdrop", A);
  }
  Ce("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let S0, x0, H0, T0, Ma, L0, k0, cd, co, O0, K0;
  S0 = (A) => {
    const { classes: e, invisible: t } = A;
    return Ke({
      root: [
        "root",
        t && "invisible"
      ]
    }, E0, e);
  };
  x0 = kA("div", {
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
  I0 = p.forwardRef(function(e, t) {
    const r = ye({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: s, components: l = {}, componentsProps: c = {}, slotProps: u = {}, slots: d = {}, TransitionComponent: f, transitionDuration: g, ...h } = r, F = {
      ...r,
      component: i,
      invisible: a
    }, w = S0(F), C = {
      transition: f,
      root: l.Root,
      ...d
    }, b = {
      ...c,
      ...u
    }, Q = {
      slots: C,
      slotProps: b
    }, [S, v] = Dt("root", {
      elementType: x0,
      externalForwardedProps: Q,
      className: bA(w.root, o),
      ownerState: F
    }), [U, T] = Dt("transition", {
      elementType: U0,
      externalForwardedProps: Q,
      ownerState: F
    });
    return L.jsx(U, {
      in: s,
      timeout: g,
      ...h,
      ...T,
      children: L.jsx(S, {
        "aria-hidden": true,
        ...v,
        classes: w,
        ref: t,
        children: n
      })
    });
  });
  H0 = Ce("MuiBox", [
    "root"
  ]);
  T0 = bi();
  ee = zB({
    themeId: Xe,
    defaultTheme: T0,
    defaultClassName: H0.root,
    generateClassName: Du.generate
  });
  Ma = typeof id({}) == "function";
  L0 = (A, e) => ({
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    boxSizing: "border-box",
    WebkitTextSizeAdjust: "100%",
    ...e && !A.vars && {
      colorScheme: A.palette.mode
    }
  });
  k0 = (A) => ({
    color: (A.vars || A).palette.text.primary,
    ...A.typography.body1,
    backgroundColor: (A.vars || A).palette.background.default,
    "@media print": {
      backgroundColor: (A.vars || A).palette.common.white
    }
  });
  cd = (A, e = false) => {
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
      html: L0(A, e),
      "*, *::before, *::after": {
        boxSizing: "inherit"
      },
      "strong, b": {
        fontWeight: A.typography.fontWeightBold
      },
      body: {
        margin: 0,
        ...k0(A),
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
  co = "mui-ecs";
  O0 = (A) => {
    const e = cd(A, false), t = Array.isArray(e) ? e[0] : e;
    return !A.vars && t && (t.html[`:root:has(${co})`] = {
      colorScheme: A.palette.mode
    }), A.colorSchemes && Object.entries(A.colorSchemes).forEach(([r, n]) => {
      var _a2, _b2;
      const o = A.getColorSchemeSelector(r);
      o.startsWith("@") ? t[o] = {
        [`:root:not(:has(.${co}))`]: {
          colorScheme: (_a2 = n.palette) == null ? void 0 : _a2.mode
        }
      } : t[o.replace(/\s*&/, "")] = {
        [`&:not(:has(.${co}))`]: {
          colorScheme: (_b2 = n.palette) == null ? void 0 : _b2.mode
        }
      };
    }), e;
  };
  K0 = id(Ma ? ({ theme: A, enableColorScheme: e }) => cd(A, e) : ({ theme: A }) => O0(A));
  function R0(A) {
    const e = ye({
      props: A,
      name: "MuiCssBaseline"
    }), { children: t, enableColorScheme: r = false } = e;
    return L.jsxs(p.Fragment, {
      children: [
        Ma && L.jsx(K0, {
          enableColorScheme: r
        }),
        !Ma && !r && L.jsx("span", {
          className: co,
          style: {
            display: "none"
          }
        }),
        t
      ]
    });
  }
  function D0(A) {
    const e = me(A);
    return e.body === A ? hr(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function Vr(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function Pl(A) {
    return parseInt(hr(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function M0(A) {
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
  function Gl(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), s = !M0(i);
      a && s && Vr(i, n);
    });
  }
  function ji(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function _0(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (D0(r)) {
        const i = Bh(hr(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${Pl(r) + i}px`;
        const a = me(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          t.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s
          }), s.style.paddingRight = `${Pl(s) + i}px`;
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = me(r).body;
      else {
        const i = r.parentElement, a = hr(r);
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
  function P0(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class G0 {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && Vr(e.modalRef, false);
      const n = P0(t);
      Gl(t, e.mount, e.modalRef, n, true);
      const o = ji(this.containers, (i) => i.container === t);
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
      const r = ji(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = _0(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = ji(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && Vr(e.modalRef, t), Gl(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
      else {
        const i = o.modals[o.modals.length - 1];
        i.modalRef && Vr(i.modalRef, false);
      }
      return r;
    }
    isTopModal(e) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
    }
  }
  const N0 = [
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
  function V0(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function $0(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function W0(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || $0(A));
  }
  function j0(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(N0)).forEach((r, n) => {
      const o = V0(r);
      o === -1 || !W0(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function X0() {
    return true;
  }
  function z0(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = j0, isEnabled: i = X0, open: a } = A, s = p.useRef(false), l = p.useRef(null), c = p.useRef(null), u = p.useRef(null), d = p.useRef(null), f = p.useRef(false), g = p.useRef(null), h = Ye(yi(e), g), F = p.useRef(null);
    p.useEffect(() => {
      !a || !g.current || (f.current = !t);
    }, [
      t,
      a
    ]), p.useEffect(() => {
      if (!a || !g.current) return;
      const b = me(g.current);
      return g.current.contains(b.activeElement) || (g.current.hasAttribute("tabIndex") || g.current.setAttribute("tabIndex", "-1"), f.current && g.current.focus()), () => {
        n || (u.current && u.current.focus && (s.current = true, u.current.focus()), u.current = null);
      };
    }, [
      a
    ]), p.useEffect(() => {
      if (!a || !g.current) return;
      const b = me(g.current), Q = (U) => {
        F.current = U, !(r || !i() || U.key !== "Tab") && b.activeElement === g.current && U.shiftKey && (s.current = true, c.current && c.current.focus());
      }, S = () => {
        var _a2, _b2;
        const U = g.current;
        if (U === null) return;
        if (!b.hasFocus() || !i() || s.current) {
          s.current = false;
          return;
        }
        if (U.contains(b.activeElement) || r && b.activeElement !== l.current && b.activeElement !== c.current) return;
        if (b.activeElement !== d.current) d.current = null;
        else if (d.current !== null) return;
        if (!f.current) return;
        let T = [];
        if ((b.activeElement === l.current || b.activeElement === c.current) && (T = o(g.current)), T.length > 0) {
          const I = !!(((_a2 = F.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = F.current) == null ? void 0 : _b2.key) === "Tab"), B = T[0], H = T[T.length - 1];
          typeof B != "string" && typeof H != "string" && (I ? H.focus() : B.focus());
        } else U.focus();
      };
      b.addEventListener("focusin", S), b.addEventListener("keydown", Q, true);
      const v = setInterval(() => {
        b.activeElement && b.activeElement.tagName === "BODY" && S();
      }, 50);
      return () => {
        clearInterval(v), b.removeEventListener("focusin", S), b.removeEventListener("keydown", Q, true);
      };
    }, [
      t,
      r,
      n,
      i,
      a,
      o
    ]);
    const w = (b) => {
      u.current === null && (u.current = b.relatedTarget), f.current = true, d.current = b.target;
      const Q = e.props.onFocus;
      Q && Q(b);
    }, C = (b) => {
      u.current === null && (u.current = b.relatedTarget), f.current = true;
    };
    return L.jsxs(p.Fragment, {
      children: [
        L.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: C,
          ref: l,
          "data-testid": "sentinelStart"
        }),
        p.cloneElement(e, {
          ref: h,
          onFocus: w
        }),
        L.jsx("div", {
          tabIndex: a ? 0 : -1,
          onFocus: C,
          ref: c,
          "data-testid": "sentinelEnd"
        })
      ]
    });
  }
  function Y0(A) {
    return typeof A == "function" ? A() : A;
  }
  function J0(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const Nl = () => {
  }, Un = new G0();
  function Z0(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: s, open: l, rootRef: c } = A, u = p.useRef({}), d = p.useRef(null), f = p.useRef(null), g = Ye(f, c), [h, F] = p.useState(!l), w = J0(a);
    let C = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (C = false);
    const b = () => me(d.current), Q = () => (u.current.modalRef = f.current, u.current.mount = d.current, u.current), S = () => {
      Un.mount(Q(), {
        disableScrollLock: r
      }), f.current && (f.current.scrollTop = 0);
    }, v = it(() => {
      const M = Y0(e) || b().body;
      Un.add(Q(), M), f.current && S();
    }), U = () => Un.isTopModal(Q()), T = it((M) => {
      d.current = M, M && (l && U() ? S() : f.current && Vr(f.current, C));
    }), I = p.useCallback(() => {
      Un.remove(Q(), C);
    }, [
      C
    ]);
    p.useEffect(() => () => {
      I();
    }, [
      I
    ]), p.useEffect(() => {
      l ? v() : (!w || !n) && I();
    }, [
      l,
      I,
      w,
      n,
      v
    ]);
    const B = (M) => (k) => {
      var _a2;
      (_a2 = M.onKeyDown) == null ? void 0 : _a2.call(M, k), !(k.key !== "Escape" || k.which === 229 || !U()) && (t || (k.stopPropagation(), s && s(k, "escapeKeyDown")));
    }, H = (M) => (k) => {
      var _a2;
      (_a2 = M.onClick) == null ? void 0 : _a2.call(M, k), k.target === k.currentTarget && s && s(k, "backdropClick");
    };
    return {
      getRootProps: (M = {}) => {
        const k = Pr(A);
        delete k.onTransitionEnter, delete k.onTransitionExited;
        const Y = {
          ...k,
          ...M
        };
        return {
          role: "presentation",
          ...Y,
          onKeyDown: B(Y),
          ref: g
        };
      },
      getBackdropProps: (M = {}) => {
        const k = M;
        return {
          "aria-hidden": true,
          ...k,
          onClick: H(k),
          open: l
        };
      },
      getTransitionProps: () => {
        const M = () => {
          F(false), o && o();
        }, k = () => {
          F(true), i && i(), n && I();
        };
        return {
          onEnter: Cl(M, (a == null ? void 0 : a.props.onEnter) ?? Nl),
          onExited: Cl(k, (a == null ? void 0 : a.props.onExited) ?? Nl)
        };
      },
      rootRef: g,
      portalRef: T,
      isTopModal: U,
      exited: h,
      hasTransition: w
    };
  }
  function q0(A) {
    return ke("MuiModal", A);
  }
  Ce("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let Av, ev, tv;
  Av = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return Ke({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, q0, r);
  };
  ev = kA("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        !t.open && t.exited && e.hidden
      ];
    }
  })(se(({ theme: A }) => ({
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
  tv = kA(I0, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  rv = p.forwardRef(function(e, t) {
    const r = ye({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = tv, BackdropProps: o, classes: i, className: a, closeAfterTransition: s = false, children: l, container: c, component: u, components: d = {}, componentsProps: f = {}, disableAutoFocus: g = false, disableEnforceFocus: h = false, disableEscapeKeyDown: F = false, disablePortal: w = false, disableRestoreFocus: C = false, disableScrollLock: b = false, hideBackdrop: Q = false, keepMounted: S = false, onBackdropClick: v, onClose: U, onTransitionEnter: T, onTransitionExited: I, open: B, slotProps: H = {}, slots: R = {}, theme: O, ..._ } = r, M = {
      ...r,
      closeAfterTransition: s,
      disableAutoFocus: g,
      disableEnforceFocus: h,
      disableEscapeKeyDown: F,
      disablePortal: w,
      disableRestoreFocus: C,
      disableScrollLock: b,
      hideBackdrop: Q,
      keepMounted: S
    }, { getRootProps: k, getBackdropProps: Y, getTransitionProps: z, portalRef: W, isTopModal: V, exited: J, hasTransition: oA } = Z0({
      ...M,
      rootRef: t
    }), K = {
      ...M,
      exited: J
    }, AA = Av(K), Z = {};
    if (l.props.tabIndex === void 0 && (Z.tabIndex = "-1"), oA) {
      const { onEnter: lA, onExited: dA } = z();
      Z.onEnter = lA, Z.onExited = dA;
    }
    const rA = {
      slots: {
        root: d.Root,
        backdrop: d.Backdrop,
        ...R
      },
      slotProps: {
        ...f,
        ...H
      }
    }, [pA, uA] = Dt("root", {
      ref: t,
      elementType: ev,
      externalForwardedProps: {
        ...rA,
        ..._,
        component: u
      },
      getSlotProps: k,
      ownerState: K,
      className: bA(a, AA == null ? void 0 : AA.root, !K.open && K.exited && (AA == null ? void 0 : AA.hidden))
    }), [sA, eA] = Dt("backdrop", {
      ref: o == null ? void 0 : o.ref,
      elementType: n,
      externalForwardedProps: rA,
      shouldForwardComponentProp: true,
      additionalProps: o,
      getSlotProps: (lA) => Y({
        ...lA,
        onClick: (dA) => {
          v && v(dA), (lA == null ? void 0 : lA.onClick) && lA.onClick(dA);
        }
      }),
      className: bA(o == null ? void 0 : o.className, AA == null ? void 0 : AA.backdrop),
      ownerState: K
    });
    return !S && !B && (!oA || J) ? null : L.jsx(Q0, {
      ref: W,
      container: c,
      disablePortal: w,
      children: L.jsxs(pA, {
        ...uA,
        children: [
          !Q && n ? L.jsx(sA, {
            ...eA
          }) : null,
          L.jsx(z0, {
            disableEnforceFocus: h,
            disableAutoFocus: g,
            disableRestoreFocus: C,
            isEnabled: V,
            open: B,
            children: p.cloneElement(l, Z)
          })
        ]
      })
    });
  });
  function nv(A) {
    return ke("MuiDivider", A);
  }
  let ov, iv, av;
  $U = Ce("MuiDivider", [
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
  ov = (A) => {
    const { absolute: e, children: t, classes: r, flexItem: n, light: o, orientation: i, textAlign: a, variant: s } = A;
    return Ke({
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
    }, nv, r);
  };
  iv = kA("div", {
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
  })(se(({ theme: A }) => ({
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
          borderColor: A.vars ? `rgba(${A.vars.palette.dividerChannel} / 0.08)` : Ut(A.palette.divider, 0.08)
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
  av = kA("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.wrapper,
        t.orientation === "vertical" && e.wrapperVertical
      ];
    }
  })(se(({ theme: A }) => ({
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
  Qo = p.forwardRef(function(e, t) {
    const r = ye({
      props: e,
      name: "MuiDivider"
    }), { absolute: n = false, children: o, className: i, orientation: a = "horizontal", component: s = o || a === "vertical" ? "div" : "hr", flexItem: l = false, light: c = false, role: u = s !== "hr" ? "separator" : void 0, textAlign: d = "center", variant: f = "fullWidth", ...g } = r, h = {
      ...r,
      absolute: n,
      component: s,
      flexItem: l,
      light: c,
      orientation: a,
      role: u,
      textAlign: d,
      variant: f
    }, F = ov(h);
    return L.jsx(iv, {
      as: s,
      className: bA(F.root, i),
      role: u,
      ref: t,
      ownerState: h,
      "aria-orientation": u === "separator" && (s !== "hr" || a === "vertical") ? a : void 0,
      ...g,
      children: o ? L.jsx(av, {
        className: F.wrapper,
        ownerState: h,
        children: o
      }) : null
    });
  });
  Qo && (Qo.muiSkipListHighlight = true);
  function _a(A) {
    return `scale(${A}, ${A ** 2})`;
  }
  const sv = {
    entering: {
      opacity: 1,
      transform: _a(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  }, Xi = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Pa = p.forwardRef(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: s, onEntered: l, onEntering: c, onExit: u, onExited: d, onExiting: f, style: g, timeout: h = "auto", TransitionComponent: F = Je, ...w } = e, C = $u(), b = p.useRef(), Q = Qi(), S = p.useRef(null), v = Ye(S, yi(o), t), U = (M) => (k) => {
      if (M) {
        const Y = S.current;
        k === void 0 ? M(Y) : M(Y, k);
      }
    }, T = U(c), I = U((M, k) => {
      ld(M);
      const { duration: Y, delay: z, easing: W } = yo({
        style: g,
        timeout: h,
        easing: i
      }, {
        mode: "enter"
      });
      let V;
      h === "auto" ? (V = Q.transitions.getAutoHeightDuration(M.clientHeight), b.current = V) : V = Y, M.style.transition = [
        Q.transitions.create("opacity", {
          duration: V,
          delay: z
        }),
        Q.transitions.create("transform", {
          duration: Xi ? V : V * 0.666,
          delay: z,
          easing: W
        })
      ].join(","), s && s(M, k);
    }), B = U(l), H = U(f), R = U((M) => {
      const { duration: k, delay: Y, easing: z } = yo({
        style: g,
        timeout: h,
        easing: i
      }, {
        mode: "exit"
      });
      let W;
      h === "auto" ? (W = Q.transitions.getAutoHeightDuration(M.clientHeight), b.current = W) : W = k, M.style.transition = [
        Q.transitions.create("opacity", {
          duration: W,
          delay: Y
        }),
        Q.transitions.create("transform", {
          duration: Xi ? W : W * 0.666,
          delay: Xi ? Y : Y || W * 0.333,
          easing: z
        })
      ].join(","), M.style.opacity = 0, M.style.transform = _a(0.75), u && u(M);
    }), O = U(d), _ = (M) => {
      h === "auto" && C.start(b.current || 0, M), r && r(S.current, M);
    };
    return L.jsx(F, {
      appear: n,
      in: a,
      nodeRef: S,
      onEnter: I,
      onEntered: B,
      onEntering: T,
      onExit: R,
      onExited: O,
      onExiting: H,
      addEndListener: _,
      timeout: h === "auto" ? null : h,
      ...w,
      children: (M, { ownerState: k, ...Y }) => p.cloneElement(o, {
        style: {
          opacity: 0,
          transform: _a(0.75),
          visibility: M === "exited" && !a ? "hidden" : void 0,
          ...sv[M],
          ...g,
          ...o.props.style
        },
        ref: v,
        ...Y
      })
    });
  });
  Pa && (Pa.muiSupportAuto = true);
  function lv(A) {
    return ke("MuiPopover", A);
  }
  Ce("MuiPopover", [
    "root",
    "paper"
  ]);
  function Vl(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.height / 2 : e === "bottom" && (t = A.height), t;
  }
  function $l(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.width / 2 : e === "right" && (t = A.width), t;
  }
  function Wl(A) {
    return [
      A.horizontal,
      A.vertical
    ].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
  }
  function En(A) {
    return typeof A == "function" ? A() : A;
  }
  let cv, uv;
  cv = (A) => {
    const { classes: e } = A;
    return Ke({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, lv, e);
  };
  uv = kA(rv, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  dv = kA(Oa, {
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
  fv = p.forwardRef(function(e, t) {
    const r = ye({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: s = "anchorEl", children: l, className: c, container: u, elevation: d = 8, marginThreshold: f = 16, open: g, PaperProps: h = {}, slots: F = {}, slotProps: w = {}, transformOrigin: C = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: b, transitionDuration: Q = "auto", TransitionProps: S = {}, disableScrollLock: v = false, ...U } = r, T = p.useRef(), I = {
      ...r,
      anchorOrigin: i,
      anchorReference: s,
      elevation: d,
      marginThreshold: f,
      transformOrigin: C,
      TransitionComponent: b,
      transitionDuration: Q,
      TransitionProps: S
    }, B = cv(I), H = p.useCallback(() => {
      if (s === "anchorPosition") return a;
      const eA = En(o), dA = (eA && eA.nodeType === 1 ? eA : me(T.current).body).getBoundingClientRect();
      return {
        top: dA.top + Vl(dA, i.vertical),
        left: dA.left + $l(dA, i.horizontal)
      };
    }, [
      o,
      i.horizontal,
      i.vertical,
      a,
      s
    ]), R = p.useCallback((eA) => ({
      vertical: Vl(eA, C.vertical),
      horizontal: $l(eA, C.horizontal)
    }), [
      C.horizontal,
      C.vertical
    ]), O = p.useCallback((eA) => {
      const lA = {
        width: eA.offsetWidth,
        height: eA.offsetHeight
      }, dA = R(lA);
      if (s === "none") return {
        top: null,
        left: null,
        transformOrigin: Wl(dA)
      };
      const m = H();
      let E = m.top - dA.vertical, y = m.left - dA.horizontal;
      const P = E + lA.height, j = y + lA.width, $ = hr(En(o)), fA = $.innerHeight - f, BA = $.innerWidth - f;
      if (f !== null && E < f) {
        const G = E - f;
        E -= G, dA.vertical += G;
      } else if (f !== null && P > fA) {
        const G = P - fA;
        E -= G, dA.vertical += G;
      }
      if (f !== null && y < f) {
        const G = y - f;
        y -= G, dA.horizontal += G;
      } else if (j > BA) {
        const G = j - BA;
        y -= G, dA.horizontal += G;
      }
      return {
        top: `${Math.round(E)}px`,
        left: `${Math.round(y)}px`,
        transformOrigin: Wl(dA)
      };
    }, [
      o,
      s,
      H,
      R,
      f
    ]), [_, M] = p.useState(g), k = p.useCallback(() => {
      const eA = T.current;
      if (!eA) return;
      const lA = O(eA);
      lA.top !== null && eA.style.setProperty("top", lA.top), lA.left !== null && (eA.style.left = lA.left), eA.style.transformOrigin = lA.transformOrigin, M(true);
    }, [
      O
    ]);
    p.useEffect(() => (v && window.addEventListener("scroll", k), () => window.removeEventListener("scroll", k)), [
      o,
      v,
      k
    ]);
    const Y = () => {
      k();
    }, z = () => {
      M(false);
    };
    p.useEffect(() => {
      g && k();
    }), p.useImperativeHandle(n, () => g ? {
      updatePosition: () => {
        k();
      }
    } : null, [
      g,
      k
    ]), p.useEffect(() => {
      if (!g) return;
      const eA = lh(() => {
        k();
      }), lA = hr(En(o));
      return lA.addEventListener("resize", eA), () => {
        eA.clear(), lA.removeEventListener("resize", eA);
      };
    }, [
      o,
      g,
      k
    ]);
    let W = Q;
    const V = {
      slots: {
        transition: b,
        ...F
      },
      slotProps: {
        transition: S,
        paper: h,
        ...w
      }
    }, [J, oA] = Dt("transition", {
      elementType: Pa,
      externalForwardedProps: V,
      ownerState: I,
      getSlotProps: (eA) => ({
        ...eA,
        onEntering: (lA, dA) => {
          var _a2;
          (_a2 = eA.onEntering) == null ? void 0 : _a2.call(eA, lA, dA), Y();
        },
        onExited: (lA) => {
          var _a2;
          (_a2 = eA.onExited) == null ? void 0 : _a2.call(eA, lA), z();
        }
      }),
      additionalProps: {
        appear: true,
        in: g
      }
    });
    Q === "auto" && !J.muiSupportAuto && (W = void 0);
    const K = u || (o ? me(En(o)).body : void 0), [AA, { slots: Z, slotProps: rA, ...pA }] = Dt("root", {
      ref: t,
      elementType: uv,
      externalForwardedProps: {
        ...V,
        ...U
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: F.backdrop
        },
        slotProps: {
          backdrop: Sp(typeof w.backdrop == "function" ? w.backdrop(I) : w.backdrop, {
            invisible: true
          })
        },
        container: K,
        open: g
      },
      ownerState: I,
      className: bA(B.root, c)
    }), [uA, sA] = Dt("paper", {
      ref: T,
      className: B.paper,
      elementType: dv,
      externalForwardedProps: V,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: d,
        style: _ ? void 0 : {
          opacity: 0
        }
      },
      ownerState: I
    });
    return L.jsx(AA, {
      ...pA,
      ...!Nr(AA) && {
        slots: Z,
        slotProps: rA,
        disableScrollLock: v
      },
      children: L.jsx(J, {
        ...oA,
        timeout: W,
        children: L.jsx(uA, {
          ...sA,
          children: l
        })
      })
    });
  });
  function gv(A, e, t = (r, n) => r === n) {
    return A.length === e.length && A.every((r, n) => t(r, e[n]));
  }
  const Bv = 2;
  function Yt(A, e, t, r, n) {
    return t === 1 ? Math.min(A + e, n) : Math.max(A - e, r);
  }
  function ud(A, e) {
    return A - e;
  }
  function jl(A, e) {
    const { index: t } = A.reduce((r, n, o) => {
      const i = Math.abs(e - n);
      return r === null || i < r.distance || i === r.distance ? {
        distance: i,
        index: o
      } : r;
    }, null) ?? {};
    return t;
  }
  function Sn(A, e) {
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
  function Fo(A, e, t) {
    return (A - e) * 100 / (t - e);
  }
  function hv(A, e, t) {
    return (t - e) * A + e;
  }
  function pv(A) {
    if (Math.abs(A) < 1) {
      const t = A.toExponential().split("e-"), r = t[0].split(".")[1];
      return (r ? r.length : 0) + parseInt(t[1], 10);
    }
    const e = A.toString().split(".")[1];
    return e ? e.length : 0;
  }
  function vv(A, e, t) {
    const r = Math.round((A - t) / e) * e + t;
    return Number(r.toFixed(pv(e)));
  }
  function Xl({ values: A, newValue: e, index: t }) {
    const r = A.slice();
    return r[t] = e, r.sort(ud);
  }
  function xn({ sliderRef: A, activeIndex: e, setActive: t }) {
    var _a2, _b2, _c2;
    const r = me(A.current);
    (!((_a2 = A.current) == null ? void 0 : _a2.contains(r.activeElement)) || Number((_b2 = r == null ? void 0 : r.activeElement) == null ? void 0 : _b2.getAttribute("data-index")) !== e) && ((_c2 = A.current) == null ? void 0 : _c2.querySelector(`[type="range"][data-index="${e}"]`).focus()), t && t(e);
  }
  function In(A, e) {
    return typeof A == "number" && typeof e == "number" ? A === e : typeof A == "object" && typeof e == "object" ? gv(A, e) : false;
  }
  const mv = {
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
  }, wv = (A) => A;
  let Hn;
  function zl() {
    return Hn === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? Hn = CSS.supports("touch-action", "none") : Hn = true), Hn;
  }
  function Cv(A) {
    const { "aria-labelledby": e, defaultValue: t, disabled: r = false, disableSwap: n = false, isRtl: o = false, marks: i = false, max: a = 100, min: s = 0, name: l, onChange: c, onChangeCommitted: u, orientation: d = "horizontal", rootRef: f, scale: g = wv, step: h = 1, shiftStep: F = 10, tabIndex: w, value: C } = A, b = p.useRef(void 0), [Q, S] = p.useState(-1), [v, U] = p.useState(-1), [T, I] = p.useState(false), B = p.useRef(0), H = p.useRef(null), [R, O] = dh({
      controlled: C,
      default: t ?? s,
      name: "Slider"
    }), _ = c && ((X, q, cA) => {
      const hA = X.nativeEvent || X, wA = new hA.constructor(hA.type, hA);
      Object.defineProperty(wA, "target", {
        writable: true,
        value: {
          value: q,
          name: l
        }
      }), H.current = q, c(wA, q, cA);
    }), M = Array.isArray(R);
    let k = M ? R.slice().sort(ud) : [
      R
    ];
    k = k.map((X) => X == null ? s : nr(X, s, a));
    const Y = i === true && h !== null ? [
      ...Array(Math.floor((a - s) / h) + 1)
    ].map((X, q) => ({
      value: s + h * q
    })) : i || [], z = Y.map((X) => X.value), [W, V] = p.useState(-1), J = p.useRef(null), oA = Ye(f, J), K = (X) => (q) => {
      var _a2;
      const cA = Number(q.currentTarget.getAttribute("data-index"));
      wo(q.target) && V(cA), U(cA), (_a2 = X == null ? void 0 : X.onFocus) == null ? void 0 : _a2.call(X, q);
    }, AA = (X) => (q) => {
      var _a2;
      wo(q.target) || V(-1), U(-1), (_a2 = X == null ? void 0 : X.onBlur) == null ? void 0 : _a2.call(X, q);
    }, Z = (X, q) => {
      const cA = Number(X.currentTarget.getAttribute("data-index")), hA = k[cA], wA = z.indexOf(hA);
      let vA = q;
      if (Y && h == null) {
        const Be = z[z.length - 1];
        vA >= Be ? vA = Be : vA <= z[0] ? vA = z[0] : vA = vA < hA ? z[wA - 1] : z[wA + 1];
      }
      if (vA = nr(vA, s, a), M) {
        n && (vA = nr(vA, k[cA - 1] || -1 / 0, k[cA + 1] || 1 / 0));
        const Be = vA;
        vA = Xl({
          values: k,
          newValue: vA,
          index: cA
        });
        let be = cA;
        n || (be = vA.indexOf(Be)), xn({
          sliderRef: J,
          activeIndex: be
        });
      }
      O(vA), V(cA), _ && !In(vA, R) && _(X, vA, cA), u && u(X, H.current ?? vA);
    }, rA = (X) => (q) => {
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
        const cA = Number(q.currentTarget.getAttribute("data-index")), hA = k[cA];
        let wA = null;
        if (h != null) {
          const vA = q.shiftKey ? F : h;
          switch (q.key) {
            case "ArrowUp":
              wA = Yt(hA, vA, 1, s, a);
              break;
            case "ArrowRight":
              wA = Yt(hA, vA, o ? -1 : 1, s, a);
              break;
            case "ArrowDown":
              wA = Yt(hA, vA, -1, s, a);
              break;
            case "ArrowLeft":
              wA = Yt(hA, vA, o ? 1 : -1, s, a);
              break;
            case "PageUp":
              wA = Yt(hA, F, 1, s, a);
              break;
            case "PageDown":
              wA = Yt(hA, F, -1, s, a);
              break;
            case "Home":
              wA = s;
              break;
            case "End":
              wA = a;
              break;
          }
        } else if (Y) {
          const vA = z[z.length - 1], Be = z.indexOf(hA), be = [
            o ? "ArrowRight" : "ArrowLeft",
            "ArrowDown",
            "PageDown",
            "Home"
          ], jA = [
            o ? "ArrowLeft" : "ArrowRight",
            "ArrowUp",
            "PageUp",
            "End"
          ];
          be.includes(q.key) ? Be === 0 ? wA = z[0] : wA = z[Be - 1] : jA.includes(q.key) && (Be === z.length - 1 ? wA = vA : wA = z[Be + 1]);
        }
        wA != null && Z(q, wA);
      }
      (_a2 = X == null ? void 0 : X.onKeyDown) == null ? void 0 : _a2.call(X, q);
    };
    Br(() => {
      var _a2;
      r && J.current.contains(document.activeElement) && ((_a2 = document.activeElement) == null ? void 0 : _a2.blur());
    }, [
      r
    ]), r && Q !== -1 && S(-1), r && W !== -1 && V(-1);
    const pA = (X) => (q) => {
      var _a2;
      (_a2 = X.onChange) == null ? void 0 : _a2.call(X, q), Z(q, q.target.valueAsNumber);
    }, uA = p.useRef(void 0);
    let sA = d;
    o && d === "horizontal" && (sA += "-reverse");
    const eA = ({ finger: X, move: q = false }) => {
      const { current: cA } = J, { width: hA, height: wA, bottom: vA, left: Be } = cA.getBoundingClientRect();
      let be;
      sA.startsWith("vertical") ? be = (vA - X.y) / wA : be = (X.x - Be) / hA, sA.includes("-reverse") && (be = 1 - be);
      let jA;
      if (jA = hv(be, s, a), h) jA = vv(jA, h, s);
      else {
        const yr = jl(z, jA);
        jA = z[yr];
      }
      jA = nr(jA, s, a);
      let De = 0;
      if (M) {
        q ? De = uA.current : De = jl(k, jA), n && (jA = nr(jA, k[De - 1] || -1 / 0, k[De + 1] || 1 / 0));
        const yr = jA;
        jA = Xl({
          values: k,
          newValue: jA,
          index: De
        }), n && q || (De = jA.indexOf(yr), uA.current = De);
      }
      return {
        newValue: jA,
        activeIndex: De
      };
    }, lA = it((X) => {
      const q = Sn(X, b);
      if (!q) return;
      if (B.current += 1, X.type === "mousemove" && X.buttons === 0) {
        dA(X);
        return;
      }
      const { newValue: cA, activeIndex: hA } = eA({
        finger: q,
        move: true
      });
      xn({
        sliderRef: J,
        activeIndex: hA,
        setActive: S
      }), O(cA), !T && B.current > Bv && I(true), _ && !In(cA, R) && _(X, cA, hA);
    }), dA = it((X) => {
      const q = Sn(X, b);
      if (I(false), !q) return;
      const { newValue: cA } = eA({
        finger: q,
        move: true
      });
      S(-1), X.type === "touchend" && U(-1), u && u(X, H.current ?? cA), b.current = void 0, E();
    }), m = it((X) => {
      if (r) return;
      zl() || X.preventDefault();
      const q = X.changedTouches[0];
      q != null && (b.current = q.identifier);
      const cA = Sn(X, b);
      if (cA !== false) {
        const { newValue: wA, activeIndex: vA } = eA({
          finger: cA
        });
        xn({
          sliderRef: J,
          activeIndex: vA,
          setActive: S
        }), O(wA), _ && !In(wA, R) && _(X, wA, vA);
      }
      B.current = 0;
      const hA = me(J.current);
      hA.addEventListener("touchmove", lA, {
        passive: true
      }), hA.addEventListener("touchend", dA, {
        passive: true
      });
    }), E = p.useCallback(() => {
      const X = me(J.current);
      X.removeEventListener("mousemove", lA), X.removeEventListener("mouseup", dA), X.removeEventListener("touchmove", lA), X.removeEventListener("touchend", dA);
    }, [
      dA,
      lA
    ]);
    p.useEffect(() => {
      const { current: X } = J;
      return X.addEventListener("touchstart", m, {
        passive: zl()
      }), () => {
        X.removeEventListener("touchstart", m), E();
      };
    }, [
      E,
      m
    ]), p.useEffect(() => {
      r && E();
    }, [
      r,
      E
    ]);
    const y = (X) => (q) => {
      var _a2;
      if ((_a2 = X.onMouseDown) == null ? void 0 : _a2.call(X, q), r || q.defaultPrevented || q.button !== 0) return;
      q.preventDefault();
      const cA = Sn(q, b);
      if (cA !== false) {
        const { newValue: wA, activeIndex: vA } = eA({
          finger: cA
        });
        xn({
          sliderRef: J,
          activeIndex: vA,
          setActive: S
        }), O(wA), _ && !In(wA, R) && _(q, wA, vA);
      }
      B.current = 0;
      const hA = me(J.current);
      hA.addEventListener("mousemove", lA, {
        passive: true
      }), hA.addEventListener("mouseup", dA);
    }, P = Fo(M ? k[0] : s, s, a), j = Fo(k[k.length - 1], s, a) - P, $ = (X = {}) => {
      const q = Pr(X), cA = {
        onMouseDown: y(q || {})
      }, hA = {
        ...q,
        ...cA
      };
      return {
        ...X,
        ref: oA,
        ...hA
      };
    }, fA = (X) => (q) => {
      var _a2;
      (_a2 = X.onMouseOver) == null ? void 0 : _a2.call(X, q);
      const cA = Number(q.currentTarget.getAttribute("data-index"));
      U(cA);
    }, BA = (X) => (q) => {
      var _a2;
      (_a2 = X.onMouseLeave) == null ? void 0 : _a2.call(X, q), U(-1);
    }, G = (X = {}) => {
      const q = Pr(X), cA = {
        onMouseOver: fA(q || {}),
        onMouseLeave: BA(q || {})
      };
      return {
        ...X,
        ...q,
        ...cA
      };
    }, N = (X) => ({
      pointerEvents: Q !== -1 && Q !== X ? "none" : void 0
    });
    let gA;
    return d === "vertical" && (gA = o ? "vertical-rl" : "vertical-lr"), {
      active: Q,
      axis: sA,
      axisProps: mv,
      dragging: T,
      focusedThumbIndex: W,
      getHiddenInputProps: (X = {}) => {
        const q = Pr(X), cA = {
          onChange: pA(q || {}),
          onFocus: K(q || {}),
          onBlur: AA(q || {}),
          onKeyDown: rA(q || {})
        }, hA = {
          ...q,
          ...cA
        };
        return {
          tabIndex: w,
          "aria-labelledby": e,
          "aria-orientation": d,
          "aria-valuemax": g(a),
          "aria-valuemin": g(s),
          name: l,
          type: "range",
          min: A.min,
          max: A.max,
          step: A.step === null && A.marks ? "any" : A.step ?? void 0,
          disabled: r,
          ...X,
          ...hA,
          style: {
            ...hh,
            direction: o ? "rtl" : "ltr",
            width: "100%",
            height: "100%",
            writingMode: gA
          }
        };
      },
      getRootProps: $,
      getThumbProps: G,
      marks: Y,
      open: v,
      range: M,
      rootRef: oA,
      trackLeap: j,
      trackOffset: P,
      values: k,
      getThumbStyle: N
    };
  }
  const yv = (A) => !A || !Nr(A);
  function bv(A) {
    return ke("MuiSlider", A);
  }
  const Se = Ce("MuiSlider", [
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
  ]), Qv = (A) => {
    const { open: e } = A;
    return {
      offset: bA(e && Se.valueLabelOpen),
      circle: Se.valueLabelCircle,
      label: Se.valueLabelLabel
    };
  };
  function Fv(A) {
    const { children: e, className: t, value: r } = A, n = Qv(A);
    return e ? p.cloneElement(e, {
      className: bA(e.props.className)
    }, L.jsxs(p.Fragment, {
      children: [
        e.props.children,
        L.jsx("span", {
          className: bA(n.offset, t),
          "aria-hidden": true,
          children: L.jsx("span", {
            className: n.circle,
            children: L.jsx("span", {
              className: n.label,
              children: r
            })
          })
        })
      ]
    })) : null;
  }
  function Yl(A) {
    return A;
  }
  let Uv, Ev, Sv, xv, Iv, Hv, dd, Tv, Lv;
  Uv = kA("span", {
    name: "MuiSlider",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        e[`color${IA(t.color)}`],
        t.size !== "medium" && e[`size${IA(t.size)}`],
        t.marked && e.marked,
        t.orientation === "vertical" && e.vertical,
        t.track === "inverted" && e.trackInverted,
        t.track === false && e.trackFalse
      ];
    }
  })(se(({ theme: A }) => ({
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
    [`&.${Se.disabled}`]: {
      pointerEvents: "none",
      cursor: "default",
      color: (A.vars || A).palette.grey[400]
    },
    [`&.${Se.dragging}`]: {
      [`& .${Se.thumb}, & .${Se.track}`]: {
        transition: "none"
      }
    },
    variants: [
      ...Object.entries(A.palette).filter(Gt()).map(([e]) => ({
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
  Ev = kA("span", {
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
  Sv = kA("span", {
    name: "MuiSlider",
    slot: "Track",
    overridesResolver: (A, e) => e.track
  })(se(({ theme: A }) => ({
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
      ...Object.entries(A.palette).filter(Gt()).map(([e]) => ({
        props: {
          color: e,
          track: "inverted"
        },
        style: {
          ...A.vars ? {
            backgroundColor: A.vars.palette.Slider[`${e}Track`],
            borderColor: A.vars.palette.Slider[`${e}Track`]
          } : {
            backgroundColor: tn(A.palette[e].main, 0.62),
            borderColor: tn(A.palette[e].main, 0.62),
            ...A.applyStyles("dark", {
              backgroundColor: en(A.palette[e].main, 0.5)
            }),
            ...A.applyStyles("dark", {
              borderColor: en(A.palette[e].main, 0.5)
            })
          }
        }
      }))
    ]
  })));
  xv = kA("span", {
    name: "MuiSlider",
    slot: "Thumb",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.thumb,
        e[`thumbColor${IA(t.color)}`],
        t.size !== "medium" && e[`thumbSize${IA(t.size)}`]
      ];
    }
  })(se(({ theme: A }) => ({
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
    [`&.${Se.disabled}`]: {
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
      ...Object.entries(A.palette).filter(Gt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&:hover, &.${Se.focusVisible}`]: {
            ...A.vars ? {
              boxShadow: `0px 0px 0px 8px rgba(${A.vars.palette[e].mainChannel} / 0.16)`
            } : {
              boxShadow: `0px 0px 0px 8px ${Ut(A.palette[e].main, 0.16)}`
            },
            "@media (hover: none)": {
              boxShadow: "none"
            }
          },
          [`&.${Se.active}`]: {
            ...A.vars ? {
              boxShadow: `0px 0px 0px 14px rgba(${A.vars.palette[e].mainChannel} / 0.16)`
            } : {
              boxShadow: `0px 0px 0px 14px ${Ut(A.palette[e].main, 0.16)}`
            }
          }
        }
      }))
    ]
  })));
  Iv = kA(Fv, {
    name: "MuiSlider",
    slot: "ValueLabel",
    overridesResolver: (A, e) => e.valueLabel
  })(se(({ theme: A }) => ({
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
          [`&.${Se.valueLabelOpen}`]: {
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
          [`&.${Se.valueLabelOpen}`]: {
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
  Hv = kA("span", {
    name: "MuiSlider",
    slot: "Mark",
    shouldForwardProp: (A) => Vs(A) && A !== "markActive",
    overridesResolver: (A, e) => {
      const { markActive: t } = A;
      return [
        e.mark,
        t && e.markActive
      ];
    }
  })(se(({ theme: A }) => ({
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
  dd = kA("span", {
    name: "MuiSlider",
    slot: "MarkLabel",
    shouldForwardProp: (A) => Vs(A) && A !== "markLabelActive",
    overridesResolver: (A, e) => e.markLabel
  })(se(({ theme: A }) => ({
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
  Tv = (A) => {
    const { disabled: e, dragging: t, marked: r, orientation: n, track: o, classes: i, color: a, size: s } = A, l = {
      root: [
        "root",
        e && "disabled",
        t && "dragging",
        r && "marked",
        n === "vertical" && "vertical",
        o === "inverted" && "trackInverted",
        o === false && "trackFalse",
        a && `color${IA(a)}`,
        s && `size${IA(s)}`
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
        s && `thumbSize${IA(s)}`,
        a && `thumbColor${IA(a)}`
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
    return Ke(l, bv, i);
  };
  Lv = ({ children: A }) => A;
  kv = p.forwardRef(function(e, t) {
    const r = ye({
      props: e,
      name: "MuiSlider"
    }), n = bh(), { "aria-label": o, "aria-valuetext": i, "aria-labelledby": a, component: s = "span", components: l = {}, componentsProps: c = {}, color: u = "primary", classes: d, className: f, disableSwap: g = false, disabled: h = false, getAriaLabel: F, getAriaValueText: w, marks: C = false, max: b = 100, min: Q = 0, name: S, onChange: v, onChangeCommitted: U, orientation: T = "horizontal", shiftStep: I = 10, size: B = "medium", step: H = 1, scale: R = Yl, slotProps: O, slots: _, tabIndex: M, track: k = "normal", value: Y, valueLabelDisplay: z = "off", valueLabelFormat: W = Yl, ...V } = r, J = {
      ...r,
      isRtl: n,
      max: b,
      min: Q,
      classes: d,
      disabled: h,
      disableSwap: g,
      orientation: T,
      marks: C,
      color: u,
      size: B,
      step: H,
      shiftStep: I,
      scale: R,
      track: k,
      valueLabelDisplay: z,
      valueLabelFormat: W
    }, { axisProps: oA, getRootProps: K, getHiddenInputProps: AA, getThumbProps: Z, open: rA, active: pA, axis: uA, focusedThumbIndex: sA, range: eA, dragging: lA, marks: dA, values: m, trackOffset: E, trackLeap: y, getThumbStyle: P } = Cv({
      ...J,
      rootRef: t
    });
    J.marked = dA.length > 0 && dA.some((VA) => VA.label), J.dragging = lA, J.focusedThumbIndex = sA;
    const j = Tv(J), $ = (_ == null ? void 0 : _.root) ?? l.Root ?? Uv, fA = (_ == null ? void 0 : _.rail) ?? l.Rail ?? Ev, BA = (_ == null ? void 0 : _.track) ?? l.Track ?? Sv, G = (_ == null ? void 0 : _.thumb) ?? l.Thumb ?? xv, N = (_ == null ? void 0 : _.valueLabel) ?? l.ValueLabel ?? Iv, gA = (_ == null ? void 0 : _.mark) ?? l.Mark ?? Hv, aA = (_ == null ? void 0 : _.markLabel) ?? l.MarkLabel ?? dd, X = (_ == null ? void 0 : _.input) ?? l.Input ?? "input", q = (O == null ? void 0 : O.root) ?? c.root, cA = (O == null ? void 0 : O.rail) ?? c.rail, hA = (O == null ? void 0 : O.track) ?? c.track, wA = (O == null ? void 0 : O.thumb) ?? c.thumb, vA = (O == null ? void 0 : O.valueLabel) ?? c.valueLabel, Be = (O == null ? void 0 : O.mark) ?? c.mark, be = (O == null ? void 0 : O.markLabel) ?? c.markLabel, jA = (O == null ? void 0 : O.input) ?? c.input, De = ut({
      elementType: $,
      getSlotProps: K,
      externalSlotProps: q,
      externalForwardedProps: V,
      additionalProps: {
        ...yv($) && {
          as: s
        }
      },
      ownerState: {
        ...J,
        ...q == null ? void 0 : q.ownerState
      },
      className: [
        j.root,
        f
      ]
    }), yr = ut({
      elementType: fA,
      externalSlotProps: cA,
      ownerState: J,
      className: j.rail
    }), kf = ut({
      elementType: BA,
      externalSlotProps: hA,
      additionalProps: {
        style: {
          ...oA[uA].offset(E),
          ...oA[uA].leap(y)
        }
      },
      ownerState: {
        ...J,
        ...hA == null ? void 0 : hA.ownerState
      },
      className: j.track
    }), Ri = ut({
      elementType: G,
      getSlotProps: Z,
      externalSlotProps: wA,
      ownerState: {
        ...J,
        ...wA == null ? void 0 : wA.ownerState
      },
      className: j.thumb
    }), Of = ut({
      elementType: N,
      externalSlotProps: vA,
      ownerState: {
        ...J,
        ...vA == null ? void 0 : vA.ownerState
      },
      className: j.valueLabel
    }), Di = ut({
      elementType: gA,
      externalSlotProps: Be,
      ownerState: J,
      className: j.mark
    }), Mi = ut({
      elementType: aA,
      externalSlotProps: be,
      ownerState: J,
      className: j.markLabel
    }), Kf = ut({
      elementType: X,
      getSlotProps: AA,
      externalSlotProps: jA,
      ownerState: J
    });
    return L.jsxs($, {
      ...De,
      children: [
        L.jsx(fA, {
          ...yr
        }),
        L.jsx(BA, {
          ...kf
        }),
        dA.filter((VA) => VA.value >= Q && VA.value <= b).map((VA, ZA) => {
          const _i = Fo(VA.value, Q, b), mn = oA[uA].offset(_i);
          let et;
          return k === false ? et = m.includes(VA.value) : et = k === "normal" && (eA ? VA.value >= m[0] && VA.value <= m[m.length - 1] : VA.value <= m[0]) || k === "inverted" && (eA ? VA.value <= m[0] || VA.value >= m[m.length - 1] : VA.value >= m[0]), L.jsxs(p.Fragment, {
            children: [
              L.jsx(gA, {
                "data-index": ZA,
                ...Di,
                ...!Nr(gA) && {
                  markActive: et
                },
                style: {
                  ...mn,
                  ...Di.style
                },
                className: bA(Di.className, et && j.markActive)
              }),
              VA.label != null ? L.jsx(aA, {
                "aria-hidden": true,
                "data-index": ZA,
                ...Mi,
                ...!Nr(aA) && {
                  markLabelActive: et
                },
                style: {
                  ...mn,
                  ...Mi.style
                },
                className: bA(j.markLabel, Mi.className, et && j.markLabelActive),
                children: VA.label
              }) : null
            ]
          }, ZA);
        }),
        m.map((VA, ZA) => {
          const _i = Fo(VA, Q, b), mn = oA[uA].offset(_i), et = z === "off" ? Lv : N;
          return L.jsx(et, {
            ...!Nr(et) && {
              valueLabelFormat: W,
              valueLabelDisplay: z,
              value: typeof W == "function" ? W(R(VA), ZA) : W,
              index: ZA,
              open: rA === ZA || pA === ZA || z === "on",
              disabled: h
            },
            ...Of,
            children: L.jsx(G, {
              "data-index": ZA,
              ...Ri,
              className: bA(j.thumb, Ri.className, pA === ZA && j.active, sA === ZA && j.focusVisible),
              style: {
                ...mn,
                ...P(ZA),
                ...Ri.style
              },
              children: L.jsx(X, {
                "data-index": ZA,
                "aria-label": F ? F(ZA) : o,
                "aria-valuenow": R(VA),
                "aria-labelledby": a,
                "aria-valuetext": w ? w(R(VA), ZA) : i,
                value: m[ZA],
                ...Kf
              })
            })
          }, ZA);
        })
      ]
    });
  });
  Ov = class extends window.visRxWidget {
    wrappedCollectionContent = true;
    static getI18nPrefix() {
      return "vis_2_widgets_collection_";
    }
    getPropertyValue = (e) => this.state.values[`${this.state.rxData[e]}.val`];
    setValue = (e, t, r = false) => {
      !e || e === "nothing_selected" || this.props.context.socket.setState(e, t, r).catch((n) => console.error(`Cannot set state ${e}: ${n}`));
    };
    wrapContent(e) {
      return L.jsxs(L.Fragment, {
        children: [
          L.jsx(R0, {}),
          L.jsx(ee, {
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
            children: L.jsx(ee, {
              className: "GENERIC-1",
              sx: {
                width: this.wrappedCollectionContent ? "calc(100% - 8px)" : "100%",
                height: this.wrappedCollectionContent ? "calc(100% - 8px)" : "100%"
              },
              children: e
            })
          })
        ]
      });
    }
  };
  Ze = p.createContext({});
  function Kv({ children: A, context: e }) {
    const t = e.mode, r = e.theme, n = p.useMemo(() => bi(ae(r, ae(t === "dark" ? {
      palette: {
        mode: "dark"
      }
    } : {}, {
      components: {
        MuiTypography: {}
      }
    }))), [
      t,
      r
    ]);
    return L.jsx(Cp, {
      theme: n,
      children: L.jsx(Ze.Provider, {
        value: e,
        children: A
      })
    });
  }
  Rv = function(A, e) {
    return L.jsx(Kv, {
      context: e,
      children: A
    });
  };
  let Dv, zi, Mv, Nv, Vv, Wv, jv;
  Dv = async (A, e) => {
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
  zi = (A, e = "oid") => {
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
  Mv = (A, e) => {
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
  _v = (A, e = "oid") => async (t, r, n, o) => {
    if (!r[e]) {
      zi(r, e), setTimeout(() => n(r), 100);
      return;
    }
    try {
      const i = await o.getObject(r[e]);
      if (!i) {
        zi(r, e), setTimeout(() => n(r), 100);
        return;
      }
      const a = i.common.type;
      if (!A.includes(a)) return;
      const s = {
        _id: i._id,
        name: i.common.name || "",
        type: a,
        icon: await Dv(o, i),
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
          r[`value${f}`] = Mv(c, a), r[`alias${f}`] = String(u);
        }));
      } else a === "boolean" && e === "oid" ? (r.values_count = 2, r.value1 = true, r.alias1 = "TRUE", r.value2 = false, r.alias2 = "FALSE") : e === "oid" && (r.values_count = 0);
      setTimeout(() => n(r), 100);
    } catch (i) {
      console.error(`Error handling OID change for ${r[e]}:`, i), zi(r, e), setTimeout(() => n(r), 100);
    }
  };
  Pv = (A) => [
    {
      name: "oid",
      type: "id",
      label: "oid",
      onChange: _v(A)
    },
    {
      label: "",
      type: "custom",
      component: () => L.jsx(MA, {}),
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
      component: () => L.jsx(MA, {}),
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
  Gv = () => [
    {
      label: "",
      type: "custom",
      component: () => L.jsx(MA, {
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
  Nv = () => [
    {
      type: "custom",
      component: () => L.jsx(MA, {})
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
      type: "custom",
      component: () => L.jsx(MA, {
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
      component: () => L.jsx(MA, {}),
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
      component: () => L.jsx(MA, {
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
      component: () => L.jsx(MA, {}),
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
      component: () => L.jsx(MA, {}),
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
      component: () => L.jsx(MA, {}),
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
      component: () => L.jsx(MA, {
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
      component: () => L.jsx(MA, {
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
  Vv = () => {
    const { isSignalVisible: A, refService: e, widget: t } = p.useContext(Ze), r = p.useMemo(() => {
      const o = [], i = Number(t.data["signals-count"]) || 0;
      for (let a = 0; a < i; a++) A(a) && o.push(a);
      return o;
    }, [
      t.data,
      A
    ]), n = p.useMemo(() => {
      const o = {};
      return r.forEach((i) => {
        o[i] = t.data[`signals-color-${i}`];
      }), o;
    }, [
      t.data,
      r
    ]);
    p.useEffect(() => {
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
  $v = (A, e = 28) => {
    const [t, r] = p.useState({
      width: void 0,
      height: void 0,
      maxWidth: void 0
    }), n = p.useCallback((i) => {
      if (i.length === 0) return;
      const a = i[0], { width: s, height: l } = a.contentRect, c = Math.round(s), u = Math.round(l), d = c <= u + e + 12 ? c - e - 12 : u;
      r({
        width: c,
        height: u,
        maxWidth: d
      });
    }, [
      e
    ]), o = p.useMemo(() => A ? typeof A == "object" && "current" in A ? A.current : A : null, [
      A
    ]);
    return p.useEffect(() => {
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
  Wv = (A) => {
    const { widget: e } = p.useContext(Ze), [t, r] = p.useState("100%"), [n, o] = p.useState("100%"), { width: i, height: a } = $v(A), s = p.useMemo(() => ({
      basePadding: e.data.basePadding || 0,
      isSquare: e.data.square || false,
      isCircle: e.data.circle || false
    }), [
      e.data.basePadding,
      e.data.square,
      e.data.circle
    ]), l = p.useMemo(() => s.basePadding * 16, [
      s.basePadding
    ]);
    return p.useEffect(() => {
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
  jv = [
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
  Fi = (A) => {
    const [e, t] = p.useState({}), [r, n] = p.useState({}), [o, i] = p.useState({}), [a, s] = p.useState({}), [l, c] = p.useState({}), u = JSON.stringify(A), d = p.useMemo(() => {
      const f = {}, g = {}, h = {}, F = {}, w = {}, C = JSON.parse(u);
      return jv.forEach((b) => {
        if (C[b]) {
          const Q = b.replace(/(-\w)/g, (S) => S[1].toUpperCase());
          b.includes("background") ? f[Q] = C[b] : b.includes("border") ? g[Q] = C[b] : b.includes("font") || b.includes("line-height") || b.includes("letter-spacing") || b.includes("word-spacing") ? F[Q] = C[b] : b.includes("text") || b.includes("color") ? h[Q] = C[b] : w[Q] = C[b];
        }
      }), {
        _backgroundStyles: f,
        _borderStyles: g,
        _textStyles: h,
        _fontStyles: F,
        _boxStyles: w
      };
    }, [
      u
    ]);
    return p.useEffect(() => {
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
  fd = p.forwardRef(({ children: A, data: e, oidValue: t = null, isValidType: r = true, bgActive: n = true, sx: o = {} }, i) => {
    const a = p.useRef(null), s = p.useRef(null), [l, c] = p.useState(null), [u, d] = p.useState(null), f = p.useRef(null), [g, h] = p.useState(null), F = p.useContext(Ze);
    if (!F) throw new Error("CollectionBase must be used within CollectionProvider");
    const { wrappedContent: w, widget: C } = F, b = C.data.oidObject, { backgroundStyles: Q, borderStyles: S, textStyles: v, fontStyles: U } = Fi(C.style), T = p.useRef(null), { width: I, height: B } = Wv(l || T), H = (t || t === 0 || t === false) && `${t}${(b == null ? void 0 : b.unit) === void 0 ? "" : b == null ? void 0 : b.unit}`;
    Vv();
    const R = b == null ? void 0 : b._id, O = e.footer || e.alias || e.value || H || "";
    return p.useEffect(() => {
      C.data.noFooter || g && (g.innerHTML = O);
    }, [
      O,
      C.data.noFooter,
      g
    ]), p.useEffect(() => {
      C.data.noHeader || u && (u.innerHTML = e.header);
    }, [
      e.header,
      C.data.noHeader,
      u
    ]), p.useImperativeHandle(i, () => ({
      get paper0() {
        return a == null ? void 0 : a.current;
      },
      get paper1() {
        return s == null ? void 0 : s.current;
      },
      get header() {
        return f == null ? void 0 : f.current;
      }
    })), L.jsxs(Oa, {
      ref: a,
      className: "BASE-PAPER-0",
      square: C.data.squaredCorner,
      variant: C.data.outlinedFrame ? "outlined" : "elevation",
      sx: {
        overflow: "hidden",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        ...Q,
        border: w ? S.border : null,
        borderWidth: w ? S.borderWidth : null,
        borderStyle: w ? S.borderStyle : null,
        borderRadius: w ? S.borderRadius : null,
        borderColor: w ? S.borderColor : e.frameBackgroundColorActive || e.frameBackgroundColor || S.borderColor,
        background: w ? C.data.frameBackgroundColorActive || e.frameBackgroundColorActive || e.frameBackgroundColor || C.data.frameBackgroundActive || e.frameBackgroundActive || e.frameBackground : "transparent"
      },
      children: [
        !!r && L.jsxs(L.Fragment, {
          children: [
            L.jsx(ee, {
              sx: {
                width: C.data.noHeader ? "0%" : "100%",
                height: C.data.noHeader ? "0%" : "auto",
                mt: (C.data.basePadding ?? 8) / 2,
                mb: -(C.data.basePadding ?? 8) / 2
              },
              children: L.jsx(Gr, {
                ref: (_) => {
                  d(_), f.current = _;
                },
                noWrap: true,
                variant: "body2",
                sx: {
                  ...U,
                  ...v,
                  fontSize: e.headerSize,
                  color: C.data.textColor || e.textColorActive || e.textColor
                }
              })
            }),
            L.jsx(ee, {
              className: "BASE-BOX-1",
              ref: c,
              sx: {
                overflow: "hidden",
                p: C.data.basePadding,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: L.jsx(Oa, {
                ref: s,
                className: "BASE-PAPER-1",
                elevation: C.data.outlined ? 0 : Number(C.data.baseElevation) || 0,
                square: !C.data.basePadding || C.data.squaredCorner,
                variant: C.data.outlined ? "outlined" : "elevation",
                sx: {
                  overflow: "hidden",
                  width: I,
                  height: B,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: w ? S.borderColor : e.backgroundColorActive || e.backgroundColor || S.borderColor,
                  background: w ? C.data.backgroundColorActive || n && e.backgroundColorActive || e.backgroundColor || C.data.backgroundActive || n && e.backgroundActive || e.background : "transparent",
                  borderRadius: C.data.circle || C.data.ellipse ? "50%" : null,
                  ...o
                },
                children: A
              })
            }),
            L.jsx(ee, {
              sx: {
                width: C.data.noFooter ? "0%" : "100%",
                height: C.data.noFooter ? "0%" : "auto",
                mt: -(C.data.basePadding ?? 8) / 2,
                mb: (C.data.basePadding ?? 8) / 2
              },
              children: L.jsx(Gr, {
                ref: h,
                noWrap: true,
                variant: "body2",
                sx: {
                  ...U,
                  ...v,
                  fontSize: e.footerSize,
                  color: C.data.textColor || e.textColorActive || e.textColor
                }
              })
            })
          ]
        }),
        !r && L.jsx(ee, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: L.jsx(Gr, {
            color: "primary.main",
            variant: "body2",
            sx: {
              p: 1,
              width: "100%",
              textAlign: "center"
            },
            children: R ? `${R} has an invalid type!` : "Please select a valid object ID"
          })
        })
      ]
    });
  });
  fd.displayName = "CollectionBase";
  function Jt(A, e) {
    return A[e];
  }
  function Fr(A) {
    return typeof A == "object" && A !== null && "sliderOrientation" in A;
  }
  const Xs = (A) => typeof A == "number" ? `${A / 100}rem` : null;
  zs = function(A) {
    const { theme: e, widget: t, widget: { data: r }, getPropertyValue: n } = p.useContext(Ze), o = r[`${A}Object`], { fontStyles: i, textStyles: a, backgroundStyles: s } = Fi(t.style), [l, c] = p.useState(), u = n(A), d = o == null ? void 0 : o.name, f = p.useCallback(Xs, []), g = p.useCallback((Q, S = "") => {
      const v = `${Q}${S}`;
      return Jt(r, v);
    }, [
      r
    ]), { states: h, widgetStates: F, minValue: w, maxValue: C } = p.useMemo(() => (() => {
      const S = [], v = {};
      let U = null, T = null;
      const I = o == null ? void 0 : o.type, B = (o == null ? void 0 : o.commonStates) || {}, H = Object.entries(B);
      if (I === "number" || I === "string" || I === "boolean" || I === "mixed") {
        for (let R = 1; R <= r.values_count; R++) {
          const O = r[`value${R}`], _ = r[`alias${R}`], M = o == null ? void 0 : o.unit;
          if (O != null && /\S/.test(String(O))) {
            const k = H.find(([z]) => z === String(O));
            S.push({
              value: k ? I === "number" ? Number(k[0]) : String(k[0]) : I === "number" ? Number(O) : O,
              label: String(_ && String(_).trim() !== "" ? _ : `${O}${M}`).replace(/(\r\n|\n|\r)/gm, ""),
              fontSize: (() => {
                if (String(u) === String(O) && typeof r.valueSizeActive == "number") return f(r.valueSizeActive);
                const W = Jt(r, `valueSize${R}`);
                if (typeof W == "number") return f(W);
                if (Fr(r) && typeof r.markerTextSize == "number") return f(r.markerTextSize);
                if (typeof r.valueSize == "number") return f(r.valueSize);
              })(),
              textColor: (() => {
                if (String(u) === String(O) && r.textColorActive) return r.textColorActive;
                const W = Jt(r, `textColor${R}`);
                if (W) return W;
                if (Fr(r) && r.markerTextColor) return r.markerTextColor;
                if (r.textColor) return r.textColor;
              })(),
              icon: (() => {
                const z = r[`icon${R}`] || r[`iconSmall${R}`] || r.icon || r.iconSmall;
                return typeof z == "string" ? z : void 0;
              })(),
              iconSize: typeof r[`iconSize${R}`] == "number" ? r[`iconSize${R}`] : void 0,
              iconWidth: (() => {
                if (String(u) === String(O) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const W = Jt(r, `iconSize${R}`);
                return typeof W == "number" ? W : Fr(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconHeight: (() => {
                if (String(u) === String(O) && typeof r.iconSizeActive == "number") return r.iconSizeActive;
                const W = Jt(r, `iconSize${R}`);
                return typeof W == "number" ? W : Fr(r) && typeof r.markerIconSize == "number" ? r.markerIconSize : typeof r.iconSize == "number" ? r.iconSize : 100;
              })(),
              iconXOffset: (() => {
                const z = g("iconXOffset", String(R));
                return z && z !== "0px" ? z : "0px";
              })(),
              iconYOffset: (() => {
                const z = g("iconYOffset", String(R));
                return z && z !== "0px" ? z : "0px";
              })(),
              iconColor: Jt(r, `iconColor${R}`) || (Fr(r) ? r.markerIconColor : void 0) || r.iconColor || e.palette.primary.main,
              backgroundColor: r.backgroundColor || s.backgroundColor || "",
              backgroundColorActive: g("backgroundColor", String(R)),
              background: String(r.background || s.background || ""),
              backgroundActive: g("background", String(R)),
              frameBackgroundColor: r.frameBackgroundColor || s.backgroundColor || "",
              frameBackgroundColorActive: g("frameBackgroundColor", String(R)),
              frameBackground: String(r.frameBackground || s.background || ""),
              frameBackgroundActive: g("frameBackground", String(R))
            });
            const Y = String(k ? k[0] : O);
            v[Y] = _ && String(_).trim() !== "" ? _ : `${O}${M}`;
          }
        }
        if (I === "number" && S.length) {
          const R = S.map((O) => typeof O.value == "number" ? O.value : NaN).filter((O) => !isNaN(O));
          R.length > 0 && (U = Math.min(...R), T = Math.max(...R));
        }
      }
      return {
        states: S,
        widgetStates: v,
        minValue: U,
        maxValue: T
      };
    })(), [
      o == null ? void 0 : o.type,
      o == null ? void 0 : o.commonStates,
      o == null ? void 0 : o.unit,
      r,
      e.palette.primary.main,
      s.backgroundColor,
      s.background,
      g,
      u,
      f
    ]), b = p.useMemo(() => {
      const Q = (v = "") => ({
        textColor: r.textColor || a.color || e.palette.primary.main,
        textColorActive: g("textColor", String(v)),
        header: String(r.headerActive || g("header", String(v)) || r.header || d || "").replace(/(\r\n|\n|\r)/gm, ""),
        headerSize: f(r.headerSize) || f(r.headerSizeActive) || f(g("headerSize", String(v))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        footer: String(r.footerActive || g("footer", String(v)) || r.footer || "").replace(/(\r\n|\n|\r)/gm, ""),
        footerSize: f(r.footerSize) || f(r.footerSizeActive) || f(g("footerSize", String(v))) || (typeof i.fontSize == "string" ? i.fontSize : null),
        alias: String(g("alias", String(v)) || "").replace(/(\r\n|\n|\r)/gm, ""),
        value: (() => {
          const U = g("value", String(v));
          return U != null ? `${U}${(o == null ? void 0 : o.unit) !== void 0 ? o.unit : ""}` : void 0;
        })(),
        valueSize: f(r.valueSize) || (typeof i.fontSize == "string" ? i.fontSize : null),
        valueSizeActive: typeof g("valueSize", String(v)) == "number" ? f(g("valueSize", String(v))) : null,
        icon: (() => {
          if (r.noIcon) return false;
          const U = r.icon || r.iconSmall;
          return typeof U == "string" ? U : false;
        })(),
        iconActive: (() => {
          const U = !r.noIcon && (g("icon", String(v)) || g("iconSmall", String(v)));
          return typeof U == "string" ? U : false;
        })(),
        iconSize: typeof r.iconSize == "number" && `calc(24px * ${r.iconSize} / 100)` || "24px",
        iconSizeActive: (() => {
          const U = g("iconSize", String(v));
          return U ? `calc(24px * ${U} / 100)` : false;
        })(),
        iconSizeActiveOnly: g("iconSize", String(v)),
        iconSizeOnly: g("iconSize", String(v)) || g("iconSize", String(v)) === 0 ? g("iconSize", String(v)) : r.iconSize,
        iconColor: r.iconColor,
        iconColorActive: g("iconColor", String(v)),
        iconHover: r.iconHover ? `${r.iconHover}%` : void 0,
        iconHoverActive: (() => {
          const U = g("iconHover", String(v));
          return U ? `${U}%` : void 0;
        })(),
        iconXOffset: !!g("iconXOffset", String(v)) && g("iconXOffset", String(v)) !== "0px" && g("iconXOffset", String(v)) || "0px",
        iconYOffset: !!g("iconYOffset", String(v)) && g("iconYOffset", String(v)) !== "0px" && g("iconYOffset", String(v)) || "0px",
        backgroundColor: r.backgroundColor || s.backgroundColor || "",
        backgroundColorActive: g("backgroundColor", String(v)),
        background: String(r.background || s.background || ""),
        backgroundActive: g("background", String(v)),
        frameBackgroundColor: r.frameBackgroundColor || s.backgroundColor || "",
        frameBackgroundColorActive: g("frameBackgroundColor", String(v)),
        frameBackground: String(r.frameBackground || s.background || ""),
        frameBackgroundActive: g("frameBackground", String(v))
      });
      switch (o == null ? void 0 : o.type) {
        case "mixed":
        case "boolean":
        case "number":
        case "string": {
          const v = h.findIndex((U) => String(U.value) === String(u));
          return v !== -1 ? (c(v + 1), Q(String(v + 1))) : (c(void 0), Q(""));
        }
        default:
          return Q("");
      }
    }, [
      o,
      u,
      d,
      r,
      h,
      e,
      i,
      a,
      s,
      f,
      g
    ]);
    return {
      states: h,
      widgetStates: F,
      minValue: w,
      maxValue: C,
      data: b,
      activeIndex: l,
      setActiveIndex: c,
      oidValue: u
    };
  };
  function Jl(A) {
    return !(A == null || `${A}`.trim() === "" || Number.isNaN(+A));
  }
  var Ga = function(A, e) {
    return Ga = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, Ga(A, e);
  };
  function St(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Ga(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  function Xv(A, e, t, r) {
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
  function gd(A, e) {
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
  function pr(A) {
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
  function Uo(A, e) {
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
  function Eo(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }
  function dr(A) {
    return this instanceof dr ? (this.v = A, this) : new dr(A);
  }
  function zv(A, e, t) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var r = t.apply(A, e || []), n, o = [];
    return n = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", i), n[Symbol.asyncIterator] = function() {
      return this;
    }, n;
    function i(f) {
      return function(g) {
        return Promise.resolve(g).then(f, u);
      };
    }
    function a(f, g) {
      r[f] && (n[f] = function(h) {
        return new Promise(function(F, w) {
          o.push([
            f,
            h,
            F,
            w
          ]) > 1 || s(f, h);
        });
      }, g && (n[f] = g(n[f])));
    }
    function s(f, g) {
      try {
        l(r[f](g));
      } catch (h) {
        d(o[0][3], h);
      }
    }
    function l(f) {
      f.value instanceof dr ? Promise.resolve(f.value.v).then(c, u) : d(o[0][2], f);
    }
    function c(f) {
      s("next", f);
    }
    function u(f) {
      s("throw", f);
    }
    function d(f, g) {
      f(g), o.shift(), o.length && s(o[0][0], o[0][1]);
    }
  }
  function Yv(A) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var e = A[Symbol.asyncIterator], t;
    return e ? e.call(A) : (A = typeof pr == "function" ? pr(A) : A[Symbol.iterator](), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
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
  function re(A) {
    return typeof A == "function";
  }
  function Bd(A) {
    var e = function(r) {
      Error.call(r), r.stack = new Error().stack;
    }, t = A(e);
    return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
  }
  var Yi = Bd(function(A) {
    return function(t) {
      A(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(r, n) {
        return n + 1 + ") " + r.toString();
      }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
    };
  });
  function So(A, e) {
    if (A) {
      var t = A.indexOf(e);
      0 <= t && A.splice(t, 1);
    }
  }
  var Bn = (function() {
    function A(e) {
      this.initialTeardown = e, this.closed = false, this._parentage = null, this._finalizers = null;
    }
    return A.prototype.unsubscribe = function() {
      var e, t, r, n, o;
      if (!this.closed) {
        this.closed = true;
        var i = this._parentage;
        if (i) if (this._parentage = null, Array.isArray(i)) try {
          for (var a = pr(i), s = a.next(); !s.done; s = a.next()) {
            var l = s.value;
            l.remove(this);
          }
        } catch (h) {
          e = {
            error: h
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
        if (re(c)) try {
          c();
        } catch (h) {
          o = h instanceof Yi ? h.errors : [
            h
          ];
        }
        var u = this._finalizers;
        if (u) {
          this._finalizers = null;
          try {
            for (var d = pr(u), f = d.next(); !f.done; f = d.next()) {
              var g = f.value;
              try {
                Zl(g);
              } catch (h) {
                o = o ?? [], h instanceof Yi ? o = Eo(Eo([], Uo(o)), Uo(h.errors)) : o.push(h);
              }
            }
          } catch (h) {
            r = {
              error: h
            };
          } finally {
            try {
              f && !f.done && (n = d.return) && n.call(d);
            } finally {
              if (r) throw r.error;
            }
          }
        }
        if (o) throw new Yi(o);
      }
    }, A.prototype.add = function(e) {
      var t;
      if (e && e !== this) if (this.closed) Zl(e);
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
      t === e ? this._parentage = null : Array.isArray(t) && So(t, e);
    }, A.prototype.remove = function(e) {
      var t = this._finalizers;
      t && So(t, e), e instanceof A && e._removeParent(this);
    }, A.EMPTY = (function() {
      var e = new A();
      return e.closed = true, e;
    })(), A;
  })(), hd = Bn.EMPTY;
  function pd(A) {
    return A instanceof Bn || A && "closed" in A && re(A.remove) && re(A.add) && re(A.unsubscribe);
  }
  function Zl(A) {
    re(A) ? A() : A.unsubscribe();
  }
  var Jv = {
    Promise: void 0
  }, Zv = {
    setTimeout: function(A, e) {
      for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
      return setTimeout.apply(void 0, Eo([
        A,
        e
      ], Uo(t)));
    },
    clearTimeout: function(A) {
      return clearTimeout(A);
    },
    delegate: void 0
  };
  function vd(A) {
    Zv.setTimeout(function() {
      throw A;
    });
  }
  function ql() {
  }
  function uo(A) {
    A();
  }
  var Ys = (function(A) {
    St(e, A);
    function e(t) {
      var r = A.call(this) || this;
      return r.isStopped = false, t ? (r.destination = t, pd(t) && t.add(r)) : r.destination = em, r;
    }
    return e.create = function(t, r, n) {
      return new Na(t, r, n);
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
  })(Bn), qv = (function() {
    function A(e) {
      this.partialObserver = e;
    }
    return A.prototype.next = function(e) {
      var t = this.partialObserver;
      if (t.next) try {
        t.next(e);
      } catch (r) {
        Tn(r);
      }
    }, A.prototype.error = function(e) {
      var t = this.partialObserver;
      if (t.error) try {
        t.error(e);
      } catch (r) {
        Tn(r);
      }
      else Tn(e);
    }, A.prototype.complete = function() {
      var e = this.partialObserver;
      if (e.complete) try {
        e.complete();
      } catch (t) {
        Tn(t);
      }
    }, A;
  })(), Na = (function(A) {
    St(e, A);
    function e(t, r, n) {
      var o = A.call(this) || this, i;
      return re(t) || !t ? i = {
        next: t ?? void 0,
        error: r ?? void 0,
        complete: n ?? void 0
      } : i = t, o.destination = new qv(i), o;
    }
    return e;
  })(Ys);
  function Tn(A) {
    vd(A);
  }
  function Am(A) {
    throw A;
  }
  var em = {
    closed: true,
    next: ql,
    error: Am,
    complete: ql
  }, Js = (function() {
    return typeof Symbol == "function" && Symbol.observable || "@@observable";
  })();
  function tm(A) {
    return A;
  }
  function rm(A) {
    return A.length === 0 ? tm : A.length === 1 ? A[0] : function(t) {
      return A.reduce(function(r, n) {
        return n(r);
      }, t);
    };
  }
  var lt = (function() {
    function A(e) {
      e && (this._subscribe = e);
    }
    return A.prototype.lift = function(e) {
      var t = new A();
      return t.source = this, t.operator = e, t;
    }, A.prototype.subscribe = function(e, t, r) {
      var n = this, o = om(e) ? e : new Na(e, t, r);
      return uo(function() {
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
      return t = Ac(t), new t(function(n, o) {
        var i = new Na({
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
    }, A.prototype[Js] = function() {
      return this;
    }, A.prototype.pipe = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return rm(e)(this);
    }, A.prototype.toPromise = function(e) {
      var t = this;
      return e = Ac(e), new e(function(r, n) {
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
  function Ac(A) {
    var e;
    return (e = A ?? Jv.Promise) !== null && e !== void 0 ? e : Promise;
  }
  function nm(A) {
    return A && re(A.next) && re(A.error) && re(A.complete);
  }
  function om(A) {
    return A && A instanceof Ys || nm(A) && pd(A);
  }
  function im(A) {
    return re(A == null ? void 0 : A.lift);
  }
  function md(A) {
    return function(e) {
      if (im(e)) return e.lift(function(t) {
        try {
          return A(t, this);
        } catch (r) {
          this.error(r);
        }
      });
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  function Va(A, e, t, r, n) {
    return new am(A, e, t, r, n);
  }
  var am = (function(A) {
    St(e, A);
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
  })(Ys), sm = Bd(function(A) {
    return function() {
      A(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
    };
  }), wd = (function(A) {
    St(e, A);
    function e() {
      var t = A.call(this) || this;
      return t.closed = false, t.currentObservers = null, t.observers = [], t.isStopped = false, t.hasError = false, t.thrownError = null, t;
    }
    return e.prototype.lift = function(t) {
      var r = new ec(this, this);
      return r.operator = t, r;
    }, e.prototype._throwIfClosed = function() {
      if (this.closed) throw new sm();
    }, e.prototype.next = function(t) {
      var r = this;
      uo(function() {
        var n, o;
        if (r._throwIfClosed(), !r.isStopped) {
          r.currentObservers || (r.currentObservers = Array.from(r.observers));
          try {
            for (var i = pr(r.currentObservers), a = i.next(); !a.done; a = i.next()) {
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
      uo(function() {
        if (r._throwIfClosed(), !r.isStopped) {
          r.hasError = r.isStopped = true, r.thrownError = t;
          for (var n = r.observers; n.length; ) n.shift().error(t);
        }
      });
    }, e.prototype.complete = function() {
      var t = this;
      uo(function() {
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
      return o || i ? hd : (this.currentObservers = null, a.push(t), new Bn(function() {
        r.currentObservers = null, So(a, t);
      }));
    }, e.prototype._checkFinalizedStatuses = function(t) {
      var r = this, n = r.hasError, o = r.thrownError, i = r.isStopped;
      n ? t.error(o) : i && t.complete();
    }, e.prototype.asObservable = function() {
      var t = new lt();
      return t.source = this, t;
    }, e.create = function(t, r) {
      return new ec(t, r);
    }, e;
  })(lt), ec = (function(A) {
    St(e, A);
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
      return (n = (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)) !== null && n !== void 0 ? n : hd;
    }, e;
  })(wd), lm = {
    now: function() {
      return Date.now();
    }
  }, cm = (function(A) {
    St(e, A);
    function e(t, r) {
      return A.call(this) || this;
    }
    return e.prototype.schedule = function(t, r) {
      return this;
    }, e;
  })(Bn), tc = {
    setInterval: function(A, e) {
      for (var t = [], r = 2; r < arguments.length; r++) t[r - 2] = arguments[r];
      return setInterval.apply(void 0, Eo([
        A,
        e
      ], Uo(t)));
    },
    clearInterval: function(A) {
      return clearInterval(A);
    },
    delegate: void 0
  }, um = (function(A) {
    St(e, A);
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
      return n === void 0 && (n = 0), tc.setInterval(t.flush.bind(t, this), n);
    }, e.prototype.recycleAsyncId = function(t, r, n) {
      if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === false) return r;
      r != null && tc.clearInterval(r);
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
        this.work = this.state = this.scheduler = null, this.pending = false, So(o, this), r != null && (this.id = this.recycleAsyncId(n, r, null)), this.delay = null, A.prototype.unsubscribe.call(this);
      }
    }, e;
  })(cm), rc = (function() {
    function A(e, t) {
      t === void 0 && (t = A.now), this.schedulerActionCtor = e, this.now = t;
    }
    return A.prototype.schedule = function(e, t, r) {
      return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(r, t);
    }, A.now = lm.now, A;
  })(), dm = (function(A) {
    St(e, A);
    function e(t, r) {
      r === void 0 && (r = rc.now);
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
  })(rc), Zs = new dm(um), fm = Zs;
  function gm(A) {
    return A && re(A.schedule);
  }
  var Bm = (function(A) {
    return A && typeof A.length == "number" && typeof A != "function";
  });
  function hm(A) {
    return re(A == null ? void 0 : A.then);
  }
  function pm(A) {
    return re(A[Js]);
  }
  function vm(A) {
    return Symbol.asyncIterator && re(A == null ? void 0 : A[Symbol.asyncIterator]);
  }
  function mm(A) {
    return new TypeError("You provided " + (A !== null && typeof A == "object" ? "an invalid object" : "'" + A + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  function wm() {
    return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
  }
  var Cm = wm();
  function ym(A) {
    return re(A == null ? void 0 : A[Cm]);
  }
  function bm(A) {
    return zv(this, arguments, function() {
      var t, r, n, o;
      return gd(this, function(i) {
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
              dr(t.read())
            ];
          case 3:
            return r = i.sent(), n = r.value, o = r.done, o ? [
              4,
              dr(void 0)
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
              dr(n)
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
  function Qm(A) {
    return re(A == null ? void 0 : A.getReader);
  }
  function Fm(A) {
    if (A instanceof lt) return A;
    if (A != null) {
      if (pm(A)) return Um(A);
      if (Bm(A)) return Em(A);
      if (hm(A)) return Sm(A);
      if (vm(A)) return Cd(A);
      if (ym(A)) return xm(A);
      if (Qm(A)) return Im(A);
    }
    throw mm(A);
  }
  function Um(A) {
    return new lt(function(e) {
      var t = A[Js]();
      if (re(t.subscribe)) return t.subscribe(e);
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function Em(A) {
    return new lt(function(e) {
      for (var t = 0; t < A.length && !e.closed; t++) e.next(A[t]);
      e.complete();
    });
  }
  function Sm(A) {
    return new lt(function(e) {
      A.then(function(t) {
        e.closed || (e.next(t), e.complete());
      }, function(t) {
        return e.error(t);
      }).then(null, vd);
    });
  }
  function xm(A) {
    return new lt(function(e) {
      var t, r;
      try {
        for (var n = pr(A), o = n.next(); !o.done; o = n.next()) {
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
  function Cd(A) {
    return new lt(function(e) {
      Hm(A, e).catch(function(t) {
        return e.error(t);
      });
    });
  }
  function Im(A) {
    return Cd(bm(A));
  }
  function Hm(A, e) {
    var t, r, n, o;
    return Xv(this, void 0, void 0, function() {
      var i, a;
      return gd(this, function(s) {
        switch (s.label) {
          case 0:
            s.trys.push([
              0,
              5,
              6,
              11
            ]), t = Yv(A), s.label = 1;
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
  function Tm(A) {
    return A instanceof Date && !isNaN(A);
  }
  function Lm(A, e, t) {
    A === void 0 && (A = 0), t === void 0 && (t = fm);
    var r = -1;
    return e != null && (gm(e) ? t = e : r = e), new lt(function(n) {
      var o = Tm(A) ? +A - t.now() : A;
      o < 0 && (o = 0);
      var i = 0;
      return t.schedule(function() {
        n.closed || (n.next(i++), 0 <= r ? this.schedule(void 0, r) : n.complete());
      }, o);
    });
  }
  function km(A, e) {
    return e === void 0 && (e = Zs), md(function(t, r) {
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
      t.subscribe(Va(r, function(l) {
        o = l, i = e.now(), n || (n = e.schedule(s, A), r.add(n));
      }, function() {
        a(), r.complete();
      }, void 0, function() {
        o = n = null;
      }));
    });
  }
  function Om(A, e) {
    return md(function(t, r) {
      var n = e ?? {}, o = n.leading, i = o === void 0 ? true : o, a = n.trailing, s = a === void 0 ? false : a, l = false, c = null, u = null, d = false, f = function() {
        u == null ? void 0 : u.unsubscribe(), u = null, s && (F(), d && r.complete());
      }, g = function() {
        u = null, d && r.complete();
      }, h = function(w) {
        return u = Fm(A(w)).subscribe(Va(r, f, g));
      }, F = function() {
        if (l) {
          l = false;
          var w = c;
          c = null, r.next(w), !d && h(w);
        }
      };
      t.subscribe(Va(r, function(w) {
        l = true, c = w, !(u && !u.closed) && (i ? F() : h(w));
      }, function() {
        d = true, !(s && l && u && !u.closed) && r.complete();
      }));
    });
  }
  function Km(A, e, t) {
    e === void 0 && (e = Zs);
    var r = Lm(A, e);
    return Om(function() {
      return r;
    }, t);
  }
  function Rm({ oidObject: A, data: { sampleInterval: e, sampleIntervalValue: t, delay: r } }) {
    const { setValue: n } = p.useContext(Ze), o = p.useRef(), i = p.useRef(null), a = p.useRef(n);
    a.current = n;
    const s = A == null ? void 0 : A._id, l = p.useMemo(() => {
      const c = Number(t), u = Number(r);
      return e ? c : u;
    }, [
      e,
      t,
      r
    ]);
    return p.useEffect(() => {
      if (o.current || (o.current = new wd()), !s) return;
      const c = o.current;
      return i.current && i.current.unsubscribe(), i.current = c.pipe(e ? Km(l, void 0, {
        leading: false,
        trailing: true
      }) : km(l)).subscribe((u) => {
        a.current(s, u);
      }), () => {
        i.current && (i.current.unsubscribe(), i.current = null);
      };
    }, [
      e,
      l,
      s
    ]), p.useEffect(() => () => {
      i.current && (i.current.unsubscribe(), i.current = null), o.current && o.current.complete();
    }, []), s ? {
      next: (c) => {
        var _a2;
        (_a2 = o.current) == null ? void 0 : _a2.next(c);
      }
    } : null;
  }
  const Ln = 1111111111111;
  function Dm(A, e) {
    switch (e) {
      case "string":
        return String(A);
      case "number":
        return Jl(A) ? Number(A) : void 0;
      case "mixed":
        return /^true$/i.test(String(A)) ? true : /^false$/i.test(String(A)) ? false : Jl(A) ? Number(A) : String(A);
      case "boolean":
        return /^true$/i.test(String(A));
      default:
        return A;
    }
  }
  function Mm(A, e) {
    const t = String(A ?? ""), r = String(e ?? "");
    if (t === r) return false;
    const n = Number(A ?? 0), o = Number(e ?? 0);
    return Math.abs(n - o) >= 1;
  }
  let Pm, Gm, Vm;
  _m = (A) => {
    const { setState: e, widget: t, getPropertyValue: r, values: n } = p.useContext(Ze), { data: o } = zs("oid"), i = t.data[`${A}Object`], a = r(A), s = p.useRef({
      lc: void 0,
      value: void 0
    }), l = p.useRef(0), c = Number(o.delay ?? t.data.delay) || 300, u = (i == null ? void 0 : i._id) ? n[`${i._id}.lc`] : void 0, d = (i == null ? void 0 : i._id) ? n[`${i._id}.val`] : void 0, f = p.useMemo(() => {
      if (!(i == null ? void 0 : i._id)) return false;
      if (u === Ln) return s.current = {
        lc: Ln,
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
      const F = s.current.lc !== u, w = Mm(s.current.value, d);
      return s.current = {
        lc: u,
        value: d
      }, F && w;
    }, [
      i == null ? void 0 : i._id,
      u,
      d
    ]), g = Rm({
      oidObject: i,
      data: {
        delay: t.data.delay,
        sampleInterval: t.data.sampleInterval,
        sampleIntervalValue: t.data.sampleIntervalValue
      }
    }), h = p.useCallback((F, w = false) => {
      if (!(i == null ? void 0 : i._id)) return;
      const C = Dm(F, i == null ? void 0 : i.type);
      C != null && (e((b) => ({
        values: {
          ...b.values,
          [`${i._id}.val`]: C,
          [`${i._id}.lc`]: Ln
        }
      })), l.current = Date.now() + c + 1500, s.current = {
        lc: Ln,
        value: C
      }, !w && g && g.next(C));
    }, [
      c,
      g,
      i,
      e
    ]);
    return {
      value: a,
      hasBackendChange: f,
      updateValue: h
    };
  };
  Pm = (A) => !A || typeof A != "string" ? false : /^data:image\/(svg\+xml|png|jpe?g|gif);base64,/i.test(A);
  xo = (A, e) => Pm(A) ? !e || e === "" ? {} : {
    color: e,
    filter: "drop-shadow(0px 10000px 0)",
    transform: "translateY(-10000px)"
  } : {};
  Gm = ({ marks: A, sliderOrientation: e, aliasActive: t, activeMarkIndex: r, defaultIconColor: n, ...o }) => {
    var _a2, _b2;
    const [i, a] = p.useState(null), { data: s } = zs("oid"), l = p.useContext(Ze), { widget: c } = l, { fontStyles: u, textStyles: d } = Fi(c.style), f = o["data-index"], g = (_b2 = (_a2 = o.ownerState) == null ? void 0 : _a2.marks) == null ? void 0 : _b2[f], h = r === f, F = p.useCallback(Xs, []);
    return p.useEffect(() => {
      i && (g == null ? void 0 : g.label) && (h && t ? i.innerHTML = t : i.innerHTML = g.label);
    }, [
      g == null ? void 0 : g.label,
      i,
      h,
      t,
      f
    ]), A && g ? L.jsx(dd, {
      ...o,
      children: L.jsxs(ee, {
        sx: {
          display: "flex",
          flexDirection: e === "vertical" ? "row" : "column",
          alignItems: "center",
          justifyContent: "center"
        },
        children: [
          L.jsx(Gr, {
            "data-font": "active",
            ref: a,
            sx: {
              ...u,
              ...d,
              textTransform: "none",
              flexGrow: 1,
              pr: e === "vertical" ? 1 : 0,
              pb: e === "vertical" ? 0 : 1,
              fontSize: h && typeof c.data.valueSizeActive == "number" && F(c.data.valueSizeActive) || g.fontSize || s.valueSize || "1rem",
              color: h && c.data.textColorActive || g.textColor || s.textColor
            }
          }),
          L.jsx(ee, {
            "data-position": "active",
            sx: {
              position: "relative",
              bottom: g.iconYOffset,
              left: g.iconXOffset,
              flexGrow: 1
            },
            children: (() => {
              const w = h && (c.data.iconActive || c.data.iconSmallActive) || g.icon || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", C = (h && c.data.iconColorActive && c.data.iconColorActive !== "" ? c.data.iconColorActive : null) || (g.iconColor && g.iconColor !== "" ? g.iconColor : null) || (s.iconColor && s.iconColor !== "" ? s.iconColor : null) || n || void 0;
              return L.jsx("img", {
                "data-img": "active",
                src: w,
                alt: "",
                style: {
                  position: "relative",
                  width: h && typeof c.data.iconSizeActive == "number" ? `${24 * c.data.iconSizeActive / 100}px` : `${24 * g.iconWidth / 100}px`,
                  ...xo(w, C)
                }
              });
            })()
          })
        ]
      })
    }) : null;
  };
  Nm = ({ data: A, widget: e }) => {
    const r = p.useContext(Ze).theme, n = (typeof A.icon == "string" ? A.icon : void 0) || (typeof A.iconActive == "string" ? A.iconActive : void 0), o = (typeof A.iconSize == "string" ? A.iconSize : void 0) || (typeof A.iconSizeActive == "string" ? A.iconSizeActive : void 0), i = A.iconColorActive || A.iconColor || r.palette.primary.main;
    return !e.data.noHeaderIcon && n ? L.jsx("img", {
      alt: "",
      src: n,
      style: {
        position: "absolute",
        top: `calc(0px - ${e.data.iconYOffset || 0})`,
        right: `calc(0px - ${e.data.iconXOffset || 0})`,
        height: o,
        ...xo(n, i)
      }
    }) : null;
  };
  Vm = () => {
    const A = p.useContext(Ze), { widget: { data: { oidObject: e } }, widget: t, theme: r } = A, { fontStyles: n, textStyles: o } = Fi(t.style), { data: i, states: a, minValue: s, maxValue: l, activeIndex: c } = zs("oid"), [u, d] = p.useState(null), { value: f, updateValue: g, hasBackendChange: h } = _m("oid"), [F, w] = p.useState(typeof f == "number" ? f : void 0), C = p.useRef(null), [b, Q] = p.useState({
      x: 0,
      y: 0
    }), S = t.data.startIconColor || i.iconColor || r.palette.primary.main, v = t.data.endIconColor || i.iconColor || r.palette.primary.main, U = t.data.sliderOrientation === "horizontal" ? t.data.iconMin || t.data.iconSmallMin : t.data.iconMax || t.data.iconSmallMax, T = t.data.sliderOrientation === "horizontal" ? t.data.iconMax || t.data.iconSmallMax : t.data.iconMin || t.data.iconSmallMin, I = e == null ? void 0 : e.type, B = I === "number", H = p.useCallback(Xs, []), R = p.useMemo(() => !t.data.onlyStates && t.data.minValue !== void 0 ? Number(t.data.minValue) : s, [
      t.data.onlyStates,
      t.data.minValue,
      s
    ]), O = p.useMemo(() => !t.data.onlyStates && t.data.maxValue !== void 0 ? Number(t.data.maxValue) : l, [
      t.data.onlyStates,
      t.data.maxValue,
      l
    ]), _ = p.useMemo(() => {
      const k = a.map((V) => ({
        value: Number(V.value),
        label: V.label,
        fontSize: V.fontSize,
        textColor: V.textColor,
        icon: V.icon,
        iconWidth: V.iconWidth,
        iconHeight: V.iconHeight,
        iconXOffset: V.iconXOffset,
        iconYOffset: V.iconYOffset,
        iconColor: V.iconColor
      }));
      if (t.data.onlyStates) return k.sort((V, J) => V.value - J.value);
      const Y = R, z = O;
      k && Y !== null && !k.some((V) => V.value === Y) && k.push({
        value: Y,
        label: `${Y}${(e == null ? void 0 : e.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0
      }), k && z !== null && !k.some((V) => V.value === z) && k.push({
        value: z,
        label: `${z}${(e == null ? void 0 : e.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0
      });
      const W = Number(t.data.markStep) || 1;
      if (Y !== null && z !== null) for (let V = Y + W; V < z; V += W) k.some((J) => J.value === V) || k.push({
        value: V,
        label: `${V}${(e == null ? void 0 : e.unit) || ""}`,
        fontSize: void 0,
        textColor: void 0,
        icon: "",
        iconWidth: 100,
        iconHeight: 100,
        iconXOffset: "0px",
        iconYOffset: "0px",
        iconColor: void 0
      });
      return k.sort((V, J) => V.value - J.value), k;
    }, [
      a,
      R,
      O,
      t.data.markStep,
      e == null ? void 0 : e.unit,
      t.data.onlyStates
    ]);
    p.useEffect(() => {
      F === void 0 && typeof f == "number" && w(f);
    }, [
      f,
      F
    ]), p.useEffect(() => {
      h && w(typeof f == "number" ? f : void 0);
    }, [
      h,
      f
    ]);
    const M = () => {
      if (!C.current) return;
      const k = C.current.querySelector(".MuiSlider-root"), Y = C.current.querySelector(".MuiSlider-rail");
      if (k && Y) {
        const z = C.current.getBoundingClientRect(), W = Y.getBoundingClientRect(), V = W.left - z.left + W.width / 2, J = W.top - z.top + W.height / 2, oA = z.width / 2, K = z.height / 2;
        Q({
          x: V - oA,
          y: J - K
        });
      }
    };
    return p.useEffect(() => {
      const k = setTimeout(M, 100);
      return () => clearTimeout(k);
    }, [
      t.data.marks,
      t.data.sliderOrientation,
      t.data.iconSizeStart,
      t.data.iconSizeEnd,
      F
    ]), p.useEffect(() => {
      if (!C.current) return;
      const k = new ResizeObserver(M);
      return k.observe(C.current), () => k.disconnect();
    }, []), p.useEffect(() => {
      if (f === void 0) return;
      const k = _.findIndex((Y) => String(Y.value) === String(f));
      k !== -1 && d(k);
    }, [
      f,
      _
    ]), L.jsxs(fd, {
      isValidType: B,
      data: i,
      oidValue: f,
      children: [
        L.jsx(Nm, {
          data: i,
          widget: t
        }),
        B ? L.jsxs(ee, {
          ref: C,
          sx: {
            display: "flex",
            flexDirection: t.data.sliderOrientation === "horizontal" ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            pl: t.data.sliderOrientation === "horizontal" && (t.data.iconMin || t.data.iconSmallMin) ? 0.5 : 2,
            pr: t.data.sliderOrientation === "horizontal" && (t.data.iconMax || t.data.iconSmallMax) ? 0.5 : 2,
            pt: t.data.sliderOrientation === "vertical" && (t.data.iconMax || t.data.iconSmallMax) ? 0.5 : 2,
            pb: t.data.sliderOrientation === "vertical" && (t.data.iconMin || t.data.iconSmallMin) ? 0.5 : 2,
            gap: 1.5
          },
          children: [
            (t.data.sliderOrientation === "horizontal" && (t.data.iconMin || t.data.iconSmallMin) || t.data.sliderOrientation === "vertical" && (t.data.iconMax || t.data.iconSmallMax)) && L.jsx(ee, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                ...t.data.sliderOrientation === "horizontal" ? {
                  transform: `translateY(${b.y}px)`
                } : {
                  transform: `translateX(${b.x}px)`
                }
              },
              children: L.jsx("img", {
                alt: "",
                src: U,
                style: {
                  width: t.data.sliderOrientation === "horizontal" ? t.data.iconSizeStart || "24px" : t.data.iconSizeEnd || "24px",
                  ...xo(U, t.data.sliderOrientation === "horizontal" ? S : v)
                }
              })
            }),
            L.jsx(ee, {
              sx: {
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                minWidth: t.data.sliderOrientation === "horizontal" ? "200px" : "auto",
                minHeight: t.data.sliderOrientation === "vertical" ? "200px" : "auto"
              },
              children: typeof F == "number" && L.jsx(kv, {
                slots: {
                  markLabel: Gm
                },
                slotProps: {
                  markLabel: {
                    marks: t.data.marks,
                    sliderOrientation: t.data.sliderOrientation,
                    aliasActive: t.data.aliasActive,
                    activeMarkIndex: u,
                    defaultIconColor: i.iconColor || r.palette.primary.main
                  }
                },
                disabled: I !== "number",
                valueLabelDisplay: t.data.valueLabelDisplay,
                orientation: t.data.sliderOrientation,
                min: R ?? void 0,
                max: O ?? void 0,
                marks: _,
                step: t.data.onlyStates ? null : t.data.step !== void 0 ? Number(t.data.step) : void 0,
                size: t.data.sliderSize,
                value: F,
                onChange: (k, Y) => {
                  typeof Y == "number" && (w(Y), g(Y));
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
                    ...n,
                    ...o,
                    fontSize: H(t.data.valueSizeActive) || i.valueSizeActive || c && t.data.markerTextSize && H(t.data.markerTextSize) || i.valueSize || "1rem",
                    color: t.data.textColorActive || i.textColorActive || c && t.data.markerTextColor || i.textColor,
                    bgcolor: "transparent",
                    top: t.data.sliderOrientation === "horizontal" ? t.data.labelPosition : void 0,
                    right: t.data.sliderOrientation === "vertical" ? t.data.labelPosition : void 0
                  },
                  "& .MuiSlider-markLabel": {
                    fontSize: i.valueSize || "1rem",
                    color: t.data.markerTextColor || i.textColor,
                    top: t.data.sliderOrientation === "horizontal" ? t.data.markPosition : void 0,
                    left: t.data.sliderOrientation === "vertical" ? t.data.markPosition : void 0
                  },
                  "& .MuiSlider-markLabelActive": {
                    [`&[data-index='${u}']`]: {
                      "& div[data-font='active']": {
                        color: t.data.textColorActive ? `${t.data.textColorActive} !important` : void 0,
                        fontSize: typeof t.data.valueSizeActive == "number" ? `${H(t.data.valueSizeActive)} !important` : void 0
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
            (t.data.sliderOrientation === "horizontal" && (t.data.iconMax || t.data.iconSmallMax) || t.data.sliderOrientation === "vertical" && (t.data.iconMin || t.data.iconSmallMin)) && L.jsx(ee, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: 0,
                ...t.data.sliderOrientation === "horizontal" ? {
                  transform: `translateY(${b.y}px)`
                } : {
                  transform: `translateX(${b.x}px)`
                }
              },
              children: L.jsx("img", {
                alt: "",
                src: T,
                style: {
                  width: t.data.sliderOrientation === "horizontal" ? t.data.iconSizeEnd || "24px" : t.data.iconSizeStart || "24px",
                  ...xo(T, t.data.sliderOrientation === "horizontal" ? v : S)
                }
              })
            })
          ]
        }) : null
      ]
    });
  };
  class Ui extends Ov {
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
              ...Ca()
            ]
          },
          {
            name: "slider",
            label: "group_slider",
            fields: [
              ...Pv([
                "number"
              ]),
              ...Gv(),
              ...Nv()
            ]
          },
          {
            name: "active",
            label: "group_active",
            fields: [
              ...Ca({
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
              ...Ca({
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
      return Ui.getWidgetInfo();
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Rv(this.wrapContent(L.jsx(Vm, {})), t);
    }
  }
  WU = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ui
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  MA = function({ dividerText: A = "" }) {
    const e = {
      position: "absolute",
      left: 0,
      width: "100%"
    };
    return L.jsx(ee, {
      sx: {
        display: "block",
        pt: 1.5,
        pb: A ? 2 : 1.5
      },
      children: A ? L.jsx(Qo, {
        sx: e,
        children: L.jsx(Gr, {
          sx: {
            opacity: 0.5,
            color: "primary.main"
          },
          variant: "caption",
          children: Ui.t(A)
        })
      }) : L.jsx(Qo, {
        sx: e
      })
    });
  };
  const $m = Ep(L.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
  }), "Delete");
  var yd = {
    exports: {}
  };
  (function(A) {
    (function(e) {
      var t = /^\s+/, r = /\s+$/, n = 0, o = e.round, i = e.min, a = e.max, s = e.random;
      function l(m, E) {
        if (m = m || "", E = E || {}, m instanceof l) return m;
        if (!(this instanceof l)) return new l(m, E);
        var y = c(m);
        this._originalInput = m, this._r = y.r, this._g = y.g, this._b = y.b, this._a = y.a, this._roundA = o(100 * this._a) / 100, this._format = E.format || y.format, this._gradientType = E.gradientType, this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), this._ok = y.ok, this._tc_id = n++;
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
          var m = this.toRgb();
          return (m.r * 299 + m.g * 587 + m.b * 114) / 1e3;
        },
        getLuminance: function() {
          var m = this.toRgb(), E, y, P, j, $, fA;
          return E = m.r / 255, y = m.g / 255, P = m.b / 255, E <= 0.03928 ? j = E / 12.92 : j = e.pow((E + 0.055) / 1.055, 2.4), y <= 0.03928 ? $ = y / 12.92 : $ = e.pow((y + 0.055) / 1.055, 2.4), P <= 0.03928 ? fA = P / 12.92 : fA = e.pow((P + 0.055) / 1.055, 2.4), 0.2126 * j + 0.7152 * $ + 0.0722 * fA;
        },
        setAlpha: function(m) {
          return this._a = W(m), this._roundA = o(100 * this._a) / 100, this;
        },
        toHsv: function() {
          var m = g(this._r, this._g, this._b);
          return {
            h: m.h * 360,
            s: m.s,
            v: m.v,
            a: this._a
          };
        },
        toHsvString: function() {
          var m = g(this._r, this._g, this._b), E = o(m.h * 360), y = o(m.s * 100), P = o(m.v * 100);
          return this._a == 1 ? "hsv(" + E + ", " + y + "%, " + P + "%)" : "hsva(" + E + ", " + y + "%, " + P + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var m = d(this._r, this._g, this._b);
          return {
            h: m.h * 360,
            s: m.s,
            l: m.l,
            a: this._a
          };
        },
        toHslString: function() {
          var m = d(this._r, this._g, this._b), E = o(m.h * 360), y = o(m.s * 100), P = o(m.l * 100);
          return this._a == 1 ? "hsl(" + E + ", " + y + "%, " + P + "%)" : "hsla(" + E + ", " + y + "%, " + P + "%, " + this._roundA + ")";
        },
        toHex: function(m) {
          return F(this._r, this._g, this._b, m);
        },
        toHexString: function(m) {
          return "#" + this.toHex(m);
        },
        toHex8: function(m) {
          return w(this._r, this._g, this._b, this._a, m);
        },
        toHex8String: function(m) {
          return "#" + this.toHex8(m);
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
            r: o(V(this._r, 255) * 100) + "%",
            g: o(V(this._g, 255) * 100) + "%",
            b: o(V(this._b, 255) * 100) + "%",
            a: this._a
          };
        },
        toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + o(V(this._r, 255) * 100) + "%, " + o(V(this._g, 255) * 100) + "%, " + o(V(this._b, 255) * 100) + "%)" : "rgba(" + o(V(this._r, 255) * 100) + "%, " + o(V(this._g, 255) * 100) + "%, " + o(V(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },
        toName: function() {
          return this._a === 0 ? "transparent" : this._a < 1 ? false : Y[F(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(m) {
          var E = "#" + C(this._r, this._g, this._b, this._a), y = E, P = this._gradientType ? "GradientType = 1, " : "";
          if (m) {
            var j = l(m);
            y = "#" + C(j._r, j._g, j._b, j._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + P + "startColorstr=" + E + ",endColorstr=" + y + ")";
        },
        toString: function(m) {
          var E = !!m;
          m = m || this._format;
          var y = false, P = this._a < 1 && this._a >= 0, j = !E && P && (m === "hex" || m === "hex6" || m === "hex3" || m === "hex4" || m === "hex8" || m === "name");
          return j ? m === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (m === "rgb" && (y = this.toRgbString()), m === "prgb" && (y = this.toPercentageRgbString()), (m === "hex" || m === "hex6") && (y = this.toHexString()), m === "hex3" && (y = this.toHexString(true)), m === "hex4" && (y = this.toHex8String(true)), m === "hex8" && (y = this.toHex8String()), m === "name" && (y = this.toName()), m === "hsl" && (y = this.toHslString()), m === "hsv" && (y = this.toHsvString()), y || this.toHexString());
        },
        clone: function() {
          return l(this.toString());
        },
        _applyModification: function(m, E) {
          var y = m.apply(null, [
            this
          ].concat([].slice.call(E)));
          return this._r = y._r, this._g = y._g, this._b = y._b, this.setAlpha(y._a), this;
        },
        lighten: function() {
          return this._applyModification(v, arguments);
        },
        brighten: function() {
          return this._applyModification(U, arguments);
        },
        darken: function() {
          return this._applyModification(T, arguments);
        },
        desaturate: function() {
          return this._applyModification(b, arguments);
        },
        saturate: function() {
          return this._applyModification(Q, arguments);
        },
        greyscale: function() {
          return this._applyModification(S, arguments);
        },
        spin: function() {
          return this._applyModification(I, arguments);
        },
        _applyCombination: function(m, E) {
          return m.apply(null, [
            this
          ].concat([].slice.call(E)));
        },
        analogous: function() {
          return this._applyCombination(_, arguments);
        },
        complement: function() {
          return this._applyCombination(B, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(M, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(O, arguments);
        },
        triad: function() {
          return this._applyCombination(H, arguments);
        },
        tetrad: function() {
          return this._applyCombination(R, arguments);
        }
      }, l.fromRatio = function(m, E) {
        if (typeof m == "object") {
          var y = {};
          for (var P in m) m.hasOwnProperty(P) && (P === "a" ? y[P] = m[P] : y[P] = rA(m[P]));
          m = y;
        }
        return l(m, E);
      };
      function c(m) {
        var E = {
          r: 0,
          g: 0,
          b: 0
        }, y = 1, P = null, j = null, $ = null, fA = false, BA = false;
        return typeof m == "string" && (m = lA(m)), typeof m == "object" && (eA(m.r) && eA(m.g) && eA(m.b) ? (E = u(m.r, m.g, m.b), fA = true, BA = String(m.r).substr(-1) === "%" ? "prgb" : "rgb") : eA(m.h) && eA(m.s) && eA(m.v) ? (P = rA(m.s), j = rA(m.v), E = h(m.h, P, j), fA = true, BA = "hsv") : eA(m.h) && eA(m.s) && eA(m.l) && (P = rA(m.s), $ = rA(m.l), E = f(m.h, P, $), fA = true, BA = "hsl"), m.hasOwnProperty("a") && (y = m.a)), y = W(y), {
          ok: fA,
          format: m.format || BA,
          r: i(255, a(E.r, 0)),
          g: i(255, a(E.g, 0)),
          b: i(255, a(E.b, 0)),
          a: y
        };
      }
      function u(m, E, y) {
        return {
          r: V(m, 255) * 255,
          g: V(E, 255) * 255,
          b: V(y, 255) * 255
        };
      }
      function d(m, E, y) {
        m = V(m, 255), E = V(E, 255), y = V(y, 255);
        var P = a(m, E, y), j = i(m, E, y), $, fA, BA = (P + j) / 2;
        if (P == j) $ = fA = 0;
        else {
          var G = P - j;
          switch (fA = BA > 0.5 ? G / (2 - P - j) : G / (P + j), P) {
            case m:
              $ = (E - y) / G + (E < y ? 6 : 0);
              break;
            case E:
              $ = (y - m) / G + 2;
              break;
            case y:
              $ = (m - E) / G + 4;
              break;
          }
          $ /= 6;
        }
        return {
          h: $,
          s: fA,
          l: BA
        };
      }
      function f(m, E, y) {
        var P, j, $;
        m = V(m, 360), E = V(E, 100), y = V(y, 100);
        function fA(N, gA, aA) {
          return aA < 0 && (aA += 1), aA > 1 && (aA -= 1), aA < 1 / 6 ? N + (gA - N) * 6 * aA : aA < 1 / 2 ? gA : aA < 2 / 3 ? N + (gA - N) * (2 / 3 - aA) * 6 : N;
        }
        if (E === 0) P = j = $ = y;
        else {
          var BA = y < 0.5 ? y * (1 + E) : y + E - y * E, G = 2 * y - BA;
          P = fA(G, BA, m + 1 / 3), j = fA(G, BA, m), $ = fA(G, BA, m - 1 / 3);
        }
        return {
          r: P * 255,
          g: j * 255,
          b: $ * 255
        };
      }
      function g(m, E, y) {
        m = V(m, 255), E = V(E, 255), y = V(y, 255);
        var P = a(m, E, y), j = i(m, E, y), $, fA, BA = P, G = P - j;
        if (fA = P === 0 ? 0 : G / P, P == j) $ = 0;
        else {
          switch (P) {
            case m:
              $ = (E - y) / G + (E < y ? 6 : 0);
              break;
            case E:
              $ = (y - m) / G + 2;
              break;
            case y:
              $ = (m - E) / G + 4;
              break;
          }
          $ /= 6;
        }
        return {
          h: $,
          s: fA,
          v: BA
        };
      }
      function h(m, E, y) {
        m = V(m, 360) * 6, E = V(E, 100), y = V(y, 100);
        var P = e.floor(m), j = m - P, $ = y * (1 - E), fA = y * (1 - j * E), BA = y * (1 - (1 - j) * E), G = P % 6, N = [
          y,
          fA,
          $,
          $,
          BA,
          y
        ][G], gA = [
          BA,
          y,
          y,
          fA,
          $,
          $
        ][G], aA = [
          $,
          $,
          BA,
          y,
          y,
          fA
        ][G];
        return {
          r: N * 255,
          g: gA * 255,
          b: aA * 255
        };
      }
      function F(m, E, y, P) {
        var j = [
          Z(o(m).toString(16)),
          Z(o(E).toString(16)),
          Z(o(y).toString(16))
        ];
        return P && j[0].charAt(0) == j[0].charAt(1) && j[1].charAt(0) == j[1].charAt(1) && j[2].charAt(0) == j[2].charAt(1) ? j[0].charAt(0) + j[1].charAt(0) + j[2].charAt(0) : j.join("");
      }
      function w(m, E, y, P, j) {
        var $ = [
          Z(o(m).toString(16)),
          Z(o(E).toString(16)),
          Z(o(y).toString(16)),
          Z(pA(P))
        ];
        return j && $[0].charAt(0) == $[0].charAt(1) && $[1].charAt(0) == $[1].charAt(1) && $[2].charAt(0) == $[2].charAt(1) && $[3].charAt(0) == $[3].charAt(1) ? $[0].charAt(0) + $[1].charAt(0) + $[2].charAt(0) + $[3].charAt(0) : $.join("");
      }
      function C(m, E, y, P) {
        var j = [
          Z(pA(P)),
          Z(o(m).toString(16)),
          Z(o(E).toString(16)),
          Z(o(y).toString(16))
        ];
        return j.join("");
      }
      l.equals = function(m, E) {
        return !m || !E ? false : l(m).toRgbString() == l(E).toRgbString();
      }, l.random = function() {
        return l.fromRatio({
          r: s(),
          g: s(),
          b: s()
        });
      };
      function b(m, E) {
        E = E === 0 ? 0 : E || 10;
        var y = l(m).toHsl();
        return y.s -= E / 100, y.s = J(y.s), l(y);
      }
      function Q(m, E) {
        E = E === 0 ? 0 : E || 10;
        var y = l(m).toHsl();
        return y.s += E / 100, y.s = J(y.s), l(y);
      }
      function S(m) {
        return l(m).desaturate(100);
      }
      function v(m, E) {
        E = E === 0 ? 0 : E || 10;
        var y = l(m).toHsl();
        return y.l += E / 100, y.l = J(y.l), l(y);
      }
      function U(m, E) {
        E = E === 0 ? 0 : E || 10;
        var y = l(m).toRgb();
        return y.r = a(0, i(255, y.r - o(255 * -(E / 100)))), y.g = a(0, i(255, y.g - o(255 * -(E / 100)))), y.b = a(0, i(255, y.b - o(255 * -(E / 100)))), l(y);
      }
      function T(m, E) {
        E = E === 0 ? 0 : E || 10;
        var y = l(m).toHsl();
        return y.l -= E / 100, y.l = J(y.l), l(y);
      }
      function I(m, E) {
        var y = l(m).toHsl(), P = (y.h + E) % 360;
        return y.h = P < 0 ? 360 + P : P, l(y);
      }
      function B(m) {
        var E = l(m).toHsl();
        return E.h = (E.h + 180) % 360, l(E);
      }
      function H(m) {
        var E = l(m).toHsl(), y = E.h;
        return [
          l(m),
          l({
            h: (y + 120) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (y + 240) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function R(m) {
        var E = l(m).toHsl(), y = E.h;
        return [
          l(m),
          l({
            h: (y + 90) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (y + 180) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (y + 270) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function O(m) {
        var E = l(m).toHsl(), y = E.h;
        return [
          l(m),
          l({
            h: (y + 72) % 360,
            s: E.s,
            l: E.l
          }),
          l({
            h: (y + 216) % 360,
            s: E.s,
            l: E.l
          })
        ];
      }
      function _(m, E, y) {
        E = E || 6, y = y || 30;
        var P = l(m).toHsl(), j = 360 / y, $ = [
          l(m)
        ];
        for (P.h = (P.h - (j * E >> 1) + 720) % 360; --E; ) P.h = (P.h + j) % 360, $.push(l(P));
        return $;
      }
      function M(m, E) {
        E = E || 6;
        for (var y = l(m).toHsv(), P = y.h, j = y.s, $ = y.v, fA = [], BA = 1 / E; E--; ) fA.push(l({
          h: P,
          s: j,
          v: $
        })), $ = ($ + BA) % 1;
        return fA;
      }
      l.mix = function(m, E, y) {
        y = y === 0 ? 0 : y || 50;
        var P = l(m).toRgb(), j = l(E).toRgb(), $ = y / 100, fA = {
          r: (j.r - P.r) * $ + P.r,
          g: (j.g - P.g) * $ + P.g,
          b: (j.b - P.b) * $ + P.b,
          a: (j.a - P.a) * $ + P.a
        };
        return l(fA);
      }, l.readability = function(m, E) {
        var y = l(m), P = l(E);
        return (e.max(y.getLuminance(), P.getLuminance()) + 0.05) / (e.min(y.getLuminance(), P.getLuminance()) + 0.05);
      }, l.isReadable = function(m, E, y) {
        var P = l.readability(m, E), j, $;
        switch ($ = false, j = dA(y), j.level + j.size) {
          case "AAsmall":
          case "AAAlarge":
            $ = P >= 4.5;
            break;
          case "AAlarge":
            $ = P >= 3;
            break;
          case "AAAsmall":
            $ = P >= 7;
            break;
        }
        return $;
      }, l.mostReadable = function(m, E, y) {
        var P = null, j = 0, $, fA, BA, G;
        y = y || {}, fA = y.includeFallbackColors, BA = y.level, G = y.size;
        for (var N = 0; N < E.length; N++) $ = l.readability(m, E[N]), $ > j && (j = $, P = l(E[N]));
        return l.isReadable(m, P, {
          level: BA,
          size: G
        }) || !fA ? P : (y.includeFallbackColors = false, l.mostReadable(m, [
          "#fff",
          "#000"
        ], y));
      };
      var k = l.names = {
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
      }, Y = l.hexNames = z(k);
      function z(m) {
        var E = {};
        for (var y in m) m.hasOwnProperty(y) && (E[m[y]] = y);
        return E;
      }
      function W(m) {
        return m = parseFloat(m), (isNaN(m) || m < 0 || m > 1) && (m = 1), m;
      }
      function V(m, E) {
        K(m) && (m = "100%");
        var y = AA(m);
        return m = i(E, a(0, parseFloat(m))), y && (m = parseInt(m * E, 10) / 100), e.abs(m - E) < 1e-6 ? 1 : m % E / parseFloat(E);
      }
      function J(m) {
        return i(1, a(0, m));
      }
      function oA(m) {
        return parseInt(m, 16);
      }
      function K(m) {
        return typeof m == "string" && m.indexOf(".") != -1 && parseFloat(m) === 1;
      }
      function AA(m) {
        return typeof m == "string" && m.indexOf("%") != -1;
      }
      function Z(m) {
        return m.length == 1 ? "0" + m : "" + m;
      }
      function rA(m) {
        return m <= 1 && (m = m * 100 + "%"), m;
      }
      function pA(m) {
        return e.round(parseFloat(m) * 255).toString(16);
      }
      function uA(m) {
        return oA(m) / 255;
      }
      var sA = (function() {
        var m = "[-\\+]?\\d+%?", E = "[-\\+]?\\d*\\.\\d+%?", y = "(?:" + E + ")|(?:" + m + ")", P = "[\\s|\\(]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")\\s*\\)?", j = "[\\s|\\(]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(y),
          rgb: new RegExp("rgb" + P),
          rgba: new RegExp("rgba" + j),
          hsl: new RegExp("hsl" + P),
          hsla: new RegExp("hsla" + j),
          hsv: new RegExp("hsv" + P),
          hsva: new RegExp("hsva" + j),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function eA(m) {
        return !!sA.CSS_UNIT.exec(m);
      }
      function lA(m) {
        m = m.replace(t, "").replace(r, "").toLowerCase();
        var E = false;
        if (k[m]) m = k[m], E = true;
        else if (m == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var y;
        return (y = sA.rgb.exec(m)) ? {
          r: y[1],
          g: y[2],
          b: y[3]
        } : (y = sA.rgba.exec(m)) ? {
          r: y[1],
          g: y[2],
          b: y[3],
          a: y[4]
        } : (y = sA.hsl.exec(m)) ? {
          h: y[1],
          s: y[2],
          l: y[3]
        } : (y = sA.hsla.exec(m)) ? {
          h: y[1],
          s: y[2],
          l: y[3],
          a: y[4]
        } : (y = sA.hsv.exec(m)) ? {
          h: y[1],
          s: y[2],
          v: y[3]
        } : (y = sA.hsva.exec(m)) ? {
          h: y[1],
          s: y[2],
          v: y[3],
          a: y[4]
        } : (y = sA.hex8.exec(m)) ? {
          r: oA(y[1]),
          g: oA(y[2]),
          b: oA(y[3]),
          a: uA(y[4]),
          format: E ? "name" : "hex8"
        } : (y = sA.hex6.exec(m)) ? {
          r: oA(y[1]),
          g: oA(y[2]),
          b: oA(y[3]),
          format: E ? "name" : "hex"
        } : (y = sA.hex4.exec(m)) ? {
          r: oA(y[1] + "" + y[1]),
          g: oA(y[2] + "" + y[2]),
          b: oA(y[3] + "" + y[3]),
          a: uA(y[4] + "" + y[4]),
          format: E ? "name" : "hex8"
        } : (y = sA.hex3.exec(m)) ? {
          r: oA(y[1] + "" + y[1]),
          g: oA(y[2] + "" + y[2]),
          b: oA(y[3] + "" + y[3]),
          format: E ? "name" : "hex"
        } : false;
      }
      function dA(m) {
        var E, y;
        return m = m || {
          level: "AA",
          size: "small"
        }, E = (m.level || "AA").toUpperCase(), y = (m.size || "small").toLowerCase(), E !== "AA" && E !== "AAA" && (E = "AA"), y !== "small" && y !== "large" && (y = "small"), {
          level: E,
          size: y
        };
      }
      A.exports ? A.exports = l : window.tinycolor = l;
    })(Math);
  })(yd);
  var Wm = yd.exports;
  const _A = hs(Wm);
  var sr = function() {
    return sr = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, sr.apply(this, arguments);
  }, jm = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, Xm = function(A) {
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
    function t(K) {
      var AA = new Error(A + ": " + K);
      throw AA;
    }
    function r(K) {
      A = A.substr(K);
    }
    function n(K) {
      var AA = /^[\n\r\t\s]+/.exec(A);
      AA && r(AA[0].length);
      var Z = K.exec(A);
      return Z && r(Z[0].length), Z;
    }
    function o(K) {
      var AA = K(), Z = [];
      if (AA) for (Z.push(AA); n(e.comma); ) AA = K(), AA ? Z.push(AA) : t("One extra comma");
      return Z;
    }
    function i(K, AA, Z) {
      var rA = n(AA);
      if (rA) return {
        type: K,
        value: rA[Z]
      };
    }
    function a() {
      var K = i("hex", e.hexColor, 1);
      if (K == null ? void 0 : K.value) {
        var AA = _A(K == null ? void 0 : K.value).toRgb(), Z = AA.r, rA = AA.g, pA = AA.b, uA = AA.a;
        return {
          value: "rgba(".concat(Z, ", ").concat(rA, ", ").concat(pA, ", ").concat(uA, ")")
        };
      }
    }
    var s = function(K) {
      var AA = pt(K == null ? void 0 : K[0]);
      return {
        value: "".concat(AA ? "RGBA" : "rgba", "(").concat(o(Y), ")")
      };
    };
    function l(K, AA) {
      var Z = n(K);
      if (Z) {
        n(e.startCall) || t("Missing (");
        var rA = AA(Z);
        return n(e.endCall) || t("Missing )"), rA;
      }
    }
    function c() {
      return l(e.hslColor, z);
    }
    function u() {
      return l(e.rgbaColor, s);
    }
    function d() {
      return l(e.rgbColor, V);
    }
    function f() {
      var K = i("literal", e.literalColor, 0);
      if (K == null ? void 0 : K.value) {
        var AA = _A(K == null ? void 0 : K.value).toRgb(), Z = AA.r, rA = AA.g, pA = AA.b, uA = AA.a;
        return {
          value: "rgba(".concat(Z, ", ").concat(rA, ", ").concat(pA, ", ").concat(uA, ")")
        };
      }
    }
    function g() {
      return l(e.hsvColor, W);
    }
    function h() {
      return a() || c() || u() || d() || f() || g();
    }
    function F() {
      var K, AA = h();
      return AA || t("Expected color definition"), AA.left = parseInt((K = J()) === null || K === void 0 ? void 0 : K.value), AA;
    }
    function w(K, AA, Z) {
      return l(AA, function() {
        var rA = Z();
        return rA && (n(e.comma) || t("Missing comma before color stops")), {
          type: K,
          orientation: rA,
          colorStops: o(F)
        };
      });
    }
    function C() {
      return v() || U();
    }
    function b() {
      return w("linear-gradient", e.linearGradient, C) || w("repeating-linear-gradient", e.repeatingLinearGradient, C) || w("radial-gradient", e.radialGradient, T) || w("repeating-radial-gradient", e.repeatingRadialGradient, T);
    }
    function Q() {
      return o(b);
    }
    function S() {
      var K, AA = Q();
      A.length > 0 && t("Invalid input not EOF");
      var Z = AA[0], rA = (K = Z == null ? void 0 : Z.colorStops) === null || K === void 0 ? void 0 : K.filter(function(uA) {
        return pt(uA.value);
      }).length, pA = function() {
        if (rA > 0) return Z;
        var uA = function(sA, eA) {
          return eA === 0 ? hn(sA) : Nt(sA);
        };
        return sr(sr({}, Z), {
          colorStops: Z.colorStops.map(function(sA, eA) {
            return sr(sr({}, sA), {
              value: uA(sA, eA)
            });
          })
        });
      };
      return pA();
    }
    function v() {
      return i("directional", e.sideOrCorner, 1);
    }
    function U() {
      return i("angular", e.angleValue, 1);
    }
    function T() {
      var K, AA = I(), Z;
      return AA && (K = [], K.push(AA), Z = A, n(e.comma) && (AA = I(), AA ? K.push(AA) : A = Z)), K;
    }
    function I() {
      var K = H() || R();
      if (K) K.at = _();
      else {
        var AA = O();
        if (AA) {
          K = AA;
          var Z = _();
          Z && (K.at = Z);
        } else {
          var rA = M();
          rA && (K = {
            type: "default-radial",
            at: rA
          });
        }
      }
      return K;
    }
    function B() {
      return i("px", e.pixelValue, 1) || i("em", e.emValue, 1);
    }
    function H() {
      var K = i("shape", /^(circle)/i, 0);
      return K && (K.style = B() || O()), K;
    }
    function R() {
      var K = i("shape", /^(ellipse)/i, 0);
      return K && (K.style = J() || O()), K;
    }
    function O() {
      return i("extent-keyword", e.extentKeywords, 1);
    }
    function _() {
      if (i("position", /^at/, 0)) {
        var K = M();
        return K || t("Missing positioning value"), K;
      }
    }
    function M() {
      var K = k();
      if (K.x || K.y) return {
        type: "position",
        value: K
      };
    }
    function k() {
      return {
        x: J(),
        y: J()
      };
    }
    function Y() {
      return n(e.number)[1];
    }
    var z = function(K) {
      var AA = pt(K == null ? void 0 : K[0]), Z = o(Y), rA = _A({
        h: Z[0],
        s: Z[1],
        l: Z[2],
        a: Z[3] || 1
      }).toRgb(), pA = rA.r, uA = rA.g, sA = rA.b, eA = rA.a;
      return {
        value: "".concat(AA ? "RGBA" : "rgba", "(").concat(pA, ", ").concat(uA, ", ").concat(sA, ", ").concat(eA, ")")
      };
    }, W = function(K) {
      var AA = pt(K == null ? void 0 : K[0]), Z = o(Y), rA = _A({
        h: Z[0],
        s: Z[1],
        v: Z[2],
        a: Z[3] || 1
      }).toRgb(), pA = rA.r, uA = rA.g, sA = rA.b, eA = rA.a;
      return {
        value: "".concat(AA ? "RGBA" : "rgba", "(").concat(pA, ", ").concat(uA, ", ").concat(sA, ", ").concat(eA, ")")
      };
    }, V = function(K) {
      var AA = pt(K == null ? void 0 : K[0]), Z = n(e.spacedRgbColor), rA = Z || jm([
        null
      ], o(Y), true), pA = rA[1], uA = rA[2], sA = rA[3], eA = rA[4], lA = eA === void 0 ? 1 : eA;
      return {
        value: "".concat(AA ? "RGBA" : "rgba", "(").concat(pA, ", ").concat(uA, ", ").concat(sA, ", ").concat(lA, ")")
      };
    };
    function J() {
      return i("%", e.percentageValue, 1) || oA() || B();
    }
    function oA() {
      return i("position-keyword", e.positionKeywords, 1);
    }
    return S();
  }, Nt = function(A) {
    return A.value.toLowerCase();
  }, hn = function(A) {
    return A.value.toUpperCase();
  }, $a = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = Xm(o);
      return i == null ? void 0 : i.colorStops;
    } else {
      var o = A || e;
      return [
        {
          value: o
        }
      ];
    }
  }, ue = function(A, e, t) {
    return isNaN(A) || A < e ? e : A > t ? t : A;
  }, je = function(A) {
    return Math.round(A);
  }, Io = function() {
    return Io = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Io.apply(this, arguments);
  }, bd = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function vr(A, e) {
    var t = bd(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = ue(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function zm(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var Ym = function(A) {
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
  function Jm(A, e) {
    var t = bd(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = Ym(A), s = a.clientX, l = a.clientY, c = function() {
      var d = s - r - e / 2;
      return ue(d, -9, o - 10);
    }, u = function() {
      var d = l - n - e / 2;
      return ue(d, -9, i - 10);
    };
    return [
      c(),
      u()
    ];
  }
  var pt = function(A) {
    var e;
    return (A == null ? void 0 : A[0]) === ((e = A == null ? void 0 : A[0]) === null || e === void 0 ? void 0 : e.toUpperCase());
  }, Qd = function(A) {
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
  }, Zm = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(d, f) {
        return (d == null ? void 0 : d.left) - (f == null ? void 0 : f.left);
      }), a = (r = i == null ? void 0 : i.map(function(d) {
        return "".concat(d == null ? void 0 : d.value, " ").concat(d == null ? void 0 : d.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), s = A == null ? void 0 : A.type, l = Qd((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = s === "linear-gradient" ? "".concat(l, "deg") : "circle";
      return "".concat(s, "(").concat(c, ", ").concat(a, ")");
    } else {
      var u = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return u;
    }
  }, Fd = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return Io(Io({}, o), {
        index: i
      });
    }), r = t == null ? void 0 : t.find(function(o) {
      return pt(o.value);
    }), n = r || t[0];
    return {
      currentColor: (n == null ? void 0 : n.value) || e,
      selectedColor: (n == null ? void 0 : n.index) || 0,
      currentLeft: (n == null ? void 0 : n.left) || 0
    };
  }, qm = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return Qd(r);
  }, Ud = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = qm(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
    return {
      degrees: r,
      degreeStr: n,
      isGradient: e,
      gradientType: t
    };
  }, le = function() {
    return le = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, le.apply(this, arguments);
  }, Aw = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, Ed = p.createContext(null);
  function ew(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, s = A.isDarkMode, l = A.squareWidth, c = A.hideOpacity, u = A.showHexAlpha, d = A.squareHeight, f = A.passedConfig, g = A.defaultStyles, h = A.pickerIdSuffix, F = {
      barSize: (e = f.barSize) !== null && e !== void 0 ? e : kn.barSize,
      crossSize: (t = f.crossSize) !== null && t !== void 0 ? t : kn.crossSize,
      defaultColor: (r = f.defaultColor) !== null && r !== void 0 ? r : kn.defaultColor,
      defaultGradient: (n = f.defaultGradient) !== null && n !== void 0 ? n : kn.defaultGradient
    }, w = $a(o, F.defaultColor, F.defaultGradient), C = Ud(o), b = C.degrees, Q = C.degreeStr, S = C.isGradient, v = C.gradientType, U = Fd(w, F.defaultGradient), T = U.currentColor, I = U.selectedColor, B = U.currentLeft, H = p.useState("rgb"), R = H[0], O = H[1], _ = p.useState({}), M = _[0], k = _[1], Y = _A(T), z = Y.toRgb(), W = Y.toHsv(), V = p.useState(le(le({}, z), W)), J = V[0], oA = V[1];
    p.useEffect(function() {
      (W == null ? void 0 : W.s) === 0 ? oA(le(le(le({}, z), W), {
        h: J == null ? void 0 : J.h
      })) : oA(le(le({}, z), W));
    }, [
      T
    ]);
    var K = function(uA) {
      var sA = uA.sort(function(dA, m) {
        return dA.left - m.left;
      }), eA = sA == null ? void 0 : sA.map(function(dA) {
        return "".concat(dA == null ? void 0 : dA.value, " ").concat(dA.left, "%");
      }), lA = "".concat(v, "(").concat(Q, ", ").concat(eA.join(", "), ")");
      k(le(le({}, M), {
        gradient: lA
      })), a(lA);
    }, AA = function(uA, sA) {
      var eA = w == null ? void 0 : w.filter(function(dA) {
        return !pt(dA.value);
      }), lA = Aw([
        {
          value: uA.toUpperCase(),
          left: sA ?? B
        }
      ], eA, true);
      K(lA);
    }, Z = function(uA) {
      S ? AA(uA) : (k(le(le({}, M), {
        color: uA
      })), a(uA));
    }, rA = function() {
      if ((w == null ? void 0 : w.length) > 2) {
        var uA = w == null ? void 0 : w.map(function(eA, lA) {
          return le(le({}, eA), {
            value: lA === I - 1 ? hn(eA) : Nt(eA)
          });
        }), sA = uA == null ? void 0 : uA.filter(function(eA, lA) {
          return lA !== I;
        });
        K(sA);
      }
    }, pA = {
      hc: J,
      setHc: oA,
      value: o,
      colors: w,
      config: F,
      degrees: b,
      onChange: a,
      previous: M,
      inputType: R,
      tinyColor: Y,
      isDarkMode: s,
      isGradient: S,
      squareWidth: l,
      hideOpacity: c,
      currentLeft: B,
      deletePoint: rA,
      showHexAlpha: u,
      squareHeight: d,
      setInputType: O,
      gradientType: v,
      handleChange: Z,
      currentColor: T,
      selectedColor: I,
      defaultStyles: g,
      handleGradient: AA,
      pickerIdSuffix: h,
      createGradientStr: K
    };
    return x.createElement(Ed.Provider, {
      value: pA
    }, i);
  }
  function EA() {
    var A = p.useContext(Ed);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var kn = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, tw = function(A, e) {
    p.useEffect(function() {
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
  }, rw = function(A, e, t, r) {
    p.useEffect(function() {
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
  }, nw = function(A, e, t, r) {
    p.useEffect(function() {
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
  }, ow = function(A, e, t, r) {
    p.useEffect(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) {
          var s = _A({
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
  }, Ho = function() {
    return Ho = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ho.apply(this, arguments);
  }, iw = function() {
    var A = p.useRef(null), e = EA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, s = p.useState(false), l = s[0], c = s[1], u = t.barSize;
    tw(A, n);
    var d = function() {
      c(false);
    }, f = function() {
      c(true);
    }, g = function(w) {
      var C = vr(w, u) * 3.6, b = _A({
        h: C,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), Q = b.toRgb(), S = Q.r, v = Q.g, U = Q.b;
      r("rgba(".concat(S, ", ").concat(v, ", ").concat(U, ", ").concat(o.a, ")")), i(Ho(Ho({}, o), {
        h: C
      }));
    }, h = function(w) {
      l && g(w);
    }, F = function(w) {
      l || g(w);
    };
    return p.useEffect(function() {
      var w = function() {
        d();
      };
      return window.addEventListener("mouseup", w), function() {
        window.removeEventListener("mouseup", w);
      };
    }, []), x.createElement("div", {
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      onMouseMove: function(w) {
        return h(w);
      },
      id: "rbgcp-hue-wrap".concat(a)
    }, x.createElement("div", {
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
    }), x.createElement("canvas", {
      ref: A,
      height: "14px",
      width: "".concat(n, "px"),
      onClick: function(w) {
        return F(w);
      },
      id: "rbgcp-hue-bar".concat(a),
      style: {
        borderRadius: 14,
        position: "relative",
        verticalAlign: "top"
      }
    }));
  };
  function Sd(A, e, t) {
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
  var aw = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, sw = function(A) {
    return typeof A != "number" ? "FF" : A < 0 ? "00" : A > 1 ? "FF" : Math.round(A * 255).toString(16).padStart(2, "0").toUpperCase();
  }, He = function() {
    return He = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, He.apply(this, arguments);
  }, fe = function(A) {
    var e = A.label, t = A.value, r = A.callback, n = A.max, o = n === void 0 ? 100 : n, i = A.hideOpacity, a = A.defaultStyles, s = A.pickerIdSuffix, l = p.useState(t), c = l[0], u = l[1], d = i ? "25%" : "20%";
    p.useEffect(function() {
      u(t);
    }, [
      t
    ]);
    var f = function(g) {
      var h = ue(parseFloat(g.target.value), 0, o);
      u(h), r(h);
    };
    return x.createElement("div", {
      style: {
        width: d,
        flexShrink: 1
      },
      id: "rbgcp-".concat(e, "-input-wrapper").concat(s)
    }, x.createElement("input", {
      value: c,
      onChange: function(g) {
        return f(g);
      },
      style: He({}, a.rbgcpInput),
      id: "rbgcp-".concat(e, "-input").concat(s)
    }), x.createElement("div", {
      style: He({}, a.rbgcpInputLabel)
    }, e));
  }, lw = function(A) {
    var e = A.opacity, t = A.tinyColor, r = A.showHexAlpha, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = p.useState(""), s = a[0], l = a[1], c = t.toHex(), u = p.useState(c), d = u[0], f = u[1];
    p.useEffect(function() {
      s !== "hex" && f(c);
    }, [
      t,
      s,
      c
    ]);
    var g = function() {
      l("hex");
    }, h = function() {
      l("");
    }, F = function(Q) {
      var S = _A(Q.target.value);
      if (f(Q.target.value), S.isValid()) {
        var v = S.toRgb(), U = v.r, T = v.g, I = v.b, B = "rgba(".concat(U, ", ").concat(T, ", ").concat(I, ", ").concat(e, ")");
        n(B);
      }
    }, w = r ? "".concat(d).concat(sw(e)) : d, C = r ? "HEXA" : "HEX", b = r ? 88 : 76;
    return x.createElement("div", {
      style: {
        width: b,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, x.createElement("input", {
      onBlur: h,
      onFocus: g,
      onChange: function(Q) {
        return F(Q);
      },
      value: w == null ? void 0 : w.toUpperCase(),
      id: "rbgcp-hex-input".concat(i),
      style: He(He({}, o.rbgcpInput), o.rbgcpHexInput)
    }), x.createElement("div", {
      style: He({}, o.rbgcpInputLabel)
    }, C));
  }, cw = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = a.r, l = a.g, c = a.b;
      r("rgba(".concat(s, ", ").concat(l, ", ").concat(c, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return x.createElement(x.Fragment, null, x.createElement(fe, {
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
    }), x.createElement(fe, {
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
    }), x.createElement(fe, {
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
  }, uw = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = r.toHsl(), l = s.s, c = s.l, u = function(f, g, h) {
      var F = _A({
        h: f,
        s: g,
        l: h
      }).toRgb(), w = F.r, C = F.g, b = F.b;
      o("rgba(".concat(w, ", ").concat(C, ", ").concat(b, ", ").concat(e == null ? void 0 : e.a, ")")), t(He(He({}, e), {
        h: f
      }));
    }, d = function(f) {
      var g = _A(f).toRgb(), h = g.r, F = g.g, w = g.b;
      o("rgba(".concat(h, ", ").concat(F, ", ").concat(w, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return x.createElement(x.Fragment, null, x.createElement(fe, {
      label: "H",
      max: 360,
      value: je(e == null ? void 0 : e.h),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(f) {
        return u(f, l, c);
      }
    }), x.createElement(fe, {
      label: "S",
      value: je(l * 100),
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
    }), x.createElement(fe, {
      label: "L",
      value: je(c * 100),
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
  }, dw = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(l, c, u) {
      var d = _A({
        h: l,
        s: c,
        v: u
      }).toRgb(), f = d.r, g = d.g, h = d.b;
      n("rgba(".concat(f, ", ").concat(g, ", ").concat(h, ", ").concat(e == null ? void 0 : e.a, ")")), t(He(He({}, e), {
        h: l
      }));
    }, s = function(l) {
      var c = _A(l).toRgb(), u = c.r, d = c.g, f = c.b;
      n("rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return x.createElement(x.Fragment, null, x.createElement(fe, {
      label: "H",
      max: 360,
      value: je(e == null ? void 0 : e.h),
      hideOpacity: r,
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return a(l, e == null ? void 0 : e.s, e == null ? void 0 : e.v);
      }
    }), x.createElement(fe, {
      label: "S",
      hideOpacity: r,
      value: je((e == null ? void 0 : e.s) * 100),
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return s({
          h: e == null ? void 0 : e.h,
          s: l,
          v: e == null ? void 0 : e.v
        });
      }
    }), x.createElement(fe, {
      label: "V",
      hideOpacity: r,
      value: je((e == null ? void 0 : e.v) * 100),
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
  }, fw = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = Sd(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, s = i.m, l = i.y, c = i.k, u = function(d) {
      var f = aw(d), g = f.r, h = f.g, F = f.b;
      r("rgba(".concat(g, ", ").concat(h, ", ").concat(F, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return x.createElement(x.Fragment, null, x.createElement(fe, {
      label: "C",
      value: je(a * 100),
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
    }), x.createElement(fe, {
      label: "M",
      value: je(s * 100),
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
    }), x.createElement(fe, {
      label: "Y",
      value: je(l * 100),
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
    }), x.createElement(fe, {
      label: "K",
      value: je(c * 100),
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
  }, gw = function() {
    var A = EA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, s = A.defaultStyles, l = A.pickerIdSuffix;
    return x.createElement("div", {
      style: He({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, s.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(l)
    }, r !== "cmyk" && x.createElement(lw, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsl" && x.createElement(uw, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "rgb" && x.createElement(cw, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsv" && x.createElement(dw, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "cmyk" && x.createElement(fw, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), !o && x.createElement(fe, {
      label: "A",
      hideOpacity: o,
      defaultStyles: s,
      value: Math.round((e == null ? void 0 : e.a) * 100),
      pickerIdSuffix: l,
      callback: function(c) {
        return a("rgba(".concat(e == null ? void 0 : e.r, ", ").concat(e == null ? void 0 : e.g, ", ").concat(e == null ? void 0 : e.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, Bw = function(A, e, t, r) {
    p.useEffect(function() {
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
  }, xd = "Expected a function", nc = NaN, hw = "[object Symbol]", pw = /^\s+|\s+$/g, vw = /^[-+]0x[0-9a-f]+$/i, mw = /^0b[01]+$/i, ww = /^0o[0-7]+$/i, Cw = parseInt, yw = typeof wn == "object" && wn && wn.Object === Object && wn, bw = typeof self == "object" && self && self.Object === Object && self, Qw = yw || bw || Function("return this")(), Fw = Object.prototype, Uw = Fw.toString, Ew = Math.max, Sw = Math.min, Ji = function() {
    return Qw.Date.now();
  };
  function xw(A, e, t) {
    var r, n, o, i, a, s, l = 0, c = false, u = false, d = true;
    if (typeof A != "function") throw new TypeError(xd);
    e = oc(e) || 0, To(t) && (c = !!t.leading, u = "maxWait" in t, o = u ? Ew(oc(t.maxWait) || 0, e) : o, d = "trailing" in t ? !!t.trailing : d);
    function f(v) {
      var U = r, T = n;
      return r = n = void 0, l = v, i = A.apply(T, U), i;
    }
    function g(v) {
      return l = v, a = setTimeout(w, e), c ? f(v) : i;
    }
    function h(v) {
      var U = v - s, T = v - l, I = e - U;
      return u ? Sw(I, o - T) : I;
    }
    function F(v) {
      var U = v - s, T = v - l;
      return s === void 0 || U >= e || U < 0 || u && T >= o;
    }
    function w() {
      var v = Ji();
      if (F(v)) return C(v);
      a = setTimeout(w, h(v));
    }
    function C(v) {
      return a = void 0, d && r ? f(v) : (r = n = void 0, i);
    }
    function b() {
      a !== void 0 && clearTimeout(a), l = 0, r = s = n = a = void 0;
    }
    function Q() {
      return a === void 0 ? i : C(Ji());
    }
    function S() {
      var v = Ji(), U = F(v);
      if (r = arguments, n = this, s = v, U) {
        if (a === void 0) return g(s);
        if (u) return a = setTimeout(w, e), f(s);
      }
      return a === void 0 && (a = setTimeout(w, e)), i;
    }
    return S.cancel = b, S.flush = Q, S;
  }
  function Iw(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(xd);
    return To(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), xw(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function To(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function Hw(A) {
    return !!A && typeof A == "object";
  }
  function Tw(A) {
    return typeof A == "symbol" || Hw(A) && Uw.call(A) == hw;
  }
  function oc(A) {
    if (typeof A == "number") return A;
    if (Tw(A)) return nc;
    if (To(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = To(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(pw, "");
    var t = mw.test(A);
    return t || ww.test(A) ? Cw(A.slice(2), t ? 2 : 8) : vw.test(A) ? nc : +A;
  }
  var Lw = Iw;
  const kw = hs(Lw);
  var Tt = function() {
    return Tt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Tt.apply(this, arguments);
  }, Ow = function() {
    var A, e, t = EA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.crossSize, u = p.useState(false), d = u[0], f = u[1], g = p.useRef(null), h = zm(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), F = h[0], w = h[1], C = p.useState({
      x: F,
      y: w
    }), b = C[0], Q = C[1];
    Bw(g, r == null ? void 0 : r.h, o, i), p.useEffect(function() {
      d || Q({
        x: (r == null ? void 0 : r.v) === 0 ? b.x : F,
        y: w
      });
    }, [
      F,
      w
    ]);
    var S = function(H) {
      var R = kw(function() {
        var O = Jm(H, c), _ = O[0], M = O[1];
        if (_ && M) {
          var k = Math.min(_ + c / 2, o - 1), Y = Math.min(M + c / 2, i - 1), z = k / o * 100, W = 100 - Y / i * 100;
          Q({
            x: W === 0 ? b == null ? void 0 : b.x : _,
            y: M
          });
          var V = _A("hsva(".concat(r == null ? void 0 : r.h, ", ").concat(z, "%, ").concat(W, "%, ").concat(r == null ? void 0 : r.a, ")"));
          a(V.toRgbString());
        }
      }, 250);
      R();
    }, v = function() {
      f(false);
    }, U = function(H) {
      d && S(H);
    }, T = function(H) {
      d || S(H);
    }, I = function() {
      f(true);
    }, B = function(H) {
      f(true), S(H);
    };
    return p.useEffect(function() {
      var H = function() {
        v();
      };
      return window.addEventListener("mouseup", H), function() {
        window.removeEventListener("mouseup", H);
      };
    }, []), x.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(l)
    }, x.createElement("div", {
      onMouseUp: v,
      onTouchEnd: v,
      onMouseDown: B,
      onTouchStart: B,
      onMouseMove: function(H) {
        return U(H);
      },
      id: "rbgcp-square".concat(l),
      style: {
        position: "relative",
        cursor: "ew-cross"
      }
    }, x.createElement("div", {
      style: Tt(Tt(Tt({}, s.rbgcpHandle), {
        transform: "translate(".concat((A = b == null ? void 0 : b.x) !== null && A !== void 0 ? A : 0, "px, ").concat((e = b == null ? void 0 : b.y) !== null && e !== void 0 ? e : 0, "px)")
      }), d ? {
        transition: ""
      } : {}),
      onMouseDown: I,
      id: "rbgcp-square-handle".concat(l)
    }), x.createElement("div", {
      style: Tt(Tt({}, s.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(l),
      onClick: function(H) {
        return T(H);
      }
    }, x.createElement("canvas", {
      ref: g,
      width: "".concat(o, "px"),
      height: "".concat(i, "px"),
      id: "rbgcp-square-canvas".concat(l)
    }))));
  }, Bt = function() {
    return Bt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Bt.apply(this, arguments);
  }, Kw = function() {
    var A = EA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = p.useState(false), l = s[0], c = s[1], u = r.r, d = r.g, f = r.b, g = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(u, ",").concat(d, ",").concat(f, ",.5) 100%)"), h = e.barSize, F = function() {
      c(false);
    }, w = function() {
      c(true);
    }, C = function(v) {
      var U = vr(v, h) / 100, T = "rgba(".concat(u, ", ").concat(d, ", ").concat(f, ", ").concat(U, ")");
      o(T);
    }, b = function(v) {
      l && C(v);
    }, Q = function(v) {
      l || C(v);
    }, S = n - 18;
    return p.useEffect(function() {
      var v = function() {
        F();
      };
      return window.addEventListener("mouseup", v), function() {
        window.removeEventListener("mouseup", v);
      };
    }, []), x.createElement("div", {
      onMouseDown: w,
      onMouseMove: function(v) {
        return b(v);
      },
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      id: "rbgcp-opacity-wrapper".concat(a)
    }, x.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: Bt(Bt({}, i.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), x.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: Bt(Bt({}, i.rbgcpHandle), {
        left: S * (r == null ? void 0 : r.a),
        top: -2
      })
    }), x.createElement("div", {
      style: Bt(Bt({}, i.rbgcpOpacityOverlay), {
        background: g
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(v) {
        return Q(v);
      }
    }));
  }, Rw = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, Dw = [
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
  ], Mw = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = EA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, s = r.handleChange, l = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : Dw;
    }, u = function(f) {
      (f == null ? void 0 : f.includes("gradient")) ? o(f) : s(f);
    }, d = function(f) {
      if (!f || i) return "";
      var g = f == null ? void 0 : f.replace(" ", "");
      return g === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return x.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(l)
    }, x.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: d(n)
      },
      id: "rbgcp-preview".concat(l)
    }), x.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(l)
    }, c().map(function(f, g) {
      return x.createElement("div", {
        key: "".concat(f, "-").concat(g),
        id: "rbgcp-preset-".concat(g, "-wrapper").concat(l),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, x.createElement("div", {
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
        id: "rbgcp-preset-".concat(g).concat(l)
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
  }, _w = function() {
    var A = EA().defaultStyles, e = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, x.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, Pw = function(A) {
    var e = A.color, t = EA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, x.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, Gw = function(A) {
    var e = A.color, t = EA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, x.createElement("circle", {
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), x.createElement("circle", {
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, Nw = function(A) {
    var e = A.color, t = EA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, o = {
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, x.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), x.createElement("line", {
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
    }), x.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), x.createElement("line", {
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
    }), x.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), x.createElement("line", {
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
  }, Vw = function(A) {
    var e = A.color, t = EA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, x.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), x.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), x.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, $w = function(A) {
    var e = A.color, t = EA().defaultStyles, r = e ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, x.createElement("circle", {
      style: iA(iA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), x.createElement("circle", {
      style: iA(iA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), x.createElement("circle", {
      style: iA(iA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), x.createElement("circle", {
      style: iA(iA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), x.createElement("path", {
      style: iA(iA(iA(iA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, Ww = function(A) {
    var e = A.color, t = EA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, x.createElement("polyline", {
      strokeLinecap: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), x.createElement("polyline", {
      strokeLinecap: "round",
      style: iA(iA(iA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, jw = function() {
    var A = EA().defaultStyles;
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, x.createElement("path", {
      style: iA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), x.createElement("path", {
      style: iA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), x.createElement("path", {
      style: iA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), x.createElement("path", {
      style: iA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, Xw = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = p.useRef((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = p.useState(!n.current.parentElement)[0];
    return p.useEffect(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), $s.createPortal(t, n.current);
  };
  const zw = p.memo(Xw);
  var Wa = function(A, e) {
    return Wa = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, Wa(A, e);
  };
  function Re(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Wa(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  var ja = function() {
    return ja = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, ja.apply(this, arguments);
  };
  function ce(A, e, t, r) {
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
  function oe(A, e) {
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
  function On(A, e, t) {
    if (arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || e);
  }
  var ct = (function() {
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
  })(), Ei = function(A, e) {
    return ct.fromClientRect(A, e.getBoundingClientRect());
  }, Yw = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new ct(0, 0, r, n);
  }, Si = function(A) {
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
  }, ic = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Jw = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Kn = 0; Kn < ic.length; Kn++) Jw[ic.charCodeAt(Kn)] = Kn;
  var ac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Lr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Rn = 0; Rn < ac.length; Rn++) Lr[ac.charCodeAt(Rn)] = Rn;
  var Zw = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Lr[A.charCodeAt(r)], i = Lr[A.charCodeAt(r + 1)], a = Lr[A.charCodeAt(r + 2)], s = Lr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, qw = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, AC = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Mt = 5, qs = 11, Zi = 2, eC = qs - Mt, Id = 65536 >> Mt, tC = 1 << Mt, qi = tC - 1, rC = 1024 >> Mt, nC = Id + rC, oC = nC, iC = 32, aC = oC + iC, sC = 65536 >> qs, lC = 1 << eC, cC = lC - 1, sc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, uC = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, dC = function(A, e) {
    var t = Zw(A), r = Array.isArray(t) ? AC(t) : new Uint32Array(t), n = Array.isArray(t) ? qw(t) : new Uint16Array(t), o = 24, i = sc(n, o / 2, r[4] / 2), a = r[5] === 2 ? sc(n, (o + r[4]) / 2) : uC(r, Math.ceil((o + r[4]) / 4));
    return new fC(r[0], r[1], r[2], r[3], i, a);
  }, fC = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Mt], t = (t << Zi) + (e & qi), this.data[t];
        if (e <= 65535) return t = this.index[Id + (e - 55296 >> Mt)], t = (t << Zi) + (e & qi), this.data[t];
        if (e < this.highStart) return t = aC - sC + (e >> qs), t = this.index[t], t += e >> Mt & cC, t = this.index[t], t = (t << Zi) + (e & qi), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), lc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", gC = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Dn = 0; Dn < lc.length; Dn++) gC[lc.charCodeAt(Dn)] = Dn;
  var BC = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", cc = 50, hC = 1, Hd = 2, Td = 3, pC = 4, vC = 5, uc = 7, Ld = 8, dc = 9, vt = 10, Xa = 11, fc = 12, za = 13, mC = 14, kr = 15, Ya = 16, Mn = 17, Ur = 18, wC = 19, gc = 20, Ja = 21, Er = 22, Aa = 23, Zt = 24, he = 25, Or = 26, Kr = 27, qt = 28, CC = 29, Lt = 30, yC = 31, _n = 32, Pn = 33, Za = 34, qa = 35, As = 36, rn = 37, es = 38, fo = 39, go = 40, ea = 41, kd = 42, bC = 43, QC = [
    9001,
    65288
  ], Od = "!", mA = "\xD7", Gn = "\xF7", ts = dC(BC), nt = [
    Lt,
    As
  ], rs = [
    hC,
    Hd,
    Td,
    vC
  ], Kd = [
    vt,
    Ld
  ], Bc = [
    Kr,
    Or
  ], FC = rs.concat(Kd), hc = [
    es,
    fo,
    go,
    Za,
    qa
  ], UC = [
    kr,
    za
  ], EC = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = ts.get(o);
      if (a > cc ? (n.push(true), a -= cc) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(Ya);
      if (a === pC || a === Xa) {
        if (i === 0) return r.push(i), t.push(Lt);
        var s = t[i - 1];
        return FC.indexOf(s) === -1 ? (r.push(r[i - 1]), t.push(s)) : (r.push(i), t.push(Lt));
      }
      if (r.push(i), a === yC) return t.push(e === "strict" ? Ja : rn);
      if (a === kd || a === CC) return t.push(Lt);
      if (a === bC) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(rn) : t.push(Lt);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, ta = function(A, e, t, r) {
    var n = r[t];
    if (Array.isArray(A) ? A.indexOf(n) !== -1 : A === n) for (var o = t; o <= r.length; ) {
      o++;
      var i = r[o];
      if (i === e) return true;
      if (i !== vt) break;
    }
    if (n === vt) for (var o = t; o > 0; ) {
      o--;
      var a = r[o];
      if (Array.isArray(A) ? A.indexOf(a) !== -1 : A === a) for (var s = t; s <= r.length; ) {
        s++;
        var i = r[s];
        if (i === e) return true;
        if (i !== vt) break;
      }
      if (a !== vt) break;
    }
    return false;
  }, pc = function(A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === vt) t--;
      else return r;
    }
    return 0;
  }, SC = function(A, e, t, r, n) {
    if (t[r] === 0) return mA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return mA;
    var i = o - 1, a = o + 1, s = e[o], l = i >= 0 ? e[i] : 0, c = e[a];
    if (s === Hd && c === Td) return mA;
    if (rs.indexOf(s) !== -1) return Od;
    if (rs.indexOf(c) !== -1 || Kd.indexOf(c) !== -1) return mA;
    if (pc(o, e) === Ld) return Gn;
    if (ts.get(A[o]) === Xa || (s === _n || s === Pn) && ts.get(A[a]) === Xa || s === uc || c === uc || s === dc || [
      vt,
      za,
      kr
    ].indexOf(s) === -1 && c === dc || [
      Mn,
      Ur,
      wC,
      Zt,
      qt
    ].indexOf(c) !== -1 || pc(o, e) === Er || ta(Aa, Er, o, e) || ta([
      Mn,
      Ur
    ], Ja, o, e) || ta(fc, fc, o, e)) return mA;
    if (s === vt) return Gn;
    if (s === Aa || c === Aa) return mA;
    if (c === Ya || s === Ya) return Gn;
    if ([
      za,
      kr,
      Ja
    ].indexOf(c) !== -1 || s === mC || l === As && UC.indexOf(s) !== -1 || s === qt && c === As || c === gc || nt.indexOf(c) !== -1 && s === he || nt.indexOf(s) !== -1 && c === he || s === Kr && [
      rn,
      _n,
      Pn
    ].indexOf(c) !== -1 || [
      rn,
      _n,
      Pn
    ].indexOf(s) !== -1 && c === Or || nt.indexOf(s) !== -1 && Bc.indexOf(c) !== -1 || Bc.indexOf(s) !== -1 && nt.indexOf(c) !== -1 || [
      Kr,
      Or
    ].indexOf(s) !== -1 && (c === he || [
      Er,
      kr
    ].indexOf(c) !== -1 && e[a + 1] === he) || [
      Er,
      kr
    ].indexOf(s) !== -1 && c === he || s === he && [
      he,
      qt,
      Zt
    ].indexOf(c) !== -1) return mA;
    if ([
      he,
      qt,
      Zt,
      Mn,
      Ur
    ].indexOf(c) !== -1) for (var u = o; u >= 0; ) {
      var d = e[u];
      if (d === he) return mA;
      if ([
        qt,
        Zt
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if ([
      Kr,
      Or
    ].indexOf(c) !== -1) for (var u = [
      Mn,
      Ur
    ].indexOf(s) !== -1 ? i : o; u >= 0; ) {
      var d = e[u];
      if (d === he) return mA;
      if ([
        qt,
        Zt
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if (es === s && [
      es,
      fo,
      Za,
      qa
    ].indexOf(c) !== -1 || [
      fo,
      Za
    ].indexOf(s) !== -1 && [
      fo,
      go
    ].indexOf(c) !== -1 || [
      go,
      qa
    ].indexOf(s) !== -1 && c === go || hc.indexOf(s) !== -1 && [
      gc,
      Or
    ].indexOf(c) !== -1 || hc.indexOf(c) !== -1 && s === Kr || nt.indexOf(s) !== -1 && nt.indexOf(c) !== -1 || s === Zt && nt.indexOf(c) !== -1 || nt.concat(he).indexOf(s) !== -1 && c === Er && QC.indexOf(A[a]) === -1 || nt.concat(he).indexOf(c) !== -1 && s === Ur) return mA;
    if (s === ea && c === ea) {
      for (var f = t[o], g = 1; f > 0 && (f--, e[f] === ea); ) g++;
      if (g % 2 !== 0) return mA;
    }
    return s === _n && c === Pn ? mA : Gn;
  }, xC = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = EC(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        he,
        Lt,
        kd
      ].indexOf(a) !== -1 ? rn : a;
    }));
    var i = e.wordBreak === "keep-all" ? o.map(function(a, s) {
      return a && A[s] >= 19968 && A[s] <= 40959;
    }) : void 0;
    return [
      r,
      n,
      i
    ];
  }, IC = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === Od, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return GA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), HC = function(A, e) {
    var t = Si(A), r = xC(t, e), n = r[0], o = r[1], i = r[2], a = t.length, s = 0, l = 0;
    return {
      next: function() {
        if (l >= a) return {
          done: true,
          value: null
        };
        for (var c = mA; l < a && (c = SC(t, o, n, ++l, i)) === mA; ) ;
        if (c !== mA || l === a) {
          var u = new IC(t, c, s, l);
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
  }, TC = 1, LC = 2, pn = 4, vc = 8, Lo = 10, mc = 47, $r = 92, kC = 9, OC = 32, Nn = 34, Sr = 61, KC = 35, RC = 36, DC = 37, Vn = 39, $n = 40, xr = 41, MC = 95, de = 45, _C = 33, PC = 60, GC = 62, NC = 64, VC = 91, $C = 93, WC = 61, jC = 123, Wn = 63, XC = 125, wc = 124, zC = 126, YC = 128, Cc = 65533, ra = 42, Rt = 43, JC = 44, ZC = 58, qC = 59, nn = 46, Ay = 0, ey = 8, ty = 11, ry = 14, ny = 31, oy = 127, _e = -1, Rd = 48, Dd = 97, Md = 101, iy = 102, ay = 117, sy = 122, _d = 65, Pd = 69, Gd = 70, ly = 85, cy = 90, ie = function(A) {
    return A >= Rd && A <= 57;
  }, uy = function(A) {
    return A >= 55296 && A <= 57343;
  }, Ar = function(A) {
    return ie(A) || A >= _d && A <= Gd || A >= Dd && A <= iy;
  }, dy = function(A) {
    return A >= Dd && A <= sy;
  }, fy = function(A) {
    return A >= _d && A <= cy;
  }, gy = function(A) {
    return dy(A) || fy(A);
  }, By = function(A) {
    return A >= YC;
  }, jn = function(A) {
    return A === Lo || A === kC || A === OC;
  }, ko = function(A) {
    return gy(A) || By(A) || A === MC;
  }, yc = function(A) {
    return ko(A) || ie(A) || A === de;
  }, hy = function(A) {
    return A >= Ay && A <= ey || A === ty || A >= ry && A <= ny || A === oy;
  }, ht = function(A, e) {
    return A !== $r ? false : e !== Lo;
  }, Xn = function(A, e, t) {
    return A === de ? ko(e) || ht(e, t) : ko(A) ? true : !!(A === $r && ht(A, e));
  }, na = function(A, e, t) {
    return A === Rt || A === de ? ie(e) ? true : e === nn && ie(t) : ie(A === nn ? e : A);
  }, py = function(A) {
    var e = 0, t = 1;
    (A[e] === Rt || A[e] === de) && (A[e] === de && (t = -1), e++);
    for (var r = []; ie(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt(GA.apply(void 0, r), 10) : 0;
    A[e] === nn && e++;
    for (var o = []; ie(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt(GA.apply(void 0, o), 10) : 0;
    (A[e] === Pd || A[e] === Md) && e++;
    var s = 1;
    (A[e] === Rt || A[e] === de) && (A[e] === de && (s = -1), e++);
    for (var l = []; ie(A[e]); ) l.push(A[e++]);
    var c = l.length ? parseInt(GA.apply(void 0, l), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, s * c);
  }, vy = {
    type: 2
  }, my = {
    type: 3
  }, wy = {
    type: 4
  }, Cy = {
    type: 13
  }, yy = {
    type: 8
  }, by = {
    type: 21
  }, Qy = {
    type: 9
  }, Fy = {
    type: 10
  }, Uy = {
    type: 11
  }, Ey = {
    type: 12
  }, Sy = {
    type: 14
  }, zn = {
    type: 23
  }, xy = {
    type: 1
  }, Iy = {
    type: 25
  }, Hy = {
    type: 24
  }, Ty = {
    type: 26
  }, Ly = {
    type: 27
  }, ky = {
    type: 28
  }, Oy = {
    type: 29
  }, Ky = {
    type: 31
  }, ns = {
    type: 32
  }, Nd = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Si(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== ns; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Nn:
          return this.consumeStringToken(Nn);
        case KC:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (yc(t) || ht(r, n)) {
            var o = Xn(t, r, n) ? LC : TC, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case RC:
          if (this.peekCodePoint(0) === Sr) return this.consumeCodePoint(), Cy;
          break;
        case Vn:
          return this.consumeStringToken(Vn);
        case $n:
          return vy;
        case xr:
          return my;
        case ra:
          if (this.peekCodePoint(0) === Sr) return this.consumeCodePoint(), Sy;
          break;
        case Rt:
          if (na(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case JC:
          return wy;
        case de:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (na(a, s, l)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Xn(a, s, l)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === de && l === GC) return this.consumeCodePoint(), this.consumeCodePoint(), Hy;
          break;
        case nn:
          if (na(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case mc:
          if (this.peekCodePoint(0) === ra) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === ra && (c = this.consumeCodePoint(), c === mc)) return this.consumeToken();
            if (c === _e) return this.consumeToken();
          }
          break;
        case ZC:
          return Ty;
        case qC:
          return Ly;
        case PC:
          if (this.peekCodePoint(0) === _C && this.peekCodePoint(1) === de && this.peekCodePoint(2) === de) return this.consumeCodePoint(), this.consumeCodePoint(), Iy;
          break;
        case NC:
          var u = this.peekCodePoint(0), d = this.peekCodePoint(1), f = this.peekCodePoint(2);
          if (Xn(u, d, f)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case VC:
          return ky;
        case $r:
          if (ht(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case $C:
          return Oy;
        case WC:
          if (this.peekCodePoint(0) === Sr) return this.consumeCodePoint(), yy;
          break;
        case jC:
          return Uy;
        case XC:
          return Ey;
        case ay:
        case ly:
          var g = this.peekCodePoint(0), h = this.peekCodePoint(1);
          return g === Rt && (Ar(h) || h === Wn) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case wc:
          if (this.peekCodePoint(0) === Sr) return this.consumeCodePoint(), Qy;
          if (this.peekCodePoint(0) === wc) return this.consumeCodePoint(), by;
          break;
        case zC:
          if (this.peekCodePoint(0) === Sr) return this.consumeCodePoint(), Fy;
          break;
        case _e:
          return ns;
      }
      return jn(e) ? (this.consumeWhiteSpace(), Ky) : ie(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : ko(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
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
      for (var e = [], t = this.consumeCodePoint(); Ar(t) && e.length < 6; ) e.push(t), t = this.consumeCodePoint();
      for (var r = false; t === Wn && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt(GA.apply(void 0, e.map(function(s) {
          return s === Wn ? Rd : s;
        })), 16), o = parseInt(GA.apply(void 0, e.map(function(s) {
          return s === Wn ? Gd : s;
        })), 16);
        return {
          type: 30,
          start: n,
          end: o
        };
      }
      var i = parseInt(GA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === de && Ar(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; Ar(t) && a.length < 6; ) a.push(t), t = this.consumeCodePoint();
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
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === $n ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === $n ? (this.consumeCodePoint(), {
        type: 19,
        value: e
      }) : {
        type: 20,
        value: e
      };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === _e) return {
        type: 22,
        value: ""
      };
      var t = this.peekCodePoint(0);
      if (t === Vn || t === Nn) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === _e || this.peekCodePoint(0) === xr) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), zn);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === _e || n === xr) return {
          type: 22,
          value: GA.apply(void 0, e)
        };
        if (jn(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === _e || this.peekCodePoint(0) === xr ? (this.consumeCodePoint(), {
          type: 22,
          value: GA.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), zn);
        if (n === Nn || n === Vn || n === $n || hy(n)) return this.consumeBadUrlRemnants(), zn;
        if (n === $r) if (ht(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), zn;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; jn(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === xr || e === _e) return;
        ht(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
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
        if (n === _e || n === void 0 || n === e) return t += this.consumeStringSlice(r), {
          type: 0,
          value: t
        };
        if (n === Lo) return this._value.splice(0, r), xy;
        if (n === $r) {
          var o = this._value[r + 1];
          o !== _e && o !== void 0 && (o === Lo ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : ht(n, o) && (t += this.consumeStringSlice(r), t += GA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = pn, r = this.peekCodePoint(0);
      for ((r === Rt || r === de) && e.push(this.consumeCodePoint()); ie(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === nn && ie(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = vc; ie(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === Pd || r === Md) && ((n === Rt || n === de) && ie(o) || ie(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = vc; ie(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        py(e),
        t
      ];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), o = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (Xn(n, o, i)) {
        var a = this.consumeName();
        return {
          type: 15,
          number: t,
          flags: r,
          unit: a
        };
      }
      return n === DC ? (this.consumeCodePoint(), {
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
      if (Ar(e)) {
        for (var t = GA(e); Ar(this.peekCodePoint(0)) && t.length < 6; ) t += GA(this.consumeCodePoint());
        jn(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || uy(r) || r > 1114111 ? Cc : r;
      }
      return e === _e ? Cc : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (yc(t)) e += GA(t);
        else if (ht(t, this.peekCodePoint(0))) e += GA(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })(), Vd = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new Nd();
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
        if (r.type === 32 || Dy(r, e)) return t;
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
      return typeof e > "u" ? ns : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  })(), vn = function(A) {
    return A.type === 15;
  }, Cr = function(A) {
    return A.type === 17;
  }, UA = function(A) {
    return A.type === 20;
  }, Ry = function(A) {
    return A.type === 0;
  }, os = function(A, e) {
    return UA(A) && A.value === e;
  }, $d = function(A) {
    return A.type !== 31;
  }, mr = function(A) {
    return A.type !== 31 && A.type !== 4;
  }, qe = function(A) {
    var e = [], t = [];
    return A.forEach(function(r) {
      if (r.type === 4) {
        if (t.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
        e.push(t), t = [];
        return;
      }
      r.type !== 31 && t.push(r);
    }), t.length && e.push(t), e;
  }, Dy = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, Et = function(A) {
    return A.type === 17 || A.type === 15;
  }, WA = function(A) {
    return A.type === 16 || Et(A);
  }, Wd = function(A) {
    return A.length > 1 ? [
      A[0],
      A[1]
    ] : [
      A[0]
    ];
  }, te = {
    type: 17,
    number: 0,
    flags: pn
  }, Al = {
    type: 16,
    number: 50,
    flags: pn
  }, mt = {
    type: 16,
    number: 100,
    flags: pn
  }, Rr = function(A, e, t) {
    var r = A[0], n = A[1];
    return [
      TA(r, e),
      TA(typeof n < "u" ? n : r, t)
    ];
  }, TA = function(A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (vn(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      default:
        return A.number;
    }
    return A.number;
  }, jd = "deg", Xd = "grad", zd = "rad", Yd = "turn", xi = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case jd:
          return Math.PI * e.number / 180;
        case Xd:
          return Math.PI / 200 * e.number;
        case zd:
          return e.number;
        case Yd:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, Jd = function(A) {
    return A.type === 15 && (A.unit === jd || A.unit === Xd || A.unit === zd || A.unit === Yd);
  }, Zd = function(A) {
    var e = A.filter(UA).map(function(t) {
      return t.value;
    }).join(" ");
    switch (e) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [
          te,
          te
        ];
      case "to top":
      case "bottom":
        return xe(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [
          te,
          mt
        ];
      case "to right":
      case "left":
        return xe(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [
          mt,
          mt
        ];
      case "to bottom":
      case "top":
        return xe(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [
          mt,
          te
        ];
      case "to left":
      case "right":
        return xe(270);
    }
    return 0;
  }, xe = function(A) {
    return Math.PI * A / 180;
  }, yt = {
    name: "color",
    parse: function(A, e) {
      if (e.type === 18) {
        var t = My[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3);
          return wt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), 1);
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3), i = e.value.substring(3, 4);
          return wt(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), parseInt(i + i, 16) / 255);
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6);
          return wt(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6), i = e.value.substring(6, 8);
          return wt(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), parseInt(i, 16) / 255);
        }
      }
      if (e.type === 20) {
        var a = at[e.value.toUpperCase()];
        if (typeof a < "u") return a;
      }
      return at.TRANSPARENT;
    }
  }, bt = function(A) {
    return (255 & A) === 0;
  }, zA = function(A) {
    var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
  }, wt = function(A, e, t, r) {
    return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
  }, bc = function(A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  }, Qc = function(A, e) {
    var t = e.filter(mr);
    if (t.length === 3) {
      var r = t.map(bc), n = r[0], o = r[1], i = r[2];
      return wt(n, o, i, 1);
    }
    if (t.length === 4) {
      var a = t.map(bc), n = a[0], o = a[1], i = a[2], s = a[3];
      return wt(n, o, i, s);
    }
    return 0;
  };
  function oa(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var Fc = function(A, e) {
    var t = e.filter(mr), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? xe(r.number) : xi.parse(A, r)) / (Math.PI * 2), s = WA(n) ? n.number / 100 : 0, l = WA(o) ? o.number / 100 : 0, c = typeof i < "u" && WA(i) ? TA(i, 1) : 1;
    if (s === 0) return wt(l * 255, l * 255, l * 255, 1);
    var u = l <= 0.5 ? l * (s + 1) : l + s - l * s, d = l * 2 - u, f = oa(d, u, a + 1 / 3), g = oa(d, u, a), h = oa(d, u, a - 1 / 3);
    return wt(f * 255, g * 255, h * 255, c);
  }, My = {
    hsl: Fc,
    hsla: Fc,
    rgb: Qc,
    rgba: Qc
  }, Wr = function(A, e) {
    return yt.parse(A, Vd.create(e).parseComponentValue());
  }, at = {
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
  }, _y = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (UA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, Py = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Ii = function(A, e) {
    var t = yt.parse(A, e[0]), r = e[1];
    return r && WA(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  }, Uc = function(A, e) {
    var t = A[0], r = A[A.length - 1];
    t.stop === null && (t.stop = te), r.stop === null && (r.stop = mt);
    for (var n = [], o = 0, i = 0; i < A.length; i++) {
      var a = A[i].stop;
      if (a !== null) {
        var s = TA(a, e);
        s > o ? n.push(s) : n.push(o), o = s;
      } else n.push(null);
    }
    for (var l = null, i = 0; i < n.length; i++) {
      var c = n[i];
      if (c === null) l === null && (l = i);
      else if (l !== null) {
        for (var u = i - l, d = n[l - 1], f = (c - d) / (u + 1), g = 1; g <= u; g++) n[l + g - 1] = f * g;
        l = null;
      }
    }
    return A.map(function(h, F) {
      var w = h.color;
      return {
        color: w,
        stop: Math.max(Math.min(1, n[F] / e), 0)
      };
    });
  }, Gy = function(A, e, t) {
    var r = e / 2, n = t / 2, o = TA(A[0], e) - r, i = n - TA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, Ny = function(A, e, t) {
    var r = typeof A == "number" ? A : Gy(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - l,
      o + l,
      i - s,
      i + s
    ];
  }, Oe = function(A, e) {
    return Math.sqrt(A * A + e * e);
  }, Ec = function(A, e, t, r, n) {
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
      var s = a[0], l = a[1], c = Oe(t - s, r - l);
      return (n ? c < i.optimumDistance : c > i.optimumDistance) ? {
        optimumCorner: a,
        optimumDistance: c
      } : i;
    }, {
      optimumDistance: n ? 1 / 0 : -1 / 0,
      optimumCorner: null
    }).optimumCorner;
  }, Vy = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(Oe(e, t), Oe(e, t - n), Oe(e - r, t), Oe(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = Ec(r, n, e, t, true), l = s[0], c = s[1];
          o = Oe(l - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(Oe(e, t), Oe(e, t - n), Oe(e - r, t), Oe(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), u = Ec(r, n, e, t, false), l = u[0], c = u[1];
          o = Oe(l - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = TA(A.size[0], r), i = A.size.length === 2 ? TA(A.size[1], n) : o), [
      o,
      i
    ];
  }, $y = function(A, e) {
    var t = xe(180), r = [];
    return qe(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = Zd(n);
          return;
        } else if (Jd(i)) {
          t = xi.parse(A, i);
          return;
        }
      }
      var a = Ii(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, Yn = function(A, e) {
    var t = xe(180), r = [];
    return qe(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && [
          "top",
          "left",
          "right",
          "bottom"
        ].indexOf(i.value) !== -1) {
          t = Zd(n);
          return;
        } else if (Jd(i)) {
          t = (xi.parse(A, i) + xe(270)) % xe(360);
          return;
        }
      }
      var a = Ii(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, Wy = function(A, e) {
    var t = xe(180), r = [], n = 1, o = 0, i = 3, a = [];
    return qe(e).forEach(function(s, l) {
      var c = s[0];
      if (l === 0) {
        if (UA(c) && c.value === "linear") {
          n = 1;
          return;
        } else if (UA(c) && c.value === "radial") {
          n = 2;
          return;
        }
      }
      if (c.type === 18) {
        if (c.name === "from") {
          var u = yt.parse(A, c.values[0]);
          r.push({
            stop: te,
            color: u
          });
        } else if (c.name === "to") {
          var u = yt.parse(A, c.values[0]);
          r.push({
            stop: mt,
            color: u
          });
        } else if (c.name === "color-stop") {
          var d = c.values.filter(mr);
          if (d.length === 2) {
            var u = yt.parse(A, d[1]), f = d[0];
            Cr(f) && r.push({
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
      angle: (t + xe(180)) % xe(360),
      stops: r,
      type: n
    } : {
      size: i,
      shape: o,
      stops: r,
      position: a,
      type: n
    };
  }, qd = "closest-side", Af = "farthest-side", ef = "closest-corner", tf = "farthest-corner", rf = "circle", nf = "ellipse", of = "cover", af = "contain", jy = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return qe(e).forEach(function(i, a) {
      var s = true;
      if (a === 0) {
        var l = false;
        s = i.reduce(function(u, d) {
          if (l) if (UA(d)) switch (d.value) {
            case "center":
              return o.push(Al), u;
            case "top":
            case "left":
              return o.push(te), u;
            case "right":
            case "bottom":
              return o.push(mt), u;
          }
          else (WA(d) || Et(d)) && o.push(d);
          else if (UA(d)) switch (d.value) {
            case rf:
              return t = 0, false;
            case nf:
              return t = 1, false;
            case "at":
              return l = true, false;
            case qd:
              return r = 0, false;
            case of:
            case Af:
              return r = 1, false;
            case af:
            case ef:
              return r = 2, false;
            case tf:
              return r = 3, false;
          }
          else if (Et(d) || WA(d)) return Array.isArray(r) || (r = []), r.push(d), false;
          return u;
        }, s);
      }
      if (s) {
        var c = Ii(A, i);
        n.push(c);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, Jn = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return qe(e).forEach(function(i, a) {
      var s = true;
      if (a === 0 ? s = i.reduce(function(c, u) {
        if (UA(u)) switch (u.value) {
          case "center":
            return o.push(Al), false;
          case "top":
          case "left":
            return o.push(te), false;
          case "right":
          case "bottom":
            return o.push(mt), false;
        }
        else if (WA(u) || Et(u)) return o.push(u), false;
        return c;
      }, s) : a === 1 && (s = i.reduce(function(c, u) {
        if (UA(u)) switch (u.value) {
          case rf:
            return t = 0, false;
          case nf:
            return t = 1, false;
          case af:
          case qd:
            return r = 0, false;
          case Af:
            return r = 1, false;
          case ef:
            return r = 2, false;
          case of:
          case tf:
            return r = 3, false;
        }
        else if (Et(u) || WA(u)) return Array.isArray(r) || (r = []), r.push(u), false;
        return c;
      }, s)), s) {
        var l = Ii(A, i);
        n.push(l);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, Xy = function(A) {
    return A.type === 1;
  }, zy = function(A) {
    return A.type === 2;
  }, el = {
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
        var r = sf[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function Yy(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!sf[A.name]);
  }
  var sf = {
    "linear-gradient": $y,
    "-moz-linear-gradient": Yn,
    "-ms-linear-gradient": Yn,
    "-o-linear-gradient": Yn,
    "-webkit-linear-gradient": Yn,
    "radial-gradient": jy,
    "-moz-radial-gradient": Jn,
    "-ms-radial-gradient": Jn,
    "-o-radial-gradient": Jn,
    "-webkit-radial-gradient": Jn,
    "-webkit-gradient": Wy
  }, Jy = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return mr(r) && Yy(r);
      }).map(function(r) {
        return el.parse(A, r);
      });
    }
  }, Zy = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (UA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, qy = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return qe(e).map(function(t) {
        return t.filter(WA);
      }).map(Wd);
    }
  }, Ab = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return qe(e).map(function(t) {
        return t.filter(UA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(eb);
    }
  }, eb = function(A) {
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
  }, fr;
  (function(A) {
    A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
  })(fr || (fr = {}));
  var tb = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return qe(e).map(function(t) {
        return t.filter(rb);
      });
    }
  }, rb = function(A) {
    return UA(A) || WA(A);
  }, Hi = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, nb = Hi("top"), ob = Hi("right"), ib = Hi("bottom"), ab = Hi("left"), Ti = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return Wd(t.filter(WA));
      }
    };
  }, sb = Ti("top-left"), lb = Ti("top-right"), cb = Ti("bottom-right"), ub = Ti("bottom-left"), Li = function(A) {
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
  }, db = Li("top"), fb = Li("right"), gb = Li("bottom"), Bb = Li("left"), ki = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return vn(t) ? t.number : 0;
      }
    };
  }, hb = ki("top"), pb = ki("right"), vb = ki("bottom"), mb = ki("left"), wb = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Cb = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, yb = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(UA).reduce(function(t, r) {
        return t | bb(r.value);
      }, 0);
    }
  }, bb = function(A) {
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
  }, Qb = {
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
  }, Fb = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, Oo;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })(Oo || (Oo = {}));
  var Ub = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? Oo.STRICT : Oo.NORMAL;
    }
  }, Eb = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, Sc = function(A, e) {
    return UA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : WA(A) ? TA(A, e) : e;
  }, Sb = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : el.parse(A, e);
    }
  }, xb = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "inside" ? 0 : 1;
    }
  }, is = {
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
  }, Oi = function(A) {
    return {
      name: "margin-" + A,
      initialValue: "0",
      prefix: false,
      type: 4
    };
  }, Ib = Oi("top"), Hb = Oi("right"), Tb = Oi("bottom"), Lb = Oi("left"), kb = {
    name: "overflow",
    initialValue: "visible",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(UA).map(function(t) {
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
  }, Ob = {
    name: "overflow-wrap",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "break-word" ? "break-word" : "normal";
    }
  }, Ki = function(A) {
    return {
      name: "padding-" + A,
      initialValue: "0",
      prefix: false,
      type: 3,
      format: "length-percentage"
    };
  }, Kb = Ki("top"), Rb = Ki("right"), Db = Ki("bottom"), Mb = Ki("left"), _b = {
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
  }, Pb = {
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
  }, Gb = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && os(e[0], "none") ? [] : qe(e).map(function(t) {
        for (var r = {
          color: at.TRANSPARENT,
          offsetX: te,
          offsetY: te,
          blur: te
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Et(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = yt.parse(A, i);
        }
        return r;
      });
    }
  }, Nb = {
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
  }, Vb = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = jb[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, $b = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, Wb = function(A) {
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
  }, jb = {
    matrix: $b,
    matrix3d: Wb
  }, xc = {
    type: 16,
    number: 50,
    flags: pn
  }, Xb = [
    xc,
    xc
  ], zb = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter(WA);
      return t.length !== 2 ? Xb : [
        t[0],
        t[1]
      ];
    }
  }, Yb = {
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
  }, jr;
  (function(A) {
    A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
  })(jr || (jr = {}));
  var Jb = {
    name: "word-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      switch (e) {
        case "break-all":
          return jr.BREAK_ALL;
        case "keep-all":
          return jr.KEEP_ALL;
        default:
          return jr.NORMAL;
      }
    }
  }, Zb = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20) return {
        auto: true,
        order: 0
      };
      if (Cr(e)) return {
        auto: false,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, lf = {
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
  }, qb = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Cr(e) ? e.number : 1;
    }
  }, AQ = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, eQ = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(UA).map(function(t) {
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
  }, tQ = {
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
  }, rQ = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, nQ = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return Cr(e) ? e.number : UA(e) && e.value === "bold" ? 700 : 400;
    }
  }, oQ = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(UA).map(function(t) {
        return t.value;
      });
    }
  }, iQ = {
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
  }, aQ = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, sQ = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter($d), o = 0; o < n.length; o++) {
        var i = n[o], a = n[o + 1];
        if (i.type === 20) {
          var s = a && Cr(a) ? a.number : 1;
          r.push({
            counter: i.value,
            increment: s
          });
        }
      }
      return r;
    }
  }, lQ = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter($d), n = 0; n < r.length; n++) {
        var o = r[n], i = r[n + 1];
        if (UA(o) && o.value !== "none") {
          var a = i && Cr(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: a
          });
        }
      }
      return t;
    }
  }, cQ = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(vn).map(function(t) {
        return lf.parse(A, t);
      });
    }
  }, uQ = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(Ry);
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
  }, Ic = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, dQ = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && os(e[0], "none") ? [] : qe(e).map(function(t) {
        for (var r = {
          color: 255,
          offsetX: te,
          offsetY: te,
          blur: te,
          spread: te,
          inset: false
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          os(i, "inset") ? r.inset = true : Et(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = yt.parse(A, i);
        }
        return r;
      });
    }
  }, fQ = {
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
      return e.filter(UA).forEach(function(n) {
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
  }, gQ = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, BQ = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return vn(e) ? e.number : 0;
    }
  }, hQ = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = nA(e, cQ, t.animationDuration), this.backgroundClip = nA(e, _y, t.backgroundClip), this.backgroundColor = nA(e, Py, t.backgroundColor), this.backgroundImage = nA(e, Jy, t.backgroundImage), this.backgroundOrigin = nA(e, Zy, t.backgroundOrigin), this.backgroundPosition = nA(e, qy, t.backgroundPosition), this.backgroundRepeat = nA(e, Ab, t.backgroundRepeat), this.backgroundSize = nA(e, tb, t.backgroundSize), this.borderTopColor = nA(e, nb, t.borderTopColor), this.borderRightColor = nA(e, ob, t.borderRightColor), this.borderBottomColor = nA(e, ib, t.borderBottomColor), this.borderLeftColor = nA(e, ab, t.borderLeftColor), this.borderTopLeftRadius = nA(e, sb, t.borderTopLeftRadius), this.borderTopRightRadius = nA(e, lb, t.borderTopRightRadius), this.borderBottomRightRadius = nA(e, cb, t.borderBottomRightRadius), this.borderBottomLeftRadius = nA(e, ub, t.borderBottomLeftRadius), this.borderTopStyle = nA(e, db, t.borderTopStyle), this.borderRightStyle = nA(e, fb, t.borderRightStyle), this.borderBottomStyle = nA(e, gb, t.borderBottomStyle), this.borderLeftStyle = nA(e, Bb, t.borderLeftStyle), this.borderTopWidth = nA(e, hb, t.borderTopWidth), this.borderRightWidth = nA(e, pb, t.borderRightWidth), this.borderBottomWidth = nA(e, vb, t.borderBottomWidth), this.borderLeftWidth = nA(e, mb, t.borderLeftWidth), this.boxShadow = nA(e, dQ, t.boxShadow), this.color = nA(e, wb, t.color), this.direction = nA(e, Cb, t.direction), this.display = nA(e, yb, t.display), this.float = nA(e, Qb, t.cssFloat), this.fontFamily = nA(e, tQ, t.fontFamily), this.fontSize = nA(e, rQ, t.fontSize), this.fontStyle = nA(e, iQ, t.fontStyle), this.fontVariant = nA(e, oQ, t.fontVariant), this.fontWeight = nA(e, nQ, t.fontWeight), this.letterSpacing = nA(e, Fb, t.letterSpacing), this.lineBreak = nA(e, Ub, t.lineBreak), this.lineHeight = nA(e, Eb, t.lineHeight), this.listStyleImage = nA(e, Sb, t.listStyleImage), this.listStylePosition = nA(e, xb, t.listStylePosition), this.listStyleType = nA(e, is, t.listStyleType), this.marginTop = nA(e, Ib, t.marginTop), this.marginRight = nA(e, Hb, t.marginRight), this.marginBottom = nA(e, Tb, t.marginBottom), this.marginLeft = nA(e, Lb, t.marginLeft), this.opacity = nA(e, qb, t.opacity);
      var o = nA(e, kb, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = nA(e, Ob, t.overflowWrap), this.paddingTop = nA(e, Kb, t.paddingTop), this.paddingRight = nA(e, Rb, t.paddingRight), this.paddingBottom = nA(e, Db, t.paddingBottom), this.paddingLeft = nA(e, Mb, t.paddingLeft), this.paintOrder = nA(e, fQ, t.paintOrder), this.position = nA(e, Pb, t.position), this.textAlign = nA(e, _b, t.textAlign), this.textDecorationColor = nA(e, AQ, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = nA(e, eQ, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = nA(e, Gb, t.textShadow), this.textTransform = nA(e, Nb, t.textTransform), this.transform = nA(e, Vb, t.transform), this.transformOrigin = nA(e, zb, t.transformOrigin), this.visibility = nA(e, Yb, t.visibility), this.webkitTextStrokeColor = nA(e, gQ, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = nA(e, BQ, t.webkitTextStrokeWidth), this.wordBreak = nA(e, Jb, t.wordBreak), this.zIndex = nA(e, Zb, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return bt(this.backgroundColor);
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
  })(), pQ = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = nA(e, aQ, t.content), this.quotes = nA(e, uQ, t.quotes);
    }
    return A;
  })(), Hc = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = nA(e, sQ, t.counterIncrement), this.counterReset = nA(e, lQ, t.counterReset);
    }
    return A;
  })(), nA = function(A, e, t) {
    var r = new Nd(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Vd(r.read());
    switch (e.type) {
      case 2:
        var i = o.parseComponentValue();
        return e.parse(A, UA(i) ? i.value : e.initialValue);
      case 0:
        return e.parse(A, o.parseComponentValue());
      case 1:
        return e.parse(A, o.parseComponentValues());
      case 4:
        return o.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return xi.parse(A, o.parseComponentValue());
          case "color":
            return yt.parse(A, o.parseComponentValue());
          case "image":
            return el.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return Et(a) ? a : te;
          case "length-percentage":
            var s = o.parseComponentValue();
            return WA(s) ? s : te;
          case "time":
            return lf.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, vQ = "data-html2canvas-debug", mQ = function(A) {
    var e = A.getAttribute(vQ);
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
  }, as = function(A, e) {
    var t = mQ(A);
    return t === 1 || e === t;
  }, At = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, as(t, 3)) debugger;
      this.styles = new hQ(e, window.getComputedStyle(t, null)), cs(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Ei(this.context, t), as(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), wQ = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Tc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Dr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Zn = 0; Zn < Tc.length; Zn++) Dr[Tc.charCodeAt(Zn)] = Zn;
  var CQ = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Dr[A.charCodeAt(r)], i = Dr[A.charCodeAt(r + 1)], a = Dr[A.charCodeAt(r + 2)], s = Dr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, yQ = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, bQ = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, _t = 5, tl = 11, ia = 2, QQ = tl - _t, cf = 65536 >> _t, FQ = 1 << _t, aa = FQ - 1, UQ = 1024 >> _t, EQ = cf + UQ, SQ = EQ, xQ = 32, IQ = SQ + xQ, HQ = 65536 >> tl, TQ = 1 << QQ, LQ = TQ - 1, Lc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, kQ = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, OQ = function(A, e) {
    var t = CQ(A), r = Array.isArray(t) ? bQ(t) : new Uint32Array(t), n = Array.isArray(t) ? yQ(t) : new Uint16Array(t), o = 24, i = Lc(n, o / 2, r[4] / 2), a = r[5] === 2 ? Lc(n, (o + r[4]) / 2) : kQ(r, Math.ceil((o + r[4]) / 4));
    return new KQ(r[0], r[1], r[2], r[3], i, a);
  }, KQ = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> _t], t = (t << ia) + (e & aa), this.data[t];
        if (e <= 65535) return t = this.index[cf + (e - 55296 >> _t)], t = (t << ia) + (e & aa), this.data[t];
        if (e < this.highStart) return t = IQ - HQ + (e >> tl), t = this.index[t], t += e >> _t & LQ, t = this.index[t], t = (t << ia) + (e & aa), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), kc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", RQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var qn = 0; qn < kc.length; qn++) RQ[kc.charCodeAt(qn)] = qn;
  var DQ = 1, sa = 2, la = 3, Oc = 4, Kc = 5, MQ = 7, Rc = 8, ca = 9, ua = 10, Dc = 11, Mc = 12, _c = 13, Pc = 14, da = 15, _Q = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, PQ = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, GQ = OQ(wQ), Qe = "\xD7", fa = "\xF7", NQ = function(A) {
    return GQ.get(A);
  }, VQ = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === sa && i === la) return Qe;
    if (o === sa || o === la || o === Oc || i === sa || i === la || i === Oc) return fa;
    if (o === Rc && [
      Rc,
      ca,
      Dc,
      Mc
    ].indexOf(i) !== -1 || (o === Dc || o === ca) && (i === ca || i === ua) || (o === Mc || o === ua) && i === ua || i === _c || i === Kc || i === MQ || o === DQ) return Qe;
    if (o === _c && i === Pc) {
      for (; n === Kc; ) n = e[--r];
      if (n === Pc) return Qe;
    }
    if (o === da && i === da) {
      for (var a = 0; n === da; ) a++, n = e[--r];
      if (a % 2 === 0) return Qe;
    }
    return fa;
  }, $Q = function(A) {
    var e = _Q(A), t = e.length, r = 0, n = 0, o = e.map(NQ);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = Qe; r < t && (i = VQ(e, o, ++r)) === Qe; ) ;
        if (i !== Qe || r === t) {
          var a = PQ.apply(null, e.slice(n, r));
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
  }, WQ = function(A) {
    for (var e = $Q(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, jQ = function(A) {
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
  }, XQ = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = Si(r.data).map(function(s) {
      return GA(s);
    }), o = 0, i = {}, a = n.every(function(s, l) {
      t.setStart(r, o), t.setEnd(r, o + s.length);
      var c = t.getBoundingClientRect();
      o += s.length;
      var u = c.x > i.x || c.y > i.y;
      return i = c, l === 0 ? true : u;
    });
    return A.body.removeChild(e), a;
  }, zQ = function() {
    return typeof new Image().crossOrigin < "u";
  }, YQ = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, JQ = function(A) {
    var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
    if (!r) return false;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, Gc = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  }, ZQ = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = ss(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), Nc(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var s = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var l = A.createElement("div");
      return l.style.backgroundImage = "url(" + o + ")", l.style.height = t + "px", Gc(s) ? Nc(ss(t, t, 0, 0, l)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), Gc(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, ss = function(A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(n), i;
  }, Nc = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, qA = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = jQ(document);
      return Object.defineProperty(qA, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = qA.SUPPORT_RANGE_BOUNDS && XQ(document);
      return Object.defineProperty(qA, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = JQ(document);
      return Object.defineProperty(qA, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? ZQ(document) : Promise.resolve(false);
      return Object.defineProperty(qA, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = zQ();
      return Object.defineProperty(qA, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = YQ();
      return Object.defineProperty(qA, "SUPPORT_RESPONSE_TYPE", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(qA, "SUPPORT_CORS_XHR", {
        value: A
      }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return Object.defineProperty(qA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
        value: A
      }), A;
    }
  }, Xr = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })(), qQ = function(A, e, t, r) {
    var n = tF(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (qA.SUPPORT_RANGE_BOUNDS) {
        var s = Vc(r, i, a.length).getClientRects();
        if (s.length > 1) {
          var l = rl(a), c = 0;
          l.forEach(function(d) {
            o.push(new Xr(d, ct.fromDOMRectList(A, Vc(r, c + i, d.length).getClientRects()))), c += d.length;
          });
        } else o.push(new Xr(a, ct.fromDOMRectList(A, s)));
      } else {
        var u = r.splitText(a.length);
        o.push(new Xr(a, AF(A, r))), r = u;
      }
      else qA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, AF = function(A, e) {
    var t = e.ownerDocument;
    if (t) {
      var r = t.createElement("html2canvaswrapper");
      r.appendChild(e.cloneNode(true));
      var n = e.parentNode;
      if (n) {
        n.replaceChild(r, e);
        var o = Ei(A, r);
        return r.firstChild && n.replaceChild(r.firstChild, r), o;
      }
    }
    return ct.EMPTY;
  }, Vc = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  }, rl = function(A) {
    if (qA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function(t) {
        return t.segment;
      });
    }
    return WQ(A);
  }, eF = function(A, e) {
    if (qA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return nF(A, e);
  }, tF = function(A, e) {
    return e.letterSpacing !== 0 ? rl(A) : eF(A, e);
  }, rF = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], nF = function(A, e) {
    for (var t = HC(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = Si(i), s = "";
        a.forEach(function(l) {
          rF.indexOf(l) === -1 ? s += GA(l) : (s.length && r.push(s), r.push(GA(l)), s = "");
        }), s.length && r.push(s);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, oF = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = iF(t.data, r.textTransform), this.textBounds = qQ(e, this.text, r, t);
    }
    return A;
  })(), iF = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(aF, sF);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, aF = /(^|\s|:|-|\(|\))([a-z])/g, sF = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, uf = (function(A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(At), df = (function(A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(At), ff = (function(A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = Ei(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(At), gf = (function(A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(At), ls = (function(A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(At), lF = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], cF = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], uF = function(A) {
    return A.width > A.height ? new ct(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new ct(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, dF = function(A) {
    var e = A.type === fF ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, Ko = "checkbox", Ro = "radio", fF = "password", $c = 707406591, nl = (function(A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = dF(r), (n.type === Ko || n.type === Ro) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = uF(n.bounds)), n.type) {
        case Ko:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = lF;
          break;
        case Ro:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = cF;
          break;
      }
      return n;
    }
    return e;
  })(At), Bf = (function(A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(At), hf = (function(A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(At), pf = (function(A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = mf(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? Wr(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : at.TRANSPARENT, i = r.contentWindow.document.body ? Wr(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : at.TRANSPARENT;
          n.backgroundColor = bt(o) ? bt(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(At), gF = [
    "OL",
    "UL",
    "MENU"
  ], Bo = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, wf(n) && n.data.trim().length > 0) t.textNodes.push(new oF(A, n, t.styles));
    else if (lr(n)) if (Qf(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return Bo(A, a, t, r);
    });
    else {
      var i = vf(A, n);
      i.styles.isVisible() && (BF(n, i, r) ? i.flags |= 4 : hF(i.styles) && (i.flags |= 2), gF.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? Bo(A, n.shadowRoot, i, r) : !Do(n) && !Cf(n) && !Mo(n) && Bo(A, n, i, r));
    }
  }, vf = function(A, e) {
    return us(e) ? new uf(A, e) : yf(e) ? new df(A, e) : Cf(e) ? new ff(A, e) : pF(e) ? new gf(A, e) : vF(e) ? new ls(A, e) : mF(e) ? new nl(A, e) : Mo(e) ? new Bf(A, e) : Do(e) ? new hf(A, e) : bf(e) ? new pf(A, e) : new At(A, e);
  }, mf = function(A, e) {
    var t = vf(A, e);
    return t.flags |= 4, Bo(A, e, t, t), t;
  }, BF = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || ol(A) && t.styles.isTransparent();
  }, hF = function(A) {
    return A.isPositioned() || A.isFloating();
  }, wf = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, lr = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, cs = function(A) {
    return lr(A) && typeof A.style < "u" && !ho(A);
  }, ho = function(A) {
    return typeof A.className == "object";
  }, pF = function(A) {
    return A.tagName === "LI";
  }, vF = function(A) {
    return A.tagName === "OL";
  }, mF = function(A) {
    return A.tagName === "INPUT";
  }, wF = function(A) {
    return A.tagName === "HTML";
  }, Cf = function(A) {
    return A.tagName === "svg";
  }, ol = function(A) {
    return A.tagName === "BODY";
  }, yf = function(A) {
    return A.tagName === "CANVAS";
  }, Wc = function(A) {
    return A.tagName === "VIDEO";
  }, us = function(A) {
    return A.tagName === "IMG";
  }, bf = function(A) {
    return A.tagName === "IFRAME";
  }, jc = function(A) {
    return A.tagName === "STYLE";
  }, CF = function(A) {
    return A.tagName === "SCRIPT";
  }, Do = function(A) {
    return A.tagName === "TEXTAREA";
  }, Mo = function(A) {
    return A.tagName === "SELECT";
  }, Qf = function(A) {
    return A.tagName === "SLOT";
  }, Xc = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, yF = (function() {
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
  })(), zc = {
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
  }, Yc = {
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
  }, bF = {
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
  }, QF = {
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
  }, er = function(A, e, t, r, n, o) {
    return A < e || A > t ? on(A, n, o.length > 0) : r.integers.reduce(function(i, a, s) {
      for (; A >= a; ) A -= a, i += r.values[s];
      return i;
    }, "") + o;
  }, Ff = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, PA = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (Ff(Math.abs(A), o, r, function(i) {
      return GA(Math.floor(i % o) + e);
    }) + n);
  }, xt = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return Ff(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, ir = 1, ft = 2, gt = 4, Mr = 8, ot = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return on(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var s = 0; i > 0 && s <= 4; s++) {
      var l = i % 10;
      l === 0 && XA(o, ir) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && XA(o, ft) || l === 1 && s === 1 && XA(o, gt) && A > 100 || l === 1 && s > 1 && XA(o, Mr) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, Jc = "\u5341\u767E\u5343\u842C", Zc = "\u62FE\u4F70\u4EDF\u842C", qc = "\u30DE\u30A4\u30CA\u30B9", ga = "\uB9C8\uC774\uB108\uC2A4", on = function(A, e, t) {
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
        return xt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", n);
      case 6:
        return er(A, 1, 3999, zc, 3, r).toLowerCase();
      case 7:
        return er(A, 1, 3999, zc, 3, r);
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
        return er(A, 1, 9999, Yc, 3, r);
      case 35:
        return er(A, 1, 9999, Yc, 3, r).toLowerCase();
      case 13:
        return PA(A, 2534, 2543, true, r);
      case 14:
      case 30:
        return PA(A, 6112, 6121, true, r);
      case 15:
        return xt(A, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", n);
      case 16:
        return xt(A, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", n);
      case 17:
      case 48:
        return ot(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Jc, "\u8CA0", n, ft | gt | Mr);
      case 47:
        return ot(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", Zc, "\u8CA0", n, ir | ft | gt | Mr);
      case 42:
        return ot(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", Jc, "\u8D1F", n, ft | gt | Mr);
      case 41:
        return ot(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", Zc, "\u8D1F", n, ir | ft | gt | Mr);
      case 26:
        return ot(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", qc, n, 0);
      case 25:
        return ot(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", qc, n, ir | ft | gt);
      case 31:
        return ot(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", ga, o, ir | ft | gt);
      case 33:
        return ot(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", ga, o, 0);
      case 32:
        return ot(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", ga, o, ir | ft | gt);
      case 18:
        return PA(A, 2406, 2415, true, r);
      case 20:
        return er(A, 1, 19999, QF, 3, r);
      case 21:
        return PA(A, 2790, 2799, true, r);
      case 22:
        return PA(A, 2662, 2671, true, r);
      case 22:
        return er(A, 1, 10999, bF, 3, r);
      case 23:
        return xt(A, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return xt(A, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return PA(A, 3302, 3311, true, r);
      case 28:
        return xt(A, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", n);
      case 29:
        return xt(A, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", n);
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
  }, Uf = "data-html2canvas-ignore", Au = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new yF(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = FF(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = SF(n).then(function() {
        return ce(r, void 0, void 0, function() {
          var c, u;
          return oe(this, function(d) {
            switch (d.label) {
              case 0:
                return this.scrolledElements.forEach(TF), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [
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
                  EF(s)
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
      return s.open(), s.write(IF(document.doctype) + "<html></html>"), HF(this.referenceElement.ownerDocument, o, i), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (as(e, 2)) debugger;
      if (yf(e)) return this.createCanvasClone(e);
      if (Wc(e)) return this.createVideoClone(e);
      if (jc(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return us(t) && (us(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Xc(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Ba(e.style, t), t;
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
      (!lr(t) || !CF(t) && !t.hasAttribute(Uf) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !lr(t) || !jc(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (lr(o) && Qf(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (wf(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && lr(e) && (cs(e) || ho(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && cs(n) && (this.clonedReferenceElement = n), ol(n) && OF(n);
        var s = this.counters.parse(new Hc(this.context, o)), l = this.resolvePseudoContent(e, n, i, zr.BEFORE);
        Xc(e) && (t = true), Wc(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, zr.AFTER);
        return c && n.appendChild(c), this.counters.pop(s), (o && (this.options.copyStyles || ho(e)) && !bf(e) || t) && Ba(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (Do(e) || Mo(e)) && (Do(n) || Mo(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Hc(this.context, r));
          var s = new pQ(this.context, r), l = a.createElement("html2canvaspseudoelement");
          Ba(r, l), s.content.forEach(function(u) {
            if (u.type === 0) l.appendChild(a.createTextNode(u.value));
            else if (u.type === 22) {
              var d = a.createElement("img");
              d.src = u.value, d.style.opacity = "1", l.appendChild(d);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var f = u.values.filter(UA);
                f.length && l.appendChild(a.createTextNode(e.getAttribute(f[0].value) || ""));
              } else if (u.name === "counter") {
                var g = u.values.filter(mr), h = g[0], F = g[1];
                if (h && UA(h)) {
                  var w = o.counters.getCounterValue(h.value), C = F && UA(F) ? is.parse(o.context, F.value) : 3;
                  l.appendChild(a.createTextNode(on(w, C, false)));
                }
              } else if (u.name === "counters") {
                var b = u.values.filter(mr), h = b[0], Q = b[1], F = b[2];
                if (h && UA(h)) {
                  var S = o.counters.getCounterValues(h.value), v = F && UA(F) ? is.parse(o.context, F.value) : 3, U = Q && Q.type === 0 ? Q.value : "", T = S.map(function(H) {
                    return on(H, v, false);
                  }).join(U);
                  l.appendChild(a.createTextNode(T));
                }
              }
            } else if (u.type === 20) switch (u.value) {
              case "open-quote":
                l.appendChild(a.createTextNode(Ic(s.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                l.appendChild(a.createTextNode(Ic(s.quotes, --o.quoteDepth, false)));
                break;
              default:
                l.appendChild(a.createTextNode(u.value));
            }
          }), l.className = ds + " " + fs;
          var c = n === zr.BEFORE ? " " + ds : " " + fs;
          return ho(t) ? t.className.baseValue += c : t.className += c, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), zr;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })(zr || (zr = {}));
  var FF = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(Uf, "true"), A.body.appendChild(t), t;
  }, UF = function(A) {
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
  }, EF = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(UF));
  }, SF = function(A) {
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
  }, xF = [
    "all",
    "d",
    "content"
  ], Ba = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      xF.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, IF = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, HF = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, TF = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, LF = ":before", kF = ":after", ds = "___html2canvas___pseudoelement_before", fs = "___html2canvas___pseudoelement_after", eu = `{
    content: "" !important;
    display: none !important;
}`, OF = function(A) {
    KF(A, "." + ds + LF + eu + `
         .` + fs + kF + eu);
  }, KF = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, Ef = (function() {
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
  })(), RF = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (pa(e) || PF(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return ce(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return oe(this, function(a) {
          switch (a.label) {
            case 0:
              return t = Ef.isSameOrigin(e), r = !ha(e) && this._options.useCORS === true && qA.SUPPORT_CORS_IMAGES && !t, n = !ha(e) && !t && !pa(e) && typeof this._options.proxy == "string" && qA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !ha(e) && !pa(e) && !n && !r ? [
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
                  }, c.onerror = l, (GF(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
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
        var a = qA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest();
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
  })(), DF = /^data:image\/svg\+xml/i, MF = /^data:image\/.*;base64,/i, _F = /^data:image\/.*/i, PF = function(A) {
    return qA.SUPPORT_SVG_DRAWING || !NF(A);
  }, ha = function(A) {
    return _F.test(A);
  }, GF = function(A) {
    return MF.test(A);
  }, pa = function(A) {
    return A.substr(0, 4) === "blob";
  }, NF = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || DF.test(A);
  }, tA = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), tr = function(A, e, t) {
    return new tA(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, Ao = (function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = tr(this.start, this.startControl, e), n = tr(this.startControl, this.endControl, e), o = tr(this.endControl, this.end, e), i = tr(r, n, e), a = tr(n, o, e), s = tr(i, a, e);
      return t ? new A(this.start, r, i, s) : new A(s, a, o, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  })(), Ee = function(A) {
    return A.type === 1;
  }, VF = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = Rr(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = Rr(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], c = Rr(t.borderBottomRightRadius, r.width, r.height), u = c[0], d = c[1], f = Rr(t.borderBottomLeftRadius, r.width, r.height), g = f[0], h = f[1], F = [];
      F.push((o + s) / r.width), F.push((g + u) / r.width), F.push((i + h) / r.height), F.push((l + d) / r.height);
      var w = Math.max.apply(Math, F);
      w > 1 && (o /= w, i /= w, s /= w, l /= w, u /= w, d /= w, g /= w, h /= w);
      var C = r.width - s, b = r.height - d, Q = r.width - u, S = r.height - h, v = t.borderTopWidth, U = t.borderRightWidth, T = t.borderBottomWidth, I = t.borderLeftWidth, B = TA(t.paddingTop, e.bounds.width), H = TA(t.paddingRight, e.bounds.width), R = TA(t.paddingBottom, e.bounds.width), O = TA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? KA(r.left + I / 3, r.top + v / 3, o - I / 3, i - v / 3, QA.TOP_LEFT) : new tA(r.left + I / 3, r.top + v / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? KA(r.left + C, r.top + v / 3, s - U / 3, l - v / 3, QA.TOP_RIGHT) : new tA(r.left + r.width - U / 3, r.top + v / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || d > 0 ? KA(r.left + Q, r.top + b, u - U / 3, d - T / 3, QA.BOTTOM_RIGHT) : new tA(r.left + r.width - U / 3, r.top + r.height - T / 3), this.bottomLeftBorderDoubleOuterBox = g > 0 || h > 0 ? KA(r.left + I / 3, r.top + S, g - I / 3, h - T / 3, QA.BOTTOM_LEFT) : new tA(r.left + I / 3, r.top + r.height - T / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? KA(r.left + I * 2 / 3, r.top + v * 2 / 3, o - I * 2 / 3, i - v * 2 / 3, QA.TOP_LEFT) : new tA(r.left + I * 2 / 3, r.top + v * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? KA(r.left + C, r.top + v * 2 / 3, s - U * 2 / 3, l - v * 2 / 3, QA.TOP_RIGHT) : new tA(r.left + r.width - U * 2 / 3, r.top + v * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || d > 0 ? KA(r.left + Q, r.top + b, u - U * 2 / 3, d - T * 2 / 3, QA.BOTTOM_RIGHT) : new tA(r.left + r.width - U * 2 / 3, r.top + r.height - T * 2 / 3), this.bottomLeftBorderDoubleInnerBox = g > 0 || h > 0 ? KA(r.left + I * 2 / 3, r.top + S, g - I * 2 / 3, h - T * 2 / 3, QA.BOTTOM_LEFT) : new tA(r.left + I * 2 / 3, r.top + r.height - T * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? KA(r.left + I / 2, r.top + v / 2, o - I / 2, i - v / 2, QA.TOP_LEFT) : new tA(r.left + I / 2, r.top + v / 2), this.topRightBorderStroke = o > 0 || i > 0 ? KA(r.left + C, r.top + v / 2, s - U / 2, l - v / 2, QA.TOP_RIGHT) : new tA(r.left + r.width - U / 2, r.top + v / 2), this.bottomRightBorderStroke = u > 0 || d > 0 ? KA(r.left + Q, r.top + b, u - U / 2, d - T / 2, QA.BOTTOM_RIGHT) : new tA(r.left + r.width - U / 2, r.top + r.height - T / 2), this.bottomLeftBorderStroke = g > 0 || h > 0 ? KA(r.left + I / 2, r.top + S, g - I / 2, h - T / 2, QA.BOTTOM_LEFT) : new tA(r.left + I / 2, r.top + r.height - T / 2), this.topLeftBorderBox = o > 0 || i > 0 ? KA(r.left, r.top, o, i, QA.TOP_LEFT) : new tA(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? KA(r.left + C, r.top, s, l, QA.TOP_RIGHT) : new tA(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || d > 0 ? KA(r.left + Q, r.top + b, u, d, QA.BOTTOM_RIGHT) : new tA(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = g > 0 || h > 0 ? KA(r.left, r.top + S, g, h, QA.BOTTOM_LEFT) : new tA(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? KA(r.left + I, r.top + v, Math.max(0, o - I), Math.max(0, i - v), QA.TOP_LEFT) : new tA(r.left + I, r.top + v), this.topRightPaddingBox = s > 0 || l > 0 ? KA(r.left + Math.min(C, r.width - U), r.top + v, C > r.width + U ? 0 : Math.max(0, s - U), Math.max(0, l - v), QA.TOP_RIGHT) : new tA(r.left + r.width - U, r.top + v), this.bottomRightPaddingBox = u > 0 || d > 0 ? KA(r.left + Math.min(Q, r.width - I), r.top + Math.min(b, r.height - T), Math.max(0, u - U), Math.max(0, d - T), QA.BOTTOM_RIGHT) : new tA(r.left + r.width - U, r.top + r.height - T), this.bottomLeftPaddingBox = g > 0 || h > 0 ? KA(r.left + I, r.top + Math.min(S, r.height - T), Math.max(0, g - I), Math.max(0, h - T), QA.BOTTOM_LEFT) : new tA(r.left + I, r.top + r.height - T), this.topLeftContentBox = o > 0 || i > 0 ? KA(r.left + I + O, r.top + v + B, Math.max(0, o - (I + O)), Math.max(0, i - (v + B)), QA.TOP_LEFT) : new tA(r.left + I + O, r.top + v + B), this.topRightContentBox = s > 0 || l > 0 ? KA(r.left + Math.min(C, r.width + I + O), r.top + v + B, C > r.width + I + O ? 0 : s - I + O, l - (v + B), QA.TOP_RIGHT) : new tA(r.left + r.width - (U + H), r.top + v + B), this.bottomRightContentBox = u > 0 || d > 0 ? KA(r.left + Math.min(Q, r.width - (I + O)), r.top + Math.min(b, r.height + v + B), Math.max(0, u - (U + H)), d - (T + R), QA.BOTTOM_RIGHT) : new tA(r.left + r.width - (U + H), r.top + r.height - (T + R)), this.bottomLeftContentBox = g > 0 || h > 0 ? KA(r.left + I + O, r.top + S, Math.max(0, g - (I + O)), h - (T + R), QA.BOTTOM_LEFT) : new tA(r.left + I + O, r.top + r.height - (T + R));
    }
    return A;
  })(), QA;
  (function(A) {
    A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  })(QA || (QA = {}));
  var KA = function(A, e, t, r, n) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3), i = t * o, a = r * o, s = A + t, l = e + r;
    switch (n) {
      case QA.TOP_LEFT:
        return new Ao(new tA(A, l), new tA(A, l - a), new tA(s - i, e), new tA(s, e));
      case QA.TOP_RIGHT:
        return new Ao(new tA(A, e), new tA(A + i, e), new tA(s, l - a), new tA(s, l));
      case QA.BOTTOM_RIGHT:
        return new Ao(new tA(s, e), new tA(s, e + a), new tA(A + i, l), new tA(A, l));
      case QA.BOTTOM_LEFT:
      default:
        return new Ao(new tA(s, l), new tA(s - i, l), new tA(A, e + a), new tA(A, e));
    }
  }, _o = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, $F = function(A) {
    return [
      A.topLeftContentBox,
      A.topRightContentBox,
      A.bottomRightContentBox,
      A.bottomLeftContentBox
    ];
  }, Po = function(A) {
    return [
      A.topLeftPaddingBox,
      A.topRightPaddingBox,
      A.bottomRightPaddingBox,
      A.bottomLeftPaddingBox
    ];
  }, WF = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), eo = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), jF = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), XF = function(A) {
    return A.type === 0;
  }, Sf = function(A) {
    return A.type === 1;
  }, zF = function(A) {
    return A.type === 2;
  }, tu = function(A, e) {
    return A.length === e.length ? A.some(function(t, r) {
      return t === e[r];
    }) : false;
  }, YF = function(A, e, t, r, n) {
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
  }, xf = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), If = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new VF(this.container), this.container.styles.opacity < 1 && this.effects.push(new jF(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new WF(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = _o(this.curves), a = Po(this.curves);
        tu(i, a) ? this.effects.push(new eo(i, 6)) : (this.effects.push(new eo(i, 2)), this.effects.push(new eo(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(s) {
          return !Sf(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = _o(r.curves), a = Po(r.curves);
            tu(i, a) || n.unshift(new eo(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(s) {
        return XA(s.target, e);
      });
    }, A;
  })(), gs = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = XA(n.flags, 4), i = XA(n.flags, 2), a = new If(n, A);
      XA(n.styles.display, 2048) && r.push(a);
      var s = XA(n.flags, 8) ? [] : r;
      if (o || i) {
        var l = o || n.styles.isPositioned() ? t : e, c = new xf(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var u = n.styles.zIndex.order;
          if (u < 0) {
            var d = 0;
            l.negativeZIndex.some(function(g, h) {
              return u > g.element.container.styles.zIndex.order ? (d = h, false) : d > 0;
            }), l.negativeZIndex.splice(d, 0, c);
          } else if (u > 0) {
            var f = 0;
            l.positiveZIndex.some(function(g, h) {
              return u >= g.element.container.styles.zIndex.order ? (f = h + 1, false) : f > 0;
            }), l.positiveZIndex.splice(f, 0, c);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
        gs(a, c, o ? c : t, s);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), gs(a, e, t, s);
      XA(n.flags, 8) && Hf(n, s);
    });
  }, Hf = function(A, e) {
    for (var t = A instanceof ls ? A.start : 1, r = A instanceof ls ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof gf && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = on(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, JF = function(A) {
    var e = new If(A, null), t = new xf(e), r = [];
    return gs(e, t, t, r), Hf(e.container, r), t;
  }, ru = function(A, e) {
    switch (e) {
      case 0:
        return Ie(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
      case 1:
        return Ie(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
      case 2:
        return Ie(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
      default:
        return Ie(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
    }
  }, ZF = function(A, e) {
    switch (e) {
      case 0:
        return Ie(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
      case 1:
        return Ie(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
      case 2:
        return Ie(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
      default:
        return Ie(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
    }
  }, qF = function(A, e) {
    switch (e) {
      case 0:
        return Ie(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
      case 1:
        return Ie(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
      case 2:
        return Ie(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
      default:
        return Ie(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
    }
  }, AU = function(A, e) {
    switch (e) {
      case 0:
        return to(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return to(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return to(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      default:
        return to(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  }, to = function(A, e) {
    var t = [];
    return Ee(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), Ee(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Ie = function(A, e, t, r) {
    var n = [];
    return Ee(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), Ee(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), Ee(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), Ee(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, Tf = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, Go = function(A) {
    var e = A.styles, t = A.bounds, r = TA(e.paddingLeft, t.width), n = TA(e.paddingRight, t.width), o = TA(e.paddingTop, t.width), i = TA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, eU = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Go(e) : Tf(e);
  }, tU = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? Go(e) : Tf(e);
  }, va = function(A, e, t) {
    var r = eU(ar(A.styles.backgroundOrigin, e), A), n = tU(ar(A.styles.backgroundClip, e), A), o = rU(ar(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], s = Rr(ar(A.styles.backgroundPosition, e), r.width - i, r.height - a), l = nU(ar(A.styles.backgroundRepeat, e), s, o, r, n), c = Math.round(r.left + s[0]), u = Math.round(r.top + s[1]);
    return [
      l,
      c,
      u,
      i,
      a
    ];
  }, rr = function(A) {
    return UA(A) && A.value === fr.AUTO;
  }, ro = function(A) {
    return typeof A == "number";
  }, rU = function(A, e, t) {
    var r = e[0], n = e[1], o = e[2], i = A[0], a = A[1];
    if (!i) return [
      0,
      0
    ];
    if (WA(i) && a && WA(a)) return [
      TA(i, t.width),
      TA(a, t.height)
    ];
    var s = ro(o);
    if (UA(i) && (i.value === fr.CONTAIN || i.value === fr.COVER)) {
      if (ro(o)) {
        var l = t.width / t.height;
        return l < o != (i.value === fr.COVER) ? [
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
    var c = ro(r), u = ro(n), d = c || u;
    if (rr(i) && (!a || rr(a))) {
      if (c && u) return [
        r,
        n
      ];
      if (!s && !d) return [
        t.width,
        t.height
      ];
      if (d && s) {
        var f = c ? r : n * o, g = u ? n : r / o;
        return [
          f,
          g
        ];
      }
      var h = c ? r : t.width, F = u ? n : t.height;
      return [
        h,
        F
      ];
    }
    if (s) {
      var w = 0, C = 0;
      return WA(i) ? w = TA(i, t.width) : WA(a) && (C = TA(a, t.height)), rr(i) ? w = C * o : (!a || rr(a)) && (C = w / o), [
        w,
        C
      ];
    }
    var b = null, Q = null;
    if (WA(i) ? b = TA(i, t.width) : a && WA(a) && (Q = TA(a, t.height)), b !== null && (!a || rr(a)) && (Q = c && u ? b / r * n : t.height), Q !== null && rr(i) && (b = c && u ? Q / n * r : t.width), b !== null && Q !== null) return [
      b,
      Q
    ];
    throw new Error("Unable to calculate background-size for element");
  }, ar = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, nU = function(A, e, t, r, n) {
    var o = e[0], i = e[1], a = t[0], s = t[1];
    switch (A) {
      case 2:
        return [
          new tA(Math.round(r.left), Math.round(r.top + i)),
          new tA(Math.round(r.left + r.width), Math.round(r.top + i)),
          new tA(Math.round(r.left + r.width), Math.round(s + r.top + i)),
          new tA(Math.round(r.left), Math.round(s + r.top + i))
        ];
      case 3:
        return [
          new tA(Math.round(r.left + o), Math.round(r.top)),
          new tA(Math.round(r.left + o + a), Math.round(r.top)),
          new tA(Math.round(r.left + o + a), Math.round(r.height + r.top)),
          new tA(Math.round(r.left + o), Math.round(r.height + r.top))
        ];
      case 1:
        return [
          new tA(Math.round(r.left + o), Math.round(r.top + i)),
          new tA(Math.round(r.left + o + a), Math.round(r.top + i)),
          new tA(Math.round(r.left + o + a), Math.round(r.top + i + s)),
          new tA(Math.round(r.left + o), Math.round(r.top + i + s))
        ];
      default:
        return [
          new tA(Math.round(n.left), Math.round(n.top)),
          new tA(Math.round(n.left + n.width), Math.round(n.top)),
          new tA(Math.round(n.left + n.width), Math.round(n.height + n.top)),
          new tA(Math.round(n.left), Math.round(n.height + n.top))
        ];
    }
  }, oU = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", nu = "Hidden Text", iU = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = oU, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(nu)), r.appendChild(o), r.appendChild(n);
      var a = n.offsetTop - o.offsetTop + 2;
      r.removeChild(o), r.appendChild(this._document.createTextNode(nu)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), {
        baseline: a,
        middle: s
      };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  })(), Lf = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), aU = 1e4, sU = (function(A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new iU(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), zF(t) && (this.ctx.globalAlpha = t.opacity), XF(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Sf(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return ce(this, void 0, void 0, function() {
        var r;
        return oe(this, function(n) {
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
      return ce(this, void 0, void 0, function() {
        return oe(this, function(r) {
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
        var i = rl(t.text);
        i.reduce(function(a, s) {
          return o.ctx.fillText(s, a, t.bounds.top + n), a + o.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = fU(t.fontFamily).join(", "), o = vn(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
      return ce(this, void 0, void 0, function() {
        var n, o, i, a, s, l, c, u, d = this;
        return oe(this, function(f) {
          return n = this.createFontStyle(r), o = n[0], i = n[1], a = n[2], this.ctx.font = o, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, a), l = s.baseline, c = s.middle, u = r.paintOrder, t.textBounds.forEach(function(g) {
            u.forEach(function(h) {
              switch (h) {
                case 0:
                  d.ctx.fillStyle = zA(r.color), d.renderTextWithLetterSpacing(g, r.letterSpacing, l);
                  var F = r.textShadow;
                  F.length && g.text.trim().length && (F.slice(0).reverse().forEach(function(w) {
                    d.ctx.shadowColor = zA(w.color), d.ctx.shadowOffsetX = w.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = w.offsetY.number * d.options.scale, d.ctx.shadowBlur = w.blur.number, d.renderTextWithLetterSpacing(g, r.letterSpacing, l);
                  }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = zA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(w) {
                    switch (w) {
                      case 1:
                        d.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top + l), g.bounds.width, 1);
                        break;
                      case 2:
                        d.ctx.fillRect(g.bounds.left, Math.round(g.bounds.top), g.bounds.width, 1);
                        break;
                      case 3:
                        d.ctx.fillRect(g.bounds.left, Math.ceil(g.bounds.top + c), g.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && g.text.trim().length && (d.ctx.strokeStyle = zA(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(g.text, g.bounds.left, g.bounds.top + l)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
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
        var o = Go(t), i = Po(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return ce(this, void 0, void 0, function() {
        var r, n, o, i, a, s, C, C, l, c, u, d, Q, f, g, S, h, F, w, C, b, Q, S;
        return oe(this, function(v) {
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
              if (!(r instanceof uf)) return [
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
              return C = v.sent(), this.renderReplacedElement(r, n, C), [
                3,
                8
              ];
            case 7:
              return v.sent(), this.context.logger.error("Error loading image " + r.src), [
                3,
                8
              ];
            case 8:
              if (r instanceof df && this.renderReplacedElement(r, n, r.canvas), !(r instanceof ff)) return [
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
              return C = v.sent(), this.renderReplacedElement(r, n, C), [
                3,
                12
              ];
            case 11:
              return v.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [
                3,
                12
              ];
            case 12:
              return r instanceof pf && r.tree ? (l = new e(this.context, {
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
              if (r instanceof nl && (u = Math.min(r.bounds.width, r.bounds.height), r.type === Ko ? r.checked && (this.ctx.save(), this.path([
                new tA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new tA(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new tA(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new tA(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new tA(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new tA(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new tA(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = zA($c), this.ctx.fill(), this.ctx.restore()) : r.type === Ro && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = zA($c), this.ctx.fill(), this.ctx.restore())), lU(r) && r.value.length) {
                switch (d = this.createFontStyle(o), Q = d[0], f = d[1], g = this.fontMetrics.getMetrics(Q, f).baseline, this.ctx.font = Q, this.ctx.fillStyle = zA(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = uU(r.styles.textAlign), S = Go(r), h = 0, r.styles.textAlign) {
                  case 1:
                    h += S.width / 2;
                    break;
                  case 2:
                    h += S.width;
                    break;
                }
                F = S.add(h, 0, 0, -S.height / 2 + 1), this.ctx.save(), this.path([
                  new tA(S.left, S.top),
                  new tA(S.left + S.width, S.top),
                  new tA(S.left + S.width, S.top + S.height),
                  new tA(S.left, S.top + S.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Xr(r.value, F), o.letterSpacing, g), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!XA(r.styles.display, 2048)) return [
                3,
                20
              ];
              if (r.styles.listStyleImage === null) return [
                3,
                19
              ];
              if (w = r.styles.listStyleImage, w.type !== 0) return [
                3,
                18
              ];
              C = void 0, b = w.url, v.label = 15;
            case 15:
              return v.trys.push([
                15,
                17,
                ,
                18
              ]), [
                4,
                this.context.cache.match(b)
              ];
            case 16:
              return C = v.sent(), this.ctx.drawImage(C, r.bounds.left - (C.width + 10), r.bounds.top), [
                3,
                18
              ];
            case 17:
              return v.sent(), this.context.logger.error("Error loading list-style-image " + b), [
                3,
                18
              ];
            case 18:
              return [
                3,
                20
              ];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (Q = this.createFontStyle(o)[0], this.ctx.font = Q, this.ctx.fillStyle = zA(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", S = new ct(r.bounds.left, r.bounds.top + TA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Sc(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new Xr(t.listValue, S), o.letterSpacing, Sc(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), v.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return ce(this, void 0, void 0, function() {
        var r, n, w, o, i, w, a, s, w, l, c, w, u, d, w, f, g, w, h, F, w;
        return oe(this, function(C) {
          switch (C.label) {
            case 0:
              if (XA(t.element.container.flags, 16)) debugger;
              return [
                4,
                this.renderNodeBackgroundAndBorders(t.element)
              ];
            case 1:
              C.sent(), r = 0, n = t.negativeZIndex, C.label = 2;
            case 2:
              return r < n.length ? (w = n[r], [
                4,
                this.renderStack(w)
              ]) : [
                3,
                5
              ];
            case 3:
              C.sent(), C.label = 4;
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
              C.sent(), o = 0, i = t.nonInlineLevel, C.label = 7;
            case 7:
              return o < i.length ? (w = i[o], [
                4,
                this.renderNode(w)
              ]) : [
                3,
                10
              ];
            case 8:
              C.sent(), C.label = 9;
            case 9:
              return o++, [
                3,
                7
              ];
            case 10:
              a = 0, s = t.nonPositionedFloats, C.label = 11;
            case 11:
              return a < s.length ? (w = s[a], [
                4,
                this.renderStack(w)
              ]) : [
                3,
                14
              ];
            case 12:
              C.sent(), C.label = 13;
            case 13:
              return a++, [
                3,
                11
              ];
            case 14:
              l = 0, c = t.nonPositionedInlineLevel, C.label = 15;
            case 15:
              return l < c.length ? (w = c[l], [
                4,
                this.renderStack(w)
              ]) : [
                3,
                18
              ];
            case 16:
              C.sent(), C.label = 17;
            case 17:
              return l++, [
                3,
                15
              ];
            case 18:
              u = 0, d = t.inlineLevel, C.label = 19;
            case 19:
              return u < d.length ? (w = d[u], [
                4,
                this.renderNode(w)
              ]) : [
                3,
                22
              ];
            case 20:
              C.sent(), C.label = 21;
            case 21:
              return u++, [
                3,
                19
              ];
            case 22:
              f = 0, g = t.zeroOrAutoZIndexOrTransformedOrOpacity, C.label = 23;
            case 23:
              return f < g.length ? (w = g[f], [
                4,
                this.renderStack(w)
              ]) : [
                3,
                26
              ];
            case 24:
              C.sent(), C.label = 25;
            case 25:
              return f++, [
                3,
                23
              ];
            case 26:
              h = 0, F = t.positiveZIndex, C.label = 27;
            case 27:
              return h < F.length ? (w = F[h], [
                4,
                this.renderStack(w)
              ]) : [
                3,
                30
              ];
            case 28:
              C.sent(), C.label = 29;
            case 29:
              return h++, [
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
        var i = Ee(n) ? n.start : n;
        o === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), Ee(n) && r.ctx.bezierCurveTo(n.startControl.x, n.startControl.y, n.endControl.x, n.endControl.y, n.end.x, n.end.y);
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
      return ce(this, void 0, void 0, function() {
        var r, n, o, i, a, s;
        return oe(this, function(l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var u, d, f, B, k, Y, O, _, T, g, B, k, Y, O, _, h, F, w, C, b, Q, S, v, U, T, I, B, H, R, O, _, M, k, Y, z, W, V, J, oA, K, AA, Z;
                return oe(this, function(rA) {
                  switch (rA.label) {
                    case 0:
                      if (c.type !== 0) return [
                        3,
                        5
                      ];
                      u = void 0, d = c.url, rA.label = 1;
                    case 1:
                      return rA.trys.push([
                        1,
                        3,
                        ,
                        4
                      ]), [
                        4,
                        o.context.cache.match(d)
                      ];
                    case 2:
                      return u = rA.sent(), [
                        3,
                        4
                      ];
                    case 3:
                      return rA.sent(), o.context.logger.error("Error loading background-image " + d), [
                        3,
                        4
                      ];
                    case 4:
                      return u && (f = va(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), B = f[0], k = f[1], Y = f[2], O = f[3], _ = f[4], T = o.ctx.createPattern(o.resizeImage(u, O, _), "repeat"), o.renderRepeat(B, T, k, Y)), [
                        3,
                        6
                      ];
                    case 5:
                      Xy(c) ? (g = va(t, r, [
                        null,
                        null,
                        null
                      ]), B = g[0], k = g[1], Y = g[2], O = g[3], _ = g[4], h = Ny(c.angle, O, _), F = h[0], w = h[1], C = h[2], b = h[3], Q = h[4], S = document.createElement("canvas"), S.width = O, S.height = _, v = S.getContext("2d"), U = v.createLinearGradient(w, b, C, Q), Uc(c.stops, F).forEach(function(pA) {
                        return U.addColorStop(pA.stop, zA(pA.color));
                      }), v.fillStyle = U, v.fillRect(0, 0, O, _), O > 0 && _ > 0 && (T = o.ctx.createPattern(S, "repeat"), o.renderRepeat(B, T, k, Y))) : zy(c) && (I = va(t, r, [
                        null,
                        null,
                        null
                      ]), B = I[0], H = I[1], R = I[2], O = I[3], _ = I[4], M = c.position.length === 0 ? [
                        Al
                      ] : c.position, k = TA(M[0], O), Y = TA(M[M.length - 1], _), z = Vy(c, k, Y, O, _), W = z[0], V = z[1], W > 0 && V > 0 && (J = o.ctx.createRadialGradient(H + k, R + Y, 0, H + k, R + Y, W), Uc(c.stops, W * 2).forEach(function(pA) {
                        return J.addColorStop(pA.stop, zA(pA.color));
                      }), o.path(B), o.ctx.fillStyle = J, W !== V ? (oA = t.bounds.left + 0.5 * t.bounds.width, K = t.bounds.top + 0.5 * t.bounds.height, AA = V / W, Z = 1 / AA, o.ctx.save(), o.ctx.translate(oA, K), o.ctx.transform(1, 0, 0, AA, 0, 0), o.ctx.translate(-oA, -K), o.ctx.fillRect(H, Z * (R - K) + K, O, _ * Z), o.ctx.restore()) : o.ctx.fill())), rA.label = 6;
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
      return ce(this, void 0, void 0, function() {
        return oe(this, function(o) {
          return this.path(ru(n, r)), this.ctx.fillStyle = zA(t), this.ctx.fill(), [
            2
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, o) {
      return ce(this, void 0, void 0, function() {
        var i, a;
        return oe(this, function(s) {
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
              return i = ZF(o, n), this.path(i), this.ctx.fillStyle = zA(t), this.ctx.fill(), a = qF(o, n), this.path(a), this.ctx.fill(), [
                2
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return ce(this, void 0, void 0, function() {
        var r, n, o, i, a, s, l, c, u = this;
        return oe(this, function(d) {
          switch (d.label) {
            case 0:
              return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !bt(r.backgroundColor) || r.backgroundImage.length, o = [
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
              ], i = cU(ar(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), bt(r.backgroundColor) || (this.ctx.fillStyle = zA(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(f) {
                u.ctx.save();
                var g = _o(t.curves), h = f.inset ? 0 : aU, F = YF(g, -h + (f.inset ? 1 : -1) * f.spread.number, (f.inset ? 1 : -1) * f.spread.number, f.spread.number * (f.inset ? -2 : 2), f.spread.number * (f.inset ? -2 : 2));
                f.inset ? (u.path(g), u.ctx.clip(), u.mask(F)) : (u.mask(g), u.ctx.clip(), u.path(F)), u.ctx.shadowOffsetX = f.offsetX.number + h, u.ctx.shadowOffsetY = f.offsetY.number, u.ctx.shadowColor = zA(f.color), u.ctx.shadowBlur = f.blur.number, u.ctx.fillStyle = f.inset ? zA(f.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), d.label = 2;
            case 2:
              a = 0, s = 0, l = o, d.label = 3;
            case 3:
              return s < l.length ? (c = l[s], c.style !== 0 && !bt(c.color) && c.width > 0 ? c.style !== 2 ? [
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
      return ce(this, void 0, void 0, function() {
        var a, s, l, c, u, d, f, g, h, F, w, C, b, Q, S, v, S, v;
        return oe(this, function(U) {
          return this.ctx.save(), a = AU(o, n), s = ru(o, n), i === 2 && (this.path(s), this.ctx.clip()), Ee(s[0]) ? (l = s[0].start.x, c = s[0].start.y) : (l = s[0].x, c = s[0].y), Ee(s[1]) ? (u = s[1].end.x, d = s[1].end.y) : (u = s[1].x, d = s[1].y), n === 0 || n === 2 ? f = Math.abs(l - u) : f = Math.abs(c - d), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), g = r < 3 ? r * 3 : r * 2, h = r < 3 ? r * 2 : r, i === 3 && (g = r, h = r), F = true, f <= g * 2 ? F = false : f <= g * 2 + h ? (w = f / (2 * g + h), g *= w, h *= w) : (C = Math.floor((f + h) / (g + h)), b = (f - C * g) / (C - 1), Q = (f - (C + 1) * g) / C, h = Q <= 0 || Math.abs(h - b) < Math.abs(h - Q) ? b : Q), F && (i === 3 ? this.ctx.setLineDash([
            0,
            g + h
          ]) : this.ctx.setLineDash([
            g,
            h
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = zA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (Ee(s[0]) && (S = s[3], v = s[0], this.ctx.beginPath(), this.formatPath([
            new tA(S.end.x, S.end.y),
            new tA(v.start.x, v.start.y)
          ]), this.ctx.stroke()), Ee(s[1]) && (S = s[1], v = s[2], this.ctx.beginPath(), this.formatPath([
            new tA(S.end.x, S.end.y),
            new tA(v.start.x, v.start.y)
          ]), this.ctx.stroke())), this.ctx.restore(), [
            2
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return ce(this, void 0, void 0, function() {
        var r;
        return oe(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = zA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = JF(t), [
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
  })(Lf), lU = function(A) {
    return A instanceof hf || A instanceof Bf ? true : A instanceof nl && A.type !== Ro && A.type !== Ko;
  }, cU = function(A, e) {
    switch (A) {
      case 0:
        return _o(e);
      case 2:
        return $F(e);
      default:
        return Po(e);
    }
  }, uU = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, dU = [
    "-apple-system",
    "system-ui"
  ], fU = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return dU.indexOf(e) === -1;
    }) : A;
  }, gU = (function(A) {
    Re(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return ce(this, void 0, void 0, function() {
        var r, n;
        return oe(this, function(o) {
          switch (o.label) {
            case 0:
              return r = ss(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [
                4,
                BU(r)
              ];
            case 1:
              return n = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = zA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, e;
  })(Lf), BU = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, hU = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, On([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, On([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, On([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, On([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), pU = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new hU({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new RF(this, e);
    }
    return A.instanceCount = 1, A;
  })(), vU = function(A, e) {
    return e === void 0 && (e = {}), mU(A, e);
  };
  typeof window < "u" && Ef.setContext(window);
  var mU = function(A, e) {
    return ce(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, s, l, c, u, d, f, g, h, F, w, C, b, Q, S, U, v, U, T, I, B, H, R, O, _, M, k, Y, z, W, V, J, oA, K, AA;
      return oe(this, function(Z) {
        switch (Z.label) {
          case 0:
            if (!A || typeof A != "object") return [
              2,
              Promise.reject("Invalid element provided as first argument")
            ];
            if (t = A.ownerDocument, !t) throw new Error("Element is not attached to a Document");
            if (r = t.defaultView, !r) throw new Error("Document is not attached to a Window");
            return n = {
              allowTaint: (T = e.allowTaint) !== null && T !== void 0 ? T : false,
              imageTimeout: (I = e.imageTimeout) !== null && I !== void 0 ? I : 15e3,
              proxy: e.proxy,
              useCORS: (B = e.useCORS) !== null && B !== void 0 ? B : false
            }, o = ja({
              logging: (H = e.logging) !== null && H !== void 0 ? H : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (R = e.windowWidth) !== null && R !== void 0 ? R : r.innerWidth,
              windowHeight: (O = e.windowHeight) !== null && O !== void 0 ? O : r.innerHeight,
              scrollX: (_ = e.scrollX) !== null && _ !== void 0 ? _ : r.pageXOffset,
              scrollY: (M = e.scrollY) !== null && M !== void 0 ? M : r.pageYOffset
            }, a = new ct(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), s = new pU(o, a), l = (k = e.foreignObjectRendering) !== null && k !== void 0 ? k : false, c = {
              allowTaint: (Y = e.allowTaint) !== null && Y !== void 0 ? Y : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), u = new Au(s, A, c), d = u.clonedReferenceElement, d ? [
              4,
              u.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return f = Z.sent(), g = ol(d) || wF(d) ? Yw(d.ownerDocument) : Ei(s, d), h = g.width, F = g.height, w = g.left, C = g.top, b = wU(s, d, e.backgroundColor), Q = {
              canvas: e.canvas,
              backgroundColor: b,
              scale: (W = (z = e.scale) !== null && z !== void 0 ? z : r.devicePixelRatio) !== null && W !== void 0 ? W : 1,
              x: ((V = e.x) !== null && V !== void 0 ? V : 0) + w,
              y: ((J = e.y) !== null && J !== void 0 ? J : 0) + C,
              width: (oA = e.width) !== null && oA !== void 0 ? oA : Math.ceil(h),
              height: (K = e.height) !== null && K !== void 0 ? K : Math.ceil(F)
            }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), U = new gU(s, Q), [
              4,
              U.render(d)
            ]) : [
              3,
              3
            ];
          case 2:
            return S = Z.sent(), [
              3,
              5
            ];
          case 3:
            return s.logger.debug("Document cloned, element located at " + w + "," + C + " with size " + h + "x" + F + " using computed rendering"), s.logger.debug("Starting DOM parsing"), v = mf(s, d), b === v.styles.backgroundColor && (v.styles.backgroundColor = at.TRANSPARENT), s.logger.debug("Starting renderer for element at " + Q.x + "," + Q.y + " with size " + Q.width + "x" + Q.height), U = new sU(s, Q), [
              4,
              U.render(v)
            ];
          case 4:
            S = Z.sent(), Z.label = 5;
          case 5:
            return (!((AA = e.removeContainer) !== null && AA !== void 0) || AA) && (Au.destroy(f) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [
              2,
              S
            ];
        }
      });
    });
  }, wU = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? Wr(A, getComputedStyle(r.documentElement).backgroundColor) : at.TRANSPARENT, o = r.body ? Wr(A, getComputedStyle(r.body).backgroundColor) : at.TRANSPARENT, i = typeof t == "string" ? Wr(A, t) : t === null ? at.TRANSPARENT : 4294967295;
    return e === r.documentElement ? bt(n) ? bt(o) ? i : o : n : i;
  }, ma = {
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
  }, CU = {
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
  }, yU = function(A, e) {
    var t = YA({}, CU);
    if (A) for (var r in ma) Object.prototype.hasOwnProperty.call(ma, r) && (t[r] = YA(YA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), ma[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = YA(YA({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, ou = function(A, e) {
    return A ? YA(YA({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : YA({}, e.rbgcpControlBtn);
  }, Yr = function(A, e) {
    return A ? YA(YA({}, e.rbgcpControlIconBtn), e.rbgcpControlBtnSelected) : YA({}, e.rbgcpControlIconBtn);
  }, no = function(A, e) {
    return A ? YA(YA(YA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn), e.rbgcpControlBtnSelected) : YA(YA({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn);
  }, Ve = function() {
    return Ve = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ve.apply(this, arguments);
  }, bU = function(A) {
    var e = A.color, t = EA().defaultStyles, r = e ?? "";
    return x.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, x.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Ve(Ve({
        fill: "none",
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), x.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Ve(Ve({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), x.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Ve(Ve({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      d: "M18.18,3.71,16.36,5.53a1.33,1.33,0,0,1-1.88,0h0a1.34,1.34,0,0,1,0-1.89l1.81-1.82a1.34,1.34,0,0,1,1.89,0h0A1.34,1.34,0,0,1,18.18,3.71Z"
    }));
  }, QU = function(A) {
    var e = A.onSelect, t = EA().defaultStyles, r = p.useState(null), n = r[0], o = r[1], i = p.useState(false), a = i[0], s = i[1], l = p.useState(false), c = l[0], u = l[1], d = function() {
      var h = document.getElementById("root");
      s(true), vU(h).then(function(F) {
        var w = document.createElement("canvas"), C = w.getContext("2d", {
          willReadFrequently: true
        });
        h && C && (w.width = h.offsetWidth * 2, w.height = h.offsetHeight * 2, C.drawImage(F, 0, 0)), o(C);
      });
    }, f = function(h) {
      if (h.stopPropagation(), n) {
        var F = h.pageX, w = h.pageY, C = F * 2, b = w * 2, Q = n.getImageData(C, b, 1, 1).data;
        e("rgba(".concat(Q[0], ", ").concat(Q[1], ", ").concat(Q[2], ", 1)"));
      }
      u(false), s(false);
    }, g = function() {
      if (u(true), !window.EyeDropper) d();
      else {
        var h = new window.EyeDropper(), F = new window.AbortController();
        h.open({
          signal: F.signal
        }).then(function(w) {
          var C = _A(w.sRGBHex), b = C.toRgb(), Q = b.r, S = b.g, v = b.b;
          e("rgba(".concat(Q, ", ").concat(S, ", ").concat(v, ", 1)")), u(false);
        }).catch(function(w) {
          console.log(w), u(false);
        });
      }
    };
    return x.createElement("div", null, x.createElement("div", {
      onClick: g,
      id: "rbgcp-eyedropper-btn",
      style: Ve(Ve({}, t.rbgcpEyedropperBtn), Yr(a, t))
    }, x.createElement(bU, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && x.createElement(zw, null, x.createElement("div", {
      onClick: function(h) {
        return f(h);
      },
      style: t.rbgcpEyedropperCover
    })));
  }, Bs = function() {
    return Bs = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Bs.apply(this, arguments);
  }, wa = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, s = A.defaultStyles, l = A.pickerIdSuffix, c = n.barSize, u = p.useState(false), d = u[0], f = u[1], g = p.useState(2), h = g[0], F = g[1], w = e * (i - 18);
    p.useEffect(function() {
      var v;
      F(((v = t == null ? void 0 : t.current) === null || v === void 0 ? void 0 : v.offsetTop) - 2);
    }, [
      a,
      t
    ]);
    var C = function() {
      f(false);
    }, b = function(v) {
      d && o(vr(v, c));
    }, Q = function(v) {
      d || o(vr(v, c));
    }, S = function() {
      f(true);
    };
    return p.useEffect(function() {
      var v = function() {
        C();
      };
      return window.addEventListener("mouseup", v), function() {
        window.removeEventListener("mouseup", v);
      };
    }, []), x.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, x.createElement("div", {
      onMouseMove: function(v) {
        return b(v);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-wrapper").concat(l)
    }, x.createElement("div", {
      style: Bs({
        left: w,
        top: h
      }, s.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(l),
      onMouseDown: S,
      role: "button",
      tabIndex: 0
    }), x.createElement("div", {
      style: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 1,
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0%)",
        top: h + 2,
        zIndex: 10,
        textShadow: "1px 1px 1px rgba(0,0,0,.6)"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-label").concat(l),
      onMouseMove: function(v) {
        return b(v);
      },
      onClick: function(v) {
        return Q(v);
      },
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, r), x.createElement("canvas", {
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
  }, FU = function(A) {
    var e = A.openAdvanced, t = EA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.toHsl(), u = c.s, d = c.l, f = p.useRef(null), g = p.useRef(null), h = p.useRef(null);
    rw(f, a == null ? void 0 : a.h, d * 100, i), nw(g, a == null ? void 0 : a.h, u * 100, i), ow(h, a == null ? void 0 : a.h, u * 100, i);
    var F = function(b) {
      var Q = _A({
        h: a == null ? void 0 : a.h,
        s: b / 100,
        l: d
      }).toRgb(), S = Q.r, v = Q.g, U = Q.b;
      o("rgba(".concat(S, ",").concat(v, ",").concat(U, ",").concat(a == null ? void 0 : a.a, ")"));
    }, w = function(b) {
      var Q = _A({
        h: a == null ? void 0 : a.h,
        s: u,
        l: b / 100
      }).toRgb(), S = Q.r, v = Q.g, U = Q.b;
      o("rgba(".concat(S, ",").concat(v, ",").concat(U, ",").concat(a == null ? void 0 : a.a, ")"));
    }, C = function(b) {
      var Q = _A({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: b
      }).toRgb(), S = Q.r, v = Q.g, U = Q.b;
      o("rgba(".concat(S, ",").concat(v, ",").concat(U, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return x.createElement("div", {
      style: {
        width: "100%",
        height: e ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(l)
    }, x.createElement("div", {
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
    }, x.createElement(wa, {
      value: u,
      reffy: f,
      config: r,
      label: "Saturation",
      callback: F,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), x.createElement(wa, {
      value: d,
      config: r,
      reffy: g,
      label: "Lightness",
      callback: w,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), x.createElement(wa, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: h,
      label: "Brightness",
      callback: C,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    })));
  }, kt = function() {
    return kt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, kt.apply(this, arguments);
  }, UU = function(A) {
    var e = A.openComparibles, t = EA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), s = r.monochromatic(), l = r.triad(), c = r.tetrad(), u = function(d) {
      var f = d.toRgb(), g = f.r, h = f.g, F = f.b, w = f.a;
      n("rgba(".concat(g, ",").concat(h, ",").concat(F, ",").concat(w, ")"));
    };
    return x.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: e ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(i)
    }, x.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(i)
    }, x.createElement("div", {
      style: kt({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(i)
    }, "Color Guide"), x.createElement("div", {
      style: kt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(i)
    }, "Analogous"), x.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(i)
    }, a == null ? void 0 : a.map(function(d, f) {
      return x.createElement("div", {
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
    })), x.createElement("div", {
      style: kt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(i)
    }, "Monochromatic"), x.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(i)
    }, s == null ? void 0 : s.map(function(d, f) {
      return x.createElement("div", {
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
    })), x.createElement("div", {
      style: kt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(i)
    }, "Triad"), x.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(i)
    }, l == null ? void 0 : l.map(function(d, f) {
      return x.createElement("div", {
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
    })), x.createElement("div", {
      style: kt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(i)
    }, "Tetrad"), x.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(i)
    }, c == null ? void 0 : c.map(function(d, f) {
      return x.createElement("div", {
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
  }, LA = function() {
    return LA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, LA.apply(this, arguments);
  }, EU = function() {
    var A = EA(), e = A.gradientType, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = e === "linear-gradient", a = e === "radial-gradient", s = function() {
      var c = r.split(/,(.+)/)[1];
      t("linear-gradient(90deg, ".concat(c));
    }, l = function() {
      var c = r.split(/,(.+)/)[1];
      t("radial-gradient(circle, ".concat(c));
    };
    return x.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, x.createElement("div", {
      onClick: s,
      id: "rbgcp-linear-btn".concat(o),
      style: LA(LA({}, n.rbgcpControlBtn), i && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, x.createElement(Pw, {
      color: i ? "#568CF5" : ""
    })), x.createElement("div", {
      onClick: l,
      id: "rbgcp-radial-btn".concat(o),
      style: LA(LA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, x.createElement(Gw, {
      color: a ? "#568CF5" : ""
    })));
  }, SU = function() {
    var A = EA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, ue(parseInt(a), 0, 100));
    };
    return x.createElement("div", {
      style: LA(LA(LA(LA({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, x.createElement(jw, null), x.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: LA(LA({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, xU = function() {
    var A = EA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = ue(a.target.value, 0, 360), l = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(s ?? 0, "deg, ").concat(l));
    };
    return x.createElement("div", {
      style: LA(LA(LA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, x.createElement(Ww, null), x.createElement("input", {
      value: e,
      onChange: function(a) {
        return i(a);
      },
      id: "rbgcp-degree-input".concat(o),
      style: LA(LA({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), x.createElement("div", {
      style: LA(LA({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: e > 99 ? 0 : e < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, IU = function() {
    var A = EA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(l, c) {
          return LA(LA({}, l), {
            value: c === t - 1 ? hn(l) : Nt(l)
          });
        }), s = a == null ? void 0 : a.filter(function(l, c) {
          return c !== t;
        });
        r(s);
      }
    };
    return x.createElement("div", {
      onClick: i,
      style: LA(LA({}, Yr(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, x.createElement(_w, null));
  }, iu = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = EA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return x.createElement("div", {
      style: LA(LA({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && x.createElement(EU, null), x.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && x.createElement(xU, null)), !r && x.createElement(SU, null), x.createElement(IU, null));
  }, an = function() {
    return an = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, an.apply(this, arguments);
  }, HU = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, s = EA(), l = s.defaultStyles, c = s.pickerIdSuffix;
    return r ? x.createElement("div", {
      style: {
        width: 1
      }
    }) : x.createElement("div", {
      style: an({
        display: "flex",
        alignItems: "center"
      }, l.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, x.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: ou(!o, l)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), x.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: ou(o ?? false, l)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, TU = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = EA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, s = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", l = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", u = function(d, f) {
      e && (d.stopPropagation(), o(f), t(false));
    };
    return x.createElement("div", {
      style: an({
        visibility: e ? "visible" : "hidden",
        zIndex: e ? "" : -100,
        opacity: e ? 1 : 0,
        transition: "".concat(c, ", ").concat(s, ", ").concat(l)
      }, i.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, x.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(d) {
        return u(d, "rgb");
      },
      style: no(n === "rgb", i)
    }, "RGB"), x.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsl");
      },
      style: no(n === "hsl", i)
    }, "HSL"), x.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsv");
      },
      style: no(n === "hsv", i)
    }, "HSV"), x.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(d) {
        return u(d, "cmyk");
      },
      style: no(n === "cmyk", i)
    }, "CMYK"));
  }, LU = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, s = A.hideColorGuide, l = s === void 0 ? false : s, c = A.hideInputType, u = c === void 0 ? false : c, d = A.hideColorTypeBtns, f = d === void 0 ? false : d, g = A.hideGradientControls, h = g === void 0 ? false : g, F = A.hideGradientType, w = F === void 0 ? false : F, C = A.hideGradientAngle, b = C === void 0 ? false : C, Q = A.hideGradientStop, S = Q === void 0 ? false : Q, v = EA(), U = v.config, T = v.onChange, I = v.isGradient, B = v.handleChange, H = v.previous, R = v.defaultStyles, O = v.pickerIdSuffix, _ = U.defaultColor, M = U.defaultGradient, k = p.useState(false), Y = k[0], z = k[1], W = p.useState(false), V = W[0], J = W[1], oA = p.useState(false), K = oA[0], AA = oA[1], Z = o && a && l && u, rA = (e = H == null ? void 0 : H.color) !== null && e !== void 0 ? e : _, pA = (t = H == null ? void 0 : H.gradient) !== null && t !== void 0 ? t : M, uA = function() {
      T(rA);
    }, sA = function() {
      T(pA);
    }, eA = o && a && l && u, lA = eA && f;
    return lA ? I && !h ? x.createElement(iu, {
      hideGradientType: w,
      hideGradientAngle: b,
      hideGradientStop: S
    }) : null : x.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, x.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(O)
    }, x.createElement(HU, {
      hideColorTypeBtns: f,
      setGradient: sA,
      isGradient: I,
      setSolid: uA,
      locales: r
    }), !eA && x.createElement("div", {
      style: an({
        display: Z ? "none" : ""
      }, R.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(O)
    }, !o && x.createElement(QU, {
      onSelect: B
    }), !a && x.createElement("div", {
      id: "rbgcp-advanced-btn".concat(O),
      onClick: function() {
        return AA(!K);
      },
      style: Yr(K, R)
    }, x.createElement(Nw, {
      color: K ? "#568CF5" : ""
    })), !l && x.createElement("div", {
      style: Yr(Y, R),
      onClick: function() {
        return z(!Y);
      },
      id: "rbgcp-comparibles-btn".concat(O)
    }, x.createElement($w, {
      color: Y ? "#568CF5" : ""
    })), !u && x.createElement("div", {
      id: "rbgcp-color-model-btn".concat(O),
      onClick: function() {
        return J(!V);
      },
      style: Yr(V, R)
    }, x.createElement(Vw, {
      color: V ? "#568CF5" : ""
    }), x.createElement(TU, {
      openInputType: V,
      setOpenInputType: J
    })))), !a && x.createElement(FU, {
      openAdvanced: K
    }), !l && x.createElement(UU, {
      openComparibles: Y
    }), I && !h && x.createElement(iu, {
      hideGradientType: w,
      hideGradientAngle: b,
      hideGradientStop: S
    }));
  }, $e = function() {
    return $e = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, $e.apply(this, arguments);
  }, au = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, kU = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = EA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, s = n.defaultStyles, l = n.pickerIdSuffix, c = n.createGradientStr, u = a === t, d = (i - 18) / 100, f = function(h) {
      var F = o == null ? void 0 : o.map(function(w, C) {
        return $e($e({}, w), {
          value: C === h ? hn(w) : Nt(w)
        });
      });
      c(F);
    }, g = function(h) {
      h.stopPropagation(), f(t), r(true);
    };
    return x.createElement("div", {
      onMouseDown: function(h) {
        return g(h);
      },
      id: "rbgcp-gradient-handle-".concat(t).concat(l),
      style: $e($e({}, s.rbgcpGradientHandleWrap), {
        left: (e ?? 0) * d
      })
    }, x.createElement("div", {
      style: $e($e({}, s.rbgcpGradientHandle), u ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(t, "-dot").concat(l)
    }, u && x.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(t, "-selected-dot").concat(l)
    })));
  }, OU = function() {
    var A = EA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, s = A.createGradientStr, l = r.barSize, c = p.useState(false), u = c[0], d = c[1];
    function f(b) {
      return b.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var g = function(b) {
      var Q, S = vr(b, l), v = (Q = au(au([], t.map(function(U) {
        return $e($e({}, U), {
          value: Nt(U)
        });
      }), true), [
        {
          value: o,
          left: S
        }
      ], false)) === null || Q === void 0 ? void 0 : Q.sort(function(U, T) {
        return U.left - T.left;
      });
      s(v);
    }, h = function() {
      d(false);
    }, F = function(b) {
      u || (g(b), d(true));
    }, w = function(b) {
      u && i(o, vr(b, l));
    }, C = function() {
      h();
    };
    return p.useEffect(function() {
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }), x.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, x.createElement("div", {
      style: {
        height: 14,
        borderRadius: 10,
        width: n,
        backgroundImage: f(e)
      },
      onMouseDown: function(b) {
        return F(b);
      },
      onMouseMove: function(b) {
        return w(b);
      },
      id: "rbgcp-gradient-bar-canvas".concat(a)
    }), t == null ? void 0 : t.map(function(b, Q) {
      return x.createElement(kU, {
        i: Q,
        left: b.left,
        key: "".concat(Q, "-").concat(b),
        setDragging: d
      });
    }));
  }, KU = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, s = A.hideControls, l = A.hideInputType, c = A.hideColorGuide, u = A.hidePickerSquare, d = A.hideGradientType, f = A.hideGradientStop, g = A.hideGradientAngle, h = A.hideColorTypeBtns, F = A.hideAdvancedSliders, w = A.hideGradientControls, C = EA(), b = C.isGradient, Q = C.pickerIdSuffix;
    return x.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(Q)
    }, !u && x.createElement(Ow, null), !s && x.createElement(LU, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: l,
      hideColorGuide: c,
      hideGradientType: d,
      hideGradientStop: f,
      hideColorTypeBtns: h,
      hideGradientAngle: g,
      hideAdvancedSliders: F,
      hideGradientControls: w
    }), b && x.createElement(OU, null), !r && x.createElement(iw, null), !i && x.createElement(Kw, null), !n && x.createElement(gw, null), !o && x.createElement(Mw, {
      presets: t
    }));
  }, No = function() {
    return No = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, No.apply(this, arguments);
  };
  function RU(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, s = a === void 0 ? false : a, l = A.hideOpacity, c = l === void 0 ? false : l, u = A.hidePresets, d = u === void 0 ? false : u, f = A.hideHue, g = f === void 0 ? false : f, h = A.presets, F = h === void 0 ? [] : h, w = A.hideEyeDrop, C = w === void 0 ? false : w, b = A.hideAdvancedSliders, Q = b === void 0 ? false : b, S = A.hideColorGuide, v = S === void 0 ? false : S, U = A.hideInputType, T = U === void 0 ? false : U, I = A.hideColorTypeBtns, B = I === void 0 ? false : I, H = A.hideGradientType, R = H === void 0 ? false : H, O = A.hideGradientAngle, _ = O === void 0 ? false : O, M = A.hideGradientStop, k = M === void 0 ? false : M, Y = A.hideGradientControls, z = Y === void 0 ? false : Y, W = A.locales, V = W === void 0 ? Rw : W, J = A.width, oA = J === void 0 ? 294 : J, K = A.height, AA = K === void 0 ? 294 : K, Z = A.style, rA = Z === void 0 ? {} : Z, pA = A.className, uA = A.disableDarkMode, sA = uA === void 0 ? false : uA, eA = A.disableLightMode, lA = eA === void 0 ? false : eA, dA = A.hidePickerSquare, m = dA === void 0 ? false : dA, E = A.showHexAlpha, y = E === void 0 ? false : E, P = A.config, j = P === void 0 ? {} : P, $ = Zm(r), fA = typeof window > "u" || sA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || lA), BA = yU(fA, rA), G = fA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return x.createElement("div", {
      className: pA,
      style: No(No({}, BA.body), {
        width: oA
      })
    }, x.createElement(ew, {
      value: $,
      onChange: n,
      squareWidth: oA,
      passedConfig: j,
      squareHeight: AA,
      isDarkMode: fA,
      hideOpacity: c,
      showHexAlpha: y,
      defaultStyles: BA,
      pickerIdSuffix: G
    }, x.createElement(KU, {
      hideControls: i,
      hideInputs: s,
      hidePresets: d,
      hideOpacity: c,
      hideHue: g,
      presets: F,
      hideEyeDrop: C,
      hideAdvancedSliders: Q,
      hideColorGuide: v,
      hideInputType: T,
      hideColorTypeBtns: B,
      hideGradientType: R,
      hideGradientAngle: _,
      hideGradientStop: k,
      hideGradientControls: z,
      hidePickerSquare: m,
      locales: V
    })));
  }
  var Pe = function() {
    return Pe = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Pe.apply(this, arguments);
  }, oo = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, DU = function(A, e, t) {
    var r = {}, n = r.defaultColor, o = n === void 0 ? "rgba(175, 51, 242, 1)" : n, i = r.defaultGradient, a = i === void 0 ? "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)" : i, s = $a(A, o, a), l = Ud(A), c = l.degrees, u = l.degreeStr, d = l.isGradient, f = l.gradientType, g = Fd(s, a), h = g.currentColor, F = g.selectedColor, w = g.currentLeft, C = p.useState([]), b = C[0], Q = C[1], S = function(G) {
      if (G && (s = $a(G, o, a)), A) return d ? {
        isGradient: true,
        gradientType: f,
        degrees: u,
        colors: s == null ? void 0 : s.map(function(N) {
          var gA;
          return Pe(Pe({}, N), {
            value: (gA = N.value) === null || gA === void 0 ? void 0 : gA.toLowerCase()
          });
        })
      } : {
        isGradient: false,
        gradientType: null,
        degrees: null,
        colors: s == null ? void 0 : s.map(function(N) {
          var gA;
          return Pe(Pe({}, N), {
            value: (gA = N.value) === null || gA === void 0 ? void 0 : gA.toLowerCase()
          });
        })
      };
      console.log("RBGCP ERROR - YOU MUST PASS A VALUE AND CALLBACK TO THE useColorPicker HOOK");
    }, v = _A(h), U = v.toRgb(), T = U.r, I = U.g, B = U.b, H = U.a, R = v.toHsl(), O = R.h, _ = R.s, M = R.l;
    p.useEffect(function() {
      var G;
      !((G = _A(h)) === null || G === void 0) && G.isValid() && b[0] !== h && Q(oo([
        h
      ], b.slice(0, 19), true));
    }, [
      h,
      b
    ]);
    var k = function() {
      var G = A.split(/,(.+)/)[1];
      e("linear-gradient(90deg, ".concat(G));
    }, Y = function() {
      var G = A.split(/,(.+)/)[1];
      e("radial-gradient(circle, ".concat(G));
    }, z = function(G) {
      var N = A.split(/,(.+)/)[1];
      e("linear-gradient(".concat(ue(G, 0, 360), "deg, ").concat(N)), f !== "linear-gradient" && console.log("Warning: you are updating degrees when the gradient type is not linear. This will change the gradients type which may be undesired");
    }, W = function(G) {
      var N, gA = (N = G ?? o) !== null && N !== void 0 ? N : "rgba(175, 51, 242, 1)";
      e(gA);
    }, V = function(G) {
      var N, gA = (N = G ?? a) !== null && N !== void 0 ? N : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)";
      e(gA);
    }, J = function(G) {
      var N = G.sort(function(aA, X) {
        return aA.left - X.left;
      }), gA = N == null ? void 0 : N.map(function(aA) {
        return "".concat(aA == null ? void 0 : aA.value, " ").concat(aA.left, "%");
      });
      e("".concat(f, "(").concat(u, ", ").concat(gA.join(", "), ")"));
    }, oA = function(G, N) {
      var gA = s == null ? void 0 : s.filter(function(X) {
        return !pt(X.value);
      }), aA = oo([
        {
          value: G.toUpperCase(),
          left: N ?? w
        }
      ], gA, true);
      J(aA);
    }, K = function(G) {
      G = G == null ? void 0 : G.replace(/\s+/g, ""), d ? oA(G) : e(G);
    }, AA = function(G) {
      var N = ue(G, 0, 255);
      K("rgba(".concat(N, ", ").concat(I, ", ").concat(B, ", ").concat(H, ")"));
    }, Z = function(G) {
      var N = ue(G, 0, 255);
      K("rgba(".concat(T, ", ").concat(N, ", ").concat(B, ", ").concat(H, ")"));
    }, rA = function(G) {
      var N = ue(G, 0, 255);
      K("rgba(".concat(T, ", ").concat(I, ", ").concat(N, ", ").concat(H, ")"));
    }, pA = function(G) {
      var N = ue(G, 0, 100);
      K("rgba(".concat(T, ", ").concat(I, ", ").concat(B, ", ").concat(N / 100, ")"));
    }, uA = function(G) {
      var N = ue(G, 0, 360), gA = _A({
        h: N,
        s: _,
        l: M
      }), aA = gA.toRgb(), X = aA.r, q = aA.g, cA = aA.b;
      K("rgba(".concat(X, ", ").concat(q, ", ").concat(cA, ", ").concat(H, ")"));
    }, sA = function(G) {
      var N = ue(G, 0, 100), gA = _A({
        h: O,
        s: N / 100,
        l: M
      }), aA = gA.toRgb(), X = aA.r, q = aA.g, cA = aA.b;
      K("rgba(".concat(X, ", ").concat(q, ", ").concat(cA, ", ").concat(H, ")"));
    }, eA = function(G) {
      var N = ue(G, 0, 100), gA = _A({
        h: O,
        s: _,
        l: N / 100
      });
      if (gA == null ? void 0 : gA.isValid()) {
        var aA = gA.toRgb(), X = aA.r, q = aA.g, cA = aA.b;
        K("rgba(".concat(X, ", ").concat(q, ", ").concat(cA, ", ").concat(H, ")"));
      } else console.log("The new color was invalid, perhaps the lightness you passed in was a decimal? Please pass the new value between 0 - 100");
    }, lA = function() {
      return v.toHslString();
    }, dA = function() {
      return v.toHsvString();
    }, m = function() {
      return v.toHexString();
    }, E = function() {
      var G = Sd(T, I, B), N = G.c, gA = G.m, aA = G.y, X = G.k;
      return "cmyk(".concat(N, ", ").concat(gA, ", ").concat(aA, ", ").concat(X, ")");
    }, y = function(G) {
      if (d) {
        var N = s == null ? void 0 : s.map(function(gA, aA) {
          return Pe(Pe({}, gA), {
            value: aA === G ? hn(gA) : Nt(gA)
          });
        });
        J(N);
      } else console.log("This function is only relevant when the picker is in gradient mode");
    }, P = function(G) {
      var N = oo(oo([], s.map(function(gA) {
        return Pe(Pe({}, gA), {
          value: Nt(gA)
        });
      }), true), [
        {
          value: h,
          left: G
        }
      ], false);
      J(N), G || console.log("You did not pass a stop value (left amount) for the new color point so it defaulted to 50");
    }, j = function(G) {
      if ((s == null ? void 0 : s.length) > 2) {
        var N = G ?? F, gA = s == null ? void 0 : s.filter(function(aA, X) {
          return X !== N;
        });
        J(gA), G || console.log("You did not pass in the index of the point you wanted to delete so the function default to the currently selected point");
      } else console.log("A gradient must have atleast two colors, disable your delete button when necessary");
    }, $ = function(G) {
      oA(h, ue(G, 0, 100));
    }, fA = [
      T,
      I,
      B,
      H
    ], BA = [
      O,
      _,
      M
    ];
    return {
      setR: AA,
      setG: Z,
      setB: rA,
      setA: pA,
      setHue: uA,
      addPoint: P,
      setSolid: W,
      setLinear: k,
      setRadial: Y,
      valueToHSL: lA,
      valueToHSV: dA,
      valueToHex: m,
      valueToCmyk: E,
      setDegrees: z,
      setGradient: V,
      setLightness: eA,
      setSaturation: sA,
      setSelectedPoint: y,
      deletePoint: j,
      isGradient: d,
      gradientType: f,
      degrees: c,
      setPointLeft: $,
      currentLeft: w,
      rgbaArr: fA,
      hslArr: BA,
      handleChange: K,
      previousColors: b,
      getGradientObject: S,
      selectedPoint: F
    };
  };
  function su({ field: A, data: e, onDataChange: t }) {
    const r = A == null ? void 0 : A.name, n = Qi(), o = p.useRef(t), [i, a] = p.useState(e[r] || null), { setGradient: s } = DU(i, a), [l, c] = p.useState(null), u = (h) => {
      c(h.currentTarget), i ? s(i) : s();
    }, d = () => {
      c(null);
    }, f = (h) => {
      a(h), t({
        [r]: i
      });
    }, g = !!l;
    return p.useEffect(() => {
      r && o.current({
        [r]: i
      });
    }, [
      i,
      r
    ]), L.jsxs(L.Fragment, {
      children: [
        L.jsxs(ee, {
          sx: {
            display: "flex"
          },
          children: [
            !!i && L.jsx(p0, {
              edge: "start",
              onClick: () => {
                t({
                  [r]: null
                }), a(null);
              },
              children: L.jsx($m, {})
            }),
            L.jsx(ee, {
              sx: {
                mt: "7px",
                boxSizing: "border-box",
                overflow: "hidden",
                borderRadius: "2px",
                width: "46px",
                height: "24px",
                border: i ? "5px solid rgb(18, 18, 18)" : "1px dashed",
                borderColor: n.name === "light" && "action.disabledBackground"
              },
              children: L.jsx(ee, {
                onClick: u,
                sx: {
                  p: "5px",
                  background: i || "transparent",
                  cursor: "pointer",
                  width: "100%",
                  height: "100%"
                }
              })
            })
          ]
        }),
        L.jsx(fv, {
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
          open: g,
          anchorEl: l,
          onClose: d,
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          children: L.jsx(ee, {
            sx: {
              borderRadius: "6px"
            },
            children: L.jsx(RU, {
              value: i,
              onChange: f,
              hidePresets: true,
              hideEyeDrop: true,
              hideAdvancedSliders: true,
              hideColorGuide: true,
              hideInputType: true,
              hideColorTypeBtns: true
            })
          })
        })
      ]
    });
  }
  Ca = (A) => {
    const { groupName: e = "", allFields: t = true } = A || {}, r = [
      {
        label: "",
        type: "custom",
        component: () => L.jsx(MA, {
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
        component: () => L.jsx(MA, {
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
        component: () => L.jsx(MA, {
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
        component: () => L.jsx(MA, {
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
        component: () => L.jsx(MA, {
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
        component: () => L.jsx(MA, {})
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
        component: () => L.jsx(MA, {})
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
        component: () => L.jsx(MA, {
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
        component: () => L.jsx(MA, {
          dividerText: "background"
        })
      },
      {
        name: `background${e}`,
        label: "background",
        default: "",
        type: "custom",
        component: (o, i, a, s) => L.jsx(su, {
          field: o,
          data: i,
          onDataChange: a
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
        component: () => L.jsx(MA, {
          dividerText: "frame_background"
        })
      },
      {
        name: `frameBackground${e}`,
        label: "frame_background",
        default: "",
        type: "custom",
        component: (o, i, a, s) => L.jsx(su, {
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
  Bh as $,
  fd as A,
  I0 as B,
  MA as C,
  Qo as D,
  Nm as E,
  U0 as F,
  Ov as G,
  Ca as H,
  p0 as I,
  Pv as J,
  Gv as K,
  Rv as L,
  rv as M,
  Sa as N,
  Gt as O,
  Oa as P,
  tn as Q,
  en as R,
  kv as S,
  Gr as T,
  Sp as U,
  hr as V,
  it as W,
  lh as X,
  id as Y,
  Pt as Z,
  ae as _,
  __tla,
  Ce as a,
  me as a0,
  bh as a1,
  ut as a2,
  dv as a3,
  fv as a4,
  $U as a5,
  dh as a6,
  Vs as a7,
  yi as a8,
  _v as a9,
  $v as aa,
  Cl as ab,
  Ah as ac,
  Ks as ad,
  Ru as ae,
  st as af,
  NU as ag,
  Ts as ah,
  GU as ai,
  ks as aj,
  fn as ak,
  Ta as al,
  d0 as am,
  WU as an,
  Dt as b,
  Ep as c,
  bA as d,
  Ke as e,
  Qi as f,
  ke as g,
  Nu as h,
  IA as i,
  L as j,
  Br as k,
  Ye as l,
  se as m,
  t0 as n,
  Ut as o,
  Nr as p,
  Ze as q,
  pp as r,
  kA as s,
  VU as t,
  ye as u,
  _m as v,
  ee as w,
  Fi as x,
  zs as y,
  xo as z
};
