import { j as t, M as W, n as p, T as k, i as y, I as M, s as O, B as A, G as H, __tla as __tla_0 } from "./usePopoverPositioning-BqDLZSOn.js";
import { o as V, h as R, C as d, c as _, b as f, D as b, a as F, u as E, g as z, d as L, S as P, e as $, w as U, __tla as __tla_1 } from "./useData-Crq-Rx8l.js";
import { v as n, R as N, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as G, __tla as __tla_3 } from "./Close-BceXwG1O.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
let T;
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
  })()
]).then(async () => {
  const X = () => [
    {
      name: "view",
      label: "view",
      type: "select-views",
      multiple: false
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(d, {})
    },
    {
      name: "dialogAutoClose",
      label: "dialog_auto_close",
      type: "slider",
      min: 0,
      max: 3e4,
      step: 100
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(d, {})
    },
    {
      name: "dialogId",
      type: "id",
      label: "oid",
      tooltip: "dialog_set_oid_tooltip",
      onChange: V([
        "boolean"
      ], "dialogId")
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(d, {})
    },
    {
      name: "dialogHeaderAsTitle",
      label: "dialog_header_as_title",
      type: "checkbox",
      default: false
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(d, {})
    },
    {
      name: "dialogWidth",
      label: "dialog_width",
      type: "slider",
      min: 1,
      max: 100,
      default: 100,
      step: 1
    },
    {
      name: "dialogHeight",
      label: "dialog_height",
      type: "slider",
      min: 1,
      max: 100,
      default: 100,
      step: 1
    },
    {
      name: "dialogInPixel",
      label: "dialog_in_pixel",
      type: "checkbox",
      default: false
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(d, {})
    },
    R({
      name: "dialogBackgroundColor",
      label: "background_color",
      fallbackFields: [
        ""
      ]
    }),
    {
      label: "",
      type: "custom",
      component: () => t.jsx(d, {
        dividerText: "dialog_button"
      })
    },
    {
      name: "dialogText",
      label: "dialog_text",
      type: "html",
      default: ""
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(d, {})
    },
    {
      name: "dialogCloseButtonTop",
      label: "dialog_close_button_top",
      type: "checkbox",
      default: false
    },
    {
      name: "dialogCloseButtonBottom",
      label: "dialog_close_button_bottom",
      type: "checkbox",
      default: false
    },
    {
      name: "dialogCloseButtonColor",
      label: "dialog_close_button_color",
      type: "color"
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(d, {})
    },
    {
      name: "onlyIcon",
      label: "only_icon",
      type: "checkbox",
      default: false,
      hidden: "data.onlyText"
    },
    {
      name: "onlyText",
      label: "only_text",
      type: "checkbox",
      default: false,
      hidden: "data.onlyIcon"
    }
  ];
  function Y({ open: u, handleClose: l, widget: e, data: i, getWidgetView: a }) {
    var _a;
    const x = n.useRef(null), [c, r] = n.useState(null), o = (_a = x.current) == null ? void 0 : _a.header;
    n.useEffect(() => {
      e.data.dialogHeaderAsTitle && o && c && (e.data.dialogHeaderAsTitle && (o.style.width = "0px", o.style.height = "0px"), c.innerHTML = i.header, c.style.height = "auto", c.style.width = "auto");
    }, [
      o,
      c,
      i.header,
      e.data.dialogHeaderAsTitle
    ]);
    const g = t.jsx(M, {
      sx: {
        alignSelf: "flex-end",
        filter: "brightness(1.5)",
        color: (s) => e.data.dialogCloseButtonColor || i.frameBackgroundColor || s.palette.background.default
      },
      "aria-label": "delete",
      onClick: l,
      children: t.jsx(G, {})
    });
    return t.jsx(W, {
      onClose: l,
      open: u,
      sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: e.data.dialogBackgroundColor || "inherit"
      },
      children: t.jsx(p, {
        sx: {
          width: e.data.dialogInPixel ? `${e.data.dialogWidth}px` : `${e.data.dialogWidth}%`,
          height: e.data.dialogInPixel ? `${e.data.dialogHeight}px` : `${e.data.dialogHeight}%`
        },
        children: t.jsxs(_, {
          ref: x,
          data: i,
          sx: {
            flexDirection: "column",
            background: i.backgroundColor || i.background
          },
          children: [
            t.jsxs(p, {
              sx: {
                position: "relative",
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                p: e.data.dialogCloseButtonTop || !e.data.dialogHeaderAsTitle ? 0 : 2
              },
              children: [
                t.jsx(p, {
                  sx: {
                    position: "absolute",
                    left: 0,
                    width: "100%"
                  },
                  children: t.jsx(k, {
                    ref: r,
                    noWrap: true,
                    variant: "body2",
                    sx: {
                      fontSize: i.headerSize,
                      px: e.data.dialogCloseButtonTop ? 4 : 0,
                      background: f(i.textColor),
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: f(i.textColor) ? "transparent" : i.textColor
                    }
                  })
                }),
                e.data.dialogCloseButtonTop && g
              ]
            }),
            t.jsx(t.Fragment, {
              children: e.data.dialogCloseButtonTop && t.jsx(b, {
                sx: {
                  width: "100%",
                  opacity: "0.5",
                  background: (s) => i.frameBackgroundColor || s.palette.background.default
                }
              })
            }),
            t.jsx(p, {
              sx: {
                "::-webkit-scrollbar-track": {
                  background: i.frameBackgroundColor && y(i.frameBackgroundColor, 0.5)
                },
                "::-webkit-scrollbar-thumb": {
                  opacity: "0.5",
                  background: i.frameBackgroundColor && y(i.frameBackgroundColor, 0.7)
                },
                position: "relative",
                overflow: "auto",
                width: "100%",
                height: "100%"
              },
              children: a(e.data.view || "", {
                style: {}
              })
            }),
            t.jsxs(t.Fragment, {
              children: [
                e.data.dialogCloseButtonBottom && t.jsx(b, {
                  sx: {
                    width: "100%",
                    opacity: "0.5",
                    background: (s) => i.frameBackgroundColor || s.palette.background.default
                  }
                }),
                e.data.dialogCloseButtonBottom && g
              ]
            })
          ]
        })
      })
    });
  }
  const q = 1e4, J = 60, K = 1e3, Q = O(A)({
    width: "100% !important",
    height: "100% !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }), Z = {
    overflow: "hidden",
    p: 0.5,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, ee = {
    width: "100%",
    height: "100%",
    display: "flex"
  };
  function te(u) {
    const l = String(u);
    if (!u || l === "" || l === "0") return 0;
    if (l === "true") return q;
    let e = parseInt(l, 10);
    return e < J && (e *= 1e3), e || K;
  }
  function oe() {
    var _a, _b;
    const [u, l] = n.useState(false), e = n.useRef(null), i = n.useContext(F), { widget: a, widget: { data: x }, getWidgetView: c, setValue: r } = i, { data: o, oidValue: g } = E("dialogId"), s = (_a = a.data.dialogIdObject) == null ? void 0 : _a._id, j = ((_b = a.data.dialogIdObject) == null ? void 0 : _b.type) === "boolean" || !a.data.oid || a.data.oid === "nothing_selected";
    n.useEffect(() => () => {
      e.current && clearTimeout(e.current);
    }, []);
    const h = n.useCallback(() => {
      if (e.current) return;
      const C = te(a.data.dialogAutoClose);
      if (C === 0) {
        l(true);
        return;
      }
      e.current = setTimeout(() => {
        e.current = null, s && r(s, false), l(false);
      }, C), l(true);
    }, [
      s,
      r,
      a.data.dialogAutoClose
    ]), m = n.useCallback(() => {
      e.current && (clearTimeout(e.current), e.current = null), s && r(s, false), l(false);
    }, [
      s,
      r
    ]);
    n.useEffect(() => {
      g != null && (g ? h() : m());
    }, [
      g,
      h,
      m
    ]);
    const S = n.useCallback(() => {
      s && r(s, true), h();
    }, [
      s,
      r,
      h
    ]), v = n.useMemo(() => a.data.onlyIcon || !a.data.onlyText && !a.data.onlyIcon, [
      a.data.onlyIcon,
      a.data.onlyText
    ]), B = n.useMemo(() => a.data.onlyText || !a.data.onlyText && !a.data.onlyIcon, [
      a.data.onlyText,
      a.data.onlyIcon
    ]), I = n.useMemo(() => ({
      "& .MuiTouchRipple-root span": {
        color: o.iconColor
      }
    }), [
      o.iconColor
    ]), w = n.useMemo(() => ({
      position: "relative",
      objectFit: "contain",
      top: `calc(0px - ${o.iconYOffset})`,
      right: `calc(0px - ${o.iconXOffset})`,
      width: o.iconSizeOnly,
      height: o.iconSizeOnly,
      ...z(o.icon, o.iconColor, o.forceColorMask ?? false)
    }), [
      o.iconYOffset,
      o.iconXOffset,
      o.iconSizeOnly,
      o.icon,
      o.iconColor,
      o.forceColorMask
    ]), D = n.useMemo(() => ({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      p: 0.5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: o.valueSize,
      textTransform: "none",
      background: f(o.textColorActive || o.textColor),
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: f(o.textColor) ? "transparent" : o.textColor
    }), [
      o.valueSize,
      o.textColorActive,
      o.textColor
    ]);
    return t.jsxs(t.Fragment, {
      children: [
        t.jsx(Y, {
          open: u,
          handleClose: m,
          widget: a,
          data: o,
          getWidgetView: c
        }),
        t.jsxs(_, {
          isValidType: j,
          data: o,
          children: [
            t.jsx(L, {
              data: o,
              widget: a
            }),
            t.jsx(p, {
              sx: ee,
              children: t.jsxs(Q, {
                onClick: S,
                sx: I,
                children: [
                  v ? t.jsx(p, {
                    sx: Z,
                    children: t.jsx(P, {
                      alt: "",
                      src: o.icon,
                      style: w
                    })
                  }) : null,
                  B ? t.jsx(k, {
                    variant: "body2",
                    sx: D,
                    dangerouslySetInnerHTML: {
                      __html: x.dialogText || ""
                    }
                  }) : null
                ]
              })
            })
          ]
        })
      ]
    });
  }
  const le = N.memo(oe);
  T = class extends H {
    static getWidgetInfo() {
      return {
        id: "tplDialogCollectionWidget",
        visSet: "vis-2-widgets-collection",
        visSetLabel: "widgets_collection",
        visName: "DialogCollectionWidget",
        visWidgetLabel: "dialog_collection_widget",
        visOrder: 8,
        visAttrs: [
          {
            name: "common",
            fields: [
              ...$({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "dialog",
            label: "group_dialog",
            fields: [
              ...X()
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: "100px",
          position: "relative"
        },
        visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-dialog.png"
      };
    }
    getWidgetInfo() {
      return T.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
    }
    onRxStyleChanged() {
    }
    onStateUpdated(l, e) {
    }
    componentDidMount() {
      super.componentDidMount();
    }
    renderWidgetBody(l) {
      super.renderWidgetBody(l);
      const e = {
        id: l.id,
        refService: l.refService,
        style: l.style,
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
        getWidgetView: this.getWidgetView.bind(this),
        wrappedContent: this.wrappedCollectionContent
      };
      return l.widget.data.noCard || l.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, U(this.wrapContent(t.jsx(le, {})), e);
    }
  };
});
export {
  __tla,
  T as default
};
