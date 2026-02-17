import { c as jt, j as a, g as T, a as L, u as $, b as N, s as P, d as M, e as W, m as Y, f as Pt, P as Q, F as Z, h as Dt, i as U, M as Mt, B as Rt, T as at, L as z, k as At, l as nt, n as Bt, r as Tt, o as X, p as Lt, q as tt, C as et, t as it, v as _, w as $t, I as Wt, D as Ot, x as Ft, y as Vt, z as ot, A as Nt, E as _t, G as Gt, H as st, J as Ut, K as zt, __tla as __tla_0 } from "./useData-BxQArd1-.js";
import { u as rt, d as Ht, __tla as __tla_1 } from "./useValueState-B97KqBJC.js";
import { v as l, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as Et, __tla as __tla_3 } from "./Close-uPjMsSg-.js";
import { S as Yt, __tla as __tla_4 } from "./Slider-CSC-fon2.js";
import { L as qt, __tla as __tla_5 } from "./ListItemText-Dir_zoff.js";
import { S as Xt, __tla as __tla_6 } from "./Stack-BGDscFCP.js";
import { u as Kt, __tla as __tla_7 } from "./useHtmlValue-3ISCcM5X.js";
import { B as Jt, __tla as __tla_8 } from "./Button-eRDUYKJd.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_9 } from "./listItemTextClasses-COBicmTJ.js";
import { __tla as __tla_10 } from "./getThemeProps-DqE84hdx.js";
let dt;
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
  })()
]).then(async () => {
  const Qt = jt(a.jsx("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }), "Person");
  function Zt(t) {
    return T("MuiAvatar", t);
  }
  L("MuiAvatar", [
    "root",
    "colorDefault",
    "circular",
    "rounded",
    "square",
    "img",
    "fallback"
  ]);
  const te = (t) => {
    const { classes: e, variant: o, colorDefault: n } = t;
    return W({
      root: [
        "root",
        o,
        n && "colorDefault"
      ],
      img: [
        "img"
      ],
      fallback: [
        "fallback"
      ]
    }, Zt, e);
  }, ee = P("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        e[o.variant],
        o.colorDefault && e.colorDefault
      ];
    }
  })(Y(({ theme: t }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: t.typography.fontFamily,
    fontSize: t.typography.pxToRem(20),
    lineHeight: 1,
    borderRadius: "50%",
    overflow: "hidden",
    userSelect: "none",
    variants: [
      {
        props: {
          variant: "rounded"
        },
        style: {
          borderRadius: (t.vars || t).shape.borderRadius
        }
      },
      {
        props: {
          variant: "square"
        },
        style: {
          borderRadius: 0
        }
      },
      {
        props: {
          colorDefault: true
        },
        style: {
          color: (t.vars || t).palette.background.default,
          ...t.vars ? {
            backgroundColor: t.vars.palette.Avatar.defaultBg
          } : {
            backgroundColor: t.palette.grey[400],
            ...t.applyStyles("dark", {
              backgroundColor: t.palette.grey[600]
            })
          }
        }
      }
    ]
  }))), oe = P("img", {
    name: "MuiAvatar",
    slot: "Img",
    overridesResolver: (t, e) => e.img
  })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4
  }), se = P(Qt, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (t, e) => e.fallback
  })({
    width: "75%",
    height: "75%"
  });
  function ae({ crossOrigin: t, referrerPolicy: e, src: o, srcSet: n }) {
    const [s, c] = l.useState(false);
    return l.useEffect(() => {
      if (!o && !n) return;
      c(false);
      let r = true;
      const i = new Image();
      return i.onload = () => {
        r && c("loaded");
      }, i.onerror = () => {
        r && c("error");
      }, i.crossOrigin = t, i.referrerPolicy = e, i.src = o, n && (i.srcset = n), () => {
        r = false;
      };
    }, [
      t,
      e,
      o,
      n
    ]), s;
  }
  const ne = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiAvatar"
    }), { alt: s, children: c, className: r, component: i = "div", slots: p = {}, slotProps: m = {}, imgProps: C, sizes: w, src: x, srcSet: h, variant: y = "circular", ...I } = n;
    let b = null;
    const g = {
      ...n,
      component: i,
      variant: y
    }, j = ae({
      ...C,
      ...typeof m.img == "function" ? m.img(g) : m.img,
      src: x,
      srcSet: h
    }), S = x || h, v = S && j !== "error";
    g.colorDefault = !v, delete g.ownerState;
    const d = te(g), [u, f] = N("img", {
      className: d.img,
      elementType: oe,
      externalForwardedProps: {
        slots: p,
        slotProps: {
          img: {
            ...C,
            ...m.img
          }
        }
      },
      additionalProps: {
        alt: s,
        src: x,
        srcSet: h,
        sizes: w
      },
      ownerState: g
    });
    return v ? b = a.jsx(u, {
      ...f
    }) : c || c === 0 ? b = c : S && s ? b = s[0] : b = a.jsx(se, {
      ownerState: g,
      className: d.fallback
    }), a.jsx(ee, {
      as: i,
      className: M(d.root, r),
      ref: o,
      ...I,
      ownerState: g,
      children: b
    });
  });
  function ie(t) {
    return T("MuiDialog", t);
  }
  const J = L("MuiDialog", [
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
  ]), lt = l.createContext({}), re = P(Rt, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (t, e) => e.backdrop
  })({
    zIndex: -1
  }), le = (t) => {
    const { classes: e, scroll: o, maxWidth: n, fullWidth: s, fullScreen: c } = t, r = {
      root: [
        "root"
      ],
      container: [
        "container",
        `scroll${U(o)}`
      ],
      paper: [
        "paper",
        `paperScroll${U(o)}`,
        `paperWidth${U(String(n))}`,
        s && "paperFullWidth",
        c && "paperFullScreen"
      ]
    };
    return W(r, ie, e);
  }, ce = P(Mt, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    "@media print": {
      position: "absolute !important"
    }
  }), de = P("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.container,
        e[`scroll${U(o.scroll)}`]
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
  }), pe = P(Q, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.paper,
        e[`scrollPaper${U(o.scroll)}`],
        e[`paperWidth${U(String(o.maxWidth))}`],
        o.fullWidth && e.paperFullWidth,
        o.fullScreen && e.paperFullScreen
      ];
    }
  })(Y(({ theme: t }) => ({
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
        props: ({ ownerState: e }) => !e.maxWidth,
        style: {
          maxWidth: "calc(100% - 64px)"
        }
      },
      {
        props: {
          maxWidth: "xs"
        },
        style: {
          maxWidth: t.breakpoints.unit === "px" ? Math.max(t.breakpoints.values.xs, 444) : `max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,
          [`&.${J.paperScrollBody}`]: {
            [t.breakpoints.down(Math.max(t.breakpoints.values.xs, 444) + 64)]: {
              maxWidth: "calc(100% - 64px)"
            }
          }
        }
      },
      ...Object.keys(t.breakpoints.values).filter((e) => e !== "xs").map((e) => ({
        props: {
          maxWidth: e
        },
        style: {
          maxWidth: `${t.breakpoints.values[e]}${t.breakpoints.unit}`,
          [`&.${J.paperScrollBody}`]: {
            [t.breakpoints.down(t.breakpoints.values[e] + 64)]: {
              maxWidth: "calc(100% - 64px)"
            }
          }
        }
      })),
      {
        props: ({ ownerState: e }) => e.fullWidth,
        style: {
          width: "calc(100% - 64px)"
        }
      },
      {
        props: ({ ownerState: e }) => e.fullScreen,
        style: {
          margin: 0,
          width: "100%",
          maxWidth: "100%",
          height: "100%",
          maxHeight: "none",
          borderRadius: 0,
          [`&.${J.paperScrollBody}`]: {
            margin: 0,
            maxWidth: "100%"
          }
        }
      }
    ]
  }))), ue = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiDialog"
    }), s = Pt(), c = {
      enter: s.transitions.duration.enteringScreen,
      exit: s.transitions.duration.leavingScreen
    }, { "aria-describedby": r, "aria-labelledby": i, "aria-modal": p = true, BackdropComponent: m, BackdropProps: C, children: w, className: x, disableEscapeKeyDown: h = false, fullScreen: y = false, fullWidth: I = false, maxWidth: b = "sm", onBackdropClick: g, onClick: j, onClose: S, open: v, PaperComponent: d = Q, PaperProps: u = {}, scroll: f = "paper", slots: k = {}, slotProps: B = {}, TransitionComponent: O = Z, transitionDuration: H = c, TransitionProps: q, ...F } = n, D = {
      ...n,
      disableEscapeKeyDown: h,
      fullScreen: y,
      fullWidth: I,
      maxWidth: b,
      scroll: f
    }, A = le(D), R = l.useRef(), pt = (V) => {
      R.current = V.target === V.currentTarget;
    }, ut = (V) => {
      j && j(V), R.current && (R.current = null, g && g(V), S && S(V, "backdropClick"));
    }, K = Dt(i), mt = l.useMemo(() => ({
      titleId: K
    }), [
      K
    ]), gt = {
      transition: O,
      ...k
    }, vt = {
      transition: q,
      paper: u,
      backdrop: C,
      ...B
    }, E = {
      slots: gt,
      slotProps: vt
    }, [ft, xt] = N("root", {
      elementType: ce,
      shouldForwardComponentProp: true,
      externalForwardedProps: E,
      ownerState: D,
      className: M(A.root, x),
      ref: o
    }), [bt, ht] = N("backdrop", {
      elementType: re,
      shouldForwardComponentProp: true,
      externalForwardedProps: E,
      ownerState: D
    }), [yt, Ct] = N("paper", {
      elementType: pe,
      shouldForwardComponentProp: true,
      externalForwardedProps: E,
      ownerState: D,
      className: M(A.paper, u.className)
    }), [St, kt] = N("container", {
      elementType: de,
      externalForwardedProps: E,
      ownerState: D,
      className: M(A.container)
    }), [wt, It] = N("transition", {
      elementType: Z,
      externalForwardedProps: E,
      ownerState: D,
      additionalProps: {
        appear: true,
        in: v,
        timeout: H,
        role: "presentation"
      }
    });
    return a.jsx(ft, {
      closeAfterTransition: true,
      slots: {
        backdrop: bt
      },
      slotProps: {
        backdrop: {
          transitionDuration: H,
          as: m,
          ...ht
        }
      },
      disableEscapeKeyDown: h,
      onClose: S,
      open: v,
      onClick: ut,
      ...xt,
      ...F,
      children: a.jsx(wt, {
        ...It,
        children: a.jsx(St, {
          onMouseDown: pt,
          ...kt,
          children: a.jsx(yt, {
            as: d,
            elevation: 24,
            role: "dialog",
            "aria-describedby": r,
            "aria-labelledby": K,
            "aria-modal": p,
            ...Ct,
            children: a.jsx(lt.Provider, {
              value: mt,
              children: w
            })
          })
        })
      })
    });
  });
  function me(t) {
    return T("MuiDialogContent", t);
  }
  L("MuiDialogContent", [
    "root",
    "dividers"
  ]);
  function ge(t) {
    return T("MuiDialogTitle", t);
  }
  const ve = L("MuiDialogTitle", [
    "root"
  ]), fe = (t) => {
    const { classes: e, dividers: o } = t;
    return W({
      root: [
        "root",
        o && "dividers"
      ]
    }, me, e);
  }, xe = P("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.dividers && e.dividers
      ];
    }
  })(Y(({ theme: t }) => ({
    flex: "1 1 auto",
    WebkitOverflowScrolling: "touch",
    overflowY: "auto",
    padding: "20px 24px",
    variants: [
      {
        props: ({ ownerState: e }) => e.dividers,
        style: {
          padding: "16px 24px",
          borderTop: `1px solid ${(t.vars || t).palette.divider}`,
          borderBottom: `1px solid ${(t.vars || t).palette.divider}`
        }
      },
      {
        props: ({ ownerState: e }) => !e.dividers,
        style: {
          [`.${ve.root} + &`]: {
            paddingTop: 0
          }
        }
      }
    ]
  }))), be = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiDialogContent"
    }), { className: s, dividers: c = false, ...r } = n, i = {
      ...n,
      dividers: c
    }, p = fe(i);
    return a.jsx(xe, {
      className: M(p.root, s),
      ownerState: i,
      ref: o,
      ...r
    });
  }), he = (t) => {
    const { classes: e } = t;
    return W({
      root: [
        "root"
      ]
    }, ge, e);
  }, ye = P(at, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    padding: "16px 24px",
    flex: "0 0 auto"
  }), Ce = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiDialogTitle"
    }), { className: s, id: c, ...r } = n, i = n, p = he(i), { titleId: m = c } = l.useContext(lt);
    return a.jsx(ye, {
      component: "h2",
      className: M(p.root, s),
      ownerState: i,
      ref: o,
      variant: "h6",
      id: c ?? m,
      ...r
    });
  });
  function Se(t) {
    return T("MuiListItem", t);
  }
  L("MuiListItem", [
    "root",
    "container",
    "dense",
    "alignItemsFlexStart",
    "divider",
    "gutters",
    "padding",
    "secondaryAction"
  ]);
  function ke(t) {
    return T("MuiListItemButton", t);
  }
  const G = L("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]), we = (t, e) => {
    const { ownerState: o } = t;
    return [
      e.root,
      o.dense && e.dense,
      o.alignItems === "flex-start" && e.alignItemsFlexStart,
      o.divider && e.divider,
      !o.disableGutters && e.gutters
    ];
  }, Ie = (t) => {
    const { alignItems: e, classes: o, dense: n, disabled: s, disableGutters: c, divider: r, selected: i } = t, m = W({
      root: [
        "root",
        n && "dense",
        !c && "gutters",
        r && "divider",
        s && "disabled",
        e === "flex-start" && "alignItemsFlexStart",
        i && "selected"
      ]
    }, ke, o);
    return {
      ...o,
      ...m
    };
  }, je = P(Bt, {
    shouldForwardProp: (t) => Tt(t) || t === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: we
  })(Y(({ theme: t }) => ({
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    minWidth: 0,
    boxSizing: "border-box",
    textAlign: "left",
    paddingTop: 8,
    paddingBottom: 8,
    transition: t.transitions.create("background-color", {
      duration: t.transitions.duration.shortest
    }),
    "&:hover": {
      textDecoration: "none",
      backgroundColor: (t.vars || t).palette.action.hover,
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${G.selected}`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : X(t.palette.primary.main, t.palette.action.selectedOpacity),
      [`&.${G.focusVisible}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : X(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
      }
    },
    [`&.${G.selected}:hover`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : X(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : X(t.palette.primary.main, t.palette.action.selectedOpacity)
      }
    },
    [`&.${G.focusVisible}`]: {
      backgroundColor: (t.vars || t).palette.action.focus
    },
    [`&.${G.disabled}`]: {
      opacity: (t.vars || t).palette.action.disabledOpacity
    },
    variants: [
      {
        props: ({ ownerState: e }) => e.divider,
        style: {
          borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
          backgroundClip: "padding-box"
        }
      },
      {
        props: {
          alignItems: "flex-start"
        },
        style: {
          alignItems: "flex-start"
        }
      },
      {
        props: ({ ownerState: e }) => !e.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: e }) => e.dense,
        style: {
          paddingTop: 4,
          paddingBottom: 4
        }
      }
    ]
  }))), Pe = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiListItemButton"
    }), { alignItems: s = "center", autoFocus: c = false, component: r = "div", children: i, dense: p = false, disableGutters: m = false, divider: C = false, focusVisibleClassName: w, selected: x = false, className: h, ...y } = n, I = l.useContext(z), b = l.useMemo(() => ({
      dense: p || I.dense || false,
      alignItems: s,
      disableGutters: m
    }), [
      s,
      I.dense,
      p,
      m
    ]), g = l.useRef(null);
    At(() => {
      c && g.current && g.current.focus();
    }, [
      c
    ]);
    const j = {
      ...n,
      alignItems: s,
      dense: b.dense,
      disableGutters: m,
      divider: C,
      selected: x
    }, S = Ie(j), v = nt(g, o);
    return a.jsx(z.Provider, {
      value: b,
      children: a.jsx(je, {
        ref: v,
        href: y.href || y.to,
        component: (y.href || y.to) && r === "div" ? "button" : r,
        focusVisibleClassName: M(S.focusVisible, w),
        ownerState: j,
        className: M(S.root, h),
        ...y,
        classes: S,
        children: i
      })
    });
  });
  function De(t) {
    return T("MuiListItemSecondaryAction", t);
  }
  L("MuiListItemSecondaryAction", [
    "root",
    "disableGutters"
  ]);
  const Me = (t) => {
    const { disableGutters: e, classes: o } = t;
    return W({
      root: [
        "root",
        e && "disableGutters"
      ]
    }, De, o);
  }, Re = P("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.disableGutters && e.disableGutters
      ];
    }
  })({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    variants: [
      {
        props: ({ ownerState: t }) => t.disableGutters,
        style: {
          right: 0
        }
      }
    ]
  }), ct = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiListItemSecondaryAction"
    }), { className: s, ...c } = n, r = l.useContext(z), i = {
      ...n,
      disableGutters: r.disableGutters
    }, p = Me(i);
    return a.jsx(Re, {
      className: M(p.root, s),
      ownerState: i,
      ref: o,
      ...c
    });
  });
  ct.muiName = "ListItemSecondaryAction";
  const Ae = (t, e) => {
    const { ownerState: o } = t;
    return [
      e.root,
      o.dense && e.dense,
      o.alignItems === "flex-start" && e.alignItemsFlexStart,
      o.divider && e.divider,
      !o.disableGutters && e.gutters,
      !o.disablePadding && e.padding,
      o.hasSecondaryAction && e.secondaryAction
    ];
  }, Be = (t) => {
    const { alignItems: e, classes: o, dense: n, disableGutters: s, disablePadding: c, divider: r, hasSecondaryAction: i } = t;
    return W({
      root: [
        "root",
        n && "dense",
        !s && "gutters",
        !c && "padding",
        r && "divider",
        e === "flex-start" && "alignItemsFlexStart",
        i && "secondaryAction"
      ],
      container: [
        "container"
      ]
    }, Se, o);
  }, Te = P("div", {
    name: "MuiListItem",
    slot: "Root",
    overridesResolver: Ae
  })(Y(({ theme: t }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "left",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: {
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      {
        props: ({ ownerState: e }) => !e.disablePadding && e.dense,
        style: {
          paddingTop: 4,
          paddingBottom: 4
        }
      },
      {
        props: ({ ownerState: e }) => !e.disablePadding && !e.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: e }) => !e.disablePadding && !!e.secondaryAction,
        style: {
          paddingRight: 48
        }
      },
      {
        props: ({ ownerState: e }) => !!e.secondaryAction,
        style: {
          [`& > .${G.root}`]: {
            paddingRight: 48
          }
        }
      },
      {
        props: {
          alignItems: "flex-start"
        },
        style: {
          alignItems: "flex-start"
        }
      },
      {
        props: ({ ownerState: e }) => e.divider,
        style: {
          borderBottom: `1px solid ${(t.vars || t).palette.divider}`,
          backgroundClip: "padding-box"
        }
      },
      {
        props: ({ ownerState: e }) => e.button,
        style: {
          transition: t.transitions.create("background-color", {
            duration: t.transitions.duration.shortest
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (t.vars || t).palette.action.hover,
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }
      },
      {
        props: ({ ownerState: e }) => e.hasSecondaryAction,
        style: {
          paddingRight: 48
        }
      }
    ]
  }))), Le = P("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (t, e) => e.container
  })({
    position: "relative"
  }), $e = l.forwardRef(function(e, o) {
    const n = $({
      props: e,
      name: "MuiListItem"
    }), { alignItems: s = "center", children: c, className: r, component: i, components: p = {}, componentsProps: m = {}, ContainerComponent: C = "li", ContainerProps: { className: w, ...x } = {}, dense: h = false, disableGutters: y = false, disablePadding: I = false, divider: b = false, secondaryAction: g, slotProps: j = {}, slots: S = {}, ...v } = n, d = l.useContext(z), u = l.useMemo(() => ({
      dense: h || d.dense || false,
      alignItems: s,
      disableGutters: y
    }), [
      s,
      d.dense,
      h,
      y
    ]), f = l.useRef(null), k = l.Children.toArray(c), B = k.length && Lt(k[k.length - 1], [
      "ListItemSecondaryAction"
    ]), O = {
      ...n,
      alignItems: s,
      dense: u.dense,
      disableGutters: y,
      disablePadding: I,
      divider: b,
      hasSecondaryAction: B
    }, H = Be(O), q = nt(f, o), F = S.root || p.Root || Te, D = j.root || m.root || {}, A = {
      className: M(H.root, D.className, r),
      ...v
    };
    let R = i || "li";
    return B ? (R = !A.component && !i ? "div" : R, C === "li" && (R === "li" ? R = "div" : A.component === "li" && (A.component = "div")), a.jsx(z.Provider, {
      value: u,
      children: a.jsxs(Le, {
        as: C,
        className: M(H.container, w),
        ref: q,
        ownerState: O,
        ...x,
        children: [
          a.jsx(F, {
            ...D,
            ...!tt(F) && {
              as: R,
              ownerState: {
                ...O,
                ...D.ownerState
              }
            },
            ...A,
            children: k
          }),
          k.pop()
        ]
      })
    })) : a.jsx(z.Provider, {
      value: u,
      children: a.jsxs(F, {
        ...D,
        as: R,
        ref: q,
        ...!tt(F) && {
          ownerState: {
            ...O,
            ...D.ownerState
          }
        },
        ...A,
        children: [
          k,
          g && a.jsx(ct, {
            children: g
          })
        ]
      })
    });
  }), We = () => [
    {
      type: "custom",
      component: () => a.jsx(et, {})
    },
    {
      name: "onlyStates",
      type: "checkbox",
      label: "only_states",
      default: false,
      hidden: (t, e) => {
        var _a;
        return !t.values_count && !Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
      }
    },
    {
      name: "statePushButton",
      type: "checkbox",
      label: "state_push_button",
      default: false,
      hidden: (t, e) => {
        var _a;
        const o = t.values_count || Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
        return !t.onlyStates || o !== 2;
      },
      tooltip: "state_push_button_tooltip"
    },
    {
      type: "custom",
      component: () => a.jsx(et, {}),
      hidden: (t, e) => {
        var _a;
        return !t.values_count && !Object.keys(((_a = t.oidObject) == null ? void 0 : _a.commonStates) || {}).length;
      }
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (t, e) => !t.write,
      default: false,
      hidden: (t, e) => !t.write
    },
    {
      name: "noIcon",
      type: "checkbox",
      label: "no_icon"
    },
    {
      name: "noValue",
      type: "checkbox",
      label: "no_value"
    }
  ], Oe = ({ widgetStates: t, data: e, open: o, closeHandler: n }) => {
    const { widget: s, getPropertyValue: c } = l.useContext(it), r = s.data.oidObject, i = s.data.onlyStates, [p, m] = l.useState(() => {
      const d = c("oid");
      return typeof d == "number" ? d : 0;
    }), { updateValue: C } = rt("oid"), w = l.useMemo(() => {
      const d = r == null ? void 0 : r.commonStates, u = r == null ? void 0 : r.type, f = r == null ? void 0 : r.name, k = r == null ? void 0 : r.minValue, B = r == null ? void 0 : r.maxValue;
      return {
        commonStates: d,
        oidType: u,
        oidName: f,
        minValue: k,
        maxValue: B
      };
    }, [
      r
    ]), x = l.useCallback((d) => {
      C(d);
    }, [
      C
    ]), h = l.useCallback((d, u) => {
      const f = Array.isArray(u) ? u[0] : u;
      m(f), x(f);
    }, [
      x
    ]), y = l.useCallback((d, u) => {
      (u === "backdropClick" || u === "escapeKeyDown") && n();
    }, [
      n
    ]), I = l.useCallback(() => {
      n();
    }, [
      n
    ]), b = l.useCallback((d) => (u) => {
      u.preventDefault();
      const f = Number(d);
      isNaN(f) || m(f), x(d);
    }, [
      x
    ]), g = l.useMemo(() => {
      const { oidType: d, commonStates: u, minValue: f, maxValue: k } = w;
      return d === "number" && !i && f !== void 0 && k !== void 0 ? a.jsx(_, {
        sx: {
          px: 3
        },
        children: a.jsx(Yt, {
          sx: {
            pb: u ? 4 : 3
          },
          size: "small",
          min: f,
          max: k,
          marks: [
            {
              value: f,
              label: String(f)
            },
            {
              value: k,
              label: String(k)
            }
          ],
          valueLabelDisplay: "auto",
          value: p,
          onChange: h
        })
      }) : null;
    }, [
      w,
      i,
      p,
      h
    ]), j = l.useMemo(() => !t || !Object.keys(t).length ? null : a.jsx($t, {
      children: Object.entries(t).map(([d, u]) => a.jsx($e, {
        disablePadding: true,
        children: a.jsx(Pe, {
          onClick: b(d),
          children: a.jsx(qt, {
            primaryTypographyProps: {
              variant: "body2"
            },
            primary: String(u)
          })
        })
      }, d))
    }), [
      t,
      b
    ]), S = l.useMemo(() => e.header || w.oidName || "Change Value", [
      e.header,
      w.oidName
    ]), v = l.useMemo(() => t && Object.keys(t).length > 0, [
      t
    ]);
    return a.jsxs(ue, {
      open: o,
      onClose: y,
      maxWidth: "xs",
      fullWidth: true,
      PaperProps: {
        sx: {
          bgcolor: e.backgroundColor,
          color: e.textColor
        }
      },
      children: [
        a.jsx(Ce, {
          sx: {
            m: 0,
            p: 2
          },
          id: "customized-dialog-title",
          children: S
        }),
        a.jsx(Wt, {
          "aria-label": "close",
          onClick: I,
          sx: (d) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: d.palette.grey[500]
          }),
          children: a.jsx(Et, {})
        }),
        a.jsx(be, {
          sx: {
            overflow: "unset"
          },
          children: a.jsxs(Xt, {
            divider: v && a.jsx(Ot, {}),
            spacing: 0,
            component: Q,
            children: [
              g,
              j
            ]
          })
        })
      ]
    });
  };
  function Fe() {
    const t = l.useContext(it), { widget: e, theme: o } = t, n = e.data.oidObject, { data: s, widgetStates: c, states: r } = Ft("oid"), { value: i, updateValue: p } = rt("oid"), [m, C] = l.useState(false), w = n == null ? void 0 : n.type, x = e.data.onlyStates, h = Kt(i, e, s), y = h != null ? String(h) : "", I = () => {
      const v = e.data.value1;
      x && r.length === 2 && e.data.statePushButton && v !== void 0 && setTimeout(() => p(v), 0);
    }, b = () => {
      const v = e.data.value2;
      x && r.length === 2 && e.data.statePushButton && v !== void 0 && setTimeout(() => p(v), 0);
    }, g = l.useCallback(() => {
      if (!x) {
        C(true);
        return;
      }
      switch (r.length) {
        case 1:
          e.data.value1 !== void 0 && p(e.data.value1);
          break;
        case 2:
          e.data.value1 !== void 0 && e.data.value2 !== void 0 && (!e.data.statePushButton && String(i) === String(e.data.value1) ? p(e.data.value2) : p(e.data.value1));
          break;
        default:
          C(true);
          break;
      }
    }, [
      i,
      x,
      r.length,
      e.data.statePushButton,
      e.data.value1,
      e.data.value2,
      p
    ]), j = a.jsx(Jt, {
      disabled: e.data.onlyDisplay,
      onClick: g,
      onMouseDown: I,
      onMouseUp: b,
      onMouseOut: b,
      onTouchStart: I,
      onTouchEnd: b,
      sx: {
        width: "100%",
        height: "100%",
        color: s.iconColor || s.textColor || "primary.main",
        "&:hover": {
          bgcolor: "transparent"
        }
      },
      children: a.jsxs(_, {
        sx: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          !e.data.noIcon && s.icon && (() => {
            const v = s.icon, d = s.iconColor || o.palette.primary.main, u = s.forceColorMask, f = Vt(v, d, u);
            return a.jsx(_, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
                height: "100%"
              },
              children: a.jsx(ne, {
                variant: "square",
                src: v || void 0,
                slotProps: {
                  img: {
                    style: {
                      objectFit: "contain",
                      ...f
                    }
                  }
                },
                sx: {
                  overflow: "visible",
                  width: s.iconSizeOnly,
                  height: s.iconSizeOnly,
                  left: `calc(0px + ${s.iconXOffset})`,
                  top: `calc(0px - ${s.iconYOffset})`
                }
              })
            });
          })(),
          !e.data.noValue && a.jsx(_, {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              width: "100%",
              height: "100%"
            },
            children: a.jsx(at, {
              component: _,
              variant: "body2",
              sx: {
                fontSize: s.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                background: ot(s.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: ot(s.textColor) ? "transparent" : s.textColor,
                textTransform: "none",
                px: 1,
                pl: 0,
                pr: 1,
                width: "100%",
                height: "100%",
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflowWrap: "break-word",
                wordBreak: "break-word",
                whiteSpace: "normal",
                hyphens: "auto",
                "& > div": {
                  textAlign: "left",
                  display: "inline-block"
                }
              },
              dangerouslySetInnerHTML: {
                __html: `<div style="text-align: left; display: inline-block;">${y || ""}</div>`
              }
            })
          })
        ]
      })
    }), S = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(w ?? "");
    return a.jsxs(a.Fragment, {
      children: [
        m && a.jsx(Oe, {
          data: {
            sampleInterval: false,
            sampleIntervalValue: 200,
            delay: 100
          },
          widgetStates: c,
          open: m,
          closeHandler: () => C(false)
        }),
        a.jsxs(Nt, {
          isValidType: S,
          data: s,
          oidValue: i,
          children: [
            a.jsx(_t, {
              data: s,
              widget: e
            }),
            a.jsx(_, {
              sx: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: j
            })
          ]
        })
      ]
    });
  }
  dt = class extends Gt {
    static getWidgetInfo() {
      return {
        id: "tplStateCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visSetColor: "#0C0A43",
        visName: "StateCollectionWidget",
        visWidgetLabel: "state_collection_widget",
        visOrder: 3,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...st()
            ]
          },
          {
            name: "button",
            label: "group_button",
            fields: [
              ...Ut([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...Ht(),
              ...We()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...st({
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
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-state.png"
      };
    }
    getWidgetInfo() {
      return dt.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(e, o) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const o = {
        id: e.id,
        refService: e.refService,
        style: e.style,
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, zt(this.wrapContent(a.jsx(Fe, {})), o);
    }
  };
});
export {
  __tla,
  dt as default
};
