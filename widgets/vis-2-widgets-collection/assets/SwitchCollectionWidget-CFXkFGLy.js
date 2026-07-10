import { j as o, s as w, n as d, G as C, __tla as __tla_0 } from "./usePopoverPositioning-BZLitN7O.js";
import { h as r, C as u, g as h, a as x, u as k, c as v, d as y, e as p, f as _, w as M, __tla as __tla_1 } from "./useData-DNdZxCG9.js";
import { u as j, d as z, __tla as __tla_2 } from "./useValueState-CVlBjGB3.js";
import { v as m, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { S as F, __tla as __tla_4 } from "./Switch-CAvvd4Cx.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_5 } from "./SwitchBase-QNQDlZV8.js";
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
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  const W = () => [
    {
      type: "custom",
      component: () => o.jsx(u, {})
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
    r({
      name: "thumbColorTrue",
      label: "thumb_color_true",
      fallbackFields: []
    }),
    r({
      name: "thumbColorFalse",
      label: "thumb_color_false",
      fallbackFields: []
    }),
    {
      type: "custom",
      component: () => o.jsx(u, {})
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
    r({
      name: "trackColor",
      label: "track_color",
      fallbackFields: []
    })
  ], I = w(F)(({ width: a, maxheight: t, data: e, widget: l, theme: n }) => {
    const i = l.data.thumbSize ?? 62;
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
        transform: `translate(-50%, -50%) translateX(${(t || 0) >= i ? i / 2 - 4 : (t || 0) / 2 - 4}px)`,
        "& .MuiSwitch-input": {
          left: 0,
          width: a || 0
        },
        "&.Mui-checked": {
          top: "50%",
          left: "100%",
          transform: `translate(-50%, -50%) translateX(${(t || 0) >= i ? -(i / 2 - 4) : -((t || 0) / 2 - 4)}px)`,
          "& .MuiSwitch-input": {
            left: -(a || 0) + i,
            width: a || 0
          },
          "& .MuiSwitch-thumb": {
            background: l.data.thumbColorTrue || n.palette.primary.main
          },
          "& .MuiSwitch-thumb:before": {
            top: `calc(${e.iconYOffset} * -1)`,
            left: e.iconXOffset,
            backgroundSize: e.iconSizeOnly,
            backgroundImage: `url('${e.icon}')`,
            ...h(e.icon, e.iconColor || n.palette.primary.dark, e.forceColorMask)
          },
          "& + .MuiSwitch-track": {
            background: l.data.trackColor
          }
        }
      },
      "& .MuiSwitch-track": {
        background: l.data.trackColor
      },
      "& .MuiSwitch-thumb": {
        background: l.data.thumbColorFalse,
        width: i,
        maxWidth: t,
        height: i,
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
          ...h(e.icon, e.iconColor || n.palette.primary.main, e.forceColorMask)
        }
      }
    };
  });
  function O() {
    var _a, _b, _c, _d;
    const a = m.useRef(null), t = m.useContext(x), { widget: e, theme: l } = t, n = e.data.oidObject, { data: i } = k("oid"), { value: s, updateValue: b } = j("oid"), c = n == null ? void 0 : n.type, f = c === "boolean", S = () => {
      b(!s);
    };
    return o.jsxs(v, {
      isValidType: f,
      data: i,
      oidValue: s,
      children: [
        o.jsx(y, {
          data: i,
          widget: e
        }),
        o.jsx(d, {
          sx: {
            position: "relative",
            width: "100%",
            height: e.data.trackSize && `${e.data.trackSize}%` || "10%"
          },
          children: o.jsx(d, {
            ref: a,
            sx: {
              width: "100%",
              height: "100%",
              px: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: s !== void 0 && e.data.thumbSize !== void 0 && o.jsx(I, {
              disabled: c !== "boolean",
              width: (_a = a.current) == null ? void 0 : _a.clientWidth,
              maxheight: (_d = (_c = (_b = a.current) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.clientHeight,
              data: i,
              widget: e,
              checked: !!s,
              onChange: S,
              sx: {
                "& .MuiTouchRipple-root": {
                  color: i.iconColor || l.palette.primary.main
                }
              }
            })
          })
        })
      ]
    });
  }
  g = class extends C {
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
              ...W()
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, M(this.wrapContent(o.jsx(O, {})), e);
    }
  };
});
export {
  __tla,
  g as default
};
