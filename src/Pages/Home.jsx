import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import profileImg from './Images/Home/Pot.jpg';
import { useReactToPrint } from 'react-to-print';
import { BorderBeam } from "@/components/magicui/border-beam";
import { AuroraText } from "@/components/magicui/aurora-text";
import { HyperText } from "@/components/magicui/hyper-text";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TextAnimate } from "@/components/ui/text-animate"


//Icon
import { FaReact, FaNodeJs, FaPython, FaCode, FaFileDownload } from "react-icons/fa";
import { SiNodered, SiTailwindcss, SiDotnet } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi";
import { TbSql, TbNetwork } from "react-icons/tb";
// --- Configuration: 2 L ---
const content = {
  en: {
    name: "POT",
    surname: "THOTHONG",
    browserTitle: "Pot Thothong | Senior Full-stack Developer | Digital Resume",
    role: "Senior Full-stack Developer",
    specialist: "IT/OT Specialist",
    contactTitle: "Contact Details",
    location: "Samut Prakan, Thailand",
    expertiseTitle: "Expertise",
    aboutTitle: "About Me",
    aboutDesc: "Senior Full-stack Developer specializing in building high-performance web applications with a unique advantage in Industrial Digitalization (IT/OT).",
    experienceTitle: "Professional Experience",
    delta: {
      company: "Delta Electronics (Thailand)",
      role: "Senior Full-stack Developer & Data Engineer",
      period: "Mar 2023 - Present",
      tasks: [
        { label: "Full-Stack Architecture:", text: "Architected and deployed scalable web applications using React.js for intuitive frontends and Node.js (Express) for robust backend services." },
        { label: "Data Pipeline & Automation:", text: "Leveraged Node-RED and Python to automate mission-critical reports, email notifications, and real-time data ingestion." },
        { label: "Backend & DB Optimization:", text: "Developed custom data collection tools in VB.NET and optimized MSSQL Stored Procedures to handle large production datasets." }
      ]
    },
    mac: {
      company: "MAC Control Engineering",
      role: "Engineering Programmer",
      period: "Mar 2019 - Feb 2023",
      tasks: [
        { label: "SCADA & HMI Design:", text: "Designed advanced HMI screens using GE iFIX and implemented Logic Control Function Blocks to streamline operations." },
        { label: "Web-Based Reporting:", text: "Developed full-stack web analysis reports (ASP.net, JS, HTML5) that transformed raw industrial data into actionable insights." },
        { label: "IT/OT Bridge Solutions:", text: "Migrated traditional industrial monitoring into accessible web-based dashboards, increasing data accessibility for management." }
      ]
    },
    versat: {
      company: "Versat Solutions Co., Ltd.",
      role: "Network Engineer",
      period: "Jan 2019 - Aug 2019",
      tasks: [
        { label: "Infrastructure Design:", text: "Designed comprehensive network diagrams and system architectures tailored to client requirements." },
        { label: "Network Configuration:", text: "Configured and optimized routing and switching systems to ensure high-speed and secure data transmission." },
        { label: "System Integration:", text: "Executed end-to-end installation, upgrades, and organization of server and network infrastructures." }
      ]
    },
    educationTitle: "Education",
    education: {
      degree: "Bachelor of Engineering (Electronics and Telecommunication Engineering)",
      major: "Electronics and Telecommunication Engineering",
      university: "Rajamangala University of Technology Krungthep",
      period: "2010 - 2014"
    },
    footerQuote: "Focused on delivering clean, maintainable architecture and optimizing database performance to solve mission-critical operational challenges."
  },
  th: {
    name: "พจน์",
    surname: "โท้ทอง",
    browserTitle: "พจน์ โพธิ์ทอง | Senior Full-stack Developer | Digital Resume",
    role: "Senior Full-stack Developer",
    specialist: "IT/OT Specialist",
    contactTitle: "ข้อมูลการติดต่อ",
    location: "สมุทรปราการ, ประเทศไทย",
    expertiseTitle: "ความเชี่ยวชาญ",
    aboutTitle: "เกี่ยวกับฉัน",
    aboutDesc: "Senior Full-stack Developer ที่มีความเชี่ยวชาญในการสร้างเว็บแอปพลิเคชันประสิทธิภาพสูง พร้อมจุดแข็งด้านการปรับเปลี่ยนอุตสาหกรรมสู่ระบบดิจิทัล (IT/OT)",
    experienceTitle: "ประสบการณ์การทำงาน",
    delta: {
      company: "Delta Electronics (Thailand)",
      role: "Senior Full-stack Developer & Data Engineer",
      period: "มี.ค. 2023 - ปัจจุบัน",
      tasks: [
        { label: "Full-Stack Architecture:", text: "ออกแบบและวางระบบเว็บแอปพลิเคชันที่ขยายตัวได้ โดยใช้ React.js สำหรับหน้าบ้าน และ Node.js (Express) สำหรับบริการหลังบ้าน" },
        { label: "Data Pipeline & Automation:", text: "ใช้ Node-RED และ Python เพื่อทำรายงานอัตโนมัติ การแจ้งเตือนผ่านอีเมล และระบบนำเข้าข้อมูลแบบ Real-time" },
        { label: "Backend & DB Optimization:", text: "พัฒนาเครื่องมือเก็บข้อมูลด้วย VB.NET และปรับปรุง MSSQL Stored Procedures เพื่อรองรับข้อมูลการผลิตขนาดใหญ่" }
      ]
    },
    mac: {
      company: "MAC Control Engineering",
      role: "Engineering Programmer",
      period: "มี.ค. 2019 - ก.พ. 2023",
      tasks: [
        { label: "SCADA & HMI Design:", text: "ออกแบบหน้าจอ HMI ระดับสูงด้วย GE iFIX และเขียน Logic Control Function Blocks เพื่อเพิ่มประสิทธิภาพการทำงาน" },
        { label: "Web-Based Reporting:", text: "พัฒนาเว็บรายงานวิเคราะห์ข้อมูล (ASP.net, JS, HTML5) ที่เปลี่ยนข้อมูลดิบในอุตสาหกรรมให้เป็นข้อมูลเชิงลึก" },
        { label: "IT/OT Bridge Solutions:", text: "เปลี่ยนระบบมอนิเตอร์อุตสาหกรรมแบบเดิมให้เป็น Dashboard บนเว็บที่เข้าถึงได้ง่าย เพิ่มการเข้าถึงข้อมูลให้ผู้บริหาร" }
      ]
    },
    versat: {
      company: "Versat Solutions Co., Ltd.",
      role: "Network Engineer",
      period: "ม.ค. 2019 - ส.ค. 2019",
      tasks: [
        { label: "Infrastructure Design:", text: "ออกแบบ Network Diagram และวางแผนระบบเครือข่ายให้สอดคล้องกับความต้องการของลูกค้า" },
        { label: "Network Configuration:", text: "กำหนดค่าและปรับแต่งระบบ Routing/Switching เพื่อเพิ่มประสิทธิภาพและความปลอดภัยในการรับส่งข้อมูล" },
        { label: "System Integration:", text: "ดำเนินการติดตั้ง อัปเกรด และจัดระเบียบระบบ Server รวมถึงโครงสร้างพื้นฐานด้านเครือข่ายแบบครบวงจร" }
      ]
    },
    educationTitle: "การศึกษา",
    education: {
      degree: "วิศวกรรมศาสตรบัณฑิต (วิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม)",
      major: "วิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม",
      university: "มหาวิทยาลัยเทคโนโลยีราชมงคลกรุงเทพ",
      period: "2553 - 2557"
    },
    footerQuote: "มุ่งเน้นการสร้างสถาปัตยกรรมซอฟต์แวร์ที่สะอาด จัดการง่าย และเพิ่มประสิทธิภาพฐานข้อมูลเพื่อแก้ปัญหาสำคัญในระบบปฏิบัติการ"
  },
  iconMap: {
    'React.js': <FaReact className="text-[#61DAFB]" />,
    'Node.js': <FaNodeJs className="text-[#339933]" />,
    'MSSQL': <TbSql className="text-[#CC2927]" />,
    'Node-RED': <SiNodered className="text-[#8F0000]" />,
    'SCADA': <TbSettingsAutomation className="text-orange-500" />,
    'VB.NET': <SiDotnet className="text-[#512BD4]" />,
    'Python': <FaPython className="text-[#3776AB]" />,
    'Tailwind CSS': <SiTailwindcss className="text-[#06B6D4]" />,
    'Magic UI': <HiSparkles className="text-purple-500" />,
    'Network': <TbNetwork className="text-emerald-500" />,
  },
  skillList: [
    'React.js', 'Node.js', 'MSSQL', 'Node-RED',
    'SCADA', 'VB.NET', 'Python', 'Tailwind CSS', 'Magic UI', 'Network'
  ]
};

