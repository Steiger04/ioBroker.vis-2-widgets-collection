import { j as t, a7 as W, C as c, O as M, M as O, w as p, E as k, T as _, A as f, D as y, o as b, I as A, v as H, y as V, z as R, G as E, s as z, S as F, n as P, H as L, J as $, N, __tla as __tla_0 } from "./useData-Dl8i4AuM.js";
import { v as n, R as U, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { C as G, __tla as __tla_2 } from "./Close-CSuoqqUw.js";
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
      component: () => t.jsx(c, {})
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
      component: () => t.jsx(c, {})
    },
    {
      name: "dialogId",
      type: "id",
      label: "oid",
      tooltip: "dialog_set_oid_tooltip",
      onChange: W([
        "boolean"
      ], "dialogId")
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(c, {})
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
      component: () => t.jsx(c, {})
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
      component: () => t.jsx(c, {})
    },
    {
      name: "dialogBackgroundColor",
      label: "background_color",
      default: "",
      type: "custom",
      fallbackFields: [
        ""
      ],
      noGradient: false,
      component: (r, l, e, a) => t.jsx(M, {
        field: r,
        data: l,
        onDataChange: e,
        props: a
      })
    },
    {
      label: "",
      type: "custom",
      component: () => t.jsx(c, {
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
      component: () => t.jsx(c, {})
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
      component: () => t.jsx(c, {})
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
  function Y({ open: r, handleClose: l, widget: e, data: a, getWidgetView: i }) {
    var _a;
    const x = n.useRef(null), [u, d] = n.useState(null), o = (_a = x.current) == null ? void 0 : _a.header;
    n.useEffect(() => {
      e.data.dialogHeaderAsTitle && o && u && (e.data.dialogHeaderAsTitle && (o.style.width = "0px", o.style.height = "0px"), u.innerHTML = a.header, u.style.height = "auto", u.style.width = "auto");
    }, [
      o,
      u,
      a.header,
      e.data.dialogHeaderAsTitle
    ]);
    const g = t.jsx(A, {
      sx: {
        alignSelf: "flex-end",
        filter: "brightness(1.5)",
        color: (s) => e.data.dialogCloseButtonColor || a.frameBackgroundColor || s.palette.background.default
      },
      "aria-label": "delete",
      onClick: l,
      children: t.jsx(G, {})
    });
    return t.jsx(O, {
      onClose: l,
      open: r,
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
        children: t.jsxs(k, {
          ref: x,
          data: a,
          sx: {
            flexDirection: "column",
            background: a.backgroundColor || a.background
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
                  children: t.jsx(_, {
                    ref: d,
                    noWrap: true,
                    variant: "body2",
                    sx: {
                      fontSize: a.headerSize,
                      px: e.data.dialogCloseButtonTop ? 4 : 0,
                      background: f(a.textColor),
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: f(a.textColor) ? "transparent" : a.textColor
                    }
                  })
                }),
                e.data.dialogCloseButtonTop && g
              ]
            }),
            t.jsx(t.Fragment, {
              children: e.data.dialogCloseButtonTop && t.jsx(y, {
                sx: {
                  width: "100%",
                  opacity: "0.5",
                  background: (s) => a.frameBackgroundColor || s.palette.background.default
                }
              })
            }),
            t.jsx(p, {
              sx: {
                "::-webkit-scrollbar-track": {
                  background: a.frameBackgroundColor && b(a.frameBackgroundColor, 0.5)
                },
                "::-webkit-scrollbar-thumb": {
                  opacity: "0.5",
                  background: a.frameBackgroundColor && b(a.frameBackgroundColor, 0.7)
                },
                position: "relative",
                overflow: "auto",
                width: "100%",
                height: "100%"
              },
              children: i(e.data.view || "", {
                style: {}
              })
            }),
            t.jsxs(t.Fragment, {
              children: [
                e.data.dialogCloseButtonBottom && t.jsx(y, {
                  sx: {
                    width: "100%",
                    opacity: "0.5",
                    background: (s) => a.frameBackgroundColor || s.palette.background.default
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
  const J = 1e4, q = 60, K = 1e3, Q = z(P)({
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
  function te(r) {
    const l = String(r);
    if (!r || l === "" || l === "0") return 0;
    if (l === "true") return J;
    let e = parseInt(l, 10);
    return e < q && (e *= 1e3), e || K;
  }
  function oe() {
    var _a, _b;
    const [r, l] = n.useState(false), e = n.useRef(null), a = n.useContext(H), { widget: i, widget: { data: x }, getWidgetView: u, setValue: d } = a, { data: o, oidValue: g } = V("dialogId"), s = (_a = i.data.dialogIdObject) == null ? void 0 : _a._id, T = ((_b = i.data.dialogIdObject) == null ? void 0 : _b.type) === "boolean" || !i.data.oid || i.data.oid === "nothing_selected";
    n.useEffect(() => () => {
      e.current && clearTimeout(e.current);
    }, []);
    const h = n.useCallback(() => {
      if (e.current) return;
      const C = te(i.data.dialogAutoClose);
      if (C === 0) {
        l(true);
        return;
      }
      e.current = setTimeout(() => {
        e.current = null, s && d(s, false), l(false);
      }, C), l(true);
    }, [
      s,
      d,
      i.data.dialogAutoClose
    ]), m = n.useCallback(() => {
      e.current && (clearTimeout(e.current), e.current = null), s && d(s, false), l(false);
    }, [
      s,
      d
    ]);
    n.useEffect(() => {
      g != null && (g ? h() : m());
    }, [
      g,
      h,
      m
    ]);
    const S = n.useCallback(() => {
      s && d(s, true), h();
    }, [
      s,
      d,
      h
    ]), v = n.useMemo(() => i.data.onlyIcon || !i.data.onlyText && !i.data.onlyIcon, [
      i.data.onlyIcon,
      i.data.onlyText
    ]), B = n.useMemo(() => i.data.onlyText || !i.data.onlyText && !i.data.onlyIcon, [
      i.data.onlyText,
      i.data.onlyIcon
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
      ...R(o.icon, o.iconColor, o.forceColorMask ?? false)
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
          open: r,
          handleClose: m,
          widget: i,
          data: o,
          getWidgetView: u
        }),
        t.jsxs(k, {
          isValidType: T,
          data: o,
          children: [
            t.jsx(E, {
              data: o,
              widget: i
            }),
            t.jsx(p, {
              sx: ee,
              children: t.jsxs(Q, {
                onClick: S,
                sx: I,
                children: [
                  v ? t.jsx(p, {
                    sx: Z,
                    children: t.jsx(F, {
                      alt: "",
                      src: o.icon,
                      style: w
                    })
                  }) : null,
                  B ? t.jsx(_, {
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
  const le = U.memo(oe);
  j = class extends L {
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
      return j.getWidgetInfo();
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
      return l.widget.data.noCard || l.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, N(this.wrapContent(t.jsx(le, {})), e);
    }
  };
});
export {
  __tla,
  j as default
};
