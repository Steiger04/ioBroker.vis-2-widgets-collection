import { j as a, s as S, B as d, __tla as __tla_0 } from "./tinycolor-B_2EitDy.js";
import { G as C, __tla as __tla_1 } from "./usePopoverPositioning-CvdKfQR6.js";
import { b as r, e as u, C as x, u as y, a as k, c as h, w as v, __tla as __tla_2 } from "./useData-90UeUAIS.js";
import { g as p, C as _, c as M, __tla as __tla_3 } from "./CollectionBaseImage-u_I-Uett.js";
import { u as j, d as z, __tla as __tla_4 } from "./useValueState-BAhi1BOX.js";
import { v as m, __tla as __tla_5 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { S as F, __tla as __tla_6 } from "./Switch-CDoCm9Od.js";
import { i as O } from "./isOidReadOnly-CpnU56qh.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_7 } from "./Delete-lESTXvkD.js";
import "./tslib.es6-F1e60Aum.js";
import { __tla as __tla_8 } from "./SwitchBase-BkcjAU-2.js";
let f;
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
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })()
]).then(async () => {
  const W = () => [
    {
      type: "custom",
      component: () => a.jsx(u, {})
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (o, t) => o.write === false,
      default: false,
      hidden: (o, t) => o.write === false
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
      component: () => a.jsx(u, {})
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
  ], I = S(F)(({ width: o, maxheight: t, data: e, widget: l, theme: n }) => {
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
          width: o || 0
        },
        "&.Mui-checked": {
          top: "50%",
          left: "100%",
          transform: `translate(-50%, -50%) translateX(${(t || 0) >= i ? -(i / 2 - 4) : -((t || 0) / 2 - 4)}px)`,
          "& .MuiSwitch-input": {
            left: -(o || 0) + i,
            width: o || 0
          },
          "& .MuiSwitch-thumb": {
            background: l.data.thumbColorTrue || n.palette.primary.main
          },
          "& .MuiSwitch-thumb:before": {
            top: `calc(${e.iconYOffset} * -1)`,
            left: e.iconXOffset,
            backgroundSize: e.iconSizeOnly,
            backgroundImage: `url('${e.icon}')`,
            ...p(e.icon, e.iconColor || n.palette.primary.dark, e.forceColorMask)
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
          ...p(e.icon, e.iconColor || n.palette.primary.main, e.forceColorMask)
        }
      }
    };
  });
  function V() {
    var _a, _b, _c, _d;
    const o = m.useRef(null), t = m.useContext(x), { widget: e, theme: l } = t, n = e.data.oidObject, { data: i } = y("oid"), { value: s, updateValue: b } = j("oid"), c = n == null ? void 0 : n.type, g = c === "boolean", w = () => {
      b(!s);
    };
    return a.jsxs(k, {
      isValidType: g,
      data: i,
      oidValue: s,
      children: [
        a.jsx(_, {
          data: i,
          widget: e
        }),
        a.jsx(d, {
          sx: {
            position: "relative",
            width: "100%",
            height: e.data.trackSize && `${e.data.trackSize}%` || "10%"
          },
          children: a.jsx(d, {
            ref: o,
            sx: {
              width: "100%",
              height: "100%",
              px: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: s !== void 0 && e.data.thumbSize !== void 0 && a.jsx(I, {
              disabled: c !== "boolean" || O(e.data),
              width: (_a = o.current) == null ? void 0 : _a.clientWidth,
              maxheight: (_d = (_c = (_b = o.current) == null ? void 0 : _b.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.clientHeight,
              data: i,
              widget: e,
              checked: !!s,
              onChange: w,
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
  f = class extends C {
    static getWidgetInfo() {
      return {
        id: "tplSwitchCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "SwitchCollectionWidget",
        visWidgetLabel: "switch_collection_widget",
        visOrder: 3,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...h()
            ]
          },
          {
            name: "switch",
            label: "group_switch",
            fields: [
              ...M([
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
              ...h({
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
      return f.getWidgetInfo();
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
      return t.widget.data.noCard || t.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, v(this.wrapContent(a.jsx(V, {})), e);
    }
  };
});
export {
  __tla,
  f as default
};
