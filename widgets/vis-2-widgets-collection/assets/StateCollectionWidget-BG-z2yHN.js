import { c as je, j as a, g as F, a as V, u as B, b as $, s as j, d as R, e as N, m as q, f as De, P as ee, F as te, h as Re, i as H, M as Te, B as Me, T as z, k as Ae, l as re, n as $e, r as Le, o as K, p as oe, t as se, C as ae, q as ie, v as le, w as U, S as Be, I as Ne, D as We, x as Fe, y as Ve, z as _e, A as Oe, E as Ue, G as Ge, H as ne, J as ze, K as He, L as Ee, __tla as __tla_0 } from "./commonFields-B5KdVoLe.js";
import { v as i, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { C as Ye, __tla as __tla_2 } from "./Close-C3TJVVB9.js";
import { L as W, g as qe, l as J, a as Xe, __tla as __tla_3 } from "./listItemTextClasses-BRGApzsD.js";
import { S as Ke, __tla as __tla_4 } from "./Stack-BRlt7qXT.js";
import { u as Je, __tla as __tla_5 } from "./useHtmlValue-Dcwl_hqT.js";
import { B as Qe, __tla as __tla_6 } from "./Button-C98dyMu0.js";
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
  function Ze(t, e) {
    var _a, _b, _c;
    return i.isValidElement(t) && e.indexOf(t.type.muiName ?? ((_c = (_b = (_a = t.type) == null ? void 0 : _a._payload) == null ? void 0 : _b.value) == null ? void 0 : _c.muiName)) !== -1;
  }
  const et = je(a.jsx("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }), "Person");
  function tt(t) {
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
  const ot = (t) => {
    const { classes: e, variant: o, colorDefault: n } = t;
    return N({
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
    }, tt, e);
  }, st = j("div", {
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
  }))), at = j("img", {
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
  }), nt = j(et, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (t, e) => e.fallback
  })({
    width: "75%",
    height: "75%"
  });
  function rt({ crossOrigin: t, referrerPolicy: e, src: o, srcSet: n }) {
    const [l, s] = i.useState(false);
    return i.useEffect(() => {
      if (!o && !n) return;
      s(false);
      let c = true;
      const r = new Image();
      return r.onload = () => {
        c && s("loaded");
      }, r.onerror = () => {
        c && s("error");
      }, r.crossOrigin = t, r.referrerPolicy = e, r.src = o, n && (r.srcset = n), () => {
        c = false;
      };
    }, [
      t,
      e,
      o,
      n
    ]), l;
  }
  const it = i.forwardRef(function(e, o) {
    const n = B({
      props: e,
      name: "MuiAvatar"
    }), { alt: l, children: s, className: c, component: r = "div", slots: d = {}, slotProps: v = {}, imgProps: k, sizes: C, src: y, srcSet: x, variant: S = "circular", ...P } = n;
    let m = null;
    const u = {
      ...n,
      component: r,
      variant: S
    }, w = rt({
      ...k,
      ...typeof v.img == "function" ? v.img(u) : v.img,
      src: y,
      srcSet: x
    }), b = y || x, f = b && w !== "error";
    u.colorDefault = !f, delete u.ownerState;
    const p = ot(u), [g, h] = $("img", {
      className: p.img,
      elementType: at,
      externalForwardedProps: {
        slots: d,
        slotProps: {
          img: {
            ...k,
            ...v.img
          }
        }
      },
      additionalProps: {
        alt: l,
        src: y,
        srcSet: x,
        sizes: C
      },
      ownerState: u
    });
    return f ? m = a.jsx(g, {
      ...h
    }) : s || s === 0 ? m = s : b && l ? m = l[0] : m = a.jsx(nt, {
      ownerState: u,
      className: p.fallback
    }), a.jsx(st, {
      as: r,
      className: R(p.root, c),
      ref: o,
      ...P,
      ownerState: u,
      children: m
    });
  });
  function lt(t) {
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
  ]), ce = i.createContext({}), ct = j(Me, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (t, e) => e.backdrop
  })({
    zIndex: -1
  }), dt = (t) => {
    const { classes: e, scroll: o, maxWidth: n, fullWidth: l, fullScreen: s } = t, c = {
      root: [
        "root"
      ],
      container: [
        "container",
        `scroll${H(o)}`
      ],
      paper: [
        "paper",
        `paperScroll${H(o)}`,
        `paperWidth${H(String(n))}`,
        l && "paperFullWidth",
        s && "paperFullScreen"
      ]
    };
    return N(c, lt, e);
  }, pt = j(Te, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    "@media print": {
      position: "absolute !important"
    }
  }), ut = j("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.container,
        e[`scroll${H(o.scroll)}`]
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
  }), mt = j(ee, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.paper,
        e[`scrollPaper${H(o.scroll)}`],
        e[`paperWidth${H(String(o.maxWidth))}`],
        o.fullWidth && e.paperFullWidth,
        o.fullScreen && e.paperFullScreen
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
  }))), gt = i.forwardRef(function(e, o) {
    const n = B({
      props: e,
      name: "MuiDialog"
    }), l = De(), s = {
      enter: l.transitions.duration.enteringScreen,
      exit: l.transitions.duration.leavingScreen
    }, { "aria-describedby": c, "aria-labelledby": r, "aria-modal": d = true, BackdropComponent: v, BackdropProps: k, children: C, className: y, disableEscapeKeyDown: x = false, fullScreen: S = false, fullWidth: P = false, maxWidth: m = "sm", onBackdropClick: u, onClick: w, onClose: b, open: f, PaperComponent: p = ee, PaperProps: g = {}, scroll: h = "paper", slots: I = {}, slotProps: M = {}, TransitionComponent: L = te, transitionDuration: E = s, TransitionProps: X, ..._ } = n, D = {
      ...n,
      disableEscapeKeyDown: x,
      fullScreen: S,
      fullWidth: P,
      maxWidth: m,
      scroll: h
    }, A = dt(D), T = i.useRef(), ue = (O) => {
      T.current = O.target === O.currentTarget;
    }, me = (O) => {
      w && w(O), T.current && (T.current = null, u && u(O), b && b(O, "backdropClick"));
    }, Q = Re(r), ge = i.useMemo(() => ({
      titleId: Q
    }), [
      Q
    ]), ve = {
      transition: L,
      ...I
    }, ye = {
      transition: X,
      paper: g,
      backdrop: k,
      ...M
    }, Y = {
      slots: ve,
      slotProps: ye
    }, [fe, xe] = $("root", {
      elementType: pt,
      shouldForwardComponentProp: true,
      externalForwardedProps: Y,
      ownerState: D,
      className: R(A.root, y),
      ref: o
    }), [be, he] = $("backdrop", {
      elementType: ct,
      shouldForwardComponentProp: true,
      externalForwardedProps: Y,
      ownerState: D
    }), [Ce, Se] = $("paper", {
      elementType: mt,
      shouldForwardComponentProp: true,
      externalForwardedProps: Y,
      ownerState: D,
      className: R(A.paper, g.className)
    }), [ke, we] = $("container", {
      elementType: ut,
      externalForwardedProps: Y,
      ownerState: D,
      className: R(A.container)
    }), [Ie, Pe] = $("transition", {
      elementType: te,
      externalForwardedProps: Y,
      ownerState: D,
      additionalProps: {
        appear: true,
        in: f,
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
          as: v,
          ...he
        }
      },
      disableEscapeKeyDown: x,
      onClose: b,
      open: f,
      onClick: me,
      ...xe,
      ..._,
      children: a.jsx(Ie, {
        ...Pe,
        children: a.jsx(ke, {
          onMouseDown: ue,
          ...we,
          children: a.jsx(Ce, {
            as: p,
            elevation: 24,
            role: "dialog",
            "aria-describedby": c,
            "aria-labelledby": Q,
            "aria-modal": d,
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
  function vt(t) {
    return F("MuiDialogContent", t);
  }
  V("MuiDialogContent", [
    "root",
    "dividers"
  ]);
  function yt(t) {
    return F("MuiDialogTitle", t);
  }
  const ft = V("MuiDialogTitle", [
    "root"
  ]), xt = (t) => {
    const { classes: e, dividers: o } = t;
    return N({
      root: [
        "root",
        o && "dividers"
      ]
    }, vt, e);
  }, bt = j("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.dividers && e.dividers
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
          [`.${ft.root} + &`]: {
            paddingTop: 0
          }
        }
      }
    ]
  }))), ht = i.forwardRef(function(e, o) {
    const n = B({
      props: e,
      name: "MuiDialogContent"
    }), { className: l, dividers: s = false, ...c } = n, r = {
      ...n,
      dividers: s
    }, d = xt(r);
    return a.jsx(bt, {
      className: R(d.root, l),
      ownerState: r,
      ref: o,
      ...c
    });
  }), Ct = (t) => {
    const { classes: e } = t;
    return N({
      root: [
        "root"
      ]
    }, yt, e);
  }, St = j(z, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    padding: "16px 24px",
    flex: "0 0 auto"
  }), kt = i.forwardRef(function(e, o) {
    const n = B({
      props: e,
      name: "MuiDialogTitle"
    }), { className: l, id: s, ...c } = n, r = n, d = Ct(r), { titleId: v = s } = i.useContext(ce);
    return a.jsx(St, {
      component: "h2",
      className: R(d.root, l),
      ownerState: r,
      ref: o,
      variant: "h6",
      id: s ?? v,
      ...c
    });
  });
  function wt(t) {
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
  function It(t) {
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
  ]), Pt = (t, e) => {
    const { ownerState: o } = t;
    return [
      e.root,
      o.dense && e.dense,
      o.alignItems === "flex-start" && e.alignItemsFlexStart,
      o.divider && e.divider,
      !o.disableGutters && e.gutters
    ];
  }, jt = (t) => {
    const { alignItems: e, classes: o, dense: n, disabled: l, disableGutters: s, divider: c, selected: r } = t, v = N({
      root: [
        "root",
        n && "dense",
        !s && "gutters",
        c && "divider",
        l && "disabled",
        e === "flex-start" && "alignItemsFlexStart",
        r && "selected"
      ]
    }, It, o);
    return {
      ...o,
      ...v
    };
  }, Dt = j($e, {
    shouldForwardProp: (t) => Le(t) || t === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: Pt
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
  }))), Rt = i.forwardRef(function(e, o) {
    const n = B({
      props: e,
      name: "MuiListItemButton"
    }), { alignItems: l = "center", autoFocus: s = false, component: c = "div", children: r, dense: d = false, disableGutters: v = false, divider: k = false, focusVisibleClassName: C, selected: y = false, className: x, ...S } = n, P = i.useContext(W), m = i.useMemo(() => ({
      dense: d || P.dense || false,
      alignItems: l,
      disableGutters: v
    }), [
      l,
      P.dense,
      d,
      v
    ]), u = i.useRef(null);
    Ae(() => {
      s && u.current && u.current.focus();
    }, [
      s
    ]);
    const w = {
      ...n,
      alignItems: l,
      dense: m.dense,
      disableGutters: v,
      divider: k,
      selected: y
    }, b = jt(w), f = re(u, o);
    return a.jsx(W.Provider, {
      value: m,
      children: a.jsx(Dt, {
        ref: f,
        href: S.href || S.to,
        component: (S.href || S.to) && c === "div" ? "button" : c,
        focusVisibleClassName: R(b.focusVisible, C),
        ownerState: w,
        className: R(b.root, x),
        ...S,
        classes: b,
        children: r
      })
    });
  });
  function Tt(t) {
    return F("MuiListItemSecondaryAction", t);
  }
  V("MuiListItemSecondaryAction", [
    "root",
    "disableGutters"
  ]);
  const Mt = (t) => {
    const { disableGutters: e, classes: o } = t;
    return N({
      root: [
        "root",
        e && "disableGutters"
      ]
    }, Tt, o);
  }, At = j("div", {
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
  }), de = i.forwardRef(function(e, o) {
    const n = B({
      props: e,
      name: "MuiListItemSecondaryAction"
    }), { className: l, ...s } = n, c = i.useContext(W), r = {
      ...n,
      disableGutters: c.disableGutters
    }, d = Mt(r);
    return a.jsx(At, {
      className: R(d.root, l),
      ownerState: r,
      ref: o,
      ...s
    });
  });
  de.muiName = "ListItemSecondaryAction";
  const $t = (t, e) => {
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
  }, Lt = (t) => {
    const { alignItems: e, classes: o, dense: n, disableGutters: l, disablePadding: s, divider: c, hasSecondaryAction: r } = t;
    return N({
      root: [
        "root",
        n && "dense",
        !l && "gutters",
        !s && "padding",
        c && "divider",
        e === "flex-start" && "alignItemsFlexStart",
        r && "secondaryAction"
      ],
      container: [
        "container"
      ]
    }, wt, o);
  }, Bt = j("div", {
    name: "MuiListItem",
    slot: "Root",
    overridesResolver: $t
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
  }))), Nt = j("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (t, e) => e.container
  })({
    position: "relative"
  }), Wt = i.forwardRef(function(e, o) {
    const n = B({
      props: e,
      name: "MuiListItem"
    }), { alignItems: l = "center", children: s, className: c, component: r, components: d = {}, componentsProps: v = {}, ContainerComponent: k = "li", ContainerProps: { className: C, ...y } = {}, dense: x = false, disableGutters: S = false, disablePadding: P = false, divider: m = false, secondaryAction: u, slotProps: w = {}, slots: b = {}, ...f } = n, p = i.useContext(W), g = i.useMemo(() => ({
      dense: x || p.dense || false,
      alignItems: l,
      disableGutters: S
    }), [
      l,
      p.dense,
      x,
      S
    ]), h = i.useRef(null), I = i.Children.toArray(s), M = I.length && Ze(I[I.length - 1], [
      "ListItemSecondaryAction"
    ]), L = {
      ...n,
      alignItems: l,
      dense: g.dense,
      disableGutters: S,
      disablePadding: P,
      divider: m,
      hasSecondaryAction: M
    }, E = Lt(L), X = re(h, o), _ = b.root || d.Root || Bt, D = w.root || v.root || {}, A = {
      className: R(E.root, D.className, c),
      ...f
    };
    let T = r || "li";
    return M ? (T = !A.component && !r ? "div" : T, k === "li" && (T === "li" ? T = "div" : A.component === "li" && (A.component = "div")), a.jsx(W.Provider, {
      value: g,
      children: a.jsxs(Nt, {
        as: k,
        className: R(E.container, C),
        ref: X,
        ownerState: L,
        ...y,
        children: [
          a.jsx(_, {
            ...D,
            ...!oe(_) && {
              as: T,
              ownerState: {
                ...L,
                ...D.ownerState
              }
            },
            ...A,
            children: I
          }),
          I.pop()
        ]
      })
    })) : a.jsx(W.Provider, {
      value: g,
      children: a.jsxs(_, {
        ...D,
        as: T,
        ref: X,
        ...!oe(_) && {
          ownerState: {
            ...L,
            ...D.ownerState
          }
        },
        ...A,
        children: [
          I,
          u && a.jsx(de, {
            children: u
          })
        ]
      })
    });
  }), Ft = (t) => {
    const { classes: e, inset: o, primary: n, secondary: l, dense: s } = t;
    return N({
      root: [
        "root",
        o && "inset",
        s && "dense",
        n && l && "multiline"
      ],
      primary: [
        "primary"
      ],
      secondary: [
        "secondary"
      ]
    }, qe, e);
  }, Vt = j("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        {
          [`& .${J.primary}`]: e.primary
        },
        {
          [`& .${J.secondary}`]: e.secondary
        },
        e.root,
        o.inset && e.inset,
        o.primary && o.secondary && e.multiline,
        o.dense && e.dense
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
  }), _t = i.forwardRef(function(e, o) {
    const n = B({
      props: e,
      name: "MuiListItemText"
    }), { children: l, className: s, disableTypography: c = false, inset: r = false, primary: d, primaryTypographyProps: v, secondary: k, secondaryTypographyProps: C, slots: y = {}, slotProps: x = {}, ...S } = n, { dense: P } = i.useContext(W);
    let m = d ?? l, u = k;
    const w = {
      ...n,
      disableTypography: c,
      inset: r,
      primary: !!m,
      secondary: !!u,
      dense: P
    }, b = Ft(w), f = {
      slots: y,
      slotProps: {
        primary: v,
        secondary: C,
        ...x
      }
    }, [p, g] = $("root", {
      className: R(b.root, s),
      elementType: Vt,
      externalForwardedProps: {
        ...f,
        ...S
      },
      ownerState: w,
      ref: o
    }), [h, I] = $("primary", {
      className: b.primary,
      elementType: z,
      externalForwardedProps: f,
      ownerState: w
    }), [M, L] = $("secondary", {
      className: b.secondary,
      elementType: z,
      externalForwardedProps: f,
      ownerState: w
    });
    return m != null && m.type !== z && !c && (m = a.jsx(h, {
      variant: P ? "body2" : "body1",
      component: (I == null ? void 0 : I.variant) ? void 0 : "span",
      ...I,
      children: m
    })), u != null && u.type !== z && !c && (u = a.jsx(M, {
      variant: "body2",
      color: "textSecondary",
      ...L,
      children: u
    })), a.jsxs(p, {
      ...g,
      children: [
        m,
        u
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
  ], Ut = ({ widgetStates: t, data: e, open: o, closeHandler: n }) => {
    const { widget: l, getPropertyValue: s } = i.useContext(ie), c = l.data.oidObject, r = l.data.onlyStates, [d, v] = i.useState(() => {
      const p = s("oid");
      return typeof p == "number" ? p : 0;
    }), { updateValue: k } = le("oid"), C = i.useMemo(() => {
      const p = c == null ? void 0 : c.commonStates, g = c == null ? void 0 : c.type, h = c == null ? void 0 : c.name, I = c == null ? void 0 : c.minValue, M = c == null ? void 0 : c.maxValue;
      return {
        commonStates: p,
        oidType: g,
        oidName: h,
        minValue: I,
        maxValue: M
      };
    }, [
      c
    ]), y = i.useCallback((p) => {
      k(p);
    }, [
      k
    ]), x = i.useCallback((p, g) => {
      const h = Array.isArray(g) ? g[0] : g;
      v(h), y(h);
    }, [
      y
    ]), S = i.useCallback((p, g) => {
      (g === "backdropClick" || g === "escapeKeyDown") && n();
    }, [
      n
    ]), P = i.useCallback(() => {
      n();
    }, [
      n
    ]), m = i.useCallback((p) => (g) => {
      g.preventDefault();
      const h = Number(p);
      isNaN(h) || v(h), y(p);
    }, [
      y
    ]), u = i.useMemo(() => {
      const { oidType: p, commonStates: g, minValue: h, maxValue: I } = C;
      return p === "number" && !r && h !== void 0 && I !== void 0 ? a.jsx(U, {
        sx: {
          px: 3
        },
        children: a.jsx(Be, {
          sx: {
            pb: g ? 4 : 3
          },
          size: "small",
          min: h,
          max: I,
          marks: [
            {
              value: h,
              label: String(h)
            },
            {
              value: I,
              label: String(I)
            }
          ],
          valueLabelDisplay: "auto",
          value: d,
          onChange: x
        })
      }) : null;
    }, [
      C,
      r,
      d,
      x
    ]), w = i.useMemo(() => !t || !Object.keys(t).length ? null : a.jsx(Xe, {
      children: Object.entries(t).map(([p, g]) => a.jsx(Wt, {
        disablePadding: true,
        children: a.jsx(Rt, {
          onClick: m(p),
          children: a.jsx(_t, {
            primaryTypographyProps: {
              variant: "body2"
            },
            primary: String(g)
          })
        })
      }, p))
    }), [
      t,
      m
    ]), b = i.useMemo(() => e.header || C.oidName || "Change Value", [
      e.header,
      C.oidName
    ]), f = i.useMemo(() => t && Object.keys(t).length > 0, [
      t
    ]);
    return a.jsxs(gt, {
      open: o,
      onClose: S,
      maxWidth: "xs",
      fullWidth: true,
      PaperProps: {
        sx: {
          bgcolor: e.backgroundColor,
          color: e.textColor
        }
      },
      children: [
        a.jsx(kt, {
          sx: {
            m: 0,
            p: 2
          },
          id: "customized-dialog-title",
          children: b
        }),
        a.jsx(Ne, {
          "aria-label": "close",
          onClick: P,
          sx: (p) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: p.palette.grey[500]
          }),
          children: a.jsx(Ye, {})
        }),
        a.jsx(ht, {
          sx: {
            overflow: "unset"
          },
          children: a.jsxs(Ke, {
            divider: f && a.jsx(We, {}),
            spacing: 0,
            component: ee,
            children: [
              u,
              w
            ]
          })
        })
      ]
    });
  };
  function Gt() {
    const t = i.useContext(ie), { widget: e } = t, o = e.data.oidObject, { textStyles: n, fontStyles: l } = Fe(e.style), { data: s, widgetStates: c } = Ve("oid"), { value: r, updateValue: d } = le("oid"), [v, k] = i.useState(false), C = o == null ? void 0 : o.type, y = e.data.onlyStates, x = Je(r, e, s), S = x != null ? String(x) : "", P = () => {
      const f = e.data.value1;
      y && Number(e.data.values_count) === 2 && e.data.statePushButton && f !== void 0 && setTimeout(() => d(f), 0);
    }, m = () => {
      const f = e.data.value2;
      y && Number(e.data.values_count) === 2 && e.data.statePushButton && f !== void 0 && setTimeout(() => d(f), 0);
    }, u = i.useCallback(() => {
      if (!y) {
        k(true);
        return;
      }
      switch (Number(e.data.values_count)) {
        case 1:
          e.data.value1 !== void 0 && d(e.data.value1);
          break;
        case 2:
          e.data.value1 !== void 0 && e.data.value2 !== void 0 && (!e.data.statePushButton && String(r) === String(e.data.value1) ? d(e.data.value2) : d(e.data.value1));
          break;
        default:
          k(true);
          break;
      }
    }, [
      r,
      y,
      e.data.values_count,
      e.data.statePushButton,
      e.data.value1,
      e.data.value2,
      d
    ]), w = a.jsx(Qe, {
      disabled: e.data.onlyDisplay,
      onClick: u,
      onMouseDown: P,
      onMouseUp: m,
      onMouseOut: m,
      onTouchStart: P,
      onTouchEnd: m,
      sx: {
        width: "100%",
        height: "100%",
        color: s.iconColorActive || s.iconColor || s.textColorActive || s.textColor || "primary.main",
        "&:hover": {
          bgcolor: "transparent",
          filter: s.iconHoverActive && `brightness(${s.iconHoverActive})` || s.iconHover && `brightness(${s.iconHover})`
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
          !e.data.noIcon && (s.iconActive || s.icon) && a.jsx(U, {
            sx: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
              width: "100%",
              height: "100%"
            },
            children: a.jsx(it, {
              variant: "square",
              src: s.iconActive || s.icon || void 0,
              imgProps: {
                style: {
                  objectFit: "contain"
                }
              },
              sx: {
                overflow: "hidden",
                width: typeof s.iconSizeOnly == "number" && `calc(100% * ${s.iconSizeOnly} / 100)` || "100%",
                height: typeof s.iconSizeOnly == "number" && `calc(100% * ${s.iconSizeOnly} / 100)` || "100%",
                left: `calc(0px + ${s.iconXOffset})`,
                top: `calc(0px - ${s.iconYOffset})`,
                bgcolor: "transparent",
                ..._e(s.iconActive || s.icon, s.iconColorActive || s.iconColor || "primary.main")
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
                ...l,
                ...n,
                fontSize: s.valueSizeActive || s.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                color: s.textColorActive || s.textColor,
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
    }), b = C === "boolean" || C === "number" || C === "string" || C === "mixed";
    return a.jsxs(a.Fragment, {
      children: [
        v && a.jsx(Ut, {
          data: {
            sampleInterval: false,
            sampleIntervalValue: 200,
            delay: 100
          },
          widgetStates: c,
          open: v,
          closeHandler: () => k(false)
        }),
        a.jsxs(Oe, {
          isValidType: b,
          data: s,
          oidValue: r,
          children: [
            a.jsx(Ue, {
              data: s,
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
              children: w
            })
          ]
        })
      ]
    });
  }
  pe = class extends Ge {
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
              ...ze([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...He(),
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
    onStateUpdated(e, o) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, Ee(this.wrapContent(a.jsx(Gt, {})), o);
    }
  };
});
export {
  __tla,
  pe as default
};
