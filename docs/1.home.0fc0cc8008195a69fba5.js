webpackJsonp([1],{32:function(e,t,n){"use strict";function r(e){return"[object Array]"===C.call(e)}function o(e){return"[object ArrayBuffer]"===C.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function i(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function l(e){return"[object Date]"===C.call(e)}function d(e){return"[object File]"===C.call(e)}function p(e){return"[object Blob]"===C.call(e)}function h(e){return"[object Function]"===C.call(e)}function m(e){return f(e)&&h(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function E(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function _(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=_(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)y(arguments[n],e);return t}function w(e,t,n){return y(t,function(t,r){n&&"function"==typeof t?e[r]=A(t,n):e[r]=t}),e}var A=n(223),T=n(708),C=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isBuffer:T,isFormData:a,isArrayBufferView:s,isString:i,isNumber:u,isObject:f,isUndefined:c,isDate:l,isFile:d,isBlob:p,isFunction:h,isStream:m,isURLSearchParams:g,isStandardBrowserEnv:v,forEach:y,merge:_,extend:w,trim:E}},146:function(e,t,n){(function(t){"use strict";function r(e,t){!a.isUndefined(e)&&a.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(219):"undefined"!=typeof t&&(e=n(219)),e}var a=n(32),s=n(359),i={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:o(),transformRequest:[function(e,t){return s(t,"Content-Type"),a.isFormData(e)||a.isArrayBuffer(e)||a.isBuffer(e)||a.isStream(e)||a.isFile(e)||a.isBlob(e)?e:a.isArrayBufferView(e)?e.buffer:a.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):a.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},a.forEach(["delete","get","head"],function(e){u.headers[e]={}}),a.forEach(["post","put","patch"],function(e){u.headers[e]=a.merge(i)}),e.exports=u}).call(t,n(199))},154:[967,116],219:function(e,t,n){"use strict";var r=n(32),o=n(351),a=n(354),s=n(360),i=n(358),u=n(222),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(353);e.exports=function(e){return new Promise(function(t,f){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||i(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var g=e.auth.username||"",E=e.auth.password||"";d.Authorization="Basic "+c(g+":"+E)}if(p.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?p.response:p.responseText,a={data:r,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:n,config:e,request:p};o(t,f,a),p=null}},p.onerror=function(){f(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){f(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var v=n(356),y=(e.withCredentials||i(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(d,function(e,t){"undefined"==typeof l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),f(e),p=null)}),void 0===l&&(l=null),p.send(l)})}},220:function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},221:function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},222:function(e,t,n){"use strict";var r=n(350);e.exports=function(e,t,n,o,a){var s=new Error(e);return r(s,t,n,o,a)}},223:function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},241:274,242:[968,44,58,154],244:[969,44,116,27],245:[970,98,431,231,152,26,97],344:function(e,t,n){e.exports=n(345)},345:function(e,t,n){"use strict";function r(e){var t=new s(e),n=a(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(32),a=n(223),s=n(347),i=n(146),u=r(i);u.Axios=s,u.create=function(e){return r(o.merge(i,e))},u.Cancel=n(220),u.CancelToken=n(346),u.isCancel=n(221),u.all=function(e){return Promise.all(e)},u.spread=n(361),e.exports=u,e.exports.default=u},346:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(220);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},347:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(146),a=n(32),s=n(348),i=n(349),u=n(357),c=n(355);r.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},348:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(32);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},349:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(32),a=n(352),s=n(221),i=n(146);e.exports=function(e){r(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||i.adapter;return t(e).then(function(t){return r(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},350:function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},351:function(e,t,n){"use strict";var r=n(222);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},352:function(e,t,n){"use strict";var r=n(32);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},353:function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,r,a=String(e),s="",i=0,u=o;a.charAt(0|i)||(u="=",i%1);s+=u.charAt(63&t>>8-i%1*8)){if(r=a.charCodeAt(i+=.75),r>255)throw new n;t=t<<8|r}return s}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},354:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(32);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),a=s.join("&")}return a&&(e+=(e.indexOf("?")===-1?"?":"&")+a),e}},355:function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},356:function(e,t,n){"use strict";var r=n(32);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(a)&&i.push("domain="+a),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},357:function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},358:function(e,t,n){"use strict";var r=n(32);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},359:function(e,t,n){"use strict";var r=n(32);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},360:function(e,t,n){"use strict";var r=n(32);e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(a[t]=a[t]?a[t]+", "+n:n)}),a):a}},361:function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},364:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ROUTE_MESSAGE_WORK_TOGETHER="message_work_together"},368:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(64),a=r(o),s=n(114),i={header:{name:s.DISPLAY_NAME,location:s.CURRENT_LOCATION,jobTitle:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Full-Stack Software Engineer"),currentWorkHeader:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Currently looking for work in NYC"),getInTouchHeader:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Get in touch"),workTogetherQuestion:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Interested in working together?"),workTogetherNameLabel:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Name"),workTogetherEmailLabel:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Email"),workTogetherMessageLabel:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Message"),workTogetherSendLabel:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Send"),workTogetherEmailPlaceholder:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Your@email.please"),workTogetherEmailDisclaimer:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"I will not start sending you cat videos unless you want me to"),workTogetherNamePlaceholder:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Your name"),workTogetherMessagePlaceholder:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Your message to me..."),workTogetherEmailError:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Email invalid. Try something like back@street.boys"),workTogetherNameError:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Ex. Warren Buffett. Haha I wish"),workTogetherMessageError:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Surely you have something to say. And don't call me Shirley"),workTogetherMessageSendError:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Failed to send message. Please try easing up on the sass"),workTogetherMessageSending:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Message sending"),workTogetherMessageSent:(0,a.default)({},s.DEFAULT_LANGUAGE_CODE,"Message sent successfully. Expect to hear from me or my butler soon")}};t.default=i},370:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return""+u+e}function a(e,t,n){return i.default.post(o(e),t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.API_BASE=void 0,t.constructApiUrl=o,t.apiPost=a;var s=n(344),i=r(s),u=t.API_BASE="/"==="http://ec2-18-221-68-241.us-east-2.compute.amazonaws.com/api"["http://ec2-18-221-68-241.us-east-2.compute.amazonaws.com/api".length-1]?"http://ec2-18-221-68-241.us-east-2.compute.amazonaws.com/api":"http://ec2-18-221-68-241.us-east-2.compute.amazonaws.com/api/"},379:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HomeView=void 0;var o=n(21),a=r(o),s=n(19),i=r(s),u=n(22),c=r(u),f=n(24),l=r(f),d=n(23),p=r(d),h=n(52),m=r(h),g=n(4),E=r(g);n(673);var v=n(115),y=n(368),_=r(y),w=t.HomeView=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={name:"",email:"",message:""},n._sendMessage=n._sendMessage.bind(n),n._onNameChange=n._onNameChange.bind(n),n._onEmailChange=n._onEmailChange.bind(n),n._onMessageChange=n._onMessageChange.bind(n),n}return(0,p.default)(t,e),(0,c.default)(t,[{key:"_onNameChange",value:function(e){this.onMessageFormChange(),this.setState({name:e.target.value,nameValid:this.validateName(e.target.value)})}},{key:"_onEmailChange",value:function(e){this.onMessageFormChange(),this.setState({email:e.target.value,emailValid:this.validateEmail(e.target.value)})}},{key:"_onMessageChange",value:function(e){this.onMessageFormChange(),this.setState({message:e.target.value,messageValid:this.validateMessage(e.target.value)})}},{key:"_sendMessage",value:function(e){var t=this;e.preventDefault();var n=this.validateName(this.state.name),r=this.validateEmail(this.state.email),o=this.validateMessage(this.state.message);this.setState({nameValid:n,emailValid:r,messageValid:o,submitIntent:!0}),n&&r&&o&&(this.setState({submitIntent:void 0,messageSending:!0,loadingSpinnerHeight:this.refs.letsWorkTogetherForm.clientHeight}),this.props.sendMessage({name:this.state.name,email:this.state.email,message:this.state.message}).then(function(){t.setState({messageSending:!1,messageSentSuccessfully:!0,loadingSpinnerHeight:void 0})}).catch(function(){t.setState({messageSending:!1,messageSentSuccessfully:!1,loadingSpinnerHeight:void 0})}))}},{key:"onMessageFormChange",value:function(){this.setState({messageSentSuccessfully:void 0})}},{key:"validateName",value:function(e){return!m.default.isEmpty(e)}},{key:"validateEmail",value:function(e){return!m.default.isEmpty(e)}},{key:"validateMessage",value:function(e){return!m.default.isEmpty(e)}},{key:"render",value:function(){return E.default.createElement("div",{className:"view--home container text-center"},E.default.createElement("div",{className:"row"},E.default.createElement("h2",{className:"view--home__header__name"},(0,v.resolveLocalizationGet)(_.default,"header.name")),E.default.createElement("h5",{className:"view--home__header__location"},E.default.createElement("i",{className:"view--home__header__location__icon"}),(0,v.resolveLocalizationGet)(_.default,"header.location"))),E.default.createElement("h4",{className:"row"},(0,v.resolveLocalizationGet)(_.default,"header.jobTitle")),E.default.createElement("div",{className:"row"},E.default.createElement("h5",null,(0,v.resolveLocalizationGet)(_.default,"header.currentWorkHeader"))),E.default.createElement("div",{className:"row"},E.default.createElement("iframe",{className:"view--home__get-in-touch",src:"https://notionforms.io/forms/get-in-touch-rdgmf6"})))}}]),t}(E.default.Component);w.propTypes={sendMessage:E.default.PropTypes.func.isRequired},t.default=w},380:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(148),a=r(o),s=n(112),i=n(379),u=r(i),c=n(370),f=n(364),l=function(){return{sendMessage:function(e){return(0,c.apiPost)(f.ROUTE_MESSAGE_WORK_TOGETHER,(0,a.default)({},e))}}},d=function(e){return{}};t.default=(0,s.connect)(d,l)(u.default)},382:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:f,payload:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments[1],n=d[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.doubleAsync=t.COUNTER_INCREMENT=void 0;var s=n(64),i=r(s),u=n(408),c=r(u);t.increment=o,t.default=a;var f=t.COUNTER_INCREMENT="COUNTER_INCREMENT",l=t.doubleAsync=function(){return function(e,t){return new c.default(function(n){setTimeout(function(){e(o(t().counter)),n()},200)})}},d=(t.actions={increment:o,doubleAsync:l},(0,i.default)({},f,function(e,t){return e+t.payload})),p=0},408:function(e,t,n){e.exports={default:n(423),__esModule:!0}},423:function(e,t,n){n(248),n(120),n(121),n(458),n(462),n(463),e.exports=n(16).Promise},427:68,430:[962,98,434,432,44,246,247],431:259,432:[963,84,27],434:[964,44],436:[965,27],439:[966,26,245,97],443:function(e,t,n){var r=n(66);e.exports=function(e,t,n){for(var o in t)n&&e[o]?e[o]=t[o]:r(e,o,t[o]);return e}},445:function(e,t,n){"use strict";var r=n(26),o=n(16),a=n(59),s=n(45),i=n(27)("species");e.exports=function(e){var t="function"==typeof o[e]?o[e]:r[e];s&&t&&!t[i]&&a.f(t,i,{configurable:!0,get:function(){return this}})}},448:[971,26],458:[972,99,26,98,150,33,58,116,427,430,244,245,439,154,241,448,242,27,443,118,445,16,436],462:[973,33,16,26,244,242],463:[974,33,154,241],673:667,708:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}}});