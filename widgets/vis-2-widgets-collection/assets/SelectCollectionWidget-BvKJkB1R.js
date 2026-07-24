import { j as i, l as f, S as W, T as P, f as C, G as T, __tla as __tla_0 } from "./usePopoverPositioning-CABAc1cn.js";
import { o as F, f as O, i as b, m as B, C as D, n as R, u as G, b as H, c as L, l as y, p as N, S as z, g as A, a as u, d as S, e as E, w as U, __tla as __tla_1 } from "./useData-CnVVm3xV.js";
import { u as w, d as $, __tla as __tla_2 } from "./useValueState-BG7PYSLA.js";
import { v as d, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { M as Y, __tla as __tla_4 } from "./MenuItem-DqwOKIAB.js";
import { S as X, __tla as __tla_5 } from "./Stack-BqJweZgi.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_6 } from "./listItemTextClasses-DxSc_Sk3.js";
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
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })()
]).then(async () => {
  const q = () => [
    {
      type: "custom",
      component: () => i.jsx(b, {
        dividerText: "selection"
      })
    },
    {
      name: "cid",
      type: "id",
      label: "cid",
      onChange: F([
        "boolean",
        "number",
        "string",
        "mixed"
      ], "cid")
    },
    {
      type: "custom",
      component: () => i.jsx(b, {
        dividerText: "arrow"
      })
    },
    O({
      name: "arrowColor",
      label: "arrow_color",
      fallbackFields: [
        ""
      ],
      noGradient: true
    })
  ];
  function J(n) {
    const e = u(n), a = e ? y(n) : void 0, o = a ? C(a, 0.5) : n ? C(n, 0.5) : void 0;
    return {
      background: e,
      bgcolor: e ? "transparent" : n,
      "&.Mui-selected": {
        background: e,
        bgcolor: e ? void 0 : n
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
    const n = d.useRef(null), { width: e = 300 } = B(n.current), a = d.useContext(D), { widget: o } = a, { borderStyles: k } = R(o.style), p = o.data.cidObject, _ = o.data.oidObject, { data: r, states: s } = G("oid"), { value: c, updateValue: g } = w("oid"), { updateValue: m } = w("cid"), I = _ == null ? void 0 : _.type, M = [
      "boolean",
      "number",
      "string",
      "mixed"
    ].includes(I || ""), h = d.useMemo(() => {
      if (c == null) return -1;
      const t = String(c);
      return s.findIndex((l) => String(l.value) === t);
    }, [
      s,
      c
    ]), V = d.useCallback((t) => {
      const l = Number(t.target.value);
      if (l < 0 || l >= s.length) return;
      const x = s[l];
      if ((x == null ? void 0 : x.value) === void 0) return;
      const { value: v } = x;
      p && m(v), g(v);
    }, [
      s,
      p,
      m,
      g
    ]);
    return i.jsxs(H, {
      isValidType: M,
      data: r,
      oidValue: c,
      children: [
        i.jsx(L, {
          data: r,
          widget: o
        }),
        i.jsx(f, {
          ref: n,
          sx: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          },
          children: i.jsx(W, {
            variant: "standard",
            disableUnderline: true,
            value: h !== -1 ? h : "",
            onChange: V,
            MenuProps: {
              PaperProps: {
                sx: {
                  overflow: "hidden",
                  "& .MuiMenu-list": {
                    maxHeight: "100vh",
                    overflowY: "auto"
                  },
                  ...o.data.noCard && {
                    "--Paper-overlay": "none !important",
                    "--Paper-shadow": "none !important",
                    boxShadow: "none !important"
                  },
                  background: r.frameBackground || (o.data.noCard ? "transparent" : void 0),
                  ...N(k)
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
                color: y(o.data.arrowColor || r.textColor || r.iconColor)
              }
            },
            children: s.map((t, l) => i.jsx(Y, {
              value: l,
              sx: J(t.background),
              children: i.jsxs(X, {
                direction: "row",
                spacing: t.icon ? 1 : 0,
                sx: {
                  alignItems: "center"
                },
                children: [
                  i.jsx(z, {
                    alt: "",
                    src: t.icon,
                    style: {
                      position: "relative",
                      top: `calc(0px - ${t.iconYOffset})`,
                      right: `calc(0px - ${t.iconXOffset})`,
                      height: t.iconSize,
                      ...A(t.icon, t.iconColor, t.forceColorMask)
                    }
                  }),
                  i.jsx(P, {
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
  j = class extends T {
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
              ...E([
                "boolean",
                "number",
                "string",
                "mixed"
              ]),
              ...$(),
              ...q()
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
      return j.getWidgetInfo();
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, U(this.wrapContent(i.jsx(K, {})), a);
    }
  };
});
export {
  __tla,
  j as default
};
