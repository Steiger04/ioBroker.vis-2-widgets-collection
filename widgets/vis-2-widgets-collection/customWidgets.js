var vis2CollectionWidget;(()=>{"use strict";var e={8978:(e,_,s)=>{var o={"./StateCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-42397f"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx"),s.e("src_StateCollectionWidget_StateCollectionWidget_jsx")]).then((()=>()=>s(2132))),"./SliderCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-42397f"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx")]).then((()=>()=>s(2354))),"./ButtonGroupCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-42397f"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx"),s.e("src_ButtonGroupCollectionWidget_ButtonGroupCollectionWidget_jsx")]).then((()=>()=>s(3190))),"./translations":()=>s.e("src_translations_js").then((()=>()=>s(5850))),"./SwitchCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-42397f"),s.e("vendors-node_modules_mui_material_Switch_Switch_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx"),s.e("src_SwitchCollectionWidget_SwitchCollectionWidget_jsx")]).then((()=>()=>s(4801))),"./CheckboxCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-42397f"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx"),s.e("src_CheckboxCollectionWidget_CheckboxCollectionWidget_jsx")]).then((()=>()=>s(6047))),"./DialogCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-42397f"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx"),s.e("src_DialogCollectionWidget_DialogCollectionWidget_jsx")]).then((()=>()=>s(2840))),"./SelectCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-42397f"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx"),s.e("src_SelectCollectionWidget_SelectCollectionWidget_jsx")]).then((()=>()=>s(7903))),"./RadioGroupCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-42397f"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx"),s.e("src_RadioGroupCollectionWidget_RadioGroupCollectionWidget_jsx")]).then((()=>()=>s(3810))),"./GaugeCollectionWidget":()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-42397f"),s.e("vendors-node_modules_canvas-gauges_gauge_min_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4"),s.e("src_components_CollectionDivider_jsx"),s.e("src_GaugeCollectionWidget_GaugeCollectionWidget_jsx")]).then((()=>()=>s(2435)))},t=(e,_)=>(s.R=_,_=s.o(o,e)?o[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),s.R=void 0,_),n=(e,_)=>{if(s.S){var o="default",t=s.S[o];if(t&&t!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return s.S[o]=e,s.I(o,_)}};s.d(_,{get:()=>t,init:()=>n})}},_={};function s(o){var t=_[o];if(void 0!==t)return t.exports;var n=_[o]={exports:{}};return e[o].call(n.exports,n,n.exports,s),n.exports}s.m=e,s.c=_,s.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return s.d(_,{a:_}),_},s.d=(e,_)=>{for(var o in _)s.o(_,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:_[o]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((_,o)=>(s.f[o](e,_),_)),[])),s.u=e=>"static/js/"+e+"."+{"vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987":"9c21ae2e","vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js":"d38263c1","vendors-node_modules_mui_system_esm_RtlProvider_index_js-node_modules_mui_system_esm_Unstable-9da0e4":"116e9fa1","vendors-node_modules_mui_material_Switch_Switch_js":"928081a1","vendors-node_modules_mui_material_index_js":"8ba01614","vendors-node_modules_mui_system_esm_index_js":"b8618c63","node_modules_prop-types_index_js":"7f922324","vendors-node_modules_react-dom_index_js":"190f0c6e",node_modules_react_index_js:"a5285de4","vendors-node_modules_mui_icons-material_Delete_js-node_modules_rxjs_dist_esm5_internal_Subjec-42397f":"bb47ef22",src_components_CollectionDivider_jsx:"64365c8e",src_StateCollectionWidget_StateCollectionWidget_jsx:"65b694b1",src_ButtonGroupCollectionWidget_ButtonGroupCollectionWidget_jsx:"39867ec5",src_translations_js:"289a4eb9",src_SwitchCollectionWidget_SwitchCollectionWidget_jsx:"7004d49f",src_CheckboxCollectionWidget_CheckboxCollectionWidget_jsx:"8ee23d20",src_DialogCollectionWidget_DialogCollectionWidget_jsx:"19e9516a",src_SelectCollectionWidget_SelectCollectionWidget_jsx:"55ffafdb",src_RadioGroupCollectionWidget_RadioGroupCollectionWidget_jsx:"67070ad1","vendors-node_modules_canvas-gauges_gauge_min_js":"d2cb37fb",src_GaugeCollectionWidget_GaugeCollectionWidget_jsx:"4241780e"}[e]+".chunk.js",s.miniCssF=e=>{},s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),s.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),(()=>{var e={},_="iobroker.vis-widgets-react-collection:";s.l=(o,t,n,i)=>{if(e[o])e[o].push(t);else{var r,d;if(void 0!==n)for(var l=document.getElementsByTagName("script"),a=0;a<l.length;a++){var u=l[a];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==_+n){r=u;break}}r||(d=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.setAttribute("data-webpack",_+n),r.src=o),e[o]=[t];var m=(_,s)=>{r.onerror=r.onload=null,clearTimeout(c);var t=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),t&&t.forEach((e=>e(s))),_)return _(s)},c=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),d&&document.head.appendChild(r)}}})(),s.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{s.S={};var e={},_={};s.I=(o,t)=>{t||(t=[]);var n=_[o];if(n||(n=_[o]={}),!(t.indexOf(n)>=0)){if(t.push(n),e[o])return e[o];s.o(s.S,o)||(s.S[o]={});var i=s.S[o],r="iobroker.vis-widgets-react-collection",d=(e,_,s,o)=>{var t=i[e]=i[e]||{},n=t[_];(!n||!n.loaded&&(!o!=!n.eager?o:r>n.from))&&(t[_]={get:s,from:r,eager:!!o})},l=[];if("default"===o)d("@mui/material","*",(()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_material_styles_useTheme_js-node_modules_mui_material_utils_index_js"),s.e("vendors-node_modules_mui_system_esm_RtlProvider_index_js-node_modules_mui_system_esm_Unstable-9da0e4"),s.e("vendors-node_modules_mui_material_Switch_Switch_js"),s.e("vendors-node_modules_mui_material_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types"),s.e("webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4")]).then((()=>()=>s(4999))))),d("@mui/system","*",(()=>Promise.all([s.e("vendors-node_modules_mui_styled-engine_index_js-node_modules_mui_system_esm_DefaultPropsProvi-fe7987"),s.e("vendors-node_modules_mui_system_esm_RtlProvider_index_js-node_modules_mui_system_esm_Unstable-9da0e4"),s.e("vendors-node_modules_mui_system_esm_index_js"),s.e("webpack_sharing_consume_default_react_react"),s.e("webpack_sharing_consume_default_prop-types_prop-types")]).then((()=>()=>s(1200))))),d("prop-types","*",(()=>s.e("node_modules_prop-types_index_js").then((()=>()=>s(5173))))),d("react-dom","*",(()=>Promise.all([s.e("vendors-node_modules_react-dom_index_js"),s.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>s(7950))))),d("react","*",(()=>s.e("node_modules_react_index_js").then((()=>()=>s(5043)))));return l.length?e[o]=Promise.all(l).then((()=>e[o]=1)):e[o]=1}}})(),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var _=s.g.document;if(!e&&_&&(_.currentScript&&"SCRIPT"===_.currentScript.tagName.toUpperCase()&&(e=_.currentScript.src),!e)){var o=_.getElementsByTagName("script");if(o.length)for(var t=o.length-1;t>-1&&(!e||!/^http(s?):/.test(e));)e=o[t--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e=e=>{var _=e=>e.split(".").map((e=>+e==e?+e:e)),s=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),o=s[1]?_(s[1]):[];return s[2]&&(o.length++,o.push.apply(o,_(s[2]))),s[3]&&(o.push([]),o.push.apply(o,_(s[3]))),o},_=(_,s)=>{_=e(_),s=e(s);for(var o=0;;){if(o>=_.length)return o<s.length&&"u"!=(typeof s[o])[0];var t=_[o],n=(typeof t)[0];if(o>=s.length)return"u"==n;var i=s[o],r=(typeof i)[0];if(n!=r)return"o"==n&&"n"==r||"s"==r||"u"==n;if("o"!=n&&"u"!=n&&t!=i)return t<i;o++}},o=e=>{var _=e[0],s="";if(1===e.length)return"*";if(_+.5){s+=0==_?">=":-1==_?"<":1==_?"^":2==_?"~":_>0?"=":"!=";for(var t=1,n=1;n<e.length;n++)t--,s+="u"==(typeof(r=e[n]))[0]?"-":(t>0?".":"")+(t=2,r);return s}var i=[];for(n=1;n<e.length;n++){var r=e[n];i.push(0===r?"not("+d()+")":1===r?"("+d()+" || "+d()+")":2===r?i.pop()+" "+i.pop():o(r))}return d();function d(){return i.pop().replace(/^\((.+)\)$/,"$1")}},t=(_,s)=>{if(0 in _){s=e(s);var o=_[0],n=o<0;n&&(o=-o-1);for(var i=0,r=1,d=!0;;r++,i++){var l,a,u=r<_.length?(typeof _[r])[0]:"";if(i>=s.length||"o"==(a=(typeof(l=s[i]))[0]))return!d||("u"==u?r>o&&!n:""==u!=n);if("u"==a){if(!d||"u"!=u)return!1}else if(d)if(u==a)if(r<=o){if(l!=_[r])return!1}else{if(n?l>_[r]:l<_[r])return!1;l!=_[r]&&(d=!1)}else if("s"!=u&&"n"!=u){if(n||r<=o)return!1;d=!1,r--}else{if(r<=o||a<u!=n)return!1;d=!1}else"s"!=u&&"n"!=u&&(d=!1,r--)}}var m=[],c=m.pop.bind(m);for(i=1;i<_.length;i++){var p=_[i];m.push(1==p?c()|c():2==p?c()&c():p?t(p,s):!c())}return!!c()},n=(e,_)=>e&&s.o(e,_),i=e=>(e.loaded=1,e.get()),r=e=>Object.keys(e).reduce(((_,s)=>(e[s].eager&&(_[s]=e[s]),_)),{}),d=(e,s,o)=>{var t=o?r(e[s]):e[s];return Object.keys(t).reduce(((e,s)=>!e||!t[e].loaded&&_(e,s)?s:e),0)},l=(e,_,s,t)=>"Unsatisfied version "+s+" from "+(s&&e[_][s].from)+" of shared singleton module "+_+" (required "+o(t)+")",a=e=>{throw new Error(e)},u=e=>{"undefined"!==typeof console&&console.warn&&console.warn(e)},m=e=>function(_,o,t,n,i){var r=s.I(_);return r&&r.then&&!t?r.then(e.bind(e,_,s.S[_],o,!1,n,i)):e(_,s.S[_],o,t,n,i)},c=(e,_,s)=>s?s():((e,_)=>a("Shared module "+_+" doesn't exist in shared scope "+e))(e,_),p=m(((e,_,s,o,r,a)=>{if(!n(_,s))return c(e,s,a);var m=d(_,s,o);return t(r,m)||u(l(_,s,m,r)),i(_[s][m])})),f={},g={8437:()=>p("default","react",!1,[0],(()=>s.e("node_modules_react_index_js").then((()=>()=>s(5043))))),5973:()=>p("default","prop-types",!1,[0],(()=>s.e("node_modules_prop-types_index_js").then((()=>()=>s(5173))))),8565:()=>p("default","@mui/system",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_mui_system_esm_RtlProvider_index_js-node_modules_mui_system_esm_Unstable-9da0e4"),s.e("vendors-node_modules_mui_system_esm_index_js")]).then((()=>()=>s(1200))))),3479:()=>p("default","react-dom",!1,[0],(()=>s.e("vendors-node_modules_react-dom_index_js").then((()=>()=>s(7950))))),7085:()=>p("default","@mui/material",!1,[0],(()=>Promise.all([s.e("vendors-node_modules_mui_system_esm_RtlProvider_index_js-node_modules_mui_system_esm_Unstable-9da0e4"),s.e("vendors-node_modules_mui_material_Switch_Switch_js"),s.e("vendors-node_modules_mui_material_index_js")]).then((()=>()=>s(4999)))))},h={webpack_sharing_consume_default_react_react:[8437],"webpack_sharing_consume_default_prop-types_prop-types":[5973],"webpack_sharing_consume_default_mui_system_mui_system-webpack_sharing_consume_default_react-d-dde2d4":[8565,3479],src_components_CollectionDivider_jsx:[7085]},v={};s.f.consumes=(e,_)=>{s.o(h,e)&&h[e].forEach((e=>{if(s.o(f,e))return _.push(f[e]);if(!v[e]){var o=_=>{f[e]=0,s.m[e]=o=>{delete s.c[e],o.exports=_()}};v[e]=!0;var t=_=>{delete f[e],s.m[e]=o=>{throw delete s.c[e],_}};try{var n=g[e]();n.then?_.push(f[e]=n.then(o).catch(t)):o(n)}catch(i){t(i)}}}))}})(),(()=>{var e={vis2CollectionWidget:0};s.f.j=(_,o)=>{var t=s.o(e,_)?e[_]:void 0;if(0!==t)if(t)o.push(t[2]);else if(/^webpack_sharing_consume_default_(mui_system_mui_system\-webpack_sharing_consume_default_react\-d\-dde2d4|prop\-types_prop\-types|react_react)$/.test(_))e[_]=0;else{var n=new Promise(((s,o)=>t=e[_]=[s,o]));o.push(t[2]=n);var i=s.p+s.u(_),r=new Error;s.l(i,(o=>{if(s.o(e,_)&&(0!==(t=e[_])&&(e[_]=void 0),t)){var n=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;r.message="Loading chunk "+_+" failed.\n("+n+": "+i+")",r.name="ChunkLoadError",r.type=n,r.request=i,t[1](r)}}),"chunk-"+_,_)}};var _=(_,o)=>{var t,n,i=o[0],r=o[1],d=o[2],l=0;if(i.some((_=>0!==e[_]))){for(t in r)s.o(r,t)&&(s.m[t]=r[t]);if(d)d(s)}for(_&&_(o);l<i.length;l++)n=i[l],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0},o=self.webpackChunkiobroker_vis_widgets_react_collection=self.webpackChunkiobroker_vis_widgets_react_collection||[];o.forEach(_.bind(null,0)),o.push=_.bind(null,o.push.bind(o))})();var o=s(8978);vis2CollectionWidget=o})();
//# sourceMappingURL=customWidgets.js.map