import { v as y, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as ue, a as fe, u as ve, au as $o, av as Ro, N as Pt, H as Qe, c as et, j as m, s as U, d as G, e as ge, aw as Mt, m as re, ax as Qt, k as X, P as Jt, B as yt, q as ye, I as _t, x as D, Q as kt, p as It, y as Te, E as jt, ay as So, b as Dt, az as Oo, R as eo, f as te, T as to, r as To, U as Ao, D as Lt, C as Eo, O as Mo, aA as ko, ak as zt, ag as Io, l as Ye, G as jo, ah as Do, ai as Lo, __tla as __tla_1 } from "./usePopoverPositioning-CABAc1cn.js";
let Gn, Zn, ea, ta, _n, Jn, Qn, oa, Yn, Xn, Kn, Hn;
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
  })()
]).then(async () => {
  function zo(e) {
    return ue("MuiCollapse", e);
  }
  fe("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const Bo = (e) => {
    const { orientation: t, classes: o } = e, r = {
      root: [
        "root",
        `${t}`
      ],
      entered: [
        "entered"
      ],
      hidden: [
        "hidden"
      ],
      wrapper: [
        "wrapper",
        `${t}`
      ],
      wrapperInner: [
        "wrapperInner",
        `${t}`
      ]
    };
    return ge(r, zo, o);
  }, Wo = U("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        t[o.orientation],
        o.state === "entered" && t.entered,
        o.state === "exited" && !o.in && o.collapsedSize === "0px" && t.hidden
      ];
    }
  })(re(({ theme: e }) => ({
    height: 0,
    overflow: "hidden",
    transition: e.transitions.create("height"),
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          height: "auto",
          width: 0,
          transition: e.transitions.create("width")
        }
      },
      {
        props: {
          state: "entered"
        },
        style: {
          height: "auto",
          overflow: "visible"
        }
      },
      {
        props: {
          state: "entered",
          orientation: "horizontal"
        },
        style: {
          width: "auto"
        }
      },
      {
        props: ({ ownerState: t }) => t.state === "exited" && !t.in && t.collapsedSize === "0px",
        style: {
          visibility: "hidden"
        }
      }
    ]
  }))), No = U("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (e, t) => t.wrapper
  })({
    display: "flex",
    width: "100%",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          width: "auto",
          height: "100%"
        }
      }
    ]
  }), Fo = U("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (e, t) => t.wrapperInner
  })({
    width: "100%",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          width: "auto",
          height: "100%"
        }
      }
    ]
  }), bt = y.forwardRef(function(t, o) {
    const r = ve({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: n, children: i, className: l, collapsedSize: a = "0px", component: s, easing: c, in: p, onEnter: f, onEntered: R, onEntering: u, onExit: b, onExited: v, onExiting: x, orientation: g = "vertical", style: C, timeout: w = $o.standard, TransitionComponent: d = Ro, ...P } = r, h = {
      ...r,
      orientation: g,
      collapsedSize: a
    }, S = Bo(h), M = Pt(), k = Qe(), $ = y.useRef(null), O = y.useRef(), B = typeof a == "number" ? `${a}px` : a, A = g === "horizontal", z = A ? "width" : "height", F = y.useRef(null), L = et(o, F), I = (T) => (q) => {
      if (T) {
        const N = F.current;
        q === void 0 ? T(N) : T(N, q);
      }
    }, V = () => $.current ? $.current[A ? "clientWidth" : "clientHeight"] : 0, W = I((T, q) => {
      $.current && A && ($.current.style.position = "absolute"), T.style[z] = B, f && f(T, q);
    }), _ = I((T, q) => {
      const N = V();
      $.current && A && ($.current.style.position = "");
      const { duration: ee, easing: we } = Mt({
        style: C,
        timeout: w,
        easing: c
      }, {
        mode: "enter"
      });
      if (w === "auto") {
        const me = M.transitions.getAutoHeightDuration(N);
        T.style.transitionDuration = `${me}ms`, O.current = me;
      } else T.style.transitionDuration = typeof ee == "string" ? ee : `${ee}ms`;
      T.style[z] = `${N}px`, T.style.transitionTimingFunction = we, u && u(T, q);
    }), be = I((T, q) => {
      T.style[z] = "auto", R && R(T, q);
    }), ie = I((T) => {
      T.style[z] = `${V()}px`, b && b(T);
    }), xe = I(v), Q = I((T) => {
      const q = V(), { duration: N, easing: ee } = Mt({
        style: C,
        timeout: w,
        easing: c
      }, {
        mode: "exit"
      });
      if (w === "auto") {
        const we = M.transitions.getAutoHeightDuration(q);
        T.style.transitionDuration = `${we}ms`, O.current = we;
      } else T.style.transitionDuration = typeof N == "string" ? N : `${N}ms`;
      T.style[z] = B, T.style.transitionTimingFunction = ee, x && x(T);
    }), Y = (T) => {
      w === "auto" && k.start(O.current || 0, T), n && n(F.current, T);
    };
    return m.jsx(d, {
      in: p,
      onEnter: W,
      onEntered: be,
      onEntering: _,
      onExit: ie,
      onExited: xe,
      onExiting: Q,
      addEndListener: Y,
      nodeRef: F,
      timeout: w === "auto" ? null : w,
      ...P,
      children: (T, { ownerState: q, ...N }) => m.jsx(Wo, {
        as: s,
        className: G(S.root, l, {
          entered: S.entered,
          exited: !p && B === "0px" && S.hidden
        }[T]),
        style: {
          [A ? "minWidth" : "minHeight"]: B,
          ...C
        },
        ref: L,
        ownerState: {
          ...h,
          state: T
        },
        ...N,
        children: m.jsx(No, {
          ownerState: {
            ...h,
            state: T
          },
          className: S.wrapper,
          ref: $,
          children: m.jsx(Fo, {
            ownerState: {
              ...h,
              state: T
            },
            className: S.wrapperInner,
            children: i
          })
        })
      })
    });
  });
  bt && (bt.muiSupportAuto = true);
  const oo = y.createContext({});
  function Vo(e) {
    return ue("MuiAccordion", e);
  }
  let pt, Ho, Uo, qo;
  pt = fe("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]);
  Ho = (e) => {
    const { classes: t, square: o, expanded: r, disabled: n, disableGutters: i } = e;
    return ge({
      root: [
        "root",
        !o && "rounded",
        r && "expanded",
        n && "disabled",
        !i && "gutters"
      ],
      heading: [
        "heading"
      ],
      region: [
        "region"
      ]
    }, Vo, t);
  };
  Uo = U(Jt, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        {
          [`& .${pt.region}`]: t.region
        },
        t.root,
        !o.square && t.rounded,
        !o.disableGutters && t.gutters
      ];
    }
  })(re(({ theme: e }) => {
    const t = {
      duration: e.transitions.duration.shortest
    };
    return {
      position: "relative",
      transition: e.transitions.create([
        "margin"
      ], t),
      overflowAnchor: "none",
      "&::before": {
        position: "absolute",
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: (e.vars || e).palette.divider,
        transition: e.transitions.create([
          "opacity",
          "background-color"
        ], t)
      },
      "&:first-of-type": {
        "&::before": {
          display: "none"
        }
      },
      [`&.${pt.expanded}`]: {
        "&::before": {
          opacity: 0
        },
        "&:first-of-type": {
          marginTop: 0
        },
        "&:last-of-type": {
          marginBottom: 0
        },
        "& + &": {
          "&::before": {
            display: "none"
          }
        }
      },
      [`&.${pt.disabled}`]: {
        backgroundColor: (e.vars || e).palette.action.disabledBackground
      }
    };
  }), re(({ theme: e }) => ({
    variants: [
      {
        props: (t) => !t.square,
        style: {
          borderRadius: 0,
          "&:first-of-type": {
            borderTopLeftRadius: (e.vars || e).shape.borderRadius,
            borderTopRightRadius: (e.vars || e).shape.borderRadius
          },
          "&:last-of-type": {
            borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
            borderBottomRightRadius: (e.vars || e).shape.borderRadius,
            "@supports (-ms-ime-align: auto)": {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            }
          }
        }
      },
      {
        props: (t) => !t.disableGutters,
        style: {
          [`&.${pt.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  })));
  qo = U("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (e, t) => t.heading
  })({
    all: "unset"
  });
  Gn = y.forwardRef(function(t, o) {
    const r = ve({
      props: t,
      name: "MuiAccordion"
    }), { children: n, className: i, defaultExpanded: l = false, disabled: a = false, disableGutters: s = false, expanded: c, onChange: p, square: f = false, slots: R = {}, slotProps: u = {}, TransitionComponent: b, TransitionProps: v, ...x } = r, [g, C] = Qt({
      controlled: c,
      default: l,
      name: "Accordion",
      state: "expanded"
    }), w = y.useCallback((V) => {
      C(!g), p && p(V, !g);
    }, [
      g,
      p,
      C
    ]), [d, ...P] = y.Children.toArray(n), h = y.useMemo(() => ({
      expanded: g,
      disabled: a,
      disableGutters: s,
      toggle: w
    }), [
      g,
      a,
      s,
      w
    ]), S = {
      ...r,
      square: f,
      disabled: a,
      disableGutters: s,
      expanded: g
    }, M = Ho(S), k = {
      transition: b,
      ...R
    }, $ = {
      transition: v,
      ...u
    }, O = {
      slots: k,
      slotProps: $
    }, [B, A] = X("root", {
      elementType: Uo,
      externalForwardedProps: {
        ...O,
        ...x
      },
      className: G(M.root, i),
      shouldForwardComponentProp: true,
      ownerState: S,
      ref: o,
      additionalProps: {
        square: f
      }
    }), [z, F] = X("heading", {
      elementType: qo,
      externalForwardedProps: O,
      className: M.heading,
      ownerState: S
    }), [L, I] = X("transition", {
      elementType: bt,
      externalForwardedProps: O,
      ownerState: S
    });
    return m.jsxs(B, {
      ...A,
      children: [
        m.jsx(z, {
          ...F,
          children: m.jsx(oo.Provider, {
            value: h,
            children: d
          })
        }),
        m.jsx(L, {
          in: g,
          timeout: "auto",
          ...I,
          children: m.jsx("div", {
            "aria-labelledby": d.props.id,
            id: d.props["aria-controls"],
            role: "region",
            className: M.region,
            children: P
          })
        })
      ]
    });
  });
  function Go(e) {
    return ue("MuiAccordionDetails", e);
  }
  fe("MuiAccordionDetails", [
    "root"
  ]);
  let Xo, Yo;
  Xo = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "root"
      ]
    }, Go, t);
  };
  Yo = U("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(re(({ theme: e }) => ({
    padding: e.spacing(1, 2, 2)
  })));
  Xn = y.forwardRef(function(t, o) {
    const r = ve({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: n, ...i } = r, l = r, a = Xo(l);
    return m.jsx(Yo, {
      className: G(a.root, n),
      ref: o,
      ownerState: l,
      ...i
    });
  });
  function Ko(e) {
    return ue("MuiAccordionSummary", e);
  }
  let De, Zo, Qo, Jo, _o;
  De = fe("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]);
  Zo = (e) => {
    const { classes: t, expanded: o, disabled: r, disableGutters: n } = e;
    return ge({
      root: [
        "root",
        o && "expanded",
        r && "disabled",
        !n && "gutters"
      ],
      focusVisible: [
        "focusVisible"
      ],
      content: [
        "content",
        o && "expanded",
        !n && "contentGutters"
      ],
      expandIconWrapper: [
        "expandIconWrapper",
        o && "expanded"
      ]
    }, Ko, t);
  };
  Qo = U(yt, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })(re(({ theme: e }) => {
    const t = {
      duration: e.transitions.duration.shortest
    };
    return {
      display: "flex",
      width: "100%",
      minHeight: 48,
      padding: e.spacing(0, 2),
      transition: e.transitions.create([
        "min-height",
        "background-color"
      ], t),
      [`&.${De.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus
      },
      [`&.${De.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      },
      [`&:hover:not(.${De.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (o) => !o.disableGutters,
          style: {
            [`&.${De.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  }));
  Jo = U("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (e, t) => t.content
  })(re(({ theme: e }) => ({
    display: "flex",
    textAlign: "start",
    flexGrow: 1,
    margin: "12px 0",
    variants: [
      {
        props: (t) => !t.disableGutters,
        style: {
          transition: e.transitions.create([
            "margin"
          ], {
            duration: e.transitions.duration.shortest
          }),
          [`&.${De.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  })));
  _o = U("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (e, t) => t.expandIconWrapper
  })(re(({ theme: e }) => ({
    display: "flex",
    color: (e.vars || e).palette.action.active,
    transform: "rotate(0deg)",
    transition: e.transitions.create("transform", {
      duration: e.transitions.duration.shortest
    }),
    [`&.${De.expanded}`]: {
      transform: "rotate(180deg)"
    }
  })));
  Yn = y.forwardRef(function(t, o) {
    const r = ve({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: n, className: i, expandIcon: l, focusVisibleClassName: a, onClick: s, slots: c, slotProps: p, ...f } = r, { disabled: R = false, disableGutters: u, expanded: b, toggle: v } = y.useContext(oo), x = ($) => {
      v && v($), s && s($);
    }, g = {
      ...r,
      expanded: b,
      disabled: R,
      disableGutters: u
    }, C = Zo(g), w = {
      slots: c,
      slotProps: p
    }, [d, P] = X("root", {
      ref: o,
      shouldForwardComponentProp: true,
      className: G(C.root, i),
      elementType: Qo,
      externalForwardedProps: {
        ...w,
        ...f
      },
      ownerState: g,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: R,
        "aria-expanded": b,
        focusVisibleClassName: G(C.focusVisible, a)
      },
      getSlotProps: ($) => ({
        ...$,
        onClick: (O) => {
          var _a;
          (_a = $.onClick) == null ? void 0 : _a.call($, O), x(O);
        }
      })
    }), [h, S] = X("content", {
      className: C.content,
      elementType: Jo,
      externalForwardedProps: w,
      ownerState: g
    }), [M, k] = X("expandIconWrapper", {
      className: C.expandIconWrapper,
      elementType: _o,
      externalForwardedProps: w,
      ownerState: g
    });
    return m.jsxs(d, {
      ...P,
      children: [
        m.jsx(h, {
          ...S,
          children: n
        }),
        l && m.jsx(M, {
          ...k,
          children: l
        })
      ]
    });
  });
  function er(e) {
    return ue("MuiAlert", e);
  }
  let Bt, tr, or, rr, nr, ar, ir, sr, lr, pr, cr, Wt;
  Bt = fe("MuiAlert", [
    "root",
    "action",
    "icon",
    "message",
    "filled",
    "colorSuccess",
    "colorInfo",
    "colorWarning",
    "colorError",
    "filledSuccess",
    "filledInfo",
    "filledWarning",
    "filledError",
    "outlined",
    "outlinedSuccess",
    "outlinedInfo",
    "outlinedWarning",
    "outlinedError",
    "standard",
    "standardSuccess",
    "standardInfo",
    "standardWarning",
    "standardError"
  ]);
  tr = ye(m.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined");
  or = ye(m.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined");
  rr = ye(m.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline");
  nr = ye(m.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined");
  ar = ye(m.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close");
  ir = (e) => {
    const { variant: t, color: o, severity: r, classes: n } = e, i = {
      root: [
        "root",
        `color${D(o || r)}`,
        `${t}${D(o || r)}`,
        `${t}`
      ],
      icon: [
        "icon"
      ],
      message: [
        "message"
      ],
      action: [
        "action"
      ]
    };
    return ge(i, er, n);
  };
  sr = U(Jt, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        t[o.variant],
        t[`${o.variant}${D(o.color || o.severity)}`]
      ];
    }
  })(re(({ theme: e }) => {
    const t = e.palette.mode === "light" ? kt : It, o = e.palette.mode === "light" ? It : kt;
    return {
      ...e.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(e.palette).filter(Te([
          "light"
        ])).map(([r]) => ({
          props: {
            colorSeverity: r,
            variant: "standard"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
            backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : o(e.palette[r].light, 0.9),
            [`& .${Bt.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${r}IconColor`]
            } : {
              color: e.palette[r].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Te([
          "light"
        ])).map(([r]) => ({
          props: {
            colorSeverity: r,
            variant: "outlined"
          },
          style: {
            color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
            border: `1px solid ${(e.vars || e).palette[r].light}`,
            [`& .${Bt.icon}`]: e.vars ? {
              color: e.vars.palette.Alert[`${r}IconColor`]
            } : {
              color: e.palette[r].main
            }
          }
        })),
        ...Object.entries(e.palette).filter(Te([
          "dark"
        ])).map(([r]) => ({
          props: {
            colorSeverity: r,
            variant: "filled"
          },
          style: {
            fontWeight: e.typography.fontWeightMedium,
            ...e.vars ? {
              color: e.vars.palette.Alert[`${r}FilledColor`],
              backgroundColor: e.vars.palette.Alert[`${r}FilledBg`]
            } : {
              backgroundColor: e.palette.mode === "dark" ? e.palette[r].dark : e.palette[r].main,
              color: e.palette.getContrastText(e.palette[r].main)
            }
          }
        }))
      ]
    };
  }));
  lr = U("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (e, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  });
  pr = U("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (e, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  });
  cr = U("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (e, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  });
  Wt = {
    success: m.jsx(tr, {
      fontSize: "inherit"
    }),
    warning: m.jsx(or, {
      fontSize: "inherit"
    }),
    error: m.jsx(rr, {
      fontSize: "inherit"
    }),
    info: m.jsx(nr, {
      fontSize: "inherit"
    })
  };
  Kn = y.forwardRef(function(t, o) {
    const r = ve({
      props: t,
      name: "MuiAlert"
    }), { action: n, children: i, className: l, closeText: a = "Close", color: s, components: c = {}, componentsProps: p = {}, icon: f, iconMapping: R = Wt, onClose: u, role: b = "alert", severity: v = "success", slotProps: x = {}, slots: g = {}, variant: C = "standard", ...w } = r, d = {
      ...r,
      color: s,
      severity: v,
      variant: C,
      colorSeverity: s || v
    }, P = ir(d), h = {
      slots: {
        closeButton: c.CloseButton,
        closeIcon: c.CloseIcon,
        ...g
      },
      slotProps: {
        ...p,
        ...x
      }
    }, [S, M] = X("root", {
      ref: o,
      shouldForwardComponentProp: true,
      className: G(P.root, l),
      elementType: sr,
      externalForwardedProps: {
        ...h,
        ...w
      },
      ownerState: d,
      additionalProps: {
        role: b,
        elevation: 0
      }
    }), [k, $] = X("icon", {
      className: P.icon,
      elementType: lr,
      externalForwardedProps: h,
      ownerState: d
    }), [O, B] = X("message", {
      className: P.message,
      elementType: pr,
      externalForwardedProps: h,
      ownerState: d
    }), [A, z] = X("action", {
      className: P.action,
      elementType: cr,
      externalForwardedProps: h,
      ownerState: d
    }), [F, L] = X("closeButton", {
      elementType: _t,
      externalForwardedProps: h,
      ownerState: d
    }), [I, V] = X("closeIcon", {
      elementType: ar,
      externalForwardedProps: h,
      ownerState: d
    });
    return m.jsxs(S, {
      ...M,
      children: [
        f !== false ? m.jsx(k, {
          ...$,
          children: f || R[v] || Wt[v]
        }) : null,
        m.jsx(O, {
          ...B,
          children: i
        }),
        n != null ? m.jsx(A, {
          ...z,
          children: n
        }) : null,
        n == null && u ? m.jsx(A, {
          ...z,
          children: m.jsx(F, {
            size: "small",
            "aria-label": a,
            title: a,
            color: "inherit",
            onClick: u,
            ...L,
            children: m.jsx(I, {
              fontSize: "small",
              ...V
            })
          })
        }) : null
      ]
    });
  });
  var K = "top", ne = "bottom", ae = "right", Z = "left", $t = "auto", rt = [
    K,
    ne,
    ae,
    Z
  ], Le = "start", tt = "end", dr = "clippingParents", ro = "viewport", Ke = "popper", ur = "reference", Nt = rt.reduce(function(e, t) {
    return e.concat([
      t + "-" + Le,
      t + "-" + tt
    ]);
  }, []), no = [].concat(rt, [
    $t
  ]).reduce(function(e, t) {
    return e.concat([
      t,
      t + "-" + Le,
      t + "-" + tt
    ]);
  }, []), fr = "beforeRead", vr = "read", gr = "afterRead", mr = "beforeMain", hr = "main", yr = "afterMain", br = "beforeWrite", xr = "write", wr = "afterWrite", Cr = [
    fr,
    vr,
    gr,
    mr,
    hr,
    yr,
    br,
    xr,
    wr
  ];
  function de(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
  }
  function J(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
      var t = e.ownerDocument;
      return t && t.defaultView || window;
    }
    return e;
  }
  function Ee(e) {
    var t = J(e).Element;
    return e instanceof t || e instanceof Element;
  }
  function oe(e) {
    var t = J(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
  }
  function Rt(e) {
    if (typeof ShadowRoot > "u") return false;
    var t = J(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
  }
  function Pr(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(o) {
      var r = t.styles[o] || {}, n = t.attributes[o] || {}, i = t.elements[o];
      !oe(i) || !de(i) || (Object.assign(i.style, r), Object.keys(n).forEach(function(l) {
        var a = n[l];
        a === false ? i.removeAttribute(l) : i.setAttribute(l, a === true ? "" : a);
      }));
    });
  }
  function $r(e) {
    var t = e.state, o = {
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
    return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
      Object.keys(t.elements).forEach(function(r) {
        var n = t.elements[r], i = t.attributes[r] || {}, l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), a = l.reduce(function(s, c) {
          return s[c] = "", s;
        }, {});
        !oe(n) || !de(n) || (Object.assign(n.style, a), Object.keys(i).forEach(function(s) {
          n.removeAttribute(s);
        }));
      });
    };
  }
  const Rr = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: Pr,
    effect: $r,
    requires: [
      "computeStyles"
    ]
  };
  function ce(e) {
    return e.split("-")[0];
  }
  var Ae = Math.max, vt = Math.min, ze = Math.round;
  function xt() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
      return t.brand + "/" + t.version;
    }).join(" ") : navigator.userAgent;
  }
  function ao() {
    return !/^((?!chrome|android).)*safari/i.test(xt());
  }
  function Be(e, t, o) {
    t === void 0 && (t = false), o === void 0 && (o = false);
    var r = e.getBoundingClientRect(), n = 1, i = 1;
    t && oe(e) && (n = e.offsetWidth > 0 && ze(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ze(r.height) / e.offsetHeight || 1);
    var l = Ee(e) ? J(e) : window, a = l.visualViewport, s = !ao() && o, c = (r.left + (s && a ? a.offsetLeft : 0)) / n, p = (r.top + (s && a ? a.offsetTop : 0)) / i, f = r.width / n, R = r.height / i;
    return {
      width: f,
      height: R,
      top: p,
      right: c + f,
      bottom: p + R,
      left: c,
      x: c,
      y: p
    };
  }
  function St(e) {
    var t = Be(e), o = e.offsetWidth, r = e.offsetHeight;
    return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: o,
      height: r
    };
  }
  function io(e, t) {
    var o = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return true;
    if (o && Rt(o)) {
      var r = t;
      do {
        if (r && e.isSameNode(r)) return true;
        r = r.parentNode || r.host;
      } while (r);
    }
    return false;
  }
  function he(e) {
    return J(e).getComputedStyle(e);
  }
  function Sr(e) {
    return [
      "table",
      "td",
      "th"
    ].indexOf(de(e)) >= 0;
  }
  function Pe(e) {
    return ((Ee(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function gt(e) {
    return de(e) === "html" ? e : e.assignedSlot || e.parentNode || (Rt(e) ? e.host : null) || Pe(e);
  }
  function Ft(e) {
    return !oe(e) || he(e).position === "fixed" ? null : e.offsetParent;
  }
  function Or(e) {
    var t = /firefox/i.test(xt()), o = /Trident/i.test(xt());
    if (o && oe(e)) {
      var r = he(e);
      if (r.position === "fixed") return null;
    }
    var n = gt(e);
    for (Rt(n) && (n = n.host); oe(n) && [
      "html",
      "body"
    ].indexOf(de(n)) < 0; ) {
      var i = he(n);
      if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || [
        "transform",
        "perspective"
      ].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none") return n;
      n = n.parentNode;
    }
    return null;
  }
  function nt(e) {
    for (var t = J(e), o = Ft(e); o && Sr(o) && he(o).position === "static"; ) o = Ft(o);
    return o && (de(o) === "html" || de(o) === "body" && he(o).position === "static") ? t : o || Or(e) || t;
  }
  function Ot(e) {
    return [
      "top",
      "bottom"
    ].indexOf(e) >= 0 ? "x" : "y";
  }
  function Je(e, t, o) {
    return Ae(e, vt(t, o));
  }
  function Tr(e, t, o) {
    var r = Je(e, t, o);
    return r > o ? o : r;
  }
  function so() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }
  function lo(e) {
    return Object.assign({}, so(), e);
  }
  function po(e, t) {
    return t.reduce(function(o, r) {
      return o[r] = e, o;
    }, {});
  }
  var Ar = function(t, o) {
    return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
      placement: o.placement
    })) : t, lo(typeof t != "number" ? t : po(t, rt));
  };
  function Er(e) {
    var t, o = e.state, r = e.name, n = e.options, i = o.elements.arrow, l = o.modifiersData.popperOffsets, a = ce(o.placement), s = Ot(a), c = [
      Z,
      ae
    ].indexOf(a) >= 0, p = c ? "height" : "width";
    if (!(!i || !l)) {
      var f = Ar(n.padding, o), R = St(i), u = s === "y" ? K : Z, b = s === "y" ? ne : ae, v = o.rects.reference[p] + o.rects.reference[s] - l[s] - o.rects.popper[p], x = l[s] - o.rects.reference[s], g = nt(i), C = g ? s === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, w = v / 2 - x / 2, d = f[u], P = C - R[p] - f[b], h = C / 2 - R[p] / 2 + w, S = Je(d, h, P), M = s;
      o.modifiersData[r] = (t = {}, t[M] = S, t.centerOffset = S - h, t);
    }
  }
  function Mr(e) {
    var t = e.state, o = e.options, r = o.element, n = r === void 0 ? "[data-popper-arrow]" : r;
    n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || io(t.elements.popper, n) && (t.elements.arrow = n));
  }
  const kr = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: Er,
    effect: Mr,
    requires: [
      "popperOffsets"
    ],
    requiresIfExists: [
      "preventOverflow"
    ]
  };
  function We(e) {
    return e.split("-")[1];
  }
  var Ir = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function jr(e, t) {
    var o = e.x, r = e.y, n = t.devicePixelRatio || 1;
    return {
      x: ze(o * n) / n || 0,
      y: ze(r * n) / n || 0
    };
  }
  function Vt(e) {
    var t, o = e.popper, r = e.popperRect, n = e.placement, i = e.variation, l = e.offsets, a = e.position, s = e.gpuAcceleration, c = e.adaptive, p = e.roundOffsets, f = e.isFixed, R = l.x, u = R === void 0 ? 0 : R, b = l.y, v = b === void 0 ? 0 : b, x = typeof p == "function" ? p({
      x: u,
      y: v
    }) : {
      x: u,
      y: v
    };
    u = x.x, v = x.y;
    var g = l.hasOwnProperty("x"), C = l.hasOwnProperty("y"), w = Z, d = K, P = window;
    if (c) {
      var h = nt(o), S = "clientHeight", M = "clientWidth";
      if (h === J(o) && (h = Pe(o), he(h).position !== "static" && a === "absolute" && (S = "scrollHeight", M = "scrollWidth")), h = h, n === K || (n === Z || n === ae) && i === tt) {
        d = ne;
        var k = f && h === P && P.visualViewport ? P.visualViewport.height : h[S];
        v -= k - r.height, v *= s ? 1 : -1;
      }
      if (n === Z || (n === K || n === ne) && i === tt) {
        w = ae;
        var $ = f && h === P && P.visualViewport ? P.visualViewport.width : h[M];
        u -= $ - r.width, u *= s ? 1 : -1;
      }
    }
    var O = Object.assign({
      position: a
    }, c && Ir), B = p === true ? jr({
      x: u,
      y: v
    }, J(o)) : {
      x: u,
      y: v
    };
    if (u = B.x, v = B.y, s) {
      var A;
      return Object.assign({}, O, (A = {}, A[d] = C ? "0" : "", A[w] = g ? "0" : "", A.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + u + "px, " + v + "px)" : "translate3d(" + u + "px, " + v + "px, 0)", A));
    }
    return Object.assign({}, O, (t = {}, t[d] = C ? v + "px" : "", t[w] = g ? u + "px" : "", t.transform = "", t));
  }
  function Dr(e) {
    var t = e.state, o = e.options, r = o.gpuAcceleration, n = r === void 0 ? true : r, i = o.adaptive, l = i === void 0 ? true : i, a = o.roundOffsets, s = a === void 0 ? true : a, c = {
      placement: ce(t.placement),
      variation: We(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: n,
      isFixed: t.options.strategy === "fixed"
    };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Vt(Object.assign({}, c, {
      offsets: t.modifiersData.popperOffsets,
      position: t.options.strategy,
      adaptive: l,
      roundOffsets: s
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Vt(Object.assign({}, c, {
      offsets: t.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets: s
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement
    });
  }
  const Lr = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: Dr,
    data: {}
  };
  var ct = {
    passive: true
  };
  function zr(e) {
    var t = e.state, o = e.instance, r = e.options, n = r.scroll, i = n === void 0 ? true : n, l = r.resize, a = l === void 0 ? true : l, s = J(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return i && c.forEach(function(p) {
      p.addEventListener("scroll", o.update, ct);
    }), a && s.addEventListener("resize", o.update, ct), function() {
      i && c.forEach(function(p) {
        p.removeEventListener("scroll", o.update, ct);
      }), a && s.removeEventListener("resize", o.update, ct);
    };
  }
  const Br = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function() {
    },
    effect: zr,
    data: {}
  };
  var Wr = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function ft(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
      return Wr[t];
    });
  }
  var Nr = {
    start: "end",
    end: "start"
  };
  function Ht(e) {
    return e.replace(/start|end/g, function(t) {
      return Nr[t];
    });
  }
  function Tt(e) {
    var t = J(e), o = t.pageXOffset, r = t.pageYOffset;
    return {
      scrollLeft: o,
      scrollTop: r
    };
  }
  function At(e) {
    return Be(Pe(e)).left + Tt(e).scrollLeft;
  }
  function Fr(e, t) {
    var o = J(e), r = Pe(e), n = o.visualViewport, i = r.clientWidth, l = r.clientHeight, a = 0, s = 0;
    if (n) {
      i = n.width, l = n.height;
      var c = ao();
      (c || !c && t === "fixed") && (a = n.offsetLeft, s = n.offsetTop);
    }
    return {
      width: i,
      height: l,
      x: a + At(e),
      y: s
    };
  }
  function Vr(e) {
    var t, o = Pe(e), r = Tt(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ae(o.scrollWidth, o.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), l = Ae(o.scrollHeight, o.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), a = -r.scrollLeft + At(e), s = -r.scrollTop;
    return he(n || o).direction === "rtl" && (a += Ae(o.clientWidth, n ? n.clientWidth : 0) - i), {
      width: i,
      height: l,
      x: a,
      y: s
    };
  }
  function Et(e) {
    var t = he(e), o = t.overflow, r = t.overflowX, n = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(o + n + r);
  }
  function co(e) {
    return [
      "html",
      "body",
      "#document"
    ].indexOf(de(e)) >= 0 ? e.ownerDocument.body : oe(e) && Et(e) ? e : co(gt(e));
  }
  function _e(e, t) {
    var o;
    t === void 0 && (t = []);
    var r = co(e), n = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = J(r), l = n ? [
      i
    ].concat(i.visualViewport || [], Et(r) ? r : []) : r, a = t.concat(l);
    return n ? a : a.concat(_e(gt(l)));
  }
  function wt(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function Hr(e, t) {
    var o = Be(e, false, t === "fixed");
    return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
  }
  function Ut(e, t, o) {
    return t === ro ? wt(Fr(e, o)) : Ee(t) ? Hr(t, o) : wt(Vr(Pe(e)));
  }
  function Ur(e) {
    var t = _e(gt(e)), o = [
      "absolute",
      "fixed"
    ].indexOf(he(e).position) >= 0, r = o && oe(e) ? nt(e) : e;
    return Ee(r) ? t.filter(function(n) {
      return Ee(n) && io(n, r) && de(n) !== "body";
    }) : [];
  }
  function qr(e, t, o, r) {
    var n = t === "clippingParents" ? Ur(e) : [].concat(t), i = [].concat(n, [
      o
    ]), l = i[0], a = i.reduce(function(s, c) {
      var p = Ut(e, c, r);
      return s.top = Ae(p.top, s.top), s.right = vt(p.right, s.right), s.bottom = vt(p.bottom, s.bottom), s.left = Ae(p.left, s.left), s;
    }, Ut(e, l, r));
    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
  }
  function uo(e) {
    var t = e.reference, o = e.element, r = e.placement, n = r ? ce(r) : null, i = r ? We(r) : null, l = t.x + t.width / 2 - o.width / 2, a = t.y + t.height / 2 - o.height / 2, s;
    switch (n) {
      case K:
        s = {
          x: l,
          y: t.y - o.height
        };
        break;
      case ne:
        s = {
          x: l,
          y: t.y + t.height
        };
        break;
      case ae:
        s = {
          x: t.x + t.width,
          y: a
        };
        break;
      case Z:
        s = {
          x: t.x - o.width,
          y: a
        };
        break;
      default:
        s = {
          x: t.x,
          y: t.y
        };
    }
    var c = n ? Ot(n) : null;
    if (c != null) {
      var p = c === "y" ? "height" : "width";
      switch (i) {
        case Le:
          s[c] = s[c] - (t[p] / 2 - o[p] / 2);
          break;
        case tt:
          s[c] = s[c] + (t[p] / 2 - o[p] / 2);
          break;
      }
    }
    return s;
  }
  function ot(e, t) {
    t === void 0 && (t = {});
    var o = t, r = o.placement, n = r === void 0 ? e.placement : r, i = o.strategy, l = i === void 0 ? e.strategy : i, a = o.boundary, s = a === void 0 ? dr : a, c = o.rootBoundary, p = c === void 0 ? ro : c, f = o.elementContext, R = f === void 0 ? Ke : f, u = o.altBoundary, b = u === void 0 ? false : u, v = o.padding, x = v === void 0 ? 0 : v, g = lo(typeof x != "number" ? x : po(x, rt)), C = R === Ke ? ur : Ke, w = e.rects.popper, d = e.elements[b ? C : R], P = qr(Ee(d) ? d : d.contextElement || Pe(e.elements.popper), s, p, l), h = Be(e.elements.reference), S = uo({
      reference: h,
      element: w,
      placement: n
    }), M = wt(Object.assign({}, w, S)), k = R === Ke ? M : h, $ = {
      top: P.top - k.top + g.top,
      bottom: k.bottom - P.bottom + g.bottom,
      left: P.left - k.left + g.left,
      right: k.right - P.right + g.right
    }, O = e.modifiersData.offset;
    if (R === Ke && O) {
      var B = O[n];
      Object.keys($).forEach(function(A) {
        var z = [
          ae,
          ne
        ].indexOf(A) >= 0 ? 1 : -1, F = [
          K,
          ne
        ].indexOf(A) >= 0 ? "y" : "x";
        $[A] += B[F] * z;
      });
    }
    return $;
  }
  function Gr(e, t) {
    t === void 0 && (t = {});
    var o = t, r = o.placement, n = o.boundary, i = o.rootBoundary, l = o.padding, a = o.flipVariations, s = o.allowedAutoPlacements, c = s === void 0 ? no : s, p = We(r), f = p ? a ? Nt : Nt.filter(function(b) {
      return We(b) === p;
    }) : rt, R = f.filter(function(b) {
      return c.indexOf(b) >= 0;
    });
    R.length === 0 && (R = f);
    var u = R.reduce(function(b, v) {
      return b[v] = ot(e, {
        placement: v,
        boundary: n,
        rootBoundary: i,
        padding: l
      })[ce(v)], b;
    }, {});
    return Object.keys(u).sort(function(b, v) {
      return u[b] - u[v];
    });
  }
  function Xr(e) {
    if (ce(e) === $t) return [];
    var t = ft(e);
    return [
      Ht(e),
      t,
      Ht(t)
    ];
  }
  function Yr(e) {
    var t = e.state, o = e.options, r = e.name;
    if (!t.modifiersData[r]._skip) {
      for (var n = o.mainAxis, i = n === void 0 ? true : n, l = o.altAxis, a = l === void 0 ? true : l, s = o.fallbackPlacements, c = o.padding, p = o.boundary, f = o.rootBoundary, R = o.altBoundary, u = o.flipVariations, b = u === void 0 ? true : u, v = o.allowedAutoPlacements, x = t.options.placement, g = ce(x), C = g === x, w = s || (C || !b ? [
        ft(x)
      ] : Xr(x)), d = [
        x
      ].concat(w).reduce(function(Q, Y) {
        return Q.concat(ce(Y) === $t ? Gr(t, {
          placement: Y,
          boundary: p,
          rootBoundary: f,
          padding: c,
          flipVariations: b,
          allowedAutoPlacements: v
        }) : Y);
      }, []), P = t.rects.reference, h = t.rects.popper, S = /* @__PURE__ */ new Map(), M = true, k = d[0], $ = 0; $ < d.length; $++) {
        var O = d[$], B = ce(O), A = We(O) === Le, z = [
          K,
          ne
        ].indexOf(B) >= 0, F = z ? "width" : "height", L = ot(t, {
          placement: O,
          boundary: p,
          rootBoundary: f,
          altBoundary: R,
          padding: c
        }), I = z ? A ? ae : Z : A ? ne : K;
        P[F] > h[F] && (I = ft(I));
        var V = ft(I), W = [];
        if (i && W.push(L[B] <= 0), a && W.push(L[I] <= 0, L[V] <= 0), W.every(function(Q) {
          return Q;
        })) {
          k = O, M = false;
          break;
        }
        S.set(O, W);
      }
      if (M) for (var _ = b ? 3 : 1, be = function(Y) {
        var T = d.find(function(q) {
          var N = S.get(q);
          if (N) return N.slice(0, Y).every(function(ee) {
            return ee;
          });
        });
        if (T) return k = T, "break";
      }, ie = _; ie > 0; ie--) {
        var xe = be(ie);
        if (xe === "break") break;
      }
      t.placement !== k && (t.modifiersData[r]._skip = true, t.placement = k, t.reset = true);
    }
  }
  const Kr = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: Yr,
    requiresIfExists: [
      "offset"
    ],
    data: {
      _skip: false
    }
  };
  function qt(e, t, o) {
    return o === void 0 && (o = {
      x: 0,
      y: 0
    }), {
      top: e.top - t.height - o.y,
      right: e.right - t.width + o.x,
      bottom: e.bottom - t.height + o.y,
      left: e.left - t.width - o.x
    };
  }
  function Gt(e) {
    return [
      K,
      ae,
      ne,
      Z
    ].some(function(t) {
      return e[t] >= 0;
    });
  }
  function Zr(e) {
    var t = e.state, o = e.name, r = t.rects.reference, n = t.rects.popper, i = t.modifiersData.preventOverflow, l = ot(t, {
      elementContext: "reference"
    }), a = ot(t, {
      altBoundary: true
    }), s = qt(l, r), c = qt(a, n, i), p = Gt(s), f = Gt(c);
    t.modifiersData[o] = {
      referenceClippingOffsets: s,
      popperEscapeOffsets: c,
      isReferenceHidden: p,
      hasPopperEscaped: f
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": p,
      "data-popper-escaped": f
    });
  }
  const Qr = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
      "preventOverflow"
    ],
    fn: Zr
  };
  function Jr(e, t, o) {
    var r = ce(e), n = [
      Z,
      K
    ].indexOf(r) >= 0 ? -1 : 1, i = typeof o == "function" ? o(Object.assign({}, t, {
      placement: e
    })) : o, l = i[0], a = i[1];
    return l = l || 0, a = (a || 0) * n, [
      Z,
      ae
    ].indexOf(r) >= 0 ? {
      x: a,
      y: l
    } : {
      x: l,
      y: a
    };
  }
  function _r(e) {
    var t = e.state, o = e.options, r = e.name, n = o.offset, i = n === void 0 ? [
      0,
      0
    ] : n, l = no.reduce(function(p, f) {
      return p[f] = Jr(f, t.rects, i), p;
    }, {}), a = l[t.placement], s = a.x, c = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = l;
  }
  const en = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
      "popperOffsets"
    ],
    fn: _r
  };
  function tn(e) {
    var t = e.state, o = e.name;
    t.modifiersData[o] = uo({
      reference: t.rects.reference,
      element: t.rects.popper,
      placement: t.placement
    });
  }
  const on = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: tn,
    data: {}
  };
  function rn(e) {
    return e === "x" ? "y" : "x";
  }
  function nn(e) {
    var t = e.state, o = e.options, r = e.name, n = o.mainAxis, i = n === void 0 ? true : n, l = o.altAxis, a = l === void 0 ? false : l, s = o.boundary, c = o.rootBoundary, p = o.altBoundary, f = o.padding, R = o.tether, u = R === void 0 ? true : R, b = o.tetherOffset, v = b === void 0 ? 0 : b, x = ot(t, {
      boundary: s,
      rootBoundary: c,
      padding: f,
      altBoundary: p
    }), g = ce(t.placement), C = We(t.placement), w = !C, d = Ot(g), P = rn(d), h = t.modifiersData.popperOffsets, S = t.rects.reference, M = t.rects.popper, k = typeof v == "function" ? v(Object.assign({}, t.rects, {
      placement: t.placement
    })) : v, $ = typeof k == "number" ? {
      mainAxis: k,
      altAxis: k
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, k), O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, B = {
      x: 0,
      y: 0
    };
    if (h) {
      if (i) {
        var A, z = d === "y" ? K : Z, F = d === "y" ? ne : ae, L = d === "y" ? "height" : "width", I = h[d], V = I + x[z], W = I - x[F], _ = u ? -M[L] / 2 : 0, be = C === Le ? S[L] : M[L], ie = C === Le ? -M[L] : -S[L], xe = t.elements.arrow, Q = u && xe ? St(xe) : {
          width: 0,
          height: 0
        }, Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : so(), T = Y[z], q = Y[F], N = Je(0, S[L], Q[L]), ee = w ? S[L] / 2 - _ - N - T - $.mainAxis : be - N - T - $.mainAxis, we = w ? -S[L] / 2 + _ + N + q + $.mainAxis : ie + N + q + $.mainAxis, me = t.elements.arrow && nt(t.elements.arrow), se = me ? d === "y" ? me.clientTop || 0 : me.clientLeft || 0 : 0, Me = (A = O == null ? void 0 : O[d]) != null ? A : 0, $e = I + ee - Me - se, ke = I + we - Me, Ne = Je(u ? vt(V, $e) : V, I, u ? Ae(W, ke) : W);
        h[d] = Ne, B[d] = Ne - I;
      }
      if (a) {
        var Re, Ie = d === "x" ? K : Z, Fe = d === "x" ? ne : ae, pe = h[P], Se = P === "y" ? "height" : "width", Ve = pe + x[Ie], He = pe - x[Fe], Ue = [
          K,
          Z
        ].indexOf(g) !== -1, at = (Re = O == null ? void 0 : O[P]) != null ? Re : 0, it = Ue ? Ve : pe - S[Se] - M[Se] - at + $.altAxis, je = Ue ? pe + S[Se] + M[Se] - at - $.altAxis : He, st = u && Ue ? Tr(it, pe, je) : Je(u ? it : Ve, pe, u ? je : He);
        h[P] = st, B[P] = st - pe;
      }
      t.modifiersData[r] = B;
    }
  }
  const an = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: nn,
    requiresIfExists: [
      "offset"
    ]
  };
  function sn(e) {
    return {
      scrollLeft: e.scrollLeft,
      scrollTop: e.scrollTop
    };
  }
  function ln(e) {
    return e === J(e) || !oe(e) ? Tt(e) : sn(e);
  }
  function pn(e) {
    var t = e.getBoundingClientRect(), o = ze(t.width) / e.offsetWidth || 1, r = ze(t.height) / e.offsetHeight || 1;
    return o !== 1 || r !== 1;
  }
  function cn(e, t, o) {
    o === void 0 && (o = false);
    var r = oe(t), n = oe(t) && pn(t), i = Pe(t), l = Be(e, n, o), a = {
      scrollLeft: 0,
      scrollTop: 0
    }, s = {
      x: 0,
      y: 0
    };
    return (r || !r && !o) && ((de(t) !== "body" || Et(i)) && (a = ln(t)), oe(t) ? (s = Be(t, true), s.x += t.clientLeft, s.y += t.clientTop) : i && (s.x = At(i))), {
      x: l.left + a.scrollLeft - s.x,
      y: l.top + a.scrollTop - s.y,
      width: l.width,
      height: l.height
    };
  }
  function dn(e) {
    var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
    e.forEach(function(i) {
      t.set(i.name, i);
    });
    function n(i) {
      o.add(i.name);
      var l = [].concat(i.requires || [], i.requiresIfExists || []);
      l.forEach(function(a) {
        if (!o.has(a)) {
          var s = t.get(a);
          s && n(s);
        }
      }), r.push(i);
    }
    return e.forEach(function(i) {
      o.has(i.name) || n(i);
    }), r;
  }
  function un(e) {
    var t = dn(e);
    return Cr.reduce(function(o, r) {
      return o.concat(t.filter(function(n) {
        return n.phase === r;
      }));
    }, []);
  }
  function fn(e) {
    var t;
    return function() {
      return t || (t = new Promise(function(o) {
        Promise.resolve().then(function() {
          t = void 0, o(e());
        });
      })), t;
    };
  }
  function vn(e) {
    var t = e.reduce(function(o, r) {
      var n = o[r.name];
      return o[r.name] = n ? Object.assign({}, n, r, {
        options: Object.assign({}, n.options, r.options),
        data: Object.assign({}, n.data, r.data)
      }) : r, o;
    }, {});
    return Object.keys(t).map(function(o) {
      return t[o];
    });
  }
  var Xt = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Yt() {
    for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
    return !t.some(function(r) {
      return !(r && typeof r.getBoundingClientRect == "function");
    });
  }
  function gn(e) {
    e === void 0 && (e = {});
    var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, n = t.defaultOptions, i = n === void 0 ? Xt : n;
    return function(a, s, c) {
      c === void 0 && (c = i);
      var p = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, Xt, i),
        modifiersData: {},
        elements: {
          reference: a,
          popper: s
        },
        attributes: {},
        styles: {}
      }, f = [], R = false, u = {
        state: p,
        setOptions: function(g) {
          var C = typeof g == "function" ? g(p.options) : g;
          v(), p.options = Object.assign({}, i, p.options, C), p.scrollParents = {
            reference: Ee(a) ? _e(a) : a.contextElement ? _e(a.contextElement) : [],
            popper: _e(s)
          };
          var w = un(vn([].concat(r, p.options.modifiers)));
          return p.orderedModifiers = w.filter(function(d) {
            return d.enabled;
          }), b(), u.update();
        },
        forceUpdate: function() {
          if (!R) {
            var g = p.elements, C = g.reference, w = g.popper;
            if (Yt(C, w)) {
              p.rects = {
                reference: cn(C, nt(w), p.options.strategy === "fixed"),
                popper: St(w)
              }, p.reset = false, p.placement = p.options.placement, p.orderedModifiers.forEach(function($) {
                return p.modifiersData[$.name] = Object.assign({}, $.data);
              });
              for (var d = 0; d < p.orderedModifiers.length; d++) {
                if (p.reset === true) {
                  p.reset = false, d = -1;
                  continue;
                }
                var P = p.orderedModifiers[d], h = P.fn, S = P.options, M = S === void 0 ? {} : S, k = P.name;
                typeof h == "function" && (p = h({
                  state: p,
                  options: M,
                  name: k,
                  instance: u
                }) || p);
              }
            }
          }
        },
        update: fn(function() {
          return new Promise(function(x) {
            u.forceUpdate(), x(p);
          });
        }),
        destroy: function() {
          v(), R = true;
        }
      };
      if (!Yt(a, s)) return u;
      u.setOptions(c).then(function(x) {
        !R && c.onFirstUpdate && c.onFirstUpdate(x);
      });
      function b() {
        p.orderedModifiers.forEach(function(x) {
          var g = x.name, C = x.options, w = C === void 0 ? {} : C, d = x.effect;
          if (typeof d == "function") {
            var P = d({
              state: p,
              name: g,
              instance: u,
              options: w
            }), h = function() {
            };
            f.push(P || h);
          }
        });
      }
      function v() {
        f.forEach(function(x) {
          return x();
        }), f = [];
      }
      return u;
    };
  }
  var mn = [
    Br,
    on,
    Lr,
    Rr,
    en,
    Kr,
    an,
    kr,
    Qr
  ], hn = gn({
    defaultModifiers: mn
  });
  function yn(e) {
    return ue("MuiPopper", e);
  }
  fe("MuiPopper", [
    "root"
  ]);
  function bn(e, t) {
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
  function Ct(e) {
    return typeof e == "function" ? e() : e;
  }
  function xn(e) {
    return e.nodeType !== void 0;
  }
  const wn = (e) => {
    const { classes: t } = e;
    return ge({
      root: [
        "root"
      ]
    }, yn, t);
  }, Cn = {}, Pn = y.forwardRef(function(t, o) {
    const { anchorEl: r, children: n, direction: i, disablePortal: l, modifiers: a, open: s, placement: c, popperOptions: p, popperRef: f, slotProps: R = {}, slots: u = {}, TransitionProps: b, ownerState: v, ...x } = t, g = y.useRef(null), C = et(g, o), w = y.useRef(null), d = et(w, f), P = y.useRef(d);
    Dt(() => {
      P.current = d;
    }, [
      d
    ]), y.useImperativeHandle(f, () => w.current, []);
    const h = bn(c, i), [S, M] = y.useState(h), [k, $] = y.useState(Ct(r));
    y.useEffect(() => {
      w.current && w.current.forceUpdate();
    }), y.useEffect(() => {
      r && $(Ct(r));
    }, [
      r
    ]), Dt(() => {
      if (!k || !s) return;
      const F = (V) => {
        M(V.placement);
      };
      let L = [
        {
          name: "preventOverflow",
          options: {
            altBoundary: l
          }
        },
        {
          name: "flip",
          options: {
            altBoundary: l
          }
        },
        {
          name: "onUpdate",
          enabled: true,
          phase: "afterWrite",
          fn: ({ state: V }) => {
            F(V);
          }
        }
      ];
      a != null && (L = L.concat(a)), p && p.modifiers != null && (L = L.concat(p.modifiers));
      const I = hn(k, g.current, {
        placement: h,
        ...p,
        modifiers: L
      });
      return P.current(I), () => {
        I.destroy(), P.current(null);
      };
    }, [
      k,
      l,
      a,
      s,
      p,
      h
    ]);
    const O = {
      placement: S
    };
    b !== null && (O.TransitionProps = b);
    const B = wn(t), A = u.root ?? "div", z = Oo({
      elementType: A,
      externalSlotProps: R.root,
      externalForwardedProps: x,
      additionalProps: {
        role: "tooltip",
        ref: C
      },
      ownerState: t,
      className: B.root
    });
    return m.jsx(A, {
      ...z,
      children: typeof n == "function" ? n(O) : n
    });
  }), $n = y.forwardRef(function(t, o) {
    const { anchorEl: r, children: n, container: i, direction: l = "ltr", disablePortal: a = false, keepMounted: s = false, modifiers: c, open: p, placement: f = "bottom", popperOptions: R = Cn, popperRef: u, style: b, transition: v = false, slotProps: x = {}, slots: g = {}, ...C } = t, [w, d] = y.useState(true), P = () => {
      d(false);
    }, h = () => {
      d(true);
    };
    if (!s && !p && (!v || w)) return null;
    let S;
    if (i) S = i;
    else if (r) {
      const $ = Ct(r);
      S = $ && xn($) ? jt($).body : jt(null).body;
    }
    const M = !p && s && (!v || w) ? "none" : void 0, k = v ? {
      in: p,
      onEnter: P,
      onExited: h
    } : void 0;
    return m.jsx(So, {
      disablePortal: a,
      container: S,
      children: m.jsx(Pn, {
        anchorEl: r,
        direction: l,
        disablePortal: a,
        modifiers: c,
        ref: o,
        open: v ? !w : p,
        placement: f,
        popperOptions: R,
        popperRef: u,
        slotProps: x,
        slots: g,
        ...C,
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          display: M,
          ...b
        },
        TransitionProps: k,
        children: n
      })
    });
  }), Rn = U($n, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({}), fo = y.forwardRef(function(t, o) {
    const r = eo(), n = ve({
      props: t,
      name: "MuiPopper"
    }), { anchorEl: i, component: l, components: a, componentsProps: s, container: c, disablePortal: p, keepMounted: f, modifiers: R, open: u, placement: b, popperOptions: v, popperRef: x, transition: g, slots: C, slotProps: w, ...d } = n, P = (C == null ? void 0 : C.root) ?? (a == null ? void 0 : a.Root), h = {
      anchorEl: i,
      container: c,
      disablePortal: p,
      keepMounted: f,
      modifiers: R,
      open: u,
      placement: b,
      popperOptions: v,
      popperRef: x,
      transition: g,
      ...d
    };
    return m.jsx(Rn, {
      as: l,
      direction: r ? "rtl" : "ltr",
      slots: {
        root: P
      },
      slotProps: w ?? s,
      ...h,
      ref: o
    });
  }), Sn = ye(m.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function On(e) {
    return ue("MuiChip", e);
  }
  const j = fe("MuiChip", [
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
  ]), Tn = (e) => {
    const { classes: t, disabled: o, size: r, color: n, iconColor: i, onDelete: l, clickable: a, variant: s } = e, c = {
      root: [
        "root",
        s,
        o && "disabled",
        `size${D(r)}`,
        `color${D(n)}`,
        a && "clickable",
        a && `clickableColor${D(n)}`,
        l && "deletable",
        l && `deletableColor${D(n)}`,
        `${s}${D(n)}`
      ],
      label: [
        "label",
        `label${D(r)}`
      ],
      avatar: [
        "avatar",
        `avatar${D(r)}`,
        `avatarColor${D(n)}`
      ],
      icon: [
        "icon",
        `icon${D(r)}`,
        `iconColor${D(i)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${D(r)}`,
        `deleteIconColor${D(n)}`,
        `deleteIcon${D(s)}Color${D(n)}`
      ]
    };
    return ge(c, On, t);
  }, An = U("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e, { color: r, iconColor: n, clickable: i, onDelete: l, size: a, variant: s } = o;
      return [
        {
          [`& .${j.avatar}`]: t.avatar
        },
        {
          [`& .${j.avatar}`]: t[`avatar${D(a)}`]
        },
        {
          [`& .${j.avatar}`]: t[`avatarColor${D(r)}`]
        },
        {
          [`& .${j.icon}`]: t.icon
        },
        {
          [`& .${j.icon}`]: t[`icon${D(a)}`]
        },
        {
          [`& .${j.icon}`]: t[`iconColor${D(n)}`]
        },
        {
          [`& .${j.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${j.deleteIcon}`]: t[`deleteIcon${D(a)}`]
        },
        {
          [`& .${j.deleteIcon}`]: t[`deleteIconColor${D(r)}`]
        },
        {
          [`& .${j.deleteIcon}`]: t[`deleteIcon${D(s)}Color${D(r)}`]
        },
        t.root,
        t[`size${D(a)}`],
        t[`color${D(r)}`],
        i && t.clickable,
        i && r !== "default" && t[`clickableColor${D(r)})`],
        l && t.deletable,
        l && r !== "default" && t[`deletableColor${D(r)}`],
        t[s],
        t[`${s}${D(r)}`]
      ];
    }
  })(re(({ theme: e }) => {
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
      [`&.${j.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${j.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: e.typography.pxToRem(12)
      },
      [`& .${j.avatarColorPrimary}`]: {
        color: (e.vars || e).palette.primary.contrastText,
        backgroundColor: (e.vars || e).palette.primary.dark
      },
      [`& .${j.avatarColorSecondary}`]: {
        color: (e.vars || e).palette.secondary.contrastText,
        backgroundColor: (e.vars || e).palette.secondary.dark
      },
      [`& .${j.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: e.typography.pxToRem(10)
      },
      [`& .${j.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${j.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : te(e.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : te(e.palette.text.primary, 0.4)
        }
      },
      variants: [
        {
          props: {
            size: "small"
          },
          style: {
            height: 24,
            [`& .${j.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${j.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(e.palette).filter(Te([
          "contrastText"
        ])).map(([o]) => ({
          props: {
            color: o
          },
          style: {
            backgroundColor: (e.vars || e).palette[o].main,
            color: (e.vars || e).palette[o].contrastText,
            [`& .${j.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[o].contrastTextChannel} / 0.7)` : te(e.palette[o].contrastText, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[o].contrastText
              }
            }
          }
        })),
        {
          props: (o) => o.iconColor === o.color,
          style: {
            [`& .${j.icon}`]: {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (o) => o.iconColor === o.color && o.color !== "default",
          style: {
            [`& .${j.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${j.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : te(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(e.palette).filter(Te([
          "dark"
        ])).map(([o]) => ({
          props: {
            color: o,
            onDelete: true
          },
          style: {
            [`&.${j.focusVisible}`]: {
              background: (e.vars || e).palette[o].dark
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
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : te(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
            },
            [`&.${j.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : te(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (e.vars || e).shadows[1]
            }
          }
        },
        ...Object.entries(e.palette).filter(Te([
          "dark"
        ])).map(([o]) => ({
          props: {
            color: o,
            clickable: true
          },
          style: {
            [`&:hover, &.${j.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[o].dark
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
            [`&.${j.clickable}:hover`]: {
              backgroundColor: (e.vars || e).palette.action.hover
            },
            [`&.${j.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette.action.focus
            },
            [`& .${j.avatar}`]: {
              marginLeft: 4
            },
            [`& .${j.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${j.icon}`]: {
              marginLeft: 4
            },
            [`& .${j.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${j.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${j.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(e.palette).filter(Te()).map(([o]) => ({
          props: {
            variant: "outlined",
            color: o
          },
          style: {
            color: (e.vars || e).palette[o].main,
            border: `1px solid ${e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : te(e.palette[o].main, 0.7)}`,
            [`&.${j.clickable}:hover`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : te(e.palette[o].main, e.palette.action.hoverOpacity)
            },
            [`&.${j.focusVisible}`]: {
              backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.focusOpacity})` : te(e.palette[o].main, e.palette.action.focusOpacity)
            },
            [`& .${j.deleteIcon}`]: {
              color: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.7)` : te(e.palette[o].main, 0.7),
              "&:hover, &:active": {
                color: (e.vars || e).palette[o].main
              }
            }
          }
        }))
      ]
    };
  })), En = U("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e, { size: r } = o;
      return [
        t.label,
        t[`label${D(r)}`]
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
  function Kt(e) {
    return e.key === "Backspace" || e.key === "Delete";
  }
  Zn = y.forwardRef(function(t, o) {
    const r = ve({
      props: t,
      name: "MuiChip"
    }), { avatar: n, className: i, clickable: l, color: a = "default", component: s, deleteIcon: c, disabled: p = false, icon: f, label: R, onClick: u, onDelete: b, onKeyDown: v, onKeyUp: x, size: g = "medium", variant: C = "filled", tabIndex: w, skipFocusWhenDisabled: d = false, ...P } = r, h = y.useRef(null), S = et(h, o), M = (W) => {
      W.stopPropagation(), b && b(W);
    }, k = (W) => {
      W.currentTarget === W.target && Kt(W) && W.preventDefault(), v && v(W);
    }, $ = (W) => {
      W.currentTarget === W.target && b && Kt(W) && b(W), x && x(W);
    }, O = l !== false && u ? true : l, B = O || b ? yt : s || "div", A = {
      ...r,
      component: B,
      disabled: p,
      size: g,
      color: a,
      iconColor: y.isValidElement(f) && f.props.color || a,
      onDelete: !!b,
      clickable: O,
      variant: C
    }, z = Tn(A), F = B === yt ? {
      component: s || "div",
      focusVisibleClassName: z.focusVisible,
      ...b && {
        disableRipple: true
      }
    } : {};
    let L = null;
    b && (L = c && y.isValidElement(c) ? y.cloneElement(c, {
      className: G(c.props.className, z.deleteIcon),
      onClick: M
    }) : m.jsx(Sn, {
      className: G(z.deleteIcon),
      onClick: M
    }));
    let I = null;
    n && y.isValidElement(n) && (I = y.cloneElement(n, {
      className: G(z.avatar, n.props.className)
    }));
    let V = null;
    return f && y.isValidElement(f) && (V = y.cloneElement(f, {
      className: G(z.icon, f.props.className)
    })), m.jsxs(An, {
      as: B,
      className: G(z.root, i),
      disabled: O && p ? true : void 0,
      onClick: u,
      onKeyDown: k,
      onKeyUp: $,
      ref: S,
      tabIndex: d && p ? -1 : w,
      ownerState: A,
      ...F,
      ...P,
      children: [
        I || V,
        m.jsx(En, {
          className: G(z.label),
          ownerState: A,
          children: R
        }),
        L
      ]
    });
  });
  function Mn(e) {
    return ue("MuiDialogActions", e);
  }
  fe("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  let kn, In;
  kn = (e) => {
    const { classes: t, disableSpacing: o } = e;
    return ge({
      root: [
        "root",
        !o && "spacing"
      ]
    }, Mn, t);
  };
  In = U("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        !o.disableSpacing && t.spacing
      ];
    }
  })({
    display: "flex",
    alignItems: "center",
    padding: 8,
    justifyContent: "flex-end",
    flex: "0 0 auto",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disableSpacing,
        style: {
          "& > :not(style) ~ :not(style)": {
            marginLeft: 8
          }
        }
      }
    ]
  });
  Qn = y.forwardRef(function(t, o) {
    const r = ve({
      props: t,
      name: "MuiDialogActions"
    }), { className: n, disableSpacing: i = false, ...l } = r, a = {
      ...r,
      disableSpacing: i
    }, s = kn(a);
    return m.jsx(In, {
      className: G(s.root, n),
      ownerState: a,
      ref: o,
      ...l
    });
  });
  function jn(e) {
    return ue("MuiDialogContentText", e);
  }
  fe("MuiDialogContentText", [
    "root"
  ]);
  let Dn, Ln;
  Dn = (e) => {
    const { classes: t } = e, r = ge({
      root: [
        "root"
      ]
    }, jn, t);
    return {
      ...t,
      ...r
    };
  };
  Ln = U(to, {
    shouldForwardProp: (e) => To(e) || e === "classes",
    name: "MuiDialogContentText",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({});
  Jn = y.forwardRef(function(t, o) {
    const r = ve({
      props: t,
      name: "MuiDialogContentText"
    }), { children: n, className: i, ...l } = r, a = Dn(l);
    return m.jsx(Ln, {
      component: "p",
      variant: "body1",
      color: "textSecondary",
      ref: o,
      ownerState: l,
      className: G(a.root, i),
      ...r,
      classes: a
    });
  });
  function zn(e) {
    return ue("MuiTooltip", e);
  }
  const H = fe("MuiTooltip", [
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
  function Bn(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Wn = (e) => {
    const { classes: t, disableInteractive: o, arrow: r, touch: n, placement: i } = e, l = {
      popper: [
        "popper",
        !o && "popperInteractive",
        r && "popperArrow"
      ],
      tooltip: [
        "tooltip",
        r && "tooltipArrow",
        n && "touch",
        `tooltipPlacement${D(i.split("-")[0])}`
      ],
      arrow: [
        "arrow"
      ]
    };
    return ge(l, zn, t);
  }, Nn = U(fo, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.popper,
        !o.disableInteractive && t.popperInteractive,
        o.arrow && t.popperArrow,
        !o.open && t.popperClose
      ];
    }
  })(re(({ theme: e }) => ({
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
          [`&[data-popper-placement*="bottom"] .${H.arrow}`]: {
            top: 0,
            marginTop: "-0.71em",
            "&::before": {
              transformOrigin: "0 100%"
            }
          },
          [`&[data-popper-placement*="top"] .${H.arrow}`]: {
            bottom: 0,
            marginBottom: "-0.71em",
            "&::before": {
              transformOrigin: "100% 0"
            }
          },
          [`&[data-popper-placement*="right"] .${H.arrow}`]: {
            height: "1em",
            width: "0.71em",
            "&::before": {
              transformOrigin: "100% 100%"
            }
          },
          [`&[data-popper-placement*="left"] .${H.arrow}`]: {
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
          [`&[data-popper-placement*="right"] .${H.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="right"] .${H.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${H.arrow}`]: {
            right: 0,
            marginRight: "-0.71em"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.arrow && !!t.isRtl,
        style: {
          [`&[data-popper-placement*="left"] .${H.arrow}`]: {
            left: 0,
            marginLeft: "-0.71em"
          }
        }
      }
    ]
  }))), Fn = U("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.tooltip,
        o.touch && t.touch,
        o.arrow && t.tooltipArrow,
        t[`tooltipPlacement${D(o.placement.split("-")[0])}`]
      ];
    }
  })(re(({ theme: e }) => ({
    backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : te(e.palette.grey[700], 0.92),
    borderRadius: (e.vars || e).shape.borderRadius,
    color: (e.vars || e).palette.common.white,
    fontFamily: e.typography.fontFamily,
    padding: "4px 8px",
    fontSize: e.typography.pxToRem(11),
    maxWidth: 300,
    margin: 2,
    wordWrap: "break-word",
    fontWeight: e.typography.fontWeightMedium,
    [`.${H.popper}[data-popper-placement*="left"] &`]: {
      transformOrigin: "right center"
    },
    [`.${H.popper}[data-popper-placement*="right"] &`]: {
      transformOrigin: "left center"
    },
    [`.${H.popper}[data-popper-placement*="top"] &`]: {
      transformOrigin: "center bottom",
      marginBottom: "14px"
    },
    [`.${H.popper}[data-popper-placement*="bottom"] &`]: {
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
          lineHeight: `${Bn(16 / 14)}em`,
          fontWeight: e.typography.fontWeightRegular
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl,
        style: {
          [`.${H.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "14px"
          },
          [`.${H.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !t.isRtl && t.touch,
        style: {
          [`.${H.popper}[data-popper-placement*="left"] &`]: {
            marginRight: "24px"
          },
          [`.${H.popper}[data-popper-placement*="right"] &`]: {
            marginLeft: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl,
        style: {
          [`.${H.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "14px"
          },
          [`.${H.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "14px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => !!t.isRtl && t.touch,
        style: {
          [`.${H.popper}[data-popper-placement*="left"] &`]: {
            marginLeft: "24px"
          },
          [`.${H.popper}[data-popper-placement*="right"] &`]: {
            marginRight: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${H.popper}[data-popper-placement*="top"] &`]: {
            marginBottom: "24px"
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.touch,
        style: {
          [`.${H.popper}[data-popper-placement*="bottom"] &`]: {
            marginTop: "24px"
          }
        }
      }
    ]
  }))), Vn = U("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow
  })(re(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : te(e.palette.grey[700], 0.9),
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
  let dt = false;
  const Zt = new ko();
  let Ze = {
    x: 0,
    y: 0
  };
  function ut(e, t) {
    return (o, ...r) => {
      t && t(o, ...r), e(o, ...r);
    };
  }
  _n = y.forwardRef(function(t, o) {
    const r = ve({
      props: t,
      name: "MuiTooltip"
    }), { arrow: n = false, children: i, classes: l, components: a = {}, componentsProps: s = {}, describeChild: c = false, disableFocusListener: p = false, disableHoverListener: f = false, disableInteractive: R = false, disableTouchListener: u = false, enterDelay: b = 100, enterNextDelay: v = 0, enterTouchDelay: x = 700, followCursor: g = false, id: C, leaveDelay: w = 0, leaveTouchDelay: d = 1500, onClose: P, onOpen: h, open: S, placement: M = "bottom", PopperComponent: k, PopperProps: $ = {}, slotProps: O = {}, slots: B = {}, title: A, TransitionComponent: z, TransitionProps: F, ...L } = r, I = y.isValidElement(i) ? i : m.jsx("span", {
      children: i
    }), V = Pt(), W = eo(), [_, be] = y.useState(), [ie, xe] = y.useState(null), Q = y.useRef(false), Y = R || g, T = Qe(), q = Qe(), N = Qe(), ee = Qe(), [we, me] = Qt({
      controlled: S,
      default: false,
      name: "Tooltip",
      state: "open"
    });
    let se = we;
    const Me = Ao(C), $e = y.useRef(), ke = Lt(() => {
      $e.current !== void 0 && (document.body.style.WebkitUserSelect = $e.current, $e.current = void 0), ee.clear();
    });
    y.useEffect(() => ke, [
      ke
    ]);
    const Ne = (E) => {
      Zt.clear(), dt = true, me(true), h && !se && h(E);
    }, Re = Lt((E) => {
      Zt.start(800 + w, () => {
        dt = false;
      }), me(false), P && se && P(E), T.start(V.transitions.duration.shortest, () => {
        Q.current = false;
      });
    }), Ie = (E) => {
      Q.current && E.type !== "touchstart" || (_ && _.removeAttribute("title"), q.clear(), N.clear(), b || dt && v ? q.start(dt ? v : b, () => {
        Ne(E);
      }) : Ne(E));
    }, Fe = (E) => {
      q.clear(), N.start(w, () => {
        Re(E);
      });
    }, [, pe] = y.useState(false), Se = (E) => {
      zt(E.target) || (pe(false), Fe(E));
    }, Ve = (E) => {
      _ || be(E.currentTarget), zt(E.target) && (pe(true), Ie(E));
    }, He = (E) => {
      Q.current = true;
      const Ce = I.props;
      Ce.onTouchStart && Ce.onTouchStart(E);
    }, Ue = (E) => {
      He(E), N.clear(), T.clear(), ke(), $e.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", ee.start(x, () => {
        document.body.style.WebkitUserSelect = $e.current, Ie(E);
      });
    }, at = (E) => {
      I.props.onTouchEnd && I.props.onTouchEnd(E), ke(), N.start(d, () => {
        Re(E);
      });
    };
    y.useEffect(() => {
      if (!se) return;
      function E(Ce) {
        Ce.key === "Escape" && Re(Ce);
      }
      return document.addEventListener("keydown", E), () => {
        document.removeEventListener("keydown", E);
      };
    }, [
      Re,
      se
    ]);
    const it = et(Eo(I), be, o);
    !A && A !== 0 && (se = false);
    const je = y.useRef(), st = (E) => {
      const Ce = I.props;
      Ce.onMouseMove && Ce.onMouseMove(E), Ze = {
        x: E.clientX,
        y: E.clientY
      }, je.current && je.current.update();
    }, qe = {}, mt = typeof A == "string";
    c ? (qe.title = !se && mt && !f ? A : null, qe["aria-describedby"] = se ? Me : null) : (qe["aria-label"] = mt ? A : null, qe["aria-labelledby"] = se && !mt ? Me : null);
    const le = {
      ...qe,
      ...L,
      ...I.props,
      className: G(L.className, I.props.className),
      onTouchStart: He,
      ref: it,
      ...g ? {
        onMouseMove: st
      } : {}
    }, Ge = {};
    u || (le.onTouchStart = Ue, le.onTouchEnd = at), f || (le.onMouseOver = ut(Ie, le.onMouseOver), le.onMouseLeave = ut(Fe, le.onMouseLeave), Y || (Ge.onMouseOver = Ie, Ge.onMouseLeave = Fe)), p || (le.onFocus = ut(Ve, le.onFocus), le.onBlur = ut(Se, le.onBlur), Y || (Ge.onFocus = Ve, Ge.onBlur = Se));
    const Oe = {
      ...r,
      isRtl: W,
      arrow: n,
      disableInteractive: Y,
      placement: M,
      PopperComponentProp: k,
      touch: Q.current
    }, Xe = typeof O.popper == "function" ? O.popper(Oe) : O.popper, vo = y.useMemo(() => {
      var _a, _b;
      let E = [
        {
          name: "arrow",
          enabled: !!ie,
          options: {
            element: ie,
            padding: 4
          }
        }
      ];
      return ((_a = $.popperOptions) == null ? void 0 : _a.modifiers) && (E = E.concat($.popperOptions.modifiers)), ((_b = Xe == null ? void 0 : Xe.popperOptions) == null ? void 0 : _b.modifiers) && (E = E.concat(Xe.popperOptions.modifiers)), {
        ...$.popperOptions,
        ...Xe == null ? void 0 : Xe.popperOptions,
        modifiers: E
      };
    }, [
      ie,
      $.popperOptions,
      Xe == null ? void 0 : Xe.popperOptions
    ]), ht = Wn(Oe), go = typeof O.transition == "function" ? O.transition(Oe) : O.transition, lt = {
      slots: {
        popper: a.Popper,
        transition: a.Transition ?? z,
        tooltip: a.Tooltip,
        arrow: a.Arrow,
        ...B
      },
      slotProps: {
        arrow: O.arrow ?? s.arrow,
        popper: {
          ...$,
          ...Xe ?? s.popper
        },
        tooltip: O.tooltip ?? s.tooltip,
        transition: {
          ...F,
          ...go ?? s.transition
        }
      }
    }, [mo, ho] = X("popper", {
      elementType: Nn,
      externalForwardedProps: lt,
      ownerState: Oe,
      className: G(ht.popper, $ == null ? void 0 : $.className)
    }), [yo, bo] = X("transition", {
      elementType: Mo,
      externalForwardedProps: lt,
      ownerState: Oe
    }), [xo, wo] = X("tooltip", {
      elementType: Fn,
      className: ht.tooltip,
      externalForwardedProps: lt,
      ownerState: Oe
    }), [Co, Po] = X("arrow", {
      elementType: Vn,
      className: ht.arrow,
      externalForwardedProps: lt,
      ownerState: Oe,
      ref: xe
    });
    return m.jsxs(y.Fragment, {
      children: [
        y.cloneElement(I, le),
        m.jsx(mo, {
          as: k ?? fo,
          placement: M,
          anchorEl: g ? {
            getBoundingClientRect: () => ({
              top: Ze.y,
              left: Ze.x,
              right: Ze.x,
              bottom: Ze.y,
              width: 0,
              height: 0
            })
          } : _,
          popperRef: je,
          open: _ ? se : false,
          id: Me,
          transition: true,
          ...Ge,
          ...ho,
          popperOptions: vo,
          children: ({ TransitionProps: E }) => m.jsx(yo, {
            timeout: V.transitions.duration.shorter,
            ...E,
            ...bo,
            children: m.jsxs(xo, {
              ...wo,
              children: [
                A,
                n ? m.jsx(Co, {
                  ...Po
                }) : null
              ]
            })
          })
        })
      ]
    });
  });
  Hn = ye(m.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear");
  ea = ye(m.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator");
  ta = ye(m.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore");
  oa = function({ value: e, onChange: t, label: o, overridden: r }) {
    const n = Pt(), [i, l] = y.useState(null), [a, s] = y.useState(e), c = y.useRef(null), { anchorOrigin: p, transformOrigin: f, maxHeight: R, setContentRef: u, popoverActionRef: b } = Io(i, !!i), v = !!i;
    y.useEffect(() => {
      s(e);
    }, [
      e
    ]), y.useEffect(() => () => {
      c.current !== null && clearTimeout(c.current);
    }, []);
    const x = y.useCallback((C) => {
      s(C), c.current !== null && clearTimeout(c.current), c.current = setTimeout(() => {
        c.current = null, t(C);
      }, 150);
    }, [
      t
    ]), g = y.useCallback((C) => {
      C.stopPropagation(), c.current !== null && (clearTimeout(c.current), c.current = null), t("");
    }, [
      t
    ]);
    return m.jsxs(Ye, {
      children: [
        m.jsxs(Ye, {
          sx: {
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 1,
            py: 0.5,
            cursor: "pointer",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: n.palette.action.hover
            },
            transition: "background-color 150ms"
          },
          onClick: (C) => l(C.currentTarget),
          children: [
            m.jsx(to, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                userSelect: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: o
            }),
            m.jsxs(Ye, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5
              },
              children: [
                m.jsx(Ye, {
                  sx: {
                    width: 22,
                    height: 22,
                    borderRadius: "4px",
                    background: a || "transparent",
                    border: a ? `1px solid ${n.palette.divider}` : `1px dashed ${n.palette.text.disabled}`
                  }
                }),
                r ? m.jsx(_t, {
                  size: "small",
                  onClick: g,
                  title: jo.t("theme_studio_reset_color"),
                  sx: {
                    p: 0.25
                  },
                  children: m.jsx(Hn, {
                    fontSize: "inherit"
                  })
                }) : null
              ]
            })
          ]
        }),
        m.jsx(Do, {
          action: b,
          open: v,
          anchorEl: i,
          onClose: () => l(null),
          anchorOrigin: p,
          transformOrigin: f,
          slotProps: {
            paper: {
              elevation: 0,
              sx: {
                p: "9px",
                borderRadius: "6px",
                backgroundColor: "rgb(32,32,32)",
                boxSizing: "border-box",
                maxHeight: R,
                overflowX: "hidden",
                overflowY: "auto"
              }
            }
          },
          children: m.jsx(Ye, {
            ref: u,
            sx: {
              borderRadius: "6px"
            },
            children: m.jsx(Lo, {
              value: a || "#ffffff",
              onChange: x,
              hidePresets: true,
              hideInputs: true,
              hideEyeDrop: true,
              hideInputType: true
            })
          })
        })
      ]
    });
  };
});
export {
  Gn as A,
  Zn as C,
  ea as D,
  ta as E,
  _n as T,
  __tla,
  Jn as a,
  Qn as b,
  oa as c,
  Yn as d,
  Xn as e,
  Kn as f,
  Hn as g
};
