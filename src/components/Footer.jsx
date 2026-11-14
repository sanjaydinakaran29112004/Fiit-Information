import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Award, 
  Heart,
  ExternalLink
} from 'lucide-react';

export default function Footer({ onOpenAdmission, onOpenCareerAdvisor }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-glow">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight font-display">
                  FIIT <span className="text-brand-400">FORMATION</span>
                </span>
                <p className="text-[10px] text-slate-500 font-medium">Futura Innovative Information Technology</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Fiit Formacion Private Limited is a registered IT training, corporate skill development, and career placement organization headquartered in Avadi, Chennai since 2015.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                CIN: U74999TN2018PTC121618
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-display">
              Popular Programs
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#courses" className="hover:text-brand-300 transition-colors">Full Stack MERN</a></li>
              <li><a href="#courses" className="hover:text-brand-300 transition-colors">Java Microservices</a></li>
              <li><a href="#courses" className="hover:text-brand-300 transition-colors">Python & Data Science</a></li>
              <li><a href="#courses" className="hover:text-brand-300 transition-colors">AWS Cloud & DevOps</a></li>
              <li><a href="#courses" className="hover:text-brand-300 transition-colors">Cisco CCNA (200-301)</a></li>
              <li><a href="#courses" className="hover:text-brand-300 transition-colors">Selenium QA Testing</a></li>
              <li><a href="#courses" className="hover:text-brand-300 transition-colors">Tally Prime & GST</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-display">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#placements" className="hover:text-brand-300 transition-colors">FIIT Jobs Placement Cell</a></li>
              <li><a href="#batches" className="hover:text-brand-300 transition-colors">Batch Timings Calendar</a></li>
              <li>
                <button onClick={onOpenCareerAdvisor} className="hover:text-brand-300 transition-colors text-left">
                  AI Career Recommender
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAdmission(null)} className="hover:text-brand-300 transition-colors text-left">
                  Apply for Admission
                </button>
              </li>
              <li><a href="#contact" className="hover:text-brand-300 transition-colors">Avadi Campus Directions</a></li>
              <li><a href="#contact" className="hover:text-brand-300 transition-colors">Hire Trained Freshers</a></li>
            </ul>
          </div>

          {/* Campus Contact */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3 font-display">
              Avadi Campus
            </h4>
            <div className="space-y-2.5 text-slate-400 text-xs">
              <p>
                No. 2360, HIG, 1st Floor, 60 Feet Main Road, TNHB, Avadi, Chennai – 600054.
              </p>
              <p>
                <strong className="text-white">Call:</strong> <a href="tel:+917200037575" className="hover:text-white">+91 72000 37575</a>
              </p>
              <p>
                <strong className="text-white">Email:</strong> <a href="mailto:info@fiitjobs.com" className="hover:text-white">info@fiitjobs.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Fiit Formacion Private Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Designed & Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>by <strong className="text-brand-400">EntryKode</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
