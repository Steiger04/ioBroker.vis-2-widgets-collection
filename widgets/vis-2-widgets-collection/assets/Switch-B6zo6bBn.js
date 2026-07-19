import { v as T, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { a as P, g as j, u as M, k, s as u, d as _, j as p, w as i, e as O, m as d, f as m, x as D, o as I, Q as N, __tla as __tla_1 } from "./usePopoverPositioning-CofXyWxH.js";
import { S as U, __tla as __tla_2 } from "./SwitchBase-BkWjByuT.js";
let G;
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
  function A(t) {
    return j("MuiSwitch", t);
  }
  let o, E, F, X, L, Q;
  o = P("MuiSwitch", [
    "root",
    "edgeStart",
    "edgeEnd",
    "switchBase",
    "colorPrimary",
    "colorSecondary",
    "sizeSmall",
    "sizeMedium",
    "checked",
    "disabled",
    "input",
    "thumb",
    "track"
  ]);
  E = (t) => {
    const { classes: a, edge: s, size: l, color: h, checked: w, disabled: g } = t, v = {
      root: [
        "root",
        s && `edge${i(s)}`,
        `size${i(l)}`
      ],
      switchBase: [
        "switchBase",
        `color${i(h)}`,
        w && "checked",
        g && "disabled"
      ],
      thumb: [
        "thumb"
      ],
      track: [
        "track"
      ],
      input: [
        "input"
      ]
    }, S = O(v, A, a);
    return {
      ...a,
      ...S
    };
  };
  F = u("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (t, a) => {
      const { ownerState: s } = t;
      return [
        a.root,
        s.edge && a[`edge${i(s.edge)}`],
        a[`size${i(s.size)}`]
      ];
    }
  })({
    display: "inline-flex",
    width: 58,
    height: 38,
    overflow: "hidden",
    padding: 12,
    boxSizing: "border-box",
    position: "relative",
    flexShrink: 0,
    zIndex: 0,
    verticalAlign: "middle",
    "@media print": {
      colorAdjust: "exact"
    },
    variants: [
      {
        props: {
          edge: "start"
        },
        style: {
          marginLeft: -8
        }
      },
      {
        props: {
          edge: "end"
        },
        style: {
          marginRight: -8
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          width: 40,
          height: 24,
          padding: 7,
          [`& .${o.thumb}`]: {
            width: 16,
            height: 16
          },
          [`& .${o.switchBase}`]: {
            padding: 4,
            [`&.${o.checked}`]: {
              transform: "translateX(16px)"
            }
          }
        }
      }
    ]
  });
  X = u(U, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (t, a) => {
      const { ownerState: s } = t;
      return [
        a.switchBase,
        {
          [`& .${o.input}`]: a.input
        },
        s.color !== "default" && a[`color${i(s.color)}`]
      ];
    }
  })(d(({ theme: t }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    color: t.vars ? t.vars.palette.Switch.defaultColor : `${t.palette.mode === "light" ? t.palette.common.white : t.palette.grey[300]}`,
    transition: t.transitions.create([
      "left",
      "transform"
    ], {
      duration: t.transitions.duration.shortest
    }),
    [`&.${o.checked}`]: {
      transform: "translateX(20px)"
    },
    [`&.${o.disabled}`]: {
      color: t.vars ? t.vars.palette.Switch.defaultDisabledColor : `${t.palette.mode === "light" ? t.palette.grey[100] : t.palette.grey[600]}`
    },
    [`&.${o.checked} + .${o.track}`]: {
      opacity: 0.5
    },
    [`&.${o.disabled} + .${o.track}`]: {
      opacity: t.vars ? t.vars.opacity.switchTrackDisabled : `${t.palette.mode === "light" ? 0.12 : 0.2}`
    },
    [`& .${o.input}`]: {
      left: "-100%",
      width: "300%"
    }
  })), d(({ theme: t }) => ({
    "&:hover": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})` : m(t.palette.action.active, t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    variants: [
      ...Object.entries(t.palette).filter(D([
        "light"
      ])).map(([a]) => ({
        props: {
          color: a
        },
        style: {
          [`&.${o.checked}`]: {
            color: (t.vars || t).palette[a].main,
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette[a].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : m(t.palette[a].main, t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: "transparent"
              }
            },
            [`&.${o.disabled}`]: {
              color: t.vars ? t.vars.palette.Switch[`${a}DisabledColor`] : `${t.palette.mode === "light" ? I(t.palette[a].main, 0.62) : N(t.palette[a].main, 0.55)}`
            }
          },
          [`&.${o.checked} + .${o.track}`]: {
            backgroundColor: (t.vars || t).palette[a].main
          }
        }
      }))
    ]
  })));
  L = u("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (t, a) => a.track
  })(d(({ theme: t }) => ({
    height: "100%",
    width: "100%",
    borderRadius: 14 / 2,
    zIndex: -1,
    transition: t.transitions.create([
      "opacity",
      "background-color"
    ], {
      duration: t.transitions.duration.shortest
    }),
    backgroundColor: t.vars ? t.vars.palette.common.onBackground : `${t.palette.mode === "light" ? t.palette.common.black : t.palette.common.white}`,
    opacity: t.vars ? t.vars.opacity.switchTrack : `${t.palette.mode === "light" ? 0.38 : 0.3}`
  })));
  Q = u("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (t, a) => a.thumb
  })(d(({ theme: t }) => ({
    boxShadow: (t.vars || t).shadows[1],
    backgroundColor: "currentColor",
    width: 20,
    height: 20,
    borderRadius: "50%"
  })));
  G = T.forwardRef(function(a, s) {
    const l = M({
      props: a,
      name: "MuiSwitch"
    }), { className: h, color: w = "primary", edge: g = false, size: v = "medium", sx: S, slots: c = {}, slotProps: e = {}, ...f } = l, r = {
      ...l,
      color: w,
      edge: g,
      size: v
    }, n = E(r), b = {
      slots: c,
      slotProps: e
    }, [y, x] = k("root", {
      className: _(n.root, h),
      elementType: F,
      externalForwardedProps: b,
      ownerState: r,
      additionalProps: {
        sx: S
      }
    }), [C, B] = k("thumb", {
      className: n.thumb,
      elementType: Q,
      externalForwardedProps: b,
      ownerState: r
    }), $ = p.jsx(C, {
      ...B
    }), [z, R] = k("track", {
      className: n.track,
      elementType: L,
      externalForwardedProps: b,
      ownerState: r
    });
    return p.jsxs(y, {
      ...x,
      children: [
        p.jsx(X, {
          type: "checkbox",
          icon: $,
          checkedIcon: $,
          ref: s,
          ownerState: r,
          ...f,
          classes: {
            ...n,
            root: n.switchBase
          },
          slots: {
            ...c.switchBase && {
              root: c.switchBase
            },
            ...c.input && {
              input: c.input
            }
          },
          slotProps: {
            ...e.switchBase && {
              root: typeof e.switchBase == "function" ? e.switchBase(r) : e.switchBase
            },
            ...e.input && {
              input: typeof e.input == "function" ? e.input(r) : e.input
            }
          }
        }),
        p.jsx(z, {
          ...R
        })
      ]
    });
  });
});
export {
  G as S,
  __tla
};
