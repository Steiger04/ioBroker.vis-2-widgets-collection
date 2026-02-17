import { c as Le, j as b, h as Je, U as Er, W as We, ak as Gu, g as Dt, a as Mt, X as qt, al as zu, l as zt, k as mt, $ as ju, e as we, _ as $t, u as Ht, s as ge, d as pe, i as se, m as et, n as _s, o as nt, a1 as fn, am as Vu, b as yt, P as lr, an as Zn, ao as Bt, ap as Bs, aq as gl, I as Dn, ar as ka, a8 as Nu, as as _u, T as Uo, a2 as Zl, a3 as es, at as sr, au as ir, L as Bu, f as Ea, av as sn, aw as Fa, ax as Wu, Z as Ws, ay as ts, a7 as ns, az as Uu, v as Vn, aA as Ko, G as vt, C as vn, aB as bn, aC as g, aD as de, aE as os, a4 as Ku, aF as qu, aG as Ta, aH as Us, aI as Yu, aJ as Xu, aK as Qu, aL as Ju, aM as Zu, aN as ed, D as td, t as nd, x as od, A as rd, E as ld, H as Ks, J as sd, K as id, __tla as __tla_0 } from "./useData-BxQArd1-.js";
import { v as u, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { B as Oa, __tla as __tla_2 } from "./Button-eRDUYKJd.js";
import { S as ad, __tla as __tla_3 } from "./Switch-BCfjs6JK.js";
import { g as cd, M as At, __tla as __tla_4 } from "./MenuItem-BT5c9jAU.js";
import { u as ud, __tla as __tla_5 } from "./useOidValue-DIL65xb-.js";
import { g as dd } from "./_commonjsHelpers-Cpj98o6Y.js";
import { s as Ye, g as fd, __tla as __tla_6 } from "./getThemeProps-DqE84hdx.js";
import { L as fo, __tla as __tla_7 } from "./ListItemText-Dir_zoff.js";
import { C as pd, __tla as __tla_8 } from "./Checkbox-C7OTAW1S.js";
import { F as qs, __tla as __tla_9 } from "./FormControlLabel-4poVv3v7.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_10 } from "./SwitchBase-B7jK7VtH.js";
import { __tla as __tla_11 } from "./listItemTextClasses-COBicmTJ.js";
let Lu;
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
  })()
]).then(async () => {
  var Da = {
    exports: {}
  }, gd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", hd = gd, md = hd;
  function $a() {
  }
  function Ha() {
  }
  Ha.resetWarningCache = $a;
  var bd = function() {
    function e(o, r, l, s, a, i) {
      if (i !== md) {
        var d = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        throw d.name = "Invariant Violation", d;
      }
    }
    e.isRequired = e;
    function t() {
      return e;
    }
    var n = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: Ha,
      resetWarningCache: $a
    };
    return n.PropTypes = n, n;
  };
  Da.exports = bd();
  var Cd = Da.exports;
  const _ = dd(Cd), rs = (e) => {
    const t = u.useRef({});
    return u.useEffect(() => {
      t.current = e;
    }), t.current;
  };
  function wd(e) {
    return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
  }
  function vd(e) {
    return parseFloat(e);
  }
  const xd = Le(b.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close");
  function Ys(e) {
    return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function La(e = {}) {
    const { ignoreAccents: t = true, ignoreCase: n = true, limit: o, matchFrom: r = "any", stringify: l, trim: s = false } = e;
    return (a, { inputValue: i, getOptionLabel: d }) => {
      let c = s ? i.trim() : i;
      n && (c = c.toLowerCase()), t && (c = Ys(c));
      const f = c ? a.filter((p) => {
        let m = (l || d)(p);
        return n && (m = m.toLowerCase()), t && (m = Ys(m)), r === "start" ? m.startsWith(c) : m.includes(c);
      }) : a;
      return typeof o == "number" ? f.slice(0, o) : f;
    };
  }
  const yd = La(), Xs = 5, Sd = (e) => {
    var _a2;
    return e.current !== null && ((_a2 = e.current.parentElement) == null ? void 0 : _a2.contains(document.activeElement));
  }, Id = [];
  function Qs(e, t, n) {
    if (t || e == null) return "";
    const o = n(e);
    return typeof o == "string" ? o : "";
  }
  function Pd(e) {
    const { unstable_isActiveElementInListbox: t = Sd, unstable_classNamePrefix: n = "Mui", autoComplete: o = false, autoHighlight: r = false, autoSelect: l = false, blurOnSelect: s = false, clearOnBlur: a = !e.freeSolo, clearOnEscape: i = false, componentName: d = "useAutocomplete", defaultValue: c = e.multiple ? Id : null, disableClearable: f = false, disableCloseOnSelect: p = false, disabled: m, disabledItemsFocusable: h = false, disableListWrap: C = false, filterOptions: x = yd, filterSelectedOptions: M = false, freeSolo: v = false, getOptionDisabled: O, getOptionKey: G, getOptionLabel: P = (X) => X.label ?? X, groupBy: H, handleHomeEndKeys: R = !e.freeSolo, id: T, includeInputInList: w = false, inputValue: y, isOptionEqualToValue: k = (X, q) => X === q, multiple: D = false, onChange: $, onClose: V, onHighlightChange: E, onInputChange: S, onOpen: F, open: A, openOnFocus: z = false, options: j, readOnly: L = false, selectOnFocus: N = !e.freeSolo, value: W } = e, B = Je(T);
    let U = P;
    U = (X) => {
      const q = P(X);
      return typeof q != "string" ? String(q) : q;
    };
    const K = u.useRef(false), ne = u.useRef(true), ee = u.useRef(null), te = u.useRef(null), [ae, ve] = u.useState(null), [Y, re] = u.useState(-1), xe = r ? 0 : -1, J = u.useRef(xe), ye = u.useRef(Qs(c ?? W, D, U)).current, [Z, Ce] = Er({
      controlled: W,
      default: c,
      name: d
    }), [me, Me] = Er({
      controlled: y,
      default: ye,
      name: d,
      state: "inputValue"
    }), [Ve, Ne] = u.useState(false), Ae = u.useCallback((X, q, ie) => {
      if (!(D ? Z.length < q.length : q !== null) && !a) return;
      const ze = Qs(q, D, U);
      me !== ze && (Me(ze), S && S(X, ze, ie));
    }, [
      U,
      me,
      D,
      S,
      Me,
      a,
      Z
    ]), [De, $e] = Er({
      controlled: A,
      default: false,
      name: d,
      state: "open"
    }), [_e, Ge] = u.useState(true), ue = !D && Z != null && me === U(Z), be = De && !L, ce = be ? x(j.filter((X) => !(M && (D ? Z : [
      Z
    ]).some((q) => q !== null && k(X, q)))), {
      inputValue: ue && _e ? "" : me,
      getOptionLabel: U
    }) : [], fe = rs({
      filteredOptions: ce,
      value: Z,
      inputValue: me
    });
    u.useEffect(() => {
      const X = Z !== fe.value;
      Ve && !X || v && !X || Ae(null, Z, "reset");
    }, [
      Z,
      Ae,
      Ve,
      fe.value,
      v
    ]);
    const He = De && ce.length > 0 && !L, Te = We((X) => {
      X === -1 ? ee.current.focus() : ae.querySelector(`[data-tag-index="${X}"]`).focus();
    });
    u.useEffect(() => {
      D && Y > Z.length - 1 && (re(-1), Te(-1));
    }, [
      Z,
      D,
      Y,
      Te
    ]);
    function tt(X, q) {
      if (!te.current || X < 0 || X >= ce.length) return -1;
      let ie = X;
      for (; ; ) {
        const ke = te.current.querySelector(`[data-option-index="${ie}"]`), ze = h ? false : !ke || ke.disabled || ke.getAttribute("aria-disabled") === "true";
        if (ke && ke.hasAttribute("tabindex") && !ze) return ie;
        if (q === "next" ? ie = (ie + 1) % ce.length : ie = (ie - 1 + ce.length) % ce.length, ie === X) return -1;
      }
    }
    const pt = We(({ event: X, index: q, reason: ie }) => {
      if (J.current = q, q === -1 ? ee.current.removeAttribute("aria-activedescendant") : ee.current.setAttribute("aria-activedescendant", `${B}-option-${q}`), E && [
        "mouse",
        "keyboard",
        "touch"
      ].includes(ie) && E(X, q === -1 ? null : ce[q], ie), !te.current) return;
      const ke = te.current.querySelector(`[role="option"].${n}-focused`);
      ke && (ke.classList.remove(`${n}-focused`), ke.classList.remove(`${n}-focusVisible`));
      let ze = te.current;
      if (te.current.getAttribute("role") !== "listbox" && (ze = te.current.parentElement.querySelector('[role="listbox"]')), !ze) return;
      if (q === -1) {
        ze.scrollTop = 0;
        return;
      }
      const Xe = te.current.querySelector(`[data-option-index="${q}"]`);
      if (Xe && (Xe.classList.add(`${n}-focused`), ie === "keyboard" && Xe.classList.add(`${n}-focusVisible`), ze.scrollHeight > ze.clientHeight && ie !== "mouse" && ie !== "touch")) {
        const it = Xe, Nt = ze.clientHeight + ze.scrollTop, pl = it.offsetTop + it.offsetHeight;
        pl > Nt ? ze.scrollTop = pl - ze.clientHeight : it.offsetTop - it.offsetHeight * (H ? 1.3 : 0) < ze.scrollTop && (ze.scrollTop = it.offsetTop - it.offsetHeight * (H ? 1.3 : 0));
      }
    }), st = We(({ event: X, diff: q, direction: ie = "next", reason: ke }) => {
      if (!be) return;
      const Xe = tt((() => {
        const it = ce.length - 1;
        if (q === "reset") return xe;
        if (q === "start") return 0;
        if (q === "end") return it;
        const Nt = J.current + q;
        return Nt < 0 ? Nt === -1 && w ? -1 : C && J.current !== -1 || Math.abs(q) > 1 ? 0 : it : Nt > it ? Nt === it + 1 && w ? -1 : C || Math.abs(q) > 1 ? it : 0 : Nt;
      })(), ie);
      if (pt({
        index: Xe,
        reason: ke,
        event: X
      }), o && q !== "reset") if (Xe === -1) ee.current.value = me;
      else {
        const it = U(ce[Xe]);
        ee.current.value = it, it.toLowerCase().indexOf(me.toLowerCase()) === 0 && me.length > 0 && ee.current.setSelectionRange(me.length, it.length);
      }
    }), Cn = () => {
      const X = (q, ie) => {
        const ke = q ? U(q) : "", ze = ie ? U(ie) : "";
        return ke === ze;
      };
      if (J.current !== -1 && fe.filteredOptions && fe.filteredOptions.length !== ce.length && fe.inputValue === me && (D ? Z.length === fe.value.length && fe.value.every((q, ie) => U(Z[ie]) === U(q)) : X(fe.value, Z))) {
        const q = fe.filteredOptions[J.current];
        if (q) return ce.findIndex((ie) => U(ie) === U(q));
      }
      return -1;
    }, kt = u.useCallback(() => {
      if (!be) return;
      const X = Cn();
      if (X !== -1) {
        J.current = X;
        return;
      }
      const q = D ? Z[0] : Z;
      if (ce.length === 0 || q == null) {
        st({
          diff: "reset"
        });
        return;
      }
      if (te.current) {
        if (q != null) {
          const ie = ce[J.current];
          if (D && ie && Z.findIndex((ze) => k(ie, ze)) !== -1) return;
          const ke = ce.findIndex((ze) => k(ze, q));
          ke === -1 ? st({
            diff: "reset"
          }) : pt({
            index: ke
          });
          return;
        }
        if (J.current >= ce.length - 1) {
          pt({
            index: ce.length - 1
          });
          return;
        }
        pt({
          index: J.current
        });
      }
    }, [
      ce.length,
      D ? false : Z,
      M,
      st,
      pt,
      be,
      me,
      D
    ]), wn = We((X) => {
      Gu(te, X), X && kt();
    });
    u.useEffect(() => {
      kt();
    }, [
      kt
    ]);
    const bt = (X) => {
      De || ($e(true), Ge(true), F && F(X));
    }, Lt = (X, q) => {
      De && ($e(false), V && V(X, q));
    }, St = (X, q, ie, ke) => {
      if (D) {
        if (Z.length === q.length && Z.every((ze, Xe) => ze === q[Xe])) return;
      } else if (Z === q) return;
      $ && $(X, q, ie, ke), Ce(q);
    }, Et = u.useRef(false), It = (X, q, ie = "selectOption", ke = "options") => {
      let ze = ie, Xe = q;
      if (D) {
        Xe = Array.isArray(Z) ? Z.slice() : [];
        const it = Xe.findIndex((Nt) => k(q, Nt));
        it === -1 ? Xe.push(q) : ke !== "freeSolo" && (Xe.splice(it, 1), ze = "removeOption");
      }
      Ae(X, Xe, ze), St(X, Xe, ze, {
        option: q
      }), !p && (!X || !X.ctrlKey && !X.metaKey) && Lt(X, ze), (s === true || s === "touch" && Et.current || s === "mouse" && !Et.current) && ee.current.blur();
    };
    function Qn(X, q) {
      if (X === -1) return -1;
      let ie = X;
      for (; ; ) {
        if (q === "next" && ie === Z.length || q === "previous" && ie === -1) return -1;
        const ke = ae.querySelector(`[data-tag-index="${ie}"]`);
        if (!ke || !ke.hasAttribute("tabindex") || ke.disabled || ke.getAttribute("aria-disabled") === "true") ie += q === "next" ? 1 : -1;
        else return ie;
      }
    }
    const Jn = (X, q) => {
      if (!D) return;
      me === "" && Lt(X, "toggleInput");
      let ie = Y;
      Y === -1 ? me === "" && q === "previous" && (ie = Z.length - 1) : (ie += q === "next" ? 1 : -1, ie < 0 && (ie = 0), ie === Z.length && (ie = -1)), ie = Qn(ie, q), re(ie), Te(ie);
    }, Se = (X) => {
      K.current = true, Me(""), S && S(X, "", "clear"), St(X, D ? [] : null, "clear");
    }, Vt = (X) => (q) => {
      if (X.onKeyDown && X.onKeyDown(q), !q.defaultMuiPrevented && (Y !== -1 && ![
        "ArrowLeft",
        "ArrowRight"
      ].includes(q.key) && (re(-1), Te(-1)), q.which !== 229)) switch (q.key) {
        case "Home":
          be && R && (q.preventDefault(), st({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: q
          }));
          break;
        case "End":
          be && R && (q.preventDefault(), st({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: q
          }));
          break;
        case "PageUp":
          q.preventDefault(), st({
            diff: -Xs,
            direction: "previous",
            reason: "keyboard",
            event: q
          }), bt(q);
          break;
        case "PageDown":
          q.preventDefault(), st({
            diff: Xs,
            direction: "next",
            reason: "keyboard",
            event: q
          }), bt(q);
          break;
        case "ArrowDown":
          q.preventDefault(), st({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: q
          }), bt(q);
          break;
        case "ArrowUp":
          q.preventDefault(), st({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: q
          }), bt(q);
          break;
        case "ArrowLeft":
          Jn(q, "previous");
          break;
        case "ArrowRight":
          Jn(q, "next");
          break;
        case "Enter":
          if (J.current !== -1 && be) {
            const ie = ce[J.current], ke = O ? O(ie) : false;
            if (q.preventDefault(), ke) return;
            It(q, ie, "selectOption"), o && ee.current.setSelectionRange(ee.current.value.length, ee.current.value.length);
          } else v && me !== "" && ue === false && (D && q.preventDefault(), It(q, me, "createOption", "freeSolo"));
          break;
        case "Escape":
          be ? (q.preventDefault(), q.stopPropagation(), Lt(q, "escape")) : i && (me !== "" || D && Z.length > 0) && (q.preventDefault(), q.stopPropagation(), Se(q));
          break;
        case "Backspace":
          if (D && !L && me === "" && Z.length > 0) {
            const ie = Y === -1 ? Z.length - 1 : Y, ke = Z.slice();
            ke.splice(ie, 1), St(q, ke, "removeOption", {
              option: Z[ie]
            });
          }
          break;
        case "Delete":
          if (D && !L && me === "" && Z.length > 0 && Y !== -1) {
            const ie = Y, ke = Z.slice();
            ke.splice(ie, 1), St(q, ke, "removeOption", {
              option: Z[ie]
            });
          }
          break;
      }
    }, al = (X) => {
      Ne(true), z && !K.current && bt(X);
    }, jn = (X) => {
      if (t(te)) {
        ee.current.focus();
        return;
      }
      Ne(false), ne.current = true, K.current = false, l && J.current !== -1 && be ? It(X, ce[J.current], "blur") : l && v && me !== "" ? It(X, me, "blur", "freeSolo") : a && Ae(X, Z, "blur"), Lt(X, "blur");
    }, $o = (X) => {
      const q = X.target.value;
      me !== q && (Me(q), Ge(false), S && S(X, q, "input")), q === "" ? !f && !D && St(X, null, "clear") : bt(X);
    }, Ho = (X) => {
      const q = Number(X.currentTarget.getAttribute("data-option-index"));
      J.current !== q && pt({
        event: X,
        index: q,
        reason: "mouse"
      });
    }, cl = (X) => {
      pt({
        event: X,
        index: Number(X.currentTarget.getAttribute("data-option-index")),
        reason: "touch"
      }), Et.current = true;
    }, ul = (X) => {
      const q = Number(X.currentTarget.getAttribute("data-option-index"));
      It(X, ce[q], "selectOption"), Et.current = false;
    }, dl = (X) => (q) => {
      const ie = Z.slice();
      ie.splice(X, 1), St(q, ie, "removeOption", {
        option: Z[X]
      });
    }, fl = (X) => {
      De ? Lt(X, "toggleInput") : bt(X);
    }, Lo = (X) => {
      X.currentTarget.contains(X.target) && X.target.getAttribute("id") !== B && X.preventDefault();
    }, wt = (X) => {
      X.currentTarget.contains(X.target) && (ee.current.focus(), N && ne.current && ee.current.selectionEnd - ee.current.selectionStart === 0 && ee.current.select(), ne.current = false);
    }, gt = (X) => {
      !m && (me === "" || !De) && fl(X);
    };
    let cn = v && me.length > 0;
    cn = cn || (D ? Z.length > 0 : Z !== null);
    let wr = ce;
    return H && (wr = ce.reduce((X, q, ie) => {
      const ke = H(q);
      return X.length > 0 && X[X.length - 1].group === ke ? X[X.length - 1].options.push(q) : X.push({
        key: ie,
        index: ie,
        group: ke,
        options: [
          q
        ]
      }), X;
    }, [])), m && Ve && jn(), {
      getRootProps: (X = {}) => ({
        ...X,
        onKeyDown: Vt(X),
        onMouseDown: Lo,
        onClick: wt
      }),
      getInputLabelProps: () => ({
        id: `${B}-label`,
        htmlFor: B
      }),
      getInputProps: () => ({
        id: B,
        value: me,
        onBlur: jn,
        onFocus: al,
        onChange: $o,
        onMouseDown: gt,
        "aria-activedescendant": be ? "" : null,
        "aria-autocomplete": o ? "both" : "list",
        "aria-controls": He ? `${B}-listbox` : void 0,
        "aria-expanded": He,
        autoComplete: "off",
        ref: ee,
        autoCapitalize: "none",
        spellCheck: "false",
        role: "combobox",
        disabled: m
      }),
      getClearProps: () => ({
        tabIndex: -1,
        type: "button",
        onClick: Se
      }),
      getPopupIndicatorProps: () => ({
        tabIndex: -1,
        type: "button",
        onClick: fl
      }),
      getTagProps: ({ index: X }) => ({
        key: X,
        "data-tag-index": X,
        tabIndex: -1,
        ...!L && {
          onDelete: dl(X)
        }
      }),
      getListboxProps: () => ({
        role: "listbox",
        id: `${B}-listbox`,
        "aria-labelledby": `${B}-label`,
        ref: wn,
        onMouseDown: (X) => {
          X.preventDefault();
        }
      }),
      getOptionProps: ({ index: X, option: q }) => {
        const ie = (D ? Z : [
          Z
        ]).some((ze) => ze != null && k(q, ze)), ke = O ? O(q) : false;
        return {
          key: (G == null ? void 0 : G(q)) ?? U(q),
          tabIndex: -1,
          role: "option",
          id: `${B}-option-${X}`,
          onMouseMove: Ho,
          onClick: ul,
          onTouchStart: cl,
          "data-option-index": X,
          "aria-disabled": ke,
          "aria-selected": ie
        };
      },
      id: B,
      inputValue: me,
      value: Z,
      dirty: cn,
      expanded: be && ae,
      popupOpen: be,
      focused: Ve || Y !== -1,
      anchorEl: ae,
      setAnchorEl: ve,
      focusedTag: Y,
      groupedOptions: wr
    };
  }
  var Tt = "top", Jt = "bottom", Zt = "right", Ot = "left", ls = "auto", ar = [
    Tt,
    Jt,
    Zt,
    Ot
  ], ho = "start", Qo = "end", Md = "clippingParents", Ra = "viewport", Ao = "popper", kd = "reference", Js = ar.reduce(function(e, t) {
    return e.concat([
      t + "-" + ho,
      t + "-" + Qo
    ]);
  }, []), Aa = [].concat(ar, [
    ls
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + ho,
      t + "-" + Qo
    ]);
  }, []), Ed = "beforeRead", Fd = "read", Td = "afterRead", Od = "beforeMain", Dd = "main", $d = "afterMain", Hd = "beforeWrite", Ld = "write", Rd = "afterWrite", Ad = [
    Ed,
    Fd,
    Td,
    Od,
    Dd,
    $d,
    Hd,
    Ld,
    Rd
  ];
  function hn(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function jt(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Wn(e) {
    var t = jt(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function Yt(e) {
    var t = jt(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function ss(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = jt(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Gd(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(n) {
      var o = t.styles[n] || {}, r = t.attributes[n] || {}, l = t.elements[n];
      !Yt(l) || !hn(l) || (Object.assign(l.style, o), Object.keys(r).forEach(function(s) {
        var a = r[s];
        a === false ? l.removeAttribute(s) : l.setAttribute(s, a === true ? "" : a);
      }));
    });
  }
  function zd(e) {
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
      Object.keys(t.elements).forEach(function(o) {
        var r = t.elements[o], l = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), a = s.reduce(function(i, d) {
          return i[d] = "", i;
        }, {});
        !Yt(r) || !hn(r) || (Object.assign(r.style, a), Object.keys(l).forEach(function(i) {
          r.removeAttribute(i);
        }));
      });
    };
  }
  const jd = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Gd,
    effect: zd,
    requires: [
      "computeStyles"
    ]
  };
  function pn(e) {
    return e.split("-")[0];
  }
  var _n = Math.max, Hr = Math.min, mo = Math.round;
  function Tl() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function Ga() {
    return !/^((?!chrome|android).)*safari/i.test(Tl());
  }
  function bo(e, t, n) {
    t === void 0 && (t = false), n === void 0 && (n = false);
    var o = e.getBoundingClientRect(), r = 1, l = 1;
    t && Yt(e) && (r = e.offsetWidth > 0 && mo(o.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && mo(o.height) / e.offsetHeight || 1);
    var s = Wn(e) ? jt(e) : window, a = s.visualViewport, i = !Ga() && n, d = (o.left + (i && a ? a.offsetLeft : 0)) / r, c = (o.top + (i && a ? a.offsetTop : 0)) / l, f = o.width / r, p = o.height / l;
    return {
      width: f,
      height: p,
      top: c,
      right: d + f,
      bottom: c + p,
      left: d,
      x: d,
      y: c
    };
  }
  function is(e) {
    var t = bo(e), n = e.offsetWidth, o = e.offsetHeight;
    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: n,
      height: o
    };
  }
  function za(e, t) {
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (n && ss(n)) {
      var o = t;
      do {
        if (o && e.isSameNode(o)) return true;
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function Sn(e) {
    return jt(e).getComputedStyle(e);
  }
  function Vd(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(hn(e)) >= 0;
  }
  function An(e) {
    return ((Wn(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function Xr(e) {
    return hn(e) === "html" ? e : e.assignedSlot || e.parentNode || (ss(e) ? e.host : null) || An(e);
  }
  function Zs(e) {
    return !Yt(e) || Sn(e).position === "fixed" ? null : e.offsetParent;
  }
  function Nd(e) {
    var t = /firefox/i.test(Tl()), n = /Trident/i.test(Tl());
    if (n && Yt(e)) {
      var o = Sn(e);
      if (o.position === "fixed") return null;
    }
    var r = Xr(e);
    for (ss(r) && (r = r.host); Yt(r) && [
      "html",
      "body"
    ].indexOf(hn(r)) < 0; ) {
      var l = Sn(r);
      if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none") return r;
      r = r.parentNode;
    }
    return null;
  }
  function cr(e) {
    for (var t = jt(e), n = Zs(e); n && Vd(n) && Sn(n).position === "static"; ) n = Zs(n);
    return n && (hn(n) === "html" || hn(n) === "body" && Sn(n).position === "static") ? t : n || Nd(e) || t;
  }
  function as(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function qo(e, t, n) {
    return _n(e, Hr(t, n));
  }
  function _d(e, t, n) {
    var o = qo(e, t, n);
    return o > n ? n : o;
  }
  function ja() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function Va(e) {
    return Object.assign({}, ja(), e);
  }
  function Na(e, t) {
    return t.reduce(function(n, o) {
      return n[o] = e, n;
    }, {});
  }
  var Bd = function(t, n) {
    return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
      placement: n.placement
    })) : t, Va(typeof t != "number" ? t : Na(t, ar));
  };
  function Wd(e) {
    var t, n = e.state, o = e.name, r = e.options, l = n.elements.arrow, s = n.modifiersData.popperOffsets, a = pn(n.placement), i = as(a), d = [
      Ot,
      Zt
    ].indexOf(a) >= 0, c = d ? "height" : "width";
    if (!(!l || !s)) {
      var f = Bd(r.padding, n), p = is(l), m = i === "y" ? Tt : Ot, h = i === "y" ? Jt : Zt, C = n.rects.reference[c] + n.rects.reference[i] - s[i] - n.rects.popper[c], x = s[i] - n.rects.reference[i], M = cr(l), v = M ? i === "y" ? M.clientHeight || 0 : M.clientWidth || 0 : 0, O = C / 2 - x / 2, G = f[m], P = v - p[c] - f[h], H = v / 2 - p[c] / 2 + O, R = qo(G, H, P), T = i;
      n.modifiersData[o] = (t = {}, t[T] = R, t.centerOffset = R - H, t);
    }
  }
  function Ud(e) {
    var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || za(t.elements.popper, r) && (t.elements.arrow = r));
  }
  const Kd = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Wd,
    effect: Ud,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function Co(e) {
    return e.split("-")[1];
  }
  var qd = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function Yd(e, t) {
    var n = e.x, o = e.y, r = t.devicePixelRatio || 1;
    return {
      x: mo(n * r) / r || 0,
      y: mo(o * r) / r || 0
    };
  }
  function ei(e) {
    var t, n = e.popper, o = e.popperRect, r = e.placement, l = e.variation, s = e.offsets, a = e.position, i = e.gpuAcceleration, d = e.adaptive, c = e.roundOffsets, f = e.isFixed, p = s.x, m = p === void 0 ? 0 : p, h = s.y, C = h === void 0 ? 0 : h, x = typeof c == "function" ? c({
      x: m,
      y: C
    }) : {
      x: m,
      y: C
    };
    m = x.x, C = x.y;
    var M = s.hasOwnProperty("x"), v = s.hasOwnProperty("y"), O = Ot, G = Tt, P = window;
    if (d) {
      var H = cr(n), R = "clientHeight", T = "clientWidth";
      if (H === jt(n) && (H = An(n), Sn(H).position !== "static" && a === "absolute" && (R = "scrollHeight", T = "scrollWidth")), H = H, r === Tt || (r === Ot || r === Zt) && l === Qo) {
        G = Jt;
        var w = f && H === P && P.visualViewport ? P.visualViewport.height : H[R];
        C -= w - o.height, C *= i ? 1 : -1;
      }
      if (r === Ot || (r === Tt || r === Jt) && l === Qo) {
        O = Zt;
        var y = f && H === P && P.visualViewport ? P.visualViewport.width : H[T];
        m -= y - o.width, m *= i ? 1 : -1;
      }
    }
    var k = Object.assign({
      position: a
    }, d && qd), D = c === true ? Yd({
      x: m,
      y: C
    }, jt(n)) : {
      x: m,
      y: C
    };
    if (m = D.x, C = D.y, i) {
      var $;
      return Object.assign({}, k, ($ = {}, $[G] = v ? "0" : "", $[O] = M ? "0" : "", $.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + C + "px)" : "translate3d(" + m + "px, " + C + "px, 0)", $));
    }
    return Object.assign({}, k, (t = {}, t[G] = v ? C + "px" : "", t[O] = M ? m + "px" : "", t.transform = "", t));
  }
  function Xd(e) {
    var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? true : o, l = n.adaptive, s = l === void 0 ? true : l, a = n.roundOffsets, i = a === void 0 ? true : a, d = {
      placement: pn(t.placement),
      variation: Co(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: r,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ei(Object.assign({}, d, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: s,
      roundOffsets: i
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ei(Object.assign({}, d, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: i
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const Qd = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Xd,
    data: {}
  };
  var vr = {
    passive: true
  };
  function Jd(e) {
    var t = e.state, n = e.instance, o = e.options, r = o.scroll, l = r === void 0 ? true : r, s = o.resize, a = s === void 0 ? true : s, i = jt(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return l && d.forEach(function(c) {
      c.addEventListener("scroll", n.update, vr);
    }), a && i.addEventListener("resize", n.update, vr), function() {
      l && d.forEach(function(c) {
        c.removeEventListener("scroll", n.update, vr);
      }), a && i.removeEventListener("resize", n.update, vr);
    };
  }
  const Zd = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: Jd,
    data: {}
  };
  var ef = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function Fr(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return ef[t];
    });
  }
  var tf = {
    start: "end",
    end: "start"
  };
  function ti(e) {
    return e.replace(/start|end/g, function(t) {
      return tf[t];
    });
  }
  function cs(e) {
    var t = jt(e), n = t.pageXOffset, o = t.pageYOffset;
    return {
      scrollLeft: n,
      scrollTop: o
    };
  }
  function us(e) {
    return bo(An(e)).left + cs(e).scrollLeft;
  }
  function nf(e, t) {
    var n = jt(e), o = An(e), r = n.visualViewport, l = o.clientWidth, s = o.clientHeight, a = 0, i = 0;
    if (r) {
      l = r.width, s = r.height;
      var d = Ga();
      (d || !d && t === "fixed") && (a = r.offsetLeft, i = r.offsetTop);
    }
    return {
      width: l,
      height: s,
      x: a + us(e),
      y: i
    };
  }
  function of(e) {
    var t, n = An(e), o = cs(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, l = _n(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), s = _n(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), a = -o.scrollLeft + us(e), i = -o.scrollTop;
    return Sn(r || n).direction === "rtl" && (a += _n(n.clientWidth, r ? r.clientWidth : 0) - l), {
      width: l,
      height: s,
      x: a,
      y: i
    };
  }
  function ds(e) {
    var t = Sn(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + o);
  }
  function _a(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(hn(e)) >= 0 ? e.ownerDocument.body : Yt(e) && ds(e) ? e : _a(Xr(e));
  }
  function Yo(e, t) {
    var n;
    t === void 0 && (t = []);
    var o = _a(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), l = jt(o), s = r ? [
      l
    ].concat(l.visualViewport || [], ds(o) ? o : []) : o, a = t.concat(s);
    return r ? a : a.concat(Yo(Xr(s)));
  }
  function Ol(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function rf(e, t) {
    var n = bo(e, false, t === "fixed");
    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
  }
  function ni(e, t, n) {
    return t === Ra ? Ol(nf(e, n)) : Wn(t) ? rf(t, n) : Ol(of(An(e)));
  }
  function lf(e) {
    var t = Yo(Xr(e)), n = [
      "absolute",
      "fixed"
    ].indexOf(Sn(e).position) >= 0, o = n && Yt(e) ? cr(e) : e;
    return Wn(o) ? t.filter(function(r) {
      return Wn(r) && za(r, o) && hn(r) !== "body";
    }) : [];
  }
  function sf(e, t, n, o) {
    var r = t === "clippingParents" ? lf(e) : [].concat(t), l = [].concat(r, [
      n
    ]), s = l[0], a = l.reduce(function(i, d) {
      var c = ni(e, d, o);
      return i.top = _n(c.top, i.top), i.right = Hr(c.right, i.right), i.bottom = Hr(c.bottom, i.bottom), i.left = _n(c.left, i.left), i;
    }, ni(e, s, o));
    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
  }
  function Ba(e) {
    var t = e.reference, n = e.element, o = e.placement, r = o ? pn(o) : null, l = o ? Co(o) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, i;
    switch (r) {
      case Tt:
        i = {
          x: s,
          y: t.y - n.height
        };
        break;
      case Jt:
        i = {
          x: s,
          y: t.y + t.height
        };
        break;
      case Zt:
        i = {
          x: t.x + t.width,
          y: a
        };
        break;
      case Ot:
        i = {
          x: t.x - n.width,
          y: a
        };
        break;
      default:
        i = {
          x: t.x,
          y: t.y
        };
    }
    var d = r ? as(r) : null;
    if (d != null) {
      var c = d === "y" ? "height" : "width";
      switch (l) {
        case ho:
          i[d] = i[d] - (t[c] / 2 - n[c] / 2);
          break;
        case Qo:
          i[d] = i[d] + (t[c] / 2 - n[c] / 2);
          break;
      }
    }
    return i;
  }
  function Jo(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = o === void 0 ? e.placement : o, l = n.strategy, s = l === void 0 ? e.strategy : l, a = n.boundary, i = a === void 0 ? Md : a, d = n.rootBoundary, c = d === void 0 ? Ra : d, f = n.elementContext, p = f === void 0 ? Ao : f, m = n.altBoundary, h = m === void 0 ? false : m, C = n.padding, x = C === void 0 ? 0 : C, M = Va(typeof x != "number" ? x : Na(x, ar)), v = p === Ao ? kd : Ao, O = e.rects.popper, G = e.elements[h ? v : p], P = sf(Wn(G) ? G : G.contextElement || An(e.elements.popper), i, c, s), H = bo(e.elements.reference), R = Ba({
      reference: H,
      element: O,
      placement: r
    }), T = Ol(Object.assign({}, O, R)), w = p === Ao ? T : H, y = {
      top: P.top - w.top + M.top,
      bottom: w.bottom - P.bottom + M.bottom,
      left: P.left - w.left + M.left,
      right: w.right - P.right + M.right
    }, k = e.modifiersData.offset;
    if (p === Ao && k) {
      var D = k[r];
      Object.keys(y).forEach(function($) {
        var V = [
          Zt,
          Jt
        ].indexOf($) >= 0 ? 1 : -1, E = [
          Tt,
          Jt
        ].indexOf($) >= 0 ? "y" : "x";
        y[$] += D[E] * V;
      });
    }
    return y;
  }
  function af(e, t) {
    t === void 0 && (t = {});
    var n = t, o = n.placement, r = n.boundary, l = n.rootBoundary, s = n.padding, a = n.flipVariations, i = n.allowedAutoPlacements, d = i === void 0 ? Aa : i, c = Co(o), f = c ? a ? Js : Js.filter(function(h) {
      return Co(h) === c;
    }) : ar, p = f.filter(function(h) {
      return d.indexOf(h) >= 0;
    });
    p.length === 0 && (p = f);
    var m = p.reduce(function(h, C) {
      return h[C] = Jo(e, {
        placement: C,
        boundary: r,
        rootBoundary: l,
        padding: s
      })[pn(C)], h;
    }, {});
    return Object.keys(m).sort(function(h, C) {
      return m[h] - m[C];
    });
  }
  function cf(e) {
    if (pn(e) === ls) return [];
    var t = Fr(e);
    return [
      ti(e),
      t,
      ti(t)
    ];
  }
  function uf(e) {
    var t = e.state, n = e.options, o = e.name;
    if (!t.modifiersData[o]._skip) {
      for (var r = n.mainAxis, l = r === void 0 ? true : r, s = n.altAxis, a = s === void 0 ? true : s, i = n.fallbackPlacements, d = n.padding, c = n.boundary, f = n.rootBoundary, p = n.altBoundary, m = n.flipVariations, h = m === void 0 ? true : m, C = n.allowedAutoPlacements, x = t.options.placement, M = pn(x), v = M === x, O = i || (v || !h ? [
        Fr(x)
      ] : cf(x)), G = [
        x
      ].concat(O).reduce(function(B, U) {
        return B.concat(pn(U) === ls ? af(t, {
          placement: U,
          boundary: c,
          rootBoundary: f,
          padding: d,
          flipVariations: h,
          allowedAutoPlacements: C
        }) : U);
      }, []), P = t.rects.reference, H = t.rects.popper, R = /* @__PURE__ */ new Map(), T = true, w = G[0], y = 0; y < G.length; y++) {
        var k = G[y], D = pn(k), $ = Co(k) === ho, V = [
          Tt,
          Jt
        ].indexOf(D) >= 0, E = V ? "width" : "height", S = Jo(t, {
          placement: k,
          boundary: c,
          rootBoundary: f,
          altBoundary: p,
          padding: d
        }), F = V ? $ ? Zt : Ot : $ ? Jt : Tt;
        P[E] > H[E] && (F = Fr(F));
        var A = Fr(F), z = [];
        if (l && z.push(S[D] <= 0), a && z.push(S[F] <= 0, S[A] <= 0), z.every(function(B) {
          return B;
        })) {
          w = k, T = false;
          break;
        }
        R.set(k, z);
      }
      if (T) for (var j = h ? 3 : 1, L = function(U) {
        var K = G.find(function(ne) {
          var ee = R.get(ne);
          if (ee) return ee.slice(0, U).every(function(te) {
            return te;
          });
        });
        if (K) return w = K, "break";
      }, N = j; N > 0; N--) {
        var W = L(N);
        if (W === "break") break;
      }
      t.placement !== w && (t.modifiersData[o]._skip = true, t.placement = w, t.reset = true);
    }
  }
  const df = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: uf,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function oi(e, t, n) {
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
  function ri(e) {
    return [
      Tt,
      Zt,
      Jt,
      Ot
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function ff(e) {
    var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, l = t.modifiersData.preventOverflow, s = Jo(t, {
      elementContext: "reference"
    }), a = Jo(t, {
      altBoundary: true
    }), i = oi(s, o), d = oi(a, r, l), c = ri(i), f = ri(d);
    t.modifiersData[n] = {
      referenceClippingOffsets: i,
      popperEscapeOffsets: d,
      isReferenceHidden: c,
      hasPopperEscaped: f
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": f
    });
  }
  const pf = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: ff
  };
  function gf(e, t, n) {
    var o = pn(e), r = [
      Ot,
      Tt
    ].indexOf(o) >= 0 ? -1 : 1, l = typeof n == "function" ? n(Object.assign({}, t, {
      placement: e
    })) : n, s = l[0], a = l[1];
    return s = s || 0, a = (a || 0) * r, [
      Ot,
      Zt
    ].indexOf(o) >= 0 ? {
      x: a,
      y: s
    } : {
      x: s,
      y: a
    };
  }
  function hf(e) {
    var t = e.state, n = e.options, o = e.name, r = n.offset, l = r === void 0 ? [
      0,
      0
    ] : r, s = Aa.reduce(function(c, f) {
      return c[f] = gf(f, t.rects, l), c;
    }, {}), a = s[t.placement], i = a.x, d = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += d), t.modifiersData[o] = s;
  }
  const mf = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: hf
  };
  function bf(e) {
    var t = e.state, n = e.name;
    t.modifiersData[n] = Ba({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const Cf = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: bf,
    data: {}
  };
  function wf(e) {
    return e === "x" ? "y" : "x";
  }
  function vf(e) {
    var t = e.state, n = e.options, o = e.name, r = n.mainAxis, l = r === void 0 ? true : r, s = n.altAxis, a = s === void 0 ? false : s, i = n.boundary, d = n.rootBoundary, c = n.altBoundary, f = n.padding, p = n.tether, m = p === void 0 ? true : p, h = n.tetherOffset, C = h === void 0 ? 0 : h, x = Jo(t, {
      boundary: i,
      rootBoundary: d,
      padding: f,
      altBoundary: c
    }), M = pn(t.placement), v = Co(t.placement), O = !v, G = as(M), P = wf(G), H = t.modifiersData.popperOffsets, R = t.rects.reference, T = t.rects.popper, w = typeof C == "function" ? C(Object.assign({}, t.rects, {
      placement: t.placement
    })) : C, y = typeof w == "number" ? {
      mainAxis: w,
      altAxis: w
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, w), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = {
      x: 0,
      y: 0
    };
    if (H) {
      if (l) {
        var $, V = G === "y" ? Tt : Ot, E = G === "y" ? Jt : Zt, S = G === "y" ? "height" : "width", F = H[G], A = F + x[V], z = F - x[E], j = m ? -T[S] / 2 : 0, L = v === ho ? R[S] : T[S], N = v === ho ? -T[S] : -R[S], W = t.elements.arrow, B = m && W ? is(W) : {
          width: 0,
          height: 0
        }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ja(), K = U[V], ne = U[E], ee = qo(0, R[S], B[S]), te = O ? R[S] / 2 - j - ee - K - y.mainAxis : L - ee - K - y.mainAxis, ae = O ? -R[S] / 2 + j + ee + ne + y.mainAxis : N + ee + ne + y.mainAxis, ve = t.elements.arrow && cr(t.elements.arrow), Y = ve ? G === "y" ? ve.clientTop || 0 : ve.clientLeft || 0 : 0, re = ($ = k == null ? void 0 : k[G]) != null ? $ : 0, xe = F + te - re - Y, J = F + ae - re, ye = qo(m ? Hr(A, xe) : A, F, m ? _n(z, J) : z);
        H[G] = ye, D[G] = ye - F;
      }
      if (a) {
        var Z, Ce = G === "x" ? Tt : Ot, me = G === "x" ? Jt : Zt, Me = H[P], Ve = P === "y" ? "height" : "width", Ne = Me + x[Ce], Ae = Me - x[me], De = [
          Tt,
          Ot
        ].indexOf(M) !== -1, $e = (Z = k == null ? void 0 : k[P]) != null ? Z : 0, _e = De ? Ne : Me - R[Ve] - T[Ve] - $e + y.altAxis, Ge = De ? Me + R[Ve] + T[Ve] - $e - y.altAxis : Ae, ue = m && De ? _d(_e, Me, Ge) : qo(m ? _e : Ne, Me, m ? Ge : Ae);
        H[P] = ue, D[P] = ue - Me;
      }
      t.modifiersData[o] = D;
    }
  }
  const xf = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: vf,
    requiresIfExists: [
      "offset"
    ]
  };
  function yf(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function Sf(e) {
    return e === jt(e) || !Yt(e) ? cs(e) : yf(e);
  }
  function If(e) {
    var t = e.getBoundingClientRect(), n = mo(t.width) / e.offsetWidth || 1, o = mo(t.height) / e.offsetHeight || 1;
    return n !== 1 || o !== 1;
  }
  function Pf(e, t, n) {
    n === void 0 && (n = false);
    var o = Yt(t), r = Yt(t) && If(t), l = An(t), s = bo(e, r, n), a = {
      scrollLeft: 0,
      scrollTop: 0
    }, i = {
      x: 0,
      y: 0
    };
    return (o || !o && !n) && ((hn(t) !== "body" || ds(l)) && (a = Sf(t)), Yt(t) ? (i = bo(t, true), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = us(l))), {
      x: s.left + a.scrollLeft - i.x,
      y: s.top + a.scrollTop - i.y,
      width: s.width,
      height: s.height
    };
  }
  function Mf(e) {
    var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
    e.forEach(function(l) {
      t.set(l.name, l);
    });
    function r(l) {
      n.add(l.name);
      var s = [].concat(l.requires || [], l.requiresIfExists || []);
      s.forEach(function(a) {
        if (!n.has(a)) {
          var i = t.get(a);
          i && r(i);
        }
      }), o.push(l);
    }
    return e.forEach(function(l) {
      n.has(l.name) || r(l);
    }), o;
  }
  function kf(e) {
    var t = Mf(e);
    return Ad.reduce(function(n, o) {
      return n.concat(t.filter(function(r) {
        return r.phase === o;
      }));
    }, []);
  }
  function Ef(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(n) {
        Promise.resolve().then(function() {
          t = void 0, n(e());
        });
      })), t;
    };
  }
  function Ff(e) {
    var t = e.reduce(function(n, o) {
      var r = n[o.name];
      return n[o.name] = r ? Object.assign({}, r, o, {
        options: Object.assign({}, r.options, o.options),
        data: Object.assign({}, r.data, o.data)
      }) : o, n;
    }, {});
    return Object.keys(t).map(function(n) {
      return t[n];
    });
  }
  var li = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function si() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function(o) {
      return !(o && typeof o.getBoundingClientRect == "function");
    });
  }
  function Tf(e) {
    e === void 0 && (e = {});
    var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, l = r === void 0 ? li : r;
    return function(a, i, d) {
      d === void 0 && (d = l);
      var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, li, l),
        modifiersData: {},
        elements: {
          reference: a,
          popper: i
        },
        attributes: {},
        styles: {}
      }, f = [], p = false, m = {
        state: c,
        setOptions: function(M) {
          var v = typeof M == "function" ? M(c.options) : M;
          C(), c.options = Object.assign({}, l, c.options, v), c.scrollParents = {
            reference: Wn(a) ? Yo(a) : a.contextElement ? Yo(a.contextElement) : [],
            popper: Yo(i)
          };
          var O = kf(Ff([].concat(o, c.options.modifiers)));
          return c.orderedModifiers = O.filter(function(G) {
            return G.enabled;
          }), h(), m.update();
        },
        forceUpdate: function() {
          if (!p) {
            var M = c.elements, v = M.reference, O = M.popper;
            if (si(v, O)) {
              c.rects = {
                reference: Pf(v, cr(O), c.options.strategy === "fixed"),
                popper: is(O)
              }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(y) {
                return c.modifiersData[y.name] = Object.assign({}, y.data);
              });
              for (var G = 0; G < c.orderedModifiers.length; G++) {
                if (c.reset === true) {
                  c.reset = false, G = -1;
                  continue;
                }
                var P = c.orderedModifiers[G], H = P.fn, R = P.options, T = R === void 0 ? {} : R, w = P.name;
                typeof H == "function" && (c = H({
                  state: c,
                  options: T,
                  name: w,
                  instance: m
                }) || c);
              }
            }
          }
        },
        update: Ef(function() {
          return new Promise(function(x) {
            m.forceUpdate(), x(c);
          });
        }),
        destroy: function() {
          C(), p = true;
        }
      };
      if (!si(a, i)) return m;
      m.setOptions(d).then(function(x) {
        !p && d.onFirstUpdate && d.onFirstUpdate(x);
      });
      function h() {
        c.orderedModifiers.forEach(function(x) {
          var M = x.name, v = x.options, O = v === void 0 ? {} : v, G = x.effect;
          if (typeof G == "function") {
            var P = G({
              state: c,
              name: M,
              instance: m,
              options: O
            }), H = function() {
            };
            f.push(P || H);
          }
        });
      }
      function C() {
        f.forEach(function(x) {
          return x();
        }), f = [];
      }
      return m;
    };
  }
  var Of = [
    Zd,
    Cf,
    Qd,
    jd,
    mf,
    df,
    xf,
    Kd,
    pf
  ], Df = Tf({
    defaultModifiers: Of
  });
  function $f(e) {
    return Dt("MuiPopper", e);
  }
  Mt("MuiPopper", [
    "root"
  ]);
  function Hf(e, t) {
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
  function Dl(e) {
    return typeof e == "function" ? e() : e;
  }
  function Lf(e) {
    return e.nodeType !== void 0;
  }
  const Rf = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, $f, t);
  }, Af = {}, Gf = u.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, direction: l, disablePortal: s, modifiers: a, open: i, placement: d, popperOptions: c, popperRef: f, slotProps: p = {}, slots: m = {}, TransitionProps: h, ownerState: C, ...x } = t, M = u.useRef(null), v = zt(M, n), O = u.useRef(null), G = zt(O, f), P = u.useRef(G);
    mt(() => {
      P.current = G;
    }, [
      G
    ]), u.useImperativeHandle(f, () => O.current, []);
    const H = Hf(d, l), [R, T] = u.useState(H), [w, y] = u.useState(Dl(o));
    u.useEffect(() => {
      O.current && O.current.forceUpdate();
    }), u.useEffect(() => {
      o && y(Dl(o));
    }, [
      o
    ]), mt(() => {
      if (!w || !i) return;
      const E = (A) => {
        T(A.placement);
      };
      let S = [
        {
          name: "preventOverflow",
          options: {
            altBoundary: s
          }
        },
        {
          name: "flip",
          options: {
            altBoundary: s
          }
        },
        {
          name: "onUpdate",
          enabled: true,
          phase: "afterWrite",
          fn: ({ state: A }) => {
            E(A);
          }
        }
      ];
      a != null && (S = S.concat(a)), c && c.modifiers != null && (S = S.concat(c.modifiers));
      const F = Df(w, M.current, {
        placement: H,
        ...c,
        modifiers: S
      });
      return P.current(F), () => {
        F.destroy(), P.current(null);
      };
    }, [
      w,
      s,
      a,
      i,
      c,
      H
    ]);
    const k = {
      placement: R
    };
    h !== null && (k.TransitionProps = h);
    const D = Rf(t), $ = m.root ?? "div", V = ju({
      elementType: $,
      externalSlotProps: p.root,
      externalForwardedProps: x,
      additionalProps: {
        role: "tooltip",
        ref: v
      },
      ownerState: t,
      className: D.root
    });
    return b.jsx($, {
      ...V,
      children: typeof r == "function" ? r(k) : r
    });
  }), zf = u.forwardRef(function(t, n) {
    const { anchorEl: o, children: r, container: l, direction: s = "ltr", disablePortal: a = false, keepMounted: i = false, modifiers: d, open: c, placement: f = "bottom", popperOptions: p = Af, popperRef: m, style: h, transition: C = false, slotProps: x = {}, slots: M = {}, ...v } = t, [O, G] = u.useState(true), P = () => {
      G(false);
    }, H = () => {
      G(true);
    };
    if (!i && !c && (!C || O)) return null;
    let R;
    if (l) R = l;
    else if (o) {
      const y = Dl(o);
      R = y && Lf(y) ? qt(y).body : qt(null).body;
    }
    const T = !c && i && (!C || O) ? "none" : void 0, w = C ? {
      in: c,
      onEnter: P,
      onExited: H
    } : void 0;
    return b.jsx(zu, {
      disablePortal: a,
      container: R,
      children: b.jsx(Gf, {
        anchorEl: o,
        direction: s,
        disablePortal: a,
        modifiers: d,
        ref: n,
        open: C ? !O : c,
        placement: f,
        popperOptions: p,
        popperRef: m,
        slotProps: x,
        slots: M,
        ...v,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: T,
          ...h
        },
        TransitionProps: w,
        children: r
      })
    });
  }), jf = ge(zf, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Yn = u.forwardRef(function(t, n) {
    const o = $t(), r = Ht({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: l, component: s, components: a, componentsProps: i, container: d, disablePortal: c, keepMounted: f, modifiers: p, open: m, placement: h, popperOptions: C, popperRef: x, transition: M, slots: v, slotProps: O, ...G } = r, P = (v == null ? void 0 : v.root) ?? (a == null ? void 0 : a.Root), H = {
      anchorEl: l,
      container: d,
      disablePortal: c,
      keepMounted: f,
      modifiers: p,
      open: m,
      placement: h,
      popperOptions: C,
      popperRef: x,
      transition: M,
      ...G
    };
    return b.jsx(jf, {
      as: s,
      direction: o ? "rtl" : "ltr",
      slots: {
        root: P
      },
      slotProps: O ?? i,
      ...H,
      ref: n
    });
  });
  function Vf(e) {
    return Dt("MuiListSubheader", e);
  }
  Mt("MuiListSubheader", [
    "root",
    "colorPrimary",
    "colorInherit",
    "gutters",
    "inset",
    "sticky"
  ]);
  const Nf = (e) => {
    const { classes: t, color: n, disableGutters: o, inset: r, disableSticky: l } = e, s = {
      root: [
        "root",
        n !== "default" && `color${se(n)}`,
        !o && "gutters",
        r && "inset",
        !l && "sticky"
      ]
    };
    return we(s, Vf, t);
  }, _f = ge("li", {
    name: "MuiListSubheader",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "default" && t[`color${se(n.color)}`],
        !n.disableGutters && t.gutters,
        n.inset && t.inset,
        !n.disableSticky && t.sticky
      ];
    }
  })(et(({ theme: e }) => ({
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
  }))), $l = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiListSubheader"
    }), { className: r, color: l = "default", component: s = "li", disableGutters: a = false, disableSticky: i = false, inset: d = false, ...c } = o, f = {
      ...o,
      color: l,
      component: s,
      disableGutters: a,
      disableSticky: i,
      inset: d
    }, p = Nf(f);
    return b.jsx(_f, {
      as: s,
      className: pe(p.root, r),
      ref: n,
      ownerState: f,
      ...c
    });
  });
  $l && ($l.muiSkipListHighlight = true);
  const Bf = Le(b.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function Wf(e) {
    return Dt("MuiChip", e);
  }
  const Re = Mt("MuiChip", [
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
  ]), Uf = (e) => {
    const { classes: t, disabled: n, size: o, color: r, iconColor: l, onDelete: s, clickable: a, variant: i } = e, d = {
      root: [
        "root",
        i,
        n && "disabled",
        `size${se(o)}`,
        `color${se(r)}`,
        a && "clickable",
        a && `clickableColor${se(r)}`,
        s && "deletable",
        s && `deletableColor${se(r)}`,
        `${i}${se(r)}`
      ],
      label: [
        "label",
        `label${se(o)}`
      ],
      avatar: [
        "avatar",
        `avatar${se(o)}`,
        `avatarColor${se(r)}`
      ],
      icon: [
        "icon",
        `icon${se(o)}`,
        `iconColor${se(l)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${se(o)}`,
        `deleteIconColor${se(r)}`,
        `deleteIcon${se(i)}Color${se(r)}`
      ]
    };
    return we(d, Wf, t);
  }, Kf = ge("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { color: o, iconColor: r, clickable: l, onDelete: s, size: a, variant: i } = n;
      return [
        {
          [`& .${Re.avatar}`]: t.avatar
        },
        {
          [`& .${Re.avatar}`]: t[`avatar${se(a)}`]
        },
        {
          [`& .${Re.avatar}`]: t[`avatarColor${se(o)}`]
        },
        {
          [`& .${Re.icon}`]: t.icon
        },
        {
          [`& .${Re.icon}`]: t[`icon${se(a)}`]
        },
        {
          [`& .${Re.icon}`]: t[`iconColor${se(r)}`]
        },
        {
          [`& .${Re.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${Re.deleteIcon}`]: t[`deleteIcon${se(a)}`]
        },
        {
          [`& .${Re.deleteIcon}`]: t[`deleteIconColor${se(o)}`]
        },
        {
          [`& .${Re.deleteIcon}`]: t[`deleteIcon${se(i)}Color${se(o)}`]
        },
        t.root,
        t[`size${se(a)}`],
        t[`color${se(o)}`],
        l && t.clickable,
        l && o !== "default" && t[`clickableColor${se(o)})`],
        s && t.deletable,
        s && o !== "default" && t[`deletableColor${se(o)}`],
        t[i],
        t[`${i}${se(o)}`]
      ];
    }
  })(et(({ theme: e }) => {
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
      [`&.${Re.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${Re.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${Re.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${Re.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${Re.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${Re.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${Re.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : nt(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : nt(e.palette.text.primary, 0.4)
        }
      },
      variants: [
        {
          props: {
            size: "small"
          },
          style: {
            height: 24,
            [`& .${Re.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${Re.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(fn([
          "contrastText"
        ])).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            backgroundColor: (e.vars || e).palette[n].main,
            color: (e.vars || e).palette[n].contrastText,
            [`& .${Re.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].contrastTextChannel} / 0.7)` : nt(e.palette[n].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].contrastText
              }
            }
          }
        })),
        {
          props: (n) => n.iconColor === n.color,
          style: {
            [`& .${Re.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (n) => n.iconColor === n.color && n.color !== "default",
          style: {
            [`& .${Re.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${Re.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : nt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(fn([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            onDelete: true
          },
          style: {
            [`&.${Re.focusVisible}`]: {
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : nt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${Re.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : nt(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(fn([
          "dark"
        ])).map(([n]) => ({
          props: {
            color: n,
            clickable: true
          },
          style: {
            [`&:hover, &.${Re.focusVisible}`]: {
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
            [`&.${Re.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${Re.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${Re.avatar}`]: {
              marginLeft: 4
            },
            [`& .${Re.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${Re.icon}`]: {
              marginLeft: 4
            },
            [`& .${Re.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${Re.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${Re.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(fn()).map(([n]) => ({
          props: {
            variant: "outlined",
            color: n
          },
          style: {
            color: (e.vars || e).palette[n].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : nt(e.palette[n].main, 0.7)}`,
            [`&.${Re.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : nt(e.palette[n].main, e.palette.action.hoverOpacity)
            },
            [`&.${Re.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.focusOpacity})` : nt(e.palette[n].main, e.palette.action.focusOpacity)
            },
            [`& .${Re.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.7)` : nt(e.palette[n].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[n].main
              }
            }
          }
        }))
      ]
    };
  })), qf = ge("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { size: o } = n;
      return [
        t.label,
        t[`label${se(o)}`]
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
  function ii(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  const fs = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiChip"
    }), { avatar: r, className: l, clickable: s, color: a = "default", component: i, deleteIcon: d, disabled: c = false, icon: f, label: p, onClick: m, onDelete: h, onKeyDown: C, onKeyUp: x, size: M = "medium", variant: v = "filled", tabIndex: O, skipFocusWhenDisabled: G = false, ...P } = o, H = u.useRef(null), R = zt(H, n), T = (z) => {
      z.stopPropagation(), h && h(z);
    }, w = (z) => {
      z.currentTarget === z.target && ii(z) && z.preventDefault(), C && C(z);
    }, y = (z) => {
      z.currentTarget === z.target && h && ii(z) && h(z), x && x(z);
    }, k = s !== false && m ? true : s, D = k || h ? _s : i || "div", $ = {
      ...o,
      component: D,
      disabled: c,
      size: M,
      color: a,
      iconColor: u.isValidElement(f) && f.props.color || a,
      onDelete: !!h,
      clickable: k,
      variant: v
    }, V = Uf($), E = D === _s ? {
      component: i || "div",
      focusVisibleClassName: V.focusVisible,
      ...h && {
        disableRipple: true
      }
    } : {};
    let S = null;
    h && (S = d && u.isValidElement(d) ? u.cloneElement(d, {
      className: pe(d.props.className, V.deleteIcon),
      onClick: T
    }) : b.jsx(Bf, {
      className: pe(V.deleteIcon),
      onClick: T
    }));
    let F = null;
    r && u.isValidElement(r) && (F = u.cloneElement(r, {
      className: pe(V.avatar, r.props.className)
    }));
    let A = null;
    return f && u.isValidElement(f) && (A = u.cloneElement(f, {
      className: pe(V.icon, f.props.className)
    })), b.jsxs(Kf, {
      as: D,
      className: pe(V.root, l),
      disabled: k && c ? true : void 0,
      onClick: m,
      onKeyDown: w,
      onKeyUp: y,
      ref: R,
      tabIndex: G && c ? -1 : O,
      ownerState: $,
      ...E,
      ...P,
      children: [
        F || A,
        b.jsx(qf, {
          className: pe(V.label),
          ownerState: $,
          children: p
        }),
        S
      ]
    });
  });
  function Yf(e) {
    return Dt("MuiAutocomplete", e);
  }
  const Fe = Mt("MuiAutocomplete", [
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
  var ai, ci;
  const Xf = (e) => {
    const { classes: t, disablePortal: n, expanded: o, focused: r, fullWidth: l, hasClearIcon: s, hasPopupIcon: a, inputFocused: i, popupOpen: d, size: c } = e, f = {
      root: [
        "root",
        o && "expanded",
        r && "focused",
        l && "fullWidth",
        s && "hasClearIcon",
        a && "hasPopupIcon"
      ],
      inputRoot: [
        "inputRoot"
      ],
      input: [
        "input",
        i && "inputFocused"
      ],
      tag: [
        "tag",
        `tagSize${se(c)}`
      ],
      endAdornment: [
        "endAdornment"
      ],
      clearIndicator: [
        "clearIndicator"
      ],
      popupIndicator: [
        "popupIndicator",
        d && "popupIndicatorOpen"
      ],
      popper: [
        "popper",
        n && "popperDisablePortal"
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
    return we(f, Yf, t);
  }, Qf = ge("div", {
    name: "MuiAutocomplete",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e, { fullWidth: o, hasClearIcon: r, hasPopupIcon: l, inputFocused: s, size: a } = n;
      return [
        {
          [`& .${Fe.tag}`]: t.tag
        },
        {
          [`& .${Fe.tag}`]: t[`tagSize${se(a)}`]
        },
        {
          [`& .${Fe.inputRoot}`]: t.inputRoot
        },
        {
          [`& .${Fe.input}`]: t.input
        },
        {
          [`& .${Fe.input}`]: s && t.inputFocused
        },
        t.root,
        o && t.fullWidth,
        l && t.hasPopupIcon,
        r && t.hasClearIcon
      ];
    }
  })({
    [`&.${Fe.focused} .${Fe.clearIndicator}`]: {
      visibility: "visible"
    },
    "@media (pointer: fine)": {
      [`&:hover .${Fe.clearIndicator}`]: {
        visibility: "visible"
      }
    },
    [`& .${Fe.tag}`]: {
      margin: 3,
      maxWidth: "calc(100% - 6px)"
    },
    [`& .${Fe.inputRoot}`]: {
      [`.${Fe.hasPopupIcon}&, .${Fe.hasClearIcon}&`]: {
        paddingRight: 30
      },
      [`.${Fe.hasPopupIcon}.${Fe.hasClearIcon}&`]: {
        paddingRight: 56
      },
      [`& .${Fe.input}`]: {
        width: 0,
        minWidth: 30
      }
    },
    [`& .${gl.root}`]: {
      paddingBottom: 1,
      "& .MuiInput-input": {
        padding: "4px 4px 4px 0px"
      }
    },
    [`& .${gl.root}.${Bt.sizeSmall}`]: {
      [`& .${gl.input}`]: {
        padding: "2px 4px 3px 0"
      }
    },
    [`& .${Bs.root}`]: {
      padding: 9,
      [`.${Fe.hasPopupIcon}&, .${Fe.hasClearIcon}&`]: {
        paddingRight: 39
      },
      [`.${Fe.hasPopupIcon}.${Fe.hasClearIcon}&`]: {
        paddingRight: 65
      },
      [`& .${Fe.input}`]: {
        padding: "7.5px 4px 7.5px 5px"
      },
      [`& .${Fe.endAdornment}`]: {
        right: 9
      }
    },
    [`& .${Bs.root}.${Bt.sizeSmall}`]: {
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 6,
      [`& .${Fe.input}`]: {
        padding: "2.5px 4px 2.5px 8px"
      }
    },
    [`& .${Zn.root}`]: {
      paddingTop: 19,
      paddingLeft: 8,
      [`.${Fe.hasPopupIcon}&, .${Fe.hasClearIcon}&`]: {
        paddingRight: 39
      },
      [`.${Fe.hasPopupIcon}.${Fe.hasClearIcon}&`]: {
        paddingRight: 65
      },
      [`& .${Zn.input}`]: {
        padding: "7px 4px"
      },
      [`& .${Fe.endAdornment}`]: {
        right: 9
      }
    },
    [`& .${Zn.root}.${Bt.sizeSmall}`]: {
      paddingBottom: 1,
      [`& .${Zn.input}`]: {
        padding: "2.5px 4px"
      }
    },
    [`& .${Bt.hiddenLabel}`]: {
      paddingTop: 8
    },
    [`& .${Zn.root}.${Bt.hiddenLabel}`]: {
      paddingTop: 0,
      paddingBottom: 0,
      [`& .${Fe.input}`]: {
        paddingTop: 16,
        paddingBottom: 17
      }
    },
    [`& .${Zn.root}.${Bt.hiddenLabel}.${Bt.sizeSmall}`]: {
      [`& .${Fe.input}`]: {
        paddingTop: 8,
        paddingBottom: 9
      }
    },
    [`& .${Fe.input}`]: {
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
          [`& .${Fe.tag}`]: {
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
          [`& .${Fe.input}`]: {
            opacity: 1
          }
        }
      },
      {
        props: {
          multiple: true
        },
        style: {
          [`& .${Fe.inputRoot}`]: {
            flexWrap: "wrap"
          }
        }
      }
    ]
  }), Jf = ge("div", {
    name: "MuiAutocomplete",
    slot: "EndAdornment",
    overridesResolver: (e, t) => t.endAdornment
  })({
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translate(0, -50%)"
  }), Zf = ge(Dn, {
    name: "MuiAutocomplete",
    slot: "ClearIndicator",
    overridesResolver: (e, t) => t.clearIndicator
  })({
    marginRight: -2,
    padding: 4,
    visibility: "hidden"
  }), ep = ge(Dn, {
    name: "MuiAutocomplete",
    slot: "PopupIndicator",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.popupIndicator,
        n.popupOpen && t.popupIndicatorOpen
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
  }), tp = ge(Yn, {
    name: "MuiAutocomplete",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`& .${Fe.option}`]: t.option
        },
        t.popper,
        n.disablePortal && t.popperDisablePortal
      ];
    }
  })(et(({ theme: e }) => ({
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
  }))), np = ge(lr, {
    name: "MuiAutocomplete",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })(et(({ theme: e }) => ({
    ...e.typography.body1,
    overflow: "auto"
  }))), op = ge("div", {
    name: "MuiAutocomplete",
    slot: "Loading",
    overridesResolver: (e, t) => t.loading
  })(et(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), rp = ge("div", {
    name: "MuiAutocomplete",
    slot: "NoOptions",
    overridesResolver: (e, t) => t.noOptions
  })(et(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: "14px 16px"
  }))), lp = ge("ul", {
    name: "MuiAutocomplete",
    slot: "Listbox",
    overridesResolver: (e, t) => t.listbox
  })(et(({ theme: e }) => ({
    listStyle: "none",
    margin: 0,
    padding: "8px 0",
    maxHeight: "40vh",
    overflow: "auto",
    position: "relative",
    [`& .${Fe.option}`]: {
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
      [`&.${Fe.focused}`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      '&[aria-disabled="true"]': {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`&.${Fe.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      '&[aria-selected="true"]': {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : nt(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${Fe.focused}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : nt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: (e.vars || e).palette.action.selected
          }
        },
        [`&.${Fe.focusVisible}`]: {
          backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : nt(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
        }
      }
    }
  }))), sp = ge($l, {
    name: "MuiAutocomplete",
    slot: "GroupLabel",
    overridesResolver: (e, t) => t.groupLabel
  })(et(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    top: -8
  }))), ip = ge("ul", {
    name: "MuiAutocomplete",
    slot: "GroupUl",
    overridesResolver: (e, t) => t.groupUl
  })({
    padding: 0,
    [`& .${Fe.option}`]: {
      paddingLeft: 24
    }
  }), Wa = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiAutocomplete"
    }), { autoComplete: r = false, autoHighlight: l = false, autoSelect: s = false, blurOnSelect: a = false, ChipProps: i, className: d, clearIcon: c = ai || (ai = b.jsx(xd, {
      fontSize: "small"
    })), clearOnBlur: f = !o.freeSolo, clearOnEscape: p = false, clearText: m = "Clear", closeText: h = "Close", componentsProps: C, defaultValue: x = o.multiple ? [] : null, disableClearable: M = false, disableCloseOnSelect: v = false, disabled: O = false, disabledItemsFocusable: G = false, disableListWrap: P = false, disablePortal: H = false, filterOptions: R, filterSelectedOptions: T = false, forcePopupIcon: w = "auto", freeSolo: y = false, fullWidth: k = false, getLimitTagsText: D = (Ue) => `+${Ue}`, getOptionDisabled: $, getOptionKey: V, getOptionLabel: E, isOptionEqualToValue: S, groupBy: F, handleHomeEndKeys: A = !o.freeSolo, id: z, includeInputInList: j = false, inputValue: L, limitTags: N = -1, ListboxComponent: W, ListboxProps: B, loading: U = false, loadingText: K = "Loading\u2026", multiple: ne = false, noOptionsText: ee = "No options", onChange: te, onClose: ae, onHighlightChange: ve, onInputChange: Y, onOpen: re, open: xe, openOnFocus: J = false, openText: ye = "Open", options: Z, PaperComponent: Ce, PopperComponent: me, popupIcon: Me = ci || (ci = b.jsx(Vu, {})), readOnly: Ve = false, renderGroup: Ne, renderInput: Ae, renderOption: De, renderTags: $e, selectOnFocus: _e = !o.freeSolo, size: Ge = "medium", slots: ue = {}, slotProps: be = {}, value: ce, ...fe } = o, { getRootProps: He, getInputProps: Te, getInputLabelProps: tt, getPopupIndicatorProps: pt, getClearProps: st, getTagProps: Cn, getListboxProps: kt, getOptionProps: wn, value: bt, dirty: Lt, expanded: St, id: Et, popupOpen: It, focused: Qn, focusedTag: Jn, anchorEl: Se, setAnchorEl: Vt, inputValue: al, groupedOptions: jn } = Pd({
      ...o,
      componentName: "Autocomplete"
    }), $o = !M && !O && Lt && !Ve, Ho = (!y || w === true) && w !== false, { onMouseDown: cl } = Te(), { ref: ul, ...dl } = kt(), Lo = E || ((Ue) => Ue.label ?? Ue), wt = {
      ...o,
      disablePortal: H,
      expanded: St,
      focused: Qn,
      fullWidth: k,
      getOptionLabel: Lo,
      hasClearIcon: $o,
      hasPopupIcon: Ho,
      inputFocused: Jn === -1,
      popupOpen: It,
      size: Ge
    }, gt = Xf(wt), cn = {
      slots: {
        paper: Ce,
        popper: me,
        ...ue
      },
      slotProps: {
        chip: i,
        listbox: B,
        ...C,
        ...be
      }
    }, [wr, X] = yt("listbox", {
      elementType: lp,
      externalForwardedProps: cn,
      ownerState: wt,
      className: gt.listbox,
      additionalProps: dl,
      ref: ul
    }), [q, ie] = yt("paper", {
      elementType: lr,
      externalForwardedProps: cn,
      ownerState: wt,
      className: gt.paper
    }), [ke, ze] = yt("popper", {
      elementType: Yn,
      externalForwardedProps: cn,
      ownerState: wt,
      className: gt.popper,
      additionalProps: {
        disablePortal: H,
        style: {
          width: Se ? Se.clientWidth : null
        },
        role: "presentation",
        anchorEl: Se,
        open: It
      }
    });
    let Xe;
    if (ne && bt.length > 0) {
      const Ue = (un) => ({
        className: gt.tag,
        disabled: O,
        ...Cn(un)
      });
      $e ? Xe = $e(bt, Ue, wt) : Xe = bt.map((un, kn) => {
        const { key: Ro, ...Au } = Ue({
          index: kn
        });
        return b.jsx(fs, {
          label: Lo(un),
          size: Ge,
          ...Au,
          ...cn.slotProps.chip
        }, Ro);
      });
    }
    if (N > -1 && Array.isArray(Xe)) {
      const Ue = Xe.length - N;
      !Qn && Ue > 0 && (Xe = Xe.splice(0, N), Xe.push(b.jsx("span", {
        className: gt.tag,
        children: D(Ue)
      }, Xe.length)));
    }
    const Nt = Ne || ((Ue) => b.jsxs("li", {
      children: [
        b.jsx(sp, {
          className: gt.groupLabel,
          ownerState: wt,
          component: "div",
          children: Ue.group
        }),
        b.jsx(ip, {
          className: gt.groupUl,
          ownerState: wt,
          children: Ue.children
        })
      ]
    }, Ue.key)), Ru = De || ((Ue, un) => {
      const { key: kn, ...Ro } = Ue;
      return b.jsx("li", {
        ...Ro,
        children: Lo(un)
      }, kn);
    }), js = (Ue, un) => {
      const kn = wn({
        option: Ue,
        index: un
      });
      return Ru({
        ...kn,
        className: gt.option
      }, Ue, {
        selected: kn["aria-selected"],
        index: un,
        inputValue: al
      }, wt);
    }, Vs = cn.slotProps.clearIndicator, Ns = cn.slotProps.popupIndicator;
    return b.jsxs(u.Fragment, {
      children: [
        b.jsx(Qf, {
          ref: n,
          className: pe(gt.root, d),
          ownerState: wt,
          ...He(fe),
          children: Ae({
            id: Et,
            disabled: O,
            fullWidth: true,
            size: Ge === "small" ? "small" : void 0,
            InputLabelProps: tt(),
            InputProps: {
              ref: Vt,
              className: gt.inputRoot,
              startAdornment: Xe,
              onMouseDown: (Ue) => {
                Ue.target === Ue.currentTarget && cl(Ue);
              },
              ...($o || Ho) && {
                endAdornment: b.jsxs(Jf, {
                  className: gt.endAdornment,
                  ownerState: wt,
                  children: [
                    $o ? b.jsx(Zf, {
                      ...st(),
                      "aria-label": m,
                      title: m,
                      ownerState: wt,
                      ...Vs,
                      className: pe(gt.clearIndicator, Vs == null ? void 0 : Vs.className),
                      children: c
                    }) : null,
                    Ho ? b.jsx(ep, {
                      ...pt(),
                      disabled: O,
                      "aria-label": It ? h : ye,
                      title: It ? h : ye,
                      ownerState: wt,
                      ...Ns,
                      className: pe(gt.popupIndicator, Ns == null ? void 0 : Ns.className),
                      children: Me
                    }) : null
                  ]
                })
              }
            },
            inputProps: {
              className: gt.input,
              disabled: O,
              readOnly: Ve,
              ...Te()
            }
          })
        }),
        Se ? b.jsx(tp, {
          as: ke,
          ...ze,
          children: b.jsxs(np, {
            as: q,
            ...ie,
            children: [
              U && jn.length === 0 ? b.jsx(op, {
                className: gt.loading,
                ownerState: wt,
                children: K
              }) : null,
              jn.length === 0 && !y && !U ? b.jsx(rp, {
                className: gt.noOptions,
                ownerState: wt,
                role: "presentation",
                onMouseDown: (Ue) => {
                  Ue.preventDefault();
                },
                children: ee
              }) : null,
              jn.length > 0 ? b.jsx(wr, {
                as: W,
                ...X,
                children: jn.map((Ue, un) => F ? Nt({
                  key: Ue.key,
                  group: Ue.group,
                  children: Ue.options.map((kn, Ro) => js(kn, Ue.index + Ro))
                }) : js(Ue, un))
              }) : null
            ]
          })
        }) : null
      ]
    });
  });
  function ap(e) {
    const { badgeContent: t, invisible: n = false, max: o = 99, showZero: r = false } = e, l = rs({
      badgeContent: t,
      max: o
    });
    let s = n;
    n === false && t === 0 && !r && (s = true);
    const { badgeContent: a, max: i = o } = s ? l : e, d = a && Number(a) > i ? `${i}+` : a;
    return {
      badgeContent: a,
      invisible: s,
      max: i,
      displayValue: d
    };
  }
  function cp(e) {
    return Dt("MuiBadge", e);
  }
  const En = Mt("MuiBadge", [
    "root",
    "badge",
    "dot",
    "standard",
    "anchorOriginTopRight",
    "anchorOriginBottomRight",
    "anchorOriginTopLeft",
    "anchorOriginBottomLeft",
    "invisible",
    "colorError",
    "colorInfo",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorWarning",
    "overlapRectangular",
    "overlapCircular",
    "anchorOriginTopLeftCircular",
    "anchorOriginTopLeftRectangular",
    "anchorOriginTopRightCircular",
    "anchorOriginTopRightRectangular",
    "anchorOriginBottomLeftCircular",
    "anchorOriginBottomLeftRectangular",
    "anchorOriginBottomRightCircular",
    "anchorOriginBottomRightRectangular"
  ]), hl = 10, ml = 4, up = (e) => {
    const { color: t, anchorOrigin: n, invisible: o, overlap: r, variant: l, classes: s = {} } = e, a = {
      root: [
        "root"
      ],
      badge: [
        "badge",
        l,
        o && "invisible",
        `anchorOrigin${se(n.vertical)}${se(n.horizontal)}`,
        `anchorOrigin${se(n.vertical)}${se(n.horizontal)}${se(r)}`,
        `overlap${se(r)}`,
        t !== "default" && `color${se(t)}`
      ]
    };
    return we(a, cp, s);
  }, dp = ge("span", {
    name: "MuiBadge",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
    flexShrink: 0
  }), fp = ge("span", {
    name: "MuiBadge",
    slot: "Badge",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.badge,
        t[n.variant],
        t[`anchorOrigin${se(n.anchorOrigin.vertical)}${se(n.anchorOrigin.horizontal)}${se(n.overlap)}`],
        n.color !== "default" && t[`color${se(n.color)}`],
        n.invisible && t.invisible
      ];
    }
  })(et(({ theme: e }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    boxSizing: "border-box",
    fontFamily: e.typography.fontFamily,
    fontWeight: e.typography.fontWeightMedium,
    fontSize: e.typography.pxToRem(12),
    minWidth: hl * 2,
    lineHeight: 1,
    padding: "0 6px",
    height: hl * 2,
    borderRadius: hl,
    zIndex: 1,
    transition: e.transitions.create("transform", {
      easing: e.transitions.easing.easeInOut,
      duration: e.transitions.duration.enteringScreen
    }),
    variants: [
      ...Object.entries(e.palette).filter(fn([
        "contrastText"
      ])).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          backgroundColor: (e.vars || e).palette[t].main,
          color: (e.vars || e).palette[t].contrastText
        }
      })),
      {
        props: {
          variant: "dot"
        },
        style: {
          borderRadius: ml,
          height: ml * 2,
          minWidth: ml * 2,
          padding: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
        style: {
          top: 0,
          right: 0,
          transform: "scale(1) translate(50%, -50%)",
          transformOrigin: "100% 0%",
          [`&.${En.invisible}`]: {
            transform: "scale(0) translate(50%, -50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "rectangular",
        style: {
          bottom: 0,
          right: 0,
          transform: "scale(1) translate(50%, 50%)",
          transformOrigin: "100% 100%",
          [`&.${En.invisible}`]: {
            transform: "scale(0) translate(50%, 50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
        style: {
          top: 0,
          left: 0,
          transform: "scale(1) translate(-50%, -50%)",
          transformOrigin: "0% 0%",
          [`&.${En.invisible}`]: {
            transform: "scale(0) translate(-50%, -50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "rectangular",
        style: {
          bottom: 0,
          left: 0,
          transform: "scale(1) translate(-50%, 50%)",
          transformOrigin: "0% 100%",
          [`&.${En.invisible}`]: {
            transform: "scale(0) translate(-50%, 50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
        style: {
          top: "14%",
          right: "14%",
          transform: "scale(1) translate(50%, -50%)",
          transformOrigin: "100% 0%",
          [`&.${En.invisible}`]: {
            transform: "scale(0) translate(50%, -50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "right" && t.overlap === "circular",
        style: {
          bottom: "14%",
          right: "14%",
          transform: "scale(1) translate(50%, 50%)",
          transformOrigin: "100% 100%",
          [`&.${En.invisible}`]: {
            transform: "scale(0) translate(50%, 50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "top" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
        style: {
          top: "14%",
          left: "14%",
          transform: "scale(1) translate(-50%, -50%)",
          transformOrigin: "0% 0%",
          [`&.${En.invisible}`]: {
            transform: "scale(0) translate(-50%, -50%)"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.anchorOrigin.vertical === "bottom" && t.anchorOrigin.horizontal === "left" && t.overlap === "circular",
        style: {
          bottom: "14%",
          left: "14%",
          transform: "scale(1) translate(-50%, 50%)",
          transformOrigin: "0% 100%",
          [`&.${En.invisible}`]: {
            transform: "scale(0) translate(-50%, 50%)"
          }
        }
      },
      {
        props: {
          invisible: true
        },
        style: {
          transition: e.transitions.create("transform", {
            easing: e.transitions.easing.easeInOut,
            duration: e.transitions.duration.leavingScreen
          })
        }
      }
    ]
  })));
  function ui(e) {
    return {
      vertical: (e == null ? void 0 : e.vertical) ?? "top",
      horizontal: (e == null ? void 0 : e.horizontal) ?? "right"
    };
  }
  const pp = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiBadge"
    }), { anchorOrigin: r, className: l, classes: s, component: a, components: i = {}, componentsProps: d = {}, children: c, overlap: f = "rectangular", color: p = "default", invisible: m = false, max: h = 99, badgeContent: C, slots: x, slotProps: M, showZero: v = false, variant: O = "standard", ...G } = o, { badgeContent: P, invisible: H, max: R, displayValue: T } = ap({
      max: h,
      invisible: m,
      badgeContent: C,
      showZero: v
    }), w = rs({
      anchorOrigin: ui(r),
      color: p,
      overlap: f,
      variant: O,
      badgeContent: C
    }), y = H || P == null && O !== "dot", { color: k = p, overlap: D = f, anchorOrigin: $, variant: V = O } = y ? w : o, E = ui($), S = V !== "dot" ? T : void 0, F = {
      ...o,
      badgeContent: P,
      invisible: y,
      max: R,
      displayValue: S,
      showZero: v,
      anchorOrigin: E,
      color: k,
      overlap: D,
      variant: V
    }, A = up(F), z = {
      slots: {
        root: (x == null ? void 0 : x.root) ?? i.Root,
        badge: (x == null ? void 0 : x.badge) ?? i.Badge
      },
      slotProps: {
        root: (M == null ? void 0 : M.root) ?? d.root,
        badge: (M == null ? void 0 : M.badge) ?? d.badge
      }
    }, [j, L] = yt("root", {
      elementType: dp,
      externalForwardedProps: {
        ...z,
        ...G
      },
      ownerState: F,
      className: pe(A.root, l),
      ref: n,
      additionalProps: {
        as: a
      }
    }), [N, W] = yt("badge", {
      elementType: fp,
      externalForwardedProps: z,
      ownerState: F,
      className: A.badge
    });
    return b.jsxs(j, {
      ...L,
      children: [
        c,
        b.jsx(N, {
          ...W,
          children: S
        })
      ]
    });
  });
  function gp(e) {
    return Dt("MuiCard", e);
  }
  Mt("MuiCard", [
    "root"
  ]);
  const hp = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "root"
      ]
    }, gp, t);
  }, mp = ge(lr, {
    name: "MuiCard",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    overflow: "hidden"
  }), bp = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiCard"
    }), { className: r, raised: l = false, ...s } = o, a = {
      ...o,
      raised: l
    }, i = hp(a);
    return b.jsx(mp, {
      className: pe(i.root, r),
      elevation: l ? 8 : void 0,
      ref: n,
      ownerState: a,
      ...s
    });
  });
  function di(e) {
    return e.substring(2).toLowerCase();
  }
  function Cp(e, t) {
    return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
  }
  function Ua(e) {
    const { children: t, disableReactTree: n = false, mouseEvent: o = "onClick", onClickAway: r, touchEvent: l = "onTouchEnd" } = e, s = u.useRef(false), a = u.useRef(null), i = u.useRef(false), d = u.useRef(false);
    u.useEffect(() => (setTimeout(() => {
      i.current = true;
    }, 0), () => {
      i.current = false;
    }), []);
    const c = zt(ka(t), a), f = We((h) => {
      const C = d.current;
      d.current = false;
      const x = qt(a.current);
      if (!i.current || !a.current || "clientX" in h && Cp(h, x)) return;
      if (s.current) {
        s.current = false;
        return;
      }
      let M;
      h.composedPath ? M = h.composedPath().includes(a.current) : M = !x.documentElement.contains(h.target) || a.current.contains(h.target), !M && (n || !C) && r(h);
    }), p = (h) => (C) => {
      d.current = true;
      const x = t.props[h];
      x && x(C);
    }, m = {
      ref: c
    };
    return l !== false && (m[l] = p(l)), u.useEffect(() => {
      if (l !== false) {
        const h = di(l), C = qt(a.current), x = () => {
          s.current = true;
        };
        return C.addEventListener(h, f), C.addEventListener("touchmove", x), () => {
          C.removeEventListener(h, f), C.removeEventListener("touchmove", x);
        };
      }
    }, [
      f,
      l
    ]), o !== false && (m[o] = p(o)), u.useEffect(() => {
      if (o !== false) {
        const h = di(o), C = qt(a.current);
        return C.addEventListener(h, f), () => {
          C.removeEventListener(h, f);
        };
      }
    }, [
      f,
      o
    ]), u.cloneElement(t, m);
  }
  function wp(e) {
    return Dt("MuiInputAdornment", e);
  }
  const fi = Mt("MuiInputAdornment", [
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
  var pi;
  const vp = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      t[`position${se(n.position)}`],
      n.disablePointerEvents === true && t.disablePointerEvents,
      t[n.variant]
    ];
  }, xp = (e) => {
    const { classes: t, disablePointerEvents: n, hiddenLabel: o, position: r, size: l, variant: s } = e, a = {
      root: [
        "root",
        n && "disablePointerEvents",
        r && `position${se(r)}`,
        s,
        o && "hiddenLabel",
        l && `size${se(l)}`
      ]
    };
    return we(a, wp, t);
  }, yp = ge("div", {
    name: "MuiInputAdornment",
    slot: "Root",
    overridesResolver: vp
  })(et(({ theme: e }) => ({
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
          [`&.${fi.positionStart}&:not(.${fi.hiddenLabel})`]: {
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
  }))), Ka = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiInputAdornment"
    }), { children: r, className: l, component: s = "div", disablePointerEvents: a = false, disableTypography: i = false, position: d, variant: c, ...f } = o, p = Nu() || {};
    let m = c;
    c && p.variant, p && !m && (m = p.variant);
    const h = {
      ...o,
      hiddenLabel: p.hiddenLabel,
      size: p.size,
      disablePointerEvents: a,
      position: d,
      variant: m
    }, C = xp(h);
    return b.jsx(_u.Provider, {
      value: null,
      children: b.jsx(yp, {
        as: s,
        ownerState: h,
        className: pe(C.root, l),
        ref: n,
        ...f,
        children: typeof r == "string" && !i ? b.jsx(Uo, {
          color: "textSecondary",
          children: r
        }) : b.jsxs(u.Fragment, {
          children: [
            d === "start" ? pi || (pi = b.jsx("span", {
              className: "notranslate",
              "aria-hidden": true,
              children: "\u200B"
            })) : null,
            r
          ]
        })
      })
    });
  });
  function Sp(e) {
    return Dt("MuiLinearProgress", e);
  }
  Mt("MuiLinearProgress", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "determinate",
    "indeterminate",
    "buffer",
    "query",
    "dashed",
    "dashedColorPrimary",
    "dashedColorSecondary",
    "bar",
    "bar1",
    "bar2",
    "barColorPrimary",
    "barColorSecondary",
    "bar1Indeterminate",
    "bar1Determinate",
    "bar1Buffer",
    "bar2Indeterminate",
    "bar2Buffer"
  ]);
  const Hl = 4, Ll = ir`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`, Ip = typeof Ll != "string" ? sr`
        animation: ${Ll} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, Rl = ir`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`, Pp = typeof Rl != "string" ? sr`
        animation: ${Rl} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, Al = ir`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`, Mp = typeof Al != "string" ? sr`
        animation: ${Al} 3s infinite linear;
      ` : null, kp = (e) => {
    const { classes: t, variant: n, color: o } = e, r = {
      root: [
        "root",
        `color${se(o)}`,
        n
      ],
      dashed: [
        "dashed",
        `dashedColor${se(o)}`
      ],
      bar1: [
        "bar",
        "bar1",
        `barColor${se(o)}`,
        (n === "indeterminate" || n === "query") && "bar1Indeterminate",
        n === "determinate" && "bar1Determinate",
        n === "buffer" && "bar1Buffer"
      ],
      bar2: [
        "bar",
        "bar2",
        n !== "buffer" && `barColor${se(o)}`,
        n === "buffer" && `color${se(o)}`,
        (n === "indeterminate" || n === "query") && "bar2Indeterminate",
        n === "buffer" && "bar2Buffer"
      ]
    };
    return we(r, Sp, t);
  }, ps = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? Zl(e.palette[t].main, 0.62) : es(e.palette[t].main, 0.5), Ep = ge("span", {
    name: "MuiLinearProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`color${se(n.color)}`],
        t[n.variant]
      ];
    }
  })(et(({ theme: e }) => ({
    position: "relative",
    overflow: "hidden",
    display: "block",
    height: 4,
    zIndex: 0,
    "@media print": {
      colorAdjust: "exact"
    },
    variants: [
      ...Object.entries(e.palette).filter(fn()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          backgroundColor: ps(e, t)
        }
      })),
      {
        props: ({ ownerState: t }) => t.color === "inherit" && t.variant !== "buffer",
        style: {
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "currentColor",
            opacity: 0.3
          }
        }
      },
      {
        props: {
          variant: "buffer"
        },
        style: {
          backgroundColor: "transparent"
        }
      },
      {
        props: {
          variant: "query"
        },
        style: {
          transform: "rotate(180deg)"
        }
      }
    ]
  }))), Fp = ge("span", {
    name: "MuiLinearProgress",
    slot: "Dashed",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.dashed,
        t[`dashedColor${se(n.color)}`]
      ];
    }
  })(et(({ theme: e }) => ({
    position: "absolute",
    marginTop: 0,
    height: "100%",
    width: "100%",
    backgroundSize: "10px 10px",
    backgroundPosition: "0 -23px",
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          opacity: 0.3,
          backgroundImage: "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"
        }
      },
      ...Object.entries(e.palette).filter(fn()).map(([t]) => {
        const n = ps(e, t);
        return {
          props: {
            color: t
          },
          style: {
            backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`
          }
        };
      })
    ]
  })), Mp || {
    animation: `${Al} 3s infinite linear`
  }), Tp = ge("span", {
    name: "MuiLinearProgress",
    slot: "Bar1",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t.bar1,
        t[`barColor${se(n.color)}`],
        (n.variant === "indeterminate" || n.variant === "query") && t.bar1Indeterminate,
        n.variant === "determinate" && t.bar1Determinate,
        n.variant === "buffer" && t.bar1Buffer
      ];
    }
  })(et(({ theme: e }) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    variants: [
      {
        props: {
          color: "inherit"
        },
        style: {
          backgroundColor: "currentColor"
        }
      },
      ...Object.entries(e.palette).filter(fn()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          backgroundColor: (e.vars || e).palette[t].main
        }
      })),
      {
        props: {
          variant: "determinate"
        },
        style: {
          transition: `transform .${Hl}s linear`
        }
      },
      {
        props: {
          variant: "buffer"
        },
        style: {
          zIndex: 1,
          transition: `transform .${Hl}s linear`
        }
      },
      {
        props: ({ ownerState: t }) => t.variant === "indeterminate" || t.variant === "query",
        style: {
          width: "auto"
        }
      },
      {
        props: ({ ownerState: t }) => t.variant === "indeterminate" || t.variant === "query",
        style: Ip || {
          animation: `${Ll} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
        }
      }
    ]
  }))), Op = ge("span", {
    name: "MuiLinearProgress",
    slot: "Bar2",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.bar,
        t.bar2,
        t[`barColor${se(n.color)}`],
        (n.variant === "indeterminate" || n.variant === "query") && t.bar2Indeterminate,
        n.variant === "buffer" && t.bar2Buffer
      ];
    }
  })(et(({ theme: e }) => ({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    variants: [
      ...Object.entries(e.palette).filter(fn()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          "--LinearProgressBar2-barColor": (e.vars || e).palette[t].main
        }
      })),
      {
        props: ({ ownerState: t }) => t.variant !== "buffer" && t.color !== "inherit",
        style: {
          backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)"
        }
      },
      {
        props: ({ ownerState: t }) => t.variant !== "buffer" && t.color === "inherit",
        style: {
          backgroundColor: "currentColor"
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          opacity: 0.3
        }
      },
      ...Object.entries(e.palette).filter(fn()).map(([t]) => ({
        props: {
          color: t,
          variant: "buffer"
        },
        style: {
          backgroundColor: ps(e, t),
          transition: `transform .${Hl}s linear`
        }
      })),
      {
        props: ({ ownerState: t }) => t.variant === "indeterminate" || t.variant === "query",
        style: {
          width: "auto"
        }
      },
      {
        props: ({ ownerState: t }) => t.variant === "indeterminate" || t.variant === "query",
        style: Pp || {
          animation: `${Rl} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
        }
      }
    ]
  }))), Dp = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiLinearProgress"
    }), { className: r, color: l = "primary", value: s, valueBuffer: a, variant: i = "indeterminate", ...d } = o, c = {
      ...o,
      color: l,
      variant: i
    }, f = kp(c), p = $t(), m = {}, h = {
      bar1: {},
      bar2: {}
    };
    if ((i === "determinate" || i === "buffer") && s !== void 0) {
      m["aria-valuenow"] = Math.round(s), m["aria-valuemin"] = 0, m["aria-valuemax"] = 100;
      let C = s - 100;
      p && (C = -C), h.bar1.transform = `translateX(${C}%)`;
    }
    if (i === "buffer" && a !== void 0) {
      let C = (a || 0) - 100;
      p && (C = -C), h.bar2.transform = `translateX(${C}%)`;
    }
    return b.jsxs(Ep, {
      className: pe(f.root, r),
      ownerState: c,
      role: "progressbar",
      ...m,
      ref: n,
      ...d,
      children: [
        i === "buffer" ? b.jsx(Fp, {
          className: f.dashed,
          ownerState: c
        }) : null,
        b.jsx(Tp, {
          className: f.bar1,
          ownerState: c,
          style: h.bar1
        }),
        i === "determinate" ? null : b.jsx(Op, {
          className: f.bar2,
          ownerState: c,
          style: h.bar2
        })
      ]
    });
  }), $p = (e) => {
    const { alignItems: t, classes: n } = e;
    return we({
      root: [
        "root",
        t === "flex-start" && "alignItemsFlexStart"
      ]
    }, cd, n);
  }, Hp = ge("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.alignItems === "flex-start" && t.alignItemsFlexStart
      ];
    }
  })(et(({ theme: e }) => ({
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
  }))), po = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiListItemIcon"
    }), { className: r, ...l } = o, s = u.useContext(Bu), a = {
      ...o,
      alignItems: s.alignItems
    }, i = $p(a);
    return b.jsx(Hp, {
      className: pe(i.root, r),
      ownerState: a,
      ref: n,
      ...l
    });
  }), Lp = Le(b.jsx("path", {
    d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
  }), "FirstPage"), Rp = Le(b.jsx("path", {
    d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
  }), "LastPage");
  function Ap(e) {
    return Dt("MuiSkeleton", e);
  }
  Mt("MuiSkeleton", [
    "root",
    "text",
    "rectangular",
    "rounded",
    "circular",
    "pulse",
    "wave",
    "withChildren",
    "fitContent",
    "heightAuto"
  ]);
  const Gp = (e) => {
    const { classes: t, variant: n, animation: o, hasChildren: r, width: l, height: s } = e;
    return we({
      root: [
        "root",
        n,
        o,
        r && "withChildren",
        r && !l && "fitContent",
        r && !s && "heightAuto"
      ]
    }, Ap, t);
  }, Gl = ir`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, zl = ir`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`, zp = typeof Gl != "string" ? sr`
        animation: ${Gl} 2s ease-in-out 0.5s infinite;
      ` : null, jp = typeof zl != "string" ? sr`
        &::after {
          animation: ${zl} 2s linear 0.5s infinite;
        }
      ` : null, Vp = ge("span", {
    name: "MuiSkeleton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        n.animation !== false && t[n.animation],
        n.hasChildren && t.withChildren,
        n.hasChildren && !n.width && t.fitContent,
        n.hasChildren && !n.height && t.heightAuto
      ];
    }
  })(et(({ theme: e }) => {
    const t = wd(e.shape.borderRadius) || "px", n = vd(e.shape.borderRadius);
    return {
      display: "block",
      backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : nt(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
      height: "1.2em",
      variants: [
        {
          props: {
            variant: "text"
          },
          style: {
            marginTop: 0,
            marginBottom: 0,
            height: "auto",
            transformOrigin: "0 55%",
            transform: "scale(1, 0.60)",
            borderRadius: `${n}${t}/${Math.round(n / 0.6 * 10) / 10}${t}`,
            "&:empty:before": {
              content: '"\\00a0"'
            }
          }
        },
        {
          props: {
            variant: "circular"
          },
          style: {
            borderRadius: "50%"
          }
        },
        {
          props: {
            variant: "rounded"
          },
          style: {
            borderRadius: (e.vars || e).shape.borderRadius
          }
        },
        {
          props: ({ ownerState: o }) => o.hasChildren,
          style: {
            "& > *": {
              visibility: "hidden"
            }
          }
        },
        {
          props: ({ ownerState: o }) => o.hasChildren && !o.width,
          style: {
            maxWidth: "fit-content"
          }
        },
        {
          props: ({ ownerState: o }) => o.hasChildren && !o.height,
          style: {
            height: "auto"
          }
        },
        {
          props: {
            animation: "pulse"
          },
          style: zp || {
            animation: `${Gl} 2s ease-in-out 0.5s infinite`
          }
        },
        {
          props: {
            animation: "wave"
          },
          style: {
            position: "relative",
            overflow: "hidden",
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            "&::after": {
              background: `linear-gradient(
                90deg,
                transparent,
                ${(e.vars || e).palette.action.hover},
                transparent
              )`,
              content: '""',
              position: "absolute",
              transform: "translateX(-100%)",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0
            }
          }
        },
        {
          props: {
            animation: "wave"
          },
          style: jp || {
            "&::after": {
              animation: `${zl} 2s linear 0.5s infinite`
            }
          }
        }
      ]
    };
  })), Np = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiSkeleton"
    }), { animation: r = "pulse", className: l, component: s = "span", height: a, style: i, variant: d = "text", width: c, ...f } = o, p = {
      ...o,
      animation: r,
      component: s,
      variant: d,
      hasChildren: !!f.children
    }, m = Gp(p);
    return b.jsx(Vp, {
      as: s,
      ref: n,
      className: pe(m.root, l),
      ownerState: p,
      ...f,
      style: {
        width: c,
        height: a,
        ...i
      }
    });
  });
  function _p(e) {
    return Dt("MuiTooltip", e);
  }
  const rt = Mt("MuiTooltip", [
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
  function Bp(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Wp = (e) => {
    const { classes: t, disableInteractive: n, arrow: o, touch: r, placement: l } = e, s = {
      popper: [
        "popper",
        !n && "popperInteractive",
        o && "popperArrow"
      ],
      tooltip: [
        "tooltip",
        o && "tooltipArrow",
        r && "touch",
        `tooltipPlacement${se(l.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return we(s, _p, t);
  }, Up = ge(Yn, {
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
  })(et(({ theme: e }) => ({
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
          [`&[data-popper-placement*="bottom"] .${rt.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${rt.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${rt.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${rt.arrow}`]: {
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
          [`&[data-popper-placement*="right"] .${rt.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${rt.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${rt.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${rt.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), Kp = ge("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${se(n.placement.split("-")[0])}`]
      ];
    }
  })(et(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : nt(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${rt.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${rt.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${rt.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${rt.popper}[data-popper-placement*="bottom"] &`]: {
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
          lineHeight: `${Bp(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${rt.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${rt.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${rt.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${rt.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${rt.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${rt.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${rt.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${rt.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${rt.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${rt.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), qp = ge("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(et(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : nt(e.palette.grey[700], 0.9),
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
  let xr = false;
  const gi = new Wu();
  let Go = {
    x: 0,
    y: 0
  };
  function yr(e, t) {
    return (n, ...o) => {
      t && t(n, ...o), e(n, ...o);
    };
  }
  const jl = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiTooltip"
    }), { arrow: r = false, children: l, classes: s, components: a = {}, componentsProps: i = {}, describeChild: d = false, disableFocusListener: c = false, disableHoverListener: f = false, disableInteractive: p = false, disableTouchListener: m = false, enterDelay: h = 100, enterNextDelay: C = 0, enterTouchDelay: x = 700, followCursor: M = false, id: v, leaveDelay: O = 0, leaveTouchDelay: G = 1500, onClose: P, onOpen: H, open: R, placement: T = "bottom", PopperComponent: w, PopperProps: y = {}, slotProps: k = {}, slots: D = {}, title: $, TransitionComponent: V, TransitionProps: E, ...S } = o, F = u.isValidElement(l) ? l : b.jsx("span", {
      children: l
    }), A = Ea(), z = $t(), [j, L] = u.useState(), [N, W] = u.useState(null), B = u.useRef(false), U = p || M, K = sn(), ne = sn(), ee = sn(), te = sn(), [ae, ve] = Er({
      controlled: R,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let Y = ae;
    const re = Je(v), xe = u.useRef(), J = We(() => {
      xe.current !== void 0 && (document.body.style.WebkitUserSelect = xe.current, xe.current = void 0), te.clear();
    });
    u.useEffect(() => J, [
      J
    ]);
    const ye = (Se) => {
      gi.clear(), xr = true, ve(true), H && !Y && H(Se);
    }, Z = We((Se) => {
      gi.start(800 + O, () => {
        xr = false;
      }), ve(false), P && Y && P(Se), K.start(A.transitions.duration.shortest, () => {
        B.current = false;
      });
    }), Ce = (Se) => {
      B.current && Se.type !== "touchstart" || (j && j.removeAttribute("title"), ne.clear(), ee.clear(), h || xr && C ? ne.start(xr ? C : h, () => {
        ye(Se);
      }) : ye(Se));
    }, me = (Se) => {
      ne.clear(), ee.start(O, () => {
        Z(Se);
      });
    }, [, Me] = u.useState(false), Ve = (Se) => {
      Ws(Se.target) || (Me(false), me(Se));
    }, Ne = (Se) => {
      j || L(Se.currentTarget), Ws(Se.target) && (Me(true), Ce(Se));
    }, Ae = (Se) => {
      B.current = true;
      const Vt = F.props;
      Vt.onTouchStart && Vt.onTouchStart(Se);
    }, De = (Se) => {
      Ae(Se), ee.clear(), K.clear(), J(), xe.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", te.start(x, () => {
        document.body.style.WebkitUserSelect = xe.current, Ce(Se);
      });
    }, $e = (Se) => {
      F.props.onTouchEnd && F.props.onTouchEnd(Se), J(), ee.start(G, () => {
        Z(Se);
      });
    };
    u.useEffect(() => {
      if (!Y) return;
      function Se(Vt) {
        Vt.key === "Escape" && Z(Vt);
      }
      return document.addEventListener("keydown", Se), () => {
        document.removeEventListener("keydown", Se);
      };
    }, [
      Z,
      Y
    ]);
    const _e = zt(ka(F), L, n);
    !$ && $ !== 0 && (Y = false);
    const Ge = u.useRef(), ue = (Se) => {
      const Vt = F.props;
      Vt.onMouseMove && Vt.onMouseMove(Se), Go = {
        x: Se.clientX,
        y: Se.clientY
      }, Ge.current && Ge.current.update();
    }, be = {}, ce = typeof $ == "string";
    d ? (be.title = !Y && ce && !f ? $ : null, be["aria-describedby"] = Y ? re : null) : (be["aria-label"] = ce ? $ : null, be["aria-labelledby"] = Y && !ce ? re : null);
    const fe = {
      ...be,
      ...S,
      ...F.props,
      className: pe(S.className, F.props.className),
      onTouchStart: Ae,
      ref: _e,
      ...M ? {
        onMouseMove: ue
      } : {}
    }, He = {};
    m || (fe.onTouchStart = De, fe.onTouchEnd = $e), f || (fe.onMouseOver = yr(Ce, fe.onMouseOver), fe.onMouseLeave = yr(me, fe.onMouseLeave), U || (He.onMouseOver = Ce, He.onMouseLeave = me)), c || (fe.onFocus = yr(Ne, fe.onFocus), fe.onBlur = yr(Ve, fe.onBlur), U || (He.onFocus = Ne, He.onBlur = Ve));
    const Te = {
      ...o,
      isRtl: z,
      arrow: r,
      disableInteractive: U,
      placement: T,
      PopperComponentProp: w,
      touch: B.current
    }, tt = typeof k.popper == "function" ? k.popper(Te) : k.popper, pt = u.useMemo(() => {
      var _a2, _b2;
      let Se = [
        {
          name: "arrow",
          enabled: !!N,
          options: {
            element: N,
            padding: 4
          }
        }
      ];
      return ((_a2 = y.popperOptions) == null ? void 0 : _a2.modifiers) && (Se = Se.concat(y.popperOptions.modifiers)), ((_b2 = tt == null ? void 0 : tt.popperOptions) == null ? void 0 : _b2.modifiers) && (Se = Se.concat(tt.popperOptions.modifiers)), {
        ...y.popperOptions,
        ...tt == null ? void 0 : tt.popperOptions,
        modifiers: Se
      };
    }, [
      N,
      y.popperOptions,
      tt == null ? void 0 : tt.popperOptions
    ]), st = Wp(Te), Cn = typeof k.transition == "function" ? k.transition(Te) : k.transition, kt = {
      slots: {
        popper: a.Popper,
        transition: a.Transition ?? V,
        tooltip: a.Tooltip,
        arrow: a.Arrow,
        ...D
      },
      slotProps: {
        arrow: k.arrow ?? i.arrow,
        popper: {
          ...y,
          ...tt ?? i.popper
        },
        tooltip: k.tooltip ?? i.tooltip,
        transition: {
          ...E,
          ...Cn ?? i.transition
        }
      }
    }, [wn, bt] = yt("popper", {
      elementType: Up,
      externalForwardedProps: kt,
      ownerState: Te,
      className: pe(st.popper, y == null ? void 0 : y.className)
    }), [Lt, St] = yt("transition", {
      elementType: Fa,
      externalForwardedProps: kt,
      ownerState: Te
    }), [Et, It] = yt("tooltip", {
      elementType: Kp,
      className: st.tooltip,
      externalForwardedProps: kt,
      ownerState: Te
    }), [Qn, Jn] = yt("arrow", {
      elementType: qp,
      className: st.arrow,
      externalForwardedProps: kt,
      ownerState: Te,
      ref: W
    });
    return b.jsxs(u.Fragment, {
      children: [
        u.cloneElement(F, fe),
        b.jsx(wn, {
          as: w ?? Yn,
          placement: T,
          anchorEl: M ? {
            getBoundingClientRect: () => ({
              top: Go.y,
              left: Go.x,
              right: Go.x,
              bottom: Go.y,
              width: 0,
              height: 0
            })
          } : j,
          popperRef: Ge,
          open: j ? Y : false,
          id: re,
          transition: true,
          ...He,
          ...bt,
          popperOptions: pt,
          children: ({ TransitionProps: Se }) => b.jsx(Lt, {
            timeout: A.transitions.duration.shorter,
            ...Se,
            ...St,
            children: b.jsxs(Et, {
              ...It,
              children: [
                $,
                r ? b.jsx(Qn, {
                  ...Jn
                }) : null
              ]
            })
          })
        })
      ]
    });
  }), Yp = u.createContext(), Xp = u.createContext();
  function Qp(e) {
    return Dt("MuiTableCell", e);
  }
  const Jp = Mt("MuiTableCell", [
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
  ]), Zp = (e) => {
    const { classes: t, variant: n, align: o, padding: r, size: l, stickyHeader: s } = e, a = {
      root: [
        "root",
        n,
        s && "stickyHeader",
        o !== "inherit" && `align${se(o)}`,
        r !== "normal" && `padding${se(r)}`,
        `size${se(l)}`
      ]
    };
    return we(a, Qp, t);
  }, eg = ge("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`size${se(n.size)}`],
        n.padding !== "normal" && t[`padding${se(n.padding)}`],
        n.align !== "inherit" && t[`align${se(n.align)}`],
        n.stickyHeader && t.stickyHeader
      ];
    }
  })(et(({ theme: e }) => ({
    ...e.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Zl(nt(e.palette.divider, 1), 0.88) : es(nt(e.palette.divider, 1), 0.68)}`,
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
          [`&.${Jp.paddingCheckbox}`]: {
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
  }))), Vl = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: l, component: s, padding: a, scope: i, size: d, sortDirection: c, variant: f, ...p } = o, m = u.useContext(Yp), h = u.useContext(Xp), C = h && h.variant === "head";
    let x;
    s ? x = s : x = C ? "th" : "td";
    let M = i;
    x === "td" ? M = void 0 : !M && C && (M = "col");
    const v = f || h && h.variant, O = {
      ...o,
      align: r,
      component: x,
      padding: a || (m && m.padding ? m.padding : "normal"),
      size: d || (m && m.size ? m.size : "medium"),
      sortDirection: c,
      stickyHeader: v === "head" && m && m.stickyHeader,
      variant: v
    }, G = Zp(O);
    let P = null;
    return c && (P = c === "asc" ? "ascending" : "descending"), b.jsx(eg, {
      as: x,
      ref: n,
      className: pe(G.root, l),
      "aria-sort": P,
      scope: M,
      ownerState: O,
      ...p
    });
  });
  function tg(e) {
    return Dt("MuiToolbar", e);
  }
  Mt("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  const ng = (e) => {
    const { classes: t, disableGutters: n, variant: o } = e;
    return we({
      root: [
        "root",
        !n && "gutters",
        o
      ]
    }, tg, t);
  }, og = ge("div", {
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
  })(et(({ theme: e }) => ({
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
  }))), rg = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiToolbar"
    }), { className: r, component: l = "div", disableGutters: s = false, variant: a = "regular", ...i } = o, d = {
      ...o,
      component: l,
      disableGutters: s,
      variant: a
    }, c = ng(d);
    return b.jsx(og, {
      as: l,
      className: pe(c.root, r),
      ref: n,
      ownerState: d,
      ...i
    });
  }), lg = Le(b.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft"), sg = Le(b.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight"), ig = u.forwardRef(function(t, n) {
    const { backIconButtonProps: o, count: r, disabled: l = false, getItemAriaLabel: s, nextIconButtonProps: a, onPageChange: i, page: d, rowsPerPage: c, showFirstButton: f, showLastButton: p, slots: m = {}, slotProps: h = {}, ...C } = t, x = $t(), M = (L) => {
      i(L, 0);
    }, v = (L) => {
      i(L, d - 1);
    }, O = (L) => {
      i(L, d + 1);
    }, G = (L) => {
      i(L, Math.max(0, Math.ceil(r / c) - 1));
    }, P = m.firstButton ?? Dn, H = m.lastButton ?? Dn, R = m.nextButton ?? Dn, T = m.previousButton ?? Dn, w = m.firstButtonIcon ?? Lp, y = m.lastButtonIcon ?? Rp, k = m.nextButtonIcon ?? sg, D = m.previousButtonIcon ?? lg, $ = x ? H : P, V = x ? R : T, E = x ? T : R, S = x ? P : H, F = x ? h.lastButton : h.firstButton, A = x ? h.nextButton : h.previousButton, z = x ? h.previousButton : h.nextButton, j = x ? h.firstButton : h.lastButton;
    return b.jsxs("div", {
      ref: n,
      ...C,
      children: [
        f && b.jsx($, {
          onClick: M,
          disabled: l || d === 0,
          "aria-label": s("first", d),
          title: s("first", d),
          ...F,
          children: x ? b.jsx(y, {
            ...h.lastButtonIcon
          }) : b.jsx(w, {
            ...h.firstButtonIcon
          })
        }),
        b.jsx(V, {
          onClick: v,
          disabled: l || d === 0,
          color: "inherit",
          "aria-label": s("previous", d),
          title: s("previous", d),
          ...A ?? o,
          children: x ? b.jsx(k, {
            ...h.nextButtonIcon
          }) : b.jsx(D, {
            ...h.previousButtonIcon
          })
        }),
        b.jsx(E, {
          onClick: O,
          disabled: l || (r !== -1 ? d >= Math.ceil(r / c) - 1 : false),
          color: "inherit",
          "aria-label": s("next", d),
          title: s("next", d),
          ...z ?? a,
          children: x ? b.jsx(D, {
            ...h.previousButtonIcon
          }) : b.jsx(k, {
            ...h.nextButtonIcon
          })
        }),
        p && b.jsx(S, {
          onClick: G,
          disabled: l || d >= Math.ceil(r / c) - 1,
          "aria-label": s("last", d),
          title: s("last", d),
          ...j,
          children: x ? b.jsx(w, {
            ...h.firstButtonIcon
          }) : b.jsx(y, {
            ...h.lastButtonIcon
          })
        })
      ]
    });
  });
  function ag(e) {
    return Dt("MuiTablePagination", e);
  }
  const Bn = Mt("MuiTablePagination", [
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
  var hi;
  const cg = ge(Vl, {
    name: "MuiTablePagination",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(et(({ theme: e }) => ({
    overflow: "auto",
    color: (e.vars || e).palette.text.primary,
    fontSize: e.typography.pxToRem(14),
    "&:last-child": {
      padding: 0
    }
  }))), ug = ge(rg, {
    name: "MuiTablePagination",
    slot: "Toolbar",
    overridesResolver: (e, t) => ({
      [`& .${Bn.actions}`]: t.actions,
      ...t.toolbar
    })
  })(et(({ theme: e }) => ({
    minHeight: 52,
    paddingRight: 2,
    [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 52
    },
    [e.breakpoints.up("sm")]: {
      minHeight: 52,
      paddingRight: 2
    },
    [`& .${Bn.actions}`]: {
      flexShrink: 0,
      marginLeft: 20
    }
  }))), dg = ge("div", {
    name: "MuiTablePagination",
    slot: "Spacer",
    overridesResolver: (e, t) => t.spacer
  })({
    flex: "1 1 100%"
  }), fg = ge("p", {
    name: "MuiTablePagination",
    slot: "SelectLabel",
    overridesResolver: (e, t) => t.selectLabel
  })(et(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  }))), pg = ge(ns, {
    name: "MuiTablePagination",
    slot: "Select",
    overridesResolver: (e, t) => ({
      [`& .${Bn.selectIcon}`]: t.selectIcon,
      [`& .${Bn.select}`]: t.select,
      ...t.input,
      ...t.selectRoot
    })
  })({
    color: "inherit",
    fontSize: "inherit",
    flexShrink: 0,
    marginRight: 32,
    marginLeft: 8,
    [`& .${Bn.select}`]: {
      paddingLeft: 8,
      paddingRight: 24,
      textAlign: "right",
      textAlignLast: "right"
    }
  }), gg = ge(At, {
    name: "MuiTablePagination",
    slot: "MenuItem",
    overridesResolver: (e, t) => t.menuItem
  })({}), hg = ge("p", {
    name: "MuiTablePagination",
    slot: "DisplayedRows",
    overridesResolver: (e, t) => t.displayedRows
  })(et(({ theme: e }) => ({
    ...e.typography.body2,
    flexShrink: 0
  })));
  function mg({ from: e, to: t, count: n }) {
    return `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`;
  }
  function bg(e) {
    return `Go to ${e} page`;
  }
  const Cg = (e) => {
    const { classes: t } = e;
    return we({
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
    }, ag, t);
  }, wg = u.forwardRef(function(t, n) {
    const o = Ht({
      props: t,
      name: "MuiTablePagination"
    }), { ActionsComponent: r = ig, backIconButtonProps: l, colSpan: s, component: a = Vl, count: i, disabled: d = false, getItemAriaLabel: c = bg, labelDisplayedRows: f = mg, labelRowsPerPage: p = "Rows per page:", nextIconButtonProps: m, onPageChange: h, onRowsPerPageChange: C, page: x, rowsPerPage: M, rowsPerPageOptions: v = [
      10,
      25,
      50,
      100
    ], SelectProps: O = {}, showFirstButton: G = false, showLastButton: P = false, slotProps: H = {}, slots: R = {}, ...T } = o, w = o, y = Cg(w), k = (H == null ? void 0 : H.select) ?? O, D = k.native ? "option" : gg;
    let $;
    (a === Vl || a === "td") && ($ = s || 1e3);
    const V = Je(k.id), E = Je(k.labelId), S = () => i === -1 ? (x + 1) * M : M === -1 ? i : Math.min(i, (x + 1) * M), F = {
      slots: R,
      slotProps: H
    }, [A, z] = yt("root", {
      ref: n,
      className: y.root,
      elementType: cg,
      externalForwardedProps: {
        ...F,
        component: a,
        ...T
      },
      ownerState: w,
      additionalProps: {
        colSpan: $
      }
    }), [j, L] = yt("toolbar", {
      className: y.toolbar,
      elementType: ug,
      externalForwardedProps: F,
      ownerState: w
    }), [N, W] = yt("spacer", {
      className: y.spacer,
      elementType: dg,
      externalForwardedProps: F,
      ownerState: w
    }), [B, U] = yt("selectLabel", {
      className: y.selectLabel,
      elementType: fg,
      externalForwardedProps: F,
      ownerState: w,
      additionalProps: {
        id: E
      }
    }), [K, ne] = yt("select", {
      className: y.select,
      elementType: pg,
      externalForwardedProps: F,
      ownerState: w
    }), [ee, te] = yt("menuItem", {
      className: y.menuItem,
      elementType: D,
      externalForwardedProps: F,
      ownerState: w
    }), [ae, ve] = yt("displayedRows", {
      className: y.displayedRows,
      elementType: hg,
      externalForwardedProps: F,
      ownerState: w
    });
    return b.jsx(A, {
      ...z,
      children: b.jsxs(j, {
        ...L,
        children: [
          b.jsx(N, {
            ...W
          }),
          v.length > 1 && b.jsx(B, {
            ...U,
            children: p
          }),
          v.length > 1 && b.jsx(K, {
            variant: "standard",
            ...!k.variant && {
              input: hi || (hi = b.jsx(ts, {}))
            },
            value: M,
            onChange: C,
            id: V,
            labelId: E,
            ...k,
            classes: {
              ...k.classes,
              root: pe(y.input, y.selectRoot, (k.classes || {}).root),
              select: pe(y.select, (k.classes || {}).select),
              icon: pe(y.selectIcon, (k.classes || {}).icon)
            },
            disabled: d,
            ...ne,
            children: v.map((Y) => u.createElement(ee, {
              ...te,
              key: Y.label ? Y.label : Y,
              value: Y.value ? Y.value : Y
            }, Y.label ? Y.label : Y))
          }),
          b.jsx(ae, {
            ...ve,
            children: f({
              from: i === 0 ? 0 : x * M + 1,
              to: S(),
              count: i === -1 ? -1 : i,
              page: x
            })
          }),
          b.jsx(r, {
            className: y.actions,
            backIconButtonProps: l,
            count: i,
            nextIconButtonProps: m,
            onPageChange: h,
            page: x,
            rowsPerPage: M,
            showFirstButton: G,
            showLastButton: P,
            slotProps: H.actions,
            slots: R.actions,
            getItemAriaLabel: c,
            disabled: d
          })
        ]
      })
    });
  }), vg = Le(b.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh"), xg = Le(b.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
  }), "Search"), yg = Le(b.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility"), Sg = Le(b.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
  }), "VisibilityOff"), Ig = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, Pg = /^\d{4}-\d{2}-\d{2}$/, Mg = /^(\d{2})\.(\d{2})\.(\d{4})$/, kg = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2})$/, Eg = /^(\d{2})\.(\d{2})\.(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/, Fg = /^(\d{2})\/(\d{2})\/(\d{4})$/, Tg = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2})$/, Og = /^(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})$/;
  function Sr(e, t) {
    return t >= 1 && t <= 12 && e >= 1 && e <= 31;
  }
  function bl(e, t) {
    return e >= 1 && e <= 12 && t >= 1 && t <= 31;
  }
  function Ir(e, t, n) {
    return e >= 0 && e <= 23 && t >= 0 && t <= 59 && (n === void 0 || n >= 0 && n <= 59);
  }
  const Dg = [
    {
      regex: Ig,
      format: "ISO-8601"
    },
    {
      regex: Pg,
      format: "YYYY-MM-DD",
      validate: (e) => {
        const t = parseInt(e[0].slice(5, 7), 10), n = parseInt(e[0].slice(8, 10), 10);
        return Sr(n, t);
      }
    },
    {
      regex: Eg,
      format: "dd.MM.yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), l = parseInt(e[6], 10);
        return Sr(t, n) && Ir(o, r, l);
      }
    },
    {
      regex: kg,
      format: "dd.MM.yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return Sr(t, n) && Ir(o, r);
      }
    },
    {
      regex: Mg,
      format: "dd.MM.yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return Sr(t, n);
      }
    },
    {
      regex: Og,
      format: "MM/dd/yyyy HH:mm:ss",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10), l = parseInt(e[6], 10);
        return bl(t, n) && Ir(o, r, l);
      }
    },
    {
      regex: Tg,
      format: "MM/dd/yyyy HH:mm",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10), o = parseInt(e[4], 10), r = parseInt(e[5], 10);
        return bl(t, n) && Ir(o, r);
      }
    },
    {
      regex: Fg,
      format: "MM/dd/yyyy",
      validate: (e) => {
        const t = parseInt(e[1], 10), n = parseInt(e[2], 10);
        return bl(t, n);
      }
    }
  ];
  function $g(e) {
    const t = e.trim();
    if (!t) return null;
    for (const n of Dg) {
      const o = t.match(n.regex);
      if (o) {
        if (n.validate && !n.validate(o)) continue;
        return n.format;
      }
    }
    return null;
  }
  function Hg(e) {
    return !Number.isFinite(e) || e < 0 ? null : e >= 1e12 ? "epoch-ms" : e >= 1e9 ? "epoch-s" : null;
  }
  function Lg(e) {
    if (e == null) return {
      type: "null"
    };
    if (typeof e == "boolean") return {
      type: "boolean"
    };
    if (typeof e == "number") {
      const t = Hg(e);
      return t ? {
        type: "date",
        dateFormat: t
      } : {
        type: "number"
      };
    }
    if (typeof e == "string") {
      const t = $g(e);
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
  function Rg(e) {
    const t = Object.keys(e).filter((n) => n !== "null");
    return t.length === 0 ? "null" : t.length === 1 ? t[0] : t.length === 2 && t.includes("date") && t.includes("string") ? "date" : "mixed";
  }
  function Ag(e) {
    let t, n = 0;
    for (const [o, r] of Object.entries(e)) r > n && (t = o, n = r);
    return t;
  }
  function Gg(e) {
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
  function mi(e, t) {
    e[t] = (e[t] || 0) + 1;
  }
  function zg(e, t) {
    if (e == null) return null;
    if (typeof e == "number") return t === "epoch-ms" ? new Date(e).toISOString() : t === "epoch-s" ? new Date(e * 1e3).toISOString() : null;
    if (typeof e != "string") return null;
    const n = e.trim();
    if (t === "ISO-8601" || t === "YYYY-MM-DD") return n;
    if (t == null ? void 0 : t.startsWith("dd.MM.yyyy")) {
      const o = n.match(/^(\d{2})\.(\d{2})\.(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], l = o[2], s = o[3], a = o[4] || "00", i = o[5] || "00", d = o[6] || "00";
        return `${s}-${l}-${r}T${a}:${i}:${d}`;
      }
    }
    if (t == null ? void 0 : t.startsWith("MM/dd/yyyy")) {
      const o = n.match(/^(\d{2})\/(\d{2})\/(\d{4})(?:\s+(\d{2}):(\d{2})(?::(\d{2}))?)?$/);
      if (o) {
        const r = o[1], l = o[2], s = o[3], a = o[4] || "00", i = o[5] || "00", d = o[6] || "00";
        return `${s}-${r}-${l}T${a}:${i}:${d}`;
      }
    }
    return null;
  }
  function jg(e, t, n = 100) {
    const o = t.length, r = /* @__PURE__ */ new Map();
    for (const l of e) r.set(l, Gg(l));
    for (const l of t) for (const s of e) {
      const a = r.get(s), i = l[s], d = Lg(i);
      if (mi(a.typeCounts, d.type), d.type === "null") {
        a.nullCount++;
        continue;
      }
      if (a.nonNullCount++, d.dateFormat && mi(a.dateFormatCounts, d.dateFormat), a.distinctValues.size < n && a.distinctValues.add(i), typeof i == "number" && Number.isFinite(i) && ((a.numMin === void 0 || i < a.numMin) && (a.numMin = i), (a.numMax === void 0 || i > a.numMax) && (a.numMax = i)), typeof i == "string") {
        const c = i.length;
        (a.strLenMin === void 0 || c < a.strLenMin) && (a.strLenMin = c), (a.strLenMax === void 0 || c > a.strLenMax) && (a.strLenMax = c);
      }
      if (d.dateFormat) {
        const c = zg(i, d.dateFormat);
        c !== null && ((a.dateMin === void 0 || c < a.dateMin) && (a.dateMin = c), (a.dateMax === void 0 || c > a.dateMax) && (a.dateMax = c));
      }
    }
    return e.map((l) => {
      const s = r.get(l), a = Rg(s.typeCounts), i = a === "date" ? Ag(s.dateFormatCounts) : void 0, d = a === "date" ? s.typeCounts.date || 0 : s.typeCounts[a] || 0, c = o > 0 ? Math.round(d / o * 100) / 100 : 0, f = {
        path: l,
        type: a,
        nullable: s.nullCount > 0,
        typeCounts: {
          ...s.typeCounts
        },
        nullCount: s.nullCount,
        distinctCount: s.distinctValues.size,
        confidence: c
      };
      return i && (f.dateFormat = i), a === "number" && (s.numMin !== void 0 && (f.min = s.numMin), s.numMax !== void 0 && (f.max = s.numMax)), a === "date" && (s.dateMin !== void 0 && (f.min = s.dateMin), s.dateMax !== void 0 && (f.max = s.dateMax)), (a === "string" || a === "mixed") && (s.strLenMin !== void 0 && (f.stringLengthMin = s.strLenMin), s.strLenMax !== void 0 && (f.stringLengthMax = s.strLenMax)), f;
    });
  }
  function Lr(e, t, n, o, r, l, s, a) {
    if (l > a.maxDepth && (a.maxDepth = l), l > s) {
      n[t] = e, o.add(t);
      return;
    }
    if (e == null) {
      n[t] = null, o.add(t);
      return;
    }
    if (Array.isArray(e)) {
      if (e.length === 0) {
        n[t] = null, o.add(t);
        return;
      }
      for (let i = 0; i < e.length; i++) {
        i > a.maxArrayIndex && (a.maxArrayIndex = i);
        const d = `${t}[${i}]`;
        Lr(e[i], d, n, o, r, l + 1, s, a);
      }
      return;
    }
    if (typeof e == "object") {
      if (r.has(e)) {
        n[t] = "[Circular]", o.add(t);
        return;
      }
      r.add(e);
      const i = Object.keys(e);
      if (i.length === 0) {
        n[t] = null, o.add(t);
        return;
      }
      for (const d of i) {
        const c = t ? `${t}.${d}` : d;
        Lr(e[d], c, n, o, r, l + 1, s, a);
      }
      return;
    }
    n[t] = e, o.add(t);
  }
  function Vg(e, t = 10) {
    const n = /* @__PURE__ */ new Set(), o = {
      maxDepth: 0,
      maxArrayIndex: 0
    }, r = [];
    for (const s of e) {
      const a = {}, i = /* @__PURE__ */ new WeakSet();
      if (s != null && typeof s == "object" && !Array.isArray(s)) for (const d of Object.keys(s)) Lr(s[d], d, a, n, i, 1, t, o);
      else Lr(s, "_value", a, n, i, 0, t, o);
      r.push(a);
    }
    const l = Ng([
      ...n
    ]);
    for (const s of r) for (const a of l) a in s || (s[a] = null);
    return {
      paths: l,
      rows: r,
      maxDepth: o.maxDepth,
      maxArrayIndex: o.maxArrayIndex
    };
  }
  function Ng(e) {
    return e.sort((t, n) => {
      const o = bi(t), r = bi(n), l = Math.min(o.length, r.length);
      for (let s = 0; s < l; s++) {
        const a = o[s], i = r[s], d = Ci(a), c = Ci(i);
        if (d !== null && c !== null) {
          if (d !== c) return d - c;
          continue;
        }
        if (a !== i) return a.localeCompare(i);
      }
      return o.length - r.length;
    });
  }
  function bi(e) {
    return e.split(/\./).flatMap((t) => {
      const n = [], r = /^([^[]*)((?:\[\d+\])*)$/.exec(t);
      if (r) {
        r[1] && n.push(r[1]);
        const l = r[2].match(/\[\d+\]/g);
        l && n.push(...l);
      } else n.push(t);
      return n;
    });
  }
  function Ci(e) {
    const t = /^\[(\d+)\]$/.exec(e);
    return t ? parseInt(t[1], 10) : null;
  }
  const _g = {
    maxDepth: 10,
    maxDistinct: 100,
    dateConfidenceThreshold: 0.8
  };
  function qa(e, t) {
    const n = performance.now(), o = {
      ..._g,
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
    const r = Vg(e, o.maxDepth), l = jg(r.paths, r.rows, o.maxDistinct), s = r.paths.length * r.rows.length, a = l.reduce((c, f) => c + f.nullCount, 0), i = s > 0 ? Math.round(a / s * 1e3) / 10 : 0, d = Math.round((performance.now() - n) * 100) / 100;
    return {
      columns: l,
      rows: r.rows,
      meta: {
        rowCount: r.rows.length,
        columnCount: l.length,
        maxDepth: r.maxDepth,
        maxArrayIndex: r.maxArrayIndex,
        arrayPolicy: "index-columns",
        flattenPolicy: "dot-paths",
        dateDetectionPolicy: "heuristic",
        totalNullValues: a,
        nullPercentage: i,
        analysisTimeMs: d
      }
    };
  }
  function Bg(e, t) {
    return u.useMemo(() => qa(e, t), [
      e,
      t == null ? void 0 : t.maxDepth,
      t == null ? void 0 : t.maxDistinct,
      t == null ? void 0 : t.dateConfidenceThreshold
    ]);
  }
  const wi = {
    string: "#2196f3",
    number: "#4caf50",
    boolean: "#ff9800",
    date: "#9c27b0",
    null: "#9e9e9e",
    object: "#795548",
    array: "#00bcd4",
    mixed: "#f44336"
  };
  function Wg(e) {
    if (!e) return [];
    try {
      const t = JSON.parse(e);
      return Array.isArray(t) ? t : [];
    } catch {
      return [];
    }
  }
  function Ug(e, t, n, o) {
    const r = e.name || "columnConfig", l = o.context.theme, [s, a] = u.useState(""), [i, d] = u.useState(() => Wg(t[r])), [c, f] = u.useState({}), [p, m] = u.useState(false), h = u.useCallback((R) => {
      d(R), n({
        [r]: JSON.stringify(R)
      });
    }, [
      r,
      n
    ]), C = u.useCallback(async () => {
      m(true);
      try {
        const R = t.oid;
        if (!R) {
          m(false);
          return;
        }
        const T = await o.context.socket.getState(R);
        if (!(T == null ? void 0 : T.val)) {
          m(false);
          return;
        }
        let w;
        const y = T.val;
        if (typeof y == "string") try {
          const S = JSON.parse(y);
          w = Array.isArray(S) ? S : [
            S
          ];
        } catch {
          m(false);
          return;
        }
        else if (Array.isArray(y)) w = y;
        else if (typeof y == "object" && y !== null) w = [
          y
        ];
        else {
          m(false);
          return;
        }
        const k = t.tableMaxDepth || 10, D = qa(w, {
          maxDepth: k
        }), $ = {};
        for (const S of D.columns) $[S.path] = S.type;
        f($);
        const V = new Map(i.map((S) => [
          S.path,
          S
        ])), E = D.columns.map((S) => {
          const F = V.get(S.path);
          return F || {
            path: S.path,
            visible: true,
            headerName: S.path.split(".").pop() || S.path
          };
        });
        h(E);
      } catch {
      } finally {
        m(false);
      }
    }, [
      t,
      o.context.socket,
      i,
      h
    ]);
    u.useEffect(() => {
      i.length === 0 && t.oid && C();
    }, []);
    const x = u.useCallback((R) => {
      const T = i.map((w) => w.path === R ? {
        ...w,
        visible: !w.visible
      } : w);
      h(T);
    }, [
      i,
      h
    ]), M = u.useCallback((R, T) => {
      const w = i.map((y) => y.path === R ? {
        ...y,
        headerName: T
      } : y);
      h(w);
    }, [
      i,
      h
    ]), v = u.useCallback((R, T) => {
      const w = T ? parseInt(T, 10) : void 0, y = i.map((k) => k.path === R ? {
        ...k,
        width: w && !isNaN(w) ? w : void 0
      } : k);
      h(y);
    }, [
      i,
      h
    ]), O = u.useCallback((R, T) => {
      const w = i.map((y) => y.path === R ? {
        ...y,
        align: T || void 0
      } : y);
      h(w);
    }, [
      i,
      h
    ]), G = u.useCallback(() => {
      const R = i.every((w) => w.visible), T = i.map((w) => ({
        ...w,
        visible: !R
      }));
      h(T);
    }, [
      i,
      h
    ]), P = u.useMemo(() => s ? i.filter((R) => R.path.toLowerCase().includes(s.toLowerCase()) || R.headerName.toLowerCase().includes(s.toLowerCase())) : i, [
      i,
      s
    ]), H = i.length > 0 && i.every((R) => R.visible);
    return b.jsx(Uu, {
      theme: l,
      children: b.jsxs(Vn, {
        sx: {
          mt: 1,
          width: "100%"
        },
        children: [
          b.jsxs(Vn, {
            sx: {
              display: "flex",
              gap: 0.5,
              mb: 1,
              alignItems: "center"
            },
            children: [
              b.jsx(Ko, {
                size: "small",
                placeholder: vt.t("json_table_search_columns"),
                value: s,
                onChange: (R) => a(R.target.value),
                slotProps: {
                  input: {
                    startAdornment: b.jsx(Ka, {
                      position: "start",
                      children: b.jsx(xg, {
                        fontSize: "small"
                      })
                    })
                  }
                },
                sx: {
                  flex: 1,
                  minWidth: 0
                }
              }),
              b.jsx(jl, {
                title: vt.t("json_table_refresh_columns"),
                children: b.jsx(Dn, {
                  size: "small",
                  onClick: C,
                  disabled: p,
                  children: b.jsx(vg, {
                    fontSize: "small"
                  })
                })
              }),
              b.jsx(jl, {
                title: H ? vt.t("json_table_hide_all") : vt.t("json_table_show_all"),
                children: b.jsx(Oa, {
                  size: "small",
                  variant: "outlined",
                  onClick: G,
                  startIcon: H ? b.jsx(Sg, {}) : b.jsx(yg, {}),
                  sx: {
                    minWidth: "auto",
                    textTransform: "none",
                    whiteSpace: "nowrap"
                  },
                  children: H ? vt.t("json_table_hide_all") : vt.t("json_table_show_all")
                })
              })
            ]
          }),
          i.length === 0 ? b.jsx(Uo, {
            variant: "body2",
            color: "text.secondary",
            sx: {
              textAlign: "center",
              py: 2
            },
            children: vt.t("json_table_no_columns")
          }) : b.jsx(Vn, {
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: 0.5,
              maxHeight: 400,
              overflow: "auto"
            },
            children: P.map((R) => {
              const T = c[R.path] || "string", w = wi[T] || wi.string;
              return b.jsxs(bp, {
                variant: "outlined",
                sx: {
                  p: 1,
                  opacity: R.visible ? 1 : 0.5,
                  transition: "opacity 0.2s"
                },
                children: [
                  b.jsxs(Vn, {
                    sx: {
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 0.5
                    },
                    children: [
                      b.jsx(fs, {
                        label: T,
                        size: "small",
                        sx: {
                          bgcolor: w,
                          color: "#fff",
                          fontWeight: 600,
                          fontSize: "0.65rem",
                          height: 20,
                          minWidth: 50
                        }
                      }),
                      b.jsx(Uo, {
                        variant: "caption",
                        sx: {
                          flex: 1,
                          fontFamily: "monospace",
                          fontSize: "0.7rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        title: R.path,
                        children: R.path
                      }),
                      b.jsx(ad, {
                        size: "small",
                        checked: R.visible,
                        onChange: () => x(R.path)
                      })
                    ]
                  }),
                  b.jsxs(Vn, {
                    sx: {
                      display: "flex",
                      gap: 0.5,
                      alignItems: "center"
                    },
                    children: [
                      b.jsx(Ko, {
                        size: "small",
                        label: vt.t("json_table_header_label"),
                        value: R.headerName,
                        onChange: (y) => M(R.path, y.target.value),
                        sx: {
                          flex: 1,
                          minWidth: 0
                        },
                        slotProps: {
                          htmlInput: {
                            style: {
                              fontSize: "0.75rem"
                            }
                          },
                          inputLabel: {
                            style: {
                              fontSize: "0.75rem"
                            }
                          }
                        }
                      }),
                      b.jsx(Ko, {
                        size: "small",
                        label: vt.t("json_table_width"),
                        type: "number",
                        value: R.width ?? "",
                        onChange: (y) => v(R.path, y.target.value),
                        sx: {
                          width: 70
                        },
                        slotProps: {
                          htmlInput: {
                            style: {
                              fontSize: "0.75rem"
                            },
                            min: 30
                          },
                          inputLabel: {
                            style: {
                              fontSize: "0.75rem"
                            }
                          }
                        }
                      }),
                      b.jsxs(ns, {
                        size: "small",
                        value: R.align || "left",
                        onChange: (y) => O(R.path, y.target.value),
                        sx: {
                          width: 80,
                          fontSize: "0.75rem"
                        },
                        children: [
                          b.jsx(At, {
                            value: "left",
                            children: vt.t("json_table_align_left")
                          }),
                          b.jsx(At, {
                            value: "center",
                            children: vt.t("json_table_align_center")
                          }),
                          b.jsx(At, {
                            value: "right",
                            children: vt.t("json_table_align_right")
                          })
                        ]
                      })
                    ]
                  })
                ]
              }, R.path);
            })
          }),
          i.length > 0 && b.jsxs(Uo, {
            variant: "caption",
            color: "text.secondary",
            sx: {
              mt: 0.5,
              display: "block"
            },
            children: [
              i.filter((R) => R.visible).length,
              " / ",
              i.length,
              " ",
              vt.t("json_table_columns_visible")
            ]
          })
        ]
      })
    });
  }
  const Kg = () => [
    {
      label: "",
      type: "custom",
      component: () => b.jsx(vn, {
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
      label: "",
      type: "custom",
      component: () => b.jsx(vn, {
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
      label: "",
      type: "custom",
      component: () => b.jsx(vn, {
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
      name: "tableFiltering",
      type: "checkbox",
      label: "json_table_filtering",
      default: false
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
      name: "tableHideFooter",
      type: "checkbox",
      label: "json_table_hide_footer",
      default: false
    },
    {
      label: "",
      type: "custom",
      component: () => b.jsx(vn, {
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
      component: () => b.jsx(vn, {
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
      name: "tableShowRowBorders",
      type: "checkbox",
      label: "json_table_show_row_borders",
      default: true
    },
    {
      label: "",
      type: "custom",
      component: () => b.jsx(vn, {
        dividerText: "json_table_header_style"
      })
    },
    {
      name: "tableHeaderBgColor",
      type: "color",
      label: "json_table_header_bg_color"
    },
    {
      name: "tableHeaderTextColor",
      type: "color",
      label: "json_table_header_text_color"
    },
    {
      name: "tableHeaderFontSize",
      type: "number",
      label: "json_table_header_font_size",
      min: 8
    },
    {
      label: "",
      type: "custom",
      component: () => b.jsx(vn, {
        dividerText: "json_table_cell_style"
      })
    },
    {
      name: "tableStripedColor",
      type: "color",
      label: "json_table_striped_color"
    },
    {
      name: "tableCellFontSize",
      type: "number",
      label: "json_table_cell_font_size",
      min: 8
    },
    {
      label: "",
      type: "custom",
      component: () => b.jsx(vn, {
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
      component: () => b.jsx(vn, {
        dividerText: "json_table_column_config"
      })
    },
    {
      name: "columnConfig",
      label: "json_table_column_config_label",
      type: "custom",
      component: Ug
    }
  ], Ya = u.createContext(void 0);
  function Pe() {
    const e = u.useContext(Ya);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }
  const Xa = u.createContext(void 0), le = () => {
    const e = u.useContext(Xa);
    if (!e) throw new Error("MUI X: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.");
    return e;
  }, qg = parseInt(u.version, 10), je = (e) => {
    if (qg >= 19) {
      const t = (n) => e(n, n.ref ?? null);
      return t.displayName = e.displayName ?? e.name, t;
    }
    return u.forwardRef(e);
  };
  var Rr = /* @__PURE__ */ Symbol("NOT_FOUND");
  function Yg(e, t = `expected a function, instead received ${typeof e}`) {
    if (typeof e != "function") throw new TypeError(t);
  }
  function Xg(e, t = `expected an object, instead received ${typeof e}`) {
    if (typeof e != "object") throw new TypeError(t);
  }
  function Qg(e, t = "expected all items to be functions, instead received the following types: ") {
    if (!e.every((n) => typeof n == "function")) {
      const n = e.map((o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o).join(", ");
      throw new TypeError(`${t}[${n}]`);
    }
  }
  var vi = (e) => Array.isArray(e) ? e : [
    e
  ];
  function Jg(e) {
    const t = Array.isArray(e[0]) ? e[0] : e;
    return Qg(t, "createSelector expects all input-selectors to be functions, but received the following types: "), t;
  }
  function Zg(e, t) {
    const n = [], { length: o } = e;
    for (let r = 0; r < o; r++) n.push(e[r].apply(null, t));
    return n;
  }
  function eh(e) {
    let t;
    return {
      get(n) {
        return t && e(t.key, n) ? t.value : Rr;
      },
      put(n, o) {
        t = {
          key: n,
          value: o
        };
      },
      getEntries() {
        return t ? [
          t
        ] : [];
      },
      clear() {
        t = void 0;
      }
    };
  }
  function th(e, t) {
    let n = [];
    function o(a) {
      const i = n.findIndex((d) => t(a, d.key));
      if (i > -1) {
        const d = n[i];
        return i > 0 && (n.splice(i, 1), n.unshift(d)), d.value;
      }
      return Rr;
    }
    function r(a, i) {
      o(a) === Rr && (n.unshift({
        key: a,
        value: i
      }), n.length > e && n.pop());
    }
    function l() {
      return n;
    }
    function s() {
      n = [];
    }
    return {
      get: o,
      put: r,
      getEntries: l,
      clear: s
    };
  }
  var nh = (e, t) => e === t;
  function oh(e) {
    return function(n, o) {
      if (n === null || o === null || n.length !== o.length) return false;
      const { length: r } = n;
      for (let l = 0; l < r; l++) if (!e(n[l], o[l])) return false;
      return true;
    };
  }
  function Qa(e, t) {
    const n = typeof t == "object" ? t : {
      equalityCheck: t
    }, { equalityCheck: o = nh, maxSize: r = 1, resultEqualityCheck: l } = n, s = oh(o);
    let a = 0;
    const i = r <= 1 ? eh(s) : th(r, s);
    function d() {
      let c = i.get(arguments);
      if (c === Rr) {
        if (c = e.apply(null, arguments), a++, l) {
          const p = i.getEntries().find((m) => l(m.value, c));
          p && (c = p.value, a !== 0 && a--);
        }
        i.put(arguments, c);
      }
      return c;
    }
    return d.clearCache = () => {
      i.clear(), d.resetResultsCount();
    }, d.resultsCount = () => a, d.resetResultsCount = () => {
      a = 0;
    }, d;
  }
  var rh = class {
    constructor(e) {
      this.value = e;
    }
    deref() {
      return this.value;
    }
  }, lh = typeof WeakRef < "u" ? WeakRef : rh, sh = 0, xi = 1;
  function Pr() {
    return {
      s: sh,
      v: void 0,
      o: null,
      p: null
    };
  }
  function Ja(e, t = {}) {
    let n = Pr();
    const { resultEqualityCheck: o } = t;
    let r, l = 0;
    function s() {
      var _a2;
      let a = n;
      const { length: i } = arguments;
      for (let f = 0, p = i; f < p; f++) {
        const m = arguments[f];
        if (typeof m == "function" || typeof m == "object" && m !== null) {
          let h = a.o;
          h === null && (a.o = h = /* @__PURE__ */ new WeakMap());
          const C = h.get(m);
          C === void 0 ? (a = Pr(), h.set(m, a)) : a = C;
        } else {
          let h = a.p;
          h === null && (a.p = h = /* @__PURE__ */ new Map());
          const C = h.get(m);
          C === void 0 ? (a = Pr(), h.set(m, a)) : a = C;
        }
      }
      const d = a;
      let c;
      if (a.s === xi) c = a.v;
      else if (c = e.apply(null, arguments), l++, o) {
        const f = ((_a2 = r == null ? void 0 : r.deref) == null ? void 0 : _a2.call(r)) ?? r;
        f != null && o(f, c) && (c = f, l !== 0 && l--), r = typeof c == "object" && c !== null || typeof c == "function" ? new lh(c) : c;
      }
      return d.s = xi, d.v = c, c;
    }
    return s.clearCache = () => {
      n = Pr(), s.resetResultsCount();
    }, s.resultsCount = () => l, s.resetResultsCount = () => {
      l = 0;
    }, s;
  }
  function Za(e, ...t) {
    const n = typeof e == "function" ? {
      memoize: e,
      memoizeOptions: t
    } : e, o = (...r) => {
      let l = 0, s = 0, a, i = {}, d = r.pop();
      typeof d == "object" && (i = d, d = r.pop()), Yg(d, `createSelector expects an output function after the inputs, but received: [${typeof d}]`);
      const c = {
        ...n,
        ...i
      }, { memoize: f, memoizeOptions: p = [], argsMemoize: m = Ja, argsMemoizeOptions: h = [] } = c, C = vi(p), x = vi(h), M = Jg(r), v = f(function() {
        return l++, d.apply(null, arguments);
      }, ...C), O = m(function() {
        s++;
        const P = Zg(M, arguments);
        return a = v.apply(null, P), a;
      }, ...x);
      return Object.assign(O, {
        resultFunc: d,
        memoizedResultFunc: v,
        dependencies: M,
        dependencyRecomputations: () => s,
        resetDependencyRecomputations: () => {
          s = 0;
        },
        lastResult: () => a,
        recomputations: () => l,
        resetRecomputations: () => {
          l = 0;
        },
        memoize: f,
        argsMemoize: m
      });
    };
    return Object.assign(o, {
      withTypes: () => o
    }), o;
  }
  var ec = Za(Ja), ih = Object.assign((e, t = ec) => {
    Xg(e, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);
    const n = Object.keys(e), o = n.map((l) => e[l]);
    return t(o, (...l) => l.reduce((s, a, i) => (s[n[i]] = a, s), {}));
  }, {
    withTypes: () => ih
  });
  const ah = Object.is;
  function tc(e, t) {
    if (e === t) return true;
    if (!(e instanceof Object) || !(t instanceof Object)) return false;
    let n = 0, o = 0;
    for (const r in e) if (n += 1, !ah(e[r], t[r]) || !(r in t)) return false;
    for (const r in t) o += 1;
    return n === o;
  }
  var nc = {
    exports: {}
  }, oc = {};
  var wo = u;
  function ch(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var uh = typeof Object.is == "function" ? Object.is : ch, dh = wo.useState, fh = wo.useEffect, ph = wo.useLayoutEffect, gh = wo.useDebugValue;
  function hh(e, t) {
    var n = t(), o = dh({
      inst: {
        value: n,
        getSnapshot: t
      }
    }), r = o[0].inst, l = o[1];
    return ph(function() {
      r.value = n, r.getSnapshot = t, Cl(r) && l({
        inst: r
      });
    }, [
      e,
      n,
      t
    ]), fh(function() {
      return Cl(r) && l({
        inst: r
      }), e(function() {
        Cl(r) && l({
          inst: r
        });
      });
    }, [
      e
    ]), gh(n), n;
  }
  function Cl(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !uh(e, n);
    } catch {
      return true;
    }
  }
  function mh(e, t) {
    return t();
  }
  var bh = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? mh : hh;
  oc.useSyncExternalStore = wo.useSyncExternalStore !== void 0 ? wo.useSyncExternalStore : bh;
  nc.exports = oc;
  var gs = nc.exports;
  function rc(e) {
    return e.acceptsApiRef;
  }
  function yi(e, t) {
    return rc(t) ? t(e) : t(e.current.state);
  }
  function wl(e, t, n, o) {
    return rc(t) ? t(e, n) : t(e.current.state, o);
  }
  const lc = Object.is, hs = tc, Ch = (e, t) => e === t ? true : e.length === t.length && e.every((n, o) => n === t[o]), wh = (e, t) => {
    let n = Object.is;
    return t instanceof Array ? n = Ch : t instanceof Object && (n = hs), n(e, t);
  }, sc = () => ({
    state: null,
    equals: null,
    selector: null,
    args: void 0
  }), Ar = [], ic = () => null, Q = (e, t, n = lc) => {
    const o = bn(sc), r = o.current.selector !== null, [l, s] = u.useState(r ? null : yi(e, t));
    o.current.state = l, o.current.equals = n, o.current.selector = t;
    const a = u.useCallback(() => (o.current.subscription || (o.current.subscription = e.current.store.subscribe(() => {
      const d = yi(e, o.current.selector);
      o.current.equals(o.current.state, d) || (o.current.state = d, s(d));
    })), null), Ar), i = u.useCallback(() => () => {
      o.current.subscription && (o.current.subscription(), o.current.subscription = void 0);
    }, Ar);
    return gs.useSyncExternalStore(i, a, ic), l;
  }, Zo = (e, t, n = void 0, o = lc) => {
    const r = bn(sc), l = r.current.selector !== null, [s, a] = u.useState(l ? null : wl(e, t, n, e.current.instanceId));
    r.current.state = s, r.current.equals = o, r.current.selector = t;
    const i = r.current.args;
    if (r.current.args = n, l && !wh(i, n)) {
      const f = wl(e, r.current.selector, r.current.args, e.current.instanceId);
      r.current.equals(r.current.state, f) || (r.current.state = f, a(f));
    }
    const d = u.useCallback(() => (r.current.subscription || (r.current.subscription = e.current.store.subscribe(() => {
      const f = wl(e, r.current.selector, r.current.args, e.current.instanceId);
      r.current.equals(r.current.state, f) || (r.current.state = f, a(f));
    })), null), Ar), c = u.useCallback(() => () => {
      r.current.subscription && (r.current.subscription(), r.current.subscription = void 0);
    }, Ar);
    return gs.useSyncExternalStore(c, d, ic), s;
  }, vh = Za({
    memoize: Qa,
    memoizeOptions: {
      maxSize: 1,
      equalityCheck: Object.is
    }
  }), Si = /* @__PURE__ */ new WeakMap();
  function rn(e) {
    return "current" in e && "instanceId" in e.current;
  }
  const ln = {
    id: "default"
  }, he = (e, t, n, o, r, l, ...s) => {
    if (s.length > 0) throw new Error("Unsupported number of selectors");
    let a;
    if (e && t && n && o && r && l) a = (i, d) => {
      const c = rn(i), f = d ?? (c ? i.current.instanceId : ln), p = c ? i.current.state : i, m = e(p, f), h = t(p, f), C = n(p, f), x = o(p, f), M = r(p, f);
      return l(m, h, C, x, M);
    };
    else if (e && t && n && o && r) a = (i, d) => {
      const c = rn(i), f = d ?? (c ? i.current.instanceId : ln), p = c ? i.current.state : i, m = e(p, f), h = t(p, f), C = n(p, f), x = o(p, f);
      return r(m, h, C, x);
    };
    else if (e && t && n && o) a = (i, d) => {
      const c = rn(i), f = d ?? (c ? i.current.instanceId : ln), p = c ? i.current.state : i, m = e(p, f), h = t(p, f), C = n(p, f);
      return o(m, h, C);
    };
    else if (e && t && n) a = (i, d) => {
      const c = rn(i), f = d ?? (c ? i.current.instanceId : ln), p = c ? i.current.state : i, m = e(p, f), h = t(p, f);
      return n(m, h);
    };
    else if (e && t) a = (i, d) => {
      const c = rn(i), f = d ?? (c ? i.current.instanceId : ln), p = c ? i.current.state : i, m = e(p, f);
      return t(m);
    };
    else throw new Error("Missing arguments");
    return a.acceptsApiRef = true, a;
  }, ur = (e, t, n, o, r, l, ...s) => {
    if (s.length > 0) throw new Error("Unsupported number of selectors");
    let a;
    if (e && t && n && o && r && l) a = (i, d, c) => {
      const f = rn(i), p = c ?? (f ? i.current.instanceId : ln), m = f ? i.current.state : i, h = e(m, d, p), C = t(m, d, p), x = n(m, d, p), M = o(m, d, p), v = r(m, d, p);
      return l(h, C, x, M, v, d);
    };
    else if (e && t && n && o && r) a = (i, d, c) => {
      const f = rn(i), p = c ?? (f ? i.current.instanceId : ln), m = f ? i.current.state : i, h = e(m, d, p), C = t(m, d, p), x = n(m, d, p), M = o(m, d, p);
      return r(h, C, x, M, d);
    };
    else if (e && t && n && o) a = (i, d, c) => {
      const f = rn(i), p = c ?? (f ? i.current.instanceId : ln), m = f ? i.current.state : i, h = e(m, d, p), C = t(m, d, p), x = n(m, d, p);
      return o(h, C, x, d);
    };
    else if (e && t && n) a = (i, d, c) => {
      const f = rn(i), p = c ?? (f ? i.current.instanceId : ln), m = f ? i.current.state : i, h = e(m, d, p), C = t(m, d, p);
      return n(h, C, d);
    };
    else if (e && t) a = (i, d, c) => {
      const f = rn(i), p = c ?? (f ? i.current.instanceId : ln), m = f ? i.current.state : i, h = e(m, d, p);
      return t(h, d);
    };
    else throw new Error("Missing arguments");
    return a.acceptsApiRef = true, a;
  }, Be = (...e) => {
    const t = (n, o) => {
      const r = rn(n), l = r ? n.current.instanceId : o ?? ln, s = r ? n.current.state : n, a = Si.get(l), i = a ?? /* @__PURE__ */ new Map(), d = i == null ? void 0 : i.get(e);
      if (i && d) return d(s, l);
      const c = vh(...e);
      return a || Si.set(l, i), i.set(e, c), c(s, l);
    };
    return t.acceptsApiRef = true, t;
  }, dt = (e) => e.dimensions, Qr = he(dt, (e) => e.columnsTotalWidth), ms = (e) => e.dimensions.rowHeight, xh = (e) => e.dimensions.contentSize.height, yh = (e) => e.dimensions.hasScrollX, Sh = (e) => e.dimensions.hasScrollY, ac = (e) => e.dimensions.columnsTotalWidth < e.dimensions.viewportOuterSize.width, Ih = (e) => e.dimensions.headerHeight, Ph = (e) => e.dimensions.groupHeaderHeight, cc = (e) => e.dimensions.hasScrollY ? e.dimensions.scrollbarSize : 0, Mh = (e) => {
    const t = e.dimensions.hasScrollX ? e.dimensions.scrollbarSize : 0, n = e.dimensions.viewportOuterSize.height - e.dimensions.minimumSize.height > 0;
    return !(t === 0 && !n);
  };
  function In(e) {
    return u.memo(e, tc);
  }
  const kh = {
    noRowsLabel: "No rows",
    noResultsOverlayLabel: "No results found.",
    toolbarDensity: "Density",
    toolbarDensityLabel: "Density",
    toolbarDensityCompact: "Compact",
    toolbarDensityStandard: "Standard",
    toolbarDensityComfortable: "Comfortable",
    toolbarColumns: "Columns",
    toolbarColumnsLabel: "Select columns",
    toolbarFilters: "Filters",
    toolbarFiltersLabel: "Show filters",
    toolbarFiltersTooltipHide: "Hide filters",
    toolbarFiltersTooltipShow: "Show filters",
    toolbarFiltersTooltipActive: (e) => e !== 1 ? `${e} active filters` : `${e} active filter`,
    toolbarQuickFilterPlaceholder: "Search\u2026",
    toolbarQuickFilterLabel: "Search",
    toolbarQuickFilterDeleteIconLabel: "Clear",
    toolbarExport: "Export",
    toolbarExportLabel: "Export",
    toolbarExportCSV: "Download as CSV",
    toolbarExportPrint: "Print",
    toolbarExportExcel: "Download as Excel",
    columnsManagementSearchTitle: "Search",
    columnsManagementNoColumns: "No columns",
    columnsManagementShowHideAllText: "Show/Hide All",
    columnsManagementReset: "Reset",
    columnsManagementDeleteIconLabel: "Clear",
    filterPanelAddFilter: "Add filter",
    filterPanelRemoveAll: "Remove all",
    filterPanelDeleteIconLabel: "Delete",
    filterPanelLogicOperator: "Logic operator",
    filterPanelOperator: "Operator",
    filterPanelOperatorAnd: "And",
    filterPanelOperatorOr: "Or",
    filterPanelColumns: "Columns",
    filterPanelInputLabel: "Value",
    filterPanelInputPlaceholder: "Filter value",
    filterOperatorContains: "contains",
    filterOperatorDoesNotContain: "does not contain",
    filterOperatorEquals: "equals",
    filterOperatorDoesNotEqual: "does not equal",
    filterOperatorStartsWith: "starts with",
    filterOperatorEndsWith: "ends with",
    filterOperatorIs: "is",
    filterOperatorNot: "is not",
    filterOperatorAfter: "is after",
    filterOperatorOnOrAfter: "is on or after",
    filterOperatorBefore: "is before",
    filterOperatorOnOrBefore: "is on or before",
    filterOperatorIsEmpty: "is empty",
    filterOperatorIsNotEmpty: "is not empty",
    filterOperatorIsAnyOf: "is any of",
    "filterOperator=": "=",
    "filterOperator!=": "!=",
    "filterOperator>": ">",
    "filterOperator>=": ">=",
    "filterOperator<": "<",
    "filterOperator<=": "<=",
    headerFilterOperatorContains: "Contains",
    headerFilterOperatorDoesNotContain: "Does not contain",
    headerFilterOperatorEquals: "Equals",
    headerFilterOperatorDoesNotEqual: "Does not equal",
    headerFilterOperatorStartsWith: "Starts with",
    headerFilterOperatorEndsWith: "Ends with",
    headerFilterOperatorIs: "Is",
    headerFilterOperatorNot: "Is not",
    headerFilterOperatorAfter: "Is after",
    headerFilterOperatorOnOrAfter: "Is on or after",
    headerFilterOperatorBefore: "Is before",
    headerFilterOperatorOnOrBefore: "Is on or before",
    headerFilterOperatorIsEmpty: "Is empty",
    headerFilterOperatorIsNotEmpty: "Is not empty",
    headerFilterOperatorIsAnyOf: "Is any of",
    "headerFilterOperator=": "Equals",
    "headerFilterOperator!=": "Not equals",
    "headerFilterOperator>": "Greater than",
    "headerFilterOperator>=": "Greater than or equal to",
    "headerFilterOperator<": "Less than",
    "headerFilterOperator<=": "Less than or equal to",
    filterValueAny: "any",
    filterValueTrue: "true",
    filterValueFalse: "false",
    columnMenuLabel: "Menu",
    columnMenuAriaLabel: (e) => `${e} column menu`,
    columnMenuShowColumns: "Show columns",
    columnMenuManageColumns: "Manage columns",
    columnMenuFilter: "Filter",
    columnMenuHideColumn: "Hide column",
    columnMenuUnsort: "Unsort",
    columnMenuSortAsc: "Sort by ASC",
    columnMenuSortDesc: "Sort by DESC",
    columnHeaderFiltersTooltipActive: (e) => e !== 1 ? `${e} active filters` : `${e} active filter`,
    columnHeaderFiltersLabel: "Show filters",
    columnHeaderSortIconLabel: "Sort",
    footerRowSelected: (e) => e !== 1 ? `${e.toLocaleString()} rows selected` : `${e.toLocaleString()} row selected`,
    footerTotalRows: "Total Rows:",
    footerTotalVisibleRows: (e, t) => `${e.toLocaleString()} of ${t.toLocaleString()}`,
    checkboxSelectionHeaderName: "Checkbox selection",
    checkboxSelectionSelectAllRows: "Select all rows",
    checkboxSelectionUnselectAllRows: "Unselect all rows",
    checkboxSelectionSelectRow: "Select row",
    checkboxSelectionUnselectRow: "Unselect row",
    booleanCellTrueLabel: "yes",
    booleanCellFalseLabel: "no",
    actionsCellMore: "more",
    pinToLeft: "Pin to left",
    pinToRight: "Pin to right",
    unpin: "Unpin",
    treeDataGroupingHeaderName: "Group",
    treeDataExpand: "see children",
    treeDataCollapse: "hide children",
    groupingColumnHeaderName: "Group",
    groupColumn: (e) => `Group by ${e}`,
    unGroupColumn: (e) => `Stop grouping by ${e}`,
    detailPanelToggle: "Detail panel toggle",
    expandDetailPanel: "Expand",
    collapseDetailPanel: "Collapse",
    MuiTablePagination: {},
    rowReorderingHeaderName: "Row reordering",
    aggregationMenuItemHeader: "Aggregation",
    aggregationFunctionLabelSum: "sum",
    aggregationFunctionLabelAvg: "avg",
    aggregationFunctionLabelMin: "min",
    aggregationFunctionLabelMax: "max",
    aggregationFunctionLabelSize: "size"
  };
  function Oe(e) {
    return Dt("MuiDataGrid", e);
  }
  const I = Mt("MuiDataGrid", [
    "actionsCell",
    "aggregationColumnHeader",
    "aggregationColumnHeader--alignLeft",
    "aggregationColumnHeader--alignCenter",
    "aggregationColumnHeader--alignRight",
    "aggregationColumnHeaderLabel",
    "autoHeight",
    "autosizing",
    "booleanCell",
    "cell--editable",
    "cell--editing",
    "cell--flex",
    "cell--textCenter",
    "cell--textLeft",
    "cell--textRight",
    "cell--rangeTop",
    "cell--rangeBottom",
    "cell--rangeLeft",
    "cell--rangeRight",
    "cell--pinnedLeft",
    "cell--pinnedRight",
    "cell--selectionMode",
    "cell",
    "cellCheckbox",
    "cellEmpty",
    "cellSkeleton",
    "cellOffsetLeft",
    "checkboxInput",
    "columnHeader",
    "columnHeader--alignCenter",
    "columnHeader--alignLeft",
    "columnHeader--alignRight",
    "columnHeader--dragging",
    "columnHeader--moving",
    "columnHeader--numeric",
    "columnHeader--sortable",
    "columnHeader--sorted",
    "columnHeader--filtered",
    "columnHeader--pinnedLeft",
    "columnHeader--pinnedRight",
    "columnHeader--last",
    "columnHeader--lastUnpinned",
    "columnHeader--siblingFocused",
    "columnHeaderCheckbox",
    "columnHeaderDraggableContainer",
    "columnHeaderTitle",
    "columnHeaderTitleContainer",
    "columnHeaderTitleContainerContent",
    "columnHeader--filledGroup",
    "columnHeader--emptyGroup",
    "columnHeaders",
    "columnSeparator--resizable",
    "columnSeparator--resizing",
    "columnSeparator--sideLeft",
    "columnSeparator--sideRight",
    "columnSeparator",
    "columnsManagement",
    "columnsManagementRow",
    "columnsManagementHeader",
    "columnsManagementSearchInput",
    "columnsManagementFooter",
    "container--top",
    "container--bottom",
    "detailPanel",
    "detailPanels",
    "detailPanelToggleCell",
    "detailPanelToggleCell--expanded",
    "footerCell",
    "panel",
    "panelHeader",
    "panelWrapper",
    "panelContent",
    "panelFooter",
    "paper",
    "editBooleanCell",
    "editInputCell",
    "filler",
    "filler--borderBottom",
    "filler--pinnedLeft",
    "filler--pinnedRight",
    "filterForm",
    "filterFormDeleteIcon",
    "filterFormLogicOperatorInput",
    "filterFormColumnInput",
    "filterFormOperatorInput",
    "filterFormValueInput",
    "filterIcon",
    "footerContainer",
    "headerFilterRow",
    "iconButtonContainer",
    "iconSeparator",
    "main",
    "main--hasPinnedRight",
    "main--hasSkeletonLoadingOverlay",
    "menu",
    "menuIcon",
    "menuIconButton",
    "menuOpen",
    "menuList",
    "overlay",
    "overlayWrapper",
    "overlayWrapperInner",
    "root",
    "root--densityStandard",
    "root--densityComfortable",
    "root--densityCompact",
    "root--disableUserSelection",
    "root--noToolbar",
    "row",
    "row--editable",
    "row--editing",
    "row--firstVisible",
    "row--lastVisible",
    "row--dragging",
    "row--dynamicHeight",
    "row--detailPanelExpanded",
    "row--borderBottom",
    "rowReorderCellPlaceholder",
    "rowCount",
    "rowReorderCellContainer",
    "rowReorderCell",
    "rowReorderCell--draggable",
    "rowSkeleton",
    "scrollArea--left",
    "scrollArea--right",
    "scrollArea--up",
    "scrollArea--down",
    "scrollArea",
    "scrollbar",
    "scrollbar--vertical",
    "scrollbar--horizontal",
    "scrollbarFiller",
    "scrollbarFiller--header",
    "scrollbarFiller--borderTop",
    "scrollbarFiller--borderBottom",
    "scrollbarFiller--pinnedRight",
    "selectedRowCount",
    "sortButton",
    "sortIcon",
    "toolbarContainer",
    "toolbarFilterList",
    "virtualScroller",
    "virtualScroller--hasScrollX",
    "virtualScrollerContent",
    "virtualScrollerContent--overflowed",
    "virtualScrollerRenderZone",
    "pinnedColumns",
    "withVerticalBorder",
    "withBorderColor",
    "cell--withRightBorder",
    "cell--withLeftBorder",
    "columnHeader--withRightBorder",
    "columnHeader--withLeftBorder",
    "treeDataGroupingCell",
    "treeDataGroupingCellToggle",
    "treeDataGroupingCellLoadingContainer",
    "groupingCriteriaCell",
    "groupingCriteriaCellToggle",
    "groupingCriteriaCellLoadingContainer",
    "pinnedRows",
    "pinnedRows--top",
    "pinnedRows--bottom",
    "pinnedRowsRenderZone"
  ]), Ii = 1e3;
  class Eh {
    constructor(t = Ii) {
      this.timeouts = /* @__PURE__ */ new Map(), this.cleanupTimeout = Ii, this.cleanupTimeout = t;
    }
    register(t, n, o) {
      this.timeouts || (this.timeouts = /* @__PURE__ */ new Map());
      const r = setTimeout(() => {
        typeof n == "function" && n(), this.timeouts.delete(o.cleanupToken);
      }, this.cleanupTimeout);
      this.timeouts.set(o.cleanupToken, r);
    }
    unregister(t) {
      const n = this.timeouts.get(t.cleanupToken);
      n && (this.timeouts.delete(t.cleanupToken), clearTimeout(n));
    }
    reset() {
      this.timeouts && (this.timeouts.forEach((t, n) => {
        this.unregister({
          cleanupToken: n
        });
      }), this.timeouts = void 0);
    }
  }
  class Fh {
    constructor() {
      this.registry = new FinalizationRegistry((t) => {
        typeof t == "function" && t();
      });
    }
    register(t, n, o) {
      this.registry.register(t, n, o);
    }
    unregister(t) {
      this.registry.unregister(t);
    }
    reset() {
    }
  }
  var Xt = (function(e) {
    return e.DataGrid = "DataGrid", e.DataGridPro = "DataGridPro", e.DataGridPremium = "DataGridPremium", e;
  })(Xt || {});
  class Th {
  }
  function Oh(e) {
    let t = 0;
    return function(o, r, l, s) {
      e.registry === null && (e.registry = typeof FinalizationRegistry < "u" ? new Fh() : new Eh());
      const [a] = u.useState(new Th()), i = u.useRef(null), d = u.useRef(null);
      d.current = l;
      const c = u.useRef(null);
      if (!i.current && d.current) {
        const f = (p, m, h) => {
          var _a2;
          m && !m.defaultMuiPrevented && ((_a2 = d.current) == null ? void 0 : _a2.call(d, p, m, h));
        };
        i.current = o.current.subscribeEvent(r, f, s), t += 1, c.current = {
          cleanupToken: t
        }, e.registry.register(a, () => {
          var _a2;
          (_a2 = i.current) == null ? void 0 : _a2.call(i), i.current = null, c.current = null;
        }, c.current);
      } else !d.current && i.current && (i.current(), i.current = null, c.current && (e.registry.unregister(c.current), c.current = null));
      u.useEffect(() => {
        if (!i.current && d.current) {
          const f = (p, m, h) => {
            var _a2;
            m && !m.defaultMuiPrevented && ((_a2 = d.current) == null ? void 0 : _a2.call(d, p, m, h));
          };
          i.current = o.current.subscribeEvent(r, f, s);
        }
        return c.current && e.registry && (e.registry.unregister(c.current), c.current = null), () => {
          var _a2;
          (_a2 = i.current) == null ? void 0 : _a2.call(i), i.current = null;
        };
      }, [
        o,
        r,
        s
      ]);
    };
  }
  const Dh = {
    registry: null
  }, oe = Oh(Dh), $h = {
    isFirst: true
  };
  function qe(e, t, n) {
    oe(e, t, n, $h);
  }
  const Hh = 0.7, Lh = 1.3, Rh = {
    compact: Hh,
    comfortable: Lh,
    standard: 1
  }, io = (e) => e.density, Io = he(io, (e) => Rh[e]), Ah = [
    "id",
    "value",
    "formattedValue",
    "api",
    "field",
    "row",
    "rowNode",
    "colDef",
    "cellMode",
    "isEditable",
    "tabIndex",
    "hasFocus",
    "isValidating",
    "debounceMs",
    "isProcessingProps",
    "onValueChange"
  ], Gh = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "editInputCell"
      ]
    }, Oe, t);
  }, zh = ge(ts, {
    name: "MuiDataGrid",
    slot: "EditInputCell",
    overridesResolver: (e, t) => t.editInputCell
  })(({ theme: e }) => g({}, e.typography.body2, {
    padding: "1px 0",
    "& input": {
      padding: "0 16px",
      height: "100%"
    }
  })), jh = je((e, t) => {
    const n = le(), { id: o, value: r, field: l, colDef: s, hasFocus: a, debounceMs: i = 200, isProcessingProps: d, onValueChange: c } = e, f = de(e, Ah), p = Pe(), m = u.useRef(null), [h, C] = u.useState(r), x = Gh(n), M = u.useCallback(async (O) => {
      const G = O.target.value;
      c && await c(O, G);
      const P = p.current.getColumn(l);
      let H = G;
      P.valueParser && (H = P.valueParser(G, p.current.getRow(o), P, p)), C(H), p.current.setEditCellValue({
        id: o,
        field: l,
        value: H,
        debounceMs: i,
        unstable_skipValueParser: true
      }, O);
    }, [
      p,
      i,
      l,
      o,
      c
    ]), v = p.current.unstable_getEditCellMeta(o, l);
    return u.useEffect(() => {
      (v == null ? void 0 : v.changeReason) !== "debouncedSetEditCellValue" && C(r);
    }, [
      v,
      r
    ]), mt(() => {
      a && m.current.focus();
    }, [
      a
    ]), b.jsx(zh, g({
      inputRef: m,
      className: x.root,
      ownerState: n,
      fullWidth: true,
      type: s.type === "number" ? s.type : "text",
      value: h ?? "",
      onChange: M,
      endAdornment: d ? b.jsx(n.slots.loadIcon, {
        fontSize: "small",
        color: "action"
      }) : void 0
    }, f, {
      ref: t
    }));
  }), Vh = (e) => b.jsx(jh, g({}, e)), en = (e) => e.rows, dr = he(en, (e) => e.totalRowCount), Nh = he(en, (e) => e.loading), _h = he(en, (e) => e.totalTopLevelRowCount), Ut = he(en, (e) => e.dataRowIdToModelLookup), Pi = he(en, (e) => e.dataRowIdToIdLookup), at = he(en, (e) => e.tree), Bh = he(en, (e) => e.groupsToFetch), Wh = he(en, (e) => e.groupingName), Mi = he(en, (e) => e.treeDepths), Xn = Be(en, (e) => {
    const t = Object.entries(e.treeDepths);
    return t.length === 0 ? 1 : (t.filter(([, n]) => n > 0).map(([n]) => Number(n)).sort((n, o) => o - n)[0] ?? 0) + 1;
  }), _o = he(en, (e) => e.dataRowIds), Uh = he(en, (e) => e == null ? void 0 : e.additionalRowGroups), Po = Be(Uh, (e) => {
    var _a2, _b2;
    const t = e == null ? void 0 : e.pinnedRows;
    return {
      bottom: ((_a2 = t == null ? void 0 : t.bottom) == null ? void 0 : _a2.map((n) => ({
        id: n.id,
        model: n.model ?? {}
      }))) ?? [],
      top: ((_b2 = t == null ? void 0 : t.top) == null ? void 0 : _b2.map((n) => ({
        id: n.id,
        model: n.model ?? {}
      }))) ?? []
    };
  }), uc = he(Po, (e) => {
    var _a2, _b2;
    return (((_a2 = e == null ? void 0 : e.top) == null ? void 0 : _a2.length) || 0) + (((_b2 = e == null ? void 0 : e.bottom) == null ? void 0 : _b2.length) || 0);
  }), dc = (e, t) => t && e.length > 1 ? [
    e[0]
  ] : e, ki = (e, t) => (n) => g({}, n, {
    sorting: g({}, n.sorting, {
      sortModel: dc(e, t)
    })
  }), Kh = (e) => e === "desc", qh = (e, t) => {
    const n = t.current.getColumn(e.field);
    if (!n || e.sort === null) return null;
    let o;
    return n.getSortComparator ? o = n.getSortComparator(e.sort) : o = Kh(e.sort) ? (...l) => -1 * n.sortComparator(...l) : n.sortComparator, o ? {
      getSortCellParams: (l) => ({
        id: l,
        field: n.field,
        rowNode: at(t)[l],
        value: t.current.getCellValue(l, n.field),
        api: t.current
      }),
      comparator: o
    } : null;
  }, Yh = (e, t, n) => e.reduce((o, r, l) => {
    if (o !== 0) return o;
    const s = t.params[l], a = n.params[l];
    return o = r.comparator(s.value, a.value, s, a), o;
  }, 0), Xh = (e, t) => {
    const n = e.map((o) => qh(o, t)).filter((o) => !!o);
    return n.length === 0 ? null : (o) => o.map((r) => ({
      node: r,
      params: n.map((l) => l.getSortCellParams(r.id))
    })).sort((r, l) => Yh(n, r, l)).map((r) => r.node.id);
  }, Ei = (e, t) => {
    const n = e.indexOf(t);
    return !t || n === -1 || n + 1 === e.length ? e[0] : e[n + 1];
  }, bs = (e, t) => e == null && t != null ? -1 : t == null && e != null ? 1 : e == null && t == null ? 0 : null, Qh = new Intl.Collator(), Jh = (e, t) => {
    const n = bs(e, t);
    return n !== null ? n : typeof e == "string" ? Qh.compare(e.toString(), t.toString()) : e - t;
  }, fc = (e, t) => {
    const n = bs(e, t);
    return n !== null ? n : Number(e) - Number(t);
  }, pc = (e, t) => {
    const n = bs(e, t);
    return n !== null ? n : e > t ? 1 : e < t ? -1 : 0;
  }, Zh = [
    "item",
    "applyValue",
    "type",
    "apiRef",
    "focusElementRef",
    "tabIndex",
    "disabled",
    "isFilterActive",
    "clearButton",
    "InputProps",
    "variant"
  ];
  function Wt(e) {
    var _a2;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, tabIndex: s, disabled: a, clearButton: i, InputProps: d, variant: c = "standard" } = e, f = de(e, Zh), p = sn(), [m, h] = u.useState(vl(t.value)), [C, x] = u.useState(false), M = Je(), v = le(), O = u.useCallback((G) => {
      const P = vl(G.target.value);
      h(P), x(true), p.start(v.filterDebounceMs, () => {
        const H = g({}, t, {
          value: o === "number" && !Number.isNaN(Number(P)) ? Number(P) : P,
          fromInput: M
        });
        n(H), x(false);
      });
    }, [
      p,
      v.filterDebounceMs,
      t,
      o,
      M,
      n
    ]);
    return u.useEffect(() => {
      (t.fromInput !== M || t.value == null) && h(vl(t.value));
    }, [
      M,
      t
    ]), b.jsx(v.slots.baseTextField, g({
      id: M,
      label: r.current.getLocaleText("filterPanelInputLabel"),
      placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
      value: m ?? "",
      onChange: O,
      variant: c,
      type: o || "text",
      InputProps: g({}, C || i ? {
        endAdornment: C ? b.jsx(v.slots.loadIcon, {
          fontSize: "small",
          color: "action"
        }) : i
      } : {}, {
        disabled: a
      }, d, {
        inputProps: g({
          tabIndex: s
        }, d == null ? void 0 : d.inputProps)
      }),
      InputLabelProps: {
        shrink: true
      },
      inputRef: l
    }, f, (_a2 = v.slotProps) == null ? void 0 : _a2.baseTextField));
  }
  function vl(e) {
    if (!(e == null || e === "")) return String(e);
  }
  function em(e) {
    return typeof e == "number" && !Number.isNaN(e);
  }
  function tm(e) {
    return typeof e == "function";
  }
  function Cs(e) {
    return typeof e == "object" && e !== null;
  }
  function nm() {
    try {
      const e = "__some_random_key_you_are_not_going_to_use__";
      return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), true;
    } catch {
      return false;
    }
  }
  function Gr(e) {
    return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  const Gt = (e, t, n) => Math.max(t, Math.min(n, e));
  function Fi(e, t) {
    return Array.from({
      length: t - e
    }).map((n, o) => e + o);
  }
  function $n(e, t) {
    if (e === t) return true;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return false;
      if (Array.isArray(e)) {
        const r = e.length;
        if (r !== t.length) return false;
        for (let l = 0; l < r; l += 1) if (!$n(e[l], t[l])) return false;
        return true;
      }
      if (e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return false;
        const r = Array.from(e.entries());
        for (let l = 0; l < r.length; l += 1) if (!t.has(r[l][0])) return false;
        for (let l = 0; l < r.length; l += 1) {
          const s = r[l];
          if (!$n(s[1], t.get(s[0]))) return false;
        }
        return true;
      }
      if (e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return false;
        const r = Array.from(e.entries());
        for (let l = 0; l < r.length; l += 1) if (!t.has(r[l][0])) return false;
        return true;
      }
      if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
        const r = e.length;
        if (r !== t.length) return false;
        for (let l = 0; l < r; l += 1) if (e[l] !== t[l]) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
      const n = Object.keys(e), o = n.length;
      if (o !== Object.keys(t).length) return false;
      for (let r = 0; r < o; r += 1) if (!Object.prototype.hasOwnProperty.call(t, n[r])) return false;
      for (let r = 0; r < o; r += 1) {
        const l = n[r];
        if (!$n(e[l], t[l])) return false;
      }
      return true;
    }
    return e !== e && t !== t;
  }
  function om(e) {
    return () => {
      let t = e += 1831565813;
      return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function rm(e) {
    const t = om(e);
    return (n, o) => n + (o - n) * t();
  }
  function gc(e) {
    return typeof structuredClone == "function" ? structuredClone(e) : JSON.parse(JSON.stringify(e));
  }
  const Nn = (e, t) => (n) => {
    e && t(n);
  }, lm = [
    "item",
    "applyValue",
    "type",
    "apiRef",
    "focusElementRef",
    "color",
    "error",
    "helperText",
    "size",
    "variant"
  ], sm = [
    "key"
  ];
  function hc(e) {
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, color: s, error: a, helperText: i, size: d, variant: c = "standard" } = e, f = de(e, lm), p = {
      color: s,
      error: a,
      helperText: i,
      size: d,
      variant: c
    }, [m, h] = u.useState(t.value || []), C = Je(), x = le();
    u.useEffect(() => {
      const v = t.value ?? [];
      h(v.map(String));
    }, [
      t.value
    ]);
    const M = u.useCallback((v, O) => {
      h(O.map(String)), n(g({}, t, {
        value: [
          ...O.map((G) => o === "number" ? Number(G) : G)
        ]
      }));
    }, [
      n,
      t,
      o
    ]);
    return b.jsx(Wa, g({
      multiple: true,
      freeSolo: true,
      options: [],
      filterOptions: (v, O) => {
        const { inputValue: G } = O;
        return G == null || G === "" ? [] : [
          G
        ];
      },
      id: C,
      value: m,
      onChange: M,
      renderTags: (v, O) => v.map((G, P) => {
        const H = O({
          index: P
        }), { key: R } = H, T = de(H, sm);
        return b.jsx(x.slots.baseChip, g({
          variant: "outlined",
          size: "small",
          label: G
        }, T), R);
      }),
      renderInput: (v) => {
        var _a2;
        return b.jsx(x.slots.baseTextField, g({}, v, {
          label: r.current.getLocaleText("filterPanelInputLabel"),
          placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
          InputLabelProps: g({}, v.InputLabelProps, {
            shrink: true
          }),
          inputRef: l,
          type: o || "text"
        }, p, (_a2 = x.slotProps) == null ? void 0 : _a2.baseTextField));
      }
    }, f));
  }
  var mn = (function(e) {
    return e.Cell = "cell", e.Row = "row", e;
  })(mn || {}), Ke = (function(e) {
    return e.Edit = "edit", e.View = "view", e;
  })(Ke || {}), Qe = (function(e) {
    return e.Edit = "edit", e.View = "view", e;
  })(Qe || {}), Pt = (function(e) {
    return e.And = "and", e.Or = "or", e;
  })(Pt || {}), xn = (function(e) {
    return e.enterKeyDown = "enterKeyDown", e.cellDoubleClick = "cellDoubleClick", e.printableKeyDown = "printableKeyDown", e.deleteKeyDown = "deleteKeyDown", e.pasteKeyDown = "pasteKeyDown", e;
  })(xn || {}), nn = (function(e) {
    return e.cellFocusOut = "cellFocusOut", e.escapeKeyDown = "escapeKeyDown", e.enterKeyDown = "enterKeyDown", e.tabKeyDown = "tabKeyDown", e.shiftTabKeyDown = "shiftTabKeyDown", e;
  })(nn || {}), Fn = (function(e) {
    return e.enterKeyDown = "enterKeyDown", e.cellDoubleClick = "cellDoubleClick", e.printableKeyDown = "printableKeyDown", e.deleteKeyDown = "deleteKeyDown", e;
  })(Fn || {}), dn = (function(e) {
    return e.rowFocusOut = "rowFocusOut", e.escapeKeyDown = "escapeKeyDown", e.enterKeyDown = "enterKeyDown", e.tabKeyDown = "tabKeyDown", e.shiftTabKeyDown = "shiftTabKeyDown", e;
  })(dn || {});
  function mc(e) {
    return e.field !== void 0;
  }
  const bc = {
    filteredRowsLookup: {},
    filteredChildrenCountLookup: {},
    filteredDescendantCountLookup: {}
  }, er = () => ({
    items: [],
    logicOperator: Pt.And,
    quickFilterValues: [],
    quickFilterLogicOperator: Pt.And
  });
  function Cc(e) {
    return {
      current: e.current.getPublicApi()
    };
  }
  let Tn = (function(e) {
    return e.LEFT = "left", e.RIGHT = "right", e;
  })({});
  const zr = {
    left: [],
    right: []
  }, wc = (e) => e.isRtl, gn = (e) => e.columns, yn = he(gn, (e) => e.orderedFields), Pn = he(gn, (e) => e.lookup), Qt = Be(yn, Pn, (e, t) => e.map((n) => t[n])), Kt = he(gn, (e) => e.columnVisibilityModel), ot = Be(Qt, Kt, (e, t) => e.filter((n) => t[n.field] !== false)), Mo = Be(ot, (e) => e.map((t) => t.field)), vc = (e) => e.pinnedColumns;
  Be(vc, yn, wc, (e, t, n) => xc(e, t, n));
  const ko = Be(gn, vc, Mo, wc, (e, t, n, o) => {
    const r = xc(t, n, o);
    return {
      left: r.left.map((s) => e.lookup[s]),
      right: r.right.map((s) => e.lookup[s])
    };
  });
  function xc(e, t, n) {
    var _a2, _b2;
    if (!Array.isArray(e.left) && !Array.isArray(e.right) || ((_a2 = e.left) == null ? void 0 : _a2.length) === 0 && ((_b2 = e.right) == null ? void 0 : _b2.length) === 0) return zr;
    const o = (a, i) => Array.isArray(a) ? a.filter((d) => i.includes(d)) : [], r = o(e.left, t), l = t.filter((a) => !r.includes(a)), s = o(e.right, l);
    return n ? {
      left: s,
      right: r
    } : {
      left: r,
      right: s
    };
  }
  const Gn = Be(ot, (e) => {
    const t = [];
    let n = 0;
    for (let o = 0; o < e.length; o += 1) t.push(n), n += e[o].computedWidth;
    return t;
  }), yc = Be(Qt, (e) => e.filter((t) => t.filterable)), im = Be(Qt, (e) => e.reduce((t, n) => (n.filterable && (t[n.field] = n), t), {})), am = Be(Qt, (e) => e.some((t) => t.colSpan !== void 0));
  let zo;
  function cm() {
    if (zo !== void 0) return zo;
    try {
      zo = new Function("return true")();
    } catch {
      zo = false;
    }
    return zo;
  }
  const Nl = (e, t) => {
    const n = g({}, e);
    if (n.id == null && (n.id = Math.round(Math.random() * 1e5)), n.operator == null) {
      const o = Pn(t)[n.field];
      n.operator = o && o.filterOperators[0].value;
    }
    return n;
  }, ws = (e, t, n) => {
    const o = e.items.length > 1;
    let r;
    o && t ? r = [
      e.items[0]
    ] : r = e.items;
    const l = o && r.some((a) => a.id == null);
    return r.some((a) => a.operator == null) || l ? g({}, e, {
      items: r.map((a) => Nl(a, n))
    }) : e.items !== r ? g({}, e, {
      items: r
    }) : e;
  }, Ti = (e, t, n) => (o) => g({}, o, {
    filterModel: ws(e, t, n)
  }), tr = (e) => typeof e == "string" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e, Sc = (e, t) => {
    var _a2;
    if (!e.field || !e.operator) return null;
    const n = t.current.getColumn(e.field);
    if (!n) return null;
    let o;
    if (n.valueParser) {
      const c = n.valueParser;
      o = Array.isArray(e.value) ? (_a2 = e.value) == null ? void 0 : _a2.map((f) => c(f, void 0, n, t)) : c(e.value, void 0, n, t);
    } else o = e.value;
    const { ignoreDiacritics: r } = t.current.rootProps;
    r && (o = tr(o));
    const l = g({}, e, {
      value: o
    }), s = n.filterOperators;
    if (!(s == null ? void 0 : s.length)) throw new Error(`MUI X: No filter operators found for column '${n.field}'.`);
    const a = s.find((c) => c.value === l.operator);
    if (!a) throw new Error(`MUI X: No filter operator found for column '${n.field}' and operator value '${l.operator}'.`);
    const i = Cc(t), d = a.getApplyFilterFn(l, n);
    return typeof d != "function" ? null : {
      item: l,
      fn: (c) => {
        let f = t.current.getRowValue(c, n);
        return r && (f = tr(f)), d(f, c, n, i);
      }
    };
  };
  let Oi = 1;
  const um = (e, t, n) => {
    const { items: o } = e, r = o.map((a) => Sc(a, t)).filter((a) => !!a);
    if (r.length === 0) return null;
    if (n || !cm()) return (a, i) => {
      const d = {};
      for (let c = 0; c < r.length; c += 1) {
        const f = r[c];
        (!i || i(f.item.field)) && (d[f.item.id] = f.fn(a));
      }
      return d;
    };
    const l = new Function("appliers", "row", "shouldApplyFilter", `"use strict";
${r.map((a, i) => `const shouldApply${i} = !shouldApplyFilter || shouldApplyFilter(${JSON.stringify(a.item.field)});`).join(`
`)}

const result$$ = {
${r.map((a, i) => `  ${JSON.stringify(String(a.item.id))}: !shouldApply${i} ? false : appliers[${i}].fn(row),`).join(`
`)}
};

return result$$;`.replaceAll("$$", String(Oi)));
    return Oi += 1, (a, i) => l(r, a, i);
  }, Ic = (e) => e.quickFilterExcludeHiddenColumns ?? true, dm = (e, t) => {
    var _a2;
    const n = ((_a2 = e.quickFilterValues) == null ? void 0 : _a2.filter(Boolean)) ?? [];
    if (n.length === 0) return null;
    const o = Ic(e) ? Mo(t) : yn(t), r = [], { ignoreDiacritics: l } = t.current.rootProps, s = Cc(t);
    return o.forEach((a) => {
      const i = t.current.getColumn(a), d = i == null ? void 0 : i.getApplyQuickFilterFn;
      d && r.push({
        column: i,
        appliers: n.map((c) => {
          const f = l ? tr(c) : c;
          return {
            fn: d(f, i, s)
          };
        })
      });
    }), function(i, d) {
      const c = {};
      e: for (let f = 0; f < n.length; f += 1) {
        const p = n[f];
        for (let m = 0; m < r.length; m += 1) {
          const { column: h, appliers: C } = r[m], { field: x } = h;
          if (d && !d(x)) continue;
          const M = C[f];
          let v = t.current.getRowValue(i, h);
          if (M.fn === null) continue;
          if (l && (v = tr(v)), M.fn(v, i, h, s)) {
            c[p] = true;
            continue e;
          }
        }
        c[p] = false;
      }
      return c;
    };
  }, fm = (e, t, n) => {
    const o = um(e, t, n), r = dm(e, t);
    return function(s, a, i) {
      i.passingFilterItems = (o == null ? void 0 : o(s, a)) ?? null, i.passingQuickFilterValues = (r == null ? void 0 : r(s, a)) ?? null;
    };
  }, Di = (e) => e != null, pm = (e, t, n) => (e.cleanedFilterItems || (e.cleanedFilterItems = n.filter((o) => Sc(o, t) !== null)), e.cleanedFilterItems), gm = (e, t, n, o, r) => {
    const l = pm(r, o, n.items), s = e.filter(Di), a = t.filter(Di);
    if (s.length > 0) {
      const i = (c) => s.some((f) => f[c.id]);
      if ((n.logicOperator ?? er().logicOperator) === Pt.And) {
        if (!l.every(i)) return false;
      } else if (!l.some(i)) return false;
    }
    if (a.length > 0 && n.quickFilterValues != null) {
      const i = (c) => a.some((f) => f[c]);
      if ((n.quickFilterLogicOperator ?? er().quickFilterLogicOperator) === Pt.And) {
        if (!n.quickFilterValues.every(i)) return false;
      } else if (!n.quickFilterValues.some(i)) return false;
    }
    return true;
  }, hm = (e) => {
    if (!e) return null;
    const t = new RegExp(Gr(e), "i");
    return (n, o, r, l) => {
      let s = l.current.getRowFormattedValue(o, r);
      return l.current.ignoreDiacritics && (s = tr(s)), s != null ? t.test(s.toString()) : false;
    };
  }, $i = (e, t) => (n) => {
    if (!n.value) return null;
    const o = e ? n.value : n.value.trim(), r = new RegExp(Gr(o), "i");
    return (l) => {
      if (l == null) return t;
      const s = r.test(String(l));
      return t ? !s : s;
    };
  }, Hi = (e, t) => (n) => {
    if (!n.value) return null;
    const o = e ? n.value : n.value.trim(), r = new Intl.Collator(void 0, {
      sensitivity: "base",
      usage: "search"
    });
    return (l) => {
      if (l == null) return t;
      const s = r.compare(o, l.toString()) === 0;
      return t ? !s : s;
    };
  }, Li = (e) => () => (t) => {
    const n = t === "" || t == null;
    return e ? !n : n;
  }, mm = (e = false) => [
    {
      value: "contains",
      getApplyFilterFn: $i(e, false),
      InputComponent: Wt
    },
    {
      value: "doesNotContain",
      getApplyFilterFn: $i(e, true),
      InputComponent: Wt
    },
    {
      value: "equals",
      getApplyFilterFn: Hi(e, false),
      InputComponent: Wt
    },
    {
      value: "doesNotEqual",
      getApplyFilterFn: Hi(e, true),
      InputComponent: Wt
    },
    {
      value: "startsWith",
      getApplyFilterFn: (t) => {
        if (!t.value) return null;
        const n = e ? t.value : t.value.trim(), o = new RegExp(`^${Gr(n)}.*$`, "i");
        return (r) => r != null ? o.test(r.toString()) : false;
      },
      InputComponent: Wt
    },
    {
      value: "endsWith",
      getApplyFilterFn: (t) => {
        if (!t.value) return null;
        const n = e ? t.value : t.value.trim(), o = new RegExp(`.*${Gr(n)}$`, "i");
        return (r) => r != null ? o.test(r.toString()) : false;
      },
      InputComponent: Wt
    },
    {
      value: "isEmpty",
      getApplyFilterFn: Li(false),
      requiresFilterValue: false
    },
    {
      value: "isNotEmpty",
      getApplyFilterFn: Li(true),
      requiresFilterValue: false
    },
    {
      value: "isAnyOf",
      getApplyFilterFn: (t) => {
        if (!Array.isArray(t.value) || t.value.length === 0) return null;
        const n = e ? t.value : t.value.map((r) => r.trim()), o = new Intl.Collator(void 0, {
          sensitivity: "base",
          usage: "search"
        });
        return (r) => r != null ? n.some((l) => o.compare(l, r.toString() || "") === 0) : false;
      },
      InputComponent: hc
    }
  ], an = {
    width: 100,
    minWidth: 50,
    maxWidth: 1 / 0,
    hideable: true,
    sortable: true,
    resizable: true,
    filterable: true,
    groupable: true,
    pinnable: true,
    aggregable: true,
    editable: false,
    sortComparator: Jh,
    type: "string",
    align: "left",
    filterOperators: mm(),
    renderEditCell: Vh,
    getApplyQuickFilterFn: hm
  }, bm = [
    "open",
    "target",
    "onClose",
    "children",
    "position",
    "className",
    "onExited"
  ], Cm = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "menu"
      ]
    }, Oe, t);
  }, wm = ge(Yn, {
    name: "MuiDataGrid",
    slot: "Menu",
    overridesResolver: (e, t) => t.menu
  })(({ theme: e }) => ({
    zIndex: e.zIndex.modal,
    [`& .${I.menuList}`]: {
      outline: 0
    }
  })), vm = {
    "bottom-start": "top left",
    "bottom-end": "top right"
  };
  function vs(e) {
    var _a2;
    const { open: t, target: n, onClose: o, children: r, position: l, className: s, onExited: a } = e, i = de(e, bm), d = Pe(), c = le(), f = Cm(c), p = u.useRef(null);
    mt(() => {
      var _a3, _b2;
      t ? p.current = document.activeElement instanceof HTMLElement ? document.activeElement : null : ((_b2 = (_a3 = p.current) == null ? void 0 : _a3.focus) == null ? void 0 : _b2.call(_a3), p.current = null);
    }, [
      t
    ]), u.useEffect(() => {
      const C = t ? "menuOpen" : "menuClose";
      d.current.publishEvent(C, {
        target: n
      });
    }, [
      d,
      t,
      n
    ]);
    const m = (C) => (x) => {
      C && C(), a && a(x);
    }, h = (C) => {
      C.target && (n === C.target || (n == null ? void 0 : n.contains(C.target))) || o(C);
    };
    return b.jsx(wm, g({
      as: c.slots.basePopper,
      className: pe(f.root, s),
      ownerState: c,
      open: t,
      anchorEl: n,
      transition: true,
      placement: l
    }, i, (_a2 = c.slotProps) == null ? void 0 : _a2.basePopper, {
      children: ({ TransitionProps: C, placement: x }) => b.jsx(Ua, {
        onClickAway: h,
        mouseEvent: "onMouseDown",
        children: b.jsx(Fa, g({}, C, {
          style: {
            transformOrigin: vm[x]
          },
          onExited: m(C == null ? void 0 : C.onExited),
          children: b.jsx(lr, {
            children: r
          })
        }))
      })
    }));
  }
  const xm = [
    "api",
    "colDef",
    "id",
    "hasFocus",
    "isEditable",
    "field",
    "value",
    "formattedValue",
    "row",
    "rowNode",
    "cellMode",
    "tabIndex",
    "position",
    "focusElementRef"
  ], ym = (e) => typeof e.getActions == "function";
  function Sm(e) {
    var _a2;
    const { colDef: t, id: n, hasFocus: o, tabIndex: r, position: l = "bottom-end", focusElementRef: s } = e, a = de(e, xm), [i, d] = u.useState(-1), [c, f] = u.useState(false), p = Pe(), m = u.useRef(null), h = u.useRef(null), C = u.useRef(false), x = u.useRef({}), M = $t(), v = Je(), O = Je(), G = le();
    if (!ym(t)) throw new Error("MUI X: Missing the `getActions` property in the `GridColDef`.");
    const P = t.getActions(p.current.getRowParams(n)), H = P.filter((S) => !S.props.showInMenu), R = P.filter((S) => S.props.showInMenu), T = H.length + (R.length ? 1 : 0);
    u.useLayoutEffect(() => {
      o || Object.entries(x.current).forEach(([S, F]) => {
        F == null ? void 0 : F.stop({}, () => {
          delete x.current[S];
        });
      });
    }, [
      o
    ]), u.useEffect(() => {
      if (i < 0 || !m.current || i >= m.current.children.length) return;
      m.current.children[i].focus({
        preventScroll: true
      });
    }, [
      i
    ]), u.useEffect(() => {
      o || (d(-1), C.current = false);
    }, [
      o
    ]), u.useImperativeHandle(s, () => ({
      focus() {
        if (!C.current) {
          const S = P.findIndex((F) => !F.props.disabled);
          d(S);
        }
      }
    }), [
      P
    ]), u.useEffect(() => {
      i >= T && d(T - 1);
    }, [
      i,
      T
    ]);
    const w = () => {
      f(true), d(T - 1), C.current = true;
    }, y = () => {
      f(false);
    }, k = (S) => {
      S.stopPropagation(), S.preventDefault(), c ? y() : w();
    }, D = (S) => (F) => {
      x.current[S] = F;
    }, $ = (S, F) => (A) => {
      d(S), C.current = true, F && F(A);
    }, V = (S) => {
      if (T <= 1) return;
      const F = (z, j) => {
        var _a3;
        if (z < 0 || z > P.length) return z;
        const N = (j === "left" ? -1 : 1) * (M ? -1 : 1);
        return ((_a3 = P[z + N]) == null ? void 0 : _a3.props.disabled) ? F(z + N, j) : z + N;
      };
      let A = i;
      S.key === "ArrowRight" ? A = F(i, "right") : S.key === "ArrowLeft" && (A = F(i, "left")), !(A < 0 || A >= T) && A !== i && (S.preventDefault(), S.stopPropagation(), d(A));
    }, E = (S) => {
      S.key === "Tab" && S.preventDefault(), [
        "Tab",
        "Escape"
      ].includes(S.key) && y();
    };
    return b.jsxs("div", g({
      role: "menu",
      ref: m,
      tabIndex: -1,
      className: I.actionsCell,
      onKeyDown: V
    }, a, {
      children: [
        H.map((S, F) => u.cloneElement(S, {
          key: F,
          touchRippleRef: D(F),
          onClick: $(F, S.props.onClick),
          tabIndex: i === F ? r : -1
        })),
        R.length > 0 && O && b.jsx(G.slots.baseIconButton, g({
          ref: h,
          id: O,
          "aria-label": p.current.getLocaleText("actionsCellMore"),
          "aria-haspopup": "menu",
          "aria-expanded": c,
          "aria-controls": c ? v : void 0,
          role: "menuitem",
          size: "small",
          onClick: k,
          touchRippleRef: D(O),
          tabIndex: i === H.length ? r : -1
        }, (_a2 = G.slotProps) == null ? void 0 : _a2.baseIconButton, {
          children: b.jsx(G.slots.moreActionsIcon, {
            fontSize: "small"
          })
        })),
        R.length > 0 && b.jsx(vs, {
          open: c,
          target: h.current,
          position: l,
          onClose: y,
          children: b.jsx(os, {
            id: v,
            className: I.menuList,
            onKeyDown: E,
            "aria-labelledby": O,
            variant: "menu",
            autoFocusItem: true,
            children: R.map((S, F) => u.cloneElement(S, {
              key: F,
              closeMenu: y
            }))
          })
        })
      ]
    }));
  }
  const Im = (e) => b.jsx(Sm, g({}, e)), Jr = "actions", Pm = g({}, an, {
    sortable: false,
    filterable: false,
    aggregable: false,
    width: 100,
    display: "flex",
    align: "center",
    headerAlign: "center",
    headerName: "",
    disableColumnMenu: true,
    disableExport: true,
    renderCell: Im,
    getApplyQuickFilterFn: void 0
  }), Ct = "auto-generated-group-node-root", vo = /* @__PURE__ */ Symbol("mui.id_autogenerated"), Mm = () => ({
    type: "group",
    id: Ct,
    depth: -1,
    groupingField: null,
    groupingKey: null,
    isAutoGenerated: true,
    children: [],
    childrenFromPath: {},
    childrenExpanded: true,
    parent: null
  });
  function km(e, t, n = "A row was provided without id in the rows prop:") {
    if (e == null) throw new Error([
      "MUI X: The Data Grid component requires all rows to have a unique `id` property.",
      "Alternatively, you can use the `getRowId` prop to specify a custom id for each row.",
      n,
      JSON.stringify(t)
    ].join(`
`));
  }
  const Zr = (e, t, n) => {
    const o = t ? t(e) : e.id;
    return km(o, e, n), o;
  }, Tr = ({ rows: e, getRowId: t, loading: n, rowCount: o }) => {
    const r = {
      type: "full",
      rows: []
    }, l = {}, s = {};
    for (let a = 0; a < e.length; a += 1) {
      const i = e[a], d = Zr(i, t);
      l[d] = i, s[d] = d, r.rows.push(d);
    }
    return {
      rowsBeforePartialUpdates: e,
      loadingPropBeforePartialUpdates: n,
      rowCountPropBeforePartialUpdates: o,
      updates: r,
      dataRowIdToIdLookup: s,
      dataRowIdToModelLookup: l
    };
  }, Pc = ({ tree: e, rowCountProp: t = 0 }) => {
    const n = e[Ct];
    return Math.max(t, n.children.length + (n.footerId == null ? 0 : 1));
  }, Mc = ({ apiRef: e, rowCountProp: t = 0, loadingProp: n, previousTree: o, previousTreeDepths: r, previousGroupsToFetch: l }) => {
    const s = e.current.caches.rows, { tree: a, treeDepths: i, dataRowIds: d, groupingName: c, groupsToFetch: f = [] } = e.current.applyStrategyProcessor("rowTreeCreation", {
      previousTree: o,
      previousTreeDepths: r,
      updates: s.updates,
      dataRowIdToIdLookup: s.dataRowIdToIdLookup,
      dataRowIdToModelLookup: s.dataRowIdToModelLookup,
      previousGroupsToFetch: l
    }), p = e.current.unstable_applyPipeProcessors("hydrateRows", {
      tree: a,
      treeDepths: i,
      dataRowIdToIdLookup: s.dataRowIdToIdLookup,
      dataRowIds: d,
      dataRowIdToModelLookup: s.dataRowIdToModelLookup
    });
    return e.current.caches.rows.updates = {
      type: "partial",
      actions: {
        insert: [],
        modify: [],
        remove: []
      },
      idToActionLookup: {}
    }, g({}, p, {
      totalRowCount: Math.max(t, p.dataRowIds.length),
      totalTopLevelRowCount: Pc({
        tree: p.tree,
        rowCountProp: t
      }),
      groupingName: c,
      loading: n,
      groupsToFetch: f
    });
  }, xo = (e) => e.type === "skeletonRow" || e.type === "footer" || e.type === "group" && e.isAutoGenerated || e.type === "pinnedRow" && e.isAutoGenerated, xs = (e, t, n) => {
    const o = e[t];
    if (o.type !== "group") return [];
    const r = [];
    for (let l = 0; l < o.children.length; l += 1) {
      const s = o.children[l];
      (!n || !xo(e[s])) && r.push(s);
      const a = xs(e, s, n);
      for (let i = 0; i < a.length; i += 1) r.push(a[i]);
    }
    return !n && o.footerId != null && r.push(o.footerId), r;
  }, Ri = ({ previousCache: e, getRowId: t, updates: n, groupKeys: o }) => {
    if (e.updates.type === "full") throw new Error("MUI X: Unable to prepare a partial update if a full update is not applied yet.");
    const r = /* @__PURE__ */ new Map();
    n.forEach((c) => {
      const f = Zr(c, t, "A row was provided without id when calling updateRows():");
      r.has(f) ? r.set(f, g({}, r.get(f), c)) : r.set(f, c);
    });
    const l = {
      type: "partial",
      actions: {
        insert: [
          ...e.updates.actions.insert ?? []
        ],
        modify: [
          ...e.updates.actions.modify ?? []
        ],
        remove: [
          ...e.updates.actions.remove ?? []
        ]
      },
      idToActionLookup: g({}, e.updates.idToActionLookup),
      groupKeys: o
    }, s = g({}, e.dataRowIdToModelLookup), a = g({}, e.dataRowIdToIdLookup), i = {
      insert: {},
      modify: {},
      remove: {}
    };
    r.forEach((c, f) => {
      const p = l.idToActionLookup[f];
      if (c._action === "delete") {
        if (p === "remove" || !s[f]) return;
        p != null && (i[p][f] = true), l.actions.remove.push(f), delete s[f], delete a[f];
        return;
      }
      const m = s[f];
      if (m) {
        p === "remove" ? (i.remove[f] = true, l.actions.modify.push(f)) : p == null && l.actions.modify.push(f), s[f] = g({}, m, c);
        return;
      }
      p === "remove" ? (i.remove[f] = true, l.actions.insert.push(f)) : p == null && l.actions.insert.push(f), s[f] = c, a[f] = f;
    });
    const d = Object.keys(i);
    for (let c = 0; c < d.length; c += 1) {
      const f = d[c], p = i[f];
      Object.keys(p).length > 0 && (l.actions[f] = l.actions[f].filter((m) => !p[m]));
    }
    return {
      dataRowIdToModelLookup: s,
      dataRowIdToIdLookup: a,
      updates: l,
      rowsBeforePartialUpdates: e.rowsBeforePartialUpdates,
      loadingPropBeforePartialUpdates: e.loadingPropBeforePartialUpdates,
      rowCountPropBeforePartialUpdates: e.rowCountPropBeforePartialUpdates
    };
  }, kc = "var(--DataGrid-overlayHeight, calc(var(--height) * 2))";
  function Ai(e, t, n) {
    const o = [];
    return t.forEach((r) => {
      var _a2;
      const l = Zr(r, n, "A row was provided without id when calling updateRows():");
      if (((_a2 = e.current.getRowNode(l)) == null ? void 0 : _a2.type) === "pinnedRow") {
        const a = e.current.caches.pinnedRows, i = a.idLookup[l];
        i && (a.idLookup[l] = g({}, i, r));
      } else o.push(r);
    }), o;
  }
  const Ec = (e, t, n) => typeof e == "number" && e > 0 ? e : t, Em = "__tree_data_group__", Fc = "__row_group_by_columns_group__", el = "__detail_panel_toggle__";
  let Ee = (function(e) {
    return e[e.NONE = 0] = "NONE", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.VIRTUAL = 3] = "VIRTUAL", e;
  })({});
  const Fm = [
    "id",
    "value",
    "formattedValue",
    "api",
    "field",
    "row",
    "rowNode",
    "colDef",
    "cellMode",
    "isEditable",
    "hasFocus",
    "tabIndex",
    "hideDescendantCount"
  ], Tm = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "booleanCell"
      ]
    }, Oe, t);
  };
  function Om(e) {
    const { value: t, rowNode: n } = e, o = de(e, Fm), r = Pe(), l = le(), s = {
      classes: l.classes
    }, a = Tm(s), d = Q(r, Xn) > 0 && n.type === "group" && l.treeData === false, c = u.useMemo(() => t ? l.slots.booleanCellTrueIcon : l.slots.booleanCellFalseIcon, [
      l.slots.booleanCellFalseIcon,
      l.slots.booleanCellTrueIcon,
      t
    ]);
    return d && t === void 0 ? null : b.jsx(c, g({
      fontSize: "small",
      className: a.root,
      titleAccess: r.current.getLocaleText(t ? "booleanCellTrueLabel" : "booleanCellFalseLabel"),
      "data-value": !!t
    }, o));
  }
  const Dm = u.memo(Om), $m = (e) => e.field !== Fc && xo(e.rowNode) ? "" : b.jsx(Dm, g({}, e)), Hm = [
    "id",
    "value",
    "formattedValue",
    "api",
    "field",
    "row",
    "rowNode",
    "colDef",
    "cellMode",
    "isEditable",
    "tabIndex",
    "className",
    "hasFocus",
    "isValidating",
    "isProcessingProps",
    "error",
    "onValueChange"
  ], Lm = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "editBooleanCell"
      ]
    }, Oe, t);
  };
  function Rm(e) {
    var _a2;
    const { id: t, value: n, field: o, className: r, hasFocus: l, onValueChange: s } = e, a = de(e, Hm), i = Pe(), d = u.useRef(null), c = Je(), [f, p] = u.useState(n), m = le(), h = {
      classes: m.classes
    }, C = Lm(h), x = u.useCallback(async (M) => {
      const v = M.target.checked;
      s && await s(M, v), p(v), await i.current.setEditCellValue({
        id: t,
        field: o,
        value: v
      }, M);
    }, [
      i,
      o,
      t,
      s
    ]);
    return u.useEffect(() => {
      p(n);
    }, [
      n
    ]), mt(() => {
      l && d.current.focus();
    }, [
      l
    ]), b.jsx("label", g({
      htmlFor: c,
      className: pe(C.root, r)
    }, a, {
      children: b.jsx(m.slots.baseCheckbox, g({
        id: c,
        inputRef: d,
        checked: !!f,
        onChange: x,
        size: "small"
      }, (_a2 = m.slotProps) == null ? void 0 : _a2.baseCheckbox))
    }));
  }
  const Am = (e) => b.jsx(Rm, g({}, e)), Gm = [
    "item",
    "applyValue",
    "apiRef",
    "focusElementRef",
    "isFilterActive",
    "clearButton",
    "tabIndex",
    "label",
    "variant",
    "InputLabelProps"
  ], Or = (e) => {
    if (String(e).toLowerCase() === "true") return true;
    if (String(e).toLowerCase() === "false") return false;
  }, zm = ge("div")({
    display: "flex",
    alignItems: "center",
    width: "100%",
    "& button": {
      margin: "auto 0px 5px 5px"
    }
  });
  function jm(e) {
    var _a2, _b2, _c2;
    const { item: t, applyValue: n, apiRef: o, focusElementRef: r, clearButton: l, tabIndex: s, label: a, variant: i = "standard" } = e, d = de(e, Gm), [c, f] = u.useState(Or(t.value)), p = le(), m = Je(), h = Je(), C = ((_a2 = p.slotProps) == null ? void 0 : _a2.baseSelect) || {}, x = C.native ?? false, M = ((_b2 = p.slotProps) == null ? void 0 : _b2.baseSelectOption) || {}, v = u.useCallback((G) => {
      const P = Or(G.target.value);
      f(P), n(g({}, t, {
        value: P
      }));
    }, [
      n,
      t
    ]);
    u.useEffect(() => {
      f(Or(t.value));
    }, [
      t.value
    ]);
    const O = a ?? o.current.getLocaleText("filterPanelInputLabel");
    return b.jsxs(zm, {
      children: [
        b.jsxs(p.slots.baseFormControl, {
          fullWidth: true,
          children: [
            b.jsx(p.slots.baseInputLabel, g({}, (_c2 = p.slotProps) == null ? void 0 : _c2.baseInputLabel, {
              id: m,
              shrink: true,
              variant: i,
              children: O
            })),
            b.jsxs(p.slots.baseSelect, g({
              labelId: m,
              id: h,
              label: O,
              value: c === void 0 ? "" : String(c),
              onChange: v,
              variant: i,
              notched: i === "outlined" ? true : void 0,
              native: x,
              displayEmpty: true,
              inputProps: {
                ref: r,
                tabIndex: s
              }
            }, d, C, {
              children: [
                b.jsx(p.slots.baseSelectOption, g({}, M, {
                  native: x,
                  value: "",
                  children: o.current.getLocaleText("filterValueAny")
                })),
                b.jsx(p.slots.baseSelectOption, g({}, M, {
                  native: x,
                  value: "true",
                  children: o.current.getLocaleText("filterValueTrue")
                })),
                b.jsx(p.slots.baseSelectOption, g({}, M, {
                  native: x,
                  value: "false",
                  children: o.current.getLocaleText("filterValueFalse")
                }))
              ]
            }))
          ]
        }),
        l
      ]
    });
  }
  const Vm = () => [
    {
      value: "is",
      getApplyFilterFn: (e) => {
        const t = Or(e.value);
        return t === void 0 ? null : (n) => !!n === t;
      },
      InputComponent: jm
    }
  ], Nm = (e, t, n, o) => e ? o.current.getLocaleText("booleanCellTrueLabel") : o.current.getLocaleText("booleanCellFalseLabel"), _m = (e) => {
    switch (e.toLowerCase().trim()) {
      case "true":
      case "yes":
      case "1":
        return true;
      case "false":
      case "no":
      case "0":
      case "null":
      case "undefined":
        return false;
      default:
        return;
    }
  }, Tc = g({}, an, {
    type: "boolean",
    display: "flex",
    align: "center",
    headerAlign: "center",
    renderCell: $m,
    renderEditCell: Am,
    sortComparator: fc,
    valueFormatter: Nm,
    filterOperators: Vm(),
    getApplyQuickFilterFn: void 0,
    aggregable: false,
    pastedValueParser: (e) => _m(e)
  }), Oc = (e) => e.sorting, Eo = he(Oc, (e) => e.sortedRows), ys = Be(Eo, Ut, at, (e, t, n) => e.reduce((o, r) => {
    const l = t[r];
    if (l) o.push({
      id: r,
      model: l
    });
    else {
      const s = n[r];
      s && xo(s) && o.push({
        id: r,
        model: {
          [vo]: r
        }
      });
    }
    return o;
  }, [])), on = he(Oc, (e) => e.sortModel), Bm = Be(on, (e) => e.reduce((n, o, r) => (n[o.field] = {
    sortDirection: o.sort,
    sortIndex: e.length > 1 ? r + 1 : void 0
  }, n), {}));
  Be(Eo, (e) => e.reduce((t, n, o) => (t[n] = o, t), /* @__PURE__ */ Object.create(null)));
  const tl = (e) => e.filter, ht = he(tl, (e) => e.filterModel), Wm = he(ht, (e) => e.quickFilterValues), Um = (e) => e.visibleRowsLookup, Fo = he(tl, (e) => e.filteredRowsLookup);
  he(tl, (e) => e.filteredChildrenCountLookup);
  he(tl, (e) => e.filteredDescendantCountLookup);
  const zn = Be(Um, ys, Xn, ht, Wm, (e, t, n, o, r) => n < 2 && !o.items.length && !(r == null ? void 0 : r.length) ? t : t.filter((l) => e[l.id] !== false)), go = Be(zn, (e) => e.map((t) => t.id)), Dc = Be(Fo, ys, (e, t) => t.filter((n) => e[n.id] !== false)), $c = Be(Dc, (e) => e.map((t) => t.id));
  Be(go, at, (e, t) => {
    const n = {};
    let o = 0;
    return e.reduce((r, l) => {
      const s = t[l];
      return n[s.depth] || (n[s.depth] = 0), s.depth > o && (n[s.depth] = 0), o = s.depth, n[s.depth] += 1, r[l] = n[s.depth], r;
    }, {});
  });
  const Hc = Be(zn, at, Xn, (e, t, n) => n < 2 ? e : e.filter((o) => {
    var _a2;
    return ((_a2 = t[o.id]) == null ? void 0 : _a2.depth) === 0;
  })), Ss = he(zn, (e) => e.length), Is = he(Hc, (e) => e.length), Km = he(Dc, (e) => e.length);
  he(Km, Is, (e, t) => e - t);
  const Lc = Be(ht, Pn, (e, t) => {
    var _a2;
    return (_a2 = e.items) == null ? void 0 : _a2.filter((n) => {
      var _a3, _b2;
      if (!n.field) return false;
      const o = t[n.field];
      if (!(o == null ? void 0 : o.filterOperators) || ((_a3 = o == null ? void 0 : o.filterOperators) == null ? void 0 : _a3.length) === 0) return false;
      const r = o.filterOperators.find((l) => l.value === n.operator);
      return r ? !r.InputComponent || n.value != null && ((_b2 = n.value) == null ? void 0 : _b2.toString()) !== "" : false;
    });
  }), qm = Be(Lc, (e) => e.reduce((n, o) => (n[o.field] ? n[o.field].push(o) : n[o.field] = [
    o
  ], n), {})), Rt = (e) => e.rowSelection, Ym = he(Rt, (e) => e.length), Xm = Be(Rt, Ut, (e, t) => new Map(e.map((n) => [
    n,
    t[n]
  ]))), Hn = Be(Rt, (e) => e.reduce((t, n) => (t[n] = n, t), {}));
  function Rc(e, t) {
    var _a2;
    const n = at(e), o = Eo(e), r = Fo(e), l = n[t];
    if (!l || l.type !== "group") return [];
    const s = [], a = o.findIndex((i) => i === t) + 1;
    for (let i = a; i < o.length && ((_a2 = n[o[i]]) == null ? void 0 : _a2.depth) > l.depth; i += 1) {
      const d = o[i];
      r[d] !== false && e.current.isRowSelectable(d) && s.push(d);
    }
    return s;
  }
  function Qm(e, t) {
    return he(at, Eo, Fo, Hn, (n, o, r, l) => {
      var _a2;
      const s = n[e];
      if (!s || s.type !== "group") return {
        isIndeterminate: false,
        isChecked: l[e] === e
      };
      if (l[e] === e) return {
        isIndeterminate: false,
        isChecked: true
      };
      let a = 0, i = 0;
      const d = o.findIndex((c) => c === e) + 1;
      for (let c = d; c < o.length && ((_a2 = n[o[c]]) == null ? void 0 : _a2.depth) > s.depth; c += 1) {
        const f = o[c];
        r[f] !== false && (a += 1, l[f] !== void 0 && (i += 1));
      }
      return {
        isIndeterminate: i > 0 && (i < a || l[e] === void 0),
        isChecked: t ? i > 0 : l[e] === e
      };
    });
  }
  function Ps(e) {
    return e.signature === Xt.DataGrid ? e.checkboxSelection && e.disableMultipleRowSelection !== true : !e.disableMultipleRowSelection;
  }
  const Jm = (e, t) => {
    const n = [];
    let o = t;
    for (; o != null && o !== Ct; ) {
      const r = e[o];
      if (!r) return n;
      n.push(o), o = r.parent;
    }
    return n;
  }, Zm = (e, t, n) => {
    const o = e[n];
    if (!o) return [];
    const r = o.parent;
    return r == null ? [] : e[r].children.filter((s) => s !== n && t[s] !== false);
  }, jo = (e, t, n, o, r, l, s = new Set(Rt(e.current.state))) => {
    var _a2;
    const a = Fo(e), i = /* @__PURE__ */ new Set([]);
    if (!(!o && !r || a[n] === false) && (o && ((_a2 = t[n]) == null ? void 0 : _a2.type) === "group" && Rc(e, n).forEach((f) => {
      l(f), i.add(f);
    }), r)) {
      const d = (f) => {
        if (!s.has(f) && !i.has(f)) return false;
        const p = t[f];
        return p ? p.type !== "group" ? true : p.children.every(d) : false;
      }, c = (f) => {
        var _a3;
        const p = Zm(t, a, f);
        if (p.length === 0 || p.every(d)) {
          const h = (_a3 = t[f]) == null ? void 0 : _a3.parent;
          h != null && h !== Ct && e.current.isRowSelectable(h) && (l(h), i.add(h), c(h));
        }
      };
      c(n);
    }
  }, Gi = (e, t, n, o, r, l) => {
    var _a2;
    const s = Hn(e);
    !r && !o || (r && Jm(t, n).forEach((i) => {
      s[i] === i && l(i);
    }), o && ((_a2 = t[n]) == null ? void 0 : _a2.type) === "group" && Rc(e, n).forEach((d) => {
      l(d);
    }));
  }, eb = [
    "field",
    "id",
    "formattedValue",
    "row",
    "rowNode",
    "colDef",
    "isEditable",
    "cellMode",
    "hasFocus",
    "tabIndex",
    "api"
  ], tb = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "checkboxInput"
      ]
    }, Oe, t);
  }, nb = je(function(t, n) {
    var _a2, _b2;
    const { field: o, id: r, rowNode: l, hasFocus: s, tabIndex: a } = t, i = de(t, eb), d = Pe(), c = le(), f = {
      classes: c.classes
    }, p = tb(f), m = u.useRef(null), h = u.useRef(null), C = zt(m, n), x = (T) => {
      const w = {
        value: T.target.checked,
        id: r
      };
      d.current.publishEvent("rowSelectionCheckboxChange", w, T);
    };
    u.useLayoutEffect(() => {
      if (a === 0) {
        const T = d.current.getCellElement(r, o);
        T && (T.tabIndex = -1);
      }
    }, [
      d,
      a,
      r,
      o
    ]), u.useEffect(() => {
      var _a3, _b3;
      s ? (_b3 = (_a3 = m.current) == null ? void 0 : _a3.querySelector("input")) == null ? void 0 : _b3.focus({
        preventScroll: true
      }) : h.current && h.current.stop({});
    }, [
      s
    ]);
    const M = u.useCallback((T) => {
      T.key === " " && T.stopPropagation();
    }, []), v = d.current.isRowSelectable(r), O = Qm(r, ((_a2 = c.rowSelectionPropagation) == null ? void 0 : _a2.parents) ?? false), { isIndeterminate: G, isChecked: P } = Q(d, O, hs);
    if (l.type === "footer" || l.type === "pinnedRow") return null;
    const H = c.indeterminateCheckboxAction === "select" ? P && !G : P, R = d.current.getLocaleText(H ? "checkboxSelectionUnselectRow" : "checkboxSelectionSelectRow");
    return b.jsx(c.slots.baseCheckbox, g({
      tabIndex: a,
      checked: H,
      onChange: x,
      className: p.root,
      inputProps: {
        "aria-label": R,
        name: "select_row"
      },
      onKeyDown: M,
      indeterminate: G,
      disabled: !v,
      touchRippleRef: h
    }, (_b2 = c.slotProps) == null ? void 0 : _b2.baseCheckbox, i, {
      ref: C
    }));
  }), ob = nb, nl = (e) => e.focus, Ft = he(nl, (e) => e.cell), rb = he(nl, (e) => e.columnHeader);
  he(nl, (e) => e.columnHeaderFilter);
  const jr = he(nl, (e) => e.columnGroupHeader), ol = (e) => e.tabIndex, Ms = he(ol, (e) => e.cell), Ac = he(ol, (e) => e.columnHeader);
  he(ol, (e) => e.columnHeaderFilter);
  const lb = he(ol, (e) => e.columnGroupHeader);
  function Ie(e, t, n) {
    const o = u.useRef(true);
    mt(() => {
      o.current = false, e.current.register(n, t);
    }, [
      e,
      n,
      t
    ]), o.current && e.current.register(n, t);
  }
  function ft(e, t) {
    const n = u.useRef(null);
    if (n.current) return n.current;
    const o = e.current.getLogger(t);
    return n.current = o, o;
  }
  const Gc = (e, t, n, o, r) => {
    const l = ft(e, "useNativeEventListener");
    qe(e, "rootMount", () => {
      const s = typeof t == "function" ? t() : t.current;
      if (!(!s || !n || !o)) return l.debug(`Binding native ${n} event`), s.addEventListener(n, o, r), () => {
        l.debug(`Clearing native ${n} event`), s.removeEventListener(n, o, r);
      };
    });
  }, fr = (e) => {
    const t = u.useRef(true);
    t.current && (t.current = false, e());
  }, sb = () => {
  }, ib = (e, t) => {
    const n = u.useRef(false);
    mt(() => n.current || !e ? sb : (n.current = true, t()), [
      n.current || e
    ]);
  }, ab = 100, cb = (e) => e ? 0 : 100, zc = (e, t, n) => t > 0 && e > 0 ? Math.ceil(e / t) : e === -1 ? n + 2 : 0, jc = (e) => ({
    page: 0,
    pageSize: e ? 0 : 100
  }), ub = (e, t = 0) => t === 0 ? e : Math.max(Math.min(e, t - 1), 0), Vc = (e, t) => {
    if (t === Xt.DataGrid && e > ab) throw new Error([
      "MUI X: `pageSize` cannot exceed 100 in the MIT version of the DataGrid.",
      "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
    ].join(`
`));
  }, db = -1, pr = (e) => e.pagination, Nc = he(pr, (e) => e.enabled && e.paginationMode === "client"), xt = he(pr, (e) => e.paginationModel), ao = he(pr, (e) => e.rowCount), Bo = he(pr, (e) => e.meta), fb = he(xt, (e) => e.page), _c = he(xt, (e) => e.pageSize), Bc = he(xt, ao, (e, t) => zc(t, e.pageSize, e.page)), ks = Be(Nc, xt, at, Xn, zn, Hc, (e, t, n, o, r, l) => {
    var _a2;
    if (!e) return null;
    const s = l.length, a = Math.min(t.pageSize * t.page, s - 1), i = t.pageSize === db ? s - 1 : Math.min(a + t.pageSize - 1, s - 1);
    if (a === -1 || i === -1) return null;
    if (o < 2) return {
      firstRowIndex: a,
      lastRowIndex: i
    };
    const d = l[a], c = i - a + 1, f = r.findIndex((h) => h.id === d.id);
    let p = f, m = 0;
    for (; p < r.length && m <= c; ) {
      const h = r[p], C = (_a2 = n[h.id]) == null ? void 0 : _a2.depth;
      C === void 0 ? p += 1 : ((m < c || C > 0) && (p += 1), C === 0 && (m += 1));
    }
    return {
      firstRowIndex: f,
      lastRowIndex: p - 1
    };
  }), pb = Be(zn, ks, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), Wc = Be(go, ks, (e, t) => t ? e.slice(t.firstRowIndex, t.lastRowIndex + 1) : []), gr = Be(Nc, ks, pb, zn, (e, t, n, o) => e ? {
    rows: n,
    range: t,
    rowToIndexMap: n.reduce((r, l, s) => (r.set(l.model, s), r), /* @__PURE__ */ new Map())
  } : {
    rows: o,
    range: o.length === 0 ? null : {
      firstRowIndex: 0,
      lastRowIndex: o.length - 1
    },
    rowToIndexMap: o.reduce((r, l, s) => (r.set(l.model, s), r), /* @__PURE__ */ new Map())
  }), gb = [
    "field",
    "colDef"
  ], hb = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "checkboxInput"
      ]
    }, Oe, t);
  }, mb = je(function(t, n) {
    var _a2;
    const o = de(t, gb), [, r] = u.useState(false), l = Pe(), s = le(), a = {
      classes: s.classes
    }, i = hb(a), d = Q(l, Ac), c = Q(l, Rt), f = Q(l, go), p = Q(l, Wc), m = u.useMemo(() => typeof s.isRowSelectable != "function" ? c : c.filter((T) => s.keepNonExistentRowsSelected ? true : l.current.getRow(T) ? s.isRowSelectable(l.current.getRowParams(T)) : false), [
      l,
      s.isRowSelectable,
      c,
      s.keepNonExistentRowsSelected
    ]), h = u.useMemo(() => (!s.pagination || !s.checkboxSelectionVisibleOnly || s.paginationMode === "server" ? f : p).reduce((w, y) => (w[y] = true, w), {}), [
      s.pagination,
      s.paginationMode,
      s.checkboxSelectionVisibleOnly,
      p,
      f
    ]), C = u.useMemo(() => m.filter((T) => h[T]).length, [
      m,
      h
    ]), x = C > 0 && C < Object.keys(h).length, M = C > 0, v = (T) => {
      const w = {
        value: T.target.checked
      };
      l.current.publishEvent("headerSelectionCheckboxChange", w);
    }, O = d !== null && d.field === t.field ? 0 : -1;
    u.useLayoutEffect(() => {
      const T = l.current.getColumnHeaderElement(t.field);
      O === 0 && T && (T.tabIndex = -1);
    }, [
      O,
      l,
      t.field
    ]);
    const G = u.useCallback((T) => {
      T.key === " " && l.current.publishEvent("headerSelectionCheckboxChange", {
        value: !M
      });
    }, [
      l,
      M
    ]), P = u.useCallback(() => {
      r((T) => !T);
    }, []);
    u.useEffect(() => l.current.subscribeEvent("rowSelectionChange", P), [
      l,
      P
    ]);
    const H = s.indeterminateCheckboxAction === "select" ? M && !x : M, R = l.current.getLocaleText(H ? "checkboxSelectionUnselectAllRows" : "checkboxSelectionSelectAllRows");
    return b.jsx(s.slots.baseCheckbox, g({
      indeterminate: x,
      checked: H,
      onChange: v,
      className: i.root,
      inputProps: {
        "aria-label": R,
        name: "select_all_rows"
      },
      tabIndex: O,
      onKeyDown: G,
      disabled: !Ps(s)
    }, (_a2 = s.slotProps) == null ? void 0 : _a2.baseCheckbox, o, {
      ref: n
    }));
  }), hr = (e, t) => vo in t ? t[vo] : e.props.getRowId ? e.props.getRowId(t) : t.id, _t = "__check__", To = g({}, Tc, {
    type: "custom",
    field: _t,
    width: 50,
    resizable: false,
    sortable: false,
    filterable: false,
    aggregable: false,
    disableColumnMenu: true,
    disableReorder: true,
    disableExport: true,
    getApplyQuickFilterFn: void 0,
    display: "flex",
    valueGetter: (e, t, n, o) => {
      const r = Hn(o), l = hr(o.current.state, t);
      return r[l] !== void 0;
    },
    renderHeader: (e) => b.jsx(mb, g({}, e)),
    renderCell: (e) => b.jsx(ob, g({}, e))
  }), bb = [
    "item",
    "applyValue",
    "type",
    "apiRef",
    "focusElementRef",
    "InputProps",
    "isFilterActive",
    "clearButton",
    "tabIndex",
    "disabled"
  ];
  function zi(e, t) {
    if (e == null) return "";
    const n = new Date(e);
    return Number.isNaN(n.getTime()) ? "" : t === "date" ? n.toISOString().substring(0, 10) : t === "datetime-local" ? (n.setMinutes(n.getMinutes() - n.getTimezoneOffset()), n.toISOString().substring(0, 19)) : n.toISOString().substring(0, 10);
  }
  function eo(e) {
    var _a2;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, InputProps: s, clearButton: a, tabIndex: i, disabled: d } = e, c = de(e, bb), f = sn(), [p, m] = u.useState(() => zi(t.value, o)), [h, C] = u.useState(false), x = Je(), M = le(), v = u.useCallback((O) => {
      f.clear();
      const G = O.target.value;
      m(G), C(true), f.start(M.filterDebounceMs, () => {
        const P = new Date(G);
        n(g({}, t, {
          value: Number.isNaN(P.getTime()) ? void 0 : P
        })), C(false);
      });
    }, [
      n,
      t,
      M.filterDebounceMs,
      f
    ]);
    return u.useEffect(() => {
      const O = zi(t.value, o);
      m(O);
    }, [
      t.value,
      o
    ]), b.jsx(M.slots.baseTextField, g({
      fullWidth: true,
      id: x,
      label: r.current.getLocaleText("filterPanelInputLabel"),
      placeholder: r.current.getLocaleText("filterPanelInputPlaceholder"),
      value: p,
      onChange: v,
      variant: "standard",
      type: o || "text",
      InputLabelProps: {
        shrink: true
      },
      inputRef: l,
      InputProps: g({}, h || a ? {
        endAdornment: h ? b.jsx(M.slots.loadIcon, {
          fontSize: "small",
          color: "action"
        }) : a
      } : {}, {
        disabled: d
      }, s, {
        inputProps: g({
          max: o === "datetime-local" ? "9999-12-31T23:59" : "9999-12-31",
          tabIndex: i
        }, s == null ? void 0 : s.inputProps)
      })
    }, c, (_a2 = M.slotProps) == null ? void 0 : _a2.baseTextField));
  }
  function to(e, t, n, o) {
    if (!e.value) return null;
    const r = new Date(e.value);
    n ? r.setSeconds(0, 0) : (r.setMinutes(r.getMinutes() + r.getTimezoneOffset()), r.setHours(0, 0, 0, 0));
    const l = r.getTime();
    return (s) => {
      if (!s) return false;
      if (o) return t(s.getTime(), l);
      const a = new Date(s);
      return n ? a.setSeconds(0, 0) : a.setHours(0, 0, 0, 0), t(a.getTime(), l);
    };
  }
  const Uc = (e) => [
    {
      value: "is",
      getApplyFilterFn: (t) => to(t, (n, o) => n === o, e),
      InputComponent: eo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "not",
      getApplyFilterFn: (t) => to(t, (n, o) => n !== o, e),
      InputComponent: eo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "after",
      getApplyFilterFn: (t) => to(t, (n, o) => n > o, e),
      InputComponent: eo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "onOrAfter",
      getApplyFilterFn: (t) => to(t, (n, o) => n >= o, e),
      InputComponent: eo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "before",
      getApplyFilterFn: (t) => to(t, (n, o) => n < o, e, !e),
      InputComponent: eo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "onOrBefore",
      getApplyFilterFn: (t) => to(t, (n, o) => n <= o, e),
      InputComponent: eo,
      InputComponentProps: {
        type: e ? "datetime-local" : "date"
      }
    },
    {
      value: "isEmpty",
      getApplyFilterFn: () => (t) => t == null,
      requiresFilterValue: false
    },
    {
      value: "isNotEmpty",
      getApplyFilterFn: () => (t) => t != null,
      requiresFilterValue: false
    }
  ], Cb = [
    "id",
    "value",
    "formattedValue",
    "api",
    "field",
    "row",
    "rowNode",
    "colDef",
    "cellMode",
    "isEditable",
    "tabIndex",
    "hasFocus",
    "inputProps",
    "isValidating",
    "isProcessingProps",
    "onValueChange"
  ], wb = ge(ts)({
    fontSize: "inherit"
  }), vb = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "editInputCell"
      ]
    }, Oe, t);
  };
  function xb(e) {
    const { id: t, value: n, field: o, colDef: r, hasFocus: l, inputProps: s, onValueChange: a } = e, i = de(e, Cb), d = r.type === "dateTime", c = Pe(), f = u.useRef(null), p = u.useMemo(() => {
      let G;
      n == null ? G = null : n instanceof Date ? G = n : G = new Date((n ?? "").toString());
      let P;
      return G == null || Number.isNaN(G.getTime()) ? P = "" : P = new Date(G.getTime() - G.getTimezoneOffset() * 60 * 1e3).toISOString().substr(0, d ? 16 : 10), {
        parsed: G,
        formatted: P
      };
    }, [
      n,
      d
    ]), [m, h] = u.useState(p), x = {
      classes: le().classes
    }, M = vb(x), v = u.useCallback((G) => {
      if (G === "") return null;
      const [P, H] = G.split("T"), [R, T, w] = P.split("-"), y = /* @__PURE__ */ new Date();
      if (y.setFullYear(Number(R), Number(T) - 1, Number(w)), y.setHours(0, 0, 0, 0), H) {
        const [k, D] = H.split(":");
        y.setHours(Number(k), Number(D), 0, 0);
      }
      return y;
    }, []), O = u.useCallback(async (G) => {
      const P = G.target.value, H = v(P);
      a && await a(G, H), h({
        parsed: H,
        formatted: P
      }), c.current.setEditCellValue({
        id: t,
        field: o,
        value: H
      }, G);
    }, [
      c,
      o,
      t,
      a,
      v
    ]);
    return u.useEffect(() => {
      h((G) => {
        var _a2, _b2;
        return p.parsed !== G.parsed && ((_a2 = p.parsed) == null ? void 0 : _a2.getTime()) !== ((_b2 = G.parsed) == null ? void 0 : _b2.getTime()) ? p : G;
      });
    }, [
      p
    ]), mt(() => {
      l && f.current.focus();
    }, [
      l
    ]), b.jsx(wb, g({
      inputRef: f,
      fullWidth: true,
      className: M.root,
      type: d ? "datetime-local" : "date",
      inputProps: g({
        max: d ? "9999-12-31T23:59" : "9999-12-31"
      }, s),
      value: m.formatted,
      onChange: O
    }, i));
  }
  const Kc = (e) => b.jsx(xb, g({}, e));
  function qc({ value: e, columnType: t, rowId: n, field: o }) {
    if (!(e instanceof Date)) throw new Error([
      `MUI X: \`${t}\` column type only accepts \`Date\` objects as values.`,
      "Use `valueGetter` to transform the value into a `Date` object.",
      `Row ID: ${n}, field: "${o}".`
    ].join(`
`));
  }
  const yb = (e, t, n, o) => {
    if (!e) return "";
    const r = hr(o.current.state, t);
    return qc({
      value: e,
      columnType: "date",
      rowId: r,
      field: n.field
    }), e.toLocaleDateString();
  }, Sb = (e, t, n, o) => {
    if (!e) return "";
    const r = hr(o.current.state, t);
    return qc({
      value: e,
      columnType: "dateTime",
      rowId: r,
      field: n.field
    }), e.toLocaleString();
  }, Ib = g({}, an, {
    type: "date",
    sortComparator: pc,
    valueFormatter: yb,
    filterOperators: Uc(),
    renderEditCell: Kc,
    pastedValueParser: (e) => new Date(e)
  }), Pb = g({}, an, {
    type: "dateTime",
    sortComparator: pc,
    valueFormatter: Sb,
    filterOperators: Uc(true),
    renderEditCell: Kc,
    pastedValueParser: (e) => new Date(e)
  }), On = (e) => e == null ? null : Number(e), Mb = (e) => e == null || Number.isNaN(e) || e === "" ? null : (t) => On(t) === On(e), kb = () => [
    {
      value: "=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => On(t) === e.value,
      InputComponent: Wt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "!=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => On(t) !== e.value,
      InputComponent: Wt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: ">",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : On(t) > e.value,
      InputComponent: Wt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: ">=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : On(t) >= e.value,
      InputComponent: Wt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "<",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : On(t) < e.value,
      InputComponent: Wt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "<=",
      getApplyFilterFn: (e) => e.value == null || Number.isNaN(e.value) ? null : (t) => t == null ? false : On(t) <= e.value,
      InputComponent: Wt,
      InputComponentProps: {
        type: "number"
      }
    },
    {
      value: "isEmpty",
      getApplyFilterFn: () => (e) => e == null,
      requiresFilterValue: false
    },
    {
      value: "isNotEmpty",
      getApplyFilterFn: () => (e) => e != null,
      requiresFilterValue: false
    },
    {
      value: "isAnyOf",
      getApplyFilterFn: (e) => !Array.isArray(e.value) || e.value.length === 0 ? null : (t) => t != null && e.value.includes(Number(t)),
      InputComponent: hc,
      InputComponentProps: {
        type: "number"
      }
    }
  ], Eb = g({}, an, {
    type: "number",
    align: "right",
    headerAlign: "right",
    sortComparator: fc,
    valueParser: (e) => e === "" ? null : Number(e),
    valueFormatter: (e) => em(e) ? e.toLocaleString() : e || "",
    filterOperators: kb(),
    getApplyQuickFilterFn: Mb
  });
  function yo(e) {
    return (e == null ? void 0 : e.type) === "singleSelect";
  }
  function Un(e, t) {
    if (e) return typeof e.valueOptions == "function" ? e.valueOptions(g({
      field: e.field
    }, t)) : e.valueOptions;
  }
  function Vr(e, t, n) {
    if (t === void 0) return;
    const o = t.find((r) => {
      const l = n(r);
      return String(l) === String(e);
    });
    return n(o);
  }
  const Fb = [
    "id",
    "value",
    "formattedValue",
    "api",
    "field",
    "row",
    "rowNode",
    "colDef",
    "cellMode",
    "isEditable",
    "tabIndex",
    "className",
    "hasFocus",
    "isValidating",
    "isProcessingProps",
    "error",
    "onValueChange",
    "initialOpen"
  ], Tb = [
    "MenuProps"
  ];
  function Ob(e) {
    return !!e.key;
  }
  function Db(e) {
    var _a2, _b2;
    const t = le(), { id: n, value: o, field: r, row: l, colDef: s, hasFocus: a, error: i, onValueChange: d, initialOpen: c = t.editMode === mn.Cell } = e, f = de(e, Fb), p = Pe(), m = u.useRef(null), h = u.useRef(null), [C, x] = u.useState(c), v = (((_a2 = t.slotProps) == null ? void 0 : _a2.baseSelect) || {}).native ?? false, O = ((_b2 = t.slotProps) == null ? void 0 : _b2.baseSelect) || {}, { MenuProps: G } = O, P = de(O, Tb);
    if (mt(() => {
      var _a3;
      a && ((_a3 = h.current) == null ? void 0 : _a3.focus());
    }, [
      a
    ]), !yo(s)) return null;
    const H = Un(s, {
      id: n,
      row: l
    });
    if (!H) return null;
    const R = s.getOptionValue, T = s.getOptionLabel, w = async (D) => {
      if (!yo(s) || !H) return;
      x(false);
      const $ = D.target, V = Vr($.value, H, R);
      d && await d(D, V), await p.current.setEditCellValue({
        id: n,
        field: r,
        value: V
      }, D);
    }, y = (D, $) => {
      if (t.editMode === mn.Row) {
        x(false);
        return;
      }
      if ($ === "backdropClick" || D.key === "Escape") {
        const V = p.current.getCellParams(n, r);
        p.current.publishEvent("cellEditStop", g({}, V, {
          reason: D.key === "Escape" ? nn.escapeKeyDown : nn.cellFocusOut
        }));
      }
    }, k = (D) => {
      Ob(D) && D.key === "Enter" || x(true);
    };
    return !H || !s ? null : b.jsx(t.slots.baseSelect, g({
      ref: m,
      inputRef: h,
      value: o,
      onChange: w,
      open: C,
      onOpen: k,
      MenuProps: g({
        onClose: y
      }, G),
      error: i,
      native: v,
      fullWidth: true
    }, f, P, {
      children: H.map((D) => {
        var _a3;
        const $ = R(D);
        return u.createElement(t.slots.baseSelectOption, g({}, ((_a3 = t.slotProps) == null ? void 0 : _a3.baseSelectOption) || {}, {
          native: v,
          key: $,
          value: $
        }), T(D));
      })
    }));
  }
  const $b = (e) => b.jsx(Db, g({}, e)), Hb = [
    "item",
    "applyValue",
    "type",
    "apiRef",
    "focusElementRef",
    "placeholder",
    "tabIndex",
    "label",
    "variant",
    "isFilterActive",
    "clearButton",
    "InputLabelProps"
  ], Lb = ({ column: e, OptionComponent: t, getOptionLabel: n, getOptionValue: o, isSelectNative: r, baseSelectOptionProps: l }) => [
    "",
    ...Un(e) || []
  ].map((a) => {
    const i = o(a);
    let d = n(a);
    return d === "" && (d = "\u2003"), u.createElement(t, g({}, l, {
      native: r,
      key: i,
      value: i
    }), d);
  }), Rb = ge("div")({
    display: "flex",
    alignItems: "flex-end",
    width: "100%",
    "& button": {
      margin: "auto 0px 5px 5px"
    }
  });
  function ji(e) {
    var _a2, _b2, _c2, _d2, _e;
    const { item: t, applyValue: n, type: o, apiRef: r, focusElementRef: l, placeholder: s, tabIndex: a, label: i, variant: d = "standard", clearButton: c } = e, f = de(e, Hb), p = t.value ?? "", m = Je(), h = Je(), C = le(), x = ((_b2 = (_a2 = C.slotProps) == null ? void 0 : _a2.baseSelect) == null ? void 0 : _b2.native) ?? false;
    let M = null;
    if (t.field) {
      const R = r.current.getColumn(t.field);
      yo(R) && (M = R);
    }
    const v = M == null ? void 0 : M.getOptionValue, O = M == null ? void 0 : M.getOptionLabel, G = u.useMemo(() => Un(M), [
      M
    ]), P = u.useCallback((R) => {
      let T = R.target.value;
      T = Vr(T, G, v), n(g({}, t, {
        value: T
      }));
    }, [
      G,
      v,
      n,
      t
    ]);
    if (!yo(M)) return null;
    const H = i ?? r.current.getLocaleText("filterPanelInputLabel");
    return b.jsxs(Rb, {
      children: [
        b.jsxs(C.slots.baseFormControl, {
          fullWidth: true,
          children: [
            b.jsx(C.slots.baseInputLabel, g({}, (_c2 = C.slotProps) == null ? void 0 : _c2.baseInputLabel, {
              id: h,
              htmlFor: m,
              shrink: true,
              variant: d,
              children: H
            })),
            b.jsx(C.slots.baseSelect, g({
              id: m,
              label: H,
              labelId: h,
              value: p,
              onChange: P,
              variant: d,
              type: o || "text",
              inputProps: {
                tabIndex: a,
                ref: l,
                placeholder: s ?? r.current.getLocaleText("filterPanelInputPlaceholder")
              },
              native: x,
              notched: d === "outlined" ? true : void 0
            }, f, (_d2 = C.slotProps) == null ? void 0 : _d2.baseSelect, {
              children: Lb({
                column: M,
                OptionComponent: C.slots.baseSelectOption,
                getOptionLabel: O,
                getOptionValue: v,
                isSelectNative: x,
                baseSelectOptionProps: (_e = C.slotProps) == null ? void 0 : _e.baseSelectOption
              })
            }))
          ]
        }),
        c
      ]
    });
  }
  const Ab = [
    "item",
    "applyValue",
    "type",
    "apiRef",
    "focusElementRef",
    "color",
    "error",
    "helperText",
    "size",
    "variant"
  ], Gb = [
    "key"
  ], zb = La();
  function jb(e) {
    const { item: t, applyValue: n, apiRef: o, focusElementRef: r, color: l, error: s, helperText: a, size: i, variant: d = "standard" } = e, c = de(e, Ab), f = {
      color: l,
      error: s,
      helperText: a,
      size: i,
      variant: d
    }, p = Je(), m = le();
    let h = null;
    if (t.field) {
      const P = o.current.getColumn(t.field);
      yo(P) && (h = P);
    }
    const C = h == null ? void 0 : h.getOptionValue, x = h == null ? void 0 : h.getOptionLabel, M = u.useCallback((P, H) => C(P) === C(H), [
      C
    ]), v = u.useMemo(() => Un(h) || [], [
      h
    ]), O = u.useMemo(() => Array.isArray(t.value) ? t.value.reduce((P, H) => {
      const R = v.find((T) => C(T) === H);
      return R != null && P.push(R), P;
    }, []) : [], [
      C,
      t.value,
      v
    ]), G = u.useCallback((P, H) => {
      n(g({}, t, {
        value: H.map(C)
      }));
    }, [
      n,
      t,
      C
    ]);
    return b.jsx(Wa, g({
      multiple: true,
      options: v,
      isOptionEqualToValue: M,
      filterOptions: zb,
      id: p,
      value: O,
      onChange: G,
      getOptionLabel: x,
      renderTags: (P, H) => P.map((R, T) => {
        const w = H({
          index: T
        }), { key: y } = w, k = de(w, Gb);
        return b.jsx(m.slots.baseChip, g({
          variant: "outlined",
          size: "small",
          label: x(R)
        }, k), y);
      }),
      renderInput: (P) => {
        var _a2;
        return b.jsx(m.slots.baseTextField, g({}, P, {
          label: o.current.getLocaleText("filterPanelInputLabel"),
          placeholder: o.current.getLocaleText("filterPanelInputPlaceholder"),
          InputLabelProps: g({}, P.InputLabelProps, {
            shrink: true
          }),
          inputRef: r,
          type: "singleSelect"
        }, f, (_a2 = m.slotProps) == null ? void 0 : _a2.baseTextField));
      }
    }, c));
  }
  const no = (e) => e == null || !Cs(e) ? e : e.value, Vb = () => [
    {
      value: "is",
      getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => no(t) === no(e.value),
      InputComponent: ji
    },
    {
      value: "not",
      getApplyFilterFn: (e) => e.value == null || e.value === "" ? null : (t) => no(t) !== no(e.value),
      InputComponent: ji
    },
    {
      value: "isAnyOf",
      getApplyFilterFn: (e) => {
        if (!Array.isArray(e.value) || e.value.length === 0) return null;
        const t = e.value.map(no);
        return (n) => t.includes(no(n));
      },
      InputComponent: jb
    }
  ], Nb = (e) => typeof e[0] == "object", _b = (e) => Cs(e) ? e.value : e, Bb = (e) => Cs(e) ? e.label : String(e), Wb = g({}, an, {
    type: "singleSelect",
    getOptionLabel: Bb,
    getOptionValue: _b,
    valueFormatter(e, t, n, o) {
      const r = hr(o.current.state, t);
      if (!yo(n)) return "";
      const l = Un(n, {
        id: r,
        row: t
      });
      if (e == null) return "";
      if (!l) return e;
      if (!Nb(l)) return n.getOptionLabel(e);
      const s = l.find((a) => n.getOptionValue(a) === e);
      return s ? n.getOptionLabel(s) : "";
    },
    renderEditCell: $b,
    filterOperators: Vb(),
    pastedValueParser: (e, t, n) => {
      const o = n, r = Un(o) || [], l = o.getOptionValue;
      if (r.find((a) => l(a) === e)) return e;
    }
  }), Ub = "string", Kb = () => ({
    string: an,
    number: Eb,
    date: Ib,
    dateTime: Pb,
    boolean: Tc,
    singleSelect: Wb,
    [Jr]: Pm,
    custom: an
  }), Es = (e) => e.headerFiltering, qb = he(Es, (e) => (e == null ? void 0 : e.enabled) ?? false), Yb = he(Es, (e) => e.editing), Xb = he(Es, (e) => e.menuOpen), rl = (e) => e.columnGrouping, Yc = Be(rl, (e) => (e == null ? void 0 : e.unwrappedGroupingModel) ?? {}), Xc = Be(rl, (e) => (e == null ? void 0 : e.lookup) ?? {}), Qb = Be(rl, (e) => (e == null ? void 0 : e.headerStructure) ?? []), mr = he(rl, (e) => (e == null ? void 0 : e.maxDepth) ?? 0), Qc = [
    "maxWidth",
    "minWidth",
    "width",
    "flex"
  ], xl = Kb();
  function Jb({ initialFreeSpace: e, totalFlexUnits: t, flexColumns: n }) {
    const o = new Set(n.map((s) => s.field)), r = {
      all: {},
      frozenFields: [],
      freeze: (s) => {
        const a = r.all[s];
        a && a.frozen !== true && (r.all[s].frozen = true, r.frozenFields.push(s));
      }
    };
    function l() {
      if (r.frozenFields.length === o.size) return;
      const s = {
        min: {},
        max: {}
      };
      let a = e, i = t, d = 0;
      r.frozenFields.forEach((c) => {
        a -= r.all[c].computedWidth, i -= r.all[c].flex;
      });
      for (let c = 0; c < n.length; c += 1) {
        const f = n[c];
        if (r.all[f.field] && r.all[f.field].frozen === true) continue;
        let m = a / i * f.flex;
        m < f.minWidth ? (d += f.minWidth - m, m = f.minWidth, s.min[f.field] = true) : m > f.maxWidth && (d += f.maxWidth - m, m = f.maxWidth, s.max[f.field] = true), r.all[f.field] = {
          frozen: false,
          computedWidth: m,
          flex: f.flex
        };
      }
      d < 0 ? Object.keys(s.max).forEach((c) => {
        r.freeze(c);
      }) : d > 0 ? Object.keys(s.min).forEach((c) => {
        r.freeze(c);
      }) : n.forEach(({ field: c }) => {
        r.freeze(c);
      }), l();
    }
    return l(), r.all;
  }
  const _l = (e, t) => {
    const n = {};
    let o = 0, r = 0;
    const l = [];
    e.orderedFields.forEach((i) => {
      let d = e.lookup[i], c = 0, f = false;
      e.columnVisibilityModel[i] !== false && (d.flex && d.flex > 0 ? (o += d.flex, f = true) : c = Gt(d.width || an.width, d.minWidth || an.minWidth, d.maxWidth || an.maxWidth), r += c), d.computedWidth !== c && (d = g({}, d, {
        computedWidth: c
      })), f && l.push(d), n[i] = d;
    });
    const s = t === void 0 ? 0 : t.viewportOuterSize.width - (t.hasScrollY ? t.scrollbarSize : 0), a = Math.max(s - r, 0);
    if (o > 0 && s > 0) {
      const i = Jb({
        initialFreeSpace: a,
        totalFlexUnits: o,
        flexColumns: l
      });
      Object.keys(i).forEach((d) => {
        n[d].computedWidth = i[d].computedWidth;
      });
    }
    return g({}, e, {
      lookup: n
    });
  }, Zb = (e, t) => {
    if (!t) return e;
    const { orderedFields: n = [], dimensions: o = {} } = t, r = Object.keys(o);
    if (r.length === 0 && n.length === 0) return e;
    const l = {}, s = [];
    for (let c = 0; c < n.length; c += 1) {
      const f = n[c];
      e.lookup[f] && (l[f] = true, s.push(f));
    }
    const a = s.length === 0 ? e.orderedFields : [
      ...s,
      ...e.orderedFields.filter((c) => !l[c])
    ], i = g({}, e.lookup);
    for (let c = 0; c < r.length; c += 1) {
      const f = r[c], p = g({}, i[f], {
        hasBeenResized: true
      });
      Object.entries(o[f]).forEach(([m, h]) => {
        p[m] = h === -1 ? 1 / 0 : h;
      }), i[f] = p;
    }
    return g({}, e, {
      orderedFields: a,
      lookup: i
    });
  };
  function Vi(e) {
    let t = xl[Ub];
    return e && xl[e] && (t = xl[e]), t;
  }
  const lo = ({ apiRef: e, columnsToUpsert: t, initialState: n, columnVisibilityModel: o = Kt(e), keepOnlyColumnsToUpsert: r = false }) => {
    var _a2, _b2;
    const l = !e.current.state.columns;
    let s;
    if (l) s = {
      orderedFields: [],
      lookup: {},
      columnVisibilityModel: o
    };
    else {
      const c = gn(e.current.state);
      s = {
        orderedFields: r ? [] : [
          ...c.orderedFields
        ],
        lookup: g({}, c.lookup),
        columnVisibilityModel: o
      };
    }
    let a = {};
    r && !l && (a = Object.keys(s.lookup).reduce((c, f) => g({}, c, {
      [f]: false
    }), {})), t.forEach((c) => {
      const { field: f } = c;
      a[f] = true;
      let p = s.lookup[f];
      p == null ? (p = g({}, Vi(c.type), {
        field: f,
        hasBeenResized: false
      }), s.orderedFields.push(f)) : r && s.orderedFields.push(f), p && p.type !== c.type && (p = g({}, Vi(c.type), {
        field: f
      }));
      let m = p.hasBeenResized;
      Qc.forEach((h) => {
        c[h] !== void 0 && (m = true, c[h] === -1 && (c[h] = 1 / 0));
      }), s.lookup[f] = Ku(p, g({}, c, {
        hasBeenResized: m
      }));
    }), r && !l && Object.keys(s.lookup).forEach((c) => {
      a[c] || delete s.lookup[c];
    });
    const i = e.current.unstable_applyPipeProcessors("hydrateColumns", s), d = Zb(i, n);
    return _l(d, ((_b2 = (_a2 = e.current).getRootDimensions) == null ? void 0 : _b2.call(_a2)) ?? void 0);
  };
  function eC({ firstColumnToRender: e, apiRef: t, firstRowToRender: n, lastRowToRender: o, visibleRows: r }) {
    let l = e, s = false;
    for (; !s; ) {
      s = true;
      for (let a = n; a < o; a += 1) if (r[a]) {
        const d = r[a].id, c = t.current.unstable_getCellColSpanInfo(d, l);
        if (c && c.spannedByColSpan && c.leftVisibleCellIndex < l) {
          l = c.leftVisibleCellIndex, s = false;
          break;
        }
      }
    }
    return l;
  }
  function ll(e, t) {
    if (t.unstable_listView) return 0;
    const n = Io(e), o = mr(e), r = qb(e), l = Math.floor(t.columnHeaderHeight * n), s = Math.floor((t.columnGroupHeaderHeight ?? t.columnHeaderHeight) * n), a = r ? Math.floor((t.headerFilterHeight ?? t.columnHeaderHeight) * n) : 0;
    return l + s * o + a;
  }
  const Oo = (e) => e.rowsMeta, Nr = 1, Jc = 1.5, tC = (e) => {
    const { scrollDirection: t, classes: n } = e, o = {
      root: [
        "scrollArea",
        `scrollArea--${t}`
      ]
    };
    return we(o, Oe, n);
  }, nC = Ye("div", {
    name: "MuiDataGrid",
    slot: "ScrollArea",
    overridesResolver: (e, t) => [
      {
        [`&.${I["scrollArea--left"]}`]: t["scrollArea--left"]
      },
      {
        [`&.${I["scrollArea--right"]}`]: t["scrollArea--right"]
      },
      {
        [`&.${I["scrollArea--up"]}`]: t["scrollArea--up"]
      },
      {
        [`&.${I["scrollArea--down"]}`]: t["scrollArea--down"]
      },
      t.scrollArea
    ]
  })(() => ({
    position: "absolute",
    zIndex: 101,
    [`&.${I["scrollArea--left"]}`]: {
      top: 0,
      left: 0,
      width: 20,
      bottom: 0
    },
    [`&.${I["scrollArea--right"]}`]: {
      top: 0,
      right: 0,
      width: 20,
      bottom: 0
    },
    [`&.${I["scrollArea--up"]}`]: {
      top: 0,
      left: 0,
      right: 0,
      height: 20
    },
    [`&.${I["scrollArea--down"]}`]: {
      bottom: 0,
      left: 0,
      right: 0,
      height: 20
    }
  })), oC = ur(dt, (e, t) => t === "left" ? e.leftPinnedWidth : t === "right" ? e.rightPinnedWidth + (e.hasScrollX ? e.scrollbarSize : 0) : 0);
  function rC(e) {
    const t = Pe(), [n, o] = u.useState("none");
    return oe(t, "columnHeaderDragStart", () => o("horizontal")), oe(t, "columnHeaderDragEnd", () => o("none")), oe(t, "rowDragStart", () => o("vertical")), oe(t, "rowDragEnd", () => o("none")), n === "none" ? null : n === "horizontal" ? b.jsx(lC, g({}, e)) : b.jsx(sC, g({}, e));
  }
  function lC(e) {
    const { scrollDirection: t, scrollPosition: n } = e, o = u.useRef(null), r = Pe(), l = sn(), s = Q(r, Io), a = Q(r, Qr), i = Zo(r, oC, t), d = () => {
      const C = dt(r.current.state);
      if (t === "left") return n.current.left > 0;
      if (t === "right") {
        const x = a - C.viewportInnerSize.width;
        return n.current.left < x;
      }
      return false;
    }, c = le(), f = ll(r, c), p = Math.floor(c.columnHeaderHeight * s), m = g({
      height: p,
      top: f - p
    }, t === "left" ? {
      left: i
    } : {}, t === "right" ? {
      right: i
    } : {}), h = We((C) => {
      let x;
      if (C.preventDefault(), t === "left") x = C.clientX - o.current.getBoundingClientRect().right;
      else if (t === "right") x = Math.max(1, C.clientX - o.current.getBoundingClientRect().left);
      else throw new Error("MUI X: Wrong drag direction");
      x = (x - Nr) * Jc + Nr, l.start(0, () => {
        r.current.scroll({
          left: n.current.left + x,
          top: n.current.top
        });
      });
    });
    return b.jsx(Zc, g({}, e, {
      ref: o,
      getCanScrollMore: d,
      style: m,
      handleDragOver: h
    }));
  }
  function sC(e) {
    const { scrollDirection: t, scrollPosition: n } = e, o = u.useRef(null), r = Pe(), l = sn(), s = Q(r, Oo), a = () => {
      const p = dt(r.current.state);
      if (t === "up") return n.current.top > 0;
      if (t === "down") {
        const h = (s.currentPageTotalHeight || 0) - p.viewportInnerSize.height - p.scrollbarSize;
        return n.current.top < h;
      }
      return false;
    }, i = le(), d = ll(r, i), c = {
      top: t === "up" ? d : void 0,
      bottom: t === "down" ? 0 : void 0
    }, f = We((p) => {
      let m;
      if (p.preventDefault(), t === "up") m = p.clientY - o.current.getBoundingClientRect().bottom;
      else if (t === "down") m = Math.max(1, p.clientY - o.current.getBoundingClientRect().top);
      else throw new Error("MUI X: Wrong drag direction");
      m = (m - Nr) * Jc + Nr, l.start(0, () => {
        r.current.scroll({
          left: n.current.left,
          top: n.current.top + m
        });
      });
    });
    return b.jsx(Zc, g({}, e, {
      ref: o,
      getCanScrollMore: a,
      style: c,
      handleDragOver: f
    }));
  }
  const Zc = je(function(t, n) {
    const { scrollDirection: o, getCanScrollMore: r, style: l, handleDragOver: s } = t, a = Pe(), [i, d] = u.useState(r), c = le(), f = g({}, c, {
      scrollDirection: o
    }), p = tC(f);
    return oe(a, "scrollPositionChange", () => {
      d(r);
    }), i ? b.jsx(nC, {
      ref: n,
      className: p.root,
      ownerState: f,
      onDragOver: s,
      style: l
    }) : null;
  }), Mr = In(rC);
  var Fs = {}, eu = {
    exports: {}
  }, tu = {
    exports: {}
  };
  (function(e) {
    function t(n) {
      "@babel/helpers - typeof";
      return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      }, e.exports.__esModule = true, e.exports.default = e.exports, t(n);
    }
    e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
  })(tu);
  var iC = tu.exports;
  (function(e) {
    var t = iC.default;
    function n(o, r) {
      if (typeof WeakMap == "function") var l = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap();
      return (e.exports = n = function(i, d) {
        if (!d && i && i.__esModule) return i;
        var c, f, p = {
          __proto__: null,
          default: i
        };
        if (i === null || t(i) != "object" && typeof i != "function") return p;
        if (c = d ? s : l) {
          if (c.has(i)) return c.get(i);
          c.set(i, p);
        }
        for (var m in i) m !== "default" && {}.hasOwnProperty.call(i, m) && ((f = (c = Object.defineProperty) && Object.getOwnPropertyDescriptor(i, m)) && (f.get || f.set) ? c(p, m, f) : p[m] = i[m]);
        return p;
      }, e.exports.__esModule = true, e.exports.default = e.exports)(o, r);
    }
    e.exports = n, e.exports.__esModule = true, e.exports.default = e.exports;
  })(eu);
  var aC = eu.exports, cC = aC.default;
  Object.defineProperty(Fs, "__esModule", {
    value: true
  });
  var nu = Fs.default = void 0, uC = cC(u);
  nu = Fs.default = parseInt(uC.version, 10);
  const ou = u.createContext(void 0);
  function tn() {
    const e = u.useContext(ou);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid private context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }
  const Ln = (e, t) => gr(e), Ts = (e, t) => Q(e, gr), dC = typeof navigator < "u" ? navigator.userAgent.toLowerCase() : "empty", fC = dC.includes("firefox"), sl = (e) => e.virtualization;
  he(sl, (e) => e.enabled);
  const ru = he(sl, (e) => e.enabledForColumns), pC = he(sl, (e) => e.enabledForRows), br = he(sl, (e) => e.renderContext), gC = Be((e) => e.virtualization.renderContext.firstColumnIndex, (e) => e.virtualization.renderContext.lastColumnIndex, (e, t) => ({
    firstColumnIndex: e,
    lastColumnIndex: t
  })), Bl = {
    firstRowIndex: 0,
    lastRowIndex: 0,
    firstColumnIndex: 0,
    lastColumnIndex: 0
  }, hC = (e, t) => {
    const { disableVirtualization: n, autoHeight: o } = t;
    return g({}, e, {
      virtualization: {
        enabled: !n,
        enabledForColumns: !n,
        enabledForRows: !n && !o,
        renderContext: Bl
      }
    });
  };
  function mC(e, t) {
    const n = (l) => {
      e.current.setState((s) => g({}, s, {
        virtualization: g({}, s.virtualization, {
          enabled: l,
          enabledForColumns: l,
          enabledForRows: l && !t.autoHeight
        })
      }));
    };
    Ie(e, {
      unstable_setVirtualization: n,
      unstable_setColumnVirtualization: (l) => {
        e.current.setState((s) => g({}, s, {
          virtualization: g({}, s.virtualization, {
            enabledForColumns: l
          })
        }));
      }
    }, "public"), u.useEffect(() => {
      n(!t.disableVirtualization);
    }, [
      t.disableVirtualization,
      t.autoHeight
    ]);
  }
  const Os = (e) => e.rowSpanning, lu = he(Os, (e) => e.hiddenCells), bC = he(Os, (e) => e.spannedCells), CC = he(Os, (e) => e.hiddenCellOriginMap), So = (e) => e.listViewColumn, wC = ec(Ft, br, gr, ot, Ut, (e, t, n, o, r) => {
    if (!e) return false;
    const l = r[e.id];
    if (!l) return false;
    const s = n.rowToIndexMap.get(l), a = o.slice(t.firstColumnIndex, t.lastColumnIndex).findIndex((d) => d.field === e.field);
    return !(s !== void 0 && a !== -1 && s >= t.firstRowIndex && s <= t.lastRowIndex);
  }), su = Be(wC, ot, gr, Ut, Ft, (e, t, n, o, r) => {
    if (!e) return null;
    const l = o[r.id];
    if (!l) return null;
    const s = n.rowToIndexMap.get(l);
    if (s === void 0) return null;
    const a = t.findIndex((i) => i.field === r.field);
    return a === -1 ? null : g({}, r, {
      rowIndex: s,
      columnIndex: a
    });
  });
  function co(e, t) {
    return Math.round(e * 10 ** t) / 10 ** t;
  }
  const _r = typeof window < "u" && /jsdom|HappyDOM/.test(window.navigator.userAgent), yl = 50;
  var lt = (function(e) {
    return e[e.NONE = 0] = "NONE", e[e.UP = 1] = "UP", e[e.DOWN = 2] = "DOWN", e[e.LEFT = 3] = "LEFT", e[e.RIGHT = 4] = "RIGHT", e;
  })(lt || {});
  const Ni = {
    top: 0,
    left: 0
  }, vC = Object.freeze(/* @__PURE__ */ new Map()), xC = (e, t, n, o, r) => ({
    direction: lt.NONE,
    buffer: au(e, lt.NONE, t, n, o, r)
  }), yC = () => {
    var _a2;
    const e = tn(), t = le(), { unstable_listView: n } = t, o = Q(e, () => n ? [
      So(e.current.state)
    ] : ot(e)), r = Q(e, pC) && !_r, l = Q(e, ru) && !_r, s = Q(e, Po), a = ko(e), i = n ? zr : a, d = s.bottom.length > 0, [c, f] = u.useState(vC), p = $t(), m = Q(e, Hn), h = Ts(e), C = e.current.mainElementRef, x = e.current.virtualScrollerRef, M = e.current.virtualScrollbarVerticalRef, v = e.current.virtualScrollbarHorizontalRef, O = Q(e, am), G = u.useRef(false), P = Q(e, ms), H = Q(e, xh), R = Q(e, Qr), T = Q(e, SC), w = Q(e, cc), y = Q(e, ac), k = u.useRef(null), D = u.useCallback((Y) => {
      if (C.current = Y, !Y) return;
      const re = Y.getBoundingClientRect();
      let xe = {
        width: co(re.width, 1),
        height: co(re.height, 1)
      };
      if ((!k.current || xe.width !== k.current.width && xe.height !== k.current.height) && (k.current = xe, e.current.publishEvent("resize", xe)), typeof ResizeObserver > "u") return;
      const J = new ResizeObserver((ye) => {
        const Z = ye[0];
        if (!Z) return;
        const Ce = {
          width: co(Z.contentRect.width, 1),
          height: co(Z.contentRect.height, 1)
        };
        Ce.width === xe.width && Ce.height === xe.height || (e.current.publishEvent("resize", Ce), xe = Ce);
      });
      if (J.observe(Y), nu >= 19) return () => {
        C.current = null, J.disconnect();
      };
    }, [
      e,
      C
    ]), $ = u.useRef(((_a2 = t.initialState) == null ? void 0 : _a2.scroll) ?? Ni), V = u.useRef(false), E = u.useRef(Ni), S = u.useRef(Bl), F = Q(e, br), A = Q(e, su), z = sn(), j = u.useRef(void 0), L = bn(() => xC(p, t.rowBufferPx, t.columnBufferPx, P * 15, yl * 6)).current, N = u.useCallback((Y) => {
      if (Ui(Y, e.current.state.virtualization.renderContext)) return;
      const re = Y.firstRowIndex !== S.current.firstRowIndex || Y.lastRowIndex !== S.current.lastRowIndex;
      e.current.setState((J) => g({}, J, {
        virtualization: g({}, J.virtualization, {
          renderContext: Y
        })
      })), dt(e.current.state).isReady && re && (S.current = Y, e.current.publishEvent("renderedRowsIntervalChange", Y)), E.current = $.current;
    }, [
      e
    ]), W = We(() => {
      const Y = x.current;
      if (!Y) return;
      const re = dt(e.current.state), xe = Math.ceil(re.minimumSize.height - re.viewportOuterSize.height), J = Math.ceil(re.minimumSize.width - re.viewportInnerSize.width), ye = {
        top: Gt(Y.scrollTop, 0, xe),
        left: p ? Gt(Y.scrollLeft, -J, 0) : Gt(Y.scrollLeft, 0, J)
      }, Z = ye.left - $.current.left, Ce = ye.top - $.current.top, me = Z !== 0 || Ce !== 0;
      $.current = ye;
      const Me = me ? MC(Z, Ce) : lt.NONE, Ve = Math.abs($.current.top - E.current.top), Ne = Math.abs($.current.left - E.current.left), Ae = Ve >= P || Ne >= yl, De = L.direction !== Me;
      if (!(Ae || De)) return F;
      if (De) switch (Me) {
        case lt.NONE:
        case lt.LEFT:
        case lt.RIGHT:
          j.current = void 0;
          break;
        default:
          j.current = F;
          break;
      }
      L.direction = Me, L.buffer = au(p, Me, t.rowBufferPx, t.columnBufferPx, P * 15, yl * 6);
      const _e = _i(e, t, r, l), Ge = Bi(_e, $.current, L);
      return Ui(Ge, F) || (qu.flushSync(() => {
        N(Ge);
      }), z.start(1e3, W)), Ge;
    }), B = () => {
      if (!dt(e.current.state).isReady && (r || l)) return;
      const Y = _i(e, t, r, l), re = Bi(Y, $.current, L);
      j.current = void 0, N(re);
    }, U = We(() => {
      if (V.current) {
        V.current = false;
        return;
      }
      const Y = W();
      e.current.publishEvent("scrollPositionChange", {
        top: $.current.top,
        left: $.current.left,
        renderContext: Y
      });
    }), K = We((Y) => {
      e.current.publishEvent("virtualScrollerWheel", {}, Y);
    }), ne = We((Y) => {
      e.current.publishEvent("virtualScrollerTouchMove", {}, Y);
    }), ee = (Y = {}) => {
      var _a3;
      if (!Y.rows && !h.range) return [];
      const re = at(e);
      let xe = F;
      Y.renderContext && (xe = Y.renderContext, xe.firstColumnIndex = F.firstColumnIndex, xe.lastColumnIndex = F.lastColumnIndex);
      const J = !d && Y.position === void 0 || d && Y.position === "bottom", ye = Y.position !== void 0;
      let Z;
      switch (Y.position) {
        case "top":
          Z = 0;
          break;
        case "bottom":
          Z = s.top.length + h.rows.length;
          break;
        case void 0:
          Z = s.top.length;
          break;
      }
      const Ce = Y.rows ?? h.rows, me = xe.firstRowIndex, Me = Math.min(xe.lastRowIndex, Ce.length), Ve = Y.rows ? Fi(0, Y.rows.length) : Fi(me, Me);
      let Ne = -1;
      !ye && A && (A.rowIndex < me && (Ve.unshift(A.rowIndex), Ne = A.rowIndex), A.rowIndex > Me && (Ve.push(A.rowIndex), Ne = A.rowIndex));
      const Ae = [], De = (_a3 = t.slotProps) == null ? void 0 : _a3.row, $e = Gn(e);
      return Ve.forEach((_e) => {
        var _a4, _b2, _c2;
        const { id: Ge, model: ue } = Ce[_e];
        if (!re[Ge]) return;
        const be = (((_a4 = h == null ? void 0 : h.range) == null ? void 0 : _a4.firstRowIndex) || 0) + Z + _e;
        if (O) {
          const Et = i.left.length, It = o.length - i.right.length;
          e.current.calculateColSpan({
            rowId: Ge,
            minFirstColumn: Et,
            maxLastColumn: It,
            columns: o
          }), i.left.length > 0 && e.current.calculateColSpan({
            rowId: Ge,
            minFirstColumn: 0,
            maxLastColumn: i.left.length,
            columns: o
          }), i.right.length > 0 && e.current.calculateColSpan({
            rowId: Ge,
            minFirstColumn: o.length - i.right.length,
            maxLastColumn: o.length,
            columns: o
          });
        }
        const ce = e.current.rowHasAutoHeight(Ge) ? "auto" : e.current.unstable_getRowHeight(Ge);
        let fe;
        m[Ge] == null ? fe = false : fe = e.current.isRowSelectable(Ge);
        let He = false;
        Y.position === void 0 && (He = _e === 0);
        let Te = false;
        const tt = _e === Ce.length - 1;
        if (J) if (ye) Te = tt;
        else {
          const Et = h.rows.length - 1;
          _e === Et && (Te = true);
        }
        let pt = xe;
        j.current && _e >= j.current.firstRowIndex && _e < j.current.lastRowIndex && (pt = j.current);
        const st = _e === Ne, Cn = (A == null ? void 0 : A.rowIndex) === be, kt = iu($e, pt, i.left.length), wn = tt && Y.position === "top", bt = pt.firstColumnIndex, Lt = pt.lastColumnIndex;
        if (Ae.push(b.jsx(t.slots.row, g({
          row: ue,
          rowId: Ge,
          index: be,
          selected: fe,
          offsetLeft: kt,
          columnsTotalWidth: R,
          rowHeight: ce,
          pinnedColumns: i,
          visibleColumns: o,
          firstColumnIndex: bt,
          lastColumnIndex: Lt,
          focusedColumnIndex: Cn ? A.columnIndex : void 0,
          isFirstVisible: He,
          isLastVisible: Te,
          isNotVisible: st,
          showBottomBorder: wn,
          scrollbarWidth: w,
          gridHasFiller: y
        }, De), Ge)), st) return;
        const St = c.get(Ge);
        St && Ae.push(St), Y.position === void 0 && tt && Ae.push((_c2 = (_b2 = e.current).getInfiniteLoadingTriggerElement) == null ? void 0 : _c2.call(_b2, {
          lastRowId: Ge
        }));
      }), Ae;
    }, te = u.useMemo(() => ({
      overflowX: !T || n ? "hidden" : void 0,
      overflowY: t.autoHeight ? "hidden" : void 0
    }), [
      T,
      t.autoHeight,
      n
    ]), ae = u.useMemo(() => {
      const Y = {
        width: T ? R : "auto",
        flexBasis: H,
        flexShrink: 0
      };
      return Y.flexBasis === 0 && (Y.flexBasis = kc), Y;
    }, [
      R,
      H,
      T
    ]), ve = u.useCallback((Y) => {
      Y && e.current.publishEvent("virtualScrollerContentSizeChange", {
        columnsTotalWidth: R,
        contentHeight: H
      });
    }, [
      e,
      R,
      H
    ]);
    return mt(() => {
      var _a3, _b2;
      G.current && ((_b2 = (_a3 = e.current).updateRenderContext) == null ? void 0 : _b2.call(_a3));
    }, [
      e,
      l,
      r
    ]), mt(() => {
      n && (x.current.scrollLeft = 0);
    }, [
      n,
      x
    ]), ib(F !== Bl, () => {
      var _a3;
      if (e.current.publishEvent("scrollPositionChange", {
        top: $.current.top,
        left: $.current.left,
        renderContext: F
      }), G.current = true, ((_a3 = t.initialState) == null ? void 0 : _a3.scroll) && x.current) {
        const Y = x.current, { top: re, left: xe } = t.initialState.scroll, J = {
          top: !(re > 0),
          left: !(xe > 0)
        };
        if (!J.left && R && (Y.scrollLeft = xe, V.current = true, J.left = true), !J.top && H && (Y.scrollTop = re, V.current = true, J.top = true), !J.top || !J.left) {
          const ye = e.current.subscribeEvent("virtualScrollerContentSizeChange", (Z) => {
            !J.left && Z.columnsTotalWidth && (Y.scrollLeft = xe, V.current = true, J.left = true), !J.top && Z.contentHeight && (Y.scrollTop = re, V.current = true, J.top = true), J.left && J.top && ye();
          });
          return ye;
        }
      }
    }), e.current.register("private", {
      updateRenderContext: B
    }), qe(e, "sortedRowsSet", B), qe(e, "paginationModelChange", B), qe(e, "columnsChange", B), {
      renderContext: F,
      setPanels: f,
      getRows: ee,
      getContainerProps: () => ({
        ref: D
      }),
      getScrollerProps: () => ({
        ref: x,
        onScroll: U,
        onWheel: K,
        onTouchMove: ne,
        style: te,
        role: "presentation",
        tabIndex: fC ? -1 : void 0
      }),
      getContentProps: () => ({
        style: ae,
        role: "presentation",
        ref: ve
      }),
      getRenderZoneProps: () => ({
        role: "rowgroup"
      }),
      getScrollbarVerticalProps: () => ({
        ref: M,
        scrollPosition: $
      }),
      getScrollbarHorizontalProps: () => ({
        ref: v,
        scrollPosition: $
      }),
      getScrollAreaProps: () => ({
        scrollPosition: $
      })
    };
  };
  function SC(e) {
    return e.dimensions.viewportOuterSize.width > 0 && e.dimensions.columnsTotalWidth > e.dimensions.viewportOuterSize.width;
  }
  function _i(e, t, n, o) {
    const r = dt(e.current.state), l = Ln(e), s = t.unstable_listView ? [
      So(e.current.state)
    ] : ot(e), a = CC(e), i = e.current.state.rows.dataRowIds.at(-1), d = s.at(-1);
    return {
      enabledForRows: n,
      enabledForColumns: o,
      apiRef: e,
      autoHeight: t.autoHeight,
      rowBufferPx: t.rowBufferPx,
      columnBufferPx: t.columnBufferPx,
      leftPinnedWidth: r.leftPinnedWidth,
      columnsTotalWidth: r.columnsTotalWidth,
      viewportInnerWidth: r.viewportInnerSize.width,
      viewportInnerHeight: r.viewportInnerSize.height,
      lastRowHeight: i !== void 0 ? e.current.unstable_getRowHeight(i) : 0,
      lastColumnWidth: (d == null ? void 0 : d.computedWidth) ?? 0,
      rowsMeta: Oo(e.current.state),
      columnPositions: Gn(e),
      rows: l.rows,
      range: l.range,
      pinnedColumns: ko(e),
      visibleColumns: s,
      hiddenCellsOriginMap: a,
      listView: t.unstable_listView ?? false,
      virtualizeColumnsWithAutoRowHeight: t.virtualizeColumnsWithAutoRowHeight
    };
  }
  function Bi(e, t, n) {
    const o = {
      firstRowIndex: 0,
      lastRowIndex: e.rows.length,
      firstColumnIndex: 0,
      lastColumnIndex: e.visibleColumns.length
    }, { top: r, left: l } = t, s = Math.abs(l) + e.leftPinnedWidth;
    if (e.enabledForRows) {
      let i = Math.min(Wi(e, r, {
        atStart: true,
        lastPosition: e.rowsMeta.positions[e.rowsMeta.positions.length - 1] + e.lastRowHeight
      }), e.rowsMeta.positions.length - 1);
      const d = e.hiddenCellsOriginMap[i];
      if (d) {
        const f = Math.min(...Object.values(d));
        i = Math.min(i, f);
      }
      const c = e.autoHeight ? i + e.rows.length : Wi(e, r + e.viewportInnerHeight);
      o.firstRowIndex = i, o.lastRowIndex = c;
    }
    if (e.listView) return g({}, o, {
      lastColumnIndex: 1
    });
    if (e.enabledForColumns) {
      let i = 0, d = e.columnPositions.length, c = false;
      const [f, p] = Wl({
        firstIndex: o.firstRowIndex,
        lastIndex: o.lastRowIndex,
        minFirstIndex: 0,
        maxLastIndex: e.rows.length,
        bufferBefore: n.buffer.rowBefore,
        bufferAfter: n.buffer.rowAfter,
        positions: e.rowsMeta.positions,
        lastSize: e.lastRowHeight
      });
      if (!e.virtualizeColumnsWithAutoRowHeight) for (let m = f; m < p && !c; m += 1) {
        const h = e.rows[m];
        c = e.apiRef.current.rowHasAutoHeight(h.id);
      }
      (!c || e.virtualizeColumnsWithAutoRowHeight) && (i = Rn(s, e.columnPositions, {
        atStart: true,
        lastPosition: e.columnsTotalWidth
      }), d = Rn(s + e.viewportInnerWidth, e.columnPositions)), o.firstColumnIndex = i, o.lastColumnIndex = d;
    }
    return IC(e, o, n);
  }
  function Wi(e, t, n) {
    var _a2, _b2;
    const o = e.apiRef.current.getLastMeasuredRowIndex();
    let r = o === 1 / 0;
    ((_a2 = e.range) == null ? void 0 : _a2.lastRowIndex) && !r && (r = o >= e.range.lastRowIndex);
    const l = Gt(o - (((_b2 = e.range) == null ? void 0 : _b2.firstRowIndex) || 0), 0, e.rowsMeta.positions.length);
    return r || e.rowsMeta.positions[l] >= t ? Rn(t, e.rowsMeta.positions, n) : PC(t, e.rowsMeta.positions, l, n);
  }
  function IC(e, t, n) {
    const [o, r] = Wl({
      firstIndex: t.firstRowIndex,
      lastIndex: t.lastRowIndex,
      minFirstIndex: 0,
      maxLastIndex: e.rows.length,
      bufferBefore: n.buffer.rowBefore,
      bufferAfter: n.buffer.rowAfter,
      positions: e.rowsMeta.positions,
      lastSize: e.lastRowHeight
    }), [l, s] = Wl({
      firstIndex: t.firstColumnIndex,
      lastIndex: t.lastColumnIndex,
      minFirstIndex: e.pinnedColumns.left.length,
      maxLastIndex: e.visibleColumns.length - e.pinnedColumns.right.length,
      bufferBefore: n.buffer.columnBefore,
      bufferAfter: n.buffer.columnAfter,
      positions: e.columnPositions,
      lastSize: e.lastColumnWidth
    }), a = eC({
      firstColumnToRender: l,
      apiRef: e.apiRef,
      firstRowToRender: o,
      lastRowToRender: r,
      visibleRows: e.rows
    });
    return {
      firstRowIndex: o,
      lastRowIndex: r,
      firstColumnIndex: a,
      lastColumnIndex: s
    };
  }
  function Rn(e, t, n = void 0, o = 0, r = t.length) {
    if (t.length <= 0) return -1;
    if (o >= r) return o;
    const l = o + Math.floor((r - o) / 2), s = t[l];
    let a;
    if (n == null ? void 0 : n.atStart) {
      const i = (l === t.length - 1 ? n.lastPosition : t[l + 1]) - s;
      a = e - i < s;
    } else a = e <= s;
    return a ? Rn(e, t, n, o, l) : Rn(e, t, n, l + 1, r);
  }
  function PC(e, t, n, o = void 0) {
    let r = 1;
    for (; n < t.length && Math.abs(t[n]) < e; ) n += r, r *= 2;
    return Rn(e, t, o, Math.floor(n / 2), Math.min(n, t.length));
  }
  function Wl({ firstIndex: e, lastIndex: t, bufferBefore: n, bufferAfter: o, minFirstIndex: r, maxLastIndex: l, positions: s, lastSize: a }) {
    const i = s[e] - n, d = s[t] + o, c = Rn(i, s, {
      atStart: true,
      lastPosition: s[s.length - 1] + a
    }), f = Rn(d, s);
    return [
      Gt(c, r, l),
      Gt(f, r, l)
    ];
  }
  function Ui(e, t) {
    return e === t ? true : e.firstRowIndex === t.firstRowIndex && e.lastRowIndex === t.lastRowIndex && e.firstColumnIndex === t.firstColumnIndex && e.lastColumnIndex === t.lastColumnIndex;
  }
  function iu(e, t, n) {
    const o = (e[t.firstColumnIndex] ?? 0) - (e[n] ?? 0);
    return Math.abs(o);
  }
  function MC(e, t) {
    return e === 0 && t === 0 ? lt.NONE : Math.abs(t) >= Math.abs(e) ? t > 0 ? lt.DOWN : lt.UP : e > 0 ? lt.RIGHT : lt.LEFT;
  }
  function au(e, t, n, o, r, l) {
    if (e) switch (t) {
      case lt.LEFT:
        t = lt.RIGHT;
        break;
      case lt.RIGHT:
        t = lt.LEFT;
        break;
    }
    switch (t) {
      case lt.NONE:
        return {
          rowAfter: n,
          rowBefore: n,
          columnAfter: o,
          columnBefore: o
        };
      case lt.LEFT:
        return {
          rowAfter: 0,
          rowBefore: 0,
          columnAfter: 0,
          columnBefore: l
        };
      case lt.RIGHT:
        return {
          rowAfter: 0,
          rowBefore: 0,
          columnAfter: l,
          columnBefore: 0
        };
      case lt.UP:
        return {
          rowAfter: 0,
          rowBefore: r,
          columnAfter: 0,
          columnBefore: 0
        };
      case lt.DOWN:
        return {
          rowAfter: r,
          rowBefore: 0,
          columnAfter: 0,
          columnBefore: 0
        };
      default:
        throw new Error("unreachable");
    }
  }
  const kC = () => {
    var _a2, _b2;
    const e = Pe(), t = le(), n = Q(e, dr), o = Q(e, Ss), r = Q(e, uc), l = n === 0 && r === 0, s = Q(e, Nh), a = !s && l, i = !s && n > 0 && o === 0;
    let d = null, c = null;
    return a && (d = "noRowsOverlay"), i && (d = "noResultsOverlay"), s && (d = "loadingOverlay", c = ((_b2 = (_a2 = t.slotProps) == null ? void 0 : _a2.loadingOverlay) == null ? void 0 : _b2[l ? "noRowsVariant" : "variant"]) || null), {
      overlayType: d,
      loadingOverlayVariant: c
    };
  }, EC = Ye("div", {
    name: "MuiDataGrid",
    slot: "OverlayWrapper",
    shouldForwardProp: (e) => e !== "overlayType" && e !== "loadingOverlayVariant",
    overridesResolver: (e, t) => t.overlayWrapper
  })(({ overlayType: e, loadingOverlayVariant: t }) => t !== "skeleton" ? {
    position: "sticky",
    top: "var(--DataGrid-headersTotalHeight)",
    left: 0,
    width: 0,
    height: 0,
    zIndex: e === "loadingOverlay" ? 5 : 4
  } : {}), FC = Ye("div", {
    name: "MuiDataGrid",
    slot: "OverlayWrapperInner",
    shouldForwardProp: (e) => e !== "overlayType" && e !== "loadingOverlayVariant",
    overridesResolver: (e, t) => t.overlayWrapperInner
  })({}), TC = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "overlayWrapper"
      ],
      inner: [
        "overlayWrapperInner"
      ]
    }, Oe, t);
  };
  function OC(e) {
    const t = Pe(), n = le(), o = Q(t, dt);
    let r = Math.max(o.viewportOuterSize.height - o.topContainerHeight - o.bottomContainerHeight - (o.hasScrollX ? o.scrollbarSize : 0), 0);
    r === 0 && (r = kc);
    const l = TC(g({}, e, {
      classes: n.classes
    }));
    return b.jsx(EC, g({
      className: pe(l.root)
    }, e, {
      children: b.jsx(FC, g({
        className: pe(l.inner),
        style: {
          height: r,
          width: o.viewportOuterSize.width
        }
      }, e))
    }));
  }
  function DC(e) {
    var _a2, _b2;
    const { overlayType: t } = e, n = le();
    if (!t) return null;
    const o = (_a2 = n.slots) == null ? void 0 : _a2[t], r = (_b2 = n.slotProps) == null ? void 0 : _b2[t];
    return b.jsx(OC, g({}, e, {
      children: b.jsx(o, g({}, r))
    }));
  }
  const Dr = (e) => e.columnMenu;
  function $C() {
    var _a2;
    const e = tn(), t = le(), n = Q(e, ot), o = Q(e, qm), r = Q(e, Bm), l = Q(e, Ac), s = Q(e, () => Ms(e) === null), a = Q(e, lb), i = Q(e, rb), d = Q(e, jr), c = Q(e, mr), f = Q(e, Dr), p = Q(e, Kt), m = Q(e, Qb), h = !(a === null && l === null && s), C = e.current.columnHeadersContainerRef;
    return b.jsx(t.slots.columnHeaders, g({
      ref: C,
      visibleColumns: n,
      filterColumnLookup: o,
      sortColumnLookup: r,
      columnHeaderTabIndexState: l,
      columnGroupHeaderTabIndexState: a,
      columnHeaderFocus: i,
      columnGroupHeaderFocus: d,
      headerGroupingMaxDepth: c,
      columnMenuState: f,
      columnVisibility: p,
      columnGroupsHeaderStructure: m,
      hasOtherElementInTabSequence: h
    }, (_a2 = t.slotProps) == null ? void 0 : _a2.columnHeaders));
  }
  const HC = In($C), cu = u.createContext(void 0), Ds = () => {
    const e = u.useContext(cu);
    if (e === void 0) throw new Error([
      "MUI X: Could not find the Data Grid configuration context.",
      "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.",
      "This can also happen if you are bundling multiple versions of the Data Grid."
    ].join(`
`));
    return e;
  }, LC = Ye("div")({
    position: "absolute",
    top: "var(--DataGrid-headersTotalHeight)",
    left: 0,
    width: "calc(100% - (var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize)))"
  }), RC = Ye("div", {
    name: "MuiDataGrid",
    slot: "Main",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.main,
        n.hasPinnedRight && t["main--hasPinnedRight"],
        n.loadingOverlayVariant === "skeleton" && t["main--hasSkeletonLoadingOverlay"]
      ];
    }
  })({
    flexGrow: 1,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column"
  }), AC = je((e, t) => {
    var _a2;
    const { ownerState: n } = e, o = le(), l = Ds().hooks.useGridAriaAttributes();
    return b.jsxs(RC, g({
      ownerState: n,
      className: e.className,
      tabIndex: -1
    }, l, (_a2 = o.slotProps) == null ? void 0 : _a2.main, {
      ref: t,
      children: [
        b.jsx(LC, {
          role: "presentation",
          "data-id": "gridPanelAnchor"
        }),
        e.children
      ]
    }));
  }), GC = () => we({
    root: [
      "topContainer"
    ]
  }, Oe, {}), zC = Ye("div")({
    position: "sticky",
    zIndex: 40,
    top: 0
  });
  function jC(e) {
    const t = GC();
    return b.jsx(zC, g({}, e, {
      className: pe(t.root, I["container--top"]),
      role: "presentation"
    }));
  }
  const VC = () => we({
    root: [
      "bottomContainer"
    ]
  }, Oe, {}), NC = Ye("div")({
    position: "sticky",
    zIndex: 40,
    bottom: "calc(var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))"
  });
  function _C(e) {
    const t = VC();
    return b.jsx(NC, g({}, e, {
      className: pe(t.root, I["container--bottom"]),
      role: "presentation"
    }));
  }
  const BC = (e, t) => {
    const { classes: n } = e;
    return we({
      root: [
        "virtualScrollerContent",
        t && "virtualScrollerContent--overflowed"
      ]
    }, Oe, n);
  }, WC = Ye("div", {
    name: "MuiDataGrid",
    slot: "VirtualScrollerContent",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.virtualScrollerContent,
        n.overflowedContent && t["virtualScrollerContent--overflowed"]
      ];
    }
  })({}), UC = je(function(t, n) {
    var _a2;
    const o = le(), r = !o.autoHeight && ((_a2 = t.style) == null ? void 0 : _a2.minHeight) === "auto", l = BC(o, r), s = {
      classes: o.classes,
      overflowedContent: r
    };
    return b.jsx(WC, g({}, t, {
      ownerState: s,
      className: pe(l.root, t.className),
      ref: n
    }));
  }), KC = Ye("div")({
    display: "flex",
    flexDirection: "row",
    width: "var(--DataGrid-rowWidth)",
    boxSizing: "border-box"
  }), uu = Ye("div")({
    position: "sticky",
    height: "100%",
    boxSizing: "border-box",
    borderTop: "1px solid var(--rowBorderColor)",
    backgroundColor: "var(--DataGrid-pinnedBackground)"
  }), qC = Ye(uu)({
    left: 0,
    borderRight: "1px solid var(--rowBorderColor)"
  }), YC = Ye(uu)({
    right: 0,
    borderLeft: "1px solid var(--rowBorderColor)"
  }), XC = Ye("div")({
    flexGrow: 1,
    borderTop: "1px solid var(--rowBorderColor)"
  });
  function QC({ rowsLength: e }) {
    const t = Pe(), { viewportOuterSize: n, minimumSize: o, hasScrollX: r, hasScrollY: l, scrollbarSize: s, leftPinnedWidth: a, rightPinnedWidth: i } = Q(t, dt), d = r ? s : 0, c = n.height - o.height > 0;
    return d === 0 && !c ? null : b.jsxs(KC, {
      className: I.filler,
      role: "presentation",
      style: {
        height: d,
        "--rowBorderColor": e === 0 ? "transparent" : "var(--DataGrid-rowBorderColor)"
      },
      children: [
        a > 0 && b.jsx(qC, {
          className: I["filler--pinnedLeft"],
          style: {
            width: a
          }
        }),
        b.jsx(XC, {}),
        i > 0 && b.jsx(YC, {
          className: I["filler--pinnedRight"],
          style: {
            width: i + (l ? s : 0)
          }
        })
      ]
    });
  }
  const JC = In(QC), ZC = [
    "className"
  ], ew = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "virtualScrollerRenderZone"
      ]
    }, Oe, t);
  }, tw = Ye("div", {
    name: "MuiDataGrid",
    slot: "VirtualScrollerRenderZone",
    overridesResolver: (e, t) => t.virtualScrollerRenderZone
  })({
    position: "absolute",
    display: "flex",
    flexDirection: "column"
  }), nw = je(function(t, n) {
    const { className: o } = t, r = de(t, ZC), l = Pe(), s = le(), a = ew(s), i = Q(l, () => {
      const d = br(l);
      return Oo(l.current.state).positions[d.firstRowIndex] ?? 0;
    });
    return b.jsx(tw, g({
      className: pe(a.root, o),
      ownerState: s,
      style: {
        transform: `translate3d(0, ${i}px, 0)`
      }
    }, r, {
      ref: n
    }));
  }), ow = {
    includeHeaders: true,
    includeOutliers: false,
    outliersFactor: 1.5,
    expand: false,
    disableColumnVirtualization: true
  }, ut = (e) => e.editRows, du = ur(ut, (e, { rowId: t, editMode: n }) => n === mn.Row && !!e[t]), rw = ur(ut, (e, { rowId: t, field: n }) => {
    var _a2;
    return ((_a2 = e[t]) == null ? void 0 : _a2[n]) ?? null;
  }), nr = (e) => e.preferencePanel, lw = ur(nr, (e, t) => !!(e.open && e.labelId === t));
  var Kn = (function(e) {
    return e.filters = "filters", e.columns = "columns", e;
  })(Kn || {});
  const sw = (e, t) => {
    const { classes: n } = e, o = {
      root: [
        "scrollbar",
        `scrollbar--${t}`
      ],
      content: [
        "scrollbarContent"
      ]
    };
    return we(o, Oe, n);
  }, fu = Ye("div")({
    position: "absolute",
    display: "inline-block",
    zIndex: 60,
    "&:hover": {
      zIndex: 70
    },
    "--size": "calc(max(var(--DataGrid-scrollbarSize), 14px))"
  }), iw = Ye(fu)({
    width: "var(--size)",
    height: "calc(var(--DataGrid-hasScrollY) * (100% - var(--DataGrid-topContainerHeight) - var(--DataGrid-bottomContainerHeight) - var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize)))",
    overflowY: "auto",
    overflowX: "hidden",
    outline: 0,
    "& > div": {
      width: "var(--size)"
    },
    top: "var(--DataGrid-topContainerHeight)",
    right: "0px"
  }), aw = Ye(fu)({
    width: "100%",
    height: "var(--size)",
    overflowY: "hidden",
    overflowX: "auto",
    outline: 0,
    "& > div": {
      height: "var(--size)"
    },
    bottom: "0px"
  }), Ki = je(function(t, n) {
    const o = tn(), r = le(), l = u.useRef(false), s = u.useRef(0), a = u.useRef(null), i = u.useRef(null), d = sw(r, t.position), c = Q(o, dt), f = t.position === "vertical" ? "height" : "width", p = t.position === "vertical" ? "scrollTop" : "scrollLeft", m = t.position === "vertical" ? "top" : "left", h = t.position === "vertical" ? c.hasScrollX : c.hasScrollY, C = c.minimumSize[f] + (h ? c.scrollbarSize : 0), M = (t.position === "vertical" ? c.viewportInnerSize.height : c.viewportOuterSize.width) * (C / c.viewportOuterSize[f]), v = We(() => {
      const P = a.current, H = t.scrollPosition.current;
      if (!P || H[m] === s.current) return;
      if (s.current = H[m], l.current) {
        l.current = false;
        return;
      }
      l.current = true;
      const R = H[m] / C;
      P[p] = R * M;
    }), O = We(() => {
      const P = o.current.virtualScrollerRef.current, H = a.current;
      if (!H) return;
      if (l.current) {
        l.current = false;
        return;
      }
      l.current = true;
      const R = H[p] / M;
      P[p] = R * C;
    });
    Ta(() => {
      const P = o.current.virtualScrollerRef.current, H = a.current, R = {
        passive: true
      };
      return P.addEventListener("scroll", v, R), H.addEventListener("scroll", O, R), () => {
        P.removeEventListener("scroll", v, R), H.removeEventListener("scroll", O, R);
      };
    }), u.useEffect(() => {
      i.current.style.setProperty(f, `${M}px`);
    }, [
      M,
      f
    ]);
    const G = t.position === "vertical" ? iw : aw;
    return b.jsx(G, {
      ref: zt(n, a),
      className: d.root,
      style: t.position === "vertical" && r.unstable_listView ? {
        height: "100%",
        top: 0
      } : void 0,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: (P) => {
        P.target.blur();
      },
      children: b.jsx("div", {
        ref: i,
        className: d.content
      })
    });
  }), cw = (e) => {
    const { classes: t, hasScrollX: n, hasPinnedRight: o, loadingOverlayVariant: r } = e;
    return we({
      root: [
        "main",
        o && "main--hasPinnedRight",
        r === "skeleton" && "main--hasSkeletonLoadingOverlay"
      ],
      scroller: [
        "virtualScroller",
        n && "virtualScroller--hasScrollX"
      ]
    }, Oe, t);
  }, uw = Ye("div", {
    name: "MuiDataGrid",
    slot: "VirtualScroller",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.virtualScroller,
        n.hasScrollX && t["virtualScroller--hasScrollX"]
      ];
    }
  })({
    position: "relative",
    height: "100%",
    flexGrow: 1,
    overflow: "scroll",
    scrollbarWidth: "none",
    display: "flex",
    flexDirection: "column",
    "&::-webkit-scrollbar": {
      display: "none"
    },
    "@media print": {
      overflow: "hidden"
    },
    zIndex: 0
  }), dw = (e) => e.dimensions.rightPinnedWidth > 0;
  function fw(e) {
    const t = Pe(), n = le(), o = Q(t, Sh), r = Q(t, yh), l = Q(t, dw), s = Q(t, Mh), a = kC(), i = {
      classes: n.classes,
      hasScrollX: r,
      hasPinnedRight: l,
      loadingOverlayVariant: a.loadingOverlayVariant
    }, d = cw(i), c = yC(), { getContainerProps: f, getScrollerProps: p, getContentProps: m, getRenderZoneProps: h, getScrollbarVerticalProps: C, getScrollbarHorizontalProps: x, getRows: M, getScrollAreaProps: v } = c, O = M();
    return b.jsxs(AC, g({
      className: d.root
    }, f(), {
      ownerState: i,
      children: [
        b.jsx(Mr, g({
          scrollDirection: "left"
        }, v())),
        b.jsx(Mr, g({
          scrollDirection: "right"
        }, v())),
        b.jsx(Mr, g({
          scrollDirection: "up"
        }, v())),
        b.jsx(Mr, g({
          scrollDirection: "down"
        }, v())),
        b.jsxs(uw, g({
          className: d.scroller
        }, p(), {
          ownerState: i,
          children: [
            b.jsxs(jC, {
              children: [
                !n.unstable_listView && b.jsx(HC, {}),
                b.jsx(n.slots.pinnedRows, {
                  position: "top",
                  virtualScroller: c
                })
              ]
            }),
            b.jsx(DC, g({}, a)),
            b.jsx(UC, g({}, m(), {
              children: b.jsxs(nw, g({}, h(), {
                children: [
                  O,
                  b.jsx(n.slots.detailPanels, {
                    virtualScroller: c
                  })
                ]
              }))
            })),
            s && b.jsx(JC, {
              rowsLength: O.length
            }),
            b.jsx(_C, {
              children: b.jsx(n.slots.pinnedRows, {
                position: "bottom",
                virtualScroller: c
              })
            })
          ]
        })),
        r && !n.unstable_listView && b.jsx(Ki, g({
          position: "horizontal"
        }, x())),
        o && b.jsx(Ki, g({
          position: "vertical"
        }, C())),
        e.children
      ]
    }));
  }
  function pw() {
    var _a2;
    const e = le();
    return e.hideFooter ? null : b.jsx(e.slots.footer, g({}, (_a2 = e.slotProps) == null ? void 0 : _a2.footer));
  }
  let Sl;
  function $s() {
    return Sl === void 0 && document.createElement("div").focus({
      get preventScroll() {
        return Sl = true, false;
      }
    }), Sl;
  }
  function gw({ defaultSlots: e, slots: t }) {
    const n = t;
    if (!n || Object.keys(n).length === 0) return e;
    const o = g({}, e);
    return Object.keys(n).forEach((r) => {
      const l = r;
      n[l] !== void 0 && (o[l] = n[l]);
    }), o;
  }
  function hw(e) {
    var _a2;
    if ((_a2 = e.slotProps) == null ? void 0 : _a2.root) return e;
    const t = Object.keys(e);
    if (!t.some((r) => r.startsWith("aria-") || r.startsWith("data-"))) return e;
    const n = {}, o = e.forwardedProps ?? {};
    for (let r = 0; r < t.length; r += 1) {
      const l = t[r];
      l.startsWith("aria-") || l.startsWith("data-") ? o[l] = e[l] : n[l] = e[l];
    }
    return n.forwardedProps = o, n;
  }
  function mw(e) {
    return u.useMemo(() => hw(e), [
      e
    ]);
  }
  const bw = (e) => {
    const t = e.match(/^__row_group_by_columns_group_(.*)__$/);
    return t ? t[1] : null;
  }, Cw = (e) => e === Fc || bw(e) !== null, pu = (e, t) => {
    if (e) if (t) {
      if (e === Ee.LEFT) return "right";
      if (e === Ee.RIGHT) return "left";
    } else {
      if (e === Ee.LEFT) return "left";
      if (e === Ee.RIGHT) return "right";
    }
  };
  function il(e, t, n, o) {
    const r = pu(n, t);
    return !r || o === void 0 || (e[r] = o), e;
  }
  const ww = [
    "column",
    "row",
    "rowId",
    "rowNode",
    "align",
    "children",
    "colIndex",
    "width",
    "className",
    "style",
    "colSpan",
    "disableDragEvents",
    "isNotVisible",
    "pinnedOffset",
    "pinnedPosition",
    "showRightBorder",
    "showLeftBorder",
    "onClick",
    "onDoubleClick",
    "onMouseDown",
    "onMouseUp",
    "onMouseOver",
    "onKeyDown",
    "onKeyUp",
    "onDragEnter",
    "onDragOver"
  ], vw = [
    "changeReason",
    "unstable_updateValueOnRender"
  ];
  Ee.LEFT + "", Tn.LEFT, Ee.RIGHT + "", Tn.RIGHT, Ee.NONE + "", Ee.VIRTUAL + "";
  const xw = (e) => {
    const { align: t, showLeftBorder: n, showRightBorder: o, pinnedPosition: r, isEditable: l, isSelected: s, isSelectionMode: a, classes: i } = e, d = {
      root: [
        "cell",
        `cell--text${se(t)}`,
        s && "selected",
        l && "cell--editable",
        n && "cell--withLeftBorder",
        o && "cell--withRightBorder",
        r === Ee.LEFT && "cell--pinnedLeft",
        r === Ee.RIGHT && "cell--pinnedRight",
        a && !l && "cell--selectionMode"
      ]
    };
    return we(d, Oe, i);
  }, yw = je(function(t, n) {
    var _a2, _b2, _c2;
    const { column: o, row: r, rowId: l, rowNode: s, align: a, colIndex: i, width: d, className: c, style: f, colSpan: p, disableDragEvents: m, isNotVisible: h, pinnedOffset: C, pinnedPosition: x, showRightBorder: M, showLeftBorder: v, onClick: O, onDoubleClick: G, onMouseDown: P, onMouseUp: H, onMouseOver: R, onKeyDown: T, onKeyUp: w, onDragEnter: y, onDragOver: k } = t, D = de(t, ww), $ = tn(), V = le(), E = $t(), S = o.field, F = Zo($, rw, {
      rowId: l,
      field: S
    }), z = Ds().hooks.useCellAggregationResult(l, S), j = F ? Ke.Edit : Ke.View, L = $.current.getCellParamsForRow(l, S, r, {
      colDef: o,
      cellMode: j,
      rowNode: s,
      tabIndex: Q($, () => {
        const fe = Ms($);
        return fe && fe.field === S && fe.id === l ? 0 : -1;
      }),
      hasFocus: Q($, () => {
        const fe = Ft($);
        return (fe == null ? void 0 : fe.id) === l && fe.field === S;
      })
    });
    L.api = $.current, z && (L.value = z.value, L.formattedValue = o.valueFormatter ? o.valueFormatter(L.value, r, o, $) : L.value);
    const N = Q($, () => $.current.unstable_applyPipeProcessors("isCellSelected", false, {
      id: l,
      field: S
    })), W = Q($, lu), B = Q($, bC), { hasFocus: U, isEditable: K = false, value: ne } = L, ee = o.type === "actions" && ((_a2 = o.getActions) == null ? void 0 : _a2.call(o, $.current.getRowParams(l)).some((fe) => !fe.props.disabled)), te = (j === "view" || !K) && !ee ? L.tabIndex : -1, { classes: ae, getCellClassName: ve } = V, re = [
      Q($, () => $.current.unstable_applyPipeProcessors("cellClassName", [], {
        id: l,
        field: S
      }).filter(Boolean).join(" "))
    ];
    o.cellClassName && re.push(typeof o.cellClassName == "function" ? o.cellClassName(L) : o.cellClassName), o.display === "flex" && re.push(I["cell--flex"]), ve && re.push(ve(L));
    const xe = L.formattedValue ?? ne, J = u.useRef(null), ye = zt(n, J), Z = u.useRef(null), Ce = V.cellSelection ?? false, me = {
      align: a,
      showLeftBorder: v,
      showRightBorder: M,
      isEditable: K,
      classes: V.classes,
      pinnedPosition: x,
      isSelected: N,
      isSelectionMode: Ce
    }, Me = xw(me), Ve = u.useCallback((fe) => (He) => {
      const Te = $.current.getCellParams(l, S || "");
      $.current.publishEvent(fe, Te, He), H && H(He);
    }, [
      $,
      S,
      H,
      l
    ]), Ne = u.useCallback((fe) => (He) => {
      const Te = $.current.getCellParams(l, S || "");
      $.current.publishEvent(fe, Te, He), P && P(He);
    }, [
      $,
      S,
      P,
      l
    ]), Ae = u.useCallback((fe, He) => (Te) => {
      if (!$.current.getRow(l)) return;
      const tt = $.current.getCellParams(l, S || "");
      $.current.publishEvent(fe, tt, Te), He && He(Te);
    }, [
      $,
      S,
      l
    ]), De = ((_b2 = W[l]) == null ? void 0 : _b2[S]) ?? false, $e = ((_c2 = B[l]) == null ? void 0 : _c2[S]) ?? 1, _e = u.useMemo(() => {
      if (h) return {
        padding: 0,
        opacity: 0,
        width: 0,
        height: 0,
        border: 0
      };
      const fe = il(g({
        "--width": `${d}px`
      }, f), E, x, C), He = x === Ee.LEFT, Te = x === Ee.RIGHT;
      return $e > 1 && (fe.height = `calc(var(--height) * ${$e})`, fe.zIndex = 10, (He || Te) && (fe.zIndex = 40)), fe;
    }, [
      d,
      h,
      f,
      C,
      x,
      E,
      $e
    ]);
    if (u.useEffect(() => {
      if (!U || j === Ke.Edit) return;
      const fe = qt($.current.rootElementRef.current);
      if (J.current && !J.current.contains(fe.activeElement)) {
        const He = J.current.querySelector('[tabindex="0"]'), Te = Z.current || He || J.current;
        if ($s()) Te.focus({
          preventScroll: true
        });
        else {
          const tt = $.current.getScrollPosition();
          Te.focus(), $.current.scroll(tt);
        }
      }
    }, [
      U,
      j,
      $
    ]), De) return b.jsx("div", {
      "data-colindex": i,
      role: "presentation",
      style: g({
        width: "var(--width)"
      }, _e)
    });
    let Ge = D.onFocus, ue, be;
    if (F === null && o.renderCell && (ue = o.renderCell(L)), F !== null && o.renderEditCell) {
      const fe = $.current.getRowWithUpdatedValues(l, o.field), He = de(F, vw), Te = o.valueFormatter ? o.valueFormatter(F.value, fe, o, $) : L.formattedValue, tt = g({}, L, {
        row: fe,
        formattedValue: Te
      }, He);
      ue = o.renderEditCell(tt), re.push(I["cell--editing"]), re.push(ae == null ? void 0 : ae["cell--editing"]);
    }
    if (ue === void 0) {
      const fe = xe == null ? void 0 : xe.toString();
      ue = fe, be = fe;
    }
    u.isValidElement(ue) && ee && (ue = u.cloneElement(ue, {
      focusElementRef: Z
    }));
    const ce = m ? null : {
      onDragEnter: Ae("cellDragEnter", y),
      onDragOver: Ae("cellDragOver", k)
    };
    return b.jsx("div", g({
      className: pe(Me.root, re, c),
      role: "gridcell",
      "data-field": S,
      "data-colindex": i,
      "aria-colindex": i + 1,
      "aria-colspan": p,
      "aria-rowspan": $e,
      style: _e,
      title: be,
      tabIndex: te,
      onClick: Ae("cellClick", O),
      onDoubleClick: Ae("cellDoubleClick", G),
      onMouseOver: Ae("cellMouseOver", R),
      onMouseDown: Ne("cellMouseDown"),
      onMouseUp: Ve("cellMouseUp"),
      onKeyDown: Ae("cellKeyDown", T),
      onKeyUp: Ae("cellKeyUp", w)
    }, ce, D, {
      onFocus: Ge,
      ref: ye,
      children: ue
    }));
  }), Sw = In(yw), Iw = [
    "field",
    "type",
    "align",
    "width",
    "height",
    "empty",
    "style",
    "className"
  ], qi = "1.3em", Pw = "1.2em", Yi = [
    40,
    80
  ], Mw = {
    number: [
      40,
      60
    ],
    string: [
      40,
      80
    ],
    date: [
      40,
      60
    ],
    dateTime: [
      60,
      80
    ],
    singleSelect: [
      40,
      80
    ]
  }, kw = (e) => {
    const { align: t, classes: n, empty: o } = e, r = {
      root: [
        "cell",
        "cellSkeleton",
        `cell--text${t ? se(t) : "Left"}`,
        o && "cellEmpty"
      ]
    };
    return we(r, Oe, n);
  }, Ew = rm(12345);
  function Fw(e) {
    const { field: t, type: n, align: o, width: r, height: l, empty: s = false, style: a, className: i } = e, d = de(e, Iw), f = {
      classes: le().classes,
      align: o,
      empty: s
    }, p = kw(f), m = u.useMemo(() => {
      if (n === "boolean" || n === "actions") return {
        variant: "circular",
        width: qi,
        height: qi
      };
      const [C, x] = n ? Mw[n] ?? Yi : Yi;
      return {
        variant: "text",
        width: `${Math.round(Ew(C, x))}%`,
        height: Pw
      };
    }, [
      n
    ]);
    return b.jsx("div", g({
      "data-field": t,
      className: pe(p.root, i),
      style: g({
        height: l,
        maxWidth: r,
        minWidth: r
      }, a)
    }, d, {
      children: !s && b.jsx(Np, g({}, m))
    }));
  }
  const Tw = In(Fw);
  function Ow(e) {
    return e.vars ? e.vars.palette.TableCell.border : e.palette.mode === "light" ? Zl(nt(e.palette.divider, 1), 0.88) : es(nt(e.palette.divider, 1), 0.68);
  }
  const Dw = 10, kr = -5, oo = 1, Xi = {
    width: 3,
    rx: 1.5,
    x: 10.5
  }, $w = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", Hw = (e) => e.dimensions.hasScrollX && (!e.dimensions.hasScrollY || e.dimensions.scrollbarSize === 0), Lw = ge("div", {
    name: "MuiDataGrid",
    slot: "Root",
    overridesResolver: (e, t) => [
      t.root,
      {
        [`&.${I.autoHeight}`]: t.autoHeight
      },
      {
        [`&.${I.autosizing}`]: t.autosizing
      },
      {
        [`&.${I["root--densityStandard"]}`]: t["root--densityStandard"]
      },
      {
        [`&.${I["root--densityComfortable"]}`]: t["root--densityComfortable"]
      },
      {
        [`&.${I["root--densityCompact"]}`]: t["root--densityCompact"]
      },
      {
        [`&.${I["root--disableUserSelection"]}`]: t["root--disableUserSelection"]
      },
      {
        [`&.${I["root--noToolbar"]}`]: t["root--noToolbar"]
      },
      {
        [`&.${I.withVerticalBorder}`]: t.withVerticalBorder
      },
      {
        [`& .${I.actionsCell}`]: t.actionsCell
      },
      {
        [`& .${I.booleanCell}`]: t.booleanCell
      },
      {
        [`& .${I.cell}`]: t.cell
      },
      {
        [`& .${I["cell--editable"]}`]: t["cell--editable"]
      },
      {
        [`& .${I["cell--editing"]}`]: t["cell--editing"]
      },
      {
        [`& .${I["cell--flex"]}`]: t["cell--flex"]
      },
      {
        [`& .${I["cell--pinnedLeft"]}`]: t["cell--pinnedLeft"]
      },
      {
        [`& .${I["cell--pinnedRight"]}`]: t["cell--pinnedRight"]
      },
      {
        [`& .${I["cell--rangeBottom"]}`]: t["cell--rangeBottom"]
      },
      {
        [`& .${I["cell--rangeLeft"]}`]: t["cell--rangeLeft"]
      },
      {
        [`& .${I["cell--rangeRight"]}`]: t["cell--rangeRight"]
      },
      {
        [`& .${I["cell--rangeTop"]}`]: t["cell--rangeTop"]
      },
      {
        [`& .${I["cell--selectionMode"]}`]: t["cell--selectionMode"]
      },
      {
        [`& .${I["cell--textCenter"]}`]: t["cell--textCenter"]
      },
      {
        [`& .${I["cell--textLeft"]}`]: t["cell--textLeft"]
      },
      {
        [`& .${I["cell--textRight"]}`]: t["cell--textRight"]
      },
      {
        [`& .${I["cell--withLeftBorder"]}`]: t["cell--withLeftBorder"]
      },
      {
        [`& .${I["cell--withRightBorder"]}`]: t["cell--withRightBorder"]
      },
      {
        [`& .${I.cellCheckbox}`]: t.cellCheckbox
      },
      {
        [`& .${I.cellEmpty}`]: t.cellEmpty
      },
      {
        [`& .${I.cellOffsetLeft}`]: t.cellOffsetLeft
      },
      {
        [`& .${I.cellSkeleton}`]: t.cellSkeleton
      },
      {
        [`& .${I.checkboxInput}`]: t.checkboxInput
      },
      {
        [`& .${I.columnHeader}`]: t.columnHeader
      },
      {
        [`& .${I["columnHeader--alignCenter"]}`]: t["columnHeader--alignCenter"]
      },
      {
        [`& .${I["columnHeader--alignLeft"]}`]: t["columnHeader--alignLeft"]
      },
      {
        [`& .${I["columnHeader--alignRight"]}`]: t["columnHeader--alignRight"]
      },
      {
        [`& .${I["columnHeader--dragging"]}`]: t["columnHeader--dragging"]
      },
      {
        [`& .${I["columnHeader--emptyGroup"]}`]: t["columnHeader--emptyGroup"]
      },
      {
        [`& .${I["columnHeader--filledGroup"]}`]: t["columnHeader--filledGroup"]
      },
      {
        [`& .${I["columnHeader--filtered"]}`]: t["columnHeader--filtered"]
      },
      {
        [`& .${I["columnHeader--last"]}`]: t["columnHeader--last"]
      },
      {
        [`& .${I["columnHeader--lastUnpinned"]}`]: t["columnHeader--lastUnpinned"]
      },
      {
        [`& .${I["columnHeader--moving"]}`]: t["columnHeader--moving"]
      },
      {
        [`& .${I["columnHeader--numeric"]}`]: t["columnHeader--numeric"]
      },
      {
        [`& .${I["columnHeader--pinnedLeft"]}`]: t["columnHeader--pinnedLeft"]
      },
      {
        [`& .${I["columnHeader--pinnedRight"]}`]: t["columnHeader--pinnedRight"]
      },
      {
        [`& .${I["columnHeader--siblingFocused"]}`]: t["columnHeader--siblingFocused"]
      },
      {
        [`& .${I["columnHeader--sortable"]}`]: t["columnHeader--sortable"]
      },
      {
        [`& .${I["columnHeader--sorted"]}`]: t["columnHeader--sorted"]
      },
      {
        [`& .${I["columnHeader--withLeftBorder"]}`]: t["columnHeader--withLeftBorder"]
      },
      {
        [`& .${I["columnHeader--withRightBorder"]}`]: t["columnHeader--withRightBorder"]
      },
      {
        [`& .${I.columnHeaderCheckbox}`]: t.columnHeaderCheckbox
      },
      {
        [`& .${I.columnHeaderDraggableContainer}`]: t.columnHeaderDraggableContainer
      },
      {
        [`& .${I.columnHeaderTitleContainer}`]: t.columnHeaderTitleContainer
      },
      {
        [`& .${I.columnHeaderTitleContainerContent}`]: t.columnHeaderTitleContainerContent
      },
      {
        [`& .${I.columnSeparator}`]: t.columnSeparator
      },
      {
        [`& .${I["columnSeparator--resizable"]}`]: t["columnSeparator--resizable"]
      },
      {
        [`& .${I["columnSeparator--resizing"]}`]: t["columnSeparator--resizing"]
      },
      {
        [`& .${I["columnSeparator--sideLeft"]}`]: t["columnSeparator--sideLeft"]
      },
      {
        [`& .${I["columnSeparator--sideRight"]}`]: t["columnSeparator--sideRight"]
      },
      {
        [`& .${I["container--bottom"]}`]: t["container--bottom"]
      },
      {
        [`& .${I["container--top"]}`]: t["container--top"]
      },
      {
        [`& .${I.detailPanelToggleCell}`]: t.detailPanelToggleCell
      },
      {
        [`& .${I["detailPanelToggleCell--expanded"]}`]: t["detailPanelToggleCell--expanded"]
      },
      {
        [`& .${I.editBooleanCell}`]: t.editBooleanCell
      },
      {
        [`& .${I.filterIcon}`]: t.filterIcon
      },
      {
        [`& .${I["filler--borderBottom"]}`]: t["filler--borderBottom"]
      },
      {
        [`& .${I["filler--pinnedLeft"]}`]: t["filler--pinnedLeft"]
      },
      {
        [`& .${I["filler--pinnedRight"]}`]: t["filler--pinnedRight"]
      },
      {
        [`& .${I.groupingCriteriaCell}`]: t.groupingCriteriaCell
      },
      {
        [`& .${I.groupingCriteriaCellLoadingContainer}`]: t.groupingCriteriaCellLoadingContainer
      },
      {
        [`& .${I.groupingCriteriaCellToggle}`]: t.groupingCriteriaCellToggle
      },
      {
        [`& .${I.headerFilterRow}`]: t.headerFilterRow
      },
      {
        [`& .${I.iconSeparator}`]: t.iconSeparator
      },
      {
        [`& .${I.menuIcon}`]: t.menuIcon
      },
      {
        [`& .${I.menuIconButton}`]: t.menuIconButton
      },
      {
        [`& .${I.menuList}`]: t.menuList
      },
      {
        [`& .${I.menuOpen}`]: t.menuOpen
      },
      {
        [`& .${I.overlayWrapperInner}`]: t.overlayWrapperInner
      },
      {
        [`& .${I.pinnedRows}`]: t.pinnedRows
      },
      {
        [`& .${I["pinnedRows--bottom"]}`]: t["pinnedRows--bottom"]
      },
      {
        [`& .${I["pinnedRows--top"]}`]: t["pinnedRows--top"]
      },
      {
        [`& .${I.row}`]: t.row
      },
      {
        [`& .${I["row--borderBottom"]}`]: t["row--borderBottom"]
      },
      {
        [`& .${I["row--detailPanelExpanded"]}`]: t["row--detailPanelExpanded"]
      },
      {
        [`& .${I["row--dragging"]}`]: t["row--dragging"]
      },
      {
        [`& .${I["row--dynamicHeight"]}`]: t["row--dynamicHeight"]
      },
      {
        [`& .${I["row--editable"]}`]: t["row--editable"]
      },
      {
        [`& .${I["row--editing"]}`]: t["row--editing"]
      },
      {
        [`& .${I["row--firstVisible"]}`]: t["row--firstVisible"]
      },
      {
        [`& .${I["row--lastVisible"]}`]: t["row--lastVisible"]
      },
      {
        [`& .${I.rowReorderCell}`]: t.rowReorderCell
      },
      {
        [`& .${I["rowReorderCell--draggable"]}`]: t["rowReorderCell--draggable"]
      },
      {
        [`& .${I.rowReorderCellContainer}`]: t.rowReorderCellContainer
      },
      {
        [`& .${I.rowReorderCellPlaceholder}`]: t.rowReorderCellPlaceholder
      },
      {
        [`& .${I.rowSkeleton}`]: t.rowSkeleton
      },
      {
        [`& .${I.scrollbar}`]: t.scrollbar
      },
      {
        [`& .${I["scrollbar--horizontal"]}`]: t["scrollbar--horizontal"]
      },
      {
        [`& .${I["scrollbar--vertical"]}`]: t["scrollbar--vertical"]
      },
      {
        [`& .${I.scrollbarFiller}`]: t.scrollbarFiller
      },
      {
        [`& .${I["scrollbarFiller--borderBottom"]}`]: t["scrollbarFiller--borderBottom"]
      },
      {
        [`& .${I["scrollbarFiller--borderTop"]}`]: t["scrollbarFiller--borderTop"]
      },
      {
        [`& .${I["scrollbarFiller--header"]}`]: t["scrollbarFiller--header"]
      },
      {
        [`& .${I["scrollbarFiller--pinnedRight"]}`]: t["scrollbarFiller--pinnedRight"]
      },
      {
        [`& .${I.sortIcon}`]: t.sortIcon
      },
      {
        [`& .${I.treeDataGroupingCell}`]: t.treeDataGroupingCell
      },
      {
        [`& .${I.treeDataGroupingCellLoadingContainer}`]: t.treeDataGroupingCellLoadingContainer
      },
      {
        [`& .${I.treeDataGroupingCellToggle}`]: t.treeDataGroupingCellToggle
      },
      {
        [`& .${I.withBorderColor}`]: t.withBorderColor
      }
    ]
  })(({ theme: e }) => {
    var _a2, _b2;
    const t = tn(), n = Q(t, Hw), o = Ow(e), r = e.shape.borderRadius, l = e.vars ? e.vars.palette.background.default : ((_a2 = e.mixins.MuiDataGrid) == null ? void 0 : _a2.containerBackground) ?? e.palette.background.default, s = ((_b2 = e.mixins.MuiDataGrid) == null ? void 0 : _b2.pinnedBackground) ?? l, a = e.vars ? `rgba(${e.vars.palette.background.defaultChannel} / ${e.vars.palette.action.disabledOpacity})` : nt(e.palette.background.default, e.palette.action.disabledOpacity), i = (e.vars || e).palette.action.hoverOpacity, d = (e.vars || e).palette.action.hover, c = (e.vars || e).palette.action.selectedOpacity, f = e.vars ? `calc(${i} + ${c})` : i + c, p = e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${c})` : nt(e.palette.primary.main, c), m = e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${f})` : nt(e.palette.primary.main, f), h = e.vars ? Gw : Rw, C = (T) => ({
      [`& .${I["cell--pinnedLeft"]}, & .${I["cell--pinnedRight"]}`]: {
        backgroundColor: T,
        "&.Mui-selected": {
          backgroundColor: h(T, p, c),
          "&:hover": {
            backgroundColor: h(T, p, f)
          }
        }
      }
    }), x = h(s, d, i), M = C(x), v = h(s, p, c), O = C(v), G = h(s, m, f), P = C(G), H = {
      backgroundColor: p,
      "&:hover": {
        backgroundColor: m,
        "@media (hover: none)": {
          backgroundColor: p
        }
      }
    };
    return g({
      "--unstable_DataGrid-radius": typeof r == "number" ? `${r}px` : r,
      "--unstable_DataGrid-headWeight": e.typography.fontWeightMedium,
      "--unstable_DataGrid-overlayBackground": a,
      "--DataGrid-containerBackground": l,
      "--DataGrid-pinnedBackground": s,
      "--DataGrid-rowBorderColor": o,
      "--DataGrid-cellOffsetMultiplier": 2,
      "--DataGrid-width": "0px",
      "--DataGrid-hasScrollX": "0",
      "--DataGrid-hasScrollY": "0",
      "--DataGrid-scrollbarSize": "10px",
      "--DataGrid-rowWidth": "0px",
      "--DataGrid-columnsTotalWidth": "0px",
      "--DataGrid-leftPinnedWidth": "0px",
      "--DataGrid-rightPinnedWidth": "0px",
      "--DataGrid-headerHeight": "0px",
      "--DataGrid-headersTotalHeight": "0px",
      "--DataGrid-topContainerHeight": "0px",
      "--DataGrid-bottomContainerHeight": "0px",
      flex: 1,
      boxSizing: "border-box",
      position: "relative",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: o,
      borderRadius: "var(--unstable_DataGrid-radius)",
      color: (e.vars || e).palette.text.primary
    }, e.typography.body2, {
      outline: "none",
      height: "100%",
      display: "flex",
      minWidth: 0,
      minHeight: 0,
      flexDirection: "column",
      overflow: "hidden",
      overflowAnchor: "none",
      transform: "translate(0, 0)",
      [`.${I.main} > *:first-child${$w}`]: {
        borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
        borderTopRightRadius: "var(--unstable_DataGrid-radius)"
      },
      [`&.${I.autoHeight}`]: {
        height: "auto"
      },
      [`&.${I.autosizing}`]: {
        [`& .${I.columnHeaderTitleContainerContent} > *`]: {
          overflow: "visible !important"
        },
        "@media (hover: hover)": {
          [`& .${I.menuIcon}`]: {
            width: "0 !important",
            visibility: "hidden !important"
          }
        },
        [`& .${I.cell}`]: {
          overflow: "visible !important",
          whiteSpace: "nowrap",
          minWidth: "max-content !important",
          maxWidth: "max-content !important"
        },
        [`& .${I.groupingCriteriaCell}`]: {
          width: "unset"
        },
        [`& .${I.treeDataGroupingCell}`]: {
          width: "unset"
        }
      },
      [`& .${I.columnHeader}, & .${I.cell}`]: {
        WebkitTapHighlightColor: "transparent",
        padding: "0 10px",
        boxSizing: "border-box"
      },
      [`& .${I.columnHeader}:focus-within, & .${I.cell}:focus-within`]: {
        outline: `solid ${e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / 0.5)` : nt(e.palette.primary.main, 0.5)} ${oo}px`,
        outlineOffset: oo * -1
      },
      [`& .${I.columnHeader}:focus, & .${I.cell}:focus`]: {
        outline: `solid ${e.palette.primary.main} ${oo}px`,
        outlineOffset: oo * -1
      },
      [`& .${I.columnHeader}:focus,
      & .${I["columnHeader--withLeftBorder"]},
      & .${I["columnHeader--withRightBorder"]},
      & .${I["columnHeader--siblingFocused"]},
      & .${I["virtualScroller--hasScrollX"]} .${I["columnHeader--lastUnpinned"]},
      & .${I["virtualScroller--hasScrollX"]} .${I["columnHeader--last"]}
      `]: {
        [`& .${I.columnSeparator}`]: {
          opacity: 0
        },
        "@media (hover: none)": {
          [`& .${I["columnSeparator--resizable"]}`]: {
            opacity: 1
          }
        },
        [`& .${I["columnSeparator--resizable"]}:hover`]: {
          opacity: 1
        }
      },
      [`&.${I["root--noToolbar"]} [aria-rowindex="1"] [aria-colindex="1"]`]: {
        borderTopLeftRadius: "calc(var(--unstable_DataGrid-radius) - 1px)"
      },
      [`&.${I["root--noToolbar"]} [aria-rowindex="1"] .${I["columnHeader--last"]}`]: {
        borderTopRightRadius: n ? "calc(var(--unstable_DataGrid-radius) - 1px)" : void 0
      },
      [`& .${I.columnHeaderCheckbox}, & .${I.cellCheckbox}`]: {
        padding: 0,
        justifyContent: "center",
        alignItems: "center"
      },
      [`& .${I.columnHeader}`]: {
        position: "relative",
        display: "flex",
        alignItems: "center"
      },
      [`& .${I["virtualScroller--hasScrollX"]} .${I["columnHeader--last"]}`]: {
        overflow: "hidden"
      },
      [`& .${I["columnHeader--sorted"]} .${I.iconButtonContainer}, & .${I["columnHeader--filtered"]} .${I.iconButtonContainer}`]: {
        visibility: "visible",
        width: "auto"
      },
      [`& .${I.columnHeader}:not(.${I["columnHeader--sorted"]}) .${I.sortButton}`]: {
        opacity: 0,
        transition: e.transitions.create([
          "opacity"
        ], {
          duration: e.transitions.duration.shorter
        })
      },
      [`& .${I.columnHeaderTitleContainer}`]: {
        display: "flex",
        alignItems: "center",
        gap: e.spacing(0.25),
        minWidth: 0,
        flex: 1,
        whiteSpace: "nowrap",
        overflow: "hidden"
      },
      [`& .${I.columnHeaderTitleContainerContent}`]: {
        overflow: "hidden",
        display: "flex",
        alignItems: "center"
      },
      [`& .${I["columnHeader--filledGroup"]} .${I.columnHeaderTitleContainer}`]: {
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        boxSizing: "border-box"
      },
      [`& .${I.sortIcon}, & .${I.filterIcon}`]: {
        fontSize: "inherit"
      },
      [`& .${I["columnHeader--sortable"]}`]: {
        cursor: "pointer"
      },
      [`& .${I["columnHeader--alignCenter"]} .${I.columnHeaderTitleContainer}`]: {
        justifyContent: "center"
      },
      [`& .${I["columnHeader--alignRight"]} .${I.columnHeaderDraggableContainer}, & .${I["columnHeader--alignRight"]} .${I.columnHeaderTitleContainer}`]: {
        flexDirection: "row-reverse"
      },
      [`& .${I["columnHeader--alignCenter"]} .${I.menuIcon}`]: {
        marginLeft: "auto"
      },
      [`& .${I["columnHeader--alignRight"]} .${I.menuIcon}`]: {
        marginRight: "auto",
        marginLeft: -5
      },
      [`& .${I["columnHeader--moving"]}`]: {
        backgroundColor: (e.vars || e).palette.action.hover
      },
      [`& .${I["columnHeader--pinnedLeft"]}, & .${I["columnHeader--pinnedRight"]}`]: {
        position: "sticky",
        zIndex: 40,
        background: "var(--DataGrid-pinnedBackground)"
      },
      [`& .${I.columnSeparator}`]: {
        position: "absolute",
        overflow: "hidden",
        zIndex: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: Dw,
        color: o
      },
      [`& .${I.columnHeaders}`]: {
        width: "var(--DataGrid-rowWidth)"
      },
      "@media (hover: hover)": {
        [`& .${I.columnHeader}:hover`]: {
          [`& .${I.menuIcon}`]: {
            width: "auto",
            visibility: "visible"
          },
          [`& .${I.iconButtonContainer}`]: {
            visibility: "visible",
            width: "auto"
          }
        },
        [`& .${I.columnHeader}:not(.${I["columnHeader--sorted"]}):hover .${I.sortButton}`]: {
          opacity: 0.5
        }
      },
      "@media (hover: none)": {
        [`& .${I.columnHeader} .${I.menuIcon}`]: {
          width: "auto",
          visibility: "visible"
        },
        [`& .${I.columnHeader}:focus,
        & .${I["columnHeader--siblingFocused"]}`]: {
          [`.${I["columnSeparator--resizable"]}`]: {
            color: (e.vars || e).palette.primary.main
          }
        }
      },
      [`& .${I["columnSeparator--sideLeft"]}`]: {
        left: kr
      },
      [`& .${I["columnSeparator--sideRight"]}`]: {
        right: kr
      },
      [`& .${I["columnHeader--withRightBorder"]} .${I["columnSeparator--sideLeft"]}`]: {
        left: kr - 0.5
      },
      [`& .${I["columnHeader--withRightBorder"]} .${I["columnSeparator--sideRight"]}`]: {
        right: kr - 0.5
      },
      [`& .${I["columnSeparator--resizable"]}`]: {
        cursor: "col-resize",
        touchAction: "none",
        [`&.${I["columnSeparator--resizing"]}`]: {
          color: (e.vars || e).palette.primary.main
        },
        "@media (hover: none)": {
          [`& .${I.iconSeparator} rect`]: Xi
        },
        "@media (hover: hover)": {
          "&:hover": {
            color: (e.vars || e).palette.primary.main,
            [`& .${I.iconSeparator} rect`]: Xi
          }
        },
        "& svg": {
          pointerEvents: "none"
        }
      },
      [`& .${I.iconSeparator}`]: {
        color: "inherit",
        transition: e.transitions.create([
          "color",
          "width"
        ], {
          duration: e.transitions.duration.shortest
        })
      },
      [`& .${I.menuIcon}`]: {
        width: 0,
        visibility: "hidden",
        fontSize: 20,
        marginRight: -5,
        display: "flex",
        alignItems: "center"
      },
      [`.${I.menuOpen}`]: {
        visibility: "visible",
        width: "auto"
      },
      [`& .${I.headerFilterRow}`]: {
        [`& .${I.columnHeader}`]: {
          boxSizing: "border-box",
          borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
        }
      },
      [`& .${I["row--borderBottom"]} .${I.columnHeader},
      & .${I["row--borderBottom"]} .${I.filler},
      & .${I["row--borderBottom"]} .${I.scrollbarFiller}`]: {
        borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
      },
      [`& .${I["row--borderBottom"]} .${I.cell}`]: {
        borderBottom: "1px solid var(--rowBorderColor)"
      },
      [`.${I.row}`]: {
        display: "flex",
        width: "var(--DataGrid-rowWidth)",
        breakInside: "avoid",
        "--rowBorderColor": "var(--DataGrid-rowBorderColor)",
        [`&.${I["row--firstVisible"]}`]: {
          "--rowBorderColor": "transparent"
        },
        "&:hover": {
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${I.rowSkeleton}:hover`]: {
          backgroundColor: "transparent"
        },
        "&.Mui-selected": H
      },
      [`& .${I["container--top"]}, & .${I["container--bottom"]}`]: {
        "[role=row]": {
          background: "var(--DataGrid-containerBackground)"
        }
      },
      [`& .${I.cell}`]: {
        flex: "0 0 auto",
        height: "var(--height)",
        width: "var(--width)",
        lineHeight: "calc(var(--height) - 1px)",
        boxSizing: "border-box",
        borderTop: "1px solid var(--rowBorderColor)",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        "&.Mui-selected": H
      },
      [`& .${I["virtualScrollerContent--overflowed"]} .${I["row--lastVisible"]} .${I.cell}`]: {
        borderTopColor: "transparent"
      },
      [`& .${I["pinnedRows--top"]} :first-of-type`]: {
        [`& .${I.cell}, .${I.scrollbarFiller}`]: {
          borderTop: "none"
        }
      },
      [`&.${I["root--disableUserSelection"]}`]: {
        userSelect: "none"
      },
      [`& .${I["row--dynamicHeight"]} > .${I.cell}`]: {
        whiteSpace: "initial",
        lineHeight: "inherit"
      },
      [`& .${I.cellEmpty}`]: {
        flex: 1,
        padding: 0,
        height: "unset"
      },
      [`& .${I.cell}.${I["cell--selectionMode"]}`]: {
        cursor: "default"
      },
      [`& .${I.cell}.${I["cell--editing"]}`]: {
        padding: 1,
        display: "flex",
        boxShadow: e.shadows[2],
        backgroundColor: (e.vars || e).palette.background.paper,
        "&:focus-within": {
          outline: `${oo}px solid ${(e.vars || e).palette.primary.main}`,
          outlineOffset: oo * -1
        }
      },
      [`& .${I["row--editing"]}`]: {
        boxShadow: e.shadows[2]
      },
      [`& .${I["row--editing"]} .${I.cell}`]: {
        boxShadow: e.shadows[0],
        backgroundColor: (e.vars || e).palette.background.paper
      },
      [`& .${I.editBooleanCell}`]: {
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
      },
      [`& .${I.booleanCell}[data-value="true"]`]: {
        color: (e.vars || e).palette.text.secondary
      },
      [`& .${I.booleanCell}[data-value="false"]`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`& .${I.actionsCell}`]: {
        display: "inline-flex",
        alignItems: "center",
        gridGap: e.spacing(1)
      },
      [`& .${I.rowReorderCell}`]: {
        display: "inline-flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`& .${I["rowReorderCell--draggable"]}`]: {
        cursor: "move",
        opacity: 1
      },
      [`& .${I.rowReorderCellContainer}`]: {
        padding: 0,
        display: "flex",
        alignItems: "stretch"
      },
      [`.${I.withBorderColor}`]: {
        borderColor: o
      },
      [`& .${I["cell--withLeftBorder"]}, & .${I["columnHeader--withLeftBorder"]}`]: {
        borderLeftColor: "var(--DataGrid-rowBorderColor)",
        borderLeftWidth: "1px",
        borderLeftStyle: "solid"
      },
      [`& .${I["cell--withRightBorder"]}, & .${I["columnHeader--withRightBorder"]}`]: {
        borderRightColor: "var(--DataGrid-rowBorderColor)",
        borderRightWidth: "1px",
        borderRightStyle: "solid"
      },
      [`& .${I["cell--flex"]}`]: {
        display: "flex",
        alignItems: "center",
        lineHeight: "inherit"
      },
      [`& .${I["cell--textLeft"]}`]: {
        textAlign: "left",
        justifyContent: "flex-start"
      },
      [`& .${I["cell--textRight"]}`]: {
        textAlign: "right",
        justifyContent: "flex-end"
      },
      [`& .${I["cell--textCenter"]}`]: {
        textAlign: "center",
        justifyContent: "center"
      },
      [`& .${I["cell--pinnedLeft"]}, & .${I["cell--pinnedRight"]}`]: {
        position: "sticky",
        zIndex: 30,
        background: "var(--DataGrid-pinnedBackground)",
        "&.Mui-selected": {
          backgroundColor: v
        }
      },
      [`& .${I.virtualScrollerContent} .${I.row}`]: {
        "&:hover": M,
        "&.Mui-selected": O,
        "&.Mui-selected:hover": P
      },
      [`& .${I.cellOffsetLeft}`]: {
        flex: "0 0 auto",
        display: "inline-block"
      },
      [`& .${I.cellSkeleton}`]: {
        flex: "0 0 auto",
        height: "100%",
        display: "inline-flex",
        alignItems: "center"
      },
      [`& .${I.columnHeaderDraggableContainer}`]: {
        display: "flex",
        width: "100%",
        height: "100%"
      },
      [`& .${I.rowReorderCellPlaceholder}`]: {
        display: "none"
      },
      [`& .${I["columnHeader--dragging"]}, & .${I["row--dragging"]}`]: {
        background: (e.vars || e).palette.background.paper,
        padding: "0 12px",
        borderRadius: "var(--unstable_DataGrid-radius)",
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`& .${I["row--dragging"]}`]: {
        background: (e.vars || e).palette.background.paper,
        padding: "0 12px",
        borderRadius: "var(--unstable_DataGrid-radius)",
        opacity: (e.vars || e).palette.action.disabledOpacity,
        [`& .${I.rowReorderCellPlaceholder}`]: {
          display: "flex"
        }
      },
      [`& .${I.treeDataGroupingCell}`]: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      },
      [`& .${I.treeDataGroupingCellToggle}`]: {
        flex: "0 0 28px",
        alignSelf: "stretch",
        marginRight: e.spacing(2)
      },
      [`& .${I.treeDataGroupingCellLoadingContainer}, .${I.groupingCriteriaCellLoadingContainer}`]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      [`& .${I.groupingCriteriaCell}`]: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      },
      [`& .${I.groupingCriteriaCellToggle}`]: {
        flex: "0 0 28px",
        alignSelf: "stretch",
        marginRight: e.spacing(2)
      },
      [`.${I.scrollbarFiller}`]: {
        minWidth: "calc(var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize))",
        alignSelf: "stretch",
        [`&.${I["scrollbarFiller--borderTop"]}`]: {
          borderTop: "1px solid var(--DataGrid-rowBorderColor)"
        },
        [`&.${I["scrollbarFiller--borderBottom"]}`]: {
          borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
        },
        [`&.${I["scrollbarFiller--pinnedRight"]}`]: {
          backgroundColor: "var(--DataGrid-pinnedBackground)",
          position: "sticky",
          right: 0
        }
      },
      [`& .${I.filler}`]: {
        flex: "1 0 auto"
      },
      [`& .${I["filler--borderBottom"]}`]: {
        borderBottom: "1px solid var(--DataGrid-rowBorderColor)"
      },
      [`& .${I["main--hasSkeletonLoadingOverlay"]}`]: {
        [`& .${I.virtualScrollerContent}`]: {
          position: "fixed",
          visibility: "hidden"
        },
        [`& .${I["scrollbar--vertical"]}, & .${I.pinnedRows}, & .${I.virtualScroller} > .${I.filler}`]: {
          display: "none"
        }
      }
    });
  });
  function Rw(e, t, n, o = 1) {
    const r = (i, d) => Math.round((i ** (1 / o) * (1 - n) + d ** (1 / o) * n) ** o), l = Us(e), s = Us(t), a = [
      r(l.values[0], s.values[0]),
      r(l.values[1], s.values[1]),
      r(l.values[2], s.values[2])
    ];
    return Yu({
      type: "rgb",
      values: a
    });
  }
  const Aw = (e) => `rgb(from ${e} r g b / 1)`;
  function Gw(e, t, n) {
    return `color-mix(in srgb,${e}, ${Aw(t)} calc(${n} * 100%))`;
  }
  const zw = () => () => {
  }, jw = () => false, Vw = () => true, Nw = () => gs.useSyncExternalStore(zw, jw, Vw);
  function _w() {
    var _a2, _b2;
    const e = Pe(), t = Q(e, Qt), n = le(), o = Q(e, nr), r = e.current.unstable_applyPipeProcessors("preferencePanel", null, o.openedPanelValue ?? Kn.filters);
    return b.jsx(n.slots.panel, g({
      as: n.slots.basePopper,
      open: t.length > 0 && o.open,
      id: o.panelId,
      "aria-labelledby": o.labelId
    }, (_a2 = n.slotProps) == null ? void 0 : _a2.panel, (_b2 = n.slotProps) == null ? void 0 : _b2.basePopper, {
      children: r
    }));
  }
  function Bw() {
    var _a2;
    const e = le();
    return b.jsxs(u.Fragment, {
      children: [
        b.jsx(_w, {}),
        e.slots.toolbar && b.jsx(e.slots.toolbar, g({}, (_a2 = e.slotProps) == null ? void 0 : _a2.toolbar))
      ]
    });
  }
  const Ww = [
    "className",
    "children"
  ], Uw = (e, t) => {
    const { autoHeight: n, classes: o, showCellVerticalBorder: r } = e, l = {
      root: [
        "root",
        n && "autoHeight",
        `root--density${se(t)}`,
        e.slots.toolbar === null && "root--noToolbar",
        "withBorderColor",
        r && "withVerticalBorder"
      ]
    };
    return we(l, Oe, o);
  }, Kw = je(function(t, n) {
    const o = le(), { className: r, children: l } = t, s = de(t, Ww), a = tn(), i = Q(a, io), d = a.current.rootElementRef, c = u.useCallback((C) => {
      C !== null && a.current.publishEvent("rootMount", C);
    }, [
      a
    ]), f = zt(d, n, c), p = o, m = Uw(p, i);
    return Nw() ? null : b.jsxs(Lw, g({
      className: pe(m.root, r),
      ownerState: p
    }, s, {
      ref: f,
      children: [
        b.jsx(Bw, {}),
        b.jsx(fw, {
          children: l
        }),
        b.jsx(pw, {})
      ]
    }));
  }), qw = In(Kw), Yw = [
    "className"
  ], Xw = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "footerContainer",
        "withBorderColor"
      ]
    }, Oe, t);
  }, Qw = Ye("div", {
    name: "MuiDataGrid",
    slot: "FooterContainer",
    overridesResolver: (e, t) => t.footerContainer
  })({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: 52,
    borderTop: "1px solid"
  }), Jw = je(function(t, n) {
    const { className: o } = t, r = de(t, Yw), l = le(), s = Xw(l);
    return b.jsx(Qw, g({
      className: pe(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), Zw = [
    "className"
  ], ev = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "overlay"
      ]
    }, Oe, t);
  }, tv = Ye("div", {
    name: "MuiDataGrid",
    slot: "Overlay",
    overridesResolver: (e, t) => t.overlay
  })({
    width: "100%",
    height: "100%",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--unstable_DataGrid-overlayBackground)"
  }), Hs = je(function(t, n) {
    const { className: o } = t, r = de(t, Zw), l = le(), s = ev(l);
    return b.jsx(tv, g({
      className: pe(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), nv = (e) => {
    const { classes: t, open: n } = e;
    return we({
      root: [
        "menuIcon",
        n && "menuOpen"
      ],
      button: [
        "menuIconButton"
      ]
    }, Oe, t);
  }, ov = u.memo((e) => {
    var _a2, _b2;
    const { colDef: t, open: n, columnMenuId: o, columnMenuButtonId: r, iconButtonRef: l } = e, s = Pe(), a = le(), i = g({}, e, {
      classes: a.classes
    }), d = nv(i), c = u.useCallback((p) => {
      p.preventDefault(), p.stopPropagation(), s.current.toggleColumnMenu(t.field);
    }, [
      s,
      t.field
    ]), f = t.headerName ?? t.field;
    return b.jsx("div", {
      className: d.root,
      children: b.jsx(a.slots.baseTooltip, g({
        title: s.current.getLocaleText("columnMenuLabel"),
        enterDelay: 1e3
      }, (_a2 = a.slotProps) == null ? void 0 : _a2.baseTooltip, {
        children: b.jsx(a.slots.baseIconButton, g({
          ref: l,
          tabIndex: -1,
          className: d.button,
          "aria-label": s.current.getLocaleText("columnMenuAriaLabel")(f),
          size: "small",
          onClick: c,
          "aria-haspopup": "menu",
          "aria-expanded": n,
          "aria-controls": n ? o : void 0,
          id: r
        }, (_b2 = a.slotProps) == null ? void 0 : _b2.baseIconButton, {
          children: b.jsx(a.slots.columnMenuIcon, {
            fontSize: "inherit"
          })
        }))
      }))
    });
  });
  function rv({ columnMenuId: e, columnMenuButtonId: t, ContentComponent: n, contentComponentProps: o, field: r, open: l, target: s, onExited: a }) {
    const i = Pe(), d = i.current.getColumn(r), c = We((f) => {
      f && (f.stopPropagation(), s == null ? void 0 : s.contains(f.target)) || i.current.hideColumnMenu();
    });
    return !s || !d ? null : b.jsx(vs, {
      placement: `bottom-${d.align === "right" ? "start" : "end"}`,
      open: l,
      target: s,
      onClose: c,
      onExited: a,
      children: b.jsx(n, g({
        colDef: d,
        hideMenu: c,
        open: l,
        id: e,
        labelledby: t
      }, o))
    });
  }
  function lv(e) {
    return e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth;
  }
  function Br(e, t) {
    return e.closest(`.${t}`);
  }
  function Mn(e) {
    return e.replace(/["\\]/g, "\\$&");
  }
  function sv(e, t) {
    return e.querySelector(`[role="columnheader"][data-field="${Mn(t)}"]`);
  }
  function gu(e) {
    return `.${I.row}[data-id="${Mn(String(e))}"]`;
  }
  function iv(e, t) {
    return e.querySelector(gu(t));
  }
  function av(e, { id: t, field: n }) {
    const o = gu(t), r = `.${I.cell}[data-field="${Mn(n)}"]`, l = `${o} ${r}`;
    return e.querySelector(l);
  }
  function Cr(e) {
    return e.target.nodeType === 1 && !e.currentTarget.contains(e.target);
  }
  function cv(e) {
    return e.getAttribute("data-field");
  }
  function uv(e, t) {
    return e.querySelector(`[data-field="${Mn(t)}"]`);
  }
  function dv(e) {
    return e.getAttribute("data-fields").slice(2, -2).split("-|-");
  }
  function fv(e, t) {
    return Array.from(e.querySelectorAll(`[data-fields*="|-${Mn(t)}-|"]`) ?? []);
  }
  function pv(e, t) {
    var _a2;
    if (!Br(e, I.root)) throw new Error("MUI X: The root element is not found.");
    const o = e.getAttribute("aria-colindex");
    if (!o) return [];
    const r = Number(o) - 1, l = [];
    return ((_a2 = t.virtualScrollerRef) == null ? void 0 : _a2.current) ? (bu(t).forEach((s) => {
      const a = s.getAttribute("data-id");
      if (!a) return;
      let i = r;
      const d = t.unstable_getCellColSpanInfo(a, r);
      d && d.spannedByColSpan && (i = d.leftVisibleCellIndex);
      const c = s.querySelector(`[data-colindex="${i}"]`);
      c && l.push(c);
    }), l) : [];
  }
  function Qi(e, t) {
    return e.rootElementRef.current.querySelector(`.${I[t]}`);
  }
  const hu = ({ api: e, colIndex: t, position: n, filterFn: o }) => {
    if (t === null) return [];
    const r = [];
    return bu(e).forEach((l) => {
      l.getAttribute("data-id") && l.querySelectorAll(`.${I[n === "left" ? "cell--pinnedLeft" : "cell--pinnedRight"]}`).forEach((a) => {
        const i = Do(a);
        i !== null && o(i) && r.push(a);
      });
    }), r;
  };
  function gv(e, t, n) {
    const o = Do(t);
    return hu({
      api: e,
      colIndex: o,
      position: n ? "right" : "left",
      filterFn: (r) => n ? r < o : r > o
    });
  }
  function hv(e, t, n) {
    const o = Do(t);
    return hu({
      api: e,
      colIndex: o,
      position: n ? "left" : "right",
      filterFn: (r) => n ? r > o : r < o
    });
  }
  const mu = ({ api: e, colIndex: t, position: n, filterFn: o }) => {
    var _a2;
    if (!((_a2 = e.columnHeadersContainerRef) == null ? void 0 : _a2.current)) return [];
    if (t === null) return [];
    const r = [];
    return e.columnHeadersContainerRef.current.querySelectorAll(`.${I[n === "left" ? "columnHeader--pinnedLeft" : "columnHeader--pinnedRight"]}`).forEach((l) => {
      const s = Do(l);
      s !== null && o(s, l) && r.push(l);
    }), r;
  };
  function mv(e, t, n) {
    const o = Do(t);
    return mu({
      api: e,
      position: n ? "right" : "left",
      colIndex: o,
      filterFn: (r) => n ? r < o : r > o
    });
  }
  function bv(e, t, n) {
    const o = Do(t);
    return mu({
      api: e,
      position: n ? "left" : "right",
      colIndex: o,
      filterFn: (r, l) => l.classList.contains(I["columnHeader--last"]) ? false : n ? r > o : r < o
    });
  }
  function Cv(e, t) {
    return e.columnHeadersContainerRef.current.querySelector(`:scope > div > [data-field="${Mn(t)}"][role="columnheader"]`);
  }
  function wv(e, t) {
    const n = e.virtualScrollerRef.current;
    return Array.from(n.querySelectorAll(`:scope > div > div > div > [data-field="${Mn(t)}"][role="gridcell"]`));
  }
  function bu(e) {
    return e.virtualScrollerRef.current.querySelectorAll(`:scope > div > div > .${I.row}`);
  }
  function Do(e) {
    const t = e.getAttribute("aria-colindex");
    return t ? Number(t) - 1 : null;
  }
  const vv = [
    "className",
    "aria-label"
  ], xv = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "columnHeaderTitle"
      ]
    }, Oe, t);
  }, yv = Ye("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaderTitle",
    overridesResolver: (e, t) => t.columnHeaderTitle
  })({
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontWeight: "var(--unstable_DataGrid-headWeight)",
    lineHeight: "normal"
  }), Sv = je(function(t, n) {
    const { className: o } = t, r = de(t, vv), l = le(), s = xv(l);
    return b.jsx(yv, g({
      className: pe(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  });
  function Iv(e) {
    var _a2;
    const { label: t, description: n } = e, o = le(), r = u.useRef(null), [l, s] = u.useState(""), a = u.useCallback(() => {
      if (!n && (r == null ? void 0 : r.current)) {
        const i = lv(r.current);
        s(i ? t : "");
      }
    }, [
      n,
      t
    ]);
    return b.jsx(o.slots.baseTooltip, g({
      title: n || l
    }, (_a2 = o.slotProps) == null ? void 0 : _a2.baseTooltip, {
      children: b.jsx(Sv, {
        onMouseOver: a,
        ref: r,
        children: t
      })
    }));
  }
  const Pv = [
    "resizable",
    "resizing",
    "height",
    "side"
  ];
  var Ls = (function(e) {
    return e.Left = "left", e.Right = "right", e;
  })(Ls || {});
  const Mv = (e) => {
    const { resizable: t, resizing: n, classes: o, side: r } = e, l = {
      root: [
        "columnSeparator",
        t && "columnSeparator--resizable",
        n && "columnSeparator--resizing",
        r && `columnSeparator--side${se(r)}`
      ],
      icon: [
        "iconSeparator"
      ]
    };
    return we(l, Oe, o);
  };
  function kv(e) {
    const { height: t, side: n = Ls.Right } = e, o = de(e, Pv), r = le(), l = g({}, e, {
      side: n,
      classes: r.classes
    }), s = Mv(l), a = u.useCallback((i) => {
      i.preventDefault(), i.stopPropagation();
    }, []);
    return b.jsx("div", g({
      className: s.root,
      style: {
        minHeight: t
      }
    }, o, {
      onClick: a,
      children: b.jsx(r.slots.columnResizeIcon, {
        className: s.icon
      })
    }));
  }
  const Ev = u.memo(kv), Fv = [
    "classes",
    "columnMenuOpen",
    "colIndex",
    "height",
    "isResizing",
    "sortDirection",
    "hasFocus",
    "tabIndex",
    "separatorSide",
    "isDraggable",
    "headerComponent",
    "description",
    "elementId",
    "width",
    "columnMenuIconButton",
    "columnMenu",
    "columnTitleIconButtons",
    "headerClassName",
    "label",
    "resizable",
    "draggableContainerProps",
    "columnHeaderSeparatorProps",
    "style"
  ], Cu = je(function(t, n) {
    const { classes: o, colIndex: r, height: l, isResizing: s, sortDirection: a, tabIndex: i, separatorSide: d, isDraggable: c, headerComponent: f, description: p, width: m, columnMenuIconButton: h = null, columnMenu: C = null, columnTitleIconButtons: x = null, headerClassName: M, label: v, resizable: O, draggableContainerProps: G, columnHeaderSeparatorProps: P, style: H } = t, R = de(t, Fv), T = le(), w = u.useRef(null), y = zt(w, n);
    let k = "none";
    return a != null && (k = a === "asc" ? "ascending" : "descending"), b.jsxs("div", g({
      className: pe(o.root, M),
      style: g({}, H, {
        height: l,
        width: m
      }),
      role: "columnheader",
      tabIndex: i,
      "aria-colindex": r + 1,
      "aria-sort": k
    }, R, {
      ref: y,
      children: [
        b.jsxs("div", g({
          className: o.draggableContainer,
          draggable: c,
          role: "presentation"
        }, G, {
          children: [
            b.jsxs("div", {
              className: o.titleContainer,
              role: "presentation",
              children: [
                b.jsx("div", {
                  className: o.titleContainerContent,
                  children: f !== void 0 ? f : b.jsx(Iv, {
                    label: v,
                    description: p,
                    columnWidth: m
                  })
                }),
                x
              ]
            }),
            h
          ]
        })),
        b.jsx(Ev, g({
          resizable: !T.disableColumnResize && !!O,
          resizing: s,
          height: l,
          side: d
        }, P)),
        C
      ]
    }));
  }), Tv = (e) => {
    const { colDef: t, classes: n, isDragging: o, sortDirection: r, showRightBorder: l, showLeftBorder: s, filterItemsCounter: a, pinnedPosition: i, isLastUnpinned: d, isSiblingFocused: c } = e, f = r != null, p = a != null && a > 0, m = t.type === "number", h = {
      root: [
        "columnHeader",
        t.headerAlign === "left" && "columnHeader--alignLeft",
        t.headerAlign === "center" && "columnHeader--alignCenter",
        t.headerAlign === "right" && "columnHeader--alignRight",
        t.sortable && "columnHeader--sortable",
        o && "columnHeader--moving",
        f && "columnHeader--sorted",
        p && "columnHeader--filtered",
        m && "columnHeader--numeric",
        "withBorderColor",
        l && "columnHeader--withRightBorder",
        s && "columnHeader--withLeftBorder",
        i === Ee.LEFT && "columnHeader--pinnedLeft",
        i === Ee.RIGHT && "columnHeader--pinnedRight",
        d && "columnHeader--lastUnpinned",
        c && "columnHeader--siblingFocused"
      ],
      draggableContainer: [
        "columnHeaderDraggableContainer"
      ],
      titleContainer: [
        "columnHeaderTitleContainer"
      ],
      titleContainerContent: [
        "columnHeaderTitleContainerContent"
      ]
    };
    return we(h, Oe, n);
  };
  function Ov(e) {
    var _a2, _b2, _c2;
    const { colDef: t, columnMenuOpen: n, colIndex: o, headerHeight: r, isResizing: l, isLast: s, sortDirection: a, sortIndex: i, filterItemsCounter: d, hasFocus: c, tabIndex: f, disableReorder: p, separatorSide: m, showLeftBorder: h, showRightBorder: C, pinnedPosition: x, pinnedOffset: M } = e, v = tn(), O = le(), G = $t(), P = u.useRef(null), H = Je(), R = Je(), T = u.useRef(null), [w, y] = u.useState(n), k = u.useMemo(() => !O.disableColumnReorder && !p && !t.disableReorder, [
      O.disableColumnReorder,
      p,
      t.disableReorder
    ]);
    let D;
    t.renderHeader && (D = t.renderHeader(v.current.getColumnHeaderParams(t.field)));
    const $ = g({}, e, {
      classes: O.classes,
      showRightBorder: C,
      showLeftBorder: h
    }), V = Tv($), E = u.useCallback((ee) => (te) => {
      Cr(te) || v.current.publishEvent(ee, v.current.getColumnHeaderParams(t.field), te);
    }, [
      v,
      t.field
    ]), S = u.useMemo(() => ({
      onClick: E("columnHeaderClick"),
      onContextMenu: E("columnHeaderContextMenu"),
      onDoubleClick: E("columnHeaderDoubleClick"),
      onMouseOver: E("columnHeaderOver"),
      onMouseOut: E("columnHeaderOut"),
      onMouseEnter: E("columnHeaderEnter"),
      onMouseLeave: E("columnHeaderLeave"),
      onKeyDown: E("columnHeaderKeyDown"),
      onFocus: E("columnHeaderFocus"),
      onBlur: E("columnHeaderBlur")
    }), [
      E
    ]), F = u.useMemo(() => k ? {
      onDragStart: E("columnHeaderDragStart"),
      onDragEnter: E("columnHeaderDragEnter"),
      onDragOver: E("columnHeaderDragOver"),
      onDragEnd: E("columnHeaderDragEnd")
    } : {}, [
      k,
      E
    ]), A = u.useMemo(() => ({
      onMouseDown: E("columnSeparatorMouseDown"),
      onDoubleClick: E("columnSeparatorDoubleClick")
    }), [
      E
    ]);
    u.useEffect(() => {
      w || y(n);
    }, [
      w,
      n
    ]);
    const z = u.useCallback(() => {
      y(false);
    }, []), j = !O.disableColumnMenu && !t.disableColumnMenu && b.jsx(ov, {
      colDef: t,
      columnMenuId: H,
      columnMenuButtonId: R,
      open: w,
      iconButtonRef: T
    }), L = b.jsx(rv, {
      columnMenuId: H,
      columnMenuButtonId: R,
      field: t.field,
      open: n,
      target: T.current,
      ContentComponent: O.slots.columnMenu,
      contentComponentProps: (_a2 = O.slotProps) == null ? void 0 : _a2.columnMenu,
      onExited: z
    }), N = t.sortingOrder ?? O.sortingOrder, W = (t.sortable || a != null) && !t.hideSortIcons && !O.disableColumnSorting, B = b.jsxs(u.Fragment, {
      children: [
        !O.disableColumnFilter && b.jsx(O.slots.columnHeaderFilterIconButton, g({
          field: t.field,
          counter: d
        }, (_b2 = O.slotProps) == null ? void 0 : _b2.columnHeaderFilterIconButton)),
        W && b.jsx(O.slots.columnHeaderSortIcon, g({
          field: t.field,
          direction: a,
          index: i,
          sortingOrder: N,
          disabled: !t.sortable
        }, (_c2 = O.slotProps) == null ? void 0 : _c2.columnHeaderSortIcon))
      ]
    });
    u.useLayoutEffect(() => {
      const ee = v.current.state.columnMenu;
      if (c && !ee.open) {
        const ae = P.current.querySelector('[tabindex="0"]') || P.current;
        if (!ae) return;
        if ($s()) ae.focus({
          preventScroll: true
        });
        else {
          const ve = v.current.getScrollPosition();
          ae.focus(), v.current.scroll(ve);
        }
      }
    }, [
      v,
      c
    ]);
    const U = typeof t.headerClassName == "function" ? t.headerClassName({
      field: t.field,
      colDef: t
    }) : t.headerClassName, K = t.headerName ?? t.field, ne = u.useMemo(() => il(g({}, e.style), G, x, M), [
      x,
      M,
      e.style,
      G
    ]);
    return b.jsx(Cu, g({
      ref: P,
      classes: V,
      columnMenuOpen: n,
      colIndex: o,
      height: r,
      isResizing: l,
      sortDirection: a,
      hasFocus: c,
      tabIndex: f,
      separatorSide: m,
      isDraggable: k,
      headerComponent: D,
      description: t.description,
      elementId: t.field,
      width: t.computedWidth,
      columnMenuIconButton: j,
      columnTitleIconButtons: B,
      headerClassName: pe(U, s && I["columnHeader--last"]),
      label: K,
      resizable: !O.disableColumnResize && !!t.resizable,
      "data-field": t.field,
      columnMenu: L,
      draggableContainerProps: F,
      columnHeaderSeparatorProps: A,
      style: ne
    }, S));
  }
  const Dv = In(Ov), $v = [
    "className"
  ], Hv = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "iconButtonContainer"
      ]
    }, Oe, t);
  }, Lv = Ye("div", {
    name: "MuiDataGrid",
    slot: "IconButtonContainer",
    overridesResolver: (e, t) => t.iconButtonContainer
  })(() => ({
    display: "flex",
    visibility: "hidden",
    width: 0
  })), wu = je(function(t, n) {
    const { className: o } = t, r = de(t, $v), l = le(), s = Hv(l);
    return b.jsx(Lv, g({
      className: pe(s.root, o),
      ownerState: l
    }, r, {
      ref: n
    }));
  }), Rv = [
    "direction",
    "index",
    "sortingOrder",
    "disabled",
    "className"
  ], Av = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "sortButton"
      ],
      icon: [
        "sortIcon"
      ]
    }, Oe, t);
  };
  function Gv(e, t, n, o) {
    let r;
    const l = {};
    return t === "asc" ? r = e.columnSortedAscendingIcon : t === "desc" ? r = e.columnSortedDescendingIcon : (r = e.columnUnsortedIcon, l.sortingOrder = o), r ? b.jsx(r, g({
      fontSize: "small",
      className: n
    }, l)) : null;
  }
  function zv(e) {
    var _a2;
    const { direction: t, index: n, sortingOrder: o, disabled: r, className: l } = e, s = de(e, Rv), a = Pe(), i = le(), d = g({}, e, {
      classes: i.classes
    }), c = Av(d), f = Gv(i.slots, t, c.icon, o);
    if (!f) return null;
    const p = b.jsx(i.slots.baseIconButton, g({
      tabIndex: -1,
      "aria-label": a.current.getLocaleText("columnHeaderSortIconLabel"),
      title: a.current.getLocaleText("columnHeaderSortIconLabel"),
      size: "small",
      disabled: r,
      className: pe(c.root, l)
    }, (_a2 = i.slotProps) == null ? void 0 : _a2.baseIconButton, s, {
      children: f
    }));
    return b.jsxs(wu, {
      children: [
        n != null && b.jsx(i.slots.baseBadge, {
          badgeContent: n,
          color: "default",
          overlap: "circular",
          children: p
        }),
        n == null && p
      ]
    });
  }
  const jv = u.memo(zv), Vv = (e) => {
    const { classes: t } = e;
    return we({
      icon: [
        "filterIcon"
      ]
    }, Oe, t);
  };
  function Nv(e) {
    return e.counter ? b.jsx(_v, g({}, e)) : null;
  }
  function _v(e) {
    var _a2, _b2;
    const { counter: t, field: n, onClick: o } = e, r = Pe(), l = le(), s = g({}, e, {
      classes: l.classes
    }), a = Vv(s), i = Je(), d = Zo(r, lw, i), c = Je(), f = u.useCallback((m) => {
      m.preventDefault(), m.stopPropagation();
      const { open: h, openedPanelValue: C } = nr(r.current.state);
      h && C === Kn.filters ? r.current.hideFilterPanel() : r.current.showFilterPanel(void 0, c, i), o && o(r.current.getColumnHeaderParams(n), m);
    }, [
      r,
      n,
      o,
      c,
      i
    ]);
    if (!t) return null;
    const p = b.jsx(l.slots.baseIconButton, g({
      id: i,
      onClick: f,
      color: "default",
      "aria-label": r.current.getLocaleText("columnHeaderFiltersLabel"),
      size: "small",
      tabIndex: -1,
      "aria-haspopup": "menu",
      "aria-expanded": d,
      "aria-controls": d ? c : void 0
    }, (_a2 = l.slotProps) == null ? void 0 : _a2.baseIconButton, {
      children: b.jsx(l.slots.columnFilteredIcon, {
        className: a.icon,
        fontSize: "small"
      })
    }));
    return b.jsx(l.slots.baseTooltip, g({
      title: r.current.getLocaleText("columnHeaderFiltersTooltipActive")(t),
      enterDelay: 1e3
    }, (_b2 = l.slotProps) == null ? void 0 : _b2.baseTooltip, {
      children: b.jsxs(wu, {
        children: [
          t > 1 && b.jsx(l.slots.baseBadge, {
            badgeContent: t,
            color: "default",
            children: p
          }),
          t === 1 && p
        ]
      })
    }));
  }
  const Ji = Le(b.jsx("path", {
    d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
  }), "ArrowUpward"), Zi = Le(b.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward"), ea = Le(b.jsx("path", {
    d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), "KeyboardArrowRight"), ta = Le(b.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"), Bv = Le(b.jsx("path", {
    d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
  }), "FilterList"), na = Le(b.jsx("path", {
    d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"
  }), "FilterAlt"), Wv = Le(b.jsx("path", {
    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }), "Search");
  Le(b.jsx("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }), "Menu");
  Le(b.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckCircle");
  const Uv = Le(b.jsx("path", {
    d: "M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
  }), "ColumnIcon"), Kv = Le(b.jsx("rect", {
    width: "1",
    height: "24",
    x: "11.5",
    rx: "0.5"
  }), "Separator"), qv = Le(b.jsx("path", {
    d: "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"
  }), "ViewHeadline"), Yv = Le(b.jsx("path", {
    d: "M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"
  }), "TableRows"), Xv = Le(b.jsx("path", {
    d: "M4 18h17v-6H4v6zM4 5v6h17V5H4z"
  }), "ViewStream"), Qv = Le(b.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "TripleDotsVertical"), Il = Le(b.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close"), oa = Le(b.jsx("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
  }), "Add"), Jv = Le(b.jsx("path", {
    d: "M19 13H5v-2h14v2z"
  }), "Remove"), Zv = Le(b.jsx("path", {
    d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
  }), "Load"), ra = Le(b.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "Drag"), ex = Le(b.jsx("path", {
    d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
  }), "SaveAlt"), tx = Le(b.jsx("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check"), nx = Le(b.jsx("path", {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
  }), "MoreVert"), ox = Le(b.jsx("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
  }), "VisibilityOff"), rx = Le(b.jsx("g", {
    children: b.jsx("path", {
      d: "M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z"
    })
  }), "ViewColumn"), lx = Le(b.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear");
  Le(b.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
  }), "Delete");
  const sx = Le(b.jsx("path", {
    d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
  }), "Delete");
  function vu(e) {
    return e.key.length === 1 && !e.ctrlKey && !e.metaKey;
  }
  const Wr = (e) => e.indexOf("Arrow") === 0 || e.indexOf("Page") === 0 || e === " " || e === "Home" || e === "End", ix = (e) => !!e.key, xu = (e) => e === "Tab" || e === "Escape";
  function yu(e) {
    return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "V" && !e.shiftKey && !e.altKey;
  }
  function ax(e) {
    return (e.ctrlKey || e.metaKey) && String.fromCharCode(e.keyCode) === "C" && !e.shiftKey && !e.altKey;
  }
  const cx = [
    "hideMenu",
    "colDef",
    "id",
    "labelledby",
    "className",
    "children",
    "open"
  ], ux = ge(os)(() => ({
    minWidth: 248
  })), dx = je(function(t, n) {
    const { hideMenu: o, id: r, labelledby: l, className: s, children: a, open: i } = t, d = de(t, cx), c = u.useCallback((f) => {
      f.key === "Tab" && f.preventDefault(), xu(f.key) && o(f);
    }, [
      o
    ]);
    return b.jsx(ux, g({
      id: r,
      className: pe(I.menuList, s),
      "aria-labelledby": l,
      onKeyDown: c,
      autoFocus: i
    }, d, {
      ref: n,
      children: a
    }));
  }), fx = [
    "displayOrder"
  ], px = (e) => {
    const t = tn(), n = le(), { defaultSlots: o, defaultSlotProps: r, slots: l = {}, slotProps: s = {}, hideMenu: a, colDef: i, addDividers: d = true } = e, c = u.useMemo(() => g({}, o, l), [
      o,
      l
    ]), f = u.useMemo(() => {
      if (!s || Object.keys(s).length === 0) return r;
      const h = g({}, s);
      return Object.entries(r).forEach(([C, x]) => {
        h[C] = g({}, x, s[C] || {});
      }), h;
    }, [
      r,
      s
    ]), p = t.current.unstable_applyPipeProcessors("columnMenu", [], e.colDef), m = u.useMemo(() => {
      const h = Object.keys(o);
      return Object.keys(l).filter((C) => !h.includes(C));
    }, [
      l,
      o
    ]);
    return u.useMemo(() => {
      const x = Array.from(/* @__PURE__ */ new Set([
        ...p,
        ...m
      ])).filter((M) => c[M] != null).sort((M, v) => {
        const O = f[M], G = f[v], P = Number.isFinite(O == null ? void 0 : O.displayOrder) ? O.displayOrder : 100, H = Number.isFinite(G == null ? void 0 : G.displayOrder) ? G.displayOrder : 100;
        return P - H;
      });
      return x.reduce((M, v, O) => {
        let G = {
          colDef: i,
          onClick: a
        };
        const P = f[v];
        if (P) {
          const H = de(P, fx);
          G = g({}, G, H);
        }
        return d && O !== x.length - 1 ? [
          ...M,
          [
            c[v],
            G
          ],
          [
            n.slots.baseDivider,
            {}
          ]
        ] : [
          ...M,
          [
            c[v],
            G
          ]
        ];
      }, []);
    }, [
      d,
      i,
      p,
      a,
      c,
      f,
      m,
      n.slots.baseDivider
    ]);
  };
  function gx(e) {
    const { colDef: t, onClick: n } = e, o = Pe(), r = le(), a = ot(o).filter((d) => d.disableColumnMenu !== true).length === 1, i = u.useCallback((d) => {
      a || (o.current.setColumnVisibility(t.field, false), n(d));
    }, [
      o,
      t.field,
      n,
      a
    ]);
    return r.disableColumnSelector || t.hideable === false ? null : b.jsxs(At, {
      onClick: i,
      disabled: a,
      children: [
        b.jsx(po, {
          children: b.jsx(r.slots.columnMenuHideIcon, {
            fontSize: "small"
          })
        }),
        b.jsx(fo, {
          children: o.current.getLocaleText("columnMenuHideColumn")
        })
      ]
    });
  }
  function hx(e) {
    const { onClick: t } = e, n = Pe(), o = le(), r = u.useCallback((l) => {
      t(l), n.current.showPreferences(Kn.columns);
    }, [
      n,
      t
    ]);
    return o.disableColumnSelector ? null : b.jsxs(At, {
      onClick: r,
      children: [
        b.jsx(po, {
          children: b.jsx(o.slots.columnMenuManageColumnsIcon, {
            fontSize: "small"
          })
        }),
        b.jsx(fo, {
          children: n.current.getLocaleText("columnMenuManageColumns")
        })
      ]
    });
  }
  function mx(e) {
    return b.jsxs(u.Fragment, {
      children: [
        b.jsx(gx, g({}, e)),
        b.jsx(hx, g({}, e))
      ]
    });
  }
  function bx(e) {
    const { colDef: t, onClick: n } = e, o = Pe(), r = le(), l = u.useCallback((s) => {
      n(s), o.current.showFilterPanel(t.field);
    }, [
      o,
      t.field,
      n
    ]);
    return r.disableColumnFilter || !t.filterable ? null : b.jsxs(At, {
      onClick: l,
      children: [
        b.jsx(po, {
          children: b.jsx(r.slots.columnMenuFilterIcon, {
            fontSize: "small"
          })
        }),
        b.jsx(fo, {
          children: o.current.getLocaleText("columnMenuFilter")
        })
      ]
    });
  }
  function Cx(e) {
    const { colDef: t, onClick: n } = e, o = Pe(), r = Q(o, on), l = le(), s = u.useMemo(() => {
      var _a2;
      return t ? (_a2 = r.find((f) => f.field === t.field)) == null ? void 0 : _a2.sort : null;
    }, [
      t,
      r
    ]), a = t.sortingOrder ?? l.sortingOrder, i = u.useCallback((c) => {
      n(c);
      const f = c.currentTarget.getAttribute("data-value") || null;
      o.current.sortColumn(t.field, f === s ? null : f);
    }, [
      o,
      t,
      n,
      s
    ]);
    if (l.disableColumnSorting || !t || !t.sortable || !a.some((c) => !!c)) return null;
    const d = (c) => {
      const f = o.current.getLocaleText(c);
      return typeof f == "function" ? f(t) : f;
    };
    return b.jsxs(u.Fragment, {
      children: [
        a.includes("asc") && s !== "asc" ? b.jsxs(At, {
          onClick: i,
          "data-value": "asc",
          children: [
            b.jsx(po, {
              children: b.jsx(l.slots.columnMenuSortAscendingIcon, {
                fontSize: "small"
              })
            }),
            b.jsx(fo, {
              children: d("columnMenuSortAsc")
            })
          ]
        }) : null,
        a.includes("desc") && s !== "desc" ? b.jsxs(At, {
          onClick: i,
          "data-value": "desc",
          children: [
            b.jsx(po, {
              children: b.jsx(l.slots.columnMenuSortDescendingIcon, {
                fontSize: "small"
              })
            }),
            b.jsx(fo, {
              children: d("columnMenuSortDesc")
            })
          ]
        }) : null,
        a.includes(null) && s != null ? b.jsxs(At, {
          onClick: i,
          children: [
            b.jsx(po, {}),
            b.jsx(fo, {
              children: o.current.getLocaleText("columnMenuUnsort")
            })
          ]
        }) : null
      ]
    });
  }
  const wx = [
    "defaultSlots",
    "defaultSlotProps",
    "slots",
    "slotProps"
  ], vx = {
    columnMenuSortItem: Cx,
    columnMenuFilterItem: bx,
    columnMenuColumnsItem: mx
  }, xx = {
    columnMenuSortItem: {
      displayOrder: 10
    },
    columnMenuFilterItem: {
      displayOrder: 20
    },
    columnMenuColumnsItem: {
      displayOrder: 30
    }
  }, yx = je(function(t, n) {
    const { defaultSlots: o, defaultSlotProps: r, slots: l, slotProps: s } = t, a = de(t, wx), i = px(g({}, a, {
      defaultSlots: o,
      defaultSlotProps: r,
      slots: l,
      slotProps: s
    }));
    return b.jsx(dx, g({}, a, {
      ref: n,
      children: i.map(([d, c], f) => b.jsx(d, g({}, c), f))
    }));
  }), Sx = je(function(t, n) {
    return b.jsx(yx, g({}, t, {
      ref: n,
      defaultSlots: vx,
      defaultSlotProps: xx
    }));
  }), Ix = [
    "className",
    "slotProps"
  ], Px = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "panelWrapper"
      ]
    }, Oe, t);
  }, Mx = ge("div", {
    name: "MuiDataGrid",
    slot: "PanelWrapper",
    overridesResolver: (e, t) => t.panelWrapper
  })({
    display: "flex",
    flexDirection: "column",
    flex: 1,
    "&:focus": {
      outline: 0
    }
  }), kx = () => true, Su = je(function(t, n) {
    const { className: o, slotProps: r = {} } = t, l = de(t, Ix), s = le(), a = Px(s);
    return b.jsx(Xu, g({
      open: true,
      disableEnforceFocus: true,
      isEnabled: kx
    }, r.TrapFocus, {
      children: b.jsx(Mx, g({
        tabIndex: -1,
        className: pe(a.root, o),
        ownerState: s
      }, l, {
        ref: n
      }))
    }));
  });
  function Ex(e) {
    var _a2;
    const t = le();
    return b.jsx(Su, g({}, e, {
      children: b.jsx(t.slots.columnsManagement, g({}, (_a2 = t.slotProps) == null ? void 0 : _a2.columnsManagement))
    }));
  }
  const Fx = [
    "children",
    "className",
    "classes"
  ], Tx = Mt("MuiDataGrid", [
    "panel",
    "paper"
  ]), Ox = ge(Yn, {
    name: "MuiDataGrid",
    slot: "Panel",
    overridesResolver: (e, t) => t.panel
  })(({ theme: e }) => ({
    zIndex: e.zIndex.modal
  })), Dx = ge(lr, {
    name: "MuiDataGrid",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    minWidth: 300,
    maxHeight: 450,
    display: "flex",
    maxWidth: `calc(100vw - ${e.spacing(0.5)})`,
    overflow: "auto"
  })), $x = je((e, t) => {
    const { children: n, className: o } = e, r = de(e, Fx), l = Pe(), s = le(), a = Tx, [i, d] = u.useState(false), c = u.useCallback(() => {
      l.current.hidePreferences();
    }, [
      l
    ]), f = u.useCallback((C) => {
      C.key === "Escape" && l.current.hidePreferences();
    }, [
      l
    ]), p = u.useMemo(() => [
      {
        name: "flip",
        enabled: true,
        options: {
          rootBoundary: "document"
        }
      },
      {
        name: "isPlaced",
        enabled: true,
        phase: "main",
        fn: () => {
          d(true);
        },
        effect: () => () => {
          d(false);
        }
      }
    ], []), [m, h] = u.useState(null);
    return u.useEffect(() => {
      var _a2, _b2;
      const C = (_b2 = (_a2 = l.current.rootElementRef) == null ? void 0 : _a2.current) == null ? void 0 : _b2.querySelector('[data-id="gridPanelAnchor"]');
      C && h(C);
    }, [
      l
    ]), m ? b.jsx(Ox, g({
      placement: "bottom-start",
      className: pe(a.panel, o),
      ownerState: s,
      anchorEl: m,
      modifiers: p
    }, r, {
      ref: t,
      children: b.jsx(Ua, {
        mouseEvent: "onPointerUp",
        touchEvent: false,
        onClickAway: c,
        children: b.jsx(Dx, {
          className: a.paper,
          ownerState: s,
          elevation: 8,
          onKeyDown: f,
          children: i && n
        })
      })
    })) : null;
  }), Hx = [
    "className"
  ], Lx = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "panelContent"
      ]
    }, Oe, t);
  }, Rx = Ye("div", {
    name: "MuiDataGrid",
    slot: "PanelContent",
    overridesResolver: (e, t) => t.panelContent
  })({
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    flex: "1 1",
    maxHeight: 400
  });
  function Ax(e) {
    const { className: t } = e, n = de(e, Hx), o = le(), r = Lx(o);
    return b.jsx(Rx, g({
      className: pe(r.root, t),
      ownerState: o
    }, n));
  }
  const Gx = [
    "className"
  ], zx = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "panelFooter"
      ]
    }, Oe, t);
  }, jx = Ye("div", {
    name: "MuiDataGrid",
    slot: "PanelFooter",
    overridesResolver: (e, t) => t.panelFooter
  })(({ theme: e }) => ({
    padding: e.spacing(0.5),
    display: "flex",
    justifyContent: "space-between"
  }));
  function Vx(e) {
    const { className: t } = e, n = de(e, Gx), o = le(), r = zx(o);
    return b.jsx(jx, g({
      className: pe(r.root, t),
      ownerState: o
    }, n));
  }
  const Nx = [
    "item",
    "hasMultipleFilters",
    "deleteFilter",
    "applyFilterChanges",
    "showMultiFilterOperators",
    "disableMultiFilterOperator",
    "applyMultiFilterOperatorChanges",
    "focusElementRef",
    "logicOperators",
    "columnsSort",
    "filterColumns",
    "deleteIconProps",
    "logicOperatorInputProps",
    "operatorInputProps",
    "columnInputProps",
    "valueInputProps",
    "readOnly",
    "children"
  ], _x = [
    "InputComponentProps"
  ], Bx = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "filterForm"
      ],
      deleteIcon: [
        "filterFormDeleteIcon"
      ],
      logicOperatorInput: [
        "filterFormLogicOperatorInput"
      ],
      columnInput: [
        "filterFormColumnInput"
      ],
      operatorInput: [
        "filterFormOperatorInput"
      ],
      valueInput: [
        "filterFormValueInput"
      ]
    }, Oe, t);
  }, Wx = ge("div", {
    name: "MuiDataGrid",
    slot: "FilterForm",
    overridesResolver: (e, t) => t.filterForm
  })(({ theme: e }) => ({
    display: "flex",
    padding: e.spacing(1)
  })), Ux = ge("div", {
    name: "MuiDataGrid",
    slot: "FilterFormDeleteIcon",
    overridesResolver: (e, t) => t.filterFormDeleteIcon
  })(({ theme: e }) => ({
    flexShrink: 0,
    justifyContent: "flex-end",
    marginRight: e.spacing(0.5),
    marginBottom: e.spacing(0.2)
  })), Kx = ge("div", {
    name: "MuiDataGrid",
    slot: "FilterFormLogicOperatorInput",
    overridesResolver: (e, t) => t.filterFormLogicOperatorInput
  })({
    minWidth: 55,
    marginRight: 5,
    justifyContent: "end"
  }), qx = ge("div", {
    name: "MuiDataGrid",
    slot: "FilterFormColumnInput",
    overridesResolver: (e, t) => t.filterFormColumnInput
  })({
    width: 150
  }), Yx = ge("div", {
    name: "MuiDataGrid",
    slot: "FilterFormOperatorInput",
    overridesResolver: (e, t) => t.filterFormOperatorInput
  })({
    width: 150
  }), Xx = ge("div", {
    name: "MuiDataGrid",
    slot: "FilterFormValueInput",
    overridesResolver: (e, t) => t.filterFormValueInput
  })({
    width: 190
  }), Qx = (e) => {
    switch (e) {
      case Pt.And:
        return "filterPanelOperatorAnd";
      case Pt.Or:
        return "filterPanelOperatorOr";
      default:
        throw new Error("MUI X: Invalid `logicOperator` property in the `GridFilterPanel`.");
    }
  }, Vo = (e) => e.headerName || e.field, la = new Intl.Collator(), sa = je(function(t, n) {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2;
    const { item: o, hasMultipleFilters: r, deleteFilter: l, applyFilterChanges: s, showMultiFilterOperators: a, disableMultiFilterOperator: i, applyMultiFilterOperatorChanges: d, focusElementRef: c, logicOperators: f = [
      Pt.And,
      Pt.Or
    ], columnsSort: p, filterColumns: m, deleteIconProps: h = {}, logicOperatorInputProps: C = {}, operatorInputProps: x = {}, columnInputProps: M = {}, valueInputProps: v = {}, readOnly: O } = t, G = de(t, Nx), P = Pe(), H = Q(P, Pn), R = Q(P, yc), T = Q(P, ht), w = Je(), y = Je(), k = Je(), D = Je(), $ = le(), V = Bx($), E = u.useRef(null), S = u.useRef(null), F = T.logicOperator ?? Pt.And, A = r && f.length > 0, z = ((_a2 = $.slotProps) == null ? void 0 : _a2.baseFormControl) || {}, L = (((_b2 = $.slotProps) == null ? void 0 : _b2.baseSelect) || {}).native ?? false, N = ((_c2 = $.slotProps) == null ? void 0 : _c2.baseInputLabel) || {}, W = ((_d2 = $.slotProps) == null ? void 0 : _d2.baseSelectOption) || {}, { InputComponentProps: B } = v, U = de(v, _x), { filteredColumns: K, selectedField: ne } = u.useMemo(() => {
      let J = o.field;
      const ye = H[o.field].filterable === false ? H[o.field] : null;
      if (ye) return {
        filteredColumns: [
          ye
        ],
        selectedField: J
      };
      if (m === void 0 || typeof m != "function") return {
        filteredColumns: R,
        selectedField: J
      };
      const Z = m({
        field: o.field,
        columns: R,
        currentFilters: (T == null ? void 0 : T.items) || []
      });
      return {
        filteredColumns: R.filter((Ce) => {
          const me = Z.includes(Ce.field);
          return Ce.field === o.field && !me && (J = void 0), me;
        }),
        selectedField: J
      };
    }, [
      m,
      T == null ? void 0 : T.items,
      R,
      o.field,
      H
    ]), ee = u.useMemo(() => {
      switch (p) {
        case "asc":
          return K.sort((J, ye) => la.compare(Vo(J), Vo(ye)));
        case "desc":
          return K.sort((J, ye) => -la.compare(Vo(J), Vo(ye)));
        default:
          return K;
      }
    }, [
      K,
      p
    ]), te = o.field ? P.current.getColumn(o.field) : null, ae = u.useMemo(() => {
      var _a3;
      return !o.operator || !te ? null : (_a3 = te.filterOperators) == null ? void 0 : _a3.find((J) => J.value === o.operator);
    }, [
      o,
      te
    ]), ve = u.useCallback((J) => {
      const ye = J.target.value, Z = P.current.getColumn(ye);
      if (Z.field === te.field) return;
      const Ce = Z.filterOperators.find((Ve) => Ve.value === o.operator) || Z.filterOperators[0];
      let Me = !Ce.InputComponent || Ce.InputComponent !== (ae == null ? void 0 : ae.InputComponent) || Z.type !== te.type ? void 0 : o.value;
      if (Z.type === "singleSelect" && Me !== void 0) {
        const Ve = Z, Ne = Un(Ve);
        Array.isArray(Me) ? Me = Me.filter((Ae) => Vr(Ae, Ne, Ve == null ? void 0 : Ve.getOptionValue) !== void 0) : Vr(o.value, Ne, Ve == null ? void 0 : Ve.getOptionValue) === void 0 && (Me = void 0);
      }
      s(g({}, o, {
        field: ye,
        operator: Ce.value,
        value: Me
      }));
    }, [
      P,
      s,
      o,
      te,
      ae
    ]), Y = u.useCallback((J) => {
      const ye = J.target.value, Z = te == null ? void 0 : te.filterOperators.find((me) => me.value === ye), Ce = !(Z == null ? void 0 : Z.InputComponent) || (Z == null ? void 0 : Z.InputComponent) !== (ae == null ? void 0 : ae.InputComponent);
      s(g({}, o, {
        operator: ye,
        value: Ce ? void 0 : o.value
      }));
    }, [
      s,
      o,
      te,
      ae
    ]), re = u.useCallback((J) => {
      const ye = J.target.value === Pt.And.toString() ? Pt.And : Pt.Or;
      d(ye);
    }, [
      d
    ]), xe = () => {
      l(o);
    };
    return u.useImperativeHandle(c, () => ({
      focus: () => {
        var _a3;
        (ae == null ? void 0 : ae.InputComponent) ? (_a3 = E == null ? void 0 : E.current) == null ? void 0 : _a3.focus() : S.current.focus();
      }
    }), [
      ae
    ]), b.jsxs(Wx, g({
      className: V.root,
      "data-id": o.id,
      ownerState: $
    }, G, {
      ref: n,
      children: [
        b.jsx(Ux, g({
          variant: "standard",
          as: $.slots.baseFormControl
        }, z, h, {
          className: pe(V.deleteIcon, z.className, h.className),
          ownerState: $,
          children: b.jsx($.slots.baseIconButton, g({
            "aria-label": P.current.getLocaleText("filterPanelDeleteIconLabel"),
            title: P.current.getLocaleText("filterPanelDeleteIconLabel"),
            onClick: xe,
            size: "small",
            disabled: O
          }, (_e = $.slotProps) == null ? void 0 : _e.baseIconButton, {
            children: b.jsx($.slots.filterPanelDeleteIcon, {
              fontSize: "small"
            })
          }))
        })),
        b.jsx(Kx, g({
          variant: "standard",
          as: $.slots.baseFormControl
        }, z, C, {
          sx: [
            A ? {
              display: "flex"
            } : {
              display: "none"
            },
            a ? {
              visibility: "visible"
            } : {
              visibility: "hidden"
            },
            z.sx,
            C.sx
          ],
          className: pe(V.logicOperatorInput, z.className, C.className),
          ownerState: $,
          children: b.jsx($.slots.baseSelect, g({
            inputProps: {
              "aria-label": P.current.getLocaleText("filterPanelLogicOperator")
            },
            value: F ?? "",
            onChange: re,
            disabled: !!i || f.length === 1,
            native: L
          }, (_f2 = $.slotProps) == null ? void 0 : _f2.baseSelect, {
            children: f.map((J) => u.createElement($.slots.baseSelectOption, g({}, W, {
              native: L,
              key: J.toString(),
              value: J.toString()
            }), P.current.getLocaleText(Qx(J))))
          }))
        })),
        b.jsxs(qx, g({
          variant: "standard",
          as: $.slots.baseFormControl
        }, z, M, {
          className: pe(V.columnInput, z.className, M.className),
          ownerState: $,
          children: [
            b.jsx($.slots.baseInputLabel, g({}, N, {
              htmlFor: w,
              id: y,
              children: P.current.getLocaleText("filterPanelColumns")
            })),
            b.jsx($.slots.baseSelect, g({
              labelId: y,
              id: w,
              label: P.current.getLocaleText("filterPanelColumns"),
              value: ne ?? "",
              onChange: ve,
              native: L,
              disabled: O
            }, (_g2 = $.slotProps) == null ? void 0 : _g2.baseSelect, {
              children: ee.map((J) => u.createElement($.slots.baseSelectOption, g({}, W, {
                native: L,
                key: J.field,
                value: J.field
              }), Vo(J)))
            }))
          ]
        })),
        b.jsxs(Yx, g({
          variant: "standard",
          as: $.slots.baseFormControl
        }, z, x, {
          className: pe(V.operatorInput, z.className, x.className),
          ownerState: $,
          children: [
            b.jsx($.slots.baseInputLabel, g({}, N, {
              htmlFor: k,
              id: D,
              children: P.current.getLocaleText("filterPanelOperator")
            })),
            b.jsx($.slots.baseSelect, g({
              labelId: D,
              label: P.current.getLocaleText("filterPanelOperator"),
              id: k,
              value: o.operator,
              onChange: Y,
              native: L,
              inputRef: S,
              disabled: O
            }, (_h2 = $.slotProps) == null ? void 0 : _h2.baseSelect, {
              children: (_i2 = te == null ? void 0 : te.filterOperators) == null ? void 0 : _i2.map((J) => u.createElement($.slots.baseSelectOption, g({}, W, {
                native: L,
                key: J.value,
                value: J.value
              }), J.label || P.current.getLocaleText(`filterOperator${se(J.value)}`)))
            }))
          ]
        })),
        b.jsx(Xx, g({
          variant: "standard",
          as: $.slots.baseFormControl
        }, z, U, {
          className: pe(V.valueInput, z.className, U.className),
          ownerState: $,
          children: (ae == null ? void 0 : ae.InputComponent) ? b.jsx(ae.InputComponent, g({
            apiRef: P,
            item: o,
            applyValue: s,
            focusElementRef: E,
            disabled: O
          }, ae.InputComponentProps, B), o.field) : null
        }))
      ]
    }));
  }), Jx = [
    "logicOperators",
    "columnsSort",
    "filterFormProps",
    "getColumnForNewFilter",
    "children",
    "disableAddFilterButton",
    "disableRemoveAllButton"
  ], ia = (e) => ({
    field: e.field,
    operator: e.filterOperators[0].value,
    id: Math.round(Math.random() * 1e5)
  }), Zx = je(function(t, n) {
    var _a2, _b2;
    const o = Pe(), r = le(), l = Q(o, ht), s = Q(o, yc), a = Q(o, im), i = u.useRef(null), d = u.useRef(null), { logicOperators: c = [
      Pt.And,
      Pt.Or
    ], columnsSort: f, filterFormProps: p, getColumnForNewFilter: m, disableAddFilterButton: h = false, disableRemoveAllButton: C = false } = t, x = de(t, Jx), M = o.current.upsertFilterItem, v = u.useCallback((D) => {
      o.current.setFilterLogicOperator(D);
    }, [
      o
    ]), O = u.useCallback(() => {
      let D;
      if (m && typeof m == "function") {
        const $ = m({
          currentFilters: (l == null ? void 0 : l.items) || [],
          columns: s
        });
        if ($ === null) return null;
        D = s.find(({ field: V }) => V === $);
      } else D = s.find(($) => {
        var _a3;
        return (_a3 = $.filterOperators) == null ? void 0 : _a3.length;
      });
      return D ? ia(D) : null;
    }, [
      l == null ? void 0 : l.items,
      s,
      m
    ]), G = u.useCallback(() => {
      if (m === void 0 || typeof m != "function") return O();
      const D = l.items.length ? l.items : [
        O()
      ].filter(Boolean), $ = m({
        currentFilters: D,
        columns: s
      });
      if ($ === null) return null;
      const V = s.find(({ field: E }) => E === $);
      return V ? ia(V) : null;
    }, [
      l.items,
      s,
      m,
      O
    ]), P = u.useMemo(() => l.items.length ? l.items : (d.current || (d.current = O()), d.current ? [
      d.current
    ] : []), [
      l.items,
      O
    ]), H = P.length > 1, { readOnlyFilters: R, validFilters: T } = u.useMemo(() => P.reduce((D, $) => (a[$.field] ? D.validFilters.push($) : D.readOnlyFilters.push($), D), {
      readOnlyFilters: [],
      validFilters: []
    }), [
      P,
      a
    ]), w = u.useCallback(() => {
      const D = G();
      D && o.current.upsertFilterItems([
        ...P,
        D
      ]);
    }, [
      o,
      G,
      P
    ]), y = u.useCallback((D) => {
      const $ = T.length === 1;
      o.current.deleteFilterItem(D), $ && o.current.hideFilterPanel();
    }, [
      o,
      T.length
    ]), k = u.useCallback(() => T.length === 1 && T[0].value === void 0 ? (o.current.deleteFilterItem(T[0]), o.current.hideFilterPanel()) : o.current.setFilterModel(g({}, l, {
      items: R
    }), "removeAllFilterItems"), [
      o,
      R,
      l,
      T
    ]);
    return u.useEffect(() => {
      c.length > 0 && l.logicOperator && !c.includes(l.logicOperator) && v(c[0]);
    }, [
      c,
      v,
      l.logicOperator
    ]), u.useEffect(() => {
      T.length > 0 && i.current.focus();
    }, [
      T.length
    ]), b.jsxs(Su, g({}, x, {
      ref: n,
      children: [
        b.jsxs(Ax, {
          children: [
            R.map((D, $) => b.jsx(sa, g({
              item: D,
              applyFilterChanges: M,
              deleteFilter: y,
              hasMultipleFilters: H,
              showMultiFilterOperators: $ > 0,
              disableMultiFilterOperator: $ !== 1,
              applyMultiFilterOperatorChanges: v,
              focusElementRef: null,
              readOnly: true,
              logicOperators: c,
              columnsSort: f
            }, p), D.id == null ? $ : D.id)),
            T.map((D, $) => b.jsx(sa, g({
              item: D,
              applyFilterChanges: M,
              deleteFilter: y,
              hasMultipleFilters: H,
              showMultiFilterOperators: R.length + $ > 0,
              disableMultiFilterOperator: R.length + $ !== 1,
              applyMultiFilterOperatorChanges: v,
              focusElementRef: $ === T.length - 1 ? i : null,
              logicOperators: c,
              columnsSort: f
            }, p), D.id == null ? $ + R.length : D.id))
          ]
        }),
        !r.disableMultipleColumnsFiltering && !(h && C) ? b.jsxs(Vx, {
          children: [
            h ? b.jsx("span", {}) : b.jsx(r.slots.baseButton, g({
              onClick: w,
              startIcon: b.jsx(r.slots.filterPanelAddIcon, {})
            }, (_a2 = r.slotProps) == null ? void 0 : _a2.baseButton, {
              children: o.current.getLocaleText("filterPanelAddFilter")
            })),
            !C && T.length > 0 ? b.jsx(r.slots.baseButton, g({
              onClick: k,
              startIcon: b.jsx(r.slots.filterPanelRemoveAllIcon, {})
            }, (_b2 = r.slotProps) == null ? void 0 : _b2.baseButton, {
              children: o.current.getLocaleText("filterPanelRemoveAll")
            })) : null
          ]
        }) : null
      ]
    }));
  }), ey = (e, t) => {
    const n = new Set(Object.keys(e).filter((l) => e[l] === false)), o = new Set(Object.keys(t).filter((l) => t[l] === false));
    if (n.size !== o.size) return false;
    let r = true;
    return n.forEach((l) => {
      o.has(l) || (r = false);
    }), r;
  }, ty = (e, t) => (e.headerName || e.field).toLowerCase().indexOf(t) > -1, ny = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "columnsManagement"
      ],
      header: [
        "columnsManagementHeader"
      ],
      searchInput: [
        "columnsManagementSearchInput"
      ],
      footer: [
        "columnsManagementFooter"
      ],
      row: [
        "columnsManagementRow"
      ]
    }, Oe, t);
  }, aa = new Intl.Collator();
  function oy(e) {
    var _a2, _b2, _c2, _d2;
    const t = Pe(), n = u.useRef(null), o = Q(t, Qt), r = bn(() => Kt(t)).current, l = Q(t, Kt), s = le(), [a, i] = u.useState(""), d = ny(s), { sort: c, searchPredicate: f = ty, autoFocusSearchField: p = true, disableShowHideToggle: m = false, disableResetButton: h = false, toggleAllMode: C = "all", getTogglableColumns: x, searchInputProps: M } = e, v = u.useMemo(() => ey(l, r), [
      l,
      r
    ]), O = u.useMemo(() => {
      switch (c) {
        case "asc":
          return [
            ...o
          ].sort((E, S) => aa.compare(E.headerName || E.field, S.headerName || S.field));
        case "desc":
          return [
            ...o
          ].sort((E, S) => -aa.compare(E.headerName || E.field, S.headerName || S.field));
        default:
          return o;
      }
    }, [
      o,
      c
    ]), G = (E) => {
      const { name: S } = E.target;
      t.current.setColumnVisibility(S, l[S] === false);
    }, P = u.useMemo(() => {
      const E = x ? x(O) : null, S = E ? O.filter(({ field: F }) => E.includes(F)) : O;
      return a ? S.filter((F) => f(F, a.toLowerCase())) : S;
    }, [
      O,
      a,
      f,
      x
    ]), H = u.useCallback((E) => {
      const S = Kt(t), F = g({}, S), A = x ? x(o) : null;
      return (C === "filteredOnly" ? P : o).forEach((z) => {
        z.hideable && (A == null || A.includes(z.field)) && (E ? delete F[z.field] : F[z.field] = false);
      }), t.current.setColumnVisibilityModel(F);
    }, [
      t,
      o,
      x,
      C,
      P
    ]), R = u.useCallback((E) => {
      i(E.target.value);
    }, []), T = u.useMemo(() => P.filter((E) => E.hideable), [
      P
    ]), w = u.useMemo(() => T.every((E) => l[E.field] == null || l[E.field] !== false), [
      l,
      T
    ]), y = u.useMemo(() => T.every((E) => l[E.field] === false), [
      l,
      T
    ]), k = u.useRef(null);
    u.useEffect(() => {
      p ? n.current.focus() : k.current && typeof k.current.focus == "function" && k.current.focus();
    }, [
      p
    ]);
    let D = false;
    const $ = (E) => D === false && E.hideable !== false ? (D = true, true) : false, V = u.useCallback(() => {
      i(""), n.current.focus();
    }, []);
    return b.jsxs(u.Fragment, {
      children: [
        b.jsx(ly, {
          className: d.header,
          ownerState: s,
          children: b.jsx(sy, g({
            as: s.slots.baseTextField,
            ownerState: s,
            placeholder: t.current.getLocaleText("columnsManagementSearchTitle"),
            inputRef: n,
            className: d.searchInput,
            value: a,
            onChange: R,
            variant: "outlined",
            size: "small",
            type: "search",
            InputProps: {
              startAdornment: b.jsx(s.slots.baseInputAdornment, {
                position: "start",
                children: b.jsx(s.slots.quickFilterIcon, {})
              }),
              endAdornment: b.jsx(s.slots.baseIconButton, g({
                "aria-label": t.current.getLocaleText("columnsManagementDeleteIconLabel"),
                size: "small",
                sx: [
                  a ? {
                    visibility: "visible"
                  } : {
                    visibility: "hidden"
                  }
                ],
                tabIndex: -1,
                onClick: V
              }, (_a2 = s.slotProps) == null ? void 0 : _a2.baseIconButton, {
                children: b.jsx(s.slots.quickFilterClearIcon, {
                  fontSize: "small"
                })
              }))
            },
            inputProps: {
              "aria-label": t.current.getLocaleText("columnsManagementSearchTitle")
            },
            autoComplete: "off",
            fullWidth: true
          }, (_b2 = s.slotProps) == null ? void 0 : _b2.baseTextField, M))
        }),
        b.jsxs(ry, {
          className: d.root,
          ownerState: s,
          children: [
            P.map((E) => {
              var _a3;
              return b.jsx(qs, {
                className: d.row,
                control: b.jsx(s.slots.baseCheckbox, g({
                  disabled: E.hideable === false,
                  checked: l[E.field] !== false,
                  onClick: G,
                  name: E.field,
                  sx: {
                    p: 0.5
                  },
                  inputRef: $(E) ? k : void 0
                }, (_a3 = s.slotProps) == null ? void 0 : _a3.baseCheckbox)),
                label: E.headerName || E.field
              }, E.field);
            }),
            P.length === 0 && b.jsx(ay, {
              ownerState: s,
              children: t.current.getLocaleText("columnsManagementNoColumns")
            })
          ]
        }),
        (!m || !h) && P.length > 0 ? b.jsxs(iy, {
          ownerState: s,
          className: d.footer,
          children: [
            m ? b.jsx("span", {}) : b.jsx(qs, {
              control: b.jsx(s.slots.baseCheckbox, g({
                disabled: T.length === 0,
                checked: w,
                indeterminate: !w && !y,
                onClick: () => H(!w),
                name: t.current.getLocaleText("columnsManagementShowHideAllText"),
                sx: {
                  p: 0.5
                }
              }, (_c2 = s.slotProps) == null ? void 0 : _c2.baseCheckbox)),
              label: t.current.getLocaleText("columnsManagementShowHideAllText")
            }),
            h ? null : b.jsx(s.slots.baseButton, g({
              onClick: () => t.current.setColumnVisibilityModel(r),
              disabled: v
            }, (_d2 = s.slotProps) == null ? void 0 : _d2.baseButton, {
              children: t.current.getLocaleText("columnsManagementReset")
            }))
          ]
        }) : null
      ]
    });
  }
  const ry = ge("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagement",
    overridesResolver: (e, t) => t.columnsManagement
  })(({ theme: e }) => ({
    padding: e.spacing(0, 3, 1.5),
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    flex: "1 1",
    maxHeight: 400,
    alignItems: "flex-start"
  })), ly = ge("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagementHeader",
    overridesResolver: (e, t) => t.columnsManagementHeader
  })(({ theme: e }) => ({
    padding: e.spacing(1.5, 3)
  })), sy = ge(Ko, {
    name: "MuiDataGrid",
    slot: "ColumnsManagementSearchInput",
    overridesResolver: (e, t) => t.columnsManagementSearchInput
  })(({ theme: e }) => ({
    [`& .${Bt.root}`]: {
      padding: e.spacing(0, 1.5, 0, 1.5)
    },
    [`& .${Bt.input}::-webkit-search-decoration,
  & .${Bt.input}::-webkit-search-cancel-button,
  & .${Bt.input}::-webkit-search-results-button,
  & .${Bt.input}::-webkit-search-results-decoration`]: {
      display: "none"
    }
  })), iy = ge("div", {
    name: "MuiDataGrid",
    slot: "ColumnsManagementFooter",
    overridesResolver: (e, t) => t.columnsManagementFooter
  })(({ theme: e }) => ({
    padding: e.spacing(0.5, 1, 0.5, 3),
    display: "flex",
    justifyContent: "space-between",
    borderTop: `1px solid ${e.palette.divider}`
  })), ay = ge("div")(({ theme: e }) => ({
    padding: e.spacing(0.5, 0),
    color: e.palette.grey[500]
  })), cy = je(function(t, n) {
    var _a2, _b2;
    const { children: o, slotProps: r = {} } = t, l = r.button || {}, s = r.tooltip || {}, a = Pe(), i = le(), d = Je(), c = Je(), [f, p] = u.useState(false), m = u.useRef(null), h = zt(n, m), C = (v) => {
      var _a3;
      p((O) => !O), (_a3 = l.onClick) == null ? void 0 : _a3.call(l, v);
    }, x = () => p(false), M = (v) => {
      v.key === "Tab" && v.preventDefault(), xu(v.key) && x();
    };
    return o == null ? null : b.jsxs(u.Fragment, {
      children: [
        b.jsx(i.slots.baseTooltip, g({
          title: a.current.getLocaleText("toolbarExportLabel"),
          enterDelay: 1e3
        }, (_a2 = i.slotProps) == null ? void 0 : _a2.baseTooltip, s, {
          children: b.jsx(i.slots.baseButton, g({
            size: "small",
            startIcon: b.jsx(i.slots.exportIcon, {}),
            "aria-expanded": f,
            "aria-label": a.current.getLocaleText("toolbarExportLabel"),
            "aria-haspopup": "menu",
            "aria-controls": f ? c : void 0,
            id: d
          }, (_b2 = i.slotProps) == null ? void 0 : _b2.baseButton, l, {
            onClick: C,
            ref: h,
            children: a.current.getLocaleText("toolbarExport")
          }))
        })),
        b.jsx(vs, {
          open: f,
          target: m.current,
          onClose: x,
          position: "bottom-start",
          children: b.jsx(os, {
            id: c,
            className: I.menuList,
            "aria-labelledby": d,
            onKeyDown: M,
            autoFocusItem: f,
            children: u.Children.map(o, (v) => u.isValidElement(v) ? u.cloneElement(v, {
              hideMenu: x
            }) : v)
          })
        })
      ]
    });
  }), uy = [
    "hideMenu",
    "options"
  ], dy = [
    "hideMenu",
    "options"
  ], fy = [
    "csvOptions",
    "printOptions",
    "excelOptions"
  ];
  function py(e) {
    const t = Pe(), { hideMenu: n, options: o } = e, r = de(e, uy);
    return b.jsx(At, g({
      onClick: () => {
        t.current.exportDataAsCsv(o), n == null ? void 0 : n();
      }
    }, r, {
      children: t.current.getLocaleText("toolbarExportCSV")
    }));
  }
  function gy(e) {
    const t = Pe(), { hideMenu: n, options: o } = e, r = de(e, dy);
    return b.jsx(At, g({
      onClick: () => {
        t.current.exportDataAsPrint(o), n == null ? void 0 : n();
      }
    }, r, {
      children: t.current.getLocaleText("toolbarExportPrint")
    }));
  }
  je(function(t, n) {
    const o = t, { csvOptions: r = {}, printOptions: l = {}, excelOptions: s } = o, a = de(o, fy), d = Pe().current.unstable_applyPipeProcessors("exportMenu", [], {
      excelOptions: s,
      csvOptions: r,
      printOptions: l
    }).sort((c, f) => c.componentName > f.componentName ? 1 : -1);
    return d.length === 0 ? null : b.jsx(cy, g({}, a, {
      ref: n,
      children: d.map((c, f) => u.cloneElement(c.component, {
        key: f
      }))
    }));
  });
  const hy = [
    "className",
    "selectedRowCount"
  ], my = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "selectedRowCount"
      ]
    }, Oe, t);
  }, by = Ye("div", {
    name: "MuiDataGrid",
    slot: "SelectedRowCount",
    overridesResolver: (e, t) => t.selectedRowCount
  })(({ theme: e }) => ({
    alignItems: "center",
    display: "flex",
    margin: e.spacing(0, 2),
    visibility: "hidden",
    width: 0,
    height: 0,
    [e.breakpoints.up("sm")]: {
      visibility: "visible",
      width: "auto",
      height: "auto"
    }
  })), Cy = je(function(t, n) {
    const { className: o, selectedRowCount: r } = t, l = de(t, hy), s = Pe(), a = le(), i = my(a), d = s.current.getLocaleText("footerRowSelected")(r);
    return b.jsx(by, g({
      className: pe(i.root, o),
      ownerState: a
    }, l, {
      ref: n,
      children: d
    }));
  }), wy = je(function(t, n) {
    var _a2, _b2;
    const o = Pe(), r = le(), l = Q(o, _h), s = Q(o, Ym), a = Q(o, Is), i = !r.hideFooterSelectedRowCount && s > 0 ? b.jsx(Cy, {
      selectedRowCount: s
    }) : b.jsx("div", {}), d = !r.hideFooterRowCount && !r.pagination ? b.jsx(r.slots.footerRowCount, g({}, (_a2 = r.slotProps) == null ? void 0 : _a2.footerRowCount, {
      rowCount: l,
      visibleRowCount: a
    })) : null, c = r.pagination && !r.hideFooterPagination && r.slots.pagination && b.jsx(r.slots.pagination, g({}, (_b2 = r.slotProps) == null ? void 0 : _b2.pagination));
    return b.jsxs(Jw, g({}, t, {
      ref: n,
      children: [
        i,
        d,
        c
      ]
    }));
  }), Xo = (e, t, n, o, r, l) => {
    let s;
    switch (e) {
      case Ee.LEFT:
        s = o[n];
        break;
      case Ee.RIGHT:
        s = r - o[n] - t + l;
        break;
      default:
        s = void 0;
        break;
    }
    return s;
  }, Ur = (e, t, n, o, r) => {
    const l = t === n - 1;
    return e === Ee.LEFT && l ? true : o ? e === Ee.LEFT ? true : e === Ee.RIGHT ? !l : !l || r : false;
  }, Kr = (e, t) => e === Ee.RIGHT && t === 0, No = {
    root: I.scrollbarFiller,
    header: I["scrollbarFiller--header"],
    borderTop: I["scrollbarFiller--borderTop"],
    borderBottom: I["scrollbarFiller--borderBottom"],
    pinnedRight: I["scrollbarFiller--pinnedRight"]
  };
  function Rs({ header: e, borderTop: t = true, borderBottom: n, pinnedRight: o }) {
    return b.jsx("div", {
      role: "presentation",
      className: pe(No.root, e && No.header, t && No.borderTop, n && No.borderBottom, o && No.pinnedRight)
    });
  }
  const vy = Ye("div", {
    name: "MuiDataGrid",
    slot: "SkeletonLoadingOverlay",
    overridesResolver: (e, t) => t.skeletonLoadingOverlay
  })({
    minWidth: "100%",
    width: "max-content",
    height: "100%",
    overflow: "clip"
  }), xy = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "skeletonLoadingOverlay"
      ]
    }, Oe, t);
  }, ca = (e) => parseInt(e.getAttribute("data-colindex"), 10), yy = je(function(t, n) {
    const o = le(), { slots: r } = o, l = $t(), s = xy({
      classes: o.classes
    }), a = u.useRef(null), i = zt(a, n), d = Pe(), c = Q(d, dt), f = (c == null ? void 0 : c.viewportInnerSize.height) ?? 0, p = Math.ceil(f / c.rowHeight), m = Q(d, Qr), h = Q(d, Gn), C = u.useMemo(() => h.filter((H) => H <= m).length, [
      m,
      h
    ]), x = Q(d, ot), M = u.useMemo(() => x.slice(0, C), [
      x,
      C
    ]), v = Q(d, ko), O = u.useCallback((H) => {
      if (v.left.findIndex((R) => R.field === H) !== -1) return Ee.LEFT;
      if (v.right.findIndex((R) => R.field === H) !== -1) return Ee.RIGHT;
    }, [
      v.left,
      v.right
    ]), G = u.useMemo(() => {
      const H = [];
      for (let R = 0; R < p; R += 1) {
        const T = [];
        for (let w = 0; w < M.length; w += 1) {
          const y = M[w], k = O(y.field), D = k === Ee.LEFT, $ = k === Ee.RIGHT, V = pu(k, l), E = V ? v[V].length : M.length - v.left.length - v.right.length, S = V ? v[V].findIndex((ae) => ae.field === y.field) : w - v.left.length, F = c.hasScrollY ? c.scrollbarSize : 0, A = il({}, l, k, Xo(k, y.computedWidth, w, h, c.columnsTotalWidth, F)), z = c.columnsTotalWidth < c.viewportOuterSize.width, j = Ur(k, S, E, o.showCellVerticalBorder, z), L = Kr(k, S), N = w === M.length - 1, W = $ && S === 0, B = W && z, U = N && !W && z, K = c.viewportOuterSize.width - c.columnsTotalWidth, ne = Math.max(0, K), ee = b.jsx(r.skeletonCell, {
            width: ne,
            empty: true
          }, `skeleton-filler-column-${R}`), te = N && F !== 0;
          B && T.push(ee), T.push(b.jsx(r.skeletonCell, {
            field: y.field,
            type: y.type,
            align: y.align,
            width: "var(--width)",
            height: c.rowHeight,
            "data-colindex": w,
            className: pe(D && I["cell--pinnedLeft"], $ && I["cell--pinnedRight"], j && I["cell--withRightBorder"], L && I["cell--withLeftBorder"]),
            style: g({
              "--width": `${y.computedWidth}px`
            }, A)
          }, `skeleton-column-${R}-${y.field}`)), U && T.push(ee), te && T.push(b.jsx(Rs, {
            pinnedRight: v.right.length > 0
          }, `skeleton-scrollbar-filler-${R}`));
        }
        H.push(b.jsx("div", {
          className: pe(I.row, I.rowSkeleton, R === 0 && I["row--firstVisible"]),
          children: T
        }, `skeleton-row-${R}`));
      }
      return H;
    }, [
      r,
      M,
      v,
      p,
      o.showCellVerticalBorder,
      c,
      h,
      O,
      l
    ]);
    return oe(d, "columnResize", (H) => {
      var _a2, _b2, _c2, _d2, _e;
      const { colDef: R, width: T } = H, w = (_a2 = a.current) == null ? void 0 : _a2.querySelectorAll(`[data-field="${Mn(R.field)}"]`);
      if (!w) throw new Error("MUI X: Expected skeleton cells to be defined with `data-field` attribute.");
      const y = M.findIndex((S) => S.field === R.field), k = O(R.field), D = k === Ee.LEFT, $ = k === Ee.RIGHT, V = getComputedStyle(w[0]).getPropertyValue("--width"), E = parseInt(V, 10) - T;
      w && w.forEach((S) => {
        S.style.setProperty("--width", `${T}px`);
      }), D && ((_c2 = (_b2 = a.current) == null ? void 0 : _b2.querySelectorAll(`.${I["cell--pinnedLeft"]}`)) == null ? void 0 : _c2.forEach((F) => {
        ca(F) > y && (F.style.left = `${parseInt(getComputedStyle(F).left, 10) - E}px`);
      })), $ && ((_e = (_d2 = a.current) == null ? void 0 : _d2.querySelectorAll(`.${I["cell--pinnedRight"]}`)) == null ? void 0 : _e.forEach((F) => {
        ca(F) < y && (F.style.right = `${parseInt(getComputedStyle(F).right, 10) + E}px`);
      }));
    }), b.jsx(vy, g({
      className: s.root
    }, t, {
      ref: i,
      children: G
    }));
  }), Sy = [
    "variant",
    "noRowsVariant",
    "style"
  ], Iy = {
    "circular-progress": {
      component: Qu,
      style: {}
    },
    "linear-progress": {
      component: Dp,
      style: {
        display: "block"
      }
    },
    skeleton: {
      component: yy,
      style: {
        display: "block"
      }
    }
  }, Py = je(function(t, n) {
    const { variant: o = "circular-progress", noRowsVariant: r = "circular-progress", style: l } = t, s = de(t, Sy), a = Pe(), i = Q(a, dr), d = Iy[i === 0 ? r : o];
    return b.jsx(Hs, g({
      style: g({}, d.style, l)
    }, s, {
      ref: n,
      children: b.jsx(d.component, {})
    }));
  }), My = je(function(t, n) {
    const r = Pe().current.getLocaleText("noRowsLabel");
    return b.jsx(Hs, g({}, t, {
      ref: n,
      children: r
    }));
  }), ky = ge(wg)(({ theme: e }) => ({
    maxHeight: "calc(100% + 1px)",
    flexGrow: 1,
    [`& .${Bn.selectLabel}`]: {
      display: "none",
      [e.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    [`& .${Bn.input}`]: {
      display: "none",
      [e.breakpoints.up("sm")]: {
        display: "inline-flex"
      }
    }
  })), Ey = (e, t) => ({ from: n, to: o, count: r, page: l }) => e({
    from: n,
    to: o,
    count: r,
    page: l,
    estimated: t
  }), Fy = ({ from: e, to: t, count: n, estimated: o }) => o ? `${e}\u2013${t} of ${n !== -1 ? n : `more than ${o > t ? o : t}`}` : `${e}\u2013${t} of ${n !== -1 ? n : `more than ${t}`}`, Ty = je(function(t, n) {
    const o = Pe(), r = le(), l = Q(o, xt), s = Q(o, ao), a = Q(o, Bc), { paginationMode: i, loading: d, estimatedRowCount: c } = r, f = u.useMemo(() => s === -1 && i === "server" && d ? {
      backIconButtonProps: {
        disabled: true
      },
      nextIconButtonProps: {
        disabled: true
      }
    } : {}, [
      d,
      i,
      s
    ]), p = u.useMemo(() => Math.max(0, a - 1), [
      a
    ]), m = u.useMemo(() => s === -1 || l.page <= p ? l.page : p, [
      p,
      l.page,
      s
    ]), h = u.useCallback((G) => {
      const P = Number(G.target.value);
      o.current.setPageSize(P);
    }, [
      o
    ]), C = u.useCallback((G, P) => {
      o.current.setPage(P);
    }, [
      o
    ]), M = ((G) => {
      for (let P = 0; P < r.pageSizeOptions.length; P += 1) {
        const H = r.pageSizeOptions[P];
        if (typeof H == "number") {
          if (H === G) return true;
        } else if (H.value === G) return true;
      }
      return false;
    })(l.pageSize) ? r.pageSizeOptions : [], v = o.current.getLocaleText("MuiTablePagination"), O = Ey(v.labelDisplayedRows || Fy, c);
    return b.jsx(ky, g({
      component: "div",
      count: s,
      page: m,
      rowsPerPageOptions: M,
      rowsPerPage: l.pageSize,
      onPageChange: C,
      onRowsPerPageChange: h
    }, f, v, {
      labelDisplayedRows: O
    }, t, {
      ref: n
    }));
  }), Oy = [
    "className",
    "rowCount",
    "visibleRowCount"
  ], Dy = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "rowCount"
      ]
    }, Oe, t);
  }, $y = Ye("div", {
    name: "MuiDataGrid",
    slot: "RowCount",
    overridesResolver: (e, t) => t.rowCount
  })(({ theme: e }) => ({
    alignItems: "center",
    display: "flex",
    margin: e.spacing(0, 2)
  })), Hy = je(function(t, n) {
    const { className: o, rowCount: r, visibleRowCount: l } = t, s = de(t, Oy), a = Pe(), i = le(), d = Dy(i);
    if (r === 0) return null;
    const c = l < r ? a.current.getLocaleText("footerTotalVisibleRows")(l, r) : r.toLocaleString();
    return b.jsxs($y, g({
      className: pe(d.root, o),
      ownerState: i
    }, s, {
      ref: n,
      children: [
        a.current.getLocaleText("footerTotalRows"),
        " ",
        c
      ]
    }));
  });
  function Ly(e) {
    for (const t in e) return false;
    return true;
  }
  function Ry(e, t) {
    return we(t, Oe, e);
  }
  const Ay = [
    "selected",
    "rowId",
    "row",
    "index",
    "style",
    "rowHeight",
    "className",
    "visibleColumns",
    "pinnedColumns",
    "offsetLeft",
    "columnsTotalWidth",
    "firstColumnIndex",
    "lastColumnIndex",
    "focusedColumnIndex",
    "isFirstVisible",
    "isLastVisible",
    "isNotVisible",
    "showBottomBorder",
    "scrollbarWidth",
    "gridHasFiller",
    "onClick",
    "onDoubleClick",
    "onMouseEnter",
    "onMouseLeave",
    "onMouseOut",
    "onMouseOver"
  ], Gy = ur(ut, (e, t) => t ? !!Ly(e) : false), zy = je(function(t, n) {
    var _a2;
    const { selected: o, rowId: r, row: l, index: s, style: a, rowHeight: i, className: d, visibleColumns: c, pinnedColumns: f, offsetLeft: p, columnsTotalWidth: m, firstColumnIndex: h, lastColumnIndex: C, focusedColumnIndex: x, isFirstVisible: M, isLastVisible: v, isNotVisible: O, showBottomBorder: G, scrollbarWidth: P, gridHasFiller: H, onClick: R, onDoubleClick: T, onMouseEnter: w, onMouseLeave: y, onMouseOut: k, onMouseOver: D } = t, $ = de(t, Ay), V = tn(), E = Ds(), S = u.useRef(null), F = le(), A = Ts(V), z = Q(V, on), j = Q(V, Xn), L = Q(V, Gn), N = F.rowReordering, W = Zo(V, Gy, N), B = zt(S, n), U = V.current.getRowNode(r), K = Zo(V, du, {
      rowId: r,
      editMode: F.editMode
    }), ne = F.editMode === mn.Row, ee = x !== void 0, te = ee && x >= f.left.length && x < h, ae = ee && x < c.length - f.right.length && x >= C, ve = Ry(F.classes, {
      root: [
        "row",
        o && "selected",
        ne && "row--editable",
        K && "row--editing",
        M && "row--firstVisible",
        v && "row--lastVisible",
        G && "row--borderBottom",
        i === "auto" && "row--dynamicHeight"
      ]
    }), Y = E.hooks.useGridRowAriaAttributes();
    u.useLayoutEffect(() => {
      if (A.range) {
        const ue = V.current.getRowIndexRelativeToVisibleRows(r);
        ue !== void 0 && V.current.unstable_setLastMeasuredRowIndex(ue);
      }
      if (S.current && i === "auto") return V.current.observeRowHeight(S.current, r);
    }, [
      V,
      A.range,
      i,
      r
    ]);
    const re = u.useCallback((ue, be) => (ce) => {
      Cr(ce) || V.current.getRow(r) && (V.current.publishEvent(ue, V.current.getRowParams(r), ce), be && be(ce));
    }, [
      V,
      r
    ]), xe = u.useCallback((ue) => {
      var _a3, _b2;
      const ce = (_a3 = Br(ue.target, I.cell)) == null ? void 0 : _a3.getAttribute("data-field");
      ce && (ce === To.field || ce === el || ce === "__reorder__" || V.current.getCellMode(r, ce) === Ke.Edit || ((_b2 = V.current.getColumn(ce)) == null ? void 0 : _b2.type) === Jr) || re("rowClick", R)(ue);
    }, [
      V,
      R,
      re,
      r
    ]), { slots: J, slotProps: ye, disableColumnReorder: Z } = F, Ce = Q(V, () => g({}, V.current.getRowHeightEntry(r)), hs), me = u.useMemo(() => {
      if (O) return {
        opacity: 0,
        width: 0,
        height: 0
      };
      const ue = g({}, a, {
        maxHeight: i === "auto" ? "none" : i,
        minHeight: i,
        "--height": typeof i == "number" ? `${i}px` : i
      });
      if (Ce.spacingTop) {
        const be = F.rowSpacingType === "border" ? "borderTopWidth" : "marginTop";
        ue[be] = Ce.spacingTop;
      }
      if (Ce.spacingBottom) {
        const be = F.rowSpacingType === "border" ? "borderBottomWidth" : "marginBottom";
        let ce = ue[be];
        typeof ce != "number" && (ce = parseInt(ce || "0", 10)), ce += Ce.spacingBottom, ue[be] = ce;
      }
      return ue;
    }, [
      O,
      i,
      a,
      Ce,
      F.rowSpacingType
    ]), Me = V.current.unstable_applyPipeProcessors("rowClassName", [], r), Ve = Y(U, s);
    if (typeof F.getRowClassName == "function") {
      const ue = s - (((_a2 = A.range) == null ? void 0 : _a2.firstRowIndex) || 0), be = g({}, V.current.getRowParams(r), {
        isFirstVisible: ue === 0,
        isLastVisible: ue === A.rows.length - 1,
        indexRelativeToCurrentPage: ue
      });
      Me.push(F.getRowClassName(be));
    }
    const Ne = (ue, be, ce, fe, He = Ee.NONE) => {
      const Te = V.current.unstable_getCellColSpanInfo(r, ce);
      if (Te == null ? void 0 : Te.spannedByColSpan) return null;
      const tt = (Te == null ? void 0 : Te.cellProps.width) ?? ue.computedWidth, pt = (Te == null ? void 0 : Te.cellProps.colSpan) ?? 1, st = Xo(He, ue.computedWidth, ce, L, m, P);
      if (U.type === "skeletonRow") return b.jsx(J.skeletonCell, {
        type: ue.type,
        width: tt,
        height: i,
        field: ue.field,
        align: ue.align
      }, ue.field);
      const Cn = ue.field === "__reorder__", kt = !(Z || ue.disableReorder), wn = W && !z.length && j <= 1, bt = !(kt || Cn && wn), Lt = He === Ee.VIRTUAL, St = Kr(He, be), Et = Ur(He, be, fe, F.showCellVerticalBorder, H);
      return b.jsx(J.cell, g({
        column: ue,
        width: tt,
        rowId: r,
        align: ue.align || "left",
        colIndex: ce,
        colSpan: pt,
        disableDragEvents: bt,
        isNotVisible: Lt,
        pinnedOffset: st,
        pinnedPosition: He,
        showLeftBorder: St,
        showRightBorder: Et,
        row: l,
        rowNode: U
      }, ye == null ? void 0 : ye.cell), ue.field);
    }, Ae = f.left.map((ue, be) => Ne(ue, be, be, f.left.length, Ee.LEFT)), De = f.right.map((ue, be) => {
      const ce = c.length - f.right.length + be;
      return Ne(ue, be, ce, f.right.length, Ee.RIGHT);
    }), $e = c.length - f.left.length - f.right.length, _e = [];
    te && _e.push(Ne(c[x], x - f.left.length, x, $e, Ee.VIRTUAL));
    for (let ue = h; ue < C; ue += 1) {
      const be = c[ue], ce = ue - f.left.length;
      be && _e.push(Ne(be, ce, ue, $e));
    }
    ae && _e.push(Ne(c[x], x - f.left.length, x, $e, Ee.VIRTUAL));
    const Ge = l ? {
      onClick: xe,
      onDoubleClick: re("rowDoubleClick", T),
      onMouseEnter: re("rowMouseEnter", w),
      onMouseLeave: re("rowMouseLeave", y),
      onMouseOut: re("rowMouseOut", k),
      onMouseOver: re("rowMouseOver", D)
    } : null;
    return b.jsxs("div", g({
      "data-id": r,
      "data-rowindex": s,
      role: "row",
      className: pe(...Me, ve.root, d),
      style: me
    }, Ve, Ge, $, {
      ref: B,
      children: [
        Ae,
        b.jsx("div", {
          role: "presentation",
          className: I.cellOffsetLeft,
          style: {
            width: p
          }
        }),
        _e,
        b.jsx("div", {
          role: "presentation",
          className: pe(I.cell, I.cellEmpty)
        }),
        De,
        P !== 0 && b.jsx(Rs, {
          pinnedRight: f.right.length > 0,
          borderTop: !M
        })
      ]
    }));
  }), jy = In(zy), Vy = () => {
    const e = tn(), t = le(), n = Q(e, ot), o = Q(e, Ss), r = Q(e, mr), l = Q(e, uc);
    return {
      role: "grid",
      "aria-colcount": n.length,
      "aria-rowcount": r + 1 + l + o,
      "aria-multiselectable": Ps(t)
    };
  }, Ny = () => {
    const e = tn(), t = Q(e, Hn), n = Q(e, mr);
    return u.useCallback((o, r) => {
      const l = {}, s = r + n + 2;
      return l["aria-rowindex"] = s, e.current.isRowSelectable(o.id) && (l["aria-selected"] = t[o.id] !== void 0), l;
    }, [
      e,
      t,
      n
    ]);
  };
  function _y({ privateApiRef: e, configuration: t, props: n, children: o }) {
    const r = u.useRef(e.current.getPublicApi());
    return b.jsx(cu.Provider, {
      value: t,
      children: b.jsx(Xa.Provider, {
        value: n,
        children: b.jsx(ou.Provider, {
          value: e,
          children: b.jsx(Ya.Provider, {
            value: r,
            children: o
          })
        })
      })
    });
  }
  const By = (e) => {
    const t = u.useRef(null), n = u.useRef(null), o = u.useRef(null), r = u.useRef(null), l = u.useRef(null), s = u.useRef(null);
    e.current.register("public", {
      rootElementRef: t
    }), e.current.register("private", {
      mainElementRef: n,
      virtualScrollerRef: o,
      virtualScrollbarVerticalRef: r,
      virtualScrollbarHorizontalRef: l,
      columnHeadersContainerRef: s
    });
  }, Wy = (e) => {
    const t = $t();
    e.current.state.isRtl === void 0 && (e.current.state.isRtl = t);
    const n = u.useRef(true);
    u.useEffect(() => {
      n.current ? n.current = false : e.current.setState((o) => g({}, o, {
        isRtl: t
      }));
    }, [
      e,
      t
    ]);
  }, Uy = nm() && window.localStorage.getItem("DEBUG") != null, Wo = () => {
  }, Ky = {
    debug: Wo,
    info: Wo,
    warn: Wo,
    error: Wo
  }, ua = [
    "debug",
    "info",
    "warn",
    "error"
  ];
  function da(e, t, n = console) {
    const o = ua.indexOf(t);
    if (o === -1) throw new Error(`MUI X: Log level ${t} not recognized.`);
    return ua.reduce((l, s, a) => (a >= o ? l[s] = (...i) => {
      const [d, ...c] = i;
      n[s](`MUI X: ${e} - ${d}`, ...c);
    } : l[s] = Wo, l), {});
  }
  const qy = (e, t) => {
    const n = u.useCallback((o) => Uy ? da(o, "debug", t.logger) : t.logLevel ? da(o, t.logLevel.toString(), t.logger) : Ky, [
      t.logLevel,
      t.logger
    ]);
    Ie(e, {
      getLogger: n
    }, "private");
  };
  class Yy {
    constructor() {
      this.maxListeners = 20, this.warnOnce = false, this.events = {};
    }
    on(t, n, o = {}) {
      let r = this.events[t];
      r || (r = {
        highPriority: /* @__PURE__ */ new Map(),
        regular: /* @__PURE__ */ new Map()
      }, this.events[t] = r), o.isFirst ? r.highPriority.set(n, true) : r.regular.set(n, true);
    }
    removeListener(t, n) {
      this.events[t] && (this.events[t].regular.delete(n), this.events[t].highPriority.delete(n));
    }
    removeAllListeners() {
      this.events = {};
    }
    emit(t, ...n) {
      const o = this.events[t];
      if (!o) return;
      const r = Array.from(o.highPriority.keys()), l = Array.from(o.regular.keys());
      for (let s = r.length - 1; s >= 0; s -= 1) {
        const a = r[s];
        o.highPriority.has(a) && a.apply(this, n);
      }
      for (let s = 0; s < l.length; s += 1) {
        const a = l[s];
        o.regular.has(a) && a.apply(this, n);
      }
    }
    once(t, n) {
      const o = this;
      this.on(t, function r(...l) {
        o.removeListener(t, r), n.apply(o, l);
      });
    }
  }
  class As {
    static create(t) {
      return new As(t);
    }
    constructor(t) {
      this.value = void 0, this.listeners = void 0, this.subscribe = (n) => (this.listeners.add(n), () => {
        this.listeners.delete(n);
      }), this.getSnapshot = () => this.value, this.update = (n) => {
        this.value = n, this.listeners.forEach((o) => o(n));
      }, this.value = t, this.listeners = /* @__PURE__ */ new Set();
    }
  }
  const Iu = /* @__PURE__ */ Symbol("mui.api_private"), Xy = (e) => e.isPropagationStopped !== void 0;
  let fa = 0;
  function Qy(e) {
    var _a2;
    const t = (_a2 = e.current) == null ? void 0 : _a2[Iu];
    if (t) return t;
    const n = {}, o = {
      state: n,
      store: As.create(n),
      instanceId: {
        id: fa
      }
    };
    return fa += 1, o.getPublicApi = () => e.current, o.register = (r, l) => {
      Object.keys(l).forEach((s) => {
        const a = l[s], i = o[s];
        if ((i == null ? void 0 : i.spying) === true ? i.target = a : o[s] = a, r === "public") {
          const d = e.current, c = d[s];
          (c == null ? void 0 : c.spying) === true ? c.target = a : d[s] = a;
        }
      });
    }, o.register("private", {
      caches: {},
      eventManager: new Yy()
    }), o;
  }
  function Jy(e) {
    return {
      get state() {
        return e.current.state;
      },
      get store() {
        return e.current.store;
      },
      get instanceId() {
        return e.current.instanceId;
      },
      [Iu]: e.current
    };
  }
  function Zy(e, t) {
    var _a2;
    const n = u.useRef(null), o = u.useRef(null);
    o.current || (o.current = Qy(n)), n.current || (n.current = Jy(o));
    const r = u.useCallback((...s) => {
      const [a, i, d = {}] = s;
      if (d.defaultMuiPrevented = false, Xy(d) && d.isPropagationStopped()) return;
      const c = t.signature === Xt.DataGridPro || t.signature === Xt.DataGridPremium ? {
        api: o.current.getPublicApi()
      } : {};
      o.current.eventManager.emit(a, i, d, c);
    }, [
      o,
      t.signature
    ]), l = u.useCallback((s, a, i) => {
      o.current.eventManager.on(s, a, i);
      const d = o.current;
      return () => {
        d.eventManager.removeListener(s, a);
      };
    }, [
      o
    ]);
    return Ie(o, {
      subscribeEvent: l,
      publishEvent: r
    }, "public"), e && !((_a2 = e.current) == null ? void 0 : _a2.state) && (e.current = n.current), u.useImperativeHandle(e, () => n.current, [
      n
    ]), u.useEffect(() => {
      const s = o.current;
      return () => {
        s.publishEvent("unmount");
      };
    }, [
      o
    ]), o;
  }
  const eS = (e, t) => {
    const n = u.useCallback((o) => {
      if (t.localeText[o] == null) throw new Error(`Missing translation for key ${o}.`);
      return t.localeText[o];
    }, [
      t.localeText
    ]);
    e.current.register("public", {
      getLocaleText: n
    });
  };
  function or(e) {
    "@babel/helpers - typeof";
    return or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, or(e);
  }
  function tS(e, t) {
    if (or(e) != "object" || !e) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
      var o = n.call(e, t);
      if (or(o) != "object") return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(e);
  }
  function rr(e) {
    var t = tS(e, "string");
    return or(t) == "symbol" ? t : t + "";
  }
  const nS = (e) => {
    const t = u.useRef({}), n = u.useRef(false), o = u.useCallback((c) => {
      n.current || !c || (n.current = true, Object.values(c.appliers).forEach((f) => {
        f();
      }), n.current = false);
    }, []), r = u.useCallback((c, f, p) => {
      t.current[c] || (t.current[c] = {
        processors: /* @__PURE__ */ new Map(),
        processorsAsArray: [],
        appliers: {}
      });
      const m = t.current[c];
      return m.processors.get(f) !== p && (m.processors.set(f, p), m.processorsAsArray = Array.from(t.current[c].processors.values()).filter((C) => C !== null), o(m)), () => {
        t.current[c].processors.set(f, null), t.current[c].processorsAsArray = Array.from(t.current[c].processors.values()).filter((C) => C !== null);
      };
    }, [
      o
    ]), l = u.useCallback((c, f, p) => (t.current[c] || (t.current[c] = {
      processors: /* @__PURE__ */ new Map(),
      processorsAsArray: [],
      appliers: {}
    }), t.current[c].appliers[f] = p, () => {
      const m = t.current[c].appliers, h = de(m, [
        f
      ].map(rr));
      t.current[c].appliers = h;
    }), []), s = u.useCallback((c) => {
      o(t.current[c]);
    }, [
      o
    ]), a = u.useCallback((...c) => {
      const [f, p, m] = c;
      if (!t.current[f]) return p;
      const h = t.current[f].processorsAsArray;
      let C = p;
      for (let x = 0; x < h.length; x += 1) C = h[x](C, m);
      return C;
    }, []), i = {
      registerPipeProcessor: r,
      registerPipeApplier: l,
      requestPipeProcessorsApplication: s
    }, d = {
      unstable_applyPipeProcessors: a
    };
    Ie(e, i, "private"), Ie(e, d, "public");
  }, Ze = (e, t, n, o = true) => {
    const r = u.useRef(null), l = u.useRef(`mui-${Math.round(Math.random() * 1e9)}`), s = u.useCallback(() => {
      r.current = e.current.registerPipeProcessor(t, l.current, n);
    }, [
      e,
      n,
      t
    ]);
    fr(() => {
      o && s();
    });
    const a = u.useRef(true);
    u.useEffect(() => (a.current ? a.current = false : o && s(), () => {
      r.current && (r.current(), r.current = null);
    }), [
      s,
      o
    ]);
  }, Gs = (e, t, n) => {
    const o = u.useRef(null), r = u.useRef(`mui-${Math.round(Math.random() * 1e9)}`), l = u.useCallback(() => {
      o.current = e.current.registerPipeApplier(t, r.current, n);
    }, [
      e,
      n,
      t
    ]);
    fr(() => {
      l();
    });
    const s = u.useRef(true);
    u.useEffect(() => (s.current ? s.current = false : l(), () => {
      o.current && (o.current(), o.current = null);
    }), [
      l
    ]);
  }, qr = (e, t, n, o) => {
    const r = u.useCallback(() => {
      e.current.registerStrategyProcessor(t, n, o);
    }, [
      e,
      o,
      n,
      t
    ]);
    fr(() => {
      r();
    });
    const l = u.useRef(true);
    u.useEffect(() => {
      l.current ? l.current = false : r();
    }, [
      r
    ]);
  }, qn = "none", pa = {
    rowTreeCreation: "rowTree",
    filtering: "rowTree",
    sorting: "rowTree",
    visibleRowsLookupCreation: "rowTree"
  }, oS = (e) => {
    const t = u.useRef(/* @__PURE__ */ new Map()), n = u.useRef({}), o = u.useCallback((i, d, c) => {
      const f = () => {
        const h = n.current[d], C = de(h, [
          i
        ].map(rr));
        n.current[d] = C;
      };
      n.current[d] || (n.current[d] = {});
      const p = n.current[d], m = p[i];
      return p[i] = c, !m || m === c || i === e.current.getActiveStrategy(pa[d]) && e.current.publishEvent("activeStrategyProcessorChange", d), f;
    }, [
      e
    ]), r = u.useCallback((i, d) => {
      const c = e.current.getActiveStrategy(pa[i]);
      if (c == null) throw new Error("Can't apply a strategy processor before defining an active strategy");
      const f = n.current[i];
      if (!f || !f[c]) throw new Error(`No processor found for processor "${i}" on strategy "${c}"`);
      const p = f[c];
      return p(d);
    }, [
      e
    ]), l = u.useCallback((i) => {
      var _a2;
      return ((_a2 = Array.from(t.current.entries()).find(([, f]) => f.group !== i ? false : f.isAvailable())) == null ? void 0 : _a2[0]) ?? qn;
    }, []), s = u.useCallback((i, d, c) => {
      t.current.set(d, {
        group: i,
        isAvailable: c
      }), e.current.publishEvent("strategyAvailabilityChange");
    }, [
      e
    ]);
    Ie(e, {
      registerStrategyProcessor: o,
      applyStrategyProcessor: r,
      getActiveStrategy: l,
      setStrategyAvailability: s
    }, "private");
  }, rS = (e) => {
    const t = u.useRef({}), n = u.useCallback((i) => {
      t.current[i.stateId] = i;
    }, []), o = u.useCallback((i, d) => {
      let c;
      if (tm(i) ? c = i(e.current.state) : c = i, e.current.state === c) return false;
      let f = false;
      const p = [];
      if (Object.keys(t.current).forEach((m) => {
        const h = t.current[m], C = h.stateSelector(e.current.state, e.current.instanceId), x = h.stateSelector(c, e.current.instanceId);
        x !== C && (p.push({
          stateId: h.stateId,
          hasPropChanged: x !== h.propModel
        }), h.propModel !== void 0 && x !== h.propModel && (f = true));
      }), p.length > 1) throw new Error(`You're not allowed to update several sub-state in one transaction. You already updated ${p[0].stateId}, therefore, you're not allowed to update ${p.map((m) => m.stateId).join(", ")} in the same transaction.`);
      if (f || (e.current.state = c, e.current.publishEvent("stateChange", c), e.current.store.update(c)), p.length === 1) {
        const { stateId: m, hasPropChanged: h } = p[0], C = t.current[m], x = C.stateSelector(c, e.current.instanceId);
        C.propOnChange && h && C.propOnChange(x, {
          reason: d,
          api: e.current
        }), f || e.current.publishEvent(C.changeEvent, x, {
          reason: d
        });
      }
      return !f;
    }, [
      e
    ]), r = u.useCallback((i, d, c) => e.current.setState((f) => g({}, f, {
      [i]: d(f[i])
    }), c), [
      e
    ]), l = u.useCallback(() => {
    }, []), s = {
      setState: o,
      forceUpdate: l
    }, a = {
      updateControlState: r,
      registerControlState: n
    };
    Ie(e, s, "public"), Ie(e, a, "private");
  }, lS = (e, t) => g({}, e, {
    props: {
      getRowId: t.getRowId
    }
  }), sS = (e, t) => {
    u.useEffect(() => {
      e.current.setState((n) => g({}, n, {
        props: {
          getRowId: t.getRowId
        }
      }));
    }, [
      e,
      t.getRowId
    ]);
  }, iS = (e, t) => {
    const n = Zy(e, t);
    return By(n), sS(n, t), Wy(n), qy(n, t), rS(n), nS(n), oS(n), eS(n, t), n.current.register("private", {
      rootProps: t
    }), n;
  }, ct = (e, t, n) => {
    const o = u.useRef(false);
    o.current || (t.current.state = e(t.current.state, n, t), o.current = true);
  };
  function Ul(e, t) {
    if (e == null) return "";
    const n = typeof e == "string" ? e : `${e}`;
    if (t.shouldAppendQuotes || t.escapeFormulas) {
      const o = n.replace(/"/g, '""');
      return t.escapeFormulas && [
        "=",
        "+",
        "-",
        "@",
        "	",
        "\r"
      ].includes(o[0]) ? `"'${o}"` : [
        t.delimiter,
        `
`,
        "\r",
        '"'
      ].some((r) => n.includes(r)) ? `"${o}"` : o;
    }
    return n;
  }
  const Pu = (e, t) => {
    var _a2, _b2;
    const { csvOptions: n, ignoreValueFormatter: o } = t;
    let r;
    if (o) {
      const l = e.colDef.type;
      l === "number" ? r = String(e.value) : l === "date" || l === "dateTime" ? r = (_a2 = e.value) == null ? void 0 : _a2.toISOString() : typeof ((_b2 = e.value) == null ? void 0 : _b2.toString) == "function" ? r = e.value.toString() : r = e.value;
    } else r = e.formattedValue;
    return Ul(r, n);
  };
  class Kl {
    constructor(t) {
      this.options = void 0, this.rowString = "", this.isEmpty = true, this.options = t;
    }
    addValue(t) {
      this.isEmpty || (this.rowString += this.options.csvOptions.delimiter), typeof this.options.sanitizeCellValue == "function" ? this.rowString += this.options.sanitizeCellValue(t, this.options.csvOptions) : this.rowString += t, this.isEmpty = false;
    }
    getRowString() {
      return this.rowString;
    }
  }
  const aS = ({ id: e, columns: t, getCellParams: n, csvOptions: o, ignoreValueFormatter: r }) => {
    const l = new Kl({
      csvOptions: o
    });
    return t.forEach((s) => {
      const a = n(e, s.field);
      l.addValue(Pu(a, {
        ignoreValueFormatter: r,
        csvOptions: o
      }));
    }), l.getRowString();
  };
  function cS(e) {
    const { columns: t, rowIds: n, csvOptions: o, ignoreValueFormatter: r, apiRef: l } = e, s = n.reduce((f, p) => `${f}${aS({
      id: p,
      columns: t,
      getCellParams: l.current.getCellParams,
      ignoreValueFormatter: r,
      csvOptions: o
    })}\r
`, "").trim();
    if (!o.includeHeaders) return s;
    const a = t.filter((f) => f.field !== To.field), i = [];
    if (o.includeColumnGroupsHeaders) {
      const f = l.current.getAllGroupDetails();
      let p = 0;
      const m = a.reduce((h, C) => {
        const x = l.current.getColumnGroupPath(C.field);
        return h[C.field] = x, p = Math.max(p, x.length), h;
      }, {});
      for (let h = 0; h < p; h += 1) {
        const C = new Kl({
          csvOptions: o,
          sanitizeCellValue: Ul
        });
        i.push(C), a.forEach((x) => {
          const M = (m[x.field] || [])[h], v = f[M];
          C.addValue(v ? v.headerName || v.groupId : "");
        });
      }
    }
    const d = new Kl({
      csvOptions: o,
      sanitizeCellValue: Ul
    });
    return a.forEach((f) => {
      d.addValue(f.headerName || f.field);
    }), i.push(d), `${`${i.map((f) => f.getRowString()).join(`\r
`)}\r
`}${s}`.trim();
  }
  function ga(e) {
    const t = document.createElement("span");
    t.style.whiteSpace = "pre", t.style.userSelect = "all", t.style.opacity = "0px", t.textContent = e, document.body.appendChild(t);
    const n = document.createRange();
    n.selectNode(t);
    const o = window.getSelection();
    o.removeAllRanges(), o.addRange(n);
    try {
      document.execCommand("copy");
    } finally {
      document.body.removeChild(t);
    }
  }
  function uS(e) {
    navigator.clipboard ? navigator.clipboard.writeText(e).catch(() => {
      ga(e);
    }) : ga(e);
  }
  function dS(e) {
    var _a2;
    return !!(((_a2 = window.getSelection()) == null ? void 0 : _a2.toString()) || e && (e.selectionEnd || 0) - (e.selectionStart || 0) > 0);
  }
  const fS = (e, t) => {
    const n = t.ignoreValueFormatterDuringExport, o = (typeof n == "object" ? n == null ? void 0 : n.clipboardExport : n) || false, r = t.clipboardCopyCellDelimiter, l = u.useCallback((s) => {
      if (!ax(s) || dS(s.target)) return;
      let a = "";
      if (e.current.getSelectedRows().size > 0) a = e.current.getDataAsCsv({
        includeHeaders: false,
        delimiter: r,
        shouldAppendQuotes: false,
        escapeFormulas: false
      });
      else {
        const d = Ft(e);
        if (d) {
          const c = e.current.getCellParams(d.id, d.field);
          a = Pu(c, {
            csvOptions: {
              delimiter: r,
              shouldAppendQuotes: false,
              escapeFormulas: false
            },
            ignoreValueFormatter: o
          });
        }
      }
      a = e.current.unstable_applyPipeProcessors("clipboardCopy", a), a && (uS(a), e.current.publishEvent("clipboardCopy", a));
    }, [
      e,
      o,
      r
    ]);
    Gc(e, () => e.current.rootElementRef.current, "keydown", l), qe(e, "clipboardCopy", t.onClipboardCopy);
  }, pS = (e) => g({}, e, {
    columnMenu: {
      open: false
    }
  }), gS = (e) => {
    const t = ft(e, "useGridColumnMenu"), n = u.useCallback((s) => {
      const a = Dr(e.current.state), i = {
        open: true,
        field: s
      };
      (i.open !== a.open || i.field !== a.field) && (e.current.setState((c) => c.columnMenu.open && c.columnMenu.field === s ? c : (t.debug("Opening Column Menu"), g({}, c, {
        columnMenu: {
          open: true,
          field: s
        }
      }))), e.current.hidePreferences());
    }, [
      e,
      t
    ]), o = u.useCallback(() => {
      const s = Dr(e.current.state);
      if (s.field) {
        const d = Pn(e), c = Kt(e), f = yn(e);
        let p = s.field;
        if (d[p] || (p = f[0]), c[p] === false) {
          const m = f.filter((C) => C === p ? true : c[C] !== false), h = m.indexOf(p);
          p = m[h + 1] || m[h - 1];
        }
        e.current.setColumnHeaderFocus(p);
      }
      const a = {
        open: false,
        field: void 0
      };
      (a.open !== s.open || a.field !== s.field) && e.current.setState((d) => (t.debug("Hiding Column Menu"), g({}, d, {
        columnMenu: a
      })));
    }, [
      e,
      t
    ]), r = u.useCallback((s) => {
      t.debug("Toggle Column Menu");
      const a = Dr(e.current.state);
      !a.open || a.field !== s ? n(s) : o();
    }, [
      e,
      t,
      n,
      o
    ]);
    Ie(e, {
      showColumnMenu: n,
      hideColumnMenu: o,
      toggleColumnMenu: r
    }, "public"), oe(e, "columnResizeStart", o), oe(e, "virtualScrollerWheel", e.current.hideColumnMenu), oe(e, "virtualScrollerTouchMove", e.current.hideColumnMenu);
  }, hS = (e, t, n) => {
    var _a2, _b2, _c2;
    const o = lo({
      apiRef: n,
      columnsToUpsert: t.columns,
      initialState: (_a2 = t.initialState) == null ? void 0 : _a2.columns,
      columnVisibilityModel: t.columnVisibilityModel ?? ((_c2 = (_b2 = t.initialState) == null ? void 0 : _b2.columns) == null ? void 0 : _c2.columnVisibilityModel) ?? {},
      keepOnlyColumnsToUpsert: true
    });
    return g({}, e, {
      columns: o,
      pinnedColumns: e.pinnedColumns ?? zr
    });
  };
  function mS(e, t) {
    var _a2, _b2;
    const n = ft(e, "useGridColumns"), o = u.useRef(t.columns);
    e.current.registerControlState({
      stateId: "visibleColumns",
      propModel: t.columnVisibilityModel,
      propOnChange: t.onColumnVisibilityModelChange,
      stateSelector: Kt,
      changeEvent: "columnVisibilityModelChange"
    });
    const r = u.useCallback((y) => {
      n.debug("Updating columns state."), e.current.setState(ha(y)), e.current.publishEvent("columnsChange", y.orderedFields);
    }, [
      n,
      e
    ]), l = u.useCallback((y) => Pn(e)[y], [
      e
    ]), s = u.useCallback(() => Qt(e), [
      e
    ]), a = u.useCallback(() => ot(e), [
      e
    ]), i = u.useCallback((y, k = true) => (k ? ot(e) : Qt(e)).findIndex(($) => $.field === y), [
      e
    ]), d = u.useCallback((y) => {
      const k = i(y);
      return Gn(e)[k];
    }, [
      e,
      i
    ]), c = u.useCallback((y) => {
      var _a3, _b3;
      Kt(e) !== y && (e.current.setState((D) => g({}, D, {
        columns: lo({
          apiRef: e,
          columnsToUpsert: [],
          initialState: void 0,
          columnVisibilityModel: y,
          keepOnlyColumnsToUpsert: false
        })
      })), (_b3 = (_a3 = e.current).updateRenderContext) == null ? void 0 : _b3.call(_a3), e.current.forceUpdate());
    }, [
      e
    ]), f = u.useCallback((y) => {
      const k = lo({
        apiRef: e,
        columnsToUpsert: y,
        initialState: void 0,
        keepOnlyColumnsToUpsert: false
      });
      r(k);
    }, [
      e,
      r
    ]), p = u.useCallback((y, k) => {
      const D = Kt(e), $ = D[y] ?? true;
      if (k !== $) {
        const V = g({}, D, {
          [y]: k
        });
        e.current.setColumnVisibilityModel(V);
      }
    }, [
      e
    ]), m = u.useCallback((y) => yn(e).findIndex((D) => D === y), [
      e
    ]), h = u.useCallback((y, k) => {
      const D = yn(e), $ = m(y);
      if ($ === k) return;
      n.debug(`Moving column ${y} to index ${k}`);
      const V = [
        ...D
      ], E = V.splice($, 1)[0];
      V.splice(k, 0, E), r(g({}, gn(e.current.state), {
        orderedFields: V
      }));
      const S = {
        column: e.current.getColumn(y),
        targetIndex: e.current.getColumnIndexRelativeToVisibleColumns(y),
        oldIndex: $
      };
      e.current.publishEvent("columnIndexChange", S);
    }, [
      e,
      n,
      r,
      m
    ]), C = u.useCallback((y, k) => {
      n.debug(`Updating column ${y} width to ${k}`);
      const D = gn(e.current.state), $ = D.lookup[y], V = g({}, $, {
        width: k,
        hasBeenResized: true
      });
      r(_l(g({}, D, {
        lookup: g({}, D.lookup, {
          [y]: V
        })
      }), e.current.getRootDimensions())), e.current.publishEvent("columnWidthChange", {
        element: e.current.getColumnHeaderElement(y),
        colDef: V,
        width: k
      });
    }, [
      e,
      n,
      r
    ]), x = {
      getColumn: l,
      getAllColumns: s,
      getColumnIndex: i,
      getColumnPosition: d,
      getVisibleColumns: a,
      getColumnIndexRelativeToVisibleColumns: m,
      updateColumns: f,
      setColumnVisibilityModel: c,
      setColumnVisibility: p,
      setColumnWidth: C
    }, M = {
      setColumnIndex: h
    };
    Ie(e, x, "public"), Ie(e, M, t.signature === Xt.DataGrid ? "private" : "public");
    const v = u.useCallback((y, k) => {
      var _a3, _b3;
      const D = {}, $ = Kt(e);
      (!k.exportOnlyDirtyModels || t.columnVisibilityModel != null || Object.keys(((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.columns) == null ? void 0 : _b3.columnVisibilityModel) ?? {}).length > 0 || Object.keys($).length > 0) && (D.columnVisibilityModel = $), D.orderedFields = yn(e);
      const E = Qt(e), S = {};
      return E.forEach((F) => {
        if (F.hasBeenResized) {
          const A = {};
          Qc.forEach((z) => {
            let j = F[z];
            j === 1 / 0 && (j = -1), A[z] = j;
          }), S[F.field] = A;
        }
      }), Object.keys(S).length > 0 && (D.dimensions = S), g({}, y, {
        columns: D
      });
    }, [
      e,
      t.columnVisibilityModel,
      (_a2 = t.initialState) == null ? void 0 : _a2.columns
    ]), O = u.useCallback((y, k) => {
      var _a3;
      const D = (_a3 = k.stateToRestore.columns) == null ? void 0 : _a3.columnVisibilityModel, $ = k.stateToRestore.columns;
      if (D == null && $ == null) return y;
      const V = lo({
        apiRef: e,
        columnsToUpsert: [],
        initialState: $,
        columnVisibilityModel: D,
        keepOnlyColumnsToUpsert: false
      });
      return e.current.setState(ha(V)), $ != null && e.current.publishEvent("columnsChange", V.orderedFields), y;
    }, [
      e
    ]), G = u.useCallback((y, k) => {
      var _a3;
      if (k === Kn.columns) {
        const D = t.slots.columnsPanel;
        return b.jsx(D, g({}, (_a3 = t.slotProps) == null ? void 0 : _a3.columnsPanel));
      }
      return y;
    }, [
      t.slots.columnsPanel,
      (_b2 = t.slotProps) == null ? void 0 : _b2.columnsPanel
    ]), P = u.useCallback((y) => t.disableColumnSelector ? y : [
      ...y,
      "columnMenuColumnsItem"
    ], [
      t.disableColumnSelector
    ]);
    Ze(e, "columnMenu", P), Ze(e, "exportState", v), Ze(e, "restoreState", O), Ze(e, "preferencePanel", G);
    const H = u.useRef(null);
    oe(e, "viewportInnerSizeChange", (y) => {
      if (H.current !== y.width) {
        if (H.current = y.width, !ot(e).some((D) => D.flex && D.flex > 0)) return;
        r(_l(gn(e.current.state), e.current.getRootDimensions()));
      }
    });
    const T = u.useCallback(() => {
      n.info("Columns pipe processing have changed, regenerating the columns");
      const y = lo({
        apiRef: e,
        columnsToUpsert: [],
        initialState: void 0,
        keepOnlyColumnsToUpsert: false
      });
      r(y);
    }, [
      e,
      n,
      r
    ]);
    Gs(e, "hydrateColumns", T);
    const w = u.useRef(true);
    u.useEffect(() => {
      if (w.current) {
        w.current = false;
        return;
      }
      if (n.info(`GridColumns have changed, new length ${t.columns.length}`), o.current === t.columns) return;
      const y = lo({
        apiRef: e,
        initialState: void 0,
        columnsToUpsert: t.columns,
        keepOnlyColumnsToUpsert: true
      });
      o.current = t.columns, r(y);
    }, [
      n,
      e,
      r,
      t.columns
    ]), u.useEffect(() => {
      t.columnVisibilityModel !== void 0 && e.current.setColumnVisibilityModel(t.columnVisibilityModel);
    }, [
      e,
      n,
      t.columnVisibilityModel
    ]);
  }
  function ha(e) {
    return (t) => g({}, t, {
      columns: e
    });
  }
  const bS = (e, t) => {
    var _a2;
    return g({}, e, {
      density: ((_a2 = t.initialState) == null ? void 0 : _a2.density) ?? t.density ?? "standard"
    });
  }, CS = (e, t) => {
    var _a2;
    const n = ft(e, "useDensity");
    e.current.registerControlState({
      stateId: "density",
      propModel: t.density,
      propOnChange: t.onDensityChange,
      stateSelector: io,
      changeEvent: "densityChange"
    });
    const r = {
      setDensity: We((a) => {
        io(e.current.state) !== a && (n.debug(`Set grid density to ${a}`), e.current.setState((d) => g({}, d, {
          density: a
        })));
      })
    };
    Ie(e, r, "public");
    const l = u.useCallback((a, i) => {
      var _a3;
      const d = io(e.current.state);
      return !i.exportOnlyDirtyModels || t.density != null || ((_a3 = t.initialState) == null ? void 0 : _a3.density) != null ? g({}, a, {
        density: d
      }) : a;
    }, [
      e,
      t.density,
      (_a2 = t.initialState) == null ? void 0 : _a2.density
    ]), s = u.useCallback((a, i) => {
      var _a3;
      const d = ((_a3 = i.stateToRestore) == null ? void 0 : _a3.density) ? i.stateToRestore.density : io(e.current.state);
      return e.current.setState((c) => g({}, c, {
        density: d
      })), a;
    }, [
      e
    ]);
    Ze(e, "exportState", l), Ze(e, "restoreState", s), u.useEffect(() => {
      t.density && e.current.setDensity(t.density);
    }, [
      e,
      t.density
    ]);
  };
  function wS(e, t = "csv", n = document.title || "untitled") {
    const o = `${n}.${t}`;
    if ("download" in HTMLAnchorElement.prototype) {
      const r = URL.createObjectURL(e), l = document.createElement("a");
      l.href = r, l.download = o, l.click(), setTimeout(() => {
        URL.revokeObjectURL(r);
      });
      return;
    }
    throw new Error("MUI X: exportAs not supported.");
  }
  const Mu = ({ apiRef: e, options: t }) => {
    const n = Qt(e);
    return t.fields ? t.fields.reduce((r, l) => {
      const s = n.find((a) => a.field === l);
      return s && r.push(s), r;
    }, []) : (t.allColumns ? n : ot(e)).filter((r) => !r.disableExport);
  }, ku = ({ apiRef: e }) => {
    var _a2, _b2;
    const t = $c(e), n = at(e), o = e.current.getSelectedRows(), r = t.filter((i) => n[i].type !== "footer"), l = Po(e), s = ((_a2 = l == null ? void 0 : l.top) == null ? void 0 : _a2.map((i) => i.id)) || [], a = ((_b2 = l == null ? void 0 : l.bottom) == null ? void 0 : _b2.map((i) => i.id)) || [];
    return r.unshift(...s), r.push(...a), o.size > 0 ? r.filter((i) => o.has(i)) : r;
  }, vS = (e, t) => {
    const n = ft(e, "useGridCsvExport"), o = t.ignoreValueFormatterDuringExport, r = (typeof o == "object" ? o == null ? void 0 : o.csvExport : o) || false, l = u.useCallback((d = {}) => {
      n.debug("Get data as CSV");
      const c = Mu({
        apiRef: e,
        options: d
      }), p = (d.getRowsToExport ?? ku)({
        apiRef: e
      });
      return cS({
        columns: c,
        rowIds: p,
        csvOptions: {
          delimiter: d.delimiter || ",",
          shouldAppendQuotes: d.shouldAppendQuotes ?? true,
          includeHeaders: d.includeHeaders ?? true,
          includeColumnGroupsHeaders: d.includeColumnGroupsHeaders ?? true,
          escapeFormulas: d.escapeFormulas ?? true
        },
        ignoreValueFormatter: r,
        apiRef: e
      });
    }, [
      n,
      e,
      r
    ]), s = u.useCallback((d) => {
      n.debug("Export data as CSV");
      const c = l(d), f = new Blob([
        (d == null ? void 0 : d.utf8WithBom) ? new Uint8Array([
          239,
          187,
          191
        ]) : "",
        c
      ], {
        type: "text/csv"
      });
      wS(f, "csv", d == null ? void 0 : d.fileName);
    }, [
      n,
      l
    ]);
    Ie(e, {
      getDataAsCsv: l,
      exportDataAsCsv: s
    }, "public");
    const i = u.useCallback((d, c) => {
      var _a2;
      return ((_a2 = c.csvOptions) == null ? void 0 : _a2.disableToolbarButton) ? d : [
        ...d,
        {
          component: b.jsx(py, {
            options: c.csvOptions
          }),
          componentName: "csvExport"
        }
      ];
    }, []);
    Ze(e, "exportMenu", i);
  }, $r = (e, t, n) => {
    let o = e.paginationModel;
    const r = e.rowCount, l = (n == null ? void 0 : n.pageSize) ?? o.pageSize, s = (n == null ? void 0 : n.page) ?? o.page, a = zc(r, l, s);
    n && ((n == null ? void 0 : n.page) !== o.page || (n == null ? void 0 : n.pageSize) !== o.pageSize) && (o = n);
    const i = l === -1 ? 0 : ub(o.page, a);
    return i !== o.page && (o = g({}, o, {
      page: i
    })), Vc(o.pageSize, t), o;
  }, xS = (e, t) => {
    var _a2, _b2;
    const n = ft(e, "useGridPaginationModel"), o = Q(e, Io), r = u.useRef(ht(e)), l = Math.floor(t.rowHeight * o);
    e.current.registerControlState({
      stateId: "paginationModel",
      propModel: t.paginationModel,
      propOnChange: t.onPaginationModelChange,
      stateSelector: xt,
      changeEvent: "paginationModelChange"
    });
    const s = u.useCallback((v) => {
      const O = xt(e);
      v !== O.page && (n.debug(`Setting page to ${v}`), e.current.setPaginationModel({
        page: v,
        pageSize: O.pageSize
      }));
    }, [
      e,
      n
    ]), a = u.useCallback((v) => {
      const O = xt(e);
      v !== O.pageSize && (n.debug(`Setting page size to ${v}`), e.current.setPaginationModel({
        pageSize: v,
        page: O.page
      }));
    }, [
      e,
      n
    ]), i = u.useCallback((v) => {
      const O = xt(e);
      v !== O && (n.debug("Setting 'paginationModel' to", v), e.current.setState((G) => g({}, G, {
        pagination: g({}, G.pagination, {
          paginationModel: $r(G.pagination, t.signature, v)
        })
      }), "setPaginationModel"));
    }, [
      e,
      n,
      t.signature
    ]);
    Ie(e, {
      setPage: s,
      setPageSize: a,
      setPaginationModel: i
    }, "public");
    const c = u.useCallback((v, O) => {
      var _a3, _b3;
      const G = xt(e);
      return !O.exportOnlyDirtyModels || t.paginationModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.paginationModel) != null || G.page !== 0 && G.pageSize !== cb(t.autoPageSize) ? g({}, v, {
        pagination: g({}, v.pagination, {
          paginationModel: G
        })
      }) : v;
    }, [
      e,
      t.paginationModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.paginationModel,
      t.autoPageSize
    ]), f = u.useCallback((v, O) => {
      var _a3, _b3;
      const G = ((_a3 = O.stateToRestore.pagination) == null ? void 0 : _a3.paginationModel) ? g({}, jc(t.autoPageSize), (_b3 = O.stateToRestore.pagination) == null ? void 0 : _b3.paginationModel) : xt(e);
      return e.current.setState((P) => g({}, P, {
        pagination: g({}, P.pagination, {
          paginationModel: $r(P.pagination, t.signature, G)
        })
      }), "stateRestorePreProcessing"), v;
    }, [
      e,
      t.autoPageSize,
      t.signature
    ]);
    Ze(e, "exportState", c), Ze(e, "restoreState", f);
    const p = () => {
      var _a3;
      const v = xt(e);
      ((_a3 = e.current.virtualScrollerRef) == null ? void 0 : _a3.current) && e.current.scrollToIndexes({
        rowIndex: v.page * v.pageSize
      });
    }, m = u.useCallback(() => {
      if (!t.autoPageSize) return;
      const v = e.current.getRootDimensions(), O = Math.max(1, Math.floor(v.viewportInnerSize.height / l));
      e.current.setPageSize(O);
    }, [
      e,
      t.autoPageSize,
      l
    ]), h = u.useCallback((v) => {
      if (v == null) return;
      const O = xt(e);
      if (O.page === 0) return;
      const G = Bc(e);
      O.page > G - 1 && e.current.setPage(Math.max(0, G - 1));
    }, [
      e
    ]), C = u.useCallback(() => {
      xt(e).page !== 0 && e.current.setPage(0), e.current.getScrollPosition().top !== 0 && e.current.scroll({
        top: 0
      });
    }, [
      e
    ]), x = u.useCallback((v) => {
      const O = g({}, v, {
        items: Lc(e)
      });
      $n(O, r.current) || (r.current = O, C());
    }, [
      e,
      C
    ]);
    oe(e, "viewportInnerSizeChange", m), oe(e, "paginationModelChange", p), oe(e, "rowCountChange", h), oe(e, "sortModelChange", Nn(t.resetPageOnSortFilter, C)), oe(e, "filterModelChange", Nn(t.resetPageOnSortFilter, x));
    const M = u.useRef(true);
    u.useEffect(() => {
      if (M.current) {
        M.current = false;
        return;
      }
      t.pagination && e.current.setState((v) => g({}, v, {
        pagination: g({}, v.pagination, {
          paginationModel: $r(v.pagination, t.signature, t.paginationModel)
        })
      }));
    }, [
      e,
      t.paginationModel,
      t.signature,
      t.pagination
    ]), u.useEffect(() => {
      e.current.setState((v) => {
        const O = t.pagination === true;
        return v.pagination.paginationMode === t.paginationMode || v.pagination.enabled === O ? v : g({}, v, {
          pagination: g({}, v.pagination, {
            paginationMode: t.paginationMode,
            enabled: t.pagination === true
          })
        });
      });
    }, [
      e,
      t.paginationMode,
      t.pagination
    ]), u.useEffect(m, [
      m
    ]);
  };
  function yS() {
    return new Promise((e) => {
      requestAnimationFrame(() => {
        e();
      });
    });
  }
  function SS(e) {
    const t = document.createElement("iframe");
    return t.style.position = "absolute", t.style.width = "0px", t.style.height = "0px", t.title = e || document.title, t;
  }
  const IS = (e, t) => {
    const n = e.current.rootElementRef.current !== null, o = ft(e, "useGridPrintExport"), r = u.useRef(null), l = u.useRef(null), s = u.useRef({}), a = u.useRef([]), i = u.useRef(null);
    u.useEffect(() => {
      r.current = qt(e.current.rootElementRef.current);
    }, [
      e,
      n
    ]);
    const d = u.useCallback((x, M, v) => new Promise((O) => {
      const G = Mu({
        apiRef: e,
        options: {
          fields: x,
          allColumns: M
        }
      }).map((R) => R.field), P = Qt(e), H = {};
      P.forEach((R) => {
        H[R.field] = G.includes(R.field);
      }), v && (H[To.field] = true), e.current.setColumnVisibilityModel(H), O();
    }), [
      e
    ]), c = u.useCallback((x) => {
      const v = x({
        apiRef: e
      }).reduce((O, G) => {
        const P = e.current.getRow(G);
        return P[vo] || O.push(P), O;
      }, []);
      e.current.setRows(v);
    }, [
      e
    ]), f = u.useCallback((x, M) => {
      var _a2, _b2, _c2;
      const v = g({
        copyStyles: true,
        hideToolbar: false,
        hideFooter: false,
        includeCheckboxes: false
      }, M), O = x.contentDocument;
      if (!O) return;
      const G = Oo(e.current.state), P = e.current.rootElementRef.current, H = P.cloneNode(true), R = H.querySelector(`.${I.main}`);
      R.style.overflow = "visible", H.style.contain = "size";
      let T = ((_a2 = P.querySelector(`.${I.toolbarContainer}`)) == null ? void 0 : _a2.offsetHeight) || 0, w = ((_b2 = P.querySelector(`.${I.footerContainer}`)) == null ? void 0 : _b2.offsetHeight) || 0;
      const y = H.querySelector(`.${I.footerContainer}`);
      v.hideToolbar && ((_c2 = H.querySelector(`.${I.toolbarContainer}`)) == null ? void 0 : _c2.remove(), T = 0), v.hideFooter && y && (y.remove(), w = 0);
      const k = G.currentPageTotalHeight + ll(e, t) + T + w;
      H.style.height = `${k}px`, H.style.boxSizing = "content-box", !v.hideFooter && y && (y.style.position = "absolute", y.style.width = "100%", y.style.top = `${k - w}px`);
      const D = document.createElement("div");
      D.appendChild(H), O.body.style.marginTop = "0px", O.body.innerHTML = D.innerHTML;
      const $ = typeof v.pageStyle == "function" ? v.pageStyle() : v.pageStyle;
      if (typeof $ == "string") {
        const E = O.createElement("style");
        E.appendChild(O.createTextNode($)), O.head.appendChild(E);
      }
      v.bodyClassName && O.body.classList.add(...v.bodyClassName.split(" "));
      const V = [];
      if (v.copyStyles) {
        const E = P.getRootNode(), F = (E.constructor.name === "ShadowRoot" ? E : r.current).querySelectorAll("style, link[rel='stylesheet']");
        for (let A = 0; A < F.length; A += 1) {
          const z = F[A];
          if (z.tagName === "STYLE") {
            const j = O.createElement(z.tagName), L = z.sheet;
            if (L) {
              let N = "";
              for (let W = 0; W < L.cssRules.length; W += 1) typeof L.cssRules[W].cssText == "string" && (N += `${L.cssRules[W].cssText}\r
`);
              j.appendChild(O.createTextNode(N)), O.head.appendChild(j);
            }
          } else if (z.getAttribute("href")) {
            const j = O.createElement(z.tagName);
            for (let L = 0; L < z.attributes.length; L += 1) {
              const N = z.attributes[L];
              N && j.setAttribute(N.nodeName, N.nodeValue || "");
            }
            V.push(new Promise((L) => {
              j.addEventListener("load", () => L());
            })), O.head.appendChild(j);
          }
        }
      }
      Promise.all(V).then(() => {
        x.contentWindow.print();
      });
    }, [
      e,
      r,
      t
    ]), p = u.useCallback((x) => {
      var _a2, _b2;
      r.current.body.removeChild(x), e.current.restoreState(l.current || {}), ((_b2 = (_a2 = l.current) == null ? void 0 : _a2.columns) == null ? void 0 : _b2.columnVisibilityModel) || e.current.setColumnVisibilityModel(s.current), e.current.setState((M) => g({}, M, {
        virtualization: i.current
      })), e.current.setRows(a.current), l.current = null, s.current = {}, a.current = [];
    }, [
      e
    ]), h = {
      exportDataAsPrint: u.useCallback(async (x) => {
        if (o.debug("Export data as Print"), !e.current.rootElementRef.current) throw new Error("MUI X: No grid root element available.");
        if (l.current = e.current.exportState(), s.current = Kt(e), a.current = e.current.getSortedRows().filter((v) => !v[vo]), t.pagination) {
          const O = {
            page: 0,
            pageSize: Ss(e)
          };
          e.current.setState((G) => g({}, G, {
            pagination: g({}, G.pagination, {
              paginationModel: $r(G.pagination, "DataGridPro", O)
            })
          }));
        }
        i.current = e.current.state.virtualization, e.current.unstable_setVirtualization(false), await d(x == null ? void 0 : x.fields, x == null ? void 0 : x.allColumns, x == null ? void 0 : x.includeCheckboxes), c((x == null ? void 0 : x.getRowsToExport) ?? ku), await yS();
        const M = SS(x == null ? void 0 : x.fileName);
        M.onload = () => {
          f(M, x), M.contentWindow.matchMedia("print").addEventListener("change", (O) => {
            O.matches === false && p(M);
          });
        }, r.current.body.appendChild(M);
      }, [
        t,
        o,
        e,
        f,
        p,
        d,
        c
      ])
    };
    Ie(e, h, "public");
    const C = u.useCallback((x, M) => {
      var _a2;
      return ((_a2 = M.printOptions) == null ? void 0 : _a2.disableToolbarButton) ? x : [
        ...x,
        {
          component: b.jsx(gy, {
            options: M.printOptions
          }),
          componentName: "printExport"
        }
      ];
    }, []);
    Ze(e, "exportMenu", C);
  }, PS = (e, t, n) => {
    var _a2, _b2;
    const o = t.filterModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.filter) == null ? void 0 : _b2.filterModel) ?? er();
    return g({}, e, {
      filter: g({
        filterModel: ws(o, t.disableMultipleColumnsFiltering, n)
      }, bc),
      visibleRowsLookup: {}
    });
  }, MS = (e) => e.filteredRowsLookup;
  function ma(e, t) {
    return e.current.applyStrategyProcessor("visibleRowsLookupCreation", {
      tree: t.rows.tree,
      filteredRowsLookup: t.filter.filteredRowsLookup
    });
  }
  function kS() {
    return Qa(Object.values);
  }
  const ES = (e, t) => {
    var _a2, _b2, _c2;
    const n = ft(e, "useGridFilter");
    e.current.registerControlState({
      stateId: "filter",
      propModel: t.filterModel,
      propOnChange: t.onFilterModelChange,
      stateSelector: ht,
      changeEvent: "filterModelChange"
    });
    const o = u.useCallback(() => {
      e.current.setState((w) => {
        const y = ht(w, e.current.instanceId), k = e.current.getFilterState(y), D = g({}, w, {
          filter: g({}, w.filter, k)
        }), $ = ma(e, D);
        return g({}, D, {
          visibleRowsLookup: $
        });
      }), e.current.publishEvent("filteredRowsSet");
    }, [
      e
    ]), r = u.useCallback((w, y) => y == null || y.filterable === false || t.disableColumnFilter ? w : [
      ...w,
      "columnMenuFilterItem"
    ], [
      t.disableColumnFilter
    ]), l = u.useCallback(() => {
      o(), e.current.forceUpdate();
    }, [
      e,
      o
    ]), s = u.useCallback((w) => {
      const y = ht(e), k = [
        ...y.items
      ], D = k.findIndex(($) => $.id === w.id);
      D === -1 ? k.push(w) : k[D] = w, e.current.setFilterModel(g({}, y, {
        items: k
      }), "upsertFilterItem");
    }, [
      e
    ]), a = u.useCallback((w) => {
      const y = ht(e), k = [
        ...y.items
      ];
      w.forEach((D) => {
        const $ = k.findIndex((V) => V.id === D.id);
        $ === -1 ? k.push(D) : k[$] = D;
      }), e.current.setFilterModel(g({}, y, {
        items: k
      }), "upsertFilterItems");
    }, [
      e
    ]), i = u.useCallback((w) => {
      const y = ht(e), k = y.items.filter((D) => D.id !== w.id);
      k.length !== y.items.length && e.current.setFilterModel(g({}, y, {
        items: k
      }), "deleteFilterItem");
    }, [
      e
    ]), d = u.useCallback((w, y, k) => {
      if (n.debug("Displaying filter panel"), w) {
        const D = ht(e), $ = D.items.filter((F) => {
          var _a3;
          if (F.value !== void 0) return !(Array.isArray(F.value) && F.value.length === 0);
          const z = (_a3 = e.current.getColumn(F.field).filterOperators) == null ? void 0 : _a3.find((L) => L.value === F.operator);
          return !(typeof (z == null ? void 0 : z.requiresFilterValue) > "u" ? true : z == null ? void 0 : z.requiresFilterValue);
        });
        let V;
        const E = $.find((F) => F.field === w), S = e.current.getColumn(w);
        E ? V = $ : t.disableMultipleColumnsFiltering ? V = [
          Nl({
            field: w,
            operator: S.filterOperators[0].value
          }, e)
        ] : V = [
          ...$,
          Nl({
            field: w,
            operator: S.filterOperators[0].value
          }, e)
        ], e.current.setFilterModel(g({}, D, {
          items: V
        }));
      }
      e.current.showPreferences(Kn.filters, y, k);
    }, [
      e,
      n,
      t.disableMultipleColumnsFiltering
    ]), c = u.useCallback(() => {
      n.debug("Hiding filter panel"), e.current.hidePreferences();
    }, [
      e,
      n
    ]), f = u.useCallback((w) => {
      const y = ht(e);
      y.logicOperator !== w && e.current.setFilterModel(g({}, y, {
        logicOperator: w
      }), "changeLogicOperator");
    }, [
      e
    ]), p = u.useCallback((w) => {
      const y = ht(e);
      $n(y.quickFilterValues, w) || e.current.setFilterModel(g({}, y, {
        quickFilterValues: [
          ...w
        ]
      }));
    }, [
      e
    ]), m = u.useCallback((w, y) => {
      ht(e) !== w && (n.debug("Setting filter model"), e.current.updateControlState("filter", Ti(w, t.disableMultipleColumnsFiltering, e), y), e.current.unstable_applyFilters());
    }, [
      e,
      n,
      t.disableMultipleColumnsFiltering
    ]), h = u.useCallback((w) => {
      const y = ws(w, t.disableMultipleColumnsFiltering, e), k = t.filterMode === "client" ? fm(y, e, t.disableEval) : null, D = e.current.applyStrategyProcessor("filtering", {
        isRowMatchingFilters: k,
        filterModel: y ?? er()
      });
      return g({}, D, {
        filterModel: y
      });
    }, [
      t.disableMultipleColumnsFiltering,
      t.filterMode,
      t.disableEval,
      e
    ]), C = {
      setFilterLogicOperator: f,
      unstable_applyFilters: l,
      deleteFilterItem: i,
      upsertFilterItem: s,
      upsertFilterItems: a,
      setFilterModel: m,
      showFilterPanel: d,
      hideFilterPanel: c,
      setQuickFilterValues: p,
      ignoreDiacritics: t.ignoreDiacritics,
      getFilterState: h
    };
    Ie(e, C, "public");
    const x = u.useCallback((w, y) => {
      var _a3, _b3;
      const k = ht(e);
      return k.items.forEach(($) => {
        delete $.fromInput;
      }), !y.exportOnlyDirtyModels || t.filterModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.filter) == null ? void 0 : _b3.filterModel) != null || !$n(k, er()) ? g({}, w, {
        filter: {
          filterModel: k
        }
      }) : w;
    }, [
      e,
      t.filterModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.filter) == null ? void 0 : _b2.filterModel
    ]), M = u.useCallback((w, y) => {
      var _a3;
      const k = (_a3 = y.stateToRestore.filter) == null ? void 0 : _a3.filterModel;
      return k == null ? w : (e.current.updateControlState("filter", Ti(k, t.disableMultipleColumnsFiltering, e), "restoreState"), g({}, w, {
        callbacks: [
          ...w.callbacks,
          e.current.unstable_applyFilters
        ]
      }));
    }, [
      e,
      t.disableMultipleColumnsFiltering
    ]), v = u.useCallback((w, y) => {
      var _a3;
      if (y === Kn.filters) {
        const k = t.slots.filterPanel;
        return b.jsx(k, g({}, (_a3 = t.slotProps) == null ? void 0 : _a3.filterPanel));
      }
      return w;
    }, [
      t.slots.filterPanel,
      (_c2 = t.slotProps) == null ? void 0 : _c2.filterPanel
    ]), { getRowId: O } = t, G = bn(kS), P = u.useCallback((w) => {
      var _a3;
      if (t.filterMode !== "client" || !w.isRowMatchingFilters || !w.filterModel.items.length && !((_a3 = w.filterModel.quickFilterValues) == null ? void 0 : _a3.length)) return bc;
      const y = Ut(e), k = {}, { isRowMatchingFilters: D } = w, $ = {}, V = {
        passingFilterItems: null,
        passingQuickFilterValues: null
      }, E = G.current(e.current.state.rows.dataRowIdToModelLookup);
      for (let A = 0; A < E.length; A += 1) {
        const z = E[A], j = O ? O(z) : z.id;
        D(z, void 0, V);
        const L = gm([
          V.passingFilterItems
        ], [
          V.passingQuickFilterValues
        ], w.filterModel, e, $);
        k[j] = L;
      }
      const S = "auto-generated-group-footer-root";
      return y[S] && (k[S] = true), {
        filteredRowsLookup: k,
        filteredChildrenCountLookup: {},
        filteredDescendantCountLookup: {}
      };
    }, [
      e,
      t.filterMode,
      O,
      G
    ]);
    Ze(e, "columnMenu", r), Ze(e, "exportState", x), Ze(e, "restoreState", M), Ze(e, "preferencePanel", v), qr(e, qn, "filtering", P), qr(e, qn, "visibleRowsLookupCreation", MS);
    const H = u.useCallback(() => {
      n.debug("onColUpdated - GridColumns changed, applying filters");
      const w = ht(e), y = Pn(e), k = w.items.filter((D) => D.field && y[D.field]);
      k.length < w.items.length && e.current.setFilterModel(g({}, w, {
        items: k
      }));
    }, [
      e,
      n
    ]), R = u.useCallback((w) => {
      w === "filtering" && e.current.unstable_applyFilters();
    }, [
      e
    ]), T = u.useCallback(() => {
      e.current.setState((w) => g({}, w, {
        visibleRowsLookup: ma(e, w)
      })), e.current.forceUpdate();
    }, [
      e
    ]);
    oe(e, "rowsSet", o), oe(e, "columnsChange", H), oe(e, "activeStrategyProcessorChange", R), oe(e, "rowExpansionChange", T), oe(e, "columnVisibilityModelChange", () => {
      const w = ht(e);
      w.quickFilterValues && Ic(w) && e.current.unstable_applyFilters();
    }), fr(() => {
      e.current.unstable_applyFilters();
    }), mt(() => {
      t.filterModel !== void 0 && e.current.setFilterModel(t.filterModel);
    }, [
      e,
      n,
      t.filterModel
    ]);
  }, FS = (e) => g({}, e, {
    focus: {
      cell: null,
      columnHeader: null,
      columnHeaderFilter: null,
      columnGroupHeader: null
    },
    tabIndex: {
      cell: null,
      columnHeader: null,
      columnHeaderFilter: null,
      columnGroupHeader: null
    }
  }), TS = (e, t) => {
    const n = ft(e, "useGridFocus"), o = u.useRef(null), r = e.current.rootElementRef.current !== null, l = u.useCallback((T, w) => {
      T && e.current.getRow(T.id) && e.current.publishEvent("cellFocusOut", e.current.getCellParams(T.id, T.field), w);
    }, [
      e
    ]), s = u.useCallback((T, w) => {
      const y = Ft(e);
      (y == null ? void 0 : y.id) === T && (y == null ? void 0 : y.field) === w || (e.current.setState((k) => (n.debug(`Focusing on cell with id=${T} and field=${w}`), g({}, k, {
        tabIndex: {
          cell: {
            id: T,
            field: w
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        },
        focus: {
          cell: {
            id: T,
            field: w
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      }))), e.current.forceUpdate(), e.current.getRow(T) && (y && l(y, {}), e.current.publishEvent("cellFocusIn", e.current.getCellParams(T, w))));
    }, [
      e,
      n,
      l
    ]), a = u.useCallback((T, w = {}) => {
      const y = Ft(e);
      l(y, w), e.current.setState((k) => (n.debug(`Focusing on column header with colIndex=${T}`), g({}, k, {
        tabIndex: {
          columnHeader: {
            field: T
          },
          columnHeaderFilter: null,
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: {
            field: T
          },
          columnHeaderFilter: null,
          cell: null,
          columnGroupHeader: null
        }
      }))), e.current.forceUpdate();
    }, [
      e,
      n,
      l
    ]), i = u.useCallback((T, w = {}) => {
      const y = Ft(e);
      l(y, w), e.current.setState((k) => (n.debug(`Focusing on column header filter with colIndex=${T}`), g({}, k, {
        tabIndex: {
          columnHeader: null,
          columnHeaderFilter: {
            field: T
          },
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: null,
          columnHeaderFilter: {
            field: T
          },
          cell: null,
          columnGroupHeader: null
        }
      }))), e.current.forceUpdate();
    }, [
      e,
      n,
      l
    ]), d = u.useCallback((T, w, y = {}) => {
      const k = Ft(e);
      k && e.current.publishEvent("cellFocusOut", e.current.getCellParams(k.id, k.field), y), e.current.setState((D) => g({}, D, {
        tabIndex: {
          columnGroupHeader: {
            field: T,
            depth: w
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        },
        focus: {
          columnGroupHeader: {
            field: T,
            depth: w
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        }
      })), e.current.forceUpdate();
    }, [
      e
    ]), c = u.useCallback(() => jr(e), [
      e
    ]), f = u.useCallback((T, w, y) => {
      let k = e.current.getColumnIndex(w);
      const D = ot(e), $ = Ln(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      }), V = Po(e), E = [].concat(V.top || [], $.rows, V.bottom || []);
      let S = E.findIndex((j) => j.id === T);
      y === "right" ? k += 1 : y === "left" ? k -= 1 : S += 1, k >= D.length ? (S += 1, S < E.length && (k = 0)) : k < 0 && (S -= 1, S >= 0 && (k = D.length - 1)), S = Gt(S, 0, E.length - 1);
      const F = E[S];
      if (!F) return;
      const A = e.current.unstable_getCellColSpanInfo(F.id, k);
      A && A.spannedByColSpan && (y === "left" || y === "below" ? k = A.leftVisibleCellIndex : y === "right" && (k = A.rightVisibleCellIndex)), k = Gt(k, 0, D.length - 1);
      const z = D[k];
      e.current.setCellFocus(F.id, z.field);
    }, [
      e,
      t.pagination,
      t.paginationMode
    ]), p = u.useCallback(({ id: T, field: w }) => {
      e.current.setCellFocus(T, w);
    }, [
      e
    ]), m = u.useCallback((T, w) => {
      w.key === "Enter" || w.key === "Tab" || w.key === "Shift" || Wr(w.key) || e.current.setCellFocus(T.id, T.field);
    }, [
      e
    ]), h = u.useCallback(({ field: T }, w) => {
      w.target === w.currentTarget && e.current.setColumnHeaderFocus(T, w);
    }, [
      e
    ]), C = u.useCallback(({ fields: T, depth: w }, y) => {
      if (y.target !== y.currentTarget) return;
      const k = jr(e);
      k !== null && k.depth === w && T.includes(k.field) || e.current.setColumnGroupHeaderFocus(T[0], w, y);
    }, [
      e
    ]), x = u.useCallback((T, w) => {
      var _a2, _b2;
      ((_b2 = (_a2 = w.relatedTarget) == null ? void 0 : _a2.getAttribute("class")) == null ? void 0 : _b2.includes(I.columnHeader)) || (n.debug("Clearing focus"), e.current.setState((y) => g({}, y, {
        focus: {
          cell: null,
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      })));
    }, [
      n,
      e
    ]), M = u.useCallback((T) => {
      o.current = T;
    }, []), v = u.useCallback((T) => {
      var _a2;
      const w = o.current;
      o.current = null;
      const y = Ft(e);
      if (!e.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
        event: T,
        cell: w
      })) return;
      if (!y) {
        w && e.current.setCellFocus(w.id, w.field);
        return;
      }
      (w == null ? void 0 : w.id) === y.id && (w == null ? void 0 : w.field) === y.field || ((_a2 = e.current.getCellElement(y.id, y.field)) == null ? void 0 : _a2.contains(T.target)) || (w ? e.current.setCellFocus(w.id, w.field) : (e.current.setState(($) => g({}, $, {
        focus: {
          cell: null,
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      })), e.current.forceUpdate(), l(y, T)));
    }, [
      e,
      l
    ]), O = u.useCallback((T) => {
      if (T.cellMode === "view") return;
      const w = Ft(e);
      ((w == null ? void 0 : w.id) !== T.id || (w == null ? void 0 : w.field) !== T.field) && e.current.setCellFocus(T.id, T.field);
    }, [
      e
    ]), G = u.useCallback(() => {
      var _a2;
      const T = Ft(e);
      if (T && !e.current.getRow(T.id)) {
        const w = T.id;
        let y = null;
        if (typeof w < "u") {
          const k = e.current.getRowElement(w), D = (k == null ? void 0 : k.dataset.rowindex) ? Number(k == null ? void 0 : k.dataset.rowindex) : 0, $ = Ln(e, {
            pagination: t.pagination,
            paginationMode: t.paginationMode
          });
          y = ((_a2 = $.rows[Gt(D, 0, $.rows.length - 1)]) == null ? void 0 : _a2.id) ?? null;
        }
        e.current.setState((k) => g({}, k, {
          focus: {
            cell: y === null ? null : {
              id: y,
              field: T.field
            },
            columnHeader: null,
            columnHeaderFilter: null,
            columnGroupHeader: null
          }
        }));
      }
    }, [
      e,
      t.pagination,
      t.paginationMode
    ]), P = We(() => {
      const T = Ft(e);
      if (!T) return;
      const w = Ln(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      });
      if (w.rows.find((D) => D.id === T.id)) return;
      const k = ot(e);
      e.current.setState((D) => g({}, D, {
        tabIndex: {
          cell: {
            id: w.rows[0].id,
            field: k[0].field
          },
          columnGroupHeader: null,
          columnHeader: null,
          columnHeaderFilter: null
        }
      }));
    }), H = {
      setCellFocus: s,
      setColumnHeaderFocus: a,
      setColumnHeaderFilterFocus: i
    }, R = {
      moveFocusToRelativeCell: f,
      setColumnGroupHeaderFocus: d,
      getColumnGroupHeaderFocus: c
    };
    Ie(e, H, "public"), Ie(e, R, "private"), u.useEffect(() => {
      const T = qt(e.current.rootElementRef.current);
      return T.addEventListener("mouseup", v), () => {
        T.removeEventListener("mouseup", v);
      };
    }, [
      e,
      r,
      v
    ]), oe(e, "columnHeaderBlur", x), oe(e, "cellDoubleClick", p), oe(e, "cellMouseDown", M), oe(e, "cellKeyDown", m), oe(e, "cellModeChange", O), oe(e, "columnHeaderFocus", h), oe(e, "columnGroupHeaderFocus", C), oe(e, "rowsSet", G), oe(e, "paginationModelChange", P);
  }, Pl = ({ currentColIndex: e, firstColIndex: t, lastColIndex: n, isRtl: o }) => {
    if (o) {
      if (e < n) return e + 1;
    } else if (!o && e > t) return e - 1;
    return null;
  }, Ml = ({ currentColIndex: e, firstColIndex: t, lastColIndex: n, isRtl: o }) => {
    if (o) {
      if (e > t) return e - 1;
    } else if (!o && e < n) return e + 1;
    return null;
  };
  function OS(e, t, n, o) {
    var _a2, _b2;
    const r = lu(e);
    if (!((_a2 = r[t]) == null ? void 0 : _a2[n])) return t;
    const l = $c(e);
    let s = l.indexOf(t) + (o === "down" ? 1 : -1);
    for (; s >= 0 && s < l.length; ) {
      const a = l[s];
      if (!((_b2 = r[a]) == null ? void 0 : _b2[n])) return a;
      s += o === "down" ? 1 : -1;
    }
    return t;
  }
  const DS = Be(gr, Po, (e, t) => (t.top || []).concat(e.rows, t.bottom || [])), $S = (e, t) => {
    const n = ft(e, "useGridKeyboardNavigation"), o = $t(), r = t.unstable_listView, l = u.useCallback(() => DS(e), [
      e
    ]), s = t.signature !== "DataGrid" && t.headerFilters, a = u.useCallback((M, v, O = "left", G = "up") => {
      const P = zn(e), H = e.current.unstable_getCellColSpanInfo(v, M);
      H && H.spannedByColSpan && (O === "left" ? M = H.leftVisibleCellIndex : O === "right" && (M = H.rightVisibleCellIndex));
      const R = r ? So(e.current.state).field : Mo(e)[M], T = OS(e, v, R, G), w = P.findIndex((y) => y.id === T);
      n.debug(`Navigating to cell row ${w}, col ${M}`), e.current.scrollToIndexes({
        colIndex: M,
        rowIndex: w
      }), e.current.setCellFocus(T, R);
    }, [
      e,
      n,
      r
    ]), i = u.useCallback((M, v) => {
      n.debug(`Navigating to header col ${M}`), e.current.scrollToIndexes({
        colIndex: M
      });
      const O = e.current.getVisibleColumns()[M].field;
      e.current.setColumnHeaderFocus(O, v);
    }, [
      e,
      n
    ]), d = u.useCallback((M, v) => {
      n.debug(`Navigating to header filter col ${M}`), e.current.scrollToIndexes({
        colIndex: M
      });
      const O = e.current.getVisibleColumns()[M].field;
      e.current.setColumnHeaderFilterFocus(O, v);
    }, [
      e,
      n
    ]), c = u.useCallback((M, v, O) => {
      n.debug(`Navigating to header col ${M}`), e.current.scrollToIndexes({
        colIndex: M
      });
      const { field: G } = e.current.getVisibleColumns()[M];
      e.current.setColumnGroupHeaderFocus(G, v, O);
    }, [
      e,
      n
    ]), f = u.useCallback((M) => {
      var _a2;
      return (_a2 = l()[M]) == null ? void 0 : _a2.id;
    }, [
      l
    ]), p = u.useCallback((M, v) => {
      const O = v.currentTarget.querySelector(`.${I.columnHeaderTitleContainerContent}`);
      if (!!O && O.contains(v.target) && M.field !== To.field) return;
      const P = l(), H = e.current.getViewportPageSize(), R = M.field ? e.current.getColumnIndex(M.field) : 0, T = P.length > 0 ? 0 : null, w = P.length - 1, y = 0, k = ot(e).length - 1, D = mr(e);
      let $ = true;
      switch (v.key) {
        case "ArrowDown": {
          s ? d(R, v) : T !== null && a(R, f(T));
          break;
        }
        case "ArrowRight": {
          const V = Ml({
            currentColIndex: R,
            firstColIndex: y,
            lastColIndex: k,
            isRtl: o
          });
          V !== null && i(V, v);
          break;
        }
        case "ArrowLeft": {
          const V = Pl({
            currentColIndex: R,
            firstColIndex: y,
            lastColIndex: k,
            isRtl: o
          });
          V !== null && i(V, v);
          break;
        }
        case "ArrowUp": {
          D > 0 && c(R, D - 1, v);
          break;
        }
        case "PageDown": {
          T !== null && w !== null && a(R, f(Math.min(T + H, w)));
          break;
        }
        case "Home": {
          i(y, v);
          break;
        }
        case "End": {
          i(k, v);
          break;
        }
        case "Enter": {
          (v.ctrlKey || v.metaKey) && e.current.toggleColumnMenu(M.field);
          break;
        }
        case " ":
          break;
        default:
          $ = false;
      }
      $ && v.preventDefault();
    }, [
      e,
      l,
      s,
      d,
      a,
      f,
      o,
      i,
      c
    ]), m = u.useCallback((M, v) => {
      const O = Yb(e) === M.field, G = Xb(e) === M.field;
      if (O || G || !Wr(v.key)) return;
      const P = l(), H = e.current.getViewportPageSize(), R = M.field ? e.current.getColumnIndex(M.field) : 0, T = 0, w = P.length - 1, y = 0, k = ot(e).length - 1;
      let D = true;
      switch (v.key) {
        case "ArrowDown": {
          const $ = f(T);
          $ != null && a(R, $);
          break;
        }
        case "ArrowRight": {
          const $ = Ml({
            currentColIndex: R,
            firstColIndex: y,
            lastColIndex: k,
            isRtl: o
          });
          $ !== null && d($, v);
          break;
        }
        case "ArrowLeft": {
          const $ = Pl({
            currentColIndex: R,
            firstColIndex: y,
            lastColIndex: k,
            isRtl: o
          });
          $ !== null ? d($, v) : e.current.setColumnHeaderFilterFocus(M.field, v);
          break;
        }
        case "ArrowUp": {
          i(R, v);
          break;
        }
        case "PageDown": {
          w !== null && a(R, f(Math.min(T + H, w)));
          break;
        }
        case "Home": {
          d(y, v);
          break;
        }
        case "End": {
          d(k, v);
          break;
        }
        case " ":
          break;
        default:
          D = false;
      }
      D && v.preventDefault();
    }, [
      e,
      l,
      d,
      o,
      i,
      a,
      f
    ]), h = u.useCallback((M, v) => {
      const O = jr(e);
      if (O === null) return;
      const { field: G, depth: P } = O, { fields: H, depth: R, maxDepth: T } = M, w = l(), y = e.current.getViewportPageSize(), k = e.current.getColumnIndex(G), D = G ? e.current.getColumnIndex(G) : 0, $ = 0, V = w.length - 1, E = 0, S = ot(e).length - 1;
      let F = true;
      switch (v.key) {
        case "ArrowDown": {
          R === T - 1 ? i(k, v) : c(k, P + 1, v);
          break;
        }
        case "ArrowUp": {
          R > 0 && c(k, P - 1, v);
          break;
        }
        case "ArrowRight": {
          const A = H.length - H.indexOf(G) - 1;
          k + A + 1 <= S && c(k + A + 1, P, v);
          break;
        }
        case "ArrowLeft": {
          const A = H.indexOf(G);
          k - A - 1 >= E && c(k - A - 1, P, v);
          break;
        }
        case "PageDown": {
          V !== null && a(D, f(Math.min($ + y, V)));
          break;
        }
        case "Home": {
          c(E, P, v);
          break;
        }
        case "End": {
          c(S, P, v);
          break;
        }
        case " ":
          break;
        default:
          F = false;
      }
      F && v.preventDefault();
    }, [
      e,
      l,
      i,
      c,
      a,
      f
    ]), C = u.useCallback((M, v) => {
      if (Cr(v)) return;
      const O = e.current.getCellParams(M.id, M.field);
      if (O.cellMode === Ke.Edit || !Wr(v.key) || !e.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
        event: v,
        cell: O
      })) return;
      const P = l();
      if (P.length === 0) return;
      const H = e.current.getViewportPageSize(), R = r ? () => 0 : e.current.getColumnIndex, T = M.field ? R(M.field) : 0, w = P.findIndex((S) => S.id === M.id), y = 0, k = P.length - 1, D = 0, V = (r ? [
        So(e.current.state)
      ] : ot(e)).length - 1;
      let E = true;
      switch (v.key) {
        case "ArrowDown": {
          w < k && a(T, f(w + 1), o ? "right" : "left", "down");
          break;
        }
        case "ArrowUp": {
          w > y ? a(T, f(w - 1)) : s ? d(T, v) : i(T, v);
          break;
        }
        case "ArrowRight": {
          const S = Ml({
            currentColIndex: T,
            firstColIndex: D,
            lastColIndex: V,
            isRtl: o
          });
          S !== null && a(S, f(w), o ? "left" : "right");
          break;
        }
        case "ArrowLeft": {
          const S = Pl({
            currentColIndex: T,
            firstColIndex: D,
            lastColIndex: V,
            isRtl: o
          });
          S !== null && a(S, f(w), o ? "right" : "left");
          break;
        }
        case "Tab": {
          v.shiftKey && T > D ? a(T - 1, f(w), "left") : !v.shiftKey && T < V && a(T + 1, f(w), "right");
          break;
        }
        case " ": {
          if (M.field === el) break;
          const F = M.colDef;
          if (F && (F.field === Em || Cw(F.field))) break;
          !v.shiftKey && w < k && a(T, f(Math.min(w + H, k)));
          break;
        }
        case "PageDown": {
          w < k && a(T, f(Math.min(w + H, k)));
          break;
        }
        case "PageUp": {
          const S = Math.max(w - H, y);
          S !== w && S >= y ? a(T, f(S)) : i(T, v);
          break;
        }
        case "Home": {
          v.ctrlKey || v.metaKey || v.shiftKey ? a(D, f(y)) : a(D, f(w));
          break;
        }
        case "End": {
          v.ctrlKey || v.metaKey || v.shiftKey ? a(V, f(k)) : a(V, f(w));
          break;
        }
        default:
          E = false;
      }
      E && v.preventDefault();
    }, [
      e,
      l,
      o,
      a,
      f,
      s,
      d,
      i,
      r
    ]), x = u.useCallback((M, { event: v }) => v.key === " " ? false : M, []);
    Ze(e, "canStartEditing", x), oe(e, "columnHeaderKeyDown", p), oe(e, "headerFilterKeyDown", m), oe(e, "columnGroupHeaderKeyDown", h), oe(e, "cellKeyDown", C);
  }, HS = (e, t) => {
    var _a2, _b2;
    const n = ft(e, "useGridRowCount"), o = Q(e, Is), r = Q(e, ao), l = Q(e, Bo), s = Q(e, xt), a = bn(() => xt(e).pageSize);
    e.current.registerControlState({
      stateId: "paginationRowCount",
      propModel: t.rowCount,
      propOnChange: t.onRowCountChange,
      stateSelector: ao,
      changeEvent: "rowCountChange"
    });
    const d = {
      setRowCount: u.useCallback((h) => {
        r !== h && (n.debug("Setting 'rowCount' to", h), e.current.setState((C) => g({}, C, {
          pagination: g({}, C.pagination, {
            rowCount: h
          })
        })));
      }, [
        e,
        n,
        r
      ])
    };
    Ie(e, d, "public");
    const c = u.useCallback((h, C) => {
      var _a3, _b3;
      const x = ao(e);
      return !C.exportOnlyDirtyModels || t.rowCount != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.rowCount) != null ? g({}, h, {
        pagination: g({}, h.pagination, {
          rowCount: x
        })
      }) : h;
    }, [
      e,
      t.rowCount,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.rowCount
    ]), f = u.useCallback((h, C) => {
      var _a3;
      const x = ((_a3 = C.stateToRestore.pagination) == null ? void 0 : _a3.rowCount) ? C.stateToRestore.pagination.rowCount : ao(e);
      return e.current.setState((M) => g({}, M, {
        pagination: g({}, M.pagination, {
          rowCount: x
        })
      })), h;
    }, [
      e
    ]);
    Ze(e, "exportState", c), Ze(e, "restoreState", f);
    const p = u.useCallback((h) => {
      t.paginationMode === "client" || !a.current || h.pageSize !== a.current && (a.current = h.pageSize, r === -1 && e.current.setPage(0));
    }, [
      t.paginationMode,
      a,
      r,
      e
    ]);
    oe(e, "paginationModelChange", p), u.useEffect(() => {
      t.paginationMode === "client" ? e.current.setRowCount(o) : t.rowCount != null && e.current.setRowCount(t.rowCount);
    }, [
      e,
      t.paginationMode,
      o,
      t.rowCount
    ]);
    const m = l.hasNextPage === false;
    u.useEffect(() => {
      m && r === -1 && e.current.setRowCount(s.pageSize * s.page + o);
    }, [
      e,
      o,
      m,
      r,
      s
    ]);
  }, LS = (e, t) => {
    var _a2, _b2;
    const n = ft(e, "useGridPaginationMeta"), o = Q(e, Bo);
    e.current.registerControlState({
      stateId: "paginationMeta",
      propModel: t.paginationMeta,
      propOnChange: t.onPaginationMetaChange,
      stateSelector: Bo,
      changeEvent: "paginationMetaChange"
    });
    const l = {
      setPaginationMeta: u.useCallback((i) => {
        o !== i && (n.debug("Setting 'paginationMeta' to", i), e.current.setState((d) => g({}, d, {
          pagination: g({}, d.pagination, {
            meta: i
          })
        })));
      }, [
        e,
        n,
        o
      ])
    };
    Ie(e, l, "public");
    const s = u.useCallback((i, d) => {
      var _a3, _b3;
      const c = Bo(e);
      return !d.exportOnlyDirtyModels || t.paginationMeta != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.pagination) == null ? void 0 : _b3.meta) != null ? g({}, i, {
        pagination: g({}, i.pagination, {
          meta: c
        })
      }) : i;
    }, [
      e,
      t.paginationMeta,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.meta
    ]), a = u.useCallback((i, d) => {
      var _a3;
      const c = ((_a3 = d.stateToRestore.pagination) == null ? void 0 : _a3.meta) ? d.stateToRestore.pagination.meta : Bo(e);
      return e.current.setState((f) => g({}, f, {
        pagination: g({}, f.pagination, {
          meta: c
        })
      })), i;
    }, [
      e
    ]);
    Ze(e, "exportState", s), Ze(e, "restoreState", a), u.useEffect(() => {
      t.paginationMeta && e.current.setPaginationMeta(t.paginationMeta);
    }, [
      e,
      t.paginationMeta
    ]);
  }, RS = (e, t) => {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2;
    const n = g({}, jc(t.autoPageSize), t.paginationModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.paginationModel));
    Vc(n.pageSize, t.signature);
    const o = t.rowCount ?? ((_d2 = (_c2 = t.initialState) == null ? void 0 : _c2.pagination) == null ? void 0 : _d2.rowCount) ?? (t.paginationMode === "client" ? (_e = e.rows) == null ? void 0 : _e.totalRowCount : void 0), r = t.paginationMeta ?? ((_g2 = (_f2 = t.initialState) == null ? void 0 : _f2.pagination) == null ? void 0 : _g2.meta) ?? {};
    return g({}, e, {
      pagination: g({}, e.pagination, {
        paginationModel: n,
        rowCount: o,
        meta: r,
        enabled: t.pagination === true,
        paginationMode: t.paginationMode
      })
    });
  }, AS = (e, t) => {
    LS(e, t), xS(e, t), HS(e, t);
  }, GS = (e, t) => {
    var _a2;
    return g({}, e, {
      preferencePanel: ((_a2 = t.initialState) == null ? void 0 : _a2.preferencePanel) ?? {
        open: false
      }
    });
  }, zS = (e, t) => {
    var _a2;
    const n = ft(e, "useGridPreferencesPanel"), o = u.useCallback(() => {
      e.current.setState((a) => {
        if (!a.preferencePanel.open) return a;
        n.debug("Hiding Preferences Panel");
        const i = nr(a);
        return e.current.publishEvent("preferencePanelClose", {
          openedPanelValue: i.openedPanelValue
        }), g({}, a, {
          preferencePanel: {
            open: false
          }
        });
      });
    }, [
      e,
      n
    ]), r = u.useCallback((a, i, d) => {
      n.debug("Opening Preferences Panel"), e.current.setState((c) => g({}, c, {
        preferencePanel: g({}, c.preferencePanel, {
          open: true,
          openedPanelValue: a,
          panelId: i,
          labelId: d
        })
      })), e.current.publishEvent("preferencePanelOpen", {
        openedPanelValue: a
      });
    }, [
      n,
      e
    ]);
    Ie(e, {
      showPreferences: r,
      hidePreferences: o
    }, "public");
    const l = u.useCallback((a, i) => {
      var _a3;
      const d = nr(e.current.state);
      return !i.exportOnlyDirtyModels || ((_a3 = t.initialState) == null ? void 0 : _a3.preferencePanel) != null || d.open ? g({}, a, {
        preferencePanel: d
      }) : a;
    }, [
      e,
      (_a2 = t.initialState) == null ? void 0 : _a2.preferencePanel
    ]), s = u.useCallback((a, i) => {
      const d = i.stateToRestore.preferencePanel;
      return d != null && e.current.setState((c) => g({}, c, {
        preferencePanel: d
      })), a;
    }, [
      e
    ]);
    Ze(e, "exportState", l), Ze(e, "restoreState", s);
  }, ql = (e) => {
    switch (e.type) {
      case "boolean":
        return false;
      case "date":
      case "dateTime":
      case "number":
        return;
      case "singleSelect":
        return null;
      default:
        return "";
    }
  }, jS = [
    "id",
    "field"
  ], VS = [
    "id",
    "field"
  ], NS = (e, t) => {
    const [n, o] = u.useState({}), r = u.useRef(n), l = u.useRef({}), { processRowUpdate: s, onProcessRowUpdateError: a, cellModesModel: i, onCellModesModelChange: d } = t, c = (E) => (...S) => {
      t.editMode === mn.Cell && E(...S);
    }, f = u.useCallback((E, S) => {
      const F = e.current.getCellParams(E, S);
      if (!e.current.isCellEditable(F)) throw new Error(`MUI X: The cell with id=${E} and field=${S} is not editable.`);
    }, [
      e
    ]), p = u.useCallback((E, S, F) => {
      if (e.current.getCellMode(E, S) !== F) throw new Error(`MUI X: The cell with id=${E} and field=${S} is not in ${F} mode.`);
    }, [
      e
    ]), m = u.useCallback((E, S) => {
      if (!E.isEditable || E.cellMode === Ke.Edit) return;
      const F = g({}, E, {
        reason: xn.cellDoubleClick
      });
      e.current.publishEvent("cellEditStart", F, S);
    }, [
      e
    ]), h = u.useCallback((E, S) => {
      if (E.cellMode === Ke.View || e.current.getCellMode(E.id, E.field) === Ke.View) return;
      const F = g({}, E, {
        reason: nn.cellFocusOut
      });
      e.current.publishEvent("cellEditStop", F, S);
    }, [
      e
    ]), C = u.useCallback((E, S) => {
      if (E.cellMode === Ke.Edit) {
        if (S.which === 229) return;
        let F;
        if (S.key === "Escape" ? F = nn.escapeKeyDown : S.key === "Enter" ? F = nn.enterKeyDown : S.key === "Tab" && (F = S.shiftKey ? nn.shiftTabKeyDown : nn.tabKeyDown, S.preventDefault()), F) {
          const A = g({}, E, {
            reason: F
          });
          e.current.publishEvent("cellEditStop", A, S);
        }
      } else if (E.isEditable) {
        let F;
        if (!e.current.unstable_applyPipeProcessors("canStartEditing", true, {
          event: S,
          cellParams: E,
          editMode: "cell"
        })) return;
        if (vu(S) ? F = xn.printableKeyDown : yu(S) ? F = xn.pasteKeyDown : S.key === "Enter" ? F = xn.enterKeyDown : (S.key === "Backspace" || S.key === "Delete") && (F = xn.deleteKeyDown), F) {
          const z = g({}, E, {
            reason: F,
            key: S.key
          });
          e.current.publishEvent("cellEditStart", z, S);
        }
      }
    }, [
      e
    ]), x = u.useCallback((E) => {
      const { id: S, field: F, reason: A } = E, z = {
        id: S,
        field: F
      };
      (A === xn.printableKeyDown || A === xn.deleteKeyDown || A === xn.pasteKeyDown) && (z.deleteValue = true), e.current.startCellEditMode(z);
    }, [
      e
    ]), M = u.useCallback((E) => {
      const { id: S, field: F, reason: A } = E;
      e.current.runPendingEditCellValueMutation(S, F);
      let z;
      A === nn.enterKeyDown ? z = "below" : A === nn.tabKeyDown ? z = "right" : A === nn.shiftTabKeyDown && (z = "left");
      const j = A === "escapeKeyDown";
      e.current.stopCellEditMode({
        id: S,
        field: F,
        ignoreModifications: j,
        cellToFocusAfter: z
      });
    }, [
      e
    ]), v = (E) => async (...S) => {
      var _a2;
      if (E) {
        const { id: F, field: A } = S[0];
        ((_a2 = e.current.state.editRows[F][A]) == null ? void 0 : _a2.error) || E(...S);
      }
    };
    oe(e, "cellDoubleClick", c(m)), oe(e, "cellFocusOut", c(h)), oe(e, "cellKeyDown", c(C)), oe(e, "cellEditStart", c(x)), oe(e, "cellEditStop", c(M)), qe(e, "cellEditStart", t.onCellEditStart), qe(e, "cellEditStop", v(t.onCellEditStop));
    const O = u.useCallback((E, S) => {
      const F = ut(e.current.state);
      return F[E] && F[E][S] ? Ke.Edit : Ke.View;
    }, [
      e
    ]), G = We((E) => {
      const S = E !== t.cellModesModel;
      d && S && d(E, {
        api: e.current
      }), !(t.cellModesModel && S) && (o(E), r.current = E, e.current.publishEvent("cellModesModelChange", E));
    }), P = u.useCallback((E, S, F) => {
      const A = g({}, r.current);
      if (F !== null) A[E] = g({}, A[E], {
        [S]: g({}, F)
      });
      else {
        const z = A[E], j = de(z, [
          S
        ].map(rr));
        A[E] = j, Object.keys(A[E]).length === 0 && delete A[E];
      }
      G(A);
    }, [
      G
    ]), H = u.useCallback((E, S, F) => {
      e.current.setState((A) => {
        const z = g({}, A.editRows);
        return F !== null ? z[E] = g({}, z[E], {
          [S]: g({}, F)
        }) : (delete z[E][S], Object.keys(z[E]).length === 0 && delete z[E]), g({}, A, {
          editRows: z
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), R = u.useCallback((E) => {
      const { id: S, field: F } = E, A = de(E, jS);
      f(S, F), p(S, F, Ke.View), P(S, F, g({
        mode: Ke.Edit
      }, A));
    }, [
      f,
      p,
      P
    ]), T = We(async (E) => {
      const { id: S, field: F, deleteValue: A, initialValue: z } = E, j = e.current.getCellValue(S, F);
      let L = j;
      A ? L = ql(e.current.getColumn(F)) : z && (L = z);
      const N = e.current.getColumn(F), W = !!N.preProcessEditCellProps && A;
      let B = {
        value: L,
        error: false,
        isProcessingProps: W
      };
      if (H(S, F, B), e.current.setCellFocus(S, F), W && (B = await Promise.resolve(N.preProcessEditCellProps({
        id: S,
        row: e.current.getRow(S),
        props: B,
        hasChanged: L !== j
      })), e.current.getCellMode(S, F) === Ke.Edit)) {
        const U = ut(e.current.state);
        H(S, F, g({}, B, {
          value: U[S][F].value,
          isProcessingProps: false
        }));
      }
    }), w = u.useCallback((E) => {
      const { id: S, field: F } = E, A = de(E, VS);
      p(S, F, Ke.Edit), P(S, F, g({
        mode: Ke.View
      }, A));
    }, [
      p,
      P
    ]), y = We(async (E) => {
      const { id: S, field: F, ignoreModifications: A, cellToFocusAfter: z = "none" } = E;
      p(S, F, Ke.Edit), e.current.runPendingEditCellValueMutation(S, F);
      const j = () => {
        H(S, F, null), P(S, F, null), z !== "none" && e.current.moveFocusToRelativeCell(S, F, z);
      };
      if (A) {
        j();
        return;
      }
      const L = ut(e.current.state), { error: N, isProcessingProps: W } = L[S][F];
      if (N || W) {
        l.current[S][F].mode = Ke.Edit, P(S, F, {
          mode: Ke.Edit
        });
        return;
      }
      const B = e.current.getRowWithUpdatedValuesFromCellEditing(S, F);
      if (s) {
        const U = (K) => {
          l.current[S][F].mode = Ke.Edit, P(S, F, {
            mode: Ke.Edit
          }), a && a(K);
        };
        try {
          const K = e.current.getRow(S);
          Promise.resolve(s(B, K, {
            rowId: S
          })).then((ne) => {
            e.current.updateRows([
              ne
            ]), j();
          }).catch(U);
        } catch (K) {
          U(K);
        }
      } else e.current.updateRows([
        B
      ]), j();
    }), k = u.useCallback(async (E) => {
      var _a2, _b2;
      const { id: S, field: F, value: A, debounceMs: z, unstable_skipValueParser: j } = E;
      f(S, F), p(S, F, Ke.Edit);
      const L = e.current.getColumn(F), N = e.current.getRow(S);
      let W = A;
      L.valueParser && !j && (W = L.valueParser(A, N, L, e));
      let B = ut(e.current.state), U = g({}, B[S][F], {
        value: W,
        changeReason: z ? "debouncedSetEditCellValue" : "setEditCellValue"
      });
      if (L.preProcessEditCellProps) {
        const K = A !== B[S][F].value;
        U = g({}, U, {
          isProcessingProps: true
        }), H(S, F, U), U = await Promise.resolve(L.preProcessEditCellProps({
          id: S,
          row: N,
          props: U,
          hasChanged: K
        }));
      }
      return e.current.getCellMode(S, F) === Ke.View ? false : (B = ut(e.current.state), U = g({}, U, {
        isProcessingProps: false
      }), U.value = L.preProcessEditCellProps ? B[S][F].value : W, H(S, F, U), B = ut(e.current.state), !((_b2 = (_a2 = B[S]) == null ? void 0 : _a2[F]) == null ? void 0 : _b2.error));
    }, [
      e,
      f,
      p,
      H
    ]), D = u.useCallback((E, S) => {
      const F = e.current.getColumn(S), A = ut(e.current.state), z = e.current.getRow(E);
      if (!A[E] || !A[E][S]) return e.current.getRow(E);
      const { value: j } = A[E][S];
      return F.valueSetter ? F.valueSetter(j, z, F, e) : g({}, z, {
        [S]: j
      });
    }, [
      e
    ]), $ = {
      getCellMode: O,
      startCellEditMode: R,
      stopCellEditMode: w
    }, V = {
      setCellEditingEditCellValue: k,
      getRowWithUpdatedValuesFromCellEditing: D
    };
    Ie(e, $, "public"), Ie(e, V, "private"), u.useEffect(() => {
      i && G(i);
    }, [
      i,
      G
    ]), mt(() => {
      const E = Ut(e), S = l.current;
      l.current = gc(n), Object.entries(n).forEach(([F, A]) => {
        Object.entries(A).forEach(([z, j]) => {
          var _a2, _b2;
          const L = ((_b2 = (_a2 = S[F]) == null ? void 0 : _a2[z]) == null ? void 0 : _b2.mode) || Ke.View, N = E[F] ? e.current.getRowId(E[F]) : F;
          j.mode === Ke.Edit && L === Ke.View ? T(g({
            id: N,
            field: z
          }, j)) : j.mode === Ke.View && L === Ke.Edit && y(g({
            id: N,
            field: z
          }, j));
        });
      });
    }, [
      e,
      n,
      T,
      y
    ]);
  }, _S = [
    "id"
  ], BS = [
    "id"
  ], WS = (e, t) => {
    const [n, o] = u.useState({}), r = u.useRef(n), l = u.useRef({}), s = u.useRef({}), a = u.useRef(void 0), i = u.useRef(null), { processRowUpdate: d, onProcessRowUpdateError: c, rowModesModel: f, onRowModesModelChange: p } = t, m = (j) => (...L) => {
      t.editMode === mn.Row && j(...L);
    }, h = u.useCallback((j, L) => {
      const N = e.current.getCellParams(j, L);
      if (!e.current.isCellEditable(N)) throw new Error(`MUI X: The cell with id=${j} and field=${L} is not editable.`);
    }, [
      e
    ]), C = u.useCallback((j, L) => {
      if (e.current.getRowMode(j) !== L) throw new Error(`MUI X: The row with id=${j} is not in ${L} mode.`);
    }, [
      e
    ]), x = u.useCallback((j) => {
      const L = ut(e.current.state);
      return Object.values(L[j]).some((N) => N.error);
    }, [
      e
    ]), M = u.useCallback((j, L) => {
      if (!j.isEditable || e.current.getRowMode(j.id) === Qe.Edit) return;
      const N = e.current.getRowParams(j.id), W = g({}, N, {
        field: j.field,
        reason: Fn.cellDoubleClick
      });
      e.current.publishEvent("rowEditStart", W, L);
    }, [
      e
    ]), v = u.useCallback((j) => {
      i.current = j;
    }, []), O = u.useCallback((j, L) => {
      j.isEditable && e.current.getRowMode(j.id) !== Qe.View && (i.current = null, a.current = setTimeout(() => {
        var _a2;
        if (((_a2 = i.current) == null ? void 0 : _a2.id) !== j.id) {
          if (!e.current.getRow(j.id) || e.current.getRowMode(j.id) === Qe.View || x(j.id)) return;
          const N = e.current.getRowParams(j.id), W = g({}, N, {
            field: j.field,
            reason: dn.rowFocusOut
          });
          e.current.publishEvent("rowEditStop", W, L);
        }
      }));
    }, [
      e,
      x
    ]);
    u.useEffect(() => () => {
      clearTimeout(a.current);
    }, []);
    const G = u.useCallback((j, L) => {
      if (j.cellMode === Qe.Edit) {
        if (L.which === 229) return;
        let N;
        if (L.key === "Escape") N = dn.escapeKeyDown;
        else if (L.key === "Enter") N = dn.enterKeyDown;
        else if (L.key === "Tab") {
          const W = Mo(e).filter((B) => e.current.getColumn(B).type === Jr ? true : e.current.isCellEditable(e.current.getCellParams(j.id, B)));
          if (L.shiftKey ? j.field === W[0] && (N = dn.shiftTabKeyDown) : j.field === W[W.length - 1] && (N = dn.tabKeyDown), L.preventDefault(), !N) {
            const B = W.findIndex((K) => K === j.field), U = W[L.shiftKey ? B - 1 : B + 1];
            e.current.setCellFocus(j.id, U);
          }
        }
        if (N) {
          if (N !== dn.escapeKeyDown && x(j.id)) return;
          const W = g({}, e.current.getRowParams(j.id), {
            reason: N,
            field: j.field
          });
          e.current.publishEvent("rowEditStop", W, L);
        }
      } else if (j.isEditable) {
        let N;
        if (!e.current.unstable_applyPipeProcessors("canStartEditing", true, {
          event: L,
          cellParams: j,
          editMode: "row"
        })) return;
        if (vu(L) || yu(L) ? N = Fn.printableKeyDown : L.key === "Enter" ? N = Fn.enterKeyDown : (L.key === "Backspace" || L.key === "Delete") && (N = Fn.deleteKeyDown), N) {
          const B = e.current.getRowParams(j.id), U = g({}, B, {
            field: j.field,
            reason: N
          });
          e.current.publishEvent("rowEditStart", U, L);
        }
      }
    }, [
      e,
      x
    ]), P = u.useCallback((j) => {
      const { id: L, field: N, reason: W } = j, B = {
        id: L,
        fieldToFocus: N
      };
      (W === Fn.printableKeyDown || W === Fn.deleteKeyDown) && (B.deleteValue = !!N), e.current.startRowEditMode(B);
    }, [
      e
    ]), H = u.useCallback((j) => {
      const { id: L, reason: N, field: W } = j;
      e.current.runPendingEditCellValueMutation(L);
      let B;
      N === dn.enterKeyDown ? B = "below" : N === dn.tabKeyDown ? B = "right" : N === dn.shiftTabKeyDown && (B = "left");
      const U = N === "escapeKeyDown";
      e.current.stopRowEditMode({
        id: L,
        ignoreModifications: U,
        field: W,
        cellToFocusAfter: B
      });
    }, [
      e
    ]);
    oe(e, "cellDoubleClick", m(M)), oe(e, "cellFocusIn", m(v)), oe(e, "cellFocusOut", m(O)), oe(e, "cellKeyDown", m(G)), oe(e, "rowEditStart", m(P)), oe(e, "rowEditStop", m(H)), qe(e, "rowEditStart", t.onRowEditStart), qe(e, "rowEditStop", t.onRowEditStop);
    const R = u.useCallback((j) => du(e, {
      rowId: j,
      editMode: t.editMode
    }) ? Qe.Edit : Qe.View, [
      e,
      t.editMode
    ]), T = We((j) => {
      const L = j !== t.rowModesModel;
      p && L && p(j, {
        api: e.current
      }), !(t.rowModesModel && L) && (o(j), r.current = j, e.current.publishEvent("rowModesModelChange", j));
    }), w = u.useCallback((j, L) => {
      const N = g({}, r.current);
      L !== null ? N[j] = g({}, L) : delete N[j], T(N);
    }, [
      T
    ]), y = u.useCallback((j, L) => {
      e.current.setState((N) => {
        const W = g({}, N.editRows);
        return L !== null ? W[j] = L : delete W[j], g({}, N, {
          editRows: W
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), k = u.useCallback((j, L, N) => {
      e.current.setState((W) => {
        const B = g({}, W.editRows);
        return N !== null ? B[j] = g({}, B[j], {
          [L]: g({}, N)
        }) : (delete B[j][L], Object.keys(B[j]).length === 0 && delete B[j]), g({}, W, {
          editRows: B
        });
      }), e.current.forceUpdate();
    }, [
      e
    ]), D = u.useCallback((j) => {
      const { id: L } = j, N = de(j, _S);
      C(L, Qe.View), w(L, g({
        mode: Qe.Edit
      }, N));
    }, [
      C,
      w
    ]), $ = We((j) => {
      const { id: L, fieldToFocus: N, deleteValue: W, initialValue: B } = j, U = e.current.getRow(L), K = Qt(e), ne = K.reduce((ee, te) => {
        const ae = te.field;
        if (!e.current.getCellParams(L, ae).isEditable) return ee;
        const Y = e.current.getColumn(ae);
        let re = e.current.getCellValue(L, ae);
        return N === ae && (W || B) && (W ? re = ql(Y) : B && (re = B)), ee[ae] = {
          value: re,
          error: false,
          isProcessingProps: Y.editable && !!Y.preProcessEditCellProps && W
        }, ee;
      }, {});
      s.current[L] = U, y(L, ne), N && e.current.setCellFocus(L, N), K.filter((ee) => e.current.getCellParams(L, ee.field).isEditable && ee.editable && !!ee.preProcessEditCellProps && W).forEach((ee) => {
        const te = ee.field, ae = e.current.getCellValue(L, te), ve = W ? ql(ee) : B ?? ae;
        Promise.resolve(ee.preProcessEditCellProps({
          id: L,
          row: U,
          props: ne[te],
          hasChanged: ve !== ae
        })).then((Y) => {
          if (e.current.getRowMode(L) === Qe.Edit) {
            const re = ut(e.current.state);
            k(L, te, g({}, Y, {
              value: re[L][te].value,
              isProcessingProps: false
            }));
          }
        });
      });
    }), V = u.useCallback((j) => {
      const { id: L } = j, N = de(j, BS);
      C(L, Qe.Edit), w(L, g({
        mode: Qe.View
      }, N));
    }, [
      C,
      w
    ]), E = We((j) => {
      const { id: L, ignoreModifications: N, field: W, cellToFocusAfter: B = "none" } = j;
      e.current.runPendingEditCellValueMutation(L);
      const U = () => {
        B !== "none" && W && e.current.moveFocusToRelativeCell(L, W, B), y(L, null), w(L, null), delete s.current[L];
      };
      if (N) {
        U();
        return;
      }
      const K = ut(e.current.state), ne = s.current[L];
      if (Object.values(K[L]).some((ae) => ae.isProcessingProps)) {
        l.current[L].mode = Qe.Edit;
        return;
      }
      if (x(L)) {
        l.current[L].mode = Qe.Edit, w(L, {
          mode: Qe.Edit
        });
        return;
      }
      const te = e.current.getRowWithUpdatedValuesFromRowEditing(L);
      if (d) {
        const ae = (ve) => {
          l.current[L] && (l.current[L].mode = Qe.Edit, w(L, {
            mode: Qe.Edit
          })), c && c(ve);
        };
        try {
          Promise.resolve(d(te, ne, {
            rowId: L
          })).then((ve) => {
            e.current.updateRows([
              ve
            ]), U();
          }).catch(ae);
        } catch (ve) {
          ae(ve);
        }
      } else e.current.updateRows([
        te
      ]), U();
    }), S = u.useCallback((j) => {
      const { id: L, field: N, value: W, debounceMs: B, unstable_skipValueParser: U } = j;
      h(L, N);
      const K = e.current.getColumn(N), ne = e.current.getRow(L);
      let ee = W;
      K.valueParser && !U && (ee = K.valueParser(W, ne, K, e));
      let te = ut(e.current.state), ae = g({}, te[L][N], {
        value: ee,
        changeReason: B ? "debouncedSetEditCellValue" : "setEditCellValue"
      });
      return K.preProcessEditCellProps || k(L, N, ae), new Promise((ve) => {
        const Y = [];
        if (K.preProcessEditCellProps) {
          const re = ae.value !== te[L][N].value;
          ae = g({}, ae, {
            isProcessingProps: true
          }), k(L, N, ae);
          const xe = te[L], J = de(xe, [
            N
          ].map(rr)), ye = Promise.resolve(K.preProcessEditCellProps({
            id: L,
            row: ne,
            props: ae,
            hasChanged: re,
            otherFieldsProps: J
          })).then((Z) => {
            if (e.current.getRowMode(L) === Qe.View) {
              ve(false);
              return;
            }
            te = ut(e.current.state), Z = g({}, Z, {
              isProcessingProps: false
            }), Z.value = K.preProcessEditCellProps ? te[L][N].value : ee, k(L, N, Z);
          });
          Y.push(ye);
        }
        Object.entries(te[L]).forEach(([re, xe]) => {
          if (re === N) return;
          const J = e.current.getColumn(re);
          if (!J.preProcessEditCellProps) return;
          xe = g({}, xe, {
            isProcessingProps: true
          }), k(L, re, xe), te = ut(e.current.state);
          const ye = te[L], Z = de(ye, [
            re
          ].map(rr)), Ce = Promise.resolve(J.preProcessEditCellProps({
            id: L,
            row: ne,
            props: xe,
            hasChanged: false,
            otherFieldsProps: Z
          })).then((me) => {
            if (e.current.getRowMode(L) === Qe.View) {
              ve(false);
              return;
            }
            me = g({}, me, {
              isProcessingProps: false
            }), k(L, re, me);
          });
          Y.push(Ce);
        }), Promise.all(Y).then(() => {
          e.current.getRowMode(L) === Qe.Edit ? (te = ut(e.current.state), ve(!te[L][N].error)) : ve(false);
        });
      });
    }, [
      e,
      h,
      k
    ]), F = u.useCallback((j) => {
      const L = ut(e.current.state), N = e.current.getRow(j);
      if (!L[j]) return e.current.getRow(j);
      let W = g({}, s.current[j], N);
      return Object.entries(L[j]).forEach(([B, U]) => {
        const K = e.current.getColumn(B);
        (K == null ? void 0 : K.valueSetter) ? W = K.valueSetter(U.value, W, K, e) : W[B] = U.value;
      }), W;
    }, [
      e
    ]), A = {
      getRowMode: R,
      startRowEditMode: D,
      stopRowEditMode: V
    }, z = {
      setRowEditingEditCellValue: S,
      getRowWithUpdatedValuesFromRowEditing: F
    };
    Ie(e, A, "public"), Ie(e, z, "private"), u.useEffect(() => {
      f && T(f);
    }, [
      f,
      T
    ]), mt(() => {
      const j = Ut(e), L = l.current;
      l.current = gc(n);
      const N = /* @__PURE__ */ new Set([
        ...Object.keys(n),
        ...Object.keys(L)
      ]);
      Array.from(N).forEach((W) => {
        var _a2;
        const B = n[W] ?? {
          mode: Qe.View
        }, U = ((_a2 = L[W]) == null ? void 0 : _a2.mode) || Qe.View, K = j[W] ? e.current.getRowId(j[W]) : W;
        B.mode === Qe.Edit && U === Qe.View ? $(g({
          id: K
        }, B)) : B.mode === Qe.View && U === Qe.Edit && E(g({
          id: K
        }, B));
      });
    }, [
      e,
      n,
      $,
      E
    ]);
  }, US = (e) => g({}, e, {
    editRows: {}
  }), KS = (e, t) => {
    NS(e, t), WS(e, t);
    const n = u.useRef({}), { isCellEditable: o } = t, r = u.useCallback((p) => xo(p.rowNode) || !p.colDef.editable || !p.colDef.renderEditCell ? false : o ? o(p) : true, [
      o
    ]), l = (p, m, h, C) => {
      if (!h) {
        C();
        return;
      }
      if (n.current[p] || (n.current[p] = {}), n.current[p][m]) {
        const [v] = n.current[p][m];
        clearTimeout(v);
      }
      const x = () => {
        const [v] = n.current[p][m];
        clearTimeout(v), C(), delete n.current[p][m];
      }, M = setTimeout(() => {
        C(), delete n.current[p][m];
      }, h);
      n.current[p][m] = [
        M,
        x
      ];
    };
    u.useEffect(() => {
      const p = n.current;
      return () => {
        Object.entries(p).forEach(([m, h]) => {
          Object.keys(h).forEach((C) => {
            const [x] = p[m][C];
            clearTimeout(x), delete p[m][C];
          });
        });
      };
    }, []);
    const s = u.useCallback((p, m) => {
      if (n.current[p]) {
        if (!m) Object.keys(n.current[p]).forEach((h) => {
          const [, C] = n.current[p][h];
          C();
        });
        else if (n.current[p][m]) {
          const [, h] = n.current[p][m];
          h();
        }
      }
    }, []), a = u.useCallback((p) => {
      const { id: m, field: h, debounceMs: C } = p;
      return new Promise((x) => {
        l(m, h, C, async () => {
          const M = t.editMode === mn.Row ? e.current.setRowEditingEditCellValue : e.current.setCellEditingEditCellValue;
          if (e.current.getCellMode(m, h) === Ke.Edit) {
            const v = await M(p);
            x(v);
          }
        });
      });
    }, [
      e,
      t.editMode
    ]), i = u.useCallback((p, m) => t.editMode === mn.Cell ? e.current.getRowWithUpdatedValuesFromCellEditing(p, m) : e.current.getRowWithUpdatedValuesFromRowEditing(p), [
      e,
      t.editMode
    ]), d = u.useCallback((p, m) => {
      var _a2;
      return ((_a2 = ut(e.current.state)[p]) == null ? void 0 : _a2[m]) ?? null;
    }, [
      e
    ]), c = {
      isCellEditable: r,
      setEditCellValue: a,
      getRowWithUpdatedValues: i,
      unstable_getEditCellMeta: d
    }, f = {
      runPendingEditCellValueMutation: s
    };
    Ie(e, c, "public"), Ie(e, f, "private");
  }, qS = (e, t, n) => {
    const o = !!t.unstable_dataSource;
    return n.current.caches.rows = Tr({
      rows: o ? [] : t.rows,
      getRowId: t.getRowId,
      loading: t.loading,
      rowCount: t.rowCount
    }), g({}, e, {
      rows: Mc({
        apiRef: n,
        rowCountProp: t.rowCount,
        loadingProp: o ? true : t.loading,
        previousTree: null,
        previousTreeDepths: null
      })
    });
  }, YS = (e, t) => {
    const n = ft(e, "useGridRows"), o = u.useRef(Date.now()), r = u.useRef(t.rowCount), l = sn(), s = u.useCallback((E) => {
      const S = Ut(e)[E];
      if (S) return S;
      const F = e.current.getRowNode(E);
      return F && xo(F) ? {
        [vo]: E
      } : null;
    }, [
      e
    ]), a = u.useCallback((E) => hr(e.current.state, E), [
      e
    ]), i = u.useCallback(({ cache: E, throttle: S }) => {
      const F = () => {
        o.current = Date.now(), e.current.setState((z) => g({}, z, {
          rows: Mc({
            apiRef: e,
            rowCountProp: t.rowCount,
            loadingProp: t.loading,
            previousTree: at(e),
            previousTreeDepths: Mi(e),
            previousGroupsToFetch: Bh(e)
          })
        })), e.current.publishEvent("rowsSet"), e.current.forceUpdate();
      };
      if (l.clear(), e.current.caches.rows = E, !S) {
        F();
        return;
      }
      const A = t.throttleRowsMs - (Date.now() - o.current);
      if (A > 0) {
        l.start(A, F);
        return;
      }
      F();
    }, [
      t.throttleRowsMs,
      t.rowCount,
      t.loading,
      e,
      l
    ]), d = u.useCallback((E) => {
      n.debug(`Updating all rows, new length ${E.length}`);
      const S = Tr({
        rows: E,
        getRowId: t.getRowId,
        loading: t.loading,
        rowCount: t.rowCount
      }), F = e.current.caches.rows;
      S.rowsBeforePartialUpdates = F.rowsBeforePartialUpdates, i({
        cache: S,
        throttle: true
      });
    }, [
      n,
      t.getRowId,
      t.loading,
      t.rowCount,
      i,
      e
    ]), c = u.useCallback((E) => {
      if (t.signature === Xt.DataGrid && E.length > 1) throw new Error([
        "MUI X: You cannot update several rows at once in `apiRef.current.updateRows` on the DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
      ].join(`
`));
      const S = Ai(e, E, t.getRowId), F = Ri({
        updates: S,
        getRowId: t.getRowId,
        previousCache: e.current.caches.rows
      });
      i({
        cache: F,
        throttle: true
      });
    }, [
      t.signature,
      t.getRowId,
      i,
      e
    ]), f = u.useCallback((E, S) => {
      const F = Ai(e, E, t.getRowId), A = Ri({
        updates: F,
        getRowId: t.getRowId,
        previousCache: e.current.caches.rows,
        groupKeys: S ?? []
      });
      i({
        cache: A,
        throttle: false
      });
    }, [
      t.getRowId,
      i,
      e
    ]), p = u.useCallback((E) => {
      E !== t.loading && (n.debug(`Setting loading to ${E}`), e.current.setState((S) => g({}, S, {
        rows: g({}, S.rows, {
          loading: E
        })
      })), e.current.caches.rows.loadingPropBeforePartialUpdates = E);
    }, [
      t.loading,
      e,
      n
    ]), m = u.useCallback(() => {
      const E = _o(e), S = Ut(e);
      return new Map(E.map((F) => [
        F,
        S[F] ?? {}
      ]));
    }, [
      e
    ]), h = u.useCallback(() => dr(e), [
      e
    ]), C = u.useCallback(() => _o(e), [
      e
    ]), x = u.useCallback((E) => {
      const S = e.current.getRow(E), { rowToIndexMap: F } = Ln(e);
      return F.get(S);
    }, [
      e
    ]), M = u.useCallback((E, S) => {
      const F = e.current.getRowNode(E);
      if (!F) throw new Error(`MUI X: No row with id #${E} found.`);
      if (F.type !== "group") throw new Error("MUI X: Only group nodes can be expanded or collapsed.");
      const A = g({}, F, {
        childrenExpanded: S
      });
      e.current.setState((z) => g({}, z, {
        rows: g({}, z.rows, {
          tree: g({}, z.rows.tree, {
            [E]: A
          })
        })
      })), e.current.forceUpdate(), e.current.publishEvent("rowExpansionChange", A);
    }, [
      e
    ]), v = u.useCallback((E) => at(e)[E] ?? null, [
      e
    ]), O = u.useCallback(({ skipAutoGeneratedRows: E = true, groupId: S, applySorting: F, applyFiltering: A }) => {
      const z = at(e);
      let j;
      if (F) {
        const L = z[S];
        if (!L) return [];
        const N = Eo(e);
        j = [];
        const W = N.findIndex((B) => B === S) + 1;
        for (let B = W; B < N.length && z[N[B]].depth > L.depth; B += 1) {
          const U = N[B];
          (!E || !xo(z[U])) && j.push(U);
        }
      } else j = xs(z, S, E);
      if (A) {
        const L = Fo(e);
        j = j.filter((N) => L[N] !== false);
      }
      return j;
    }, [
      e
    ]), G = u.useCallback((E, S) => {
      const F = e.current.getRowNode(E);
      if (!F) throw new Error(`MUI X: No row with id #${E} found.`);
      if (F.parent !== Ct) throw new Error("MUI X: The row reordering do not support reordering of grouped rows yet.");
      if (F.type !== "leaf") throw new Error("MUI X: The row reordering do not support reordering of footer or grouping rows.");
      e.current.setState((A) => {
        const z = at(A, e.current.instanceId)[Ct], j = z.children, L = j.findIndex((W) => W === E);
        if (L === -1 || L === S) return A;
        n.debug(`Moving row ${E} to index ${S}`);
        const N = [
          ...j
        ];
        return N.splice(S, 0, N.splice(L, 1)[0]), g({}, A, {
          rows: g({}, A.rows, {
            tree: g({}, A.rows.tree, {
              [Ct]: g({}, z, {
                children: N
              })
            })
          })
        });
      }), e.current.publishEvent("rowsSet");
    }, [
      e,
      n
    ]), P = u.useCallback((E, S) => {
      if (t.signature === Xt.DataGrid && S.length > 1) throw new Error([
        "MUI X: You cannot replace rows using `apiRef.current.unstable_replaceRows` on the DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."
      ].join(`
`));
      if (S.length === 0) return;
      if (Xn(e) > 1) throw new Error("`apiRef.current.unstable_replaceRows` is not compatible with tree data and row grouping");
      const A = g({}, at(e)), z = g({}, Ut(e)), j = g({}, Pi(e)), L = A[Ct], N = [
        ...L.children
      ], W = /* @__PURE__ */ new Set();
      for (let U = 0; U < S.length; U += 1) {
        const K = S[U], ne = Zr(K, t.getRowId, "A row was provided without id when calling replaceRows()."), [ee] = N.splice(E + U, 1, ne);
        W.has(ee) || (delete z[ee], delete j[ee], delete A[ee]);
        const te = {
          id: ne,
          depth: 0,
          parent: Ct,
          type: "leaf",
          groupingKey: null
        };
        z[ne] = K, j[ne] = ne, A[ne] = te, W.add(ne);
      }
      A[Ct] = g({}, L, {
        children: N
      });
      const B = N.filter((U) => {
        var _a2;
        return ((_a2 = A[U]) == null ? void 0 : _a2.type) === "leaf";
      });
      e.current.caches.rows.dataRowIdToModelLookup = z, e.current.caches.rows.dataRowIdToIdLookup = j, e.current.setState((U) => g({}, U, {
        rows: g({}, U.rows, {
          dataRowIdToModelLookup: z,
          dataRowIdToIdLookup: j,
          dataRowIds: B,
          tree: A
        })
      })), e.current.publishEvent("rowsSet");
    }, [
      e,
      t.signature,
      t.getRowId
    ]), H = {
      getRow: s,
      setLoading: p,
      getRowId: a,
      getRowModels: m,
      getRowsCount: h,
      getAllRowIds: C,
      setRows: d,
      updateRows: c,
      getRowNode: v,
      getRowIndexRelativeToVisibleRows: x,
      unstable_replaceRows: P
    }, R = {
      setRowIndex: G,
      setRowChildrenExpansion: M,
      getRowGroupChildren: O
    }, T = {
      updateServerRows: f
    }, w = u.useCallback(() => {
      n.info("Row grouping pre-processing have changed, regenerating the row tree");
      let E;
      e.current.caches.rows.rowsBeforePartialUpdates === t.rows ? E = g({}, e.current.caches.rows, {
        updates: {
          type: "full",
          rows: _o(e)
        }
      }) : E = Tr({
        rows: t.rows,
        getRowId: t.getRowId,
        loading: t.loading,
        rowCount: t.rowCount
      }), i({
        cache: E,
        throttle: false
      });
    }, [
      n,
      e,
      t.rows,
      t.getRowId,
      t.loading,
      t.rowCount,
      i
    ]), y = bn(() => t.unstable_dataSource), k = u.useCallback((E) => {
      if (t.unstable_dataSource && t.unstable_dataSource !== y.current) {
        y.current = t.unstable_dataSource;
        return;
      }
      E === "rowTreeCreation" && w();
    }, [
      w,
      y,
      t.unstable_dataSource
    ]), D = u.useCallback(() => {
      e.current.getActiveStrategy("rowTree") !== Wh(e) && w();
    }, [
      e,
      w
    ]);
    oe(e, "activeStrategyProcessorChange", k), oe(e, "strategyAvailabilityChange", D);
    const $ = u.useCallback(() => {
      e.current.setState((E) => {
        const S = e.current.unstable_applyPipeProcessors("hydrateRows", {
          tree: at(E, e.current.instanceId),
          treeDepths: Mi(E, e.current.instanceId),
          dataRowIds: _o(E, e.current.instanceId),
          dataRowIdToModelLookup: Ut(E, e.current.instanceId),
          dataRowIdToIdLookup: Pi(E, e.current.instanceId)
        });
        return g({}, E, {
          rows: g({}, E.rows, S, {
            totalTopLevelRowCount: Pc({
              tree: S.tree,
              rowCountProp: t.rowCount
            })
          })
        });
      }), e.current.publishEvent("rowsSet"), e.current.forceUpdate();
    }, [
      e,
      t.rowCount
    ]);
    Gs(e, "hydrateRows", $), Ie(e, H, "public"), Ie(e, R, t.signature === Xt.DataGrid ? "private" : "public"), Ie(e, T, "private");
    const V = u.useRef(true);
    u.useEffect(() => {
      var _a2;
      if (V.current) {
        V.current = false;
        return;
      }
      let E = false;
      t.rowCount !== r.current && (E = true, r.current = t.rowCount);
      const S = e.current.caches.rows.rowsBeforePartialUpdates === t.rows, F = e.current.caches.rows.loadingPropBeforePartialUpdates === t.loading, A = e.current.caches.rows.rowCountPropBeforePartialUpdates === t.rowCount;
      S && (F || (e.current.setState((z) => g({}, z, {
        rows: g({}, z.rows, {
          loading: t.loading
        })
      })), e.current.caches.rows.loadingPropBeforePartialUpdates = t.loading, e.current.forceUpdate()), A || (e.current.setState((z) => g({}, z, {
        rows: g({}, z.rows, {
          totalRowCount: Math.max(t.rowCount || 0, z.rows.totalRowCount),
          totalTopLevelRowCount: Math.max(t.rowCount || 0, z.rows.totalTopLevelRowCount)
        })
      })), e.current.caches.rows.rowCountPropBeforePartialUpdates = t.rowCount, e.current.forceUpdate()), !E) || (n.debug(`Updating all rows, new length ${(_a2 = t.rows) == null ? void 0 : _a2.length}`), i({
        cache: Tr({
          rows: t.rows,
          getRowId: t.getRowId,
          loading: t.loading,
          rowCount: t.rowCount
        }),
        throttle: false
      }));
    }, [
      t.rows,
      t.rowCount,
      t.getRowId,
      t.loading,
      n,
      i,
      e
    ]);
  }, XS = (e) => {
    const t = {
      [Ct]: g({}, Mm(), {
        children: e
      })
    };
    for (let n = 0; n < e.length; n += 1) {
      const o = e[n];
      t[o] = {
        id: o,
        depth: 0,
        parent: Ct,
        type: "leaf",
        groupingKey: null
      };
    }
    return {
      groupingName: qn,
      tree: t,
      treeDepths: {
        0: e.length
      },
      dataRowIds: e
    };
  }, QS = ({ previousTree: e, actions: t }) => {
    const n = g({}, e), o = {};
    for (let s = 0; s < t.remove.length; s += 1) {
      const a = t.remove[s];
      o[a] = true, delete n[a];
    }
    for (let s = 0; s < t.insert.length; s += 1) {
      const a = t.insert[s];
      n[a] = {
        id: a,
        depth: 0,
        parent: Ct,
        type: "leaf",
        groupingKey: null
      };
    }
    const r = n[Ct];
    let l = [
      ...r.children,
      ...t.insert
    ];
    return Object.values(o).length && (l = l.filter((s) => !o[s])), n[Ct] = g({}, r, {
      children: l
    }), {
      groupingName: qn,
      tree: n,
      treeDepths: {
        0: l.length
      },
      dataRowIds: l
    };
  }, JS = (e) => e.updates.type === "full" ? XS(e.updates.rows) : QS({
    previousTree: e.previousTree,
    actions: e.updates.actions
  }), ZS = (e) => {
    qr(e, qn, "rowTreeCreation", JS);
  };
  class kl extends Error {
  }
  function eI(e, t) {
    var _a2;
    const n = u.useCallback((h) => ({
      field: h,
      colDef: e.current.getColumn(h)
    }), [
      e
    ]), o = u.useCallback((h) => {
      const C = e.current.getRow(h);
      if (!C) throw new kl(`No row with id #${h} found`);
      return {
        id: h,
        columns: e.current.getAllColumns(),
        row: C
      };
    }, [
      e
    ]), r = u.useCallback((h, C, x, { cellMode: M, colDef: v, hasFocus: O, rowNode: G, tabIndex: P }) => {
      const H = x[C], R = (v == null ? void 0 : v.valueGetter) ? v.valueGetter(H, x, v, e) : H, T = {
        id: h,
        field: C,
        row: x,
        rowNode: G,
        colDef: v,
        cellMode: M,
        hasFocus: O,
        tabIndex: P,
        value: R,
        formattedValue: R,
        isEditable: false,
        api: e.current
      };
      return v && v.valueFormatter && (T.formattedValue = v.valueFormatter(R, x, v, e)), T.isEditable = v && e.current.isCellEditable(T), T;
    }, [
      e
    ]), l = u.useCallback((h, C) => {
      var _a3;
      const x = e.current.getRow(h), M = e.current.getRowNode(h);
      if (!x || !M) throw new kl(`No row with id #${h} found`);
      const v = Ft(e), O = Ms(e), G = e.current.getCellMode(h, C);
      return e.current.getCellParamsForRow(h, C, x, {
        colDef: t.unstable_listView && ((_a3 = t.unstable_listColumn) == null ? void 0 : _a3.field) === C ? So(e.current.state) : e.current.getColumn(C),
        rowNode: M,
        hasFocus: v !== null && v.field === C && v.id === h,
        tabIndex: O && O.field === C && O.id === h ? 0 : -1,
        cellMode: G
      });
    }, [
      e,
      t.unstable_listView,
      (_a2 = t.unstable_listColumn) == null ? void 0 : _a2.field
    ]), s = u.useCallback((h, C) => {
      const x = e.current.getColumn(C), M = e.current.getRow(h);
      if (!M) throw new kl(`No row with id #${h} found`);
      return !x || !x.valueGetter ? M[C] : x.valueGetter(M[x.field], M, x, e);
    }, [
      e
    ]), a = u.useCallback((h, C) => {
      const x = C.field;
      if (!C || !C.valueGetter) return h[x];
      const M = h[C.field];
      return C.valueGetter(M, h, C, e);
    }, [
      e
    ]), i = u.useCallback((h, C) => {
      const x = a(h, C);
      return !C || !C.valueFormatter ? x : C.valueFormatter(x, h, C, e);
    }, [
      e,
      a
    ]), d = u.useCallback((h) => e.current.rootElementRef.current ? sv(e.current.rootElementRef.current, h) : null, [
      e
    ]), c = u.useCallback((h) => e.current.rootElementRef.current ? iv(e.current.rootElementRef.current, h) : null, [
      e
    ]), f = u.useCallback((h, C) => e.current.rootElementRef.current ? av(e.current.rootElementRef.current, {
      id: h,
      field: C
    }) : null, [
      e
    ]), p = {
      getCellValue: s,
      getCellParams: l,
      getCellElement: f,
      getRowValue: a,
      getRowFormattedValue: i,
      getRowParams: o,
      getRowElement: c,
      getColumnHeaderParams: n,
      getColumnHeaderElement: d
    }, m = {
      getCellParamsForRow: r
    };
    Ie(e, p, "public"), Ie(e, m, "private");
  }
  const Eu = (e, t) => e == null || Array.isArray(e) ? e : t && t[0] === e ? t : [
    e
  ], tI = (e, t) => g({}, e, {
    rowSelection: t.rowSelection ? Eu(t.rowSelectionModel) ?? [] : []
  }), nI = (e, t) => {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2;
    const n = ft(e, "useGridSelection"), o = u.useCallback((A) => (...z) => {
      t.rowSelection && A(...z);
    }, [
      t.rowSelection
    ]), r = t.signature !== Xt.DataGrid && (((_a2 = t.rowSelectionPropagation) == null ? void 0 : _a2.parents) || ((_b2 = t.rowSelectionPropagation) == null ? void 0 : _b2.descendants)), l = u.useMemo(() => Eu(t.rowSelectionModel, Rt(e.current.state)), [
      e,
      t.rowSelectionModel
    ]), s = u.useRef(null);
    e.current.registerControlState({
      stateId: "rowSelection",
      propModel: l,
      propOnChange: t.onRowSelectionModelChange,
      stateSelector: Rt,
      changeEvent: "rowSelectionChange"
    });
    const { checkboxSelection: a, disableRowSelectionOnClick: i, isRowSelectable: d } = t, c = Ps(t), f = Q(e, at), p = Q(e, Xn) > 1, m = u.useCallback((A) => {
      let z = A;
      const j = s.current ?? A, L = e.current.isRowSelected(A);
      if (L) {
        const N = go(e), W = N.findIndex((U) => U === j), B = N.findIndex((U) => U === z);
        if (W === B) return;
        W > B ? z = N[B + 1] : z = N[B - 1];
      }
      s.current = A, e.current.selectRowRange({
        startId: j,
        endId: z
      }, !L);
    }, [
      e
    ]), h = u.useCallback((A) => {
      if (t.signature === Xt.DataGrid && !c && Array.isArray(A) && A.length > 1) throw new Error([
        "MUI X: `rowSelectionModel` can only contain 1 item in DataGrid.",
        "You need to upgrade to DataGridPro or DataGridPremium component to unlock multiple selection."
      ].join(`
`));
      Rt(e.current.state) !== A && (n.debug("Setting selection model"), e.current.setState((j) => g({}, j, {
        rowSelection: t.rowSelection ? A : []
      })), e.current.forceUpdate());
    }, [
      e,
      n,
      t.rowSelection,
      t.signature,
      c
    ]), C = u.useCallback((A) => Rt(e.current.state).includes(A), [
      e
    ]), x = u.useCallback((A) => {
      if (t.rowSelection === false || d && !d(e.current.getRowParams(A))) return false;
      const z = at(e)[A];
      return !((z == null ? void 0 : z.type) === "footer" || (z == null ? void 0 : z.type) === "pinnedRow");
    }, [
      e,
      t.rowSelection,
      d
    ]), M = u.useCallback(() => Xm(e), [
      e
    ]), v = u.useCallback((A, z = true, j = false) => {
      var _a3, _b3, _c3, _d3, _e2, _f3;
      if (e.current.isRowSelectable(A)) if (s.current = A, j) {
        n.debug(`Setting selection for row ${A}`);
        const L = [], N = (W) => {
          L.push(W);
        };
        z && (N(A), r && jo(e, f, A, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, N)), e.current.setRowSelectionModel(L);
      } else {
        n.debug(`Toggling selection for row ${A}`);
        const L = Rt(e.current.state), N = new Set(L);
        N.delete(A);
        const W = (K) => {
          N.add(K);
        }, B = (K) => {
          N.delete(K);
        };
        z ? (W(A), r && jo(e, f, A, ((_c3 = t.rowSelectionPropagation) == null ? void 0 : _c3.descendants) ?? false, ((_d3 = t.rowSelectionPropagation) == null ? void 0 : _d3.parents) ?? false, W)) : r && Gi(e, f, A, ((_e2 = t.rowSelectionPropagation) == null ? void 0 : _e2.descendants) ?? false, ((_f3 = t.rowSelectionPropagation) == null ? void 0 : _f3.parents) ?? false, B), (N.size < 2 || c) && e.current.setRowSelectionModel(Array.from(N));
      }
    }, [
      e,
      n,
      r,
      f,
      (_c2 = t.rowSelectionPropagation) == null ? void 0 : _c2.descendants,
      (_d2 = t.rowSelectionPropagation) == null ? void 0 : _d2.parents,
      c
    ]), O = u.useCallback((A, z = true, j = false) => {
      n.debug("Setting selection for several rows");
      const L = A.filter((B) => e.current.isRowSelectable(B));
      let N;
      if (j) {
        if (z) {
          if (N = new Set(L), r) {
            const U = (K) => {
              N.add(K);
            };
            L.forEach((K) => {
              var _a3, _b3;
              jo(e, f, K, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, U);
            });
          }
        } else N = /* @__PURE__ */ new Set();
        const B = Hn(e);
        if (N.size === Object.keys(B).length && Array.from(N).every((U) => B[U] === U)) return;
      } else {
        N = new Set(Object.values(Hn(e)));
        const B = (K) => {
          N.add(K);
        }, U = (K) => {
          N.delete(K);
        };
        L.forEach((K) => {
          var _a3, _b3, _c3, _d3;
          z ? (N.add(K), r && jo(e, f, K, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, B)) : (U(K), r && Gi(e, f, K, ((_c3 = t.rowSelectionPropagation) == null ? void 0 : _c3.descendants) ?? false, ((_d3 = t.rowSelectionPropagation) == null ? void 0 : _d3.parents) ?? false, U));
        });
      }
      (N.size < 2 || c) && e.current.setRowSelectionModel(Array.from(N));
    }, [
      n,
      r,
      c,
      e,
      f,
      (_e = t.rowSelectionPropagation) == null ? void 0 : _e.descendants,
      (_f2 = t.rowSelectionPropagation) == null ? void 0 : _f2.parents
    ]), G = u.useCallback((A) => {
      var _a3, _b3;
      if (!p || !r || A.length === 0) return A;
      const z = new Set(A), j = (L) => {
        z.add(L);
      };
      for (const L of A) jo(e, f, L, ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.descendants) ?? false, ((_b3 = t.rowSelectionPropagation) == null ? void 0 : _b3.parents) ?? false, j, z);
      return Array.from(z);
    }, [
      e,
      f,
      (_g2 = t.rowSelectionPropagation) == null ? void 0 : _g2.descendants,
      (_h2 = t.rowSelectionPropagation) == null ? void 0 : _h2.parents,
      p,
      r
    ]), P = u.useCallback(({ startId: A, endId: z }, j = true, L = false) => {
      if (!e.current.getRow(A) || !e.current.getRow(z)) return;
      n.debug(`Expanding selection from row ${A} to row ${z}`);
      const N = go(e), W = N.indexOf(A), B = N.indexOf(z), [U, K] = W > B ? [
        B,
        W
      ] : [
        W,
        B
      ], ne = N.slice(U, K + 1);
      e.current.selectRows(ne, j, L);
    }, [
      e,
      n
    ]), H = {
      selectRow: v,
      setRowSelectionModel: h,
      getSelectedRows: M,
      isRowSelected: C,
      isRowSelectable: x
    }, R = {
      selectRows: O,
      selectRowRange: P,
      getPropagatedRowSelectionModel: G
    };
    Ie(e, H, "public"), Ie(e, R, t.signature === Xt.DataGrid ? "private" : "public");
    const T = u.useRef(true), w = u.useCallback((A = false) => {
      var _a3;
      if (T.current) return;
      const z = Rt(e.current.state), j = Ut(e), L = Fo(e), N = g({}, Hn(e)), W = (K) => t.filterMode === "server" ? !j[K] : !j[K] || L[K] === false;
      let B = false;
      z.forEach((K) => {
        var _a4;
        if (W(K)) {
          if (t.keepNonExistentRowsSelected) return;
          delete N[K], B = true;
          return;
        }
        if (!((_a4 = t.rowSelectionPropagation) == null ? void 0 : _a4.parents)) return;
        const ne = f[K];
        if (ne.type === "group") {
          if (ne.isAutoGenerated) {
            delete N[K], B = true;
            return;
          }
          ne.children.every((te) => L[te] === false) || (delete N[K], B = true);
        }
      });
      const U = p && ((_a3 = t.rowSelectionPropagation) == null ? void 0 : _a3.parents) && Object.keys(N).length > 0;
      if (B || U && !A) {
        const K = Object.values(N);
        U ? e.current.selectRows(K, true, true) : e.current.setRowSelectionModel(K);
      }
    }, [
      e,
      p,
      (_i2 = t.rowSelectionPropagation) == null ? void 0 : _i2.parents,
      t.keepNonExistentRowsSelected,
      t.filterMode,
      f
    ]), y = u.useCallback((A, z) => {
      const j = z.metaKey || z.ctrlKey, L = !a && !j && !ix(z), N = !c || L, W = e.current.isRowSelected(A);
      N ? e.current.selectRow(A, L ? true : !W, true) : e.current.selectRow(A, !W, false);
    }, [
      e,
      c,
      a
    ]), k = u.useCallback((A, z) => {
      var _a3, _b3;
      if (i) return;
      const j = (_a3 = z.target.closest(`.${I.cell}`)) == null ? void 0 : _a3.getAttribute("data-field");
      j === To.field || j === el || j && ((_b3 = e.current.getColumn(j)) == null ? void 0 : _b3.type) === Jr || at(e)[A.id].type === "pinnedRow" || (z.shiftKey && c ? m(A.id) : y(A.id, z));
    }, [
      i,
      c,
      e,
      m,
      y
    ]), D = u.useCallback((A, z) => {
      var _a3;
      c && z.shiftKey && ((_a3 = window.getSelection()) == null ? void 0 : _a3.removeAllRanges());
    }, [
      c
    ]), $ = u.useCallback((A, z) => {
      c && z.nativeEvent.shiftKey ? m(A.id) : e.current.selectRow(A.id, A.value, !c);
    }, [
      e,
      m,
      c
    ]), V = u.useCallback((A) => {
      const z = t.pagination && t.checkboxSelectionVisibleOnly && t.paginationMode === "client" ? Wc(e) : go(e);
      e.current.selectRows(z, A.value);
    }, [
      e,
      t.checkboxSelectionVisibleOnly,
      t.pagination,
      t.paginationMode
    ]), E = u.useCallback((A, z) => {
      if (e.current.getCellMode(A.id, A.field) !== Ke.Edit && !Cr(z)) {
        if (Wr(z.key) && z.shiftKey) {
          const j = Ft(e);
          if (j && j.id !== A.id) {
            z.preventDefault();
            const L = e.current.isRowSelected(j.id);
            if (!c) {
              e.current.selectRow(j.id, !L, true);
              return;
            }
            const N = e.current.getRowIndexRelativeToVisibleRows(j.id), W = e.current.getRowIndexRelativeToVisibleRows(A.id);
            let B, U;
            N > W ? L ? (B = W, U = N - 1) : (B = W, U = N) : L ? (B = N + 1, U = W) : (B = N, U = W);
            const ne = Ln(e).rows.slice(B, U + 1).map((ee) => ee.id);
            e.current.selectRows(ne, !L);
            return;
          }
        }
        if (z.key === " " && z.shiftKey) {
          z.preventDefault(), y(A.id, z);
          return;
        }
        String.fromCharCode(z.keyCode) === "A" && (z.ctrlKey || z.metaKey) && (z.preventDefault(), O(e.current.getAllRowIds(), true));
      }
    }, [
      e,
      y,
      O,
      c
    ]), S = We(() => {
      if (!t.rowSelection) {
        e.current.setRowSelectionModel([]);
        return;
      }
      if (l === void 0) return;
      if (!r || !p || l.length === 0) {
        e.current.setRowSelectionModel(l);
        return;
      }
      const A = e.current.getPropagatedRowSelectionModel(l);
      if (A.length !== l.length || !A.every((z) => l.includes(z))) {
        e.current.setRowSelectionModel(A);
        return;
      }
      e.current.setRowSelectionModel(l);
    });
    oe(e, "sortedRowsSet", o(() => w(true))), oe(e, "filteredRowsSet", o(() => w())), oe(e, "rowClick", o(k)), oe(e, "rowSelectionCheckboxChange", o($)), oe(e, "headerSelectionCheckboxChange", V), oe(e, "cellMouseDown", o(D)), oe(e, "cellKeyDown", o(E)), u.useEffect(() => {
      S();
    }, [
      e,
      l,
      t.rowSelection,
      S
    ]);
    const F = l != null;
    u.useEffect(() => {
      if (F || !t.rowSelection) return;
      const A = Rt(e.current.state);
      if (x) {
        const z = A.filter((j) => x(j));
        z.length < A.length && e.current.setRowSelectionModel(z);
      }
    }, [
      e,
      x,
      F,
      t.rowSelection
    ]), u.useEffect(() => {
      if (!t.rowSelection || F) return;
      const A = Rt(e.current.state);
      !c && A.length > 1 && e.current.setRowSelectionModel([]);
    }, [
      e,
      c,
      a,
      F,
      t.rowSelection
    ]), u.useEffect(() => {
      o(w);
    }, [
      w,
      o
    ]), u.useEffect(() => {
      T.current && (T.current = false);
    }, []);
  }, oI = (e) => {
    const { classes: t } = e;
    return u.useMemo(() => we({
      cellCheckbox: [
        "cellCheckbox"
      ],
      columnHeaderCheckbox: [
        "columnHeaderCheckbox"
      ]
    }, Oe, t), [
      t
    ]);
  }, rI = (e, t) => {
    const n = {
      classes: t.classes
    }, o = oI(n), r = u.useCallback((l) => {
      const s = g({}, To, {
        cellClassName: o.cellCheckbox,
        headerClassName: o.columnHeaderCheckbox,
        headerName: e.current.getLocaleText("checkboxSelectionHeaderName")
      }), a = t.checkboxSelection, i = l.lookup[_t] != null;
      return a && !i ? (l.lookup[_t] = s, l.orderedFields = [
        _t,
        ...l.orderedFields
      ]) : !a && i ? (delete l.lookup[_t], l.orderedFields = l.orderedFields.filter((d) => d !== _t)) : a && i && (l.lookup[_t] = g({}, s, l.lookup[_t]), t.columns.some((d) => d.field === _t) || (l.orderedFields = [
        _t,
        ...l.orderedFields.filter((d) => d !== _t)
      ])), l;
    }, [
      e,
      o,
      t.columns,
      t.checkboxSelection
    ]);
    Ze(e, "hydrateColumns", r);
  }, lI = (e, t) => {
    var _a2, _b2;
    const n = t.sortModel ?? ((_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.sorting) == null ? void 0 : _b2.sortModel) ?? [];
    return g({}, e, {
      sorting: {
        sortModel: dc(n, t.disableMultipleColumnsSorting),
        sortedRows: []
      }
    });
  }, sI = (e, t) => {
    var _a2, _b2;
    const n = ft(e, "useGridSorting");
    e.current.registerControlState({
      stateId: "sortModel",
      propModel: t.sortModel,
      propOnChange: t.onSortModelChange,
      stateSelector: on,
      changeEvent: "sortModelChange"
    });
    const o = u.useCallback((P, H) => {
      const R = on(e), T = R.findIndex((y) => y.field === P);
      let w = [
        ...R
      ];
      return T > -1 ? (H == null ? void 0 : H.sort) == null ? w.splice(T, 1) : w.splice(T, 1, H) : w = [
        ...R,
        H
      ], w;
    }, [
      e
    ]), r = u.useCallback((P, H) => {
      const T = on(e).find((w) => w.field === P.field);
      if (T) {
        const w = H === void 0 ? Ei(P.sortingOrder ?? t.sortingOrder, T.sort) : H;
        return w === void 0 ? void 0 : g({}, T, {
          sort: w
        });
      }
      return {
        field: P.field,
        sort: H === void 0 ? Ei(P.sortingOrder ?? t.sortingOrder) : H
      };
    }, [
      e,
      t.sortingOrder
    ]), l = u.useCallback((P, H) => H == null || H.sortable === false || t.disableColumnSorting ? P : (H.sortingOrder || t.sortingOrder).some((T) => !!T) ? [
      ...P,
      "columnMenuSortItem"
    ] : P, [
      t.sortingOrder,
      t.disableColumnSorting
    ]), s = u.useCallback(() => {
      e.current.setState((P) => {
        if (t.sortingMode === "server") return n.debug("Skipping sorting rows as sortingMode = server"), g({}, P, {
          sorting: g({}, P.sorting, {
            sortedRows: xs(at(e), Ct, false)
          })
        });
        const H = on(P, e.current.instanceId), R = Xh(H, e), T = e.current.applyStrategyProcessor("sorting", {
          sortRowList: R
        });
        return g({}, P, {
          sorting: g({}, P.sorting, {
            sortedRows: T
          })
        });
      }), e.current.publishEvent("sortedRowsSet"), e.current.forceUpdate();
    }, [
      e,
      n,
      t.sortingMode
    ]), a = u.useCallback((P) => {
      on(e) !== P && (n.debug("Setting sort model"), e.current.setState(ki(P, t.disableMultipleColumnsSorting)), e.current.forceUpdate(), e.current.applySorting());
    }, [
      e,
      n,
      t.disableMultipleColumnsSorting
    ]), i = u.useCallback((P, H, R) => {
      const T = e.current.getColumn(P), w = r(T, H);
      let y;
      !R || t.disableMultipleColumnsSorting ? y = (w == null ? void 0 : w.sort) == null ? [] : [
        w
      ] : y = o(T.field, w), e.current.setSortModel(y);
    }, [
      e,
      o,
      r,
      t.disableMultipleColumnsSorting
    ]), d = u.useCallback(() => on(e), [
      e
    ]), c = u.useCallback(() => ys(e).map((H) => H.model), [
      e
    ]), f = u.useCallback(() => Eo(e), [
      e
    ]), p = u.useCallback((P) => e.current.getSortedRowIds()[P], [
      e
    ]);
    Ie(e, {
      getSortModel: d,
      getSortedRows: c,
      getSortedRowIds: f,
      getRowIdFromRowIndex: p,
      setSortModel: a,
      sortColumn: i,
      applySorting: s
    }, "public");
    const h = u.useCallback((P, H) => {
      var _a3, _b3;
      const R = on(e);
      return !H.exportOnlyDirtyModels || t.sortModel != null || ((_b3 = (_a3 = t.initialState) == null ? void 0 : _a3.sorting) == null ? void 0 : _b3.sortModel) != null || R.length > 0 ? g({}, P, {
        sorting: {
          sortModel: R
        }
      }) : P;
    }, [
      e,
      t.sortModel,
      (_b2 = (_a2 = t.initialState) == null ? void 0 : _a2.sorting) == null ? void 0 : _b2.sortModel
    ]), C = u.useCallback((P, H) => {
      var _a3;
      const R = (_a3 = H.stateToRestore.sorting) == null ? void 0 : _a3.sortModel;
      return R == null ? P : (e.current.setState(ki(R, t.disableMultipleColumnsSorting)), g({}, P, {
        callbacks: [
          ...P.callbacks,
          e.current.applySorting
        ]
      }));
    }, [
      e,
      t.disableMultipleColumnsSorting
    ]), x = u.useCallback((P) => {
      const H = at(e), R = H[Ct], T = P.sortRowList ? P.sortRowList(R.children.map((w) => H[w])) : [
        ...R.children
      ];
      return R.footerId != null && T.push(R.footerId), T;
    }, [
      e
    ]);
    Ze(e, "exportState", h), Ze(e, "restoreState", C), qr(e, qn, "sorting", x);
    const M = u.useCallback(({ field: P, colDef: H }, R) => {
      if (!H.sortable || t.disableColumnSorting) return;
      const T = R.shiftKey || R.metaKey || R.ctrlKey;
      i(P, void 0, T);
    }, [
      i,
      t.disableColumnSorting
    ]), v = u.useCallback(({ field: P, colDef: H }, R) => {
      !H.sortable || t.disableColumnSorting || R.key === "Enter" && !R.ctrlKey && !R.metaKey && i(P, void 0, R.shiftKey);
    }, [
      i,
      t.disableColumnSorting
    ]), O = u.useCallback(() => {
      const P = on(e), H = Pn(e);
      if (P.length > 0) {
        const R = P.filter((T) => H[T.field]);
        R.length < P.length && e.current.setSortModel(R);
      }
    }, [
      e
    ]), G = u.useCallback((P) => {
      P === "sorting" && e.current.applySorting();
    }, [
      e
    ]);
    Ze(e, "columnMenu", l), oe(e, "columnHeaderClick", M), oe(e, "columnHeaderKeyDown", v), oe(e, "rowsSet", e.current.applySorting), oe(e, "columnsChange", O), oe(e, "activeStrategyProcessorChange", G), fr(() => {
      e.current.applySorting();
    }), mt(() => {
      t.sortModel !== void 0 && e.current.setSortModel(t.sortModel);
    }, [
      e,
      t.sortModel
    ]);
  };
  function ba(e) {
    const { containerSize: t, scrollPosition: n, elementSize: o, elementOffset: r } = e, l = r + o;
    if (o > t) return r;
    if (l - t > n) return l - t;
    if (r < n) return r;
  }
  const iI = (e, t) => {
    const n = $t(), o = ft(e, "useGridScroll"), r = e.current.columnHeadersContainerRef, l = e.current.virtualScrollerRef, s = Q(e, zn), a = u.useCallback((f) => {
      var _a2;
      const p = dt(e.current.state), m = dr(e), h = t.unstable_listView ? [
        So(e.current.state)
      ] : ot(e);
      if (!(f.rowIndex == null) && m === 0 || h.length === 0) return false;
      o.debug(`Scrolling to cell at row ${f.rowIndex}, col: ${f.colIndex} `);
      let x = {};
      if (f.colIndex !== void 0) {
        const M = Gn(e);
        let v;
        if (typeof f.rowIndex < "u") {
          const O = (_a2 = s[f.rowIndex]) == null ? void 0 : _a2.id, G = e.current.unstable_getCellColSpanInfo(O, f.colIndex);
          G && !G.spannedByColSpan && (v = G.cellProps.width);
        }
        typeof v > "u" && (v = h[f.colIndex].computedWidth), x.left = ba({
          containerSize: p.viewportOuterSize.width,
          scrollPosition: Math.abs(l.current.scrollLeft),
          elementSize: v,
          elementOffset: M[f.colIndex]
        });
      }
      if (f.rowIndex !== void 0) {
        const M = Oo(e.current.state), v = fb(e), O = _c(e), G = t.pagination ? f.rowIndex - v * O : f.rowIndex, P = M.positions[G + 1] ? M.positions[G + 1] - M.positions[G] : M.currentPageTotalHeight - M.positions[G];
        x.top = ba({
          containerSize: p.viewportInnerSize.height,
          scrollPosition: l.current.scrollTop,
          elementSize: P,
          elementOffset: M.positions[G]
        });
      }
      return x = e.current.unstable_applyPipeProcessors("scrollToIndexes", x, f), typeof x.left !== void 0 || typeof x.top !== void 0 ? (e.current.scroll(x), true) : false;
    }, [
      o,
      e,
      l,
      t.pagination,
      s,
      t.unstable_listView
    ]), i = u.useCallback((f) => {
      if (l.current && f.left !== void 0 && r.current) {
        const p = n ? -1 : 1;
        r.current.scrollLeft = f.left, l.current.scrollLeft = p * f.left, o.debug(`Scrolling left: ${f.left}`);
      }
      l.current && f.top !== void 0 && (l.current.scrollTop = f.top, o.debug(`Scrolling top: ${f.top}`)), o.debug("Scrolling, updating container, and viewport");
    }, [
      l,
      n,
      r,
      o
    ]), d = u.useCallback(() => (l == null ? void 0 : l.current) ? {
      top: l.current.scrollTop,
      left: l.current.scrollLeft
    } : {
      top: 0,
      left: 0
    }, [
      l
    ]);
    Ie(e, {
      scroll: i,
      scrollToIndexes: a,
      getScrollPosition: d
    }, "public");
  };
  function aI(e, t) {
    qe(e, "columnHeaderClick", t.onColumnHeaderClick), qe(e, "columnHeaderContextMenu", t.onColumnHeaderContextMenu), qe(e, "columnHeaderDoubleClick", t.onColumnHeaderDoubleClick), qe(e, "columnHeaderOver", t.onColumnHeaderOver), qe(e, "columnHeaderOut", t.onColumnHeaderOut), qe(e, "columnHeaderEnter", t.onColumnHeaderEnter), qe(e, "columnHeaderLeave", t.onColumnHeaderLeave), qe(e, "cellClick", t.onCellClick), qe(e, "cellDoubleClick", t.onCellDoubleClick), qe(e, "cellKeyDown", t.onCellKeyDown), qe(e, "preferencePanelClose", t.onPreferencePanelClose), qe(e, "preferencePanelOpen", t.onPreferencePanelOpen), qe(e, "menuOpen", t.onMenuOpen), qe(e, "menuClose", t.onMenuClose), qe(e, "rowDoubleClick", t.onRowDoubleClick), qe(e, "rowClick", t.onRowClick), qe(e, "stateChange", t.onStateChange);
  }
  function cI(e, t = 166) {
    let n, o;
    const r = () => {
      n = void 0, e(...o);
    };
    function l(...s) {
      o = s, n === void 0 && (n = setTimeout(r, t));
    }
    return l.clear = () => {
      clearTimeout(n), n = void 0;
    }, l;
  }
  const Yl = {
    autoHeight: false,
    autoPageSize: false,
    autosizeOnMount: false,
    checkboxSelection: false,
    checkboxSelectionVisibleOnly: false,
    clipboardCopyCellDelimiter: "	",
    columnBufferPx: 150,
    columnHeaderHeight: 56,
    disableAutosize: false,
    disableColumnFilter: false,
    disableColumnMenu: false,
    disableColumnReorder: false,
    disableColumnResize: false,
    disableColumnSelector: false,
    disableColumnSorting: false,
    disableDensitySelector: false,
    disableEval: false,
    disableMultipleColumnsFiltering: false,
    disableMultipleColumnsSorting: false,
    disableMultipleRowSelection: false,
    disableRowSelectionOnClick: false,
    disableVirtualization: false,
    editMode: mn.Cell,
    filterDebounceMs: 150,
    filterMode: "client",
    hideFooter: false,
    hideFooterPagination: false,
    hideFooterRowCount: false,
    hideFooterSelectedRowCount: false,
    ignoreDiacritics: false,
    ignoreValueFormatterDuringExport: false,
    indeterminateCheckboxAction: "deselect",
    keepColumnPositionIfDraggedOutside: false,
    keepNonExistentRowsSelected: false,
    loading: false,
    logger: console,
    logLevel: "error",
    pageSizeOptions: [
      25,
      50,
      100
    ],
    pagination: false,
    paginationMode: "client",
    resetPageOnSortFilter: false,
    resizeThrottleMs: 60,
    rowBufferPx: 150,
    rowHeight: 52,
    rowPositionsDebounceMs: 166,
    rows: [],
    rowSelection: true,
    rowSpacingType: "margin",
    showCellVerticalBorder: false,
    showColumnVerticalBorder: false,
    sortingMode: "client",
    sortingOrder: [
      "asc",
      "desc",
      null
    ],
    throttleRowsMs: 0,
    unstable_rowSpanning: false,
    virtualizeColumnsWithAutoRowHeight: false
  }, so = {
    width: 0,
    height: 0
  }, uI = {
    isReady: false,
    root: so,
    viewportOuterSize: so,
    viewportInnerSize: so,
    contentSize: so,
    minimumSize: so,
    hasScrollX: false,
    hasScrollY: false,
    scrollbarSize: 0,
    headerHeight: 0,
    groupHeaderHeight: 0,
    headerFilterHeight: 0,
    rowWidth: 0,
    rowHeight: 0,
    columnsTotalWidth: 0,
    leftPinnedWidth: 0,
    rightPinnedWidth: 0,
    headersTotalHeight: 0,
    topContainerHeight: 0,
    bottomContainerHeight: 0
  }, dI = (e, t, n) => {
    const o = uI, r = Io(n);
    return g({}, e, {
      dimensions: g({}, o, Tu(t, n, r, ko(n)))
    });
  }, Fu = he(ot, Gn, (e, t) => {
    const n = e.length;
    return n === 0 ? 0 : co(t[n - 1] + e[n - 1].computedWidth, 1);
  });
  function fI(e, t) {
    const n = ft(e, "useResizeContainer"), o = u.useRef(false), r = u.useRef(so), l = Q(e, ko), s = Q(e, Io), a = Q(e, Fu), i = u.useRef(true), { rowHeight: d, headerHeight: c, groupHeaderHeight: f, headerFilterHeight: p, headersTotalHeight: m, leftPinnedWidth: h, rightPinnedWidth: C } = Tu(t, e, s, l), x = u.useRef(void 0), M = u.useCallback(() => dt(e.current.state), [
      e
    ]), v = u.useCallback((D) => {
      e.current.setState(($) => g({}, $, {
        dimensions: D
      })), e.current.rootElementRef.current && Ca(e.current.rootElementRef.current, dt(e.current.state));
    }, [
      e
    ]), O = u.useCallback(() => {
      const D = e.current.mainElementRef.current;
      if (!D) return;
      const $ = Ju(D).getComputedStyle(D), V = {
        width: parseFloat($.width) || 0,
        height: parseFloat($.height) || 0
      };
      (!x.current || !va(x.current, V)) && (e.current.publishEvent("resize", V), x.current = V);
    }, [
      e
    ]), G = u.useCallback(() => {
      const D = dt(e.current.state);
      if (!D.isReady) return 0;
      const $ = Ln(e);
      if (t.getRowHeight) {
        const E = br(e), S = E.lastRowIndex - E.firstRowIndex;
        return Math.min(S - 1, $.rows.length);
      }
      const V = Math.floor(D.viewportInnerSize.height / d);
      return Math.min(V, $.rows.length);
    }, [
      e,
      t.getRowHeight,
      d
    ]), P = u.useCallback(() => {
      var _a2, _b2;
      if (i.current) return;
      const D = pI(e.current.mainElementRef.current, t.scrollbarSize), $ = Oo(e.current.state), V = m + $.pinnedTopRowsTotalHeight, E = $.pinnedBottomRowsTotalHeight, F = {
        width: a - h - C,
        height: co($.currentPageTotalHeight, 1)
      };
      let A, z, j = false, L = false;
      if (t.autoHeight) L = false, j = Math.round(a) > Math.round(r.current.width), A = {
        width: r.current.width,
        height: V + E + F.height
      }, z = {
        width: Math.max(0, A.width - (L ? D : 0)),
        height: Math.max(0, A.height - (j ? D : 0))
      };
      else {
        A = {
          width: r.current.width,
          height: r.current.height
        }, z = {
          width: Math.max(0, A.width - h - C),
          height: Math.max(0, A.height - V - E)
        };
        const K = F, ne = z, ee = K.width > ne.width, te = K.height > ne.height;
        (ee || te) && (L = te, j = K.width + (L ? D : 0) > ne.width, j && (L = K.height + D > ne.height)), L && (z.width -= D), j && (z.height -= D);
      }
      const N = Math.max(A.width, a + (L ? D : 0)), W = {
        width: a,
        height: V + F.height + E
      }, B = {
        isReady: true,
        root: r.current,
        viewportOuterSize: A,
        viewportInnerSize: z,
        contentSize: F,
        minimumSize: W,
        hasScrollX: j,
        hasScrollY: L,
        scrollbarSize: D,
        headerHeight: c,
        groupHeaderHeight: f,
        headerFilterHeight: p,
        rowWidth: N,
        rowHeight: d,
        columnsTotalWidth: a,
        leftPinnedWidth: h,
        rightPinnedWidth: C,
        headersTotalHeight: m,
        topContainerHeight: V,
        bottomContainerHeight: E
      }, U = e.current.state.dimensions;
      $n(U, B) || (v(B), va(B.viewportInnerSize, U.viewportInnerSize) || e.current.publishEvent("viewportInnerSizeChange", B.viewportInnerSize), (_b2 = (_a2 = e.current).updateRenderContext) == null ? void 0 : _b2.call(_a2));
    }, [
      e,
      v,
      t.scrollbarSize,
      t.autoHeight,
      d,
      c,
      f,
      p,
      a,
      m,
      h,
      C
    ]), H = We(P), R = u.useMemo(() => t.resizeThrottleMs > 0 ? cI(() => {
      H(), e.current.publishEvent("debouncedResize", r.current);
    }, t.resizeThrottleMs) : void 0, [
      e,
      t.resizeThrottleMs,
      H
    ]);
    u.useEffect(() => R == null ? void 0 : R.clear, [
      R
    ]);
    const T = {
      resize: O,
      getRootDimensions: M
    }, w = {
      updateDimensions: P,
      getViewportPageSize: G
    };
    mt(P, [
      P
    ]), Ie(e, T, "public"), Ie(e, w, "private");
    const y = u.useCallback((D) => {
      Ca(D, dt(e.current.state));
    }, [
      e
    ]), k = u.useCallback((D) => {
      if (r.current = D, D.height === 0 && !o.current && !t.autoHeight && !_r && (n.error([
        "The parent DOM element of the Data Grid has an empty height.",
        "Please make sure that this element has an intrinsic height.",
        "The grid displays with a height of 0px.",
        "",
        "More details: https://mui.com/r/x-data-grid-no-dimensions."
      ].join(`
`)), o.current = true), D.width === 0 && !o.current && !_r && (n.error([
        "The parent DOM element of the Data Grid has an empty width.",
        "Please make sure that this element has an intrinsic width.",
        "The grid displays with a width of 0px.",
        "",
        "More details: https://mui.com/r/x-data-grid-no-dimensions."
      ].join(`
`)), o.current = true), i.current || !R) {
        i.current = false, P();
        return;
      }
      R();
    }, [
      P,
      t.autoHeight,
      R,
      n
    ]);
    qe(e, "rootMount", y), qe(e, "resize", k), qe(e, "debouncedResize", t.onResize);
  }
  function Ca(e, t) {
    const n = (o, r) => e.style.setProperty(o, r);
    n("--DataGrid-hasScrollX", `${Number(t.hasScrollX)}`), n("--DataGrid-hasScrollY", `${Number(t.hasScrollY)}`), n("--DataGrid-scrollbarSize", `${t.scrollbarSize}px`), n("--DataGrid-rowWidth", `${t.rowWidth}px`), n("--DataGrid-columnsTotalWidth", `${t.columnsTotalWidth}px`), n("--DataGrid-leftPinnedWidth", `${t.leftPinnedWidth}px`), n("--DataGrid-rightPinnedWidth", `${t.rightPinnedWidth}px`), n("--DataGrid-headerHeight", `${t.headerHeight}px`), n("--DataGrid-headersTotalHeight", `${t.headersTotalHeight}px`), n("--DataGrid-topContainerHeight", `${t.topContainerHeight}px`), n("--DataGrid-bottomContainerHeight", `${t.bottomContainerHeight}px`), n("--height", `${t.rowHeight}px`);
  }
  function Tu(e, t, n, o) {
    const r = Ec(e.rowHeight, Yl.rowHeight);
    return {
      rowHeight: Math.floor(r * n),
      headerHeight: Math.floor(e.columnHeaderHeight * n),
      groupHeaderHeight: Math.floor((e.columnGroupHeaderHeight ?? e.columnHeaderHeight) * n),
      headerFilterHeight: Math.floor((e.headerFilterHeight ?? e.columnHeaderHeight) * n),
      columnsTotalWidth: Fu(t),
      headersTotalHeight: ll(t, e),
      leftPinnedWidth: o.left.reduce((l, s) => l + s.computedWidth, 0),
      rightPinnedWidth: o.right.reduce((l, s) => l + s.computedWidth, 0)
    };
  }
  const wa = /* @__PURE__ */ new WeakMap();
  function pI(e, t) {
    if (t !== void 0) return t;
    if (e === null) return 0;
    const n = wa.get(e);
    if (n !== void 0) return n;
    const r = qt(e).createElement("div");
    r.style.width = "99px", r.style.height = "99px", r.style.position = "absolute", r.style.overflow = "scroll", r.className = "scrollDiv", e.appendChild(r);
    const l = r.offsetWidth - r.clientWidth;
    return e.removeChild(r), wa.set(e, l), l;
  }
  function va(e, t) {
    return e.width === t.width && e.height === t.height;
  }
  const gI = typeof globalThis.ResizeObserver < "u" ? globalThis.ResizeObserver : class {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  }, hI = (e, t, n) => {
    n.current.caches.rowsMeta = {
      heights: /* @__PURE__ */ new Map()
    };
    const o = ms(n.current.state), r = dr(n), l = pr(n.current.state), s = Math.min(l.enabled ? l.paginationModel.pageSize : r, r);
    return g({}, e, {
      rowsMeta: {
        currentPageTotalHeight: s * o,
        positions: Array.from({
          length: s
        }, (a, i) => i * o),
        pinnedTopRowsTotalHeight: 0,
        pinnedBottomRowsTotalHeight: 0
      }
    });
  }, mI = (e, t) => {
    const { getRowHeight: n, getRowSpacing: o, getEstimatedRowHeight: r } = t, l = e.current.caches.rowsMeta.heights, s = u.useRef(-1), a = u.useRef(false), i = u.useRef(false), d = Q(e, Io), c = Ts(e), f = Q(e, Po), p = Q(e, ms), m = (y) => {
      let k = l.get(y);
      return k === void 0 && (k = {
        content: p,
        spacingTop: 0,
        spacingBottom: 0,
        detail: 0,
        autoHeight: false,
        needsFirstMeasurement: true
      }, l.set(y, k)), k;
    }, h = u.useCallback((y) => {
      const k = dt(e.current.state).rowHeight, D = e.current.getRowHeightEntry(y.id);
      if (!n) D.content = k, D.needsFirstMeasurement = false;
      else {
        const $ = n(g({}, y, {
          densityFactor: d
        }));
        if ($ === "auto") {
          if (D.needsFirstMeasurement) {
            const V = r ? r(g({}, y, {
              densityFactor: d
            })) : k;
            D.content = V ?? k;
          }
          a.current = true, D.autoHeight = true;
        } else D.content = Ec($, k), D.needsFirstMeasurement = false, D.autoHeight = false;
      }
      if (o) {
        const $ = e.current.getRowIndexRelativeToVisibleRows(y.id), V = o(g({}, y, {
          isFirstVisible: $ === 0,
          isLastVisible: $ === c.rows.length - 1,
          indexRelativeToCurrentPage: $
        }));
        D.spacingTop = V.top ?? 0, D.spacingBottom = V.bottom ?? 0;
      } else D.spacingTop = 0, D.spacingBottom = 0;
      return e.current.unstable_applyPipeProcessors("rowHeight", D, y), D;
    }, [
      e,
      c.rows,
      n,
      r,
      p,
      o,
      d
    ]), C = u.useCallback(() => {
      a.current = false;
      const y = f.top.reduce((S, F) => {
        const A = h(F);
        return S + A.content + A.spacingTop + A.spacingBottom + A.detail;
      }, 0), k = f.bottom.reduce((S, F) => {
        const A = h(F);
        return S + A.content + A.spacingTop + A.spacingBottom + A.detail;
      }, 0), D = [], $ = c.rows.reduce((S, F) => {
        D.push(S);
        const A = h(F), z = A.content + A.spacingTop + A.spacingBottom + A.detail;
        return S + z;
      }, 0);
      a.current || (s.current = 1 / 0);
      const V = y !== e.current.state.rowsMeta.pinnedTopRowsTotalHeight || k !== e.current.state.rowsMeta.pinnedBottomRowsTotalHeight || $ !== e.current.state.rowsMeta.currentPageTotalHeight, E = {
        currentPageTotalHeight: $,
        positions: D,
        pinnedTopRowsTotalHeight: y,
        pinnedBottomRowsTotalHeight: k
      };
      e.current.setState((S) => g({}, S, {
        rowsMeta: E
      })), V && e.current.updateDimensions(), i.current = true;
    }, [
      e,
      f,
      c.rows,
      h
    ]), x = (y) => {
      var _a2;
      return ((_a2 = l.get(y)) == null ? void 0 : _a2.content) ?? p;
    }, M = (y, k) => {
      const D = e.current.getRowHeightEntry(y), $ = D.content !== k;
      D.needsFirstMeasurement = false, D.content = k, i.current &&= !$;
    }, v = (y) => {
      var _a2;
      return ((_a2 = l.get(y)) == null ? void 0 : _a2.autoHeight) ?? false;
    }, O = () => s.current, G = (y) => {
      a.current && y > s.current && (s.current = y);
    }, P = () => {
      l.clear(), C();
    }, H = bn(() => new gI((y) => {
      var _a2;
      for (let k = 0; k < y.length; k += 1) {
        const D = y[k], $ = D.borderBoxSize && D.borderBoxSize.length > 0 ? D.borderBoxSize[0].blockSize : D.contentRect.height, V = D.target.__mui_id;
        if (((_a2 = su(e)) == null ? void 0 : _a2.id) === V && $ === 0) return;
        e.current.unstable_storeRowHeightMeasurement(V, $);
      }
      i.current || requestAnimationFrame(() => {
        e.current.requestPipeProcessorsApplication("rowHeight");
      });
    })).current, R = (y, k) => (y.__mui_id = k, H.observe(y), () => H.unobserve(y));
    Gs(e, "rowHeight", C), mt(() => {
      C();
    }, [
      C
    ]);
    const T = {
      unstable_getRowHeight: x,
      unstable_setLastMeasuredRowIndex: G,
      unstable_storeRowHeightMeasurement: M,
      resetRowHeights: P
    }, w = {
      hydrateRowsMeta: C,
      observeRowHeight: R,
      rowHasAutoHeight: v,
      getRowHeightEntry: m,
      getLastMeasuredRowIndex: O
    };
    Ie(e, T, "public"), Ie(e, w, "private");
  }, bI = (e) => {
    const t = u.useCallback((r = {}) => e.current.unstable_applyPipeProcessors("exportState", {}, r), [
      e
    ]), n = u.useCallback((r) => {
      e.current.unstable_applyPipeProcessors("restoreState", {
        callbacks: []
      }, {
        stateToRestore: r
      }).callbacks.forEach((s) => {
        s();
      }), e.current.forceUpdate();
    }, [
      e
    ]);
    Ie(e, {
      exportState: t,
      restoreState: n
    }, "public");
  }, CI = (e) => {
    const t = u.useRef({}), n = (a, i) => {
      var _a2;
      return (_a2 = t.current[a]) == null ? void 0 : _a2[i];
    }, o = () => {
      t.current = {};
    }, r = u.useCallback(({ rowId: a, minFirstColumn: i, maxLastColumn: d, columns: c }) => {
      for (let f = i; f < d; f += 1) {
        const p = wI({
          apiRef: e,
          lookup: t.current,
          columnIndex: f,
          rowId: a,
          minFirstColumnIndex: i,
          maxLastColumnIndex: d,
          columns: c
        });
        p.colSpan > 1 && (f += p.colSpan - 1);
      }
    }, [
      e
    ]), l = {
      unstable_getCellColSpanInfo: n
    }, s = {
      resetColSpan: o,
      calculateColSpan: r
    };
    Ie(e, l, "public"), Ie(e, s, "private"), oe(e, "columnOrderChange", o);
  };
  function wI(e) {
    const { apiRef: t, lookup: n, columnIndex: o, rowId: r, minFirstColumnIndex: l, maxLastColumnIndex: s, columns: a } = e, i = a.length, d = a[o], c = t.current.getRow(r), f = t.current.getRowValue(c, d), p = typeof d.colSpan == "function" ? d.colSpan(f, c, d, t) : d.colSpan;
    if (!p || p === 1) return El(n, r, o, {
      spannedByColSpan: false,
      cellProps: {
        colSpan: 1,
        width: d.computedWidth
      }
    }), {
      colSpan: 1
    };
    let m = d.computedWidth;
    for (let h = 1; h < p; h += 1) {
      const C = o + h;
      if (C >= l && C < s) {
        const x = a[C];
        m += x.computedWidth, El(n, r, o + h, {
          spannedByColSpan: true,
          rightVisibleCellIndex: Math.min(o + p, i - 1),
          leftVisibleCellIndex: o
        });
      }
      El(n, r, o, {
        spannedByColSpan: false,
        cellProps: {
          colSpan: p,
          width: m
        }
      });
    }
    return {
      colSpan: p
    };
  }
  function El(e, t, n, o) {
    e[t] || (e[t] = {}), e[t][n] = o;
  }
  const Ou = (e, t, n) => {
    if (mc(e)) {
      if (n[e.field] !== void 0) throw new Error([
        "MUI X: columnGroupingModel contains duplicated field",
        `column field ${e.field} occurs two times in the grouping model:`,
        `- ${n[e.field].join(" > ")}`,
        `- ${t.join(" > ")}`
      ].join(`
`));
      n[e.field] = t;
      return;
    }
    const { groupId: o, children: r } = e;
    r.forEach((l) => {
      Ou(l, [
        ...t,
        o
      ], n);
    });
  }, Xl = (e) => {
    if (!e) return {};
    const t = {};
    return e.forEach((n) => {
      Ou(n, [], t);
    }), t;
  }, Ql = (e, t, n) => {
    const o = (i) => t[i] ?? [], r = [], l = Math.max(...e.map((i) => o(i).length)), s = (i, d, c) => $n(o(i).slice(0, c + 1), o(d).slice(0, c + 1)), a = (i, d) => !!((n == null ? void 0 : n.left) && n.left.includes(i) && !n.left.includes(d) || (n == null ? void 0 : n.right) && !n.right.includes(i) && n.right.includes(d));
    for (let i = 0; i < l; i += 1) {
      const d = e.reduce((c, f) => {
        const p = o(f)[i] ?? null;
        if (c.length === 0) return [
          {
            columnFields: [
              f
            ],
            groupId: p
          }
        ];
        const m = c[c.length - 1], h = m.columnFields[m.columnFields.length - 1];
        return m.groupId !== p || !s(h, f, i) || a(h, f) ? [
          ...c,
          {
            columnFields: [
              f
            ],
            groupId: p
          }
        ] : [
          ...c.slice(0, c.length - 1),
          {
            columnFields: [
              ...m.columnFields,
              f
            ],
            groupId: p
          }
        ];
      }, []);
      r.push(d);
    }
    return r;
  }, vI = [
    "groupId",
    "children"
  ], zs = (e) => {
    let t = {};
    return e.forEach((n) => {
      if (mc(n)) return;
      const { groupId: o, children: r } = n, l = de(n, vI);
      if (!o) throw new Error("MUI X: An element of the columnGroupingModel does not have either `field` or `groupId`.");
      const s = g({}, l, {
        groupId: o
      }), a = zs(r);
      if (a[o] !== void 0 || t[o] !== void 0) throw new Error(`MUI X: The groupId ${o} is used multiple times in the columnGroupingModel.`);
      t = g({}, t, a, {
        [o]: s
      });
    }), g({}, t);
  }, xI = (e, t, n) => {
    if (!t.columnGroupingModel) return e;
    const o = yn(n), r = Mo(n), l = zs(t.columnGroupingModel ?? []), s = Xl(t.columnGroupingModel ?? []), a = Ql(o, s, n.current.state.pinnedColumns ?? {}), i = r.length === 0 ? 0 : Math.max(...r.map((d) => {
      var _a2;
      return ((_a2 = s[d]) == null ? void 0 : _a2.length) ?? 0;
    }));
    return g({}, e, {
      columnGrouping: {
        lookup: l,
        unwrappedGroupingModel: s,
        headerStructure: a,
        maxDepth: i
      }
    });
  }, yI = (e, t) => {
    const n = u.useCallback((a) => Yc(e)[a] ?? [], [
      e
    ]), o = u.useCallback(() => Xc(e), [
      e
    ]);
    Ie(e, {
      getColumnGroupPath: n,
      getAllGroupDetails: o
    }, "public");
    const l = u.useCallback(() => {
      const a = Xl(t.columnGroupingModel ?? []);
      e.current.setState((i) => {
        var _a2;
        const d = ((_a2 = i.columns) == null ? void 0 : _a2.orderedFields) ?? [], c = i.pinnedColumns ?? {}, f = Ql(d, a, c);
        return g({}, i, {
          columnGrouping: g({}, i.columnGrouping, {
            headerStructure: f
          })
        });
      });
    }, [
      e,
      t.columnGroupingModel
    ]), s = u.useCallback((a) => {
      var _a2, _b2;
      const i = ((_b2 = (_a2 = e.current).getPinnedColumns) == null ? void 0 : _b2.call(_a2)) ?? {}, d = yn(e), c = Mo(e), f = zs(a ?? []), p = Xl(a ?? []), m = Ql(d, p, i), h = c.length === 0 ? 0 : Math.max(...c.map((C) => {
        var _a3;
        return ((_a3 = p[C]) == null ? void 0 : _a3.length) ?? 0;
      }));
      e.current.setState((C) => g({}, C, {
        columnGrouping: {
          lookup: f,
          unwrappedGroupingModel: p,
          headerStructure: m,
          maxDepth: h
        }
      }));
    }, [
      e
    ]);
    oe(e, "columnIndexChange", l), oe(e, "columnsChange", () => {
      s(t.columnGroupingModel);
    }), oe(e, "columnVisibilityModelChange", () => {
      s(t.columnGroupingModel);
    }), u.useEffect(() => {
      s(t.columnGroupingModel);
    }, [
      s,
      t.columnGroupingModel
    ]);
  };
  function SI() {
    let e, t;
    const n = new Promise((o, r) => {
      e = o, t = r;
    });
    return n.resolve = e, n.reject = t, n;
  }
  function xa(e, t) {
    if (t !== void 0 && e.changedTouches) {
      for (let n = 0; n < e.changedTouches.length; n += 1) {
        const o = e.changedTouches[n];
        if (o.identifier === t) return {
          x: o.clientX,
          y: o.clientY
        };
      }
      return false;
    }
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  function ya(e, t, n, o) {
    let r = e;
    return o === "Right" ? r += t - n.left : r += n.right - t, r;
  }
  function II(e, t, n) {
    return n === "Left" ? e - t.left : t.right - e;
  }
  function PI(e) {
    return e === "Right" ? "Left" : "Right";
  }
  function MI(e, t) {
    const n = e.classList.contains(I["columnSeparator--sideRight"]) ? "Right" : "Left";
    return t ? PI(n) : n;
  }
  function Sa(e) {
    e.preventDefault(), e.stopImmediatePropagation();
  }
  function kI(e) {
    const t = u.useRef(void 0), n = () => ru(e), o = Q(e, n);
    return u.useEffect(() => {
      t.current && o === false && (t.current.resolve(), t.current = void 0);
    }), () => {
      if (!t.current) {
        if (n() === false) return Promise.resolve();
        t.current = SI();
      }
      return t.current;
    };
  }
  function EI(e, t) {
    if (e.length < 4) return e;
    const n = e.slice();
    n.sort((a, i) => a - i);
    const o = n[Math.floor(n.length * 0.25)], r = n[Math.floor(n.length * 0.75) - 1], l = r - o, s = l < 5 ? 5 : l * t;
    return n.filter((a) => a > o - s && a < r + s);
  }
  function FI(e, t, n) {
    const o = {}, r = e.current.rootElementRef.current;
    return r.classList.add(I.autosizing), n.forEach((l) => {
      const a = wv(e.current, l.field).map((h) => h.getBoundingClientRect().width ?? 0), i = t.includeOutliers ? a : EI(a, t.outliersFactor);
      if (t.includeHeaders) {
        const h = Cv(e.current, l.field);
        if (h) {
          const C = h.querySelector(`.${I.columnHeaderTitle}`), x = h.querySelector(`.${I.columnHeaderTitleContainerContent}`), M = h.querySelector(`.${I.iconButtonContainer}`), v = h.querySelector(`.${I.menuIcon}`), O = C ?? x, G = window.getComputedStyle(h, null), P = parseInt(G.paddingLeft, 10) + parseInt(G.paddingRight, 10), R = O.scrollWidth + 1 + P + ((M == null ? void 0 : M.clientWidth) ?? 0) + ((v == null ? void 0 : v.clientWidth) ?? 0);
          i.push(R);
        }
      }
      const d = l.minWidth !== -1 / 0 && l.minWidth !== void 0, c = l.maxWidth !== 1 / 0 && l.maxWidth !== void 0, f = d ? l.minWidth : 0, p = c ? l.maxWidth : 1 / 0, m = i.length === 0 ? 0 : Math.max(...i);
      o[l.field] = Gt(m, f, p);
    }), r.classList.remove(I.autosizing), o;
  }
  const TI = (e) => g({}, e, {
    columnResize: {
      resizingColumnField: ""
    }
  });
  function OI() {
    return {
      colDef: void 0,
      initialColWidth: 0,
      initialTotalWidth: 0,
      previousMouseClickEvent: void 0,
      columnHeaderElement: void 0,
      headerFilterElement: void 0,
      groupHeaderElements: [],
      cellElements: [],
      leftPinnedCellsAfter: [],
      rightPinnedCellsBefore: [],
      fillerLeft: void 0,
      fillerRight: void 0,
      leftPinnedHeadersAfter: [],
      rightPinnedHeadersBefore: []
    };
  }
  const DI = (e, t) => {
    const n = $t(), o = ft(e, "useGridColumnResize"), r = bn(OI).current, l = u.useRef(null), s = u.useRef(null), a = sn(), i = u.useRef(void 0), d = (w) => {
      var _a2, _b2;
      o.debug(`Updating width to ${w} for col ${r.colDef.field}`);
      const y = r.columnHeaderElement.offsetWidth, k = w - y, D = w - r.initialColWidth;
      if (D > 0) {
        const E = r.initialTotalWidth + D;
        (_b2 = (_a2 = e.current.rootElementRef) == null ? void 0 : _a2.current) == null ? void 0 : _b2.style.setProperty("--DataGrid-rowWidth", `${E}px`);
      }
      r.colDef.computedWidth = w, r.colDef.width = w, r.colDef.flex = 0, r.columnHeaderElement.style.width = `${w}px`;
      const $ = r.headerFilterElement;
      $ && ($.style.width = `${w}px`), r.groupHeaderElements.forEach((E) => {
        const S = E;
        let F;
        S.getAttribute("aria-colspan") === "1" ? F = `${w}px` : F = `${S.offsetWidth + k}px`, S.style.width = F;
      }), r.cellElements.forEach((E) => {
        const S = E;
        let F;
        S.getAttribute("aria-colspan") === "1" ? F = `${w}px` : F = `${S.offsetWidth + k}px`, S.style.setProperty("--width", F);
      });
      const V = e.current.unstable_applyPipeProcessors("isColumnPinned", false, r.colDef.field);
      V === Tn.LEFT && (ro(r.fillerLeft, "width", k), r.leftPinnedCellsAfter.forEach((E) => {
        ro(E, "left", k);
      }), r.leftPinnedHeadersAfter.forEach((E) => {
        ro(E, "left", k);
      })), V === Tn.RIGHT && (ro(r.fillerRight, "width", k), r.rightPinnedCellsBefore.forEach((E) => {
        ro(E, "right", k);
      }), r.rightPinnedHeadersBefore.forEach((E) => {
        ro(E, "right", k);
      }));
    }, c = (w) => {
      if (M(), r.previousMouseClickEvent) {
        const y = r.previousMouseClickEvent, k = y.timeStamp, D = y.clientX, $ = y.clientY;
        if (w.timeStamp - k < 300 && w.clientX === D && w.clientY === $) {
          r.previousMouseClickEvent = void 0, e.current.publishEvent("columnResizeStop", null, w);
          return;
        }
      }
      if (r.colDef) {
        e.current.setColumnWidth(r.colDef.field, r.colDef.width), o.debug(`Updating col ${r.colDef.field} with new width: ${r.colDef.width}`);
        const y = gn(e.current.state);
        r.groupHeaderElements.forEach((k) => {
          const D = dv(k), $ = k, E = `${D.reduce((S, F) => y.columnVisibilityModel[F] !== false ? S + y.lookup[F].computedWidth : S, 0)}px`;
          $.style.width = E;
        });
      }
      a.start(0, () => {
        e.current.publishEvent("columnResizeStop", null, w);
      });
    }, f = (w, y, k) => {
      var _a2;
      const D = e.current.rootElementRef.current;
      r.initialColWidth = w.computedWidth, r.initialTotalWidth = e.current.getRootDimensions().rowWidth, r.colDef = w, r.columnHeaderElement = uv(e.current.columnHeadersContainerRef.current, w.field);
      const $ = D.querySelector(`.${I.headerFilterRow} [data-field="${Mn(w.field)}"]`);
      $ && (r.headerFilterElement = $), r.groupHeaderElements = fv((_a2 = e.current.columnHeadersContainerRef) == null ? void 0 : _a2.current, w.field), r.cellElements = pv(r.columnHeaderElement, e.current), r.fillerLeft = Qi(e.current, n ? "filler--pinnedRight" : "filler--pinnedLeft"), r.fillerRight = Qi(e.current, n ? "filler--pinnedLeft" : "filler--pinnedRight");
      const V = e.current.unstable_applyPipeProcessors("isColumnPinned", false, r.colDef.field);
      r.leftPinnedCellsAfter = V !== Tn.LEFT ? [] : gv(e.current, r.columnHeaderElement, n), r.rightPinnedCellsBefore = V !== Tn.RIGHT ? [] : hv(e.current, r.columnHeaderElement, n), r.leftPinnedHeadersAfter = V !== Tn.LEFT ? [] : mv(e.current, r.columnHeaderElement, n), r.rightPinnedHeadersBefore = V !== Tn.RIGHT ? [] : bv(e.current, r.columnHeaderElement, n), s.current = MI(y, n), l.current = II(k, r.columnHeaderElement.getBoundingClientRect(), s.current);
    }, p = We(c), m = We((w) => {
      if (w.buttons === 0) {
        p(w);
        return;
      }
      let y = ya(l.current, w.clientX, r.columnHeaderElement.getBoundingClientRect(), s.current);
      y = Gt(y, r.colDef.minWidth, r.colDef.maxWidth), d(y);
      const k = {
        element: r.columnHeaderElement,
        colDef: r.colDef,
        width: y
      };
      e.current.publishEvent("columnResize", k, w);
    }), h = We((w) => {
      xa(w, i.current) && c(w);
    }), C = We((w) => {
      const y = xa(w, i.current);
      if (!y) return;
      if (w.type === "mousemove" && w.buttons === 0) {
        h(w);
        return;
      }
      let k = ya(l.current, y.x, r.columnHeaderElement.getBoundingClientRect(), s.current);
      k = Gt(k, r.colDef.minWidth, r.colDef.maxWidth), d(k);
      const D = {
        element: r.columnHeaderElement,
        colDef: r.colDef,
        width: k
      };
      e.current.publishEvent("columnResize", D, w);
    }), x = We((w) => {
      const y = Br(w.target, I["columnSeparator--resizable"]);
      if (!y) return;
      const k = w.changedTouches[0];
      k != null && (i.current = k.identifier);
      const D = Br(w.target, I.columnHeader), $ = cv(D), V = e.current.getColumn($);
      o.debug(`Start Resize on col ${V.field}`), e.current.publishEvent("columnResizeStart", {
        field: $
      }, w), f(V, y, k.clientX);
      const E = qt(w.currentTarget);
      E.addEventListener("touchmove", C), E.addEventListener("touchend", h);
    }), M = u.useCallback(() => {
      const w = qt(e.current.rootElementRef.current);
      w.body.style.removeProperty("cursor"), w.removeEventListener("mousemove", m), w.removeEventListener("mouseup", p), w.removeEventListener("touchmove", C), w.removeEventListener("touchend", h), setTimeout(() => {
        w.removeEventListener("click", Sa, true);
      }, 100), r.columnHeaderElement && (r.columnHeaderElement.style.pointerEvents = "unset");
    }, [
      e,
      r,
      m,
      p,
      C,
      h
    ]), v = u.useCallback(({ field: w }) => {
      e.current.setState((y) => g({}, y, {
        columnResize: g({}, y.columnResize, {
          resizingColumnField: w
        })
      })), e.current.forceUpdate();
    }, [
      e
    ]), O = u.useCallback(() => {
      e.current.setState((w) => g({}, w, {
        columnResize: g({}, w.columnResize, {
          resizingColumnField: ""
        })
      })), e.current.forceUpdate();
    }, [
      e
    ]), G = We(({ colDef: w }, y) => {
      if (y.button !== 0 || !y.currentTarget.classList.contains(I["columnSeparator--resizable"])) return;
      y.preventDefault(), o.debug(`Start Resize on col ${w.field}`), e.current.publishEvent("columnResizeStart", {
        field: w.field
      }, y), f(w, y.currentTarget, y.clientX);
      const k = qt(e.current.rootElementRef.current);
      k.body.style.cursor = "col-resize", r.previousMouseClickEvent = y.nativeEvent, k.addEventListener("mousemove", m), k.addEventListener("mouseup", p), k.addEventListener("click", Sa, true);
    }), P = We((w, y) => {
      if (t.disableAutosize || y.button !== 0) return;
      const k = e.current.state.columns.lookup[w.field];
      k.resizable !== false && e.current.autosizeColumns(g({}, t.autosizeOptions, {
        disableColumnVirtualization: false,
        columns: [
          k.field
        ]
      }));
    }), H = kI(e), R = u.useRef(false), T = u.useCallback(async (w) => {
      var _a2;
      if (!((_a2 = e.current.rootElementRef) == null ? void 0 : _a2.current) || R.current) return;
      R.current = true;
      const k = gn(e.current.state), D = g({}, ow, w, {
        columns: (w == null ? void 0 : w.columns) ?? k.orderedFields
      });
      D.columns = D.columns.filter((V) => k.columnVisibilityModel[V] !== false);
      const $ = D.columns.map((V) => e.current.state.columns.lookup[V]);
      try {
        !t.disableVirtualization && D.disableColumnVirtualization && (e.current.unstable_setColumnVirtualization(false), await H());
        const V = FI(e, D, $), E = $.map((S) => g({}, S, {
          width: V[S.field],
          computedWidth: V[S.field],
          flex: 0
        }));
        if (D.expand) {
          const F = k.orderedFields.map((L) => k.lookup[L]).filter((L) => k.columnVisibilityModel[L.field] !== false).reduce((L, N) => L + (V[N.field] ?? N.computedWidth ?? N.width), 0), j = e.current.getRootDimensions().viewportInnerSize.width - F;
          if (j > 0) {
            const L = j / (E.length || 1);
            E.forEach((N) => {
              N.width += L, N.computedWidth += L;
            });
          }
        }
        e.current.updateColumns(E), E.forEach((S, F) => {
          if (S.width !== $[F].width) {
            const A = S.width;
            e.current.publishEvent("columnWidthChange", {
              element: e.current.getColumnHeaderElement(S.field),
              colDef: S,
              width: A
            });
          }
        });
      } finally {
        t.disableVirtualization || e.current.unstable_setColumnVirtualization(true), R.current = false;
      }
    }, [
      e,
      H,
      t.disableVirtualization
    ]);
    u.useEffect(() => M, [
      M
    ]), Ta(() => {
      t.autosizeOnMount && Promise.resolve().then(() => {
        e.current.autosizeColumns(t.autosizeOptions);
      });
    }), Gc(e, () => {
      var _a2;
      return (_a2 = e.current.columnHeadersContainerRef) == null ? void 0 : _a2.current;
    }, "touchstart", x, {
      passive: true
    }), Ie(e, {
      autosizeColumns: T
    }, "public"), oe(e, "columnResizeStop", O), oe(e, "columnResizeStart", v), oe(e, "columnSeparatorMouseDown", G), oe(e, "columnSeparatorDoubleClick", P), qe(e, "columnResize", t.onColumnResize), qe(e, "columnWidthChange", t.onColumnWidthChange);
  };
  function ro(e, t, n) {
    e && (e.style[t] = `${parseInt(e.style[t], 10) + n}px`);
  }
  function $I(e, t) {
    return e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? null : e.firstRowIndex >= t.firstRowIndex && e.lastRowIndex > t.lastRowIndex ? {
      firstRowIndex: t.lastRowIndex,
      lastRowIndex: e.lastRowIndex
    } : e.firstRowIndex < t.firstRowIndex && e.lastRowIndex <= t.lastRowIndex ? {
      firstRowIndex: e.firstRowIndex,
      lastRowIndex: t.firstRowIndex - 1
    } : e;
  }
  function Ia(e) {
    return e.firstRowIndex !== 0 || e.lastRowIndex !== 0;
  }
  const Fl = (e, t, n) => {
    if (!e) return null;
    let o = e[t.field];
    const r = t.rowSpanValueGetter ?? t.valueGetter;
    return r && (o = r(o, e, t, n)), o;
  }, uo = {
    spannedCells: {},
    hiddenCells: {},
    hiddenCellOriginMap: {}
  }, Yr = {
    firstRowIndex: 0,
    lastRowIndex: 0
  }, HI = /* @__PURE__ */ new Set([
    _t,
    "__reorder__",
    el
  ]), Pa = 20, Du = (e, t, n, o, r, l, s) => {
    const a = l ? {} : g({}, e.current.state.rowSpanning.spannedCells), i = l ? {} : g({}, e.current.state.rowSpanning.hiddenCells), d = l ? {} : g({}, e.current.state.rowSpanning.hiddenCellOriginMap);
    return l && (s = Yr), t.forEach((c) => {
      var _a2;
      if (!HI.has(c.field)) {
        for (let f = r.firstRowIndex; f < r.lastRowIndex; f += 1) {
          const p = n[f];
          if ((_a2 = i[p.id]) == null ? void 0 : _a2[c.field]) continue;
          const m = Fl(p.model, c, e);
          if (m == null) continue;
          let h = p.id, C = f, x = 0;
          const M = [];
          if (f === r.firstRowIndex) {
            let O = f - 1, G = n[O];
            for (; O >= o.firstRowIndex && G && Fl(G.model, c, e) === m; ) {
              const P = n[O + 1];
              i[P.id] ? i[P.id][c.field] = true : i[P.id] = {
                [c.field]: true
              }, M.push(f), x += 1, h = G.id, C = O, O -= 1, G = n[O];
            }
          }
          M.forEach((O) => {
            d[O] ? d[O][c.field] = C : d[O] = {
              [c.field]: C
            };
          });
          let v = f + 1;
          for (; v <= o.lastRowIndex && n[v] && Fl(n[v].model, c, e) === m; ) {
            const O = n[v];
            i[O.id] ? i[O.id][c.field] = true : i[O.id] = {
              [c.field]: true
            }, d[v] ? d[v][c.field] = C : d[v] = {
              [c.field]: C
            }, v += 1, x += 1;
          }
          x > 0 && (a[h] ? a[h][c.field] = x + 1 : a[h] = {
            [c.field]: x + 1
          });
        }
        s = {
          firstRowIndex: Math.min(s.firstRowIndex, r.firstRowIndex),
          lastRowIndex: Math.max(s.lastRowIndex, r.lastRowIndex)
        };
      }
    }), {
      spannedCells: a,
      hiddenCells: i,
      hiddenCellOriginMap: d,
      processedRange: s
    };
  }, $u = (e, t) => {
    const n = _o(t).length;
    if (e.pagination) {
      const o = _c(t);
      let r = Pa;
      return o > 0 && (r = o - 1), {
        firstRowIndex: 0,
        lastRowIndex: Math.min(r, n)
      };
    }
    return {
      firstRowIndex: 0,
      lastRowIndex: Math.min(Pa, n)
    };
  }, LI = (e, t, n) => {
    var _a2;
    if (!t.unstable_rowSpanning) return g({}, e, {
      rowSpanning: uo
    });
    const o = e.rows.dataRowIds || [], r = e.columns.orderedFields || [], l = e.rows.dataRowIdToModelLookup, s = e.columns.lookup, a = !!e.filter.filterModel.items.length || !!((_a2 = e.filter.filterModel.quickFilterValues) == null ? void 0 : _a2.length);
    if (!o.length || !r.length || !l || !s || a) return g({}, e, {
      rowSpanning: uo
    });
    const i = $u(t, n), d = o.map((h) => ({
      id: h,
      model: l[h]
    })), c = r.map((h) => s[h]), { spannedCells: f, hiddenCells: p, hiddenCellOriginMap: m } = Du(n, c, d, i, i, true, Yr);
    return g({}, e, {
      rowSpanning: {
        spannedCells: f,
        hiddenCells: p,
        hiddenCellOriginMap: m
      }
    });
  }, RI = (e, t) => {
    const n = bn(() => e.current.state.rowSpanning !== uo ? $u(t, e) : Yr), o = u.useCallback((l, s = false) => {
      const { range: a, rows: i } = Ln(e, {
        pagination: t.pagination,
        paginationMode: t.paginationMode
      });
      if (a === null || !Ia(l)) return;
      s && (n.current = Yr);
      const d = $I({
        firstRowIndex: l.firstRowIndex,
        lastRowIndex: Math.min(l.lastRowIndex, a.lastRowIndex + 1)
      }, n.current);
      if (d === null) return;
      const c = ot(e), { spannedCells: f, hiddenCells: p, hiddenCellOriginMap: m, processedRange: h } = Du(e, c, i, a, d, s, n.current);
      n.current = h;
      const C = Object.keys(f).length, x = Object.keys(p).length, M = Object.keys(e.current.state.rowSpanning.spannedCells).length, v = Object.keys(e.current.state.rowSpanning.hiddenCells).length;
      !(s || C !== M || x !== v) || C === 0 && M === 0 || e.current.setState((P) => g({}, P, {
        rowSpanning: {
          spannedCells: f,
          hiddenCells: p,
          hiddenCellOriginMap: m
        }
      }));
    }, [
      e,
      n,
      t.pagination,
      t.paginationMode
    ]), r = u.useCallback(() => {
      const l = br(e);
      Ia(l) && o(l, true);
    }, [
      e,
      o
    ]);
    oe(e, "renderedRowsIntervalChange", Nn(t.unstable_rowSpanning, o)), oe(e, "sortedRowsSet", Nn(t.unstable_rowSpanning, r)), oe(e, "paginationModelChange", Nn(t.unstable_rowSpanning, r)), oe(e, "filteredRowsSet", Nn(t.unstable_rowSpanning, r)), oe(e, "columnsChange", Nn(t.unstable_rowSpanning, r)), u.useEffect(() => {
      t.unstable_rowSpanning ? e.current.state.rowSpanning === uo && r() : e.current.state.rowSpanning !== uo && e.current.setState((l) => g({}, l, {
        rowSpanning: uo
      }));
    }, [
      e,
      r,
      t.unstable_rowSpanning
    ]);
  }, AI = (e, t, n) => g({}, e, {
    listViewColumn: t.unstable_listColumn ? g({}, t.unstable_listColumn, {
      computedWidth: Jl(n)
    }) : void 0
  });
  function GI(e, t) {
    const n = () => {
      e.current.setState((l) => l.listViewColumn ? g({}, l, {
        listViewColumn: g({}, l.listViewColumn, {
          computedWidth: Jl(e)
        })
      }) : l);
    }, o = u.useRef(null);
    oe(e, "viewportInnerSizeChange", (l) => {
      o.current !== l.width && (o.current = l.width, n());
    }), oe(e, "columnVisibilityModelChange", n), mt(() => {
      const l = t.unstable_listColumn;
      l && e.current.setState((s) => g({}, s, {
        listViewColumn: g({}, l, {
          computedWidth: Jl(e)
        })
      }));
    }, [
      e,
      t.unstable_listColumn
    ]), u.useEffect(() => {
      t.unstable_listView && t.unstable_listColumn;
    }, [
      t.unstable_listView,
      t.unstable_listColumn
    ]);
  }
  function Jl(e) {
    return dt(e.current.state).viewportInnerSize.width;
  }
  const zI = (e, t) => {
    const n = iS(e, t);
    return rI(n, t), ZS(n), ct(lS, n, t), ct(tI, n, t), ct(hS, n, t), ct(qS, n, t), ct(RS, n, t), ct(US, n, t), ct(FS, n, t), ct(lI, n, t), ct(GS, n, t), ct(PS, n, t), ct(LI, n, t), ct(bS, n, t), ct(TI, n, t), ct(pS, n, t), ct(xI, n, t), ct(hC, n, t), ct(dI, n, t), ct(hI, n, t), ct(AI, n, t), $S(n, t), nI(n, t), mS(n, t), YS(n, t), RI(n, t), eI(n, t), CI(n), yI(n, t), KS(n, t), TS(n, t), zS(n, t), ES(n, t), sI(n, t), CS(n, t), DI(n, t), AS(n, t), mI(n, t), iI(n, t), gS(n), vS(n, t), IS(n, t), fS(n, t), fI(n, t), aI(n, t), bI(n), mC(n, t), GI(n, t), n;
  }, jI = (e) => {
    const { classes: t, headerAlign: n, isDragging: o, isLastColumn: r, showLeftBorder: l, showRightBorder: s, groupId: a, pinnedPosition: i } = e, d = {
      root: [
        "columnHeader",
        n === "left" && "columnHeader--alignLeft",
        n === "center" && "columnHeader--alignCenter",
        n === "right" && "columnHeader--alignRight",
        o && "columnHeader--moving",
        s && "columnHeader--withRightBorder",
        l && "columnHeader--withLeftBorder",
        "withBorderColor",
        a === null ? "columnHeader--emptyGroup" : "columnHeader--filledGroup",
        i === Ee.LEFT && "columnHeader--pinnedLeft",
        i === Ee.RIGHT && "columnHeader--pinnedRight",
        r && "columnHeader--last"
      ],
      draggableContainer: [
        "columnHeaderDraggableContainer"
      ],
      titleContainer: [
        "columnHeaderTitleContainer",
        "withBorderColor"
      ],
      titleContainerContent: [
        "columnHeaderTitleContainerContent"
      ]
    };
    return we(d, Oe, t);
  };
  function VI(e) {
    var _a2;
    const { groupId: t, width: n, depth: o, maxDepth: r, fields: l, height: s, colIndex: a, hasFocus: i, tabIndex: d, isLastColumn: c, pinnedPosition: f, pinnedOffset: p } = e, m = le(), h = $t(), C = u.useRef(null), x = Pe(), M = Q(x, Xc), v = t ? M[t] : {}, { headerName: O = t ?? "", description: G = "", headerAlign: P = void 0 } = v;
    let H;
    const R = t && ((_a2 = M[t]) == null ? void 0 : _a2.renderHeaderGroup), T = u.useMemo(() => ({
      groupId: t,
      headerName: O,
      description: G,
      depth: o,
      maxDepth: r,
      fields: l,
      colIndex: a,
      isLastColumn: c
    }), [
      t,
      O,
      G,
      o,
      r,
      l,
      a,
      c
    ]);
    t && R && (H = R(T));
    const w = g({}, e, {
      classes: m.classes,
      headerAlign: P,
      depth: o,
      isDragging: false
    }), y = O ?? t, k = Je(), D = t === null ? `empty-group-cell-${k}` : t, $ = jI(w);
    u.useLayoutEffect(() => {
      if (i) {
        const z = C.current.querySelector('[tabindex="0"]') || C.current;
        if (!z) return;
        if ($s()) z.focus({
          preventScroll: true
        });
        else {
          const j = x.current.getScrollPosition();
          z.focus(), x.current.scroll(j);
        }
      }
    }, [
      x,
      i
    ]);
    const V = u.useCallback((A) => (z) => {
      Cr(z) || x.current.publishEvent(A, T, z);
    }, [
      x,
      T
    ]), E = u.useMemo(() => ({
      onKeyDown: V("columnGroupHeaderKeyDown"),
      onFocus: V("columnGroupHeaderFocus"),
      onBlur: V("columnGroupHeaderBlur")
    }), [
      V
    ]), S = typeof v.headerClassName == "function" ? v.headerClassName(T) : v.headerClassName, F = u.useMemo(() => il(g({}, e.style), h, f, p), [
      f,
      p,
      e.style,
      h
    ]);
    return b.jsx(Cu, g({
      ref: C,
      classes: $,
      columnMenuOpen: false,
      colIndex: a,
      height: s,
      isResizing: false,
      sortDirection: null,
      hasFocus: false,
      tabIndex: d,
      isDraggable: false,
      headerComponent: H,
      headerClassName: S,
      description: G,
      elementId: D,
      width: n,
      columnMenuIconButton: null,
      columnTitleIconButtons: null,
      resizable: false,
      label: y,
      "aria-colspan": l.length,
      "data-fields": `|-${l.join("-|-")}-|`,
      style: F
    }, E));
  }
  const Ma = ge("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaderRow",
    overridesResolver: (e, t) => t.columnHeaderRow
  })({
    display: "flex"
  }), NI = (e) => {
    const { visibleColumns: t, sortColumnLookup: n, filterColumnLookup: o, columnHeaderTabIndexState: r, columnGroupHeaderTabIndexState: l, columnHeaderFocus: s, columnGroupHeaderFocus: a, headerGroupingMaxDepth: i, columnMenuState: d, columnVisibility: c, columnGroupsHeaderStructure: f, hasOtherElementInTabSequence: p } = e, [m, h] = u.useState(""), [C, x] = u.useState(""), M = tn(), v = le(), O = Q(M, Yc), G = Q(M, Gn), P = Q(M, gC), H = Q(M, ko), R = Q(M, Pn), T = iu(G, P, H.left.length), w = Q(M, Qr), y = Q(M, ac), k = Q(M, Ih), D = Q(M, Ph), $ = Q(M, cc), V = u.useCallback((K) => x(K.field), []), E = u.useCallback(() => x(""), []), S = u.useCallback((K) => h(K.field), []), F = u.useCallback(() => h(""), []), A = u.useMemo(() => H.left.length ? {
      firstColumnIndex: 0,
      lastColumnIndex: H.left.length
    } : null, [
      H.left.length
    ]), z = u.useMemo(() => H.right.length ? {
      firstColumnIndex: t.length - H.right.length,
      lastColumnIndex: t.length
    } : null, [
      H.right.length,
      t.length
    ]);
    oe(M, "columnResizeStart", V), oe(M, "columnResizeStop", E), oe(M, "columnHeaderDragStart", S), oe(M, "columnHeaderDragEnd", F);
    const j = (K) => {
      const { renderContext: ne = P } = K || {}, ee = ne.firstColumnIndex, te = ne.lastColumnIndex;
      return {
        renderedColumns: t.slice(ee, te),
        firstColumnToRender: ee,
        lastColumnToRender: te
      };
    }, L = (K, ne, ee, te = false) => {
      const ae = (K == null ? void 0 : K.position) === Ee.RIGHT, ve = (K == null ? void 0 : K.position) === void 0, Y = H.right.length > 0 && ae || H.right.length === 0 && ve, re = T - ee;
      return b.jsxs(u.Fragment, {
        children: [
          ve && b.jsx("div", {
            role: "presentation",
            style: {
              width: re
            }
          }),
          ne,
          ve && b.jsx("div", {
            role: "presentation",
            className: pe(I.filler, te && I["filler--borderBottom"])
          }),
          Y && b.jsx(Rs, {
            header: true,
            pinnedRight: ae,
            borderBottom: te,
            borderTop: false
          })
        ]
      });
    }, N = (K, ne = {}) => {
      const { renderedColumns: ee, firstColumnToRender: te } = j(K), ae = [];
      for (let ve = 0; ve < ee.length; ve += 1) {
        const Y = ee[ve], re = te + ve, xe = re === 0, J = r !== null && r.field === Y.field || xe && !p ? 0 : -1, ye = s !== null && s.field === Y.field, Z = d.open && d.field === Y.field, Ce = K == null ? void 0 : K.position, me = Xo(Ce, Y.computedWidth, re, G, w, $), Me = Ce === Ee.RIGHT ? ee[ve - 1] : ee[ve + 1], Ve = Me ? s !== null && s.field === Me.field : false, Ne = re + 1 === G.length - H.right.length, Ae = ve, De = ee.length, $e = Kr(Ce, Ae), _e = Ur(Ce, Ae, De, v.showColumnVerticalBorder, y);
        ae.push(b.jsx(Dv, g({}, n[Y.field], {
          columnMenuOpen: Z,
          filterItemsCounter: o[Y.field] && o[Y.field].length,
          headerHeight: k,
          isDragging: Y.field === m,
          colDef: Y,
          colIndex: re,
          isResizing: C === Y.field,
          isLast: re === G.length - 1,
          hasFocus: ye,
          tabIndex: J,
          pinnedPosition: Ce,
          pinnedOffset: me,
          isLastUnpinned: Ne,
          isSiblingFocused: Ve,
          showLeftBorder: $e,
          showRightBorder: _e
        }, ne), Y.field));
      }
      return L(K, ae, 0);
    }, W = () => b.jsxs(Ma, {
      role: "row",
      "aria-rowindex": i + 1,
      ownerState: v,
      className: I["row--borderBottom"],
      children: [
        A && N({
          position: Ee.LEFT,
          renderContext: A
        }, {
          disableReorder: true
        }),
        N({
          renderContext: P
        }),
        z && N({
          position: Ee.RIGHT,
          renderContext: z
        }, {
          disableReorder: true,
          separatorSide: Ls.Left
        })
      ]
    }), B = ({ depth: K, params: ne }) => {
      var _a2, _b2;
      const ee = j(ne);
      if (ee.renderedColumns.length === 0) return null;
      const { firstColumnToRender: te, lastColumnToRender: ae } = ee, ve = f[K], Y = t[te].field, re = ((_a2 = O[Y]) == null ? void 0 : _a2[K]) ?? null, xe = ve.findIndex(({ groupId: De, columnFields: $e }) => De === re && $e.includes(Y)), J = t[ae - 1].field, ye = ((_b2 = O[J]) == null ? void 0 : _b2[K]) ?? null, Z = ve.findIndex(({ groupId: De, columnFields: $e }) => De === ye && $e.includes(J)), Ce = ve.slice(xe, Z + 1).map((De) => g({}, De, {
        columnFields: De.columnFields.filter(($e) => c[$e] !== false)
      })).filter((De) => De.columnFields.length > 0), me = Ce[0].columnFields.indexOf(Y), Ve = Ce[0].columnFields.slice(0, me).reduce((De, $e) => {
        const _e = R[$e];
        return De + (_e.computedWidth ?? 0);
      }, 0);
      let Ne = te;
      const Ae = Ce.map(({ groupId: De, columnFields: $e }, _e) => {
        const Ge = a !== null && a.depth === K && $e.includes(a.field), ue = l !== null && l.depth === K && $e.includes(l.field) ? 0 : -1, be = {
          width: $e.reduce((Te, tt) => Te + R[tt].computedWidth, 0),
          fields: $e,
          colIndex: Ne
        }, ce = ne.position, fe = Xo(ce, be.width, Ne, G, w, $);
        Ne += $e.length;
        let He = _e;
        return ce === Ee.LEFT && (He = Ne - 1), b.jsx(VI, {
          groupId: De,
          width: be.width,
          fields: be.fields,
          colIndex: be.colIndex,
          depth: K,
          isLastColumn: _e === Ce.length - 1,
          maxDepth: i,
          height: D,
          hasFocus: Ge,
          tabIndex: ue,
          pinnedPosition: ce,
          pinnedOffset: fe,
          showLeftBorder: Kr(ce, He),
          showRightBorder: Ur(ce, He, Ce.length, v.showColumnVerticalBorder, y)
        }, _e);
      });
      return L(ne, Ae, Ve);
    };
    return {
      renderContext: P,
      leftRenderContext: A,
      rightRenderContext: z,
      pinnedColumns: H,
      visibleColumns: t,
      columnPositions: G,
      getFillers: L,
      getColumnHeadersRow: W,
      getColumnsToRender: j,
      getColumnGroupHeadersRows: () => {
        if (i === 0) return null;
        const K = [];
        for (let ne = 0; ne < i; ne += 1) K.push(b.jsxs(Ma, {
          role: "row",
          "aria-rowindex": ne + 1,
          ownerState: v,
          children: [
            A && B({
              depth: ne,
              params: {
                position: Ee.LEFT,
                renderContext: A,
                maxLastColumn: A.lastColumnIndex
              }
            }),
            B({
              depth: ne,
              params: {
                renderContext: P
              }
            }),
            z && B({
              depth: ne,
              params: {
                position: Ee.RIGHT,
                renderContext: z,
                maxLastColumn: z.lastColumnIndex
              }
            })
          ]
        }, ne));
        return K;
      },
      getPinnedCellOffset: Xo,
      isDragging: !!m,
      getInnerProps: () => ({
        role: "rowgroup"
      })
    };
  }, _I = [
    "className"
  ], BI = (e) => {
    const { classes: t } = e;
    return we({
      root: [
        "columnHeaders"
      ]
    }, Oe, t);
  }, WI = Ye("div", {
    name: "MuiDataGrid",
    slot: "ColumnHeaders",
    overridesResolver: (e, t) => t.columnHeaders
  })({
    display: "flex",
    flexDirection: "column",
    borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
    borderTopRightRadius: "var(--unstable_DataGrid-radius)"
  }), UI = je(function(t, n) {
    const { className: o } = t, r = de(t, _I), l = le(), s = BI(l);
    return b.jsx(WI, g({
      className: pe(s.root, o),
      ownerState: l
    }, r, {
      role: "presentation",
      ref: n
    }));
  }), KI = [
    "className",
    "visibleColumns",
    "sortColumnLookup",
    "filterColumnLookup",
    "columnHeaderTabIndexState",
    "columnGroupHeaderTabIndexState",
    "columnHeaderFocus",
    "columnGroupHeaderFocus",
    "headerGroupingMaxDepth",
    "columnMenuState",
    "columnVisibility",
    "columnGroupsHeaderStructure",
    "hasOtherElementInTabSequence"
  ], qI = je(function(t, n) {
    const { visibleColumns: o, sortColumnLookup: r, filterColumnLookup: l, columnHeaderTabIndexState: s, columnGroupHeaderTabIndexState: a, columnHeaderFocus: i, columnGroupHeaderFocus: d, headerGroupingMaxDepth: c, columnMenuState: f, columnVisibility: p, columnGroupsHeaderStructure: m, hasOtherElementInTabSequence: h } = t, C = de(t, KI), { getInnerProps: x, getColumnHeadersRow: M, getColumnGroupHeadersRows: v } = NI({
      visibleColumns: o,
      sortColumnLookup: r,
      filterColumnLookup: l,
      columnHeaderTabIndexState: s,
      columnGroupHeaderTabIndexState: a,
      columnHeaderFocus: i,
      columnGroupHeaderFocus: d,
      headerGroupingMaxDepth: c,
      columnMenuState: f,
      columnVisibility: p,
      columnGroupsHeaderStructure: m,
      hasOtherElementInTabSequence: h
    });
    return b.jsxs(UI, g({}, C, x(), {
      ref: n,
      children: [
        v(),
        M()
      ]
    }));
  }), YI = In(qI);
  function XI(e) {
    return null;
  }
  function QI(e) {
    return null;
  }
  const JI = je(function(t, n) {
    const r = Pe().current.getLocaleText("noResultsOverlayLabel");
    return b.jsx(Hs, g({}, t, {
      ref: n,
      children: r
    }));
  }), ZI = [
    "sortingOrder"
  ], eP = u.memo(function(t) {
    const { sortingOrder: n } = t, o = de(t, ZI), r = le(), [l] = n, s = l === "asc" ? r.slots.columnSortedAscendingIcon : r.slots.columnSortedDescendingIcon;
    return s ? b.jsx(s, g({}, o)) : null;
  }), tP = [
    "native"
  ];
  function nP(e) {
    let { native: t } = e, n = de(e, tP);
    return t ? b.jsx("option", g({}, n)) : b.jsx(At, g({}, n));
  }
  const oP = {
    booleanCellTrueIcon: tx,
    booleanCellFalseIcon: Il,
    columnMenuIcon: Qv,
    openFilterButtonIcon: Bv,
    filterPanelDeleteIcon: Il,
    columnFilteredIcon: na,
    columnSelectorIcon: Uv,
    columnUnsortedIcon: eP,
    columnSortedAscendingIcon: Ji,
    columnSortedDescendingIcon: Zi,
    columnResizeIcon: Kv,
    densityCompactIcon: qv,
    densityStandardIcon: Yv,
    densityComfortableIcon: Xv,
    exportIcon: ex,
    moreActionsIcon: nx,
    treeDataCollapseIcon: ta,
    treeDataExpandIcon: ea,
    groupingCriteriaCollapseIcon: ta,
    groupingCriteriaExpandIcon: ea,
    detailPanelExpandIcon: oa,
    detailPanelCollapseIcon: Jv,
    rowReorderIcon: ra,
    quickFilterIcon: Wv,
    quickFilterClearIcon: Il,
    columnMenuHideIcon: ox,
    columnMenuSortAscendingIcon: Ji,
    columnMenuSortDescendingIcon: Zi,
    columnMenuFilterIcon: na,
    columnMenuManageColumnsIcon: rx,
    columnMenuClearIcon: lx,
    loadIcon: Zv,
    filterPanelAddIcon: oa,
    filterPanelRemoveAllIcon: sx,
    columnReorderIcon: ra
  }, rP = g({}, oP, {
    baseBadge: pp,
    baseCheckbox: pd,
    baseDivider: td,
    baseTextField: Ko,
    baseFormControl: ed,
    baseSelect: ns,
    baseButton: Oa,
    baseIconButton: Dn,
    baseInputAdornment: Ka,
    baseTooltip: jl,
    basePopper: Yn,
    baseInputLabel: Zu,
    baseSelectOption: nP,
    baseChip: fs
  }), lP = g({}, rP, {
    cell: Sw,
    skeletonCell: Tw,
    columnHeaderFilterIconButton: Nv,
    columnHeaderSortIcon: jv,
    columnMenu: Sx,
    columnHeaders: YI,
    detailPanels: XI,
    footer: wy,
    footerRowCount: Hy,
    toolbar: null,
    pinnedRows: QI,
    loadingOverlay: Py,
    noResultsOverlay: JI,
    noRowsOverlay: My,
    pagination: Ty,
    filterPanel: Zx,
    columnsPanel: Ex,
    columnsManagement: oy,
    panel: $x,
    row: jy
  }), sP = {
    disableMultipleColumnsFiltering: true,
    disableMultipleColumnsSorting: true,
    throttleRowsMs: void 0,
    hideFooterRowCount: false,
    pagination: true,
    checkboxSelectionVisibleOnly: false,
    disableColumnReorder: true,
    keepColumnPositionIfDraggedOutside: false,
    signature: "DataGrid",
    unstable_listView: false
  }, iP = lP, aP = (e) => {
    const t = Ea(), n = mw(u.useMemo(() => fd({
      props: e,
      theme: t,
      name: "MuiDataGrid"
    }), [
      t,
      e
    ])), o = u.useMemo(() => g({}, kh, n.localeText), [
      n.localeText
    ]), r = u.useMemo(() => gw({
      defaultSlots: iP,
      slots: n.slots
    }), [
      n.slots
    ]), l = u.useMemo(() => Object.keys(Yl).reduce((s, a) => (s[a] = n[a] ?? Yl[a], s), {}), [
      n
    ]);
    return u.useMemo(() => g({}, n, l, {
      localeText: o,
      slots: r
    }, sP), [
      n,
      o,
      r,
      l
    ]);
  }, cP = {
    hooks: {
      useGridAriaAttributes: Vy,
      useGridRowAriaAttributes: Ny,
      useCellAggregationResult: () => null
    }
  }, Hu = je(function(t, n) {
    var _a2;
    const o = aP(t), r = zI(o.apiRef, o);
    return b.jsx(_y, {
      privateApiRef: r,
      configuration: cP,
      props: o,
      children: b.jsx(qw, g({
        className: o.className,
        style: o.style,
        sx: o.sx
      }, o.forwardedProps, (_a2 = o.slotProps) == null ? void 0 : _a2.root, {
        ref: n
      }))
    });
  }), uP = u.memo(Hu);
  Hu.propTypes = {
    apiRef: _.shape({
      current: _.object.isRequired
    }),
    "aria-label": _.string,
    "aria-labelledby": _.string,
    autoHeight: _.bool,
    autoPageSize: _.bool,
    autosizeOnMount: _.bool,
    autosizeOptions: _.shape({
      columns: _.arrayOf(_.string),
      disableColumnVirtualization: _.bool,
      expand: _.bool,
      includeHeaders: _.bool,
      includeOutliers: _.bool,
      outliersFactor: _.number
    }),
    cellModesModel: _.object,
    checkboxSelection: _.bool,
    classes: _.object,
    clipboardCopyCellDelimiter: _.string,
    columnBufferPx: _.number,
    columnGroupHeaderHeight: _.number,
    columnGroupingModel: _.arrayOf(_.object),
    columnHeaderHeight: _.number,
    columns: _.arrayOf(_.object).isRequired,
    columnVisibilityModel: _.object,
    density: _.oneOf([
      "comfortable",
      "compact",
      "standard"
    ]),
    disableAutosize: _.bool,
    disableColumnFilter: _.bool,
    disableColumnMenu: _.bool,
    disableColumnResize: _.bool,
    disableColumnSelector: _.bool,
    disableColumnSorting: _.bool,
    disableDensitySelector: _.bool,
    disableEval: _.bool,
    disableMultipleRowSelection: _.bool,
    disableRowSelectionOnClick: _.bool,
    disableVirtualization: _.bool,
    editMode: _.oneOf([
      "cell",
      "row"
    ]),
    estimatedRowCount: _.number,
    experimentalFeatures: _.shape({
      warnIfFocusStateIsNotSynced: _.bool
    }),
    filterDebounceMs: _.number,
    filterMode: _.oneOf([
      "client",
      "server"
    ]),
    filterModel: _.shape({
      items: _.arrayOf(_.shape({
        field: _.string.isRequired,
        id: _.oneOfType([
          _.number,
          _.string
        ]),
        operator: _.string.isRequired,
        value: _.any
      })).isRequired,
      logicOperator: _.oneOf([
        "and",
        "or"
      ]),
      quickFilterExcludeHiddenColumns: _.bool,
      quickFilterLogicOperator: _.oneOf([
        "and",
        "or"
      ]),
      quickFilterValues: _.array
    }),
    forwardedProps: _.object,
    getCellClassName: _.func,
    getDetailPanelContent: _.func,
    getEstimatedRowHeight: _.func,
    getRowClassName: _.func,
    getRowHeight: _.func,
    getRowId: _.func,
    getRowSpacing: _.func,
    hideFooter: _.bool,
    hideFooterPagination: _.bool,
    hideFooterSelectedRowCount: _.bool,
    ignoreDiacritics: _.bool,
    ignoreValueFormatterDuringExport: _.oneOfType([
      _.shape({
        clipboardExport: _.bool,
        csvExport: _.bool
      }),
      _.bool
    ]),
    indeterminateCheckboxAction: _.oneOf([
      "deselect",
      "select"
    ]),
    initialState: _.object,
    isCellEditable: _.func,
    isRowSelectable: _.func,
    keepNonExistentRowsSelected: _.bool,
    loading: _.bool,
    localeText: _.object,
    logger: _.shape({
      debug: _.func.isRequired,
      error: _.func.isRequired,
      info: _.func.isRequired,
      warn: _.func.isRequired
    }),
    logLevel: _.oneOf([
      "debug",
      "error",
      "info",
      "warn",
      false
    ]),
    nonce: _.string,
    onCellClick: _.func,
    onCellDoubleClick: _.func,
    onCellEditStart: _.func,
    onCellEditStop: _.func,
    onCellKeyDown: _.func,
    onCellModesModelChange: _.func,
    onClipboardCopy: _.func,
    onColumnHeaderClick: _.func,
    onColumnHeaderContextMenu: _.func,
    onColumnHeaderDoubleClick: _.func,
    onColumnHeaderEnter: _.func,
    onColumnHeaderLeave: _.func,
    onColumnHeaderOut: _.func,
    onColumnHeaderOver: _.func,
    onColumnOrderChange: _.func,
    onColumnResize: _.func,
    onColumnVisibilityModelChange: _.func,
    onColumnWidthChange: _.func,
    onDensityChange: _.func,
    onFilterModelChange: _.func,
    onMenuClose: _.func,
    onMenuOpen: _.func,
    onPaginationMetaChange: _.func,
    onPaginationModelChange: _.func,
    onPreferencePanelClose: _.func,
    onPreferencePanelOpen: _.func,
    onProcessRowUpdateError: _.func,
    onResize: _.func,
    onRowClick: _.func,
    onRowCountChange: _.func,
    onRowDoubleClick: _.func,
    onRowEditStart: _.func,
    onRowEditStop: _.func,
    onRowModesModelChange: _.func,
    onRowSelectionModelChange: _.func,
    onSortModelChange: _.func,
    onStateChange: _.func,
    pageSizeOptions: _.arrayOf(_.oneOfType([
      _.number,
      _.shape({
        label: _.string.isRequired,
        value: _.number.isRequired
      })
    ]).isRequired),
    pagination: _.oneOf([
      true
    ]),
    paginationMeta: _.shape({
      hasNextPage: _.bool
    }),
    paginationMode: _.oneOf([
      "client",
      "server"
    ]),
    paginationModel: _.shape({
      page: _.number.isRequired,
      pageSize: _.number.isRequired
    }),
    processRowUpdate: _.func,
    resetPageOnSortFilter: _.bool,
    resizeThrottleMs: _.number,
    rowBufferPx: _.number,
    rowCount: _.number,
    rowHeight: _.number,
    rowModesModel: _.object,
    rowPositionsDebounceMs: _.number,
    rows: _.arrayOf(_.object),
    rowSelection: _.bool,
    rowSelectionModel: _.oneOfType([
      _.arrayOf(_.oneOfType([
        _.number,
        _.string
      ]).isRequired),
      _.number,
      _.string
    ]),
    rowSpacingType: _.oneOf([
      "border",
      "margin"
    ]),
    scrollbarSize: _.number,
    showCellVerticalBorder: _.bool,
    showColumnVerticalBorder: _.bool,
    slotProps: _.object,
    slots: _.object,
    sortingMode: _.oneOf([
      "client",
      "server"
    ]),
    sortingOrder: _.arrayOf(_.oneOf([
      "asc",
      "desc"
    ])),
    sortModel: _.arrayOf(_.shape({
      field: _.string.isRequired,
      sort: _.oneOf([
        "asc",
        "desc"
      ])
    })),
    sx: _.oneOfType([
      _.arrayOf(_.oneOfType([
        _.func,
        _.object,
        _.bool
      ])),
      _.func,
      _.object
    ]),
    unstable_rowSpanning: _.bool,
    virtualizeColumnsWithAutoRowHeight: _.bool
  };
  function dP(e) {
    if (!e) return [];
    try {
      const t = JSON.parse(e);
      return Array.isArray(t) ? t : [];
    } catch {
      return [];
    }
  }
  function fP(e) {
    if (!e) return [
      10,
      25,
      50,
      100
    ];
    const t = e.split(",").map((n) => parseInt(n.trim(), 10)).filter((n) => !isNaN(n) && n > 0);
    return t.length > 0 ? t : [
      10,
      25,
      50,
      100
    ];
  }
  const pP = () => {
    const e = u.useContext(nd), { widget: { data: { oidObject: t } }, widget: n } = e, { data: o } = od("oid"), r = ud("oid"), l = t == null ? void 0 : t.type, s = l === "string" || l === "mixed", a = u.useMemo(() => {
      if (r == null) return [];
      let x;
      if (typeof r == "string") try {
        x = JSON.parse(r);
      } catch {
        return [];
      }
      else x = r;
      return Array.isArray(x) ? x : typeof x == "object" && x !== null ? [
        x
      ] : [];
    }, [
      r
    ]), i = u.useMemo(() => ({
      maxDepth: n.data.tableMaxDepth || 10
    }), [
      n.data.tableMaxDepth
    ]), { columns: d, rows: c } = Bg(a, i), f = u.useMemo(() => dP(n.data.columnConfig), [
      n.data.columnConfig
    ]), p = u.useMemo(() => f.length > 0 ? f.filter((x) => x.visible).map((x) => ({
      field: x.path,
      headerName: x.headerName || x.path,
      flex: x.width ? 0 : 1,
      width: x.width,
      headerAlign: x.align || "left",
      align: x.align || "left",
      sortable: n.data.tableSorting !== false,
      filterable: n.data.tableFiltering === true
    })) : d.map((x) => ({
      field: x.path,
      headerName: x.path.split(".").pop() || x.path,
      flex: 1,
      sortable: n.data.tableSorting !== false,
      filterable: n.data.tableFiltering === true
    })), [
      f,
      d,
      n.data.tableSorting,
      n.data.tableFiltering
    ]), m = u.useMemo(() => c.map((x, M) => ({
      id: M,
      ...x
    })), [
      c
    ]), h = u.useMemo(() => fP(n.data.tablePageSizeOptions), [
      n.data.tablePageSizeOptions
    ]), C = u.useMemo(() => {
      const x = {
        border: 0,
        width: "100%",
        height: "100%"
      };
      return (n.data.tableHeaderBgColor || n.data.tableHeaderTextColor || n.data.tableHeaderFontSize) && (x["& .MuiDataGrid-columnHeaders"] = {
        ...n.data.tableHeaderBgColor && {
          backgroundColor: n.data.tableHeaderBgColor
        },
        ...n.data.tableHeaderTextColor && {
          color: n.data.tableHeaderTextColor
        },
        ...n.data.tableHeaderFontSize && {
          fontSize: `${n.data.tableHeaderFontSize}px`
        }
      }), n.data.tableCellFontSize && (x["& .MuiDataGrid-cell"] = {
        fontSize: `${n.data.tableCellFontSize}px`
      }), n.data.tableStripedColor && (x["& .MuiDataGrid-row:nth-of-type(even)"] = {
        backgroundColor: n.data.tableStripedColor
      }), n.data.tableShowCellBorders && (x["& .MuiDataGrid-cell"] = {
        ...x["& .MuiDataGrid-cell"],
        borderRight: "1px solid",
        borderColor: "divider"
      }), x;
    }, [
      n.data.tableHeaderBgColor,
      n.data.tableHeaderTextColor,
      n.data.tableHeaderFontSize,
      n.data.tableCellFontSize,
      n.data.tableStripedColor,
      n.data.tableShowCellBorders
    ]);
    return b.jsxs(rd, {
      isValidType: s,
      data: o,
      oidValue: r,
      children: [
        b.jsx(ld, {
          data: o,
          widget: n
        }),
        s && p.length > 0 ? b.jsx(Vn, {
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column"
          },
          children: b.jsx(uP, {
            rows: m,
            columns: p,
            density: n.data.tableDensity || "standard",
            rowHeight: n.data.tableRowHeight || void 0,
            columnHeaderHeight: n.data.tableHeaderHeight || void 0,
            pageSizeOptions: h,
            initialState: {
              pagination: {
                paginationModel: {
                  pageSize: n.data.tablePageSize || 25
                }
              }
            },
            pagination: n.data.tablePagination !== false || void 0,
            disableColumnSorting: n.data.tableSorting === false,
            disableColumnFilter: n.data.tableFiltering !== true,
            disableColumnMenu: n.data.tableColumnMenu === false,
            hideFooter: n.data.tableHideFooter === true,
            checkboxSelection: n.data.tableRowSelection === true,
            disableRowSelectionOnClick: true,
            showCellVerticalBorder: n.data.tableShowCellBorders === true,
            showColumnVerticalBorder: n.data.tableShowCellBorders === true,
            autosizeOnMount: n.data.tableAutoSize === true,
            sx: C
          })
        }) : b.jsx(Vn, {
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            p: 2
          },
          children: b.jsx(Uo, {
            variant: "body2",
            color: "text.secondary",
            children: s ? vt.t("json_table_no_data") : vt.t("json_table_invalid_type")
          })
        })
      ]
    });
  };
  Lu = class extends vt {
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
              ...Ks()
            ]
          },
          {
            name: "jsonTable",
            label: "group_json_table",
            fields: [
              ...sd([
                "string"
              ]),
              ...Kg()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...Ks({
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
      return Lu.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, n) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, id(this.wrapContent(b.jsx(pP, {})), n);
    }
  };
});
export {
  __tla,
  Lu as default
};
