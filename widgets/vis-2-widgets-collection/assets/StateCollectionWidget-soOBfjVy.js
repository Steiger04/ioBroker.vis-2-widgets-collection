import { c as Dt, j as a, g as F, a as V, u as A, b as L, s as j, d as R, e as N, m as q, f as Rt, P as tt, F as et, h as Mt, i as H, M as Tt, B as Bt, T as z, L as W, k as Lt, l as it, n as $t, r as At, o as K, p as Nt, q as ot, t as st, C as at, v as lt, w as U, x as Wt, I as Ft, D as Vt, y as _t, z as rt, A as Ot, E as Ut, G as Gt, H as nt, J as zt, __tla as __tla_0 } from "./useData-2dnP1q4b.js";
import { c as Ht, __tla as __tla_1 } from "./commonObjectFields-DPT5kyDR.js";
import { u as ct, d as Et, __tla as __tla_2 } from "./useValueState-CcNNBxyO.js";
import { v as l, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { C as Yt, __tla as __tla_4 } from "./Close-DEJXQk2V.js";
import { S as qt, __tla as __tla_5 } from "./Slider-LRDJ7L3R.js";
import { g as Xt, l as J, __tla as __tla_6 } from "./listItemTextClasses-Ci32o1By.js";
import { S as Kt, __tla as __tla_7 } from "./Stack-Buihj4Jh.js";
import { u as Jt, __tla as __tla_8 } from "./useDataNew-BNdZOaQu.js";
import { u as Qt, __tla as __tla_9 } from "./useHtmlValue-Dcwl_hqT.js";
import { B as Zt, __tla as __tla_10 } from "./Button-CiMze6pj.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let ut;
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
  const te = Dt(a.jsx("path", {
    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
  }), "Person");
  function ee(e) {
    return F("MuiAvatar", e);
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
  const oe = (e) => {
    const { classes: t, variant: o, colorDefault: r } = e;
    return N({
      root: [
        "root",
        o,
        r && "colorDefault"
      ],
      img: [
        "img"
      ],
      fallback: [
        "fallback"
      ]
    }, ee, t);
  }, se = j("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        t[o.variant],
        o.colorDefault && t.colorDefault
      ];
    }
  })(q(({ theme: e }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(20),
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
          borderRadius: (e.vars || e).shape.borderRadius
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
          color: (e.vars || e).palette.background.default,
          ...e.vars ? {
            backgroundColor: e.vars.palette.Avatar.defaultBg
          } : {
            backgroundColor: e.palette.grey[400],
            ...e.applyStyles("dark", {
              backgroundColor: e.palette.grey[600]
            })
          }
        }
      }
    ]
  }))), ae = j("img", {
    name: "MuiAvatar",
    slot: "Img",
    overridesResolver: (e, t) => t.img
  })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4
  }), re = j(te, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (e, t) => t.fallback
  })({
    width: "75%",
    height: "75%"
  });
  function ne({ crossOrigin: e, referrerPolicy: t, src: o, srcSet: r }) {
    const [s, c] = l.useState(false);
    return l.useEffect(() => {
      if (!o && !r) return;
      c(false);
      let n = true;
      const i = new Image();
      return i.onload = () => {
        n && c("loaded");
      }, i.onerror = () => {
        n && c("error");
      }, i.crossOrigin = e, i.referrerPolicy = t, i.src = o, r && (i.srcset = r), () => {
        n = false;
      };
    }, [
      e,
      t,
      o,
      r
    ]), s;
  }
  const ie = l.forwardRef(function(t, o) {
    const r = A({
      props: t,
      name: "MuiAvatar"
    }), { alt: s, children: c, className: n, component: i = "div", slots: g = {}, slotProps: v = {}, imgProps: P, sizes: h, src: y, srcSet: C, variant: x = "circular", ...w } = r;
    let f = null;
    const p = {
      ...r,
      component: i,
      variant: x
    }, S = ne({
      ...P,
      ...typeof v.img == "function" ? v.img(p) : v.img,
      src: y,
      srcSet: C
    }), u = y || C, I = u && S !== "error";
    p.colorDefault = !I, delete p.ownerState;
    const d = oe(p), [m, b] = L("img", {
      className: d.img,
      elementType: ae,
      externalForwardedProps: {
        slots: g,
        slotProps: {
          img: {
            ...P,
            ...v.img
          }
        }
      },
      additionalProps: {
        alt: s,
        src: y,
        srcSet: C,
        sizes: h
      },
      ownerState: p
    });
    return I ? f = a.jsx(m, {
      ...b
    }) : c || c === 0 ? f = c : u && s ? f = s[0] : f = a.jsx(re, {
      ownerState: p,
      className: d.fallback
    }), a.jsx(se, {
      as: i,
      className: R(d.root, n),
      ref: o,
      ...w,
      ownerState: p,
      children: f
    });
  });
  function le(e) {
    return F("MuiDialog", e);
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
  ]), dt = l.createContext({}), ce = j(Bt, {
    name: "MuiDialog",
    slot: "Backdrop",
    overrides: (e, t) => t.backdrop
  })({
    zIndex: -1
  }), de = (e) => {
    const { classes: t, scroll: o, maxWidth: r, fullWidth: s, fullScreen: c } = e, n = {
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
        `paperWidth${H(String(r))}`,
        s && "paperFullWidth",
        c && "paperFullScreen"
      ]
    };
    return N(n, le, t);
  }, pe = j(Tt, {
    name: "MuiDialog",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    "@media print": {
      position: "absolute !important"
    }
  }), ue = j("div", {
    name: "MuiDialog",
    slot: "Container",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.container,
        t[`scroll${H(o.scroll)}`]
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
  }), me = j(tt, {
    name: "MuiDialog",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.paper,
        t[`scrollPaper${H(o.scroll)}`],
        t[`paperWidth${H(String(o.maxWidth))}`],
        o.fullWidth && t.paperFullWidth,
        o.fullScreen && t.paperFullScreen
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
        props: ({ ownerState: t }) => !t.maxWidth,
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
          [`&.${Z.paperScrollBody}`]: {
            [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 64)]: {
              maxWidth: "calc(100% - 64px)"
            }
          }
        }
      },
      ...Object.keys(e.breakpoints.values).filter((t) => t !== "xs").map((t) => ({
        props: {
          maxWidth: t
        },
        style: {
          maxWidth: `${e.breakpoints.values[t]}${e.breakpoints.unit}`,
          [`&.${Z.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[t] + 64)]: {
              maxWidth: "calc(100% - 64px)"
            }
          }
        }
      })),
      {
        props: ({ ownerState: t }) => t.fullWidth,
        style: {
          width: "calc(100% - 64px)"
        }
      },
      {
        props: ({ ownerState: t }) => t.fullScreen,
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
  }))), ge = l.forwardRef(function(t, o) {
    const r = A({
      props: t,
      name: "MuiDialog"
    }), s = Rt(), c = {
      enter: s.transitions.duration.enteringScreen,
      exit: s.transitions.duration.leavingScreen
    }, { "aria-describedby": n, "aria-labelledby": i, "aria-modal": g = true, BackdropComponent: v, BackdropProps: P, children: h, className: y, disableEscapeKeyDown: C = false, fullScreen: x = false, fullWidth: w = false, maxWidth: f = "sm", onBackdropClick: p, onClick: S, onClose: u, open: I, PaperComponent: d = tt, PaperProps: m = {}, scroll: b = "paper", slots: k = {}, slotProps: T = {}, TransitionComponent: $ = et, transitionDuration: E = c, TransitionProps: X, ..._ } = r, D = {
      ...r,
      disableEscapeKeyDown: C,
      fullScreen: x,
      fullWidth: w,
      maxWidth: f,
      scroll: b
    }, B = de(D), M = l.useRef(), mt = (O) => {
      M.current = O.target === O.currentTarget;
    }, gt = (O) => {
      S && S(O), M.current && (M.current = null, p && p(O), u && u(O, "backdropClick"));
    }, Q = Mt(i), vt = l.useMemo(() => ({
      titleId: Q
    }), [
      Q
    ]), ft = {
      transition: $,
      ...k
    }, yt = {
      transition: X,
      paper: m,
      backdrop: P,
      ...T
    }, Y = {
      slots: ft,
      slotProps: yt
    }, [xt, bt] = L("root", {
      elementType: pe,
      shouldForwardComponentProp: true,
      externalForwardedProps: Y,
      ownerState: D,
      className: R(B.root, y),
      ref: o
    }), [ht, Ct] = L("backdrop", {
      elementType: ce,
      shouldForwardComponentProp: true,
      externalForwardedProps: Y,
      ownerState: D
    }), [St, kt] = L("paper", {
      elementType: me,
      shouldForwardComponentProp: true,
      externalForwardedProps: Y,
      ownerState: D,
      className: R(B.paper, m.className)
    }), [wt, It] = L("container", {
      elementType: ue,
      externalForwardedProps: Y,
      ownerState: D,
      className: R(B.container)
    }), [Pt, jt] = L("transition", {
      elementType: et,
      externalForwardedProps: Y,
      ownerState: D,
      additionalProps: {
        appear: true,
        in: I,
        timeout: E,
        role: "presentation"
      }
    });
    return a.jsx(xt, {
      closeAfterTransition: true,
      slots: {
        backdrop: ht
      },
      slotProps: {
        backdrop: {
          transitionDuration: E,
          as: v,
          ...Ct
        }
      },
      disableEscapeKeyDown: C,
      onClose: u,
      open: I,
      onClick: gt,
      ...bt,
      ..._,
      children: a.jsx(Pt, {
        ...jt,
        children: a.jsx(wt, {
          onMouseDown: mt,
          ...It,
          children: a.jsx(St, {
            as: d,
            elevation: 24,
            role: "dialog",
            "aria-describedby": n,
            "aria-labelledby": Q,
            "aria-modal": g,
            ...kt,
            children: a.jsx(dt.Provider, {
              value: vt,
              children: h
            })
          })
        })
      })
    });
  });
  function ve(e) {
    return F("MuiDialogContent", e);
  }
  V("MuiDialogContent", [
    "root",
    "dividers"
  ]);
  function fe(e) {
    return F("MuiDialogTitle", e);
  }
  const ye = V("MuiDialogTitle", [
    "root"
  ]), xe = (e) => {
    const { classes: t, dividers: o } = e;
    return N({
      root: [
        "root",
        o && "dividers"
      ]
    }, ve, t);
  }, be = j("div", {
    name: "MuiDialogContent",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        o.dividers && t.dividers
      ];
    }
  })(q(({ theme: e }) => ({
    flex: "1 1 auto",
    WebkitOverflowScrolling: "touch",
    overflowY: "auto",
    padding: "20px 24px",
    variants: [
      {
        props: ({ ownerState: t }) => t.dividers,
        style: {
          padding: "16px 24px",
          borderTop: `1px solid ${(e.vars || e).palette.divider}`,
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`
        }
      },
      {
        props: ({ ownerState: t }) => !t.dividers,
        style: {
          [`.${ye.root} + &`]: {
            paddingTop: 0
          }
        }
      }
    ]
  }))), he = l.forwardRef(function(t, o) {
    const r = A({
      props: t,
      name: "MuiDialogContent"
    }), { className: s, dividers: c = false, ...n } = r, i = {
      ...r,
      dividers: c
    }, g = xe(i);
    return a.jsx(be, {
      className: R(g.root, s),
      ownerState: i,
      ref: o,
      ...n
    });
  }), Ce = (e) => {
    const { classes: t } = e;
    return N({
      root: [
        "root"
      ]
    }, fe, t);
  }, Se = j(z, {
    name: "MuiDialogTitle",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    padding: "16px 24px",
    flex: "0 0 auto"
  }), ke = l.forwardRef(function(t, o) {
    const r = A({
      props: t,
      name: "MuiDialogTitle"
    }), { className: s, id: c, ...n } = r, i = r, g = Ce(i), { titleId: v = c } = l.useContext(dt);
    return a.jsx(Se, {
      component: "h2",
      className: R(g.root, s),
      ownerState: i,
      ref: o,
      variant: "h6",
      id: c ?? v,
      ...n
    });
  });
  function we(e) {
    return F("MuiListItem", e);
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
  function Ie(e) {
    return F("MuiListItemButton", e);
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
  ]), Pe = (e, t) => {
    const { ownerState: o } = e;
    return [
      t.root,
      o.dense && t.dense,
      o.alignItems === "flex-start" && t.alignItemsFlexStart,
      o.divider && t.divider,
      !o.disableGutters && t.gutters
    ];
  }, je = (e) => {
    const { alignItems: t, classes: o, dense: r, disabled: s, disableGutters: c, divider: n, selected: i } = e, v = N({
      root: [
        "root",
        r && "dense",
        !c && "gutters",
        n && "divider",
        s && "disabled",
        t === "flex-start" && "alignItemsFlexStart",
        i && "selected"
      ]
    }, Ie, o);
    return {
      ...o,
      ...v
    };
  }, De = j($t, {
    shouldForwardProp: (e) => At(e) || e === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: Pe
  })(q(({ theme: e }) => ({
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
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shortest
    }),
    "&:hover": {
      textDecoration: "none",
      backgroundColor: (e.vars || e).palette.action.hover,
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${G.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : K(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${G.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : K(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    },
    [`&.${G.selected}:hover`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : K(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : K(e.palette.primary.main, e.palette.action.selectedOpacity)
      }
    },
    [`&.${G.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${G.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.divider,
        style: {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
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
        props: ({ ownerState: t }) => !t.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: t }) => t.dense,
        style: {
          paddingTop: 4,
          paddingBottom: 4
        }
      }
    ]
  }))), Re = l.forwardRef(function(t, o) {
    const r = A({
      props: t,
      name: "MuiListItemButton"
    }), { alignItems: s = "center", autoFocus: c = false, component: n = "div", children: i, dense: g = false, disableGutters: v = false, divider: P = false, focusVisibleClassName: h, selected: y = false, className: C, ...x } = r, w = l.useContext(W), f = l.useMemo(() => ({
      dense: g || w.dense || false,
      alignItems: s,
      disableGutters: v
    }), [
      s,
      w.dense,
      g,
      v
    ]), p = l.useRef(null);
    Lt(() => {
      c && p.current && p.current.focus();
    }, [
      c
    ]);
    const S = {
      ...r,
      alignItems: s,
      dense: f.dense,
      disableGutters: v,
      divider: P,
      selected: y
    }, u = je(S), I = it(p, o);
    return a.jsx(W.Provider, {
      value: f,
      children: a.jsx(De, {
        ref: I,
        href: x.href || x.to,
        component: (x.href || x.to) && n === "div" ? "button" : n,
        focusVisibleClassName: R(u.focusVisible, h),
        ownerState: S,
        className: R(u.root, C),
        ...x,
        classes: u,
        children: i
      })
    });
  });
  function Me(e) {
    return F("MuiListItemSecondaryAction", e);
  }
  V("MuiListItemSecondaryAction", [
    "root",
    "disableGutters"
  ]);
  const Te = (e) => {
    const { disableGutters: t, classes: o } = e;
    return N({
      root: [
        "root",
        t && "disableGutters"
      ]
    }, Me, o);
  }, Be = j("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        o.disableGutters && t.disableGutters
      ];
    }
  })({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)",
    variants: [
      {
        props: ({ ownerState: e }) => e.disableGutters,
        style: {
          right: 0
        }
      }
    ]
  }), pt = l.forwardRef(function(t, o) {
    const r = A({
      props: t,
      name: "MuiListItemSecondaryAction"
    }), { className: s, ...c } = r, n = l.useContext(W), i = {
      ...r,
      disableGutters: n.disableGutters
    }, g = Te(i);
    return a.jsx(Be, {
      className: R(g.root, s),
      ownerState: i,
      ref: o,
      ...c
    });
  });
  pt.muiName = "ListItemSecondaryAction";
  const Le = (e, t) => {
    const { ownerState: o } = e;
    return [
      t.root,
      o.dense && t.dense,
      o.alignItems === "flex-start" && t.alignItemsFlexStart,
      o.divider && t.divider,
      !o.disableGutters && t.gutters,
      !o.disablePadding && t.padding,
      o.hasSecondaryAction && t.secondaryAction
    ];
  }, $e = (e) => {
    const { alignItems: t, classes: o, dense: r, disableGutters: s, disablePadding: c, divider: n, hasSecondaryAction: i } = e;
    return N({
      root: [
        "root",
        r && "dense",
        !s && "gutters",
        !c && "padding",
        n && "divider",
        t === "flex-start" && "alignItemsFlexStart",
        i && "secondaryAction"
      ],
      container: [
        "container"
      ]
    }, we, o);
  }, Ae = j("div", {
    name: "MuiListItem",
    slot: "Root",
    overridesResolver: Le
  })(q(({ theme: e }) => ({
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
        props: ({ ownerState: t }) => !t.disablePadding,
        style: {
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      {
        props: ({ ownerState: t }) => !t.disablePadding && t.dense,
        style: {
          paddingTop: 4,
          paddingBottom: 4
        }
      },
      {
        props: ({ ownerState: t }) => !t.disablePadding && !t.disableGutters,
        style: {
          paddingLeft: 16,
          paddingRight: 16
        }
      },
      {
        props: ({ ownerState: t }) => !t.disablePadding && !!t.secondaryAction,
        style: {
          paddingRight: 48
        }
      },
      {
        props: ({ ownerState: t }) => !!t.secondaryAction,
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
        props: ({ ownerState: t }) => t.divider,
        style: {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: "padding-box"
        }
      },
      {
        props: ({ ownerState: t }) => t.button,
        style: {
          transition: e.transitions.create("background-color", {
            duration: e.transitions.duration.shortest
          }),
          "&:hover": {
            textDecoration: "none",
            backgroundColor: (e.vars || e).palette.action.hover,
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }
      },
      {
        props: ({ ownerState: t }) => t.hasSecondaryAction,
        style: {
          paddingRight: 48
        }
      }
    ]
  }))), Ne = j("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container
  })({
    position: "relative"
  }), We = l.forwardRef(function(t, o) {
    const r = A({
      props: t,
      name: "MuiListItem"
    }), { alignItems: s = "center", children: c, className: n, component: i, components: g = {}, componentsProps: v = {}, ContainerComponent: P = "li", ContainerProps: { className: h, ...y } = {}, dense: C = false, disableGutters: x = false, disablePadding: w = false, divider: f = false, secondaryAction: p, slotProps: S = {}, slots: u = {}, ...I } = r, d = l.useContext(W), m = l.useMemo(() => ({
      dense: C || d.dense || false,
      alignItems: s,
      disableGutters: x
    }), [
      s,
      d.dense,
      C,
      x
    ]), b = l.useRef(null), k = l.Children.toArray(c), T = k.length && Nt(k[k.length - 1], [
      "ListItemSecondaryAction"
    ]), $ = {
      ...r,
      alignItems: s,
      dense: m.dense,
      disableGutters: x,
      disablePadding: w,
      divider: f,
      hasSecondaryAction: T
    }, E = $e($), X = it(b, o), _ = u.root || g.Root || Ae, D = S.root || v.root || {}, B = {
      className: R(E.root, D.className, n),
      ...I
    };
    let M = i || "li";
    return T ? (M = !B.component && !i ? "div" : M, P === "li" && (M === "li" ? M = "div" : B.component === "li" && (B.component = "div")), a.jsx(W.Provider, {
      value: m,
      children: a.jsxs(Ne, {
        as: P,
        className: R(E.container, h),
        ref: X,
        ownerState: $,
        ...y,
        children: [
          a.jsx(_, {
            ...D,
            ...!ot(_) && {
              as: M,
              ownerState: {
                ...$,
                ...D.ownerState
              }
            },
            ...B,
            children: k
          }),
          k.pop()
        ]
      })
    })) : a.jsx(W.Provider, {
      value: m,
      children: a.jsxs(_, {
        ...D,
        as: M,
        ref: X,
        ...!ot(_) && {
          ownerState: {
            ...$,
            ...D.ownerState
          }
        },
        ...B,
        children: [
          k,
          p && a.jsx(pt, {
            children: p
          })
        ]
      })
    });
  }), Fe = (e) => {
    const { classes: t, inset: o, primary: r, secondary: s, dense: c } = e;
    return N({
      root: [
        "root",
        o && "inset",
        c && "dense",
        r && s && "multiline"
      ],
      primary: [
        "primary"
      ],
      secondary: [
        "secondary"
      ]
    }, Xt, t);
  }, Ve = j("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        {
          [`& .${J.primary}`]: t.primary
        },
        {
          [`& .${J.secondary}`]: t.secondary
        },
        t.root,
        o.inset && t.inset,
        o.primary && o.secondary && t.multiline,
        o.dense && t.dense
      ];
    }
  })({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
    [`.${st.root}:where(& .${J.primary})`]: {
      display: "block"
    },
    [`.${st.root}:where(& .${J.secondary})`]: {
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
  }), _e = l.forwardRef(function(t, o) {
    const r = A({
      props: t,
      name: "MuiListItemText"
    }), { children: s, className: c, disableTypography: n = false, inset: i = false, primary: g, primaryTypographyProps: v, secondary: P, secondaryTypographyProps: h, slots: y = {}, slotProps: C = {}, ...x } = r, { dense: w } = l.useContext(W);
    let f = g ?? s, p = P;
    const S = {
      ...r,
      disableTypography: n,
      inset: i,
      primary: !!f,
      secondary: !!p,
      dense: w
    }, u = Fe(S), I = {
      slots: y,
      slotProps: {
        primary: v,
        secondary: h,
        ...C
      }
    }, [d, m] = L("root", {
      className: R(u.root, c),
      elementType: Ve,
      externalForwardedProps: {
        ...I,
        ...x
      },
      ownerState: S,
      ref: o
    }), [b, k] = L("primary", {
      className: u.primary,
      elementType: z,
      externalForwardedProps: I,
      ownerState: S
    }), [T, $] = L("secondary", {
      className: u.secondary,
      elementType: z,
      externalForwardedProps: I,
      ownerState: S
    });
    return f != null && f.type !== z && !n && (f = a.jsx(b, {
      variant: w ? "body2" : "body1",
      component: (k == null ? void 0 : k.variant) ? void 0 : "span",
      ...k,
      children: f
    })), p != null && p.type !== z && !n && (p = a.jsx(T, {
      variant: "body2",
      color: "textSecondary",
      ...$,
      children: p
    })), a.jsxs(d, {
      ...m,
      children: [
        f,
        p
      ]
    });
  }), Oe = () => [
    {
      type: "custom",
      component: () => a.jsx(at, {})
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
      hidden: (e, t) => !e.onlyStates || Number(e.values_count) !== 2,
      tooltip: "state_push_button_tooltip"
    },
    {
      type: "custom",
      component: () => a.jsx(at, {}),
      hidden: "!data.values_count"
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (e, t) => !e.write,
      default: false,
      hidden: (e, t) => !e.write
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
  ], Ue = ({ widgetStates: e, data: t, open: o, closeHandler: r }) => {
    const { widget: s, getPropertyValue: c } = l.useContext(lt), n = s.data.oidObject, i = s.data.onlyStates, [g, v] = l.useState(() => {
      const d = c("oid");
      return typeof d == "number" ? d : 0;
    }), { updateValue: P } = ct("oid"), h = l.useMemo(() => {
      const d = n == null ? void 0 : n.commonStates, m = n == null ? void 0 : n.type, b = n == null ? void 0 : n.name, k = n == null ? void 0 : n.minValue, T = n == null ? void 0 : n.maxValue;
      return {
        commonStates: d,
        oidType: m,
        oidName: b,
        minValue: k,
        maxValue: T
      };
    }, [
      n
    ]), y = l.useCallback((d) => {
      P(d);
    }, [
      P
    ]), C = l.useCallback((d, m) => {
      const b = Array.isArray(m) ? m[0] : m;
      v(b), y(b);
    }, [
      y
    ]), x = l.useCallback((d, m) => {
      (m === "backdropClick" || m === "escapeKeyDown") && r();
    }, [
      r
    ]), w = l.useCallback(() => {
      r();
    }, [
      r
    ]), f = l.useCallback((d) => (m) => {
      m.preventDefault();
      const b = Number(d);
      isNaN(b) || v(b), y(d);
    }, [
      y
    ]), p = l.useMemo(() => {
      const { oidType: d, commonStates: m, minValue: b, maxValue: k } = h;
      return d === "number" && !i && b !== void 0 && k !== void 0 ? a.jsx(U, {
        sx: {
          px: 3
        },
        children: a.jsx(qt, {
          sx: {
            pb: m ? 4 : 3
          },
          size: "small",
          min: b,
          max: k,
          marks: [
            {
              value: b,
              label: String(b)
            },
            {
              value: k,
              label: String(k)
            }
          ],
          valueLabelDisplay: "auto",
          value: g,
          onChange: C
        })
      }) : null;
    }, [
      h,
      i,
      g,
      C
    ]), S = l.useMemo(() => !e || !Object.keys(e).length ? null : a.jsx(Wt, {
      children: Object.entries(e).map(([d, m]) => a.jsx(We, {
        disablePadding: true,
        children: a.jsx(Re, {
          onClick: f(d),
          children: a.jsx(_e, {
            primaryTypographyProps: {
              variant: "body2"
            },
            primary: String(m)
          })
        })
      }, d))
    }), [
      e,
      f
    ]), u = l.useMemo(() => t.header || h.oidName || "Change Value", [
      t.header,
      h.oidName
    ]), I = l.useMemo(() => e && Object.keys(e).length > 0, [
      e
    ]);
    return a.jsxs(ge, {
      open: o,
      onClose: x,
      maxWidth: "xs",
      fullWidth: true,
      PaperProps: {
        sx: {
          bgcolor: t.backgroundColor,
          color: t.textColor
        }
      },
      children: [
        a.jsx(ke, {
          sx: {
            m: 0,
            p: 2
          },
          id: "customized-dialog-title",
          children: u
        }),
        a.jsx(Ft, {
          "aria-label": "close",
          onClick: w,
          sx: (d) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: d.palette.grey[500]
          }),
          children: a.jsx(Yt, {})
        }),
        a.jsx(he, {
          sx: {
            overflow: "unset"
          },
          children: a.jsxs(Kt, {
            divider: I && a.jsx(Vt, {}),
            spacing: 0,
            component: tt,
            children: [
              p,
              S
            ]
          })
        })
      ]
    });
  };
  function Ge() {
    const e = l.useContext(lt), { widget: t, theme: o } = e, r = t.data.oidObject, { data: s, widgetStates: c } = Jt("oid"), { value: n, updateValue: i } = ct("oid"), [g, v] = l.useState(false), P = r == null ? void 0 : r.type, h = t.data.onlyStates, y = Qt(n, t, s), C = y != null ? String(y) : "", x = () => {
      const u = t.data.value1;
      h && Number(t.data.values_count) === 2 && t.data.statePushButton && u !== void 0 && setTimeout(() => i(u), 0);
    }, w = () => {
      const u = t.data.value2;
      h && Number(t.data.values_count) === 2 && t.data.statePushButton && u !== void 0 && setTimeout(() => i(u), 0);
    }, f = l.useCallback(() => {
      if (!h) {
        v(true);
        return;
      }
      switch (Number(t.data.values_count)) {
        case 1:
          t.data.value1 !== void 0 && i(t.data.value1);
          break;
        case 2:
          t.data.value1 !== void 0 && t.data.value2 !== void 0 && (!t.data.statePushButton && String(n) === String(t.data.value1) ? i(t.data.value2) : i(t.data.value1));
          break;
        default:
          v(true);
          break;
      }
    }, [
      n,
      h,
      t.data.values_count,
      t.data.statePushButton,
      t.data.value1,
      t.data.value2,
      i
    ]), p = a.jsx(Zt, {
      disabled: t.data.onlyDisplay,
      onClick: f,
      onMouseDown: x,
      onMouseUp: w,
      onMouseOut: w,
      onTouchStart: x,
      onTouchEnd: w,
      sx: {
        width: "100%",
        height: "100%",
        color: s.iconColor || s.textColor || "primary.main",
        "&:hover": {
          bgcolor: "transparent"
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
          !t.data.noIcon && s.icon && (() => {
            const u = s.icon, I = s.iconColor || o.palette.primary.main, d = s.forceColorMask, m = _t(u, I, d);
            return a.jsx(U, {
              sx: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
                width: "100%",
                height: "100%"
              },
              children: a.jsx(ie, {
                variant: "square",
                src: u || void 0,
                slotProps: {
                  img: {
                    style: {
                      objectFit: "contain",
                      ...m
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
          !t.data.noValue && a.jsx(U, {
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
                fontSize: s.valueSize,
                textAlign: "center",
                bgcolor: "transparent",
                background: rt(s.textColor),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: rt(s.textColor) ? "transparent" : s.textColor,
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
                __html: `<div style="text-align: left; display: inline-block;">${C || ""}</div>`
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
    ].includes(P ?? "");
    return a.jsxs(a.Fragment, {
      children: [
        g && a.jsx(Ue, {
          data: {
            sampleInterval: false,
            sampleIntervalValue: 200,
            delay: 100
          },
          widgetStates: c,
          open: g,
          closeHandler: () => v(false)
        }),
        a.jsxs(Ot, {
          isValidType: S,
          data: s,
          oidValue: n,
          children: [
            a.jsx(Ut, {
              data: s,
              widget: t
            }),
            a.jsx(U, {
              sx: {
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              },
              children: p
            })
          ]
        })
      ]
    });
  }
  ut = class extends Gt {
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
              ...nt()
            ]
          },
          {
            name: "button",
            label: "group_button",
            fields: [
              ...Ht([
                "string",
                "number",
                "boolean",
                "mixed"
              ]),
              ...Et(),
              ...Oe()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...nt({
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
      return ut.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, o) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const o = {
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, zt(this.wrapContent(a.jsx(Ge, {})), o);
    }
  };
});
export {
  __tla,
  ut as default
};
