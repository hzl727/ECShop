(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiUtil-casualpurchase-main"],{"06fc":function(t,e,i){"use strict";var a=i("56ee"),n=i.n(a);n.a},"18ab":function(t,e,i){"use strict";(function(t){i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{goods_id:{type:Number,default:0},src:{type:String,default:""},address:{type:String,default:""},goods_name:{type:String,default:""},shop_price:{type:String,default:""},number:{type:Number,default:1},heat_number:{type:Number,default:1},goods_number:{type:String,default:""}},data:function(){return{loveAnimation:{0:{}},loatheAnimation:{0:{}},loveAni:null,loatheAni:null}},mounted:function(){this.loveAni=uni.createAnimation({duration:0}),this.loatheAni=uni.createAnimation({duration:0})},methods:{clearAnimation:function(){this.loveAnimation[0]=this.loveAni.export(),this.loatheAnimation[0]=this.loatheAni.export()},_back:function(){this.loveAni=uni.createAnimation({duration:200}),this.loatheAni=uni.createAnimation({duration:200}),this.loveAni.opacity(0).step(),this.loveAnimation[0]=this.loveAni.export(),this.loatheAni.opacity(0).step(),this.loatheAnimation[0]=this.loatheAni.export()},moveRight:function(t){this.loveAni.opacity(.3+.7*t).step(),this.loveAnimation[0]=this.loveAni.export(),this.loatheAni.opacity(0).step(),this.loatheAnimation[0]=this.loatheAni.export()},moveLeft:function(t){this.loveAni.opacity(0).step(),this.loveAnimation[0]=this.loveAni.export(),this.loatheAni.opacity(.3+.7*t).step(),this.loatheAnimation[0]=this.loatheAni.export()},moveCenter:function(){this.loveAni.opacity(.3).step(),this.loveAnimation[0]=this.loveAni.export(),this.loatheAni.opacity(.3).step(),this.loatheAnimation[0]=this.loatheAni.export()}},watch:{cardData:function(e){t.log(e),this.item=e}}};e.default=a}).call(this,i("5a52")["default"])},"29a7":function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("ade3")),o=a(i("b85c")),s=a(i("5530"));i("96cf");var r=a(i("1da1")),d=(0,n.default)({data:function(){return{number:2,moveRotate:{x:0,y:0},delMoveD:2*uni.getSystemInfoSync().screenHeight,touchMoveD:100,rotate:0,scale:{x:1,y:1},skew:{x:0,y:0},translate:{x:0,y:0},opacity:1,currentIndex:0,moveX:0,moveY:0,oldTouces:{},oldMove:{},touchAnimation:null,animationData:{},dataList:[],delTime:200,cardId:0,x:0,y:0,sysHeight:0,sysWidth:0}},created:function(){this.init(),this.sysHeight=uni.getSystemInfoSync().windowHeight,this.sysWidth=uni.getSystemInfoSync().windowWidth},mounted:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.createAnimation(),t.getData();case 2:case"end":return e.stop()}}),e)})))()},methods:{init:function(){},getData:function(){},createAnimation:function(){this.touchAnimation=uni.createAnimation({duration:0}),this.moveAnimation=uni.createAnimation({duration:0}),this.delanimation=uni.createAnimation({duration:this.delTime}),this.endanimation=uni.createAnimation({duration:200})},touchStart:function(t){this.oldTouces=t.touches[0]},touchMove:function(t){var e=this.oldTouces,i=t.touches[0];this.moveX=i.clientX-e.clientX,this.moveY=i.clientY-e.clientY,this.dataList[0].moveX=this.moveX,this.dataList[0].moveY=this.moveY,this.dataList[0].animation=!1;var a=this.calcAngleDegrees(this.moveX-this.moveRotate.x,this.moveY-this.moveRotate.y);this.touchAnimation.rotate(a).step(),this.animationData[0]=this.touchAnimation.export();var n=this.moveX*this.moveX+this.moveY*this.moveY,o=Math.sqrt(n)/this.touchMoveD;o=o>1?1:o;for(var s=1;s<this.number;s++)0!=this.rotate&&this.moveAnimation.rotate(this.rotate*(s-o)),1!=this.opacity&&this.moveAnimation.opacity(1-(1-this.opacity)*(s-o)),1!=this.scale.x&&this.moveAnimation.scaleX(1-(1-this.scale.x)*(s-o)),1!=this.scale.y&&this.moveAnimation.scaleY(1-(1-this.scale.y)*(s-o)),0!=this.skew.x&&this.moveAnimation.skewX(this.skew.x*(s-o)),0!=this.skew.y&&this.moveAnimation.skewY(this.skew.y*(s-o)),0!=this.translate.x&&this.moveAnimation.translateX(this.translate.x*(s-o)),0!=this.translate.y&&this.moveAnimation.translateY(this.translate.y*(s-o)),this.moveAnimation.step(),this.animationData[s]=this.moveAnimation.export();this.moveJudge(this.moveX,this.moveY,o)},touchend:function(t){this.endJudge(this.moveX,this.moveY)},moveJudge:function(t,e,i){},endJudge:function(t,e){this._del()},_back:function(){var t=this;this.oldMove,this.calcAngleDegrees(this.moveX-this.moveRotate.x,this.moveY-this.moveRotate.y);this.moveX=0,this.moveY=0,this.dataList[0].moveX=0,this.dataList[0].moveY=0,this.dataList[0].animation=!0,this.delanimation.translateX(this.moveX).translateY(this.moveY).rotate(0).step(),this.animationData[0]=this.delanimation.export(),setTimeout((function(){t.animationData[0]=t.delanimation.export();for(var e=1;e<t.number;e++)t.animationData[e]=t.moveAnimation.export();t.moveX=0,t.moveY=0}),this.delTime);for(var e=0,i=1;i<this.number;i++)0!=this.rotate&&this.endanimation.rotate(this.rotate*(i-e)),1!=this.opacity&&this.endanimation.opacity(1-(1-this.opacity)*(i-e)),1!=this.scale.x&&this.endanimation.scaleX(1-(1-this.scale.x)*(i-e)),1!=this.scale.y&&this.endanimation.scaleY(1-(1-this.scale.y)*(i-e)),0!=this.skew.x&&this.endanimation.skewX(this.skew.x*(i-e)),0!=this.skew.y&&this.endanimation.skewY(this.skew.y*(i-e)),0!=this.translate.x&&this.endanimation.translateX(this.translate.x*(i-e)),0!=this.translate.y&&this.endanimation.translateY(this.translate.y*(i-e)),this.endanimation.step(),this.animationData[i]=this.endanimation.export()},_del:function(){var t=this,e=this.moveX*this.moveX+this.moveY*this.moveY,i=this.moveY*this.delMoveD/Math.sqrt(e),a=this.moveX*this.delMoveD/Math.sqrt(e);this.delanimation.translateX(a).translateY(i).step(),this.animationData[0]=this.delanimation.export(),setTimeout((function(){t.animationData[0]=t.delanimation.export();for(var e=1;e<t.number;e++)t.animationData[e]=t.moveAnimation.export();t.currentIndex++,t.delCard(t.moveX,t.moveY),t.moveX=0,t.moveY=0,t.dataList[0].moveX=0,t.dataList[0].moveY=0,t.dataList.splice(0,1),t.dataList.length<=t.number&&t.getData()}),this.delTime);for(var n=1,o=1;o<this.number;o++)0!=this.rotate&&this.endanimation.rotate(this.rotate*(o-n)),1!=this.opacity&&this.endanimation.opacity(1-(1-this.opacity)*(o-n)),1!=this.scale.x&&this.endanimation.scaleX(1-(1-this.scale.x)*(o-n)),1!=this.scale.y&&this.endanimation.scaleY(1-(1-this.scale.y)*(o-n)),0!=this.skew.x&&this.endanimation.skewX(this.skew.x*(o-n)),0!=this.skew.y&&this.endanimation.skewY(this.skew.y*(o-n)),0!=this.translate.x&&this.endanimation.translateX(this.translate.x*(o-n)),0!=this.translate.y&&this.endanimation.translateY(this.translate.y*(o-n)),this.endanimation.step(),this.animationData[o]=this.endanimation.export()},delCard:function(){t.log(this.dataList[0])},calcAngleDegrees:function(t,e){return 180*Math.atan2(e,t)/Math.PI+90}},watch:{}},"watch",{number:{immediate:!0,handler:function(t,e){for(var i=0;i<t;i++){var a={};a[i]={},this.animationData=(0,s.default)((0,s.default)({},this.animationData),a)}}},dataList:{handler:function(t,e){var i,a=(0,o.default)(t);try{for(a.s();!(i=a.n()).done;){var n=i.value;n._id||(n._id=this.cardId++,n.moveX=0,n.moveY=0,n.moveY=0,n.animation=!1)}}catch(s){a.e(s)}finally{a.f()}}}});e.default=d}).call(this,i("5a52")["default"])},"2b46":function(t,e,i){"use strict";i.r(e);var a=i("d779"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"3e90":function(t,e,i){"use strict";i.r(e);var a=i("18ab"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"47a8":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("随心购")])],2),i("v-uni-view",{staticClass:"page",style:{height:t.sysHeight+"px",width:t.sysWidth+"px"}},[i("v-uni-movable-area",{staticClass:"move-area",style:{height:3*t.sysHeight+"px",width:3*t.sysWidth+"px",top:-t.sysHeight+"px",left:-t.sysWidth+"px"}},t._l(t.dataList,(function(e,a){return a<=t.number?i("v-uni-movable-view",{key:e._id,staticClass:"move-view",style:{zIndex:""+(99999-e._id)},attrs:{id:"move",direction:"all",x:e.moveX,y:e.moveY,"out-of-bounds":!0,disabled:0!=a,animation:e.animation},on:{touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchend.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.tapCard(e)}}},[i("v-uni-view",{staticClass:"cardBox",style:{transform:a<t.number?"rotate("+t.rotate*a+"deg) scale("+(1-(1-t.scale.x)*a)+","+(1-(1-t.scale.y)*a)+") skew("+t.skew.x*a+"deg, "+t.skew.y*a+"deg) translate("+t.translate.x*a+"px, "+t.translate.y*a+"px)":"rotate("+t.rotate*(t.number-1)+"deg) scale("+(1-(1-t.scale.x)*(t.number-1))+","+(1-(1-t.scale.y)*(t.number-1))+") skew("+t.skew.x*(t.number-1)+"deg, "+t.skew.y*(t.number-1)+"deg) translate("+t.translate.x*(t.number-1)+"px, "+t.translate.y*(t.number-1)+"px)",opacity:a<t.number?""+(1-(1-t.opacity)*a):""+(1-(1-t.opacity)*(t.number-1))},attrs:{animation:t.animationData[a]}},[i("card-box",{ref:"cardBox",refInFor:!0,attrs:{goods_id:e.goods_id,src:e.src,address:e.address,goods_name:e.goods_name,shop_price:e.shop_price,number:e.number,heat_number:e.heat_number,goods_number:e.goods_number}})],1)],1):t._e()})),1)],1)],1)},o=[]},"56ee":function(t,e,i){var a=i("aad9");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("bad21f4c",a,!0,{sourceMap:!1,shadowMode:!1})},"6b90":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.page[data-v-895b644c]{width:100%;position:absolute;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.move-area[data-v-895b644c]{position:absolute}.move-view[data-v-895b644c]{width:%?600?%;position:absolute;height:%?900?%;left:50%;top:50%;margin-left:%?-300?%;margin-top:%?-500?%}.cardBox[data-v-895b644c]{position:relative;width:%?600?%;height:%?800?%}',""]),t.exports=e},aad9:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */@font-face{font-family:iconfont;src:url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2")}.iconfont[data-v-53d1b7a9]{font-family:iconfont!important;font-size:12px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-v[data-v-53d1b7a9]:before{content:"\\e670"}.icon-male[data-v-53d1b7a9]:before{content:"\\e600"}.icon-wujiaoxing1[data-v-53d1b7a9]:before{content:"\\e602"}.icon-chacha1[data-v-53d1b7a9]:before{content:"\\e646"}.icon-genwozou[data-v-53d1b7a9]:before{content:"\\e61d"}.icon-xinaixin[data-v-53d1b7a9]:before{content:"\\e601"}.icon-tupian1[data-v-53d1b7a9]:before{content:"\\e718"}.icon-xingbie-nv[data-v-53d1b7a9]:before{content:"\\e677"}.cardBox[data-v-53d1b7a9]{position:relative;width:100%;height:100%;overflow:hidden;background-color:#fff;-webkit-border-radius:%?20?%;border-radius:%?20?%;border:2px solid #e9e7ef}.cardBox .top[data-v-53d1b7a9]{width:%?600?%;height:%?600?%}.cardBox .top .img-top[data-v-53d1b7a9]{position:absolute;font-size:12px;top:%?20?%;padding:0 %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;width:%?560?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;z-index:999}.cardBox .top .img-top .img-left[data-v-53d1b7a9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff}.cardBox .top .img-top .img-left .img-number[data-v-53d1b7a9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?%;background-color:rgba(0,0,0,.2);-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-right:%?20?%}.cardBox .top .img-top .img-left .img-number .tupian[data-v-53d1b7a9]{margin-right:%?5?%}.cardBox .top .img-top .img-left .img-zou[data-v-53d1b7a9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?%;background-color:rgba(0,0,0,.4);-webkit-border-radius:%?10?%;border-radius:%?10?%}.cardBox .top .img-top .img-left .img-zou .genwozou[data-v-53d1b7a9]{margin-right:%?20?%}.cardBox .top .img-top .img-right[data-v-53d1b7a9]{width:%?50?%;height:%?50?%;-webkit-border-radius:50%;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#54c7fc;color:#fff}.cardBox .top .img[data-v-53d1b7a9]{width:%?600?%;height:%?600?%}.cardBox .top .love[data-v-53d1b7a9]{position:absolute;width:%?120?%;height:%?120?%;top:%?60?%;left:%?40?%;-webkit-border-radius:50%;border-radius:50%;background-color:#ea2a36;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:999;color:#fff;opacity:0}.cardBox .top .loathe[data-v-53d1b7a9]{position:absolute;width:%?120?%;height:%?120?%;top:%?60?%;right:%?40?%;-webkit-border-radius:50%;border-radius:50%;background-color:#a09e9f;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;z-index:999;color:#fff;opacity:0}.cardBox .bottom[data-v-53d1b7a9]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;padding:%?10?% %?20?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#202020}.cardBox .bottom .labelBox[data-v-53d1b7a9]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.cardBox .bottom .labelBox .label[data-v-53d1b7a9]{padding:%?10?%;font-size:12px;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-border-radius:%?8?%;border-radius:%?8?%;margin-right:%?15?%}.cardBox .bottom .labelBox .sex[data-v-53d1b7a9]{margin-right:%?5?%}.cardBox .bottom .address[data-v-53d1b7a9]{margin-top:%?10?%;font-size:12px;color:#b9b9b9}.cardBox .bottom .star[data-v-53d1b7a9]{position:absolute;width:%?120?%;height:%?120?%;top:%?-60?%;right:%?50?%;-webkit-border-radius:50%;border-radius:50%;background-image:-webkit-gradient(linear,right top,left bottom,from(#87deff),to(#1faeff));background-image:-webkit-linear-gradient(top right,#87deff,#1faeff);background-image:linear-gradient(to bottom left,#87deff,#1faeff);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff}',""]),t.exports=e},af37:function(t,e,i){"use strict";var a=i("d5e1"),n=i.n(a);n.a},b85c:function(t,e,i){"use strict";i("a4d3"),i("e01a"),i("d28b"),i("d3b7"),i("3ca3"),i("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a=n(i("06c5"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var i;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=(0,a.default)(t))||e&&t&&"number"===typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,d=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return r=t.done,t},e:function(t){d=!0,s=t},f:function(){try{r||null==i["return"]||i["return"]()}finally{if(d)throw s}}}}},d5e1:function(t,e,i){var a=i("6b90");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("33fc2d4d",a,!0,{sourceMap:!1,shadowMode:!1})},d6b1:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"cardBox"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"img-top"},[i("v-uni-view",{staticClass:"img-left"},[i("v-uni-view",{staticClass:"img-zou"},[i("v-uni-view",{staticClass:"iconfont icon-genwozou genwozou"}),t._v("商品热度"+t._s(t.heat_number))],1)],1),i("v-uni-view",{staticClass:"img-right"},[i("v-uni-view",{staticClass:"iconfont icon-v"})],1)],1),i("v-uni-view",{staticClass:"love",attrs:{animation:t.loveAnimation[0]}},[i("v-uni-view",{staticClass:"iconfont icon-xinaixin",style:{fontSize:"60rpx"}})],1),i("v-uni-view",{staticClass:"loathe",attrs:{animation:t.loatheAnimation[0]}},[i("v-uni-view",{staticClass:"iconfont icon-chacha1",style:{fontSize:"60rpx"}})],1),i("v-uni-image",{staticClass:"img",attrs:{src:t.src}})],1),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-view",{staticClass:"star"},[i("v-uni-view",{staticClass:"iconfont icon-wujiaoxing1",style:{fontSize:"60rpx"}})],1),i("v-uni-view",[t._v(t._s(t.goods_name))]),i("v-uni-view",{staticClass:"labelBox"},[i("v-uni-view",{staticClass:"label",style:{backgroundColor:"#A4C742"}},[t._v(t._s(t.shop_price))]),i("v-uni-view",{staticClass:"label",style:{backgroundColor:"#7BD8FF"}},[t._v(t._s(t.goods_number))])],1)],1)],1)},o=[]},d779:function(t,e,i){"use strict";(function(t){var a=i("4ea4");i("99af"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("2909")),o=a(i("b85c"));i("96cf");var s=a(i("1da1")),r=i("54a3"),d=a(i("29a7")),c=a(i("e9a5")),l={mixins:[d.default],components:{cardBox:c.default},data:function(){return{}},onLoad:function(){},mounted:function(){},methods:{init:function(){this.number=3,this.translate={x:0,y:8},this.scale={x:.95,y:1},this.type=!0,this.moveRotate={x:0,y:uni.getSystemInfoSync().screenHeight}},getData:function(){var e=this;return(0,s.default)(regeneratorRuntime.mark((function i(){var a,s,d,c,l;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.log(123123123),i.next=3,(0,r.casualPurchaseApi)({});case 3:a=i.sent,s=[],d=(0,o.default)(a.data);try{for(d.s();!(c=d.n()).done;)l=c.value,s.push({goods_id:Number(l.goods_id),src:l.url,address:"CCC制造商",goods_name:l.goods_name,shop_price:"￥"+l.shop_price,number:1,heat_number:Number(l.heat_number),goods_number:"库存："+l.goods_number})}catch(u){d.e(u)}finally{d.f()}e.dataList=[].concat((0,n.default)(e.dataList),s);case 8:case"end":return i.stop()}}),i)})))()},moveJudge:function(t,e,i){var a=this.$refs.cardBox[0];t>20?a.moveRight(i):t<-20?a.moveLeft(i):a.moveCenter()},endJudge:function(t,e){var i=this.$refs.cardBox[0];Math.abs(t)<40?(this._back(),i._back()):(this._del(),i.clearAnimation())},delCard:function(e,i){e>0?t.log(this.dataList[0],"喜欢"):t.log(this.dataList[0],"不喜欢")},tapCard:function(e){t.log(e,"点击"),uni.navigateTo({url:"/apiShop/goods/main?id="+e.goods_id})}}};e.default=l}).call(this,i("5a52")["default"])},e9a5:function(t,e,i){"use strict";i.r(e);var a=i("d6b1"),n=i("3e90");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("06fc");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"53d1b7a9",null,!1,a["a"],s);e["default"]=d.exports},f005:function(t,e,i){"use strict";i.r(e);var a=i("47a8"),n=i("2b46");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("af37");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"895b644c",null,!1,a["a"],s);e["default"]=d.exports}}]);