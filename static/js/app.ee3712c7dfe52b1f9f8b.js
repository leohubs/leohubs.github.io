webpackJsonp([1],{"+8Ho":function(t,e,s){t.exports=s.p+"static/img/integral3.782c4e1.png"},"5Hoj":function(t,e){},G84d:function(t,e){},IQz4:function(t,e,s){t.exports=s.p+"static/img/integral1.5baa224.png"},JA1j:function(t,e,s){t.exports=s.p+"static/img/close.f3e8cfc.png"},JKiR:function(t,e){},KRm5:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},n,!1,function(t){s("bD8f")},null,null).exports,o=s("/ocq"),r=s("bOdI"),c=s.n(r),l=(s("XmAh"),s("il3B")),d=(s("nOaS"),s("pIDD")),p=(s("mMXg"),s("qYlo")),h=(s("nI2B"),s("qWG/")),u=s("mtWM"),v=s.n(u);i.a.use(h.a),i.a.use(p.a),i.a.use(d.a);var g={components:c()({},l.a.Component.name,l.a.Component),data:function(){return{role_id:"",token:"",token_type:"",showLoading:!1,show:!1,login:!1,selectList:[],selectObj:{},selectPic:"",nickName:"",mobileSelectObj:null}},methods:{changeNext:function(){this.login=!1},onConfirm:function(t,e){this.login=!1,this.show=!0,this.selectObj=t,this.selectPic=t.icon,this.nickName=t.nick},onCancel:function(){this.login=!1,this.show=!0},beforeClose:function(t,e){var s=this;if("confirm"===t){var i=new FormData,n=this.selectObj.icon,a=n.slice(n.lastIndexOf("/")+1,n.lastIndexOf("."));i.append("role_id",this.selectObj.roleId),i.append("role_name",this.selectObj.nick),i.append("icon",a),i.append("hostname",this.selectObj.serverName),i.append("host",this.selectObj.server),i.append("from",this.selectObj.appKey),v.a.post("/mhshow_h5/init_roleinfo",i).then(function(t){t&&200===t.data.code&&ds.getAccessToken({appId:"5d81e28d1da86cffea4b7829"}).then(function(t){return s.token=t.result.accessToken,s.$router.push({path:"/index",query:{role_id:s.selectObj.roleId,code:s.token,token_type:"ds"}}),t})}).catch(function(t){l.a.alert("请求错误")}),e()}else"cancel"===t&&(this.login=!0,e())},getParameter:function(t){var e=window.location.search,s=t.length,i=e.indexOf(t);if(-1==i)return"";i+=s+1;var n=e.indexOf("&",i);return-1==n?e.substring(i):e.substring(i,n)},isWeiXin:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}},mounted:function(){document.getElementsByTagName("meta")[1].content="initial-scale=1.0";var t=this,e=this.getParameter("role_id");if(this.isWeiXin()){var s=this.getParameter("code");s?(localStorage.setItem("appToken",s),localStorage.setItem("role_id",e),localStorage.setItem("token_type","wx"),t.$router.push({path:"/index"})):window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0376800bd1071c94&redirect_uri=https%3a%2f%2fexth5.dev.16163.com%3frole_id%3d"+e+"&response_type=code&scope=snsapi_userinfo&state=mhshow_h5"}else ds.ready().then(function(){ds.isGodlike?ds.checkLogined().then(function(t){return t}).then(function(s){s&&s.result.isLogined?(ds.getAccessToken({appId:"5d81e28d1da86cffea4b7829"}).then(function(s){return t.token=s.result.accessToken,t.$router.push({path:"/index",query:{role_id:e,code:t.token,token_type:"ds"}}),s}),e?ds.getAccessToken({appId:"5d81e28d1da86cffea4b7829"}).then(function(s){return t.token=s.result.accessToken,t.$router.push({path:"/index",query:{role_id:e,code:t.token,token_type:"ds"}}),s}):ds.getBindGameRoleList({gameCode:"g18",minLevel:0}).then(function(e){if(e&&e.result&&e.result.list.length>0){for(var s=0;s<e.result.list.length;s++)e.result.list[s].text=e.result.list[s].nick+" - "+e.result.list[s].serverName;t.selectList=e.result.list,t.selectObj=e.result.list[0],t.nickName=t.selectList[0].nick,t.selectPic=t.selectList[0].icon,t.show=!0}else l.a.alert({message:"绑定梦幻手游角色后即可参与活动！",confirmButtonText:"去绑定"}).then(function(){ds.openGameRoleBindingPage({gameCode:"g18"})})})):s&&!s.result.isLogined&&l.a.alert({message:"登录且绑定梦幻手游角色后即可参与活动！",confirmButtonText:"去登录"}).then(function(){ds.openLoginPage()})}):t.$router.push({path:"/index"})})}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"verify"},[s("van-popup",{attrs:{position:"bottom"},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}},[s("van-picker",{attrs:{"show-toolbar":"",title:"",columns:t.selectList},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1),t._v(" "),s("van-dialog",{attrs:{title:"确认角色信息",confirmButtonText:"参与活动",cancelButtonText:"换一个","item-height":"100",beforeClose:t.beforeClose,"show-cancel-button":""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("div",{staticClass:"windowInfo"},[s("img",{attrs:{src:t.selectPic}}),t._v(" "),s("span",[t._v(t._s(t.nickName))])])]),t._v(" "),t.showLoading?s("van-loading",{staticClass:"loding",attrs:{color:"#1989fa"}}):t._e()],1)},staticRenderFns:[]};var w=s("VU/8")(g,m,!1,function(t){s("RvE3")},"data-v-8b9ec176",null).exports,_=(s("v2ns"),s("7QTg")),f={name:"sucessPage",props:["windowOpen","allpoints"],data:function(){return{msg:[100,200,300],point:8,resText:"缘分上佳，积分大增！",oneFlag:!1,twoFlag:!1,threeFlag:!1,allFlag:!1}},watch:{oneFlag:function(t){this.allFlagChagne()},twoFlag:function(){this.allFlagChagne()},threeFlag:function(){this.allFlagChagne()}},mounted:function(){var t=this;console.log(t.allpoints,"allpointsallpointsallpoints"),t.allpoints&&setTimeout(function(){t.init()},500)},methods:{reject:function(){this.$emit("update:windowOpen",!1),this.$emit("getHelp",!0)},allFlagChagne:function(){this.oneFlag&&this.twoFlag&&this.threeFlag?this.allFlag=!0:this.allFlag=!1},init:function(){console.log(this.point,"allpointsallpointsallpoints");var t=this,e=document.getElementById("one"),s=document.getElementById("two"),i=document.getElementById("three");if(10===this.allpoints){var n=parseInt(3*Math.random());console.log(n,"randomrandomrandomrandom");var a="";0===n?a="-2072px":1===n?a="-1820px":2===n&&(a="-1560px"),e.style.backgroundPositionY=a,s.style.backgroundPositionY=a,i.style.backgroundPositionY=a,this.resText="缘分深厚，积分狂增！"}else if(8===this.allpoints){for(var o=parseInt(3*Math.random()),r=parseInt(3*Math.random()),c=parseInt(3*Math.random()),l=[],d=[];o===r;)o=parseInt(3*Math.random()),r=parseInt(3*Math.random());0===c?d=[o,o,r]:1===c?d=[o,r,o]:2===c&&(d=[o,r,r]);for(var p=0;p<d.length;p++){var h="";0===d[p]?h="-2072px":1===d[p]?h="-1820px":2===d[p]&&(h="-1560px"),l.push(h)}e.style.backgroundPositionY=l[0],s.style.backgroundPositionY=l[1],i.style.backgroundPositionY=l[2],this.resText="缘分上佳，积分大增！"}else if(5===this.allpoints){for(var u=parseInt(3*Math.random()),v=parseInt(3*Math.random()),g=parseInt(3*Math.random()),m=[];u===v||u===g||v===g;)u=parseInt(3*Math.random()),v=parseInt(3*Math.random()),g=parseInt(3*Math.random());for(var w=[u,v,g],_=0;_<w.length;_++){var f="";0===w[_]?f="-2072px":1===w[_]?f="-1820px":2===w[_]&&(f="-1560px"),m.push(f)}e.style.backgroundPositionY=m[0],s.style.backgroundPositionY=m[1],i.style.backgroundPositionY=m[2],this.resText="运气不错，积分增加！"}e.addEventListener("transitionend",function(){t.oneFlag=!0}),s.addEventListener("transitionend",function(){t.twoFlag=!0}),i.addEventListener("transitionend",function(){t.threeFlag=!0})}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sucessPage"},[i("div",{staticClass:"helpSucess green"},[i("h2",{staticClass:"white"},[t._v("助力成功")]),t._v(" "),i("div",[t._v("诀窍提示：每天都可以给同一作品助力一次哦")]),t._v(" "),t._m(0),t._v(" "),t.allFlag?i("div",{staticClass:"resText"},[t._v(t._s(t.resText))]):t._e(),t._v(" "),t.allFlag?i("div",{staticClass:"allpoints"},[t._v(" + "+t._s(t.allpoints))]):t._e(),t._v(" "),i("div",{staticClass:"btn",on:{click:t.reject}},[i("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),i("div",{staticClass:"white"},[t._v("好 的")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("div",{staticClass:"machine"},[e("dl",{staticClass:"rotate_box clear"},[e("dd",{staticClass:"one",attrs:{id:"one"}}),this._v(" "),e("dd",{staticClass:"two",attrs:{id:"two"}}),this._v(" "),e("dd",{staticClass:"three",attrs:{id:"three"}})])])])}]};var k=s("VU/8")(f,C,!1,function(t){s("UKMd")},null,null).exports,P=s("IQz4"),b=s.n(P),x=s("aUTJ"),A=s.n(x),O=s("+8Ho"),y=s.n(O),S=s("qoKn"),E=s.n(S),I={name:"App",props:["windowOpen","congratulateParise","points","windowName"],data:function(){return{isAchieve:!1,boxClass:"box",imgSrc:""}},mounted:function(){console.log(this.congratulateParise,this.points,"congratulateParisecongratulateParisecongratulateParise"),(this.points||0===this.points)&&this.congratulateParise&&this.congratulateParise.score&&(this.points>=this.congratulateParise.score?this.isAchieve=!0:this.isAchieve=!1,this.congratulateParise.score>=300?this.imgSrc=E.a:this.congratulateParise.score>=200?this.imgSrc=y.a:this.congratulateParise.score>=100?this.imgSrc=A.a:this.congratulateParise.score>=50&&(this.imgSrc=b.a))},methods:{openTakePart:function(){this.$emit("update:windowName","takePart")},reject:function(){this.$emit("update:windowOpen",!1)}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"congratulate"},[i("div",{staticClass:"bg green"},[i("div",{staticClass:"reject",on:{click:t.reject}},[i("img",{attrs:{src:s("JA1j"),alt:""}})]),t._v(" "),i("h2",{staticClass:"white"},[t._v("恭喜获奖")]),t._v(" "),i("div",{staticClass:"prizeName"},[t._v("奖品名称")]),t._v(" "),i("div",{staticClass:"box"},[i("img",{attrs:{src:t.imgSrc,alt:""}}),t._v(" "),t.isAchieve?i("div",{staticClass:"achieve"},[i("img",{attrs:{src:s("pPg+"),alt:""}})]):t._e()]),t._v(" "),!1===t.isAchieve?i("div",[t._v("获得"+t._s(t.congratulateParise.score)+"积分，即可获得此游戏物品！")]):t._e(),t._v(" "),t.isAchieve?i("div",[t._v("梦幻秀作者已达成活动积分要求")]):t._e(),t._v(" "),t.isAchieve?i("div",[t._v("登录游戏即可领取此奖品！")]):t._e(),t._v(" "),i("div",{staticClass:"btn",on:{click:t.openTakePart}},[i("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),i("div",[t._v("立即参与")])])])])},staticRenderFns:[]};var j=s("VU/8")(I,F,!1,function(t){s("G84d")},"data-v-6e3cb6d0",null).exports,T={name:"takePart",props:["windowOpen","isOutSide"],methods:{openGame:function(){window.location.href="https://game.163.com/open/my/"},openGodlike:function(){window.location.href="https://app.16163.com/ds/ulinks/"},reject:function(){this.$emit("update:windowOpen",!1)}}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"takePart"},[i("div",{staticClass:"ruleExplain"},[!0!==t.isOutSide?i("div",{staticClass:"reject",on:{click:t.reject}},[i("img",{attrs:{src:s("JA1j"),alt:""}})]):t._e(),t._v(" "),i("h2",{staticClass:"white"},[t._v("参与活动")]),t._v(" "),i("div",{staticClass:"content green"},[t._m(0),t._v(" "),i("div",{staticClass:"btn",on:{click:t.openGame}},[i("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),i("div",[t._v("打开游戏")])]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"btn",on:{click:t.openGodlike}},[i("img",{attrs:{src:s("vsMI"),alt:""}}),t._v(" "),i("div",[t._v("去大神参与活动")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"activityBrief"},[e("span",{staticClass:"strong"},[this._v("官服玩家")]),e("br"),this._v(" "),e("span",[this._v("官服玩家可在游戏内节日界面分享助力H5至微信或大神，即可参加活动")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"activityTime"},[e("span",{staticClass:"strong"},[this._v("渠道服玩家")]),e("br"),this._v(" "),e("span",[this._v("渠道服玩家请前往网易大神App，搜索“梦幻手游精灵”，绑定角色ID后接可参与活动")])])}]};var M=s("VU/8")(T,B,!1,function(t){s("ZCtL")},"data-v-61e06e08",null).exports,N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rule"},[e("div",{staticClass:"ruleExplain"},[e("div",{staticClass:"reject",on:{click:this.reject}},[e("img",{attrs:{src:s("JA1j"),alt:""}})]),this._v(" "),e("h2",{staticClass:"white title"},[this._v("规则说明")]),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content green"},[s("div",{staticClass:"activityBrief"},[s("span",{staticClass:"strong title"},[t._v("活动简介：")]),t._v(" "),s("span",[t._v("助力赢积分，北溟鲲抱回家！只要参与游戏梦幻秀助力H5活动，即能获得积分，赢取北冥鲲等大奖哦！")])]),t._v(" "),s("div",{staticClass:"activityTime marginTop"},[s("span",{staticClass:"strong title"},[t._v("活动时间：")]),t._v(" "),s("span",[t._v("2019年9月29日-2019年10月7月")])]),t._v(" "),s("div",{staticClass:"activityRule marginTop"},[s("span",{staticClass:"strong title"},[t._v("活动规则：")]),s("br"),t._v(" "),s("span",[t._v("1丶玩家将游戏内的助力H5分享至微信或大神，即可在微信丶大神参与H5活动，获取积分，根据积分发放奖励。")]),s("br"),t._v(" "),s("span",[t._v("2丶所有奖励均通过游戏内邮件发放，玩家请及时登录游戏领取；玩家使用北冥鲲转盘道具奖")])])])}]};var R=s("VU/8")({name:"rule",props:["windowOpen"],methods:{reject:function(){this.$emit("update:windowOpen",!1)}}},N,!1,function(t){s("KRm5")},"data-v-6acac0f7",null).exports,L=s("ys0R"),U=s.n(L),D=s("Xi0g"),G=s.n(D),H={name:"HelloWorld",components:{swiper:_.swiper,swiperSlide:_.swiperSlide,sucessPage:k,congratulate:j,takePart:M,rule:R},watch:{},data:function(){var t=this;return{isOutSide:"",windowOpen:!1,windowName:"",pictureSrc:"http://yxzs.163.com/appresource/g18/",swiperCard:[{id:1,name:"随机羊角包头饰",integral:"50",src:b.a,score:50},{id:2,name:"50000银币",integral:"100",src:A.a,score:100},{id:3,name:"翠羽金屏头像框",integral:"200",src:y.a,score:200},{id:4,name:"北溟鲲转盘",integral:"300",src:E.a,score:300},{id:5,name:"北溟鲲转盘",integral:"400",src:E.a,score:400},{id:6,name:"北溟鲲转盘",integral:"500",src:E.a,score:500}],swiperOption:{loop:!0,slidesPerView:3,centeredSlides:!0,on:{click:function(e){var s=t.$refs.mySwiper.swiper.clickedSlide.getElementsByClassName("integral")[0].innerHTML;"50积分"===s?t.congratulateParise=t.swiperCard[0]:"100积分"===s?t.congratulateParise=t.swiperCard[1]:"200积分"===s?t.congratulateParise=t.swiperCard[2]:"300积分"===s?t.congratulateParise=t.swiperCard[3]:"400积分"===s?t.congratulateParise=t.swiperCard[4]:"500积分"===s&&(t.congratulateParise=t.swiperCard[5]),t.windowOpen=!0,t.windowName="congratulate"}}},swiperOption2:{direction:"vertical",autoplay:!0,loop:!0,centeredSlides:!0},role_id:"",token:"",token_type:"",roleData:null,show_img:"",user_image:"",role_name:"",friendArr:[],broadcast:[],points:"",helpPoints:"",highPointsAchieve:"",restPoint:"",congratulateParise:{},shareParam:"",mobileShare:""}},computed:{swiper:function(){return this.$refs.mySwiper.swiper},swiper2:function(){return this.$refs.mySwiper2.swiper}},created:function(){this.role_id=this.getParameter("role_id"),this.shareParam={title:"我正在参加《梦幻西游》手游捏脸活动，为我助力吧！",desc:"我捏的脸这么好看，快来给我点赞帮我抱走永久北溟鲲啦～你也一起来玩吧！",link:"https://exth5.dev.16163.com/?role_id="+this.role_id+"&utm_source=ds",imgUrl:"https://webinput.nie.netease.com/img/my/icon.png",socialNetwork:0},this.mobileShare=new MobileShare({title:"我正在参加《梦幻西游》手游捏脸活动，为我助力吧！",desc:"我捏的脸这么好看，快来给我点赞帮我抱走永久北溟鲲啦～你也一起来玩吧！",link:"https://exth5.dev.16163.com/?role_id="+this.role_id+"&utm_source=wx",imgUrl:"https://webinput.nie.netease.com/img/my/icon.png"}),this.init()},mounted:function(){document.getElementsByTagName("meta")[1].content="user-scalable=0",this.swiper.slideTo(3,1e3,!1)},methods:{shareTo:function(){ds.isGodlike?ds.doShare(this.shareParam):this.mobileShare.show()},getParameter:function(t){var e=window.location.search,s=t.length,i=e.indexOf(t);if(-1==i)return"";i+=s+1;var n=e.indexOf("&",i);return-1==n?e.substring(i):e.substring(i,n)},init:function(){var t=this,e=this;this.token=this.$route.query.code,this.role_id=this.$route.query.role_id,this.token_type=this.$route.query.token_type,console.log("role_id:"+this.role_id),console.log("token:"+this.token),console.log("token_type:"+this.token_type),this.role_id||"ds"===this.token_type||(this.windowOpen=!0,this.windowName="takePart",this.isOutSide=!0);var s="/mhshow_h5/get_roleinfo?role_id="+this.role_id+"&token="+this.token+"&token_type="+this.token_type;v.a.get(s).then(function(s){s&&s.data&&s.data.result&&(e.roleData=s.data.result,e.role_name=e.roleData.role_name?e.roleData.role_name:"",e.user_image=e.roleData.icon?t.pictureSrc+e.roleData.icon+".png":U.a,e.points=e.roleData.points,e.getFriendList(),e.points<50?(e.highPointsAchieve="随机羊角包头饰",e.restPoint=50-e.points):e.points>=50&&e.points<100?(e.highPointsAchieve="50000银元",e.restPoint=100-e.points):e.points>=100&&e.points<200?(e.highPointsAchieve="翠羽金屏头像框",e.restPoint=200-e.points):e.points>=200&&e.points<300?(e.highPointsAchieve="北溟鲲转盘",e.restPoint=300-e.points):e.points>=300&&e.points<400?(e.highPointsAchieve="北溟鲲转盘",e.restPoint=400-e.points):e.points>=400&&e.points<500&&(e.highPointsAchieve="北溟鲲转盘",e.restPoint=500-e.points),e.show_img=e.roleData.show_img?e.roleData.show_img:G.a)}).catch(function(t){console.log(t,"errorerrorerrorerror")})},getFriendList:function(){var t=this,e=this,s="/mhshow_h5/get_role_assistances?role_id="+this.role_id+"&user_num=5";v.a.get(s).then(function(s){if(s&&s.data&&s.data.result){for(var i=s.data.result,n=0;n<i.length;n++)10===i[n].points?i[n].message="缘分深厚，积分狂增!":8===i[n].points?i[n].message="缘分上佳，积分大增!":i[n].message="运气不错，积分增加!";e.friendArr=i}if(s&&s.data&&s.data.broadcast){for(var a=s.data.broadcast,o=0;o<a.length;o++)a[o].picSrc=t.pictureSrc+a[o].icon+".png";e.broadcast=a}})},helpDay:function(){var t=this,e=new FormData;e.append("role_id",this.role_id);v.a.post("/mhshow_h5/assistance",e).then(function(e){e&&e.data&&(t.helpPoints=e.data.points,t.windowOpen=!0,t.windowName="sucessPage")}).catch(function(e){t.helpPoints=5,t.windowOpen=!0,t.windowName="sucessPage",alert("今天已点赞啦，客官明日再来吧")})},callback:function(){},clickPraise:function(){this.helpDay()},gain:function(){this.windowOpen=!0,this.windowName="takePart"},ruleExplain:function(){this.windowOpen=!0,this.windowName="rule"},getHelp:function(t){t&&this.init()}}},q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"homePage"},[i("div",{staticClass:"ruleExplain",on:{click:t.ruleExplain}}),t._v(" "),t.windowOpen?i("div",{staticClass:"layout"},["sucessPage"===t.windowName?i("sucessPage",{attrs:{windowOpen:t.windowOpen,allpoints:t.helpPoints},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e},getHelp:t.getHelp}}):t._e(),t._v(" "),"congratulate"===t.windowName?i("congratulate",{attrs:{windowOpen:t.windowOpen,congratulateParise:t.congratulateParise,points:t.points,windowName:t.windowName},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e},"update:windowName":function(e){t.windowName=e},"update:window-name":function(e){t.windowName=e}}}):t._e(),t._v(" "),"takePart"===t.windowName?i("takePart",{attrs:{windowOpen:t.windowOpen,isOutSide:t.isOutSide},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e(),t._v(" "),"rule"===t.windowName?i("rule",{attrs:{windowOpen:t.windowOpen},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e()],1):t._e(),t._v(" "),i("div",{staticClass:"gain",on:{click:t.gain}},[i("img",{attrs:{src:s("kbjp"),alt:""}})]),t._v(" "),i("div",{staticClass:"front"},[i("section",{staticClass:"dreamWork"},[i("div",{staticClass:"bgBack"},[i("div",[t._v("梦幻秀作品")]),t._v(" "),i("div",{staticClass:"pic"},[i("img",{attrs:{src:t.show_img,alt:""}})]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"clearFix"},[i("div",{staticClass:"tit lt"},[i("img",{attrs:{src:t.user_image,alt:""}})]),t._v(" "),i("div",{staticClass:"lt"},[i("div",[i("span",[t._v("作者：")]),t._v(" "),i("span",[t._v(t._s(t.role_name))])]),t._v(" "),i("div",[i("span",[t._v("积分：")]),t._v(" "),i("span",{staticClass:"red"},[t._v(t._s(t.points))])])])])])])]),t._v(" "),i("section",{staticClass:"prizePoint"},[t.points<=500?i("div",[i("span",{staticClass:"white"},[t._v("距离")]),t._v(" "),i("span",{staticClass:"red"},[t._v(t._s(t.highPointsAchieve))]),t._v(" "),i("span",{staticClass:"white"},[t._v("仅剩")]),t._v(" "),i("span",{staticClass:"red"},[t._v(t._s(t.restPoint))]),t._v(" "),i("span",{staticClass:"white"},[t._v("积分!")])]):t._e(),t._v(" "),t.points>500?i("div",[i("span",{staticClass:"white"},[t._v("已获得最终大奖")]),t._v(" "),i("span",{staticClass:"red"},[t._v("北溟鲲转盘")])]):t._e()]),t._v(" "),i("section",{staticClass:"btn"},[i("div",{staticClass:"btnBox clearFix"},[i("div",{staticClass:"lt",on:{click:t.shareTo}},[i("img",{attrs:{src:s("az9f"),alt:""}})]),t._v(" "),i("div",{staticClass:"lt"},[i("img",{staticClass:"helpImg",attrs:{src:s("vbIs"),alt:""},on:{click:t.clickPraise}})])])])]),t._v(" "),i("div",{staticClass:"behind"},[i("section",{staticClass:"bgGreen"},[i("div",{staticClass:"nickName"},[i("img",{attrs:{src:s("v9Ex"),alt:""}}),t._v(" "),t.broadcast.length?i("swiper",{ref:"mySwiper2",staticClass:"swiperBig2 swiper-no-swiping",attrs:{options:t.swiperOption2}},t._l(t.broadcast,function(e,s){return i("swiper-slide",{key:s},[i("div",{staticClass:"nameInfo"},[i("img",{staticClass:"header",attrs:{src:e.picSrc,alt:""}}),t._v(" "),i("span",{staticClass:"white"},[t._v(t._s(e.role_name)+" 已满"+t._s(e.points)+"积分，获得 "+t._s(e.reward)+"!")])])])}),1):t._e()],1),t._v(" "),i("div",{staticClass:"white"},[t._v("\n\t\t\t\t\t动动手指，游戏大礼等你拿！\n\t\t\t\t")]),t._v(" "),i("swiper",{ref:"mySwiper",staticClass:"swiperBig",attrs:{options:t.swiperOption}},t._l(t.swiperCard,function(e){return i("swiper-slide",{key:e.id},[i("div",{staticClass:"swiperBox"},[i("div",{staticClass:"picture"},[t.points>=e.score?i("img",{staticClass:"achieve",attrs:{src:s("pPg+"),alt:""}}):t._e(),t._v(" "),i("div",{staticClass:"picImg"},[i("img",{attrs:{src:e.src,alt:""}})]),t._v(" "),i("div",{staticClass:"white"},[i("div",{staticClass:"giftName"},[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"integral"},[t._v(t._s(e.integral)+"积分")])])])])])}),1),t._v(" "),t._m(0)],1),t._v(" "),i("section",{staticClass:"help"},[i("h2",{staticClass:"white"},[t._v("助力榜")]),t._v(" "),i("div",{staticClass:"thanks"},[t._v("\n\t\t\t\t\t感谢以下的朋友为发起者\n\t\t\t\t\t"),i("span",{staticClass:"red"},[t._v(t._s(t.role_name))]),t._v("\n\t\t\t\t\t的梦幻秀助力\n\t\t\t\t")]),t._v(" "),t._l(t.friendArr,function(e){return i("div",{key:e.time,staticClass:"clearFix personInfo"},[i("img",{staticClass:"lt",attrs:{src:e.user_image,alt:""}}),t._v(" "),i("div",{staticClass:"lt"},[i("div",{staticClass:"strong"},[t._v(t._s(e.user_name?e.user_name:""))]),t._v(" "),i("div",[t._v(t._s(e.message?e.message:""))])]),t._v(" "),i("div",{staticClass:"rl code"},[t._v("\n\t\t\t\t\t\t+ "+t._s(e.points)+"\n\t\t\t\t\t")])])}),t._v(" "),i("h2",{staticClass:"checkMore"},[t._v("\n\t\t\t\t\t这是最近为你助力的5位好友哦\n\t\t\t\t")])],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",[this._v("1丶通过邮件发放，玩家使用后调出抽奖转盘，转盘含北溟鲲")]),this._v(" "),e("div",[this._v("2丶可以获得永久冥醌，空间挂件（30天），金柳露，月华露，银币，红罗羹，绿芦羹，星辰碎片等道具。")])])}]};var z=s("VU/8")(H,q,!1,function(t){s("pGZv")},null,null).exports;i.a.use(o.a);var J=new o.a({routes:[{path:"/index",name:"homePage",component:z},{path:"/sucessPage",name:"sucessPage",component:k},{path:"/congratulate",name:"congratulate",component:j},{path:"/rule",name:"rule",component:R},{path:"/takePart",name:"takePart",component:M},{path:"/",name:"config",component:w}]}),K=s("v5o6"),Y=s.n(K),$=s("Lw6n"),Q=new(s.n($).a);i.a.use(Q),v.a.defaults.baseURL="//ext.dev.16163.com",v.a.defaults.withCredentials=!0;var V=window.innerWidth;document.write("<style>html{font-size:"+V+"px;}</style>");var Z=document.getElementsByTagName("body")[0],W=document.getElementsByTagName("html")[0];Z.style.fontSize="32px",W.style.overflow="auto",Z.style.overflow="auto",Z.style.height="100%",W.style.height="100%",Y.a.attach(document.body),new i.a({el:"#app",router:J,components:{App:a},template:"<App/>"})},RvE3:function(t,e){},UKMd:function(t,e){},Xi0g:function(t,e,s){t.exports=s.p+"static/img/person.aeee31b.png"},ZCtL:function(t,e){},aUTJ:function(t,e,s){t.exports=s.p+"static/img/integral2.c4c40e5.png"},az9f:function(t,e,s){t.exports=s.p+"static/img/share.4acce88.png"},bD8f:function(t,e){},hW8u:function(t,e){},kbjp:function(t,e,s){t.exports=s.p+"static/img/takePart.7468bc1.png"},nOtf:function(t,e){},nsZj:function(t,e){},pGZv:function(t,e){},"pPg+":function(t,e,s){t.exports=s.p+"static/img/achieve.322385e.png"},qoKn:function(t,e,s){t.exports=s.p+"static/img/integral4.c23901b.png"},v2ns:function(t,e){},v9Ex:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAjCAYAAAAaLGNkAAADYUlEQVRYhe2YW4hNURjHf2fMaAxyKcrtQS6F120Yl5kiw/AipVB2SlEYtR9GxMMpRMiWF0KG5frgltyjEMlYSt7EGI3b24QZU4zbw/oW+6w5Z885M2fkwb92317fty7/861vfevbJ5FMJuksAt/zgSTQBmwGjuc6R6g0hV0gMB84GlEdA14Dd3KdqyBmkRGB7w2LGbtcZEIegLUx/YfLkx2JwPcqgUbgasykX0UuARbFzSfQGE/N6JBE4HtVwHVp7k1jnxP43j1ggahOAKfkfT5mO2alIbFd5C2XSEpMBL43DrgizXmh0lcitrHAYWCqqF4C94FXwA9glNjKgRuy2EqgXvrvwXj3rNhGW5sbmDaoFjsEKoDb0rwL1IRK14nN/cVlwE5gJvACKAUeie0csAw4AlwDxkBkOwLf2w0MAvaFSp+O6MdHCKwIla6wBDLgATANWCPtOmB8xH4U49HRwC6ARDKZJPC9ocBboCVUum+EQBHQAAwDloZKt8sDaTwRhS+LvgFGOLZmoA8w2Hpii8hVTseNQmB/OgJZQAHnMUez2rFtElmd+PjyUjHQAhAq/TtGAt/rDzRhjmJJqPSPdKt04AmAEuADUAQUA19E31PeWwowAdQDOOAMrsIkoZOZCGSJVsDG2OSI/qvo+xQAk0R5nVRMFHm5CwQsLoqc6ehvgjkds0XxzOlgI/pJHkjYOUodfb0lMU4Uz50OvUR2ZSssvosscfRPgfpCTIYrCJX+7nRoFVmcBxJ2js+OvgmoKgyVzuRuezP+zAMJO0fCNYRKP4+79f4a/pOw+OdJfBPZI4/ruCewQxKxA3NE7AmLIzFFZGMeSLwTWZbO2K7kD3xvAOZi6QccDJVubTcqd3wELmBq0EuYwrjFGlM8EfheOaYkq8SUYqvzQMBiIaZ6n8efsg+IeCLwvTL+1JhbQ6U3kV98A+YCO4AaTBk4BXgY9cQ2kWXdQCCKdcB0zC5sh9SYsB8zEwLfGwj07iYSzcAQeW9zSWzA3KiHumlxF5+A9SkkQqUfywfOUmAkxjOZzncbJn+4t+JPTHIryjAugaktGzBl//sUEkKkEdia9W8hq0K3Q3Tqr4HA96oxR87NISXAGdJ8w+adBCbRTM9gq811sk7doqHStZjM1+w8FzpD4hfDd+UHEHcgtwAAAABJRU5ErkJggg=="},vbIs:function(t,e,s){t.exports=s.p+"static/img/praise.8a42458.png"},vsMI:function(t,e,s){t.exports=s.p+"static/img/btn.4997e0e.png"},ys0R:function(t,e,s){t.exports=s.p+"static/img/head.b2aa9f4.png"}},["NHnr"]);
//# sourceMappingURL=app.ee3712c7dfe52b1f9f8b.js.map