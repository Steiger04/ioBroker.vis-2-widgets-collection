import { j as l, C as d, E as c, s as C, t as u, n as w, q as x, w as y, x as k, o as h, G as v, y as p, z as _, A as j, __tla as __tla_0 } from "./useData-CFNDeVWW.js";
import { u as M, d as z, __tla as __tla_1 } from "./useValueState-BkaH86VC.js";
import { v as m, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { S as W, __tla as __tla_3 } from "./Switch-BgmKfAZh.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_4 } from "./SwitchBase-DIywY-d5.js";
let g;
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
  const F = () => [
    {
      type: "custom",
      component: () => l.jsx(d, {})
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
      component: (i, t, e, o) => l.jsx(c, {
        field: i,
        data: t,
        onDataChange: e,
        props: o
      })
    },
    {
      name: "thumbColorFalse",
      label: "thumb_color_false",
      default: "",
      type: "custom",
      fallbackFields: [],
      component: (i, t, e, o) => l.jsx(c, {
        field: i,
        data: t,
        onDataChange: e,
        props: o
      })
    },
    {
      type: "custom",
      component: () => l.jsx(d, {})
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
      component: (i, t, e, o) => l.jsx(c, {
        field: i,
        data: t,
        onDataChange: e,
        props: o
      })
    }
  ], I = C(W)(({ width: i, maxheight: t, data: e, widget: o, theme: a }) => {
    const n = o.data.thumbSize ?? 62;
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
        transform: `translate(-50%, -50%) translateX(${(t || 0) >= n ? n / 2 - 4 : (t || 0) / 2 - 4}px)`,
        "& .MuiSwitch-input": {
          left: 0,
          width: i || 0
        },
        "&.Mui-checked": {
          top: "50%",
          left: "100%",
          transform: `translate(-50%, -50%) translateX(${(t || 0) >= n ? -(n / 2 - 4) : -((t || 0) / 2 - 4)}px)`,
          "& .MuiSwitch-input": {
            left: -(i || 0) + n,
            width: i || 0
          },
          "& .MuiSwitch-thumb": {
            background: o.data.thumbColorTrue || a.palette.primary.main
          },
          "& .MuiSwitch-thumb:before": {
            top: `calc(${e.iconYOffset} * -1)`,
            left: e.iconXOffset,
            backgroundSize: e.iconSizeOnly,
            backgroundImage: `url('${e.icon}')`,
            ...u(e.icon, e.iconColor || a.palette.primary.dark, e.forceColorMask)
          },
          "& + .MuiSwitch-track": {
            background: o.data.trackColor
          }
        }
      },
      "& .MuiSwitch-track": {
        background: o.data.trackColor
      },
      "& .MuiSwitch-thumb": {
        background: o.data.thumbColorFalse,
        width: n,
        maxWidth: t,
        height: n,
        maxHeight: t,
        "&::before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: `calc(0px + ${e.iconXOffset})`,
          top: `calc(0px - ${e.iconYOffset})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: e.iconSizeOnly,
          backgroundImage: `url('${e.icon}')`,
          ...u(e.icon, e.iconColor || a.palette.primary.main, e.forceColorMask)
        }
      }
    };
  });
  function O() {
    var _a, _b, _c, _d;
    const i = m.useRef(null), t = m.useContext(w), { widget: e, theme: o } = t, a = e.data.oidObject, { data: n } = x("oid"), { value: s, updateValue: b } = M("oid"), r = a == null ? void 0 : a.type, f = r === "boolean", S = () => {
      b(!s);
    };
    return l.jsxs(y, {
      isValidType: f,
      data: n,
      oidValue: s,
      children: [
        l.jsx(k, {
          data: n,
          widget: e
        }),
        l.jsx(h, {
          sx: {
            position: "relative",
            width: "100%",
            height: e.data.trackSize && `${e.data.trackSize}%` || "10%"
          },
          children: l.jsx(h, {
            ref: i,
            sx: {
              width: "100%",
              height: "100%",
              px: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: s !== void 0 && e.data.thumbSize !== void 0 && l.jsx(I, {
              disabled: r !== "boolean",
              width: (_a = i.current) == null ? void 0 : _a.clientWidth,
              maxheight: (_d = (_c = (_b = i.current) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.clientHeight,
              data: n,
              widget: e,
              checked: !!s,
              onChange: S,
              sx: {
                "& .MuiTouchRipple-root": {
                  color: n.iconColor || o.palette.primary.main
                }
              }
            })
          })
        })
      ]
    });
  }
  g = class extends v {
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
              ...p()
            ]
          },
          {
            name: "switch",
            label: "group_switch",
            fields: [
              ..._([
                "boolean"
              ]),
              ...z(),
              ...F()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...p({
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
      return g.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(t, e) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(t) {
      super.renderWidgetBody(t);
      const e = {
        id: t.id,
        refService: t.refService,
        style: t.style,
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, j(this.wrapContent(l.jsx(O, {})), e);
    }
  };
});
export {
  __tla,
  g as default
};
