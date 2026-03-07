import { al as yn, ad as vn, j as n, t as qe, am as Cn, x as _t, k as Vt, aj as jn, a1 as In, Q as St, V as it, an as Sn, i as rn, n as At, s as Q, v as ut, m as Ie, ao as wn, q as wt, P as Dt, d as kt, ap as Te, aq as je, ar as Et, as as Ot, I as Je, J as kn, h as ae, a as an, T as N, B as J, D as ln, L as cn, G as v, a8 as On, a3 as q, a4 as Gt, a5 as Bt, S as Pn, a9 as Ln, c as $n, w as Tn, __tla as __tla_0 } from "./commonFields-DTrF7Vi3.js";
import { v as d, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { A as _n, L as un, a as dn, b as Lt, __tla as __tla_2 } from "./ListItemText-Df8CGcvl.js";
import { C as Vn, __tla as __tla_3 } from "./Checkbox-C3oYf-9w.js";
import { S as $t, __tla as __tla_4 } from "./Switch-pRG-O8dC.js";
import { C as An, P as pn, a as fn, L as lt, G as Dn, T as gn, D as Ft, c as Pt, A as Mn, b as zn, E as Rn, __tla as __tla_5 } from "./Visibility-KdwE5MeV.js";
import { P as Ht, __tla as __tla_6 } from "./PowerSettingsNew-BAfLoe2G.js";
import { S as Wn, __tla as __tla_7 } from "./Slider-P6_E6ku-.js";
import { s as Nn, u as En, __tla as __tla_8 } from "./useThemeProps-D6qBUQJ7.js";
import { M as Gn, __tla as __tla_9 } from "./MenuItem-CAjfcv_B.js";
import { F as Ut, __tla as __tla_10 } from "./FormControlLabel-B_4qo8oc.js";
import { D as Kt, b as qt, a as Bn, __tla as __tla_11 } from "./DialogTitle-BMTIL6aN.js";
import { C as Fn, __tla as __tla_12 } from "./Close-Bx2RFzIF.js";
import { B as _e, __tla as __tla_13 } from "./Button-BpUOPuWw.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_14 } from "./listItemTextClasses-BUgHCiAA.js";
import { __tla as __tla_15 } from "./SwitchBase-B8Y2zoud.js";
let xn;
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
  })()
]).then(async () => {
  const Hn = (e) => {
    const t = d.useRef({});
    return d.useEffect(() => {
      t.current = e;
    }), t.current;
  }, Un = (e, t) => e.filter((r) => t.includes(r)), Ae = (e, t, r) => {
    const o = e.keys[0];
    Array.isArray(t) ? t.forEach((l, i) => {
      r((x, p) => {
        i <= e.keys.length - 1 && (i === 0 ? Object.assign(x, p) : x[e.up(e.keys[i])] = p);
      }, l);
    }) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : Un(e.keys, Object.keys(t))).forEach((i) => {
      if (e.keys.includes(i)) {
        const x = t[i];
        x !== void 0 && r((p, y) => {
          o === i ? Object.assign(p, y) : p[e.up(i)] = y;
        }, x);
      }
    }) : (typeof t == "number" || typeof t == "string") && r((l, i) => {
      Object.assign(l, i);
    }, t);
  };
  function ct(e) {
    return `--Grid-${e}Spacing`;
  }
  function dt(e) {
    return `--Grid-parent-${e}Spacing`;
  }
  const Jt = "--Grid-columns", Ve = "--Grid-parent-columns", Kn = ({ theme: e, ownerState: t }) => {
    const r = {};
    return Ae(e.breakpoints, t.size, (o, l) => {
      let i = {};
      l === "grow" && (i = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      }), l === "auto" && (i = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      }), typeof l == "number" && (i = {
        flexGrow: 0,
        flexBasis: "auto",
        width: `calc(100% * ${l} / var(${Ve}) - (var(${Ve}) - ${l}) * (var(${dt("column")}) / var(${Ve})))`
      }), o(r, i);
    }), r;
  }, qn = ({ theme: e, ownerState: t }) => {
    const r = {};
    return Ae(e.breakpoints, t.offset, (o, l) => {
      let i = {};
      l === "auto" && (i = {
        marginLeft: "auto"
      }), typeof l == "number" && (i = {
        marginLeft: l === 0 ? "0px" : `calc(100% * ${l} / var(${Ve}) + var(${dt("column")}) * ${l} / var(${Ve}))`
      }), o(r, i);
    }), r;
  }, Jn = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {
      [Jt]: 12
    };
    return Ae(e.breakpoints, t.columns, (o, l) => {
      const i = l ?? 12;
      o(r, {
        [Jt]: i,
        "> *": {
          [Ve]: i
        }
      });
    }), r;
  }, Qn = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return Ae(e.breakpoints, t.rowSpacing, (o, l) => {
      var _a;
      const i = typeof l == "string" ? l : (_a = e.spacing) == null ? void 0 : _a.call(e, l);
      o(r, {
        [ct("row")]: i,
        "> *": {
          [dt("row")]: i
        }
      });
    }), r;
  }, Yn = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return Ae(e.breakpoints, t.columnSpacing, (o, l) => {
      var _a;
      const i = typeof l == "string" ? l : (_a = e.spacing) == null ? void 0 : _a.call(e, l);
      o(r, {
        [ct("column")]: i,
        "> *": {
          [dt("column")]: i
        }
      });
    }), r;
  }, Xn = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const r = {};
    return Ae(e.breakpoints, t.direction, (o, l) => {
      o(r, {
        flexDirection: l
      });
    }), r;
  }, Zn = ({ ownerState: e }) => ({
    minWidth: 0,
    boxSizing: "border-box",
    ...e.container && {
      display: "flex",
      flexWrap: "wrap",
      ...e.wrap && e.wrap !== "wrap" && {
        flexWrap: e.wrap
      },
      gap: `var(${ct("row")}) var(${ct("column")})`
    }
  }), eo = (e) => {
    const t = [];
    return Object.entries(e).forEach(([r, o]) => {
      o !== false && o !== void 0 && t.push(`grid-${r}-${String(o)}`);
    }), t;
  }, to = (e, t = "xs") => {
    function r(o) {
      return o === void 0 ? false : typeof o == "string" && !Number.isNaN(Number(o)) || typeof o == "number" && o > 0;
    }
    if (r(e)) return [
      `spacing-${t}-${String(e)}`
    ];
    if (typeof e == "object" && !Array.isArray(e)) {
      const o = [];
      return Object.entries(e).forEach(([l, i]) => {
        r(i) && o.push(`spacing-${l}-${String(i)}`);
      }), o;
    }
    return [];
  }, no = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([t, r]) => `direction-${t}-${r}`) : [
    `direction-xs-${String(e)}`
  ];
  function oo(e, t) {
    e.item !== void 0 && delete e.item, e.zeroMinWidth !== void 0 && delete e.zeroMinWidth, t.keys.forEach((r) => {
      e[r] !== void 0 && delete e[r];
    });
  }
  const so = jn(), ro = Nn("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  });
  function ao(e) {
    return En({
      props: e,
      name: "MuiGrid",
      defaultTheme: so
    });
  }
  function io(e = {}) {
    const { createStyledComponent: t = ro, useThemeProps: r = ao, useTheme: o = yn, componentName: l = "MuiGrid" } = e, i = (g, u) => {
      const { container: h, direction: c, spacing: b, wrap: m, size: k } = g, j = {
        root: [
          "root",
          h && "container",
          m !== "wrap" && `wrap-xs-${String(m)}`,
          ...no(c),
          ...eo(k),
          ...h ? to(b, u.breakpoints.keys[0]) : []
        ]
      };
      return _t(j, (O) => Vt(l, O), {});
    };
    function x(g, u, h = () => true) {
      const c = {};
      return g === null || (Array.isArray(g) ? g.forEach((b, m) => {
        b !== null && h(b) && u.keys[m] && (c[u.keys[m]] = b);
      }) : typeof g == "object" ? Object.keys(g).forEach((b) => {
        const m = g[b];
        m != null && h(m) && (c[b] = m);
      }) : c[u.keys[0]] = g), c;
    }
    const p = t(Jn, Yn, Qn, Kn, Xn, Zn, qn), y = d.forwardRef(function(u, h) {
      const c = o(), b = r(u), m = vn(b);
      oo(m, c.breakpoints);
      const { className: k, children: j, columns: O = 12, container: V = false, component: M = "div", direction: pe = "row", wrap: G = "wrap", size: D = {}, offset: te = {}, spacing: ne = 0, rowSpacing: xe = ne, columnSpacing: Se = ne, unstable_level: U = 0, ...L } = m, De = x(D, c.breakpoints, (F) => F !== false), Me = x(te, c.breakpoints), we = u.columns ?? (U ? void 0 : O), ie = u.spacing ?? (U ? void 0 : ne), ke = u.rowSpacing ?? u.spacing ?? (U ? void 0 : xe), Qe = u.columnSpacing ?? u.spacing ?? (U ? void 0 : Se), ze = {
        ...m,
        level: U,
        columns: we,
        container: V,
        direction: pe,
        wrap: G,
        spacing: ie,
        rowSpacing: ke,
        columnSpacing: Qe,
        size: De,
        offset: Me
      }, Ye = i(ze, c);
      return n.jsx(p, {
        ref: h,
        as: M,
        ownerState: ze,
        className: qe(Ye.root, k),
        ...L,
        children: d.Children.map(j, (F) => {
          var _a;
          return d.isValidElement(F) && Cn(F, [
            "Grid"
          ]) && V && F.props.container ? d.cloneElement(F, {
            unstable_level: ((_a = F.props) == null ? void 0 : _a.unstable_level) ?? U + 1
          }) : F;
        })
      });
    });
    return y.muiName = "Grid", y;
  }
  function Qt(e) {
    return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function lo(e = {}) {
    const { ignoreAccents: t = true, ignoreCase: r = true, limit: o, matchFrom: l = "any", stringify: i, trim: x = false } = e;
    return (p, { inputValue: y, getOptionLabel: g }) => {
      let u = x ? y.trim() : y;
      r && (u = u.toLowerCase()), t && (u = Qt(u));
      const h = u ? p.filter((c) => {
        let b = (i || g)(c);
        return r && (b = b.toLowerCase()), t && (b = Qt(b)), l === "start" ? b.startsWith(u) : b.includes(u);
      }) : p;
      return typeof o == "number" ? h.slice(0, o) : h;
    };
  }
  const co = lo(), Yt = 5, uo = (e) => {
    var _a;
    return e.current !== null && ((_a = e.current.parentElement) == null ? void 0 : _a.contains(document.activeElement));
  }, po = [];
  function Xt(e, t, r) {
    if (t || e == null) return "";
    const o = r(e);
    return typeof o == "string" ? o : "";
  }
  function fo(e) {
    const { unstable_isActiveElementInListbox: t = uo, unstable_classNamePrefix: r = "Mui", autoComplete: o = false, autoHighlight: l = false, autoSelect: i = false, blurOnSelect: x = false, clearOnBlur: p = !e.freeSolo, clearOnEscape: y = false, componentName: g = "useAutocomplete", defaultValue: u = e.multiple ? po : null, disableClearable: h = false, disableCloseOnSelect: c = false, disabled: b, disabledItemsFocusable: m = false, disableListWrap: k = false, filterOptions: j = co, filterSelectedOptions: O = false, freeSolo: V = false, getOptionDisabled: M, getOptionKey: pe, getOptionLabel: G = (a) => a.label ?? a, groupBy: D, handleHomeEndKeys: te = !e.freeSolo, id: ne, includeInputInList: xe = false, inputValue: Se, isOptionEqualToValue: U = (a, s) => a === s, multiple: L = false, onChange: De, onClose: Me, onHighlightChange: we, onInputChange: ie, onOpen: ke, open: Qe, openOnFocus: ze = false, options: Ye, readOnly: F = false, selectOnFocus: Re = !e.freeSolo, value: Xe } = e, Y = In(ne);
    let E = G;
    E = (a) => {
      const s = G(a);
      return typeof s != "string" ? String(s) : s;
    };
    const We = d.useRef(false), Ne = d.useRef(true), R = d.useRef(null), X = d.useRef(null), [Ee, Mt] = d.useState(null), [Z, Ze] = d.useState(-1), pt = l ? 0 : -1, H = d.useRef(pt), et = d.useRef(Xt(u ?? Xe, L, E)).current, [C, ft] = St({
      controlled: Xe,
      default: u,
      name: g
    }), [$, Oe] = St({
      controlled: Se,
      default: et,
      name: g,
      state: "inputValue"
    }), [me, tt] = d.useState(false), Pe = d.useCallback((a, s, f) => {
      if (!(L ? C.length < s.length : s !== null) && !p) return;
      const w = Xt(s, L, E);
      $ !== w && (Oe(w), ie && ie(a, w, f));
    }, [
      E,
      $,
      L,
      ie,
      Oe,
      p,
      C
    ]), [fe, Ge] = St({
      controlled: Qe,
      default: false,
      name: g,
      state: "open"
    }), [zt, Le] = d.useState(true), nt = !L && C != null && $ === E(C), K = fe && !F, A = K ? j(Ye.filter((a) => !(O && (L ? C : [
      C
    ]).some((s) => s !== null && U(a, s)))), {
      inputValue: nt && zt ? "" : $,
      getOptionLabel: E
    }) : [], oe = Hn({
      filteredOptions: A,
      value: C,
      inputValue: $
    });
    d.useEffect(() => {
      const a = C !== oe.value;
      me && !a || V && !a || Pe(null, C, "reset");
    }, [
      C,
      Pe,
      me,
      oe.value,
      V
    ]);
    const ot = fe && A.length > 0 && !F, be = it((a) => {
      a === -1 ? R.current.focus() : Ee.querySelector(`[data-tag-index="${a}"]`).focus();
    });
    d.useEffect(() => {
      L && Z > C.length - 1 && (Ze(-1), be(-1));
    }, [
      C,
      L,
      Z,
      be
    ]);
    function gt(a, s) {
      if (!X.current || a < 0 || a >= A.length) return -1;
      let f = a;
      for (; ; ) {
        const I = X.current.querySelector(`[data-option-index="${f}"]`), w = m ? false : !I || I.disabled || I.getAttribute("aria-disabled") === "true";
        if (I && I.hasAttribute("tabindex") && !w) return f;
        if (s === "next" ? f = (f + 1) % A.length : f = (f - 1 + A.length) % A.length, f === a) return -1;
      }
    }
    const de = it(({ event: a, index: s, reason: f }) => {
      if (H.current = s, s === -1 ? R.current.removeAttribute("aria-activedescendant") : R.current.setAttribute("aria-activedescendant", `${Y}-option-${s}`), we && [
        "mouse",
        "keyboard",
        "touch"
      ].includes(f) && we(a, s === -1 ? null : A[s], f), !X.current) return;
      const I = X.current.querySelector(`[role="option"].${r}-focused`);
      I && (I.classList.remove(`${r}-focused`), I.classList.remove(`${r}-focusVisible`));
      let w = X.current;
      if (X.current.getAttribute("role") !== "listbox" && (w = X.current.parentElement.querySelector('[role="listbox"]')), !w) return;
      if (s === -1) {
        w.scrollTop = 0;
        return;
      }
      const T = X.current.querySelector(`[data-option-index="${s}"]`);
      if (T && (T.classList.add(`${r}-focused`), f === "keyboard" && T.classList.add(`${r}-focusVisible`), w.scrollHeight > w.clientHeight && f !== "mouse" && f !== "touch")) {
        const z = T, ee = w.clientHeight + w.scrollTop, It = z.offsetTop + z.offsetHeight;
        It > ee ? w.scrollTop = It - w.clientHeight : z.offsetTop - z.offsetHeight * (D ? 1.3 : 0) < w.scrollTop && (w.scrollTop = z.offsetTop - z.offsetHeight * (D ? 1.3 : 0));
      }
    }), se = it(({ event: a, diff: s, direction: f = "next", reason: I }) => {
      if (!K) return;
      const T = gt((() => {
        const z = A.length - 1;
        if (s === "reset") return pt;
        if (s === "start") return 0;
        if (s === "end") return z;
        const ee = H.current + s;
        return ee < 0 ? ee === -1 && xe ? -1 : k && H.current !== -1 || Math.abs(s) > 1 ? 0 : z : ee > z ? ee === z + 1 && xe ? -1 : k || Math.abs(s) > 1 ? z : 0 : ee;
      })(), f);
      if (de({
        index: T,
        reason: I,
        event: a
      }), o && s !== "reset") if (T === -1) R.current.value = $;
      else {
        const z = E(A[T]);
        R.current.value = z, z.toLowerCase().indexOf($.toLowerCase()) === 0 && $.length > 0 && R.current.setSelectionRange($.length, z.length);
      }
    }), ht = () => {
      const a = (s, f) => {
        const I = s ? E(s) : "", w = f ? E(f) : "";
        return I === w;
      };
      if (H.current !== -1 && oe.filteredOptions && oe.filteredOptions.length !== A.length && oe.inputValue === $ && (L ? C.length === oe.value.length && oe.value.every((s, f) => E(C[f]) === E(s)) : a(oe.value, C))) {
        const s = oe.filteredOptions[H.current];
        if (s) return A.findIndex((f) => E(f) === E(s));
      }
      return -1;
    }, Be = d.useCallback(() => {
      if (!K) return;
      const a = ht();
      if (a !== -1) {
        H.current = a;
        return;
      }
      const s = L ? C[0] : C;
      if (A.length === 0 || s == null) {
        se({
          diff: "reset"
        });
        return;
      }
      if (X.current) {
        if (s != null) {
          const f = A[H.current];
          if (L && f && C.findIndex((w) => U(f, w)) !== -1) return;
          const I = A.findIndex((w) => U(w, s));
          I === -1 ? se({
            diff: "reset"
          }) : de({
            index: I
          });
          return;
        }
        if (H.current >= A.length - 1) {
          de({
            index: A.length - 1
          });
          return;
        }
        de({
          index: H.current
        });
      }
    }, [
      A.length,
      L ? false : C,
      O,
      se,
      de,
      K,
      $,
      L
    ]), xt = it((a) => {
      Sn(X, a), a && Be();
    });
    d.useEffect(() => {
      Be();
    }, [
      Be
    ]);
    const re = (a) => {
      fe || (Ge(true), Le(true), ke && ke(a));
    }, ye = (a, s) => {
      fe && (Ge(false), Me && Me(a, s));
    }, ge = (a, s, f, I) => {
      if (L) {
        if (C.length === s.length && C.every((w, T) => w === s[T])) return;
      } else if (C === s) return;
      De && De(a, s, f, I), ft(s);
    }, $e = d.useRef(false), le = (a, s, f = "selectOption", I = "options") => {
      let w = f, T = s;
      if (L) {
        T = Array.isArray(C) ? C.slice() : [];
        const z = T.findIndex((ee) => U(s, ee));
        z === -1 ? T.push(s) : I !== "freeSolo" && (T.splice(z, 1), w = "removeOption");
      }
      Pe(a, T, w), ge(a, T, w, {
        option: s
      }), !c && (!a || !a.ctrlKey && !a.metaKey) && ye(a, w), (x === true || x === "touch" && $e.current || x === "mouse" && !$e.current) && R.current.blur();
    };
    function st(a, s) {
      if (a === -1) return -1;
      let f = a;
      for (; ; ) {
        if (s === "next" && f === C.length || s === "previous" && f === -1) return -1;
        const I = Ee.querySelector(`[data-tag-index="${f}"]`);
        if (!I || !I.hasAttribute("tabindex") || I.disabled || I.getAttribute("aria-disabled") === "true") f += s === "next" ? 1 : -1;
        else return f;
      }
    }
    const rt = (a, s) => {
      if (!L) return;
      $ === "" && ye(a, "toggleInput");
      let f = Z;
      Z === -1 ? $ === "" && s === "previous" && (f = C.length - 1) : (f += s === "next" ? 1 : -1, f < 0 && (f = 0), f === C.length && (f = -1)), f = st(f, s), Ze(f), be(f);
    }, ve = (a) => {
      We.current = true, Oe(""), ie && ie(a, "", "clear"), ge(a, L ? [] : null, "clear");
    }, mt = (a) => (s) => {
      if (a.onKeyDown && a.onKeyDown(s), !s.defaultMuiPrevented && (Z !== -1 && ![
        "ArrowLeft",
        "ArrowRight"
      ].includes(s.key) && (Ze(-1), be(-1)), s.which !== 229)) switch (s.key) {
        case "Home":
          K && te && (s.preventDefault(), se({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: s
          }));
          break;
        case "End":
          K && te && (s.preventDefault(), se({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: s
          }));
          break;
        case "PageUp":
          s.preventDefault(), se({
            diff: -Yt,
            direction: "previous",
            reason: "keyboard",
            event: s
          }), re(s);
          break;
        case "PageDown":
          s.preventDefault(), se({
            diff: Yt,
            direction: "next",
            reason: "keyboard",
            event: s
          }), re(s);
          break;
        case "ArrowDown":
          s.preventDefault(), se({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: s
          }), re(s);
          break;
        case "ArrowUp":
          s.preventDefault(), se({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: s
          }), re(s);
          break;
        case "ArrowLeft":
          rt(s, "previous");
          break;
        case "ArrowRight":
          rt(s, "next");
          break;
        case "Enter":
          if (H.current !== -1 && K) {
            const f = A[H.current], I = M ? M(f) : false;
            if (s.preventDefault(), I) return;
            le(s, f, "selectOption"), o && R.current.setSelectionRange(R.current.value.length, R.current.value.length);
          } else V && $ !== "" && nt === false && (L && s.preventDefault(), le(s, $, "createOption", "freeSolo"));
          break;
        case "Escape":
          K ? (s.preventDefault(), s.stopPropagation(), ye(s, "escape")) : y && ($ !== "" || L && C.length > 0) && (s.preventDefault(), s.stopPropagation(), ve(s));
          break;
        case "Backspace":
          if (L && !F && $ === "" && C.length > 0) {
            const f = Z === -1 ? C.length - 1 : Z, I = C.slice();
            I.splice(f, 1), ge(s, I, "removeOption", {
              option: C[f]
            });
          }
          break;
        case "Delete":
          if (L && !F && $ === "" && C.length > 0 && Z !== -1) {
            const f = Z, I = C.slice();
            I.splice(f, 1), ge(s, I, "removeOption", {
              option: C[f]
            });
          }
          break;
      }
    }, bt = (a) => {
      tt(true), ze && !We.current && re(a);
    }, Ce = (a) => {
      if (t(X)) {
        R.current.focus();
        return;
      }
      tt(false), Ne.current = true, We.current = false, i && H.current !== -1 && K ? le(a, A[H.current], "blur") : i && V && $ !== "" ? le(a, $, "blur", "freeSolo") : p && Pe(a, C, "blur"), ye(a, "blur");
    }, Fe = (a) => {
      const s = a.target.value;
      $ !== s && (Oe(s), Le(false), ie && ie(a, s, "input")), s === "" ? !h && !L && ge(a, null, "clear") : re(a);
    }, He = (a) => {
      const s = Number(a.currentTarget.getAttribute("data-option-index"));
      H.current !== s && de({
        event: a,
        index: s,
        reason: "mouse"
      });
    }, yt = (a) => {
      de({
        event: a,
        index: Number(a.currentTarget.getAttribute("data-option-index")),
        reason: "touch"
      }), $e.current = true;
    }, vt = (a) => {
      const s = Number(a.currentTarget.getAttribute("data-option-index"));
      le(a, A[s], "selectOption"), $e.current = false;
    }, Ct = (a) => (s) => {
      const f = C.slice();
      f.splice(a, 1), ge(s, f, "removeOption", {
        option: C[a]
      });
    }, jt = (a) => {
      fe ? ye(a, "toggleInput") : re(a);
    }, Ue = (a) => {
      a.currentTarget.contains(a.target) && a.target.getAttribute("id") !== Y && a.preventDefault();
    }, B = (a) => {
      a.currentTarget.contains(a.target) && (R.current.focus(), Re && Ne.current && R.current.selectionEnd - R.current.selectionStart === 0 && R.current.select(), Ne.current = false);
    }, W = (a) => {
      !b && ($ === "" || !fe) && jt(a);
    };
    let ce = V && $.length > 0;
    ce = ce || (L ? C.length > 0 : C !== null);
    let at = A;
    return D && (at = A.reduce((a, s, f) => {
      const I = D(s);
      return a.length > 0 && a[a.length - 1].group === I ? a[a.length - 1].options.push(s) : a.push({
        key: f,
        index: f,
        group: I,
        options: [
          s
        ]
      }), a;
    }, [])), b && me && Ce(), {
      getRootProps: (a = {}) => ({
        ...a,
        onKeyDown: mt(a),
        onMouseDown: Ue,
        onClick: B
      }),
      getInputLabelProps: () => ({
        id: `${Y}-label`,
        htmlFor: Y
      }),
      getInputProps: () => ({
        id: Y,
        value: $,
        onBlur: Ce,
        onFocus: bt,
        onChange: Fe,
        onMouseDown: W,
        "aria-activedescendant": K ? "" : null,
        "aria-autocomplete": o ? "both" : "list",
        "aria-controls": ot ? `${Y}-listbox` : void 0,
        "aria-expanded": ot,
        autoComplete: "off",
        ref: R,
        autoCapitalize: "none",
        spellCheck: "false",
        role: "combobox",
        disabled: b
      }),
      getClearProps: () => ({
        tabIndex: -1,
        type: "button",
        onClick: ve
      }),
      getPopupIndicatorProps: () => ({
        tabIndex: -1,
        type: "button",
        onClick: jt
      }),
      getTagProps: ({ index: a }) => ({
        key: a,
        "data-tag-index": a,
        tabIndex: -1,
        ...!F && {
          onDelete: Ct(a)
        }
      }),
      getListboxProps: () => ({
        role: "listbox",
        id: `${Y}-listbox`,
        "aria-labelledby": `${Y}-label`,
        ref: xt,
        onMouseDown: (a) => {
          a.preventDefault();
        }
      }),
      getOptionProps: ({ index: a, option: s }) => {
        const f = (L ? C : [
          C
        ]).some((w) => w != null && U(s, w)), I = M ? M(s) : false;
        return {
          key: (pe == null ? void 0 : pe(s)) ?? E(s),
          tabIndex: -1,
          role: "option",
          id: `${Y}-option-${a}`,
          onMouseMove: He,
          onClick: vt,
          onTouchStart: yt,
          "data-option-index": a,
          "aria-disabled": I,
          "aria-selected": f
        };
      },
      id: Y,
      inputValue: $,
      value: C,
      dirty: ce,
      expanded: K && Ee,
      popupOpen: K,
      focused: me || Z !== -1,
      anchorEl: Ee,
      setAnchorEl: Mt,
      focusedTag: Z,
      groupedOptions: at
    };
  }
  function go(e) {
    return Vt("MuiListSubheader", e);
  }
  rn("MuiListSubheader", [
    "root",
    "colorPrimary",
    "colorInherit",
    "gutters",
    "inset",
    "sticky"
  ]);
  const ho = (e) => {
    const { classes: t, color: r, disableGutters: o, inset: l, disableSticky: i } = e, x = {
      root: [
        "root",
        r !== "default" && `color${ut(r)}`,
        !o && "gutters",
        l && "inset",
        !i && "sticky"
      ]
    };
    return _t(x, go, t);
  }, xo = Q("li", {
    name: "MuiListSubheader",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== "default" && t[`color${ut(r.color)}`],
        !r.disableGutters && t.gutters,
        r.inset && t.inset,
        !r.disableSticky && t.sticky
      ];
    }
  })(Ie(({ theme: e }) => ({
    boxSizing: "border-box",
    lineHeight: "48px",
    listStyle: "none",
    color: (e.vars || e).palette.text.secondary,
    fontFamily: e.typography.fontFamily,
    fontWeight: e.typography.fontWeightMedium,
    fontSize: e.typography.pxToRem(14),
    variants: [
      {
        props: {
          color: "primary"
        },
        style: {
          color: (e.vars || e).palette.primary.main
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: "inherit"
        }
      },
      {
        props: ({ ownerState: t }) => !t.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: t }) => t.inset,
        style: {
          paddingLeft: 72
        }
      },
      {
        props: ({ ownerState: t }) => !t.disableSticky,
        style: {
          position: "sticky",
          top: 0,
          zIndex: 1,
          backgroundColor: (e.vars || e).palette.background.paper
        }
      }
    ]
  }))), Tt = d.forwardRef(function(t, r) {
    const o = At({
      props: t,
      name: "MuiListSubheader"
    }), { className: l, color: i = "default", component: x = "li", disableGutters: p = false, disableSticky: y = false, inset: g = false, ...u } = o, h = {
      ...o,
      color: i,
      component: x,
      disableGutters: p,
      disableSticky: y,
      inset: g
    }, c = ho(h);
    return n.jsx(xo, {
      as: x,
      className: qe(c.root, l),
      ref: r,
      ownerState: h,
      ...u
    });
  });
  Tt && (Tt.muiSkipListHighlight = true);
  function mo(e) {
    return Vt("MuiAutocomplete", e);
  }
  const S = rn("MuiAutocomplete", [
    "root",
    "expanded",
    "fullWidth",
    "focused",
    "focusVisible",
    "tag",
    "tagSizeSmall",
    "tagSizeMedium",
    "hasPopupIcon",
    "hasClearIcon",
    "inputRoot",
    "input",
    "inputFocused",
    "endAdornment",
    "clearIndicator",
    "popupIndicator",
    "popupIndicatorOpen",
    "popper",
    "popperDisablePortal",
    "paper",
    "listbox",
    "loading",
    "noOptions",
    "option",
    "groupLabel",
    "groupUl"
  ]);
  var Zt, en;
  const bo = (e) => {
    const { classes: t, disablePortal: r, expanded: o, focused: l, fullWidth: i, hasClearIcon: x, hasPopupIcon: p, inputFocused: y, popupOpen: g, size: u } = e, h = {
      root: [
        "root",
        o && "expanded",
        l && "focused",
        i && "fullWidth",
        x && "hasClearIcon",
        p && "hasPopupIcon"
      ],
      inputRoot: [
        "inputRoot"
      ],
      input: [
        "input",
        y && "inputFocused"
      ],
      tag: [
        "tag",
        `tagSize${ut(u)}`
      ],
      endAdornment: [
        "endAdornment"
      ],
      clearIndicator: [
        "clearIndicator"
      ],
      popupIndicator: [
        "popupIndicator",
        g && "popupIndicatorOpen"
      ],
      popper: [
        "popper",
        r && "popperDisablePortal"
      ],
      paper: [
        "paper"
      ],
      listbox: [
        "listbox"
      ],
      loading: [
        "loading"
      ],
      noOptions: [
        "noOptions"
      ],
      option: [
        "option"
      ],
      groupLabel: [
        "groupLabel"
      ],
      groupUl: [
        "groupUl"
      ]
    };
    return _t(h, mo, t);
  }, yo = Q("div", {
    name: "MuiAutocomplete",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e, { fullWidth: o, hasClearIcon: l, hasPopupIcon: i, inputFocused: x, size: p } = r;
      return [
        {
          [`& .${S.tag}`]: t.tag
        },
        {
          [`& .${S.tag}`]: t[`tagSize${ut(p)}`]
        },
        {
          [`& .${S.inputRoot}`]: t.inputRoot
        },
        {
          [`& .${S.input}`]: t.input
        },
        {
          [`& .${S.input}`]: x && t.inputFocused
        },
        t.root,
        o && t.fullWidth,
        i && t.hasPopupIcon,
        l && t.hasClearIcon
      ];
    }
  })({
    [`&.${S.focused} .${S.clearIndicator}`]: {
      visibility: "visible"
    },
    "@media (pointer: fine)": {
      [`&:hover .${S.clearIndicator}`]: {
        visibility: "visible"
      }
    },
    [`& .${S.tag}`]: {
      margin: 3,
      maxWidth: "calc(100% - 6px)"
    },
    [`& .${S.inputRoot}`]: {
      [`.${S.hasPopupIcon}&, .${S.hasClearIcon}&`]: {
        paddingRight: 30
      },
      [`.${S.hasPopupIcon}.${S.hasClearIcon}&`]: {
        paddingRight: 56
      },
      [`& .${S.input}`]: {
        width: 0,
        minWidth: 30
      }
    },
    [`& .${Ot.root}`]: {
      paddingBottom: 1,
      "& .MuiInput-input": {
        padding: "4px 4px 4px 0px"
      }
    },
    [`& .${Ot.root}.${je.sizeSmall}`]: {
      [`& .${Ot.input}`]: {
        padding: "2px 4px 3px 0"
      }
    },
    [`& .${Et.root}`]: {
      padding: 9,
      [`.${S.hasPopupIcon}&, .${S.hasClearIcon}&`]: {
        paddingRight: 39
      },
      [`.${S.hasPopupIcon}.${S.hasClearIcon}&`]: {
        paddingRight: 65
      },
      [`& .${S.input}`]: {
        padding: "7.5px 4px 7.5px 5px"
      },
      [`& .${S.endAdornment}`]: {
        right: 9
      }
    },
    [`& .${Et.root}.${je.sizeSmall}`]: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 6,
      [`& .${S.input}`]: {
        padding: "2.5px 4px 2.5px 8px"
      }
    },
    [`& .${Te.root}`]: {
      paddingTop: 19,
      paddingLeft: 8,
      [`.${S.hasPopupIcon}&, .${S.hasClearIcon}&`]: {
        paddingRight: 39
      },
      [`.${S.hasPopupIcon}.${S.hasClearIcon}&`]: {
        paddingRight: 65
      },
      [`& .${Te.input}`]: {
        padding: "7px 4px"
      },
      [`& .${S.endAdornment}`]: {
        right: 9
      }
    },
    [`& .${Te.root}.${je.sizeSmall}`]: {
      paddingBottom: 1,
      [`& .${Te.input}`]: {
        padding: "2.5px 4px"
      }
    },
    [`& .${je.hiddenLabel}`]: {
      paddingTop: 8
    },
    [`& .${Te.root}.${je.hiddenLabel}`]: {
      paddingTop: 0,
      paddingBottom: 0,
      [`& .${S.input}`]: {
        paddingTop: 16,
        paddingBottom: 17
      }
    },
    [`& .${Te.root}.${je.hiddenLabel}.${je.sizeSmall}`]: {
      [`& .${S.input}`]: {
        paddingTop: 8,
        paddingBottom: 9
      }
    },
    [`& .${S.input}`]: {
      flexGrow: 1,
      textOverflow: "ellipsis",
      opacity: 0
    },
    variants: [
      {
        props: {
          fullWidth: true
        },
        style: {
          width: "100%"
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          [`& .${S.tag}`]: {
            margin: 2,
            maxWidth: "calc(100% - 4px)"
          }
        }
      },
      {
        props: {
          inputFocused: true
        },
        style: {
          [`& .${S.input}`]: {
            opacity: 1
          }
        }
      },
      {
        props: {
          multiple: true
        },
        style: {
          [`& .${S.inputRoot}`]: {
            flexWrap: "wrap"
          }
        }
      }
    ]
  }), vo = Q("div", {
    name: "MuiAutocomplete",
    slot: "EndAdornment",
    overridesResolver: (e, t) => t.endAdornment
  })({
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(0, -50%)"
  }), Co = Q(Je, {
    name: "MuiAutocomplete",
    slot: "ClearIndicator",
    overridesResolver: (e, t) => t.clearIndicator
  })({
    marginRight: -2,
    padding: 4,
    visibility: "hidden"
  }), jo = Q(Je, {
    name: "MuiAutocomplete",
    slot: "PopupIndicator",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.popupIndicator,
        r.popupOpen && t.popupIndicatorOpen
      ];
    }
  })({
    padding: 2,
    marginRight: -2,
    variants: [
      {
        props: {
          popupOpen: true
        },
        style: {
          transform: "rotate(180deg)"
        }
      }
    ]
  }), Io = Q(pn, {
    name: "MuiAutocomplete",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        {
          [`& .${S.option}`]: t.option
        },
        t.popper,
        r.disablePortal && t.popperDisablePortal
      ];
    }
  })(Ie(({ theme: e }) => ({
    zIndex: (e.vars || e).zIndex.modal,
    variants: [
      {
        props: {
          disablePortal: true
        },
        style: {
          position: "absolute"
        }
      }
    ]
  }))), So = Q(Dt, {
    name: "MuiAutocomplete",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })(Ie(({ theme: e }) => ({
    ...e.typography.body1,
    overflow: "auto"
  }))), wo = Q("div", {
    name: "MuiAutocomplete",
    slot: "Loading",
    overridesResolver: (e, t) => t.loading
  })(Ie(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), ko = Q("div", {
    name: "MuiAutocomplete",
    slot: "NoOptions",
    overridesResolver: (e, t) => t.noOptions
  })(Ie(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), Oo = Q("ul", {
    name: "MuiAutocomplete",
    slot: "Listbox",
    overridesResolver: (e, t) => t.listbox
  })(Ie(({ theme: e }) => ({
    listStyle: "none",
    margin: 0,
    padding: "8px 0",
    maxHeight: "40vh",
    overflow: "auto",
    position: "relative",
    [`& .${S.option}`]: {
      minHeight: 48,
      display: "flex",
      overflow: "hidden",
      justifyContent: "flex-start",
      alignItems: "center",
      cursor: "pointer",
      paddingTop: 6,
      boxSizing: "border-box",
      outline: "0",
      WebkitTapHighlightColor: "transparent",
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16,
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      },
      [`&.${S.focused}`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      '&[aria-disabled="true"]': {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`&.${S.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      '&[aria-selected="true"]': {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : kt(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${S.focused}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : kt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: (e.vars || e).palette.action.selected
          }
        },
        [`&.${S.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : kt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }
  }))), Po = Q(Tt, {
    name: "MuiAutocomplete",
    slot: "GroupLabel",
    overridesResolver: (e, t) => t.groupLabel
  })(Ie(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    top: -8
  }))), Lo = Q("ul", {
    name: "MuiAutocomplete",
    slot: "GroupUl",
    overridesResolver: (e, t) => t.groupUl
  })({
    padding: 0,
    [`& .${S.option}`]: {
      paddingLeft: 24
    }
  }), $o = d.forwardRef(function(t, r) {
    const o = At({
      props: t,
      name: "MuiAutocomplete"
    }), { autoComplete: l = false, autoHighlight: i = false, autoSelect: x = false, blurOnSelect: p = false, ChipProps: y, className: g, clearIcon: u = Zt || (Zt = n.jsx(An, {
      fontSize: "small"
    })), clearOnBlur: h = !o.freeSolo, clearOnEscape: c = false, clearText: b = "Clear", closeText: m = "Close", componentsProps: k, defaultValue: j = o.multiple ? [] : null, disableClearable: O = false, disableCloseOnSelect: V = false, disabled: M = false, disabledItemsFocusable: pe = false, disableListWrap: G = false, disablePortal: D = false, filterOptions: te, filterSelectedOptions: ne = false, forcePopupIcon: xe = "auto", freeSolo: Se = false, fullWidth: U = false, getLimitTagsText: L = (P) => `+${P}`, getOptionDisabled: De, getOptionKey: Me, getOptionLabel: we, isOptionEqualToValue: ie, groupBy: ke, handleHomeEndKeys: Qe = !o.freeSolo, id: ze, includeInputInList: Ye = false, inputValue: F, limitTags: Re = -1, ListboxComponent: Xe, ListboxProps: Y, loading: E = false, loadingText: We = "Loading\u2026", multiple: Ne = false, noOptionsText: R = "No options", onChange: X, onClose: Ee, onHighlightChange: Mt, onInputChange: Z, onOpen: Ze, open: pt, openOnFocus: H = false, openText: et = "Open", options: C, PaperComponent: ft, PopperComponent: $, popupIcon: Oe = en || (en = n.jsx(wn, {})), readOnly: me = false, renderGroup: tt, renderInput: Pe, renderOption: fe, renderTags: Ge, selectOnFocus: zt = !o.freeSolo, size: Le = "medium", slots: nt = {}, slotProps: K = {}, value: A, ...oe } = o, { getRootProps: ot, getInputProps: be, getInputLabelProps: gt, getPopupIndicatorProps: de, getClearProps: se, getTagProps: ht, getListboxProps: Be, getOptionProps: xt, value: re, dirty: ye, expanded: ge, id: $e, popupOpen: le, focused: st, focusedTag: rt, anchorEl: ve, setAnchorEl: mt, inputValue: bt, groupedOptions: Ce } = fo({
      ...o,
      componentName: "Autocomplete"
    }), Fe = !O && !M && ye && !me, He = (!Se || xe === true) && xe !== false, { onMouseDown: yt } = be(), { ref: vt, ...Ct } = Be(), Ue = we || ((P) => P.label ?? P), B = {
      ...o,
      disablePortal: D,
      expanded: ge,
      focused: st,
      fullWidth: U,
      getOptionLabel: Ue,
      hasClearIcon: Fe,
      hasPopupIcon: He,
      inputFocused: rt === -1,
      popupOpen: le,
      size: Le
    }, W = bo(B), ce = {
      slots: {
        paper: ft,
        popper: $,
        ...nt
      },
      slotProps: {
        chip: y,
        listbox: Y,
        ...k,
        ...K
      }
    }, [at, a] = wt("listbox", {
      elementType: Oo,
      externalForwardedProps: ce,
      ownerState: B,
      className: W.listbox,
      additionalProps: Ct,
      ref: vt
    }), [s, f] = wt("paper", {
      elementType: Dt,
      externalForwardedProps: ce,
      ownerState: B,
      className: W.paper
    }), [I, w] = wt("popper", {
      elementType: pn,
      externalForwardedProps: ce,
      ownerState: B,
      className: W.popper,
      additionalProps: {
        disablePortal: D,
        style: {
          width: ve ? ve.clientWidth : null
        },
        role: "presentation",
        anchorEl: ve,
        open: le
      }
    });
    let T;
    if (Ne && re.length > 0) {
      const P = (ue) => ({
        className: W.tag,
        disabled: M,
        ...ht(ue)
      });
      Ge ? T = Ge(re, P, B) : T = re.map((ue, he) => {
        const { key: Ke, ...bn } = P({
          index: he
        });
        return n.jsx(fn, {
          label: Ue(ue),
          size: Le,
          ...bn,
          ...ce.slotProps.chip
        }, Ke);
      });
    }
    if (Re > -1 && Array.isArray(T)) {
      const P = T.length - Re;
      !st && P > 0 && (T = T.splice(0, Re), T.push(n.jsx("span", {
        className: W.tag,
        children: L(P)
      }, T.length)));
    }
    const ee = tt || ((P) => n.jsxs("li", {
      children: [
        n.jsx(Po, {
          className: W.groupLabel,
          ownerState: B,
          component: "div",
          children: P.group
        }),
        n.jsx(Lo, {
          className: W.groupUl,
          ownerState: B,
          children: P.children
        })
      ]
    }, P.key)), mn = fe || ((P, ue) => {
      const { key: he, ...Ke } = P;
      return n.jsx("li", {
        ...Ke,
        children: Ue(ue)
      }, he);
    }), Rt = (P, ue) => {
      const he = xt({
        option: P,
        index: ue
      });
      return mn({
        ...he,
        className: W.option
      }, P, {
        selected: he["aria-selected"],
        index: ue,
        inputValue: bt
      }, B);
    }, Wt = ce.slotProps.clearIndicator, Nt = ce.slotProps.popupIndicator;
    return n.jsxs(d.Fragment, {
      children: [
        n.jsx(yo, {
          ref: r,
          className: qe(W.root, g),
          ownerState: B,
          ...ot(oe),
          children: Pe({
            id: $e,
            disabled: M,
            fullWidth: true,
            size: Le === "small" ? "small" : void 0,
            InputLabelProps: gt(),
            InputProps: {
              ref: mt,
              className: W.inputRoot,
              startAdornment: T,
              onMouseDown: (P) => {
                P.target === P.currentTarget && yt(P);
              },
              ...(Fe || He) && {
                endAdornment: n.jsxs(vo, {
                  className: W.endAdornment,
                  ownerState: B,
                  children: [
                    Fe ? n.jsx(Co, {
                      ...se(),
                      "aria-label": b,
                      title: b,
                      ownerState: B,
                      ...Wt,
                      className: qe(W.clearIndicator, Wt == null ? void 0 : Wt.className),
                      children: u
                    }) : null,
                    He ? n.jsx(jo, {
                      ...de(),
                      disabled: M,
                      "aria-label": le ? m : et,
                      title: le ? m : et,
                      ownerState: B,
                      ...Nt,
                      className: qe(W.popupIndicator, Nt == null ? void 0 : Nt.className),
                      children: Oe
                    }) : null
                  ]
                })
              }
            },
            inputProps: {
              className: W.input,
              disabled: M,
              readOnly: me,
              ...be()
            }
          })
        }),
        ve ? n.jsx(Io, {
          as: I,
          ...w,
          children: n.jsxs(So, {
            as: s,
            ...f,
            children: [
              E && Ce.length === 0 ? n.jsx(wo, {
                className: W.loading,
                ownerState: B,
                children: We
              }) : null,
              Ce.length === 0 && !Se && !E ? n.jsx(ko, {
                className: W.noOptions,
                ownerState: B,
                role: "presentation",
                onMouseDown: (P) => {
                  P.preventDefault();
                },
                children: R
              }) : null,
              Ce.length > 0 ? n.jsx(at, {
                as: Xe,
                ...a,
                children: Ce.map((P, ue) => ke ? ee({
                  key: P.key,
                  group: P.group,
                  children: P.options.map((he, Ke) => Rt(he, P.index + Ke))
                }) : Rt(P, ue))
              }) : null
            ]
          })
        }) : null
      ]
    });
  }), _ = io({
    createStyledComponent: Q("div", {
      name: "MuiGrid2",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          r.container && t.container
        ];
      }
    }),
    componentName: "MuiGrid2",
    useThemeProps: (e) => At({
      props: e,
      name: "MuiGrid2"
    }),
    useTheme: kn
  }), To = ae(n.jsx("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2m-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
  }), "CheckBox"), _o = ae(n.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
  }), "CheckCircle"), hn = ae(n.jsx("path", {
    d: "M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
  }), "ChevronRight"), Vo = ae(n.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"
  }), "Info"), Ao = ae(n.jsx("path", {
    d: "M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7"
  }), "Lightbulb"), Do = ae(n.jsx("path", {
    d: "M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"
  }), "Navigation"), Mo = ae(n.jsx("path", {
    d: "M8 5v14l11-7z"
  }), "PlayArrow"), zo = ae(n.jsx("path", {
    d: "M22 9v6c0 1.1-.9 2-2 2h-1v-2h1V9H4v6h6v2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-7.5 10 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62zm-2.5 5 1.09-2.41L18 15.5l-2.41-1.09L14.5 12l-1.09 2.41L11 15.5l2.41 1.09zm2.5-5 .62-1.38L19 12l-1.38-.62L17 10l-.62 1.38L15 12l1.38.62z"
  }), "SmartButton"), Ro = ae(n.jsx("path", {
    d: "M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4m-4-2V5c0-.55.45-1 1-1s1 .45 1 1v1h-1v1h1v2h-1v1h1v1z"
  }), "Thermostat"), Wo = ae(n.jsx("path", {
    d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
  }), "ToggleOn"), No = ae(n.jsx("path", {
    d: "M3 17v2h6v-2zM3 5v2h10V5zm10 16v-2h8v-2h-8v-2h-2v6zM7 9v2H3v2h4v2h2V9zm14 4v-2H11v2zm-6-4h2V7h4V5h-4V3h-2z"
  }), "Tune");
  function Eo(e) {
    if (!e || !e.startsWith("b64:")) return null;
    try {
      const t = e.slice(4), r = atob(t), o = new Uint8Array(r.length);
      for (let x = 0; x < r.length; x++) o[x] = r.charCodeAt(x);
      const l = new TextDecoder("utf-8").decode(o), i = JSON.parse(l);
      return Array.isArray(i) ? i : (console.warn("ListCollectionWidget: Item config is not an array"), null);
    } catch (t) {
      return console.error("ListCollectionWidget: Failed to decode item config", t), null;
    }
  }
  function tn(e, t) {
    if (!t || !e) return null;
    const r = `${t}.val`, o = e[r];
    if (o != null) return o;
    const l = e[t];
    return typeof l == "object" && l !== null && "val" in l ? l.val : null;
  }
  function Go(e) {
    if (!e) return null;
    try {
      if (typeof e == "string") {
        const t = JSON.parse(e);
        if (Array.isArray(t)) return t;
      }
      if (Array.isArray(e)) return e;
    } catch (t) {
      console.warn("ListCollectionWidget: Failed to parse JSON payload from OID", t);
    }
    return null;
  }
  function Bo() {
    const e = d.useContext(an), t = e.widget.data, r = d.useRef(/* @__PURE__ */ new Map()), o = d.useMemo(() => Eo(t.items), [
      t.items
    ]), l = d.useMemo(() => {
      const g = o ?? [];
      let u = [];
      if (t.oid && e.values) {
        const c = tn(e.values, t.oid);
        u = Go(c) ?? [];
      }
      if (u.length === 0) return g;
      const h = /* @__PURE__ */ new Map();
      for (const c of g) c.id && h.set(c.id, c);
      for (const c of u) if (c.id) {
        const b = h.get(c.id);
        b ? h.set(c.id, {
          ...b,
          ...c,
          actionConfig: {
            ...b.actionConfig,
            ...c.actionConfig
          }
        }) : h.set(c.id, c);
      }
      return Array.from(h.values());
    }, [
      o,
      t.oid,
      e.values
    ]), i = d.useMemo(() => {
      if (l.length === 0) return [];
      const g = e.values;
      return l.map((u) => {
        const h = {
          ...u,
          resolvedValue: null,
          isLoading: false
        };
        if (u.oid && g) {
          const c = tn(g, u.oid);
          c !== null && (h.resolvedValue = c);
        }
        return r.current.has(u.id) && (h.resolvedValue = r.current.get(u.id)), h;
      });
    }, [
      l,
      e.values
    ]), x = d.useCallback((g, u, h = true) => {
      const c = l.find((b) => b.id === g);
      if (!(c == null ? void 0 : c.oid)) {
        console.warn(`ListCollectionWidget: Item ${g} has no OID`);
        return;
      }
      if (!(c.actionType === "slider" && (r.current.set(g, u), !h))) {
        if (c.actionType === "switch") {
          const b = c.actionConfig, m = (b == null ? void 0 : b.switchOnValue) ?? true, k = (b == null ? void 0 : b.switchOffValue) ?? false, j = typeof u == "boolean" && u ? m : k;
          e.setValue(c.oid, j);
          return;
        }
        if (c.actionType === "checkbox") {
          const b = c.actionConfig, m = (b == null ? void 0 : b.checkboxCheckedValue) ?? true, k = (b == null ? void 0 : b.checkboxUncheckedValue) ?? false, j = typeof u == "boolean" && u ? m : k;
          e.setValue(c.oid, j);
          return;
        }
        e.setValue(c.oid, u);
      }
    }, [
      l,
      e
    ]), p = d.useCallback((g) => {
      const u = l.find((c) => c.id === g);
      if (!(u == null ? void 0 : u.oid)) {
        console.warn(`ListCollectionWidget: Item ${g} has no OID`);
        return;
      }
      const h = r.current.get(g);
      h !== void 0 && (e.setValue(u.oid, h), r.current.delete(g));
    }, [
      l,
      e
    ]), y = d.useCallback((g, u) => {
      var _a;
      const h = l.find((c) => c.id === g);
      if (!h) {
        console.warn(`ListCollectionWidget: Item ${g} not found`);
        return;
      }
      switch (h.actionType) {
        case "switch": {
          const c = h.actionConfig;
          if (h.oid) {
            const b = (_a = i.find((V) => V.id === g)) == null ? void 0 : _a.resolvedValue, m = (c == null ? void 0 : c.switchOnValue) ?? true, k = (c == null ? void 0 : c.switchOffValue) ?? false, O = b === m ? k : m;
            e.setValue(h.oid, O);
          }
          break;
        }
        case "slider":
        case "checkbox":
          h.oid && u !== void 0 && x(g, u, true);
          break;
        case "button": {
          const c = h.actionConfig;
          h.oid && (c == null ? void 0 : c.buttonValue) !== void 0 && e.setValue(h.oid, c.buttonValue);
          break;
        }
        case "navigation": {
          const c = h.actionConfig;
          if ((c == null ? void 0 : c.targetState) && (c == null ? void 0 : c.targetValue) !== void 0 && e.setValue(c.targetState, c.targetValue), c == null ? void 0 : c.navigationTarget) {
            const b = c.navigationTarget, m = c.navigationParams ? `?${c.navigationParams}` : "";
            window.location.hash = `#${b}${m}`;
          }
          break;
        }
      }
    }, [
      l,
      e,
      i,
      x
    ]);
    return {
      items: i,
      updateItemValue: x,
      executeAction: y,
      commitSliderValue: p,
      isLoading: false
    };
  }
  const nn = {
    valueOn: "list_value_on",
    valueOff: "list_value_off"
  };
  function on(e, t) {
    var _a;
    if (typeof window < "u") {
      const r = window;
      if ((_a = r.visBind) == null ? void 0 : _a.translate) return r.visBind.translate(e);
    }
    return t;
  }
  function sn(e) {
    switch (e) {
      case "switch":
        return n.jsx(Ht, {});
      case "slider":
        return n.jsx(Ro, {});
      case "checkbox":
        return n.jsx(_o, {});
      case "navigation":
        return n.jsx(hn, {});
      case "button":
        return n.jsx(Ht, {});
      default:
        return n.jsx(Vo, {});
    }
  }
  function Fo(e) {
    const t = e.resolvedValue;
    return t == null ? false : typeof t == "boolean" ? t : typeof t == "number" ? t !== 0 : typeof t == "string" ? t.length > 0 && t !== "false" && t !== "0" : false;
  }
  function Ho(e) {
    if (e == null) return "-";
    if (typeof e == "boolean") return e ? on(nn.valueOn, "On") : on(nn.valueOff, "Off");
    if (typeof e == "number") return e.toLocaleString();
    if (typeof e == "object" && e !== null) {
      if (Object.keys(e).length === 0) return JSON.stringify(e, null, 2);
      try {
        return JSON.stringify(e, null, 2);
      } catch {
        return "[Object]";
      }
    }
    return String(e);
  }
  function Uo({ item: e, onValueChange: t, onCommitSlider: r }) {
    const o = e.actionConfig, l = (o == null ? void 0 : o.sliderMin) ?? 0, i = (o == null ? void 0 : o.sliderMax) ?? 100, x = (o == null ? void 0 : o.sliderStep) ?? 1, p = (o == null ? void 0 : o.sliderUnit) ?? "", y = (o == null ? void 0 : o.showValue) ?? true, g = d.useCallback(() => {
      if (typeof e.resolvedValue == "number") return Math.max(l, Math.min(i, e.resolvedValue));
      if (typeof e.resolvedValue == "string") {
        const m = parseFloat(e.resolvedValue);
        if (!isNaN(m)) return Math.max(l, Math.min(i, m));
      }
      return l;
    }, [
      e.resolvedValue,
      l,
      i
    ]), [u, h] = d.useState(g);
    d.useEffect(() => {
      h(g());
    }, [
      g
    ]);
    const c = d.useCallback((m, k) => {
      typeof k == "number" && (h(k), t(k, false));
    }, [
      t
    ]), b = d.useCallback((m, k) => {
      typeof k == "number" && (t(k, true), r && r(e.id));
    }, [
      e.id,
      t,
      r
    ]);
    return n.jsxs(J, {
      sx: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        gap: 2
      },
      children: [
        n.jsx(Wn, {
          value: u,
          onChange: c,
          onChangeCommitted: b,
          min: l,
          max: i,
          step: x,
          disabled: e.disabled,
          size: "small",
          valueLabelDisplay: y ? "auto" : "off",
          valueLabelFormat: (m) => `${m}${p}`,
          sx: {
            flex: 1
          }
        }),
        y && n.jsxs(N, {
          variant: "body2",
          color: "text.secondary",
          sx: {
            minWidth: 48,
            textAlign: "right"
          },
          children: [
            u,
            p
          ]
        })
      ]
    });
  }
  function Ko({ item: e, variant: t, showDivider: r, styling: o, onValueChange: l, onAction: i, onCommitSlider: x }) {
    const p = Fo(e), y = p ? o.itemBackgroundActive || "transparent" : o.itemBackground || "transparent", g = p ? o.textColorActive || "inherit" : o.textColor || "inherit", u = d.useMemo(() => {
      if (t === "text") return null;
      const m = p && e.iconActive ? e.iconActive : e.icon;
      return m && (m.startsWith("http") || m.startsWith("/") || m.startsWith("data:")) ? n.jsx(_n, {
        src: m,
        sx: {
          width: t === "avatar" ? 40 : 24,
          height: t === "avatar" ? 40 : 24
        },
        children: n.jsx(Ao, {})
      }) : sn(e.actionType);
    }, [
      t,
      e.icon,
      e.iconActive,
      p,
      e.actionType
    ]), h = d.useMemo(() => Ho(e.resolvedValue), [
      e.resolvedValue
    ]), c = d.useCallback((m, k = true) => {
      l(m, k);
    }, [
      l
    ]), b = d.useCallback(() => {
      var _a;
      switch (e.actionType) {
        case "switch": {
          const k = ((_a = e.actionConfig) == null ? void 0 : _a.switchOnValue) ?? true, j = e.resolvedValue === k;
          return n.jsx($t, {
            checked: j,
            onChange: (O, V) => c(V, true),
            disabled: e.disabled,
            edge: "end"
          });
        }
        case "slider":
          return n.jsx(Uo, {
            item: e,
            onValueChange: c,
            onCommitSlider: x
          });
        case "button":
          return n.jsx(Je, {
            onClick: () => i(),
            disabled: e.disabled,
            size: "small",
            edge: "end",
            children: n.jsx(Mo, {})
          });
        case "checkbox": {
          const m = e.actionConfig, k = (m == null ? void 0 : m.checkboxCheckedValue) ?? true;
          m == null ? void 0 : m.checkboxUncheckedValue;
          const j = e.resolvedValue === k;
          return n.jsx(Vn, {
            checked: j,
            onChange: (O, V) => c(V, true),
            disabled: e.disabled,
            edge: "end"
          });
        }
        case "navigation":
          return n.jsx(hn, {
            color: "action"
          });
        default:
          return n.jsx(N, {
            variant: "body2",
            color: "text.secondary",
            sx: {
              maxWidth: 120,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: h
          });
      }
    }, [
      e,
      c,
      i,
      h,
      x
    ]);
    return n.jsxs(n.Fragment, {
      children: [
        n.jsx(un, {
          disablePadding: e.actionType !== "display",
          sx: {
            backgroundColor: y,
            color: g,
            transition: "background-color 0.2s ease"
          },
          secondaryAction: e.actionType !== "slider" && e.actionType !== "display" ? b() : void 0,
          children: e.actionType === "navigation" ? n.jsxs(dn, {
            onClick: () => i(),
            children: [
              t !== "text" && u && n.jsx(lt, {
                sx: {
                  minWidth: t === "avatar" ? 56 : 40
                },
                children: u
              }),
              n.jsx(Lt, {
                primary: e.label,
                secondary: t === "multiline" ? e.secondaryText : void 0,
                secondaryTypographyProps: {
                  noWrap: true
                }
              }),
              t !== "multiline" && h && n.jsx(N, {
                variant: "body2",
                color: "text.secondary",
                sx: {
                  ml: 1
                },
                children: h
              })
            ]
          }) : n.jsxs(J, {
            sx: {
              width: "100%",
              display: "flex",
              alignItems: "center",
              px: 2,
              py: 1
            },
            children: [
              t !== "text" && u && n.jsx(lt, {
                sx: {
                  minWidth: t === "avatar" ? 56 : 40
                },
                children: u
              }),
              n.jsx(Lt, {
                primary: e.label,
                secondary: t === "multiline" ? e.secondaryText : void 0,
                secondaryTypographyProps: {
                  noWrap: true
                },
                sx: {
                  flex: 1
                }
              }),
              t !== "multiline" && h && e.actionType === "display" && n.jsx(N, {
                variant: "body2",
                color: "text.secondary",
                sx: {
                  ml: 1
                },
                children: h
              }),
              e.actionType === "slider" && n.jsx(J, {
                sx: {
                  flex: 1,
                  ml: 2
                },
                children: b()
              })
            ]
          })
        }),
        r && n.jsx(ln, {})
      ]
    });
  }
  const qo = {
    noItemsConfigured: "list_no_items_configured"
  };
  function Jo(e, t) {
    var _a;
    if (typeof window < "u") {
      const r = window;
      if ((_a = r.visBind) == null ? void 0 : _a.translate) return r.visBind.translate(e);
    }
    return t;
  }
  function Qo() {
    const t = d.useContext(an).widget.data, { listDensity: r = "standard", listVariant: o = "icon", showDividers: l = true, itemBackground: i, itemBackgroundActive: x, textColor: p, textColorActive: y } = t, { items: g, updateItemValue: u, executeAction: h, commitSliderValue: c } = Bo();
    if (!g || g.length === 0) return n.jsx(J, {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        color: "text.secondary",
        fontStyle: "italic"
      },
      children: Jo(qo.noItemsConfigured, "No items configured")
    });
    const b = r === "compact";
    return n.jsx(cn, {
      dense: b,
      disablePadding: true,
      sx: {
        width: "100%",
        height: "100%",
        overflow: "auto",
        bgcolor: "background.paper"
      },
      children: g.map((m, k) => n.jsx(Ko, {
        item: m,
        variant: o,
        showDivider: l && k < g.length - 1,
        styling: {
          itemBackground: i,
          itemBackgroundActive: x,
          textColor: p,
          textColorActive: y
        },
        onValueChange: (j, O = true) => u(m.id, j, O),
        onAction: (j) => h(m.id, j),
        onCommitSlider: () => c(m.id)
      }, m.id))
    });
  }
  function Yo(e) {
    return {
      display: n.jsx(Ft, {
        fontSize: "small"
      }),
      switch: n.jsx(Wo, {
        fontSize: "small"
      }),
      slider: n.jsx(No, {
        fontSize: "small"
      }),
      button: n.jsx(zo, {
        fontSize: "small"
      }),
      checkbox: n.jsx(To, {
        fontSize: "small"
      }),
      navigation: n.jsx(Do, {
        fontSize: "small"
      })
    }[e] ?? n.jsx(Ft, {
      fontSize: "small"
    });
  }
  function Xo(e) {
    return {
      display: "default",
      switch: "success",
      slider: "primary",
      button: "secondary",
      checkbox: "info",
      navigation: "warning"
    }[e] ?? "default";
  }
  function Zo({ items: e, selectedItemId: t, onSelectItem: r, onDeleteItem: o, onReorderItems: l }) {
    const [i, x] = d.useState(null), [p, y] = d.useState(null), g = d.useRef(null), u = d.useCallback((j, O) => {
      x(O), j.dataTransfer && (j.dataTransfer.effectAllowed = "move"), g.current && j.dataTransfer.setDragImage(g.current, 0, 0);
    }, []), h = d.useCallback((j, O) => {
      j.preventDefault(), !(i === null || i === O) && y(O);
    }, [
      i
    ]), c = d.useCallback(() => {
      y(null);
    }, []), b = d.useCallback((j, O) => {
      if (j.preventDefault(), i === null || i === O) return;
      const V = [
        ...e
      ], [M] = V.splice(i, 1);
      V.splice(O, 0, M), l(V), x(null), y(null);
    }, [
      e,
      i,
      l
    ]), m = d.useCallback(() => {
      x(null), y(null);
    }, []), k = d.useCallback((j, O) => {
      j.stopPropagation(), o(O);
    }, [
      o
    ]);
    return e.length === 0 ? n.jsxs(J, {
      sx: {
        p: 3,
        textAlign: "center",
        color: "text.secondary"
      },
      children: [
        n.jsx(N, {
          variant: "body2",
          children: v.t("no_items_configured")
        }),
        n.jsx(N, {
          variant: "caption",
          children: v.t("click_add_item")
        })
      ]
    }) : n.jsx(cn, {
      disablePadding: true,
      children: e.map((j, O) => {
        const V = t === j.id, M = p === O, pe = i === O;
        return n.jsx(un, {
          disablePadding: true,
          secondaryAction: n.jsx(gn, {
            title: v.t("delete_item"),
            children: n.jsx(Je, {
              edge: "end",
              size: "small",
              onClick: (G) => k(G, j.id),
              color: "error",
              children: n.jsx(On, {
                fontSize: "small"
              })
            })
          }),
          sx: {
            opacity: pe ? 0.5 : 1,
            bgcolor: M ? "action.hover" : V ? "action.selected" : "transparent",
            borderLeft: M ? "3px solid" : "3px solid transparent",
            borderLeftColor: "primary.main",
            transition: "all 0.2s ease"
          },
          draggable: true,
          onDragStart: (G) => u(G, O),
          onDragOver: (G) => h(G, O),
          onDragLeave: c,
          onDrop: (G) => b(G, O),
          onDragEnd: m,
          children: n.jsxs(dn, {
            onClick: () => r(j.id),
            sx: {
              pr: 8
            },
            children: [
              n.jsx(lt, {
                sx: {
                  minWidth: 36,
                  cursor: "grab"
                },
                children: n.jsx(Dn, {
                  fontSize: "small",
                  color: "action"
                })
              }),
              n.jsx(lt, {
                sx: {
                  minWidth: 36
                },
                children: Yo(j.actionType)
              }),
              n.jsx(Lt, {
                primary: n.jsxs(J, {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    gap: 1
                  },
                  children: [
                    n.jsx(N, {
                      variant: "body2",
                      sx: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      children: j.label
                    }),
                    n.jsx(fn, {
                      label: j.actionType,
                      size: "small",
                      color: Xo(j.actionType),
                      sx: {
                        height: 20,
                        fontSize: "0.65rem"
                      }
                    })
                  ]
                }),
                secondary: j.oid ? n.jsx(N, {
                  variant: "caption",
                  color: "text.secondary",
                  sx: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    display: "block"
                  },
                  children: j.oid
                }) : null
              })
            ]
          })
        }, j.id);
      })
    });
  }
  const es = [
    {
      value: "display",
      label: "display_read_only"
    },
    {
      value: "switch",
      label: "switch_toggle"
    },
    {
      value: "slider",
      label: "slider_range"
    },
    {
      value: "button",
      label: "button_action"
    },
    {
      value: "checkbox",
      label: "checkbox"
    },
    {
      value: "navigation",
      label: "navigation_link"
    }
  ];
  function ts({ item: e, onUpdateItem: t, context: r }) {
    const o = d.useCallback((p, y) => {
      t({
        ...e,
        [p]: y
      });
    }, [
      e,
      t
    ]), l = d.useCallback((p, y) => {
      t({
        ...e,
        actionConfig: {
          ...e.actionConfig,
          [p]: y
        }
      });
    }, [
      e,
      t
    ]), i = d.useCallback((p) => {
      t({
        ...e,
        actionType: p,
        actionConfig: {}
      });
    }, [
      e,
      t
    ]), x = d.useMemo(() => {
      var _a;
      return ((_a = r == null ? void 0 : r.context) == null ? void 0 : _a.objects) ? r.context.objects.filter((p) => p.type === "state" && p._id).map((p) => {
        var _a2;
        return {
          id: p._id,
          name: ((_a2 = p.common) == null ? void 0 : _a2.name) ?? p._id
        };
      }) : [];
    }, [
      r
    ]);
    return n.jsxs(J, {
      sx: {
        p: 3
      },
      children: [
        n.jsx(N, {
          variant: "subtitle2",
          color: "primary",
          sx: {
            mb: 2
          },
          children: v.t("basic_settings")
        }),
        n.jsxs(_, {
          container: true,
          spacing: 2,
          children: [
            n.jsx(_, {
              size: {
                xs: 12
              },
              children: n.jsx(q, {
                fullWidth: true,
                label: v.t("label"),
                value: e.label,
                onChange: (p) => o("label", p.target.value),
                required: true,
                helperText: v.t("display_text_helper")
              })
            }),
            n.jsx(_, {
              size: {
                xs: 12
              },
              children: n.jsxs(Gt, {
                fullWidth: true,
                children: [
                  n.jsx(Bt, {
                    children: v.t("object_id")
                  }),
                  n.jsx($o, {
                    value: e.oid ?? "",
                    onChange: (p, y) => o("oid", y ?? void 0),
                    options: x.map((p) => p.id),
                    freeSolo: true,
                    renderInput: (p) => n.jsx(q, {
                      ...p,
                      label: v.t("object_id"),
                      helperText: v.t("select_or_enter_oid")
                    }),
                    renderOption: (p, y) => {
                      const g = x.find((u) => u.id === y);
                      return d.createElement("li", {
                        ...p,
                        key: y
                      }, n.jsxs(J, {
                        children: [
                          n.jsx(N, {
                            variant: "body2",
                            children: (g == null ? void 0 : g.name) ?? y
                          }),
                          n.jsx(N, {
                            variant: "caption",
                            color: "text.secondary",
                            children: y
                          })
                        ]
                      }));
                    }
                  })
                ]
              })
            }),
            n.jsx(_, {
              size: {
                xs: 12
              },
              children: n.jsxs(Gt, {
                fullWidth: true,
                children: [
                  n.jsx(Bt, {
                    children: v.t("action_type")
                  }),
                  n.jsx(Pn, {
                    value: e.actionType,
                    label: v.t("action_type"),
                    onChange: (p) => i(p.target.value),
                    children: es.map((p) => n.jsx(Gn, {
                      value: p.value,
                      children: v.t(p.label)
                    }, p.value))
                  })
                ]
              })
            }),
            n.jsx(_, {
              size: {
                xs: 12,
                sm: 6
              },
              children: n.jsx(Ut, {
                control: n.jsx($t, {
                  checked: e.visible ?? true,
                  onChange: (p) => o("visible", p.target.checked)
                }),
                label: v.t("visible")
              })
            }),
            n.jsx(_, {
              size: {
                xs: 12,
                sm: 6
              },
              children: n.jsx(Ut, {
                control: n.jsx($t, {
                  checked: e.disabled ?? false,
                  onChange: (p) => o("disabled", p.target.checked)
                }),
                label: v.t("disabled")
              })
            })
          ]
        }),
        n.jsx(ln, {
          sx: {
            my: 3
          }
        }),
        n.jsx(N, {
          variant: "subtitle2",
          color: "primary",
          sx: {
            mb: 2
          },
          children: v.t("action_configuration")
        }),
        n.jsx(Dt, {
          variant: "outlined",
          sx: {
            p: 2
          },
          children: ns(e, l)
        })
      ]
    });
  }
  function ns(e, t, r) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l;
    switch (e.actionType) {
      case "display":
        return n.jsx(N, {
          variant: "body2",
          color: "text.secondary",
          children: v.t("display_mode_info")
        });
      case "switch":
        return n.jsxs(_, {
          container: true,
          spacing: 2,
          children: [
            n.jsx(_, {
              size: {
                xs: 12,
                sm: 6
              },
              children: n.jsx(q, {
                fullWidth: true,
                label: v.t("value_for_on"),
                value: ((_a = e.actionConfig) == null ? void 0 : _a.switchOnValue) ?? true,
                onChange: (o) => t("switchOnValue", o.target.value === "true" ? true : o.target.value === "false" ? false : o.target.value),
                helperText: v.t("value_for_on_helper")
              })
            }),
            n.jsx(_, {
              size: {
                xs: 12,
                sm: 6
              },
              children: n.jsx(q, {
                fullWidth: true,
                label: v.t("value_for_off"),
                value: ((_b = e.actionConfig) == null ? void 0 : _b.switchOffValue) ?? false,
                onChange: (o) => t("switchOffValue", o.target.value === "true" ? true : o.target.value === "false" ? false : o.target.value),
                helperText: v.t("value_for_off_helper")
              })
            })
          ]
        });
      case "slider":
        return n.jsxs(_, {
          container: true,
          spacing: 2,
          children: [
            n.jsx(_, {
              size: {
                xs: 12,
                sm: 6
              },
              children: n.jsx(q, {
                fullWidth: true,
                type: "number",
                label: v.t("minimum_value"),
                value: ((_c = e.actionConfig) == null ? void 0 : _c.sliderMin) ?? 0,
                onChange: (o) => t("sliderMin", Number(o.target.value))
              })
            }),
            n.jsx(_, {
              size: {
                xs: 12,
                sm: 6
              },
              children: n.jsx(q, {
                fullWidth: true,
                type: "number",
                label: v.t("maximum_value"),
                value: ((_d = e.actionConfig) == null ? void 0 : _d.sliderMax) ?? 100,
                onChange: (o) => t("sliderMax", Number(o.target.value))
              })
            }),
            n.jsx(_, {
              size: {
                xs: 12,
                sm: 6
              },
              children: n.jsx(q, {
                fullWidth: true,
                type: "number",
                label: v.t("step_size"),
                value: ((_e2 = e.actionConfig) == null ? void 0 : _e2.sliderStep) ?? 1,
                onChange: (o) => t("sliderStep", Number(o.target.value)),
                inputProps: {
                  min: 0.1,
                  step: 0.1
                }
              })
            }),
            n.jsx(_, {
              size: {
                xs: 12,
                sm: 6
              },
              children: n.jsx(q, {
                fullWidth: true,
                label: v.t("unit"),
                value: ((_f = e.actionConfig) == null ? void 0 : _f.sliderUnit) ?? "",
                onChange: (o) => t("sliderUnit", o.target.value),
                placeholder: "%"
              })
            })
          ]
        });
      case "button":
        return n.jsxs(_, {
          container: true,
          spacing: 2,
          children: [
            n.jsx(_, {
              size: {
                xs: 12
              },
              children: n.jsx(q, {
                fullWidth: true,
                label: v.t("button_label"),
                value: ((_g = e.actionConfig) == null ? void 0 : _g.buttonLabel) ?? "Press",
                onChange: (o) => t("buttonLabel", o.target.value)
              })
            }),
            n.jsx(_, {
              size: {
                xs: 12
              },
              children: n.jsx(q, {
                fullWidth: true,
                label: v.t("value_to_send"),
                value: ((_h = e.actionConfig) == null ? void 0 : _h.buttonValue) ?? true,
                onChange: (o) => t("buttonValue", o.target.value === "true" ? true : o.target.value === "false" ? false : o.target.value),
                helperText: v.t("value_to_send_helper")
              })
            })
          ]
        });
      case "checkbox":
        return n.jsxs(_, {
          container: true,
          spacing: 2,
          children: [
            n.jsx(_, {
              size: {
                xs: 12,
                sm: 6
              },
              children: n.jsx(q, {
                fullWidth: true,
                label: v.t("checked_value"),
                value: ((_i = e.actionConfig) == null ? void 0 : _i.checkboxCheckedValue) ?? true,
                onChange: (o) => t("checkboxCheckedValue", o.target.value === "true" ? true : o.target.value === "false" ? false : o.target.value)
              })
            }),
            n.jsx(_, {
              size: {
                xs: 12,
                sm: 6
              },
              children: n.jsx(q, {
                fullWidth: true,
                label: v.t("unchecked_value"),
                value: ((_j = e.actionConfig) == null ? void 0 : _j.checkboxUncheckedValue) ?? false,
                onChange: (o) => t("checkboxUncheckedValue", o.target.value === "true" ? true : o.target.value === "false" ? false : o.target.value)
              })
            })
          ]
        });
      case "navigation":
        return n.jsxs(_, {
          container: true,
          spacing: 2,
          children: [
            n.jsx(_, {
              size: {
                xs: 12
              },
              children: n.jsx(q, {
                fullWidth: true,
                label: v.t("target_view"),
                value: ((_k = e.actionConfig) == null ? void 0 : _k.navigationTarget) ?? "",
                onChange: (o) => t("navigationTarget", o.target.value),
                helperText: v.t("target_view_helper")
              })
            }),
            n.jsx(_, {
              size: {
                xs: 12
              },
              children: n.jsx(q, {
                fullWidth: true,
                label: v.t("navigation_params"),
                value: ((_l = e.actionConfig) == null ? void 0 : _l.navigationParams) ?? "",
                onChange: (o) => t("navigationParams", o.target.value),
                placeholder: "key1=value1&key2=value2",
                helperText: v.t("navigation_params_helper")
              })
            })
          ]
        });
      default:
        return n.jsx(N, {
          variant: "body2",
          color: "text.secondary",
          children: v.t("action_type_helper")
        });
    }
  }
  function os() {
    return `item-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
  }
  function ss() {
    return {
      id: os(),
      label: "New Item",
      actionType: "display",
      visible: true,
      disabled: false
    };
  }
  function rs({ open: e, onClose: t, items: r, onSave: o, context: l }) {
    const [i, x] = d.useState(r), [p, y] = d.useState(null), [g, u] = d.useState(false), [h, c] = d.useState(false), b = d.useMemo(() => i.find((D) => D.id === p) ?? null, [
      i,
      p
    ]), m = d.useCallback(() => {
      const D = ss();
      x((te) => [
        ...te,
        D
      ]), y(D.id), u(true);
    }, []), k = d.useCallback((D) => {
      x((te) => te.filter((ne) => ne.id !== D)), p === D && y(null), u(true);
    }, [
      p
    ]), j = d.useCallback((D) => {
      x(D), u(true);
    }, []), O = d.useCallback((D) => {
      x((te) => te.map((ne) => ne.id === D.id ? D : ne)), u(true);
    }, []), V = d.useCallback(() => {
      o(i), u(false);
    }, [
      i,
      o
    ]), M = d.useCallback(() => {
      g ? c(true) : t();
    }, [
      g,
      t
    ]), pe = d.useCallback(() => {
      c(false), u(false), t();
    }, [
      t
    ]), G = d.useCallback(() => {
      c(false);
    }, []);
    return n.jsxs(Kt, {
      open: e,
      onClose: M,
      maxWidth: "lg",
      fullWidth: true,
      PaperProps: {
        sx: {
          height: "80vh",
          maxHeight: "80vh"
        }
      },
      children: [
        n.jsxs(Pt, {
          sx: {
            justifyContent: "space-between",
            px: 3,
            py: 1
          },
          children: [
            n.jsx(N, {
              variant: "h6",
              children: v.t("configure_list_items_title")
            }),
            n.jsxs(J, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1
              },
              children: [
                g && n.jsx(N, {
                  variant: "body2",
                  color: "warning.main",
                  children: v.t("unsaved_changes")
                }),
                n.jsx(Je, {
                  onClick: M,
                  size: "small",
                  children: n.jsx(Fn, {})
                })
              ]
            })
          ]
        }),
        n.jsx(qt, {
          sx: {
            p: 0,
            overflow: "hidden"
          },
          children: n.jsxs(_, {
            container: true,
            sx: {
              height: "100%"
            },
            children: [
              n.jsxs(_, {
                size: {
                  xs: 12,
                  md: 4
                },
                sx: {
                  borderRight: "1px solid",
                  borderColor: "divider",
                  height: "100%",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column"
                },
                children: [
                  n.jsx(J, {
                    sx: {
                      p: 2,
                      borderBottom: "1px solid",
                      borderColor: "divider"
                    },
                    children: n.jsx(gn, {
                      title: v.t("add_item"),
                      children: n.jsx(_e, {
                        variant: "contained",
                        startIcon: n.jsx(Mn, {}),
                        onClick: m,
                        fullWidth: true,
                        children: v.t("add_item")
                      })
                    })
                  }),
                  n.jsx(J, {
                    sx: {
                      flex: 1,
                      overflow: "auto"
                    },
                    children: n.jsx(Zo, {
                      items: i,
                      selectedItemId: p,
                      onSelectItem: y,
                      onDeleteItem: k,
                      onReorderItems: j
                    })
                  })
                ]
              }),
              n.jsx(_, {
                size: {
                  xs: 12,
                  md: 8
                },
                sx: {
                  height: "100%",
                  overflow: "auto"
                },
                children: b ? n.jsx(ts, {
                  item: b,
                  onUpdateItem: O,
                  context: l
                }) : n.jsx(J, {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: "text.secondary"
                  },
                  children: n.jsxs(J, {
                    sx: {
                      textAlign: "center"
                    },
                    children: [
                      n.jsx(N, {
                        variant: "h6",
                        gutterBottom: true,
                        children: v.t("no_item_selected")
                      }),
                      n.jsx(N, {
                        variant: "body2",
                        children: v.t("select_or_add_item")
                      })
                    ]
                  })
                })
              })
            ]
          })
        }),
        n.jsxs(Pt, {
          sx: {
            px: 3,
            py: 2
          },
          children: [
            n.jsx(_e, {
              onClick: M,
              color: "inherit",
              children: v.t("cancel")
            }),
            n.jsx(_e, {
              onClick: V,
              variant: "contained",
              disabled: !g,
              children: v.t("save_changes")
            })
          ]
        }),
        n.jsxs(Kt, {
          open: h,
          onClose: G,
          maxWidth: "xs",
          children: [
            n.jsx(Bn, {
              children: v.t("unsaved_changes_title")
            }),
            n.jsx(qt, {
              children: n.jsx(zn, {
                children: v.t("unsaved_changes_message")
              })
            }),
            n.jsxs(Pt, {
              children: [
                n.jsx(_e, {
                  onClick: G,
                  color: "inherit",
                  children: v.t("continue_editing")
                }),
                n.jsx(_e, {
                  onClick: pe,
                  color: "error",
                  variant: "contained",
                  children: v.t("discard_changes")
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function as(e) {
    if (!e || !e.startsWith("b64:")) return [];
    try {
      const t = e.slice(4), r = atob(t), o = new Uint8Array(r.length);
      for (let x = 0; x < r.length; x++) o[x] = r.charCodeAt(x);
      const l = new TextDecoder("utf-8").decode(o), i = JSON.parse(l);
      return Array.isArray(i) ? i : (console.warn("ListItemEditor: Item config is not an array"), []);
    } catch (t) {
      return console.error("ListItemEditor: Failed to decode item config", t), [];
    }
  }
  function is(e) {
    if (e.length === 0) return "";
    const t = JSON.stringify(e), r = new TextEncoder().encode(t);
    let o = "";
    for (let i = 0; i < r.length; i++) o += String.fromCharCode(r[i]);
    return `b64:${btoa(o)}`;
  }
  function ls(e, t, r, o) {
    const [l, i] = d.useState(false), [x, p] = d.useState([]), y = d.useMemo(() => {
      const c = t.items;
      return as(c);
    }, [
      t
    ]), g = d.useCallback(() => {
      p([
        ...y
      ]), i(true);
    }, [
      y
    ]), u = d.useCallback(() => {
      i(false);
    }, []), h = d.useCallback((c) => {
      const b = is(c);
      r({
        ...t,
        items: b
      }), i(false);
    }, [
      t,
      r
    ]);
    return n.jsxs(n.Fragment, {
      children: [
        n.jsx(_e, {
          variant: "outlined",
          startIcon: n.jsx(Rn, {}),
          onClick: g,
          fullWidth: true,
          sx: {
            mt: 1
          },
          children: v.t("configure_list_items").replace("%s", String(y.length))
        }),
        l && n.jsx(Ln, {
          theme: o.context.theme,
          children: n.jsx(rs, {
            open: l,
            onClose: u,
            items: x,
            onSave: h,
            context: o.context
          })
        })
      ]
    });
  }
  xn = class extends v {
    static getWidgetInfo() {
      return {
        id: "tplListCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "ListCollectionWidget",
        visWidgetLabel: "list_collection_widget",
        visOrder: 20,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...$n()
            ]
          },
          {
            name: "list",
            label: "group_list",
            fields: [
              {
                name: "oid",
                label: "oid_json_source",
                type: "objectId",
                default: ""
              },
              {
                name: "listDensity",
                label: "list_density",
                type: "select",
                default: "standard",
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
                ]
              },
              {
                name: "listVariant",
                label: "list_variant",
                type: "select",
                default: "icon",
                options: [
                  {
                    value: "text",
                    label: "text_only"
                  },
                  {
                    value: "icon",
                    label: "with_icon"
                  },
                  {
                    value: "avatar",
                    label: "with_avatar"
                  },
                  {
                    value: "multiline",
                    label: "multiline"
                  }
                ]
              },
              {
                name: "showDividers",
                label: "show_dividers",
                type: "checkbox",
                default: true
              }
            ]
          },
          {
            name: "items",
            label: "group_items",
            fields: [
              {
                name: "items",
                label: "items_config",
                type: "custom",
                component: ls,
                default: ""
              }
            ]
          },
          {
            name: "styling",
            label: "group_styling",
            fields: [
              {
                name: "itemBackground",
                label: "item_background",
                type: "color",
                default: ""
              },
              {
                name: "itemBackgroundActive",
                label: "item_background_active",
                type: "color",
                default: ""
              },
              {
                name: "textColor",
                label: "text_color",
                type: "color",
                default: ""
              },
              {
                name: "textColorActive",
                label: "text_color_active",
                type: "color",
                default: ""
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "300px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-state.png"
      };
    }
    getWidgetInfo() {
      return xn.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, r) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const r = {
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Tn(this.wrapContent(n.jsx(Qo, {})), r);
    }
  };
});
export {
  __tla,
  xn as default
};
