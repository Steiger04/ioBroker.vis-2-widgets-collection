import { a as F, g as W, u as D, b as f, s as b, d as V, j as r, i as h, e as U, m as w, o as y, a0 as N, a1 as X, a2 as E, C as x, N as v, y as $, v as A, A as G, E as H, w as z, G as L, H as M, J as Y, K as J, __tla as __tla_0 } from "./CollectionBaseImage-CMDyRI6z.js";
import { u as K, d as q, __tla as __tla_1 } from "./useValueState-BHrGvNaa.js";
import { v as k, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as Q, __tla as __tla_3 } from "./index-Bt53gQws.js";
import { S as Z, __tla as __tla_4 } from "./SwitchBase-CI-PgTMb.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_5 } from "./useData-EvQhohzn.js";
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
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  function tt(t) {
    return W("MuiSwitch", t);
  }
  const s = F("MuiSwitch", [
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
    const { classes: e, edge: o, size: i, color: l, checked: a, disabled: c } = t, m = {
      root: [
        "root",
        o && `edge${h(o)}`,
        `size${h(i)}`
      ],
      switchBase: [
        "switchBase",
        `color${h(l)}`,
        a && "checked",
        c && "disabled"
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
    }, u = U(m, tt, e);
    return {
      ...e,
      ...u
    };
  }, ot = b("span", {
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
          [`& .${s.thumb}`]: {
            width: 16,
            height: 16
          },
          [`& .${s.switchBase}`]: {
            padding: 4,
            [`&.${s.checked}`]: {
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
          [`& .${s.input}`]: e.input
        },
        o.color !== "default" && e[`color${h(o.color)}`]
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
    [`&.${s.checked}`]: {
      transform: "translateX(20px)"
    },
    [`&.${s.disabled}`]: {
      color: t.vars ? t.vars.palette.Switch.defaultDisabledColor : `${t.palette.mode === "light" ? t.palette.grey[100] : t.palette.grey[600]}`
    },
    [`&.${s.checked} + .${s.track}`]: {
      opacity: 0.5
    },
    [`&.${s.disabled} + .${s.track}`]: {
      opacity: t.vars ? t.vars.opacity.switchTrackDisabled : `${t.palette.mode === "light" ? 0.12 : 0.2}`
    },
    [`& .${s.input}`]: {
      left: "-100%",
      width: "300%"
    }
  })), w(({ theme: t }) => ({
    "&:hover": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})` : y(t.palette.action.active, t.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    variants: [
      ...Object.entries(t.palette).filter(N([
        "light"
      ])).map(([e]) => ({
        props: {
          color: e
        },
        style: {
          [`&.${s.checked}`]: {
            color: (t.vars || t).palette[e].main,
            "&:hover": {
              backgroundColor: t.vars ? `rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.hoverOpacity})` : y(t.palette[e].main, t.palette.action.hoverOpacity),
              "@media (hover: none)": {
                backgroundColor: "transparent"
              }
            },
            [`&.${s.disabled}`]: {
              color: t.vars ? t.vars.palette.Switch[`${e}DisabledColor`] : `${t.palette.mode === "light" ? X(t.palette[e].main, 0.62) : E(t.palette[e].main, 0.55)}`
            }
          },
          [`&.${s.checked} + .${s.track}`]: {
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
    const i = D({
      props: e,
      name: "MuiSwitch"
    }), { className: l, color: a = "primary", edge: c = false, size: m = "medium", sx: u, slots: d = {}, slotProps: n = {}, ...B } = i, p = {
      ...i,
      color: a,
      edge: c,
      size: m
    }, g = et(p), S = {
      slots: d,
      slotProps: n
    }, [_, T] = f("root", {
      className: V(g.root, l),
      elementType: ot,
      externalForwardedProps: S,
      ownerState: p,
      additionalProps: {
        sx: u
      }
    }), [R, P] = f("thumb", {
      className: g.thumb,
      elementType: st,
      externalForwardedProps: S,
      ownerState: p
    }), C = r.jsx(R, {
      ...P
    }), [O, I] = f("track", {
      className: g.track,
      elementType: at,
      externalForwardedProps: S,
      ownerState: p
    });
    return r.jsxs(_, {
      ...T,
      children: [
        r.jsx(it, {
          type: "checkbox",
          icon: C,
          checkedIcon: C,
          ref: o,
          ownerState: p,
          ...B,
          classes: {
            ...g,
            root: g.switchBase
          },
          slots: {
            ...d.switchBase && {
              root: d.switchBase
            },
            ...d.input && {
              input: d.input
            }
          },
          slotProps: {
            ...n.switchBase && {
              root: typeof n.switchBase == "function" ? n.switchBase(p) : n.switchBase
            },
            ...n.input && {
              input: typeof n.input == "function" ? n.input(p) : n.input
            }
          }
        }),
        r.jsx(O, {
          ...I
        })
      ]
    });
  }), nt = () => [
    {
      type: "custom",
      component: () => r.jsx(x, {})
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
      component: (t, e, o, i) => r.jsx(v, {
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
      component: (t, e, o, i) => r.jsx(v, {
        field: t,
        data: e,
        onDataChange: o,
        props: i
      })
    },
    {
      type: "custom",
      component: () => r.jsx(x, {})
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
      component: (t, e, o, i) => r.jsx(v, {
        field: t,
        data: e,
        onDataChange: o,
        props: i
      })
    }
  ], lt = b(rt)(({ width: t, maxheight: e, data: o, widget: i, theme: l }) => {
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
            background: i.data.thumbColorTrue || l.palette.primary.main
          },
          "& .MuiSwitch-thumb:before": {
            top: `calc(${o.iconYOffset} * -1)`,
            left: o.iconXOffset,
            backgroundSize: o.iconSizeOnly,
            backgroundImage: `url('${o.icon}')`,
            ...$(o.icon, o.iconColor || l.palette.primary.dark, o.forceColorMask)
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
          backgroundSize: o.iconSizeOnly,
          backgroundImage: `url('${o.icon}')`,
          ...$(o.icon, o.iconColor || l.palette.primary.main, o.forceColorMask)
        }
      }
    };
  });
  function ct() {
    var _a, _b, _c, _d;
    const t = k.useRef(null), e = k.useContext(A), { widget: o, theme: i } = e, l = o.data.oidObject, { data: a } = Q("oid"), { value: c, updateValue: m } = K("oid"), u = l == null ? void 0 : l.type, d = u === "boolean", n = () => {
      m(!c);
    };
    return r.jsxs(G, {
      isValidType: d,
      data: a,
      oidValue: c,
      children: [
        r.jsx(H, {
          data: a,
          widget: o
        }),
        r.jsx(z, {
          sx: {
            position: "relative",
            width: "100%",
            height: o.data.trackSize && `${o.data.trackSize}%` || "10%"
          },
          children: r.jsx(z, {
            ref: t,
            sx: {
              width: "100%",
              height: "100%",
              px: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: c !== void 0 && o.data.thumbSize !== void 0 && r.jsx(lt, {
              disabled: u !== "boolean",
              width: (_a = t.current) == null ? void 0 : _a.clientWidth,
              maxheight: (_d = (_c = (_b = t.current) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.clientHeight,
              data: a,
              widget: o,
              checked: !!c,
              onChange: n,
              sx: {
                "& .MuiTouchRipple-root": {
                  color: a.iconColor || i.palette.primary.main
                }
              }
            })
          })
        })
      ]
    });
  }
  j = class extends L {
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
              ...Y([
                "boolean"
              ]),
              ...q(),
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, J(this.wrapContent(r.jsx(ct, {})), o);
    }
  };
});
export {
  __tla,
  j as default
};
