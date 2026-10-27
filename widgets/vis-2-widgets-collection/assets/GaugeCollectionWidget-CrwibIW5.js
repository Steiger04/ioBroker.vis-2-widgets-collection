import { t as e } from "./rolldown-runtime-XKyaHtl9.js";
import { D as t, E as n, Et as r, b as i, o as a, s as o, v as s, w as c } from "./_virtual_mf___mfe_internal__vis2CollectionWidget__mf_owner__75535022465682__loadShare__shared-DDXkuL4i.js";
import { S as l } from "./usePopoverPositioning-DS2NF3yn.js";
import { C as u, T as d, _ as f, a as p, b as m, f as h, h as g, i as _, l as v, r as y, s as b, u as x, v as S, w as C, x as w, y as T } from "./useData-fwe13Z_u.js";
import { t as E } from "./useData-BJ_4Y9C3.js";
import { t as D } from "./useOidValue-DpXyxHWU.js";
var O = () => [g(`gauge_basic_options`), { name: `gaugeType`, label: `gauge_type`, type: `select`, options: [{ value: `linear`, label: `linear` }, { value: `radial`, label: `radial` }], default: `linear`, noTranslation: true }, { name: `gaugeMinValue`, type: `number`, label: `gauge_min_value`, step: 1 }, { name: `gaugeMaxValue`, type: `number`, label: `gauge_max_value`, step: 1 }, { name: `gaugePadding`, type: `number`, label: `gauge_padding`, default: 8, step: 1, min: 0 }, { name: `gaugeIconFit`, type: `select`, label: `gauge_icon_fit`, options: [{ value: `contain`, label: `contain` }, { value: `cover`, label: `cover` }, { value: `fill`, label: `fill` }], default: `contain`, noTranslation: true }, g(`gauge_linear_borders_options`, { hidden: T(`gaugeType`, `linear`) }), { name: `gaugeBorderRadius`, type: `number`, label: `gauge_border_radius`, default: 0, step: 1, min: 0, hidden: T(`gaugeType`, `linear`) }, g(`gauge_linear_progress_bar_options`, { hidden: T(`gaugeType`, `linear`) }), { name: `gaugeBarBeginCircle`, type: `number`, label: `gauge_bar_begin_circle`, default: 30, step: 1, min: 0, hidden: T(`gaugeType`, `linear`) }, { name: `gaugeBarLength`, type: `number`, label: `gauge_bar_length`, default: 85, step: 1, min: 0, hidden: T(`gaugeType`, `linear`) }, g(`gauge_linear_coloring_options`, { hidden: T(`gaugeType`, `linear`) }), { name: `gaugeColorBarEnd`, type: `color`, label: `gauge_color_bar_end`, default: ``, hidden: T(`gaugeType`, `linear`) }, { name: `gaugeColorBarProgressEnd`, type: `color`, label: `gauge_color_bar_progress_end`, default: ``, hidden: T(`gaugeType`, `linear`) }, g(`gauge_linear_element_positioning_options`, { hidden: T(`gaugeType`, `linear`) }), { name: `gaugeTickSide`, type: `select`, label: `gauge_tick_side`, options: m, default: `both`, noTranslation: true, hidden: T(`gaugeType`, `linear`) }, { name: `gaugeNeedleSide`, type: `select`, label: `gauge_needle_side`, options: m, default: `both`, noTranslation: true, hidden: T(`gaugeType`, `linear`) }, { name: `gaugeNumberSide`, type: `select`, label: `gauge_number_side`, options: m, default: `both`, noTranslation: true, hidden: T(`gaugeType`, `linear`) }, g(`gauge_linear_ticks_bar_options`, { hidden: T(`gaugeType`, `linear`) }), { name: `gaugeTicksWidth`, type: `number`, label: `gauge_ticks_width`, default: 10, step: 1, min: 0, hidden: T(`gaugeType`, `linear`) }, { name: `gaugeTicksWidthMinor`, type: `number`, label: `gauge_ticks_width_minor`, default: 5, step: 1, min: 0, hidden: T(`gaugeType`, `linear`) }, { name: `gaugeTicksPadding`, type: `number`, label: `gauge_ticks_padding`, default: 5, step: 1, min: 0, hidden: T(`gaugeType`, `linear`) }, g(`gauge_radial_ticks_bar_options`, { hidden: T(`gaugeType`, `radial`) }), { name: `gaugeTicksAngle`, type: `number`, label: `gauge_ticks_angle`, default: 270, step: 1, min: 0, max: 360, hidden: T(`gaugeType`, `radial`) }, { name: `gaugeStartAngle`, type: `number`, label: `gauge_start_angle`, default: 45, step: 1, min: 0, max: 360, hidden: T(`gaugeType`, `radial`) }, g(`gauge_radial_coloring_options`, { hidden: T(`gaugeType`, `radial`) }), { name: `gaugeColorNeedleCircleOuter`, type: `color`, label: `gauge_color_needle_circle_outer`, default: `#f0f0f0`, hidden: T(`gaugeType`, `radial`) }, { name: `gaugeColorNeedleCircleOuterEnd`, type: `color`, label: `gauge_color_needle_circle_outer_end`, default: `#ccc`, hidden: T(`gaugeType`, `radial`) }, { name: `gaugeColorNeedleCircleInner`, type: `color`, label: `gauge_color_needle_circle_inner`, default: `#e8e8e8`, hidden: T(`gaugeType`, `radial`) }, { name: `gaugeColorNeedleCircleInnerEnd`, type: `color`, label: `gauge_color_needle_circle_inner_end`, default: `#f5f5f5`, hidden: T(`gaugeType`, `radial`) }, g(`gauge_radial_needle_options`, { hidden: T(`gaugeType`, `radial`) }), { name: `gaugeNeedleCircleSize`, type: `number`, label: `gauge_needle_circle_size`, default: 10, step: 1, min: 0, hidden: T(`gaugeType`, `radial`) }, { name: `gaugeNeedleCircleInner`, type: `checkbox`, label: `gauge_needle_circle_inner`, default: true, hidden: T(`gaugeType`, `radial`) }, { name: `gaugeNeedleCircleOuter`, type: `checkbox`, label: `gauge_needle_circle_outer`, default: true, hidden: T(`gaugeType`, `radial`) }, g(`gauge_radial_animation_options`, { hidden: T(`gaugeType`, `radial`) }), { name: `gaugeAnimationTarget`, type: `select`, label: `gauge_animation_target`, options: [{ value: `needle`, label: `needle` }, { value: `plate`, label: `plate` }], default: `needle`, noTranslation: true, hidden: T(`gaugeType`, `radial`) }, { name: `gaugeUseMinPath`, type: `checkbox`, label: `gauge_use_min_path`, default: false, hidden: T(`gaugeType`, `radial`) }, g(`gauge_ticks_bar_options`), { name: `gaugeExactTicks`, type: `checkbox`, label: `gauge_exact_ticks`, default: false }, { name: `gaugeMajorTicks`, type: `number`, label: `gauge_major_ticks`, default: 10, step: 1 }, { name: `gaugeMinorTicks`, type: `number`, label: `gauge_minor_ticks`, default: 0, step: 1 }, { name: `gaugeStrokeTicks`, type: `checkbox`, label: `gauge_stroke_ticks`, default: true }, { name: `gaugeMajorTicksInt`, type: `number`, label: `gauge_major_ticks_int`, default: 1, step: 1 }, { name: `gaugeMajorTicksDec`, type: `number`, label: `gauge_major_ticks_dec`, default: 0, step: 1 }, { name: `gaugeHighlightsWidth`, type: `number`, label: `gauge_highlights_width`, default: 15, step: 1 }, { name: `gaugeNumbersMargin`, type: `number`, label: `gauge_numbers_margin`, default: 1, step: 1 }, g(`gauge_progress_bar_options`), { name: `gaugeBarWidth`, type: `number`, label: `gauge_bar_width`, default: 20, step: 1, min: 0, max: 50 }, { name: `gaugeBarStrokeWidth`, type: `number`, label: `gauge_bar_stroke_width`, default: 0, step: 1, min: 0 }, { name: `gaugeBarProgress`, type: `checkbox`, label: `gauge_bar_progress`, default: true }, { name: `gaugeBarShadow`, type: `number`, label: `gauge_bar_shadow`, default: 0, step: 1, min: 0 }, g(`gauge_animation_options`), { name: `gaugeAnimation`, type: `checkbox`, label: `gauge_animation`, default: true }, { name: `gaugeAnimationDuration`, type: `number`, label: `gauge_animation_duration`, default: 500, step: 1, min: 0 }, { name: `gaugeAnimationRule`, type: `select`, label: `gauge_animation_rule`, options: [{ value: `linear`, label: `linear` }, { value: `quad`, label: `quad` }, { value: `quint`, label: `quint` }, { value: `cycle`, label: `cycle` }, { value: `bounce`, label: `bounce` }, { value: `elastic`, label: `elastic` }, { value: `dequad`, label: `dequad` }, { value: `dequint`, label: `dequint` }, { value: `decycle`, label: `decycle` }, { value: `debounce`, label: `debounce` }, { value: `delastic`, label: `delastic` }], default: `cycle`, noTranslation: true }, { name: `gaugeAnimatedValue`, type: `checkbox`, label: `gauge_animated_value`, default: false }, { name: `gaugeAnimateOnInit`, type: `checkbox`, label: `gauge_animate_on_init`, default: false }, g(`gauge_coloring_options`), { name: `gaugeColorPlate`, type: `color`, label: `gauge_color_plate`, default: `rgba(0,0,0,0)` }, { name: `gaugeColorPlateEnd`, type: `color`, label: `gauge_color_plate_end`, default: `rgba(0,0,0,0)` }, { name: `gaugeColorMajorTicks`, type: `color`, label: `gauge_color_major_ticks`, default: `#444` }, { name: `gaugeColorMinorTicks`, type: `color`, label: `gauge_color_minor_ticks`, default: `#666` }, { name: `gaugeColorStrokeTicks`, type: `color`, label: `gauge_color_stroke_ticks`, default: `#444` }, { name: `gaugeColorTitle`, type: `color`, label: `gauge_color_title`, default: `#888` }, { name: `gaugeColorUnits`, type: `color`, label: `gauge_color_units`, default: `#888` }, { name: `gaugeColorNumbers`, type: `color`, label: `gauge_color_numbers`, default: `#444` }, { name: `gaugeColorNeedle`, type: `color`, label: `gauge_color_needle`, default: `rgba(240,128,128,1)` }, { name: `gaugeColorNeedleEnd`, type: `color`, label: `gauge_color_needle_end`, default: `rgba(255,160,122,.9)` }, { name: `gaugeColorValueText`, type: `color`, label: `gauge_color_value_text`, default: `#444` }, { name: `gaugeColorValueTextShadow`, type: `color`, label: `gauge_color_value_text_shadow`, default: `rgba(0,0,0,0.3)` }, { name: `gaugeColorBorderShadow`, type: `color`, label: `gauge_color_border_shadow`, default: `rgba(0,0,0,0.5)` }, { name: `gaugeColorBorderOuter`, type: `color`, label: `gauge_color_border_outer`, default: `#ddd` }, { name: `gaugeColorBorderOuterEnd`, type: `color`, label: `gauge_color_border_outer_end`, default: `#aaa` }, { name: `gaugeColorBorderMiddle`, type: `color`, label: `gauge_color_border_middle`, default: `#eee` }, { name: `gaugeColorBorderMiddleEnd`, type: `color`, label: `gauge_color_border_middle_end`, default: `#f0f0f0` }, { name: `gaugeColorBorderInner`, type: `color`, label: `gauge_color_border_inner`, default: `#fafafa` }, { name: `gaugeColorBorderInnerEnd`, type: `color`, label: `gauge_color_border_inner_end`, default: `#ccc` }, { name: `gaugeColorValueBoxRect`, type: `color`, label: `gauge_color_value_box_rect`, default: `#888` }, { name: `gaugeColorValueBoxRectEnd`, type: `color`, label: `gauge_color_value_box_rect_end`, default: `#666` }, { name: `gaugeColorValueBoxBackground`, type: `color`, label: `gauge_color_value_box_background`, default: `#babab2` }, { name: `gaugeColorValueBoxShadow`, type: `color`, label: `gauge_color_value_box_shadow`, default: `rgba(0,0,0,1)` }, { name: `gaugeColorNeedleShadowUp`, type: `color`, label: `gauge_color_needle_shadow_up`, default: `rgba(2,255,255,0.2)` }, { name: `gaugeColorNeedleShadowDown`, type: `color`, label: `gauge_color_needle_shadow_down`, default: `rgba(188,143,143,0.45)` }, { name: `gaugeColorBarStroke`, type: `color`, label: `gauge_color_bar_stroke`, default: `#222` }, { name: `gaugeColorBar`, type: `color`, label: `gauge_color_bar`, default: `#ccc` }, { name: `gaugeColorBarProgress`, type: `color`, label: `gauge_color_bar_progress`, default: `#888` }, { name: `gaugeHighlightsLineCap`, type: `select`, label: `gauge_highlights_line_cap`, options: [{ value: `butt`, label: `butt` }, { value: `round`, label: `round` }, { value: `square`, label: `square` }], default: `butt`, noTranslation: true }, g(`gauge_needle_configuration_options`), { name: `gaugeNeedle`, type: `checkbox`, label: `gauge_needle`, default: true }, { name: `gaugeNeedleShadow`, type: `checkbox`, label: `gauge_needle_shadow`, default: true }, { name: `gaugeNeedleType`, type: `select`, label: `gauge_needle_type`, options: [{ value: `arrow`, label: `arrow` }, { value: `line`, label: `line` }], default: `arrow`, noTranslation: true }, { name: `gaugeNeedleStart`, type: `number`, label: `gauge_needle_start`, default: 5, step: 1, min: 0, max: 100 }, { name: `gaugeNeedleEnd`, type: `number`, label: `gauge_needle_end`, default: 85, step: 1, min: 0, max: 100 }, { name: `gaugeNeedleWidth`, type: `number`, label: `gauge_needle_width`, default: 4 }, g(`gauge_borders_options`), { name: `gaugeBorders`, type: `checkbox`, label: `gauge_borders`, default: true }, { name: `gaugeBorderOuterWidth`, type: `number`, label: `gauge_border_outer_width`, default: 3, min: 0 }, { name: `gaugeBorderMiddleWidth`, type: `number`, label: `gauge_border_middle_width`, default: 3, min: 0 }, { name: `gaugeBorderInnerWidth`, type: `number`, label: `gauge_border_inner_width`, default: 3, min: 0 }, { name: `gaugeBorderShadowWidth`, type: `number`, label: `gauge_border_shadow_width`, default: 3, min: 0 }, g(`gauge_value_box_options`), { name: `gaugeValueBox`, type: `checkbox`, label: `gauge_value_box`, default: true }, { name: `gaugeValueBoxStroke`, type: `number`, label: `gauge_value_box_stroke`, default: 5, step: 1, min: 0 }, { name: `gaugeValueBoxWidth`, type: `number`, label: `gauge_value_box_width`, default: 0, step: 1, min: 0 }, { name: `gaugeValueText`, type: `text`, label: `gauge_value_text`, default: `` }, { name: `gaugeValueTextShadow`, type: `checkbox`, label: `gauge_value_text_shadow`, default: true }, { name: `gaugeValueBoxBorderRadius`, type: `number`, label: `gauge_value_box_border_radius`, default: 2.5, step: 0.1, min: 0 }, { name: `gaugeValueInt`, type: `number`, label: `gauge_value_int`, default: 3, step: 1, min: 0 }, { name: `gaugeValueDec`, type: `number`, label: `gauge_value_dec`, default: 2, step: 1, min: 0 }, g(`gauge_fonts_customization_options`), { name: `gaugeFontNumbers`, type: `fontname`, label: `gauge_font_numbers`, default: `Arial, Helvetica, sans-serif` }, { name: `gaugeFontTitle`, type: `fontname`, label: `gauge_font_title`, default: `Arial, Helvetica, sans-serif` }, { name: `gaugeFontUnits`, type: `fontname`, label: `gauge_font_units`, default: `Arial, Helvetica, sans-serif` }, { name: `gaugeFontValue`, type: `fontname`, label: `gauge_font_value`, default: `Arial, Helvetica, sans-serif` }, { label: ``, name: `allFieldsDivider`, type: `custom`, component: () => a(u, {}) }, { name: `gaugeFontNumbersSize`, type: `number`, label: `gauge_font_numbers_size`, default: 20, step: 1, min: 0 }, { name: `gaugeFontTitleSize`, type: `number`, label: `gauge_font_title_size`, default: 24, step: 1, min: 0 }, { name: `gaugeFontUnitsSize`, type: `number`, label: `gauge_font_units_size`, default: 22, step: 1, min: 0 }, { name: `gaugeFontValueSize`, type: `number`, label: `gauge_font_value_size`, default: 26, step: 1, min: 0 }, { label: ``, name: `allFieldsDivider`, type: `custom`, component: () => a(u, {}) }, { name: `gaugeFontNumbersStyle`, type: `select`, label: `gauge_font_numbers_style`, options: f, default: `normal`, noTranslation: true }, { name: `gaugeFontTitleStyle`, type: `select`, label: `gauge_font_title_style`, options: f, default: `normal`, noTranslation: true }, { name: `gaugeFontUnitsStyle`, type: `select`, label: `gauge_font_units_style`, options: f, default: `normal`, noTranslation: true }, { name: `gaugeFontValueStyle`, type: `select`, label: `gauge_font_value_style`, options: f, default: `normal`, noTranslation: true }, { label: ``, name: `allFieldsDivider`, type: `custom`, component: () => a(u, {}) }, { name: `gaugeFontNumbersWeight`, type: `select`, label: `gauge_font_numbers_weight`, options: S, default: `normal`, noTranslation: true }, { name: `gaugeFontTitleWeight`, type: `select`, label: `gauge_font_title_weight`, options: S, default: `normal`, noTranslation: true }, { name: `gaugeFontUnitsWeight`, type: `select`, label: `gauge_font_units_weight`, options: S, default: `normal`, noTranslation: true }, { name: `gaugeFontValueWeight`, type: `select`, label: `gauge_font_value_weight`, options: S, default: `normal`, noTranslation: true }], k = e(((e3, t2) => {
  (function(e4) {
    function n2(e5) {
      if (Array.isArray(e5)) {
        for (var t3 = 0, n3 = Array(e5.length); t3 < e5.length; t3++) n3[t3] = e5[t3];
        return n3;
      }
      return Array.from(e5);
    }
    function r2(e5, t3) {
      if (!e5) throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
      return !t3 || typeof t3 != `object` && typeof t3 != `function` ? e5 : t3;
    }
    function i2(e5, t3) {
      if (typeof t3 != `function` && t3 !== null) throw TypeError(`Super expression must either be null or a function, not ` + typeof t3);
      e5.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e5, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e5, t3) : e5.__proto__ = t3);
    }
    function a2(e5, t3) {
      if (!(e5 instanceof t3)) throw TypeError(`Cannot call a class as a function`);
    }
    function o2(e5, t3) {
      if (t3 ||= typeof window > `u` ? global : window, t3[e5] !== void 0) return t3[e5];
      for (var n3 = [`webkit`, `moz`, `ms`, `o`], r3 = 0, i3 = n3.length, a3 = e5.charAt(0).toUpperCase() + e5.substr(1); r3 < i3; r3++) {
        var o3 = t3[n3[r3] + a3];
        if (o3 !== void 0) return o3;
      }
      return null;
    }
    function s2(e5, t3, n3, r3, i3, a3, o3) {
      if (typeof r3 != `function`) throw TypeError(`Invalid animation rule:`, r3);
      var c3 = e5 - n3, l3 = c3 / i3, u3 = 0;
      l3 > 1 && (l3 = 1), l3 !== 1 && (u3 = r3(l3), isFinite(u3) && !isNaN(u3) && (l3 = u3)), t3 && t3(l3), c3 < i3 ? o3.frame = De(function(e6) {
        return s2(e6, t3, n3, r3, i3, a3, o3);
      }) : (a3 && a3(), o3.inProgress = false);
    }
    function c2() {
      Array.prototype.constructor.apply(this, arguments);
    }
    function l2(e5) {
      if (!(e5 instanceof DOMException && e5.result === 2152923147)) throw e5;
    }
    function u2(e5, t3) {
      return t3.replace(ke, function(t4, n3) {
        var r3 = e5[n3];
        return r3 === void 0 ? t4 : r3;
      });
    }
    function d2(e5) {
      return e5.majorTicks instanceof Array || (e5.majorTicks = e5.majorTicks ? [e5.majorTicks] : []), e5.majorTicks.length || (e5.majorTicks.push(Z.formatMajorTickNumber(e5.minValue, e5)), e5.majorTicks.push(Z.formatMajorTickNumber(e5.maxValue, e5))), [e5.tickSide !== `right`, e5.tickSide !== `left`];
    }
    function f2(e5, t3, n3, r3, i3, a3) {
      e5.beginPath(), e5.moveTo(t3 + a3, n3), e5.lineTo(t3 + r3 - a3, n3), e5.quadraticCurveTo(t3 + r3, n3, t3 + r3, n3 + a3), e5.lineTo(t3 + r3, n3 + i3 - a3), e5.quadraticCurveTo(t3 + r3, n3 + i3, t3 + r3 - a3, n3 + i3), e5.lineTo(t3 + a3, n3 + i3), e5.quadraticCurveTo(t3, n3 + i3, t3, n3 + i3 - a3), e5.lineTo(t3, n3 + a3), e5.quadraticCurveTo(t3, n3, t3 + a3, n3), e5.closePath();
    }
    function p2(e5, t3) {
      var n3 = t3.valueDec, r3 = t3.valueInt, i3 = 0, a3 = void 0, o3 = void 0, s3 = void 0;
      if (e5 = parseFloat(e5), s3 = e5 < 0, e5 = Math.abs(e5), n3 > 0) {
        for (o3 = e5.toFixed(n3).toString().split(`.`), a3 = r3 - o3[0].length; i3 < a3; ++i3) o3[0] = `0` + o3[0];
        o3 = (s3 ? `-` : ``) + o3[0] + `.` + o3[1];
      } else {
        for (o3 = Math.round(e5).toString(), a3 = r3 - o3.length; i3 < a3; ++i3) o3 = `0` + o3;
        o3 = (s3 ? `-` : ``) + o3;
      }
      return o3;
    }
    function m2(e5, t3) {
      var n3 = void 0, r3 = false;
      return n3 = t3.majorTicksDec === 0 ? Math.round(e5).toString() : e5.toFixed(t3.majorTicksDec), t3.majorTicksInt > 1 ? (r3 = ~n3.indexOf(`.`), ~n3.indexOf(`-`) ? `-` + [t3.majorTicksInt + t3.majorTicksDec + 2 + +!!r3 - n3.length].join(`0`) + n3.replace(`-`, ``) : [t3.majorTicksInt + t3.majorTicksDec + 1 + +!!r3 - n3.length].join(`0`) + n3) : n3;
    }
    function h2(e5) {
      return e5 * Math.PI / 180;
    }
    function g2(e5, t3) {
      return { x: -e5 * Math.sin(t3), y: e5 * Math.cos(t3) };
    }
    function _2(e5, t3, n3, r3) {
      var i3 = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], a3 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o3 = e5.createLinearGradient(i3 ? 0 : a3, i3 ? a3 : 0, i3 ? 0 : r3, i3 ? r3 : 0);
      return o3.addColorStop(0, t3), o3.addColorStop(1, n3), o3;
    }
    function v2(e5, t3) {
      if (arguments.length > 2 && arguments[2] !== void 0 && arguments[2]) return e5.restore(), true;
      e5.save();
      var n3 = t3.borderShadowWidth;
      return n3 && (e5.shadowBlur = n3, e5.shadowColor = t3.colorBorderShadow), true;
    }
    function y2(e5, t3) {
      t3.needleShadow && (e5.shadowOffsetX = 2, e5.shadowOffsetY = 2, e5.shadowBlur = 10, e5.shadowColor = t3.colorNeedleShadowDown);
    }
    function b2(e5, t3, n3) {
      return e5[`font` + t3 + `Style`] + ` ` + e5[`font` + t3 + `Weight`] + ` ` + e5[`font` + t3 + `Size`] * n3 + `px ` + e5[`font` + t3];
    }
    function x2(e5) {
      e5.shadowOffsetX = null, e5.shadowOffsetY = null, e5.shadowBlur = null, e5.shadowColor = ``, e5.strokeStyle = null, e5.lineWidth = 0, e5.save();
    }
    function S2(e5, t3, n3, r3) {
      t3.valueTextShadow && (e5.shadowOffsetX = n3, e5.shadowOffsetY = n3, e5.shadowBlur = r3, e5.shadowColor = t3.colorValueTextShadow);
    }
    function C2(e5, t3, n3, r3, i3, a3) {
      if (t3.valueBox) {
        x2(e5);
        var o3 = t3.valueDec ? 1 + t3.valueDec : 0, s3 = `9`.repeat(Math.max.apply(null, [String(parseInt(n3)).length + o3].concat(t3.majorTicks.map(function(e6) {
          return String(parseInt(e6, 10)).length + o3;
        })))), c3 = t3.valueText || p2(n3, t3), l3 = a3 / 200, u3 = a3 / 100, d3 = 0.4 * u3, m3 = 1.2 * u3;
        e5.font = b2(t3, `Value`, l3), S2(e5, t3, d3, m3);
        var h3 = e5.measureText(t3.valueText ? c3 : `-` + p2(Number(s3), t3)).width;
        x2(e5);
        var g3 = parseFloat(t3.fontValueSize) * l3 + d3 + m3, _3 = u3 * parseFloat(t3.valueBoxStroke), v3 = 2 * a3 - 2 * _3, y3 = h3 + 10 * u3, C3 = 1.1 * g3 + d3 + m3, w3 = u3 * t3.valueBoxBorderRadius, T3 = (parseFloat(t3.valueBoxWidth) || 0) / 100 * v3;
        T3 > y3 && (y3 = T3), y3 > v3 && (y3 = v3);
        var E3 = r3 - y3 / 2, D3 = i3 - C3 / 2, O3 = i3 - 5.75 * u3;
        if (e5.beginPath(), w3 ? f2(e5, E3, D3, y3, C3, w3) : e5.rect(E3, D3, y3, C3), _3) {
          var k3 = e5.createRadialGradient(r3, O3, 10 * u3, r3, O3, 20 * u3);
          k3.addColorStop(0, t3.colorValueBoxRect), k3.addColorStop(1, t3.colorValueBoxRectEnd), e5.strokeStyle = k3, e5.lineWidth = _3, e5.stroke();
        }
        t3.colorValueBoxShadow && (e5.shadowBlur = 1.2 * u3, e5.shadowColor = t3.colorValueBoxShadow), t3.colorValueBoxBackground && (e5.fillStyle = t3.colorValueBoxBackground, e5.fill()), e5.closePath(), e5.restore(), S2(e5, t3, d3, m3), e5.fillStyle = t3.colorValueText, e5.textAlign = `center`, e5.textBaseline = `alphabetic`, e5.fillText(c3, E3 + y3 / 2, i3 + C3 / 2 - g3 / 3), e5.restore();
      }
    }
    function w2(e5) {
      var t3 = e5.value, n3 = e5.minValue, r3 = e5.maxValue, i3 = 0.01 * (r3 - n3);
      return { normal: t3 < n3 ? n3 : t3 > r3 ? r3 : t3, indented: t3 < n3 ? n3 - i3 : t3 > r3 ? r3 + i3 : t3 };
    }
    function T2(e5, t3, n3, r3, i3) {
      n3.beginPath(), n3.arc(0, 0, J(e5), 0, 2 * Q, true), n3.lineWidth = t3, n3.strokeStyle = i3 ? Z.linearGradient(n3, r3, i3, e5) : r3, n3.stroke(), n3.closePath();
    }
    function E2(e5, t3) {
      var n3 = G.pixelRatio;
      return e5.maxRadius ||= e5.max - t3.borderShadowWidth - t3.borderOuterWidth * n3 - t3.borderMiddleWidth * n3 - t3.borderInnerWidth * n3 + (t3.borderOuterWidth ? 0.5 : 0) + (t3.borderMiddleWidth ? 0.5 : 0) + (t3.borderInnerWidth ? 0.5 : 0), e5.maxRadius;
    }
    function D2(e5, t3) {
      var n3 = G.pixelRatio, r3 = t3.borderShadowWidth * n3, i3 = e5.max - r3 - t3.borderOuterWidth * n3 / 2, a3 = i3 - t3.borderOuterWidth * n3 / 2 - t3.borderMiddleWidth * n3 / 2 + 0.5, o3 = a3 - t3.borderMiddleWidth * n3 / 2 - t3.borderInnerWidth * n3 / 2 + 0.5, s3 = E2(e5, t3), c3 = void 0, l3 = false;
      e5.save(), t3.borderOuterWidth && (l3 = Z.drawShadow(e5, t3, l3), T2(i3, t3.borderOuterWidth * n3, e5, t3.colorBorderOuter, t3.colorBorderOuterEnd)), t3.borderMiddleWidth && (l3 = Z.drawShadow(e5, t3, l3), T2(a3, t3.borderMiddleWidth * n3, e5, t3.colorBorderMiddle, t3.colorBorderMiddleEnd)), t3.borderInnerWidth && (l3 = Z.drawShadow(e5, t3, l3), T2(o3, t3.borderInnerWidth * n3, e5, t3.colorBorderInner, t3.colorBorderInnerEnd)), Z.drawShadow(e5, t3, l3), e5.beginPath(), e5.arc(0, 0, J(s3), 0, 2 * Q, true), t3.colorPlateEnd ? (c3 = e5.createRadialGradient(0, 0, s3 / 2, 0, 0, s3), c3.addColorStop(0, t3.colorPlate), c3.addColorStop(1, t3.colorPlateEnd)) : c3 = t3.colorPlate, e5.fillStyle = c3, e5.fill(), e5.closePath(), e5.restore();
    }
    function O2(e5, t3) {
      var n3 = e5.max * (parseFloat(t3.highlightsWidth) || 0) / 100;
      if (n3) {
        var r3 = J(A2(e5, t3) - n3 / 2), i3 = 0, a3 = t3.highlights.length, o3 = (t3.maxValue - t3.minValue) / t3.ticksAngle;
        for (e5.save(); i3 < a3; i3++) {
          var s3 = t3.highlights[i3];
          e5.beginPath(), e5.rotate($), e5.arc(0, 0, r3, Z.radians(t3.startAngle + (s3.from - t3.minValue) / o3), Z.radians(t3.startAngle + (s3.to - t3.minValue) / o3), false), e5.strokeStyle = s3.color, e5.lineWidth = n3, e5.lineCap = t3.highlightsLineCap, e5.stroke(), e5.closePath(), e5.restore(), e5.save();
        }
      }
    }
    function k2(e5, t3) {
      var n3 = A2(e5, t3), r3 = void 0, i3 = void 0, a3 = void 0, o3 = 0, s3 = 0, c3 = Math.abs(t3.minorTicks) || 0, l3 = t3.ticksAngle / (t3.maxValue - t3.minValue);
      for (e5.lineWidth = G.pixelRatio, e5.strokeStyle = t3.colorMinorTicks || t3.colorStrokeTicks, e5.save(), t3.exactTicks ? (i3 = t3.maxValue - t3.minValue, r3 = c3 ? i3 / c3 : 0, s3 = (X.mod(t3.majorTicks[0], c3) || 0) * l3) : r3 = c3 * (t3.majorTicks.length - 1); o3 < r3; ++o3) (a3 = t3.startAngle + s3 + o3 * (t3.ticksAngle / r3)) <= t3.ticksAngle + t3.startAngle && (e5.rotate(Z.radians(a3)), e5.beginPath(), e5.moveTo(0, n3), e5.lineTo(0, n3 - 0.075 * e5.max), N2(e5));
    }
    function A2(e5, t3) {
      var n3 = e5.max / 100;
      return E2(e5, t3) - 5 * n3 - (t3.barWidth ? 2 * (parseFloat(t3.barStrokeWidth) || 0) + ((parseFloat(t3.barWidth) || 0) + 5) * n3 : 0);
    }
    function j2(e5, t3) {
      Z.prepareTicks(t3);
      var n3 = J(A2(e5, t3)), r3 = void 0, i3 = void 0, a3 = t3.majorTicks.length;
      for (e5.lineWidth = 2 * G.pixelRatio, e5.save(), i3 = t3.colorMajorTicks instanceof Array ? t3.colorMajorTicks : Array(a3).fill(t3.colorStrokeTicks || t3.colorMajorTicks), r3 = 0; r3 < a3; ++r3) e5.strokeStyle = i3[r3], e5.rotate(Z.radians(M2(t3, t3.exactTicks ? t3.majorTicks[r3] : r3, a3))), e5.beginPath(), e5.moveTo(0, n3), e5.lineTo(0, n3 - 0.15 * e5.max), N2(e5);
      t3.strokeTicks && (e5.strokeStyle = t3.colorStrokeTicks || i3[0], e5.rotate($), e5.beginPath(), e5.arc(0, 0, n3, Z.radians(t3.startAngle), Z.radians(t3.startAngle + t3.ticksAngle), false), N2(e5));
    }
    function M2(e5, t3, n3) {
      if (e5.exactTicks) {
        var r3 = e5.ticksAngle / (e5.maxValue - e5.minValue);
        return e5.startAngle + r3 * (t3 - e5.minValue);
      }
      return e5.startAngle + t3 * (e5.ticksAngle / (n3 - 1));
    }
    function N2(e5) {
      e5.stroke(), e5.restore(), e5.closePath(), e5.save();
    }
    function P2(e5, t3) {
      var n3 = A2(e5, t3) - 0.15 * e5.max, r3 = {}, i3 = 0, a3 = t3.majorTicks.length, o3 = t3.animationTarget !== `needle`, s3 = t3.colorNumbers instanceof Array ? t3.colorNumbers : Array(a3).fill(t3.colorNumbers), c3 = o3 ? -(t3.value - t3.minValue) / (t3.maxValue - t3.minValue) * t3.ticksAngle : 0;
      for (o3 && (e5.save(), e5.rotate(-Z.radians(c3))), e5.font = Z.font(t3, `Numbers`, e5.max / 200), e5.lineWidth = 0, e5.textAlign = `center`, e5.textBaseline = `middle`; i3 < a3; ++i3) {
        var l3 = c3 + M2(t3, t3.exactTicks ? t3.majorTicks[i3] : i3, a3), u3 = e5.measureText(t3.majorTicks[i3]).width, d3 = t3.fontNumbersSize, f3 = Math.sqrt(u3 * u3 + d3 * d3) / 2, p3 = Z.radialPoint(n3 - f3 - t3.numbersMargin / 100 * e5.max, Z.radians(l3));
        l3 === 360 && (l3 = 0), r3[l3] || (r3[l3] = true, e5.fillStyle = s3[i3], e5.fillText(t3.majorTicks[i3], p3.x, p3.y));
      }
      o3 && e5.restore();
    }
    function F(e5, t3) {
      t3.title && (e5.save(), e5.font = Z.font(t3, `Title`, e5.max / 200), e5.fillStyle = t3.colorTitle, e5.textAlign = `center`, e5.fillText(t3.title, 0, -e5.max / 4.25, 0.8 * e5.max), e5.restore());
    }
    function I(e5, t3) {
      t3.units && (e5.save(), e5.font = Z.font(t3, `Units`, e5.max / 200), e5.fillStyle = t3.colorUnits, e5.textAlign = `center`, e5.fillText(Z.formatContext(t3, t3.units), 0, e5.max / 3.25, 0.8 * e5.max), e5.restore());
    }
    function ee(e5, t3) {
      if (t3.needle) {
        var n3 = t3.ticksAngle < 360 ? Z.normalizedValue(t3).indented : t3.value, r3 = f3 ? t3.startAngle : t3.startAngle + (n3 - t3.minValue) / (t3.maxValue - t3.minValue) * t3.ticksAngle;
        t3.barStartPosition === `right` && (r3 = t3.startAngle + t3.ticksAngle - (n3 - t3.minValue) / (t3.maxValue - t3.minValue) * t3.ticksAngle);
        var i3 = E2(e5, t3), a3 = J(i3 / 100 * t3.needleCircleSize), o3 = J(i3 / 100 * t3.needleCircleSize * 0.75), s3 = J(i3 / 100 * t3.needleEnd), c3 = J(t3.needleStart ? i3 / 100 * t3.needleStart : 0), l3 = i3 / 100 * t3.needleWidth, u3 = i3 / 100 * t3.needleWidth / 2, d3 = G.pixelRatio, f3 = t3.animationTarget !== `needle`;
        e5.save(), Z.drawNeedleShadow(e5, t3), e5.rotate(Z.radians(r3)), e5.fillStyle = Z.linearGradient(e5, t3.colorNeedle, t3.colorNeedleEnd, s3 - c3), t3.needleType === `arrow` ? (e5.beginPath(), e5.moveTo(-u3, -c3), e5.lineTo(-l3, 0), e5.lineTo(-1 * d3, s3), e5.lineTo(d3, s3), e5.lineTo(l3, 0), e5.lineTo(u3, -c3), e5.closePath(), e5.fill(), e5.beginPath(), e5.lineTo(-0.5 * d3, s3), e5.lineTo(-1 * d3, s3), e5.lineTo(-l3, 0), e5.lineTo(-u3, -c3), e5.lineTo(u3 / 2 * d3 - 2 * d3, -c3), e5.closePath(), e5.fillStyle = t3.colorNeedleShadowUp, e5.fill()) : (e5.beginPath(), e5.moveTo(-u3, s3), e5.lineTo(-u3, c3), e5.lineTo(u3, c3), e5.lineTo(u3, s3), e5.closePath(), e5.fill()), t3.needleCircleSize && (e5.restore(), Z.drawNeedleShadow(e5, t3), t3.needleCircleOuter && (e5.beginPath(), e5.arc(0, 0, a3, 0, 2 * Q, true), e5.fillStyle = Z.linearGradient(e5, t3.colorNeedleCircleOuter, t3.colorNeedleCircleOuterEnd, a3), e5.fill(), e5.closePath()), t3.needleCircleInner && (e5.beginPath(), e5.arc(0, 0, o3, 0, 2 * Q, true), e5.fillStyle = Z.linearGradient(e5, t3.colorNeedleCircleInner, t3.colorNeedleCircleInnerEnd, o3), e5.fill(), e5.closePath()), e5.restore());
      }
    }
    function te(e5, t3, n3) {
      Z.drawValueBox(e5, t3, n3, 0, e5.max - 0.33 * e5.max, e5.max);
    }
    function ne(e5) {
      var t3 = e5.startAngle, n3 = e5.startAngle + e5.ticksAngle, r3 = t3, i3 = t3 + (Z.normalizedValue(e5).normal - e5.minValue) / (e5.maxValue - e5.minValue) * e5.ticksAngle;
      if (e5.barStartPosition === `middle`) {
        var a3 = 0.5 * (e5.minValue + e5.maxValue);
        e5.value < a3 ? (r3 = 180 - (a3 - Z.normalizedValue(e5).normal) / (e5.maxValue - e5.minValue) * e5.ticksAngle, i3 = 180) : (r3 = 180, i3 = 180 + (Z.normalizedValue(e5).normal - a3) / (e5.maxValue - e5.minValue) * e5.ticksAngle);
      } else e5.barStartPosition === `right` && (r3 = n3 - i3 + t3, i3 = n3);
      return { startAngle: r3, endAngle: i3 };
    }
    function re(e5, t3) {
      var n3 = e5.max / 100, r3 = E2(e5, t3) - 5 * n3, i3 = parseFloat(t3.barStrokeWidth + ``) || 0, a3 = (parseFloat(t3.barWidth + ``) || 0) * n3, o3 = r3 - 2 * i3 - a3, s3 = (r3 - o3) / 2, c3 = o3 + s3, l3 = i3 / c3, u3 = t3.startAngle, d3 = t3.startAngle + t3.ticksAngle;
      if (e5.save(), e5.rotate($), i3 && (e5.beginPath(), e5.arc(0, 0, c3, Z.radians(u3) - l3, Z.radians(d3) + l3, false), e5.strokeStyle = t3.colorBarStroke, e5.lineWidth = 2 * s3, e5.stroke(), e5.closePath()), a3 && (e5.beginPath(), e5.arc(0, 0, c3, Z.radians(u3), Z.radians(d3), false), e5.strokeStyle = t3.colorBar, e5.lineWidth = a3, e5.stroke(), e5.closePath(), t3.barShadow && (e5.beginPath(), e5.arc(0, 0, r3, Z.radians(u3), Z.radians(d3), false), e5.clip(), e5.beginPath(), e5.strokeStyle = t3.colorBar, e5.lineWidth = 1, e5.shadowBlur = t3.barShadow, e5.shadowColor = t3.colorBarShadow, e5.shadowOffsetX = 0, e5.shadowOffsetY = 0, e5.arc(0, 0, r3, Z.radians(t3.startAngle), Z.radians(t3.startAngle + t3.ticksAngle), false), e5.stroke(), e5.closePath(), e5.restore(), e5.rotate($)), t3.barProgress)) {
        var f3 = ne(t3), p3 = f3.startAngle, m3 = f3.endAngle;
        e5.beginPath(), e5.arc(0, 0, c3, Z.radians(p3), Z.radians(m3), false), e5.strokeStyle = t3.colorBarProgress, e5.lineWidth = a3, e5.stroke(), e5.closePath();
      }
      e5.restore();
    }
    function ie(e5) {
      return e5.options.animatedValue ? e5.options.value : e5.value;
    }
    function ae(e5, t3, n3, r3, i3, a3, o3, s3) {
      e5.beginPath(), e5.fillStyle = s3 ? Z.linearGradient(e5, o3, s3, i3 > a3 ? i3 : a3, a3 > i3, i3 > a3 ? n3 : r3) : o3, t3 > 0 ? Z.roundRect(e5, n3, r3, i3, a3, t3) : e5.rect(n3, r3, i3, a3), e5.fill(), e5.closePath();
    }
    function L(e5, t3, n3, r3, i3, a3, o3, s3, c3) {
      e5.beginPath(), e5.lineWidth = t3, e5.strokeStyle = c3 ? Z.linearGradient(e5, s3, c3, o3, true, i3) : s3, n3 > 0 ? Z.roundRect(e5, r3, i3, a3, o3, n3) : e5.rect(r3, i3, a3, o3), e5.stroke(), e5.closePath();
    }
    function oe(e5, t3, n3, r3, i3, a3) {
      var o3 = G.pixelRatio;
      e5.save();
      var s3 = t3.borderRadius * o3, c3 = i3 - t3.borderShadowWidth - t3.borderOuterWidth * o3, l3 = c3 - t3.borderOuterWidth * o3 - t3.borderMiddleWidth * o3, u3 = l3 - t3.borderMiddleWidth * o3 - t3.borderInnerWidth * o3, d3 = u3 - t3.borderInnerWidth * o3, f3 = a3 - t3.borderShadowWidth - t3.borderOuterWidth * o3, p3 = f3 - t3.borderOuterWidth * o3 - t3.borderMiddleWidth * o3, m3 = p3 - t3.borderMiddleWidth * o3 - t3.borderInnerWidth * o3, h3 = m3 - t3.borderInnerWidth * o3, g3 = n3 - (l3 - c3) / 2, _3 = g3 - (u3 - l3) / 2, v3 = _3 - (d3 - u3) / 2, y3 = r3 - (p3 - f3) / 2, b3 = y3 - (m3 - p3) / 2, x3 = b3 - (h3 - m3) / 2, S3 = 0, C3 = false;
      return t3.borderOuterWidth && (C3 = Z.drawShadow(e5, t3, C3), L(e5, t3.borderOuterWidth * o3, s3, n3 + t3.borderOuterWidth * o3 / 2 - S3, r3 + t3.borderOuterWidth * o3 / 2 - S3, c3, f3, t3.colorBorderOuter, t3.colorBorderOuterEnd), S3 += 0.5 * o3), t3.borderMiddleWidth && (C3 = Z.drawShadow(e5, t3, C3), L(e5, t3.borderMiddleWidth * o3, s3 -= 1 + 2 * S3, g3 + t3.borderMiddleWidth * o3 / 2 - S3, y3 + t3.borderMiddleWidth * o3 / 2 - S3, l3 + 2 * S3, p3 + 2 * S3, t3.colorBorderMiddle, t3.colorBorderMiddleEnd), S3 += 0.5 * o3), t3.borderInnerWidth && (C3 = Z.drawShadow(e5, t3, C3), L(e5, t3.borderInnerWidth * o3, s3 -= 1 + 2 * S3, _3 + t3.borderInnerWidth * o3 / 2 - S3, b3 + t3.borderInnerWidth * o3 / 2 - S3, u3 + 2 * S3, m3 + 2 * S3, t3.colorBorderInner, t3.colorBorderInnerEnd), S3 += 0.5 * o3), Z.drawShadow(e5, t3, C3), ae(e5, s3, v3, x3, d3 + 2 * S3, h3 + 2 * S3, t3.colorPlate, t3.colorPlateEnd), e5.restore(), [v3, x3, d3, h3];
    }
    function se(e5, t3, n3, r3, i3, a3) {
      var o3 = G.pixelRatio, s3 = a3 >= i3, c3 = s3 ? 0.85 * i3 : a3, l3 = s3 ? a3 : i3;
      n3 = s3 ? q(n3 + (i3 - c3) / 2) : n3;
      var u3 = !!t3.title, d3 = !!t3.units, f3 = !!t3.valueBox, p3 = void 0, m3 = void 0, h3 = void 0;
      s3 ? (m3 = q(0.05 * l3), p3 = q(0.075 * l3), h3 = q(0.11 * l3), u3 && (l3 -= p3, r3 += p3), d3 && (l3 -= m3), f3 && (l3 -= h3)) : (m3 = p3 = q(0.15 * c3), u3 && (c3 -= p3, r3 += p3), d3 && (c3 -= m3));
      var g3 = 2 * t3.barStrokeWidth, _3 = t3.barBeginCircle ? q(c3 * t3.barBeginCircle / 200 - g3 / 2) : 0, v3 = q(c3 * t3.barWidth / 100 - g3), y3 = q(l3 * t3.barLength / 100 - g3), b3 = q((l3 - y3) / 2), x3 = q(n3 + (s3 ? c3 / 2 : b3 + _3)), S3 = q(r3 + (s3 ? l3 - b3 - _3 + g3 / 2 : c3 / 2)), C3 = !s3 || t3.hasLeft && t3.hasRight ? 0 : (t3.hasRight ? -1 : 1) * t3.ticksWidth / 100 * c3, w3 = s3 || t3.hasLeft && t3.hasRight ? 0 : (t3.hasRight ? -1 : 1) * t3.ticksWidth / 100 * c3;
      return e5.barDimensions = { isVertical: s3, width: c3, length: l3, barWidth: v3, barLength: y3, strokeWidth: g3, barMargin: b3, radius: _3, pixelRatio: o3, barOffset: null, titleMargin: u3 ? p3 : 0, unitsMargin: d3 ? m3 : 0, get ticksLength() {
        return this.barLength - this.barOffset - this.strokeWidth;
      }, X: n3 + C3, Y: r3 + w3, x0: x3 + C3, y0: S3 + w3, baseX: n3, baseY: r3, ticksPadding: t3.ticksPadding / 100 }, e5.barDimensions;
    }
    function ce(e5, t3, n3, r3, i3, a3, o3) {
      var s3 = se(e5, t3, r3, i3, a3, o3), c3 = s3.isVertical, l3 = s3.width, u3 = s3.barWidth, d3 = s3.barLength, f3 = s3.strokeWidth, p3 = s3.barMargin, m3 = s3.radius, h3 = s3.x0, g3 = s3.y0, _3 = s3.X, v3 = s3.Y, y3 = d3;
      if (e5.save(), e5.beginPath(), t3.barBeginCircle) {
        var b3 = Z.radians(c3 ? 270 : 0), x3 = Math.asin(u3 / 2 / m3), S3 = Math.cos(x3), C3 = Math.sin(x3), w3 = h3 + (c3 ? m3 * C3 : m3 * S3 - f3 / 2), T3 = c3 ? g3 - m3 * S3 : g3 + m3 * C3, E3 = J(c3 ? T3 - g3 : w3 - h3);
        e5.barDimensions.barOffset = q(E3 + m3);
        var D3 = c3 ? q(h3 - m3 * C3) : w3, O3 = c3 ? T3 : q(g3 - m3 * C3);
        n3 === `progress` && (d3 = e5.barDimensions.barOffset + (d3 - e5.barDimensions.barOffset) * (Z.normalizedValue(t3).normal - t3.minValue) / (t3.maxValue - t3.minValue));
        var k3 = q(w3 + d3 - e5.barDimensions.barOffset + f3 / 2), A3 = q(T3 - d3 + e5.barDimensions.barOffset - f3 / 2);
        e5.arc(h3, g3, m3, b3 + x3, b3 - x3), c3 ? (e5.moveTo(w3, O3), e5.lineTo(w3, A3), e5.lineTo(D3, A3), e5.lineTo(D3, O3)) : (e5.moveTo(w3, O3), e5.lineTo(k3, O3), e5.lineTo(k3, T3), e5.lineTo(w3, T3));
      } else {
        var j3 = q(c3 ? _3 + (l3 - u3) / 2 : _3 + p3), M3 = q(c3 ? v3 + d3 + p3 : v3 + (l3 - u3) / 2);
        n3 === `progress` && (d3 *= (t3.value - t3.minValue) / (t3.maxValue - t3.minValue)), c3 ? e5.rect(j3, M3, u3, -d3) : e5.rect(j3, M3, d3, u3);
      }
      n3 !== `progress` && t3.barStrokeWidth && (e5.lineWidth = f3, e5.strokeStyle = t3.colorBarStroke, e5.stroke()), n3 !== `progress` && t3.colorBar ? (e5.fillStyle = t3.colorBarEnd ? Z.linearGradient(e5, t3.colorBar, t3.colorBarEnd, d3, c3, c3 ? v3 : _3) : t3.colorBar, e5.fill()) : n3 === `progress` && t3.colorBarProgress && (e5.fillStyle = t3.colorBarProgressEnd ? Z.linearGradient(e5, t3.colorBarProgress, t3.colorBarProgressEnd, y3, c3, c3 ? v3 : _3) : t3.colorBarProgress, e5.fill()), e5.closePath(), t3.barBeginCircle && (e5.barDimensions.radius += f3), e5.barDimensions.barWidth += f3, e5.barDimensions.barLength += f3;
    }
    function le(e5, t3, n3, r3, i3, a3) {
      ce(e5, t3, ``, n3, r3, i3, a3);
    }
    function ue(e5, t3) {
      return t3.needleSide !== e5 || t3.tickSide !== e5 || t3.numberSide !== e5;
    }
    function de(e5, t3, n3, r3, i3, a3) {
      t3.barProgress && ce(e5, t3, `progress`, n3, r3, i3, a3);
    }
    function fe(e5, t3) {
      var n3 = e5.barDimensions, r3 = n3.isVertical, i3 = n3.width, a3 = n3.length, o3 = n3.barWidth, s3 = n3.barOffset, c3 = n3.barMargin, l3 = n3.X, u3 = n3.Y, d3 = n3.ticksLength, f3 = n3.ticksPadding, p3 = i3 * (parseFloat(t3.highlightsWidth) || 0) / 100;
      if (t3.highlights && p3) {
        var m3 = t3.tickSide !== `right`, h3 = t3.tickSide !== `left`, g3 = 0, _3 = t3.highlights.length, v3 = (i3 - o3) / 2, y3 = t3.maxValue - t3.minValue, b3 = q(r3 ? l3 + v3 : l3 + c3 + s3), x3 = p3, S3 = r3 ? u3 + a3 - c3 - s3 : u3 + v3, C3 = q((t3.ticksWidth / 100 + f3) * i3) + (p3 - t3.ticksWidth / 100 * i3), w3 = q(o3 + f3 * i3);
        for (e5.save(); g3 < _3; g3++) {
          var T3 = t3.highlights[g3], E3 = d3 * J(t3.minValue - T3.from) / y3, D3 = d3 * J((T3.to - T3.from) / y3);
          e5.beginPath(), e5.fillStyle = T3.color, r3 ? (m3 && e5.rect(b3 - C3, S3 - E3, x3, -D3), h3 && e5.rect(b3 + w3, S3 - E3, x3, -D3)) : (m3 && e5.rect(b3 + E3, S3 - C3, D3, x3), h3 && e5.rect(b3 + E3, S3 + w3, D3, x3)), e5.fill(), e5.closePath();
        }
      }
    }
    function R(e5, t3, n3, r3, i3) {
      e5.beginPath(), e5.moveTo(t3, n3), e5.lineTo(r3, i3), e5.stroke(), e5.closePath(), e5.save();
    }
    function pe(e5, t3, n3, r3, i3, a3, o3, s3, c3) {
      var l3 = e5.barDimensions, u3 = l3.isVertical, d3 = l3.length, f3 = l3.barWidth, p3 = l3.barOffset, m3 = l3.barMargin, h3 = l3.pixelRatio, g3 = l3.width, _3 = l3.X, v3 = l3.Y, y3 = l3.ticksLength, b3 = l3.ticksPadding, x3 = (g3 - f3) / 2, S3 = void 0, C3 = void 0, w3 = 0, T3 = n3.length, E3 = void 0, D3 = c3 * g3, O3 = x3 - b3 * g3, k3 = x3 + f3 + D3 + b3 * g3, A3 = t3 instanceof Array ? t3 : Array(n3.length).fill(t3);
      e5.lineWidth = s3 * h3, e5.save();
      for (var j3 = y3 / (i3 - r3); w3 < T3; w3++) E3 = n3[w3], e5.strokeStyle = A3[w3], u3 ? (C3 = v3 + d3 - m3 - p3 + (r3 - E3) * j3, a3 && (S3 = _3 + O3, R(e5, S3, C3, q(S3 - D3), C3)), o3 && (S3 = _3 + k3, R(e5, S3, C3, q(S3 - D3), C3))) : (S3 = _3 + m3 + p3 - (r3 - E3) * j3, a3 && (C3 = v3 + O3, R(e5, S3, C3, S3, q(C3 - D3))), o3 && (C3 = v3 + k3, R(e5, S3, q(C3), S3, C3 - D3)));
    }
    function me(e5, t3) {
      var n3 = we(Z.prepareTicks(t3), 2), r3 = n3[0], i3 = n3[1], a3 = 2, o3 = (t3.maxValue - t3.minValue) / (t3.majorTicks.length - 1), s3 = t3.colorMajorTicks instanceof Array ? t3.colorMajorTicks : Array(t3.majorTicks.length).fill(t3.colorStrokeTicks || t3.colorMajorTicks);
      if (pe(e5, s3, t3.exactTicks ? t3.majorTicks : t3.majorTicks.map(function(e6, n4) {
        return t3.minValue + o3 * n4;
      }), t3.minValue, t3.maxValue, r3, i3, a3, t3.ticksWidth / 100), t3.strokeTicks) {
        var c3 = e5.barDimensions, l3 = c3.isVertical, u3 = c3.length, d3 = c3.width, f3 = c3.barWidth, p3 = c3.barMargin, m3 = c3.barOffset, h3 = c3.X, g3 = c3.Y, _3 = c3.ticksLength, v3 = c3.pixelRatio, y3 = c3.ticksPadding, b3 = (d3 - f3) / 2 + f3 + y3 * d3, x3 = (d3 - f3) / 2 - y3 * d3, S3 = void 0, C3 = void 0, w3 = void 0, T3 = void 0;
        e5.strokeStyle = t3.colorStrokeTicks || s3[0], a3 *= v3, l3 ? (C3 = g3 + u3 - p3 - m3 + a3 / 2, T3 = C3 - _3 - a3, r3 && (w3 = S3 = q(h3 + x3), z(e5, S3, C3, w3, T3)), i3 && (w3 = S3 = q(h3 + b3), z(e5, S3, C3, w3, T3))) : (S3 = h3 + p3 + m3 - a3 / 2, w3 = S3 + _3 + a3, r3 && (T3 = C3 = q(g3 + x3), z(e5, S3, C3, w3, T3)), i3 && (T3 = C3 = q(g3 + b3), z(e5, S3, C3, w3, T3)));
      }
    }
    function z(e5, t3, n3, r3, i3) {
      e5.beginPath(), e5.moveTo(t3, n3), e5.lineTo(r3, i3), e5.stroke(), e5.closePath();
    }
    function he(e5, t3) {
      var n3 = we(Z.prepareTicks(t3), 2), r3 = n3[0], i3 = n3[1], a3 = [], o3 = t3.minValue, s3 = Math.abs(t3.minorTicks) || 0, c3 = s3 ? (t3.maxValue - t3.minValue) / (s3 * (t3.majorTicks.length - 1)) : 0;
      if (s3) {
        if (t3.exactTicks) for (var l3 = X.mod(t3.majorTicks[0], s3) || 0; o3 < t3.maxValue; o3 += s3) l3 + o3 < t3.maxValue && a3.push(l3 + o3);
        else for (; o3 < t3.maxValue; o3 += c3) a3.push(o3);
      }
      pe(e5, t3.colorMinorTicks || t3.colorStrokeTicks, a3, t3.minValue, t3.maxValue, r3, i3, 1, t3.ticksWidthMinor / 100);
    }
    function ge(e5, t3) {
      var n3 = e5.barDimensions, r3 = n3.isVertical, i3 = n3.length, a3 = n3.width, o3 = n3.barWidth, s3 = n3.barMargin, c3 = n3.barOffset, l3 = n3.X, u3 = n3.Y, d3 = n3.ticksLength, f3 = n3.ticksPadding, p3 = t3.maxValue - t3.minValue, m3 = p3 / (t3.majorTicks.length - 1), h3 = t3.exactTicks ? t3.majorTicks : t3.majorTicks.map(function(e6, n4) {
        return t3.minValue + m3 * n4;
      }), g3 = h3.length, _3 = t3.numberSide !== `right`, v3 = t3.numberSide !== `left`, y3 = t3.fontNumbersSize * a3 / 200, b3 = 0, x3 = (t3.ticksWidth / 100 + 2 * f3) * a3, S3 = (a3 - o3) / 2 - x3, C3 = (a3 - o3) / 2 + o3 + x3, w3 = void 0, T3 = void 0, E3 = void 0, D3 = void 0, O3 = t3.colorNumbers instanceof Array ? t3.colorNumbers : Array(g3).fill(t3.colorNumbers), k3 = t3.numbersMargin / 100 * a3;
      for (e5.font = Z.font(t3, `Numbers`, a3 / 200), e5.lineWidth = 0, e5.textAlign = `center`; b3 < g3; b3++) e5.fillStyle = O3[b3], D3 = t3.majorTicks[b3], E3 = t3.exactTicks ? d3 * ((h3[b3] - t3.minValue) / p3) : b3 * d3 / (g3 - 1), r3 ? (T3 = u3 + i3 - s3 - c3 - E3 + y3 / 3, _3 && (e5.textAlign = `right`, e5.fillText(D3, l3 + S3 - k3, T3)), v3 && (e5.textAlign = `left`, e5.fillText(D3, l3 + C3 + k3, T3))) : (e5.measureText(D3).width, w3 = l3 + s3 + c3 + E3, _3 && e5.fillText(D3, w3, u3 + S3 - k3), v3 && e5.fillText(D3, w3, u3 + C3 + y3 + k3));
    }
    function _e(e5, t3) {
      if (t3.title) {
        var n3 = e5.barDimensions, r3 = n3.isVertical, i3 = n3.width, a3 = n3.length, o3 = n3.baseX, s3 = n3.baseY, c3 = n3.titleMargin, l3 = t3.fontTitleSize * i3 / 200, u3 = q(o3 + (r3 ? i3 : a3) / 2), d3 = q(s3 + c3 / 2 - (r3 ? l3 : l3 / 2) - 0.025 * (r3 ? a3 : i3));
        e5.save(), e5.textAlign = `center`, e5.fillStyle = t3.colorTitle, e5.font = Z.font(t3, `Title`, i3 / 200), e5.lineWidth = 0, e5.fillText(t3.title, u3, d3, r3 ? i3 : a3);
      }
    }
    function ve(e5, t3) {
      if (t3.units) {
        var n3 = e5.barDimensions, r3 = n3.isVertical, i3 = n3.width, a3 = n3.length, o3 = n3.baseX, s3 = n3.baseY, c3 = n3.unitsMargin, l3 = t3.fontUnitsSize * i3 / 200, u3 = q(o3 + (r3 ? i3 : a3) / 2), d3 = q(s3 + (r3 ? a3 : i3) + c3 / 2 - l3 / 2);
        e5.save(), e5.textAlign = `center`, e5.fillStyle = t3.colorUnits, e5.font = Z.font(t3, `Units`, i3 / 200), e5.lineWidth = 0, e5.fillText(Z.formatContext(t3, t3.units), u3, d3, r3 ? i3 : a3);
      }
    }
    function ye(e5, t3) {
      if (t3.needle) {
        var n3 = e5.barDimensions, r3 = n3.isVertical, i3 = n3.width, a3 = n3.length, o3 = n3.barWidth, s3 = n3.barOffset, c3 = n3.barMargin, l3 = n3.ticksLength, u3 = n3.X, d3 = n3.Y, f3 = n3.ticksPadding, p3 = t3.needleSide !== `right`, m3 = t3.needleSide !== `left`, h3 = l3 * (Z.normalizedValue(t3).indented - t3.minValue) / (t3.maxValue - t3.minValue), g3 = (t3.ticksWidth / 100 + f3) * i3, _3 = o3 / 2 + g3, v3 = _3 * (t3.needleEnd / 100), y3 = void 0, b3 = void 0, x3 = void 0, S3 = void 0, C3 = t3.needleType.toLowerCase() === `arrow` ? Se : xe, w3 = (i3 - o3) / 2, T3 = _3 * (t3.needleStart / 100), E3 = w3 - g3 - T3, D3 = w3 + o3 + g3 + T3;
        e5.save(), Z.drawNeedleShadow(e5, t3), r3 ? (x3 = q(d3 + a3 - c3 - s3 - h3), p3 && (y3 = q(u3 + E3), b3 = y3 + v3, C3(e5, t3, y3, x3, b3, x3, v3)), m3 && (y3 = q(u3 + D3), b3 = y3 - v3, C3(e5, t3, y3, x3, b3, x3, v3, true))) : (y3 = q(u3 + c3 + s3 + h3), p3 && (x3 = q(d3 + E3), S3 = x3 + v3, C3(e5, t3, y3, x3, y3, S3, v3)), m3 && (x3 = q(d3 + D3), S3 = x3 - v3, C3(e5, t3, y3, x3, y3, S3, v3, true))), e5.restore();
      }
    }
    function be(e5, t3, n3, r3) {
      return t3.colorNeedleEnd ? Z.linearGradient(e5, r3 ? t3.colorNeedleEnd : t3.colorNeedle, r3 ? t3.colorNeedle : t3.colorNeedleEnd, n3, !e5.barDimensions.isVertical) : t3.colorNeedle;
    }
    function xe(e5, t3, n3, r3, i3, a3, o3, s3) {
      e5.lineWidth = t3.needleWidth, e5.strokeStyle = be(e5, t3, o3, s3), e5.beginPath(), e5.moveTo(n3, r3), e5.lineTo(i3, a3), e5.stroke(), e5.closePath();
    }
    function Se(e5, t3, n3, r3, i3, a3, o3, s3) {
      var c3 = o3 - q(0.4 * o3), l3 = n3 === i3, u3 = t3.needleWidth / 2;
      e5.fillStyle = be(e5, t3, o3, s3), e5.beginPath(), l3 ? (r3 > a3 && (c3 *= -1), e5.moveTo(n3 - u3, r3), e5.lineTo(n3 + u3, r3), e5.lineTo(n3 + u3, r3 + c3), e5.lineTo(n3, a3), e5.lineTo(n3 - u3, r3 + c3), e5.lineTo(n3 - u3, r3)) : (n3 > i3 && (c3 *= -1), e5.moveTo(n3, r3 - u3), e5.lineTo(n3, r3 + u3), e5.lineTo(n3 + c3, r3 + u3), e5.lineTo(i3, r3), e5.lineTo(n3 + c3, r3 - u3), e5.lineTo(n3, r3 - u3)), e5.fill(), e5.closePath();
    }
    function Ce(e5, t3, n3, r3, i3, a3, o3) {
      var s3 = (parseFloat(t3.fontValueSize) || 0) * a3 / 200, c3 = (0.11 * o3 - s3) / 2;
      e5.barDimensions.isVertical && Z.drawValueBox(e5, t3, n3, r3 + a3 / 2, i3 + o3 - s3 - c3, a3);
    }
    var we = /* @__PURE__ */ (function() {
      function e5(e6, t3) {
        var n3 = [], r3 = true, i3 = false, a3 = void 0;
        try {
          for (var o3, s3 = e6[Symbol.iterator](); !(r3 = (o3 = s3.next()).done) && (n3.push(o3.value), !t3 || n3.length !== t3); r3 = true) ;
        } catch (e7) {
          i3 = true, a3 = e7;
        } finally {
          try {
            !r3 && s3.return && s3.return();
          } finally {
            if (i3) throw a3;
          }
        }
        return n3;
      }
      return function(t3, n3) {
        if (Array.isArray(t3)) return t3;
        if (Symbol.iterator in Object(t3)) return e5(t3, n3);
        throw TypeError(`Invalid attempt to destructure non-iterable instance`);
      };
    })(), B = function e5(t3, n3, r3) {
      t3 === null && (t3 = Function.prototype);
      var i3 = Object.getOwnPropertyDescriptor(t3, n3);
      if (i3 === void 0) {
        var a3 = Object.getPrototypeOf(t3);
        return a3 === null ? void 0 : e5(a3, n3, r3);
      }
      if (`value` in i3) return i3.value;
      var o3 = i3.get;
      if (o3 !== void 0) return o3.call(r3);
    }, Te = function e5(t3, n3, r3, i3) {
      var a3 = Object.getOwnPropertyDescriptor(t3, n3);
      if (a3 === void 0) {
        var o3 = Object.getPrototypeOf(t3);
        o3 !== null && e5(o3, n3, r3, i3);
      } else if (`value` in a3 && a3.writable) a3.value = r3;
      else {
        var s3 = a3.set;
        s3 !== void 0 && s3.call(i3, r3);
      }
      return r3;
    }, V = /* @__PURE__ */ (function() {
      function e5(e6, t3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r3 = t3[n3];
          r3.enumerable = r3.enumerable || false, r3.configurable = true, `value` in r3 && (r3.writable = true), Object.defineProperty(e6, r3.key, r3);
        }
      }
      return function(t3, n3, r3) {
        return n3 && e5(t3.prototype, n3), r3 && e5(t3, r3), t3;
      };
    })();
    Object.assign || Object.defineProperty(Object, "assign", { enumerable: false, configurable: true, writable: true, value: function(e5, t3) {
      if (e5 == null) throw TypeError(`Cannot convert first argument to object`);
      for (var n3 = Object(e5), r3 = 1; r3 < arguments.length; r3++) {
        var i3 = arguments[r3];
        if (i3 != null) for (var a3 = Object.keys(Object(i3)), o3 = 0, s3 = a3.length; o3 < s3; o3++) {
          var c3 = a3[o3], l3 = Object.getOwnPropertyDescriptor(i3, c3);
          l3 !== void 0 && l3.enumerable && (n3[c3] = i3[c3]);
        }
      }
      return n3;
    } }), Array.prototype.indexOf || Object.defineProperty(Array.prototype, "indexOf", { value: function(e5, t3) {
      var n3;
      if (this === null) throw TypeError(`"this" is null or not defined`);
      var r3 = Object(this), i3 = r3.length >>> 0;
      if (i3 === 0) return -1;
      var a3 = +t3 || 0;
      if (Math.abs(a3) === 1 / 0 && (a3 = 0), a3 >= i3) return -1;
      for (n3 = Math.max(a3 >= 0 ? a3 : i3 - Math.abs(a3), 0); n3 < i3; ) {
        if (n3 in r3 && r3[n3] === e5) return n3;
        n3++;
      }
      return -1;
    } }), Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", { value: function(e5) {
      if (this === null) throw TypeError(`this is null or not defined`);
      for (var t3 = Object(this), n3 = t3.length >>> 0, r3 = arguments[1] | 0, i3 = r3 < 0 ? Math.max(n3 + r3, 0) : Math.min(r3, n3), a3 = arguments[2], o3 = a3 === void 0 ? n3 : a3 | 0, s3 = o3 < 0 ? Math.max(n3 + o3, 0) : Math.min(o3, n3); i3 < s3; ) t3[i3] = e5, i3++;
      return t3;
    } }), typeof window > `u` && (window = typeof global > `u` ? {} : global);
    var Ee = (function() {
      function e5() {
        a2(this, e5), this._events = {}, this.addListener = this.on, this.removeListener = this.off;
      }
      return V(e5, [{ key: `emit`, value: function(e6) {
        if (this._events[e6]) {
          for (var t3 = 0, n3 = this._events[e6].length, r3 = arguments.length, i3 = Array(r3 > 1 ? r3 - 1 : 0), a3 = 1; a3 < r3; a3++) i3[a3 - 1] = arguments[a3];
          for (; t3 < n3; t3++) this._events[e6][t3] && this._events[e6][t3].apply(this, i3);
        }
      } }, { key: `once`, value: function(e6) {
        for (var t3 = [...arguments].slice(1), n3 = 0, r3 = t3.length, i3 = this; n3 < r3; n3++) (function() {
          var r4 = t3[n3];
          t3[n3] = function t4() {
            i3.off(e6, t4), r4.apply(i3, arguments);
          };
        })();
        this.on.apply(this, [e6].concat(t3));
      } }, { key: `on`, value: function(e6) {
        this._events[e6] || (this._events[e6] = []);
        for (var t3 = 0, n3 = arguments.length <= 1 ? 0 : arguments.length - 1; t3 < n3; t3++) this._events[e6].push(arguments.length <= t3 + 1 ? void 0 : arguments[t3 + 1]);
      } }, { key: `off`, value: function(e6) {
        if (this._events[e6]) for (var t3 = 0, n3 = arguments.length <= 1 ? 0 : arguments.length - 1; t3 < n3; t3++) for (var r3 = arguments.length <= t3 + 1 ? void 0 : arguments[t3 + 1], i3 = void 0; ~(i3 = this._events[e6].indexOf(r3)); ) this._events[e6].splice(i3, 1);
      } }, { key: `removeAllListeners`, value: function(e6) {
        delete this._events[e6];
      } }, { key: `listeners`, get: function() {
        return this._events;
      } }]), e5;
    })(), De = o2(`requestAnimationFrame`) || function(e5) {
      return setTimeout(function() {
        return e5((/* @__PURE__ */ new Date()).getTime());
      }, 1e3 / 60);
    }, H = { linear: function(e5) {
      return e5;
    }, quad: function(e5) {
      return e5 ** 2;
    }, dequad: function(e5) {
      return 1 - H.quad(1 - e5);
    }, quint: function(e5) {
      return e5 ** 5;
    }, dequint: function(e5) {
      return 1 - (1 - e5) ** 5;
    }, cycle: function(e5) {
      return 1 - Math.sin(Math.acos(e5));
    }, decycle: function(e5) {
      return Math.sin(Math.acos(1 - e5));
    }, bounce: function(e5) {
      return 1 - H.debounce(1 - e5);
    }, debounce: function(e5) {
      for (var t3 = 0, n3 = 1; ; t3 += n3, n3 /= 2) if (e5 >= (7 - 4 * t3) / 11) return -(((11 - 6 * t3 - 11 * e5) / 4) ** 2) + n3 ** 2;
    }, elastic: function(e5) {
      return 1 - H.delastic(1 - e5);
    }, delastic: function(e5) {
      return 2 ** (10 * (e5 - 1)) * Math.cos(20 * Math.PI * 1.5 / 3 * e5);
    } }, U = (function() {
      function e5() {
        var t3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : `linear`, n3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 250, r3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
        }, i3 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : function() {
        };
        if (a2(this, e5), this.duration = n3, this.rule = t3, this.draw = r3, this.end = i3, typeof this.draw != `function`) throw TypeError(`Invalid animation draw callback:`, r3);
        if (typeof this.end != `function`) throw TypeError(`Invalid animation end callback:`, i3);
      }
      return V(e5, [{ key: `animate`, value: function(e6, t3) {
        var n3 = this;
        this.frame && this.cancel();
        var r3 = window.performance && window.performance.now ? window.performance.now() : o2(`animationStartTime`) || Date.now();
        e6 ||= this.draw, t3 ||= this.end, this.draw = e6, this.end = t3, this.frame = De(function(i3) {
          return s2(i3, e6, r3, H[n3.rule] || n3.rule, n3.duration, t3, n3);
        });
      } }, { key: `cancel`, value: function() {
        this.frame &&= ((o2(`cancelAnimationFrame`) || function(e6) {
        })(this.frame), null);
      } }, { key: `destroy`, value: function() {
        this.cancel(), this.draw = null, this.end = null;
      } }]), e5;
    })();
    U.rules = H;
    var W = (function() {
      function t3(n3, r3, i3) {
        a2(this, t3), this.options = n3, this.element = r3.toLowerCase(), this.type = t3.toDashed(i3), this.Type = e4[i3], this.mutationsObserved = false, this.isObservable = !!window.MutationObserver, window.GAUGES_NO_AUTO_INIT || t3.domReady(this.traverse.bind(this));
      }
      return V(t3, [{ key: `isValidNode`, value: function(e5) {
        return !(!e5.tagName || e5.tagName.toLowerCase() !== this.element || e5.getAttribute(`data-type`) !== this.type);
      } }, { key: `traverse`, value: function() {
        for (var e5 = document.getElementsByTagName(this.element), t4 = 0, n3 = e5.length; t4 < n3; t4++) this.process(e5[t4]);
        this.isObservable && !this.mutationsObserved && (new MutationObserver(this.observe.bind(this)).observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true }), this.mutationsObserved = true);
      } }, { key: `observe`, value: function(e5) {
        for (var t4 = 0, n3 = e5.length; t4 < n3; t4++) {
          var r3 = e5[t4];
          if (r3.type === `attributes` && r3.attributeName === `data-type` && this.isValidNode(r3.target) && r3.oldValue !== this.type) setTimeout(this.process.bind(this, r3.target));
          else if (r3.addedNodes && r3.addedNodes.length) for (var i3 = 0, a3 = r3.addedNodes.length; i3 < a3; i3++) setTimeout(this.process.bind(this, r3.addedNodes[i3]));
        }
      } }, { key: `process`, value: function(e5) {
        var n3 = this;
        if (!this.isValidNode(e5)) return null;
        var r3 = void 0, i3 = JSON.parse(JSON.stringify(this.options)), a3 = null;
        for (r3 in i3) if (i3.hasOwnProperty(r3)) {
          var o3 = t3.toAttributeName(r3), s3 = t3.parse(e5.getAttribute(o3));
          s3 != null && (i3[r3] = s3);
        }
        return i3.renderTo = e5, a3 = new this.Type(i3), a3.draw && a3.draw(), this.isObservable && (a3.observer = new MutationObserver(function(r4) {
          r4.forEach(function(r5) {
            if (r5.type === `attributes`) {
              var i4 = r5.attributeName.toLowerCase(), o4 = e5.getAttribute(i4).toLowerCase();
              if (i4 === `data-type` && o4 && o4 !== n3.type) a3.observer.disconnect(), delete a3.observer, a3.destroy && a3.destroy();
              else if (i4.substr(0, 5) === `data-`) {
                var s4 = i4.substr(5).split(`-`).map(function(e6, t4) {
                  return t4 ? e6.charAt(0).toUpperCase() + e6.substr(1) : e6;
                }).join(``), c3 = {};
                c3[s4] = t3.parse(e5.getAttribute(r5.attributeName)), s4 === `value` ? a3 && (a3.value = c3[s4]) : a3.update && a3.update(c3);
              }
            }
          });
        }), a3.observer.observe(e5, { attributes: true })), a3;
      } }], [{ key: `parse`, value: function(e5) {
        if (e5 === `true`) return true;
        if (e5 === `false`) return false;
        if (e5 !== `undefined`) {
          if (e5 === `null`) return null;
          if (/^[-+#.\w\d\s]+(?:,[-+#.\w\d\s]*)+$/.test(e5)) return e5.split(`,`);
          try {
            return JSON.parse(e5);
          } catch {
          }
          return e5;
        }
      } }, { key: `toDashed`, value: function(e5) {
        for (var t4 = e5.split(/(?=[A-Z])/), n3 = 1, r3 = t4.length, i3 = t4[0].toLowerCase(); n3 < r3; n3++) i3 += `-` + t4[n3].toLowerCase();
        return i3;
      } }, { key: `toCamelCase`, value: function(e5) {
        for (var t4 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], n3 = e5.split(/-/), r3 = 0, i3 = n3.length, a3 = ``; r3 < i3; r3++) a3 += r3 || t4 ? n3[r3][0].toUpperCase() + n3[r3].substr(1).toLowerCase() : n3[r3].toLowerCase();
        return a3;
      } }, { key: `toAttributeName`, value: function(e5) {
        return `data-` + t3.toDashed(e5);
      } }, { key: `domReady`, value: function(e5) {
        if (/comp|inter|loaded/.test((window.document || {}).readyState + ``)) return e5();
        window.addEventListener ? window.addEventListener(`DOMContentLoaded`, e5, false) : window.attachEvent && window.attachEvent(`onload`, e5);
      } }]), t3;
    })(), G = (function() {
      function e5(t3, n3, r3) {
        a2(this, e5), e5.collection.push(this), this.width = n3 || 0, this.height = r3 || 0, this.element = t3, this.init();
      }
      return V(e5, [{ key: `init`, value: function() {
        var t3 = e5.pixelRatio;
        this.element.width = this.width * t3, this.element.height = this.height * t3, this.element.style.width = this.width + `px`, this.element.style.height = this.height + `px`, this.elementClone = this.element.cloneNode(true), this.context = this.element.getContext(`2d`), this.contextClone = this.elementClone.getContext(`2d`), this.drawWidth = this.element.width, this.drawHeight = this.element.height, this.drawX = this.drawWidth / 2, this.drawY = this.drawHeight / 2, this.minSide = this.drawX < this.drawY ? this.drawX : this.drawY, this.elementClone.initialized = false, this.contextClone.translate(this.drawX, this.drawY), this.contextClone.save(), this.context.translate(this.drawX, this.drawY), this.context.save(), this.context.max = this.contextClone.max = this.minSide, this.context.maxRadius = this.contextClone.maxRadius = null;
      } }, { key: `destroy`, value: function() {
        var t3 = e5.collection.indexOf(this);
        ~t3 && e5.collection.splice(t3, 1), this.context.clearRect(-this.drawX, -this.drawY, this.drawWidth, this.drawHeight), this.context.max = null, delete this.context.max, this.context.maxRadius = null, delete this.context.maxRadius, this.context = null, this.contextClone = null, this.elementClone = null, this.element = null, this.onRedraw = null;
      } }, { key: `commit`, value: function() {
        var t3 = e5.pixelRatio;
        return t3 !== 1 && (this.contextClone.scale(t3, t3), this.contextClone.save()), this;
      } }, { key: `redraw`, value: function() {
        return this.init(), this.onRedraw && this.onRedraw(), this;
      } }], [{ key: `redraw`, value: function() {
        for (var t3 = 0, n3 = e5.collection.length; t3 < n3; t3++) e5.collection[t3].redraw();
      } }, { key: `pixelRatio`, get: function() {
        return window.devicePixelRatio || 1;
      } }]), e5;
    })();
    G.collection = [], window.matchMedia && window.matchMedia(`screen and (min-resolution: 2dppx)`).addListener(G.redraw);
    var K = { renderTo: null, width: 0, height: 0, minValue: 0, maxValue: 100, value: 0, units: false, exactTicks: false, majorTicks: [0, 20, 40, 60, 80, 100], minorTicks: 10, strokeTicks: true, animatedValue: false, animateOnInit: false, title: false, borders: true, numbersMargin: 1, listeners: null, valueInt: 3, valueDec: 2, majorTicksInt: 1, majorTicksDec: 0, animation: true, animationDuration: 500, animationRule: `cycle`, colorPlate: `#fff`, colorPlateEnd: ``, colorMajorTicks: `#444`, colorMinorTicks: `#666`, colorStrokeTicks: ``, colorTitle: `#888`, colorUnits: `#888`, colorNumbers: `#444`, colorNeedle: `rgba(240,128,128,1)`, colorNeedleEnd: `rgba(255,160,122,.9)`, colorValueText: `#444`, colorValueTextShadow: `rgba(0,0,0,0.3)`, colorBorderShadow: `rgba(0,0,0,0.5)`, colorBorderOuter: `#ddd`, colorBorderOuterEnd: `#aaa`, colorBorderMiddle: `#eee`, colorBorderMiddleEnd: `#f0f0f0`, colorBorderInner: `#fafafa`, colorBorderInnerEnd: `#ccc`, colorValueBoxRect: `#888`, colorValueBoxRectEnd: `#666`, colorValueBoxBackground: `#babab2`, colorValueBoxShadow: `rgba(0,0,0,1)`, colorNeedleShadowUp: `rgba(2,255,255,0.2)`, colorNeedleShadowDown: `rgba(188,143,143,0.45)`, colorBarStroke: `#222`, colorBar: `#ccc`, colorBarProgress: `#888`, colorBarShadow: `#000`, fontNumbers: `Arial`, fontTitle: `Arial`, fontUnits: `Arial`, fontValue: `Arial`, fontNumbersSize: 20, fontTitleSize: 24, fontUnitsSize: 22, fontValueSize: 26, fontNumbersStyle: `normal`, fontTitleStyle: `normal`, fontUnitsStyle: `normal`, fontValueStyle: `normal`, fontNumbersWeight: `normal`, fontTitleWeight: `normal`, fontUnitsWeight: `normal`, fontValueWeight: `normal`, needle: true, needleShadow: true, needleType: `arrow`, needleStart: 5, needleEnd: 85, needleWidth: 4, borderOuterWidth: 3, borderMiddleWidth: 3, borderInnerWidth: 3, borderShadowWidth: 3, valueBox: true, valueBoxStroke: 5, valueBoxWidth: 0, valueText: ``, valueTextShadow: true, valueBoxBorderRadius: 2.5, highlights: [{ from: 20, to: 60, color: `#eee` }, { from: 60, to: 80, color: `#ccc` }, { from: 80, to: 100, color: `#999` }], highlightsWidth: 15, highlightsLineCap: `butt`, barWidth: 20, barStrokeWidth: 0, barProgress: true, barShadow: 0 };
    c2.prototype = Object.create(Array.prototype), c2.prototype.constructor = c2, c2.prototype.get = function(e5) {
      if (typeof e5 == `string`) {
        for (var t3 = 0, n3 = this.length; t3 < n3; t3++) if ((this[t3].options.renderTo.tagName ? this[t3].options.renderTo : document.getElementById(this[t3].options.renderTo || ``)).getAttribute(`id`) === e5) return this[t3];
      } else if (typeof e5 == `number`) return this[e5];
      return null;
    };
    var Oe = `2.1.7`, q = Math.round, J = Math.abs, Y = new c2();
    Y.version = Oe;
    var X = (function(t3) {
      function n3(t4) {
        a2(this, n3);
        var i3 = r2(this, (n3.__proto__ || Object.getPrototypeOf(n3)).call(this)), o3 = i3.constructor.name;
        if (o3 === `BaseGauge`) throw TypeError(`Attempt to instantiate abstract class!`);
        if (Y.push(i3), t4.listeners && Object.keys(t4.listeners).forEach(function(e5) {
          (t4.listeners[e5] instanceof Array ? t4.listeners[e5] : [t4.listeners[e5]]).forEach(function(t5) {
            i3.on(e5, t5);
          });
        }), i3.version = Oe, i3.type = e4[o3] || n3, i3.initialized = false, t4.minValue = parseFloat(t4.minValue), t4.maxValue = parseFloat(t4.maxValue), t4.value = parseFloat(t4.value) || 0, t4.borders || (t4.borderInnerWidth = t4.borderMiddleWidth = t4.borderOuterWidth = 0), !t4.renderTo) throw TypeError(`Canvas element was not specified when creating the Gauge object!`);
        var s3 = t4.renderTo.tagName ? t4.renderTo : document.getElementById(t4.renderTo);
        if (!(s3 instanceof HTMLCanvasElement)) throw TypeError(`Given gauge canvas element is invalid!`);
        return t4.width = parseFloat(t4.width) || 0, t4.height = parseFloat(t4.height) || 0, t4.width && t4.height || (t4.width ||= s3.parentNode ? s3.parentNode.offsetWidth : s3.offsetWidth, t4.height ||= s3.parentNode ? s3.parentNode.offsetHeight : s3.offsetHeight), i3.options = t4 || {}, i3.options.animateOnInit && (i3._value = i3.options.value, i3.options.value = i3.options.minValue), i3.canvas = new G(s3, t4.width, t4.height), i3.canvas.onRedraw = i3.draw.bind(i3), i3.animation = new U(t4.animationRule, t4.animationDuration), i3;
      }
      return i2(n3, t3), V(n3, [{ key: `update`, value: function(e5) {
        return Object.assign(this.options, this.type.configure(e5 || {})), this.canvas.width = this.options.width, this.canvas.height = this.options.height, this.animation.rule = this.options.animationRule, this.animation.duration = this.options.animationDuration, this.canvas.redraw(), this;
      } }, { key: `destroy`, value: function() {
        var e5 = Y.indexOf(this);
        ~e5 && Y.splice(e5, 1), this.canvas.destroy(), this.canvas = null, this.animation.destroy(), this.animation = null, this.emit(`destroy`);
      } }, { key: `draw`, value: function() {
        return this.options.animateOnInit && !this.initialized && (this.value = this._value, this.initialized = true, this.emit(`init`)), this.emit(`render`), this;
      } }, { key: `value`, set: function(e5) {
        var t4 = this;
        e5 = n3.ensureValue(e5, this.options.minValue);
        var r3 = this.options.value;
        if (e5 !== r3) {
          if (this.options.animation) {
            if (this.animation.frame && (this.options.value = this._value, this._value === e5)) return this.animation.cancel(), void delete this._value;
            this._value === void 0 && (this._value = e5), this.emit(`animationStart`), this.animation.animate(function(n4) {
              var i3 = r3 + (e5 - r3) * n4;
              t4.options.animatedValue && t4.emit(`value`, i3, t4.value), t4.options.value = i3, t4.draw(), t4.emit(`animate`, n4, t4.options.value);
            }, function() {
              t4._value !== void 0 && (t4.emit(`value`, t4._value, t4.value), t4.options.value = t4._value, delete t4._value), t4.draw(), t4.emit(`animationEnd`);
            });
          } else this.emit(`value`, e5, this.value), this.options.value = e5, this.draw();
        }
      }, get: function() {
        return this._value === void 0 ? this.options.value : this._value;
      } }], [{ key: `configure`, value: function(e5) {
        return e5;
      } }, { key: `initialize`, value: function(e5, t4) {
        return new W(t4, `canvas`, e5);
      } }, { key: `fromElement`, value: function(e5) {
        var t4 = W.toCamelCase(e5.getAttribute(`data-type`)), n4 = e5.attributes, r3 = 0, i3 = n4.length, a3 = {};
        if (t4) {
          for (/Gauge$/.test(t4) || (t4 += `Gauge`); r3 < i3; r3++) a3[W.toCamelCase(n4[r3].name.replace(/^data-/, ``), false)] = W.parse(n4[r3].value);
          new W(a3, e5.tagName, t4).process(e5);
        }
      } }, { key: `ensureValue`, value: function(e5) {
        var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        return e5 = parseFloat(e5), !isNaN(e5) && isFinite(e5) || (e5 = parseFloat(t4) || 0), e5;
      } }, { key: `mod`, value: function(e5, t4) {
        return (e5 % t4 + t4) % t4;
      } }, { key: `version`, get: function() {
        return Oe;
      } }]), n3;
    })(Ee);
    e4 !== void 0 && (e4.BaseGauge = X, e4.gauges = (window.document || {}).gauges = Y);
    var ke = /{([_a-zA-Z]+[_a-zA-Z0-9]*)}/g, Z = { roundRect: f2, padValue: p2, formatMajorTickNumber: m2, radians: h2, radialPoint: g2, linearGradient: _2, drawNeedleShadow: y2, drawValueBox: C2, verifyError: l2, prepareTicks: d2, drawShadow: v2, font: b2, normalizedValue: w2, formatContext: u2 }, Q = Math.PI, $ = Q / 2, Ae = Object.assign({}, K, { ticksAngle: 270, startAngle: 45, colorNeedleCircleOuter: `#f0f0f0`, colorNeedleCircleOuterEnd: `#ccc`, colorNeedleCircleInner: `#e8e8e8`, colorNeedleCircleInnerEnd: `#f5f5f5`, needleCircleSize: 10, needleCircleInner: true, needleCircleOuter: true, needleStart: 20, animationTarget: `needle`, useMinPath: false, barWidth: 0, barStartPosition: `left` }), je = (function(e5) {
      function t3(e6) {
        return a2(this, t3), e6 = Object.assign({}, Ae, e6 || {}), r2(this, (t3.__proto__ || Object.getPrototypeOf(t3)).call(this, t3.configure(e6)));
      }
      return i2(t3, e5), V(t3, [{ key: `draw`, value: function() {
        try {
          var e6 = this.canvas, n3 = [-e6.drawX, -e6.drawY, e6.drawWidth, e6.drawHeight], r3 = n3[0], i3 = n3[1], a3 = n3[2], o3 = n3[3], s3 = this.options;
          if (s3.animationTarget === `needle`) {
            if (!e6.elementClone.initialized) {
              var c3 = e6.contextClone;
              c3.clearRect(r3, i3, a3, o3), c3.save(), this.emit(`beforePlate`), D2(c3, s3), this.emit(`beforeHighlights`), O2(c3, s3), this.emit(`beforeMinorTicks`), k2(c3, s3), this.emit(`beforeMajorTicks`), j2(c3, s3), this.emit(`beforeNumbers`), P2(c3, s3), this.emit(`beforeTitle`), F(c3, s3), this.emit(`beforeUnits`), I(c3, s3), e6.elementClone.initialized = true;
            }
            this.canvas.commit(), e6.context.clearRect(r3, i3, a3, o3), e6.context.save(), e6.context.drawImage(e6.elementClone, r3, i3, a3, o3), e6.context.save(), this.emit(`beforeProgressBar`), re(e6.context, s3), this.emit(`beforeValueBox`), te(e6.context, s3, ie(this)), this.emit(`beforeNeedle`), ee(e6.context, s3);
          } else {
            var l3 = -Z.radians((s3.value - s3.minValue) / (s3.maxValue - s3.minValue) * s3.ticksAngle);
            if (e6.context.clearRect(r3, i3, a3, o3), e6.context.save(), this.emit(`beforePlate`), D2(e6.context, s3), e6.context.rotate(l3), this.emit(`beforeHighlights`), O2(e6.context, s3), this.emit(`beforeMinorTicks`), k2(e6.context, s3), this.emit(`beforeMajorTicks`), j2(e6.context, s3), this.emit(`beforeNumbers`), P2(e6.context, s3), this.emit(`beforeProgressBar`), re(e6.context, s3), e6.context.rotate(-l3), e6.context.save(), !e6.elementClone.initialized) {
              var u3 = e6.contextClone;
              u3.clearRect(r3, i3, a3, o3), u3.save(), this.emit(`beforeTitle`), F(u3, s3), this.emit(`beforeUnits`), I(u3, s3), this.emit(`beforeNeedle`), ee(u3, s3), e6.elementClone.initialized = true;
            }
            e6.context.drawImage(e6.elementClone, r3, i3, a3, o3);
          }
          this.emit(`beforeValueBox`), te(e6.context, s3, ie(this)), B(t3.prototype.__proto__ || Object.getPrototypeOf(t3.prototype), `draw`, this).call(this);
        } catch (e7) {
          Z.verifyError(e7);
        }
        return this;
      } }, { key: `value`, set: function(e6) {
        e6 = X.ensureValue(e6, this.options.minValue), this.options.animation && this.options.ticksAngle === 360 && this.options.useMinPath && (this._value = e6, e6 = this.options.value + ((e6 - this.options.value) % 360 + 540) % 360 - 180), Te(t3.prototype.__proto__ || Object.getPrototypeOf(t3.prototype), `value`, e6, this);
      }, get: function() {
        return B(t3.prototype.__proto__ || Object.getPrototypeOf(t3.prototype), `value`, this);
      } }], [{ key: `configure`, value: function(e6) {
        return e6.barWidth > 50 && (e6.barWidth = 50), isNaN(e6.startAngle) && (e6.startAngle = 45), isNaN(e6.ticksAngle) && (e6.ticksAngle = 270), e6.ticksAngle > 360 && (e6.ticksAngle = 360), e6.ticksAngle < 0 && (e6.ticksAngle = 0), e6.startAngle < 0 && (e6.startAngle = 0), e6.startAngle > 360 && (e6.startAngle = 360), e6;
      } }]), t3;
    })(X);
    e4 !== void 0 && (e4.RadialGauge = je), X.initialize(`RadialGauge`, Ae);
    var Me = Object.assign({}, K, { borderRadius: 0, barBeginCircle: 30, colorBarEnd: ``, colorBarProgressEnd: ``, needleWidth: 6, tickSide: `both`, needleSide: `both`, numberSide: `both`, ticksWidth: 10, ticksWidthMinor: 5, ticksPadding: 5, barLength: 85, fontTitleSize: 26, highlightsWidth: 10 }), Ne = (function(e5) {
      function t3(e6) {
        return a2(this, t3), e6 = Object.assign({}, Me, e6 || {}), r2(this, (t3.__proto__ || Object.getPrototypeOf(t3)).call(this, t3.configure(e6)));
      }
      return i2(t3, e5), V(t3, [{ key: `draw`, value: function() {
        try {
          var e6 = this.canvas, r3 = [-e6.drawX, -e6.drawY, e6.drawWidth, e6.drawHeight], i3 = r3[0], a3 = r3[1], o3 = r3[2], s3 = r3[3], c3 = this.options;
          if (!e6.elementClone.initialized) {
            var l3 = e6.contextClone;
            l3.clearRect(i3, a3, o3, s3), l3.save(), this.emit(`beforePlate`), this.drawBox = oe(l3, c3, i3, a3, o3, s3), this.emit(`beforeBar`), le.apply(void 0, [l3, c3].concat(n2(this.drawBox))), e6.context.barDimensions = l3.barDimensions, this.emit(`beforeHighlights`), fe(l3, c3), this.emit(`beforeMinorTicks`), he(l3, c3), this.emit(`beforeMajorTicks`), me(l3, c3), this.emit(`beforeNumbers`), ge(l3, c3), this.emit(`beforeTitle`), _e(l3, c3), this.emit(`beforeUnits`), ve(l3, c3), e6.elementClone.initialized = true;
          }
          this.canvas.commit(), e6.context.clearRect(i3, a3, o3, s3), e6.context.save(), e6.context.drawImage(e6.elementClone, i3, a3, o3, s3), e6.context.save(), this.emit(`beforeProgressBar`), de.apply(void 0, [e6.context, c3].concat(n2(this.drawBox))), this.emit(`beforeNeedle`), ye(e6.context, c3), this.emit(`beforeValueBox`), Ce.apply(void 0, [e6.context, c3, c3.animatedValue ? this.options.value : this.value].concat(n2(this.drawBox))), B(t3.prototype.__proto__ || Object.getPrototypeOf(t3.prototype), `draw`, this).call(this);
        } catch (e7) {
          Z.verifyError(e7);
        }
        return this;
      } }], [{ key: `configure`, value: function(e6) {
        return e6.barStrokeWidth >= e6.barWidth && (e6.barStrokeWidth = q(e6.barWidth / 2)), e6.hasLeft = ue(`right`, e6), e6.hasRight = ue(`left`, e6), e6.value > e6.maxValue && (e6.value = e6.maxValue), e6.value < e6.minValue && (e6.value = e6.minValue), X.configure(e6);
      } }]), t3;
    })(X);
    e4 !== void 0 && (e4.LinearGauge = Ne), X.initialize(`LinearGauge`, Me), t2 !== void 0 && Object.assign(e4, { Collection: c2, GenericOptions: K, Animation: U, BaseGauge: X, drawings: Z, SmartCanvas: G, DomObserver: W, vendorize: o2 });
  })(t2 === void 0 ? window : t2.exports);
}))(), A = (e3) => {
  let t2 = n(null), s2 = n(null);
  i(() => {
    if (t2.current === null || t2.current.options.gaugeType !== e3.gaugeType) {
      let n2 = Object.assign({}, e3, { renderTo: s2.current });
      switch (e3.gaugeType) {
        case `radial`:
          t2.current !== null && t2.current.destroy(), t2.current = new k.RadialGauge(n2).draw();
          break;
        case `linear`:
          t2.current !== null && t2.current.destroy(), t2.current = new k.LinearGauge(n2).draw();
      }
    }
  }, [e3]), i(() => {
    t2.current !== null && e3.width && e3.height && e3.width > 30 && e3.height > 30 && (t2.current.value = e3.value ?? 0, t2.current.update(e3));
  }, [e3]);
  let c2 = e3.gaugeSegment, l2 = p(c2 == null ? void 0 : c2.state.icon, c2 == null ? void 0 : c2.state.iconColor, (c2 == null ? void 0 : c2.state.forceColorMask) ?? false);
  return o(r, { sx: { width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: [a(_, { alt: ``, src: c2 == null ? void 0 : c2.state.icon, style: { position: `relative`, width: c2 == null ? void 0 : c2.state.iconSizeOnly, height: c2 == null ? void 0 : c2.state.iconSizeOnly, boxSizing: `border-box`, objectFit: e3.gaugeWidgetData.gaugeIconFit, top: `calc(0px - ${c2 == null ? void 0 : c2.state.iconYOffset})`, left: `calc(0px + ${c2 == null ? void 0 : c2.state.iconXOffset})`, ...l2 } }), a(`canvas`, { id: `my-canvas`, ref: s2, style: { position: `absolute` } })] });
}, j = (e3, t2, n2) => e3.find((e4) => t2 >= e4.from && (t2 < e4.to || t2 === e4.to && t2 === n2)) || null, M = (e3, t2) => {
  if (e3 == null || e3 === ``) return t2;
  let n2 = Number(e3);
  return Number.isFinite(n2) ? n2 : t2;
};
function N() {
  var _a, _b;
  let e3 = n(null), [l2, u2] = t(null), { width: f2, height: p2 } = v(l2), { wrappedContent: m2, widget: { data: { oidObject: h2 } }, widget: g2 } = s(d), { data: _2, states: x2 } = E(`oid`), S2 = D(`oid`), C2 = (h2 == null ? void 0 : h2.type) === `number`, T2 = c(() => M(g2.data.gaugeMinValue, g2.data.minValue ?? 0), [g2.data.gaugeMinValue, g2.data.minValue]), O2 = c(() => M(g2.data.gaugeMaxValue, g2.data.maxValue ?? 100), [g2.data.gaugeMaxValue, g2.data.maxValue]), k2 = c(() => {
    let e4 = [];
    if (g2.data.gaugeMajorTicks && Number(g2.data.gaugeMajorTicks > 0)) for (let t2 = 0; t2 <= Number(g2.data.gaugeMajorTicks); t2++) {
      let n2 = T2 + ((O2 - T2) / Number(g2.data.gaugeMajorTicks) || 1) * t2;
      e4.push(Math.round(n2 * 100) / 100);
    }
    return e4;
  }, [T2, O2, g2.data.gaugeMajorTicks]), N2 = c(() => {
    let e4 = x2.map((e5, t2) => {
      var _a2;
      let n2 = ((_a2 = x2[t2 + 1]) == null ? void 0 : _a2.value) || O2;
      return { from: Number(e5.value), to: Number(n2), color: w(e5.textColor) || `transparent`, state: { ...e5 } };
    });
    return x2.length > 0 && Number(x2[x2.length - 1].value) < O2 && (e4[e4.length - 1].to = O2), e4;
  }, [x2, O2]), P2 = c(() => j(N2, Number(S2) || 0, O2), [N2, S2, O2]), F = (_a = e3.current) == null ? void 0 : _a.paper0, I = (_b = e3.current) == null ? void 0 : _b.paper1;
  return i(() => {
    F && I && (P2 ? (F.style.borderColor = !m2 && ((P2 == null ? void 0 : P2.state.frameBackgroundColorActive) || (P2 == null ? void 0 : P2.state.frameBackgroundColor) || null) || ``, F.style.background = (P2 == null ? void 0 : P2.state.frameBackgroundColorActive) || (P2 == null ? void 0 : P2.state.frameBackgroundColor) || (P2 == null ? void 0 : P2.state.frameBackgroundActive) || (P2 == null ? void 0 : P2.state.frameBackground) || ``, I.style.borderColor = !m2 && ((P2 == null ? void 0 : P2.state.backgroundColorActive) || (P2 == null ? void 0 : P2.state.backgroundColor) || null) || ``, I.style.background = (P2 == null ? void 0 : P2.state.backgroundColorActive) || (P2 == null ? void 0 : P2.state.backgroundColor) || (P2 == null ? void 0 : P2.state.backgroundActive) || (P2 == null ? void 0 : P2.state.background) || ``) : (F.style.borderColor = ``, F.style.background = _2.frameBackgroundColor || _2.frameBackground || ``, I.style.borderColor = ``, I.style.background = _2.backgroundColor || _2.background || ``));
  }, [F, I, m2, P2, g2.data, _2.frameBackgroundColor, _2.frameBackground, _2.backgroundColor, _2.background]), o(b, { ref: e3, isValidType: C2, data: _2, oidValue: S2, children: [a(y, { data: { ..._2, icon: P2 == null ? void 0 : P2.state.icon, iconColor: P2 == null ? void 0 : P2.state.iconColor, forceColorMask: P2 == null ? void 0 : P2.state.forceColorMask }, widget: g2 }), a(r, { ref: u2, sx: { width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center` }, children: a(A, { gaugeWidgetData: g2.data, gaugeSegment: P2, gaugeType: g2.data.gaugeType, width: (f2 || 0) - Number(g2.data.gaugePadding || 0), height: (p2 || 0) - Number(g2.data.gaugePadding || 0), minValue: T2, maxValue: O2, value: Number(S2) || 0, units: h2 == null ? void 0 : h2.unit, title: _2.header, exactTicks: g2.data.gaugeExactTicks, majorTicks: k2, minorTicks: typeof g2.data.gaugeMinorTicks == `number` ? g2.data.gaugeMinorTicks : Number(g2.data.gaugeMinorTicks), strokeTicks: g2.data.gaugeStrokeTicks, majorTicksInt: typeof g2.data.gaugeMajorTicksInt == `number` ? g2.data.gaugeMajorTicksInt : Number(g2.data.gaugeMajorTicksInt), majorTicksDec: typeof g2.data.gaugeMajorTicksDec == `number` ? g2.data.gaugeMajorTicksDec : Number(g2.data.gaugeMajorTicksDec), highlights: N2, highlightsWidth: typeof g2.data.gaugeHighlightsWidth == `number` ? g2.data.gaugeHighlightsWidth : Number(g2.data.gaugeHighlightsWidth), numbersMargin: typeof g2.data.gaugeNumbersMargin == `number` ? g2.data.gaugeNumbersMargin : Number(g2.data.gaugeNumbersMargin), barWidth: typeof g2.data.gaugeBarWidth == `number` && g2.data.gaugeBarWidth <= 50 ? g2.data.gaugeBarWidth : Number(g2.data.gaugeBarWidth) <= 50 ? Number(g2.data.gaugeBarWidth) : 50, barStrokeWidth: typeof g2.data.gaugeBarStrokeWidth == `number` ? g2.data.gaugeBarStrokeWidth : Number(g2.data.gaugeBarStrokeWidth), barProgress: g2.data.gaugeBarProgress, barShadow: typeof g2.data.gaugeBarShadow == `number` ? g2.data.gaugeBarShadow : Number(g2.data.gaugeBarShadow), animation: g2.data.gaugeAnimation, animationDuration: typeof g2.data.gaugeAnimationDuration == `number` ? g2.data.gaugeAnimationDuration : Number(g2.data.gaugeAnimationDuration), animationRule: g2.data.gaugeAnimationRule || `cycle`, animatedValue: g2.data.gaugeAnimatedValue, animateOnInit: g2.data.gaugeAnimateOnInit, colorPlate: g2.data.gaugeColorPlate || `rgba(0,0,0,0)`, colorPlateEnd: g2.data.gaugeColorPlateEnd || `rgba(0,0,0,0)`, colorMajorTicks: g2.data.gaugeColorMajorTicks || `#444`, colorMinorTicks: g2.data.gaugeColorMinorTicks || `#666`, colorStrokeTicks: g2.data.gaugeColorStrokeTicks || `#444`, colorTitle: g2.data.gaugeColorTitle || `#888`, colorUnits: g2.data.gaugeColorUnits || `#888`, colorNumbers: g2.data.gaugeColorNumbers || `#444`, colorNeedle: g2.data.gaugeColorNeedle || `rgba(240,128,128,1)`, colorNeedleEnd: g2.data.gaugeColorNeedleEnd || `rgba(255,160,122,.9)`, colorValueText: g2.data.gaugeColorValueText || `#444`, colorValueTextShadow: g2.data.gaugeColorValueTextShadow || `rgba(0,0,0,0.3)`, colorBorderShadow: g2.data.gaugeColorBorderShadow || `rgba(0,0,0,0.5)`, colorBorderOuter: g2.data.gaugeColorBorderOuter || `#ddd`, colorBorderOuterEnd: g2.data.gaugeColorBorderOuterEnd || `#aaa`, colorBorderMiddle: g2.data.gaugeColorBorderMiddle || `#eee`, colorBorderMiddleEnd: g2.data.gaugeColorBorderMiddleEnd || `#f0f0f0`, colorBorderInner: g2.data.gaugeColorBorderInner || `#fafafa`, colorBorderInnerEnd: g2.data.gaugeColorBorderInnerEnd || `#ccc`, colorValueBoxRect: g2.data.gaugeColorValueBoxRect || `#888`, colorValueBoxRectEnd: g2.data.gaugeColorValueBoxRectEnd || `#666`, colorValueBoxBackground: g2.data.gaugeColorValueBoxBackground || `#babab2`, colorValueBoxShadow: g2.data.gaugeColorValueBoxShadow || `rgba(0,0,0,1)`, colorNeedleShadowUp: g2.data.gaugeColorNeedleShadowUp || `rgba(2,255,255,0.2)`, colorNeedleShadowDown: g2.data.gaugeColorNeedleShadowDown || `rgba(188,143,143,0.45)`, colorBarStroke: g2.data.gaugeColorBarStroke || `#222`, colorBar: g2.data.gaugeColorBar || `#ccc`, colorBarProgress: g2.data.gaugeColorBarProgress || `#888`, highlightsLineCap: g2.data.gaugeHighlightsLineCap || `butt`, needle: g2.data.gaugeNeedle, needleShadow: g2.data.gaugeNeedleShadow, needleType: g2.data.gaugeNeedleType || `arrow`, needleStart: typeof g2.data.gaugeNeedleStart == `number` ? g2.data.gaugeNeedleStart : Number(g2.data.gaugeNeedleStart), needleEnd: typeof g2.data.gaugeNeedleEnd == `number` ? g2.data.gaugeNeedleEnd : Number(g2.data.gaugeNeedleEnd), needleWidth: typeof g2.data.gaugeNeedleWidth == `number` ? g2.data.gaugeNeedleWidth : Number(g2.data.gaugeNeedleWidth), borders: g2.data.gaugeBorders, borderOuterWidth: typeof g2.data.gaugeBorderOuterWidth == `number` ? g2.data.gaugeBorderOuterWidth : Number(g2.data.gaugeBorderOuterWidth), borderMiddleWidth: typeof g2.data.gaugeBorderMiddleWidth == `number` ? g2.data.gaugeBorderMiddleWidth : Number(g2.data.gaugeBorderMiddleWidth), borderInnerWidth: typeof g2.data.gaugeBorderInnerWidth == `number` ? g2.data.gaugeBorderInnerWidth : Number(g2.data.gaugeBorderInnerWidth), borderShadowWidth: typeof g2.data.gaugeBorderShadowWidth == `number` ? g2.data.gaugeBorderShadowWidth : Number(g2.data.gaugeBorderShadowWidth), valueBox: g2.data.gaugeValueBox, valueBoxStroke: typeof g2.data.gaugeValueBoxStroke == `number` ? g2.data.gaugeValueBoxStroke : Number(g2.data.gaugeValueBoxStroke), valueBoxWidth: typeof g2.data.gaugeValueBoxWidth == `number` ? g2.data.gaugeValueBoxWidth : Number(g2.data.gaugeValueBoxWidth), valueText: g2.data.gaugeValueText || ``, valueTextShadow: g2.data.gaugeValueTextShadow, valueBoxBorderRadius: typeof g2.data.gaugeValueBoxBorderRadius == `number` ? g2.data.gaugeValueBoxBorderRadius : Number(g2.data.gaugeValueBoxBorderRadius), valueInt: typeof g2.data.gaugeValueInt == `number` ? g2.data.gaugeValueInt : Number(g2.data.gaugeValueInt), valueDec: typeof g2.data.gaugeValueDec == `number` ? g2.data.gaugeValueDec : Number(g2.data.gaugeValueDec), fontNumbers: g2.data.gaugeFontNumbers || `Arial, Helvetica, sans-serif`, fontTitle: g2.data.gaugeFontTitle || `Arial, Helvetica, sans-serif`, fontUnits: g2.data.gaugeFontUnits || `Arial, Helvetica, sans-serif`, fontValue: g2.data.gaugeFontValue || `Arial, Helvetica, sans-serif`, fontNumbersSize: typeof g2.data.gaugeFontNumbersSize == `number` ? g2.data.gaugeFontNumbersSize : Number(g2.data.gaugeFontNumbersSize), fontTitleSize: typeof g2.data.gaugeFontTitleSize == `number` ? g2.data.gaugeFontTitleSize : Number(g2.data.gaugeFontTitleSize), fontUnitsSize: typeof g2.data.gaugeFontUnitsSize == `number` ? g2.data.gaugeFontUnitsSize : Number(g2.data.gaugeFontUnitsSize), fontValueSize: typeof g2.data.gaugeFontValueSize == `number` ? g2.data.gaugeFontValueSize : Number(g2.data.gaugeFontValueSize), fontNumbersStyle: g2.data.gaugeFontNumbersStyle || `normal`, fontTitleStyle: g2.data.gaugeFontTitleStyle || `normal`, fontUnitsStyle: g2.data.gaugeFontUnitsStyle || `normal`, fontValueStyle: g2.data.gaugeFontValueStyle || `normal`, fontNumbersWeight: g2.data.gaugeFontNumbersWeight || `normal`, fontTitleWeight: g2.data.gaugeFontTitleWeight || `normal`, fontUnitsWeight: g2.data.gaugeFontUnitsWeight || `normal`, fontValueWeight: g2.data.gaugeFontValueWeight || `normal`, borderRadius: typeof g2.data.gaugeBorderRadius == `number` ? g2.data.gaugeBorderRadius : Number(g2.data.gaugeBorderRadius), barBeginCircle: typeof g2.data.gaugeBarBeginCircle == `number` && g2.data.gaugeBarBeginCircle < 12 ? 30 : Number(g2.data.gaugeBarBeginCircle), barLength: typeof g2.data.gaugeBarLength == `number` ? g2.data.gaugeBarLength : Number(g2.data.gaugeBarLength), colorBarEnd: g2.data.gaugeColorBarEnd || ``, colorBarProgressEnd: g2.data.gaugeColorBarProgressEnd || ``, tickSide: g2.data.gaugeTickSide || `both`, needleSide: g2.data.gaugeNeedleSide || `both`, numberSide: g2.data.gaugeNumberSide || `both`, ticksWidth: typeof g2.data.gaugeTicksWidth == `number` ? g2.data.gaugeTicksWidth : Number(g2.data.gaugeTicksWidth), ticksWidthMinor: typeof g2.data.gaugeTicksWidthMinor == `number` ? g2.data.gaugeTicksWidthMinor : Number(g2.data.gaugeTicksWidthMinor), ticksPadding: typeof g2.data.gaugeTicksPadding == `number` ? g2.data.gaugeTicksPadding : Number(g2.data.gaugeTicksPadding), ticksAngle: typeof g2.data.gaugeTicksAngle == `number` ? g2.data.gaugeTicksAngle : Number(g2.data.gaugeTicksAngle), startAngle: typeof g2.data.gaugeStartAngle == `number` ? g2.data.gaugeStartAngle : Number(g2.data.gaugeStartAngle), colorNeedleCircleOuter: g2.data.gaugeColorNeedleCircleOuter || `#f0f0f0`, colorNeedleCircleOuterEnd: g2.data.gaugeColorNeedleCircleOuterEnd || `#ccc`, colorNeedleCircleInner: g2.data.gaugeColorNeedleCircleInner || `#e8e8e8`, colorNeedleCircleInnerEnd: g2.data.gaugeColorNeedleCircleInnerEnd || `#f5f5f5`, colorNeedleCircleShadowUp: g2.data.gaugeColorNeedleCircleShadowUp || `rgba(2,255,255,0.2)`, needleCircleSize: typeof g2.data.gaugeNeedleCircleSize == `number` ? g2.data.gaugeNeedleCircleSize : Number(g2.data.gaugeNeedleCircleSize), needleCircleInner: g2.data.gaugeNeedleCircleInner, needleCircleOuter: g2.data.gaugeNeedleCircleOuter, animationTarget: g2.data.gaugeAnimationTarget || `needle`, useMinPath: g2.data.gaugeUseMinPath }) })] });
}
var P = class e2 extends l {
  static getWidgetInfo() {
    return { id: `tplGaugeCollectionWidget`, visSet: `vis-2-widgets-collection`, visSetLabel: `widgets_collection`, visName: `GaugeCollectionWidget`, visWidgetLabel: `gauge_collection_widget`, visOrder: 10, visAttrs: [{ name: `common`, fields: [...h({ groupName: ``, allFields: true })] }, { name: `gauge`, label: `group_gauge`, fields: [...x([`number`]), ...O()] }, { name: `values`, label: `values`, indexFrom: 1, indexTo: `values_count`, fields: [...h({ groupName: ``, allFields: false })] }], visDefaultStyle: { width: `100%`, height: `100px`, position: `relative` }, visPrev: `widgets/vis-2-widgets-collection/img/prev-collection-gauge.png` };
  }
  getWidgetInfo() {
    return e2.getWidgetInfo();
  }
  propertiesUpdate() {
  }
  onRxDataChanged() {
    this.propertiesUpdate();
  }
  onRxStyleChanged() {
  }
  onStateUpdated(e3, t2) {
  }
  componentDidMount() {
    super.componentDidMount(), this.propertiesUpdate();
  }
  renderWidgetBody(e3) {
    super.renderWidgetBody(e3);
    let t2 = { id: e3.id, refService: e3.refService, style: e3.style, widget: { data: this.state.rxData, style: this.state.rxStyle }, setValue: this.setValue, setState: this.setState.bind(this), values: this.state.values, isSignalVisible: this.isSignalVisible.bind(this), getPropertyValue: this.getPropertyValue.bind(this), mode: this.props.context.themeType, socket: this.props.context.socket, theme: this.props.context.theme, wrappedContent: this.wrappedCollectionContent };
    return this.wrappedCollectionContent = !(e3.widget.data.noCard || e3.widget.usedInWidget), C(this.wrapContent(a(N, {})), t2);
  }
};
export {
  P as default
};
