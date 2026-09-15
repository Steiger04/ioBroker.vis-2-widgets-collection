import { v as p, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { u as y, aO as E, j as c, s as v, h as f, i as x, p as R, g as h, f as w, J as b, l as F, ap as G, a as k, d as M, n as U, c as W, __tla as __tla_1 } from "./tinycolor-CLG1zgRY.js";
import { g as J, __tla as __tla_2 } from "./MenuItem-B0Mpzx1G.js";
let Nt, St, Ut, $t, At, Lt, zt, Pt, Mt, Ht, kt, jt, It;
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
  let q, K, _;
  q = (t) => {
    const { alignItems: o, classes: e } = t;
    return x({
      root: [
        "root",
        o === "flex-start" && "alignItemsFlexStart"
      ]
    }, J, e);
  };
  K = v("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (t, o) => {
      const { ownerState: e } = t;
      return [
        o.root,
        e.alignItems === "flex-start" && o.alignItemsFlexStart
      ];
    }
  })(R(({ theme: t }) => ({
    minWidth: 56,
    color: (t.vars || t).palette.action.active,
    flexShrink: 0,
    display: "inline-flex",
    variants: [
      {
        props: {
          alignItems: "flex-start"
        },
        style: {
          marginTop: 8
        }
      }
    ]
  })));
  St = p.forwardRef(function(o, e) {
    const s = y({
      props: o,
      name: "MuiListItemIcon"
    }), { className: r, ...a } = s, l = p.useContext(E), n = {
      ...s,
      alignItems: l.alignItems
    }, i = q(n);
    return c.jsx(K, {
      className: f(i.root, r),
      ownerState: n,
      ref: e,
      ...a
    });
  });
  _ = p.createContext();
  function Q(t) {
    return h("MuiTable", t);
  }
  w("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  let X, Y, P, j;
  X = (t) => {
    const { classes: o, stickyHeader: e } = t;
    return x({
      root: [
        "root",
        e && "stickyHeader"
      ]
    }, Q, o);
  };
  Y = v("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (t, o) => {
      const { ownerState: e } = t;
      return [
        o.root,
        e.stickyHeader && o.stickyHeader
      ];
    }
  })(R(({ theme: t }) => ({
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    "& caption": {
      ...t.typography.body2,
      padding: t.spacing(2),
      color: (t.vars || t).palette.text.secondary,
      textAlign: "left",
      captionSide: "bottom"
    },
    variants: [
      {
        props: ({ ownerState: o }) => o.stickyHeader,
        style: {
          borderCollapse: "separate"
        }
      }
    ]
  })));
  P = "table";
  Mt = p.forwardRef(function(o, e) {
    const s = y({
      props: o,
      name: "MuiTable"
    }), { className: r, component: a = P, padding: l = "normal", size: n = "medium", stickyHeader: i = false, ...d } = s, u = {
      ...s,
      component: a,
      padding: l,
      size: n,
      stickyHeader: i
    }, m = X(u), I = p.useMemo(() => ({
      padding: l,
      size: n,
      stickyHeader: i
    }), [
      l,
      n,
      i
    ]);
    return c.jsx(_.Provider, {
      value: I,
      children: c.jsx(Y, {
        as: a,
        role: a === P ? null : "table",
        ref: e,
        className: f(m.root, r),
        ownerState: u,
        ...d
      })
    });
  });
  j = p.createContext();
  function Z(t) {
    return h("MuiTableBody", t);
  }
  w("MuiTableBody", [
    "root"
  ]);
  let tt, ot, et, A;
  tt = (t) => {
    const { classes: o } = t;
    return x({
      root: [
        "root"
      ]
    }, Z, o);
  };
  ot = v("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (t, o) => o.root
  })({
    display: "table-row-group"
  });
  et = {
    variant: "body"
  };
  A = "tbody";
  It = p.forwardRef(function(o, e) {
    const s = y({
      props: o,
      name: "MuiTableBody"
    }), { className: r, component: a = A, ...l } = s, n = {
      ...s,
      component: a
    }, i = tt(n);
    return c.jsx(j.Provider, {
      value: et,
      children: c.jsx(ot, {
        className: f(i.root, r),
        as: a,
        ref: e,
        role: a === A ? null : "rowgroup",
        ownerState: n,
        ...l
      })
    });
  });
  function st(t) {
    return h("MuiTableCell", t);
  }
  let at, rt, nt;
  at = w("MuiTableCell", [
    "root",
    "head",
    "body",
    "footer",
    "sizeSmall",
    "sizeMedium",
    "paddingCheckbox",
    "paddingNone",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "stickyHeader"
  ]);
  rt = (t) => {
    const { classes: o, variant: e, align: s, padding: r, size: a, stickyHeader: l } = t, n = {
      root: [
        "root",
        e,
        l && "stickyHeader",
        s !== "inherit" && `align${b(s)}`,
        r !== "normal" && `padding${b(r)}`,
        `size${b(a)}`
      ]
    };
    return x(n, st, o);
  };
  nt = v("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (t, o) => {
      const { ownerState: e } = t;
      return [
        o.root,
        o[e.variant],
        o[`size${b(e.size)}`],
        e.padding !== "normal" && o[`padding${b(e.padding)}`],
        e.align !== "inherit" && o[`align${b(e.align)}`],
        e.stickyHeader && o.stickyHeader
      ];
    }
  })(R(({ theme: t }) => ({
    ...t.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: t.vars ? `1px solid ${t.vars.palette.TableCell.border}` : `1px solid
    ${t.palette.mode === "light" ? F(k(t.palette.divider, 1), 0.88) : G(k(t.palette.divider, 1), 0.68)}`,
    textAlign: "left",
    padding: 16,
    variants: [
      {
        props: {
          variant: "head"
        },
        style: {
          color: (t.vars || t).palette.text.primary,
          lineHeight: t.typography.pxToRem(24),
          fontWeight: t.typography.fontWeightMedium
        }
      },
      {
        props: {
          variant: "body"
        },
        style: {
          color: (t.vars || t).palette.text.primary
        }
      },
      {
        props: {
          variant: "footer"
        },
        style: {
          color: (t.vars || t).palette.text.secondary,
          lineHeight: t.typography.pxToRem(21),
          fontSize: t.typography.pxToRem(12)
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          padding: "6px 16px",
          [`&.${at.paddingCheckbox}`]: {
            width: 24,
            padding: "0 12px 0 16px",
            "& > *": {
              padding: 0
            }
          }
        }
      },
      {
        props: {
          padding: "checkbox"
        },
        style: {
          width: 48,
          padding: "0 0 0 4px"
        }
      },
      {
        props: {
          padding: "none"
        },
        style: {
          padding: 0
        }
      },
      {
        props: {
          align: "left"
        },
        style: {
          textAlign: "left"
        }
      },
      {
        props: {
          align: "center"
        },
        style: {
          textAlign: "center"
        }
      },
      {
        props: {
          align: "right"
        },
        style: {
          textAlign: "right",
          flexDirection: "row-reverse"
        }
      },
      {
        props: {
          align: "justify"
        },
        style: {
          textAlign: "justify"
        }
      },
      {
        props: ({ ownerState: o }) => o.stickyHeader,
        style: {
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: (t.vars || t).palette.background.default
        }
      }
    ]
  })));
  $t = p.forwardRef(function(o, e) {
    const s = y({
      props: o,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: a, component: l, padding: n, scope: i, size: d, sortDirection: u, variant: m, ...I } = s, g = p.useContext(_), T = p.useContext(j), $ = T && T.variant === "head";
    let C;
    l ? C = l : C = $ ? "th" : "td";
    let S = i;
    C === "td" ? S = void 0 : !S && $ && (S = "col");
    const H = m || T && T.variant, L = {
      ...s,
      align: r,
      component: C,
      padding: n || (g && g.padding ? g.padding : "normal"),
      size: d || (g && g.size ? g.size : "medium"),
      sortDirection: u,
      stickyHeader: H === "head" && g && g.stickyHeader,
      variant: H
    }, O = rt(L);
    let N = null;
    return u && (N = u === "asc" ? "ascending" : "descending"), c.jsx(nt, {
      as: C,
      ref: e,
      className: f(O.root, a),
      "aria-sort": N,
      scope: S,
      ownerState: L,
      ...I
    });
  });
  function lt(t) {
    return h("MuiTableHead", t);
  }
  w("MuiTableHead", [
    "root"
  ]);
  let it, ct, pt, D;
  it = (t) => {
    const { classes: o } = t;
    return x({
      root: [
        "root"
      ]
    }, lt, o);
  };
  ct = v("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (t, o) => o.root
  })({
    display: "table-header-group"
  });
  pt = {
    variant: "head"
  };
  D = "thead";
  Ht = p.forwardRef(function(o, e) {
    const s = y({
      props: o,
      name: "MuiTableHead"
    }), { className: r, component: a = D, ...l } = s, n = {
      ...s,
      component: a
    }, i = it(n);
    return c.jsx(j.Provider, {
      value: pt,
      children: c.jsx(ct, {
        as: a,
        className: f(i.root, r),
        ref: e,
        role: a === D ? null : "rowgroup",
        ownerState: n,
        ...l
      })
    });
  });
  function dt(t) {
    return h("MuiToolbar", t);
  }
  w("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  let ut, gt;
  ut = (t) => {
    const { classes: o, disableGutters: e, variant: s } = t;
    return x({
      root: [
        "root",
        !e && "gutters",
        s
      ]
    }, dt, o);
  };
  gt = v("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (t, o) => {
      const { ownerState: e } = t;
      return [
        o.root,
        !e.disableGutters && o.gutters,
        o[e.variant]
      ];
    }
  })(R(({ theme: t }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    variants: [
      {
        props: ({ ownerState: o }) => !o.disableGutters,
        style: {
          paddingLeft: t.spacing(2),
          paddingRight: t.spacing(2),
          [t.breakpoints.up("sm")]: {
            paddingLeft: t.spacing(3),
            paddingRight: t.spacing(3)
          }
        }
      },
      {
        props: {
          variant: "dense"
        },
        style: {
          minHeight: 48
        }
      },
      {
        props: {
          variant: "regular"
        },
        style: t.mixins.toolbar
      }
    ]
  })));
  Lt = p.forwardRef(function(o, e) {
    const s = y({
      props: o,
      name: "MuiToolbar"
    }), { className: r, component: a = "div", disableGutters: l = false, variant: n = "regular", ...i } = s, d = {
      ...s,
      component: a,
      disableGutters: l,
      variant: n
    }, u = ut(d);
    return c.jsx(gt, {
      as: a,
      className: f(u.root, r),
      ref: e,
      ownerState: d,
      ...i
    });
  });
  function bt(t) {
    return h("MuiTableRow", t);
  }
  let B, vt, yt, V, ft;
  B = w("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]);
  vt = (t) => {
    const { classes: o, selected: e, hover: s, head: r, footer: a } = t;
    return x({
      root: [
        "root",
        e && "selected",
        s && "hover",
        r && "head",
        a && "footer"
      ]
    }, bt, o);
  };
  yt = v("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (t, o) => {
      const { ownerState: e } = t;
      return [
        o.root,
        e.head && o.head,
        e.footer && o.footer
      ];
    }
  })(R(({ theme: t }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${B.hover}:hover`]: {
      backgroundColor: (t.vars || t).palette.action.hover
    },
    [`&.${B.selected}`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : k(t.palette.primary.main, t.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : k(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity)
      }
    }
  })));
  V = "tr";
  kt = p.forwardRef(function(o, e) {
    const s = y({
      props: o,
      name: "MuiTableRow"
    }), { className: r, component: a = V, hover: l = false, selected: n = false, ...i } = s, d = p.useContext(j), u = {
      ...s,
      component: a,
      hover: l,
      selected: n,
      head: d && d.variant === "head",
      footer: d && d.variant === "footer"
    }, m = vt(u);
    return c.jsx(yt, {
      as: a,
      ref: e,
      className: f(m.root, r),
      role: a === V ? null : "row",
      ownerState: u,
      ...i
    });
  });
  ft = M(c.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function xt(t) {
    return h("MuiTableSortLabel", t);
  }
  let z, mt, Tt, Ct;
  z = w("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]);
  mt = (t) => {
    const { classes: o, direction: e, active: s } = t, r = {
      root: [
        "root",
        s && "active",
        `direction${b(e)}`
      ],
      icon: [
        "icon",
        `iconDirection${b(e)}`
      ]
    };
    return x(r, xt, o);
  };
  Tt = v(W, {
    name: "MuiTableSortLabel",
    slot: "Root",
    overridesResolver: (t, o) => {
      const { ownerState: e } = t;
      return [
        o.root,
        e.active && o.active
      ];
    }
  })(R(({ theme: t }) => ({
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "flex-start",
    flexDirection: "inherit",
    alignItems: "center",
    "&:focus": {
      color: (t.vars || t).palette.text.secondary
    },
    "&:hover": {
      color: (t.vars || t).palette.text.secondary,
      [`& .${z.icon}`]: {
        opacity: 0.5
      }
    },
    [`&.${z.active}`]: {
      color: (t.vars || t).palette.text.primary,
      [`& .${z.icon}`]: {
        opacity: 1,
        color: (t.vars || t).palette.text.secondary
      }
    }
  })));
  Ct = v("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (t, o) => {
      const { ownerState: e } = t;
      return [
        o.icon,
        o[`iconDirection${b(e.direction)}`]
      ];
    }
  })(R(({ theme: t }) => ({
    fontSize: 18,
    marginRight: 4,
    marginLeft: 4,
    opacity: 0,
    transition: t.transitions.create([
      "opacity",
      "transform"
    ], {
      duration: t.transitions.duration.shorter
    }),
    userSelect: "none",
    variants: [
      {
        props: {
          direction: "desc"
        },
        style: {
          transform: "rotate(0deg)"
        }
      },
      {
        props: {
          direction: "asc"
        },
        style: {
          transform: "rotate(180deg)"
        }
      }
    ]
  })));
  jt = p.forwardRef(function(o, e) {
    const s = y({
      props: o,
      name: "MuiTableSortLabel"
    }), { active: r = false, children: a, className: l, direction: n = "asc", hideSortIcon: i = false, IconComponent: d = ft, slots: u = {}, slotProps: m = {}, ...I } = s, g = {
      ...s,
      active: r,
      direction: n,
      hideSortIcon: i,
      IconComponent: d
    }, T = mt(g), $ = {
      slots: u,
      slotProps: m
    }, [C, S] = U("root", {
      elementType: Tt,
      externalForwardedProps: $,
      ownerState: g,
      className: f(T.root, l),
      ref: e
    }), [H, L] = U("icon", {
      elementType: Ct,
      externalForwardedProps: $,
      ownerState: g,
      className: T.icon
    });
    return c.jsxs(C, {
      disableRipple: true,
      component: "span",
      ...S,
      ...I,
      children: [
        a,
        i && !r ? null : c.jsx(H, {
          as: d,
          ...L
        })
      ]
    });
  });
  zt = M(c.jsx("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
  }), "Edit");
  Nt = M(c.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic");
  Ut = M(c.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh");
  Pt = M(c.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings");
  At = M(c.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility");
});
export {
  Nt as I,
  St as L,
  Ut as R,
  $t as T,
  At as V,
  __tla,
  Lt as a,
  zt as b,
  Pt as c,
  Mt as d,
  Ht as e,
  kt as f,
  jt as g,
  It as h
};
