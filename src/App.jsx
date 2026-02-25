import React, { lazy, Suspense, useState } from 'react'; // 1. เพิ่ม useState ตรงนี้
import { Routes, Route, Link } from 'react-router-dom';

// 2. ตรวจสอบชื่อโฟลเดอร์ให้ตรงกับที่มีอยู่จริง (Pages หรือ pages)
const Home = lazy(() => import('./Pages/Home'));
const Projects = lazy(() => import('./Pages/Projects'));
const Contact = lazy(() => import('./Pages/Contact'));

function App() {
  const [isProjectOpen, setIsProjectOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-slate-50">
      {/* 2. ส่วนเมนูนำทาง (ใช้ Tailwind v4) */}
      <nav className="flex justify-center items-center space-x-6 p-5 bg-slate-900 text-white shadow-md relative z-50">
        <Link to="/" className="hover:text-blue-400 transition-colors">Portfolio</Link>       
        {/* --- Dropdown Container --- */}
        {/* <div 
          className="relative"
          onMouseEnter={() => setIsProjectOpen(true)}
          onMouseLeave={() => setIsProjectOpen(false)}
        >
          <button className="flex items-center gap-1 hover:text-blue-400 focus:outline-none cursor-pointer py-1">
            Projects
            <svg className={`w-4 h-4 transition-transform duration-200 ${isProjectOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isProjectOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-52 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-1 duration-200">
              <Link to="/projects" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 font-semibold">All Overview</Link>
              <hr className="my-1 border-slate-100" />
              <Link to="/projects" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm">Delta Electronics</Link>
              <Link to="/projects" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 text-sm border-t border-slate-50">MAC Control</Link>
            </div>
          )}
        </div> */}
        {/* --- End Dropdown --- */}
        {/* <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link> */}
      </nav>

      {/* Main Content */}
      <main className="w-full">
        <Suspense fallback={
          <div className="flex flex-col items-center justify-center mt-20 font-mono">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-4"></div>
            Loading Data Pipeline...
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* ปรับเป็นตัวเล็กเพื่อให้เข้าถึงง่าย */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;