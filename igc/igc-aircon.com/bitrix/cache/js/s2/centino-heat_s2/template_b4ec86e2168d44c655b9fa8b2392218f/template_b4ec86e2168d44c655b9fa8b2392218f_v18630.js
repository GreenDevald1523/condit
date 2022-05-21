
; /* Start:"a:4:{s:4:"full";s:71:"/local/templates/centino-heat_s2/js/jquery.actual.min.js?15933478631239";s:6:"source";s:56:"/local/templates/centino-heat_s2/js/jquery.actual.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.19
 *
 * Requires: jQuery >= 1.2.3
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a);
}else{a(jQuery);}}(function(a){a.fn.addBack=a.fn.addBack||a.fn.andSelf;a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';
}var f={absolute:false,clone:false,includeMargin:false,display:"block"};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";
e=e.clone().attr("style",m).appendTo("body");};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().addBack().filter(":hidden");
d+="visibility: hidden !important; display: "+i.display+" !important; ";if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);
var n=m.attr("style");g.push(n);m.attr("style",n?n+";"+d:d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");
}else{o.attr("style",n);}});};}h();var k=/(outer)/.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:74:"/local/templates/centino-heat_s2/js/jquery.fancybox.min.js?159334786322989";s:6:"source";s:54:"/local/templates/centino-heat_s2/js/jquery.fancybox.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e,t,n,i){"use strict";var o=n("html"),a=n(e),r=n(t),s=n.fancybox=function(){s.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),c=null,d=t.createTouch!==i,p=function(e){return e&&e.hasOwnProperty&&e instanceof n},h=function(e){return e&&"string"===n.type(e)},f=function(e){return h(e)&&e.indexOf("%")>0},u=function(e){return e&&!(e.style.overflow&&"hidden"===e.style.overflow)&&(e.clientWidth&&e.scrollWidth>e.clientWidth||e.clientHeight&&e.scrollHeight>e.clientHeight)},g=function(e,t){var n=parseInt(e,10)||0;return t&&f(e)&&(n=s.getViewport()[t]/100*n),Math.ceil(n)},m=function(e,t){return g(e,t)+"px"};n.extend(s,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!d,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(n.isPlainObject(t)||(t={}),!1!==s.close(!0))?(n.isArray(e)||(e=p(e)?n(e).get():[e]),n.each(e,function(o,a){var r,l,c,d,f,u,g,m={};"object"===n.type(a)&&(a.nodeType&&(a=n(a)),p(a)?(m={href:a.data("fancybox-href")||a.attr("href"),title:a.data("fancybox-title")||a.attr("title"),isDom:!0,element:a},n.metadata&&n.extend(!0,m,a.metadata())):m=a),r=t.href||m.href||(h(a)?a:null),l=t.title!==i?t.title:m.title||"",c=t.content||m.content,d=c?"html":t.type||m.type,!d&&m.isDom&&(d=a.data("fancybox-type"),d||(f=a.prop("class").match(/fancybox\.(\w+)/),d=f?f[1]:null)),h(r)&&(d||(s.isImage(r)?d="image":s.isSWF(r)?d="swf":"#"===r.charAt(0)?d="inline":h(a)&&(d="html",c=a)),"ajax"===d&&(u=r.split(/\s+/,2),r=u.shift(),g=u.shift())),c||("inline"===d?r?c=n(h(r)?r.replace(/.*(?=#[^\s]+$)/,""):r):m.isDom&&(c=a):"html"===d?c=r:d||r||!m.isDom||(d="inline",c=a)),n.extend(m,{href:r,type:d,content:c,title:l,selector:g}),e[o]=m}),s.opts=n.extend(!0,{},s.defaults,t),t.keys!==i&&(s.opts.keys=t.keys?n.extend({},s.defaults.keys,t.keys):!1),s.group=e,s._start(s.opts.index)):void 0},cancel:function(){var e=s.coming;e&&!1!==s.trigger("onCancel")&&(s.hideLoading(),s.ajaxLoad&&s.ajaxLoad.abort(),s.ajaxLoad=null,s.imgPreload&&(s.imgPreload.onload=s.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),s.coming=null,s.current||s._afterZoomOut(e))},close:function(e){s.cancel(),!1!==s.trigger("beforeClose")&&(s.unbindEvents(),s.isActive&&(s.isOpen&&e!==!0?(s.isOpen=s.isOpened=!1,s.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),s.wrap.stop(!0,!0).removeClass("fancybox-opened"),s.transitions[s.current.closeMethod]()):(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),s._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(s.player.timer)},n=function(){t(),s.current&&s.player.isActive&&(s.player.timer=setTimeout(s.next,s.current.playSpeed))},i=function(){t(),r.unbind(".player"),s.player.isActive=!1,s.trigger("onPlayEnd")},o=function(){s.current&&(s.current.loop||s.current.index<s.group.length-1)&&(s.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":i,"onUpdate.player":n,"beforeLoad.player":t}),n(),s.trigger("onPlayStart"))};e===!0||!s.player.isActive&&e!==!1?o():i()},next:function(e){var t=s.current;t&&(h(e)||(e=t.direction.next),s.jumpto(t.index+1,e,"next"))},prev:function(e){var t=s.current;t&&(h(e)||(e=t.direction.prev),s.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var o=s.current;o&&(e=g(e),s.direction=t||o.direction[e>=o.index?"next":"prev"],s.router=n||"jumpto",o.loop&&(0>e&&(e=o.group.length+e%o.group.length),e%=o.group.length),o.group[e]!==i&&(s.cancel(),s._start(e)))},reposition:function(e,t){var i,o=s.current,a=o?o.wrap:null;a&&(i=s._getPosition(t),e&&"scroll"===e.type?(delete i.position,a.stop(!0,!0).animate(i,200)):(a.css(i),o.pos=n.extend({},o.dim,i)))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(c),c=null),s.isOpen&&!c&&(c=setTimeout(function(){var i=s.current;i&&!s.isClosing&&(s.wrap.removeClass("fancybox-tmp"),(n||"load"===t||"resize"===t&&i.autoResize)&&s._setDimension(),"scroll"===t&&i.canShrink||s.reposition(e),s.trigger("onUpdate"),c=null)},n&&!d?0:300))},toggle:function(e){s.isOpen&&(s.current.fitToView="boolean"===n.type(e)?e:!s.current.fitToView,d&&(s.wrap.removeAttr("style").addClass("fancybox-tmp"),s.trigger("onUpdate")),s.update())},hideLoading:function(){r.unbind(".loading"),n("#fancybox-loading").remove()},showLoading:function(){var e,t;s.hideLoading(),e=n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"),r.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),s.cancel())}),s.defaults.fixed||(t=s.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=s.current&&s.current.locked||!1,n={x:a.scrollLeft(),y:a.scrollTop()};return t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=d&&e.innerWidth?e.innerWidth:a.width(),n.h=d&&e.innerHeight?e.innerHeight:a.height()),n},unbindEvents:function(){s.wrap&&p(s.wrap)&&s.wrap.unbind(".fb"),r.unbind(".fb"),a.unbind(".fb")},bindEvents:function(){var e,t=s.current;t&&(a.bind("orientationchange.fb"+(d?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),s.update),e=t.keys,e&&r.bind("keydown.fb",function(o){var a=o.which||o.keyCode,r=o.target||o.srcElement;return 27===a&&s.coming?!1:void(o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||r&&(r.type||n(r).is("[contenteditable]"))||n.each(e,function(e,r){return t.group.length>1&&r[a]!==i?(s[e](r[a]),o.preventDefault(),!1):n.inArray(a,r)>-1?(s[e](),o.preventDefault(),!1):void 0}))}),n.fn.mousewheel&&t.mouseWheel&&s.wrap.bind("mousewheel.fb",function(e,i,o,a){for(var r=e.target||null,l=n(r),c=!1;l.length&&!(c||l.is(".fancybox-skin")||l.is(".fancybox-wrap"));)c=u(l[0]),l=n(l).parent();0===i||c||s.group.length>1&&!t.canShrink&&(a>0||o>0?s.prev(a>0?"down":"left"):(0>a||0>o)&&s.next(0>a?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var i,o=t||s.coming||s.current;if(o){if(n.isFunction(o[e])&&(i=o[e].apply(o,Array.prototype.slice.call(arguments,1))),i===!1)return!1;o.helpers&&n.each(o.helpers,function(t,i){i&&s.helpers[t]&&n.isFunction(s.helpers[t][e])&&s.helpers[t][e](n.extend(!0,{},s.helpers[t].defaults,i),o)}),r.trigger(e)}},isImage:function(e){return h(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return h(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,i,o,a,r,l={};if(e=g(e),t=s.group[e]||null,!t)return!1;if(l=n.extend(!0,{},s.opts,t),a=l.margin,r=l.padding,"number"===n.type(a)&&(l.margin=[a,a,a,a]),"number"===n.type(r)&&(l.padding=[r,r,r,r]),l.modal&&n.extend(!0,l,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),l.autoSize&&(l.autoWidth=l.autoHeight=!0),"auto"===l.width&&(l.autoWidth=!0),"auto"===l.height&&(l.autoHeight=!0),l.group=s.group,l.index=e,s.coming=l,!1===s.trigger("beforeLoad"))return void(s.coming=null);if(o=l.type,i=l.href,!o)return s.coming=null,s.current&&s.router&&"jumpto"!==s.router?(s.current.index=e,s[s.router](s.direction)):!1;if(s.isActive=!0,("image"===o||"swf"===o)&&(l.autoHeight=l.autoWidth=!1,l.scrolling="visible"),"image"===o&&(l.aspectRatio=!0),"iframe"===o&&d&&(l.scrolling="scroll"),l.wrap=n(l.tpl.wrap).addClass("fancybox-"+(d?"mobile":"desktop")+" fancybox-type-"+o+" fancybox-tmp "+l.wrapCSS).appendTo(l.parent||"body"),n.extend(l,{skin:n(".fancybox-skin",l.wrap),outer:n(".fancybox-outer",l.wrap),inner:n(".fancybox-inner",l.wrap)}),n.each(["Top","Right","Bottom","Left"],function(e,t){l.skin.css("padding"+t,m(l.padding[e]))}),s.trigger("onReady"),"inline"===o||"html"===o){if(!l.content||!l.content.length)return s._error("content")}else if(!i)return s._error("href");"image"===o?s._loadImage():"ajax"===o?s._loadAjax():"iframe"===o?s._loadIframe():s._afterLoad()},_error:function(e){n.extend(s.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:s.coming.tpl.error}),s._afterLoad()},_loadImage:function(){var e=s.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,s.coming.width=this.width/s.opts.pixelRatio,s.coming.height=this.height/s.opts.pixelRatio,s._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,s._error("image")},e.src=s.coming.href,e.complete!==!0&&s.showLoading()},_loadAjax:function(){var e=s.coming;s.showLoading(),s.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){s.coming&&"abort"!==t?s._error("ajax",e):s.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,s._afterLoad())}}))},_loadIframe:function(){var e=s.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",d?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(s.showLoading(),t.one("load",function(){n(this).data("ready",1),d||n(this).bind("load.fb",s.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),s._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||s._afterLoad()},_preloadImages:function(){var e,t,n=s.group,i=s.current,o=n.length,a=i.preload?Math.min(i.preload,o-1):0;for(t=1;a>=t;t+=1)e=n[(i.index+t)%o],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,i,o,a,r,l=s.coming,c=s.current,d="fancybox-placeholder";if(s.hideLoading(),l&&s.isActive!==!1){if(!1===s.trigger("afterLoad",l,c))return l.wrap.stop(!0).trigger("onReset").remove(),void(s.coming=null);switch(c&&(s.trigger("beforeChange",c),c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),s.unbindEvents(),e=l,t=l.content,i=l.type,o=l.scrolling,n.extend(s,{wrap:e.wrap,skin:e.skin,outer:e.outer,inner:e.inner,current:e,previous:c}),a=e.href,i){case"inline":case"ajax":case"html":e.selector?t=n("<div>").html(t).find(e.selector):p(t)&&(t.data(d)||t.data(d,n('<div class="'+d+'"></div>').insertAfter(t).hide()),t=t.show().detach(),e.wrap.bind("onReset",function(){n(this).find(t).length&&t.hide().replaceAll(t.data(d)).data(d,!1)}));break;case"image":t=e.tpl.image.replace("{href}",a);break;case"swf":t='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+a+'"></param>',r="",n.each(e.swf,function(e,n){t+='<param name="'+e+'" value="'+n+'"></param>',r+=" "+e+'="'+n+'"'}),t+='<embed src="'+a+'" type="application/x-shockwave-flash" width="100%" height="100%"'+r+"></embed></object>"}p(t)&&t.parent().is(e.inner)||e.inner.append(t),s.trigger("beforeShow"),e.inner.css("overflow","yes"===o?"scroll":"no"===o?"hidden":o),s._setDimension(),s.reposition(),s.isOpen=!1,s.coming=null,s.bindEvents(),s.isOpened?c.prevMethod&&s.transitions[c.prevMethod]():n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(),s.transitions[s.isOpened?e.nextMethod:e.openMethod](),s._preloadImages()}},_setDimension:function(){var e,t,i,o,a,r,l,c,d,p,h,u,y,x,v,w=s.getViewport(),b=0,k=!1,C=!1,O=s.wrap,W=s.skin,_=s.inner,S=s.current,T=S.width,L=S.height,E=S.minWidth,R=S.minHeight,j=S.maxWidth,P=S.maxHeight,H=S.scrolling,M=S.scrollOutside?S.scrollbarWidth:0,A=S.margin,I=g(A[1]+A[3]),D=g(A[0]+A[2]);if(O.add(W).add(_).width("auto").height("auto").removeClass("fancybox-tmp"),e=g(W.outerWidth(!0)-W.width()),t=g(W.outerHeight(!0)-W.height()),i=I+e,o=D+t,a=f(T)?(w.w-i)*g(T)/100:T,r=f(L)?(w.h-o)*g(L)/100:L,"iframe"===S.type){if(x=S.content,S.autoHeight&&1===x.data("ready"))try{x[0].contentWindow.document.location&&(_.width(a).height(9999),v=x.contents().find("body"),M&&v.css("overflow-x","hidden"),r=v.outerHeight(!0))}catch(z){}}else(S.autoWidth||S.autoHeight)&&(_.addClass("fancybox-tmp"),S.autoWidth||_.width(a),S.autoHeight||_.height(r),S.autoWidth&&(a=_.width()),S.autoHeight&&(r=_.height()),_.removeClass("fancybox-tmp"));if(T=g(a),L=g(r),d=a/r,E=g(f(E)?g(E,"w")-i:E),j=g(f(j)?g(j,"w")-i:j),R=g(f(R)?g(R,"h")-o:R),P=g(f(P)?g(P,"h")-o:P),l=j,c=P,S.fitToView&&(j=Math.min(w.w-i,j),P=Math.min(w.h-o,P)),u=w.w-I,y=w.h-D,S.aspectRatio?(T>j&&(T=j,L=g(T/d)),L>P&&(L=P,T=g(L*d)),E>T&&(T=E,L=g(T/d)),R>L&&(L=R,T=g(L*d))):(T=Math.max(E,Math.min(T,j)),S.autoHeight&&"iframe"!==S.type&&(_.width(T),L=_.height()),L=Math.max(R,Math.min(L,P))),S.fitToView)if(_.width(T).height(L),O.width(T+e),p=O.width(),h=O.height(),S.aspectRatio)for(;(p>u||h>y)&&T>E&&L>R&&!(b++>19);)L=Math.max(R,Math.min(P,L-10)),T=g(L*d),E>T&&(T=E,L=g(T/d)),T>j&&(T=j,L=g(T/d)),_.width(T).height(L),O.width(T+e),p=O.width(),h=O.height();else T=Math.max(E,Math.min(T,T-(p-u))),L=Math.max(R,Math.min(L,L-(h-y)));M&&"auto"===H&&r>L&&u>T+e+M&&(T+=M),_.width(T).height(L),O.width(T+e),p=O.width(),h=O.height(),k=(p>u||h>y)&&T>E&&L>R,C=S.aspectRatio?l>T&&c>L&&a>T&&r>L:(l>T||c>L)&&(a>T||r>L),n.extend(S,{dim:{width:m(p),height:m(h)},origWidth:a,origHeight:r,canShrink:k,canExpand:C,wPadding:e,hPadding:t,wrapSpace:h-W.outerHeight(!0),skinSpace:W.height()-L}),!x&&S.autoHeight&&L>R&&P>L&&!C&&_.height("auto")},_getPosition:function(e){var t=s.current,n=s.getViewport(),i=t.margin,o=s.wrap.width()+i[1]+i[3],a=s.wrap.height()+i[0]+i[2],r={position:"absolute",top:i[0],left:i[3]};return t.autoCenter&&t.fixed&&!e&&a<=n.h&&o<=n.w?r.position="fixed":t.locked||(r.top+=n.y,r.left+=n.x),r.top=m(Math.max(r.top,r.top+(n.h-a)*t.topRatio)),r.left=m(Math.max(r.left,r.left+(n.w-o)*t.leftRatio)),r},_afterZoomIn:function(){var e=s.current;e&&(s.isOpen=s.isOpened=!0,s.wrap.css("overflow","visible").addClass("fancybox-opened"),s.update(),(e.closeClick||e.nextClick&&s.group.length>1)&&s.inner.css("cursor","pointer").bind("click.fb",function(t){n(t.target).is("a")||n(t.target).parent().is("a")||(t.preventDefault(),s[e.closeClick?"close":"next"]())}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb",function(e){e.preventDefault(),s.close()}),e.arrows&&s.group.length>1&&((e.loop||e.index>0)&&n(e.tpl.prev).appendTo(s.outer).bind("click.fb",s.prev),(e.loop||e.index<s.group.length-1)&&n(e.tpl.next).appendTo(s.outer).bind("click.fb",s.next)),s.trigger("afterShow"),e.loop||e.index!==e.group.length-1?s.opts.autoPlay&&!s.player.isActive&&(s.opts.autoPlay=!1,s.play()):s.play(!1))},_afterZoomOut:function(e){e=e||s.current,n(".fancybox-wrap").trigger("onReset").remove(),n.extend(s,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),s.trigger("afterClose",e)}}),s.transitions={getOrigPosition:function(){var e=s.current,t=e.element,n=e.orig,i={},o=50,a=50,r=e.hPadding,l=e.wPadding,c=s.getViewport();return!n&&e.isDom&&t.is(":visible")&&(n=t.find("img:first"),n.length||(n=t)),p(n)?(i=n.offset(),n.is("img")&&(o=n.outerWidth(),a=n.outerHeight())):(i.top=c.y+(c.h-a)*e.topRatio,i.left=c.x+(c.w-o)*e.leftRatio),("fixed"===s.wrap.css("position")||e.locked)&&(i.top-=c.y,i.left-=c.x),i={top:m(i.top-r*e.topRatio),left:m(i.left-l*e.leftRatio),width:m(o+l),height:m(a+r)}},step:function(e,t){var n,i,o,a=t.prop,r=s.current,l=r.wrapSpace,c=r.skinSpace;("width"===a||"height"===a)&&(n=t.end===t.start?1:(e-t.start)/(t.end-t.start),s.isClosing&&(n=1-n),i="width"===a?r.wPadding:r.hPadding,o=e-i,s.skin[a](g("width"===a?o:o-l*n)),s.inner[a](g("width"===a?o:o-l*n-c*n)))},zoomIn:function(){var e=s.current,t=e.pos,i=e.openEffect,o="elastic"===i,a=n.extend({opacity:1},t);delete a.position,o?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===i&&(t.opacity=.1),s.wrap.css(t).animate(a,{duration:"none"===i?0:e.openSpeed,easing:e.openEasing,step:o?this.step:null,complete:s._afterZoomIn})},zoomOut:function(){var e=s.current,t=e.closeEffect,n="elastic"===t,i={opacity:.1};n&&(i=this.getOrigPosition(),e.closeOpacity&&(i.opacity=.1)),s.wrap.animate(i,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:s._afterZoomOut})},changeIn:function(){var e,t=s.current,n=t.nextEffect,i=t.pos,o={opacity:1},a=s.direction,r=200;i.opacity=.1,"elastic"===n&&(e="down"===a||"up"===a?"top":"left","down"===a||"right"===a?(i[e]=m(g(i[e])-r),o[e]="+="+r+"px"):(i[e]=m(g(i[e])+r),o[e]="-="+r+"px")),"none"===n?s._afterZoomIn():s.wrap.css(i).animate(o,{duration:t.nextSpeed,easing:t.nextEasing,complete:s._afterZoomIn})},changeOut:function(){var e=s.previous,t=e.prevEffect,i={opacity:.1},o=s.direction,a=200;"elastic"===t&&(i["down"===o||"up"===o?"top":"left"]=("up"===o||"left"===o?"-":"+")+"="+a+"px"),e.wrap.animate(i,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},s.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!d,fixed:!0},overlay:null,fixed:!1,el:n("html"),create:function(e){e=n.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=n('<div class="fancybox-overlay"></div>').appendTo(s.coming?s.coming.parent:e.parent),this.fixed=!1,e.fixed&&s.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=n.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(a.bind("resize.overlay",n.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){return n(e.target).hasClass("fancybox-overlay")?(s.isActive?s.close():t.close(),!1):void 0}),this.overlay.css(e.css).show()},close:function(){var e,t;a.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(n(".fancybox-margin").removeClass("fancybox-margin"),e=a.scrollTop(),t=a.scrollLeft(),this.el.removeClass("fancybox-lock"),a.scrollTop(e).scrollLeft(t)),n(".fancybox-overlay").remove().hide(),n.extend(this,{overlay:null,fixed:!1})},update:function(){var e,n="100%";this.overlay.width(n).height("100%"),l?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),r.width()>e&&(n=r.width())):r.width()>a.width()&&(n=r.width()),this.overlay.width(n).height(r.height())},onReady:function(e,t){var i=this.overlay;n(".fancybox-overlay").stop(!0,!0),i||this.create(e),e.locked&&this.fixed&&t.fixed&&(i||(this.margin=r.height()>a.height()?n("html").css("margin-right").replace("px",""):!1),t.locked=this.overlay.append(t.wrap),t.fixed=!1),e.showEarly===!0&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var i,o;t.locked&&(this.margin!==!1&&(n("*").filter(function(){return"fixed"===n(this).css("position")&&!n(this).hasClass("fancybox-overlay")&&!n(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),i=a.scrollTop(),o=a.scrollLeft(),this.el.addClass("fancybox-lock"),a.scrollTop(i).scrollLeft(o)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!s.coming&&this.overlay.fadeOut(e.speedOut,n.proxy(this.close,this))}},s.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t,i,o=s.current,a=o.title,r=e.type;if(n.isFunction(a)&&(a=a.call(o.element,o)),h(a)&&""!==n.trim(a)){switch(t=n('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+a+"</div>"),r){case"inside":i=s.skin;break;case"outside":i=s.wrap;break;case"over":i=s.inner;break;default:i=s.skin,t.appendTo("body"),l&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),s.current.margin[2]+=Math.abs(g(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](i)}}},n.fn.fancybox=function(e){var t,i=n(this),o=this.selector||"",a=function(a){var r,l,c=n(this).blur(),d=t;a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||c.is(".fancybox-wrap")||(r=e.groupAttr||"data-fancybox-group",l=c.attr(r),l||(r="rel",l=c.get(0)[r]),l&&""!==l&&"nofollow"!==l&&(c=o.length?n(o):i,c=c.filter("["+r+'="'+l+'"]'),d=c.index(this)),e.index=d,s.open(c,e)!==!1&&a.preventDefault())};return e=e||{},t=e.index||0,o&&e.live!==!1?r.undelegate(o,"click.fb-start").delegate(o+":not('.fancybox-item, .fancybox-nav')","click.fb-start",a):i.unbind("click.fb-start").bind("click.fb-start",a),this.filter("[data-fancybox-start=1]").trigger("click"),this},r.ready(function(){var t,a;n.scrollbarWidth===i&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),i=t.innerWidth()-t.height(99).innerWidth();return e.remove(),i}),n.support.fixedPosition===i&&(n.support.fixedPosition=function(){var e=n('<div style="position:fixed;top:20px;"></div>').appendTo("body"),t=20===e[0].offsetTop||15===e[0].offsetTop;return e.remove(),t}()),n.extend(s.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")}),t=n(e).width(),o.addClass("fancybox-lock-test"),a=n(e).width(),o.removeClass("fancybox-lock-test"),n("<style type='text/css'>.fancybox-margin{margin-right:"+(a-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/local/templates/centino-heat_s2/vendor/jquery.easing.js?15933478618097";s:6:"source";s:56:"/local/templates/centino-heat_s2/vendor/jquery.easing.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/local/templates/centino-heat_s2/vendor/jquery.appear.js?15933478613188";s:6:"source";s:56:"/local/templates/centino-heat_s2/vendor/jquery.appear.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
	$.fn.appear = function(fn, options) {

		var settings = $.extend({

			//arbitrary data to pass to fn
			data: undefined,

			//call fn only on the first appear?
			one: true,

			// X & Y accuracy
			accX: 0,
			accY: 0

		}, options);

		return this.each(function() {

			var t = $(this);

			//whether the element is currently visible
			t.appeared = false;

			if (!fn) {

				//trigger the custom event
				t.trigger('appear', settings.data);
				return;
			}

			var w = $(window);

			//fires the appear event when appropriate
			var check = function() {

				//is the element hidden?
				if (!t.is(':visible')) {

					//it became hidden
					t.appeared = false;
					return;
				}

				//is the element inside the visible window?
				var a = w.scrollLeft();
				var b = w.scrollTop();
				var o = t.offset();
				var x = o.left;
				var y = o.top;

				var ax = settings.accX;
				var ay = settings.accY;
				var th = t.height();
				var wh = w.height();
				var tw = t.width();
				var ww = w.width();

				if (y + th + ay >= b &&
					y <= b + wh + ay &&
					x + tw + ax >= a &&
					x <= a + ww + ax) {

					//trigger the custom event
					if (!t.appeared) t.trigger('appear', settings.data);

				} else {

					//it scrolled out of view
					t.appeared = false;
				}
			};

			//create a modified fn with some additional logic
			var modifiedFn = function() {

				//mark the element as visible
				t.appeared = true;

				//is this supposed to happen only once?
				if (settings.one) {

					//remove the check
					w.unbind('scroll', check);
					var i = $.inArray(check, $.fn.appear.checks);
					if (i >= 0) $.fn.appear.checks.splice(i, 1);
				}

				//trigger the original fn
				fn.apply(this, arguments);
			};

			//bind the modified fn to the element
			if (settings.one) t.one('appear', settings.data, modifiedFn);
			else t.bind('appear', settings.data, modifiedFn);

			//check whenever the window scrolls
			w.scroll(check);

			//check whenever the dom changes
			$.fn.appear.checks.push(check);

			//check now
			(check)();
		});
	};

	//keep a queue of appearance checks
	$.extend($.fn.appear, {

		checks: [],
		timeout: null,

		//process the queue
		checkAll: function() {
			var length = $.fn.appear.checks.length;
			if (length > 0) while (length--) ($.fn.appear.checks[length])();
		},

		//check the queue asynchronously
		run: function() {
			if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
			$.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
		}
	});

	//run checks when these methods are called
	$.each(['append', 'prepend', 'after', 'before', 'attr',
		'removeAttr', 'addClass', 'removeClass', 'toggleClass',
		'remove', 'css', 'show', 'hide'], function(i, n) {
		var old = $.fn[n];
		if (old) {
			$.fn[n] = function() {
				var r = old.apply(this, arguments);
				$.fn.appear.run();
				return r;
			}
		}
	});

})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:71:"/local/templates/centino-heat_s2/vendor/jquery.cookie.js?15933478612247";s:6:"source";s:56:"/local/templates/centino-heat_s2/vendor/jquery.cookie.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * jQuery Cookie Plugin v1.3.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			$.cookie(key, '', $.extend(options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));

/* End */
;
; /* Start:"a:4:{s:4:"full";s:78:"/local/templates/centino-heat_s2/vendor/jquery.validate.min.js?159334786122254";s:6:"source";s:62:"/local/templates/centino-heat_s2/vendor/jquery.validate.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Validation Plugin - v1.13.1 - 10/14/2014
 * http://jqueryvalidation.org/
 * Copyright (c) 2014 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",b).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?a("input[name='"+b.name+"']:checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){/*return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())*/ /*customized!!!*/ var check = false,re=new RegExp((typeof(VALIDATE_DATE_MASK)!=='undefined'?VALIDATE_DATE_MASK:'^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$')),adata,gg,mm,aaaa,xdata;if(re.test(a)){adata=a.split('.');if(adata.length===1){adata=a.split('-');if(adata.length===1){adata=a.split(' ');if(adata.length===1){adata=a.split('/');if(adata.length===1){adata=a.split(':');}}}}gg=parseInt(adata[0],10);mm=parseInt(adata[1],10);aaaa=parseInt(adata[2],10);xdata=new Date(aaaa,mm-1,gg,12,0,0,0);if((xdata.getUTCFullYear()===aaaa)&&(xdata.getUTCMonth()===mm-1)&&(xdata.getUTCDate()===gg)){check = true;}else{check = false;}}else{check = false;}return this.optional(b)||check;},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:72:"/local/templates/centino-heat_s2/js/jquery.uniform.min.js?15933478638308";s:6:"source";s:57:"/local/templates/centino-heat_s2/js/jquery.uniform.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(e,t){"use strict";function n(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function s(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function a(e,t,n){s(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function r(e,t,n){n?e.addClass(t):e.removeClass(t)}function l(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),r(e,n.checkedClass,a)}function u(e,t,n){r(e,n.disabledClass,t.is(":disabled"))}function o(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function c(t,s,a){var i,r,l;return a||(a={}),a=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),i=e("<div />"),r=e("<span />"),s.autoHide&&t.is(":hidden")&&"none"===t.css("display")&&i.hide(),a.divClass&&i.addClass(a.divClass),s.wrapperClass&&i.addClass(s.wrapperClass),a.spanClass&&r.addClass(a.spanClass),l=n(t,"id"),s.useID&&l&&n(i,"id",s.idPrefix+"-"+l),a.spanHtml&&r.html(a.spanHtml),i=o(t,i,a.divWrap),r=o(t,r,a.spanWrap),u(i,t,s),{div:i,span:r}}function d(t,n){var s;return n.wrapperClass?(s=e("<span />").addClass(n.wrapperClass),s=o(t,s,"wrap")):null}function f(){var t,n,s,a;return a="rgb(120,2,153)",n=e('<div style="width:0;height:0;color:'+a+'">'),e("body").append(n),s=n.get(0),t=window.getComputedStyle?window.getComputedStyle(s,"").color:(s.currentStyle||s.style||{}).color,n.remove(),t.replace(/ /g,"")!==a}function p(t){return t?e("<span />").text(t).html():""}function m(){return navigator.cpuClass&&!navigator.product}function v(){return window.XMLHttpRequest!==void 0?!0:!1}function h(e){var t;return e[0].multiple?!0:(t=n(e,"size"),!t||1>=t?!1:!0)}function C(){return!1}function w(e,t){var n="none";s(e,t,{"selectstart dragstart mousedown":C}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function b(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function y(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function g(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),y(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function k(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var H=!0,x=!1,A=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(e,t){var r,l,o,d,f;return l=t.submitDefaultHtml,e.is(":reset")&&(l=t.resetDefaultHtml),d=e.is("a, button")?function(){return e.html()||l}:function(){return p(n(e,"value"))||l},o=c(e,t,{divClass:t.buttonClass,spanHtml:d()}),r=o.div,a(e,r,t),f=!1,s(r,t,{"click touchend":function(){var t,s,a,i;f||e.is(":disabled")||(f=!0,e[0].dispatchEvent?(t=document.createEvent("MouseEvents"),t.initEvent("click",!0,!0),s=e[0].dispatchEvent(t),e.is("a")&&s&&(a=n(e,"target"),i=n(e,"href"),a&&"_self"!==a?window.open(i,a):document.location.href=i)):e.click(),f=!1)}}),w(r,t),{remove:function(){return r.after(e),r.remove(),e.unbind(t.eventNamespace),e},update:function(){i(r,t),u(r,e,t),e.detach(),o.span.html(d()).append(e)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,r,o;return n=c(e,t,{divClass:t.checkboxClass}),r=n.div,o=n.span,a(e,r,t),s(e,t,{"click touchend":function(){l(o,e,t)}}),l(o,e,t),{remove:k(e,t),update:function(){i(r,t),o.removeClass(t.checkedClass),l(o,e,t),u(r,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(t,r){function l(){b(t,p,r)}var d,f,p,v;return d=c(t,r,{divClass:r.fileClass,spanClass:r.fileButtonClass,spanHtml:r.fileButtonHtml,spanWrap:"after"}),f=d.div,v=d.span,p=e("<span />").html(r.fileDefaultHtml),p.addClass(r.filenameClass),p=o(t,p,"after"),n(t,"size")||n(t,"size",f.width()/10),a(t,f,r),l(),m()?s(t,r,{click:function(){t.trigger("change"),setTimeout(l,0)}}):s(t,r,{change:l}),w(p,r),w(v,r),{remove:function(){return p.remove(),v.remove(),t.unwrap().unbind(r.eventNamespace)},update:function(){i(f,r),b(t,p,r),u(f,t,r)}}}},{match:function(e){if(e.is("input")){var t=(" "+n(e,"type")+" ").toLowerCase(),s=" color date datetime datetime-local email month number password search tel text time url week ";return s.indexOf(t)>=0}return!1},apply:function(e,t){var s,i;return s=n(e,"type"),e.addClass(t.inputClass),i=d(e,t),a(e,e,t),t.inputAddTypeAsClass&&e.addClass(s),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(s),i&&e.unwrap()},update:C}}},{match:function(e){return e.is(":radio")},apply:function(t,r){var o,d,f;return o=c(t,r,{divClass:r.radioClass}),d=o.div,f=o.span,a(t,d,r),s(t,r,{"click touchend":function(){e.uniform.update(e(':radio[name="'+n(t,"name")+'"]'))}}),l(f,t,r),{remove:k(t,r),update:function(){i(d,r),l(f,t,r),u(d,t,r)}}}},{match:function(e){return e.is("select")&&!h(e)?!0:!1},apply:function(t,n){var r,l,o,d;return n.selectAutoWidth&&g(t,function(){d=t.width()}),r=c(t,n,{divClass:n.selectClass,spanHtml:(t.find(":selected:first")||t.find("option:first")).html(),spanWrap:"before"}),l=r.div,o=r.span,n.selectAutoWidth?g(t,function(){y(e([o[0],l[0]]),{display:"block"},function(){var e;e=o.outerWidth()-o.width(),l.width(d+e),o.width(d)})}):l.addClass("fixedWidth"),a(t,l,n),s(t,n,{change:function(){o.html(t.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var e=t.find(":selected").html();o.html()!==e&&t.trigger("change")},keyup:function(){o.html(t.find(":selected").html())}}),w(o,n),{remove:function(){return o.remove(),t.unwrap().unbind(n.eventNamespace),t},update:function(){n.selectAutoWidth?(e.uniform.restore(t),t.uniform(n)):(i(l,n),o.html(t.find(":selected").html()),u(l,t,n))}}}},{match:function(e){return e.is("select")&&h(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:C}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:C}}}];m()&&!v()&&(H=!1),e.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},e.fn.uniform=function(t){var n=this;return t=e.extend({},e.uniform.defaults,t),x||(x=!0,f()&&(H=!1)),H?(t.resetSelector&&e(t.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(n)},10)}),this.each(function(){var n,s,a,i=e(this);if(i.data("uniformed"))return e.uniform.update(i),void 0;for(n=0;A.length>n;n+=1)if(s=A[n],s.match(i,t))return a=s.apply(i,t),i.data("uniformed",a),e.uniform.elements.push(i.get(0)),void 0})):this},e.uniform.restore=e.fn.uniform.restore=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n,s=e(this);n=s.data("uniformed"),n&&(n.remove(),t=e.inArray(this,e.uniform.elements),t>=0&&e.uniform.elements.splice(t,1),s.removeData("uniformed"))})},e.uniform.update=e.fn.uniform.update=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n=e(this);t=n.data("uniformed"),t&&t.update(n,t.options)})}})(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/local/templates/centino-heat_s2/js/jquery-ui.min.js?159334786332162";s:6:"source";s:52:"/local/templates/centino-heat_s2/js/jquery-ui.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery UI - v1.12.1 - 2017-05-11
* http://jqueryui.com
* Includes: widget.js, position.js, keycode.js, unique-id.js, widgets/autocomplete.js, widgets/menu.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.1";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),l=this;return a?this.length||"instance"!==o?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):l=void 0:(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))})},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(u.test(t[0])?e/100:1),parseFloat(t[1])*(u.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0];return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var n,o=Math.max,a=Math.abs,r=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,u=/%$/,d=t.fn.position;t.position={scrollbarWidth:function(){if(void 0!==n)return n;var e,i,s=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return t("body").append(s),e=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),n=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,o="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight;return{width:o?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType,o=!s&&!n;return{element:i,isWindow:s,isDocument:n,offset:o?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(n){if(!n||!n.of)return d.apply(this,arguments);n=t.extend({},n);var u,p,f,g,m,_,v=t(n.of),b=t.position.getWithinInfo(n.within),y=t.position.getScrollInfo(b),w=(n.collision||"flip").split(" "),k={};return _=s(v),v[0].preventDefault&&(n.at="left top"),p=_.width,f=_.height,g=_.offset,m=t.extend({},g),t.each(["my","at"],function(){var t,e,i=(n[this]||"").split(" ");1===i.length&&(i=r.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]),i[0]=r.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),k[this]=[t?t[0]:0,e?e[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===n.at[0]?m.left+=p:"center"===n.at[0]&&(m.left+=p/2),"bottom"===n.at[1]?m.top+=f:"center"===n.at[1]&&(m.top+=f/2),u=e(k.at,p,f),m.left+=u[0],m.top+=u[1],this.each(function(){var s,r,l=t(this),h=l.outerWidth(),c=l.outerHeight(),d=i(this,"marginLeft"),_=i(this,"marginTop"),x=h+d+i(this,"marginRight")+y.width,C=c+_+i(this,"marginBottom")+y.height,D=t.extend({},m),T=e(k.my,l.outerWidth(),l.outerHeight());"right"===n.my[0]?D.left-=h:"center"===n.my[0]&&(D.left-=h/2),"bottom"===n.my[1]?D.top-=c:"center"===n.my[1]&&(D.top-=c/2),D.left+=T[0],D.top+=T[1],s={marginLeft:d,marginTop:_},t.each(["left","top"],function(e,i){t.ui.position[w[e]]&&t.ui.position[w[e]][i](D,{targetWidth:p,targetHeight:f,elemWidth:h,elemHeight:c,collisionPosition:s,collisionWidth:x,collisionHeight:C,offset:[u[0]+T[0],u[1]+T[1]],my:n.my,at:n.at,within:b,elem:l})}),n.using&&(r=function(t){var e=g.left-D.left,i=e+p-h,s=g.top-D.top,r=s+f-c,u={target:{element:v,left:g.left,top:g.top,width:p,height:f},element:{element:l,left:D.left,top:D.top,width:h,height:c},horizontal:0>i?"left":e>0?"right":"center",vertical:0>r?"top":s>0?"bottom":"middle"};h>p&&p>a(e+i)&&(u.horizontal="center"),c>f&&f>a(s+r)&&(u.vertical="middle"),u.important=o(a(e),a(i))>o(a(s),a(r))?"horizontal":"vertical",n.using.call(this,t,u)}),l.offset(t.extend(D,{using:r}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=t.left-e.collisionPosition.marginLeft,l=n-r,h=r+e.collisionWidth-a-n;e.collisionWidth>a?l>0&&0>=h?(i=t.left+l+e.collisionWidth-a-n,t.left+=l-i):t.left=h>0&&0>=l?n:l>h?n+a-e.collisionWidth:n:l>0?t.left+=l:h>0?t.left-=h:t.left=o(t.left-r,t.left)},top:function(t,e){var i,s=e.within,n=s.isWindow?s.scrollTop:s.offset.top,a=e.within.height,r=t.top-e.collisionPosition.marginTop,l=n-r,h=r+e.collisionHeight-a-n;e.collisionHeight>a?l>0&&0>=h?(i=t.top+l+e.collisionHeight-a-n,t.top+=l-i):t.top=h>0&&0>=l?n:l>h?n+a-e.collisionHeight:n:l>0?t.top+=l:h>0?t.top-=h:t.top=o(t.top-r,t.top)}},flip:{left:function(t,e){var i,s,n=e.within,o=n.offset.left+n.scrollLeft,r=n.width,l=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-e.collisionPosition.marginLeft,c=h-l,u=h+e.collisionWidth-r-l,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,p="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0];0>c?(i=t.left+d+p+f+e.collisionWidth-r-o,(0>i||a(c)>i)&&(t.left+=d+p+f)):u>0&&(s=t.left-e.collisionPosition.marginLeft+d+p+f-l,(s>0||u>a(s))&&(t.left+=d+p+f))},top:function(t,e){var i,s,n=e.within,o=n.offset.top+n.scrollTop,r=n.height,l=n.isWindow?n.scrollTop:n.offset.top,h=t.top-e.collisionPosition.marginTop,c=h-l,u=h+e.collisionHeight-r-l,d="top"===e.my[1],p=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1];0>c?(s=t.top+p+f+g+e.collisionHeight-r-o,(0>s||a(c)>s)&&(t.top+=p+f+g)):u>0&&(i=t.top-e.collisionPosition.marginTop+p+f+g-l,(i>0||u>a(i))&&(t.top+=p+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.fn.extend({uniqueId:function(){var t=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.safeActiveElement=function(t){var e;try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.widget("ui.menu",{version:"1.12.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault()},"click .ui-menu-item":function(e){var i=t(e.target),s=t(t.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&s.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(e){if(!this.previousFilter){var i=t(e.target).closest(".ui-menu-item"),s=t(e.currentTarget);i[0]===s[0]&&(this._removeClass(s.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,s))}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this.element.find(this.options.items).eq(0);e||this.focus(t,i)},blur:function(e){this._delay(function(){var i=!t.contains(this.element[0],t.ui.safeActiveElement(this.document[0]));i&&this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),i=e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),i.children().each(function(){var e=t(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var i,s,n,o,a=!0;switch(e.keyCode){case t.ui.keyCode.PAGE_UP:this.previousPage(e);break;case t.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case t.ui.keyCode.HOME:this._move("first","first",e);break;case t.ui.keyCode.END:this._move("last","last",e);break;case t.ui.keyCode.UP:this.previous(e);break;case t.ui.keyCode.DOWN:this.next(e);break;case t.ui.keyCode.LEFT:this.collapse(e);break;case t.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case t.ui.keyCode.ENTER:case t.ui.keyCode.SPACE:this._activate(e);break;case t.ui.keyCode.ESCAPE:this.collapse(e);break;default:a=!1,s=this.previousFilter||"",o=!1,n=e.keyCode>=96&&105>=e.keyCode?""+(e.keyCode-96):String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),n===s?o=!0:n=s+n,i=this._filterMenuItems(n),i=o&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(e.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(e,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}a&&e.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var e,i,s,n,o,a=this,r=this.options.icons.submenu,l=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),s=l.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=t(this),i=e.prev(),s=t("<span>").data("ui-menu-submenu-caret",!0);a._addClass(s,"ui-menu-icon","ui-icon "+r),i.attr("aria-haspopup","true").prepend(s),e.attr("aria-labelledby",i.attr("id"))}),this._addClass(s,"ui-menu","ui-widget ui-widget-content ui-front"),e=l.add(this.element),i=e.find(this.options.items),i.not(".ui-menu-item").each(function(){var e=t(this);a._isDivider(e)&&a._addClass(e,"ui-menu-divider","ui-widget-content")}),n=i.not(".ui-menu-item, .ui-menu-divider"),o=n.children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(n,"ui-menu-item")._addClass(o,"ui-menu-item-wrapper"),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!t.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){if("icons"===t){var i=this.element.find(".ui-menu-icon");this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)}this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t+""),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i,s,n;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),s=this.active.children(".ui-menu-item-wrapper"),this._addClass(s,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),n=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(n,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=e.children(".ui-menu"),i.length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(e){var i,s,n,o,a,r;this._hasScroll()&&(i=parseFloat(t.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(t.css(this.activeMenu[0],"paddingTop"))||0,n=e.offset().top-this.activeMenu.offset().top-i-s,o=this.activeMenu.scrollTop(),a=this.activeMenu.height(),r=e.outerHeight(),0>n?this.activeMenu.scrollTop(o+n):n+r>a&&this.activeMenu.scrollTop(o+n-a+r))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(e){var i=t.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:t(e&&e.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(e),this._removeClass(s.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=s},this.delay)},_close:function(t){t||(t=this.active?this.active.parent():this.element),t.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!t(e.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(t,e,i){var s;this.active&&(s="first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[t+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[e]()),this.focus(i,s)},nextPage:function(e){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=t(this),0>i.offset().top-s-n}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(e),void 0)},previousPage:function(e){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=t(this),i.offset().top-s+n>0}),this.focus(e,i)):this.focus(e,this.activeMenu.find(this.options.items).first())),void 0):(this.next(e),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||t(e.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,i)},_filterMenuItems:function(e){var i=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))})}}),t.widget("ui.autocomplete",{version:"1.12.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var e,i,s,n=this.element[0].nodeName.toLowerCase(),o="textarea"===n,a="input"===n;this.isMultiLine=o||!a&&this._isContentEditable(this.element),this.valueMethod=this.element[o||a?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return e=!0,s=!0,i=!0,void 0;e=!1,s=!1,i=!1;var o=t.ui.keyCode;switch(n.keyCode){case o.PAGE_UP:e=!0,this._move("previousPage",n);break;case o.PAGE_DOWN:e=!0,this._move("nextPage",n);break;case o.UP:e=!0,this._keyEvent("previous",n);break;case o.DOWN:e=!0,this._keyEvent("next",n);break;case o.ENTER:this.menu.active&&(e=!0,n.preventDefault(),this.menu.select(n));break;case o.TAB:this.menu.active&&this.menu.select(n);break;case o.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(e)return e=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=t.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(t){return s?(s=!1,t.preventDefault(),void 0):(this._searchTimeout(t),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(t),this._change(t),void 0)}}),this._initSource(),this.menu=t("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,this.element[0]!==t.ui.safeActiveElement(this.document[0])&&this.element.trigger("focus")})},menufocus:function(e,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){t(e.target).trigger(e.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:n})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&t.trim(s).length&&(this.liveRegion.children().hide(),t("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,i){var s=i.item.data("ui-autocomplete-item"),n=this.previous;this.element[0]!==t.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=n,this._delay(function(){this.previous=n,this.selectedItem=s})),!1!==this._trigger("select",e,{item:s})&&this._value(s.value),this.term=this._value(),this.close(e),this.selectedItem=s}}),this.liveRegion=t("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var i=this.menu.element[0];return e.target===this.element[0]||e.target===i||t.contains(i,e.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e&&(e=e.jquery||e.nodeType?t(e):this.document.find(e).eq(0)),e&&e[0]||(e=this.element.closest(".ui-front, dialog")),e.length||(e=this.document[0].body),e},_initSource:function(){var e,i,s=this;t.isArray(this.options.source)?(e=this.options.source,this.source=function(i,s){s(t.ui.autocomplete.filter(e,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(e,n){s.xhr&&s.xhr.abort(),s.xhr=t.ajax({url:i,data:e,dataType:"json",success:function(t){n(t)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(t){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),i=this.menu.element.is(":visible"),s=t.altKey||t.ctrlKey||t.metaKey||t.shiftKey;(!e||e&&!i&&!s)&&(this.selectedItem=null,this.search(null,t))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):this._trigger("search",e)!==!1?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return t.proxy(function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")},this)},__response:function(t){t&&(t=this._normalize(t)),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:t.map(e,function(e){return"string"==typeof e?{label:e,value:e}:t.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var i=this.menu.element.empty();this._renderMenu(i,e),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(t.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(e,i){var s=this;t.each(i,function(t,i){s._renderItemData(e,i)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(e,i){return t("<li>").append(t("<div>").text(i.label)).appendTo(e)},_move:function(t,e){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[t](e),void 0):(this.search(null,e),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),t.extend(t.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,i){var s=RegExp(t.ui.autocomplete.escapeRegex(i),"i");return t.grep(e,function(t){return s.test(t.label||t.value||t)})}}),t.widget("ui.autocomplete",t.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(t>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),t("<div>").text(i).appendTo(this.liveRegion))}}),t.ui.autocomplete});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:65:"/local/templates/centino-heat_s2/js/jqModal.min.js?15933478632622";s:6:"source";s:46:"/local/templates/centino-heat_s2/js/jqModal.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(n){n.fn.jqm=function(t){var o=n.extend({},n.jqm.params,t);return this.each(function(){var t=n(this),e=n(this).data("jqm");e||(e={ID:m++}),t.data("jqm",n.extend(o,e)).addClass("jqm-init"),o.trigger&&n(this).jqmAddTrigger(o.trigger)})},n.fn.jqmAddTrigger=function(o){return this.each(function(){s(n(this),"jqmShow",o)||t("jqmAddTrigger must be called on initialized modals")})},n.fn.jqmAddClose=function(o){return this.each(function(){s(n(this),"jqmHide",o)||t("jqmAddClose must be called on initialized modals")})},n.fn.jqmShow=function(t){return this.each(function(){!this._jqmShown&&o(n(this),t)})},n.fn.jqmHide=function(t){return this.each(function(){this._jqmShown&&e(n(this),t)})};var t=function(n){window.console&&window.console.error&&window.console.error(n)},o=function(t,o){var e=t.data("jqm"),o=o||window.event,i=parseInt(t.css("z-index")),i=i>0?i:3e3,a=n("<div></div>").addClass(e.overlayClass).css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":i-1,opacity:e.overlay/100}),s={w:t,c:e,o:a,t:o};if(t.css("z-index",i),e.ajax){var d=e.target||t,c=e.ajax;d="string"==typeof d?n(d,t):n(d),"@"==c.substr(0,1)&&(c=n(o).attr(c.substring(1))),d.html(e.ajaxText).load(c,function(){e.onLoad&&e.onLoad.call(this,s),r(s)})}else r(s)},e=function(n,t){var o=n.data("jqm"),t=t||window.event,e={w:n,c:o,o:n.data("jqmv"),t:t};d(e)},i=function(t){return t.w[0]._jqmShown?!1:(t.c.overlay>0&&t.o.prependTo("body"),t.w.show(),n.jqm.focusFunc(t.w),!0)},a=function(n){return n.w.hide()&&n.o&&n.o.remove(),!0},s=function(t,o,e){return t.data("jqm")?n(e).each(function(){this[o]=this[o]||[],this[o].push(t)}).click(function(){var t=this;return n.each(this[o],function(n,e){e[o](t)}),!1}):!1},r=function(t){var o=t.w,e=t.o,i=t.c;i.onShow(t)!==!1&&(o[0]._jqmShown=!0,i.modal?(!h[0]&&c("bind"),h.push(o)):o.jqmAddClose(e),i.closeClass&&o.jqmAddClose(n("."+i.closeClass,o)),i.toTop&&e&&o.before('<span id="jqmP'+i.ID+'"></span>').insertAfter(e),o.data("jqmv",e))},d=function(t){var o=t.w,e=t.o,i=t.c;i.onHide(t)!==!1&&(o[0]._jqmShown=!1,i.modal&&(h.pop(),!h[0]&&c("unbind")),i.toTop&&e&&n("#jqmP"+i.ID).after(o).remove())},c=function(t){n(document)[t]("keypress keydown mousedown",u)},u=function(t){var o=n(t.target).data("jqm")||n(t.target).parents(".jqm-init:first").data("jqm"),e=h[h.length-1].data("jqm");return o&&o.ID==e.ID?!0:n.jqm.focusFunc(e)},m=0,h=[];n.jqm={params:{overlay:50,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:!1,target:!1,ajaxText:"",modal:!1,toTop:!1,onShow:i,onHide:a,onLoad:!1},focusFunc:function(t){return n(":input:visible:first",t).focus(),!1}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:77:"/local/templates/centino-heat_s2/js/detectmobilebrowser.min.js?15933478632059";s:6:"source";s:58:"/local/templates/centino-heat_s2/js/detectmobilebrowser.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(i){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4))}(navigator.userAgent||navigator.vendor||window.opera);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:91:"/local/templates/centino-heat_s2/vendor/flexslider/jquery.flexslider.min.js?159334786122239";s:6:"source";s:71:"/local/templates/centino-heat_s2/vendor/flexslider/jquery.flexslider.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){var t=!0;e.flexslider=function(a,n){var i=e(a);i.vars=e.extend({},e.flexslider.defaults,n);var s,r=i.vars.namespace,o=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,l=("ontouchstart"in window||o||window.DocumentTouch&&document instanceof DocumentTouch)&&i.vars.touch,c="click touchend MSPointerUp keyup",d="",u="vertical"===i.vars.direction,v=i.vars.reverse,p=i.vars.itemWidth>0,m="fade"===i.vars.animation,f=""!==i.vars.asNavFor,g={};e.data(a,"flexslider",i),g={init:function(){i.animating=!1,i.currentSlide=parseInt(i.vars.startAt?i.vars.startAt:0,10),isNaN(i.currentSlide)&&(i.currentSlide=0),i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=i.vars.selector.substr(0,i.vars.selector.search(" ")),i.slides=e(i.vars.selector,i),i.container=e(i.containerSelector,i),i.count=i.slides.length,i.syncExists=e(i.vars.sync).length>0,"slide"===i.vars.animation&&(i.vars.animation="swing"),i.prop=u?"top":"marginLeft",i.args={},i.manualPause=!1,i.stopped=!1,i.started=!1,i.startTimeout=null,i.transitions=!i.vars.video&&!m&&i.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return i.pfx=t[a].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",!0;return!1}(),i.ensureAnimationEnd="",""!==i.vars.controlsContainer&&(i.controlsContainer=e(i.vars.controlsContainer).length>0&&e(i.vars.controlsContainer)),""!==i.vars.manualControls&&(i.manualControls=e(i.vars.manualControls).length>0&&e(i.vars.manualControls)),""!==i.vars.customDirectionNav&&(i.customDirectionNav=2===e(i.vars.customDirectionNav).length&&e(i.vars.customDirectionNav)),i.vars.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),i.setup("init"),i.vars.controlNav&&g.controlNav.setup(),i.vars.directionNav&&g.directionNav.setup(),i.vars.keyboard&&(1===e(i.containerSelector).length||i.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!i.animating&&(39===t||37===t)){var a=39===t?i.getTarget("next"):37===t?i.getTarget("prev"):!1;i.flexAnimate(a,i.vars.pauseOnAction)}}),i.vars.mousewheel&&i.bind("mousewheel",function(e,t,a,n){e.preventDefault();var s=0>t?i.getTarget("next"):i.getTarget("prev");i.flexAnimate(s,i.vars.pauseOnAction)}),i.vars.pausePlay&&g.pausePlay.setup(),i.vars.slideshow&&i.vars.pauseInvisible&&g.pauseInvisible.init(),i.vars.slideshow&&(i.vars.pauseOnHover&&i.hover(function(){i.manualPlay||i.manualPause||i.pause()},function(){i.manualPause||i.manualPlay||i.stopped||i.play()}),i.vars.pauseInvisible&&g.pauseInvisible.isHidden()||(i.vars.initDelay>0?i.startTimeout=setTimeout(i.play,i.vars.initDelay):i.play())),f&&g.asNav.setup(),l&&i.vars.touch&&g.touch(),(!m||m&&i.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",g.resize),i.find("img").attr("draggable","false"),setTimeout(function(){i.vars.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(r+"active-slide").eq(i.currentItem).addClass(r+"active-slide"),o?(a._slider=i,i.slides.each(function(){var t=this;t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),t.addEventListener("MSGestureTap",function(t){t.preventDefault();var a=e(this),n=a.index();e(i.vars.asNavFor).data("flexslider").animating||a.hasClass("active")||(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction,!1,!0,!0))})})):i.slides.on(c,function(t){t.preventDefault();var a=e(this),n=a.index(),s=a.offset().left-e(i).scrollLeft();0>=s&&a.hasClass(r+"active-slide")?i.flexAnimate(i.getTarget("prev"),!0):e(i.vars.asNavFor).data("flexslider").animating||a.hasClass(r+"active-slide")||(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?g.controlNav.setupManual():g.controlNav.setupPaging()},setupPaging:function(){var t,a,n="thumbnails"===i.vars.controlNav?"control-thumbs":"control-paging",s=1;if(i.controlNavScaffold=e('<ol class="'+r+"control-nav "+r+n+'"></ol>'),i.pagingCount>1)for(var o=0;o<i.pagingCount;o++){a=i.slides.eq(o),void 0===a.attr("data-thumb-alt")&&a.attr("data-thumb-alt","");var l=""!==a.attr("data-thumb-alt")?l=' alt="'+a.attr("data-thumb-alt")+'"':"";if(t="thumbnails"===i.vars.controlNav?'<img src="'+a.attr("data-thumb")+'"'+l+"/>":'<a href="#">'+s+"</a>","thumbnails"===i.vars.controlNav&&!0===i.vars.thumbCaptions){var u=a.attr("data-thumbcaption");""!==u&&void 0!==u&&(t+='<span class="'+r+'caption">'+u+"</span>")}i.controlNavScaffold.append("<li>"+t+"</li>"),s++}i.controlsContainer?e(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),g.controlNav.set(),g.controlNav.active(),i.controlNavScaffold.delegate("a, img",c,function(t){if(t.preventDefault(),""===d||d===t.type){var a=e(this),n=i.controlNav.index(a);a.hasClass(r+"active")||(i.direction=n>i.currentSlide?"next":"prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===d&&(d=t.type),g.setToClearWatchedEvent()})},setupManual:function(){i.controlNav=i.manualControls,g.controlNav.active(),i.controlNav.bind(c,function(t){if(t.preventDefault(),""===d||d===t.type){var a=e(this),n=i.controlNav.index(a);a.hasClass(r+"active")||(n>i.currentSlide?i.direction="next":i.direction="prev",i.flexAnimate(n,i.vars.pauseOnAction))}""===d&&(d=t.type),g.setToClearWatchedEvent()})},set:function(){var t="thumbnails"===i.vars.controlNav?"img":"a";i.controlNav=e("."+r+"control-nav li "+t,i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(r+"active").eq(i.animatingTo).addClass(r+"active")},update:function(t,a){i.pagingCount>1&&"add"===t?i.controlNavScaffold.append(e('<li><a href="#">'+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(a).closest("li").remove(),g.controlNav.set(),i.pagingCount>1&&i.pagingCount!==i.controlNav.length?i.update(a,t):g.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+r+'direction-nav"><li class="'+r+'nav-prev"><a class="'+r+'prev" href="#">'+i.vars.prevText+'</a></li><li class="'+r+'nav-next"><a class="'+r+'next" href="#">'+i.vars.nextText+"</a></li></ul>");i.customDirectionNav?i.directionNav=i.customDirectionNav:i.controlsContainer?(e(i.controlsContainer).append(t),i.directionNav=e("."+r+"direction-nav li a",i.controlsContainer)):(i.append(t),i.directionNav=e("."+r+"direction-nav li a",i)),g.directionNav.update(),i.directionNav.bind(c,function(t){t.preventDefault();var a;(""===d||d===t.type)&&(a=e(this).hasClass(r+"next")?i.getTarget("next"):i.getTarget("prev"),i.flexAnimate(a,i.vars.pauseOnAction)),""===d&&(d=t.type),g.setToClearWatchedEvent()})},update:function(){var e=r+"disabled";1===i.pagingCount?i.directionNav.addClass(e).attr("tabindex","-1"):i.vars.animationLoop?i.directionNav.removeClass(e).removeAttr("tabindex"):0===i.animatingTo?i.directionNav.removeClass(e).filter("."+r+"prev").addClass(e).attr("tabindex","-1"):i.animatingTo===i.last?i.directionNav.removeClass(e).filter("."+r+"next").addClass(e).attr("tabindex","-1"):i.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+r+'pauseplay"><a href="#"></a></div>');i.controlsContainer?(i.controlsContainer.append(t),i.pausePlay=e("."+r+"pauseplay a",i.controlsContainer)):(i.append(t),i.pausePlay=e("."+r+"pauseplay a",i)),g.pausePlay.update(i.vars.slideshow?r+"pause":r+"play"),i.pausePlay.bind(c,function(t){t.preventDefault(),(""===d||d===t.type)&&(e(this).hasClass(r+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())),""===d&&(d=t.type),g.setToClearWatchedEvent()})},update:function(e){"play"===e?i.pausePlay.removeClass(r+"pause").addClass(r+"play").html(i.vars.playText):i.pausePlay.removeClass(r+"play").addClass(r+"pause").html(i.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),i.animating?e.preventDefault():(i.pause(),a._gesture.addPointer(e.pointerId),T=0,c=u?i.h:i.w,f=Number(new Date),l=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*c:(i.currentSlide+i.cloneOffset)*c)}function t(e){e.stopPropagation();var t=e.target._slider;if(t){var n=-e.translationX,i=-e.translationY;return T+=u?i:n,d=T,y=u?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){a._gesture.stop()}):void((!y||Number(new Date)-f>500)&&(e.preventDefault(),!m&&t.transitions&&(t.vars.animationLoop||(d=T/(0===t.currentSlide&&0>T||t.currentSlide===t.last&&T>0?Math.abs(T)/c+2:1)),t.setProps(l+d,"setTouch"))))}}function n(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!y&&null!==d){var a=v?-d:d,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):m||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}s=null,r=null,d=null,l=null,T=0}}var s,r,l,c,d,f,g,h,S,y=!1,x=0,b=0,T=0;o?(a.style.msTouchAction="none",a._gesture=new MSGesture,a._gesture.target=a,a.addEventListener("MSPointerDown",e,!1),a._slider=i,a.addEventListener("MSGestureChange",t,!1),a.addEventListener("MSGestureEnd",n,!1)):(g=function(e){i.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(i.pause(),c=u?i.h:i.w,f=Number(new Date),x=e.touches[0].pageX,b=e.touches[0].pageY,l=p&&v&&i.animatingTo===i.last?0:p&&v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:p&&i.currentSlide===i.last?i.limit:p?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:v?(i.last-i.currentSlide+i.cloneOffset)*c:(i.currentSlide+i.cloneOffset)*c,s=u?b:x,r=u?x:b,a.addEventListener("touchmove",h,!1),a.addEventListener("touchend",S,!1))},h=function(e){x=e.touches[0].pageX,b=e.touches[0].pageY,d=u?s-b:s-x,y=u?Math.abs(d)<Math.abs(x-r):Math.abs(d)<Math.abs(b-r);var t=500;(!y||Number(new Date)-f>t)&&(e.preventDefault(),!m&&i.transitions&&(i.vars.animationLoop||(d/=0===i.currentSlide&&0>d||i.currentSlide===i.last&&d>0?Math.abs(d)/c+2:1),i.setProps(l+d,"setTouch")))},S=function(e){if(a.removeEventListener("touchmove",h,!1),i.animatingTo===i.currentSlide&&!y&&null!==d){var t=v?-d:d,n=t>0?i.getTarget("next"):i.getTarget("prev");i.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(t)>50||Math.abs(t)>c/2)?i.flexAnimate(n,i.vars.pauseOnAction):m||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}a.removeEventListener("touchend",S,!1),s=null,r=null,d=null,l=null},a.addEventListener("touchstart",g,!1))},resize:function(){!i.animating&&i.is(":visible")&&(p||i.doMath(),m?g.smoothHeight():p?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):u?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(i.vars.smoothHeight&&g.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(e){if(!u||m){var t=m?i:i.viewport;e?t.animate({height:i.slides.eq(i.animatingTo).innerHeight()},e):t.innerHeight(i.slides.eq(i.animatingTo).innerHeight())}},sync:function(t){var a=e(i.vars.sync).data("flexslider"),n=i.animatingTo;switch(t){case"animate":a.flexAnimate(n,i.vars.pauseOnAction,!1,!0);break;case"play":a.playing||a.asNav||a.play();break;case"pause":a.pause()}},uniqueID:function(t){return t.filter("[id]").add(t.find("[id]")).each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")}),t},pauseInvisible:{visProp:null,init:function(){var e=g.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){g.pauseInvisible.isHidden()?i.startTimeout?clearTimeout(i.startTimeout):i.pause():i.started?i.play():i.vars.initDelay>0?setTimeout(i.play,i.vars.initDelay):i.play()})}},isHidden:function(){var e=g.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(s),s=setTimeout(function(){d=""},3e3)}},i.flexAnimate=function(t,a,n,s,o){if(i.vars.animationLoop||t===i.currentSlide||(i.direction=t>i.currentSlide?"next":"prev"),f&&1===i.pagingCount&&(i.direction=i.currentItem<t?"next":"prev"),!i.animating&&(i.canAdvance(t,o)||n)&&i.is(":visible")){if(f&&s){var c=e(i.vars.asNavFor).data("flexslider");if(i.atEnd=0===t||t===i.count-1,c.flexAnimate(t,!0,!1,!0,o),i.direction=i.currentItem<t?"next":"prev",c.direction=i.direction,Math.ceil((t+1)/i.visible)-1===i.currentSlide||0===t)return i.currentItem=t,i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),!1;i.currentItem=t,i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),t=Math.floor(t/i.visible)}if(i.animating=!0,i.animatingTo=t,a&&i.pause(),i.vars.before(i),i.syncExists&&!o&&g.sync("animate"),i.vars.controlNav&&g.controlNav.active(),i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),i.atEnd=0===t||t===i.last,i.vars.directionNav&&g.directionNav.update(),t===i.last&&(i.vars.end(i),i.vars.animationLoop||i.pause()),m)l?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(t).css({opacity:1,zIndex:2}),i.wrapup(y)):(i.slides.eq(i.currentSlide).css({zIndex:1}).animate({opacity:0},i.vars.animationSpeed,i.vars.easing),i.slides.eq(t).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing,i.wrapup));else{var d,h,S,y=u?i.slides.filter(":first").height():i.computedW;p?(d=i.vars.itemMargin,S=(i.itemW+d)*i.move*i.animatingTo,h=S>i.limit&&1!==i.visible?i.limit:S):h=0===i.currentSlide&&t===i.count-1&&i.vars.animationLoop&&"next"!==i.direction?v?(i.count+i.cloneOffset)*y:0:i.currentSlide===i.last&&0===t&&i.vars.animationLoop&&"prev"!==i.direction?v?0:(i.count+1)*y:v?(i.count-1-t+i.cloneOffset)*y:(t+i.cloneOffset)*y,i.setProps(h,"",i.vars.animationSpeed),i.transitions?(i.vars.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(i.ensureAnimationEnd),i.wrapup(y)}),clearTimeout(i.ensureAnimationEnd),i.ensureAnimationEnd=setTimeout(function(){i.wrapup(y)},i.vars.animationSpeed+100)):i.container.animate(i.args,i.vars.animationSpeed,i.vars.easing,function(){i.wrapup(y)})}i.vars.smoothHeight&&g.smoothHeight(i.vars.animationSpeed)}},i.wrapup=function(e){m||p||(0===i.currentSlide&&i.animatingTo===i.last&&i.vars.animationLoop?i.setProps(e,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&i.vars.animationLoop&&i.setProps(e,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,i.vars.after(i)},i.animateSlides=function(){!i.animating&&t&&i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.animatedSlides=null,i.playing=!1,i.vars.pausePlay&&g.pausePlay.update("play"),i.syncExists&&g.sync("pause")},i.play=function(){i.playing&&clearInterval(i.animatedSlides),i.animatedSlides=i.animatedSlides||setInterval(i.animateSlides,i.vars.slideshowSpeed),i.started=i.playing=!0,i.vars.pausePlay&&g.pausePlay.update("pause"),i.syncExists&&g.sync("play")},i.stop=function(){i.pause(),i.stopped=!0},i.canAdvance=function(e,t){var a=f?i.pagingCount-1:i.last;return t?!0:f&&i.currentItem===i.count-1&&0===e&&"prev"===i.direction?!0:f&&0===i.currentItem&&e===i.pagingCount-1&&"next"!==i.direction?!1:e!==i.currentSlide||f?i.vars.animationLoop?!0:i.atEnd&&0===i.currentSlide&&e===a&&"next"!==i.direction?!1:i.atEnd&&i.currentSlide===a&&0===e&&"next"===i.direction?!1:!0:!1},i.getTarget=function(e){return i.direction=e,"next"===e?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(e,t,a){var n=function(){var a=e?e:(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo,n=function(){if(p)return"setTouch"===t?e:v&&i.animatingTo===i.last?0:v?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:a;switch(t){case"setTotal":return v?(i.count-1-i.currentSlide+i.cloneOffset)*e:(i.currentSlide+i.cloneOffset)*e;case"setTouch":return v?e:e;case"jumpEnd":return v?e:i.count*e;case"jumpStart":return v?i.count*e:e;default:return e}}();return-1*n+"px"}();i.transitions&&(n=u?"translate3d(0,"+n+",0)":"translate3d("+n+",0,0)",a=void 0!==a?a/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",a),i.container.css("transition-duration",a)),i.args[i.prop]=n,(i.transitions||void 0===a)&&i.container.css(i.args),i.container.css("transform",n)},i.setup=function(t){if(m)i.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(l?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):0==i.vars.fadeFirstSlide?i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).css({opacity:1}):i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing)),i.vars.smoothHeight&&g.smoothHeight();else{var a,n;"init"===t&&(i.viewport=e('<div class="'+r+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,v&&(n=e.makeArray(i.slides).reverse(),i.slides=e(n),i.container.empty().append(i.slides))),i.vars.animationLoop&&!p&&(i.cloneCount=2,i.cloneOffset=1,"init"!==t&&i.container.find(".clone").remove(),i.container.append(g.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(g.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),i.newSlides=e(i.vars.selector,i),a=v?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,u&&!p?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(a*i.h,"init")},"init"===t?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(a*i.computedW,"init"),setTimeout(function(){i.doMath(),i.newSlides.css({width:i.computedW,marginRight:i.computedM,"float":"left",display:"block"}),i.vars.smoothHeight&&g.smoothHeight()},"init"===t?100:0))}i.slides.removeClass(r+"active-slide").eq(i.currentSlide).addClass(r+"active-slide"),i.vars.init(i)},i.doMath=function(){var e=i.slides.first(),t=i.vars.itemMargin,a=i.vars.minItems,n=i.vars.maxItems;i.w=void 0===i.viewport?i.width():i.viewport.width(),i.h=e.height(),i.boxPadding=e.outerWidth()-e.width(),p?(i.itemT=i.vars.itemWidth+t,i.itemM=t,i.minW=a?a*i.itemT:i.w,i.maxW=n?n*i.itemT-t:i.w,i.itemW=i.minW>i.w?(i.w-t*(a-1))/a:i.maxW<i.w?(i.w-t*(n-1))/n:i.vars.itemWidth>i.w?i.w:i.vars.itemWidth,i.visible=Math.floor(i.w/i.itemW),i.move=i.vars.move>0&&i.vars.move<i.visible?i.vars.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:i.vars.itemWidth>i.w?i.itemW*(i.count-1)+t*(i.count-1):(i.itemW+t)*i.count-i.w-t):(i.itemW=i.w,i.itemM=t,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding,i.computedM=i.itemM},i.update=function(e,t){i.doMath(),p||(e<i.currentSlide?i.currentSlide+=1:e<=i.currentSlide&&0!==e&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),i.vars.controlNav&&!i.manualControls&&("add"===t&&!p||i.pagingCount>i.controlNav.length?g.controlNav.update("add"):("remove"===t&&!p||i.pagingCount<i.controlNav.length)&&(p&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),g.controlNav.update("remove",i.last))),i.vars.directionNav&&g.directionNav.update()},i.addSlide=function(t,a){var n=e(t);i.count+=1,i.last=i.count-1,u&&v?void 0!==a?i.slides.eq(i.count-a).after(n):i.container.prepend(n):void 0!==a?i.slides.eq(a).before(n):i.container.append(n),i.update(a,"add"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.added(i)},i.removeSlide=function(t){var a=isNaN(t)?i.slides.index(e(t)):t;i.count-=1,i.last=i.count-1,isNaN(t)?e(t,i.slides).remove():u&&v?i.slides.eq(i.last).remove():i.slides.eq(t).remove(),i.doMath(),i.update(a,"remove"),i.slides=e(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.removed(i)},g.init()},e(window).blur(function(e){t=!1}).focus(function(e){t=!0}),e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var a=e(this),n=t.selector?t.selector:".slides > li",i=a.find(n);1===i.length&&t.allowOneSlide===!1||0===i.length?(i.fadeIn(400),t.start&&t.start(a)):void 0===a.data("flexslider")&&new e.flexslider(this,t)});var a=e(this).data("flexslider");switch(t){case"play":a.play();break;case"pause":a.pause();break;case"stop":a.stop();break;case"next":a.flexAnimate(a.getTarget("next"),!0);break;case"prev":case"previous":a.flexAnimate(a.getTarget("prev"),!0);break;default:"number"==typeof t&&a.flexAnimate(t,!0)}}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/local/templates/centino-heat_s2/js/velocity.js?159334786344791";s:6:"source";s:47:"/local/templates/centino-heat_s2/js/velocity.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){"use strict";function b(a){var b=a.length,d=c.type(a);return"function"!==d&&!c.isWindow(a)&&(!(1!==a.nodeType||!b)||("array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a))}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return a&&a===a.window},c.type=function(a){return a?"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a:a+""},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return b===undefined||f.call(a,b)},c.each=function(a,c,d){var e=0,f=a.length,g=b(a);if(d){if(g)for(;e<f&&c.apply(a[e],d)!==!1;e++);else for(e in a)if(a.hasOwnProperty(e)&&c.apply(a[e],d)===!1)break}else if(g)for(;e<f&&c.call(a[e],e,a[e])!==!1;e++);else for(e in a)if(a.hasOwnProperty(e)&&c.call(a[e],e,a[e])===!1)break;return a},c.data=function(a,b,e){if(e===undefined){var f=a[c.expando],g=f&&d[f];if(b===undefined)return g;if(g&&b in g)return g[b]}else if(b!==undefined){var h=a[c.expando]||(a[c.expando]=++c.uuid);return d[h]=d[h]||{},d[h][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&(b?c.each(b,function(a,b){delete f[b]}):delete d[e])},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);i<j;i++)if(f=arguments[i])for(e in f)f.hasOwnProperty(e)&&(a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):d!==undefined&&(h[e]=d)));return h},c.queue=function(a,d,e){if(a){d=(d||"fx")+"queue";var f=c.data(a,d);return e?(!f||c.isArray(e)?f=c.data(a,d,function(a,c){var d=c||[];return a&&(b(Object(a))?function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;)a[e++]=b[d++];if(c!==c)for(;b[d]!==undefined;)a[e++]=b[d++];a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}(e)):f.push(e),f):f||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var a=this[0],b=function(a){for(var b=a.offsetParent;b&&"html"!==b.nodeName.toLowerCase()&&b.style&&"static"===b.style.position;)b=b.offsetParent;return b||document}(a),d=this.offset(),e=/^(?:body|html)$/i.test(b.nodeName)?{top:0,left:0}:c(b).offset();return d.top-=parseFloat(a.style.marginTop)||0,d.left-=parseFloat(a.style.marginLeft)||0,b.style&&(e.top+=parseFloat(b.style.borderTopWidth)||0,e.left+=parseFloat(b.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){"use strict";return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return u.isWrapped(a)?a=s.call(a):u.isNode(a)&&(a=[a]),a}function g(a){var b=o.data(a,"velocity");return null===b?d:b}function h(a,b){var c=g(a);c&&c.delayTimer&&!c.delayPaused&&(c.delayRemaining=c.delay-b+c.delayBegin,c.delayPaused=!0,clearTimeout(c.delayTimer.setTimeout))}function i(a,b){var c=g(a);c&&c.delayTimer&&c.delayPaused&&(c.delayPaused=!1,c.delayTimer.setTimeout=setTimeout(c.delayTimer.next,c.delayRemaining))}function j(a){return function(b){return Math.round(b*a)*(1/a)}}function k(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;e<p;++e){var f=j(c,a,d);if(0===f)return c;c-=(i(c,a,d)-b)/f}return c}function l(){for(var b=0;b<t;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do{g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g}while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!==f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0===i?h:m(b,c,c+u)}function o(){y=!0,a===c&&d===e||l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;w<4;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function l(a,b){var c=a;return u.isString(a)?y.Easings[a]||(c=!1):c=u.isArray(a)&&1===a.length?j.apply(null,a):u.isArray(a)&&2===a.length?z.apply(null,a.concat([b])):!(!u.isArray(a)||4!==a.length)&&k.apply(null,a),c===!1&&(c=y.Easings[y.defaults.easing]?y.defaults.easing:x),c}function m(a){if(a){var b=y.timestamp&&a!==!0?a:r.now(),c=y.State.calls.length;c>1e4&&(y.State.calls=e(y.State.calls),c=y.State.calls.length);for(var f=0;f<c;f++)if(y.State.calls[f]){var h=y.State.calls[f],i=h[0],j=h[2],k=h[3],l=!!k,q=null,s=h[5],t=h[6];if(k||(k=y.State.calls[f][3]=b-16),s){if(s.resume!==!0)continue;k=h[3]=Math.round(b-t-16),h[5]=null}t=h[6]=b-k;for(var v=Math.min(t/j.duration,1),w=0,x=i.length;w<x;w++){var z=i[w],B=z.element;if(g(B)){var D=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var E=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];o.each(E,function(a,b){A.setPropertyValue(B,"display",b)})}A.setPropertyValue(B,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&A.setPropertyValue(B,"visibility",j.visibility);for(var F in z)if(z.hasOwnProperty(F)&&"element"!==F){var G,H=z[F],I=u.isString(H.easing)?y.Easings[H.easing]:H.easing;if(u.isString(H.pattern)){var J=1===v?function(a,b,c){var d=H.endValue[b];return c?Math.round(d):d}:function(a,b,c){var d=H.startValue[b],e=H.endValue[b]-d,f=d+e*I(v,j,e);return c?Math.round(f):f};G=H.pattern.replace(/{(\d+)(!)?}/g,J)}else if(1===v)G=H.endValue;else{var K=H.endValue-H.startValue;G=H.startValue+K*I(v,j,K)}if(!l&&G===H.currentValue)continue;if(H.currentValue=G,"tween"===F)q=G;else{var L;if(A.Hooks.registered[F]){L=A.Hooks.getRoot(F);var M=g(B).rootPropertyValueCache[L];M&&(H.rootPropertyValue=M)}var N=A.setPropertyValue(B,F,H.currentValue+(p<9&&0===parseFloat(G)?"":H.unitType),H.rootPropertyValue,H.scrollData);A.Hooks.registered[F]&&(A.Normalizations.registered[L]?g(B).rootPropertyValueCache[L]=A.Normalizations.registered[L]("extract",null,N[1]):g(B).rootPropertyValueCache[L]=N[1]),"transform"===N[0]&&(D=!0)}}j.mobileHA&&g(B).transformCache.translate3d===d&&(g(B).transformCache.translate3d="(0px, 0px, 0px)",D=!0),D&&A.flushTransformCache(B)}}j.display!==d&&"none"!==j.display&&(y.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(y.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],v,Math.max(0,k+j.duration-b),k,q),1===v&&n(f)}}y.State.isTicking&&C(m)}function n(a,b){if(!y.State.calls[a])return!1;for(var c=y.State.calls[a][0],e=y.State.calls[a][1],f=y.State.calls[a][2],h=y.State.calls[a][4],i=!1,j=0,k=c.length;j<k;j++){var l=c[j].element;b||f.loop||("none"===f.display&&A.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&A.setPropertyValue(l,"visibility",f.visibility));var m=g(l);if(f.loop!==!0&&(o.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(o.queue(l)[1]))&&m){m.isAnimating=!1,m.rootPropertyValueCache={};var n=!1;o.each(A.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=m.transformCache[b];m.transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete m.transformCache[b])}),f.mobileHA&&(n=!0,delete m.transformCache.translate3d),n&&A.flushTransformCache(l),A.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(r){setTimeout(function(){throw r},1)}h&&f.loop!==!0&&h(e),m&&f.loop===!0&&!b&&(o.each(m.tweensContainer,function(a,b){if(/^rotate/.test(a)&&(parseFloat(b.startValue)-parseFloat(b.endValue))%360==0){var c=b.startValue;b.startValue=b.endValue,b.endValue=c}/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),y(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&o.dequeue(l,f.queue)}y.State.calls[a]=!1;for(var p=0,q=y.State.calls.length;p<q;p++)if(y.State.calls[p]!==!1){i=!0;break}i===!1&&(y.State.isTicking=!1,delete y.State.calls,y.State.calls=[])}var o,p=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),q=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),r=function(){var a=b.performance||{};if("function"!=typeof a.now){var c=a.timing&&a.timing.navigationStart?a.timing.navigationStart:(new Date).getTime();a.now=function(){return(new Date).getTime()-c}}return a}(),s=function(){var a=Array.prototype.slice;try{return a.call(c.documentElement),a}catch(b){return function(b,c){var d=this.length;if("number"!=typeof b&&(b=0),"number"!=typeof c&&(c=d),this.slice)return a.call(this,b,c);var e,f=[],g=b>=0?b:Math.max(0,d+b),h=c<0?d+c:Math.min(c,d),i=h-g;if(i>0)if(f=new Array(i),this.charAt)for(e=0;e<i;e++)f[e]=this.charAt(g+e);else for(e=0;e<i;e++)f[e]=this[g+e];return f}}}(),t=function(){return Array.prototype.includes?function(a,b){return a.includes(b)}:Array.prototype.indexOf?function(a,b){return a.indexOf(b)>=0}:function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return!0;return!1}},u={isNumber:function(a){return"number"==typeof a},isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isWrapped:function(a){return a&&a!==b&&u.isNumber(a.length)&&!u.isString(a)&&!u.isFunction(a)&&!u.isNode(a)&&(0===a.length||u.isNode(a[0]))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}},v=!1;if(a.fn&&a.fn.jquery?(o=a,v=!0):o=b.Velocity.Utilities,p<=8&&!v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(p<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var w=400,x="swing",y={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:o,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:w,easing:x,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(a){o.data(a,"velocity",{isSVG:u.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:0},debug:!1,timestamp:!0,pauseAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]={resume:!1}}}),o.each(y.State.delayedElements,function(a,c){c&&h(c,b)})},resumeAll:function(a){var b=(new Date).getTime();o.each(y.State.calls,function(b,c){if(c){if(a!==d&&(c[2].queue!==a||c[2].queue===!1))return!0;c[5]&&(c[5].resume=!0)}}),o.each(y.State.delayedElements,function(a,c){c&&i(c,b)})}};b.pageYOffset!==d?(y.State.scrollAnchor=b,y.State.scrollPropertyLeft="pageXOffset",y.State.scrollPropertyTop="pageYOffset"):(y.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,y.State.scrollPropertyLeft="scrollLeft",y.State.scrollPropertyTop="scrollTop");var z=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*.016):g=.016;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>1e-4&&Math.abs(h.v)>1e-4))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();y.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},o.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){y.Easings[b[0]]=k.apply(null,b[1])});var A=y.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<A.Lists.colors.length;a++){var b="color"===A.Lists.colors[a]?"0 0 0 1":"255 255 255 1";A.Hooks.templates[A.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(p)for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(A.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),A.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in A.Hooks.templates)if(A.Hooks.templates.hasOwnProperty(c)){d=A.Hooks.templates[c],e=d[0].split(" ");for(var g in e)if(e.hasOwnProperty(g)){var h=c+e[g],i=g;A.Hooks.registered[h]=[c,i]}}},getRoot:function(a){var b=A.Hooks.registered[a];return b?b[0]:a},getUnit:function(a,b){var c=(a.substr(b||0,5).match(/^[a-z%]+/)||[])[0]||"";return c&&t(A.Lists.units,c)?c:""},fixColors:function(a){return a.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(a,b,c){return A.Lists.colorNames.hasOwnProperty(c)?(b?b:"rgba(")+A.Lists.colorNames[c]+(b?"":",1)"):b+c})},cleanRootPropertyValue:function(a,b){return A.RegEx.valueUnwrap.test(b)&&(b=b.match(A.RegEx.valueUnwrap)[1]),A.Values.isCSSNullValue(b)&&(b=A.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=A.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=A.Hooks.cleanRootPropertyValue(d,b),b.toString().match(A.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=A.Hooks.registered[a];if(d){var e,f=d[0],g=d[1];return c=A.Hooks.cleanRootPropertyValue(f,c),e=c.toString().match(A.RegEx.valueSplit),e[g]=b,e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return A.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(A.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return y.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(p<=8)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){function a(a,b,c){if("border-box"===A.getPropertyValue(b,"boxSizing").toString().toLowerCase()===(c||!1)){var d,e,f=0,g="width"===a?["Left","Right"]:["Top","Bottom"],h=["padding"+g[0],"padding"+g[1],"border"+g[0]+"Width","border"+g[1]+"Width"];for(d=0;d<h.length;d++)e=parseFloat(A.getPropertyValue(b,h[d])),isNaN(e)||(f+=e);return c?-f:f}return 0}function b(b,c){return function(d,e,f){switch(d){case"name":return b;case"extract":return parseFloat(f)+a(b,e,c);case"inject":return parseFloat(f)-a(b,e,c)+"px"}}}p&&!(p>9)||y.State.isGingerbread||(A.Lists.transformsBase=A.Lists.transformsBase.concat(A.Lists.transforms3D));for(var c=0;c<A.Lists.transformsBase.length;c++)!function(){var a=A.Lists.transformsBase[c];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[a]===d?/^scale/i.test(a)?1:0:g(c).transformCache[a].replace(/[()]/g,"");case"inject":var f=!1;switch(a.substr(0,a.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":y.State.isAndroid&&g(c).transformCache[a]===d&&e<1&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[a]="("+e+")"),g(c).transformCache[a]}}}();for(var e=0;e<A.Lists.colors.length;e++)!function(){var a=A.Lists.colors[e];A.Normalizations.registered[a]=function(b,c,e){switch(b){case"name":return a;case"extract":var f;if(A.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:A.RegEx.isHex.test(e)?g="rgb("+A.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(A.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!p||p>8)&&3===f.split(" ").length&&(f+=" 1"),f;case"inject":return/^rgb/.test(e)?e:(p<=8?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(p<=8?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();A.Normalizations.registered.innerWidth=b("width",!0),A.Normalizations.registered.innerHeight=b("height",!0),A.Normalizations.registered.outerWidth=b("width"),A.Normalizations.registered.outerHeight=b("height")}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(p||y.State.isAndroid&&!y.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(y.State.prefixMatches[a])return[y.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;c<d;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),u.isString(y.State.prefixElement.style[e]))return y.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,d){return b+b+c+c+d+d}),b=c.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return!a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){if(a)if(a.classList)a.classList.add(b);else if(u.isString(a.className))a.className+=(a.className.length?" ":"")+b;else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c+(c?" ":"")+b)}},removeClass:function(a,b){if(a)if(a.classList)a.classList.remove(b);else if(u.isString(a.className))a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ");else{var c=a.getAttribute(p<=7?"className":"class")||"";a.setAttribute("class",c.replace(new RegExp("(^|s)"+b.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(a,c,e,f){function h(a,c){var e=0;if(p<=8)e=o.css(a,c);else{var i=!1;/^(width|height)$/.test(c)&&0===A.getPropertyValue(a,"display")&&(i=!0,A.setPropertyValue(a,"display",A.Values.getDisplayType(a)));var j=function(){i&&A.setPropertyValue(a,"display","none")};if(!f){if("height"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(A.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(A.getPropertyValue(a,"paddingBottom"))||0);return j(),k}if("width"===c&&"border-box"!==A.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(A.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(A.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(A.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(A.getPropertyValue(a,"paddingRight"))||0);return j(),l}}var m;m=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),e=9===p&&"filter"===c?m.getPropertyValue(c):m[c],""!==e&&null!==e||(e=a.style[c]),j()}if("auto"===e&&/^(top|right|bottom|left)$/i.test(c)){var n=h(a,"position");("fixed"===n||"absolute"===n&&/top|left/i.test(c))&&(e=o(a).position()[c]+"px")}return e}var i;if(A.Hooks.registered[c]){var j=c,k=A.Hooks.getRoot(j);e===d&&(e=A.getPropertyValue(a,A.Names.prefixCheck(k)[0])),A.Normalizations.registered[k]&&(e=A.Normalizations.registered[k]("extract",a,e)),i=A.Hooks.extractValue(j,e)}else if(A.Normalizations.registered[c]){var l,m;l=A.Normalizations.registered[c]("name",a),"transform"!==l&&(m=h(a,A.Names.prefixCheck(l)[0]),A.Values.isCSSNullValue(m)&&A.Hooks.templates[c]&&(m=A.Hooks.templates[c][1])),i=A.Normalizations.registered[c]("extract",a,m)}if(!/^[\d-]/.test(i)){var n=g(a);if(n&&n.isSVG&&A.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(q){i=0}else i=a.getAttribute(c);else i=h(a,A.Names.prefixCheck(c)[0])}return A.Values.isCSSNullValue(i)&&(i=0),y.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(A.Normalizations.registered[c]&&"transform"===A.Normalizations.registered[c]("name",a))A.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(A.Hooks.registered[c]){var i=c,j=A.Hooks.getRoot(c);e=e||A.getPropertyValue(a,j),d=A.Hooks.injectValue(i,d,e),c=j}if(A.Normalizations.registered[c]&&(d=A.Normalizations.registered[c]("inject",a,d),c=A.Normalizations.registered[c]("name",a)),h=A.Names.prefixCheck(c)[0],p<=8)try{a.style[h]=d}catch(l){y.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else{var k=g(a);k&&k.isSVG&&A.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d}y.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){var b="",c=g(a);if((p||y.State.isAndroid&&!y.State.isChrome)&&c&&c.isSVG){var d=function(b){return parseFloat(A.getPropertyValue(a,b))},e={translate:[d("translateX"),d("translateY")],skewX:[d("skewX")],skewY:[d("skewY")],scale:1!==d("scale")?[d("scale"),d("scale")]:[d("scaleX"),d("scaleY")],rotate:[d("rotateZ"),0,0]};o.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),e[a]&&(b+=a+"("+e[a].join(" ")+") ",delete e[a])})}else{var f,h;o.each(g(a).transformCache,function(c){if(f=g(a).transformCache[c],"transformPerspective"===c)return h=f,!0;9===p&&"rotateZ"===c&&(c="rotate"),b+=c+f+" "}),h&&(b="perspective"+h+" "+b)}A.setPropertyValue(a,"transform",b)}};A.Hooks.register(),A.Normalizations.register(),y.hook=function(a,b,c){var e;return a=f(a),o.each(a,function(a,f){if(g(f)===d&&y.init(f),c===d)e===d&&(e=A.getPropertyValue(f,b));else{var h=A.setPropertyValue(f,b,c);"transform"===h[0]&&y.CSS.flushTransformCache(f),e=h}}),e};var B=function(){function a(){return k?z.promise||null:p}function e(a,e){function f(f){var k,n;if(i.begin&&0===D)try{i.begin.call(r,r)}catch(V){setTimeout(function(){throw V},1)}if("scroll"===G){var p,q,w,x=/^x$/i.test(i.axis)?"Left":"Top",B=parseFloat(i.offset)||0;i.container?u.isWrapped(i.container)||u.isNode(i.container)?(i.container=i.container[0]||i.container,p=i.container["scroll"+x],w=p+o(a).position()[x.toLowerCase()]+B):i.container=null:(p=y.State.scrollAnchor[y.State["scrollProperty"+x]],q=y.State.scrollAnchor[y.State["scrollProperty"+("Left"===x?"Top":"Left")]],w=o(a).offset()[x.toLowerCase()]+B),j={scroll:{rootPropertyValue:!1,startValue:p,currentValue:p,endValue:w,unitType:"",easing:i.easing,scrollData:{container:i.container,direction:x,alternateValue:q}},element:a},y.debug&&console.log("tweensContainer (scroll): ",j.scroll,a)}else if("reverse"===G){if(!(k=g(a)))return;if(!k.tweensContainer)return void o.dequeue(a,i.queue);"none"===k.opts.display&&(k.opts.display="auto"),"hidden"===k.opts.visibility&&(k.opts.visibility="visible"),k.opts.loop=!1,k.opts.begin=null,k.opts.complete=null,v.easing||delete i.easing,v.duration||delete i.duration,i=o.extend({},k.opts,i),n=o.extend(!0,{},k?k.tweensContainer:null);for(var E in n)if(n.hasOwnProperty(E)&&"element"!==E){var F=n[E].startValue;n[E].startValue=n[E].currentValue=n[E].endValue,n[E].endValue=F,u.isEmptyObject(v)||(n[E].easing=i.easing),y.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(n[E]),a)}j=n}else if("start"===G){k=g(a),k&&k.tweensContainer&&k.isAnimating===!0&&(n=k.tweensContainer);var H=function(e,f){var g,l=A.Hooks.getRoot(e),m=!1,p=f[0],q=f[1],r=f[2]
;if(!(k&&k.isSVG||"tween"===l||A.Names.prefixCheck(l)[1]!==!1||A.Normalizations.registered[l]!==d))return void(y.debug&&console.log("Skipping ["+l+"] due to a lack of browser support."));(i.display!==d&&null!==i.display&&"none"!==i.display||i.visibility!==d&&"hidden"!==i.visibility)&&/opacity|filter/.test(e)&&!r&&0!==p&&(r=0),i._cacheValues&&n&&n[e]?(r===d&&(r=n[e].endValue+n[e].unitType),m=k.rootPropertyValueCache[l]):A.Hooks.registered[e]?r===d?(m=A.getPropertyValue(a,l),r=A.getPropertyValue(a,e,m)):m=A.Hooks.templates[l][1]:r===d&&(r=A.getPropertyValue(a,e));var s,t,v,w=!1,x=function(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=A.Values.getUnitType(a)),[d,c]};if(r!==p&&u.isString(r)&&u.isString(p)){g="";var z=0,B=0,C=[],D=[],E=0,F=0,G=0;for(r=A.Hooks.fixColors(r),p=A.Hooks.fixColors(p);z<r.length&&B<p.length;){var H=r[z],I=p[B];if(/[\d\.-]/.test(H)&&/[\d\.-]/.test(I)){for(var J=H,K=I,L=".",N=".";++z<r.length;){if((H=r[z])===L)L="..";else if(!/\d/.test(H))break;J+=H}for(;++B<p.length;){if((I=p[B])===N)N="..";else if(!/\d/.test(I))break;K+=I}var O=A.Hooks.getUnit(r,z),P=A.Hooks.getUnit(p,B);if(z+=O.length,B+=P.length,O===P)J===K?g+=J+O:(g+="{"+C.length+(F?"!":"")+"}"+O,C.push(parseFloat(J)),D.push(parseFloat(K)));else{var Q=parseFloat(J),R=parseFloat(K);g+=(E<5?"calc":"")+"("+(Q?"{"+C.length+(F?"!":"")+"}":"0")+O+" + "+(R?"{"+(C.length+(Q?1:0))+(F?"!":"")+"}":"0")+P+")",Q&&(C.push(Q),D.push(0)),R&&(C.push(0),D.push(R))}}else{if(H!==I){E=0;break}g+=H,z++,B++,0===E&&"c"===H||1===E&&"a"===H||2===E&&"l"===H||3===E&&"c"===H||E>=4&&"("===H?E++:(E&&E<5||E>=4&&")"===H&&--E<5)&&(E=0),0===F&&"r"===H||1===F&&"g"===H||2===F&&"b"===H||3===F&&"a"===H||F>=3&&"("===H?(3===F&&"a"===H&&(G=1),F++):G&&","===H?++G>3&&(F=G=0):(G&&F<(G?5:4)||F>=(G?4:3)&&")"===H&&--F<(G?5:4))&&(F=G=0)}}z===r.length&&B===p.length||(y.debug&&console.error('Trying to pattern match mis-matched strings ["'+p+'", "'+r+'"]'),g=d),g&&(C.length?(y.debug&&console.log('Pattern found "'+g+'" -> ',C,D,"["+r+","+p+"]"),r=C,p=D,t=v=""):g=d)}g||(s=x(e,r),r=s[0],v=s[1],s=x(e,p),p=s[0].replace(/^([+-\/*])=/,function(a,b){return w=b,""}),t=s[1],r=parseFloat(r)||0,p=parseFloat(p)||0,"%"===t&&(/^(fontSize|lineHeight)$/.test(e)?(p/=100,t="em"):/^scale/.test(e)?(p/=100,t=""):/(Red|Green|Blue)$/i.test(e)&&(p=p/100*255,t="")));if(/[\/*]/.test(w))t=v;else if(v!==t&&0!==r)if(0===p)t=v;else{h=h||function(){var d={myParent:a.parentNode||c.body,position:A.getPropertyValue(a,"position"),fontSize:A.getPropertyValue(a,"fontSize")},e=d.position===M.lastPosition&&d.myParent===M.lastParent,f=d.fontSize===M.lastFontSize;M.lastParent=d.myParent,M.lastPosition=d.position,M.lastFontSize=d.fontSize;var g={};if(f&&e)g.emToPx=M.lastEmToPx,g.percentToPxWidth=M.lastPercentToPxWidth,g.percentToPxHeight=M.lastPercentToPxHeight;else{var h=k&&k.isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");y.init(h),d.myParent.appendChild(h),o.each(["overflow","overflowX","overflowY"],function(a,b){y.CSS.setPropertyValue(h,b,"hidden")}),y.CSS.setPropertyValue(h,"position",d.position),y.CSS.setPropertyValue(h,"fontSize",d.fontSize),y.CSS.setPropertyValue(h,"boxSizing","content-box"),o.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){y.CSS.setPropertyValue(h,b,"100%")}),y.CSS.setPropertyValue(h,"paddingLeft","100em"),g.percentToPxWidth=M.lastPercentToPxWidth=(parseFloat(A.getPropertyValue(h,"width",null,!0))||1)/100,g.percentToPxHeight=M.lastPercentToPxHeight=(parseFloat(A.getPropertyValue(h,"height",null,!0))||1)/100,g.emToPx=M.lastEmToPx=(parseFloat(A.getPropertyValue(h,"paddingLeft"))||1)/100,d.myParent.removeChild(h)}return null===M.remToPx&&(M.remToPx=parseFloat(A.getPropertyValue(c.body,"fontSize"))||16),null===M.vwToPx&&(M.vwToPx=parseFloat(b.innerWidth)/100,M.vhToPx=parseFloat(b.innerHeight)/100),g.remToPx=M.remToPx,g.vwToPx=M.vwToPx,g.vhToPx=M.vhToPx,y.debug>=1&&console.log("Unit ratios: "+JSON.stringify(g),a),g}();var S=/margin|padding|left|right|width|text|word|letter/i.test(e)||/X$/.test(e)||"x"===e?"x":"y";switch(v){case"%":r*="x"===S?h.percentToPxWidth:h.percentToPxHeight;break;case"px":break;default:r*=h[v+"ToPx"]}switch(t){case"%":r*=1/("x"===S?h.percentToPxWidth:h.percentToPxHeight);break;case"px":break;default:r*=1/h[t+"ToPx"]}}switch(w){case"+":p=r+p;break;case"-":p=r-p;break;case"*":p*=r;break;case"/":p=r/p}j[e]={rootPropertyValue:m,startValue:r,currentValue:r,endValue:p,unitType:t,easing:q},g&&(j[e].pattern=g),y.debug&&console.log("tweensContainer ("+e+"): "+JSON.stringify(j[e]),a)};for(var I in s)if(s.hasOwnProperty(I)){var J=A.Names.camelCase(I),K=function(b,c){var d,f,g;return u.isFunction(b)&&(b=b.call(a,e,C)),u.isArray(b)?(d=b[0],!u.isArray(b[1])&&/^[\d-]/.test(b[1])||u.isFunction(b[1])||A.RegEx.isHex.test(b[1])?g=b[1]:u.isString(b[1])&&!A.RegEx.isHex.test(b[1])&&y.Easings[b[1]]||u.isArray(b[1])?(f=c?b[1]:l(b[1],i.duration),g=b[2]):g=b[1]||b[2]):d=b,c||(f=f||i.easing),u.isFunction(d)&&(d=d.call(a,e,C)),u.isFunction(g)&&(g=g.call(a,e,C)),[d||0,f,g]}(s[I]);if(t(A.Lists.colors,J)){var L=K[0],O=K[1],P=K[2];if(A.RegEx.isHex.test(L)){for(var Q=["Red","Green","Blue"],R=A.Values.hexToRgb(L),S=P?A.Values.hexToRgb(P):d,T=0;T<Q.length;T++){var U=[R[T]];O&&U.push(O),S!==d&&U.push(S[T]),H(J+Q[T],U)}continue}}H(J,K)}j.element=a}j.element&&(A.Values.addClass(a,"velocity-animating"),N.push(j),k=g(a),k&&(""===i.queue&&(k.tweensContainer=j,k.opts=i),k.isAnimating=!0),D===C-1?(y.State.calls.push([N,r,i,null,z.resolver,null,0]),y.State.isTicking===!1&&(y.State.isTicking=!0,m())):D++)}var h,i=o.extend({},y.defaults,v),j={};switch(g(a)===d&&y.init(a),parseFloat(i.delay)&&i.queue!==!1&&o.queue(a,i.queue,function(b){y.velocityQueueEntryFlag=!0;var c=y.State.delayedElements.count++;y.State.delayedElements[c]=a;var d=function(a){return function(){y.State.delayedElements[a]=!1,b()}}(c);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(b,parseFloat(i.delay)),next:d}}),i.duration.toString().toLowerCase()){case"fast":i.duration=200;break;case"normal":i.duration=w;break;case"slow":i.duration=600;break;default:i.duration=parseFloat(i.duration)||1}if(y.mock!==!1&&(y.mock===!0?i.duration=i.delay=1:(i.duration*=parseFloat(y.mock)||1,i.delay*=parseFloat(y.mock)||1)),i.easing=l(i.easing,i.duration),i.begin&&!u.isFunction(i.begin)&&(i.begin=null),i.progress&&!u.isFunction(i.progress)&&(i.progress=null),i.complete&&!u.isFunction(i.complete)&&(i.complete=null),i.display!==d&&null!==i.display&&(i.display=i.display.toString().toLowerCase(),"auto"===i.display&&(i.display=y.CSS.Values.getDisplayType(a))),i.visibility!==d&&null!==i.visibility&&(i.visibility=i.visibility.toString().toLowerCase()),i.mobileHA=i.mobileHA&&y.State.isMobile&&!y.State.isGingerbread,i.queue===!1)if(i.delay){var k=y.State.delayedElements.count++;y.State.delayedElements[k]=a;var n=function(a){return function(){y.State.delayedElements[a]=!1,f()}}(k);g(a).delayBegin=(new Date).getTime(),g(a).delay=parseFloat(i.delay),g(a).delayTimer={setTimeout:setTimeout(f,parseFloat(i.delay)),next:n}}else f();else o.queue(a,i.queue,function(a,b){if(b===!0)return z.promise&&z.resolver(r),!0;y.velocityQueueEntryFlag=!0,f(a)});""!==i.queue&&"fx"!==i.queue||"inprogress"===o.queue(a)[0]||o.dequeue(a)}var j,k,p,q,r,s,v,x=arguments[0]&&(arguments[0].p||o.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||u.isString(arguments[0].properties));u.isWrapped(this)?(k=!1,q=0,r=this,p=this):(k=!0,q=1,r=x?arguments[0].elements||arguments[0].e:arguments[0]);var z={promise:null,resolver:null,rejecter:null};if(k&&y.Promise&&(z.promise=new y.Promise(function(a,b){z.resolver=a,z.rejecter=b})),x?(s=arguments[0].properties||arguments[0].p,v=arguments[0].options||arguments[0].o):(s=arguments[q],v=arguments[q+1]),!(r=f(r)))return void(z.promise&&(s&&v&&v.promiseRejectEmpty===!1?z.resolver():z.rejecter()));var C=r.length,D=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(s)&&!o.isPlainObject(v)){var E=q+1;v={};for(var F=E;F<arguments.length;F++)u.isArray(arguments[F])||!/^(fast|normal|slow)$/i.test(arguments[F])&&!/^\d/.test(arguments[F])?u.isString(arguments[F])||u.isArray(arguments[F])?v.easing=arguments[F]:u.isFunction(arguments[F])&&(v.complete=arguments[F]):v.duration=arguments[F]}var G;switch(s){case"scroll":G="scroll";break;case"reverse":G="reverse";break;case"pause":var H=(new Date).getTime();return o.each(r,function(a,b){h(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1)||(o.each(r,function(a,d){if(d===e)return b[5]={resume:!1},c=!0,!1}),!c&&void 0)})}),a();case"resume":return o.each(r,function(a,b){i(b,H)}),o.each(y.State.calls,function(a,b){var c=!1;b&&o.each(b[1],function(a,e){var f=v===d?"":v;return f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1)||(!b[5]||(o.each(r,function(a,d){if(d===e)return b[5].resume=!0,c=!0,!1}),!c&&void 0))})}),a();case"finish":case"finishAll":case"stop":o.each(r,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==s||v!==!0&&!u.isString(v)||(o.each(o.queue(b,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b()}),o.queue(b,u.isString(v)?v:"",[]))});var I=[];return o.each(y.State.calls,function(a,b){b&&o.each(b[1],function(c,e){var f=v===d?"":v;if(f!==!0&&b[2].queue!==f&&(v!==d||b[2].queue!==!1))return!0;o.each(r,function(c,d){if(d===e)if((v===!0||u.isString(v))&&(o.each(o.queue(d,u.isString(v)?v:""),function(a,b){u.isFunction(b)&&b(null,!0)}),o.queue(d,u.isString(v)?v:"",[])),"stop"===s){var h=g(d);h&&h.tweensContainer&&f!==!1&&o.each(h.tweensContainer,function(a,b){b.endValue=b.currentValue}),I.push(a)}else"finish"!==s&&"finishAll"!==s||(b[2].duration=1)})})}),"stop"===s&&(o.each(I,function(a,b){n(b,!0)}),z.promise&&z.resolver(r)),a();default:if(!o.isPlainObject(s)||u.isEmptyObject(s)){if(u.isString(s)&&y.Redirects[s]){j=o.extend({},v);var J=j.duration,K=j.delay||0;return j.backwards===!0&&(r=o.extend(!0,[],r).reverse()),o.each(r,function(a,b){parseFloat(j.stagger)?j.delay=K+parseFloat(j.stagger)*a:u.isFunction(j.stagger)&&(j.delay=K+j.stagger.call(b,a,C)),j.drag&&(j.duration=parseFloat(J)||(/^(callout|transition)/.test(s)?1e3:w),j.duration=Math.max(j.duration*(j.backwards?1-a/C:(a+1)/C),.75*j.duration,200)),y.Redirects[s].call(b,b,j||{},a,C,r,z.promise?z:d)}),a()}var L="Velocity: First argument ("+s+") was not a property map, a known action, or a registered redirect. Aborting.";return z.promise?z.rejecter(new Error(L)):b.console&&console.log(L),a()}G="start"}var M={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},N=[];o.each(r,function(a,b){u.isNode(b)&&e(b,a)}),j=o.extend({},y.defaults,v),j.loop=parseInt(j.loop,10);var O=2*j.loop-1;if(j.loop)for(var P=0;P<O;P++){var Q={delay:j.delay,progress:j.progress};P===O-1&&(Q.display=j.display,Q.visibility=j.visibility,Q.complete=j.complete),B(r,"reverse",Q)}return a()};y=o.extend(B,y),y.animate=B;var C=b.requestAnimationFrame||q;if(!y.State.isMobile&&c.hidden!==d){var D=function(){c.hidden?(C=function(a){return setTimeout(function(){a(!0)},16)},m()):C=b.requestAnimationFrame||q};D(),c.addEventListener("visibilitychange",D)}return a.Velocity=y,a!==b&&(a.fn.velocity=B,a.fn.velocity.defaults=y.defaults),o.each(["Down","Up"],function(a,b){y.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.begin,k=i.complete,l={},m={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};i.display===d&&(i.display="Down"===b?"inline"===y.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){0===e&&j&&j.call(g,g);for(var c in m)if(m.hasOwnProperty(c)){l[c]=a.style[c];var d=A.getPropertyValue(a,c);m[c]="Down"===b?[d,0]:[0,d]}l.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in l)l.hasOwnProperty(b)&&(a.style[b]=l[b]);e===f-1&&(k&&k.call(g,g),h&&h.resolver(g))},y(a,m,i)}}),o.each(["In","Out"],function(a,b){y.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=o.extend({},c),j=i.complete,k={opacity:"In"===b?1:0};0!==e&&(i.begin=null),i.complete=e!==f-1?null:function(){j&&j.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),y(this,k,i)}}),y}(window.jQuery||window.Zepto||window,window,window?window.document:undefined)});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:66:"/local/templates/centino-heat_s2/js/velocity.ui.js?159334786313257";s:6:"source";s:50:"/local/templates/centino-heat_s2/js/velocity.ui.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */
!function(t){"function"==typeof require&&"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(["velocity"],t):t()}(function(){return function(t,a,e,r){function n(t,a){var e=[];return t&&a?($.each([t,a],function(t,a){var r=[];$.each(a,function(t,a){for(;a.toString().length<5;)a="0"+a;r.push(a)}),e.push(r.join(""))}),parseFloat(e[0])>parseFloat(e[1])):!1}if(!t.Velocity||!t.Velocity.Utilities)return void(a.console&&console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));var i=t.Velocity,$=i.Utilities,s=i.version,o={major:1,minor:1,patch:0};if(n(o,s)){var l="Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";throw alert(l),new Error(l)}i.RegisterEffect=i.RegisterUI=function(t,a){function e(t,a,e,r){var n=0,s;$.each(t.nodeType?[t]:t,function(t,a){r&&(e+=t*r),s=a.parentNode,$.each(["height","paddingTop","paddingBottom","marginTop","marginBottom"],function(t,e){n+=parseFloat(i.CSS.getPropertyValue(a,e))})}),i.animate(s,{height:("In"===a?"+":"-")+"="+n},{queue:!1,easing:"ease-in-out",duration:e*("In"===a?.6:1)})}return i.Redirects[t]=function(n,s,o,l,c,u){function f(){s.display!==r&&"none"!==s.display||!/Out$/.test(t)||$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"display","none")}),s.complete&&s.complete.call(c,c),u&&u.resolver(c||n)}var p=o===l-1;a.defaultDuration="function"==typeof a.defaultDuration?a.defaultDuration.call(c,c):parseFloat(a.defaultDuration);for(var d=0;d<a.calls.length;d++){var g=a.calls[d],y=g[0],m=s.duration||a.defaultDuration||1e3,X=g[1],Y=g[2]||{},O={};if(O.duration=m*(X||1),O.queue=s.queue||"",O.easing=Y.easing||"ease",O.delay=parseFloat(Y.delay)||0,O._cacheValues=Y._cacheValues||!0,0===d){if(O.delay+=parseFloat(s.delay)||0,0===o&&(O.begin=function(){s.begin&&s.begin.call(c,c);var a=t.match(/(In|Out)$/);a&&"In"===a[0]&&y.opacity!==r&&$.each(c.nodeType?[c]:c,function(t,a){i.CSS.setPropertyValue(a,"opacity",0)}),s.animateParentHeight&&a&&e(c,a[0],m+O.delay,s.stagger)}),null!==s.display)if(s.display!==r&&"none"!==s.display)O.display=s.display;else if(/In$/.test(t)){var v=i.CSS.Values.getDisplayType(n);O.display="inline"===v?"inline-block":v}s.visibility&&"hidden"!==s.visibility&&(O.visibility=s.visibility)}d===a.calls.length-1&&(O.complete=function(){if(a.reset){for(var t in a.reset){var e=a.reset[t];i.CSS.Hooks.registered[t]!==r||"string"!=typeof e&&"number"!=typeof e||(a.reset[t]=[a.reset[t],a.reset[t]])}var s={duration:0,queue:!1};p&&(s.complete=f),i.animate(n,a.reset,s)}else p&&f()},"hidden"===s.visibility&&(O.visibility=s.visibility)),i.animate(n,y,O)}},i},i.RegisterEffect.packagedEffects={"callout.bounce":{defaultDuration:550,calls:[[{translateY:-30},.25],[{translateY:0},.125],[{translateY:-15},.125],[{translateY:0},.25]]},"callout.shake":{defaultDuration:800,calls:[[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:11},.125],[{translateX:-11},.125],[{translateX:0},.125]]},"callout.flash":{defaultDuration:1100,calls:[[{opacity:[0,"easeInOutQuad",1]},.25],[{opacity:[1,"easeInOutQuad"]},.25],[{opacity:[0,"easeInOutQuad"]},.25],[{opacity:[1,"easeInOutQuad"]},.25]]},"callout.pulse":{defaultDuration:825,calls:[[{scaleX:1.1,scaleY:1.1},.5,{easing:"easeInExpo"}],[{scaleX:1,scaleY:1},.5]]},"callout.swing":{defaultDuration:950,calls:[[{rotateZ:15},.2],[{rotateZ:-10},.2],[{rotateZ:5},.2],[{rotateZ:-5},.2],[{rotateZ:0},.2]]},"callout.tada":{defaultDuration:1e3,calls:[[{scaleX:.9,scaleY:.9,rotateZ:-3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:3},.1],[{scaleX:1.1,scaleY:1.1,rotateZ:-3},.1],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],["reverse",.125],[{scaleX:1,scaleY:1,rotateZ:0},.2]]},"transition.fadeIn":{defaultDuration:500,calls:[[{opacity:[1,0]}]]},"transition.fadeOut":{defaultDuration:500,calls:[[{opacity:[0,1]}]]},"transition.flipXIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateY:[0,-55]}]],reset:{transformPerspective:0}},"transition.flipXOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateY:55}]],reset:{transformPerspective:0,rotateY:0}},"transition.flipYIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],rotateX:[0,-45]}]],reset:{transformPerspective:0}},"transition.flipYOut":{defaultDuration:800,calls:[[{opacity:[0,1],transformPerspective:[800,800],rotateX:25}]],reset:{transformPerspective:0,rotateX:0}},"transition.flipBounceXIn":{defaultDuration:900,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateY:[-10,90]},.5],[{opacity:.8,rotateY:10},.25],[{opacity:1,rotateY:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceXOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateY:-10},.5],[{opacity:0,rotateY:90},.5]],reset:{transformPerspective:0,rotateY:0}},"transition.flipBounceYIn":{defaultDuration:850,calls:[[{opacity:[.725,0],transformPerspective:[400,400],rotateX:[-10,90]},.5],[{opacity:.8,rotateX:10},.25],[{opacity:1,rotateX:0},.25]],reset:{transformPerspective:0}},"transition.flipBounceYOut":{defaultDuration:800,calls:[[{opacity:[.9,1],transformPerspective:[400,400],rotateX:-15},.5],[{opacity:0,rotateX:90},.5]],reset:{transformPerspective:0,rotateX:0}},"transition.swoopIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["100%","50%"],transformOriginY:["100%","100%"],scaleX:[1,0],scaleY:[1,0],translateX:[0,-700],translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%"}},"transition.swoopOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformOriginX:["50%","100%"],transformOriginY:["100%","100%"],scaleX:0,scaleY:0,translateX:-700,translateZ:0}]],reset:{transformOriginX:"50%",transformOriginY:"50%",scaleX:1,scaleY:1,translateX:0}},"transition.whirlIn":{defaultDuration:850,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,0],scaleY:[1,0],rotateY:[0,160]},1,{easing:"easeInOutSine"}]]},"transition.whirlOut":{defaultDuration:750,calls:[[{opacity:[0,"easeInOutQuint",1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:0,scaleY:0,rotateY:160},1,{easing:"swing"}]],reset:{scaleX:1,scaleY:1,rotateY:0}},"transition.shrinkIn":{defaultDuration:750,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,1.5],scaleY:[1,1.5],translateZ:0}]]},"transition.shrinkOut":{defaultDuration:600,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:1.3,scaleY:1.3,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.expandIn":{defaultDuration:700,calls:[[{opacity:[1,0],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:[1,.625],scaleY:[1,.625],translateZ:0}]]},"transition.expandOut":{defaultDuration:700,calls:[[{opacity:[0,1],transformOriginX:["50%","50%"],transformOriginY:["50%","50%"],scaleX:.5,scaleY:.5,translateZ:0}]],reset:{scaleX:1,scaleY:1}},"transition.bounceIn":{defaultDuration:800,calls:[[{opacity:[1,0],scaleX:[1.05,.3],scaleY:[1.05,.3]},.4],[{scaleX:.9,scaleY:.9,translateZ:0},.2],[{scaleX:1,scaleY:1},.5]]},"transition.bounceOut":{defaultDuration:800,calls:[[{scaleX:.95,scaleY:.95},.35],[{scaleX:1.1,scaleY:1.1,translateZ:0},.35],[{opacity:[0,1],scaleX:.3,scaleY:.3},.3]],reset:{scaleX:1,scaleY:1}},"transition.bounceUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[-30,1e3]},.6,{easing:"easeOutCirc"}],[{translateY:10},.2],[{translateY:0},.2]]},"transition.bounceUpOut":{defaultDuration:1e3,calls:[[{translateY:20},.2],[{opacity:[0,"easeInCirc",1],translateY:-1e3},.8]],reset:{translateY:0}},"transition.bounceDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateY:[30,-1e3]},.6,{easing:"easeOutCirc"}],[{translateY:-10},.2],[{translateY:0},.2]]},"transition.bounceDownOut":{defaultDuration:1e3,calls:[[{translateY:-20},.2],[{opacity:[0,"easeInCirc",1],translateY:1e3},.8]],reset:{translateY:0}},"transition.bounceLeftIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[30,-1250]},.6,{easing:"easeOutCirc"}],[{translateX:-10},.2],[{translateX:0},.2]]},"transition.bounceLeftOut":{defaultDuration:750,calls:[[{translateX:30},.2],[{opacity:[0,"easeInCirc",1],translateX:-1250},.8]],reset:{translateX:0}},"transition.bounceRightIn":{defaultDuration:750,calls:[[{opacity:[1,0],translateX:[-30,1250]},.6,{easing:"easeOutCirc"}],[{translateX:10},.2],[{translateX:0},.2]]},"transition.bounceRightOut":{defaultDuration:750,calls:[[{translateX:-30},.2],[{opacity:[0,"easeInCirc",1],translateX:1250},.8]],reset:{translateX:0}},"transition.slideUpIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,20],translateZ:0}]]},"transition.slideUpOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:-20,translateZ:0}]],reset:{translateY:0}},"transition.slideDownIn":{defaultDuration:900,calls:[[{opacity:[1,0],translateY:[0,-20],translateZ:0}]]},"transition.slideDownOut":{defaultDuration:900,calls:[[{opacity:[0,1],translateY:20,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,-20],translateZ:0}]]},"transition.slideLeftOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:-20,translateZ:0}]],reset:{translateX:0}},"transition.slideRightIn":{defaultDuration:1e3,calls:[[{opacity:[1,0],translateX:[0,20],translateZ:0}]]},"transition.slideRightOut":{defaultDuration:1050,calls:[[{opacity:[0,1],translateX:20,translateZ:0}]],reset:{translateX:0}},"transition.slideUpBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,75],translateZ:0}]]},"transition.slideUpBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:-75,translateZ:0}]],reset:{translateY:0}},"transition.slideDownBigIn":{defaultDuration:850,calls:[[{opacity:[1,0],translateY:[0,-75],translateZ:0}]]},"transition.slideDownBigOut":{defaultDuration:800,calls:[[{opacity:[0,1],translateY:75,translateZ:0}]],reset:{translateY:0}},"transition.slideLeftBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,-75],translateZ:0}]]},"transition.slideLeftBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:-75,translateZ:0}]],reset:{translateX:0}},"transition.slideRightBigIn":{defaultDuration:800,calls:[[{opacity:[1,0],translateX:[0,75],translateZ:0}]]},"transition.slideRightBigOut":{defaultDuration:750,calls:[[{opacity:[0,1],translateX:75,translateZ:0}]],reset:{translateX:0}},"transition.perspectiveUpIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveUpOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:["100%","100%"],rotateX:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveDownIn":{defaultDuration:800,calls:[[{opacity:[1,0],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveDownOut":{defaultDuration:850,calls:[[{opacity:[0,1],transformPerspective:[800,800],transformOriginX:[0,0],transformOriginY:[0,0],rotateX:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateX:0}},"transition.perspectiveLeftIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:[0,-180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveLeftOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:[0,0],transformOriginY:[0,0],rotateY:-180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}},"transition.perspectiveRightIn":{defaultDuration:950,calls:[[{opacity:[1,0],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:[0,180]}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%"}},"transition.perspectiveRightOut":{defaultDuration:950,calls:[[{opacity:[0,1],transformPerspective:[2e3,2e3],transformOriginX:["100%","100%"],transformOriginY:[0,0],rotateY:180}]],reset:{transformPerspective:0,transformOriginX:"50%",transformOriginY:"50%",rotateY:0}}};for(var c in i.RegisterEffect.packagedEffects)i.RegisterEffect(c,i.RegisterEffect.packagedEffects[c]);i.RunSequence=function(t){var a=$.extend(!0,[],t);a.length>1&&($.each(a.reverse(),function(t,e){var r=a[t+1];if(r){var n=e.o||e.options,s=r.o||r.options,o=n&&n.sequenceQueue===!1?"begin":"complete",l=s&&s[o],c={};c[o]=function(){var t=r.e||r.elements,a=t.nodeType?[t]:t;l&&l.call(a,a),i(e)},r.o?r.o=$.extend({},s,c):r.options=$.extend({},s,c)}}),a.reverse()),i(a[0])}}(window.jQuery||window.Zepto||window,window,document)});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:68:"/local/templates/centino-heat_s2/vendor/bootstrap.js?159334786127908";s:6:"source";s:52:"/local/templates/centino-heat_s2/vendor/bootstrap.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*!
 * Bootstrap v3.0.0
 *
 * Copyright 2013 Twitter, Inc
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Designed and built with all the love in the world @twitter by @mdo and @fat.
 */

+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed.bs.alert").remove()}var c=a(this),d=c.attr("data-target");d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));var e=a(d);b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close.bs.alert"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.one(a.support.transition.end,f).emulateTransitionEnd(150):f()};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");b.prop("type")==="radio"&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f=typeof c=="object"&&c;e||d.data("bs.button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){if(this.sliding)return;return this.slide("next")},b.prototype.prev=function(){if(this.sliding)return;return this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(e.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g=c.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){function e(){a(b).remove(),a(c).each(function(b){var c=f(a(this));if(!c.hasClass("open"))return;c.trigger(b=a.Event("hide.bs.dropdown"));if(b.isDefaultPrevented())return;c.removeClass("open").trigger("hidden.bs.dropdown")})}function f(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}"use strict";var b=".dropdown-backdrop",c="[data-toggle=dropdown]",d=function(b){var c=a(b).on("click.bs.dropdown",this.toggle)};d.prototype.toggle=function(b){var c=a(this);if(c.is(".disabled, :disabled"))return;var d=f(c),g=d.hasClass("open");e();if(!g){"ontouchstart"in document.documentElement&&!d.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",e),d.trigger(b=a.Event("show.bs.dropdown"));if(b.isDefaultPrevented())return;d.toggleClass("open").trigger("shown.bs.dropdown"),c.focus()}return!1},d.prototype.keydown=function(b){if(!/(38|40|27)/.test(b.keyCode))return;var d=a(this);b.preventDefault(),b.stopPropagation();if(d.is(".disabled, :disabled"))return;var e=f(d),g=e.hasClass("open");if(!g||g&&b.keyCode==27)return b.which==27&&e.find(c).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",e);if(!h.length)return;var i=h.index(h.filter(":focus"));b.keyCode==38&&i>0&&i--,b.keyCode==40&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),e=c.data("dropdown");e||c.data("dropdown",e=new d(this)),typeof b=="string"&&e[b].call(c)})},a.fn.dropdown.Constructor=d,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",c,d.prototype.toggle).on("keydown.bs.dropdown.data-api",c+", [role=menu]",d.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d);if(this.isShown||d.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)})},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]!==a.target&&!this.$element.has(a.target).length&&this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){a.which==27&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){if(a.target!==a.currentTarget)return;this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),typeof c=="object"&&c);f||e.data("bs.modal",f=new b(this,g)),typeof c=="string"?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);var e=this.options.trigger.split(" ");for(var f=e.length;f--;){var g=e[f];if(g=="click")this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if(g!="manual"){var h=g=="hover"?"mouseenter":"focus",i=g=="hover"?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="in";if(!c.options.delay||!c.options.delay.show)return c.show();c.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(c.timeout),c.hoverState="out";if(!c.options.delay||!c.options.delay.hide)return c.hide();c.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d=typeof this.options.placement=="function"?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m=this.options.container=="body"?window.innerWidth:j.outerWidth(),n=this.options.container=="body"?window.innerHeight:j.outerHeight(),o=this.options.container=="body"?0:j.offset().left;d=d=="bottom"&&g.top+g.height+i-l>n?"top":d=="top"&&g.top-l-i<0?"bottom":d=="right"&&g.right+h>m?"left":d=="left"&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;b=="top"&&j!=f&&(c=!0,a.top=a.top+f-j);if(/bottom|top/.test(b)){var k=0;a.left<0&&(k=a.left*-2,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function e(){b.hoverState!="in"&&c.detach()}var b=this,c=this.tip(),d=a.Event("hide.bs."+this.type);this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),this.$element.trigger("hidden.bs."+this.type),this},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return a=="bottom"?{top:b.top+b.height,left:b.left+b.width/2-c/2}:a=="top"?{top:b.top-d,left:b.left+b.width/2-c/2}:a=="left"?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f=typeof c=="object"&&c;e||d.data("bs.tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||(typeof b.content=="function"?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f=typeof c=="object"&&c;e||d.data("bs.popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});b.trigger(f);if(f.isDefaultPrevented())return;var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})},b.prototype.activate=function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g).emulateTransitionEnd(150):g(),e.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;typeof f!="object"&&(h=g=f),typeof g=="function"&&(g=f.top()),typeof h=="function"&&(h=f.bottom());var i=this.unpin!=null&&d+this.unpin<=e.top?!1:h!=null&&e.top+this.$element.height()>=c-h?"bottom":g!=null&&d<=g?"top":!1;if(this.affixed===i)return;this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin=i=="bottom"?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),i=="bottom"&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()})};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f=typeof c=="object"&&c;e||d.data("bs.affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in"))return;var b=a.Event("show.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])},b.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in"))return;var b=a.Event("hide.bs.collapse");this.$element.trigger(b);if(b.isDefaultPrevented())return;var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!a.support.transition)return d.call(this);this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350)},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),typeof c=="object"&&c);e||d.data("bs.collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":c.data(),i=c.attr("data-parent"),j=i&&a(i);if(!g||!g.transitioning)j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(c).addClass("collapsed"),c[f.hasClass("in")?"addClass":"removeClass"]("collapsed");f.collapse(h)})}(window.jQuery),+function(a){function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}"use strict",b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this,d=this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f=typeof c=="object"&&c;e||d.data("bs.scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(a.style[c]!==undefined)return{end:b[c]}}"use strict",a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery)
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/local/templates/centino-heat_s2/js/matchMedia.min.js?1593347863592";s:6:"source";s:49:"/local/templates/centino-heat_s2/js/matchMedia.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css",t.id="matchmediajs-test",i.parentNode.insertBefore(t,i),n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=i:t.textContent=i,"1px"===n.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());
/* End */
;
; /* Start:"a:4:{s:4:"full";s:64:"/local/templates/centino-heat_s2/js/slick.min.js?159334786340073";s:6:"source";s:48:"/local/templates/centino-heat_s2/js/slick.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!1,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1===0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",null),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,c.options.infinite||(c.slideCount<=c.options.slidesToShow?c.currentSlide=0:c.currentSlide>e&&(c.currentSlide=e)),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d);
}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(a){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:99:"/local/templates/centino-heat_s2/vendor/OwlCarousel2-2.3.4/dist/owl.carousel.min.js?159334786144342";s:6:"source";s:79:"/local/templates/centino-heat_s2/vendor/OwlCarousel2-2.3.4/dist/owl.carousel.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:76:"/local/templates/centino-heat_s2/js/jquery.alphanumeric.min.js?1593347863942";s:6:"source";s:58:"/local/templates/centino-heat_s2/js/jquery.alphanumeric.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(n){n.fn.alphanumeric=function(r){var a,e,c=n(this),t="abcdefghijklmnopqrstuvwxyz",i=n.extend({ichars:"!@#$%^&*()+=[]\\';,/{}|\":<>?~`.- _",nchars:"",allow:""},r),h=i.allow.split(""),l=0;for(l;l<h.length;l++)-1!=i.ichars.indexOf(h[l])&&(h[l]="\\"+h[l]);return i.nocaps&&(i.nchars+=t.toUpperCase()),i.allcaps&&(i.nchars+=t),i.allow=h.join("|"),e=new RegExp(i.allow,"gi"),a=(i.ichars+i.nchars).replace(e,""),c.keypress(function(n){var r=String.fromCharCode(n.charCode?n.charCode:n.which);-1==a.indexOf(r)||n.ctrlKey||n.preventDefault()}),c.blur(function(){var n=c.val(),r=0;for(r;r<n.length;r++)if(-1!=a.indexOf(n[r]))return c.val(""),!1;return!1}),c},n.fn.numeric=function(r){var a="abcdefghijklmnopqrstuvwxyz",e=a.toUpperCase();return this.each(function(){n(this).alphanumeric(n.extend({nchars:a+e},r))})},n.fn.alpha=function(r){var a="1234567890";return this.each(function(){n(this).alphanumeric(n.extend({nchars:a},r))})}}(jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:78:"/local/templates/centino-heat_s2/js/jquery.autocomplete.min.js?159334786312531";s:6:"source";s:58:"/local/templates/centino-heat_s2/js/jquery.autocomplete.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(e){"use strict";function t(n,o){var i=this;i.element=n,i.el=e(n),i.suggestions=[],i.badQueries=[],i.selectedIndex=-1,i.currentValue=i.element.value,i.timeoutId=null,i.cachedResponse={},i.onChangeTimeout=null,i.onChange=null,i.isLocal=!1,i.suggestionsContainer=null,i.noSuggestionsContainer=null,i.options=e.extend({},t.defaults,o),i.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},i.hint=null,i.hintValue="",i.selection=null,i.initialize(),i.setOptions(o)}function n(e,t,n){return-1!==e.value.toLowerCase().indexOf(n)}function o(t){return"string"==typeof t?e.parseJSON(t):t}function i(e,t){if(!t)return e.value;var n="("+a.escapeRegExChars(t)+")";return e.value.replace(new RegExp(n,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")}function s(e,t){return'<div class="autocomplete-group">'+t+"</div>"}var a=function(){return{escapeRegExChars:function(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},createNode:function(e){var t=document.createElement("div");return t.className=e,t.style.position="absolute",t.style.display="none",t}}}(),u={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40},r=e.noop;t.utils=a,e.Autocomplete=t,t.defaults={ajaxSettings:{},autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:i,formatGroup:s,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:r,onSearchComplete:r,onSearchError:r,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:n,paramName:"query",transformResult:o,showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1},t.prototype={initialize:function(){var n,o=this,i="."+o.classes.suggestion,s=o.classes.selected,a=o.options;o.element.setAttribute("autocomplete","off"),o.noSuggestionsContainer=e('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),o.suggestionsContainer=t.utils.createNode(a.containerClass),n=e(o.suggestionsContainer),n.appendTo(a.appendTo||"body"),"auto"!==a.width&&n.css("width",a.width),n.on("mouseover.autocomplete",i,function(){o.activate(e(this).data("index"))}),n.on("mouseout.autocomplete",function(){o.selectedIndex=-1,n.children("."+s).removeClass(s)}),n.on("click.autocomplete",i,function(){o.select(e(this).data("index"))}),n.on("click.autocomplete",function(){clearTimeout(o.blurTimeoutId)}),o.fixPositionCapture=function(){o.visible&&o.fixPosition()},e(window).on("resize.autocomplete",o.fixPositionCapture),o.el.on("keydown.autocomplete",function(e){o.onKeyPress(e)}),o.el.on("keyup.autocomplete",function(e){o.onKeyUp(e)}),o.el.on("blur.autocomplete",function(){o.onBlur()}),o.el.on("focus.autocomplete",function(){o.onFocus()}),o.el.on("change.autocomplete",function(e){o.onKeyUp(e)}),o.el.on("input.autocomplete",function(e){o.onKeyUp(e)})},onFocus:function(){var e=this;e.fixPosition(),e.el.val().length>=e.options.minChars&&e.onValueChange()},onBlur:function(){var e=this;e.blurTimeoutId=setTimeout(function(){e.hide()},200)},abortAjax:function(){var e=this;e.currentRequest&&(e.currentRequest.abort(),e.currentRequest=null)},setOptions:function(t){var n=this,o=n.options;this.options=e.extend({},o,t),n.isLocal=e.isArray(o.lookup),n.isLocal&&(o.lookup=n.verifySuggestionsFormat(o.lookup)),o.orientation=n.validateOrientation(o.orientation,"bottom"),e(n.suggestionsContainer).css({"max-height":o.maxHeight+"px",width:o.width+"px","z-index":o.zIndex})},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var e=this;e.disabled=!0,clearTimeout(e.onChangeTimeout),e.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var t=this,n=e(t.suggestionsContainer),o=n.parent().get(0);if(o===document.body||t.options.forceFixPosition){var i=t.options.orientation,s=n.outerHeight(),a=t.el.outerHeight(),u=t.el.offset(),r={top:u.top,left:u.left};if("auto"===i){var l=e(window).height(),c=e(window).scrollTop(),g=-c+u.top-s,d=c+l-(u.top+a+s);i=Math.max(g,d)===g?"top":"bottom"}if("top"===i?r.top+=-s:r.top+=a,o!==document.body){var p,h=n.css("opacity");t.visible||n.css("opacity",0).show(),p=n.offsetParent().offset(),r.top-=p.top,r.left-=p.left,t.visible||n.css("opacity",h).hide()}"auto"===t.options.width&&(r.width=t.el.outerWidth()+"px"),n.css(r)}},isCursorAtEnd:function(){var e,t=this,n=t.el.val().length,o=t.element.selectionStart;return"number"==typeof o?o===n:document.selection?(e=document.selection.createRange(),e.moveStart("character",-n),n===e.text.length):!0},onKeyPress:function(e){var t=this;if(!t.disabled&&!t.visible&&e.which===u.DOWN&&t.currentValue)return void t.suggest();if(!t.disabled&&t.visible){switch(e.which){case u.ESC:t.el.val(t.currentValue),t.hide();break;case u.RIGHT:if(t.hint&&t.options.onHint&&t.isCursorAtEnd()){t.selectHint();break}return;case u.TAB:if(t.hint&&t.options.onHint)return void t.selectHint();if(-1===t.selectedIndex)return void t.hide();if(t.select(t.selectedIndex),t.options.tabDisabled===!1)return;break;case u.RETURN:if(-1===t.selectedIndex)return void t.hide();t.select(t.selectedIndex);break;case u.UP:t.moveUp();break;case u.DOWN:t.moveDown();break;default:return}e.stopImmediatePropagation(),e.preventDefault()}},onKeyUp:function(e){var t=this;if(!t.disabled){switch(e.which){case u.UP:case u.DOWN:return}clearTimeout(t.onChangeTimeout),t.currentValue!==t.el.val()&&(t.findBestHint(),t.options.deferRequestBy>0?t.onChangeTimeout=setTimeout(function(){t.onValueChange()},t.options.deferRequestBy):t.onValueChange())}},onValueChange:function(){var t=this,n=t.options,o=t.el.val(),i=t.getQuery(o);return t.selection&&t.currentValue!==i&&(t.selection=null,(n.onInvalidateSelection||e.noop).call(t.element)),clearTimeout(t.onChangeTimeout),t.currentValue=o,t.selectedIndex=-1,n.triggerSelectOnValidInput&&t.isExactMatch(i)?void t.select(0):void(i.length<n.minChars?t.hide():t.getSuggestions(i))},isExactMatch:function(e){var t=this.suggestions;return 1===t.length&&t[0].value.toLowerCase()===e.toLowerCase()},getQuery:function(t){var n,o=this.options.delimiter;return o?(n=t.split(o),e.trim(n[n.length-1])):t},getSuggestionsLocal:function(t){var n,o=this,i=o.options,s=t.toLowerCase(),a=i.lookupFilter,u=parseInt(i.lookupLimit,10);return n={suggestions:e.grep(i.lookup,function(e){return a(e,t,s)})},u&&n.suggestions.length>u&&(n.suggestions=n.suggestions.slice(0,u)),n},getSuggestions:function(t){var n,o,i,s,a=this,u=a.options,r=u.serviceUrl;if(u.params[u.paramName]=t,u.onSearchStart.call(a.element,u.params)!==!1){if(o=u.ignoreParams?null:u.params,e.isFunction(u.lookup))return void u.lookup(t,function(e){a.suggestions=e.suggestions,a.suggest(),u.onSearchComplete.call(a.element,t,e.suggestions)});a.isLocal?n=a.getSuggestionsLocal(t):(e.isFunction(r)&&(r=r.call(a.element,t)),i=r+"?"+e.param(o||{}),n=a.cachedResponse[i]),n&&e.isArray(n.suggestions)?(a.suggestions=n.suggestions,a.suggest(),u.onSearchComplete.call(a.element,t,n.suggestions)):a.isBadQuery(t)?u.onSearchComplete.call(a.element,t,[]):(a.abortAjax(),s={url:r,data:o,type:u.type,dataType:u.dataType},e.extend(s,u.ajaxSettings),a.currentRequest=e.ajax(s).done(function(e){var n;a.currentRequest=null,n=u.transformResult(e,t),a.processResponse(n,t,i),u.onSearchComplete.call(a.element,t,n.suggestions)}).fail(function(e,n,o){u.onSearchError.call(a.element,t,e,n,o)}))}},isBadQuery:function(e){if(!this.options.preventBadQueries)return!1;for(var t=this.badQueries,n=t.length;n--;)if(0===e.indexOf(t[n]))return!0;return!1},hide:function(){var t=this,n=e(t.suggestionsContainer);e.isFunction(t.options.onHide)&&t.visible&&t.options.onHide.call(t.element,n),t.visible=!1,t.selectedIndex=-1,clearTimeout(t.onChangeTimeout),e(t.suggestionsContainer).hide(),t.signalHint(null)},suggest:function(){if(!this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var t,n=this,o=n.options,i=o.groupBy,s=o.formatResult,a=n.getQuery(n.currentValue),u=n.classes.suggestion,r=n.classes.selected,l=e(n.suggestionsContainer),c=e(n.noSuggestionsContainer),g=o.beforeRender,d="",p=function(e,n){var s=e.data[i];return t===s?"":(t=s,o.formatGroup(e,t))};return o.triggerSelectOnValidInput&&n.isExactMatch(a)?void n.select(0):(e.each(n.suggestions,function(e,t){i&&(d+=p(t,a,e)),d+='<div class="'+u+'" data-index="'+e+'">'+s(t,a,e)+"</div>"}),this.adjustContainerWidth(),c.detach(),l.html(d),e.isFunction(g)&&g.call(n.element,l,n.suggestions),n.fixPosition(),l.show(),o.autoSelectFirst&&(n.selectedIndex=0,l.scrollTop(0),l.children("."+u).first().addClass(r)),n.visible=!0,void n.findBestHint())},noSuggestions:function(){var t=this,n=t.options.beforeRender,o=e(t.suggestionsContainer),i=e(t.noSuggestionsContainer);this.adjustContainerWidth(),i.detach(),o.empty(),o.append(i),e.isFunction(n)&&n.call(t.element,o,t.suggestions),t.fixPosition(),o.show(),t.visible=!0},adjustContainerWidth:function(){var t,n=this,o=n.options,i=e(n.suggestionsContainer);"auto"===o.width?(t=n.el.outerWidth(),i.css("width",t>0?t:300)):"flex"===o.width&&i.css("width","")},findBestHint:function(){var t=this,n=t.el.val().toLowerCase(),o=null;n&&(e.each(t.suggestions,function(e,t){var i=0===t.value.toLowerCase().indexOf(n);return i&&(o=t),!i}),t.signalHint(o))},signalHint:function(t){var n="",o=this;t&&(n=o.currentValue+t.value.substr(o.currentValue.length)),o.hintValue!==n&&(o.hintValue=n,o.hint=t,(this.options.onHint||e.noop)(n))},verifySuggestionsFormat:function(t){return t.length&&"string"==typeof t[0]?e.map(t,function(e){return{value:e,data:null}}):t},validateOrientation:function(t,n){return t=e.trim(t||"").toLowerCase(),-1===e.inArray(t,["auto","bottom","top"])&&(t=n),t},processResponse:function(e,t,n){var o=this,i=o.options;e.suggestions=o.verifySuggestionsFormat(e.suggestions),i.noCache||(o.cachedResponse[n]=e,i.preventBadQueries&&!e.suggestions.length&&o.badQueries.push(t)),t===o.getQuery(o.currentValue)&&(o.suggestions=e.suggestions,o.suggest())},activate:function(t){var n,o=this,i=o.classes.selected,s=e(o.suggestionsContainer),a=s.find("."+o.classes.suggestion);return s.find("."+i).removeClass(i),o.selectedIndex=t,-1!==o.selectedIndex&&a.length>o.selectedIndex?(n=a.get(o.selectedIndex),e(n).addClass(i),n):null},selectHint:function(){var t=this,n=e.inArray(t.hint,t.suggestions);t.select(n)},select:function(e){var t=this;t.hide(),t.onSelect(e)},moveUp:function(){var t=this;if(-1!==t.selectedIndex)return 0===t.selectedIndex?(e(t.suggestionsContainer).children().first().removeClass(t.classes.selected),t.selectedIndex=-1,t.el.val(t.currentValue),void t.findBestHint()):void t.adjustScroll(t.selectedIndex-1)},moveDown:function(){var e=this;e.selectedIndex!==e.suggestions.length-1&&e.adjustScroll(e.selectedIndex+1)},adjustScroll:function(t){var n=this,o=n.activate(t);if(o){var i,s,a,u=e(o).outerHeight();i=o.offsetTop,s=e(n.suggestionsContainer).scrollTop(),a=s+n.options.maxHeight-u,s>i?e(n.suggestionsContainer).scrollTop(i):i>a&&e(n.suggestionsContainer).scrollTop(i-n.options.maxHeight+u),n.options.preserveInput||n.el.val(n.getValue(n.suggestions[t].value)),n.signalHint(null)}},onSelect:function(t){var n=this,o=n.options.onSelect,i=n.suggestions[t];n.currentValue=n.getValue(i.value),n.currentValue===n.el.val()||n.options.preserveInput||n.el.val(n.currentValue),n.signalHint(null),n.suggestions=[],n.selection=i,e.isFunction(o)&&o.call(n.element,i)},getValue:function(e){var t,n,o=this,i=o.options.delimiter;return i?(t=o.currentValue,n=t.split(i),1===n.length?e:t.substr(0,t.length-n[n.length-1].length)+e):e},dispose:function(){var t=this;t.el.off(".autocomplete").removeData("autocomplete"),e(window).off("resize.autocomplete",t.fixPositionCapture),e(t.suggestionsContainer).remove()}},e.fn.devbridgeAutocomplete=function(n,o){var i="autocomplete";return arguments.length?this.each(function(){var s=e(this),a=s.data(i);"string"==typeof n?a&&"function"==typeof a[n]&&a[n](o):(a&&a.dispose&&a.dispose(),a=new t(this,n),s.data(i,a))}):this.first().data(i)},e.fn.autocomplete||(e.fn.autocomplete=e.fn.devbridgeAutocomplete)});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:84:"/local/templates/centino-heat_s2/js/jquery.mobile.custom.touch.min.js?15933478637784";s:6:"source";s:69:"/local/templates/centino-heat_s2/js/jquery.mobile.custom.touch.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e,t,n){typeof define=="function"&&define.amd?define(["jquery"],function(r){return n(r,e,t),r.mobile}):n(e.jQuery,e,t)})(this,document,function(e,t,n,r){(function(e,t,n,r){function T(e){while(e&&typeof e.originalEvent!="undefined")e=e.originalEvent;return e}function N(t,n){var i=t.type,s,o,a,l,c,h,p,d,v;t=e.Event(t),t.type=n,s=t.originalEvent,o=e.event.props,i.search(/^(mouse|click)/)>-1&&(o=f);if(s)for(p=o.length,l;p;)l=o[--p],t[l]=s[l];i.search(/mouse(down|up)|click/)>-1&&!t.which&&(t.which=1);if(i.search(/^touch/)!==-1){a=T(s),i=a.touches,c=a.changedTouches,h=i&&i.length?i[0]:c&&c.length?c[0]:r;if(h)for(d=0,v=u.length;d<v;d++)l=u[d],t[l]=h[l]}return t}function C(t){var n={},r,s;while(t){r=e.data(t,i);for(s in r)r[s]&&(n[s]=n.hasVirtualBinding=!0);t=t.parentNode}return n}function k(t,n){var r;while(t){r=e.data(t,i);if(r&&(!n||r[n]))return t;t=t.parentNode}return null}function L(){g=!1}function A(){g=!0}function O(){E=0,v.length=0,m=!1,A()}function M(){L()}function _(){D(),c=setTimeout(function(){c=0,O()},e.vmouse.resetTimerDuration)}function D(){c&&(clearTimeout(c),c=0)}function P(t,n,r){var i;if(r&&r[t]||!r&&k(n.target,t))i=N(n,t),e(n.target).trigger(i);return i}function H(t){var n=e.data(t.target,s),r;!m&&(!E||E!==n)&&(r=P("v"+t.type,t),r&&(r.isDefaultPrevented()&&t.preventDefault(),r.isPropagationStopped()&&t.stopPropagation(),r.isImmediatePropagationStopped()&&t.stopImmediatePropagation()))}function B(t){var n=T(t).touches,r,i,o;n&&n.length===1&&(r=t.target,i=C(r),i.hasVirtualBinding&&(E=w++,e.data(r,s,E),D(),M(),d=!1,o=T(t).touches[0],h=o.pageX,p=o.pageY,P("vmouseover",t,i),P("vmousedown",t,i)))}function j(e){if(g)return;d||P("vmousecancel",e,C(e.target)),d=!0,_()}function F(t){if(g)return;var n=T(t).touches[0],r=d,i=e.vmouse.moveDistanceThreshold,s=C(t.target);d=d||Math.abs(n.pageX-h)>i||Math.abs(n.pageY-p)>i,d&&!r&&P("vmousecancel",t,s),P("vmousemove",t,s),_()}function I(e){if(g)return;A();var t=C(e.target),n,r;P("vmouseup",e,t),d||(n=P("vclick",e,t),n&&n.isDefaultPrevented()&&(r=T(e).changedTouches[0],v.push({touchID:E,x:r.clientX,y:r.clientY}),m=!0)),P("vmouseout",e,t),d=!1,_()}function q(t){var n=e.data(t,i),r;if(n)for(r in n)if(n[r])return!0;return!1}function R(){}function U(t){var n=t.substr(1);return{setup:function(){q(this)||e.data(this,i,{});var r=e.data(this,i);r[t]=!0,l[t]=(l[t]||0)+1,l[t]===1&&b.bind(n,H),e(this).bind(n,R),y&&(l.touchstart=(l.touchstart||0)+1,l.touchstart===1&&b.bind("touchstart",B).bind("touchend",I).bind("touchmove",F).bind("scroll",j))},teardown:function(){--l[t],l[t]||b.unbind(n,H),y&&(--l.touchstart,l.touchstart||b.unbind("touchstart",B).unbind("touchmove",F).unbind("touchend",I).unbind("scroll",j));var r=e(this),s=e.data(this,i);s&&(s[t]=!1),r.unbind(n,R),q(this)||r.removeData(i)}}}var i="virtualMouseBindings",s="virtualTouchID",o="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),u="clientX clientY pageX pageY screenX screenY".split(" "),a=e.event.mouseHooks?e.event.mouseHooks.props:[],f=e.event.props.concat(a),l={},c=0,h=0,p=0,d=!1,v=[],m=!1,g=!1,y="addEventListener"in n,b=e(n),w=1,E=0,S,x;e.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(x=0;x<o.length;x++)e.event.special[o[x]]=U(o[x]);y&&n.addEventListener("click",function(t){var n=v.length,r=t.target,i,o,u,a,f,l;if(n){i=t.clientX,o=t.clientY,S=e.vmouse.clickDistanceThreshold,u=r;while(u){for(a=0;a<n;a++){f=v[a],l=0;if(u===r&&Math.abs(f.x-i)<S&&Math.abs(f.y-o)<S||e.data(u,s)===f.touchID){t.preventDefault(),t.stopPropagation();return}}u=u.parentNode}}},!0)})(e,t,n),function(e){e.mobile={}}(e),function(e,t){var r={touch:"ontouchend"in n};e.mobile.support=e.mobile.support||{},e.extend(e.support,r),e.extend(e.mobile.support,r)}(e),function(e,t,r){function l(t,n,i,s){var o=i.type;i.type=n,s?e.event.trigger(i,r,t):e.event.dispatch.call(t,i),i.type=o}var i=e(n),s=e.mobile.support.touch,o="touchmove scroll",u=s?"touchstart":"mousedown",a=s?"touchend":"mouseup",f=s?"touchmove":"mousemove";e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(t,n){e.fn[n]=function(e){return e?this.bind(n,e):this.trigger(n)},e.attrFn&&(e.attrFn[n]=!0)}),e.event.special.scrollstart={enabled:!0,setup:function(){function s(e,n){r=n,l(t,r?"scrollstart":"scrollstop",e)}var t=this,n=e(t),r,i;n.bind(o,function(t){if(!e.event.special.scrollstart.enabled)return;r||s(t,!0),clearTimeout(i),i=setTimeout(function(){s(t,!1)},50)})},teardown:function(){e(this).unbind(o)}},e.event.special.tap={tapholdThreshold:750,emitTapOnTaphold:!0,setup:function(){var t=this,n=e(t),r=!1;n.bind("vmousedown",function(s){function a(){clearTimeout(u)}function f(){a(),n.unbind("vclick",c).unbind("vmouseup",a),i.unbind("vmousecancel",f)}function c(e){f(),!r&&o===e.target?l(t,"tap",e):r&&e.preventDefault()}r=!1;if(s.which&&s.which!==1)return!1;var o=s.target,u;n.bind("vmouseup",a).bind("vclick",c),i.bind("vmousecancel",f),u=setTimeout(function(){e.event.special.tap.emitTapOnTaphold||(r=!0),l(t,"taphold",e.Event("taphold",{target:o}))},e.event.special.tap.tapholdThreshold)})},teardown:function(){e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),i.unbind("vmousecancel")}},e.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:30,getLocation:function(e){var n=t.pageXOffset,r=t.pageYOffset,i=e.clientX,s=e.clientY;if(e.pageY===0&&Math.floor(s)>Math.floor(e.pageY)||e.pageX===0&&Math.floor(i)>Math.floor(e.pageX))i-=n,s-=r;else if(s<e.pageY-r||i<e.pageX-n)i=e.pageX-n,s=e.pageY-r;return{x:i,y:s}},start:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y],origin:e(t.target)}},stop:function(t){var n=t.originalEvent.touches?t.originalEvent.touches[0]:t,r=e.event.special.swipe.getLocation(n);return{time:(new Date).getTime(),coords:[r.x,r.y]}},handleSwipe:function(t,n,r,i){if(n.time-t.time<e.event.special.swipe.durationThreshold&&Math.abs(t.coords[0]-n.coords[0])>e.event.special.swipe.horizontalDistanceThreshold&&Math.abs(t.coords[1]-n.coords[1])<e.event.special.swipe.verticalDistanceThreshold){var s=t.coords[0]>n.coords[0]?"swipeleft":"swiperight";return l(r,"swipe",e.Event("swipe",{target:i,swipestart:t,swipestop:n}),!0),l(r,s,e.Event(s,{target:i,swipestart:t,swipestop:n}),!0),!0}return!1},eventInProgress:!1,setup:function(){var t,n=this,r=e(n),s={};t=e.data(this,"mobile-events"),t||(t={length:0},e.data(this,"mobile-events",t)),t.length++,t.swipe=s,s.start=function(t){if(e.event.special.swipe.eventInProgress)return;e.event.special.swipe.eventInProgress=!0;var r,o=e.event.special.swipe.start(t),u=t.target,l=!1;s.move=function(t){if(!o||t.isDefaultPrevented())return;r=e.event.special.swipe.stop(t),l||(l=e.event.special.swipe.handleSwipe(o,r,n,u),l&&(e.event.special.swipe.eventInProgress=!1)),Math.abs(o.coords[0]-r.coords[0])>e.event.special.swipe.scrollSupressionThreshold&&t.preventDefault()},s.stop=function(){l=!0,e.event.special.swipe.eventInProgress=!1,i.off(f,s.move),s.move=null},i.on(f,s.move).one(a,s.stop)},r.on(u,s.start)},teardown:function(){var t,n;t=e.data(this,"mobile-events"),t&&(n=t.swipe,delete t.swipe,t.length--,t.length===0&&e.removeData(this,"mobile-events")),n&&(n.start&&e(this).off(u,n.start),n.move&&i.off(f,n.move),n.stop&&i.off(a,n.stop))}},e.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe.left",swiperight:"swipe.right"},function(t,n){e.event.special[t]={setup:function(){e(this).bind(n,e.noop)},teardown:function(){e(this).unbind(n)}}})}(e,this)});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/local/templates/centino-heat_s2/js/custom.js?16092458692183";s:6:"source";s:45:"/local/templates/centino-heat_s2/js/custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* Add here all your JS customizations */

$( document ).ready(function(){

var city = $(".city1").data('city');
//$(".city").val(city).change();
$(".valsit").click(function () {
     //var text = $(this).val();
	var text = $(this).data('value');
	//console.log(text);
   $(".city").val(text).change();

});
});


$(function (){
  anchorLink();
  mobileControlHelpChoose();

  $('#scrollToTop2').on('click', function(e){
    e.preventDefault();
    $('body, html').animate({scrollTop : 0}, 500);
    return false;
  });

  function mobileControlHelpChoose() {
    var helpControlPC = $('[data-name="question"]'),
        text = 'Помощь в подборе',
        titlePageWrapper,
        wrapper;

    if (helpControlPC.length) {
      titlePageWrapper = $('#pagetitle').parent();
      wrapper = initContainer(titlePageWrapper);
      initControl(wrapper, text, helpControlPC);
    }

    function initControl(scope, text, elemTarget) {
		var control = $('<span class="ctm-mobile-help-choose-control animate-load" data-event="jqm" data-param-id="54" data-name="question">' + text + '</span>');
    //  var control = $('<span class="ctm-mobile-help-choose-control">' + text + '</span>');
/*
      control.on('click', function (){
        elemTarget.trigger('click');
      });
*/
      scope.append(control);
    }

    function initContainer(scope) {
      var wrapper = $('<section class="ctm-mobile-help-choose" />');
      wrapper.insertAfter(scope);

      return wrapper;
    }
  }

  function anchorLink() {
    var link = $('[href="#vrf"]'),
        linkText = 'Что такое VRF-система ?',
        linkHref = 'vrf',
        titlePageWrapper = $('#pagetitle').parent(),
        wrapper;

    if (link.length) {
      wrapper = initContainer(titlePageWrapper);
      initAnchor(wrapper, linkHref, linkText);
    }

    function initAnchor(scope, href, text) {
      var lnk = $('<a class="ctm-anchor-link" href="#' + href + '">' + text + '</a>');
      scope.append(lnk);
    }

    function initContainer(scope) {
      var wrapper = $('<section class="ctm-anchor-link-wrapper" />');
      wrapper.insertAfter(scope);

      return wrapper;
    }
  }
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:63:"/local/templates/centino-heat_s2/js/general.js?1605276331153572";s:6:"source";s:46:"/local/templates/centino-heat_s2/js/general.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
getRandomInt = function(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}

ShowOverlay = function(){
	$('<div class="jqmOverlay waiting"></div>').appendTo('body');
}

HideOverlay = function(){
	$('.jqmOverlay').detach();
}

$(document).on('mouseenter', 'header .dropdown-menu li.dropdown-submenu', function () {
	var _this = $(this),
		menu = _this.find('> .dropdown-menu');

		menu.velocity('stop');

		if(menu.css('opacity') != 0) {
			menu.css('opacity' , '1');
		} else {
			menu.velocity('transition.fadeIn', {
				duration: 200,
				delay: 350
			});
		}

		_this.one('mouseleave', function () {
			menu.velocity('stop').velocity('transition.fadeOut', {
				duration: 150,
				delay: 300
			});
		});

});

$(document).on('mouseenter', 'header td.dropdown.menu-item', function () {
	var _this = $(this),
		menu = _this.find('.wrap > .dropdown-menu');

		menu.velocity('stop');

		if(menu.css('opacity') != 0) {
			menu.css('opacity' , '1');
		} else {
			menu.velocity('transition.fadeIn', {
				duration: 200,
				delay: 350
			});
		}

		_this.one('mouseleave', function () {
			menu.velocity('stop').velocity('transition.fadeOut', {
				duration: 150,
				delay: 300
			});
		});

});

$(document).on('mouseenter', 'header .burger', function () {
	var _this = $(this),
		menu = _this.find('> .site_map_wrapper');

		menu.velocity('stop');

		if( menu.css('opacity') != 0 && menu.attr('velo') == 'Y' ) {
			menu.css('opacity' , '1');
		} else {
			menu.velocity('transition.fadeIn', {
				duration: 200,
				delay: 350,
				begin: function() {menu.attr('velo', 'Y')}
			});
		}

		_this.one('mouseleave', function () {
			menu.velocity('stop').velocity('transition.fadeOut', {
				duration: 150,
				delay: 300
			});
		});

});

contactsInputHeight = function () {
	if($('.contacts_1').length) {
		if(window.matchMedia('(min-width:992px)').matches) {
			var left_block_height = Number($('.left_contact_block').css('height').replace('px', ''));
			var descr_height = Number($('.contacts_1 .contacts div[itemprop=description]').closest('.row').css('height').replace('px', ''));
			var questions_height = Number($('.contacts_1 .contacts .top_questions').css('height').replace('px', ''));
			var bottom_block_height = 0;
			if($('.contacts_1 .contacts .bottom_block').length){
				bottom_block_height = Number($('.contacts_1 .contacts .bottom_block').css('height').replace('px', ''));
			} else if($('.contacts_1 .contacts .form-footer')) {
				bottom_block_height = Number($('.contacts_1 .contacts .form-footer').css('height').replace('px', ''));
			}
			var captcha_height = 0;
			if($('.contacts_1 .contacts .captcha-row').length){
				var captcha_height = $('.contacts_1 .contacts .captcha-row').outerHeight() + 20;
			}
			var form_row_top =  Number($('.contacts_1 .contacts form > .row > div').css('padding-top').replace('px', ''));
			var form_group_bottom = Number($('.contacts_1 .contacts .message .form-group').css('margin-bottom').replace('px', ''));
			var button_bottom = 0;
			if($('.contacts_1 .contacts .bottom_block button').length) {
				button_bottom = Number($('.contacts_1 .contacts .bottom_block button').css('margin-bottom').replace('px', ''));
			} else if ($('.contacts_1 .contacts .form-footer input[type=submit]')) {
				button_bottom = Number($('.contacts_1 .contacts .form-footer input[type=submit]').css('margin-bottom').replace('px', ''));
			}


			var need_height = left_block_height - (descr_height + questions_height + bottom_block_height + form_row_top + form_group_bottom + captcha_height - button_bottom);
			console.log(descr_height);
			console.log(questions_height);
			console.log(bottom_block_height);
			console.log(form_row_top);
			console.log(form_group_bottom);
			console.log(captcha_height);
			console.log(button_bottom);
			console.log(need_height);
			var mess_block = $('.contacts_1 .contacts .message .input textarea');
			mess_block.css('height', need_height+'px');
		}
	} else if($('.contacts_2').length) {
		if(window.matchMedia('(min-width:768px)').matches) {
			var right_block_height = Number($('.contacts_right_block').css('height').replace('px', ''));
			var button_bottom = Number($('.contacts_2 .contacts .bottom_block button').css('margin-bottom').replace('px', ''));
			var mess_block = $('.contacts_2 .contacts .message .input textarea');
			mess_block.css('height', right_block_height - button_bottom + 'px');
		}
	}
}

CheckMenuOffset = function(){
	$('#headerfixed li.dropdown, #headerfixed li.dropdown-toggle, #headerfixed li.dropdown-submenu').hover(
		function(){
			var el = $(this).find('.dropdown-menu')[0];
			$(this).find('.offsetMenu').css('top', '');
			$(this).find('.offsetMenu').css('bottom', '');
			if(el.getBoundingClientRect().bottom > $(window).height()) {
				el.classList.add('offsetMenu');
				var bottom = this.getBoundingClientRect().bottom - $(window).height();
				$(this).find('.offsetMenu').css('top', 'auto');
				$(this).find('.offsetMenu').css('bottom', bottom+'px');
			}
		},
		function(){}
	);
	$('#headerfixed li.dropdown, #headerfixed li.dropdown-toggle, #headerfixed li.dropdown-submenu').on('touchend', function() {
		var el = $(this).find('.dropdown-menu')[0];
		$(this).find('.offsetMenu').css('top', '');
		$(this).find('.offsetMenu').css('bottom', '');
		if(el.getBoundingClientRect().bottom > $(window).height()) {
			el.classList.add('offsetMenu');
			var bottom = this.getBoundingClientRect().bottom - $(window).height();
			$(this).find('.offsetMenu').css('top', 'auto');
			$(this).find('.offsetMenu').css('bottom', bottom+'px');
		}
	});
}

CheckTopMenuDotted = function(){
	var menu = $('nav.mega-menu.sliced');
	/*if(isMobile)
		return;*/

	if(window.matchMedia('(max-width:991px)').matches)
		return;

	if(menu.length)
	{
		menu.each(function(){
			var menuMoreItem = $(this).find('td.js-dropdown');
			if($(this).parents('.collapse').css('display') == 'none'){
				return false;
			}

			var block_w = $(this).closest('div').actual('width');
			var	menu_w = $(this).find('table').actual('outerWidth');
			var afterHide = false;

			while(menu_w > block_w) {
				menuItemOldSave = $(this).find('td').not('.nosave').last();
				if(menuItemOldSave.length){
					menuMoreItem.show();
					menuItemNewSave = '<li class="' + (menuItemOldSave.hasClass('dropdown') ? 'dropdown-submenu ' : '') + (menuItemOldSave.hasClass('active') ? 'active ' : '') + '" data-hidewidth="' + menu_w + '">' + menuItemOldSave.find('.wrap').html() + '</li>';
					menuItemOldSave.remove();
					menuMoreItem.find('> .wrap > .dropdown-menu').prepend(menuItemNewSave);
					menu_w = $(this).find('table').actual('outerWidth');
					afterHide = true;
				}
				//menu.find('.nosave').css('display', 'table-cell');
				else{
					break;
				}
			}

			if(!afterHide) {
				do {
					var menuItemOldSaveCnt = menuMoreItem.find('.dropdown-menu').find('li').length;
					menuItemOldSave = menuMoreItem.find('.dropdown-menu').find('li').first();
					if(!menuItemOldSave.length) {
						menuMoreItem.hide();
						break;
					}
					else {
						var hideWidth = menuItemOldSave.attr('data-hidewidth');
						if(hideWidth > block_w) {
							break
						}
						else {
							menuItemNewSave = '<td class="menu-item hght-100 ' + (menuItemOldSave.hasClass('dropdown-submenu') ? 'dropdown ' : '') + (menuItemOldSave.hasClass('active') ? 'active ' : '') + '" data-hidewidth="' + block_w + '"><div class="wrap hght-100 flex-row-c">' + menuItemOldSave.html() + '</div></td>';
							menuItemOldSave.remove();
							$(menuItemNewSave).insertBefore($(this).find('td.js-dropdown'));
							if(!menuItemOldSaveCnt) {
								menuMoreItem.hide();
								break;
							}
						}
					}
					menu_w = $(this).find('table').actual('outerWidth');
				}
				while(menu_w <= block_w);
			}
			$(this).find('td').css('visibility', 'visible');
			$(this).find('td').removeClass('unvisible');
		})

	}
	return false;
}

CheckTopVisibleMenu = function(that) {
	var dropdownMenu = $('.dropdown-menu:visible').last();
	if(dropdownMenu.length){
		dropdownMenu.find('a').css('white-space', '');
		dropdownMenu.css('left', '');
		dropdownMenu.css('right', '');
		dropdownMenu.removeClass('toright');

		var dropdownMenu_left = dropdownMenu.offset().left;
		if(typeof(dropdownMenu_left) != 'undefined'){
			var menu = dropdownMenu.parents('.mega-menu');
			if(!menu.length)
				menu = dropdownMenu.closest('.logo-row');
			var menu_width = menu.outerWidth();
			var menu_left = menu.offset().left;
			var menu_right = menu_left + menu_width;
			var isToRight = dropdownMenu.parents('.toright').length > 0;
			var parentsDropdownMenus = dropdownMenu.parents('.dropdown-menu');
			var isHasParentDropdownMenu = parentsDropdownMenus.length > 0;
			if(isHasParentDropdownMenu){
				var parentDropdownMenu_width = parentsDropdownMenus.first().outerWidth();
				var parentDropdownMenu_left = parentsDropdownMenus.first().offset().left;
				var parentDropdownMenu_right = parentDropdownMenu_width + parentDropdownMenu_left;
			}

			if(parentDropdownMenu_right + dropdownMenu.outerWidth() > menu_right){
				dropdownMenu.find('a').css('white-space', 'normal');
			}

			var dropdownMenu_width = dropdownMenu.outerWidth();
			var dropdownMenu_right = dropdownMenu_left + dropdownMenu_width;

			if(dropdownMenu_right > menu_right || isToRight){


				var addleft = 0;
				addleft = menu_right - dropdownMenu_right;
				if(isHasParentDropdownMenu || isToRight){

					dropdownMenu.css('left', 'auto');
					dropdownMenu.css('right', '100%');
					dropdownMenu.addClass('toright');
				}
				else{
					var dropdownMenu_curLeft = parseInt(dropdownMenu.css('left'));
					dropdownMenu.css('left', (dropdownMenu_curLeft + addleft) + 'px');
				}
			}
		}
	}
}

MegaMenuFixed = function(){
	var animationTime = 150;

	$('.logo_and_menu-row .burger').on('click', function(){
		$('.mega_fixed_menu').fadeIn(animationTime);
	});

	$('.mega_fixed_menu .svg.svg-close').on('click', function(){
		$(this).closest('.mega_fixed_menu').fadeOut(animationTime);
	});

	$('.mega_fixed_menu .dropdown-menu .arrow').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		$(this).closest('.dropdown-submenu').find('.dropdown-menu').slideToggle(animationTime);
		$(this).closest('.dropdown-submenu').addClass('opened');
	});
}

CheckPopupTop = function(){
	var popup = $('.jqmWindow.show');
	if(popup.length){
		var documentScollTop = $(document).scrollTop();
		var windowHeight = $(window).height();
		var popupTop = parseInt(popup.css('top'));
		var popupHeight = popup.height();

		if(windowHeight >= popupHeight){
			// center
			popupTop = (windowHeight - popupHeight) / 2;
		}
		else{
			if(documentScollTop > documentScrollTopLast){
				// up
				popupTop -= documentScollTop - documentScrollTopLast;
			}
			else if(documentScollTop < documentScrollTopLast){
				// down
				popupTop += documentScrollTopLast - documentScollTop;
			}

			if(popupTop + popupHeight < windowHeight){
				// bottom
				popupTop = windowHeight - popupHeight;
			}
			else if(popupTop > 0){
				// top
				popupTop = 0;
			}
		}
		popup.css('top', popupTop + 'px');
	}
}

CheckMainBannerSliderVText = function(slider){
	/*if(slider.parents('.banners-big').length){
		var sh = slider.height();
		slider.find('.item').each(function() {
			var curSlideTextInner = $(this).find('.text .inner');
			if(curSlideTextInner.length){
				var ith = curSlideTextInner.actual('height');
				var p = (ith >= sh ? 0 : Math.floor((sh - ith) / 2));
				curSlideTextInner.css('padding-top', p + 'px');
			}
		});
	}*/
}

CheckStickyFooter = function() {
	BX.addCustomEvent('onWindowResize', function(eventdata){
		if(!isMobile)
		{
			try{
				var footerHeight = $('footer').outerHeight();
				ignoreResize.push(true);
				$('footer').css('margin-top', '-' + footerHeight + 'px');
				$('.body').css('margin-bottom', '-' + footerHeight + 'px');
				$('.main').css('padding-bottom', footerHeight + 0 + 'px');
				ignoreResize.pop();
			}
			catch(e){}
		}
	});
}

verticalAlign = function(class_name){
	if(typeof class_name == "undefined")
		class_name = 'auto_align';
    if($('.'+class_name).length)
    {
	    maxHeight = 0;
	    $('.'+class_name).each(function(){
	        if ($(this).height()> maxHeight){
	            maxHeight = $(this).height();
	        };
	    });
	    $('.'+class_name).each(function(){

	            delta = Math.round((maxHeight - $(this).height())/2);
	            $(this).css({'padding-top': delta+'px', 'padding-bottom': delta+'px'});
	    });
	}
}

getGridSize = function(counts, custom_counts) {
	var z = parseInt($('.body_media').css('top'));
	if(typeof(custom_counts) != 'undefined')
	{
		if(window.matchMedia('(max-width: 700px)').matches)
			return (counts[3] ? counts[3] : counts[2]);
		else if(window.matchMedia('(max-width: 850px)').matches)
			return counts[2];
		else if(window.matchMedia('(max-width: 1200px)').matches)
			return counts[1];
		else
			return counts[0];
	}
	else
	{
		if(window.matchMedia('(max-width: 600px)').matches)
		{
			return (counts[3] ? counts[3] : counts[2]);
		}
		else
			return (z == 2 ? counts[0] : z == 1 ? counts[1] : counts[2]);
	}
}

CheckFlexSlider = function(){
	$('.flexslider:not(.thmb):visible').each(function(){
		var slider = $(this);
		slider.resize();
		var counts = slider.data('flexslider').vars.counts,
			slide_counts = slider.data('flexslider').vars.slide_counts;
		if(typeof(counts) != 'undefined'){
			var cnt = getGridSize(counts, slider.data('flexslider').vars.customGrid);
			var to0 = (cnt != slider.data('flexslider').vars.minItems || cnt != slider.data('flexslider').vars.maxItems || cnt != slider.data('flexslider').vars.move);
			if(to0){
				slider.data('flexslider').vars.minItems = cnt;
				slider.data('flexslider').vars.maxItems = cnt;
				if(typeof(slide_counts) != 'undefined')
					slider.data('flexslider').vars.move = slide_counts;
				else
					slider.data('flexslider').vars.move = cnt;

				slider.flexslider(0);
				slider.resize();
				slider.resize(); // twise!
			}
		}
	});
}

CheckBreadcrumbFixed  = function(){
	var Breadcrumb_fixed = $('.breadcrumbFixed');
		header = $('header').first();
	if(header.length && !$('body.index').length)
	{
		var isBreadcrumbFixed = false,
			BreadcrumbCanFix = true,
			BreadcrumbFixedHeight = Breadcrumb_fixed.actual('outerHeight'),
			headerNormalHeight = header.actual('outerHeight'),
			headerDiffHeight = headerNormalHeight - BreadcrumbFixedHeight + 30,
			mobileBtnMenu = $('.btn.btn-responsive-nav'),
			headerTop = $('#panel:visible').actual('outerHeight');
			topBlock = $('.TOP_HEADER').first();

		if(headerDiffHeight <= 0)
			headerDiffHeight = 0;
		if(topBlock.length)
			headerTop += topBlock.actual('outerHeight');

		$(window).scroll(function(){
				var scrollTop = $(window).scrollTop();
				BreadcrumbCanFix = !mobileBtnMenu.is(':visible')/* && !$('.dropdown-menu:visible').length*/;

				var current_is = $('.search-wrapper .search-input:visible'),
					title_search_result = $('.title-search-result.'+current_is.attr('id')),
					pos, pos_input;

				if(!isBreadcrumbFixed)
				{
					if((scrollTop > headerNormalHeight + headerTop) && BreadcrumbCanFix)
					{
						if($('.breadcrumb_wrapper_fixed').length) {
							var breadcrumb = $('.breadcrumb_wrapper #navigation');
							$('.breadcrumb_wrapper').empty();
							$('.breadcrumb_wrapper_fixed').append(breadcrumb);
						}

						isBreadcrumbFixed = true;
						Breadcrumb_fixed.css('top', '-' + headerNormalHeight + 'px');

						Breadcrumb_fixed.addClass('fixed');

						// header_fixed.stop(0).animate({top: '0'}, 300);

						Breadcrumb_fixed.animate({top: '0'}, {duration:300, complete:
							function(){}
						});
					}
				}
				else if(isBreadcrumbFixed || !BreadcrumbCanFix)
				{
					if((scrollTop <= headerDiffHeight + headerTop) || !BreadcrumbCanFix)
					{
						if($('.breadcrumb_wrapper_fixed').length) {
							var breadcrumb = $('.breadcrumb_wrapper_fixed #navigation');
							$('.breadcrumb_wrapper_fixed').empty();
							$('.breadcrumb_wrapper').append(breadcrumb);
						}
						isBreadcrumbFixed = false;
						Breadcrumb_fixed.removeClass('fixed');
					}
				}
			// }
		});
	}
}

CheckHeaderFixed = function(){
	var header_fixed = $('#headerfixed');
		header = $('header').first();
	if(header_fixed.length){
		if(header.length)
		{
			var isHeaderFixed = false,
				headerCanFix = true,
				headerFixedHeight = header_fixed.actual('outerHeight'),
				headerNormalHeight = header.actual('outerHeight'),
				headerDiffHeight = headerNormalHeight - headerFixedHeight + 30,
				mobileBtnMenu = $('.btn.btn-responsive-nav'),
				headerTop = $('#panel:visible').actual('outerHeight');
				topBlock = $('.TOP_HEADER').first();

			if(headerDiffHeight <= 0)
				headerDiffHeight = 0;
			if(topBlock.length)
				headerTop += topBlock.actual('outerHeight');

			$(window).scroll(function(){
				/*if(!isMobile && window.matchMedia('(min-width: 992px)').matches)
				{*/
					var scrollTop = $(window).scrollTop();
					headerCanFix = !mobileBtnMenu.is(':visible')/* && !$('.dropdown-menu:visible').length*/;

					var current_is = $('.search-wrapper .search-input:visible'),
						title_search_result = $('.title-search-result.'+current_is.attr('id')),
						pos, pos_input;

					if(!isHeaderFixed)
					{
						if((scrollTop > headerNormalHeight + headerTop) && headerCanFix)
						{
							if($('.breadcrumb_wrapper_fixed').length) {
								var breadcrumb = $('.breadcrumb_wrapper #navigation');
								$('.breadcrumb_wrapper').empty();
								$('.breadcrumb_wrapper_fixed').append(breadcrumb);
							}

							isHeaderFixed = true;
							header_fixed.css('top', '-' + headerNormalHeight + 'px');

							header_fixed.addClass('fixed');

							// header_fixed.stop(0).animate({top: '0'}, 300);

							header_fixed.animate({top: '0'}, {duration:300, complete:
								function(){}
							});
							CheckTopMenuDotted();
							CheckMenuOffset();
						}
					}
					else if(isHeaderFixed || !headerCanFix)
					{
						if((scrollTop <= headerDiffHeight + headerTop) || !headerCanFix)
						{
							if($('.breadcrumb_wrapper_fixed').length) {
								var breadcrumb = $('.breadcrumb_wrapper_fixed #navigation');
								$('.breadcrumb_wrapper_fixed').empty();
								$('.breadcrumb_wrapper').append(breadcrumb);
							}
							isHeaderFixed = false;
							header_fixed.removeClass('fixed');
						}
					}
				// }
			});
		}
	} else {
		CheckBreadcrumbFixed();
	}
}

CheckObjectsSizes = function() {
	$('.container iframe,.container object,.container video').each(function() {
		var height_attr = $(this).attr('height');
		var width_attr = $(this).attr('width');
		if (height_attr && width_attr) {
			$(this).css('height', $(this).outerWidth() * height_attr / width_attr);
		}
	});
}

scrollToTop = function(){
	if(window.matchMedia('(min-width: 767px)').matches){
		if(arHeatOptions['THEME']['SCROLLTOTOP_TYPE'] !== 'NONE'){
			scrollToTopAnimateClassIn = arHeatOptions.THEME.SCROLLTOTOP_TYPE.indexOf('ROUND') !== -1 ? 'rotateIn' : 'rubberBand';
			scrollToTopAnimateClassOut = arHeatOptions.THEME.SCROLLTOTOP_TYPE.indexOf('ROUND') !== -1 ? 'rotateOut' : 'flipOutX';
			if(BX.browser.IsMac())
			{
				scrollToTopAnimateClassIn = scrollToTopAnimateClassOut = '';
			}
			var _isScrolling = false;
			// Append Button
			$('body').append($('<a />').addClass('scroll-to-top ' + arHeatOptions['THEME']['SCROLLTOTOP_TYPE'] + ' ' + arHeatOptions['THEME']['SCROLLTOTOP_POSITION']).attr({'href': '#', 'id': 'scrollToTop'}));
			$scrolltotop = $('#scrollToTop');
			$scrolltotop.click(function(e){
				e.preventDefault();
				$('body, html').animate({scrollTop : 0}, 500);
				return false;
			});
			// Show/Hide Button on Window Scroll event.
			$(window).scroll(function(){
				if(!_isScrolling) {
					_isScrolling = true;
					var bottom = 100,
						scrollVal = $(window).scrollTop(),
						windowHeight = $(window).height();

					var footerOffset = 0;
					if ($('footer').get(0)) {
						footerOffset = $('footer').offset().top;
					}
					if(scrollVal > 150){
						$('#scrollToTop').stop(true, true).addClass('visible');
						_isScrolling = false;
					}
					else{
						$('#scrollToTop').stop(true, true).removeClass('visible');
						_isScrolling = false;
					}
					CheckScrollToTop();
				}
			});
		}
	}
}

CheckScrollToTop = function(){
	if(window.matchMedia('(min-width: 767px)').matches){
		if(arHeatOptions["THEME"]["SCROLLTOTOP_TYPE"] !== "NONE")
		{
			if(documentScrollTop > 150){
				//$scrolltotop.stop(true, true).addClass('visible').addClass('animated');
				if(scrollToTopAnimateClassOut){
					$scrolltotop.removeClass(scrollToTopAnimateClassOut);
				}
				if(scrollToTopAnimateClassIn){
					$scrolltotop.addClass(scrollToTopAnimateClassIn);
				}
			}
			else{
				$scrolltotop.stop(true, true).removeClass('visible');
				if(scrollToTopAnimateClassIn){
					$scrolltotop.removeClass(scrollToTopAnimateClassIn);
				}
				if(scrollToTopAnimateClassOut){
					$scrolltotop.addClass(scrollToTopAnimateClassOut);
				}
			}
		}
		var bottom = 100,
			scrollVal = $(window).scrollTop(),
			windowHeight = $(window).height();
		if($('footer').length) {
			var footerOffset = $('footer').offset().top;
			var footerHeight = $('footer').outerHeight();
		}

		if(parseInt($('#scrollToTop').css('bottom')) > bottom){
			$('#scrollToTop').css('bottom', bottom);
		}
	}
}

var isMobile = jQuery.browser.mobile;
var players = {};

if(isMobile){
	document.documentElement.className += ' mobile';
}

function pauseMainBanner(){
	$('.banners-big .flexslider').flexslider('pause');
}

function playMainBanner(){
	$('.banners-big .flexslider').flexslider('play');
}

function startMainBannerSlideVideo($slide){
	var slideActiveIndex = $slide.attr('data-slide_index')
	var $slides = $slide.closest('.items').find('.item[data-slide_index="'+ slideActiveIndex +'"]') // current slide & cloned
	var videoSource = $slide.attr('data-video_source')
	if(videoSource){
		$slides.addClass('loading')
		pauseMainBanner()

		var videoPlayerSrc = $slide.attr('data-video_src')
		var videoSoundDisabled = $slide.attr('data-video_disable_sound')
		var bVideoSoundDisabled = videoSoundDisabled == 1
		var videoLoop = $slide.attr('data-video_loop')
		var bVideoLoop = videoLoop == 1
		var videoCover = $slide.attr('data-video_cover')
		var bVideoCover = videoCover == 1 && !isMobile
		var videoUnderText = $slide.attr('data-video_under_text')
		var bVideoUnderText = videoUnderText == 1
		var videoPlayer = $slide.attr('data-video_player')
		var bVideoPlayerYoutube = videoPlayer === 'YOUTUBE'
		var bVideoPlayerVimeo = videoPlayer === 'VIMEO'
		var bVideoPlayerRutube = videoPlayer === 'RUTUBE'
		var bVideoPlayerHtml5 = videoPlayer === 'HTML5'

		if(videoPlayerSrc && !$slide.find('.video').length){

			var InitPlayer = function(){
				$slides.each(function(i, node){
					var $_slide = $(node);
					var videoID = getRandomInt(100, 1000);
					var bClone = $_slide.hasClass('clone'),
						tmp_class = $_slide.attr('id');
					if(!$_slide.find('.video.'+tmp_class).length)
					{

						if(bVideoPlayerYoutube){
							$_slide.prepend('<iframe id="player_' + videoID + '" class="video ' + tmp_class + (bVideoCover ? ' cover' : '') + '" src="'+ videoPlayerSrc +'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
						}
						else if(bVideoPlayerVimeo){
							$_slide.prepend('<iframe id="player_' + videoID + '" class="video ' + tmp_class + (bVideoCover ? ' cover' : '') + '" src="'+ videoPlayerSrc +'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
						}
						else if(bVideoPlayerRutube){
							videoPlayerSrc = videoPlayerSrc + '&playerid=' + videoID;
							$_slide.prepend('<iframe id="player_' + videoID + '" class="video ' + tmp_class + (bVideoCover ? ' cover' : '') + '" src="'+ videoPlayerSrc +'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
						}
						else if(bVideoPlayerHtml5){
							$_slide.prepend('<video playsinline id="player_' + videoID + '" class="video ' + tmp_class + (bVideoCover ? ' cover' : '') + '"' + (bVideoLoop ? ' loop ' : '') + (bVideoSoundDisabled || bClone ? ' muted ' : '') + '><source src="'+ videoPlayerSrc +'" type=\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\' /><p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 video</p></iframe>');
						}
					}

					if(typeof(players) !== 'undefined' && players){
						players[videoID] = {
							id: 'player_' + videoID,
							mute: bVideoSoundDisabled || bClone,
							loop: bVideoLoop,
							cover: bVideoCover,
							videoPlayer: videoPlayer,
							slideIndex: slideActiveIndex,
							clone: bClone,
							playing: false
						};

						if(bVideoPlayerYoutube){
							window[players[videoID].id] = new YT.Player(
								players[videoID].id, {
									events: {
										'onReady': onYoutubePlayerReady,
										'onStateChange': onYoutubePlayerStateChange
									}
								}
							);
						}
						else if(bVideoPlayerVimeo){
						    window[players[videoID].id] = new Vimeo.Player(document.getElementById(players[videoID].id), {autopause: false, byline: false, loop: false, title: false});
						    window[players[videoID].id].on('loaded', onVimeoPlayerReady)
						    window[players[videoID].id].on('play', onVimeoPlayerStateChange)
						    window[players[videoID].id].on('pause', onVimeoPlayerStateChange)
						    window[players[videoID].id].on('ended', onVimeoPlayerStateChange)
						}
						else if(bVideoPlayerRutube){
							document.getElementById(players[videoID].id).onload = function(e){
								var videoID = this.id.replace('player_', '')
								players[videoID].contentWindow = this.contentWindow
								onRutubePlayerReady(videoID)
							}
						}
						else if(bVideoPlayerHtml5){
							document.getElementById(players[videoID].id).addEventListener('loadeddata', onHtml5PlayerReady)
							document.getElementById(players[videoID].id).addEventListener('play', onHtml5PlayerStateChange)
							document.getElementById(players[videoID].id).addEventListener('pause', onHtml5PlayerStateChange)
							document.getElementById(players[videoID].id).addEventListener('ended', onHtml5PlayerStateChange)
						}
					}
				});
			}

			if(!bVideoPlayerHtml5){
				var obPlayerVariable = ''
				var fnPlayerVariable = ''
				if(typeof window['YoutubePlayerScriptLoaded'] === 'undefined'){
					window['YoutubePlayerScriptLoaded'] = false
				}
				if(typeof window['VimeoPlayerScriptLoaded'] === 'undefined'){
					window['VimeoPlayerScriptLoaded'] = false
				}
				if(typeof window['RutubePlayerListnersAdded'] === 'undefined'){
					window['RutubePlayerListnersAdded'] = false
				}

				// load script
				if(bVideoPlayerYoutube){
					obPlayerVariable = 'YT'
					fnPlayerVariable = 'Player'
					if(!window['YoutubePlayerScriptLoaded']){
						var script = document.createElement('script');
						script.src = "https://www.youtube.com/iframe_api";
						var firstScriptTag = document.getElementsByTagName('script')[0];
						firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
						window['YoutubePlayerScriptLoaded'] = true;
					}
				}
				else if(bVideoPlayerVimeo){
					obPlayerVariable = 'Vimeo'
					if(!window['VimeoPlayerScriptLoaded']){
						var script = document.createElement('script');
						script.src = 'https://player.vimeo.com/api/player.js';
						(document.head || document.documentElement).appendChild(script);
						window['VimeoPlayerScriptLoaded'] = true
					}
				}
				else if(bVideoPlayerRutube){
					if(!window['RutubePlayerListnersAdded']){
						window.addEventListener('message', function(e){
							if(e.origin.indexOf('rutube.ru') !== -1){
							    var message = JSON.parse(e.data)
							    if(typeof message === 'object' && message){
							    	if(typeof message.type !== 'undefined' && message.type){
							    		var videoID = false

							    		for(var j in players){
									    	if(typeof players[j].contentWindow !== 'undefined'){
									    		if(players[j].contentWindow == e.source){
									    			videoID = j
									    			break
									    		}
									    	}
									    }

									    if(videoID){
										    switch (message.type) {
										        case 'player:changeState':
										            onRutubePlayerStateChange(videoID, message.data.state)
										            break
										        case 'player:currentTime':
										            onRutubePlayerCurrentTime(videoID, message.data.time)
										            break
										    }
										}
									}
							    }
							}
						});
					}
				}

				if(!obPlayerVariable.length){
					InitPlayer()
				}
				else{
					// wait player class
					if(typeof window[obPlayerVariable] === 'object'){
						if(!fnPlayerVariable.length || (fnPlayerVariable.length && typeof window[obPlayerVariable][fnPlayerVariable] === 'function')){

							InitPlayer()
						}
					}
					else{
						var waitPlayerInterval = setInterval(function(){
							if(typeof window[obPlayerVariable] === 'object'){
								if(!fnPlayerVariable.length || (fnPlayerVariable.length && typeof window[obPlayerVariable][fnPlayerVariable] === 'function')){

									clearInterval(waitPlayerInterval)

									InitPlayer()
								}
							}
						}, 50)
					}
				}

			}
			else{
				InitPlayer()
			}
		}
		else
		{
			// pause play video
			if(typeof(players) !== 'undefined' && players){
				for(var j in players){
					if(/*players[j].playing &&*/ !players[j].clone/* && (players[j].slideIndex != curSlideIndex)*/){
						if((typeof window[players[j].id] == 'object')){
							if(players[j].playing)
							{
								if(players[j].videoPlayer === 'YOUTUBE'){
									window[players[j].id].pauseVideo()
								}
								else if(players[j].videoPlayer === 'VIMEO'){
									window[players[j].id].pause()
								}
								else if(players[j].videoPlayer === 'RUTUBE'){
									document.getElementById(players[j].id).contentWindow.postMessage(JSON.stringify({
									    type: 'player:pause',
									    data: {}
									}), '*')
								}
								else if(players[j].videoPlayer === 'HTML5'){
									document.getElementById(players[j].id).pause()
								}
							}
							else if(players[j].slideIndex == slideActiveIndex)
							{
								if(players[j].videoPlayer === 'YOUTUBE'){
									window[players[j].id].playVideo()
								}
								else if(players[j].videoPlayer === 'VIMEO'){
									window[players[j].id].play()
								}
								else if(players[j].videoPlayer === 'RUTUBE'){
									document.getElementById(players[j].id).contentWindow.postMessage(JSON.stringify({
									    type: 'player:play',
									    data: {}
									}), '*')
								}
								else if(players[j].videoPlayer === 'HTML5'){
									document.getElementById(players[j].id).play()
								}
							}
						}
					}
				}
			}
		}
	}
}

var CoverPlayer = function(){
	var $videoCover = $('.video.cover')
	if($videoCover.length){
		var bannersHeight = $('.banners-big').height()
		var bannersWidth = $('.banners-big').width()
		var windowWidth = $(window).width()
		var height = windowWidth * 9 / 16
		$videoCover.css({'height': height + 'px', 'margin-top': ((bannersHeight - height) / 2) + 'px'})
	}
}

function onYoutubePlayerReady(e) {
	var videoID = e.target.a.id.replace('player_', '')
	if(videoID){
		var mute = players[videoID].mute
		var cover = players[videoID].cover
    	var clone = players[videoID].clone

    	// mute sound
		if(mute || clone){
			window[players[videoID].id].mute()
		}

    	// cover video
		if(cover){
	    	CoverPlayer()
	    }

    	// not start clone video playing
    	if(clone){
    		setTimeout(function(){
				e.target.pauseVideo()
    		}, 100)
    	}
    	else{
		    // stop slider
			pauseMainBanner()
			e.target.playVideo();

		    // e.target.playVideo();
		    // e.target.playVideo();
    	}

    	// update slide class
		var $slide = $('#player_' + videoID).closest('.item')
		$slide.addClass('started')
		// $slide.removeClass('loading')
    }
}

function onYoutubePlayerStateChange(e){
	var videoID = e.target.a.id.replace('player_', '')
    if(videoID){
    	var clone = players[videoID].clone
		var loop = players[videoID].loop
    	var slideIndex = players[videoID].slideIndex
    	if(!clone){
			if(e.data === YT.PlayerState.PLAYING){
				players[videoID].playing = true

				$('#player_'+videoID).closest('.item').find('.maxwidth-theme').addClass('loading');
				$('#player_'+videoID).closest('.item').find('.maxwidth-theme .btn-video').addClass('loading');

				// stop slider
				pauseMainBanner()

				e.target.playVideo()
			}
			else if(e.data === YT.PlayerState.PAUSED){
		    	players[videoID].playing = false

		    	// sync time in cloned players & pause
	    		var time = Math.floor(window[players[videoID].id].getCurrentTime() * 10) / 10

				$('#player_'+videoID).closest('.item').find('.maxwidth-theme').removeClass('loading');
				$('#player_'+videoID).closest('.item').find('.maxwidth-theme .btn-video').removeClass('loading');

				window[players[videoID].id].seekTo(time, true)
				for(var j in players){
					if(players[j].slideIndex == slideIndex && players[j].clone){

						if('getCurrentTime' in window[players[j].id])
						{
							window[players[j].id].pauseVideo()
							window[players[j].id].seekTo(time, true)
						}
					}
				}
			}
			else if(e.data === YT.PlayerState.ENDED){
				players[videoID].playing = false
		    	if(loop){
		    		e.target.playVideo()
		    	}
		    	else{
		    		// play slider
					playMainBanner()
		    	}
			}
		}
	}
}

function onVimeoPlayerReady(e){
	var videoID = this.element.id.replace('player_', '')
	if(videoID){
		var mute = players[videoID].mute
		var cover = players[videoID].cover
    	var clone = players[videoID].clone

    	// mute sound
		if(mute || clone){
			window[players[videoID].id].setVolume(0)
		}

    	// cover video
		if(cover){
	    	CoverPlayer()
	    }

    	// not start clone video playing
    	if(clone){
    		setTimeout(function(){
				window[players[videoID].id].pause()
    		}, 100)
    	}
    	else{
		    // stop slider
			pauseMainBanner()

		    window[players[videoID].id].play()
    	}

    	// update slide class
		var $slide = $('#player_' + videoID).closest('.item')
		$slide.addClass('started')
		// $slide.removeClass('loading')
    }
}

function onVimeoPlayerStateChange(e){
	var videoID = this.element.id.replace('player_', '')
	if(videoID){
		var cover = players[videoID].cover
    	var clone = players[videoID].clone
		var loop = players[videoID].loop
    	var slideIndex = players[videoID].slideIndex

    	if(!clone){
    		window[players[videoID].id].getPaused().then(function(paused){
    			if(paused){
			    	players[videoID].playing = false

			    	$('#player_'+videoID).closest('.item').find('.maxwidth-theme').removeClass('loading');
					$('#player_'+videoID).closest('.item').find('.maxwidth-theme .btn-video').removeClass('loading');

			    	// sync time in cloned players & pause
			    	window[players[videoID].id].getCurrentTime().then(function(seconds){
			    		var time = Math.floor(seconds * 10) / 10
			    		window[players[videoID].id].setCurrentTime(time).then(function(seconds){
							for(var j in players){
								if(players[j].slideIndex == slideIndex && players[j].clone){
									window[players[j].id].pause()
									window[players[j].id].setCurrentTime(time).then(function(seconds){})
								}
							}
			    		})
			    	})
    			}
    			else{
    				$('#player_'+videoID).closest('.item').find('.maxwidth-theme').addClass('loading');
					$('#player_'+videoID).closest('.item').find('.maxwidth-theme .btn-video').addClass('loading');
		    		window[players[videoID].id].getEnded().then(function(ended){
		    			if(ended){
							players[videoID].playing = false
					    	if(loop){
					    		window[players[videoID].id].play()
					    	}
					    	else{
					    		// play slider
								playMainBanner()
					    	}
		    			}
		    			else{
		    				players[videoID].playing = true


		    				// stop slider
							pauseMainBanner()
		    			}
		    		})
    			}
    		})
		}
	}
}

function onRutubePlayerReady(videoID){
	if(videoID){
		var mute = players[videoID].mute
		var cover = players[videoID].cover
    	var clone = players[videoID].clone
    	var player = document.getElementById(players[videoID].id)

    	// mute sound
		if(mute || clone){
			player.contentWindow.postMessage(JSON.stringify({
			    type: 'player:mute',
			    data: {}
			}), '*')
		}

    	// cover video
		if(cover){
	    	CoverPlayer()
	    }

    	// not start clone video playing
    	if(clone){
    		setTimeout(function(){
				player.contentWindow.postMessage(JSON.stringify({
				    type: 'player:pause',
				    data: {}
				}), '*')
    		}, 100)
    	}
    	else{
		    // stop slider
			pauseMainBanner()

		    player.contentWindow.postMessage(JSON.stringify({
			    type: 'player:play',
			    data: {}
			}), '*')
    	}

    	// update slide class
		var $slide = $('#player_' + videoID).closest('.item')
		$slide.addClass('started')
		// $slide.removeClass('loading')
    }
}

function onRutubePlayerCurrentTime(videoID, time){
	if(videoID){
		players[videoID].time = time
	}
}

function onRutubePlayerStateChange(videoID, state){
	if(videoID){
    	var clone = players[videoID].clone
		var loop = players[videoID].loop
    	var slideIndex = players[videoID].slideIndex
    	var player = document.getElementById(players[videoID].id)

    	if(!clone){
			if(state === 'playing'){
				$('#'+videoID).closest('.item').find('.maxwidth-theme').addClass('loading');
				$('#'+videoID).closest('.item').find('.maxwidth-theme .btn-video').addClass('loading');

				players[videoID].playing = true

				// stop slider
				pauseMainBanner()
			}
			else if(state === 'paused'){
				$('#'+videoID).closest('.item').find('.maxwidth-theme').removeClass('loading');
				$('#'+videoID).closest('.item').find('.maxwidth-theme .btn-video').removeClass('loading');

		    	players[videoID].playing = false

		    	// sync time in cloned players & pause
	    		var time = Math.floor(players[videoID].time * 10) / 10
				player.contentWindow.postMessage(JSON.stringify({
				    type: 'player:setCurrentTime',
				    data: {time: time}
				}), '*')
				for(var j in players){
					if(players[j].slideIndex == slideIndex && players[j].clone){
						document.getElementById(players[j].id).contentWindow.postMessage(JSON.stringify({
						    type: 'player:pause',
						    data: {}
						}), '*')
						document.getElementById(players[j].id).contentWindow.postMessage(JSON.stringify({
						    type: 'player:setCurrentTime',
						    data: {time: time}
						}), '*')
					}
				}
			}
			else if(state === 'stopped'){
				$('#'+videoID).closest('.item').find('.maxwidth-theme').removeClass('loading');
				$('#'+videoID).closest('.item').find('.maxwidth-theme .btn-video').removeClass('loading');

				players[videoID].playing = false
		    	if(loop){
		    		player.contentWindow.postMessage(JSON.stringify({
					    type: 'player:play',
					    data: {}
					}), '*')
		    	}
		    	else{
		    		// play slider
					playMainBanner()
		    	}
			}
		}
	}
}

function onHtml5PlayerReady(e){
	var videoID = e.target.id.replace('player_', '')
	if(videoID){
		var mute = players[videoID].mute
		var cover = players[videoID].cover
    	var clone = players[videoID].clone

    	// mute sound
		if(mute || clone){
			$('#' + players[videoID].id).prop('muted', true);
		}

    	// cover video
		if(cover){
	    	CoverPlayer()
	    }

    	// not start clone video playing
    	if(clone){
    		e.target.pause()
    	}
    	else{
		    // stop slider
			pauseMainBanner()

		    e.target.play()
    	}

    	// update slide class
		var $slide = $('#player_' + videoID).closest('.item')
		$slide.addClass('started')
		// $slide.removeClass('loading')
    }
}

function onHtml5PlayerStateChange(e){
	var videoID = e.target.id.replace('player_', '')
	if(videoID){
    	var cover = players[videoID].cover
    	var clone = players[videoID].clone
		var loop = players[videoID].loop
    	var slideIndex = players[videoID].slideIndex

    	if(!clone){
			if(e.target.paused){
		    	players[videoID].playing = false

		    	$('#player_'+videoID).closest('.item').find('.maxwidth-theme').removeClass('loading');
				$('#player_'+videoID).closest('.item').find('.maxwidth-theme .btn-video').removeClass('loading');

		    	// sync time in cloned players & pause
	    		var time = Math.floor(e.target.currentTime * 10) / 10
				e.target.currentTime = time
				for(var j in players){
					if(players[j].slideIndex == slideIndex && players[j].clone){
						document.getElementById(players[j].id).pause()
						document.getElementById(players[j].id).currentTime = time
					}
				}
			}
			else if(e.target.ended){
				players[videoID].playing = false
		    	if(loop){
		    		$('#player_'+videoID).closest('.item').find('.maxwidth-theme').addClass('loading');
					$('#player_'+videoID).closest('.item').find('.maxwidth-theme .btn-video').addClass('loading');

		    		e.target.play()
		    	}
		    	else{
		    		// play slider
					playMainBanner()
		    	}
			}
			else{
				players[videoID].playing = true

				$('#player_'+videoID).closest('.item').find('.maxwidth-theme').addClass('loading');
				$('#player_'+videoID).closest('.item').find('.maxwidth-theme .btn-video').addClass('loading');
				// stop slider
				pauseMainBanner()
			}
		}
	}
}

$.fn.equalizeHeights = function( outer, classNull, minHeight, autoHeightBlock ){
	var maxHeight = this.map( function( i, e ){
		var minus_height=0,
			calc_height=0;
		if(classNull !== false && $(e).find(classNull).is(':visible'))
			minus_height=parseInt($(e).find(classNull).actual('outerHeight'));
		if(minus_height)
			minus_height+=15;
		$(e).css('height', '');
		if(autoHeightBlock !== false)
		{
			var height_tmp = $(e).find(autoHeightBlock).css('height');
			$(e).find(autoHeightBlock).css('height', '');
		}
		if( outer == true ){
			calc_height=$(e).actual('outerHeight')-minus_height;
		}else{
			calc_height=$(e).actual('height')-minus_height;
		}

		if(autoHeightBlock !== false)
		{
			$(e).find(autoHeightBlock).css('height', height_tmp);
		}
		if(minHeight!==false){
			if(calc_height<minHeight){
				calc_height+=(minHeight-calc_height);
			}
			if(window.matchMedia('(max-width: 520px)').matches){
				calc_height=300;
			}
			if(window.matchMedia('(max-width: 400px)').matches){
				calc_height=200;
			}
		}
		return calc_height;
	}).get();

	for(var i = 0, c = maxHeight.length; i < c; ++i){
		if(maxHeight[i] % 2){
			--maxHeight[i];
		}
	}


	return this.height( Math.max.apply( this, maxHeight ) );
}

$.fn.getFloatWidth = function(){
	var width = 0

	if($(this).length){
		var rect = $(this)[0].getBoundingClientRect()
		if(!(width = rect.width)){
			width = rect.right - rect.left
		}
	}

	return width
}

$.fn.sliceHeight = function( options ){
	function _slice(el){
		el.each(function() {
			$(this).css('line-height', '');
			$(this).css('height', '');
		});
		if(typeof(options.autoslicecount) == 'undefined' || options.autoslicecount !== false){
			var elsw=(typeof(options.row) !== 'undefined' && options.row.length) ?  el.first().parents(options.row).getFloatWidth() : el.first().parents('.items').getFloatWidth(),
				elw=(typeof(options.item) !== 'undefined' && options.item.length) ? $(options.item).first().getFloatWidth() : (el.first().hasClass('item') ? el.first().getFloatWidth() : el.first().parents('.item').getFloatWidth());

			if(!elsw){
				elsw = el.first().parents('.row').getFloatWidth();
			}
			if(elw && options.fixWidth)
				elw -= options.fixWidth;

			if(elsw && elw && !options.slice){
				options.slice = Math.floor(elsw / elw);
			}
		}
		if(typeof(options.typeResize) == 'undefined' || options.typeResize == false)
		{
			if(options.sliceEqualLength && el.closest('.flexslider').length)
				options.slice = el.length;
			if(options.slice){
				for(var i = 0; i < el.length; i += options.slice){
					$(el.slice(i, i + options.slice)).equalizeHeights(options.outer, options.classNull, options.minHeight, options.autoHeightBlock);
				}
			}
			if(options.lineheight){
				var lineheightAdd = parseInt(options.lineheight);
				if(isNaN(lineheightAdd)){
					lineheightAdd = 0;
				}
				el.each(function() {
					$(this).css('line-height', ($(this).actual('height') + lineheightAdd) + 'px');
				});
			}
		}

		if(typeof options.callback == 'function')
			options.callback(el);
	}
	var options = $.extend({
		slice: null,
		outer: false,
		lineheight: false,
		autoslicecount: true,
		classNull: false,
		minHeight: false,
		row:false,
		item:false,
		typeResize:false,
		resize:true,
		typeValue:false,
		sliceEqualLength:false,
		fixWidth:0,
		callback:false,
		autoHeightBlock:false,
	}, options);

	var el = $(this);
	ignoreResize.push(true);
	_slice(el);
	ignoreResize.pop();

	if(options.resize != false)
	{
		BX.addCustomEvent('onWindowResize', function(eventdata) {
			ignoreResize.push(true);
			_slice(el);
			ignoreResize.pop();
		});
	}
}

waitingExists = function(selector, delay, callback){
	if(typeof(callback) !== 'undefined' && selector.length && delay > 0){
		delay = parseInt(delay);
		delay = (delay < 0 ? 0 : delay);

		if(!$(selector).length){
			setTimeout(function(){
				waitingExists(selector, delay, callback);
			}, delay);
		}
		else{
			callback();
		}
	}
}

waitingNotExists = function(selectorExists, selectorNotExists, delay, callback){
	if(typeof(callback) !== 'undefined' && selectorExists.length && selectorNotExists.length && delay > 0){
		delay = parseInt(delay);
		delay = (delay < 0 ? 0 : delay);

		setTimeout(function(){
			if(selectorExists.length && !$(selectorNotExists).length){
				callback();
			}
		}, delay);
	}
}

InitSlickSlider = function() {
	$('.slick-slider:not(.slick-initialized):visible').each(function(){
		var $this = $(this);
		var defaults = {
			infinite: false,
			dots: false,
			speed: 300,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipeToSlide: true,
			draggable: true,
			lazyLoad: 'ondemand',
			waitForAnimate: false,
			arrows : true,
			prevArrow : '<div class="slick_prev"></div>',
			nextArrow: '<div class="slick_next"></div>',
			customPaging: function (slider, i) {
				var slides_on_page = $this.data('plugin_options').slidesToShow;
				if(i % slides_on_page ==0 || i == 0) {
					return '<a class="dot" role="button"></a>';
				} else {
					return '<a class="dot hidden" role="button"></a>';
				}
          	}
		}
		var options = $.extend({}, defaults, $this.data('plugin_options'));
		$this.slick(options);
	});
}

InitSlickSliderClass = function(class_name) {
	//$(selector).each(function(){
		var $this = $(class_name);
		var defaults = {
			infinite: false,
			dots: false,
			speed: 300,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipeToSlide: true,
			draggable: true,
			lazyLoad: 'ondemand',
			waitForAnimate: false,
			arrows : true,
			prevArrow : '<div class="slick_prev"></div>',
			nextArrow: '<div class="slick_next"></div>',
			customPaging: function (slider, i) {
				var slides_on_page = $this.data('plugin_options').slidesToShow;
				if(i % slides_on_page ==0 || i == 0) {
					return '<a class="dot" role="button"></a>';
				} else {
					return '<a class="dot hidden" role="button"></a>';
				}
          	}
		}
		var options = $.extend({}, defaults, $this.data('plugin_options'));
		$this.slick(options);
	//});
}

function onLoadjqm(hash){
	var name = $(hash.t).data('name'),
		top = (($(window).height() > hash.w.height()) ? Math.floor(($(window).height() - hash.w.height()) / 2) : 0) + 'px';
	$.each($(hash.t).get(0).attributes, function(index, attr){
		if(/^data\-autoload\-(.+)$/.test(attr.nodeName)){
			var key = attr.nodeName.match(/^data\-autoload\-(.+)$/)[1];
			var el = $('input[name="'+key.toUpperCase()+'"]');
			if(!el.length) //is form block
				el = $('input[data-sid="'+key.toUpperCase()+'"]');

			var value = $(hash.t).data('autoload-'+key);
			value = value.replace(/%99/g, '\\'); // replace symbol \

			el.val(BX.util.htmlspecialcharsback(value)).attr('readonly', 'readonly');
			el.closest('.form-group').addClass('input-filed');
			el.attr('title', el.val());
		}
	});

	var eventdata = {action:'loadForm'};
	BX.onCustomEvent('onCompleteAction', [eventdata, $(hash.t)[0]]);

	if($(hash.t).data('autohide')){
		$(hash.w).data('autohide', $(hash.t).data('autohide'));
	}
	if(name == 'order_product'){
		if($(hash.t).data('product')) {
			$('input[name="PRODUCT"]').closest('.form-group').addClass('input-filed');
			$('input[name="PRODUCT"]').val($(hash.t).data('product')).attr('readonly', 'readonly').attr('title', $('input[name="PRODUCT"]').val());
		}
	}
	if(name == 'question'){
		if($(hash.t).data('product')) {
			$('input[name="NEED_PRODUCT"]').closest('.form-group').addClass('input-filed');
			$('input[name="NEED_PRODUCT"]').val($(hash.t).data('product')).attr('readonly', 'readonly').attr('title', $('input[name="NEED_PRODUCT"]').val());
		}
	}

	if(arHeatOptions['THEME']['REGIONALITY_SEARCH_ROW'] == 'Y' && (hash.w.hasClass('city_chooser_frame ') || hash.w.hasClass('city_chooser_small_frame')))
		hash.w.addClass('small_popup_regions')

	hash.w.addClass('show').css({'margin-left': '-' + Math.floor(hash.w.width() / 2) + 'px', 'top': top, 'opacity': 1});
}

function onHide(hash){
	if($(hash.w).data('autohide')){
		eval($(hash.w).data('autohide'));
	}
	// hash.w.css('opacity', 0).hide();
	hash.w.animate({'opacity': 0}, 200, function(){
		hash.w.hide();
		hash.w.empty();
		hash.o.remove();
		hash.w.removeClass('show');
	});
}

function parseUrlQuery() {
	var data = {};
	if(location.search) {
		var pair = (location.search.substr(1)).split('&');
		for(var i = 0; i < pair.length; i ++) {
			var param = pair[i].split('=');
			data[param[0]] = param[1];
		}
	}
	return data;
}

function scroll_block(block){
	if(block.length)
	{
		var topPos = block.offset().top,
			headerH = $('header').outerHeight(true,true);
		if($(".stores_tab").length){
			$(".stores_tab").addClass("active").siblings().removeClass("active");
		}else{
			$(".prices_tab").addClass("active").siblings().removeClass("active");
			if($(".prices_tab .opener").length && !$(".prices_tab .opener .opened").length){
				var item = $(".prices_tab .opener").first();
				item.find(".opener_icon").addClass("opened");
				item.parents("tr").addClass("nb")
				item.parents("tr").next(".offer_stores").find(".stores_block_wrap").slideDown(200);
			}
		}
		$('html,body').animate({'scrollTop':topPos-80},150);
	}
}

$.fn.jqmEx = function(){

	$(this).each(function(){
		var _this = $(this);
		var name = _this.data('name');

		if(name.length){
			var script = arHeatOptions['SITE_DIR'] + 'ajax/form.php';
			var paramsStr = ''; var trigger = ''; var arTriggerAttrs = {};
			$.each(_this.get(0).attributes, function(index, attr){
				var attrName = attr.nodeName;
				var attrValue = _this.attr(attrName);
				trigger += '[' + attrName + '=\"' + attrValue + '\"]';
				arTriggerAttrs[attrName] = attrValue;
				if(/^data\-param\-(.+)$/.test(attrName)){
					var key = attrName.match(/^data\-param\-(.+)$/)[1];
					paramsStr += key + '=' + attrValue + '&';
				}

			});
			var triggerAttrs = JSON.stringify(arTriggerAttrs);
			var encTriggerAttrs = encodeURIComponent(triggerAttrs);
			if(name == 'auth')
				script += '?' + paramsStr + 'auth=Y';
			else
				script += '?' + paramsStr + 'data-trigger=' + encTriggerAttrs;

			if(!$('.' + name + '_frame[data-trigger="' + encTriggerAttrs + '"]').length){
				if(_this.attr('disabled') != 'disabled'){
					$('body').find('.' + name + '_frame[data-trigger="' + encTriggerAttrs + '"]').remove();
					$('body').append('<div class="' + name + '_frame jqmWindow" style="width:500px" data-trigger="' + encTriggerAttrs + '"></div>');
					$('.' + name + '_frame[data-trigger="' + encTriggerAttrs + '"]').jqm({trigger: trigger, onLoad: function(hash){onLoadjqm(hash);}, onHide: function(hash){onHide(hash);}, ajax:script});
				}
			}
		}
		return;
	});
}

InitFlexSlider = function() {
	$('.flexslider:not(.thmb):not(.flexslider-init):visible').each(function(){
		var slider = $(this);
		var options;
		var defaults = {
			animationLoop: false,
			controlNav: false,
			directionNav: true,
			animation: "slide",
		}
		var config = $.extend({}, defaults, options, slider.data('plugin-options'));
		if(typeof(config.counts) != 'undefined' && config.direction !== 'vertical'){
			var slide_counts = '';
			if(typeof(slider.data('plugin-options')) != 'undefined')
			{
				if('slide_counts' in slider.data('plugin-options'))
					slide_counts = slider.data('plugin-options').slide_counts;
			}
			config.maxItems =  getGridSize(config.counts, config);
			config.minItems = getGridSize(config.counts, config);

			if(slide_counts)
				config.move = slide_counts;
			else
				config.move = getGridSize(config.counts);

			config.itemWidth = 200;
		}

		// custom direction nav
		if(typeof(config.customDirection) != 'undefined')
			config.customDirectionNav = $(config.customDirection);

		config.prevText = BX.message("FANCY_PREV"),           //String: Set the text for the "previous" directionNav item
		config.nextText = BX.message("FANCY_NEXT"),

		config.after = config.start = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlide', [eventdata]);
		}

		config.before = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlideBefore', [eventdata]);
		}

		config.end = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlideEnd', [eventdata]);
		}

		/*if(typeof(config.nav) == 'undefined')
			slider.addClass('dark-nav');*/
		slider.flexslider(config).addClass('flexslider-init');
		if(config.controlNav)
			slider.addClass('flexslider-control-nav');
		if(config.directionNav)
			slider.addClass('flexslider-direction-nav');

		setTimeout(function() {$('.flexslider .bx-viewport').unbind();}, 100);
	});



}

InitFlexSliderClass = function(class_name) {
	//$('.flexslider:not(.thmb):not(.flexslider-init)').each(function(){

		var slider = $(class_name);
		var options;
		var defaults = {
			animationLoop: false,
			controlNav: false,
			directionNav: true,
			animation: "slide"
		}
		var config = $.extend({}, defaults, options, slider.data('plugin-options'));

		var slide_counts = '';
		if(typeof(slider.data('plugin-options')) != 'undefined')
		{
			if('slide_counts' in slider.data('plugin-options'))
				slide_counts = slider.data('plugin-options').slide_counts;
		}

		if(typeof(config.counts) != 'undefined' && config.direction !== 'vertical'){
			config.maxItems =  getGridSize(config.counts);
			config.minItems = getGridSize(config.counts);
			config.move = getGridSize(config.counts);

			config.itemWidth = 200;
		}
		if(slide_counts)
			config.move = slide_counts;

		// custom direction nav
		if(typeof(config.customDirection) != 'undefined')
			config.customDirectionNav = $(config.customDirection);

		config.prevText = BX.message("FANCY_PREV"),           //String: Set the text for the "previous" directionNav item
		config.nextText = BX.message("FANCY_NEXT"),

		config.after = config.start = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlide', [eventdata]);
		}

		config.before = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlideBefore', [eventdata]);
		}

		config.end = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlideEnd', [eventdata]);
		}

		slider.flexslider(config).addClass('flexslider-init');
		if(config.controlNav)
			slider.addClass('flexslider-control-nav');
		if(config.directionNav)
			slider.addClass('flexslider-direction-nav');
	//});
}

InitOwlSlider = function() {
	$('.owl-carousel:not(.thmb):not(.owlslider-init)').each(function(){
		var slider = $(this);
		var options;
		var defaults = {
		}
		var config = $.extend({}, defaults, options, slider.data('plugin_options'));
		if(typeof(config.counts) != 'undefined' && config.direction !== 'vertical'){
			var slide_counts = '';
			if(typeof(slider.data('plugin_options')) != 'undefined')
			{
				if('slide_counts' in slider.data('plugin-options'))
					slide_counts = slider.data('plugin-options').slide_counts;
			}
			config.maxItems =  getGridSize(config.counts, config);
			config.minItems = getGridSize(config.counts, config);

			if(slide_counts)
				config.move = slide_counts;
			else
				config.move = getGridSize(config.counts);

			config.itemWidth = 200;
		}

		// custom direction nav
		if(typeof(config.customDirection) != 'undefined')
			config.customDirectionNav = $(config.customDirection);

		config.prevText = BX.message("FANCY_PREV"),           //String: Set the text for the "previous" directionNav item
		config.nextText = BX.message("FANCY_NEXT"),

		config.after = config.start = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlide', [eventdata]);
		}

		config.before = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlideBefore', [eventdata]);
		}

		config.end = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlideEnd', [eventdata]);
		}

		if(typeof(config.nav) == 'undefined')
			slider.addClass('dark-nav');
		slider.owlCarousel(config).addClass('owlslider-init');
		if(config.controlNav)
			slider.addClass('flexslider-control-nav');
		if(config.directionNav)
			slider.addClass('flexslider-direction-nav');

		setTimeout(function() {$('.flexslider .bx-viewport').unbind();}, 100);
	});
}

InitOwlSliderClass = function(class_name) {
		var slider = $(class_name);
		var options;
		var defaults = {
		}
		var config = $.extend({}, defaults, options, slider.data('plugin_options'));
		if(typeof(config.counts) != 'undefined' && config.direction !== 'vertical'){
			var slide_counts = '';
			if(typeof(slider.data('plugin_options')) != 'undefined')
			{
				if('slide_counts' in slider.data('plugin-options'))
					slide_counts = slider.data('plugin-options').slide_counts;
			}
			config.maxItems =  getGridSize(config.counts, config);
			config.minItems = getGridSize(config.counts, config);

			if(slide_counts)
				config.move = slide_counts;
			else
				config.move = getGridSize(config.counts);

			config.itemWidth = 200;
		}

		// custom direction nav
		if(typeof(config.customDirection) != 'undefined')
			config.customDirectionNav = $(config.customDirection);

		config.prevText = BX.message("FANCY_PREV"),           //String: Set the text for the "previous" directionNav item
		config.nextText = BX.message("FANCY_NEXT"),

		config.after = config.start = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlide', [eventdata]);
		}

		config.before = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlideBefore', [eventdata]);
		}

		config.end = function(slider){
			var eventdata = {slider: slider};
			BX.onCustomEvent('onSlideEnd', [eventdata]);
		}

		if(typeof(config.nav) == 'undefined')
			slider.addClass('dark-nav');

		slider.owlCarousel(config).addClass('owlslider-init');
		if(config.controlNav)
			slider.addClass('flexslider-control-nav');
		if(config.directionNav)
			slider.addClass('flexslider-direction-nav');

		setTimeout(function() {$('.flexslider .bx-viewport').unbind();}, 100);
}


SliceHeightBlocks = function(){
	$('*[data-slice="Y"]').each(function(){
		var slice_class = '';
		if($(this).data('slice-class') != undefined) {
			slice_class = $(this).data('slice-class');
			slice_class = slice_class.replace(/\s+/g, '');
			slice_class = slice_class.split(',');
			for (var i = 0; i < slice_class.length; i++) {
				var slice_els = $(this).find('.'+slice_class[i]+'[data-slice-block="Y"]');
				if(slice_els.length)
				{
					var slice_params = {};
					if(slice_els.data('slice-params'))
						slice_params = slice_els.data('slice-params');
					slice_els.sliceHeight(slice_params);
				}
			}
		} else {
			var slice_els = $(this).find('*[data-slice-block="Y"]');
			if(slice_els.length)
			{
				var slice_params = {};
				if(slice_els.data('slice-params'))
					slice_params = slice_els.data('slice-params');
				slice_els.sliceHeight(slice_params);
			}
		}
	})
}

SliceHeightBlocksClass = function(object){
	$(object).find('*[data-slice="Y"]').each(function(){
		var slice_class = '';
		if($(this).data('slice-class') != undefined) {
			slice_class = $(this).data('slice-class');
			slice_class = slice_class.replace(/\s+/g, '');
			slice_class = slice_class.split(',');
			for (var i = 0; i < slice_class.length; i++) {
				var slice_els = $(this).find('.'+slice_class[i]+'[data-slice-block="Y"]');
				if(slice_els.length)
				{
					var slice_params = {};
					if(slice_els.data('slice-params'))
						slice_params = slice_els.data('slice-params');
					slice_els.sliceHeight(slice_params);
				}
			}
		} else {
			var slice_els = $(this).find('*[data-slice-block="Y"]');
			if(slice_els.length)
			{
				var slice_params = {};
				if(slice_els.data('slice-params'))
					slice_params = slice_els.data('slice-params');
				slice_els.sliceHeight(slice_params);
			}
		}
	})
}

createTableCompare = function(originalTable, appendDiv, cloneTable){
	try{
		if($('.tarifs .head-block:visible').length){
			var clone = originalTable.clone().addClass('clone');
			if(cloneTable.length){
				cloneTable.remove();
				appendDiv.html('');
				appendDiv.html(clone);
			}else{
				appendDiv.append(clone);
			}
		}
	}
	catch(e){}
	finally{}
}


InitTopestMenuGummi = function(){
	if(!isOnceInited){
		function _init(){
			var arItems = $menuTopest.find('>li:not(.more)');
			var cntItems = arItems.length;
			if(cntItems){
				var itemsWidth = 0;
				for(var i = 0; i < cntItems; ++i){
					var item = arItems.eq(i);
					var itemWidth = item.actual('outerWidth',{includeMargin: true});
					arItemsHideWidth[i] = (itemsWidth += itemWidth) + (i !== (cntItems - 1) ? moreWidth : 0);
				}
			}
		}

		function _gummi(){
			var rowWidth = $menuTopest.actual('innerWidth');
			var arItems = $menuTopest.find('>li:not(.more),li.more>.dropdown>li');
			var cntItems = arItems.length;
			if(cntItems){
				var bMore = false;
				for(var i = cntItems - 1; i >= 0; --i){
					var item = arItems.eq(i);
					var bInMore = item.parents('.more').length > 0;
					if(!bInMore){
						if(arItemsHideWidth[i] > rowWidth){
							if(!bMore){
								bMore = true;
								more.removeClass('hidden');
							}
							var clone = item.clone();
							clone.find('>a').addClass('dark_font');
							clone.prependTo(moreDropdown);
							item.addClass('cloned');
						}
					}
				}
				for(var i = 0; i < cntItems; ++i){
					var item = arItems.eq(i);
					var bInMore = item.parents('.more').length > 0;
					if(bInMore){
						if(arItemsHideWidth[i] <= rowWidth){
							if(i === (cntItems - 1)){
								bMore = false;
								more.addClass('hidden');
							}
							var clone = item.clone();
							clone.find('>a').removeClass('dark_font');
							clone.insertBefore(more);
							item.addClass('cloned');
						}
					}
				}
				$menuTopest.find('li.cloned').remove();
			}
		}

		var $menuTopest = $('.menu.topest');
		if($menuTopest.length)
		{
			var more = $menuTopest.find('>.more');
			var moreDropdown = more.find('>.dropdown');
			var moreWidth = more.actual('outerWidth',{includeMargin: true});
			var arItemsHideWidth = [];

			ignoreResize.push(true);
			_init();
			_gummi();
			ignoreResize.pop();

			BX.addCustomEvent('onWindowResize', function(eventdata) {
				try{
					ignoreResize.push(true);
					_gummi();
				}
				catch(e){}
				finally{
					ignoreResize.pop();
				}
			});
		}
	}
}

CheckHeaderFixedMenu = function(){
	if(arHeatOptions['THEME']['HEADER_FIXED'] == 2 && $('#headerfixed .js-nav').length && window.matchMedia('(min-width: 992px)').matches)
	{
		$('#headerfixed .js-nav').css('width','0');
		var all_width = 0,
			cont_width = $('#headerfixed .maxwidth-theme').actual('width'),
			padding_menu = $('#headerfixed .logo-row.v2 .menu-block').actual('outerWidth')-$('#headerfixed .logo-row.v2 .menu-block').actual('width');
		$('#headerfixed .logo-row.v2 > .inner-table-block').each(function(){
			if(!$(this).hasClass('menu-block'))
				all_width += $(this).actual('outerWidth');
		})
		$('#headerfixed .js-nav').width(cont_width-all_width-padding_menu);
	}
}

CheckTopMenuPadding = function(){
	if($('.logo_and_menu-row .right-icons .wrap_icon').length && $('.logo_and_menu-row .menu-row').length){
		var menuPosition = $('.menu-row .menu-only').position().left,
			maxWidth = $('.logo_and_menu-row .maxwidth-theme').width() - 32,
			leftPadding = 0,
			rightPadding = 0;

		$('.logo_and_menu-row .menu-row>div').each(function(indx){
			if(!$(this).hasClass('menu-only')){
				var elementPosition = $(this).position().left,
					elementWidth = $(this).outerWidth();

				if(elementPosition > menuPosition){
					rightPadding += elementWidth;
				}else{
					leftPadding += elementWidth;
				}
			}
		}).promise().done(function(){
			$('.logo_and_menu-row .menu-only').css({'padding-left': leftPadding, 'padding-right': rightPadding+1});
		});
	}
}

CheckTopMenuOncePadding = function(){
	if($('.menu-row.sliced .right-icons .wrap_icon').length){
		var menuPosition = $('.menu-row .menu-only').position().left,
			maxWidth = $('.logo_and_menu-row .maxwidth-theme').width() - 32,
			leftPadding = 0,
			rightPadding = 0;

		$('.menu-row.sliced > .maxwidth-theme>div>div').each(function(indx){
			if(!$(this).hasClass('menu-only')){

				var elementPosition = $(this).position().left,
					elementWidth = $(this).outerWidth();

				if(elementPosition > menuPosition){
					rightPadding += elementWidth;
				}else{
					leftPadding += elementWidth;
				}
			}
		}).promise().done(function(){
			$('.menu-row.sliced .menu-only').css({'padding-left': leftPadding, 'padding-right': rightPadding+1});
		});
	}
}

CheckSearchWidth = function(){
	if($('.logo_and_menu-row .search_wrap').length){
		var searchPosition = $('.logo_and_menu-row .search_wrap').position().left,
			maxWidth = $('.logo_and_menu-row .maxwidth-theme').width() - 32;
			width = 0;

		$('.logo_and_menu-row .maxwidth-theme>div').each(function(){
			if(!$(this).hasClass('search_wrap')){
				var elementWidth = $(this).outerWidth();

				width = (width ? width - elementWidth : maxWidth - elementWidth);
			}
		}).promise().done(function(){
			$('.logo_and_menu-row .search_wrap').outerWidth(width).css({'opacity': 1, 'visibility': 'visible'});
		});
	}
}

waitCounter = function(idCounter, delay, callback){
	var obCounter = window['yaCounter' + idCounter];
	if(typeof obCounter == 'object')
	{
		if(typeof callback == 'function')
			callback();

	}
	else
	{
		setTimeout(function(){
			waitCounter(idCounter, delay, callback);
		}, delay);
	}
}

var waitReCaptcha = function(delay, callback){
	if(typeof grecaptcha == 'object'){
		if(typeof callback == 'function'){
			callback();
		}
	}
	else{
		setTimeout(function(){
			waitReCaptcha(delay, callback);
		}, delay);
	}
}

var reCaptchaRender = function(response){
	if($('.g-recaptcha:not(.rendered)').length){
		waitReCaptcha(50, function(){
			$('.g-recaptcha:not(.rendered)').each(function(){
				$this = $(this);
				$this.addClass('rendered')
				var id = grecaptcha.render($this[0], {
					sitekey: $this.attr('data-sitekey'),
					theme: $this.attr('data-theme'),
					size: $this.attr('data-size'),
					callback: $this.attr('data-callback'),
				});
				$this.attr('data-widgetid', id);
			});
		});
	}
}

var reCaptchaVerify = function(response){
	$('.g-recaptcha.rendered').each(function(){
		var id = $(this).attr('data-widgetid');
		if(typeof(id) !== 'undefined'){
			if(grecaptcha.getResponse(id) != ''){
				$(this).closest('form').find('.recaptcha').valid();
			}
		}
	});
}

var reCaptchaVerifyHidden = function(response){
	$('.g-recaptcha.rendered:last').each(function(){
		var id = $(this).attr('data-widgetid');
		if(typeof(id) !== 'undefined' && response){
			if(!$(this).closest('form').find('.g-recaptcha-response').val())
				$(this).closest('form').find('.g-recaptcha-response').val(response)
			$(this).closest('form').submit();
		}
	});
}

waitYTPlayer = function(delay, callback){
	if((typeof YT !== "undefined") && YT && YT.Player)
	{
		if(typeof callback == 'function')
			callback();
	}
	else
	{
		setTimeout(function(){
			waitYTPlayer(delay, callback);
		}, delay);
	}
}

var scrollToTopAnimateClassIn = false;
var scrollToTopAnimateClassOut = false;

var $body = {}
var $scrolltotop = {}
var isOnceInited = false;

if(navigator.userAgent.indexOf("Edge") != -1)
	document.documentElement.className += ' edge';

initFull = function(){
	checkMobileRegion();
}

var isFrameDataReceived = false;
if (typeof window.frameCacheVars !== "undefined"){
	BX.addCustomEvent("onFrameDataReceived", function (json){
		initFull();

		isFrameDataReceived = true;
	});
}else{
	$( document ).ready(initFull);
}


checkMobileRegion = function(){
	if($('.confirm_region').length)
	{
		if(!$('.top_mobile_region').length)
			$('<div class="top_mobile_region"><div class="confirm_region"></div><div class="close_popup"></div></div>').insertBefore($('#mobileheader'));
		$('.top_mobile_region .confirm_region').html($('.confirm_region').html());

		$('.top_mobile_region .close_popup').click(function(){
			$(this).remove();
			$('.confirm_region').remove();
		})
	}
}

footer_arrows_slide = function(){
	$('.item-link').on('click', function() {
		if($(window).width() <= 767){
			if(!$(this).parent().parent(".bottom-menu").hasClass('closed')){
				$(this).parent().parent(".bottom-menu").addClass('closed');
				$(this).parent(".items").children(".wrap").slideUp();
			} else {
				$(this).parent(".items").children(".wrap").slideDown();
				$(this).parent().parent(".bottom-menu").removeClass('closed');
			}
		}
	});

	if($(window).width() <= 767){
		$('.item-link').parent().parent(".bottom-menu").addClass('closed');
		$('.item-link').parent(".items").children(".wrap").css('display', 'none');
	}
}

$(window).resize(function() {

	if(window.matchMedia('(min-width:767px)').matches){
		$('footer .bottom-menu .items .wrap').css('display', '');
	}

	contactsInputHeight();

	if(window.matchMedia('(min-width: 992px)').matches) {
		$('.style-switcher').css('display', 'flex');
	} else {
		$('.style-switcher').css('display', '');
		var $mobileMenu = $("#mobilemenu");
		if($mobileMenu.length){
			$mobileMenu.isOpen = $mobileMenu.hasClass('show');
			if($mobileMenu.isOpen) {
				$('.style-switcher').hide();
			}
		}
	}

});

$(document).ready(function(){
	var timerId = setInterval(function(){
		if(arHeatOptions){
			scrollToTop();
			clearInterval(timerId);
		}
	}, 150);

	CheckStickyFooter();

	footer_arrows_slide();

	HardHover();

	$('.nav-tabs li a').click(function() {
		setTimeout(HardHover, 200);

	});

	if(!jQuery.browser.safari){
		CheckTopMenuPadding();
		CheckTopMenuOncePadding();
		CheckHeaderFixed();
		CheckTopMenuDotted();
		CheckMenuOffset();
		MegaMenuFixed();
		CheckSearchWidth();
		InitTopestMenuGummi();
		isOnceInited = true;

		setTimeout(function() {
			$(window).resize(); // need to check resize flexslider & menu
		}, 350);

		setTimeout(function() {$(window).scroll();}, 250); // need to check position fixed ask block
	}
	else{
		setTimeout(function() {
			$(window).resize(); // need to check resize flexslider & menu
			setTimeout(function(){
				CheckTopMenuPadding();
				CheckTopMenuOncePadding();
				CheckHeaderFixed();
				CheckTopMenuDotted();
				CheckMenuOffset();
				MegaMenuFixed();
				CheckSearchWidth();
				InitTopestMenuGummi();
				isOnceInited = true;
				setTimeout(function(){
					$(window).scroll();
				}, 50);
			}, 50);
		}, 350);
	}

	$('.wide_menu .li_container').mCustomScrollbar({
		mouseWheel: {
			scrollAmount: 150,
			preventDefault: true
		},
	});

	if(arHeatOptions['THEME']['USE_DEBUG_GOALS'] === 'Y'){
		$.cookie('_ym_debug', '1');
	}
	else{
		$.cookie('_ym_debug', null);
	}

	/*  --- Bind mobile menu  --- */
	var $mobileMenu = $("#mobilemenu")
	if($mobileMenu.length){
		$mobileMenu.isLeftSide = $mobileMenu.hasClass('leftside')
		$mobileMenu.isOpen = $mobileMenu.hasClass('show')
		$mobileMenu.isDowndrop = $mobileMenu.find('>.scroller').hasClass('downdrop')

		$('#mobileheader .burger').click(function(){
			SwipeMobileMenu()
		})

		if($mobileMenu.isLeftSide){
			$mobileMenu.parent().append('<div id="mobilemenu-overlay"></div>')
			var $mobileMenuOverlay = $('#mobilemenu-overlay')

			$mobileMenuOverlay.click(function(){
				if($mobileMenu.isOpen){
					CloseMobileMenu()
				}
			});

			$(document).swiperight(function(e) {
				if(!$(e.target).closest('.flexslider').length && !$(e.target).closest('.swipeignore').length){
					OpenMobileMenu()
				}
			});

			$(document).swipeleft(function(e) {
				if(!$(e.target).closest('.flexslider').length && !$(e.target).closest('.swipeignore').length){
					CloseMobileMenu()
				}
			});
		}
		else{
			$('#mobileheader').click(function(e){
				if(!$(e.target).closest('#mobilemenu').length && !$(e.target).closest('.burger').length && $mobileMenu.isOpen){
					CloseMobileMenu()
				}
			});
		}

		$('#mobilemenu .social-icons a').click(function(e){
			var $this = $(this)
			if($this.hasClass('parent')){
				e.preventDefault()

				if(!$mobileMenu.isDowndrop){
					$this.closest('li').addClass('expanded')
					MoveMobileMenuWrapNext()
				}
				else{
					if(!$this.closest('li').hasClass('expanded')){
						$this.closest('li').addClass('expanded')
					}
					else{
						$this.closest('li').removeClass('expanded')
					}
				}
			}
			else{
				if($this.closest('li').hasClass('counters')){
					var href = $this.attr('href')
					if(typeof href !== 'undefined'){
						window.location.href = href
						window.location.reload()
					}
				}

				if(!$this.closest('.menu_back').length){
					CloseMobileMenu()
				}
			}
		})

		$('#mobilemenu .dropdown .menu_back').click(function(e){
			e.preventDefault()
			var $this = $(this)
			MoveMobileMenuWrapPrev()
			setTimeout(function(){
				$this.closest('.expanded').removeClass('expanded')
			}, 400)
		})

		OpenMobileMenu = function(){
			if(!$mobileMenu.isOpen){
				// hide styleswitcher
				// if($('.style-switcher').hasClass('active')){
				// 	$('.style-switcher .switch').trigger('click')
				// }
				$('.style-switcher').hide()

				if($mobileMenu.isLeftSide){
					// show overlay
					setTimeout(function(){
						$mobileMenuOverlay.fadeIn('fast')
					}, 100)
				}
				else{
					// scroll body to top & set fixed
					$('body').scrollTop(0).css({position: 'fixed'})

					// set menu top = bottom of header
					$mobileMenu.css({top: + ($('#mobileheader').height() + $('#mobileheader').offset().top) + 'px'})

					// change burger icon
					$('#mobileheader .burger').addClass('c')
				}

				// show menu
				$mobileMenu.addClass('show')
				$mobileMenu.isOpen = true

				if(!$mobileMenu.isDowndrop){
					var $wrap = $mobileMenu.find('.wrap').first()
					var params =  $wrap.data('params')
					if(typeof params === 'undefined'){
						params = {
							depth: 0,
							scroll: {},
							height: {}
						}
					}
					$wrap.data('params', params)
				}
			}
		}

		CloseMobileMenu = function(){
			if($mobileMenu.isOpen){
				// hide menu
				$mobileMenu.removeClass('show')
				$mobileMenu.isOpen = false

				// show styleswitcher
				$('.style-switcher').css('display', '');

				if($mobileMenu.isLeftSide){
					// hide overlay
					setTimeout(function(){
						$mobileMenuOverlay.fadeOut('fast')
					}, 100)
				}
				else{
					// change burger icon
					$('#mobileheader .burger').removeClass('c')

					// body unset fixed
					$('body').css({position: ''})
				}

				if(!$mobileMenu.isDowndrop){
					setTimeout(function(){
						var $scroller = $mobileMenu.find('.scroller').first()
						var $wrap = $mobileMenu.find('.wrap').first()
						var params =  $wrap.data('params')
						params.depth = 0
						$wrap.data('params', params).attr('style', '')
						$mobileMenu.scrollTop(0)
						$scroller.css('height', '')
					}, 400)
				}
			}
		}

		SwipeMobileMenu = function(){
			if($mobileMenu.isOpen){
				CloseMobileMenu()
			}
			else{
				OpenMobileMenu()
			}
		}

		function MoveMobileMenuWrapNext(){
			if(!$mobileMenu.isDowndrop){
				var $scroller = $mobileMenu.find('.scroller').first()
				var $wrap = $mobileMenu.find('.wrap').first()
				if($wrap.length){
					var params =  $wrap.data('params')
					var $dropdownNext = $mobileMenu.find('.expanded>.dropdown').eq(params.depth)
					if($dropdownNext.length){
						// save scroll position
						params.scroll[params.depth] = parseInt($mobileMenu.scrollTop())

						// height while move animating
						params.height[params.depth + 1] = Math.max($dropdownNext.height(), (!params.depth ? $wrap.height() : $mobileMenu.find('.expanded>.dropdown').eq(params.depth - 1).height()))
						$scroller.css('height', params.height[params.depth + 1] + 'px')

						// inc depth
						++params.depth

						// translateX for move
						$wrap.css('transform', 'translateX(' + -100 * params.depth + '%)')

						// scroll to top
						setTimeout(function() {
							$mobileMenu.animate({scrollTop : 0}, 200);
						}, 100)

						// height on enimating end
						var h = $dropdownNext.height()
						setTimeout(function() {
							if(h){
								$scroller.css('height', h + 'px')
							}
							else{
								$scroller.css('height', '')
							}
						}, 200)
					}

					$wrap.data('params', params)
				}
			}
		}

		function MoveMobileMenuWrapPrev(){
			if(!$mobileMenu.isDowndrop){
				var $scroller = $mobileMenu.find('.scroller').first()
				var $wrap = $mobileMenu.find('.wrap').first()
				if($wrap.length){
					var params =  $wrap.data('params')
					if(params.depth > 0){
						var $dropdown = $mobileMenu.find('.expanded>.dropdown').eq(params.depth - 1)
						if($dropdown.length){
							// height while move animating
							$scroller.css('height', params.height[params.depth] + 'px')

							// dec depth
							--params.depth

							// translateX for move
							$wrap.css('transform', 'translateX(' + -100 * params.depth + '%)')

							// restore scroll position
							setTimeout(function() {
								$mobileMenu.animate({scrollTop : params.scroll[params.depth]}, 200);
							}, 100)

							// height on enimating end
							var h = (!params.depth ? false : $mobileMenu.find('.expanded>.dropdown').eq(params.depth - 1).height())
							setTimeout(function() {
								if(h){
									$scroller.css('height', h + 'px')
								}
								else{
									$scroller.css('height', '')
								}
							}, 200)
						}
					}

					$wrap.data('params', params)
				}
			}
		}
	}
	/*  --- END Bind mobile menu  --- */


	/* change type2 menu for fixed */
	if($('#headerfixed .js-nav').length)
	{
		if(arHeatOptions['THEME']['HEADER_FIXED'] == 2)
			CheckHeaderFixedMenu();

		setTimeout(function(){
			$('#headerfixed .js-nav').addClass('opacity1');
		},350);
	}

	/* close search block */
	$("html, body").on('mousedown', function(e){
		if(typeof e.target.className == 'string' && e.target.className.indexOf('adm') < 0)
		{
			e.stopPropagation();
			var search_target = $(e.target).closest('.bx_searche');
			if(!$(e.target).hasClass('inline-search-block') && !$(e.target).hasClass('svg') && !search_target.length)
			{
				$('.inline-search-block').removeClass('show');
				$('.title-search-result').hide();
				$('.title-search-result').addClass('hidden');
				if(arHeatOptions['THEME']['TYPE_SEARCH'] == 'fixed')
					$('.jqmOverlay.search').detach();
			}

			if(isMobile)
			{
				if(search_target.length)
					location.href = search_target.attr('href');
			}
			var class_name = $(e.target).attr('class');
			if(typeof(class_name) == 'undefined' || class_name.indexOf('tooltip') < 0) //tooltip link
				$('.tooltip-link').tooltip('hide');
		}
	});
	$('.inline-search-block').find('*').on('mousedown', function(e){
		e.stopPropagation();
	});

	$('.filter-action').on('click', function(){
		$(this).toggleClass('active');
		$(this).find('.svg').toggleClass('white');
		if($('.introtext').length)
		{
			var top_pos = $('.filters-wrap').position();
			$('.bx_filter').css({'top':top_pos.top+40});
		}
		$('.bx_filter').slideToggle();
	})

	waitingNotExists('#bx-composite-banner .bx-composite-btn', '#footer .col-sm-3.hidden-md.hidden-lg #bx-composite-banner .bx-composite-btn', 500, function() {
		$('#footer .col-sm-3.hidden-md.hidden-lg #bx-composite-banner').html($('#bx-composite-banner .bx-composite-btn').parent().html());
	});

	$.extend( $.validator.messages, {
		required: BX.message('JS_REQUIRED'),
		email: BX.message('JS_FORMAT'),
		equalTo: BX.message('JS_PASSWORD_COPY'),
		minlength: BX.message('JS_PASSWORD_LENGTH'),
		remote: BX.message('JS_ERROR')
	});

	$.validator.addMethod(
		'regexp', function( value, element, regexp ){
			var re = new RegExp( regexp );
			return this.optional( element ) || re.test( value );
		},
		BX.message('JS_FORMAT')
	);

	$.validator.addMethod(
		'filesize', function( value, element, param ){
			return this.optional( element ) || ( element.files[0].size <= param )
		},
		BX.message('JS_FILE_SIZE')
	);

	$.validator.addMethod(
		'date', function( value, element, param ) {
			var status = false;
			if(!value || value.length <= 0){
				status = true;
			}
			else{
				var re = new RegExp('^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4})$');
				var matches = re.exec(value);
				if(matches){
					var composedDate = new Date(matches[5], (matches[3] - 1), matches[1]);
					status = ((composedDate.getMonth() == (matches[3] - 1)) && (composedDate.getDate() == matches[1]) && (composedDate.getFullYear() == matches[5]));
				}
			}
			return status;
		}, BX.message('JS_DATE')
	);

	$.validator.addMethod(
		'datetime', function( value, element, param ) {
			var status = false;
			if(!value || value.length <= 0){
				status = true;
			}
			else{
				var re = new RegExp('^([0-9]{2})(.)([0-9]{2})(.)([0-9]{4}) ([0-9]{1,2}):([0-9]{1,2})$');
				var matches = re.exec(value);
				if(matches){
					var composedDate = new Date(matches[5], (matches[3] - 1), matches[1], matches[6], matches[7]);
					status = ((composedDate.getMonth() == (matches[3] - 1)) && (composedDate.getDate() == matches[1]) && (composedDate.getFullYear() == matches[5]) && (composedDate.getHours() == matches[6]) && (composedDate.getMinutes() == matches[7]));
				}
			}
			return status;
		}, BX.message('JS_DATETIME')
	);

	$.validator.addMethod(
		'extension', function(value, element, param){
			param = typeof param === 'string' ? param.replace(/,/g, '|') : 'png|jpe?g|gif';
			return this.optional(element) || value.match(new RegExp('.(' + param + ')$', 'i'));
		}, BX.message('JS_FILE_EXT')
	);

	$.validator.addMethod(
		'captcha', function( value, element, params ){
			return $.validator.methods.remote.call(this, value, element,{
				url: arHeatOptions['SITE_DIR'] + 'ajax/check-captcha.php',
				type: 'post',
				data:{
					captcha_word: value,
					captcha_sid: function(){
						return $(element).closest('form').find('input[name="captcha_sid"]').val();
					}
				}
			});
		},
		BX.message('JS_ERROR')
    );

    $.validator.addMethod(
		'recaptcha', function(value, element, param){
			var id = $(element).closest('form').find('.g-recaptcha').attr('data-widgetid');
			if(typeof id !== 'undefined'){
				return grecaptcha.getResponse(id) != '';
			}
			else{
				return true;
			}
		}, BX.message('JS_RECAPTCHA_ERROR')
	);

	/*reload captcha*/
	$('body').on( 'click', '.refresh', function(e){
		e.preventDefault();
		$.ajax({
			url: arHeatOptions['SITE_DIR'] + 'ajax/captcha.php'
		}).done(function(text){
			if($('.captcha_sid').length)
			{
				$('.captcha_sid').val(text);
				$('.captcha_img').attr('src', '/bitrix/tools/captcha.php?captcha_sid=' + text);
			}
		});
	});

	$.validator.addClassRules({
		'phone':{
			regexp: arHeatOptions['THEME']['VALIDATE_PHONE_MASK']
		},
		'confirm_password':{
			equalTo: 'input.password',
			minlength: 6
		},
		'password':{
			minlength: 6
		},
		'inputfile':{
			extension: arHeatOptions['THEME']['VALIDATE_FILE_EXT'],
			filesize: 5000000
		},
		'datetime':{
			datetime: ''
		},
		'captcha':{
			captcha: ''
		},
		'recaptcha':{
			recaptcha: ''
		}
	});

	$.validator.setDefaults({
	   highlight: function( element ){
			$(element).parent().addClass('error');
		},
		unhighlight: function( element ){
			$(element).parent().removeClass('error');
		}
	});

	$(".video_link").fancybox({
			type: "iframe",
            maxWidth    : 800,
            maxHeight   : 600,
            fitToView   : false,
            width       : '70%',
            height      : '70%',
            autoSize    : false,
            closeClick  : false,
        });

	/*city*/
	$('select.region').on('change', function(){
		var val = parseInt($(this).val());
		if($('select.city').length)
		{
			if(val)
			{
				$('select.city option').hide();
				$('select.city option').prop('disabled', 'disabled');
				$('select.city option[data-parent_section='+val+']').prop('disabled', '');
				$('select.city option:eq(0)').prop('disabled', '');
				// $('select.city').ikSelect('reset');
				$('select.city option[data-parent_section='+val+']').show();
			}
			else
				$('select.city option').prop('disabled', 'disabled');
				$('select.city option:eq(0)').prop('disabled', '');
				// $('select.city').ikSelect('reset');
		}
	})

	$('select.city, select.region').on('change', function(){
		var _this = $(this),
			val = parseInt(_this.val());
		if(_this.hasClass('region'))
		{
			$('select.city option:eq(0)').show();
			$('select.city').val(0);
		}

		if((_this.hasClass('region') && !val) || _this.hasClass('city'))
		{
			$.ajax({
				type: 'POST',
				data: {ID: val},
			}).success(function(html){
				var ob = BX.processHTML(html);
				$('.ajax_items')[0].innerHTML = ob.HTML;
				BX.ajax.processScripts(ob.SCRIPT);
			})
		}
	})

	$('.mobile_regions .city_item').on('click', function(e){
    	e.preventDefault();
    	var _this = $(this);
    	$.removeCookie('current_region');

		if(arHeatOptions['SITE_ADDRESS'].indexOf(',') != '-1')
		{
			var arDomains = arHeatOptions['SITE_ADDRESS'].split(',');
			if(arDomains)
			{
				for(var i in arDomains)
				{
					var domain_name = arDomains[i].replace("\n", "");
						domain_name = arDomains[i].replace("'", "");
					$.cookie('current_region', _this.data('id'), {path: '/',domain: domain_name});
				}
			}
		}
		else
			$.cookie('current_region', _this.data('id'), {path: '/',domain: arHeatOptions['SITE_ADDRESS']});

		location.href = _this.attr('href');
    })

	InitFlexSlider();
	InitSlickSlider();
	InitOwlSlider();

	// for check flexslider bug in composite mode
	waitingNotExists('.detail .galery #slider', '.detail .galery #slider .flex-viewport', 1000, function() {
		InitFlexSlider();
		InitSlickSlider();
		setTimeout(function() {
			$(window).resize();
		}, 350);
	});

	/* change view type catalog */
	$('.view-button').on('click', function(){
		$(this).siblings().removeClass('cur');
		$(this).addClass('cur');
	})

	// -- escape close popup form
	$(document).on('keydown', function(e){
		if(e.keyCode == 27)
		{
			if($('.jqmWindow.show').length)
				$('.jqmWindow.show .jqmClose').click();
			if($('.inline-search-block.fixed.show').length)
				$('.inline-search-block.fixed .inline-search-hide').click();
		}
	});

	/*check mobile device*/
	if(jQuery.browser.mobile){
		$('.hint span').remove();

		$(document).on('click', '*[data-event="jqm"]', function(e){
			e.preventDefault();
			var _this = $(this);
			var name = _this.data('name');

			if(window.matchMedia('(min-width:992px)').matches)
			{
				e.stopPropagation();
				_this.jqmEx();
				_this.trigger('click');
			}
			else if(name.length){
				var script = arHeatOptions['SITE_DIR'] + 'form/';
				var paramsStr = ''; var arTriggerAttrs = {};
				$.each(_this.get(0).attributes, function(index, attr){
					var attrName = attr.nodeName;
					var attrValue = _this.attr(attrName);
					attrValue = attrValue.replace(/%99/g, '\\'); // replace symbol \
					arTriggerAttrs[attrName] = attrValue;
					if(/^data\-param\-(.+)$/.test(attrName)){
						var key = attrName.match(/^data\-param\-(.+)$/)[1];
						paramsStr += key + '=' + attrValue + '&';
					}
				});
				var triggerAttrs = JSON.stringify(arTriggerAttrs);
				var encTriggerAttrs = encodeURIComponent(triggerAttrs);
				script += '?name=' + name + '&' + paramsStr + 'data-trigger=' + encTriggerAttrs;
				location.href = script;
			}
		});

		// $('.fancybox').removeClass('fancybox');
	}
	else{
		$(document).on('click', '*[data-event="jqm"]', function(e){
			e.preventDefault();
			e.stopPropagation();
			if($(this).closest('form.subscribe-form').length){
				var email = $(this).closest('form').find('input[name=EMAIL]').val();
				 $(this).data('autoload-email', email);
			}

			var _this = $(this);

			//setTimeout(function(){
				//var newButton = _this.clone().addClass('clone');
				//$('body').append(newButton);
				_this.jqmEx();
				_this.trigger('click');
				//newButton.remove();
			//}, 1000);

		});
	}

	$('.animate-load').on('click', function(){
		$(this).parent().addClass('loadings');
	})

	BX.addCustomEvent('onCompleteAction', function(eventdata, _this){
		try{
			if(eventdata.action === 'loadForm')
			{
				$(_this).parent().removeClass('loadings');
			}
			else if(eventdata.action === 'loadBasket')
			{
				var basket_link = $('.basket-link');
				if(basket_link.length)
				{
					basket_link.attr('title', $(_this).find('a').attr('title'));
					if($(_this).find('a .count').length)
					{
						var count = basket_link.find('.count').length ? parseInt($(_this).find('.count').text()) : parseInt($(_this).find('.count').text());
						basket_link.find('.prices').text($(_this).find('.icon').data('summ'));
						if(basket_link.find('.count').length)
						{
							basket_link.find('.count').text(count);
							if(count)
								basket_link.addClass('basket-count');
							else
								basket_link.removeClass('basket-count');
						}
						else
						{
							basket_link.find('.js-basket-block').append($(_this).find('.count'));
							basket_link.addClass('basket-count');
							CheckHeaderFixedMenu();
						}

						$('#mobilemenu .menu .ready .count').text(count);
						if(count){
							$('#mobilemenu .menu .ready .count').removeClass('empted');
						}
						else{
							$('#mobilemenu .menu .ready .count').addClass('empted');
						}
					}
					else if($(_this).find('.opener').length)
					{
						var count = parseInt($(_this).find('.opener .count').text());

						if(basket_link.find('.count').length)
						{
							basket_link.find('.count').text(count);
							if(count)
								basket_link.addClass('basket-count');
							else
								basket_link.removeClass('basket-count');
							basket_link.attr('title', $(_this).find('.opener').attr('title'));
						}
						$('#mobilemenu .menu .ready .count').text(count);
						if(count){
							$('#mobilemenu .menu .ready .count').removeClass('empted');
						}
						else{
							$('#mobilemenu .menu .ready .count').addClass('empted');
						}
					}
					else
					{
						basket_link.find('.count').remove();
						basket_link.removeClass('basket-count');
						CheckHeaderFixedMenu();
					}
				}
			}
			else if(eventdata.action === 'loadRSS')
			{
			}
			else if(eventdata.action === 'ajaxContentLoaded')
			{
				if('type' in eventdata)
				{
					if(eventdata.type == 'table_block')
					{
						//$('.catalog.item-views.table .item .title').sliceHeight();
						//$('.catalog.item-views.table .item .cont').sliceHeight();
						// $('.catalog.item-views.table .item .slice_price').sliceHeight();
						//$('.catalog.item-views.table .item').sliceHeight({classNull: '.footer-button'});
					}
					else if(eventdata.type == 'table_block2')
					{
						//$('.catalog.item-views.table .item .title').sliceHeight();
						//$('.catalog.item-views.table .item .cont').sliceHeight({autoHeightBlock: '.cont_inner', classNull: '.props_wrapper'});
						// $('.catalog.item-views.table .item .slice_price').sliceHeight();
						//$('.catalog.item-views.table .item').sliceHeight({classNull: '.footer-button', autoHeightBlock: '.cont_inner', callback: setHoverHeight});
					}
				}
			}
		}
		catch(e){
			console.error(e)
		}
	})

	BX.addCustomEvent('onCounterGoals', function(eventdata){
		if(arHeatOptions['THEME']['YA_GOLAS'] == 'Y' && arHeatOptions['THEME']['YA_COUNTER_ID'])
		{
			var idCounter = arHeatOptions['THEME']['YA_COUNTER_ID'];
			idCounter = parseInt(idCounter);

			if(typeof eventdata != 'object')
				eventdata = {goal: 'undefined'};

			if(typeof eventdata.goal != 'string')
				eventdata.goal = 'undefined';

			if(idCounter)
			{
				try
				{
					waitCounter(idCounter, 50, function(){
						var obCounter = window['yaCounter' + idCounter];
						if(typeof obCounter == 'object'){
							obCounter.reachGoal(eventdata.goal);
						}
					});
				}
				catch(e)
				{
					console.error(e)
				}
			}
			else
			{
				console.info('Bad counter id!', idCounter);
			}
		}
	})

	/* show print */
	if(arHeatOptions['THEME']['PRINT_BUTTON'] == 'Y')
	{
		setTimeout(function(){
			if($('.page-top .rss-block.top').length)
			{
				$('<div class="print-link"><i class="svg svg-print"></i></div>').insertBefore($('.page-top .rss-block.top .shares-block'));
			}
			else if($('.page-top .rss').length)
			{
				$('<div class="print-link"><i class="svg svg-print"></i></div>').insertAfter($('.page-top .rss'));
			}
			else if($('.page-top h1#pagetitle').length)
				$('<div class="print-link"><i class="svg svg-print"></i></div>').insertBefore($('.page-top h1#pagetitle'));
			// else
				// $('footer .print-block').html('<div class="print-link"><i class="svg svg-print"><svg id="Print.svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path class="cls-1" d="M1553,287h-2v3h-8v-3h-2a2,2,0,0,1-2-2v-5a2,2,0,0,1,2-2h2v-4h8v4h2a2,2,0,0,1,2,2v5A2,2,0,0,1,1553,287Zm-8,1h4v-4h-4v4Zm4-12h-4v2h4v-2Zm4,4h-12v5h2v-3h8v3h2v-5Z" transform="translate(-1539 -274)"/></svg></i></div>');
		},150);
	}

	$(document).on('click', '.print-link', function(){
		window.print();
	})

	$('.head-block .item-link').on('click', function(){
		var _this = $(this);
		_this.siblings().removeClass('active');
		_this.addClass('active');
	})

	/*$('table.table').each(function(){
		var _this = $(this),
			first_td = _this.find('thead tr th');
		if(!first_td.length)
			first_td = _this.find('thead tr td');
		if(first_td.length)
		{
			var j = 0;
			_this.find('tbody tr:not(.nomobile) td').each(function(i){
				if(j > first_td.length-1)
					j = 0;

				$('<div class="th-mobile">'+first_td[j].textContent+'</div>').appendTo($(this));
				j++;
			})
		}
	})*/

	$('a.fancybox').fancybox();

	/* flex pagination */
	$(document).on('mouseenter', '.flex-viewport .item', function(){
		$(this).closest('.flexslider').find('.flex-control-nav').toggleClass('noz');
		$(this).closest('.flexslider').find('.flex-control-nav').css('z-index','0');
	})
	$(document).on('mouseleave', '.flex-viewport .item', function(){
		$(this).closest('.flexslider').find('.flex-control-nav').toggleClass('noz');
		$(this).closest('.flexslider').find('.flex-control-nav').css('z-index','2');
	})

	/*header burger click*/
	$(document).ready(function(){

		//var isMobile = navigator.userAgent.toLowerCase().indexOf('mobile')+1;
		var close_btn = $('header .top_menu_map_close, #headerfixed  .top_menu_map_close');
		var site_map_wrapper = $('header .burger .site_map_wrapper .site_map_menu_wrapper, #headerfixed .burger .site_map_wrapper');

		site_map_wrapper.mCustomScrollbar();

		if(isMobile) {
			$('.burger').click(function(){
				$(this).find('.site_map_wrapper').toggle();

			});
		}
		close_btn.click(function(){
			var wrapper = $(this).closest('.site_map_wrapper');
			wrapper.toggle();
			setTimeout(function(){
				wrapper.css('display', '');
			}, 300);
		})

	});

	/* ajax more items */
	$(document).on('click', '.ajax_load_btn', function() {
		var url=$(this).closest('.bottom_nav').find('.module-pagination .next a').attr('href'),
			th=$(this).find('.more_text_ajax'),
			container = $(this).closest('.bottom_nav');
		var ajax_block = '';
		if(container.hasClass('index_block') && container.data('class')) {
			var class_block = th.closest('.drag-block').data('class').replace('_drag', '');
			class_block = class_block.replace(/\s/g, '');
			ajax_block = '&BLOCK=' + class_block;
		}
		if(!th.hasClass('loading'))
		{
			th.addClass('loading');
			var objUrl = parseUrlQuery(),
				add_url = '',
				obData = {"AJAX_REQUEST": "Y"};
			if('clear_cache' in objUrl)
			{
				if(objUrl.clear_cache == 'Y')
					add_url = '&clear_cache=Y';
			}
			if($('.banners-small.front').length)
			{
				obData.MD = $('.banners-small.front').find('.items').data('colmd');
				obData.SM = $('.banners-small.front').find('.items').data('colsm');
			}
			$.ajax({
				url: url+''+add_url,
				data: BX.ajax.prepareData(obData) + ajax_block,
				success: function(html){
					var eventdata = {action:'ajaxContentLoaded', content: html};
					var items = $(html).find('.items > div');
					if($('.ajax_load').length)
					{
						th.removeClass('loading');
						if($('.item-views.table').length){
							$('.item-views.table .items').append(html);
							// touchItemBlock('.catalog_item a');
							eventdata.type = 'table_block';
							if(arHeatOptions['THEME']['CATALOG_BLOCK_TYPE'] == 'catalog_table_2')
								eventdata.type = 'table_block2';
						}else if($('.item-views').length){
							$('.item-views .items').append(items);
						}else if($('.module_products_list').length){
							$('.module_products_list > tbody').append(html);
						}
						$('.bottom_nav').html($(html).find('.bottom_nav').html());
					}
					else
					{
						if($('.banners-small.front').length)
						{
							$('.banners-small .items.row').append(html);
							$('.bottom_nav').html($('.banners-small .items.row .bottom_nav').html());
							$('.banners-small .items.row .bottom_nav').remove();
						}
						else if(container.hasClass('index_block') && container.data('class')) //index page
						{
							var html_content = '';
							html_content = $(html).find('.'+class_block).find(container.data('class'));
							th.closest('.drag-block').find(container.data('class')).find(container.data('item')).append(html_content.find(container.data('item')).html());
							th.closest('.nav_wrapper').html(html_content.find('.nav_wrapper').html());
						}
						else
						{
							$(html).insertBefore($('.blog .bottom_nav'));
							$('.bottom_nav').html($('.blog .bottom_nav:hidden').html());
							$('.blog .bottom_nav:hidden').remove();
						}
					}


					setTimeout(function(){
						BX.onCustomEvent('onCompleteAction', [eventdata, th[0]]);
						$('.banners-small .item.normal-block').sliceHeight();
						th.removeClass('loading');
					}, 100);
				}
			})
		}
	})

	/* bug fix in ff*/
	$('img').removeAttr('draggable');

	clicked_tab = 0;

	$('.title-tab-heading').on('click', function(){
		var container = $(this).closest('.tab-pane'),
			nav = $(this).closest('.tabs').find('.nav'),
			slide_block = $(this).next();

		clicked_tab = container.index()+1;

		container.siblings().removeClass('active');
		container.siblings().find('.title-tab-heading + div').hide();

		$('.catalog.detail .nav.nav-tabs li').removeClass('active');
		nav.find('li').removeClass('active');

		if(container.hasClass('active'))
		{
			slide_block.slideUp(200, function(){

				container.removeClass('active');
				nav.find('li:eq('+container.index()+')').removeClass('active');
			});
		}
		else
		{
			container.addClass('active');
			scrollToBlock(container);
			nav.find('li:eq('+container.index()+')').addClass('active');
			slide_block.slideDown();
		}
	})

	// Responsive Menu Events
	var addActiveClass = false;
	$('#mainMenu li.dropdown > a > i, #mainMenu li.dropdown-submenu > a > i').on('click', function(e){
		e.preventDefault();
		if($(window).width() > 979) return;
		addActiveClass = $(this).closest('li').hasClass('resp-active');
		// $('#mainMenu').find('.resp-active').removeClass('resp-active');
		if(!addActiveClass){
			$(this).closest("li").addClass("resp-active");
		}else{
			$(this).closest("li").removeClass("resp-active");
		}
	});

	/*animate increment*/
	if($('.spincrement').length)
	{
		$('.spincrement').counterUp({
			delay: 80,
			time: 1000
		});
	}

	$('.bx_filter_input_container input[type=text]').numeric({allow:"."});

	$('.toggle .more_items').on('click', function(){
		$(this).closest('.toggle').find('.collapsed').fadeToggle();
		$(this).remove();
		if(typeof $(this).data('resize') !== 'undefined' && $(this).data('resize'))
			$(window).resize();
	})
	$('.toggle_menu .more_items').on('click', function(){
		$(this).closest('.toggle_menu').find('.collapsed').addClass('clicked_exp');
		$(this).remove();
	})

	/* search sync */
	$(document).on('keyup', '.search-input-div input', function(e){
		var inputValue = $(this).val();
		$('.search-input-div input').val(inputValue);

		if($(this).closest('#headerfixed').length)
		{
			if(e.keyCode == 13)
				$('.search form').submit();
		}
	});
	$(document).on('click', '.search-button-div button', function(e){
		if($(this).closest('#headerfixed').length)
			$('.search form').submit();
	});

	$('.inline-search-show, .inline-search-hide').on('click', function(e){
		if(window.matchMedia('(min-width: 600px)').matches)
		{
			if(typeof($(this).data('type_search')) != 'undefined' && $(this).data('type_search') == 'fixed')
				$('.inline-search-block').addClass('fixed');

			if(arHeatOptions['THEME']['TYPE_SEARCH'] != 'fixed')
			{
				var height_block = 0;

				height_block = $(this).closest('.maxwidth-theme').actual('outerHeight');
				if($(this).closest('header.long').length)
					height_block = $(this).closest('header.long').actual('outerHeight');
				if($('header > .top-block').length)
				{
					height_block += $('header > .top-block').actual('outerHeight');
					height_block -= 6;
				}
				if($('#bx-panel').length)
					height_block += $('#bx-panel').actual('outerHeight');
				$('.inline-search-block').css({
					'height': height_block,
					'line-height': height_block-4+'px',
					'top': -height_block
				})
			}

			$('.inline-search-block').toggleClass('show');

			$('#title-search-input').focus();
			$('.title-search-result').removeClass('hidden');

			if($('.top-block').length)
			{
				if($('.inline-search-block').hasClass('show'))
					$('.inline-search-block').css('background', $('.top-block').css('background-color'));
				else
					$('.inline-search-block').css('background', '#fff');
			}
			if(arHeatOptions['THEME']['TYPE_SEARCH'] == 'fixed')
			{
				if($('.inline-search-block').hasClass('show'))
					$('<div class="jqmOverlay search"></div>').appendTo('body');
				else {
					$('.title-search-result').addClass('hidden');
					$('.jqmOverlay').detach();
				}
			}
		}
		else
			location.href = arHeatOptions['SITE_DIR'] + 'search/';
	})

	if($('.styled-block .row > div.col-md-3').length){
		BX.addCustomEvent('onWindowResize', function(eventdata) {
			try{
				ignoreResize.push(true);
				$('.styled-block .row > div.col-md-3').each(function() {
					$(this).css({'height': '', 'line-height': ''});
					var z = parseInt($('.body_media').css('top'));
					if(z > 0){
						var rowHeight = $(this).parents('.row').first().actual('outerHeight');
						$(this).css({'height': rowHeight + 'px', 'line-height' : rowHeight + 'px'});
					}
				});
			}
			catch(e){}
			finally{
				ignoreResize.pop();
			}
		});
	}

	if($('.order-block').length){
		BX.addCustomEvent('onWindowResize', function(eventdata) {
			try{
				ignoreResize.push(true);
				$('.order-block').each(function() {
					var cols = $(this).find('.row > div');
					if(cols.length){
						var colFirst = cols.first();
						var colLast = cols.last();
						var colText = colFirst.find('.text');
						var bText = colText.length;
						var bOnlyText = cols.length === 1 && bText;
						var bPrice = colFirst.find('.price').length;
						var z = parseInt($('.body_media').css('top'));

						cols.css({'height': '', 'padding-top': '', 'padding-bottom': ''});
						colText.css({'height': '', 'padding-top': '', 'padding-bottom': ''});
						if((!bPrice && z > 0) || (bPrice && z > 1)){
							var minHeight = 83;

							if(!bOnlyText){
								var colLast_height = colLast.outerHeight();
								colLast_height = colLast_height >= minHeight ? colLast_height : minHeight;
							}

							if(bText){
								var colFirst_height = colFirst.outerHeight();
								colFirst_height = colFirst_height >= minHeight ? colFirst_height : minHeight;
							}

							var colMax_height = (bText ? (!bOnlyText ? (colLast_height >= colFirst_height ? colLast_height : colFirst_height) : colLast_height) : colFirst_height);

							if(!bOnlyText){
								var textPadding = 41 + (colMax_height - colFirst.outerHeight()) / 2;
								colLast.find('.btns').css({'padding-top': textPadding + 'px', 'padding-bottom': textPadding + 'px', 'height': colMax_height + 'px'});
							}
							if(bText){
								colLast.css({'height': colMax_height + 'px'});
								var textPadding = 41 + (colMax_height - colText.outerHeight()) / 2;
								colText.css({'padding-top': textPadding + 'px', 'padding-bottom': textPadding + 'px', 'height': colMax_height + 'px'});
							}
						}
					}
				});
			}
			catch(e){}
			finally{
				ignoreResize.pop();
			}
		});
	}

	if($('.equal-padding').length)
	{
		BX.addCustomEvent('onWindowResize', function(eventdata){
			try{
				ignoreResize.push(true);
				$('.equal-padding').each(function() {
					$(this).find('.text').css({'padding-top': '0px', 'padding-bottom': '0px'});
					var equal_block = $(this).siblings('.equals'),
						height = $(this).actual('outerHeight');

					delta = Math.round((equal_block.actual('outerHeight') - height)/2);
					if(delta)
						$(this).find('.text').css({'padding-top': delta+'px', 'padding-bottom': delta+'px'});
				})
			}
			catch(e){}
			finally{
				ignoreResize.pop();
			}
		});
	}

	$(document).on('click', '.mega-menu .dropdown-menu', function(e){
		e.stopPropagation();
	});

	$(document).on('click', '.mega-menu .dropdown-toggle.more-items', function(e){
		e.preventDefault();
	});

	$('.table-menu .dropdown,.table-menu .dropdown-submenu,.table-menu .dropdown-toggle').on('mouseenter', function() {
		CheckTopVisibleMenu();
	});

	$('.mega-menu .search-item .search-icon, .menu-row #title-search .fa-close').on('click', function(e) {
		e.preventDefault();
		$('.menu-row #title-search').toggleClass('hide');
	});

	$('.mega-menu ul.nav .search input').on('keyup', function(e) {
		var inputValue = $(this).val();
		$('.menu-row > .search input').val(inputValue);
		if(e.keyCode == 13){
			$('.menu-row > .search form').submit();
		}
	});

	$('.menu-row > .search input').on('keyup', function(e) {
		var inputValue = $(this).val();
		$('.mega-menu ul.nav .search input').val(inputValue);
		if(e.keyCode == 13){
			$('.menu-row > .search form').submit();
		}
	});

	$('.mega-menu ul.nav .search button').on('click', function(e) {
		e.preventDefault();
		var inputValue = $(this).parents('.search').find('input').val();
		$('.menu-and-search .search input').val(inputValue);
		$('.menu-row > .search form').submit();
	});

	$('.filter .calendar').on('click', function() {
		var button = $(this).next();
		if(button.hasClass('calendar-icon')){
			button.trigger('click');
		}
	});

	/* sync bxslider*/
	$(document).on('click', '.bxSlider.top-small .slides li', function(){
		var index = $(this).data('slide_key');
		$(this).siblings().removeClass('flex-active-slide');
		$(this).addClass('flex-active-slide');
		$(this).siblings('[data-slide_key="'+index+'"]').addClass('flex-active-slide');
		$('.top-bigs').data('flexslider').flexAnimate(index);
	})

	/*sliceheights*/
	if($('.banners-small .item.normal-block').length)
		$('.banners-small .item.normal-block').sliceHeight();
	if($('.teasers .item').length)
		$('.teasers .item').sliceHeight();
	if($('.wrap-portfolio-front .row.items > div').length)
		$('.wrap-portfolio-front .row.items > div').sliceHeight({'row': '.row.items', 'item': '.item1'});
	if($('.float_banners_v4 .row.items > div').length) {
		$('.float_banners_v4 .row.items > div .text-wrapper').sliceHeight();
	}
	if($('.popular_container .wraps.goods-block .item').length) {
		$('.popular_container .wraps.goods-block .item .title').sliceHeight();
		$('.popular_container .wraps.goods-block .item .section_name').sliceHeight();
		$('.popular_container .wraps.goods-block .item .slice_price').sliceHeight();
	}


	SliceHeightBlocks();

	/* toggle */
	var $this = this,
		previewParClosedHeight = 25;

	$('section.toggle > label').prepend($('<i />').addClass('fa fa-plus'));
	$('section.toggle > label').prepend($('<i />').addClass('fa fa-minus'));
	$('section.toggle.active > p').addClass('preview-active');
	$('section.toggle.active > div.toggle-content').slideDown(350, function() {});

	$('section.toggle > label').click(function(e){
		var parentSection = $(this).parent(),
			parentWrapper = $(this).parents('div.toogle'),
			previewPar = false,
			isAccordion = parentWrapper.hasClass('toogle-accordion');

		if(isAccordion && typeof(e.originalEvent) != 'undefined') {
			parentWrapper.find('section.toggle.active > label').trigger('click');
		}

		parentSection.toggleClass('active');

		// Preview Paragraph
		if( parentSection.find('> p').get(0) ){
			previewPar = parentSection.find('> p');
			var previewParCurrentHeight = previewPar.css('height');
			previewPar.css('height', 'auto');
			var previewParAnimateHeight = previewPar.css('height');
			previewPar.css('height', previewParCurrentHeight);
		}

		// Content
		var toggleContent = parentSection.find('> div.toggle-content');

		if( parentSection.hasClass('active') ){
			$(previewPar).animate({
				height: previewParAnimateHeight
			}, 350, function() {
				$(this).addClass('preview-active');
			});
			toggleContent.slideDown(350, function() {});
		}
		else{
			$(previewPar).animate({
				height: previewParClosedHeight
			}, 350, function() {
				$(this).removeClass('preview-active');
			});
			toggleContent.slideUp(350, function() {});
		}
	});

	/* accordion */
	$('.accordion-head').on('click', function(e){
		e.preventDefault();
		if(!$(this).next().hasClass('collapsing')){
			$(this).toggleClass('accordion-open');
			$(this).toggleClass('accordion-close');
		}
	});

	/* progress bar */
	$('[data-appear-progress-animation]').each(function(){
		var $this = $(this);
		$this.appear(function(){
			var delay = ($this.attr('data-appear-animation-delay') ? $this.attr('data-appear-animation-delay') : 1);
			if( delay > 1 )
				$this.css('animation-delay', delay + 'ms');
			$this.addClass($this.attr('data-appear-animation'));

			setTimeout(function(){
				$this.animate({
					width: $this.attr('data-appear-progress-animation')
				}, 1500, 'easeOutQuad', function() {
					$this.find('.progress-bar-tooltip').animate({
						opacity: 1
					}, 500, 'easeOutQuad');
				});
			}, delay);
		}, {accX: 0, accY: -50});
	});

	/* portfolio item */
	$('.item.animated-block').appear(function(){
		var $this = $(this);

		$this.addClass($this.data('animation')).addClass('visible');

	}, {accX: 0, accY: 150})

	$('a[rel=tooltip]').tooltip();
	$('span[data-toggle=tooltip]').tooltip();

	$('select.sort').on('change', function(){
		location.href = $(this).val();
	});

	setTimeout(function(th){
		$('.catalog.group.list .item').each(function(){
			var th = $(this);
			if((tmp = th.find('.image').outerHeight() - th.find('.text_info').outerHeight()) > 0){
				th.find('.text_info .titles').height(th.find('.text_info .titles').outerHeight() + tmp);
			}
		})
	}, 50);

	/* ajax tabs*/
	$(document).on('click', '.head-block .item-link', function() {
		var index = $(this).index(),
			body_block = $(this).closest('.catalog').find('.body-block'),
			obQuery = parseUrlQuery(),
			url_post = arHeatOptions['SITE_DIR'] + 'include/mainpage/comp_catalog_ajax.php';
		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		if('clear_cache' in obQuery)
			url_post += '?clear_cache='+obQuery.clear_cache;

		if(!$(this).hasClass('clicked'))
		{
			var template = '';
			if($(this).data('custom_template')) {
				template = $(this).data('custom_template');
			}
			$.ajax({
				url: url_post,
				type: 'POST',
				data: {AJAX_POST: 'Y', CUSTOM_TEMPLATE: template, AJAX_PARAMS: $(this).closest('.item-views.catalog').find('.request-data').data('value'), GLOBAL_FILTER: body_block.find('.item-block:eq('+index+')').data('filter')},
			}).success(function(html){
				body_block.find('.item-block:eq('+index+')').html(html);

				InitFlexSliderClass(body_block.find('.item-block:eq('+index+')').find('.flexslider')); //reinit flexslider

				body_block.css('height', body_block.find('.item-block.active').actual('outerHeight'));

				body_block.find('.item-block').removeClass('active').removeClass('opacity1').addClass('opacity0');
				body_block.find('.item-block:eq('+index+')').addClass('active');

				setTimeout(function(){
					body_block.css('height', 'auto');

					//recalculate height
					//body_block.find('.item-block:eq('+index+') .catalog.item-views.table .item .title').sliceHeight({sliceEqualLength: true});
					//body_block.find('.item-block:eq('+index+') .catalog.item-views.table .item .cont').sliceHeight({sliceEqualLength: true});
					//body_block.find('.item-block:eq('+index+') .catalog.item-views.table .item .slice_price').sliceHeight({sliceEqualLength: true});
					//body_block.find('.item-block:eq('+index+') .catalog.item-views.table .item').sliceHeight({classNull: '.footer-button', sliceEqualLength: true});
					SliceHeightBlocksClass(body_block.find('.item-block:eq('+index+')')[0]);

					body_block.find('.item-block:eq('+index+')').removeClass('opacity0').addClass('opacity1');
					if(typeof setHoverHeight == "function")
						setHoverHeight();
				},10);
				InitSlickSliderClass(body_block.find('.item-block:eq('+index+')').find('.slick-slider'));

				setBasketItemsClasses();
			});
		}
		else
		{
			body_block.find('.item-block').removeClass('active').removeClass('opacity1').addClass('opacity0');
			body_block.find('.item-block:eq('+index+')').addClass('active').removeClass('opacity0').addClass('opacity1');

			if(!body_block.find('.item-block.active .flex-control-nav li').length)
			{
				$('.item-views.catalog .flex-direction-nav li a').addClass('flex-disabled');
			}
			else
			{
				$('.item-views.catalog .flex-direction-nav li a').removeClass('flex-disabled');
			}
			setBasketItemsClasses();
			if(typeof setHoverHeight == "function")
				setHoverHeight();
			body_block.find('.item-block:eq('+index+')').find('.slick-slider').slick('unslick');
			InitSlickSliderClass(body_block.find('.item-block:eq('+index+')').find('.slider-debug'));
			var list = body_block.find('.item-block:eq('+index+')').find('.slick-list');
			if(!list.hasClass('fixed_height')){
				var total_height = String(list.outerHeight()) + "px";
				list.addClass('fixed_height');
				list.css('height', total_height);
			}

		}
		$(this).addClass('clicked');
	})

	/*item galery*/
	$('.thumbs .item a').on('click', function(e){
		e.preventDefault();
		$('.thumbs .item').removeClass('current');
		$(this).closest('.item').toggleClass('current');
		$('.slides li' + $(this).attr('href')).addClass('current').siblings().removeClass('current');
	});

	$('header.fixed .btn-responsive-nav').on('click', function() {
		$('html, body').animate({scrollTop: 0}, 400);
	});

	$('body').on('click', '.form .refresh-page', function(){
		location.href = location.href;
	});

	// click on HTML5 video
	$(document).on('click', 'video.video', function(e){
		var videoID = e.target.id.replace('player_', '')
	    if(videoID){
	    	if(players[videoID].playing){
				e.target.pause()
	    	}
	    	else{
	    		e.target.play()
	    	}
	    }
	})

	// START VIDEO BUTTON
	/*$(document).on('click', '.banners-big .item .btn-video', function(){
		$(this).addClass('loading');
		startMainBannerSlideVideo($(this).closest('.item'));
	});*/

	$(document).on('click', '.basket.fly .opener', function(){
		if(window.matchMedia('(max-width: 767px)').matches)
			location.href = arHeatOptions['THEME']['URL_BASKET_SECTION'];
		else
			$(this).closest('.ajax_basket').toggleClass('opened');
	})

	$(document).on('click', '.basket.fly .close_block', function()
	{
		$('.basket.fly .opener').trigger('click');
	})

	/* show props */
	$(document).on('click', ".show_props", function(){
		$(this).prev(".props_list").stop().slideToggle(333);
		$(this).find(".char_title").toggleClass("opened");
	});

	/* animated labels */
	$(document).on("focus", ".animated-labels input,.animated-labels textarea", function(){
		$(this).closest(".animated-labels").addClass("input-filed");
	}).on("focusout", ".animated-labels input,.animated-labels textarea", function(){
		if("" != $(this).val() && " " != $(this).val())
			$(this).closest(".animated-labels").addClass("input-filed");
		else
			$(this).closest(".animated-labels").removeClass("input-filed");
	})

	/* accordion action*/
	$('.panel-collapse').on('hidden.bs.collapse', function(){
		$(this).parent().toggleClass('opened');
	})
	$('.panel-collapse').on('show.bs.collapse', function(){
		$(this).parent().toggleClass('opened');
	})

	// DIGITAL BASKET
	// - basket fly close
	$(document).on('click', function(){
		if($('.basket.fly').length && $('.ajax_basket').hasClass('opened')){
			$('.ajax_basket').removeClass('opened');
		}
	});

	$(document).on('click', '.basket.fly', function(e){
		e.stopPropagation();
	});

	// - COUNTER
	var timerBasketCounter = false;

	// -- keyup input
	$(document).on('keydown', '.count', function(e){
		// Allow: backspace, delete, tab, escape, enter and .
		if($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			 // Allow: Ctrl+A, Command+A
			(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
			 // Allow: home, end, left, right, down, up
			(e.keyCode >= 35 && e.keyCode <= 40)) {
				 // let it happen, don't do anything
				 return;
		}
		// Ensure that it is a number and stop the keypress
		if((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)){
			e.preventDefault();
		}
	});
	$(document).on('keyup', '.count', function(e){
		var $this = $(this),
			counterInputValueNew = $this.val(),
			price = $this.closest('.item').find('input[name=PRICE]').val();

		Summ($this, counterInputValueNew, price);
	});

	// -- scroll after apply option
	if($('.instagram_ajax').length)
	{
		BX.addCustomEvent('onCompleteAction', function(eventdata){
			if(eventdata.action === 'instagrammLoaded')
				scrollPreviewBlock();
		});
	}
	else
		scrollPreviewBlock();

	$('select.region').on('change', function(){
		var val = parseInt($(this).val());
		if($('select.city').length)
		{
			if(val)
			{
				$('select.city').removeAttr('disabled');
				$('select.city option').hide();
				$('select.city option[data-parent_section='+val+']').show();
			}
			else
				$('select.city').attr('disabled', 'disabled');
		}
	})

	$('select.city, select.region').on('change', function(){
		var _this = $(this),
			val = parseInt(_this.val());
		if(_this.hasClass('region'))
		{
			$('select.city option:eq(0)').show();
			$('select.city').val(0);
		}

		if((_this.hasClass('region') && !val) || _this.hasClass('city'))
		{
			$.ajax({
				type: 'POST',
				data: {ID: val},
			}).success(function(html){
				var ob = BX.processHTML(html);
				$('.ajax_items')[0].innerHTML = ob.HTML;
				BX.ajax.processScripts(ob.SCRIPT);
			})
		}
	})

	// -- blur input
	$(document).on('blur', '.count', function(){
		BasketCounter($(this));
	});

	// -- click minus, plus button
	$(document).on('click', '.minus, .plus', function(e){
		e.stopPropagation();
		BasketCounter($(this));
	});

	// - Add2Basket
	$(document).on('click', '.to_cart', function(e){
		e.stopPropagation();
		var item = $(this).closest('[data-item]'),
			_this = $(this),
			itemData = item.data('item'),
			buyBlock = item.find('.buy_block'),
			counter = buyBlock.find('.counter'),
			buttonToCart = buyBlock.find('.to_cart'),
			itemQuantity = parseFloat(buttonToCart.data('quantity')),
			countItem = ($('.basket').length ? parseInt($('.basket .count').text()) : parseInt($('.basket_top:visible .count').text()));

		if(typeof(arBasketItems) === 'object' && typeof(arBasketItems[itemData.ID]) !== 'object')
			arBasketItems[itemData.ID] = {'ID': itemData.ID};

		$('.basket_top .count').text(countItem + 1).removeClass('empted');
		$('.basket .count').text(countItem + 1).removeClass('empted');

		if(typeof(arHeatOptions['THEME']['ORDER_BASKET_VIEW']) !== 'undefined')
		{
			if($.trim(arHeatOptions['THEME']['ORDER_BASKET_VIEW']) === 'HEADER' && $('.basket_top').length)
				var bBasketTop = true;
			else if($('.basket.fly').length)
				var bBasketFly = true;
		}

		if(isNaN(itemQuantity) || itemQuantity <= 0){
			itemQuantity = 1;
		}

		if(!isNaN(itemData.ID) && parseInt(itemData.ID) > 0){
			buyBlock.addClass('in');

			$.ajax({
				url: arHeatOptions['SITE_DIR'] + 'include/footer/site-basket.php',
				type: 'POST',
				data: {itemData: itemData, quantity: itemQuantity},
			}).success(function(html){
				var eventdata = {action:'loadForm'};
				BX.onCustomEvent('onCompleteAction', [eventdata, _this[0]]);

				if(bBasketTop)
				{
					$('.ajax_basket').html(html);
				}

				if(bBasketFly)
				{
					if($('.basket.fly').length)
					{
						$('.ajax_basket').html(html);
						setTimeout(function(){
							if(!$('.ajax_basket').hasClass('opened')){
								$('.ajax_basket').addClass('opened');
							}
						}, 50);
					}
				}

				var eventdata = {action:'loadBasket'};
				BX.onCustomEvent('onCompleteAction', [eventdata, $('.ajax_basket')[0]]);

				if(arHeatOptions['THEME']['USE_SALE_GOALS'] != 'N')
				{
					var eventdata = {goal: 'goal_basket_add', params: {itemData: itemData, quantity: itemQuantity}};
					BX.onCustomEvent('onCounterGoals', [eventdata]);
				}
			});
		}
		else{
			return;
		}
	});

	// - Remove9Basket
	$(document).on('click', '.remove', function(){
		var item = $(this).closest('[data-item]'),
			itemData = item.data('item'),
			bRemove = 'Y',
			bRemoveAll = ($.trim($(this).closest('[data-remove_all]').data('remove_all')) === 'Y' ? 'Y' : false);
			getCurUri = $.trim($('input[name=getPageUri]').val()),
			countItem = ($('.basket').length ? parseInt($('.basket .item').length) : parseInt($('.basket_top:visible .item').length)),
			bOneItem = (countItem - 1 <= 0),
			scrollTop = ($('.basket.fly').length ? $('.basket.fly .items_wrap').scrollTop() : ($('.basket_top:visible').length ? $('.basket_top .items:visible').scrollTop() : ''));

		if(typeof(arBasketItems) === 'object' && itemData && typeof(arBasketItems[itemData.ID]) === 'object')
			delete arBasketItems[itemData.ID];

		var _ajax = function(){
			$.ajax({
				url: arHeatOptions['SITE_DIR'] + 'include/footer/site-basket.php',
				data: {itemData: itemData, remove: bRemove, removeAll: bRemoveAll},
			}).success(function(html){

				if(bBasketTop){
					$('.ajax_basket').html(html);
					$('.basket_top .items').scrollTop(scrollTop);
				}

				if(getCurUri){
					$.ajax({
						url: getCurUri,
						type: 'POST',
					}).success(function(html){
						if($('.basket.default').length){
							$('.basket.default').html(html);
						}
					});
				}

				if(bBasketFly){
					$('.ajax_basket').html(html);
					$('.ajax_basket').addClass('opened');
					$('.basket.fly .items_wrap').scrollTop(scrollTop);
				}

				var eventdata = {action:'loadBasket'};
				BX.onCustomEvent('onCompleteAction', [eventdata, $(html)]);

				if(arHeatOptions['THEME']['USE_SALE_GOALS'] != 'N')
				{
					var eventdata = {goal: 'goal_basket_remove', params: {itemData: itemData, remove: bRemove, removeAll: bRemoveAll}};
					BX.onCustomEvent('onCounterGoals', [eventdata]);
				}
			});
		}

		if(typeof(arHeatOptions['THEME']['ORDER_BASKET_VIEW']) !== 'undefined')
		{
			if($.trim(arHeatOptions['THEME']['ORDER_BASKET_VIEW']) === 'HEADER' && $('.basket_top').length)
				var bBasketTop = true;
			else if($('.basket.fly').length)
				var bBasketFly = true;
		}

		if(typeof(itemData) !== 'undefined' && (!isNaN(itemData.ID) && itemData.ID > 0) || bRemoveAll){
			if(bRemoveAll){
				$('.buy_block').removeClass('in');
				$('.basket .count').text(0).addClass('empted');
				$('.basket_top .count').text(0).addClass('empted');
				$('#mobilemenu .menu .ready .count').text(0).addClass('empted');
			}
			else{
				$('[data-item]').each(function(){
					if($(this).data('item').ID == itemData.ID){
						$(this).find('.buy_block').removeClass('in');
					}
				});
				if($('.basket').length){
					if($('.basket_top .count').length)
						$('.basket_top .count').text(parseFloat($('.basket_top:visible .count').text()) - 1);
					else
					{
						$('.basket .count').text(parseFloat($('.basket .count').text()) - 1);
						$('.basket_top .count').text(parseFloat($('.basket .count').text()) - 1);
					}
				}
				else{
					$('.basket_top .count').text(parseFloat($('.basket_top:visible .count').text()) - 1);
				}

				$('#mobilemenu .menu .ready .count').text(parseFloat($('#mobilemenu .menu .ready .count').text()) - 1);
			}

			if(bOneItem && !bRemoveAll){
				if(item.closest('.basket_top').length){
					item.closest('.dropdown').animate({opacity: 0}, 200, function(){
						_ajax();
					});
				}
				else{
					item.closest('.basket').find('.count').addClass('empted');
					item.closest('.basket_wrap').fadeOut(200, function(){
						item.closest('.basket').find('.basket_empty').fadeIn(200, function(){
							_ajax();
						});
					});
				}
			}
			else if(bRemoveAll){
				$('.basket_wrap').fadeOut(200, function(){
					$('.remove.all').remove();
					$('.basket').find('.basket_empty').fadeIn(200, function(){
						_ajax();
					});
				});
			}
			else if(!bOneItem){
				item.animate({opacity: 0}, 200).slideUp(200, function(){
					_ajax();
				});
			}
		}
		else{
			return;
		}
	});
	$(document).on('click', '.print', function(){
		window.print();
	});

	$('.choise').on('click', function(){
		var _this = $(this);
		if(typeof(_this.data('block')) != 'undefined')
		{
			scrollToBlock(_this.data('block'));
		}
	})

	/*touch event*/
	document.addEventListener('touchend', function(event) {
		if(!$(event.target).closest('.menu-item').length && !$(event.target).hasClass('menu-item') && !$(event.target).closest('#mobileheader').length){
			$('.mega-menu .dropdown-menu').css({'display':'none','opacity':0});
			$('.menu-item').removeClass('hover');
			$('.bx-breadcrumb-item.drop').removeClass('hover');
		}
		if(!$(event.target).closest('.menu.topest').length){
			$('.menu.topest').css({'overflow': 'hidden'});
			$('.menu.topest > li').removeClass('hover');
		}
		if(!$(event.target).closest('.full.has-child').length){
			$('.menu_top_block.catalog_block li').removeClass('hover');
		}
		/*if(!$(event.target).closest('.basket_block').length){
			$('.basket_block .link').removeClass('hover');
			$('.basket_block .basket_popup_wrapp').slideUp();
		}
		if(!$(event.target).closest('.catalog_item').length){
			var tabsContentUnhoverHover = $('.tab:visible').attr('data-unhover') * 1;
			$('.tab:visible').stop().animate({'height': tabsContentUnhoverHover}, 100);
			$('.tab:visible').find('.catalog_item').removeClass('hover');
			$('.tab:visible').find('.catalog_item .buttons_block').stop().fadeOut(233);
			if($('.catalog_block').length){
				$('.catalog_block').find('.catalog_item_wrapp').removeClass('hover');
				$('.catalog_block').find('.catalog_item').removeClass('hover');
			}
		}*/

	}, false);

	touchMenu('.mega-menu .menu-item');
	touchSubMenu('.mega-menu .dropdown-submenu');
	touchTopMenu('.menu.topest li');
});

function touchSubMenu(selector){
	if(isMobile){
		if($(selector).length)
		{
			$(selector).each(function(){
				var th=$(this);
				th.on('touchend', function(e) {
					var _th = $(e.target).closest('.dropdown-submenu');

					$('.mega-menu > li.dropdown-submenu').removeClass('hover');

					if (_th.find('.dropdown-menu').length && !_th.hasClass('hover')) {
						e.preventDefault();
						e.stopPropagation();
						_th.siblings().removeClass('hover');
						_th.addClass('hover');
						$('.menu-row .dropdown-submenu .dropdown-menu').css({'display':'none', 'opacity':0});
						if(_th.hasClass('dropdown-submenu'))
						{
							_th.closest('.dropdown-menu').css({'display':'block', 'opacity':1});
						}
						if(_th.find('> .wrap > .dropdown-menu').length)
						{
							_th.find('> .wrap > .dropdown-menu').css({'display':'block', 'opacity':1});
						}
						else if(_th.find('> .dropdown-menu').length)
						{
							_th.find('> .dropdown-menu').css({'display':'block', 'opacity':1});
						}
						CheckTopVisibleMenu();
					}
					else
					{
						var href = ($(e.target).attr('href') ? $(e.target).attr('href') : $(e.target).closest('a').attr('href'))
						if(href && href !== 'undefined')
							location.href = href;
					}
				})
			})
		}
	}else{
		$(selector).off();
	}
}

function touchMenu(selector){
	if(isMobile){
		if($(selector).length)
		{
			$(selector).each(function(){
				var th=$(this);
				th.on('touchend', function(e) {
					var _th = $(e.target).closest('.menu-item');

					$('.menu.topest > li').removeClass('hover');
					$('.menu_top_block.catalog_block li').removeClass('hover');
					$('.bx-breadcrumb-item.drop').removeClass('hover');

					if (_th.find('.dropdown-menu').length && !_th.hasClass('hover')) {
						e.preventDefault();
						e.stopPropagation();
						_th.siblings().removeClass('hover');
						_th.addClass('hover');
						$('.menu-row .dropdown-menu').css({'display':'none', 'opacity':0});
						if(_th.hasClass('menu-item'))
						{
							_th.closest('.dropdown-menu').css({'display':'block', 'opacity':1});
						}
						if(_th.find('> .wrap > .dropdown-menu'))
						{
							_th.find('> .wrap > .dropdown-menu').css({'display':'block', 'opacity':1});
						}
						else if(_th.find('> .dropdown-menu'))
						{
							_th.find('> .dropdown-menu').css({'display':'block', 'opacity':1});
						}
						CheckTopVisibleMenu();
					}
					else
					{
						var href = ($(e.target).attr('href') ? $(e.target).attr('href') : $(e.target).closest('a').attr('href'))
						if(href && href !== 'undefined')
							location.href = href;
					}
				})
			})
		}
	}else{
		$(selector).off();
	}
}

function touchTopMenu(selector){
	if(isMobile){
		if($(selector).length)
		{
			$(selector).each(function(){
				var th=$(this);
				th.on('touchend', function(e) {
					var _th = $(e.target).closest('li');

					$('.menu-item').removeClass('hover');
					$('.menu-item .dropdown-menu').css({'display':'none', 'opacity':0});
					$('.menu_top_block.catalog_block li').removeClass('hover');
					$('.bx-breadcrumb-item.drop').removeClass('hover');

					if (_th.hasClass('more') && !_th.hasClass('hover')) {
						e.preventDefault();
						e.stopPropagation();
						_th.siblings().removeClass('hover');
						_th.addClass('hover');
						$('.menu.topest').css({'overflow': 'visible'});
					}
					else
					{
						var href = ($(e.target).attr('href') ? $(e.target).attr('href') : $(e.target).closest('a').attr('href'))
						if(href && href !== 'undefined')
							location.href = href;
					}
				})
			})
		}
	}else{
		$(selector).off();
	}
}

scrollPreviewBlock = function(){
	if(typeof($.cookie('scoll_block')) != 'undefined' && $.cookie('scoll_block'))
	{
		var scoll_block = $($.cookie('scoll_block'));
		if(scoll_block.length)
		{
			$('body, html').animate({scrollTop: scoll_block.offset().top}, 500);
			$.cookie('scoll_block', null);
		}
	}
}

scrollToBlock = function(block){
	if($(block).length)
	{
		var offset = $(block).offset().top;
		if(typeof($(block).data('toggle')) != 'undefined')
			$(block).click();

		if(typeof($(block).data('offset')) != 'undefined')
			offset += $(block).data('offset');

		$('body, html').animate({scrollTop: offset}, 500);
	}
}

// START VIDEO BUTTON
$('.banners-big .maxwidth-banner .item.vvideo .maxwidth-theme').on('click', function(e){
	if(!$(e.target).hasClass('btn-video'))
	{
		if($(this).hasClass('loading'))
		{
			e.stopPropagation();
			$(this).find('.btn-video').trigger('click');
		}
	}
})

$(document).on('click', '.banners-big .item.current  .btn-video', function(e){
	e.stopPropagation();
	if(!$(this).hasClass('loading'))
	{
		$(this).addClass('loading');
		$(this).closest('.maxwidth-theme').addClass('loading');
	}
	else
	{
		$(this).removeClass('loading');
		$(this).closest('.maxwidth-theme').removeClass('loading');
	}

	startMainBannerSlideVideo($(this).closest('.item'));
});

//DIGITAL BASKET
function number_format(number, decimals, dec_point, thousands_sep) {
	number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	var n = !isFinite(+number) ? 0 : +number,
	prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
	sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
	dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
	s = '',
	toFixedFix = function(n, prec){
		var k = Math.pow(10, prec);
		return '' + (Math.round(n*k)/k).toFixed(prec);
	};

	// Fix for IE parseFloat(0.55).toFixed(0) = 0;
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');

	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	}

	if ((s[1] || '')
		.length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
	}

	return s.join(dec);
}


setBasketItemsClasses = function(){
	if(typeof(arBasketItems) !== 'undefined' && typeof(arBasketItems) !== 'string'){
		if(Object.keys(arBasketItems).length){
			for(var key in arBasketItems){
				$('[data-item]').each(function(){
					if($(this).data('item').ID == key){
						$(this).find('.buy_block').addClass('in');
					}
				});
			}
		}
	}
}

function Summ(el, counterInputValueNew, price){
	if(counterInputValueNew <= 0){
		counterInputValueNew = 1;
	}

	var summ = number_format(counterInputValueNew*price, 0, '.', ' '),
		allSumm = 0;

	el.closest('.items').find('.item').each(function(){
		var $this = $(this),
			price = parseFloat($this.find('input[name=PRICE]').val()),
			count =  parseFloat($this.find('input.count').val());

		if(count <= 0){
			count = 1;
		}

		if(!isNaN(price) && !isNaN(count)){
			allSumm += count*price;
		}
	});

	allSumm = number_format(parseFloat(allSumm), 0, '.', ' ');

	el.closest('.item').find('.summ .price_val').text(summ);
	el.closest('.basket').find('.foot .total>span').text(allSumm);
}

var timerBasketUpdate = false;
// - COUNTER
BasketCounter = function(el){
	var elClass = $.trim(el.attr('class')),
		bClassMinus = (elClass.indexOf('minus') > -1),
		bClassPlus = (elClass.indexOf('plus') > -1),
		bClassCount = (elClass.indexOf('count') > -1),
		getCurUri = $.trim($('input[name=getPageUri]').val()),
		buyBlock = el.closest('.buy_block'),
		buttonToCart = buyBlock.find('.to_cart'),
		counterInput = el.closest('.counter').find('input.count'),
		counterInputValue = parseFloat($.trim(counterInput.val())),
		price = parseFloat(buyBlock.find('input[name=PRICE]').val()),
		counterInputMaxCount = Math.pow(10, parseInt(counterInput.attr('maxlength'))) - 1,
		bAjax = (el.closest('.basket').length ? true : false);

	// class minus button
	if(bClassMinus){
		var counterInputValueNew = counterInputValue - 1;

		if(counterInputValueNew <= 0){
			counterInputValueNew = 1;
		}

		counterInput.val(counterInputValueNew);

		if(bAjax){
			Summ(el, counterInputValueNew, price);

			if(timerBasketUpdate){
				clearTimeout(timerBasketUpdate);
				timerBasketUpdate = false;
			}

			timerBasketUpdate = setTimeout(function(){
				BasketUpdate(el, counterInputValueNew);
				timerBasketUpdate = false;
			}, 700);
		}
	}
	// class plus button
	else if(bClassPlus){
		var counterInputValueNew = counterInputValue + 1;

		if(counterInputValueNew > counterInputMaxCount){
			counterInputValueNew = counterInputMaxCount;
		}

		counterInput.val(counterInputValueNew);

		if(bAjax){
			Summ(el, counterInputValueNew, price);

			if(timerBasketUpdate){
				clearTimeout(timerBasketUpdate);
				timerBasketUpdate = false;
			}

			timerBasketUpdate = setTimeout(function(){
				BasketUpdate(el, counterInputValueNew);
				timerBasketUpdate = false;
			}, 700);
		}
	}
	// class input
	else if(bClassCount){
		var counterInputValueNew = counterInputValue;

		if(counterInputValueNew <= 0 || isNaN(counterInputValueNew)){
			counterInputValueNew = 1;
		}
		el.val(counterInputValueNew);

		if(bAjax){
			BasketUpdate(el, counterInputValueNew);
		}
	}

	if(!getCurUri && !el.closest('.basket.fly').length){
		buttonToCart.data('quantity', counterInputValueNew);
	}
}

BasketUpdate = function(el, counterInputValueNew){
	var	itemData = el.closest('[data-item]').data('item'),
		itemData = (typeof(arBasketItems) === 'object' && typeof(arBasketItems[itemData.ID]) === 'object' ? arBasketItems[itemData.ID] : itemData),
		buyBlock = el.closest('.buy_block'),
		buttonToCart = buyBlock.find('.to_cart'),
		getCurUri = $.trim($('input[name=getPageUri]').val())
		scrollTop = ($('.basket.fly').length ? $('.basket.fly .items_wrap').scrollTop() : ($('.basket_top:visible').length ? $('.basket_top .items:visible').scrollTop() : ''));

	if(typeof(arHeatOptions['THEME']['ORDER_BASKET_VIEW']) !== 'undefined' && $.trim(arHeatOptions['THEME']['ORDER_BASKET_VIEW']) === 'FLY' && $('.basket.fly').length){
		var bBasketFly = true;
	}

	if(typeof(arHeatOptions['THEME']['ORDER_BASKET_VIEW']) !== 'undefined' && $.trim(arHeatOptions['THEME']['ORDER_BASKET_VIEW']) === 'HEADER' && $('.basket_top').length){
		var bBasketTop = true;
	}

	else{
		if(typeof(itemData) != 'undefined' && !isNaN(itemData.ID) && itemData.ID > 0){
			$.ajax({
				// url: arHeatOptions['SITE_DIR'] + 'ajax/basket_items.php',
				url: arHeatOptions['SITE_DIR'] + 'include/footer/site-basket.php',
				data: {itemData: itemData, quantity: counterInputValueNew},
			}).success(function(data){
				if(typeof(data) === 'object'){
					arBasketItems = data;
				}
				if(bBasketTop){
					$.ajax({
						url: arHeatOptions['SITE_DIR'] + 'include/footer/site-basket.php',
						type: 'POST',
						data: {'ajaxPost': 'Y'},
					}).success(function(html){
						buyBlock.removeClass('in');
						$('.ajax_basket').html(html);

						/*if(!getCurUri){
							setTimeout(function(){
								$('.basket_top .dropdown').addClass('expanded');
							}, 100);

							setTimeout(function(){
								$('.basket_top .dropdown').removeClass('expanded');
							}, 1000);
						}*/
					});
				}

				if(bBasketFly){
					$.ajax({
						url: arHeatOptions['SITE_DIR'] + 'include/footer/site-basket.php',
						type: 'POST',
						data: {'ajaxPost': 'Y'},
					}).success(function(html){
						if($('.basket.fly').length){
							$('.ajax_basket').html(html);
							$('.basket.fly .items_wrap').scrollTop(scrollTop);
						}
					});
				}

				var eventdata = {action:'loadBasket'};
				BX.onCustomEvent('onCompleteAction', [eventdata, $(data)]);

				if(getCurUri){
					$.ajax({
						url: getCurUri,
						type: 'POST',
					}).success(function(html){
						if($('.basket.default').length){
							$('.basket.default').html(html);
						}
					});
				}
			});
		}
		else{
			return;
		}
	}
}

showTopIcons = function(){
	$('h1#pagetitle').addClass('shares');
	$(document).ready(function(){
		if($('a.rss').length)
			$('a.rss').after($('.share.top'));
		else
			$('h1#pagetitle').before($('.share.top'));
	})
}

CheckTabActive = function(){
	if(typeof(clicked_tab) && clicked_tab)
	{
		/*if(window.matchMedia('(min-width: 768px)').matches)
		{
			clicked_tab--;
			$('.catalog.detail .nav.nav-tabs li:eq('+clicked_tab+')').addClass('active');
			$('.catalog.detail .tab-content .tab-pane:eq('+clicked_tab+')').addClass('active');
			$('.catalog.detail .tab-content .tab-pane .title-tab-heading').next().removeAttr('style');
			clicked_tab = 0;
		}*/
	}
}

/* parallax bg */
ParallaxBg = function(){
	if($('*[data-type=parallax-bg]').length)
	{
		var x = $(window).scrollTop()/$(document).height();
		x=parseInt(-x * 280);
		$('*[data-type=parallax-bg]').stop().animate({'background-position-y':  x + 'px'}, 400, 'swing');
	}
}
SetFixedAskBlock = function(){
	if($('.ask_a_question_wrapper.fixed_ask_block').length)
	{

		var offset = $('.ask_a_question_wrapper.fixed_ask_block').offset(),
			block = $('.ask_a_question_wrapper.fixed_ask_block').find('.ask_a_question'),
			block_offset = BX.pos(block[0]),
			block_height = block_offset.bottom-block_offset.top,
			ask_block_offset = 130,
			diff_top_scroll = $('#headerfixed').height() + $('.breadcrumb.fixed').height() + 20,
			footer_block = $('footer').offset().top;

		if(block_height+ask_block_offset < block.closest('.fixed_wrapper').height())
		{

			if(block_height+ask_block_offset > block.closest('.fixed_wrapper').height())
				block.addClass('nonfixed');
			else
				block.removeClass('nonfixed');

			if(block.closest('.fixed_wrapper').length)
				footer_block = BX.pos(block.closest('.fixed_wrapper')[0]).bottom;


			if(block_height+diff_top_scroll+documentScrollTopLast + 80 > footer_block)
			{
				block.removeClass('fixed').css({'top': 'auto', 'width': 'auto', 'bottom': 0}).addClass('normal');
				block.parent().css('position', 'static');
				block.parent().parent().css('position', 'static');
			}
			else
			{
				block.removeClass('normal');
				block.parent().removeAttr('style');
				block.parent().parent().removeAttr('style');

				if(documentScrollTopLast + diff_top_scroll-30 > offset.top)
					block.addClass('fixed').css({'top': diff_top_scroll, 'bottom': 'auto', 'width': $('.fixed_block_fix').width()});
				else
					block.removeClass('fixed').css({'top': 0, 'width': 'auto'});
			}
		}
	}
}

HardHover = function() {
	$('.hoverTarget:visible').each(function(){
		$(this).find('.hoverWrapper').css('height', $(this).find('.hoverWrapper').css('height'));
		var wrapperHeight = $(this).find('.hoverWrapper').css('height');
		var wrapperPaddingTop = Number($(this).find('.hoverWrapper').css('padding-top').replace('px', ''));
		var wrapperPaddingBottom = Number($(this).find('.hoverWrapper').css('padding-bottom').replace('px', ''));
		var lower = 0;
		$(this).hover(
			function() {
				var date = 0;
				var name = 0;
				var text = 0;
				if($(this).find('.hoverWrapper .hoverTitle').length) {
					name = Number($(this).find('.hoverWrapper .hoverTitle').outerHeight(true));
				}
				if($(this).find('.hoverWrapper .hoverText').length) {
					text = Number($(this).find('.hoverWrapper .hoverText').outerHeight(true));
				}
				if($(this).find('.hoverWrapper .hoverDate').length) {
					date = Number($(this).find('.hoverWrapper .hoverDate').outerHeight(true));
				}

				var height_val = String((name + text + date + wrapperPaddingTop + wrapperPaddingBottom)+"px");

				$(this).find('.hoverWrapper').animate({
					height: height_val
				}, 200 );
			},
			function() {
				$(this).find('.hoverWrapper').animate({
					height: wrapperHeight
				}, 200 );
			}
		);
	});
}


// Events
var timerScroll = false, ignoreScroll = [], documentScrollTopLast = $(document).scrollTop(), documentScrollTop = $(document).scrollTop();;
$(window).scroll(function(){
	documentScrollTop = $(document).scrollTop();
	CheckPopupTop();
	SetFixedAskBlock();
	if(!ignoreScroll.length){
		if(timerScroll){
			clearTimeout(timerScroll);
			timerScroll = false;
		}
		timerScroll = setTimeout(function(){
			BX.onCustomEvent('onWindowScroll', false);
		}, 100);
	}
	documentScrollTopLast = $(document).scrollTop();
});

var timerResize = false, ignoreResize = [];

$(window).resize(function(){
	documentScrollTop = $(document).scrollTop();
	CheckPopupTop();
	if(typeof(arHeatOptions) == "undefined" || typeof($scrolltotop.stop) != 'function') {
		var timerId = setInterval(function(){
			if(typeof(arHeatOptions) !== "undefined" && typeof($scrolltotop.stop) == 'function'){
				CheckScrollToTop();
				clearInterval(timerId);
			}
		}, 150);
	} else {
		CheckScrollToTop();
	}

	if(!ignoreResize.length){
		if(timerResize){
			clearTimeout(timerResize);
			timerResize = false;
		}
		timerResize = setTimeout(function(){
			BX.onCustomEvent('onWindowResize', false);
		}, 100);
	}
	documentScrollTopLast = $(document).scrollTop();
});

BX.addCustomEvent('onWindowScroll', function(eventdata) {
	try{
		ignoreScroll.push(true);
		ParallaxBg();

		if(arHeatOptions['THEME']['TYPE_SEARCH'] != 'fixed')
		{
			if(!$('header > .top-block').length)
			{
				var height_block = 0,
					scrollVal = $(window).scrollTop();
				height_block = $('.logo_and_menu-row').actual('outerHeight');
				if(!scrollVal)
				{
					$('.inline-search-block').css({
						'height': height_block,
						'line-height': height_block-4+'px',
						'top': -height_block
					})
				}
			}
		}

	}
	catch(e){}
	finally{
		ignoreScroll.pop();
	}
});

BX.addCustomEvent('onWindowResize', function(eventdata) {
	try{
		ignoreResize.push(true);

		CheckHeaderFixedMenu();
		CheckTopMenuDotted();
		CheckMenuOffset();
		CheckTopVisibleMenu();
		CheckFlexSlider();
		CheckMainBannerSliderVText($('.banners-big .flexslider'));
		CheckObjectsSizes();
		CoverPlayer();
		verticalAlign();
		CheckTabActive();
		setTimeout(function(){
			createTableCompare($('.main-block .items .title-block:not(.clone) .item'), $('.prop_title_table'), $('.main-block .prop_title_table .item.clone'));
		}, 100);
		SliceHeightBlocks();
	}
	catch(e){}
	finally{
		ignoreResize.pop();
	}
});

BX.addCustomEvent('onSlide', function(eventdata) {
	try{
		ignoreResize.push(true);
		if(eventdata){
			var slider = eventdata.slider;
			if(slider){
				// add classes .curent & .shown to slide
				slider.find('.item').removeClass('current');
				var curSlide = slider.find('.item.flex-active-slide');
				var curSlideIndex = curSlide.attr('data-slide_index');

				curSlide.addClass('current');
				slider.find('.item[data-slide_index=' + curSlideIndex + ']').addClass('shown');
				slider.resize();

				if(typeof(curSlideIndex) !== 'undefined' && curSlideIndex.length){
					// set main banners text vertical center
					CheckMainBannerSliderVText(slider);

					if($('.item.vvideo'))
					{
						$('.item.vvideo .maxwidth-theme').removeClass('loading');
						$('.item.vvideo .maxwidth-theme .btn-video').removeClass('loading');
						$('.item.vvideo[data-video_autoplay=1] .maxwidth-theme').addClass('loading');
						$('.item.vvideo[data-video_autoplay=1] .maxwidth-theme .btn-video').addClass('loading');
					}

					// pause play video
					if(typeof(players) !== 'undefined' && players){
						for(var j in players){
							if(players[j].playing && !players[j].clone && (players[j].slideIndex != curSlideIndex)){
								if((typeof window[players[j].id] == 'object')){
									if(players[j].videoPlayer === 'YOUTUBE'){
										window[players[j].id].pauseVideo()
									}
									else if(players[j].videoPlayer === 'VIMEO'){
										window[players[j].id].pause()
									}
									else if(players[j].videoPlayer === 'RUTUBE'){
										document.getElementById(players[j].id).contentWindow.postMessage(JSON.stringify({
										    type: 'player:pause',
										    data: {}
										}), '*')
									}
									else if(players[j].videoPlayer === 'HTML5'){
										document.getElementById(players[j].id).pause()
									}
								}
							}
						}
					}
					// autoplay video
					var bVideoAutoPlay = curSlide.attr('data-video_autoplay') == 1
					if(bVideoAutoPlay){
						startMainBannerSlideVideo(curSlide)
					}
				}
				else
				{
					slider.find('.item').css('opacity', '1');
				}
				if(slider.closest('.blocks').length)
					slider.closest('.blocks').find('.flex-direction-nav li').addClass('initied');

				if(slider.closest('.wraps').length)
					slider.closest('.wraps').find('.flex-direction-nav li').addClass('initied');

				if(!slider.find('.flex-control-nav li').length && slider.hasClass('normal'))
				{
					slider.find('.flex-direction-nav li a').addClass('flex-disabled');
				}

				if(slider.closest('.banners-big').length)
				{
					// var curSlide = slider.find('.item.flex-active-slide');
					//logo src
					var bLogoImg = $('header .logo-block .logo img').length;
					if(bLogoImg)
						$('header .logo-block .logo img').attr('src', arHeatOptions.THEME.LOGO_IMAGE)

					//nav flex color
					slider.find('.flex-control-nav li').removeClass();

					//header color
					$('header').removeClass('light dark');
					if(typeof(curSlide.data('color')) != 'undefined')
					{
						slider.find('.flex-control-nav li').addClass(curSlide.data('color'));
						$('header').addClass(curSlide.data('color'));
						if(bLogoImg)
						{
							if(arHeatOptions.THEME.LOGO_IMAGE_LIGHT && curSlide.data('color') == 'light')
								$('header .logo-block .logo img').attr('src', arHeatOptions.THEME.LOGO_IMAGE_LIGHT)
						}
					}
				}

				if(!slider.hasClass('flexslider-init-slice') && slider.hasClass('nav-title') && $('.gallery-block').closest('.tab-pane').hasClass('active'))
				{
					slider.find('.item').sliceHeight({'lineheight': -3});
					slider.addClass('flexslider-init-slice');
				}

				if(slider.find('.flex-direction-nav').length){
					if(slider.find('.flex-direction-nav').find('a.flex-disabled').length)
						slider.find('.flex-direction-nav').removeClass('opacity1').addClass('opacity0');
					else
						slider.find('.flex-direction-nav').removeClass('opacity0').addClass('opacity1');
				}
			}
		}
	}
	catch(e){}
	finally{
		ignoreResize.pop();
	}
});

BX.addCustomEvent('onSlideBefore', function(eventdata) {
	try
	{
		ignoreResize.push(true);
		if(eventdata)
		{
			var slider = eventdata.slider;
			if(slider)
			{
				if(slider.closest('.banners-big').length)
				{
					setTimeout(function(){
						var curSlide = slider.find('.item.flex-active-slide');
						//logo src
						var bLogoImg = $('header .logo-block .logo img').length;
						if(bLogoImg)
							$('header .logo-block .logo img').attr('src', arHeatOptions.THEME.LOGO_IMAGE)

						//nav flex color
						slider.find('.flex-control-nav li').removeClass();

						//header color
						$('header').removeClass('light dark');
						if(typeof(curSlide.data('color')) != 'undefined')
						{
							slider.find('.flex-control-nav li').addClass(curSlide.data('color'));
							$('header').addClass(curSlide.data('color'));
							if(bLogoImg)
							{
								if(arHeatOptions.THEME.LOGO_IMAGE_LIGHT && curSlide.data('color') == 'light')
									$('header .logo-block .logo img').attr('src', arHeatOptions.THEME.LOGO_IMAGE_LIGHT)
							}
						}
					}, 100)
				}
				else if(slider.hasClass('top-bigs'))
				{
					setTimeout(function(){
						var index = slider.find('.item.flex-active-slide').data('slide_key');
						$('.bxSlider.top-small .slides').data('bxSlider').goToSlide(index);
						$('.bxSlider.top-small .slides li').removeClass('flex-active-slide');
						$('.bxSlider.top-small .slides li[data-slide_key="'+index+'"]').addClass('flex-active-slide');
					}, 100)
				}
			}
		}
	}
	catch(e){}
	finally{
		ignoreResize.pop();
	}
});

BX.addCustomEvent('onSlideEnd', function(eventdata) {
	try
	{
		ignoreResize.push(true);
		if(eventdata)
		{
			var slider = eventdata.slider;
			if(slider)
			{

			}
		}
	}
	catch(e){}
	finally{
		ignoreResize.pop();
	}
});

$(window).resize(function(){
	CheckTopMenuPadding();
	CheckTopMenuOncePadding();
	CheckSearchWidth();
});

var onCaptchaVerifyinvisible = function(response){
	$('.g-recaptcha:last').each(function(){
		var id = $(this).attr('data-widgetid');
		if(typeof(id) !== 'undefined' && response){
			if(!$(this).closest('form').find('.g-recaptcha-response').val())
				$(this).closest('form').find('.g-recaptcha-response').val(response)
			if($('iframe[src*=recaptcha]').length)
			{
				$('iframe[src*=recaptcha]').each(function(){
					var block = $(this).parent().parent();
					if(!block.hasClass('grecaptcha-badge'))
						block.css('width', '100%');
				})
			}
			if($(this).closest('form').attr('name') == 'form_comment')
				BX.submit(BX('form_comment'));
			else
				$(this).closest('form').submit();
		}
	})
}

var onCaptchaVerifynormal = function(response){
	$('.g-recaptcha').each(function(){
		var id = $(this).attr('data-widgetid');
		if(typeof(id) !== 'undefined'){
			if(grecaptcha.getResponse(id) != ''){
				$(this).closest('form').find('.recaptcha').valid();
			}
		}
	});
}

BX.addCustomEvent('onSubmitForm', function(eventdata){
	try{
		if(!window.renderRecaptchaById || !window.centinoRecaptcha || !window.centinoRecaptcha.key)
		{
			eventdata.form.submit();
			$(eventdata.form).closest('.form').addClass('sending');
			return true;
		}
		if(window.centinoRecaptcha.params.recaptchaSize == 'invisible' && typeof grecaptcha != 'undefined')
		{
			if($(eventdata.form).find('.g-recaptcha-response').val())
			{
				eventdata.form.submit();
				$(eventdata.form).closest('.form').addClass('sending');
			}
			else
			{
				grecaptcha.execute($(eventdata.form).find('.g-recaptcha').data('widgetid'));
				return false;
			}
		}
		else
		{
			eventdata.form.submit();
			$(eventdata.form).closest('.form').addClass('sending');
		}

		return true;
	}catch (e){
		console.error(e);
		return true;
	}
});

/* End */
;
; /* Start:"a:4:{s:4:"full";s:82:"/local/templates/centino-heat_s2/js/jquery.mCustomScrollbar.min.js?159334786339899";s:6:"source";s:62:"/local/templates/centino-heat_s2/js/jquery.mCustomScrollbar.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(z){var P,h,H,a,n,l,i,g,U,S,m,c,s,d,u,f,p,v,x,_,w,b,y,C,B,T,k,M,F,r,O,I,D,E,q,W,R,A,L,j,Y,X,N,V,Q,G,J,K,Z,$,ee,te,oe,ae,ne,ie,re,e,t,o;e="function"==typeof define&&define.amd,t="undefined"!=typeof module&&module.exports,o="https:"==document.location.protocol?"https:":"http:",e||(t?require("jquery-mousewheel")(z):z.event.special.mousewheel||z("head").append(decodeURI("%3Cscript src="+o+"//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),h="mCustomScrollbar",H="mCS",a=".mCustomScrollbar",n={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:100,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},l=0,i={},g=window.attachEvent&&!window.addEventListener?1:0,U=!1,S=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],m={init:function(r){var r=z.extend(!0,{},n,r),e=c.call(this);if(r.live){var t=r.liveSelector||this.selector||a,o=z(t);if("off"===r.live)return void d(t);i[t]=setTimeout(function(){o.mCustomScrollbar(r),"once"===r.live&&o.length&&d(t)},500)}else d(t);return r.setWidth=r.set_width?r.set_width:r.setWidth,r.setHeight=r.set_height?r.set_height:r.setHeight,r.axis=r.horizontalScroll?"x":u(r.axis),r.scrollInertia=0<r.scrollInertia&&r.scrollInertia<17?17:r.scrollInertia,"object"!=typeof r.mouseWheel&&1==r.mouseWheel&&(r.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),r.mouseWheel.scrollAmount=r.mouseWheelPixels?r.mouseWheelPixels:r.mouseWheel.scrollAmount,r.mouseWheel.normalizeDelta=r.advanced.normalizeMouseWheelDelta?r.advanced.normalizeMouseWheelDelta:r.mouseWheel.normalizeDelta,r.scrollButtons.scrollType=f(r.scrollButtons.scrollType),s(r),z(e).each(function(){var e=z(this);if(!e.data(H)){e.data(H,{idx:++l,opt:r,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:e.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var t=e.data(H),o=t.opt,a=e.data("mcs-axis"),n=e.data("mcs-scrollbar-position"),i=e.data("mcs-theme");a&&(o.axis=a),n&&(o.scrollbarPosition=n),i&&(o.theme=i,s(o)),p.call(this),t&&o.callbacks.onCreate&&"function"==typeof o.callbacks.onCreate&&o.callbacks.onCreate.call(this),z("#mCSB_"+t.idx+"_container img:not(."+S[2]+")").addClass(S[2]),m.update.call(null,e)}})},update:function(e,l){var t=e||c.call(this);return z(t).each(function(){var e=z(this);if(e.data(H)){var t=e.data(H),o=t.opt,a=z("#mCSB_"+t.idx+"_container"),n=z("#mCSB_"+t.idx),i=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")];if(!a.length)return;t.tweenRunning&&J(e),l&&t&&o.callbacks.onBeforeUpdate&&"function"==typeof o.callbacks.onBeforeUpdate&&o.callbacks.onBeforeUpdate.call(this),e.hasClass(S[3])&&e.removeClass(S[3]),e.hasClass(S[4])&&e.removeClass(S[4]),n.css("max-height","none"),n.height()!==e.height()&&n.css("max-height",e.height()),x.call(this),"y"===o.axis||o.advanced.autoExpandHorizontalScroll||a.css("width",v(a)),t.overflowed=C.call(this),M.call(this),o.autoDraggerLength&&w.call(this),b.call(this),T.call(this);var r=[Math.abs(a[0].offsetTop),Math.abs(a[0].offsetLeft)];"x"!==o.axis&&(t.overflowed[0]?i[0].height()>i[0].parent().height()?B.call(this):(K(e,r[0].toString(),{dir:"y",dur:0,overwrite:"none"}),t.contentReset.y=null):(B.call(this),"y"===o.axis?k.call(this):"yx"===o.axis&&t.overflowed[1]&&K(e,r[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==o.axis&&(t.overflowed[1]?i[1].width()>i[1].parent().width()?B.call(this):(K(e,r[1].toString(),{dir:"x",dur:0,overwrite:"none"}),t.contentReset.x=null):(B.call(this),"x"===o.axis?k.call(this):"yx"===o.axis&&t.overflowed[0]&&K(e,r[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),l&&t&&(2===l&&o.callbacks.onImageLoad&&"function"==typeof o.callbacks.onImageLoad?o.callbacks.onImageLoad.call(this):3===l&&o.callbacks.onSelectorChange&&"function"==typeof o.callbacks.onSelectorChange?o.callbacks.onSelectorChange.call(this):o.callbacks.onUpdate&&"function"==typeof o.callbacks.onUpdate&&o.callbacks.onUpdate.call(this)),G.call(this)}})},scrollTo:function(l,s){if(void 0!==l&&null!=l){var e=c.call(this);return z(e).each(function(){var e=z(this);if(e.data(H)){var t=e.data(H),o=t.opt,a={trigger:"external",scrollInertia:o.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=z.extend(!0,{},a,s),i=V.call(this,l),r=0<n.scrollInertia&&n.scrollInertia<17?17:n.scrollInertia;i[0]=Q.call(this,i[0],"y"),i[1]=Q.call(this,i[1],"x"),n.moveDragger&&(i[0]*=t.scrollRatio.y,i[1]*=t.scrollRatio.x),n.dur=re()?0:r,setTimeout(function(){null!==i[0]&&void 0!==i[0]&&"x"!==o.axis&&t.overflowed[0]&&(n.dir="y",n.overwrite="all",K(e,i[0].toString(),n)),null!==i[1]&&void 0!==i[1]&&"y"!==o.axis&&t.overflowed[1]&&(n.dir="x",n.overwrite="none",K(e,i[1].toString(),n))},n.timeout)}})}},stop:function(){var e=c.call(this);return z(e).each(function(){var e=z(this);e.data(H)&&J(e)})},disable:function(t){var e=c.call(this);return z(e).each(function(){var e=z(this);e.data(H)&&(e.data(H),G.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),e.addClass(S[3]))})},destroy:function(){var r=c.call(this);return z(r).each(function(){var e=z(this);if(e.data(H)){var t=e.data(H),o=t.opt,a=z("#mCSB_"+t.idx),n=z("#mCSB_"+t.idx+"_container"),i=z(".mCSB_"+t.idx+"_scrollbar");o.live&&d(o.liveSelector||z(r).selector),G.call(this,"remove"),k.call(this),B.call(this),e.removeData(H),te(this,"mcs"),i.remove(),n.find("img."+S[2]).removeClass(S[2]),a.replaceWith(n.contents()),e.removeClass(h+" _"+H+"_"+t.idx+" "+S[6]+" "+S[7]+" "+S[5]+" "+S[3]).addClass(S[4])}})}},c=function(){return"object"!=typeof z(this)||z(this).length<1?a:this},s=function(e){e.autoDraggerLength=!(-1<z.inArray(e.theme,["rounded","rounded-dark","rounded-dots","rounded-dots-dark"]))&&e.autoDraggerLength,e.autoExpandScrollbar=!(-1<z.inArray(e.theme,["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"]))&&e.autoExpandScrollbar,e.scrollButtons.enable=!(-1<z.inArray(e.theme,["minimal","minimal-dark"]))&&e.scrollButtons.enable,e.autoHideScrollbar=-1<z.inArray(e.theme,["minimal","minimal-dark"])||e.autoHideScrollbar,e.scrollbarPosition=-1<z.inArray(e.theme,["minimal","minimal-dark"])?"outside":e.scrollbarPosition},d=function(e){i[e]&&(clearTimeout(i[e]),te(i,e))},u=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},f=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},p=function(){var e=z(this),t=e.data(H),o=t.opt,a=o.autoExpandScrollbar?" "+S[1]+"_expand":"",n=["<div id='mCSB_"+t.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+t.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_vertical"+a+"'><div class='"+S[12]+"'><div id='mCSB_"+t.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+t.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+t.idx+"_scrollbar mCS-"+o.theme+" mCSB_scrollTools_horizontal"+a+"'><div class='"+S[12]+"'><div id='mCSB_"+t.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],i="yx"===o.axis?"mCSB_vertical_horizontal":"x"===o.axis?"mCSB_horizontal":"mCSB_vertical",r="yx"===o.axis?n[0]+n[1]:"x"===o.axis?n[1]:n[0],l="yx"===o.axis?"<div id='mCSB_"+t.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",s=o.autoHideScrollbar?" "+S[6]:"",c="x"!==o.axis&&"rtl"===t.langDir?" "+S[7]:"";o.setWidth&&e.css("width",o.setWidth),o.setHeight&&e.css("height",o.setHeight),o.setLeft="y"!==o.axis&&"rtl"===t.langDir?"989999px":o.setLeft,e.addClass(h+" _"+H+"_"+t.idx+s+c).wrapInner("<div id='mCSB_"+t.idx+"' class='mCustomScrollBox mCS-"+o.theme+" "+i+"'><div id='mCSB_"+t.idx+"_container' class='mCSB_container' style='position:relative; top:"+o.setTop+"; left:"+o.setLeft+";' dir='"+t.langDir+"' /></div>");var d=z("#mCSB_"+t.idx),u=z("#mCSB_"+t.idx+"_container");"y"===o.axis||o.advanced.autoExpandHorizontalScroll||u.css("width",v(u)),"outside"===o.scrollbarPosition?("static"===e.css("position")&&e.css("position","relative"),e.css("overflow","visible"),d.addClass("mCSB_outside").after(r)):(d.addClass("mCSB_inside").append(r),u.wrap(l)),_.call(this);var f=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")];f[0].css("min-height",f[0].height()),f[1].css("min-width",f[1].width())},v=function(e){var t=[e[0].scrollWidth,Math.max.apply(Math,e.children().map(function(){return z(this).outerWidth(!0)}).get())],o=e.parent().width();return o<t[0]?t[0]:o<t[1]?t[1]:"100%"},x=function(){var e=z(this),t=e.data(H),o=t.opt,a=z("#mCSB_"+t.idx+"_container");if(o.advanced.autoExpandHorizontalScroll&&"y"!==o.axis){a.css({width:"auto","min-width":0,"overflow-x":"scroll"});var n=Math.ceil(a[0].scrollWidth);3===o.advanced.autoExpandHorizontalScroll||2!==o.advanced.autoExpandHorizontalScroll&&n>a.parent().width()?a.css({width:n,"min-width":"100%","overflow-x":"inherit"}):a.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(a[0].getBoundingClientRect().right+.4)-Math.floor(a[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},_=function(){var e=z(this),t=e.data(H),o=t.opt,a=z(".mCSB_"+t.idx+"_scrollbar:first"),n=ne(o.scrollButtons.tabindex)?"tabindex='"+o.scrollButtons.tabindex+"'":"",i=["<a href='#' class='"+S[13]+"' "+n+" />","<a href='#' class='"+S[14]+"' "+n+" />","<a href='#' class='"+S[15]+"' "+n+" />","<a href='#' class='"+S[16]+"' "+n+" />"],r=["x"===o.axis?i[2]:i[0],"x"===o.axis?i[3]:i[1],i[2],i[3]];o.scrollButtons.enable&&a.prepend(r[0]).append(r[1]).next(".mCSB_scrollTools").prepend(r[2]).append(r[3])},w=function(){var e=z(this),t=e.data(H),o=z("#mCSB_"+t.idx),a=z("#mCSB_"+t.idx+"_container"),n=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")],i=[o.height()/a.outerHeight(!1),o.width()/a.outerWidth(!1)],r=[parseInt(n[0].css("min-height")),Math.round(i[0]*n[0].parent().height()),parseInt(n[1].css("min-width")),Math.round(i[1]*n[1].parent().width())],l=g&&r[1]<r[0]?r[0]:r[1],s=g&&r[3]<r[2]?r[2]:r[3];n[0].css({height:l,"max-height":n[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":r[0]+"px"}),n[1].css({width:s,"max-width":n[1].parent().width()-10})},b=function(){var e=z(this),t=e.data(H),o=z("#mCSB_"+t.idx),a=z("#mCSB_"+t.idx+"_container"),n=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")],i=[a.outerHeight(!1)-o.height(),a.outerWidth(!1)-o.width()],r=[i[0]/(n[0].parent().height()-n[0].height()),i[1]/(n[1].parent().width()-n[1].width())];t.scrollRatio={y:r[0],x:r[1]}},y=function(e,t,o){var a=o?S[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(S[0]+" "+a),n.toggleClass(S[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(S[0]),n.removeClass(S[1])):(e.addClass(S[0]),n.addClass(S[1])))},C=function(){var e=z(this),t=e.data(H),o=z("#mCSB_"+t.idx),a=z("#mCSB_"+t.idx+"_container"),n=null==t.overflowed?a.height():a.outerHeight(!1),i=null==t.overflowed?a.width():a.outerWidth(!1),r=a[0].scrollHeight,l=a[0].scrollWidth;return n<r&&(n=r),i<l&&(i=l),[n>o.height(),i>o.width()]},B=function(){var e=z(this),t=e.data(H),o=t.opt,a=z("#mCSB_"+t.idx),n=z("#mCSB_"+t.idx+"_container"),i=[z("#mCSB_"+t.idx+"_dragger_vertical"),z("#mCSB_"+t.idx+"_dragger_horizontal")];if(J(e),("x"!==o.axis&&!t.overflowed[0]||"y"===o.axis&&t.overflowed[0])&&(i[0].add(n).css("top",0),K(e,"_resetY")),"y"!==o.axis&&!t.overflowed[1]||"x"===o.axis&&t.overflowed[1]){var r=dx=0;"rtl"===t.langDir&&(r=a.width()-n.outerWidth(!1),dx=Math.abs(r/t.scrollRatio.x)),n.css("left",r),i[1].css("left",dx),K(e,"_resetX")}},T=function(){var t=z(this),e=t.data(H),o=e.opt;if(!e.bindEvents){var a;if(r.call(this),o.contentTouchScroll&&O.call(this),I.call(this),o.mouseWheel.enable)!function e(){a=setTimeout(function(){z.event.special.mousewheel?(clearTimeout(a),D.call(t[0])):e()},100)}();A.call(this),j.call(this),o.advanced.autoScrollOnFocus&&L.call(this),o.scrollButtons.enable&&Y.call(this),o.keyboard.enable&&X.call(this),e.bindEvents=!0}},k=function(){var e=z(this),t=e.data(H),o=t.opt,a=H+"_"+t.idx,n=".mCSB_"+t.idx+"_scrollbar",i=z("#mCSB_"+t.idx+",#mCSB_"+t.idx+"_container,#mCSB_"+t.idx+"_container_wrapper,"+n+" ."+S[12]+",#mCSB_"+t.idx+"_dragger_vertical,#mCSB_"+t.idx+"_dragger_horizontal,"+n+">a"),r=z("#mCSB_"+t.idx+"_container");o.advanced.releaseDraggableSelectors&&i.add(z(o.advanced.releaseDraggableSelectors)),o.advanced.extraDraggableSelectors&&i.add(z(o.advanced.extraDraggableSelectors)),t.bindEvents&&(z(document).add(z(!q()||top.document)).unbind("."+a),i.each(function(){z(this).unbind("."+a)}),clearTimeout(e[0]._focusTimeout),te(e[0],"_focusTimeout"),clearTimeout(t.sequential.step),te(t.sequential,"step"),clearTimeout(r[0].onCompleteTimeout),te(r[0],"onCompleteTimeout"),t.bindEvents=!1)},M=function(e){var t=z(this),o=t.data(H),a=o.opt,n=z("#mCSB_"+o.idx+"_container_wrapper"),i=n.length?n:z("#mCSB_"+o.idx+"_container"),r=[z("#mCSB_"+o.idx+"_scrollbar_vertical"),z("#mCSB_"+o.idx+"_scrollbar_horizontal")],l=[r[0].find(".mCSB_dragger"),r[1].find(".mCSB_dragger")];"x"!==a.axis&&(o.overflowed[0]&&!e?(r[0].add(l[0]).add(r[0].children("a")).css("display","block"),i.removeClass(S[8]+" "+S[10])):(a.alwaysShowScrollbar?(2!==a.alwaysShowScrollbar&&l[0].css("display","none"),i.removeClass(S[10])):(r[0].css("display","none"),i.addClass(S[10])),i.addClass(S[8]))),"y"!==a.axis&&(o.overflowed[1]&&!e?(r[1].add(l[1]).add(r[1].children("a")).css("display","block"),i.removeClass(S[9]+" "+S[11])):(a.alwaysShowScrollbar?(2!==a.alwaysShowScrollbar&&l[1].css("display","none"),i.removeClass(S[11])):(r[1].css("display","none"),i.addClass(S[11])),i.addClass(S[9]))),o.overflowed[0]||o.overflowed[1]?t.removeClass(S[5]):t.addClass(S[5])},F=function(e){var t=e.type,o=e.target.ownerDocument!==document&&null!==frameElement?[z(frameElement).offset().top,z(frameElement).offset().left]:null,a=q()&&e.target.ownerDocument!==top.document&&null!==frameElement?[z(e.view.frameElement).offset().top,z(e.view.frameElement).offset().left]:[0,0];switch(t){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return o?[e.originalEvent.pageY-o[0]+a[0],e.originalEvent.pageX-o[1]+a[1],!1]:[e.originalEvent.pageY,e.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var n=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],i=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return e.target.ownerDocument!==document?[n.screenY,n.screenX,1<i]:[n.pageY,n.pageX,1<i];default:return o?[e.pageY-o[0]+a[0],e.pageX-o[1]+a[1],!1]:[e.pageY,e.pageX,!1]}},r=function(){var r,l,s,c=z(this),d=c.data(H),u=d.opt,e=H+"_"+d.idx,f=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],h=z("#mCSB_"+d.idx+"_container"),t=z("#"+f[0]+",#"+f[1]),o=u.advanced.releaseDraggableSelectors?t.add(z(u.advanced.releaseDraggableSelectors)):t,a=u.advanced.extraDraggableSelectors?z(!q()||top.document).add(z(u.advanced.extraDraggableSelectors)):z(!q()||top.document);function n(e,t,o,a){if(h[0].idleTimer=u.scrollInertia<233?250:0,r.attr("id")===f[1])var n="x",i=(r[0].offsetLeft-t+a)*d.scrollRatio.x;else var n="y",i=(r[0].offsetTop-e+o)*d.scrollRatio.y;K(c,i.toString(),{dir:n,drag:!0})}t.bind("contextmenu."+e,function(e){e.preventDefault()}).bind("mousedown."+e+" touchstart."+e+" pointerdown."+e+" MSPointerDown."+e,function(e){if(e.stopImmediatePropagation(),e.preventDefault(),oe(e)){U=!0,g&&(document.onselectstart=function(){return!1}),W.call(h,!1),J(c);var t=(r=z(this)).offset(),o=F(e)[0]-t.top,a=F(e)[1]-t.left,n=r.height()+t.top,i=r.width()+t.left;o<n&&0<o&&a<i&&0<a&&(l=o,s=a),y(r,"active",u.autoExpandScrollbar)}}).bind("touchmove."+e,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=r.offset(),o=F(e)[0]-t.top,a=F(e)[1]-t.left;n(l,s,o,a)}),z(document).add(a).bind("mousemove."+e+" pointermove."+e+" MSPointerMove."+e,function(e){if(r){var t=r.offset(),o=F(e)[0]-t.top,a=F(e)[1]-t.left;if(l===o&&s===a)return;n(l,s,o,a)}}).add(o).bind("mouseup."+e+" touchend."+e+" pointerup."+e+" MSPointerUp."+e,function(e){r&&(y(r,"active",u.autoExpandScrollbar),r=null),U=!1,g&&(document.onselectstart=null),W.call(h,!0)})},O=function(){var d,c,u,f,h,m,p,g,v,x,_,w,S,b,C=z(this),y=C.data(H),B=y.opt,e=H+"_"+y.idx,T=z("#mCSB_"+y.idx),k=z("#mCSB_"+y.idx+"_container"),M=[z("#mCSB_"+y.idx+"_dragger_vertical"),z("#mCSB_"+y.idx+"_dragger_horizontal")],O=[],I=[],D=0,E="yx"===B.axis?"none":"all",W=[],t=k.find("iframe"),o=["touchstart."+e+" pointerdown."+e+" MSPointerDown."+e,"touchmove."+e+" pointermove."+e+" MSPointerMove."+e,"touchend."+e+" pointerup."+e+" MSPointerUp."+e],R=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;function a(e){if(!ae(e)||U||F(e)[2])P=0;else{b=S=0,d=P=1,C.removeClass("mCS_touch_action");var t=k.offset();c=F(e)[0]-t.top,u=F(e)[1]-t.left,W=[F(e)[0],F(e)[1]]}}function n(e){if(ae(e)&&!U&&!F(e)[2]&&(B.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!b||S)&&d)){p=$();var t=T.offset(),o=F(e)[0]-t.top,a=F(e)[1]-t.left,n="mcsLinearOut";if(O.push(o),I.push(a),W[2]=Math.abs(F(e)[0]-W[0]),W[3]=Math.abs(F(e)[1]-W[1]),y.overflowed[0])var i=M[0].parent().height()-M[0].height(),r=0<c-o&&o-c>-i*y.scrollRatio.y&&(2*W[3]<W[2]||"yx"===B.axis);if(y.overflowed[1])var l=M[1].parent().width()-M[1].width(),s=0<u-a&&a-u>-l*y.scrollRatio.x&&(2*W[2]<W[3]||"yx"===B.axis);r||s?(R||e.preventDefault(),S=1):(b=1,C.addClass("mCS_touch_action")),R&&e.preventDefault(),_="yx"===B.axis?[c-o,u-a]:"x"===B.axis?[null,u-a]:[c-o,null],k[0].idleTimer=250,y.overflowed[0]&&L(_[0],D,n,"y","all",!0),y.overflowed[1]&&L(_[1],D,n,"x",E,!0)}}function i(e){if(!ae(e)||U||F(e)[2])P=0;else{P=1,e.stopImmediatePropagation(),J(C),m=$();var t=T.offset();f=F(e)[0]-t.top,h=F(e)[1]-t.left,O=[],I=[]}}function r(e){if(ae(e)&&!U&&!F(e)[2]){d=0,e.stopImmediatePropagation(),b=S=0,g=$();var t=T.offset(),o=F(e)[0]-t.top,a=F(e)[1]-t.left;if(!(30<g-p)){var n="mcsEaseOut",i=(x=1e3/(g-m))<2.5,r=i?[O[O.length-2],I[I.length-2]]:[0,0];v=i?[o-r[0],a-r[1]]:[o-f,a-h];var l=[Math.abs(v[0]),Math.abs(v[1])];x=i?[Math.abs(v[0]/4),Math.abs(v[1]/4)]:[x,x];var s=[Math.abs(k[0].offsetTop)-v[0]*A(l[0]/x[0],x[0]),Math.abs(k[0].offsetLeft)-v[1]*A(l[1]/x[1],x[1])];_="yx"===B.axis?[s[0],s[1]]:"x"===B.axis?[null,s[1]]:[s[0],null],w=[4*l[0]+B.scrollInertia,4*l[1]+B.scrollInertia];var c=parseInt(B.contentTouchScroll)||0;_[0]=c<l[0]?_[0]:0,_[1]=c<l[1]?_[1]:0,y.overflowed[0]&&L(_[0],w[0],n,"y",E,!1),y.overflowed[1]&&L(_[1],w[1],n,"x",E,!1)}}}function A(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return 90<e?4<t?o[0]:o[3]:60<e?3<t?o[3]:o[2]:30<e?8<t?o[1]:6<t?o[0]:4<t?t:o[2]:8<t?t:o[3]}function L(e,t,o,a,n,i){e&&K(C,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}k.bind(o[0],function(e){a(e)}).bind(o[1],function(e){n(e)}),T.bind(o[0],function(e){i(e)}).bind(o[2],function(e){r(e)}),t.length&&t.each(function(){z(this).bind("load",function(){q(this)&&z(this.contentDocument||this.contentWindow.document).bind(o[0],function(e){a(e),i(e)}).bind(o[1],function(e){n(e)}).bind(o[2],function(e){r(e)})})})},I=function(){var n,a=z(this),i=a.data(H),r=i.opt,l=i.sequential,e=H+"_"+i.idx,s=z("#mCSB_"+i.idx+"_container"),c=s.parent();function d(e,t,o){l.type=o&&n?"stepped":"stepless",l.scrollAmount=10,N(a,e,t,"mcsLinearOut",o?60:null)}s.bind("mousedown."+e,function(e){P||n||(n=1,U=!0)}).add(document).bind("mousemove."+e,function(e){if(!P&&n&&(window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type&&document.selection.createRange().text)){var t=s.offset(),o=F(e)[0]-t.top+s[0].offsetTop,a=F(e)[1]-t.left+s[0].offsetLeft;0<o&&o<c.height()&&0<a&&a<c.width()?l.step&&d("off",null,"stepped"):("x"!==r.axis&&i.overflowed[0]&&(o<0?d("on",38):o>c.height()&&d("on",40)),"y"!==r.axis&&i.overflowed[1]&&(a<0?d("on",37):a>c.width()&&d("on",39)))}}).bind("mouseup."+e+" dragend."+e,function(e){P||(n&&(n=0,d("off",null)),U=!1)})},D=function(){if(z(this).data(H)){var u=z(this),f=u.data(H),h=f.opt,e=H+"_"+f.idx,m=z("#mCSB_"+f.idx),p=[z("#mCSB_"+f.idx+"_dragger_vertical"),z("#mCSB_"+f.idx+"_dragger_horizontal")],t=z("#mCSB_"+f.idx+"_container").find("iframe");t.length&&t.each(function(){z(this).bind("load",function(){q(this)&&z(this.contentDocument||this.contentWindow.document).bind("mousewheel."+e,function(e,t){o(e,t)})})}),m.bind("mousewheel."+e,function(e,t){o(e,t)})}function o(e,t){if(J(u),!R(u,e.target)){var o="auto"!==h.mouseWheel.deltaFactor?parseInt(h.mouseWheel.deltaFactor):g&&e.deltaFactor<100?100:e.deltaFactor||100,a=h.scrollInertia;if("x"===h.axis||"x"===h.mouseWheel.axis)var n="x",i=[Math.round(o*f.scrollRatio.x),parseInt(h.mouseWheel.scrollAmount)],r="auto"!==h.mouseWheel.scrollAmount?i[1]:i[0]>=m.width()?.9*m.width():i[0],l=Math.abs(z("#mCSB_"+f.idx+"_container")[0].offsetLeft),s=p[1][0].offsetLeft,c=p[1].parent().width()-p[1].width(),d="y"===h.mouseWheel.axis?e.deltaY||t:e.deltaX;else var n="y",i=[Math.round(o*f.scrollRatio.y),parseInt(h.mouseWheel.scrollAmount)],r="auto"!==h.mouseWheel.scrollAmount?i[1]:i[0]>=m.height()?.9*m.height():i[0],l=Math.abs(z("#mCSB_"+f.idx+"_container")[0].offsetTop),s=p[0][0].offsetTop,c=p[0].parent().height()-p[0].height(),d=e.deltaY||t;"y"===n&&!f.overflowed[0]||"x"===n&&!f.overflowed[1]||((h.mouseWheel.invert||e.webkitDirectionInvertedFromDevice)&&(d=-d),h.mouseWheel.normalizeDelta&&(d=d<0?-1:1),(0<d&&0!==s||d<0&&s!==c||h.mouseWheel.preventDefault)&&(e.stopImmediatePropagation(),e.preventDefault()),e.deltaFactor<5&&!h.mouseWheel.normalizeDelta&&(r=e.deltaFactor,a=17),K(u,(l-d*r).toString(),{dir:n,dur:a}))}}},E=new Object,q=function(e){var t=!1,o=!1,a=null;if(void 0===e?o="#empty":void 0!==z(e).attr("id")&&(o=z(e).attr("id")),!1!==o&&void 0!==E[o])return E[o];if(e){try{var n=e.contentDocument||e.contentWindow.document;a=n.body.innerHTML}catch(e){}t=null!==a}else{try{var n=top.document;a=n.body.innerHTML}catch(e){}t=null!==a}return!1!==o&&(E[o]=t),t},W=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},R=function(e,t){var o=t.nodeName.toLowerCase(),a=e.data(H).opt.mouseWheel.disableOver;return-1<z.inArray(o,a)&&!(-1<z.inArray(o,["select","textarea"])&&!z(t).is(":focus"))},A=function(){var r,l=z(this),s=l.data(H),e=H+"_"+s.idx,c=z("#mCSB_"+s.idx+"_container"),d=c.parent(),t=z(".mCSB_"+s.idx+"_scrollbar ."+S[12]);t.bind("mousedown."+e+" touchstart."+e+" pointerdown."+e+" MSPointerDown."+e,function(e){U=!0,z(e.target).hasClass("mCSB_dragger")||(r=1)}).bind("touchend."+e+" pointerup."+e+" MSPointerUp."+e,function(e){U=!1}).bind("click."+e,function(e){if(r&&(r=0,z(e.target).hasClass(S[12])||z(e.target).hasClass("mCSB_draggerRail"))){J(l);var t=z(this),o=t.find(".mCSB_dragger");if(0<t.parent(".mCSB_scrollTools_horizontal").length){if(!s.overflowed[1])return;var a="x",n=e.pageX>o.offset().left?-1:1,i=Math.abs(c[0].offsetLeft)-n*(.9*d.width())}else{if(!s.overflowed[0])return;var a="y",n=e.pageY>o.offset().top?-1:1,i=Math.abs(c[0].offsetTop)-n*(.9*d.height())}K(l,i.toString(),{dir:a,scrollEasing:"mcsEaseInOut"})}})},L=function(){var i=z(this),e=i.data(H),r=e.opt,t=H+"_"+e.idx,l=z("#mCSB_"+e.idx+"_container"),s=l.parent();l.bind("focusin."+t,function(e){var n=z(document.activeElement),t=l.find(".mCustomScrollBox").length;n.is(r.advanced.autoScrollOnFocus)&&(J(i),clearTimeout(i[0]._focusTimeout),i[0]._focusTimer=t?17*t:0,i[0]._focusTimeout=setTimeout(function(){var e=[ie(n)[0],ie(n)[1]],t=[l[0].offsetTop,l[0].offsetLeft],o=[0<=t[0]+e[0]&&t[0]+e[0]<s.height()-n.outerHeight(!1),0<=t[1]+e[1]&&t[0]+e[1]<s.width()-n.outerWidth(!1)],a="yx"!==r.axis||o[0]||o[1]?"all":"none";"x"===r.axis||o[0]||K(i,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:a,dur:0}),"y"===r.axis||o[1]||K(i,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:a,dur:0})},i[0]._focusTimer))})},j=function(){var e=z(this),t=e.data(H),o=H+"_"+t.idx,a=z("#mCSB_"+t.idx+"_container").parent();a.bind("scroll."+o,function(e){0===a.scrollTop()&&0===a.scrollLeft()||z(".mCSB_"+t.idx+"_scrollbar").css("visibility","hidden")})},Y=function(){var a=z(this),n=a.data(H),i=n.opt,r=n.sequential,e=H+"_"+n.idx,t=".mCSB_"+n.idx+"_scrollbar",o=z(t+">a");o.bind("contextmenu."+e,function(e){e.preventDefault()}).bind("mousedown."+e+" touchstart."+e+" pointerdown."+e+" MSPointerDown."+e+" mouseup."+e+" touchend."+e+" pointerup."+e+" MSPointerUp."+e+" mouseout."+e+" pointerout."+e+" MSPointerOut."+e+" click."+e,function(e){if(e.preventDefault(),oe(e)){var t=z(this).attr("class");switch(r.type=i.scrollButtons.scrollType,e.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===r.type)return;U=!0,n.tweenRunning=!1,o("on",t);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===r.type)return;U=!1,r.dir&&o("off",t);break;case"click":if("stepped"!==r.type||n.tweenRunning)return;o("on",t)}}function o(e,t){r.scrollAmount=i.scrollButtons.scrollAmount,N(a,e,t)}})},X=function(){var l=z(this),s=l.data(H),c=s.opt,d=s.sequential,e=H+"_"+s.idx,t=z("#mCSB_"+s.idx),u=z("#mCSB_"+s.idx+"_container"),f=u.parent(),h="input,textarea,select,datalist,keygen,[contenteditable='true']",o=u.find("iframe"),a=["blur."+e+" keydown."+e+" keyup."+e];function n(e){switch(e.type){case"blur":s.tweenRunning&&d.dir&&r("off",null);break;case"keydown":case"keyup":var t=e.keyCode?e.keyCode:e.which,o="on";if("x"!==c.axis&&(38===t||40===t)||"y"!==c.axis&&(37===t||39===t)){if((38===t||40===t)&&!s.overflowed[0]||(37===t||39===t)&&!s.overflowed[1])return;"keyup"===e.type&&(o="off"),z(document.activeElement).is(h)||(e.preventDefault(),e.stopImmediatePropagation(),r(o,t))}else if(33===t||34===t){if((s.overflowed[0]||s.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type){J(l);var a=34===t?-1:1;if("x"===c.axis||"yx"===c.axis&&s.overflowed[1]&&!s.overflowed[0])var n="x",i=Math.abs(u[0].offsetLeft)-a*(.9*f.width());else var n="y",i=Math.abs(u[0].offsetTop)-a*(.9*f.height());K(l,i.toString(),{dir:n,scrollEasing:"mcsEaseInOut"})}}else if((35===t||36===t)&&!z(document.activeElement).is(h)&&((s.overflowed[0]||s.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type)){if("x"===c.axis||"yx"===c.axis&&s.overflowed[1]&&!s.overflowed[0])var n="x",i=35===t?Math.abs(f.width()-u.outerWidth(!1)):0;else var n="y",i=35===t?Math.abs(f.height()-u.outerHeight(!1)):0;K(l,i.toString(),{dir:n,scrollEasing:"mcsEaseInOut"})}}function r(e,t){d.type=c.keyboard.scrollType,d.scrollAmount=c.keyboard.scrollAmount,"stepped"===d.type&&s.tweenRunning||N(l,e,t)}}o.length&&o.each(function(){z(this).bind("load",function(){q(this)&&z(this.contentDocument||this.contentWindow.document).bind(a[0],function(e){n(e)})})}),t.attr("tabindex","0").bind(a[0],function(e){n(e)})},N=function(u,e,t,f,h){var m=u.data(H),p=m.opt,g=m.sequential,v=z("#mCSB_"+m.idx+"_container"),o="stepped"===g.type,x=p.scrollInertia<26?26:p.scrollInertia,_=p.scrollInertia<1?17:p.scrollInertia;switch(e){case"on":if(g.dir=[t===S[16]||t===S[15]||39===t||37===t?"x":"y",t===S[13]||t===S[15]||38===t||37===t?-1:1],J(u),ne(t)&&"stepped"===g.type)return;w(o);break;case"off":clearTimeout(g.step),te(g,"step"),J(u),(o||m.tweenRunning&&g.dir)&&w(!0)}function w(e){p.snapAmount&&(g.scrollAmount=p.snapAmount instanceof Array?"x"===g.dir[0]?p.snapAmount[1]:p.snapAmount[0]:p.snapAmount);var t="stepped"!==g.type,o=h||(e?t?x/1.5:_:1e3/60),a=e?t?7.5:40:2.5,n=[Math.abs(v[0].offsetTop),Math.abs(v[0].offsetLeft)],i=[10<m.scrollRatio.y?10:m.scrollRatio.y,10<m.scrollRatio.x?10:m.scrollRatio.x],r="x"===g.dir[0]?n[1]+g.dir[1]*(i[1]*a):n[0]+g.dir[1]*(i[0]*a),l="x"===g.dir[0]?n[1]+g.dir[1]*parseInt(g.scrollAmount):n[0]+g.dir[1]*parseInt(g.scrollAmount),s="auto"!==g.scrollAmount?l:r,c=f||(e?t?"mcsLinearOut":"mcsEaseInOut":"mcsLinear"),d=!!e;e&&o<17&&(s="x"===g.dir[0]?n[1]:n[0]),K(u,s.toString(),{dir:g.dir[0],scrollEasing:c,dur:o,onComplete:d}),e?g.dir=!1:(clearTimeout(g.step),g.step=setTimeout(function(){w()},o))}},V=function(e){var t=z(this).data(H).opt,o=[];return"function"==typeof e&&(e=e()),e instanceof Array?o=1<e.length?[e[0],e[1]]:"x"===t.axis?[null,e[0]]:[e[0],null]:(o[0]=e.y?e.y:e.x||"x"===t.axis?null:e,o[1]=e.x?e.x:e.y||"y"===t.axis?null:e),"function"==typeof o[0]&&(o[0]=o[0]()),"function"==typeof o[1]&&(o[1]=o[1]()),o},Q=function(e,t){if(null!=e&&void 0!==e){var o=z(this),a=o.data(H),n=a.opt,i=z("#mCSB_"+a.idx+"_container"),r=i.parent(),l=typeof e;t||(t="x"===n.axis?"x":"y");var s="x"===t?i.outerWidth(!1)-r.width():i.outerHeight(!1)-r.height(),c="x"===t?i[0].offsetLeft:i[0].offsetTop,d="x"===t?"left":"top";switch(l){case"function":return e();case"object":var u=e.jquery?e:z(e);if(!u.length)return;return"x"===t?ie(u)[1]:ie(u)[0];case"string":case"number":if(ne(e))return Math.abs(e);if(-1!==e.indexOf("%"))return Math.abs(s*parseInt(e)/100);if(-1!==e.indexOf("-="))return Math.abs(c-parseInt(e.split("-=")[1]));if(-1!==e.indexOf("+=")){var f=c+parseInt(e.split("+=")[1]);return 0<=f?0:Math.abs(f)}if(-1!==e.indexOf("px")&&ne(e.split("px")[0]))return Math.abs(e.split("px")[0]);if("top"===e||"left"===e)return 0;if("bottom"===e)return Math.abs(r.height()-i.outerHeight(!1));if("right"===e)return Math.abs(r.width()-i.outerWidth(!1));if("first"!==e&&"last"!==e)return z(e).length?"x"===t?ie(z(e))[1]:ie(z(e))[0]:(i.css(d,e),void m.update.call(null,o[0]));var u=i.find(":"+e);return"x"===t?ie(u)[1]:ie(u)[0]}}},G=function(e){var t=z(this),o=t.data(H),a=o.opt,n=z("#mCSB_"+o.idx+"_container");if(e)return clearTimeout(n[0].autoUpdate),void te(n[0],"autoUpdate");function i(e){if(z(e).hasClass(S[2]))l();else{var t=new Image;t.onload=function(e,t){return function(){return t.apply(e,arguments)}}(t,function(){this.onload=null,z(e).addClass(S[2]),l(2)}),t.src=e.src}}function r(){!0===a.advanced.updateOnSelectorChange&&(a.advanced.updateOnSelectorChange="*");var e=0,t=n.find(a.advanced.updateOnSelectorChange);return a.advanced.updateOnSelectorChange&&0<t.length&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function l(e){clearTimeout(n[0].autoUpdate),m.update.call(null,t[0],e)}!function e(){clearTimeout(n[0].autoUpdate),0!==t.parents("html").length?n[0].autoUpdate=setTimeout(function(){return a.advanced.updateOnSelectorChange&&(o.poll.change.n=r(),o.poll.change.n!==o.poll.change.o)?(o.poll.change.o=o.poll.change.n,void l(3)):a.advanced.updateOnContentResize&&(o.poll.size.n=t[0].scrollHeight+t[0].scrollWidth+n[0].offsetHeight+t[0].offsetHeight+t[0].offsetWidth,o.poll.size.n!==o.poll.size.o)?(o.poll.size.o=o.poll.size.n,void l(1)):!a.advanced.updateOnImageLoad||"auto"===a.advanced.updateOnImageLoad&&"y"===a.axis||(o.poll.img.n=n.find("img").length,o.poll.img.n===o.poll.img.o)?void((a.advanced.updateOnSelectorChange||a.advanced.updateOnContentResize||a.advanced.updateOnImageLoad)&&e()):(o.poll.img.o=o.poll.img.n,void n.find("img").each(function(){i(this)}))},a.advanced.autoUpdateTimeout):t=null}()},J=function(e){var t=e.data(H),o=z("#mCSB_"+t.idx+"_container,#mCSB_"+t.idx+"_container_wrapper,#mCSB_"+t.idx+"_dragger_vertical,#mCSB_"+t.idx+"_dragger_horizontal");o.each(function(){ee.call(this)})},K=function(n,e,i){var t=n.data(H),o=t.opt,a={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:o.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},i=z.extend(a,i),r=[i.dur,i.drag?0:i.dur],l=z("#mCSB_"+t.idx),s=z("#mCSB_"+t.idx+"_container"),c=s.parent(),d=o.callbacks.onTotalScrollOffset?V.call(n,o.callbacks.onTotalScrollOffset):[0,0],u=o.callbacks.onTotalScrollBackOffset?V.call(n,o.callbacks.onTotalScrollBackOffset):[0,0];if(t.trigger=i.trigger,0===c.scrollTop()&&0===c.scrollLeft()||(z(".mCSB_"+t.idx+"_scrollbar").css("visibility","visible"),c.scrollTop(0).scrollLeft(0)),"_resetY"!==e||t.contentReset.y||(b("onOverflowYNone")&&o.callbacks.onOverflowYNone.call(n[0]),t.contentReset.y=1),"_resetX"!==e||t.contentReset.x||(b("onOverflowXNone")&&o.callbacks.onOverflowXNone.call(n[0]),t.contentReset.x=1),"_resetY"!==e&&"_resetX"!==e){if(!t.contentReset.y&&n[0].mcs||!t.overflowed[0]||(b("onOverflowY")&&o.callbacks.onOverflowY.call(n[0]),t.contentReset.x=null),!t.contentReset.x&&n[0].mcs||!t.overflowed[1]||(b("onOverflowX")&&o.callbacks.onOverflowX.call(n[0]),t.contentReset.x=null),o.snapAmount){var f=o.snapAmount instanceof Array?"x"===i.dir?o.snapAmount[1]:o.snapAmount[0]:o.snapAmount;e=function(e,t,o){return Math.round(e/t)*t-o}(e,f,o.snapOffset)}switch(i.dir){case"x":var h=z("#mCSB_"+t.idx+"_dragger_horizontal"),m="left",p=s[0].offsetLeft,g=[l.width()-s.outerWidth(!1),h.parent().width()-h.width()],v=[e,0===e?0:e/t.scrollRatio.x],x=d[1],_=u[1],w=0<x?x/t.scrollRatio.x:0,S=0<_?_/t.scrollRatio.x:0;break;case"y":var h=z("#mCSB_"+t.idx+"_dragger_vertical"),m="top",p=s[0].offsetTop,g=[l.height()-s.outerHeight(!1),h.parent().height()-h.height()],v=[e,0===e?0:e/t.scrollRatio.y],x=d[0],_=u[0],w=0<x?x/t.scrollRatio.y:0,S=0<_?_/t.scrollRatio.y:0}v[1]<0||0===v[0]&&0===v[1]?v=[0,0]:v[1]>=g[1]?v=[g[0],g[1]]:v[0]=-v[0],n[0].mcs||(C(),b("onInit")&&o.callbacks.onInit.call(n[0])),clearTimeout(s[0].onCompleteTimeout),Z(h[0],m,Math.round(v[1]),r[1],i.scrollEasing),!t.tweenRunning&&(0===p&&0<=v[0]||p===g[0]&&v[0]<=g[0])||Z(s[0],m,Math.round(v[0]),r[0],i.scrollEasing,i.overwrite,{onStart:function(){i.callbacks&&i.onStart&&!t.tweenRunning&&(b("onScrollStart")&&(C(),o.callbacks.onScrollStart.call(n[0])),t.tweenRunning=!0,y(h),t.cbOffsets=[o.callbacks.alwaysTriggerOffsets||p>=g[0]+x,o.callbacks.alwaysTriggerOffsets||p<=-_])},onUpdate:function(){i.callbacks&&i.onUpdate&&b("whileScrolling")&&(C(),o.callbacks.whileScrolling.call(n[0]))},onComplete:function(){if(i.callbacks&&i.onComplete){"yx"===o.axis&&clearTimeout(s[0].onCompleteTimeout);var e=s[0].idleTimer||0;s[0].onCompleteTimeout=setTimeout(function(){b("onScroll")&&(C(),o.callbacks.onScroll.call(n[0])),b("onTotalScroll")&&v[1]>=g[1]-w&&t.cbOffsets[0]&&(C(),o.callbacks.onTotalScroll.call(n[0])),b("onTotalScrollBack")&&v[1]<=S&&t.cbOffsets[1]&&(C(),o.callbacks.onTotalScrollBack.call(n[0])),t.tweenRunning=!1,s[0].idleTimer=0,y(h,"hide")},e)}}})}function b(e){return t&&o.callbacks[e]&&"function"==typeof o.callbacks[e]}function C(){var e=[s[0].offsetTop,s[0].offsetLeft],t=[h[0].offsetTop,h[0].offsetLeft],o=[s.outerHeight(!1),s.outerWidth(!1)],a=[l.height(),l.width()];n[0].mcs={content:s,top:e[0],left:e[1],draggerTop:t[0],draggerLeft:t[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(o[0])-a[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(o[1])-a[1])),direction:i.dir}}},Z=function(e,t,o,a,n,i,r){e._mTween||(e._mTween={top:{},left:{}});var l,s,r=r||{},c=r.onStart||function(){},d=r.onUpdate||function(){},u=r.onComplete||function(){},f=$(),h=0,m=e.offsetTop,p=e.style,g=e._mTween[t];"left"===t&&(m=e.offsetLeft);var v=o-m;function x(){g.stop||(h||c.call(),h=$()-f,_(),h>=g.time&&(g.time=h>g.time?h+l-(h-g.time):h+l-1,g.time<h+1&&(g.time=h+1)),g.time<a?g.id=s(x):u.call())}function _(){0<a?(g.currVal=function(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return(e/=a/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t;case"easeInOutStrong":return(e/=a/2)<1?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(2-Math.pow(2,-10*e))+t);case"easeInOut":case"mcsEaseInOut":return(e/=a/2)<1?o/2*e*e*e+t:o/2*((e-=2)*e*e+2)+t;case"easeOutSmooth":return e/=a,-o*(--e*e*e*e-1)+t;case"easeOutStrong":return o*(1-Math.pow(2,-10*e/a))+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}(g.time,m,v,a,n),p[t]=Math.round(g.currVal)+"px"):p[t]=o+"px",d.call()}g.stop=0,"none"!==i&&null!=g.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(g.id):clearTimeout(g.id),g.id=null),l=1e3/60,g.time=h+l,s=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return _(),setTimeout(e,.01)},g.id=s(x)},$=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},ee=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},te=function(t,o){try{delete t[o]}catch(e){t[o]=null}},oe=function(e){return!(e.which&&1!==e.which)},ae=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},ne=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ie=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},re=function(){var e=function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}();return!!e&&document[e]},z.fn[h]=function(e){return m[e]?m[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void z.error("Method "+e+" does not exist"):m.init.apply(this,arguments)},z[h]=function(e){return m[e]?m[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void z.error("Method "+e+" does not exist"):m.init.apply(this,arguments)},z[h].defaults=n,window[h]=!0,z(window).bind("load",function(){z(a)[h](),z.extend(z.expr[":"],{mcsInView:z.expr[":"].mcsInView||function(e){var t,o,a=z(e),n=a.parents(".mCSB_container");if(n.length)return t=n.parent(),0<=(o=[n[0].offsetTop,n[0].offsetLeft])[0]+ie(a)[0]&&o[0]+ie(a)[0]<t.height()-a.outerHeight(!1)&&0<=o[1]+ie(a)[1]&&o[1]+ie(a)[1]<t.width()-a.outerWidth(!1)},mcsInSight:z.expr[":"].mcsInSight||function(e,t,o){var a,n,i,r,l=z(e),s=l.parents(".mCSB_container"),c="exact"===o[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(s.length)return a=[l.outerHeight(!1),l.outerWidth(!1)],i=[s[0].offsetTop+ie(l)[0],s[0].offsetLeft+ie(l)[1]],n=[s.parent()[0].offsetHeight,s.parent()[0].offsetWidth],i[0]-n[0]*(r=[a[0]<n[0]?c[0]:c[1],a[1]<n[1]?c[0]:c[1]])[0][0]<0&&0<=i[0]+a[0]-n[0]*r[0][1]&&i[1]-n[1]*r[1][0]<0&&0<=i[1]+a[1]-n[1]*r[1][1]},mcsOverflow:z.expr[":"].mcsOverflow||function(e){var t=z(e).data(H);if(t)return t.overflowed[0]||t.overflowed[1]}})})});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:86:"/local/templates/centino-heat_s2/components/bitrix/menu/left_3/script.js?1593347862624";s:6:"source";s:72:"/local/templates/centino-heat_s2/components/bitrix/menu/left_3/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function() {
	$('.left_menu_3 .side-menu > li.child .name_link_wrapper > span').click(function(){
		var li = $(this).closest('li.child');
		var submenu = li.find('.submenu-wrapper');

		if(li.hasClass('active')){
			submenu.slideUp(400, function() {li.removeClass('active');} );
		} else {
			$('.left_menu_3 .side-menu > li.child.active').each(function() {
				var this_li = $(this)
				this_li.find('.submenu-wrapper').slideUp(400, function() {} );
				this_li.removeClass('active');
			});
						
			li.addClass('active');
			submenu.slideDown(400, function() {});


		}


	});
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:67:"/bitrix/components/bitrix/search.title/script.min.js?15770776536443";s:6:"source";s:48:"/bitrix/components/bitrix/search.title/script.js";s:3:"min";s:52:"/bitrix/components/bitrix/search.title/script.min.js";s:3:"map";s:52:"/bitrix/components/bitrix/search.title/script.map.js";}"*/
function JCTitleSearch(t){var e=this;this.arParams={AJAX_PAGE:t.AJAX_PAGE,CONTAINER_ID:t.CONTAINER_ID,INPUT_ID:t.INPUT_ID,MIN_QUERY_LEN:parseInt(t.MIN_QUERY_LEN)};if(t.WAIT_IMAGE)this.arParams.WAIT_IMAGE=t.WAIT_IMAGE;if(t.MIN_QUERY_LEN<=0)t.MIN_QUERY_LEN=1;this.cache=[];this.cache_key=null;this.startText="";this.running=false;this.runningCall=false;this.currentRow=-1;this.RESULT=null;this.CONTAINER=null;this.INPUT=null;this.WAIT=null;this.ShowResult=function(t){if(BX.type.isString(t)){e.RESULT.innerHTML=t}e.RESULT.style.display=e.RESULT.innerHTML!==""?"block":"none";var s=e.adjustResultNode();var i;var n;var l=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(l){n=BX.findChild(l,{tag:"th"},true)}if(n){var r=BX.pos(l);r.width=r.right-r.left;var a=BX.pos(n);a.width=a.right-a.left;n.style.width=a.width+"px";e.RESULT.style.width=s.width+a.width+"px";e.RESULT.style.left=s.left-a.width-1+"px";if(r.width-a.width>s.width)e.RESULT.style.width=s.width+a.width-1+"px";r=BX.pos(l);i=BX.pos(e.RESULT);if(i.right>r.right){e.RESULT.style.width=r.right-r.left+"px"}}var o;if(l)o=BX.findChild(e.RESULT,{class:"title-search-fader"},true);if(o&&n){i=BX.pos(e.RESULT);o.style.left=i.right-i.left-18+"px";o.style.width=18+"px";o.style.top=0+"px";o.style.height=i.bottom-i.top+"px";o.style.display="block"}};this.onKeyPress=function(t){var s=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(!s)return false;var i;var n=s.rows.length;switch(t){case 27:e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll();return true;case 40:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var l=-1;for(i=0;i<n;i++){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){if(l==-1)l=i;if(e.currentRow<i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i==n&&e.currentRow!=i)e.currentRow=l;s.rows[e.currentRow].className="title-search-selected";return true;case 38:if(e.RESULT.style.display=="none")e.RESULT.style.display="block";var r=-1;for(i=n-1;i>=0;i--){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){if(r==-1)r=i;if(e.currentRow>i){e.currentRow=i;break}else if(s.rows[i].className=="title-search-selected"){s.rows[i].className=""}}}if(i<0&&e.currentRow!=i)e.currentRow=r;s.rows[e.currentRow].className="title-search-selected";return true;case 13:if(e.RESULT.style.display=="block"){for(i=0;i<n;i++){if(e.currentRow==i){if(!BX.findChild(s.rows[i],{class:"title-search-separator"},true)){var a=BX.findChild(s.rows[i],{tag:"a"},true);if(a){window.location=a.href;return true}}}}}return false}return false};this.onTimeout=function(){e.onChange(function(){setTimeout(e.onTimeout,500)})};this.onChange=function(t){if(e.running){e.runningCall=true;return}e.running=true;if(e.INPUT.value!=e.oldValue&&e.INPUT.value!=e.startText){e.oldValue=e.INPUT.value;if(e.INPUT.value.length>=e.arParams.MIN_QUERY_LEN){e.cache_key=e.arParams.INPUT_ID+"|"+e.INPUT.value;if(e.cache[e.cache_key]==null){if(e.WAIT){var s=BX.pos(e.INPUT);var i=s.bottom-s.top-2;e.WAIT.style.top=s.top+1+"px";e.WAIT.style.height=i+"px";e.WAIT.style.width=i+"px";e.WAIT.style.left=s.right-i+2+"px";e.WAIT.style.display="block"}BX.ajax.post(e.arParams.AJAX_PAGE,{ajax_call:"y",INPUT_ID:e.arParams.INPUT_ID,q:e.INPUT.value,l:e.arParams.MIN_QUERY_LEN},function(s){e.cache[e.cache_key]=s;e.ShowResult(s);e.currentRow=-1;e.EnableMouseEvents();if(e.WAIT)e.WAIT.style.display="none";if(!!t)t();e.running=false;if(e.runningCall){e.runningCall=false;e.onChange()}});return}else{e.ShowResult(e.cache[e.cache_key]);e.currentRow=-1;e.EnableMouseEvents()}}else{e.RESULT.style.display="none";e.currentRow=-1;e.UnSelectAll()}}if(!!t)t();e.running=false};this.onScroll=function(){if(BX.type.isElementNode(e.RESULT)&&e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.UnSelectAll=function(){var t=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)t.rows[i].className=""}};this.EnableMouseEvents=function(){var t=BX.findChild(e.RESULT,{tag:"table",class:"title-search-result"},true);if(t){var s=t.rows.length;for(var i=0;i<s;i++)if(!BX.findChild(t.rows[i],{class:"title-search-separator"},true)){t.rows[i].id="row_"+i;t.rows[i].onmouseover=function(t){if(e.currentRow!=this.id.substr(4)){e.UnSelectAll();this.className="title-search-selected";e.currentRow=this.id.substr(4)}};t.rows[i].onmouseout=function(t){this.className="";e.currentRow=-1}}}};this.onFocusLost=function(t){setTimeout(function(){e.RESULT.style.display="none"},250)};this.onFocusGain=function(){if(e.RESULT.innerHTML.length)e.ShowResult()};this.onKeyDown=function(t){if(!t)t=window.event;if(e.RESULT.style.display=="block"){if(e.onKeyPress(t.keyCode))return BX.PreventDefault(t)}};this.adjustResultNode=function(){if(!(BX.type.isElementNode(e.RESULT)&&BX.type.isElementNode(e.CONTAINER))){return{top:0,right:0,bottom:0,left:0,width:0,height:0}}var t=BX.pos(e.CONTAINER);e.RESULT.style.position="absolute";e.RESULT.style.top=t.bottom+2+"px";e.RESULT.style.left=t.left+"px";e.RESULT.style.width=t.width+"px";return t};this._onContainerLayoutChange=function(){if(BX.type.isElementNode(e.RESULT)&&e.RESULT.style.display!=="none"&&e.RESULT.innerHTML!==""){e.adjustResultNode()}};this.Init=function(){this.CONTAINER=document.getElementById(this.arParams.CONTAINER_ID);BX.addCustomEvent(this.CONTAINER,"OnNodeLayoutChange",this._onContainerLayoutChange);this.RESULT=document.body.appendChild(document.createElement("DIV"));this.RESULT.className="title-search-result";this.INPUT=document.getElementById(this.arParams.INPUT_ID);this.startText=this.oldValue=this.INPUT.value;BX.bind(this.INPUT,"focus",function(){e.onFocusGain()});BX.bind(this.INPUT,"blur",function(){e.onFocusLost()});this.INPUT.onkeydown=this.onKeyDown;if(this.arParams.WAIT_IMAGE){this.WAIT=document.body.appendChild(document.createElement("DIV"));this.WAIT.style.backgroundImage="url('"+this.arParams.WAIT_IMAGE+"')";if(!BX.browser.IsIE())this.WAIT.style.backgroundRepeat="none";this.WAIT.style.display="none";this.WAIT.style.position="absolute";this.WAIT.style.zIndex="1100"}BX.bind(this.INPUT,"bxchange",function(){e.onChange()});var t=BX.findParent(this.CONTAINER,BX.is_fixed);if(BX.type.isElementNode(t)){BX.bind(window,"scroll",BX.throttle(this.onScroll,100,this))}};BX.ready(function(){e.Init(t)})}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:98:"/local/templates/centino-heat_s2/components/bitrix/search.title/fixed/script.min.js?15933478636251";s:6:"source";s:79:"/local/templates/centino-heat_s2/components/bitrix/search.title/fixed/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function JCTitleSearch2(t){var e=this;this.arParams={AJAX_PAGE:t.AJAX_PAGE,CONTAINER_ID:t.CONTAINER_ID,INPUT_ID:t.INPUT_ID,MIN_QUERY_LEN:parseInt(t.MIN_QUERY_LEN)},t.WAIT_IMAGE&&(this.arParams.WAIT_IMAGE=t.WAIT_IMAGE),t.MIN_QUERY_LEN<=0&&(t.MIN_QUERY_LEN=1),this.cache=[],this.cache_key=null,this.startText="",this.running=!1,this.currentRow=-1,this.RESULT=null,this.CONTAINER=null,this.INPUT=null,this.WAIT=null,this.ShowResult=function(t){BX.type.isString(t)&&(e.RESULT.innerHTML=t),e.RESULT.style.display=""!==e.RESULT.innerHTML?"block":"none";var s,i,n=e.adjustResultNode(),a=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},!0);if(a&&(i=BX.findChild(a,{tag:"th"},!0)),i){var l=BX.pos(a);l.width=l.right-l.left;var r=BX.pos(i);r.width=r.right-r.left,i.style.width=r.width+"px",e.RESULT.style.width=n.width+r.width+"px",e.RESULT.style.left=n.left-r.width-1+"px",l.width-r.width>n.width&&(e.RESULT.style.width=n.width+r.width-1+"px"),l=BX.pos(a),s=BX.pos(e.RESULT),s.right>l.right&&(e.RESULT.style.width=l.right-l.left+"px")}var o;a&&(o=BX.findChild(e.RESULT,{"class":"title-search-fader"},!0)),o&&i&&(s=BX.pos(e.RESULT),o.style.left=s.right-s.left-18+"px",o.style.width="18px",o.style.top="0px",o.style.height=s.bottom-s.top+"px",o.style.display="block")},this.onKeyPress=function(t){var s=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},!0);if(!s)return!1;var i,n=s.rows.length;switch(t){case 27:return e.RESULT.style.display="none",e.currentRow=-1,e.UnSelectAll(),!0;case 40:"none"==e.RESULT.style.display&&(e.RESULT.style.display="block");var a=-1;for(i=0;n>i;i++)if(!BX.findChild(s.rows[i],{"class":"title-search-separator"},!0)){if(-1==a&&(a=i),e.currentRow<i){e.currentRow=i;break}"title-search-selected"==s.rows[i].className&&(s.rows[i].className="")}return i==n&&e.currentRow!=i&&(e.currentRow=a),s.rows[e.currentRow].className="title-search-selected",!0;case 38:"none"==e.RESULT.style.display&&(e.RESULT.style.display="block");var l=-1;for(i=n-1;i>=0;i--)if(!BX.findChild(s.rows[i],{"class":"title-search-separator"},!0)){if(-1==l&&(l=i),e.currentRow>i){e.currentRow=i;break}"title-search-selected"==s.rows[i].className&&(s.rows[i].className="")}return 0>i&&e.currentRow!=i&&(e.currentRow=l),s.rows[e.currentRow].className="title-search-selected",!0;case 13:if("block"==e.RESULT.style.display)for(i=0;n>i;i++)if(e.currentRow==i&&!BX.findChild(s.rows[i],{"class":"title-search-separator"},!0)){var r=BX.findChild(s.rows[i],{tag:"a"},!0);if(r)return window.location=r.href,!0}return!1}return!1},this.onTimeout=function(){e.onChange(function(){setTimeout(e.onTimeout,500)})},this.onChange=function(t){if(!e.running){if(e.running=!0,e.INPUT.value!=e.oldValue&&e.INPUT.value!=e.startText)if(e.oldValue=e.INPUT.value,e.INPUT.value.length>=e.arParams.MIN_QUERY_LEN){if(e.cache_key=e.arParams.INPUT_ID+"|"+e.INPUT.value,null==e.cache[e.cache_key]){if(e.WAIT){var s=BX.pos(e.INPUT),i=s.bottom-s.top-2;e.WAIT.style.top=s.top+1+"px",e.WAIT.style.height=i+"px",e.WAIT.style.width=i+"px",e.WAIT.style.left=s.right-i+2+"px",e.WAIT.style.display="block"}return void BX.ajax.post(e.arParams.AJAX_PAGE,{ajax_call:"y",INPUT_ID:e.arParams.INPUT_ID,q:e.INPUT.value,l:e.arParams.MIN_QUERY_LEN},function(s){e.cache[e.cache_key]=s,e.ShowResult(s),e.currentRow=-1,e.EnableMouseEvents(),e.WAIT&&(e.WAIT.style.display="none"),t&&t(),e.running=!1})}e.ShowResult(e.cache[e.cache_key]),e.currentRow=-1,e.EnableMouseEvents()}else e.RESULT.style.display="none",e.currentRow=-1,e.UnSelectAll();t&&t(),e.running=!1}},this.UnSelectAll=function(){var t=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},!0);if(t)for(var s=t.rows.length,i=0;s>i;i++)t.rows[i].className=""},this.EnableMouseEvents=function(){var t=BX.findChild(e.RESULT,{tag:"table","class":"title-search-result"},!0);if(t)for(var s=t.rows.length,i=0;s>i;i++)BX.findChild(t.rows[i],{"class":"title-search-separator"},!0)||(t.rows[i].id="row_"+i,t.rows[i].onmouseover=function(t){e.currentRow!=this.id.substr(4)&&(e.UnSelectAll(),this.className="title-search-selected",e.currentRow=this.id.substr(4))},t.rows[i].onmouseout=function(t){this.className="",e.currentRow=-1})},this.onFocusLost=function(t){setTimeout(function(){e.RESULT.style.display="none"},300)},this.onFocusGain=function(){e.RESULT.innerHTML.length&&e.ShowResult()},this.onKeyDown=function(t){return t||(t=window.event),"block"==e.RESULT.style.display&&e.onKeyPress(t.keyCode)?BX.PreventDefault(t):void 0},this.adjustResultNode=function(){var t,s,i=BX.findParent(e.CONTAINER,BX.is_fixed);return i?(e.RESULT.style.position="fixed",e.RESULT.style.zIndex=BX.style(i,"z-index")+2,t=BX.pos(e.CONTAINER,!0)):(e.RESULT.style.position="absolute",t=BX.pos(e.CONTAINER)),s=BX.pos(e.INPUT),t.width=t.right-t.left,e.RESULT.style.top=t.bottom+2+"px",e.RESULT.style.left=s.left+"px",$(e.INPUT).closest(".inline-search-block.with-close").length?e.RESULT.style.width=s.width+"px":e.RESULT.style.width=t.width+"px",t},this._onContainerLayoutChange=function(){"none"!==e.RESULT.style.display&&""!==e.RESULT.innerHTML&&e.adjustResultNode()},this.Init=function(){this.CONTAINER=document.getElementById(this.arParams.CONTAINER_ID),BX.addCustomEvent(this.CONTAINER,"OnNodeLayoutChange",this._onContainerLayoutChange),this.RESULT=document.body.appendChild(document.createElement("DIV")),this.RESULT.className="title-search-result "+this.arParams.INPUT_ID,"title-search-input_fixed"!=this.arParams.INPUT_ID&&(this.RESULT.className+=" "+arHeatOptions.THEME.TYPE_SEARCH+"_type"),this.INPUT=document.getElementById(this.arParams.INPUT_ID),this.startText=this.oldValue=this.INPUT.value,BX.bind(this.INPUT,"focus",function(){e.onFocusGain()}),BX.bind(this.INPUT,"blur",function(){e.onFocusLost()}),BX.browser.IsSafari()||BX.browser.IsIE()?this.INPUT.onkeydown=this.onKeyDown:this.INPUT.onkeypress=this.onKeyDown,this.arParams.WAIT_IMAGE&&(this.WAIT=document.body.appendChild(document.createElement("DIV")),this.WAIT.style.backgroundImage="url('"+this.arParams.WAIT_IMAGE+"')",BX.browser.IsIE()||(this.WAIT.style.backgroundRepeat="none"),this.WAIT.style.display="none",this.WAIT.style.position="absolute",this.WAIT.style.zIndex="1100"),BX.bind(this.INPUT,"bxchange",function(){e.onChange()})},BX.ready(function(){e.Init(t)})}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:60:"/local/js/reaspekt/reaspekt.geobase/script.js?15940992934682";s:6:"source";s:45:"/local/js/reaspekt/reaspekt.geobase/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(window, document, $, undefined){
    "use strict";
   
    var paramsDefault = {
        height : "250",
        width : "500",
        ajax  : {
            dataType : 'html',
            headers  : { 'X-reaspektPopupBox': true }
        },
        content : null,
        fixedPosition : false
    };
    var params = {
        htmlPopup : '<div class="ReaspektPopupOverlay"></div><div id="ReaspektPopupBody"><div class="ReaspektClosePosition"><div id="ReaspektCloseBtn"></div></div><div id="ReaspektPopupContainer">��������...</div></div>',
        objPopupIdBody : '#ReaspektPopupBody',
        objPopupIdOverlay : '.ReaspektPopupOverlay',
        objPopupIdCloseBtn : '#ReaspektCloseBtn',
        objPopupIdContainer : '#ReaspektPopupContainer',
		activeClassBodyReaspekt : 'activeClassBodyReaspekt'
    };
    var methods = {
        init : function( options ) {
            
            
            return this.click(function(element){
                var obClass = $(this);
				paramsDefault['href'] = obClass.data('reaspektmodalbox-href') || obClass.attr('href');
				
				var settings = $.extend($.ReaspektModalBox, paramsDefault, options);
                
                methods.addHtmlTemplate(settings);
                
                
                if (!settings.fixedPosition) {
                    $(window).bind('resize.ReaspektPopupOverlay', $.proxy( methods.rePosition, this) );
                    methods.rePosition();
                }
            });
        },
        
        //��������� Div`s
        addHtmlTemplate : function(settings) {
            methods.closeReaspektPopup();
			$('body').append(params.htmlPopup);
            $('body').addClass(params.activeClassBodyReaspekt);
            methods.addContainerData(settings);
        },
        
        //Add data in popup html
        addContainerData : function(settings) {
            //Add event click close button
            $(params.objPopupIdCloseBtn).bind("click", function(e){
                e.preventDefault();
                
                methods.closeReaspektPopup();
            });
            
            //Add event click overlay
            $(params.objPopupIdOverlay).bind("click", function(e){
                e.preventDefault();
                
                methods.closeReaspektPopup();
            });
            
            methods._loadAjax(settings);
        },
        
        //Close popup
        closeReaspektPopup : function() {
            $(window).unbind('resize.ReaspektPopupOverlay');
            $('body').removeClass(params.activeClassBodyReaspekt);
            $(params.objPopupIdBody).remove();
            $(params.objPopupIdOverlay).remove();
        },
        
        rePosition : function() {
            
            $(params.objPopupIdBody).css("top", Math.max(0, (($(window).height() - $(params.objPopupIdBody).outerHeight()) / 2) + $(window).scrollTop()) + "px");
            
            $(params.objPopupIdBody).css("left", Math.max(0, (($(window).width() - $(params.objPopupIdBody).outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        },
        
        _loadAjax: function (settings) {
           if (settings.href) {
                $.ajax($.extend({}, settings.ajax, {
                    url: settings.href,
                    error: function (jqXHR, textStatus) {
                        console.log(jqXHR);
                        console.log(textStatus);
                    },
                    success: function (data, textStatus) {
                        if (textStatus === 'success') {
                            settings.content = data;

                            methods._afterLoad(settings);
                        }
                    }
                }));
           } else {
               console.log('Error, not atribute href or data-reaspektmodalbox-href');
           }
		},
        
        _afterLoad: function (settings) {
            $(params.objPopupIdContainer).html(settings.content);
            
            methods.rePosition();
        }
    };

    $.fn.ReaspektModalBox = function( method ) {

        // ������ ������ ������
        if ( methods[method] ) {
          return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $.error( '����� � ������ ' +  method + ' �� ���������� ��� jQuery.ReaspektModalBox' );
        } 
    };
    
})(window, document, jQuery);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:82:"/local/templates/centino-heat_s2/js/jquery.inputmask.bundle.min.js?159334786370933";s:6:"source";s:66:"/local/templates/centino-heat_s2/js/jquery.inputmask.bundle.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(e){function t(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(2)],void 0!==(r="function"==typeof(n=function(e){return e})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a=[i(0),i(5),i(6)],void 0!==(r="function"==typeof(n=function(e,t,i,n){function a(t,i,o){if(!(this instanceof a))return new a(t,i,o);this.el=n,this.events={},this.maskset=n,this.refreshValue=!1,!0!==o&&(e.isPlainObject(t)?i=t:(i=i||{},t&&(i.alias=t)),this.opts=e.extend(!0,{},this.defaults,i),this.noMasksCache=i&&i.definitions!==n,this.userOptions=i||{},this.isRTL=this.opts.numericInput,r(this.opts.alias,i,this.opts))}function r(t,i,o){var s=a.prototype.aliases[t];return s?(s.alias&&r(s.alias,n,o),e.extend(!0,o,s),e.extend(!0,o,i),!0):(null===o.mask&&(o.mask=t),!1)}function s(t,i){function r(t,r,o){var s=!1;if(null!==t&&""!==t||((s=null!==o.regex)?t=(t=o.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(s=!0,t=".*")),1===t.length&&!1===o.greedy&&0!==o.repeat&&(o.placeholder=""),o.repeat>0||"*"===o.repeat||"+"===o.repeat){var l="*"===o.repeat?0:"+"===o.repeat?1:o.repeat;t=o.groupmarker[0]+t+o.groupmarker[1]+o.quantifiermarker[0]+l+","+o.repeat+o.quantifiermarker[1]}var u,c=s?"regex_"+o.regex:o.numericInput?t.split("").reverse().join(""):t;return a.prototype.masksCache[c]===n||!0===i?(u={mask:t,maskToken:a.prototype.analyseMask(t,s,o),validPositions:{},_buffer:n,buffer:n,tests:{},excludes:{},metadata:r,maskLength:n},!0!==i&&(a.prototype.masksCache[c]=u,u=e.extend(!0,{},a.prototype.masksCache[c]))):u=e.extend(!0,{},a.prototype.masksCache[c]),u}if(e.isFunction(t.mask)&&(t.mask=t.mask(t)),e.isArray(t.mask)){if(t.mask.length>1){if(null===t.keepStatic){t.keepStatic="auto";for(var o=0;o<t.mask.length;o++)if(t.mask[o].charAt(0)!==t.mask[0].charAt(0)){t.keepStatic=!0;break}}var s=t.groupmarker[0];return e.each(t.isRTL?t.mask.reverse():t.mask,function(i,a){s.length>1&&(s+=t.groupmarker[1]+t.alternatormarker+t.groupmarker[0]),a.mask===n||e.isFunction(a.mask)?s+=a:s+=a.mask}),r(s+=t.groupmarker[1],t.mask,t)}t.mask=t.mask.pop()}return t.mask&&t.mask.mask!==n&&!e.isFunction(t.mask.mask)?r(t.mask.mask,t.mask,t):r(t.mask,t.mask,t)}function l(e){var t=i.createElement("input"),n="on"+e,a=n in t;return a||(t.setAttribute(n,"return;"),a="function"==typeof t[n]),t=null,a}function u(r,s,c){function d(e,t,i){t=t||0;var a,r,o,s=[],l=0,u=v();do{!0===e&&h().validPositions[l]?(r=(o=h().validPositions[l]).match,a=o.locator.slice(),s.push(!0===i?o.input:!1===i?r.nativeDef:N(l,r))):(r=(o=P(l,a,l-1)).match,a=o.locator.slice(),(!1===c.jitMasking||l<u||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>l)&&s.push(!1===i?r.nativeDef:N(l,r))),"auto"===c.keepStatic&&r.newBlockMarker&&null!==r.fn&&(c.keepStatic=l-1),l++}while(($===n||l<$)&&(null!==r.fn||""!==r.def)||t>l);return""===s[s.length-1]&&s.pop(),!1===i&&h().maskLength!==n||(h().maskLength=l-1),s}function h(){return s}function g(e){var t=h();t.buffer=n,!0!==e&&(t.validPositions={},t.p=0)}function v(e,t,i){var a=-1,r=-1,o=i||h().validPositions;e===n&&(e=-1);for(var s in o){var l=parseInt(s);o[l]&&(t||!0!==o[l].generatedInput)&&(l<=e&&(a=l),l>=e&&(r=l))}return-1!==a&&e-a>1||r<e?a:r}function k(t,i,a,r){var o,s=t,l=e.extend(!0,{},h().validPositions),u=!1;for(h().p=t,o=i-1;o>=s;o--)h().validPositions[o]!==n&&(!0!==a&&(!h().validPositions[o].match.optionality&&function(e){var t=h().validPositions[e];if(t!==n&&null===t.match.fn){var i=h().validPositions[e-1],a=h().validPositions[e+1];return i!==n&&a!==n}return!1}(o)||!1===c.canClearPosition(h(),o,v(n,!0),r,c))||delete h().validPositions[o]);for(g(!0),o=s+1;o<=v();){for(;h().validPositions[s]!==n;)s++;if(o<s&&(o=s+1),h().validPositions[o]===n&&j(o))o++;else{var p=P(o);!1===u&&l[s]&&l[s].match.def===p.match.def?(h().validPositions[s]=e.extend(!0,{},l[s]),h().validPositions[s].input=p.input,delete h().validPositions[o],o++):A(s,p.match.def)?!1!==_(s,p.input||N(o),!0)&&(delete h().validPositions[o],o++,u=!0):j(o)||(o++,s--),s++}}if(!0!==r)for(o=v(-1,!0);h().validPositions[o]&&!0===h().validPositions[o].generatedInput;)delete h().validPositions[o--];g(!0)}function y(e,t,i){for(var a,r=S(e=e>0?e-1:0),o=r.alternation!==n?r.locator[r.alternation].toString().split(","):[],s=0;s<t.length&&(!((a=t[s]).match&&(c.greedy&&!0!==a.match.optionalQuantifier||(!1===a.match.optionality||!1===a.match.newBlockMarker)&&!0!==a.match.optionalQuantifier)&&(r.alternation===n||r.alternation!==a.alternation||a.locator[r.alternation]!==n&&D(a.locator[r.alternation].toString().split(","),o)))||!0===i&&(null!==a.match.fn||/[0-9a-bA-Z]/.test(a.match.def)));s++);return a}function b(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),t!==n?t.toString():""}function x(e,t){for(var i=(e.alternation!=n?e.mloc[b(e)]:e.locator).join("");i.length<t;)i+="0";return i}function P(e,t,i){return h().validPositions[e]||y(e,C(e,t?t.slice():t,i))}function S(e){return h().validPositions[e]?h().validPositions[e]:C(e)[0]}function A(e,t){for(var i=!1,n=C(e),a=0;a<n.length;a++)if(n[a].match&&n[a].match.def===t){i=!0;break}return i}function C(t,i,a){function r(i,a,s,l){function u(s,l,p){function m(t,i){var n=0===e.inArray(t,i.matches);return n||e.each(i.matches,function(e,a){if(!0===a.isQuantifier&&(n=m(t,i.matches[e-1])))return!1}),n}function k(t,i,a){var r,o;if((h().tests[t]||h().validPositions[t])&&e.each(h().tests[t]||[h().validPositions[t]],function(e,t){if(t.mloc[i])return r=t,!1;var s=a!==n?a:t.alternation,l=t.locator[s]!==n?t.locator[s].toString().indexOf(i):-1;(o===n||l<o)&&-1!==l&&(r=t,o=l)}),r){var s=r.locator[r.alternation];return(r.mloc[i]||r.mloc[s]||r.locator).slice((a!==n?a:r.alternation)+1)}return a!==n?k(t,i):n}function y(e,t){function i(e){for(var t,i,n=[],a=0,r=e.length;a<r;a++)if("-"===e.charAt(a))for(i=e.charCodeAt(a+1);++t<i;)n.push(String.fromCharCode(t));else t=e.charCodeAt(a),n.push(e.charAt(a));return n.join("")}return c.regex&&null!==e.match.fn&&null!==t.match.fn?-1!==i(t.match.def.replace(/[\[\]]/g,"")).indexOf(i(e.match.def.replace(/[\[\]]/g,""))):e.match.def===t.match.nativeDef}function b(e,t){if(t===n||e.alternation===t.alternation&&-1===e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])){e.mloc=e.mloc||{};var i=e.locator[e.alternation];if(i!==n){if("string"==typeof i&&(i=i.split(",")[0]),e.mloc[i]===n&&(e.mloc[i]=e.locator.slice()),t!==n){for(var a in t.mloc)"string"==typeof a&&(a=a.split(",")[0]),e.mloc[a]===n&&(e.mloc[a]=t.mloc[a]);e.locator[e.alternation]=Object.keys(e.mloc).join(",")}return!0}e.alternation=n}return!1}if(f>1e4)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+h().mask;if(f===t&&s.matches===n)return d.push({match:s,locator:l.reverse(),cd:v,mloc:{}}),!0;if(s.matches!==n){if(s.isGroup&&p!==s){if(s=u(i.matches[e.inArray(s,i.matches)+1],l))return!0}else if(s.isOptional){var x=s;if(s=r(s,a,l,p)){if(!m(o=d[d.length-1].match,x))return!0;g=!0,f=t}}else if(s.isAlternator){var P,S=s,A=[],C=d.slice(),M=l.length,E=a.length>0?a.shift():-1;if(-1===E||"string"==typeof E){var w,D=f,O=a.slice(),_=[];if("string"==typeof E)_=E.split(",");else for(w=0;w<S.matches.length;w++)_.push(w.toString());if(h().excludes[t]){for(var j=_.slice(),F=0,T=h().excludes[t].length;F<T;F++)_.splice(_.indexOf(h().excludes[t][F].toString()),1);0===_.length&&(h().excludes[t]=n,_=j)}(!0===c.keepStatic||isFinite(parseInt(c.keepStatic))&&D>=c.keepStatic)&&(_=_.slice(0,1));for(var R=0;R<_.length;R++){w=parseInt(_[R]),d=[],a=k(f,w,M)||O.slice(),S.matches[w]&&u(S.matches[w],[w].concat(l),p)&&(s=!0),P=d.slice(),f=D,d=[];for(var N=0;N<P.length;N++){var G=P[N],B=!1;G.alternation=G.alternation||M,b(G);for(var I=0;I<A.length;I++){var L=A[I];if("string"!=typeof E||G.alternation!==n&&-1!==e.inArray(G.locator[G.alternation].toString(),_)){if(G.match.nativeDef===L.match.nativeDef){B=!0,b(L,G);break}if(y(G,L)){b(G,L)&&(B=!0,A.splice(A.indexOf(L),0,G));break}if(y(L,G)){b(L,G);break}if(z=L,null===(U=G).match.fn&&null!==z.match.fn&&z.match.fn.test(U.match.def,h(),t,!1,c,!1)){b(G,L)&&(B=!0,A.splice(A.indexOf(L),0,G));break}}}B||A.push(G)}}d=C.concat(A),f=t,g=d.length>0,s=A.length>0,a=O.slice()}else s=u(S.matches[E]||i.matches[E],[E].concat(l),p);if(s)return!0}else if(s.isQuantifier&&p!==i.matches[e.inArray(s,i.matches)-1])for(var H=s,V=a.length>0?a.shift():0;V<(isNaN(H.quantifier.max)?V+1:H.quantifier.max)&&f<=t;V++){var K=i.matches[e.inArray(H,i.matches)-1];if(s=u(K,[V].concat(l),K)){if((o=d[d.length-1].match).optionalQuantifier=V>H.quantifier.min-1,m(o,K)){if(V>H.quantifier.min-1){g=!0,f=t;break}return!0}return!0}}else if(s=r(s,a,l,p))return!0}else f++;var U,z}for(var p=a.length>0?a.shift():0;p<i.matches.length;p++)if(!0!==i.matches[p].isQuantifier){var m=u(i.matches[p],[p].concat(s),l);if(m&&f===t)return m;if(f>t)break}}var o,s,l,u,p=h().maskToken,f=i?a:0,m=i?i.slice():[0],d=[],g=!1,v=i?i.join(""):"";if(t>-1){if(i===n){for(var k,b=t-1;(k=h().validPositions[b]||h().tests[b])===n&&b>-1;)b--;k!==n&&b>-1&&(s=b,l=k,u=[],e.isArray(l)||(l=[l]),l.length>0&&(l[0].alternation===n?0===(u=y(s,l.slice()).locator.slice()).length&&(u=l[0].locator.slice()):e.each(l,function(e,t){if(""!==t.def)if(0===u.length)u=t.locator.slice();else for(var i=0;i<u.length;i++)t.locator[i]&&-1===u[i].toString().indexOf(t.locator[i])&&(u[i]+=","+t.locator[i])})),v=(m=u).join(""),f=b)}if(h().tests[t]&&h().tests[t][0].cd===v)return h().tests[t];for(var x=m.shift();x<p.length&&!(r(p[x],m,[x])&&f===t||f>t);x++);}return(0===d.length||g)&&d.push({match:{fn:null,optionality:!0,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:v}),i!==n&&h().tests[t]?e.extend(!0,[],d):(h().tests[t]=e.extend(!0,[],d),h().tests[t])}function M(){return h()._buffer===n&&(h()._buffer=d(!1,1),h().buffer===n&&(h().buffer=h()._buffer.slice())),h()._buffer}function E(e){return h().buffer!==n&&!0!==e||(h().buffer=d(!0,v(),!0)),h().buffer}function w(e,t,i){var a,r;if(!0===e)g(),e=0,t=i.length;else for(a=e;a<t;a++)delete h().validPositions[a];for(r=e,a=e;a<t;a++)if(g(!0),i[a]!==c.skipOptionalPartCharacter){var o=_(r,i[a],!0,!0);!1!==o&&(g(!0),r=o.caret!==n?o.caret:o.pos+1)}}function D(t,i,a){for(var r,o=c.greedy?i:i.slice(0,1),s=!1,l=a!==n?a.split(","):[],u=0;u<l.length;u++)-1!==(r=t.indexOf(l[u]))&&t.splice(r,1);for(var p=0;p<t.length;p++)if(-1!==e.inArray(t[p],o)){s=!0;break}return s}function O(t,i,a,r,o){var s,l,u,p,f,m,d,k=e.extend(!0,{},h().validPositions),y=!1,x=o!==n?o:v();if(-1===x&&o===n)l=(p=S(s=0)).alternation;else for(;x>=0;x--)if((u=h().validPositions[x])&&u.alternation!==n){if(p&&p.locator[u.alternation]!==u.locator[u.alternation])break;s=x,l=h().validPositions[s].alternation,p=u}if(l!==n){d=parseInt(s),h().excludes[d]=h().excludes[d]||[],!0!==t&&h().excludes[d].push(b(p));var P=[],A=0;for(f=d;f<v(n,!0)+1;f++)(m=h().validPositions[f])&&!0!==m.generatedInput&&/[0-9a-bA-Z]/.test(m.input)?P.push(m.input):f<t&&A++,delete h().validPositions[f];for(;h().excludes[d]&&h().excludes[d].length<10;){var C=-1*A,M=P.slice();for(h().tests[d]=n,g(!0),y=!0;M.length>0;){var E=M.shift();if(E!==c.skipOptionalPartCharacter&&!(y=_(v(n,!0)+1,E,!1,r,!0)))break}if(y&&i!==n){var w=v(t)+1;for(f=d;f<v()+1;f++)((m=h().validPositions[f])===n||null==m.match.fn)&&f<t+C&&C++;y=_((t+=C)>w?w:t,i,a,r,!0)}if(y)break;if(g(),p=S(d),h().validPositions=e.extend(!0,{},k),!h().excludes[d]){y=O(t,i,a,r,d-1);break}var D=b(p);if(-1!==h().excludes[d].indexOf(D)){y=O(t,i,a,r,d-1);break}for(h().excludes[d].push(D),f=d;f<v(n,!0)+1;f++)delete h().validPositions[f]}}return h().excludes[d]=n,y}function _(t,i,r,o,s,l){function u(e){return X?e.begin-e.end>1||e.begin-e.end==1:e.end-e.begin>1||e.end-e.begin==1}function p(i,r,s){var l=!1;return e.each(C(i),function(p,f){var d=f.match;if(E(!0),!1!==(l=null!=d.fn?d.fn.test(r,h(),i,s,c,u(t)):(r===d.def||r===c.skipOptionalPartCharacter)&&""!==d.def&&{c:N(i,d,!0)||d.def,pos:i})){var y=l.c!==n?l.c:r;y=y===c.skipOptionalPartCharacter&&null===d.fn?N(i,d,!0)||d.def:y;var b=i,x=E();if(l.remove!==n&&(e.isArray(l.remove)||(l.remove=[l.remove]),e.each(l.remove.sort(function(e,t){return t-e}),function(e,t){k(t,t+1,!0)})),l.insert!==n&&(e.isArray(l.insert)||(l.insert=[l.insert]),e.each(l.insert.sort(function(e,t){return e-t}),function(e,t){_(t.pos,t.c,!0,o)})),l.refreshFromBuffer){var P=l.refreshFromBuffer;if(w(!0===P?P:P.start,P.end,x),l.pos===n&&l.c===n)return l.pos=v(),!1;if((b=l.pos!==n?l.pos:i)!==i)return l=e.extend(l,_(b,y,!0,o)),!1}else if(!0!==l&&l.pos!==n&&l.pos!==i&&(b=l.pos,w(i,b,E().slice()),b!==i))return l=e.extend(l,_(b,y,!0)),!1;return(!0===l||l.pos!==n||l.c!==n)&&(p>0&&g(!0),m(b,e.extend({},f,{input:function(t,i,n){switch(c.casing||i.casing){case"upper":t=t.toUpperCase();break;case"lower":t=t.toLowerCase();break;case"title":var r=h().validPositions[n-1];t=0===n||r&&r.input===String.fromCharCode(a.keyCode.SPACE)?t.toUpperCase():t.toLowerCase();break;default:if(e.isFunction(c.casing)){var o=Array.prototype.slice.call(arguments);o.push(h().validPositions),t=c.casing.apply(this,o)}}return t}(y,d,b)}),o,u(t))||(l=!1),!1)}}),l}function f(t,i,a){var r;if(t===n)for(t=i-1;t>0&&!h().validPositions[t];t--);for(var o=t;o<i;o++)if(h().validPositions[o]===n&&!j(o,!0)){var s=0==o?S(o):h().validPositions[o-1];if(s){var l,u=x(s),c=C(o).slice(),p=n,f=S(o);if(""===c[c.length-1].match.def&&c.pop(),e.each(c,function(e,t){l=x(t,u.length);var i=Math.abs(l-u);(p===n||i<p)&&null===t.match.fn&&!0!==t.match.optionality&&!0!==t.match.optionalQuantifier&&(p=i,f=t)}),(f=e.extend({},f,{input:N(o,f.match,!0)||f.match.def})).generatedInput=!0,m(o,f,!0),!0!==a){var d=h().validPositions[i].input;h().validPositions[i]=n,r=_(i,d,!0,!0)}}}return r}function m(t,i,a,r){if(r||c.insertMode&&h().validPositions[t]!==n&&a===n){var o,s=e.extend(!0,{},h().validPositions),l=v(n,!0);for(o=t;o<=l;o++)delete h().validPositions[o];h().validPositions[t]=e.extend(!0,{},i);var u,p=!0,m=h().validPositions,d=!1;for(o=u=t;o<=l;o++){var k=s[o];if(k!==n)for(var y=u;""!==S(y).match.def&&(null===k.match.fn&&m[o]&&(!0===m[o].match.optionalQuantifier||!0===m[o].match.optionality)||null!=k.match.fn);){if(y++,!1===d&&s[y]&&s[y].match.def===k.match.def)h().validPositions[y]=e.extend(!0,{},s[y]),h().validPositions[y].input=k.input,f(n,y,!0),u=y,p=!0;else if(A(y,k.match.def)){var b=_(y,k.input,!0,!0);p=!1!==b,u=b.caret||b.insert?v():y,d=!0}else if(!(p=!0===k.generatedInput)&&""===S(y).match.def)break;if(p)break}if(!p)break}if(!p)return h().validPositions=e.extend(!0,{},s),g(!0),!1}else h().validPositions[t]=e.extend(!0,{},i);return g(!0),!0}r=!0===r;var d=t;t.begin!==n&&(d=X&&!u(t)?t.end:t.begin);var y=!0,b=e.extend(!0,{},h().validPositions);if(e.isFunction(c.preValidation)&&!r&&!0!==o&&!0!==l&&(y=c.preValidation(E(),d,i,u(t),c)),!0===y){if(f(n,d,!0),u(t)&&(K(0,a.keyCode.DELETE,t,!0,!0),d=h().p),($===n||d<$)&&(y=p(d,i,r),(!r||!0===o)&&!1===y&&!0!==l)){var P=h().validPositions[d];if(!P||null!==P.match.fn||P.match.def!==i&&i!==c.skipOptionalPartCharacter){if((c.insertMode||h().validPositions[F(d)]===n)&&!j(d,!0))for(var M=d+1,D=F(d);M<=D;M++)if(!1!==(y=p(M,i,r))){y=f(d,y.pos!==n?y.pos:M)||y,d=M;break}}else y={caret:F(d)}}!1!==y||null===c.keepStatic||!1===c.keepStatic||r||!0===s||(y=O(d,i,r,o)),!0===y&&(y={pos:d})}if(e.isFunction(c.postValidation)&&!1!==y&&!r&&!0!==o&&!0!==l){var T=c.postValidation(E(!0),y,c);if(T!==n){if(T.refreshFromBuffer&&T.buffer){var R=T.refreshFromBuffer;w(!0===R?R:R.start,R.end,T.buffer)}y=!0===T?y:T}}return y&&y.pos===n&&(y.pos=d),!1!==y&&!0!==l||(g(!0),h().validPositions=e.extend(!0,{},b)),y}function j(e,t){var i=P(e).match;if(""===i.def&&(i=S(e).match),null!=i.fn)return i.fn;if(!0!==t&&e>-1){var n=C(e);return n.length>1+(""===n[n.length-1].match.def?1:0)}return!1}function F(e,t){for(var i=e+1;""!==S(i).match.def&&(!0===t&&(!0!==S(i).match.newBlockMarker||!j(i))||!0!==t&&!j(i));)i++;return i}function T(e,t){var i,n=e;if(n<=0)return 0;for(;--n>0&&(!0===t&&!0!==S(n).match.newBlockMarker||!0!==t&&!j(n)&&((i=C(n)).length<2||2===i.length&&""===i[1].match.def)););return n}function R(t,i,a,r,o){if(r&&e.isFunction(c.onBeforeWrite)){var s=c.onBeforeWrite.call(J,r,i,a,c);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;w(!0===l?l:l.start,l.end,s.buffer||i),i=E(!0)}a!==n&&(a=s.caret!==n?s.caret:a)}}t!==n&&(t.inputmask._valueSet(i.join("")),a===n||r!==n&&"blur"===r.type?z(t,a,0===i.length):I(t,a),!0===o&&(te=!0,e(t).trigger("input")))}function N(t,i,a){if((i=i||S(t).match).placeholder!==n||!0===a)return e.isFunction(i.placeholder)?i.placeholder(c):i.placeholder;if(null===i.fn){if(t>-1&&h().validPositions[t]===n){var r,o=C(t),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(null===o[l].match.fn||r===n||!1!==o[l].match.fn.test(r.match.def,h(),t,!0,c))&&(s.push(o[l]),null===o[l].match.fn&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return c.placeholder.charAt(t%c.placeholder.length)}return i.def}return c.placeholder.charAt(t%c.placeholder.length)}function G(t,i,r,o,s){var l=o.slice(),u="",p=-1,f=n;if(g(),r||!0===c.autoUnmask)p=F(p);else{var m=M().slice(0,F(-1)).join(""),k=l.join("").match(new RegExp("^"+a.escapeRegex(m),"g"));k&&k.length>0&&(l.splice(0,k.length*m.length),p=F(p))}-1===p?(h().p=F(p),p=0):h().p=p,e.each(l,function(i,a){if(a!==n)if(h().validPositions[i]===n&&l[i]===N(i)&&j(i,!0)&&!1===_(i,l[i],!0,n,n,!0))h().p++;else{var o=new e.Event("_checkval");o.which=a.charCodeAt(0),u+=a;var s=v(n,!0),m=S(s),g=P(s+1,m?m.locator.slice():n,s);if(y=p,b=u,-1===d(!0,0,!1).slice(y,F(y)).join("").indexOf(b)||j(y)||S(y).match.nativeDef!==b.charAt(0)&&(" "!==S(y).match.nativeDef||S(y+1).match.nativeDef!==b.charAt(0))||r||c.autoUnmask){var k=r?i:null==g.match.fn&&g.match.optionality&&s+1<h().p?s+1:h().p;(f=oe.keypressEvent.call(t,o,!0,!1,r,k))&&(p=k+1,u="")}else f=oe.keypressEvent.call(t,o,!0,!1,!0,s+1);R(n,E(),f.forwardPosition,o,!1)}var y,b}),i&&R(t,E(),f?f.forwardPosition:n,s||new e.Event("checkval"),s&&"input"===s.type)}function B(t){if(t){if(t.inputmask===n)return t.value;t.inputmask&&t.inputmask.refreshValue&&oe.setValueEvent.call(t)}var i=[],a=h().validPositions;for(var r in a)a[r].match&&null!=a[r].match.fn&&i.push(a[r].input);var o=0===i.length?"":(X?i.reverse():i).join("");if(e.isFunction(c.onUnMask)){var s=(X?E().slice().reverse():E()).join("");o=c.onUnMask.call(J,s,o,c)}return o}function I(a,r,o,s){function l(e){return!0===s||!X||"number"!=typeof e||c.greedy&&""===c.placeholder||(e=a.inputmask.__valueGet.call(a).length-e),e}var u;if(r===n)return a.setSelectionRange?(r=a.selectionStart,o=a.selectionEnd):t.getSelection?(u=t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==a&&u.commonAncestorContainer!==a||(r=u.startOffset,o=u.endOffset):i.selection&&i.selection.createRange&&(o=(r=0-(u=i.selection.createRange()).duplicate().moveStart("character",-a.inputmask._valueGet().length))+u.text.length),{begin:l(r),end:l(o)};if(e.isArray(r)&&(o=X?r[0]:r[1],r=X?r[1]:r[0]),r.begin!==n&&(o=X?r.begin:r.end,r=X?r.end:r.begin),"number"==typeof r){r=l(r),o="number"==typeof(o=l(o))?o:r;var p=parseInt(((a.ownerDocument.defaultView||t).getComputedStyle?(a.ownerDocument.defaultView||t).getComputedStyle(a,null):a.currentStyle).fontSize)*o;if(a.scrollLeft=p>a.scrollWidth?p:0,!1===c.insertMode&&r===o&&o++,a.inputmask.caretPos={begin:r,end:o},a.setSelectionRange)a.selectionStart=r,a.selectionEnd=o;else if(t.getSelection){if(u=i.createRange(),a.firstChild===n||null===a.firstChild){var f=i.createTextNode("");a.appendChild(f)}u.setStart(a.firstChild,r<a.inputmask._valueGet().length?r:a.inputmask._valueGet().length),u.setEnd(a.firstChild,o<a.inputmask._valueGet().length?o:a.inputmask._valueGet().length),u.collapse(!0);var m=t.getSelection();m.removeAllRanges(),m.addRange(u)}else a.createTextRange&&((u=a.createTextRange()).collapse(!0),u.moveEnd("character",o),u.moveStart("character",r),u.select());z(a,{begin:r,end:o})}}function L(t){var i,a,r=E(),o=r.length,s=v(),l={},u=h().validPositions[s],c=u!==n?u.locator.slice():n;for(i=s+1;i<r.length;i++)c=(a=P(i,c,i-1)).locator.slice(),l[i]=e.extend(!0,{},a);var p=u&&u.alternation!==n?u.locator[u.alternation]:n;for(i=o-1;i>s&&((a=l[i]).match.optionality||a.match.optionalQuantifier&&a.match.newBlockMarker||p&&(p!==l[i].locator[u.alternation]&&null!=a.match.fn||null===a.match.fn&&a.locator[u.alternation]&&D(a.locator[u.alternation].toString().split(","),p.toString().split(","))&&""!==C(i)[0].def))&&r[i]===N(i,a.match);i--)o--;return t?{l:o,def:l[o]?l[o].match:n}:o}function H(e){for(var t,i=L(),a=e.length,r=h().validPositions[v()];i<a&&!j(i,!0)&&(t=r!==n?P(i,r.locator.slice(""),r):S(i))&&!0!==t.match.optionality&&(!0!==t.match.optionalQuantifier&&!0!==t.match.newBlockMarker||i+1===a&&""===(r!==n?P(i+1,r.locator.slice(""),r):S(i+1)).match.def);)i++;for(;(t=h().validPositions[i-1])&&t&&t.match.optionality&&t.input===c.skipOptionalPartCharacter;)i--;return e.splice(i),e}function V(t){if(e.isFunction(c.isComplete))return c.isComplete(t,c);if("*"===c.repeat)return n;var i=!1,a=L(!0),r=T(a.l);if(a.def===n||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){i=!0;for(var o=0;o<=r;o++){var s=P(o).match;if(null!==s.fn&&h().validPositions[o]===n&&!0!==s.optionality&&!0!==s.optionalQuantifier||null===s.fn&&t[o]!==N(o,s)){i=!1;break}}}return i}function K(e,t,i,r,o){if((c.numericInput||X)&&(t===a.keyCode.BACKSPACE?t=a.keyCode.DELETE:t===a.keyCode.DELETE&&(t=a.keyCode.BACKSPACE),X)){var s=i.end;i.end=i.begin,i.begin=s}if(t===a.keyCode.BACKSPACE&&(i.end-i.begin<1||!1===c.insertMode)?(i.begin=T(i.begin),h().validPositions[i.begin]!==n&&h().validPositions[i.begin].input===c.groupSeparator&&i.begin--):t===a.keyCode.DELETE&&i.begin===i.end&&(i.end=j(i.end,!0)&&h().validPositions[i.end]&&h().validPositions[i.end].input!==c.radixPoint?i.end+1:F(i.end)+1,h().validPositions[i.begin]!==n&&h().validPositions[i.begin].input===c.groupSeparator&&i.end++),k(i.begin,i.end,!1,r),!0!==r&&null!==c.keepStatic&&!1!==c.keepStatic){var l=O(!0);l&&(i.begin=l.caret!==n?l.caret:l.pos?F(l.pos.begin?l.pos.begin:l.pos):v(-1,!0))}var u=v(i.begin,!0);if(u<i.begin||-1===i.begin)h().p=F(u);else if(!0!==r&&(h().p=i.begin,!0!==o))for(;h().p<u&&h().validPositions[h().p]===n;)h().p++}function U(n){var a=(n.ownerDocument.defaultView||t).getComputedStyle(n,null),r=i.createElement("div");r.style.width=a.width,r.style.textAlign=a.textAlign,q=i.createElement("div"),n.inputmask.colorMask=q,q.className="im-colormask",n.parentNode.insertBefore(q,n),n.parentNode.removeChild(n),q.appendChild(r),q.appendChild(n),n.style.left=r.offsetLeft+"px",e(n).on("click",function(e){return I(n,function(e){var t,r=i.createElement("span");for(var o in a)isNaN(o)&&-1!==o.indexOf("font")&&(r.style[o]=a[o]);r.style.textTransform=a.textTransform,r.style.letterSpacing=a.letterSpacing,r.style.position="absolute",r.style.height="auto",r.style.width="auto",r.style.visibility="hidden",r.style.whiteSpace="nowrap",i.body.appendChild(r);var s,l=n.inputmask._valueGet(),u=0;for(t=0,s=l.length;t<=s;t++){if(r.innerHTML+=l.charAt(t)||"_",r.offsetWidth>=e){var c=e-u,p=r.offsetWidth-e;r.innerHTML=l.charAt(t),t=(c-=r.offsetWidth/3)<p?t-1:t;break}u=r.offsetWidth}return i.body.removeChild(r),t}(e.clientX)),oe.clickEvent.call(n,[e])}),e(n).on("keydown",function(e){e.shiftKey||!1===c.insertMode||setTimeout(function(){z(n)},0)})}function z(e,t,a){function r(e){if(e===n&&(e=""),p||null!==o.fn&&s.input!==n)if(p&&(null!==o.fn&&s.input!==n||""===o.def)){p=!1;var t=u.length;u[t-1]=u[t-1]+"</span>",u.push(e)}else u.push(e);else p=!0,u.push("<span class='im-static'>"+e)}var o,s,l,u=[],p=!1,f=0;if(q!==n){var m=E();if(t===n?t=I(e):t.begin===n&&(t={begin:t,end:t}),!0!==a){var d=v();do{h().validPositions[f]?(s=h().validPositions[f],o=s.match,l=s.locator.slice(),r(m[f])):(s=P(f,l,f-1),o=s.match,l=s.locator.slice(),(!1===c.jitMasking||f<d||"number"==typeof c.jitMasking&&isFinite(c.jitMasking)&&c.jitMasking>f)&&r(N(f,o))),f++}while(($===n||f<$)&&(null!==o.fn||""!==o.def)||d>f||p);p&&r(),i.activeElement===e&&(u.splice(t.begin,0,t.begin===t.end?'<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">':'<mark class="im-caret-select">'),u.splice(t.end+1,0,"</mark>"))}var g=q.getElementsByTagName("div")[0];g.innerHTML=u.join(""),e.inputmask.positionColorMask(e,g)}}s=s||this.maskset,c=c||this.opts;var Q,W,$,q,Z,J=this,Y=this.el,X=this.isRTL,ee=!1,te=!1,ie=!1,ne=!1,ae=!1,re={on:function(t,i,r){var o=function(t){var i=this;if(i.inputmask===n&&"FORM"!==this.nodeName){var o=e.data(i,"_inputmask_opts");o?new a(o).mask(i):re.off(i)}else{if("setvalue"===t.type||"FORM"===this.nodeName||!(i.disabled||i.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===c.tabThrough&&t.keyCode===a.keyCode.TAB))){switch(t.type){case"input":if(!0===te)return te=!1,t.preventDefault();p&&(ae=!0);break;case"keydown":ee=!1,te=!1;break;case"keypress":if(!0===ee)return t.preventDefault();ee=!0;break;case"click":if(f||m){var s=arguments;return setTimeout(function(){r.apply(i,s)},0),!1}}var l=r.apply(i,arguments);return ae&&(ae=!1,setTimeout(function(){I(i,i.inputmask.caretPos,n,!0)})),!1===l&&(t.preventDefault(),t.stopPropagation()),l}t.preventDefault()}};t.inputmask.events[i]=t.inputmask.events[i]||[],t.inputmask.events[i].push(o),-1!==e.inArray(i,["submit","reset"])?null!==t.form&&e(t.form).on(i,o):e(t).on(i,o)},off:function(t,i){var n;t.inputmask&&t.inputmask.events&&(i?(n=[])[i]=t.inputmask.events[i]:n=t.inputmask.events,e.each(n,function(i,n){for(;n.length>0;){var a=n.pop();-1!==e.inArray(i,["submit","reset"])?null!==t.form&&e(t.form).off(i,a):e(t).off(i,a)}delete t.inputmask.events[i]}))}},oe={keydownEvent:function(t){var i=this,n=e(i),r=t.keyCode,o=I(i);if(r===a.keyCode.BACKSPACE||r===a.keyCode.DELETE||m&&r===a.keyCode.BACKSPACE_SAFARI||t.ctrlKey&&r===a.keyCode.X&&!l("cut"))t.preventDefault(),K(0,r,o),R(i,E(!0),h().p,t,i.inputmask._valueGet()!==E().join("")),i.inputmask._valueGet()===M().join("")?n.trigger("cleared"):!0===V(E())&&n.trigger("complete");else if(r===a.keyCode.END||r===a.keyCode.PAGE_DOWN){t.preventDefault();var s=F(v());c.insertMode||s!==h().maskLength||t.shiftKey||s--,I(i,t.shiftKey?o.begin:s,s,!0)}else r===a.keyCode.HOME&&!t.shiftKey||r===a.keyCode.PAGE_UP?(t.preventDefault(),I(i,0,t.shiftKey?o.begin:0,!0)):(c.undoOnEscape&&r===a.keyCode.ESCAPE||90===r&&t.ctrlKey)&&!0!==t.altKey?(G(i,!0,!1,Q.split("")),n.trigger("click")):r!==a.keyCode.INSERT||t.shiftKey||t.ctrlKey?!0===c.tabThrough&&r===a.keyCode.TAB?(!0===t.shiftKey?(null===S(o.begin).match.fn&&(o.begin=F(o.begin)),o.end=T(o.begin,!0),o.begin=T(o.end,!0)):(o.begin=F(o.begin,!0),o.end=F(o.begin,!0),o.end<h().maskLength&&o.end--),o.begin<h().maskLength&&(t.preventDefault(),I(i,o.begin,o.end))):t.shiftKey||!1===c.insertMode&&(r===a.keyCode.RIGHT?setTimeout(function(){var e=I(i);I(i,e.begin)},0):r===a.keyCode.LEFT&&setTimeout(function(){var e=I(i);I(i,X?e.begin+1:e.begin-1)},0)):(c.insertMode=!c.insertMode,I(i,c.insertMode||o.begin!==h().maskLength?o.begin:o.begin-1));c.onKeyDown.call(this,t,E(),I(i).begin,c),ie=-1!==e.inArray(r,c.ignorables)},keypressEvent:function(t,i,r,o,s){var l=this,u=e(l),p=t.which||t.charCode||t.keyCode;if(!(!0===i||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||ie))return p===a.keyCode.ENTER&&Q!==E().join("")&&(Q=E().join(""),setTimeout(function(){u.trigger("change")},0)),!0;if(p){46===p&&!1===t.shiftKey&&""!==c.radixPoint&&(p=c.radixPoint.charCodeAt(0));var f,m=i?{begin:s,end:s}:I(l),d=String.fromCharCode(p);h().writeOutBuffer=!0;var v=_(m,d,o);if(!1!==v&&(g(!0),f=v.caret!==n?v.caret:F(v.pos.begin?v.pos.begin:v.pos),h().p=f),f=c.numericInput&&v.caret===n?T(f):f,!1!==r&&(setTimeout(function(){c.onKeyValidation.call(l,p,v,c)},0),h().writeOutBuffer&&!1!==v)){var k=E();R(l,k,f,t,!0!==i),!0!==i&&setTimeout(function(){!0===V(k)&&u.trigger("complete")},0)}if(t.preventDefault(),i)return!1!==v&&(v.forwardPosition=f),v}},pasteEvent:function(i){var n,a=this,r=i.originalEvent||i,o=e(a),s=a.inputmask._valueGet(!0),l=I(a);X&&(n=l.end,l.end=l.begin,l.begin=n);var u=s.substr(0,l.begin),p=s.substr(l.end,s.length);if(u===(X?M().reverse():M()).slice(0,l.begin).join("")&&(u=""),p===(X?M().reverse():M()).slice(l.end).join("")&&(p=""),X&&(n=u,u=p,p=n),t.clipboardData&&t.clipboardData.getData)s=u+t.clipboardData.getData("Text")+p;else{if(!r.clipboardData||!r.clipboardData.getData)return!0;s=u+r.clipboardData.getData("text/plain")+p}var f=s;if(e.isFunction(c.onBeforePaste)){if(!1===(f=c.onBeforePaste.call(J,s,c)))return i.preventDefault();f||(f=s)}return G(a,!1,!1,X?f.split("").reverse():f.toString().split("")),R(a,E(),F(v()),i,Q!==E().join("")),!0===V(E())&&o.trigger("complete"),i.preventDefault()},inputFallBackEvent:function(t){var i,n,r=this,o=r.inputmask._valueGet();if(E().join("")!==o){var s=I(r);if(n=s,"."===(i=o).charAt(n.begin-1)&&""!==c.radixPoint&&((i=i.split(""))[n.begin-1]=c.radixPoint.charAt(0),i=i.join("")),o=function(e,t,i){if(f){var n=t.replace(E().join(""),"");if(1===n.length){var a=t.split("");a.splice(i.begin,0,n),t=a.join("")}}return t}(0,o=i,s),E().join("")!==o){var l=E().join(""),u=o.length>l.length?-1:0,p=o.substr(0,s.begin),m=o.substr(s.begin),d=l.substr(0,s.begin+u),h=l.substr(s.begin+u),g=s,v="",k=!1;if(p!==d){for(var y=(k=p.length>=d.length)?p.length:d.length,b=0;p.charAt(b)===d.charAt(b)&&b<y;b++);k&&(0===u&&(g.begin=b),v+=p.slice(b,g.end))}if(m!==h&&(m.length>h.length?v+=m.slice(0,1):m.length<h.length&&(g.end+=h.length-m.length,k||""===c.radixPoint||""!==m||p.charAt(g.begin+u-1)!==c.radixPoint||(g.begin--,v=c.radixPoint))),R(r,E(),{begin:g.begin+u,end:g.end+u}),v.length>0)e.each(v.split(""),function(t,i){var n=new e.Event("keypress");n.which=i.charCodeAt(0),ie=!1,oe.keypressEvent.call(r,n)});else{g.begin===g.end-1&&(g.begin=T(g.begin+1),g.begin===g.end-1?I(r,g.begin):I(r,g.begin,g.end));var x=new e.Event("keydown");x.keyCode=a.keyCode.DELETE,oe.keydownEvent.call(r,x),!1===c.insertMode&&I(r,I(r).begin-1)}t.preventDefault()}}},setValueEvent:function(t){this.inputmask.refreshValue=!1;var i=this.inputmask._valueGet(!0);e.isFunction(c.onBeforeMask)&&(i=c.onBeforeMask.call(J,i,c)||i),i=i.split(""),G(this,!0,!1,X?i.reverse():i),Q=E().join(""),(c.clearMaskOnLostFocus||c.clearIncomplete)&&this.inputmask._valueGet()===M().join("")&&this.inputmask._valueSet("")},focusEvent:function(e){var t=this,i=t.inputmask._valueGet();c.showMaskOnFocus&&(!c.showMaskOnHover||c.showMaskOnHover&&""===i)&&(t.inputmask._valueGet()!==E().join("")?R(t,E(),F(v())):!1===ne&&I(t,F(v()))),!0===c.positionCaretOnTab&&!1===ne&&oe.clickEvent.apply(t,[e,!0]),Q=E().join("")},mouseleaveEvent:function(e){if(ne=!1,c.clearMaskOnLostFocus&&i.activeElement!==this){var t=E().slice(),n=this.inputmask._valueGet();n!==this.getAttribute("placeholder")&&""!==n&&(-1===v()&&n===M().join("")?t=[]:H(t),R(this,t))}},clickEvent:function(t,a){var r=this;setTimeout(function(){if(i.activeElement===r){var t=I(r);if(a&&(X?t.end=t.begin:t.begin=t.end),t.begin===t.end)switch(c.positionCaretOnClick){case"none":break;case"select":I(r,0,E().length);break;case"radixFocus":if(function(t){if(""!==c.radixPoint){var i=h().validPositions;if(i[t]===n||i[t].input===N(t)){if(t<F(-1))return!0;var a=e.inArray(c.radixPoint,E());if(-1!==a){for(var r in i)if(a<r&&i[r].input!==N(r))return!1;return!0}}}return!1}(t.begin)){var o=E().join("").indexOf(c.radixPoint);I(r,c.numericInput?F(o):o);break}default:var s=t.begin,l=v(s,!0),u=F(l);if(s<u)I(r,j(s,!0)||j(s-1,!0)?s:F(s));else{var p=h().validPositions[l],f=P(u,p?p.match.locator:n,p),m=N(u,f.match);if(""!==m&&E()[u]!==m&&!0!==f.match.optionalQuantifier&&!0!==f.match.newBlockMarker||!j(u,!0)&&f.match.def===m){var d=F(u);(s>=d||s===u)&&(u=d)}I(r,u)}}}},0)},dblclickEvent:function(e){var t=this;setTimeout(function(){I(t,0,F(v()))},0)},cutEvent:function(n){var r=e(this),o=I(this),s=n.originalEvent||n,l=t.clipboardData||s.clipboardData,u=X?E().slice(o.end,o.begin):E().slice(o.begin,o.end);l.setData("text",X?u.reverse().join(""):u.join("")),i.execCommand&&i.execCommand("copy"),K(0,a.keyCode.DELETE,o),R(this,E(),h().p,n,Q!==E().join("")),this.inputmask._valueGet()===M().join("")&&r.trigger("cleared")},blurEvent:function(t){var i=e(this);if(this.inputmask){var a=this.inputmask._valueGet(),r=E().slice();""===a&&q===n||(c.clearMaskOnLostFocus&&(-1===v()&&a===M().join("")?r=[]:H(r)),!1===V(r)&&(setTimeout(function(){i.trigger("incomplete")},0),c.clearIncomplete&&(g(),r=c.clearMaskOnLostFocus?[]:M().slice())),R(this,r,n,t)),Q!==E().join("")&&(Q=r.join(""),i.trigger("change"))}},mouseenterEvent:function(e){ne=!0,i.activeElement!==this&&c.showMaskOnHover&&this.inputmask._valueGet()!==E().join("")&&R(this,E())},submitEvent:function(e){Q!==E().join("")&&W.trigger("change"),c.clearMaskOnLostFocus&&-1===v()&&Y.inputmask._valueGet&&Y.inputmask._valueGet()===M().join("")&&Y.inputmask._valueSet(""),c.removeMaskOnSubmit&&(Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(),!0),setTimeout(function(){R(Y,E())},0))},resetEvent:function(e){Y.inputmask.refreshValue=!0,setTimeout(function(){W.trigger("setvalue")},0)}};if(a.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"},r!==n)switch(r.action){case"isComplete":return Y=r.el,V(E());case"unmaskedvalue":return Y!==n&&r.value===n||(Z=r.value,Z=(e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,Z,c)||Z).split(""),G(n,!1,!1,X?Z.reverse():Z),e.isFunction(c.onBeforeWrite)&&c.onBeforeWrite.call(J,n,E(),0,c)),B(Y);case"mask":!function(t){re.off(t);var a=function(t,a){var r=t.getAttribute("type"),s="INPUT"===t.tagName&&-1!==e.inArray(r,a.supportsInputType)||t.isContentEditable||"TEXTAREA"===t.tagName;if(!s)if("INPUT"===t.tagName){var l=i.createElement("input");l.setAttribute("type",r),s="text"===l.type,l=null}else s="partial";return!1!==s?function(t){function r(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==v()||!0!==a.nullable?i.activeElement===this&&a.clearMaskOnLostFocus?(X?H(E().slice()).reverse():H(E().slice())).join(""):l.call(this):"":l.call(this)}function s(t){u.call(this,t),this.inputmask&&e(this).trigger("setvalue")}var l,u,c;if(!t.inputmask.__valueGet){if(!0!==a.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===o("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var p=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):n;p&&p.get&&p.set?(l=p.get,u=p.set,Object.defineProperty(t,"value",{get:r,set:s,configurable:!0})):"INPUT"!==t.tagName&&(l=function(){return this.textContent},u=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:r,set:s,configurable:!0}))}else i.__lookupGetter__&&t.__lookupGetter__("value")&&(l=t.__lookupGetter__("value"),u=t.__lookupSetter__("value"),t.__defineGetter__("value",r),t.__defineSetter__("value",s));t.inputmask.__valueGet=l,t.inputmask.__valueSet=u}t.inputmask._valueGet=function(e){return X&&!0!==e?l.call(this.el).split("").reverse().join(""):l.call(this.el)},t.inputmask._valueSet=function(e,t){u.call(this.el,null===e||e===n?"":!0!==t&&X?e.split("").reverse().join(""):e)},l===n&&(l=function(){return this.value},u=function(e){this.value=e},function(t){if(e.valHooks&&(e.valHooks[t]===n||!0!==e.valHooks[t].inputmaskpatch)){var i=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},r=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=i(e);return-1!==v(n,n,e.inputmask.maskset.validPositions)||!0!==a.nullable?t:""}return i(e)},set:function(t,i){var n,a=e(t);return n=r(t,i),t.inputmask&&a.trigger("setvalue"),n},inputmaskpatch:!0}}}(t.type),c=t,re.on(c,"mouseenter",function(t){var i=e(this);this.inputmask._valueGet()!==E().join("")&&i.trigger("setvalue")}))}}(t):t.inputmask=n,s}(t,c);if(!1!==a&&(W=e(Y=t),-1===($=Y!==n?Y.maxLength:n)&&($=n),!0===c.colorMask&&U(Y),p&&("inputmode"in Y&&(Y.inputmode=c.inputmode,Y.setAttribute("inputmode",c.inputmode)),!0===c.disablePredictiveText&&("autocorrect"in Y?Y.autocorrect=!1:(!0!==c.colorMask&&U(Y),Y.type="password"))),!0===a&&(re.on(Y,"submit",oe.submitEvent),re.on(Y,"reset",oe.resetEvent),re.on(Y,"mouseenter",oe.mouseenterEvent),re.on(Y,"blur",oe.blurEvent),re.on(Y,"focus",oe.focusEvent),re.on(Y,"mouseleave",oe.mouseleaveEvent),!0!==c.colorMask&&re.on(Y,"click",oe.clickEvent),re.on(Y,"dblclick",oe.dblclickEvent),re.on(Y,"paste",oe.pasteEvent),re.on(Y,"dragdrop",oe.pasteEvent),re.on(Y,"drop",oe.pasteEvent),re.on(Y,"cut",oe.cutEvent),re.on(Y,"complete",c.oncomplete),re.on(Y,"incomplete",c.onincomplete),re.on(Y,"cleared",c.oncleared),p||!0===c.inputEventOnly?Y.removeAttribute("maxLength"):(re.on(Y,"keydown",oe.keydownEvent),re.on(Y,"keypress",oe.keypressEvent)),re.on(Y,"compositionstart",e.noop),re.on(Y,"compositionupdate",e.noop),re.on(Y,"compositionend",e.noop),re.on(Y,"keyup",e.noop),re.on(Y,"input",oe.inputFallBackEvent),re.on(Y,"beforeinput",e.noop)),re.on(Y,"setvalue",oe.setValueEvent),Q=M().join(""),""!==Y.inputmask._valueGet(!0)||!1===c.clearMaskOnLostFocus||i.activeElement===Y)){var r=e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,Y.inputmask._valueGet(!0),c)||Y.inputmask._valueGet(!0);""!==r&&G(Y,!0,!1,X?r.split("").reverse():r.split(""));var s=E().slice();Q=s.join(""),!1===V(s)&&c.clearIncomplete&&g(),c.clearMaskOnLostFocus&&i.activeElement!==Y&&(-1===v()?s=[]:H(s)),R(Y,s),i.activeElement===Y&&I(Y,F(v()))}}(Y);break;case"format":return Z=(e.isFunction(c.onBeforeMask)&&c.onBeforeMask.call(J,r.value,c)||r.value).split(""),G(n,!0,!1,X?Z.reverse():Z),r.metadata?{value:X?E().slice().reverse().join(""):E().join(""),metadata:u.call(this,{action:"getmetadata"},s,c)}:X?E().slice().reverse().join(""):E().join("");case"isValid":r.value?(Z=r.value.split(""),G(n,!0,!0,X?Z.reverse():Z)):r.value=E().join("");for(var se=E(),le=L(),ue=se.length-1;ue>le&&!j(ue);ue--);return se.splice(le,ue+1-le),V(se)&&r.value===E().join("");case"getemptymask":return M().join("");case"remove":return Y&&Y.inputmask&&(W=e(Y),Y.inputmask._valueSet(c.autoUnmask?B(Y):Y.inputmask._valueGet(!0)),re.off(Y),Y.inputmask.colorMask&&((q=Y.inputmask.colorMask).removeChild(Y),q.parentNode.insertBefore(Y,q),q.parentNode.removeChild(q)),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y),"value")&&Y.inputmask.__valueGet&&Object.defineProperty(Y,"value",{get:Y.inputmask.__valueGet,set:Y.inputmask.__valueSet,configurable:!0}):i.__lookupGetter__&&Y.__lookupGetter__("value")&&Y.inputmask.__valueGet&&(Y.__defineGetter__("value",Y.inputmask.__valueGet),Y.__defineSetter__("value",Y.inputmask.__valueSet)),Y.inputmask=n),Y;case"getmetadata":if(e.isArray(s.metadata)){var ce=d(!0,0,!1).join("");return e.each(s.metadata,function(e,t){if(t.mask===ce)return ce=t,!1}),ce}return s.metadata}}var c=navigator.userAgent,p=l("touchstart"),f=/iemobile/i.test(c),m=/iphone/i.test(c)&&!f;return a.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:e.noop,onBeforeMask:null,onBeforePaste:function(t,i){return e.isFunction(i.onBeforeMask)?i.onBeforeMask.call(this,t,i):t},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",radixPointDefinitionSymbol:n,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","password","search"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,canClearPosition:e.noop,preValidation:null,postValidation:null,staticDefinitionSymbol:n,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,disablePredictiveText:!1,importDataAttributes:!0},definitions:{9:{validator:"[0-91-9]",definitionSymbol:"*"},a:{validator:"[A-Za-z�-���A-y�]",definitionSymbol:"*"},"*":{validator:"[0-91-9A-Za-z�-���A-y�]"}},aliases:{},masksCache:{},mask:function(o){var l=this;return"string"==typeof o&&(o=i.getElementById(o)||i.querySelectorAll(o)),o=o.nodeName?[o]:o,e.each(o,function(i,o){var c=e.extend(!0,{},l.opts);if(function(i,a,o,s){if(!0===a.importDataAttributes){var l,u,c,p,f=function(e,a){null!==(a=a!==n?a:i.getAttribute(s+"-"+e))&&("string"==typeof a&&(0===e.indexOf("on")?a=t[a]:"false"===a?a=!1:"true"===a&&(a=!0)),o[e]=a)},m=i.getAttribute(s);if(m&&""!==m&&(m=m.replace(/'/g,'"'),u=JSON.parse("{"+m+"}")),u){c=n;for(p in u)if("alias"===p.toLowerCase()){c=u[p];break}}f("alias",c),o.alias&&r(o.alias,o,a);for(l in a){if(u){c=n;for(p in u)if(p.toLowerCase()===l.toLowerCase()){c=u[p];break}}f(l,c)}}return e.extend(!0,a,o),("rtl"===i.dir||a.rightAlign)&&(i.style.textAlign="right"),("rtl"===i.dir||a.numericInput)&&(i.dir="ltr",i.removeAttribute("dir"),a.isRTL=!0),Object.keys(o).length}(o,c,e.extend(!0,{},l.userOptions),l.dataAttribute)){var p=s(c,l.noMasksCache);p!==n&&(o.inputmask!==n&&(o.inputmask.opts.autoUnmask=!0,o.inputmask.remove()),o.inputmask=new a(n,n,!0),o.inputmask.opts=c,o.inputmask.noMasksCache=l.noMasksCache,o.inputmask.userOptions=e.extend(!0,{},l.userOptions),o.inputmask.isRTL=c.isRTL||c.numericInput,o.inputmask.el=o,o.inputmask.maskset=p,e.data(o,"_inputmask_opts",c),u.call(o.inputmask,{action:"mask"}))}}),o&&o[0]&&o[0].inputmask||this},option:function(t,i){return"string"==typeof t?this.opts[t]:"object"===(void 0===t?"undefined":o(t))?(e.extend(this.userOptions,t),this.el&&!0!==i&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return u.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||s(this.opts,this.noMasksCache),u.call(this,{action:"format",value:e,metadata:t})},analyseMask:function(t,i,r){function o(e,t,i,n){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=i||!1,this.isAlternator=n||!1,this.quantifier={min:1,max:1}}function s(t,o,s){s=s!==n?s:t.matches.length;var l=t.matches[s-1];if(i)0===o.indexOf("[")||k&&/\\d|\\s|\\w]/i.test(o)||"."===o?t.matches.splice(s++,0,{fn:new RegExp(o,r.casing?"i":""),optionality:t.isOptional,newBlockMarker:l===n||l.def!==o,casing:null,def:o,placeholder:n,nativeDef:o}):(k&&(o=o[o.length-1]),e.each(o.split(""),function(e,i){l=t.matches[s-1],t.matches.splice(s++,0,{fn:null,optionality:t.isOptional,newBlockMarker:l===n||l.def!==i&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||i,placeholder:r.staticDefinitionSymbol!==n?i:n,nativeDef:i})})),k=!1;else{var u=(r.definitions?r.definitions[o]:n)||a.prototype.definitions[o];u&&!k?t.matches.splice(s++,0,{fn:u.validator?"string"==typeof u.validator?new RegExp(u.validator,r.casing?"i":""):new function(){this.test=u.validator}:new RegExp("."),optionality:t.isOptional,newBlockMarker:l===n||l.def!==(u.definitionSymbol||o),casing:u.casing,def:u.definitionSymbol||o,placeholder:u.placeholder,nativeDef:o}):(t.matches.splice(s++,0,{fn:null,optionality:t.isOptional,newBlockMarker:l===n||l.def!==o&&null!==l.fn,casing:null,def:r.staticDefinitionSymbol||o,placeholder:r.staticDefinitionSymbol!==n?o:n,nativeDef:o}),k=!1)}}function l(){if(b.length>0){if(s(f=b[b.length-1],c),f.isAlternator){m=b.pop();for(var e=0;e<m.matches.length;e++)m.matches[e].isGroup=!1;b.length>0?(f=b[b.length-1]).matches.push(m):y.matches.push(m)}}else s(y,c)}var u,c,p,f,m,d,h,g=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,v=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,k=!1,y=new o,b=[],x=[];for(i&&(r.optionalmarker[0]=n,r.optionalmarker[1]=n);u=i?v.exec(t):g.exec(t);){if(c=u[0],i)switch(c.charAt(0)){case"?":c="{0,1}";break;case"+":case"*":c="{"+c+"}"}if(k)l();else switch(c.charAt(0)){case r.escapeChar:k=!0,i&&l();break;case r.optionalmarker[1]:case r.groupmarker[1]:if((p=b.pop()).openGroup=!1,p!==n)if(b.length>0){if((f=b[b.length-1]).matches.push(p),f.isAlternator){m=b.pop();for(var P=0;P<m.matches.length;P++)m.matches[P].isGroup=!1,m.matches[P].alternatorGroup=!1;b.length>0?(f=b[b.length-1]).matches.push(m):y.matches.push(m)}}else y.matches.push(p);else l();break;case r.optionalmarker[0]:b.push(new o(!1,!0));break;case r.groupmarker[0]:b.push(new o(!0));break;case r.quantifiermarker[0]:var S=new o(!1,!1,!0),A=(c=c.replace(/[{}]/g,"")).split(","),C=isNaN(A[0])?A[0]:parseInt(A[0]),M=1===A.length?C:isNaN(A[1])?A[1]:parseInt(A[1]);if("*"!==M&&"+"!==M||(C="*"===M?0:1),S.quantifier={min:C,max:M},b.length>0){var E=b[b.length-1].matches;(u=E.pop()).isGroup||((h=new o(!0)).matches.push(u),u=h),E.push(u),E.push(S)}else(u=y.matches.pop()).isGroup||(i&&null===u.fn&&"."===u.def&&(u.fn=new RegExp(u.def,r.casing?"i":"")),(h=new o(!0)).matches.push(u),u=h),y.matches.push(u),y.matches.push(S);break;case r.alternatormarker:if(b.length>0){var w=(f=b[b.length-1]).matches[f.matches.length-1];d=f.openGroup&&(w.matches===n||!1===w.isGroup&&!1===w.isAlternator)?b.pop():f.matches.pop()}else d=y.matches.pop();if(d.isAlternator)b.push(d);else if(d.alternatorGroup?(m=b.pop(),d.alternatorGroup=!1):m=new o(!1,!1,!1,!0),m.matches.push(d),b.push(m),d.openGroup){d.openGroup=!1;var D=new o(!0);D.alternatorGroup=!0,b.push(D)}break;default:l()}}for(;b.length>0;)p=b.pop(),y.matches.push(p);return y.matches.length>0&&(function t(a){a&&a.matches&&e.each(a.matches,function(e,o){var l=a.matches[e+1];(l===n||l.matches===n||!1===l.isQuantifier)&&o&&o.isGroup&&(o.isGroup=!1,i||(s(o,r.groupmarker[0],0),!0!==o.openGroup&&s(o,r.groupmarker[1]))),t(o)})}(y),x.push(y)),(r.numericInput||r.isRTL)&&function e(t){t.matches=t.matches.reverse();for(var i in t.matches)if(t.matches.hasOwnProperty(i)){var a=parseInt(i);if(t.matches[i].isQuantifier&&t.matches[a+1]&&t.matches[a+1].isGroup){var o=t.matches[i];t.matches.splice(i,1),t.matches.splice(a+1,0,o)}t.matches[i].matches!==n?t.matches[i]=e(t.matches[i]):t.matches[i]=function(e){return e===r.optionalmarker[0]?e=r.optionalmarker[1]:e===r.optionalmarker[1]?e=r.optionalmarker[0]:e===r.groupmarker[0]?e=r.groupmarker[1]:e===r.groupmarker[1]&&(e=r.groupmarker[0]),e}(t.matches[i])}return t}(x[0]),x}},a.extendDefaults=function(t){e.extend(!0,a.prototype.defaults,t)},a.extendDefinitions=function(t){e.extend(!0,a.prototype.definitions,t)},a.extendAliases=function(t){e.extend(!0,a.prototype.aliases,t)},a.format=function(e,t,i){return a(t).format(e,i)},a.unmask=function(e,t){return a(t).unmaskedvalue(e)},a.isValid=function(e,t){return a(t).isValid(e)},a.remove=function(t){e.each(t,function(e,t){t.inputmask&&t.inputmask.remove()})},a.escapeRegex=function(e){return e.replace(new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim"),"\\$1")},a.keyCode={BACKSPACE:8,BACKSPACE_SAFARI:127,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SPACE:32,TAB:9,UP:38,X:88,CONTROL:17},a})?n.apply(t,a):n)&&(e.exports=r)},function(e,t){e.exports=jQuery},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}i(4),i(7),i(8),i(9);var a=n(i(1)),r=n(i(0)),o=n(i(2));r.default===o.default&&i(10),window.Inputmask=a.default},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){function i(e){if(!e.tokenizer){var t=[];for(var i in o)-1===t.indexOf(i[0])&&t.push(i[0]);e.tokenizer="("+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function n(e,n,a){for(var r,s="";r=i(a).exec(e);)void 0===n?s+=o[r[0]]?"("+o[r[0]][0]+")":t.escapeRegex(r[0]):o[r[0]]?s+=o[r[0]][3].call(n.date):s+=r[0];return s}function a(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function r(e,t,n){var a,r,s,l,u,c,p,f,m={date:new Date(1,0,1)},d=e;if("string"==typeof d){for(;r=i(n).exec(t);){var h=d.slice(0,r[0].length);o.hasOwnProperty(r[0])&&(a=o[r[0]][2],s=o[r[0]][1],l=m,u=h,c=n,p=void 0,f=void 0,"year"===a?(l[a]=(f=4===(p=u).length?p:(new Date).getFullYear().toString().substr(0,4-p.length)+p,n.min&&n.min.year&&n.max&&n.max.year?(f=f.replace(/[^0-9]/g,""),f=p.charAt(0)===n.max.year.charAt(0)?p.replace(/[^0-9]/g,"0"):f+n.min.year.substr(f.length)):f=f.replace(/[^0-9]/g,"0"),f),l["raw"+a]=u):l[a]=c.min&&u.match(/[^0-9]/)?c.min[a]:u,void 0!==s&&s.call(l.date,"month"==a?parseInt(l[a])-1:l[a])),d=d.slice(h.length)}return m}}var o={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return a(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return a(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return a(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return a(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return a(Date.prototype.getHours.call(this),2)}],hhh:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["[01][0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return a(Date.prototype.getHours.call(this),2)}],HHH:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["[0-5][0-9]",Date.prototype.setMinutes,"minutes",function(){return a(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["[0-5][0-9]",Date.prototype.setSeconds,"seconds",function(){return a(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return a(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return a(Date.prototype.getMilliseconds.call(this),2)}],t:[""],tt:[""],T:[""],TT:[""],Z:[""],o:[""],S:[""]},s={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};return t.extendAliases({datetime:{mask:function(e){return e.inputFormat=s[e.inputFormat]||e.inputFormat,e.displayFormat=s[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=s[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=e.placeholder!==t.prototype.defaults.placeholder?e.placeholder:e.inputFormat,e.min=r(e.min,e.inputFormat,e),e.max=r(e.max,e.inputFormat,e),e.regex=n(e.inputFormat,void 0,e),null},inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},postValidation:function(e,t,i){var n,a,o,s,l,u=t,c=r(e.join(""),i.inputFormat,i);return u&&c.date.getTime()==c.date.getTime()&&(s=c,l=u,u=(u=(!isFinite(s.day)||"29"==s.day&&!isFinite(s.rawyear)||new Date(s.date.getFullYear(),isFinite(s.month)?s.month:s.date.getMonth()+1,0).getDate()>=s.day)&&l)&&(n=c.date,o=!0,(a=i).min&&a.min.date.getTime()==a.min.date.getTime()&&(o=o&&a.min.date.getTime()<=n.getTime()),a.max&&a.max.date.getTime()==a.max.date.getTime()&&(o=o&&a.max.date.getTime()>=n.getTime()),o)),u},onKeyDown:function(n,r,o,s){if(n.ctrlKey&&n.keyCode===t.keyCode.RIGHT){for(var l,u=new Date,c="";l=i(s).exec(s.inputFormat);)"d"===l[0].charAt(0)?c+=a(u.getDate(),l[0].length):"m"===l[0].charAt(0)?c+=a(u.getMonth()+1,l[0].length):"yyyy"===l[0]?c+=u.getFullYear().toString():"y"===l[0].charAt(0)&&(c+=a(u.getYear(),l[0].length));this.inputmask._valueSet(c),e(this).trigger("setvalue")}},onUnMask:function(e,t,i){return n(i.outputFormat,r(e,i.inputFormat,i),i)},insertMode:!1}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n;"function"==typeof Symbol&&Symbol.iterator,void 0!==(n=function(){return window}.call(t,i,t,e))&&(e.exports=n)},function(e,t,i){"use strict";var n;"function"==typeof Symbol&&Symbol.iterator,void 0!==(n=function(){return document}.call(t,i,t,e))&&(e.exports=n)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){return t.extendDefinitions({A:{validator:"[A-Za-z�-���A-y�]",casing:"upper"},"&":{validator:"[0-9A-Za-z�-���A-y�]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}}),t.extendAliases({url:{definitions:{i:{validator:"."}},mask:"(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",insertMode:!1,autoUnmask:!1,inputmode:"url"},ip:{mask:"i[i[i]].i[i[i]].i[i[i]].i[i[i]]",definitions:{i:{validator:function(e,t,i,n,a){return i-1>-1&&"."!==t.buffer[i-1]?(e=t.buffer[i-1]+e,e=i-2>-1&&"."!==t.buffer[i-2]?t.buffer[i-2]+e:"0"+e):e="00"+e,new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)}}},onUnMask:function(e,t,i){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",casing:"lower"},"-":{validator:"[0-9A-Za-z-]",casing:"lower"}},onUnMask:function(e,t,i){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t,i){function n(e,i){for(var n="",a=0;a<e.length;a++)t.prototype.definitions[e.charAt(a)]||i.definitions[e.charAt(a)]||i.optionalmarker.start===e.charAt(a)||i.optionalmarker.end===e.charAt(a)||i.quantifiermarker.start===e.charAt(a)||i.quantifiermarker.end===e.charAt(a)||i.groupmarker.start===e.charAt(a)||i.groupmarker.end===e.charAt(a)||i.alternatormarker===e.charAt(a)?n+="\\"+e.charAt(a):n+=e.charAt(a);return n}return t.extendAliases({numeric:{mask:function(e){if(0!==e.repeat&&isNaN(e.integerDigits)&&(e.integerDigits=e.repeat),e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=i),e.autoGroup=e.autoGroup&&""!==e.groupSeparator,e.autoGroup&&("string"==typeof e.groupSize&&isFinite(e.groupSize)&&(e.groupSize=parseInt(e.groupSize)),isFinite(e.integerDigits))){var t=Math.floor(e.integerDigits/e.groupSize),a=e.integerDigits%e.groupSize;e.integerDigits=parseInt(e.integerDigits)+(0===a?t-1:t),e.integerDigits<1&&(e.integerDigits="*")}e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&!1===e.integerOptional&&(e.positionCaretOnClick="lvp"),e.definitions[";"]=e.definitions["~"],e.definitions[";"].definitionSymbol="~",!0===e.numericInput&&(e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e.decimalProtect=!1);var r="[+]";if(r+=n(e.prefix,e),!0===e.integerOptional?r+="~{1,"+e.integerDigits+"}":r+="~{"+e.integerDigits+"}",e.digits!==i){e.radixPointDefinitionSymbol=e.decimalProtect?":":e.radixPoint;var o=e.digits.toString().split(",");isFinite(o[0]&&o[1]&&isFinite(o[1]))?r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional?r+="["+e.radixPointDefinitionSymbol+";{1,"+e.digits+"}]":r+=e.radixPointDefinitionSymbol+";{"+e.digits+"}")}return r+=n(e.suffix,e),r+="[-]",e.greedy=!1,r},placeholder:"",greedy:!1,digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",groupSize:3,groupSeparator:"",autoGroup:!1,allowMinus:!0,negationSymbol:{front:"-",back:""},integerDigits:"+",integerOptional:!0,prefix:"",suffix:"",rightAlign:!0,decimalProtect:!0,min:null,max:null,step:1,insertMode:!0,autoUnmask:!1,unmaskAsNumber:!1,inputmode:"numeric",preValidation:function(t,n,a,r,o){if("-"===a||a===o.negationSymbol.front)return!0===o.allowMinus&&(o.isNegative=o.isNegative===i||!o.isNegative,""===t.join("")||{caret:n,dopost:!0});if(!1===r&&a===o.radixPoint&&o.digits!==i&&(isNaN(o.digits)||parseInt(o.digits)>0)){var s=e.inArray(o.radixPoint,t);if(-1!==s)return!0===o.numericInput?n===s:{caret:s+1}}return!0},postValidation:function(n,a,r){var o=r.suffix.split(""),s=r.prefix.split("");if(a.pos===i&&a.caret!==i&&!0!==a.dopost)return a;var l=a.caret!==i?a.caret:a.pos,u=n.slice();r.numericInput&&(l=u.length-l-1,u=u.reverse());var c=u[l];if(c===r.groupSeparator&&(c=u[l+=1]),l===u.length-r.suffix.length-1&&c===r.radixPoint)return a;c!==i&&c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back&&(u[l]="?",r.prefix.length>0&&l>=(!1===r.isNegative?1:0)&&l<r.prefix.length-1+(!1===r.isNegative?1:0)?s[l-(!1===r.isNegative?1:0)]="?":r.suffix.length>0&&l>=u.length-r.suffix.length-(!1===r.isNegative?1:0)&&(o[l-(u.length-r.suffix.length-(!1===r.isNegative?1:0))]="?")),s=s.join(""),o=o.join("");var p=u.join("").replace(s,"");if(p=(p=(p=(p=p.replace(o,"")).replace(new RegExp(t.escapeRegex(r.groupSeparator),"g"),"")).replace(new RegExp("[-"+t.escapeRegex(r.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(r.negationSymbol.back)+"$"),""),isNaN(r.placeholder)&&(p=p.replace(new RegExp(t.escapeRegex(r.placeholder),"g"),"")),p.length>1&&1!==p.indexOf(r.radixPoint)&&("0"===c&&(p=p.replace(/^\?/g,"")),p=p.replace(/^0/g,"")),p.charAt(0)===r.radixPoint&&""!==r.radixPoint&&!0!==r.numericInput&&(p="0"+p),""!==p){if(p=p.split(""),(!r.digitsOptional||r.enforceDigitsOnBlur&&"blur"===a.event)&&isFinite(r.digits)){var f=e.inArray(r.radixPoint,p),m=e.inArray(r.radixPoint,u);-1===f&&(p.push(r.radixPoint),f=p.length-1);for(var d=1;d<=r.digits;d++)r.digitsOptional&&(!r.enforceDigitsOnBlur||"blur"!==a.event)||p[f+d]!==i&&p[f+d]!==r.placeholder.charAt(0)?-1!==m&&u[m+d]!==i&&(p[f+d]=p[f+d]||u[m+d]):p[f+d]=a.placeholder||r.placeholder.charAt(0)}if(!0!==r.autoGroup||""===r.groupSeparator||c===r.radixPoint&&a.pos===i&&!a.dopost)p=p.join("");else{var h=p[p.length-1]===r.radixPoint&&a.c===r.radixPoint;p=t(function(e,t){var i="";if(i+="("+t.groupSeparator+"*{"+t.groupSize+"}){*}",""!==t.radixPoint){var n=e.join("").split(t.radixPoint);n[1]&&(i+=t.radixPoint+"*{"+n[1].match(/^\d*\??\d*/)[0].length+"}")}return i}(p,r),{numericInput:!0,jitMasking:!0,definitions:{"*":{validator:"[0-9?]",cardinality:1}}}).format(p.join("")),h&&(p+=r.radixPoint),p.charAt(0)===r.groupSeparator&&p.substr(1)}}if(r.isNegative&&"blur"===a.event&&(r.isNegative="0"!==p),p=s+p,p+=o,r.isNegative&&(p=r.negationSymbol.front+p,p+=r.negationSymbol.back),p=p.split(""),c!==i)if(c!==r.radixPoint&&c!==r.negationSymbol.front&&c!==r.negationSymbol.back)(l=e.inArray("?",p))>-1?p[l]=c:l=a.caret||0;else if(c===r.radixPoint||c===r.negationSymbol.front||c===r.negationSymbol.back){var g=e.inArray(c,p);-1!==g&&(l=g)}r.numericInput&&(l=p.length-l-1,p=p.reverse());var v={caret:c===i||a.pos!==i?l+(r.numericInput?-1:1):l,buffer:p,refreshFromBuffer:a.dopost||n.join("")!==p.join("")};return v.refreshFromBuffer?v:a},onBeforeWrite:function(n,a,r,o){if(n)switch(n.type){case"keydown":return o.postValidation(a,{caret:r,dopost:!0},o);case"blur":case"checkval":var s;if((l=o).parseMinMaxOptions===i&&(null!==l.min&&(l.min=l.min.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.min=l.min.replace(l.radixPoint,".")),l.min=isFinite(l.min)?parseFloat(l.min):NaN,isNaN(l.min)&&(l.min=Number.MIN_VALUE)),null!==l.max&&(l.max=l.max.toString().replace(new RegExp(t.escapeRegex(l.groupSeparator),"g"),""),","===l.radixPoint&&(l.max=l.max.replace(l.radixPoint,".")),l.max=isFinite(l.max)?parseFloat(l.max):NaN,isNaN(l.max)&&(l.max=Number.MAX_VALUE)),l.parseMinMaxOptions="done"),null!==o.min||null!==o.max){if(s=o.onUnMask(a.join(""),i,e.extend({},o,{unmaskAsNumber:!0})),null!==o.min&&s<o.min)return o.isNegative=o.min<0,o.postValidation(o.min.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o);if(null!==o.max&&s>o.max)return o.isNegative=o.max<0,o.postValidation(o.max.toString().replace(".",o.radixPoint).split(""),{caret:r,dopost:!0,placeholder:"0"},o)}return o.postValidation(a,{caret:r,placeholder:"0",event:"blur"},o);case"_checkval":return{caret:r}}var l},regex:{integerPart:function(e,i){return i?new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?"):new RegExp("["+t.escapeRegex(e.negationSymbol.front)+"+]?\\d+")},integerNPart:function(e){return new RegExp("[\\d"+t.escapeRegex(e.groupSeparator)+t.escapeRegex(e.placeholder.charAt(0))+"]+")}},definitions:{"~":{validator:function(e,n,a,r,o,s){var l=r?new RegExp("[0-9"+t.escapeRegex(o.groupSeparator)+"]").test(e):new RegExp("[0-9]").test(e);if(!0===l){if(!0!==o.numericInput&&n.validPositions[a]!==i&&"~"===n.validPositions[a].match.def&&!s){var u=n.buffer.join(""),c=(u=(u=u.replace(new RegExp("[-"+t.escapeRegex(o.negationSymbol.front)+"]","g"),"")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back)+"$"),"")).split(o.radixPoint);c.length>1&&(c[1]=c[1].replace(/0/g,o.placeholder.charAt(0))),"0"===c[0]&&(c[0]=c[0].replace(/0/g,o.placeholder.charAt(0))),u=c[0]+o.radixPoint+c[1]||"";var p=n._buffer.join("");for(u===o.radixPoint&&(u=p);null===u.match(t.escapeRegex(p)+"$");)p=p.slice(1);l=(u=(u=u.replace(p,"")).split(""))[a]===i?{pos:a,remove:a}:{pos:a}}}else r||e!==o.radixPoint||n.validPositions[a-1]!==i||(n.buffer[a]="0",l={pos:a+1});return l},cardinality:1},"+":{validator:function(e,t,i,n,a){return a.allowMinus&&("-"===e||e===a.negationSymbol.front)},cardinality:1,placeholder:""},"-":{validator:function(e,t,i,n,a){return a.allowMinus&&e===a.negationSymbol.back},cardinality:1,placeholder:""},":":{validator:function(e,i,n,a,r){var o="["+t.escapeRegex(r.radixPoint)+"]",s=new RegExp(o).test(e);return s&&i.validPositions[n]&&i.validPositions[n].match.placeholder===r.radixPoint&&(s={caret:n+1}),s},cardinality:1,placeholder:function(e){return e.radixPoint}}},onUnMask:function(e,i,n){if(""===i&&!0===n.nullable)return i;var a=e.replace(n.prefix,"");return a=(a=a.replace(n.suffix,"")).replace(new RegExp(t.escapeRegex(n.groupSeparator),"g"),""),""!==n.placeholder.charAt(0)&&(a=a.replace(new RegExp(n.placeholder.charAt(0),"g"),"0")),n.unmaskAsNumber?(""!==n.radixPoint&&-1!==a.indexOf(n.radixPoint)&&(a=a.replace(t.escapeRegex.call(this,n.radixPoint),".")),a=(a=a.replace(new RegExp("^"+t.escapeRegex(n.negationSymbol.front)),"-")).replace(new RegExp(t.escapeRegex(n.negationSymbol.back)+"$"),""),Number(a)):a},isComplete:function(e,i){var n=e.join("");if(e.slice().join("")!==n)return!1;var a=n.replace(i.prefix,"");return a=(a=a.replace(i.suffix,"")).replace(new RegExp(t.escapeRegex(i.groupSeparator)+"([0-9]{3})","g"),"$1"),","===i.radixPoint&&(a=a.replace(t.escapeRegex(i.radixPoint),".")),isFinite(a)},onBeforeMask:function(e,n){if(n.isNegative=i,e=e.toString().charAt(e.length-1)===n.radixPoint?e.toString().substr(0,e.length-1):e.toString(),""!==n.radixPoint&&isFinite(e)){var a=e.split("."),r=""!==n.groupSeparator?parseInt(n.groupSize):0;2===a.length&&(a[0].length>r||a[1].length>r||a[0].length<=r&&a[1].length<r)&&(e=e.replace(".",n.radixPoint))}var o=e.match(/,/g),s=e.match(/\./g);if(e=s&&o?s.length>o.length?(e=e.replace(/\./g,"")).replace(",",n.radixPoint):o.length>s.length?(e=e.replace(/,/g,"")).replace(".",n.radixPoint):e.indexOf(".")<e.indexOf(",")?e.replace(/\./g,""):e.replace(/,/g,""):e.replace(new RegExp(t.escapeRegex(n.groupSeparator),"g"),""),0===n.digits&&(-1!==e.indexOf(".")?e=e.substring(0,e.indexOf(".")):-1!==e.indexOf(",")&&(e=e.substring(0,e.indexOf(",")))),""!==n.radixPoint&&isFinite(n.digits)&&-1!==e.indexOf(n.radixPoint)){var l=e.split(n.radixPoint)[1].match(new RegExp("\\d*"))[0];if(parseInt(n.digits)<l.toString().length){var u=Math.pow(10,parseInt(n.digits));e=e.replace(t.escapeRegex(n.radixPoint),"."),e=(e=Math.round(parseFloat(e)*u)/u).toString().replace(".",n.radixPoint)}}return e},canClearPosition:function(e,t,i,n,a){var r=e.validPositions[t],o=r.input!==a.radixPoint||null!==e.validPositions[t].match.fn&&!1===a.decimalProtect||r.input===a.radixPoint&&e.validPositions[t+1]&&null===e.validPositions[t+1].match.fn||isFinite(r.input)||t===i||r.input===a.groupSeparator||r.input===a.negationSymbol.front||r.input===a.negationSymbol.back;return!o||"+"!==r.match.nativeDef&&"-"!==r.match.nativeDef||(a.isNegative=!1),o},onKeyDown:function(i,n,a,r){var o=e(this);if(i.ctrlKey)switch(i.keyCode){case t.keyCode.UP:o.val(parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),o.trigger("setvalue");break;case t.keyCode.DOWN:o.val(parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),o.trigger("setvalue")}}},currency:{prefix:"$ ",groupSeparator:",",alias:"numeric",placeholder:"0",autoGroup:!0,digits:2,digitsOptional:!1,clearMaskOnLostFocus:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",digits:0,radixPoint:""},percentage:{alias:"numeric",digits:2,digitsOptional:!0,radixPoint:".",placeholder:"0",autoGroup:!1,min:0,max:100,suffix:" %",allowMinus:!1}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r;"function"==typeof Symbol&&Symbol.iterator,a=[i(0),i(1)],void 0!==(r="function"==typeof(n=function(e,t){function i(e,t){var i=(e.mask||e).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,""),n=(t.mask||t).replace(/#/g,"0").replace(/\)/,"0").replace(/[+()#-]/g,"");return i.localeCompare(n)}var n=t.prototype.analyseMask;return t.prototype.analyseMask=function(t,i,a){var r={};return a.phoneCodes&&(a.phoneCodes&&a.phoneCodes.length>1e3&&(function e(i,n,a){n=n||"",a=a||r,""!==n&&(a[n]={});for(var o="",s=a[n]||a,l=i.length-1;l>=0;l--)s[o=(t=i[l].mask||i[l]).substr(0,1)]=s[o]||[],s[o].unshift(t.substr(1)),i.splice(l,1);for(var u in s)s[u].length>500&&e(s[u].slice(),u,s)}((t=t.substr(1,t.length-2)).split(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])),t=function t(i){var n="",r=[];for(var o in i)e.isArray(i[o])?1===i[o].length?r.push(o+i[o]):r.push(o+a.groupmarker[0]+i[o].join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1]):r.push(o+t(i[o]));return 1===r.length?n+=r[0]:n+=a.groupmarker[0]+r.join(a.groupmarker[1]+a.alternatormarker+a.groupmarker[0])+a.groupmarker[1],n}(r)),t=t.replace(/9/g,"\\9")),n.call(this,t,i,a)},t.extendAliases({abstractphone:{groupmarker:["<",">"],countrycode:"",phoneCodes:[],keepStatic:"auto",mask:function(e){return e.definitions={"#":t.prototype.definitions[9]},e.phoneCodes.sort(i)},onBeforeMask:function(e,t){var i=e.replace(/^0{1,2}/,"").replace(/[\s]/g,"");return(i.indexOf(t.countrycode)>1||-1===i.indexOf(t.countrycode))&&(i="+"+t.countrycode+i),i},onUnMask:function(e,t,i){return e.replace(/[()#-]/g,"")},inputmode:"tel"}}),t})?n.apply(t,a):n)&&(e.exports=r)},function(e,t,i){"use strict";var n,a,r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a=[i(2),i(1)],void 0!==(r="function"==typeof(n=function(e,t){return void 0===e.fn.inputmask&&(e.fn.inputmask=function(i,n){var a,r=this[0];if(void 0===n&&(n={}),"string"==typeof i)switch(i){case"unmaskedvalue":return r&&r.inputmask?r.inputmask.unmaskedvalue():e(r).val();case"remove":return this.each(function(){this.inputmask&&this.inputmask.remove()});case"getemptymask":return r&&r.inputmask?r.inputmask.getemptymask():"";case"hasMaskedValue":return!(!r||!r.inputmask)&&r.inputmask.hasMaskedValue();case"isComplete":return!r||!r.inputmask||r.inputmask.isComplete();case"getmetadata":return r&&r.inputmask?r.inputmask.getmetadata():void 0;case"setvalue":e(r).val(n),r&&void 0===r.inputmask&&e(r).triggerHandler("setvalue");break;case"option":if("string"!=typeof n)return this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(n)});if(r&&void 0!==r.inputmask)return r.inputmask.option(n);break;default:return n.alias=i,a=new t(n),this.each(function(){a.mask(this)})}else{if("object"==(void 0===i?"undefined":o(i)))return a=new t(i),void 0===i.mask&&void 0===i.alias?this.each(function(){if(void 0!==this.inputmask)return this.inputmask.option(i);a.mask(this)}):this.each(function(){a.mask(this)});if(void 0===i)return this.each(function(){(a=new t(n)).mask(this)})}}),e.fn.inputmask})?n.apply(t,a):n)&&(e.exports=r)}]);
/* End */
;; /* /local/templates/centino-heat_s2/js/jquery.actual.min.js?15933478631239*/
; /* /local/templates/centino-heat_s2/js/jquery.fancybox.min.js?159334786322989*/
; /* /local/templates/centino-heat_s2/vendor/jquery.easing.js?15933478618097*/
; /* /local/templates/centino-heat_s2/vendor/jquery.appear.js?15933478613188*/
; /* /local/templates/centino-heat_s2/vendor/jquery.cookie.js?15933478612247*/
; /* /local/templates/centino-heat_s2/vendor/jquery.validate.min.js?159334786122254*/
; /* /local/templates/centino-heat_s2/js/jquery.uniform.min.js?15933478638308*/
; /* /local/templates/centino-heat_s2/js/jquery-ui.min.js?159334786332162*/
; /* /local/templates/centino-heat_s2/js/jqModal.min.js?15933478632622*/
; /* /local/templates/centino-heat_s2/js/detectmobilebrowser.min.js?15933478632059*/
; /* /local/templates/centino-heat_s2/vendor/flexslider/jquery.flexslider.min.js?159334786122239*/
; /* /local/templates/centino-heat_s2/js/velocity.js?159334786344791*/
; /* /local/templates/centino-heat_s2/js/velocity.ui.js?159334786313257*/
; /* /local/templates/centino-heat_s2/vendor/bootstrap.js?159334786127908*/
; /* /local/templates/centino-heat_s2/js/matchMedia.min.js?1593347863592*/
; /* /local/templates/centino-heat_s2/js/slick.min.js?159334786340073*/
; /* /local/templates/centino-heat_s2/vendor/OwlCarousel2-2.3.4/dist/owl.carousel.min.js?159334786144342*/
; /* /local/templates/centino-heat_s2/js/jquery.alphanumeric.min.js?1593347863942*/
; /* /local/templates/centino-heat_s2/js/jquery.autocomplete.min.js?159334786312531*/
; /* /local/templates/centino-heat_s2/js/jquery.mobile.custom.touch.min.js?15933478637784*/
; /* /local/templates/centino-heat_s2/js/custom.js?16092458692183*/
; /* /local/templates/centino-heat_s2/js/general.js?1605276331153572*/
; /* /local/templates/centino-heat_s2/js/jquery.mCustomScrollbar.min.js?159334786339899*/
; /* /local/templates/centino-heat_s2/components/bitrix/menu/left_3/script.js?1593347862624*/
; /* /bitrix/components/bitrix/search.title/script.min.js?15770776536443*/
; /* /local/templates/centino-heat_s2/components/bitrix/search.title/fixed/script.min.js?15933478636251*/
; /* /local/js/reaspekt/reaspekt.geobase/script.js?15940992934682*/
; /* /local/templates/centino-heat_s2/js/jquery.inputmask.bundle.min.js?159334786370933*/

//# sourceMappingURL=template_b4ec86e2168d44c655b9fa8b2392218f.map.js