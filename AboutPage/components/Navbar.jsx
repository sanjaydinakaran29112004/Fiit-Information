'use client';

import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar({ activeSection = 'about', onNavigate, onOpenEnquire }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id) => {
    if (onNavigate) {
      onNavigate(id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/90 shadow-2xs w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[70px]">
          
          {/* Logo Brand Section */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none flex-shrink-0"
          >
            {/* Logo Emblem Icon */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#141d4a] flex items-center justify-center relative shadow-xs flex-shrink-0">
              <span className="text-white font-black text-base sm:text-lg tracking-tighter">F</span>
              <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-[10px] font-extrabold tracking-widest text-[#141d4a] uppercase leading-none whitespace-nowrap">
                FIIT FORMACION
              </span>
              <span className="text-[6.5px] sm:text-[7px] font-semibold text-slate-400 tracking-wider uppercase mt-0.5 leading-none whitespace-nowrap">
                EMPOWERING FUTURE IT PROFESSIONALS
              </span>
              <div className="flex items-baseline gap-1 mt-0.5 leading-none whitespace-nowrap">
                <span className="text-xs sm:text-[13px] font-bold text-[#141d4a]">FIIT Formacion</span>
                <span className="text-[9px] sm:text-[10px] font-medium text-slate-500">PVT. LTD.</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links - Exact Match with Stitch Prototype */}
          <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2 xl:space-x-3 text-[12.5px] xl:text-[13px]">
            
            {/* Home */}
            <button
              onClick={() => handleLinkClick('home')}
              className={`relative px-2 py-1.5 rounded-md transition-colors whitespace-nowrap flex-shrink-0 ${
                activeSection === 'home'
                  ? 'text-[#141d4a] font-bold'
                  : 'text-slate-700 hover:text-[#141d4a] font-medium'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#141d4a] rounded-full" />
              )}
            </button>

            {/* About Us (Two Lines as in Stitch preview) */}
            <button
              onClick={() => handleLinkClick('about')}
              className={`relative px-2 py-1 rounded-md transition-colors text-center leading-tight flex-shrink-0 ${
                activeSection === 'about'
                  ? 'text-[#141d4a] font-bold'
                  : 'text-slate-700 hover:text-[#141d4a] font-medium'
              }`}
            >
              <span className="block text-[12px] xl:text-[12.5px] leading-none">About</span>
              <span className="block text-[12px] xl:text-[12.5px] leading-tight mt-0.5">Us</span>
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#141d4a] rounded-full" />
              )}
            </button>

            {/* Programs - SINGLE link, NO divisions/dropdown as requested */}
            <button
              onClick={() => handleLinkClick('programs')}
              className={`relative px-2 py-1.5 rounded-md transition-colors whitespace-nowrap flex-shrink-0 ${
                activeSection === 'programs'
                  ? 'text-[#141d4a] font-bold'
                  : 'text-slate-700 hover:text-[#141d4a] font-medium'
              }`}
            >
              Programs
              {activeSection === 'programs' && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#141d4a] rounded-full" />
              )}
            </button>

            {/* Methodology */}
            <button
              onClick={() => handleLinkClick('methodology')}
              className={`relative px-2 py-1.5 rounded-md transition-colors whitespace-nowrap flex-shrink-0 ${
                activeSection === 'methodology'
                  ? 'text-[#141d4a] font-bold'
                  : 'text-slate-700 hover:text-[#141d4a] font-medium'
              }`}
            >
              Methodology
              {activeSection === 'methodology' && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#141d4a] rounded-full" />
              )}
            </button>

            {/* FIIT EDGE (Two lines) */}
            <button
              onClick={() => handleLinkClick('edge')}
              className={`relative px-2 py-1 rounded-md transition-colors text-center leading-tight flex-shrink-0 ${
                activeSection === 'edge'
                  ? 'text-[#141d4a] font-bold'
                  : 'text-slate-700 hover:text-[#141d4a] font-medium'
              }`}
            >
              <span className="block text-[12px] xl:text-[12.5px] leading-none">FIIT</span>
              <span className="block text-[12px] xl:text-[12.5px] leading-tight mt-0.5">EDGE</span>
              {activeSection === 'edge' && (
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#141d4a] rounded-full" />
              )}
            </button>

            {/* Placements */}
            <button
              onClick={() => handleLinkClick('placements')}
              className={`relative px-2 py-1.5 rounded-md transition-colors whitespace-nowrap flex-shrink-0 ${
                activeSection === 'placements'
                  ? 'text-[#141d4a] font-bold'
                  : 'text-slate-700 hover:text-[#141d4a] font-medium'
              }`}
            >
              Placements
              {activeSection === 'placements' && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#141d4a] rounded-full" />
              )}
            </button>

            {/* Branches */}
            <button
              onClick={() => handleLinkClick('branches')}
              className={`relative px-2 py-1.5 rounded-md transition-colors whitespace-nowrap flex-shrink-0 ${
                activeSection === 'branches'
                  ? 'text-[#141d4a] font-bold'
                  : 'text-slate-700 hover:text-[#141d4a] font-medium'
              }`}
            >
              Branches
              {activeSection === 'branches' && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#141d4a] rounded-full" />
              )}
            </button>

            {/* Contact Us (Two lines) */}
            <button
              onClick={() => handleLinkClick('contact')}
              className={`relative px-2 py-1 rounded-md transition-colors text-center leading-tight flex-shrink-0 ${
                activeSection === 'contact'
                  ? 'text-[#141d4a] font-bold'
                  : 'text-slate-700 hover:text-[#141d4a] font-medium'
              }`}
            >
              <span className="block text-[12px] xl:text-[12.5px] leading-none">Contact</span>
              <span className="block text-[12px] xl:text-[12.5px] leading-tight mt-0.5">Us</span>
              {activeSection === 'contact' && (
                <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#141d4a] rounded-full" />
              )}
            </button>

          </nav>

          {/* Right Action Items: Admissions Helpline, Enquire Button & Visible Profile Avatar */}
          <div className="flex items-center space-x-2.5 sm:space-x-3.5 flex-shrink-0">
            
            {/* Admissions Helpline (Two lines stacked) */}
            <div className="hidden lg:flex flex-col text-left leading-tight flex-shrink-0 pr-1">
              <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">
                Admissions Helpline
              </span>
              <a 
                href="tel:+919840012345" 
                className="text-xs sm:text-[12.5px] font-bold text-[#141d4a] hover:text-indigo-600 transition-colors whitespace-nowrap mt-0.5"
              >
                +91 98400 12345
              </a>
            </div>

            {/* Enquire Now Button */}
            <button
              onClick={() => onOpenEnquire && onOpenEnquire('General Enquiry')}
              className="bg-[#141d4a] hover:bg-[#1e2a6b] text-white text-[12px] sm:text-[13px] font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-colors shadow-2xs active:scale-95 whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              Enquire Now
            </button>

            {/* Profile Avatar Picture - Perfectly Placed & Sized beside Enquire Now */}
            <div 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-slate-300 shadow-2xs flex-shrink-0 cursor-pointer hover:ring-2 hover:ring-indigo-300 transition-all flex items-center justify-center bg-slate-100"
              title="Verified Student Portal"
            >
              <img 
                src="/images/avatar.jpg" 
                alt="Student Profile" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden flex-shrink-0 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-1.5">
          <button
            onClick={() => handleLinkClick('home')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              activeSection === 'home' ? 'bg-[#f1f4fb] text-[#141d4a]' : 'text-slate-700'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleLinkClick('about')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              activeSection === 'about' ? 'bg-[#f1f4fb] text-[#141d4a]' : 'text-slate-700'
            }`}
          >
            About Us
          </button>

          <button
            onClick={() => handleLinkClick('programs')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              activeSection === 'programs' ? 'bg-[#f1f4fb] text-[#141d4a]' : 'text-slate-700'
            }`}
          >
            Programs
          </button>

          <button
            onClick={() => handleLinkClick('methodology')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              activeSection === 'methodology' ? 'bg-[#f1f4fb] text-[#141d4a]' : 'text-slate-700'
            }`}
          >
            Methodology
          </button>

          <button
            onClick={() => handleLinkClick('edge')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              activeSection === 'edge' ? 'bg-[#f1f4fb] text-[#141d4a]' : 'text-slate-700'
            }`}
          >
            FIIT EDGE
          </button>

          <button
            onClick={() => handleLinkClick('placements')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              activeSection === 'placements' ? 'bg-[#f1f4fb] text-[#141d4a]' : 'text-slate-700'
            }`}
          >
            Placements
          </button>

          <button
            onClick={() => handleLinkClick('branches')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              activeSection === 'branches' ? 'bg-[#f1f4fb] text-[#141d4a]' : 'text-slate-700'
            }`}
          >
            Branches
          </button>

          <button
            onClick={() => handleLinkClick('contact')}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold ${
              activeSection === 'contact' ? 'bg-[#f1f4fb] text-[#141d4a]' : 'text-slate-700'
            }`}
          >
            Contact Us
          </button>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-500 font-medium">Admissions Helpline</div>
              <a href="tel:+919840012345" className="text-sm font-bold text-[#141d4a]">
                +91 98400 12345
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquire && onOpenEnquire('Mobile Menu');
              }}
              className="bg-[#141d4a] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-xs"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
