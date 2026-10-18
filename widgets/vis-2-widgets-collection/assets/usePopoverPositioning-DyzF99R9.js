import { R as wa, s as fu, o as CA, e as De, q as wt, p as It, x as et, m as oA, i as V, v as Ee, l as gA, f as BA, h as RA, g as ve, E as Mf, j as ue, F as gu, n as E, I as Hn, w as Ke, u as jt, z as wn, J as pu, k as Pf, __tla as __tla_0 } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-DgsbL9Pr.js";
import { _ as JA } from "./vite-preload-helper-PPVm8Dsz.js";
import { g as Bu, c as Tn } from "./_commonjsHelpers-Cpj98o6Y.js";
let iB, Es, $l, Ms, qe, yh, iw, JU, pd, NU, rt, vo, Iw, q0, kt, yl, Lh, Jt, Cl, yd, VU, F0, YU, Rt, yr, $e, kr, Bd, fn, bn, dB, tt, Sr, Ir, Cs, Qn, n0, se, Ws, be, c1, Io, n1, a1, ZU, qU, r1, t1, ce, e1, ph, f1, Lw, d1, s1, bm, Fi, o1, i1, Rr, l1, pm, Fd, ft, PU, Fs, MU, gt, Mi, cw, E0, Ns, Ka, $0, Ne, Sw, td, bw, ka, GU, ml, Is, Un, ju, Ad, Gs, Qh, $U, Ds, A1, jU, zU, u1, XU, fi, Fl, Yu, pt, ZB, Fo, p0, Ls, H0, tB, gd, ba, WU, jp, Jh, vh, Ia, LA, DA, wA, MA, mA, Hs, Ts, WA, wB, Ci, Be, Vs, yw, dA, _U, NA, Ps, _w, Ss, Gu, Pi;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ln = {
    black: "#000",
    white: "#fff"
  }, Ar = {
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    700: "#d32f2f",
    800: "#c62828"
  }, er = {
    50: "#f3e5f5",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    700: "#7b1fa2"
  }, tr = {
    50: "#e3f2fd",
    200: "#90caf9",
    400: "#42a5f5",
    700: "#1976d2",
    800: "#1565c0"
  }, rr = {
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    700: "#0288d1",
    900: "#01579b"
  }, nr = {
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20"
  }, Tr = {
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    700: "#f57c00",
    900: "#e65100"
  }, _f = {
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
  function dt(A, ...e) {
    const t = new URL(`https://mui.com/production-error/?code=${A}`);
    return e.forEach((r) => t.searchParams.append("args[]", r)), `Minified MUI error #${A}; visit ${t} for the full message.`;
  }
  qe = "$$material";
  vo = function() {
    return vo = Object.assign ? Object.assign.bind() : function(A) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (A[r] = t[r]);
      }
      return A;
    }, vo.apply(null, arguments);
  };
  function Nf(A) {
    if (A.sheet) return A.sheet;
    for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === A) return document.styleSheets[e];
  }
  function Gf(A) {
    var e = document.createElement("style");
    return e.setAttribute("data-emotion", A.key), A.nonce !== void 0 && e.setAttribute("nonce", A.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
  }
  var Vf = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Gf(this));
      var n = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var o = Nf(n);
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
  })(), fe = "-ms-", Qo = "-moz-", vA = "-webkit-", hu = "comm", cs = "rule", us = "decl", $f = "@import", wu = "@keyframes", Wf = "@layer", Xf = Math.abs, Go = String.fromCharCode, Jf = Object.assign;
  function Yf(A, e) {
    return ae(A, 0) ^ 45 ? (((e << 2 ^ ae(A, 0)) << 2 ^ ae(A, 1)) << 2 ^ ae(A, 2)) << 2 ^ ae(A, 3) : 0;
  }
  function mu(A) {
    return A.trim();
  }
  function zf(A, e) {
    return (A = e.exec(A)) ? A[0] : A;
  }
  function QA(A, e, t) {
    return A.replace(e, t);
  }
  function ma(A, e) {
    return A.indexOf(e);
  }
  function ae(A, e) {
    return A.charCodeAt(e) | 0;
  }
  function cn(A, e, t) {
    return A.slice(e, t);
  }
  function Xe(A) {
    return A.length;
  }
  function ds(A) {
    return A.length;
  }
  function Ln(A, e) {
    return e.push(A), A;
  }
  function jf(A, e) {
    return A.map(e).join("");
  }
  var Vo = 1, Qr = 1, Cu = 0, ye = 0, YA = 0, Er = "";
  function $o(A, e, t, r, n, o, i) {
    return {
      value: A,
      root: e,
      parent: t,
      type: r,
      props: n,
      children: o,
      line: Vo,
      column: Qr,
      length: i,
      return: ""
    };
  }
  function Lr(A, e) {
    return Jf($o("", null, null, "", null, null, 0), A, {
      length: -A.length
    }, e);
  }
  function Zf() {
    return YA;
  }
  function qf() {
    return YA = ye > 0 ? ae(Er, --ye) : 0, Qr--, YA === 10 && (Qr = 1, Vo--), YA;
  }
  function Ie() {
    return YA = ye < Cu ? ae(Er, ye++) : 0, Qr++, YA === 10 && (Qr = 1, Vo++), YA;
  }
  function At() {
    return ae(Er, ye);
  }
  function fo() {
    return ye;
  }
  function mn(A, e) {
    return cn(Er, A, e);
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
  function vu(A) {
    return Vo = Qr = 1, Cu = Xe(Er = A), ye = 0, [];
  }
  function Qu(A) {
    return Er = "", A;
  }
  function go(A) {
    return mu(mn(ye - 1, Ca(A === 91 ? A + 2 : A === 40 ? A + 1 : A)));
  }
  function Ag(A) {
    for (; (YA = At()) && YA < 33; ) Ie();
    return un(A) > 2 || un(YA) > 3 ? "" : " ";
  }
  function eg(A, e) {
    for (; --e && Ie() && !(YA < 48 || YA > 102 || YA > 57 && YA < 65 || YA > 70 && YA < 97); ) ;
    return mn(A, fo() + (e < 6 && At() == 32 && Ie() == 32));
  }
  function Ca(A) {
    for (; Ie(); ) switch (YA) {
      case A:
        return ye;
      case 34:
      case 39:
        A !== 34 && A !== 39 && Ca(YA);
        break;
      case 40:
        A === 41 && Ca(A);
        break;
      case 92:
        Ie();
        break;
    }
    return ye;
  }
  function tg(A, e) {
    for (; Ie() && A + YA !== 57; ) if (A + YA === 84 && At() === 47) break;
    return "/*" + mn(e, ye - 1) + "*" + Go(A === 47 ? A : Ie());
  }
  function rg(A) {
    for (; !un(At()); ) Ie();
    return mn(A, ye);
  }
  function ng(A) {
    return Qu(po("", null, null, null, [
      ""
    ], A = vu(A), 0, [
      0
    ], A));
  }
  function po(A, e, t, r, n, o, i, a, s) {
    for (var l = 0, c = 0, u = i, d = 0, g = 0, p = 0, B = 1, y = 1, h = 1, b = 0, m = "", v = n, U = o, C = r, I = m; y; ) switch (p = b, b = Ie()) {
      case 40:
        if (p != 108 && ae(I, u - 1) == 58) {
          ma(I += QA(go(b), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += go(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += Ag(p);
        break;
      case 92:
        I += eg(fo() - 1, 7);
        continue;
      case 47:
        switch (At()) {
          case 42:
          case 47:
            Ln(og(tg(Ie(), fo()), e, t), s);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * B:
        a[l++] = Xe(I) * h;
      case 125 * B:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            y = 0;
          case 59 + c:
            h == -1 && (I = QA(I, /\f/g, "")), g > 0 && Xe(I) - u && Ln(g > 32 ? ol(I + ";", r, t, u - 1) : ol(QA(I, " ", "") + ";", r, t, u - 2), s);
            break;
          case 59:
            I += ";";
          default:
            if (Ln(C = nl(I, e, t, l, c, n, a, m, v = [], U = [], u), o), b === 123) if (c === 0) po(I, e, C, C, v, o, u, a, U);
            else switch (d === 99 && ae(I, 3) === 110 ? 100 : d) {
              case 100:
              case 108:
              case 109:
              case 115:
                po(A, C, C, r && Ln(nl(A, C, C, 0, 0, n, a, m, n, v = [], u), U), n, U, u, a, r ? v : U);
                break;
              default:
                po(I, C, C, C, [
                  ""
                ], U, 0, a, U);
            }
        }
        l = c = g = 0, B = h = 1, m = I = "", u = i;
        break;
      case 58:
        u = 1 + Xe(I), g = p;
      default:
        if (B < 1) {
          if (b == 123) --B;
          else if (b == 125 && B++ == 0 && qf() == 125) continue;
        }
        switch (I += Go(b), b * B) {
          case 38:
            h = c > 0 ? 1 : (I += "\f", -1);
            break;
          case 44:
            a[l++] = (Xe(I) - 1) * h, h = 1;
            break;
          case 64:
            At() === 45 && (I += go(Ie())), d = At(), c = u = Xe(m = I += rg(fo())), b++;
            break;
          case 45:
            p === 45 && Xe(I) == 2 && (B = 0);
        }
    }
    return o;
  }
  function nl(A, e, t, r, n, o, i, a, s, l, c) {
    for (var u = n - 1, d = n === 0 ? o : [
      ""
    ], g = ds(d), p = 0, B = 0, y = 0; p < r; ++p) for (var h = 0, b = cn(A, u + 1, u = Xf(B = i[p])), m = A; h < g; ++h) (m = mu(B > 0 ? d[h] + " " + b : QA(b, /&\f/g, d[h]))) && (s[y++] = m);
    return $o(A, e, t, n === 0 ? cs : a, s, l, c);
  }
  function og(A, e, t) {
    return $o(A, e, t, hu, Go(Zf()), cn(A, 2, -2), 0);
  }
  function ol(A, e, t, r) {
    return $o(A, e, t, us, cn(A, 0, r), cn(A, r + 1, -1), r);
  }
  function wr(A, e) {
    for (var t = "", r = ds(A), n = 0; n < r; n++) t += e(A[n], n, A, e) || "";
    return t;
  }
  function ig(A, e, t, r) {
    switch (A.type) {
      case Wf:
        if (A.children.length) break;
      case $f:
      case us:
        return A.return = A.return || A.value;
      case hu:
        return "";
      case wu:
        return A.return = A.value + "{" + wr(A.children, r) + "}";
      case cs:
        A.value = A.props.join(",");
    }
    return Xe(t = wr(A.children, r)) ? A.return = A.value + "{" + t + "}" : "";
  }
  function ag(A) {
    var e = ds(A);
    return function(t, r, n, o) {
      for (var i = "", a = 0; a < e; a++) i += A[a](t, r, n, o) || "";
      return i;
    };
  }
  function sg(A) {
    return function(e) {
      e.root || (e = e.return) && A(e);
    };
  }
  function yu(A) {
    var e = /* @__PURE__ */ Object.create(null);
    return function(t) {
      return e[t] === void 0 && (e[t] = A(t)), e[t];
    };
  }
  var lg = function(e, t, r) {
    for (var n = 0, o = 0; n = o, o = At(), n === 38 && o === 12 && (t[r] = 1), !un(o); ) Ie();
    return mn(e, ye);
  }, cg = function(e, t) {
    var r = -1, n = 44;
    do
      switch (un(n)) {
        case 0:
          n === 38 && At() === 12 && (t[r] = 1), e[r] += lg(ye - 1, t, r);
          break;
        case 2:
          e[r] += go(n);
          break;
        case 4:
          if (n === 44) {
            e[++r] = At() === 58 ? "&\f" : "", t[r] = e[r].length;
            break;
          }
        default:
          e[r] += Go(n);
      }
    while (n = Ie());
    return e;
  }, ug = function(e, t) {
    return Qu(cg(vu(e), t));
  }, il = /* @__PURE__ */ new WeakMap(), dg = function(e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (var t = e.value, r = e.parent, n = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
      if (!(e.props.length === 1 && t.charCodeAt(0) !== 58 && !il.get(r)) && !n) {
        il.set(e, true);
        for (var o = [], i = ug(t, o), a = r.props, s = 0, l = 0; s < i.length; s++) for (var c = 0; c < a.length; c++, l++) e.props[l] = o[s] ? i[s].replace(/&\f/g, a[c]) : a[c] + " " + i[s];
      }
    }
  }, fg = function(e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 && t.charCodeAt(2) === 98 && (e.return = "", e.value = "");
    }
  };
  function bu(A, e) {
    switch (Yf(A, e)) {
      case 5103:
        return vA + "print-" + A + A;
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
        return vA + A + A;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return vA + A + Qo + A + fe + A + A;
      case 6828:
      case 4268:
        return vA + A + fe + A + A;
      case 6165:
        return vA + A + fe + "flex-" + A + A;
      case 5187:
        return vA + A + QA(A, /(\w+).+(:[^]+)/, vA + "box-$1$2" + fe + "flex-$1$2") + A;
      case 5443:
        return vA + A + fe + "flex-item-" + QA(A, /flex-|-self/, "") + A;
      case 4675:
        return vA + A + fe + "flex-line-pack" + QA(A, /align-content|flex-|-self/, "") + A;
      case 5548:
        return vA + A + fe + QA(A, "shrink", "negative") + A;
      case 5292:
        return vA + A + fe + QA(A, "basis", "preferred-size") + A;
      case 6060:
        return vA + "box-" + QA(A, "-grow", "") + vA + A + fe + QA(A, "grow", "positive") + A;
      case 4554:
        return vA + QA(A, /([^-])(transform)/g, "$1" + vA + "$2") + A;
      case 6187:
        return QA(QA(QA(A, /(zoom-|grab)/, vA + "$1"), /(image-set)/, vA + "$1"), A, "") + A;
      case 5495:
      case 3959:
        return QA(A, /(image-set\([^]*)/, vA + "$1$`$1");
      case 4968:
        return QA(QA(A, /(.+:)(flex-)?(.*)/, vA + "box-pack:$3" + fe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + vA + A + A;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return QA(A, /(.+)-inline(.+)/, vA + "$1$2") + A;
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
        if (Xe(A) - 1 - e > 6) switch (ae(A, e + 1)) {
          case 109:
            if (ae(A, e + 4) !== 45) break;
          case 102:
            return QA(A, /(.+:)(.+)-([^]+)/, "$1" + vA + "$2-$3$1" + Qo + (ae(A, e + 3) == 108 ? "$3" : "$2-$3")) + A;
          case 115:
            return ~ma(A, "stretch") ? bu(QA(A, "stretch", "fill-available"), e) + A : A;
        }
        break;
      case 4949:
        if (ae(A, e + 1) !== 115) break;
      case 6444:
        switch (ae(A, Xe(A) - 3 - (~ma(A, "!important") && 10))) {
          case 107:
            return QA(A, ":", ":" + vA) + A;
          case 101:
            return QA(A, /(.+:)([^;!]+)(;|!.+)?/, "$1" + vA + (ae(A, 14) === 45 ? "inline-" : "") + "box$3$1" + vA + "$2$3$1" + fe + "$2box$3") + A;
        }
        break;
      case 5936:
        switch (ae(A, e + 11)) {
          case 114:
            return vA + A + fe + QA(A, /[svh]\w+-[tblr]{2}/, "tb") + A;
          case 108:
            return vA + A + fe + QA(A, /[svh]\w+-[tblr]{2}/, "tb-rl") + A;
          case 45:
            return vA + A + fe + QA(A, /[svh]\w+-[tblr]{2}/, "lr") + A;
        }
        return vA + A + fe + A + A;
    }
    return A;
  }
  var gg = function(e, t, r, n) {
    if (e.length > -1 && !e.return) switch (e.type) {
      case us:
        e.return = bu(e.value, e.length);
        break;
      case wu:
        return wr([
          Lr(e, {
            value: QA(e.value, "@", "@" + vA)
          })
        ], n);
      case cs:
        if (e.length) return jf(e.props, function(o) {
          switch (zf(o, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return wr([
                Lr(e, {
                  props: [
                    QA(o, /:(read-\w+)/, ":" + Qo + "$1")
                  ]
                })
              ], n);
            case "::placeholder":
              return wr([
                Lr(e, {
                  props: [
                    QA(o, /:(plac\w+)/, ":" + vA + "input-$1")
                  ]
                }),
                Lr(e, {
                  props: [
                    QA(o, /:(plac\w+)/, ":" + Qo + "$1")
                  ]
                }),
                Lr(e, {
                  props: [
                    QA(o, /:(plac\w+)/, fe + "input-$1")
                  ]
                })
              ], n);
          }
          return "";
        });
    }
  }, pg = [
    gg
  ], Bg = function(e) {
    var t = e.key;
    if (t === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(B) {
        var y = B.getAttribute("data-emotion");
        y.indexOf(" ") !== -1 && (document.head.appendChild(B), B.setAttribute("data-s", ""));
      });
    }
    var n = e.stylisPlugins || pg, o = {}, i, a = [];
    i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), function(B) {
      for (var y = B.getAttribute("data-emotion").split(" "), h = 1; h < y.length; h++) o[y[h]] = true;
      a.push(B);
    });
    var s, l = [
      dg,
      fg
    ];
    {
      var c, u = [
        ig,
        sg(function(B) {
          c.insert(B);
        })
      ], d = ag(l.concat(n, u)), g = function(y) {
        return wr(ng(y), d);
      };
      s = function(y, h, b, m) {
        c = b, g(y ? y + "{" + h.styles + "}" : h.styles), m && (p.inserted[h.name] = true);
      };
    }
    var p = {
      key: t,
      sheet: new Vf({
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
  }, Fu = {
    exports: {}
  }, bA = {};
  var re = typeof Symbol == "function" && Symbol.for, fs = re ? /* @__PURE__ */ Symbol.for("react.element") : 60103, gs = re ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, Wo = re ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, Xo = re ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, Jo = re ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, Yo = re ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, zo = re ? /* @__PURE__ */ Symbol.for("react.context") : 60110, ps = re ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, jo = re ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, Zo = re ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, qo = re ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, hg = re ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, Ai = re ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, ei = re ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, wg = re ? /* @__PURE__ */ Symbol.for("react.block") : 60121, mg = re ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, Cg = re ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, vg = re ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function Se(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case fs:
          switch (A = A.type, A) {
            case ps:
            case jo:
            case Wo:
            case Jo:
            case Xo:
            case qo:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case zo:
                case Zo:
                case ei:
                case Ai:
                case Yo:
                  return A;
                default:
                  return e;
              }
          }
        case gs:
          return e;
      }
    }
  }
  function Uu(A) {
    return Se(A) === jo;
  }
  bA.AsyncMode = ps;
  bA.ConcurrentMode = jo;
  bA.ContextConsumer = zo;
  bA.ContextProvider = Yo;
  bA.Element = fs;
  bA.ForwardRef = Zo;
  bA.Fragment = Wo;
  bA.Lazy = ei;
  bA.Memo = Ai;
  bA.Portal = gs;
  bA.Profiler = Jo;
  bA.StrictMode = Xo;
  bA.Suspense = qo;
  bA.isAsyncMode = function(A) {
    return Uu(A) || Se(A) === ps;
  };
  bA.isConcurrentMode = Uu;
  bA.isContextConsumer = function(A) {
    return Se(A) === zo;
  };
  bA.isContextProvider = function(A) {
    return Se(A) === Yo;
  };
  bA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === fs;
  };
  bA.isForwardRef = function(A) {
    return Se(A) === Zo;
  };
  bA.isFragment = function(A) {
    return Se(A) === Wo;
  };
  bA.isLazy = function(A) {
    return Se(A) === ei;
  };
  bA.isMemo = function(A) {
    return Se(A) === Ai;
  };
  bA.isPortal = function(A) {
    return Se(A) === gs;
  };
  bA.isProfiler = function(A) {
    return Se(A) === Jo;
  };
  bA.isStrictMode = function(A) {
    return Se(A) === Xo;
  };
  bA.isSuspense = function(A) {
    return Se(A) === qo;
  };
  bA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === Wo || A === jo || A === Jo || A === Xo || A === qo || A === hg || typeof A == "object" && A !== null && (A.$$typeof === ei || A.$$typeof === Ai || A.$$typeof === Yo || A.$$typeof === zo || A.$$typeof === Zo || A.$$typeof === mg || A.$$typeof === Cg || A.$$typeof === vg || A.$$typeof === wg);
  };
  bA.typeOf = Se;
  Fu.exports = bA;
  var Qg = Fu.exports, Eu = Qg, yg = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, bg = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, Iu = {};
  Iu[Eu.ForwardRef] = yg;
  Iu[Eu.Memo] = bg;
  var Fg = true;
  function Su(A, e, t) {
    var r = "";
    return t.split(" ").forEach(function(n) {
      A[n] !== void 0 ? e.push(A[n] + ";") : n && (r += n + " ");
    }), r;
  }
  var Bs = function(e, t, r) {
    var n = e.key + "-" + t.name;
    (r === false || Fg === false) && e.registered[n] === void 0 && (e.registered[n] = t.styles);
  }, hs = function(e, t, r) {
    Bs(e, t, r);
    var n = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do
        e.insert(t === o ? "." + n : "", o, e.sheet, true), o = o.next;
      while (o !== void 0);
    }
  };
  function Ug(A) {
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
  var Eg = {
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
  }, Ig = /[A-Z]|^ms/g, Sg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, xu = function(e) {
    return e.charCodeAt(1) === 45;
  }, al = function(e) {
    return e != null && typeof e != "boolean";
  }, Ri = yu(function(A) {
    return xu(A) ? A : A.replace(Ig, "-$&").toLowerCase();
  }), sl = function(e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string") return t.replace(Sg, function(r, n, o) {
          return Je = {
            name: n,
            styles: o,
            next: Je
          }, n;
        });
    }
    return Eg[e] !== 1 && !xu(e) && typeof t == "number" && t !== 0 ? t + "px" : t;
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
        if (n.anim === 1) return Je = {
          name: n.name,
          styles: n.styles,
          next: Je
        }, n.name;
        var o = t;
        if (o.styles !== void 0) {
          var i = o.next;
          if (i !== void 0) for (; i !== void 0; ) Je = {
            name: i.name,
            styles: i.styles,
            next: Je
          }, i = i.next;
          var a = o.styles + ";";
          return a;
        }
        return xg(A, e, t);
      }
      case "function": {
        if (A !== void 0) {
          var s = Je, l = t(A);
          return Je = s, dn(A, e, l);
        }
        break;
      }
    }
    var c = t;
    if (e == null) return c;
    var u = e[c];
    return u !== void 0 ? u : c;
  }
  function xg(A, e, t) {
    var r = "";
    if (Array.isArray(t)) for (var n = 0; n < t.length; n++) r += dn(A, e, t[n]) + ";";
    else for (var o in t) {
      var i = t[o];
      if (typeof i != "object") {
        var a = i;
        e != null && e[a] !== void 0 ? r += o + "{" + e[a] + "}" : al(a) && (r += Ri(o) + ":" + sl(o, a) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (e == null || e[i[0]] === void 0)) for (var s = 0; s < i.length; s++) al(i[s]) && (r += Ri(o) + ":" + sl(o, i[s]) + ";");
      else {
        var l = dn(A, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            r += Ri(o) + ":" + l + ";";
            break;
          }
          default:
            r += o + "{" + l + "}";
        }
      }
    }
    return r;
  }
  var ll = /label:\s*([^\s;{]+)\s*(;|$)/g, Je;
  function Cn(A, e, t) {
    if (A.length === 1 && typeof A[0] == "object" && A[0] !== null && A[0].styles !== void 0) return A[0];
    var r = true, n = "";
    Je = void 0;
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
    ll.lastIndex = 0;
    for (var l = "", c; (c = ll.exec(n)) !== null; ) l += "-" + c[1];
    var u = Ug(n) + l;
    return {
      name: u,
      styles: n,
      next: Je
    };
  }
  var Hg = function(e) {
    return e();
  }, Hu = wa.useInsertionEffect ? wa.useInsertionEffect : false, Tu = Hu || Hg, cl = Hu || fu, Lu = wt(typeof HTMLElement < "u" ? Bg({
    key: "css"
  }) : null);
  Lu.Provider;
  var ws = function(e) {
    return CA(function(t, r) {
      var n = De(Lu);
      return e(t, n, r);
    });
  }, vn = wt({}), ms = {}.hasOwnProperty, va = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Tg = function(e, t) {
    var r = {};
    for (var n in t) ms.call(t, n) && (r[n] = t[n]);
    return r[va] = e, r;
  }, Lg = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return Bs(t, r, n), Tu(function() {
      return hs(t, r, n);
    }), null;
  }, kg = ws(function(A, e, t) {
    var r = A.css;
    typeof r == "string" && e.registered[r] !== void 0 && (r = e.registered[r]);
    var n = A[va], o = [
      r
    ], i = "";
    typeof A.className == "string" ? i = Su(e.registered, o, A.className) : A.className != null && (i = A.className + " ");
    var a = Cn(o, void 0, De(vn));
    i += e.key + "-" + a.name;
    var s = {};
    for (var l in A) ms.call(A, l) && l !== "css" && l !== va && (s[l] = A[l]);
    return s.className = i, t && (s.ref = t), It(et, null, It(Lg, {
      cache: e,
      serialized: a,
      isStringTag: typeof n == "string"
    }), It(n, s));
  }), Og = kg, ul = function(e, t) {
    var r = arguments;
    if (t == null || !ms.call(t, "css")) return It.apply(void 0, r);
    var n = r.length, o = new Array(n);
    o[0] = Og, o[1] = Tg(e, t);
    for (var i = 2; i < n; i++) o[i] = r[i];
    return It.apply(null, o);
  };
  (function(A) {
    var e;
    e || (e = A.JSX || (A.JSX = {}));
  })(ul || (ul = {}));
  var Kg = ws(function(A, e) {
    var t = A.styles, r = Cn([
      t
    ], void 0, De(vn)), n = oA();
    return cl(function() {
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
    ]), cl(function() {
      var o = n.current, i = o[0], a = o[1];
      if (a) {
        o[1] = false;
        return;
      }
      if (r.next !== void 0 && hs(e, r.next, true), i.tags.length) {
        var s = i.tags[i.tags.length - 1].nextElementSibling;
        i.before = s, i.flush();
      }
      e.insert("", r, i, false);
    }, [
      e,
      r.name
    ]), null;
  });
  Cs = function() {
    for (var A = arguments.length, e = new Array(A), t = 0; t < A; t++) e[t] = arguments[t];
    return Cn(e);
  };
  Qn = function() {
    var A = Cs.apply(void 0, arguments), e = "animation-" + A.name;
    return {
      name: e,
      styles: "@keyframes " + e + "{" + A.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };
  var Rg = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Dg = yu(function(A) {
    return Rg.test(A) || A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && A.charCodeAt(2) < 91;
  }), Mg = Dg, Pg = function(e) {
    return e !== "theme";
  }, dl = function(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? Mg : Pg;
  }, fl = function(e, t, r) {
    var n;
    if (t) {
      var o = t.shouldForwardProp;
      n = e.__emotion_forwardProp && o ? function(i) {
        return e.__emotion_forwardProp(i) && o(i);
      } : o;
    }
    return typeof n != "function" && r && (n = e.__emotion_forwardProp), n;
  }, _g = function(e) {
    var t = e.cache, r = e.serialized, n = e.isStringTag;
    return Bs(t, r, n), Tu(function() {
      return hs(t, r, n);
    }), null;
  }, Ng = function A(e, t) {
    var r = e.__emotion_real === e, n = r && e.__emotion_base || e, o, i;
    t !== void 0 && (o = t.label, i = t.target);
    var a = fl(e, t, r), s = a || dl(n), l = !s("as");
    return function() {
      var c = arguments, u = r && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (o !== void 0 && u.push("label:" + o + ";"), c[0] == null || c[0].raw === void 0) u.push.apply(u, c);
      else {
        var d = c[0];
        u.push(d[0]);
        for (var g = c.length, p = 1; p < g; p++) u.push(c[p], d[p]);
      }
      var B = ws(function(y, h, b) {
        var m = l && y.as || n, v = "", U = [], C = y;
        if (y.theme == null) {
          C = {};
          for (var I in y) C[I] = y[I];
          C.theme = De(vn);
        }
        typeof y.className == "string" ? v = Su(h.registered, U, y.className) : y.className != null && (v = y.className + " ");
        var S = Cn(u.concat(U), h.registered, C);
        v += h.key + "-" + S.name, i !== void 0 && (v += " " + i);
        var x = l && a === void 0 ? dl(m) : s, f = {};
        for (var H in y) l && H === "as" || x(H) && (f[H] = y[H]);
        return f.className = v, b && (f.ref = b), It(et, null, It(_g, {
          cache: h,
          serialized: S,
          isStringTag: typeof m == "string"
        }), It(m, f));
      });
      return B.displayName = o !== void 0 ? o : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", B.defaultProps = e.defaultProps, B.__emotion_real = B, B.__emotion_base = n, B.__emotion_styles = u, B.__emotion_forwardProp = a, Object.defineProperty(B, "toString", {
        value: function() {
          return "." + i;
        }
      }), B.withComponent = function(y, h) {
        var b = A(y, vo({}, t, h, {
          shouldForwardProp: fl(B, h, true)
        }));
        return b.apply(void 0, u);
      }, B;
    };
  }, Gg = [
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
  ], Qa = Ng.bind(null);
  Gg.forEach(function(A) {
    Qa[A] = Qa(A);
  });
  function Vg(A) {
    return A == null || Object.keys(A).length === 0;
  }
  function ku(A) {
    const { styles: e, defaultTheme: t = {} } = A;
    return V(Kg, {
      styles: typeof e == "function" ? (n) => e(Vg(n) ? t : n) : e
    });
  }
  function Ou(A, e) {
    return Qa(A, e);
  }
  function $g(A, e) {
    Array.isArray(A.__emotion_styles) && (A.__emotion_styles = e(A.__emotion_styles));
  }
  const gl = [];
  function St(A) {
    return gl[0] = A, Cn(gl);
  }
  var Ku = {
    exports: {}
  }, SA = {};
  var vs = /* @__PURE__ */ Symbol.for("react.transitional.element"), Qs = /* @__PURE__ */ Symbol.for("react.portal"), ti = /* @__PURE__ */ Symbol.for("react.fragment"), ri = /* @__PURE__ */ Symbol.for("react.strict_mode"), ni = /* @__PURE__ */ Symbol.for("react.profiler"), oi = /* @__PURE__ */ Symbol.for("react.consumer"), ii = /* @__PURE__ */ Symbol.for("react.context"), ai = /* @__PURE__ */ Symbol.for("react.forward_ref"), si = /* @__PURE__ */ Symbol.for("react.suspense"), li = /* @__PURE__ */ Symbol.for("react.suspense_list"), ci = /* @__PURE__ */ Symbol.for("react.memo"), ui = /* @__PURE__ */ Symbol.for("react.lazy"), Wg = /* @__PURE__ */ Symbol.for("react.view_transition"), Xg = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Me(A) {
    if (typeof A == "object" && A !== null) {
      var e = A.$$typeof;
      switch (e) {
        case vs:
          switch (A = A.type, A) {
            case ti:
            case ni:
            case ri:
            case si:
            case li:
            case Wg:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case ii:
                case ai:
                case ui:
                case ci:
                  return A;
                case oi:
                  return A;
                default:
                  return e;
              }
          }
        case Qs:
          return e;
      }
    }
  }
  SA.ContextConsumer = oi;
  SA.ContextProvider = ii;
  SA.Element = vs;
  SA.ForwardRef = ai;
  SA.Fragment = ti;
  SA.Lazy = ui;
  SA.Memo = ci;
  SA.Portal = Qs;
  SA.Profiler = ni;
  SA.StrictMode = ri;
  SA.Suspense = si;
  SA.SuspenseList = li;
  SA.isContextConsumer = function(A) {
    return Me(A) === oi;
  };
  SA.isContextProvider = function(A) {
    return Me(A) === ii;
  };
  SA.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === vs;
  };
  SA.isForwardRef = function(A) {
    return Me(A) === ai;
  };
  SA.isFragment = function(A) {
    return Me(A) === ti;
  };
  SA.isLazy = function(A) {
    return Me(A) === ui;
  };
  SA.isMemo = function(A) {
    return Me(A) === ci;
  };
  SA.isPortal = function(A) {
    return Me(A) === Qs;
  };
  SA.isProfiler = function(A) {
    return Me(A) === ni;
  };
  SA.isStrictMode = function(A) {
    return Me(A) === ri;
  };
  SA.isSuspense = function(A) {
    return Me(A) === si;
  };
  SA.isSuspenseList = function(A) {
    return Me(A) === li;
  };
  SA.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === ti || A === ni || A === ri || A === si || A === li || typeof A == "object" && A !== null && (A.$$typeof === ui || A.$$typeof === ci || A.$$typeof === ii || A.$$typeof === oi || A.$$typeof === ai || A.$$typeof === Xg || A.getModuleId !== void 0);
  };
  SA.typeOf = Me;
  Ku.exports = SA;
  var Ru = Ku.exports;
  function je(A) {
    if (typeof A != "object" || A === null) return false;
    const e = Object.getPrototypeOf(A);
    return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in A) && !(Symbol.iterator in A);
  }
  function Du(A) {
    if (Ee(A) || Ru.isValidElementType(A) || !je(A)) return A;
    const e = {};
    return Object.keys(A).forEach((t) => {
      e[t] = Du(A[t]);
    }), e;
  }
  ce = function(A, e, t = {
    clone: true
  }) {
    const r = t.clone ? {
      ...A
    } : A;
    return je(A) && je(e) && Object.keys(e).forEach((n) => {
      Ee(e[n]) || Ru.isValidElementType(e[n]) ? r[n] = e[n] : je(e[n]) && Object.prototype.hasOwnProperty.call(A, n) && je(A[n]) ? r[n] = ce(A[n], e[n], t) : t.clone ? r[n] = je(e[n]) ? Du(e[n]) : e[n] : r[n] = e[n];
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
  function Yg(A) {
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
    function l(d, g) {
      const p = i.indexOf(g);
      return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t}) and (max-width:${(p !== -1 && typeof e[i[p]] == "number" ? e[i[p]] : g) - r / 100}${t})`;
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
  function zg(A, e) {
    return e === "@" || e.startsWith("@") && (A.some((t) => e.startsWith(`@${t}`)) || !!e.match(/^@\d/));
  }
  function jg(A, e) {
    const t = e.match(/^@([^/]+)?\/?(.+)?$/);
    if (!t) return null;
    const [, r, n] = t, o = Number.isNaN(+r) ? r || 0 : +r;
    return A.containerQueries(n).up(o);
  }
  function Zg(A) {
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
  const qg = {
    borderRadius: 4
  };
  function qr(A, e) {
    return e ? ce(A, e, {
      clone: false
    }) : A;
  }
  const di = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, Bl = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (A) => `@media (min-width:${di[A]}px)`
  }, Ap = {
    containerQueries: (A) => ({
      up: (e) => {
        let t = typeof e == "number" ? e : di[e] || e;
        return typeof t == "number" && (t = `${t}px`), A ? `@container ${A} (min-width:${t})` : `@container (min-width:${t})`;
      }
    })
  };
  ft = function(A, e, t) {
    const r = A.theme || {};
    if (Array.isArray(e)) {
      const o = r.breakpoints || Bl;
      return e.reduce((i, a, s) => (i[o.up(o.keys[s])] = t(e[s]), i), {});
    }
    if (typeof e == "object") {
      const o = r.breakpoints || Bl;
      return Object.keys(e).reduce((i, a) => {
        if (zg(o.keys, a)) {
          const s = jg(r.containerQueries ? r : Ap, a);
          s && (i[s] = t(e[a], a));
        } else if (Object.keys(o.values || di).includes(a)) {
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
  function Mu(A = {}) {
    var _a2;
    return ((_a2 = A.keys) == null ? void 0 : _a2.reduce((t, r) => {
      const n = A.up(r);
      return t[n] = {}, t;
    }, {})) || {};
  }
  function ya(A, e) {
    return A.reduce((t, r) => {
      const n = t[r];
      return (!n || Object.keys(n).length === 0) && delete t[r], t;
    }, e);
  }
  MU = function(A, ...e) {
    const t = Mu(A), r = [
      t,
      ...e
    ].reduce((n, o) => ce(n, o), {});
    return ya(Object.keys(t), r);
  };
  function ep(A, e) {
    if (typeof A != "object") return {};
    const t = {}, r = Object.keys(e);
    return Array.isArray(A) ? r.forEach((n, o) => {
      o < A.length && (t[n] = true);
    }) : r.forEach((n) => {
      A[n] != null && (t[n] = true);
    }), t;
  }
  PU = function({ values: A, breakpoints: e, base: t }) {
    const r = t || ep(A, e), n = Object.keys(r);
    if (n.length === 0) return A;
    let o;
    return n.reduce((i, a, s) => (Array.isArray(A) ? (i[a] = A[s] != null ? A[s] : A[o], o = s) : typeof A == "object" ? (i[a] = A[a] != null ? A[a] : A[o], o = a) : i[a] = A, i), {});
  };
  mA = function(A) {
    if (typeof A != "string") throw new Error(dt(7));
    return A.charAt(0).toUpperCase() + A.slice(1);
  };
  fi = function(A, e, t = true) {
    if (!e || typeof e != "string") return null;
    if (A && A.vars && t) {
      const r = `vars.${e}`.split(".").reduce((n, o) => n && n[o] ? n[o] : null, A);
      if (r != null) return r;
    }
    return e.split(".").reduce((r, n) => r && r[n] != null ? r[n] : null, A);
  };
  function yo(A, e, t, r = t) {
    let n;
    return typeof A == "function" ? n = A(t) : Array.isArray(A) ? n = A[t] || r : n = fi(A, t) || r, e && (n = e(n, r, A)), n;
  }
  function XA(A) {
    const { prop: e, cssProperty: t = A.prop, themeKey: r, transform: n } = A, o = (i) => {
      if (i[e] == null) return null;
      const a = i[e], s = i.theme, l = fi(s, r) || {};
      return ft(i, a, (u) => {
        let d = yo(l, n, u);
        return u === d && typeof u == "string" && (d = yo(l, n, `${e}${u === "default" ? "" : mA(u)}`, u)), t === false ? d : {
          [t]: d
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      e
    ], o;
  }
  function tp(A) {
    const e = {};
    return (t) => (e[t] === void 0 && (e[t] = A(t)), e[t]);
  }
  const rp = {
    m: "margin",
    p: "padding"
  }, np = {
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
  }, hl = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  }, op = tp((A) => {
    if (A.length > 2) if (hl[A]) A = hl[A];
    else return [
      A
    ];
    const [e, t] = A.split(""), r = rp[e], n = np[t] || "";
    return Array.isArray(n) ? n.map((o) => r + o) : [
      r + n
    ];
  }), ys = [
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
  ], bs = [
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
    ...ys,
    ...bs
  ];
  function yn(A, e, t, r) {
    const n = fi(A, e, true) ?? t;
    return typeof n == "number" || typeof n == "string" ? (o) => typeof o == "string" ? o : typeof n == "string" ? `calc(${o} * ${n})` : n * o : Array.isArray(n) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = n[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof n == "function" ? n : () => {
    };
  }
  Fs = function(A) {
    return yn(A, "spacing", 8);
  };
  bn = function(A, e) {
    return typeof e == "string" || e == null ? e : A(e);
  };
  function ip(A, e) {
    return (t) => A.reduce((r, n) => (r[n] = bn(e, t), r), {});
  }
  function ap(A, e, t, r) {
    if (!e.includes(t)) return null;
    const n = op(t), o = ip(n, r), i = A[t];
    return ft(A, i, o);
  }
  function Pu(A, e) {
    const t = Fs(A.theme);
    return Object.keys(A).map((r) => ap(A, e, r, t)).reduce(qr, {});
  }
  function PA(A) {
    return Pu(A, ys);
  }
  PA.propTypes = {};
  PA.filterProps = ys;
  function _A(A) {
    return Pu(A, bs);
  }
  _A.propTypes = {};
  _A.filterProps = bs;
  function _u(A = 8, e = Fs({
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
  function gi(...A) {
    const e = A.reduce((r, n) => (n.filterProps.forEach((o) => {
      r[o] = n;
    }), r), {}), t = (r) => Object.keys(r).reduce((n, o) => e[o] ? qr(n, e[o](r)) : n, {});
    return t.propTypes = {}, t.filterProps = A.reduce((r, n) => r.concat(n.filterProps), []), t;
  }
  function Te(A) {
    return typeof A != "number" ? A : `${A}px solid`;
  }
  function Pe(A, e) {
    return XA({
      prop: A,
      themeKey: "borders",
      transform: e
    });
  }
  const sp = Pe("border", Te), lp = Pe("borderTop", Te), cp = Pe("borderRight", Te), up = Pe("borderBottom", Te), dp = Pe("borderLeft", Te), fp = Pe("borderColor"), gp = Pe("borderTopColor"), pp = Pe("borderRightColor"), Bp = Pe("borderBottomColor"), hp = Pe("borderLeftColor"), wp = Pe("outline", Te), mp = Pe("outlineColor"), pi = (A) => {
    if (A.borderRadius !== void 0 && A.borderRadius !== null) {
      const e = yn(A.theme, "shape.borderRadius", 4), t = (r) => ({
        borderRadius: bn(e, r)
      });
      return ft(A, A.borderRadius, t);
    }
    return null;
  };
  pi.propTypes = {};
  pi.filterProps = [
    "borderRadius"
  ];
  gi(sp, lp, cp, up, dp, fp, gp, pp, Bp, hp, pi, wp, mp);
  const Bi = (A) => {
    if (A.gap !== void 0 && A.gap !== null) {
      const e = yn(A.theme, "spacing", 8), t = (r) => ({
        gap: bn(e, r)
      });
      return ft(A, A.gap, t);
    }
    return null;
  };
  Bi.propTypes = {};
  Bi.filterProps = [
    "gap"
  ];
  const hi = (A) => {
    if (A.columnGap !== void 0 && A.columnGap !== null) {
      const e = yn(A.theme, "spacing", 8), t = (r) => ({
        columnGap: bn(e, r)
      });
      return ft(A, A.columnGap, t);
    }
    return null;
  };
  hi.propTypes = {};
  hi.filterProps = [
    "columnGap"
  ];
  const wi = (A) => {
    if (A.rowGap !== void 0 && A.rowGap !== null) {
      const e = yn(A.theme, "spacing", 8), t = (r) => ({
        rowGap: bn(e, r)
      });
      return ft(A, A.rowGap, t);
    }
    return null;
  };
  wi.propTypes = {};
  wi.filterProps = [
    "rowGap"
  ];
  const Cp = XA({
    prop: "gridColumn"
  }), vp = XA({
    prop: "gridRow"
  }), Qp = XA({
    prop: "gridAutoFlow"
  }), yp = XA({
    prop: "gridAutoColumns"
  }), bp = XA({
    prop: "gridAutoRows"
  }), Fp = XA({
    prop: "gridTemplateColumns"
  }), Up = XA({
    prop: "gridTemplateRows"
  }), Ep = XA({
    prop: "gridTemplateAreas"
  }), Ip = XA({
    prop: "gridArea"
  });
  gi(Bi, hi, wi, Cp, vp, Qp, yp, bp, Fp, Up, Ep, Ip);
  function mr(A, e) {
    return e === "grey" ? e : A;
  }
  const Sp = XA({
    prop: "color",
    themeKey: "palette",
    transform: mr
  }), xp = XA({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: mr
  }), Hp = XA({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: mr
  });
  gi(Sp, xp, Hp);
  function Ue(A) {
    return A <= 1 && A !== 0 ? `${A * 100}%` : A;
  }
  const Tp = XA({
    prop: "width",
    transform: Ue
  }), Us = (A) => {
    if (A.maxWidth !== void 0 && A.maxWidth !== null) {
      const e = (t) => {
        var _a2, _b2, _c2, _d2, _e2;
        const r = ((_c2 = (_b2 = (_a2 = A.theme) == null ? void 0 : _a2.breakpoints) == null ? void 0 : _b2.values) == null ? void 0 : _c2[t]) || di[t];
        return r ? ((_e2 = (_d2 = A.theme) == null ? void 0 : _d2.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? {
          maxWidth: `${r}${A.theme.breakpoints.unit}`
        } : {
          maxWidth: r
        } : {
          maxWidth: Ue(t)
        };
      };
      return ft(A, A.maxWidth, e);
    }
    return null;
  };
  Us.filterProps = [
    "maxWidth"
  ];
  const Lp = XA({
    prop: "minWidth",
    transform: Ue
  }), kp = XA({
    prop: "height",
    transform: Ue
  }), Op = XA({
    prop: "maxHeight",
    transform: Ue
  }), Kp = XA({
    prop: "minHeight",
    transform: Ue
  });
  XA({
    prop: "size",
    cssProperty: "width",
    transform: Ue
  });
  XA({
    prop: "size",
    cssProperty: "height",
    transform: Ue
  });
  const Rp = XA({
    prop: "boxSizing"
  });
  gi(Tp, Us, Lp, kp, Op, Kp, Rp);
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
      style: pi
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
      style: _A
    },
    pt: {
      style: _A
    },
    pr: {
      style: _A
    },
    pb: {
      style: _A
    },
    pl: {
      style: _A
    },
    px: {
      style: _A
    },
    py: {
      style: _A
    },
    padding: {
      style: _A
    },
    paddingTop: {
      style: _A
    },
    paddingRight: {
      style: _A
    },
    paddingBottom: {
      style: _A
    },
    paddingLeft: {
      style: _A
    },
    paddingX: {
      style: _A
    },
    paddingY: {
      style: _A
    },
    paddingInline: {
      style: _A
    },
    paddingInlineStart: {
      style: _A
    },
    paddingInlineEnd: {
      style: _A
    },
    paddingBlock: {
      style: _A
    },
    paddingBlockStart: {
      style: _A
    },
    paddingBlockEnd: {
      style: _A
    },
    m: {
      style: PA
    },
    mt: {
      style: PA
    },
    mr: {
      style: PA
    },
    mb: {
      style: PA
    },
    ml: {
      style: PA
    },
    mx: {
      style: PA
    },
    my: {
      style: PA
    },
    margin: {
      style: PA
    },
    marginTop: {
      style: PA
    },
    marginRight: {
      style: PA
    },
    marginBottom: {
      style: PA
    },
    marginLeft: {
      style: PA
    },
    marginX: {
      style: PA
    },
    marginY: {
      style: PA
    },
    marginInline: {
      style: PA
    },
    marginInlineStart: {
      style: PA
    },
    marginInlineEnd: {
      style: PA
    },
    marginBlock: {
      style: PA
    },
    marginBlockStart: {
      style: PA
    },
    marginBlockEnd: {
      style: PA
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
      style: Bi
    },
    rowGap: {
      style: wi
    },
    columnGap: {
      style: hi
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
      transform: Ue
    },
    maxWidth: {
      style: Us
    },
    minWidth: {
      transform: Ue
    },
    height: {
      transform: Ue
    },
    maxHeight: {
      transform: Ue
    },
    minHeight: {
      transform: Ue
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
  function Dp(...A) {
    const e = A.reduce((r, n) => r.concat(Object.keys(n)), []), t = new Set(e);
    return A.every((r) => t.size === Object.keys(r).length);
  }
  function Mp(A, e) {
    return typeof A == "function" ? A(e) : A;
  }
  function Pp() {
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
      const d = fi(n, l) || {};
      return u ? u(i) : ft(i, r, (p) => {
        let B = yo(d, c, p);
        return p === B && typeof p == "string" && (B = yo(d, c, `${t}${p === "default" ? "" : mA(p)}`, p)), s === false ? B : {
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
        const c = Mu(n.breakpoints), u = Object.keys(c);
        let d = c;
        return Object.keys(l).forEach((g) => {
          const p = Mp(l[g], n);
          if (p != null) if (typeof p == "object") if (i[g]) d = qr(d, A(g, p, n, i));
          else {
            const B = ft({
              theme: n
            }, p, (y) => ({
              [g]: y
            }));
            Dp(B, p) ? d[g] = e({
              sx: p,
              theme: n,
              nested: true
            }) : d = qr(d, B);
          }
          else d = qr(d, A(g, p, n, i));
        }), !o && n.modularCssLayers ? {
          "@layer sx": pl(n, ya(u, d))
        } : pl(n, ya(u, d));
      }
      return Array.isArray(r) ? r.map(a) : a(r);
    }
    return e;
  }
  const Tt = Pp();
  Tt.filterProps = [
    "sx"
  ];
  function _p(A, e) {
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
  Es = function(A = {}, ...e) {
    const { breakpoints: t = {}, palette: r = {}, spacing: n, shape: o = {}, ...i } = A, a = Yg(t), s = _u(n);
    let l = ce({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...r
      },
      spacing: s,
      shape: {
        ...qg,
        ...o
      }
    }, i);
    return l = Zg(l), l.applyStyles = _p, l = e.reduce((c, u) => ce(c, u), l), l.unstable_sxConfig = {
      ...Fn,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, l.unstable_sx = function(u) {
      return Tt({
        sx: u,
        theme: this
      });
    }, l;
  };
  function Np(A) {
    return Object.keys(A).length === 0;
  }
  Is = function(A = null) {
    const e = De(vn);
    return !e || Np(e) ? A : e;
  };
  const Gp = Es();
  Ss = function(A = Gp) {
    return Is(A);
  };
  function Di(A) {
    const e = St(A);
    return A !== e && e.styles ? (e.styles.match(/^@layer\s+[^{]*$/) || (e.styles = `@layer global{${e.styles}}`), e) : A;
  }
  function Nu({ styles: A, themeId: e, defaultTheme: t = {} }) {
    const r = Ss(t), n = e && r[e] || r;
    let o = typeof A == "function" ? A(n) : A;
    return n.modularCssLayers && (Array.isArray(o) ? o = o.map((i) => Di(typeof i == "function" ? i(n) : i)) : o = Di(o)), V(ku, {
      styles: o
    });
  }
  const Vp = (A) => {
    var _a2;
    const e = {
      systemProps: {},
      otherProps: {}
    }, t = ((_a2 = A == null ? void 0 : A.theme) == null ? void 0 : _a2.unstable_sxConfig) ?? Fn;
    return Object.keys(A).forEach((r) => {
      t[r] ? e.systemProps[r] = A[r] : e.otherProps[r] = A[r];
    }), e;
  };
  Gu = function(A) {
    const { sx: e, ...t } = A, { systemProps: r, otherProps: n } = Vp(t);
    let o;
    return Array.isArray(e) ? o = [
      r,
      ...e
    ] : typeof e == "function" ? o = (...i) => {
      const a = e(...i);
      return je(a) ? {
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
  const wl = (A) => A, $p = () => {
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
  }, Vu = $p();
  function $u(A) {
    var e, t, r = "";
    if (typeof A == "string" || typeof A == "number") r += A;
    else if (typeof A == "object") if (Array.isArray(A)) {
      var n = A.length;
      for (e = 0; e < n; e++) A[e] && (t = $u(A[e])) && (r && (r += " "), r += t);
    } else for (t in A) A[t] && (r && (r += " "), r += t);
    return r;
  }
  wA = function() {
    for (var A, e, t = 0, r = "", n = arguments.length; t < n; t++) (A = arguments[t]) && (e = $u(A)) && (r && (r += " "), r += e);
    return r;
  };
  function Wp(A = {}) {
    const { themeId: e, defaultTheme: t, defaultClassName: r = "MuiBox-root", generateClassName: n } = A, o = Ou("div", {
      shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
    })(Tt);
    return CA(function(s, l) {
      const c = Ss(t), { className: u, component: d = "div", ...g } = Gu(s);
      return V(o, {
        as: d,
        ref: l,
        className: wA(u, n ? n(r) : r),
        theme: e && c[e] || c,
        ...g
      });
    });
  }
  const Xp = {
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
  DA = function(A, e, t = "Mui") {
    const r = Xp[e];
    return r ? `${t}-${r}` : `${Vu.generate(A)}-${e}`;
  };
  LA = function(A, e, t = "Mui") {
    const r = {};
    return e.forEach((n) => {
      r[n] = DA(A, n, t);
    }), r;
  };
  function Wu(A) {
    const { variants: e, ...t } = A, r = {
      variants: e,
      style: St(t),
      isProcessed: true
    };
    return r.style === t || e && e.forEach((n) => {
      typeof n.style != "function" && (n.style = St(n.style));
    }), r;
  }
  const Jp = Es();
  Mi = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  function $t(A, e) {
    return e && A && typeof A == "object" && A.styles && !A.styles.startsWith("@layer") && (A.styles = `@layer ${e}{${String(A.styles)}}`), A;
  }
  function Yp(A) {
    return A ? (e, t) => t[A] : null;
  }
  function zp(A, e, t) {
    A.theme = qp(A.theme) ? t : A.theme[e] || A.theme;
  }
  function Bo(A, e, t) {
    const r = typeof e == "function" ? e(A) : e;
    if (Array.isArray(r)) return r.flatMap((n) => Bo(A, n, t));
    if (Array.isArray(r == null ? void 0 : r.variants)) {
      let n;
      if (r.isProcessed) n = t ? $t(r.style, t) : r.style;
      else {
        const { variants: o, ...i } = r;
        n = t ? $t(St(i), t) : i;
      }
      return Xu(A, r.variants, [
        n
      ], t);
    }
    return (r == null ? void 0 : r.isProcessed) ? t ? $t(St(r.style), t) : r.style : t ? $t(St(r), t) : r;
  }
  function Xu(A, e, t = [], r = void 0) {
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
      }, t.push(r ? $t(St(i.style(n)), r) : i.style(n))) : t.push(r ? $t(St(i.style), r) : i.style);
    }
    return t;
  }
  jp = function(A = {}) {
    const { themeId: e, defaultTheme: t = Jp, rootShouldForwardProp: r = Mi, slotShouldForwardProp: n = Mi } = A;
    function o(a) {
      zp(a, e, t);
    }
    return (a, s = {}) => {
      $g(a, (C) => C.filter((I) => I !== Tt));
      const { name: l, slot: c, skipVariantsResolver: u, skipSx: d, overridesResolver: g = Yp(eB(c)), ...p } = s, B = l && l.startsWith("Mui") || c ? "components" : "custom", y = u !== void 0 ? u : c && c !== "Root" && c !== "root" || false, h = d || false;
      let b = Mi;
      c === "Root" || c === "root" ? b = r : c ? b = n : AB(a) && (b = void 0);
      const m = Ou(a, {
        shouldForwardProp: b,
        label: Zp(),
        ...p
      }), v = (C) => {
        if (C.__emotion_real === C) return C;
        if (typeof C == "function") return function(S) {
          return Bo(S, C, S.theme.modularCssLayers ? B : void 0);
        };
        if (je(C)) {
          const I = Wu(C);
          return function(x) {
            return I.variants ? Bo(x, I, x.theme.modularCssLayers ? B : void 0) : x.theme.modularCssLayers ? $t(I.style, B) : I.style;
          };
        }
        return C;
      }, U = (...C) => {
        const I = [], S = C.map(v), x = [];
        if (I.push(o), l && g && x.push(function(k) {
          var _a2, _b2;
          const O = (_b2 = (_a2 = k.theme.components) == null ? void 0 : _a2[l]) == null ? void 0 : _b2.styleOverrides;
          if (!O) return null;
          const R = {};
          for (const W in O) R[W] = Bo(k, O[W], k.theme.modularCssLayers ? "theme" : void 0);
          return g(k, R);
        }), l && !y && x.push(function(k) {
          var _a2, _b2, _c2;
          const O = (_c2 = (_b2 = (_a2 = k.theme) == null ? void 0 : _a2.components) == null ? void 0 : _b2[l]) == null ? void 0 : _c2.variants;
          return O ? Xu(k, O, [], k.theme.modularCssLayers ? "theme" : void 0) : null;
        }), h || x.push(Tt), Array.isArray(S[0])) {
          const K = S.shift(), k = new Array(I.length).fill(""), N = new Array(x.length).fill("");
          let O;
          O = [
            ...k,
            ...K,
            ...N
          ], O.raw = [
            ...k,
            ...K.raw,
            ...N
          ], I.unshift(O);
        }
        const f = [
          ...I,
          ...S,
          ...x
        ], H = m(...f);
        return a.muiName && (H.muiName = a.muiName), H;
      };
      return m.withConfig && (U.withConfig = m.withConfig), U;
    };
  };
  function Zp(A, e) {
    return void 0;
  }
  function qp(A) {
    for (const e in A) return false;
    return true;
  }
  function AB(A) {
    return typeof A == "string" && A.charCodeAt(0) > 96;
  }
  function eB(A) {
    return A && A.charAt(0).toLowerCase() + A.slice(1);
  }
  ba = function(A, e) {
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
            t[n][s] = ba(o[s], i[s]);
          }
        }
      } else t[n] === void 0 && (t[n] = A[n]);
    }
    return t;
  };
  gt = typeof window < "u" ? fu : gA;
  tB = function(A, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
    return Math.max(e, Math.min(A, t));
  };
  function xs(A, e = 0, t = 1) {
    return tB(A, e, t);
  }
  function rB(A) {
    A = A.slice(1);
    const e = new RegExp(`.{1,${A.length >= 6 ? 2 : 1}}`, "g");
    let t = A.match(e);
    return t && t[0].length === 1 && (t = t.map((r) => r + r)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((r, n) => n < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  }
  function Lt(A) {
    if (A.type) return A;
    if (A.charAt(0) === "#") return Lt(rB(A));
    const e = A.indexOf("("), t = A.substring(0, e);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(t)) throw new Error(dt(9, A));
    let r = A.substring(e + 1, A.length - 1), n;
    if (t === "color") {
      if (r = r.split(" "), n = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(n)) throw new Error(dt(10, n));
    } else r = r.split(",");
    return r = r.map((o) => parseFloat(o)), {
      type: t,
      values: r,
      colorSpace: n
    };
  }
  const nB = (A) => {
    const e = Lt(A);
    return e.values.slice(0, 3).map((t, r) => e.type.includes("hsl") && r !== 0 ? `${t}%` : t).join(" ");
  }, Nr = (A, e) => {
    try {
      return nB(A);
    } catch {
      return A;
    }
  };
  function mi(A) {
    const { type: e, colorSpace: t } = A;
    let { values: r } = A;
    return e.includes("rgb") ? r = r.map((n, o) => o < 3 ? parseInt(n, 10) : n) : e.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), e.includes("color") ? r = `${t} ${r.join(" ")}` : r = `${r.join(", ")}`, `${e}(${r})`;
  }
  function Ju(A) {
    A = Lt(A);
    const { values: e } = A, t = e[0], r = e[1] / 100, n = e[2] / 100, o = r * Math.min(n, 1 - n), i = (l, c = (l + t / 30) % 12) => n - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
    let a = "rgb";
    const s = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return A.type === "hsla" && (a += "a", s.push(e[3])), mi({
      type: a,
      values: s
    });
  }
  function Fa(A) {
    A = Lt(A);
    let e = A.type === "hsl" || A.type === "hsla" ? Lt(Ju(A)).values : A.values;
    return e = e.map((t) => (A.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3));
  }
  function oB(A, e) {
    const t = Fa(A), r = Fa(e);
    return (Math.max(t, r) + 0.05) / (Math.min(t, r) + 0.05);
  }
  fn = function(A, e) {
    return A = Lt(A), e = xs(e), (A.type === "rgb" || A.type === "hsl") && (A.type += "a"), A.type === "color" ? A.values[3] = `/${e}` : A.values[3] = e, mi(A);
  };
  function kn(A, e, t) {
    try {
      return fn(A, e);
    } catch {
      return A;
    }
  }
  Hs = function(A, e) {
    if (A = Lt(A), e = xs(e), A.type.includes("hsl")) A.values[2] *= 1 - e;
    else if (A.type.includes("rgb") || A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] *= 1 - e;
    return mi(A);
  };
  function EA(A, e, t) {
    try {
      return Hs(A, e);
    } catch {
      return A;
    }
  }
  Ts = function(A, e) {
    if (A = Lt(A), e = xs(e), A.type.includes("hsl")) A.values[2] += (100 - A.values[2]) * e;
    else if (A.type.includes("rgb")) for (let t = 0; t < 3; t += 1) A.values[t] += (255 - A.values[t]) * e;
    else if (A.type.includes("color")) for (let t = 0; t < 3; t += 1) A.values[t] += (1 - A.values[t]) * e;
    return mi(A);
  };
  function IA(A, e, t) {
    try {
      return Ts(A, e);
    } catch {
      return A;
    }
  }
  iB = function(A, e = 0.15) {
    return Fa(A) > 0.5 ? Hs(A, e) : Ts(A, e);
  };
  function On(A, e, t) {
    try {
      return iB(A, e);
    } catch {
      return A;
    }
  }
  ml = function(...A) {
    return A.reduce((e, t) => t == null ? e : function(...n) {
      e.apply(this, n), t.apply(this, n);
    }, () => {
    });
  };
  Yu = function(A, e = 166) {
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
  Pi = function(A, e) {
    var _a2, _b2, _c2;
    return Ee(A) && e.indexOf(A.type.muiName ?? ((_c2 = (_b2 = (_a2 = A.type) == null ? void 0 : _a2._payload) == null ? void 0 : _b2.value) == null ? void 0 : _c2.muiName)) !== -1;
  };
  Ne = function(A) {
    return A && A.ownerDocument || document;
  };
  pt = function(A) {
    return Ne(A).defaultView || window;
  };
  Cl = function(A, e) {
    typeof A == "function" ? A(e) : A && (A.current = e);
  };
  let vl = 0;
  function aB(A) {
    const [e, t] = BA(A), r = A || e;
    return gA(() => {
      e == null && (vl += 1, t(`mui-${vl}`));
    }, [
      e
    ]), r;
  }
  const sB = {
    ...wa
  }, Ql = sB.useId;
  Ci = function(A) {
    if (Ql !== void 0) {
      const e = Ql();
      return A ?? e;
    }
    return aB(A);
  };
  yl = function({ controlled: A, default: e, name: t, state: r = "value" }) {
    const { current: n } = oA(A !== void 0), [o, i] = BA(e), a = n ? A : o, s = RA((l) => {
      n || i(l);
    }, []);
    return [
      a,
      s
    ];
  };
  Jt = function(A) {
    const e = oA(A);
    return gt(() => {
      e.current = A;
    }), oA((...t) => (0, e.current)(...t)).current;
  };
  be = function(...A) {
    const e = oA(void 0), t = RA((r) => {
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
    return ve(() => A.every((r) => r == null) ? null : (r) => {
      e.current && (e.current(), e.current = void 0), r != null && (e.current = t(r));
    }, A);
  };
  const bl = {};
  function zu(A, e) {
    const t = oA(bl);
    return t.current === bl && (t.current = A(e)), t;
  }
  const lB = [];
  function cB(A) {
    gA(A, lB);
  }
  Ls = class {
    static create() {
      return new Ls();
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
  ju = function() {
    const A = zu(Ls.create).current;
    return cB(A.disposeEffect), A;
  };
  Fl = function(A) {
    try {
      return A.matches(":focus-visible");
    } catch {
    }
    return false;
  };
  function Zu(A = window) {
    const e = A.document.documentElement.clientWidth;
    return A.innerWidth - e;
  }
  MA = function(A, e, t = void 0) {
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
  function uB(A) {
    return typeof A == "string";
  }
  function qu(A, e, t) {
    return A === void 0 || uB(A) ? e : {
      ...e,
      ownerState: {
        ...e.ownerState,
        ...t
      }
    };
  }
  Ad = function(A, e = []) {
    if (A === void 0) return {};
    const t = {};
    return Object.keys(A).filter((r) => r.match(/^on[A-Z]/) && typeof A[r] == "function" && !e.includes(r)).forEach((r) => {
      t[r] = A[r];
    }), t;
  };
  function Ul(A) {
    if (A === void 0) return {};
    const e = {};
    return Object.keys(A).filter((t) => !(t.match(/^on[A-Z]/) && typeof A[t] == "function")).forEach((t) => {
      e[t] = A[t];
    }), e;
  }
  function ed(A) {
    const { getSlotProps: e, additionalProps: t, externalSlotProps: r, externalForwardedProps: n, className: o } = A;
    if (!e) {
      const g = wA(t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), p = {
        ...t == null ? void 0 : t.style,
        ...n == null ? void 0 : n.style,
        ...r == null ? void 0 : r.style
      }, B = {
        ...t,
        ...n,
        ...r
      };
      return g.length > 0 && (B.className = g), Object.keys(p).length > 0 && (B.style = p), {
        props: B,
        internalRef: void 0
      };
    }
    const i = Ad({
      ...n,
      ...r
    }), a = Ul(r), s = Ul(n), l = e(i), c = wA(l == null ? void 0 : l.className, t == null ? void 0 : t.className, o, n == null ? void 0 : n.className, r == null ? void 0 : r.className), u = {
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
  td = function(A, e, t) {
    return typeof A == "function" ? A(e, t) : A;
  };
  dB = function(A) {
    var _a2;
    const { elementType: e, externalSlotProps: t, ownerState: r, skipResolvingSlotProps: n = false, ...o } = A, i = n ? {} : td(t, r), { props: a, internalRef: s } = ed({
      ...o,
      externalSlotProps: i
    }), l = be(s, i == null ? void 0 : i.ref, (_a2 = A.additionalProps) == null ? void 0 : _a2.ref);
    return qu(e, {
      ...a,
      ref: l
    }, r);
  };
  Un = function(A) {
    var _a2;
    return parseInt(Mf, 10) >= 19 ? ((_a2 = A == null ? void 0 : A.props) == null ? void 0 : _a2.ref) || null : (A == null ? void 0 : A.ref) || null;
  };
  const rd = wt(null);
  function ks() {
    return De(rd);
  }
  const fB = typeof Symbol == "function" && Symbol.for, gB = fB ? /* @__PURE__ */ Symbol.for("mui.nested") : "__THEME_NESTED__";
  function pB(A, e) {
    return typeof e == "function" ? e(A) : {
      ...A,
      ...e
    };
  }
  function BB(A) {
    const { children: e, theme: t } = A, r = ks(), n = ve(() => {
      const o = r === null ? {
        ...t
      } : pB(r, t);
      return o != null && (o[gB] = r !== null), o;
    }, [
      t,
      r
    ]);
    return V(rd.Provider, {
      value: n,
      children: e
    });
  }
  const nd = wt();
  function hB({ value: A, ...e }) {
    return V(nd.Provider, {
      value: A ?? true,
      ...e
    });
  }
  let od;
  wB = () => De(nd) ?? false;
  od = wt(void 0);
  function mB({ value: A, children: e }) {
    return V(od.Provider, {
      value: A,
      children: e
    });
  }
  function CB(A) {
    const { theme: e, name: t, props: r } = A;
    if (!e || !e.components || !e.components[t]) return r;
    const n = e.components[t];
    return n.defaultProps ? ba(n.defaultProps, r) : !n.styleOverrides && !n.variants ? ba(n, r) : r;
  }
  function vB({ props: A, name: e }) {
    const t = De(od);
    return CB({
      props: A,
      name: e,
      theme: {
        components: t
      }
    });
  }
  function QB(A) {
    const e = Is(), t = Ci() || "", { modularCssLayers: r } = A;
    let n = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
    return !r || e !== null ? n = "" : typeof r == "string" ? n = r.replace(/mui(?!\.)/g, n) : n = `@layer ${n};`, gt(() => {
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
    ]), n ? V(Nu, {
      styles: n
    }) : null;
  }
  const El = {};
  function Il(A, e, t, r = false) {
    return ve(() => {
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
  function id(A) {
    const { children: e, theme: t, themeId: r } = A, n = Is(El), o = ks() || El, i = Il(r, n, t), a = Il(r, o, t, true), s = (r ? i[r] : i).direction === "rtl", l = QB(i);
    return V(BB, {
      theme: a,
      children: V(vn.Provider, {
        value: i,
        children: V(hB, {
          value: s,
          children: ue(mB, {
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
  const Sl = {
    theme: void 0
  };
  function yB(A) {
    let e, t;
    return function(n) {
      let o = e;
      return (o === void 0 || n.theme !== t) && (Sl.theme = n.theme, o = Wu(A(Sl)), e = o, t = n.theme), o;
    };
  }
  const Os = "mode", Ks = "color-scheme", bB = "data-color-scheme";
  function FB(A) {
    const { defaultMode: e = "system", defaultLightColorScheme: t = "light", defaultDarkColorScheme: r = "dark", modeStorageKey: n = Os, colorSchemeStorageKey: o = Ks, attribute: i = bB, colorSchemeNode: a = "document.documentElement", nonce: s } = A || {};
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
    return V("script", {
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
  function UB() {
  }
  const EB = ({ key: A, storageWindow: e }) => (!e && typeof window < "u" && (e = window), {
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
      if (!e) return UB;
      const r = (n) => {
        const o = n.newValue;
        n.key === A && t(o);
      };
      return e.addEventListener("storage", r), () => {
        e.removeEventListener("storage", r);
      };
    }
  });
  function _i() {
  }
  function xl(A) {
    if (typeof window < "u" && typeof window.matchMedia == "function" && A === "system") return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function ad(A, e) {
    if (A.mode === "light" || A.mode === "system" && A.systemMode === "light") return e("light");
    if (A.mode === "dark" || A.mode === "system" && A.systemMode === "dark") return e("dark");
  }
  function IB(A) {
    return ad(A, (e) => {
      if (e === "light") return A.lightColorScheme;
      if (e === "dark") return A.darkColorScheme;
    });
  }
  function SB(A) {
    const { defaultMode: e = "light", defaultLightColorScheme: t, defaultDarkColorScheme: r, supportedColorSchemes: n = [], modeStorageKey: o = Os, colorSchemeStorageKey: i = Ks, storageWindow: a = typeof window > "u" ? void 0 : window, storageManager: s = EB, noSsr: l = false } = A, c = n.join(","), u = n.length > 1, d = ve(() => s == null ? void 0 : s({
      key: o,
      storageWindow: a
    }), [
      s,
      o,
      a
    ]), g = ve(() => s == null ? void 0 : s({
      key: `${i}-light`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), p = ve(() => s == null ? void 0 : s({
      key: `${i}-dark`,
      storageWindow: a
    }), [
      s,
      i,
      a
    ]), [B, y] = BA(() => {
      const S = (d == null ? void 0 : d.get(e)) || e, x = (g == null ? void 0 : g.get(t)) || t, f = (p == null ? void 0 : p.get(r)) || r;
      return {
        mode: S,
        systemMode: xl(S),
        lightColorScheme: x,
        darkColorScheme: f
      };
    }), [h, b] = BA(l || !u);
    gA(() => {
      b(true);
    }, []);
    const m = IB(B), v = RA((S) => {
      y((x) => {
        if (S === x.mode) return x;
        const f = S ?? e;
        return d == null ? void 0 : d.set(f), {
          ...x,
          mode: f,
          systemMode: xl(f)
        };
      });
    }, [
      d,
      e
    ]), U = RA((S) => {
      S ? typeof S == "string" ? S && !c.includes(S) ? console.error(`\`${S}\` does not exist in \`theme.colorSchemes\`.`) : y((x) => {
        const f = {
          ...x
        };
        return ad(x, (H) => {
          H === "light" && (g == null ? void 0 : g.set(S), f.lightColorScheme = S), H === "dark" && (p == null ? void 0 : p.set(S), f.darkColorScheme = S);
        }), f;
      }) : y((x) => {
        const f = {
          ...x
        }, H = S.light === null ? t : S.light, K = S.dark === null ? r : S.dark;
        return H && (c.includes(H) ? (f.lightColorScheme = H, g == null ? void 0 : g.set(H)) : console.error(`\`${H}\` does not exist in \`theme.colorSchemes\`.`)), K && (c.includes(K) ? (f.darkColorScheme = K, p == null ? void 0 : p.set(K)) : console.error(`\`${K}\` does not exist in \`theme.colorSchemes\`.`)), f;
      }) : y((x) => (g == null ? void 0 : g.set(t), p == null ? void 0 : p.set(r), {
        ...x,
        lightColorScheme: t,
        darkColorScheme: r
      }));
    }, [
      c,
      g,
      p,
      t,
      r
    ]), C = RA((S) => {
      B.mode === "system" && y((x) => {
        const f = (S == null ? void 0 : S.matches) ? "dark" : "light";
        return x.systemMode === f ? x : {
          ...x,
          systemMode: f
        };
      });
    }, [
      B.mode
    ]), I = oA(C);
    return I.current = C, gA(() => {
      if (typeof window.matchMedia != "function" || !u) return;
      const S = (...f) => I.current(...f), x = window.matchMedia("(prefers-color-scheme: dark)");
      return x.addListener(S), S(x), () => {
        x.removeListener(S);
      };
    }, [
      u
    ]), gA(() => {
      if (u) {
        const S = (d == null ? void 0 : d.subscribe((H) => {
          (!H || [
            "light",
            "dark",
            "system"
          ].includes(H)) && v(H || e);
        })) || _i, x = (g == null ? void 0 : g.subscribe((H) => {
          (!H || c.match(H)) && U({
            light: H
          });
        })) || _i, f = (p == null ? void 0 : p.subscribe((H) => {
          (!H || c.match(H)) && U({
            dark: H
          });
        })) || _i;
        return () => {
          S(), x(), f();
        };
      }
    }, [
      U,
      v,
      c,
      e,
      a,
      u,
      d,
      g,
      p
    ]), {
      ...B,
      mode: h ? B.mode : void 0,
      systemMode: h ? B.systemMode : void 0,
      colorScheme: h ? m : void 0,
      setMode: v,
      setColorScheme: U
    };
  }
  const xB = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function HB(A) {
    const { themeId: e, theme: t = {}, modeStorageKey: r = Os, colorSchemeStorageKey: n = Ks, disableTransitionOnChange: o = false, defaultColorScheme: i, resolveTheme: a } = A, s = {
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
    }, l = wt(void 0), c = () => De(l) || s, u = {}, d = {};
    function g(h) {
      var _a2, _b2, _c2, _d2;
      const { children: b, theme: m, modeStorageKey: v = r, colorSchemeStorageKey: U = n, disableTransitionOnChange: C = o, storageManager: I, storageWindow: S = typeof window > "u" ? void 0 : window, documentNode: x = typeof document > "u" ? void 0 : document, colorSchemeNode: f = typeof document > "u" ? void 0 : document.documentElement, disableNestedContext: H = false, disableStyleSheetGeneration: K = false, defaultMode: k = "system", noSsr: N } = h, O = oA(false), R = ks(), W = De(l), rA = !!W && !H, D = ve(() => m || (typeof t == "function" ? t() : t), [
        m
      ]), X = D[e], q = X || D, { colorSchemes: tA = u, components: T = d, cssVarPrefix: G } = q, _ = Object.keys(tA).filter((pA) => !!tA[pA]).join(","), Y = ve(() => _.split(","), [
        _
      ]), uA = typeof i == "string" ? i : i.light, iA = typeof i == "string" ? i : i.dark, AA = tA[uA] && tA[iA] ? k : ((_b2 = (_a2 = tA[q.defaultColorScheme]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || ((_c2 = q.palette) == null ? void 0 : _c2.mode), { mode: J, setMode: nA, systemMode: aA, lightColorScheme: w, darkColorScheme: F, colorScheme: Q, setColorScheme: M } = SB({
        supportedColorSchemes: Y,
        defaultLightColorScheme: uA,
        defaultDarkColorScheme: iA,
        modeStorageKey: v,
        colorSchemeStorageKey: U,
        defaultMode: AA,
        storageManager: I,
        storageWindow: S,
        noSsr: N
      });
      let $ = J, P = Q;
      rA && ($ = W.mode, P = W.colorScheme);
      const sA = ve(() => {
        var _a3;
        const pA = P || q.defaultColorScheme, GA = ((_a3 = q.generateThemeVars) == null ? void 0 : _a3.call(q)) || q.vars, jA = {
          ...q,
          components: T,
          colorSchemes: tA,
          cssVarPrefix: G,
          vars: GA
        };
        if (typeof jA.generateSpacing == "function" && (jA.spacing = jA.generateSpacing()), pA) {
          const de = tA[pA];
          de && typeof de == "object" && Object.keys(de).forEach((Ae) => {
            de[Ae] && typeof de[Ae] == "object" ? jA[Ae] = {
              ...jA[Ae],
              ...de[Ae]
            } : jA[Ae] = de[Ae];
          });
        }
        return a ? a(jA) : jA;
      }, [
        q,
        P,
        T,
        tA,
        G
      ]), lA = q.colorSchemeSelector;
      gt(() => {
        if (P && f && lA && lA !== "media") {
          const pA = lA;
          let GA = lA;
          if (pA === "class" && (GA = ".%s"), pA === "data" && (GA = "[data-%s]"), (pA == null ? void 0 : pA.startsWith("data-")) && !pA.includes("%s") && (GA = `[${pA}="%s"]`), GA.startsWith(".")) f.classList.remove(...Y.map((jA) => GA.substring(1).replace("%s", jA))), f.classList.add(GA.substring(1).replace("%s", P));
          else {
            const jA = GA.replace("%s", P).match(/\[([^\]]+)\]/);
            if (jA) {
              const [de, Ae] = jA[1].split("=");
              Ae || Y.forEach((mt) => {
                f.removeAttribute(de.replace(P, mt));
              }), f.setAttribute(de, Ae ? Ae.replace(/"|'/g, "") : "");
            } else f.setAttribute(GA, P);
          }
        }
      }, [
        P,
        lA,
        f,
        Y
      ]), gA(() => {
        let pA;
        if (C && O.current && x) {
          const GA = x.createElement("style");
          GA.appendChild(x.createTextNode(xB)), x.head.appendChild(GA), window.getComputedStyle(x.body), pA = setTimeout(() => {
            x.head.removeChild(GA);
          }, 1);
        }
        return () => {
          clearTimeout(pA);
        };
      }, [
        P,
        C,
        x
      ]), gA(() => (O.current = true, () => {
        O.current = false;
      }), []);
      const fA = ve(() => ({
        allColorSchemes: Y,
        colorScheme: P,
        darkColorScheme: F,
        lightColorScheme: w,
        mode: $,
        setColorScheme: M,
        setMode: nA,
        systemMode: aA
      }), [
        Y,
        P,
        F,
        w,
        $,
        M,
        nA,
        aA,
        sA.colorSchemeSelector
      ]);
      let Z = true;
      (K || q.cssVariables === false || rA && (R == null ? void 0 : R.cssVarPrefix) === G) && (Z = false);
      const ne = ue(et, {
        children: [
          V(id, {
            themeId: X ? e : void 0,
            theme: sA,
            children: b
          }),
          Z && V(ku, {
            styles: ((_d2 = sA.generateStyleSheets) == null ? void 0 : _d2.call(sA)) || []
          })
        ]
      });
      return rA ? ne : V(l.Provider, {
        value: fA,
        children: ne
      });
    }
    const p = typeof i == "string" ? i : i.light, B = typeof i == "string" ? i : i.dark;
    return {
      CssVarsProvider: g,
      useColorScheme: c,
      getInitColorSchemeScript: (h) => FB({
        colorSchemeStorageKey: n,
        defaultLightColorScheme: p,
        defaultDarkColorScheme: B,
        modeStorageKey: r,
        ...h
      })
    };
  }
  function TB(A = "") {
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
  }, LB = (A, e, t) => {
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
  }, kB = (A, e) => typeof e == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((r) => A.includes(r)) || A[A.length - 1].toLowerCase().includes("opacity") ? e : `${e}px` : e;
  function Ni(A, e) {
    const { prefix: t, shouldSkipGeneratingVar: r } = e || {}, n = {}, o = {}, i = {};
    return LB(A, (a, s, l) => {
      if ((typeof s == "string" || typeof s == "number") && (!r || !r(a, s))) {
        const c = `--${t ? `${t}-` : ""}${a.join("-")}`, u = kB(a, s);
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
  function OB(A, e = {}) {
    const { getSelector: t = y, disableCssColorScheme: r, colorSchemeSelector: n } = e, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...s } = A, { vars: l, css: c, varsWithDefaults: u } = Ni(s, e);
    let d = u;
    const g = {}, { [a]: p, ...B } = o;
    if (Object.entries(B || {}).forEach(([m, v]) => {
      const { vars: U, css: C, varsWithDefaults: I } = Ni(v, e);
      d = ce(d, I), g[m] = {
        css: C,
        vars: U
      };
    }), p) {
      const { css: m, vars: v, varsWithDefaults: U } = Ni(p, e);
      d = ce(d, U), g[a] = {
        css: m,
        vars: v
      };
    }
    function y(m, v) {
      var _a2, _b2;
      let U = n;
      if (n === "class" && (U = ".%s"), n === "data" && (U = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (U = `[${n}="%s"]`), m) {
        if (U === "media") return A.defaultColorScheme === m ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b2 = (_a2 = o[m]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode) || m})`]: {
            ":root": v
          }
        };
        if (U) return A.defaultColorScheme === m ? `:root, ${U.replace("%s", String(m))}` : U.replace("%s", String(m));
      }
      return ":root";
    }
    return {
      vars: d,
      generateThemeVars: () => {
        let m = {
          ...l
        };
        return Object.entries(g).forEach(([, { vars: v }]) => {
          m = ce(m, v);
        }), m;
      },
      generateStyleSheets: () => {
        var _a2, _b2;
        const m = [], v = A.defaultColorScheme || "light";
        function U(S, x) {
          Object.keys(x).length && m.push(typeof S == "string" ? {
            [S]: {
              ...x
            }
          } : S);
        }
        U(t(void 0, {
          ...c
        }), c);
        const { [v]: C, ...I } = g;
        if (C) {
          const { css: S } = C, x = (_b2 = (_a2 = o[v]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, f = !r && x ? {
            colorScheme: x,
            ...S
          } : {
            ...S
          };
          U(t(v, {
            ...f
          }), f);
        }
        return Object.entries(I).forEach(([S, { css: x }]) => {
          var _a3, _b3;
          const f = (_b3 = (_a3 = o[S]) == null ? void 0 : _a3.palette) == null ? void 0 : _b3.mode, H = !r && f ? {
            colorScheme: f,
            ...x
          } : {
            ...x
          };
          U(t(S, {
            ...H
          }), H);
        }), m;
      }
    };
  }
  function KB(A) {
    return function(t) {
      return A === "media" ? `@media (prefers-color-scheme: ${t})` : A ? A.startsWith("data-") && !A.includes("%s") ? `[${A}="${t}"] &` : A === "class" ? `.${t} &` : A === "data" ? `[data-${t}] &` : `${A.replace("%s", t)} &` : "&";
    };
  }
  function sd() {
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
  const RB = sd();
  function ld() {
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
  const Tl = ld();
  function Ll(A, e, t, r) {
    const n = r.light || r, o = r.dark || r * 1.5;
    A[e] || (A.hasOwnProperty(t) ? A[e] = A[t] : e === "light" ? A.light = Ts(A.main, n) : e === "dark" && (A.dark = Hs(A.main, o)));
  }
  function DB(A = "light") {
    return A === "dark" ? {
      main: tr[200],
      light: tr[50],
      dark: tr[400]
    } : {
      main: tr[700],
      light: tr[400],
      dark: tr[800]
    };
  }
  function MB(A = "light") {
    return A === "dark" ? {
      main: er[200],
      light: er[50],
      dark: er[400]
    } : {
      main: er[500],
      light: er[300],
      dark: er[700]
    };
  }
  function PB(A = "light") {
    return A === "dark" ? {
      main: Ar[500],
      light: Ar[300],
      dark: Ar[700]
    } : {
      main: Ar[700],
      light: Ar[400],
      dark: Ar[800]
    };
  }
  function _B(A = "light") {
    return A === "dark" ? {
      main: rr[400],
      light: rr[300],
      dark: rr[700]
    } : {
      main: rr[700],
      light: rr[500],
      dark: rr[900]
    };
  }
  function NB(A = "light") {
    return A === "dark" ? {
      main: nr[400],
      light: nr[300],
      dark: nr[700]
    } : {
      main: nr[800],
      light: nr[500],
      dark: nr[900]
    };
  }
  function GB(A = "light") {
    return A === "dark" ? {
      main: Tr[400],
      light: Tr[300],
      dark: Tr[700]
    } : {
      main: "#ed6c02",
      light: Tr[500],
      dark: Tr[900]
    };
  }
  function Rs(A) {
    const { mode: e = "light", contrastThreshold: t = 3, tonalOffset: r = 0.2, ...n } = A, o = A.primary || DB(e), i = A.secondary || MB(e), a = A.error || PB(e), s = A.info || _B(e), l = A.success || NB(e), c = A.warning || GB(e);
    function u(B) {
      return oB(B, Tl.text.primary) >= t ? Tl.text.primary : RB.text.primary;
    }
    const d = ({ color: B, name: y, mainShade: h = 500, lightShade: b = 300, darkShade: m = 700 }) => {
      if (B = {
        ...B
      }, !B.main && B[h] && (B.main = B[h]), !B.hasOwnProperty("main")) throw new Error(dt(11, y ? ` (${y})` : "", h));
      if (typeof B.main != "string") throw new Error(dt(12, y ? ` (${y})` : "", JSON.stringify(B.main)));
      return Ll(B, "light", b, r), Ll(B, "dark", m, r), B.contrastText || (B.contrastText = u(B.main)), B;
    };
    let g;
    return e === "light" ? g = sd() : e === "dark" && (g = ld()), ce({
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
      grey: _f,
      contrastThreshold: t,
      getContrastText: u,
      augmentColor: d,
      tonalOffset: r,
      ...g
    }, n);
  }
  function VB(A) {
    const e = {};
    return Object.entries(A).forEach((r) => {
      const [n, o] = r;
      typeof o == "object" && (e[n] = `${o.fontStyle ? `${o.fontStyle} ` : ""}${o.fontVariant ? `${o.fontVariant} ` : ""}${o.fontWeight ? `${o.fontWeight} ` : ""}${o.fontStretch ? `${o.fontStretch} ` : ""}${o.fontSize || ""}${o.lineHeight ? `/${o.lineHeight} ` : ""}${o.fontFamily || ""}`);
    }), e;
  }
  function $B(A, e) {
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
  function WB(A) {
    return Math.round(A * 1e5) / 1e5;
  }
  const kl = {
    textTransform: "uppercase"
  }, Ol = '"Roboto", "Helvetica", "Arial", sans-serif';
  function cd(A, e) {
    const { fontFamily: t = Ol, fontSize: r = 14, fontWeightLight: n = 300, fontWeightRegular: o = 400, fontWeightMedium: i = 500, fontWeightBold: a = 700, htmlFontSize: s = 16, allVariants: l, pxToRem: c, ...u } = typeof e == "function" ? e(A) : e, d = r / 14, g = c || ((y) => `${y / s * d}rem`), p = (y, h, b, m, v) => ({
      fontFamily: t,
      fontWeight: y,
      fontSize: g(h),
      lineHeight: b,
      ...t === Ol ? {
        letterSpacing: `${WB(m / h)}em`
      } : {},
      ...v,
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
      button: p(i, 14, 1.75, 0.4, kl),
      caption: p(o, 12, 1.66, 0.4),
      overline: p(o, 12, 2.66, 1, kl),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return ce({
      htmlFontSize: s,
      pxToRem: g,
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
  const XB = 0.2, JB = 0.14, YB = 0.12;
  function OA(...A) {
    return [
      `${A[0]}px ${A[1]}px ${A[2]}px ${A[3]}px rgba(0,0,0,${XB})`,
      `${A[4]}px ${A[5]}px ${A[6]}px ${A[7]}px rgba(0,0,0,${JB})`,
      `${A[8]}px ${A[9]}px ${A[10]}px ${A[11]}px rgba(0,0,0,${YB})`
    ].join(",");
  }
  let zB, jB;
  zB = [
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
  ];
  jB = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  ZB = {
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
  function qB(A) {
    if (!A) return 0;
    const e = A / 36;
    return Math.min(Math.round((4 + 15 * e ** 0.25 + e / 5) * 10), 3e3);
  }
  function Ah(A) {
    const e = {
      ...jB,
      ...A.easing
    }, t = {
      ...ZB,
      ...A.duration
    };
    return {
      getAutoHeightDuration: qB,
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
  const eh = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function th(A) {
    return je(A) || typeof A > "u" || typeof A == "string" || typeof A == "boolean" || typeof A == "number" || Array.isArray(A);
  }
  function ud(A = {}) {
    const e = {
      ...A
    };
    function t(r) {
      const n = Object.entries(r);
      for (let o = 0; o < n.length; o++) {
        const [i, a] = n[o];
        !th(a) || i.startsWith("unstable_") ? delete r[i] : je(a) && (r[i] = {
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
  function Ua(A = {}, ...e) {
    const { breakpoints: t, mixins: r = {}, spacing: n, palette: o = {}, transitions: i = {}, typography: a = {}, shape: s, ...l } = A;
    if (A.vars && A.generateThemeVars === void 0) throw new Error(dt(20));
    const c = Rs(o), u = Es(A);
    let d = ce(u, {
      mixins: $B(u.breakpoints, r),
      palette: c,
      shadows: zB.slice(),
      typography: cd(c, a),
      transitions: Ah(i),
      zIndex: {
        ...eh
      }
    });
    return d = ce(d, l), d = e.reduce((g, p) => ce(g, p), d), d.unstable_sxConfig = {
      ...Fn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, d.unstable_sx = function(p) {
      return Tt({
        sx: p,
        theme: this
      });
    }, d.toRuntimeSource = ud, d;
  }
  function Ea(A) {
    let e;
    return A < 1 ? e = 5.11916 * A ** 2 : e = 4.5 * Math.log(A + 1) + 2, Math.round(e * 10) / 1e3;
  }
  const rh = [
    ...Array(25)
  ].map((A, e) => {
    if (e === 0) return "none";
    const t = Ea(e);
    return `linear-gradient(rgba(255 255 255 / ${t}), rgba(255 255 255 / ${t}))`;
  });
  function dd(A) {
    return {
      inputPlaceholder: A === "dark" ? 0.5 : 0.42,
      inputUnderline: A === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: A === "dark" ? 0.2 : 0.12,
      switchTrack: A === "dark" ? 0.3 : 0.38
    };
  }
  function fd(A) {
    return A === "dark" ? rh : [];
  }
  function nh(A) {
    const { palette: e = {
      mode: "light"
    }, opacity: t, overlays: r, ...n } = A, o = Rs(e);
    return {
      palette: o,
      opacity: {
        ...dd(o.mode),
        ...t
      },
      overlays: r || fd(o.mode),
      ...n
    };
  }
  function oh(A) {
    var _a2;
    return !!A[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!A[0].match(/sxConfig$/) || A[0] === "palette" && !!((_a2 = A[1]) == null ? void 0 : _a2.match(/(mode|contrastThreshold|tonalOffset)/));
  }
  const ih = (A) => [
    ...[
      ...Array(25)
    ].map((e, t) => `--${A ? `${A}-` : ""}overlays-${t}`),
    `--${A ? `${A}-` : ""}palette-AppBar-darkBg`,
    `--${A ? `${A}-` : ""}palette-AppBar-darkColor`
  ], ah = (A) => (e, t) => {
    const r = A.rootSelector || ":root", n = A.colorSchemeSelector;
    let o = n;
    if (n === "class" && (o = ".%s"), n === "data" && (o = "[data-%s]"), (n == null ? void 0 : n.startsWith("data-")) && !n.includes("%s") && (o = `[${n}="%s"]`), A.defaultColorScheme === e) {
      if (e === "dark") {
        const i = {};
        return ih(A.cssVarPrefix).forEach((a) => {
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
  function sh(A, e) {
    e.forEach((t) => {
      A[t] || (A[t] = {});
    });
  }
  function L(A, e, t) {
    !A[e] && t && (A[e] = t);
  }
  function Gr(A) {
    return typeof A != "string" || !A.startsWith("hsl") ? A : Ju(A);
  }
  function it(A, e) {
    `${e}Channel` in A || (A[`${e}Channel`] = Nr(Gr(A[e])));
  }
  function lh(A) {
    return typeof A == "number" ? `${A}px` : typeof A == "string" || typeof A == "function" || Array.isArray(A) ? A : "8px";
  }
  const Ve = (A) => {
    try {
      return A();
    } catch {
    }
  }, ch = (A = "mui") => TB(A);
  function Gi(A, e, t, r) {
    if (!e) return;
    e = e === true ? {} : e;
    const n = r === "dark" ? "dark" : "light";
    if (!t) {
      A[r] = nh({
        ...e,
        palette: {
          mode: n,
          ...e == null ? void 0 : e.palette
        }
      });
      return;
    }
    const { palette: o, ...i } = Ua({
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
        ...dd(n),
        ...e == null ? void 0 : e.opacity
      },
      overlays: (e == null ? void 0 : e.overlays) || fd(n)
    }, i;
  }
  function uh(A = {}, ...e) {
    const { colorSchemes: t = {
      light: true
    }, defaultColorScheme: r, disableCssColorScheme: n = false, cssVarPrefix: o = "mui", shouldSkipGeneratingVar: i = oh, colorSchemeSelector: a = t.light && t.dark ? "media" : void 0, rootSelector: s = ":root", ...l } = A, c = Object.keys(t)[0], u = r || (t.light && c !== "light" ? "light" : c), d = ch(o), { [u]: g, light: p, dark: B, ...y } = t, h = {
      ...y
    };
    let b = g;
    if ((u === "dark" && !("dark" in t) || u === "light" && !("light" in t)) && (b = true), !b) throw new Error(dt(21, u));
    const m = Gi(h, b, l, u);
    p && !h.light && Gi(h, p, void 0, "light"), B && !h.dark && Gi(h, B, void 0, "dark");
    let v = {
      defaultColorScheme: u,
      ...m,
      cssVarPrefix: o,
      colorSchemeSelector: a,
      rootSelector: s,
      getCssVar: d,
      colorSchemes: h,
      font: {
        ...VB(m.typography),
        ...m.font
      },
      spacing: lh(l.spacing)
    };
    Object.keys(v.colorSchemes).forEach((x) => {
      const f = v.colorSchemes[x].palette, H = (K) => {
        const k = K.split("-"), N = k[1], O = k[2];
        return d(K, f[N][O]);
      };
      if (f.mode === "light" && (L(f.common, "background", "#fff"), L(f.common, "onBackground", "#000")), f.mode === "dark" && (L(f.common, "background", "#000"), L(f.common, "onBackground", "#fff")), sh(f, [
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
        L(f.Alert, "errorColor", EA(f.error.light, 0.6)), L(f.Alert, "infoColor", EA(f.info.light, 0.6)), L(f.Alert, "successColor", EA(f.success.light, 0.6)), L(f.Alert, "warningColor", EA(f.warning.light, 0.6)), L(f.Alert, "errorFilledBg", H("palette-error-main")), L(f.Alert, "infoFilledBg", H("palette-info-main")), L(f.Alert, "successFilledBg", H("palette-success-main")), L(f.Alert, "warningFilledBg", H("palette-warning-main")), L(f.Alert, "errorFilledColor", Ve(() => f.getContrastText(f.error.main))), L(f.Alert, "infoFilledColor", Ve(() => f.getContrastText(f.info.main))), L(f.Alert, "successFilledColor", Ve(() => f.getContrastText(f.success.main))), L(f.Alert, "warningFilledColor", Ve(() => f.getContrastText(f.warning.main))), L(f.Alert, "errorStandardBg", IA(f.error.light, 0.9)), L(f.Alert, "infoStandardBg", IA(f.info.light, 0.9)), L(f.Alert, "successStandardBg", IA(f.success.light, 0.9)), L(f.Alert, "warningStandardBg", IA(f.warning.light, 0.9)), L(f.Alert, "errorIconColor", H("palette-error-main")), L(f.Alert, "infoIconColor", H("palette-info-main")), L(f.Alert, "successIconColor", H("palette-success-main")), L(f.Alert, "warningIconColor", H("palette-warning-main")), L(f.AppBar, "defaultBg", H("palette-grey-100")), L(f.Avatar, "defaultBg", H("palette-grey-400")), L(f.Button, "inheritContainedBg", H("palette-grey-300")), L(f.Button, "inheritContainedHoverBg", H("palette-grey-A100")), L(f.Chip, "defaultBorder", H("palette-grey-400")), L(f.Chip, "defaultAvatarColor", H("palette-grey-700")), L(f.Chip, "defaultIconColor", H("palette-grey-700")), L(f.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), L(f.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), L(f.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), L(f.LinearProgress, "primaryBg", IA(f.primary.main, 0.62)), L(f.LinearProgress, "secondaryBg", IA(f.secondary.main, 0.62)), L(f.LinearProgress, "errorBg", IA(f.error.main, 0.62)), L(f.LinearProgress, "infoBg", IA(f.info.main, 0.62)), L(f.LinearProgress, "successBg", IA(f.success.main, 0.62)), L(f.LinearProgress, "warningBg", IA(f.warning.main, 0.62)), L(f.Skeleton, "bg", `rgba(${H("palette-text-primaryChannel")} / 0.11)`), L(f.Slider, "primaryTrack", IA(f.primary.main, 0.62)), L(f.Slider, "secondaryTrack", IA(f.secondary.main, 0.62)), L(f.Slider, "errorTrack", IA(f.error.main, 0.62)), L(f.Slider, "infoTrack", IA(f.info.main, 0.62)), L(f.Slider, "successTrack", IA(f.success.main, 0.62)), L(f.Slider, "warningTrack", IA(f.warning.main, 0.62));
        const K = On(f.background.default, 0.8);
        L(f.SnackbarContent, "bg", K), L(f.SnackbarContent, "color", Ve(() => f.getContrastText(K))), L(f.SpeedDialAction, "fabHoverBg", On(f.background.paper, 0.15)), L(f.StepConnector, "border", H("palette-grey-400")), L(f.StepContent, "border", H("palette-grey-400")), L(f.Switch, "defaultColor", H("palette-common-white")), L(f.Switch, "defaultDisabledColor", H("palette-grey-100")), L(f.Switch, "primaryDisabledColor", IA(f.primary.main, 0.62)), L(f.Switch, "secondaryDisabledColor", IA(f.secondary.main, 0.62)), L(f.Switch, "errorDisabledColor", IA(f.error.main, 0.62)), L(f.Switch, "infoDisabledColor", IA(f.info.main, 0.62)), L(f.Switch, "successDisabledColor", IA(f.success.main, 0.62)), L(f.Switch, "warningDisabledColor", IA(f.warning.main, 0.62)), L(f.TableCell, "border", IA(kn(f.divider, 1), 0.88)), L(f.Tooltip, "bg", kn(f.grey[700], 0.92));
      }
      if (f.mode === "dark") {
        L(f.Alert, "errorColor", IA(f.error.light, 0.6)), L(f.Alert, "infoColor", IA(f.info.light, 0.6)), L(f.Alert, "successColor", IA(f.success.light, 0.6)), L(f.Alert, "warningColor", IA(f.warning.light, 0.6)), L(f.Alert, "errorFilledBg", H("palette-error-dark")), L(f.Alert, "infoFilledBg", H("palette-info-dark")), L(f.Alert, "successFilledBg", H("palette-success-dark")), L(f.Alert, "warningFilledBg", H("palette-warning-dark")), L(f.Alert, "errorFilledColor", Ve(() => f.getContrastText(f.error.dark))), L(f.Alert, "infoFilledColor", Ve(() => f.getContrastText(f.info.dark))), L(f.Alert, "successFilledColor", Ve(() => f.getContrastText(f.success.dark))), L(f.Alert, "warningFilledColor", Ve(() => f.getContrastText(f.warning.dark))), L(f.Alert, "errorStandardBg", EA(f.error.light, 0.9)), L(f.Alert, "infoStandardBg", EA(f.info.light, 0.9)), L(f.Alert, "successStandardBg", EA(f.success.light, 0.9)), L(f.Alert, "warningStandardBg", EA(f.warning.light, 0.9)), L(f.Alert, "errorIconColor", H("palette-error-main")), L(f.Alert, "infoIconColor", H("palette-info-main")), L(f.Alert, "successIconColor", H("palette-success-main")), L(f.Alert, "warningIconColor", H("palette-warning-main")), L(f.AppBar, "defaultBg", H("palette-grey-900")), L(f.AppBar, "darkBg", H("palette-background-paper")), L(f.AppBar, "darkColor", H("palette-text-primary")), L(f.Avatar, "defaultBg", H("palette-grey-600")), L(f.Button, "inheritContainedBg", H("palette-grey-800")), L(f.Button, "inheritContainedHoverBg", H("palette-grey-700")), L(f.Chip, "defaultBorder", H("palette-grey-700")), L(f.Chip, "defaultAvatarColor", H("palette-grey-300")), L(f.Chip, "defaultIconColor", H("palette-grey-300")), L(f.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), L(f.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), L(f.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), L(f.LinearProgress, "primaryBg", EA(f.primary.main, 0.5)), L(f.LinearProgress, "secondaryBg", EA(f.secondary.main, 0.5)), L(f.LinearProgress, "errorBg", EA(f.error.main, 0.5)), L(f.LinearProgress, "infoBg", EA(f.info.main, 0.5)), L(f.LinearProgress, "successBg", EA(f.success.main, 0.5)), L(f.LinearProgress, "warningBg", EA(f.warning.main, 0.5)), L(f.Skeleton, "bg", `rgba(${H("palette-text-primaryChannel")} / 0.13)`), L(f.Slider, "primaryTrack", EA(f.primary.main, 0.5)), L(f.Slider, "secondaryTrack", EA(f.secondary.main, 0.5)), L(f.Slider, "errorTrack", EA(f.error.main, 0.5)), L(f.Slider, "infoTrack", EA(f.info.main, 0.5)), L(f.Slider, "successTrack", EA(f.success.main, 0.5)), L(f.Slider, "warningTrack", EA(f.warning.main, 0.5));
        const K = On(f.background.default, 0.98);
        L(f.SnackbarContent, "bg", K), L(f.SnackbarContent, "color", Ve(() => f.getContrastText(K))), L(f.SpeedDialAction, "fabHoverBg", On(f.background.paper, 0.15)), L(f.StepConnector, "border", H("palette-grey-600")), L(f.StepContent, "border", H("palette-grey-600")), L(f.Switch, "defaultColor", H("palette-grey-300")), L(f.Switch, "defaultDisabledColor", H("palette-grey-600")), L(f.Switch, "primaryDisabledColor", EA(f.primary.main, 0.55)), L(f.Switch, "secondaryDisabledColor", EA(f.secondary.main, 0.55)), L(f.Switch, "errorDisabledColor", EA(f.error.main, 0.55)), L(f.Switch, "infoDisabledColor", EA(f.info.main, 0.55)), L(f.Switch, "successDisabledColor", EA(f.success.main, 0.55)), L(f.Switch, "warningDisabledColor", EA(f.warning.main, 0.55)), L(f.TableCell, "border", EA(kn(f.divider, 1), 0.68)), L(f.Tooltip, "bg", kn(f.grey[700], 0.92));
      }
      it(f.background, "default"), it(f.background, "paper"), it(f.common, "background"), it(f.common, "onBackground"), it(f, "divider"), Object.keys(f).forEach((K) => {
        const k = f[K];
        K !== "tonalOffset" && k && typeof k == "object" && (k.main && L(f[K], "mainChannel", Nr(Gr(k.main))), k.light && L(f[K], "lightChannel", Nr(Gr(k.light))), k.dark && L(f[K], "darkChannel", Nr(Gr(k.dark))), k.contrastText && L(f[K], "contrastTextChannel", Nr(Gr(k.contrastText))), K === "text" && (it(f[K], "primary"), it(f[K], "secondary")), K === "action" && (k.active && it(f[K], "active"), k.selected && it(f[K], "selected")));
      });
    }), v = e.reduce((x, f) => ce(x, f), v);
    const U = {
      prefix: o,
      disableCssColorScheme: n,
      shouldSkipGeneratingVar: i,
      getSelector: ah(v)
    }, { vars: C, generateThemeVars: I, generateStyleSheets: S } = OB(v, U);
    return v.vars = C, Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([x, f]) => {
      v[x] = f;
    }), v.generateThemeVars = I, v.generateStyleSheets = S, v.generateSpacing = function() {
      return _u(l.spacing, Fs(this));
    }, v.getColorSchemeSelector = KB(a), v.spacing = v.generateSpacing(), v.shouldSkipGeneratingVar = i, v.unstable_sxConfig = {
      ...Fn,
      ...l == null ? void 0 : l.unstable_sxConfig
    }, v.unstable_sx = function(f) {
      return Tt({
        sx: f,
        theme: this
      });
    }, v.toRuntimeSource = ud, v;
  }
  function Rl(A, e, t) {
    A.colorSchemes && t && (A.colorSchemes[e] = {
      ...t !== true && t,
      palette: Rs({
        ...t === true ? {} : t.palette,
        mode: e
      })
    });
  }
  Ds = function(A = {}, ...e) {
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
      if (!("colorSchemes" in A)) return Ua(A, ...e);
      let c = t;
      "palette" in A || l[a] && (l[a] !== true ? c = l[a].palette : a === "dark" && (c = {
        mode: "dark"
      }));
      const u = Ua({
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
    return !t && !("light" in l) && a === "light" && (l.light = true), uh({
      ...i,
      colorSchemes: l,
      defaultColorScheme: a,
      ...typeof r != "boolean" && r
    }, ...e);
  };
  Ms = Ds();
  Ps = function() {
    const A = Ss(Ms);
    return A[qe] || A;
  };
  gd = function(A) {
    return A !== "ownerState" && A !== "theme" && A !== "sx" && A !== "as";
  };
  tt = (A) => gd(A) && A !== "classes";
  dA = jp({
    themeId: qe,
    defaultTheme: Ms,
    rootShouldForwardProp: tt
  });
  function dh({ theme: A, ...e }) {
    const t = qe in A ? A[qe] : void 0;
    return V(id, {
      ...e,
      themeId: t ? qe : void 0,
      theme: t || A
    });
  }
  const Kn = {
    colorSchemeStorageKey: "mui-color-scheme",
    defaultLightColorScheme: "light",
    defaultDarkColorScheme: "dark",
    modeStorageKey: "mui-mode"
  }, { CssVarsProvider: fh } = HB({
    themeId: qe,
    theme: () => Ds({
      cssVariables: true
    }),
    colorSchemeStorageKey: Kn.colorSchemeStorageKey,
    modeStorageKey: Kn.modeStorageKey,
    defaultColorScheme: {
      light: Kn.defaultLightColorScheme,
      dark: Kn.defaultDarkColorScheme
    },
    resolveTheme: (A) => {
      const e = {
        ...A,
        typography: cd(A.palette, A.typography)
      };
      return e.unstable_sx = function(r) {
        return Tt({
          sx: r,
          theme: this
        });
      }, e;
    }
  }), gh = fh;
  _U = function({ theme: A, ...e }) {
    const t = ve(() => {
      if (typeof A == "function") return A;
      const r = qe in A ? A[qe] : A;
      return "colorSchemes" in r ? null : "vars" in r ? A : {
        ...A,
        vars: null
      };
    }, [
      A
    ]);
    return t ? V(dh, {
      theme: t,
      ...e
    }) : V(gh, {
      theme: A,
      ...e
    });
  };
  ph = function(A) {
    return V(Nu, {
      ...A,
      defaultTheme: Ms,
      themeId: qe
    });
  };
  function Bh(A) {
    return function(t) {
      return V(ph, {
        styles: typeof A == "function" ? (r) => A({
          theme: r,
          ...t
        }) : A
      });
    };
  }
  function hh() {
    return Gu;
  }
  WA = yB;
  NA = function(A) {
    return vB(A);
  };
  function wh(A) {
    return DA("MuiSvgIcon", A);
  }
  LA("MuiSvgIcon", [
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
  let mh, Ch;
  mh = (A) => {
    const { color: e, fontSize: t, classes: r } = A, n = {
      root: [
        "root",
        e !== "inherit" && `color${mA(e)}`,
        `fontSize${mA(t)}`
      ]
    };
    return MA(n, wh, r);
  };
  Ch = dA("svg", {
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
  })(WA(({ theme: A }) => {
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
  Ia = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiSvgIcon"
    }), { children: n, className: o, color: i = "inherit", component: a = "svg", fontSize: s = "medium", htmlColor: l, inheritViewBox: c = false, titleAccess: u, viewBox: d = "0 0 24 24", ...g } = r, p = Ee(n) && n.type === "svg", B = {
      ...r,
      color: i,
      component: a,
      fontSize: s,
      instanceFontSize: e.fontSize,
      inheritViewBox: c,
      viewBox: d,
      hasSvgAsChild: p
    }, y = {};
    c || (y.viewBox = d);
    const h = mh(B);
    return ue(Ch, {
      as: a,
      className: wA(h.root, o),
      focusable: "false",
      color: l,
      "aria-hidden": u ? void 0 : true,
      role: u ? "img" : void 0,
      ref: t,
      ...y,
      ...g,
      ...p && n.props,
      ownerState: B,
      children: [
        p ? n.props.children : n,
        u ? V("title", {
          children: u
        }) : null
      ]
    });
  });
  Ia.muiName = "SvgIcon";
  vh = function(A, e) {
    function t(r, n) {
      return V(Ia, {
        "data-testid": `${e}Icon`,
        ref: n,
        ...r,
        children: A
      });
    }
    return t.muiName = Ia.muiName, gu(CA(t));
  };
  Qh = function(A, e) {
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
  pd = function(A, e) {
    if (A == null) return {};
    var t = {};
    for (var r in A) if ({}.hasOwnProperty.call(A, r)) {
      if (e.indexOf(r) !== -1) continue;
      t[r] = A[r];
    }
    return t;
  };
  function Sa(A, e) {
    return Sa = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
      return t.__proto__ = r, t;
    }, Sa(A, e);
  }
  Bd = function(A, e) {
    A.prototype = Object.create(e.prototype), A.prototype.constructor = A, Sa(A, e);
  };
  const Dl = {
    disabled: false
  }, bo = E.createContext(null);
  let Vr, Mt, Pt, fr, xa;
  yh = function(e) {
    return e.scrollTop;
  };
  Vr = "unmounted";
  Mt = "exited";
  Pt = "entering";
  fr = "entered";
  xa = "exiting";
  rt = (function(A) {
    Bd(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = n, a = i && !i.isMounting ? r.enter : r.appear, s;
      return o.appearStatus = null, r.in ? a ? (s = Mt, o.appearStatus = Pt) : s = fr : r.unmountOnExit || r.mountOnEnter ? s = Vr : s = Mt, o.state = {
        status: s
      }, o.nextCallback = null, o;
    }
    e.getDerivedStateFromProps = function(n, o) {
      var i = n.in;
      return i && o.status === Vr ? {
        status: Mt
      } : null;
    };
    var t = e.prototype;
    return t.componentDidMount = function() {
      this.updateStatus(true, this.appearStatus);
    }, t.componentDidUpdate = function(n) {
      var o = null;
      if (n !== this.props) {
        var i = this.state.status;
        this.props.in ? i !== Pt && i !== fr && (o = Pt) : (i === Pt || i === fr) && (o = xa);
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
      if (n === void 0 && (n = false), o !== null) if (this.cancelNextCallback(), o === Pt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var i = this.props.nodeRef ? this.props.nodeRef.current : Hn.findDOMNode(this);
          i && yh(i);
        }
        this.performEnter(n);
      } else this.performExit();
      else this.props.unmountOnExit && this.state.status === Mt && this.setState({
        status: Vr
      });
    }, t.performEnter = function(n) {
      var o = this, i = this.props.enter, a = this.context ? this.context.isMounting : n, s = this.props.nodeRef ? [
        a
      ] : [
        Hn.findDOMNode(this),
        a
      ], l = s[0], c = s[1], u = this.getTimeouts(), d = a ? u.appear : u.enter;
      if (!n && !i || Dl.disabled) {
        this.safeSetState({
          status: fr
        }, function() {
          o.props.onEntered(l);
        });
        return;
      }
      this.props.onEnter(l, c), this.safeSetState({
        status: Pt
      }, function() {
        o.props.onEntering(l, c), o.onTransitionEnd(d, function() {
          o.safeSetState({
            status: fr
          }, function() {
            o.props.onEntered(l, c);
          });
        });
      });
    }, t.performExit = function() {
      var n = this, o = this.props.exit, i = this.getTimeouts(), a = this.props.nodeRef ? void 0 : Hn.findDOMNode(this);
      if (!o || Dl.disabled) {
        this.safeSetState({
          status: Mt
        }, function() {
          n.props.onExited(a);
        });
        return;
      }
      this.props.onExit(a), this.safeSetState({
        status: xa
      }, function() {
        n.props.onExiting(a), n.onTransitionEnd(i.exit, function() {
          n.safeSetState({
            status: Mt
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
      var i = this.props.nodeRef ? this.props.nodeRef.current : Hn.findDOMNode(this), a = n == null && !this.props.addEndListener;
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
      if (n === Vr) return null;
      var o = this.props, i = o.children;
      o.in, o.mountOnEnter, o.unmountOnExit, o.appear, o.enter, o.exit, o.timeout, o.addEndListener, o.onEnter, o.onEntering, o.onEntered, o.onExit, o.onExiting, o.onExited, o.nodeRef;
      var a = pd(o, [
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
      return E.createElement(bo.Provider, {
        value: null
      }, typeof i == "function" ? i(n, a) : E.cloneElement(E.Children.only(i), a));
    }, e;
  })(E.Component);
  rt.contextType = bo;
  rt.propTypes = {};
  function or() {
  }
  rt.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: or,
    onEntering: or,
    onEntered: or,
    onExit: or,
    onExiting: or,
    onExited: or
  };
  rt.UNMOUNTED = Vr;
  rt.EXITED = Mt;
  rt.ENTERING = Pt;
  rt.ENTERED = fr;
  rt.EXITING = xa;
  function bh(A) {
    if (A === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return A;
  }
  function _s(A, e) {
    var t = function(o) {
      return e && Ee(o) ? e(o) : o;
    }, r = /* @__PURE__ */ Object.create(null);
    return A && jt.map(A, function(n) {
      return n;
    }).forEach(function(n) {
      r[n.key] = t(n);
    }), r;
  }
  function Fh(A, e) {
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
  function Wt(A, e, t) {
    return t[e] != null ? t[e] : A.props[e];
  }
  function Uh(A, e) {
    return _s(A.children, function(t) {
      return Ke(t, {
        onExited: e.bind(null, t),
        in: true,
        appear: Wt(t, "appear", A),
        enter: Wt(t, "enter", A),
        exit: Wt(t, "exit", A)
      });
    });
  }
  function Eh(A, e, t) {
    var r = _s(A.children), n = Fh(e, r);
    return Object.keys(n).forEach(function(o) {
      var i = n[o];
      if (Ee(i)) {
        var a = o in e, s = o in r, l = e[o], c = Ee(l) && !l.props.in;
        s && (!a || c) ? n[o] = Ke(i, {
          onExited: t.bind(null, i),
          in: true,
          exit: Wt(i, "exit", A),
          enter: Wt(i, "enter", A)
        }) : !s && a && !c ? n[o] = Ke(i, {
          in: false
        }) : s && a && Ee(l) && (n[o] = Ke(i, {
          onExited: t.bind(null, i),
          in: l.props.in,
          exit: Wt(i, "exit", A),
          enter: Wt(i, "enter", A)
        }));
      }
    }), n;
  }
  let Ih, Sh;
  Ih = Object.values || function(A) {
    return Object.keys(A).map(function(e) {
      return A[e];
    });
  };
  Sh = {
    component: "div",
    childFactory: function(e) {
      return e;
    }
  };
  Ns = (function(A) {
    Bd(e, A);
    function e(r, n) {
      var o;
      o = A.call(this, r, n) || this;
      var i = o.handleExited.bind(bh(o));
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
        children: s ? Uh(n, a) : Eh(n, i, a),
        firstRender: false
      };
    }, t.handleExited = function(n, o) {
      var i = _s(this.props.children);
      n.key in i || (n.props.onExited && n.props.onExited(o), this.mounted && this.setState(function(a) {
        var s = vo({}, a.children);
        return delete s[n.key], {
          children: s
        };
      }));
    }, t.render = function() {
      var n = this.props, o = n.component, i = n.childFactory, a = pd(n, [
        "component",
        "childFactory"
      ]), s = this.state.contextValue, l = Ih(this.state.children).map(i);
      return delete a.appear, delete a.enter, delete a.exit, o === null ? E.createElement(bo.Provider, {
        value: s
      }, l) : E.createElement(bo.Provider, {
        value: s
      }, E.createElement(o, a, l));
    }, e;
  })(E.Component);
  Ns.propTypes = {};
  Ns.defaultProps = Sh;
  const hd = (A) => A.scrollTop;
  Fo = function(A, e) {
    const { timeout: t, easing: r, style: n = {} } = A;
    return {
      duration: n.transitionDuration ?? (typeof t == "number" ? t : t[e.mode] || 0),
      easing: n.transitionTimingFunction ?? (typeof r == "object" ? r[e.mode] : r),
      delay: n.transitionDelay
    };
  };
  function xh(A) {
    return DA("MuiPaper", A);
  }
  LA("MuiPaper", [
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
  let Hh, Th;
  Hh = (A) => {
    const { square: e, elevation: t, variant: r, classes: n } = A, o = {
      root: [
        "root",
        r,
        !e && "rounded",
        r === "elevation" && `elevation${t}`
      ]
    };
    return MA(o, xh, n);
  };
  Th = dA("div", {
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
  })(WA(({ theme: A }) => ({
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
  Lh = CA(function(e, t) {
    var _a2;
    const r = NA({
      props: e,
      name: "MuiPaper"
    }), n = Ps(), { className: o, component: i = "div", elevation: a = 1, square: s = false, variant: l = "elevation", ...c } = r, u = {
      ...r,
      component: i,
      elevation: a,
      square: s,
      variant: l
    }, d = Hh(u);
    return V(Th, {
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
            "--Paper-overlay": `linear-gradient(${fn("#fff", Ea(a))}, ${fn("#fff", Ea(a))})`
          }
        },
        ...c.style
      }
    });
  });
  Be = function(A, e) {
    const { className: t, elementType: r, ownerState: n, externalForwardedProps: o, internalForwardedProps: i, shouldForwardComponentProp: a = false, ...s } = e, { component: l, slots: c = {
      [A]: void 0
    }, slotProps: u = {
      [A]: void 0
    }, ...d } = o, g = c[A] || r, p = td(u[A], n), { props: { component: B, ...y }, internalRef: h } = ed({
      className: t,
      ...s,
      externalForwardedProps: A === "root" ? d : void 0,
      externalSlotProps: p
    }), b = be(h, p == null ? void 0 : p.ref, e.ref), m = A === "root" ? B || l : B, v = qu(g, {
      ...A === "root" && !l && !c[A] && i,
      ...A !== "root" && !c[A] && i,
      ...y,
      ...m && !a && {
        as: m
      },
      ...m && a && {
        component: m
      },
      ref: b
    }, n);
    return [
      g,
      v
    ];
  };
  class Uo {
    static create() {
      return new Uo();
    }
    static use() {
      const e = zu(Uo.create).current, [t, r] = BA(false);
      return e.shouldMount = t, e.setShouldMount = r, gA(e.mountEffect, [
        t
      ]), e;
    }
    constructor() {
      this.ref = {
        current: null
      }, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
    }
    mount() {
      return this.mounted || (this.mounted = Oh(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
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
  function kh() {
    return Uo.use();
  }
  function Oh() {
    let A, e;
    const t = new Promise((r, n) => {
      A = r, e = n;
    });
    return t.resolve = A, t.reject = e, t;
  }
  function Kh(A) {
    const { className: e, classes: t, pulsate: r = false, rippleX: n, rippleY: o, rippleSize: i, in: a, onExited: s, timeout: l } = A, [c, u] = BA(false), d = wA(e, t.ripple, t.rippleVisible, r && t.ripplePulsate), g = {
      width: i,
      height: i,
      top: -(i / 2) + o,
      left: -(i / 2) + n
    }, p = wA(t.child, c && t.childLeaving, r && t.childPulsate);
    return !a && !c && u(true), gA(() => {
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
    ]), V("span", {
      className: d,
      style: g,
      children: V("span", {
        className: p
      })
    });
  }
  const He = LA("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate"
  ]), Ha = 550, Rh = 80, Dh = Qn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Mh = Qn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Ph = Qn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, _h = dA("span", {
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
  }), Nh = dA(Kh, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })`
  opacity: 0;
  position: absolute;

  &.${He.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Dh};
    animation-duration: ${Ha}ms;
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
    animation-name: ${Mh};
    animation-duration: ${Ha}ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
  }

  & .${He.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Ph};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: A }) => A.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Gh = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiTouchRipple"
    }), { center: n = false, classes: o = {}, className: i, ...a } = r, [s, l] = BA([]), c = oA(0), u = oA(null);
    gA(() => {
      u.current && (u.current(), u.current = null);
    }, [
      s
    ]);
    const d = oA(false), g = ju(), p = oA(null), B = oA(null), y = RA((v) => {
      const { pulsate: U, rippleX: C, rippleY: I, rippleSize: S, cb: x } = v;
      l((f) => [
        ...f,
        V(Nh, {
          classes: {
            ripple: wA(o.ripple, He.ripple),
            rippleVisible: wA(o.rippleVisible, He.rippleVisible),
            ripplePulsate: wA(o.ripplePulsate, He.ripplePulsate),
            child: wA(o.child, He.child),
            childLeaving: wA(o.childLeaving, He.childLeaving),
            childPulsate: wA(o.childPulsate, He.childPulsate)
          },
          timeout: Ha,
          pulsate: U,
          rippleX: C,
          rippleY: I,
          rippleSize: S
        }, c.current)
      ]), c.current += 1, u.current = x;
    }, [
      o
    ]), h = RA((v = {}, U = {}, C = () => {
    }) => {
      const { pulsate: I = false, center: S = n || U.pulsate, fakeElement: x = false } = U;
      if ((v == null ? void 0 : v.type) === "mousedown" && d.current) {
        d.current = false;
        return;
      }
      (v == null ? void 0 : v.type) === "touchstart" && (d.current = true);
      const f = x ? null : B.current, H = f ? f.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };
      let K, k, N;
      if (S || v === void 0 || v.clientX === 0 && v.clientY === 0 || !v.clientX && !v.touches) K = Math.round(H.width / 2), k = Math.round(H.height / 2);
      else {
        const { clientX: O, clientY: R } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
        K = Math.round(O - H.left), k = Math.round(R - H.top);
      }
      if (S) N = Math.sqrt((2 * H.width ** 2 + H.height ** 2) / 3), N % 2 === 0 && (N += 1);
      else {
        const O = Math.max(Math.abs((f ? f.clientWidth : 0) - K), K) * 2 + 2, R = Math.max(Math.abs((f ? f.clientHeight : 0) - k), k) * 2 + 2;
        N = Math.sqrt(O ** 2 + R ** 2);
      }
      (v == null ? void 0 : v.touches) ? p.current === null && (p.current = () => {
        y({
          pulsate: I,
          rippleX: K,
          rippleY: k,
          rippleSize: N,
          cb: C
        });
      }, g.start(Rh, () => {
        p.current && (p.current(), p.current = null);
      })) : y({
        pulsate: I,
        rippleX: K,
        rippleY: k,
        rippleSize: N,
        cb: C
      });
    }, [
      n,
      y,
      g
    ]), b = RA(() => {
      h({}, {
        pulsate: true
      });
    }, [
      h
    ]), m = RA((v, U) => {
      if (g.clear(), (v == null ? void 0 : v.type) === "touchend" && p.current) {
        p.current(), p.current = null, g.start(0, () => {
          m(v, U);
        });
        return;
      }
      p.current = null, l((C) => C.length > 0 ? C.slice(1) : C), u.current = U;
    }, [
      g
    ]);
    return wn(t, () => ({
      pulsate: b,
      start: h,
      stop: m
    }), [
      b,
      h,
      m
    ]), V(_h, {
      className: wA(He.root, o.root, i),
      ref: B,
      ...a,
      children: V(Ns, {
        component: null,
        exit: true,
        children: s
      })
    });
  });
  function Vh(A) {
    return DA("MuiButtonBase", A);
  }
  let $h, Wh, Xh;
  $h = LA("MuiButtonBase", [
    "root",
    "disabled",
    "focusVisible"
  ]);
  Wh = (A) => {
    const { disabled: e, focusVisible: t, focusVisibleClassName: r, classes: n } = A, i = MA({
      root: [
        "root",
        e && "disabled",
        t && "focusVisible"
      ]
    }, Vh, n);
    return t && r && (i.root += ` ${r}`), i;
  };
  Xh = dA("button", {
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
    [`&.${$h.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  });
  Jh = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiButtonBase"
    }), { action: n, centerRipple: o = false, children: i, className: a, component: s = "button", disabled: l = false, disableRipple: c = false, disableTouchRipple: u = false, focusRipple: d = false, focusVisibleClassName: g, LinkComponent: p = "a", onBlur: B, onClick: y, onContextMenu: h, onDragLeave: b, onFocus: m, onFocusVisible: v, onKeyDown: U, onKeyUp: C, onMouseDown: I, onMouseLeave: S, onMouseUp: x, onTouchEnd: f, onTouchMove: H, onTouchStart: K, tabIndex: k = 0, TouchRippleProps: N, touchRippleRef: O, type: R, ...W } = r, rA = oA(null), D = kh(), X = be(D.ref, O), [q, tA] = BA(false);
    l && q && tA(false), wn(n, () => ({
      focusVisible: () => {
        tA(true), rA.current.focus();
      }
    }), []);
    const T = D.shouldMount && !c && !l;
    gA(() => {
      q && d && !c && D.pulsate();
    }, [
      c,
      d,
      q,
      D
    ]);
    const G = at(D, "start", I, u), _ = at(D, "stop", h, u), Y = at(D, "stop", b, u), uA = at(D, "stop", x, u), iA = at(D, "stop", (Z) => {
      q && Z.preventDefault(), S && S(Z);
    }, u), AA = at(D, "start", K, u), J = at(D, "stop", f, u), nA = at(D, "stop", H, u), aA = at(D, "stop", (Z) => {
      Fl(Z.target) || tA(false), B && B(Z);
    }, false), w = Jt((Z) => {
      rA.current || (rA.current = Z.currentTarget), Fl(Z.target) && (tA(true), v && v(Z)), m && m(Z);
    }), F = () => {
      const Z = rA.current;
      return s && s !== "button" && !(Z.tagName === "A" && Z.href);
    }, Q = Jt((Z) => {
      d && !Z.repeat && q && Z.key === " " && D.stop(Z, () => {
        D.start(Z);
      }), Z.target === Z.currentTarget && F() && Z.key === " " && Z.preventDefault(), U && U(Z), Z.target === Z.currentTarget && F() && Z.key === "Enter" && !l && (Z.preventDefault(), y && y(Z));
    }), M = Jt((Z) => {
      d && Z.key === " " && q && !Z.defaultPrevented && D.stop(Z, () => {
        D.pulsate(Z);
      }), C && C(Z), y && Z.target === Z.currentTarget && F() && Z.key === " " && !Z.defaultPrevented && y(Z);
    });
    let $ = s;
    $ === "button" && (W.href || W.to) && ($ = p);
    const P = {};
    $ === "button" ? (P.type = R === void 0 ? "button" : R, P.disabled = l) : (!W.href && !W.to && (P.role = "button"), l && (P["aria-disabled"] = l));
    const sA = be(t, rA), lA = {
      ...r,
      centerRipple: o,
      component: s,
      disabled: l,
      disableRipple: c,
      disableTouchRipple: u,
      focusRipple: d,
      tabIndex: k,
      focusVisible: q
    }, fA = Wh(lA);
    return ue(Xh, {
      as: $,
      className: wA(fA.root, a),
      ownerState: lA,
      onBlur: aA,
      onClick: y,
      onContextMenu: _,
      onFocus: w,
      onKeyDown: Q,
      onKeyUp: M,
      onMouseDown: G,
      onMouseLeave: iA,
      onMouseUp: uA,
      onDragLeave: Y,
      onTouchEnd: J,
      onTouchMove: nA,
      onTouchStart: AA,
      ref: sA,
      tabIndex: l ? -1 : k,
      type: R,
      ...P,
      ...W,
      children: [
        i,
        T ? V(Gh, {
          ref: X,
          center: o,
          ...N
        }) : null
      ]
    });
  });
  function at(A, e, t, r = false) {
    return Jt((n) => (t && t(n), r || A[e](n), true));
  }
  function Yh(A) {
    return typeof A.main == "string";
  }
  function zh(A, e = []) {
    if (!Yh(A)) return false;
    for (const t of e) if (!A.hasOwnProperty(t) || typeof A[t] != "string") return false;
    return true;
  }
  kt = function(A = []) {
    return ([, e]) => e && zh(e, A);
  };
  function jh(A) {
    return DA("MuiCircularProgress", A);
  }
  LA("MuiCircularProgress", [
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
  let Ct, Ta, La, Zh, qh, A0, e0, t0, r0;
  Ct = 44;
  Ta = Qn`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  La = Qn`
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
  Zh = typeof Ta != "string" ? Cs`
        animation: ${Ta} 1.4s linear infinite;
      ` : null;
  qh = typeof La != "string" ? Cs`
        animation: ${La} 1.4s ease-in-out infinite;
      ` : null;
  A0 = (A) => {
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
    return MA(o, jh, e);
  };
  e0 = dA("span", {
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
  })(WA(({ theme: A }) => ({
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
        style: Zh || {
          animation: `${Ta} 1.4s linear infinite`
        }
      },
      ...Object.entries(A.palette).filter(kt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      }))
    ]
  })));
  t0 = dA("svg", {
    name: "MuiCircularProgress",
    slot: "Svg",
    overridesResolver: (A, e) => e.svg
  })({
    display: "block"
  });
  r0 = dA("circle", {
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
  })(WA(({ theme: A }) => ({
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
        style: qh || {
          animation: `${La} 1.4s ease-in-out infinite`
        }
      }
    ]
  })));
  n0 = CA(function(e, t) {
    const r = NA({
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
    }, p = A0(g), B = {}, y = {}, h = {};
    if (u === "determinate") {
      const b = 2 * Math.PI * ((Ct - l) / 2);
      B.strokeDasharray = b.toFixed(3), h["aria-valuenow"] = Math.round(c), B.strokeDashoffset = `${((100 - c) / 100 * b).toFixed(3)}px`, y.transform = "rotate(-90deg)";
    }
    return V(e0, {
      className: wA(p.root, n),
      style: {
        width: a,
        height: a,
        ...y,
        ...s
      },
      ownerState: g,
      ref: t,
      role: "progressbar",
      ...h,
      ...d,
      children: V(t0, {
        className: p.svg,
        ownerState: g,
        viewBox: `${Ct / 2} ${Ct / 2} ${Ct} ${Ct}`,
        children: V(r0, {
          className: p.circle,
          style: B,
          ownerState: g,
          cx: Ct,
          cy: Ct,
          r: (Ct - l) / 2,
          fill: "none",
          strokeWidth: l
        })
      })
    });
  });
  function o0(A) {
    return DA("MuiIconButton", A);
  }
  let Ml, i0, a0, s0;
  Ml = LA("MuiIconButton", [
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
  i0 = (A) => {
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
    return MA(a, o0, e);
  };
  a0 = dA(Jh, {
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
  })(WA(({ theme: A }) => ({
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
          "--IconButton-hoverBg": A.vars ? `rgba(${A.vars.palette.action.activeChannel} / ${A.vars.palette.action.hoverOpacity})` : fn(A.palette.action.active, A.palette.action.hoverOpacity),
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
  })), WA(({ theme: A }) => ({
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      ...Object.entries(A.palette).filter(kt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          color: (A.vars || A).palette[e].main
        }
      })),
      ...Object.entries(A.palette).filter(kt()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          "--IconButton-hoverBg": A.vars ? `rgba(${(A.vars || A).palette[e].mainChannel} / ${A.vars.palette.action.hoverOpacity})` : fn((A.vars || A).palette[e].main, A.palette.action.hoverOpacity)
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
  s0 = dA("span", {
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
  NU = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiIconButton"
    }), { edge: n = false, children: o, className: i, color: a = "default", disabled: s = false, disableFocusRipple: l = false, size: c = "medium", id: u, loading: d = null, loadingIndicator: g, ...p } = r, B = Ci(u), y = g ?? V(n0, {
      "aria-labelledby": B,
      color: "inherit",
      size: 16
    }), h = {
      ...r,
      edge: n,
      color: a,
      disabled: s,
      disableFocusRipple: l,
      loading: d,
      loadingIndicator: y,
      size: c
    }, b = i0(h);
    return ue(a0, {
      id: d ? B : u,
      className: wA(b.root, i),
      centerRipple: true,
      focusRipple: !l,
      disabled: s || d,
      ref: t,
      ...p,
      ownerState: h,
      children: [
        typeof d == "boolean" && V("span", {
          className: b.loadingWrapper,
          style: {
            display: "contents"
          },
          children: V(s0, {
            className: b.loadingIndicator,
            ownerState: h,
            children: d && y
          })
        }),
        o
      ]
    });
  });
  function l0(A) {
    return DA("MuiTypography", A);
  }
  let c0, u0, d0, f0, Pl;
  GU = LA("MuiTypography", [
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
  c0 = {
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
  u0 = hh();
  d0 = (A) => {
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
    return MA(a, l0, i);
  };
  f0 = dA("span", {
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
  })(WA(({ theme: A }) => {
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
        ...Object.entries(A.palette).filter(kt()).map(([e]) => ({
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
  Pl = {
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
  VU = CA(function(e, t) {
    const { color: r, ...n } = NA({
      props: e,
      name: "MuiTypography"
    }), o = !c0[r], i = u0({
      ...n,
      ...o && {
        color: r
      }
    }), { align: a = "inherit", className: s, component: l, gutterBottom: c = false, noWrap: u = false, paragraph: d = false, variant: g = "body1", variantMapping: p = Pl, ...B } = i, y = {
      ...i,
      align: a,
      color: r,
      className: s,
      component: l,
      gutterBottom: c,
      noWrap: u,
      paragraph: d,
      variant: g,
      variantMapping: p
    }, h = l || (d ? "p" : p[g] || Pl[g]) || "span", b = d0(y);
    return V(f0, {
      as: h,
      ref: t,
      className: wA(b.root, s),
      ...B,
      ownerState: y,
      style: {
        ...a !== "inherit" && {
          "--Typography-textAlign": a
        },
        ...B.style
      }
    });
  });
  function g0(A) {
    return typeof A == "function" ? A() : A;
  }
  p0 = CA(function(e, t) {
    const { children: r, container: n, disablePortal: o = false } = e, [i, a] = BA(null), s = be(Ee(r) ? Un(r) : null, t);
    return gt(() => {
      o || a(g0(n) || document.body);
    }, [
      n,
      o
    ]), gt(() => {
      if (i && !o) return Cl(t, i), () => {
        Cl(t, null);
      };
    }, [
      t,
      i,
      o
    ]), o ? Ee(r) ? Ke(r, {
      ref: s
    }) : r : i && pu(r, i);
  });
  function Rn(A) {
    return parseInt(A, 10) || 0;
  }
  const B0 = {
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
  function h0(A) {
    for (const e in A) return false;
    return true;
  }
  function _l(A) {
    return h0(A) || A.outerHeightStyle === 0 && !A.overflowing;
  }
  const w0 = CA(function(e, t) {
    const { onChange: r, maxRows: n, minRows: o = 1, style: i, value: a, ...s } = e, { current: l } = oA(a != null), c = oA(null), u = be(t, c), d = oA(null), g = oA(null), p = RA(() => {
      const m = c.current, v = g.current;
      if (!m || !v) return;
      const C = pt(m).getComputedStyle(m);
      if (C.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      v.style.width = C.width, v.value = m.value || e.placeholder || "x", v.value.slice(-1) === `
` && (v.value += " ");
      const I = C.boxSizing, S = Rn(C.paddingBottom) + Rn(C.paddingTop), x = Rn(C.borderBottomWidth) + Rn(C.borderTopWidth), f = v.scrollHeight;
      v.value = "x";
      const H = v.scrollHeight;
      let K = f;
      o && (K = Math.max(Number(o) * H, K)), n && (K = Math.min(Number(n) * H, K)), K = Math.max(K, H);
      const k = K + (I === "border-box" ? S + x : 0), N = Math.abs(K - f) <= 1;
      return {
        outerHeightStyle: k,
        overflowing: N
      };
    }, [
      n,
      o,
      e.placeholder
    ]), B = Jt(() => {
      const m = c.current, v = p();
      if (!m || !v || _l(v)) return false;
      const U = v.outerHeightStyle;
      return d.current != null && d.current !== U;
    }), y = RA(() => {
      const m = c.current, v = p();
      if (!m || !v || _l(v)) return;
      const U = v.outerHeightStyle;
      d.current !== U && (d.current = U, m.style.height = `${U}px`), m.style.overflow = v.overflowing ? "hidden" : "";
    }, [
      p
    ]), h = oA(-1);
    return gt(() => {
      const m = Yu(y), v = c == null ? void 0 : c.current;
      if (!v) return;
      const U = pt(v);
      U.addEventListener("resize", m);
      let C;
      return typeof ResizeObserver < "u" && (C = new ResizeObserver(() => {
        B() && (C.unobserve(v), cancelAnimationFrame(h.current), y(), h.current = requestAnimationFrame(() => {
          C.observe(v);
        }));
      }), C.observe(v)), () => {
        m.clear(), cancelAnimationFrame(h.current), U.removeEventListener("resize", m), C && C.disconnect();
      };
    }, [
      p,
      y,
      B
    ]), gt(() => {
      y();
    }), ue(et, {
      children: [
        V("textarea", {
          value: a,
          onChange: (m) => {
            l || y(), r && r(m);
          },
          ref: u,
          rows: o,
          style: i,
          ...s
        }),
        V("textarea", {
          "aria-hidden": true,
          className: e.className,
          readOnly: true,
          ref: g,
          tabIndex: -1,
          style: {
            ...B0.shadow,
            ...i,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  ka = function(A) {
    return typeof A == "string";
  };
  Ir = function({ props: A, states: e, muiFormControl: t }) {
    return e.reduce((r, n) => (r[n] = A[n], t && typeof A[n] > "u" && (r[n] = t[n]), r), {});
  };
  Gs = wt(void 0);
  Sr = function() {
    return De(Gs);
  };
  function Nl(A) {
    return A != null && !(Array.isArray(A) && A.length === 0);
  }
  function Eo(A, e = false) {
    return A && (Nl(A.value) && A.value !== "" || e && Nl(A.defaultValue) && A.defaultValue !== "");
  }
  function m0(A) {
    return A.startAdornment;
  }
  function C0(A) {
    return DA("MuiInputBase", A);
  }
  yr = LA("MuiInputBase", [
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
  var Gl;
  let vi, Qi, v0, yi, bi, Vl;
  vi = (A, e) => {
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
  Qi = (A, e) => {
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
  v0 = (A) => {
    const { classes: e, color: t, disabled: r, error: n, endAdornment: o, focused: i, formControl: a, fullWidth: s, hiddenLabel: l, multiline: c, readOnly: u, size: d, startAdornment: g, type: p } = A, B = {
      root: [
        "root",
        `color${mA(t)}`,
        r && "disabled",
        n && "error",
        s && "fullWidth",
        i && "focused",
        a && "formControl",
        d && d !== "medium" && `size${mA(d)}`,
        c && "multiline",
        g && "adornedStart",
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
        g && "inputAdornedStart",
        o && "inputAdornedEnd",
        u && "readOnly"
      ]
    };
    return MA(B, C0, e);
  };
  yi = dA("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: vi
  })(WA(({ theme: A }) => ({
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
  })));
  bi = dA("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Qi
  })(WA(({ theme: A }) => {
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
  }));
  Vl = Bh({
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
  Vs = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiInputBase"
    }), { "aria-describedby": n, autoComplete: o, autoFocus: i, className: a, color: s, components: l = {}, componentsProps: c = {}, defaultValue: u, disabled: d, disableInjectingGlobalStyles: g, endAdornment: p, error: B, fullWidth: y = false, id: h, inputComponent: b = "input", inputProps: m = {}, inputRef: v, margin: U, maxRows: C, minRows: I, multiline: S = false, name: x, onBlur: f, onChange: H, onClick: K, onFocus: k, onKeyDown: N, onKeyUp: O, placeholder: R, readOnly: W, renderSuffix: rA, rows: D, size: X, slotProps: q = {}, slots: tA = {}, startAdornment: T, type: G = "text", value: _, ...Y } = r, uA = m.value != null ? m.value : _, { current: iA } = oA(uA != null), AA = oA(), J = RA((kA) => {
    }, []), nA = be(AA, v, m.ref, J), [aA, w] = BA(false), F = Sr(), Q = Ir({
      props: r,
      muiFormControl: F,
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
    Q.focused = F ? F.focused : aA, gA(() => {
      !F && d && aA && (w(false), f && f());
    }, [
      F,
      d,
      aA,
      f
    ]);
    const M = F && F.onFilled, $ = F && F.onEmpty, P = RA((kA) => {
      Eo(kA) ? M && M() : $ && $();
    }, [
      M,
      $
    ]);
    gt(() => {
      iA && P({
        value: uA
      });
    }, [
      uA,
      P,
      iA
    ]);
    const sA = (kA) => {
      k && k(kA), m.onFocus && m.onFocus(kA), F && F.onFocus ? F.onFocus(kA) : w(true);
    }, lA = (kA) => {
      f && f(kA), m.onBlur && m.onBlur(kA), F && F.onBlur ? F.onBlur(kA) : w(false);
    }, fA = (kA, ...Zt) => {
      if (!iA) {
        const Hr = kA.target || AA.current;
        if (Hr == null) throw new Error(dt(1));
        P({
          value: Hr.value
        });
      }
      m.onChange && m.onChange(kA, ...Zt), H && H(kA, ...Zt);
    };
    gA(() => {
      P(AA.current);
    }, []);
    const Z = (kA) => {
      AA.current && kA.currentTarget === kA.target && AA.current.focus(), K && K(kA);
    };
    let ne = b, pA = m;
    S && ne === "input" && (D ? pA = {
      type: void 0,
      minRows: D,
      maxRows: D,
      ...pA
    } : pA = {
      type: void 0,
      maxRows: C,
      minRows: I,
      ...pA
    }, ne = w0);
    const GA = (kA) => {
      P(kA.animationName === "mui-auto-fill-cancel" ? AA.current : {
        value: "x"
      });
    };
    gA(() => {
      F && F.setAdornedStart(!!T);
    }, [
      F,
      T
    ]);
    const jA = {
      ...r,
      color: Q.color || "primary",
      disabled: Q.disabled,
      endAdornment: p,
      error: Q.error,
      focused: Q.focused,
      formControl: F,
      fullWidth: y,
      hiddenLabel: Q.hiddenLabel,
      multiline: S,
      size: Q.size,
      startAdornment: T,
      type: G
    }, de = v0(jA), Ae = tA.root || l.Root || yi, mt = q.root || c.root || {}, Kt = tA.input || l.Input || bi;
    return pA = {
      ...pA,
      ...q.input ?? c.input
    }, ue(et, {
      children: [
        !g && typeof Vl == "function" && (Gl || (Gl = V(Vl, {}))),
        ue(Ae, {
          ...mt,
          ref: t,
          onClick: Z,
          ...Y,
          ...!ka(Ae) && {
            ownerState: {
              ...jA,
              ...mt.ownerState
            }
          },
          className: wA(de.root, mt.className, a, W && "MuiInputBase-readOnly"),
          children: [
            T,
            V(Gs.Provider, {
              value: null,
              children: V(Kt, {
                "aria-invalid": Q.error,
                "aria-describedby": n,
                autoComplete: o,
                autoFocus: i,
                defaultValue: u,
                disabled: Q.disabled,
                id: h,
                onAnimationStart: GA,
                name: x,
                placeholder: R,
                readOnly: W,
                required: Q.required,
                rows: D,
                value: uA,
                onKeyDown: N,
                onKeyUp: O,
                type: G,
                ...pA,
                ...!ka(Kt) && {
                  as: ne,
                  ownerState: {
                    ...jA,
                    ...pA.ownerState
                  }
                },
                ref: nA,
                className: wA(de.input, pA.className, W && "MuiInputBase-readOnly"),
                onBlur: lA,
                onChange: fA,
                onFocus: sA
              })
            }),
            p,
            rA ? rA({
              ...Q,
              startAdornment: T
            }) : null
          ]
        })
      ]
    });
  });
  function Q0(A) {
    return DA("MuiInput", A);
  }
  kr = {
    ...yr,
    ...LA("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function y0(A) {
    return DA("MuiOutlinedInput", A);
  }
  $e = {
    ...yr,
    ...LA("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function b0(A) {
    return DA("MuiFilledInput", A);
  }
  let U0;
  Rt = {
    ...yr,
    ...LA("MuiFilledInput", [
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
  F0 = vh(V("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  U0 = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };
  E0 = CA(function(e, t) {
    const r = Ps(), n = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { addEndListener: o, appear: i = true, children: a, easing: s, in: l, onEnter: c, onEntered: u, onEntering: d, onExit: g, onExited: p, onExiting: B, style: y, timeout: h = n, TransitionComponent: b = rt, ...m } = e, v = oA(null), U = be(v, Un(a), t), C = (N) => (O) => {
      if (N) {
        const R = v.current;
        O === void 0 ? N(R) : N(R, O);
      }
    }, I = C(d), S = C((N, O) => {
      hd(N);
      const R = Fo({
        style: y,
        timeout: h,
        easing: s
      }, {
        mode: "enter"
      });
      N.style.webkitTransition = r.transitions.create("opacity", R), N.style.transition = r.transitions.create("opacity", R), c && c(N, O);
    }), x = C(u), f = C(B), H = C((N) => {
      const O = Fo({
        style: y,
        timeout: h,
        easing: s
      }, {
        mode: "exit"
      });
      N.style.webkitTransition = r.transitions.create("opacity", O), N.style.transition = r.transitions.create("opacity", O), g && g(N);
    }), K = C(p);
    return V(b, {
      appear: i,
      in: l,
      nodeRef: v,
      onEnter: S,
      onEntered: x,
      onEntering: I,
      onExit: H,
      onExited: K,
      onExiting: f,
      addEndListener: (N) => {
        o && o(v.current, N);
      },
      timeout: h,
      ...m,
      children: (N, { ownerState: O, ...R }) => Ke(a, {
        style: {
          opacity: 0,
          visibility: N === "exited" && !l ? "hidden" : void 0,
          ...U0[N],
          ...y,
          ...a.props.style
        },
        ref: U,
        ...R
      })
    });
  });
  function I0(A) {
    return DA("MuiBackdrop", A);
  }
  LA("MuiBackdrop", [
    "root",
    "invisible"
  ]);
  let S0, x0, T0, L0;
  S0 = (A) => {
    const { classes: e, invisible: t } = A;
    return MA({
      root: [
        "root",
        t && "invisible"
      ]
    }, I0, e);
  };
  x0 = dA("div", {
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
  H0 = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiBackdrop"
    }), { children: n, className: o, component: i = "div", invisible: a = false, open: s, components: l = {}, componentsProps: c = {}, slotProps: u = {}, slots: d = {}, TransitionComponent: g, transitionDuration: p, ...B } = r, y = {
      ...r,
      component: i,
      invisible: a
    }, h = S0(y), b = {
      transition: g,
      root: l.Root,
      ...d
    }, m = {
      ...c,
      ...u
    }, v = {
      slots: b,
      slotProps: m
    }, [U, C] = Be("root", {
      elementType: x0,
      externalForwardedProps: v,
      className: wA(h.root, o),
      ownerState: y
    }), [I, S] = Be("transition", {
      elementType: E0,
      externalForwardedProps: v,
      ownerState: y
    });
    return V(I, {
      in: s,
      timeout: p,
      ...B,
      ...S,
      children: V(U, {
        "aria-hidden": true,
        ...C,
        classes: h,
        ref: t,
        children: n
      })
    });
  });
  T0 = LA("MuiBox", [
    "root"
  ]);
  L0 = Ds();
  $l = Wp({
    themeId: qe,
    defaultTheme: L0,
    defaultClassName: T0.root,
    generateClassName: Vu.generate
  });
  function k0(A) {
    const e = Ne(A);
    return e.body === A ? pt(A).innerWidth > e.documentElement.clientWidth : A.scrollHeight > A.clientHeight;
  }
  function An(A, e) {
    e ? A.setAttribute("aria-hidden", "true") : A.removeAttribute("aria-hidden");
  }
  function Wl(A) {
    return parseInt(pt(A).getComputedStyle(A).paddingRight, 10) || 0;
  }
  function O0(A) {
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
  function Xl(A, e, t, r, n) {
    const o = [
      e,
      t,
      ...r
    ];
    [].forEach.call(A.children, (i) => {
      const a = !o.includes(i), s = !O0(i);
      a && s && An(i, n);
    });
  }
  function Vi(A, e) {
    let t = -1;
    return A.some((r, n) => e(r) ? (t = n, true) : false), t;
  }
  function K0(A, e) {
    const t = [], r = A.container;
    if (!e.disableScrollLock) {
      if (k0(r)) {
        const i = Zu(pt(r));
        t.push({
          value: r.style.paddingRight,
          property: "padding-right",
          el: r
        }), r.style.paddingRight = `${Wl(r) + i}px`;
        const a = Ne(r).querySelectorAll(".mui-fixed");
        [].forEach.call(a, (s) => {
          t.push({
            value: s.style.paddingRight,
            property: "padding-right",
            el: s
          }), s.style.paddingRight = `${Wl(s) + i}px`;
        });
      }
      let o;
      if (r.parentNode instanceof DocumentFragment) o = Ne(r).body;
      else {
        const i = r.parentElement, a = pt(r);
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
  function R0(A) {
    const e = [];
    return [].forEach.call(A.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }), e;
  }
  class D0 {
    constructor() {
      this.modals = [], this.containers = [];
    }
    add(e, t) {
      let r = this.modals.indexOf(e);
      if (r !== -1) return r;
      r = this.modals.length, this.modals.push(e), e.modalRef && An(e.modalRef, false);
      const n = R0(t);
      Xl(t, e.mount, e.modalRef, n, true);
      const o = Vi(this.containers, (i) => i.container === t);
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
      const r = Vi(this.containers, (o) => o.modals.includes(e)), n = this.containers[r];
      n.restore || (n.restore = K0(n, t));
    }
    remove(e, t = true) {
      const r = this.modals.indexOf(e);
      if (r === -1) return r;
      const n = Vi(this.containers, (i) => i.modals.includes(e)), o = this.containers[n];
      if (o.modals.splice(o.modals.indexOf(e), 1), this.modals.splice(r, 1), o.modals.length === 0) o.restore && o.restore(), e.modalRef && An(e.modalRef, t), Xl(o.container, e.mount, e.modalRef, o.hiddenSiblings, false), this.containers.splice(n, 1);
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
  function P0(A) {
    const e = parseInt(A.getAttribute("tabindex") || "", 10);
    return Number.isNaN(e) ? A.contentEditable === "true" || (A.nodeName === "AUDIO" || A.nodeName === "VIDEO" || A.nodeName === "DETAILS") && A.getAttribute("tabindex") === null ? 0 : A.tabIndex : e;
  }
  function _0(A) {
    if (A.tagName !== "INPUT" || A.type !== "radio" || !A.name) return false;
    const e = (r) => A.ownerDocument.querySelector(`input[type="radio"]${r}`);
    let t = e(`[name="${A.name}"]:checked`);
    return t || (t = e(`[name="${A.name}"]`)), t !== A;
  }
  function N0(A) {
    return !(A.disabled || A.tagName === "INPUT" && A.type === "hidden" || _0(A));
  }
  function G0(A) {
    const e = [], t = [];
    return Array.from(A.querySelectorAll(M0)).forEach((r, n) => {
      const o = P0(r);
      o === -1 || !N0(r) || (o === 0 ? e.push(r) : t.push({
        documentOrder: n,
        tabIndex: o,
        node: r
      }));
    }), t.sort((r, n) => r.tabIndex === n.tabIndex ? r.documentOrder - n.documentOrder : r.tabIndex - n.tabIndex).map((r) => r.node).concat(e);
  }
  function V0() {
    return true;
  }
  $0 = function(A) {
    const { children: e, disableAutoFocus: t = false, disableEnforceFocus: r = false, disableRestoreFocus: n = false, getTabbable: o = G0, isEnabled: i = V0, open: a } = A, s = oA(false), l = oA(null), c = oA(null), u = oA(null), d = oA(null), g = oA(false), p = oA(null), B = be(Un(e), p), y = oA(null);
    gA(() => {
      !a || !p.current || (g.current = !t);
    }, [
      t,
      a
    ]), gA(() => {
      if (!a || !p.current) return;
      const m = Ne(p.current);
      return p.current.contains(m.activeElement) || (p.current.hasAttribute("tabIndex") || p.current.setAttribute("tabIndex", "-1"), g.current && p.current.focus()), () => {
        n || (u.current && u.current.focus && (s.current = true, u.current.focus()), u.current = null);
      };
    }, [
      a
    ]), gA(() => {
      if (!a || !p.current) return;
      const m = Ne(p.current), v = (I) => {
        y.current = I, !(r || !i() || I.key !== "Tab") && m.activeElement === p.current && I.shiftKey && (s.current = true, c.current && c.current.focus());
      }, U = () => {
        var _a2, _b2;
        const I = p.current;
        if (I === null) return;
        if (!m.hasFocus() || !i() || s.current) {
          s.current = false;
          return;
        }
        if (I.contains(m.activeElement) || r && m.activeElement !== l.current && m.activeElement !== c.current) return;
        if (m.activeElement !== d.current) d.current = null;
        else if (d.current !== null) return;
        if (!g.current) return;
        let S = [];
        if ((m.activeElement === l.current || m.activeElement === c.current) && (S = o(p.current)), S.length > 0) {
          const x = !!(((_a2 = y.current) == null ? void 0 : _a2.shiftKey) && ((_b2 = y.current) == null ? void 0 : _b2.key) === "Tab"), f = S[0], H = S[S.length - 1];
          typeof f != "string" && typeof H != "string" && (x ? H.focus() : f.focus());
        } else I.focus();
      };
      m.addEventListener("focusin", U), m.addEventListener("keydown", v, true);
      const C = setInterval(() => {
        m.activeElement && m.activeElement.tagName === "BODY" && U();
      }, 50);
      return () => {
        clearInterval(C), m.removeEventListener("focusin", U), m.removeEventListener("keydown", v, true);
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
      const v = e.props.onFocus;
      v && v(m);
    }, b = (m) => {
      u.current === null && (u.current = m.relatedTarget), g.current = true;
    };
    return ue(et, {
      children: [
        V("div", {
          tabIndex: a ? 0 : -1,
          onFocus: b,
          ref: l,
          "data-testid": "sentinelStart"
        }),
        Ke(e, {
          ref: B,
          onFocus: h
        }),
        V("div", {
          tabIndex: a ? 0 : -1,
          onFocus: b,
          ref: c,
          "data-testid": "sentinelEnd"
        })
      ]
    });
  };
  function W0(A) {
    return typeof A == "function" ? A() : A;
  }
  function X0(A) {
    return A ? A.props.hasOwnProperty("in") : false;
  }
  const Jl = () => {
  }, Dn = new D0();
  function J0(A) {
    const { container: e, disableEscapeKeyDown: t = false, disableScrollLock: r = false, closeAfterTransition: n = false, onTransitionEnter: o, onTransitionExited: i, children: a, onClose: s, open: l, rootRef: c } = A, u = oA({}), d = oA(null), g = oA(null), p = be(g, c), [B, y] = BA(!l), h = X0(a);
    let b = true;
    (A["aria-hidden"] === "false" || A["aria-hidden"] === false) && (b = false);
    const m = () => Ne(d.current), v = () => (u.current.modalRef = g.current, u.current.mount = d.current, u.current), U = () => {
      Dn.mount(v(), {
        disableScrollLock: r
      }), g.current && (g.current.scrollTop = 0);
    }, C = Jt(() => {
      const O = W0(e) || m().body;
      Dn.add(v(), O), g.current && U();
    }), I = () => Dn.isTopModal(v()), S = Jt((O) => {
      d.current = O, O && (l && I() ? U() : g.current && An(g.current, b));
    }), x = RA(() => {
      Dn.remove(v(), b);
    }, [
      b
    ]);
    gA(() => () => {
      x();
    }, [
      x
    ]), gA(() => {
      l ? C() : (!h || !n) && x();
    }, [
      l,
      x,
      h,
      n,
      C
    ]);
    const f = (O) => (R) => {
      var _a2;
      (_a2 = O.onKeyDown) == null ? void 0 : _a2.call(O, R), !(R.key !== "Escape" || R.which === 229 || !I()) && (t || (R.stopPropagation(), s && s(R, "escapeKeyDown")));
    }, H = (O) => (R) => {
      var _a2;
      (_a2 = O.onClick) == null ? void 0 : _a2.call(O, R), R.target === R.currentTarget && s && s(R, "backdropClick");
    };
    return {
      getRootProps: (O = {}) => {
        const R = Ad(A);
        delete R.onTransitionEnter, delete R.onTransitionExited;
        const W = {
          ...R,
          ...O
        };
        return {
          role: "presentation",
          ...W,
          onKeyDown: f(W),
          ref: p
        };
      },
      getBackdropProps: (O = {}) => {
        const R = O;
        return {
          "aria-hidden": true,
          ...R,
          onClick: H(R),
          open: l
        };
      },
      getTransitionProps: () => {
        const O = () => {
          y(false), o && o();
        }, R = () => {
          y(true), i && i(), n && x();
        };
        return {
          onEnter: ml(O, (a == null ? void 0 : a.props.onEnter) ?? Jl),
          onExited: ml(R, (a == null ? void 0 : a.props.onExited) ?? Jl)
        };
      },
      rootRef: p,
      portalRef: S,
      isTopModal: I,
      exited: B,
      hasTransition: h
    };
  }
  function Y0(A) {
    return DA("MuiModal", A);
  }
  LA("MuiModal", [
    "root",
    "hidden",
    "backdrop"
  ]);
  let z0, j0, Z0;
  z0 = (A) => {
    const { open: e, exited: t, classes: r } = A;
    return MA({
      root: [
        "root",
        !e && t && "hidden"
      ],
      backdrop: [
        "backdrop"
      ]
    }, Y0, r);
  };
  j0 = dA("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.root,
        !t.open && t.exited && e.hidden
      ];
    }
  })(WA(({ theme: A }) => ({
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
  Z0 = dA(H0, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (A, e) => e.backdrop
  })({
    zIndex: -1
  });
  q0 = CA(function(e, t) {
    const r = NA({
      name: "MuiModal",
      props: e
    }), { BackdropComponent: n = Z0, BackdropProps: o, classes: i, className: a, closeAfterTransition: s = false, children: l, container: c, component: u, components: d = {}, componentsProps: g = {}, disableAutoFocus: p = false, disableEnforceFocus: B = false, disableEscapeKeyDown: y = false, disablePortal: h = false, disableRestoreFocus: b = false, disableScrollLock: m = false, hideBackdrop: v = false, keepMounted: U = false, onBackdropClick: C, onClose: I, onTransitionEnter: S, onTransitionExited: x, open: f, slotProps: H = {}, slots: K = {}, theme: k, ...N } = r, O = {
      ...r,
      closeAfterTransition: s,
      disableAutoFocus: p,
      disableEnforceFocus: B,
      disableEscapeKeyDown: y,
      disablePortal: h,
      disableRestoreFocus: b,
      disableScrollLock: m,
      hideBackdrop: v,
      keepMounted: U
    }, { getRootProps: R, getBackdropProps: W, getTransitionProps: rA, portalRef: D, isTopModal: X, exited: q, hasTransition: tA } = J0({
      ...O,
      rootRef: t
    }), T = {
      ...O,
      exited: q
    }, G = z0(T), _ = {};
    if (l.props.tabIndex === void 0 && (_.tabIndex = "-1"), tA) {
      const { onEnter: nA, onExited: aA } = rA();
      _.onEnter = nA, _.onExited = aA;
    }
    const Y = {
      slots: {
        root: d.Root,
        backdrop: d.Backdrop,
        ...K
      },
      slotProps: {
        ...g,
        ...H
      }
    }, [uA, iA] = Be("root", {
      ref: t,
      elementType: j0,
      externalForwardedProps: {
        ...Y,
        ...N,
        component: u
      },
      getSlotProps: R,
      ownerState: T,
      className: wA(a, G == null ? void 0 : G.root, !T.open && T.exited && (G == null ? void 0 : G.hidden))
    }), [AA, J] = Be("backdrop", {
      ref: o == null ? void 0 : o.ref,
      elementType: n,
      externalForwardedProps: Y,
      shouldForwardComponentProp: true,
      additionalProps: o,
      getSlotProps: (nA) => W({
        ...nA,
        onClick: (aA) => {
          C && C(aA), (nA == null ? void 0 : nA.onClick) && nA.onClick(aA);
        }
      }),
      className: wA(o == null ? void 0 : o.className, G == null ? void 0 : G.backdrop),
      ownerState: T
    });
    return !U && !f && (!tA || q) ? null : V(p0, {
      ref: D,
      container: c,
      disablePortal: h,
      children: ue(uA, {
        ...iA,
        children: [
          !v && n ? V(AA, {
            ...J
          }) : null,
          V($0, {
            disableEnforceFocus: B,
            disableAutoFocus: p,
            disableRestoreFocus: b,
            isEnabled: X,
            open: f,
            children: Ke(l, _)
          })
        ]
      })
    });
  });
  $U = function(A) {
    return DA("MuiDivider", A);
  };
  let Aw, ew, tw, $s;
  WU = LA("MuiDivider", [
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
  Aw = (A) => {
    const { classes: e, disableUnderline: t, startAdornment: r, endAdornment: n, size: o, hiddenLabel: i, multiline: a } = A, s = {
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
    }, l = MA(s, b0, e);
    return {
      ...e,
      ...l
    };
  };
  ew = dA(yi, {
    shouldForwardProp: (A) => tt(A) || A === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...vi(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(WA(({ theme: A }) => {
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
      [`&.${Rt.focused}`]: {
        backgroundColor: A.vars ? A.vars.palette.FilledInput.bg : r
      },
      [`&.${Rt.disabled}`]: {
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
            [`&.${Rt.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Rt.error}`]: {
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
            [`&:hover:not(.${Rt.disabled}, .${Rt.error}):before`]: {
              borderBottom: `1px solid ${(A.vars || A).palette.text.primary}`
            },
            [`&.${Rt.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(A.palette).filter(kt()).map(([i]) => {
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
  tw = dA(bi, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: Qi
  })(WA(({ theme: A }) => ({
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
  $s = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiFilledInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, hiddenLabel: s, inputComponent: l = "input", multiline: c = false, slotProps: u, slots: d = {}, type: g = "text", ...p } = r, B = {
      ...r,
      disableUnderline: n,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      type: g
    }, y = Aw(r), h = {
      root: {
        ownerState: B
      },
      input: {
        ownerState: B
      }
    }, b = u ?? i ? ce(h, u ?? i) : h, m = d.root ?? o.Root ?? ew, v = d.input ?? o.Input ?? tw;
    return V(Vs, {
      slots: {
        root: m,
        input: v
      },
      slotProps: b,
      fullWidth: a,
      inputComponent: l,
      multiline: c,
      ref: t,
      type: g,
      ...p,
      classes: y
    });
  });
  $s.muiName = "Input";
  function rw(A) {
    return DA("MuiFormControl", A);
  }
  LA("MuiFormControl", [
    "root",
    "marginNone",
    "marginNormal",
    "marginDense",
    "fullWidth",
    "disabled"
  ]);
  let nw, ow;
  nw = (A) => {
    const { classes: e, margin: t, fullWidth: r } = A, n = {
      root: [
        "root",
        t !== "none" && `margin${mA(t)}`,
        r && "fullWidth"
      ]
    };
    return MA(n, rw, e);
  };
  ow = dA("div", {
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
  iw = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiFormControl"
    }), { children: n, className: o, color: i = "primary", component: a = "div", disabled: s = false, error: l = false, focused: c, fullWidth: u = false, hiddenLabel: d = false, margin: g = "none", required: p = false, size: B = "medium", variant: y = "outlined", ...h } = r, b = {
      ...r,
      color: i,
      component: a,
      disabled: s,
      error: l,
      fullWidth: u,
      hiddenLabel: d,
      margin: g,
      required: p,
      size: B,
      variant: y
    }, m = nw(b), [v, U] = BA(() => {
      let O = false;
      return n && jt.forEach(n, (R) => {
        if (!Pi(R, [
          "Input",
          "Select"
        ])) return;
        const W = Pi(R, [
          "Select"
        ]) ? R.props.input : R;
        W && m0(W.props) && (O = true);
      }), O;
    }), [C, I] = BA(() => {
      let O = false;
      return n && jt.forEach(n, (R) => {
        Pi(R, [
          "Input",
          "Select"
        ]) && (Eo(R.props, true) || Eo(R.props.inputProps, true)) && (O = true);
      }), O;
    }), [S, x] = BA(false);
    s && S && x(false);
    const f = c !== void 0 && !s ? c : S;
    let H;
    oA(false);
    const K = RA(() => {
      I(true);
    }, []), k = RA(() => {
      I(false);
    }, []), N = ve(() => ({
      adornedStart: v,
      setAdornedStart: U,
      color: i,
      disabled: s,
      error: l,
      filled: C,
      focused: f,
      fullWidth: u,
      hiddenLabel: d,
      size: B,
      onBlur: () => {
        x(false);
      },
      onFocus: () => {
        x(true);
      },
      onEmpty: k,
      onFilled: K,
      registerEffect: H,
      required: p,
      variant: y
    }), [
      v,
      i,
      s,
      l,
      C,
      f,
      u,
      d,
      H,
      k,
      K,
      p,
      B,
      y
    ]);
    return V(Gs.Provider, {
      value: N,
      children: V(ow, {
        as: a,
        ownerState: b,
        className: wA(m.root, o),
        ref: t,
        ...h,
        children: n
      })
    });
  });
  function aw(A) {
    return DA("MuiFormHelperText", A);
  }
  const Yl = LA("MuiFormHelperText", [
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
  var zl;
  let sw, lw;
  sw = (A) => {
    const { classes: e, contained: t, size: r, disabled: n, error: o, filled: i, focused: a, required: s } = A, l = {
      root: [
        "root",
        n && "disabled",
        o && "error",
        r && `size${mA(r)}`,
        t && "contained",
        a && "focused",
        i && "filled",
        s && "required"
      ]
    };
    return MA(l, aw, e);
  };
  lw = dA("p", {
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
  })(WA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.caption,
    textAlign: "left",
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    [`&.${Yl.disabled}`]: {
      color: (A.vars || A).palette.text.disabled
    },
    [`&.${Yl.error}`]: {
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
  })));
  cw = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiFormHelperText"
    }), { children: n, className: o, component: i = "p", disabled: a, error: s, filled: l, focused: c, margin: u, required: d, variant: g, ...p } = r, B = Sr(), y = Ir({
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
    }), h = {
      ...r,
      component: i,
      contained: y.variant === "filled" || y.variant === "outlined",
      variant: y.variant,
      size: y.size,
      disabled: y.disabled,
      error: y.error,
      filled: y.filled,
      focused: y.focused,
      required: y.required
    };
    delete h.ownerState;
    const b = sw(h);
    return V(lw, {
      as: i,
      className: wA(b.root, o),
      ref: t,
      ...p,
      ownerState: h,
      children: n === " " ? zl || (zl = V("span", {
        className: "notranslate",
        "aria-hidden": true,
        children: "\u200B"
      })) : n
    });
  });
  function uw(A) {
    return DA("MuiFormLabel", A);
  }
  const en = LA("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk"
  ]), dw = (A) => {
    const { classes: e, color: t, focused: r, disabled: n, error: o, filled: i, required: a } = A, s = {
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
    return MA(s, uw, e);
  }, fw = dA("label", {
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
  })(WA(({ theme: A }) => ({
    color: (A.vars || A).palette.text.secondary,
    ...A.typography.body1,
    lineHeight: "1.4375em",
    padding: 0,
    position: "relative",
    variants: [
      ...Object.entries(A.palette).filter(kt()).map(([e]) => ({
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
  }))), gw = dA("span", {
    name: "MuiFormLabel",
    slot: "Asterisk",
    overridesResolver: (A, e) => e.asterisk
  })(WA(({ theme: A }) => ({
    [`&.${en.error}`]: {
      color: (A.vars || A).palette.error.main
    }
  }))), pw = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiFormLabel"
    }), { children: n, className: o, color: i, component: a = "label", disabled: s, error: l, filled: c, focused: u, required: d, ...g } = r, p = Sr(), B = Ir({
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
    }), y = {
      ...r,
      color: B.color || "primary",
      component: a,
      disabled: B.disabled,
      error: B.error,
      filled: B.filled,
      focused: B.focused,
      required: B.required
    }, h = dw(y);
    return ue(fw, {
      as: a,
      ownerState: y,
      className: wA(h.root, o),
      ref: t,
      ...g,
      children: [
        n,
        B.required && ue(gw, {
          ownerState: y,
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
  function Oa(A) {
    return `scale(${A}, ${A ** 2})`;
  }
  let Bw, $i;
  Bw = {
    entering: {
      opacity: 1,
      transform: Oa(1)
    },
    entered: {
      opacity: 1,
      transform: "none"
    }
  };
  $i = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
  Ka = CA(function(e, t) {
    const { addEndListener: r, appear: n = true, children: o, easing: i, in: a, onEnter: s, onEntered: l, onEntering: c, onExit: u, onExited: d, onExiting: g, style: p, timeout: B = "auto", TransitionComponent: y = rt, ...h } = e, b = ju(), m = oA(), v = Ps(), U = oA(null), C = be(U, Un(o), t), I = (O) => (R) => {
      if (O) {
        const W = U.current;
        R === void 0 ? O(W) : O(W, R);
      }
    }, S = I(c), x = I((O, R) => {
      hd(O);
      const { duration: W, delay: rA, easing: D } = Fo({
        style: p,
        timeout: B,
        easing: i
      }, {
        mode: "enter"
      });
      let X;
      B === "auto" ? (X = v.transitions.getAutoHeightDuration(O.clientHeight), m.current = X) : X = W, O.style.transition = [
        v.transitions.create("opacity", {
          duration: X,
          delay: rA
        }),
        v.transitions.create("transform", {
          duration: $i ? X : X * 0.666,
          delay: rA,
          easing: D
        })
      ].join(","), s && s(O, R);
    }), f = I(l), H = I(g), K = I((O) => {
      const { duration: R, delay: W, easing: rA } = Fo({
        style: p,
        timeout: B,
        easing: i
      }, {
        mode: "exit"
      });
      let D;
      B === "auto" ? (D = v.transitions.getAutoHeightDuration(O.clientHeight), m.current = D) : D = R, O.style.transition = [
        v.transitions.create("opacity", {
          duration: D,
          delay: W
        }),
        v.transitions.create("transform", {
          duration: $i ? D : D * 0.666,
          delay: $i ? W : W || D * 0.333,
          easing: rA
        })
      ].join(","), O.style.opacity = 0, O.style.transform = Oa(0.75), u && u(O);
    }), k = I(d);
    return V(y, {
      appear: n,
      in: a,
      nodeRef: U,
      onEnter: x,
      onEntered: f,
      onEntering: S,
      onExit: K,
      onExited: k,
      onExiting: H,
      addEndListener: (O) => {
        B === "auto" && b.start(m.current || 0, O), r && r(U.current, O);
      },
      timeout: B === "auto" ? null : B,
      ...h,
      children: (O, { ownerState: R, ...W }) => Ke(o, {
        style: {
          opacity: 0,
          transform: Oa(0.75),
          visibility: O === "exited" && !a ? "hidden" : void 0,
          ...Bw[O],
          ...p,
          ...o.props.style
        },
        ref: C,
        ...W
      })
    });
  });
  Ka && (Ka.muiSupportAuto = true);
  let hw, ww, mw;
  hw = (A) => {
    const { classes: e, disableUnderline: t } = A, n = MA({
      root: [
        "root",
        !t && "underline"
      ],
      input: [
        "input"
      ]
    }, Q0, e);
    return {
      ...e,
      ...n
    };
  };
  ww = dA(yi, {
    shouldForwardProp: (A) => tt(A) || A === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        ...vi(A, e),
        !t.disableUnderline && e.underline
      ];
    }
  })(WA(({ theme: A }) => {
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
        ...Object.entries(A.palette).filter(kt()).map(([r]) => ({
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
  }));
  mw = dA(bi, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: Qi
  })({});
  Ws = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiInput"
    }), { disableUnderline: n = false, components: o = {}, componentsProps: i, fullWidth: a = false, inputComponent: s = "input", multiline: l = false, slotProps: c, slots: u = {}, type: d = "text", ...g } = r, p = hw(r), y = {
      root: {
        ownerState: {
          disableUnderline: n
        }
      }
    }, h = c ?? i ? ce(c ?? i, y) : y, b = u.root ?? o.Root ?? ww, m = u.input ?? o.Input ?? mw;
    return V(Vs, {
      slots: {
        root: b,
        input: m
      },
      slotProps: h,
      fullWidth: a,
      inputComponent: s,
      multiline: l,
      ref: t,
      type: d,
      ...g,
      classes: p
    });
  });
  Ws.muiName = "Input";
  function Cw(A) {
    return DA("MuiInputLabel", A);
  }
  LA("MuiInputLabel", [
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
  let vw, Qw;
  vw = (A) => {
    const { classes: e, formControl: t, size: r, shrink: n, disableAnimation: o, variant: i, required: a } = A, s = {
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
    }, l = MA(s, Cw, e);
    return {
      ...e,
      ...l
    };
  };
  Qw = dA(pw, {
    shouldForwardProp: (A) => tt(A) || A === "classes",
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
  })(WA(({ theme: A }) => ({
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
  yw = CA(function(e, t) {
    const r = NA({
      name: "MuiInputLabel",
      props: e
    }), { disableAnimation: n = false, margin: o, shrink: i, variant: a, className: s, ...l } = r, c = Sr();
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
    }), g = {
      ...r,
      disableAnimation: n,
      formControl: c,
      shrink: u,
      size: d.size,
      variant: d.variant,
      required: d.required,
      focused: d.focused
    }, p = vw(g);
    return V(Qw, {
      "data-shrink": u,
      ref: t,
      className: wA(p.root, s),
      ...l,
      ownerState: g,
      classes: p
    });
  });
  bw = wt({});
  function Fw(A) {
    return DA("MuiList", A);
  }
  LA("MuiList", [
    "root",
    "padding",
    "dense",
    "subheader"
  ]);
  let Uw, Ew;
  Uw = (A) => {
    const { classes: e, disablePadding: t, dense: r, subheader: n } = A;
    return MA({
      root: [
        "root",
        !t && "padding",
        r && "dense",
        n && "subheader"
      ]
    }, Fw, e);
  };
  Ew = dA("ul", {
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
  Iw = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiList"
    }), { children: n, className: o, component: i = "ul", dense: a = false, disablePadding: s = false, subheader: l, ...c } = r, u = ve(() => ({
      dense: a
    }), [
      a
    ]), d = {
      ...r,
      component: i,
      dense: a,
      disablePadding: s
    }, g = Uw(d);
    return V(bw.Provider, {
      value: u,
      children: ue(Ew, {
        as: i,
        className: wA(g.root, o),
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
  function Wi(A, e, t) {
    return A === e ? A.firstChild : e && e.nextElementSibling ? e.nextElementSibling : t ? null : A.firstChild;
  }
  function jl(A, e, t) {
    return A === e ? t ? A.firstChild : A.lastChild : e && e.previousElementSibling ? e.previousElementSibling : t ? null : A.lastChild;
  }
  function wd(A, e) {
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
      if (!a.hasAttribute("tabindex") || !wd(a, o) || s) a = n(A, a, t);
      else return a.focus(), true;
    }
    return false;
  }
  Sw = CA(function(e, t) {
    const { actions: r, autoFocus: n = false, autoFocusItem: o = false, children: i, className: a, disabledItemsFocusable: s = false, disableListWrap: l = false, onKeyDown: c, variant: u = "selectedMenu", ...d } = e, g = oA(null), p = oA({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    gt(() => {
      n && g.current.focus();
    }, [
      n
    ]), wn(r, () => ({
      adjustStyleForScrollbar: (m, { direction: v }) => {
        const U = !g.current.style.width;
        if (m.clientHeight < g.current.clientHeight && U) {
          const C = `${Zu(pt(m))}px`;
          g.current.style[v === "rtl" ? "paddingLeft" : "paddingRight"] = C, g.current.style.width = `calc(100% + ${C})`;
        }
        return g.current;
      }
    }), []);
    const B = (m) => {
      const v = g.current, U = m.key;
      if (m.ctrlKey || m.metaKey || m.altKey) {
        c && c(m);
        return;
      }
      const I = Ne(v).activeElement;
      if (U === "ArrowDown") m.preventDefault(), Or(v, I, l, s, Wi);
      else if (U === "ArrowUp") m.preventDefault(), Or(v, I, l, s, jl);
      else if (U === "Home") m.preventDefault(), Or(v, null, l, s, Wi);
      else if (U === "End") m.preventDefault(), Or(v, null, l, s, jl);
      else if (U.length === 1) {
        const S = p.current, x = U.toLowerCase(), f = performance.now();
        S.keys.length > 0 && (f - S.lastTime > 500 ? (S.keys = [], S.repeating = true, S.previousKeyMatched = true) : S.repeating && x !== S.keys[0] && (S.repeating = false)), S.lastTime = f, S.keys.push(x);
        const H = I && !S.repeating && wd(I, S);
        S.previousKeyMatched && (H || Or(v, I, false, s, Wi, S)) ? m.preventDefault() : S.previousKeyMatched = false;
      }
      c && c(m);
    }, y = be(g, t);
    let h = -1;
    jt.forEach(i, (m, v) => {
      if (!Ee(m)) {
        h === v && (h += 1, h >= i.length && (h = -1));
        return;
      }
      m.props.disabled || (u === "selectedMenu" && m.props.selected || h === -1) && (h = v), h === v && (m.props.disabled || m.props.muiSkipListHighlight || m.type.muiSkipListHighlight) && (h += 1, h >= i.length && (h = -1));
    });
    const b = jt.map(i, (m, v) => {
      if (v === h) {
        const U = {};
        return o && (U.autoFocus = true), m.props.tabIndex === void 0 && u === "selectedMenu" && (U.tabIndex = 0), Ke(m, U);
      }
      return m;
    });
    return V(Iw, {
      role: "menu",
      ref: y,
      className: a,
      onKeyDown: B,
      tabIndex: n ? 0 : -1,
      ...d,
      children: b
    });
  });
  function xw(A) {
    return DA("MuiPopover", A);
  }
  LA("MuiPopover", [
    "root",
    "paper"
  ]);
  function Zl(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.height / 2 : e === "bottom" && (t = A.height), t;
  }
  function ql(A, e) {
    let t = 0;
    return typeof e == "number" ? t = e : e === "center" ? t = A.width / 2 : e === "right" && (t = A.width), t;
  }
  function Ac(A) {
    return [
      A.horizontal,
      A.vertical
    ].map((e) => typeof e == "number" ? `${e}px` : e).join(" ");
  }
  function Mn(A) {
    return typeof A == "function" ? A() : A;
  }
  let Hw, Tw, md;
  Hw = (A) => {
    const { classes: e } = A;
    return MA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, xw, e);
  };
  Tw = dA(q0, {
    name: "MuiPopover",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  md = dA(Lh, {
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
  Lw = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiPopover"
    }), { action: n, anchorEl: o, anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    }, anchorPosition: a, anchorReference: s = "anchorEl", children: l, className: c, container: u, elevation: d = 8, marginThreshold: g = 16, open: p, PaperProps: B = {}, slots: y = {}, slotProps: h = {}, transformOrigin: b = {
      vertical: "top",
      horizontal: "left"
    }, TransitionComponent: m, transitionDuration: v = "auto", TransitionProps: U = {}, disableScrollLock: C = false, ...I } = r, S = oA(), x = {
      ...r,
      anchorOrigin: i,
      anchorReference: s,
      elevation: d,
      marginThreshold: g,
      transformOrigin: b,
      TransitionComponent: m,
      transitionDuration: v,
      TransitionProps: U
    }, f = Hw(x), H = RA(() => {
      if (s === "anchorPosition") return a;
      const J = Mn(o), aA = (J && J.nodeType === 1 ? J : Ne(S.current).body).getBoundingClientRect();
      return {
        top: aA.top + Zl(aA, i.vertical),
        left: aA.left + ql(aA, i.horizontal)
      };
    }, [
      o,
      i.horizontal,
      i.vertical,
      a,
      s
    ]), K = RA((J) => ({
      vertical: Zl(J, b.vertical),
      horizontal: ql(J, b.horizontal)
    }), [
      b.horizontal,
      b.vertical
    ]), k = RA((J) => {
      const nA = {
        width: J.offsetWidth,
        height: J.offsetHeight
      }, aA = K(nA);
      if (s === "none") return {
        top: null,
        left: null,
        transformOrigin: Ac(aA)
      };
      const w = H();
      let F = w.top - aA.vertical, Q = w.left - aA.horizontal;
      const M = F + nA.height, $ = Q + nA.width, P = pt(Mn(o)), sA = P.innerHeight - g, lA = P.innerWidth - g;
      if (g !== null && F < g) {
        const fA = F - g;
        F -= fA, aA.vertical += fA;
      } else if (g !== null && M > sA) {
        const fA = M - sA;
        F -= fA, aA.vertical += fA;
      }
      if (g !== null && Q < g) {
        const fA = Q - g;
        Q -= fA, aA.horizontal += fA;
      } else if ($ > lA) {
        const fA = $ - lA;
        Q -= fA, aA.horizontal += fA;
      }
      return {
        top: `${Math.round(F)}px`,
        left: `${Math.round(Q)}px`,
        transformOrigin: Ac(aA)
      };
    }, [
      o,
      s,
      H,
      K,
      g
    ]), [N, O] = BA(p), R = RA(() => {
      const J = S.current;
      if (!J) return;
      const nA = k(J);
      nA.top !== null && J.style.setProperty("top", nA.top), nA.left !== null && (J.style.left = nA.left), J.style.transformOrigin = nA.transformOrigin, O(true);
    }, [
      k
    ]);
    gA(() => (C && window.addEventListener("scroll", R), () => window.removeEventListener("scroll", R)), [
      o,
      C,
      R
    ]);
    const W = () => {
      R();
    }, rA = () => {
      O(false);
    };
    gA(() => {
      p && R();
    }), wn(n, () => p ? {
      updatePosition: () => {
        R();
      }
    } : null, [
      p,
      R
    ]), gA(() => {
      if (!p) return;
      const J = Yu(() => {
        R();
      }), nA = pt(Mn(o));
      return nA.addEventListener("resize", J), () => {
        J.clear(), nA.removeEventListener("resize", J);
      };
    }, [
      o,
      p,
      R
    ]);
    let D = v;
    const X = {
      slots: {
        transition: m,
        ...y
      },
      slotProps: {
        transition: U,
        paper: B,
        ...h
      }
    }, [q, tA] = Be("transition", {
      elementType: Ka,
      externalForwardedProps: X,
      ownerState: x,
      getSlotProps: (J) => ({
        ...J,
        onEntering: (nA, aA) => {
          var _a2;
          (_a2 = J.onEntering) == null ? void 0 : _a2.call(J, nA, aA), W();
        },
        onExited: (nA) => {
          var _a2;
          (_a2 = J.onExited) == null ? void 0 : _a2.call(J, nA), rA();
        }
      }),
      additionalProps: {
        appear: true,
        in: p
      }
    });
    v === "auto" && !q.muiSupportAuto && (D = void 0);
    const T = u || (o ? Ne(Mn(o)).body : void 0), [G, { slots: _, slotProps: Y, ...uA }] = Be("root", {
      ref: t,
      elementType: Tw,
      externalForwardedProps: {
        ...X,
        ...I
      },
      shouldForwardComponentProp: true,
      additionalProps: {
        slots: {
          backdrop: y.backdrop
        },
        slotProps: {
          backdrop: Qh(typeof h.backdrop == "function" ? h.backdrop(x) : h.backdrop, {
            invisible: true
          })
        },
        container: T,
        open: p
      },
      ownerState: x,
      className: wA(f.root, c)
    }), [iA, AA] = Be("paper", {
      ref: S,
      className: f.paper,
      elementType: md,
      externalForwardedProps: X,
      shouldForwardComponentProp: true,
      additionalProps: {
        elevation: d,
        style: N ? void 0 : {
          opacity: 0
        }
      },
      ownerState: x
    });
    return V(G, {
      ...uA,
      ...!ka(G) && {
        slots: _,
        slotProps: Y,
        disableScrollLock: C
      },
      children: V(q, {
        ...tA,
        timeout: D,
        children: V(iA, {
          ...AA,
          children: l
        })
      })
    });
  });
  function kw(A) {
    return DA("MuiMenu", A);
  }
  LA("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  let Ow, Kw, Rw, Dw, Mw, Pw;
  Ow = {
    vertical: "top",
    horizontal: "right"
  };
  Kw = {
    vertical: "top",
    horizontal: "left"
  };
  Rw = (A) => {
    const { classes: e } = A;
    return MA({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ],
      list: [
        "list"
      ]
    }, kw, e);
  };
  Dw = dA(Lw, {
    shouldForwardProp: (A) => tt(A) || A === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  Mw = dA(md, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (A, e) => e.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  });
  Pw = dA(Sw, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (A, e) => e.list
  })({
    outline: 0
  });
  _w = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiMenu"
    }), { autoFocus: n = true, children: o, className: i, disableAutoFocusItem: a = false, MenuListProps: s = {}, onClose: l, open: c, PaperProps: u = {}, PopoverClasses: d, transitionDuration: g = "auto", TransitionProps: { onEntering: p, ...B } = {}, variant: y = "selectedMenu", slots: h = {}, slotProps: b = {}, ...m } = r, v = wB(), U = {
      ...r,
      autoFocus: n,
      disableAutoFocusItem: a,
      MenuListProps: s,
      onEntering: p,
      PaperProps: u,
      transitionDuration: g,
      TransitionProps: B,
      variant: y
    }, C = Rw(U), I = n && !a && c, S = oA(null), x = (D, X) => {
      S.current && S.current.adjustStyleForScrollbar(D, {
        direction: v ? "rtl" : "ltr"
      }), p && p(D, X);
    }, f = (D) => {
      D.key === "Tab" && (D.preventDefault(), l && l(D, "tabKeyDown"));
    };
    let H = -1;
    jt.map(o, (D, X) => {
      Ee(D) && (D.props.disabled || (y === "selectedMenu" && D.props.selected || H === -1) && (H = X));
    });
    const K = {
      slots: h,
      slotProps: {
        list: s,
        transition: B,
        paper: u,
        ...b
      }
    }, k = dB({
      elementType: h.root,
      externalSlotProps: b.root,
      ownerState: U,
      className: [
        C.root,
        i
      ]
    }), [N, O] = Be("paper", {
      className: C.paper,
      elementType: Mw,
      externalForwardedProps: K,
      shouldForwardComponentProp: true,
      ownerState: U
    }), [R, W] = Be("list", {
      className: wA(C.list, s.className),
      elementType: Pw,
      shouldForwardComponentProp: true,
      externalForwardedProps: K,
      getSlotProps: (D) => ({
        ...D,
        onKeyDown: (X) => {
          var _a2;
          f(X), (_a2 = D.onKeyDown) == null ? void 0 : _a2.call(D, X);
        }
      }),
      ownerState: U
    }), rA = typeof K.slotProps.transition == "function" ? K.slotProps.transition(U) : K.slotProps.transition;
    return V(Dw, {
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: v ? "right" : "left"
      },
      transformOrigin: v ? Ow : Kw,
      slots: {
        root: h.root,
        paper: N,
        backdrop: h.backdrop,
        ...h.transition && {
          transition: h.transition
        }
      },
      slotProps: {
        root: k,
        paper: O,
        backdrop: typeof b.backdrop == "function" ? b.backdrop(U) : b.backdrop,
        transition: {
          ...rA,
          onEntering: (...D) => {
            var _a2;
            x(...D), (_a2 = rA == null ? void 0 : rA.onEntering) == null ? void 0 : _a2.call(rA, ...D);
          }
        }
      },
      open: c,
      ref: t,
      transitionDuration: g,
      ownerState: U,
      ...m,
      classes: d,
      children: V(R, {
        actions: S,
        autoFocus: n && (H === -1 || a),
        autoFocusItem: I,
        variant: y,
        ...W,
        children: o
      })
    });
  });
  function Nw(A) {
    return DA("MuiNativeSelect", A);
  }
  const Xs = LA("MuiNativeSelect", [
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
  ]), Gw = (A) => {
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
    return MA(a, Nw, e);
  }, Cd = dA("select", {
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
    [`&.${Xs.disabled}`]: {
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
  })), Vw = dA(Cd, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: tt,
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        e.select,
        e[t.variant],
        t.error && e.error,
        {
          [`&.${Xs.multiple}`]: e.multiple
        }
      ];
    }
  })({}), vd = dA("svg", {
    name: "MuiNativeSelect"
  })(({ theme: A }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (A.vars || A).palette.action.active,
    [`&.${Xs.disabled}`]: {
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
  })), $w = dA(vd, {
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
  })({}), Ww = CA(function(e, t) {
    const { className: r, disabled: n, error: o, IconComponent: i, inputRef: a, variant: s = "standard", ...l } = e, c = {
      ...e,
      disabled: n,
      variant: s,
      error: o
    }, u = Gw(c);
    return ue(et, {
      children: [
        V(Vw, {
          ownerState: c,
          className: wA(u.select, r),
          disabled: n,
          ref: a || t,
          ...l
        }),
        e.multiple ? null : V($w, {
          as: i,
          ownerState: c,
          className: u.icon
        })
      ]
    });
  });
  var ec;
  const Xw = dA("fieldset", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: tt
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
  }), Jw = dA("legend", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: tt
  })(WA(({ theme: A }) => ({
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
  function Yw(A) {
    const { children: e, classes: t, className: r, label: n, notched: o, ...i } = A, a = n != null && n !== "", s = {
      ...A,
      notched: o,
      withLabel: a
    };
    return V(Xw, {
      "aria-hidden": true,
      className: r,
      ownerState: s,
      ...i,
      children: V(Jw, {
        ownerState: s,
        children: a ? V("span", {
          children: n
        }) : ec || (ec = V("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const zw = (A) => {
    const { classes: e } = A, r = MA({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, y0, e);
    return {
      ...e,
      ...r
    };
  }, jw = dA(yi, {
    shouldForwardProp: (A) => tt(A) || A === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: vi
  })(WA(({ theme: A }) => {
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
        ...Object.entries(A.palette).filter(kt()).map(([t]) => ({
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
  })), Zw = dA(Yw, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (A, e) => e.notchedOutline
  })(WA(({ theme: A }) => {
    const e = A.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: A.vars ? `rgba(${A.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  })), qw = dA(bi, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Qi
  })(WA(({ theme: A }) => ({
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
  }))), Js = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiOutlinedInput"
    }), { components: n = {}, fullWidth: o = false, inputComponent: i = "input", label: a, multiline: s = false, notched: l, slots: c = {}, slotProps: u = {}, type: d = "text", ...g } = r, p = zw(r), B = Sr(), y = Ir({
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
    }), h = {
      ...r,
      color: y.color || "primary",
      disabled: y.disabled,
      error: y.error,
      focused: y.focused,
      formControl: B,
      fullWidth: o,
      hiddenLabel: y.hiddenLabel,
      multiline: s,
      size: y.size,
      type: d
    }, b = c.root ?? n.Root ?? jw, m = c.input ?? n.Input ?? qw, [v, U] = Be("notchedOutline", {
      elementType: Zw,
      className: p.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: h,
      externalForwardedProps: {
        slots: c,
        slotProps: u
      },
      additionalProps: {
        label: a != null && a !== "" && y.required ? ue(et, {
          children: [
            a,
            "\u2009",
            "*"
          ]
        }) : a
      }
    });
    return V(Vs, {
      slots: {
        root: b,
        input: m
      },
      slotProps: u,
      renderSuffix: (C) => V(v, {
        ...U,
        notched: typeof l < "u" ? l : !!(C.startAdornment || C.filled || C.focused)
      }),
      fullWidth: o,
      inputComponent: i,
      multiline: s,
      ref: t,
      type: d,
      ...g,
      classes: {
        ...p,
        notchedOutline: null
      }
    });
  });
  Js.muiName = "Input";
  function Qd(A) {
    return DA("MuiSelect", A);
  }
  const Kr = LA("MuiSelect", [
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
  var tc;
  const Am = dA(Cd, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (A, e) => {
      const { ownerState: t } = A;
      return [
        {
          [`&.${Kr.select}`]: e.select
        },
        {
          [`&.${Kr.select}`]: e[t.variant]
        },
        {
          [`&.${Kr.error}`]: e.error
        },
        {
          [`&.${Kr.multiple}`]: e.multiple
        }
      ];
    }
  })({
    [`&.${Kr.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), em = dA(vd, {
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
  })({}), tm = dA("input", {
    shouldForwardProp: (A) => gd(A) && A !== "classes",
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
  function rc(A, e) {
    return typeof e == "object" && e !== null ? A === e : String(A) === String(e);
  }
  function rm(A) {
    return A == null || typeof A == "string" && !A.trim();
  }
  let nm, om, im, Ys, am, sm, lm;
  nm = (A) => {
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
    return MA(a, Qd, e);
  };
  om = CA(function(e, t) {
    var _a2;
    const { "aria-describedby": r, "aria-label": n, autoFocus: o, autoWidth: i, children: a, className: s, defaultOpen: l, defaultValue: c, disabled: u, displayEmpty: d, error: g = false, IconComponent: p, inputRef: B, labelId: y, MenuProps: h = {}, multiple: b, name: m, onBlur: v, onChange: U, onClose: C, onFocus: I, onOpen: S, open: x, readOnly: f, renderValue: H, required: K, SelectDisplayProps: k = {}, tabIndex: N, type: O, value: R, variant: W = "standard", ...rA } = e, [D, X] = yl({
      controlled: R,
      default: c,
      name: "Select"
    }), [q, tA] = yl({
      controlled: x,
      default: l,
      name: "Select"
    }), T = oA(null), G = oA(null), [_, Y] = BA(null), { current: uA } = oA(x != null), [iA, AA] = BA(), J = be(t, B), nA = RA((cA) => {
      G.current = cA, cA && Y(cA);
    }, []), aA = _ == null ? void 0 : _.parentNode;
    wn(J, () => ({
      focus: () => {
        G.current.focus();
      },
      node: T.current,
      value: D
    }), [
      D
    ]), gA(() => {
      l && q && _ && !uA && (AA(i ? null : aA.clientWidth), G.current.focus());
    }, [
      _,
      i
    ]), gA(() => {
      o && G.current.focus();
    }, [
      o
    ]), gA(() => {
      if (!y) return;
      const cA = Ne(G.current).getElementById(y);
      if (cA) {
        const HA = () => {
          getSelection().isCollapsed && G.current.focus();
        };
        return cA.addEventListener("click", HA), () => {
          cA.removeEventListener("click", HA);
        };
      }
    }, [
      y
    ]);
    const w = (cA, HA) => {
      cA ? S && S(HA) : C && C(HA), uA || (AA(i ? null : aA.clientWidth), tA(cA));
    }, F = (cA) => {
      cA.button === 0 && (cA.preventDefault(), G.current.focus(), w(true, cA));
    }, Q = (cA) => {
      w(false, cA);
    }, M = jt.toArray(a), $ = (cA) => {
      const HA = M.find((oe) => oe.props.value === cA.target.value);
      HA !== void 0 && (X(HA.props.value), U && U(cA, HA));
    }, P = (cA) => (HA) => {
      let oe;
      if (HA.currentTarget.hasAttribute("tabindex")) {
        if (b) {
          oe = Array.isArray(D) ? D.slice() : [];
          const qt = D.indexOf(cA.props.value);
          qt === -1 ? oe.push(cA.props.value) : oe.splice(qt, 1);
        } else oe = cA.props.value;
        if (cA.props.onClick && cA.props.onClick(HA), D !== oe && (X(oe), U)) {
          const qt = HA.nativeEvent || HA, rl = new qt.constructor(qt.type, qt);
          Object.defineProperty(rl, "target", {
            writable: true,
            value: {
              value: oe,
              name: m
            }
          }), U(rl, cA);
        }
        b || w(false, HA);
      }
    }, sA = (cA) => {
      f || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(cA.key) && (cA.preventDefault(), w(true, cA));
    }, lA = _ !== null && q, fA = (cA) => {
      !lA && v && (Object.defineProperty(cA, "target", {
        writable: true,
        value: {
          value: D,
          name: m
        }
      }), v(cA));
    };
    delete rA["aria-invalid"];
    let Z, ne;
    const pA = [];
    let GA = false;
    (Eo({
      value: D
    }) || d) && (H ? Z = H(D) : GA = true);
    const jA = M.map((cA) => {
      if (!Ee(cA)) return null;
      let HA;
      if (b) {
        if (!Array.isArray(D)) throw new Error(dt(2));
        HA = D.some((oe) => rc(oe, cA.props.value)), HA && GA && pA.push(cA.props.children);
      } else HA = rc(D, cA.props.value), HA && GA && (ne = cA.props.children);
      return Ke(cA, {
        "aria-selected": HA ? "true" : "false",
        onClick: P(cA),
        onKeyUp: (oe) => {
          oe.key === " " && oe.preventDefault(), cA.props.onKeyUp && cA.props.onKeyUp(oe);
        },
        role: "option",
        selected: HA,
        value: void 0,
        "data-value": cA.props.value
      });
    });
    GA && (b ? pA.length === 0 ? Z = null : Z = pA.reduce((cA, HA, oe) => (cA.push(HA), oe < pA.length - 1 && cA.push(", "), cA), []) : Z = ne);
    let de = iA;
    !i && uA && _ && (de = aA.clientWidth);
    let Ae;
    typeof N < "u" ? Ae = N : Ae = u ? null : 0;
    const mt = k.id || (m ? `mui-component-select-${m}` : void 0), Kt = {
      ...e,
      variant: W,
      value: D,
      open: lA,
      error: g
    }, kA = nm(Kt), Zt = {
      ...h.PaperProps,
      ...(_a2 = h.slotProps) == null ? void 0 : _a2.paper
    }, Hr = Ci();
    return ue(et, {
      children: [
        V(Am, {
          as: "div",
          ref: nA,
          tabIndex: Ae,
          role: "combobox",
          "aria-controls": lA ? Hr : void 0,
          "aria-disabled": u ? "true" : void 0,
          "aria-expanded": lA ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": n,
          "aria-labelledby": [
            y,
            mt
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": r,
          "aria-required": K ? "true" : void 0,
          "aria-invalid": g ? "true" : void 0,
          onKeyDown: sA,
          onMouseDown: u || f ? null : F,
          onBlur: fA,
          onFocus: I,
          ...k,
          ownerState: Kt,
          className: wA(k.className, kA.select, s),
          id: mt,
          children: rm(Z) ? tc || (tc = V("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : Z
        }),
        V(tm, {
          "aria-invalid": g,
          value: Array.isArray(D) ? D.join(",") : D,
          name: m,
          ref: T,
          "aria-hidden": true,
          onChange: $,
          tabIndex: -1,
          disabled: u,
          className: kA.nativeInput,
          autoFocus: o,
          required: K,
          ...rA,
          ownerState: Kt
        }),
        V(em, {
          as: p,
          className: kA.icon,
          ownerState: Kt
        }),
        V(_w, {
          id: `menu-${m || ""}`,
          anchorEl: aA,
          open: lA,
          onClose: Q,
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
              "aria-labelledby": y,
              role: "listbox",
              "aria-multiselectable": b ? "true" : void 0,
              disableListWrap: true,
              id: Hr,
              ...h.MenuListProps
            },
            paper: {
              ...Zt,
              style: {
                minWidth: de,
                ...Zt != null ? Zt.style : null
              }
            }
          },
          children: jA
        })
      ]
    });
  });
  im = (A) => {
    const { classes: e } = A, r = MA({
      root: [
        "root"
      ]
    }, Qd, e);
    return {
      ...e,
      ...r
    };
  };
  Ys = {
    name: "MuiSelect",
    overridesResolver: (A, e) => e.root,
    shouldForwardProp: (A) => tt(A) && A !== "variant",
    slot: "Root"
  };
  am = dA(Ws, Ys)("");
  sm = dA(Js, Ys)("");
  lm = dA($s, Ys)("");
  yd = CA(function(e, t) {
    const r = NA({
      name: "MuiSelect",
      props: e
    }), { autoWidth: n = false, children: o, classes: i = {}, className: a, defaultOpen: s = false, displayEmpty: l = false, IconComponent: c = F0, id: u, input: d, inputProps: g, label: p, labelId: B, MenuProps: y, multiple: h = false, native: b = false, onClose: m, onOpen: v, open: U, renderValue: C, SelectDisplayProps: I, variant: S = "outlined", ...x } = r, f = b ? Ww : om, H = Sr(), K = Ir({
      props: r,
      muiFormControl: H,
      states: [
        "variant",
        "error"
      ]
    }), k = K.variant || S, N = {
      ...r,
      variant: k,
      classes: i
    }, O = im(N), { root: R, ...W } = O, rA = d || {
      standard: V(am, {
        ownerState: N
      }),
      outlined: V(sm, {
        label: p,
        ownerState: N
      }),
      filled: V(lm, {
        ownerState: N
      })
    }[k], D = be(t, Un(rA));
    return V(et, {
      children: Ke(rA, {
        inputComponent: f,
        inputProps: {
          children: o,
          error: K.error,
          IconComponent: c,
          variant: k,
          type: void 0,
          multiple: h,
          ...b ? {
            id: u
          } : {
            autoWidth: n,
            defaultOpen: s,
            displayEmpty: l,
            labelId: B,
            MenuProps: y,
            onClose: m,
            onOpen: v,
            open: U,
            renderValue: C,
            SelectDisplayProps: {
              id: u,
              ...I
            }
          },
          ...g,
          classes: g ? ce(W, g.classes) : W,
          ...d ? d.props.inputProps : {}
        },
        ...(h && b || l) && k === "outlined" ? {
          notched: true
        } : {},
        ref: D,
        className: wA(rA.props.className, a, O.root),
        ...!d && {
          variant: k
        },
        ...x
      })
    });
  });
  yd.muiName = "Select";
  function cm(A) {
    return DA("MuiTextField", A);
  }
  LA("MuiTextField", [
    "root"
  ]);
  let um, dm, fm;
  um = {
    standard: Ws,
    filled: $s,
    outlined: Js
  };
  dm = (A) => {
    const { classes: e } = A;
    return MA({
      root: [
        "root"
      ]
    }, cm, e);
  };
  fm = dA(iw, {
    name: "MuiTextField",
    slot: "Root",
    overridesResolver: (A, e) => e.root
  })({});
  XU = CA(function(e, t) {
    const r = NA({
      props: e,
      name: "MuiTextField"
    }), { autoComplete: n, autoFocus: o = false, children: i, className: a, color: s = "primary", defaultValue: l, disabled: c = false, error: u = false, FormHelperTextProps: d, fullWidth: g = false, helperText: p, id: B, InputLabelProps: y, inputProps: h, InputProps: b, inputRef: m, label: v, maxRows: U, minRows: C, multiline: I = false, name: S, onBlur: x, onChange: f, onFocus: H, placeholder: K, required: k = false, rows: N, select: O = false, SelectProps: R, slots: W = {}, slotProps: rA = {}, type: D, value: X, variant: q = "outlined", ...tA } = r, T = {
      ...r,
      autoFocus: o,
      color: s,
      disabled: c,
      error: u,
      fullWidth: g,
      multiline: I,
      required: k,
      select: O,
      variant: q
    }, G = dm(T), _ = Ci(B), Y = p && _ ? `${_}-helper-text` : void 0, uA = v && _ ? `${_}-label` : void 0, iA = um[q], AA = {
      slots: W,
      slotProps: {
        input: b,
        inputLabel: y,
        htmlInput: h,
        formHelperText: d,
        select: R,
        ...rA
      }
    }, J = {}, nA = AA.slotProps.inputLabel;
    q === "outlined" && (nA && typeof nA.shrink < "u" && (J.notched = nA.shrink), J.label = v), O && ((!R || !R.native) && (J.id = void 0), J["aria-describedby"] = void 0);
    const [aA, w] = Be("root", {
      elementType: fm,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...AA,
        ...tA
      },
      ownerState: T,
      className: wA(G.root, a),
      ref: t,
      additionalProps: {
        disabled: c,
        error: u,
        fullWidth: g,
        required: k,
        color: s,
        variant: q
      }
    }), [F, Q] = Be("input", {
      elementType: iA,
      externalForwardedProps: AA,
      additionalProps: J,
      ownerState: T
    }), [M, $] = Be("inputLabel", {
      elementType: yw,
      externalForwardedProps: AA,
      ownerState: T
    }), [P, sA] = Be("htmlInput", {
      elementType: "input",
      externalForwardedProps: AA,
      ownerState: T
    }), [lA, fA] = Be("formHelperText", {
      elementType: cw,
      externalForwardedProps: AA,
      ownerState: T
    }), [Z, ne] = Be("select", {
      elementType: yd,
      externalForwardedProps: AA,
      ownerState: T
    }), pA = V(F, {
      "aria-describedby": Y,
      autoComplete: n,
      autoFocus: o,
      defaultValue: l,
      fullWidth: g,
      multiline: I,
      name: S,
      rows: N,
      maxRows: U,
      minRows: C,
      type: D,
      value: X,
      id: _,
      inputRef: m,
      onBlur: x,
      onChange: f,
      onFocus: H,
      placeholder: K,
      inputProps: sA,
      slots: {
        input: W.htmlInput ? P : void 0
      },
      ...Q
    });
    return ue(aA, {
      ...w,
      children: [
        v != null && v !== "" && V(M, {
          htmlFor: _,
          id: uA,
          ...$,
          children: v
        }),
        O ? V(Z, {
          "aria-describedby": Y,
          id: _,
          labelId: uA,
          value: X,
          input: pA,
          ...ne,
          children: i
        }) : pA,
        p && V(lA, {
          id: Y,
          ...fA,
          children: p
        })
      ]
    });
  });
  JU = class extends window.visRxWidget {
    wrappedCollectionContent = true;
    static getI18nPrefix() {
      return "vis_2_widgets_collection_";
    }
    getPropertyValue = (e) => this.state.values[`${this.state.rxData[e]}.val`];
    setValue = (e, t, r = false) => {
      !e || e === "nothing_selected" || this.props.context.socket.setState(e, t, r).catch((n) => console.error(`Cannot set state ${e}: ${n}`));
    };
    wrapContent(e) {
      return V(Pf, {
        children: V($l, {
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
          children: V($l, {
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
  YU = 1111111111111;
  zU = "vis-2-widgets-collection.0.theme";
  let Ra = null, $r = null, bd = null, Da = false;
  const Ma = /* @__PURE__ */ new Set();
  function nc() {
    if (Da = false, !Object.is($r, Ra)) {
      $r = Ra, bd = $r === null ? null : JSON.stringify($r);
      for (const A of Ma) A();
    }
  }
  function gm() {
    Da || (Da = true, typeof requestAnimationFrame == "function" ? requestAnimationFrame(nc) : nc());
  }
  jU = function() {
    return $r;
  };
  ZU = function() {
    return bd;
  };
  pm = function(A) {
    Ra = A, gm();
  };
  qU = function() {
    pm(null);
  };
  A1 = function(A) {
    return Ma.add(A), () => {
      Ma.delete(A);
    };
  };
  function Bt(A) {
    return typeof A == "object" && A !== null && !Array.isArray(A);
  }
  Io = function(A, e) {
    if (!Bt(A) || !e) return;
    const t = e.split(".");
    let r = A;
    for (const n of t) {
      if (!Bt(r) || !(n in r)) return;
      r = r[n];
    }
    return r;
  };
  Rr = 96;
  e1 = function(A) {
    if (!A) return;
    const e = A.topLeft ?? 4, t = A.topRight ?? 4, r = A.bottomRight ?? 4, n = A.bottomLeft ?? 4;
    return `${e}px ${t}px ${r}px ${n}px`;
  };
  Fd = function(A, e, t) {
    if (!e) return A;
    const r = Bt(A) ? {
      ...A
    } : {};
    return t === void 0 ? Ed(r, e.split(".")) : Ud(r, e.split("."), t), r;
  };
  function Ud(A, e, t) {
    const [r, ...n] = e;
    if (n.length === 0) {
      A[r] = t;
      return;
    }
    const o = A[r], i = Bt(o) ? {
      ...o
    } : {};
    A[r] = i, Ud(i, n, t);
  }
  function Ed(A, e) {
    const [t, ...r] = e;
    if (r.length === 0) {
      delete A[t];
      return;
    }
    const n = A[t];
    if (!Bt(n)) return;
    const o = {
      ...n
    };
    Ed(o, r), Object.keys(o).length === 0 ? delete A[t] : A[t] = o;
  }
  const Bm = 120, hm = 40, wm = "#ba68c8";
  function Cr(A) {
    return Math.max(0, Math.min(255, Math.round(A)));
  }
  function mm(A) {
    if (typeof A != "string") return null;
    const e = A.trim();
    if (!e) return null;
    let t = /^#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(e);
    if (t) {
      let r = t[1];
      return r.length === 3 && (r = r.split("").map((n) => n + n).join("")), r.length === 8 && (r = r.slice(0, 6)), [
        parseInt(r.slice(0, 2), 16),
        parseInt(r.slice(2, 4), 16),
        parseInt(r.slice(4, 6), 16)
      ];
    }
    return t = /^rgba?\(\s*([\d.]+)\s*[,\s]\s*([\d.]+)\s*[,\s]\s*([\d.]+)/i.exec(e), t ? [
      Cr(+t[1]),
      Cr(+t[2]),
      Cr(+t[3])
    ] : (t = /^hsla?\(\s*([\d.]+)(?:deg)?\s*[,\s]\s*([\d.]+)%\s*[,\s]\s*([\d.]+)%/i.exec(e), t ? Id(+t[1], +t[2], +t[3]) : null);
  }
  function Cm(A, e, t) {
    A /= 255, e /= 255, t /= 255;
    const r = Math.max(A, e, t), n = Math.min(A, e, t), o = (r + n) / 2;
    let i = 0, a = 0;
    if (r !== n) {
      const s = r - n;
      switch (a = o > 0.5 ? s / (2 - r - n) : s / (r + n), r) {
        case A:
          i = (e - t) / s + (e < t ? 6 : 0);
          break;
        case e:
          i = (t - A) / s + 2;
          break;
        default:
          i = (A - e) / s + 4;
      }
      i *= 60;
    }
    return [
      i,
      a * 100,
      o * 100
    ];
  }
  function Id(A, e, t) {
    const r = (A % 360 + 360) % 360, n = Math.max(0, Math.min(100, e)) / 100, o = Math.max(0, Math.min(100, t)) / 100, i = (1 - Math.abs(2 * o - 1)) * n, a = i * (1 - Math.abs(r / 60 % 2 - 1)), s = o - i / 2;
    let l = 0, c = 0, u = 0;
    return r < 60 ? [l, c, u] = [
      i,
      a,
      0
    ] : r < 120 ? [l, c, u] = [
      a,
      i,
      0
    ] : r < 180 ? [l, c, u] = [
      0,
      i,
      a
    ] : r < 240 ? [l, c, u] = [
      0,
      a,
      i
    ] : r < 300 ? [l, c, u] = [
      a,
      0,
      i
    ] : [l, c, u] = [
      i,
      0,
      a
    ], [
      Cr((l + s) * 255),
      Cr((c + s) * 255),
      Cr((u + s) * 255)
    ];
  }
  function vm(A, e, t) {
    const [r, n, o] = Id(A, e, t), i = (a) => a.toString(16).padStart(2, "0");
    return `#${i(r)}${i(n)}${i(o)}`;
  }
  function Qm(A) {
    const e = mm(A);
    if (!e) return wm;
    const [t, r, n] = Cm(e[0], e[1], e[2]);
    return vm(t + Bm, Math.max(r, hm), n);
  }
  t1 = function(A) {
    const e = Io(A, "palette.primary.main"), t = Io(A, "palette.secondary.main");
    return !e || t ? A : Fd(A, "palette.secondary.main", Qm(e));
  };
  r1 = function(A, e) {
    if (Io(A, "palette.text.primary")) return A;
    const r = Io(A, "palette.primary.main") ?? e;
    return r ? Fd(A, "palette.text.primary", r) : A;
  };
  const oc = [
    {
      family: "Roboto",
      weight: 400,
      load: () => JA(() => import("./roboto-latin-400-normal-a6QQlpX7.js"), [], import.meta.url)
    },
    {
      family: "Roboto",
      weight: 700,
      load: () => JA(() => import("./roboto-latin-700-normal-CagKtDsa.js"), [], import.meta.url)
    },
    {
      family: "Inter",
      weight: 400,
      load: () => JA(() => import("./inter-latin-400-normal-BP0WKwYq.js"), [], import.meta.url)
    },
    {
      family: "Inter",
      weight: 700,
      load: () => JA(() => import("./inter-latin-700-normal-B3I9hjST.js"), [], import.meta.url)
    },
    {
      family: "Open Sans",
      weight: 400,
      load: () => JA(() => import("./open-sans-latin-400-normal-Cb5GhqMr.js"), [], import.meta.url)
    },
    {
      family: "Open Sans",
      weight: 700,
      load: () => JA(() => import("./open-sans-latin-700-normal-XolaVIVA.js"), [], import.meta.url)
    },
    {
      family: "Montserrat",
      weight: 400,
      load: () => JA(() => import("./montserrat-latin-400-normal-DhxtaMDQ.js"), [], import.meta.url)
    },
    {
      family: "Montserrat",
      weight: 700,
      load: () => JA(() => import("./montserrat-latin-700-normal-DvK44yU9.js"), [], import.meta.url)
    },
    {
      family: "Roboto Slab",
      weight: 400,
      load: () => JA(() => import("./roboto-slab-latin-400-normal-DB3QTBjh.js"), [], import.meta.url)
    },
    {
      family: "Roboto Slab",
      weight: 700,
      load: () => JA(() => import("./roboto-slab-latin-700-normal-WurPvX7w.js"), [], import.meta.url)
    },
    {
      family: "Merriweather",
      weight: 400,
      load: () => JA(() => import("./merriweather-latin-400-normal-D7Wb1pT4.js"), [], import.meta.url)
    },
    {
      family: "Merriweather",
      weight: 700,
      load: () => JA(() => import("./merriweather-latin-700-normal-DlM4-wGW.js"), [], import.meta.url)
    },
    {
      family: "Playfair Display",
      weight: 400,
      load: () => JA(() => import("./playfair-display-latin-400-normal-CjetgZcY.js"), [], import.meta.url)
    },
    {
      family: "Playfair Display",
      weight: 700,
      load: () => JA(() => import("./playfair-display-latin-700-normal-DGi6mrkJ.js"), [], import.meta.url)
    },
    {
      family: "JetBrains Mono",
      weight: 400,
      load: () => JA(() => import("./jetbrains-mono-latin-400-normal-Ddoyv7f5.js"), [], import.meta.url)
    },
    {
      family: "JetBrains Mono",
      weight: 700,
      load: () => JA(() => import("./jetbrains-mono-latin-700-normal-vpWWyNDD.js"), [], import.meta.url)
    },
    {
      family: "Oswald",
      weight: 400,
      load: () => JA(() => import("./oswald-latin-400-normal-BHJOAwCY.js"), [], import.meta.url)
    },
    {
      family: "Oswald",
      weight: 700,
      load: () => JA(() => import("./oswald-latin-700-normal-qtyFhSVf.js"), [], import.meta.url)
    },
    {
      family: "Nunito",
      weight: 400,
      load: () => JA(() => import("./nunito-latin-400-normal-l1jb7Pyr.js"), [], import.meta.url)
    },
    {
      family: "Nunito",
      weight: 700,
      load: () => JA(() => import("./nunito-latin-700-normal-CW-HBzh6.js"), [], import.meta.url)
    }
  ], ic = /* @__PURE__ */ new Set(), Xi = /* @__PURE__ */ new Map();
  function ym(A) {
    const e = `${A.family}:${A.weight}`;
    if (ic.has(e) || typeof document > "u") return Promise.resolve();
    const t = Xi.get(e);
    if (t) return t;
    const r = A.load().then((n) => {
      const o = document.createElement("style");
      o.setAttribute("data-collection-fonts", ""), o.textContent = `@font-face{font-family:'${A.family}';font-style:normal;font-display:swap;font-weight:${A.weight};src:url(${n.default}) format("woff2")}`, document.head.appendChild(o), ic.add(e);
    }).finally(() => Xi.delete(e));
    return Xi.set(e, r), r;
  }
  n1 = function(A) {
    if (typeof document > "u") return Promise.resolve();
    const e = A ? oc.filter((t) => A.includes(t.family)) : oc;
    return Promise.all(e.map(ym)).then(() => {
    });
  };
  Fi = [
    {
      value: "'Inter', system-ui, sans-serif",
      label: "Inter",
      group: "bundled"
    },
    {
      value: "'Open Sans', system-ui, sans-serif",
      label: "Open Sans",
      group: "bundled"
    },
    {
      value: "'Montserrat', system-ui, sans-serif",
      label: "Montserrat",
      group: "bundled"
    },
    {
      value: "'Merriweather', Georgia, serif",
      label: "Merriweather",
      group: "bundled"
    },
    {
      value: "'Playfair Display', Georgia, serif",
      label: "Playfair Display",
      group: "bundled"
    },
    {
      value: "'Roboto Slab', Georgia, serif",
      label: "Roboto Slab",
      group: "bundled"
    },
    {
      value: "'JetBrains Mono', ui-monospace, monospace",
      label: "JetBrains Mono",
      group: "bundled"
    },
    {
      value: "'Oswald', system-ui, sans-serif",
      label: "Oswald",
      group: "bundled"
    },
    {
      value: "'Nunito', system-ui, sans-serif",
      label: "Nunito",
      group: "bundled"
    },
    {
      value: "'Roboto', system-ui, sans-serif",
      label: "Roboto",
      group: "bundled"
    },
    {
      value: "'Arial', sans-serif",
      label: "Arial",
      group: "system"
    },
    {
      value: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      label: "Helvetica",
      group: "system"
    },
    {
      value: "'Segoe UI', sans-serif",
      label: "Segoe UI",
      group: "system"
    },
    {
      value: "'Verdana', sans-serif",
      label: "Verdana",
      group: "system"
    },
    {
      value: "'Tahoma', sans-serif",
      label: "Tahoma",
      group: "system"
    },
    {
      value: "'Trebuchet MS', sans-serif",
      label: "Trebuchet MS",
      group: "system"
    },
    {
      value: "'Calibri', sans-serif",
      label: "Calibri",
      group: "system"
    },
    {
      value: "'Georgia', serif",
      label: "Georgia",
      group: "system"
    },
    {
      value: "'Times New Roman', Times, serif",
      label: "Times New Roman",
      group: "system"
    },
    {
      value: "'Palatino Linotype', Palatino, serif",
      label: "Palatino",
      group: "system"
    },
    {
      value: "'Garamond', serif",
      label: "Garamond",
      group: "system"
    },
    {
      value: "'Cambria', serif",
      label: "Cambria",
      group: "system"
    },
    {
      value: "'Courier New', monospace",
      label: "Courier New",
      group: "system"
    },
    {
      value: "'Consolas', monospace",
      label: "Consolas",
      group: "system"
    },
    {
      value: "'Lucida Console', monospace",
      label: "Lucida Console",
      group: "system"
    },
    {
      value: "system-ui, sans-serif",
      label: "System UI",
      group: "system"
    },
    {
      value: "sans-serif",
      label: "Sans-serif",
      group: "system"
    },
    {
      value: 'Georgia, "Times New Roman", serif',
      label: "Serif",
      group: "system"
    },
    {
      value: "ui-monospace, monospace",
      label: "Monospace",
      group: "system"
    }
  ];
  o1 = Fi.filter((A) => A.group === "bundled");
  i1 = Fi.filter((A) => A.group === "system");
  bm = "__custom__";
  a1 = function(A) {
    if (!A) return [];
    const e = Fi.find((t) => t.value === A);
    return e && e.group === "bundled" ? [
      e.label
    ] : [];
  };
  s1 = function(A) {
    return A ? Fi.some((e) => e.value === A) ? A : bm : "";
  };
  const ac = "data-collection-google-fonts", Fm = "https://fonts.googleapis.com/css2";
  l1 = async function(A) {
    const e = A.trim().replace(/\s+/g, "+");
    if (!e) throw new Error("Empty font name");
    const t = `${Fm}?family=${e}&display=swap`, r = await fetch(t);
    if (!r.ok) throw new Error(`Google Fonts CSS request failed (${r.status})`);
    const n = await r.text(), o = /@font-face\s*\{([^}]*)\}/g, i = [];
    let a;
    for (; (a = o.exec(n)) !== null; ) i.push(a[1]);
    const s = /\/\*\s*latin\s*\*\/\s*@font-face\s*\{([^}]*)\}/g, l = [];
    for (; (a = s.exec(n)) !== null; ) l.push(a[1]);
    l.length === 0 && l.push(...i.filter((u) => /unicode-range:[^;}]*0000-00FF/i.test(u))), l.length === 0 && l.push(...i);
    const c = [];
    for (const u of l) {
      const d = u.match(/font-weight:\s*(\d+)/), g = u.match(/src:\s*url\(([^)]+)\)/);
      if (!g) continue;
      const p = d ? Number(d[1]) : 400, B = await Um(g[1]);
      c.push({
        weight: p,
        data: B
      });
    }
    if (c.length === 0) throw new Error(`No latin face found for "${A}"`);
    return c;
  };
  async function Um(A) {
    const e = await fetch(A);
    if (!e.ok) throw new Error(`Font file request failed (${e.status})`);
    const t = await e.arrayBuffer();
    return `data:font/woff2;base64,${Em(t)}`;
  }
  function Em(A) {
    const e = new Uint8Array(A), t = 32768;
    let r = "";
    for (let n = 0; n < e.length; n += t) {
      const o = e.subarray(n, n + t);
      r += String.fromCharCode(...o);
    }
    return btoa(r);
  }
  c1 = function(A) {
    if (typeof document > "u") return;
    let e = document.querySelector(`style[${ac}]`);
    if (e || (e = document.createElement("style"), e.setAttribute(ac, ""), document.head.appendChild(e)), !A) {
      e.textContent = "";
      return;
    }
    const t = Object.entries(A);
    if (t.length === 0) {
      e.textContent = "";
      return;
    }
    const r = t.map(([n, o]) => o.map((i) => `@font-face{font-family:'${n}';font-style:normal;font-display:swap;font-weight:${i.weight};src:url(${i.data}) format("woff2")}`).join("")).join("");
    e.textContent = r;
  };
  const ZA = {
    kind: "color",
    optional: true
  }, he = {
    kind: "cssObject",
    optional: true
  }, ir = {
    kind: "union",
    optional: true,
    options: [
      {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          light: ZA,
          main: {
            kind: "color",
            required: true
          },
          dark: ZA,
          contrastText: ZA
        }
      },
      {
        kind: "record",
        optional: true,
        values: ZA
      }
    ]
  }, Im = {
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
      primary: ir,
      secondary: ir,
      error: ir,
      warning: ir,
      info: ir,
      success: ir,
      text: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          primary: ZA,
          secondary: ZA,
          disabled: ZA
        }
      },
      background: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          default: ZA,
          paper: ZA
        }
      },
      common: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          black: ZA,
          white: ZA
        }
      },
      grey: {
        kind: "record",
        optional: true,
        values: ZA
      },
      divider: ZA,
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
          active: ZA,
          hover: ZA,
          hoverOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          selected: ZA,
          selectedOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          disabled: ZA,
          disabledOpacity: {
            kind: "number",
            optional: true,
            min: 0,
            max: 1
          },
          disabledBackground: ZA,
          focus: ZA,
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
  }, Sm = {
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
      allVariants: he,
      h1: he,
      h2: he,
      h3: he,
      h4: he,
      h5: he,
      h6: he,
      subtitle1: he,
      subtitle2: he,
      body1: he,
      body2: he,
      caption: he,
      button: he,
      overline: he
    }
  }, xm = {
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
  }, Hm = {
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
  }, Tm = {
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
        styleOverrides: he,
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
  }, Pn = {
    kind: "object",
    optional: true,
    allowUnknown: "ignore",
    properties: {}
  }, Lm = {
    kind: "object",
    allowUnknown: "warn",
    properties: {
      palette: Im,
      typography: Sm,
      shape: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          borderRadius: {
            kind: "number",
            optional: true,
            min: 0,
            max: Rr
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
      spacing: Hm,
      cssVariables: xm,
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
      mixins: Pn,
      transitions: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          duration: Pn,
          easing: Pn
        }
      },
      breakpoints: {
        kind: "object",
        optional: true,
        allowUnknown: "warn",
        properties: {
          values: Pn,
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
      components: Tm,
      googleFonts: {
        kind: "record",
        optional: true,
        values: {
          kind: "array",
          items: {
            kind: "object",
            allowUnknown: "ignore",
            properties: {
              weight: {
                kind: "number",
                optional: true
              },
              data: {
                kind: "string"
              }
            }
          }
        }
      },
      corners: {
        kind: "object",
        optional: true,
        allowUnknown: "ignore",
        properties: {
          topLeft: {
            kind: "number",
            optional: true,
            min: 0,
            max: Rr
          },
          topRight: {
            kind: "number",
            optional: true,
            min: 0,
            max: Rr
          },
          bottomRight: {
            kind: "number",
            optional: true,
            min: 0,
            max: Rr
          },
          bottomLeft: {
            kind: "number",
            optional: true,
            min: 0,
            max: Rr
          }
        }
      },
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
  u1 = function(A) {
    const e = [];
    if (A == null) return {
      isValid: true,
      theme: {},
      issues: e
    };
    if (!Bt(A)) return e.push({
      path: "",
      severity: "error",
      code: "invalid-shape",
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
    En(A, Lm, "", e);
    const t = !e.some((r) => r.severity === "error");
    return {
      isValid: t,
      theme: t ? A : void 0,
      issues: e
    };
  };
  function En(A, e, t, r) {
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
        km(A, e, t, r);
        break;
      case "string":
        typeof A != "string" && ct(t, "string", A, r);
        break;
      case "number":
        Om(A, e, t, r);
        break;
      case "boolean":
        typeof A != "boolean" && ct(t, "boolean", A, r);
        break;
      case "color":
        Pm(A) || ct(t, "color", A, r, "invalid-color");
        break;
      case "literal":
        e.values.includes(A) || r.push({
          path: t,
          severity: "error",
          message: `Value at "${t}" must be one of: ${e.values.join(", ")}.`
        });
        break;
      case "union":
        Km(A, e.options, t, r);
        break;
      case "array":
        Rm(A, e.items, t, r);
        break;
      case "record":
        Dm(A, e.values, t, r);
        break;
      case "cssObject":
        Sd(A, t, r);
        break;
    }
  }
  function km(A, e, t, r) {
    if (!Bt(A)) {
      ct(t, "object", A, r);
      return;
    }
    const n = e.allowUnknown ?? "warn";
    for (const o of Object.keys(A)) {
      const i = t ? `${t}.${o}` : o, a = e.properties[o], s = A[o];
      a ? En(s, a, i, r) : typeof s == "function" || typeof s == "symbol" ? r.push({
        path: i,
        severity: "error",
        message: `Value at "${i}" is a ${typeof s}, which is not serializable.`
      }) : n === "warn" ? r.push({
        path: i,
        severity: "warning",
        code: "unknown-key",
        message: `Unknown theme option "${i}" \u2014 it may be ignored by MUI.`
      }) : n === "error" && r.push({
        path: i,
        severity: "error",
        code: "unknown-key",
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
  function Om(A, e, t, r) {
    if (typeof A != "number" || Number.isNaN(A)) {
      ct(t, "number", A, r, "invalid-number");
      return;
    }
    e.min !== void 0 && A < e.min && r.push({
      path: t,
      severity: "error",
      code: "number-out-of-range",
      message: `Value at "${t}" must be >= ${e.min}.`
    }), e.max !== void 0 && A > e.max && r.push({
      path: t,
      severity: "error",
      code: "number-out-of-range",
      message: `Value at "${t}" must be <= ${e.max}.`
    });
  }
  function Km(A, e, t, r) {
    for (const n of e) {
      const o = [];
      if (En(A, n, t, o), !o.some((i) => i.severity === "error")) {
        r.push(...o);
        return;
      }
    }
    ct(t, "one of the allowed types", A, r);
  }
  function Rm(A, e, t, r) {
    if (!Array.isArray(A)) {
      ct(t, "array", A, r);
      return;
    }
    A.forEach((n, o) => {
      En(n, e, `${t}[${o}]`, r);
    });
  }
  function Dm(A, e, t, r) {
    if (!Bt(A)) {
      ct(t, "object", A, r);
      return;
    }
    for (const n of Object.keys(A)) En(A[n], e, t ? `${t}.${n}` : n, r);
  }
  function Sd(A, e, t) {
    if (typeof A == "function" || typeof A == "symbol") {
      t.push({
        path: e,
        severity: "error",
        message: `Value at "${e}" is a ${typeof A}, which is not serializable.`
      });
      return;
    }
    if (!(typeof A == "string" || typeof A == "number")) {
      if (Bt(A)) {
        for (const r of Object.keys(A)) Sd(A[r], e ? `${e}.${r}` : r, t);
        return;
      }
      ct(e, "CSS value", A, t);
    }
  }
  function ct(A, e, t, r, n = "invalid-type") {
    const o = t === null ? "null" : Array.isArray(t) ? "array" : typeof t;
    r.push({
      path: A,
      severity: "error",
      code: n,
      message: `Value at "${A}" must be a ${e} (got ${o}).`
    });
  }
  const Mm = /\b(?:linear|radial|conic)-gradient\b/i;
  function Pm(A) {
    if (typeof A != "string") return false;
    const e = A.trim();
    return !e || Mm.test(e) ? false : typeof CSS < "u" && typeof CSS.supports == "function" ? CSS.supports("color", e) : true;
  }
  var xd = {
    exports: {}
  };
  (function(A) {
    (function(e) {
      var t = /^\s+/, r = /\s+$/, n = 0, o = e.round, i = e.min, a = e.max, s = e.random;
      function l(w, F) {
        if (w = w || "", F = F || {}, w instanceof l) return w;
        if (!(this instanceof l)) return new l(w, F);
        var Q = c(w);
        this._originalInput = w, this._r = Q.r, this._g = Q.g, this._b = Q.b, this._a = Q.a, this._roundA = o(100 * this._a) / 100, this._format = F.format || Q.format, this._gradientType = F.gradientType, this._r < 1 && (this._r = o(this._r)), this._g < 1 && (this._g = o(this._g)), this._b < 1 && (this._b = o(this._b)), this._ok = Q.ok, this._tc_id = n++;
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
          var w = this.toRgb();
          return (w.r * 299 + w.g * 587 + w.b * 114) / 1e3;
        },
        getLuminance: function() {
          var w = this.toRgb(), F, Q, M, $, P, sA;
          return F = w.r / 255, Q = w.g / 255, M = w.b / 255, F <= 0.03928 ? $ = F / 12.92 : $ = e.pow((F + 0.055) / 1.055, 2.4), Q <= 0.03928 ? P = Q / 12.92 : P = e.pow((Q + 0.055) / 1.055, 2.4), M <= 0.03928 ? sA = M / 12.92 : sA = e.pow((M + 0.055) / 1.055, 2.4), 0.2126 * $ + 0.7152 * P + 0.0722 * sA;
        },
        setAlpha: function(w) {
          return this._a = D(w), this._roundA = o(100 * this._a) / 100, this;
        },
        toHsv: function() {
          var w = p(this._r, this._g, this._b);
          return {
            h: w.h * 360,
            s: w.s,
            v: w.v,
            a: this._a
          };
        },
        toHsvString: function() {
          var w = p(this._r, this._g, this._b), F = o(w.h * 360), Q = o(w.s * 100), M = o(w.v * 100);
          return this._a == 1 ? "hsv(" + F + ", " + Q + "%, " + M + "%)" : "hsva(" + F + ", " + Q + "%, " + M + "%, " + this._roundA + ")";
        },
        toHsl: function() {
          var w = d(this._r, this._g, this._b);
          return {
            h: w.h * 360,
            s: w.s,
            l: w.l,
            a: this._a
          };
        },
        toHslString: function() {
          var w = d(this._r, this._g, this._b), F = o(w.h * 360), Q = o(w.s * 100), M = o(w.l * 100);
          return this._a == 1 ? "hsl(" + F + ", " + Q + "%, " + M + "%)" : "hsla(" + F + ", " + Q + "%, " + M + "%, " + this._roundA + ")";
        },
        toHex: function(w) {
          return y(this._r, this._g, this._b, w);
        },
        toHexString: function(w) {
          return "#" + this.toHex(w);
        },
        toHex8: function(w) {
          return h(this._r, this._g, this._b, this._a, w);
        },
        toHex8String: function(w) {
          return "#" + this.toHex8(w);
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
          return this._a === 0 ? "transparent" : this._a < 1 ? false : W[y(this._r, this._g, this._b, true)] || false;
        },
        toFilter: function(w) {
          var F = "#" + b(this._r, this._g, this._b, this._a), Q = F, M = this._gradientType ? "GradientType = 1, " : "";
          if (w) {
            var $ = l(w);
            Q = "#" + b($._r, $._g, $._b, $._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + M + "startColorstr=" + F + ",endColorstr=" + Q + ")";
        },
        toString: function(w) {
          var F = !!w;
          w = w || this._format;
          var Q = false, M = this._a < 1 && this._a >= 0, $ = !F && M && (w === "hex" || w === "hex6" || w === "hex3" || w === "hex4" || w === "hex8" || w === "name");
          return $ ? w === "name" && this._a === 0 ? this.toName() : this.toRgbString() : (w === "rgb" && (Q = this.toRgbString()), w === "prgb" && (Q = this.toPercentageRgbString()), (w === "hex" || w === "hex6") && (Q = this.toHexString()), w === "hex3" && (Q = this.toHexString(true)), w === "hex4" && (Q = this.toHex8String(true)), w === "hex8" && (Q = this.toHex8String()), w === "name" && (Q = this.toName()), w === "hsl" && (Q = this.toHslString()), w === "hsv" && (Q = this.toHsvString()), Q || this.toHexString());
        },
        clone: function() {
          return l(this.toString());
        },
        _applyModification: function(w, F) {
          var Q = w.apply(null, [
            this
          ].concat([].slice.call(F)));
          return this._r = Q._r, this._g = Q._g, this._b = Q._b, this.setAlpha(Q._a), this;
        },
        lighten: function() {
          return this._applyModification(C, arguments);
        },
        brighten: function() {
          return this._applyModification(I, arguments);
        },
        darken: function() {
          return this._applyModification(S, arguments);
        },
        desaturate: function() {
          return this._applyModification(m, arguments);
        },
        saturate: function() {
          return this._applyModification(v, arguments);
        },
        greyscale: function() {
          return this._applyModification(U, arguments);
        },
        spin: function() {
          return this._applyModification(x, arguments);
        },
        _applyCombination: function(w, F) {
          return w.apply(null, [
            this
          ].concat([].slice.call(F)));
        },
        analogous: function() {
          return this._applyCombination(N, arguments);
        },
        complement: function() {
          return this._applyCombination(f, arguments);
        },
        monochromatic: function() {
          return this._applyCombination(O, arguments);
        },
        splitcomplement: function() {
          return this._applyCombination(k, arguments);
        },
        triad: function() {
          return this._applyCombination(H, arguments);
        },
        tetrad: function() {
          return this._applyCombination(K, arguments);
        }
      }, l.fromRatio = function(w, F) {
        if (typeof w == "object") {
          var Q = {};
          for (var M in w) w.hasOwnProperty(M) && (M === "a" ? Q[M] = w[M] : Q[M] = Y(w[M]));
          w = Q;
        }
        return l(w, F);
      };
      function c(w) {
        var F = {
          r: 0,
          g: 0,
          b: 0
        }, Q = 1, M = null, $ = null, P = null, sA = false, lA = false;
        return typeof w == "string" && (w = nA(w)), typeof w == "object" && (J(w.r) && J(w.g) && J(w.b) ? (F = u(w.r, w.g, w.b), sA = true, lA = String(w.r).substr(-1) === "%" ? "prgb" : "rgb") : J(w.h) && J(w.s) && J(w.v) ? (M = Y(w.s), $ = Y(w.v), F = B(w.h, M, $), sA = true, lA = "hsv") : J(w.h) && J(w.s) && J(w.l) && (M = Y(w.s), P = Y(w.l), F = g(w.h, M, P), sA = true, lA = "hsl"), w.hasOwnProperty("a") && (Q = w.a)), Q = D(Q), {
          ok: sA,
          format: w.format || lA,
          r: i(255, a(F.r, 0)),
          g: i(255, a(F.g, 0)),
          b: i(255, a(F.b, 0)),
          a: Q
        };
      }
      function u(w, F, Q) {
        return {
          r: X(w, 255) * 255,
          g: X(F, 255) * 255,
          b: X(Q, 255) * 255
        };
      }
      function d(w, F, Q) {
        w = X(w, 255), F = X(F, 255), Q = X(Q, 255);
        var M = a(w, F, Q), $ = i(w, F, Q), P, sA, lA = (M + $) / 2;
        if (M == $) P = sA = 0;
        else {
          var fA = M - $;
          switch (sA = lA > 0.5 ? fA / (2 - M - $) : fA / (M + $), M) {
            case w:
              P = (F - Q) / fA + (F < Q ? 6 : 0);
              break;
            case F:
              P = (Q - w) / fA + 2;
              break;
            case Q:
              P = (w - F) / fA + 4;
              break;
          }
          P /= 6;
        }
        return {
          h: P,
          s: sA,
          l: lA
        };
      }
      function g(w, F, Q) {
        var M, $, P;
        w = X(w, 360), F = X(F, 100), Q = X(Q, 100);
        function sA(Z, ne, pA) {
          return pA < 0 && (pA += 1), pA > 1 && (pA -= 1), pA < 1 / 6 ? Z + (ne - Z) * 6 * pA : pA < 1 / 2 ? ne : pA < 2 / 3 ? Z + (ne - Z) * (2 / 3 - pA) * 6 : Z;
        }
        if (F === 0) M = $ = P = Q;
        else {
          var lA = Q < 0.5 ? Q * (1 + F) : Q + F - Q * F, fA = 2 * Q - lA;
          M = sA(fA, lA, w + 1 / 3), $ = sA(fA, lA, w), P = sA(fA, lA, w - 1 / 3);
        }
        return {
          r: M * 255,
          g: $ * 255,
          b: P * 255
        };
      }
      function p(w, F, Q) {
        w = X(w, 255), F = X(F, 255), Q = X(Q, 255);
        var M = a(w, F, Q), $ = i(w, F, Q), P, sA, lA = M, fA = M - $;
        if (sA = M === 0 ? 0 : fA / M, M == $) P = 0;
        else {
          switch (M) {
            case w:
              P = (F - Q) / fA + (F < Q ? 6 : 0);
              break;
            case F:
              P = (Q - w) / fA + 2;
              break;
            case Q:
              P = (w - F) / fA + 4;
              break;
          }
          P /= 6;
        }
        return {
          h: P,
          s: sA,
          v: lA
        };
      }
      function B(w, F, Q) {
        w = X(w, 360) * 6, F = X(F, 100), Q = X(Q, 100);
        var M = e.floor(w), $ = w - M, P = Q * (1 - F), sA = Q * (1 - $ * F), lA = Q * (1 - (1 - $) * F), fA = M % 6, Z = [
          Q,
          sA,
          P,
          P,
          lA,
          Q
        ][fA], ne = [
          lA,
          Q,
          Q,
          sA,
          P,
          P
        ][fA], pA = [
          P,
          P,
          lA,
          Q,
          Q,
          sA
        ][fA];
        return {
          r: Z * 255,
          g: ne * 255,
          b: pA * 255
        };
      }
      function y(w, F, Q, M) {
        var $ = [
          _(o(w).toString(16)),
          _(o(F).toString(16)),
          _(o(Q).toString(16))
        ];
        return M && $[0].charAt(0) == $[0].charAt(1) && $[1].charAt(0) == $[1].charAt(1) && $[2].charAt(0) == $[2].charAt(1) ? $[0].charAt(0) + $[1].charAt(0) + $[2].charAt(0) : $.join("");
      }
      function h(w, F, Q, M, $) {
        var P = [
          _(o(w).toString(16)),
          _(o(F).toString(16)),
          _(o(Q).toString(16)),
          _(uA(M))
        ];
        return $ && P[0].charAt(0) == P[0].charAt(1) && P[1].charAt(0) == P[1].charAt(1) && P[2].charAt(0) == P[2].charAt(1) && P[3].charAt(0) == P[3].charAt(1) ? P[0].charAt(0) + P[1].charAt(0) + P[2].charAt(0) + P[3].charAt(0) : P.join("");
      }
      function b(w, F, Q, M) {
        var $ = [
          _(uA(M)),
          _(o(w).toString(16)),
          _(o(F).toString(16)),
          _(o(Q).toString(16))
        ];
        return $.join("");
      }
      l.equals = function(w, F) {
        return !w || !F ? false : l(w).toRgbString() == l(F).toRgbString();
      }, l.random = function() {
        return l.fromRatio({
          r: s(),
          g: s(),
          b: s()
        });
      };
      function m(w, F) {
        F = F === 0 ? 0 : F || 10;
        var Q = l(w).toHsl();
        return Q.s -= F / 100, Q.s = q(Q.s), l(Q);
      }
      function v(w, F) {
        F = F === 0 ? 0 : F || 10;
        var Q = l(w).toHsl();
        return Q.s += F / 100, Q.s = q(Q.s), l(Q);
      }
      function U(w) {
        return l(w).desaturate(100);
      }
      function C(w, F) {
        F = F === 0 ? 0 : F || 10;
        var Q = l(w).toHsl();
        return Q.l += F / 100, Q.l = q(Q.l), l(Q);
      }
      function I(w, F) {
        F = F === 0 ? 0 : F || 10;
        var Q = l(w).toRgb();
        return Q.r = a(0, i(255, Q.r - o(255 * -(F / 100)))), Q.g = a(0, i(255, Q.g - o(255 * -(F / 100)))), Q.b = a(0, i(255, Q.b - o(255 * -(F / 100)))), l(Q);
      }
      function S(w, F) {
        F = F === 0 ? 0 : F || 10;
        var Q = l(w).toHsl();
        return Q.l -= F / 100, Q.l = q(Q.l), l(Q);
      }
      function x(w, F) {
        var Q = l(w).toHsl(), M = (Q.h + F) % 360;
        return Q.h = M < 0 ? 360 + M : M, l(Q);
      }
      function f(w) {
        var F = l(w).toHsl();
        return F.h = (F.h + 180) % 360, l(F);
      }
      function H(w) {
        var F = l(w).toHsl(), Q = F.h;
        return [
          l(w),
          l({
            h: (Q + 120) % 360,
            s: F.s,
            l: F.l
          }),
          l({
            h: (Q + 240) % 360,
            s: F.s,
            l: F.l
          })
        ];
      }
      function K(w) {
        var F = l(w).toHsl(), Q = F.h;
        return [
          l(w),
          l({
            h: (Q + 90) % 360,
            s: F.s,
            l: F.l
          }),
          l({
            h: (Q + 180) % 360,
            s: F.s,
            l: F.l
          }),
          l({
            h: (Q + 270) % 360,
            s: F.s,
            l: F.l
          })
        ];
      }
      function k(w) {
        var F = l(w).toHsl(), Q = F.h;
        return [
          l(w),
          l({
            h: (Q + 72) % 360,
            s: F.s,
            l: F.l
          }),
          l({
            h: (Q + 216) % 360,
            s: F.s,
            l: F.l
          })
        ];
      }
      function N(w, F, Q) {
        F = F || 6, Q = Q || 30;
        var M = l(w).toHsl(), $ = 360 / Q, P = [
          l(w)
        ];
        for (M.h = (M.h - ($ * F >> 1) + 720) % 360; --F; ) M.h = (M.h + $) % 360, P.push(l(M));
        return P;
      }
      function O(w, F) {
        F = F || 6;
        for (var Q = l(w).toHsv(), M = Q.h, $ = Q.s, P = Q.v, sA = [], lA = 1 / F; F--; ) sA.push(l({
          h: M,
          s: $,
          v: P
        })), P = (P + lA) % 1;
        return sA;
      }
      l.mix = function(w, F, Q) {
        Q = Q === 0 ? 0 : Q || 50;
        var M = l(w).toRgb(), $ = l(F).toRgb(), P = Q / 100, sA = {
          r: ($.r - M.r) * P + M.r,
          g: ($.g - M.g) * P + M.g,
          b: ($.b - M.b) * P + M.b,
          a: ($.a - M.a) * P + M.a
        };
        return l(sA);
      }, l.readability = function(w, F) {
        var Q = l(w), M = l(F);
        return (e.max(Q.getLuminance(), M.getLuminance()) + 0.05) / (e.min(Q.getLuminance(), M.getLuminance()) + 0.05);
      }, l.isReadable = function(w, F, Q) {
        var M = l.readability(w, F), $, P;
        switch (P = false, $ = aA(Q), $.level + $.size) {
          case "AAsmall":
          case "AAAlarge":
            P = M >= 4.5;
            break;
          case "AAlarge":
            P = M >= 3;
            break;
          case "AAAsmall":
            P = M >= 7;
            break;
        }
        return P;
      }, l.mostReadable = function(w, F, Q) {
        var M = null, $ = 0, P, sA, lA, fA;
        Q = Q || {}, sA = Q.includeFallbackColors, lA = Q.level, fA = Q.size;
        for (var Z = 0; Z < F.length; Z++) P = l.readability(w, F[Z]), P > $ && ($ = P, M = l(F[Z]));
        return l.isReadable(w, M, {
          level: lA,
          size: fA
        }) || !sA ? M : (Q.includeFallbackColors = false, l.mostReadable(w, [
          "#fff",
          "#000"
        ], Q));
      };
      var R = l.names = {
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
      }, W = l.hexNames = rA(R);
      function rA(w) {
        var F = {};
        for (var Q in w) w.hasOwnProperty(Q) && (F[w[Q]] = Q);
        return F;
      }
      function D(w) {
        return w = parseFloat(w), (isNaN(w) || w < 0 || w > 1) && (w = 1), w;
      }
      function X(w, F) {
        T(w) && (w = "100%");
        var Q = G(w);
        return w = i(F, a(0, parseFloat(w))), Q && (w = parseInt(w * F, 10) / 100), e.abs(w - F) < 1e-6 ? 1 : w % F / parseFloat(F);
      }
      function q(w) {
        return i(1, a(0, w));
      }
      function tA(w) {
        return parseInt(w, 16);
      }
      function T(w) {
        return typeof w == "string" && w.indexOf(".") != -1 && parseFloat(w) === 1;
      }
      function G(w) {
        return typeof w == "string" && w.indexOf("%") != -1;
      }
      function _(w) {
        return w.length == 1 ? "0" + w : "" + w;
      }
      function Y(w) {
        return w <= 1 && (w = w * 100 + "%"), w;
      }
      function uA(w) {
        return e.round(parseFloat(w) * 255).toString(16);
      }
      function iA(w) {
        return tA(w) / 255;
      }
      var AA = (function() {
        var w = "[-\\+]?\\d+%?", F = "[-\\+]?\\d*\\.\\d+%?", Q = "(?:" + F + ")|(?:" + w + ")", M = "[\\s|\\(]+(" + Q + ")[,|\\s]+(" + Q + ")[,|\\s]+(" + Q + ")\\s*\\)?", $ = "[\\s|\\(]+(" + Q + ")[,|\\s]+(" + Q + ")[,|\\s]+(" + Q + ")[,|\\s]+(" + Q + ")\\s*\\)?";
        return {
          CSS_UNIT: new RegExp(Q),
          rgb: new RegExp("rgb" + M),
          rgba: new RegExp("rgba" + $),
          hsl: new RegExp("hsl" + M),
          hsla: new RegExp("hsla" + $),
          hsv: new RegExp("hsv" + M),
          hsva: new RegExp("hsva" + $),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
      })();
      function J(w) {
        return !!AA.CSS_UNIT.exec(w);
      }
      function nA(w) {
        w = w.replace(t, "").replace(r, "").toLowerCase();
        var F = false;
        if (R[w]) w = R[w], F = true;
        else if (w == "transparent") return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
          format: "name"
        };
        var Q;
        return (Q = AA.rgb.exec(w)) ? {
          r: Q[1],
          g: Q[2],
          b: Q[3]
        } : (Q = AA.rgba.exec(w)) ? {
          r: Q[1],
          g: Q[2],
          b: Q[3],
          a: Q[4]
        } : (Q = AA.hsl.exec(w)) ? {
          h: Q[1],
          s: Q[2],
          l: Q[3]
        } : (Q = AA.hsla.exec(w)) ? {
          h: Q[1],
          s: Q[2],
          l: Q[3],
          a: Q[4]
        } : (Q = AA.hsv.exec(w)) ? {
          h: Q[1],
          s: Q[2],
          v: Q[3]
        } : (Q = AA.hsva.exec(w)) ? {
          h: Q[1],
          s: Q[2],
          v: Q[3],
          a: Q[4]
        } : (Q = AA.hex8.exec(w)) ? {
          r: tA(Q[1]),
          g: tA(Q[2]),
          b: tA(Q[3]),
          a: iA(Q[4]),
          format: F ? "name" : "hex8"
        } : (Q = AA.hex6.exec(w)) ? {
          r: tA(Q[1]),
          g: tA(Q[2]),
          b: tA(Q[3]),
          format: F ? "name" : "hex"
        } : (Q = AA.hex4.exec(w)) ? {
          r: tA(Q[1] + "" + Q[1]),
          g: tA(Q[2] + "" + Q[2]),
          b: tA(Q[3] + "" + Q[3]),
          a: iA(Q[4] + "" + Q[4]),
          format: F ? "name" : "hex8"
        } : (Q = AA.hex3.exec(w)) ? {
          r: tA(Q[1] + "" + Q[1]),
          g: tA(Q[2] + "" + Q[2]),
          b: tA(Q[3] + "" + Q[3]),
          format: F ? "name" : "hex"
        } : false;
      }
      function aA(w) {
        var F, Q;
        return w = w || {
          level: "AA",
          size: "small"
        }, F = (w.level || "AA").toUpperCase(), Q = (w.size || "small").toLowerCase(), F !== "AA" && F !== "AAA" && (F = "AA"), Q !== "small" && Q !== "large" && (Q = "small"), {
          level: F,
          size: Q
        };
      }
      A.exports ? A.exports = l : window.tinycolor = l;
    })(Math);
  })(xd);
  var _m = xd.exports;
  se = Bu(_m);
  var Br = function() {
    return Br = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Br.apply(this, arguments);
  }, Nm = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, Gm = function(A) {
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
    function t(T) {
      var G = new Error(A + ": " + T);
      throw G;
    }
    function r(T) {
      A = A.substr(T);
    }
    function n(T) {
      var G = /^[\n\r\t\s]+/.exec(A);
      G && r(G[0].length);
      var _ = T.exec(A);
      return _ && r(_[0].length), _;
    }
    function o(T) {
      var G = T(), _ = [];
      if (G) for (_.push(G); n(e.comma); ) G = T(), G ? _.push(G) : t("One extra comma");
      return _;
    }
    function i(T, G, _) {
      var Y = n(G);
      if (Y) return {
        type: T,
        value: Y[_]
      };
    }
    function a() {
      var T = i("hex", e.hexColor, 1);
      if (T == null ? void 0 : T.value) {
        var G = se(T == null ? void 0 : T.value).toRgb(), _ = G.r, Y = G.g, uA = G.b, iA = G.a;
        return {
          value: "rgba(".concat(_, ", ").concat(Y, ", ").concat(uA, ", ").concat(iA, ")")
        };
      }
    }
    var s = function(T) {
      var G = _t(T == null ? void 0 : T[0]);
      return {
        value: "".concat(G ? "RGBA" : "rgba", "(").concat(o(W), ")")
      };
    };
    function l(T, G) {
      var _ = n(T);
      if (_) {
        n(e.startCall) || t("Missing (");
        var Y = G(_);
        return n(e.endCall) || t("Missing )"), Y;
      }
    }
    function c() {
      return l(e.hslColor, rA);
    }
    function u() {
      return l(e.rgbaColor, s);
    }
    function d() {
      return l(e.rgbColor, X);
    }
    function g() {
      var T = i("literal", e.literalColor, 0);
      if (T == null ? void 0 : T.value) {
        var G = se(T == null ? void 0 : T.value).toRgb(), _ = G.r, Y = G.g, uA = G.b, iA = G.a;
        return {
          value: "rgba(".concat(_, ", ").concat(Y, ", ").concat(uA, ", ").concat(iA, ")")
        };
      }
    }
    function p() {
      return l(e.hsvColor, D);
    }
    function B() {
      return a() || c() || u() || d() || g() || p();
    }
    function y() {
      var T, G = B();
      return G || t("Expected color definition"), G.left = parseInt((T = q()) === null || T === void 0 ? void 0 : T.value), G;
    }
    function h(T, G, _) {
      return l(G, function() {
        var Y = _();
        return Y && (n(e.comma) || t("Missing comma before color stops")), {
          type: T,
          orientation: Y,
          colorStops: o(y)
        };
      });
    }
    function b() {
      return C() || I();
    }
    function m() {
      return h("linear-gradient", e.linearGradient, b) || h("repeating-linear-gradient", e.repeatingLinearGradient, b) || h("radial-gradient", e.radialGradient, S) || h("repeating-radial-gradient", e.repeatingRadialGradient, S);
    }
    function v() {
      return o(m);
    }
    function U() {
      var T, G = v();
      A.length > 0 && t("Invalid input not EOF");
      var _ = G[0], Y = (T = _ == null ? void 0 : _.colorStops) === null || T === void 0 ? void 0 : T.filter(function(iA) {
        return _t(iA.value);
      }).length, uA = function() {
        if (Y > 0) return _;
        var iA = function(AA, J) {
          return J === 0 ? Ui(AA) : In(AA);
        };
        return Br(Br({}, _), {
          colorStops: _.colorStops.map(function(AA, J) {
            return Br(Br({}, AA), {
              value: iA(AA, J)
            });
          })
        });
      };
      return uA();
    }
    function C() {
      return i("directional", e.sideOrCorner, 1);
    }
    function I() {
      return i("angular", e.angleValue, 1);
    }
    function S() {
      var T, G = x(), _;
      return G && (T = [], T.push(G), _ = A, n(e.comma) && (G = x(), G ? T.push(G) : A = _)), T;
    }
    function x() {
      var T = H() || K();
      if (T) T.at = N();
      else {
        var G = k();
        if (G) {
          T = G;
          var _ = N();
          _ && (T.at = _);
        } else {
          var Y = O();
          Y && (T = {
            type: "default-radial",
            at: Y
          });
        }
      }
      return T;
    }
    function f() {
      return i("px", e.pixelValue, 1) || i("em", e.emValue, 1);
    }
    function H() {
      var T = i("shape", /^(circle)/i, 0);
      return T && (T.style = f() || k()), T;
    }
    function K() {
      var T = i("shape", /^(ellipse)/i, 0);
      return T && (T.style = q() || k()), T;
    }
    function k() {
      return i("extent-keyword", e.extentKeywords, 1);
    }
    function N() {
      if (i("position", /^at/, 0)) {
        var T = O();
        return T || t("Missing positioning value"), T;
      }
    }
    function O() {
      var T = R();
      if (T.x || T.y) return {
        type: "position",
        value: T
      };
    }
    function R() {
      return {
        x: q(),
        y: q()
      };
    }
    function W() {
      return n(e.number)[1];
    }
    var rA = function(T) {
      var G = _t(T == null ? void 0 : T[0]), _ = o(W), Y = se({
        h: _[0],
        s: _[1],
        l: _[2],
        a: _[3] || 1
      }).toRgb(), uA = Y.r, iA = Y.g, AA = Y.b, J = Y.a;
      return {
        value: "".concat(G ? "RGBA" : "rgba", "(").concat(uA, ", ").concat(iA, ", ").concat(AA, ", ").concat(J, ")")
      };
    }, D = function(T) {
      var G = _t(T == null ? void 0 : T[0]), _ = o(W), Y = se({
        h: _[0],
        s: _[1],
        v: _[2],
        a: _[3] || 1
      }).toRgb(), uA = Y.r, iA = Y.g, AA = Y.b, J = Y.a;
      return {
        value: "".concat(G ? "RGBA" : "rgba", "(").concat(uA, ", ").concat(iA, ", ").concat(AA, ", ").concat(J, ")")
      };
    }, X = function(T) {
      var G = _t(T == null ? void 0 : T[0]), _ = n(e.spacedRgbColor), Y = _ || Nm([
        null
      ], o(W), true), uA = Y[1], iA = Y[2], AA = Y[3], J = Y[4], nA = J === void 0 ? 1 : J;
      return {
        value: "".concat(G ? "RGBA" : "rgba", "(").concat(uA, ", ").concat(iA, ", ").concat(AA, ", ").concat(nA, ")")
      };
    };
    function q() {
      return i("%", e.percentageValue, 1) || tA() || f();
    }
    function tA() {
      return i("position-keyword", e.positionKeywords, 1);
    }
    return U();
  }, In = function(A) {
    return A.value.toLowerCase();
  }, Ui = function(A) {
    return A.value.toUpperCase();
  }, Vm = function(A, e, t) {
    var r = A == null ? void 0 : A.includes("gradient");
    if (r) {
      var n = A == null ? void 0 : A.includes("conic"), o = n ? t : A;
      n && console.log("Sorry we cant handle conic gradients yet");
      var i = Gm(o);
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
  }, So = function() {
    return So = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, So.apply(this, arguments);
  }, Hd = function(A) {
    var e = A.target.parentNode.getBoundingClientRect(), t = A.target.className, r = t === "c-resize ps-rl" ? 15 : 0;
    return {
      offsetLeft: (e == null ? void 0 : e.x) + r,
      offsetTop: e == null ? void 0 : e.y,
      clientWidth: e == null ? void 0 : e.width,
      clientHeight: e == null ? void 0 : e.height
    };
  };
  function Fr(A, e) {
    var t = Hd(A), r = t.offsetLeft, n = t.clientWidth, o = A.clientX - r - e / 2, i = n - 18, a = br(o, 0, i);
    return Math.round(a / (i / 100));
  }
  function $m(A, e, t, r, n) {
    var o = A * t - n / 2, i = (100 - e) / 100 * r - n / 2;
    return [
      o,
      i
    ];
  }
  var Wm = function(A) {
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
  function Xm(A, e) {
    var t = Hd(A), r = t.offsetLeft, n = t.offsetTop, o = t.clientWidth, i = t.clientHeight, a = Wm(A), s = a.clientX, l = a.clientY, c = function() {
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
  var _t = function(A) {
    var e;
    return (A == null ? void 0 : A[0]) === ((e = A == null ? void 0 : A[0]) === null || e === void 0 ? void 0 : e.toUpperCase());
  }, Td = function(A) {
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
  }, Jm = function(A) {
    var e, t, r, n, o;
    if (typeof A == "string") return A;
    if (!((e = A == null ? void 0 : A.type) === null || e === void 0) && e.includes("gradient")) {
      var i = (t = A == null ? void 0 : A.colorStops) === null || t === void 0 ? void 0 : t.sort(function(d, g) {
        return (d == null ? void 0 : d.left) - (g == null ? void 0 : g.left);
      }), a = (r = i == null ? void 0 : i.map(function(d) {
        return "".concat(d == null ? void 0 : d.value, " ").concat(d == null ? void 0 : d.left, "%");
      })) === null || r === void 0 ? void 0 : r.join(", "), s = A == null ? void 0 : A.type, l = Td((n = A == null ? void 0 : A.orientation) === null || n === void 0 ? void 0 : n.value), c = s === "linear-gradient" ? "".concat(l, "deg") : "circle";
      return "".concat(s, "(").concat(c, ", ").concat(a, ")");
    } else {
      var u = ((o = A == null ? void 0 : A.colorStops[0]) === null || o === void 0 ? void 0 : o.value) || "rgba(175, 51, 242, 1)";
      return u;
    }
  }, Ym = function(A, e) {
    var t = A == null ? void 0 : A.map(function(o, i) {
      return So(So({}, o), {
        index: i
      });
    }), r = t == null ? void 0 : t.find(function(o) {
      return _t(o.value);
    }), n = r || t[0];
    return {
      currentColor: (n == null ? void 0 : n.value) || e,
      selectedColor: (n == null ? void 0 : n.index) || 0,
      currentLeft: (n == null ? void 0 : n.left) || 0
    };
  }, zm = function(A) {
    var e, t = A == null ? void 0 : A.split(",")[0], r = (e = t == null ? void 0 : t.split("(")[1]) === null || e === void 0 ? void 0 : e.replace("deg", "");
    return Td(r);
  }, jm = function(A) {
    var e = A == null ? void 0 : A.includes("gradient"), t = A == null ? void 0 : A.split("(")[0], r = zm(A), n = t === "linear-gradient" ? "".concat(r, "deg") : "circle";
    return {
      degrees: r,
      degreeStr: n,
      isGradient: e,
      gradientType: t
    };
  }, we = function() {
    return we = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, we.apply(this, arguments);
  }, Zm = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, Ld = wt(null);
  function qm(A) {
    var e, t, r, n, o = A.value, i = A.children, a = A.onChange, s = A.isDarkMode, l = A.squareWidth, c = A.hideOpacity, u = A.showHexAlpha, d = A.squareHeight, g = A.passedConfig, p = A.defaultStyles, B = A.pickerIdSuffix, y = {
      barSize: (e = g.barSize) !== null && e !== void 0 ? e : _n.barSize,
      crossSize: (t = g.crossSize) !== null && t !== void 0 ? t : _n.crossSize,
      defaultColor: (r = g.defaultColor) !== null && r !== void 0 ? r : _n.defaultColor,
      defaultGradient: (n = g.defaultGradient) !== null && n !== void 0 ? n : _n.defaultGradient
    }, h = Vm(o, y.defaultColor, y.defaultGradient), b = jm(o), m = b.degrees, v = b.degreeStr, U = b.isGradient, C = b.gradientType, I = Ym(h, y.defaultGradient), S = I.currentColor, x = I.selectedColor, f = I.currentLeft, H = BA("rgb"), K = H[0], k = H[1], N = BA({}), O = N[0], R = N[1], W = se(S), rA = W.toRgb(), D = W.toHsv(), X = BA(we(we({}, rA), D)), q = X[0], tA = X[1];
    gA(function() {
      (D == null ? void 0 : D.s) === 0 ? tA(we(we(we({}, rA), D), {
        h: q == null ? void 0 : q.h
      })) : tA(we(we({}, rA), D));
    }, [
      S
    ]);
    var T = function(iA) {
      var AA = iA.sort(function(aA, w) {
        return aA.left - w.left;
      }), J = AA == null ? void 0 : AA.map(function(aA) {
        return "".concat(aA == null ? void 0 : aA.value, " ").concat(aA.left, "%");
      }), nA = "".concat(C, "(").concat(v, ", ").concat(J.join(", "), ")");
      R(we(we({}, O), {
        gradient: nA
      })), a(nA);
    }, G = function(iA, AA) {
      var J = h == null ? void 0 : h.filter(function(aA) {
        return !_t(aA.value);
      }), nA = Zm([
        {
          value: iA.toUpperCase(),
          left: AA ?? f
        }
      ], J, true);
      T(nA);
    }, _ = function(iA) {
      U ? G(iA) : (R(we(we({}, O), {
        color: iA
      })), a(iA));
    }, Y = function() {
      if ((h == null ? void 0 : h.length) > 2) {
        var iA = h == null ? void 0 : h.map(function(J, nA) {
          return we(we({}, J), {
            value: nA === x - 1 ? Ui(J) : In(J)
          });
        }), AA = iA == null ? void 0 : iA.filter(function(J, nA) {
          return nA !== x;
        });
        T(AA);
      }
    }, uA = {
      hc: q,
      setHc: tA,
      value: o,
      colors: h,
      config: y,
      degrees: m,
      onChange: a,
      previous: O,
      inputType: K,
      tinyColor: W,
      isDarkMode: s,
      isGradient: U,
      squareWidth: l,
      hideOpacity: c,
      currentLeft: f,
      deletePoint: Y,
      showHexAlpha: u,
      squareHeight: d,
      setInputType: k,
      gradientType: C,
      handleChange: _,
      currentColor: S,
      selectedColor: x,
      defaultStyles: p,
      handleGradient: G,
      pickerIdSuffix: B,
      createGradientStr: T
    };
    return E.createElement(Ld.Provider, {
      value: uA
    }, i);
  }
  function UA() {
    var A = De(Ld);
    if (!A) throw new Error("usePicker has to be used within <PickerContext.Provider>");
    return A;
  }
  var _n = {
    barSize: 18,
    crossSize: 18,
    defaultColor: "rgba(175, 51, 242, 1)",
    defaultGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
  }, AC = function(A, e) {
    gA(function() {
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
  }, eC = function(A, e, t, r) {
    gA(function() {
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
  }, tC = function(A, e, t, r) {
    gA(function() {
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
  }, rC = function(A, e, t, r) {
    gA(function() {
      var n, o = (n = A == null ? void 0 : A.current) === null || n === void 0 ? void 0 : n.getContext("2d", {
        willReadFrequently: true
      });
      if (o) {
        o.rect(0, 0, r, 14);
        for (var i = o.createLinearGradient(0, 0, r, 0), a = 0; a <= 100; a += 10) {
          var s = se({
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
  }, xo = function() {
    return xo = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, xo.apply(this, arguments);
  }, nC = function() {
    var A = oA(null), e = UA(), t = e.config, r = e.handleChange, n = e.squareWidth, o = e.hc, i = e.setHc, a = e.pickerIdSuffix, s = BA(false), l = s[0], c = s[1], u = t.barSize;
    AC(A, n);
    var d = function() {
      c(false);
    }, g = function() {
      c(true);
    }, p = function(h) {
      var b = Fr(h, u) * 3.6, m = se({
        h: b,
        s: o == null ? void 0 : o.s,
        v: o == null ? void 0 : o.v
      }), v = m.toRgb(), U = v.r, C = v.g, I = v.b;
      r("rgba(".concat(U, ", ").concat(C, ", ").concat(I, ", ").concat(o.a, ")")), i(xo(xo({}, o), {
        h: b
      }));
    }, B = function(h) {
      l && p(h);
    }, y = function(h) {
      l || p(h);
    };
    return gA(function() {
      var h = function() {
        d();
      };
      return window.addEventListener("mouseup", h), function() {
        window.removeEventListener("mouseup", h);
      };
    }, []), E.createElement("div", {
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      onMouseMove: function(h) {
        return B(h);
      },
      id: "rbgcp-hue-wrap".concat(a)
    }, E.createElement("div", {
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
    }), E.createElement("canvas", {
      ref: A,
      height: "14px",
      width: "".concat(n, "px"),
      onClick: function(h) {
        return y(h);
      },
      id: "rbgcp-hue-bar".concat(a),
      style: {
        borderRadius: 14,
        position: "relative",
        verticalAlign: "top"
      }
    }));
  };
  function oC(A, e, t) {
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
  var iC = function(A) {
    var e = A.c, t = A.m, r = A.y, n = A.k, o = 255 * (1 - e) * (1 - n), i = 255 * (1 - t) * (1 - n), a = 255 * (1 - r) * (1 - n);
    return {
      r: o,
      g: i,
      b: a
    };
  }, aC = function(A) {
    return typeof A != "number" ? "FF" : A < 0 ? "00" : A > 1 ? "FF" : Math.round(A * 255).toString(16).padStart(2, "0").toUpperCase();
  }, Re = function() {
    return Re = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Re.apply(this, arguments);
  }, Qe = function(A) {
    var e = A.label, t = A.value, r = A.callback, n = A.max, o = n === void 0 ? 100 : n, i = A.hideOpacity, a = A.defaultStyles, s = A.pickerIdSuffix, l = BA(t), c = l[0], u = l[1], d = i ? "25%" : "20%";
    gA(function() {
      u(t);
    }, [
      t
    ]);
    var g = function(p) {
      var B = br(parseFloat(p.target.value), 0, o);
      u(B), r(B);
    };
    return E.createElement("div", {
      style: {
        width: d,
        flexShrink: 1
      },
      id: "rbgcp-".concat(e, "-input-wrapper").concat(s)
    }, E.createElement("input", {
      value: c,
      onChange: function(p) {
        return g(p);
      },
      style: Re({}, a.rbgcpInput),
      id: "rbgcp-".concat(e, "-input").concat(s)
    }), E.createElement("div", {
      style: Re({}, a.rbgcpInputLabel)
    }, e));
  }, sC = function(A) {
    var e = A.opacity, t = A.tinyColor, r = A.showHexAlpha, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = BA(""), s = a[0], l = a[1], c = t.toHex(), u = BA(c), d = u[0], g = u[1];
    gA(function() {
      s !== "hex" && g(c);
    }, [
      t,
      s,
      c
    ]);
    var p = function() {
      l("hex");
    }, B = function() {
      l("");
    }, y = function(v) {
      var U = se(v.target.value);
      if (g(v.target.value), U.isValid()) {
        var C = U.toRgb(), I = C.r, S = C.g, x = C.b, f = "rgba(".concat(I, ", ").concat(S, ", ").concat(x, ", ").concat(e, ")");
        n(f);
      }
    }, h = r ? "".concat(d).concat(aC(e)) : d, b = r ? "HEXA" : "HEX", m = r ? 88 : 76;
    return E.createElement("div", {
      style: {
        width: m,
        flexShrink: 0
      },
      id: "rbgcp-hex-input-wrapper".concat(i)
    }, E.createElement("input", {
      onBlur: B,
      onFocus: p,
      onChange: function(v) {
        return y(v);
      },
      value: h == null ? void 0 : h.toUpperCase(),
      id: "rbgcp-hex-input".concat(i),
      style: Re(Re({}, o.rbgcpInput), o.rbgcpHexInput)
    }), E.createElement("div", {
      style: Re({}, o.rbgcpInputLabel)
    }, b));
  }, lC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = a.r, l = a.g, c = a.b;
      r("rgba(".concat(s, ", ").concat(l, ", ").concat(c, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return E.createElement(E.Fragment, null, E.createElement(Qe, {
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
    }), E.createElement(Qe, {
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
    }), E.createElement(Qe, {
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
  }, cC = function(A) {
    var e = A.hc, t = A.setHc, r = A.tinyColor, n = A.hideOpacity, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = r.toHsl(), l = s.s, c = s.l, u = function(g, p, B) {
      var y = se({
        h: g,
        s: p,
        l: B
      }).toRgb(), h = y.r, b = y.g, m = y.b;
      o("rgba(".concat(h, ", ").concat(b, ", ").concat(m, ", ").concat(e == null ? void 0 : e.a, ")")), t(Re(Re({}, e), {
        h: g
      }));
    }, d = function(g) {
      var p = se(g).toRgb(), B = p.r, y = p.g, h = p.b;
      o("rgba(".concat(B, ", ").concat(y, ", ").concat(h, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return E.createElement(E.Fragment, null, E.createElement(Qe, {
      label: "H",
      max: 360,
      value: Ze(e == null ? void 0 : e.h),
      hideOpacity: n,
      defaultStyles: i,
      pickerIdSuffix: a,
      callback: function(g) {
        return u(g, l, c);
      }
    }), E.createElement(Qe, {
      label: "S",
      value: Ze(l * 100),
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
    }), E.createElement(Qe, {
      label: "L",
      value: Ze(c * 100),
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
  }, uC = function(A) {
    var e = A.hc, t = A.setHc, r = A.hideOpacity, n = A.handleChange, o = A.defaultStyles, i = A.pickerIdSuffix, a = function(l, c, u) {
      var d = se({
        h: l,
        s: c,
        v: u
      }).toRgb(), g = d.r, p = d.g, B = d.b;
      n("rgba(".concat(g, ", ").concat(p, ", ").concat(B, ", ").concat(e == null ? void 0 : e.a, ")")), t(Re(Re({}, e), {
        h: l
      }));
    }, s = function(l) {
      var c = se(l).toRgb(), u = c.r, d = c.g, g = c.b;
      n("rgba(".concat(u, ", ").concat(d, ", ").concat(g, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return E.createElement(E.Fragment, null, E.createElement(Qe, {
      label: "H",
      max: 360,
      value: Ze(e == null ? void 0 : e.h),
      hideOpacity: r,
      defaultStyles: o,
      pickerIdSuffix: i,
      callback: function(l) {
        return a(l, e == null ? void 0 : e.s, e == null ? void 0 : e.v);
      }
    }), E.createElement(Qe, {
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
    }), E.createElement(Qe, {
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
  }, dC = function(A) {
    var e = A.hc, t = A.hideOpacity, r = A.handleChange, n = A.defaultStyles, o = A.pickerIdSuffix, i = oC(e == null ? void 0 : e.r, e == null ? void 0 : e.g, e == null ? void 0 : e.b), a = i.c, s = i.m, l = i.y, c = i.k, u = function(d) {
      var g = iC(d), p = g.r, B = g.g, y = g.b;
      r("rgba(".concat(p, ", ").concat(B, ", ").concat(y, ", ").concat(e == null ? void 0 : e.a, ")"));
    };
    return E.createElement(E.Fragment, null, E.createElement(Qe, {
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
    }), E.createElement(Qe, {
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
    }), E.createElement(Qe, {
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
    }), E.createElement(Qe, {
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
  }, fC = function() {
    var A = UA(), e = A.hc, t = A.setHc, r = A.inputType, n = A.tinyColor, o = A.hideOpacity, i = A.showHexAlpha, a = A.handleChange, s = A.defaultStyles, l = A.pickerIdSuffix;
    return E.createElement("div", {
      style: Re({
        columnGap: 6,
        paddingTop: 14,
        display: "flex",
        justifyContent: "space-between"
      }, s.rbgcpInputsWrap),
      id: "rbgcp-inputs-wrap".concat(l)
    }, r !== "cmyk" && E.createElement(sC, {
      opacity: e == null ? void 0 : e.a,
      tinyColor: n,
      showHexAlpha: i,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsl" && E.createElement(cC, {
      hc: e,
      setHc: t,
      tinyColor: n,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "rgb" && E.createElement(lC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "hsv" && E.createElement(uC, {
      hc: e,
      setHc: t,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), r === "cmyk" && E.createElement(dC, {
      hc: e,
      hideOpacity: o,
      handleChange: a,
      defaultStyles: s,
      pickerIdSuffix: l
    }), !o && E.createElement(Qe, {
      label: "A",
      hideOpacity: o,
      defaultStyles: s,
      value: Math.round((e == null ? void 0 : e.a) * 100),
      pickerIdSuffix: l,
      callback: function(c) {
        return a("rgba(".concat(e == null ? void 0 : e.r, ", ").concat(e == null ? void 0 : e.g, ", ").concat(e == null ? void 0 : e.b, ", ").concat(c / 100, ")"));
      }
    }));
  }, gC = function(A, e, t, r) {
    gA(function() {
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
  }, kd = "Expected a function", sc = NaN, pC = "[object Symbol]", BC = /^\s+|\s+$/g, hC = /^[-+]0x[0-9a-f]+$/i, wC = /^0b[01]+$/i, mC = /^0o[0-7]+$/i, CC = parseInt, vC = typeof Tn == "object" && Tn && Tn.Object === Object && Tn, QC = typeof self == "object" && self && self.Object === Object && self, yC = vC || QC || Function("return this")(), bC = Object.prototype, FC = bC.toString, UC = Math.max, EC = Math.min, Ji = function() {
    return yC.Date.now();
  };
  function IC(A, e, t) {
    var r, n, o, i, a, s, l = 0, c = false, u = false, d = true;
    if (typeof A != "function") throw new TypeError(kd);
    e = lc(e) || 0, Ho(t) && (c = !!t.leading, u = "maxWait" in t, o = u ? UC(lc(t.maxWait) || 0, e) : o, d = "trailing" in t ? !!t.trailing : d);
    function g(C) {
      var I = r, S = n;
      return r = n = void 0, l = C, i = A.apply(S, I), i;
    }
    function p(C) {
      return l = C, a = setTimeout(h, e), c ? g(C) : i;
    }
    function B(C) {
      var I = C - s, S = C - l, x = e - I;
      return u ? EC(x, o - S) : x;
    }
    function y(C) {
      var I = C - s, S = C - l;
      return s === void 0 || I >= e || I < 0 || u && S >= o;
    }
    function h() {
      var C = Ji();
      if (y(C)) return b(C);
      a = setTimeout(h, B(C));
    }
    function b(C) {
      return a = void 0, d && r ? g(C) : (r = n = void 0, i);
    }
    function m() {
      a !== void 0 && clearTimeout(a), l = 0, r = s = n = a = void 0;
    }
    function v() {
      return a === void 0 ? i : b(Ji());
    }
    function U() {
      var C = Ji(), I = y(C);
      if (r = arguments, n = this, s = C, I) {
        if (a === void 0) return p(s);
        if (u) return a = setTimeout(h, e), g(s);
      }
      return a === void 0 && (a = setTimeout(h, e)), i;
    }
    return U.cancel = m, U.flush = v, U;
  }
  function SC(A, e, t) {
    var r = true, n = true;
    if (typeof A != "function") throw new TypeError(kd);
    return Ho(t) && (r = "leading" in t ? !!t.leading : r, n = "trailing" in t ? !!t.trailing : n), IC(A, e, {
      leading: r,
      maxWait: e,
      trailing: n
    });
  }
  function Ho(A) {
    var e = typeof A;
    return !!A && (e == "object" || e == "function");
  }
  function xC(A) {
    return !!A && typeof A == "object";
  }
  function HC(A) {
    return typeof A == "symbol" || xC(A) && FC.call(A) == pC;
  }
  function lc(A) {
    if (typeof A == "number") return A;
    if (HC(A)) return sc;
    if (Ho(A)) {
      var e = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = Ho(e) ? e + "" : e;
    }
    if (typeof A != "string") return A === 0 ? A : +A;
    A = A.replace(BC, "");
    var t = wC.test(A);
    return t || mC.test(A) ? CC(A.slice(2), t ? 2 : 8) : hC.test(A) ? sc : +A;
  }
  var TC = SC;
  const LC = Bu(TC);
  var Nt = function() {
    return Nt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Nt.apply(this, arguments);
  }, kC = function() {
    var A, e, t = UA(), r = t.hc, n = t.config, o = t.squareWidth, i = t.squareHeight, a = t.handleChange, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.crossSize, u = BA(false), d = u[0], g = u[1], p = oA(null), B = $m(r == null ? void 0 : r.s, (r == null ? void 0 : r.v) * 100, o, i, c), y = B[0], h = B[1], b = BA({
      x: y,
      y: h
    }), m = b[0], v = b[1];
    gC(p, r == null ? void 0 : r.h, o, i), gA(function() {
      d || v({
        x: (r == null ? void 0 : r.v) === 0 ? m.x : y,
        y: h
      });
    }, [
      y,
      h
    ]);
    var U = function(H) {
      var K = LC(function() {
        var k = Xm(H, c), N = k[0], O = k[1];
        if (N && O) {
          var R = Math.min(N + c / 2, o - 1), W = Math.min(O + c / 2, i - 1), rA = R / o * 100, D = 100 - W / i * 100;
          v({
            x: D === 0 ? m == null ? void 0 : m.x : N,
            y: O
          });
          var X = se("hsva(".concat(r == null ? void 0 : r.h, ", ").concat(rA, "%, ").concat(D, "%, ").concat(r == null ? void 0 : r.a, ")"));
          a(X.toRgbString());
        }
      }, 250);
      K();
    }, C = function() {
      g(false);
    }, I = function(H) {
      d && U(H);
    }, S = function(H) {
      d || U(H);
    }, x = function() {
      g(true);
    }, f = function(H) {
      g(true), U(H);
    };
    return gA(function() {
      var H = function() {
        C();
      };
      return window.addEventListener("mouseup", H), function() {
        window.removeEventListener("mouseup", H);
      };
    }, []), E.createElement("div", {
      style: {
        position: "relative",
        marginBottom: 12
      },
      id: "rbgcp-square-wrapper".concat(l)
    }, E.createElement("div", {
      onMouseUp: C,
      onTouchEnd: C,
      onMouseDown: f,
      onTouchStart: f,
      onMouseMove: function(H) {
        return I(H);
      },
      id: "rbgcp-square".concat(l),
      style: {
        position: "relative",
        cursor: "ew-cross"
      }
    }, E.createElement("div", {
      style: Nt(Nt(Nt({}, s.rbgcpHandle), {
        transform: "translate(".concat((A = m == null ? void 0 : m.x) !== null && A !== void 0 ? A : 0, "px, ").concat((e = m == null ? void 0 : m.y) !== null && e !== void 0 ? e : 0, "px)")
      }), d ? {
        transition: ""
      } : {}),
      onMouseDown: x,
      id: "rbgcp-square-handle".concat(l)
    }), E.createElement("div", {
      style: Nt(Nt({}, s.rbgcpCanvasWrapper), {
        height: i
      }),
      id: "rbgcp-square-canvas-wrapper".concat(l),
      onClick: function(H) {
        return S(H);
      }
    }, E.createElement("canvas", {
      ref: p,
      width: "".concat(o, "px"),
      height: "".concat(i, "px"),
      id: "rbgcp-square-canvas".concat(l)
    }))));
  }, yt = function() {
    return yt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, yt.apply(this, arguments);
  }, OC = function() {
    var A = UA(), e = A.config, t = A.hc, r = t === void 0 ? {} : t, n = A.squareWidth, o = A.handleChange, i = A.defaultStyles, a = A.pickerIdSuffix, s = BA(false), l = s[0], c = s[1], u = r.r, d = r.g, g = r.b, p = "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(".concat(u, ",").concat(d, ",").concat(g, ",.5) 100%)"), B = e.barSize, y = function() {
      c(false);
    }, h = function() {
      c(true);
    }, b = function(C) {
      var I = Fr(C, B) / 100, S = "rgba(".concat(u, ", ").concat(d, ", ").concat(g, ", ").concat(I, ")");
      o(S);
    }, m = function(C) {
      l && b(C);
    }, v = function(C) {
      l || b(C);
    }, U = n - 18;
    return gA(function() {
      var C = function() {
        y();
      };
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }, []), E.createElement("div", {
      onMouseDown: h,
      onMouseMove: function(C) {
        return m(C);
      },
      style: {
        height: 14,
        marginTop: 17,
        marginBottom: 4,
        cursor: "ew-resize",
        position: "relative"
      },
      id: "rbgcp-opacity-wrapper".concat(a)
    }, E.createElement("div", {
      id: "rbgcp-opacity-checkered-bg".concat(a),
      style: yt(yt({}, i.rbgcpCheckered), {
        width: "100%",
        height: 14
      })
    }), E.createElement("div", {
      id: "rbgcp-opacity-handle".concat(a),
      style: yt(yt({}, i.rbgcpHandle), {
        left: U * (r == null ? void 0 : r.a),
        top: -2
      })
    }), E.createElement("div", {
      style: yt(yt({}, i.rbgcpOpacityOverlay), {
        background: p
      }),
      id: "rbgcp-opacity-overlay".concat(a),
      onClick: function(C) {
        return v(C);
      }
    }));
  }, KC = {
    CONTROLS: {
      SOLID: "Solid",
      GRADIENT: "Gradient"
    }
  }, RC = [
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
  ], DC = function(A) {
    var e = A.presets, t = e === void 0 ? [] : e, r = UA(), n = r.value, o = r.onChange, i = r.isDarkMode, a = r.squareWidth, s = r.handleChange, l = r.pickerIdSuffix, c = function() {
      return (t == null ? void 0 : t.length) > 0 ? t == null ? void 0 : t.slice(0, 18) : RC;
    }, u = function(g) {
      (g == null ? void 0 : g.includes("gradient")) ? o(g) : s(g);
    }, d = function(g) {
      if (!g || i) return "";
      var p = g == null ? void 0 : g.replace(" ", "");
      return p === "rgba(255,255,255,1)" ? "1px solid #96959c" : "";
    };
    return E.createElement("div", {
      style: {
        marginTop: 14,
        display: "flex",
        justifyContent: "space-between"
      },
      id: "rbgcp-footer-wrapper".concat(l)
    }, E.createElement("div", {
      style: {
        width: 50,
        height: 50,
        flexShrink: 0,
        borderRadius: 6,
        background: n,
        border: d(n)
      },
      id: "rbgcp-preview".concat(l)
    }), E.createElement("div", {
      style: {
        rowGap: 3,
        display: "flex",
        flexWrap: "wrap",
        width: a - 57,
        justifyContent: "space-between"
      },
      id: "rbgcp-presets-wrapper".concat(l)
    }, c().map(function(g, p) {
      return E.createElement("div", {
        key: "".concat(g, "-").concat(p),
        id: "rbgcp-preset-".concat(p, "-wrapper").concat(l),
        style: {
          width: "calc(100% / 9)",
          paddingLeft: 3
        }
      }, E.createElement("div", {
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
        id: "rbgcp-preset-".concat(p).concat(l)
      }));
    })));
  }, eA = function() {
    return eA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, eA.apply(this, arguments);
  }, MC = function() {
    var A = UA().defaultStyles, e = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, E.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA({}, e), A.rbgcpControlIcon),
      points: "17.96 4.31 2.04 4.3 3.75 4.3 4.81 17.29 5.16 17.96 5.74 18.47 6.59 18.62 13.64 18.62 14.52 18.32 15.07 17.68 15.29 17.12 16.28 4.3 12.87 4.3 12.87 2.38 12.48 1.75 11.83 1.46 8.4 1.46 7.64 1.68 7.26 2.21 7.16 2.52 7.17 4.23"
    }));
  }, PC = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 14
      }
    }, E.createElement("polyline", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "0.9 12.73 0.9 19.1 7.27 19.1 0.9 19.1 19.1 0.9 12.73 0.9 19.1 0.9 19.1 7.27"
    }));
  }, _C = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, E.createElement("circle", {
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "9"
    }), E.createElement("circle", {
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      cx: "10",
      cy: "10",
      r: "5"
    }));
  }, NC = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    }, o = {
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, E.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "3.74 2.75 3.74 12.69 0.9 12.71 6.59 12.71"
    }), E.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "3.74",
      y1: "17.26",
      x2: "3.74",
      y2: "15.21"
    }), E.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.1 17.25 10.1 7.31 12.95 7.29 7.26 7.29"
    }), E.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "10.1",
      y1: "2.74",
      x2: "10.1",
      y2: "4.79"
    }), E.createElement("polyline", {
      fillRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "16.26 2.75 16.26 12.69 13.41 12.71 19.1 12.71"
    }), E.createElement("line", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, o), t.rbgcpControlIcon), r && {
        stroke: r,
        fill: r
      }),
      x1: "16.26",
      y1: "17.26",
      x2: "16.26",
      y2: "15.21"
    }));
  }, GC = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, E.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M6.35,2.72a4.85,4.85,0,0,1,1.86.16,7.94,7.94,0,0,1,.88.43,3.66,3.66,0,0,0,.85.49c.25,0,.58-.27.81-.39A8.25,8.25,0,0,1,11.7,3a4,4,0,0,1,1.79-.23,3.21,3.21,0,0,0-1.34.09,6.39,6.39,0,0,0-1.47.63c-.45.25-.7.3-.7.86s0,1.18,0,1.78c0,1.3,0,2.61,0,3.92h0v5.63a2.46,2.46,0,0,1,0,.47c-.07.28-.43.42-.7.57a5.29,5.29,0,0,1-2.94.61A9.3,9.3,0,0,0,8,17.15l1.09-.37.89-.52c.06,0,.48.21.56.25.32.14.64.27,1,.38a8.54,8.54,0,0,0,2.12.4"
    }), E.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M7.57,5.73C6,5.7,4.5,5.65,3,5.77a2.28,2.28,0,0,0-1.76.74A2.3,2.3,0,0,0,.94,7.83l0,3.82A4.73,4.73,0,0,0,1,12.9a1.64,1.64,0,0,0,.68,1,2.44,2.44,0,0,0,1,.27,25,25,0,0,0,4.74.09"
    }), E.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M12.43,14.32a44.12,44.12,0,0,0,4.6,0,2.24,2.24,0,0,0,1.76-.74,2.29,2.29,0,0,0,.27-1.32l0-3.81A4.81,4.81,0,0,0,19,7.15a1.62,1.62,0,0,0-.68-1,2.31,2.31,0,0,0-1-.28,26.8,26.8,0,0,0-4.74-.09"
    }));
  }, VC = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      strokeMiterlimit: 10,
      strokeWidth: "0.5px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 17
      }
    }, E.createElement("circle", {
      style: eA(eA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "9.36",
      cy: "5.07",
      r: "1.71"
    }), E.createElement("circle", {
      style: eA(eA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "13.93",
      cy: "6.91",
      r: "1.71"
    }), E.createElement("circle", {
      style: eA(eA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.8",
      cy: "7.55",
      r: "1.71"
    }), E.createElement("circle", {
      style: eA(eA({}, t.rbgcpControlIcon2), r && {
        fill: r
      }),
      cx: "5.45",
      cy: "12.04",
      r: "1.71"
    }), E.createElement("path", {
      style: eA(eA(eA(eA({}, n), t.rbgcpControlIcon), t.rbgcpControlIcon2), r && {
        fill: r,
        stroke: r
      }),
      d: "M19.1,10c0,3.58-2.12,2.94-4.06,2.35-1.15-.34-2.24-.67-2.77-.08-.68.78-.54,2.07-.39,3.33.2,1.79.39,3.5-1.88,3.5A9.1,9.1,0,1,1,19.1,10ZM10,18c.7,0,.74-.19.75-.2a2.67,2.67,0,0,0,.07-1.27c0-.19,0-.42-.06-.67-.06-.53-.13-1.15-.14-1.67a3.82,3.82,0,0,1,.8-2.63,2.14,2.14,0,0,1,1.45-.7,4.36,4.36,0,0,1,1.32.12c.39.08.8.21,1.16.32h0c.39.12.74.23,1.08.3.74.17,1,.1,1.13,0S18,11.32,18,10a8,8,0,1,0-8,8Z"
    }));
  }, $C = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "", n = {
      fill: "none",
      strokeMiterlimit: 10,
      strokeWidth: "1.8px"
    };
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 15
      }
    }, E.createElement("polyline", {
      strokeLinecap: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "13.86 2.01 1.7 16.99 18.77 16.99"
    }), E.createElement("polyline", {
      strokeLinecap: "round",
      style: eA(eA(eA({}, n), t.rbgcpControlIcon), r && {
        stroke: r
      }),
      points: "10.96 16.38 10.96 16.38 10.74 15.7 10.44 14.97 10.06 14.21 9.72 13.63 9.21 12.89 8.85 12.44 8.41 11.95 7.91 11.45 7.51 11.1"
    }));
  }, WC = function() {
    var A = UA().defaultStyles;
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 20,
        marginRight: 1
      }
    }, E.createElement("path", {
      style: eA({}, A.rbgcpControlIcon2),
      d: "M2.39,8c-.63,0-1,.21-1,.63A.49.49,0,0,0,1.67,9a6.48,6.48,0,0,0,1.11.43A3,3,0,0,1,4,10.09a1.47,1.47,0,0,1,.35,1.09,1.75,1.75,0,0,1-.57,1.42,2.21,2.21,0,0,1-1.48.48,8.32,8.32,0,0,1-1.68-.21l-.31-.06.12-.94a13.7,13.7,0,0,0,1.8.16c.61,0,.92-.26.92-.77a.52.52,0,0,0-.21-.44,3.13,3.13,0,0,0-.85-.34A3.32,3.32,0,0,1,.66,9.79a1.43,1.43,0,0,1-.42-1.1A1.6,1.6,0,0,1,.78,7.36a2.32,2.32,0,0,1,1.49-.44,10.46,10.46,0,0,1,1.64.17l.32.07-.1.95C3.31,8,2.73,8,2.39,8Z"
    }), E.createElement("path", {
      style: eA({}, A.rbgcpControlIcon2),
      d: "M4.79,8.09V7H9.16V8.09H7.59V13H6.38V8.09Z"
    }), E.createElement("path", {
      style: eA({}, A.rbgcpControlIcon2),
      d: "M14,12.34a2.25,2.25,0,0,1-1.91.74,2.24,2.24,0,0,1-1.91-.74A3.85,3.85,0,0,1,9.61,10a4,4,0,0,1,.56-2.34,2.2,2.2,0,0,1,1.91-.77A2.21,2.21,0,0,1,14,7.69,4,4,0,0,1,14.55,10,3.85,3.85,0,0,1,14,12.34Zm-2.88-.77a1,1,0,0,0,1,.46,1,1,0,0,0,1-.46A3.25,3.25,0,0,0,13.3,10,3.45,3.45,0,0,0,13,8.46a1,1,0,0,0-1-.49,1,1,0,0,0-1,.49A3.43,3.43,0,0,0,10.85,10,3.38,3.38,0,0,0,11.11,11.57Z"
    }), E.createElement("path", {
      style: eA({}, A.rbgcpControlIcon2),
      d: "M17.77,11.24h-1V13H15.58V7h2.19a1.85,1.85,0,0,1,2.11,2.07,2.21,2.21,0,0,1-.54,1.6A2.07,2.07,0,0,1,17.77,11.24Zm-1-1h1c.6,0,.9-.37.9-1.12a1.18,1.18,0,0,0-.22-.79.88.88,0,0,0-.68-.24h-1Z"
    }));
  }, XC = function(A) {
    var e, t = A.children, r = "id" + Math.random().toString(16).slice(2), n = oA((e = document.getElementById(r)) !== null && e !== void 0 ? e : document.createElement("div")), o = BA(!n.current.parentElement)[0];
    return gA(function() {
      var i = n.current;
      return o && (n.current.id = r, document.body.appendChild(n.current)), function() {
        o && i.parentElement && i.parentElement.removeChild(i);
      };
    }, [
      r
    ]), pu(t, n.current);
  };
  const JC = gu(XC);
  var Pa = function(A, e) {
    return Pa = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(t, r) {
      t.__proto__ = r;
    } || function(t, r) {
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }, Pa(A, e);
  };
  function Ge(A, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    Pa(A, e);
    function t() {
      this.constructor = A;
    }
    A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
  }
  var _a = function() {
    return _a = Object.assign || function(e) {
      for (var t, r = 1, n = arguments.length; r < n; r++) {
        t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
      return e;
    }, _a.apply(this, arguments);
  };
  function me(A, e, t, r) {
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
  function ge(A, e) {
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
  function Nn(A, e, t) {
    if (arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || e);
  }
  var ht = (function() {
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
    return ht.fromClientRect(A, e.getBoundingClientRect());
  }, YC = function(A) {
    var e = A.body, t = A.documentElement;
    if (!e || !t) throw new Error("Unable to get document size");
    var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), n = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
    return new ht(0, 0, r, n);
  }, Ii = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, $A = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, cc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", zC = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Gn = 0; Gn < cc.length; Gn++) zC[cc.charCodeAt(Gn)] = Gn;
  var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Wr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var Vn = 0; Vn < uc.length; Vn++) Wr[uc.charCodeAt(Vn)] = Vn;
  var jC = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = Wr[A.charCodeAt(r)], i = Wr[A.charCodeAt(r + 1)], a = Wr[A.charCodeAt(r + 2)], s = Wr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, ZC = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, qC = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, Yt = 5, zs = 11, Yi = 2, Av = zs - Yt, Od = 65536 >> Yt, ev = 1 << Yt, zi = ev - 1, tv = 1024 >> Yt, rv = Od + tv, nv = rv, ov = 32, iv = nv + ov, av = 65536 >> zs, sv = 1 << Av, lv = sv - 1, dc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, cv = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, uv = function(A, e) {
    var t = jC(A), r = Array.isArray(t) ? qC(t) : new Uint32Array(t), n = Array.isArray(t) ? ZC(t) : new Uint16Array(t), o = 24, i = dc(n, o / 2, r[4] / 2), a = r[5] === 2 ? dc(n, (o + r[4]) / 2) : cv(r, Math.ceil((o + r[4]) / 4));
    return new dv(r[0], r[1], r[2], r[3], i, a);
  }, dv = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> Yt], t = (t << Yi) + (e & zi), this.data[t];
        if (e <= 65535) return t = this.index[Od + (e - 55296 >> Yt)], t = (t << Yi) + (e & zi), this.data[t];
        if (e < this.highStart) return t = iv - av + (e >> zs), t = this.index[t], t += e >> Yt & lv, t = this.index[t], t = (t << Yi) + (e & zi), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), fc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", fv = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var $n = 0; $n < fc.length; $n++) fv[fc.charCodeAt($n)] = $n;
  var gv = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", gc = 50, pv = 1, Kd = 2, Rd = 3, Bv = 4, hv = 5, pc = 7, Dd = 8, Bc = 9, Ft = 10, Na = 11, hc = 12, Ga = 13, wv = 14, Xr = 15, Va = 16, Wn = 17, Dr = 18, mv = 19, wc = 20, $a = 21, Mr = 22, ji = 23, ar = 24, Fe = 25, Jr = 26, Yr = 27, sr = 28, Cv = 29, Gt = 30, vv = 31, Xn = 32, Jn = 33, Wa = 34, Xa = 35, Ja = 36, gn = 37, Ya = 38, ho = 39, wo = 40, Zi = 41, Md = 42, Qv = 43, yv = [
    9001,
    65288
  ], Pd = "!", hA = "\xD7", Yn = "\xF7", za = uv(gv), st = [
    Gt,
    Ja
  ], ja = [
    pv,
    Kd,
    Rd,
    hv
  ], _d = [
    Ft,
    Dd
  ], mc = [
    Yr,
    Jr
  ], bv = ja.concat(_d), Cc = [
    Ya,
    ho,
    wo,
    Wa,
    Xa
  ], Fv = [
    Xr,
    Ga
  ], Uv = function(A, e) {
    e === void 0 && (e = "strict");
    var t = [], r = [], n = [];
    return A.forEach(function(o, i) {
      var a = za.get(o);
      if (a > gc ? (n.push(true), a -= gc) : n.push(false), [
        "normal",
        "auto",
        "loose"
      ].indexOf(e) !== -1 && [
        8208,
        8211,
        12316,
        12448
      ].indexOf(o) !== -1) return r.push(i), t.push(Va);
      if (a === Bv || a === Na) {
        if (i === 0) return r.push(i), t.push(Gt);
        var s = t[i - 1];
        return bv.indexOf(s) === -1 ? (r.push(r[i - 1]), t.push(s)) : (r.push(i), t.push(Gt));
      }
      if (r.push(i), a === vv) return t.push(e === "strict" ? $a : gn);
      if (a === Md || a === Cv) return t.push(Gt);
      if (a === Qv) return o >= 131072 && o <= 196605 || o >= 196608 && o <= 262141 ? t.push(gn) : t.push(Gt);
      t.push(a);
    }), [
      r,
      t,
      n
    ];
  }, qi = function(A, e, t, r) {
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
  }, vc = function(A, e) {
    for (var t = A; t >= 0; ) {
      var r = e[t];
      if (r === Ft) t--;
      else return r;
    }
    return 0;
  }, Ev = function(A, e, t, r, n) {
    if (t[r] === 0) return hA;
    var o = r - 1;
    if (Array.isArray(n) && n[o] === true) return hA;
    var i = o - 1, a = o + 1, s = e[o], l = i >= 0 ? e[i] : 0, c = e[a];
    if (s === Kd && c === Rd) return hA;
    if (ja.indexOf(s) !== -1) return Pd;
    if (ja.indexOf(c) !== -1 || _d.indexOf(c) !== -1) return hA;
    if (vc(o, e) === Dd) return Yn;
    if (za.get(A[o]) === Na || (s === Xn || s === Jn) && za.get(A[a]) === Na || s === pc || c === pc || s === Bc || [
      Ft,
      Ga,
      Xr
    ].indexOf(s) === -1 && c === Bc || [
      Wn,
      Dr,
      mv,
      ar,
      sr
    ].indexOf(c) !== -1 || vc(o, e) === Mr || qi(ji, Mr, o, e) || qi([
      Wn,
      Dr
    ], $a, o, e) || qi(hc, hc, o, e)) return hA;
    if (s === Ft) return Yn;
    if (s === ji || c === ji) return hA;
    if (c === Va || s === Va) return Yn;
    if ([
      Ga,
      Xr,
      $a
    ].indexOf(c) !== -1 || s === wv || l === Ja && Fv.indexOf(s) !== -1 || s === sr && c === Ja || c === wc || st.indexOf(c) !== -1 && s === Fe || st.indexOf(s) !== -1 && c === Fe || s === Yr && [
      gn,
      Xn,
      Jn
    ].indexOf(c) !== -1 || [
      gn,
      Xn,
      Jn
    ].indexOf(s) !== -1 && c === Jr || st.indexOf(s) !== -1 && mc.indexOf(c) !== -1 || mc.indexOf(s) !== -1 && st.indexOf(c) !== -1 || [
      Yr,
      Jr
    ].indexOf(s) !== -1 && (c === Fe || [
      Mr,
      Xr
    ].indexOf(c) !== -1 && e[a + 1] === Fe) || [
      Mr,
      Xr
    ].indexOf(s) !== -1 && c === Fe || s === Fe && [
      Fe,
      sr,
      ar
    ].indexOf(c) !== -1) return hA;
    if ([
      Fe,
      sr,
      ar,
      Wn,
      Dr
    ].indexOf(c) !== -1) for (var u = o; u >= 0; ) {
      var d = e[u];
      if (d === Fe) return hA;
      if ([
        sr,
        ar
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if ([
      Yr,
      Jr
    ].indexOf(c) !== -1) for (var u = [
      Wn,
      Dr
    ].indexOf(s) !== -1 ? i : o; u >= 0; ) {
      var d = e[u];
      if (d === Fe) return hA;
      if ([
        sr,
        ar
      ].indexOf(d) !== -1) u--;
      else break;
    }
    if (Ya === s && [
      Ya,
      ho,
      Wa,
      Xa
    ].indexOf(c) !== -1 || [
      ho,
      Wa
    ].indexOf(s) !== -1 && [
      ho,
      wo
    ].indexOf(c) !== -1 || [
      wo,
      Xa
    ].indexOf(s) !== -1 && c === wo || Cc.indexOf(s) !== -1 && [
      wc,
      Jr
    ].indexOf(c) !== -1 || Cc.indexOf(c) !== -1 && s === Yr || st.indexOf(s) !== -1 && st.indexOf(c) !== -1 || s === ar && st.indexOf(c) !== -1 || st.concat(Fe).indexOf(s) !== -1 && c === Mr && yv.indexOf(A[a]) === -1 || st.concat(Fe).indexOf(c) !== -1 && s === Dr) return hA;
    if (s === Zi && c === Zi) {
      for (var g = t[o], p = 1; g > 0 && (g--, e[g] === Zi); ) p++;
      if (p % 2 !== 0) return hA;
    }
    return s === Xn && c === Jn ? hA : Yn;
  }, Iv = function(A, e) {
    e || (e = {
      lineBreak: "normal",
      wordBreak: "normal"
    });
    var t = Uv(A, e.lineBreak), r = t[0], n = t[1], o = t[2];
    (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (n = n.map(function(a) {
      return [
        Fe,
        Gt,
        Md
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
  }, Sv = (function() {
    function A(e, t, r, n) {
      this.codePoints = e, this.required = t === Pd, this.start = r, this.end = n;
    }
    return A.prototype.slice = function() {
      return $A.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  })(), xv = function(A, e) {
    var t = Ii(A), r = Iv(t, e), n = r[0], o = r[1], i = r[2], a = t.length, s = 0, l = 0;
    return {
      next: function() {
        if (l >= a) return {
          done: true,
          value: null
        };
        for (var c = hA; l < a && (c = Ev(t, o, n, ++l, i)) === hA; ) ;
        if (c !== hA || l === a) {
          var u = new Sv(t, c, s, l);
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
  }, Hv = 1, Tv = 2, Sn = 4, Qc = 8, To = 10, yc = 47, tn = 92, Lv = 9, kv = 32, zn = 34, Pr = 61, Ov = 35, Kv = 36, Rv = 37, jn = 39, Zn = 40, _r = 41, Dv = 95, Ce = 45, Mv = 33, Pv = 60, _v = 62, Nv = 64, Gv = 91, Vv = 93, $v = 61, Wv = 123, qn = 63, Xv = 125, bc = 124, Jv = 126, Yv = 128, Fc = 65533, Aa = 42, Xt = 43, zv = 44, jv = 58, Zv = 59, pn = 46, qv = 0, AQ = 8, eQ = 11, tQ = 14, rQ = 31, nQ = 127, We = -1, Nd = 48, Gd = 97, Vd = 101, oQ = 102, iQ = 117, aQ = 122, $d = 65, Wd = 69, Xd = 70, sQ = 85, lQ = 90, pe = function(A) {
    return A >= Nd && A <= 57;
  }, cQ = function(A) {
    return A >= 55296 && A <= 57343;
  }, lr = function(A) {
    return pe(A) || A >= $d && A <= Xd || A >= Gd && A <= oQ;
  }, uQ = function(A) {
    return A >= Gd && A <= aQ;
  }, dQ = function(A) {
    return A >= $d && A <= lQ;
  }, fQ = function(A) {
    return uQ(A) || dQ(A);
  }, gQ = function(A) {
    return A >= Yv;
  }, Ao = function(A) {
    return A === To || A === Lv || A === kv;
  }, Lo = function(A) {
    return fQ(A) || gQ(A) || A === Dv;
  }, Uc = function(A) {
    return Lo(A) || pe(A) || A === Ce;
  }, pQ = function(A) {
    return A >= qv && A <= AQ || A === eQ || A >= tQ && A <= rQ || A === nQ;
  }, bt = function(A, e) {
    return A !== tn ? false : e !== To;
  }, eo = function(A, e, t) {
    return A === Ce ? Lo(e) || bt(e, t) : Lo(A) ? true : !!(A === tn && bt(A, e));
  }, ea = function(A, e, t) {
    return A === Xt || A === Ce ? pe(e) ? true : e === pn && pe(t) : pe(A === pn ? e : A);
  }, BQ = function(A) {
    var e = 0, t = 1;
    (A[e] === Xt || A[e] === Ce) && (A[e] === Ce && (t = -1), e++);
    for (var r = []; pe(A[e]); ) r.push(A[e++]);
    var n = r.length ? parseInt($A.apply(void 0, r), 10) : 0;
    A[e] === pn && e++;
    for (var o = []; pe(A[e]); ) o.push(A[e++]);
    var i = o.length, a = i ? parseInt($A.apply(void 0, o), 10) : 0;
    (A[e] === Wd || A[e] === Vd) && e++;
    var s = 1;
    (A[e] === Xt || A[e] === Ce) && (A[e] === Ce && (s = -1), e++);
    for (var l = []; pe(A[e]); ) l.push(A[e++]);
    var c = l.length ? parseInt($A.apply(void 0, l), 10) : 0;
    return t * (n + a * Math.pow(10, -i)) * Math.pow(10, s * c);
  }, hQ = {
    type: 2
  }, wQ = {
    type: 3
  }, mQ = {
    type: 4
  }, CQ = {
    type: 13
  }, vQ = {
    type: 8
  }, QQ = {
    type: 21
  }, yQ = {
    type: 9
  }, bQ = {
    type: 10
  }, FQ = {
    type: 11
  }, UQ = {
    type: 12
  }, EQ = {
    type: 14
  }, to = {
    type: 23
  }, IQ = {
    type: 1
  }, SQ = {
    type: 25
  }, xQ = {
    type: 24
  }, HQ = {
    type: 26
  }, TQ = {
    type: 27
  }, LQ = {
    type: 28
  }, kQ = {
    type: 29
  }, OQ = {
    type: 31
  }, Za = {
    type: 32
  }, Jd = (function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Ii(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== Za; ) e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case zn:
          return this.consumeStringToken(zn);
        case Ov:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
          if (Uc(t) || bt(r, n)) {
            var o = eo(t, r, n) ? Tv : Hv, i = this.consumeName();
            return {
              type: 5,
              value: i,
              flags: o
            };
          }
          break;
        case Kv:
          if (this.peekCodePoint(0) === Pr) return this.consumeCodePoint(), CQ;
          break;
        case jn:
          return this.consumeStringToken(jn);
        case Zn:
          return hQ;
        case _r:
          return wQ;
        case Aa:
          if (this.peekCodePoint(0) === Pr) return this.consumeCodePoint(), EQ;
          break;
        case Xt:
          if (ea(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case zv:
          return mQ;
        case Ce:
          var a = e, s = this.peekCodePoint(0), l = this.peekCodePoint(1);
          if (ea(a, s, l)) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (eo(a, s, l)) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (s === Ce && l === _v) return this.consumeCodePoint(), this.consumeCodePoint(), xQ;
          break;
        case pn:
          if (ea(e, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case yc:
          if (this.peekCodePoint(0) === Aa) for (this.consumeCodePoint(); ; ) {
            var c = this.consumeCodePoint();
            if (c === Aa && (c = this.consumeCodePoint(), c === yc)) return this.consumeToken();
            if (c === We) return this.consumeToken();
          }
          break;
        case jv:
          return HQ;
        case Zv:
          return TQ;
        case Pv:
          if (this.peekCodePoint(0) === Mv && this.peekCodePoint(1) === Ce && this.peekCodePoint(2) === Ce) return this.consumeCodePoint(), this.consumeCodePoint(), SQ;
          break;
        case Nv:
          var u = this.peekCodePoint(0), d = this.peekCodePoint(1), g = this.peekCodePoint(2);
          if (eo(u, d, g)) {
            var i = this.consumeName();
            return {
              type: 7,
              value: i
            };
          }
          break;
        case Gv:
          return LQ;
        case tn:
          if (bt(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case Vv:
          return kQ;
        case $v:
          if (this.peekCodePoint(0) === Pr) return this.consumeCodePoint(), vQ;
          break;
        case Wv:
          return FQ;
        case Xv:
          return UQ;
        case iQ:
        case sQ:
          var p = this.peekCodePoint(0), B = this.peekCodePoint(1);
          return p === Xt && (lr(B) || B === qn) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case bc:
          if (this.peekCodePoint(0) === Pr) return this.consumeCodePoint(), yQ;
          if (this.peekCodePoint(0) === bc) return this.consumeCodePoint(), QQ;
          break;
        case Jv:
          if (this.peekCodePoint(0) === Pr) return this.consumeCodePoint(), bQ;
          break;
        case We:
          return Za;
      }
      return Ao(e) ? (this.consumeWhiteSpace(), OQ) : pe(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : Lo(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : {
        type: 6,
        value: $A(e)
      };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); lr(t) && e.length < 6; ) e.push(t), t = this.consumeCodePoint();
      for (var r = false; t === qn && e.length < 6; ) e.push(t), t = this.consumeCodePoint(), r = true;
      if (r) {
        var n = parseInt($A.apply(void 0, e.map(function(s) {
          return s === qn ? Nd : s;
        })), 16), o = parseInt($A.apply(void 0, e.map(function(s) {
          return s === qn ? Xd : s;
        })), 16);
        return {
          type: 30,
          start: n,
          end: o
        };
      }
      var i = parseInt($A.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === Ce && lr(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var a = []; lr(t) && a.length < 6; ) a.push(t), t = this.consumeCodePoint();
        var o = parseInt($A.apply(void 0, a), 16);
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
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Zn ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Zn ? (this.consumeCodePoint(), {
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
      if (t === jn || t === zn) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === _r) ? (this.consumeCodePoint(), {
          type: 22,
          value: r.value
        }) : (this.consumeBadUrlRemnants(), to);
      }
      for (; ; ) {
        var n = this.consumeCodePoint();
        if (n === We || n === _r) return {
          type: 22,
          value: $A.apply(void 0, e)
        };
        if (Ao(n)) return this.consumeWhiteSpace(), this.peekCodePoint(0) === We || this.peekCodePoint(0) === _r ? (this.consumeCodePoint(), {
          type: 22,
          value: $A.apply(void 0, e)
        }) : (this.consumeBadUrlRemnants(), to);
        if (n === zn || n === jn || n === Zn || pQ(n)) return this.consumeBadUrlRemnants(), to;
        if (n === tn) if (bt(n, this.peekCodePoint(0))) e.push(this.consumeEscapedCodePoint());
        else return this.consumeBadUrlRemnants(), to;
        else e.push(n);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Ao(this.peekCodePoint(0)); ) this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === _r || e === We) return;
        bt(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var n = Math.min(t, e);
        r += $A.apply(void 0, this._value.splice(0, n)), e -= n;
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
        if (n === To) return this._value.splice(0, r), IQ;
        if (n === tn) {
          var o = this._value[r + 1];
          o !== We && o !== void 0 && (o === To ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : bt(n, o) && (t += this.consumeStringSlice(r), t += $A(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (true);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = Sn, r = this.peekCodePoint(0);
      for ((r === Xt || r === Ce) && e.push(this.consumeCodePoint()); pe(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var n = this.peekCodePoint(1);
      if (r === pn && pe(n)) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Qc; pe(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), n = this.peekCodePoint(1);
      var o = this.peekCodePoint(2);
      if ((r === Wd || r === Vd) && ((n === Xt || n === Ce) && pe(o) || pe(n))) for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Qc; pe(this.peekCodePoint(0)); ) e.push(this.consumeCodePoint());
      return [
        BQ(e),
        t
      ];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], n = this.peekCodePoint(0), o = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (eo(n, o, i)) {
        var a = this.consumeName();
        return {
          type: 15,
          number: t,
          flags: r,
          unit: a
        };
      }
      return n === Rv ? (this.consumeCodePoint(), {
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
      if (lr(e)) {
        for (var t = $A(e); lr(this.peekCodePoint(0)) && t.length < 6; ) t += $A(this.consumeCodePoint());
        Ao(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || cQ(r) || r > 1114111 ? Fc : r;
      }
      return e === We ? Fc : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Uc(t)) e += $A(t);
        else if (bt(t, this.peekCodePoint(0))) e += $A(this.consumeEscapedCodePoint());
        else return this.reconsumeCodePoint(t), e;
      }
    }, A;
  })(), Yd = (function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new Jd();
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
        if (r.type === 32 || RQ(r, e)) return t;
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
      return typeof e > "u" ? Za : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  })(), xn = function(A) {
    return A.type === 15;
  }, xr = function(A) {
    return A.type === 17;
  }, FA = function(A) {
    return A.type === 20;
  }, KQ = function(A) {
    return A.type === 0;
  }, qa = function(A, e) {
    return FA(A) && A.value === e;
  }, zd = function(A) {
    return A.type !== 31;
  }, Ur = function(A) {
    return A.type !== 31 && A.type !== 4;
  }, nt = function(A) {
    var e = [], t = [];
    return A.forEach(function(r) {
      if (r.type === 4) {
        if (t.length === 0) throw new Error("Error parsing function args, zero tokens for arg");
        e.push(t), t = [];
        return;
      }
      r.type !== 31 && t.push(r);
    }), t.length && e.push(t), e;
  }, RQ = function(A, e) {
    return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? true : e === 2 && A.type === 3;
  }, Ot = function(A) {
    return A.type === 17 || A.type === 15;
  }, zA = function(A) {
    return A.type === 16 || Ot(A);
  }, jd = function(A) {
    return A.length > 1 ? [
      A[0],
      A[1]
    ] : [
      A[0]
    ];
  }, le = {
    type: 17,
    number: 0,
    flags: Sn
  }, js = {
    type: 16,
    number: 50,
    flags: Sn
  }, Ut = {
    type: 16,
    number: 100,
    flags: Sn
  }, zr = function(A, e, t) {
    var r = A[0], n = A[1];
    return [
      xA(r, e),
      xA(typeof n < "u" ? n : r, t)
    ];
  }, xA = function(A, e) {
    if (A.type === 16) return A.number / 100 * e;
    if (xn(A)) switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      default:
        return A.number;
    }
    return A.number;
  }, Zd = "deg", qd = "grad", Af = "rad", ef = "turn", Si = {
    name: "angle",
    parse: function(A, e) {
      if (e.type === 15) switch (e.unit) {
        case Zd:
          return Math.PI * e.number / 180;
        case qd:
          return Math.PI / 200 * e.number;
        case Af:
          return e.number;
        case ef:
          return Math.PI * 2 * e.number;
      }
      throw new Error("Unsupported angle type");
    }
  }, tf = function(A) {
    return A.type === 15 && (A.unit === Zd || A.unit === qd || A.unit === Af || A.unit === ef);
  }, rf = function(A) {
    var e = A.filter(FA).map(function(t) {
      return t.value;
    }).join(" ");
    switch (e) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [
          le,
          le
        ];
      case "to top":
      case "bottom":
        return ke(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [
          le,
          Ut
        ];
      case "to right":
      case "left":
        return ke(90);
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
        return ke(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [
          Ut,
          le
        ];
      case "to left":
      case "right":
        return ke(270);
    }
    return 0;
  }, ke = function(A) {
    return Math.PI * A / 180;
  }, xt = {
    name: "color",
    parse: function(A, e) {
      if (e.type === 18) {
        var t = DQ[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
        return t(A, e.values);
      }
      if (e.type === 5) {
        if (e.value.length === 3) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3);
          return Et(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), 1);
        }
        if (e.value.length === 4) {
          var r = e.value.substring(0, 1), n = e.value.substring(1, 2), o = e.value.substring(2, 3), i = e.value.substring(3, 4);
          return Et(parseInt(r + r, 16), parseInt(n + n, 16), parseInt(o + o, 16), parseInt(i + i, 16) / 255);
        }
        if (e.value.length === 6) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6);
          return Et(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), 1);
        }
        if (e.value.length === 8) {
          var r = e.value.substring(0, 2), n = e.value.substring(2, 4), o = e.value.substring(4, 6), i = e.value.substring(6, 8);
          return Et(parseInt(r, 16), parseInt(n, 16), parseInt(o, 16), parseInt(i, 16) / 255);
        }
      }
      if (e.type === 20) {
        var a = ut[e.value.toUpperCase()];
        if (typeof a < "u") return a;
      }
      return ut.TRANSPARENT;
    }
  }, Ht = function(A) {
    return (255 & A) === 0;
  }, ee = function(A) {
    var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, n = 255 & A >> 24;
    return e < 255 ? "rgba(" + n + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + n + "," + r + "," + t + ")";
  }, Et = function(A, e, t, r) {
    return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
  }, Ec = function(A, e) {
    if (A.type === 17) return A.number;
    if (A.type === 16) {
      var t = e === 3 ? 1 : 255;
      return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
    }
    return 0;
  }, Ic = function(A, e) {
    var t = e.filter(Ur);
    if (t.length === 3) {
      var r = t.map(Ec), n = r[0], o = r[1], i = r[2];
      return Et(n, o, i, 1);
    }
    if (t.length === 4) {
      var a = t.map(Ec), n = a[0], o = a[1], i = a[2], s = a[3];
      return Et(n, o, i, s);
    }
    return 0;
  };
  function ta(A, e, t) {
    return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
  }
  var Sc = function(A, e) {
    var t = e.filter(Ur), r = t[0], n = t[1], o = t[2], i = t[3], a = (r.type === 17 ? ke(r.number) : Si.parse(A, r)) / (Math.PI * 2), s = zA(n) ? n.number / 100 : 0, l = zA(o) ? o.number / 100 : 0, c = typeof i < "u" && zA(i) ? xA(i, 1) : 1;
    if (s === 0) return Et(l * 255, l * 255, l * 255, 1);
    var u = l <= 0.5 ? l * (s + 1) : l + s - l * s, d = l * 2 - u, g = ta(d, u, a + 1 / 3), p = ta(d, u, a), B = ta(d, u, a - 1 / 3);
    return Et(g * 255, p * 255, B * 255, c);
  }, DQ = {
    hsl: Sc,
    hsla: Sc,
    rgb: Ic,
    rgba: Ic
  }, rn = function(A, e) {
    return xt.parse(A, Yd.create(e).parseComponentValue());
  }, ut = {
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
  }, MQ = {
    name: "background-clip",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (FA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, PQ = {
    name: "background-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, xi = function(A, e) {
    var t = xt.parse(A, e[0]), r = e[1];
    return r && zA(r) ? {
      color: t,
      stop: r
    } : {
      color: t,
      stop: null
    };
  }, xc = function(A, e) {
    var t = A[0], r = A[A.length - 1];
    t.stop === null && (t.stop = le), r.stop === null && (r.stop = Ut);
    for (var n = [], o = 0, i = 0; i < A.length; i++) {
      var a = A[i].stop;
      if (a !== null) {
        var s = xA(a, e);
        s > o ? n.push(s) : n.push(o), o = s;
      } else n.push(null);
    }
    for (var l = null, i = 0; i < n.length; i++) {
      var c = n[i];
      if (c === null) l === null && (l = i);
      else if (l !== null) {
        for (var u = i - l, d = n[l - 1], g = (c - d) / (u + 1), p = 1; p <= u; p++) n[l + p - 1] = g * p;
        l = null;
      }
    }
    return A.map(function(B, y) {
      var h = B.color;
      return {
        color: h,
        stop: Math.max(Math.min(1, n[y] / e), 0)
      };
    });
  }, _Q = function(A, e, t) {
    var r = e / 2, n = t / 2, o = xA(A[0], e) - r, i = n - xA(A[1], t);
    return (Math.atan2(i, o) + Math.PI * 2) % (Math.PI * 2);
  }, NQ = function(A, e, t) {
    var r = typeof A == "number" ? A : _Q(A, e, t), n = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), o = e / 2, i = t / 2, a = n / 2, s = Math.sin(r - Math.PI / 2) * a, l = Math.cos(r - Math.PI / 2) * a;
    return [
      n,
      o - l,
      o + l,
      i - s,
      i + s
    ];
  }, _e = function(A, e) {
    return Math.sqrt(A * A + e * e);
  }, Hc = function(A, e, t, r, n) {
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
  }, GQ = function(A, e, t, r, n) {
    var o = 0, i = 0;
    switch (A.size) {
      case 0:
        A.shape === 0 ? o = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - n)));
        break;
      case 2:
        if (A.shape === 0) o = i = Math.min(_e(e, t), _e(e, t - n), _e(e - r, t), _e(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.min(Math.abs(t), Math.abs(t - n)) / Math.min(Math.abs(e), Math.abs(e - r)), s = Hc(r, n, e, t, true), l = s[0], c = s[1];
          o = _e(l - e, (c - t) / a), i = a * o;
        }
        break;
      case 1:
        A.shape === 0 ? o = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - n)) : A.shape === 1 && (o = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - n)));
        break;
      case 3:
        if (A.shape === 0) o = i = Math.max(_e(e, t), _e(e, t - n), _e(e - r, t), _e(e - r, t - n));
        else if (A.shape === 1) {
          var a = Math.max(Math.abs(t), Math.abs(t - n)) / Math.max(Math.abs(e), Math.abs(e - r)), u = Hc(r, n, e, t, false), l = u[0], c = u[1];
          o = _e(l - e, (c - t) / a), i = a * o;
        }
        break;
    }
    return Array.isArray(A.size) && (o = xA(A.size[0], r), i = A.size.length === 2 ? xA(A.size[1], n) : o), [
      o,
      i
    ];
  }, VQ = function(A, e) {
    var t = ke(180), r = [];
    return nt(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && i.value === "to") {
          t = rf(n);
          return;
        } else if (tf(i)) {
          t = Si.parse(A, i);
          return;
        }
      }
      var a = xi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, ro = function(A, e) {
    var t = ke(180), r = [];
    return nt(e).forEach(function(n, o) {
      if (o === 0) {
        var i = n[0];
        if (i.type === 20 && [
          "top",
          "left",
          "right",
          "bottom"
        ].indexOf(i.value) !== -1) {
          t = rf(n);
          return;
        } else if (tf(i)) {
          t = (Si.parse(A, i) + ke(270)) % ke(360);
          return;
        }
      }
      var a = xi(A, n);
      r.push(a);
    }), {
      angle: t,
      stops: r,
      type: 1
    };
  }, $Q = function(A, e) {
    var t = ke(180), r = [], n = 1, o = 0, i = 3, a = [];
    return nt(e).forEach(function(s, l) {
      var c = s[0];
      if (l === 0) {
        if (FA(c) && c.value === "linear") {
          n = 1;
          return;
        } else if (FA(c) && c.value === "radial") {
          n = 2;
          return;
        }
      }
      if (c.type === 18) {
        if (c.name === "from") {
          var u = xt.parse(A, c.values[0]);
          r.push({
            stop: le,
            color: u
          });
        } else if (c.name === "to") {
          var u = xt.parse(A, c.values[0]);
          r.push({
            stop: Ut,
            color: u
          });
        } else if (c.name === "color-stop") {
          var d = c.values.filter(Ur);
          if (d.length === 2) {
            var u = xt.parse(A, d[1]), g = d[0];
            xr(g) && r.push({
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
      angle: (t + ke(180)) % ke(360),
      stops: r,
      type: n
    } : {
      size: i,
      shape: o,
      stops: r,
      position: a,
      type: n
    };
  }, nf = "closest-side", of = "farthest-side", af = "closest-corner", sf = "farthest-corner", lf = "circle", cf = "ellipse", uf = "cover", df = "contain", WQ = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return nt(e).forEach(function(i, a) {
      var s = true;
      if (a === 0) {
        var l = false;
        s = i.reduce(function(u, d) {
          if (l) if (FA(d)) switch (d.value) {
            case "center":
              return o.push(js), u;
            case "top":
            case "left":
              return o.push(le), u;
            case "right":
            case "bottom":
              return o.push(Ut), u;
          }
          else (zA(d) || Ot(d)) && o.push(d);
          else if (FA(d)) switch (d.value) {
            case lf:
              return t = 0, false;
            case cf:
              return t = 1, false;
            case "at":
              return l = true, false;
            case nf:
              return r = 0, false;
            case uf:
            case of:
              return r = 1, false;
            case df:
            case af:
              return r = 2, false;
            case sf:
              return r = 3, false;
          }
          else if (Ot(d) || zA(d)) return Array.isArray(r) || (r = []), r.push(d), false;
          return u;
        }, s);
      }
      if (s) {
        var c = xi(A, i);
        n.push(c);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, no = function(A, e) {
    var t = 0, r = 3, n = [], o = [];
    return nt(e).forEach(function(i, a) {
      var s = true;
      if (a === 0 ? s = i.reduce(function(c, u) {
        if (FA(u)) switch (u.value) {
          case "center":
            return o.push(js), false;
          case "top":
          case "left":
            return o.push(le), false;
          case "right":
          case "bottom":
            return o.push(Ut), false;
        }
        else if (zA(u) || Ot(u)) return o.push(u), false;
        return c;
      }, s) : a === 1 && (s = i.reduce(function(c, u) {
        if (FA(u)) switch (u.value) {
          case lf:
            return t = 0, false;
          case cf:
            return t = 1, false;
          case df:
          case nf:
            return r = 0, false;
          case of:
            return r = 1, false;
          case af:
            return r = 2, false;
          case uf:
          case sf:
            return r = 3, false;
        }
        else if (Ot(u) || zA(u)) return Array.isArray(r) || (r = []), r.push(u), false;
        return c;
      }, s)), s) {
        var l = xi(A, i);
        n.push(l);
      }
    }), {
      size: r,
      shape: t,
      stops: n,
      position: o,
      type: 2
    };
  }, XQ = function(A) {
    return A.type === 1;
  }, JQ = function(A) {
    return A.type === 2;
  }, Zs = {
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
        var r = ff[e.name];
        if (typeof r > "u") throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
        return r(A, e.values);
      }
      throw new Error("Unsupported image type " + e.type);
    }
  };
  function YQ(A) {
    return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!ff[A.name]);
  }
  var ff = {
    "linear-gradient": VQ,
    "-moz-linear-gradient": ro,
    "-ms-linear-gradient": ro,
    "-o-linear-gradient": ro,
    "-webkit-linear-gradient": ro,
    "radial-gradient": WQ,
    "-moz-radial-gradient": no,
    "-ms-radial-gradient": no,
    "-o-radial-gradient": no,
    "-webkit-radial-gradient": no,
    "-webkit-gradient": $Q
  }, zQ = {
    name: "background-image",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
        return Ur(r) && YQ(r);
      }).map(function(r) {
        return Zs.parse(A, r);
      });
    }
  }, jQ = {
    name: "background-origin",
    initialValue: "border-box",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.map(function(t) {
        if (FA(t)) switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
        return 0;
      });
    }
  }, ZQ = {
    name: "background-position",
    initialValue: "0% 0%",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return nt(e).map(function(t) {
        return t.filter(zA);
      }).map(jd);
    }
  }, qQ = {
    name: "background-repeat",
    initialValue: "repeat",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return nt(e).map(function(t) {
        return t.filter(FA).map(function(r) {
          return r.value;
        }).join(" ");
      }).map(Ay);
    }
  }, Ay = function(A) {
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
  var ey = {
    name: "background-size",
    initialValue: "0",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return nt(e).map(function(t) {
        return t.filter(ty);
      });
    }
  }, ty = function(A) {
    return FA(A) || zA(A);
  }, Hi = function(A) {
    return {
      name: "border-" + A + "-color",
      initialValue: "transparent",
      prefix: false,
      type: 3,
      format: "color"
    };
  }, ry = Hi("top"), ny = Hi("right"), oy = Hi("bottom"), iy = Hi("left"), Ti = function(A) {
    return {
      name: "border-radius-" + A,
      initialValue: "0 0",
      prefix: false,
      type: 1,
      parse: function(e, t) {
        return jd(t.filter(zA));
      }
    };
  }, ay = Ti("top-left"), sy = Ti("top-right"), ly = Ti("bottom-right"), cy = Ti("bottom-left"), Li = function(A) {
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
  }, uy = Li("top"), dy = Li("right"), fy = Li("bottom"), gy = Li("left"), ki = function(A) {
    return {
      name: "border-" + A + "-width",
      initialValue: "0",
      type: 0,
      prefix: false,
      parse: function(e, t) {
        return xn(t) ? t.number : 0;
      }
    };
  }, py = ki("top"), By = ki("right"), hy = ki("bottom"), wy = ki("left"), my = {
    name: "color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Cy = {
    name: "direction",
    initialValue: "ltr",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "rtl" ? 1 : 0;
    }
  }, vy = {
    name: "display",
    initialValue: "inline-block",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(FA).reduce(function(t, r) {
        return t | Qy(r.value);
      }, 0);
    }
  }, Qy = function(A) {
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
  }, yy = {
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
  }, by = {
    name: "letter-spacing",
    initialValue: "0",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
    }
  }, ko;
  (function(A) {
    A.NORMAL = "normal", A.STRICT = "strict";
  })(ko || (ko = {}));
  var Fy = {
    name: "line-break",
    initialValue: "normal",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "strict" ? ko.STRICT : ko.NORMAL;
    }
  }, Uy = {
    name: "line-height",
    initialValue: "normal",
    prefix: false,
    type: 4
  }, Tc = function(A, e) {
    return FA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : zA(A) ? xA(A, e) : e;
  }, Ey = {
    name: "list-style-image",
    initialValue: "none",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return e.type === 20 && e.value === "none" ? null : Zs.parse(A, e);
    }
  }, Iy = {
    name: "list-style-position",
    initialValue: "outside",
    prefix: false,
    type: 2,
    parse: function(A, e) {
      return e === "inside" ? 0 : 1;
    }
  }, As = {
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
  }, Sy = Oi("top"), xy = Oi("right"), Hy = Oi("bottom"), Ty = Oi("left"), Ly = {
    name: "overflow",
    initialValue: "visible",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(FA).map(function(t) {
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
  }, ky = {
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
  }, Oy = Ki("top"), Ky = Ki("right"), Ry = Ki("bottom"), Dy = Ki("left"), My = {
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
  }, Py = {
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
  }, _y = {
    name: "text-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && qa(e[0], "none") ? [] : nt(e).map(function(t) {
        for (var r = {
          color: ut.TRANSPARENT,
          offsetX: le,
          offsetY: le,
          blur: le
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          Ot(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : r.blur = i, n++) : r.color = xt.parse(A, i);
        }
        return r;
      });
    }
  }, Ny = {
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
  }, Gy = {
    name: "transform",
    initialValue: "none",
    prefix: true,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20 && e.value === "none") return null;
      if (e.type === 18) {
        var t = Wy[e.name];
        if (typeof t > "u") throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
      return null;
    }
  }, Vy = function(A) {
    var e = A.filter(function(t) {
      return t.type === 17;
    }).map(function(t) {
      return t.number;
    });
    return e.length === 6 ? e : null;
  }, $y = function(A) {
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
  }, Wy = {
    matrix: Vy,
    matrix3d: $y
  }, Lc = {
    type: 16,
    number: 50,
    flags: Sn
  }, Xy = [
    Lc,
    Lc
  ], Jy = {
    name: "transform-origin",
    initialValue: "50% 50%",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      var t = e.filter(zA);
      return t.length !== 2 ? Xy : [
        t[0],
        t[1]
      ];
    }
  }, Yy = {
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
  var zy = {
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
  }, jy = {
    name: "z-index",
    initialValue: "auto",
    prefix: false,
    type: 0,
    parse: function(A, e) {
      if (e.type === 20) return {
        auto: true,
        order: 0
      };
      if (xr(e)) return {
        auto: false,
        order: e.number
      };
      throw new Error("Invalid z-index number parsed");
    }
  }, gf = {
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
  }, Zy = {
    name: "opacity",
    initialValue: "1",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return xr(e) ? e.number : 1;
    }
  }, qy = {
    name: "text-decoration-color",
    initialValue: "transparent",
    prefix: false,
    type: 3,
    format: "color"
  }, Ab = {
    name: "text-decoration-line",
    initialValue: "none",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(FA).map(function(t) {
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
  }, eb = {
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
  }, tb = {
    name: "font-size",
    initialValue: "0",
    prefix: false,
    type: 3,
    format: "length"
  }, rb = {
    name: "font-weight",
    initialValue: "normal",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return xr(e) ? e.number : FA(e) && e.value === "bold" ? 700 : 400;
    }
  }, nb = {
    name: "font-variant",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.filter(FA).map(function(t) {
        return t.value;
      });
    }
  }, ob = {
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
  }, qA = function(A, e) {
    return (A & e) !== 0;
  }, ib = {
    name: "content",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      if (e.length === 0) return [];
      var t = e[0];
      return t.type === 20 && t.value === "none" ? [] : e;
    }
  }, ab = {
    name: "counter-increment",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      for (var r = [], n = e.filter(zd), o = 0; o < n.length; o++) {
        var i = n[o], a = n[o + 1];
        if (i.type === 20) {
          var s = a && xr(a) ? a.number : 1;
          r.push({
            counter: i.value,
            increment: s
          });
        }
      }
      return r;
    }
  }, sb = {
    name: "counter-reset",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return [];
      for (var t = [], r = e.filter(zd), n = 0; n < r.length; n++) {
        var o = r[n], i = r[n + 1];
        if (FA(o) && o.value !== "none") {
          var a = i && xr(i) ? i.number : 0;
          t.push({
            counter: o.value,
            reset: a
          });
        }
      }
      return t;
    }
  }, lb = {
    name: "duration",
    initialValue: "0s",
    prefix: false,
    type: 1,
    parse: function(A, e) {
      return e.filter(xn).map(function(t) {
        return gf.parse(A, t);
      });
    }
  }, cb = {
    name: "quotes",
    initialValue: "none",
    prefix: true,
    type: 1,
    parse: function(A, e) {
      if (e.length === 0) return null;
      var t = e[0];
      if (t.type === 20 && t.value === "none") return null;
      var r = [], n = e.filter(KQ);
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
  }, kc = function(A, e, t) {
    if (!A) return "";
    var r = A[Math.min(e, A.length - 1)];
    return r ? t ? r.open : r.close : "";
  }, ub = {
    name: "box-shadow",
    initialValue: "none",
    type: 1,
    prefix: false,
    parse: function(A, e) {
      return e.length === 1 && qa(e[0], "none") ? [] : nt(e).map(function(t) {
        for (var r = {
          color: 255,
          offsetX: le,
          offsetY: le,
          blur: le,
          spread: le,
          inset: false
        }, n = 0, o = 0; o < t.length; o++) {
          var i = t[o];
          qa(i, "inset") ? r.inset = true : Ot(i) ? (n === 0 ? r.offsetX = i : n === 1 ? r.offsetY = i : n === 2 ? r.blur = i : r.spread = i, n++) : r.color = xt.parse(A, i);
        }
        return r;
      });
    }
  }, db = {
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
      return e.filter(FA).forEach(function(n) {
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
  }, fb = {
    name: "-webkit-text-stroke-color",
    initialValue: "currentcolor",
    prefix: false,
    type: 3,
    format: "color"
  }, gb = {
    name: "-webkit-text-stroke-width",
    initialValue: "0",
    type: 0,
    prefix: false,
    parse: function(A, e) {
      return xn(e) ? e.number : 0;
    }
  }, pb = (function() {
    function A(e, t) {
      var r, n;
      this.animationDuration = j(e, lb, t.animationDuration), this.backgroundClip = j(e, MQ, t.backgroundClip), this.backgroundColor = j(e, PQ, t.backgroundColor), this.backgroundImage = j(e, zQ, t.backgroundImage), this.backgroundOrigin = j(e, jQ, t.backgroundOrigin), this.backgroundPosition = j(e, ZQ, t.backgroundPosition), this.backgroundRepeat = j(e, qQ, t.backgroundRepeat), this.backgroundSize = j(e, ey, t.backgroundSize), this.borderTopColor = j(e, ry, t.borderTopColor), this.borderRightColor = j(e, ny, t.borderRightColor), this.borderBottomColor = j(e, oy, t.borderBottomColor), this.borderLeftColor = j(e, iy, t.borderLeftColor), this.borderTopLeftRadius = j(e, ay, t.borderTopLeftRadius), this.borderTopRightRadius = j(e, sy, t.borderTopRightRadius), this.borderBottomRightRadius = j(e, ly, t.borderBottomRightRadius), this.borderBottomLeftRadius = j(e, cy, t.borderBottomLeftRadius), this.borderTopStyle = j(e, uy, t.borderTopStyle), this.borderRightStyle = j(e, dy, t.borderRightStyle), this.borderBottomStyle = j(e, fy, t.borderBottomStyle), this.borderLeftStyle = j(e, gy, t.borderLeftStyle), this.borderTopWidth = j(e, py, t.borderTopWidth), this.borderRightWidth = j(e, By, t.borderRightWidth), this.borderBottomWidth = j(e, hy, t.borderBottomWidth), this.borderLeftWidth = j(e, wy, t.borderLeftWidth), this.boxShadow = j(e, ub, t.boxShadow), this.color = j(e, my, t.color), this.direction = j(e, Cy, t.direction), this.display = j(e, vy, t.display), this.float = j(e, yy, t.cssFloat), this.fontFamily = j(e, eb, t.fontFamily), this.fontSize = j(e, tb, t.fontSize), this.fontStyle = j(e, ob, t.fontStyle), this.fontVariant = j(e, nb, t.fontVariant), this.fontWeight = j(e, rb, t.fontWeight), this.letterSpacing = j(e, by, t.letterSpacing), this.lineBreak = j(e, Fy, t.lineBreak), this.lineHeight = j(e, Uy, t.lineHeight), this.listStyleImage = j(e, Ey, t.listStyleImage), this.listStylePosition = j(e, Iy, t.listStylePosition), this.listStyleType = j(e, As, t.listStyleType), this.marginTop = j(e, Sy, t.marginTop), this.marginRight = j(e, xy, t.marginRight), this.marginBottom = j(e, Hy, t.marginBottom), this.marginLeft = j(e, Ty, t.marginLeft), this.opacity = j(e, Zy, t.opacity);
      var o = j(e, Ly, t.overflow);
      this.overflowX = o[0], this.overflowY = o[o.length > 1 ? 1 : 0], this.overflowWrap = j(e, ky, t.overflowWrap), this.paddingTop = j(e, Oy, t.paddingTop), this.paddingRight = j(e, Ky, t.paddingRight), this.paddingBottom = j(e, Ry, t.paddingBottom), this.paddingLeft = j(e, Dy, t.paddingLeft), this.paintOrder = j(e, db, t.paintOrder), this.position = j(e, Py, t.position), this.textAlign = j(e, My, t.textAlign), this.textDecorationColor = j(e, qy, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = j(e, Ab, (n = t.textDecorationLine) !== null && n !== void 0 ? n : t.textDecoration), this.textShadow = j(e, _y, t.textShadow), this.textTransform = j(e, Ny, t.textTransform), this.transform = j(e, Gy, t.transform), this.transformOrigin = j(e, Jy, t.transformOrigin), this.visibility = j(e, Yy, t.visibility), this.webkitTextStrokeColor = j(e, fb, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = j(e, gb, t.webkitTextStrokeWidth), this.wordBreak = j(e, zy, t.wordBreak), this.zIndex = j(e, jy, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return Ht(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return qA(this.display, 4) || qA(this.display, 33554432) || qA(this.display, 268435456) || qA(this.display, 536870912) || qA(this.display, 67108864) || qA(this.display, 134217728);
    }, A;
  })(), Bb = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.content = j(e, ib, t.content), this.quotes = j(e, cb, t.quotes);
    }
    return A;
  })(), Oc = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.counterIncrement = j(e, ab, t.counterIncrement), this.counterReset = j(e, sb, t.counterReset);
    }
    return A;
  })(), j = function(A, e, t) {
    var r = new Jd(), n = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
    r.write(n);
    var o = new Yd(r.read());
    switch (e.type) {
      case 2:
        var i = o.parseComponentValue();
        return e.parse(A, FA(i) ? i.value : e.initialValue);
      case 0:
        return e.parse(A, o.parseComponentValue());
      case 1:
        return e.parse(A, o.parseComponentValues());
      case 4:
        return o.parseComponentValue();
      case 3:
        switch (e.format) {
          case "angle":
            return Si.parse(A, o.parseComponentValue());
          case "color":
            return xt.parse(A, o.parseComponentValue());
          case "image":
            return Zs.parse(A, o.parseComponentValue());
          case "length":
            var a = o.parseComponentValue();
            return Ot(a) ? a : le;
          case "length-percentage":
            var s = o.parseComponentValue();
            return zA(s) ? s : le;
          case "time":
            return gf.parse(A, o.parseComponentValue());
        }
        break;
    }
  }, hb = "data-html2canvas-debug", wb = function(A) {
    var e = A.getAttribute(hb);
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
  }, es = function(A, e) {
    var t = wb(A);
    return t === 1 || e === t;
  }, ot = /* @__PURE__ */ (function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, es(t, 3)) debugger;
      this.styles = new pb(e, window.getComputedStyle(t, null)), ns(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Ei(this.context, t), es(t, 4) && (this.flags |= 16);
    }
    return A;
  })(), mb = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Kc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", jr = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var oo = 0; oo < Kc.length; oo++) jr[Kc.charCodeAt(oo)] = oo;
  var Cb = function(A) {
    var e = A.length * 0.75, t = A.length, r, n = 0, o, i, a, s;
    A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
    var l = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), c = Array.isArray(l) ? l : new Uint8Array(l);
    for (r = 0; r < t; r += 4) o = jr[A.charCodeAt(r)], i = jr[A.charCodeAt(r + 1)], a = jr[A.charCodeAt(r + 2)], s = jr[A.charCodeAt(r + 3)], c[n++] = o << 2 | i >> 4, c[n++] = (i & 15) << 4 | a >> 2, c[n++] = (a & 3) << 6 | s & 63;
    return l;
  }, vb = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 2) t.push(A[r + 1] << 8 | A[r]);
    return t;
  }, Qb = function(A) {
    for (var e = A.length, t = [], r = 0; r < e; r += 4) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
    return t;
  }, zt = 5, qs = 11, ra = 2, yb = qs - zt, pf = 65536 >> zt, bb = 1 << zt, na = bb - 1, Fb = 1024 >> zt, Ub = pf + Fb, Eb = Ub, Ib = 32, Sb = Eb + Ib, xb = 65536 >> qs, Hb = 1 << yb, Tb = Hb - 1, Rc = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }, Lb = function(A, e, t) {
    return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
  }, kb = function(A, e) {
    var t = Cb(A), r = Array.isArray(t) ? Qb(t) : new Uint32Array(t), n = Array.isArray(t) ? vb(t) : new Uint16Array(t), o = 24, i = Rc(n, o / 2, r[4] / 2), a = r[5] === 2 ? Rc(n, (o + r[4]) / 2) : Lb(r, Math.ceil((o + r[4]) / 4));
    return new Ob(r[0], r[1], r[2], r[3], i, a);
  }, Ob = (function() {
    function A(e, t, r, n, o, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = n, this.index = o, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535) return t = this.index[e >> zt], t = (t << ra) + (e & na), this.data[t];
        if (e <= 65535) return t = this.index[pf + (e - 55296 >> zt)], t = (t << ra) + (e & na), this.data[t];
        if (e < this.highStart) return t = Sb - xb + (e >> qs), t = this.index[t], t += e >> zt & Tb, t = this.index[t], t = (t << ra) + (e & na), this.data[t];
        if (e <= 1114111) return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  })(), Dc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Kb = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
  for (var io = 0; io < Dc.length; io++) Kb[Dc.charCodeAt(io)] = io;
  var Rb = 1, oa = 2, ia = 3, Mc = 4, Pc = 5, Db = 7, _c = 8, aa = 9, sa = 10, Nc = 11, Gc = 12, Vc = 13, $c = 14, la = 15, Mb = function(A) {
    for (var e = [], t = 0, r = A.length; t < r; ) {
      var n = A.charCodeAt(t++);
      if (n >= 55296 && n <= 56319 && t < r) {
        var o = A.charCodeAt(t++);
        (o & 64512) === 56320 ? e.push(((n & 1023) << 10) + (o & 1023) + 65536) : (e.push(n), t--);
      } else e.push(n);
    }
    return e;
  }, Pb = function() {
    for (var A = [], e = 0; e < arguments.length; e++) A[e] = arguments[e];
    if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
    var t = A.length;
    if (!t) return "";
    for (var r = [], n = -1, o = ""; ++n < t; ) {
      var i = A[n];
      i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (n + 1 === t || r.length > 16384) && (o += String.fromCharCode.apply(String, r), r.length = 0);
    }
    return o;
  }, _b = kb(mb), xe = "\xD7", ca = "\xF7", Nb = function(A) {
    return _b.get(A);
  }, Gb = function(A, e, t) {
    var r = t - 2, n = e[r], o = e[t - 1], i = e[t];
    if (o === oa && i === ia) return xe;
    if (o === oa || o === ia || o === Mc || i === oa || i === ia || i === Mc) return ca;
    if (o === _c && [
      _c,
      aa,
      Nc,
      Gc
    ].indexOf(i) !== -1 || (o === Nc || o === aa) && (i === aa || i === sa) || (o === Gc || o === sa) && i === sa || i === Vc || i === Pc || i === Db || o === Rb) return xe;
    if (o === Vc && i === $c) {
      for (; n === Pc; ) n = e[--r];
      if (n === $c) return xe;
    }
    if (o === la && i === la) {
      for (var a = 0; n === la; ) a++, n = e[--r];
      if (a % 2 === 0) return xe;
    }
    return ca;
  }, Vb = function(A) {
    var e = Mb(A), t = e.length, r = 0, n = 0, o = e.map(Nb);
    return {
      next: function() {
        if (r >= t) return {
          done: true,
          value: null
        };
        for (var i = xe; r < t && (i = Gb(e, o, ++r)) === xe; ) ;
        if (i !== xe || r === t) {
          var a = Pb.apply(null, e.slice(n, r));
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
  }, $b = function(A) {
    for (var e = Vb(A), t = [], r; !(r = e.next()).done; ) r.value && t.push(r.value.slice());
    return t;
  }, Wb = function(A) {
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
  }, Xb = function(A) {
    var e = A.createElement("boundtest");
    e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
    var t = A.createRange();
    e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
    var r = e.firstChild, n = Ii(r.data).map(function(s) {
      return $A(s);
    }), o = 0, i = {}, a = n.every(function(s, l) {
      t.setStart(r, o), t.setEnd(r, o + s.length);
      var c = t.getBoundingClientRect();
      o += s.length;
      var u = c.x > i.x || c.y > i.y;
      return i = c, l === 0 ? true : u;
    });
    return A.body.removeChild(e), a;
  }, Jb = function() {
    return typeof new Image().crossOrigin < "u";
  }, Yb = function() {
    return typeof new XMLHttpRequest().responseType == "string";
  }, zb = function(A) {
    var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
    if (!r) return false;
    e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
    try {
      r.drawImage(e, 0, 0), t.toDataURL();
    } catch {
      return false;
    }
    return true;
  }, Wc = function(A) {
    return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
  }, jb = function(A) {
    var e = A.createElement("canvas"), t = 100;
    e.width = t, e.height = t;
    var r = e.getContext("2d");
    if (!r) return Promise.reject(false);
    r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
    var n = new Image(), o = e.toDataURL();
    n.src = o;
    var i = ts(t, t, 0, 0, n);
    return r.fillStyle = "red", r.fillRect(0, 0, t, t), Xc(i).then(function(a) {
      r.drawImage(a, 0, 0);
      var s = r.getImageData(0, 0, t, t).data;
      r.fillStyle = "red", r.fillRect(0, 0, t, t);
      var l = A.createElement("div");
      return l.style.backgroundImage = "url(" + o + ")", l.style.height = t + "px", Wc(s) ? Xc(ts(t, t, 0, 0, l)) : Promise.reject(false);
    }).then(function(a) {
      return r.drawImage(a, 0, 0), Wc(r.getImageData(0, 0, t, t).data);
    }).catch(function() {
      return false;
    });
  }, ts = function(A, e, t, r, n) {
    var o = "http://www.w3.org/2000/svg", i = document.createElementNS(o, "svg"), a = document.createElementNS(o, "foreignObject");
    return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), a.setAttributeNS(null, "width", "100%"), a.setAttributeNS(null, "height", "100%"), a.setAttributeNS(null, "x", t.toString()), a.setAttributeNS(null, "y", r.toString()), a.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(a), a.appendChild(n), i;
  }, Xc = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        return e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, ie = {
    get SUPPORT_RANGE_BOUNDS() {
      var A = Wb(document);
      return Object.defineProperty(ie, "SUPPORT_RANGE_BOUNDS", {
        value: A
      }), A;
    },
    get SUPPORT_WORD_BREAKING() {
      var A = ie.SUPPORT_RANGE_BOUNDS && Xb(document);
      return Object.defineProperty(ie, "SUPPORT_WORD_BREAKING", {
        value: A
      }), A;
    },
    get SUPPORT_SVG_DRAWING() {
      var A = zb(document);
      return Object.defineProperty(ie, "SUPPORT_SVG_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_FOREIGNOBJECT_DRAWING() {
      var A = typeof Array.from == "function" && typeof window.fetch == "function" ? jb(document) : Promise.resolve(false);
      return Object.defineProperty(ie, "SUPPORT_FOREIGNOBJECT_DRAWING", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_IMAGES() {
      var A = Jb();
      return Object.defineProperty(ie, "SUPPORT_CORS_IMAGES", {
        value: A
      }), A;
    },
    get SUPPORT_RESPONSE_TYPE() {
      var A = Yb();
      return Object.defineProperty(ie, "SUPPORT_RESPONSE_TYPE", {
        value: A
      }), A;
    },
    get SUPPORT_CORS_XHR() {
      var A = "withCredentials" in new XMLHttpRequest();
      return Object.defineProperty(ie, "SUPPORT_CORS_XHR", {
        value: A
      }), A;
    },
    get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
      var A = !!(typeof Intl < "u" && Intl.Segmenter);
      return Object.defineProperty(ie, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
        value: A
      }), A;
    }
  }, on = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  })(), Zb = function(A, e, t, r) {
    var n = eF(e, t), o = [], i = 0;
    return n.forEach(function(a) {
      if (t.textDecorationLine.length || a.trim().length > 0) if (ie.SUPPORT_RANGE_BOUNDS) {
        var s = Jc(r, i, a.length).getClientRects();
        if (s.length > 1) {
          var l = Al(a), c = 0;
          l.forEach(function(d) {
            o.push(new on(d, ht.fromDOMRectList(A, Jc(r, c + i, d.length).getClientRects()))), c += d.length;
          });
        } else o.push(new on(a, ht.fromDOMRectList(A, s)));
      } else {
        var u = r.splitText(a.length);
        o.push(new on(a, qb(A, r))), r = u;
      }
      else ie.SUPPORT_RANGE_BOUNDS || (r = r.splitText(a.length));
      i += a.length;
    }), o;
  }, qb = function(A, e) {
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
    return ht.EMPTY;
  }, Jc = function(A, e, t) {
    var r = A.ownerDocument;
    if (!r) throw new Error("Node has no owner document");
    var n = r.createRange();
    return n.setStart(A, e), n.setEnd(A, e + t), n;
  }, Al = function(A) {
    if (ie.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var e = new Intl.Segmenter(void 0, {
        granularity: "grapheme"
      });
      return Array.from(e.segment(A)).map(function(t) {
        return t.segment;
      });
    }
    return $b(A);
  }, AF = function(A, e) {
    if (ie.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
      var t = new Intl.Segmenter(void 0, {
        granularity: "word"
      });
      return Array.from(t.segment(A)).map(function(r) {
        return r.segment;
      });
    }
    return rF(A, e);
  }, eF = function(A, e) {
    return e.letterSpacing !== 0 ? Al(A) : AF(A, e);
  }, tF = [
    32,
    160,
    4961,
    65792,
    65793,
    4153,
    4241
  ], rF = function(A, e) {
    for (var t = xv(A, {
      lineBreak: e.lineBreak,
      wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
    }), r = [], n, o = function() {
      if (n.value) {
        var i = n.value.slice(), a = Ii(i), s = "";
        a.forEach(function(l) {
          tF.indexOf(l) === -1 ? s += $A(l) : (s.length && r.push(s), r.push($A(l)), s = "");
        }), s.length && r.push(s);
      }
    }; !(n = t.next()).done; ) o();
    return r;
  }, nF = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.text = oF(t.data, r.textTransform), this.textBounds = Zb(e, this.text, r, t);
    }
    return A;
  })(), oF = function(A, e) {
    switch (e) {
      case 1:
        return A.toLowerCase();
      case 3:
        return A.replace(iF, aF);
      case 2:
        return A.toUpperCase();
      default:
        return A;
    }
  }, iF = /(^|\s|:|-|\(|\))([a-z])/g, aF = function(A, e, t) {
    return A.length > 0 ? e + t.toUpperCase() : A;
  }, Bf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.src = r.currentSrc || r.src, n.intrinsicWidth = r.naturalWidth, n.intrinsicHeight = r.naturalHeight, n.context.cache.addImage(n.src), n;
    }
    return e;
  })(ot), hf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r, n.intrinsicWidth = r.width, n.intrinsicHeight = r.height, n;
    }
    return e;
  })(ot), wf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = new XMLSerializer(), i = Ei(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), n.svg = "data:image/svg+xml," + encodeURIComponent(o.serializeToString(r)), n.intrinsicWidth = r.width.baseVal.value, n.intrinsicHeight = r.height.baseVal.value, n.context.cache.addImage(n.svg), n;
    }
    return e;
  })(ot), mf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(ot), rs = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.start = r.start, n.reversed = typeof r.reversed == "boolean" && r.reversed === true, n;
    }
    return e;
  })(ot), sF = [
    {
      type: 15,
      flags: 0,
      unit: "px",
      number: 3
    }
  ], lF = [
    {
      type: 16,
      flags: 0,
      number: 50
    }
  ], cF = function(A) {
    return A.width > A.height ? new ht(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new ht(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
  }, uF = function(A) {
    var e = A.type === dF ? new Array(A.value.length + 1).join("\u2022") : A.value;
    return e.length === 0 ? A.placeholder || "" : e;
  }, Oo = "checkbox", Ko = "radio", dF = "password", Yc = 707406591, el = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      switch (n.type = r.type.toLowerCase(), n.checked = r.checked, n.value = uF(r), (n.type === Oo || n.type === Ko) && (n.styles.backgroundColor = 3739148031, n.styles.borderTopColor = n.styles.borderRightColor = n.styles.borderBottomColor = n.styles.borderLeftColor = 2779096575, n.styles.borderTopWidth = n.styles.borderRightWidth = n.styles.borderBottomWidth = n.styles.borderLeftWidth = 1, n.styles.borderTopStyle = n.styles.borderRightStyle = n.styles.borderBottomStyle = n.styles.borderLeftStyle = 1, n.styles.backgroundClip = [
        0
      ], n.styles.backgroundOrigin = [
        0
      ], n.bounds = cF(n.bounds)), n.type) {
        case Oo:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = sF;
          break;
        case Ko:
          n.styles.borderTopRightRadius = n.styles.borderTopLeftRadius = n.styles.borderBottomRightRadius = n.styles.borderBottomLeftRadius = lF;
          break;
      }
      return n;
    }
    return e;
  })(ot), Cf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this, o = r.options[r.selectedIndex || 0];
      return n.value = o && o.text || "", n;
    }
    return e;
  })(ot), vf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.value = r.value, n;
    }
    return e;
  })(ot), Qf = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      n.src = r.src, n.width = parseInt(r.width, 10) || 0, n.height = parseInt(r.height, 10) || 0, n.backgroundColor = n.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          n.tree = bf(t, r.contentWindow.document.documentElement);
          var o = r.contentWindow.document.documentElement ? rn(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : ut.TRANSPARENT, i = r.contentWindow.document.body ? rn(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : ut.TRANSPARENT;
          n.backgroundColor = Ht(o) ? Ht(i) ? n.styles.backgroundColor : i : o;
        }
      } catch {
      }
      return n;
    }
    return e;
  })(ot), fF = [
    "OL",
    "UL",
    "MENU"
  ], mo = function(A, e, t, r) {
    for (var n = e.firstChild, o = void 0; n; n = o) if (o = n.nextSibling, Ff(n) && n.data.trim().length > 0) t.textNodes.push(new nF(A, n, t.styles));
    else if (hr(n)) if (Sf(n) && n.assignedNodes) n.assignedNodes().forEach(function(a) {
      return mo(A, a, t, r);
    });
    else {
      var i = yf(A, n);
      i.styles.isVisible() && (gF(n, i, r) ? i.flags |= 4 : pF(i.styles) && (i.flags |= 2), fF.indexOf(n.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), n.slot, n.shadowRoot ? mo(A, n.shadowRoot, i, r) : !Ro(n) && !Uf(n) && !Do(n) && mo(A, n, i, r));
    }
  }, yf = function(A, e) {
    return os(e) ? new Bf(A, e) : Ef(e) ? new hf(A, e) : Uf(e) ? new wf(A, e) : BF(e) ? new mf(A, e) : hF(e) ? new rs(A, e) : wF(e) ? new el(A, e) : Do(e) ? new Cf(A, e) : Ro(e) ? new vf(A, e) : If(e) ? new Qf(A, e) : new ot(A, e);
  }, bf = function(A, e) {
    var t = yf(A, e);
    return t.flags |= 4, mo(A, e, t, t), t;
  }, gF = function(A, e, t) {
    return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || tl(A) && t.styles.isTransparent();
  }, pF = function(A) {
    return A.isPositioned() || A.isFloating();
  }, Ff = function(A) {
    return A.nodeType === Node.TEXT_NODE;
  }, hr = function(A) {
    return A.nodeType === Node.ELEMENT_NODE;
  }, ns = function(A) {
    return hr(A) && typeof A.style < "u" && !Co(A);
  }, Co = function(A) {
    return typeof A.className == "object";
  }, BF = function(A) {
    return A.tagName === "LI";
  }, hF = function(A) {
    return A.tagName === "OL";
  }, wF = function(A) {
    return A.tagName === "INPUT";
  }, mF = function(A) {
    return A.tagName === "HTML";
  }, Uf = function(A) {
    return A.tagName === "svg";
  }, tl = function(A) {
    return A.tagName === "BODY";
  }, Ef = function(A) {
    return A.tagName === "CANVAS";
  }, zc = function(A) {
    return A.tagName === "VIDEO";
  }, os = function(A) {
    return A.tagName === "IMG";
  }, If = function(A) {
    return A.tagName === "IFRAME";
  }, jc = function(A) {
    return A.tagName === "STYLE";
  }, CF = function(A) {
    return A.tagName === "SCRIPT";
  }, Ro = function(A) {
    return A.tagName === "TEXTAREA";
  }, Do = function(A) {
    return A.tagName === "SELECT";
  }, Sf = function(A) {
    return A.tagName === "SLOT";
  }, Zc = function(A) {
    return A.tagName.indexOf("-") > 0;
  }, vF = (function() {
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
  })(), qc = {
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
  }, Au = {
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
  }, yF = {
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
  }, cr = function(A, e, t, r, n, o) {
    return A < e || A > t ? Bn(A, n, o.length > 0) : r.integers.reduce(function(i, a, s) {
      for (; A >= a; ) A -= a, i += r.values[s];
      return i;
    }, "") + o;
  }, xf = function(A, e, t, r) {
    var n = "";
    do
      t || A--, n = r(A) + n, A /= e;
    while (A * e >= e);
    return n;
  }, VA = function(A, e, t, r, n) {
    var o = t - e + 1;
    return (A < 0 ? "-" : "") + (xf(Math.abs(A), o, r, function(i) {
      return $A(Math.floor(i % o) + e);
    }) + n);
  }, Dt = function(A, e, t) {
    t === void 0 && (t = ". ");
    var r = e.length;
    return xf(Math.abs(A), r, false, function(n) {
      return e[Math.floor(n % r)];
    }) + t;
  }, gr = 1, vt = 2, Qt = 4, Zr = 8, lt = function(A, e, t, r, n, o) {
    if (A < -9999 || A > 9999) return Bn(A, 4, n.length > 0);
    var i = Math.abs(A), a = n;
    if (i === 0) return e[0] + a;
    for (var s = 0; i > 0 && s <= 4; s++) {
      var l = i % 10;
      l === 0 && qA(o, gr) && a !== "" ? a = e[l] + a : l > 1 || l === 1 && s === 0 || l === 1 && s === 1 && qA(o, vt) || l === 1 && s === 1 && qA(o, Qt) && A > 100 || l === 1 && s > 1 && qA(o, Zr) ? a = e[l] + (s > 0 ? t[s - 1] : "") + a : l === 1 && s > 0 && (a = t[s - 1] + a), i = Math.floor(i / 10);
    }
    return (A < 0 ? r : "") + a;
  }, eu = "\u5341\u767E\u5343\u842C", tu = "\u62FE\u4F70\u4EDF\u842C", ru = "\u30DE\u30A4\u30CA\u30B9", ua = "\uB9C8\uC774\uB108\uC2A4", Bn = function(A, e, t) {
    var r = t ? ". " : "", n = t ? "\u3001" : "", o = t ? ", " : "", i = t ? " " : "";
    switch (e) {
      case 0:
        return "\u2022" + i;
      case 1:
        return "\u25E6" + i;
      case 2:
        return "\u25FE" + i;
      case 5:
        var a = VA(A, 48, 57, true, r);
        return a.length < 4 ? "0" + a : a;
      case 4:
        return Dt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", n);
      case 6:
        return cr(A, 1, 3999, qc, 3, r).toLowerCase();
      case 7:
        return cr(A, 1, 3999, qc, 3, r);
      case 8:
        return VA(A, 945, 969, false, r);
      case 9:
        return VA(A, 97, 122, false, r);
      case 10:
        return VA(A, 65, 90, false, r);
      case 11:
        return VA(A, 1632, 1641, true, r);
      case 12:
      case 49:
        return cr(A, 1, 9999, Au, 3, r);
      case 35:
        return cr(A, 1, 9999, Au, 3, r).toLowerCase();
      case 13:
        return VA(A, 2534, 2543, true, r);
      case 14:
      case 30:
        return VA(A, 6112, 6121, true, r);
      case 15:
        return Dt(A, "\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5", n);
      case 16:
        return Dt(A, "\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678", n);
      case 17:
      case 48:
        return lt(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", eu, "\u8CA0", n, vt | Qt | Zr);
      case 47:
        return lt(A, "\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396", tu, "\u8CA0", n, gr | vt | Qt | Zr);
      case 42:
        return lt(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", eu, "\u8D1F", n, vt | Qt | Zr);
      case 41:
        return lt(A, "\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396", tu, "\u8D1F", n, gr | vt | Qt | Zr);
      case 26:
        return lt(A, "\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u4E07", ru, n, 0);
      case 25:
        return lt(A, "\u96F6\u58F1\u5F10\u53C2\u56DB\u4F0D\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343\u4E07", ru, n, gr | vt | Qt);
      case 31:
        return lt(A, "\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C", "\uC2ED\uBC31\uCC9C\uB9CC", ua, o, gr | vt | Qt);
      case 33:
        return lt(A, "\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u5341\u767E\u5343\u842C", ua, o, 0);
      case 32:
        return lt(A, "\u96F6\u58F9\u8CB3\u53C3\u56DB\u4E94\u516D\u4E03\u516B\u4E5D", "\u62FE\u767E\u5343", ua, o, gr | vt | Qt);
      case 18:
        return VA(A, 2406, 2415, true, r);
      case 20:
        return cr(A, 1, 19999, yF, 3, r);
      case 21:
        return VA(A, 2790, 2799, true, r);
      case 22:
        return VA(A, 2662, 2671, true, r);
      case 22:
        return cr(A, 1, 10999, QF, 3, r);
      case 23:
        return Dt(A, "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3090\u3091\u3092\u3093");
      case 24:
        return Dt(A, "\u3044\u308D\u306F\u306B\u307B\u3078\u3068\u3061\u308A\u306C\u308B\u3092\u308F\u304B\u3088\u305F\u308C\u305D\u3064\u306D\u306A\u3089\u3080\u3046\u3090\u306E\u304A\u304F\u3084\u307E\u3051\u3075\u3053\u3048\u3066\u3042\u3055\u304D\u3086\u3081\u307F\u3057\u3091\u3072\u3082\u305B\u3059");
      case 27:
        return VA(A, 3302, 3311, true, r);
      case 28:
        return Dt(A, "\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F0\u30F1\u30F2\u30F3", n);
      case 29:
        return Dt(A, "\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9", n);
      case 34:
        return VA(A, 3792, 3801, true, r);
      case 37:
        return VA(A, 6160, 6169, true, r);
      case 38:
        return VA(A, 4160, 4169, true, r);
      case 39:
        return VA(A, 2918, 2927, true, r);
      case 40:
        return VA(A, 1776, 1785, true, r);
      case 43:
        return VA(A, 3046, 3055, true, r);
      case 44:
        return VA(A, 3174, 3183, true, r);
      case 45:
        return VA(A, 3664, 3673, true, r);
      case 46:
        return VA(A, 3872, 3881, true, r);
      default:
        return VA(A, 48, 57, true, r);
    }
  }, Hf = "data-html2canvas-ignore", nu = (function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new vF(), this.quoteDepth = 0, !t.ownerDocument) throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, false);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, n = bF(e, t);
      if (!n.contentWindow) return Promise.reject("Unable to find iframe window");
      var o = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, a = n.contentWindow, s = a.document, l = EF(n).then(function() {
        return me(r, void 0, void 0, function() {
          var c, u;
          return ge(this, function(d) {
            switch (d.label) {
              case 0:
                return this.scrolledElements.forEach(HF), a && (a.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (a.scrollY !== t.top || a.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(a.scrollX - t.left, a.scrollY - t.top, 0, 0))), c = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [
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
                  UF(s)
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
      return s.open(), s.write(SF(document.doctype) + "<html></html>"), xF(this.referenceElement.ownerDocument, o, i), s.replaceChild(s.adoptNode(this.documentElement), s.documentElement), s.close(), l;
    }, A.prototype.createElementClone = function(e) {
      if (es(e, 2)) debugger;
      if (Ef(e)) return this.createCanvasClone(e);
      if (zc(e)) return this.createVideoClone(e);
      if (jc(e)) return this.createStyleClone(e);
      var t = e.cloneNode(false);
      return os(t) && (os(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Zc(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return da(e.style, t), t;
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
      (!hr(t) || !CF(t) && !t.hasAttribute(Hf) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !hr(t) || !jc(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var n = this, o = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; o; o = o.nextSibling) if (hr(o) && Sf(o) && typeof o.assignedNodes == "function") {
        var i = o.assignedNodes();
        i.length && i.forEach(function(a) {
          return n.appendChildNode(t, a, r);
        });
      } else this.appendChildNode(t, o, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (Ff(e)) return document.createTextNode(e.data);
      if (!e.ownerDocument) return e.cloneNode(false);
      var r = e.ownerDocument.defaultView;
      if (r && hr(e) && (ns(e) || Co(e))) {
        var n = this.createElementClone(e);
        n.style.transitionProperty = "none";
        var o = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), a = r.getComputedStyle(e, ":after");
        this.referenceElement === e && ns(n) && (this.clonedReferenceElement = n), tl(n) && kF(n);
        var s = this.counters.parse(new Oc(this.context, o)), l = this.resolvePseudoContent(e, n, i, an.BEFORE);
        Zc(e) && (t = true), zc(e) || this.cloneChildNodes(e, n, t), l && n.insertBefore(l, n.firstChild);
        var c = this.resolvePseudoContent(e, n, a, an.AFTER);
        return c && n.appendChild(c), this.counters.pop(s), (o && (this.options.copyStyles || Co(e)) && !If(e) || t) && da(o, n), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([
          n,
          e.scrollLeft,
          e.scrollTop
        ]), (Ro(e) || Do(e)) && (Ro(n) || Do(n)) && (n.value = e.value), n;
      }
      return e.cloneNode(false);
    }, A.prototype.resolvePseudoContent = function(e, t, r, n) {
      var o = this;
      if (r) {
        var i = r.content, a = t.ownerDocument;
        if (!(!a || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new Oc(this.context, r));
          var s = new Bb(this.context, r), l = a.createElement("html2canvaspseudoelement");
          da(r, l), s.content.forEach(function(u) {
            if (u.type === 0) l.appendChild(a.createTextNode(u.value));
            else if (u.type === 22) {
              var d = a.createElement("img");
              d.src = u.value, d.style.opacity = "1", l.appendChild(d);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var g = u.values.filter(FA);
                g.length && l.appendChild(a.createTextNode(e.getAttribute(g[0].value) || ""));
              } else if (u.name === "counter") {
                var p = u.values.filter(Ur), B = p[0], y = p[1];
                if (B && FA(B)) {
                  var h = o.counters.getCounterValue(B.value), b = y && FA(y) ? As.parse(o.context, y.value) : 3;
                  l.appendChild(a.createTextNode(Bn(h, b, false)));
                }
              } else if (u.name === "counters") {
                var m = u.values.filter(Ur), B = m[0], v = m[1], y = m[2];
                if (B && FA(B)) {
                  var U = o.counters.getCounterValues(B.value), C = y && FA(y) ? As.parse(o.context, y.value) : 3, I = v && v.type === 0 ? v.value : "", S = U.map(function(H) {
                    return Bn(H, C, false);
                  }).join(I);
                  l.appendChild(a.createTextNode(S));
                }
              }
            } else if (u.type === 20) switch (u.value) {
              case "open-quote":
                l.appendChild(a.createTextNode(kc(s.quotes, o.quoteDepth++, true)));
                break;
              case "close-quote":
                l.appendChild(a.createTextNode(kc(s.quotes, --o.quoteDepth, false)));
                break;
              default:
                l.appendChild(a.createTextNode(u.value));
            }
          }), l.className = is + " " + as;
          var c = n === an.BEFORE ? " " + is : " " + as;
          return Co(t) ? t.className.baseValue += c : t.className += c, l;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), true) : false;
    }, A;
  })(), an;
  (function(A) {
    A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
  })(an || (an = {}));
  var bF = function(A, e) {
    var t = A.createElement("iframe");
    return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(Hf, "true"), A.body.appendChild(t), t;
  }, FF = function(A) {
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
  }, UF = function(A) {
    return Promise.all([].slice.call(A.images, 0).map(FF));
  }, EF = function(A) {
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
  }, IF = [
    "all",
    "d",
    "content"
  ], da = function(A, e) {
    for (var t = A.length - 1; t >= 0; t--) {
      var r = A.item(t);
      IF.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
    }
    return e;
  }, SF = function(A) {
    var e = "";
    return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
  }, xF = function(A, e, t) {
    A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
  }, HF = function(A) {
    var e = A[0], t = A[1], r = A[2];
    e.scrollLeft = t, e.scrollTop = r;
  }, TF = ":before", LF = ":after", is = "___html2canvas___pseudoelement_before", as = "___html2canvas___pseudoelement_after", ou = `{
    content: "" !important;
    display: none !important;
}`, kF = function(A) {
    OF(A, "." + is + TF + ou + `
         .` + as + LF + ou);
  }, OF = function(A, e) {
    var t = A.ownerDocument;
    if (t) {
      var r = t.createElement("style");
      r.textContent = e, A.appendChild(r);
    }
  }, Tf = (function() {
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
  })(), KF = (function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (ga(e) || PF(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return me(this, void 0, void 0, function() {
        var t, r, n, o, i = this;
        return ge(this, function(a) {
          switch (a.label) {
            case 0:
              return t = Tf.isSameOrigin(e), r = !fa(e) && this._options.useCORS === true && ie.SUPPORT_CORS_IMAGES && !t, n = !fa(e) && !t && !ga(e) && typeof this._options.proxy == "string" && ie.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === false && !fa(e) && !ga(e) && !n && !r ? [
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
                  }, c.onerror = l, (_F(o) || r) && (c.crossOrigin = "anonymous"), c.src = o, c.complete === true && setTimeout(function() {
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
        var a = ie.SUPPORT_RESPONSE_TYPE ? "blob" : "text", s = new XMLHttpRequest();
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
  })(), RF = /^data:image\/svg\+xml/i, DF = /^data:image\/.*;base64,/i, MF = /^data:image\/.*/i, PF = function(A) {
    return ie.SUPPORT_SVG_DRAWING || !NF(A);
  }, fa = function(A) {
    return MF.test(A);
  }, _F = function(A) {
    return DF.test(A);
  }, ga = function(A) {
    return A.substr(0, 4) === "blob";
  }, NF = function(A) {
    return A.substr(-3).toLowerCase() === "svg" || RF.test(A);
  }, z = (function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  })(), ur = function(A, e, t) {
    return new z(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }, ao = (function() {
    function A(e, t, r, n) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = n;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = ur(this.start, this.startControl, e), n = ur(this.startControl, this.endControl, e), o = ur(this.endControl, this.end, e), i = ur(r, n, e), a = ur(n, o, e), s = ur(i, a, e);
      return t ? new A(this.start, r, i, s) : new A(s, a, o, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  })(), Le = function(A) {
    return A.type === 1;
  }, GF = /* @__PURE__ */ (function() {
    function A(e) {
      var t = e.styles, r = e.bounds, n = zr(t.borderTopLeftRadius, r.width, r.height), o = n[0], i = n[1], a = zr(t.borderTopRightRadius, r.width, r.height), s = a[0], l = a[1], c = zr(t.borderBottomRightRadius, r.width, r.height), u = c[0], d = c[1], g = zr(t.borderBottomLeftRadius, r.width, r.height), p = g[0], B = g[1], y = [];
      y.push((o + s) / r.width), y.push((p + u) / r.width), y.push((i + B) / r.height), y.push((l + d) / r.height);
      var h = Math.max.apply(Math, y);
      h > 1 && (o /= h, i /= h, s /= h, l /= h, u /= h, d /= h, p /= h, B /= h);
      var b = r.width - s, m = r.height - d, v = r.width - u, U = r.height - B, C = t.borderTopWidth, I = t.borderRightWidth, S = t.borderBottomWidth, x = t.borderLeftWidth, f = xA(t.paddingTop, e.bounds.width), H = xA(t.paddingRight, e.bounds.width), K = xA(t.paddingBottom, e.bounds.width), k = xA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = o > 0 || i > 0 ? KA(r.left + x / 3, r.top + C / 3, o - x / 3, i - C / 3, yA.TOP_LEFT) : new z(r.left + x / 3, r.top + C / 3), this.topRightBorderDoubleOuterBox = o > 0 || i > 0 ? KA(r.left + b, r.top + C / 3, s - I / 3, l - C / 3, yA.TOP_RIGHT) : new z(r.left + r.width - I / 3, r.top + C / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || d > 0 ? KA(r.left + v, r.top + m, u - I / 3, d - S / 3, yA.BOTTOM_RIGHT) : new z(r.left + r.width - I / 3, r.top + r.height - S / 3), this.bottomLeftBorderDoubleOuterBox = p > 0 || B > 0 ? KA(r.left + x / 3, r.top + U, p - x / 3, B - S / 3, yA.BOTTOM_LEFT) : new z(r.left + x / 3, r.top + r.height - S / 3), this.topLeftBorderDoubleInnerBox = o > 0 || i > 0 ? KA(r.left + x * 2 / 3, r.top + C * 2 / 3, o - x * 2 / 3, i - C * 2 / 3, yA.TOP_LEFT) : new z(r.left + x * 2 / 3, r.top + C * 2 / 3), this.topRightBorderDoubleInnerBox = o > 0 || i > 0 ? KA(r.left + b, r.top + C * 2 / 3, s - I * 2 / 3, l - C * 2 / 3, yA.TOP_RIGHT) : new z(r.left + r.width - I * 2 / 3, r.top + C * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || d > 0 ? KA(r.left + v, r.top + m, u - I * 2 / 3, d - S * 2 / 3, yA.BOTTOM_RIGHT) : new z(r.left + r.width - I * 2 / 3, r.top + r.height - S * 2 / 3), this.bottomLeftBorderDoubleInnerBox = p > 0 || B > 0 ? KA(r.left + x * 2 / 3, r.top + U, p - x * 2 / 3, B - S * 2 / 3, yA.BOTTOM_LEFT) : new z(r.left + x * 2 / 3, r.top + r.height - S * 2 / 3), this.topLeftBorderStroke = o > 0 || i > 0 ? KA(r.left + x / 2, r.top + C / 2, o - x / 2, i - C / 2, yA.TOP_LEFT) : new z(r.left + x / 2, r.top + C / 2), this.topRightBorderStroke = o > 0 || i > 0 ? KA(r.left + b, r.top + C / 2, s - I / 2, l - C / 2, yA.TOP_RIGHT) : new z(r.left + r.width - I / 2, r.top + C / 2), this.bottomRightBorderStroke = u > 0 || d > 0 ? KA(r.left + v, r.top + m, u - I / 2, d - S / 2, yA.BOTTOM_RIGHT) : new z(r.left + r.width - I / 2, r.top + r.height - S / 2), this.bottomLeftBorderStroke = p > 0 || B > 0 ? KA(r.left + x / 2, r.top + U, p - x / 2, B - S / 2, yA.BOTTOM_LEFT) : new z(r.left + x / 2, r.top + r.height - S / 2), this.topLeftBorderBox = o > 0 || i > 0 ? KA(r.left, r.top, o, i, yA.TOP_LEFT) : new z(r.left, r.top), this.topRightBorderBox = s > 0 || l > 0 ? KA(r.left + b, r.top, s, l, yA.TOP_RIGHT) : new z(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || d > 0 ? KA(r.left + v, r.top + m, u, d, yA.BOTTOM_RIGHT) : new z(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = p > 0 || B > 0 ? KA(r.left, r.top + U, p, B, yA.BOTTOM_LEFT) : new z(r.left, r.top + r.height), this.topLeftPaddingBox = o > 0 || i > 0 ? KA(r.left + x, r.top + C, Math.max(0, o - x), Math.max(0, i - C), yA.TOP_LEFT) : new z(r.left + x, r.top + C), this.topRightPaddingBox = s > 0 || l > 0 ? KA(r.left + Math.min(b, r.width - I), r.top + C, b > r.width + I ? 0 : Math.max(0, s - I), Math.max(0, l - C), yA.TOP_RIGHT) : new z(r.left + r.width - I, r.top + C), this.bottomRightPaddingBox = u > 0 || d > 0 ? KA(r.left + Math.min(v, r.width - x), r.top + Math.min(m, r.height - S), Math.max(0, u - I), Math.max(0, d - S), yA.BOTTOM_RIGHT) : new z(r.left + r.width - I, r.top + r.height - S), this.bottomLeftPaddingBox = p > 0 || B > 0 ? KA(r.left + x, r.top + Math.min(U, r.height - S), Math.max(0, p - x), Math.max(0, B - S), yA.BOTTOM_LEFT) : new z(r.left + x, r.top + r.height - S), this.topLeftContentBox = o > 0 || i > 0 ? KA(r.left + x + k, r.top + C + f, Math.max(0, o - (x + k)), Math.max(0, i - (C + f)), yA.TOP_LEFT) : new z(r.left + x + k, r.top + C + f), this.topRightContentBox = s > 0 || l > 0 ? KA(r.left + Math.min(b, r.width + x + k), r.top + C + f, b > r.width + x + k ? 0 : s - x + k, l - (C + f), yA.TOP_RIGHT) : new z(r.left + r.width - (I + H), r.top + C + f), this.bottomRightContentBox = u > 0 || d > 0 ? KA(r.left + Math.min(v, r.width - (x + k)), r.top + Math.min(m, r.height + C + f), Math.max(0, u - (I + H)), d - (S + K), yA.BOTTOM_RIGHT) : new z(r.left + r.width - (I + H), r.top + r.height - (S + K)), this.bottomLeftContentBox = p > 0 || B > 0 ? KA(r.left + x + k, r.top + U, Math.max(0, p - (x + k)), B - (S + K), yA.BOTTOM_LEFT) : new z(r.left + x + k, r.top + r.height - (S + K));
    }
    return A;
  })(), yA;
  (function(A) {
    A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
  })(yA || (yA = {}));
  var KA = function(A, e, t, r, n) {
    var o = 4 * ((Math.sqrt(2) - 1) / 3), i = t * o, a = r * o, s = A + t, l = e + r;
    switch (n) {
      case yA.TOP_LEFT:
        return new ao(new z(A, l), new z(A, l - a), new z(s - i, e), new z(s, e));
      case yA.TOP_RIGHT:
        return new ao(new z(A, e), new z(A + i, e), new z(s, l - a), new z(s, l));
      case yA.BOTTOM_RIGHT:
        return new ao(new z(s, e), new z(s, e + a), new z(A + i, l), new z(A, l));
      case yA.BOTTOM_LEFT:
      default:
        return new ao(new z(s, l), new z(s - i, l), new z(A, e + a), new z(A, e));
    }
  }, Mo = function(A) {
    return [
      A.topLeftBorderBox,
      A.topRightBorderBox,
      A.bottomRightBorderBox,
      A.bottomLeftBorderBox
    ];
  }, VF = function(A) {
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
  }, $F = /* @__PURE__ */ (function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  })(), so = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  })(), WF = /* @__PURE__ */ (function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  })(), XF = function(A) {
    return A.type === 0;
  }, Lf = function(A) {
    return A.type === 1;
  }, JF = function(A) {
    return A.type === 2;
  }, iu = function(A, e) {
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
  }, kf = /* @__PURE__ */ (function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  })(), Of = (function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new GF(this.container), this.container.styles.opacity < 1 && this.effects.push(new WF(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, n = this.container.bounds.top + this.container.styles.transformOrigin[1].number, o = this.container.styles.transform;
        this.effects.push(new $F(r, n, o));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = Mo(this.curves), a = Po(this.curves);
        iu(i, a) ? this.effects.push(new so(i, 6)) : (this.effects.push(new so(i, 2)), this.effects.push(new so(a, 4)));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
      ].indexOf(this.container.styles.position) === -1, r = this.parent, n = this.effects.slice(0); r; ) {
        var o = r.effects.filter(function(s) {
          return !Lf(s);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (n.unshift.apply(n, o), t = [
            2,
            3
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = Mo(r.curves), a = Po(r.curves);
            iu(i, a) || n.unshift(new so(a, 6));
          }
        } else n.unshift.apply(n, o);
        r = r.parent;
      }
      return n.filter(function(s) {
        return qA(s.target, e);
      });
    }, A;
  })(), ss = function(A, e, t, r) {
    A.container.elements.forEach(function(n) {
      var o = qA(n.flags, 4), i = qA(n.flags, 2), a = new Of(n, A);
      qA(n.styles.display, 2048) && r.push(a);
      var s = qA(n.flags, 8) ? [] : r;
      if (o || i) {
        var l = o || n.styles.isPositioned() ? t : e, c = new kf(a);
        if (n.styles.isPositioned() || n.styles.opacity < 1 || n.styles.isTransformed()) {
          var u = n.styles.zIndex.order;
          if (u < 0) {
            var d = 0;
            l.negativeZIndex.some(function(p, B) {
              return u > p.element.container.styles.zIndex.order ? (d = B, false) : d > 0;
            }), l.negativeZIndex.splice(d, 0, c);
          } else if (u > 0) {
            var g = 0;
            l.positiveZIndex.some(function(p, B) {
              return u >= p.element.container.styles.zIndex.order ? (g = B + 1, false) : g > 0;
            }), l.positiveZIndex.splice(g, 0, c);
          } else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(c);
        } else n.styles.isFloating() ? l.nonPositionedFloats.push(c) : l.nonPositionedInlineLevel.push(c);
        ss(a, c, o ? c : t, s);
      } else n.styles.isInlineLevel() ? e.inlineLevel.push(a) : e.nonInlineLevel.push(a), ss(a, e, t, s);
      qA(n.flags, 8) && Kf(n, s);
    });
  }, Kf = function(A, e) {
    for (var t = A instanceof rs ? A.start : 1, r = A instanceof rs ? A.reversed : false, n = 0; n < e.length; n++) {
      var o = e[n];
      o.container instanceof mf && typeof o.container.value == "number" && o.container.value !== 0 && (t = o.container.value), o.listValue = Bn(t, o.container.styles.listStyleType, true), t += r ? -1 : 1;
    }
  }, zF = function(A) {
    var e = new Of(A, null), t = new kf(e), r = [];
    return ss(e, t, t, r), Kf(e.container, r), t;
  }, au = function(A, e) {
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
  }, jF = function(A, e) {
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
  }, ZF = function(A, e) {
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
  }, qF = function(A, e) {
    switch (e) {
      case 0:
        return lo(A.topLeftBorderStroke, A.topRightBorderStroke);
      case 1:
        return lo(A.topRightBorderStroke, A.bottomRightBorderStroke);
      case 2:
        return lo(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
      default:
        return lo(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
    }
  }, lo = function(A, e) {
    var t = [];
    return Le(A) ? t.push(A.subdivide(0.5, false)) : t.push(A), Le(e) ? t.push(e.subdivide(0.5, true)) : t.push(e), t;
  }, Oe = function(A, e, t, r) {
    var n = [];
    return Le(A) ? n.push(A.subdivide(0.5, false)) : n.push(A), Le(t) ? n.push(t.subdivide(0.5, true)) : n.push(t), Le(r) ? n.push(r.subdivide(0.5, true).reverse()) : n.push(r), Le(e) ? n.push(e.subdivide(0.5, false).reverse()) : n.push(e), n;
  }, Rf = function(A) {
    var e = A.bounds, t = A.styles;
    return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
  }, _o = function(A) {
    var e = A.styles, t = A.bounds, r = xA(e.paddingLeft, t.width), n = xA(e.paddingRight, t.width), o = xA(e.paddingTop, t.width), i = xA(e.paddingBottom, t.width);
    return t.add(r + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + n), -(e.borderTopWidth + e.borderBottomWidth + o + i));
  }, AU = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? _o(e) : Rf(e);
  }, eU = function(A, e) {
    return A === 0 ? e.bounds : A === 2 ? _o(e) : Rf(e);
  }, pa = function(A, e, t) {
    var r = AU(pr(A.styles.backgroundOrigin, e), A), n = eU(pr(A.styles.backgroundClip, e), A), o = tU(pr(A.styles.backgroundSize, e), t, r), i = o[0], a = o[1], s = zr(pr(A.styles.backgroundPosition, e), r.width - i, r.height - a), l = rU(pr(A.styles.backgroundRepeat, e), s, o, r, n), c = Math.round(r.left + s[0]), u = Math.round(r.top + s[1]);
    return [
      l,
      c,
      u,
      i,
      a
    ];
  }, dr = function(A) {
    return FA(A) && A.value === vr.AUTO;
  }, co = function(A) {
    return typeof A == "number";
  }, tU = function(A, e, t) {
    var r = e[0], n = e[1], o = e[2], i = A[0], a = A[1];
    if (!i) return [
      0,
      0
    ];
    if (zA(i) && a && zA(a)) return [
      xA(i, t.width),
      xA(a, t.height)
    ];
    var s = co(o);
    if (FA(i) && (i.value === vr.CONTAIN || i.value === vr.COVER)) {
      if (co(o)) {
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
    var c = co(r), u = co(n), d = c || u;
    if (dr(i) && (!a || dr(a))) {
      if (c && u) return [
        r,
        n
      ];
      if (!s && !d) return [
        t.width,
        t.height
      ];
      if (d && s) {
        var g = c ? r : n * o, p = u ? n : r / o;
        return [
          g,
          p
        ];
      }
      var B = c ? r : t.width, y = u ? n : t.height;
      return [
        B,
        y
      ];
    }
    if (s) {
      var h = 0, b = 0;
      return zA(i) ? h = xA(i, t.width) : zA(a) && (b = xA(a, t.height)), dr(i) ? h = b * o : (!a || dr(a)) && (b = h / o), [
        h,
        b
      ];
    }
    var m = null, v = null;
    if (zA(i) ? m = xA(i, t.width) : a && zA(a) && (v = xA(a, t.height)), m !== null && (!a || dr(a)) && (v = c && u ? m / r * n : t.height), v !== null && dr(i) && (m = c && u ? v / n * r : t.width), m !== null && v !== null) return [
      m,
      v
    ];
    throw new Error("Unable to calculate background-size for element");
  }, pr = function(A, e) {
    var t = A[e];
    return typeof t > "u" ? A[0] : t;
  }, rU = function(A, e, t, r, n) {
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
  }, nU = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", su = "Hidden Text", oU = (function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), n = this._document.createElement("img"), o = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), n.src = nU, n.width = 1, n.height = 1, n.style.margin = "0", n.style.padding = "0", n.style.verticalAlign = "baseline", o.style.fontFamily = e, o.style.fontSize = t, o.style.margin = "0", o.style.padding = "0", o.appendChild(this._document.createTextNode(su)), r.appendChild(o), r.appendChild(n);
      var a = n.offsetTop - o.offsetTop + 2;
      r.removeChild(o), r.appendChild(this._document.createTextNode(su)), r.style.lineHeight = "normal", n.style.verticalAlign = "super";
      var s = n.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), {
        baseline: a,
        middle: s
      };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  })(), Df = /* @__PURE__ */ (function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  })(), iU = 1e4, aU = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n._activeEffects = [], n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), r.canvas || (n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px"), n.fontMetrics = new oU(document), n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.ctx.textBaseline = "bottom", n._activeEffects = [], n.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), n;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; ) this.popEffect();
      t.forEach(function(n) {
        return r.applyEffect(n);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), JF(t) && (this.ctx.globalAlpha = t.opacity), XF(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Lf(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return me(this, void 0, void 0, function() {
        var r;
        return ge(this, function(n) {
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
      return me(this, void 0, void 0, function() {
        return ge(this, function(r) {
          switch (r.label) {
            case 0:
              if (qA(t.container.flags, 16)) debugger;
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
        var i = Al(t.text);
        i.reduce(function(a, s) {
          return o.ctx.fillText(s, a, t.bounds.top + n), a + o.ctx.measureText(s).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), n = dU(t.fontFamily).join(", "), o = xn(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
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
      return me(this, void 0, void 0, function() {
        var n, o, i, a, s, l, c, u, d = this;
        return ge(this, function(g) {
          return n = this.createFontStyle(r), o = n[0], i = n[1], a = n[2], this.ctx.font = o, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", s = this.fontMetrics.getMetrics(i, a), l = s.baseline, c = s.middle, u = r.paintOrder, t.textBounds.forEach(function(p) {
            u.forEach(function(B) {
              switch (B) {
                case 0:
                  d.ctx.fillStyle = ee(r.color), d.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  var y = r.textShadow;
                  y.length && p.text.trim().length && (y.slice(0).reverse().forEach(function(h) {
                    d.ctx.shadowColor = ee(h.color), d.ctx.shadowOffsetX = h.offsetX.number * d.options.scale, d.ctx.shadowOffsetY = h.offsetY.number * d.options.scale, d.ctx.shadowBlur = h.blur.number, d.renderTextWithLetterSpacing(p, r.letterSpacing, l);
                  }), d.ctx.shadowColor = "", d.ctx.shadowOffsetX = 0, d.ctx.shadowOffsetY = 0, d.ctx.shadowBlur = 0), r.textDecorationLine.length && (d.ctx.fillStyle = ee(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(h) {
                    switch (h) {
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
                  r.webkitTextStrokeWidth && p.text.trim().length && (d.ctx.strokeStyle = ee(r.webkitTextStrokeColor), d.ctx.lineWidth = r.webkitTextStrokeWidth, d.ctx.lineJoin = window.chrome ? "miter" : "round", d.ctx.strokeText(p.text, p.bounds.left, p.bounds.top + l)), d.ctx.strokeStyle = "", d.ctx.lineWidth = 0, d.ctx.lineJoin = "miter";
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
        var o = _o(t), i = Po(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(n, 0, 0, t.intrinsicWidth, t.intrinsicHeight, o.left, o.top, o.width, o.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return me(this, void 0, void 0, function() {
        var r, n, o, i, a, s, b, b, l, c, u, d, v, g, p, U, B, y, h, b, m, v, U;
        return ge(this, function(C) {
          switch (C.label) {
            case 0:
              this.applyEffects(t.getEffects(4)), r = t.container, n = t.curves, o = r.styles, i = 0, a = r.textNodes, C.label = 1;
            case 1:
              return i < a.length ? (s = a[i], [
                4,
                this.renderTextNode(s, o)
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
              if (!(r instanceof Bf)) return [
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
              return b = C.sent(), this.renderReplacedElement(r, n, b), [
                3,
                8
              ];
            case 7:
              return C.sent(), this.context.logger.error("Error loading image " + r.src), [
                3,
                8
              ];
            case 8:
              if (r instanceof hf && this.renderReplacedElement(r, n, r.canvas), !(r instanceof wf)) return [
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
              return b = C.sent(), this.renderReplacedElement(r, n, b), [
                3,
                12
              ];
            case 11:
              return C.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [
                3,
                12
              ];
            case 12:
              return r instanceof Qf && r.tree ? (l = new e(this.context, {
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
              c = C.sent(), r.width && r.height && this.ctx.drawImage(c, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), C.label = 14;
            case 14:
              if (r instanceof el && (u = Math.min(r.bounds.width, r.bounds.height), r.type === Oo ? r.checked && (this.ctx.save(), this.path([
                new z(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new z(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new z(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new z(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new z(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new z(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new z(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = ee(Yc), this.ctx.fill(), this.ctx.restore()) : r.type === Ko && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, true), this.ctx.fillStyle = ee(Yc), this.ctx.fill(), this.ctx.restore())), sU(r) && r.value.length) {
                switch (d = this.createFontStyle(o), v = d[0], g = d[1], p = this.fontMetrics.getMetrics(v, g).baseline, this.ctx.font = v, this.ctx.fillStyle = ee(o.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = cU(r.styles.textAlign), U = _o(r), B = 0, r.styles.textAlign) {
                  case 1:
                    B += U.width / 2;
                    break;
                  case 2:
                    B += U.width;
                    break;
                }
                y = U.add(B, 0, 0, -U.height / 2 + 1), this.ctx.save(), this.path([
                  new z(U.left, U.top),
                  new z(U.left + U.width, U.top),
                  new z(U.left + U.width, U.top + U.height),
                  new z(U.left, U.top + U.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new on(r.value, y), o.letterSpacing, p), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!qA(r.styles.display, 2048)) return [
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
              b = void 0, m = h.url, C.label = 15;
            case 15:
              return C.trys.push([
                15,
                17,
                ,
                18
              ]), [
                4,
                this.context.cache.match(m)
              ];
            case 16:
              return b = C.sent(), this.ctx.drawImage(b, r.bounds.left - (b.width + 10), r.bounds.top), [
                3,
                18
              ];
            case 17:
              return C.sent(), this.context.logger.error("Error loading list-style-image " + m), [
                3,
                18
              ];
            case 18:
              return [
                3,
                20
              ];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (v = this.createFontStyle(o)[0], this.ctx.font = v, this.ctx.fillStyle = ee(o.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", U = new ht(r.bounds.left, r.bounds.top + xA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Tc(o.lineHeight, o.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new on(t.listValue, U), o.letterSpacing, Tc(o.lineHeight, o.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), C.label = 20;
            case 20:
              return [
                2
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return me(this, void 0, void 0, function() {
        var r, n, h, o, i, h, a, s, h, l, c, h, u, d, h, g, p, h, B, y, h;
        return ge(this, function(b) {
          switch (b.label) {
            case 0:
              if (qA(t.element.container.flags, 16)) debugger;
              return [
                4,
                this.renderNodeBackgroundAndBorders(t.element)
              ];
            case 1:
              b.sent(), r = 0, n = t.negativeZIndex, b.label = 2;
            case 2:
              return r < n.length ? (h = n[r], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                5
              ];
            case 3:
              b.sent(), b.label = 4;
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
              b.sent(), o = 0, i = t.nonInlineLevel, b.label = 7;
            case 7:
              return o < i.length ? (h = i[o], [
                4,
                this.renderNode(h)
              ]) : [
                3,
                10
              ];
            case 8:
              b.sent(), b.label = 9;
            case 9:
              return o++, [
                3,
                7
              ];
            case 10:
              a = 0, s = t.nonPositionedFloats, b.label = 11;
            case 11:
              return a < s.length ? (h = s[a], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                14
              ];
            case 12:
              b.sent(), b.label = 13;
            case 13:
              return a++, [
                3,
                11
              ];
            case 14:
              l = 0, c = t.nonPositionedInlineLevel, b.label = 15;
            case 15:
              return l < c.length ? (h = c[l], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                18
              ];
            case 16:
              b.sent(), b.label = 17;
            case 17:
              return l++, [
                3,
                15
              ];
            case 18:
              u = 0, d = t.inlineLevel, b.label = 19;
            case 19:
              return u < d.length ? (h = d[u], [
                4,
                this.renderNode(h)
              ]) : [
                3,
                22
              ];
            case 20:
              b.sent(), b.label = 21;
            case 21:
              return u++, [
                3,
                19
              ];
            case 22:
              g = 0, p = t.zeroOrAutoZIndexOrTransformedOrOpacity, b.label = 23;
            case 23:
              return g < p.length ? (h = p[g], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                26
              ];
            case 24:
              b.sent(), b.label = 25;
            case 25:
              return g++, [
                3,
                23
              ];
            case 26:
              B = 0, y = t.positiveZIndex, b.label = 27;
            case 27:
              return B < y.length ? (h = y[B], [
                4,
                this.renderStack(h)
              ]) : [
                3,
                30
              ];
            case 28:
              b.sent(), b.label = 29;
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
      return me(this, void 0, void 0, function() {
        var r, n, o, i, a, s;
        return ge(this, function(l) {
          switch (l.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, n = function(c) {
                var u, d, g, f, R, W, k, N, S, p, f, R, W, k, N, B, y, h, b, m, v, U, C, I, S, x, f, H, K, k, N, O, R, W, rA, D, X, q, tA, T, G, _;
                return ge(this, function(Y) {
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
                      return u && (g = pa(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), f = g[0], R = g[1], W = g[2], k = g[3], N = g[4], S = o.ctx.createPattern(o.resizeImage(u, k, N), "repeat"), o.renderRepeat(f, S, R, W)), [
                        3,
                        6
                      ];
                    case 5:
                      XQ(c) ? (p = pa(t, r, [
                        null,
                        null,
                        null
                      ]), f = p[0], R = p[1], W = p[2], k = p[3], N = p[4], B = NQ(c.angle, k, N), y = B[0], h = B[1], b = B[2], m = B[3], v = B[4], U = document.createElement("canvas"), U.width = k, U.height = N, C = U.getContext("2d"), I = C.createLinearGradient(h, m, b, v), xc(c.stops, y).forEach(function(uA) {
                        return I.addColorStop(uA.stop, ee(uA.color));
                      }), C.fillStyle = I, C.fillRect(0, 0, k, N), k > 0 && N > 0 && (S = o.ctx.createPattern(U, "repeat"), o.renderRepeat(f, S, R, W))) : JQ(c) && (x = pa(t, r, [
                        null,
                        null,
                        null
                      ]), f = x[0], H = x[1], K = x[2], k = x[3], N = x[4], O = c.position.length === 0 ? [
                        js
                      ] : c.position, R = xA(O[0], k), W = xA(O[O.length - 1], N), rA = GQ(c, R, W, k, N), D = rA[0], X = rA[1], D > 0 && X > 0 && (q = o.ctx.createRadialGradient(H + R, K + W, 0, H + R, K + W, D), xc(c.stops, D * 2).forEach(function(uA) {
                        return q.addColorStop(uA.stop, ee(uA.color));
                      }), o.path(f), o.ctx.fillStyle = q, D !== X ? (tA = t.bounds.left + 0.5 * t.bounds.width, T = t.bounds.top + 0.5 * t.bounds.height, G = X / D, _ = 1 / G, o.ctx.save(), o.ctx.translate(tA, T), o.ctx.transform(1, 0, 0, G, 0, 0), o.ctx.translate(-tA, -T), o.ctx.fillRect(H, _ * (K - T) + T, k, N * _), o.ctx.restore()) : o.ctx.fill())), Y.label = 6;
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
      return me(this, void 0, void 0, function() {
        return ge(this, function(o) {
          return this.path(au(n, r)), this.ctx.fillStyle = ee(t), this.ctx.fill(), [
            2
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, n, o) {
      return me(this, void 0, void 0, function() {
        var i, a;
        return ge(this, function(s) {
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
              return i = jF(o, n), this.path(i), this.ctx.fillStyle = ee(t), this.ctx.fill(), a = ZF(o, n), this.path(a), this.ctx.fill(), [
                2
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return me(this, void 0, void 0, function() {
        var r, n, o, i, a, s, l, c, u = this;
        return ge(this, function(d) {
          switch (d.label) {
            case 0:
              return this.applyEffects(t.getEffects(2)), r = t.container.styles, n = !Ht(r.backgroundColor) || r.backgroundImage.length, o = [
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
              ], i = lU(pr(r.backgroundClip, 0), t.curves), n || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), Ht(r.backgroundColor) || (this.ctx.fillStyle = ee(r.backgroundColor), this.ctx.fill()), [
                4,
                this.renderBackgroundImage(t.container)
              ]) : [
                3,
                2
              ];
            case 1:
              d.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(g) {
                u.ctx.save();
                var p = Mo(t.curves), B = g.inset ? 0 : iU, y = YF(p, -B + (g.inset ? 1 : -1) * g.spread.number, (g.inset ? 1 : -1) * g.spread.number, g.spread.number * (g.inset ? -2 : 2), g.spread.number * (g.inset ? -2 : 2));
                g.inset ? (u.path(p), u.ctx.clip(), u.mask(y)) : (u.mask(p), u.ctx.clip(), u.path(y)), u.ctx.shadowOffsetX = g.offsetX.number + B, u.ctx.shadowOffsetY = g.offsetY.number, u.ctx.shadowColor = ee(g.color), u.ctx.shadowBlur = g.blur.number, u.ctx.fillStyle = g.inset ? ee(g.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
              }), d.label = 2;
            case 2:
              a = 0, s = 0, l = o, d.label = 3;
            case 3:
              return s < l.length ? (c = l[s], c.style !== 0 && !Ht(c.color) && c.width > 0 ? c.style !== 2 ? [
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
      return me(this, void 0, void 0, function() {
        var a, s, l, c, u, d, g, p, B, y, h, b, m, v, U, C, U, C;
        return ge(this, function(I) {
          return this.ctx.save(), a = qF(o, n), s = au(o, n), i === 2 && (this.path(s), this.ctx.clip()), Le(s[0]) ? (l = s[0].start.x, c = s[0].start.y) : (l = s[0].x, c = s[0].y), Le(s[1]) ? (u = s[1].end.x, d = s[1].end.y) : (u = s[1].x, d = s[1].y), n === 0 || n === 2 ? g = Math.abs(l - u) : g = Math.abs(c - d), this.ctx.beginPath(), i === 3 ? this.formatPath(a) : this.formatPath(s.slice(0, 2)), p = r < 3 ? r * 3 : r * 2, B = r < 3 ? r * 2 : r, i === 3 && (p = r, B = r), y = true, g <= p * 2 ? y = false : g <= p * 2 + B ? (h = g / (2 * p + B), p *= h, B *= h) : (b = Math.floor((g + B) / (p + B)), m = (g - b * p) / (b - 1), v = (g - (b + 1) * p) / b, B = v <= 0 || Math.abs(B - m) < Math.abs(B - v) ? m : v), y && (i === 3 ? this.ctx.setLineDash([
            0,
            p + B
          ]) : this.ctx.setLineDash([
            p,
            B
          ])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = ee(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (Le(s[0]) && (U = s[3], C = s[0], this.ctx.beginPath(), this.formatPath([
            new z(U.end.x, U.end.y),
            new z(C.start.x, C.start.y)
          ]), this.ctx.stroke()), Le(s[1]) && (U = s[1], C = s[2], this.ctx.beginPath(), this.formatPath([
            new z(U.end.x, U.end.y),
            new z(C.start.x, C.start.y)
          ]), this.ctx.stroke())), this.ctx.restore(), [
            2
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return me(this, void 0, void 0, function() {
        var r;
        return ge(this, function(n) {
          switch (n.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = ee(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = zF(t), [
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
  })(Df), sU = function(A) {
    return A instanceof vf || A instanceof Cf ? true : A instanceof el && A.type !== Ko && A.type !== Oo;
  }, lU = function(A, e) {
    switch (A) {
      case 0:
        return Mo(e);
      case 2:
        return VF(e);
      default:
        return Po(e);
    }
  }, cU = function(A) {
    switch (A) {
      case 1:
        return "center";
      case 2:
        return "right";
      default:
        return "left";
    }
  }, uU = [
    "-apple-system",
    "system-ui"
  ], dU = function(A) {
    return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
      return uU.indexOf(e) === -1;
    }) : A;
  }, fU = (function(A) {
    Ge(e, A);
    function e(t, r) {
      var n = A.call(this, t, r) || this;
      return n.canvas = r.canvas ? r.canvas : document.createElement("canvas"), n.ctx = n.canvas.getContext("2d"), n.options = r, n.canvas.width = Math.floor(r.width * r.scale), n.canvas.height = Math.floor(r.height * r.scale), n.canvas.style.width = r.width + "px", n.canvas.style.height = r.height + "px", n.ctx.scale(n.options.scale, n.options.scale), n.ctx.translate(-r.x, -r.y), n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), n;
    }
    return e.prototype.render = function(t) {
      return me(this, void 0, void 0, function() {
        var r, n;
        return ge(this, function(o) {
          switch (o.label) {
            case 0:
              return r = ts(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [
                4,
                gU(r)
              ];
            case 1:
              return n = o.sent(), this.options.backgroundColor && (this.ctx.fillStyle = ee(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(n, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [
                2,
                this.canvas
              ];
          }
        });
      });
    }, e;
  })(Df), gU = function(A) {
    return new Promise(function(e, t) {
      var r = new Image();
      r.onload = function() {
        e(r);
      }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
    });
  }, pU = (function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Nn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Nn([
        this.id,
        this.getTime() + "ms"
      ], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Nn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Nn([
        this.id,
        this.getTime() + "ms"
      ], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  })(), BU = (function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new pU({
        id: this.instanceName,
        enabled: e.logging
      }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new KF(this, e);
    }
    return A.instanceCount = 1, A;
  })(), hU = function(A, e) {
    return e === void 0 && (e = {}), wU(A, e);
  };
  typeof window < "u" && Tf.setContext(window);
  var wU = function(A, e) {
    return me(void 0, void 0, void 0, function() {
      var t, r, n, o, i, a, s, l, c, u, d, g, p, B, y, h, b, m, v, U, I, C, I, S, x, f, H, K, k, N, O, R, W, rA, D, X, q, tA, T, G;
      return ge(this, function(_) {
        switch (_.label) {
          case 0:
            if (!A || typeof A != "object") return [
              2,
              Promise.reject("Invalid element provided as first argument")
            ];
            if (t = A.ownerDocument, !t) throw new Error("Element is not attached to a Document");
            if (r = t.defaultView, !r) throw new Error("Document is not attached to a Window");
            return n = {
              allowTaint: (S = e.allowTaint) !== null && S !== void 0 ? S : false,
              imageTimeout: (x = e.imageTimeout) !== null && x !== void 0 ? x : 15e3,
              proxy: e.proxy,
              useCORS: (f = e.useCORS) !== null && f !== void 0 ? f : false
            }, o = _a({
              logging: (H = e.logging) !== null && H !== void 0 ? H : true,
              cache: e.cache
            }, n), i = {
              windowWidth: (K = e.windowWidth) !== null && K !== void 0 ? K : r.innerWidth,
              windowHeight: (k = e.windowHeight) !== null && k !== void 0 ? k : r.innerHeight,
              scrollX: (N = e.scrollX) !== null && N !== void 0 ? N : r.pageXOffset,
              scrollY: (O = e.scrollY) !== null && O !== void 0 ? O : r.pageYOffset
            }, a = new ht(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), s = new BU(o, a), l = (R = e.foreignObjectRendering) !== null && R !== void 0 ? R : false, c = {
              allowTaint: (W = e.allowTaint) !== null && W !== void 0 ? W : false,
              onclone: e.onclone,
              ignoreElements: e.ignoreElements,
              inlineImages: l,
              copyStyles: l
            }, s.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), u = new nu(s, A, c), d = u.clonedReferenceElement, d ? [
              4,
              u.toIFrame(t, a)
            ] : [
              2,
              Promise.reject("Unable to find element in cloned iframe")
            ];
          case 1:
            return g = _.sent(), p = tl(d) || mF(d) ? YC(d.ownerDocument) : Ei(s, d), B = p.width, y = p.height, h = p.left, b = p.top, m = mU(s, d, e.backgroundColor), v = {
              canvas: e.canvas,
              backgroundColor: m,
              scale: (D = (rA = e.scale) !== null && rA !== void 0 ? rA : r.devicePixelRatio) !== null && D !== void 0 ? D : 1,
              x: ((X = e.x) !== null && X !== void 0 ? X : 0) + h,
              y: ((q = e.y) !== null && q !== void 0 ? q : 0) + b,
              width: (tA = e.width) !== null && tA !== void 0 ? tA : Math.ceil(B),
              height: (T = e.height) !== null && T !== void 0 ? T : Math.ceil(y)
            }, l ? (s.logger.debug("Document cloned, using foreign object rendering"), I = new fU(s, v), [
              4,
              I.render(d)
            ]) : [
              3,
              3
            ];
          case 2:
            return U = _.sent(), [
              3,
              5
            ];
          case 3:
            return s.logger.debug("Document cloned, element located at " + h + "," + b + " with size " + B + "x" + y + " using computed rendering"), s.logger.debug("Starting DOM parsing"), C = bf(s, d), m === C.styles.backgroundColor && (C.styles.backgroundColor = ut.TRANSPARENT), s.logger.debug("Starting renderer for element at " + v.x + "," + v.y + " with size " + v.width + "x" + v.height), I = new aU(s, v), [
              4,
              I.render(C)
            ];
          case 4:
            U = _.sent(), _.label = 5;
          case 5:
            return (!((G = e.removeContainer) !== null && G !== void 0) || G) && (nu.destroy(g) || s.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), s.logger.debug("Finished rendering"), [
              2,
              U
            ];
        }
      });
    });
  }, mU = function(A, e, t) {
    var r = e.ownerDocument, n = r.documentElement ? rn(A, getComputedStyle(r.documentElement).backgroundColor) : ut.TRANSPARENT, o = r.body ? rn(A, getComputedStyle(r.body).backgroundColor) : ut.TRANSPARENT, i = typeof t == "string" ? rn(A, t) : t === null ? ut.TRANSPARENT : 4294967295;
    return e === r.documentElement ? Ht(n) ? Ht(o) ? i : o : n : i;
  }, Ba = {
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
  }, te = function() {
    return te = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, te.apply(this, arguments);
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
  }, vU = function(A, e) {
    var t = te({}, CU);
    if (A) for (var r in Ba) Object.prototype.hasOwnProperty.call(Ba, r) && (t[r] = te(te({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), Ba[r]));
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = te(te({}, Object.prototype.hasOwnProperty.call(t, r) ? t[r] : {}), e[r]));
    return t;
  }, lu = function(A, e) {
    return A ? te(te({}, e.rbgcpControlBtn), e.rbgcpControlBtnSelected) : te({}, e.rbgcpControlBtn);
  }, sn = function(A, e) {
    return A ? te(te({}, e.rbgcpControlIconBtn), e.rbgcpControlBtnSelected) : te({}, e.rbgcpControlIconBtn);
  }, uo = function(A, e) {
    return A ? te(te(te({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn), e.rbgcpControlBtnSelected) : te(te({}, e.rbgcpControlBtn), e.rbgcpColorModelDropdownBtn);
  }, Ye = function() {
    return Ye = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Ye.apply(this, arguments);
  }, QU = function(A) {
    var e = A.color, t = UA().defaultStyles, r = e ?? "";
    return E.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      style: {
        width: 16
      }
    }, E.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Ye(Ye({
        fill: "none",
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon), r && {
        stroke: r
      }),
      d: "M15.6,7h0L7.78,14.86c-.37.37-1.61.38-2,.75s-.5,1.53-.76,2a3.53,3.53,0,0,1-.52.52,1.6,1.6,0,0,1-2.27-.06l-.32-.32a1.61,1.61,0,0,1-.06-2.27A3.25,3.25,0,0,1,2.4,15c.47-.26,1.65-.35,2-.73s.34-1.64.71-2c1.68-1.73,5.61-5.65,7.91-7.93h0l1.14,1.38L15.6,7Z"
    }), E.createElement("polygon", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Ye(Ye({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      points: "15.7 8.87 11.13 4.29 12.69 2.73 17.25 7.31 15.7 8.87"
    }), E.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: Ye(Ye({
        strokeWidth: "1.4px"
      }, t.rbgcpControlIcon2), r && {
        stroke: r,
        fill: r
      }),
      d: "M18.18,3.71,16.36,5.53a1.33,1.33,0,0,1-1.88,0h0a1.34,1.34,0,0,1,0-1.89l1.81-1.82a1.34,1.34,0,0,1,1.89,0h0A1.34,1.34,0,0,1,18.18,3.71Z"
    }));
  }, yU = function(A) {
    var e = A.onSelect, t = UA().defaultStyles, r = BA(null), n = r[0], o = r[1], i = BA(false), a = i[0], s = i[1], l = BA(false), c = l[0], u = l[1], d = function() {
      var B = document.getElementById("root");
      s(true), hU(B).then(function(y) {
        var h = document.createElement("canvas"), b = h.getContext("2d", {
          willReadFrequently: true
        });
        B && b && (h.width = B.offsetWidth * 2, h.height = B.offsetHeight * 2, b.drawImage(y, 0, 0)), o(b);
      });
    }, g = function(B) {
      if (B.stopPropagation(), n) {
        var y = B.pageX, h = B.pageY, b = y * 2, m = h * 2, v = n.getImageData(b, m, 1, 1).data;
        e("rgba(".concat(v[0], ", ").concat(v[1], ", ").concat(v[2], ", 1)"));
      }
      u(false), s(false);
    }, p = function() {
      if (u(true), !window.EyeDropper) d();
      else {
        var B = new window.EyeDropper(), y = new window.AbortController();
        B.open({
          signal: y.signal
        }).then(function(h) {
          var b = se(h.sRGBHex), m = b.toRgb(), v = m.r, U = m.g, C = m.b;
          e("rgba(".concat(v, ", ").concat(U, ", ").concat(C, ", 1)")), u(false);
        }).catch(function(h) {
          console.log(h), u(false);
        });
      }
    };
    return E.createElement("div", null, E.createElement("div", {
      onClick: p,
      id: "rbgcp-eyedropper-btn",
      style: Ye(Ye({}, t.rbgcpEyedropperBtn), sn(a, t))
    }, E.createElement(QU, {
      color: c ? "rgb(86, 140, 245)" : ""
    })), a && E.createElement(JC, null, E.createElement("div", {
      onClick: function(B) {
        return g(B);
      },
      style: t.rbgcpEyedropperCover
    })));
  }, ls = function() {
    return ls = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ls.apply(this, arguments);
  }, ha = function(A) {
    var e = A.value, t = A.reffy, r = A.label, n = A.config, o = A.callback, i = A.squareWidth, a = A.openAdvanced, s = A.defaultStyles, l = A.pickerIdSuffix, c = n.barSize, u = BA(false), d = u[0], g = u[1], p = BA(2), B = p[0], y = p[1], h = e * (i - 18);
    gA(function() {
      var C;
      y(((C = t == null ? void 0 : t.current) === null || C === void 0 ? void 0 : C.offsetTop) - 2);
    }, [
      a,
      t
    ]);
    var b = function() {
      g(false);
    }, m = function(C) {
      d && o(Fr(C, c));
    }, v = function(C) {
      d || o(Fr(C, c));
    }, U = function() {
      g(true);
    };
    return gA(function() {
      var C = function() {
        b();
      };
      return window.addEventListener("mouseup", C), function() {
        window.removeEventListener("mouseup", C);
      };
    }, []), E.createElement("div", {
      style: {
        width: "100%",
        padding: "3px 0px 3px 0px"
      }
    }, E.createElement("div", {
      onMouseMove: function(C) {
        return m(C);
      },
      style: {
        cursor: "resize",
        position: "relative"
      },
      id: "rbgcp-advanced-bar-".concat(r, "-wrapper").concat(l)
    }, E.createElement("div", {
      style: ls({
        left: h,
        top: B
      }, s.rbgcpHandle),
      id: "rbgcp-advanced-bar-".concat(r, "-handle").concat(l),
      onMouseDown: U,
      role: "button",
      tabIndex: 0
    }), E.createElement("div", {
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
      onMouseMove: function(C) {
        return m(C);
      },
      onClick: function(C) {
        return v(C);
      },
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, r), E.createElement("canvas", {
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
      id: "rbgcp-advanced-bar-".concat(r, "-canvas").concat(l)
    })));
  }, bU = function(A) {
    var e = A.openAdvanced, t = UA(), r = t.config, n = t.tinyColor, o = t.handleChange, i = t.squareWidth, a = t.hc, s = t.defaultStyles, l = t.pickerIdSuffix, c = n.toHsl(), u = c.s, d = c.l, g = oA(null), p = oA(null), B = oA(null);
    eC(g, a == null ? void 0 : a.h, d * 100, i), tC(p, a == null ? void 0 : a.h, u * 100, i), rC(B, a == null ? void 0 : a.h, u * 100, i);
    var y = function(m) {
      var v = se({
        h: a == null ? void 0 : a.h,
        s: m / 100,
        l: d
      }).toRgb(), U = v.r, C = v.g, I = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(I, ",").concat(a == null ? void 0 : a.a, ")"));
    }, h = function(m) {
      var v = se({
        h: a == null ? void 0 : a.h,
        s: u,
        l: m / 100
      }).toRgb(), U = v.r, C = v.g, I = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(I, ",").concat(a == null ? void 0 : a.a, ")"));
    }, b = function(m) {
      var v = se({
        h: a == null ? void 0 : a.h,
        s: (a == null ? void 0 : a.s) * 100,
        v: m
      }).toRgb(), U = v.r, C = v.g, I = v.b;
      o("rgba(".concat(U, ",").concat(C, ",").concat(I, ",").concat(a == null ? void 0 : a.a, ")"));
    };
    return E.createElement("div", {
      style: {
        width: "100%",
        height: e ? 98 : 0,
        transition: "all 120ms linear"
      },
      id: "rbgcp-advanced-controls-wrapper".concat(l)
    }, E.createElement("div", {
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
    }, E.createElement(ha, {
      value: u,
      reffy: g,
      config: r,
      label: "Saturation",
      callback: y,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), E.createElement(ha, {
      value: d,
      config: r,
      reffy: p,
      label: "Lightness",
      callback: h,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    }), E.createElement(ha, {
      value: a == null ? void 0 : a.v,
      config: r,
      reffy: B,
      label: "Brightness",
      callback: b,
      squareWidth: i,
      openAdvanced: e,
      defaultStyles: s,
      pickerIdSuffix: l
    })));
  }, Vt = function() {
    return Vt = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, Vt.apply(this, arguments);
  }, FU = function(A) {
    var e = A.openComparibles, t = UA(), r = t.tinyColor, n = t.handleChange, o = t.defaultStyles, i = t.pickerIdSuffix, a = r.analogous(), s = r.monochromatic(), l = r.triad(), c = r.tetrad(), u = function(d) {
      var g = d.toRgb(), p = g.r, B = g.g, y = g.b, h = g.a;
      n("rgba(".concat(p, ",").concat(B, ",").concat(y, ",").concat(h, ")"));
    };
    return E.createElement("div", {
      style: {
        width: "100%",
        transition: "all 120ms linear",
        height: e ? 216 : 0
      },
      id: "rbgcp-comparible-colors-wrapper".concat(i)
    }, E.createElement("div", {
      style: {
        paddingTop: 11,
        display: e ? "" : "none",
        position: "relative"
      },
      id: "rbgcp-comparible-colors-inner".concat(i)
    }, E.createElement("div", {
      style: Vt({
        textAlign: "center",
        fontSize: 13,
        fontWeight: 600,
        position: "absolute",
        top: 6.5,
        left: 2
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-color-guide-label".concat(i)
    }, "Color Guide"), E.createElement("div", {
      style: Vt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-analogous-colors-label".concat(i)
    }, "Analogous"), E.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex"
      },
      id: "rbgcp-comparible-analogous-colors".concat(i)
    }, a == null ? void 0 : a.map(function(d, g) {
      return E.createElement("div", {
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
    })), E.createElement("div", {
      style: Vt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-monochromatic-colors-label".concat(i)
    }, "Monochromatic"), E.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-monochromatic-colors".concat(i)
    }, s == null ? void 0 : s.map(function(d, g) {
      return E.createElement("div", {
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
    })), E.createElement("div", {
      style: Vt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-triad-colors-label".concat(i)
    }, "Triad"), E.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-triad-colors".concat(i)
    }, l == null ? void 0 : l.map(function(d, g) {
      return E.createElement("div", {
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
    })), E.createElement("div", {
      style: Vt({
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginTop: 3
      }, o.rbgcpComparibleLabel),
      id: "rbgcp-comparible-tetrad-colors-label".concat(i)
    }, "Tetrad"), E.createElement("div", {
      style: {
        borderRadius: 5,
        overflow: "hidden",
        display: "flex",
        justifyContent: "flex-end"
      },
      id: "rbgcp-comparible-tetrad-colors".concat(i)
    }, c == null ? void 0 : c.map(function(d, g) {
      return E.createElement("div", {
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
  }, TA = function() {
    return TA = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, TA.apply(this, arguments);
  }, UU = function() {
    var A = UA(), e = A.gradientType, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = e === "linear-gradient", a = e === "radial-gradient", s = function() {
      var c = r.split(/,(.+)/)[1];
      t("linear-gradient(90deg, ".concat(c));
    }, l = function() {
      var c = r.split(/,(.+)/)[1];
      t("radial-gradient(circle, ".concat(c));
    };
    return E.createElement("div", {
      style: n.rbgcpControlBtnWrapper
    }, E.createElement("div", {
      onClick: s,
      id: "rbgcp-linear-btn".concat(o),
      style: TA(TA({}, n.rbgcpControlBtn), i && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, E.createElement(PC, {
      color: i ? "#568CF5" : ""
    })), E.createElement("div", {
      onClick: l,
      id: "rbgcp-radial-btn".concat(o),
      style: TA(TA({}, n.rbgcpControlBtn), a && n.rbgcpControlBtnSelected),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, E.createElement(_C, {
      color: a ? "#568CF5" : ""
    })));
  }, EU = function() {
    var A = UA(), e = A.currentLeft, t = A.currentColor, r = A.defaultStyles, n = A.handleGradient, o = A.pickerIdSuffix, i = function(a) {
      n(t, br(parseInt(a), 0, 100));
    };
    return E.createElement("div", {
      style: TA(TA(TA(TA({}, r.rbgcpControlBtnWrapper), r.rbgcpControlInputWrap), r.rbgcpStopInputWrap), {
        paddingLeft: 8
      }),
      id: "rbgcp-stop-input-wrapper".concat(o)
    }, E.createElement(WC, null), E.createElement("input", {
      value: e,
      id: "rbgcp-stop-input".concat(o),
      onChange: function(a) {
        return i(a.target.value);
      },
      style: TA(TA({}, r.rbgcpControlInput), r.rbgcpStopInput)
    }));
  }, IU = function() {
    var A = UA(), e = A.degrees, t = A.onChange, r = A.value, n = A.defaultStyles, o = A.pickerIdSuffix, i = function(a) {
      var s = br(a.target.value, 0, 360), l = r.split(/,(.+)/)[1];
      t("linear-gradient(".concat(s ?? 0, "deg, ").concat(l));
    };
    return E.createElement("div", {
      style: TA(TA(TA({}, n.rbgcpControlBtnWrapper), n.rbgcpControlInputWrap), n.rbgcpDegreeInputWrap),
      id: "rbgcp-degree-input-wrapper".concat(o)
    }, E.createElement($C, null), E.createElement("input", {
      value: e,
      onChange: function(a) {
        return i(a);
      },
      id: "rbgcp-degree-input".concat(o),
      style: TA(TA({}, n.rbgcpControlInput), n.rbgcpDegreeInput)
    }), E.createElement("div", {
      style: TA(TA({}, n.rbgcpDegreeIcon), {
        position: "absolute",
        right: e > 99 ? 0 : e < 10 ? 7 : 3,
        top: 1,
        fontWeight: 400,
        fontSize: 13
      })
    }, "\xB0"));
  }, SU = function() {
    var A = UA(), e = A.colors, t = A.selectedColor, r = A.createGradientStr, n = A.defaultStyles, o = A.pickerIdSuffix, i = function() {
      if ((e == null ? void 0 : e.length) > 2) {
        var a = e == null ? void 0 : e.map(function(l, c) {
          return TA(TA({}, l), {
            value: c === t - 1 ? Ui(l) : In(l)
          });
        }), s = a == null ? void 0 : a.filter(function(l, c) {
          return c !== t;
        });
        r(s);
      }
    };
    return E.createElement("div", {
      onClick: i,
      style: TA(TA({}, sn(false, n)), {
        width: 28
      }),
      id: "rbgcp-point-delete-btn".concat(o),
      tabIndex: 0,
      role: "button",
      onKeyDown: function() {
      }
    }, E.createElement(MC, null));
  }, cu = function(A) {
    var e = A.hideGradientType, t = A.hideGradientAngle, r = A.hideGradientStop, n = UA(), o = n.gradientType, i = n.defaultStyles, a = n.pickerIdSuffix;
    return E.createElement("div", {
      style: TA(TA({}, i.rbgcpControlBtnWrapper), {
        marginTop: 12,
        marginBottom: -4,
        justifyContent: "space-between",
        paddingLeft: e ? 4 : 0
      }),
      id: "rbgcp-gradient-controls-wrap".concat(a)
    }, !e && E.createElement(UU, null), E.createElement("div", {
      style: {
        width: 53
      }
    }, !t && o === "linear-gradient" && E.createElement(IU, null)), !r && E.createElement(EU, null), E.createElement(SU, null));
  }, hn = function() {
    return hn = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, hn.apply(this, arguments);
  }, xU = function(A) {
    var e, t, r = A.hideColorTypeBtns, n = A.setGradient, o = A.isGradient, i = A.setSolid, a = A.locales, s = UA(), l = s.defaultStyles, c = s.pickerIdSuffix;
    return r ? E.createElement("div", {
      style: {
        width: 1
      }
    }) : E.createElement("div", {
      style: hn({
        display: "flex",
        alignItems: "center"
      }, l.rbgcpControlBtnWrapper),
      id: "rbgcp-color-type-btns".concat(c)
    }, E.createElement("div", {
      onClick: i,
      id: "rbgcp-solid-btn".concat(c),
      style: lu(!o, l)
    }, (e = a == null ? void 0 : a.CONTROLS) === null || e === void 0 ? void 0 : e.SOLID), E.createElement("div", {
      onClick: n,
      id: "rbgcp-gradient-btn".concat(c),
      style: lu(o ?? false, l)
    }, (t = a == null ? void 0 : a.CONTROLS) === null || t === void 0 ? void 0 : t.GRADIENT));
  }, HU = function(A) {
    var e = A.openInputType, t = A.setOpenInputType, r = UA(), n = r.inputType, o = r.setInputType, i = r.defaultStyles, a = r.pickerIdSuffix, s = e ? "visibility 0ms linear" : "visibility 100ms linear 150ms", l = e ? "z-index 0ms linear" : "z-index 100ms linear 150ms", c = e ? "opacity 120ms linear" : "opacity 150ms linear 50ms", u = function(d, g) {
      e && (d.stopPropagation(), o(g), t(false));
    };
    return E.createElement("div", {
      style: hn({
        visibility: e ? "visible" : "hidden",
        zIndex: e ? "" : -100,
        opacity: e ? 1 : 0,
        transition: "".concat(c, ", ").concat(s, ", ").concat(l)
      }, i.rbgcpColorModelDropdown),
      id: "rbgcp-color-model-dropdown".concat(a)
    }, E.createElement("div", {
      id: "rbgcp-color-model-rgb-btn".concat(a),
      onClick: function(d) {
        return u(d, "rgb");
      },
      style: uo(n === "rgb", i)
    }, "RGB"), E.createElement("div", {
      id: "rbgcp-color-model-hsl-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsl");
      },
      style: uo(n === "hsl", i)
    }, "HSL"), E.createElement("div", {
      id: "rbgcp-color-model-hsv-btn".concat(a),
      onClick: function(d) {
        return u(d, "hsv");
      },
      style: uo(n === "hsv", i)
    }, "HSV"), E.createElement("div", {
      id: "rbgcp-color-model-cmyk-btn".concat(a),
      onClick: function(d) {
        return u(d, "cmyk");
      },
      style: uo(n === "cmyk", i)
    }, "CMYK"));
  }, TU = function(A) {
    var e, t, r = A.locales, n = A.hideEyeDrop, o = n === void 0 ? false : n, i = A.hideAdvancedSliders, a = i === void 0 ? false : i, s = A.hideColorGuide, l = s === void 0 ? false : s, c = A.hideInputType, u = c === void 0 ? false : c, d = A.hideColorTypeBtns, g = d === void 0 ? false : d, p = A.hideGradientControls, B = p === void 0 ? false : p, y = A.hideGradientType, h = y === void 0 ? false : y, b = A.hideGradientAngle, m = b === void 0 ? false : b, v = A.hideGradientStop, U = v === void 0 ? false : v, C = UA(), I = C.config, S = C.onChange, x = C.isGradient, f = C.handleChange, H = C.previous, K = C.defaultStyles, k = C.pickerIdSuffix, N = I.defaultColor, O = I.defaultGradient, R = BA(false), W = R[0], rA = R[1], D = BA(false), X = D[0], q = D[1], tA = BA(false), T = tA[0], G = tA[1], _ = o && a && l && u, Y = (e = H == null ? void 0 : H.color) !== null && e !== void 0 ? e : N, uA = (t = H == null ? void 0 : H.gradient) !== null && t !== void 0 ? t : O, iA = function() {
      S(Y);
    }, AA = function() {
      S(uA);
    }, J = o && a && l && u, nA = J && g;
    return nA ? x && !B ? E.createElement(cu, {
      hideGradientType: h,
      hideGradientAngle: m,
      hideGradientStop: U
    }) : null : E.createElement("div", {
      style: {
        paddingBottom: 4
      }
    }, E.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      id: "rbgcp-controls-wrapper".concat(k)
    }, E.createElement(xU, {
      hideColorTypeBtns: g,
      setGradient: AA,
      isGradient: x,
      setSolid: iA,
      locales: r
    }), !J && E.createElement("div", {
      style: hn({
        display: _ ? "none" : ""
      }, K.rbgcpControlBtnWrapper),
      id: "rbgcp-control-rightside-wrapper".concat(k)
    }, !o && E.createElement(yU, {
      onSelect: f
    }), !a && E.createElement("div", {
      id: "rbgcp-advanced-btn".concat(k),
      onClick: function() {
        return G(!T);
      },
      style: sn(T, K)
    }, E.createElement(NC, {
      color: T ? "#568CF5" : ""
    })), !l && E.createElement("div", {
      style: sn(W, K),
      onClick: function() {
        return rA(!W);
      },
      id: "rbgcp-comparibles-btn".concat(k)
    }, E.createElement(VC, {
      color: W ? "#568CF5" : ""
    })), !u && E.createElement("div", {
      id: "rbgcp-color-model-btn".concat(k),
      onClick: function() {
        return q(!X);
      },
      style: sn(X, K)
    }, E.createElement(GC, {
      color: X ? "#568CF5" : ""
    }), E.createElement(HU, {
      openInputType: X,
      setOpenInputType: q
    })))), !a && E.createElement(bU, {
      openAdvanced: T
    }), !l && E.createElement(FU, {
      openComparibles: W
    }), x && !B && E.createElement(cu, {
      hideGradientType: h,
      hideGradientAngle: m,
      hideGradientStop: U
    }));
  }, ze = function() {
    return ze = Object.assign || function(A) {
      for (var e, t = 1, r = arguments.length; t < r; t++) {
        e = arguments[t];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (A[n] = e[n]);
      }
      return A;
    }, ze.apply(this, arguments);
  }, uu = function(A, e, t) {
    if (t || arguments.length === 2) for (var r = 0, n = e.length, o; r < n; r++) (o || !(r in e)) && (o || (o = Array.prototype.slice.call(e, 0, r)), o[r] = e[r]);
    return A.concat(o || Array.prototype.slice.call(e));
  }, LU = function(A) {
    var e = A.left, t = A.i, r = A.setDragging, n = UA(), o = n.colors, i = n.squareWidth, a = n.selectedColor, s = n.defaultStyles, l = n.pickerIdSuffix, c = n.createGradientStr, u = a === t, d = (i - 18) / 100, g = function(B) {
      var y = o == null ? void 0 : o.map(function(h, b) {
        return ze(ze({}, h), {
          value: b === B ? Ui(h) : In(h)
        });
      });
      c(y);
    }, p = function(B) {
      B.stopPropagation(), g(t), r(true);
    };
    return E.createElement("div", {
      onMouseDown: function(B) {
        return p(B);
      },
      id: "rbgcp-gradient-handle-".concat(t).concat(l),
      style: ze(ze({}, s.rbgcpGradientHandleWrap), {
        left: (e ?? 0) * d
      })
    }, E.createElement("div", {
      style: ze(ze({}, s.rbgcpGradientHandle), u ? {
        boxShadow: "0px 0px 5px 1px rgba(86, 140, 245,.95)",
        border: "2px solid white"
      } : {}),
      id: "rbgcp-gradient-handle-".concat(t, "-dot").concat(l)
    }, u && E.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "white"
      },
      id: "rbgcp-gradient-handle-".concat(t, "-selected-dot").concat(l)
    })));
  }, kU = function() {
    var A = UA(), e = A.value, t = A.colors, r = A.config, n = A.squareWidth, o = A.currentColor, i = A.handleGradient, a = A.pickerIdSuffix, s = A.createGradientStr, l = r.barSize, c = BA(false), u = c[0], d = c[1];
    function g(m) {
      return m.replace(/(radial|linear)-gradient\([^,]+,/, "linear-gradient(90deg,");
    }
    var p = function(m) {
      var v, U = Fr(m, l), C = (v = uu(uu([], t.map(function(I) {
        return ze(ze({}, I), {
          value: In(I)
        });
      }), true), [
        {
          value: o,
          left: U
        }
      ], false)) === null || v === void 0 ? void 0 : v.sort(function(I, S) {
        return I.left - S.left;
      });
      s(C);
    }, B = function() {
      d(false);
    }, y = function(m) {
      u || (p(m), d(true));
    }, h = function(m) {
      u && i(o, Fr(m, l));
    }, b = function() {
      B();
    };
    return gA(function() {
      return window.addEventListener("mouseup", b), function() {
        window.removeEventListener("mouseup", b);
      };
    }), E.createElement("div", {
      style: {
        width: "100%",
        marginTop: 17,
        marginBottom: 4,
        position: "relative"
      },
      id: "rbgcp-gradient-bar".concat(a)
    }, E.createElement("div", {
      style: {
        height: 14,
        borderRadius: 10,
        width: n,
        backgroundImage: g(e)
      },
      onMouseDown: function(m) {
        return y(m);
      },
      onMouseMove: function(m) {
        return h(m);
      },
      id: "rbgcp-gradient-bar-canvas".concat(a)
    }), t == null ? void 0 : t.map(function(m, v) {
      return E.createElement(LU, {
        i: v,
        left: m.left,
        key: "".concat(v, "-").concat(m),
        setDragging: d
      });
    }));
  }, OU = function(A) {
    var e = A.locales, t = A.presets, r = A.hideHue, n = A.hideInputs, o = A.hidePresets, i = A.hideOpacity, a = A.hideEyeDrop, s = A.hideControls, l = A.hideInputType, c = A.hideColorGuide, u = A.hidePickerSquare, d = A.hideGradientType, g = A.hideGradientStop, p = A.hideGradientAngle, B = A.hideColorTypeBtns, y = A.hideAdvancedSliders, h = A.hideGradientControls, b = UA(), m = b.isGradient, v = b.pickerIdSuffix;
    return E.createElement("div", {
      style: {
        userSelect: "none"
      },
      id: "rbgcp-color-picker".concat(v)
    }, !u && E.createElement(kC, null), !s && E.createElement(TU, {
      locales: e,
      hideEyeDrop: a,
      hideInputType: l,
      hideColorGuide: c,
      hideGradientType: d,
      hideGradientStop: g,
      hideColorTypeBtns: B,
      hideGradientAngle: p,
      hideAdvancedSliders: y,
      hideGradientControls: h
    }), m && E.createElement(kU, null), !r && E.createElement(nC, null), !i && E.createElement(OC, null), !n && E.createElement(fC, null), !o && E.createElement(DC, {
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
  d1 = function(A) {
    var e = A.idSuffix, t = A.value, r = t === void 0 ? "rgba(175, 51, 242, 1)" : t, n = A.onChange, o = A.hideControls, i = o === void 0 ? false : o, a = A.hideInputs, s = a === void 0 ? false : a, l = A.hideOpacity, c = l === void 0 ? false : l, u = A.hidePresets, d = u === void 0 ? false : u, g = A.hideHue, p = g === void 0 ? false : g, B = A.presets, y = B === void 0 ? [] : B, h = A.hideEyeDrop, b = h === void 0 ? false : h, m = A.hideAdvancedSliders, v = m === void 0 ? false : m, U = A.hideColorGuide, C = U === void 0 ? false : U, I = A.hideInputType, S = I === void 0 ? false : I, x = A.hideColorTypeBtns, f = x === void 0 ? false : x, H = A.hideGradientType, K = H === void 0 ? false : H, k = A.hideGradientAngle, N = k === void 0 ? false : k, O = A.hideGradientStop, R = O === void 0 ? false : O, W = A.hideGradientControls, rA = W === void 0 ? false : W, D = A.locales, X = D === void 0 ? KC : D, q = A.width, tA = q === void 0 ? 294 : q, T = A.height, G = T === void 0 ? 294 : T, _ = A.style, Y = _ === void 0 ? {} : _, uA = A.className, iA = A.disableDarkMode, AA = iA === void 0 ? false : iA, J = A.disableLightMode, nA = J === void 0 ? false : J, aA = A.hidePickerSquare, w = aA === void 0 ? false : aA, F = A.showHexAlpha, Q = F === void 0 ? false : F, M = A.config, $ = M === void 0 ? {} : M, P = Jm(r), sA = typeof window > "u" || AA ? false : !!(window.matchMedia("(prefers-color-scheme: dark)").matches || nA), lA = vU(sA, Y), fA = sA ? "-dark".concat(e ? "-".concat(e) : "") : e ? "-".concat(e) : "";
    return E.createElement("div", {
      className: uA,
      style: No(No({}, lA.body), {
        width: tA
      })
    }, E.createElement(qm, {
      value: P,
      onChange: n,
      squareWidth: tA,
      passedConfig: $,
      squareHeight: G,
      isDarkMode: sA,
      hideOpacity: c,
      showHexAlpha: Q,
      defaultStyles: lA,
      pickerIdSuffix: fA
    }, E.createElement(OU, {
      hideControls: i,
      hideInputs: s,
      hidePresets: d,
      hideOpacity: c,
      hideHue: p,
      presets: y,
      hideEyeDrop: b,
      hideAdvancedSliders: v,
      hideColorGuide: C,
      hideInputType: S,
      hideColorTypeBtns: f,
      hideGradientType: K,
      hideGradientAngle: N,
      hideGradientStop: R,
      hideGradientControls: rA,
      hidePickerSquare: w,
      locales: X
    })));
  };
  function du(A) {
    const e = A.getBoundingClientRect();
    return {
      above: e.top,
      below: window.innerHeight - e.bottom
    };
  }
  f1 = function(A, e, t = 16) {
    const [r, n] = BA("bottom"), o = ve(() => `calc(100vh - ${2 * t}px)`, [
      t
    ]), i = oA("bottom"), a = oA(null), s = oA(null), l = RA((B) => {
      i.current = B, n(B);
    }, []), c = RA((B) => {
      if (!A) return;
      const { above: y, below: h } = du(A), b = i.current;
      if (B !== void 0) {
        const m = b === "bottom" ? h : y, v = b === "bottom" ? y : h;
        if (B <= m - t) return;
        v > m && l(b === "bottom" ? "top" : "bottom");
      } else l(y > h ? "top" : "bottom");
    }, [
      A,
      t,
      l
    ]);
    gA(() => {
      if (!e || !A) return;
      const { above: B, below: y } = du(A);
      l(B > y ? "top" : "bottom");
    }, [
      e,
      A,
      l
    ]), gA(() => {
      if (!e || !A) return;
      const B = () => c();
      return window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
    }, [
      e,
      A,
      c
    ]);
    const [, u] = BA({}), d = RA((B) => {
      a.current = B, u({});
    }, []);
    return gA(() => {
      if (!e || !a.current) return;
      let B = null;
      const y = new ResizeObserver((h) => {
        B !== null && cancelAnimationFrame(B), B = requestAnimationFrame(() => {
          var _a2;
          B = null, (_a2 = s.current) == null ? void 0 : _a2.updatePosition(), h.length > 0 && c(h[0].contentRect.height);
        });
      });
      return y.observe(a.current), () => {
        B !== null && cancelAnimationFrame(B), y.disconnect();
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
  iB as $,
  Es as A,
  $l as B,
  Ms as C,
  qe as D,
  yh as E,
  iw as F,
  JU as G,
  pd as H,
  NU as I,
  rt as J,
  vo as K,
  Iw as L,
  q0 as M,
  kt as N,
  yl as O,
  Lh as P,
  Jt as Q,
  Cl as R,
  yd as S,
  VU as T,
  F0 as U,
  YU as V,
  Rt as W,
  yr as X,
  $e as Y,
  kr as Z,
  Bd as _,
  __tla,
  fn as a,
  bn as a$,
  dB as a0,
  tt as a1,
  Sr as a2,
  Ir as a3,
  Cs as a4,
  Qn as a5,
  n0 as a6,
  se as a7,
  Ws as a8,
  be as a9,
  c1 as aA,
  Io as aB,
  n1 as aC,
  a1 as aD,
  ZU as aE,
  qU as aF,
  r1 as aG,
  t1 as aH,
  ce as aI,
  e1 as aJ,
  ph as aK,
  f1 as aL,
  Lw as aM,
  d1 as aN,
  s1 as aO,
  bm as aP,
  Fi as aQ,
  o1 as aR,
  i1 as aS,
  Rr as aT,
  l1 as aU,
  pm as aV,
  Fd as aW,
  ft as aX,
  PU as aY,
  Fs as aZ,
  MU as a_,
  gt as aa,
  Mi as ab,
  cw as ac,
  E0 as ad,
  Ns as ae,
  Ka as af,
  $0 as ag,
  Ne as ah,
  Sw as ai,
  td as aj,
  bw as ak,
  ka as al,
  GU as am,
  ml as an,
  Is as ao,
  Un as ap,
  ju as aq,
  Ad as ar,
  Gs as as,
  Qh as at,
  $U as au,
  Ds as av,
  A1 as aw,
  jU as ax,
  zU as ay,
  u1 as az,
  XU as b,
  fi as b0,
  Fl as b1,
  Yu as b2,
  pt as b3,
  ZB as b4,
  Fo as b5,
  p0 as b6,
  Ls as b7,
  H0 as b8,
  tB as b9,
  gd as ba,
  ba as bb,
  WU as bc,
  jp as bd,
  Jh as c,
  vh as d,
  Ia as e,
  LA as f,
  DA as g,
  wA as h,
  MA as i,
  mA as j,
  Hs as k,
  Ts as l,
  WA as m,
  wB as n,
  Ci as o,
  Be as p,
  Vs as q,
  yw as r,
  dA as s,
  _U as t,
  NA as u,
  Ps as v,
  _w as w,
  Ss as x,
  Gu as y,
  Pi as z
};
