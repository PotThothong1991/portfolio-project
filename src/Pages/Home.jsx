import React from 'react';
import { Link } from 'react-router-dom';
// ตรวจสอบชื่อไฟล์ Pot.jpg ให้ตรงกับในโฟลเดอร์จริง
import profileImg from './Images/Home/Pot.jpg'; 

const Home = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
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
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src={profileImg} 
                  alt="Pot Thothong" 
                  className="relative w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover border-2 border-slate-700 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Name and Actions */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                POT <span className="text-blue-500">THOTHONG</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-400 mt-3 font-medium tracking-wide">
                Senior Full-stack Developer <span className="text-slate-600 mx-2">|</span> <span className="text-blue-400/80">IT/OT Specialist</span>
              </p>
              
              <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start font-bold">
                {/* <Link to="/projects" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/20 hover:-translate-y-1 active:scale-95">
                  View Projects
                </Link> */}
                {/* <Link to="/contact" className="bg-slate-800 hover:bg-slate-700 text-white px-10 py-3.5 rounded-xl transition-all border border-slate-700 hover:-translate-y-1 active:scale-95">
                  Contact
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Resume Content */}
      <section className="max-w-5xl mx-auto py-20 px-6 grid md:grid-cols-3 gap-16">
        
        {/* Sidebar: Skills & Contact Info */}
        <div className="md:col-span-1 space-y-12">
          <div className="group">
            <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-6">Contact Details</h3>
            <div className="space-y-4 text-slate-600 text-sm">
              <p className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-default">
                <span className="text-base text-slate-400">📍</span> Samut Prakan, Thailand
              </p>
              <p className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-default">
                <span className="text-base text-slate-400">📞</span> 091-776-1205
              </p>
              <p className="flex items-center gap-3 hover:text-blue-600 transition-colors cursor-default">
                <span className="text-base text-slate-400">📧</span> pot.thothong@gmail.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-6">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'React.js', 'Node.js', 'MSSQL', 'Node-RED', 
                'SCADA', 'VB.NET', 'Python', 'Tailwind CSS', 'Magic UI'
              ].map(skill => (
                <span key={skill} className="bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-slate-100 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100">
            <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-4">About Me</h3>
            <p className="text-slate-600 text-sm leading-relaxed antialiased">
              Senior Full-stack Developer specializing in building high-performance web applications with a unique advantage in <span className="text-slate-900 font-semibold">Industrial Digitalization (IT/OT)</span>.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="md:col-span-2 space-y-16">
          <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-8 font-mono">Professional Experience</h3>
          
          {/* Delta Electronics Section */}
          <div className="relative pl-8 border-l-2 border-slate-100">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1.5 shadow-[0_0_15px_rgba(37,99,235,0.4)] ring-4 ring-white"></div>
            <h4 className="text-2xl font-bold text-slate-900 leading-tight">Delta Electronics (Thailand)</h4>
            <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mt-1 mb-6">Senior Full-stack Developer & Data Engineer <span className="text-slate-300 mx-2">|</span> Mar 2023 - Present</p>
            
            <ul className="space-y-4 text-slate-600 text-[13px] leading-relaxed">
              <li className="group"><strong className="text-slate-900 group-hover:text-blue-600 transition-colors">Full-Stack Architecture:</strong> Architected and deployed scalable web applications using React.js for intuitive frontends and Node.js (Express) for robust backend services.</li>
              <li className="group"><strong className="text-slate-900 group-hover:text-blue-600 transition-colors">Data Pipeline & Automation:</strong> Leveraged Node-RED and Python to automate mission-critical reports, email notifications, and real-time data ingestion.</li>
              <li className="group"><strong className="text-slate-900 group-hover:text-blue-600 transition-colors">Backend & DB Optimization:</strong> Developed custom data collection tools in VB.NET and optimized MSSQL Stored Procedures to handle large production datasets.</li>
            </ul>
          </div>

          {/* MAC Control Section */}
          <div className="relative pl-8 border-l-2 border-slate-100">
            <div className="absolute w-4 h-4 bg-slate-200 rounded-full -left-[9px] top-1.5 ring-4 ring-white"></div>
            <h4 className="text-2xl font-bold text-slate-900 leading-tight">MAC Control Engineering</h4>
            <p className="text-slate-500 font-bold text-xs uppercase tracking-wider mt-1 mb-6">Engineering Programmer <span className="text-slate-300 mx-2">|</span> Mar 2019 - Feb 2023</p>
            
            <ul className="space-y-4 text-slate-600 text-[13px] leading-relaxed">
              <li className="group"><strong className="text-slate-900 group-hover:text-blue-600 transition-colors">SCADA & HMI Design:</strong> Designed advanced HMI screens using GE iFIX and implemented Logic Control Function Blocks to streamline operations.</li>
              <li className="group"><strong className="text-slate-900 group-hover:text-blue-600 transition-colors">Web-Based Reporting:</strong> Developed full-stack web analysis reports (ASP.net, JS, HTML5) that transformed raw industrial data into actionable insights.</li>
              <li className="group"><strong className="text-slate-900 group-hover:text-blue-600 transition-colors">IT/OT Bridge Solutions:</strong> Migrated traditional industrial monitoring into accessible web-based dashboards, increasing data accessibility for management.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <footer className="bg-slate-50 py-16 px-6 text-center border-t border-slate-100">
        <p className="text-lg italic text-slate-400 max-w-2xl mx-auto font-serif">
          "Focused on delivering clean, maintainable architecture and optimizing database performance to solve mission-critical operational challenges."
        </p>
      </footer>
    </div>
  );
};

export default Home;