const Home = () => {
  const [lang, setLang] = useState('en'); // 'en' หรือ 'th'
  const t = content[lang];
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: t.browserTitle,
  });;
  useEffect(() => {
    document.title = t.browserTitle;
  }, [lang, t.browserTitle]);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">

      <div className="fixed top-6 right-6 z-50 flex bg-slate-800/80 backdrop-blur-md p-1 rounded-xl border border-slate-700 shadow-2xl">
        <button
          onClick={() => setLang('en')}
          className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${lang === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
        >
          EN
        </button>
        <button
          onClick={() => setLang('th')}
          className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${lang === 'th' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
        >
          TH
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-xl transition-all active:scale-95"
        >
          <FaFileDownload className="text-lg" />
          <span>PDF</span>
        </button>
      </div>
      <div ref={componentRef} className="bg-white print:w-[210mm] print:min-h-[297mm] print:mx-auto print:p-10">
        {/* Header Section */}
        <section className="relative py-20 px-6 bg-slate-900 text-white overflow-hidden">
          {/* Background Mesh Decoration */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600 rounded-full blur-[100px] -ml-20 -mb-20"></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              {/* Profile Image */}
              <div className="flex-shrink-0 group">
                <div className="relative rounded-2xl">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    src={profileImg}
                    alt="Pot Thothong"
                    className="relative w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover border-2 border-slate-700 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <BorderBeam duration={6} size={400} className="from-transparent via-red-500 to-transparent print:hidden" />
                  <BorderBeam duration={6} delay={3} size={400} className="from-transparent via-blue-500 to-transparent print:hidden" />
                </div>
              </div>

              {/* Name and Actions */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                  {t.name}  <AuroraText speed={1} colors={["#0011ff", "#38bdf8"]} >  {t.surname}</AuroraText>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 mt-3 font-medium tracking-wide">
                  {t.role} <span className="text-slate-600 mx-2">|</span> <span className="text-blue-400/80">{t.specialist}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Resume Content */}
        <section className="max-w-5xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-16">

          {/* Sidebar: Skills & Contact Info */}
          <div className="md:col-span-1 space-y-5">
            <div className="group">
              <HyperText className="text-lg text-blue-600 uppercase mb-1" animateOnHover={true}>{t.contactTitle}</HyperText>
              <div className="space-y-1 text-slate-600 text-sm">
                <p className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-default">
                  <span className="text-base text-slate-400">📍</span> {t.location}
                </p>
                <p className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-default">
                  <span className="text-base text-slate-400">📞</span> 091-776-1205
                </p>
                <p className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-default">
                  <span className="text-base text-slate-400">📧</span> pot.thothong@gmail.com
                </p>
              </div>
            </div>

            <div className='border-t pt-5'>
              <HyperText className="text-lg text-blue-600 uppercase mb-1" animateOnHover={true}>{t.expertiseTitle}</HyperText>
              <div className="flex flex-wrap gap-2">
                {content.skillList.map(skill => (
                  <span
                    key={skill}
                    className="group flex items-center gap-2 bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-default"
                  >
                    {/* ดึง Icon มาแสดง ถ้าไม่มีให้โชว์ Icon กลางๆ เช่น FaCode */}
                    <span className="text-sm transition-transform group-hover:scale-125 duration-300">
                      {content.iconMap[skill] || <FaCode />}
                    </span>

                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <HyperText className="text-lg text-blue-600 uppercase mb-1" animateOnHover={true}>{t.aboutTitle}</HyperText>
              <p className="text-slate-600 text-sm leading-relaxed antialiased">
                {t.aboutDesc}
              </p>
            </div>
            {/* Education Section */}
            <div className="border-t border-slate-100 pt-5">
              <HyperText className="text-lg text-blue-600 uppercase mb-2" animateOnHover={true}>
                {t.educationTitle}
              </HyperText>
              <div className="space-y-1 text-slate-600 text-[13px] leading-snug">
                <p className="font-bold text-slate-900">{t.education.degree}</p>
                <p className="text-blue-600/80 font-medium">{t.education.university}</p>
                <p className="text-xs text-slate-400 mt-1">{t.education.period}</p>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="md:col-span-2 space-y-10">
            <HyperText className="text-lg text-blue-600 uppercase mb-1" animateOnHover={true}>{t.experienceTitle}</HyperText>

            {/* Delta Electronics Section */}
            <div className="relative pl-8 border-l-2 border-slate-100">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1.5 shadow-[0_0_15px_rgba(37,99,235,0.4)] ring-4 ring-white"></div>
              <h4 className="text-2xl font-bold text-slate-900 leading-tight">{t.delta.company}</h4>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mt-1 mb-6">{t.delta.role} <span className="text-slate-300 mx-2">|</span> {t.delta.period}</p>
              <ul className="space-y-4 text-slate-600 text-[13px] leading-relaxed">
                {t.delta.tasks.map((task, idx) => (
                  <li key={idx} className="group">
                    <strong className="text-slate-900 group-hover:text-blue-600 transition-colors">{task.label}</strong> {task.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* MAC Control Section */}
            <div className="relative pl-8 border-l-2 border-slate-100">
              <div className="absolute w-4 h-4 bg-slate-200 rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
              <h4 className="text-2xl font-bold text-slate-900 leading-tight">{t.mac.company}</h4>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mt-1 mb-6">{t.mac.role} <span className="text-slate-300 mx-2">|</span> {t.mac.period}</p>
              <ul className="space-y-4 text-slate-600 text-[13px] leading-relaxed">
                {t.mac.tasks.map((task, idx) => (
                  <li key={idx} className="group">
                    <strong className="text-slate-900 group-hover:text-blue-600 transition-colors">{task.label}</strong> {task.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Versat Solutions Section */}
            <div className="relative pl-8 border-l-2 border-slate-100">
              <div className="absolute w-4 h-4 bg-slate-100 rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
              <h4 className="text-2xl font-bold text-slate-900 leading-tight">{t.versat.company}</h4>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mt-1 mb-6">
                {t.versat.role} <span className="text-slate-300 mx-2">|</span> {t.versat.period}
              </p>
              <ul className="space-y-4 text-slate-600 text-[13px] leading-relaxed">
                {t.versat.tasks.map((task, idx) => (
                  <li key={idx} className="group">
                    <strong className="text-slate-900 group-hover:text-blue-600 transition-colors">{task.label}</strong> {task.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Quote */}
        <footer className="bg-slate-50 py-16 px-6 text-center border-t border-slate-100">
          <p className="text-lg italic text-slate-400 max-w-2xl mx-auto font-serif">
            "{t.footerQuote}"
          </p>
        </footer>
      </div>
    </div>

  );
};

export default Home;