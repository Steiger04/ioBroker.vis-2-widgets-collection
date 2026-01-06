import { l as we, U as Ge, V as Bt, k as Ne, W as Nt, j as g, a as Y, g as se, s as P, u as fe, X as Tt, d as re, p as nt, m as q, i as ae, e as Z, Y as St, c as Et, Z as Xe, r as J, N as Ye, _ as jt, $ as xt, a0 as At, a1 as zt, b as qe, a2 as Wt, a3 as Dt, n as Ut, o as G, a4 as rt, a5 as at, h as Ht, a6 as Vt, a7 as Kt, a8 as _t, C as st, a9 as Gt, q as qt, x as Xt, v as it, z as Yt, A as Zt, w as lt, y as Jt, T as Qt, G as eo, E as dt, H as to, J as oo, K as no, __tla as __tla_0 } from "./commonFields-8_mIPW_t.js";
import { v as c, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as ro, __tla as __tla_2 } from "./SafeImg-tj5GQGHs.js";
import { a as ao, L as ct, l as ut, __tla as __tla_3 } from "./listItemTextClasses-BlC_Dyvb.js";
import { f as Ze } from "./formControlState-Dq1zat_P.js";
import { u as Je, F as so, __tla as __tla_4 } from "./useFormControl--TM4wVzV.js";
import { S as io, __tla as __tla_5 } from "./Stack-B9GBFqLE.js";
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
  const lo = {
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
  function co(e) {
    for (const t in e) return false;
    return true;
  }
  function pt(e) {
    return co(e) || e.outerHeightStyle === 0 && !e.overflowing;
  }
  const uo = c.forwardRef(function(t, n) {
    const { onChange: o, maxRows: i, minRows: u = 1, style: s, value: a, ...v } = t, { current: y } = c.useRef(a != null), h = c.useRef(null), I = we(n, h), x = c.useRef(null), w = c.useRef(null), f = c.useCallback(() => {
      const r = h.current, d = w.current;
      if (!r || !d) return;
      const R = Ge(r).getComputedStyle(r);
      if (R.width === "0px") return {
        outerHeightStyle: 0,
        overflowing: false
      };
      d.style.width = R.width, d.value = r.value || t.placeholder || "x", d.value.slice(-1) === `
` && (d.value += " ");
      const j = R.boxSizing, $ = Ee(R.paddingBottom) + Ee(R.paddingTop), z = Ee(R.borderBottomWidth) + Ee(R.borderTopWidth), B = d.scrollHeight;
      d.value = "x";
      const N = d.scrollHeight;
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
      const r = h.current, d = f();
      if (!r || !d || pt(d)) return false;
      const C = d.outerHeightStyle;
      return x.current != null && x.current !== C;
    }), m = c.useCallback(() => {
      const r = h.current, d = f();
      if (!r || !d || pt(d)) return;
      const C = d.outerHeightStyle;
      x.current !== C && (x.current = C, r.style.height = `${C}px`), r.style.overflow = d.overflowing ? "hidden" : "";
    }, [
      f
    ]), l = c.useRef(-1);
    Ne(() => {
      const r = Nt(m), d = h == null ? void 0 : h.current;
      if (!d) return;
      const C = Ge(d);
      C.addEventListener("resize", r);
      let R;
      return typeof ResizeObserver < "u" && (R = new ResizeObserver(() => {
        M() && (R.unobserve(d), cancelAnimationFrame(l.current), m(), l.current = requestAnimationFrame(() => {
          R.observe(d);
        }));
      }), R.observe(d)), () => {
        r.clear(), cancelAnimationFrame(l.current), C.removeEventListener("resize", r), R && R.disconnect();
      };
    }, [
      f,
      m,
      M
    ]), Ne(() => {
      m();
    });
    const b = (r) => {
      y || m(), o && o(r);
    };
    return g.jsxs(c.Fragment, {
      children: [
        g.jsx("textarea", {
          value: a,
          onChange: b,
          ref: I,
          rows: u,
          style: s,
          ...v
        }),
        g.jsx("textarea", {
          "aria-hidden": true,
          className: t.className,
          readOnly: true,
          ref: w,
          tabIndex: -1,
          style: {
            ...lo.shadow,
            ...s,
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
  function po(e) {
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
  }, fo = (e) => {
    const { classes: t, color: n, disabled: o, error: i, endAdornment: u, focused: s, formControl: a, fullWidth: v, hiddenLabel: y, multiline: h, readOnly: I, size: x, startAdornment: w, type: f } = e, M = {
      root: [
        "root",
        `color${ae(n)}`,
        o && "disabled",
        i && "error",
        v && "fullWidth",
        s && "focused",
        a && "formControl",
        x && x !== "medium" && `size${ae(x)}`,
        h && "multiline",
        w && "adornedStart",
        u && "adornedEnd",
        y && "hiddenLabel",
        I && "readOnly"
      ],
      input: [
        "input",
        o && "disabled",
        f === "search" && "inputTypeSearch",
        h && "inputMultiline",
        x === "small" && "inputSizeSmall",
        y && "inputHiddenLabel",
        w && "inputAdornedStart",
        u && "inputAdornedEnd",
        I && "readOnly"
      ]
    };
    return Z(M, po, t);
  }, ze = P("div", {
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
  }))), We = P("input", {
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
  }), Qe = c.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiInputBase"
    }), { "aria-describedby": i, autoComplete: u, autoFocus: s, className: a, color: v, components: y = {}, componentsProps: h = {}, defaultValue: I, disabled: x, disableInjectingGlobalStyles: w, endAdornment: f, error: M, fullWidth: m = false, id: l, inputComponent: b = "input", inputProps: r = {}, inputRef: d, margin: C, maxRows: R, minRows: j, multiline: $ = false, name: z, onBlur: B, onChange: N, onClick: F, onFocus: E, onKeyDown: W, onKeyUp: ie, placeholder: me, readOnly: V, renderSuffix: U, rows: S, size: H, slotProps: Ie = {}, slots: Te = {}, startAdornment: Q, type: K = "text", value: le, ...De } = o, ee = r.value != null ? r.value : le, { current: Re } = c.useRef(ee != null), X = c.useRef(), Ue = c.useCallback((O) => {
    }, []), He = we(X, d, r.ref, Ue), [te, oe] = c.useState(false), L = Je(), D = Ze({
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
    D.focused = L ? L.focused : te, c.useEffect(() => {
      !L && x && te && (oe(false), B && B());
    }, [
      L,
      x,
      te,
      B
    ]);
    const ge = L && L.onFilled, $e = L && L.onEmpty, de = c.useCallback((O) => {
      wt(O) ? ge && ge() : $e && $e();
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
    const Ve = (O) => {
      E && E(O), r.onFocus && r.onFocus(O), L && L.onFocus ? L.onFocus(O) : oe(true);
    }, ce = (O) => {
      B && B(O), r.onBlur && r.onBlur(O), L && L.onBlur ? L.onBlur(O) : oe(false);
    }, Ke = (O, ...Ce) => {
      if (!Re) {
        const Pe = O.target || X.current;
        if (Pe == null) throw new Error(St(1));
        de({
          value: Pe.value
        });
      }
      r.onChange && r.onChange(O, ...Ce), N && N(O, ...Ce);
    };
    c.useEffect(() => {
      de(X.current);
    }, []);
    const ne = (O) => {
      X.current && O.currentTarget === O.target && X.current.focus(), F && F(O);
    };
    let be = b, A = r;
    $ && be === "input" && (S ? A = {
      type: void 0,
      minRows: S,
      maxRows: S,
      ...A
    } : A = {
      type: void 0,
      maxRows: R,
      minRows: j,
      ...A
    }, be = uo);
    const ve = (O) => {
      de(O.animationName === "mui-auto-fill-cancel" ? X.current : {
        value: "x"
      });
    };
    c.useEffect(() => {
      L && L.setAdornedStart(!!Q);
    }, [
      L,
      Q
    ]);
    const Me = {
      ...o,
      color: D.color || "primary",
      disabled: D.disabled,
      endAdornment: f,
      error: D.error,
      focused: D.focused,
      formControl: L,
      fullWidth: m,
      hiddenLabel: D.hiddenLabel,
      multiline: $,
      size: D.size,
      startAdornment: Q,
      type: K
    }, ke = fo(Me), he = Te.root || y.Root || ze, ye = Ie.root || h.root || {}, ue = Te.input || y.Input || We;
    return A = {
      ...A,
      ...Ie.input ?? h.input
    }, g.jsxs(c.Fragment, {
      children: [
        !w && typeof gt == "function" && (mt || (mt = g.jsx(gt, {}))),
        g.jsxs(he, {
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
          className: re(ke.root, ye.className, a, V && "MuiInputBase-readOnly"),
          children: [
            Q,
            g.jsx(so.Provider, {
              value: null,
              children: g.jsx(ue, {
                "aria-invalid": D.error,
                "aria-describedby": i,
                autoComplete: u,
                autoFocus: s,
                defaultValue: I,
                disabled: D.disabled,
                id: l,
                onAnimationStart: ve,
                name: z,
                placeholder: me,
                readOnly: V,
                required: D.required,
                rows: S,
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
            f,
            U ? U({
              ...D,
              startAdornment: Q
            }) : null
          ]
        })
      ]
    });
  });
  function mo(e) {
    return se("MuiInput", e);
  }
  const Oe = {
    ...xe,
    ...Y("MuiInput", [
      "root",
      "underline",
      "input"
    ])
  };
  function go(e) {
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
  function bo(e) {
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
  }, vo = Et(g.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown"), ho = (e) => {
    const { classes: t, disableUnderline: n, startAdornment: o, endAdornment: i, size: u, hiddenLabel: s, multiline: a } = e, v = {
      root: [
        "root",
        !n && "underline",
        o && "adornedStart",
        i && "adornedEnd",
        u === "small" && `size${ae(u)}`,
        s && "hiddenLabel",
        a && "multiline"
      ],
      input: [
        "input"
      ]
    }, y = Z(v, bo, t);
    return {
      ...t,
      ...y
    };
  }, yo = P(ze, {
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
          props: ({ ownerState: s }) => !s.disableUnderline,
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
        ...Object.entries(e.palette).filter(Ye()).map(([s]) => {
          var _a;
          return {
            props: {
              disableUnderline: false,
              color: s
            },
            style: {
              "&::after": {
                borderBottom: `2px solid ${(_a = (e.vars || e).palette[s]) == null ? void 0 : _a.main}`
              }
            }
          };
        }),
        {
          props: ({ ownerState: s }) => s.startAdornment,
          style: {
            paddingLeft: 12
          }
        },
        {
          props: ({ ownerState: s }) => s.endAdornment,
          style: {
            paddingRight: 12
          }
        },
        {
          props: ({ ownerState: s }) => s.multiline,
          style: {
            padding: "25px 12px 8px"
          }
        },
        {
          props: ({ ownerState: s, size: a }) => s.multiline && a === "small",
          style: {
            paddingTop: 21,
            paddingBottom: 4
          }
        },
        {
          props: ({ ownerState: s }) => s.multiline && s.hiddenLabel,
          style: {
            paddingTop: 16,
            paddingBottom: 17
          }
        },
        {
          props: ({ ownerState: s }) => s.multiline && s.hiddenLabel && s.size === "small",
          style: {
            paddingTop: 8,
            paddingBottom: 9
          }
        }
      ]
    };
  })), Co = P(We, {
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
  }))), It = c.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiFilledInput"
    }), { disableUnderline: i = false, components: u = {}, componentsProps: s, fullWidth: a = false, hiddenLabel: v, inputComponent: y = "input", multiline: h = false, slotProps: I, slots: x = {}, type: w = "text", ...f } = o, M = {
      ...o,
      disableUnderline: i,
      fullWidth: a,
      inputComponent: y,
      multiline: h,
      type: w
    }, m = ho(o), l = {
      root: {
        ownerState: M
      },
      input: {
        ownerState: M
      }
    }, b = I ?? s ? Xe(l, I ?? s) : l, r = x.root ?? u.Root ?? yo, d = x.input ?? u.Input ?? Co;
    return g.jsx(Qe, {
      slots: {
        root: r,
        input: d
      },
      slotProps: b,
      fullWidth: a,
      inputComponent: y,
      multiline: h,
      ref: n,
      type: w,
      ...f,
      classes: m
    });
  });
  It.muiName = "Input";
  const So = (e) => {
    const { classes: t, disableUnderline: n } = e, i = Z({
      root: [
        "root",
        !n && "underline"
      ],
      input: [
        "input"
      ]
    }, mo, t);
    return {
      ...t,
      ...i
    };
  }, xo = P(ze, {
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
            [`&.${Oe.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Oe.error}`]: {
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
            [`&:hover:not(.${Oe.disabled}, .${Oe.error}):before`]: {
              borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${n}`
              }
            },
            [`&.${Oe.disabled}:before`]: {
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
  })), wo = P(We, {
    name: "MuiInput",
    slot: "Input",
    overridesResolver: Ae
  })({}), Rt = c.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiInput"
    }), { disableUnderline: i = false, components: u = {}, componentsProps: s, fullWidth: a = false, inputComponent: v = "input", multiline: y = false, slotProps: h, slots: I = {}, type: x = "text", ...w } = o, f = So(o), m = {
      root: {
        ownerState: {
          disableUnderline: i
        }
      }
    }, l = h ?? s ? Xe(h ?? s, m) : m, b = I.root ?? u.Root ?? xo, r = I.input ?? u.Input ?? wo;
    return g.jsx(Qe, {
      slots: {
        root: b,
        input: r
      },
      slotProps: l,
      fullWidth: a,
      inputComponent: v,
      multiline: y,
      ref: n,
      type: x,
      ...w,
      classes: f
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
    let s = false, a = i(e, t, t ? n : false);
    for (; a; ) {
      if (a === e.firstChild) {
        if (s) return false;
        s = true;
      }
      const v = o ? false : a.disabled || a.getAttribute("aria-disabled") === "true";
      if (!a.hasAttribute("tabindex") || !$t(a, u) || v) a = i(e, a, n);
      else return a.focus(), true;
    }
    return false;
  }
  const Io = c.forwardRef(function(t, n) {
    const { actions: o, autoFocus: i = false, autoFocusItem: u = false, children: s, className: a, disabledItemsFocusable: v = false, disableListWrap: y = false, onKeyDown: h, variant: I = "selectedMenu", ...x } = t, w = c.useRef(null), f = c.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null
    });
    Ne(() => {
      i && w.current.focus();
    }, [
      i
    ]), c.useImperativeHandle(o, () => ({
      adjustStyleForScrollbar: (r, { direction: d }) => {
        const C = !w.current.style.width;
        if (r.clientHeight < w.current.clientHeight && C) {
          const R = `${jt(Ge(r))}px`;
          w.current.style[d === "rtl" ? "paddingLeft" : "paddingRight"] = R, w.current.style.width = `calc(100% + ${R})`;
        }
        return w.current;
      }
    }), []);
    const M = (r) => {
      const d = w.current, C = r.key;
      if (r.ctrlKey || r.metaKey || r.altKey) {
        h && h(r);
        return;
      }
      const j = xt(d).activeElement;
      if (C === "ArrowDown") r.preventDefault(), Fe(d, j, y, v, _e);
      else if (C === "ArrowUp") r.preventDefault(), Fe(d, j, y, v, vt);
      else if (C === "Home") r.preventDefault(), Fe(d, null, y, v, _e);
      else if (C === "End") r.preventDefault(), Fe(d, null, y, v, vt);
      else if (C.length === 1) {
        const $ = f.current, z = C.toLowerCase(), B = performance.now();
        $.keys.length > 0 && (B - $.lastTime > 500 ? ($.keys = [], $.repeating = true, $.previousKeyMatched = true) : $.repeating && z !== $.keys[0] && ($.repeating = false)), $.lastTime = B, $.keys.push(z);
        const N = j && !$.repeating && $t(j, $);
        $.previousKeyMatched && (N || Fe(d, j, false, v, _e, $)) ? r.preventDefault() : $.previousKeyMatched = false;
      }
      h && h(r);
    }, m = we(w, n);
    let l = -1;
    c.Children.forEach(s, (r, d) => {
      if (!c.isValidElement(r)) {
        l === d && (l += 1, l >= s.length && (l = -1));
        return;
      }
      r.props.disabled || (I === "selectedMenu" && r.props.selected || l === -1) && (l = d), l === d && (r.props.disabled || r.props.muiSkipListHighlight || r.type.muiSkipListHighlight) && (l += 1, l >= s.length && (l = -1));
    });
    const b = c.Children.map(s, (r, d) => {
      if (d === l) {
        const C = {};
        return u && (C.autoFocus = true), r.props.tabIndex === void 0 && I === "selectedMenu" && (C.tabIndex = 0), c.cloneElement(r, C);
      }
      return r;
    });
    return g.jsx(ao, {
      role: "menu",
      ref: m,
      className: a,
      onKeyDown: M,
      tabIndex: i ? 0 : -1,
      ...x,
      children: b
    });
  });
  function Ro(e) {
    return se("MuiMenu", e);
  }
  Y("MuiMenu", [
    "root",
    "paper",
    "list"
  ]);
  const $o = {
    vertical: "top",
    horizontal: "right"
  }, Mo = {
    vertical: "top",
    horizontal: "left"
  }, ko = (e) => {
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
    }, Ro, t);
  }, Po = P(Dt, {
    shouldForwardProp: (e) => J(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), Oo = P(Wt, {
    name: "MuiMenu",
    slot: "Paper",
    overridesResolver: (e, t) => t.paper
  })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch"
  }), Fo = P(Io, {
    name: "MuiMenu",
    slot: "List",
    overridesResolver: (e, t) => t.list
  })({
    outline: 0
  }), Lo = c.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiMenu"
    }), { autoFocus: i = true, children: u, className: s, disableAutoFocusItem: a = false, MenuListProps: v = {}, onClose: y, open: h, PaperProps: I = {}, PopoverClasses: x, transitionDuration: w = "auto", TransitionProps: { onEntering: f, ...M } = {}, variant: m = "selectedMenu", slots: l = {}, slotProps: b = {}, ...r } = o, d = At(), C = {
      ...o,
      autoFocus: i,
      disableAutoFocusItem: a,
      MenuListProps: v,
      onEntering: f,
      PaperProps: I,
      transitionDuration: w,
      TransitionProps: M,
      variant: m
    }, R = ko(C), j = i && !a && h, $ = c.useRef(null), z = (S, H) => {
      $.current && $.current.adjustStyleForScrollbar(S, {
        direction: d ? "rtl" : "ltr"
      }), f && f(S, H);
    }, B = (S) => {
      S.key === "Tab" && (S.preventDefault(), y && y(S, "tabKeyDown"));
    };
    let N = -1;
    c.Children.map(u, (S, H) => {
      c.isValidElement(S) && (S.props.disabled || (m === "selectedMenu" && S.props.selected || N === -1) && (N = H));
    });
    const F = {
      slots: l,
      slotProps: {
        list: v,
        transition: M,
        paper: I,
        ...b
      }
    }, E = zt({
      elementType: l.root,
      externalSlotProps: b.root,
      ownerState: C,
      className: [
        R.root,
        s
      ]
    }), [W, ie] = qe("paper", {
      className: R.paper,
      elementType: Oo,
      externalForwardedProps: F,
      shouldForwardComponentProp: true,
      ownerState: C
    }), [me, V] = qe("list", {
      className: re(R.list, v.className),
      elementType: Fo,
      shouldForwardComponentProp: true,
      externalForwardedProps: F,
      getSlotProps: (S) => ({
        ...S,
        onKeyDown: (H) => {
          var _a;
          B(H), (_a = S.onKeyDown) == null ? void 0 : _a.call(S, H);
        }
      }),
      ownerState: C
    }), U = typeof F.slotProps.transition == "function" ? F.slotProps.transition(C) : F.slotProps.transition;
    return g.jsx(Po, {
      onClose: y,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: d ? "right" : "left"
      },
      transformOrigin: d ? $o : Mo,
      slots: {
        root: l.root,
        paper: W,
        backdrop: l.backdrop,
        ...l.transition && {
          transition: l.transition
        }
      },
      slotProps: {
        root: E,
        paper: ie,
        backdrop: typeof b.backdrop == "function" ? b.backdrop(C) : b.backdrop,
        transition: {
          ...U,
          onEntering: (...S) => {
            var _a;
            z(...S), (_a = U == null ? void 0 : U.onEntering) == null ? void 0 : _a.call(U, ...S);
          }
        }
      },
      open: h,
      ref: n,
      transitionDuration: w,
      ownerState: C,
      ...r,
      classes: x,
      children: g.jsx(me, {
        actions: $,
        autoFocus: i && (N === -1 || a),
        autoFocusItem: j,
        variant: m,
        ...V,
        children: u
      })
    });
  });
  function Bo(e) {
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
  ]), No = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.dense && t.dense,
      n.divider && t.divider,
      !n.disableGutters && t.gutters
    ];
  }, To = (e) => {
    const { disabled: t, dense: n, divider: o, disableGutters: i, selected: u, classes: s } = e, v = Z({
      root: [
        "root",
        n && "dense",
        t && "disabled",
        !i && "gutters",
        o && "divider",
        u && "selected"
      ]
    }, Bo, s);
    return {
      ...s,
      ...v
    };
  }, Eo = P(Ut, {
    shouldForwardProp: (e) => J(e) || e === "classes",
    name: "MuiMenuItem",
    slot: "Root",
    overridesResolver: No
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
  }))), jo = c.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiMenuItem"
    }), { autoFocus: i = false, component: u = "li", dense: s = false, divider: a = false, disableGutters: v = false, focusVisibleClassName: y, role: h = "menuitem", tabIndex: I, className: x, ...w } = o, f = c.useContext(ct), M = c.useMemo(() => ({
      dense: s || f.dense || false,
      disableGutters: v
    }), [
      f.dense,
      s,
      v
    ]), m = c.useRef(null);
    Ne(() => {
      i && m.current && m.current.focus();
    }, [
      i
    ]);
    const l = {
      ...o,
      dense: M.dense,
      divider: a,
      disableGutters: v
    }, b = To(o), r = we(m, n);
    let d;
    return o.disabled || (d = I !== void 0 ? I : -1), g.jsx(ct.Provider, {
      value: M,
      children: g.jsx(Eo, {
        ref: r,
        role: h,
        tabIndex: d,
        component: u,
        focusVisibleClassName: re(b.focusVisible, y),
        className: re(b.root, x),
        ...w,
        ownerState: l,
        classes: b
      })
    });
  });
  function Ao(e) {
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
  ]), zo = (e) => {
    const { classes: t, variant: n, disabled: o, multiple: i, open: u, error: s } = e, a = {
      select: [
        "select",
        n,
        o && "disabled",
        i && "multiple",
        s && "error"
      ],
      icon: [
        "icon",
        `icon${ae(n)}`,
        u && "iconOpen",
        o && "disabled"
      ]
    };
    return Z(a, Ao, t);
  }, Mt = P("select", {
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
  })), Wo = P(Mt, {
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
  })({}), kt = P("svg", {
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
  })), Do = P(kt, {
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
  })({}), Uo = c.forwardRef(function(t, n) {
    const { className: o, disabled: i, error: u, IconComponent: s, inputRef: a, variant: v = "standard", ...y } = t, h = {
      ...t,
      disabled: i,
      variant: v,
      error: u
    }, I = zo(h);
    return g.jsxs(c.Fragment, {
      children: [
        g.jsx(Wo, {
          ownerState: h,
          className: re(I.select, o),
          disabled: i,
          ref: a || n,
          ...y
        }),
        t.multiple ? null : g.jsx(Do, {
          as: s,
          ownerState: h,
          className: I.icon
        })
      ]
    });
  });
  var ht;
  const Ho = P("fieldset", {
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
  }), Vo = P("legend", {
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
  function Ko(e) {
    const { children: t, classes: n, className: o, label: i, notched: u, ...s } = e, a = i != null && i !== "", v = {
      ...e,
      notched: u,
      withLabel: a
    };
    return g.jsx(Ho, {
      "aria-hidden": true,
      className: o,
      ownerState: v,
      ...s,
      children: g.jsx(Vo, {
        ownerState: v,
        children: a ? g.jsx("span", {
          children: i
        }) : ht || (ht = g.jsx("span", {
          className: "notranslate",
          "aria-hidden": true,
          children: "\u200B"
        }))
      })
    });
  }
  const _o = (e) => {
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
    }, go, t);
    return {
      ...t,
      ...o
    };
  }, Go = P(ze, {
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
  })), qo = P(Ko, {
    name: "MuiOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (e, t) => t.notchedOutline
  })(q(({ theme: e }) => {
    const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
    };
  })), Xo = P(We, {
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
  }))), Pt = c.forwardRef(function(t, n) {
    const o = fe({
      props: t,
      name: "MuiOutlinedInput"
    }), { components: i = {}, fullWidth: u = false, inputComponent: s = "input", label: a, multiline: v = false, notched: y, slots: h = {}, slotProps: I = {}, type: x = "text", ...w } = o, f = _o(o), M = Je(), m = Ze({
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
    }), l = {
      ...o,
      color: m.color || "primary",
      disabled: m.disabled,
      error: m.error,
      focused: m.focused,
      formControl: M,
      fullWidth: u,
      hiddenLabel: m.hiddenLabel,
      multiline: v,
      size: m.size,
      type: x
    }, b = h.root ?? i.Root ?? Go, r = h.input ?? i.Input ?? Xo, [d, C] = qe("notchedOutline", {
      elementType: qo,
      className: f.notchedOutline,
      shouldForwardComponentProp: true,
      ownerState: l,
      externalForwardedProps: {
        slots: h,
        slotProps: I
      },
      additionalProps: {
        label: a != null && a !== "" && m.required ? g.jsxs(c.Fragment, {
          children: [
            a,
            "\u2009",
            "*"
          ]
        }) : a
      }
    });
    return g.jsx(Qe, {
      slots: {
        root: b,
        input: r
      },
      slotProps: I,
      renderSuffix: (R) => g.jsx(d, {
        ...C,
        notched: typeof y < "u" ? y : !!(R.startAdornment || R.filled || R.focused)
      }),
      fullWidth: u,
      inputComponent: s,
      multiline: v,
      ref: n,
      type: x,
      ...w,
      classes: {
        ...f,
        notchedOutline: null
      }
    });
  });
  Pt.muiName = "Input";
  function Ot(e) {
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
  const Yo = P(Mt, {
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
  }), Zo = P(kt, {
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
  })({}), Jo = P("input", {
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
  function Qo(e) {
    return e == null || typeof e == "string" && !e.trim();
  }
  const en = (e) => {
    const { classes: t, variant: n, disabled: o, multiple: i, open: u, error: s } = e, a = {
      select: [
        "select",
        n,
        o && "disabled",
        i && "multiple",
        s && "error"
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
    return Z(a, Ot, t);
  }, tn = c.forwardRef(function(t, n) {
    var _a;
    const { "aria-describedby": o, "aria-label": i, autoFocus: u, autoWidth: s, children: a, className: v, defaultOpen: y, defaultValue: h, disabled: I, displayEmpty: x, error: w = false, IconComponent: f, inputRef: M, labelId: m, MenuProps: l = {}, multiple: b, name: r, onBlur: d, onChange: C, onClose: R, onFocus: j, onOpen: $, open: z, readOnly: B, renderValue: N, required: F, SelectDisplayProps: E = {}, tabIndex: W, type: ie, value: me, variant: V = "standard", ...U } = t, [S, H] = at({
      controlled: me,
      default: h,
      name: "Select"
    }), [Ie, Te] = at({
      controlled: z,
      default: y,
      name: "Select"
    }), Q = c.useRef(null), K = c.useRef(null), [le, De] = c.useState(null), { current: ee } = c.useRef(z != null), [Re, X] = c.useState(), Ue = we(n, M), He = c.useCallback((p) => {
      K.current = p, p && De(p);
    }, []), te = le == null ? void 0 : le.parentNode;
    c.useImperativeHandle(Ue, () => ({
      focus: () => {
        K.current.focus();
      },
      node: Q.current,
      value: S
    }), [
      S
    ]), c.useEffect(() => {
      y && Ie && le && !ee && (X(s ? null : te.clientWidth), K.current.focus());
    }, [
      le,
      s
    ]), c.useEffect(() => {
      u && K.current.focus();
    }, [
      u
    ]), c.useEffect(() => {
      if (!m) return;
      const p = xt(K.current).getElementById(m);
      if (p) {
        const k = () => {
          getSelection().isCollapsed && K.current.focus();
        };
        return p.addEventListener("click", k), () => {
          p.removeEventListener("click", k);
        };
      }
    }, [
      m
    ]);
    const oe = (p, k) => {
      p ? $ && $(k) : R && R(k), ee || (X(s ? null : te.clientWidth), Te(p));
    }, L = (p) => {
      p.button === 0 && (p.preventDefault(), K.current.focus(), oe(true, p));
    }, D = (p) => {
      oe(false, p);
    }, ge = c.Children.toArray(a), $e = (p) => {
      const k = ge.find((T) => T.props.value === p.target.value);
      k !== void 0 && (H(k.props.value), C && C(p, k));
    }, de = (p) => (k) => {
      let T;
      if (k.currentTarget.hasAttribute("tabindex")) {
        if (b) {
          T = Array.isArray(S) ? S.slice() : [];
          const Se = S.indexOf(p.props.value);
          Se === -1 ? T.push(p.props.value) : T.splice(Se, 1);
        } else T = p.props.value;
        if (p.props.onClick && p.props.onClick(k), S !== T && (H(T), C)) {
          const Se = k.nativeEvent || k, ot = new Se.constructor(Se.type, Se);
          Object.defineProperty(ot, "target", {
            writable: true,
            value: {
              value: T,
              name: r
            }
          }), C(ot, p);
        }
        b || oe(false, k);
      }
    }, Ve = (p) => {
      B || [
        " ",
        "ArrowUp",
        "ArrowDown",
        "Enter"
      ].includes(p.key) && (p.preventDefault(), oe(true, p));
    }, ce = le !== null && Ie, Ke = (p) => {
      !ce && d && (Object.defineProperty(p, "target", {
        writable: true,
        value: {
          value: S,
          name: r
        }
      }), d(p));
    };
    delete U["aria-invalid"];
    let ne, be;
    const A = [];
    let ve = false;
    (wt({
      value: S
    }) || x) && (N ? ne = N(S) : ve = true);
    const Me = ge.map((p) => {
      if (!c.isValidElement(p)) return null;
      let k;
      if (b) {
        if (!Array.isArray(S)) throw new Error(St(2));
        k = S.some((T) => Ct(T, p.props.value)), k && ve && A.push(p.props.children);
      } else k = Ct(S, p.props.value), k && ve && (be = p.props.children);
      return c.cloneElement(p, {
        "aria-selected": k ? "true" : "false",
        onClick: de(p),
        onKeyUp: (T) => {
          T.key === " " && T.preventDefault(), p.props.onKeyUp && p.props.onKeyUp(T);
        },
        role: "option",
        selected: k,
        value: void 0,
        "data-value": p.props.value
      });
    });
    ve && (b ? A.length === 0 ? ne = null : ne = A.reduce((p, k, T) => (p.push(k), T < A.length - 1 && p.push(", "), p), []) : ne = be);
    let ke = Re;
    !s && ee && le && (ke = te.clientWidth);
    let he;
    typeof W < "u" ? he = W : he = I ? null : 0;
    const ye = E.id || (r ? `mui-component-select-${r}` : void 0), ue = {
      ...t,
      variant: V,
      value: S,
      open: ce,
      error: w
    }, O = en(ue), Ce = {
      ...l.PaperProps,
      ...(_a = l.slotProps) == null ? void 0 : _a.paper
    }, Pe = Ht();
    return g.jsxs(c.Fragment, {
      children: [
        g.jsx(Yo, {
          as: "div",
          ref: He,
          tabIndex: he,
          role: "combobox",
          "aria-controls": ce ? Pe : void 0,
          "aria-disabled": I ? "true" : void 0,
          "aria-expanded": ce ? "true" : "false",
          "aria-haspopup": "listbox",
          "aria-label": i,
          "aria-labelledby": [
            m,
            ye
          ].filter(Boolean).join(" ") || void 0,
          "aria-describedby": o,
          "aria-required": F ? "true" : void 0,
          "aria-invalid": w ? "true" : void 0,
          onKeyDown: Ve,
          onMouseDown: I || B ? null : L,
          onBlur: Ke,
          onFocus: j,
          ...E,
          ownerState: ue,
          className: re(E.className, O.select, v),
          id: ye,
          children: Qo(ne) ? yt || (yt = g.jsx("span", {
            className: "notranslate",
            "aria-hidden": true,
            children: "\u200B"
          })) : ne
        }),
        g.jsx(Jo, {
          "aria-invalid": w,
          value: Array.isArray(S) ? S.join(",") : S,
          name: r,
          ref: Q,
          "aria-hidden": true,
          onChange: $e,
          tabIndex: -1,
          disabled: I,
          className: O.nativeInput,
          autoFocus: u,
          required: F,
          ...U,
          ownerState: ue
        }),
        g.jsx(Zo, {
          as: f,
          className: O.icon,
          ownerState: ue
        }),
        g.jsx(Lo, {
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
          ...l,
          slotProps: {
            ...l.slotProps,
            list: {
              "aria-labelledby": m,
              role: "listbox",
              "aria-multiselectable": b ? "true" : void 0,
              disableListWrap: true,
              id: Pe,
              ...l.MenuListProps
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
  }), on = (e) => {
    const { classes: t } = e, o = Z({
      root: [
        "root"
      ]
    }, Ot, t);
    return {
      ...t,
      ...o
    };
  }, tt = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => J(e) && e !== "variant",
    slot: "Root"
  }, nn = P(Rt, tt)(""), rn = P(Pt, tt)(""), an = P(It, tt)(""), Ft = c.forwardRef(function(t, n) {
    const o = fe({
      name: "MuiSelect",
      props: t
    }), { autoWidth: i = false, children: u, classes: s = {}, className: a, defaultOpen: v = false, displayEmpty: y = false, IconComponent: h = vo, id: I, input: x, inputProps: w, label: f, labelId: M, MenuProps: m, multiple: l = false, native: b = false, onClose: r, onOpen: d, open: C, renderValue: R, SelectDisplayProps: j, variant: $ = "outlined", ...z } = o, B = b ? Uo : tn, N = Je(), F = Ze({
      props: o,
      muiFormControl: N,
      states: [
        "variant",
        "error"
      ]
    }), E = F.variant || $, W = {
      ...o,
      variant: E,
      classes: s
    }, ie = on(W), { root: me, ...V } = ie, U = x || {
      standard: g.jsx(nn, {
        ownerState: W
      }),
      outlined: g.jsx(rn, {
        label: f,
        ownerState: W
      }),
      filled: g.jsx(an, {
        ownerState: W
      })
    }[E], S = we(n, Kt(U));
    return g.jsx(c.Fragment, {
      children: c.cloneElement(U, {
        inputComponent: B,
        inputProps: {
          children: u,
          error: F.error,
          IconComponent: h,
          variant: E,
          type: void 0,
          multiple: l,
          ...b ? {
            id: I
          } : {
            autoWidth: i,
            defaultOpen: v,
            displayEmpty: y,
            labelId: M,
            MenuProps: m,
            onClose: r,
            onOpen: d,
            open: C,
            renderValue: R,
            SelectDisplayProps: {
              id: I,
              ...j
            }
          },
          ...w,
          classes: w ? Xe(V, w.classes) : V,
          ...x ? x.props.inputProps : {}
        },
        ...(l && b || y) && E === "outlined" ? {
          notched: true
        } : {},
        ref: S,
        className: re(U.props.className, a, ie.root),
        ...!x && {
          variant: E
        },
        ...z
      })
    });
  });
  Ft.muiName = "Select";
  const sn = () => [
    {
      type: "custom",
      component: () => g.jsx(st, {
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
      component: () => g.jsx(st, {
        dividerText: "arrow"
      })
    },
    {
      name: "arrowColor",
      label: "arrow_color",
      type: "color"
    }
  ];
  function ln() {
    const e = c.useRef(null), { width: t } = Gt(e == null ? void 0 : e.current), n = c.useContext(qt), { widget: o, theme: i } = n, u = o.data.cidObject, s = o.data.oidObject, { data: a, states: v } = Xt("oid"), { value: y, updateValue: h } = it("oid"), { updateValue: I } = it("cid"), x = s == null ? void 0 : s.type, w = x === "boolean" || x === "number" || x === "string" || x === "mixed", f = v.findIndex((m) => String(m.value) === String(y)), M = (m) => {
      const l = m.target.value, r = v[l].value;
      u && I(r), h(r);
    };
    return g.jsxs(Yt, {
      isValidType: w,
      data: a,
      oidValue: y,
      children: [
        g.jsx(Zt, {
          data: a,
          widget: o
        }),
        g.jsx(lt, {
          ref: e,
          sx: {
            overflow: "auto",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: g.jsx(Ft, {
            variant: "standard",
            disableUnderline: true,
            value: f !== -1 ? f : "",
            onChange: M,
            MenuProps: {
              sx: {
                maxWidth: t
              },
              MenuListProps: {
                sx: {
                  background: a.backgroundColor ? G(a.backgroundColor, 0.7) : a.background
                }
              }
            },
            sx: {
              width: "100%",
              height: "100%",
              maxWidth: `calc(${t}px - 10%)`,
              "& .MuiSelect-select": {
                backgroundColor: G(f !== -1 ? o.data[`iconSmall${f + 1}`] || o.data[`icon${f + 1}`] || o.data.iconSmall || o.data.icon ? o.data[`iconColor${f + 1}`] || o.data.iconColor || a.iconColor || i.palette.primary.main : o.data[`textColor${f + 1}`] || o.data.textColor || a.textColor || i.palette.primary.main : o.data.iconColor || a.textColor || i.palette.primary.main, 0.15),
                paddingLeft: 1
              },
              "& .MuiSelect-icon": {
                color: f !== -1 ? o.data[`iconSmall${f + 1}`] || o.data[`icon${f + 1}`] || o.data.iconSmall || o.data.icon ? o.data[`iconColor${f + 1}`] || o.data.iconColor || a.iconColor || i.palette.primary.main : o.data[`textColor${f + 1}`] || o.data.textColor || a.textColor || i.palette.primary.main : o.data.arrowColor || o.data.iconColor || a.textColor || i.palette.primary.main
              },
              "&.Mui-focused": {
                ariaHidden: "true",
                "& .MuiSelect-select": {
                  backgroundColor: G(f !== -1 ? o.data[`iconSmall${f + 1}`] || o.data[`icon${f + 1}`] || o.data.iconSmall || o.data.icon ? o.data[`iconColor${f + 1}`] || o.data.iconColor || a.iconColor || i.palette.primary.main : o.data[`textColor${f + 1}`] || o.data.textColor || a.textColor || i.palette.primary.main : o.data.iconColor || a.textColor || i.palette.primary.main, 0.2),
                  paddingLeft: 1
                }
              }
            },
            children: v.map((m, l) => {
              var _a;
              const b = o.data[`iconSmall${l + 1}`] || o.data[`icon${l + 1}`] || o.data.iconSmall || o.data.icon, d = b ? o.data[`iconColor${l + 1}`] || o.data.iconColor || a.iconColor || i.palette.primary.main : o.data[`textColor${l + 1}`] || o.data.textColor || a.textColor || i.palette.primary.main;
              return g.jsx(jo, {
                value: l,
                sx: {
                  "& .MuiTouchRipple-root": {
                    color: d
                  },
                  "&.Mui-selected": {
                    backgroundColor: G(d, 0.16)
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: G(d, 0.24)
                  },
                  "&:hover": {
                    backgroundColor: G(d, 0.08)
                  },
                  background: o.data[`backgroundColor${l + 1}`] && `${o.data[`backgroundColor${l + 1}`]}!important` || `${o.data[`background${l + 1}`]}!important`
                },
                children: g.jsxs(io, {
                  direction: "row",
                  spacing: b ? 1 : 0,
                  sx: {
                    alignItems: "center"
                  },
                  children: [
                    g.jsx(ro, {
                      alt: "",
                      src: typeof b == "string" ? b : typeof b == "number" ? b.toString() : void 0,
                      style: {
                        position: "relative",
                        top: `calc(0px - ${o.data[`iconYOffset${l + 1}`]})`,
                        right: `calc(0px - ${o.data[`iconXOffset${l + 1}`]})`,
                        height: !b && "0px" || (typeof o.data[`iconSize${l + 1}`] == "number" ? `calc(24px * ${o.data[`iconSize${l + 1}`]} / 100)` : typeof o.data.iconSize == "number" ? `calc(24px * ${o.data.iconSize} / 100)` : "24px"),
                        ...Jt(typeof b == "string" ? b : typeof b == "number" ? b.toString() : void 0, String(y) === String(o.data[`value${l + 1}`]) && o.data.iconColorActive || o.data[`iconColor${l + 1}`] || o.data.iconColor || a.iconColor || i.palette.primary.main)
                      }
                    }),
                    g.jsx(Qt, {
                      component: lt,
                      variant: "subtitle2",
                      sx: {
                        whiteSpace: "pre-wrap",
                        fontSize: o.data[`valueSize${l + 1}`] || a.valueSize,
                        textAlign: "left",
                        bgcolor: "transparent",
                        color: o.data[`textColor${l + 1}`] || o.data.textColor || a.textColor || i.palette.primary.main,
                        textTransform: "none",
                        width: "100%",
                        height: "100%",
                        flexGrow: 1,
                        alignContent: "center"
                      },
                      contentEditable: "false",
                      dangerouslySetInnerHTML: {
                        __html: o.data[`alias${l + 1}`] && ((_a = o.data[`alias${l + 1}`]) == null ? void 0 : _a.replace(/(\r\n|\n|\r)/gm, "")) || o.data[`value${l + 1}`] && `${o.data[`value${l + 1}`]}${s == null ? void 0 : s.unit}` || ""
                      }
                    })
                  ]
                })
              }, String(m.value));
            })
          })
        })
      ]
    });
  }
  Lt = class extends eo {
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
              ...to([
                "boolean",
                "number",
                "string",
                "mixed"
              ]),
              ...oo(),
              ...sn()
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, no(this.wrapContent(g.jsx(ln, {})), n);
    }
  };
});
export {
  __tla,
  Lt as default
};
