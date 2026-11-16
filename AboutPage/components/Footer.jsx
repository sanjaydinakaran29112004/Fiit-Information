'use client';

import React from 'react';
import { 
  Share2, 
  Youtube, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function Footer({ onNavigate, onOpenEnquire }) {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'edge', label: 'FIIT EDGE' },
    { id: 'placements', label: 'Placements' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const programs = [
    'Full Stack Development',
    'Java Full Stack',
    'Python Programming',
    'MERN/MEAN Stack',
    'Data Analytics',
    'Data Science',
    'AI & ML',
    'Cybersecurity'
  ];

  const internships = [
    '7 Days Internship',
    '15 Days Internship',
    '30 Days Internship',
    'College Industrial Training'
  ];

  const branchesList = 'Iyyappanthangal, Kelambakkam, Chengalpattu, Tambaram, Avadi, Redhills, Thiruvannamalai, Vellore, Ambattur';

  return (
    <footer className="bg-[#090e29] text-white pt-14 pb-8 border-t border-indigo-950/40 w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800 text-[13px]">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-3.5">
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">FIIT Formacion</h3>
              <p className="text-[9.5px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                EMPOWERING FUTURE IT PROFESSIONALS
              </p>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Premier IT training institute bridging academic curriculum with corporate technological standards through industry-immersion labs.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-1 text-slate-300">
              <a 
                href="#share" 
                className="w-7 h-7 rounded-md bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center transition-colors"
                title="Share"
              >
                <Share2 className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-7 h-7 rounded-md bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-7 h-7 rounded-md bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-7 h-7 rounded-md bg-slate-800/80 hover:bg-slate-700 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Accreditation Badges */}
            <div className="pt-2 flex flex-col gap-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>ISO 9001:2015 Certified Quality</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>Govt. Registered IT Training Hub</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => onNavigate && onNavigate(link.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Professional Programs */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
              Courses
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {programs.map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => onOpenEnquire && onOpenEnquire(item)}
                    className="hover:text-white transition-colors text-left truncate max-w-full"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Student Internships & Branches */}
          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                Internships
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {internships.map((item, idx) => (
                  <li key={idx}>
                    <button 
                      onClick={() => onOpenEnquire && onOpenEnquire(item)}
                      className="hover:text-white transition-colors text-left truncate max-w-full"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Branches List (Exact match with Stitch preview) */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">
                Branches
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {branchesList}
              </p>
            </div>
          </div>

          {/* Column 5: Contact Info (Exact match with Stitch preview) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white mb-2">
              Contact Info
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Campus Headquarters, IT Corridor, Chennai, Tamil Nadu
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <a href="tel:+919840012345" className="hover:text-white transition-colors">
                  +91 98400 12345 / 044-2456789
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <a href="mailto:admissions@fiitformacion.com" className="hover:text-white transition-colors truncate">
                  admissions@fiitformacion.com
                </a>
              </div>
            </div>

            {/* Admissions Open Announcement Box */}
            <div className="p-3.5 rounded-xl bg-slate-800/70 border border-slate-700/80 text-left">
              <div className="text-xs font-bold text-white">
                Admissions Open
              </div>
              <div className="text-[11.5px] text-slate-300 mt-1">
                Batches commencing every Monday.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Disclaimers */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>© FIIT Formacion Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-2 sm:space-x-3 text-slate-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Terms and Conditions</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer">Disclaimer</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
