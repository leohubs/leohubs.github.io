webpackJsonp([1],{"+8Ho":function(t,e,s){t.exports=s.p+"static/img/integral3.782c4e1.png"},"5Hoj":function(t,e){},"5dv6":function(t,e){},"87lr":function(t,e){},IQz4:function(t,e,s){t.exports=s.p+"static/img/integral1.5baa224.png"},Im9q:function(t,e){},JA1j:function(t,e,s){t.exports=s.p+"static/img/close.f3e8cfc.png"},JKiR:function(t,e){},KRm5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},i,!1,function(t){s("bD8f")},null,null).exports,o=s("/ocq"),r=s("mvHQ"),c=s.n(r),l=s("bOdI"),d=s.n(l),p=(s("XmAh"),s("il3B")),u=(s("mMXg"),s("qYlo")),v=(s("nI2B"),s("qWG/")),h=s("mtWM"),m=s.n(h);s("thjQ");a.a.use(v.a),a.a.use(u.a);var g={name:"HelloWorld",components:d()({},p.a.Component.name,p.a.Component),data:function(){return{show:!1,msg:"Welcome to Your Vue.js App",login:!1,selectList:[],selectObj:{},selectPic:"",nickName:"",mobileSelectObj:null,columns:["杭州","宁波","温州","嘉兴","湖州"]}},methods:{changeNext:function(){this.login=!1},onConfirm:function(t,e){console.log(t,"valuevaluevaluevaluevalue"),this.login=!1,this.show=!0,this.selectObj=t,this.selectPic=t.icon,this.nickName=t.nick},onCancel:function(){this.login=!1,this.show=!0},ceshi:function(){var t=this;alert("111");var e="g18",s="207880560",a="6001",i="抓马萝莉",n="https://yxzs.163.com/appresource/g18/6.png",o="时空之隙",r=new FormData,l=n,d=l.slice(l.lastIndexOf("/")+1,l.lastIndexOf("."));r.append("role_id",s),r.append("role_name",i),r.append("icon",d),r.append("hostname",o),r.append("host",a),r.append("from",e),console.log(r,"formDataformData"),m.a.post("/api/mhshow_h5/init_roleinfo",r).then(function(e){alert("res.coderes.coderes.coderes.code"+c()(e)),console.log(e,"res.coderes.coderes.coderes.coderes.coderes.coderes.coderes.code"),e&&200===e.data.code&&(t.$router.push({path:"/index"}),localStorage.setItem("role_id",t.selectObj.roleld))})},beforeClose:function(t,e){var s=this;if("confirm"===t){console.log("确定按钮");var a=new FormData,i=this.selectObj.icon,n=i.slice(i.lastIndexOf("/")+1,i.lastIndexOf("."));a.append("role_id",this.selectObj.roleld),a.append("role_name",this.selectObj.nick),a.append("icon",n),a.append("hostname",this.selectObj.serverName),a.append("host",this.selectObj.server),a.append("from",this.selectObj.appKey),alert("formData"+c()(a)),alert("this.selectObj"+c()(this.selectObj)),m.a.post("/api/mhshow_h5/init_roleinfo",a).then(function(t){alert("res.coderes.coderes.coderes.code"+c()(t)),t&&200===t.data.code&&(s.$router.push({path:"/index"}),localStorage.setItem("role_id",s.selectObj.roleld))}).catch(function(t){alert("错误"+c()(t.response))}),e()}else"cancel"===t&&(console.log("取消按钮"),this.login=!0,e())},getParameter:function(t){var e=window.location.search,s=t.length,a=e.indexOf(t);if(-1==a)return"";a+=s+1;var i=e.indexOf("&",a);return-1==i?e.substring(a):e.substring(a,i)},isWeiXin:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}},mounted:function(){var t=document.getElementsByTagName("meta");t[1].content="initial-scale=1.0",console.log(t,"metametametameta");var e=this,s=this.getParameter("role_id")||"179163154";if(this.isWeiXin()){var a=this.getParameter("code");a?(document.write("已获取code..."),localStorage.setItem("wxcode",a),localStorage.setItem("role_id",s),this.$router.push({path:"/index"})):(document.write("跳转至微信验证..."),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0376800bd1071c94&redirect_uri=https%3a%2f%2fexth5.dev.16163.com%3frole_id%3d"+s+"&response_type=code&scope=snsapi_base&state=mhshow_h5")}else ds.ready().then(function(){ds.isGodlike?(alert("已进入大神客户端"),ds.checkLogined().then(function(t){return t}).then(function(t){t&&t.result.isLogined?ds.getBindGameRoleList({gameCode:"",minLevel:0}).then(function(t){if(t&&t.result&&t.result.list.length>0){for(var s=0;s<t.result.list.length;s++)t.result.list[s].text=t.result.list[s].nick+" - "+t.result.list[s].serverName;e.selectList=t.result.list,e.selectObj=t.result.list[0],e.nickName=e.selectList[0].nick,e.selectPic=e.selectList[0].icon,e.show=!0}else p.a.alert({message:"绑定梦幻手游角色后即可参与活动！",confirmButtonText:"去绑定"}).then(function(){ds.openGameRoleBindingPage({gameCode:"g18"})})}):t&&!t.result.isLogined&&p.a.alert({message:"登录且绑定梦幻手游角色后即可参与活动！",confirmButtonText:"去登录"}).then(function(){ds.openLoginPage()})})):alert("已进入外部浏览器")})}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"verify"},[s("div",{on:{click:t.ceshi}},[t._v("测试")]),t._v("\n  正在验证6...\n   "),t._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}},[s("van-picker",{attrs:{"show-toolbar":"",title:"标题",columns:t.selectList},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1),t._v(" "),s("van-dialog",{attrs:{title:"确认角色信息",confirmButtonText:"参与活动",cancelButtonText:"换一个","item-height":"100",beforeClose:t.beforeClose,"show-cancel-button":""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("div",{staticClass:"windowInfo"},[s("img",{attrs:{src:t.selectPic}}),t._v(" "),s("span",[t._v(t._s(t.nickName))])])])],1)},staticRenderFns:[]};var _=s("VU/8")(g,w,!1,function(t){s("qEC4")},"data-v-7cef1e9a",null).exports,f=(s("v2ns"),s("7QTg")),C={name:"sucessPage",props:["windowOpen","allpoints"],data:function(){return{msg:[100,200,300],point:8,resText:"缘分上佳，积分大增！",oneFlag:!1,twoFlag:!1,threeFlag:!1,allFlag:!1}},watch:{oneFlag:function(t){this.allFlagChagne()},twoFlag:function(){this.allFlagChagne()},threeFlag:function(){this.allFlagChagne()}},mounted:function(){var t=this;console.log(t.allpoints,"allpointsallpointsallpoints"),t.allpoints&&setTimeout(function(){t.init()},500)},methods:{reject:function(){this.$emit("update:windowOpen",!1)},allFlagChagne:function(){this.oneFlag&&this.twoFlag&&this.threeFlag?this.allFlag=!0:this.allFlag=!1},init:function(){console.log(this.point,"allpointsallpointsallpoints");var t=this,e=document.getElementById("one"),s=document.getElementById("two"),a=document.getElementById("three");if(10===this.allpoints){var i=parseInt(3*Math.random());console.log(i,"randomrandomrandomrandom");var n="";0===i?n="-2072px":1===i?n="-1820px":2===i&&(n="-1560px"),e.style.backgroundPositionY=n,s.style.backgroundPositionY=n,a.style.backgroundPositionY=n,this.resText="缘分深厚，积分狂增！"}else if(8===this.allpoints){for(var o=parseInt(3*Math.random()),r=parseInt(3*Math.random()),c=parseInt(3*Math.random()),l=[],d=[];o===r;)o=parseInt(3*Math.random()),r=parseInt(3*Math.random());0===c?d=[o,o,r]:1===c?d=[o,r,o]:2===c&&(d=[o,r,r]);for(var p=0;p<d.length;p++){var u="";0===d[p]?u="-2072px":1===d[p]?u="-1820px":2===d[p]&&(u="-1560px"),l.push(u)}e.style.backgroundPositionY=l[0],s.style.backgroundPositionY=l[1],a.style.backgroundPositionY=l[2],this.resText="缘分上佳，积分大增！"}else if(5===this.allpoints){for(var v=parseInt(3*Math.random()),h=parseInt(3*Math.random()),m=parseInt(3*Math.random()),g=[];v===h||v===m||h===m;)v=parseInt(3*Math.random()),h=parseInt(3*Math.random()),m=parseInt(3*Math.random());for(var w=[v,h,m],_=0;_<w.length;_++){var f="";0===w[_]?f="-2072px":1===w[_]?f="-1820px":2===w[_]&&(f="-1560px"),g.push(f)}e.style.backgroundPositionY=g[0],s.style.backgroundPositionY=g[1],a.style.backgroundPositionY=g[2],this.resText="运气不错，积分增加！"}e.addEventListener("transitionend",function(){t.oneFlag=!0}),s.addEventListener("transitionend",function(){t.twoFlag=!0}),a.addEventListener("transitionend",function(){t.threeFlag=!0})}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sucessPage"},[a("div",{staticClass:"helpSucess green"},[a("h2",{staticClass:"white"},[t._v("助力成功")]),t._v(" "),a("div",[t._v("诀窍提示：每天都可以给同一作品助力一次哦")]),t._v(" "),t._m(0),t._v(" "),t.allFlag?a("div",{staticClass:"resText"},[t._v(t._s(t.resText))]):t._e(),t._v(" "),t.allFlag?a("div",{staticClass:"allpoints"},[t._v(" + "+t._s(t.allpoints))]):t._e(),t._v(" "),a("div",{staticClass:"btn",on:{click:t.reject}},[a("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),a("div",{staticClass:"white"},[t._v("好 的")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"machine"},[e("dl",{staticClass:"rotate_box clear"},[e("dd",{staticClass:"one",attrs:{id:"one"}}),this._v(" "),e("dd",{staticClass:"two",attrs:{id:"two"}}),this._v(" "),e("dd",{staticClass:"three",attrs:{id:"three"}})])])])}]};var x=s("VU/8")(C,b,!1,function(t){s("5dv6")},null,null).exports,k=s("IQz4"),A=s.n(k),O=s("aUTJ"),P=s.n(O),y=s("+8Ho"),E=s.n(y),I=s("qoKn"),j=s.n(I),F={name:"App",props:["windowOpen","congratulateParise","points"],data:function(){return{isAchieve:!1,boxClass:"box",imgSrc:""}},mounted:function(){console.log(this.congratulateParise,this.points,"congratulateParisecongratulateParisecongratulateParise"),this.points&&this.congratulateParise&&this.congratulateParise.score&&(this.points>=this.congratulateParise.score?this.isAchieve=!0:this.isAchieve=!1,this.congratulateParise.score>=300?this.imgSrc=j.a:this.congratulateParise.score>=200?this.imgSrc=E.a:this.congratulateParise.score>=100?this.imgSrc=P.a:this.congratulateParise.score>=50&&(this.imgSrc=A.a))},methods:{openTakePart:function(){this.$router.push({path:"/takePart"})},reject:function(){this.$emit("update:windowOpen",!1)}}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"congratulate"},[a("div",{staticClass:"bg green"},[a("div",{staticClass:"reject",on:{click:t.reject}},[a("img",{attrs:{src:s("JA1j"),alt:""}})]),t._v(" "),a("h2",{staticClass:"white"},[t._v("恭喜获奖")]),t._v(" "),a("div",{staticClass:"prizeName"},[t._v("奖品名称")]),t._v(" "),a("div",{staticClass:"box"},[a("img",{attrs:{src:t.imgSrc,alt:""}}),t._v(" "),t.isAchieve?a("div",{staticClass:"achieve"},[a("img",{attrs:{src:s("pPg+"),alt:""}})]):t._e()]),t._v(" "),!1===t.isAchieve?a("div",[t._v("获得"+t._s(t.congratulateParise.score)+"积分，即可获得此游戏物品！")]):t._e(),t._v(" "),t.isAchieve?a("div",[t._v("梦幻秀作者已达成活动积分要求")]):t._e(),t._v(" "),t.isAchieve?a("div",[t._v("登录游戏即可领取此奖品！")]):t._e(),t._v(" "),a("div",{staticClass:"btn",on:{click:t.openTakePart}},[a("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),a("div",[t._v("立即参与")])])])])},staticRenderFns:[]};var S=s("VU/8")(F,B,!1,function(t){s("yN+T")},"data-v-eb79f0b6",null).exports,M={name:"takePart",props:["windowOpen"],methods:{openGame:function(){window.location.href="https://game.163.com/open/my/"},openGodlike:function(){window.location.href="https://app.16163.com/ds/ulinks/"},reject:function(){this.$emit("update:windowOpen",!1)}}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"takePart"},[a("div",{staticClass:"ruleExplain"},[a("div",{staticClass:"reject",on:{click:t.reject}},[a("img",{attrs:{src:s("JA1j"),alt:""}})]),t._v(" "),a("h2",{staticClass:"white"},[t._v("参与活动")]),t._v(" "),a("div",{staticClass:"content green"},[t._m(0),t._v(" "),a("div",{staticClass:"btn",on:{click:t.openGame}},[a("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),a("div",[t._v("打开游戏")])]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"btn",on:{click:t.openGodlike}},[a("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),a("div",[t._v("去大神参与活动")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"activityBrief"},[e("span",{staticClass:"strong"},[this._v("官服玩家")]),e("br"),this._v(" "),e("span",[this._v("官服玩家可在游戏内节日界面分享助力H5至微信或大神，即可参加活动")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"activityTime"},[e("span",{staticClass:"strong"},[this._v("渠道服玩家")]),e("br"),this._v(" "),e("span",[this._v("渠道服玩家请前往网易大神App，搜索“梦幻手游精灵”，绑定角色ID后接可参与活动")])])}]};var D=s("VU/8")(M,T,!1,function(t){s("87lr")},"data-v-555b8245",null).exports,N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rule"},[e("div",{staticClass:"ruleExplain"},[e("div",{staticClass:"reject",on:{click:this.reject}},[e("img",{attrs:{src:s("JA1j"),alt:""}})]),this._v(" "),e("h2",{staticClass:"white title"},[this._v("规则说明")]),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content green"},[s("div",{staticClass:"activityBrief"},[s("span",{staticClass:"strong title"},[t._v("活动简介：")]),t._v(" "),s("span",[t._v("助力赢积分，北溟鲲抱回家！只要参与游戏梦幻秀助力H5活动，即能获得积分，赢取北冥鲲等大奖哦！")])]),t._v(" "),s("div",{staticClass:"activityTime marginTop"},[s("span",{staticClass:"strong title"},[t._v("活动时间：")]),t._v(" "),s("span",[t._v("2019年9月29日-2019年10月7月")])]),t._v(" "),s("div",{staticClass:"activityRule marginTop"},[s("span",{staticClass:"strong title"},[t._v("活动规则：")]),s("br"),t._v(" "),s("span",[t._v("1丶玩家将游戏内的助力H5分享至微信或大神，即可在微信丶大神参与H5活动，获取积分，根据积分发放奖励。")]),s("br"),t._v(" "),s("span",[t._v("2丶所有奖励均通过游戏内邮件发放，玩家请及时登录游戏领取；玩家使用北冥鲲转盘道具奖")])])])}]};var R=s("VU/8")({name:"rule",props:["windowOpen"],methods:{reject:function(){this.$emit("update:windowOpen",!1)}}},N,!1,function(t){s("KRm5")},"data-v-6acac0f7",null).exports,L=s("ys0R"),U=s.n(L),H=s("Xi0g"),z=s.n(H),J={name:"HelloWorld",components:{swiper:f.swiper,swiperSlide:f.swiperSlide,sucessPage:x,congratulate:S,takePart:D,rule:R},watch:{},data:function(){var t=this;return{windowOpen:!1,windowName:"",swiperCard:[{id:1,name:"随机羊角包头饰",integral:"50",src:A.a,score:50},{id:2,name:"50000银币",integral:"100",src:P.a,score:100},{id:3,name:"翠羽金屏头像框",integral:"200",src:E.a,score:200},{id:4,name:"北溟鲲转盘",integral:"300",src:j.a,score:300},{id:5,name:"北溟鲲转盘",integral:"400",src:j.a,score:400},{id:6,name:"北溟鲲转盘",integral:"500",src:j.a,score:500}],swiperOption:{loop:!0,slidesPerView:3,centeredSlides:!0,on:{click:function(e){var s=t.$refs.mySwiper.swiper.clickedSlide.getElementsByClassName("integral")[0].innerHTML;"50积分"===s?t.congratulateParise=t.swiperCard[0]:"100积分"===s?t.congratulateParise=t.swiperCard[1]:"200积分"===s?t.congratulateParise=t.swiperCard[2]:"300积分"===s?t.congratulateParise=t.swiperCard[3]:"400积分"===s?t.congratulateParise=t.swiperCard[4]:"500积分"===s&&(t.congratulateParise=t.swiperCard[5]),t.windowOpen=!0,t.windowName="congratulate"}}},swiperOption2:{direction:"vertical",autoplay:!0,loop:!0,centeredSlides:!0},role_id:"179163154",roleData:null,show_img:"",user_image:"",role_name:"",friendArr:[],broadcast:[],points:"",congratulateParise:{}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper},swiper2:function(){return this.$refs.mySwiper2.swiper}},created:function(){this.init(),this.getFriendList()},mounted:function(){document.getElementsByTagName("meta")[1].content="user-scalable=0",console.log("this is current swiper instance object",this.swiper),this.swiper.slideTo(3,1e3,!1)},methods:{ShowDiv:function(t){document.body.style.overflow="hidden",document.addEventListener("touchmove",t,!1)},CloseDiv:function(t){document.body.style.overflow="",document.removeEventListener("touchmove",t,!1)},init:function(){var t=this,e=(localStorage.getItem("wxcode"),"/api/mhshow_h5/get_roleinfo?role_id="+(localStorage.getItem("role_id")||"179163154")+"&token=da778501bdd44a229a6b1fba4f80899a&token_type=wx");m.a.get(e).then(function(e){e&&e.data&&e.data.result&&(t.roleData=e.data.result,t.role_name=t.roleData.role_name?t.roleData.role_name:"",t.user_image=t.roleData.user_image?t.roleData.user_image:U.a,t.points=t.roleData.points?t.roleData.points:"",t.show_img=t.roleData.show_img?t.roleData.show_img:z.a)}).catch(function(t){console.log(t,"errorerrorerrorerror")})},getFriendList:function(){var t=this,e="/api/mhshow_h5/get_role_assistances?role_id="+this.role_id+"&user_num=5";m.a.get(e).then(function(e){if(e&&e.data&&e.data.result){for(var s=e.data.result,a=0;a<s.length;a++)(s[a].points=10)?s[a].message="缘分深厚，积分狂增!":(s[a].points=8)?s[a].message="缘分上佳，积分大增!":s[a].message="运气不错，积分增加!";t.friendArr=s}if(e&&e.data&&e.data.broadcast){for(var i=e.data.broadcast,n=0;n<i.length;n++)50===i[n]?i[n].src=A.a:100===i[n]?i[n].src=P.a:200===i[n]?i[n].src=E.a:i[n].src=j.a;t.broadcast=e.data.broadcast}})},helpDay:function(){var t=this,e=new FormData;e.append("role_id","179163154");m.a.post("/api/mhshow_h5/assistance",e).then(function(e){e&&e.data&&(t.points=e.data.points,t.windowOpen=!0,t.windowName="sucessPage")}).catch(function(e){t.points=5,t.windowOpen=!0,t.windowName="sucessPage",alert("今天已点赞啦，客官明日再来吧")})},callback:function(){},clickPraise:function(){this.helpDay()},gain:function(){this.windowOpen=!0,this.windowName="takePart"},ruleExplain:function(){this.windowOpen=!0,this.windowName="rule"}}},Y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homePage"},[a("div",{staticClass:"ruleExplain",on:{click:t.ruleExplain}}),t._v(" "),t.windowOpen?a("div",{staticClass:"layout"},["sucessPage"===t.windowName?a("sucessPage",{attrs:{windowOpen:t.windowOpen,allpoints:t.points},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e(),t._v(" "),"congratulate"===t.windowName?a("congratulate",{attrs:{windowOpen:t.windowOpen,congratulateParise:t.congratulateParise,points:t.points},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e(),t._v(" "),"takePart"===t.windowName?a("takePart",{attrs:{windowOpen:t.windowOpen},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e(),t._v(" "),"rule"===t.windowName?a("rule",{attrs:{windowOpen:t.windowOpen},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e()],1):t._e(),t._v(" "),a("div",{staticClass:"gain",on:{click:t.gain}},[a("img",{attrs:{src:s("kbjp"),alt:""}})]),t._v(" "),a("div",{staticClass:"front"},[a("section",{staticClass:"dreamWork"},[a("div",{staticClass:"bgBack"},[a("div",[t._v("梦幻秀作品")]),t._v(" "),a("div",{staticClass:"pic"},[a("img",{attrs:{src:t.show_img,alt:""}})]),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"clearFix"},[a("div",{staticClass:"tit lt"},[a("img",{attrs:{src:t.user_image,alt:""}})]),t._v(" "),a("div",{staticClass:"lt"},[a("div",[a("span",[t._v("作者：")]),t._v(" "),a("span",[t._v(t._s(t.role_name))])]),t._v(" "),a("div",[a("span",[t._v("积分：")]),t._v(" "),a("span",{staticClass:"red"},[t._v(t._s(t.points))])])])])])])]),t._v(" "),t._m(0),t._v(" "),a("section",{staticClass:"btn"},[a("div",{staticClass:"btnBox clearFix"},[t._m(1),t._v(" "),a("div",{staticClass:"lt"},[a("img",{staticClass:"helpImg",attrs:{src:s("vbIs"),alt:""},on:{click:t.clickPraise}})])])])]),t._v(" "),a("div",{staticClass:"behind"},[a("section",{staticClass:"bgGreen"},[a("div",{staticClass:"nickName"},[a("img",{attrs:{src:s("v9Ex"),alt:""}}),t._v(" "),t.broadcast.length?a("swiper",{ref:"mySwiper2",staticClass:"swiperBig2 swiper-no-swiping",attrs:{options:t.swiperOption2}},t._l(t.broadcast,function(e,i){return a("swiper-slide",{key:i},[a("div",{staticClass:"nameInfo"},[a("img",{staticClass:"header",attrs:{src:s("ys0R"),alt:""}}),t._v(" "),a("span",{staticClass:"white"},[t._v(t._s(e.role_name)+" 已满"+t._s(e.points)+"积分，获得 "+t._s(e.reward)+"!")])])])}),1):t._e()],1),t._v(" "),a("div",{staticClass:"white"},[t._v("\n\t\t\t\t\t动动手指，游戏大礼等你拿！\n\t\t\t\t")]),t._v(" "),a("swiper",{ref:"mySwiper",staticClass:"swiperBig",attrs:{options:t.swiperOption}},t._l(t.swiperCard,function(e){return a("swiper-slide",{key:e.id},[a("div",{staticClass:"swiperBox"},[a("div",{staticClass:"picture"},[t.points>=e.score?a("img",{staticClass:"achieve",attrs:{src:s("pPg+"),alt:""}}):t._e(),t._v(" "),a("div",{staticClass:"picImg"},[a("img",{attrs:{src:e.src,alt:""}})]),t._v(" "),a("div",{staticClass:"white"},[a("div",{staticClass:"giftName"},[t._v(t._s(e.name))]),t._v(" "),a("div",{staticClass:"integral"},[t._v(t._s(e.integral)+"积分")])])])])])}),1),t._v(" "),t._m(2)],1),t._v(" "),a("section",{staticClass:"help"},[a("h2",{staticClass:"white"},[t._v("助力榜")]),t._v(" "),t._m(3),t._v(" "),t._l(t.friendArr,function(e){return a("div",{key:e.time,staticClass:"clearFix personInfo"},[a("img",{staticClass:"lt",attrs:{src:e.user_image,alt:""}}),t._v(" "),a("div",{staticClass:"lt"},[a("div",{staticClass:"strong"},[t._v(t._s(e.user_name?e.user_name:""))]),t._v(" "),a("div",[t._v(t._s(e.message?e.message:""))])]),t._v(" "),a("div",{staticClass:"rl code"},[t._v("\n\t\t\t\t\t\t+ 100\n\t\t\t\t\t")])])}),t._v(" "),a("h2",{staticClass:"checkMore"},[t._v("\n\t\t\t\t\t这是最近为你助力的5位好友哦\n\t\t\t\t")])],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"prizePoint"},[s("div",[s("span",{staticClass:"white"},[t._v("距离")]),t._v(" "),s("span",{staticClass:"red"},[t._v("奖品名称奖品")]),t._v(" "),s("span",{staticClass:"white"},[t._v("仅剩")]),t._v(" "),s("span",{staticClass:"red"},[t._v("1234")]),t._v(" "),s("span",{staticClass:"white"},[t._v("积分!")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"lt"},[e("img",{attrs:{src:s("az9f"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",[this._v("1丶通过邮件发放，玩家使用后调出抽奖转盘，转盘含北冥醌")]),this._v(" "),e("div",[this._v("2丶可以获得永久冥醌，空间挂件（30天），金柳露，月华露，银币，红罗羹，绿芦羹，星辰碎片等道具。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"thanks"},[this._v("\n\t\t\t\t\t感谢以下的朋友为发起者\n\t\t\t\t\t"),e("span",{staticClass:"red"},[this._v("发起者昵称")]),this._v("\n\t\t\t\t\t的梦幻秀助力\n\t\t\t\t")])}]};var q=s("VU/8")(J,Y,!1,function(t){s("Im9q")},null,null).exports;a.a.use(o.a);var G=new o.a({routes:[{path:"/index",name:"homePage",component:q},{path:"/sucessPage",name:"sucessPage",component:x},{path:"/congratulate",name:"congratulate",component:S},{path:"/rule",name:"rule",component:R},{path:"/takePart",name:"takePart",component:D},{path:"/",name:"config",component:_}]}),Q=s("v5o6"),K=s.n(Q);a.a.config.productionTip=!1;var $=window.innerWidth;document.write("<style>html{font-size:"+$+"px;}</style>");var V=document.getElementsByTagName("body")[0],W=document.getElementsByTagName("html")[0];V.style.fontSize="32px",V.style.height="100%",W.style.height="100%",K.a.attach(document.body),new a.a({el:"#app",router:G,components:{App:n},template:"<App/>"})},Xi0g:function(t,e,s){t.exports=s.p+"static/img/person.aeee31b.png"},aUTJ:function(t,e,s){t.exports=s.p+"static/img/integral2.c4c40e5.png"},az9f:function(t,e,s){t.exports=s.p+"static/img/share.4acce88.png"},bD8f:function(t,e){},hW8u:function(t,e){},kbjp:function(t,e,s){t.exports=s.p+"static/img/takePart.7468bc1.png"},nOtf:function(t,e){},nsZj:function(t,e){},"pPg+":function(t,e,s){t.exports=s.p+"static/img/achieve.322385e.png"},qEC4:function(t,e){},qoKn:function(t,e,s){t.exports=s.p+"static/img/integral4.c23901b.png"},v2ns:function(t,e){},v9Ex:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAjCAYAAAAaLGNkAAADYUlEQVRYhe2YW4hNURjHf2fMaAxyKcrtQS6F120Yl5kiw/AipVB2SlEYtR9GxMMpRMiWF0KG5frgltyjEMlYSt7EGI3b24QZU4zbw/oW+6w5Z885M2fkwb92317fty7/861vfevbJ5FMJuksAt/zgSTQBmwGjuc6R6g0hV0gMB84GlEdA14Dd3KdqyBmkRGB7w2LGbtcZEIegLUx/YfLkx2JwPcqgUbgasykX0UuARbFzSfQGE/N6JBE4HtVwHVp7k1jnxP43j1ggahOAKfkfT5mO2alIbFd5C2XSEpMBL43DrgizXmh0lcitrHAYWCqqF4C94FXwA9glNjKgRuy2EqgXvrvwXj3rNhGW5sbmDaoFjsEKoDb0rwL1IRK14nN/cVlwE5gJvACKAUeie0csAw4AlwDxkBkOwLf2w0MAvaFSp+O6MdHCKwIla6wBDLgATANWCPtOmB8xH4U49HRwC6ARDKZJPC9ocBboCVUum+EQBHQAAwDloZKt8sDaTwRhS+LvgFGOLZmoA8w2Hpii8hVTseNQmB/OgJZQAHnMUez2rFtElmd+PjyUjHQAhAq/TtGAt/rDzRhjmJJqPSPdKt04AmAEuADUAQUA19E31PeWwowAdQDOOAMrsIkoZOZCGSJVsDG2OSI/qvo+xQAk0R5nVRMFHm5CwQsLoqc6ehvgjkds0XxzOlgI/pJHkjYOUodfb0lMU4Uz50OvUR2ZSssvosscfRPgfpCTIYrCJX+7nRoFVmcBxJ2js+OvgmoKgyVzuRuezP+zAMJO0fCNYRKP4+79f4a/pOw+OdJfBPZI4/ruCewQxKxA3NE7AmLIzFFZGMeSLwTWZbO2K7kD3xvAOZi6QccDJVubTcqd3wELmBq0EuYwrjFGlM8EfheOaYkq8SUYqvzQMBiIaZ6n8efsg+IeCLwvTL+1JhbQ6U3kV98A+YCO4AaTBk4BXgY9cQ2kWXdQCCKdcB0zC5sh9SYsB8zEwLfGwj07iYSzcAQeW9zSWzA3KiHumlxF5+A9SkkQqUfywfOUmAkxjOZzncbJn+4t+JPTHIryjAugaktGzBl//sUEkKkEdia9W8hq0K3Q3Tqr4HA96oxR87NISXAGdJ8w+adBCbRTM9gq811sk7doqHStZjM1+w8FzpD4hfDd+UHEHcgtwAAAABJRU5ErkJggg=="},vbIs:function(t,e,s){t.exports=s.p+"static/img/praise.8a42458.png"},vsMI:function(t,e,s){t.exports=s.p+"static/img/btn.4997e0e.png"},"yN+T":function(t,e){},ys0R:function(t,e,s){t.exports=s.p+"static/img/head.b2aa9f4.png"}},["NHnr"]);
//# sourceMappingURL=app.f35aa0a3a229ce6260b2.js.map