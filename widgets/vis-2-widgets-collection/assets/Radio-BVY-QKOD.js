import { v as l, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { d as j, j as s, s as d, aH as B, p as w, f as q, g as H, u as J, X as Q, aQ as W, n as X, h as Z, J as c, i as A, a as P, ak as I, __tla as __tla_1 } from "./tinycolor-CLG1zgRY.js";
import { S as K, __tla as __tla_2 } from "./SwitchBase-D7Ymq-U2.js";
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
  const L = j(s.jsx("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), "RadioButtonUnchecked"), Y = j(s.jsx("path", {
    d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
  }), "RadioButtonChecked"), oo = d("span", {
    name: "MuiRadioButtonIcon",
    shouldForwardProp: B
  })({
    position: "relative",
    display: "flex"
  }), eo = d(L, {
    name: "MuiRadioButtonIcon"
  })({
    transform: "scale(1)"
  }), ao = d(Y, {
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
    const { checked: e = false, classes: a = {}, fontSize: t } = o, n = {
      ...o,
      checked: e
    };
    return s.jsxs(oo, {
      className: a.root,
      ownerState: n,
      children: [
        s.jsx(eo, {
          fontSize: t,
          className: a.background,
          ownerState: n
        }),
        s.jsx(ao, {
          fontSize: t,
          className: a.dot,
          ownerState: n
        })
      ]
    });
  }
  const to = l.createContext(void 0);
  function so() {
    return l.useContext(to);
  }
  function no(o) {
    return H("MuiRadio", o);
  }
  const z = q("MuiRadio", [
    "root",
    "checked",
    "disabled",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall"
  ]), ro = (o) => {
    const { classes: e, color: a, size: t } = o, n = {
      root: [
        "root",
        `color${c(a)}`,
        t !== "medium" && `size${c(t)}`
      ]
    };
    return {
      ...e,
      ...A(n, no, e)
    };
  }, io = d(K, {
    shouldForwardProp: (o) => B(o) || o === "classes",
    name: "MuiRadio",
    slot: "Root",
    overridesResolver: (o, e) => {
      const { ownerState: a } = o;
      return [
        e.root,
        a.size !== "medium" && e[`size${c(a.size)}`],
        e[`color${c(a.color)}`]
      ];
    }
  })(w(({ theme: o }) => ({
    color: (o.vars || o).palette.text.secondary,
    [`&.${z.disabled}`]: {
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
      ...Object.entries(o.palette).filter(I()).map(([e]) => ({
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
      ...Object.entries(o.palette).filter(I()).map(([e]) => ({
        props: {
          color: e,
          disabled: false
        },
        style: {
          [`&.${z.checked}`]: {
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
  Ro = l.forwardRef(function(e, a) {
    const t = J({
      props: e,
      name: "MuiRadio"
    }), { checked: n, checkedIcon: m = co, color: F = "primary", icon: v = po, name: M, onChange: _, size: p = "medium", className: O, disabled: U, disableRipple: N = false, slots: g = {}, slotProps: h = {}, inputProps: E, ...G } = t, y = Q();
    let r = U;
    y && typeof r > "u" && (r = y.disabled), r ??= false;
    const u = {
      ...t,
      disabled: r,
      disableRipple: N,
      color: F,
      size: p
    }, S = ro(u), i = so();
    let f = n;
    const D = W(_, i && i.onChange);
    let C = M;
    i && (typeof f > "u" && (f = lo(i.value, t.value)), typeof C > "u" && (C = i.name));
    const R = h.input ?? E, [T, V] = X("root", {
      ref: a,
      elementType: io,
      className: Z(S.root, O),
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
