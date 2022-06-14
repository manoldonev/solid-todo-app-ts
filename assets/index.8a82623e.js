import{p as D,o as B,w as z,D as tt,I as L,x as et,y as T,z as G,A as R,B as O,u as q,v as U,C as A,E as it,F as nt,M as F,L as rt,G as ot,H as V,J as st}from"./index.ca0abb14.js";import{d as at,u as ut,e as ht,f as lt}from"./index.4561f820.js";var Q={exports:{}},j={exports:{}},$={exports:{}};(function(h){(function(c,l){h.exports?h.exports=l():c.EvEmitter=l()})(typeof window<"u"?window:at,function(){function c(){}var l=c.prototype;return l.on=function(p,d){if(!(!p||!d)){var a=this._events=this._events||{},i=a[p]=a[p]||[];return i.indexOf(d)==-1&&i.push(d),this}},l.once=function(p,d){if(!(!p||!d)){this.on(p,d);var a=this._onceEvents=this._onceEvents||{},i=a[p]=a[p]||{};return i[d]=!0,this}},l.off=function(p,d){var a=this._events&&this._events[p];if(!(!a||!a.length)){var i=a.indexOf(d);return i!=-1&&a.splice(i,1),this}},l.emitEvent=function(p,d){var a=this._events&&this._events[p];if(!(!a||!a.length)){a=a.slice(0),d=d||[];for(var i=this._onceEvents&&this._onceEvents[p],n=0;n<a.length;n++){var r=a[n],g=i&&i[r];g&&(this.off(p,r),delete i[r]),r.apply(this,d)}return this}},l.allOff=function(){delete this._events,delete this._onceEvents},c})})($);var k={exports:{}};/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */(function(h){(function(c,l){h.exports?h.exports=l():c.getSize=l()})(window,function(){function l(o){var x=parseFloat(o),m=o.indexOf("%")==-1&&!isNaN(x);return m&&x}function p(){}var d=typeof console>"u"?p:function(o){console.error(o)},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],i=a.length;function n(){for(var o={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},x=0;x<i;x++){var m=a[x];o[m]=0}return o}function r(o){var x=getComputedStyle(o);return x||d("Style returned "+x+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),x}var g=!1,v;function f(){if(!g){g=!0;var o=document.createElement("div");o.style.width="200px",o.style.padding="1px 2px 3px 4px",o.style.borderStyle="solid",o.style.borderWidth="1px 2px 3px 4px",o.style.boxSizing="border-box";var x=document.body||document.documentElement;x.appendChild(o);var m=r(o);v=Math.round(l(m.width))==200,_.isBoxSizeOuter=v,x.removeChild(o)}}function _(o){if(f(),typeof o=="string"&&(o=document.querySelector(o)),!(!o||typeof o!="object"||!o.nodeType)){var x=r(o);if(x.display=="none")return n();var m={};m.width=o.offsetWidth,m.height=o.offsetHeight;for(var s=m.isBorderBox=x.boxSizing=="border-box",t=0;t<i;t++){var e=a[t],u=x[e],y=parseFloat(u);m[e]=isNaN(y)?0:y}var b=m.paddingLeft+m.paddingRight,E=m.paddingTop+m.paddingBottom,C=m.marginLeft+m.marginRight,I=m.marginTop+m.marginBottom,M=m.borderLeftWidth+m.borderRightWidth,W=m.borderTopWidth+m.borderBottomWidth,P=s&&v,w=l(x.width);w!==!1&&(m.width=w+(P?0:b+M));var N=l(x.height);return N!==!1&&(m.height=N+(P?0:E+W)),m.innerWidth=m.width-(b+M),m.innerHeight=m.height-(E+W),m.outerWidth=m.width+C,m.outerHeight=m.height+I,m}}return _})})(k);var X={exports:{}},Z={exports:{}};(function(h){(function(c,l){h.exports?h.exports=l():c.matchesSelector=l()})(window,function(){var l=function(){var p=window.Element.prototype;if(p.matches)return"matches";if(p.matchesSelector)return"matchesSelector";for(var d=["webkit","moz","ms","o"],a=0;a<d.length;a++){var i=d[a],n=i+"MatchesSelector";if(p[n])return n}}();return function(d,a){return d[l](a)}})})(Z);(function(h){(function(c,l){h.exports?h.exports=l(c,Z.exports):c.fizzyUIUtils=l(c,c.matchesSelector)})(window,function(l,p){var d={};d.extend=function(n,r){for(var g in r)n[g]=r[g];return n},d.modulo=function(n,r){return(n%r+r)%r};var a=Array.prototype.slice;d.makeArray=function(n){if(Array.isArray(n))return n;if(n==null)return[];var r=typeof n=="object"&&typeof n.length=="number";return r?a.call(n):[n]},d.removeFrom=function(n,r){var g=n.indexOf(r);g!=-1&&n.splice(g,1)},d.getParent=function(n,r){for(;n.parentNode&&n!=document.body;)if(n=n.parentNode,p(n,r))return n},d.getQueryElement=function(n){return typeof n=="string"?document.querySelector(n):n},d.handleEvent=function(n){var r="on"+n.type;this[r]&&this[r](n)},d.filterFindElements=function(n,r){n=d.makeArray(n);var g=[];return n.forEach(function(v){if(v instanceof HTMLElement){if(!r){g.push(v);return}p(v,r)&&g.push(v);for(var f=v.querySelectorAll(r),_=0;_<f.length;_++)g.push(f[_])}}),g},d.debounceMethod=function(n,r,g){g=g||100;var v=n.prototype[r],f=r+"Timeout";n.prototype[r]=function(){var _=this[f];clearTimeout(_);var o=arguments,x=this;this[f]=setTimeout(function(){v.apply(x,o),delete x[f]},g)}},d.docReady=function(n){var r=document.readyState;r=="complete"||r=="interactive"?setTimeout(n):document.addEventListener("DOMContentLoaded",n)},d.toDashed=function(n){return n.replace(/(.)([A-Z])/g,function(r,g,v){return g+"-"+v}).toLowerCase()};var i=l.console;return d.htmlInit=function(n,r){d.docReady(function(){var g=d.toDashed(r),v="data-"+g,f=document.querySelectorAll("["+v+"]"),_=document.querySelectorAll(".js-"+g),o=d.makeArray(f).concat(d.makeArray(_)),x=v+"-options",m=l.jQuery;o.forEach(function(s){var t=s.getAttribute(v)||s.getAttribute(x),e;try{e=t&&JSON.parse(t)}catch(y){i&&i.error("Error parsing "+v+" on "+s.className+": "+y);return}var u=new n(s,e);m&&m.data(s,r,u)})})},d})})(X);var J={exports:{}};(function(h){(function(c,l){h.exports?h.exports=l($.exports,k.exports):(c.Outlayer={},c.Outlayer.Item=l(c.EvEmitter,c.getSize))})(window,function(l,p){function d(s){for(var t in s)return!1;return t=null,!0}var a=document.documentElement.style,i=typeof a.transition=="string"?"transition":"WebkitTransition",n=typeof a.transform=="string"?"transform":"WebkitTransform",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[i],g={transform:n,transition:i,transitionDuration:i+"Duration",transitionProperty:i+"Property",transitionDelay:i+"Delay"};function v(s,t){!s||(this.element=s,this.layout=t,this.position={x:0,y:0},this._create())}var f=v.prototype=Object.create(l.prototype);f.constructor=v,f._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},f.handleEvent=function(s){var t="on"+s.type;this[t]&&this[t](s)},f.getSize=function(){this.size=p(this.element)},f.css=function(s){var t=this.element.style;for(var e in s){var u=g[e]||e;t[u]=s[e]}},f.getPosition=function(){var s=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),e=this.layout._getOption("originTop"),u=s[t?"left":"right"],y=s[e?"top":"bottom"],b=parseFloat(u),E=parseFloat(y),C=this.layout.size;u.indexOf("%")!=-1&&(b=b/100*C.width),y.indexOf("%")!=-1&&(E=E/100*C.height),b=isNaN(b)?0:b,E=isNaN(E)?0:E,b-=t?C.paddingLeft:C.paddingRight,E-=e?C.paddingTop:C.paddingBottom,this.position.x=b,this.position.y=E},f.layoutPosition=function(){var s=this.layout.size,t={},e=this.layout._getOption("originLeft"),u=this.layout._getOption("originTop"),y=e?"paddingLeft":"paddingRight",b=e?"left":"right",E=e?"right":"left",C=this.position.x+s[y];t[b]=this.getXValue(C),t[E]="";var I=u?"paddingTop":"paddingBottom",M=u?"top":"bottom",W=u?"bottom":"top",P=this.position.y+s[I];t[M]=this.getYValue(P),t[W]="",this.css(t),this.emitEvent("layout",[this])},f.getXValue=function(s){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?s/this.layout.size.width*100+"%":s+"px"},f.getYValue=function(s){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?s/this.layout.size.height*100+"%":s+"px"},f._transitionTo=function(s,t){this.getPosition();var e=this.position.x,u=this.position.y,y=s==this.position.x&&t==this.position.y;if(this.setPosition(s,t),y&&!this.isTransitioning){this.layoutPosition();return}var b=s-e,E=t-u,C={};C.transform=this.getTranslate(b,E),this.transition({to:C,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},f.getTranslate=function(s,t){var e=this.layout._getOption("originLeft"),u=this.layout._getOption("originTop");return s=e?s:-s,t=u?t:-t,"translate3d("+s+"px, "+t+"px, 0)"},f.goTo=function(s,t){this.setPosition(s,t),this.layoutPosition()},f.moveTo=f._transitionTo,f.setPosition=function(s,t){this.position.x=parseFloat(s),this.position.y=parseFloat(t)},f._nonTransition=function(s){this.css(s.to),s.isCleaning&&this._removeStyles(s.to);for(var t in s.onTransitionEnd)s.onTransitionEnd[t].call(this)},f.transition=function(s){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(s);return}var t=this._transn;for(var e in s.onTransitionEnd)t.onEnd[e]=s.onTransitionEnd[e];for(e in s.to)t.ingProperties[e]=!0,s.isCleaning&&(t.clean[e]=!0);s.from&&(this.css(s.from),this.element.offsetHeight),this.enableTransition(s.to),this.css(s.to),this.isTransitioning=!0};function _(s){return s.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var o="opacity,"+_(n);f.enableTransition=function(){if(!this.isTransitioning){var s=this.layout.options.transitionDuration;s=typeof s=="number"?s+"ms":s,this.css({transitionProperty:o,transitionDuration:s,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(r,this,!1)}},f.onwebkitTransitionEnd=function(s){this.ontransitionend(s)},f.onotransitionend=function(s){this.ontransitionend(s)};var x={"-webkit-transform":"transform"};f.ontransitionend=function(s){if(s.target===this.element){var t=this._transn,e=x[s.propertyName]||s.propertyName;if(delete t.ingProperties[e],d(t.ingProperties)&&this.disableTransition(),e in t.clean&&(this.element.style[s.propertyName]="",delete t.clean[e]),e in t.onEnd){var u=t.onEnd[e];u.call(this),delete t.onEnd[e]}this.emitEvent("transitionEnd",[this])}},f.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(r,this,!1),this.isTransitioning=!1},f._removeStyles=function(s){var t={};for(var e in s)t[e]="";this.css(t)};var m={transitionProperty:"",transitionDuration:"",transitionDelay:""};return f.removeTransitionStyles=function(){this.css(m)},f.stagger=function(s){s=isNaN(s)?0:s,this.staggerDelay=s+"ms"},f.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},f.remove=function(){if(!i||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}this.once("transitionEnd",function(){this.removeElem()}),this.hide()},f.reveal=function(){delete this.isHidden,this.css({display:""});var s=this.layout.options,t={},e=this.getHideRevealTransitionEndProperty("visibleStyle");t[e]=this.onRevealTransitionEnd,this.transition({from:s.hiddenStyle,to:s.visibleStyle,isCleaning:!0,onTransitionEnd:t})},f.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},f.getHideRevealTransitionEndProperty=function(s){var t=this.layout.options[s];if(t.opacity)return"opacity";for(var e in t)return e},f.hide=function(){this.isHidden=!0,this.css({display:""});var s=this.layout.options,t={},e=this.getHideRevealTransitionEndProperty("hiddenStyle");t[e]=this.onHideTransitionEnd,this.transition({from:s.visibleStyle,to:s.hiddenStyle,isCleaning:!0,onTransitionEnd:t})},f.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},f.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},v})})(J);/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */(function(h){(function(c,l){h.exports?h.exports=l(c,$.exports,k.exports,X.exports,J.exports):c.Outlayer=l(c,c.EvEmitter,c.getSize,c.fizzyUIUtils,c.Outlayer.Item)})(window,function(l,p,d,a,i){var n=l.console,r=l.jQuery,g=function(){},v=0,f={};function _(t,e){var u=a.getQueryElement(t);if(!u){n&&n.error("Bad element for "+this.constructor.namespace+": "+(u||t));return}this.element=u,r&&(this.$element=r(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e);var y=++v;this.element.outlayerGUID=y,f[y]=this,this._create();var b=this._getOption("initLayout");b&&this.layout()}_.namespace="outlayer",_.Item=i,_.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var o=_.prototype;a.extend(o,p.prototype),o.option=function(t){a.extend(this.options,t)},o._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&this.options[e]!==void 0?this.options[e]:this.options[t]},_.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},o._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),a.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},o.reloadItems=function(){this.items=this._itemize(this.element.children)},o._itemize=function(t){for(var e=this._filterFindItemElements(t),u=this.constructor.Item,y=[],b=0;b<e.length;b++){var E=e[b],C=new u(E,this);y.push(C)}return y},o._filterFindItemElements=function(t){return a.filterFindElements(t,this.options.itemSelector)},o.getItemElements=function(){return this.items.map(function(t){return t.element})},o.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=t!==void 0?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},o._init=o.layout,o._resetLayout=function(){this.getSize()},o.getSize=function(){this.size=d(this.element)},o._getMeasurement=function(t,e){var u=this.options[t],y;u?(typeof u=="string"?y=this.element.querySelector(u):u instanceof HTMLElement&&(y=u),this[t]=y?d(y)[e]:u):this[t]=0},o.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},o._getItemsForLayout=function(t){return t.filter(function(e){return!e.isIgnored})},o._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),!(!t||!t.length)){var u=[];t.forEach(function(y){var b=this._getItemLayoutPosition(y);b.item=y,b.isInstant=e||y.isLayoutInstant,u.push(b)},this),this._processLayoutQueue(u)}},o._getItemLayoutPosition=function(){return{x:0,y:0}},o._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(e,u){this._positionItem(e.item,e.x,e.y,e.isInstant,u)},this)},o.updateStagger=function(){var t=this.options.stagger;if(t==null){this.stagger=0;return}return this.stagger=s(t),this.stagger},o._positionItem=function(t,e,u,y,b){y?t.goTo(e,u):(t.stagger(b*this.stagger),t.moveTo(e,u))},o._postLayout=function(){this.resizeContainer()},o.resizeContainer=function(){var t=this._getOption("resizeContainer");if(!!t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},o._getContainerSize=g,o._setContainerMeasure=function(t,e){if(t!==void 0){var u=this.size;u.isBorderBox&&(t+=e?u.paddingLeft+u.paddingRight+u.borderLeftWidth+u.borderRightWidth:u.paddingBottom+u.paddingTop+u.borderTopWidth+u.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},o._emitCompleteOnItems=function(t,e){var u=this;function y(){u.dispatchEvent(t+"Complete",null,[e])}var b=e.length;if(!e||!b){y();return}var E=0;function C(){E++,E==b&&y()}e.forEach(function(I){I.once(t,C)})},o.dispatchEvent=function(t,e,u){var y=e?[e].concat(u):u;if(this.emitEvent(t,y),r)if(this.$element=this.$element||r(this.element),e){var b=r.Event(e);b.type=t,this.$element.trigger(b,u)}else this.$element.trigger(t,u)},o.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},o.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},o.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},o.unstamp=function(t){t=this._find(t),t&&t.forEach(function(e){a.removeFrom(this.stamps,e),this.unignore(e)},this)},o._find=function(t){if(!!t)return typeof t=="string"&&(t=this.element.querySelectorAll(t)),t=a.makeArray(t),t},o._manageStamps=function(){!this.stamps||!this.stamps.length||(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},o._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},o._manageStamp=g,o._getElementOffset=function(t){var e=t.getBoundingClientRect(),u=this._boundingRect,y=d(t),b={left:e.left-u.left-y.marginLeft,top:e.top-u.top-y.marginTop,right:u.right-e.right-y.marginRight,bottom:u.bottom-e.bottom-y.marginBottom};return b},o.handleEvent=a.handleEvent,o.bindResize=function(){l.addEventListener("resize",this),this.isResizeBound=!0},o.unbindResize=function(){l.removeEventListener("resize",this),this.isResizeBound=!1},o.onresize=function(){this.resize()},a.debounceMethod(_,"onresize",100),o.resize=function(){!this.isResizeBound||!this.needsResizeLayout()||this.layout()},o.needsResizeLayout=function(){var t=d(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},o.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},o.appended=function(t){var e=this.addItems(t);!e.length||(this.layoutItems(e,!0),this.reveal(e))},o.prepended=function(t){var e=this._itemize(t);if(!!e.length){var u=this.items.slice(0);this.items=e.concat(u),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(u)}},o.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),!(!t||!t.length)){var e=this.updateStagger();t.forEach(function(u,y){u.stagger(y*e),u.reveal()})}},o.hide=function(t){if(this._emitCompleteOnItems("hide",t),!(!t||!t.length)){var e=this.updateStagger();t.forEach(function(u,y){u.stagger(y*e),u.hide()})}},o.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},o.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},o.getItem=function(t){for(var e=0;e<this.items.length;e++){var u=this.items[e];if(u.element==t)return u}},o.getItems=function(t){t=a.makeArray(t);var e=[];return t.forEach(function(u){var y=this.getItem(u);y&&e.push(y)},this),e},o.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),!(!e||!e.length)&&e.forEach(function(u){u.remove(),a.removeFrom(this.items,u)},this)},o.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(u){u.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,r&&r.removeData(this.element,this.constructor.namespace)},_.data=function(t){t=a.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},_.create=function(t,e){var u=x(_);return u.defaults=a.extend({},_.defaults),a.extend(u.defaults,e),u.compatOptions=a.extend({},_.compatOptions),u.namespace=t,u.data=_.data,u.Item=x(i),a.htmlInit(u,t),r&&r.bridget&&r.bridget(t,u),u};function x(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}var m={ms:1,s:1e3};function s(t){if(typeof t=="number")return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),u=e&&e[1],y=e&&e[2];if(!u.length)return 0;u=parseFloat(u);var b=m[y]||1;return u*b}return _.Item=i,_})})(j);/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */(function(h){(function(c,l){h.exports?h.exports=l(j.exports,k.exports):c.Masonry=l(c.Outlayer,c.getSize)})(window,function(l,p){var d=l.create("masonry");d.compatOptions.fitWidth="isFitWidth";var a=d.prototype;return a._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var i=0;i<this.cols;i++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},a.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var i=this.items[0],n=i&&i.element;this.columnWidth=n&&p(n).outerWidth||this.containerWidth}var r=this.columnWidth+=this.gutter,g=this.containerWidth+this.gutter,v=g/r,f=r-g%r,_=f&&f<1?"round":"floor";v=Math[_](v),this.cols=Math.max(v,1)},a.getContainerWidth=function(){var i=this._getOption("fitWidth"),n=i?this.element.parentNode:this.element,r=p(n);this.containerWidth=r&&r.innerWidth},a._getItemLayoutPosition=function(i){i.getSize();var n=i.size.outerWidth%this.columnWidth,r=n&&n<1?"round":"ceil",g=Math[r](i.size.outerWidth/this.columnWidth);g=Math.min(g,this.cols);for(var v=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",f=this[v](g,i),_={x:this.columnWidth*f.col,y:f.y},o=f.y+i.size.outerHeight,x=g+f.col,m=f.col;m<x;m++)this.colYs[m]=o;return _},a._getTopColPosition=function(i){var n=this._getTopColGroup(i),r=Math.min.apply(Math,n);return{col:n.indexOf(r),y:r}},a._getTopColGroup=function(i){if(i<2)return this.colYs;for(var n=[],r=this.cols+1-i,g=0;g<r;g++)n[g]=this._getColGroupY(g,i);return n},a._getColGroupY=function(i,n){if(n<2)return this.colYs[i];var r=this.colYs.slice(i,i+n);return Math.max.apply(Math,r)},a._getHorizontalColPosition=function(i,n){var r=this.horizontalColIndex%this.cols,g=i>1&&r+i>this.cols;r=g?0:r;var v=n.size.outerWidth&&n.size.outerHeight;return this.horizontalColIndex=v?r+i:this.horizontalColIndex,{col:r,y:this._getColGroupY(r,i)}},a._manageStamp=function(i){var n=p(i),r=this._getElementOffset(i),g=this._getOption("originLeft"),v=g?r.left:r.right,f=v+n.outerWidth,_=Math.floor(v/this.columnWidth);_=Math.max(0,_);var o=Math.floor(f/this.columnWidth);o-=f%this.columnWidth?0:1,o=Math.min(this.cols-1,o);for(var x=this._getOption("originTop"),m=(x?r.top:r.bottom)+n.outerHeight,s=_;s<=o;s++)this.colYs[s]=Math.max(m,this.colYs[s])},a._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var i={height:this.maxY};return this._getOption("fitWidth")&&(i.width=this._getContainerFitWidth()),i},a._getContainerFitWidth=function(){for(var i=0,n=this.cols;--n&&this.colYs[n]===0;)i++;return(this.cols-i)*this.columnWidth-this.gutter},a.needsResizeLayout=function(){var i=this.containerWidth;return this.getContainerWidth(),i!=this.containerWidth},d})})(Q);var dt=Q.exports,S=h=>typeof h=="function"&&!h.length?h():h,ct=h=>Array.isArray(h)?h:[h];function ft(h,c,l){let p,d;const a=typeof window<"u"&&"MutationObserver"in window;typeof c=="function"?(p={},d=c):(p=c,d=l);const i=a?new MutationObserver(d):void 0,n=(v,f)=>{var _;return i?.observe(v,(_=S(f))!=null?_:p)},r=()=>{ct(S(h)).forEach(v=>{v instanceof Node?n(v,p):n(v[0],v[1])})},g=()=>i?.takeRecords().length&&i?.disconnect();return D(r),B(g),[n,{start:r,stop:g,instance:i,isSupported:a}]}var vt=h=>{var c,l,p=a=>{var i=!1,n=[],r=[],g=[];return a.forEach(v=>(v.addedNodes.length>0?v.previousSibling==null?n.push(...v.addedNodes):r.push(...v.addedNodes):v.removedNodes.length>0&&(g.push(...v.removedNodes),v.nextSibling!=null&&(i=!0)),!0)),i=i||n.length>0,{prepended:n,appended:r,removed:g,shouldReloadItems:i}},d=a=>{var i,n,{prepended:r,appended:g,shouldReloadItems:v}=p(a);if(g.length>0){var f,_;(f=(_=c).appended)===null||f===void 0||f.call(_,g)}if(r.length>0){var o,x;(o=(x=c).prepended)===null||o===void 0||o.call(x,r)}if(v){var m,s;(m=(s=c).reloadItems)===null||m===void 0||m.call(s)}(i=(n=c).layout)===null||i===void 0||i.call(n)};return D(()=>{c=new dt(l,h.options)}),B(()=>{var a,i;(a=(i=c).destroy)===null||a===void 0||a.call(i)}),ft(()=>l,{childList:!0},a=>d(a)),z(tt,{get component(){var a;return(a=h.elementType)!==null&&a!==void 0?a:"div"},get class(){return h.class},ref(a){var i=l;typeof i=="function"?i(a):l=a},get children(){return h.children}})},pt=h=>h*parseFloat(getComputedStyle(document.documentElement).fontSize);function gt(h){return L({a:{stroke:"none",viewBox:"0 0 24 24",fill:"none"},c:'<path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>'},h)}function mt(h){return L({a:{stroke:"none",viewBox:"0 0 24 24",fill:"none"},c:'<path d="M7 21C4.79086 21 3 19.2091 3 17V5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V17C11 19.2091 9.20914 21 7 21ZM7 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13H16.6569M11 7.34312L12.6569 5.68629C13.4379 4.90524 14.7042 4.90524 15.4853 5.68629L18.3137 8.51472C19.0948 9.29577 19.0948 10.5621 18.3137 11.3431L9.82843 19.8284M7 17H7.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>'},h)}function yt(h){return L({a:{stroke:"none",viewBox:"0 0 24 24",fill:"none"},c:'<path d="M9.17163 16.1716C10.7337 14.6095 13.2664 14.6095 14.8285 16.1716M9 10H9.01M15 10H15.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>'},h)}function _t(h){return L({a:{stroke:"none",viewBox:"0 0 24 24",fill:"none"},c:'<path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>'},h)}function xt(h){return L({a:{stroke:"none",viewBox:"0 0 24 24",fill:"none"},c:'<path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>'},h)}const bt=O('<div><button type="button" class="group" disabled aria-label="Set Reminder"></button><button type="button" class="group" disabled aria-label="Background Options"></button><button type="button" class="group" disabled aria-label="Edit Item"></button><button type="button" aria-label="Delete Item"></button></div>',10);var Et=h=>(()=>{var c=bt.cloneNode(!0),l=c.firstChild,p=l.nextSibling,d=p.nextSibling,a=d.nextSibling;return T(l,z(gt,{class:"h-6 w-6 p-1 group-disabled:text-on-primary-container/25"})),T(p,z(mt,{class:"h-6 w-6 p-1 group-disabled:text-on-primary-container/25"})),T(d,z(_t,{class:"h-6 w-6 p-1 group-disabled:text-on-primary-container/25"})),a.$$click=()=>h.onDelete(),T(a,z(xt,{class:"h-6 w-6 rounded-xl p-1 hover:border hover:border-secondary hover:bg-secondary-container hover:text-on-secondary-container"})),G(()=>{var i;return R(c,"flex justify-end gap-1 text-on-primary-container ".concat((i=h.class)!==null&&i!==void 0?i:""))}),c})();et(["click"]);var H;(function(h){h.Ascending="asc",h.Descending="desc"})(H||(H={}));var Ct=1,Y=10,zt="id",Tt=H.Descending,St=()=>{var h={page:Ct,limit:Y,sort:zt,direction:Tt},c=ut("page",h,{getNextPageParam:(l,p)=>l.todos==null||l.todos.length<Y?null:{page:p.length+1},keepPreviousData:!0});return c},K={all:["Todos.infinite"]},It=()=>{var h=q();return ht({onSuccess:function(){var c=U(function*(){return h.invalidateQueries(K.all)});function l(){return c.apply(this,arguments)}return l}()})},Lt=()=>{var h=q();return lt({onSuccess:function(){var c=U(function*(){return h.invalidateQueries(K.all)});function l(){return c.apply(this,arguments)}return l}()})};const Ot=O('<li class="group mb-3 w-full last:mb-20 xs:w-56 md:w-60"><div class="rounded-lg border border-outline bg-primary-container px-3 text-on-primary-container transition-colors"><h2></h2><label><input type="checkbox" class="mx-2 flex-initial accent-secondary"></label></div></li>',9);var Mt=h=>{var{mutate:c}=It(),{mutate:l}=Lt(),p=()=>{c({id:h.data.id,input:{done:!h.data.done}})},d=()=>{l({id:h.data.id})};return(()=>{var a=Ot.cloneNode(!0),i=a.firstChild,n=i.firstChild,r=n.nextSibling,g=r.firstChild;return T(n,()=>"Lorem Ipsum #".concat(h.data.id)),g.addEventListener("change",p),T(r,()=>h.data.task,null),T(i,z(Et,{class:"my-1 opacity-0 transition-opacity duration-500 group-focus-within:opacity-100 group-hover:opacity-100",onDelete:d}),null),G(v=>{var f="".concat(h.data.done?"text-on-primary-container/75 line-through":""),_=h.data.id,o="flex line-clamp-3 ".concat(h.data.done?"text-on-primary-container/75 line-through":""),x=h.data.id,m=h.data.done;return f!==v._v$&&R(n,v._v$=f),_!==v._v$2&&A(r,"for",v._v$2=_),o!==v._v$3&&R(r,v._v$3=o),x!==v._v$4&&A(g,"id",v._v$4=x),m!==v._v$5&&(g.checked=v._v$5=m),v},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),a})()},Wt=(h,c,l)=>{const p=new IntersectionObserver(c,l),d=r=>p.observe(S(r)),a=r=>p.unobserve(S(r)),i=()=>S(h).forEach(r=>d(r)),n=()=>p.disconnect();return D(i),B(n),[d,{remove:a,start:i,stop:n,instance:p}]},Pt=(h,c)=>{var l;const[p,d]=it((l=c?.initialValue)!=null?l:!1),[,{start:a,stop:i,instance:n}]=Wt(()=>[S(h)],([r])=>{!r||(d(r.isIntersecting),c?.once&&r.isIntersecting!==!!c?.initialValue&&i())},c);return[p,{start:a,stop:i,instance:n}]},kt="0px 0px 0px 0px",Rt=0,Ht=(h,c)=>{var l,p,d=c(),[a]=Pt(()=>h,{rootMargin:(l=d.rootMargin)!==null&&l!==void 0?l:kt,threshold:(p=d.threshold)!==null&&p!==void 0?p:Rt});nt(()=>{var i;a()&&!d.isLoading()&&((i=d.isDisabled)===null||i===void 0?void 0:i.call(d))===!1&&d.hasNextPage()&&d.fetchNextPage()})};const Dt=O('<div class="flex min-h-screen items-center justify-center pb-40 text-on-background"><div class="flex flex-col items-center"><span>No items available</span></div></div>',6);var Bt=()=>(()=>{var h=Dt.cloneNode(!0),c=h.firstChild,l=c.firstChild;return T(c,z(yt,{class:"h-40 w-40"}),l),h})();const $t=O('<div class="min-h-screen bg-background p-2.5 transition-colors"></div>',2),wt=O('<div><h2 class="text-on-background">Loading...</h2></div>',4);var Nt=()=>{var h=St(),c={gutter:pt(.75),stagger:"0.03s",horizontalOrder:!1};return(()=>{var l=$t.cloneNode(!0);return T(l,z(st,{get fallback(){return z(Bt,{})},get children(){return[z(F,{get when(){return h.isLoading},get children(){return z(rt,{class:"text-on-background"})}}),z(F,{get when(){return h.data!=null&&h.data.pages.length>0&&h.data.pages[0].todos!=null&&h.data.pages[0].todos.length>0},get children(){return[z(vt,{elementType:"ul",options:c,get children(){return z(ot,{get each(){return h.data.pages.flatMap(p=>p.todos)},children:p=>z(Mt,{data:p})})}}),V((()=>{var p=V(()=>h.hasNextPage===!0,!0);return()=>p()&&(()=>{var d=wt.cloneNode(!0);return Ht(d,()=>({isLoading:()=>h.isFetchingNextPage,isDisabled:()=>h.isError,hasNextPage:()=>{var a;return(a=h.hasNextPage)!==null&&a!==void 0?a:!1},fetchNextPage:h.fetchNextPage})),d})()})())]}})]}})),l})()},Vt=()=>z(Nt,{});export{Vt as Tasks};