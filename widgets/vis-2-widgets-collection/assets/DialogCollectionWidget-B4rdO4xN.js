import { j as e, C as c, M as S, x as g, E as v, T as A, D as _, o as j, I as T, v as I, z as w, s as W, A as D, n as V, H, J as O, O as R, __tla as __tla_0 } from "./commonFields-DH-obq-U.js";
import { v as r, __tla as __tla_1 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { u as z, __tla as __tla_2 } from "./useHtmlValue-Dcwl_hqT.js";
import { C as P, __tla as __tla_3 } from "./Close-BMt36a-T.js";
import "./_commonjsHelpers-Cpj98o6Y.js";
import "./vis2CollectionWidget__mf_v__runtimeInit__mf_v__-Cugi9Gwb.js";
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
  })()
]).then(async () => {
  const $ = () => [
    {
      name: "view",
      label: "view",
      type: "select-views",
      multiple: false
    },
    {
      label: "",
      type: "custom",
      component: () => e.jsx(c, {})
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
      component: () => e.jsx(c, {})
    },
    {
      name: "oid",
      type: "id",
      label: "oid",
      tooltip: "dialog_set_oid_tooltip"
    },
    {
      label: "",
      type: "custom",
      component: () => e.jsx(c, {})
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
      component: () => e.jsx(c, {})
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
      component: () => e.jsx(c, {})
    },
    {
      name: "dialogBackgroundColor",
      label: "background_color",
      type: "color"
    },
    {
      label: "",
      type: "custom",
      component: () => e.jsx(c, {
        dividerText: "dialog_button"
      })
    },
    {
      name: "value",
      label: "dialog_text",
      type: "html",
      default: ""
    },
    {
      label: "",
      type: "custom",
      component: () => e.jsx(c, {})
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
      component: () => e.jsx(c, {})
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
  function F({ open: f, handleClose: i, widget: t, data: l, getWidgetView: a }) {
    var _a;
    const h = r.useRef(null), [s, o] = r.useState(null), d = (_a = h.current) == null ? void 0 : _a.header;
    r.useEffect(() => {
      t.data.dialogHeaderAsTitle && d && s && (t.data.dialogHeaderAsTitle && (d.style.width = "0px", d.style.height = "0px"), s.innerHTML = l.header, s.style.height = "auto", s.style.width = "auto");
    }, [
      d,
      s,
      l.header,
      t.data.dialogHeaderAsTitle
    ]);
    const p = e.jsx(T, {
      sx: {
        alignSelf: "flex-end",
        filter: "brightness(1.5)",
        color: (n) => t.data.dialogCloseButtonColor || l.frameBackgroundColor || n.palette.background.default
      },
      "aria-label": "delete",
      onClick: i,
      children: e.jsx(P, {})
    });
    return e.jsx(S, {
      onClose: i,
      open: f,
      sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: t.data.dialogBackgroundColor || "inherit"
      },
      children: e.jsx(g, {
        sx: {
          width: t.data.dialogInPixel ? `${t.data.dialogWidth}px` : `${t.data.dialogWidth}%`,
          height: t.data.dialogInPixel ? `${t.data.dialogHeight}px` : `${t.data.dialogHeight}%`
        },
        children: e.jsxs(v, {
          ref: h,
          data: l,
          sx: {
            flexDirection: "column",
            background: l.backgroundColor || l.background
          },
          children: [
            e.jsxs(g, {
              sx: {
                position: "relative",
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                p: t.data.dialogCloseButtonTop || !t.data.dialogHeaderAsTitle ? 0 : 2
              },
              children: [
                e.jsx(g, {
                  sx: {
                    position: "absolute",
                    left: 0,
                    width: "100%"
                  },
                  children: e.jsx(A, {
                    ref: o,
                    noWrap: true,
                    variant: "body2",
                    sx: {
                      fontSize: l.headerSize,
                      color: l.textColor,
                      px: t.data.dialogCloseButtonTop ? 4 : 0
                    }
                  })
                }),
                t.data.dialogCloseButtonTop && p
              ]
            }),
            e.jsx(e.Fragment, {
              children: t.data.dialogCloseButtonTop && e.jsx(_, {
                sx: {
                  width: "100%",
                  opacity: "0.5",
                  background: (n) => l.frameBackgroundColor || n.palette.background.default
                }
              })
            }),
            e.jsx(g, {
              sx: {
                "::-webkit-scrollbar-track": {
                  background: l.frameBackgroundColor && j(l.frameBackgroundColor, 0.5)
                },
                "::-webkit-scrollbar-thumb": {
                  opacity: "0.5",
                  background: l.frameBackgroundColor && j(l.frameBackgroundColor, 0.7)
                },
                position: "relative",
                overflow: "auto",
                width: "100%",
                height: "100%"
              },
              children: a(t.data.view || "", {
                style: {}
              })
            }),
            e.jsxs(e.Fragment, {
              children: [
                t.data.dialogCloseButtonBottom && e.jsx(_, {
                  sx: {
                    width: "100%",
                    opacity: "0.5",
                    background: (n) => l.frameBackgroundColor || n.palette.background.default
                  }
                }),
                t.data.dialogCloseButtonBottom && p
              ]
            })
          ]
        })
      })
    });
  }
  const M = W(V)({
    width: "100% !important",
    height: "100% !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  });
  function E() {
    const [f, i] = r.useState(false), t = r.useRef(null), l = r.useContext(I), { widget: a, getWidgetView: h, setValue: s } = l, { data: o, oidValue: d } = w("oid"), p = a.data.oidObject, n = p == null ? void 0 : p._id, B = (p == null ? void 0 : p.type) === "boolean" || !a.data.oid || a.data.oid === "nothing_selected", x = r.useCallback(() => {
      if (t.current) return;
      const C = a.data.dialogAutoClose, m = String(C);
      if (!C || m === "" || m === "0") {
        i(true);
        return;
      }
      let u;
      m === "true" ? u = 1e4 : u = parseInt(m, 10), u < 60 && (u *= 1e3), u = u || 1e3, t.current = setTimeout(() => {
        t.current = null, n && s(n, false), i(false);
      }, u), i(true);
    }, [
      n,
      s,
      a.data.dialogAutoClose
    ]), y = r.useCallback(() => {
      t.current && (clearTimeout(t.current), t.current = null), n && s(n, false), i(false);
    }, [
      n,
      s
    ]), b = z(d, a, o);
    return r.useEffect(() => {
      d != null && (d ? x() : y());
    }, [
      d,
      x,
      y
    ]), e.jsxs(e.Fragment, {
      children: [
        e.jsx(F, {
          open: f,
          handleClose: y,
          widget: a,
          data: o,
          getWidgetView: h
        }),
        e.jsx(v, {
          isValidType: B,
          data: o,
          children: e.jsx(g, {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex"
            },
            children: e.jsxs(M, {
              onClick: () => {
                n && s(n, true), x();
              },
              sx: {
                "& .MuiTouchRipple-root span": {
                  color: o.iconColor
                }
              },
              children: [
                a.data.onlyIcon || !a.data.onlyText && !a.data.onlyIcon ? e.jsx(g, {
                  sx: {
                    overflow: "hidden",
                    p: 0.5,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  },
                  children: e.jsx("img", {
                    alt: "",
                    src: o.icon || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    style: {
                      position: "relative",
                      objectFit: "contain",
                      top: `calc(0px - ${o.iconYOffset})`,
                      right: `calc(0px - ${o.iconXOffset})`,
                      width: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                      height: typeof o.iconSizeOnly == "number" && `calc(100% * ${o.iconSizeOnly} / 100)` || "100%",
                      ...D(o.icon, o.iconColor)
                    }
                  })
                }) : null,
                a.data.onlyText || !a.data.onlyText && !a.data.onlyIcon ? e.jsx(A, {
                  variant: "body2",
                  sx: {
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    p: 0.5,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: o.valueSize,
                    color: o.textColor,
                    textTransform: "none"
                  },
                  dangerouslySetInnerHTML: {
                    __html: b !== void 0 ? String(b) : ""
                  }
                }) : null
              ]
            })
          })
        })
      ]
    });
  }
  k = class extends H {
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
              ...O({
                groupName: "",
                allFields: true
              })
            ]
          },
          {
            name: "dialog",
            label: "group_dialog",
            fields: [
              ...$()
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
      return k.getWidgetInfo();
    }
    propertiesUpdate() {
    }
    onRxDataChanged() {
      this.propertiesUpdate();
    }
    onRxStyleChanged() {
    }
    onStateUpdated(i, t) {
    }
    componentDidMount() {
      super.componentDidMount(), this.propertiesUpdate();
    }
    renderWidgetBody(i) {
      super.renderWidgetBody(i);
      const t = {
        id: i.id,
        refService: i.refService,
        style: i.style,
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
      return i.widget.data.noCard || i.widget.usedInWidget ? this.wrappedCollectionContent = false : this.wrappedCollectionContent = true, R(this.wrapContent(e.jsx(E, {})), t);
    }
  };
});
export {
  __tla,
  k as default
};
