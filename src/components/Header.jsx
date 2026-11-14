import React, { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ArrowRight, MapPin, ChevronDown } from 'lucide-react';

export default function Header({ onOpenEnquire }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProgramsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Track scroll position to dynamically highlight nav links
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'institutional', 'programs', 'methodology', 'fiit-edge', 'prp', 'branches', 'counseling'];
      const scrollPos = window.scrollY + 120;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About Us", href: "#institutional", id: "institutional" },
    { label: "Programs", href: "#programs", id: "programs" },
    { label: "Methodology", href: "#methodology", id: "methodology" },
    { label: "FIIT EDGE", href: "#fiit-edge", id: "fiit-edge" },
    { label: "Placements", href: "#prp", id: "prp" },
    { label: "Branches", href: "#branches", id: "branches" },
    { label: "Contact Us", href: "#counseling", id: "counseling" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04)] transition-all">
      <div className="max-w-[1340px] mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand Logo - Fully responsive on all screens */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink min-w-0">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#1a1f4b] flex items-center justify-center text-white font-extrabold text-base sm:text-xl shadow-sm tracking-tight group-hover:scale-105 transition-transform shrink-0">
              F
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1 leading-none">
                <span className="font-extrabold text-xs sm:text-sm tracking-tight text-[#1a1f4b] group-hover:text-indigo-900 transition-colors whitespace-nowrap truncate">
                  FIIT FORMACION
                </span>
              </div>
              <span className="hidden xs:block text-[7px] sm:text-[8.5px] font-bold tracking-wider text-[#ea580c] mt-0.5 uppercase whitespace-nowrap truncate max-w-[150px] sm:max-w-none">
                EMPOWERING FUTURE IT PROFESSIONALS
              </span>
            </div>
          </div>
          <div className="hidden md:block h-6 sm:h-7 w-[1px] bg-slate-200 mx-0.5 sm:mx-1 shrink-0" />
          <div className="hidden md:block shrink-0">
            <span className="text-[11px] sm:text-xs font-bold text-[#1a1f4b] tracking-tight block leading-tight">
              FIIT Formacion
            </span>
            <span className="text-[9px] sm:text-[9.5px] text-slate-400 font-semibold uppercase tracking-wider block">
              PVT. LTD.
            </span>
          </div>
        </a>

        {/* Center Nav Links with Animated Moving Underline Effect (Laptops & Desktops) */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-[12px] xl:text-[13px] font-medium text-slate-700">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            if (link.id === 'programs') {
              return (
                <div
                  key={link.id}
                  ref={dropdownRef}
                  className="relative py-2 group/dropdown"
                  onMouseEnter={() => setProgramsDropdownOpen(true)}
                  onMouseLeave={() => setProgramsDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setProgramsDropdownOpen(!programsDropdownOpen);
                    }}
                    className={`nav-link-animated transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-0 font-medium ${
                      isActive || programsDropdownOpen
                        ? 'text-[#1a1f4b] font-bold active' 
                        : 'hover:text-[#1a1f4b]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3 h-3 text-slate-400 group-hover/dropdown:text-[#ea580c] transition-transform duration-200 ${
                      programsDropdownOpen ? 'rotate-180 text-[#ea580c]' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu with Seamless Invisible Hover Bridge */}
                  {programsDropdownOpen && (
                    <div className="absolute top-full left-0 pt-1.5 z-50 animate-fadeIn">
                      <div className="w-56 bg-white rounded-2xl shadow-[0_16px_36px_-6px_rgba(26,31,75,0.18)] border border-slate-100 py-2 px-1.5">
                        <a
                          href="#internships"
                          onClick={() => setProgramsDropdownOpen(false)}
                          className="group/item flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold text-slate-700 hover:text-[#1a1f4b] hover:bg-slate-50/90 rounded-xl transition-all cursor-pointer"
                        >
                          <span className="title-hover-underline">Internship Programs</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#ea580c] group-hover/item:translate-x-1 transition-all" />
                        </a>
                        <a
                          href="#programs"
                          onClick={() => setProgramsDropdownOpen(false)}
                          className="group/item flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold text-slate-700 hover:text-[#1a1f4b] hover:bg-slate-50/90 rounded-xl transition-all cursor-pointer"
                        >
                          <span className="title-hover-underline">Professional Courses</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#ea580c] group-hover/item:translate-x-1 transition-all" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a 
                key={link.id}
                href={link.href} 
                className={`nav-link-animated py-1 transition-colors ${
                  isActive 
                    ? 'text-[#1a1f4b] font-bold active' 
                    : 'hover:text-[#1a1f4b]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right side: Helpline + Enquire Now + Avatar */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 shrink-0">
          <div className="text-right">
            <span className="text-[10px] text-slate-400 block font-medium leading-none">
              Admissions Helpline
            </span>
            <a 
              href="tel:+919840012345" 
              className="text-xs font-bold text-[#1a1f4b] hover:text-[#ea580c] transition-colors block mt-0.5 tracking-wide"
            >
              +91 98400 12345
            </a>
          </div>

          <button
            onClick={() => onOpenEnquire("General Admission")}
            className="btn-interactive px-3.5 xl:px-5 py-2.5 rounded-lg bg-[#1a1f4b] hover:bg-[#131738] text-white text-xs font-bold tracking-wide shadow-sm"
          >
            Enquire Now
          </button>

          {/* User Avatar with gentle glow */}
          <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-full ring-2 ring-slate-100 hover:ring-[#1a1f4b]/30 transition-all overflow-hidden cursor-pointer shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" 
              alt="Admissions Officer" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Tablet & Mobile Action Toggles */}
        <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href="tel:+919840012345"
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 text-[#1a1f4b] text-xs font-bold hover:bg-slate-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>Call</span>
          </a>

          <button
            onClick={() => onOpenEnquire("General Admission")}
            className="px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-[#1a1f4b] text-white text-[11px] sm:text-xs font-bold shadow-sm active:scale-95 transition-transform"
          >
            Enquire
          </button>

          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 sm:p-2 text-slate-700 hover:text-[#1a1f4b] rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

      </div>

      {/* Responsive Mobile / Tablet Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 sm:px-6 py-5 space-y-3.5 text-sm font-medium text-slate-700 shadow-xl max-h-[80vh] overflow-y-auto animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100 text-xs">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                onClick={() => setMobileOpen(false)} 
                className={`py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#1a1f4b] text-white font-bold'
                    : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Quick Sub-links for Programs on Mobile */}
          <div className="flex flex-wrap items-center gap-2 text-xs py-1">
            <span className="text-[11px] font-bold text-slate-400">Programs:</span>
            <a
              href="#internships"
              onClick={() => setMobileOpen(false)}
              className="px-2.5 py-1 rounded-lg bg-amber-50 text-[#ea580c] font-bold hover:bg-amber-100 transition-colors"
            >
              Internship Programs
            </a>
            <a
              href="#programs"
              onClick={() => setMobileOpen(false)}
              className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 font-bold hover:bg-indigo-100 transition-colors"
            >
              Professional Courses
            </a>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#ea580c]" />
              <span>Admissions Helpline: <a href="tel:+919840012345" className="font-bold text-[#1a1f4b] underline">+91 98400 12345</a></span>
            </div>

            <button
              onClick={() => { setMobileOpen(false); onOpenEnquire("Mobile Menu"); }}
              className="w-full sm:w-auto py-2.5 px-5 bg-[#ea580c] text-white font-bold rounded-lg text-center"
            >
              Book Counseling Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
