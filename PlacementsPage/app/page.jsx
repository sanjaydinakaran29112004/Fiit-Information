'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import StitchFooter from '../components/StitchFooter';
import EnquireModal from '../components/EnquireModal';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Building2, 
  FileText, 
  Sparkles, 
  Star,
  Users,
  Search,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { CAREER_ENGINE_CARDS } from '../data/stitchData';

export default function PlacementsPage() {
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleOpenEnquire = (topic = 'Placement Assistance Inquiry') => {
    setEnquireModalOpen(true);
  };

  const hiringPartners = [
    { name: 'Zoho Corporation', role: 'Full Stack & Software Engineers', tier: 'Product Enterprise' },
    { name: 'Freshworks', role: 'Frontend & Cloud Associates', tier: 'SaaS Unicorn' },
    { name: 'Cognizant (CTS)', role: 'Digital Engineering Associates', tier: 'Global IT' },
    { name: 'Tata Consultancy Services', role: 'Digital & Systems Engineers', tier: 'Global IT' },
    { name: 'Infosys', role: 'Specialist Programmer (Power)', tier: 'Global IT' },
    { name: 'Wipro Technologies', role: 'Project Engineers & Turbo', tier: 'Global IT' },
    { name: 'HCLTech', role: 'Cloud & Full Stack Developers', tier: 'Global IT' },
    { name: 'Accenture', role: 'Advanced Application Engineers', tier: 'Consulting' },
    { name: 'Thoughtworks', role: 'Graduate Software Craftsmen', tier: 'Product Consulting' },
    { name: 'LatentView Analytics', role: 'Data Analysts & Engineers', tier: 'Data Pureplay' },
    { name: 'Hexaware Technologies', role: 'Java & Cloud Developers', tier: 'Global IT' },
    { name: 'Mindtree / LTIMindtree', role: 'Full Stack Specialists', tier: 'Global IT' }
  ];

  const placedStudents = [
    {
      name: 'Karthik Raja',
      company: 'Zoho Corporation',
      role: 'Software Developer (Frontend / React)',
      package: '8.5 LPA',
      domain: 'MERN Stack',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
      branch: 'Iyyappanthangal Center'
    },
    {
      name: 'Priyanka Murali',
      company: 'Freshworks',
      role: 'Associate Platform Engineer',
      package: '12.0 LPA',
      domain: 'Full Stack Engineering',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
      branch: 'Kelambakkam (OMR) Center'
    },
    {
      name: 'Siddharth S.',
      company: 'Thoughtworks',
      role: 'Junior Software Engineer',
      package: '11.5 LPA',
      domain: 'Java Full Stack & Kafka',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80',
      branch: 'Tambaram Center'
    },
    {
      name: 'Divya Bharathi',
      company: 'Cognizant Digital',
      role: 'Cloud Backend Developer',
      package: '6.8 LPA',
      domain: 'Python & FastAPI',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      branch: 'Avadi Center'
    },
    {
      name: 'Arun Kumar',
      company: 'LatentView Analytics',
      role: 'Associate Data Engineer',
      package: '7.5 LPA',
      domain: 'Data Science & BI',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80',
      branch: 'Chengalpattu Center'
    },
    {
      name: 'Sneha Ranganathan',
      company: 'Hexaware',
      role: 'DevOps & Cloud Associate',
      package: '6.5 LPA',
      domain: 'AWS & Microservices',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
      branch: 'Redhills Center'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fd] text-slate-900 font-sans selection:bg-[#1a1f4b] selection:text-white w-full">
      
      {/* 1. Header */}
      <Header activePage="placements" onOpenEnquire={handleOpenEnquire} />

      <main className="w-full">
        
        {/* Breadcrumb strip */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1a1f4b] flex items-center gap-1 text-slate-600 font-semibold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#1a1f4b] font-bold">Career Transition &amp; Placements</span>
          </div>
        </div>

        {/* 2. Hero Section */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"></span>
              <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                PLACEMENT READINESS PROGRAM (PRP)
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f4b] tracking-tight leading-tight">
              Verified Career Outcomes. <br />
              <span className="text-[#ea580c]">Enterprise Engineering Placements.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Our Placement Readiness Program (PRP) is an enterprise transition engine. We calibrate your code repositories, resume architecture, interview delivery, and technical aptitude to secure high-yield roles.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 max-w-4xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-xs text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#1a1f4b]">94.8%</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">Placement Clearance</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#ea580c]">150+</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">Corporate Hiring Partners</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#1a1f4b]">₹18.0 LPA</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">Highest Package Secured</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-600">₹7.2 LPA</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">Average Package Across Batches</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The 8 Pillars of the Placement Readiness Program (PRP) */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                RIGOROUS RECRUITMENT CALIBRATION
              </span>
              <h2 className="text-3xl font-black text-[#1a1f4b] tracking-tight">
                The 8 Pillars of PRP
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Every candidate passes through all 8 pillars before entering corporate client selection rounds.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CAREER_ENGINE_CARDS.map((item, idx) => (
                <div 
                  key={idx}
                  className="interactive-card bg-[#f8f9fd] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between group hover:bg-white"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#1a1f4b] font-black text-sm mb-4 group-hover:scale-110 group-hover:bg-[#1a1f4b] group-hover:text-white transition-all">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-[#1a1f4b] mb-2 group-hover:text-indigo-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] font-bold text-[#ea580c] flex items-center gap-1">
                    <span>Verified Milestone</span>
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Ethical Commitment Banner */}
            <div className="mt-12 bg-amber-50/70 border border-amber-200 rounded-2xl p-5 flex items-start gap-4">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900 leading-relaxed">
                <strong className="font-bold text-amber-950 block sm:inline mr-1">Ethical Placement Commitment:</strong>
                FIIT Formacion does not sell fake certificates or bypass corporate evaluation filters. We prepare candidates with genuine code capabilities, live portfolio repos, and verified communication fluency that stand up to rigorous corporate scrutiny.
              </div>
            </div>

          </div>
        </section>

        {/* 4. Placed Candidates Wall of Fame */}
        <section className="py-16 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                VERIFIED ALUMNI TRANSFORMATIONS
              </span>
              <h2 className="text-3xl font-black text-[#1a1f4b] tracking-tight">
                Recent Placements Wall of Fame
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Real collegiate students and career transitioners deployed into high-scale software engineering roles.
              </p>
            </div>

            <button
              onClick={() => handleOpenEnquire('Placement Report Download')}
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs font-bold text-[#1a1f4b] hover:bg-slate-50 transition-colors shadow-2xs self-start md:self-end cursor-pointer"
            >
              Download Comprehensive Placement Report
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placedStudents.map((student, idx) => (
              <div 
                key={idx}
                className="interactive-card bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex items-center gap-4 hover:border-indigo-300 group"
              >
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200 group-hover:scale-105 transition-transform"
                />
                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-extrabold text-[#1a1f4b] truncate">{student.name}</h3>
                    <span className="text-xs font-black text-emerald-600 shrink-0 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      {student.package}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#ea580c] mt-0.5 truncate">{student.company}</div>
                  <div className="text-[11px] text-slate-500 truncate mt-0.5">{student.role}</div>
                  <div className="text-[10px] text-slate-400 mt-1 flex items-center gap-1 truncate">
                    <span>{student.domain}</span>
                    <span>•</span>
                    <span className="truncate">{student.branch}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Corporate Hiring Partners */}
        <section className="py-16 bg-[#12163b] text-white">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                CORPORATE ALLIANCES
              </span>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Our Corporate Hiring Partners
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                150+ Product Companies, GCCs, and IT Consulting conglomerates recruit our verified graduates.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {hiringPartners.map((partner, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
                >
                  <div className="text-sm font-extrabold text-white">{partner.name}</div>
                  <div className="text-[11px] text-amber-400 mt-1">{partner.tier}</div>
                  <div className="text-[10px] text-slate-400 mt-2">{partner.role}</div>
                </div>
              ))}
            </div>

            <div className="text-center pt-10">
              <span className="text-xs text-slate-400 block mb-3">
                Are you an enterprise engineering lead or corporate recruiter looking for pre-trained day-1 billable engineers?
              </span>
              <button
                onClick={() => handleOpenEnquire('Corporate Recruitment Drive')}
                className="btn-interactive px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-xl shadow-md cursor-pointer"
              >
                Schedule Corporate Campus Drive
              </button>
            </div>
          </div>
        </section>

        {/* 6. CTA Banner */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 text-center space-y-4 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1f4b] tracking-tight">
              Begin Your Placement Readiness Transformation Today
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Schedule a 1-on-1 counseling session with our Placement Directors to evaluate your current resume and technical standing.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleOpenEnquire('Placement Roadmap Consultation')}
                className="btn-interactive px-7 py-3.5 bg-[#1a1f4b] hover:bg-[#131738] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md cursor-pointer"
              >
                Book Free Placement Roadmap Call
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
          initialProgram="Placement Readiness Program (PRP)"
          onClose={() => setEnquireModalOpen(false)}
        />
      )}

    </div>
  );
}


