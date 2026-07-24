import { v as p, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as D, g as P, u as w, N as go, P as N, aB as j, U as mo, k as b, d as h, s as g, j as n, x as u, e as W, M as xo, aC as bo, m as U, T as ho, __tla as __tla_1 } from "./usePopoverPositioning-CABAc1cn.js";
let Fo, No, jo;
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
  function fo(e) {
    return P("MuiDialog", e);
  }
  let k, _, vo, Co, yo, So, ko;
  k = D("MuiDialog", [
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
  _ = p.createContext({});
  vo = g(bo, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e, o) => o.backdrop
  })({
    zIndex: -1
  });
  Co = (e) => {
    const { classes: o, scroll: t, maxWidth: r, fullWidth: a, fullScreen: s } = e, i = {
      root: [
        "root"
      ],
      container: [
        "container",
        `scroll${u(t)}`
      ],
      paper: [
        "paper",
        `paperScroll${u(t)}`,
        `paperWidth${u(String(r))}`,
        a && "paperFullWidth",
        s && "paperFullScreen"
      ]
    };
    return W(i, fo, o);
  };
  yo = g(xo, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e, o) => o.root
  })({
    "@media print": {
      position: "absolute !important"
    }
  });
  So = g("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, o) => {
      const { ownerState: t } = e;
      return [
        o.container,
        o[`scroll${u(t.scroll)}`]
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
  ko = g(N, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, o) => {
      const { ownerState: t } = e;
      return [
        o.paper,
        o[`scrollPaper${u(t.scroll)}`],
        o[`paperWidth${u(String(t.maxWidth))}`],
        t.fullWidth && o.paperFullWidth,
        t.fullScreen && o.paperFullScreen
      ];
    }
  })(U(({ theme: e }) => ({
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
          [`&.${k.paperScrollBody}`]: {
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
          [`&.${k.paperScrollBody}`]: {
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
          [`&.${k.paperScrollBody}`]: {
            margin: 0,
            maxWidth: "100%"
          }
        }
      }
    ]
  })));
  Fo = p.forwardRef(function(o, t) {
    const r = w({
      props: o,
      name: "MuiDialog"
    }), a = go(), s = {
      enter: a.transitions.duration.enteringScreen,
      exit: a.transitions.duration.leavingScreen
    }, { "aria-describedby": i, "aria-labelledby": l, "aria-modal": m = true, BackdropComponent: f, BackdropProps: A, children: I, className: Y, disableEscapeKeyDown: T = false, fullScreen: L = false, fullWidth: X = false, maxWidth: z = "sm", onBackdropClick: M, onClick: R, onClose: v, open: $, PaperComponent: E = N, PaperProps: B = {}, scroll: H = "paper", slots: O = {}, slotProps: K = {}, TransitionComponent: V = j, transitionDuration: F = s, TransitionProps: q, ...G } = r, c = {
      ...r,
      disableEscapeKeyDown: T,
      fullScreen: L,
      fullWidth: X,
      maxWidth: z,
      scroll: H
    }, C = Co(c), y = p.useRef(), J = (d) => {
      y.current = d.target === d.currentTarget;
    }, Q = (d) => {
      R && R(d), y.current && (y.current = null, M && M(d), v && v(d, "backdropClick"));
    }, S = mo(l), Z = p.useMemo(() => ({
      titleId: S
    }), [
      S
    ]), oo = {
      transition: V,
      ...O
    }, eo = {
      transition: q,
      paper: B,
      backdrop: A,
      ...K
    }, x = {
      slots: oo,
      slotProps: eo
    }, [to, ro] = b("root", {
      elementType: yo,
      shouldForwardComponentProp: true,
      externalForwardedProps: x,
      ownerState: c,
      className: h(C.root, Y),
      ref: t
    }), [ao, so] = b("backdrop", {
      elementType: vo,
      shouldForwardComponentProp: true,
      externalForwardedProps: x,
      ownerState: c
    }), [io, lo] = b("paper", {
      elementType: ko,
      shouldForwardComponentProp: true,
      externalForwardedProps: x,
      ownerState: c,
      className: h(C.paper, B.className)
    }), [no, po] = b("container", {
      elementType: So,
      externalForwardedProps: x,
      ownerState: c,
      className: h(C.container)
    }), [co, uo] = b("transition", {
      elementType: j,
      externalForwardedProps: x,
      ownerState: c,
      additionalProps: {
        appear: true,
        in: $,
        timeout: F,
        role: "presentation"
      }
    });
    return n.jsx(to, {
      closeAfterTransition: true,
      slots: {
        backdrop: ao
      },
      slotProps: {
        backdrop: {
          transitionDuration: F,
          as: f,
          ...so
        }
      },
      disableEscapeKeyDown: T,
      onClose: v,
      open: $,
      onClick: Q,
      ...ro,
      ...G,
      children: n.jsx(co, {
        ...uo,
        children: n.jsx(no, {
          onMouseDown: J,
          ...po,
          children: n.jsx(io, {
            as: E,
            elevation: 24,
            role: "dialog",
            "aria-describedby": i,
            "aria-labelledby": S,
            "aria-modal": m,
            ...lo,
            children: n.jsx(_.Provider, {
              value: Z,
              children: I
            })
          })
        })
      })
    });
  });
  function Do(e) {
    return P("MuiDialogContent", e);
  }
  D("MuiDialogContent", [
    "root",
    "dividers"
  ]);
  function Po(e) {
    return P("MuiDialogTitle", e);
  }
  let wo, Wo, To, Mo, Ro;
  wo = D("MuiDialogTitle", [
    "root"
  ]);
  Wo = (e) => {
    const { classes: o, dividers: t } = e;
    return W({
      root: [
        "root",
        t && "dividers"
      ]
    }, Do, o);
  };
  To = g("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, o) => {
      const { ownerState: t } = e;
      return [
        o.root,
        t.dividers && o.dividers
      ];
    }
  })(U(({ theme: e }) => ({
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
          [`.${wo.root} + &`]: {
            paddingTop: 0
          }
        }
      }
    ]
  })));
  jo = p.forwardRef(function(o, t) {
    const r = w({
      props: o,
      name: "MuiDialogContent"
    }), { className: a, dividers: s = false, ...i } = r, l = {
      ...r,
      dividers: s
    }, m = Wo(l);
    return n.jsx(To, {
      className: h(m.root, a),
      ownerState: l,
      ref: t,
      ...i
    });
  });
  Mo = (e) => {
    const { classes: o } = e;
    return W({
      root: [
        "root"
      ]
    }, Po, o);
  };
  Ro = g(ho, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (e, o) => o.root
  })({
    padding: "16px 24px",
    flex: "0 0 auto"
  });
  No = p.forwardRef(function(o, t) {
    const r = w({
      props: o,
      name: "MuiDialogTitle"
    }), { className: a, id: s, ...i } = r, l = r, m = Mo(l), { titleId: f = s } = p.useContext(_);
    return n.jsx(Ro, {
      component: "h2",
      className: h(m.root, a),
      ownerState: l,
      ref: t,
      variant: "h6",
      id: s ?? f,
      ...i
    });
  });
});
export {
  Fo as D,
  __tla,
  No as a,
  jo as b
};
