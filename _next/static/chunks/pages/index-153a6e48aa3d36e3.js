(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7514:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(160)}])},160:function(n,e,t){"use strict";t.a(n,(async function(n,r){try{t.r(e),t.d(e,{default:function(){return v}});var o=t(6393),l=t(3758),a=t(9889),i=t(1984),u=n([a,i]);function d(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function f(n){if(Array.isArray(n))return d(n)}function b(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}function m(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(n,e){if(null==n)return{};var t,r,o=y(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function y(n,e){if(null==n)return{};var t,r,o={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}function g(n){return f(n)||b(n)||w(n)||m()}function w(n,e){if(n){if("string"===typeof n)return d(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(n,e):void 0}}[a,i]=u.then?(await u)():u;var c=function(n,e){for(var t=arguments.length,r=new Array(t>2?t-2:0),l=2;l<t;l++)r[l-2]=arguments[l];var a;return"inlineCode"===n&&(n="code"),null===e||void 0===e||delete e.parentName,(a=o).createElement.apply(a,[n,e].concat(g(r)))},p={},s=function(n){var e=n.children;return c("div",{style:{height:"100%",padding:"0 16px",overflow:"auto"}},c(l.default,null,c("title",null,"WebADB")),e)};function v(n){var e=n.components,t=h(n,["components"]);return c(s,Object.assign({},p,t,{components:e,mdxType:"MDXLayout"}),c(a.dL,{href:"https://github.com/AndroPlus-org/ya-webadb",mdxType:"ExternalLink"},"ya-webadb")," \u3067\u306f\u3001\u30a6\u30a7\u30d6\u30d6\u30e9\u30a6\u30b6\u304b\u3089 ADB \u30d7\u30ed\u30c8\u30b3\u30eb\u3092\u4f7f\u3063\u3066\u30c7\u30d0\u30a4\u30b9\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002",c("p",null,"WebUSB \u306b\u5bfe\u5fdc\u3057\u305f\u74b0\u5883\u3067\u3042\u308c\u3070\u3001\u8ffd\u52a0\u306e\u30c9\u30e9\u30a4\u30d0\u30fc\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u3059\u308b\u3053\u3068\u306a\u304f\u7c21\u5358\u306b\u63a5\u7d9a\u3067\u304d\u307e\u3059\u3002"),c("p",null,"\u300c\u8ffd\u52a0\u300d\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u3069\u306e\u30c7\u30d0\u30a4\u30b9\u306b\u63a5\u7d9a\u3059\u308b\u304b\u9078\u3073\u3001\u300c\u63a5\u7d9a\u300d\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),c("p",null,"\u30c7\u30d0\u30a4\u30b9\u5074\u3067 USB \u30c7\u30d0\u30c3\u30b0\u3092\u8a31\u53ef\u3059\u308b\u304b\u805e\u304b\u308c\u308b\u306e\u3067\u3001\u8a31\u53ef\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),c("h2",null,"\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u306b\u95a2\u3059\u308b\u61f8\u5ff5"),c("p",null,"\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u304b\u3089 USB \u30c7\u30d0\u30a4\u30b9 (\u7279\u306b\u30b9\u30de\u30fc\u30c8\u30d5\u30a9\u30f3) \u306b\u76f4\u63a5\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u306f\u3001",c("strong",{parentName:"p"},"\u975e\u5e38\u306b\u5371\u967a\u3067\u3059"),"\u3002Firefox \u306e\u958b\u767a\u8005\u306f\u3001",c(a.dL,{href:"https://mozilla.github.io/standards-positions/#webusb",mdxType:"ExternalLink"},"\u305d\u308c\u304c\u6709\u5bb3\u3067\u3042\u308b"),"\u3068\u898b\u306a\u3057\u3001WebUSB \u6a19\u6e96\u306e\u5b9f\u88c5\u3092\u62d2\u5426\u3057\u305f\u307b\u3069\u3067\u3059\u3002"),c("p",null,"\u3053\u306e\u30da\u30fc\u30b8\u306b\u3064\u3044\u3066\u306f\u3001\u4ee5\u4e0b\u306e\u901a\u308a\u5b89\u5168\u6027\u3092\u78ba\u4fdd\u3057\u3066\u3044\u307e\u3059\u3002"),c("ol",null,c("li",{parentName:"ol"},"\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea\u3068\u306f\u7570\u306a\u308a\u3001\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u306f\u78ba\u8a8d\u306a\u3057\u306b\u30c7\u30d0\u30a4\u30b9\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002ADB \u3067\u306e\u63a5\u7d9a\u78ba\u8a8d\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u306b\u52a0\u3048\u3001\u30d6\u30e9\u30a6\u30b6\u306f\u30e6\u30fc\u30b6\u30fc\u306b\u8a31\u53ef\u3092\u6c42\u3081\u3001\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u306f\u9078\u629e\u3055\u308c\u305f\u30c7\u30d0\u30a4\u30b9\u306b\u3057\u304b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3002"),c("li",{parentName:"ol"},"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u3059\u3079\u3066\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306f\u3001",c(a.dL,{href:"https://github.com/AndroPlus-org/ya-webadb",mdxType:"ExternalLink"},"GitHub")," \u3067\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u81ea\u5206\u3067\u30ec\u30d3\u30e5\u30fc\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\uff08\u307e\u305f\u306f\u3001\u4fe1\u983c\u3067\u304d\u308b\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u306b\u8a73\u3057\u3044\u4eba\u3092\u898b\u3064\u3051\u3066\u30ec\u30d3\u30e5\u30fc\u3057\u3066\u3082\u3089\u3046\u3053\u3068\u3082\u3067\u304d\u307e\u3059\uff09\u3002"),c("li",{parentName:"ol"},"\u3053\u306e\u30b5\u30a4\u30c8\u306f\u3001",c(a.dL,{href:"https://github.com/AndroPlus-org/ya-webadb/blob/master/.github/workflows/nodejs.yml",spaceAfter:!0,mdxType:"ExternalLink"},"GitHub Actions")," \u306b\u3088\u3063\u3066\u30d3\u30eb\u30c9\u30fb\u30c7\u30d7\u30ed\u30a4\u3055\u308c\u3001\u3042\u306a\u305f\u304c\u898b\u308b\u3082\u306e\u304c\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3068\u5168\u304f\u540c\u3058\u3067\u3042\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3057\u3066\u3044\u307e\u3059\u3002")),c("h2",null,"\u4e92\u63db\u6027"),c("p",null,"\u73fe\u5728 WebUSB API \u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u308b\u306e\u306f\u3001Chromium \u30d9\u30fc\u30b9\u306e\u30d6\u30e9\u30a6\u30b6\uff08Chrome\u3001Microsoft Edge\u3001Opera\uff09\u306e\u307f\u3067\u3059\u3002\u524d\u8ff0\u3057\u305f\u3088\u3046\u306b\u3001Firefox \u304c\u5b9f\u88c5\u3059\u308b\u53ef\u80fd\u6027\u306f\u4f4e\u3044\u3067\u3059\u3002"),c("h2",null,"\u3088\u304f\u3042\u308b\u8cea\u554f"),c("h3",null,'"Unable to claim interface" \u30a8\u30e9\u30fc\u304c\u51fa\u308b'),c("p",null,"1\u3064\u306e USB \u30c7\u30d0\u30a4\u30b9\u306b\u306f\u3001\u540c\u6642\u306b1\u3064\u306e\u30a2\u30d7\u30ea\u304b\u3089\u3057\u304b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3002\u4ee5\u4e0b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"),c("ol",null,c("li",{parentName:"ol"},"\u516c\u5f0f ADB \u30b5\u30fc\u30d0\u30fc\u3092\u8d77\u52d5\u3057\u3066\u3044\u308b (",c("inlineCode",{parentName:"li"},"adb kill-server")," \u3067\u505c\u6b62\u3067\u304d\u307e\u3059)."),c("li",{parentName:"ol"},"\u4ed6\u306e Android \u7ba1\u7406\u30c4\u30fc\u30eb\u3092\u8d77\u52d5\u3057\u3066\u3044\u308b"),c("li",{parentName:"ol"},"\u4ed6\u306e WebADB \u30da\u30fc\u30b8\u3067\u65e2\u306b\u63a5\u7d9a\u3055\u308c\u3066\u3044\u308b")),c("h3",null,"\u30ef\u30a4\u30e4\u30ec\u30b9\u63a5\u7d9a\uff08ADB over WiFi\uff09\u306f\u53ef\u80fd\u3067\u3059\u304b\uff1f"),c("p",null,"\u63a5\u7d9a\u306e\u6a4b\u6e21\u3057\u3092\u3059\u308b\u305f\u3081\u306b\u3001\u5225\u9014\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u304c\u5fc5\u8981\u3067\u3059\u3002 ",c(a.dL,{href:"https://github.com/yume-chan/ya-webadb/discussions/245#discussioncomment-384030",mdxType:"ExternalLink"},"\u3053\u3061\u3089\u306e\u8b70\u8ad6"),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}v.isMDXComponent=!0,r()}catch(d){r(d)}}))}},function(n){n.O(0,[774,888,179],(function(){return e=7514,n(n.s=e);var e}));var e=n.O();_N_E=e}]);
//# sourceMappingURL=index-153a6e48aa3d36e3.js.map