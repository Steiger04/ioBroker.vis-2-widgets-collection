import { v as c, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as z, g as H, u as $, $ as xo, P as V, aE as G, a3 as ho, b as m, d as v, s as x, j as n, M as S, e as R, R as bo, aF as fo, m as q, T as k, L as vo, aG as K, __tla as __tla_1 } from "./useData-Dh4nd_La.js";
import { g as So, l as M, __tla as __tla_2 } from "./listItemTextClasses-DZA6NAVK.js";
let Ao, Xo, Eo, Yo;
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
  })()
]).then(async () => {
  function Co(e) {
    return H("MuiDialog", e);
  }
  let X, J, Po, ko, To, Do, wo;
  X = z("MuiDialog", [
    "root",
    "scrollPaper",
    "scrollBody",
    "container",
    "paper",
    "paperScrollPaper",
    "paperScrollBody",
    "paperWidthFalse",
    "paperWidthXs",
    "paperWidthSm",
    "paperWidthMd",
    "paperWidthLg",
    "paperWidthXl",
    "paperFullWidth",
    "paperFullScreen"
  ]);
  J = c.createContext({});
  Po = x(fo, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e, o) => o.backdrop
  })({
    zIndex: -1
  });
  ko = (e) => {
    const { classes: o, scroll: t, maxWidth: r, fullWidth: a, fullScreen: s } = e, i = {
      root: [
        "root"
      ],
      container: [
        "container",
        `scroll${S(t)}`
      ],
      paper: [
        "paper",
        `paperScroll${S(t)}`,
        `paperWidth${S(String(r))}`,
        a && "paperFullWidth",
        s && "paperFullScreen"
      ]
    };
    return R(i, Co, o);
  };
  To = x(bo, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e, o) => o.root
  })({
    "@media print": {
      position: "absolute !important"
    }
  });
  Do = x("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, o) => {
      const { ownerState: t } = e;
      return [
        o.container,
        o[`scroll${S(t.scroll)}`]
      ];
    }
  })({
    height: "100%",
    "@media print": {
      height: "auto"
    },
    outline: 0,
    variants: [
      {
        props: {
          scroll: "paper"
        },
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }
      },
      {
        props: {
          scroll: "body"
        },
        style: {
          overflowY: "auto",
          overflowX: "hidden",
          textAlign: "center",
          "&::after": {
            content: '""',
            display: "inline-block",
            verticalAlign: "middle",
            height: "100%",
            width: "0"
          }
        }
      }
    ]
  });
  wo = x(V, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, o) => {
      const { ownerState: t } = e;
      return [
        o.paper,
        o[`scrollPaper${S(t.scroll)}`],
        o[`paperWidth${S(String(t.maxWidth))}`],
        t.fullWidth && o.paperFullWidth,
        t.fullScreen && o.paperFullScreen
      ];
    }
  })(q(({ theme: e }) => ({
    margin: 32,
    position: "relative",
    overflowY: "auto",
    "@media print": {
      overflowY: "visible",
      boxShadow: "none"
    },
    variants: [
      {
        props: {
          scroll: "paper"
        },
        style: {
          display: "flex",
          flexDirection: "column",
          maxHeight: "calc(100% - 64px)"
        }
      },
      {
        props: {
          scroll: "body"
        },
        style: {
          display: "inline-block",
          verticalAlign: "middle",
          textAlign: "initial"
        }
      },
      {
        props: ({ ownerState: o }) => !o.maxWidth,
        style: {
          maxWidth: "calc(100% - 64px)"
        }
      },
      {
        props: {
          maxWidth: "xs"
        },
        style: {
          maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
          [`&.${X.paperScrollBody}`]: {
            [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64)]: {
              maxWidth: "calc(100% - 64px)"
            }
          }
        }
      },
      ...Object.keys(e.breakpoints.values).filter((o) => o !== "xs").map((o) => ({
        props: {
          maxWidth: o
        },
        style: {
          maxWidth: `${e.breakpoints.values[o]}${e.breakpoints.unit}`,
          [`&.${X.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[o] + 64)]: {
              maxWidth: "calc(100% - 64px)"
            }
          }
        }
      })),
      {
        props: ({ ownerState: o }) => o.fullWidth,
        style: {
          width: "calc(100% - 64px)"
        }
      },
      {
        props: ({ ownerState: o }) => o.fullScreen,
        style: {
          margin: 0,
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "none",
          borderRadius: 0,
          [`&.${X.paperScrollBody}`]: {
            margin: 0,
            maxWidth: "100%"
          }
        }
      }
    ]
  })));
  Ao = c.forwardRef(function(o, t) {
    const r = $({
      props: o,
      name: "MuiDialog"
    }), a = xo(), s = {
      enter: a.transitions.duration.enteringScreen,
      exit: a.transitions.duration.leavingScreen
    }, { "aria-describedby": i, "aria-labelledby": l, "aria-modal": d = true, BackdropComponent: C, BackdropProps: B, children: F, className: j, disableEscapeKeyDown: T = false, fullScreen: L = false, fullWidth: D = false, maxWidth: u = "sm", onBackdropClick: p, onClick: y, onClose: g, open: h, PaperComponent: N = V, PaperProps: w = {}, scroll: I = "paper", slots: W = {}, slotProps: U = {}, TransitionComponent: _ = G, transitionDuration: O = s, TransitionProps: Q, ...Z } = r, b = {
      ...r,
      disableEscapeKeyDown: T,
      fullScreen: L,
      fullWidth: D,
      maxWidth: u,
      scroll: I
    }, A = ko(b), Y = c.useRef(), oo = (f) => {
      Y.current = f.target === f.currentTarget;
    }, eo = (f) => {
      y && y(f), Y.current && (Y.current = null, p && p(f), g && g(f, "backdropClick"));
    }, E = ho(l), to = c.useMemo(() => ({
      titleId: E
    }), [
      E
    ]), ro = {
      transition: _,
      ...W
    }, ao = {
      transition: Q,
      paper: w,
      backdrop: B,
      ...U
    }, P = {
      slots: ro,
      slotProps: ao
    }, [so, io] = m("root", {
      elementType: To,
      shouldForwardComponentProp: true,
      externalForwardedProps: P,
      ownerState: b,
      className: v(A.root, j),
      ref: t
    }), [no, lo] = m("backdrop", {
      elementType: Po,
      shouldForwardComponentProp: true,
      externalForwardedProps: P,
      ownerState: b
    }), [po, co] = m("paper", {
      elementType: wo,
      shouldForwardComponentProp: true,
      externalForwardedProps: P,
      ownerState: b,
      className: v(A.paper, w.className)
    }), [uo, mo] = m("container", {
      elementType: Do,
      externalForwardedProps: P,
      ownerState: b,
      className: v(A.container)
    }), [yo, go] = m("transition", {
      elementType: G,
      externalForwardedProps: P,
      ownerState: b,
      additionalProps: {
        appear: true,
        in: h,
        timeout: O,
        role: "presentation"
      }
    });
    return n.jsx(so, {
      closeAfterTransition: true,
      slots: {
        backdrop: no
      },
      slotProps: {
        backdrop: {
          transitionDuration: O,
          as: C,
          ...lo
        }
      },
      disableEscapeKeyDown: T,
      onClose: g,
      open: h,
      onClick: eo,
      ...io,
      ...Z,
      children: n.jsx(yo, {
        ...go,
        children: n.jsx(uo, {
          onMouseDown: oo,
          ...mo,
          children: n.jsx(po, {
            as: N,
            elevation: 24,
            role: "dialog",
            "aria-describedby": i,
            "aria-labelledby": E,
            "aria-modal": d,
            ...co,
            children: n.jsx(J.Provider, {
              value: to,
              children: F
            })
          })
        })
      })
    });
  });
  function Wo(e) {
    return H("MuiDialogContent", e);
  }
  z("MuiDialogContent", [
    "root",
    "dividers"
  ]);
  function Mo(e) {
    return H("MuiDialogTitle", e);
  }
  let $o, Ro, Bo, Fo, jo, Lo, No;
  $o = z("MuiDialogTitle", [
    "root"
  ]);
  Ro = (e) => {
    const { classes: o, dividers: t } = e;
    return R({
      root: [
        "root",
        t && "dividers"
      ]
    }, Wo, o);
  };
  Bo = x("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, o) => {
      const { ownerState: t } = e;
      return [
        o.root,
        t.dividers && o.dividers
      ];
    }
  })(q(({ theme: e }) => ({
    flex: "1 1 auto",
    WebkitOverflowScrolling: "touch",
    overflowY: "auto",
    padding: "20px 24px",
    variants: [
      {
        props: ({ ownerState: o }) => o.dividers,
        style: {
          padding: "16px 24px",
          borderTop: `1px solid ${(e.vars || e).palette.divider}`,
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`
        }
      },
      {
        props: ({ ownerState: o }) => !o.dividers,
        style: {
          [`.${$o.root} + &`]: {
            paddingTop: 0
          }
        }
      }
    ]
  })));
  Yo = c.forwardRef(function(o, t) {
    const r = $({
      props: o,
      name: "MuiDialogContent"
    }), { className: a, dividers: s = false, ...i } = r, l = {
      ...r,
      dividers: s
    }, d = Ro(l);
    return n.jsx(Bo, {
      className: v(d.root, a),
      ownerState: l,
      ref: t,
      ...i
    });
  });
  Fo = (e) => {
    const { classes: o } = e;
    return R({
      root: [
        "root"
      ]
    }, Mo, o);
  };
  jo = x(k, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (e, o) => o.root
  })({
    padding: "16px 24px",
    flex: "0 0 auto"
  });
  Eo = c.forwardRef(function(o, t) {
    const r = $({
      props: o,
      name: "MuiDialogTitle"
    }), { className: a, id: s, ...i } = r, l = r, d = Fo(l), { titleId: C = s } = c.useContext(J);
    return n.jsx(jo, {
      component: "h2",
      className: v(d.root, a),
      ownerState: l,
      ref: t,
      variant: "h6",
      id: s ?? C,
      ...i
    });
  });
  Lo = (e) => {
    const { classes: o, inset: t, primary: r, secondary: a, dense: s } = e;
    return R({
      root: [
        "root",
        t && "inset",
        s && "dense",
        r && a && "multiline"
      ],
      primary: [
        "primary"
      ],
      secondary: [
        "secondary"
      ]
    }, So, o);
  };
  No = x("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e, o) => {
      const { ownerState: t } = e;
      return [
        {
          [`& .${M.primary}`]: o.primary
        },
        {
          [`& .${M.secondary}`]: o.secondary
        },
        o.root,
        t.inset && o.inset,
        t.primary && t.secondary && o.multiline,
        t.dense && o.dense
      ];
    }
  })({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${K.root}:where(& .${M.primary})`]: {
      display: "block"
    },
    [`.${K.root}:where(& .${M.secondary})`]: {
      display: "block"
    },
    variants: [
      {
        props: ({ ownerState: e }) => e.primary && e.secondary,
        style: {
          marginTop: 6,
          marginBottom: 6
        }
      },
      {
        props: ({ ownerState: e }) => e.inset,
        style: {
          paddingLeft: 56
        }
      }
    ]
  });
  Xo = c.forwardRef(function(o, t) {
    const r = $({
      props: o,
      name: "MuiListItemText"
    }), { children: a, className: s, disableTypography: i = false, inset: l = false, primary: d, primaryTypographyProps: C, secondary: B, secondaryTypographyProps: F, slots: j = {}, slotProps: T = {}, ...L } = r, { dense: D } = c.useContext(vo);
    let u = d ?? a, p = B;
    const y = {
      ...r,
      disableTypography: i,
      inset: l,
      primary: !!u,
      secondary: !!p,
      dense: D
    }, g = Lo(y), h = {
      slots: j,
      slotProps: {
        primary: C,
        secondary: F,
        ...T
      }
    }, [N, w] = m("root", {
      className: v(g.root, s),
      elementType: No,
      externalForwardedProps: {
        ...h,
        ...L
      },
      ownerState: y,
      ref: t
    }), [I, W] = m("primary", {
      className: g.primary,
      elementType: k,
      externalForwardedProps: h,
      ownerState: y
    }), [U, _] = m("secondary", {
      className: g.secondary,
      elementType: k,
      externalForwardedProps: h,
      ownerState: y
    });
    return u != null && u.type !== k && !i && (u = n.jsx(I, {
      variant: D ? "body2" : "body1",
      component: (W == null ? void 0 : W.variant) ? void 0 : "span",
      ...W,
      children: u
    })), p != null && p.type !== k && !i && (p = n.jsx(U, {
      variant: "body2",
      color: "textSecondary",
      ..._,
      children: p
    })), n.jsxs(N, {
      ...w,
      children: [
        u,
        p
      ]
    });
  });
});
export {
  Ao as D,
  Xo as L,
  __tla,
  Eo as a,
  Yo as b
};
