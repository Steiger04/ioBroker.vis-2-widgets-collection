import { ab as K, R as F, ah as G, u as m, ax as W, j as d, s as f, h, i as x, p as R, g as w, f as M, y, l as J, _ as Y, a as H, d as v, n as N, c as X, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
import { v as p, a as Z, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as q, __tla as __tla_2 } from "./useThemeProps-aftgm_DM.js";
import { g as tt, __tla as __tla_3 } from "./MenuItem-YnFiF269.js";
let Jt, Vt, Pt, Yt, Bt, Zt, Ot, Qt, Gt, Wt, Xt, Dt, _t, Kt, Ft, Et, At;
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
  })()
]).then(async () => {
  function et(t, e, o, s, r) {
    const [a, l] = p.useState(() => r && o ? o(t).matches : s ? s(t).matches : e);
    return F(() => {
      if (!o) return;
      const n = o(t), i = () => {
        l(n.matches);
      };
      return i(), n.addEventListener("change", i), () => {
        n.removeEventListener("change", i);
      };
    }, [
      t,
      o
    ]), a;
  }
  const ot = {
    ...Z
  }, _ = ot.useSyncExternalStore;
  function st(t, e, o, s, r) {
    const a = p.useCallback(() => e, [
      e
    ]), l = p.useMemo(() => {
      if (r && o) return () => o(t).matches;
      if (s !== null) {
        const { matches: c } = s(t);
        return () => c;
      }
      return a;
    }, [
      a,
      t,
      s,
      r,
      o
    ]), [n, i] = p.useMemo(() => {
      if (o === null) return [
        a,
        () => () => {
        }
      ];
      const c = o(t);
      return [
        () => c.matches,
        (g) => (c.addEventListener("change", g), () => {
          c.removeEventListener("change", g);
        })
      ];
    }, [
      a,
      o,
      t
    ]);
    return _(i, n, l);
  }
  function Q(t = {}) {
    const { themeId: e } = t;
    return function(s, r = {}) {
      let a = K();
      a && e && (a = a[e] || a);
      const l = typeof window < "u" && typeof window.matchMedia < "u", { defaultMatches: n = false, matchMedia: i = l ? window.matchMedia : null, ssrMatchMedia: u = null, noSsr: c = false } = q({
        name: "MuiUseMediaQuery",
        props: r,
        theme: a
      });
      let g = typeof s == "function" ? s(a) : s;
      return g = g.replace(/^@media( ?)/m, ""), g.includes("print") && console.warn([
        "MUI: You have provided a `print` query to the `useMediaQuery` hook.",
        "Using the print media query to modify print styles can lead to unexpected results.",
        "Consider using the `displayPrint` field in the `sx` prop instead.",
        "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."
      ].join(`
`)), (_ !== void 0 ? st : et)(g, n, i, u, c);
    };
  }
  Q();
  let at, rt, O;
  At = Q({
    themeId: G
  });
  at = (t) => {
    const { alignItems: e, classes: o } = t;
    return x({
      root: [
        "root",
        e === "flex-start" && "alignItemsFlexStart"
      ]
    }, tt, o);
  };
  rt = f("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.alignItems === "flex-start" && e.alignItemsFlexStart
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
  Pt = p.forwardRef(function(e, o) {
    const s = m({
      props: e,
      name: "MuiListItemIcon"
    }), { className: r, ...a } = s, l = p.useContext(W), n = {
      ...s,
      alignItems: l.alignItems
    }, i = at(n);
    return d.jsx(rt, {
      className: h(i.root, r),
      ownerState: n,
      ref: o,
      ...a
    });
  });
  O = p.createContext();
  function nt(t) {
    return w("MuiTable", t);
  }
  M("MuiTable", [
    "root",
    "stickyHeader"
  ]);
  let lt, it, A, j;
  lt = (t) => {
    const { classes: e, stickyHeader: o } = t;
    return x({
      root: [
        "root",
        o && "stickyHeader"
      ]
    }, nt, e);
  };
  it = f("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.stickyHeader && e.stickyHeader
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
        props: ({ ownerState: e }) => e.stickyHeader,
        style: {
          borderCollapse: "separate"
        }
      }
    ]
  })));
  A = "table";
  Dt = p.forwardRef(function(e, o) {
    const s = m({
      props: e,
      name: "MuiTable"
    }), { className: r, component: a = A, padding: l = "normal", size: n = "medium", stickyHeader: i = false, ...u } = s, c = {
      ...s,
      component: a,
      padding: l,
      size: n,
      stickyHeader: i
    }, g = lt(c), S = p.useMemo(() => ({
      padding: l,
      size: n,
      stickyHeader: i
    }), [
      l,
      n,
      i
    ]);
    return d.jsx(O.Provider, {
      value: S,
      children: d.jsx(it, {
        as: a,
        role: a === A ? null : "table",
        ref: o,
        className: h(g.root, r),
        ownerState: c,
        ...u
      })
    });
  });
  j = p.createContext();
  function ct(t) {
    return w("MuiTableBody", t);
  }
  M("MuiTableBody", [
    "root"
  ]);
  let dt, pt, ut, P;
  dt = (t) => {
    const { classes: e } = t;
    return x({
      root: [
        "root"
      ]
    }, ct, e);
  };
  pt = f("tbody", {
    name: "MuiTableBody",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    display: "table-row-group"
  });
  ut = {
    variant: "body"
  };
  P = "tbody";
  Et = p.forwardRef(function(e, o) {
    const s = m({
      props: e,
      name: "MuiTableBody"
    }), { className: r, component: a = P, ...l } = s, n = {
      ...s,
      component: a
    }, i = dt(n);
    return d.jsx(j.Provider, {
      value: ut,
      children: d.jsx(pt, {
        className: h(i.root, r),
        as: a,
        ref: o,
        role: a === P ? null : "rowgroup",
        ownerState: n,
        ...l
      })
    });
  });
  function gt(t) {
    return w("MuiTableCell", t);
  }
  let bt, yt, ft;
  bt = M("MuiTableCell", [
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
  yt = (t) => {
    const { classes: e, variant: o, align: s, padding: r, size: a, stickyHeader: l } = t, n = {
      root: [
        "root",
        o,
        l && "stickyHeader",
        s !== "inherit" && `align${y(s)}`,
        r !== "normal" && `padding${y(r)}`,
        `size${y(a)}`
      ]
    };
    return x(n, gt, e);
  };
  ft = f("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        e[o.variant],
        e[`size${y(o.size)}`],
        o.padding !== "normal" && e[`padding${y(o.padding)}`],
        o.align !== "inherit" && e[`align${y(o.align)}`],
        o.stickyHeader && e.stickyHeader
      ];
    }
  })(R(({ theme: t }) => ({
    ...t.typography.body2,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: t.vars ? `1px solid ${t.vars.palette.TableCell.border}` : `1px solid
    ${t.palette.mode === "light" ? J(H(t.palette.divider, 1), 0.88) : Y(H(t.palette.divider, 1), 0.68)}`,
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
          [`&.${bt.paddingCheckbox}`]: {
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
        props: ({ ownerState: e }) => e.stickyHeader,
        style: {
          position: "sticky",
          top: 0,
          zIndex: 2,
          backgroundColor: (t.vars || t).palette.background.default
        }
      }
    ]
  })));
  Bt = p.forwardRef(function(e, o) {
    const s = m({
      props: e,
      name: "MuiTableCell"
    }), { align: r = "inherit", className: a, component: l, padding: n, scope: i, size: u, sortDirection: c, variant: g, ...S } = s, b = p.useContext(O), T = p.useContext(j), L = T && T.variant === "head";
    let C;
    l ? C = l : C = L ? "th" : "td";
    let I = i;
    C === "td" ? I = void 0 : !I && L && (I = "col");
    const $ = g || T && T.variant, k = {
      ...s,
      align: r,
      component: C,
      padding: n || (b && b.padding ? b.padding : "normal"),
      size: u || (b && b.size ? b.size : "medium"),
      sortDirection: c,
      stickyHeader: $ === "head" && b && b.stickyHeader,
      variant: $
    }, V = yt(k);
    let U = null;
    return c && (U = c === "asc" ? "ascending" : "descending"), d.jsx(ft, {
      as: C,
      ref: o,
      className: h(V.root, a),
      "aria-sort": U,
      scope: I,
      ownerState: k,
      ...S
    });
  });
  function vt(t) {
    return w("MuiTableHead", t);
  }
  M("MuiTableHead", [
    "root"
  ]);
  let mt, ht, xt, D;
  mt = (t) => {
    const { classes: e } = t;
    return x({
      root: [
        "root"
      ]
    }, vt, e);
  };
  ht = f("thead", {
    name: "MuiTableHead",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    display: "table-header-group"
  });
  xt = {
    variant: "head"
  };
  D = "thead";
  _t = p.forwardRef(function(e, o) {
    const s = m({
      props: e,
      name: "MuiTableHead"
    }), { className: r, component: a = D, ...l } = s, n = {
      ...s,
      component: a
    }, i = mt(n);
    return d.jsx(j.Provider, {
      value: xt,
      children: d.jsx(ht, {
        as: a,
        className: h(i.root, r),
        ref: o,
        role: a === D ? null : "rowgroup",
        ownerState: n,
        ...l
      })
    });
  });
  function Tt(t) {
    return w("MuiToolbar", t);
  }
  M("MuiToolbar", [
    "root",
    "gutters",
    "regular",
    "dense"
  ]);
  let Ct, Rt;
  Ct = (t) => {
    const { classes: e, disableGutters: o, variant: s } = t;
    return x({
      root: [
        "root",
        !o && "gutters",
        s
      ]
    }, Tt, e);
  };
  Rt = f("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        !o.disableGutters && e.gutters,
        e[o.variant]
      ];
    }
  })(R(({ theme: t }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    variants: [
      {
        props: ({ ownerState: e }) => !e.disableGutters,
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
  Qt = p.forwardRef(function(e, o) {
    const s = m({
      props: e,
      name: "MuiToolbar"
    }), { className: r, component: a = "div", disableGutters: l = false, variant: n = "regular", ...i } = s, u = {
      ...s,
      component: a,
      disableGutters: l,
      variant: n
    }, c = Ct(u);
    return d.jsx(Rt, {
      as: a,
      className: h(c.root, r),
      ref: o,
      ownerState: u,
      ...i
    });
  });
  Ot = v(d.jsx("path", {
    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
  }), "KeyboardArrowLeft");
  Vt = v(d.jsx("path", {
    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
  }), "KeyboardArrowRight");
  function wt(t) {
    return w("MuiTableRow", t);
  }
  let E, Mt, St, B, It;
  E = M("MuiTableRow", [
    "root",
    "selected",
    "hover",
    "head",
    "footer"
  ]);
  Mt = (t) => {
    const { classes: e, selected: o, hover: s, head: r, footer: a } = t;
    return x({
      root: [
        "root",
        o && "selected",
        s && "hover",
        r && "head",
        a && "footer"
      ]
    }, wt, e);
  };
  St = f("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.head && e.head,
        o.footer && e.footer
      ];
    }
  })(R(({ theme: t }) => ({
    color: "inherit",
    display: "table-row",
    verticalAlign: "middle",
    outline: 0,
    [`&.${E.hover}:hover`]: {
      backgroundColor: (t.vars || t).palette.action.hover
    },
    [`&.${E.selected}`]: {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})` : H(t.palette.primary.main, t.palette.action.selectedOpacity),
      "&:hover": {
        backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : H(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity)
      }
    }
  })));
  B = "tr";
  Kt = p.forwardRef(function(e, o) {
    const s = m({
      props: e,
      name: "MuiTableRow"
    }), { className: r, component: a = B, hover: l = false, selected: n = false, ...i } = s, u = p.useContext(j), c = {
      ...s,
      component: a,
      hover: l,
      selected: n,
      head: u && u.variant === "head",
      footer: u && u.variant === "footer"
    }, g = Mt(c);
    return d.jsx(St, {
      as: a,
      ref: o,
      className: h(g.root, r),
      role: a === B ? null : "row",
      ownerState: c,
      ...i
    });
  });
  It = v(d.jsx("path", {
    d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
  }), "ArrowDownward");
  function Lt(t) {
    return w("MuiTableSortLabel", t);
  }
  let z, $t, kt, Ht;
  z = M("MuiTableSortLabel", [
    "root",
    "active",
    "icon",
    "iconDirectionDesc",
    "iconDirectionAsc",
    "directionDesc",
    "directionAsc"
  ]);
  $t = (t) => {
    const { classes: e, direction: o, active: s } = t, r = {
      root: [
        "root",
        s && "active",
        `direction${y(o)}`
      ],
      icon: [
        "icon",
        `iconDirection${y(o)}`
      ]
    };
    return x(r, Lt, e);
  };
  kt = f(X, {
    name: "MuiTableSortLabel",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.active && e.active
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
  Ht = f("span", {
    name: "MuiTableSortLabel",
    slot: "Icon",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.icon,
        e[`iconDirection${y(o.direction)}`]
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
  Ft = p.forwardRef(function(e, o) {
    const s = m({
      props: e,
      name: "MuiTableSortLabel"
    }), { active: r = false, children: a, className: l, direction: n = "asc", hideSortIcon: i = false, IconComponent: u = It, slots: c = {}, slotProps: g = {}, ...S } = s, b = {
      ...s,
      active: r,
      direction: n,
      hideSortIcon: i,
      IconComponent: u
    }, T = $t(b), L = {
      slots: c,
      slotProps: g
    }, [C, I] = N("root", {
      elementType: kt,
      externalForwardedProps: L,
      ownerState: b,
      className: h(T.root, l),
      ref: o
    }), [$, k] = N("icon", {
      elementType: Ht,
      externalForwardedProps: L,
      ownerState: b,
      className: T.icon
    });
    return d.jsxs(C, {
      disableRipple: true,
      component: "span",
      ...I,
      ...S,
      children: [
        a,
        i && !r ? null : d.jsx($, {
          as: u,
          ...k
        })
      ]
    });
  });
  Gt = v(d.jsx("path", {
    d: "M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  }), "Check");
  Wt = v(d.jsx("path", {
    d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
  }), "Edit");
  Jt = v(d.jsx("path", {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"
  }), "FormatItalic");
  Yt = v(d.jsx("path", {
    d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
  }), "Refresh");
  Xt = v(d.jsx("path", {
    d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
  }), "Settings");
  Zt = v(d.jsx("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
  }), "Visibility");
});
export {
  Jt as I,
  Vt as K,
  Pt as L,
  Yt as R,
  Bt as T,
  Zt as V,
  __tla,
  Ot as a,
  Qt as b,
  Gt as c,
  Wt as d,
  Xt as e,
  Dt as f,
  _t as g,
  Kt as h,
  Ft as i,
  Et as j,
  At as u
};
