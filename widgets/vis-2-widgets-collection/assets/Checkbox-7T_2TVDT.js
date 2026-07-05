import { v as m, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { c as v, j as a, a as B, g as _, u as w, b as M, aC as O, d as F, s as H, Z as n, e as V, r as U, m as E, i as z, _ as I, __tla as __tla_1 } from "./useData-BGlxI0R0.js";
import { S as L, __tla as __tla_2 } from "./SwitchBase-I9oA3vkp.js";
let Y;
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
  const N = v(a.jsx("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }), "CheckBoxOutlineBlank"), T = v(a.jsx("path", {
    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }), "CheckBox"), D = v(a.jsx("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }), "IndeterminateCheckBox");
  function W(e) {
    return _("MuiCheckbox", e);
  }
  let h, Z, q, A, G, J;
  h = B("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium"
  ]);
  Z = (e) => {
    const { classes: o, indeterminate: t, color: s, size: c } = e, i = {
      root: [
        "root",
        t && "indeterminate",
        `color${n(s)}`,
        `size${n(c)}`
      ]
    }, l = V(i, W, o);
    return {
      ...o,
      ...l
    };
  };
  q = H(L, {
    shouldForwardProp: (e) => U(e) || e === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (e, o) => {
      const { ownerState: t } = e;
      return [
        o.root,
        t.indeterminate && o.indeterminate,
        o[`size${n(t.size)}`],
        t.color !== "default" && o[`color${n(t.color)}`]
      ];
    }
  })(E(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    variants: [
      {
        props: {
          color: "default",
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : z(e.palette.action.active, e.palette.action.hoverOpacity)
          }
        }
      },
      ...Object.entries(e.palette).filter(I()).map(([o]) => ({
        props: {
          color: o,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : z(e.palette[o].main, e.palette.action.hoverOpacity)
          }
        }
      })),
      ...Object.entries(e.palette).filter(I()).map(([o]) => ({
        props: {
          color: o
        },
        style: {
          [`&.${h.checked}, &.${h.indeterminate}`]: {
            color: (e.vars || e).palette[o].main
          },
          [`&.${h.disabled}`]: {
            color: (e.vars || e).palette.action.disabled
          }
        }
      })),
      {
        props: {
          disableRipple: false
        },
        style: {
          "&:hover": {
            "@media (hover: none)": {
              backgroundColor: "transparent"
            }
          }
        }
      }
    ]
  })));
  A = a.jsx(T, {});
  G = a.jsx(N, {});
  J = a.jsx(D, {});
  Y = m.forwardRef(function(o, t) {
    const s = w({
      props: o,
      name: "MuiCheckbox"
    }), { checkedIcon: c = A, color: i = "primary", icon: l = G, indeterminate: r = false, indeterminateIcon: C = J, inputProps: P, size: p = "medium", disableRipple: x = false, className: g, slots: f = {}, slotProps: k = {}, ...j } = s, b = r ? C : l, S = r ? C : c, d = {
      ...s,
      disableRipple: x,
      color: i,
      indeterminate: r,
      size: p
    }, y = Z(d), u = k.input ?? P, [$, R] = M("root", {
      ref: t,
      elementType: q,
      className: F(y.root, g),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: f,
        slotProps: k,
        ...j
      },
      ownerState: d,
      additionalProps: {
        type: "checkbox",
        icon: m.cloneElement(b, {
          fontSize: b.props.fontSize ?? p
        }),
        checkedIcon: m.cloneElement(S, {
          fontSize: S.props.fontSize ?? p
        }),
        disableRipple: x,
        slots: f,
        slotProps: {
          input: O(typeof u == "function" ? u(d) : u, {
            "data-indeterminate": r
          })
        }
      }
    });
    return a.jsx($, {
      ...R,
      classes: y
    });
  });
});
export {
  Y as C,
  __tla
};
