webpackJsonp([1],{29:function(e,t,n){"use strict";function r(e){return"[object Array]"===k.call(e)}function a(e){return"[object ArrayBuffer]"===k.call(e)}function o(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function i(e){return"string"==typeof e}function l(e){return"number"==typeof e}function u(e){return"undefined"==typeof e}function c(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===k.call(e)}function d(e){return"[object File]"===k.call(e)}function h(e){return"[object Blob]"===k.call(e)}function m(e){return"[object Function]"===k.call(e)}function p(e){return c(e)&&m(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function _(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function E(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function v(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function w(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=w(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function y(e,t,n){return v(t,function(t,r){n&&"function"==typeof t?e[r]=A(t,n):e[r]=t}),e}var A=n(209),T=n(326),k=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:a,isBuffer:T,isFormData:o,isArrayBufferView:s,isString:i,isNumber:l,isObject:c,isUndefined:u,isDate:f,isFile:d,isBlob:h,isFunction:m,isStream:p,isURLSearchParams:g,isStandardBrowserEnv:E,forEach:v,merge:w,extend:y,trim:_}},138:function(e,t,n){(function(t){"use strict";function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function a(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(205):"undefined"!=typeof t&&(e=n(205)),e}var o=n(29),s=n(323),i={"Content-Type":"application/x-www-form-urlencoded"},l={adapter:a(),transformRequest:[function(e,t){return s(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};l.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){l.headers[e]={}}),o.forEach(["post","put","patch"],function(e){l.headers[e]=o.merge(i)}),e.exports=l}).call(t,n(185))},139:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.WORK_VIEW_CONTENT=t.CURRENT_PERSONAL_PROJECTS=t.ALL_WORK_SOFTWARE=t.CURRENT_WORK_SOFTWARE=void 0;var a=n(79),o=r(a),s=n(95),i=t.CURRENT_WORK_SOFTWARE=[{title:"WorkHands",company:"WorkHands",shortDescription:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,'"LinkedIn for the Blue Collar World"'),href:"https://www.workhands.us/",favicon:"",location:["San Francisco, CA","Remote"],tags:["Web","Mobile","Cordova","JS","Angular","iOS","Android","HTML","CSS","Ruby on Rails"],dates:[{start:new Date("06/01/2016")},{start:new Date("05/01/2015"),end:new Date("01/01/2016")}]}],l=(t.ALL_WORK_SOFTWARE=i.concat([{title:"COSMOS",company:"Niuera",shortDescription:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"D3 Data Graphs and React View Layer Code"),href:"http://niuera.co/",favicon:"",location:["Remote"],tags:["Web","JS","D3","Web","HTML","CSS","SVG"],dates:[{start:new Date("09/26/2016"),end:new Date("07/31/2017")}]},{title:"Society6",company:"Leaf Group",tags:["Web","JS","React","PHP","jQuery"],shortDescription:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Product Page and the Artist Upload Studio"),href:"https://society6.com/",location:["Los Angeles, CA"],dates:[{start:new Date("02/24/2016"),end:new Date("09/01/2016")}]},{title:"Copy.com",company:"Barracuda Networks",tags:["Web","JS","Backbone","Marionette"],shortDescription:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Developed a new front-end for the site Copy.com using Backbone/Marionette JS"),href:"https://copy.com/",location:["Ann Arbor, MI"],dates:[{start:new Date("04/01/2014"),end:new Date("05/01/2015")}]},{title:"ADMI",company:"ADMI",tags:["Web","JS","ColdFusion","jQuery","Office 365"],shortDescription:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Helped implement Javascript, scaffolded new pages in ColdFusion, set up Office 365 mail server"),href:"http://admiglobal.com/",location:["Ann Arbor, MI"],dates:[{start:new Date("02/01/2014"),end:new Date("04/01/2014")}]},{title:"Videolog",company:"Videolog",tags:["Web","JS","CSS","PHP","HTML","jQuery"],shortDescription:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Reorganized and centralized CSS, built UIs in JS and HTML/PHP"),href:"https://en.wikipedia.org/wiki/Videolog.tv",location:["Rio de Janeiro, Brazil"],dates:[{start:new Date("05/01/2013"),end:new Date("10/01/2013")}]}]),t.CURRENT_PERSONAL_PROJECTS=[{title:"JakeHash.com",role:"I am Jake Hash",shortDescription:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Personal Portfolio"),href:"/",favicon:"",location:["Remote"],tags:["Web","JS","React","Redux","Node.js","HTML","CSS"],dates:[{start:new Date("01/01/2015")}]}],t.WORK_VIEW_CONTENT={softwareWorkTitle:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Software")});t.default=l},205:function(e,t,n){"use strict";var r=n(29),a=n(315),o=n(318),s=n(324),i=n(322),l=n(208),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(317);e.exports=function(e){return new Promise(function(t,c){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var h=new XMLHttpRequest,m="onreadystatechange",p=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in h||i(e.url)||(h=new window.XDomainRequest,m="onload",p=!0,h.onprogress=function(){},h.ontimeout=function(){}),e.auth){var g=e.auth.username||"",_=e.auth.password||"";d.Authorization="Basic "+u(g+":"+_)}if(h.open(e.method.toUpperCase(),o(e.url,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h[m]=function(){if(h&&(4===h.readyState||p)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?s(h.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?h.response:h.responseText,o={data:r,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:n,config:e,request:h};a(t,c,o),h=null}},h.onerror=function(){c(l("Network Error",e,null,h)),h=null},h.ontimeout=function(){c(l("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var E=n(320),v=(e.withCredentials||i(e.url))&&e.xsrfCookieName?E.read(e.xsrfCookieName):void 0;v&&(d[e.xsrfHeaderName]=v)}if("setRequestHeader"in h&&r.forEach(d,function(e,t){"undefined"==typeof f&&"content-type"===t.toLowerCase()?delete d[t]:h.setRequestHeader(t,e)}),e.withCredentials&&(h.withCredentials=!0),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){h&&(h.abort(),c(e),h=null)}),void 0===f&&(f=null),h.send(f)})}},206:function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},207:function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},208:function(e,t,n){"use strict";var r=n(314);e.exports=function(e,t,n,a,o){var s=new Error(e);return r(s,t,n,a,o)}},209:function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},225:[827,97,397,214,144,34,96],308:function(e,t,n){e.exports=n(309)},309:function(e,t,n){"use strict";function r(e){var t=new s(e),n=o(s.prototype.request,t);return a.extend(n,s.prototype,t),a.extend(n,t),n}var a=n(29),o=n(209),s=n(311),i=n(138),l=r(i);l.Axios=s,l.create=function(e){return r(a.merge(i,e))},l.Cancel=n(206),l.CancelToken=n(310),l.isCancel=n(207),l.all=function(e){return Promise.all(e)},l.spread=n(325),e.exports=l,e.exports.default=l},310:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new a(e),t(n.reason))})}var a=n(206);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},311:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var a=n(138),o=n(29),s=n(312),i=n(313),l=n(321),u=n(319);r.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(a,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase(),e.baseURL&&!l(e.url)&&(e.url=u(e.baseURL,e.url));var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){r.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},312:function(e,t,n){"use strict";function r(){this.handlers=[]}var a=n(29);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){a.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},313:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var a=n(29),o=n(316),s=n(207),i=n(138);e.exports=function(e){r(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=a.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),a.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||i.adapter;return t(e).then(function(t){return r(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},314:function(e,t){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e}},315:function(e,t,n){"use strict";var r=n(208);e.exports=function(e,t,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},316:function(e,t,n){"use strict";var r=n(29);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},317:function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,r,o=String(e),s="",i=0,l=a;o.charAt(0|i)||(l="=",i%1);s+=l.charAt(63&t>>8-i%1*8)){if(r=o.charCodeAt(i+=.75),r>255)throw new n;t=t<<8|r}return s}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},318:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var a=n(29);e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(a.isURLSearchParams(t))o=t.toString();else{var s=[];a.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(a.isArray(e)&&(t+="[]"),a.isArray(e)||(e=[e]),a.forEach(e,function(e){a.isDate(e)?e=e.toISOString():a.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),o=s.join("&")}return o&&(e+=(e.indexOf("?")===-1?"?":"&")+o),e}},319:function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},320:function(e,t,n){"use strict";var r=n(29);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,a,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(a)&&i.push("path="+a),r.isString(o)&&i.push("domain="+o),s===!0&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},321:function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},322:function(e,t,n){"use strict";var r=n(29);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(a.setAttribute("href",t),t=a.href),a.setAttribute("href",t),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:"/"===a.pathname.charAt(0)?a.pathname:"/"+a.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a");return t=e(window.location.href),function(n){var a=r.isString(n)?e(n):n;return a.protocol===t.protocol&&a.host===t.host}}():function(){return function(){return!0}}()},323:function(e,t,n){"use strict";var r=n(29);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},324:function(e,t,n){"use strict";var r=n(29);e.exports=function(e){var t,n,a,o={};return e?(r.forEach(e.split("\n"),function(e){a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t&&(o[t]=o[t]?o[t]+", "+n:n)}),o):o}},325:function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},326:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},327:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.EllipseDotAnimation=void 0;var a=n(30),o=r(a),s=n(23),i=r(s),l=n(31),u=r(l),c=n(33),f=r(c),d=n(32),h=r(d),m=n(53),p=r(m),g=n(3),_=r(g),E=0,v=3,w=333,y=t.EllipseDotAnimation=function(e){function t(e){(0,i.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.state={numberOfDots:v,dotChangeIncrement:-1},n}return(0,h.default)(t,e),(0,u.default)(t,[{key:"changeNumberOfDots",value:function(){var e=this.state.numberOfDots+this.state.dotChangeIncrement,t=this.state.dotChangeIncrement;e===v&&(t=-1),e===E&&(t=1),this.setState({numberOfDots:e,dotChangeIncrement:t})}},{key:"componentDidMount",value:function(){this.intervalId=setInterval(this.changeNumberOfDots.bind(this),w)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return _.default.createElement("span",null,p.default.times(this.state.numberOfDots,function(e){return _.default.createElement("span",{key:e},".")}),p.default.times(v-this.state.numberOfDots,function(e){return _.default.createElement("span",{key:e}," ")}))}}]),t}(_.default.Component);t.default=y},329:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingSpinnerFlower=void 0;var a=n(53),o=r(a),s=n(3),i=r(s);n(617);var l=t.LoadingSpinnerFlower=function(){return i.default.createElement("div",{className:"loading-spinner loading-spinner--flower"},o.default.times(7).map(function(e,t){return i.default.createElement("span",{className:"loading-spinner--flower__span",key:t})}))};t.default=l},331:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ROUTE_MESSAGE_WORK_TOGETHER="message_work_together"},335:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(79),o=r(a),s=n(95),i={header:{name:s.DISPLAY_NAME,location:s.CURRENT_LOCATION,jobTitle:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Web and Mobile Developer / Designer, Software Engineer"),currentWorkHeader:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Currently working on:"),workTogetherQuestion:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Interested in working together?"),workTogetherNameLabel:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Name"),workTogetherEmailLabel:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Email"),workTogetherMessageLabel:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Message"),workTogetherSendLabel:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Send"),workTogetherEmailPlaceholder:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Your@email.please"),workTogetherEmailDisclaimer:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"I will not start sending you cat videos unless you want me to"),workTogetherNamePlaceholder:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Your name"),workTogetherMessagePlaceholder:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Your message to me..."),workTogetherEmailError:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Email invalid. Try something like back@street.boys"),workTogetherNameError:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Ex. Warren Buffett. Haha I wish"),workTogetherMessageError:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Surely you have something to say. And don't call me Shirley"),workTogetherMessageSendError:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Failed to send message. Please try easing up on the sass"),workTogetherMessageSending:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Message sending"),workTogetherMessageSent:(0,o.default)({},s.DEFAULT_LANGUAGE_CODE,"Message sent successfully. Expect to hear from me or my butler soon")}};t.default=i},336:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return""+l+e}function o(e,t,n){return i.default.post(a(e),t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.API_BASE=void 0,t.constructApiUrl=a,t.apiPost=o;var s=n(308),i=r(s),l=t.API_BASE="/"==="http://ec2-18-221-68-241.us-east-2.compute.amazonaws.com/api"["http://ec2-18-221-68-241.us-east-2.compute.amazonaws.com/api".length-1]?"http://ec2-18-221-68-241.us-east-2.compute.amazonaws.com/api":"http://ec2-18-221-68-241.us-east-2.compute.amazonaws.com/api/"},345:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.HomeView=void 0;var a=n(30),o=r(a),s=n(23),i=r(s),l=n(31),u=r(l),c=n(33),f=r(c),d=n(32),h=r(d),m=n(53),p=r(m),g=n(3),_=r(g),E=n(78);n(623);var v=n(108),w=n(329),y=r(w),A=n(327),T=r(A),k=n(335),N=r(k),L=n(139),S=t.HomeView=function(e){function t(e){(0,i.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.state={name:"",email:"",message:""},n._sendMessage=n._sendMessage.bind(n),n._onNameChange=n._onNameChange.bind(n),n._onEmailChange=n._onEmailChange.bind(n),n._onMessageChange=n._onMessageChange.bind(n),n}return(0,h.default)(t,e),(0,u.default)(t,[{key:"_onNameChange",value:function(e){this.onMessageFormChange(),this.setState({name:e.target.value,nameValid:this.validateName(e.target.value)})}},{key:"_onEmailChange",value:function(e){this.onMessageFormChange(),this.setState({email:e.target.value,emailValid:this.validateEmail(e.target.value)})}},{key:"_onMessageChange",value:function(e){this.onMessageFormChange(),this.setState({message:e.target.value,messageValid:this.validateMessage(e.target.value)})}},{key:"_sendMessage",value:function(e){var t=this;e.preventDefault();var n=this.validateName(this.state.name),r=this.validateEmail(this.state.email),a=this.validateMessage(this.state.message);this.setState({nameValid:n,emailValid:r,messageValid:a,submitIntent:!0}),n&&r&&a&&(this.setState({submitIntent:void 0,messageSending:!0,loadingSpinnerHeight:this.refs.letsWorkTogetherForm.clientHeight}),this.props.sendMessage({name:this.state.name,email:this.state.email,message:this.state.message}).then(function(){t.setState({messageSending:!1,messageSentSuccessfully:!0,loadingSpinnerHeight:void 0})}).catch(function(){t.setState({messageSending:!1,messageSentSuccessfully:!1,loadingSpinnerHeight:void 0})}))}},{key:"onMessageFormChange",value:function(){this.setState({messageSentSuccessfully:void 0})}},{key:"validateName",value:function(e){return!p.default.isEmpty(e)}},{key:"validateEmail",value:function(e){return!p.default.isEmpty(e)}},{key:"validateMessage",value:function(e){return!p.default.isEmpty(e)}},{key:"render",value:function(){return _.default.createElement("div",{className:"view--home"},_.default.createElement("div",{className:"row"},_.default.createElement("h2",{className:"view--home__header__name"},(0,v.resolveLocalizationGet)(N.default,"header.name")),_.default.createElement("h5",{className:"view--home__header__location"},_.default.createElement("i",{className:"view--home__header__location__icon"}),(0,v.resolveLocalizationGet)(N.default,"header.location"))),_.default.createElement("h4",{className:"row"},(0,v.resolveLocalizationGet)(N.default,"header.jobTitle")),_.default.createElement("div",{className:"row"},_.default.createElement("h5",null,(0,v.resolveLocalizationGet)(N.default,"header.currentWorkHeader")),_.default.createElement("ul",null,p.default.map(L.CURRENT_WORK_SOFTWARE,function(e,t){var n=_.default.createElement("li",{className:"view--home__current_work__li__text"},[(0,v.resolveLocalizationGet)(e,"title"),(0,v.resolveLocalizationGet)(e,"shortDescription")].join(" - "));return p.default.get(e,"link")?_.default.createElement(E.Link,{key:"current-work-"+t,to:p.default.get(e,"link")},n):_.default.createElement("a",{key:"current-work-"+t,href:p.default.get(e,"href"),target:"_blank"},n)}))),this.state.messageSending||this.state.messageSentSuccessfully===!0?null:_.default.createElement("form",{onSubmit:this._sendMessage,ref:"letsWorkTogetherForm"},_.default.createElement("div",{className:"row"},_.default.createElement("div",{className:"four columns font-size--5 view--home__lets-work-together__title"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherQuestion")),_.default.createElement("div",{className:"four columns"},_.default.createElement("label",{htmlFor:"lets-work-together-email",className:"view--home__lets-work-together__label"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherEmailLabel")),_.default.createElement("input",{type:"email",className:"view--home__lets-work-together__input",ref:"letsWorkTogetherEmail",id:"lets-work-together-email",name:"lets-work-together-email",placeholder:(0,v.resolveLocalizationGet)(N.default,"header.workTogetherEmailPlaceholder"),value:this.state.email,onChange:this._onEmailChange}),_.default.createElement("div",{className:"view--home__lets-work-together__disclaimer"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherEmailDisclaimer")),this.state.emailValid===!1&&this.state.submitIntent?_.default.createElement("div",{className:"view--home__lets-work-together__error"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherEmailError")):null),_.default.createElement("div",{className:"four columns"},_.default.createElement("label",{htmlFor:"lets-work-together-name",className:"view--home__lets-work-together__label"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherNameLabel")),_.default.createElement("input",{type:"text",className:"view--home__lets-work-together__input",ref:"letsWorkTogetherName",id:"lets-work-together-name",name:"lets-work-together-name",placeholder:(0,v.resolveLocalizationGet)(N.default,"header.workTogetherNamePlaceholder"),value:this.state.name,onChange:this._onNameChange}),this.state.nameValid===!1&&this.state.submitIntent?_.default.createElement("div",{className:"view--home__lets-work-together__error"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherNameError")):null)),_.default.createElement("div",{className:"row view--home__lets-work-together__message-section"},_.default.createElement("div",{className:"eight columns"},_.default.createElement("label",{htmlFor:"lets-work-together-message",className:"view--home__lets-work-together__label"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherMessageLabel")),_.default.createElement("textarea",{className:"view--home__lets-work-together__input view--home__lets-work-together__textarea",ref:"letsWorkTogetherMessage",id:"lets-work-together-message",name:"lets-work-together-message",placeholder:(0,v.resolveLocalizationGet)(N.default,"header.workTogetherMessagePlaceholder"),value:this.state.message,onChange:this._onMessageChange}),this.state.messageValid===!1&&this.state.submitIntent?_.default.createElement("div",{className:"view--home__lets-work-together__error view--home__lets-work-together__error--mobile"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherMessageError")):null,this.state.messageSentSuccessfully===!1?_.default.createElement("div",{className:"view--home__lets-work-together__error"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherMessageSendError")):null),_.default.createElement("div",{className:"four columns"},_.default.createElement("label",{htmlFor:"lets-work-together-send-button",className:"view--home__lets-work-together__label view--home__lets-work-together__label--hidden"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherSendLabel")),_.default.createElement("button",{className:"view--home__lets-work-together__input view--home__lets-work-together__send-button",type:"submit",id:"lets-work-together-send-button",name:"lets-work-together-send-button"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherSendLabel")),this.state.messageValid===!1&&this.state.submitIntent?_.default.createElement("div",{className:"view--home__lets-work-together__error view--home__lets-work-together__error--tablet"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherMessageError")):null))),this.state.messageSending?_.default.createElement("div",{className:"row view--home__loading",style:{height:this.state.loadingSpinnerHeight}},_.default.createElement("div",{className:"view--home__loading__spinner-wrapper"},_.default.createElement(y.default,null)),_.default.createElement("div",{className:"view--home__loading__text"},(0,v.resolveLocalizationGet)(N.default,"header.workTogetherMessageSending"),_.default.createElement(T.default,null))):null,this.state.messageSentSuccessfully===!0?_.default.createElement("h6",{className:"view--home__message-sent"},_.default.createElement("i",{className:"view--home__message-sent__icon"}),(0,v.resolveLocalizationGet)(N.default,"header.workTogetherMessageSent")):null)}}]),t}(_.default.Component);S.propTypes={sendMessage:_.default.PropTypes.func.isRequired},t.default=S},346:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(140),o=r(a),s=n(106),i=n(345),l=r(i),u=n(336),c=n(331),f=function(){return{sendMessage:function(e){return(0,u.apiPost)(c.ROUTE_MESSAGE_WORK_TOGETHER,(0,o.default)({},e))}}},d=function(e){return{}};t.default=(0,s.connect)(d,f)(l.default)},348:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:c,payload:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments[1],n=d[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.doubleAsync=t.COUNTER_INCREMENT=void 0;var s=n(79),i=r(s),l=n(374),u=r(l);t.increment=a,t.default=o;var c=t.COUNTER_INCREMENT="COUNTER_INCREMENT",f=t.doubleAsync=function(){return function(e,t){return new u.default(function(n){setTimeout(function(){e(a(t().counter)),n()},200)})}},d=(t.actions={increment:a,doubleAsync:f},(0,i.default)({},c,function(e,t){return e+t.payload})),h=0},374:function(e,t,n){e.exports={default:n(389),__esModule:!0}},389:function(e,t,n){n(228),n(114),n(115),n(425),e.exports=n(15).Promise},393:66,396:[821,97,400,398,48,226,227],397:120,398:[822,82,20],400:[823,48],402:[824,20],406:[825,34,225,96],410:function(e,t,n){var r=n(64);e.exports=function(e,t,n){for(var a in t)n&&e[a]?e[a]=t[a]:r(e,a,t[a]);return e}},412:function(e,t,n){"use strict";var r=n(34),a=n(15),o=n(57),s=n(56),i=n(20)("species");e.exports=function(e){var t="function"==typeof a[e]?a[e]:r[e];s&&t&&!t[i]&&o.f(t,i,{configurable:!0,get:function(){return this}})}},413:[826,48,141,20],425:[828,109,34,97,142,42,81,141,393,396,413,225,406,20,410,111,412,15,402],617:616,623:616});