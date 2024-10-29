(function(S,D){typeof exports=="object"&&typeof module<"u"?D(exports):typeof define=="function"&&define.amd?define(["exports"],D):D((S=typeof globalThis<"u"?globalThis:S||self).noUiSlider={})})(void 0,function(S){"use strict";function D(e){return typeof e=="object"&&typeof e.to=="function"}function F(e){e.parentElement.removeChild(e)}function X(e){return e!=null}function Pt(e){e.preventDefault()}function z(e){return typeof e=="number"&&!isNaN(e)&&isFinite(e)}function Ct(e,t,u){0<u&&(M(e,t),setTimeout(function(){rt(e,t)},u))}function Nt(e){return Math.max(Math.min(e,100),0)}function nt(e){return Array.isArray(e)?e:[e]}function $t(e){return e=(e=String(e)).split("."),1<e.length?e[1].length:0}function M(e,t){e.classList&&!/\s/.test(t)?e.classList.add(t):e.className+=" "+t}function rt(e,t){e.classList&&!/\s/.test(t)?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function Vt(e){var t=window.pageXOffset!==void 0,u=(e.compatMode||"")==="CSS1Compat";return{x:t?window.pageXOffset:(u?e.documentElement:e.body).scrollLeft,y:t?window.pageYOffset:(u?e.documentElement:e.body).scrollTop}}function ct(e,t){return 100/(t-e)}function pt(e,t,u){return 100*t/(e[u+1]-e[u])}function K(e,t){for(var u=1;e>=t[u];)u+=1;return u}function Gt(p,t,u){if(u>=p.slice(-1)[0])return 100;var m=K(u,p),a=p[m-1],f=p[m],p=t[m-1],m=t[m];return p+(u=u,pt(f=[a,f],f[0]<0?u+Math.abs(f[0]):u-f[0],0)/ct(p,m))}function Jt(e,t,u,a){if(a===100)return a;var f=K(a,e),p=e[f-1],m=e[f];return u?(m-p)/2<a-p?m:p:t[f-1]?e[f-1]+(e=a-e[f-1],f=t[f-1],Math.round(e/f)*f):a}S.PipsMode=void 0,(O=S.PipsMode||(S.PipsMode={})).Range="range",O.Steps="steps",O.Positions="positions",O.Count="count",O.Values="values",S.PipsType=void 0,(O=S.PipsType||(S.PipsType={}))[O.None=-1]="None",O[O.NoValue=0]="NoValue",O[O.LargeValue=1]="LargeValue",O[O.SmallValue=2]="SmallValue";var At=(T.prototype.getDistance=function(e){for(var t=[],u=0;u<this.xNumSteps.length-1;u++)t[u]=pt(this.xVal,e,u);return t},T.prototype.getAbsoluteDistance=function(e,t,u){var a=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[a+1];)a++;else e===this.xPct[this.xPct.length-1]&&(a=this.xPct.length-2);u||e!==this.xPct[a+1]||a++;for(var f,p=1,m=(t=t===null?[]:t)[a],V=0,U=0,C=0,N=u?(e-this.xPct[a])/(this.xPct[a+1]-this.xPct[a]):(this.xPct[a+1]-e)/(this.xPct[a+1]-this.xPct[a]);0<m;)f=this.xPct[a+1+C]-this.xPct[a+C],100<t[a+C]*p+100-100*N?(V=f*N,p=(m-100*N)/t[a+C],N=1):(V=t[a+C]*f/100*p,p=0),u?(U-=V,1<=this.xPct.length+C&&C--):(U+=V,1<=this.xPct.length-C&&C++),m=t[a+C]*p;return e+U},T.prototype.toStepping=function(e){return e=Gt(this.xVal,this.xPct,e)},T.prototype.fromStepping=function(e){return function(m,u,a){if(100<=a)return m.slice(-1)[0];var V=K(a,u),f=m[V-1],p=m[V],m=u[V-1],V=u[V];return(a-m)*ct(m,V)*((p=[f,p])[1]-p[0])/100+p[0]}(this.xVal,this.xPct,e)},T.prototype.getStep=function(e){return e=Jt(this.xPct,this.xSteps,this.snap,e)},T.prototype.getDefaultStep=function(e,t,u){var a=K(e,this.xPct);return(e===100||t&&e===this.xPct[a-1])&&(a=Math.max(a-1,1)),(this.xVal[a]-this.xVal[a-1])/u},T.prototype.getNearbySteps=function(e){return e=K(e,this.xPct),{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},T.prototype.countStepDecimals=function(){var e=this.xNumSteps.map($t);return Math.max.apply(null,e)},T.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},T.prototype.convert=function(e){return this.getStep(this.toStepping(e))},T.prototype.handleEntryPoint=function(e,t){if(e=e==="min"?0:e==="max"?100:parseFloat(e),!z(e)||!z(t[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(e),this.xVal.push(t[0]),t=Number(t[1]),e?this.xSteps.push(!isNaN(t)&&t):isNaN(t)||(this.xSteps[0]=t),this.xHighestCompleteStep.push(0)},T.prototype.handleStepPoint=function(e,t){t&&(this.xVal[e]!==this.xVal[e+1]?(this.xSteps[e]=pt([this.xVal[e],this.xVal[e+1]],t,0)/ct(this.xPct[e],this.xPct[e+1]),t=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],t=Math.ceil(Number(t.toFixed(3))-1),t=this.xVal[e]+this.xNumSteps[e]*t,this.xHighestCompleteStep[e]=t):this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e])},T);function T(e,t,u){var a;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[u||!1],this.xNumSteps=[!1],this.snap=t;var f=[];for(Object.keys(e).forEach(function(p){f.push([nt(e[p]),p])}),f.sort(function(p,m){return p[0][0]-m[0][0]}),a=0;a<f.length;a++)this.handleEntryPoint(f[a][1],f[a][0]);for(this.xNumSteps=this.xSteps.slice(0),a=0;a<this.xNumSteps.length;a++)this.handleStepPoint(a,this.xNumSteps[a])}var kt={to:function(e){return e===void 0?"":e.toFixed(2)},from:Number},dt={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},Y={tooltips:".__tooltips",aria:".__aria"};function Kt(e,t){if(!z(t))throw new Error("noUiSlider: 'step' is not numeric.");e.singleStep=t}function Qt(e,t){if(!z(t))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");e.keyboardPageMultiplier=t}function Zt(e,t){if(!z(t))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");e.keyboardMultiplier=t}function te(e,t){if(!z(t))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");e.keyboardDefaultStep=t}function ee(e,t){if(typeof t!="object"||Array.isArray(t))throw new Error("noUiSlider: 'range' is not an object.");if(t.min===void 0||t.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");e.spectrum=new At(t,e.snap||!1,e.singleStep)}function ne(e,t){if(t=nt(t),!Array.isArray(t)||!t.length)throw new Error("noUiSlider: 'start' option is incorrect.");e.handles=t.length,e.start=t}function re(e,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");e.snap=t}function ie(e,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");e.animate=t}function oe(e,t){if(typeof t!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");e.animationDuration=t}function Mt(e,t){var u,a=[!1];if(t==="lower"?t=[!0,!1]:t==="upper"&&(t=[!1,!0]),t===!0||t===!1){for(u=1;u<e.handles;u++)a.push(t);a.push(!1)}else{if(!Array.isArray(t)||!t.length||t.length!==e.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a=t}e.connect=a}function se(e,t){switch(t){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Ut(e,t){if(!z(t))throw new Error("noUiSlider: 'margin' option must be numeric.");t!==0&&(e.margin=e.spectrum.getDistance(t))}function ae(e,t){if(!z(t))throw new Error("noUiSlider: 'limit' option must be numeric.");if(e.limit=e.spectrum.getDistance(t),!e.limit||e.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function le(e,t){var u;if(!z(t)&&!Array.isArray(t))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(t)&&t.length!==2&&!z(t[0])&&!z(t[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(t!==0){for(Array.isArray(t)||(t=[t,t]),e.padding=[e.spectrum.getDistance(t[0]),e.spectrum.getDistance(t[1])],u=0;u<e.spectrum.xNumSteps.length-1;u++)if(e.padding[0][u]<0||e.padding[1][u]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var a=t[0]+t[1],t=e.spectrum.xVal[0];if(1<a/(e.spectrum.xVal[e.spectrum.xVal.length-1]-t))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function ue(e,t){switch(t){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function ce(e,N){if(typeof N!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var u=0<=N.indexOf("tap"),a=0<=N.indexOf("drag"),f=0<=N.indexOf("fixed"),p=0<=N.indexOf("snap"),m=0<=N.indexOf("hover"),V=0<=N.indexOf("unconstrained"),U=0<=N.indexOf("invert-connects"),C=0<=N.indexOf("drag-all"),N=0<=N.indexOf("smooth-steps");if(f){if(e.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Ut(e,e.start[1]-e.start[0])}if(U&&e.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(V&&(e.margin||e.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:u||p,drag:a,dragAll:C,smoothSteps:N,fixed:f,snap:p,hover:m,unconstrained:V,invertConnects:U}}function pe(e,t){if(t!==!1)if(t===!0||D(t)){e.tooltips=[];for(var u=0;u<e.handles;u++)e.tooltips.push(t)}else{if((t=nt(t)).length!==e.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");t.forEach(function(a){if(typeof a!="boolean"&&!D(a))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),e.tooltips=t}}function de(e,t){if(t.length!==e.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");e.handleAttributes=t}function he(e,t){if(!D(t))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");e.ariaFormat=t}function me(e,t){if(!D(u=t)||typeof u.from!="function")throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var u;e.format=t}function fe(e,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");e.keyboardSupport=t}function ge(e,t){e.documentElement=t}function ve(e,t){if(typeof t!="string"&&t!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");e.cssPrefix=t}function be(e,t){if(typeof t!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof e.cssPrefix=="string"?(e.cssClasses={},Object.keys(t).forEach(function(u){e.cssClasses[u]=e.cssPrefix+t[u]})):e.cssClasses=t}function Dt(e){var t={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:kt,format:kt},u={step:{r:!1,t:Kt},keyboardPageMultiplier:{r:!1,t:Qt},keyboardMultiplier:{r:!1,t:Zt},keyboardDefaultStep:{r:!1,t:te},start:{r:!0,t:ne},connect:{r:!0,t:Mt},direction:{r:!0,t:ue},snap:{r:!1,t:re},animate:{r:!1,t:ie},animationDuration:{r:!1,t:oe},range:{r:!0,t:ee},orientation:{r:!1,t:se},margin:{r:!1,t:Ut},limit:{r:!1,t:ae},padding:{r:!1,t:le},behaviour:{r:!0,t:ce},ariaFormat:{r:!1,t:he},format:{r:!1,t:me},tooltips:{r:!1,t:pe},keyboardSupport:{r:!0,t:fe},documentElement:{r:!1,t:ge},cssPrefix:{r:!0,t:ve},cssClasses:{r:!0,t:be},handleAttributes:{r:!1,t:de}},a={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:dt,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(u).forEach(function(m){if(X(e[m])||a[m]!==void 0)u[m].t(t,(X(e[m])?e:a)[m]);else if(u[m].r)throw new Error("noUiSlider: '"+m+"' is required.")}),t.pips=e.pips;var p=document.createElement("div"),f=p.style.msTransform!==void 0,p=p.style.transform!==void 0;return t.transformRule=p?"transform":f?"msTransform":"webkitTransform",t.style=[["left","top"],["right","bottom"]][t.dir][t.ort],t}function Se(e,t,u){var a,f,p,m,V,U,C=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},N=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var n=!1;try{var r=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,r)}catch{}return n}(),k=e,y=t.spectrum,R=[],E=[],L=[],ht=0,_={},Q=!1,G=e.ownerDocument,it=t.documentElement||G.documentElement,ot=G.body,xe=G.dir==="rtl"||t.ort===1?0:100;function q(n,r){var i=G.createElement("div");return r&&M(i,r),n.appendChild(i),i}function ye(o,r){var i,o=q(o,t.cssClasses.origin),s=q(o,t.cssClasses.handle);return q(s,t.cssClasses.touchArea),s.setAttribute("data-handle",String(r)),t.keyboardSupport&&(s.setAttribute("tabindex","0"),s.addEventListener("keydown",function(l){return function(x,c){if(Lt()||ft(c))return!1;var A=["Left","Right"],b=["Down","Up"],g=["PageDown","PageUp"],j=["Home","End"];t.dir&&!t.ort?A.reverse():t.ort&&!t.dir&&(b.reverse(),g.reverse());var d=x.key.replace("Arrow",""),h=d===g[0],v=d===g[1],g=d===b[0]||d===A[0]||h,b=d===b[1]||d===A[1]||v,A=d===j[0],j=d===j[1];if(!(g||b||A||j))return!0;if(x.preventDefault(),b||g){var w=g?0:1,w=Xt(c)[w];if(w===null)return!1;w===!1&&(w=y.getDefaultStep(E[c],g,t.keyboardDefaultStep)),w*=v||h?t.keyboardPageMultiplier:t.keyboardMultiplier,w=Math.max(w,1e-7),w*=g?-1:1,w=R[c]+w}else w=j?t.spectrum.xVal[t.spectrum.xVal.length-1]:t.spectrum.xVal[0];return W(c,y.toStepping(w),!0,!0),P("slide",c),P("update",c),P("change",c),P("set",c),!1}(l,r)})),t.handleAttributes!==void 0&&(i=t.handleAttributes[r],Object.keys(i).forEach(function(l){s.setAttribute(l,i[l])})),s.setAttribute("role","slider"),s.setAttribute("aria-orientation",t.ort?"vertical":"horizontal"),r===0?M(s,t.cssClasses.handleLower):r===t.handles-1&&M(s,t.cssClasses.handleUpper),o.handle=s,o}function mt(n,r){return!!r&&q(n,t.cssClasses.connect)}function we(n,r){return!(!t.tooltips||!t.tooltips[r])&&q(n.firstChild,t.cssClasses.tooltip)}function Lt(){return k.hasAttribute("disabled")}function ft(n){return p[n].hasAttribute("disabled")}function gt(){U&&(Z("update"+Y.tooltips),U.forEach(function(n){n&&F(n)}),U=null)}function Tt(){gt(),U=p.map(we),yt("update"+Y.tooltips,function(n,r,i){U&&t.tooltips&&U[r]!==!1&&(n=n[r],t.tooltips[r]!==!0&&(n=t.tooltips[r].to(i[r])),U[r].innerHTML=n)})}function jt(n,r){return n.map(function(i){return y.fromStepping(r?y.getStep(i):i)})}function Ee(n){var r=function(d){if(d.mode===S.PipsMode.Range||d.mode===S.PipsMode.Steps)return y.xVal;if(d.mode!==S.PipsMode.Count)return d.mode===S.PipsMode.Positions?jt(d.values,d.stepped):d.mode===S.PipsMode.Values?d.stepped?d.values.map(function(b){return y.fromStepping(y.getStep(y.toStepping(b)))}):d.values:[];if(d.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var h=d.values-1,v=100/h,g=[];h--;)g[h]=h*v;return g.push(100),jt(g,d.stepped)}(n),i={},o=y.xVal[0],s=y.xVal[y.xVal.length-1],l=!1,x=!1,c=0;return(r=r.slice().sort(function(d,h){return d-h}).filter(function(d){return!this[d]&&(this[d]=!0)},{}))[0]!==o&&(r.unshift(o),l=!0),r[r.length-1]!==s&&(r.push(s),x=!0),r.forEach(function(H,h){var v,g,b,A,j,w,$,B,H=H,J=r[h+1],It=n.mode===S.PipsMode.Steps,et=(et=It?y.xNumSteps[h]:et)||J-H;for(J===void 0&&(J=H),et=Math.max(et,1e-7),v=H;v<=J;v=Number((v+et).toFixed(7))){for(w=(A=(b=y.toStepping(v))-c)/(n.density||1),B=A/($=Math.round(w)),g=1;g<=$;g+=1)i[(j=c+g*B).toFixed(5)]=[y.fromStepping(j),0];w=-1<r.indexOf(v)?S.PipsType.LargeValue:It?S.PipsType.SmallValue:S.PipsType.NoValue,!h&&l&&v!==J&&(w=0),v===J&&x||(i[b.toFixed(5)]=[v,w]),c=b}}),i}function Pe(n,r,i){var o,s=G.createElement("div"),l=((o={})[S.PipsType.None]="",o[S.PipsType.NoValue]=t.cssClasses.valueNormal,o[S.PipsType.LargeValue]=t.cssClasses.valueLarge,o[S.PipsType.SmallValue]=t.cssClasses.valueSub,o),x=((o={})[S.PipsType.None]="",o[S.PipsType.NoValue]=t.cssClasses.markerNormal,o[S.PipsType.LargeValue]=t.cssClasses.markerLarge,o[S.PipsType.SmallValue]=t.cssClasses.markerSub,o),c=[t.cssClasses.valueHorizontal,t.cssClasses.valueVertical],d=[t.cssClasses.markerHorizontal,t.cssClasses.markerVertical];function h(v,g){var b=g===t.cssClasses.value;return g+" "+(b?c:d)[t.ort]+" "+(b?l:x)[v]}return M(s,t.cssClasses.pips),M(s,t.ort===0?t.cssClasses.pipsHorizontal:t.cssClasses.pipsVertical),Object.keys(n).forEach(function(v){var g,b,A;b=n[g=v][0],A=n[v][1],(A=r?r(b,A):A)!==S.PipsType.None&&((v=q(s,!1)).className=h(A,t.cssClasses.marker),v.style[t.style]=g+"%",A>S.PipsType.NoValue&&((v=q(s,!1)).className=h(A,t.cssClasses.value),v.setAttribute("data-value",String(b)),v.style[t.style]=g+"%",v.innerHTML=String(i.to(b))))}),s}function vt(){V&&(F(V),V=null)}function bt(o){vt();var r=Ee(o),i=o.filter,o=o.format||{to:function(s){return String(Math.round(s))}};return V=k.appendChild(Pe(r,i,o))}function zt(){var n=a.getBoundingClientRect(),r="offset"+["Width","Height"][t.ort];return t.ort===0?n.width||a[r]:n.height||a[r]}function I(n,r,i,o){function s(x){var c,d=function(h,v,g){var b=h.type.indexOf("touch")===0,A=h.type.indexOf("mouse")===0,j=h.type.indexOf("pointer")===0,w=0,$=0;if(h.type.indexOf("MSPointer")===0&&(j=!0),h.type==="mousedown"&&!h.buttons&&!h.touches)return!1;if(b){var B=function(H){return H=H.target,H===g||g.contains(H)||h.composed&&h.composedPath().shift()===g};if(h.type==="touchstart"){if(b=Array.prototype.filter.call(h.touches,B),1<b.length)return!1;w=b[0].pageX,$=b[0].pageY}else{if(B=Array.prototype.find.call(h.changedTouches,B),!B)return!1;w=B.pageX,$=B.pageY}}return v=v||Vt(G),(A||j)&&(w=h.clientX+v.x,$=h.clientY+v.y),h.pageOffset=v,h.points=[w,$],h.cursor=A||j,h}(x,o.pageOffset,o.target||r);return!!d&&!(Lt()&&!o.doNotReject)&&(c=k,x=t.cssClasses.tap,!((c.classList?c.classList.contains(x):new RegExp("\\b"+x+"\\b").test(c.className))&&!o.doNotReject)&&!(n===C.start&&d.buttons!==void 0&&1<d.buttons)&&(!o.hover||!d.buttons)&&(N||d.preventDefault(),d.calcPoint=d.points[t.ort],void i(d,o)))}var l=[];return n.split(" ").forEach(function(x){r.addEventListener(x,s,!!N&&{passive:!0}),l.push([x,s])}),l}function Ht(n){var r,i,o=Nt(o=100*(n-(o=a,r=t.ort,i=o.getBoundingClientRect(),o=(n=o.ownerDocument).documentElement,n=Vt(n),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(n.x=0),r?i.top+n.y-o.clientTop:i.left+n.x-o.clientLeft))/zt());return t.dir?100-o:o}function Ce(n,r){n.type==="mouseout"&&n.target.nodeName==="HTML"&&n.relatedTarget===null&&St(n,r)}function Ne(n,r){if(navigator.appVersion.indexOf("MSIE 9")===-1&&n.buttons===0&&r.buttonsProperty!==0)return St(n,r);n=(t.dir?-1:1)*(n.calcPoint-r.startCalcPoint),Rt(0<n,100*n/r.baseSize,r.locations,r.handleNumbers,r.connect)}function St(n,r){r.handle&&(rt(r.handle,t.cssClasses.active),--ht),r.listeners.forEach(function(i){it.removeEventListener(i[0],i[1])}),ht===0&&(rt(k,t.cssClasses.drag),Et(),n.cursor&&(ot.style.cursor="",ot.removeEventListener("selectstart",Pt))),t.events.smoothSteps&&(r.handleNumbers.forEach(function(i){W(i,E[i],!0,!0,!1,!1)}),r.handleNumbers.forEach(function(i){P("update",i)})),r.handleNumbers.forEach(function(i){P("change",i),P("set",i),P("end",i)})}function xt(n,r){var i,o,s,l;r.handleNumbers.some(ft)||(r.handleNumbers.length===1&&(l=p[r.handleNumbers[0]].children[0],ht+=1,M(l,t.cssClasses.active)),n.stopPropagation(),o=I(C.move,it,Ne,{target:n.target,handle:l,connect:r.connect,listeners:i=[],startCalcPoint:n.calcPoint,baseSize:zt(),pageOffset:n.pageOffset,handleNumbers:r.handleNumbers,buttonsProperty:n.buttons,locations:E.slice()}),s=I(C.end,it,St,{target:n.target,handle:l,listeners:i,doNotReject:!0,handleNumbers:r.handleNumbers}),l=I("mouseout",it,Ce,{target:n.target,handle:l,listeners:i,doNotReject:!0,handleNumbers:r.handleNumbers}),i.push.apply(i,o.concat(s,l)),n.cursor&&(ot.style.cursor=getComputedStyle(n.target).cursor,1<p.length&&M(k,t.cssClasses.drag),ot.addEventListener("selectstart",Pt,!1)),r.handleNumbers.forEach(function(x){P("start",x)}))}function Ve(n){n.stopPropagation();var r,i,o,s=Ht(n.calcPoint),l=(r=s,o=!(i=100),p.forEach(function(x,c){var d,h;ft(c)||(d=E[c],((h=Math.abs(d-r))<i||h<=i&&d<r||h===100&&i===100)&&(o=c,i=h))}),o);l!==!1&&(t.events.snap||Ct(k,t.cssClasses.tap,t.animationDuration),W(l,s,!0,!0),Et(),P("slide",l,!0),P("update",l,!0),t.events.snap?xt(n,{handleNumbers:[l]}):(P("change",l,!0),P("set",l,!0)))}function Ae(r){var r=Ht(r.calcPoint),r=y.getStep(r),i=y.fromStepping(r);Object.keys(_).forEach(function(o){o.split(".")[0]==="hover"&&_[o].forEach(function(s){s.call(lt,i)})})}function Ft(n){n.fixed||p.forEach(function(r,i){I(C.start,r.children[0],xt,{handleNumbers:[i]})}),n.tap&&I(C.start,a,Ve,{}),n.hover&&I(C.move,a,Ae,{hover:!0}),n.drag&&m.forEach(function(r,i){var o,s,l,x,c;r!==!1&&i!==0&&i!==m.length-1&&(o=p[i-1],s=p[i],l=[r],x=[o,s],c=[i-1,i],M(r,t.cssClasses.draggable),n.fixed&&(l.push(o.children[0]),l.push(s.children[0])),n.dragAll&&(x=p,c=L),l.forEach(function(d){I(C.start,d,xt,{handles:x,handleNumbers:c,connect:r})}))})}function yt(n,r){_[n]=_[n]||[],_[n].push(r),n.split(".")[0]==="update"&&p.forEach(function(i,o){P("update",o)})}function Z(n){var r=n&&n.split(".")[0],i=r?n.substring(r.length):n;Object.keys(_).forEach(function(o){var s=o.split(".")[0],l=o.substring(s.length);r&&r!==s||i&&i!==l||((s=l)!==Y.aria&&s!==Y.tooltips||i===l)&&delete _[o]})}function P(n,r,i){Object.keys(_).forEach(function(o){var s=o.split(".")[0];n===s&&_[o].forEach(function(l){l.call(lt,R.map(t.format.to),r,R.slice(),i||!1,E.slice(),lt)})})}function st(n,r,i,o,s,l,x){var c;return 1<p.length&&!t.events.unconstrained&&(o&&0<r&&(c=y.getAbsoluteDistance(n[r-1],t.margin,!1),i=Math.max(i,c)),s&&r<p.length-1&&(c=y.getAbsoluteDistance(n[r+1],t.margin,!0),i=Math.min(i,c))),1<p.length&&t.limit&&(o&&0<r&&(c=y.getAbsoluteDistance(n[r-1],t.limit,!1),i=Math.min(i,c)),s&&r<p.length-1&&(c=y.getAbsoluteDistance(n[r+1],t.limit,!0),i=Math.max(i,c))),t.padding&&(r===0&&(c=y.getAbsoluteDistance(0,t.padding[0],!1),i=Math.max(i,c)),r===p.length-1&&(c=y.getAbsoluteDistance(100,t.padding[1],!0),i=Math.min(i,c))),!((i=Nt(i=x?i:y.getStep(i)))===n[r]&&!l)&&i}function wt(n,r){var i=t.ort;return(i?r:n)+", "+(i?n:r)}function Rt(n,r,i,o,s){var l=i.slice(),x=o[0],c=t.events.smoothSteps,d=[!n,n],h=[n,!n];o=o.slice(),n&&o.reverse(),1<o.length?o.forEach(function(g,b){b=st(l,g,l[g]+r,d[b],h[b],!1,c),b===!1?r=0:(r=b-l[g],l[g]=b)}):d=h=[!0];var v=!1;o.forEach(function(g,b){v=W(g,i[g]+r,d[b],h[b],!1,c)||v}),v&&(o.forEach(function(g){P("update",g),P("slide",g)}),s!=null&&P("drag",x))}function _t(n,r){return t.dir?100-n-r:n}function ke(n,r){if(E[n]=r,R[n]=y.fromStepping(r),r="translate("+wt(_t(r,0)-xe+"%","0")+")",p[n].style[t.transformRule]=r,t.events.invertConnects&&1<E.length&&(r=E.every(function(i,o,s){return o===0||i>=s[o-1]}),Q!==!r))return Q=!Q,Mt(t,t.connect.map(function(i){return!i})),void Yt();tt(n),tt(n+1),Q&&(tt(n-1),tt(n+2))}function Et(){L.forEach(function(n){var r=50<E[n]?-1:1,r=3+(p.length+r*n);p[n].style.zIndex=String(r)})}function W(n,r,i,o,s,l){return(r=s?r:st(E,n,r,i,o,!1,l))!==!1&&(ke(n,r),!0)}function tt(n){var r,i,o;m[n]&&(r=E.slice(),Q&&r.sort(function(s,l){return s-l}),o=100,i="translate("+wt(_t(i=(i=0)!==n?r[n-1]:i,o=(o=n!==m.length-1?r[n]:o)-i)+"%","0")+")",o="scale("+wt(o/100,"1")+")",m[n].style[t.transformRule]=i+" "+o)}function qt(n,r){return n===null||n===!1||n===void 0?E[r]:(typeof n=="number"&&(n=String(n)),(n=(n=t.format.from(n))!==!1?y.toStepping(n):n)===!1||isNaN(n)?E[r]:n)}function at(s,r,i){var o=nt(s),s=E[0]===void 0;r=r===void 0||r,t.animate&&!s&&Ct(k,t.cssClasses.tap,t.animationDuration),L.forEach(function(c){W(c,qt(o[c],c),!0,!1,i)});var l,x=L.length===1?0:1;for(s&&y.hasNoSize()&&(i=!0,E[0]=0,1<L.length&&(l=100/(L.length-1),L.forEach(function(c){E[c]=c*l})));x<L.length;++x)L.forEach(function(c){W(c,E[c],!0,!0,i)});Et(),L.forEach(function(c){P("update",c),o[c]!==null&&r&&P("set",c)})}function Bt(n){return(n=n===void 0?!1:n)?R.length===1?R[0]:R.slice(0):(n=R.map(t.format.to),n.length===1?n[0]:n)}function Xt(l){var r=E[l],i=y.getNearbySteps(r),o=R[l],s=i.thisStep.step,l=null;return t.snap?[o-i.stepBefore.startValue||null,i.stepAfter.startValue-o||null]:(s!==!1&&o+s>i.stepAfter.startValue&&(s=i.stepAfter.startValue-o),l=o>i.thisStep.startValue?i.thisStep.step:i.stepBefore.step!==!1&&o-i.stepBefore.highestStep,r===100?s=null:r===0&&(l=null),r=y.countStepDecimals(),s!==null&&s!==!1&&(s=Number(s.toFixed(r))),[l=l!==null&&l!==!1?Number(l.toFixed(r)):l,s])}function Yt(){for(;f.firstChild;)f.removeChild(f.firstChild);for(var n=0;n<=t.handles;n++)m[n]=mt(f,t.connect[n]),tt(n);Ft({drag:t.events.drag,fixed:!0})}M(e=k,t.cssClasses.target),t.dir===0?M(e,t.cssClasses.ltr):M(e,t.cssClasses.rtl),t.ort===0?M(e,t.cssClasses.horizontal):M(e,t.cssClasses.vertical),M(e,getComputedStyle(e).direction==="rtl"?t.cssClasses.textDirectionRtl:t.cssClasses.textDirectionLtr),a=q(e,t.cssClasses.base),function(n,r){f=q(r,t.cssClasses.connects),p=[],(m=[]).push(mt(f,n[0]));for(var i=0;i<t.handles;i++)p.push(ye(r,i)),L[i]=i,m.push(mt(f,n[i+1]))}(t.connect,a),Ft(t.events),at(t.start),t.pips&&bt(t.pips),t.tooltips&&Tt(),Z("update"+Y.aria),yt("update"+Y.aria,function(n,r,i,o,s){L.forEach(function(c){var x=p[c],d=st(E,c,0,!0,!0,!0),h=st(E,c,100,!0,!0,!0),v=s[c],c=String(t.ariaFormat.to(i[c])),d=y.fromStepping(d).toFixed(1),h=y.fromStepping(h).toFixed(1),v=y.fromStepping(v).toFixed(1);x.children[0].setAttribute("aria-valuemin",d),x.children[0].setAttribute("aria-valuemax",h),x.children[0].setAttribute("aria-valuenow",v),x.children[0].setAttribute("aria-valuetext",c)})});var lt={destroy:function(){for(Z(Y.aria),Z(Y.tooltips),Object.keys(t.cssClasses).forEach(function(n){rt(k,t.cssClasses[n])});k.firstChild;)k.removeChild(k.firstChild);delete k.noUiSlider},steps:function(){return L.map(Xt)},on:yt,off:Z,get:Bt,set:at,setHandle:function(n,r,i,o){if(!(0<=(n=Number(n))&&n<L.length))throw new Error("noUiSlider: invalid handle number, got: "+n);W(n,qt(r,n),!0,!0,o),P("update",n),i&&P("set",n)},reset:function(n){at(t.start,n)},disable:function(n){n!=null?(p[n].setAttribute("disabled",""),p[n].handle.removeAttribute("tabindex")):(k.setAttribute("disabled",""),p.forEach(function(r){r.handle.removeAttribute("tabindex")}))},enable:function(n){n!=null?(p[n].removeAttribute("disabled"),p[n].handle.setAttribute("tabindex","0")):(k.removeAttribute("disabled"),p.forEach(function(r){r.removeAttribute("disabled"),r.handle.setAttribute("tabindex","0")}))},__moveHandles:function(n,r,i){Rt(n,r,E,i)},options:u,updateOptions:function(n,r){var i=Bt(),o=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];o.forEach(function(l){n[l]!==void 0&&(u[l]=n[l])});var s=Dt(u);o.forEach(function(l){n[l]!==void 0&&(t[l]=s[l])}),y=s.spectrum,t.margin=s.margin,t.limit=s.limit,t.padding=s.padding,t.pips?bt(t.pips):vt(),(t.tooltips?Tt:gt)(),E=[],at(X(n.start)?n.start:i,r),n.connect&&Yt()},target:k,removePips:vt,removeTooltips:gt,getPositions:function(){return E.slice()},getTooltips:function(){return U},getOrigins:function(){return p},pips:bt};return lt}function Ot(e,t){if(!e||!e.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");return t=Se(e,Dt(t),t),e.noUiSlider=t}var O={__spectrum:At,cssClasses:dt,create:Ot};S.create=Ot,S.cssClasses=dt,S.default=O,Object.defineProperty(S,"__esModule",{value:!0})});var ut=document.querySelector(".price__range-slider"),Me=document.querySelector(".price__field--low"),Ue=document.querySelector(".price__field--high"),Wt=[Me,Ue],Oe=()=>{if(ut){noUiSlider.create(ut,{start:[0,1e3],connect:!0,step:1,range:{min:0,max:1e3},cssPrefix:"noui-"}),ut.noUiSlider.on("update",(D,F)=>{Wt[F].value=Math.round(D[F])});let S=(D,F)=>{let X=[null,null];X[D]=F,ut.noUiSlider.set(X)};Wt.forEach((D,F)=>{D.addEventListener("change",X=>{S(F,X.currentTarget.value)})})}};export{Oe as setupSlider};
