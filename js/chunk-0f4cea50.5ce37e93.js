(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f4cea50"],{"4b66":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShowAboutUsOfWidth&&t.isShowAboutUsOfRouter?i("div",{class:{aboutUs:!0,aboutUsHidden:t.isShowAboutUsOfWidth&&t.isShowAboutUsOfRouter}},[i("nav-bar",{attrs:{noMask:!1}}),i("mask-list"),i("div",{class:{aboutUsOfMobile:!0,bannerTop:!(t.isiOS||t.isAndroid)}},[i("div",{staticClass:"defect"},[i("div",{staticClass:"defectImgWarp"}),i("p",{staticClass:"defectTitle"},[t._v("页面丢失")]),i("span",{staticClass:"defecttext"},[t._v("页面错误，相关论文暂时只能在PC端上访问")]),i("div",{staticClass:"defectBtn",on:{click:t.handleClickGoHome}},[t._v("\n          返回首页\n        ")])])])],1):i("div",{staticClass:"aboutUs"},[i("nav-bar"),i("mask-list"),i("div",{class:{banner:!0,bannerTop:!(t.isiOS||t.isAndroid)}},[i("h1",[t._v(t._s(t.$t("aboutLanguge.bannerTitle")))])]),i("div",{staticClass:"main"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"nav col-xs-12 col-md-2 "},[i("div",{staticClass:"nullDom hidden-xs hidden-sm"}),i("ul",{staticClass:"nav-list"},[i("router-link",{attrs:{to:"/aboutUs/laboratory",tag:"li","active-class":"active-li"}},[t._v(t._s(t.$t("aboutLanguge.sideNavBarTitle[0]")))]),i("router-link",{staticClass:"hidden-xs hidden-sm",attrs:{to:"/aboutUs/thesis",tag:"li","active-class":"active-li"}},[t._v(t._s(t.$t("aboutLanguge.sideNavBarTitle[1]")))]),i("router-link",{attrs:{to:"/aboutUs/joinUs",tag:"li","active-class":"active-li"}},[t._v(t._s(t.$t("aboutLanguge.sideNavBarTitle[2]")))])],1)]),i("div",{staticClass:"content col-xs-12 col-md-10"},[i("router-view")],1)])])]),i("foot-bar")],1)},n=[],o=i("2f62"),a=i("d000"),r=i("7887"),c=i("77b9");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,s)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(i,!0).forEach(function(e){d(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(i).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h={components:{NavBar:a["a"],MaskList:r["a"],footBar:c["a"]},data:function(){return{fullWidth:document.documentElement.clientWidth,isShowAboutUsOfWidth:!1,isShowAboutUsOfRouter:!1}},created:function(){window.addEventListener("resize",this.handleRisize)},mounted:function(){if("/aboutUs/thesis"!==this.$router.currentRoute.path){var t=this.isMask,e=document.querySelector(".aboutUs"),i=document.documentElement.clientHeight;this.$nextTick(function(){e.style.height=t?i+"px":"100%",e.style.overflow=t?"hidden":"visible"})}this.handleRisize()},beforeRouteEnter:function(t,e,i){i(function(e){"/aboutUs/thesis"===t.path?e.isShowAboutUsOfRouter=!0:e.isShowAboutUsOfRouter=!1})},computed:l({},Object(o["c"])({isMask:function(t){return t.isMask},isAndroid:function(t){return t.isAndroid},isiOS:function(t){return t.isiOS}})),watch:{isMask:function(t){var e=document.querySelector(".aboutUs"),i=document.documentElement.clientHeight;this.$nextTick(function(){e.style.height=t?i+"px":"100%",e.style.overflow=t?"hidden":"visible"})},$route:{handler:function(t){"/aboutUs/thesis"===t.path?this.isShowAboutUsOfRouter=!0:this.isShowAboutUsOfRouter=!1}}},methods:{handleClickGoHome:function(){this.$router.push({path:"/index"})},handleRisize:function(){this.fullWidth=document.documentElement.clientWidth,this.fullWidth<992?this.isShowAboutUsOfWidth=!0:this.isShowAboutUsOfWidth=!1}}},f=h,b=(i("a184"),i("2877")),v=Object(b["a"])(f,s,n,!1,null,"73925caf",null);e["default"]=v.exports},a184:function(t,e,i){"use strict";var s=i("c2e7"),n=i.n(s);n.a},c2e7:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0f4cea50.5ce37e93.js.map