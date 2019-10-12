export default {
    title: "Tencent Media Lab, may the world be around you.",
    more: "Learn More",
    //  研究领域
    research:{
          title: 'Research',
          researchAndMade:{
            title:"International Standardization",
            text:"International standardization research covering multimedia compression, system, and communication"
           },
          touch:{  
            title:"Heterogeneous Platform",
            text:"Provide higher efficiency and low latency compute power than traditional parallel CPU architecture. "
          },
          newMedia:{  
           title:"Immersive Media",
           text:"Immersive experience through complete pipeline of media capture, compression, communication, and playback"
          },
          videoUnderstanding:{  
            title:"Intelligent Media",
            text:"High level analysis and understanding of video semantics through AI and deep learning"
          },
           VideoCodingAndDecoding:{  
             title:"Video Coding",
             text:"Higher compression ratio and better channel adaptation"
           },
           videoHandle:{  
             title:"Video Processing",
             text:"Video spatial and temporal processing that works seamlessly with video understanding and compression"
           },
           audioHandle:{  
             title:"Audio Processing",
             text:"Multi-Party 3A solution for real-time communications among various scenes"
           },
           connectionQuality:{  
             title:"Multimedia QA",
             text:"Quality assessment platform for audio and video contents"
           },
           transfer:{  
             title:"Real-Time Multimedia",
             text:"Network robustness against volatile bandwidth and package loss, through network condition detection and feedback"
           }
    },
     //  项目
    project:{
      title1:"TPG",
      title2:"TSE",
      title3:"KANASKY",
      title4:"TMEC ",
      subTitle1:"TPG (Tiny Portable Graphic)",
      text1:"A new image compression standard based on AVS2",
      subTitle2:"TSE (Tencent Screen Encoder)",
      text2:"Optimized video encoder for screen content",
      subTitle3:"KANASKY",
      text3:"Human perceptual video service based on AI and big data, which produces prettier yet smaller video.",
      subTitle4:"TMEC（Tencent Multimedia Evaluation Cloud）",
      text4:"Provide ability for efficient automatical AV(audio/video) quality assesment, conducting full automatical presssure assesment at audio and video quality in multi aspect.",
      lookAll:"See All",
      more: "Find out more",
    },
     // 解决方案
    solution:{
      solutionTitle: "Solutions",
      title1:"TRTC（Tencent Real-Time Communication）",
      text1:"With 10+ years serving QQ Real-Time video communications, TRTC dedicates to provide high quality and low cost solutions for multimedia business.",
      title2:"Solution for Interactive Webcasting",
      text2:"A brand new all-in-one solution for multi-way audio video interaction. Audio interaction with the host, split view display, cross-platform one-to-many, multi-way high definition webcasting via mobile webcasting SDK",
      title3:"GME（Gaming Multimedia Engine）",
      text3:"All-In-One voice communication solution for gaming. Highly optimized for various gaming scenes, full functionalities, easy integration. One single SDK fits all.",
      more:"Find out more",
      lookAll:"See All",
      join:"Tencent Media Lab Job Opportunities",
      join1:"Tencent Media Lab Job Opportunities",
      joining:"Join Us Now!"
    },
    // mask
  navList:[
    {
      name: 'Home'
    },
    {
      name: 'Research',
      showList: false,
      childen: [
        { eventName: 'click_research_international', id: '86717',name: 'International Standardization', link:'/research/international', index: 0},
        { eventName: 'click_research_audio_and_video', id: '82091',name: 'Real-Time Multimedia', link:'/research/audioTransmission', index: 1 },
        { eventName: 'click_research_immersive', id: '86718',name: 'Immersive Media', link:'/research/newMedia', index: 2 },
        { eventName: 'click_research_codec', id: '86719',name: 'Video Coding', link:'/research/videoCode', index: 3 },
        { eventName: 'click_research_audio', id: '86716',name: 'Audio Processing', link:'/research/audioProcessing', index: 4 },
        { eventName: 'click_research_process', id: '82088',name: 'Video Processing', link:'/research/videoProcessing', index: 5 },
        { eventName: 'click_research_perceived', id: '86720',name: 'Heterogeneous Platform', link:'/research/perceptual', index: 6 },
        { eventName: 'click_research_assess', id: '82092',name: 'Multimedia QA', link:'/research/assessment', index: 7 },        
        { eventName: 'click_research_understanding', id: '82087',name: 'Intelligent Media', link:'/research/VideoUnderstanding', index: 8 },
      ]
    },
    {
      name: 'Research Topics',
      showList: false,
      childen: [
        { eventName: 'click_top_project', id: '82082',name: 'Research Topics', link:'/project' },
        { eventName: 'click_project_TPG', id: '82096',name: 'TPG', link:'/projectTpg' },
        { eventName: 'click_project_TSE', id: '82097',name: 'TSE', link:'/projectTse' },
        { eventName: 'click_project_liying', id: '82098',name: 'KANASKY', link:'/projectLiYing' },
        { eventName: 'click_project_platform', id: '82099',name: 'TMEC', link:'/projectAudioAndVideo' }
      ]
    },
    {
      name: 'Solutions',
      showList: false,
      childen: [
        { eventName: 'click_top_solution', id: '82083',name: 'Solutions', bgc: false, link:'/solution' },
        { eventName: 'click_solution_TRTC', id: '82093',name: 'TRTC', bgc: true, link:'https://cloud.tencent.com/product/trtc '},
        { eventName: 'click_solution_ILVB', id: '82094',name: 'ILVB', bgc: true, link:'https://cloud.tencent.com/solution/ilvb' },
        { eventName: 'click_solution_GME', id: '82095',name: 'GME', bgc: true, link:' https://cloud.tencent.com/product/gme' }
      ]
    },
    {
      name: 'About Us',
      showList: false,
      childen: [
        { name: 'Tencent Media Lab', link:'/aboutUs/laboratory' },
        // { name: 'Paper', link:'/aboutUs/thesis' },
        { name: 'Join us', link:'/aboutUs/joinUs' }
      ]
    }
  ]
  }