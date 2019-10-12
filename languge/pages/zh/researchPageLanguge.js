 export default {
    //  研究领域页面总标题
     title:"研发领域",

    //  侧边导航菜单文字使用用home页面里的变量，这里省略




    // 1. 国际标准化研究与制定页面
    researchAndMade:{
        title:"国际标准研究与制定",
        title1:"国际研究与制定",
        text:"我们专注于多媒体领域的标准研究和制定。研究领域包括媒体压缩类，系统与传输类等。同时我们积极参与相关工业论坛，以技术推动产业发展。",
        explain:"我们专注于多媒体领域的标准研究和制定。研究领域包括:",

        //   tabs切换    --tab媒体压缩
        
        tab1:{
            title:"媒体压缩",
            list:[
                {
                    subTitle:"VVC",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "Versatile Video Coding (VVC)是由ISO MPEG与ITU-T VCEG组成的联合专家组JVET制定的下一代视频编解码标准。",
                            "VVC的目标是比其上一代标准HEVC在同等主观质量条件下节省40%-50%的码率。Media Lab深度参与VVC标准制定，并有数十项提案被采纳入VVC标准。",
                            "实验室多人在JVET中担任重要职务。刘杉博士任VVC标准联合主编。李翔博士任VVC标准参考软件联合主席。"
                        ]}
                    ]
                },
                {
                    subTitle:"MPEG-5 EVC",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "MPEG-5 Essential Video Coding (EVC)是MPEG旗下另一个视频压缩标准。",
                            "该标准包含一组免费工具集以及可以独立开关的增强工具。当所有增强工具都打开时，MPEG-5 EVC可以提供明显优于HEVC的压缩性能。",
                            "Media Lab提出的针对屏幕内容编码工具已经被采纳入MPEG-5 EVC标准。"
                        ]}
                    ]
                },
                {
                    subTitle:"AVS-3",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "音视频编码标准AVS工作组由原中国信息产业部科技司于2002年授权设立。",
                            "AVS工作组已经制定出一系列成功的视频编码标准。其中，AVS-1与H.264/AVC性能相当，AVS-2与HEVC（H.265）性能相当。",
                            "目前，AVS-3第一版本已经制定完成，相比AVS-2可以提供30%左右的码率节省。AVS-3第二版正在制定过程中，目标是比AVS-2节省40%的码率。",
                            "Media Lab积极参与AVS-3的制定工作，牵头制定屏幕内容编码部分，实验室相关技术已经被AVS-3第二版本所采纳。"
                        ]}
                    ]
                },
                {
                    subTitle:"MPEG-PCC",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "MPEG正在制定针对三维点云数据（点位置+点属性）的两个标准。",
                            "第一个标准是V-PCC (ISO/IEC 23090-9)，基于视频编码的点云压缩。该标准首先将三维点云转换为二维视频信号，然后用已有视频压缩标准，如AVC，HEVC，VVC，进行压缩。",
                            "第二个标准是G-PCC (ISO/IEC 23090-5），基于几何的点云压缩。这个标准更适合稀疏点云数据，直接对点云的三维几何信息以及相应点属性进行压缩编码。这个两个标准将被广泛用于如AR/VR，自动驾驶，地图，文化遗产，工业应用等多个相关领域。",
                            "Media Lab积极参与这两个标准的研究制定工作，并在主导部分子项研究。"
                        ]}
                    ]
                },
                {
                    subTitle:"AVS-PCC",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "点云是一系列三维点的集合，可用于表示三维物体及场景。",
                            "点云数据不只包括点的几何位置信息，也包括如颜色，反射率等的点的属性信息。已经被广泛应用于自动驾驶，地理信息系统，文化遗产保护等多个领域。",
                            "AVS点云压缩专题组于2019年6月立项，预计点云压缩证据征集书将于2019年8月AVS会议后正式发布，点云压缩方案征集书将于2020年初发布。",
                            "Media Lab积极参与AVS-PCC相关工作，并担任联合主席等重要位置。"
                        ]}
                    ]
                }
            ]
        },

        // -- tab系统与传输 
        tab2:{
            title:"系统与传输",
            list:[
                {
                    subTitle:"OCP",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "开放计算项目（OCP)定义数据中心硬件及底层API。",
                            "Media Lab聚焦于针对视频与点云压缩的硬件加速其及相应接口项目。"
                        ]}
                    ]
                },
                {
                    subTitle:"IETF",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "IETF致力于制定高质量的技术规范协议从而提高互联网的效率，并影响人们设计，使用以及管理互联网的方式。",
                            "IETF制定的标准包括IP，TCP，UDP，HTTP等。",
                            "Media Lab参与IETF相关工作，聚焦于媒体传输方面，如AVT，QUIC，MOPS。Wenger博士任IETF全球五位受托人之一。"
                        ]}
                    ]
                },
                {
                    subTitle:"3GPP SA",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "3GPP是目前主导5G网络标准化的组织。",
                            "Media Lab参与相关3GPP工作，主要参与系统架构组（SA plenary）和编解码器组（SA4)。系统架构组着重于支持各种应用，而编解码器组则负责制定各种视音频编解码器与传输协议栈的接口。同时Media Lab也积极跟进包括SA1，SA2，SA6以及其他核心技术组的相关讨论。"
                        ]}
                    ]
                },
                {
                    subTitle:"MPEG SYSTEMS",
                    subContanier: [
                        {sencTitle:"OMAF",sencText:[
                            "MPEG全景媒体格式标准（OMAF）定义了如何传输表示VR以及360度全景媒体内容。通过OMAF，用户以中心视角观察世界。",
                            "OMAF第一版定义了如何将三维视频内容映射为二维视频内容以便于压缩，存储，封装以及基于HASH（Dynamic Adaptive Streaming over HTTP）或MTT（MPEG Media Transport）的传输。也定义了专门编解码器以及相应组合包含了关于媒体表示的一些档次。",
                            "MPEG于2019年1月发布了OMAF第一版。目前正在进行OMAF第二版的工作。OMAF第二版将包含层叠，基于Tile的360度视频流媒体等内容。",
                            "Media Lab深度参与OMAF相关工作。Choi博士任OMAF标准编辑。"
                        ]},
                        {sencTitle:"MPEG DASH",sencText:[
                            "MPEG DASH （Dynamic Adaptive Streaming over HTTP）标准是一组在互联网上进行流媒体内容交互的规范。其核心部分定义了交互清单以及媒体内容分段的格式。交互清单描述了内容分段信息的位置以及码率信息。相应的，HASH客户端可以根据带宽情况自适应的选择不同码率的内容。分段信息格式则定义了分片的文件格式与媒体内容。",
                            "MPEG DASH是跨平台的，可以支持任何音视频格式以及如HTTP1.1, HTTP2，组播，广播等协议。",
                            "DASH在工业界被广泛使用，如ATSC3.0，DVB，HbbTV, 3GPP, VR-IF and CTA WAVE等。MPEG DASH包含多个部分。MPEG目前将要发布核心规范（Part 1）的第四个版本，同时也在制定扩展以及其他部分。",
                            "Media Lab深度参与DASH相关工作，多项提案获得采纳。Sodagar博士是MPEG DASH主席，标准联合编辑。"
                        ]},
                        {sencTitle:"CMAF",sencText:[
                            "MPEG CMAF通用媒体格式可以用于多种流媒体协议的编码格式。该标准提供一种适应于多码率的分片文件格式，可与包括DASH与HLS等多种协议结合使用。",
                            "CMAF定义了文件格式限制，通用加密模式，编码限制等。同时也定义了通常使用到的媒体档次（编码器，档次，级别等）。通过CMAF服务提供商可以在单次压缩的基础上，将内容通过不同协议投递到不同平台上，从而降低编码以及CDN的成本。",
                            "目前MPEG将发布第二版CMAF，并正在进行第三版的工作。4.Media Lab深度参与CMAF相关工作。Sodagar博士任CMAF联合主席。"
                        ]},
                        {sencTitle:"MPEG NBMP",sencText:[
                            "MPEG NBMP （Network Based Media Processing）标准定义了如何在云平台上搭建，部署以及管理多媒体工作流程。通过该标准，服务提供商可以极为方便的制定多媒体工作流程，甚至无需开发代码。",
                            "NBMP是跨平台的，可以用于公有、私有以及混合云。它建立工作流程，管理任务，监控媒体流水线，并回报给服务提供商。",
                            "MPEG目前正在制定NBMP规范，计划于2020年上半年发布。",
                            "Media Lab是NBMP的核心贡献者，多项技术得到采纳。Sodagar博士是NBMP标准的联合编辑。"
                        ]}
                    ]
                }
            ]
        },
        //  -- tab工业联盟与论坛
        tab3:{
            title:"工业联盟与论坛",
            list:[
                {
                    subTitle:"MC-IF",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "媒体编解码工业论坛MC-IF致力于推广MPEG标准。",
                            "该论坛以VVC为起点，兼顾消费者与工业界，推广建立被广泛接受与使用的标准。",
                            "Media Lab代表腾讯参与建立了该论坛。Wenger博士任董事，并主管专利生态工作组。"
                        ]}
                    ]
                },
                {
                    subTitle:"DASH-IF",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "DASH工业论坛致力于促进推广MPEG DASH标准。",
                            "该论坛目前已有80家会员单位。自2012年，该论坛已经发布了多个指导说明，涵盖DASH实现、部署、针对服务器端加密服务的内容保护交换格式、测试集、点播和实时内容合规测试工具，DASH直播模拟器，封装工具，测试平台，dash.js开源客户端，以及多个白皮书。",
                            "DASH工业论坛与MPEG DASH工作组，以及其他工业联盟如3GPP，DVB, W3C, ATSC, CTA WAVE and HbbTV等密切合作，推进DASH相关技术的使用。",
                            "Media Lab在该论坛中主导贡献部分技术工作。Sodagar博士任该论坛主席，董事长。"
                        ]}
                    ]
                },
                {
                    subTitle:"8K Association",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "8K联盟致力于推动基于5G网络的8K视频生态系统。其目标是推广8K电视、8K内容在消费与专业市场的应用，制定相关技术需求与规范，并促进8K与5G生态系统内的交流以利于相应商业化。",
                            "Media Lab被邀请成为主任会员以及候选董事会成员。Wenger博士和Choi博士目前负责协调同三星、英特尔、TCL的相关合作，共同领导8K生态系统。"
                        ]}
                    ]
                },
            ]
        },
       },
        

    //  2.沉浸式新媒体页面
    newMedia:{
         title:"沉浸式新媒体",
         text:"着眼于前沿多媒体信息技术的发展，探索未来信息传递的多种可能性，研究采集、压缩、传输、播放等端到端完整技术链；深入理论而落地产业，将OMAF，DASH等标准研究成果融入产品，延展人类获取信息的方式与维度，从而带给人们沉浸式感官体验与全新认知世界方式。",
         explain:"功能点",
         list:[
             {
                subTitle:"采集",
                subContanier:"对XR数据的采集技术进行深度细致的研究，针对不同的采集方式进行专业性拼接、投影等相关模块算法进行研究探讨，提升数据的质量并进行相应性能的优化。"
             },
             {
                subTitle:"传输",
                subContanier:"新媒体信息包含空间数据相较传统多媒体数据量有显著增加，使传输的质量与稳定性受到挑战。我们通过优化，实现降低整体传输带宽，同质量下相对于传统传输方式节省50%带宽。"
             },
             {
                subTitle:"转码",
                subContanier:"可兼顾不同终端的不同使用方式，在不同场景下，有选择性的对不同数据进行不同格式的压缩、处理、转码，以及多码率适配VR服务器方案。完成转码操作。"
            },
            {
                subTitle:"播放",
                subContanier:"支持HLS，DASH等传输标准，集成ABR，ROI，投影等不同算法的成果，并且可以适配PC端、移动端、小程序等多平台，同时可针对低延时的要求对视频进行不断优化。"
            },
            {
                subTitle:"互动",
                subContanier:"主要是通过与三方数据结合的模式，针对不同场景下与不同用户使用的不同特性提供客制化的3D互动功能，用户沉浸式感提升，使用户达到身临其境的效果。"
            },
         ],

         business:"合作业务",
         businessList:[
             {
                subTitle:"文旅-智慧小镇",
                subContanier:"深度结合地方特色，客制化产业服务方式，与当地5G实验点相合作，提供全新导游导览体验。"
             },
             {
                subTitle:"教育-VR教育",
                subContanier:"TOB设计结构合作专业机构内容，通过VR展现方式，拓展学习场景，增强用户学习兴趣。"
            }
         ]

    },
       

    //   3.视频编解码页面
    VideoCodingAndDecoding:{
         title:"视频编解码",
         text:"视频内容占据着通信信息流量的绝大部分,原始视频数据量巨大，通常需要进行压缩处理之后才进行传输和存储。视频编解码技术致力于在保证质量的同时，将视频压缩得尽可能小。视频编码标准以及相关技术在不断地发展，并且在相关领域得到了广泛应用。",
         explain :"功能点",
         list:[
             {
                subTitle:"视频编解码技术",
                subContanier:"我们拥有高效的H.264、H.265、AVS2实时编解码器，支持全平台，支持高清实时编码，压缩效率以及编解码性能业界领先，广泛应用于各种实时视频通信场景。"
             },
             {
                subTitle:"硬件编解码技术",
                subContanier:"我们支持PC及移动端各平台硬件编解码，设备兼容性好，支持软硬件编码智能切换。智能编码器切换算法充分考虑了压缩效率，编码速度等因素，极大地提升了用户体验。"
            },
            {
                subTitle:"网络自适应编码技术",
                subContanier:"视频编码与网络深度结合，根据当前网络状态动态调整帧率、分辨率和码率，同时主动调整编码参数，大幅提升编码的抗丢包能力。"
            },
            // {
            //     subTitle:"动态编码策略",
            //     subContanier:"根据终端设备的性能动态调整编码的复杂度，同时根据网络状况的波动对编码分辨率，帧率，码率等参数进行针对性的调整。"
            // },
         ],

         project:"项目",
         projectName1:"TPG",
         projectName2:"TSE"
    },

    

    //  4.视频理解页面
    videoUnderstanding:{
          title:"智慧媒体",
          text:"搭建基于跨模态（图像、音频、文本、语音）时序算法的多媒体内容分析和理解框架，实现媒体标签，场景分类，事件检测，视频摘要，多媒体内容描述，多媒体内容检索等功能。",
          explain :"功能点",
          list:[
              {
                subTitle:"精彩视频",
                subContanier:"分析视频中的视觉、音频、文字等多模态信息，并利用基于深度学习的时序建模技术，检测出精彩动作和事件，自动输出集锦视频。目前支持游戏、体育、综艺等垂类视频。"
              },
              {
                subTitle:"智能封面",
                subContanier:"利用精彩视频和图像美学评估技术，选出最优的关键帧或关键片段作为视频封面，提升视频点击转化及用户体验。目前支持游戏、体育、MV、短视频等垂类视频。"
            },
            {
                subTitle:"场景识别",
                subContanier:"利用基于深度学习的场景识别技术，对视频内容进行智能分析，捕捉视频中的人物、场景、语音、文字等信息，自动生成视频标签、类别等。"
            },{
                subTitle:"显著性检测",
                subContanier:"利用基于深度学习的语义分割和目标检测技术，对视频的感兴趣区域进行检测和分割，精准定位视频中的人眼关注区域，为视频理解以及编码资源分配提供有利信息。"
            }
          ]
    },

    

    //   5.视频处理页面
    videoHandle:{
        title:"视频处理",
        text:"多年视频处理技术积累，从移动端到后台，从实时到离线，从视频到图片，从传统算法到人工智能，覆盖几乎所有视频处理的领域，同时对每种算法进行深度的性能和效果优化，输出真正能落地于产品的有价值的技术。",


        explain1:"视频修复",
        list1:[
            {
                subTitle:"智能降噪",
                subContanier:"实时智能降噪：利用前帧的预测信息，根据噪声强度对当前帧进行智能降噪；离线智能降噪：结合深度学习及前后帧的预测信息，寻找最优匹配块进行联合降噪。",
            },
            {
                subTitle:"去压缩失真",
                subContanier:"基于深度学习的技术，在确保可保留主边缘并且恢复弱边缘细节的同时，去掉因编码压缩引入的块效应、边缘毛刺等artifact，以此可大幅度提升视频的主观质量。"
            },
            {
                subTitle:"色彩还原",
                subContanier:"利用深度学习的技术，对视频中受损的画面进行高强度修复，可以将视频受损的部分恢复到色彩最佳的状态，从而修复整个视频的色彩度，达到提升视频主观质量的目的。"

            },
            {
                subTitle:"视频智能去抖动",
                subContanier:"实时去抖动：移动端将防抖算法和硬件设备位置信息结合，对视频画面实时去抖动，使画面稳定；离线去抖动：智能检测抖动状况，结合前后帧信息对当前帧运动进行预估，改善抖动状况。"
            },
            {
                subTitle:"去雾",
                subContanier:"通过暗通道理论做基础，在效果上解决过曝和平坦区域的适应问题，并且适应每个视频的所有场景，使视频在性能上通过深度优化使算法几乎不会消耗资源。"
            }
        ],
        explain2:"视频增强",
        list2:[
            {
                subTitle:"智能细节增强",
                subContanier:"主要是根据人眼的视觉特效，对人眼关注的地方和感兴趣的画面进行智能细节增强，可提升人眼关注区的画面质量，达到关注区细节更清晰的效果。更有利于视频编码。"
            },
            {
                subTitle:"色彩增强",
                subContanier:"通过播放器对不同视频原本色彩的展现，对视频中不同的的色彩进行自适应调整，提高视频中不同色彩的饱和度，使视频内容显得更丰富，提升人眼的视觉体验。"
            },
            {
                subTitle:"超分辨率",
                subContanier:"利用深度学习的技术，针对不同视频不同的场景，对视频场景进行深入优化，在提高视频分辨率的前提下，大量提升视频中画面的细节信息。达到超高分辨率。"
            },
            {
                subTitle:"帧率上采样",
                subContanier:"在视频播放期间，对视频的帧率进行多倍率的提升，从而使视频的画面细节更平滑，视频画面更细腻。提升视频画面的饱和度和细腻感，提高人眼观看视频的感官感受。"
            },
            {
                subTitle:"暗场景增强",
                subContanier:"利用最前沿的科研技术结合优秀的自研能力，通过对各种暗场景的效果优化，以及对实际应用场景的适配，达到对视频的实时处理能力，几乎不会消耗资源。"
            },
            {
                subTitle:"美颜",
                subContanier:"对人脸进行准确美化处理时，提升人面部中人眼、眉毛、嘴唇等五官的立体感、同时在保证背景依然清晰情况下，抹掉人脸上的瑕疵点，提升人眼肤色，使人脸肤质提升。"
            },
            {
                subTitle:"滤镜",
                subContanier:"满足各种不同场景下以及不同风格的滤镜，确保视频呈现效果较好的情况下，呈现不同的风格，让视频质量更贴近人眼视觉。提升视频的色彩饱和度或者丰富度。"
            },
            {
                subTitle:"特效",
                subContanier:"不同场景和不同风格的动漫特效让视频秒变漫画风，通过细腻的素描画风格让视频更有趣生动。提升视频内容的饱和度，可提升视频的趣味性，增加视频的点击率和播放量。"
            }
        ]

    },


    //  6.感知交互页面
    touch:{
        title:"异构平台",
        text:"视频编解码和处理对计算能力提出了越来越多的需求，传统的单一架构已经无法满足我们对不同应用的性能需求，异构计算被认为是现阶段挑起视频处理计算大梁的关键技术，它最大的优点是具有比传统CPU并行计算更高效率和低延迟的计算性能。",
        explain :"功能点",
        list:[
            {
                subTitle:"视频转码",
                subContanier:"将视频流从一种格式转化为一路或多路其他格式，支持不同格式，分辨率， 码率，帧率和其他设置等，能够支持实时直播和非实时点播等不同应用场景。"
            },
            {
                subTitle:"面向视频编解码的视频处理技术",
                subContanier:"通过紧密结合相对应的编解码信息，对需要处理的视频进行针对性的辅助处理，其中包括利用编解码信息对视频进行智能增强，以及利于编码的智能抹除对视频进行处理等技术。"
            },
            {
                subTitle:"硬件平台支持",
                subContanier:"能够支持不同的硬件平台， 包括CPU，GPU, FPGA, ASIC等，"
            }
        ],
        business:"合作业务",
         businessList:[
             {
                subTitle:"云游戏",
                subContanier:"云游戏是以云计算为基础的游戏方式，在云游戏的运行模式下，所有游戏都在服务器端运行，并将渲染完毕后的游戏画面压缩后通过网络传送给用户。在客户端，用户的游戏设备不需要任何高端处理器和显卡，只需要基本的视频解压能力就可以了."
             }
         ]
     },

    //   7.音频处理页面
    audioHandle:{
          title:"音频处理",
          text:"针对多人，多场景实时通信系统中3A问题（降噪、回声抑制、增益控制），提供低复杂度、高鲁棒性解决方案，有效提升各种办公和移动端的声音体验。",
          explain:"功能点",
          list:[
              {
                subTitle:"音频引擎",
                subContanier:"具有业界领先的语音音频编码系统，提供VoIP等不同场景下高效率、高质量语音频编解码方案。高度结合信道优化，提升网络抗性以及端到端的主观质量体验。"
              },
              {
                subTitle:"机器学习",
                subContanier:"将最新机器学习技术融合到音频业务中，消除各种杂音和非平稳噪声，增加语音清晰度和可懂度，应用覆盖了To B端到端的通话质量改善，和To C声音美化、语音转换等。"
            },
            {
                subTitle:"音频工程",
                subContanier:"构建高效率算法移值和工程化能力。满足真实场景复杂的应用问题，建立端到端的实时语音质量监控系统，交付覆盖服务器及移动客户端，提供优质音频解决方案。"
            },
            {
                subTitle:"语音引擎",
                subContanier:"设计提供多级码率-质量控制的信源编码器。提升流控下的信源编码器的灵活性，结合信道优化，提升网络抗性和端到端的主观质量体验。"
            },
            {
                subTitle:"语音前处理技术——3A技术",
                subContanier:"(1)声学回声消除(AEC),消除本地麦克风采集的播放信号，以免对端听到回声；(2)自适应降噪(ANS),消除麦克风采集到的环境中的噪声；(3)自动增益(AGC)，自动控制麦克风采集到的信号大小；"
            },
            {
                subTitle:"AI智能降噪/分离",
                subContanier:"主要通过深度学习技术，检测和去除混合在传播的语音信号中的噪声干扰信号，提高语音的质量、和语音的可懂度，提升用户听到声音的清晰度，改善用户听感。"
            },
            {
                subTitle:"AI语言美化",
                subContanier:"可通过对质量效果不好的歌声进行针对性的调整。主要是检测存在的错字，漏字等问题，改善歌声的音调，音准等，改善歌声传递过程中的清晰度，提高歌声的美感。"
            },
            {
                subTitle:"AI声音转换",
                subContanier:"通过深度学习的技术，可以将说话人的声音转换成某个特定人的声音。模仿其被转换入的声音音色、说话语调、说话方式等。可以使听者达到身临其境的声感。"
            },
            {
                subTitle:"3D音效",
                subContanier:"给原本单声道的声音赋予方位信息，加入环境处理来更真实体现的体现声音实际效果。比如将声音放置在左前，右后等不同位置，可以听到声音从不同方位传出，增强空间感。"
            },
            {
                subTitle:"语言变声",
                subContanier:"把说话人的声音转变为萝莉音，机器人音，卡通音等等，增加趣味性；可根据兴趣把说话人的声音进行转换，转变形式多变，种类多样。可转化为为萝莉音、机器人音、卡通音等不同音色的声音，以此达到更改说话人的声音的目的。增加声音阅读的趣味性。"
            },
          ]
    },

   

    // 8.实时音视频传输页面
    transfer:{
          title:"实时音视频传输",
          text:"超高清音视频的传输需要稳定的网络和充足的带宽，任何的网络波动都会对音视频质量造成影响。在实时通讯的场景下，如何高速地检测网络状态并根据网络状态制定合适的抗性和传输策略，一直是学术界和业界的难题。我们的团队具有丰富的学术界和业界经验，为此提供了能适应各种复杂场景的高品质高可靠性的解决方案。",
          explain:"功能点",
          list:[
              {
                subTitle:"拥塞控制",
                subContanier:"我们调研了各种学术界和业界最新的拥塞控制算法，结合我们丰富的网络状态数据库，提出了新的实时拥塞控制算法，在不同网络场景下都能迅速给出可靠的带宽预测。"
              },
              {
                subTitle:"损伤抗性",
                subContanier:"网络故障种类繁多、千差万别，我们的智能抗性算法可以在极低的延时下抵御住各种突发性的网络波动及网络损伤，以此保持媒体播放的流畅性和清晰度，确保优质的播放体验。"
            },
            {
                subTitle:"QoS/QoE最优化",
                subContanier:"在网络带宽受限的情况下，清晰度、流畅性和延时不可兼得。我们根据应用的上下文和网络状态，实时自动做出最优的取舍，让最终用户能获得最好的体验。"
            },
            {
                subTitle:"多人通讯流控",
                subContanier:"多人通讯环境，既要保证重要通话的清晰度，又要兼顾他人的体验。我们使用了两套策略：在决策空间有限的情况下使用人工智能进行流控；在更复杂的场景下提供基于主观体验调整策略。"
            },
            {
                subTitle:"网络度量",
                subContanier:"网络策略的制定离不开现网大量数据支持。我们有丰富的去隐私数据集用来提取和学习网络的状态，可以在离线场景下复现差网状态，与在线场景下迅速判断网络状态。"
            },
          ]
    },


    // 9.音视频通信质量评估页面
    connectionQuality:{
        title:"音视频通信质量评估",
        text:"我们研究基于深度学习的客观音视频质量评估算法，进行实现端到端的音视频内容质量评估。我们的研究内容涵盖多种多媒体格式，即衡量不同的编解码器在业务场景中的使用效果，又评估自研音视频前/后处理增强算法所带来的质量提升。我们以人的主观质量感受为目标，通过质量评估算法来指导音视频产品线的各个环节，最终提升用户体验。",
        explain:"功能点",
        list:[
            {
                subTitle:"音频无参考评估",
                subContanier:"开发适用于实时音视频通话的音频质量评估算法。在网络受限情况下，衡量卡顿、延时和可懂度。在理想网络情况下，评估降噪、回声抑制、增益控制等语音增强技术的效果。"
            },
            {
                subTitle:"图像/视频无参考评估",
                subContanier:"针对实际业务中的高清源不可用场景，开发基于深度学习的无参考视频质量评估算法。我们开发的算法即适用于消费级相机所拍摄的视频，又能衡量视频质量增强算法所带来的质量提升。我们提出的算法已经落地在部分视频业务中。"
            },
            {
                subTitle:"视频全参考质量评估",
                subContanier:"针对视频高清源可用场景，使用深度学习技术来精确衡量视频质量，进而更好的平衡视频码流大小与视频观看体验。我们提出的算法在标准codec压缩失真数据集上取得了领先业界和学术界的性能。"
            },
        ],
        project:"项目",
        projectName:"音视频质量评测平台",
        projectText:"提供自动化音视频质量测试能力，多方面对音视频质量进行压力测试",
        more: "了解更多"
    },


}