import { v as H, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { g as J, f as K, N as Q, w as V, n as C, s as F, j as y, y as X, i as Y, c as Z, ao as ee, __tla as __tla_1 } from "./tinycolor-B_2EitDy.js";
let re;
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
  function oe(t) {
    return J("PrivateSwitchBase", t);
  }
  K("PrivateSwitchBase", [
    "root",
    "checked",
    "disabled",
    "input",
    "edgeStart",
    "edgeEnd"
  ]);
  let te, se, ae;
  te = (t) => {
    const { classes: s, checked: l, disabled: d, edge: n } = t, c = {
      root: [
        "root",
        l && "checked",
        d && "disabled",
        n && `edge${X(n)}`
      ],
      input: [
        "input"
      ]
    };
    return Y(c, oe, s);
  };
  se = F(Z, {
    name: "MuiSwitchBase"
  })({
    padding: 9,
    borderRadius: "50%",
    variants: [
      {
        props: {
          edge: "start",
          size: "small"
        },
        style: {
          marginLeft: -3
        }
      },
      {
        props: ({ edge: t, ownerState: s }) => t === "start" && s.size !== "small",
        style: {
          marginLeft: -12
        }
      },
      {
        props: {
          edge: "end",
          size: "small"
        },
        style: {
          marginRight: -3
        }
      },
      {
        props: ({ edge: t, ownerState: s }) => t === "end" && s.size !== "small",
        style: {
          marginRight: -12
        }
      }
    ]
  });
  ae = F("input", {
    name: "MuiSwitchBase",
    shouldForwardProp: ee
  })({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  });
  re = H.forwardRef(function(s, l) {
    const { autoFocus: d, checked: n, checkedIcon: c, defaultChecked: u, disabled: b, disableFocusRipple: h = false, edge: k = false, icon: x, id: R, inputProps: _, inputRef: I, name: z, onBlur: f, onChange: g, onFocus: m, readOnly: v, required: j = false, tabIndex: U, type: r, value: S, slots: E = {}, slotProps: L = {}, ...N } = s, [w, M] = Q({
      controlled: n,
      default: !!u,
      name: "SwitchBase",
      state: "checked"
    }), a = V(), T = (e) => {
      m && m(e), a && a.onFocus && a.onFocus(e);
    }, q = (e) => {
      f && f(e), a && a.onBlur && a.onBlur(e);
    }, O = (e) => {
      if (e.nativeEvent.defaultPrevented) return;
      const o = e.target.checked;
      M(o), g && g(e, o);
    };
    let i = b;
    a && typeof i > "u" && (i = a.disabled);
    const W = r === "checkbox" || r === "radio", p = {
      ...s,
      checked: w,
      disabled: i,
      disableFocusRipple: h,
      edge: k
    }, B = te(p), P = {
      slots: E,
      slotProps: {
        input: _,
        ...L
      }
    }, [$, A] = C("root", {
      ref: l,
      elementType: se,
      className: B.root,
      shouldForwardComponentProp: true,
      externalForwardedProps: {
        ...P,
        component: "span",
        ...N
      },
      getSlotProps: (e) => ({
        ...e,
        onFocus: (o) => {
          var _a;
          (_a = e.onFocus) == null ? void 0 : _a.call(e, o), T(o);
        },
        onBlur: (o) => {
          var _a;
          (_a = e.onBlur) == null ? void 0 : _a.call(e, o), q(o);
        }
      }),
      ownerState: p,
      additionalProps: {
        centerRipple: true,
        focusRipple: !h,
        disabled: i,
        role: void 0,
        tabIndex: null
      }
    }), [D, G] = C("input", {
      ref: I,
      elementType: ae,
      className: B.input,
      externalForwardedProps: P,
      getSlotProps: (e) => ({
        onChange: (o) => {
          var _a;
          (_a = e.onChange) == null ? void 0 : _a.call(e, o), O(o);
        }
      }),
      ownerState: p,
      additionalProps: {
        autoFocus: d,
        checked: n,
        defaultChecked: u,
        disabled: i,
        id: W ? R : void 0,
        name: z,
        readOnly: v,
        required: j,
        tabIndex: U,
        type: r,
        ...r === "checkbox" && S === void 0 ? {} : {
          value: S
        }
      }
    });
    return y.jsxs($, {
      ...A,
      children: [
        y.jsx(D, {
          ...G
        }),
        w ? c : x
      ]
    });
  });
});
export {
  re as S,
  __tla
};
