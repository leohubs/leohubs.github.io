export default {
    // 项目聚合页面
    title:"研究项目",
    textTPG:"传统 CDN 集成 TPG 图片转码能力，保证视觉效果并降低图片流量/带宽，实现海量图片业务场景的节流。",
    textTSE:"专门针对屏幕内容进行优化的编码器",
    textLiYing:"新世代的视频服务平台，它以人眼视觉技术为基准，结合人工智能、大数据，对视频进行智能增强和压缩",
    pingtai:"提供高效的自动化音视频质量测试能力，多方面对音视频质量进行全自动的压力测试",
    more:"了解更多",

    nav:{
        back:"上一个项目 ：",
        next:"下一个项目 : "
    },

   
    // TPG页面
    tpg:{
        textTPG:"TPG是基于AVS2推出的一种图片压缩技术。压缩效率比JPG高47%，比PNG高60%，比GIF高85%，比WebP高25%。TPG功能全面，支持透明通道和动画，支持Windows，Linux，Mac，iOS，Android等平台。目前，TPG已经作为AVS-P7部分，申报成为国家标准。",
        partner:"合作伙伴",
        itemTitle1:"TPG压缩效率对比",
        itemText1:"相同图片质量下，TPG图片压缩效率比JPG高 47%， 比PNG高60%，比Gif高85%，比WebP高25%",
        itemTitle2:"TPG编码效率对比",
        itemText2:"在PSNR质量对齐下，TPG的编码效率比 webP 高23.5%，比 libjpeg 高46.8%",
        itemTitle3:"TPG解码性能对比",
        itemText3Item1:"1.iOS平台下 TPG 的解码耗时是webP的2倍，是libjpeg的2.3倍",
        itemText3Item2:"2.Android平台下 TPG 的解码耗时是 webP 的1.2倍，是 libjpeg 的1.6倍",
        itemTitle4:"TPG解码内存对比",
        itemText4Item1:"1.iOS平台下 TPG 的解码内存是 webP 的 2 倍，是libjpeg的 2.5 倍",
        itemText4Item2:"2.Android平台下 TPG 的解码内存是 webP 的 2 倍，是 libjpeg 的 4 倍",
        itemTitle5:"TPG应用场景",
        itemText5:{
            text1:{
                one:"社交类应用",
                two:"1.空间相册",
                // three:"2.朋友圈",
                four:"2.群图片",
                // five:"4...."
            },
            text2:{
                one:"新闻类应用",
                two:"1.H5页面",
                three:"2.新闻客户端",
                four:"3.浏览器",
            },
            text3:{
                one:"游戏类应用",
                two:"1.安装包",
                three:"2.游戏UI资源",
            }
        },
        partners:"TPG合作伙伴" 
    },

    // TES页面
    tse:{
       tesText:"TSE是专门针对屏幕内容推出的编码器，TSE在普通编码器的基础上增加了对帧内块复制（Intra Block Copy）和调色板编码（Palette Mode）的支持，压缩效率相比x265-medium模式提升55%以上，同时编码速度比x265-medium快近10倍，能够满足实时场景应用需求。",
       itemTitle1:"TSE与X265压缩效率对比",
       itemText1one:"摄像头采集序列：TSE的编码效率相比于x265-ultrafast模式有20%左右提升",
       itemText1two:"屏幕内容序列：TSE相比于x265-ultrafast模式的提升在70%以上；对于x265-medium模式有55%左右的提升",
       itemTitle2:"TSE与X265编码速度对比",
       itemText2one:"摄像头采集序列：TSE的平均编码耗时是x265-ultrafast的88%左右",
       itemText2two:"屏幕内容序列：不打开IBC和PLT，TSE的平均编码耗时仅为x265-ultrafast的33%左右； 打开IBC和PLT，TSE的平均编码耗时是x265-ultrafast的50%左右", 
       partner:"TSE合作伙伴",
    },

    // 腾讯丽影
    liYing:{
       title:"腾讯丽影",
       textLiYing:"腾讯丽影是新世代的视频服务平台，它以人眼视觉技术为基准，结合人工智能、大数据，对视频进行智能增强和压缩。",
       vidio:"丽影宣传视频",
       itemTitle1:"人眼视觉技术 - 关注区检测",
       itemTitle2:"人眼视觉技术 - 去压缩失真 ",
       itemTitle3:"人眼视觉技术 - 超分辨率",
       itemTitle4:"人眼视觉技术 - 图片修复增强",
       partner:"腾讯丽影合作伙伴", 
       before:"原图",
       after:"处理后"
    },


    // 音视频质量测评平台
    vidioAndaudioTest:{
        title:"音视频质量评测平台",
        // 缺
        pingtaiText:"TMEC是一站式的音视频质量评估平台，可有效提升音视频产品专项测试工作效率。该平台集成了多种商用设备及自研工具，借助其可以高效完成实时音视频产品在不同网络场景下的评测工作。",
        itemText1:"音视频相关产品的专项质量测试往往需要借助专业的实验室环境来完成，测试过程中需要使用网络模拟、测试仪表等专用工具，同时需要测试人员有一定的背景知识及操作经验，测试门槛和测试成本都相对较高。TMEC将实验室相关资源进行整合，实现任务远程提交、自动化执行等能力，使非专业团队也能快速，准确的完成相关评估需求",
        itemText2:"TMEC的设计理念是提供通用的、准确的、公平的测试能力与测试方法论，在各个指标的测量方法上尽可能选择最可靠的技术方案，追求可以服务不同产品（竞品）的最大普适性。除端到端的实时音视频通话测试能力外，平台还提供了视频有参评估、无参清晰度评估、语音有参评估、语音回声评估等云端评估工具供用户使用，便于非实时场景下的质量评估需求。",
    }

}
