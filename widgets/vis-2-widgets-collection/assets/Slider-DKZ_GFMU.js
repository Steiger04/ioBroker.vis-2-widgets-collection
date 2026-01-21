import { v as y, __tla as __tla_0 } from "./vis2CollectionWidget__loadShare__react__loadShare__-L1bZe9z4.js";
import { S as nt, U as de, l as st, k as lt, V as _e, W as Re, X as Ue, Y as Ke, q as Ie, a as it, g as ct, d as ne, j as T, s as B, u as ut, Z as dt, _ as O, $ as et, m as se, i as F, e as pt, a0 as Ye, a1 as Xe, a2 as Be, o as qe, __tla as __tla_1 } from "./useData-ZqG1ErJr.js";
let Ht, zt;
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
  })()
]).then(async () => {
  const ft = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px"
  };
  function mt(e, t, o = (n, p) => n === p) {
    return e.length === t.length && e.every((n, p) => o(n, t[p]));
  }
  const bt = 2;
  function oe(e, t, o, n, p) {
    return o === 1 ? Math.min(e + t, p) : Math.max(e - t, n);
  }
  function tt(e, t) {
    return e - t;
  }
  function Ge(e, t) {
    const { index: o } = e.reduce((n, p, w) => {
      const N = Math.abs(t - p);
      return n === null || N < n.distance || N === n.distance ? {
        distance: N,
        index: w
      } : n;
    }, null) ?? {};
    return o;
  }
  function Ce(e, t) {
    if (t.current !== void 0 && e.changedTouches) {
      const o = e;
      for (let n = 0; n < o.changedTouches.length; n += 1) {
        const p = o.changedTouches[n];
        if (p.identifier === t.current) return {
          x: p.clientX,
          y: p.clientY
        };
      }
      return false;
    }
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
  function Me(e, t, o) {
    return (e - t) * 100 / (o - t);
  }
  function ht(e, t, o) {
    return (o - t) * e + t;
  }
  function gt(e) {
    if (Math.abs(e) < 1) {
      const o = e.toExponential().split("e-"), n = o[0].split(".")[1];
      return (n ? n.length : 0) + parseInt(o[1], 10);
    }
    const t = e.toString().split(".")[1];
    return t ? t.length : 0;
  }
  function vt(e, t, o) {
    const n = Math.round((e - o) / t) * t + o;
    return Number(n.toFixed(gt(t)));
  }
  function Ze({ values: e, newValue: t, index: o }) {
    const n = e.slice();
    return n[o] = t, n.sort(tt);
  }
  function Pe({ sliderRef: e, activeIndex: t, setActive: o }) {
    var _a, _b, _c;
    const n = Re(e.current);
    (!((_a = e.current) == null ? void 0 : _a.contains(n.activeElement)) || Number((_b = n == null ? void 0 : n.activeElement) == null ? void 0 : _b.getAttribute("data-index")) !== t) && ((_c = e.current) == null ? void 0 : _c.querySelector(`[type="range"][data-index="${t}"]`).focus()), o && o(t);
  }
  function Te(e, t) {
    return typeof e == "number" && typeof t == "number" ? e === t : typeof e == "object" && typeof t == "object" ? mt(e, t) : false;
  }
  const kt = {
    horizontal: {
      offset: (e) => ({
        left: `${e}%`
      }),
      leap: (e) => ({
        width: `${e}%`
      })
    },
    "horizontal-reverse": {
      offset: (e) => ({
        right: `${e}%`
      }),
      leap: (e) => ({
        width: `${e}%`
      })
    },
    vertical: {
      offset: (e) => ({
        bottom: `${e}%`
      }),
      leap: (e) => ({
        height: `${e}%`
      })
    }
  }, yt = (e) => e;
  let Ae;
  function Je() {
    return Ae === void 0 && (typeof CSS < "u" && typeof CSS.supports == "function" ? Ae = CSS.supports("touch-action", "none") : Ae = true), Ae;
  }
  function St(e) {
    const { "aria-labelledby": t, defaultValue: o, disabled: n = false, disableSwap: p = false, isRtl: w = false, marks: N = false, max: f = 100, min: u = 0, name: L, onChange: M, onChangeCommitted: q, orientation: G = "horizontal", rootRef: ze, scale: pe = yt, step: z = 1, shiftStep: Z = 10, tabIndex: fe, value: Ee } = e, E = y.useRef(void 0), [H, J] = y.useState(-1), [We, Q] = y.useState(-1), [me, be] = y.useState(false), ee = y.useRef(0), le = y.useRef(null), [A, C] = nt({
      controlled: Ee,
      default: o ?? u,
      name: "Slider"
    }), v = M && ((a, r, s) => {
      const c = a.nativeEvent || a, i = new c.constructor(c.type, c);
      Object.defineProperty(i, "target", {
        writable: true,
        value: {
          value: r,
          name: L
        }
      }), le.current = r, M(i, r, s);
    }), te = Array.isArray(A);
    let b = te ? A.slice().sort(tt) : [
      A
    ];
    b = b.map((a) => a == null ? u : de(a, u, f));
    const ie = N === true && z !== null ? [
      ...Array(Math.floor((f - u) / z) + 1)
    ].map((a, r) => ({
      value: u + z * r
    })) : N || [], m = ie.map((a) => a.value), [D, re] = y.useState(-1), d = y.useRef(null), _ = st(ze, d), Ne = (a) => (r) => {
      var _a;
      const s = Number(r.currentTarget.getAttribute("data-index"));
      Ke(r.target) && re(s), Q(s), (_a = a == null ? void 0 : a.onFocus) == null ? void 0 : _a.call(a, r);
    }, $e = (a) => (r) => {
      var _a;
      Ke(r.target) || re(-1), Q(-1), (_a = a == null ? void 0 : a.onBlur) == null ? void 0 : _a.call(a, r);
    }, he = (a, r) => {
      const s = Number(a.currentTarget.getAttribute("data-index")), c = b[s], i = m.indexOf(c);
      let l = r;
      if (ie && z == null) {
        const P = m[m.length - 1];
        l >= P ? l = P : l <= m[0] ? l = m[0] : l = l < c ? m[i - 1] : m[i + 1];
      }
      if (l = de(l, u, f), te) {
        p && (l = de(l, b[s - 1] || -1 / 0, b[s + 1] || 1 / 0));
        const P = l;
        l = Ze({
          values: b,
          newValue: l,
          index: s
        });
        let R = s;
        p || (R = l.indexOf(P)), Pe({
          sliderRef: d,
          activeIndex: R
        });
      }
      C(l), re(s), v && !Te(l, A) && v(a, l, s), q && q(a, le.current ?? l);
    }, Ve = (a) => (r) => {
      var _a;
      if ([
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "PageUp",
        "PageDown",
        "Home",
        "End"
      ].includes(r.key)) {
        r.preventDefault();
        const s = Number(r.currentTarget.getAttribute("data-index")), c = b[s];
        let i = null;
        if (z != null) {
          const l = r.shiftKey ? Z : z;
          switch (r.key) {
            case "ArrowUp":
              i = oe(c, l, 1, u, f);
              break;
            case "ArrowRight":
              i = oe(c, l, w ? -1 : 1, u, f);
              break;
            case "ArrowDown":
              i = oe(c, l, -1, u, f);
              break;
            case "ArrowLeft":
              i = oe(c, l, w ? 1 : -1, u, f);
              break;
            case "PageUp":
              i = oe(c, Z, 1, u, f);
              break;
            case "PageDown":
              i = oe(c, Z, -1, u, f);
              break;
            case "Home":
              i = u;
              break;
            case "End":
              i = f;
              break;
          }
        } else if (ie) {
          const l = m[m.length - 1], P = m.indexOf(c), R = [
            w ? "ArrowRight" : "ArrowLeft",
            "ArrowDown",
            "PageDown",
            "Home"
          ], g = [
            w ? "ArrowLeft" : "ArrowRight",
            "ArrowUp",
            "PageUp",
            "End"
          ];
          R.includes(r.key) ? P === 0 ? i = m[0] : i = m[P - 1] : g.includes(r.key) && (P === m.length - 1 ? i = l : i = m[P + 1]);
        }
        i != null && he(r, i);
      }
      (_a = a == null ? void 0 : a.onKeyDown) == null ? void 0 : _a.call(a, r);
    };
    lt(() => {
      var _a;
      n && d.current.contains(document.activeElement) && ((_a = document.activeElement) == null ? void 0 : _a.blur());
    }, [
      n
    ]), n && H !== -1 && J(-1), n && D !== -1 && re(-1);
    const ge = (a) => (r) => {
      var _a;
      (_a = a.onChange) == null ? void 0 : _a.call(a, r), he(r, r.target.valueAsNumber);
    }, U = y.useRef(void 0);
    let Y = G;
    w && G === "horizontal" && (Y += "-reverse");
    const W = ({ finger: a, move: r = false }) => {
      const { current: s } = d, { width: c, height: i, bottom: l, left: P } = s.getBoundingClientRect();
      let R;
      Y.startsWith("vertical") ? R = (l - a.y) / i : R = (a.x - P) / c, Y.includes("-reverse") && (R = 1 - R);
      let g;
      if (g = ht(R, u, f), z) g = vt(g, z, u);
      else {
        const ue = Ge(m, g);
        g = m[ue];
      }
      g = de(g, u, f);
      let V = 0;
      if (te) {
        r ? V = U.current : V = Ge(b, g), p && (g = de(g, b[V - 1] || -1 / 0, b[V + 1] || 1 / 0));
        const ue = g;
        g = Ze({
          values: b,
          newValue: g,
          index: V
        }), p && r || (V = g.indexOf(ue), U.current = V);
      }
      return {
        newValue: g,
        activeIndex: V
      };
    }, K = _e((a) => {
      const r = Ce(a, E);
      if (!r) return;
      if (ee.current += 1, a.type === "mousemove" && a.buttons === 0) {
        $(a);
        return;
      }
      const { newValue: s, activeIndex: c } = W({
        finger: r,
        move: true
      });
      Pe({
        sliderRef: d,
        activeIndex: c,
        setActive: J
      }), C(s), !me && ee.current > bt && be(true), v && !Te(s, A) && v(a, s, c);
    }), $ = _e((a) => {
      const r = Ce(a, E);
      if (be(false), !r) return;
      const { newValue: s } = W({
        finger: r,
        move: true
      });
      J(-1), a.type === "touchend" && Q(-1), q && q(a, le.current ?? s), E.current = void 0, X();
    }), S = _e((a) => {
      if (n) return;
      Je() || a.preventDefault();
      const r = a.changedTouches[0];
      r != null && (E.current = r.identifier);
      const s = Ce(a, E);
      if (s !== false) {
        const { newValue: i, activeIndex: l } = W({
          finger: s
        });
        Pe({
          sliderRef: d,
          activeIndex: l,
          setActive: J
        }), C(i), v && !Te(i, A) && v(a, i, l);
      }
      ee.current = 0;
      const c = Re(d.current);
      c.addEventListener("touchmove", K, {
        passive: true
      }), c.addEventListener("touchend", $, {
        passive: true
      });
    }), X = y.useCallback(() => {
      const a = Re(d.current);
      a.removeEventListener("mousemove", K), a.removeEventListener("mouseup", $), a.removeEventListener("touchmove", K), a.removeEventListener("touchend", $);
    }, [
      $,
      K
    ]);
    y.useEffect(() => {
      const { current: a } = d;
      return a.addEventListener("touchstart", S, {
        passive: Je()
      }), () => {
        a.removeEventListener("touchstart", S), X();
      };
    }, [
      X,
      S
    ]), y.useEffect(() => {
      n && X();
    }, [
      n,
      X
    ]);
    const He = (a) => (r) => {
      var _a;
      if ((_a = a.onMouseDown) == null ? void 0 : _a.call(a, r), n || r.defaultPrevented || r.button !== 0) return;
      r.preventDefault();
      const s = Ce(r, E);
      if (s !== false) {
        const { newValue: i, activeIndex: l } = W({
          finger: s
        });
        Pe({
          sliderRef: d,
          activeIndex: l,
          setActive: J
        }), C(i), v && !Te(i, A) && v(r, i, l);
      }
      ee.current = 0;
      const c = Re(d.current);
      c.addEventListener("mousemove", K, {
        passive: true
      }), c.addEventListener("mouseup", $);
    }, ve = Me(te ? b[0] : u, u, f), x = Me(b[b.length - 1], u, f) - ve, ce = (a = {}) => {
      const r = Ue(a), s = {
        onMouseDown: He(r || {})
      }, c = {
        ...r,
        ...s
      };
      return {
        ...a,
        ref: _,
        ...c
      };
    }, ke = (a) => (r) => {
      var _a;
      (_a = a.onMouseOver) == null ? void 0 : _a.call(a, r);
      const s = Number(r.currentTarget.getAttribute("data-index"));
      Q(s);
    }, ye = (a) => (r) => {
      var _a;
      (_a = a.onMouseLeave) == null ? void 0 : _a.call(a, r), Q(-1);
    }, Se = (a = {}) => {
      const r = Ue(a), s = {
        onMouseOver: ke(r || {}),
        onMouseLeave: ye(r || {})
      };
      return {
        ...a,
        ...r,
        ...s
      };
    }, xe = (a) => ({
      pointerEvents: H !== -1 && H !== a ? "none" : void 0
    });
    let ae;
    return G === "vertical" && (ae = w ? "vertical-rl" : "vertical-lr"), {
      active: H,
      axis: Y,
      axisProps: kt,
      dragging: me,
      focusedThumbIndex: D,
      getHiddenInputProps: (a = {}) => {
        const r = Ue(a), s = {
          onChange: ge(r || {}),
          onFocus: Ne(r || {}),
          onBlur: $e(r || {}),
          onKeyDown: Ve(r || {})
        }, c = {
          ...r,
          ...s
        };
        return {
          tabIndex: fe,
          "aria-labelledby": t,
          "aria-orientation": G,
          "aria-valuemax": pe(f),
          "aria-valuemin": pe(u),
          name: L,
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step === null && e.marks ? "any" : e.step ?? void 0,
          disabled: n,
          ...a,
          ...c,
          style: {
            ...ft,
            direction: w ? "rtl" : "ltr",
            width: "100%",
            height: "100%",
            writingMode: ae
          }
        };
      },
      getRootProps: ce,
      getThumbProps: Se,
      marks: ie,
      open: We,
      range: te,
      rootRef: _,
      trackLeap: x,
      trackOffset: ve,
      values: b,
      getThumbStyle: xe
    };
  }
  const xt = (e) => !e || !Ie(e);
  function wt(e) {
    return ct("MuiSlider", e);
  }
  const I = it("MuiSlider", [
    "root",
    "active",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "disabled",
    "dragging",
    "focusVisible",
    "mark",
    "markActive",
    "marked",
    "markLabel",
    "markLabelActive",
    "rail",
    "sizeSmall",
    "thumb",
    "thumbColorPrimary",
    "thumbColorSecondary",
    "thumbColorError",
    "thumbColorSuccess",
    "thumbColorInfo",
    "thumbColorWarning",
    "track",
    "trackInverted",
    "trackFalse",
    "thumbSizeSmall",
    "valueLabel",
    "valueLabelOpen",
    "valueLabelCircle",
    "valueLabelLabel",
    "vertical"
  ]), Lt = (e) => {
    const { open: t } = e;
    return {
      offset: ne(t && I.valueLabelOpen),
      circle: I.valueLabelCircle,
      label: I.valueLabelLabel
    };
  };
  function Ct(e) {
    const { children: t, className: o, value: n } = e, p = Lt(e);
    return t ? y.cloneElement(t, {
      className: ne(t.props.className)
    }, T.jsxs(y.Fragment, {
      children: [
        t.props.children,
        T.jsx("span", {
          className: ne(p.offset, o),
          "aria-hidden": true,
          children: T.jsx("span", {
            className: p.circle,
            children: T.jsx("span", {
              className: p.label,
              children: n
            })
          })
        })
      ]
    })) : null;
  }
  function Qe(e) {
    return e;
  }
  let Pt, Tt, At, Rt, It, Mt, Et, Nt;
  Pt = B("span", {
    name: "MuiSlider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.root,
        t[`color${F(o.color)}`],
        o.size !== "medium" && t[`size${F(o.size)}`],
        o.marked && t.marked,
        o.orientation === "vertical" && t.vertical,
        o.track === "inverted" && t.trackInverted,
        o.track === false && t.trackFalse
      ];
    }
  })(se(({ theme: e }) => ({
    borderRadius: 12,
    boxSizing: "content-box",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    touchAction: "none",
    WebkitTapHighlightColor: "transparent",
    "@media print": {
      colorAdjust: "exact"
    },
    [`&.${I.disabled}`]: {
      pointerEvents: "none",
      cursor: "default",
      color: (e.vars || e).palette.grey[400]
    },
    [`&.${I.dragging}`]: {
      [`& .${I.thumb}, & .${I.track}`]: {
        transition: "none"
      }
    },
    variants: [
      ...Object.entries(e.palette).filter(Ye()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          color: (e.vars || e).palette[t].main
        }
      })),
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          height: 4,
          width: "100%",
          padding: "13px 0",
          "@media (pointer: coarse)": {
            padding: "20px 0"
          }
        }
      },
      {
        props: {
          orientation: "horizontal",
          size: "small"
        },
        style: {
          height: 2
        }
      },
      {
        props: {
          orientation: "horizontal",
          marked: true
        },
        style: {
          marginBottom: 20
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          height: "100%",
          width: 4,
          padding: "0 13px",
          "@media (pointer: coarse)": {
            padding: "0 20px"
          }
        }
      },
      {
        props: {
          orientation: "vertical",
          size: "small"
        },
        style: {
          width: 2
        }
      },
      {
        props: {
          orientation: "vertical",
          marked: true
        },
        style: {
          marginRight: 44
        }
      }
    ]
  })));
  Tt = B("span", {
    name: "MuiSlider",
    slot: "Rail",
    overridesResolver: (e, t) => t.rail
  })({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    backgroundColor: "currentColor",
    opacity: 0.38,
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          width: "100%",
          height: "inherit",
          top: "50%",
          transform: "translateY(-50%)"
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          height: "100%",
          width: "inherit",
          left: "50%",
          transform: "translateX(-50%)"
        }
      },
      {
        props: {
          track: "inverted"
        },
        style: {
          opacity: 1
        }
      }
    ]
  });
  At = B("span", {
    name: "MuiSlider",
    slot: "Track",
    overridesResolver: (e, t) => t.track
  })(se(({ theme: e }) => ({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    border: "1px solid currentColor",
    backgroundColor: "currentColor",
    transition: e.transitions.create([
      "left",
      "width",
      "bottom",
      "height"
    ], {
      duration: e.transitions.duration.shortest
    }),
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          border: "none"
        }
      },
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          height: "inherit",
          top: "50%",
          transform: "translateY(-50%)"
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          width: "inherit",
          left: "50%",
          transform: "translateX(-50%)"
        }
      },
      {
        props: {
          track: false
        },
        style: {
          display: "none"
        }
      },
      ...Object.entries(e.palette).filter(Ye()).map(([t]) => ({
        props: {
          color: t,
          track: "inverted"
        },
        style: {
          ...e.vars ? {
            backgroundColor: e.vars.palette.Slider[`${t}Track`],
            borderColor: e.vars.palette.Slider[`${t}Track`]
          } : {
            backgroundColor: Xe(e.palette[t].main, 0.62),
            borderColor: Xe(e.palette[t].main, 0.62),
            ...e.applyStyles("dark", {
              backgroundColor: Be(e.palette[t].main, 0.5)
            }),
            ...e.applyStyles("dark", {
              borderColor: Be(e.palette[t].main, 0.5)
            })
          }
        }
      }))
    ]
  })));
  Rt = B("span", {
    name: "MuiSlider",
    slot: "Thumb",
    overridesResolver: (e, t) => {
      const { ownerState: o } = e;
      return [
        t.thumb,
        t[`thumbColor${F(o.color)}`],
        o.size !== "medium" && t[`thumbSize${F(o.size)}`]
      ];
    }
  })(se(({ theme: e }) => ({
    position: "absolute",
    width: 20,
    height: 20,
    boxSizing: "border-box",
    borderRadius: "50%",
    outline: 0,
    backgroundColor: "currentColor",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: e.transitions.create([
      "box-shadow",
      "left",
      "bottom"
    ], {
      duration: e.transitions.duration.shortest
    }),
    "&::before": {
      position: "absolute",
      content: '""',
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      boxShadow: (e.vars || e).shadows[2]
    },
    "&::after": {
      position: "absolute",
      content: '""',
      borderRadius: "50%",
      width: 42,
      height: 42,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    [`&.${I.disabled}`]: {
      "&:hover": {
        boxShadow: "none"
      }
    },
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          width: 12,
          height: 12,
          "&::before": {
            boxShadow: "none"
          }
        }
      },
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          top: "50%",
          transform: "translate(-50%, -50%)"
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          left: "50%",
          transform: "translate(-50%, 50%)"
        }
      },
      ...Object.entries(e.palette).filter(Ye()).map(([t]) => ({
        props: {
          color: t
        },
        style: {
          [`&:hover, &.${I.focusVisible}`]: {
            ...e.vars ? {
              boxShadow: `0px 0px 0px 8px rgba(${e.vars.palette[t].mainChannel} / 0.16)`
            } : {
              boxShadow: `0px 0px 0px 8px ${qe(e.palette[t].main, 0.16)}`
            },
            "@media (hover: none)": {
              boxShadow: "none"
            }
          },
          [`&.${I.active}`]: {
            ...e.vars ? {
              boxShadow: `0px 0px 0px 14px rgba(${e.vars.palette[t].mainChannel} / 0.16)`
            } : {
              boxShadow: `0px 0px 0px 14px ${qe(e.palette[t].main, 0.16)}`
            }
          }
        }
      }))
    ]
  })));
  It = B(Ct, {
    name: "MuiSlider",
    slot: "ValueLabel",
    overridesResolver: (e, t) => t.valueLabel
  })(se(({ theme: e }) => ({
    zIndex: 1,
    whiteSpace: "nowrap",
    ...e.typography.body2,
    fontWeight: 500,
    transition: e.transitions.create([
      "transform"
    ], {
      duration: e.transitions.duration.shortest
    }),
    position: "absolute",
    backgroundColor: (e.vars || e).palette.grey[600],
    borderRadius: 2,
    color: (e.vars || e).palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.25rem 0.75rem",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          transform: "translateY(-100%) scale(0)",
          top: "-10px",
          transformOrigin: "bottom center",
          "&::before": {
            position: "absolute",
            content: '""',
            width: 8,
            height: 8,
            transform: "translate(-50%, 50%) rotate(45deg)",
            backgroundColor: "inherit",
            bottom: 0,
            left: "50%"
          },
          [`&.${I.valueLabelOpen}`]: {
            transform: "translateY(-100%) scale(1)"
          }
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          transform: "translateY(-50%) scale(0)",
          right: "30px",
          top: "50%",
          transformOrigin: "right center",
          "&::before": {
            position: "absolute",
            content: '""',
            width: 8,
            height: 8,
            transform: "translate(-50%, -50%) rotate(45deg)",
            backgroundColor: "inherit",
            right: -8,
            top: "50%"
          },
          [`&.${I.valueLabelOpen}`]: {
            transform: "translateY(-50%) scale(1)"
          }
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          fontSize: e.typography.pxToRem(12),
          padding: "0.25rem 0.5rem"
        }
      },
      {
        props: {
          orientation: "vertical",
          size: "small"
        },
        style: {
          right: "20px"
        }
      }
    ]
  })));
  Mt = B("span", {
    name: "MuiSlider",
    slot: "Mark",
    shouldForwardProp: (e) => et(e) && e !== "markActive",
    overridesResolver: (e, t) => {
      const { markActive: o } = e;
      return [
        t.mark,
        o && t.markActive
      ];
    }
  })(se(({ theme: e }) => ({
    position: "absolute",
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: "currentColor",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          top: "50%",
          transform: "translate(-1px, -50%)"
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          left: "50%",
          transform: "translate(-50%, 1px)"
        }
      },
      {
        props: {
          markActive: true
        },
        style: {
          backgroundColor: (e.vars || e).palette.background.paper,
          opacity: 0.8
        }
      }
    ]
  })));
  zt = B("span", {
    name: "MuiSlider",
    slot: "MarkLabel",
    shouldForwardProp: (e) => et(e) && e !== "markLabelActive",
    overridesResolver: (e, t) => t.markLabel
  })(se(({ theme: e }) => ({
    ...e.typography.body2,
    color: (e.vars || e).palette.text.secondary,
    position: "absolute",
    whiteSpace: "nowrap",
    variants: [
      {
        props: {
          orientation: "horizontal"
        },
        style: {
          top: 30,
          transform: "translateX(-50%)",
          "@media (pointer: coarse)": {
            top: 40
          }
        }
      },
      {
        props: {
          orientation: "vertical"
        },
        style: {
          left: 36,
          transform: "translateY(50%)",
          "@media (pointer: coarse)": {
            left: 44
          }
        }
      },
      {
        props: {
          markLabelActive: true
        },
        style: {
          color: (e.vars || e).palette.text.primary
        }
      }
    ]
  })));
  Et = (e) => {
    const { disabled: t, dragging: o, marked: n, orientation: p, track: w, classes: N, color: f, size: u } = e, L = {
      root: [
        "root",
        t && "disabled",
        o && "dragging",
        n && "marked",
        p === "vertical" && "vertical",
        w === "inverted" && "trackInverted",
        w === false && "trackFalse",
        f && `color${F(f)}`,
        u && `size${F(u)}`
      ],
      rail: [
        "rail"
      ],
      track: [
        "track"
      ],
      mark: [
        "mark"
      ],
      markActive: [
        "markActive"
      ],
      markLabel: [
        "markLabel"
      ],
      markLabelActive: [
        "markLabelActive"
      ],
      valueLabel: [
        "valueLabel"
      ],
      thumb: [
        "thumb",
        t && "disabled",
        u && `thumbSize${F(u)}`,
        f && `thumbColor${F(f)}`
      ],
      active: [
        "active"
      ],
      disabled: [
        "disabled"
      ],
      focusVisible: [
        "focusVisible"
      ]
    };
    return pt(L, wt, N);
  };
  Nt = ({ children: e }) => e;
  Ht = y.forwardRef(function(t, o) {
    const n = ut({
      props: t,
      name: "MuiSlider"
    }), p = dt(), { "aria-label": w, "aria-valuetext": N, "aria-labelledby": f, component: u = "span", components: L = {}, componentsProps: M = {}, color: q = "primary", classes: G, className: ze, disableSwap: pe = false, disabled: z = false, getAriaLabel: Z, getAriaValueText: fe, marks: Ee = false, max: E = 100, min: H = 0, name: J, onChange: We, onChangeCommitted: Q, orientation: me = "horizontal", shiftStep: be = 10, size: ee = "medium", step: le = 1, scale: A = Qe, slotProps: C, slots: v, tabIndex: te, track: b = "normal", value: ie, valueLabelDisplay: m = "off", valueLabelFormat: D = Qe, ...re } = n, d = {
      ...n,
      isRtl: p,
      max: E,
      min: H,
      classes: G,
      disabled: z,
      disableSwap: pe,
      orientation: me,
      marks: Ee,
      color: q,
      size: ee,
      step: le,
      shiftStep: be,
      scale: A,
      track: b,
      valueLabelDisplay: m,
      valueLabelFormat: D
    }, { axisProps: _, getRootProps: Ne, getHiddenInputProps: $e, getThumbProps: he, open: Ve, active: ge, axis: U, focusedThumbIndex: Y, range: W, dragging: K, marks: $, values: S, trackOffset: X, trackLeap: He, getThumbStyle: ve } = St({
      ...d,
      rootRef: o
    });
    d.marked = $.length > 0 && $.some((h) => h.label), d.dragging = K, d.focusedThumbIndex = Y;
    const x = Et(d), ce = (v == null ? void 0 : v.root) ?? L.Root ?? Pt, ke = (v == null ? void 0 : v.rail) ?? L.Rail ?? Tt, ye = (v == null ? void 0 : v.track) ?? L.Track ?? At, Se = (v == null ? void 0 : v.thumb) ?? L.Thumb ?? Rt, xe = (v == null ? void 0 : v.valueLabel) ?? L.ValueLabel ?? It, ae = (v == null ? void 0 : v.mark) ?? L.Mark ?? Mt, we = (v == null ? void 0 : v.markLabel) ?? L.MarkLabel ?? zt, a = (v == null ? void 0 : v.input) ?? L.Input ?? "input", r = (C == null ? void 0 : C.root) ?? M.root, s = (C == null ? void 0 : C.rail) ?? M.rail, c = (C == null ? void 0 : C.track) ?? M.track, i = (C == null ? void 0 : C.thumb) ?? M.thumb, l = (C == null ? void 0 : C.valueLabel) ?? M.valueLabel, P = (C == null ? void 0 : C.mark) ?? M.mark, R = (C == null ? void 0 : C.markLabel) ?? M.markLabel, g = (C == null ? void 0 : C.input) ?? M.input, V = O({
      elementType: ce,
      getSlotProps: Ne,
      externalSlotProps: r,
      externalForwardedProps: re,
      additionalProps: {
        ...xt(ce) && {
          as: u
        }
      },
      ownerState: {
        ...d,
        ...r == null ? void 0 : r.ownerState
      },
      className: [
        x.root,
        ze
      ]
    }), ue = O({
      elementType: ke,
      externalSlotProps: s,
      ownerState: d,
      className: x.rail
    }), rt = O({
      elementType: ye,
      externalSlotProps: c,
      additionalProps: {
        style: {
          ..._[U].offset(X),
          ..._[U].leap(He)
        }
      },
      ownerState: {
        ...d,
        ...c == null ? void 0 : c.ownerState
      },
      className: x.track
    }), je = O({
      elementType: Se,
      getSlotProps: he,
      externalSlotProps: i,
      ownerState: {
        ...d,
        ...i == null ? void 0 : i.ownerState
      },
      className: x.thumb
    }), at = O({
      elementType: xe,
      externalSlotProps: l,
      ownerState: {
        ...d,
        ...l == null ? void 0 : l.ownerState
      },
      className: x.valueLabel
    }), De = O({
      elementType: ae,
      externalSlotProps: P,
      ownerState: d,
      className: x.mark
    }), Oe = O({
      elementType: we,
      externalSlotProps: R,
      ownerState: d,
      className: x.markLabel
    }), ot = O({
      elementType: a,
      getSlotProps: $e,
      externalSlotProps: g,
      ownerState: d
    });
    return T.jsxs(ce, {
      ...V,
      children: [
        T.jsx(ke, {
          ...ue
        }),
        T.jsx(ye, {
          ...rt
        }),
        $.filter((h) => h.value >= H && h.value <= E).map((h, k) => {
          const Fe = Me(h.value, H, E), Le = _[U].offset(Fe);
          let j;
          return b === false ? j = S.includes(h.value) : j = b === "normal" && (W ? h.value >= S[0] && h.value <= S[S.length - 1] : h.value <= S[0]) || b === "inverted" && (W ? h.value <= S[0] || h.value >= S[S.length - 1] : h.value >= S[0]), T.jsxs(y.Fragment, {
            children: [
              T.jsx(ae, {
                "data-index": k,
                ...De,
                ...!Ie(ae) && {
                  markActive: j
                },
                style: {
                  ...Le,
                  ...De.style
                },
                className: ne(De.className, j && x.markActive)
              }),
              h.label != null ? T.jsx(we, {
                "aria-hidden": true,
                "data-index": k,
                ...Oe,
                ...!Ie(we) && {
                  markLabelActive: j
                },
                style: {
                  ...Le,
                  ...Oe.style
                },
                className: ne(x.markLabel, Oe.className, j && x.markLabelActive),
                children: h.label
              }) : null
            ]
          }, k);
        }),
        S.map((h, k) => {
          const Fe = Me(h, H, E), Le = _[U].offset(Fe), j = m === "off" ? Nt : xe;
          return T.jsx(j, {
            ...!Ie(j) && {
              valueLabelFormat: D,
              valueLabelDisplay: m,
              value: typeof D == "function" ? D(A(h), k) : D,
              index: k,
              open: Ve === k || ge === k || m === "on",
              disabled: z
            },
            ...at,
            children: T.jsx(Se, {
              "data-index": k,
              ...je,
              className: ne(x.thumb, je.className, ge === k && x.active, Y === k && x.focusVisible),
              style: {
                ...Le,
                ...ve(k),
                ...je.style
              },
              children: T.jsx(a, {
                "data-index": k,
                "aria-label": Z ? Z(k) : w,
                "aria-valuenow": A(h),
                "aria-labelledby": f,
                "aria-valuetext": fe ? fe(A(h), k) : N,
                value: S[k],
                ...ot
              })
            })
          }, k);
        })
      ]
    });
  });
});
export {
  Ht as S,
  __tla,
  zt as a
};
