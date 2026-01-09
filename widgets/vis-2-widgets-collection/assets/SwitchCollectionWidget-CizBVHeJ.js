import { a as A, g as I, u as F, b as f, s as w, d as V, j as n, i as h, e as W, m as S, o as p, Y as D, Z as U, _ as N, C as y, z as X, v as E, y as H, A as L, w as x, G as Y, E as $, H as G, __tla as __tla_0 } from "./useData-BBwgvCqY.js";
import { C as Z, c as q, __tla as __tla_1 } from "./CollectionBaseImage-ClKW21v8.js";
import { u as J, d as K, __tla as __tla_2 } from "./useValueState-DIGDaDEf.js";
import { v as C, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as Q, __tla as __tla_4 } from "./SwitchBase-D1j3RI5H.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let B;
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
  })()
]).then(async () => {
  function tt(t) {
    return I("MuiSwitch", t);
  }
  const r = A("MuiSwitch", [
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
  ]), et = (t) => {
    const { classes: e, edge: o, size: i, color: a, checked: s, disabled: g } = t, u = {
      root: [
        "root",
        o && `edge${h(o)}`,
        `size${h(i)}`
      ],
      switchBase: [
        "switchBase",
        `color${h(a)}`,
        s && "checked",
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
    }, m = W(u, tt, e);
    return {
      ...e,
      ...m
    };
  }, ot = w("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.edge && e[`edge${h(o.edge)}`],
        e[`size${h(o.size)}`]
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
          [`& .${r.thumb}`]: {
            width: 16,
            height: 16
          },
          [`& .${r.switchBase}`]: {
            padding: 4,
            [`&.${r.checked}`]: {
              transform: "translateX(16px)"
            }
          }
        }
      }
    ]
  }), it = w(Q, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.switchBase,
        {
          [`& .${r.input}`]: e.input
        },
        o.color !== "default" && e[`color${h(o.color)}`]
      ];
    }
  })(S(({ theme: t }) => ({
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
    [`&.${r.checked}`]: {
      transform: "translateX(20px)"
    },
    [`&.${r.disabled}`]: {
      color: t.vars ? t.vars.palette.Switch.defaultDisabledColor : `${t.palette.mode === "light" ? t.palette.grey[100] : t.palette.grey[600]}`
    },
    [`&.${r.checked} + .${r.track}`]: {
      opacity: 0.5
    },
    [`&.${r.disabled} + .${r.track}`]: {
      opacity: t.vars ? t.vars.opacity.switchTrackDisabled : `${t.palette.mode === "light" ? 0.12 : 0.2}`
    },
    [`& .${r.input}`]: {
      left: "-100%",
      width: "300%"
    }
  })), S(({ theme: t }) => ({
    "&:hover": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})` : p(t.palette.action.active, t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    variants: [
      ...Object.entries(t.palette).filter(D([
        "light"
      ])).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${r.checked}`]: {
            color: (t.vars || t).palette[e].main,
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : p(t.palette[e].main, t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: "transparent"
              }
            },
            [`&.${r.disabled}`]: {
              color: t.vars ? t.vars.palette.Switch[`${e}DisabledColor`] : `${t.palette.mode === "light" ? U(t.palette[e].main, 0.62) : N(t.palette[e].main, 0.55)}`
            }
          },
          [`&.${r.checked} + .${r.track}`]: {
            backgroundColor: (t.vars || t).palette[e].main
          }
        }
      }))
    ]
  }))), st = w("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (t, e) => e.track
  })(S(({ theme: t }) => ({
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
  }))), at = w("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (t, e) => e.thumb
  })(S(({ theme: t }) => ({
    boxShadow: (t.vars || t).shadows[1],
    backgroundColor: "currentColor",
    width: 20,
    height: 20,
    borderRadius: "50%"
  }))), rt = C.forwardRef(function(e, o) {
    const i = F({
      props: e,
      name: "MuiSwitch"
    }), { className: a, color: s = "primary", edge: g = false, size: u = "medium", sx: m, slots: c = {}, slotProps: l = {}, ...M } = i, d = {
      ...i,
      color: s,
      edge: g,
      size: u
    }, b = et(d), v = {
      slots: c,
      slotProps: l
    }, [_, O] = f("root", {
      className: V(b.root, a),
      elementType: ot,
      externalForwardedProps: v,
      ownerState: d,
      additionalProps: {
        sx: m
      }
    }), [j, T] = f("thumb", {
      className: b.thumb,
      elementType: at,
      externalForwardedProps: v,
      ownerState: d
    }), k = n.jsx(j, {
      ...T
    }), [R, P] = f("track", {
      className: b.track,
      elementType: st,
      externalForwardedProps: v,
      ownerState: d
    });
    return n.jsxs(_, {
      ...O,
      children: [
        n.jsx(it, {
          type: "checkbox",
          icon: k,
          checkedIcon: k,
          ref: o,
          ownerState: d,
          ...M,
          classes: {
            ...b,
            root: b.switchBase
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
            ...l.switchBase && {
              root: typeof l.switchBase == "function" ? l.switchBase(d) : l.switchBase
            },
            ...l.input && {
              input: typeof l.input == "function" ? l.input(d) : l.input
            }
          }
        }),
        n.jsx(R, {
          ...P
        })
      ]
    });
  }), nt = () => [
    {
      type: "custom",
      component: () => n.jsx(y, {})
    },
    {
      name: "thumbSize",
      label: "thumb_size",
      type: "slider",
      min: 0,
      max: 500,
      default: 62,
      step: 1
    },
    {
      name: "thumbColorTrue",
      label: "thumb_color_true",
      type: "color"
    },
    {
      name: "thumbColorFalse",
      label: "thumb_color_false",
      type: "color"
    },
    {
      type: "custom",
      component: () => n.jsx(y, {})
    },
    {
      name: "trackSize",
      label: "track_size",
      type: "slider",
      min: 0,
      max: 100,
      default: 10,
      step: 1
    },
    {
      name: "trackColor",
      label: "track_color",
      type: "color"
    }
  ];
  function z(t) {
    return [
      /^#([0-9a-fA-F]{3})$/,
      /^#([0-9a-fA-F]{6})$/,
      /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/,
      /^rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(0|1|0?\.\d+)\s*\)$/,
      /^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/,
      /^hsla\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*,\s*(0|1|0?\.\d+)\s*\)$/,
      /^color\(\s*[\w-]+\s+(?:\d+(\.\d+)?%?\s*)+\)$/
    ].some((o) => o.test(t));
  }
  const lt = w(rt)(({ width: t, maxheight: e, data: o, widget: i, theme: a }) => {
    const s = i.data.thumbSize ?? 62;
    return {
      width: "100%",
      height: "100%",
      padding: 0,
      margin: 0,
      "&.MuiSwitch-root": {
        overflow: "visible"
      },
      "& .MuiSwitch-switchBase": {
        margin: 0,
        padding: 0,
        top: "50%",
        left: "0%",
        transform: `translate(-50%, -50%) translateX(${(e || 0) >= s ? s / 2 - 4 : (e || 0) / 2 - 4}px)`,
        "& .MuiSwitch-input": {
          left: 0,
          width: t || 0
        },
        "&.Mui-checked": {
          top: "50%",
          left: "100%",
          transform: `translate(-50%, -50%) translateX(${(e || 0) >= s ? -(s / 2 - 4) : -((e || 0) / 2 - 4)}px)`,
          "& .MuiSwitch-input": {
            left: -(t || 0) + s,
            width: t || 0
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: i.data.thumbColorTrue || a.palette.primary.main
          },
          "& .MuiSwitch-thumb:before": {
            top: `calc(${o.iconYOffset} * -1)`,
            left: o.iconXOffset,
            backgroundSize: `${o.iconSizeOnly === 0 ? "0" : o.iconSizeOnly || "100"}% ${o.iconSizeOnly === 0 ? "0" : o.iconSizeOnly || "100"}%`,
            backgroundImage: o.iconActive && `url('${o.iconActive}')`
          },
          "& + .MuiSwitch-track": {
            backgroundColor: i.data.trackColor && z(i.data.trackColor) && i.data.trackColor || (a.palette.mode === "dark" ? p("rgb(144, 202, 249)", 0.5) : p("#1976d2", 0.5))
          }
        }
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: i.data.thumbColorFalse,
        width: s,
        maxWidth: e,
        height: s,
        maxHeight: e,
        "&::before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: `calc(0px + ${o.iconXOffset})`,
          top: `calc(0px - ${o.iconYOffset})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: `${o.iconSizeOnly === 0 ? "0" : o.iconSizeOnly || "100"}% ${o.iconSizeOnly === 0 ? "0" : o.iconSizeOnly || "100"}%`,
          backgroundImage: o.iconActive && `url('${o.iconActive}')`,
          ...X(o.iconActive, o.iconColorActive || o.iconColor)
        }
      },
      "& .MuiSwitch-track": {
        backgroundColor: i.data.trackColor && z(i.data.trackColor) && p(i.data.trackColor, 0.5) || (a.palette.mode === "dark" ? p("#ffffff", 0.3) : p("#000000", 0.38)),
        borderRadius: 20 / 2
      }
    };
  });
  function ct() {
    var _a, _b, _c, _d;
    const t = C.useRef(null), e = C.useContext(E), { widget: o } = e, i = o.data.oidObject, { data: a } = H("oid"), { value: s, updateValue: g } = J("oid"), u = i == null ? void 0 : i.type, m = u === "boolean", c = () => {
      g(!s);
    };
    return n.jsxs(L, {
      isValidType: m,
      data: a,
      oidValue: s,
      children: [
        n.jsx(Z, {
          data: a,
          widget: o
        }),
        n.jsx(x, {
          sx: {
            position: "relative",
            width: "100%",
            height: o.data.trackSize && `${o.data.trackSize}%` || "10%"
          },
          children: n.jsx(x, {
            ref: t,
            sx: {
              width: "100%",
              height: "100%",
              px: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: s !== void 0 && o.data.thumbSize !== void 0 && n.jsx(lt, {
              disabled: u !== "boolean",
              width: (_a = t.current) == null ? void 0 : _a.clientWidth,
              maxheight: (_d = (_c = (_b = t.current) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.clientHeight,
              data: a,
              widget: o,
              checked: !!s,
              onChange: c,
              sx: {
                "& .MuiTouchRipple-root": {
                  color: a.iconColorActive || a.iconColor || a.textColorActive || a.textColor
                }
              }
            })
          })
        })
      ]
    });
  }
  B = class extends Y {
    static getWidgetInfo() {
      return {
        id: "tplSwitchCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "SwitchCollectionWidget",
        visWidgetLabel: "switch_collection_widget",
        visOrder: 2,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...$()
            ]
          },
          {
            name: "switch",
            label: "group_switch",
            fields: [
              ...q([
                "boolean"
              ]),
              ...K(),
              ...nt()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...$({
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
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-switch.png"
      };
    }
    getWidgetInfo() {
      return B.getWidgetInfo();
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, G(this.wrapContent(n.jsx(ct, {})), o);
    }
  };
});
export {
  __tla,
  B as default
};
