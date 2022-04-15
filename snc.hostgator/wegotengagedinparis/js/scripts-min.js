+function($){"use strict";function e(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return{end:t[n]};return!1}$.fn.emulateTransitionEnd=function(e){var t=!1,n=this;$(this).one("bsTransitionEnd",function(){t=!0});var r=function(){t||$(n).trigger($.support.transition.end)};return setTimeout(r,e),this},$(function(){$.support.transition=e(),$.support.transition&&($.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){return $(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function($){"use strict";function e(e){return this.each(function(){var n=$(this),r=n.data("bs.tab");r||n.data("bs.tab",r=new t(this)),"string"==typeof e&&r[e]()})}var t=function(e){this.element=$(e)};t.VERSION="3.3.5",t.TRANSITION_DURATION=150,t.prototype.show=function(){var e=this.element,t=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var r=t.find(".active:last a"),a=$.Event("hide.bs.tab",{relatedTarget:e[0]}),o=$.Event("show.bs.tab",{relatedTarget:r[0]});if(r.trigger(a),e.trigger(o),!o.isDefaultPrevented()&&!a.isDefaultPrevented()){var i=$(n);this.activate(e.closest("li"),t),this.activate(i,i.parent(),function(){r.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:r[0]})})}}},t.prototype.activate=function(e,n,r){function a(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),i?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),r&&r()}var o=n.find("> .active"),i=r&&$.support.transition&&(o.length&&o.hasClass("fade")||!!n.find("> .fade").length);o.length&&i?o.one("bsTransitionEnd",a).emulateTransitionEnd(t.TRANSITION_DURATION):a(),o.removeClass("in")};var n=$.fn.tab;$.fn.tab=e,$.fn.tab.Constructor=t,$.fn.tab.noConflict=function(){return $.fn.tab=n,this};var r=function(t){t.preventDefault(),e.call($(this),"show")};$(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',r).on("click.bs.tab.data-api",'[data-toggle="pill"]',r)}(jQuery),!function(e,t,n){"use strict";function r(n){if(a=t.documentElement,o=t.body,U(),se=this,n=n||{},de=n.constants||{},n.easing)for(var r in n.easing)Y[r]=n.easing[r];be=n.edgeStrategy||"set",fe={beforerender:n.beforerender,render:n.render,keyframe:n.keyframe},ue=n.forceHeight!==!1,ue&&(Be=n.scale||1),pe=n.mobileDeceleration||E,me=n.smoothScrolling!==!1,ve=n.smoothScrollingDuration||x,he={targetTop:se.getScrollTop()},je=(n.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),je?(ce=t.getElementById(n.skrollrBody||A),ce&&ie(),Q(),Ie(a,[y,w],[b])):Ie(a,[y,T],[b]),se.refresh(),ke(e,"resize orientationchange",function(){var e=a.clientWidth,t=a.clientHeight;(t!==_e||e!==$e)&&(_e=t,$e=e,qe=!0)});var i=G();return function s(){$(),we=i(s)}(),se}var a,o,i={get:function(){return se},init:function(e){return se||new r(e)},VERSION:"0.6.29"},s=Object.prototype.hasOwnProperty,l=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",d="touchcancel",p="touchend",g="skrollable",m=g+"-before",v=g+"-between",h=g+"-after",y="skrollr",b="no-"+y,T=y+"-desktop",w=y+"-mobile",k="linear",S=1e3,E=.004,A="skrollr-body",x=200,C="start",F="end",O="center",I="bottom",P="___skrollable_id",D=/^(?:input|textarea|button|select)$/i,M=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,H=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,B=/^(@?[a-z\-]+)\[(\w+)\]$/,V=/-([a-z0-9_])/g,z=function(e,t){return t.toUpperCase()},R=/[\-+]?[\d]*\.?[\d]+/g,_=/\{\?\}/g,q=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,L=/[a-z\-]+-gradient/g,j="",W="",U=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(o,null);for(var n in t)if(j=n.match(e)||+n==n&&t[n].match(e))break;if(!j)return void(j=W="");j=j[0],"-"===j.slice(0,1)?(W=j,j={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[j]):W="-"+j.toLowerCase()+"-"}},G=function(){var t=e.requestAnimationFrame||e[j.toLowerCase()+"RequestAnimationFrame"],n=Me();return(je||!t)&&(t=function(t){var r=Me()-n,a=l.max(0,1e3/60-r);return e.setTimeout(function(){n=Me(),t()},a)}),t},K=function(){var t=e.cancelAnimationFrame||e[j.toLowerCase()+"CancelAnimationFrame"];return(je||!t)&&(t=function(t){return e.clearTimeout(t)}),t},Y={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-l.cos(e*l.PI)/2+.5},sqrt:function(e){return l.sqrt(e)},outCubic:function(e){return l.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-l.abs(3*l.cos(e*t*1.028)/t)}};r.prototype.refresh=function(e){var r,a,o=!1;for(e===n?(o=!0,le=[],Le=0,e=t.getElementsByTagName("*")):e.length===n&&(e=[e]),r=0,a=e.length;a>r;r++){var i=e[r],s=i,l=[],c=me,f=be,u=!1;if(o&&P in i&&delete i[P],i.attributes){for(var d=0,p=i.attributes.length;p>d;d++){var m=i.attributes[d];if("data-anchor-target"!==m.name)if("data-smooth-scrolling"!==m.name)if("data-edge-strategy"!==m.name)if("data-emit-events"!==m.name){var v=m.name.match(N);if(null!==v){var h={props:m.value,element:i,eventType:m.name.replace(V,z)};l.push(h);var y=v[1];y&&(h.constant=y.substr(1));var b=v[2];/p$/.test(b)?(h.isPercentage=!0,h.offset=(0|b.slice(0,-1))/100):h.offset=0|b;var T=v[3],w=v[4]||T;T&&T!==C&&T!==F?(h.mode="relative",h.anchors=[T,w]):(h.mode="absolute",T===F?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Be))}}else u=!0;else f=m.value;else c="off"!==m.value;else if(s=t.querySelector(m.value),null===s)throw'Unable to find anchor target "'+m.value+'"'}if(l.length){var k,S,E;!o&&P in i?(E=i[P],k=le[E].styleAttr,S=le[E].classAttr):(E=i[P]=Le++,k=i.style.cssText,S=Oe(i)),le[E]={element:i,styleAttr:k,classAttr:S,anchorTarget:s,keyFrames:l,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Ie(i,[g],[])}}}for(xe(),r=0,a=e.length;a>r;r++){var A=le[e[r][P]];A!==n&&(J(A),te(A))}return se},r.prototype.relativeToAbsolute=function(e,t,n){var r=a.clientHeight,o=e.getBoundingClientRect(),i=o.top,s=o.bottom-o.top;return t===I?i-=r:t===O&&(i-=r/2),n===I?i+=s:n===O&&(i+=s/2),i+=se.getScrollTop(),i+.5|0},r.prototype.animateTo=function(e,t){t=t||{};var r=Me(),a=se.getScrollTop(),o=t.duration===n?S:t.duration;return ge={startTop:a,topDiff:e-a,targetTop:e,duration:o,startTime:r,endTime:r+o,easing:Y[t.easing||k],done:t.done},ge.topDiff||(ge.done&&ge.done.call(se,!1),ge=n),se},r.prototype.stopAnimateTo=function(){ge&&ge.done&&ge.done.call(se,!0),ge=n},r.prototype.isAnimatingTo=function(){return!!ge},r.prototype.isMobile=function(){return je},r.prototype.setScrollTop=function(t,n){return ye=n===!0,je?We=l.min(l.max(t,0),He):e.scrollTo(0,t),se},r.prototype.getScrollTop=function(){return je?We:e.pageYOffset||a.scrollTop||o.scrollTop||0},r.prototype.getMaxScrollTop=function(){return He},r.prototype.on=function(e,t){return fe[e]=t,se},r.prototype.off=function(e){return delete fe[e],se},r.prototype.destroy=function(){var e=K();e(we),Ee(),Ie(a,[b],[y,T,w]);for(var t=0,r=le.length;r>t;t++)oe(le[t].element);a.style.overflow=o.style.overflow="",a.style.height=o.style.height="",ce&&i.setStyle(ce,"transform","none"),se=n,ce=n,fe=n,ue=n,He=0,Be=1,de=n,pe=n,Ve="down",ze=-1,$e=0,_e=0,qe=!1,ge=n,me=n,ve=n,he=n,ye=n,Le=0,be=n,je=!1,We=0,Te=n};var Q=function(){var r,i,s,c,g,m,v,h,y,b,T,w;ke(a,[f,u,d,p].join(" "),function(e){var a=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(g=a.clientY,m=a.clientX,b=e.timeStamp,D.test(c.tagName)||e.preventDefault(),e.type){case f:r&&r.blur(),se.stopAnimateTo(),r=c,i=v=g,s=m,y=b;break;case u:D.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=g-v,w=b-T,se.setScrollTop(We-h,!0),v=g,T=b;break;default:case d:case p:var o=i-g,k=s-m,S=k*k+o*o;if(49>S){if(!D.test(r.tagName)){r.focus();var E=t.createEvent("MouseEvents");E.initMouseEvent("click",!0,!0,e.view,1,a.screenX,a.screenY,a.clientX,a.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),r.dispatchEvent(E)}return}r=n;var A=h/w;A=l.max(l.min(A,3),-3);var x=l.abs(A/pe),C=A*x+.5*pe*x*x,F=se.getScrollTop()-C,O=0;F>He?(O=(He-F)/C,F=He):0>F&&(O=-F/C,F=0),x*=1-O,se.animateTo(F+.5|0,{easing:"outCubic",duration:x})}}),e.scrollTo(0,0),a.style.overflow=o.style.overflow="hidden"},X=function(){var e,t,n,r,o,i,s,c,f,u,d,p=a.clientHeight,g=Ce();for(c=0,f=le.length;f>c;c++)for(e=le[c],t=e.element,n=e.anchorTarget,r=e.keyFrames,o=0,i=r.length;i>o;o++)s=r[o],u=s.offset,d=g[s.constant]||0,s.frame=u,s.isPercentage&&(u*=p,s.frame=u),"relative"===s.mode&&(oe(t),s.frame=se.relativeToAbsolute(n,s.anchors[0],s.anchors[1])-u,oe(t,!0)),s.frame+=d,ue&&!s.isEnd&&s.frame>He&&(He=s.frame);for(He=l.max(He,Fe()),c=0,f=le.length;f>c;c++){for(e=le[c],r=e.keyFrames,o=0,i=r.length;i>o;o++)s=r[o],d=g[s.constant]||0,s.isEnd&&(s.frame=He-s.offset+d);e.keyFrames.sort(Ne)}},Z=function(e,t){for(var n=0,r=le.length;r>n;n++){var a,o,l=le[n],c=l.element,f=l.smoothScrolling?e:t,u=l.keyFrames,d=u.length,p=u[0],y=u[u.length-1],b=f<p.frame,T=f>y.frame,w=b?p:y,k=l.emitEvents,S=l.lastFrameIndex;if(b||T){if(b&&-1===l.edge||T&&1===l.edge)continue;switch(b?(Ie(c,[m],[h,v]),k&&S>-1&&(Ae(c,p.eventType,Ve),l.lastFrameIndex=-1)):(Ie(c,[h],[m,v]),k&&d>S&&(Ae(c,y.eventType,Ve),l.lastFrameIndex=d)),l.edge=b?-1:1,l.edgeStrategy){case"reset":oe(c);continue;case"ease":f=w.frame;break;default:case"set":var E=w.props;for(a in E)s.call(E,a)&&(o=ae(E[a].value),0===a.indexOf("@")?c.setAttribute(a.substr(1),o):i.setStyle(c,a,o));continue}}else 0!==l.edge&&(Ie(c,[g,v],[m,h]),l.edge=0);for(var A=0;d-1>A;A++)if(f>=u[A].frame&&f<=u[A+1].frame){var x=u[A],C=u[A+1];for(a in x.props)if(s.call(x.props,a)){var F=(f-x.frame)/(C.frame-x.frame);F=x.props[a].easing(F),o=re(x.props[a].value,C.props[a].value,F),o=ae(o),0===a.indexOf("@")?c.setAttribute(a.substr(1),o):i.setStyle(c,a,o)}k&&S!==A&&("down"===Ve?Ae(c,x.eventType,Ve):Ae(c,C.eventType,Ve),l.lastFrameIndex=A);break}}},$=function(){qe&&(qe=!1,xe());var e,t,r=se.getScrollTop(),a=Me();if(ge)a>=ge.endTime?(r=ge.targetTop,e=ge.done,ge=n):(t=ge.easing((a-ge.startTime)/ge.duration),r=ge.startTop+t*ge.topDiff|0),se.setScrollTop(r,!0);else if(!ye){var o=he.targetTop-r;o&&(he={startTop:ze,topDiff:r-ze,targetTop:r,startTime:Re,endTime:Re+ve}),a<=he.endTime&&(t=Y.sqrt((a-he.startTime)/ve),r=he.startTop+t*he.topDiff|0)}if(ye||ze!==r){Ve=r>ze?"down":ze>r?"up":Ve,ye=!1;var s={curTop:r,lastTop:ze,maxTop:He,direction:Ve},l=fe.beforerender&&fe.beforerender.call(se,s);l!==!1&&(Z(r,se.getScrollTop()),je&&ce&&i.setStyle(ce,"transform","translate(0, "+-We+"px) "+Te),ze=r,fe.render&&fe.render.call(se,s)),e&&e.call(se,!1)}Re=a},J=function(e){for(var t=0,n=e.keyFrames.length;n>t;t++){for(var r,a,o,i,s=e.keyFrames[t],l={};null!==(i=H.exec(s.props));)o=i[1],a=i[2],r=o.match(B),null!==r?(o=r[1],r=r[2]):r=k,a=a.indexOf("!")?ee(a):[a.slice(1)],l[o]={value:a,easing:Y[r]};s.props=l}},ee=function(e){var t=[];return q.lastIndex=0,e=e.replace(q,function(e){return e.replace(R,function(e){return e/255*100+"%"})}),W&&(L.lastIndex=0,e=e.replace(L,function(e){return W+e})),e=e.replace(R,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},te=function(e){var t,n,r={};for(t=0,n=e.keyFrames.length;n>t;t++)ne(e.keyFrames[t],r);for(r={},t=e.keyFrames.length-1;t>=0;t--)ne(e.keyFrames[t],r)},ne=function(e,t){var n;for(n in t)s.call(e.props,n)||(e.props[n]=t[n]);for(n in e.props)t[n]=e.props[n]},re=function(e,t,n){var r,a=e.length;if(a!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var o=[e[0]];for(r=1;a>r;r++)o[r]=e[r]+(t[r]-e[r])*n;return o},ae=function(e){var t=1;return _.lastIndex=0,e[0].replace(_,function(){return e[t++]})},oe=function(e,t){e=[].concat(e);for(var n,r,a=0,o=e.length;o>a;a++)r=e[a],n=le[r[P]],n&&(t?(r.style.cssText=n.dirtyStyleAttr,Ie(r,n.dirtyClassAttr)):(n.dirtyStyleAttr=r.style.cssText,n.dirtyClassAttr=Oe(r),r.style.cssText=n.styleAttr,Ie(r,n.classAttr)))},ie=function(){Te="translateZ(0)",i.setStyle(ce,"transform",Te);var e=c(ce),t=e.getPropertyValue("transform"),n=e.getPropertyValue(W+"transform"),r=t&&"none"!==t||n&&"none"!==n;r||(Te="")};i.setStyle=function(e,t,n){var r=e.style;if(t=t.replace(V,z).replace("-",""),"zIndex"===t)isNaN(n)?r[t]=n:r[t]=""+(0|n);else if("float"===t)r.styleFloat=r.cssFloat=n;else try{j&&(r[j+t.slice(0,1).toUpperCase()+t.slice(1)]=n),r[t]=n}catch(a){}};var se,le,ce,fe,ue,de,pe,ge,me,ve,he,ye,be,Te,we,ke=i.addEvent=function(t,n,r){var a=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),r.call(this,t)};n=n.split(" ");for(var o,i=0,s=n.length;s>i;i++)o=n[i],t.addEventListener?t.addEventListener(o,r,!1):t.attachEvent("on"+o,a),Ue.push({element:t,name:o,listener:r})},Se=i.removeEvent=function(e,t,n){t=t.split(" ");for(var r=0,a=t.length;a>r;r++)e.removeEventListener?e.removeEventListener(t[r],n,!1):e.detachEvent("on"+t[r],n)},Ee=function(){for(var e,t=0,n=Ue.length;n>t;t++)e=Ue[t],Se(e.element,e.name,e.listener);Ue=[]},Ae=function(e,t,n){fe.keyframe&&fe.keyframe.call(se,e,t,n)},xe=function(){var e=se.getScrollTop();He=0,ue&&!je&&(o.style.height=""),X(),ue&&!je&&(o.style.height=He+a.clientHeight+"px"),je?se.setScrollTop(l.min(se.getScrollTop(),He)):se.setScrollTop(e,!0),ye=!0},Ce=function(){var e,t,n=a.clientHeight,r={};for(e in de)t=de[e],"function"==typeof t?t=t.call(se):/p$/.test(t)&&(t=t.slice(0,-1)/100*n),r[e]=t;return r},Fe=function(){var e,t=0;return ce&&(t=l.max(ce.offsetHeight,ce.scrollHeight)),e=l.max(t,o.scrollHeight,o.offsetHeight,a.scrollHeight,a.offsetHeight,a.clientHeight),e-a.clientHeight},Oe=function(t){var n="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[n],n="baseVal"),t[n]},Ie=function(t,r,a){var o="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[o],o="baseVal"),a===n)return void(t[o]=r);for(var i=t[o],s=0,l=a.length;l>s;s++)i=De(i).replace(De(a[s])," ");i=Pe(i);for(var c=0,f=r.length;f>c;c++)-1===De(i).indexOf(De(r[c]))&&(i+=" "+r[c]);t[o]=Pe(i)},Pe=function(e){return e.replace(M,"")},De=function(e){return" "+e+" "},Me=Date.now||function(){return+new Date},Ne=function(e,t){return e.frame-t.frame},He=0,Be=1,Ve="down",ze=-1,Re=Me(),$e=0,_e=0,qe=!1,Le=0,je=!1,We=0,Ue=[];"function"==typeof define&&define.amd?define([],function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i}(window,document),/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)||skrollr.init({forceHeight:!1});var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};jQuery(function($){isMobile.any()&&$("#is-desktop").addClass("hide")});