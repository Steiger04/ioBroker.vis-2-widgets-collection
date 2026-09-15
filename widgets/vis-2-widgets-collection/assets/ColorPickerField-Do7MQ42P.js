import { d as T, j as e, r as _, B as i, T as x, I as B, ab as R, __tla as __tla_0 } from "./tinycolor-CLG1zgRY.js";
import { C as S, __tla as __tla_1 } from "./Clear-Dcx2GRO0.js";
import { v as t, __tla as __tla_2 } from "./vis2CollectionWidget__loadShare__react__loadShare__-Cz8-6BjL.js";
import { u as P, G as w, C as E, __tla as __tla_3 } from "./usePopoverPositioning-BenXbV4b.js";
let V, O;
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
  O = T(e.jsx("path", {
    d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
  }), "DragIndicator");
  V = function({ value: d, onChange: l, label: m, overridden: f, presets: o, error: a }) {
    const s = _(), [c, p] = t.useState(null), [u, h] = t.useState(d), r = t.useRef(null), { anchorOrigin: g, transformOrigin: b, maxHeight: C, setContentRef: v, popoverActionRef: j } = P(c, !!c), k = !!c;
    t.useEffect(() => {
      h(d);
    }, [
      d
    ]), t.useEffect(() => () => {
      r.current !== null && clearTimeout(r.current);
    }, []);
    const y = t.useCallback((n) => {
      h(n), r.current !== null && clearTimeout(r.current), r.current = setTimeout(() => {
        r.current = null, l(n);
      }, 150);
    }, [
      l
    ]), I = t.useCallback((n) => {
      n.stopPropagation(), r.current !== null && (clearTimeout(r.current), r.current = null), l("");
    }, [
      l
    ]);
    return e.jsxs(i, {
      "data-theme-error": a ? true : void 0,
      children: [
        e.jsxs(i, {
          sx: {
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 1,
            py: 0.5,
            cursor: "pointer",
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: s.palette.action.hover
            },
            transition: "background-color 150ms"
          },
          onClick: (n) => p(n.currentTarget),
          children: [
            e.jsx(x, {
              variant: "body2",
              color: a ? "error" : "text.secondary",
              sx: {
                userSelect: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
              },
              children: m
            }),
            e.jsxs(i, {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.5
              },
              children: [
                e.jsx(i, {
                  sx: {
                    width: 22,
                    height: 22,
                    borderRadius: "4px",
                    background: u || "transparent",
                    border: u ? `1px solid ${a ? s.palette.error.main : s.palette.divider}` : `1px dashed ${s.palette.text.disabled}`
                  }
                }),
                f ? e.jsx(B, {
                  size: "small",
                  onClick: I,
                  title: w.t("theme_studio_reset_color"),
                  sx: {
                    p: 0.25
                  },
                  children: e.jsx(S, {
                    fontSize: "inherit"
                  })
                }) : null
              ]
            })
          ]
        }),
        a ? e.jsx(x, {
          variant: "caption",
          color: "error",
          sx: {
            display: "block",
            mt: -0.25,
            pb: 0.5
          },
          children: a
        }) : null,
        e.jsx(R, {
          action: j,
          open: k,
          anchorEl: c,
          onClose: () => p(null),
          anchorOrigin: g,
          transformOrigin: b,
          slotProps: {
            paper: {
              elevation: 0,
              sx: {
                p: "9px",
                borderRadius: "6px",
                backgroundColor: "rgb(32,32,32)",
                boxSizing: "border-box",
                maxHeight: C,
                overflowX: "hidden",
                overflowY: "auto"
              }
            }
          },
          children: e.jsx(i, {
            ref: v,
            sx: {
              borderRadius: "6px"
            },
            children: e.jsx(E, {
              value: u || "#ffffff",
              onChange: y,
              hidePresets: !o,
              presets: o,
              hideInputs: !o,
              hideEyeDrop: !o,
              hideInputType: !o,
              hideColorTypeBtns: !!o,
              hideGradientControls: !!o,
              hideAdvancedSliders: !!o,
              hideColorGuide: !!o
            })
          })
        })
      ]
    });
  };
});
export {
  V as C,
  O as D,
  __tla
};
