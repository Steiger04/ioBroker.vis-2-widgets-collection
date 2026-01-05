import { l as we, V as Ge, W as Bt, k as Ne, X as Nt, j as m, a as Y, g as se, s as O, u as fe, Y as Tt, d as re, p as nt, m as q, i as ae, e as Z, Z as St, c as Et, _ as Xe, r as J, O as Ye, $ as jt, a0 as xt, a1 as At, a2 as zt, b as qe, a3 as Wt, a4 as Dt, n as Ut, o as G, a5 as rt, a6 as at, h as Ht, a7 as Vt, a8 as Kt, a9 as _t, C as st, aa as Gt, q as qt, x as Xt, y as Yt, v as it, A as Zt, E as Jt, w as lt, z as Qt, T as eo, G as to, H as dt, J as oo, K as no, L as ro, __tla as __tla_0 } from "./commonFields-B5KdVoLe.js";
import { v as l, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as ao, __tla as __tla_2 } from "./SafeImg-Cv2sRx0w.js";
import { a as so, L as ct, l as ut, __tla as __tla_3 } from "./listItemTextClasses-BRGApzsD.js";
import { f as Ze } from "./formControlState-Dq1zat_P.js";
import { u as Je, F as io, __tla as __tla_4 } from "./useFormControl--TM4wVzV.js";
import { S as lo, __tla as __tla_5 } from "./Stack-BRlt7qXT.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let Lt;
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
  })()
]).then(async () => {
  function Ee(e) {
    return parseInt(e, 10) || 0;
  }
  const co = {
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
  function uo(e) {
    for (const t in e) return false;
    return true;
  }
  function pt(e) {
    return uo(e) || e.outerHeightStyle === 0 && !e.overflowing;
  }
  const po = l.forwardRef(function(t, n) {
    const { onChange: o, maxRows: i, minRows: u = 1, style: a, value: p, ...h } = t, { current: d } = l.useRef(p != null), v = l.useRef(null), S = we(n, v), I = l.useRef(null), x = l.useRef(null), R = l.useCallback(() => {
      const r = v.current, s = x.current;
      if (!r || !s) return;
      const w = Ge(r).getComputedStyle(r);
      if (w.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      s.style.width = w.width, s.value = r.value || t.placeholder || "x", s.value.slice(-1) === `
` && (s.value += " ");
      const j = w.boxSizing, $ = Ee(w.paddingBottom) + Ee(w.paddingTop), z = Ee(w.borderBottomWidth) + Ee(w.borderTopWidth), B = s.scrollHeight;
      s.value = "x";
      const N = s.scrollHeight;
      let F = B;
      u && (F = Math.max(Number(u) * N, F)), i && (F = Math.min(Number(i) * N, F)), F = Math.max(F, N);
      const E = F + (j === "border-box" ? $ + z : 0), W = Math.abs(F - B) <= 1;
      return {
        outerHeightStyle: E,
        overflowing: W
      };
    }, [
      i,
      u,
      t.placeholder
    ]), M = Bt(() => {
      const r = v.current, s = R();
      if (!r || !s || pt(s)) return false;
      const b = s.outerHeightStyle;
      return I.current != null && I.current !== b;
    }), c = l.useCallback(() => {
      const r = v.current, s = R();
      if (!r || !s || pt(s)) return;
      const b = s.outerHeightStyle;
      I.current !== b && (I.current = b, r.style.height = `${b}px`), r.style.overflow = s.overflowing ? "hidden" : "";
    }, [
      R
    ]), g = l.useRef(-1);
    Ne(() => {
      const r = Nt(c), s = v == null ? void 0 : v.current;
      if (!s) return;
      const b = Ge(s);
      b.addEventListener("resize", r);
      let w;
      return typeof ResizeObserver < "u" && (w = new ResizeObserver(() => {
        M() && (w.unobserve(s), cancelAnimationFrame(g.current), c(), g.current = requestAnimationFrame(() => {
          w.observe(s);
        }));
      }), w.observe(s)), () => {
        r.clear(), cancelAnimationFrame(g.current), b.removeEventListener("resize", r), w && w.disconnect();
      };
    }, [
      R,
      c,
      M
    ]), Ne(() => {
      c();
    });
    const y = (r) => {
      d || c(), o && o(r);
    };
    return m.jsxs(l.Fragment, {
      children: [
        m.jsx("textarea", {
          value: p,
          onChange: y,
          ref: S,
          rows: u,
          style: a,
          ...h
        }),
        m.jsx("textarea", {
          "aria-hidden": true,
          className: t.className,
          readOnly: true,
          ref: x,
          tabIndex: -1,
          style: {
            ...co.shadow,
            ...a,
            paddingTop: 0,
            paddingBottom: 0
          }
        })
      ]
    });
  });
  function ft(e) {
    return e != null && !(Array.isArray(e) && e.length === 0);
  }
  function wt(e, t = false) {
    return e && (ft(e.value) && e.value !== "" || t && ft(e.defaultValue) && e.defaultValue !== "");
  }
  function fo(e) {
    return se("MuiInputBase", e);
  }
  const xe = Y("MuiInputBase", [
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
  var mt;
  const je = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${ae(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel
    ];
  }, Ae = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel
    ];
  }, mo = (e) => {
    const { classes: t, color: n, disabled: o, error: i, endAdornment: u, focused: a, formControl: p, fullWidth: h, hiddenLabel: d, multiline: v, readOnly: S, size: I, startAdornment: x, type: R } = e, M = {
      root: [
        "root",
        `color${ae(n)}`,
        o && "disabled",
        i && "error",
        h && "fullWidth",
        a && "focused",
        p && "formControl",
        I && I !== "medium" && `size${ae(I)}`,
        v && "multiline",
        x && "adornedStart",
        u && "adornedEnd",
        d && "hiddenLabel",
        S && "readOnly"
      ],
      input: [
        "input",
        o && "disabled",
        R === "search" && "inputTypeSearch",
        v && "inputMultiline",
        I === "small" && "inputSizeSmall",
        d && "inputHiddenLabel",
        x && "inputAdornedStart",
        u && "inputAdornedEnd",
        S && "readOnly"
      ]
    };
    return Z(M, fo, t);
  }, ze = O("div", {
    name: "MuiInputBase",
    slot: "Root",
    overridesResolver: je
  })(q(({ theme: e }) => ({
    ...e.typography.body1,
    color: (e.vars || e).palette.text.primary,
    lineHeight: "1.4375em",
    boxSizing: "border-box",
    position: "relative",
    cursor: "text",
    display: "inline-flex",
    alignItems: "center",
    [`&.${xe.disabled}`]: {
      color: (e.vars || e).palette.text.disabled,
      cursor: "default"
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.multiline,
        style: {
          padding: "4px 0 5px"
        }
      },
      {
        props: ({ ownerState: t, size: n }) => t.multiline && n === "small",
        style: {
          paddingTop: 1
        }
      },
      {
        props: ({ ownerState: t }) => t.fullWidth,
        style: {
          width: "100%"
        }
      }
    ]
  }))), We = O("input", {
    name: "MuiInputBase",
    slot: "Input",
    overridesResolver: Ae
  })(q(({ theme: e }) => {
    const t = e.palette.mode === "light", n = {
      color: "currentColor",
      ...e.vars ? {
        opacity: e.vars.opacity.inputPlaceholder
      } : {
        opacity: t ? 0.42 : 0.5
      },
      transition: e.transitions.create("opacity", {
        duration: e.transitions.duration.shorter
      })
    }, o = {
      opacity: "0 !important"
    }, i = e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
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
      "&::-webkit-input-placeholder": n,
      "&::-moz-placeholder": n,
      "&::-ms-input-placeholder": n,
      "&:focus": {
        outline: 0
      },
      "&:invalid": {
        boxShadow: "none"
      },
      "&::-webkit-search-decoration": {
        WebkitAppearance: "none"
      },
      [`label[data-shrink=false] + .${xe.formControl} &`]: {
        "&::-webkit-input-placeholder": o,
        "&::-moz-placeholder": o,
        "&::-ms-input-placeholder": o,
        "&:focus::-webkit-input-placeholder": i,
        "&:focus::-moz-placeholder": i,
        "&:focus::-ms-input-placeholder": i
      },
      [`&.${xe.disabled}`]: {
        opacity: 1,
        WebkitTextFillColor: (e.vars || e).palette.text.disabled
      },
      variants: [
        {
          props: ({ ownerState: u }) => !u.disableInjectingGlobalStyles,
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
          props: ({ ownerState: u }) => u.multiline,
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
  })), gt = Tt({
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
  }), Qe = l.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiInputBase"
    }), { "aria-describedby": i, autoComplete: u, autoFocus: a, className: p, color: h, components: d = {}, componentsProps: v = {}, defaultValue: S, disabled: I, disableInjectingGlobalStyles: x, endAdornment: R, error: M, fullWidth: c = false, id: g, inputComponent: y = "input", inputProps: r = {}, inputRef: s, margin: b, maxRows: w, minRows: j, multiline: $ = false, name: z, onBlur: B, onChange: N, onClick: F, onFocus: E, onKeyDown: W, onKeyUp: ie, placeholder: me, readOnly: V, renderSuffix: U, rows: C, size: H, slotProps: Ie = {}, slots: Te = {}, startAdornment: Q, type: K = "text", value: le, ...De } = o, ee = r.value != null ? r.value : le, { current: Re } = l.useRef(ee != null), X = l.useRef(), Ue = l.useCallback((P) => {
    }, []), He = we(X, s, r.ref, Ue), [te, oe] = l.useState(false), L = Je(), D = Ze({
      props: o,
      muiFormControl: L,
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
    D.focused = L ? L.focused : te, l.useEffect(() => {
      !L && I && te && (oe(false), B && B());
    }, [
      L,
      I,
      te,
      B
    ]);
    const ge = L && L.onFilled, $e = L && L.onEmpty, de = l.useCallback((P) => {
      wt(P) ? ge && ge() : $e && $e();
    }, [
      ge,
      $e
    ]);
    Ne(() => {
      Re && de({
        value: ee
      });
    }, [
      ee,
      de,
      Re
    ]);
    const Ve = (P) => {
      E && E(P), r.onFocus && r.onFocus(P), L && L.onFocus ? L.onFocus(P) : oe(true);
    }, ce = (P) => {
      B && B(P), r.onBlur && r.onBlur(P), L && L.onBlur ? L.onBlur(P) : oe(false);
    }, Ke = (P, ...Ce) => {
      if (!Re) {
        const Oe = P.target || X.current;
        if (Oe == null) throw new Error(St(1));
        de({
          value: Oe.value
        });
      }
      r.onChange && r.onChange(P, ...Ce), N && N(P, ...Ce);
    };
    l.useEffect(() => {
      de(X.current);
    }, []);
    const ne = (P) => {
      X.current && P.currentTarget === P.target && X.current.focus(), F && F(P);
    };
    let be = y, A = r;
    $ && be === "input" && (C ? A = {
      type: void 0,
      minRows: C,
      maxRows: C,
      ...A
    } : A = {
      type: void 0,
      maxRows: w,
      minRows: j,
      ...A
    }, be = po);
    const ve = (P) => {
      de(P.animationName === "mui-auto-fill-cancel" ? X.current : {
        value: "x"
      });
    };
    l.useEffect(() => {
      L && L.setAdornedStart(!!Q);
    }, [
      L,
      Q
    ]);
    const Me = {
      ...o,
      color: D.color || "primary",
      disabled: D.disabled,
      endAdornment: R,
      error: D.error,
      focused: D.focused,
      formControl: L,
      fullWidth: c,
      hiddenLabel: D.hiddenLabel,
      multiline: $,
      size: D.size,
      startAdornment: Q,
      type: K
    }, ke = mo(Me), he = Te.root || d.Root || ze, ye = Ie.root || v.root || {}, ue = Te.input || d.Input || We;
    return A = {
      ...A,
      ...Ie.input ?? v.input
    }, m.jsxs(l.Fragment, {
      children: [
        !x && typeof gt == "function" && (mt || (mt = m.jsx(gt, {}))),
        m.jsxs(he, {
          ...ye,
          ref: n,
          onClick: ne,
          ...De,
          ...!nt(he) && {
            ownerState: {
              ...Me,
              ...ye.ownerState
            }
          },
          className: re(ke.root, ye.className, p, V && "MuiInputBase-readOnly"),
          children: [
            Q,
            m.jsx(io.Provider, {
              value: null,
              children: m.jsx(ue, {
                "aria-invalid": D.error,
                "aria-describedby": i,
                autoComplete: u,
                autoFocus: a,
                defaultValue: S,
                disabled: D.disabled,
                id: g,
                onAnimationStart: ve,
                name: z,
                placeholder: me,
                readOnly: V,
                required: D.required,
                rows: C,
                value: ee,
                onKeyDown: W,
                onKeyUp: ie,
                type: K,
                ...A,
                ...!nt(ue) && {
                  as: be,
                  ownerState: {
                    ...Me,
                    ...A.ownerState
                  }
                },
                ref: He,
                className: re(ke.input, A.className, V && "MuiInputBase-readOnly"),
                onBlur: ce,
                onChange: Ke,
                onFocus: Ve
              })
            }),
            R,
            U ? U({
              ...D,
              startAdornment: Q
            }) : null
          ]
        })
      ]
    });
  });
  function go(e) {
    return se("MuiInput", e);
  }
  const Pe = {
    ...xe,
    ...Y("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function bo(e) {
    return se("MuiOutlinedInput", e);
  }
  const _ = {
    ...xe,
    ...Y("MuiOutlinedInput", [
      "root",
      "notchedOutline",
      "input"
    ])
  };
  function vo(e) {
    return se("MuiFilledInput", e);
  }
  const pe = {
    ...xe,
    ...Y("MuiFilledInput", [
      "root",
      "underline",
      "input",
      "adornedStart",
      "adornedEnd",
      "sizeSmall",
      "multiline",
      "hiddenLabel"
    ])
  }, ho = Et(m.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown"), yo = (e) => {
    const { classes: t, disableUnderline: n, startAdornment: o, endAdornment: i, size: u, hiddenLabel: a, multiline: p } = e, h = {
      root: [
        "root",
        !n && "underline",
        o && "adornedStart",
        i && "adornedEnd",
        u === "small" && `size${ae(u)}`,
        a && "hiddenLabel",
        p && "multiline"
      ],
      input: [
        "input"
      ]
    }, d = Z(h, vo, t);
    return {
      ...t,
      ...d
    };
  }, Co = O(ze, {
    shouldForwardProp: (e) => J(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        ...je(e, t),
        !n.disableUnderline && t.underline
      ];
    }
  })(q(({ theme: e }) => {
    const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", o = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", i = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", u = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return {
      position: "relative",
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o,
      borderTopLeftRadius: (e.vars || e).shape.borderRadius,
      borderTopRightRadius: (e.vars || e).shape.borderRadius,
      transition: e.transitions.create("background-color", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      "&:hover": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
        "@media (hover: none)": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o
        }
      },
      [`&.${pe.focused}`]: {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : o
      },
      [`&.${pe.disabled}`]: {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : u
      },
      variants: [
        {
          props: ({ ownerState: a }) => !a.disableUnderline,
          style: {
            "&::after": {
              left: 0,
              bottom: 0,
              content: '""',
              position: "absolute",
              right: 0,
              transform: "scaleX(0)",
              transition: e.transitions.create("transform", {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut
              }),
              pointerEvents: "none"
            },
            [`&.${pe.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${pe.error}`]: {
              "&::before, &::after": {
                borderBottomColor: (e.vars || e).palette.error.main
              }
            },
            "&::before": {
              borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : n}`,
              left: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              right: 0,
              transition: e.transitions.create("border-bottom-color", {
                duration: e.transitions.duration.shorter
              }),
              pointerEvents: "none"
            },
            [`&:hover:not(.${pe.disabled}, .${pe.error}):before`]: {
              borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
            },
            [`&.${pe.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(e.palette).filter(Ye()).map(([a]) => {
          var _a;
          return {
            props: {
              disableUnderline: false,
              color: a
            },
            style: {
              "&::after": {
                borderBottom: `2px solid ${(_a = (e.vars || e).palette[a]) == null ? void 0 : _a.main}`
              }
            }
          };
        }),
        {
          props: ({ ownerState: a }) => a.startAdornment,
          style: {
            paddingLeft: 12
          }
        },
        {
          props: ({ ownerState: a }) => a.endAdornment,
          style: {
            paddingRight: 12
          }
        },
        {
          props: ({ ownerState: a }) => a.multiline,
          style: {
            padding: "25px 12px 8px"
          }
        },
        {
          props: ({ ownerState: a, size: p }) => a.multiline && p === "small",
          style: {
            paddingTop: 21,
            paddingBottom: 4
          }
        },
        {
          props: ({ ownerState: a }) => a.multiline && a.hiddenLabel,
          style: {
            paddingTop: 16,
            paddingBottom: 17
          }
        },
        {
          props: ({ ownerState: a }) => a.multiline && a.hiddenLabel && a.size === "small",
          style: {
            paddingTop: 8,
            paddingBottom: 9
          }
        }
      ]
    };
  })), So = O(We, {
    name: "MuiFilledInput",
    slot: "Input",
    overridesResolver: Ae
  })(q(({ theme: e }) => ({
    paddingTop: 25,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    ...!e.vars && {
      "&:-webkit-autofill": {
        WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
        caretColor: e.palette.mode === "light" ? null : "#fff",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      }
    },
    ...e.vars && {
      "&:-webkit-autofill": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
      },
      [e.getColorSchemeSelector("dark")]: {
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
        props: ({ ownerState: t }) => t.hiddenLabel,
        style: {
          paddingTop: 16,
          paddingBottom: 17
        }
      },
      {
        props: ({ ownerState: t }) => t.startAdornment,
        style: {
          paddingLeft: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.endAdornment,
        style: {
          paddingRight: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.hiddenLabel && t.size === "small",
        style: {
          paddingTop: 8,
          paddingBottom: 9
        }
      },
      {
        props: ({ ownerState: t }) => t.multiline,
        style: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    ]
  }))), It = l.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiFilledInput"
    }), { disableUnderline: i = false, components: u = {}, componentsProps: a, fullWidth: p = false, hiddenLabel: h, inputComponent: d = "input", multiline: v = false, slotProps: S, slots: I = {}, type: x = "text", ...R } = o, M = {
      ...o,
      disableUnderline: i,
      fullWidth: p,
      inputComponent: d,
      multiline: v,
      type: x
    }, c = yo(o), g = {
      root: {
        ownerState: M
      },
      input: {
        ownerState: M
      }
    }, y = S ?? a ? Xe(g, S ?? a) : g, r = I.root ?? u.Root ?? Co, s = I.input ?? u.Input ?? So;
    return m.jsx(Qe, {
      slots: {
        root: r,
        input: s
      },
      slotProps: y,
      fullWidth: p,
      inputComponent: d,
      multiline: v,
      ref: n,
      type: x,
      ...R,
      classes: c
    });
  });
  It.muiName = "Input";
  const xo = (e) => {
    const { classes: t, disableUnderline: n } = e, i = Z({
      root: [
        "root",
        !n && "underline"
      ],
      input: [
        "input"
      ]
    }, go, t);
    return {
      ...t,
      ...i
    };
  }, wo = O(ze, {
    shouldForwardProp: (e) => J(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        ...je(e, t),
        !n.disableUnderline && t.underline
      ];
    }
  })(q(({ theme: e }) => {
    let n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
    return e.vars && (n = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
      position: "relative",
      variants: [
        {
          props: ({ ownerState: o }) => o.formControl,
          style: {
            "label + &": {
              marginTop: 16
            }
          }
        },
        {
          props: ({ ownerState: o }) => !o.disableUnderline,
          style: {
            "&::after": {
              left: 0,
              bottom: 0,
              content: '""',
              position: "absolute",
              right: 0,
              transform: "scaleX(0)",
              transition: e.transitions.create("transform", {
                duration: e.transitions.duration.shorter,
                easing: e.transitions.easing.easeOut
              }),
              pointerEvents: "none"
            },
            [`&.${Pe.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Pe.error}`]: {
              "&::before, &::after": {
                borderBottomColor: (e.vars || e).palette.error.main
              }
            },
            "&::before": {
              borderBottom: `1px solid ${n}`,
              left: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              right: 0,
              transition: e.transitions.create("border-bottom-color", {
                duration: e.transitions.duration.shorter
              }),
              pointerEvents: "none"
            },
            [`&:hover:not(.${Pe.disabled}, .${Pe.error}):before`]: {
              borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${n}`
              }
            },
            [`&.${Pe.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        ...Object.entries(e.palette).filter(Ye()).map(([o]) => ({
          props: {
            color: o,
            disableUnderline: false
          },
          style: {
            "&::after": {
              borderBottom: `2px solid ${(e.vars || e).palette[o].main}`
            }
          }
        }))
      ]
    };
  })), Io = O(We, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: Ae
  })({}), Rt = l.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiInput"
    }), { disableUnderline: i = false, components: u = {}, componentsProps: a, fullWidth: p = false, inputComponent: h = "input", multiline: d = false, slotProps: v, slots: S = {}, type: I = "text", ...x } = o, R = xo(o), c = {
      root: {
        ownerState: {
          disableUnderline: i
        }
      }
    }, g = v ?? a ? Xe(v ?? a, c) : c, y = S.root ?? u.Root ?? wo, r = S.input ?? u.Input ?? Io;
    return m.jsx(Qe, {
      slots: {
        root: y,
        input: r
      },
      slotProps: g,
      fullWidth: p,
      inputComponent: h,
      multiline: d,
      ref: n,
      type: I,
      ...x,
      classes: R
    });
  });
  Rt.muiName = "Input";
  const bt = Y("MuiListItemIcon", [
    "root",
    "alignItemsFlexStart"
  ]);
  function _e(e, t, n) {
    return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
  }
  function vt(e, t, n) {
    return e === t ? n ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : n ? null : e.lastChild;
  }
  function $t(e, t) {
    if (t === void 0) return true;
    let n = e.innerText;
    return n === void 0 && (n = e.textContent), n = n.trim().toLowerCase(), n.length === 0 ? false : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
  }
  function Fe(e, t, n, o, i, u) {
    let a = false, p = i(e, t, t ? n : false);
    for (; p; ) {
      if (p === e.firstChild) {
        if (a) return false;
        a = true;
      }
      const h = o ? false : p.disabled || p.getAttribute("aria-disabled") === "true";
      if (!p.hasAttribute("tabindex") || !$t(p, u) || h) p = i(e, p, n);
      else return p.focus(), true;
    }
    return false;
  }
  const Ro = l.forwardRef(function(t, n) {
    const { actions: o, autoFocus: i = false, autoFocusItem: u = false, children: a, className: p, disabledItemsFocusable: h = false, disableListWrap: d = false, onKeyDown: v, variant: S = "selectedMenu", ...I } = t, x = l.useRef(null), R = l.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    Ne(() => {
      i && x.current.focus();
    }, [
      i
    ]), l.useImperativeHandle(o, () => ({
      adjustStyleForScrollbar: (r, { direction: s }) => {
        const b = !x.current.style.width;
        if (r.clientHeight < x.current.clientHeight && b) {
          const w = `${jt(Ge(r))}px`;
          x.current.style[s === "rtl" ? "paddingLeft" : "paddingRight"] = w, x.current.style.width = `calc(100% + ${w})`;
        }
        return x.current;
      }
    }), []);
    const M = (r) => {
      const s = x.current, b = r.key;
      if (r.ctrlKey || r.metaKey || r.altKey) {
        v && v(r);
        return;
      }
      const j = xt(s).activeElement;
      if (b === "ArrowDown") r.preventDefault(), Fe(s, j, d, h, _e);
      else if (b === "ArrowUp") r.preventDefault(), Fe(s, j, d, h, vt);
      else if (b === "Home") r.preventDefault(), Fe(s, null, d, h, _e);
      else if (b === "End") r.preventDefault(), Fe(s, null, d, h, vt);
      else if (b.length === 1) {
        const $ = R.current, z = b.toLowerCase(), B = performance.now();
        $.keys.length > 0 && (B - $.lastTime > 500 ? ($.keys = [], $.repeating = true, $.previousKeyMatched = true) : $.repeating && z !== $.keys[0] && ($.repeating = false)), $.lastTime = B, $.keys.push(z);
        const N = j && !$.repeating && $t(j, $);
        $.previousKeyMatched && (N || Fe(s, j, false, h, _e, $)) ? r.preventDefault() : $.previousKeyMatched = false;
      }
      v && v(r);
    }, c = we(x, n);
    let g = -1;
    l.Children.forEach(a, (r, s) => {
      if (!l.isValidElement(r)) {
        g === s && (g += 1, g >= a.length && (g = -1));
        return;
      }
      r.props.disabled || (S === "selectedMenu" && r.props.selected || g === -1) && (g = s), g === s && (r.props.disabled || r.props.muiSkipListHighlight || r.type.muiSkipListHighlight) && (g += 1, g >= a.length && (g = -1));
    });
    const y = l.Children.map(a, (r, s) => {
      if (s === g) {
        const b = {};
        return u && (b.autoFocus = true), r.props.tabIndex === void 0 && S === "selectedMenu" && (b.tabIndex = 0), l.cloneElement(r, b);
      }
      return r;
    });
    return m.jsx(so, {
      role: "menu",
      ref: c,
      className: p,
      onKeyDown: M,
      tabIndex: i ? 0 : -1,
      ...I,
      children: y
    });
  });
  function $o(e) {
    return se("MuiMenu", e);
  }
  Y("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  const Mo = {
    vertical: "top",
    horizontal: "right"
  }, ko = {
    vertical: "top",
    horizontal: "left"
  }, Oo = (e) => {
    const { classes: t } = e;
    return Z({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ],
      list: [
        "list"
      ]
    }, $o, t);
  }, Po = O(Dt, {
    shouldForwardProp: (e) => J(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Fo = O(Wt, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  }), Lo = O(Ro, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list
  })({
    outline: 0
  }), Bo = l.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiMenu"
    }), { autoFocus: i = true, children: u, className: a, disableAutoFocusItem: p = false, MenuListProps: h = {}, onClose: d, open: v, PaperProps: S = {}, PopoverClasses: I, transitionDuration: x = "auto", TransitionProps: { onEntering: R, ...M } = {}, variant: c = "selectedMenu", slots: g = {}, slotProps: y = {}, ...r } = o, s = At(), b = {
      ...o,
      autoFocus: i,
      disableAutoFocusItem: p,
      MenuListProps: h,
      onEntering: R,
      PaperProps: S,
      transitionDuration: x,
      TransitionProps: M,
      variant: c
    }, w = Oo(b), j = i && !p && v, $ = l.useRef(null), z = (C, H) => {
      $.current && $.current.adjustStyleForScrollbar(C, {
        direction: s ? "rtl" : "ltr"
      }), R && R(C, H);
    }, B = (C) => {
      C.key === "Tab" && (C.preventDefault(), d && d(C, "tabKeyDown"));
    };
    let N = -1;
    l.Children.map(u, (C, H) => {
      l.isValidElement(C) && (C.props.disabled || (c === "selectedMenu" && C.props.selected || N === -1) && (N = H));
    });
    const F = {
      slots: g,
      slotProps: {
        list: h,
        transition: M,
        paper: S,
        ...y
      }
    }, E = zt({
      elementType: g.root,
      externalSlotProps: y.root,
      ownerState: b,
      className: [
        w.root,
        a
      ]
    }), [W, ie] = qe("paper", {
      className: w.paper,
      elementType: Fo,
      externalForwardedProps: F,
      shouldForwardComponentProp: true,
      ownerState: b
    }), [me, V] = qe("list", {
      className: re(w.list, h.className),
      elementType: Lo,
      shouldForwardComponentProp: true,
      externalForwardedProps: F,
      getSlotProps: (C) => ({
        ...C,
        onKeyDown: (H) => {
          var _a;
          B(H), (_a = C.onKeyDown) == null ? void 0 : _a.call(C, H);
        }
      }),
      ownerState: b
    }), U = typeof F.slotProps.transition == "function" ? F.slotProps.transition(b) : F.slotProps.transition;
    return m.jsx(Po, {
      onClose: d,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: s ? "right" : "left"
      },
      transformOrigin: s ? Mo : ko,
      slots: {
        root: g.root,
        paper: W,
        backdrop: g.backdrop,
        ...g.transition && {
          transition: g.transition
        }
      },
      slotProps: {
        root: E,
        paper: ie,
        backdrop: typeof y.backdrop == "function" ? y.backdrop(b) : y.backdrop,
        transition: {
          ...U,
          onEntering: (...C) => {
            var _a;
            z(...C), (_a = U == null ? void 0 : U.onEntering) == null ? void 0 : _a.call(U, ...C);
          }
        }
      },
      open: v,
      ref: n,
      transitionDuration: x,
      ownerState: b,
      ...r,
      classes: I,
      children: m.jsx(me, {
        actions: $,
        autoFocus: i && (N === -1 || p),
        autoFocusItem: j,
        variant: c,
        ...V,
        children: u
      })
    });
  });
  function No(e) {
    return se("MuiMenuItem", e);
  }
  const Le = Y("MuiMenuItem", [
    "root",
    "focusVisible",
    "dense",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]), To = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters
    ];
  }, Eo = (e) => {
    const { disabled: t, dense: n, divider: o, disableGutters: i, selected: u, classes: a } = e, h = Z({
      root: [
        "root",
        n && "dense",
        t && "disabled",
        !i && "gutters",
        o && "divider",
        u && "selected"
      ]
    }, No, a);
    return {
      ...a,
      ...h
    };
  }, jo = O(Ut, {
    shouldForwardProp: (e) => J(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: To
  })(q(({ theme: e }) => ({
    ...e.typography.body1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    minHeight: 48,
    paddingTop: 6,
    paddingBottom: 6,
    boxSizing: "border-box",
    whiteSpace: "nowrap",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: (e.vars || e).palette.action.hover,
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${Le.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : G(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Le.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : G(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    },
    [`&.${Le.selected}:hover`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : G(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : G(e.palette.primary.main, e.palette.action.selectedOpacity)
      }
    },
    [`&.${Le.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${Le.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    [`& + .${rt.root}`]: {
      marginTop: e.spacing(1),
      marginBottom: e.spacing(1)
    },
    [`& + .${rt.inset}`]: {
      marginLeft: 52
    },
    [`& .${ut.root}`]: {
      marginTop: 0,
      marginBottom: 0
    },
    [`& .${ut.inset}`]: {
      paddingLeft: 36
    },
    [`& .${bt.root}`]: {
      minWidth: 36
    },
    variants: [
      {
        props: ({ ownerState: t }) => !t.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: t }) => t.divider,
        style: {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box"
        }
      },
      {
        props: ({ ownerState: t }) => !t.dense,
        style: {
          [e.breakpoints.up("sm")]: {
            minHeight: "auto"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.dense,
        style: {
          minHeight: 32,
          paddingTop: 4,
          paddingBottom: 4,
          ...e.typography.body2,
          [`& .${bt.root} svg`]: {
            fontSize: "1.25rem"
          }
        }
      }
    ]
  }))), Ao = l.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiMenuItem"
    }), { autoFocus: i = false, component: u = "li", dense: a = false, divider: p = false, disableGutters: h = false, focusVisibleClassName: d, role: v = "menuitem", tabIndex: S, className: I, ...x } = o, R = l.useContext(ct), M = l.useMemo(() => ({
      dense: a || R.dense || false,
      disableGutters: h
    }), [
      R.dense,
      a,
      h
    ]), c = l.useRef(null);
    Ne(() => {
      i && c.current && c.current.focus();
    }, [
      i
    ]);
    const g = {
      ...o,
      dense: M.dense,
      divider: p,
      disableGutters: h
    }, y = Eo(o), r = we(c, n);
    let s;
    return o.disabled || (s = S !== void 0 ? S : -1), m.jsx(ct.Provider, {
      value: M,
      children: m.jsx(jo, {
        ref: r,
        role: v,
        tabIndex: s,
        component: u,
        focusVisibleClassName: re(y.focusVisible, d),
        className: re(y.root, I),
        ...x,
        ownerState: g,
        classes: y
      })
    });
  });
  function zo(e) {
    return se("MuiNativeSelect", e);
  }
  const et = Y("MuiNativeSelect", [
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
  ]), Wo = (e) => {
    const { classes: t, variant: n, disabled: o, multiple: i, open: u, error: a } = e, p = {
      select: [
        "select",
        n,
        o && "disabled",
        i && "multiple",
        a && "error"
      ],
      icon: [
        "icon",
        `icon${ae(n)}`,
        u && "iconOpen",
        o && "disabled"
      ]
    };
    return Z(p, zo, t);
  }, Mt = O("select", {
    name: "MuiNativeSelect"
  })(({ theme: e }) => ({
    MozAppearance: "none",
    WebkitAppearance: "none",
    userSelect: "none",
    borderRadius: 0,
    cursor: "pointer",
    "&:focus": {
      borderRadius: 0
    },
    [`&.${et.disabled}`]: {
      cursor: "default"
    },
    "&[multiple]": {
      height: "auto"
    },
    "&:not([multiple]) option, &:not([multiple]) optgroup": {
      backgroundColor: (e.vars || e).palette.background.paper
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.variant !== "filled" && t.variant !== "outlined",
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
          borderRadius: (e.vars || e).shape.borderRadius,
          "&:focus": {
            borderRadius: (e.vars || e).shape.borderRadius
          },
          "&&&": {
            paddingRight: 32
          }
        }
      }
    ]
  })), Do = O(Mt, {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: J,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.select,
        t[n.variant],
        n.error && t.error,
        {
          [`&.${et.multiple}`]: t.multiple
        }
      ];
    }
  })({}), kt = O("svg", {
    name: "MuiNativeSelect"
  })(({ theme: e }) => ({
    position: "absolute",
    right: 0,
    top: "calc(50% - .5em)",
    pointerEvents: "none",
    color: (e.vars || e).palette.action.active,
    [`&.${et.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.open,
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
  })), Uo = O(kt, {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${ae(n.variant)}`],
        n.open && t.iconOpen
      ];
    }
  })({}), Ho = l.forwardRef(function(t, n) {
    const { className: o, disabled: i, error: u, IconComponent: a, inputRef: p, variant: h = "standard", ...d } = t, v = {
      ...t,
      disabled: i,
      variant: h,
      error: u
    }, S = Wo(v);
    return m.jsxs(l.Fragment, {
      children: [
        m.jsx(Do, {
          ownerState: v,
          className: re(S.select, o),
          disabled: i,
          ref: p || n,
          ...d
        }),
        t.multiple ? null : m.jsx(Uo, {
          as: a,
          ownerState: v,
          className: S.icon
        })
      ]
    });
  });
  var ht;
  const Vo = O("fieldset", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: J
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
  }), Ko = O("legend", {
    name: "MuiNotchedOutlined",
    shouldForwardProp: J
  })(q(({ theme: e }) => ({
    float: "unset",
    width: "auto",
    overflow: "hidden",
    variants: [
      {
        props: ({ ownerState: t }) => !t.withLabel,
        style: {
          padding: 0,
          lineHeight: "11px",
          transition: e.transitions.create("width", {
            duration: 150,
            easing: e.transitions.easing.easeOut
          })
        }
      },
      {
        props: ({ ownerState: t }) => t.withLabel,
        style: {
          display: "block",
          padding: 0,
          height: 11,
          fontSize: "0.75em",
          visibility: "hidden",
          maxWidth: 0.01,
          transition: e.transitions.create("max-width", {
            duration: 50,
            easing: e.transitions.easing.easeOut
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
        props: ({ ownerState: t }) => t.withLabel && t.notched,
        style: {
          maxWidth: "100%",
          transition: e.transitions.create("max-width", {
            duration: 100,
            easing: e.transitions.easing.easeOut,
            delay: 50
          })
        }
      }
    ]
  })));
  function _o(e) {
    const { children: t, classes: n, className: o, label: i, notched: u, ...a } = e, p = i != null && i !== "", h = {
      ...e,
      notched: u,
      withLabel: p
    };
    return m.jsx(Vo, {
      "aria-hidden": true,
      className: o,
      ownerState: h,
      ...a,
      children: m.jsx(Ko, {
        ownerState: h,
        children: p ? m.jsx("span", {
          children: i
        }) : ht || (ht = m.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const Go = (e) => {
    const { classes: t } = e, o = Z({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, bo, t);
    return {
      ...t,
      ...o
    };
  }, qo = O(ze, {
    shouldForwardProp: (e) => J(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: je
  })(q(({ theme: e }) => {
    const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      position: "relative",
      borderRadius: (e.vars || e).shape.borderRadius,
      [`&:hover .${_.notchedOutline}`]: {
        borderColor: (e.vars || e).palette.text.primary
      },
      "@media (hover: none)": {
        [`&:hover .${_.notchedOutline}`]: {
          borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
        }
      },
      [`&.${_.focused} .${_.notchedOutline}`]: {
        borderWidth: 2
      },
      variants: [
        ...Object.entries(e.palette).filter(Ye()).map(([n]) => ({
          props: {
            color: n
          },
          style: {
            [`&.${_.focused} .${_.notchedOutline}`]: {
              borderColor: (e.vars || e).palette[n].main
            }
          }
        })),
        {
          props: {},
          style: {
            [`&.${_.error} .${_.notchedOutline}`]: {
              borderColor: (e.vars || e).palette.error.main
            },
            [`&.${_.disabled} .${_.notchedOutline}`]: {
              borderColor: (e.vars || e).palette.action.disabled
            }
          }
        },
        {
          props: ({ ownerState: n }) => n.startAdornment,
          style: {
            paddingLeft: 14
          }
        },
        {
          props: ({ ownerState: n }) => n.endAdornment,
          style: {
            paddingRight: 14
          }
        },
        {
          props: ({ ownerState: n }) => n.multiline,
          style: {
            padding: "16.5px 14px"
          }
        },
        {
          props: ({ ownerState: n, size: o }) => n.multiline && o === "small",
          style: {
            padding: "8.5px 14px"
          }
        }
      ]
    };
  })), Xo = O(_o, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline
  })(q(({ theme: e }) => {
    const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
    };
  })), Yo = O(We, {
    name: "MuiOutlinedInput",
    slot: "Input",
    overridesResolver: Ae
  })(q(({ theme: e }) => ({
    padding: "16.5px 14px",
    ...!e.vars && {
      "&:-webkit-autofill": {
        WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
        WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
        caretColor: e.palette.mode === "light" ? null : "#fff",
        borderRadius: "inherit"
      }
    },
    ...e.vars && {
      "&:-webkit-autofill": {
        borderRadius: "inherit"
      },
      [e.getColorSchemeSelector("dark")]: {
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
        props: ({ ownerState: t }) => t.multiline,
        style: {
          padding: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.startAdornment,
        style: {
          paddingLeft: 0
        }
      },
      {
        props: ({ ownerState: t }) => t.endAdornment,
        style: {
          paddingRight: 0
        }
      }
    ]
  }))), Ot = l.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiOutlinedInput"
    }), { components: i = {}, fullWidth: u = false, inputComponent: a = "input", label: p, multiline: h = false, notched: d, slots: v = {}, slotProps: S = {}, type: I = "text", ...x } = o, R = Go(o), M = Je(), c = Ze({
      props: o,
      muiFormControl: M,
      states: [
        "color",
        "disabled",
        "error",
        "focused",
        "hiddenLabel",
        "size",
        "required"
      ]
    }), g = {
      ...o,
      color: c.color || "primary",
      disabled: c.disabled,
      error: c.error,
      focused: c.focused,
      formControl: M,
      fullWidth: u,
      hiddenLabel: c.hiddenLabel,
      multiline: h,
      size: c.size,
      type: I
    }, y = v.root ?? i.Root ?? qo, r = v.input ?? i.Input ?? Yo, [s, b] = qe("notchedOutline", {
      elementType: Xo,
      className: R.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: g,
      externalForwardedProps: {
        slots: v,
        slotProps: S
      },
      additionalProps: {
        label: p != null && p !== "" && c.required ? m.jsxs(l.Fragment, {
          children: [
            p,
            "\u2009",
            "*"
          ]
        }) : p
      }
    });
    return m.jsx(Qe, {
      slots: {
        root: y,
        input: r
      },
      slotProps: S,
      renderSuffix: (w) => m.jsx(s, {
        ...b,
        notched: typeof d < "u" ? d : !!(w.startAdornment || w.filled || w.focused)
      }),
      fullWidth: u,
      inputComponent: a,
      multiline: h,
      ref: n,
      type: I,
      ...x,
      classes: {
        ...R,
        notchedOutline: null
      }
    });
  });
  Ot.muiName = "Input";
  function Pt(e) {
    return se("MuiSelect", e);
  }
  const Be = Y("MuiSelect", [
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
  var yt;
  const Zo = O(Mt, {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        {
          [`&.${Be.select}`]: t.select
        },
        {
          [`&.${Be.select}`]: t[n.variant]
        },
        {
          [`&.${Be.error}`]: t.error
        },
        {
          [`&.${Be.multiple}`]: t.multiple
        }
      ];
    }
  })({
    [`&.${Be.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    }
  }), Jo = O(kt, {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.icon,
        n.variant && t[`icon${ae(n.variant)}`],
        n.open && t.iconOpen
      ];
    }
  })({}), Qo = O("input", {
    shouldForwardProp: (e) => Vt(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box"
  });
  function Ct(e, t) {
    return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
  }
  function en(e) {
    return e == null || typeof e == "string" && !e.trim();
  }
  const tn = (e) => {
    const { classes: t, variant: n, disabled: o, multiple: i, open: u, error: a } = e, p = {
      select: [
        "select",
        n,
        o && "disabled",
        i && "multiple",
        a && "error"
      ],
      icon: [
        "icon",
        `icon${ae(n)}`,
        u && "iconOpen",
        o && "disabled"
      ],
      nativeInput: [
        "nativeInput"
      ]
    };
    return Z(p, Pt, t);
  }, on = l.forwardRef(function(t, n) {
    var _a;
    const { "aria-describedby": o, "aria-label": i, autoFocus: u, autoWidth: a, children: p, className: h, defaultOpen: d, defaultValue: v, disabled: S, displayEmpty: I, error: x = false, IconComponent: R, inputRef: M, labelId: c, MenuProps: g = {}, multiple: y, name: r, onBlur: s, onChange: b, onClose: w, onFocus: j, onOpen: $, open: z, readOnly: B, renderValue: N, required: F, SelectDisplayProps: E = {}, tabIndex: W, type: ie, value: me, variant: V = "standard", ...U } = t, [C, H] = at({
      controlled: me,
      default: v,
      name: "Select"
    }), [Ie, Te] = at({
      controlled: z,
      default: d,
      name: "Select"
    }), Q = l.useRef(null), K = l.useRef(null), [le, De] = l.useState(null), { current: ee } = l.useRef(z != null), [Re, X] = l.useState(), Ue = we(n, M), He = l.useCallback((f) => {
      K.current = f, f && De(f);
    }, []), te = le == null ? void 0 : le.parentNode;
    l.useImperativeHandle(Ue, () => ({
      focus: () => {
        K.current.focus();
      },
      node: Q.current,
      value: C
    }), [
      C
    ]), l.useEffect(() => {
      d && Ie && le && !ee && (X(a ? null : te.clientWidth), K.current.focus());
    }, [
      le,
      a
    ]), l.useEffect(() => {
      u && K.current.focus();
    }, [
      u
    ]), l.useEffect(() => {
      if (!c) return;
      const f = xt(K.current).getElementById(c);
      if (f) {
        const k = () => {
          getSelection().isCollapsed && K.current.focus();
        };
        return f.addEventListener("click", k), () => {
          f.removeEventListener("click", k);
        };
      }
    }, [
      c
    ]);
    const oe = (f, k) => {
      f ? $ && $(k) : w && w(k), ee || (X(a ? null : te.clientWidth), Te(f));
    }, L = (f) => {
      f.button === 0 && (f.preventDefault(), K.current.focus(), oe(true, f));
    }, D = (f) => {
      oe(false, f);
    }, ge = l.Children.toArray(p), $e = (f) => {
      const k = ge.find((T) => T.props.value === f.target.value);
      k !== void 0 && (H(k.props.value), b && b(f, k));
    }, de = (f) => (k) => {
      let T;
      if (k.currentTarget.hasAttribute("tabindex")) {
        if (y) {
          T = Array.isArray(C) ? C.slice() : [];
          const Se = C.indexOf(f.props.value);
          Se === -1 ? T.push(f.props.value) : T.splice(Se, 1);
        } else T = f.props.value;
        if (f.props.onClick && f.props.onClick(k), C !== T && (H(T), b)) {
          const Se = k.nativeEvent || k, ot = new Se.constructor(Se.type, Se);
          Object.defineProperty(ot, "target", {
            writable: true,
            value: {
              value: T,
              name: r
            }
          }), b(ot, f);
        }
        y || oe(false, k);
      }
    }, Ve = (f) => {
      B || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(f.key) && (f.preventDefault(), oe(true, f));
    }, ce = le !== null && Ie, Ke = (f) => {
      !ce && s && (Object.defineProperty(f, "target", {
        writable: true,
        value: {
          value: C,
          name: r
        }
      }), s(f));
    };
    delete U["aria-invalid"];
    let ne, be;
    const A = [];
    let ve = false;
    (wt({
      value: C
    }) || I) && (N ? ne = N(C) : ve = true);
    const Me = ge.map((f) => {
      if (!l.isValidElement(f)) return null;
      let k;
      if (y) {
        if (!Array.isArray(C)) throw new Error(St(2));
        k = C.some((T) => Ct(T, f.props.value)), k && ve && A.push(f.props.children);
      } else k = Ct(C, f.props.value), k && ve && (be = f.props.children);
      return l.cloneElement(f, {
        "aria-selected": k ? "true" : "false",
        onClick: de(f),
        onKeyUp: (T) => {
          T.key === " " && T.preventDefault(), f.props.onKeyUp && f.props.onKeyUp(T);
        },
        role: "option",
        selected: k,
        value: void 0,
        "data-value": f.props.value
      });
    });
    ve && (y ? A.length === 0 ? ne = null : ne = A.reduce((f, k, T) => (f.push(k), T < A.length - 1 && f.push(", "), f), []) : ne = be);
    let ke = Re;
    !a && ee && le && (ke = te.clientWidth);
    let he;
    typeof W < "u" ? he = W : he = S ? null : 0;
    const ye = E.id || (r ? `mui-component-select-${r}` : void 0), ue = {
      ...t,
      variant: V,
      value: C,
      open: ce,
      error: x
    }, P = tn(ue), Ce = {
      ...g.PaperProps,
      ...(_a = g.slotProps) == null ? void 0 : _a.paper
    }, Oe = Ht();
    return m.jsxs(l.Fragment, {
      children: [
        m.jsx(Zo, {
          as: "div",
          ref: He,
          tabIndex: he,
          role: "combobox",
          "aria-controls": ce ? Oe : void 0,
          "aria-disabled": S ? "true" : void 0,
          "aria-expanded": ce ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": i,
          "aria-labelledby": [
            c,
            ye
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": o,
          "aria-required": F ? "true" : void 0,
          "aria-invalid": x ? "true" : void 0,
          onKeyDown: Ve,
          onMouseDown: S || B ? null : L,
          onBlur: Ke,
          onFocus: j,
          ...E,
          ownerState: ue,
          className: re(E.className, P.select, h),
          id: ye,
          children: en(ne) ? yt || (yt = m.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : ne
        }),
        m.jsx(Qo, {
          "aria-invalid": x,
          value: Array.isArray(C) ? C.join(",") : C,
          name: r,
          ref: Q,
          "aria-hidden": true,
          onChange: $e,
          tabIndex: -1,
          disabled: S,
          className: P.nativeInput,
          autoFocus: u,
          required: F,
          ...U,
          ownerState: ue
        }),
        m.jsx(Jo, {
          as: R,
          className: P.icon,
          ownerState: ue
        }),
        m.jsx(Bo, {
          id: `menu-${r || ""}`,
          anchorEl: te,
          open: ce,
          onClose: D,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "center"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "center"
          },
          ...g,
          slotProps: {
            ...g.slotProps,
            list: {
              "aria-labelledby": c,
              role: "listbox",
              "aria-multiselectable": y ? "true" : void 0,
              disableListWrap: true,
              id: Oe,
              ...g.MenuListProps
            },
            paper: {
              ...Ce,
              style: {
                minWidth: ke,
                ...Ce != null ? Ce.style : null
              }
            }
          },
          children: Me
        })
      ]
    });
  }), nn = (e) => {
    const { classes: t } = e, o = Z({
      root: [
        "root"
      ]
    }, Pt, t);
    return {
      ...t,
      ...o
    };
  }, tt = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => J(e) && e !== "variant",
    slot: "Root"
  }, rn = O(Rt, tt)(""), an = O(Ot, tt)(""), sn = O(It, tt)(""), Ft = l.forwardRef(function(t, n) {
    const o = fe({
      name: "MuiSelect",
      props: t
    }), { autoWidth: i = false, children: u, classes: a = {}, className: p, defaultOpen: h = false, displayEmpty: d = false, IconComponent: v = ho, id: S, input: I, inputProps: x, label: R, labelId: M, MenuProps: c, multiple: g = false, native: y = false, onClose: r, onOpen: s, open: b, renderValue: w, SelectDisplayProps: j, variant: $ = "outlined", ...z } = o, B = y ? Ho : on, N = Je(), F = Ze({
      props: o,
      muiFormControl: N,
      states: [
        "variant",
        "error"
      ]
    }), E = F.variant || $, W = {
      ...o,
      variant: E,
      classes: a
    }, ie = nn(W), { root: me, ...V } = ie, U = I || {
      standard: m.jsx(rn, {
        ownerState: W
      }),
      outlined: m.jsx(an, {
        label: R,
        ownerState: W
      }),
      filled: m.jsx(sn, {
        ownerState: W
      })
    }[E], C = we(n, Kt(U));
    return m.jsx(l.Fragment, {
      children: l.cloneElement(U, {
        inputComponent: B,
        inputProps: {
          children: u,
          error: F.error,
          IconComponent: v,
          variant: E,
          type: void 0,
          multiple: g,
          ...y ? {
            id: S
          } : {
            autoWidth: i,
            defaultOpen: h,
            displayEmpty: d,
            labelId: M,
            MenuProps: c,
            onClose: r,
            onOpen: s,
            open: b,
            renderValue: w,
            SelectDisplayProps: {
              id: S,
              ...j
            }
          },
          ...x,
          classes: x ? Xe(V, x.classes) : V,
          ...I ? I.props.inputProps : {}
        },
        ...(g && y || d) && E === "outlined" ? {
          notched: true
        } : {},
        ref: C,
        className: re(U.props.className, p, ie.root),
        ...!I && {
          variant: E
        },
        ...z
      })
    });
  });
  Ft.muiName = "Select";
  const ln = () => [
    {
      type: "custom",
      component: () => m.jsx(st, {
        dividerText: "selection"
      })
    },
    {
      name: "cid",
      type: "id",
      label: "cid",
      onChange: _t([
        "boolean",
        "number",
        "string",
        "mixed"
      ], "cid")
    },
    {
      type: "custom",
      component: () => m.jsx(st, {
        dividerText: "arrow"
      })
    },
    {
      name: "arrowColor",
      label: "arrow_color",
      type: "color"
    }
  ];
  function dn() {
    const e = l.useRef(null), { width: t } = Gt(e == null ? void 0 : e.current), n = l.useContext(qt), { widget: o, theme: i } = n, u = o.data.cidObject, a = o.data.oidObject, { textStyles: p, fontStyles: h } = Xt(o.style), { data: d, states: v } = Yt("oid"), { value: S, updateValue: I } = it("oid"), { updateValue: x } = it("cid"), R = a == null ? void 0 : a.type, M = R === "boolean" || R === "number" || R === "string" || R === "mixed", c = v.findIndex((y) => String(y.value) === String(S)), g = (y) => {
      const r = y.target.value, b = v[r].value;
      u && x(b), I(b);
    };
    return m.jsxs(Zt, {
      isValidType: M,
      data: d,
      oidValue: S,
      children: [
        m.jsx(Jt, {
          data: d,
          widget: o
        }),
        m.jsx(lt, {
          ref: e,
          sx: {
            overflow: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: m.jsx(Ft, {
            variant: "standard",
            disableUnderline: true,
            value: c !== -1 ? c : "",
            onChange: g,
            MenuProps: {
              sx: {
                maxWidth: t
              },
              MenuListProps: {
                sx: {
                  background: d.backgroundColor ? G(d.backgroundColor, 0.7) : d.background
                }
              }
            },
            sx: {
              width: "100%",
              height: "100%",
              maxWidth: `calc(${t}px - 10%)`,
              "& .MuiSelect-select": {
                backgroundColor: G(c !== -1 ? o.data[`iconSmall${c + 1}`] || o.data[`icon${c + 1}`] || o.data.iconSmall || o.data.icon ? o.data[`iconColor${c + 1}`] || o.data.iconColor || d.iconColor || i.palette.primary.main : o.data[`textColor${c + 1}`] || o.data.textColor || d.textColor || i.palette.primary.main : o.data.iconColor || d.textColor || i.palette.primary.main, 0.15),
                paddingLeft: 1
              },
              "& .MuiSelect-icon": {
                color: c !== -1 ? o.data[`iconSmall${c + 1}`] || o.data[`icon${c + 1}`] || o.data.iconSmall || o.data.icon ? o.data[`iconColor${c + 1}`] || o.data.iconColor || d.iconColor || i.palette.primary.main : o.data[`textColor${c + 1}`] || o.data.textColor || d.textColor || i.palette.primary.main : o.data.arrowColor || o.data.iconColor || d.textColor || i.palette.primary.main
              },
              "&.Mui-focused": {
                ariaHidden: "true",
                "& .MuiSelect-select": {
                  backgroundColor: G(c !== -1 ? o.data[`iconSmall${c + 1}`] || o.data[`icon${c + 1}`] || o.data.iconSmall || o.data.icon ? o.data[`iconColor${c + 1}`] || o.data.iconColor || d.iconColor || i.palette.primary.main : o.data[`textColor${c + 1}`] || o.data.textColor || d.textColor || i.palette.primary.main : o.data.iconColor || d.textColor || i.palette.primary.main, 0.2),
                  paddingLeft: 1
                }
              }
            },
            children: v.map((y, r) => {
              var _a;
              const s = o.data[`iconSmall${r + 1}`] || o.data[`icon${r + 1}`] || o.data.iconSmall || o.data.icon, w = s ? o.data[`iconColor${r + 1}`] || o.data.iconColor || d.iconColor || i.palette.primary.main : o.data[`textColor${r + 1}`] || o.data.textColor || d.textColor || i.palette.primary.main;
              return m.jsx(Ao, {
                value: r,
                sx: {
                  "& .MuiTouchRipple-root": {
                    color: w
                  },
                  "&.Mui-selected": {
                    backgroundColor: G(w, 0.16)
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: G(w, 0.24)
                  },
                  "&:hover": {
                    backgroundColor: G(w, 0.08)
                  },
                  background: o.data[`backgroundColor${r + 1}`] && `${o.data[`backgroundColor${r + 1}`]}!important` || `${o.data[`background${r + 1}`]}!important`
                },
                children: m.jsxs(lo, {
                  direction: "row",
                  spacing: s ? 1 : 0,
                  sx: {
                    alignItems: "center"
                  },
                  children: [
                    m.jsx(ao, {
                      alt: "",
                      src: typeof s == "string" ? s : typeof s == "number" ? s.toString() : void 0,
                      style: {
                        position: "relative",
                        top: `calc(0px - ${o.data[`iconYOffset${r + 1}`]})`,
                        right: `calc(0px - ${o.data[`iconXOffset${r + 1}`]})`,
                        height: !s && "0px" || (typeof o.data[`iconSize${r + 1}`] == "number" ? `calc(24px * ${o.data[`iconSize${r + 1}`]} / 100)` : typeof o.data.iconSize == "number" ? `calc(24px * ${o.data.iconSize} / 100)` : "24px"),
                        ...Qt(typeof s == "string" ? s : typeof s == "number" ? s.toString() : void 0, String(S) === String(o.data[`value${r + 1}`]) && o.data.iconColorActive || o.data[`iconColor${r + 1}`] || o.data.iconColor || d.iconColor || i.palette.primary.main)
                      }
                    }),
                    m.jsx(eo, {
                      component: lt,
                      variant: "subtitle2",
                      sx: {
                        whiteSpace: "pre-wrap",
                        ...h,
                        ...p,
                        fontSize: o.data[`valueSize${r + 1}`] || d.valueSize,
                        textAlign: "left",
                        bgcolor: "transparent",
                        color: o.data[`textColor${r + 1}`] || o.data.textColor || d.textColor || i.palette.primary.main,
                        textTransform: "none",
                        width: "100%",
                        height: "100%",
                        flexGrow: 1,
                        alignContent: "center"
                      },
                      contentEditable: "false",
                      dangerouslySetInnerHTML: {
                        __html: o.data[`alias${r + 1}`] && ((_a = o.data[`alias${r + 1}`]) == null ? void 0 : _a.replace(/(\r\n|\n|\r)/gm, "")) || o.data[`value${r + 1}`] && `${o.data[`value${r + 1}`]}${a == null ? void 0 : a.unit}` || ""
                      }
                    })
                  ]
                })
              }, String(y.value));
            })
          })
        })
      ]
    });
  }
  Lt = class extends to {
    static getWidgetInfo() {
      return {
        id: "tplSelectCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "SelectCollectionWidget",
        visWidgetLabel: "select_collection_widget",
        visOrder: 7,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...dt({
                groupName: ""
              })
            ]
          },
          {
            name: "select_collection",
            label: "group_select_collection",
            fields: [
              ...oo([
                "boolean",
                "number",
                "string",
                "mixed"
              ]),
              ...no(),
              ...ln()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...dt({
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
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-select.png"
      };
    }
    getWidgetInfo() {
      return Lt.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, n) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, ro(this.wrapContent(m.jsx(dn, {})), n);
    }
  };
});
export {
  __tla,
  Lt as default
};
