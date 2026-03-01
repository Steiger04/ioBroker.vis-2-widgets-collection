import { j as n, N as M, C, F as W, Q as T, n as B, q as F, x as O, y as P, o as f, R as D, K as w, S as R, v as G, T as N, w as u, i as b, G as z, z as S, A, E, __tla as __tla_0 } from "./useData-CoMv8b7s.js";
import { u as y, d as L, __tla as __tla_1 } from "./useValueState-CqWHZ0NH.js";
import { v as d, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { M as H, __tla as __tla_3 } from "./MenuItem-BadMCyai.js";
import { S as U, __tla as __tla_4 } from "./Stack-CzOOYs5P.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_5 } from "./listItemTextClasses-CJ06hn_z.js";
let k;
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
  const $ = () => [
    {
      type: "custom",
      component: () => n.jsx(C, {
        dividerText: "selection"
      })
    },
    {
      name: "cid",
      type: "id",
      label: "cid",
      onChange: M([
        "boolean",
        "number",
        "string",
        "mixed"
      ], "cid")
    },
    {
      type: "custom",
      component: () => n.jsx(C, {
        dividerText: "arrow"
      })
    },
    {
      name: "arrowColor",
      label: "arrow_color",
      default: "",
      type: "custom",
      fallbackFields: [
        ""
      ],
      noGradient: true,
      component: (i, e, a, o) => n.jsx(W, {
        field: i,
        data: e,
        onDataChange: a,
        props: o
      })
    }
  ];
  function q(i) {
    const e = u(i), a = e ? w(i) : void 0, o = a ? b(a, 0.5) : i ? b(i, 0.5) : void 0;
    return {
      background: e,
      bgcolor: e ? "transparent" : i,
      "&.Mui-selected": {
        background: e,
        bgcolor: e ? void 0 : i
      },
      "&.Mui-selected:hover": {
        background: e ? o : void 0,
        bgcolor: e ? void 0 : o
      },
      "&:hover": {
        background: e ? o : void 0,
        bgcolor: e ? void 0 : o
      }
    };
  }
  function K() {
    const i = d.useRef(null), { width: e = 300 } = T(i == null ? void 0 : i.current), a = d.useContext(B), { widget: o } = a, p = o.data.cidObject, j = o.data.oidObject, { data: r, states: s } = F("oid"), { value: c, updateValue: g } = y("oid"), { updateValue: m } = y("cid"), _ = j == null ? void 0 : j.type, I = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(_ || ""), x = d.useMemo(() => {
      if (c == null) return -1;
      const t = String(c);
      return s.findIndex((l) => String(l.value) === t);
    }, [
      s,
      c
    ]), V = d.useCallback((t) => {
      const l = Number(t.target.value);
      if (l < 0 || l >= s.length) return;
      const h = s[l];
      if ((h == null ? void 0 : h.value) === void 0) return;
      const { value: v } = h;
      p && m(v), g(v);
    }, [
      s,
      p,
      m,
      g
    ]);
    return n.jsxs(O, {
      isValidType: I,
      data: r,
      oidValue: c,
      children: [
        n.jsx(P, {
          data: r,
          widget: o
        }),
        n.jsx(f, {
          ref: i,
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: n.jsx(D, {
            variant: "standard",
            disableUnderline: true,
            value: x !== -1 ? x : "",
            onChange: V,
            MenuProps: {
              slotProps: {
                backdrop: {
                  style: {
                    backgroundColor: "transparent !important"
                  }
                },
                root: {
                  sx: {
                    maxWidth: e,
                    mt: 0.3,
                    "& .MuiList-root": {
                      py: 0
                    }
                  }
                },
                paper: o.data.noCard ? {
                  sx: {
                    "--Paper-overlay": "none !important",
                    "--Paper-shadow": "none !important",
                    boxShadow: "none !important",
                    background: r.frameBackground || "transparent"
                  }
                } : {
                  sx: {
                    background: r.frameBackground || void 0
                  }
                }
              }
            },
            sx: {
              width: "100%",
              height: "100%",
              maxWidth: `calc(${e}px - 10%)`,
              "& .MuiSelect-icon": {
                color: w(o.data.arrowColor || r.textColor || r.iconColor)
              }
            },
            children: s.map((t, l) => n.jsx(H, {
              value: l,
              sx: q(t.background),
              children: n.jsxs(U, {
                direction: "row",
                spacing: t.icon ? 1 : 0,
                sx: {
                  alignItems: "center"
                },
                children: [
                  n.jsx(R, {
                    alt: "",
                    src: t.icon,
                    style: {
                      position: "relative",
                      top: `calc(0px - ${t.iconYOffset})`,
                      right: `calc(0px - ${t.iconXOffset})`,
                      height: t.iconSize,
                      ...G(t.icon, t.iconColor, t.forceColorMask)
                    }
                  }),
                  n.jsx(N, {
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
  k = class extends z {
    static getWidgetInfo() {
      return {
        id: "tplSelectCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "SelectCollectionWidget",
        visWidgetLabel: "select_collection_widget",
        visOrder: 7,
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
              ...A([
                "boolean",
                "number",
                "string",
                "mixed"
              ]),
              ...L(),
              ...$()
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
      return k.getWidgetInfo();
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, E(this.wrapContent(n.jsx(K, {})), a);
    }
  };
});
export {
  __tla,
  k as default
};
