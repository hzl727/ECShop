(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apiShop-goodsstatus-main"],{3536:function(t,a,e){"use strict";e.r(a);var i=e("ff48"),n=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(a,t,(function(){return i[t]}))}(s);a["default"]=n.a},6142:function(t,a,e){var i=e("ed77");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("54659537",i,!0,{sourceMap:!1,shadowMode:!1})},7265:function(t,a,e){"use strict";var i=e("6142"),n=e.n(i);n.a},ce35:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return s})),e.d(a,"a",(function(){return i}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[e("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),e("template",{attrs:{slot:"content"},slot:"content"},[t._v("拼团商品列表")])],2),e("div",{staticClass:"newgoods"},[e("div",{staticClass:"sortlist"},t._l(t.listData,(function(a,i){return e("div",{key:i,staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goodsDetail(a.goods_id)}}},[e("img",{attrs:{src:a.list_pic_url,alt:""}}),e("p",{staticClass:"name"},[t._v(t._s(a.goods_name))]),e("p",{staticClass:"price"},[t._v("¥"+t._s(a.pt_price))])])})),0)])],1)},s=[]},dd4d:function(t,a,e){"use strict";e.r(a);var i=e("ce35"),n=e("3536");for(var s in n)"default"!==s&&function(t){e.d(a,t,(function(){return n[t]}))}(s);e("7265");var o,r=e("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"89117b72",null,!1,i["a"],o);a["default"]=c.exports},ed77:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.newgoods .sortnav[data-v-89117b72]{display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;width:100%;height:%?78?%;line-height:%?78?%}.newgoods .sortnav div[data-v-89117b72]{width:%?250?%;height:100%;text-align:center}.newgoods .sortnav .active[data-v-89117b72]{color:#b4282d}.newgoods .sortnav .price[data-v-89117b72]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/no.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.newgoods .sortnav .active.desc[data-v-89117b72]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/down.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.newgoods .sortnav .active.asc[data-v-89117b72]{background:url(https://imgt1.oss-cn-shanghai.aliyuncs.com/ecAllRes/images/up.png) %?165?% 50% no-repeat;background-size:%?15?% %?21?%}.newgoods .sortlist[data-v-89117b72]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-flex-wrap:wrap;flex-wrap:wrap}.newgoods .sortlist .item[data-v-89117b72]{width:%?372.5?%;margin-bottom:%?5?%;text-align:center;background:#fff;padding:%?15?% 0}.newgoods .sortlist .item img[data-v-89117b72]{display:block;width:%?302?%;height:%?302?%;margin:0 auto}.newgoods .sortlist .item .name[data-v-89117b72]{margin:%?15?% 0 %?22?% 0;text-align:center;padding:0 %?20?%;font-size:%?24?%}.newgoods .sortlist .item .price[data-v-89117b72]{text-align:center;font-size:%?30?%;color:#b4282d}',""]),t.exports=a},ff48:function(t,a,e){"use strict";var i=e("4ea4");e("99af"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("96cf");var n=i(e("1da1")),s=e("54a3"),o={onReachBottom:function(){if(this.page=this.page+1,this.page>this.pagetotal)return!1;this.getlistData()},created:function(){},onLoad:function(t){this.isHot=t.isHot,this.isNew=t.isNew,this.id=t.id},mounted:function(){this.isHot&&(this.isHot=this.isHot),this.isNew&&(this.isNew=this.isNew),this.id=this.id,void 0===this.id&&(this.id=""),this.getlistData(!0)},data:function(){return{id:"",page:1,order:"",isHot:"",isNew:"",nowIndex:0,listData:[],activeClass:""}},components:{},methods:{getlistData:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function a(){var e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,(0,s.pintuanGoodsListApi)({page:t.page});case 2:e=a.sent,1==t.page&&(t.listData=e.data.list),t.pagetotal=e.data.pagetotal,t.page>1&&(t.listData=t.listData.concat(e.data.list));case 6:case"end":return a.stop()}}),a)})))()},goodsDetail:function(t){uni.navigateTo({url:"/apiShop/goods/main?id="+t})}},computed:{}};a.default=o}}]);