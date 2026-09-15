import { j as n, B as f, S as W, T as O, a as C, __tla as __tla_0 } from "./tinycolor-CLG1zgRY.js";
import { G as P, __tla as __tla_1 } from "./usePopoverPositioning-BenXbV4b.js";
import { b as T, e as b, i as B, C as D, j as F, u as R, a as G, h as w, k as H, g as u, c as S, w as L, __tla as __tla_2 } from "./useData-BTquM2A9.js";
import { o as N, C as z, S as A, g as E, c as U, __tla as __tla_3 } from "./CollectionBaseImage-V9l6RwxW.js";
import { u as y, d as $, __tla as __tla_4 } from "./useValueState-0S1Cr_pw.js";
import { v as c, __tla as __tla_5 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { i as Y } from "./isOidReadOnly-CpnU56qh.js";
import { M as X, __tla as __tla_6 } from "./MenuItem-B0Mpzx1G.js";
import { S as q, __tla as __tla_7 } from "./Stack-7FMkVYqC.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import "./preload-helper-PPVm8Dsz.js";
import { __tla as __tla_8 } from "./Delete-VRvdIUoO.js";
import "./tslib.es6-F1e60Aum.js";
import { __tla as __tla_9 } from "./listItemTextClasses-nVrLWyOL.js";
import { __tla as __tla_10 } from "./styled-CQDMXjYA.js";
import { __tla as __tla_11 } from "./useThemeProps-BJ14EHU2.js";
let _;
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
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })()
]).then(async () => {
  const J = () => [
    {
      type: "custom",
      component: () => n.jsx(b, {
        dividerText: "selection"
      })
    },
    {
      name: "onlyDisplay",
      type: "checkbox",
      label: "only_display",
      disabled: (o, e) => o.write === false,
      default: false,
      hidden: (o, e) => o.write === false
    },
    {
      name: "cid",
      type: "id",
      label: "cid",
      onChange: N([
        "boolean",
        "number",
        "string",
        "mixed"
      ], "cid")
    },
    {
      type: "custom",
      component: () => n.jsx(b, {
        dividerText: "arrow"
      })
    },
    T({
      name: "arrowColor",
      label: "arrow_color",
      fallbackFields: [
        ""
      ],
      noGradient: true
    })
  ];
  function K(o) {
    const e = u(o), a = e ? w(o) : void 0, i = a ? C(a, 0.5) : o ? C(o, 0.5) : void 0;
    return {
      background: e,
      bgcolor: e ? "transparent" : o,
      "&.Mui-selected": {
        background: e,
        bgcolor: e ? void 0 : o
      },
      "&.Mui-selected:hover": {
        background: e ? i : void 0,
        bgcolor: e ? void 0 : i
      },
      "&:hover": {
        background: e ? i : void 0,
        bgcolor: e ? void 0 : i
      }
    };
  }
  function Q() {
    const o = c.useRef(null), { width: e = 300 } = B(o.current), a = c.useContext(D), { widget: i } = a, { borderStyles: k } = F(i.style), p = i.data.cidObject, j = i.data.oidObject, { data: s, states: r } = R("oid"), { value: d, updateValue: m } = y("oid"), { updateValue: g } = y("cid"), I = j == null ? void 0 : j.type, M = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(I || ""), h = c.useMemo(() => {
      if (d == null) return -1;
      const t = String(d);
      return r.findIndex((l) => String(l.value) === t);
    }, [
      r,
      d
    ]), V = c.useCallback((t) => {
      const l = Number(t.target.value);
      if (l < 0 || l >= r.length) return;
      const x = r[l];
      if ((x == null ? void 0 : x.value) === void 0) return;
      const { value: v } = x;
      p && g(v), m(v);
    }, [
      r,
      p,
      g,
      m
    ]);
    return n.jsxs(G, {
      isValidType: M,
      data: s,
      oidValue: d,
      children: [
        n.jsx(z, {
          data: s,
          widget: i
        }),
        n.jsx(f, {
          ref: o,
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: n.jsx(W, {
            variant: "standard",
            disableUnderline: true,
            value: h !== -1 ? h : "",
            onChange: V,
            disabled: Y(i.data),
            MenuProps: {
              PaperProps: {
                sx: {
                  overflow: "hidden",
                  "& .MuiMenu-list": {
                    maxHeight: "100vh",
                    overflowY: "auto"
                  },
                  ...i.data.noCard && {
                    "--Paper-overlay": "none !important",
                    "--Paper-shadow": "none !important",
                    boxShadow: "none !important"
                  },
                  background: s.frameBackground || (i.data.noCard ? "transparent" : void 0),
                  ...H(k)
                }
              },
              slotProps: {
                backdrop: {
                  style: {
                    backgroundColor: "transparent !important"
                  }
                },
                root: {
                  sx: {
                    maxWidth: e,
                    mt: 0.5,
                    "& .MuiList-root": {
                      py: 0
                    }
                  }
                }
              }
            },
            sx: {
              width: "100%",
              height: "100%",
              maxWidth: `calc(${e}px - 10%)`,
              "& .MuiSelect-icon": {
                color: w(i.data.arrowColor || s.textColor || s.iconColor)
              }
            },
            children: r.map((t, l) => n.jsx(X, {
              value: l,
              sx: K(t.background),
              children: n.jsxs(q, {
                direction: "row",
                spacing: t.icon ? 1 : 0,
                sx: {
                  alignItems: "center"
                },
                children: [
                  n.jsx(A, {
                    alt: "",
                    src: t.icon,
                    style: {
                      position: "relative",
                      top: `calc(0px - ${t.iconYOffset})`,
                      right: `calc(0px - ${t.iconXOffset})`,
                      height: t.iconSize,
                      ...E(t.icon, t.iconColor, t.forceColorMask)
                    }
                  }),
                  n.jsx(O, {
                    component: f,
                    variant: "subtitle2",
                    sx: {
                      whiteSpace: "pre-wrap",
                      fontSize: t.valueSize,
                      textAlign: "left",
                      background: u(t.textColor),
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: u(t.textColor) ? "transparent" : t.textColor,
                      textTransform: "none",
                      width: "100%",
                      height: "100%",
                      flexGrow: 1,
                      alignContent: "center"
                    },
                    contentEditable: "false",
                    dangerouslySetInnerHTML: {
                      __html: t.label ?? ""
                    }
                  })
                ]
              })
            }, String(t.value)))
          })
        })
      ]
    });
  }
  _ = class extends P {
    static getWidgetInfo() {
      return {
        id: "tplSelectCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "SelectCollectionWidget",
        visWidgetLabel: "select_collection_widget",
        visOrder: 8,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...S({
                groupName: ""
              })
            ]
          },
          {
            name: "select_collection",
            label: "group_select_collection",
            fields: [
              ...U([
                "boolean",
                "number",
                "string",
                "mixed"
              ]),
              ...$(),
              ...J()
            ]
          },
          {
            name: "values",
            label: "values",
            indexFrom: 1,
            indexTo: "values_count",
            fields: [
              ...S({
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
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-select.png"
      };
    }
    getWidgetInfo() {
      return _.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(e, a) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(e) {
      super.renderWidgetBody(e);
      const a = {
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, L(this.wrapContent(n.jsx(Q, {})), a);
    }
  };
});
export {
  __tla,
  _ as default
};
