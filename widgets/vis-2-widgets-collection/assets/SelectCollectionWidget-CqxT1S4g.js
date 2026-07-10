import { j as n, n as f, S as W, T as P, i as C, G as T, __tla as __tla_0 } from "./usePopoverPositioning-BZLitN7O.js";
import { o as F, h as O, C as b, m as B, a as D, n as R, u as G, c as H, d as L, l as y, p as N, S as z, g as A, b as u, e as S, f as E, w as U, __tla as __tla_1 } from "./useData-DNdZxCG9.js";
import { u as w, d as $, __tla as __tla_2 } from "./useValueState-CVlBjGB3.js";
import { v as d, __tla as __tla_3 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { M as Y, __tla as __tla_4 } from "./MenuItem-DHIkT0HX.js";
import { S as X, __tla as __tla_5 } from "./Stack-DkmwyHUs.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
import { __tla as __tla_6 } from "./listItemTextClasses-NWuPmlTm.js";
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
      component: () => n.jsx(b, {
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
      component: () => n.jsx(b, {
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
  function J(i) {
    const e = u(i), a = e ? y(i) : void 0, o = a ? C(a, 0.5) : i ? C(i, 0.5) : void 0;
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
    const i = d.useRef(null), { width: e = 300 } = B(i.current), a = d.useContext(D), { widget: o } = a, { borderStyles: k } = R(o.style), p = o.data.cidObject, _ = o.data.oidObject, { data: r, states: s } = G("oid"), { value: c, updateValue: g } = w("oid"), { updateValue: m } = w("cid"), I = _ == null ? void 0 : _.type, M = [
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
    return n.jsxs(H, {
      isValidType: M,
      data: r,
      oidValue: c,
      children: [
        n.jsx(L, {
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
          children: n.jsx(W, {
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
            children: s.map((t, l) => n.jsx(Y, {
              value: l,
              sx: J(t.background),
              children: n.jsxs(X, {
                direction: "row",
                spacing: t.icon ? 1 : 0,
                sx: {
                  alignItems: "center"
                },
                children: [
                  n.jsx(z, {
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
                  n.jsx(P, {
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
      return e.widget.data.noCard || e.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, U(this.wrapContent(n.jsx(K, {})), a);
    }
  };
});
export {
  __tla,
  j as default
};
