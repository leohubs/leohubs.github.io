(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ec60ba6"],{"60f1":function(t,i,e){},c758:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"thesis hidden-xs hidden-sm"},[e("div",{staticClass:"nullDom"}),e("ul",{staticClass:"nav col-xs-12 col-md-12"},[e("li",{staticClass:"nav-item",on:{click:function(i){return t.change(i,0)}}},[t._v(t._s(t.$t("aboutLanguge.navList[0]")))]),e("li",{staticClass:"nav-item",on:{click:function(i){return t.change(i,1)}}},[t._v(t._s(t.$t("aboutLanguge.navList[1]")))]),e("li",{staticClass:"nav-item",on:{click:function(i){return t.change(i,2)}}},[t._v(t._s(t.$t("aboutLanguge.navList[2]")))]),e("li",{staticClass:"nav-item",on:{click:function(i){return t.change(i,3)}}},[t._v(t._s(t.$t("aboutLanguge.navList[3]")))]),e("li",{staticClass:"nav-item",on:{click:function(i){return t.change(i,4)}}},[t._v(t._s(t.$t("aboutLanguge.navList[4]")))]),e("li",{staticClass:"nav-item",on:{click:function(i){return t.change(i,5)}}},[t._v(t._s(t.$t("aboutLanguge.navList[5]")))]),e("li",{staticClass:"nav-item",on:{click:function(i){return t.change(i,6)}}},[t._v(t._s(t.$t("aboutLanguge.navList[6]")))])]),t._l(t.thesisList[this.value][1][this.page-1],function(i,s){return e("div",{key:i.id,staticClass:"thesis-article"},[e("div",{staticClass:"thesis-list"},[e("h2",{staticClass:"thesis-title"},[e("div",[t._v("\n          "+t._s(i.title)+"\n        ")]),i.src?e("a",{staticClass:"icon icon-thesis_icon_pdf2",attrs:{href:i.src,target:"_blank"}}):t._e()]),e("p",{staticClass:"thesis-author"},[e("span",[t._v(t._s(i.time))]),t._v(" | "),e("span",[t._v(t._s(i.author))])]),e("div",{ref:"openContent",refInFor:!0,staticClass:"thesis-content"},[e("p",{ref:"contentText",refInFor:!0,staticClass:"thesis-content-text",domProps:{innerHTML:t._s(i.content)}}),e("p",{ref:"openText",refInFor:!0,staticClass:"thesis-open",on:{click:function(i){return t.open(i,s)}}},[t._v("展开")])])])])}),e("ul",{staticClass:"page"},[e("li",{staticClass:"triangle",on:{click:t.addPage}}),t.thesisList[this.value][0][0]/5>1&&t.page+1<=t.pageCount?e("li",{on:{click:function(i){return t.changePage(t.page+1)}}},[t._v(t._s(t.page+1))]):t._e(),e("li",{staticClass:"currentIndex",on:{click:function(i){return t.changePage(t.page)}}},[t._v(t._s(t.page))]),e("li",{staticClass:"triangle2",on:{click:t.reducePage}}),e("li",[t._v(t._s(t.$t("aboutLanguge.Total"))),e("span",[t._v(t._s(t.thesisList[this.value][0][0]))]),t._v(t._s(t.$t("aboutLanguge.item")))])])],2)},n=[],a={data:function(){return{value:0,pageCount:1,textList:[],textListOld:[],isIE:!1,page:1,index:1}},created:function(){this.textListOldZh=JSON.parse(JSON.stringify(this.thesisList)),this.textList=this.textListOldZh},computed:{thesisList:function(){return this.$t("aboutLanguge.thesisList")}},watch:{thesisList:function(){this.index<2&&(this.index++,this.textListOldEn=JSON.parse(JSON.stringify(this.thesisList))),this.textList=[],"zh"===this.$i18n.locale?(this.textList=this.textListOldZh,this.$refs.openText.forEach(function(t){t.innerHTML="展开"})):(this.textList=this.textListOldEn,this.$refs.openText.forEach(function(t){t.innerHTML="More"})),this.wordlimit(500)}},mounted:function(){var t=this;"zh"===this.$i18n.locale?this.$refs.openText.forEach(function(t){t.innerHTML="展开"}):this.$refs.openText.forEach(function(t){t.innerHTML="More"});var i=Math.ceil(this.thesisList[this.value][0][0]/5);this.pageCount=i,this.$nextTick(function(){t.wordlimit(500)}),(navigator.userAgent.indexOf("MSIE")>-1||navigator.userAgent.indexOf("Edge")>-1||navigator.userAgent.indexOf("Trident")>-1)&&(this.isIE=!0);var e=document.getElementsByClassName("nav-item");e[0].style.color="rgba(255,255,255,1)",e[0].style.borderBottom="4px solid rgba(50,130,255,1)"},methods:{wordlimit:function(t){for(var i=document.getElementsByClassName("thesis-open"),e=0;e<this.thesisList[this.value][1][this.page-1].length;e++){var s=this.thesisList[this.value][1][this.page-1][e].content.length;s>t?this.$refs.contentText[e].innerHTML=this.textList[this.value][1][this.page-1][e].content.substr(0,t)+"...":(i[e].innerHTML="",this.$refs.contentText[e].innerHTML=this.textList[this.value][1][this.page-1][e].content)}},openWordlimit:function(t,i){this.thesisList[this.value][1][this.page-1][i].content.length>t?this.$refs.contentText[i].innerHTML=this.thesisList[this.value][1][this.page-1][i].content.substr(0,t)+"...":this.$refs.contentText[i].innerHTML=this.thesisList[this.value][1][this.page-1][i].content.substr(0,t)},closeWordlimit:function(t,i){this.$refs.contentText[i].innerHTML=this.textList[this.value][1][this.page-1][i].content+"&nbsp;&nbsp;&nbsp;"},open:function(t,i){return"展开"==t.target.innerHTML?(this.closeWordlimit(900,i),void(t.target.innerHTML="收起")):"收起"==t.target.innerHTML?(this.openWordlimit(500,i),void(t.target.innerHTML="展开")):"More"==t.target.innerHTML?(this.closeWordlimit(900,i),void(t.target.innerHTML="Fold")):"Fold"==t.target.innerHTML?(this.openWordlimit(500,i),void(t.target.innerHTML="More")):void 0},initText:function(){"zh"===this.$i18n.locale?this.$refs.openText.forEach(function(t){t.innerHTML="展开"}):this.$refs.openText.forEach(function(t){t.innerHTML="More"})},change:function(t,i){var e=this;this.value=i,this.page=1;for(var s=t.target,n=s.parentNode,a=n.children,o=0;o<a.length;o++)a[o].style.color="rgba(172,172,172,1)",a[o].style.borderBottom="4px solid transparent";s.style.color="rgba(255,255,255,1)",s.style.borderBottom="4px solid rgba(50,130,255,1)";var r=Math.ceil(this.thesisList[this.value][0][0]/5);this.pageCount=r,this.$nextTick(function(){e.wordlimit(500),e.initText()})},changePage:function(t){var i=this;this.page=t,this.$nextTick(function(){i.wordlimit(500),i.initText()})},addPage:function(){var t=this;this.page<this.pageCount&&(this.page++,this.$nextTick(function(){window.scrollTo(0,0),t.wordlimit(500),t.initText()}))},reducePage:function(){var t=this;this.page>1&&(this.page--,this.$nextTick(function(){window.scrollTo(0,0),t.wordlimit(500),t.initText()}))}}},o=a,r=(e("fe8c"),e("2877")),c=Object(r["a"])(o,s,n,!1,null,"4e693228",null);i["default"]=c.exports},fe8c:function(t,i,e){"use strict";var s=e("60f1"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-5ec60ba6.8d8cdc28.js.map