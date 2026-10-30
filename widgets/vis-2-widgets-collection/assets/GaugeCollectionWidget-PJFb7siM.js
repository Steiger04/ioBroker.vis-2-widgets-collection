import { h as $, m as ia, o as Ra, l as Pe, e as Da, j as Fa, g as re, i as oa } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__242393638373206__loadShare__shared-ClxoeJ8S.js";
import { C as za, e as Ga, B as La, G as Ua } from "./usePopoverPositioning-C1_MhytU.js";
import { l as D, m as M, n as Ne, b as Z, o as we, p as ke, e as je, r as Xa, f as Ya, k as qa, u as Ha, C as Za, c as la } from "./useData-uC1Kpd-M.js";
import { g as $a, C as Ja, S as Ka, c as Qa } from "./CollectionBaseImage-DkYiHZqN.js";
import { u as et } from "./useOidValue-BvUo9TJr.js";
import { c as Ee } from "./_commonjsHelpers-Cpj98o6Y.js";
import "./vite-preload-helper-PPVm8Dsz.js";
const ga = () => [D("gauge_basic_options"), { name: "gaugeType", label: "gauge_type", type: "select", options: [{ value: "linear", label: "linear" }, { value: "radial", label: "radial" }], default: "linear", noTranslation: true }, { name: "gaugeMinValue", type: "number", label: "gauge_min_value", step: 1 }, { name: "gaugeMaxValue", type: "number", label: "gauge_max_value", step: 1 }, { name: "gaugePadding", type: "number", label: "gauge_padding", default: 8, step: 1, min: 0 }, { name: "gaugeIconFit", type: "select", label: "gauge_icon_fit", options: [{ value: "contain", label: "contain" }, { value: "cover", label: "cover" }, { value: "fill", label: "fill" }], default: "contain", noTranslation: true }, D("gauge_linear_borders_options", { hidden: M("gaugeType", "linear") }), { name: "gaugeBorderRadius", type: "number", label: "gauge_border_radius", default: 0, step: 1, min: 0, hidden: M("gaugeType", "linear") }, D("gauge_linear_progress_bar_options", { hidden: M("gaugeType", "linear") }), { name: "gaugeBarBeginCircle", type: "number", label: "gauge_bar_begin_circle", default: 30, step: 1, min: 0, hidden: M("gaugeType", "linear") }, { name: "gaugeBarLength", type: "number", label: "gauge_bar_length", default: 85, step: 1, min: 0, hidden: M("gaugeType", "linear") }, D("gauge_linear_coloring_options", { hidden: M("gaugeType", "linear") }), { name: "gaugeColorBarEnd", type: "color", label: "gauge_color_bar_end", default: "", hidden: M("gaugeType", "linear") }, { name: "gaugeColorBarProgressEnd", type: "color", label: "gauge_color_bar_progress_end", default: "", hidden: M("gaugeType", "linear") }, D("gauge_linear_element_positioning_options", { hidden: M("gaugeType", "linear") }), { name: "gaugeTickSide", type: "select", label: "gauge_tick_side", options: Ne, default: "both", noTranslation: true, hidden: M("gaugeType", "linear") }, { name: "gaugeNeedleSide", type: "select", label: "gauge_needle_side", options: Ne, default: "both", noTranslation: true, hidden: M("gaugeType", "linear") }, { name: "gaugeNumberSide", type: "select", label: "gauge_number_side", options: Ne, default: "both", noTranslation: true, hidden: M("gaugeType", "linear") }, D("gauge_linear_ticks_bar_options", { hidden: M("gaugeType", "linear") }), { name: "gaugeTicksWidth", type: "number", label: "gauge_ticks_width", default: 10, step: 1, min: 0, hidden: M("gaugeType", "linear") }, { name: "gaugeTicksWidthMinor", type: "number", label: "gauge_ticks_width_minor", default: 5, step: 1, min: 0, hidden: M("gaugeType", "linear") }, { name: "gaugeTicksPadding", type: "number", label: "gauge_ticks_padding", default: 5, step: 1, min: 0, hidden: M("gaugeType", "linear") }, D("gauge_radial_ticks_bar_options", { hidden: M("gaugeType", "radial") }), { name: "gaugeTicksAngle", type: "number", label: "gauge_ticks_angle", default: 270, step: 1, min: 0, max: 360, hidden: M("gaugeType", "radial") }, { name: "gaugeStartAngle", type: "number", label: "gauge_start_angle", default: 45, step: 1, min: 0, max: 360, hidden: M("gaugeType", "radial") }, D("gauge_radial_coloring_options", { hidden: M("gaugeType", "radial") }), { name: "gaugeColorNeedleCircleOuter", type: "color", label: "gauge_color_needle_circle_outer", default: "#f0f0f0", hidden: M("gaugeType", "radial") }, { name: "gaugeColorNeedleCircleOuterEnd", type: "color", label: "gauge_color_needle_circle_outer_end", default: "#ccc", hidden: M("gaugeType", "radial") }, { name: "gaugeColorNeedleCircleInner", type: "color", label: "gauge_color_needle_circle_inner", default: "#e8e8e8", hidden: M("gaugeType", "radial") }, { name: "gaugeColorNeedleCircleInnerEnd", type: "color", label: "gauge_color_needle_circle_inner_end", default: "#f5f5f5", hidden: M("gaugeType", "radial") }, D("gauge_radial_needle_options", { hidden: M("gaugeType", "radial") }), { name: "gaugeNeedleCircleSize", type: "number", label: "gauge_needle_circle_size", default: 10, step: 1, min: 0, hidden: M("gaugeType", "radial") }, { name: "gaugeNeedleCircleInner", type: "checkbox", label: "gauge_needle_circle_inner", default: true, hidden: M("gaugeType", "radial") }, { name: "gaugeNeedleCircleOuter", type: "checkbox", label: "gauge_needle_circle_outer", default: true, hidden: M("gaugeType", "radial") }, D("gauge_radial_animation_options", { hidden: M("gaugeType", "radial") }), { name: "gaugeAnimationTarget", type: "select", label: "gauge_animation_target", options: [{ value: "needle", label: "needle" }, { value: "plate", label: "plate" }], default: "needle", noTranslation: true, hidden: M("gaugeType", "radial") }, { name: "gaugeUseMinPath", type: "checkbox", label: "gauge_use_min_path", default: false, hidden: M("gaugeType", "radial") }, D("gauge_ticks_bar_options"), { name: "gaugeExactTicks", type: "checkbox", label: "gauge_exact_ticks", default: false }, { name: "gaugeMajorTicks", type: "number", label: "gauge_major_ticks", default: 10, step: 1 }, { name: "gaugeMinorTicks", type: "number", label: "gauge_minor_ticks", default: 0, step: 1 }, { name: "gaugeStrokeTicks", type: "checkbox", label: "gauge_stroke_ticks", default: true }, { name: "gaugeMajorTicksInt", type: "number", label: "gauge_major_ticks_int", default: 1, step: 1 }, { name: "gaugeMajorTicksDec", type: "number", label: "gauge_major_ticks_dec", default: 0, step: 1 }, { name: "gaugeHighlightsWidth", type: "number", label: "gauge_highlights_width", default: 15, step: 1 }, { name: "gaugeNumbersMargin", type: "number", label: "gauge_numbers_margin", default: 1, step: 1 }, D("gauge_progress_bar_options"), { name: "gaugeBarWidth", type: "number", label: "gauge_bar_width", default: 20, step: 1, min: 0, max: 50 }, { name: "gaugeBarStrokeWidth", type: "number", label: "gauge_bar_stroke_width", default: 0, step: 1, min: 0 }, { name: "gaugeBarProgress", type: "checkbox", label: "gauge_bar_progress", default: true }, { name: "gaugeBarShadow", type: "number", label: "gauge_bar_shadow", default: 0, step: 1, min: 0 }, D("gauge_animation_options"), { name: "gaugeAnimation", type: "checkbox", label: "gauge_animation", default: true }, { name: "gaugeAnimationDuration", type: "number", label: "gauge_animation_duration", default: 500, step: 1, min: 0 }, { name: "gaugeAnimationRule", type: "select", label: "gauge_animation_rule", options: [{ value: "linear", label: "linear" }, { value: "quad", label: "quad" }, { value: "quint", label: "quint" }, { value: "cycle", label: "cycle" }, { value: "bounce", label: "bounce" }, { value: "elastic", label: "elastic" }, { value: "dequad", label: "dequad" }, { value: "dequint", label: "dequint" }, { value: "decycle", label: "decycle" }, { value: "debounce", label: "debounce" }, { value: "delastic", label: "delastic" }], default: "cycle", noTranslation: true }, { name: "gaugeAnimatedValue", type: "checkbox", label: "gauge_animated_value", default: false }, { name: "gaugeAnimateOnInit", type: "checkbox", label: "gauge_animate_on_init", default: false }, D("gauge_coloring_options"), { name: "gaugeColorPlate", type: "color", label: "gauge_color_plate", default: "rgba(0,0,0,0)" }, { name: "gaugeColorPlateEnd", type: "color", label: "gauge_color_plate_end", default: "rgba(0,0,0,0)" }, Z({ name: "gaugeColorMajorTicks", label: "gauge_color_major_ticks", noGradient: true, terminal: "text", inheritTextStyle: true }), Z({ name: "gaugeColorMinorTicks", label: "gauge_color_minor_ticks", noGradient: true, terminal: "text", inheritTextStyle: true }), Z({ name: "gaugeColorStrokeTicks", label: "gauge_color_stroke_ticks", noGradient: true, terminal: "text", inheritTextStyle: true }), Z({ name: "gaugeColorTitle", label: "gauge_color_title", noGradient: true, terminal: "text", inheritTextStyle: true }), Z({ name: "gaugeColorUnits", label: "gauge_color_units", noGradient: true, terminal: "text", inheritTextStyle: true }), Z({ name: "gaugeColorNumbers", label: "gauge_color_numbers", noGradient: true, terminal: "text", inheritTextStyle: true }), Z({ name: "gaugeColorNeedle", label: "gauge_color_needle", noGradient: true, terminal: "primary" }), Z({ name: "gaugeColorNeedleEnd", label: "gauge_color_needle_end", noGradient: true, terminal: "primary" }), { name: "gaugeColorValueText", type: "color", label: "gauge_color_value_text", default: "#444" }, { name: "gaugeColorValueTextShadow", type: "color", label: "gauge_color_value_text_shadow", default: "rgba(0,0,0,0.3)" }, { name: "gaugeColorBorderShadow", type: "color", label: "gauge_color_border_shadow", default: "rgba(0,0,0,0.5)" }, { name: "gaugeColorBorderOuter", type: "color", label: "gauge_color_border_outer", default: "#ddd" }, { name: "gaugeColorBorderOuterEnd", type: "color", label: "gauge_color_border_outer_end", default: "#aaa" }, { name: "gaugeColorBorderMiddle", type: "color", label: "gauge_color_border_middle", default: "#eee" }, { name: "gaugeColorBorderMiddleEnd", type: "color", label: "gauge_color_border_middle_end", default: "#f0f0f0" }, { name: "gaugeColorBorderInner", type: "color", label: "gauge_color_border_inner", default: "#fafafa" }, { name: "gaugeColorBorderInnerEnd", type: "color", label: "gauge_color_border_inner_end", default: "#ccc" }, { name: "gaugeColorValueBoxRect", type: "color", label: "gauge_color_value_box_rect", default: "#888" }, { name: "gaugeColorValueBoxRectEnd", type: "color", label: "gauge_color_value_box_rect_end", default: "#666" }, { name: "gaugeColorValueBoxBackground", type: "color", label: "gauge_color_value_box_background", default: "#babab2" }, { name: "gaugeColorValueBoxShadow", type: "color", label: "gauge_color_value_box_shadow", default: "rgba(0,0,0,1)" }, { name: "gaugeColorNeedleShadowUp", type: "color", label: "gauge_color_needle_shadow_up", default: "rgba(2,255,255,0.2)" }, { name: "gaugeColorNeedleShadowDown", type: "color", label: "gauge_color_needle_shadow_down", default: "rgba(188,143,143,0.45)" }, { name: "gaugeColorBarStroke", type: "color", label: "gauge_color_bar_stroke", default: "#222" }, { name: "gaugeColorBar", type: "color", label: "gauge_color_bar", default: "#ccc" }, Z({ name: "gaugeColorBarProgress", label: "gauge_color_bar_progress", noGradient: true, terminal: "primary" }), { name: "gaugeHighlightsLineCap", type: "select", label: "gauge_highlights_line_cap", options: [{ value: "butt", label: "butt" }, { value: "round", label: "round" }, { value: "square", label: "square" }], default: "butt", noTranslation: true }, D("gauge_needle_configuration_options"), { name: "gaugeNeedle", type: "checkbox", label: "gauge_needle", default: true }, { name: "gaugeNeedleShadow", type: "checkbox", label: "gauge_needle_shadow", default: true }, { name: "gaugeNeedleType", type: "select", label: "gauge_needle_type", options: [{ value: "arrow", label: "arrow" }, { value: "line", label: "line" }], default: "arrow", noTranslation: true }, { name: "gaugeNeedleStart", type: "number", label: "gauge_needle_start", default: 5, step: 1, min: 0, max: 100 }, { name: "gaugeNeedleEnd", type: "number", label: "gauge_needle_end", default: 85, step: 1, min: 0, max: 100 }, { name: "gaugeNeedleWidth", type: "number", label: "gauge_needle_width", default: 4 }, D("gauge_borders_options"), { name: "gaugeBorders", type: "checkbox", label: "gauge_borders", default: true }, { name: "gaugeBorderOuterWidth", type: "number", label: "gauge_border_outer_width", default: 3, min: 0 }, { name: "gaugeBorderMiddleWidth", type: "number", label: "gauge_border_middle_width", default: 3, min: 0 }, { name: "gaugeBorderInnerWidth", type: "number", label: "gauge_border_inner_width", default: 3, min: 0 }, { name: "gaugeBorderShadowWidth", type: "number", label: "gauge_border_shadow_width", default: 3, min: 0 }, D("gauge_value_box_options"), { name: "gaugeValueBox", type: "checkbox", label: "gauge_value_box", default: true }, { name: "gaugeValueBoxStroke", type: "number", label: "gauge_value_box_stroke", default: 5, step: 1, min: 0 }, { name: "gaugeValueBoxWidth", type: "number", label: "gauge_value_box_width", default: 0, step: 1, min: 0 }, { name: "gaugeValueText", type: "text", label: "gauge_value_text", default: "" }, { name: "gaugeValueTextShadow", type: "checkbox", label: "gauge_value_text_shadow", default: true }, { name: "gaugeValueBoxBorderRadius", type: "number", label: "gauge_value_box_border_radius", default: 2.5, step: 0.1, min: 0 }, { name: "gaugeValueInt", type: "number", label: "gauge_value_int", default: 3, step: 1, min: 0 }, { name: "gaugeValueDec", type: "number", label: "gauge_value_dec", default: 2, step: 1, min: 0 }, D("gauge_fonts_customization_options"), { name: "gaugeFontNumbers", type: "fontname", label: "gauge_font_numbers", default: "Arial, Helvetica, sans-serif" }, { name: "gaugeFontTitle", type: "fontname", label: "gauge_font_title", default: "Arial, Helvetica, sans-serif" }, { name: "gaugeFontUnits", type: "fontname", label: "gauge_font_units", default: "Arial, Helvetica, sans-serif" }, { name: "gaugeFontValue", type: "fontname", label: "gauge_font_value", default: "Arial, Helvetica, sans-serif" }, { label: "", name: "allFieldsDivider", type: "custom", component: () => $(je, {}) }, { name: "gaugeFontNumbersSize", type: "number", label: "gauge_font_numbers_size", default: 20, step: 1, min: 0 }, { name: "gaugeFontTitleSize", type: "number", label: "gauge_font_title_size", default: 24, step: 1, min: 0 }, { name: "gaugeFontUnitsSize", type: "number", label: "gauge_font_units_size", default: 22, step: 1, min: 0 }, { name: "gaugeFontValueSize", type: "number", label: "gauge_font_value_size", default: 26, step: 1, min: 0 }, { label: "", name: "allFieldsDivider", type: "custom", component: () => $(je, {}) }, { name: "gaugeFontNumbersStyle", type: "select", label: "gauge_font_numbers_style", options: we, default: "normal", noTranslation: true }, { name: "gaugeFontTitleStyle", type: "select", label: "gauge_font_title_style", options: we, default: "normal", noTranslation: true }, { name: "gaugeFontUnitsStyle", type: "select", label: "gauge_font_units_style", options: we, default: "normal", noTranslation: true }, { name: "gaugeFontValueStyle", type: "select", label: "gauge_font_value_style", options: we, default: "normal", noTranslation: true }, { label: "", name: "allFieldsDivider", type: "custom", component: () => $(je, {}) }, { name: "gaugeFontNumbersWeight", type: "select", label: "gauge_font_numbers_weight", options: ke, default: "normal", noTranslation: true }, { name: "gaugeFontTitleWeight", type: "select", label: "gauge_font_title_weight", options: ke, default: "normal", noTranslation: true }, { name: "gaugeFontUnitsWeight", type: "select", label: "gauge_font_units_weight", options: ke, default: "normal", noTranslation: true }, { name: "gaugeFontValueWeight", type: "select", label: "gauge_font_value_weight", options: ke, default: "normal", noTranslation: true }];
var ha = { exports: {} };
(function(g) {
  (function(m) {
    function W(a) {
      if (Array.isArray(a)) {
        for (var e = 0, t = Array(a.length); e < a.length; e++) t[e] = a[e];
        return t;
      }
      return Array.from(a);
    }
    function P(a, e) {
      if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || typeof e != "object" && typeof e != "function" ? a : e;
    }
    function w(a, e) {
      if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: false, writable: true, configurable: true } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
    }
    function I(a, e) {
      if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function z(a, e) {
      if (e || (e = typeof window > "u" ? Ee : window), e[a] !== void 0) return e[a];
      for (var t = ["webkit", "moz", "ms", "o"], r = 0, n = t.length, i = a.charAt(0).toUpperCase() + a.substr(1); r < n; r++) {
        var o = e[t[r] + i];
        if (o !== void 0) return o;
      }
      return null;
    }
    function L(a, e, t, r, n, i, o) {
      if (typeof r != "function") throw new TypeError("Invalid animation rule:", r);
      var s = a - t, l = s / n, u = 0;
      l > 1 && (l = 1), l !== 1 && (u = r(l), isFinite(u) && !isNaN(u) && (l = u)), e && e(l), s < n ? o.frame = aa(function(d) {
        return L(d, e, t, r, n, i, o);
      }) : (i && i(), o.inProgress = false);
    }
    function F() {
      Array.prototype.constructor.apply(this, arguments);
    }
    function N(a) {
      if (!(a instanceof DOMException && a.result === 2152923147)) throw a;
    }
    function G(a, e) {
      return e.replace(ja, function(t, r) {
        var n = a[r];
        return n !== void 0 ? n : t;
      });
    }
    function ee(a) {
      return a.majorTicks instanceof Array || (a.majorTicks = a.majorTicks ? [a.majorTicks] : []), a.majorTicks.length || (a.majorTicks.push(h.formatMajorTickNumber(a.minValue, a)), a.majorTicks.push(h.formatMajorTickNumber(a.maxValue, a))), [a.tickSide !== "right", a.tickSide !== "left"];
    }
    function xe(a, e, t, r, n, i) {
      a.beginPath(), a.moveTo(e + i, t), a.lineTo(e + r - i, t), a.quadraticCurveTo(e + r, t, e + r, t + i), a.lineTo(e + r, t + n - i), a.quadraticCurveTo(e + r, t + n, e + r - i, t + n), a.lineTo(e + i, t + n), a.quadraticCurveTo(e, t + n, e, t + n - i), a.lineTo(e, t + i), a.quadraticCurveTo(e, t, e + i, t), a.closePath();
    }
    function ne(a, e) {
      var t = e.valueDec, r = e.valueInt, n = 0, i = void 0, o = void 0, s = void 0;
      if (a = parseFloat(a), s = a < 0, a = Math.abs(a), t > 0) {
        for (o = a.toFixed(t).toString().split("."), i = r - o[0].length; n < i; ++n) o[0] = "0" + o[0];
        o = (s ? "-" : "") + o[0] + "." + o[1];
      } else {
        for (o = Math.round(a).toString(), i = r - o.length; n < i; ++n) o = "0" + o;
        o = (s ? "-" : "") + o;
      }
      return o;
    }
    function de(a, e) {
      var t = void 0, r = false;
      return t = e.majorTicksDec === 0 ? Math.round(a).toString() : a.toFixed(e.majorTicksDec), e.majorTicksInt > 1 ? (r = ~t.indexOf("."), ~t.indexOf("-") ? "-" + [e.majorTicksInt + e.majorTicksDec + 2 + (r ? 1 : 0) - t.length].join("0") + t.replace("-", "") : [e.majorTicksInt + e.majorTicksDec + 1 + (r ? 1 : 0) - t.length].join("0") + t) : t;
    }
    function ce(a) {
      return a * Math.PI / 180;
    }
    function ge(a, e) {
      return { x: -a * Math.sin(e), y: a * Math.cos(e) };
    }
    function he(a, e, t, r) {
      var n = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o = a.createLinearGradient(n ? 0 : i, n ? i : 0, n ? 0 : r, n ? r : 0);
      return o.addColorStop(0, e), o.addColorStop(1, t), o;
    }
    function me(a, e) {
      if (arguments.length > 2 && arguments[2] !== void 0 && arguments[2]) return a.restore(), true;
      a.save();
      var t = e.borderShadowWidth;
      return t && (a.shadowBlur = t, a.shadowColor = e.colorBorderShadow), true;
    }
    function ae(a, e) {
      e.needleShadow && (a.shadowOffsetX = 2, a.shadowOffsetY = 2, a.shadowBlur = 10, a.shadowColor = e.colorNeedleShadowDown);
    }
    function J(a, e, t) {
      return a["font" + e + "Style"] + " " + a["font" + e + "Weight"] + " " + a["font" + e + "Size"] * t + "px " + a["font" + e];
    }
    function R(a) {
      a.shadowOffsetX = null, a.shadowOffsetY = null, a.shadowBlur = null, a.shadowColor = "", a.strokeStyle = null, a.lineWidth = 0, a.save();
    }
    function fe(a, e, t, r) {
      e.valueTextShadow && (a.shadowOffsetX = t, a.shadowOffsetY = t, a.shadowBlur = r, a.shadowColor = e.colorValueTextShadow);
    }
    function Te(a, e, t, r, n, i) {
      if (e.valueBox) {
        R(a);
        var o = e.valueDec ? 1 + e.valueDec : 0, s = "9".repeat(Math.max.apply(null, [String(parseInt(t)).length + o].concat(e.majorTicks.map(function(A) {
          return String(parseInt(A, 10)).length + o;
        })))), l = e.valueText || ne(t, e), u = i / 200, d = i / 100, c = 0.4 * d, p = 1.2 * d;
        a.font = J(e, "Value", u), fe(a, e, c, p);
        var v = a.measureText(e.valueText ? l : "-" + ne(Number(s), e)).width;
        R(a);
        var _ = parseFloat(e.fontValueSize) * u + c + p, O = d * parseFloat(e.valueBoxStroke), k = 2 * i - 2 * O, S = v + 10 * d, C = 1.1 * _ + c + p, B = d * e.valueBoxBorderRadius, V = (parseFloat(e.valueBoxWidth) || 0) / 100 * k;
        V > S && (S = V), S > k && (S = k);
        var x = r - S / 2, f = n - C / 2, b = n - 5.75 * d;
        if (a.beginPath(), B ? xe(a, x, f, S, C, B) : a.rect(x, f, S, C), O) {
          var T = a.createRadialGradient(r, b, 10 * d, r, b, 20 * d);
          T.addColorStop(0, e.colorValueBoxRect), T.addColorStop(1, e.colorValueBoxRectEnd), a.strokeStyle = T, a.lineWidth = O, a.stroke();
        }
        e.colorValueBoxShadow && (a.shadowBlur = 1.2 * d, a.shadowColor = e.colorValueBoxShadow), e.colorValueBoxBackground && (a.fillStyle = e.colorValueBoxBackground, a.fill()), a.closePath(), a.restore(), fe(a, e, c, p), a.fillStyle = e.colorValueText, a.textAlign = "center", a.textBaseline = "alphabetic", a.fillText(l, x + S / 2, n + C / 2 - _ / 3), a.restore();
      }
    }
    function Se(a) {
      var e = a.value, t = a.minValue, r = a.maxValue, n = 0.01 * (r - t);
      return { normal: e < t ? t : e > r ? r : e, indented: e < t ? t - n : e > r ? r + n : e };
    }
    function Ce(a, e, t, r, n) {
      t.beginPath(), t.arc(0, 0, X(a), 0, 2 * le, true), t.lineWidth = e, t.strokeStyle = n ? h.linearGradient(t, r, n, a) : r, t.stroke(), t.closePath();
    }
    function be(a, e) {
      var t = U.pixelRatio;
      return a.maxRadius || (a.maxRadius = a.max - e.borderShadowWidth - e.borderOuterWidth * t - e.borderMiddleWidth * t - e.borderInnerWidth * t + (e.borderOuterWidth ? 0.5 : 0) + (e.borderMiddleWidth ? 0.5 : 0) + (e.borderInnerWidth ? 0.5 : 0)), a.maxRadius;
    }
    function Re(a, e) {
      var t = U.pixelRatio, r = e.borderShadowWidth * t, n = a.max - r - e.borderOuterWidth * t / 2, i = n - e.borderOuterWidth * t / 2 - e.borderMiddleWidth * t / 2 + 0.5, o = i - e.borderMiddleWidth * t / 2 - e.borderInnerWidth * t / 2 + 0.5, s = be(a, e), l = void 0, u = false;
      a.save(), e.borderOuterWidth && (u = h.drawShadow(a, e, u), Ce(n, e.borderOuterWidth * t, a, e.colorBorderOuter, e.colorBorderOuterEnd)), e.borderMiddleWidth && (u = h.drawShadow(a, e, u), Ce(i, e.borderMiddleWidth * t, a, e.colorBorderMiddle, e.colorBorderMiddleEnd)), e.borderInnerWidth && (u = h.drawShadow(a, e, u), Ce(o, e.borderInnerWidth * t, a, e.colorBorderInner, e.colorBorderInnerEnd)), h.drawShadow(a, e, u), a.beginPath(), a.arc(0, 0, X(s), 0, 2 * le, true), e.colorPlateEnd ? (l = a.createRadialGradient(0, 0, s / 2, 0, 0, s), l.addColorStop(0, e.colorPlate), l.addColorStop(1, e.colorPlateEnd)) : l = e.colorPlate, a.fillStyle = l, a.fill(), a.closePath(), a.restore();
    }
    function De(a, e) {
      var t = a.max * (parseFloat(e.highlightsWidth) || 0) / 100;
      if (t) {
        var r = X(pe(a, e) - t / 2), n = 0, i = e.highlights.length, o = (e.maxValue - e.minValue) / e.ticksAngle;
        for (a.save(); n < i; n++) {
          var s = e.highlights[n];
          a.beginPath(), a.rotate(ye), a.arc(0, 0, r, h.radians(e.startAngle + (s.from - e.minValue) / o), h.radians(e.startAngle + (s.to - e.minValue) / o), false), a.strokeStyle = s.color, a.lineWidth = t, a.lineCap = e.highlightsLineCap, a.stroke(), a.closePath(), a.restore(), a.save();
        }
      }
    }
    function Fe(a, e) {
      var t = pe(a, e), r = void 0, n = void 0, i = void 0, o = 0, s = 0, l = Math.abs(e.minorTicks) || 0, u = e.ticksAngle / (e.maxValue - e.minValue);
      for (a.lineWidth = U.pixelRatio, a.strokeStyle = e.colorMinorTicks || e.colorStrokeTicks, a.save(), e.exactTicks ? (n = e.maxValue - e.minValue, r = l ? n / l : 0, s = (q.mod(e.majorTicks[0], l) || 0) * u) : r = l * (e.majorTicks.length - 1); o < r; ++o) (i = e.startAngle + s + o * (e.ticksAngle / r)) <= e.ticksAngle + e.startAngle && (a.rotate(h.radians(i)), a.beginPath(), a.moveTo(0, t), a.lineTo(0, t - 0.075 * a.max), Ve(a));
    }
    function pe(a, e) {
      var t = a.max / 100;
      return be(a, e) - 5 * t - (e.barWidth ? 2 * (parseFloat(e.barStrokeWidth) || 0) + ((parseFloat(e.barWidth) || 0) + 5) * t : 0);
    }
    function ze(a, e) {
      h.prepareTicks(e);
      var t = X(pe(a, e)), r = void 0, n = void 0, i = e.majorTicks.length, o = U.pixelRatio;
      for (a.lineWidth = 2 * o, a.save(), n = e.colorMajorTicks instanceof Array ? e.colorMajorTicks : new Array(i).fill(e.colorStrokeTicks || e.colorMajorTicks), r = 0; r < i; ++r) a.strokeStyle = n[r], a.rotate(h.radians(Ge(e, e.exactTicks ? e.majorTicks[r] : r, i))), a.beginPath(), a.moveTo(0, t), a.lineTo(0, t - 0.15 * a.max), Ve(a);
      e.strokeTicks && (a.strokeStyle = e.colorStrokeTicks || n[0], a.rotate(ye), a.beginPath(), a.arc(0, 0, t, h.radians(e.startAngle), h.radians(e.startAngle + e.ticksAngle), false), Ve(a));
    }
    function Ge(a, e, t) {
      if (a.exactTicks) {
        var r = a.ticksAngle / (a.maxValue - a.minValue);
        return a.startAngle + r * (e - a.minValue);
      }
      return a.startAngle + e * (a.ticksAngle / (t - 1));
    }
    function Ve(a) {
      a.stroke(), a.restore(), a.closePath(), a.save();
    }
    function Le(a, e) {
      var t = pe(a, e) - 0.15 * a.max, r = {}, n = 0, i = e.majorTicks.length, o = e.animationTarget !== "needle", s = e.colorNumbers instanceof Array ? e.colorNumbers : new Array(i).fill(e.colorNumbers), l = o ? -(e.value - e.minValue) / (e.maxValue - e.minValue) * e.ticksAngle : 0;
      for (o && (a.save(), a.rotate(-h.radians(l))), a.font = h.font(e, "Numbers", a.max / 200), a.lineWidth = 0, a.textAlign = "center", a.textBaseline = "middle"; n < i; ++n) {
        var u = l + Ge(e, e.exactTicks ? e.majorTicks[n] : n, i), d = a.measureText(e.majorTicks[n]).width, c = e.fontNumbersSize, p = Math.sqrt(d * d + c * c) / 2, v = h.radialPoint(t - p - e.numbersMargin / 100 * a.max, h.radians(u));
        u === 360 && (u = 0), r[u] || (r[u] = true, a.fillStyle = s[n], a.fillText(e.majorTicks[n], v.x, v.y));
      }
      o && a.restore();
    }
    function Ue(a, e) {
      e.title && (a.save(), a.font = h.font(e, "Title", a.max / 200), a.fillStyle = e.colorTitle, a.textAlign = "center", a.fillText(e.title, 0, -a.max / 4.25, 0.8 * a.max), a.restore());
    }
    function Xe(a, e) {
      e.units && (a.save(), a.font = h.font(e, "Units", a.max / 200), a.fillStyle = e.colorUnits, a.textAlign = "center", a.fillText(h.formatContext(e, e.units), 0, a.max / 3.25, 0.8 * a.max), a.restore());
    }
    function Ye(a, e) {
      if (e.needle) {
        var t = e.ticksAngle < 360 ? h.normalizedValue(e).indented : e.value, r = p ? e.startAngle : e.startAngle + (t - e.minValue) / (e.maxValue - e.minValue) * e.ticksAngle;
        e.barStartPosition === "right" && (r = e.startAngle + e.ticksAngle - (t - e.minValue) / (e.maxValue - e.minValue) * e.ticksAngle);
        var n = be(a, e), i = X(n / 100 * e.needleCircleSize), o = X(n / 100 * e.needleCircleSize * 0.75), s = X(n / 100 * e.needleEnd), l = X(e.needleStart ? n / 100 * e.needleStart : 0), u = n / 100 * e.needleWidth, d = n / 100 * e.needleWidth / 2, c = U.pixelRatio, p = e.animationTarget !== "needle";
        a.save(), h.drawNeedleShadow(a, e), a.rotate(h.radians(r)), a.fillStyle = h.linearGradient(a, e.colorNeedle, e.colorNeedleEnd, s - l), e.needleType === "arrow" ? (a.beginPath(), a.moveTo(-d, -l), a.lineTo(-u, 0), a.lineTo(-1 * c, s), a.lineTo(c, s), a.lineTo(u, 0), a.lineTo(d, -l), a.closePath(), a.fill(), a.beginPath(), a.lineTo(-0.5 * c, s), a.lineTo(-1 * c, s), a.lineTo(-u, 0), a.lineTo(-d, -l), a.lineTo(d / 2 * c - 2 * c, -l), a.closePath(), a.fillStyle = e.colorNeedleShadowUp, a.fill()) : (a.beginPath(), a.moveTo(-d, s), a.lineTo(-d, l), a.lineTo(d, l), a.lineTo(d, s), a.closePath(), a.fill()), e.needleCircleSize && (a.restore(), h.drawNeedleShadow(a, e), e.needleCircleOuter && (a.beginPath(), a.arc(0, 0, i, 0, 2 * le, true), a.fillStyle = h.linearGradient(a, e.colorNeedleCircleOuter, e.colorNeedleCircleOuterEnd, i), a.fill(), a.closePath()), e.needleCircleInner && (a.beginPath(), a.arc(0, 0, o, 0, 2 * le, true), a.fillStyle = h.linearGradient(a, e.colorNeedleCircleInner, e.colorNeedleCircleInnerEnd, o), a.fill(), a.closePath()), a.restore());
      }
    }
    function qe(a, e, t) {
      h.drawValueBox(a, e, t, 0, a.max - 0.33 * a.max, a.max);
    }
    function pa(a) {
      var e = a.startAngle, t = a.startAngle + a.ticksAngle, r = e, n = e + (h.normalizedValue(a).normal - a.minValue) / (a.maxValue - a.minValue) * a.ticksAngle;
      if (a.barStartPosition === "middle") {
        var i = 0.5 * (a.minValue + a.maxValue);
        a.value < i ? (r = 180 - (i - h.normalizedValue(a).normal) / (a.maxValue - a.minValue) * a.ticksAngle, n = 180) : (r = 180, n = 180 + (h.normalizedValue(a).normal - i) / (a.maxValue - a.minValue) * a.ticksAngle);
      } else a.barStartPosition === "right" && (r = t - n + e, n = t);
      return { startAngle: r, endAngle: n };
    }
    function He(a, e) {
      var t = a.max / 100, r = be(a, e) - 5 * t, n = parseFloat(e.barStrokeWidth + "") || 0, i = (parseFloat(e.barWidth + "") || 0) * t, o = r - 2 * n - i, s = (r - o) / 2, l = o + s, u = n / l, d = e.startAngle, c = e.startAngle + e.ticksAngle;
      if (a.save(), a.rotate(ye), n && (a.beginPath(), a.arc(0, 0, l, h.radians(d) - u, h.radians(c) + u, false), a.strokeStyle = e.colorBarStroke, a.lineWidth = 2 * s, a.stroke(), a.closePath()), i && (a.beginPath(), a.arc(0, 0, l, h.radians(d), h.radians(c), false), a.strokeStyle = e.colorBar, a.lineWidth = i, a.stroke(), a.closePath(), e.barShadow && (a.beginPath(), a.arc(0, 0, r, h.radians(d), h.radians(c), false), a.clip(), a.beginPath(), a.strokeStyle = e.colorBar, a.lineWidth = 1, a.shadowBlur = e.barShadow, a.shadowColor = e.colorBarShadow, a.shadowOffsetX = 0, a.shadowOffsetY = 0, a.arc(0, 0, r, h.radians(e.startAngle), h.radians(e.startAngle + e.ticksAngle), false), a.stroke(), a.closePath(), a.restore(), a.rotate(ye)), e.barProgress)) {
        var p = pa(e), v = p.startAngle, _ = p.endAngle;
        a.beginPath(), a.arc(0, 0, l, h.radians(v), h.radians(_), false), a.strokeStyle = e.colorBarProgress, a.lineWidth = i, a.stroke(), a.closePath();
      }
      a.restore();
    }
    function Ze(a) {
      return a.options.animatedValue ? a.options.value : a.value;
    }
    function va(a, e, t, r, n, i, o, s) {
      a.beginPath(), a.fillStyle = s ? h.linearGradient(a, o, s, n > i ? n : i, i > n, n > i ? t : r) : o, e > 0 ? h.roundRect(a, t, r, n, i, e) : a.rect(t, r, n, i), a.fill(), a.closePath();
    }
    function We(a, e, t, r, n, i, o, s, l) {
      a.beginPath(), a.lineWidth = e, a.strokeStyle = l ? h.linearGradient(a, s, l, o, true, n) : s, t > 0 ? h.roundRect(a, r, n, i, o, t) : a.rect(r, n, i, o), a.stroke(), a.closePath();
    }
    function _a(a, e, t, r, n, i) {
      var o = U.pixelRatio;
      a.save();
      var s = e.borderRadius * o, l = n - e.borderShadowWidth - e.borderOuterWidth * o, u = l - e.borderOuterWidth * o - e.borderMiddleWidth * o, d = u - e.borderMiddleWidth * o - e.borderInnerWidth * o, c = d - e.borderInnerWidth * o, p = i - e.borderShadowWidth - e.borderOuterWidth * o, v = p - e.borderOuterWidth * o - e.borderMiddleWidth * o, _ = v - e.borderMiddleWidth * o - e.borderInnerWidth * o, O = _ - e.borderInnerWidth * o, k = t - (u - l) / 2, S = k - (d - u) / 2, C = S - (c - d) / 2, B = r - (v - p) / 2, V = B - (_ - v) / 2, x = V - (O - _) / 2, f = 0, b = false;
      return e.borderOuterWidth && (b = h.drawShadow(a, e, b), We(a, e.borderOuterWidth * o, s, t + e.borderOuterWidth * o / 2 - f, r + e.borderOuterWidth * o / 2 - f, l, p, e.colorBorderOuter, e.colorBorderOuterEnd), f += 0.5 * o), e.borderMiddleWidth && (b = h.drawShadow(a, e, b), We(a, e.borderMiddleWidth * o, s -= 1 + 2 * f, k + e.borderMiddleWidth * o / 2 - f, B + e.borderMiddleWidth * o / 2 - f, u + 2 * f, v + 2 * f, e.colorBorderMiddle, e.colorBorderMiddleEnd), f += 0.5 * o), e.borderInnerWidth && (b = h.drawShadow(a, e, b), We(a, e.borderInnerWidth * o, s -= 1 + 2 * f, S + e.borderInnerWidth * o / 2 - f, V + e.borderInnerWidth * o / 2 - f, d + 2 * f, _ + 2 * f, e.colorBorderInner, e.colorBorderInnerEnd), f += 0.5 * o), h.drawShadow(a, e, b), va(a, s, C, x, c + 2 * f, O + 2 * f, e.colorPlate, e.colorPlateEnd), a.restore(), [C, x, c, O];
    }
    function ya(a, e, t, r, n, i) {
      var o = U.pixelRatio, s = i >= n, l = s ? 0.85 * n : i, u = s ? i : n;
      t = s ? y(t + (n - l) / 2) : t;
      var d = !!e.title, c = !!e.units, p = !!e.valueBox, v = void 0, _ = void 0, O = void 0;
      s ? (_ = y(0.05 * u), v = y(0.075 * u), O = y(0.11 * u), d && (u -= v, r += v), c && (u -= _), p && (u -= O)) : (_ = v = y(0.15 * l), d && (l -= v, r += v), c && (l -= _));
      var k = 2 * e.barStrokeWidth, S = e.barBeginCircle ? y(l * e.barBeginCircle / 200 - k / 2) : 0, C = y(l * e.barWidth / 100 - k), B = y(u * e.barLength / 100 - k), V = y((u - B) / 2), x = y(t + (s ? l / 2 : V + S)), f = y(r + (s ? u - V - S + k / 2 : l / 2)), b = !s || e.hasLeft && e.hasRight ? 0 : (e.hasRight ? -1 : 1) * e.ticksWidth / 100 * l, T = s || e.hasLeft && e.hasRight ? 0 : (e.hasRight ? -1 : 1) * e.ticksWidth / 100 * l;
      return a.barDimensions = { isVertical: s, width: l, length: u, barWidth: C, barLength: B, strokeWidth: k, barMargin: V, radius: S, pixelRatio: o, barOffset: null, titleMargin: d ? v : 0, unitsMargin: c ? _ : 0, get ticksLength() {
        return this.barLength - this.barOffset - this.strokeWidth;
      }, X: t + b, Y: r + T, x0: x + b, y0: f + T, baseX: t, baseY: r, ticksPadding: e.ticksPadding / 100 }, a.barDimensions;
    }
    function $e(a, e, t, r, n, i, o) {
      var s = ya(a, e, r, n, i, o), l = s.isVertical, u = s.width, d = s.barWidth, c = s.barLength, p = s.strokeWidth, v = s.barMargin, _ = s.radius, O = s.x0, k = s.y0, S = s.X, C = s.Y, B = c;
      if (a.save(), a.beginPath(), e.barBeginCircle) {
        var V = h.radians(l ? 270 : 0), x = Math.asin(d / 2 / _), f = Math.cos(x), b = Math.sin(x), T = O + (l ? _ * b : _ * f - p / 2), A = l ? k - _ * f : k + _ * b, j = X(l ? A - k : T - O);
        a.barDimensions.barOffset = y(j + _);
        var E = l ? y(O - _ * b) : T, Y = l ? A : y(k - _ * b);
        t === "progress" && (c = a.barDimensions.barOffset + (c - a.barDimensions.barOffset) * (h.normalizedValue(e).normal - e.minValue) / (e.maxValue - e.minValue));
        var H = y(T + c - a.barDimensions.barOffset + p / 2), se = y(A - c + a.barDimensions.barOffset - p / 2);
        a.arc(O, k, _, V + x, V - x), l ? (a.moveTo(T, Y), a.lineTo(T, se), a.lineTo(E, se), a.lineTo(E, Y)) : (a.moveTo(T, Y), a.lineTo(H, Y), a.lineTo(H, A), a.lineTo(T, A));
      } else {
        var Q = y(l ? S + (u - d) / 2 : S + v), na = y(l ? C + c + v : C + (u - d) / 2);
        t === "progress" && (c *= (e.value - e.minValue) / (e.maxValue - e.minValue)), l ? a.rect(Q, na, d, -c) : a.rect(Q, na, c, d);
      }
      t !== "progress" && e.barStrokeWidth && (a.lineWidth = p, a.strokeStyle = e.colorBarStroke, a.stroke()), t !== "progress" && e.colorBar ? (a.fillStyle = e.colorBarEnd ? h.linearGradient(a, e.colorBar, e.colorBarEnd, c, l, l ? C : S) : e.colorBar, a.fill()) : t === "progress" && e.colorBarProgress && (a.fillStyle = e.colorBarProgressEnd ? h.linearGradient(a, e.colorBarProgress, e.colorBarProgressEnd, B, l, l ? C : S) : e.colorBarProgress, a.fill()), a.closePath(), e.barBeginCircle && (a.barDimensions.radius += p), a.barDimensions.barWidth += p, a.barDimensions.barLength += p;
    }
    function wa(a, e, t, r, n, i) {
      $e(a, e, "", t, r, n, i);
    }
    function Je(a, e) {
      return e.needleSide !== a || e.tickSide !== a || e.numberSide !== a;
    }
    function ka(a, e, t, r, n, i) {
      e.barProgress && $e(a, e, "progress", t, r, n, i);
    }
    function xa(a, e) {
      var t = a.barDimensions, r = t.isVertical, n = t.width, i = t.length, o = t.barWidth, s = t.barOffset, l = t.barMargin, u = t.X, d = t.Y, c = t.ticksLength, p = t.ticksPadding, v = n * (parseFloat(e.highlightsWidth) || 0) / 100;
      if (e.highlights && v) {
        var _ = e.tickSide !== "right", O = e.tickSide !== "left", k = 0, S = e.highlights.length, C = (n - o) / 2, B = e.maxValue - e.minValue, V = y(r ? u + C : u + l + s), x = v, f = r ? d + i - l - s : d + C, b = y((e.ticksWidth / 100 + p) * n) + (v - e.ticksWidth / 100 * n), T = y(o + p * n);
        for (a.save(); k < S; k++) {
          var A = e.highlights[k], j = c * X(e.minValue - A.from) / B, E = c * X((A.to - A.from) / B);
          a.beginPath(), a.fillStyle = A.color, r ? (_ && a.rect(V - b, f - j, x, -E), O && a.rect(V + T, f - j, x, -E)) : (_ && a.rect(V + j, f - b, E, x), O && a.rect(V + j, f + T, E, x)), a.fill(), a.closePath();
        }
      }
    }
    function ve(a, e, t, r, n) {
      a.beginPath(), a.moveTo(e, t), a.lineTo(r, n), a.stroke(), a.closePath(), a.save();
    }
    function Ke(a, e, t, r, n, i, o, s, l) {
      var u = a.barDimensions, d = u.isVertical, c = u.length, p = u.barWidth, v = u.barOffset, _ = u.barMargin, O = u.pixelRatio, k = u.width, S = u.X, C = u.Y, B = u.ticksLength, V = u.ticksPadding, x = (k - p) / 2, f = void 0, b = void 0, T = 0, A = t.length, j = void 0, E = l * k, Y = x - V * k, H = x + p + E + V * k, se = e instanceof Array ? e : new Array(t.length).fill(e);
      a.lineWidth = s * O, a.save();
      for (var Q = B / (n - r); T < A; T++) j = t[T], a.strokeStyle = se[T], d ? (b = C + c - _ - v + (r - j) * Q, i && (f = S + Y, ve(a, f, b, y(f - E), b)), o && (f = S + H, ve(a, f, b, y(f - E), b))) : (f = S + _ + v - (r - j) * Q, i && (b = C + Y, ve(a, f, b, f, y(b - E))), o && (b = C + H, ve(a, f, y(b), f, b - E)));
    }
    function Ta(a, e) {
      var t = h.prepareTicks(e), r = ea(t, 2), n = r[0], i = r[1], o = 2, s = (e.maxValue - e.minValue) / (e.majorTicks.length - 1), l = e.colorMajorTicks instanceof Array ? e.colorMajorTicks : new Array(e.majorTicks.length).fill(e.colorStrokeTicks || e.colorMajorTicks);
      if (Ke(a, l, e.exactTicks ? e.majorTicks : e.majorTicks.map(function(E, Y) {
        return e.minValue + s * Y;
      }), e.minValue, e.maxValue, n, i, o, e.ticksWidth / 100), e.strokeTicks) {
        var u = a.barDimensions, d = u.isVertical, c = u.length, p = u.width, v = u.barWidth, _ = u.barMargin, O = u.barOffset, k = u.X, S = u.Y, C = u.ticksLength, B = u.pixelRatio, V = u.ticksPadding, x = (p - v) / 2 + v + V * p, f = (p - v) / 2 - V * p, b = void 0, T = void 0, A = void 0, j = void 0;
        a.strokeStyle = e.colorStrokeTicks || l[0], o *= B, d ? (T = S + c - _ - O + o / 2, j = T - C - o, n && (A = b = y(k + f), _e(a, b, T, A, j)), i && (A = b = y(k + x), _e(a, b, T, A, j))) : (b = k + _ + O - o / 2, A = b + C + o, n && (j = T = y(S + f), _e(a, b, T, A, j)), i && (j = T = y(S + x), _e(a, b, T, A, j)));
      }
    }
    function _e(a, e, t, r, n) {
      a.beginPath(), a.moveTo(e, t), a.lineTo(r, n), a.stroke(), a.closePath();
    }
    function Sa(a, e) {
      var t = h.prepareTicks(e), r = ea(t, 2), n = r[0], i = r[1], o = [], s = e.minValue, l = Math.abs(e.minorTicks) || 0, u = l ? (e.maxValue - e.minValue) / (l * (e.majorTicks.length - 1)) : 0;
      if (l) if (e.exactTicks) for (var d = q.mod(e.majorTicks[0], l) || 0; s < e.maxValue; s += l) d + s < e.maxValue && o.push(d + s);
      else for (; s < e.maxValue; s += u) o.push(s);
      Ke(a, e.colorMinorTicks || e.colorStrokeTicks, o, e.minValue, e.maxValue, n, i, 1, e.ticksWidthMinor / 100);
    }
    function Ca(a, e) {
      var t = a.barDimensions, r = t.isVertical, n = t.length, i = t.width, o = t.barWidth, s = t.barMargin, l = t.barOffset, u = t.X, d = t.Y, c = t.ticksLength, p = t.ticksPadding, v = e.maxValue - e.minValue, _ = v / (e.majorTicks.length - 1), O = e.exactTicks ? e.majorTicks : e.majorTicks.map(function(se, Q) {
        return e.minValue + _ * Q;
      }), k = O.length, S = e.numberSide !== "right", C = e.numberSide !== "left", B = e.fontNumbersSize * i / 200, V = 0, x = (e.ticksWidth / 100 + 2 * p) * i, f = (i - o) / 2 - x, b = (i - o) / 2 + o + x, T = void 0, A = void 0, j = void 0, E = void 0, Y = e.colorNumbers instanceof Array ? e.colorNumbers : new Array(k).fill(e.colorNumbers), H = e.numbersMargin / 100 * i;
      for (a.font = h.font(e, "Numbers", i / 200), a.lineWidth = 0, a.textAlign = "center"; V < k; V++) a.fillStyle = Y[V], E = e.majorTicks[V], j = e.exactTicks ? c * ((O[V] - e.minValue) / v) : V * c / (k - 1), r ? (A = d + n - s - l - j + B / 3, S && (a.textAlign = "right", a.fillText(E, u + f - H, A)), C && (a.textAlign = "left", a.fillText(E, u + b + H, A))) : (a.measureText(E).width, T = u + s + l + j, S && a.fillText(E, T, d + f - H), C && a.fillText(E, T, d + b + B + H));
    }
    function Va(a, e) {
      if (e.title) {
        var t = a.barDimensions, r = t.isVertical, n = t.width, i = t.length, o = t.baseX, s = t.baseY, l = t.titleMargin, u = e.fontTitleSize * n / 200, d = y(o + (r ? n : i) / 2), c = y(s + l / 2 - (r ? u : u / 2) - 0.025 * (r ? i : n));
        a.save(), a.textAlign = "center", a.fillStyle = e.colorTitle, a.font = h.font(e, "Title", n / 200), a.lineWidth = 0, a.fillText(e.title, d, c, r ? n : i);
      }
    }
    function Wa(a, e) {
      if (e.units) {
        var t = a.barDimensions, r = t.isVertical, n = t.width, i = t.length, o = t.baseX, s = t.baseY, l = t.unitsMargin, u = e.fontUnitsSize * n / 200, d = y(o + (r ? n : i) / 2), c = y(s + (r ? i : n) + l / 2 - u / 2);
        a.save(), a.textAlign = "center", a.fillStyle = e.colorUnits, a.font = h.font(e, "Units", n / 200), a.lineWidth = 0, a.fillText(h.formatContext(e, e.units), d, c, r ? n : i);
      }
    }
    function Ba(a, e) {
      if (e.needle) {
        var t = a.barDimensions, r = t.isVertical, n = t.width, i = t.length, o = t.barWidth, s = t.barOffset, l = t.barMargin, u = t.ticksLength, d = t.X, c = t.Y, p = t.ticksPadding, v = e.needleSide !== "right", _ = e.needleSide !== "left", O = u * (h.normalizedValue(e).indented - e.minValue) / (e.maxValue - e.minValue), k = (e.ticksWidth / 100 + p) * n, S = o / 2 + k, C = S * (e.needleEnd / 100), B = void 0, V = void 0, x = void 0, f = void 0, b = e.needleType.toLowerCase() === "arrow" ? Ma : Oa, T = (n - o) / 2, A = S * (e.needleStart / 100), j = T - k - A, E = T + o + k + A;
        a.save(), h.drawNeedleShadow(a, e), r ? (x = y(c + i - l - s - O), v && (B = y(d + j), V = B + C, b(a, e, B, x, V, x, C)), _ && (B = y(d + E), V = B - C, b(a, e, B, x, V, x, C, true))) : (B = y(d + l + s + O), v && (x = y(c + j), f = x + C, b(a, e, B, x, B, f, C)), _ && (x = y(c + E), f = x - C, b(a, e, B, x, B, f, C, true))), a.restore();
      }
    }
    function Qe(a, e, t, r) {
      return e.colorNeedleEnd ? h.linearGradient(a, r ? e.colorNeedleEnd : e.colorNeedle, r ? e.colorNeedle : e.colorNeedleEnd, t, !a.barDimensions.isVertical) : e.colorNeedle;
    }
    function Oa(a, e, t, r, n, i, o, s) {
      a.lineWidth = e.needleWidth, a.strokeStyle = Qe(a, e, o, s), a.beginPath(), a.moveTo(t, r), a.lineTo(n, i), a.stroke(), a.closePath();
    }
    function Ma(a, e, t, r, n, i, o, s) {
      var l = y(0.4 * o), u = o - l, d = t === n, c = e.needleWidth / 2;
      a.fillStyle = Qe(a, e, o, s), a.beginPath(), d ? (r > i && (u *= -1), a.moveTo(t - c, r), a.lineTo(t + c, r), a.lineTo(t + c, r + u), a.lineTo(t, i), a.lineTo(t - c, r + u), a.lineTo(t - c, r)) : (t > n && (u *= -1), a.moveTo(t, r - c), a.lineTo(t, r + c), a.lineTo(t + u, r + c), a.lineTo(n, r), a.lineTo(t + u, r - c), a.lineTo(t, r - c)), a.fill(), a.closePath();
    }
    function Aa(a, e, t, r, n, i, o) {
      var s = (parseFloat(e.fontValueSize) || 0) * i / 200, l = (0.11 * o - s) / 2;
      a.barDimensions.isVertical && h.drawValueBox(a, e, t, r + i / 2, n + o - s - l, i);
    }
    var ea = /* @__PURE__ */ (function() {
      function a(e, t) {
        var r = [], n = true, i = false, o = void 0;
        try {
          for (var s, l = e[Symbol.iterator](); !(n = (s = l.next()).done) && (r.push(s.value), !t || r.length !== t); n = true) ;
        } catch (u) {
          i = true, o = u;
        } finally {
          try {
            !n && l.return && l.return();
          } finally {
            if (i) throw o;
          }
        }
        return r;
      }
      return function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return a(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    })(), Be = function a(e, t, r) {
      e === null && (e = Function.prototype);
      var n = Object.getOwnPropertyDescriptor(e, t);
      if (n === void 0) {
        var i = Object.getPrototypeOf(e);
        return i === null ? void 0 : a(i, t, r);
      }
      if ("value" in n) return n.value;
      var o = n.get;
      if (o !== void 0) return o.call(r);
    }, Pa = function a(e, t, r, n) {
      var i = Object.getOwnPropertyDescriptor(e, t);
      if (i === void 0) {
        var o = Object.getPrototypeOf(e);
        o !== null && a(o, t, r, n);
      } else if ("value" in i && i.writable) i.value = r;
      else {
        var s = i.set;
        s !== void 0 && s.call(n, r);
      }
      return r;
    }, K = /* @__PURE__ */ (function() {
      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e, n.key, n);
        }
      }
      return function(e, t, r) {
        return t && a(e.prototype, t), r && a(e, r), e;
      };
    })();
    Object.assign || Object.defineProperty(Object, "assign", { enumerable: false, configurable: true, writable: true, value: function(a, e) {
      if (a == null) throw new TypeError("Cannot convert first argument to object");
      for (var t = Object(a), r = 1; r < arguments.length; r++) {
        var n = arguments[r];
        if (n != null) for (var i = Object.keys(Object(n)), o = 0, s = i.length; o < s; o++) {
          var l = i[o], u = Object.getOwnPropertyDescriptor(n, l);
          u !== void 0 && u.enumerable && (t[l] = n[l]);
        }
      }
      return t;
    } }), Array.prototype.indexOf || Object.defineProperty(Array.prototype, "indexOf", { value: function(a, e) {
      var t;
      if (this === null) throw new TypeError('"this" is null or not defined');
      var r = Object(this), n = r.length >>> 0;
      if (n === 0) return -1;
      var i = +e || 0;
      if (Math.abs(i) === 1 / 0 && (i = 0), i >= n) return -1;
      for (t = Math.max(i >= 0 ? i : n - Math.abs(i), 0); t < n; ) {
        if (t in r && r[t] === a) return t;
        t++;
      }
      return -1;
    } }), Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", { value: function(a) {
      if (this === null) throw new TypeError("this is null or not defined");
      for (var e = Object(this), t = e.length >>> 0, r = arguments[1], n = r >> 0, i = n < 0 ? Math.max(t + n, 0) : Math.min(n, t), o = arguments[2], s = o === void 0 ? t : o >> 0, l = s < 0 ? Math.max(t + s, 0) : Math.min(s, t); i < l; ) e[i] = a, i++;
      return e;
    } }), typeof window > "u" && (window = typeof Ee > "u" ? {} : Ee);
    var Na = (function() {
      function a() {
        I(this, a), this._events = {}, this.addListener = this.on, this.removeListener = this.off;
      }
      return K(a, [{ key: "emit", value: function(e) {
        if (this._events[e]) {
          for (var t = 0, r = this._events[e].length, n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
          for (; t < r; t++) this._events[e][t] && this._events[e][t].apply(this, i);
        }
      } }, { key: "once", value: function(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        for (var i = 0, o = r.length, s = this; i < o; i++) (function() {
          var l = r[i], u = function d() {
            s.off(e, d), l.apply(s, arguments);
          };
          r[i] = u;
        })();
        this.on.apply(this, [e].concat(r));
      } }, { key: "on", value: function(e) {
        this._events[e] || (this._events[e] = []);
        for (var t = 0, r = arguments.length <= 1 ? 0 : arguments.length - 1; t < r; t++) this._events[e].push(arguments.length <= t + 1 ? void 0 : arguments[t + 1]);
      } }, { key: "off", value: function(e) {
        if (this._events[e]) for (var t = 0, r = arguments.length <= 1 ? 0 : arguments.length - 1; t < r; t++) for (var n = arguments.length <= t + 1 ? void 0 : arguments[t + 1], i = void 0; ~(i = this._events[e].indexOf(n)); ) this._events[e].splice(i, 1);
      } }, { key: "removeAllListeners", value: function(e) {
        delete this._events[e];
      } }, { key: "listeners", get: function() {
        return this._events;
      } }]), a;
    })(), aa = z("requestAnimationFrame") || function(a) {
      return setTimeout(function() {
        return a((/* @__PURE__ */ new Date()).getTime());
      }, 1e3 / 60);
    }, ie = { linear: function(a) {
      return a;
    }, quad: function(a) {
      return Math.pow(a, 2);
    }, dequad: function(a) {
      return 1 - ie.quad(1 - a);
    }, quint: function(a) {
      return Math.pow(a, 5);
    }, dequint: function(a) {
      return 1 - Math.pow(1 - a, 5);
    }, cycle: function(a) {
      return 1 - Math.sin(Math.acos(a));
    }, decycle: function(a) {
      return Math.sin(Math.acos(1 - a));
    }, bounce: function(a) {
      return 1 - ie.debounce(1 - a);
    }, debounce: function(a) {
      for (var e = 0, t = 1; ; e += t, t /= 2) if (a >= (7 - 4 * e) / 11) return -Math.pow((11 - 6 * e - 11 * a) / 4, 2) + Math.pow(t, 2);
    }, elastic: function(a) {
      return 1 - ie.delastic(1 - a);
    }, delastic: function(a) {
      return Math.pow(2, 10 * (a - 1)) * Math.cos(20 * Math.PI * 1.5 / 3 * a);
    } }, Oe = (function() {
      function a() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "linear", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 250, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
        }, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
        };
        if (I(this, a), this.duration = t, this.rule = e, this.draw = r, this.end = n, typeof this.draw != "function") throw new TypeError("Invalid animation draw callback:", r);
        if (typeof this.end != "function") throw new TypeError("Invalid animation end callback:", n);
      }
      return K(a, [{ key: "animate", value: function(e, t) {
        var r = this;
        this.frame && this.cancel();
        var n = window.performance && window.performance.now ? window.performance.now() : z("animationStartTime") || Date.now();
        e = e || this.draw, t = t || this.end, this.draw = e, this.end = t, this.frame = aa(function(i) {
          return L(i, e, n, ie[r.rule] || r.rule, r.duration, t, r);
        });
      } }, { key: "cancel", value: function() {
        this.frame && ((z("cancelAnimationFrame") || function(e) {
        })(this.frame), this.frame = null);
      } }, { key: "destroy", value: function() {
        this.cancel(), this.draw = null, this.end = null;
      } }]), a;
    })();
    Oe.rules = ie;
    var te = (function() {
      function a(e, t, r) {
        I(this, a), this.options = e, this.element = t.toLowerCase(), this.type = a.toDashed(r), this.Type = m[r], this.mutationsObserved = false, this.isObservable = !!window.MutationObserver, window.GAUGES_NO_AUTO_INIT || a.domReady(this.traverse.bind(this));
      }
      return K(a, [{ key: "isValidNode", value: function(e) {
        return !(!e.tagName || e.tagName.toLowerCase() !== this.element || e.getAttribute("data-type") !== this.type);
      } }, { key: "traverse", value: function() {
        for (var e = document.getElementsByTagName(this.element), t = 0, r = e.length; t < r; t++) this.process(e[t]);
        this.isObservable && !this.mutationsObserved && (new MutationObserver(this.observe.bind(this)).observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true }), this.mutationsObserved = true);
      } }, { key: "observe", value: function(e) {
        for (var t = 0, r = e.length; t < r; t++) {
          var n = e[t];
          if (n.type === "attributes" && n.attributeName === "data-type" && this.isValidNode(n.target) && n.oldValue !== this.type) setTimeout(this.process.bind(this, n.target));
          else if (n.addedNodes && n.addedNodes.length) for (var i = 0, o = n.addedNodes.length; i < o; i++) setTimeout(this.process.bind(this, n.addedNodes[i]));
        }
      } }, { key: "process", value: function(e) {
        var t = this;
        if (!this.isValidNode(e)) return null;
        var r = void 0, n = JSON.parse(JSON.stringify(this.options)), i = null;
        for (r in n) if (n.hasOwnProperty(r)) {
          var o = a.toAttributeName(r), s = a.parse(e.getAttribute(o));
          s != null && (n[r] = s);
        }
        return n.renderTo = e, i = new this.Type(n), i.draw && i.draw(), this.isObservable && (i.observer = new MutationObserver(function(l) {
          l.forEach(function(u) {
            if (u.type === "attributes") {
              var d = u.attributeName.toLowerCase(), c = e.getAttribute(d).toLowerCase();
              if (d === "data-type" && c && c !== t.type) i.observer.disconnect(), delete i.observer, i.destroy && i.destroy();
              else if (d.substr(0, 5) === "data-") {
                var p = d.substr(5).split("-").map(function(_, O) {
                  return O ? _.charAt(0).toUpperCase() + _.substr(1) : _;
                }).join(""), v = {};
                v[p] = a.parse(e.getAttribute(u.attributeName)), p === "value" ? i && (i.value = v[p]) : i.update && i.update(v);
              }
            }
          });
        }), i.observer.observe(e, { attributes: true })), i;
      } }], [{ key: "parse", value: function(e) {
        if (e === "true") return true;
        if (e === "false") return false;
        if (e !== "undefined") {
          if (e === "null") return null;
          if (/^[-+#.\w\d\s]+(?:,[-+#.\w\d\s]*)+$/.test(e)) return e.split(",");
          try {
            return JSON.parse(e);
          } catch {
          }
          return e;
        }
      } }, { key: "toDashed", value: function(e) {
        for (var t = e.split(/(?=[A-Z])/), r = 1, n = t.length, i = t[0].toLowerCase(); r < n; r++) i += "-" + t[r].toLowerCase();
        return i;
      } }, { key: "toCamelCase", value: function(e) {
        for (var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], r = e.split(/-/), n = 0, i = r.length, o = ""; n < i; n++) o += n || t ? r[n][0].toUpperCase() + r[n].substr(1).toLowerCase() : r[n].toLowerCase();
        return o;
      } }, { key: "toAttributeName", value: function(e) {
        return "data-" + a.toDashed(e);
      } }, { key: "domReady", value: function(e) {
        if (/comp|inter|loaded/.test((window.document || {}).readyState + "")) return e();
        window.addEventListener ? window.addEventListener("DOMContentLoaded", e, false) : window.attachEvent && window.attachEvent("onload", e);
      } }]), a;
    })(), U = (function() {
      function a(e, t, r) {
        I(this, a), a.collection.push(this), this.width = t || 0, this.height = r || 0, this.element = e, this.init();
      }
      return K(a, [{ key: "init", value: function() {
        var e = a.pixelRatio;
        this.element.width = this.width * e, this.element.height = this.height * e, this.element.style.width = this.width + "px", this.element.style.height = this.height + "px", this.elementClone = this.element.cloneNode(true), this.context = this.element.getContext("2d"), this.contextClone = this.elementClone.getContext("2d"), this.drawWidth = this.element.width, this.drawHeight = this.element.height, this.drawX = this.drawWidth / 2, this.drawY = this.drawHeight / 2, this.minSide = this.drawX < this.drawY ? this.drawX : this.drawY, this.elementClone.initialized = false, this.contextClone.translate(this.drawX, this.drawY), this.contextClone.save(), this.context.translate(this.drawX, this.drawY), this.context.save(), this.context.max = this.contextClone.max = this.minSide, this.context.maxRadius = this.contextClone.maxRadius = null;
      } }, { key: "destroy", value: function() {
        var e = a.collection.indexOf(this);
        ~e && a.collection.splice(e, 1), this.context.clearRect(-this.drawX, -this.drawY, this.drawWidth, this.drawHeight), this.context.max = null, delete this.context.max, this.context.maxRadius = null, delete this.context.maxRadius, this.context = null, this.contextClone = null, this.elementClone = null, this.element = null, this.onRedraw = null;
      } }, { key: "commit", value: function() {
        var e = a.pixelRatio;
        return e !== 1 && (this.contextClone.scale(e, e), this.contextClone.save()), this;
      } }, { key: "redraw", value: function() {
        return this.init(), this.onRedraw && this.onRedraw(), this;
      } }], [{ key: "redraw", value: function() {
        for (var e = 0, t = a.collection.length; e < t; e++) a.collection[e].redraw();
      } }, { key: "pixelRatio", get: function() {
        return window.devicePixelRatio || 1;
      } }]), a;
    })();
    U.collection = [], window.matchMedia && window.matchMedia("screen and (min-resolution: 2dppx)").addListener(U.redraw);
    var Me = { renderTo: null, width: 0, height: 0, minValue: 0, maxValue: 100, value: 0, units: false, exactTicks: false, majorTicks: [0, 20, 40, 60, 80, 100], minorTicks: 10, strokeTicks: true, animatedValue: false, animateOnInit: false, title: false, borders: true, numbersMargin: 1, listeners: null, valueInt: 3, valueDec: 2, majorTicksInt: 1, majorTicksDec: 0, animation: true, animationDuration: 500, animationRule: "cycle", colorPlate: "#fff", colorPlateEnd: "", colorMajorTicks: "#444", colorMinorTicks: "#666", colorStrokeTicks: "", colorTitle: "#888", colorUnits: "#888", colorNumbers: "#444", colorNeedle: "rgba(240,128,128,1)", colorNeedleEnd: "rgba(255,160,122,.9)", colorValueText: "#444", colorValueTextShadow: "rgba(0,0,0,0.3)", colorBorderShadow: "rgba(0,0,0,0.5)", colorBorderOuter: "#ddd", colorBorderOuterEnd: "#aaa", colorBorderMiddle: "#eee", colorBorderMiddleEnd: "#f0f0f0", colorBorderInner: "#fafafa", colorBorderInnerEnd: "#ccc", colorValueBoxRect: "#888", colorValueBoxRectEnd: "#666", colorValueBoxBackground: "#babab2", colorValueBoxShadow: "rgba(0,0,0,1)", colorNeedleShadowUp: "rgba(2,255,255,0.2)", colorNeedleShadowDown: "rgba(188,143,143,0.45)", colorBarStroke: "#222", colorBar: "#ccc", colorBarProgress: "#888", colorBarShadow: "#000", fontNumbers: "Arial", fontTitle: "Arial", fontUnits: "Arial", fontValue: "Arial", fontNumbersSize: 20, fontTitleSize: 24, fontUnitsSize: 22, fontValueSize: 26, fontNumbersStyle: "normal", fontTitleStyle: "normal", fontUnitsStyle: "normal", fontValueStyle: "normal", fontNumbersWeight: "normal", fontTitleWeight: "normal", fontUnitsWeight: "normal", fontValueWeight: "normal", needle: true, needleShadow: true, needleType: "arrow", needleStart: 5, needleEnd: 85, needleWidth: 4, borderOuterWidth: 3, borderMiddleWidth: 3, borderInnerWidth: 3, borderShadowWidth: 3, valueBox: true, valueBoxStroke: 5, valueBoxWidth: 0, valueText: "", valueTextShadow: true, valueBoxBorderRadius: 2.5, highlights: [{ from: 20, to: 60, color: "#eee" }, { from: 60, to: 80, color: "#ccc" }, { from: 80, to: 100, color: "#999" }], highlightsWidth: 15, highlightsLineCap: "butt", barWidth: 20, barStrokeWidth: 0, barProgress: true, barShadow: 0 };
    F.prototype = Object.create(Array.prototype), F.prototype.constructor = F, F.prototype.get = function(a) {
      if (typeof a == "string") for (var e = 0, t = this.length; e < t; e++) {
        var r = this[e].options.renderTo.tagName ? this[e].options.renderTo : document.getElementById(this[e].options.renderTo || "");
        if (r.getAttribute("id") === a) return this[e];
      }
      else if (typeof a == "number") return this[a];
      return null;
    };
    var Ae = "2.1.7", y = Math.round, X = Math.abs, oe = new F();
    oe.version = Ae;
    var q = (function(a) {
      function e(t) {
        I(this, e);
        var r = P(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)), n = r.constructor.name;
        if (n === "BaseGauge") throw new TypeError("Attempt to instantiate abstract class!");
        if (oe.push(r), t.listeners && Object.keys(t.listeners).forEach(function(o) {
          (t.listeners[o] instanceof Array ? t.listeners[o] : [t.listeners[o]]).forEach(function(s) {
            r.on(o, s);
          });
        }), r.version = Ae, r.type = m[n] || e, r.initialized = false, t.minValue = parseFloat(t.minValue), t.maxValue = parseFloat(t.maxValue), t.value = parseFloat(t.value) || 0, t.borders || (t.borderInnerWidth = t.borderMiddleWidth = t.borderOuterWidth = 0), !t.renderTo) throw TypeError("Canvas element was not specified when creating the Gauge object!");
        var i = t.renderTo.tagName ? t.renderTo : document.getElementById(t.renderTo);
        if (!(i instanceof HTMLCanvasElement)) throw TypeError("Given gauge canvas element is invalid!");
        return t.width = parseFloat(t.width) || 0, t.height = parseFloat(t.height) || 0, t.width && t.height || (t.width || (t.width = i.parentNode ? i.parentNode.offsetWidth : i.offsetWidth), t.height || (t.height = i.parentNode ? i.parentNode.offsetHeight : i.offsetHeight)), r.options = t || {}, r.options.animateOnInit && (r._value = r.options.value, r.options.value = r.options.minValue), r.canvas = new U(i, t.width, t.height), r.canvas.onRedraw = r.draw.bind(r), r.animation = new Oe(t.animationRule, t.animationDuration), r;
      }
      return w(e, a), K(e, [{ key: "update", value: function(t) {
        return Object.assign(this.options, this.type.configure(t || {})), this.canvas.width = this.options.width, this.canvas.height = this.options.height, this.animation.rule = this.options.animationRule, this.animation.duration = this.options.animationDuration, this.canvas.redraw(), this;
      } }, { key: "destroy", value: function() {
        var t = oe.indexOf(this);
        ~t && oe.splice(t, 1), this.canvas.destroy(), this.canvas = null, this.animation.destroy(), this.animation = null, this.emit("destroy");
      } }, { key: "draw", value: function() {
        return this.options.animateOnInit && !this.initialized && (this.value = this._value, this.initialized = true, this.emit("init")), this.emit("render"), this;
      } }, { key: "value", set: function(t) {
        var r = this;
        t = e.ensureValue(t, this.options.minValue);
        var n = this.options.value;
        if (t !== n) if (this.options.animation) {
          if (this.animation.frame && (this.options.value = this._value, this._value === t)) return this.animation.cancel(), void delete this._value;
          this._value === void 0 && (this._value = t), this.emit("animationStart"), this.animation.animate(function(i) {
            var o = n + (t - n) * i;
            r.options.animatedValue && r.emit("value", o, r.value), r.options.value = o, r.draw(), r.emit("animate", i, r.options.value);
          }, function() {
            r._value !== void 0 && (r.emit("value", r._value, r.value), r.options.value = r._value, delete r._value), r.draw(), r.emit("animationEnd");
          });
        } else this.emit("value", t, this.value), this.options.value = t, this.draw();
      }, get: function() {
        return this._value === void 0 ? this.options.value : this._value;
      } }], [{ key: "configure", value: function(t) {
        return t;
      } }, { key: "initialize", value: function(t, r) {
        return new te(r, "canvas", t);
      } }, { key: "fromElement", value: function(t) {
        var r = te.toCamelCase(t.getAttribute("data-type")), n = t.attributes, i = 0, o = n.length, s = {};
        if (r) {
          for (/Gauge$/.test(r) || (r += "Gauge"); i < o; i++) s[te.toCamelCase(n[i].name.replace(/^data-/, ""), false)] = te.parse(n[i].value);
          new te(s, t.tagName, r).process(t);
        }
      } }, { key: "ensureValue", value: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return t = parseFloat(t), !isNaN(t) && isFinite(t) || (t = parseFloat(r) || 0), t;
      } }, { key: "mod", value: function(t, r) {
        return (t % r + r) % r;
      } }, { key: "version", get: function() {
        return Ae;
      } }]), e;
    })(Na);
    m !== void 0 && (m.BaseGauge = q, m.gauges = (window.document || {}).gauges = oe);
    var ja = /{([_a-zA-Z]+[_a-zA-Z0-9]*)}/g, h = { roundRect: xe, padValue: ne, formatMajorTickNumber: de, radians: ce, radialPoint: ge, linearGradient: he, drawNeedleShadow: ae, drawValueBox: Te, verifyError: N, prepareTicks: ee, drawShadow: me, font: J, normalizedValue: Se, formatContext: G }, le = Math.PI, ye = le / 2, ta = Object.assign({}, Me, { ticksAngle: 270, startAngle: 45, colorNeedleCircleOuter: "#f0f0f0", colorNeedleCircleOuterEnd: "#ccc", colorNeedleCircleInner: "#e8e8e8", colorNeedleCircleInnerEnd: "#f5f5f5", needleCircleSize: 10, needleCircleInner: true, needleCircleOuter: true, needleStart: 20, animationTarget: "needle", useMinPath: false, barWidth: 0, barStartPosition: "left" }), Ea = (function(a) {
      function e(t) {
        return I(this, e), t = Object.assign({}, ta, t || {}), P(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, e.configure(t)));
      }
      return w(e, a), K(e, [{ key: "draw", value: function() {
        try {
          var t = this.canvas, r = [-t.drawX, -t.drawY, t.drawWidth, t.drawHeight], n = r[0], i = r[1], o = r[2], s = r[3], l = this.options;
          if (l.animationTarget === "needle") {
            if (!t.elementClone.initialized) {
              var u = t.contextClone;
              u.clearRect(n, i, o, s), u.save(), this.emit("beforePlate"), Re(u, l), this.emit("beforeHighlights"), De(u, l), this.emit("beforeMinorTicks"), Fe(u, l), this.emit("beforeMajorTicks"), ze(u, l), this.emit("beforeNumbers"), Le(u, l), this.emit("beforeTitle"), Ue(u, l), this.emit("beforeUnits"), Xe(u, l), t.elementClone.initialized = true;
            }
            this.canvas.commit(), t.context.clearRect(n, i, o, s), t.context.save(), t.context.drawImage(t.elementClone, n, i, o, s), t.context.save(), this.emit("beforeProgressBar"), He(t.context, l), this.emit("beforeValueBox"), qe(t.context, l, Ze(this)), this.emit("beforeNeedle"), Ye(t.context, l);
          } else {
            var d = -h.radians((l.value - l.minValue) / (l.maxValue - l.minValue) * l.ticksAngle);
            if (t.context.clearRect(n, i, o, s), t.context.save(), this.emit("beforePlate"), Re(t.context, l), t.context.rotate(d), this.emit("beforeHighlights"), De(t.context, l), this.emit("beforeMinorTicks"), Fe(t.context, l), this.emit("beforeMajorTicks"), ze(t.context, l), this.emit("beforeNumbers"), Le(t.context, l), this.emit("beforeProgressBar"), He(t.context, l), t.context.rotate(-d), t.context.save(), !t.elementClone.initialized) {
              var c = t.contextClone;
              c.clearRect(n, i, o, s), c.save(), this.emit("beforeTitle"), Ue(c, l), this.emit("beforeUnits"), Xe(c, l), this.emit("beforeNeedle"), Ye(c, l), t.elementClone.initialized = true;
            }
            t.context.drawImage(t.elementClone, n, i, o, s);
          }
          this.emit("beforeValueBox"), qe(t.context, l, Ze(this)), Be(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "draw", this).call(this);
        } catch (p) {
          h.verifyError(p);
        }
        return this;
      } }, { key: "value", set: function(t) {
        t = q.ensureValue(t, this.options.minValue), this.options.animation && this.options.ticksAngle === 360 && this.options.useMinPath && (this._value = t, t = this.options.value + ((t - this.options.value) % 360 + 540) % 360 - 180), Pa(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", t, this);
      }, get: function() {
        return Be(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "value", this);
      } }], [{ key: "configure", value: function(t) {
        return t.barWidth > 50 && (t.barWidth = 50), isNaN(t.startAngle) && (t.startAngle = 45), isNaN(t.ticksAngle) && (t.ticksAngle = 270), t.ticksAngle > 360 && (t.ticksAngle = 360), t.ticksAngle < 0 && (t.ticksAngle = 0), t.startAngle < 0 && (t.startAngle = 0), t.startAngle > 360 && (t.startAngle = 360), t;
      } }]), e;
    })(q);
    m !== void 0 && (m.RadialGauge = Ea), q.initialize("RadialGauge", ta);
    var ra = Object.assign({}, Me, { borderRadius: 0, barBeginCircle: 30, colorBarEnd: "", colorBarProgressEnd: "", needleWidth: 6, tickSide: "both", needleSide: "both", numberSide: "both", ticksWidth: 10, ticksWidthMinor: 5, ticksPadding: 5, barLength: 85, fontTitleSize: 26, highlightsWidth: 10 }), Ia = (function(a) {
      function e(t) {
        return I(this, e), t = Object.assign({}, ra, t || {}), P(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, e.configure(t)));
      }
      return w(e, a), K(e, [{ key: "draw", value: function() {
        try {
          var t = this.canvas, r = [-t.drawX, -t.drawY, t.drawWidth, t.drawHeight], n = r[0], i = r[1], o = r[2], s = r[3], l = this.options;
          if (!t.elementClone.initialized) {
            var u = t.contextClone;
            u.clearRect(n, i, o, s), u.save(), this.emit("beforePlate"), this.drawBox = _a(u, l, n, i, o, s), this.emit("beforeBar"), wa.apply(void 0, [u, l].concat(W(this.drawBox))), t.context.barDimensions = u.barDimensions, this.emit("beforeHighlights"), xa(u, l), this.emit("beforeMinorTicks"), Sa(u, l), this.emit("beforeMajorTicks"), Ta(u, l), this.emit("beforeNumbers"), Ca(u, l), this.emit("beforeTitle"), Va(u, l), this.emit("beforeUnits"), Wa(u, l), t.elementClone.initialized = true;
          }
          this.canvas.commit(), t.context.clearRect(n, i, o, s), t.context.save(), t.context.drawImage(t.elementClone, n, i, o, s), t.context.save(), this.emit("beforeProgressBar"), ka.apply(void 0, [t.context, l].concat(W(this.drawBox))), this.emit("beforeNeedle"), Ba(t.context, l), this.emit("beforeValueBox"), Aa.apply(void 0, [t.context, l, l.animatedValue ? this.options.value : this.value].concat(W(this.drawBox))), Be(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "draw", this).call(this);
        } catch (d) {
          h.verifyError(d);
        }
        return this;
      } }], [{ key: "configure", value: function(t) {
        return t.barStrokeWidth >= t.barWidth && (t.barStrokeWidth = y(t.barWidth / 2)), t.hasLeft = Je("right", t), t.hasRight = Je("left", t), t.value > t.maxValue && (t.value = t.maxValue), t.value < t.minValue && (t.value = t.minValue), q.configure(t);
      } }]), e;
    })(q);
    m !== void 0 && (m.LinearGauge = Ia), q.initialize("LinearGauge", ra), Object.assign(m, { Collection: F, GenericOptions: Me, Animation: Oe, BaseGauge: q, drawings: h, SmartCanvas: U, DomObserver: te, vendorize: z });
  })(g.exports);
})(ha);
var sa = ha.exports;
const ua = 30, at = ({ options: g }) => {
  const m = ia(null), W = ia(null), P = Ra();
  return Pe(() => {
    var _a;
    const w = W.current;
    if (!w || m.current !== null && m.current.options.gaugeType === g.gaugeType) return;
    (_a = m.current) == null ? void 0 : _a.destroy();
    const I = { ...g, renderTo: w }, z = g.gaugeType === "radial" ? new sa.RadialGauge(I) : new sa.LinearGauge(I);
    m.current = z.draw();
  }, [g.gaugeType, g]), Pe(() => {
    const w = m.current;
    w && ((g.width ?? 0) <= ua || (g.height ?? 0) <= ua || (w.value = g.value ?? 0, w.update(g)));
  }, [g]), Pe(() => () => {
    var _a;
    return (_a = m.current) == null ? void 0 : _a.destroy();
  }, []), $("canvas", { id: P, ref: W, style: { position: "absolute" } });
}, tt = /* @__PURE__ */ new Set(["gaugeType", "gaugeIconFit", "gaugePadding", "gaugeMinValue", "gaugeMaxValue", "gaugeMajorTicks"]);
function da(g, m) {
  var _a;
  return (_a = g.find((W) => W.name === m)) == null ? void 0 : _a.default;
}
const rt = (g) => g == null || g === "";
function ue(g, m) {
  if (rt(g)) return m;
  const W = typeof g == "number" ? g : Number(g);
  return Number.isFinite(W) ? W : m;
}
function Ie(g, m) {
  return typeof g == "string" && g !== "" ? g : m;
}
function ca(g) {
  return typeof g == "string" ? g : g === "number" ? String(g) : "";
}
function nt(g, m) {
  return typeof g == "boolean" ? g : m;
}
function it(g) {
  return g.startsWith("gauge") ? g.charAt(5).toLowerCase() + g.slice(6) : g;
}
function ma(g) {
  const m = g;
  return { minValue: ue(m.gaugeMinValue, typeof m.minValue == "number" ? m.minValue : 0), maxValue: ue(m.gaugeMaxValue, typeof m.maxValue == "number" ? m.maxValue : 100) };
}
function ot(g, m, W) {
  if (!(g > 0)) return [];
  const P = (W - m) / g || 1, w = [];
  for (let I = 0; I <= g; I++) w.push(Math.round((m + P * I) * 100) / 100);
  return w;
}
function lt(g, m, W) {
  const P = m, w = { gaugeType: Ie(P.gaugeType, "linear") === "radial" ? "radial" : "linear" };
  for (const N of g) {
    if (!N.name || !N.type || N.type === "custom" && N.terminal === void 0 || tt.has(N.name)) continue;
    const G = it(N.name);
    if (N.terminal !== void 0) {
      const ee = { name: N.name, fallbackFields: N.fallbackFields, terminal: N.terminal, inheritTextStyle: N.inheritTextStyle };
      w[G] = Xa(ee, P, W.theme, W.textStyles);
      continue;
    }
    switch (N.type) {
      case "number":
        w[G] = ue(P[N.name], Number(N.default ?? 0));
        break;
      case "color":
        w[G] = Ie(P[N.name], ca(N.default));
        break;
      case "checkbox":
        w[G] = nt(P[N.name], N.default === true);
        break;
      default:
        w[G] = Ie(P[N.name], ca(N.default));
        break;
    }
  }
  const { minValue: I, maxValue: z } = ma(P), L = ue(P.gaugePadding, Number(da(g, "gaugePadding") ?? 0)), F = ue(P.gaugeMajorTicks, Number(da(g, "gaugeMajorTicks") ?? 10));
  return w.minValue = I, w.maxValue = z, w.majorTicks = ot(F, I, z), w.width = (W.width || 0) - L, w.height = (W.height || 0) - L, w.value = Number(W.value) || 0, w.units = W.unit, w.title = W.header, w.highlights = W.highlights, typeof w.barWidth == "number" && (w.barWidth = Math.min(w.barWidth, 50)), w;
}
const st = (g, m, W) => g.find((w) => m >= w.from && (m < w.to || m === w.to && m === W)) || null, ut = (g, m) => {
  const W = g.map((P, w) => {
    var _a;
    const I = ((_a = g[w + 1]) == null ? void 0 : _a.value) ?? m;
    return { from: Number(P.value), to: Number(I), color: Ya(P.textColor) || "transparent", state: { ...P } };
  });
  return g.length > 0 && Number(g[g.length - 1].value) < m && (W[W.length - 1].to = m), W;
}, fa = (...g) => g.find((m) => m !== void 0 && m !== ""), dt = (g) => fa(g.state.frameBackgroundColorActive, g.state.frameBackgroundColor, g.state.frameBackgroundActive, g.state.frameBackground), ct = (g) => fa(g.state.backgroundColorActive, g.state.backgroundColor, g.state.backgroundActive, g.state.background);
function gt() {
  const [g, m] = Da(null), { width: W, height: P } = qa(g), w = Fa(za), { theme: I, widget: { data: { oidObject: z } }, widget: L } = w, { data: F, states: N } = Ha("oid"), G = et("oid"), { textStyles: ee } = Ga(L.style), ne = (z == null ? void 0 : z.type) === "number", de = re(() => ga(), []), { gaugeMinValue: ce, minValue: ge, gaugeMaxValue: he, maxValue: me } = L.data, { maxValue: ae } = re(() => ma({ gaugeMinValue: ce, minValue: ge, gaugeMaxValue: he, maxValue: me }), [ce, ge, he, me]), J = re(() => ut(N, ae), [N, ae]), R = re(() => st(J, Number(G) || 0, ae), [J, G, ae]), fe = re(() => R ? { ...F, frameBackground: dt(R) ?? F.frameBackground, background: ct(R) ?? F.background } : F, [F, R]), Te = re(() => lt(de, L.data, { width: W || 0, height: P || 0, value: G, unit: z == null ? void 0 : z.unit, header: F.header, highlights: J, theme: I, textStyles: ee }), [de, L.data, W, P, G, z == null ? void 0 : z.unit, F.header, J, I, ee]), Se = $a(R == null ? void 0 : R.state.icon, R == null ? void 0 : R.state.iconColor, (R == null ? void 0 : R.state.forceColorMask) ?? false);
  return oa(Za, { isValidType: ne, data: fe, oidValue: G, children: [$(Ja, { data: { ...F, icon: R == null ? void 0 : R.state.icon, iconColor: R == null ? void 0 : R.state.iconColor, forceColorMask: R == null ? void 0 : R.state.forceColorMask }, widget: L }), oa(La, { ref: m, sx: { width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }, children: [$(Ka, { alt: "", src: R == null ? void 0 : R.state.icon, style: { position: "relative", width: R == null ? void 0 : R.state.iconSizeOnly, height: R == null ? void 0 : R.state.iconSizeOnly, boxSizing: "border-box", objectFit: L.data.gaugeIconFit, top: `calc(0px - ${R == null ? void 0 : R.state.iconYOffset})`, left: `calc(0px + ${R == null ? void 0 : R.state.iconXOffset})`, ...Se } }), $(at, { options: Te })] })] });
}
class ba extends Ua {
  static getWidgetInfo() {
    return { id: "tplGaugeCollectionWidget", visSet: "vis-2-widgets-collection", visSetLabel: "widgets_collection", visName: "GaugeCollectionWidget", visWidgetLabel: "gauge_collection_widget", visOrder: 10, visAttrs: [{ name: "common", fields: [...la({ groupName: "", allFields: true })] }, { name: "gauge", label: "group_gauge", fields: [...Qa(["number"]), ...ga()] }, { name: "values", label: "values", indexFrom: 1, indexTo: "values_count", fields: [...la({ groupName: "", allFields: false })] }], visDefaultStyle: { width: "100%", height: "100px", position: "relative" }, visPrev: "widgets/vis-2-widgets-collection/img/prev-collection-gauge.png" };
  }
  getWidgetInfo() {
    return ba.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
    this.propertiesUpdate();
  }
  onRxStyleChanged() {
  }
  onStateUpdated(m, W) {
  }
  componentDidMount() {
    super.componentDidMount(), this.propertiesUpdate();
  }
  renderWidgetBody(m) {
    return super.renderWidgetBody(m), this.renderWithProvider($(gt, {}), m);
  }
}
export {
  ba as default
};
