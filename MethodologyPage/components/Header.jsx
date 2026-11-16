'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

export default function Header({ activePage = 'home', onOpenEnquire }) {
  const [mobileOpen, setMobileOpen] = useState(false);
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

  const navLinks = [
    { label: "Home", href: "/", id: "home" },
    { label: "About Us", href: "/about", id: "about" },
    { label: "Programs", href: "/programs/professional", id: "programs", isDropdown: true },
    { label: "Methodology", href: "/methodology", id: "methodology" },
    { label: "FIIT EDGE", href: "/fiit-edge", id: "fiit-edge" },
    { label: "Placements", href: "/placements", id: "placements" },
    { label: "Branches", href: "/branches", id: "branches" },
    { label: "Contact Us", href: "/contact", id: "contact" },
  ];

  const isProgramsActive = activePage === 'programs' || activePage === 'internships' || activePage === 'professional';

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all w-full">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 cursor-pointer select-none">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#1a1f4b] flex items-center justify-center text-white font-black text-xl shadow-xs group-hover:scale-105 transition-transform shrink-0">
              F
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-sm tracking-tight text-[#1a1f4b] group-hover:text-[#0284c7] transition-colors whitespace-nowrap leading-tight">
                FIIT FORMACION
              </span>
              <span className="hidden xs:block text-[8px] font-bold tracking-wider text-[#ea580c] uppercase whitespace-nowrap leading-tight mt-0.5">
                EMPOWERING FUTURE IT PROFESSIONALS
              </span>
            </div>
          </div>
          <div className="hidden xl:block h-7 w-[1px] bg-slate-200 mx-1 shrink-0" />
          <div className="hidden xl:flex flex-col justify-center shrink-0">
            <span className="text-xs font-bold text-[#1a1f4b] tracking-tight leading-tight">
              FIIT Formacion
            </span>
            <span className="text-[9.5px] text-slate-400 font-semibold uppercase tracking-wider leading-tight">
              PVT. LTD.
            </span>
          </div>
        </Link>

        {/* Center Nav Links - Perfectly Aligned */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2.5 text-[13px] font-semibold text-slate-700">
          {navLinks.map((link) => {
            const isActive = link.id === 'programs' ? isProgramsActive : activePage === link.id;

            if (link.isDropdown) {
              return (
                <div
                  key={link.id}
                  ref={dropdownRef}
                  className="relative flex items-center group/dropdown"
                  onMouseEnter={() => setProgramsDropdownOpen(true)}
                  onMouseLeave={() => setProgramsDropdownOpen(false)}
                >
                  <button
                    onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                    className={`nav-link-animated cursor-pointer flex items-center gap-1 leading-none ${
                      isActive || programsDropdownOpen ? 'active' : ''
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${programsDropdownOpen ? 'rotate-180 text-[#0284c7]' : 'text-slate-400 group-hover/dropdown:text-[#0284c7]'}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {programsDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 z-50 animate-fadeIn">
                      <div className="w-64 bg-white rounded-2xl shadow-[0_16px_36px_-6px_rgba(26,31,75,0.18)] border border-slate-100 py-2 px-1.5">
                        <Link
                          href="/programs/internships"
                          onClick={() => setProgramsDropdownOpen(false)}
                          className={`group/item flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold rounded-xl transition-all cursor-pointer ${
                            activePage === 'internships'
                              ? 'bg-amber-50 text-[#ea580c]'
                              : 'text-slate-700 hover:text-[#0284c7] hover:bg-slate-50'
                          }`}
                        >
                          <span className="title-hover-underline">Internship Programs</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#0284c7] group-hover/item:translate-x-1 transition-all" />
                        </Link>
                        <Link
                          href="/programs/professional"
                          onClick={() => setProgramsDropdownOpen(false)}
                          className={`group/item flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-[13px] font-semibold rounded-xl transition-all cursor-pointer ${
                            activePage === 'professional'
                              ? 'bg-indigo-50 text-[#1a1f4b]'
                              : 'text-slate-700 hover:text-[#0284c7] hover:bg-slate-50'
                          }`}
                        >
                          <span className="title-hover-underline">Professional Courses</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#0284c7] group-hover/item:translate-x-1 transition-all" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link 
                key={link.id}
                href={link.href}
                className={`nav-link-animated cursor-pointer leading-none ${
                  isActive ? 'active' : ''
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side: Helpline + Enquire Now + Avatar */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
          <div className="text-right flex flex-col justify-center">
            <span className="text-[10px] text-slate-400 block font-medium leading-none">
              Admissions Helpline
            </span>
            <a 
              href="tel:+919840012345" 
              className="text-xs font-bold text-[#1a1f4b] hover:text-[#0284c7] transition-colors block mt-1 tracking-wide leading-none"
            >
              +91 98400 12345
            </a>
          </div>

          <button
            onClick={() => onOpenEnquire && onOpenEnquire("General Admission")}
            className="btn-interactive px-4 xl:px-5 py-2.5 rounded-xl bg-[#1a1f4b] hover:bg-[#131738] text-white text-xs font-bold tracking-wide shadow-xs hover:shadow-md cursor-pointer transition-all active:scale-95"
          >
            Enquire Now
          </button>

          {/* User Avatar */}
          <div className="w-9 h-9 rounded-full ring-2 ring-slate-100 hover:ring-[#38bdf8]/60 transition-all overflow-hidden cursor-pointer shrink-0 shadow-2xs">
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
            onClick={() => onOpenEnquire && onOpenEnquire("General Admission")}
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

      {/* Responsive Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 sm:px-6 py-5 space-y-3.5 text-sm font-medium text-slate-700 shadow-xl max-h-[80vh] overflow-y-auto animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100 text-xs">
            {navLinks.map((link) => {
              const isActive = link.id === 'programs' ? isProgramsActive : activePage === link.id;
              return (
                <Link 
                  key={link.id}
                  href={link.href} 
                  onClick={() => setMobileOpen(false)} 
                  className={`py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#1a1f4b] text-white font-bold'
                      : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Quick Sub-links for Programs on Mobile */}
          <div className="flex flex-wrap items-center gap-2 text-xs py-1">
            <span className="text-[11px] font-bold text-slate-400">Programs:</span>
            <Link
              href="/programs/internships"
              onClick={() => setMobileOpen(false)}
              className="px-2.5 py-1 rounded-lg bg-amber-50 text-[#ea580c] font-bold hover:bg-amber-100 transition-colors cursor-pointer"
            >
              Internship Programs
            </Link>
            <Link
              href="/programs/professional"
              onClick={() => setMobileOpen(false)}
              className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-900 font-bold hover:bg-indigo-100 transition-colors cursor-pointer"
            >
              Professional Courses
            </Link>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#ea580c]" />
              <span>Admissions Helpline: <a href="tel:+919840012345" className="font-bold text-[#1a1f4b] underline">+91 98400 12345</a></span>
            </div>

            <button
              onClick={() => { setMobileOpen(false); onOpenEnquire && onOpenEnquire("Mobile Menu"); }}
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
