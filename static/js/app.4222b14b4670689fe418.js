webpackJsonp([1],{"+8Ho":function(t,e,i){t.exports=i.p+"static/img/integral3.782c4e1.png"},"5Hoj":function(t,e){},"99RW":function(t,e,i){t.exports=i.p+"static/img/title.5614df4.png"},CqLP:function(t,e){},HnHp:function(t,e){},IQz4:function(t,e,i){t.exports=i.p+"static/img/integral1.5baa224.png"},JA1j:function(t,e,i){t.exports=i.p+"static/img/close.f3e8cfc.png"},JKiR:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("bD8f")},null,null).exports,o=i("/ocq"),r=i("bOdI"),c=i.n(r),l=(i("XmAh"),i("il3B")),d=(i("nOaS"),i("pIDD")),p=(i("mMXg"),i("qYlo")),h=(i("nI2B"),i("qWG/")),u=i("mtWM"),g=i.n(u);s.a.use(h.a),s.a.use(p.a),s.a.use(d.a);var v={components:c()({},l.a.Component.name,l.a.Component),data:function(){return{role_id:"",token:"",token_type:"",showLoading:!1,show:!1,login:!1,selectList:[],selectObj:{},selectPic:"",nickName:"",mobileSelectObj:null}},methods:{changeNext:function(){this.login=!1},onConfirm:function(t,e){this.login=!1,this.show=!0,this.selectObj=t,this.selectPic=t.icon,this.nickName=t.nick},onCancel:function(){this.login=!1,this.show=!0},beforeClose:function(t,e){var i=this;if("confirm"===t){var s=new FormData,n=this.selectObj.icon,a=n.slice(n.lastIndexOf("/")+1,n.lastIndexOf("."));s.append("role_id",this.selectObj.roleId),s.append("role_name",this.selectObj.nick),s.append("icon",a),s.append("hostname",this.selectObj.serverName),s.append("host",this.selectObj.server),s.append("from",this.selectObj.appKey),g.a.post("/mhshow_h5/init_roleinfo",s).then(function(t){t&&200===t.data.code&&ds.getAccessToken({appId:"5d81e28d1da86cffea4b7829"}).then(function(t){return i.token=t.result.accessToken,i.$router.push({path:"/index",query:{role_id:i.selectObj.roleId,token:i.token,token_type:"ds"}}),t})}).catch(function(t){l.a.alert("请求错误")}),e()}else"cancel"===t&&(this.login=!0,e())},getParameter:function(t){var e=window.location.search,i=t.length,s=e.indexOf(t);if(-1==s)return"";s+=i+1;var n=e.indexOf("&",s);return-1==n?e.substring(s):e.substring(s,n)},isWeiXin:function(){return"micromessenger"==window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)}},mounted:function(){var t=this,e=this.getParameter("role_id");if(this.isWeiXin()){var i=this.getParameter("code");i?t.$router.push({path:"/index",query:{token:i,token_type:"wx",role_id:e}}):window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx0376800bd1071c94&redirect_uri=https%3a%2f%2fexth5.dev.16163.com%3frole_id%3d"+e+"&response_type=code&scope=snsapi_userinfo&state=mhshow_h5"}else ds.ready().then(function(){ds.isGodlike?ds.checkLogined().then(function(t){return t}).then(function(i){i&&i.result.isLogined?e?ds.getAccessToken({appId:"5d81e28d1da86cffea4b7829"}).then(function(i){return t.token=i.result.accessToken,t.$router.push({path:"/index",query:{role_id:e,token:t.token,token_type:"ds"}}),i}):ds.getBindGameRoleList({gameCode:"g18",minLevel:0}).then(function(e){if(e&&e.result&&e.result.list.length>0){for(var i=0;i<e.result.list.length;i++)e.result.list[i].text=e.result.list[i].nick+" - "+e.result.list[i].serverName;t.selectList=e.result.list,t.selectObj=e.result.list[0],t.nickName=t.selectList[0].nick,t.selectPic=t.selectList[0].icon,t.show=!0}else l.a.alert({message:"绑定梦幻手游角色后即可参与活动！",confirmButtonText:"去绑定"}).then(function(){ds.openGameRoleBindingPage({gameCode:"g18"})})}):i&&!i.result.isLogined&&l.a.alert({message:"登录且绑定梦幻手游角色后即可参与活动！",confirmButtonText:"去登录"}).then(function(){ds.openLoginPage()})}):t.$router.push({path:"/index"})})}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"verify"},[i("van-popup",{attrs:{position:"bottom"},model:{value:t.login,callback:function(e){t.login=e},expression:"login"}},[i("van-picker",{attrs:{"show-toolbar":"",title:"",columns:t.selectList},on:{cancel:t.onCancel,confirm:t.onConfirm}})],1),t._v(" "),i("van-dialog",{attrs:{title:"确认角色信息",confirmButtonText:"参与活动",cancelButtonText:"换一个","item-height":"100",beforeClose:t.beforeClose,"show-cancel-button":""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("div",{staticClass:"windowInfo"},[i("img",{attrs:{src:t.selectPic}}),t._v(" "),i("span",[t._v(t._s(t.nickName))])])]),t._v(" "),t.showLoading?i("van-loading",{staticClass:"loding",attrs:{color:"#1989fa"}}):t._e()],1)},staticRenderFns:[]};var w=i("VU/8")(v,m,!1,function(t){i("WlqI")},"data-v-03959493",null).exports,_=i("mvHQ"),f=i.n(_),C=(i("v2ns"),i("7QTg")),k=i("ny8g"),b=i.n(k),P=i("aji1"),A=i.n(P),y={name:"sucessPage",props:["windowOpen","allpoints"],data:function(){return{msg:[100,200,300],point:8,resText:"缘分上佳，积分大增！",oneFlag:!1,twoFlag:!1,threeFlag:!1,allFlag:!1}},watch:{oneFlag:function(t){this.allFlagChagne()},twoFlag:function(){this.allFlagChagne()},threeFlag:function(){this.allFlagChagne()}},created:function(){console.log(this.newScroll,"newScrollnewScrollnewScrollnewScroll"),console.log(this.machine,"machinemachinemachinemachine"),this.backSrc=b.a,this.machineSrc=A.a},mounted:function(){var t=this;t.allpoints&&setTimeout(function(){t.init()},1e3)},methods:{reject:function(){this.$emit("update:windowOpen",!1),this.$emit("getHelp",!0)},allFlagChagne:function(){this.oneFlag&&this.twoFlag&&this.threeFlag?this.allFlag=!0:this.allFlag=!1},init:function(){var t=this,e=document.getElementById("one"),i=document.getElementById("two"),s=document.getElementById("three");if(10===this.allpoints){var n=parseInt(3*Math.random()),a="";0===n?a="-1.77rem":1===n?a="-1.56rem":2===n&&(a="-1.34rem"),e.style.backgroundPositionY=a,i.style.backgroundPositionY=a,s.style.backgroundPositionY=a,this.resText="缘分深厚，积分狂增！"}else if(8===this.allpoints){for(var o=parseInt(3*Math.random()),r=parseInt(3*Math.random()),c=parseInt(3*Math.random()),l=[],d=[];o===r;)o=parseInt(3*Math.random()),r=parseInt(3*Math.random());0===c?d=[o,o,r]:1===c?d=[o,r,o]:2===c&&(d=[o,r,r]);for(var p=0;p<d.length;p++){var h="";0===d[p]?h="-1.77rem":1===d[p]?h="-1.56rem":2===d[p]&&(h="-1.34rem"),l.push(h)}e.style.backgroundPositionY=l[0],i.style.backgroundPositionY=l[1],s.style.backgroundPositionY=l[2],this.resText="缘分上佳，积分大增！"}else if(5===this.allpoints){for(var u=parseInt(3*Math.random()),g=parseInt(3*Math.random()),v=parseInt(3*Math.random()),m=[];u===g||u===v||g===v;)u=parseInt(3*Math.random()),g=parseInt(3*Math.random()),v=parseInt(3*Math.random());for(var w=[u,g,v],_=0;_<w.length;_++){var f="";0===w[_]?f="-1.77rem":1===w[_]?f="-1.56rem":2===w[_]&&(f="-1.34rem"),m.push(f)}e.style.backgroundPositionY=m[0],i.style.backgroundPositionY=m[1],s.style.backgroundPositionY=m[2],this.resText="运气不错，积分增加！"}e.addEventListener("transitionend",function(){t.oneFlag=!0}),i.addEventListener("transitionend",function(){t.twoFlag=!0}),s.addEventListener("transitionend",function(){t.threeFlag=!0})}}},x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sucessPage"},[i("div",{staticClass:"helpSucess green"},[i("h2",{staticClass:"white"},[t._v("助力成功")]),t._v(" "),i("div",{staticClass:"helpTip"},[t._v("诀窍提示：每天都可以给同一作品助力一次哦")]),t._v(" "),i("section",[i("div",{staticClass:"machine",style:{backgroundImage:"url("+t.machineSrc+")"}},[i("dl",{staticClass:"rotate_box clear"},[i("dd",{staticClass:"one",style:{backgroundImage:"url("+t.backSrc+")"},attrs:{id:"one"}}),t._v(" "),i("dd",{staticClass:"two",style:{backgroundImage:"url("+t.backSrc+")"},attrs:{id:"two"}}),t._v(" "),i("dd",{staticClass:"three",style:{backgroundImage:"url("+t.backSrc+")"},attrs:{id:"three"}})])])]),t._v(" "),t.allFlag?i("div",{staticClass:"resText"},[t._v(t._s(t.resText))]):t._e(),t._v(" "),t.allFlag?i("div",{staticClass:"allpoints"},[t._v(" + "+t._s(t.allpoints))]):t._e(),t._v(" "),i("div",{staticClass:"btn",on:{click:t.reject}},[i("div",{staticClass:"white"},[t._v("好 的")])])])])},staticRenderFns:[]};var O=i("VU/8")(y,x,!1,function(t){i("yBRZ")},null,null).exports,S=i("IQz4"),F=i.n(S),I=i("aUTJ"),j=i.n(I),E=i("+8Ho"),B=i.n(E),N=i("qoKn"),T=i.n(N),R={name:"App",props:["windowOpen","congratulateParise","points","windowName"],data:function(){return{isAchieve:!1,boxClass:"box",imgSrc:""}},mounted:function(){console.log(this.congratulateParise,"this.congratulateParisethis.congratulateParise"),(this.points||0===this.points)&&this.congratulateParise&&this.congratulateParise.score&&(this.points>=this.congratulateParise.score?this.isAchieve=!0:this.isAchieve=!1,this.congratulateParise.score>=300?this.imgSrc=T.a:this.congratulateParise.score>=200?this.imgSrc=B.a:this.congratulateParise.score>=100?this.imgSrc=j.a:this.congratulateParise.score>=50&&(this.imgSrc=F.a))},methods:{openTakePart:function(){this.$emit("update:windowName","takePart")},reject:function(){this.$emit("update:windowOpen",!1)}}},M={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"congratulate"},[s("div",{staticClass:"bg green"},[s("div",{staticClass:"reject",on:{click:t.reject}},[s("img",{attrs:{src:i("JA1j"),alt:""}})]),t._v(" "),s("h2",{staticClass:"white"},[t._v("恭喜获奖")]),t._v(" "),s("div",{staticClass:"prizeName"},[t._v(t._s(this.congratulateParise?this.congratulateParise.name:"奖品名称"))]),t._v(" "),s("div",{staticClass:"box"},[s("img",{attrs:{src:t.imgSrc,alt:""}}),t._v(" "),t.isAchieve?s("div",{staticClass:"achieve"},[s("img",{attrs:{src:i("pPg+"),alt:""}})]):t._e()]),t._v(" "),!1===t.isAchieve?s("div",{staticClass:"info"},[t._v("获得"+t._s(t.congratulateParise.score)+"积分，即可获得此游戏物品！")]):t._e(),t._v(" "),t.isAchieve?s("div",{staticClass:"info"},[t._v("梦幻秀作者已达成活动积分要求")]):t._e(),t._v(" "),t.isAchieve?s("div",{staticClass:"info"},[t._v("登录游戏即可领取此奖品！")]):t._e(),t._v(" "),s("div",{staticClass:"btn",on:{click:t.openTakePart}},[s("div",[t._v("立即参与")])])])])},staticRenderFns:[]};var L=i("VU/8")(R,M,!1,function(t){i("CqLP")},"data-v-375712ab",null).exports,q={name:"takePart",props:["windowOpen","isOutSide"],methods:{openGame:function(){window.location.href="https://game.163.com/open/my/"},openGodlike:function(){window.location.href="https://app.16163.com/ds/ulinks/?action=openUrl&url=https%3A%2F%2Fyouxi.dev.16163.com%2F19502b735b31c6d5"},reject:function(){this.$emit("update:windowOpen",!1)}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"takePart"},[s("div",{staticClass:"ruleExplain"},[!0!==t.isOutSide?s("div",{staticClass:"reject",on:{click:t.reject}},[s("img",{attrs:{src:i("JA1j"),alt:""}})]):t._e(),t._v(" "),s("h2",{staticClass:"white"},[t._v("参与活动")]),t._v(" "),s("div",{staticClass:"content green"},[t._m(0),t._v(" "),s("div",{staticClass:"btn",on:{click:t.openGame}},[s("div",[t._v("打开游戏")])]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"btn",on:{click:t.openGodlike}},[s("div",{staticClass:"goDashen"},[t._v("去大神参与活动")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"activityBrief"},[e("span",{staticClass:"strong"},[this._v("官服玩家")]),e("br"),this._v(" "),e("span",[this._v("官服玩家可在游戏内节日界面分享助力H5至微信或大神，即可参加活动")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"activityTime"},[e("span",{staticClass:"strong"},[this._v("渠道服玩家")]),e("br"),this._v(" "),e("span",[this._v("渠道服玩家请前往网易大神App，搜索“梦幻手游精灵”，绑定角色ID后接可参与活动")])])}]};var H=i("VU/8")(q,D,!1,function(t){i("pgWn")},"data-v-0b135711",null).exports,U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rule"},[e("div",{staticClass:"ruleExplain"},[e("div",{staticClass:"reject",on:{click:this.reject}},[e("img",{attrs:{src:i("JA1j"),alt:""}})]),this._v(" "),e("h2",{staticClass:"white title"},[this._v("规则说明")]),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content green"},[i("div",{staticClass:"activityBrief"},[i("span",{staticClass:"strong title"},[t._v("活动简介：")]),t._v(" "),i("span",[t._v("助力赢积分，北溟鲲抱回家！只要参与游戏梦幻秀助力H5活动，即能获得积分，赢取北冥鲲等大奖哦！")])]),t._v(" "),i("div",{staticClass:"activityTime marginTop"},[i("span",{staticClass:"strong title"},[t._v("活动时间：")]),t._v(" "),i("span",[t._v("2019年9月29日-2019年10月7月")])]),t._v(" "),i("div",{staticClass:"activityRule marginTop"},[i("span",{staticClass:"strong title"},[t._v("活动规则：")]),i("br"),t._v(" "),i("span",[t._v("1丶玩家将游戏内的助力H5分享至微信或大神，即可在微信丶大神参与H5活动，获取积分，根据积分发放奖励。")]),i("br"),t._v(" "),i("span",[t._v("2丶所有奖励均通过游戏内邮件发放，玩家请及时登录游戏领取；玩家使用北冥鲲转盘道具奖")])])])}]};var z=i("VU/8")({name:"rule",props:["windowOpen"],methods:{reject:function(){this.$emit("update:windowOpen",!1)}}},U,!1,function(t){i("RDQC")},"data-v-90f7f866",null).exports,W=i("JA1j"),J=i.n(W),G=i("ys0R"),Q=i.n(G),Y=i("cf+J"),$=i.n(Y),K=i("Xi0g"),V=i.n(K),Z=i("vsMI"),X=i.n(Z),tt=i("az9f"),et=i.n(tt),it=i("kbjp"),st=i.n(it),nt=i("vbIs"),at=i.n(nt),ot=i("v9Ex"),rt=i.n(ot),ct=i("pPg+"),lt=i.n(ct),dt=i("ouCd"),pt=i.n(dt),ht=i("XBWO"),ut=i.n(ht),gt={name:"HelloWorld",components:{swiper:C.swiper,swiperSlide:C.swiperSlide,sucessPage:O,congratulate:L,takePart:H,rule:z},watch:{},data:function(){var t,e=this;return{count:0,progWidth:0,homePageFlag:!1,head:"",isOutSide:"",windowOpen:!1,windowName:"",pictureSrc:"http://yxzs.163.com/appresource/g18/",swiperCard:[{id:1,name:"随机羊角包头饰",integral:"50",src:F.a,score:50},{id:2,name:"50000银币",integral:"100",src:j.a,score:100},{id:3,name:"翠羽金屏头像框",integral:"200",src:B.a,score:200},{id:4,name:"北溟鲲转盘",integral:"300",src:T.a,score:300},{id:5,name:"北溟鲲转盘",integral:"400",src:T.a,score:400},{id:6,name:"北溟鲲转盘",integral:"500",src:T.a,score:500}],swiperOption:(t={observeParents:!0,autoplay:!0},c()(t,"autoplay",{disableOnInteraction:!1}),c()(t,"loop",!0),c()(t,"slidesPerView",3),c()(t,"on",{click:function(t){var i=e.$refs.mySwiper.swiper.clickedSlide.getElementsByClassName("integral")[0].innerHTML;"50积分"===i?e.congratulateParise=e.swiperCard[0]:"100积分"===i?e.congratulateParise=e.swiperCard[1]:"200积分"===i?e.congratulateParise=e.swiperCard[2]:"300积分"===i?e.congratulateParise=e.swiperCard[3]:"400积分"===i?e.congratulateParise=e.swiperCard[4]:"500积分"===i&&(e.congratulateParise=e.swiperCard[5]),e.windowOpen=!0,e.windowName="congratulate"}}),t),swiperOption2:{direction:"vertical",autoplay:!0,loop:!0,centeredSlides:!0},role_id:"",host:"",token:"",token_type:"",roleData:null,show_img:"",user_image:"",role_name:"",friendArr:[],broadcast:[],points:"",helpPoints:"",highPointsAchieve:"",restPoint:"",congratulateParise:{},shareParam:"",mobileShare:""}},computed:{swiper:function(){return this.$refs.mySwiper.swiper},swiper2:function(){return this.$refs.mySwiper2.swiper}},created:function(){this.preload(),this.head=Q.a,console.log(this.newScroll,"newScrollnewScrollnewScroll"),console.log(this.machine,"machinemachinemachinemachinemachine");new Image;this.role_id=this.getParameter("role_id"),this.host=window.location.host,this.shareParam={title:"我正在参加《梦幻西游》手游捏脸活动，为我助力吧！",desc:"我捏的脸这么好看，快来给我点赞帮我抱走永久北溟鲲啦～你也一起来玩吧！",link:"https://"+this.host+"/?role_id="+this.role_id+"&utm_source=ds",imgUrl:"https://webinput.nie.netease.com/img/my/icon.png",socialNetwork:0},this.mobileShare=new MobileShare({title:"我正在参加《梦幻西游》手游捏脸活动，为我助力吧！",desc:"我捏的脸这么好看，快来给我点赞帮我抱走永久北溟鲲啦～你也一起来玩吧！",link:"https://"+this.host+"/?role_id="+this.role_id+"&utm_source=wx",imgUrl:"https://webinput.nie.netease.com/img/my/icon.png"}),this.init()},mounted:function(){},methods:{preload:function(){for(var t=this,e=this,i=[J.a,$.a,Q.a,V.a,F.a,j.a,B.a,T.a,b.a,A.a,X.a,et.a,st.a,at.a,rt.a,lt.a,pt.a,ut.a],s=0;s<i.length;s++){var n=new Image;n.src=i[s],n.onload=function(){t.count++,t.progWidth=t.progWidth+5.5556,t.progWidth>=100&&setTimeout(function(){e.homePageFlag=!0},1e3)}}},shareTo:function(){ds.isGodlike?ds.doShare(this.shareParam):this.mobileShare.show()},getParameter:function(t){var e=window.location.href,i=t.length,s=e.indexOf(t);if(-1==s)return"";s+=i+1;var n=e.indexOf("&",s);return-1==n?e.substring(s):e.substring(s,n)},init:function(){var t=this,e=this;this.token=this.$route.query.token,this.role_id=this.$route.query.role_id,this.token_type=this.$route.query.token_type,console.log("home-query:"+f()(this.$route.query)),console.log("home-query:",this.$route.query),this.role_id||"ds"===this.token_type||(this.windowOpen=!0,this.windowName="takePart",this.isOutSide=!0);var i="/mhshow_h5/get_roleinfo?role_id="+this.role_id+"&token="+this.token+"&token_type="+this.token_type;g.a.get(i).then(function(i){i&&i.data&&i.data.result&&(e.roleData=i.data.result,e.role_name=e.roleData.role_name?e.roleData.role_name:"",e.user_image=e.roleData.icon?t.pictureSrc+e.roleData.icon+".png":Q.a,e.points=e.roleData.points,e.getFriendList(),e.points<50?(e.highPointsAchieve="随机羊角包头饰",e.restPoint=50-e.points):e.points>=50&&e.points<100?(e.highPointsAchieve="50000银元",e.restPoint=100-e.points):e.points>=100&&e.points<200?(e.highPointsAchieve="翠羽金屏头像框",e.restPoint=200-e.points):e.points>=200&&e.points<300?(e.highPointsAchieve="北溟鲲转盘",e.restPoint=300-e.points):e.points>=300&&e.points<400?(e.highPointsAchieve="北溟鲲转盘",e.restPoint=400-e.points):e.points>=400&&e.points<500&&(e.highPointsAchieve="北溟鲲转盘",e.restPoint=500-e.points),e.show_img=e.roleData.show_img?e.roleData.show_img:V.a)}).catch(function(t){e.show_img=V.a,console.log(t)})},getFriendList:function(){var t=this,e=this,i="/mhshow_h5/get_role_assistances?role_id="+this.role_id+"&user_num=5";g.a.get(i).then(function(i){if(i&&i.data&&i.data.result){for(var s=i.data.result,n=0;n<s.length;n++)10===s[n].points?s[n].message="缘分深厚，积分狂增!":8===s[n].points?s[n].message="缘分上佳，积分大增!":s[n].message="运气不错，积分增加!";e.friendArr=s}if(i&&i.data&&i.data.broadcast){for(var a=i.data.broadcast,o=0;o<a.length;o++)a[o].picSrc=t.pictureSrc+a[o].icon+".png";e.broadcast=a}})},helpDay:function(){var t=this,e=new FormData;e.append("role_id",this.role_id);g.a.post("/mhshow_h5/assistance",e).then(function(e){e&&e.data&&(t.helpPoints=e.data.points,t.windowOpen=!0,t.windowName="sucessPage")}).catch(function(t){alert("今天已点赞啦，客官明日再来吧")})},callback:function(){},clickPraise:function(){this.helpDay()},gain:function(){this.windowOpen=!0,this.windowName="takePart"},ruleExplain:function(){this.windowOpen=!0,this.windowName="rule"},getHelp:function(t){t&&this.init()}}},vt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.homePageFlag?s("div",{staticClass:"homePage"},[s("div",{staticClass:"ruleExplain",on:{click:t.ruleExplain}}),t._v(" "),t.windowOpen?s("div",{staticClass:"layout"},["sucessPage"===t.windowName?s("sucessPage",{attrs:{windowOpen:t.windowOpen,allpoints:t.helpPoints},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e},getHelp:t.getHelp}}):t._e(),t._v(" "),"congratulate"===t.windowName?s("congratulate",{attrs:{windowOpen:t.windowOpen,congratulateParise:t.congratulateParise,points:t.points,windowName:t.windowName},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e},"update:windowName":function(e){t.windowName=e},"update:window-name":function(e){t.windowName=e}}}):t._e(),t._v(" "),"takePart"===t.windowName?s("takePart",{attrs:{windowOpen:t.windowOpen,isOutSide:t.isOutSide},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e(),t._v(" "),"rule"===t.windowName?s("rule",{attrs:{windowOpen:t.windowOpen},on:{"update:windowOpen":function(e){t.windowOpen=e},"update:window-open":function(e){t.windowOpen=e}}}):t._e()],1):t._e(),t._v(" "),s("div",{staticClass:"gain",on:{click:t.gain}},[s("img",{attrs:{src:i("kbjp"),alt:""}})]),t._v(" "),s("div",{staticClass:"front"},[s("section",{staticClass:"dreamWork"},[s("div",{staticClass:"bgBack"},[s("div",[t._v("梦幻秀作品")]),t._v(" "),s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.show_img,alt:""}})]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"clearFix"},[s("div",{staticClass:"tit lt"},[s("img",{attrs:{src:t.user_image,alt:""}})]),t._v(" "),s("div",{staticClass:"lt"},[s("div",{staticClass:"roleName"},[s("span",[t._v("作者：")]),t._v(" "),s("span",[t._v(t._s(t.role_name))])]),t._v(" "),s("div",[s("span",[t._v("积分：")]),t._v(" "),s("span",{staticClass:"red"},[t._v(t._s(t.points))])])])])])])]),t._v(" "),s("section",{staticClass:"prizePoint"},[t.points<=500?s("div",[s("span",{staticClass:"white"},[t._v("距离")]),t._v(" "),s("span",{staticClass:"red"},[t._v(t._s(t.highPointsAchieve))]),t._v(" "),s("span",{staticClass:"white"},[t._v("仅剩")]),t._v(" "),s("span",{staticClass:"red"},[t._v(t._s(t.restPoint))]),t._v(" "),s("span",{staticClass:"white"},[t._v("积分!")])]):t._e(),t._v(" "),t.points>500?s("div",[s("span",{staticClass:"white"},[t._v("已获得最终大奖")]),t._v(" "),s("span",{staticClass:"red"},[t._v("北溟鲲转盘")])]):t._e()]),t._v(" "),s("section",{staticClass:"btn"},[s("div",{staticClass:"btnBox clearFix"},[s("div",{staticClass:"lt",on:{click:t.shareTo}},[s("img",{attrs:{src:i("az9f"),alt:""}})]),t._v(" "),s("div",{staticClass:"lt"},[s("img",{staticClass:"helpImg",attrs:{src:i("vbIs"),alt:""},on:{click:t.clickPraise}})])])])]),t._v(" "),s("div",{staticClass:"behind"},[s("section",{staticClass:"bgGreen"},[s("div",{staticClass:"nickName"},[t.broadcast.length?s("swiper",{ref:"mySwiper2",staticClass:"swiperBig2 swiper-no-swiping",attrs:{options:t.swiperOption2}},t._l(t.broadcast,function(e,i){return s("swiper-slide",{key:i},[s("div",{staticClass:"nameInfo"},[s("img",{staticClass:"header",attrs:{src:e.picSrc,alt:""}}),t._v(" "),s("span",{staticClass:"white"},[t._v(t._s(e.role_name)+" 已满"+t._s(e.points)+"积分，获得 "+t._s(e.reward)+"!")])])])}),1):t._e()],1),t._v(" "),s("div",{staticClass:"white"},[t._v("\n\t\t\t\t\t动动手指，游戏大礼等你拿！\n\t\t\t\t")]),t._v(" "),s("swiper",{ref:"mySwiper",staticClass:"swiperBig",attrs:{options:t.swiperOption}},t._l(t.swiperCard,function(e){return s("swiper-slide",{key:e.id},[s("div",{staticClass:"swiperBox"},[s("div",{staticClass:"picture"},[t.points>=e.score?s("img",{staticClass:"achieve",attrs:{src:i("pPg+"),alt:""}}):t._e(),t._v(" "),s("div",{staticClass:"picImg"},[s("img",{attrs:{src:e.src,alt:""}})]),t._v(" "),s("div",{staticClass:"white"},[s("div",{staticClass:"giftName"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"integral"},[t._v(t._s(e.integral)+"积分")])])])])])}),1),t._v(" "),t._m(0)],1),t._v(" "),s("section",{staticClass:"help"},[s("h2",{staticClass:"white"},[t._v("助力榜")]),t._v(" "),s("div",{staticClass:"thanks"},[t._v("\n\t\t\t\t\t感谢以下的朋友为发起者\n\t\t\t\t\t"),s("span",{staticClass:"red"},[t._v(t._s(t.role_name))]),t._v("\n\t\t\t\t\t的梦幻秀助力\n\t\t\t\t")]),t._v(" "),t._l(t.friendArr,function(e){return s("div",{key:e.time,staticClass:"clearFix personInfo"},[s("img",{staticClass:"lt",attrs:{src:e.user_image,alt:""}}),t._v(" "),s("div",{staticClass:"lt"},[s("div",{staticClass:"strong"},[t._v(t._s(e.user_name?e.user_name:""))]),t._v(" "),s("div",[t._v(t._s(e.message?e.message:""))])]),t._v(" "),s("div",{staticClass:"rl code"},[t._v("\n\t\t\t\t\t\t+ "+t._s(e.points)+"\n\t\t\t\t\t")])])}),t._v(" "),s("h2",{staticClass:"checkMore"},[t._v("\n\t\t\t\t\t这是最近为你助力的5位好友哦\n\t\t\t\t")])],2)])]):t._e(),t._v(" "),t.homePageFlag?t._e():s("img",{staticClass:"titlePic",attrs:{src:i("99RW"),alt:""}}),t._v(" "),t.homePageFlag?t._e():s("div",{staticClass:"prog2",attrs:{id:"prog2"}},[s("div",{staticClass:"prog_line2",style:{width:t.progWidth+"%"}}),t._v(" "),s("div",{staticClass:"load"},[t._v("加载中。。。")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",[this._v("1丶通过邮件发放，玩家使用后调出抽奖转盘，转盘含北溟鲲")]),this._v(" "),e("div",[this._v("2丶可以获得永久冥醌，空间挂件（30天），金柳露，月华露，银币，红罗羹，绿芦羹，星辰碎片等道具。")])])}]};var mt=i("VU/8")(gt,vt,!1,function(t){i("HnHp")},null,null).exports;s.a.use(o.a);var wt=new o.a({routes:[{path:"/index",name:"homePage",component:mt},{path:"/sucessPage",name:"sucessPage",component:O},{path:"/congratulate",name:"congratulate",component:L},{path:"/rule",name:"rule",component:z},{path:"/takePart",name:"takePart",component:H},{path:"/",name:"config",component:w}]}),_t=i("v5o6"),ft=i.n(_t),Ct=i("Lw6n"),kt=new(i.n(Ct).a);s.a.use(kt),g.a.defaults.baseURL="//ext.dev.16163.com",g.a.defaults.withCredentials=!0;var bt=window.innerWidth;document.write("<style>html{font-size:"+bt+"px;}</style>");var Pt=document.getElementsByTagName("body")[0],At=document.getElementsByTagName("html")[0];Pt.style.fontSize=bt/320*16+"px",console.log(Pt.style.fontSize,"body.style.fontSizebody.style.fontSize"),At.style.overflow="auto",Pt.style.overflow="auto",Pt.style.height="100%",At.style.height="100%",ft.a.attach(document.body),new s.a({el:"#app",router:wt,components:{App:a},template:"<App/>"})},RDQC:function(t,e){},WlqI:function(t,e){},XBWO:function(t,e,i){t.exports=i.p+"static/img/bg-bottom.0e548d8.jpg"},Xi0g:function(t,e,i){t.exports=i.p+"static/img/person.aeee31b.png"},aUTJ:function(t,e,i){t.exports=i.p+"static/img/integral2.c4c40e5.png"},aji1:function(t,e,i){t.exports=i.p+"static/img/tiger.05e5c4c.png"},az9f:function(t,e,i){t.exports=i.p+"static/img/share.4acce88.png"},bD8f:function(t,e){},"cf+J":function(t,e,i){t.exports=i.p+"static/img/background.5ed97a5.png"},hW8u:function(t,e){},kbjp:function(t,e,i){t.exports=i.p+"static/img/takePart.7468bc1.png"},nOtf:function(t,e){},nsZj:function(t,e){},ny8g:function(t,e,i){t.exports=i.p+"static/img/newScroll.39ce0ff.png"},ouCd:function(t,e,i){t.exports=i.p+"static/img/bg-top.73961ee.jpg"},"pPg+":function(t,e,i){t.exports=i.p+"static/img/achieve.322385e.png"},pgWn:function(t,e){},qoKn:function(t,e,i){t.exports=i.p+"static/img/integral4.c23901b.png"},v2ns:function(t,e){},v9Ex:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAjCAYAAAAaLGNkAAADYUlEQVRYhe2YW4hNURjHf2fMaAxyKcrtQS6F120Yl5kiw/AipVB2SlEYtR9GxMMpRMiWF0KG5frgltyjEMlYSt7EGI3b24QZU4zbw/oW+6w5Z885M2fkwb92317fty7/861vfevbJ5FMJuksAt/zgSTQBmwGjuc6R6g0hV0gMB84GlEdA14Dd3KdqyBmkRGB7w2LGbtcZEIegLUx/YfLkx2JwPcqgUbgasykX0UuARbFzSfQGE/N6JBE4HtVwHVp7k1jnxP43j1ggahOAKfkfT5mO2alIbFd5C2XSEpMBL43DrgizXmh0lcitrHAYWCqqF4C94FXwA9glNjKgRuy2EqgXvrvwXj3rNhGW5sbmDaoFjsEKoDb0rwL1IRK14nN/cVlwE5gJvACKAUeie0csAw4AlwDxkBkOwLf2w0MAvaFSp+O6MdHCKwIla6wBDLgATANWCPtOmB8xH4U49HRwC6ARDKZJPC9ocBboCVUum+EQBHQAAwDloZKt8sDaTwRhS+LvgFGOLZmoA8w2Hpii8hVTseNQmB/OgJZQAHnMUez2rFtElmd+PjyUjHQAhAq/TtGAt/rDzRhjmJJqPSPdKt04AmAEuADUAQUA19E31PeWwowAdQDOOAMrsIkoZOZCGSJVsDG2OSI/qvo+xQAk0R5nVRMFHm5CwQsLoqc6ehvgjkds0XxzOlgI/pJHkjYOUodfb0lMU4Uz50OvUR2ZSssvosscfRPgfpCTIYrCJX+7nRoFVmcBxJ2js+OvgmoKgyVzuRuezP+zAMJO0fCNYRKP4+79f4a/pOw+OdJfBPZI4/ruCewQxKxA3NE7AmLIzFFZGMeSLwTWZbO2K7kD3xvAOZi6QccDJVubTcqd3wELmBq0EuYwrjFGlM8EfheOaYkq8SUYqvzQMBiIaZ6n8efsg+IeCLwvTL+1JhbQ6U3kV98A+YCO4AaTBk4BXgY9cQ2kWXdQCCKdcB0zC5sh9SYsB8zEwLfGwj07iYSzcAQeW9zSWzA3KiHumlxF5+A9SkkQqUfywfOUmAkxjOZzncbJn+4t+JPTHIryjAugaktGzBl//sUEkKkEdia9W8hq0K3Q3Tqr4HA96oxR87NISXAGdJ8w+adBCbRTM9gq811sk7doqHStZjM1+w8FzpD4hfDd+UHEHcgtwAAAABJRU5ErkJggg=="},vbIs:function(t,e,i){t.exports=i.p+"static/img/praise.8a42458.png"},vsMI:function(t,e,i){t.exports=i.p+"static/img/btn.4997e0e.png"},yBRZ:function(t,e){},ys0R:function(t,e,i){t.exports=i.p+"static/img/head.b2aa9f4.png"}},["NHnr"]);
//# sourceMappingURL=app.4222b14b4670689fe418.js.map