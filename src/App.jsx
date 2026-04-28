import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, Globe, Terminal, ArrowDown, ArrowRight, Cpu, Eye, Box, 
  Unlock, History, GraduationCap, Mail, Phone, FolderOpen, ArrowUp 
} from 'lucide-react';

const CYBER_ORANGE = '#FF4A00';

const dict = {
  en: {
    nav_projects: "DB_PROJECTS",
    nav_experience: "SYS_LOGS",
    nav_contact: "UPLINK",
    hero_badge: "> STATUS: ONLINE _ AVAILABLE_FOR_HIRE",
    hero_hello: "INITIATE:",
    hero_name_first: "CHENGWEI",
    hero_name_last: "WANG",
    hero_title: "SENIOR UI/UX DESIGNER",
    hero_desc: "Master's in Multimedia Design. Architecting digital experiences with precision, aesthetic impact, and scalability. Bridging the gap between raw data and human interaction.",
    hero_cta1: "INITIALIZE_WORK",
    hero_cta2: "ESTABLISH_COMMS",
    skills_title: "MODULES // CORE_COMPETENCIES",
    skill_ur: "User Research",
    skill_ur_desc: "Testing, Data Flow",
    skill_vis: "Visual Matrix",
    skill_3d: "3D Rendering",
    proj_section_title: "ARCHIVE.DATA",
    proj1_desc: "Led 0-to-1 design for Hang Lung Properties' shopping mall app in Hong Kong, aiming to elevate user experience and drive consumption. Crafted interactive prototypes, brand visual identity, and high-fidelity interfaces.",
    proj2_desc: "A standardized mobile app template tailored for large shopping malls and their tenant merchants. It empowers mall operators to rapidly deploy a unified, highly efficient loyalty and marketing ecosystem for decentralized vendors.",
    proj3_desc: "Designed a dual-portal (Student/Employer) career website. Engineered core UX flows including resource centers and application guides, significantly boosting platform engagement and university partnerships.",
    exp_title: "SYS_LOGS // EXP",
    exp1_role: "Senior UI/UX Designer",
    exp1_company: "Guangzhou Green Tomato Software Tech",
    exp1_p1: "Directed user research, journey mapping, and usability testing to deliver data-driven design solutions.",
    exp1_p2: "Managed the end-to-end design thinking process from conceptualization to high-fidelity deployment.",
    exp2_role: "UI/UX Designer (Project)",
    exp2_company: "HSBC Global Customer Service",
    exp2_p1: "Standardized cross-platform design languages across ATM, App, and Web interfaces.",
    exp2_p2: "Collaborated across HK and Xi'an teams to align complex financial requirements with technical feasibility.",
    exp3_role: "Video Designer",
    exp3_company: "Guangzhou Xinyue Network Tech",
    edu_title: "TRAINING_DATA // EDU",
    edu1_degree: "Master of Multimedia Design",
    edu1_school: "Monash University // 2020 - 2021",
    edu1_desc: "Focused on the intersection of design, technology, and social responsibility. Mastered methodologies for uncovering deep user needs and driving innovation.",
    edu2_degree: "Bachelor of Industrial Design",
    edu2_school: "NWPU Mingde College // 2015 - 2019",
    edu2_desc: "Rigorous training in structural thinking, visual expression, and product engineering. Led student teams in innovation competitions.",
    contact_title: "ESTABLISH_UPLINK",
    contact_desc: "Currently open for new opportunities. Network port is open. Awaiting data transmission.",
    btn_view_archive: "DECRYPT_FULL_ARCHIVE",
    modal_title: "ARCHIVE // H-COINS APP",
    modal_close: "CLOSE_CONNECTION",
    modal_p1_title: "PHASE_01 // HOMEPAGE & CORE_EXP",
    modal_p1_desc: "The redesigned homepage serves as a dynamic hub for Hang Lung mall patrons, integrating personalized recommendations and quick access to loyalty features to stimulate engagement and offline consumption.",
    modal_p2_title: "PHASE_02 // USER_INTERFACE_MODULES",
    modal_p2_desc: "Detailed high-fidelity interfaces focusing on seamless interactions. Key user flows such as points redemption, event booking, and directory navigation were optimized to reduce friction and enhance the premium shopping experience.",
    modal_p3_title: "PHASE_03 // DESIGN_LANGUAGE_SYSTEM",
    modal_p3_desc: "A scalable and cohesive Design Language System established to ensure brand consistency. Standardized components reflect the mall's modern aesthetic.",
    modal_p4_title: "PHASE_04 // ICONOGRAPHY",
    modal_p4_desc: "Custom-crafted iconography set designed to be intuitive and visually aligned with the overall brand identity, enhancing navigation clarity and user recognition.",
    modal2_title: "ARCHIVE // STORELLET",
    modal2_p1_title: "PHASE_01 // RESEARCH & STRATEGY",
    modal2_p1_desc: "Conducted comprehensive market analysis and strategy mapping to understand the pain points of both mall operators and individual merchants, laying the foundation for a scalable standardized template.",
    modal2_p2_title: "PHASE_02 // UX_ARCHITECTURE",
    modal2_p2_desc: "Mapped out seamless user journeys and structural wireframes, successfully balancing complex B2B2C business logic with intuitive consumer-facing interactions for loyalty rewards and promotions.",
    modal2_p3_title: "PHASE_03 // UI_DESIGN_SYSTEM",
    modal2_p3_desc: "Designed a clean, highly adaptable visual interface equipped with a modular component library, allowing different mall brands to easily customize the aesthetic to fit their unique identity.",
    modal3_title: "ARCHIVE // CYCLOPES CAREER",
    modal3_p1_title: "PHASE_01 // HIGH_FIDELITY_UI",
    modal3_p1_desc: "A dedicated recruitment platform bridging international students with top-tier employers. The UI focuses on clean data presentation, intuitive job searching, and seamless application workflows to enhance the connection between global talent and enterprises."
  },
  zh: {
    nav_projects: "项目数据库",
    nav_experience: "系统履历",
    nav_contact: "网络上行",
    hero_badge: "> 系统状态：在线 _ 寻找新机遇",
    hero_hello: "初始化执行：",
    hero_name_first: "汪",
    hero_name_last: "成伟",
    hero_title: "高级 UI/UX 设计师",
    hero_desc: "莫纳什大学多媒体设计硕士。以精准的逻辑、强烈的视觉冲击力和高扩展性架构数字体验。致力于在原始数据与人类交互之间搭建桥梁。",
    hero_cta1: "加载项目作品",
    hero_cta2: "建立通讯连接",
    skills_title: "功能模块 // 核心能力",
    skill_ur: "用户研究",
    skill_ur_desc: "可用性测试, 数据流",
    skill_vis: "视觉矩阵",
    skill_3d: "三维渲染",
    proj_section_title: "数据档案",
    proj1_desc: "负责香港恒隆集团旗下商场 APP 从0到1的完整设计流程。旨在提升用户体验并促进商场消费，主导完成交互原型、品牌视觉体系及高保真界面，为数字化生态奠定基础。",
    proj2_desc: "一款专为大型商场及其入驻商户量身定制的移动端应用模板。作为标准化的数字解决方案，帮助商场在短时间内为旗下零散商户建立统一、高效的会员激励与营销阵地。",
    proj3_desc: "负责 Cyclopes 职业网站学生端与雇主端双门户的整体体验规划。主导核心模块交互设计，有效提升网站访问量、用户活跃度及高校合作转化率。",
    exp_title: "系统日志 // 工作经验",
    exp1_role: "高级 UI/UX 设计师",
    exp1_company: "广州绿蕃茄软件科技公司",
    exp1_p1: "主导用户体验研究，通过绘制用户旅程图、实施用户测试提供数据驱动的设计方案。",
    exp1_p2: "参与管理设计思维全过程，独立负责并持续优化产品线框图及高保真界面。",
    exp2_role: "UI/UX 设计师 (项目)",
    exp2_company: "汇丰环球客户服务(广东)有限公司",
    exp2_p1: "建立并维护涵盖柜员机、App及网页等多终端的一致性设计规范。",
    exp2_p2: "与香港、西安两地产品及开发团队紧密协作，确保复杂金融业务逻辑的高标准落地。",
    exp3_role: "视频设计师",
    exp3_company: "广州心跃网络科技有限公司",
    edu_title: "训练数据 // 教育背景",
    edu1_degree: "多媒体设计 硕士",
    edu1_school: "莫纳什大学 // 2020 - 2021",
    edu1_desc: "深入探索设计与技术、社会责任的交叉领域。掌握通过严谨调研洞察用户深层需求的方法，关注个体福祉与包容性设计。",
    edu2_degree: "工业设计 本科",
    edu2_school: "西北工业大学明德学院 // 2015 - 2019",
    edu2_desc: "接受系统扎实的工科训练，培养了出色的视觉表达与结构化思维。多次作为负责人主导创新设计竞赛项目。",
    contact_title: "建立上行连接",
    contact_desc: "目前正在寻找新的职业机会。网络端口已开放，期待您的数据传输与通讯建立。",
    btn_view_archive: "解密完整档案",
    modal_title: "核心档案 // 恒基地产 APP",
    modal_close: "断开连接",
    modal_p1_title: "PHASE_01 // 首页与核心体验",
    modal_p1_desc: "全新设计的首页作为香港恒隆商场顾客的动态枢纽，集成了个性化推荐与会员特权的快捷入口，旨在提升用户粘性并有效引导向线下商业消费转化。",
    modal_p2_title: "PHASE_02 // 界面交互模块",
    modal_p2_desc: "专注于无缝交互的高保真界面细节。深度优化了积分兑换、活动预约及商场导览等核心用户旅程，减少操作阻力，为用户营造流畅尊贵的购物体验。",
    modal_p3_title: "PHASE_03 // 品牌设计语言系统",
    modal_p3_desc: "为确保品牌一致性而建立的高扩展性设计语言系统（DLS）。原子级UI组件库完美契合商场的现代高端商业调性。",
    modal_p4_title: "PHASE_04 // 定制图标系统",
    modal_p4_desc: "高度定制的图标集，视觉上与整体品牌形象保持一致，有效提升了导航界面的清晰度与用户的直观认知。",
    modal2_title: "核心档案 // STORELLET",
    modal2_p1_title: "PHASE_01 // 用户研究与产品策略",
    modal2_p1_desc: "通过深度的市场分析与策略映射，精准洞察商场运营方与独立商户的双向痛点，为可扩展的标准化数字模板奠定战略基础。",
    modal2_p2_title: "PHASE_02 // 体验架构与线框图",
    modal2_p2_desc: "规划了无缝的用户体验旅程与结构线框图，在极其复杂的 B2B2C 商业逻辑与直观的消费者交互（如积分兑换、促销活动）之间取得完美平衡。",
    modal2_p3_title: "PHASE_03 // 界面设计与组件系统",
    modal2_p3_desc: "设计了清晰、高适配性的视觉界面，并搭建了模块化的组件库，使得不同的商场品牌能够轻松进行全局样式定制，以符合其独特的品牌调性。",
    modal3_title: "核心档案 // CYCLOPES 招聘",
    modal3_p1_title: "PHASE_01 // 高保真界面设计",
    modal3_p1_desc: "专为留学生与顶尖雇主打造的双向招聘平台。界面设计侧重于清晰的数据展示、直观的职位搜索以及无缝的投递工作流，有效连接全球人才与企业端。"
  }
};

