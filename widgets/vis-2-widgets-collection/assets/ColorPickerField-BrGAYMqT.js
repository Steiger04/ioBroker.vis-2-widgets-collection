import { v as c, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as G, a as _, u as q, aj as bo, ak as So, R as co, N as Ao, h as Ro, j as s, s as y, d as O, e as Z, al as so, m as L, W as wo, b as w, P as po, B as Po, c as U, I as uo, w as to, _ as ro, p as ao, x as oo, ad as Mo, n as K, T as Io, ae as jo, af as $o, __tla as __tla_1 } from "./usePopoverPositioning-BZLitN7O.js";
let pt, ht, xt, mt, gt, ut, ft, lt;
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
  function To(o) {
    return G("MuiCollapse", o);
  }
  _("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  const Eo = (o) => {
    const { orientation: t, classes: n } = o, e = {
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
    return Z(e, To, n);
  }, zo = y("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: n } = o;
      return [
        t.root,
        t[n.orientation],
        n.state === "entered" && t.entered,
        n.state === "exited" && !n.in && n.collapsedSize === "0px" && t.hidden
      ];
    }
  })(L(({ theme: o }) => ({
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
        props: ({ ownerState: t }) => t.state === "exited" && !t.in && t.collapsedSize === "0px",
        style: {
          visibility: "hidden"
        }
      }
    ]
  }))), ko = y("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (o, t) => t.wrapper
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
  }), Do = y("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (o, t) => t.wrapperInner
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
  }), eo = c.forwardRef(function(t, n) {
    const e = q({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: a, children: d, className: p, collapsedSize: l = "0px", component: i, easing: P, in: S, onEnter: A, onEntered: M, onEntering: I, onExit: j, onExited: C, onExiting: x, orientation: u = "vertical", style: b, timeout: f = bo.standard, TransitionComponent: m = So, ...E } = e, h = {
      ...e,
      orientation: u,
      collapsedSize: l
    }, v = Eo(h), z = co(), F = Ao(), g = c.useRef(null), R = c.useRef(), N = typeof l == "number" ? `${l}px` : l, k = u === "horizontal", D = k ? "width" : "height", B = c.useRef(null), X = Ro(n, B), W = (r) => ($) => {
      if (r) {
        const T = B.current;
        $ === void 0 ? r(T) : r(T, $);
      }
    }, H = () => g.current ? g.current[k ? "clientWidth" : "clientHeight"] : 0, fo = W((r, $) => {
      g.current && k && (g.current.style.position = "absolute"), r.style[D] = N, A && A(r, $);
    }), xo = W((r, $) => {
      const T = H();
      g.current && k && (g.current.style.position = "");
      const { duration: Y, easing: J } = so({
        style: b,
        timeout: f,
        easing: P
      }, {
        mode: "enter"
      });
      if (f === "auto") {
        const no = z.transitions.getAutoHeightDuration(T);
        r.style.transitionDuration = `${no}ms`, R.current = no;
      } else r.style.transitionDuration = typeof Y == "string" ? Y : `${Y}ms`;
      r.style[D] = `${T}px`, r.style.transitionTimingFunction = J, I && I(r, $);
    }), mo = W((r, $) => {
      r.style[D] = "auto", M && M(r, $);
    }), ho = W((r) => {
      r.style[D] = `${H()}px`, j && j(r);
    }), vo = W(C), yo = W((r) => {
      const $ = H(), { duration: T, easing: Y } = so({
        style: b,
        timeout: f,
        easing: P
      }, {
        mode: "exit"
      });
      if (f === "auto") {
        const J = z.transitions.getAutoHeightDuration($);
        r.style.transitionDuration = `${J}ms`, R.current = J;
      } else r.style.transitionDuration = typeof T == "string" ? T : `${T}ms`;
      r.style[D] = N, r.style.transitionTimingFunction = Y, x && x(r);
    }), Co = (r) => {
      f === "auto" && F.start(R.current || 0, r), a && a(B.current, r);
    };
    return s.jsx(m, {
      in: S,
      onEnter: fo,
      onEntered: mo,
      onEntering: xo,
      onExit: ho,
      onExited: vo,
      onExiting: yo,
      addEndListener: Co,
      nodeRef: B,
      timeout: f === "auto" ? null : f,
      ...E,
      children: (r, { ownerState: $, ...T }) => s.jsx(zo, {
        as: i,
        className: O(v.root, p, {
          entered: v.entered,
          exited: !S && N === "0px" && v.hidden
        }[r]),
        style: {
          [k ? "minWidth" : "minHeight"]: N,
          ...b
        },
        ref: X,
        ownerState: {
          ...h,
          state: r
        },
        ...T,
        children: s.jsx(ko, {
          ownerState: {
            ...h,
            state: r
          },
          className: v.wrapper,
          ref: g,
          children: s.jsx(Do, {
            ownerState: {
              ...h,
              state: r
            },
            className: v.wrapperInner,
            children: d
          })
        })
      })
    });
  });
  eo && (eo.muiSupportAuto = true);
  const go = c.createContext({});
  function Wo(o) {
    return G("MuiAccordion", o);
  }
  let Q, No, Bo, Lo;
  Q = _("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]);
  No = (o) => {
    const { classes: t, square: n, expanded: e, disabled: a, disableGutters: d } = o;
    return Z({
      root: [
        "root",
        !n && "rounded",
        e && "expanded",
        a && "disabled",
        !d && "gutters"
      ],
      heading: [
        "heading"
      ],
      region: [
        "region"
      ]
    }, Wo, t);
  };
  Bo = y(po, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: n } = o;
      return [
        {
          [`& .${Q.region}`]: t.region
        },
        t.root,
        !n.square && t.rounded,
        !n.disableGutters && t.gutters
      ];
    }
  })(L(({ theme: o }) => {
    const t = {
      duration: o.transitions.duration.shortest
    };
    return {
      position: "relative",
      transition: o.transitions.create([
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
        backgroundColor: (o.vars || o).palette.divider,
        transition: o.transitions.create([
          "opacity",
          "background-color"
        ], t)
      },
      "&:first-of-type": {
        "&::before": {
          display: "none"
        }
      },
      [`&.${Q.expanded}`]: {
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
      [`&.${Q.disabled}`]: {
        backgroundColor: (o.vars || o).palette.action.disabledBackground
      }
    };
  }), L(({ theme: o }) => ({
    variants: [
      {
        props: (t) => !t.square,
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
        props: (t) => !t.disableGutters,
        style: {
          [`&.${Q.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  })));
  Lo = y("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (o, t) => t.heading
  })({
    all: "unset"
  });
  pt = c.forwardRef(function(t, n) {
    const e = q({
      props: t,
      name: "MuiAccordion"
    }), { children: a, className: d, defaultExpanded: p = false, disabled: l = false, disableGutters: i = false, expanded: P, onChange: S, square: A = false, slots: M = {}, slotProps: I = {}, TransitionComponent: j, TransitionProps: C, ...x } = e, [u, b] = wo({
      controlled: P,
      default: p,
      name: "Accordion",
      state: "expanded"
    }), f = c.useCallback((H) => {
      b(!u), S && S(H, !u);
    }, [
      u,
      S,
      b
    ]), [m, ...E] = c.Children.toArray(a), h = c.useMemo(() => ({
      expanded: u,
      disabled: l,
      disableGutters: i,
      toggle: f
    }), [
      u,
      l,
      i,
      f
    ]), v = {
      ...e,
      square: A,
      disabled: l,
      disableGutters: i,
      expanded: u
    }, z = No(v), F = {
      transition: j,
      ...M
    }, g = {
      transition: C,
      ...I
    }, R = {
      slots: F,
      slotProps: g
    }, [N, k] = w("root", {
      elementType: Bo,
      externalForwardedProps: {
        ...R,
        ...x
      },
      className: O(z.root, d),
      shouldForwardComponentProp: true,
      ownerState: v,
      ref: n,
      additionalProps: {
        square: A
      }
    }), [D, B] = w("heading", {
      elementType: Lo,
      externalForwardedProps: R,
      className: z.heading,
      ownerState: v
    }), [X, W] = w("transition", {
      elementType: eo,
      externalForwardedProps: R,
      ownerState: v
    });
    return s.jsxs(N, {
      ...k,
      children: [
        s.jsx(D, {
          ...B,
          children: s.jsx(go.Provider, {
            value: h,
            children: m
          })
        }),
        s.jsx(X, {
          in: u,
          timeout: "auto",
          ...W,
          children: s.jsx("div", {
            "aria-labelledby": m.props.id,
            id: m.props["aria-controls"],
            role: "region",
            className: z.region,
            children: E
          })
        })
      ]
    });
  });
  function Fo(o) {
    return G("MuiAccordionDetails", o);
  }
  _("MuiAccordionDetails", [
    "root"
  ]);
  let Ho, Oo;
  Ho = (o) => {
    const { classes: t } = o;
    return Z({
      root: [
        "root"
      ]
    }, Fo, t);
  };
  Oo = y("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (o, t) => t.root
  })(L(({ theme: o }) => ({
    padding: o.spacing(1, 2, 2)
  })));
  ut = c.forwardRef(function(t, n) {
    const e = q({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: a, ...d } = e, p = e, l = Ho(p);
    return s.jsx(Oo, {
      className: O(l.root, a),
      ref: n,
      ownerState: p,
      ...d
    });
  });
  function Uo(o) {
    return G("MuiAccordionSummary", o);
  }
  let V, Vo, Go, _o, qo;
  V = _("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]);
  Vo = (o) => {
    const { classes: t, expanded: n, disabled: e, disableGutters: a } = o;
    return Z({
      root: [
        "root",
        n && "expanded",
        e && "disabled",
        !a && "gutters"
      ],
      focusVisible: [
        "focusVisible"
      ],
      content: [
        "content",
        n && "expanded",
        !a && "contentGutters"
      ],
      expandIconWrapper: [
        "expandIconWrapper",
        n && "expanded"
      ]
    }, Uo, t);
  };
  Go = y(Po, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (o, t) => t.root
  })(L(({ theme: o }) => {
    const t = {
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
      ], t),
      [`&.${V.focusVisible}`]: {
        backgroundColor: (o.vars || o).palette.action.focus
      },
      [`&.${V.disabled}`]: {
        opacity: (o.vars || o).palette.action.disabledOpacity
      },
      [`&:hover:not(.${V.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (n) => !n.disableGutters,
          style: {
            [`&.${V.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  }));
  _o = y("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (o, t) => t.content
  })(L(({ theme: o }) => ({
    display: "flex",
    textAlign: "start",
    flexGrow: 1,
    margin: "12px 0",
    variants: [
      {
        props: (t) => !t.disableGutters,
        style: {
          transition: o.transitions.create([
            "margin"
          ], {
            duration: o.transitions.duration.shortest
          }),
          [`&.${V.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  })));
  qo = y("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (o, t) => t.expandIconWrapper
  })(L(({ theme: o }) => ({
    display: "flex",
    color: (o.vars || o).palette.action.active,
    transform: "rotate(0deg)",
    transition: o.transitions.create("transform", {
      duration: o.transitions.duration.shortest
    }),
    [`&.${V.expanded}`]: {
      transform: "rotate(180deg)"
    }
  })));
  gt = c.forwardRef(function(t, n) {
    const e = q({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: a, className: d, expandIcon: p, focusVisibleClassName: l, onClick: i, slots: P, slotProps: S, ...A } = e, { disabled: M = false, disableGutters: I, expanded: j, toggle: C } = c.useContext(go), x = (g) => {
      C && C(g), i && i(g);
    }, u = {
      ...e,
      expanded: j,
      disabled: M,
      disableGutters: I
    }, b = Vo(u), f = {
      slots: P,
      slotProps: S
    }, [m, E] = w("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: O(b.root, d),
      elementType: Go,
      externalForwardedProps: {
        ...f,
        ...A
      },
      ownerState: u,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: M,
        "aria-expanded": j,
        focusVisibleClassName: O(b.focusVisible, l)
      },
      getSlotProps: (g) => ({
        ...g,
        onClick: (R) => {
          var _a;
          (_a = g.onClick) == null ? void 0 : _a.call(g, R), x(R);
        }
      })
    }), [h, v] = w("content", {
      className: b.content,
      elementType: _o,
      externalForwardedProps: f,
      ownerState: u
    }), [z, F] = w("expandIconWrapper", {
      className: b.expandIconWrapper,
      elementType: qo,
      externalForwardedProps: f,
      ownerState: u
    });
    return s.jsxs(m, {
      ...E,
      children: [
        s.jsx(h, {
          ...v,
          children: a
        }),
        p && s.jsx(z, {
          ...F,
          children: p
        })
      ]
    });
  });
  function Zo(o) {
    return G("MuiAlert", o);
  }
  let io, Xo, Yo, Jo, Ko, Qo, ot, tt, et, nt, st, lo;
  io = _("MuiAlert", [
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
  Xo = U(s.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined");
  Yo = U(s.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined");
  Jo = U(s.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline");
  Ko = U(s.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined");
  Qo = U(s.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close");
  ot = (o) => {
    const { variant: t, color: n, severity: e, classes: a } = o, d = {
      root: [
        "root",
        `color${to(n || e)}`,
        `${t}${to(n || e)}`,
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
    return Z(d, Zo, a);
  };
  tt = y(po, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: n } = o;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${to(n.color || n.severity)}`]
      ];
    }
  })(L(({ theme: o }) => {
    const t = o.palette.mode === "light" ? ro : ao, n = o.palette.mode === "light" ? ao : ro;
    return {
      ...o.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(o.palette).filter(oo([
          "light"
        ])).map(([e]) => ({
          props: {
            colorSeverity: e,
            variant: "standard"
          },
          style: {
            color: o.vars ? o.vars.palette.Alert[`${e}Color`] : t(o.palette[e].light, 0.6),
            backgroundColor: o.vars ? o.vars.palette.Alert[`${e}StandardBg`] : n(o.palette[e].light, 0.9),
            [`& .${io.icon}`]: o.vars ? {
              color: o.vars.palette.Alert[`${e}IconColor`]
            } : {
              color: o.palette[e].main
            }
          }
        })),
        ...Object.entries(o.palette).filter(oo([
          "light"
        ])).map(([e]) => ({
          props: {
            colorSeverity: e,
            variant: "outlined"
          },
          style: {
            color: o.vars ? o.vars.palette.Alert[`${e}Color`] : t(o.palette[e].light, 0.6),
            border: `1px solid ${(o.vars || o).palette[e].light}`,
            [`& .${io.icon}`]: o.vars ? {
              color: o.vars.palette.Alert[`${e}IconColor`]
            } : {
              color: o.palette[e].main
            }
          }
        })),
        ...Object.entries(o.palette).filter(oo([
          "dark"
        ])).map(([e]) => ({
          props: {
            colorSeverity: e,
            variant: "filled"
          },
          style: {
            fontWeight: o.typography.fontWeightMedium,
            ...o.vars ? {
              color: o.vars.palette.Alert[`${e}FilledColor`],
              backgroundColor: o.vars.palette.Alert[`${e}FilledBg`]
            } : {
              backgroundColor: o.palette.mode === "dark" ? o.palette[e].dark : o.palette[e].main,
              color: o.palette.getContrastText(o.palette[e].main)
            }
          }
        }))
      ]
    };
  }));
  et = y("div", {
    name: "MuiAlert",
    slot: "Icon",
    overridesResolver: (o, t) => t.icon
  })({
    marginRight: 12,
    padding: "7px 0",
    display: "flex",
    fontSize: 22,
    opacity: 0.9
  });
  nt = y("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (o, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  });
  st = y("div", {
    name: "MuiAlert",
    slot: "Action",
    overridesResolver: (o, t) => t.action
  })({
    display: "flex",
    alignItems: "flex-start",
    padding: "4px 0 0 16px",
    marginLeft: "auto",
    marginRight: -8
  });
  lo = {
    success: s.jsx(Xo, {
      fontSize: "inherit"
    }),
    warning: s.jsx(Yo, {
      fontSize: "inherit"
    }),
    error: s.jsx(Jo, {
      fontSize: "inherit"
    }),
    info: s.jsx(Ko, {
      fontSize: "inherit"
    })
  };
  ft = c.forwardRef(function(t, n) {
    const e = q({
      props: t,
      name: "MuiAlert"
    }), { action: a, children: d, className: p, closeText: l = "Close", color: i, components: P = {}, componentsProps: S = {}, icon: A, iconMapping: M = lo, onClose: I, role: j = "alert", severity: C = "success", slotProps: x = {}, slots: u = {}, variant: b = "standard", ...f } = e, m = {
      ...e,
      color: i,
      severity: C,
      variant: b,
      colorSeverity: i || C
    }, E = ot(m), h = {
      slots: {
        closeButton: P.CloseButton,
        closeIcon: P.CloseIcon,
        ...u
      },
      slotProps: {
        ...S,
        ...x
      }
    }, [v, z] = w("root", {
      ref: n,
      shouldForwardComponentProp: true,
      className: O(E.root, p),
      elementType: tt,
      externalForwardedProps: {
        ...h,
        ...f
      },
      ownerState: m,
      additionalProps: {
        role: j,
        elevation: 0
      }
    }), [F, g] = w("icon", {
      className: E.icon,
      elementType: et,
      externalForwardedProps: h,
      ownerState: m
    }), [R, N] = w("message", {
      className: E.message,
      elementType: nt,
      externalForwardedProps: h,
      ownerState: m
    }), [k, D] = w("action", {
      className: E.action,
      elementType: st,
      externalForwardedProps: h,
      ownerState: m
    }), [B, X] = w("closeButton", {
      elementType: uo,
      externalForwardedProps: h,
      ownerState: m
    }), [W, H] = w("closeIcon", {
      elementType: Qo,
      externalForwardedProps: h,
      ownerState: m
    });
    return s.jsxs(v, {
      ...z,
      children: [
        A !== false ? s.jsx(F, {
          ...g,
          children: A || M[C] || lo[C]
        }) : null,
        s.jsx(R, {
          ...N,
          children: d
        }),
        a != null ? s.jsx(k, {
          ...D,
          children: a
        }) : null,
        a == null && I ? s.jsx(k, {
          ...D,
          children: s.jsx(B, {
            size: "small",
            "aria-label": l,
            title: l,
            color: "inherit",
            onClick: I,
            ...X,
            children: s.jsx(W, {
              fontSize: "small",
              ...H
            })
          })
        }) : null
      ]
    });
  });
  function rt(o) {
    return G("MuiDialogActions", o);
  }
  _("MuiDialogActions", [
    "root",
    "spacing"
  ]);
  let at, it;
  at = (o) => {
    const { classes: t, disableSpacing: n } = o;
    return Z({
      root: [
        "root",
        !n && "spacing"
      ]
    }, rt, t);
  };
  it = y("div", {
    name: "MuiDialogActions",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: n } = o;
      return [
        t.root,
        !n.disableSpacing && t.spacing
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
  xt = c.forwardRef(function(t, n) {
    const e = q({
      props: t,
      name: "MuiDialogActions"
    }), { className: a, disableSpacing: d = false, ...p } = e, l = {
      ...e,
      disableSpacing: d
    }, i = at(l);
    return s.jsx(it, {
      className: O(i.root, a),
      ownerState: l,
      ref: n,
      ...p
    });
  });
  lt = U(s.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear");
  mt = U(s.jsx("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore");
  ht = function({ value: o, onChange: t, label: n }) {
    const e = co(), [a, d] = c.useState(null), [p, l] = c.useState(o), i = c.useRef(null), { anchorOrigin: P, transformOrigin: S, maxHeight: A, setContentRef: M, popoverActionRef: I } = Mo(a, !!a), j = !!a;
    c.useEffect(() => {
      l(o);
    }, [
      o
    ]), c.useEffect(() => () => {
      i.current !== null && clearTimeout(i.current);
    }, []);
    const C = c.useCallback((x) => {
      l(x), i.current !== null && clearTimeout(i.current), i.current = setTimeout(() => {
        i.current = null, t(x);
      }, 150);
    }, [
      t
    ]);
    return s.jsxs(K, {
      sx: {
        flex: 1,
        minWidth: 0
      },
      children: [
        s.jsxs(K, {
          sx: {
            display: "flex",
            alignItems: "center",
            gap: 1,
            py: 0.5,
            cursor: "pointer",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: e.palette.action.hover
            },
            transition: "background-color 150ms"
          },
          onClick: (x) => d(x.currentTarget),
          children: [
            s.jsx(Io, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                flexShrink: 0,
                userSelect: "none"
              },
              children: n
            }),
            s.jsx(K, {
              sx: {
                width: 22,
                height: 22,
                borderRadius: "4px",
                flexShrink: 0,
                background: p || "transparent",
                border: p ? `1px solid ${e.palette.divider}` : `1px dashed ${e.palette.text.disabled}`
              }
            }),
            p && s.jsx(uo, {
              size: "small",
              onClick: (x) => {
                x.stopPropagation(), i.current !== null && (clearTimeout(i.current), i.current = null), l(""), t("");
              },
              sx: {
                p: 0.25,
                ml: -0.5
              },
              children: s.jsx(lt, {
                fontSize: "inherit"
              })
            })
          ]
        }),
        s.jsx(jo, {
          action: I,
          open: j,
          anchorEl: a,
          onClose: () => d(null),
          anchorOrigin: P,
          transformOrigin: S,
          slotProps: {
            paper: {
              elevation: 0,
              sx: {
                p: "9px",
                borderRadius: "6px",
                backgroundColor: "rgb(32,32,32)",
                boxSizing: "border-box",
                maxHeight: A,
                overflowX: "hidden",
                overflowY: "auto"
              }
            }
          },
          children: s.jsx(K, {
            ref: M,
            sx: {
              borderRadius: "6px"
            },
            children: s.jsx($o, {
              value: p || "#ffffff",
              onChange: C,
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
  pt as A,
  ht as C,
  xt as D,
  mt as E,
  __tla,
  gt as a,
  ut as b,
  ft as c,
  lt as d
};
