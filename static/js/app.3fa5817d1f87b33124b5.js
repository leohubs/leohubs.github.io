webpackJsonp([1],{"+8Ho":function(t,e,s){t.exports=s.p+"static/img/integral3.782c4e1.png"},"5dv6":function(t,e){},"87lr":function(t,e){},IQz4:function(t,e,s){t.exports=s.p+"static/img/integral1.5baa224.png"},JA1j:function(t,e,s){t.exports=s.p+"static/img/close.f3e8cfc.png"},KRm5:function(t,e){},Mn22:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},a,!1,function(t){s("bD8f")},null,null).exports,r=s("/ocq"),o=s("mvHQ"),c=s.n(o),l=s("mtWM"),d=s.n(l),p=s("thjQ"),v=s.n(p),u=s("LHE1"),g=s.n(u),h={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App",login:!1,selectList:[],mobileSelectObj:null}},methods:{changeNext:function(){this.login=!1},getParameter:function(t){var e=window.location.search,s=t.length,i=e.indexOf(t);if(-1==i)return"";i+=s+1;var a=e.indexOf("&",i);return-1==a?e.substring(i):e.substring(i,a)},isWeiXin:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)},mobileSelect:function(){alert("mobileSelect"+c()(this.selectList)),this.mobileSelectObj=new g.a({trigger:"#trigger5",wheels:[{data:this.selectList}],position:[0,1],callback:function(t,e){console.log(e)}})}},mounted:function(){var t=this,e=this.getParameter("role_id")||"179163154";if(this.isWeiXin()){var s=this.getParameter("code");s?(document.write("已获取code..."),localStorage.setItem("wxcode",s),localStorage.setItem("role_id",e),this.$router.push({path:"/index"})):(document.write("跳转至微信验证..."),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0376800bd1071c94&redirect_uri=https%3a%2f%2fexth5.dev.16163.com%3frole_id%3d"+e+"&response_type=code&scope=snsapi_base&state=mhshow_h5")}else ds.ready().then(function(){ds.isGodlike?(alert("已进入大神客户端"),ds.checkLogined().then(function(t){return alert("checkLogined\n"+c()(t)),t}).then(function(e){e&&e.result.isLogined?ds.getBindGameRoleList({gameCode:"",minLevel:0}).then(function(e){if(alert("getBindGameRoleList\n"+c()(e)),e&&e.result&&e.result.list.length>0){alert("res.result\n"+c()(e.result)),t.login=!0;for(var s=0;s<e.result.list.length;s++)e.result.list[s].value=e.result.list[s].nick+" - "+e.result.list[s].serverName;t.selectList=e.result.list,alert("_this.selectList\n"+c()(t.selectList)),t.mobileSelect()}else v()({text:"登录且绑定梦幻手游角色后即可参与活动！",button:"去登陆"}).then(function(){ds.openGameRoleBindingPage({gameCode:"g78"})})}):e&&!e.result.isLogined&&v()({text:"绑定梦幻手游角色后即可参与活动！",button:"去绑定"}).then(function(){ds.openLoginPage()})})):alert("已进入外部浏览器")})}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"verify"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.login,expression:"login"}],staticClass:"layout"},[t._v("\n    正在验证5...\n    "),s("div",{staticClass:"login"},[s("div",[t._v("确认角色信息")]),t._v(" "),s("div",[t._v("游戏昵称昵称")]),t._v(" "),s("div",{staticClass:"foot"},[s("button",{attrs:{id:"trigger5"},on:{click:t.changeNext}},[t._v("换一个")]),t._v(" "),s("button",[t._v("参与活动")])])])])])},staticRenderFns:[]};var w=s("VU/8")(h,m,!1,function(t){s("Mn22")},"data-v-0ddef856",null).exports,_=(s("v2ns"),s("7QTg")),f={name:"sucessPage",props:["windowOpen","allpoints"],data:function(){return{msg:[100,200,300],point:8,resText:"缘分上佳，积分大增！",oneFlag:!1,twoFlag:!1,threeFlag:!1,allFlag:!1}},watch:{oneFlag:function(t){this.allFlagChagne()},twoFlag:function(){this.allFlagChagne()},threeFlag:function(){this.allFlagChagne()}},mounted:function(){var t=this;console.log(t.allpoints,"allpointsallpointsallpoints"),t.allpoints&&setTimeout(function(){t.init()},500)},methods:{reject:function(){this.$emit("update:windowOpen",!1)},allFlagChagne:function(){this.oneFlag&&this.twoFlag&&this.threeFlag?this.allFlag=!0:this.allFlag=!1},init:function(){console.log(this.point,"allpointsallpointsallpoints");var t=this,e=document.getElementById("one"),s=document.getElementById("two"),i=document.getElementById("three");if(10===this.allpoints){var a=parseInt(3*Math.random());console.log(a,"randomrandomrandomrandom");var n="";0===a?n="-2072px":1===a?n="-1820px":2===a&&(n="-1560px"),e.style.backgroundPositionY=n,s.style.backgroundPositionY=n,i.style.backgroundPositionY=n,this.resText="缘分深厚，积分狂增！"}else if(8===this.allpoints){for(var r=parseInt(3*Math.random()),o=parseInt(3*Math.random()),c=parseInt(3*Math.random()),l=[],d=[];r===o;)r=parseInt(3*Math.random()),o=parseInt(3*Math.random());0===c?d=[r,r,o]:1===c?d=[r,o,r]:2===c&&(d=[r,o,o]);for(var p=0;p<d.length;p++){var v="";0===d[p]?v="-2072px":1===d[p]?v="-1820px":2===d[p]&&(v="-1560px"),l.push(v)}e.style.backgroundPositionY=l[0],s.style.backgroundPositionY=l[1],i.style.backgroundPositionY=l[2],this.resText="缘分上佳，积分大增！"}else if(5===this.allpoints){for(var u=parseInt(3*Math.random()),g=parseInt(3*Math.random()),h=parseInt(3*Math.random()),m=[];u===g||u===h||g===h;)u=parseInt(3*Math.random()),g=parseInt(3*Math.random()),h=parseInt(3*Math.random());for(var w=[u,g,h],_=0;_<w.length;_++){var f="";0===w[_]?f="-2072px":1===w[_]?f="-1820px":2===w[_]&&(f="-1560px"),m.push(f)}e.style.backgroundPositionY=m[0],s.style.backgroundPositionY=m[1],i.style.backgroundPositionY=m[2],this.resText="运气不错，积分增加！"}e.addEventListener("transitionend",function(){t.oneFlag=!0}),s.addEventListener("transitionend",function(){t.twoFlag=!0}),i.addEventListener("transitionend",function(){t.threeFlag=!0})}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sucessPage"},[i("div",{staticClass:"helpSucess green"},[i("h2",{staticClass:"white"},[t._v("助力成功")]),t._v(" "),i("div",[t._v("诀窍提示：每天都可以给同一作品助力一次哦")]),t._v(" "),t._m(0),t._v(" "),t.allFlag?i("div",{staticClass:"resText"},[t._v(t._s(t.resText))]):t._e(),t._v(" "),t.allFlag?i("div",{staticClass:"allpoints"},[t._v(" + "+t._s(t.allpoints))]):t._e(),t._v(" "),i("div",{staticClass:"btn",on:{click:t.reject}},[i("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),i("div",{staticClass:"white"},[t._v("好 的")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"machine"},[e("dl",{staticClass:"rotate_box clear"},[e("dd",{staticClass:"one",attrs:{id:"one"}}),this._v(" "),e("dd",{staticClass:"two",attrs:{id:"two"}}),this._v(" "),e("dd",{staticClass:"three",attrs:{id:"three"}})])])])}]};var b=s("VU/8")(f,C,!1,function(t){s("5dv6")},null,null).exports,k=s("IQz4"),x=s.n(k),A=s("aUTJ"),P=s.n(A),O=s("+8Ho"),y=s.n(O),E=s("qoKn"),F=s.n(E),S={name:"App",props:["windowOpen","congratulateParise","points"],data:function(){return{isAchieve:!1,boxClass:"box",imgSrc:""}},mounted:function(){console.log(this.congratulateParise,this.points,"congratulateParisecongratulateParisecongratulateParise"),this.points&&this.congratulateParise&&this.congratulateParise.score&&(this.points>=this.congratulateParise.score?this.isAchieve=!0:this.isAchieve=!1,this.congratulateParise.score>=300?this.imgSrc=F.a:this.congratulateParise.score>=200?this.imgSrc=y.a:this.congratulateParise.score>=100?this.imgSrc=P.a:this.congratulateParise.score>=50&&(this.imgSrc=x.a))},methods:{openTakePart:function(){this.$router.push({path:"/takePart"})},reject:function(){this.$emit("update:windowOpen",!1)}}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"congratulate"},[i("div",{staticClass:"bg green"},[i("div",{staticClass:"reject",on:{click:t.reject}},[i("img",{attrs:{src:s("JA1j"),alt:""}})]),t._v(" "),i("h2",{staticClass:"white"},[t._v("恭喜获奖")]),t._v(" "),i("div",{staticClass:"prizeName"},[t._v("奖品名称")]),t._v(" "),i("div",{staticClass:"box"},[i("img",{attrs:{src:t.imgSrc,alt:""}}),t._v(" "),t.isAchieve?i("div",{staticClass:"achieve"},[i("img",{attrs:{src:s("pPg+"),alt:""}})]):t._e()]),t._v(" "),!1===t.isAchieve?i("div",[t._v("获得"+t._s(t.congratulateParise.score)+"积分，即可获得此游戏物品！")]):t._e(),t._v(" "),t.isAchieve?i("div",[t._v("梦幻秀作者已达成活动积分要求")]):t._e(),t._v(" "),t.isAchieve?i("div",[t._v("登录游戏即可领取此奖品！")]):t._e(),t._v(" "),i("div",{staticClass:"btn",on:{click:t.openTakePart}},[i("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),i("div",[t._v("立即参与")])])])])},staticRenderFns:[]};var M=s("VU/8")(S,I,!1,function(t){s("yN+T")},"data-v-eb79f0b6",null).exports,j={name:"takePart",props:["windowOpen"],methods:{openGame:function(){window.location.href="https://game.163.com/open/my/"},openGodlike:function(){window.location.href="https://app.16163.com/ds/ulinks/"},reject:function(){this.$emit("update:windowOpen",!1)}}},L={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"takePart"},[i("div",{staticClass:"ruleExplain"},[i("div",{staticClass:"reject",on:{click:t.reject}},[i("img",{attrs:{src:s("JA1j"),alt:""}})]),t._v(" "),i("h2",{staticClass:"white"},[t._v("参与活动")]),t._v(" "),i("div",{staticClass:"content green"},[t._m(0),t._v(" "),i("div",{staticClass:"btn",on:{click:t.openGame}},[i("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),i("div",[t._v("打开游戏")])]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"btn",on:{click:t.openGodlike}},[i("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),i("div",[t._v("去大神参与活动")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"activityBrief"},[e("span",{staticClass:"strong"},[this._v("官服玩家")]),e("br"),this._v(" "),e("span",[this._v("官服玩家可在游戏内节日界面分享助力H5至微信或大神，即可参加活动")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"activityTime"},[e("span",{staticClass:"strong"},[this._v("渠道服玩家")]),e("br"),this._v(" "),e("span",[this._v("渠道服玩家请前往网易大神App，搜索“梦幻手游精灵”，绑定角色ID后接可参与活动")])])}]};var B=s("VU/8")(j,L,!1,function(t){s("87lr")},"data-v-555b8245",null).exports,R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rule"},[e("div",{staticClass:"ruleExplain"},[e("div",{staticClass:"reject",on:{click:this.reject}},[e("img",{attrs:{src:s("JA1j"),alt:""}})]),this._v(" "),e("h2",{staticClass:"white title"},[this._v("规则说明")]),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content green"},[s("div",{staticClass:"activityBrief"},[s("span",{staticClass:"strong title"},[t._v("活动简介：")]),t._v(" "),s("span",[t._v("助力赢积分，北溟鲲抱回家！只要参与游戏梦幻秀助力H5活动，即能获得积分，赢取北冥鲲等大奖哦！")])]),t._v(" "),s("div",{staticClass:"activityTime marginTop"},[s("span",{staticClass:"strong title"},[t._v("活动时间：")]),t._v(" "),s("span",[t._v("2019年9月29日-2019年10月7月")])]),t._v(" "),s("div",{staticClass:"activityRule marginTop"},[s("span",{staticClass:"strong title"},[t._v("活动规则：")]),s("br"),t._v(" "),s("span",[t._v("1丶玩家将游戏内的助力H5分享至微信或大神，即可在微信丶大神参与H5活动，获取积分，根据积分发放奖励。")]),s("br"),t._v(" "),s("span",[t._v("2丶所有奖励均通过游戏内邮件发放，玩家请及时登录游戏领取；玩家使用北冥鲲转盘道具奖")])])])}]};var T=s("VU/8")({name:"rule",props:["windowOpen"],methods:{reject:function(){this.$emit("update:windowOpen",!1)}}},R,!1,function(t){s("KRm5")},"data-v-6acac0f7",null).exports,N=s("ys0R"),U=s.n(N),D=s("Xi0g"),H=s.n(D),z={name:"HelloWorld",components:{swiper:_.swiper,swiperSlide:_.swiperSlide,sucessPage:b,congratulate:M,takePart:B,rule:T},watch:{},data:function(){var t=this;return{windowOpen:!1,windowName:"",swiperCard:[{id:1,name:"随机羊角包头饰",integral:"50",src:x.a,score:50},{id:2,name:"50000银币",integral:"100",src:P.a,score:100},{id:3,name:"翠羽金屏头像框",integral:"200",src:y.a,score:200},{id:4,name:"北溟鲲转盘",integral:"300",src:F.a,score:300},{id:5,name:"北溟鲲转盘",integral:"400",src:F.a,score:400},{id:6,name:"北溟鲲转盘",integral:"500",src:F.a,score:500}],swiperOption:{loop:!0,slidesPerView:3,centeredSlides:!0,on:{click:function(e){var s=t.$refs.mySwiper.swiper.clickedSlide.getElementsByClassName("integral")[0].innerHTML;"50积分"===s?t.congratulateParise=t.swiperCard[0]:"100积分"===s?t.congratulateParise=t.swiperCard[1]:"200积分"===s?t.congratulateParise=t.swiperCard[2]:"300积分"===s?t.congratulateParise=t.swiperCard[3]:"400积分"===s?t.congratulateParise=t.swiperCard[4]:"500积分"===s&&(t.congratulateParise=t.swiperCard[5]),t.windowOpen=!0,t.windowName="congratulate"}}},swiperOption2:{direction:"vertical",autoplay:!0,loop:!0,centeredSlides:!0},role_id:"179163154",roleData:null,show_img:"",user_image:"",role_name:"",friendArr:[],broadcast:[],points:"",congratulateParise:{}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper},swiper2:function(){return this.$refs.mySwiper2.swiper}},created:function(){this.init(),this.getFriendList()},mounted:function(){new MobileShare({title:"我正在参加《梦幻西游》手游捏脸活动，为我助力吧！",desc:"我捏的脸这么好看，快来给我点赞帮我抱走永久北溟鲲啦～你也一起来玩吧！",imgUrl:"https://webinput.nie.netease.com/img/my/icon.png"});console.log("this is current swiper instance object",this.swiper),this.swiper.slideTo(3,1e3,!1)},methods:{ShowDiv:function(t){document.body.style.overflow="hidden",document.addEventListener("touchmove",t,!1)},CloseDiv:function(t){document.body.style.overflow="",document.removeEventListener("touchmove",t,!1)},init:function(){var t=this,e=(localStorage.getItem("wxcode"),"/api/mhshow_h5/get_roleinfo?role_id="+(localStorage.getItem("role_id")||"179163154")+"&token=da778501bdd44a229a6b1fba4f80899a&token_type=wx");d.a.get(e).then(function(e){e&&e.data&&e.data.result&&(t.roleData=e.data.result,t.role_name=t.roleData.role_name?t.roleData.role_name:"",t.user_image=t.roleData.user_image?t.roleData.user_image:U.a,t.points=t.roleData.points?t.roleData.points:"",t.show_img=t.roleData.show_img?t.roleData.show_img:H.a)}).catch(function(t){console.log(t,"errorerrorerrorerror")})},getFriendList:function(){var t=this,e="/api/mhshow_h5/get_role_assistances?role_id="+this.role_id+"&user_num=5";d.a.get(e).then(function(e){if(e&&e.data&&e.data.result){for(var s=e.data.result,i=0;i<s.length;i++)(s[i].points=10)?s[i].message="缘分深厚，积分狂增!":(s[i].points=8)?s[i].message="缘分上佳，积分大增!":s[i].message="运气不错，积分增加!";t.friendArr=s}if(e&&e.data&&e.data.broadcast){for(var a=e.data.broadcast,n=0;n<a.length;n++)50===a[n]?a[n].src=x.a:100===a[n]?a[n].src=P.a:200===a[n]?a[n].src=y.a:a[n].src=F.a;t.broadcast=e.data.broadcast}})},helpDay:function(){var t=this,e=new FormData;e.append("role_id","179163154");d.a.post("/api/mhshow_h5/assistance",e).then(function(e){e&&e.data&&(t.points=e.data.points,t.windowOpen=!0,t.windowName="sucessPage")}).catch(function(e){t.points=5,t.windowOpen=!0,t.windowName="sucessPage",alert("今天已点赞啦，客官明日再来吧")})},callback:function(){},clickPraise:function(){this.helpDay()},shareTo:function(){ds.isGodlike?ds.doShare({title:"我正在参加《梦幻西游》手游捏脸活动，为我助力吧！",desc:"我捏的脸这么好看，快来给我点赞帮我抱走永久北溟鲲啦～你也一起来玩吧！",link:"https://exth5.dev.16163.com/",imgUrl:"https://webinput.nie.netease.com/img/my/icon.png",socialNetwork:0}).then(function(t){alert(c()(t))}):this.mobileShare.show()},gain:function(){this.windowOpen=!0,this.windowName="takePart"},ruleExplain:function(){this.windowOpen=!0,this.windowName="rule"}}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"homePage"},[i("div",{staticClass:"ruleExplain",on:{click:t.ruleExplain}}),t._v(" "),t.windowOpen?i("div",{staticClass:"layout"},["sucessPage"===t.windowName?i("sucessPage",{attrs:{windowOpen:t.windowOpen,allpoints:t.points},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e(),t._v(" "),"congratulate"===t.windowName?i("congratulate",{attrs:{windowOpen:t.windowOpen,congratulateParise:t.congratulateParise,points:t.points},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e(),t._v(" "),"takePart"===t.windowName?i("takePart",{attrs:{windowOpen:t.windowOpen},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e(),t._v(" "),"rule"===t.windowName?i("rule",{attrs:{windowOpen:t.windowOpen},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e()],1):t._e(),t._v(" "),i("div",{staticClass:"gain",on:{click:t.gain}},[i("img",{attrs:{src:s("kbjp"),alt:""}})]),t._v(" "),i("div",{staticClass:"front"},[i("section",{staticClass:"dreamWork"},[i("div",{staticClass:"bgBack"},[i("div",[t._v("梦幻秀作品")]),t._v(" "),i("div",{staticClass:"pic"},[i("img",{attrs:{src:t.show_img,alt:""}})]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"clearFix"},[i("div",{staticClass:"tit lt"},[i("img",{attrs:{src:t.user_image,alt:""}})]),t._v(" "),i("div",{staticClass:"lt"},[i("div",[i("span",[t._v("作者：")]),t._v(" "),i("span",[t._v(t._s(t.role_name))])]),t._v(" "),i("div",[i("span",[t._v("积分：")]),t._v(" "),i("span",{staticClass:"red"},[t._v(t._s(t.points))])])])])])])]),t._v(" "),t._m(0),t._v(" "),i("section",{staticClass:"btn"},[i("div",{staticClass:"btnBox clearFix"},[i("div",{staticClass:"lt",on:{click:t.shareTo}},[i("img",{attrs:{src:s("az9f"),alt:""}})]),t._v(" "),i("div",{staticClass:"lt"},[i("img",{staticClass:"helpImg",attrs:{src:s("vbIs"),alt:""},on:{click:t.clickPraise}})])])])]),t._v(" "),i("div",{staticClass:"behind"},[i("section",{staticClass:"bgGreen"},[i("div",{staticClass:"nickName"},[i("img",{attrs:{src:s("v9Ex"),alt:""}}),t._v(" "),t.broadcast.length?i("swiper",{ref:"mySwiper2",staticClass:"swiperBig2 swiper-no-swiping",attrs:{options:t.swiperOption2}},t._l(t.broadcast,function(e,a){return i("swiper-slide",{key:a},[i("div",{staticClass:"nameInfo"},[i("img",{staticClass:"header",attrs:{src:s("ys0R"),alt:""}}),t._v(" "),i("span",{staticClass:"white"},[t._v(t._s(e.role_name)+" 已满"+t._s(e.points)+"积分，获得 "+t._s(e.reward)+"!")])])])}),1):t._e()],1),t._v(" "),i("div",{staticClass:"white"},[t._v("\n\t\t\t\t\t动动手指，游戏大礼等你拿！\n\t\t\t\t")]),t._v(" "),i("swiper",{ref:"mySwiper",staticClass:"swiperBig",attrs:{options:t.swiperOption}},t._l(t.swiperCard,function(e){return i("swiper-slide",{key:e.id},[i("div",{staticClass:"swiperBox"},[i("div",{staticClass:"picture"},[t.points>=e.score?i("img",{staticClass:"achieve",attrs:{src:s("pPg+"),alt:""}}):t._e(),t._v(" "),i("div",{staticClass:"picImg"},[i("img",{attrs:{src:e.src,alt:""}})]),t._v(" "),i("div",{staticClass:"white"},[i("div",{staticClass:"giftName"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"integral"},[t._v(t._s(e.integral)+"积分")])])])])])}),1),t._v(" "),t._m(1)],1),t._v(" "),i("section",{staticClass:"help"},[i("h2",{staticClass:"white"},[t._v("助力榜")]),t._v(" "),t._m(2),t._v(" "),t._l(t.friendArr,function(e){return i("div",{key:e.time,staticClass:"clearFix personInfo"},[i("img",{staticClass:"lt",attrs:{src:e.user_image,alt:""}}),t._v(" "),i("div",{staticClass:"lt"},[i("div",{staticClass:"strong"},[t._v(t._s(e.user_name?e.user_name:""))]),t._v(" "),i("div",[t._v(t._s(e.message?e.message:""))])]),t._v(" "),i("div",{staticClass:"rl code"},[t._v("\n\t\t\t\t\t\t+ 100\n\t\t\t\t\t")])])}),t._v(" "),i("h2",{staticClass:"checkMore"},[t._v("\n\t\t\t\t\t这是最近为你助力的5位好友哦\n\t\t\t\t")])],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"prizePoint"},[s("div",[s("span",{staticClass:"white"},[t._v("距离")]),t._v(" "),s("span",{staticClass:"red"},[t._v("奖品名称奖品")]),t._v(" "),s("span",{staticClass:"white"},[t._v("仅剩")]),t._v(" "),s("span",{staticClass:"red"},[t._v("1234")]),t._v(" "),s("span",{staticClass:"white"},[t._v("积分!")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",[this._v("1丶通过邮件发放，玩家使用后调出抽奖转盘，转盘含北冥醌")]),this._v(" "),e("div",[this._v("2丶可以获得永久冥醌，空间挂件（30天），金柳露，月华露，银币，红罗羹，绿芦羹，星辰碎片等道具。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"thanks"},[this._v("\n\t\t\t\t\t感谢以下的朋友为发起者\n\t\t\t\t\t"),e("span",{staticClass:"red"},[this._v("发起者昵称")]),this._v("\n\t\t\t\t\t的梦幻秀助力\n\t\t\t\t")])}]};var J=s("VU/8")(z,G,!1,function(t){s("sx1j")},null,null).exports;i.a.use(r.a);var Y=new r.a({routes:[{path:"/index",name:"homePage",component:J},{path:"/sucessPage",name:"sucessPage",component:b},{path:"/congratulate",name:"congratulate",component:M},{path:"/rule",name:"rule",component:T},{path:"/takePart",name:"takePart",component:B},{path:"/",name:"config",component:w}]}),Q=s("v5o6"),K=s.n(Q);i.a.config.productionTip=!1;var V=window.innerWidth;document.write("<style>html{font-size:"+V+"px;}</style>");var q=document.getElementsByTagName("body")[0],$=document.getElementsByTagName("html")[0];q.style.fontSize="32px",q.style.height="100%",$.style.height="100%",K.a.attach(document.body),new i.a({el:"#app",router:Y,components:{App:n},template:"<App/>"})},PTkL:function(t,e){},Xi0g:function(t,e,s){t.exports=s.p+"static/img/person.aeee31b.png"},aUTJ:function(t,e,s){t.exports=s.p+"static/img/integral2.c4c40e5.png"},az9f:function(t,e,s){t.exports=s.p+"static/img/share.4acce88.png"},bD8f:function(t,e){},kbjp:function(t,e,s){t.exports=s.p+"static/img/takePart.7468bc1.png"},"pPg+":function(t,e,s){t.exports=s.p+"static/img/achieve.322385e.png"},qoKn:function(t,e,s){t.exports=s.p+"static/img/integral4.c23901b.png"},sx1j:function(t,e){},v2ns:function(t,e){},v9Ex:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAjCAYAAAAaLGNkAAADYUlEQVRYhe2YW4hNURjHf2fMaAxyKcrtQS6F120Yl5kiw/AipVB2SlEYtR9GxMMpRMiWF0KG5frgltyjEMlYSt7EGI3b24QZU4zbw/oW+6w5Z885M2fkwb92317fty7/861vfevbJ5FMJuksAt/zgSTQBmwGjuc6R6g0hV0gMB84GlEdA14Dd3KdqyBmkRGB7w2LGbtcZEIegLUx/YfLkx2JwPcqgUbgasykX0UuARbFzSfQGE/N6JBE4HtVwHVp7k1jnxP43j1ggahOAKfkfT5mO2alIbFd5C2XSEpMBL43DrgizXmh0lcitrHAYWCqqF4C94FXwA9glNjKgRuy2EqgXvrvwXj3rNhGW5sbmDaoFjsEKoDb0rwL1IRK14nN/cVlwE5gJvACKAUeie0csAw4AlwDxkBkOwLf2w0MAvaFSp+O6MdHCKwIla6wBDLgATANWCPtOmB8xH4U49HRwC6ARDKZJPC9ocBboCVUum+EQBHQAAwDloZKt8sDaTwRhS+LvgFGOLZmoA8w2Hpii8hVTseNQmB/OgJZQAHnMUez2rFtElmd+PjyUjHQAhAq/TtGAt/rDzRhjmJJqPSPdKt04AmAEuADUAQUA19E31PeWwowAdQDOOAMrsIkoZOZCGSJVsDG2OSI/qvo+xQAk0R5nVRMFHm5CwQsLoqc6ehvgjkds0XxzOlgI/pJHkjYOUodfb0lMU4Uz50OvUR2ZSssvosscfRPgfpCTIYrCJX+7nRoFVmcBxJ2js+OvgmoKgyVzuRuezP+zAMJO0fCNYRKP4+79f4a/pOw+OdJfBPZI4/ruCewQxKxA3NE7AmLIzFFZGMeSLwTWZbO2K7kD3xvAOZi6QccDJVubTcqd3wELmBq0EuYwrjFGlM8EfheOaYkq8SUYqvzQMBiIaZ6n8efsg+IeCLwvTL+1JhbQ6U3kV98A+YCO4AaTBk4BXgY9cQ2kWXdQCCKdcB0zC5sh9SYsB8zEwLfGwj07iYSzcAQeW9zSWzA3KiHumlxF5+A9SkkQqUfywfOUmAkxjOZzncbJn+4t+JPTHIryjAugaktGzBl//sUEkKkEdia9W8hq0K3Q3Tqr4HA96oxR87NISXAGdJ8w+adBCbRTM9gq811sk7doqHStZjM1+w8FzpD4hfDd+UHEHcgtwAAAABJRU5ErkJggg=="},vbIs:function(t,e,s){t.exports=s.p+"static/img/praise.8a42458.png"},vsMI:function(t,e,s){t.exports=s.p+"static/img/btn.4997e0e.png"},"yN+T":function(t,e){},ys0R:function(t,e,s){t.exports=s.p+"static/img/head.b2aa9f4.png"}},["NHnr"]);
//# sourceMappingURL=app.3fa5817d1f87b33124b5.js.map