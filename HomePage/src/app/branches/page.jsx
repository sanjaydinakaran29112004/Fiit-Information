'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import StitchFooter from '../../components/StitchFooter';
import EnquireModal from '../../components/EnquireModal';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle, 
  Building2, 
  Monitor, 
  Wifi, 
  Zap, 
  ShieldCheck, 
  ExternalLink,
  Navigation
} from 'lucide-react';
import { BRANCHES_DATA } from '../../data/stitchData';

export default function BranchesPage() {
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleOpenEnquire = (branchName = 'Branch Visit') => {
    setEnquireModalOpen(true);
  };

  const detailedBranches = [
    {
      name: 'Iyyappanthangal (Campus Headquarters)',
      address: 'No. 45, Mount-Poonamallee High Road, Near Porur Junction, Iyyappanthangal, Chennai - 600056',
      landmark: 'Near Shell Petrol Bunk & Porur Toll Gate',
      phone: '+91 98400 12345',
      email: 'iyyappanthangal@fiitformacion.com',
      hours: 'Mon - Sat: 8:30 AM - 7:30 PM | Sun: 10:00 AM - 4:00 PM',
      capacity: '120 Dual-Monitor Workstations',
      isHQ: true,
      mapQuery: 'Iyyappanthangal+Chennai'
    },
    {
      name: 'Kelambakkam (OMR IT Expressway)',
      address: '2nd Floor, IT Corridor Tower, Old Mahabalipuram Road (OMR), Kelambakkam, Chennai - 603103',
      landmark: 'Opposite Chettinad Health City, 5 mins from SIPCOT Siruseri IT Park',
      phone: '+91 98400 12346',
      email: 'kelambakkam@fiitformacion.com',
      hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
      capacity: '90 Dual-Monitor Workstations',
      isHQ: false,
      mapQuery: 'Kelambakkam+OMR+Chennai'
    },
    {
      name: 'Chengalpattu (GST Industrial Belt)',
      address: 'No. 12, GST Main Road, Near New Bus Stand, Chengalpattu - 603001',
      landmark: 'Near Chengalpattu Medical College & Railway Junction',
      phone: '+91 98400 12347',
      email: 'chengalpattu@fiitformacion.com',
      hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
      capacity: '75 Dual-Monitor Workstations',
      isHQ: false,
      mapQuery: 'Chengalpattu+Railway+Station'
    },
    {
      name: 'Tambaram (South Chennai Hub)',
      address: 'No. 88, GST Road, Opp. MEPZ & Sanatorium Railway Station, Tambaram, Chennai - 600045',
      landmark: 'Above State Bank of India, Opp MEPZ Main Gate',
      phone: '+91 98400 12348',
      email: 'tambaram@fiitformacion.com',
      hours: 'Mon - Sat: 8:30 AM - 7:30 PM',
      capacity: '110 Dual-Monitor Workstations',
      isHQ: false,
      mapQuery: 'Tambaram+Sanatorium+MEPZ'
    },
    {
      name: 'Avadi (West Chennai Tech Center)',
      address: 'No. 24, CTH Road, Near Avadi Checkpost & Bus Terminus, Avadi, Chennai - 600054',
      landmark: 'Near HVF Main Gate & St. Peter Engineering College',
      phone: '+91 98400 12349',
      email: 'avadi@fiitformacion.com',
      hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
      capacity: '80 Dual-Monitor Workstations',
      isHQ: false,
      mapQuery: 'Avadi+Bus+Terminus'
    },
    {
      name: 'Redhills (North Chennai Tech Hub)',
      address: 'No. 15, GNT Road, Market Junction, Redhills, Chennai - 600052',
      landmark: 'Near Redhills Roundana & Bus Depot',
      phone: '+91 98400 12350',
      email: 'redhills@fiitformacion.com',
      hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
      capacity: '70 Dual-Monitor Workstations',
      isHQ: false,
      mapQuery: 'Redhills+GNT+Road+Chennai'
    },
    {
      name: 'Thiruvannamalai (Central TN Tech Center)',
      address: 'No. 67, Vellore Main Road, Gandhi Nagar, Thiruvannamalai - 606601',
      landmark: 'Near Anna Arch & Collectorate Junction',
      phone: '+91 98400 12351',
      email: 'thiruvannamalai@fiitformacion.com',
      hours: 'Mon - Sat: 9:00 AM - 6:30 PM',
      capacity: '65 Dual-Monitor Workstations',
      isHQ: false,
      mapQuery: 'Thiruvannamalai+Gandhi+Nagar'
    },
    {
      name: 'Vellore (Katpadi Education Belt)',
      address: 'No. 33, Katpadi Main Road, Near Old Bus Stand & Silk Paradise, Vellore - 632004',
      landmark: 'Near Green Circle & Katpadi Railway Junction',
      phone: '+91 98400 12352',
      email: 'vellore@fiitformacion.com',
      hours: 'Mon - Sat: 9:00 AM - 7:00 PM',
      capacity: '85 Dual-Monitor Workstations',
      isHQ: false,
      mapQuery: 'Katpadi+Old+Bus+Stand+Vellore'
    },
    {
      name: 'Ambattur (Industrial Estate Tech Park)',
      address: 'Module 14, Ambattur Industrial Estate 3rd Main Road, Ambattur, Chennai - 600058',
      landmark: 'Opposite Ambit IT Park & Prince Info Park',
      phone: '+91 98400 12353',
      email: 'ambattur@fiitformacion.com',
      hours: 'Mon - Sat: 9:00 AM - 7:30 PM',
      capacity: '100 Dual-Monitor Workstations',
      isHQ: false,
      mapQuery: 'Ambattur+Industrial+Estate+IT+Park'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fd] text-slate-900 font-sans selection:bg-[#1a1f4b] selection:text-white w-full">
      
      {/* 1. Header */}
      <Header activePage="branches" onOpenEnquire={handleOpenEnquire} />

      <main className="w-full">
        
        {/* Breadcrumb strip */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1a1f4b] flex items-center gap-1 text-slate-600 font-semibold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#1a1f4b] font-bold">Physical Infrastructure &amp; Branches</span>
          </div>
        </div>

        {/* 2. Hero Section */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                PHYSICAL INFRASTRUCTURE • 9 HUBS ACROSS TAMIL NADU
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f4b] tracking-tight leading-tight">
              State-of-the-Art Dual-Monitor Labs. <br />
              <span className="text-[#ea580c]">Within 30 Minutes of You.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We believe real engineering cannot happen on small laptops with patchy home WiFi. Every FIIT center is equipped with high-throughput dual-screen coding stations, dedicated fiber backbones, and full air-conditioned lab environments.
            </p>

            {/* Hardware Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
                <Monitor className="w-4 h-4 text-indigo-600" />
                <span>Dual 24&quot; IPS Displays</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
                <Wifi className="w-4 h-4 text-emerald-600" />
                <span>1 Gbps Dedicated Leased Lines</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs">
                <Zap className="w-4 h-4 text-amber-600" />
                <span>100% DG Diesel Power Backup</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 9 Branches Grid */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-1">
                  OFFICIAL CAMPUS NETWORK
                </span>
                <h2 className="text-3xl font-black text-[#1a1f4b] tracking-tight">
                  Explore Our 9 Physical Tech Hubs
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>All 9 Centers Fully Operational</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {detailedBranches.map((branch, idx) => (
                <div 
                  key={idx}
                  className="interactive-card bg-[#f8f9fd] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between group hover:bg-white"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="w-10 h-10 rounded-xl bg-[#1a1f4b] flex items-center justify-center text-white font-black text-sm shrink-0">
                        0{idx + 1}
                      </div>
                      {branch.isHQ && (
                        <span className="px-2.5 py-1 bg-amber-100 text-[#ea580c] text-[10px] font-black uppercase rounded-md tracking-wider border border-amber-200">
                          CAMPUS HQ
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-base font-extrabold text-[#1a1f4b] group-hover:text-indigo-900 transition-colors">
                        {branch.name}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{branch.address}</span>
                      </p>
                      <div className="text-[11px] text-slate-500 italic mt-1.5 pl-6">
                        Landmark: {branch.landmark}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200/70 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#1a1f4b] shrink-0" />
                        <a href={`tel:${branch.phone}`} className="font-bold text-[#1a1f4b] hover:text-[#ea580c] transition-colors">
                          {branch.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#1a1f4b] shrink-0" />
                        <span className="text-[11px]">{branch.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-emerald-700">
                        <Monitor className="w-3.5 h-3.5 shrink-0" />
                        <span>{branch.capacity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70 grid grid-cols-2 gap-2">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(branch.name + ' ' + branch.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Navigation className="w-3.5 h-3.5 text-blue-600" />
                      <span>Directions</span>
                    </a>

                    <button
                      onClick={() => handleOpenEnquire(`Campus Tour: ${branch.name}`)}
                      className="py-2.5 px-3 bg-[#1a1f4b] hover:bg-[#131738] text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer text-center"
                    >
                      Book Tour
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Lab Infrastructure Standards */}
        <section className="py-16 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
              EQUIPMENT &amp; FACILITIES
            </span>
            <h2 className="text-3xl font-black text-[#1a1f4b] tracking-tight">
              Hardware Spec Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Dual Workstations',
                desc: 'Dual 24" high-refresh IPS displays so you code on one screen and inspect terminal traces on the other.'
              },
              {
                title: 'High-Velocity Stacks',
                desc: 'High-RAM Intel/AMD octacore machines capable of running concurrent Docker containers and local databases.'
              },
              {
                title: 'Dedicated Fiber Internet',
                desc: 'Redundant primary and secondary leased lines with enterprise firewall protection and zero downtime.'
              },
              {
                title: 'Conference & Mock Rooms',
                desc: 'Dedicated soundproof rooms designed for 1-on-1 mock interviews, oral defenses, and live sprint presentations.'
              }
            ].map((spec, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ea580c] font-black text-sm mb-3">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-[#1a1f4b] mb-1.5">{spec.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CTA Banner */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-[#12163b] rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Walk Into Any Center &amp; Test Our Labs
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Our lab leads are available Monday through Saturday. Sit down, write code on our terminals, and witness the FIIT difference firsthand.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleOpenEnquire('Walk-in Lab Pass')}
                className="btn-interactive px-7 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md cursor-pointer"
              >
                Request Free Walk-in Lab Pass
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <StitchFooter onOpenEnquire={handleOpenEnquire} />

      {/* Enquire Modal */}
      {enquireModalOpen && (
        <EnquireModal 
          initialProgram="Campus Visit & Lab Inspection"
          onClose={() => setEnquireModalOpen(false)}
        />
      )}

    </div>
  );
}
