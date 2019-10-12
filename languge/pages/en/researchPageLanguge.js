export default {
    //  研究领域页面总标题
     title:"Research",

    //  侧边导航菜单文字使用用home页面里的变量，这里省略




    // 1. 国际标准化研究与制定页面
    researchAndMade:{
        title:"International Standardization",
        text:"We focus on research and development of multimedia standards, including media compression, transmission and systems. Meanwhile, we actively participate in industry consortia， promoting the industry development with technologies.",
        explain:"我们专注于多媒体领域的标准研究和制定。研究领域包括:",

        //   tabs切换    --tab媒体压缩
        
        tab1:{
            title:"Multimedia Compression",
            list:[
                {
                    subTitle:"VVC",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "Versatile Video Coding (VVC) is a video compression standard being developed for finalization around 2020 by the Joint Video Experts Team (JVET) which is a united video expert team of the MPEG  and the ITU-T VCEG. ",
                            "VVC will be the successor to High Efficiency Video Coding (HEVC) and targets at 40%-50% bit-rate reduction over HEVC. Media Lab actively contributes to VVC and many proposals have been adopted in VVC. ",
                            "Media Lab holds several key positions in JVET. Dr. Shan Liu is one of the VVC standard editors. Dr. Xiang Li is one of the VVC reference software co-chairs."
                        ]}
                    ]
                },
                {
                    subTitle:"MPEG-5 EVC",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "MPEG-5 Essential Video Coding (EVC) is another video coding standard that is expected to be completed in 2020.",
                            "The standard is to consist of a royalty-free subset and individually switchable enhancements. With the enhancements, the coding efficiency of MPEG-5 EVC will be noticeably higher than HEVC. ",
                            "Media Lab’s screen content coding technology has been adopted in MPEG-5 EVC."
                        ]}
                    ]
                },
                {
                    subTitle:"AVS-3",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "Audio Video coding Standard (AVS) workgroup of China was authorized to be established by the Science and Technology Department under the former Ministry of Industry and Information Technology of People’s Republic of China in June 2002. ",
                            "A series of successful video coding standards have been developed by this workgroup, among which AVS-1 is comparable to H.264/AVC standard in coding efficiency; AVS-2 is comparable to H.265/HEVC standard; AVS-3 v1 has been finalized and can reportedly achieve ~30% bit-rate reduction when compared with AVS-2. ",
                            "AVS-3 v2 development is ongoing and targets at 40% bit-rate reduction when compared with AVS-2. Media Lab is actively participating in AVS-3 development and takes leadership as one of the chairs for screen content coding activities. ",
                            "Media Lab’s screen content coding technology has been adopted in AVS-3 v2."
                        ]}
                    ]
                },
                {
                    subTitle:"MPEG-PCC",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "MPEG (the Moving Picture Experts Group) is developing two video coding standards to address the needs for efficient dissemination of 3D point cloud data which consists of the position and the attribute information of each point in 3D objects or scenes. ",
                            "The first standard is V-PCC (ISO/IEC 23090-9 Video-based Point Cloud Compression), which performs a conversion of the dense 3D point cloud into a 2D video that can be compressed by leveraging existing video codecs such as AVC, HEVC, and VVC.  ",
                            "The second one is G-PCC (ISO/IEC 23090-5 Geometry-based Point Cloud Compression), which is more appropriate for sparse point clouds and directly codes the 3D geometry and associated attributes representing large point clouds. These two compression standards find many promising areas of relevance such as AR/VR, autonomous driving, map services, cultural heritage, and industrial applications. Media Lab is actively participating in both standards leading several sub-activities. "
                        ]}
                    ]
                },
                {
                    subTitle:"AVS-PCC",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "A point cloud is a set of 3D points used to represent 3D objects or scenes.",
                            "It includes not only geometry information but also attribute information such as color or reflectance, etc. Point clouds have been widely used in many areas such as autonomous driving, geographic information systems (GIS), and culture heritage preservations, etc.  AVS point cloud coding sub-group (AVS-PCC) was established in June 2019 in AVS workgroup to investigate use cases, technique requirements and technique solutions of point cloud compression.",
                            "It is expected that a Call for Evidence (CfE) will be issued after August meeting in 2019 and a Call for Proposal (CfP) will be issued in early 2020. ",
                            "Media Lab is actively participating in AVS-PCC and also takes leadership role as one of three joint chairs of the sub-group and chairs of several activities."
                         ]}
                    ]
                }
            ]
        },
        // -- tab系统与传输 
        tab2:{
            title:"Transmission and System",
            list:[
                {
                    subTitle:"OCP",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "The Open Compute Project (OCP, http:// https://www.opencompute.org) standardizes datacenter hardware and certain low-level APIs. ",
                            "Media Lab contributes primarily towards accelerator hardware and API projects, in particular for video and point cloud compression."
                        ]}
                    ]
                },
                {
                    subTitle:"IETF",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "The mission of the IETF (http://www.ietf.org) is to make the Internet work better by producing high quality, relevant technical documents that influence the way people design, use, and manage the Internet. ",
                            "Standards produced by the IETF include IP, TCP, UDP, and HTTP.  ",
                            "Media Lab participates in subgroups with a focus on media transport, including AVT, QUIC, and MOPS.  Dr. Wenger also holds the position of an IETF Trustee."
                        ]}
                    ]
                },
                {
                    subTitle:"3GPP SA",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "3GPP is, at present, the dominant standardization organization for the 5th the fifth generation cellular network technology (5G). ",
                            "Media Lab participates primarily in the System Architecture groups, namely in SA plenary and SA4 (codec).  The former has certain oversight functions, the latter standardizes audio/video codecs and their interface to the transport protocol stack.  Media Lab also follows other working groups including SA1, SA2, SA6, and some of the Core Technology (CT) working groups."
                        ]}
                    ]
                },
                {
                    subTitle:"MPEG SYSTEMS",
                    subContanier: [
                        {sencTitle:"OMAF",sencText:[
                            "MPEG Omnidirectional Media Format (OMAF, ISO/IEC ISO/IEC 23090-2) provides a specification for delivery of VR/360 video and multimedia content.  In an OMAF experience, the viewer’s perspective is from the center of the sphere looking outward towards the inside surface of the sphere. ",
                            "OMAF 1st edition specification defines projection and packing schemes for mapping 3D content to 2D content for encoding, storage of the encoded content in ISO Based File Format, and finally encapsulation, signaling and streaming of the encoded content with Dynamic Adaptive Streaming over HTTP (DASH) as well as MPEG Media Transport (MMT). It also includes a few media and presentation profiles by defining specific codecs and combinations for each profile. ",
                            "MPEG published the 1st edition of OMAF in January 2019 and currently working on the 2nd edition. The 2nd edition will include overlay support as well as late binding of tile-streaming of 360 Video among other features. ",
                            "Media Lab is participating in the 2nd edition development of OMAF. Dr. Choi is one of the OMAF standard editors."
                        ]},
                         {sencTitle:"MPEG DASH",sencText:[
                            "MPEG Dynamic Adaptive Streaming over HTTP (DASH) standard (ISO/IEC 23009) is a set of specifications primarily for interoperable streaming of multimedia content over the internet. The core specification defines a manifest and a segment format. The manifest describes the location of segmented content resources and their variation with different bitrates so that the DASH client can adapt to the variable network bandwidth by switching between various bitrates. The segment format defines the fragmented file format for media content.",
                            "MPEG DASH is codec and protocol agnostic, i.e. it can support any video and audio codec and media types, as well as various delivery protocols such as HTTP1.1, HTTP2, multicast, and broadcast.",
                            "DASH has been widely adopted by industry and consortia, including ATSC 3.0, DVB, HbbTV, 3GPP, VR-IF and CTA WAVE. MPEG DASH specification has several parts. MPEG is about to publish the 4th edition of the core spec (Part 1) and is currently working on new extensions and additional parts. Dr. Iraj Sodagar has been the MPEG DASH subgroup chair in MPEG since the start of DASH standardization in 2009. He is also co-editors of DASH specifications.",
                            "Media Lab actively participates in the DASH standard developments, and several of its submissions were adopted into the 4th edition."
                        ]},
                        {sencTitle:"CMAF",sencText:[
                            "MPEG Common Media Format (ISO/IEC 23000-19) is an encoding format to be used by the various streaming protocol. It provides a fragmented file format along with encoding constraints for creating multi-rate encoded content, which can be used with MPEG-DASH as well as other streaming formats such as HTTP Live Streaming (HLS).",
                            "CMAF defines the file format constraints, the common encryption modes and encoding constraints for its media profiles. It also defines a set of commonly used media profiles (with defined codec, profile, level, and other characteristics). With CMAF, a service provider can encode the content once and deliver it using different streaming protocols or delivery platforms. Therefore CMAF reduces the content encoding cost as well as the CDN efficiency and cost during delivery.",
                            "MPEG is about to publish the 2nd edition of CMAF and is currently working on the 3rd edition.",
                            "Dr. Sodagar was the first co-chair of CMAF subgroup in MPEG and Media Lab actively participates in CMAF spec developments."
                        ]},
                        {sencTitle:"MPEG NBMP",sencText:[
                            "MPEG Network-Based Media Processing (NBMP, ISO/IEC 23090-8) provides a standard for building, deploying and managing media workflows over Cloud platforms. MPEG NBMP enables a service provider to define a media workflow and request the NBMP Workflow Manager to build it using a repository of pre-built media functions without writing a single line of software. ",
                            "NBMP is platform-agnostic i.e. it can deploy services on any private or public cloud platform or a hybrid of various Cloud platforms. It establishes the workflow, manages the tasks, monitors the media pipeline and provides reports back to the service provider. ",
                            "MPEG is currently developing the NBMP specification with a target publication date of H1/2020. 4.Media Lab is one of the key contributors to NBMP specification, with dozen adopted submissions into the specification and Dr. Iraj Sodagar is the co-editor of NBMP specification."
                        ]},
                    ]
                }
            ]
        },
        //  -- tab工业联盟与论坛
        tab3:{
            title:"Industry Consortia",
            list:[
                { 
                    subTitle:"MC-IF",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "MC-IF furthers the adoption of MPEG Standards.",
                            "It initially focuses on VVC, by establishing them as well-accepted and widely used standards for the benefit of consumers and industry.  ",
                            "Media Lab, on Tencent’s behalf was a founder of this organization, and Dr. Wenger sits on its Board of Directors and chairs the IP Ecosystem working group."
                        ]}
                    ]
                },
                {
                    subTitle:"DASH-IF",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "The DASH Industry Forum (DASH-IF) is an industry forum to foster the deployment of MPEG-DASH standard. ",
                            "DASH-IF currently has 80 member companies and since 2012 has developed several implementation guidelines and specifications on DASH deployment, content protection exchange format for server-side encryption services, extensive test vector database, and conformance tools for on-demand and live content, DASH live streaming simulator, packaging tools, and test platforms, dash.js open-source client, and several white papers. ",
                            "DASH-IF collaborates closely with MPEG on the DASH spec developments as well as with other consortia such as 3GPP, DVB, W3C, ATSC, CTA WAVE and HbbTV on DASH consortia-related specifications and deployments. Dr. Iraj Sodagar is DASH-IF President/Chairman of Board.",
                            "Media Lab is leading and contributing to some of the technical activities in DASH-IF."
                        ]}
                    ]
                },
                {
                    subTitle:"8K Association",
                    subContanier:[
                        {sencTitle:"",sencText:[
                            "8K Association is an organization to address the concerns of the 8K ecosystem over 5G network. The missions of 8K Association are promoting 8K TVs and 8K Content to consumers and professionals, developing technical requirements and specification for 8K visual quality over 5G, and facilitating communication within 8K and 5G ecosystem for commercialization. ",
                            "Tencent Media Lab. was invited as a Principal member & Board of Director (BoD) candidate of 8K Association. Now, Dr. Stephan Wenger and Dr. Byeongdoo Choi are coordinating the collaboration with global companies including Samsung, Intel, TCL, to lead 8K-ecosystem."
                        ]}
                    ]
                }
            ]
        }
       },
        

    //  2.沉浸式新媒体页面
    newMedia:{
         title:"Immersive Media",
         text:"Our team seeks to expand the possibilities of how people interact with information and media through fully immersive virtual reality.  We are infusing cutting edge technologies in capture, compression, playback, etc. into our products to create end to end solutions, allowing users to experience the world through brand new perspectives.",
         explain:"Function Points",
         list:[
             {
                subTitle:"Capture",
                subContanier:"Research data capture methods with a focus on improving video quality through algorithms used for stitching, projection, etc."
             },
             {
                subTitle:"Transmission",
                subContanier:"Transfer of multi-dimensional data for immersive virtual reality places significantly greater demands on bandwidth than traditional media.  As a result, stability and quality are both important hurdles.By focusing on ROI transmitting algorithms, our team was able to bandwidth requirements by 50% while maintaining the quality of the data stream."
             },
             {
                subTitle:"Transcoding",
                subContanier:"Our VR transcoding server is compatible with a range of end-client needs, supporting adaptive bitrate, multiple formats, and differing processing methods."
            },
            {
                subTitle:"Playback",
                subContanier:"Multi-Platform playback in HLS/DASH protocols is integrated with ABR, ROI, and projection algorithms.  Mobile, PC, and tablet products are supported."
            },
            {
                subTitle:"Interactive",
                subContanier:"Interactive 3D models worked with customized data."
            },
         ],

         business:"Partnerships",
         businessList:[
             {
                subTitle:"Cultural Tourism – Smart Town						",
                subContanier:"We created a completely new travel experience by highlighting cultural and local specialties while personalizing services with our immersive guide."
             },
             {
                subTitle:"Education—Collaborating with our partner,",
                subContanier:"We transformed the student’s experiences by bringing study subjects to life with VR technology.  The new teaching methods generated greater student enthusiasm and improved learning results."
            }
         ]

    },
       

    //   3.视频编解码页面
    VideoCodingAndDecoding:{
         title:"Video Coding",
         text:"Video contents occupy a majority of communication information nowadays. The storage and delivery of raw video are under great pressure due to the massive size of uncompressed data. To alleviate such a pressure, it is critical to achieve higher compression ratio and better channel adaptivity. Video coding standard and technology are constantly evolving, empowering a lot of related areas.",
         explain :"Function Points",
         list:[
             {
                subTitle:"Software Video Coding Technology",
                subContanier:"We have high efficiency real-time codecs for H.264, H.265 and AVS2 that run on any platform. High Definition (HD) Real-Time encoding funtionality is well supported. Our codecs have been widely used in all kinds of real-time video communication scenarios, offering great compression efficiency and industry-leading performance."
             },
             {
                subTitle:"Hardware Video Coding Technology",
                subContanier:"We have various hardware codecs targeting different platforms, including but not limited to PC, mobile. We have a set of intelligent algorithms taking coding efficiency and hardware complexity into consideration for switching between software and hardware codecs. As a result, the user experience can be improved significantly."
            },
            {
                subTitle:"Network Adaptive Coding Technology",
                subContanier:"Combining the network with video coding, the encoder parameters can be adjusted automatically according to the real-time feedback of the network. For example, when the network is in bad condition, the encoders reduce bit rate or frame rate to ensure better transmission quality such that the network resilience can be improved considerably."
            },
            // {
            //     subTitle:"Dynamic Coding Strategy",
            //     subContanier:" We dynamically adjust encoder parameters (including but not limited to resolution, frame rate, bit rate) to adapt to the network fluctuation and the unstable performance of terminal devices."
            // },
         ],

         project:"Invention project",
         projectName1:"TPG",
         projectName2:"TSE"
    },

    

    //  4.视频理解页面
    videoUnderstanding:{
          title:"Intelligent Media",
          text:"The multimedia analysis and understanding framework based on the cross-modal (image, audio, text, voice) temporal algorithm is built to realize media label, scene classification, event detection, video summary, multimedia description, multimedia retrieval and other functions.",
          explain :"Function Points",
          list:[
              {
                subTitle:"Video Highlight",
                subContanier:"Analyze multimodal information such as visual, audio, and text in video, and use the Deep Learning based time series modeling technology to detect exciting actions and events, and automatically output highlighted video. Currently supports games, sports, variety shows and others."
              },
              {
                subTitle:"Smart Cover",
                subContanier:"Use the highlight video and image aesthetic evaluation techniques to select the best keyframes or key clips as video covers to enhance video click conversion and user experience. Currently supports game, sports, MV, short video and others."
            },
            {
                subTitle:"Video Scene",
                subContanier:" Using deep learning based scene recognition technology to intelligently analyze video content, capture information such as characters, scenes,  and texts in the video, and automatically generate video tags and categories."
            },{
                subTitle:"Saliency Detection",
                subContanier:"Using Deep Learning based semantic segmentation and object detection technology to detect and segment the region of interest of the video, accurately locate the human eye's attention area in the video, and provide favorable information"
            }
          ]
    },

    

    //   5.视频处理页面
    videoHandle:{
        title:"Video Processing",
        text:"We have been working on video processing for many years and accumulated a large amount of technology. Both mobile and backstage, both real-time and offline, both video and image, both traditional algorithms and artificial intelligence, our researches cover almost all fields of video processing. Meanwhile, each algorithm is deeply optimized for performance and effects,  and finally make it a valuable technology which can be truly applied on the product.",


        explain1:"Video Restoration",
        list1:[
            {
                subTitle:"Intelligent Denoising",
                subContanier:"Real-time intelligent denoising:  We use the predictied information from the previous frame, to intelligently denoise on the current frame according to the noise intensity;Offline intelligent denoising: We combine deep learning with the predicted information from previous and subsequent frames, to search the optimal matching block for joint denoising,  and finally obtain the best denoised effect.",
            },
            {
                subTitle:"Artifacts Removal",
                subContanier:"Using deep learning,  we can not only remove the artifacts such as block effect, edge burr, which produced by the coding compression, but also ensure that the main edge can be preserved and the weak edge details can be restored,  so that the algorithm can greatly improve the subjective quality of the video."
            },
            {
                subTitle:"Color Restoration",
                subContanier:"Using deep learning to perform high-intensity repairs on damaged frames in the video, we can restore the color of the damaged part to optimal status, thereby the color of the entire video would be restored and the subjective quality of the video can be improved."

            },
            {
                subTitle:"Intelligent Video Stabilization",
                subContanier:"Real-time video stabilization: We combine the anti-shake algorithm with the location information of the hardware device on the mobile terminal to anti-shake, and make the video stable in real time;Offline video stabilization: Intelligently detecting the shaking level, we utilize the information of the previous and subsequent frames to estimate motion on the current frame, in order to anti-shake."
            },
            {
                subTitle:"Dehazing",
                subContanier:"Based on the dark channel prior, our technique solves the problem of overexposure and the adaptation on flat area, and adapts to all scenes of each video. And after deep optimization of video on performance, our algorithm consume almost no resources."
            }
        ],
        explain2:"Video Enhancement",
        list2:[
            {
                subTitle:"Intelligent Detail Enhancement",
                subContanier:"According to the visual effects of the human eyes, we enhance the details on the regions that human eyes interest intelligently. It can enhance the image quality of ROI, achieve a clearer effect of the details，and can be more beneficial for video coding."
            },
            {
                subTitle:"Color Enhancement",
                subContanier:"Through the player's display of the original color of different videos, we adaptively adjust the different colors in the video to improve the saturation, in order to make the video content more rich and enhance the visual effects."
            },
            {
                subTitle:"Super-Resolution",
                subContanier:"Using deep learning technology, we deeply optimize the video for different scenes of different videos. Under the premise of increasing the video resolution, our SR algorithm also greatly enhance the details in the video."
            },
            {
                subTitle:"Frame Rate Upsampling",
                subContanier:"During the video playback, we have increased the frame rate of the video, resulting in smoother video and more detailed image. Enhanced the saturation and exquisiteness of the video,  the visual enjoyment of watching the video would be improved."
            },
            {
                subTitle:"Dark Scene Enhancement",
                subContanier:"using cutting-edge technology combined with excellent self-research ability, we optimize the effects of various dark scene, and adapt to actual scenes. Our algorithm can achieve real-time processing of video, with consuming almost no resources ."
            },
            {
                subTitle:"Beauty",
                subContanier:"Our algorithm beautify face accurately, ensuring that the background is still clear, we can not only enhance the three-dimensional sense of the human face, eyebrows, lips and other facial features, but also erase the defects on faces, brighten eyes and whiten skin."
            },
            {
                subTitle:"Filter",
                subContanier:"We design a variety of filters in different scenes and styles. In the case of ensuring good visual effects, our filters can present different styles, make the video quality closer to the human eyes and improve the color saturation and exquisiteness."
            },
            {
                subTitle:"Special Effects",
                subContanier:"We can transform different scenes and different styles into the comic style, sketch style and so on, which make the video much more instereting and vivid,  and then increase the click rate."
            }
        ]

    },


    //  6.感知交互页面
    touch:{
        title:"Heterogeneous Platform",
        text:"Video encode/decode and processing needs more and more compute power,  and there is no single solution can fit various application and performance requirement.  Heterogeneous computing is the key technology and it can provide higher efficiency and low latency compute power than traditional parallel CPU architecture. ",
        explain :"Function Points",
        list:[
            {
                subTitle:"Video Transcoding",
                subContanier:"Transcode the video stream from one format to one or multiple video streams with different formats, can support differnt format, resolution, bitrate, framerate and configuration etc, and can also support different usage scenarios like real-time live broadcasting or non real-time VOD."
            },
            {
                subTitle:"Video Processing for Video Codec",
                subContanier:"We perform video assisted processing by closely combining the corresponding codec information, including intelligent video enhancement used codec information,  smart erasing on video that facilitates coding and so on."
            },
            {
                subTitle:"Hardware platform support",
                subContanier:"Can support different hardware platform, including CPU, GPU, FPGA, ASIC etc"
            }
        ],
        business:"合作业务",
         businessList:[
             {
                subTitle:"Cloud  Gaming ",
                subContanier:"Cloud gaming is a type of online gaming that aims to provide smooth and direct playability to end users of games across various devices. This could include a host gaming server capable of executing a gaming engine and streaming the gaming data to the client device."
             }
         ]
     },

    //   7.音频处理页面
    audioHandle:{
          title:"Audio Processing",
          text:"We are focusing on designing low-complexity and high-robust solutions for elimating the quality problems in voice communications for diversed usecases, to enrich the audio experiences in office and mobile devices.",
          explain:"Function Points",
          list:[
              {
                subTitle:"Audio Engine",
                subContanier:"It focus on inventing world-leading audio compressions system in VoIP with high-efficient and high-quality. The solution is highly jointly correlated to  the optimizations in channel aspect to  improve the end-to-end experiences with error resillience."
              },
              {
                subTitle:"Machine Learning",
                subContanier:"It  is targeted into design novel algorithms in elimiating complex glitches and non-stationary noise and improving the quality and intelligibility by combining state-of-art machine learning technologies. The applications include but not limit, quality improvement for end-to-end voice communication, voice beautification, and voice conversion, etc."
            },
            {
                subTitle:"Audio Engineering",
                subContanier:"It focus on building high-efficiency coding and engineering capabability to fullfil different business and technical requirements. The outcomes include high-quality audio solutions covering server and clients, including the real-time quality monitoring."
            },
            {
                subTitle:"Voice Engine",
                subContanier:"It is target on next-generation source coding with multi-rate QoE-control and jointly-source-channel coding, to help further improve the end-to-end subjective experience with robust QoE-control based on channel feedback."
            },
            {
                subTitle:"Pre-Processing (3A)",
                subContanier:"It includes a set of 3A processing (i.e., Automatic Echo Cancellations, Automatic Noise Cancellations, and Automatic Gain Control) to elimate diversed artifacts in capturing aspect."
            },
            {
                subTitle:"AI Denoising/Separations",
                subContanier:"It combines deep learning methos to detect and remove the atternuations in transmitted signal, to improve the subjective quality and intelligibility."
            },
            {
                subTitle:"AI Sound Beautification",
                subContanier:"It targets to improve the sining sound quality, including but not limit detect word-error and word-missing, improve the tune, to improve the definitions of the signing sound with better aesthetic feelings."
            },
            {
                subTitle:"AI Voice Conversion",
                subContanier:"It combines deep learning methods to convert the original sound to another form with another speaker's features. It changes the tones and timbre with natural approach."
            },
            {
                subTitle:"3D Sound Effect",
                subContanier:"It append the artificial spatial features into original monophonic sound to enable the spatiness feeling, e.g., the effects of directional sound is perceived."
            },
            {
                subTitle:"Voice Morphing",
                subContanier:"It provides the capababilities to morphing the sound and outcome interesting sound effect (e.g., lolita, robot, cartoons, etc). The configurations is able to customized to generate different morphing effect to improve the interesting in human-machine interactions."
            },
          ]
    },

   

    // 8.实时音视频传输页面
    transfer:{
          title:"Real-Time Multimedia",
          text:"Streaming High-Quality multimedia contents requires stable network conditions with significant available bandwidth, and the instability of underlying network affects the user-perceived experience. How to efficiently and accurately measure the network condition and make appropriate congestion control decision is still an unsolved problem for both academia and industry. The networking group of Tencent Media Lab focuses on designing and implementing systematical, adaptive and reliable solutions for the network-level issues for Real-Time multimedia streaming.",
          explain:"Function Points",
          list:[
              {
                subTitle:"Congestion Control",
                subContanier:"We studied the State-of-the-Art congestion control algorithms from both academia and industry.  After measuring and evaluating the network traces collected from Tencent products, we design novel congestion control to make proper decision under various network conditions."
              },
              {
                subTitle:"Network Resilience",
                subContanier:"A user may suffer various network instabilities in the wild, such as packet loss, high delay or even intermittent connections. We have proposed the intelligent network resilience algorithms to accommodate network instability and guarantee smooth and high-quality multimedia streaming."
            },
            {
                subTitle:"QoS/QoE Optimiaztion",
                subContanier:"We perform the optimization based on the media context and network conditions to achieve the best trade-off among clarity, smoothness, and latency under constrained network environments."
            },
            {
                subTitle:"Flow control for Multi-User Communication",
                subContanier:"We adopt two strategies to optimize the quality under multi-party conferencing: AI for simple scenarios, and subjective-test based fine adjustment for complex scenarios."
            },
            {
                subTitle:"Network Measurement",
                subContanier:"We develop algorithms to learn network behaviors from the traces without personal information. This helps us emulate Bad-Cases offline and detect network condition online."
            },
          ]
    },


    // 9.音视频通信质量评估页面
    connectionQuality:{
        title:"Multimedia QA",
        text:"We strive to develop end-to-end Audio/Video Quality Assessment algorithms with an emphasis on deep learning based techniques. Our research covers various multimedia contents in real-world applications. We evaluate the performance of Standard/In-House codecs on different tasks. Particularly, we are endavoring to study Pre/Post-Processing techniques for the purpose of quality enchancement. The aim is to apply quality monitoring to our product pipeline and increase the user experience of our multimedia applications.",
        explain:"Function Points",
        list:[
            {
                subTitle:"No-Reference Audio Quality Assessment",
                subContanier:"Machine learning based techniques to assess the quality of real-time audio. On one hand, we evalute the degree of jerking, lagging, legibility when the network is not ideal. On the other hand, we measure the the effects of audio enhancement techniques."
            },
            {
                subTitle:"No-Reference Video Quality Assessment",
                subContanier:"Deep learning based techniques to assess the quality of videos. The system is designed for applications either capturing with low-end consumer cameras, or embedded with quality enhancement filters, or both. Our method has launched in several video applications."
            },
            {
                subTitle:"Full-Reference Video Quality Assessment",
                subContanier:"Deep learning based techniques to precisely measure the quality of compressed videos. The system is suitable for applications where the pristine reference is available and provides a trade-off between bit rates and viewing experience. Our method achieves STOA performance on datasets compressed standard codecs."
            },
        ],
        project:"Invention project",
        projectName:"TMEC",
        projectText:"Provide ability for efficient automatical AV(audio/video) quality assesment, conducting full automatical presssure assesment at audio and video quality in multi aspect.",
        more: "learn more"
    },


}