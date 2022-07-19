import{l as e}from"./index-a0a756df.js";import{k as t,l as n,r as o,m as i}from"./index-f96e54ea.js";var r;"undefined"!=typeof window&&(null==(r=null==window?void 0:window.navigator)?void 0:r.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var s=function(e,t){if("string"!=typeof e)throw new TypeError("argument str must be a string");for(var n={},o=t||{},i=e.split(";"),r=o.decode||u,s=0;s<i.length;s++){var a=i[s],c=a.indexOf("=");if(!(c<0)){var p=a.substring(0,c).trim();if(null==n[p]){var h=a.substring(c+1,a.length).trim();'"'===h[0]&&(h=h.slice(1,-1)),n[p]=f(h,r)}}}return n},a=function(e,t,n){var o=n||{},i=o.encode||c;if("function"!=typeof i)throw new TypeError("option encode is invalid");if(!p.test(e))throw new TypeError("argument name is invalid");var r=i(t);if(r&&!p.test(r))throw new TypeError("argument val is invalid");var s=e+"="+r;if(null!=o.maxAge){var a=o.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(a)}if(o.domain){if(!p.test(o.domain))throw new TypeError("option domain is invalid");s+="; Domain="+o.domain}if(o.path){if(!p.test(o.path))throw new TypeError("option path is invalid");s+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw new TypeError("option expires is invalid");s+="; Expires="+o.expires.toUTCString()}o.httpOnly&&(s+="; HttpOnly");o.secure&&(s+="; Secure");if(o.sameSite){switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return s},u=decodeURIComponent,c=encodeURIComponent,p=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function f(e,t){try{return t(e)}catch(n){return e}}function h(e,t){void 0===t&&(t={});var n=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return void 0===t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(n,t.doNotParse))try{return JSON.parse(n)}catch(o){}return e}var l=globalThis&&globalThis.__assign||function(){return l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},l.apply(this,arguments)},d=function(){function e(e,t){var n=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"==typeof e?s(e,t):"object"==typeof e&&null!==e?e:{}}(e,t),new Promise((function(){n.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=s(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,n){return void 0===t&&(t={}),this._updateBrowserValues(n),h(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var n={};for(var o in this.cookies)n[o]=h(this.cookies[o],e);return n},e.prototype.set=function(e,t,n){var o;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=l(l({},this.cookies),((o={})[e]=t,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=a(e,t,n)),this._emitChange({name:e,value:t,options:n})},e.prototype.remove=function(e,t){var n=t=l(l({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=l({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=a(e,"",n)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),g=Object.defineProperty,v=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&y(e,n,t[n]);if(v)for(var n of v(t))w.call(t,n)&&y(e,n,t[n]);return e};const{VITE_TOKEN_KEY:_}={VITE_TOKEN_KEY:"tokenKey",VITE_URL_PREFIX:"/api",VITE_ENV:"production",VITE_OUTPUT_DIR:"dist",VITE_PUBLIC_PATH:"/",VITE_API_BASE_URL:"/webapi",VITE_API_TARGET_URL:"https://testnew.wisight.cn/webapi",VITE_USE_MOCK:"true",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},O=function(e,{doNotParse:i=!1,autoUpdateDependencies:r=!1}={},s=new d){const a=r?[...e||[]]:e;let u=s.getAll({doNotParse:!0});const c=o(0),p=()=>{const e=s.getAll({doNotParse:!0});(function(e,t,n){if(!e)return!0;for(const o of e)if(t[o]!==n[o])return!0;return!1})(a||null,e,u)&&c.value++,u=e};var f;return s.addChangeListener(p),f=()=>{s.removeChangeListener(p)},t()&&n(f),{get:(...e)=>(r&&a&&!a.includes(e[0])&&a.push(e[0]),c.value,s.get(e[0],E({doNotParse:i},e[1]))),getAll:(...e)=>(c.value,s.getAll(E({doNotParse:i},e[0]))),set:(...e)=>s.set(...e),remove:(...e)=>s.remove(...e),addChangeListener:(...e)=>s.addChangeListener(...e),removeChangeListener:(...e)=>s.removeChangeListener(...e)}}().get(_),T=i({id:"app-user",state:()=>({token:O,info:{}}),getters:{getUserInfo(){return this.info||{}}},actions:{setInfo(e){this.info=e||""},login(t){return new Promise((n=>{e(t).then((e=>{const{result:t}=e;this.setInfo(t),n(t)}))}))}}});export{T as u};