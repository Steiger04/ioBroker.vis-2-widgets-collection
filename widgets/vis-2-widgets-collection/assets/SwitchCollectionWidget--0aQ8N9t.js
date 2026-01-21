import { a as I, g as F, u as W, b as S, s as b, d as D, j as n, i as u, e as V, m as w, o as x, a0 as U, a1 as N, a2 as X, C as y, N as f, z as $, v as E, y as G, E as H, G as L, w as z, H as Y, J as M, K as J, __tla as __tla_0 } from "./useData-ZqG1ErJr.js";
import { c as K, __tla as __tla_1 } from "./commonObjectFields-BC31TM4M.js";
import { u as q, d as Q, __tla as __tla_2 } from "./useValueState-CDNrmGNN.js";
import { v as k, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as Z, __tla as __tla_4 } from "./SwitchBase-BWUH3Kq6.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let j;
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
    return F("MuiSwitch", t);
  }
  const r = I("MuiSwitch", [
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
    const { classes: e, edge: o, size: i, color: s, checked: a, disabled: h } = t, p = {
      root: [
        "root",
        o && `edge${u(o)}`,
        `size${u(i)}`
      ],
      switchBase: [
        "switchBase",
        `color${u(s)}`,
        a && "checked",
        h && "disabled"
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
    }, g = V(p, tt, e);
    return {
      ...e,
      ...g
    };
  }, ot = b("span", {
    name: "MuiSwitch",
    slot: "Root",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.root,
        o.edge && e[`edge${u(o.edge)}`],
        e[`size${u(o.size)}`]
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
  }), it = b(Z, {
    name: "MuiSwitch",
    slot: "SwitchBase",
    overridesResolver: (t, e) => {
      const { ownerState: o } = t;
      return [
        e.switchBase,
        {
          [`& .${r.input}`]: e.input
        },
        o.color !== "default" && e[`color${u(o.color)}`]
      ];
    }
  })(w(({ theme: t }) => ({
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
  })), w(({ theme: t }) => ({
    "&:hover": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})` : x(t.palette.action.active, t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    variants: [
      ...Object.entries(t.palette).filter(U([
        "light"
      ])).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${r.checked}`]: {
            color: (t.vars || t).palette[e].main,
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : x(t.palette[e].main, t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: "transparent"
              }
            },
            [`&.${r.disabled}`]: {
              color: t.vars ? t.vars.palette.Switch[`${e}DisabledColor`] : `${t.palette.mode === "light" ? N(t.palette[e].main, 0.62) : X(t.palette[e].main, 0.55)}`
            }
          },
          [`&.${r.checked} + .${r.track}`]: {
            backgroundColor: (t.vars || t).palette[e].main
          }
        }
      }))
    ]
  }))), at = b("span", {
    name: "MuiSwitch",
    slot: "Track",
    overridesResolver: (t, e) => e.track
  })(w(({ theme: t }) => ({
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
  }))), st = b("span", {
    name: "MuiSwitch",
    slot: "Thumb",
    overridesResolver: (t, e) => e.thumb
  })(w(({ theme: t }) => ({
    boxShadow: (t.vars || t).shadows[1],
    backgroundColor: "currentColor",
    width: 20,
    height: 20,
    borderRadius: "50%"
  }))), rt = k.forwardRef(function(e, o) {
    const i = W({
      props: e,
      name: "MuiSwitch"
    }), { className: s, color: a = "primary", edge: h = false, size: p = "medium", sx: g, slots: l = {}, slotProps: c = {}, ...B } = i, d = {
      ...i,
      color: a,
      edge: h,
      size: p
    }, m = et(d), v = {
      slots: l,
      slotProps: c
    }, [_, T] = S("root", {
      className: D(m.root, s),
      elementType: ot,
      externalForwardedProps: v,
      ownerState: d,
      additionalProps: {
        sx: g
      }
    }), [O, R] = S("thumb", {
      className: m.thumb,
      elementType: st,
      externalForwardedProps: v,
      ownerState: d
    }), C = n.jsx(O, {
      ...R
    }), [P, A] = S("track", {
      className: m.track,
      elementType: at,
      externalForwardedProps: v,
      ownerState: d
    });
    return n.jsxs(_, {
      ...T,
      children: [
        n.jsx(it, {
          type: "checkbox",
          icon: C,
          checkedIcon: C,
          ref: o,
          ownerState: d,
          ...B,
          classes: {
            ...m,
            root: m.switchBase
          },
          slots: {
            ...l.switchBase && {
              root: l.switchBase
            },
            ...l.input && {
              input: l.input
            }
          },
          slotProps: {
            ...c.switchBase && {
              root: typeof c.switchBase == "function" ? c.switchBase(d) : c.switchBase
            },
            ...c.input && {
              input: typeof c.input == "function" ? c.input(d) : c.input
            }
          }
        }),
        n.jsx(P, {
          ...A
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
      default: "",
      type: "custom",
      fallbackFields: [],
      component: (t, e, o, i) => n.jsx(f, {
        field: t,
        data: e,
        onDataChange: o,
        props: i
      })
    },
    {
      name: "thumbColorFalse",
      label: "thumb_color_false",
      default: "",
      type: "custom",
      fallbackFields: [],
      component: (t, e, o, i) => n.jsx(f, {
        field: t,
        data: e,
        onDataChange: o,
        props: i
      })
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
      default: "",
      type: "custom",
      fallbackFields: [],
      component: (t, e, o, i) => n.jsx(f, {
        field: t,
        data: e,
        onDataChange: o,
        props: i
      })
    }
  ], ct = b(rt)(({ width: t, maxheight: e, data: o, widget: i, theme: s }) => {
    const a = i.data.thumbSize ?? 62;
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
        transform: `translate(-50%, -50%) translateX(${(e || 0) >= a ? a / 2 - 4 : (e || 0) / 2 - 4}px)`,
        "& .MuiSwitch-input": {
          left: 0,
          width: t || 0
        },
        "&.Mui-checked": {
          top: "50%",
          left: "100%",
          transform: `translate(-50%, -50%) translateX(${(e || 0) >= a ? -(a / 2 - 4) : -((e || 0) / 2 - 4)}px)`,
          "& .MuiSwitch-input": {
            left: -(t || 0) + a,
            width: t || 0
          },
          "& .MuiSwitch-thumb": {
            background: i.data.thumbColorTrue || s.palette.primary.main
          },
          "& .MuiSwitch-thumb:before": {
            top: `calc(${o.iconYOffset} * -1)`,
            left: o.iconXOffset,
            backgroundSize: `${o.iconSizeOnly === 0 ? "0" : o.iconSizeOnly || "100"}%`,
            backgroundImage: o.iconActive && `url('${o.iconActive}')`,
            ...$(o.iconActive, o.iconColorActive || o.iconColor || s.palette.primary.dark, o.forceColorMaskActive)
          },
          "& + .MuiSwitch-track": {
            background: i.data.trackColor
          }
        }
      },
      "& .MuiSwitch-track": {
        background: i.data.trackColor
      },
      "& .MuiSwitch-thumb": {
        background: i.data.thumbColorFalse,
        width: a,
        maxWidth: e,
        height: a,
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
          backgroundSize: `${o.iconSizeOnly === 0 ? "0" : o.iconSizeOnly || "100"}%`,
          backgroundImage: o.iconActive && `url('${o.iconActive}')`,
          ...$(o.iconActive, o.iconColorActive || o.iconColor || s.palette.primary.main, o.forceColorMaskActive)
        }
      }
    };
  });
  function lt() {
    var _a, _b, _c, _d;
    const t = k.useRef(null), e = k.useContext(E), { widget: o } = e, i = o.data.oidObject, { data: s } = G("oid"), { value: a, updateValue: h } = q("oid"), p = i == null ? void 0 : i.type, g = p === "boolean", l = () => {
      h(!a);
    };
    return n.jsxs(H, {
      isValidType: g,
      data: s,
      oidValue: a,
      children: [
        n.jsx(L, {
          data: s,
          widget: o
        }),
        n.jsx(z, {
          sx: {
            position: "relative",
            width: "100%",
            height: o.data.trackSize && `${o.data.trackSize}%` || "10%"
          },
          children: n.jsx(z, {
            ref: t,
            sx: {
              width: "100%",
              height: "100%",
              px: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: a !== void 0 && o.data.thumbSize !== void 0 && n.jsx(ct, {
              disabled: p !== "boolean",
              width: (_a = t.current) == null ? void 0 : _a.clientWidth,
              maxheight: (_d = (_c = (_b = t.current) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.clientHeight,
              data: s,
              widget: o,
              checked: !!a,
              onChange: l,
              sx: {
                "& .MuiTouchRipple-root": {
                  color: s.iconColorActive || s.iconColor || s.textColorActive || s.textColor
                }
              }
            })
          })
        })
      ]
    });
  }
  j = class extends Y {
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
              ...M()
            ]
          },
          {
            name: "switch",
            label: "group_switch",
            fields: [
              ...K([
                "boolean"
              ]),
              ...Q(),
              ...nt()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...M({
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
      return j.getWidgetInfo();
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, J(this.wrapContent(n.jsx(lt, {})), o);
    }
  };
});
export {
  __tla,
  j as default
};
