!function(e,t,n){"use strict";function r(n){if(l=t.documentElement,p=t.body,W(),Te=this,n=n||{},Pe=n.constants||{},n.easing)for(var r in n.easing)j[r]=n.easing[r];ze=n.edgeStrategy||"set",we={beforerender:n.beforerender,render:n.render,keyframe:n.keyframe},Se=n.forceHeight!==!1,Se&&(Ne=n.scale||1),xe=n.mobileDeceleration||w,Ve=n.smoothScrolling!==!1,Le=n.smoothScrollingDuration||k,He={targetTop:Te.getScrollTop()},qe=(n.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),qe?(be=t.getElementById(n.skrollrBody||S),be&&se(),X(),ve(l,[_,T],[E])):ve(l,[_,y],[E]),Te.refresh(),le(e,"resize orientationchange",function(){var e=l.clientWidth,t=l.clientHeight;(t!==Be||e!==$e)&&(Be=t,$e=e,Fe=!0)});var o=Y();return function a(){Z(),Ye=o(a)}(),Te}var o={get:function(){return Te},init:function(e){return Te||new r(e)},VERSION:"0.6.29"},a=Object.prototype.hasOwnProperty,i=e.Math,s=e.getComputedStyle,l,p,f="touchstart",c="touchmove",m="touchcancel",u="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",_="skrollr",E="no-"+_,y=_+"-desktop",T=_+"-mobile",C="linear",b=1e3,w=.004,S="skrollr-body",k=200,N="start",P="end",x="center",I="bottom",A="___skrollable_id",O=/^(?:input|textarea|button|select)$/i,B=/^\s+|\s+$/g,F=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,M=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,L=/-([a-z0-9_])/g,H=function(e,t){return t.toUpperCase()},R=/[\-+]?[\d]*\.?[\d]+/g,D=/\{\?\}/g,z=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,q=/[a-z\-]+-gradient/g,K="",G="",W=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(s){var t=s(p,null);for(var n in t)if(K=n.match(e)||+n==n&&t[n].match(e))break;if(!K)return void(K=G="");K=K[0],"-"===K.slice(0,1)?(G=K,K={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[K]):G="-"+K.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[K.toLowerCase()+"RequestAnimationFrame"],n=Ee();return(qe||!t)&&(t=function(t){var r=Ee()-n,o=i.max(0,1e3/60-r);return e.setTimeout(function(){n=Ee(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[K.toLowerCase()+"CancelAnimationFrame"];return(qe||!t)&&(t=function(t){return e.clearTimeout(t)}),t},j={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-i.cos(e*i.PI)/2+.5},sqrt:function(e){return i.sqrt(e)},outCubic:function(e){return i.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-i.abs(3*i.cos(e*t*1.028)/t)}};r.prototype.refresh=function(e){var r,o,a=!1;for(e===n?(a=!0,Ce=[],De=0,e=t.getElementsByTagName("*")):e.length===n&&(e=[e]),r=0,o=e.length;o>r;r++){var i=e[r],s=i,l=[],p=Ve,f=ze,c=!1;if(a&&A in i&&delete i[A],i.attributes){for(var m=0,u=i.attributes.length;u>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(F);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(L,H)};l.push(h);var _=v[1];_&&(h.constant=_.substr(1));var E=v[2];/p$/.test(E)?(h.isPercentage=!0,h.offset=(0|E.slice(0,-1))/100):h.offset=0|E;var y=v[3],T=v[4]||y;y&&y!==N&&y!==P?(h.mode="relative",h.anchors=[y,T]):(h.mode="absolute",y===P?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Ne))}}else c=!0;else f=g.value;else p="off"!==g.value;else if(s=t.querySelector(g.value),null===s)throw'Unable to find anchor target "'+g.value+'"'}if(l.length){var C,b,w;!a&&A in i?(w=i[A],C=Ce[w].styleAttr,b=Ce[w].classAttr):(w=i[A]=De++,C=i.style.cssText,b=ge(i)),Ce[w]={element:i,styleAttr:C,classAttr:b,anchorTarget:s,keyFrames:l,smoothScrolling:p,edgeStrategy:f,emitEvents:c,lastFrameIndex:-1},ve(i,[d],[])}}}for(me(),r=0,o=e.length;o>r;r++){var S=Ce[e[r][A]];S!==n&&(ee(S),ne(S))}return Te},r.prototype.relativeToAbsolute=function(e,t,n){var r=l.clientHeight,o=e.getBoundingClientRect(),a=o.top,i=o.bottom-o.top;return t===I?a-=r:t===x&&(a-=r/2),n===I?a+=i:n===x&&(a+=i/2),a+=Te.getScrollTop(),a+.5|0},r.prototype.animateTo=function(e,t){t=t||{};var r=Ee(),o=Te.getScrollTop();return Me={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||b,startTime:r,endTime:r+(t.duration||b),easing:j[t.easing||C],done:t.done},Me.topDiff||(Me.done&&Me.done.call(Te,!1),Me=n),Te},r.prototype.stopAnimateTo=function(){Me&&Me.done&&Me.done.call(Te,!0),Me=n},r.prototype.isAnimatingTo=function(){return!!Me},r.prototype.isMobile=function(){return qe},r.prototype.setScrollTop=function(t,n){return Re=n===!0,qe?Ke=i.min(i.max(t,0),ke):e.scrollTo(0,t),Te},r.prototype.getScrollTop=function(){return qe?Ke:e.pageYOffset||l.scrollTop||p.scrollTop||0},r.prototype.getMaxScrollTop=function(){return ke},r.prototype.on=function(e,t){return we[e]=t,Te},r.prototype.off=function(e){return delete we[e],Te},r.prototype.destroy=function(){var e=U();e(Ye),fe(),ve(l,[E],[_,y,T]);for(var t=0,r=Ce.length;r>t;t++)ie(Ce[t].element);l.style.overflow=p.style.overflow="",l.style.height=p.style.height="",be&&o.setStyle(be,"transform","none"),Te=n,be=n,we=n,Se=n,ke=0,Ne=1,Pe=n,xe=n,Ie="down",Ae=-1,$e=0,Be=0,Fe=!1,Me=n,Ve=n,Le=n,He=n,Re=n,De=0,ze=n,qe=!1,Ke=0,Ge=n};var X=function(){var r,o,a,s,d,g,v,h,_,E,y,T;le(l,[f,c,m,u].join(" "),function(e){var l=e.changedTouches[0];for(s=e.target;3===s.nodeType;)s=s.parentNode;switch(d=l.clientY,g=l.clientX,E=e.timeStamp,O.test(s.tagName)||e.preventDefault(),e.type){case f:r&&r.blur(),Te.stopAnimateTo(),r=s,o=v=d,a=g,_=E;break;case c:O.test(s.tagName)&&t.activeElement!==s&&e.preventDefault(),h=d-v,T=E-y,Te.setScrollTop(Ke-h,!0),v=d,y=E;break;default:case m:case u:var p=o-d,C=a-g,b=C*C+p*p;if(49>b){if(!O.test(r.tagName)){r.focus();var w=t.createEvent("MouseEvents");w.initMouseEvent("click",!0,!0,e.view,1,l.screenX,l.screenY,l.clientX,l.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),r.dispatchEvent(w)}return}r=n;var S=h/T;S=i.max(i.min(S,3),-3);var k=i.abs(S/xe),N=S*k+.5*xe*k*k,P=Te.getScrollTop()-N,x=0;P>ke?(x=(ke-P)/N,P=ke):0>P&&(x=-P/N,P=0),k*=1-x,Te.animateTo(P+.5|0,{easing:"outCubic",duration:k})}}),e.scrollTo(0,0),l.style.overflow=p.style.overflow="hidden"},Q=function(){var e=l.clientHeight,t=ue(),n,r,o,a,s,p,f,c,m,u,d;for(c=0,m=Ce.length;m>c;c++)for(n=Ce[c],r=n.element,o=n.anchorTarget,a=n.keyFrames,s=0,p=a.length;p>s;s++)f=a[s],u=f.offset,d=t[f.constant]||0,f.frame=u,f.isPercentage&&(u*=e,f.frame=u),"relative"===f.mode&&(ie(r),f.frame=Te.relativeToAbsolute(o,f.anchors[0],f.anchors[1])-u,ie(r,!0)),f.frame+=d,Se&&!f.isEnd&&f.frame>ke&&(ke=f.frame);for(ke=i.max(ke,de()),c=0,m=Ce.length;m>c;c++){for(n=Ce[c],a=n.keyFrames,s=0,p=a.length;p>s;s++)f=a[s],d=t[f.constant]||0,f.isEnd&&(f.frame=ke-f.offset+d);n.keyFrames.sort(ye)}},J=function(e,t){for(var n=0,r=Ce.length;r>n;n++){var i=Ce[n],s=i.element,l=i.smoothScrolling?e:t,p=i.keyFrames,f=p.length,c=p[0],m=p[p.length-1],u=l<c.frame,_=l>m.frame,E=u?c:m,y=i.emitEvents,T=i.lastFrameIndex,C,b;if(u||_){if(u&&-1===i.edge||_&&1===i.edge)continue;switch(u?(ve(s,[g],[h,v]),y&&T>-1&&(ce(s,c.eventType,Ie),i.lastFrameIndex=-1)):(ve(s,[h],[g,v]),y&&f>T&&(ce(s,m.eventType,Ie),i.lastFrameIndex=f)),i.edge=u?-1:1,i.edgeStrategy){case"reset":ie(s);continue;case"ease":l=E.frame;break;default:case"set":var w=E.props;for(C in w)a.call(w,C)&&(b=ae(w[C].value),0===C.indexOf("@")?s.setAttribute(C.substr(1),b):o.setStyle(s,C,b));continue}}else 0!==i.edge&&(ve(s,[d,v],[g,h]),i.edge=0);for(var S=0;f-1>S;S++)if(l>=p[S].frame&&l<=p[S+1].frame){var k=p[S],N=p[S+1];for(C in k.props)if(a.call(k.props,C)){var P=(l-k.frame)/(N.frame-k.frame);P=k.props[C].easing(P),b=oe(k.props[C].value,N.props[C].value,P),b=ae(b),0===C.indexOf("@")?s.setAttribute(C.substr(1),b):o.setStyle(s,C,b)}y&&T!==S&&("down"===Ie?ce(s,k.eventType,Ie):ce(s,N.eventType,Ie),i.lastFrameIndex=S);break}}},Z=function(){Fe&&(Fe=!1,me());var e=Te.getScrollTop(),t,r=Ee(),a;if(Me)r>=Me.endTime?(e=Me.targetTop,t=Me.done,Me=n):(a=Me.easing((r-Me.startTime)/Me.duration),e=Me.startTop+a*Me.topDiff|0),Te.setScrollTop(e,!0);else if(!Re){var i=He.targetTop-e;i&&(He={startTop:Ae,topDiff:e-Ae,targetTop:e,startTime:Oe,endTime:Oe+Le}),r<=He.endTime&&(a=j.sqrt((r-He.startTime)/Le),e=He.startTop+a*He.topDiff|0)}if(qe&&be&&o.setStyle(be,"transform","translate(0, "+-Ke+"px) "+Ge),Re||Ae!==e){Ie=e>Ae?"down":Ae>e?"up":Ie,Re=!1;var s={curTop:e,lastTop:Ae,maxTop:ke,direction:Ie},l=we.beforerender&&we.beforerender.call(Te,s);l!==!1&&(J(e,Te.getScrollTop()),Ae=e,we.render&&we.render.call(Te,s)),t&&t.call(Te,!1)}Oe=r},ee=function(e){for(var t=0,n=e.keyFrames.length;n>t;t++){for(var r=e.keyFrames[t],o,a,i,s={},l;null!==(l=M.exec(r.props));)i=l[1],a=l[2],o=i.match(V),null!==o?(i=o[1],o=o[2]):o=C,a=a.indexOf("!")?te(a):[a.slice(1)],s[i]={value:a,easing:j[o]};r.props=s}},te=function(e){var t=[];return z.lastIndex=0,e=e.replace(z,function(e){return e.replace(R,function(e){return e/255*100+"%"})}),G&&(q.lastIndex=0,e=e.replace(q,function(e){return G+e})),e=e.replace(R,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},ne=function(e){var t={},n,r;for(n=0,r=e.keyFrames.length;r>n;n++)re(e.keyFrames[n],t);for(t={},n=e.keyFrames.length-1;n>=0;n--)re(e.keyFrames[n],t)},re=function(e,t){var n;for(n in t)a.call(e.props,n)||(e.props[n]=t[n]);for(n in e.props)t[n]=e.props[n]},oe=function(e,t,n){var r,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(r=1;o>r;r++)a[r]=e[r]+(t[r]-e[r])*n;return a},ae=function(e){var t=1;return D.lastIndex=0,e[0].replace(D,function(){return e[t++]})},ie=function(e,t){e=[].concat(e);for(var n,r,o=0,a=e.length;a>o;o++)r=e[o],n=Ce[r[A]],n&&(t?(r.style.cssText=n.dirtyStyleAttr,ve(r,n.dirtyClassAttr)):(n.dirtyStyleAttr=r.style.cssText,n.dirtyClassAttr=ge(r),r.style.cssText=n.styleAttr,ve(r,n.classAttr)))},se=function(){Ge="translateZ(0)",o.setStyle(be,"transform",Ge);var e=s(be),t=e.getPropertyValue("transform"),n=e.getPropertyValue(G+"transform"),r=t&&"none"!==t||n&&"none"!==n;r||(Ge="")};o.setStyle=function(e,t,n){var r=e.style;if(t=t.replace(L,H).replace("-",""),"zIndex"===t)isNaN(n)?r[t]=n:r[t]=""+(0|n);else if("float"===t)r.styleFloat=r.cssFloat=n;else try{K&&(r[K+t.slice(0,1).toUpperCase()+t.slice(1)]=n),r[t]=n}catch(o){}};var le=o.addEvent=function(t,n,r){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),r.call(this,t)};n=n.split(" ");for(var a,i=0,s=n.length;s>i;i++)a=n[i],t.addEventListener?t.addEventListener(a,r,!1):t.attachEvent("on"+a,o),We.push({element:t,name:a,listener:r})},pe=o.removeEvent=function(e,t,n){t=t.split(" ");for(var r=0,o=t.length;o>r;r++)e.removeEventListener?e.removeEventListener(t[r],n,!1):e.detachEvent("on"+t[r],n)},fe=function(){for(var e,t=0,n=We.length;n>t;t++)e=We[t],pe(e.element,e.name,e.listener);We=[]},ce=function(e,t,n){we.keyframe&&we.keyframe.call(Te,e,t,n)},me=function(){var e=Te.getScrollTop();ke=0,Se&&!qe&&(p.style.height=""),Q(),Se&&!qe&&(p.style.height=ke+l.clientHeight+"px"),qe?Te.setScrollTop(i.min(Te.getScrollTop(),ke)):Te.setScrollTop(e,!0),Re=!0},ue=function(){var e=l.clientHeight,t={},n,r;for(n in Pe)r=Pe[n],"function"==typeof r?r=r.call(Te):/p$/.test(r)&&(r=r.slice(0,-1)/100*e),t[n]=r;return t},de=function(){var e=0,t;return be&&(e=i.max(be.offsetHeight,be.scrollHeight)),t=i.max(e,p.scrollHeight,p.offsetHeight,l.scrollHeight,l.offsetHeight,l.clientHeight),t-l.clientHeight},ge=function(t){var n="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[n],n="baseVal"),t[n]},ve=function(t,r,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===n)return void(t[a]=r);for(var i=t[a],s=0,l=o.length;l>s;s++)i=_e(i).replace(_e(o[s])," ");i=he(i);for(var p=0,f=r.length;f>p;p++)-1===_e(i).indexOf(_e(r[p]))&&(i+=" "+r[p]);t[a]=he(i)},he=function(e){return e.replace(B,"")},_e=function(e){return" "+e+" "},Ee=Date.now||function(){return+new Date},ye=function(e,t){return e.frame-t.frame},Te,Ce,be,we,Se,ke=0,Ne=1,Pe,xe,Ie="down",Ae=-1,Oe=Ee(),$e=0,Be=0,Fe=!1,Me,Ve,Le,He,Re,De=0,ze,qe=!1,Ke=0,Ge,We=[],Ye;"function"==typeof define&&define.amd?define([],function(){return o}):"undefined"!=typeof module&&module.exports?module.exports=o:e.skrollr=o}(window,document),function(e,t,n){"use strict";var r,o=[],a=/@-skrollr-keyframes\s+([\w-]+)/g,i=/\s*\{\s*((?:[^{]+\{[^}]*\}\s*)+?)\s*\}/g,s=/([\w\-]+)\s*\{([^}]+)\}/g,l="skrollr-",p=/-skrollr-animation-name\s*:\s*([\w-]+)/g,f=/-skrollr-(anchor-target|smooth-scrolling|emit-events|menu-offset)\s*:\s*['"]([^'"]+)['"]/g,c=function(t){var n=new XMLHttpRequest;try{n.open("GET",t,!1),n.send(null)}catch(r){e.XDomainRequest&&(n=new XDomainRequest,n.open("GET",t,!1),n.send(null))}return n.responseText},m=function(t){for(var n=0;n<t.length;n++){var a=t[n];if("LINK"===a.tagName){if(null===a.getAttribute("data-skrollr-stylesheet"))continue;if(e.matchMedia){var i=a.getAttribute("media");if(i&&!matchMedia(i).matches)continue}r=c(a.href)}else r=a.textContent||a.innerText||a.innerHTML;r&&o.push(r)}o.reverse();for(var s={},l=[],p=[],f=0;f<o.length;f++)r=o[f],u(r,s),g(r,l),v(r,p);h(s,l),_(p)},u=function(e,t){a.lastIndex=0;for(var n,r,o,l;null!==(n=a.exec(e));)for(i.lastIndex=a.lastIndex,r=i.exec(e),s.lastIndex=0,l=t[n[1]]={};null!==(o=s.exec(r[1]));)l[o[1]]=o[2].replace(/[\n\r\t]/g,"")},d=function(e,t){for(var n,r=t;r--&&"{"!==e.charAt(r););for(n=r;n--&&"}"!==e.charAt(n-1););return e.substring(n,r).replace(/[\n\r\t]/g,"")},g=function(e,t){var n,r;for(p.lastIndex=0;null!==(n=p.exec(e));)r=d(e,p.lastIndex),t.push([r,n[1]])},v=function(e,t){var n,r;for(f.lastIndex=0;null!==(n=f.exec(e));)r=d(e,f.lastIndex),t.push([r,n[1],n[2]])},h=function(e,n){for(var r,o,a,i,s,p,f,c,m=0;m<n.length;m++)if(r=t.querySelectorAll(n[m][0])){o=e[n[m][1]];for(a in o)for(i=0===a.indexOf(l)?a.substring(l.length):a,s=0;s<r.length;s++)c=r[s],p="data-"+i,f=o[a],c.hasAttribute(p)&&(f+=c.getAttribute(p)),c.setAttribute(p,f)}},_=function(e){for(var n,r,o,a,i,s=0;s<e.length;s++)if(n=e[s],r=t.querySelectorAll(n[0]),o="data-"+n[1],a=n[2],r)for(i=0;i<r.length;i++)r[i].setAttribute(o,a)};m(t.querySelectorAll("link, style"))}(window,document);var CLOSE_EVENT="Close",BEFORE_CLOSE_EVENT="BeforeClose",AFTER_CLOSE_EVENT="AfterClose",BEFORE_APPEND_EVENT="BeforeAppend",MARKUP_PARSE_EVENT="MarkupParse",OPEN_EVENT="Open",CHANGE_EVENT="Change",NS="mfp",EVENT_NS="."+NS,READY_CLASS="mfp-ready",REMOVING_CLASS="mfp-removing",PREVENT_CLOSE_CLASS="mfp-prevent-close",mfp,MagnificPopup=function(){},_isJQ=!!window.jQuery,_prevStatus,_window=$(window),_body,_document,_prevContentType,_wrapClasses,_currPopupType,_mfpOn=function(e,t){mfp.ev.on(NS+e+EVENT_NS,t)},_getEl=function(e,t,n,r){var o=document.createElement("div");return o.className="mfp-"+e,n&&(o.innerHTML=n),r?t&&t.appendChild(o):(o=$(o),t&&o.appendTo(t)),o},_mfpTrigger=function(e,t){mfp.ev.triggerHandler(NS+e,t),mfp.st.callbacks&&(e=e.charAt(0).toLowerCase()+e.slice(1),mfp.st.callbacks[e]&&mfp.st.callbacks[e].apply(mfp,$.isArray(t)?t:[t]))},_getCloseBtn=function(e){return e===_currPopupType&&mfp.currTemplate.closeBtn||(mfp.currTemplate.closeBtn=$(mfp.st.closeMarkup.replace("%title%",mfp.st.tClose)),_currPopupType=e),mfp.currTemplate.closeBtn},_checkInstance=function(){$.magnificPopup.instance||(mfp=new MagnificPopup,mfp.init(),$.magnificPopup.instance=mfp)},supportsTransitions=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};MagnificPopup.prototype={constructor:MagnificPopup,init:function(){var e=navigator.appVersion;mfp.isIE7=-1!==e.indexOf("MSIE 7."),mfp.isIE8=-1!==e.indexOf("MSIE 8."),mfp.isLowIE=mfp.isIE7||mfp.isIE8,mfp.isAndroid=/android/gi.test(e),mfp.isIOS=/iphone|ipad|ipod/gi.test(e),mfp.supportsTransition=supportsTransitions(),mfp.probablyMobile=mfp.isAndroid||mfp.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),_document=$(document),mfp.popupsCache={}},open:function(e){_body||(_body=$(document.body));var t;if(e.isObj===!1){mfp.items=e.items.toArray(),mfp.index=0;var n=e.items,r;for(t=0;t<n.length;t++)if(r=n[t],r.parsed&&(r=r.el[0]),r===e.el[0]){mfp.index=t;break}}else mfp.items=$.isArray(e.items)?e.items:[e.items],mfp.index=e.index||0;if(mfp.isOpen)return void mfp.updateItemHTML();mfp.types=[],_wrapClasses="",e.mainEl&&e.mainEl.length?mfp.ev=e.mainEl.eq(0):mfp.ev=_document,e.key?(mfp.popupsCache[e.key]||(mfp.popupsCache[e.key]={}),mfp.currTemplate=mfp.popupsCache[e.key]):mfp.currTemplate={},mfp.st=$.extend(!0,{},$.magnificPopup.defaults,e),mfp.fixedContentPos="auto"===mfp.st.fixedContentPos?!mfp.probablyMobile:mfp.st.fixedContentPos,mfp.st.modal&&(mfp.st.closeOnContentClick=!1,mfp.st.closeOnBgClick=!1,mfp.st.showCloseBtn=!1,mfp.st.enableEscapeKey=!1),mfp.bgOverlay||(mfp.bgOverlay=_getEl("bg").on("click"+EVENT_NS,function(){mfp.close()}),mfp.wrap=_getEl("wrap").attr("tabindex",-1).on("click"+EVENT_NS,function(e){mfp._checkIfClose(e.target)&&mfp.close()}),mfp.container=_getEl("container",mfp.wrap)),mfp.contentContainer=_getEl("content"),mfp.st.preloader&&(mfp.preloader=_getEl("preloader",mfp.container,mfp.st.tLoading));var o=$.magnificPopup.modules;for(t=0;t<o.length;t++){var a=o[t];a=a.charAt(0).toUpperCase()+a.slice(1),mfp["init"+a].call(mfp)}_mfpTrigger("BeforeOpen"),mfp.st.showCloseBtn&&(mfp.st.closeBtnInside?(_mfpOn(MARKUP_PARSE_EVENT,function(e,t,n,r){n.close_replaceWith=_getCloseBtn(r.type)}),_wrapClasses+=" mfp-close-btn-in"):mfp.wrap.append(_getCloseBtn())),mfp.st.alignTop&&(_wrapClasses+=" mfp-align-top"),mfp.fixedContentPos?mfp.wrap.css({overflow:mfp.st.overflowY,overflowX:"hidden",overflowY:mfp.st.overflowY}):mfp.wrap.css({top:_window.scrollTop(),position:"absolute"}),(mfp.st.fixedBgPos===!1||"auto"===mfp.st.fixedBgPos&&!mfp.fixedContentPos)&&mfp.bgOverlay.css({height:_document.height(),position:"absolute"}),mfp.st.enableEscapeKey&&_document.on("keyup"+EVENT_NS,function(e){27===e.keyCode&&mfp.close()}),_window.on("resize"+EVENT_NS,function(){mfp.updateSize()}),mfp.st.closeOnContentClick||(_wrapClasses+=" mfp-auto-cursor"),_wrapClasses&&mfp.wrap.addClass(_wrapClasses);var i=mfp.wH=_window.height(),s={};if(mfp.fixedContentPos&&mfp._hasScrollBar(i)){var l=mfp._getScrollbarSize();l&&(s.marginRight=l)}mfp.fixedContentPos&&(mfp.isIE7?$("body, html").css("overflow","hidden"):s.overflow="hidden");var p=mfp.st.mainClass;return mfp.isIE7&&(p+=" mfp-ie7"),p&&mfp._addClassToMFP(p),mfp.updateItemHTML(),_mfpTrigger("BuildControls"),$("html").css(s),mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo||_body),mfp._lastFocusedEl=document.activeElement,setTimeout(function(){mfp.content?(mfp._addClassToMFP(READY_CLASS),mfp._setFocus()):mfp.bgOverlay.addClass(READY_CLASS),_document.on("focusin"+EVENT_NS,mfp._onFocusIn)},16),mfp.isOpen=!0,mfp.updateSize(i),_mfpTrigger(OPEN_EVENT),e},close:function(){mfp.isOpen&&(_mfpTrigger(BEFORE_CLOSE_EVENT),mfp.isOpen=!1,mfp.st.removalDelay&&!mfp.isLowIE&&mfp.supportsTransition?(mfp._addClassToMFP(REMOVING_CLASS),setTimeout(function(){mfp._close()},mfp.st.removalDelay)):mfp._close())},_close:function(){_mfpTrigger(CLOSE_EVENT);var e=REMOVING_CLASS+" "+READY_CLASS+" ";if(mfp.bgOverlay.detach(),mfp.wrap.detach(),mfp.container.empty(),mfp.st.mainClass&&(e+=mfp.st.mainClass+" "),mfp._removeClassFromMFP(e),mfp.fixedContentPos){var t={marginRight:""};mfp.isIE7?$("body, html").css("overflow",""):t.overflow="",$("html").css(t)}_document.off("keyup"+EVENT_NS+" focusin"+EVENT_NS),mfp.ev.off(EVENT_NS),mfp.wrap.attr("class","mfp-wrap").removeAttr("style"),mfp.bgOverlay.attr("class","mfp-bg"),mfp.container.attr("class","mfp-container"),!mfp.st.showCloseBtn||mfp.st.closeBtnInside&&mfp.currTemplate[mfp.currItem.type]!==!0||mfp.currTemplate.closeBtn&&mfp.currTemplate.closeBtn.detach(),mfp._lastFocusedEl&&$(mfp._lastFocusedEl).focus(),mfp.currItem=null,mfp.content=null,mfp.currTemplate=null,mfp.prevHeight=0,_mfpTrigger(AFTER_CLOSE_EVENT)},updateSize:function(e){if(mfp.isIOS){var t=document.documentElement.clientWidth/window.innerWidth,n=window.innerHeight*t;mfp.wrap.css("height",n),mfp.wH=n}else mfp.wH=e||_window.height();mfp.fixedContentPos||mfp.wrap.css("height",mfp.wH),_mfpTrigger("Resize")},updateItemHTML:function(){var e=mfp.items[mfp.index];mfp.contentContainer.detach(),mfp.content&&mfp.content.detach(),e.parsed||(e=mfp.parseEl(mfp.index));var t=e.type;if(_mfpTrigger("BeforeChange",[mfp.currItem?mfp.currItem.type:"",t]),mfp.currItem=e,!mfp.currTemplate[t]){var n=mfp.st[t]?mfp.st[t].markup:!1;_mfpTrigger("FirstMarkupParse",n),n?mfp.currTemplate[t]=$(n):mfp.currTemplate[t]=!0}_prevContentType&&_prevContentType!==e.type&&mfp.container.removeClass("mfp-"+_prevContentType+"-holder");var r=mfp["get"+t.charAt(0).toUpperCase()+t.slice(1)](e,mfp.currTemplate[t]);mfp.appendContent(r,t),e.preloaded=!0,_mfpTrigger(CHANGE_EVENT,e),_prevContentType=e.type,mfp.container.prepend(mfp.contentContainer),_mfpTrigger("AfterChange")},appendContent:function(e,t){mfp.content=e,e?mfp.st.showCloseBtn&&mfp.st.closeBtnInside&&mfp.currTemplate[t]===!0?mfp.content.find(".mfp-close").length||mfp.content.append(_getCloseBtn()):mfp.content=e:mfp.content="",_mfpTrigger(BEFORE_APPEND_EVENT),mfp.container.addClass("mfp-"+t+"-holder"),mfp.contentContainer.append(mfp.content)},parseEl:function(e){var t=mfp.items[e],n;if(t.tagName?t={el:$(t)}:(n=t.type,t={data:t,src:t.src}),t.el){for(var r=mfp.types,o=0;o<r.length;o++)if(t.el.hasClass("mfp-"+r[o])){n=r[o];break}t.src=t.el.attr("data-mfp-src"),t.src||(t.src=t.el.attr("href"))}return t.type=n||mfp.st.type||"inline",t.index=e,t.parsed=!0,mfp.items[e]=t,_mfpTrigger("ElementParse",t),mfp.items[e]},addGroup:function(e,t){var n=function(n){n.mfpEl=this,mfp._openClick(n,e,t)};t||(t={});var r="click.magnificPopup";t.mainEl=e,t.items?(t.isObj=!0,e.off(r).on(r,n)):(t.isObj=!1,t.delegate?e.off(r).on(r,t.delegate,n):(t.items=e,e.off(r).on(r,n)))},_openClick:function(e,t,n){var r=void 0!==n.midClick?n.midClick:$.magnificPopup.defaults.midClick;if(r||2!==e.which&&!e.ctrlKey&&!e.metaKey){var o=void 0!==n.disableOn?n.disableOn:$.magnificPopup.defaults.disableOn;if(o)if($.isFunction(o)){if(!o.call(mfp))return!0}else if(_window.width()<o)return!0;e.type&&(e.preventDefault(),mfp.isOpen&&e.stopPropagation()),n.el=$(e.mfpEl),n.delegate&&(n.items=t.find(n.delegate)),mfp.open(n)}},updateStatus:function(e,t){if(mfp.preloader){_prevStatus!==e&&mfp.container.removeClass("mfp-s-"+_prevStatus),t||"loading"!==e||(t=mfp.st.tLoading);var n={status:e,text:t};_mfpTrigger("UpdateStatus",n),e=n.status,t=n.text,mfp.preloader.html(t),mfp.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),mfp.container.addClass("mfp-s-"+e),_prevStatus=e}},_checkIfClose:function(e){if(!$(e).hasClass(PREVENT_CLOSE_CLASS)){var t=mfp.st.closeOnContentClick,n=mfp.st.closeOnBgClick;if(t&&n)return!0;if(!mfp.content||$(e).hasClass("mfp-close")||mfp.preloader&&e===mfp.preloader[0])return!0;if(e===mfp.content[0]||$.contains(mfp.content[0],e)){if(t)return!0}else if(n&&$.contains(document,e))return!0;return!1}},_addClassToMFP:function(e){mfp.bgOverlay.addClass(e),mfp.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),mfp.wrap.removeClass(e)},_hasScrollBar:function(e){return(mfp.isIE7?_document.height():document.body.scrollHeight)>(e||_window.height())},_setFocus:function(){(mfp.st.focus?mfp.content.find(mfp.st.focus).eq(0):mfp.wrap).focus()},_onFocusIn:function(e){return e.target===mfp.wrap[0]||$.contains(mfp.wrap[0],e.target)?void 0:(mfp._setFocus(),!1)},_parseMarkup:function(e,t,n){var r;n.data&&(t=$.extend(n.data,t)),_mfpTrigger(MARKUP_PARSE_EVENT,[e,t,n]),$.each(t,function(t,n){if(void 0===n||n===!1)return!0;if(r=t.split("_"),r.length>1){var o=e.find(EVENT_NS+"-"+r[0]);if(o.length>0){var a=r[1];"replaceWith"===a?o[0]!==n[0]&&o.replaceWith(n):"img"===a?o.is("img")?o.attr("src",n):o.replaceWith('<img src="'+n+'" class="'+o.attr("class")+'" />'):o.attr(r[1],n)}}else e.find(EVENT_NS+"-"+t).html(n)})},_getScrollbarSize:function(){if(void 0===mfp.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),mfp.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return mfp.scrollbarSize}},$.magnificPopup={instance:null,proto:MagnificPopup.prototype,modules:[],open:function(e,t){return _checkInstance(),e=e?$.extend(!0,{},e):{},e.isObj=!0,e.index=t||0,this.instance.open(e)},close:function(){return $.magnificPopup.instance&&$.magnificPopup.instance.close()},registerModule:function(e,t){t.options&&($.magnificPopup.defaults[e]=t.options),$.extend(this.proto,t.proto),this.modules.push(e)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},$.fn.magnificPopup=function(e){_checkInstance();var t=$(this);if("string"==typeof e)if("open"===e){var n,r=_isJQ?t.data("magnificPopup"):t[0].magnificPopup,o=parseInt(arguments[1],10)||0;r.items?n=r.items[o]:(n=t,r.delegate&&(n=n.find(r.delegate)),n=n.eq(o)),mfp._openClick({mfpEl:n},t,r)}else mfp.isOpen&&mfp[e].apply(mfp,Array.prototype.slice.call(arguments,1));else e=$.extend(!0,{},e),_isJQ?t.data("magnificPopup",e):t[0].magnificPopup=e,mfp.addGroup(t,e);return t};var INLINE_NS="inline",_hiddenClass,_inlinePlaceholder,_lastInlineElement,_putInlineElementsBack=function(){_lastInlineElement&&(_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach(),_lastInlineElement=null)};$.magnificPopup.registerModule(INLINE_NS,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){mfp.types.push(INLINE_NS),_mfpOn(CLOSE_EVENT+"."+INLINE_NS,function(){_putInlineElementsBack()})},getInline:function(e,t){if(_putInlineElementsBack(),e.src){var n=mfp.st.inline,r=$(e.src);if(r.length){var o=r[0].parentNode;o&&o.tagName&&(_inlinePlaceholder||(_hiddenClass=n.hiddenClass,_inlinePlaceholder=_getEl(_hiddenClass),_hiddenClass="mfp-"+_hiddenClass),_lastInlineElement=r.after(_inlinePlaceholder).detach().removeClass(_hiddenClass)),mfp.updateStatus("ready")}else mfp.updateStatus("error",n.tNotFound),r=$("<div>");return e.inlineElement=r,r}return mfp.updateStatus("ready"),mfp._parseMarkup(t,{},e),t}}}),/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)||skrollr.init({forceHeight:!1,smoothScrolling:!0});