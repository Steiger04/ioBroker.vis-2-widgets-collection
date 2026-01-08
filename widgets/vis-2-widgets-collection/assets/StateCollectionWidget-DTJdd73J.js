import { c as je, j as a, g as F, a as V, u as B, b as $, s as j, d as R, e as N, m as q, f as De, P as ee, F as te, h as Re, i as H, M as Te, B as Me, T as z, L as W, k as Ae, l as re, n as $e, r as Le, o as K, p as Be, q as oe, t as se, C as ae, v as ie, w as le, x as U, S as Ne, y as We, I as Fe, D as Ve, z as Oe, A as _e, E as Ue, G as Ge, H as ze, J as ne, K as He, N as Ee, O as Ye, __tla as __tla_0 } from "./commonFields-DH-obq-U.js";
import { v as l, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { C as qe, __tla as __tla_2 } from "./Close-BMt36a-T.js";
import { g as Xe, l as J, __tla as __tla_3 } from "./listItemTextClasses-DoDeiAK_.js";
import { S as Ke, __tla as __tla_4 } from "./Stack-DsAoxzWO.js";
import { u as Je, __tla as __tla_5 } from "./useHtmlValue-Dcwl_hqT.js";
import { B as Qe, __tla as __tla_6 } from "./Button-CysZo4dh.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let pe;
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
  })()
]).then(async () => {
  const Ze = je(a.jsx("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }), "Person");
  function et(t) {
    return F("MuiAvatar", t);
  }
  V("MuiAvatar", [
    "root",
    "colorDefault",
    "circular",
    "rounded",
    "square",
    "img",
    "fallback"
  ]);
  const tt = (t) => {
    const { classes: e, variant: s, colorDefault: o } = t;
    return N({
      root: [
        "root",
        s,
        o && "colorDefault"
      ],
      img: [
        "img"
      ],
      fallback: [
        "fallback"
      ]
    }, et, e);
  }, ot = j("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: s } = t;
      return [
        e.root,
        e[s.variant],
        s.colorDefault && e.colorDefault
      ];
    }
  })(q(({ theme: t }) => ({
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
  }))), st = j("img", {
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
  }), at = j(Ze, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (t, e) => e.fallback
  })({
    width: "75%",
    height: "75%"
  });
  function nt({ crossOrigin: t, referrerPolicy: e, src: s, srcSet: o }) {
    const [r, i] = l.useState(false);
    return l.useEffect(() => {
      if (!s && !o) return;
      i(false);
      let n = true;
      const c = new Image();
      return c.onload = () => {
        n && i("loaded");
      }, c.onerror = () => {
        n && i("error");
      }, c.crossOrigin = t, c.referrerPolicy = e, c.src = s, o && (c.srcset = o), () => {
        n = false;
      };
    }, [
      t,
      e,
      s,
      o
    ]), r;
  }
  const rt = l.forwardRef(function(e, s) {
    const o = B({
      props: e,
      name: "MuiAvatar"
    }), { alt: r, children: i, className: n, component: c = "div", slots: u = {}, slotProps: m = {}, imgProps: b, sizes: C, src: S, srcSet: h, variant: f = "circular", ...I } = o;
    let v = null;
    const p = {
      ...o,
      component: c,
      variant: f
    }, y = nt({
      ...b,
      ...typeof m.img == "function" ? m.img(p) : m.img,
      src: S,
      srcSet: h
    }), k = S || h, P = k && y !== "error";
    p.colorDefault = !P, delete p.ownerState;
    const d = tt(p), [g, x] = $("img", {
      className: d.img,
      elementType: st,
      externalForwardedProps: {
        slots: u,
        slotProps: {
          img: {
            ...b,
            ...m.img
          }
        }
      },
      additionalProps: {
        alt: r,
        src: S,
        srcSet: h,
        sizes: C
      },
      ownerState: p
    });
    return P ? v = a.jsx(g, {
      ...x
    }) : i || i === 0 ? v = i : k && r ? v = r[0] : v = a.jsx(at, {
      ownerState: p,
      className: d.fallback
    }), a.jsx(ot, {
      as: c,
      className: R(d.root, n),
      ref: s,
      ...I,
      ownerState: p,
      children: v
    });
  });
  function it(t) {
    return F("MuiDialog", t);
  }
  const Z = V("MuiDialog", [
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
  ]), ce = l.createContext({}), lt = j(Me, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (t, e) => e.backdrop
  })({
    zIndex: -1
  }), ct = (t) => {
    const { classes: e, scroll: s, maxWidth: o, fullWidth: r, fullScreen: i } = t, n = {
      root: [
        "root"
      ],
      container: [
        "container",
        `scroll${H(s)}`
      ],
      paper: [
        "paper",
        `paperScroll${H(s)}`,
        `paperWidth${H(String(o))}`,
        r && "paperFullWidth",
        i && "paperFullScreen"
      ]
    };
    return N(n, it, e);
  }, dt = j(Te, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    "@media print": {
      position: "absolute !important"
    }
  }), pt = j("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (t, e) => {
      const { ownerState: s } = t;
      return [
        e.container,
        e[`scroll${H(s.scroll)}`]
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
  }), ut = j(ee, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (t, e) => {
      const { ownerState: s } = t;
      return [
        e.paper,
        e[`scrollPaper${H(s.scroll)}`],
        e[`paperWidth${H(String(s.maxWidth))}`],
        s.fullWidth && e.paperFullWidth,
        s.fullScreen && e.paperFullScreen
      ];
    }
  })(q(({ theme: t }) => ({
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
          [`&.${Z.paperScrollBody}`]: {
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
          [`&.${Z.paperScrollBody}`]: {
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
          [`&.${Z.paperScrollBody}`]: {
            margin: 0,
            maxWidth: "100%"
          }
        }
      }
    ]
  }))), mt = l.forwardRef(function(e, s) {
    const o = B({
      props: e,
      name: "MuiDialog"
    }), r = De(), i = {
      enter: r.transitions.duration.enteringScreen,
      exit: r.transitions.duration.leavingScreen
    }, { "aria-describedby": n, "aria-labelledby": c, "aria-modal": u = true, BackdropComponent: m, BackdropProps: b, children: C, className: S, disableEscapeKeyDown: h = false, fullScreen: f = false, fullWidth: I = false, maxWidth: v = "sm", onBackdropClick: p, onClick: y, onClose: k, open: P, PaperComponent: d = ee, PaperProps: g = {}, scroll: x = "paper", slots: w = {}, slotProps: M = {}, TransitionComponent: L = te, transitionDuration: E = i, TransitionProps: X, ...O } = o, D = {
      ...o,
      disableEscapeKeyDown: h,
      fullScreen: f,
      fullWidth: I,
      maxWidth: v,
      scroll: x
    }, A = ct(D), T = l.useRef(), ue = (_) => {
      T.current = _.target === _.currentTarget;
    }, me = (_) => {
      y && y(_), T.current && (T.current = null, p && p(_), k && k(_, "backdropClick"));
    }, Q = Re(c), ge = l.useMemo(() => ({
      titleId: Q
    }), [
      Q
    ]), ve = {
      transition: L,
      ...w
    }, ye = {
      transition: X,
      paper: g,
      backdrop: b,
      ...M
    }, Y = {
      slots: ve,
      slotProps: ye
    }, [fe, xe] = $("root", {
      elementType: dt,
      shouldForwardComponentProp: true,
      externalForwardedProps: Y,
      ownerState: D,
      className: R(A.root, S),
      ref: s
    }), [be, he] = $("backdrop", {
      elementType: lt,
      shouldForwardComponentProp: true,
      externalForwardedProps: Y,
      ownerState: D
    }), [Ce, Se] = $("paper", {
      elementType: ut,
      shouldForwardComponentProp: true,
      externalForwardedProps: Y,
      ownerState: D,
      className: R(A.paper, g.className)
    }), [ke, we] = $("container", {
      elementType: pt,
      externalForwardedProps: Y,
      ownerState: D,
      className: R(A.container)
    }), [Ie, Pe] = $("transition", {
      elementType: te,
      externalForwardedProps: Y,
      ownerState: D,
      additionalProps: {
        appear: true,
        in: P,
        timeout: E,
        role: "presentation"
      }
    });
    return a.jsx(fe, {
      closeAfterTransition: true,
      slots: {
        backdrop: be
      },
      slotProps: {
        backdrop: {
          transitionDuration: E,
          as: m,
          ...he
        }
      },
      disableEscapeKeyDown: h,
      onClose: k,
      open: P,
      onClick: me,
      ...xe,
      ...O,
      children: a.jsx(Ie, {
        ...Pe,
        children: a.jsx(ke, {
          onMouseDown: ue,
          ...we,
          children: a.jsx(Ce, {
            as: d,
            elevation: 24,
            role: "dialog",
            "aria-describedby": n,
            "aria-labelledby": Q,
            "aria-modal": u,
            ...Se,
            children: a.jsx(ce.Provider, {
              value: ge,
              children: C
            })
          })
        })
      })
    });
  });
  function gt(t) {
    return F("MuiDialogContent", t);
  }
  V("MuiDialogContent", [
    "root",
    "dividers"
  ]);
  function vt(t) {
    return F("MuiDialogTitle", t);
  }
  const yt = V("MuiDialogTitle", [
    "root"
  ]), ft = (t) => {
    const { classes: e, dividers: s } = t;
    return N({
      root: [
        "root",
        s && "dividers"
      ]
    }, gt, e);
  }, xt = j("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: s } = t;
      return [
        e.root,
        s.dividers && e.dividers
      ];
    }
  })(q(({ theme: t }) => ({
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
          [`.${yt.root} + &`]: {
            paddingTop: 0
          }
        }
      }
    ]
  }))), bt = l.forwardRef(function(e, s) {
    const o = B({
      props: e,
      name: "MuiDialogContent"
    }), { className: r, dividers: i = false, ...n } = o, c = {
      ...o,
      dividers: i
    }, u = ft(c);
    return a.jsx(xt, {
      className: R(u.root, r),
      ownerState: c,
      ref: s,
      ...n
    });
  }), ht = (t) => {
    const { classes: e } = t;
    return N({
      root: [
        "root"
      ]
    }, vt, e);
  }, Ct = j(z, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    padding: "16px 24px",
    flex: "0 0 auto"
  }), St = l.forwardRef(function(e, s) {
    const o = B({
      props: e,
      name: "MuiDialogTitle"
    }), { className: r, id: i, ...n } = o, c = o, u = ht(c), { titleId: m = i } = l.useContext(ce);
    return a.jsx(Ct, {
      component: "h2",
      className: R(u.root, r),
      ownerState: c,
      ref: s,
      variant: "h6",
      id: i ?? m,
      ...n
    });
  });
  function kt(t) {
    return F("MuiListItem", t);
  }
  V("MuiListItem", [
    "root",
    "container",
    "dense",
    "alignItemsFlexStart",
    "divider",
    "gutters",
    "padding",
    "secondaryAction"
  ]);
  function wt(t) {
    return F("MuiListItemButton", t);
  }
  const G = V("MuiListItemButton", [
    "root",
    "focusVisible",
    "dense",
    "alignItemsFlexStart",
    "disabled",
    "divider",
    "gutters",
    "selected"
  ]), It = (t, e) => {
    const { ownerState: s } = t;
    return [
      e.root,
      s.dense && e.dense,
      s.alignItems === "flex-start" && e.alignItemsFlexStart,
      s.divider && e.divider,
      !s.disableGutters && e.gutters
    ];
  }, Pt = (t) => {
    const { alignItems: e, classes: s, dense: o, disabled: r, disableGutters: i, divider: n, selected: c } = t, m = N({
      root: [
        "root",
        o && "dense",
        !i && "gutters",
        n && "divider",
        r && "disabled",
        e === "flex-start" && "alignItemsFlexStart",
        c && "selected"
      ]
    }, wt, s);
    return {
      ...s,
      ...m
    };
  }, jt = j($e, {
    shouldForwardProp: (t) => Le(t) || t === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: It
  })(q(({ theme: t }) => ({
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
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : K(t.palette.primary.main, t.palette.action.selectedOpacity),
      [`&.${G.focusVisible}`]: {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))` : K(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.focusOpacity)
      }
    },
    [`&.${G.selected}:hover`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : K(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : K(t.palette.primary.main, t.palette.action.selectedOpacity)
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
  }))), Dt = l.forwardRef(function(e, s) {
    const o = B({
      props: e,
      name: "MuiListItemButton"
    }), { alignItems: r = "center", autoFocus: i = false, component: n = "div", children: c, dense: u = false, disableGutters: m = false, divider: b = false, focusVisibleClassName: C, selected: S = false, className: h, ...f } = o, I = l.useContext(W), v = l.useMemo(() => ({
      dense: u || I.dense || false,
      alignItems: r,
      disableGutters: m
    }), [
      r,
      I.dense,
      u,
      m
    ]), p = l.useRef(null);
    Ae(() => {
      i && p.current && p.current.focus();
    }, [
      i
    ]);
    const y = {
      ...o,
      alignItems: r,
      dense: v.dense,
      disableGutters: m,
      divider: b,
      selected: S
    }, k = Pt(y), P = re(p, s);
    return a.jsx(W.Provider, {
      value: v,
      children: a.jsx(jt, {
        ref: P,
        href: f.href || f.to,
        component: (f.href || f.to) && n === "div" ? "button" : n,
        focusVisibleClassName: R(k.focusVisible, C),
        ownerState: y,
        className: R(k.root, h),
        ...f,
        classes: k,
        children: c
      })
    });
  });
  function Rt(t) {
    return F("MuiListItemSecondaryAction", t);
  }
  V("MuiListItemSecondaryAction", [
    "root",
    "disableGutters"
  ]);
  const Tt = (t) => {
    const { disableGutters: e, classes: s } = t;
    return N({
      root: [
        "root",
        e && "disableGutters"
      ]
    }, Rt, s);
  }, Mt = j("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: s } = t;
      return [
        e.root,
        s.disableGutters && e.disableGutters
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
  }), de = l.forwardRef(function(e, s) {
    const o = B({
      props: e,
      name: "MuiListItemSecondaryAction"
    }), { className: r, ...i } = o, n = l.useContext(W), c = {
      ...o,
      disableGutters: n.disableGutters
    }, u = Tt(c);
    return a.jsx(Mt, {
      className: R(u.root, r),
      ownerState: c,
      ref: s,
      ...i
    });
  });
  de.muiName = "ListItemSecondaryAction";
  const At = (t, e) => {
    const { ownerState: s } = t;
    return [
      e.root,
      s.dense && e.dense,
      s.alignItems === "flex-start" && e.alignItemsFlexStart,
      s.divider && e.divider,
      !s.disableGutters && e.gutters,
      !s.disablePadding && e.padding,
      s.hasSecondaryAction && e.secondaryAction
    ];
  }, $t = (t) => {
    const { alignItems: e, classes: s, dense: o, disableGutters: r, disablePadding: i, divider: n, hasSecondaryAction: c } = t;
    return N({
      root: [
        "root",
        o && "dense",
        !r && "gutters",
        !i && "padding",
        n && "divider",
        e === "flex-start" && "alignItemsFlexStart",
        c && "secondaryAction"
      ],
      container: [
        "container"
      ]
    }, kt, s);
  }, Lt = j("div", {
    name: "MuiListItem",
    slot: "Root",
    overridesResolver: At
  })(q(({ theme: t }) => ({
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
  }))), Bt = j("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (t, e) => e.container
  })({
    position: "relative"
  }), Nt = l.forwardRef(function(e, s) {
    const o = B({
      props: e,
      name: "MuiListItem"
    }), { alignItems: r = "center", children: i, className: n, component: c, components: u = {}, componentsProps: m = {}, ContainerComponent: b = "li", ContainerProps: { className: C, ...S } = {}, dense: h = false, disableGutters: f = false, disablePadding: I = false, divider: v = false, secondaryAction: p, slotProps: y = {}, slots: k = {}, ...P } = o, d = l.useContext(W), g = l.useMemo(() => ({
      dense: h || d.dense || false,
      alignItems: r,
      disableGutters: f
    }), [
      r,
      d.dense,
      h,
      f
    ]), x = l.useRef(null), w = l.Children.toArray(i), M = w.length && Be(w[w.length - 1], [
      "ListItemSecondaryAction"
    ]), L = {
      ...o,
      alignItems: r,
      dense: g.dense,
      disableGutters: f,
      disablePadding: I,
      divider: v,
      hasSecondaryAction: M
    }, E = $t(L), X = re(x, s), O = k.root || u.Root || Lt, D = y.root || m.root || {}, A = {
      className: R(E.root, D.className, n),
      ...P
    };
    let T = c || "li";
    return M ? (T = !A.component && !c ? "div" : T, b === "li" && (T === "li" ? T = "div" : A.component === "li" && (A.component = "div")), a.jsx(W.Provider, {
      value: g,
      children: a.jsxs(Bt, {
        as: b,
        className: R(E.container, C),
        ref: X,
        ownerState: L,
        ...S,
        children: [
          a.jsx(O, {
            ...D,
            ...!oe(O) && {
              as: T,
              ownerState: {
                ...L,
                ...D.ownerState
              }
            },
            ...A,
            children: w
          }),
          w.pop()
        ]
      })
    })) : a.jsx(W.Provider, {
      value: g,
      children: a.jsxs(O, {
        ...D,
        as: T,
        ref: X,
        ...!oe(O) && {
          ownerState: {
            ...L,
            ...D.ownerState
          }
        },
        ...A,
        children: [
          w,
          p && a.jsx(de, {
            children: p
          })
        ]
      })
    });
  }), Wt = (t) => {
    const { classes: e, inset: s, primary: o, secondary: r, dense: i } = t;
    return N({
      root: [
        "root",
        s && "inset",
        i && "dense",
        o && r && "multiline"
      ],
      primary: [
        "primary"
      ],
      secondary: [
        "secondary"
      ]
    }, Xe, e);
  }, Ft = j("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: s } = t;
      return [
        {
          [`& .${J.primary}`]: e.primary
        },
        {
          [`& .${J.secondary}`]: e.secondary
        },
        e.root,
        s.inset && e.inset,
        s.primary && s.secondary && e.multiline,
        s.dense && e.dense
      ];
    }
  })({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${se.root}:where(& .${J.primary})`]: {
      display: "block"
    },
    [`.${se.root}:where(& .${J.secondary})`]: {
      display: "block"
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.primary && t.secondary,
        style: {
          marginTop: 6,
          marginBottom: 6
        }
      },
      {
        props: ({ ownerState: t }) => t.inset,
        style: {
          paddingLeft: 56
        }
      }
    ]
  }), Vt = l.forwardRef(function(e, s) {
    const o = B({
      props: e,
      name: "MuiListItemText"
    }), { children: r, className: i, disableTypography: n = false, inset: c = false, primary: u, primaryTypographyProps: m, secondary: b, secondaryTypographyProps: C, slots: S = {}, slotProps: h = {}, ...f } = o, { dense: I } = l.useContext(W);
    let v = u ?? r, p = b;
    const y = {
      ...o,
      disableTypography: n,
      inset: c,
      primary: !!v,
      secondary: !!p,
      dense: I
    }, k = Wt(y), P = {
      slots: S,
      slotProps: {
        primary: m,
        secondary: C,
        ...h
      }
    }, [d, g] = $("root", {
      className: R(k.root, i),
      elementType: Ft,
      externalForwardedProps: {
        ...P,
        ...f
      },
      ownerState: y,
      ref: s
    }), [x, w] = $("primary", {
      className: k.primary,
      elementType: z,
      externalForwardedProps: P,
      ownerState: y
    }), [M, L] = $("secondary", {
      className: k.secondary,
      elementType: z,
      externalForwardedProps: P,
      ownerState: y
    });
    return v != null && v.type !== z && !n && (v = a.jsx(x, {
      variant: I ? "body2" : "body1",
      component: (w == null ? void 0 : w.variant) ? void 0 : "span",
      ...w,
      children: v
    })), p != null && p.type !== z && !n && (p = a.jsx(M, {
      variant: "body2",
      color: "textSecondary",
      ...L,
      children: p
    })), a.jsxs(d, {
      ...g,
      children: [
        v,
        p
      ]
    });
  }), Ot = () => [
    {
      type: "custom",
      component: () => a.jsx(ae, {})
    },
    {
      name: "onlyStates",
      type: "checkbox",
      label: "only_states",
      default: false,
      hidden: "!data.values_count"
    },
    {
      name: "statePushButton",
      type: "checkbox",
      label: "state_push_button",
      default: false,
      hidden: (t, e) => !t.onlyStates || Number(t.values_count) !== 2,
      tooltip: "state_push_button_tooltip"
    },
    {
      type: "custom",
      component: () => a.jsx(ae, {}),
      hidden: "!data.values_count"
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
  ], _t = ({ widgetStates: t, data: e, open: s, closeHandler: o }) => {
    const { widget: r, getPropertyValue: i } = l.useContext(ie), n = r.data.oidObject, c = r.data.onlyStates, [u, m] = l.useState(() => {
      const d = i("oid");
      return typeof d == "number" ? d : 0;
    }), { updateValue: b } = le("oid"), C = l.useMemo(() => {
      const d = n == null ? void 0 : n.commonStates, g = n == null ? void 0 : n.type, x = n == null ? void 0 : n.name, w = n == null ? void 0 : n.minValue, M = n == null ? void 0 : n.maxValue;
      return {
        commonStates: d,
        oidType: g,
        oidName: x,
        minValue: w,
        maxValue: M
      };
    }, [
      n
    ]), S = l.useCallback((d) => {
      b(d);
    }, [
      b
    ]), h = l.useCallback((d, g) => {
      const x = Array.isArray(g) ? g[0] : g;
      m(x), S(x);
    }, [
      S
    ]), f = l.useCallback((d, g) => {
      (g === "backdropClick" || g === "escapeKeyDown") && o();
    }, [
      o
    ]), I = l.useCallback(() => {
      o();
    }, [
      o
    ]), v = l.useCallback((d) => (g) => {
      g.preventDefault();
      const x = Number(d);
      isNaN(x) || m(x), S(d);
    }, [
      S
    ]), p = l.useMemo(() => {
      const { oidType: d, commonStates: g, minValue: x, maxValue: w } = C;
      return d === "number" && !c && x !== void 0 && w !== void 0 ? a.jsx(U, {
        sx: {
          px: 3
        },
        children: a.jsx(Ne, {
          sx: {
            pb: g ? 4 : 3
          },
          size: "small",
          min: x,
          max: w,
          marks: [
            {
              value: x,
              label: String(x)
            },
            {
              value: w,
              label: String(w)
            }
          ],
          valueLabelDisplay: "auto",
          value: u,
          onChange: h
        })
      }) : null;
    }, [
      C,
      c,
      u,
      h
    ]), y = l.useMemo(() => !t || !Object.keys(t).length ? null : a.jsx(We, {
      children: Object.entries(t).map(([d, g]) => a.jsx(Nt, {
        disablePadding: true,
        children: a.jsx(Dt, {
          onClick: v(d),
          children: a.jsx(Vt, {
            primaryTypographyProps: {
              variant: "body2"
            },
            primary: String(g)
          })
        })
      }, d))
    }), [
      t,
      v
    ]), k = l.useMemo(() => e.header || C.oidName || "Change Value", [
      e.header,
      C.oidName
    ]), P = l.useMemo(() => t && Object.keys(t).length > 0, [
      t
    ]);
    return a.jsxs(mt, {
      open: s,
      onClose: f,
      maxWidth: "xs",
      fullWidth: true,
      PaperProps: {
        sx: {
          bgcolor: e.backgroundColor,
          color: e.textColor
        }
      },
      children: [
        a.jsx(St, {
          sx: {
            m: 0,
            p: 2
          },
          id: "customized-dialog-title",
          children: k
        }),
        a.jsx(Fe, {
          "aria-label": "close",
          onClick: I,
          sx: (d) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: d.palette.grey[500]
          }),
          children: a.jsx(qe, {})
        }),
        a.jsx(bt, {
          sx: {
            overflow: "unset"
          },
          children: a.jsxs(Ke, {
            divider: P && a.jsx(Ve, {}),
            spacing: 0,
            component: ee,
            children: [
              p,
              y
            ]
          })
        })
      ]
    });
  };
  function Ut() {
    const t = l.useContext(ie), { widget: e } = t, s = e.data.oidObject, { data: o, widgetStates: r } = Oe("oid"), { value: i, updateValue: n } = le("oid"), [c, u] = l.useState(false), m = s == null ? void 0 : s.type, b = e.data.onlyStates, C = Je(i, e, o), S = C != null ? String(C) : "", h = () => {
      const y = e.data.value1;
      b && Number(e.data.values_count) === 2 && e.data.statePushButton && y !== void 0 && setTimeout(() => n(y), 0);
    }, f = () => {
      const y = e.data.value2;
      b && Number(e.data.values_count) === 2 && e.data.statePushButton && y !== void 0 && setTimeout(() => n(y), 0);
    }, I = l.useCallback(() => {
      if (!b) {
        u(true);
        return;
      }
      switch (Number(e.data.values_count)) {
        case 1:
          e.data.value1 !== void 0 && n(e.data.value1);
          break;
        case 2:
          e.data.value1 !== void 0 && e.data.value2 !== void 0 && (!e.data.statePushButton && String(i) === String(e.data.value1) ? n(e.data.value2) : n(e.data.value1));
          break;
        default:
          u(true);
          break;
      }
    }, [
      i,
      b,
      e.data.values_count,
      e.data.statePushButton,
      e.data.value1,
      e.data.value2,
      n
    ]), v = a.jsx(Qe, {
      disabled: e.data.onlyDisplay,
      onClick: I,
      onMouseDown: h,
      onMouseUp: f,
      onMouseOut: f,
      onTouchStart: h,
      onTouchEnd: f,
      sx: {
        width: "100%",
        height: "100%",
        color: o.iconColorActive || o.iconColor || o.textColorActive || o.textColor || "primary.main",
        "&:hover": {
          bgcolor: "transparent",
          filter: o.iconHoverActive && `brightness(${o.iconHoverActive})` || o.iconHover && `brightness(${o.iconHover})`
        }
      },
      children: a.jsxs(U, {
        sx: {
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          !e.data.noIcon && (o.iconActive || o.icon) && a.jsx(U, {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              width: "100%",
              height: "100%"
            },
            children: a.jsx(rt, {
              variant: "square",
              src: o.iconActive || o.icon || void 0,
              imgProps: {
                style: {
                  objectFit: "contain"
                }
              },
              sx: {
                overflow: "hidden",
                width: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                height: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                left: `calc(0px + ${o.iconXOffset})`,
                top: `calc(0px - ${o.iconYOffset})`,
                bgcolor: "transparent",
                ..._e(o.iconActive || o.icon, o.iconColorActive || o.iconColor || "primary.main")
              }
            })
          }),
          !e.data.noValue && a.jsx(U, {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              width: "100%",
              height: "100%"
            },
            children: a.jsx(z, {
              component: U,
              variant: "body2",
              sx: {
                fontSize: o.valueSizeActive || o.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                color: o.textColorActive || o.textColor,
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
                __html: `<div style="text-align: left; display: inline-block;">${S || ""}</div>`
              }
            })
          })
        ]
      })
    }), p = m === "boolean" || m === "number" || m === "string" || m === "mixed";
    return a.jsxs(a.Fragment, {
      children: [
        c && a.jsx(_t, {
          data: {
            sampleInterval: false,
            sampleIntervalValue: 200,
            delay: 100
          },
          widgetStates: r,
          open: c,
          closeHandler: () => u(false)
        }),
        a.jsxs(Ue, {
          isValidType: p,
          data: o,
          oidValue: i,
          children: [
            a.jsx(Ge, {
              data: o,
              widget: e
            }),
            a.jsx(U, {
              sx: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: v
            })
          ]
        })
      ]
    });
  }
  pe = class extends ze {
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
              ...ne()
            ]
          },
          {
            name: "button",
            label: "group_button",
            fields: [
              ...He([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...Ee(),
              ...Ot()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...ne({
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
      return pe.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(e, s) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const s = {
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Ye(this.wrapContent(a.jsx(Ut, {})), s);
    }
  };
});
export {
  __tla,
  pe as default
};
