import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  PhoneCall, 
  Sparkles, 
  Menu, 
  X, 
  UserCheck, 
  Briefcase, 
  Calendar, 
  Calculator, 
  HelpCircle,
  MapPin
} from 'lucide-react';

export default function Navbar({ onOpenAdmission, onOpenStudentPortal, onOpenCareerAdvisor, onOpenEmiCalc }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Urgent Alert Bar */}
      <div className="bg-gradient-to-r from-brand-900 via-indigo-900 to-purple-950 text-xs py-2 px-4 border-b border-purple-800/40 text-purple-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-brand-500 text-white font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase shadow-sm animate-pulse">
              Admissions Open 2026
            </span>
            <span className="truncate">
              Avail up to ₹5,000 Early Bird Scholarship & Free Laptop Kit for Full Stack batches!
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="tel:+917200037575" className="hover:text-white flex items-center gap-1 font-medium transition-colors">
              <PhoneCall className="w-3.5 h-3.5 text-brand-400" />
              <span>+91 72000 37575</span>
            </a>
            <span className="hidden sm:inline text-purple-400/50">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>Avadi, Chennai</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
          : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-900 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-600 via-brand-500 to-indigo-600 flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-brand-300 transition-colors font-display">
                  FIIT <span className="text-brand-400">FORMATION</span>
                </span>
                <span className="text-[10px] bg-brand-950 text-brand-300 border border-brand-700/60 font-semibold px-1.5 py-0.5 rounded">
                  Avadi
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                Futura Innovative Information Technology
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 font-medium text-sm text-slate-300">
            <a href="#courses" className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors">
              Programs
            </a>
            <a href="#placements" className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>FIIT Jobs Cell</span>
            </a>
            <a href="#batches" className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>Batches</span>
            </a>
            <button 
              onClick={onOpenCareerAdvisor}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5 text-brand-300 font-semibold"
            >
              <Sparkles className="w-4 h-4 text-brand-400 animate-pulse" />
              <span>Career Advisor</span>
            </button>
            <button 
              onClick={onOpenEmiCalc}
              className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>EMI Calc</span>
            </button>
            <a href="#contact" className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800/60 transition-colors">
              Campus & Contact
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenStudentPortal}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg flex items-center gap-1.5 transition-all shadow-sm"
            >
              <UserCheck className="w-4 h-4 text-cyan-400" />
              <span>Student Portal</span>
            </button>
            
            <button
              onClick={() => onOpenAdmission(null)}
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 rounded-lg shadow-glow hover:shadow-brand-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enroll Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenAdmission(null)}
              className="px-3 py-1.5 text-xs font-bold text-white bg-brand-600 rounded-md shadow"
            >
              Apply
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2">
            <a 
              href="#courses" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              Courses & Programs
            </a>
            <a 
              href="#placements" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              FIIT Jobs Placement Cell
            </a>
            <a 
              href="#batches" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              Upcoming Batches & Timings
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCareerAdvisor(); }}
              className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-brand-300 hover:bg-slate-900 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-brand-400" />
              <span>AI Career Advisor Quiz</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenEmiCalc(); }}
              className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-amber-300 hover:bg-slate-900 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>EMI Calculator</span>
            </button>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900"
            >
              Avadi Campus & Contact
            </a>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenStudentPortal(); }}
                className="w-full py-2.5 px-4 text-sm font-semibold text-center text-slate-200 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-cyan-400" />
                <span>Student / LMS Portal</span>
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAdmission(null); }}
                className="w-full py-2.5 px-4 text-sm font-bold text-center text-white bg-brand-600 rounded-lg shadow-glow"
              >
                Apply for Admission Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
