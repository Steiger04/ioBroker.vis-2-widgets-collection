import { v as l, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as M, g as w, ax as D, u as N, j as h, s as P, d as _, W as k, e as j, B as E, m as U, i as f, X as F, __tla as __tla_1 } from "./useData-CmfZa3AT.js";
let ot, et;
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
  function H(t) {
    return l.Children.toArray(t).filter((e) => l.isValidElement(e));
  }
  function X(t) {
    return w("MuiToggleButton", t);
  }
  const v = M("MuiToggleButton", [
    "root",
    "disabled",
    "selected",
    "standard",
    "primary",
    "secondary",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
    "fullWidth"
  ]), V = l.createContext({}), A = l.createContext(void 0);
  function q(t, e) {
    return e === void 0 || t === void 0 ? false : Array.isArray(e) ? e.includes(t) : t === e;
  }
  let I, J;
  I = (t) => {
    const { classes: e, fullWidth: r, selected: i, disabled: d, size: g, color: B } = t, u = {
      root: [
        "root",
        i && "selected",
        d && "disabled",
        r && "fullWidth",
        `size${k(g)}`,
        B
      ]
    };
    return j(u, X, e);
  };
  J = P(E, {
    name: "MuiToggleButton",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: r } = t;
      return [
        e.root,
        e[`size${k(r.size)}`]
      ];
    }
  })(U(({ theme: t }) => ({
    ...t.typography.button,
    borderRadius: (t.vars || t).shape.borderRadius,
    padding: 11,
    border: `1px solid ${(t.vars || t).palette.divider}`,
    color: (t.vars || t).palette.action.active,
    [`&.${v.disabled}`]: {
      color: (t.vars || t).palette.action.disabled,
      border: `1px solid ${(t.vars || t).palette.action.disabledBackground}`
    },
    "&:hover": {
      textDecoration: "none",
      backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})` : f(t.palette.text.primary, t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    variants: [
      {
        props: {
          color: "standard"
        },
        style: {
          [`&.${v.selected}`]: {
            color: (t.vars || t).palette.text.primary,
            backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : f(t.palette.text.primary, t.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : f(t.palette.text.primary, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: t.vars ? `rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})` : f(t.palette.text.primary, t.palette.action.selectedOpacity)
              }
            }
          }
        }
      },
      ...Object.entries(t.palette).filter(F()).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${v.selected}`]: {
            color: (t.vars || t).palette[e].main,
            backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : f(t.palette[e].main, t.palette.action.selectedOpacity),
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))` : f(t.palette[e].main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})` : f(t.palette[e].main, t.palette.action.selectedOpacity)
              }
            }
          }
        }
      })),
      {
        props: {
          fullWidth: true
        },
        style: {
          width: "100%"
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          padding: 7,
          fontSize: t.typography.pxToRem(13)
        }
      },
      {
        props: {
          size: "large"
        },
        style: {
          padding: 15,
          fontSize: t.typography.pxToRem(15)
        }
      }
    ]
  })));
  et = l.forwardRef(function(e, r) {
    const { value: i, ...d } = l.useContext(V), g = l.useContext(A), B = D({
      ...d,
      selected: q(e.value, i)
    }, e), u = N({
      props: B,
      name: "MuiToggleButton"
    }), { children: m, className: C, color: p = "standard", disabled: O = false, disableFocusRipple: $ = false, fullWidth: s = false, onChange: y, onClick: x, selected: c, size: z = "medium", value: b, ...G } = u, T = {
      ...u,
      color: p,
      disabled: O,
      disableFocusRipple: $,
      fullWidth: s,
      size: z
    }, L = I(T), S = (a) => {
      x && (x(a, b), a.defaultPrevented) || y && y(a, b);
    }, n = g || "";
    return h.jsx(J, {
      className: _(d.className, L.root, C, n),
      disabled: O,
      focusRipple: !$,
      ref: r,
      onClick: S,
      onChange: y,
      value: b,
      ownerState: T,
      "aria-pressed": c,
      ...G,
      children: m
    });
  });
  function K(t) {
    return w("MuiToggleButtonGroup", t);
  }
  let o, Q, Y;
  o = M("MuiToggleButtonGroup", [
    "root",
    "selected",
    "horizontal",
    "vertical",
    "disabled",
    "grouped",
    "groupedHorizontal",
    "groupedVertical",
    "fullWidth",
    "firstButton",
    "lastButton",
    "middleButton"
  ]);
  Q = (t) => {
    const { classes: e, orientation: r, fullWidth: i, disabled: d } = t, g = {
      root: [
        "root",
        r,
        i && "fullWidth"
      ],
      grouped: [
        "grouped",
        `grouped${k(r)}`,
        d && "disabled"
      ],
      firstButton: [
        "firstButton"
      ],
      lastButton: [
        "lastButton"
      ],
      middleButton: [
        "middleButton"
      ]
    };
    return j(g, K, e);
  };
  Y = P("div", {
    name: "MuiToggleButtonGroup",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: r } = t;
      return [
        {
          [`& .${o.grouped}`]: e.grouped
        },
        {
          [`& .${o.grouped}`]: e[`grouped${k(r.orientation)}`]
        },
        {
          [`& .${o.firstButton}`]: e.firstButton
        },
        {
          [`& .${o.lastButton}`]: e.lastButton
        },
        {
          [`& .${o.middleButton}`]: e.middleButton
        },
        e.root,
        r.orientation === "vertical" && e.vertical,
        r.fullWidth && e.fullWidth
      ];
    }
  })(U(({ theme: t }) => ({
    display: "inline-flex",
    borderRadius: (t.vars || t).shape.borderRadius,
    variants: [
      {
        props: {
          orientation: "vertical"
        },
        style: {
          flexDirection: "column",
          [`& .${o.grouped}`]: {
            [`&.${o.selected} + .${o.grouped}.${o.selected}`]: {
              borderTop: 0,
              marginTop: 0
            }
          },
          [`& .${o.firstButton},& .${o.middleButton}`]: {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          },
          [`& .${o.lastButton},& .${o.middleButton}`]: {
            marginTop: -1,
            borderTop: "1px solid transparent",
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0
          },
          [`& .${o.lastButton}.${v.disabled},& .${o.middleButton}.${v.disabled}`]: {
            borderTop: "1px solid transparent"
          }
        }
      },
      {
        props: {
          fullWidth: true
        },
        style: {
          width: "100%"
        }
      },
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          [`& .${o.grouped}`]: {
            [`&.${o.selected} + .${o.grouped}.${o.selected}`]: {
              borderLeft: 0,
              marginLeft: 0
            }
          },
          [`& .${o.firstButton},& .${o.middleButton}`]: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          },
          [`& .${o.lastButton},& .${o.middleButton}`]: {
            marginLeft: -1,
            borderLeft: "1px solid transparent",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          },
          [`& .${o.lastButton}.${v.disabled},& .${o.middleButton}.${v.disabled}`]: {
            borderLeft: "1px solid transparent"
          }
        }
      }
    ]
  })));
  ot = l.forwardRef(function(e, r) {
    const i = N({
      props: e,
      name: "MuiToggleButtonGroup"
    }), { children: d, className: g, color: B = "standard", disabled: u = false, exclusive: m = false, fullWidth: C = false, onChange: p, orientation: O = "horizontal", size: $ = "medium", value: s, ...y } = i, x = {
      ...i,
      disabled: u,
      fullWidth: C,
      orientation: O,
      size: $
    }, c = Q(x), z = l.useCallback((n, a) => {
      if (!p) return;
      const R = s && s.indexOf(a);
      let W;
      s && R >= 0 ? (W = s.slice(), W.splice(R, 1)) : W = s ? s.concat(a) : [
        a
      ], p(n, W);
    }, [
      p,
      s
    ]), b = l.useCallback((n, a) => {
      p && p(n, s === a ? null : a);
    }, [
      p,
      s
    ]), G = l.useMemo(() => ({
      className: c.grouped,
      onChange: m ? b : z,
      value: s,
      size: $,
      fullWidth: C,
      color: B,
      disabled: u
    }), [
      c.grouped,
      m,
      b,
      z,
      s,
      $,
      C,
      B,
      u
    ]), T = H(d), L = T.length, S = (n) => {
      const a = n === 0, R = n === L - 1;
      return a && R ? "" : a ? c.firstButton : R ? c.lastButton : c.middleButton;
    };
    return h.jsx(Y, {
      role: "group",
      className: _(c.root, g),
      ref: r,
      ownerState: x,
      ...y,
      children: h.jsx(V.Provider, {
        value: G,
        children: T.map((n, a) => h.jsx(A.Provider, {
          value: S(a),
          children: n
        }, a))
      })
    });
  });
});
export {
  ot as T,
  __tla,
  et as a
};
