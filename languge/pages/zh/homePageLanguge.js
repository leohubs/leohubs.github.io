export default {
  title: "腾讯多媒体实验室，让世界在你身边",
  more: "了解更多",
  //  研究领域
  research:{
        title: '研发领域',
        researchAndMade:{
          title:"国际标准研究与制定",
          text:"专注媒体压缩，系统传输等多媒体领域标准研究和制定"
         },
        touch:{  
          title:"异构平台",
          text:"具有比传统CPU并行计算更高效率和低延迟的计算性能。"
        },
        newMedia:{  
         title:"沉浸式新媒体",
         text:"研究采集、压缩、传输、播放技术链给人带来感官体验"
        },
        videoUnderstanding:{  
          title:"智慧媒体",
          text:"利用深度学习，对视频内容进行深入理解"
        },
         VideoCodingAndDecoding:{  
           title:"视频编解码",
           text:"更高的视频压缩比、更好的信道适应性"
         },
         videoHandle:{  
           title:"视频处理",
           text:"时域信息、结合视频理解和编解码信息的智能处理"
         },
         audioHandle:{  
           title:"音频处理",
           text:"致力于解决多人、多场景实时通信系统中的3A问题"
         },
         connectionQuality:{  
           title:"音视频通信质量评估",
           text:"符合人眼视觉和人耳听觉的智能质量评估体系"
         },
         transfer:{  
           title:"实时音视频传输",
           text:"通过对网络状态的检测制定合适的抗性和传输策略"
         },
  },
   //  项目
  project:{
    title1:"TPG",
    title2:"TSE",
    title3:"腾讯丽影",
    title4:"音视频质量评测平台",
    subTitle1:"TPG (Tiny Portable Graphic)",
    text1:"基于新一代视频压缩编码标准AVS2的图像压缩格式",
    subTitle2:"TSE (Tencent Screen Encoder)",
    text2:"专门针对屏幕内容进行优化的编码器",
    subTitle3:"腾讯丽影",
    text3:"以人眼视觉技术为基准，结合人工智能、大数据，对视频进行智能增强和压缩",
    subTitle4:"音视频质量评测平台",
    text4:"提供自动化音视频质量测试能力，多方面对音视频质量进行压力测试",
    lookAll:"查看全部",
    more: "了解更多",
  },
   // 解决方案
  solution:{
    solutionTitle: "解决方案",
    title1:"腾讯实时音视频",
    text1:"拥有QQ十几年来在音视频技术上的积累，致力于帮助企业快速搭建低成本、高品质音视频通讯能力的完整解决方案。",
    title2:"互动直播解决方案",
    text2:"全新一站式“多路音视频互动”解决方案，主打直播连麦和多画面特效，通过移动直播 SDK 打造跨平台一对多、多对多的超清酷炫直播场景。",
    title3:"腾讯云游戏多媒体引擎",
    text3:"提供一站式游戏语音解决方案。针对不同游戏场景进行深度优化，功能完备，接入门槛低，一个 SDK 即可满足多样化的游戏语音需求。",
    more:"了解更多",
    lookAll:"查看全部",
    join:"加入腾讯多媒体实验室",
    join1:"加入多媒体实验室",
    joining:"立即加入"
  },
  // mask
  navList:[
    {
      name: '首页'
    },
    {
      name: '研发领域',
      showList: false,
      childen: [
        { eventName: 'click_research_international', id: '86717', name: '国际标准研究与制定', link:'/research/international', index: 0},
        { eventName: 'click_research_audio_and_video', id: '82091',name: '实时音视频传输', link:'/research/audioTransmission', index: 1 },
        { eventName: 'click_research_immersive', id: '86718',name: '沉浸式新媒体研究', link:'/research/newMedia', index: 2 },
        { eventName: 'click_research_codec', id: '86719',name: '视频编解码', link:'/research/videoCode', index: 3 },
        { eventName: 'click_research_audio', id: '86716',name: '音频处理', link:'/research/audioProcessing', index: 4 },
        { eventName: 'click_research_process', id: '82088',name: '视频处理', link:'/research/videoProcessing', index: 5 },
        { eventName: 'click_research_perceived', id: '86720',name: '异构平台', link:'/research/perceptual', index: 6 },
        { eventName: 'click_research_assess', id: '82092',name: '音视频通信质量评估', link:'/research/assessment', index: 7 },        
        { eventName: 'click_research_understanding', id: '82087',name: '智慧媒体', link:'/research/VideoUnderstanding', index: 8 },
      ]
    },
    {
      name: '研究项目',
      showList: false,
      childen: [
        { eventName: 'click_top_project', id: '82082',name: '项目首页', link:'/project' },
        { eventName: 'click_project_TPG', id: '82096',name: 'TPG', link:'/projectTpg' },
        { eventName: 'click_project_TSE', id: '82097',name: 'TSE', link:'/projectTse' },
        { eventName: 'click_project_liying', id: '82098',name: '腾讯丽影', link:'/projectLiYing' },
        { eventName: 'click_project_platform', id: '82099',name: '音视频质量评测平台', link:'/projectAudioAndVideo' }
      ]
    },
    {
      name: '解决方案',
      showList: false,
      childen: [
        { eventName: 'click_top_solution', id: '82083',name: '解决方案首页', bgc: false, link:'/solution' },
        { eventName: 'click_solution_TRTC', id: '82093',name: '腾讯实时音视频', bgc: true, link:'https://cloud.tencent.com/product/trtc '},
        { eventName: 'click_solution_ILVB', id: '82094',name: '互动直播', bgc: true, link:'https://cloud.tencent.com/solution/ilvb' },
        { eventName: 'click_solution_GME', id: '82095',name: '腾讯云游戏多媒体引擎', bgc: true, link:' https://cloud.tencent.com/product/gme' }
      ]
    },
    {
      name: '关于我们',
      showList: false,
      childen: [
        { name: '实验室介绍', link:'/aboutUs/laboratory' },
        // { name: '相关论文', link:'/aboutUs/thesis' },
        { name: '加入我们', link:'/aboutUs/joinUs' }
      ]
    }
  ]
}