import { v as l, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { d as j, j as s, s as d, ao as B, p as w, f as q, g as J, u as W, w as Z, az as A, n as H, h as K, y as c, i as L, a as P, J as z, __tla as __tla_1 } from "./tinycolor-B_2EitDy.js";
import { S as Q, __tla as __tla_2 } from "./SwitchBase-BkcjAU-2.js";
let Ro;
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
  const X = j(s.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "RadioButtonUnchecked"), Y = j(s.jsx("path", {
    d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
  }), "RadioButtonChecked"), oo = d("span", {
    name: "MuiRadioButtonIcon",
    shouldForwardProp: B
  })({
    position: "relative",
    display: "flex"
  }), eo = d(X, {
    name: "MuiRadioButtonIcon"
  })({
    transform: "scale(1)"
  }), to = d(Y, {
    name: "MuiRadioButtonIcon"
  })(w(({ theme: o }) => ({
    left: 0,
    position: "absolute",
    transform: "scale(0)",
    transition: o.transitions.create("transform", {
      easing: o.transitions.easing.easeIn,
      duration: o.transitions.duration.shortest
    }),
    variants: [
      {
        props: {
          checked: true
        },
        style: {
          transform: "scale(1)",
          transition: o.transitions.create("transform", {
            easing: o.transitions.easing.easeOut,
            duration: o.transitions.duration.shortest
          })
        }
      }
    ]
  })));
  function $(o) {
    const { checked: e = false, classes: t = {}, fontSize: a } = o, n = {
      ...o,
      checked: e
    };
    return s.jsxs(oo, {
      className: t.root,
      ownerState: n,
      children: [
        s.jsx(eo, {
          fontSize: a,
          className: t.background,
          ownerState: n
        }),
        s.jsx(to, {
          fontSize: a,
          className: t.dot,
          ownerState: n
        })
      ]
    });
  }
  const ao = l.createContext(void 0);
  function so() {
    return l.useContext(ao);
  }
  function no(o) {
    return J("MuiRadio", o);
  }
  const I = q("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall"
  ]), ro = (o) => {
    const { classes: e, color: t, size: a } = o, n = {
      root: [
        "root",
        `color${c(t)}`,
        a !== "medium" && `size${c(a)}`
      ]
    };
    return {
      ...e,
      ...L(n, no, e)
    };
  }, io = d(Q, {
    shouldForwardProp: (o) => B(o) || o === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: t } = o;
      return [
        e.root,
        t.size !== "medium" && e[`size${c(t.size)}`],
        e[`color${c(t.color)}`]
      ];
    }
  })(w(({ theme: o }) => ({
    color: (o.vars || o).palette.text.secondary,
    [`&.${I.disabled}`]: {
      color: (o.vars || o).palette.action.disabled
    },
    variants: [
      {
        props: {
          color: "default",
          disabled: false,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: o.vars ? `rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})` : P(o.palette.action.active, o.palette.action.hoverOpacity)
          }
        }
      },
      ...Object.entries(o.palette).filter(z()).map(([e]) => ({
        props: {
          color: e,
          disabled: false,
          disableRipple: false
        },
        style: {
          "&:hover": {
            backgroundColor: o.vars ? `rgba(${o.vars.palette[e].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : P(o.palette[e].main, o.palette.action.hoverOpacity)
          }
        }
      })),
      ...Object.entries(o.palette).filter(z()).map(([e]) => ({
        props: {
          color: e,
          disabled: false
        },
        style: {
          [`&.${I.checked}`]: {
            color: (o.vars || o).palette[e].main
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
  function lo(o, e) {
    return typeof e == "object" && e !== null ? o === e : String(o) === String(e);
  }
  let co, po;
  co = s.jsx($, {
    checked: true
  });
  po = s.jsx($, {});
  Ro = l.forwardRef(function(e, t) {
    const a = W({
      props: e,
      name: "MuiRadio"
    }), { checked: n, checkedIcon: m = co, color: F = "primary", icon: v = po, name: M, onChange: _, size: p = "medium", className: O, disabled: U, disableRipple: N = false, slots: g = {}, slotProps: h = {}, inputProps: E, ...G } = a, y = Z();
    let r = U;
    y && typeof r > "u" && (r = y.disabled), r ??= false;
    const u = {
      ...a,
      disabled: r,
      disableRipple: N,
      color: F,
      size: p
    }, S = ro(u), i = so();
    let f = n;
    const D = A(_, i && i.onChange);
    let C = M;
    i && (typeof f > "u" && (f = lo(i.value, a.value)), typeof C > "u" && (C = i.name));
    const R = h.input ?? E, [T, V] = H("root", {
      ref: t,
      elementType: io,
      className: K(S.root, O),
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        slots: g,
        slotProps: h,
        ...G
      },
      getSlotProps: (b) => ({
        ...b,
        onChange: (k, ...x) => {
          var _a;
          (_a = b.onChange) == null ? void 0 : _a.call(b, k, ...x), D(k, ...x);
        }
      }),
      ownerState: u,
      additionalProps: {
        type: "radio",
        icon: l.cloneElement(v, {
          fontSize: v.props.fontSize ?? p
        }),
        checkedIcon: l.cloneElement(m, {
          fontSize: m.props.fontSize ?? p
        }),
        disabled: r,
        name: C,
        checked: f,
        slots: g,
        slotProps: {
          input: typeof R == "function" ? R(u) : R
        }
      }
    });
    return s.jsx(T, {
      ...V,
      classes: S
    });
  });
});
export {
  Ro as R,
  __tla
};
