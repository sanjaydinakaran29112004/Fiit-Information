'use client';

import React from 'react';
import Link from 'next/link';
import { Share2, Play, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function StitchFooter({ onOpenEnquire }) {
  return (
    <footer className="bg-[#0e1338] text-white pt-12 sm:pt-16 pb-10 sm:pb-12 border-t border-slate-800">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5-Column Responsive Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-10 sm:pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-3.5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="text-xl font-black tracking-tight text-white font-display hover:text-orange-400 transition-colors">
                FIIT Formacion
              </h3>
            </Link>
            <span className="text-[10px] font-extrabold tracking-wider text-[#ea580c] block uppercase">
              EMPOWERING FUTURE IT PROFESSIONALS
            </span>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Premier IT training institute bridging academic curriculum with corporate technological standards through industry-immersion labs.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2 text-slate-300">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#1a1f4b] hover:text-white flex items-center justify-center transition-colors" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#1a1f4b] hover:text-white flex items-center justify-center transition-colors" aria-label="YouTube">
                <Play className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#1a1f4b] hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#1a1f4b] hover:text-white flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3.5 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/methodology" className="hover:text-white transition-colors">Methodology</Link></li>
              <li><Link href="/fiit-edge" className="hover:text-white transition-colors">FIIT EDGE</Link></li>
              <li><Link href="/placements" className="hover:text-white transition-colors">Placements</Link></li>
              <li><Link href="/branches" className="hover:text-white transition-colors">Branches</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3.5 tracking-tight">
              Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/programs/professional" className="hover:text-white transition-colors">Full Stack Development</Link></li>
              <li><Link href="/programs/professional" className="hover:text-white transition-colors">Java Full Stack</Link></li>
              <li><Link href="/programs/professional" className="hover:text-white transition-colors">Python Programming</Link></li>
              <li><Link href="/programs/professional" className="hover:text-white transition-colors">MERN/MEAN Stack</Link></li>
              <li><Link href="/programs/professional" className="hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link href="/programs/professional" className="hover:text-white transition-colors">Data Science</Link></li>
              <li><Link href="/programs/professional" className="hover:text-white transition-colors">AI &amp; ML</Link></li>
              <li><Link href="/programs/professional" className="hover:text-white transition-colors">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Column 4: Internships & Branches */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3.5 tracking-tight">
              Internships
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 mb-5">
              <li><Link href="/programs/internships" className="hover:text-white transition-colors">7 Days Internship</Link></li>
              <li><Link href="/programs/internships" className="hover:text-white transition-colors">15 Days Internship</Link></li>
              <li><Link href="/programs/internships" className="hover:text-white transition-colors">30 Days Internship</Link></li>
              <li><Link href="/programs/internships" className="hover:text-white transition-colors">College Industrial Training</Link></li>
            </ul>

            <Link href="/branches" className="block group">
              <h4 className="text-sm font-bold text-white mb-2 tracking-tight group-hover:text-orange-400 transition-colors">
                Branches &rarr;
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                Iyyappanthangal, Kelambakkam, Chengalpattu, Tambaram, Avadi, Redhills, Thiruvannamalai, Vellore, Ambattur
              </p>
            </Link>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3.5 tracking-tight">
              Contact Info
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Campus Headquarters, IT Corridor, Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="tel:+919840012345" className="hover:text-white">+91 98400 12345</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="mailto:info@fiitformacion.com" className="hover:text-white">info@fiitformacion.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} FIIT Formacion Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-slate-400 text-[11px] sm:text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Verification Portal</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