export default function App() {
  const [lang, setLang] = useState('en');
  const [activeModal, setActiveModal] = useState(null); // null | 1 | 2 | 3
  const [scrolled, setScrolled] = useState(false);
  
  // Custom Cursor State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const t = (key) => dict[lang][key];

  // Initialize Global Effects (Cursor & Scroll)
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .cyber-panel, .group, .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Intersection Observer for Reveal Animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(r => observer.observe(r));

    return () => observer.disconnect();
  }, [activeModal]); // Re-run when modal opens to animate inner contents

  // Modal Body Lock
  useEffect(() => {
    document.body.style.overflow = activeModal ? 'hidden' : 'auto';
  }, [activeModal]);

  return (
    <div className={`bg-[#050505] text-[#E0E0E0] min-h-screen overflow-x-hidden ${isHovering ? 'hovering' : ''}`} style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* Dynamic Inline CSS for Custom Effects */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
        
        body { cursor: none; }
        
        .font-mono { font-family: 'Space Mono', monospace; }
        .font-sans { font-family: 'Outfit', sans-serif; }

        .cyber-grid {
          position: fixed; inset: 0; z-index: 0;
          background-image: 
            linear-gradient(rgba(255, 74, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 74, 0, 0.05) 1px, transparent 1px);
          background-size: 40px 40px; background-position: center center;
          pointer-events: none;
        }

        .scanlines {
          position: fixed; inset: 0; z-index: 50;
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
          background-size: 100% 4px; pointer-events: none; opacity: 0.1;
        }

        .cyber-cut {
          clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
        }
        
        .cyber-cut-reverse {
          clip-path: polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px);
        }

        .cyber-panel {
          background-color: rgba(10, 10, 10, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative; transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }
        .cyber-panel:hover {
          border-color: rgba(255, 74, 0, 0.4);
          box-shadow: 0 0 20px rgba(255, 74, 0, 0.1);
          transform: translateY(-4px);
        }

        .glitch-text { position: relative; display: inline-block; }
        .glitch-text::before, .glitch-text::after {
          content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.8;
        }
        .glitch-text::before {
          left: 2px; text-shadow: -2px 0 ${CYBER_ORANGE}; clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px; text-shadow: -2px 0 #00ffff; clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
          animation: glitch-anim2 2.5s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(1px, 1px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(-1px, -1px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(1px, -1px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(-1px, 1px); }
          80% { clip-path: inset(10% 0 70% 0); transform: translate(1px, 1px); }
          100% { clip-path: inset(30% 0 50% 0); transform: translate(-1px, -1px); }
        }
        @keyframes glitch-anim2 {
          0% { clip-path: inset(10% 0 60% 0); transform: translate(-1px, 1px); }
          20% { clip-path: inset(30% 0 20% 0); transform: translate(1px, -1px); }
          40% { clip-path: inset(70% 0 10% 0); transform: translate(-1px, 1px); }
          60% { clip-path: inset(20% 0 50% 0); transform: translate(1px, -1px); }
          80% { clip-path: inset(50% 0 30% 0); transform: translate(-1px, 1px); }
          100% { clip-path: inset(5% 0 80% 0); transform: translate(1px, -1px); }
        }

        #cursor-crosshair {
          position: fixed; width: 20px; height: 20px; border: 2px solid ${CYBER_ORANGE};
          transform: translate(-50%, -50%); pointer-events: none; z-index: 10000;
          transition: width 0.2s, height 0.2s, border-color 0.2s; mix-blend-mode: difference;
        }
        #cursor-crosshair::before, #cursor-crosshair::after { content: ''; position: absolute; background: ${CYBER_ORANGE}; }
        #cursor-crosshair::before { top: 50%; left: -5px; right: -5px; height: 2px; transform: translateY(-50%); }
        #cursor-crosshair::after { left: 50%; top: -5px; bottom: -5px; width: 2px; transform: translateX(-50%); }
        
        #cursor-box {
          position: fixed; width: 40px; height: 40px; border: 1px dashed rgba(255, 74, 0, 0.4);
          transform: translate(-50%, -50%); pointer-events: none; z-index: 9999; transition: all 0.15s ease-out;
        }

        .hovering #cursor-crosshair { width: 10px; height: 10px; border-color: white; }
        .hovering #cursor-crosshair::before, .hovering #cursor-crosshair::after { background: white; }
        .hovering #cursor-box {
          width: 60px; height: 60px; border: 1px solid ${CYBER_ORANGE};
          background: rgba(255, 74, 0, 0.1); animation: spin 4s linear infinite;
        }
        @keyframes spin { 100% { transform: translate(-50%, -50%) rotate(360deg); } }

        .btn-cyber-primary {
          background-color: ${CYBER_ORANGE}; color: #000; position: relative; text-transform: uppercase;
          font-weight: 700; letter-spacing: 1px; overflow: hidden; transition: all 0.3s ease;
        }
        .btn-cyber-primary:hover { box-shadow: 0 0 20px ${CYBER_ORANGE}; background-color: white; color: black; }
        
        .reveal { opacity: 0; transform: translateY(30px) scale(0.98); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.active { opacity: 1; transform: translateY(0) scale(1); }
      `}</style>

      {/* Global Effects Layer */}
      <div className="cyber-grid"></div>
      <div className="scanlines"></div>
      
      {/* Custom Cursor */}
      <div 
        id="cursor-crosshair" 
        className="hidden md:block" 
        style={{ left: mousePos.x, top: mousePos.y }}
      ></div>
      <div 
        id="cursor-box" 
        className="hidden md:block" 
        style={{ left: mousePos.x, top: mousePos.y }}
      ></div>

      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 backdrop-blur-md border-b transition-all duration-300 font-mono uppercase text-xs tracking-widest ${scrolled ? 'bg-black/95 border-[#FF4A00]' : 'bg-black/80 border-[#FF4A00]/20'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          <div className="flex items-center gap-2 text-[#FF4A00] font-bold text-lg">
            <Zap size={18} />
            <span>C.WANG //</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#projects" className="hover:text-[#FF4A00] transition-colors hidden md:block">{t('nav_projects')}</a>
            <a href="#experience" className="hover:text-[#FF4A00] transition-colors hidden md:block">{t('nav_experience')}</a>
            <a href="#contact" className="hover:text-[#FF4A00] transition-colors hidden md:block">{t('nav_contact')}</a>
            <button 
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="cyber-cut border border-[#FF4A00] text-[#FF4A00] px-3 py-1 hover:bg-[#FF4A00] hover:text-black transition-colors flex items-center gap-2"
            >
              <Globe size={14} /> [{lang.toUpperCase()}]
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-16 z-10">
        <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <div className="reveal flex flex-col items-center">
            <div className="inline-block font-mono text-xs text-[#FF4A00] border border-[#FF4A00]/30 bg-[#FF4A00]/5 px-3 py-1 mb-10">
              {t('hero_badge')}
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 uppercase tracking-tighter leading-none">
              <span className="text-gray-500 text-3xl md:text-5xl block mb-2">{t('hero_hello')}</span>
              <span className="glitch-text text-white" data-text={t('hero_name_first')}>{t('hero_name_first')}</span><br/>
              <span className="glitch-text text-[#FF4A00]" data-text={t('hero_name_last')}>{t('hero_name_last')}</span>
            </h1>
            
            <h2 className="font-mono text-xl md:text-2xl text-gray-400 mb-8 tracking-wider mt-6 flex items-center gap-2 justify-center">
              <Terminal size={20} className="text-[#FF4A00]"/> {t('hero_title')}
            </h2>
            
            <p className="font-sans text-gray-500 mb-12 max-w-2xl text-lg mx-auto">
              {t('hero_desc')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 font-mono text-sm">
              <a href="#projects" className="btn-cyber-primary cyber-cut px-8 py-4 flex items-center gap-2">
                {t('hero_cta1')} <ArrowDown size={16}/>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Capabilities / Stats */}
      <section className="py-24 relative z-10" id="skills">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-16 reveal">
            <div className="w-8 h-[1px] bg-[#FF4A00]/50"></div>
            <h3 className="font-mono text-xs tracking-widest text-[#FF4A00] uppercase">{t('skills_title')}</h3>
            <div className="w-8 h-[1px] bg-[#FF4A00]/50"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
            <div className="group flex flex-col items-center text-center">
              <div className="font-mono text-[10px] text-gray-600 mb-4 opacity-50 border-b border-gray-800 pb-1 w-full">NODE_01</div>
              <Figma className="w-8 h-8 mb-4 text-gray-500 group-hover:text-[#FF4A00] transition-colors duration-300" />
              <h4 className="font-bold uppercase tracking-wider text-sm mb-1 text-gray-300">UI/UX Architecture</h4>
              <p className="font-mono text-[10px] text-gray-500">Figma, Prototype</p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <div className="font-mono text-[10px] text-gray-600 mb-4 opacity-50 border-b border-gray-800 pb-1 w-full">NODE_02</div>
              <Cpu className="w-8 h-8 mb-4 text-gray-500 group-hover:text-[#FF4A00] transition-colors duration-300" />
              <h4 className="font-bold uppercase tracking-wider text-sm mb-1 text-gray-300">{t('skill_ur')}</h4>
              <p className="font-mono text-[10px] text-gray-500">{t('skill_ur_desc')}</p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <div className="font-mono text-[10px] text-gray-600 mb-4 opacity-50 border-b border-gray-800 pb-1 w-full">NODE_03</div>
              <Eye className="w-8 h-8 mb-4 text-gray-500 group-hover:text-[#FF4A00] transition-colors duration-300" />
              <h4 className="font-bold uppercase tracking-wider text-sm mb-1 text-gray-300">{t('skill_vis')}</h4>
              <p className="font-mono text-[10px] text-gray-500">PS, AI, AE</p>
            </div>
            <div className="group flex flex-col items-center text-center">
              <div className="font-mono text-[10px] text-gray-600 mb-4 opacity-50 border-b border-gray-800 pb-1 w-full">NODE_04</div>
              <Box className="w-8 h-8 mb-4 text-gray-500 group-hover:text-[#FF4A00] transition-colors duration-300" />
              <h4 className="font-bold uppercase tracking-wider text-sm mb-1 text-gray-300">{t('skill_3d')}</h4>
              <p className="font-mono text-[10px] text-gray-500">MAYA, Blender</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects / Database Section */}
      <section className="py-32 relative z-10" id="projects">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col mb-24 reveal">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">{t('proj_section_title')}</h2>
            <div className="flex items-center gap-4 mt-4">
              <div className="h-[1px] w-12 bg-[#FF4A00]"></div>
              <p className="font-mono text-gray-500 text-xs">{"> EXTRACTING_WORKS"}</p>
            </div>
          </div>

          <div className="space-y-32">
            {/* Project Alpha: Hang Lung */}
            <div className="flex flex-col gap-8 reveal group">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-900 pb-6 group-hover:border-[#FF4A00]/30 transition-colors">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="font-mono text-[10px] text-[#FF4A00] tracking-widest uppercase border border-[#FF4A00]/30 px-2 py-1">2025.01 - 2025.05</div>
                    <div className="font-mono text-[10px] text-gray-500 uppercase">FEATURED_DATASET</div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-gray-200 group-hover:text-white transition-colors">
                    H-Coins APP <span className="text-gray-600 text-2xl">(Hang Lung)</span>
                  </h3>
                  <p className="font-sans text-gray-500 leading-relaxed text-sm">
                    {t('proj1_desc')}
                  </p>
                </div>
                <div className="flex flex-wrap md:flex-col items-end gap-2 font-mono text-[10px]">
                  <span className="border border-gray-800 bg-[#050505] px-3 py-1.5 text-gray-400">UI/UX</span>
                  <span className="border border-gray-800 bg-[#050505] px-3 py-1.5 text-gray-400">App Design</span>
                  <span className="border border-[#FF4A00]/20 text-[#FF4A00] px-3 py-1.5">E-Commerce</span>
                </div>
              </div>
              
              <div className="w-full bg-[#030303] border border-gray-900 group-hover:border-[#FF4A00]/50 transition-all duration-500 flex flex-col relative overflow-hidden group/cover cursor-pointer" onClick={() => setActiveModal(1)}>
                <div className="border-b border-gray-900 p-2 px-4 flex justify-between items-center bg-black">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF4A00] animate-pulse"></div>
                    <span className="font-mono text-[10px] text-[#FF4A00] tracking-widest uppercase">CASE_STREAM // ENCRYPTED</span>
                  </div>
                  <div className="font-mono text-[10px] text-gray-600">FILES: 6</div>
                </div>
                <div className="relative h-64 md:h-[32rem] overflow-hidden bg-[#030303]">
                  <img src="https://i.postimg.cc/S2495SDr/Homepage.png" alt="Cover" className="w-full h-full object-cover object-top opacity-50 group-hover/cover:opacity-80 group-hover/cover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover/cover:bg-black/10 transition-colors duration-500">
                    <button className="btn-cyber-primary cyber-cut px-6 py-3 md:px-8 md:py-4 flex items-center gap-2 shadow-[0_0_20px_rgba(255,74,0,0.4)] pointer-events-none">
                      <Unlock size={16} /> <span>{t('btn_view_archive')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Beta: Storellet */}
            <div className="grid md:grid-cols-12 gap-12 items-center reveal group">
              <div className="md:col-span-5 flex flex-col justify-center md:order-1 order-2">
                <div className="font-mono text-[10px] text-[#FF4A00] mb-4 tracking-widest uppercase">B2B2C SOLUTION</div>
                <h3 className="text-3xl font-bold uppercase mb-4 text-gray-200 group-hover:text-white transition-colors">Storellet</h3>
                <p className="font-sans text-gray-500 mb-8 leading-relaxed text-sm">
                  {t('proj2_desc')}
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[10px]">
                  <span className="border border-gray-800 bg-[#050505] px-3 py-1.5 text-gray-400">App Template</span>
                  <span className="border border-gray-800 bg-[#050505] px-3 py-1.5 text-gray-400">Loyalty</span>
                  <span className="border border-[#FF4A00]/20 text-[#FF4A00] px-3 py-1.5">B2B2C</span>
                </div>
              </div>
              
              <div className="md:col-span-7 w-full bg-[#030303] border border-gray-900 group-hover:border-[#FF4A00]/50 transition-all duration-500 flex flex-col relative overflow-hidden group/cover cursor-pointer md:order-2 order-1" onClick={() => setActiveModal(2)}>
                <div className="border-b border-gray-900 p-2 px-4 flex justify-between items-center bg-black">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF4A00] animate-pulse"></div>
                    <span className="font-mono text-[10px] text-[#FF4A00] tracking-widest uppercase">CASE_STREAM // ENCRYPTED</span>
                  </div>
                  <div className="font-mono text-[10px] text-gray-600">FILES: 3</div>
                </div>
                <div className="relative h-64 md:h-[32rem] overflow-hidden bg-[#030303]">
                  <img src="https://i.postimg.cc/FYykSfym/Research.png" alt="Cover" className="w-full h-full object-cover object-top opacity-50 group-hover/cover:opacity-80 group-hover/cover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover/cover:bg-black/10 transition-colors duration-500">
                    <button className="btn-cyber-primary cyber-cut px-6 py-3 md:px-8 md:py-4 flex items-center gap-2 shadow-[0_0_20px_rgba(255,74,0,0.4)] pointer-events-none">
                      <Unlock size={16} /> <span>{t('btn_view_archive')}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Gamma: Cyclopes Career */}
            <div className="grid md:grid-cols-12 gap-12 items-center reveal group">
              <div className="md:col-span-7 w-full bg-[#030303] border border-gray-900 group-hover:border-[#FF4A00]/50 transition-all duration-500 flex flex-col relative overflow-hidden group/cover cursor-pointer" onClick={() => setActiveModal(3)}>
                <div className="border-b border-gray-900 p-2 px-4 flex justify-between items-center bg-black">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FF4A00] animate-pulse"></div>
                    <span className="font-mono text-[10px] text-[#FF4A00] tracking-widest uppercase">CASE_STREAM // ENCRYPTED</span>
                  </div>
                  <div className="font-mono text-[10px] text-gray-600">FILES: 6</div>
                </div>
                <div className="relative h-64 md:h-[32rem] overflow-hidden bg-[#030303]">
                  <img src="https://i.postimg.cc/2q59yLMR/Cover.png" alt="Cover" className="w-full h-full object-cover object-top opacity-50 group-hover/cover:opacity-80 group-hover/cover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover/cover:bg-black/10 transition-colors duration-500">
                    <button className="btn-cyber-primary cyber-cut px-6 py-3 md:px-8 md:py-4 flex items-center gap-2 shadow-[0_0_20px_rgba(255,74,0,0.4)] pointer-events-none">
                      <Unlock size={16} /> <span>{t('btn_view_archive')}</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="font-mono text-[10px] text-[#FF4A00] mb-4 tracking-widest uppercase">2022.03 - 2023.10</div>
                <h3 className="text-3xl font-bold uppercase mb-4 text-gray-200 group-hover:text-white transition-colors">Cyclopes Career</h3>
                <p className="font-sans text-gray-500 mb-8 leading-relaxed text-sm">
                  {t('proj3_desc')}
                </p>
                <div className="flex flex-wrap gap-2 font-mono text-[10px]">
                  <span className="border border-gray-800 bg-[#050505] px-3 py-1.5 text-gray-400">Web Design</span>
                  <span className="border border-gray-800 bg-[#050505] px-3 py-1.5 text-gray-400">Architecture</span>
                  <span className="border border-[#FF4A00]/20 text-[#FF4A00] px-3 py-1.5">B2C/B2B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logs / Experience & Education */}
      <section className="py-32 relative z-10" id="experience">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          
          {/* Experience Logs */}
          <div>
            <div className="mb-16 reveal">
              <h2 className="text-2xl font-bold uppercase flex items-center gap-3 text-white tracking-wider">
                <span className="text-[#FF4A00] text-sm">/</span> <span>{t('exp_title')}</span>
              </h2>
            </div>

            <div className="relative border-l border-gray-800 ml-2 pl-8 space-y-12">
              <div className="relative reveal">
                <div className="absolute -left-[33px] top-1.5 w-2 h-2 bg-[#FF4A00]"></div>
                <div className="font-mono text-[10px] text-gray-500 tracking-widest mb-2 uppercase">2022.07 - 2025.05</div>
                <h3 className="text-lg font-bold uppercase text-gray-200 tracking-wide mb-1">{t('exp1_role')}</h3>
                <p className="font-mono text-[10px] text-[#FF4A00] mb-4 uppercase">{t('exp1_company')}</p>
                <ul className="text-sm text-gray-500 space-y-2 list-none font-sans">
                  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:top-0 before:text-gray-700">{t('exp1_p1')}</li>
                  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:top-0 before:text-gray-700">{t('exp1_p2')}</li>
                </ul>
              </div>

              <div className="relative reveal">
                <div className="absolute -left-[33px] top-1.5 w-2 h-2 bg-gray-800 border border-gray-600"></div>
                <div className="font-mono text-[10px] text-gray-600 tracking-widest mb-2 uppercase">2023.09 - 2024.12</div>
                <h3 className="text-lg font-bold uppercase text-gray-400 tracking-wide mb-1">{t('exp2_role')}</h3>
                <p className="font-mono text-[10px] text-gray-500 mb-4 uppercase">{t('exp2_company')}</p>
                <ul className="text-sm text-gray-600 space-y-2 list-none font-sans">
                  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:top-0 before:text-gray-700">{t('exp2_p1')}</li>
                  <li className="relative pl-4 before:content-['-'] before:absolute before:left-0 before:top-0 before:text-gray-700">{t('exp2_p2')}</li>
                </ul>
              </div>

              <div className="relative reveal">
                <div className="absolute -left-[33px] top-1.5 w-2 h-2 bg-gray-800 border border-gray-600"></div>
                <div className="font-mono text-[10px] text-gray-600 tracking-widest mb-2 uppercase">2022.02 - 2022.06</div>
                <h3 className="text-lg font-bold uppercase text-gray-500 tracking-wide mb-1">{t('exp3_role')}</h3>
                <p className="font-mono text-[10px] text-gray-600 uppercase">{t('exp3_company')}</p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="mb-16 reveal">
              <h2 className="text-2xl font-bold uppercase flex items-center gap-3 text-white tracking-wider">
                <span className="text-gray-600 text-sm">/</span> <span>{t('edu_title')}</span>
              </h2>
            </div>

            <div className="space-y-12 relative border-l border-gray-800 ml-2 pl-8">
              <div className="relative reveal">
                <div className="absolute -left-[33px] top-1.5 w-2 h-2 bg-[#FF4A00]"></div>
                <div className="font-mono text-[10px] text-gray-500 tracking-widest mb-2 uppercase">{t('edu1_school')}</div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold uppercase text-gray-200 tracking-wide">{t('edu1_degree')}</h3>
                  <span className="font-mono text-[8px] text-[#FF4A00] border border-[#FF4A00]/30 px-1">QS:37</span>
                </div>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  {t('edu1_desc')}
                </p>
              </div>

              <div className="relative reveal">
                <div className="absolute -left-[33px] top-1.5 w-2 h-2 bg-gray-800 border border-gray-600"></div>
                <div className="font-mono text-[10px] text-gray-600 tracking-widest mb-2 uppercase">{t('edu2_school')}</div>
                <h3 className="text-lg font-bold uppercase text-gray-400 tracking-wide mb-2">{t('edu2_degree')}</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  {t('edu2_desc')}
                </p>
              </div>
            </div>
            
            <div className="mt-16 reveal">
              <h3 className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-6">{"> VERIFIED_CERTIFICATES"}</h3>
              <div className="flex flex-wrap gap-4 font-mono text-[10px] text-gray-500 uppercase">
                <span>[ Google UX Certificate ]</span>
                <span>[ IELTS 6.0 ]</span>
                <span>[ CET-6 ]</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="py-24 relative z-10" id="contact">
        <div className="max-w-4xl mx-auto px-6 text-center reveal">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">{t('contact_title')}</h2>
          <p className="font-sans text-gray-400 mb-12 max-w-lg mx-auto">
            {t('contact_desc')}
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <a href="mailto:915854336@qq.com" className="cyber-panel cyber-cut px-8 py-5 flex items-center justify-center gap-4 group">
              <div className="w-10 h-10 bg-black border border-[#FF4A00] flex items-center justify-center group-hover:bg-[#FF4A00] group-hover:text-black transition-colors">
                <Mail size={18} />
              </div>
              <div className="text-left">
                <div className="font-mono text-[10px] text-gray-500 uppercase">Primary Protocol</div>
                <span className="font-mono font-bold text-white tracking-wider">915854336@qq.com</span>
              </div>
            </a>
            
            <div className="cyber-panel cyber-cut-reverse px-8 py-5 flex items-center justify-center gap-4 group">
              <div className="w-10 h-10 bg-black border border-gray-600 flex items-center justify-center group-hover:border-[#FF4A00] group-hover:text-[#FF4A00] transition-colors">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <div className="font-mono text-[10px] text-gray-500 uppercase">Voice Channel</div>
                <span className="font-mono font-bold text-gray-300 tracking-wider">+86 187 0920 8494</span>
              </div>
            </div>
          </div>

          <div className="font-mono text-[10px] text-gray-600 flex flex-col items-center gap-2">
            <div className="w-full max-w-xs h-[1px] bg-gray-800 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-2">END_OF_FILE</div>
            </div>
            <p className="mt-4">
              SYS.YEAR [ {new Date().getFullYear()} ] // DESIGN_ARCHITECT: CHENGWEI WANG // AESTHETIC: CYBER_BRUTALISM
            </p>
          </div>
        </div>
      </footer>

      {/* ========================================================== */}
      {/* ======================= MODALS =========================== */}
      {/* ========================================================== */}

      {/* Modal 1: H-COINS APP */}
      {activeModal === 1 && (
        <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col overflow-y-auto">
          <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#FF4A00] p-4 flex justify-between items-center">
            <div className="font-mono text-[#FF4A00] text-sm md:text-base font-bold flex items-center gap-2">
              <FolderOpen size={18} /> {">"} <span>{t('modal_title')}</span>
            </div>
            <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-black hover:bg-[#FF4A00] font-mono text-xs flex items-center gap-2 border border-gray-800 hover:border-[#FF4A00] px-4 py-2 transition-colors cyber-cut cursor-pointer">
              [X] <span>{t('modal_close')}</span>
            </button>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 py-16 w-full space-y-24">
            {/* PHASE 01 */}
            <div className="flex flex-col gap-6 reveal">
              <div className="font-mono text-lg md:text-xl text-[#FF4A00] border-l-4 border-[#FF4A00] pl-4 uppercase tracking-widest bg-[#FF4A00]/5 py-2">
                {t('modal_p1_title')}
              </div>
              <p className="font-sans text-gray-400 max-w-4xl text-sm md:text-base leading-relaxed border-b border-gray-800 pb-6">
                {t('modal_p1_desc')}
              </p>
              <div className="flex justify-center pt-4">
                <img src="https://i.postimg.cc/S2495SDr/Homepage.png" alt="Homepage" className="w-full max-w-2xl h-auto border border-gray-800 hover:border-[#FF4A00] transition-colors duration-300" />
              </div>
            </div>

            {/* PHASE 02 */}
            <div className="flex flex-col gap-6 reveal">
              <div className="font-mono text-lg md:text-xl text-gray-300 border-l-4 border-gray-600 pl-4 uppercase tracking-widest bg-gray-900/50 py-2">
                {t('modal_p2_title')}
              </div>
              <p className="font-sans text-gray-400 max-w-4xl text-sm md:text-base leading-relaxed border-b border-gray-800 pb-6">
                {t('modal_p2_desc')}
              </p>
              <div className="flex flex-col gap-6 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img src="https://i.postimg.cc/R6TtxkDc/UI-01.png" alt="UI 01" className="w-full h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
                  <img src="https://i.postimg.cc/2bxWNsKn/UI-02.png" alt="UI 02" className="w-full h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
                </div>
                <img src="https://i.postimg.cc/wykNYCG4/UI-03.png" alt="UI 03" className="w-full h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
              </div>
            </div>

            {/* PHASE 03 */}
            <div className="flex flex-col gap-6 reveal">
              <div className="font-mono text-lg md:text-xl text-gray-300 border-l-4 border-gray-600 pl-4 uppercase tracking-widest bg-gray-900/50 py-2">
                {t('modal_p3_title')}
              </div>
              <p className="font-sans text-gray-400 max-w-4xl text-sm md:text-base leading-relaxed border-b border-gray-800 pb-6">
                {t('modal_p3_desc')}
              </p>
              <div className="flex justify-center pt-4">
                <img src="https://i.postimg.cc/tZb6fq2s/DLS.png" alt="DLS" className="w-full max-w-4xl h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
              </div>
            </div>

            {/* PHASE 04 */}
            <div className="flex flex-col gap-6 reveal">
              <div className="font-mono text-lg md:text-xl text-gray-300 border-l-4 border-gray-600 pl-4 uppercase tracking-widest bg-gray-900/50 py-2">
                {t('modal_p4_title')}
              </div>
              <p className="font-sans text-gray-400 max-w-4xl text-sm md:text-base leading-relaxed border-b border-gray-800 pb-6">
                {t('modal_p4_desc')}
              </p>
              <div className="flex justify-center pt-4">
                <img src="https://i.postimg.cc/S2495SDd/Icon.png" alt="Iconography" className="w-full max-w-lg h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
              </div>
            </div>
            
            <div className="text-center pb-20">
              <button onClick={() => setActiveModal(null)} className="btn-cyber-primary cyber-cut px-8 py-4 font-mono text-sm inline-flex items-center gap-2 cursor-pointer">
                <ArrowUp size={16} /> <span>{t('modal_close')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 2: STORELLET */}
      {activeModal === 2 && (
        <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col overflow-y-auto">
          <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#FF4A00] p-4 flex justify-between items-center">
            <div className="font-mono text-[#FF4A00] text-sm md:text-base font-bold flex items-center gap-2">
              <FolderOpen size={18} /> {">"} <span>{t('modal2_title')}</span>
            </div>
            <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-black hover:bg-[#FF4A00] font-mono text-xs flex items-center gap-2 border border-gray-800 hover:border-[#FF4A00] px-4 py-2 transition-colors cyber-cut cursor-pointer">
              [X] <span>{t('modal_close')}</span>
            </button>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 py-16 w-full space-y-24">
            <div className="flex flex-col gap-6 reveal">
              <div className="font-mono text-lg md:text-xl text-[#FF4A00] border-l-4 border-[#FF4A00] pl-4 uppercase tracking-widest bg-[#FF4A00]/5 py-2">
                {t('modal2_p1_title')}
              </div>
              <p className="font-sans text-gray-400 max-w-4xl text-sm md:text-base leading-relaxed border-b border-gray-800 pb-6">
                {t('modal2_p1_desc')}
              </p>
              <div className="flex justify-center pt-4">
                <img src="https://i.postimg.cc/FYykSfym/Research.png" alt="Research" className="w-full max-w-5xl h-auto border border-gray-800 hover:border-[#FF4A00] transition-colors duration-300" />
              </div>
            </div>

            <div className="flex flex-col gap-6 reveal">
              <div className="font-mono text-lg md:text-xl text-gray-300 border-l-4 border-gray-600 pl-4 uppercase tracking-widest bg-gray-900/50 py-2">
                {t('modal2_p2_title')}
              </div>
              <p className="font-sans text-gray-400 max-w-4xl text-sm md:text-base leading-relaxed border-b border-gray-800 pb-6">
                {t('modal2_p2_desc')}
              </p>
              <div className="flex justify-center pt-4">
                <img src="https://i.postimg.cc/3yjj3Sf8/UX.png" alt="UX Wireframes" className="w-full max-w-5xl h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
              </div>
            </div>

            <div className="flex flex-col gap-6 reveal">
              <div className="font-mono text-lg md:text-xl text-gray-300 border-l-4 border-gray-600 pl-4 uppercase tracking-widest bg-gray-900/50 py-2">
                {t('modal2_p3_title')}
              </div>
              <p className="font-sans text-gray-400 max-w-4xl text-sm md:text-base leading-relaxed border-b border-gray-800 pb-6">
                {t('modal2_p3_desc')}
              </p>
              <div className="flex justify-center pt-4">
                <img src="https://i.postimg.cc/PpxC02Bx/UI.png" alt="UI Interfaces" className="w-full max-w-5xl h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
              </div>
            </div>

            <div className="text-center pb-20">
              <button onClick={() => setActiveModal(null)} className="btn-cyber-primary cyber-cut px-8 py-4 font-mono text-sm inline-flex items-center gap-2 cursor-pointer">
                <ArrowUp size={16} /> <span>{t('modal_close')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal 3: CYCLOPES CAREER */}
      {activeModal === 3 && (
        <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col overflow-y-auto">
          <div className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#FF4A00] p-4 flex justify-between items-center">
            <div className="font-mono text-[#FF4A00] text-sm md:text-base font-bold flex items-center gap-2">
              <FolderOpen size={18} /> {">"} <span>{t('modal3_title')}</span>
            </div>
            <button onClick={() => setActiveModal(null)} className="text-gray-400 hover:text-black hover:bg-[#FF4A00] font-mono text-xs flex items-center gap-2 border border-gray-800 hover:border-[#FF4A00] px-4 py-2 transition-colors cyber-cut cursor-pointer">
              [X] <span>{t('modal_close')}</span>
            </button>
          </div>
          
          <div className="max-w-6xl mx-auto px-4 py-16 w-full space-y-24">
            <div className="flex flex-col gap-6 reveal">
              <div className="font-mono text-lg md:text-xl text-[#FF4A00] border-l-4 border-[#FF4A00] pl-4 uppercase tracking-widest bg-[#FF4A00]/5 py-2">
                {t('modal3_p1_title')}
              </div>
              <p className="font-sans text-gray-400 max-w-4xl text-sm md:text-base leading-relaxed border-b border-gray-800 pb-6">
                {t('modal3_p1_desc')}
              </p>
              <div className="flex flex-col gap-6 pt-4">
                <img src="https://i.postimg.cc/kBdj8pLr/UI-00.png" alt="UI 00" className="w-full h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img src="https://i.postimg.cc/w7dWJGZZ/UI-01.png" alt="UI 01" className="w-full h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
                  <img src="https://i.postimg.cc/4mbW11RF/UI-02.png" alt="UI 02" className="w-full h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
                  <img src="https://i.postimg.cc/mtNmSSWn/UI-03.png" alt="UI 03" className="w-full h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
                  <img src="https://i.postimg.cc/tYtBzzHV/UI-04.png" alt="UI 04" className="w-full h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
                </div>
                <img src="https://i.postimg.cc/bGMgvC1B/UI-05.png" alt="UI 05" className="w-full h-auto border border-gray-800 hover:border-gray-500 transition-colors duration-300" />
              </div>
            </div>

            <div className="text-center pb-20">
              <button onClick={() => setActiveModal(null)} className="btn-cyber-primary cyber-cut px-8 py-4 font-mono text-sm inline-flex items-center gap-2 cursor-pointer">
                <ArrowUp size={16} /> <span>{t('modal_close')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}