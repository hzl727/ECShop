(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiShop-topicdetail-main"],{"17d1":function(t,e,i){"use strict";var o=i("4ea4");i("99af"),i("caad"),i("c975"),i("acd8"),i("ac1f"),i("2532"),i("466d"),i("5319"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("b85c")),r=uni.getSystemInfoSync().windowWidth/750,a=i("dfd6"),s={name:"parser",data:function(){return{uid:this._uid,showAm:"",nodes:[]}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,i=this.length;e<i;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var i,o=e.split("://")[0],n=o.length;i=e[n];n++){if("/"==i&&"/"!=e[n-1]&&"/"!=e[n+1])break;o+=Math.random()>.5?i.toUpperCase():i}return o+=e.substr(n),this[t]=o}if(this[t]=e,e.includes("data:image")){var r=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!r)return}}}},mounted:function(){this.document=document.getElementById("rtf"+this._uid),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{setContent:function(t,e){var i=this;if(t){var o=document.createElement("div");e?this.rtf?this.rtf.appendChild(o):this.rtf=o:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=o),o.innerHTML=this._handleHtml(t,e);for(var r,s=this.rtf.getElementsByTagName("style"),l=0;r=s[l++];)r.innerHTML=r.innerHTML.replace(/body/g,"#rtf"+this._uid),r.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,o=0;e=t[o++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),i._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var d=this,c=this.rtf.getElementsByTagName("title");c.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:c[0].innerText}),this.imgList.length=0;for(var f,u=this.rtf.getElementsByTagName("img"),h=0,g=0;f=u[h];h++){var p=f.getAttribute("src");this.domain&&p&&("/"==p[0]?"/"==p[1]?f.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+p:f.src=this.domain+p:p.includes("://")||(f.src=this.domain+"/"+p)),f.hasAttribute("ignore")||"A"==f.parentElement.nodeName||(f.i=g++,d.imgList.push(f.src||f.getAttribute("data-src")),f.onclick=function(){var t=!0;this.ignore=function(){return t=!1},d.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:d.imgList})}),f.onerror=function(){a.errorImg&&(d.imgList[this.i]=this.src=a.errorImg),d.$emit("error",{source:"img",target:this})},d.lazyLoad&&this._observer&&f.src&&0!=f.i&&(f.setAttribute("data-src",f.src),f.removeAttribute("src"),this._observer.observe(f))}var v,m=this.rtf.getElementsByTagName("a"),b=(0,n.default)(m);try{for(b.s();!(v=b.n()).done;){var w=v.value;w.onclick=function(){var t=!0,e=this.getAttribute("href");if(d.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])d.useAnchor&&d.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(E){b.e(E)}finally{b.f()}var y=this.rtf.getElementsByTagName("video");d.videoContexts=y;for(var x,_=0;x=y[_++];)x.style.maxWidth="100%",x.onerror=function(){d.$emit("error",{source:"video",target:this})},x.onplay=function(){if(d.autopause)for(var t,e=0;t=d.videoContexts[e++];)t!=this&&t.pause()};var k,T,A=this.rtf.getElementsByTagName("audio"),C=(0,n.default)(A);try{for(C.s();!(k=C.n()).done;){var S=k.value;S.onerror=function(){d.$emit("error",{source:"audio",target:this})}}}catch(E){C.e(E)}finally{C.f()}if(this.autoscroll){var L,z=this.rtf.getElementsByTagName("table"),B=(0,n.default)(z);try{for(B.s();!(L=B.n()).done;){var I=L.value,j=document.createElement("div");j.style.overflow="scroll",I.parentNode.replaceChild(j,I),j.appendChild(I)}}catch(E){B.e(E)}finally{B.f()}}e||this.document.appendChild(this.rtf),this.$nextTick((function(){i.nodes=[1],i.$emit("load")})),setTimeout((function(){return i.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){i.rect=i.rtf.getBoundingClientRect(),i.rect.height==T&&(i.$emit("ready",i.rect),clearInterval(i._timer)),T=i.rect.height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:_show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;var t="";return t=this.rtf.innerText,t},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(t){var e=this;if(!this.useAnchor)return t.fail&&t.fail("Anchor is disabled");var i=" ",o=uni.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(t.id?"".concat(i,"#").concat(t.id,",").concat(this._in?this._in.selector:"#_top").concat(i,".").concat(t.id):"")).boundingClientRect();this._in?o.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():o.selectViewport().scrollOffset(),o.exec((function(i){if(!i[0])return t.fail&&t.fail("Label not found");var o=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(t.offset||0);e._in?e._in.page[e._in.scrollTop]=o:uni.pageScrollTo({scrollTop:o,duration:300}),t.success&&t.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},_handleHtml:function(t,e){if(!e){var i="<style scoped>@keyframes _show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var o in a.userAgentStyles)i+="".concat(o,"{").concat(a.userAgentStyles[o],"}");for(o in this.tagStyle)i+="".concat(o,"{").concat(this.tagStyle[o],"}");i+="</style>",t=i+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*r+"px"}))),t}}};e.default=s},"1a2e":function(t,e,i){var o=i("fe97");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("6f3d9551",o,!0,{sourceMap:!1,shadowMode:!1})},"1ff1":function(t,e,i){"use strict";var o=i("4ea4");i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=o(i("1da1")),r=i("54a3"),a=o(i("255f")),s={created:function(){},onLoad:function(t){this.id=t.id},mounted:function(){this.id=this.id,this.getListData(),this.getArticleGoods()},data:function(){return{recommendList:[],id:"",goods_desc:"",topicdetaillength:"",list:[]}},components:{jyfParser:a.default},methods:{topicdetail:function(t){uni.navigateTo({url:"/apiShop/topicdetail/main?id="+t})},goumaisuper:function(t){uni.navigateTo({url:"/apiShop/goods/main?id="+t})},getListData:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.topicdetailListApi)({id:t.id});case 2:i=e.sent,t.goods_desc=i.data.content.replace(/\<img/gi,'<img style="max-width:100%;height:auto;vertical-align: bottom;" '),t.topicdetaillength=t.goods_desc.length,t.recommendList=i.recommendList;case 6:case"end":return e.stop()}}),e)})))()},getArticleGoods:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,r.getArticleGoodsApi)({id:t.id});case 2:i=e.sent,t.list=i.data;case 4:case"end":return e.stop()}}),e)})))()},replace:function(t){return t.replace("<o:p></o:p>","")}},computed:{}};e.default=s},"255f":function(t,e,i){"use strict";i.r(e);var o=i("d63d"),n=i("f02f");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("cb65");var a,s=i("f0c5"),l=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"31692fe8",null,!1,o["a"],a);e["default"]=l.exports},"646e":function(t,e,i){"use strict";i.r(e);var o=i("1ff1"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},9103:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.topicdetail .list[data-v-f78fcd50]{width:%?690?%;height:auto;margin:0 %?30?%}.topicdetail .list .title[data-v-f78fcd50]{text-align:center;background:#f4f4f4;font-size:%?30?%;color:#999;padding:%?30?% 0}.topicdetail .list .item[data-v-f78fcd50]{width:100%;padding:%?24?% %?24?% %?30?% %?24?%;margin-bottom:%?30?%;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box}.topicdetail .list .item img[data-v-f78fcd50]{height:%?278?%;width:%?642?%;display:block}.topicdetail .list .item p[data-v-f78fcd50]{display:block;margin-top:%?30?%;font-size:%?28?%}.newgoods[data-v-f78fcd50]{position:fixed;bottom:0;width:100%}.newgoods .newgoods-top[data-v-f78fcd50]{margin-top:%?20?%;height:%?88?%;width:100%;background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/bgnew.png) no-repeat;background-size:100% 100%;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.newgoods .newgoods-top .top[data-v-f78fcd50]{width:100%;padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.newgoods .newgoods-top .top p[data-v-f78fcd50]{color:#8c9bae;font-size:%?32?%}.newgoods .newgoods-top .top p[data-v-f78fcd50]:nth-child(2){width:%?180?%;height:%?50?%;line-height:%?50?%;font-size:%?22?%;background:#d8e4f0}.newgoods .newgoods-top .list[data-v-f78fcd50]{-webkit-border-radius:0 0 %?10?% %?10?%;border-radius:0 0 %?10?% %?10?%;background:#fff;padding-top:0}.newgoods .newgoods-top .list ul li[data-v-f78fcd50]{width:%?230?%;padding-left:0;margin-bottom:%?30?%;border-right:0 none;display:inline-block}.newgoods .newgoods-top .list ul li img[data-v-f78fcd50]{width:%?230?%;height:%?230?%;border:0 none;display:block;background:#f5f5f5}.newgoods .newgoods-top .list ul li .goods-name[data-v-f78fcd50]{width:100%;height:%?82?%;line-height:%?36?%;line-clamp:2;overflow:hidden;white-space:normal;text-overflow:ellipsis}.newgoods .newgoods-top .list ul li .goods-name .name[data-v-f78fcd50]{font-size:%?26?%;margin-top:%?8?%}.newgoods .newgoods-top .list ul li .price[data-v-f78fcd50]{font-size:%?28?%;margin-top:%?8?%;color:#b4282d;padding:%?6?%}.newgoods .newgoods-top .list ul li .price .del[data-v-f78fcd50]{color:#999;font-size:%?26?%;padding-left:%?10?%;margin-left:%?5?%;text-decoration:line-through}.newgoods .newgoods-top .list ul li .activity[data-v-f78fcd50]{font-size:%?22?%;color:#b4282d;border:#b4282d solid %?1?%;-webkit-border-radius:%?13?%;border-radius:%?13?%;padding:%?3?% %?6?%;margin-top:%?8?%}.newgoods .newgoods-top .list ul li .note[data-v-f78fcd50]{width:%?34?%;background:#fff;border:%?1?% solid #b4a078;position:relative;top:0;padding:%?12?% 0;margin-left:%?10?%;margin-top:%?10?%}.newgoods .newgoods-top .list ul li .note .blocks[data-v-f78fcd50]{width:%?32?%;line-height:%?26?%;text-align:center;color:#b4a078;font-size:%?26?%}.newgoods .newgoods-top .list ul li[data-v-f78fcd50]:nth-child(n+2){border-left:0 none}.newgoods .newgoods-top .list ul li[data-v-f78fcd50]:nth-child(3n){margin-right:0}.newgoods .list[data-v-f78fcd50]{margin-top:%?20?%;background:#fff;padding-bottom:%?10?%}.newgoods .list ul[data-v-f78fcd50]{padding:0}.newgoods .list ul .scroll-view[data-v-f78fcd50]{width:100%;white-space:nowrap}.newgoods .list ul .scroll-view li[data-v-f78fcd50]{width:%?237?%;padding-left:%?0?%;padding-bottom:%?20?%;margin-right:%?0?%;border-right:0 none;vertical-align:top;display:inline-block;padding:0 0 0 %?22?%}.newgoods .list ul .scroll-view li img[data-v-f78fcd50]{width:%?215?%;height:%?215?%;border:0 none;display:block;background:#f5f5f5}.newgoods .list ul .scroll-view li p[data-v-f78fcd50]:nth-child(2){font-size:%?26?%;width:94%;line-height:%?36?%;line-clamp:2;overflow:hidden;word-break:break-all;text-overflow:ellipsis}.newgoods .list ul .scroll-view li p[data-v-f78fcd50]:nth-child(3){color:#8a8a8a;font-size:%?24?%}.newgoods .list ul .scroll-view li p[data-v-f78fcd50]:nth-child(4){color:#9c3232;font-size:%?24?%}.newgoods .list ul .scroll-view li p[data-v-f78fcd50]{width:94%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-top:%?8?%}.newgoods .list ul .scroll-view li[data-v-f78fcd50]:nth-child(n+2){border-left:%?1?% solid #f4f4f4}',""]),t.exports=e},b29b:function(t,e,i){"use strict";i.r(e);var o=i("e40d"),n=i("646e");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("bd54");var a,s=i("f0c5"),l=Object(s["a"])(n["default"],o["b"],o["c"],!1,null,"f78fcd50",null,!1,o["a"],a);e["default"]=l.exports},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=n(i("06c5"));function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,o.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){l=!0,a=t},f:function(){try{s||null==i["return"]||i["return"]()}finally{if(l)throw a}}}}},bcf5:function(t,e,i){var o=i("9103");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("2ef90e1a",o,!0,{sourceMap:!1,shadowMode:!1})},bd54:function(t,e,i){"use strict";var o=i("bcf5"),n=i.n(o);n.a},cb65:function(t,e,i){"use strict";var o=i("1a2e"),n=i.n(o);n.a},d63d:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.nodes.length?t._e():t._t("default"),i("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"_top"}},[i("div",{attrs:{id:"rtf"+t.uid}})])],2)},r=[]},dfd6:function(t,e,i){function o(t){for(var e=Object.create(null),i=t.split(","),o=i.length;o--;)e[i[o]]=!0;return e}i("ac1f"),i("1276"),t.exports={errorImg:null,filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:o(" , ,\t,\r,\n,\f"),boolAttrs:o("allowfullscreen,autoplay,autostart,controls,ignore,loop,muted"),blockTags:o("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),ignoreTags:o("area,base,canvas,frame,input,link,map,meta,param,script,source,style,svg,textarea,title,track,wbr,iframe"),richOnlyTags:o("a,colgroup,fieldset,legend,table"),selfClosingTags:o("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustTags:o("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}}},e40d:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return o}));var o={jyfParser:i("255f").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("文章详情")])],2),i("div",{staticClass:"topicdetail"},[i("div",{staticClass:"content"},[0!=t.topicdetaillength?i("div",{staticClass:"detail",domProps:{innerHTML:t._s(t.replace(t.goods_desc))}},[i("jyf-parser",{ref:"article",attrs:{html:t.goods_desc}})],1):i("div",{staticStyle:{"text-align":"center"}},[t._v("该文章一篇空白,什么都没有~~")])])]),i("div",{staticClass:"newgoods hotgoods"},[i("div",{staticClass:"list"},[i("ul",[i("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-x":!0}},t._l(t.list,(function(e,o){return i("li",{key:o,on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goumaisuper(e.goods_id)}}},[i("img",{attrs:{src:e.goods_thumb,alt:""}}),i("p",[t._v(t._s(e.goods_name))]),i("p",[i("span",{staticStyle:{color:"#000000"}},[t._v("本店售价：")]),i("span",{staticStyle:{color:"red"}},[t._v(t._s(e.shop_price))])])])})),0)],1)])])],1)},r=[]},f02f:function(t,e,i){"use strict";i.r(e);var o=i("17d1"),n=i.n(o);for(var r in o)"default"!==r&&function(t){i.d(e,t,(function(){return o[t]}))}(r);e["default"]=n.a},fe97:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,"@-webkit-keyframes _show-data-v-31692fe8{0%{opacity:0}100%{opacity:1}}@keyframes _show-data-v-31692fe8{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e}}]);