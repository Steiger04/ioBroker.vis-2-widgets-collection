import { v as p, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as J, f as Q, u as X, am as Io, A as Ro, r as ho, an as Ao, U as fo, j as s, s as w, h as D, i as Y, ao as io, p as _, D as wo, n as L, P as vo, c as ro, d as oo, I as ko, J as l, ap as lo, l as co, ak as q, a as H, __tla as __tla_1 } from "./tinycolor-CLG1zgRY.js";
let dt, ft, ut, pt, gt, Qo, no;
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
  function Po(o) {
    return J("MuiCollapse", o);
  }
  Q("MuiCollapse", [
    "root",
    "horizontal",
    "vertical",
    "entered",
    "hidden",
    "wrapper",
    "wrapperInner"
  ]);
  let Mo, zo, To, jo;
  Mo = (o) => {
    const { orientation: t, classes: e } = o, a = {
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
    return Y(a, Po, e);
  };
  zo = w("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: e } = o;
      return [
        t.root,
        t[e.orientation],
        e.state === "entered" && t.entered,
        e.state === "exited" && !e.in && e.collapsedSize === "0px" && t.hidden
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
        props: ({ ownerState: t }) => t.state === "exited" && !t.in && t.collapsedSize === "0px",
        style: {
          visibility: "hidden"
        }
      }
    ]
  })));
  To = w("div", {
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
  });
  jo = w("div", {
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
  });
  no = p.forwardRef(function(t, e) {
    const a = X({
      props: t,
      name: "MuiCollapse"
    }), { addEndListener: n, children: u, className: g, collapsedSize: c = "0px", component: d, easing: S, in: k, onEnter: x, onEntered: N, onEntering: j, onExit: C, onExited: P, onExiting: W, orientation: f = "vertical", style: A, timeout: b = Io.standard, TransitionComponent: $ = Ro, ...E } = a, m = {
      ...a,
      orientation: f,
      collapsedSize: c
    }, I = Mo(m), z = ho(), G = Ao(), v = p.useRef(null), R = p.useRef(), O = typeof c == "number" ? `${c}px` : c, M = f === "horizontal", y = M ? "width" : "height", B = p.useRef(null), K = fo(e, B), T = (i) => (V) => {
      if (i) {
        const F = B.current;
        V === void 0 ? i(F) : i(F, V);
      }
    }, U = () => v.current ? v.current[M ? "clientWidth" : "clientHeight"] : 0, h = T((i, V) => {
      v.current && M && (v.current.style.position = "absolute"), i.style[y] = O, x && x(i, V);
    }), bo = T((i, V) => {
      const F = U();
      v.current && M && (v.current.style.position = "");
      const { duration: to, easing: eo } = io({
        style: A,
        timeout: b,
        easing: S
      }, {
        mode: "enter"
      });
      if (b === "auto") {
        const so = z.transitions.getAutoHeightDuration(F);
        i.style.transitionDuration = `${so}ms`, R.current = so;
      } else i.style.transitionDuration = typeof to == "string" ? to : `${to}ms`;
      i.style[y] = `${F}px`, i.style.transitionTimingFunction = eo, j && j(i, V);
    }), yo = T((i, V) => {
      i.style[y] = "auto", N && N(i, V);
    }), xo = T((i) => {
      i.style[y] = `${U()}px`, C && C(i);
    }), $o = T(P), mo = T((i) => {
      const V = U(), { duration: F, easing: to } = io({
        style: A,
        timeout: b,
        easing: S
      }, {
        mode: "exit"
      });
      if (b === "auto") {
        const eo = z.transitions.getAutoHeightDuration(V);
        i.style.transitionDuration = `${eo}ms`, R.current = eo;
      } else i.style.transitionDuration = typeof F == "string" ? F : `${F}ms`;
      i.style[y] = O, i.style.transitionTimingFunction = to, W && W(i);
    }), So = (i) => {
      b === "auto" && G.start(R.current || 0, i), n && n(B.current, i);
    };
    return s.jsx($, {
      in: k,
      onEnter: h,
      onEntered: yo,
      onEntering: bo,
      onExit: xo,
      onExited: $o,
      onExiting: mo,
      addEndListener: So,
      nodeRef: B,
      timeout: b === "auto" ? null : b,
      ...E,
      children: (i, { ownerState: V, ...F }) => s.jsx(zo, {
        as: d,
        className: D(I.root, g, {
          entered: I.entered,
          exited: !k && O === "0px" && I.hidden
        }[i]),
        style: {
          [M ? "minWidth" : "minHeight"]: O,
          ...A
        },
        ref: K,
        ownerState: {
          ...m,
          state: i
        },
        ...F,
        children: s.jsx(To, {
          ownerState: {
            ...m,
            state: i
          },
          className: I.wrapper,
          ref: v,
          children: s.jsx(jo, {
            ownerState: {
              ...m,
              state: i
            },
            className: I.wrapperInner,
            children: u
          })
        })
      })
    });
  });
  no && (no.muiSupportAuto = true);
  const Co = p.createContext({});
  function Eo(o) {
    return J("MuiAccordion", o);
  }
  let ao, Oo, Do, Lo;
  ao = Q("MuiAccordion", [
    "root",
    "heading",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region"
  ]);
  Oo = (o) => {
    const { classes: t, square: e, expanded: a, disabled: n, disableGutters: u } = o;
    return Y({
      root: [
        "root",
        !e && "rounded",
        a && "expanded",
        n && "disabled",
        !u && "gutters"
      ],
      heading: [
        "heading"
      ],
      region: [
        "region"
      ]
    }, Eo, t);
  };
  Do = w(vo, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: e } = o;
      return [
        {
          [`& .${ao.region}`]: t.region
        },
        t.root,
        !e.square && t.rounded,
        !e.disableGutters && t.gutters
      ];
    }
  })(_(({ theme: o }) => {
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
      [`&.${ao.expanded}`]: {
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
      [`&.${ao.disabled}`]: {
        backgroundColor: (o.vars || o).palette.action.disabledBackground
      }
    };
  }), _(({ theme: o }) => ({
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
          [`&.${ao.expanded}`]: {
            margin: "16px 0"
          }
        }
      }
    ]
  })));
  Lo = w("h3", {
    name: "MuiAccordion",
    slot: "Heading",
    overridesResolver: (o, t) => t.heading
  })({
    all: "unset"
  });
  dt = p.forwardRef(function(t, e) {
    const a = X({
      props: t,
      name: "MuiAccordion"
    }), { children: n, className: u, defaultExpanded: g = false, disabled: c = false, disableGutters: d = false, expanded: S, onChange: k, square: x = false, slots: N = {}, slotProps: j = {}, TransitionComponent: C, TransitionProps: P, ...W } = a, [f, A] = wo({
      controlled: S,
      default: g,
      name: "Accordion",
      state: "expanded"
    }), b = p.useCallback((U) => {
      A(!f), k && k(U, !f);
    }, [
      f,
      k,
      A
    ]), [$, ...E] = p.Children.toArray(n), m = p.useMemo(() => ({
      expanded: f,
      disabled: c,
      disableGutters: d,
      toggle: b
    }), [
      f,
      c,
      d,
      b
    ]), I = {
      ...a,
      square: x,
      disabled: c,
      disableGutters: d,
      expanded: f
    }, z = Oo(I), G = {
      transition: C,
      ...N
    }, v = {
      transition: P,
      ...j
    }, R = {
      slots: G,
      slotProps: v
    }, [O, M] = L("root", {
      elementType: Do,
      externalForwardedProps: {
        ...R,
        ...W
      },
      className: D(z.root, u),
      shouldForwardComponentProp: true,
      ownerState: I,
      ref: e,
      additionalProps: {
        square: x
      }
    }), [y, B] = L("heading", {
      elementType: Lo,
      externalForwardedProps: R,
      className: z.heading,
      ownerState: I
    }), [K, T] = L("transition", {
      elementType: no,
      externalForwardedProps: R,
      ownerState: I
    });
    return s.jsxs(O, {
      ...M,
      children: [
        s.jsx(y, {
          ...B,
          children: s.jsx(Co.Provider, {
            value: m,
            children: $
          })
        }),
        s.jsx(K, {
          in: f,
          timeout: "auto",
          ...T,
          children: s.jsx("div", {
            "aria-labelledby": $.props.id,
            id: $.props["aria-controls"],
            role: "region",
            className: z.region,
            children: E
          })
        })
      ]
    });
  });
  function No(o) {
    return J("MuiAccordionDetails", o);
  }
  Q("MuiAccordionDetails", [
    "root"
  ]);
  let Wo, Vo;
  Wo = (o) => {
    const { classes: t } = o;
    return Y({
      root: [
        "root"
      ]
    }, No, t);
  };
  Vo = w("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (o, t) => t.root
  })(_(({ theme: o }) => ({
    padding: o.spacing(1, 2, 2)
  })));
  pt = p.forwardRef(function(t, e) {
    const a = X({
      props: t,
      name: "MuiAccordionDetails"
    }), { className: n, ...u } = a, g = a, c = Wo(g);
    return s.jsx(Vo, {
      className: D(c.root, n),
      ref: e,
      ownerState: g,
      ...u
    });
  });
  function Fo(o) {
    return J("MuiAccordionSummary", o);
  }
  let Z, Bo, Uo, Ho, Go;
  Z = Q("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper"
  ]);
  Bo = (o) => {
    const { classes: t, expanded: e, disabled: a, disableGutters: n } = o;
    return Y({
      root: [
        "root",
        e && "expanded",
        a && "disabled",
        !n && "gutters"
      ],
      focusVisible: [
        "focusVisible"
      ],
      content: [
        "content",
        e && "expanded",
        !n && "contentGutters"
      ],
      expandIconWrapper: [
        "expandIconWrapper",
        e && "expanded"
      ]
    }, Fo, t);
  };
  Uo = w(ro, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (o, t) => t.root
  })(_(({ theme: o }) => {
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
      [`&.${Z.focusVisible}`]: {
        backgroundColor: (o.vars || o).palette.action.focus
      },
      [`&.${Z.disabled}`]: {
        opacity: (o.vars || o).palette.action.disabledOpacity
      },
      [`&:hover:not(.${Z.disabled})`]: {
        cursor: "pointer"
      },
      variants: [
        {
          props: (e) => !e.disableGutters,
          style: {
            [`&.${Z.expanded}`]: {
              minHeight: 64
            }
          }
        }
      ]
    };
  }));
  Ho = w("span", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (o, t) => t.content
  })(_(({ theme: o }) => ({
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
          [`&.${Z.expanded}`]: {
            margin: "20px 0"
          }
        }
      }
    ]
  })));
  Go = w("span", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (o, t) => t.expandIconWrapper
  })(_(({ theme: o }) => ({
    display: "flex",
    color: (o.vars || o).palette.action.active,
    transform: "rotate(0deg)",
    transition: o.transitions.create("transform", {
      duration: o.transitions.duration.shortest
    }),
    [`&.${Z.expanded}`]: {
      transform: "rotate(180deg)"
    }
  })));
  ut = p.forwardRef(function(t, e) {
    const a = X({
      props: t,
      name: "MuiAccordionSummary"
    }), { children: n, className: u, expandIcon: g, focusVisibleClassName: c, onClick: d, slots: S, slotProps: k, ...x } = a, { disabled: N = false, disableGutters: j, expanded: C, toggle: P } = p.useContext(Co), W = (v) => {
      P && P(v), d && d(v);
    }, f = {
      ...a,
      expanded: C,
      disabled: N,
      disableGutters: j
    }, A = Bo(f), b = {
      slots: S,
      slotProps: k
    }, [$, E] = L("root", {
      ref: e,
      shouldForwardComponentProp: true,
      className: D(A.root, u),
      elementType: Uo,
      externalForwardedProps: {
        ...b,
        ...x
      },
      ownerState: f,
      additionalProps: {
        focusRipple: false,
        disableRipple: true,
        disabled: N,
        "aria-expanded": C,
        focusVisibleClassName: D(A.focusVisible, c)
      },
      getSlotProps: (v) => ({
        ...v,
        onClick: (R) => {
          var _a;
          (_a = v.onClick) == null ? void 0 : _a.call(v, R), W(R);
        }
      })
    }), [m, I] = L("content", {
      className: A.content,
      elementType: Ho,
      externalForwardedProps: b,
      ownerState: f
    }), [z, G] = L("expandIconWrapper", {
      className: A.expandIconWrapper,
      elementType: Go,
      externalForwardedProps: b,
      ownerState: f
    });
    return s.jsxs($, {
      ...E,
      children: [
        s.jsx(m, {
          ...I,
          children: n
        }),
        g && s.jsx(z, {
          ...G,
          children: g
        })
      ]
    });
  });
  function _o(o) {
    return J("MuiAlert", o);
  }
  let po, Ko, qo, Zo, Jo, Xo, Yo, ot, tt, et, uo, at;
  po = Q("MuiAlert", [
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
  Ko = oo(s.jsx("path", {
    d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
  }), "SuccessOutlined");
  qo = oo(s.jsx("path", {
    d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
  }), "ReportProblemOutlined");
  Zo = oo(s.jsx("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "ErrorOutline");
  Jo = oo(s.jsx("path", {
    d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
  }), "InfoOutlined");
  Qo = oo(s.jsx("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Close");
  Xo = (o) => {
    const { variant: t, color: e, severity: a, classes: n } = o, u = {
      root: [
        "root",
        `color${l(e || a)}`,
        `${t}${l(e || a)}`,
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
    return Y(u, _o, n);
  };
  Yo = w(vo, {
    name: "MuiAlert",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: e } = o;
      return [
        t.root,
        t[e.variant],
        t[`${e.variant}${l(e.color || e.severity)}`]
      ];
    }
  })(_(({ theme: o }) => {
    const t = o.palette.mode === "light" ? lo : co, e = o.palette.mode === "light" ? co : lo;
    return {
      ...o.typography.body2,
      backgroundColor: "transparent",
      display: "flex",
      padding: "6px 16px",
      variants: [
        ...Object.entries(o.palette).filter(q([
          "light"
        ])).map(([a]) => ({
          props: {
            colorSeverity: a,
            variant: "standard"
          },
          style: {
            color: o.vars ? o.vars.palette.Alert[`${a}Color`] : t(o.palette[a].light, 0.6),
            backgroundColor: o.vars ? o.vars.palette.Alert[`${a}StandardBg`] : e(o.palette[a].light, 0.9),
            [`& .${po.icon}`]: o.vars ? {
              color: o.vars.palette.Alert[`${a}IconColor`]
            } : {
              color: o.palette[a].main
            }
          }
        })),
        ...Object.entries(o.palette).filter(q([
          "light"
        ])).map(([a]) => ({
          props: {
            colorSeverity: a,
            variant: "outlined"
          },
          style: {
            color: o.vars ? o.vars.palette.Alert[`${a}Color`] : t(o.palette[a].light, 0.6),
            border: `1px solid ${(o.vars || o).palette[a].light}`,
            [`& .${po.icon}`]: o.vars ? {
              color: o.vars.palette.Alert[`${a}IconColor`]
            } : {
              color: o.palette[a].main
            }
          }
        })),
        ...Object.entries(o.palette).filter(q([
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
  ot = w("div", {
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
  tt = w("div", {
    name: "MuiAlert",
    slot: "Message",
    overridesResolver: (o, t) => t.message
  })({
    padding: "8px 0",
    minWidth: 0,
    overflow: "auto"
  });
  et = w("div", {
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
  uo = {
    success: s.jsx(Ko, {
      fontSize: "inherit"
    }),
    warning: s.jsx(qo, {
      fontSize: "inherit"
    }),
    error: s.jsx(Zo, {
      fontSize: "inherit"
    }),
    info: s.jsx(Jo, {
      fontSize: "inherit"
    })
  };
  gt = p.forwardRef(function(t, e) {
    const a = X({
      props: t,
      name: "MuiAlert"
    }), { action: n, children: u, className: g, closeText: c = "Close", color: d, components: S = {}, componentsProps: k = {}, icon: x, iconMapping: N = uo, onClose: j, role: C = "alert", severity: P = "success", slotProps: W = {}, slots: f = {}, variant: A = "standard", ...b } = a, $ = {
      ...a,
      color: d,
      severity: P,
      variant: A,
      colorSeverity: d || P
    }, E = Xo($), m = {
      slots: {
        closeButton: S.CloseButton,
        closeIcon: S.CloseIcon,
        ...f
      },
      slotProps: {
        ...k,
        ...W
      }
    }, [I, z] = L("root", {
      ref: e,
      shouldForwardComponentProp: true,
      className: D(E.root, g),
      elementType: Yo,
      externalForwardedProps: {
        ...m,
        ...b
      },
      ownerState: $,
      additionalProps: {
        role: C,
        elevation: 0
      }
    }), [G, v] = L("icon", {
      className: E.icon,
      elementType: ot,
      externalForwardedProps: m,
      ownerState: $
    }), [R, O] = L("message", {
      className: E.message,
      elementType: tt,
      externalForwardedProps: m,
      ownerState: $
    }), [M, y] = L("action", {
      className: E.action,
      elementType: et,
      externalForwardedProps: m,
      ownerState: $
    }), [B, K] = L("closeButton", {
      elementType: ko,
      externalForwardedProps: m,
      ownerState: $
    }), [T, U] = L("closeIcon", {
      elementType: Qo,
      externalForwardedProps: m,
      ownerState: $
    });
    return s.jsxs(I, {
      ...z,
      children: [
        x !== false ? s.jsx(G, {
          ...v,
          children: x || N[P] || uo[P]
        }) : null,
        s.jsx(R, {
          ...O,
          children: u
        }),
        n != null ? s.jsx(M, {
          ...y,
          children: n
        }) : null,
        n == null && j ? s.jsx(M, {
          ...y,
          children: s.jsx(B, {
            size: "small",
            "aria-label": c,
            title: c,
            color: "inherit",
            onClick: j,
            ...K,
            children: s.jsx(T, {
              fontSize: "small",
              ...U
            })
          })
        }) : null
      ]
    });
  });
  at = oo(s.jsx("path", {
    d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
  }), "Cancel");
  function rt(o) {
    return J("MuiChip", o);
  }
  const r = Q("MuiChip", [
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
  ]), nt = (o) => {
    const { classes: t, disabled: e, size: a, color: n, iconColor: u, onDelete: g, clickable: c, variant: d } = o, S = {
      root: [
        "root",
        d,
        e && "disabled",
        `size${l(a)}`,
        `color${l(n)}`,
        c && "clickable",
        c && `clickableColor${l(n)}`,
        g && "deletable",
        g && `deletableColor${l(n)}`,
        `${d}${l(n)}`
      ],
      label: [
        "label",
        `label${l(a)}`
      ],
      avatar: [
        "avatar",
        `avatar${l(a)}`,
        `avatarColor${l(n)}`
      ],
      icon: [
        "icon",
        `icon${l(a)}`,
        `iconColor${l(u)}`
      ],
      deleteIcon: [
        "deleteIcon",
        `deleteIcon${l(a)}`,
        `deleteIconColor${l(n)}`,
        `deleteIcon${l(d)}Color${l(n)}`
      ]
    };
    return Y(S, rt, t);
  }, st = w("div", {
    name: "MuiChip",
    slot: "Root",
    overridesResolver: (o, t) => {
      const { ownerState: e } = o, { color: a, iconColor: n, clickable: u, onDelete: g, size: c, variant: d } = e;
      return [
        {
          [`& .${r.avatar}`]: t.avatar
        },
        {
          [`& .${r.avatar}`]: t[`avatar${l(c)}`]
        },
        {
          [`& .${r.avatar}`]: t[`avatarColor${l(a)}`]
        },
        {
          [`& .${r.icon}`]: t.icon
        },
        {
          [`& .${r.icon}`]: t[`icon${l(c)}`]
        },
        {
          [`& .${r.icon}`]: t[`iconColor${l(n)}`]
        },
        {
          [`& .${r.deleteIcon}`]: t.deleteIcon
        },
        {
          [`& .${r.deleteIcon}`]: t[`deleteIcon${l(c)}`]
        },
        {
          [`& .${r.deleteIcon}`]: t[`deleteIconColor${l(a)}`]
        },
        {
          [`& .${r.deleteIcon}`]: t[`deleteIcon${l(d)}Color${l(a)}`]
        },
        t.root,
        t[`size${l(c)}`],
        t[`color${l(a)}`],
        u && t.clickable,
        u && a !== "default" && t[`clickableColor${l(a)})`],
        g && t.deletable,
        g && a !== "default" && t[`deletableColor${l(a)}`],
        t[d],
        t[`${d}${l(a)}`]
      ];
    }
  })(_(({ theme: o }) => {
    const t = o.palette.mode === "light" ? o.palette.grey[700] : o.palette.grey[300];
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
      [`&.${r.disabled}`]: {
        opacity: (o.vars || o).palette.action.disabledOpacity,
        pointerEvents: "none"
      },
      [`& .${r.avatar}`]: {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: o.vars ? o.vars.palette.Chip.defaultAvatarColor : t,
        fontSize: o.typography.pxToRem(12)
      },
      [`& .${r.avatarColorPrimary}`]: {
        color: (o.vars || o).palette.primary.contrastText,
        backgroundColor: (o.vars || o).palette.primary.dark
      },
      [`& .${r.avatarColorSecondary}`]: {
        color: (o.vars || o).palette.secondary.contrastText,
        backgroundColor: (o.vars || o).palette.secondary.dark
      },
      [`& .${r.avatarSmall}`]: {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: o.typography.pxToRem(10)
      },
      [`& .${r.icon}`]: {
        marginLeft: 5,
        marginRight: -6
      },
      [`& .${r.deleteIcon}`]: {
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
            [`& .${r.icon}`]: {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4
            },
            [`& .${r.deleteIcon}`]: {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4
            }
          }
        },
        ...Object.entries(o.palette).filter(q([
          "contrastText"
        ])).map(([e]) => ({
          props: {
            color: e
          },
          style: {
            backgroundColor: (o.vars || o).palette[e].main,
            color: (o.vars || o).palette[e].contrastText,
            [`& .${r.deleteIcon}`]: {
              color: o.vars ? `rgba(${o.vars.palette[e].contrastTextChannel} / 0.7)` : H(o.palette[e].contrastText, 0.7),
              "&:hover, &:active": {
                color: (o.vars || o).palette[e].contrastText
              }
            }
          }
        })),
        {
          props: (e) => e.iconColor === e.color,
          style: {
            [`& .${r.icon}`]: {
              color: o.vars ? o.vars.palette.Chip.defaultIconColor : t
            }
          }
        },
        {
          props: (e) => e.iconColor === e.color && e.color !== "default",
          style: {
            [`& .${r.icon}`]: {
              color: "inherit"
            }
          }
        },
        {
          props: {
            onDelete: true
          },
          style: {
            [`&.${r.focusVisible}`]: {
              backgroundColor: o.vars ? `rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))` : H(o.palette.action.selected, o.palette.action.selectedOpacity + o.palette.action.focusOpacity)
            }
          }
        },
        ...Object.entries(o.palette).filter(q([
          "dark"
        ])).map(([e]) => ({
          props: {
            color: e,
            onDelete: true
          },
          style: {
            [`&.${r.focusVisible}`]: {
              background: (o.vars || o).palette[e].dark
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
            [`&.${r.focusVisible}`]: {
              backgroundColor: o.vars ? `rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))` : H(o.palette.action.selected, o.palette.action.selectedOpacity + o.palette.action.focusOpacity)
            },
            "&:active": {
              boxShadow: (o.vars || o).shadows[1]
            }
          }
        },
        ...Object.entries(o.palette).filter(q([
          "dark"
        ])).map(([e]) => ({
          props: {
            color: e,
            clickable: true
          },
          style: {
            [`&:hover, &.${r.focusVisible}`]: {
              backgroundColor: (o.vars || o).palette[e].dark
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
            [`&.${r.clickable}:hover`]: {
              backgroundColor: (o.vars || o).palette.action.hover
            },
            [`&.${r.focusVisible}`]: {
              backgroundColor: (o.vars || o).palette.action.focus
            },
            [`& .${r.avatar}`]: {
              marginLeft: 4
            },
            [`& .${r.avatarSmall}`]: {
              marginLeft: 2
            },
            [`& .${r.icon}`]: {
              marginLeft: 4
            },
            [`& .${r.iconSmall}`]: {
              marginLeft: 2
            },
            [`& .${r.deleteIcon}`]: {
              marginRight: 5
            },
            [`& .${r.deleteIconSmall}`]: {
              marginRight: 3
            }
          }
        },
        ...Object.entries(o.palette).filter(q()).map(([e]) => ({
          props: {
            variant: "outlined",
            color: e
          },
          style: {
            color: (o.vars || o).palette[e].main,
            border: `1px solid ${o.vars ? `rgba(${o.vars.palette[e].mainChannel} / 0.7)` : H(o.palette[e].main, 0.7)}`,
            [`&.${r.clickable}:hover`]: {
              backgroundColor: o.vars ? `rgba(${o.vars.palette[e].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : H(o.palette[e].main, o.palette.action.hoverOpacity)
            },
            [`&.${r.focusVisible}`]: {
              backgroundColor: o.vars ? `rgba(${o.vars.palette[e].mainChannel} / ${o.vars.palette.action.focusOpacity})` : H(o.palette[e].main, o.palette.action.focusOpacity)
            },
            [`& .${r.deleteIcon}`]: {
              color: o.vars ? `rgba(${o.vars.palette[e].mainChannel} / 0.7)` : H(o.palette[e].main, 0.7),
              "&:hover, &:active": {
                color: (o.vars || o).palette[e].main
              }
            }
          }
        }))
      ]
    };
  })), it = w("span", {
    name: "MuiChip",
    slot: "Label",
    overridesResolver: (o, t) => {
      const { ownerState: e } = o, { size: a } = e;
      return [
        t.label,
        t[`label${l(a)}`]
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
  function go(o) {
    return o.key === "Backspace" || o.key === "Delete";
  }
  ft = p.forwardRef(function(t, e) {
    const a = X({
      props: t,
      name: "MuiChip"
    }), { avatar: n, className: u, clickable: g, color: c = "default", component: d, deleteIcon: S, disabled: k = false, icon: x, label: N, onClick: j, onDelete: C, onKeyDown: P, onKeyUp: W, size: f = "medium", variant: A = "filled", tabIndex: b, skipFocusWhenDisabled: $ = false, ...E } = a, m = p.useRef(null), I = fo(m, e), z = (h) => {
      h.stopPropagation(), C && C(h);
    }, G = (h) => {
      h.currentTarget === h.target && go(h) && h.preventDefault(), P && P(h);
    }, v = (h) => {
      h.currentTarget === h.target && C && go(h) && C(h), W && W(h);
    }, R = g !== false && j ? true : g, O = R || C ? ro : d || "div", M = {
      ...a,
      component: O,
      disabled: k,
      size: f,
      color: c,
      iconColor: p.isValidElement(x) && x.props.color || c,
      onDelete: !!C,
      clickable: R,
      variant: A
    }, y = nt(M), B = O === ro ? {
      component: d || "div",
      focusVisibleClassName: y.focusVisible,
      ...C && {
        disableRipple: true
      }
    } : {};
    let K = null;
    C && (K = S && p.isValidElement(S) ? p.cloneElement(S, {
      className: D(S.props.className, y.deleteIcon),
      onClick: z
    }) : s.jsx(at, {
      className: D(y.deleteIcon),
      onClick: z
    }));
    let T = null;
    n && p.isValidElement(n) && (T = p.cloneElement(n, {
      className: D(y.avatar, n.props.className)
    }));
    let U = null;
    return x && p.isValidElement(x) && (U = p.cloneElement(x, {
      className: D(y.icon, x.props.className)
    })), s.jsxs(st, {
      as: O,
      className: D(y.root, u),
      disabled: R && k ? true : void 0,
      onClick: j,
      onKeyDown: G,
      onKeyUp: v,
      ref: I,
      tabIndex: $ && k ? -1 : b,
      ownerState: M,
      ...B,
      ...E,
      children: [
        T || U,
        s.jsx(it, {
          className: D(y.label),
          ownerState: M,
          children: N
        }),
        K
      ]
    });
  });
});
export {
  dt as A,
  ft as C,
  __tla,
  ut as a,
  pt as b,
  gt as c,
  Qo as d,
  no as e
};
