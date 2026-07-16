import { v as p, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as X, a as Y, u as J, ap as Ao, aq as ko, R as vo, N as wo, h as xo, j as r, s as P, d as O, e as Q, ar as lo, m as _, W as Po, b as W, P as Co, B as no, c as q, I as bo, w as d, _ as co, p as po, x as Z, i as H, ad as Mo, n as ao, T as zo, ae as jo, af as To, __tla as __tla_1 } from "./usePopoverPositioning-C05Nu8XW.js";
let ye, he, Re, Ie, Ae, $e, me, Se, xe;
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
  function Eo(o) {
    return X("MuiCollapse", o);
  }
  Y("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const Do = (o) => {
    const { orientation: e, classes: t } = o, a = {
      root: [
        "root",
        `${e}`
      ],
      entered: [
        "entered"
      ],
      hidden: [
        "hidden"
      ],
      wrapper: [
        "wrapper",
        `${e}`
      ],
      wrapperInner: [
        "wrapperInner",
        `${e}`
      ]
    };
    return Q(a, Eo, t);
  }, Oo = P("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: t } = o;
      return [
        e.root,
        e[t.orientation],
        t.state === "entered" && e.entered,
        t.state === "exited" && !t.in && t.collapsedSize === "0px" && e.hidden
      ];
    }
  })(_(({ theme: o }) => ({
    height: 0,
    overflow: "hidden",
    transition: o.transitions.create("height"),
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          height: "auto",
          width: 0,
          transition: o.transitions.create("width")
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
        props: ({ ownerState: e }) => e.state === "exited" && !e.in && e.collapsedSize === "0px",
        style: {
          visibility: "hidden"
        }
      }
    ]
  }))), Lo = P("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (o, e) => e.wrapper
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
  }), No = P("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (o, e) => e.wrapperInner
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
  }), so = p.forwardRef(function(e, t) {
    const a = J({
      props: e,
      name: "MuiCollapse"
    }), { addEndListener: n, children: g, className: u, collapsedSize: i = "0px", component: l, easing: b, in: R, onEnter: v, onEntered: T, onEntering: z, onExit: f, onExited: I, onExiting: y, orientation: x = "vertical", style: M, timeout: m = Ao.standard, TransitionComponent: S = ko, ...L } = a, h = {
      ...a,
      orientation: x,
      collapsedSize: i
    }, A = Do(h), E = vo(), G = wo(), C = p.useRef(null), k = p.useRef(), N = typeof i == "number" ? `${i}px` : i, j = x === "horizontal", $ = j ? "width" : "height", F = p.useRef(null), K = xo(t, F), D = (c) => (V) => {
      if (c) {
        const B = F.current;
        V === void 0 ? c(B) : c(B, V);
      }
    }, U = () => C.current ? C.current[j ? "clientWidth" : "clientHeight"] : 0, w = D((c, V) => {
      C.current && j && (C.current.style.position = "absolute"), c.style[$] = N, v && v(c, V);
    }), mo = D((c, V) => {
      const B = U();
      C.current && j && (C.current.style.position = "");
      const { duration: eo, easing: to } = lo({
        style: M,
        timeout: m,
        easing: b
      }, {
        mode: "enter"
      });
      if (m === "auto") {
        const io = E.transitions.getAutoHeightDuration(B);
        c.style.transitionDuration = `${io}ms`, k.current = io;
      } else c.style.transitionDuration = typeof eo == "string" ? eo : `${eo}ms`;
      c.style[$] = `${B}px`, c.style.transitionTimingFunction = to, z && z(c, V);
    }), $o = D((c, V) => {
      c.style[$] = "auto", T && T(c, V);
    }), So = D((c) => {
      c.style[$] = `${U()}px`, f && f(c);
    }), ho = D(I), Ro = D((c) => {
      const V = U(), { duration: B, easing: eo } = lo({
        style: M,
        timeout: m,
        easing: b
      }, {
        mode: "exit"
      });
      if (m === "auto") {
        const to = E.transitions.getAutoHeightDuration(V);
        c.style.transitionDuration = `${to}ms`, k.current = to;
      } else c.style.transitionDuration = typeof B == "string" ? B : `${B}ms`;
      c.style[$] = N, c.style.transitionTimingFunction = eo, y && y(c);
    }), Io = (c) => {
      m === "auto" && G.start(k.current || 0, c), n && n(F.current, c);
    };
    return r.jsx(S, {
      in: R,
      onEnter: w,
      onEntered: $o,
      onEntering: mo,
      onExit: So,
      onExited: ho,
      onExiting: Ro,
      addEndListener: Io,
      nodeRef: F,
      timeout: m === "auto" ? null : m,
      ...L,
      children: (c, { ownerState: V, ...B }) => r.jsx(Oo, {
        as: l,
        className: O(A.root, u, {
          entered: A.entered,
          exited: !R && N === "0px" && A.hidden
        }[c]),
        style: {
          [j ? "minWidth" : "minHeight"]: N,
          ...M
        },
        ref: K,
        ownerState: {
          ...h,
          state: c
        },
        ...B,
        children: r.jsx(Lo, {
          ownerState: {
            ...h,
            state: c
          },
          className: A.wrapper,
          ref: C,
          children: r.jsx(No, {
            ownerState: {
              ...h,
              state: c
            },
            className: A.wrapperInner,
            children: g
          })
        })
      })
    });
  });
  so && (so.muiSupportAuto = true);
  const yo = p.createContext({});
  function Wo(o) {
    return X("MuiAccordion", o);
  }
  let ro, Vo, Bo, Fo;
  ro = Y("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]);
  Vo = (o) => {
    const { classes: e, square: t, expanded: a, disabled: n, disableGutters: g } = o;
    return Q({
      root: [
        "root",
        !t && "rounded",
        a && "expanded",
        n && "disabled",
        !g && "gutters"
      ],
      heading: [
        "heading"
      ],
      region: [
        "region"
      ]
    }, Wo, e);
  };
  Bo = P(Co, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: t } = o;
      return [
        {
          [`& .${ro.region}`]: e.region
        },
        e.root,
        !t.square && e.rounded,
        !t.disableGutters && e.gutters
      ];
    }
  })(_(({ theme: o }) => {
    const e = {
      duration: o.transitions.duration.shortest
    };
    return {
      position: "relative",
      transition: o.transitions.create([
        "margin"
      ], e),
      overflowAnchor: "none",
      "&::before": {
        position: "absolute",
        left: 0,
        top: -1,
        right: 0,
        height: 1,
        content: '""',
        opacity: 1,
        backgroundColor: (o.vars || o).palette.divider,
        transition: o.transitions.create([
          "opacity",
          "background-color"
        ], e)
      },
      "&:first-of-type": {
        "&::before": {
          display: "none"
        }
      },
      [`&.${ro.expanded}`]: {
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
      [`&.${ro.disabled}`]: {
        backgroundColor: (o.vars || o).palette.action.disabledBackground
      }
    };
  }), _(({ theme: o }) => ({
    variants: [
      {
        props: (e) => !e.square,
        style: {
          borderRadius: 0,
          "&:first-of-type": {
            borderTopLeftRadius: (o.vars || o).shape.borderRadius,
            borderTopRightRadius: (o.vars || o).shape.borderRadius
          },
          "&:last-of-type": {
            borderBottomLeftRadius: (o.vars || o).shape.borderRadius,
            borderBottomRightRadius: (o.vars || o).shape.borderRadius,
            "@supports (-ms-ime-align: auto)": {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0
            }
          }
        }
      },
      {
        props: (e) => !e.disableGutters,
        style: {
          [`&.${ro.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  })));
  Fo = P("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (o, e) => e.heading
  })({
    all: "unset"
  });
  ye = p.forwardRef(function(e, t) {
    const a = J({
      props: e,
      name: "MuiAccordion"
    }), { children: n, className: g, defaultExpanded: u = false, disabled: i = false, disableGutters: l = false, expanded: b, onChange: R, square: v = false, slots: T = {}, slotProps: z = {}, TransitionComponent: f, TransitionProps: I, ...y } = a, [x, M] = Po({
      controlled: b,
      default: u,
      name: "Accordion",
      state: "expanded"
    }), m = p.useCallback((U) => {
      M(!x), R && R(U, !x);
    }, [
      x,
      R,
      M
    ]), [S, ...L] = p.Children.toArray(n), h = p.useMemo(() => ({
      expanded: x,
      disabled: i,
      disableGutters: l,
      toggle: m
    }), [
      x,
      i,
      l,
      m
    ]), A = {
      ...a,
      square: v,
      disabled: i,
      disableGutters: l,
      expanded: x
    }, E = Vo(A), G = {
      transition: f,
      ...T
    }, C = {
      transition: I,
      ...z
    }, k = {
      slots: G,
      slotProps: C
    }, [N, j] = W("root", {
      elementType: Bo,
      externalForwardedProps: {
        ...k,
        ...y
      },
      className: O(E.root, g),
      shouldForwardComponentProp: true,
      ownerState: A,
      ref: t,
      additionalProps: {
        square: v
      }
    }), [$, F] = W("heading", {
      elementType: Fo,
      externalForwardedProps: k,
      className: E.heading,
      ownerState: A
    }), [K, D] = W("transition", {
      elementType: so,
      externalForwardedProps: k,
      ownerState: A
    });
    return r.jsxs(N, {
      ...j,
      children: [
        r.jsx($, {
          ...F,
          children: r.jsx(yo.Provider, {
            value: h,
            children: S
          })
        }),
        r.jsx(K, {
          in: x,
          timeout: "auto",
          ...D,
          children: r.jsx("div", {
            "aria-labelledby": S.props.id,
            id: S.props["aria-controls"],
            role: "region",
            className: E.region,
            children: L
          })
        })
      ]
    });
  });
  function Uo(o) {
    return X("MuiAccordionDetails", o);
  }
  Y("MuiAccordionDetails", [
    "root"
  ]);
  let Ho, Go;
  Ho = (o) => {
    const { classes: e } = o;
    return Q({
      root: [
        "root"
      ]
    }, Uo, e);
  };
  Go = P("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (o, e) => e.root
  })(_(({ theme: o }) => ({
    padding: o.spacing(1, 2, 2)
  })));
  me = p.forwardRef(function(e, t) {
    const a = J({
      props: e,
      name: "MuiAccordionDetails"
    }), { className: n, ...g } = a, u = a, i = Ho(u);
    return r.jsx(Go, {
      className: O(i.root, n),
      ref: t,
      ownerState: u,
      ...g
    });
  });
  function _o(o) {
    return X("MuiAccordionSummary", o);
  }
  let oo, Ko, qo, Zo, Xo;
  oo = Y("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]);
  Ko = (o) => {
    const { classes: e, expanded: t, disabled: a, disableGutters: n } = o;
    return Q({
      root: [
        "root",
        t && "expanded",
        a && "disabled",
        !n && "gutters"
      ],
      focusVisible: [
        "focusVisible"
      ],
      content: [
        "content",
        t && "expanded",
        !n && "contentGutters"
      ],
      expandIconWrapper: [
        "expandIconWrapper",
        t && "expanded"
      ]
    }, _o, e);
  };
  qo = P(no, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (o, e) => e.root
  })(_(({ theme: o }) => {
    const e = {
      duration: o.transitions.duration.shortest
    };
    return {
      display: "flex",
      width: "100%",
      minHeight: 48,
      padding: o.spacing(0, 2),
      transition: o.transitions.create([
        "min-height",
        "background-color"
      ], e),
      [`&.${oo.focusVisible}`]: {
        backgroundColor: (o.vars || o).palette.action.focus
      },
      [`&.${oo.disabled}`]: {
        opacity: (o.vars || o).palette.action.disabledOpacity
      },
      [`&:hover:not(.${oo.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (t) => !t.disableGutters,
          style: {
            [`&.${oo.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  }));
  Zo = P("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (o, e) => e.content
  })(_(({ theme: o }) => ({
    display: "flex",
    textAlign: "start",
    flexGrow: 1,
    margin: "12px 0",
    variants: [
      {
        props: (e) => !e.disableGutters,
        style: {
          transition: o.transitions.create([
            "margin"
          ], {
            duration: o.transitions.duration.shortest
          }),
          [`&.${oo.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  })));
  Xo = P("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (o, e) => e.expandIconWrapper
  })(_(({ theme: o }) => ({
    display: "flex",
    color: (o.vars || o).palette.action.active,
    transform: "rotate(0deg)",
    transition: o.transitions.create("transform", {
      duration: o.transitions.duration.shortest
    }),
    [`&.${oo.expanded}`]: {
      transform: "rotate(180deg)"
    }
  })));
  $e = p.forwardRef(function(e, t) {
    const a = J({
      props: e,
      name: "MuiAccordionSummary"
    }), { children: n, className: g, expandIcon: u, focusVisibleClassName: i, onClick: l, slots: b, slotProps: R, ...v } = a, { disabled: T = false, disableGutters: z, expanded: f, toggle: I } = p.useContext(yo), y = (C) => {
      I && I(C), l && l(C);
    }, x = {
      ...a,
      expanded: f,
      disabled: T,
      disableGutters: z
    }, M = Ko(x), m = {
      slots: b,
      slotProps: R
    }, [S, L] = W("root", {
      ref: t,
      shouldForwardComponentProp: true,
      className: O(M.root, g),
      elementType: qo,
      externalForwardedProps: {
        ...m,
        ...v
      },
      ownerState: x,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: T,
        "aria-expanded": f,
        focusVisibleClassName: O(M.focusVisible, i)
      },
      getSlotProps: (C) => ({
        ...C,
        onClick: (k) => {
          var _a;
          (_a = C.onClick) == null ? void 0 : _a.call(C, k), y(k);
        }
      })
    }), [h, A] = W("content", {
      className: M.content,
      elementType: Zo,
      externalForwardedProps: m,
      ownerState: x
    }), [E, G] = W("expandIconWrapper", {
      className: M.expandIconWrapper,
      elementType: Xo,
      externalForwardedProps: m,
      ownerState: x
    });
    return r.jsxs(S, {
      ...L,
      children: [
        r.jsx(h, {
          ...A,
          children: n
        }),
        u && r.jsx(E, {
          ...G,
          children: u
        })
      ]
    });
  });
  function Yo(o) {
    return X("MuiAlert", o);
  }
  let uo, Jo, Qo, oe, ee, te, ae, re, ne, se, ie, go, le;
  uo = Y("MuiAlert", [
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
  Jo = q(r.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined");
  Qo = q(r.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined");
  oe = q(r.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline");
  ee = q(r.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined");
  te = q(r.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close");
  ae = (o) => {
    const { variant: e, color: t, severity: a, classes: n } = o, g = {
      root: [
        "root",
        `color${d(t || a)}`,
        `${e}${d(t || a)}`,
        `${e}`
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
    return Q(g, Yo, n);
  };
  re = P(Co, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: t } = o;
      return [
        e.root,
        e[t.variant],
        e[`${t.variant}${d(t.color || t.severity)}`]
      ];
    }
  })(_(({ theme: o }) => {
    const e = o.palette.mode === "light" ? co : po, t = o.palette.mode === "light" ? po : co;
    return {
      ...o.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(o.palette).filter(Z([
          "light"
        ])).map(([a]) => ({
          props: {
            colorSeverity: a,
            variant: "standard"
          },
          style: {
            color: o.vars ? o.vars.palette.Alert[`${a}Color`] : e(o.palette[a].light, 0.6),
            backgroundColor: o.vars ? o.vars.palette.Alert[`${a}StandardBg`] : t(o.palette[a].light, 0.9),
            [`& .${uo.icon}`]: o.vars ? {
              color: o.vars.palette.Alert[`${a}IconColor`]
            } : {
              color: o.palette[a].main
            }
          }
        })),
        ...Object.entries(o.palette).filter(Z([
          "light"
        ])).map(([a]) => ({
          props: {
            colorSeverity: a,
            variant: "outlined"
          },
          style: {
            color: o.vars ? o.vars.palette.Alert[`${a}Color`] : e(o.palette[a].light, 0.6),
            border: `1px solid ${(o.vars || o).palette[a].light}`,
            [`& .${uo.icon}`]: o.vars ? {
              color: o.vars.palette.Alert[`${a}IconColor`]
            } : {
              color: o.palette[a].main
            }
          }
        })),
        ...Object.entries(o.palette).filter(Z([
          "dark"
        ])).map(([a]) => ({
          props: {
            colorSeverity: a,
            variant: "filled"
          },
          style: {
            fontWeight: o.typography.fontWeightMedium,
            ...o.vars ? {
              color: o.vars.palette.Alert[`${a}FilledColor`],
              backgroundColor: o.vars.palette.Alert[`${a}FilledBg`]
            } : {
              backgroundColor: o.palette.mode === "dark" ? o.palette[a].dark : o.palette[a].main,
              color: o.palette.getContrastText(o.palette[a].main)
            }
          }
        }))
      ]
    };
  }));
  ne = P("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (o, e) => e.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  });
  se = P("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (o, e) => e.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  });
  ie = P("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (o, e) => e.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  });
  go = {
    success: r.jsx(Jo, {
      fontSize: "inherit"
    }),
    warning: r.jsx(Qo, {
      fontSize: "inherit"
    }),
    error: r.jsx(oe, {
      fontSize: "inherit"
    }),
    info: r.jsx(ee, {
      fontSize: "inherit"
    })
  };
  Se = p.forwardRef(function(e, t) {
    const a = J({
      props: e,
      name: "MuiAlert"
    }), { action: n, children: g, className: u, closeText: i = "Close", color: l, components: b = {}, componentsProps: R = {}, icon: v, iconMapping: T = go, onClose: z, role: f = "alert", severity: I = "success", slotProps: y = {}, slots: x = {}, variant: M = "standard", ...m } = a, S = {
      ...a,
      color: l,
      severity: I,
      variant: M,
      colorSeverity: l || I
    }, L = ae(S), h = {
      slots: {
        closeButton: b.CloseButton,
        closeIcon: b.CloseIcon,
        ...x
      },
      slotProps: {
        ...R,
        ...y
      }
    }, [A, E] = W("root", {
      ref: t,
      shouldForwardComponentProp: true,
      className: O(L.root, u),
      elementType: re,
      externalForwardedProps: {
        ...h,
        ...m
      },
      ownerState: S,
      additionalProps: {
        role: f,
        elevation: 0
      }
    }), [G, C] = W("icon", {
      className: L.icon,
      elementType: ne,
      externalForwardedProps: h,
      ownerState: S
    }), [k, N] = W("message", {
      className: L.message,
      elementType: se,
      externalForwardedProps: h,
      ownerState: S
    }), [j, $] = W("action", {
      className: L.action,
      elementType: ie,
      externalForwardedProps: h,
      ownerState: S
    }), [F, K] = W("closeButton", {
      elementType: bo,
      externalForwardedProps: h,
      ownerState: S
    }), [D, U] = W("closeIcon", {
      elementType: te,
      externalForwardedProps: h,
      ownerState: S
    });
    return r.jsxs(A, {
      ...E,
      children: [
        v !== false ? r.jsx(G, {
          ...C,
          children: v || T[I] || go[I]
        }) : null,
        r.jsx(k, {
          ...N,
          children: g
        }),
        n != null ? r.jsx(j, {
          ...$,
          children: n
        }) : null,
        n == null && z ? r.jsx(j, {
          ...$,
          children: r.jsx(F, {
            size: "small",
            "aria-label": i,
            title: i,
            color: "inherit",
            onClick: z,
            ...K,
            children: r.jsx(D, {
              fontSize: "small",
              ...U
            })
          })
        }) : null
      ]
    });
  });
  le = q(r.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function ce(o) {
    return X("MuiChip", o);
  }
  const s = Y("MuiChip", [
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
  ]), de = (o) => {
    const { classes: e, disabled: t, size: a, color: n, iconColor: g, onDelete: u, clickable: i, variant: l } = o, b = {
      root: [
        "root",
        l,
        t && "disabled",
        `size${d(a)}`,
        `color${d(n)}`,
        i && "clickable",
        i && `clickableColor${d(n)}`,
        u && "deletable",
        u && `deletableColor${d(n)}`,
        `${l}${d(n)}`
      ],
      label: [
        "label",
        `label${d(a)}`
      ],
      avatar: [
        "avatar",
        `avatar${d(a)}`,
        `avatarColor${d(n)}`
      ],
      icon: [
        "icon",
        `icon${d(a)}`,
        `iconColor${d(g)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${d(a)}`,
        `deleteIconColor${d(n)}`,
        `deleteIcon${d(l)}Color${d(n)}`
      ]
    };
    return Q(b, ce, e);
  }, pe = P("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: t } = o, { color: a, iconColor: n, clickable: g, onDelete: u, size: i, variant: l } = t;
      return [
        {
          [`& .${s.avatar}`]: e.avatar
        },
        {
          [`& .${s.avatar}`]: e[`avatar${d(i)}`]
        },
        {
          [`& .${s.avatar}`]: e[`avatarColor${d(a)}`]
        },
        {
          [`& .${s.icon}`]: e.icon
        },
        {
          [`& .${s.icon}`]: e[`icon${d(i)}`]
        },
        {
          [`& .${s.icon}`]: e[`iconColor${d(n)}`]
        },
        {
          [`& .${s.deleteIcon}`]: e.deleteIcon
        },
        {
          [`& .${s.deleteIcon}`]: e[`deleteIcon${d(i)}`]
        },
        {
          [`& .${s.deleteIcon}`]: e[`deleteIconColor${d(a)}`]
        },
        {
          [`& .${s.deleteIcon}`]: e[`deleteIcon${d(l)}Color${d(a)}`]
        },
        e.root,
        e[`size${d(i)}`],
        e[`color${d(a)}`],
        g && e.clickable,
        g && a !== "default" && e[`clickableColor${d(a)})`],
        u && e.deletable,
        u && a !== "default" && e[`deletableColor${d(a)}`],
        e[l],
        e[`${l}${d(a)}`]
      ];
    }
  })(_(({ theme: o }) => {
    const e = o.palette.mode === "light" ? o.palette.grey[700] : o.palette.grey[300];
    return {
      maxWidth: "100%",
      fontFamily: o.typography.fontFamily,
      fontSize: o.typography.pxToRem(13),
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: 32,
      color: (o.vars || o).palette.text.primary,
      backgroundColor: (o.vars || o).palette.action.selected,
      borderRadius: 32 / 2,
      whiteSpace: "nowrap",
      transition: o.transitions.create([
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
      [`&.${s.disabled}`]: {
        opacity: (o.vars || o).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${s.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: o.vars ? o.vars.palette.Chip.defaultAvatarColor : e,
        fontSize: o.typography.pxToRem(12)
      },
      [`& .${s.avatarColorPrimary}`]: {
        color: (o.vars || o).palette.primary.contrastText,
        backgroundColor: (o.vars || o).palette.primary.dark
      },
      [`& .${s.avatarColorSecondary}`]: {
        color: (o.vars || o).palette.secondary.contrastText,
        backgroundColor: (o.vars || o).palette.secondary.dark
      },
      [`& .${s.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: o.typography.pxToRem(10)
      },
      [`& .${s.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${s.deleteIcon}`]: {
        WebkitTapHighlightColor: "transparent",
        color: o.vars ? `rgba(${o.vars.palette.text.primaryChannel} / 0.26)` : H(o.palette.text.primary, 0.26),
        fontSize: 22,
        cursor: "pointer",
        margin: "0 5px 0 -6px",
        "&:hover": {
          color: o.vars ? `rgba(${o.vars.palette.text.primaryChannel} / 0.4)` : H(o.palette.text.primary, 0.4)
        }
      },
      variants: [
        {
          props: {
            size: "small"
          },
          style: {
            height: 24,
            [`& .${s.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${s.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(o.palette).filter(Z([
          "contrastText"
        ])).map(([t]) => ({
          props: {
            color: t
          },
          style: {
            backgroundColor: (o.vars || o).palette[t].main,
            color: (o.vars || o).palette[t].contrastText,
            [`& .${s.deleteIcon}`]: {
              color: o.vars ? `rgba(${o.vars.palette[t].contrastTextChannel} / 0.7)` : H(o.palette[t].contrastText, 0.7),
              "&:hover, &:active": {
                color: (o.vars || o).palette[t].contrastText
              }
            }
          }
        })),
        {
          props: (t) => t.iconColor === t.color,
          style: {
            [`& .${s.icon}`]: {
              color: o.vars ? o.vars.palette.Chip.defaultIconColor : e
            }
          }
        },
        {
          props: (t) => t.iconColor === t.color && t.color !== "default",
          style: {
            [`& .${s.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${s.focusVisible}`]: {
              backgroundColor: o.vars ? `rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))` : H(o.palette.action.selected, o.palette.action.selectedOpacity + o.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(o.palette).filter(Z([
          "dark"
        ])).map(([t]) => ({
          props: {
            color: t,
            onDelete: true
          },
          style: {
            [`&.${s.focusVisible}`]: {
              background: (o.vars || o).palette[t].dark
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
              backgroundColor: o.vars ? `rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))` : H(o.palette.action.selected, o.palette.action.selectedOpacity + o.palette.action.hoverOpacity)
            },
            [`&.${s.focusVisible}`]: {
              backgroundColor: o.vars ? `rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))` : H(o.palette.action.selected, o.palette.action.selectedOpacity + o.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (o.vars || o).shadows[1]
            }
          }
        },
        ...Object.entries(o.palette).filter(Z([
          "dark"
        ])).map(([t]) => ({
          props: {
            color: t,
            clickable: true
          },
          style: {
            [`&:hover, &.${s.focusVisible}`]: {
              backgroundColor: (o.vars || o).palette[t].dark
            }
          }
        })),
        {
          props: {
            variant: "outlined"
          },
          style: {
            backgroundColor: "transparent",
            border: o.vars ? `1px solid ${o.vars.palette.Chip.defaultBorder}` : `1px solid ${o.palette.mode === "light" ? o.palette.grey[400] : o.palette.grey[700]}`,
            [`&.${s.clickable}:hover`]: {
              backgroundColor: (o.vars || o).palette.action.hover
            },
            [`&.${s.focusVisible}`]: {
              backgroundColor: (o.vars || o).palette.action.focus
            },
            [`& .${s.avatar}`]: {
              marginLeft: 4
            },
            [`& .${s.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${s.icon}`]: {
              marginLeft: 4
            },
            [`& .${s.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${s.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${s.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(o.palette).filter(Z()).map(([t]) => ({
          props: {
            variant: "outlined",
            color: t
          },
          style: {
            color: (o.vars || o).palette[t].main,
            border: `1px solid ${o.vars ? `rgba(${o.vars.palette[t].mainChannel} / 0.7)` : H(o.palette[t].main, 0.7)}`,
            [`&.${s.clickable}:hover`]: {
              backgroundColor: o.vars ? `rgba(${o.vars.palette[t].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : H(o.palette[t].main, o.palette.action.hoverOpacity)
            },
            [`&.${s.focusVisible}`]: {
              backgroundColor: o.vars ? `rgba(${o.vars.palette[t].mainChannel} / ${o.vars.palette.action.focusOpacity})` : H(o.palette[t].main, o.palette.action.focusOpacity)
            },
            [`& .${s.deleteIcon}`]: {
              color: o.vars ? `rgba(${o.vars.palette[t].mainChannel} / 0.7)` : H(o.palette[t].main, 0.7),
              "&:hover, &:active": {
                color: (o.vars || o).palette[t].main
              }
            }
          }
        }))
      ]
    };
  })), ue = P("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (o, e) => {
      const { ownerState: t } = o, { size: a } = t;
      return [
        e.label,
        e[`label${d(a)}`]
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
  function fo(o) {
    return o.key === "Backspace" || o.key === "Delete";
  }
  he = p.forwardRef(function(e, t) {
    const a = J({
      props: e,
      name: "MuiChip"
    }), { avatar: n, className: g, clickable: u, color: i = "default", component: l, deleteIcon: b, disabled: R = false, icon: v, label: T, onClick: z, onDelete: f, onKeyDown: I, onKeyUp: y, size: x = "medium", variant: M = "filled", tabIndex: m, skipFocusWhenDisabled: S = false, ...L } = a, h = p.useRef(null), A = xo(h, t), E = (w) => {
      w.stopPropagation(), f && f(w);
    }, G = (w) => {
      w.currentTarget === w.target && fo(w) && w.preventDefault(), I && I(w);
    }, C = (w) => {
      w.currentTarget === w.target && f && fo(w) && f(w), y && y(w);
    }, k = u !== false && z ? true : u, N = k || f ? no : l || "div", j = {
      ...a,
      component: N,
      disabled: R,
      size: x,
      color: i,
      iconColor: p.isValidElement(v) && v.props.color || i,
      onDelete: !!f,
      clickable: k,
      variant: M
    }, $ = de(j), F = N === no ? {
      component: l || "div",
      focusVisibleClassName: $.focusVisible,
      ...f && {
        disableRipple: true
      }
    } : {};
    let K = null;
    f && (K = b && p.isValidElement(b) ? p.cloneElement(b, {
      className: O(b.props.className, $.deleteIcon),
      onClick: E
    }) : r.jsx(le, {
      className: O($.deleteIcon),
      onClick: E
    }));
    let D = null;
    n && p.isValidElement(n) && (D = p.cloneElement(n, {
      className: O($.avatar, n.props.className)
    }));
    let U = null;
    return v && p.isValidElement(v) && (U = p.cloneElement(v, {
      className: O($.icon, v.props.className)
    })), r.jsxs(pe, {
      as: N,
      className: O($.root, g),
      disabled: k && R ? true : void 0,
      onClick: z,
      onKeyDown: G,
      onKeyUp: C,
      ref: A,
      tabIndex: S && R ? -1 : m,
      ownerState: j,
      ...F,
      ...L,
      children: [
        D || U,
        r.jsx(ue, {
          className: O($.label),
          ownerState: j,
          children: T
        }),
        K
      ]
    });
  });
  function ge(o) {
    return X("MuiDialogActions", o);
  }
  Y("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  let fe, ve;
  fe = (o) => {
    const { classes: e, disableSpacing: t } = o;
    return Q({
      root: [
        "root",
        !t && "spacing"
      ]
    }, ge, e);
  };
  ve = P("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: t } = o;
      return [
        e.root,
        !t.disableSpacing && e.spacing
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
        props: ({ ownerState: o }) => !o.disableSpacing,
        style: {
          "& > :not(style) ~ :not(style)": {
            marginLeft: 8
          }
        }
      }
    ]
  });
  Re = p.forwardRef(function(e, t) {
    const a = J({
      props: e,
      name: "MuiDialogActions"
    }), { className: n, disableSpacing: g = false, ...u } = a, i = {
      ...a,
      disableSpacing: g
    }, l = fe(i);
    return r.jsx(ve, {
      className: O(l.root, n),
      ownerState: i,
      ref: t,
      ...u
    });
  });
  xe = q(r.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear");
  Ie = q(r.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore");
  Ae = function({ value: o, onChange: e, label: t }) {
    const a = vo(), [n, g] = p.useState(null), [u, i] = p.useState(o), l = p.useRef(null), { anchorOrigin: b, transformOrigin: R, maxHeight: v, setContentRef: T, popoverActionRef: z } = Mo(n, !!n), f = !!n;
    p.useEffect(() => {
      i(o);
    }, [
      o
    ]), p.useEffect(() => () => {
      l.current !== null && clearTimeout(l.current);
    }, []);
    const I = p.useCallback((y) => {
      i(y), l.current !== null && clearTimeout(l.current), l.current = setTimeout(() => {
        l.current = null, e(y);
      }, 150);
    }, [
      e
    ]);
    return r.jsxs(ao, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        r.jsxs(ao, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            py: 0.5,
            cursor: "pointer",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: a.palette.action.hover
            },
            transition: "background-color 150ms"
          },
          onClick: (y) => g(y.currentTarget),
          children: [
            r.jsx(zo, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: t
            }),
            r.jsx(ao, {
              sx: {
                width: 22,
                height: 22,
                borderRadius: "4px",
                flexShrink: 0,
                background: u || "transparent",
                border: u ? `1px solid ${a.palette.divider}` : `1px dashed ${a.palette.text.disabled}`
              }
            }),
            u && r.jsx(bo, {
              size: "small",
              onClick: (y) => {
                y.stopPropagation(), l.current !== null && (clearTimeout(l.current), l.current = null), i(""), e("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: r.jsx(xe, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        r.jsx(jo, {
          action: z,
          open: f,
          anchorEl: n,
          onClose: () => g(null),
          anchorOrigin: b,
          transformOrigin: R,
          slotProps: {
            paper: {
              elevation: 0,
              sx: {
                p: "9px",
                borderRadius: "6px",
                backgroundColor: "rgb(32,32,32)",
                boxSizing: "border-box",
                maxHeight: v,
                overflowX: "hidden",
                overflowY: "auto"
              }
            }
          },
          children: r.jsx(ao, {
            ref: T,
            sx: {
              borderRadius: "6px"
            },
            children: r.jsx(To, {
              value: u || "#ffffff",
              onChange: I,
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
  ye as A,
  he as C,
  Re as D,
  Ie as E,
  __tla,
  Ae as a,
  $e as b,
  me as c,
  Se as d,
  xe as e
};
