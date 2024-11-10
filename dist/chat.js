(()=>{"use strict";var e={404:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,'.dragging {\n    -ms-user-select: none;\n    -moz-user-select: -moz-none;\n    -khtml-user-select: none;\n    -webkit-user-select: none;\n    user-select: none;\n    cursor: row-resize;\n}\n\n.myBox {\n    order: 1;\n    width: 100%;\n    height: 250px;\n    position: relative;\n\n    .cloned-chat-area {\n        padding-bottom: 10px;\n    }\n}\n\n.chat-toggle-btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    letter-spacing: -0.3px;\n    line-height: 0;\n    background-color: #4263ba;\n    width: 65px;\n    height: 25px;\n    border-radius: 17px;\n    color: white;\n    font-family: \'NGB\', \'AppleGothic\', sans-serif;\n    font-size: 16px;\n}\n\n#chat_wrapper {\n    height: 100%;\n    position: relative;\n}\n\n.selected_chat_area {\n    order: 1;\n    width: 100%;\n    height: 35%;\n    will-change: scroll-position;\n    left: 0;\n    right: 0;\n    top: 40px;\n    bottom: 113px;\n    padding: 0;\n    z-index: 1;\n    overflow: auto;\n    overflow-x: hidden;\n}\n\n#handle-container {\n    width: 100%;\n    order: 2;\n    /*height: 2rem;*/\n    cursor: row-resize;\n    /*margin-top: 5px;*/\n}\n\n#tbc-resize-handle {\n    display: flex;\n    height: 0.5rem;\n    border-top: 2px solid rgb(173, 170, 170);\n    margin: 0.5rem;\n}\n\n.main_chat_area {\n    margin-top: 10px;\n    order: 3;\n    height: 65%;\n    will-change: scroll-position;\n    left: 0;\n    right: 0;\n    top: 40px;\n    bottom: 113px;\n    padding: 0;\n    z-index: 1;\n    overflow: auto;\n    overflow-x: hidden;\n}\n\n#chat_area[data-mngr*="chat_two_line"] .chatting-list-item .message-container .message-text {\n    display: block;\n}\n\n#chat_area[data-mngr*="chat_sort"] .chatting-list-item .message-container .username button {\n    width: 105%;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n#chat_area[data-mngr*="chat_sort"] .chatting-list-item .message-container {\n    display: flex;\n    gap: 0 5px;\n}\n\n#chat_area[data-mngr*="chat_sort"] .chatting-list-item .message-container .username {\n    flex: 0 0 auto;\n    width: 126px;\n    margin: 0;\n    line-height: 1.5;\n}\n\n#chat_area[data-mngr*="chat_sort"] .chatting-list-item .message-container .message-text {\n    flex: 1;\n}',""]);const l=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],l=0;l<e.length;l++){var s=e[l],c=r.base?s[0]+r.base:s[0],u=o[c]||0,d="".concat(c," ").concat(u);o[c]=u+1;var h=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==h)t[h].references++,t[h].updater(f);else{var p=a(f,r);r.byIndex=l,t.splice(l,0,{identifier:d,updater:p,references:1})}i.push(d)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=n(o[i]);t[l].references--}for(var s=r(e,a),c=0;c<o.length;c++){var u=n(o[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),l=n(565),s=n.n(l),c=n(216),u=n.n(c),d=n(589),h=n.n(d),f=n(404),p={};function v(e,t,n,r,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,a)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){v(o,r,a,i,l,"next",e)}function l(e){v(o,r,a,i,l,"throw",e)}i(void 0)}))}}function g(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}p.styleTagTransform=h(),p.setAttributes=s(),p.insert=i().bind(null,"head"),p.domAPI=a(),p.insertStyleElement=u(),t()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals,y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("nicks")];case 1:return(e=t.sent()).nicks?[2,e.nicks]:[2,[]]}}))})),y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("ids")];case 1:return(e=t.sent()).ids?[2,e.ids]:[2,[]]}}))})),y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("toggle")];case 1:return(e=t.sent()).toggle?[2,e.toggle]:[2,{streamer:!1,manager:!1,topfan:!1,gudok:!1,fan:!1,user:!1}]}}))}));var m=function(){var e=y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("collector")];case 1:return(e=t.sent()).collector?[2,e.collector]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("chatSetting")];case 1:return(e=t.sent()).chatSetting?[2,e.chatSetting]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),w=function(){var e=y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("chatTwoLine")];case 1:return(e=t.sent()).chatTwoLine?[2,e.chatTwoLine]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),x=function(){var e=y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("fanBadge")];case 1:return(e=t.sent()).fanBadge?[2,e.fanBadge]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),S=function(){var e=y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("subscribeBadge")];case 1:return(e=t.sent()).subscribeBadge?[2,e.subscribeBadge]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("supportBadge")];case 1:return(e=t.sent()).supportBadge?[2,e.supportBadge]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("topFanBadge")];case 1:return(e=t.sent()).topFanBadge?[2,e.topFanBadge]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),q=function(){var e=y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("divider")];case 1:return(e=t.sent()).divider?[2,e.divider]:[2,{isUse:!1}]}}))}));return function(){return e.apply(this,arguments)}}(),B=function(){var e=y((function(){var e;return g(this,(function(t){switch(t.label){case 0:return[4,chrome.storage.local.get("highlight")];case 1:return(e=t.sent()).highlight?[2,e.highlight]:[2,{isUse:!0}]}}))}));return function(){return e.apply(this,arguments)}}();function P(e,t,n,r,a,o,i){try{var l=e[o](i),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,a)}function L(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){P(o,r,a,i,l,"next",e)}function l(e){P(o,r,a,i,l,"throw",e)}i(void 0)}))}}function A(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}var k,U,I,C,T,z,H,N,M,O,F,R,j={childList:!0,subtree:!0},D=[],Z=[],G=!1;function Y(){return J.apply(this,arguments)}function J(){return(J=L((function(){return A(this,(function(e){return chrome.storage.local.get("nicks").then((function(e){D=e.nicks?e.nicks:[]})),[2]}))}))).apply(this,arguments)}function V(){return K.apply(this,arguments)}function K(){return(K=L((function(){return A(this,(function(e){return chrome.storage.local.get("ids").then((function(e){Z=e.ids?e.ids:[]})),[2]}))}))).apply(this,arguments)}function Q(){return W.apply(this,arguments)}function W(){return(W=L((function(){return A(this,(function(e){return chrome.storage.local.get("toggle").then((function(e){k=e.toggle?e.toggle:{streamer:!1,manager:!1,topfan:!1,gudok:!1,fan:!1,user:!1}})),[2]}))}))).apply(this,arguments)}var X,$=function(e,t){e.forEach((function(e){e.addedNodes.forEach((function(e){if(null!=e.parentNode&&"DIV"==e.nodeName){var t=e.querySelector(".message-container");if(null==t)return;var n=t.querySelector(".username");if(null==n)return;var r=n.querySelector("button");if(null==r)return;var a=r.getAttribute("user_id"),o=r.getAttribute("user_nick"),i=r.getAttribute("grade");if(null==a)return;if(null==o)return;if(null==i)return;if(null==z?void 0:z.isUse){var l=e.querySelector(".thumb");null!=l&&l.style.setProperty("display","none")}else{var s=e.querySelector(".thumb");null!=s&&s.style.setProperty("display","inline-block")}if(null==H?void 0:H.isUse){var c=e.querySelector(".grade-badge-vip");null!=c&&c.style.setProperty("display","none")}else{var u=e.querySelector(".grade-badge-vip");null!=u&&u.style.removeProperty("display")}if(null==N?void 0:N.isUse){var d=e.querySelector(".grade-badge-fan");null!=d&&d.style.setProperty("display","none")}else{var h=e.querySelector(".grade-badge-fan");null!=h&&h.style.removeProperty("display")}if(null==M?void 0:M.isUse){var f=e.querySelector(".grade-badge-support");null!=f&&f.style.setProperty("display","none")}else{var p=e.querySelector(".grade-badge-support");null!=p&&p.style.removeProperty("display")}if(null==O?void 0:O.isUse){var v=e.querySelector(".author");if(null!=v){var y=v.innerText;v.innerText=y+" : "}}else{var g=e.querySelector(".author");if(null!=g){var m=g.innerText,b=m.indexOf(" : ");-1!=b&&(g.innerText=m.substring(b))}}(function(e,t,n){var r,a=0,o=t.indexOf("(");return r=-1==o?t:t.substring(0,o),D.forEach((function(t){t.isNickname&&t.user==e&&(a=1)})),Z.forEach((function(e){e.isNickname||e.user!=r||(a=1)})),("bj"==n&&k.streamer||"manager"==n&&k.manager||"topfan"==n&&k.topfan||"gudok"==n&&k.gudok||"fan"==n&&k.fan||"user"==n&&k.user)&&(a=1),1==a})(o,a,i)&&null!=X&&(X.appendChild(e.cloneNode(!0)),(null==F?void 0:F.isUse)&&(t.style.borderLeft="4px solid rgb(255, 193, 7)",t.style.paddingLeft="10px",t.style.marginLeft="-16px"),X.scrollTop=X.scrollHeight)}}))}))};function ee(){return te.apply(this,arguments)}function te(){return te=L((function(){var e,t,n,r,a,o,i,l,s;return A(this,(function(c){return e=document.getElementById("chatbox"),t=document.getElementById("actionbox"),n=document.querySelector(".area_header"),r=document.getElementById("chat_area"),null==e||null==r||null==t||null==n||(X=r.cloneNode(),a=r.parentNode,o=(null==e?void 0:e.clientHeight)-(null==t?void 0:t.clientHeight)-(null==n?void 0:n.clientHeight)-20,(i=document.createElement("div")).id="afreeca-chat-list-container",i.style.setProperty("width","100%"),i.style.setProperty("height",o+"px"),i.style.setProperty("will-change","scroll-position"),r.classList.add("live-area"),X.classList.add("filter-area"),X.style.display="none",X.style.height="30%",X.style.top="0px",X.style.position="relative",l=document.createElement("div"),(s=document.createElement("div")).id="tbc-resize-handle",l.id="handle-container",l.style.position="relative",l.appendChild(s),l.style.display="none",l.addEventListener("mousedown",se),l.addEventListener("touchstart",se),l.appendChild(s),i.appendChild(X),i.appendChild(l),i.appendChild(r),a.appendChild(i)),[2]}))})),te.apply(this,arguments)}function ne(){return re.apply(this,arguments)}function re(){return re=L((function(){var e,t,n,r;return A(this,(function(a){switch(a.label){case 0:return null==(e=document.getElementById("afreeca-chat-list-container"))?[2]:(e.style.setProperty("position","absolute"),X.style.removeProperty("display"),null==(t=document.getElementById("handle-container"))?[2]:(t.style.removeProperty("display"),null==(n=document.querySelector(".live-area"))?[2]:(n.style.setProperty("position","relative"),n.style.setProperty("top","0px"),[4,chrome.storage.local.get("position")])));case 1:return r=a.sent(),[4,chrome.storage.local.get("containerRatio")];case 2:return de(a.sent().containerRatio,r.position),[2]}}))})),re.apply(this,arguments)}function ae(){var e=document.getElementById("afreeca-chat-list-container");if(null!=e){e.style.removeProperty("position");var t=document.querySelector(".filter-area");if(null!=t){t.style.setProperty("display","none");var n=document.getElementById("handle-container");if(null!=n){n.style.setProperty("display","none");var r=document.querySelector(".live-area");null!=r&&(r.style.removeProperty("position"),r.style.removeProperty("height"),r.style.removeProperty("top"))}}}}new ResizeObserver((function(e){var t=!0,n=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value.contentRect.height,l=document.getElementById("actionbox"),s=document.querySelector(".area_header");if(null==l||null==s)return;var c=i-l.clientHeight-s.clientHeight-20;null==I?(I=c,ne()):I!=c&&(I=c,document.querySelector(".filter-area"),ne())}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}})),window.addEventListener("load",L((function(){var e,t,n;return A(this,(function(r){switch(r.label){case 0:return(R=document.getElementById("chat_area"))?[4,ee()]:[2];case 1:return r.sent(),[4,Y()];case 2:return r.sent(),[4,V()];case 3:return r.sent(),[4,Q()];case 4:return r.sent(),[4,m()];case 5:return U=r.sent(),[4,b()];case 6:return C=r.sent(),[4,w()];case 7:return T=r.sent(),[4,S()];case 8:return z=r.sent(),[4,E()];case 9:return H=r.sent(),[4,x()];case 10:return N=r.sent(),[4,_()];case 11:return M=r.sent(),[4,B()];case 12:return F=r.sent(),[4,q()];case 13:return O=r.sent(),e=document.querySelector(".filter-area"),t=document.querySelector(".live-area"),null==e||null==t?[2]:(T.isUse?(t.setAttribute("data-mngr","chat_two_line"),e.setAttribute("data-mngr","chat_two_line")):C.isUse?(t.setAttribute("data-mngr","chat_sort"),e.setAttribute("data-mngr","chat_sort")):(t.removeAttribute("data-mngr"),e.removeAttribute("data-mngr")),C.isUse?(t.setAttribute("data-mngr","chat_sort"),e.setAttribute("data-mngr","chat_sort")):T.isUse?(t.setAttribute("data-mngr","chat_two_line"),e.setAttribute("data-mngr","chat_two_line")):(t.removeAttribute("data-mngr"),e.removeAttribute("data-mngr")),U.isUse?[4,ne()]:[3,15]);case 14:return r.sent(),[3,16];case 15:ae(),r.label=16;case 16:return function(){var e=document.querySelector(".chat_item_list"),t=null==e?void 0:e.querySelector("ul"),n=null==t?void 0:t.querySelector("li.star"),r=null==n?void 0:n.cloneNode(!1),a=document.createElement("a");a.addEventListener("click",(function(e){e.preventDefault();try{var t=document.getElementById("afreeca-chat-list-container");if(null==t)return;var n=document.querySelector(".filter-area"),r=document.querySelector(".live-area"),a=document.getElementById("handle-container");n&&r&&(G?(G=!1,t.insertBefore(n,a),t.insertBefore(r,null)):(G=!0,t.insertBefore(r,a),t.insertBefore(n,null)))}catch(e){}})),a.style.setProperty("width","32px"),a.style.setProperty("height","32px"),a.style.setProperty("display","flex"),a.style.setProperty("align-items","center"),a.style.setProperty("justify-content","center"),a.innerHTML='<svg id="Layer_1" style="enable-background:new 0 0 120 120; width:21px; height:21px;" version="1.1" viewBox="0 0 120 120" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">\n\t.st0{fill:none;}\n\t.st1{fill:#386BFF;}\n\t.st2{fill:#5DE88B;}\n</style><line class="st0" x1="60" x2="60" y1="-67.7" y2="-73.2"/><g><path class="st1" d="M55.4,46.1L37.3,21.5c-1.2-1.6-3.6-1.6-4.7,0L14.4,46.1c-1.4,1.9,0,4.7,2.4,4.7h8.3v46c0,1.6,1.3,2.9,2.9,2.9   h13.8c1.6,0,2.9-1.3,2.9-2.9v-46H53C55.4,50.8,56.8,48.1,55.4,46.1z"/><path class="st2" d="M105.6,73.9L87.5,98.5c-1.2,1.6-3.6,1.6-4.7,0L64.6,73.9c-1.4-1.9,0-4.7,2.4-4.7h8.2v-46   c0-1.6,1.3-2.9,2.9-2.9H92c1.6,0,2.9,1.3,2.9,2.9v46h8.3C105.6,69.2,107,71.9,105.6,73.9z"/></g></svg>';var o=a.querySelector("svg");if(null!=o){var i=document.getElementById("actionbox");null!=i&&(i.style.setProperty("z-index","110"),o.style.setProperty("vertical-align","middle"),a.setAttribute("tip","채팅창 상하 변경"),r.appendChild(a),null!=r&&(null==n||n.insertAdjacentElement("beforebegin",r),r.classList.remove("star")))}}(),n=new MutationObserver($),R&&n.observe(R,j),[2]}}))}))),chrome.storage.local.onChanged.addListener(function(){var e=L((function(e){var t,n;return A(this,(function(e){switch(e.label){case 0:return[4,Y()];case 1:return e.sent(),[4,V()];case 2:return e.sent(),[4,Q()];case 3:return e.sent(),[4,m()];case 4:return U=e.sent(),[4,b()];case 5:return C=e.sent(),[4,w()];case 6:return T=e.sent(),[4,S()];case 7:return z=e.sent(),[4,E()];case 8:return H=e.sent(),[4,x()];case 9:return N=e.sent(),[4,_()];case 10:return M=e.sent(),[4,B()];case 11:return F=e.sent(),[4,q()];case 12:return O=e.sent(),t=document.querySelector(".filter-area"),n=document.querySelector(".live-area"),null==t||null==n?[2]:(T.isUse?(n.setAttribute("data-mngr","chat_two_line"),t.setAttribute("data-mngr","chat_two_line")):C.isUse?(n.setAttribute("data-mngr","chat_sort"),t.setAttribute("data-mngr","chat_sort")):(n.removeAttribute("data-mngr"),t.removeAttribute("data-mngr")),C.isUse?(n.setAttribute("data-mngr","chat_sort"),t.setAttribute("data-mngr","chat_sort")):T.isUse?(n.setAttribute("data-mngr","chat_two_line"),t.setAttribute("data-mngr","chat_two_line")):(n.removeAttribute("data-mngr"),t.removeAttribute("data-mngr")),U.isUse?[4,ne()]:[3,14]);case 13:return e.sent(),[3,15];case 14:ae(),e.label=15;case 15:return[2]}}))}));return function(t){return e.apply(this,arguments)}}());var oe="up",ie=0,le=function(e){return"1"===e.style.order?"up":"down"},se=function(e){if(e.preventDefault(),X){if(G){var t=document.querySelector(".live-area");if(null==t)return;t.classList.add("freeze"),oe=le(t)}else X.classList.add("freeze"),oe=le(X);window.addEventListener("mousemove",ce),window.addEventListener("touchmove",ce),window.addEventListener("mouseup",ue),window.addEventListener("touchend",ue)}},ce=function(e){var t=document.getElementById("afreeca-chat-list-container"),n="touches"in e?e.touches[0].clientY:e.clientY,r=0;if(t){var a=t.getBoundingClientRect();r=a.height-77-62,ie=100*(1-(n-a.y-77)/r),de(ie=Math.max(0,Math.min(100,Math.round(ie))),oe)}},ue=function(){if(G){var e=document.querySelector(".live-area");if(null==e)return;e.classList.remove("freeze")}else X.classList.remove("freeze");chrome.storage.local.set({containerRatio:ie,position:oe}),window.removeEventListener("mousemove",ce),window.removeEventListener("touchmove",ce),window.removeEventListener("mouseup",ue),window.removeEventListener("touchend",ue)};function de(e,t){0!=e&&(e=e||30);var n,r=0===e?1:10===e?0:1,a=0===e?0:10===e?1:0;if(1<=e&&e<=100&&(a=parseFloat((.01*e).toFixed(2)),r=parseFloat((1-a).toFixed(2))),"down"===t&&(r=(n=[a,r])[0],a=n[1]),G){var o=document.querySelector(".filter-area"),i=document.querySelector(".live-area");if(!o||!i)return;o.style.height="".concat(100*r,"%"),i.style.height="".concat(100*a,"%")}else{var l=document.querySelector(".live-area"),s=document.querySelector(".filter-area");if(!l||!s)return;l.style.height="".concat(100*r,"%"),s.style.height="".concat(100*a,"%")}}var he=new ResizeObserver((function(e){var t=!0,n=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var i=a.value.contentRect.height,l=document.getElementById("actionbox"),s=document.querySelector(".area_header");if(null==l||null==s)return;var c=i-l.clientHeight-s.clientHeight-20,u=document.getElementById("afreeca-chat-list-container");if(null==u)return;var d=document.querySelector(".filter-area");if(null==d)return;var h=document.querySelector(".live-area");if(null==h)return;if(u.style.setProperty("height",c+"px"),U.isUse){ne();var f=d.style.height.indexOf("%"),p=d.style.height.substring(0,f),v=100-Number(p);h.style.setProperty("height",v+"%")}else ae()}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}})),fe=document.getElementById("chatbox");null!=fe&&he.observe(fe);var pe=new ResizeObserver((function(e){var t=!0,n=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){a.value;var i=document.getElementById("chatbox"),l=document.getElementById("actionbox"),s=document.querySelector(".area_header");if(null==i||null==l||null==s)return;var c=i.clientHeight-l.clientHeight-s.clientHeight-20,u=document.getElementById("afreeca-chat-list-container");if(null==u)return;var d=document.querySelector(".filter-area");if(null==d)return;var h=document.querySelector(".live-area");if(null==h)return;if(u.style.setProperty("height",c+"px"),U.isUse){ne();var f=d.style.height.indexOf("%"),p=d.style.height.substring(0,f),v=100-Number(p);h.style.setProperty("height",v+"%")}else ae()}}catch(e){n=!0,r=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}})),ve=document.getElementById("actionbox");null!=ve&&pe.observe(ve)})()})();