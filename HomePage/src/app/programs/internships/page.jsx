'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import StitchFooter from '../../../components/StitchFooter';
import EnquireModal from '../../../components/EnquireModal';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Clock, 
  GitBranch, 
  Terminal, 
  Server, 
  Layers, 
  FileCheck2, 
  Sparkles,
  Users,
  Code
} from 'lucide-react';
import { INTERNSHIP_TIERS } from '../../../data/stitchData';

export default function InternshipProgramsPage() {
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('15 Days Internship');

  const handleOpenEnquire = (tierTitle = 'Internship Inquiry') => {
    setSelectedTier(tierTitle);
    setEnquireModalOpen(true);
  };

  const domainTracks = [
    {
      title: 'Full Stack Web Engineering',
      tech: 'React, Node.js, Express, MongoDB, Tailwind, Git',
      desc: 'Build functional client portals with REST APIs, authentication state, and cloud hosting.'
    },
    {
      title: 'Python, Data & Applied AI',
      tech: 'Python 3, Pandas, FastAPI, Scikit-learn, PostgreSQL',
      desc: 'Develop automated data extraction pipelines, analytical dashboards, and machine learning models.'
    },
    {
      title: 'Cloud DevOps & Linux Systems',
      tech: 'Docker, Linux Shell, AWS EC2/S3, GitHub Actions, Nginx',
      desc: 'Deploy containerized web services with CI/CD automation and automated health monitoring.'
    },
    {
      title: 'Java Enterprise Backends',
      tech: 'Java 17, Spring Boot, Hibernate/JPA, MySQL, Postman',
      desc: 'Engineer microservice backends with transaction management, unit testing, and API documentation.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fd] text-slate-900 font-sans selection:bg-[#1a1f4b] selection:text-white w-full">
      
      {/* 1. Header with active programs */}
      <Header activePage="internships" onOpenEnquire={handleOpenEnquire} />

      <main className="w-full">
        
        {/* Breadcrumb strip */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1a1f4b] flex items-center gap-1 text-slate-600 font-semibold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500">Programs</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#1a1f4b] font-bold">Internship Programs</span>
          </div>
        </div>

        {/* 2. Hero Section */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"></span>
              <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                TARGETED PROJECT IMMERSIONS • ESTABLISHED LABS
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f4b] tracking-tight leading-tight">
              Learn by Doing. <br />
              <span className="text-[#ea580c]">Grow by Building.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Structured industrial internship durations designed to give collegiate students and early engineers verified, repo-backed proof of capability. No spectator theory; 100% shipping code.
            </p>

            {/* Quick Points */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleOpenEnquire('General Internship Enrollment')}
                className="btn-interactive px-6 py-3.5 bg-[#1a1f4b] hover:bg-[#131738] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all"
              >
                Apply for Upcoming Batch
              </button>
              <Link
                href="/programs/professional"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#1a1f4b] border border-slate-300 text-xs sm:text-sm font-bold rounded-xl transition-all"
              >
                View Professional Courses
              </Link>
            </div>
          </div>
        </section>

        {/* 3. The 3 Core Sprint Tiers (Exact Match with Homepage & Stitch) */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                FLEXIBLE DURATION TIERS
              </span>
              <h2 className="text-3xl font-black text-[#1a1f4b] tracking-tight">
                Select Your Internship Sprint
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Curated for academic semester breaks, college in-plant training mandates, and portfolio construction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {INTERNSHIP_TIERS.map((tier, idx) => {
                const isCenter = tier.popular;
                return (
                  <div 
                    key={idx}
                    className={`relative rounded-3xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-300 ${
                      isCenter 
                        ? 'bg-white border-2 border-[#1a1f4b] shadow-2xl -translate-y-2' 
                        : 'bg-[#f8f9fd] border border-slate-200/90 shadow-sm hover:border-slate-300 hover:bg-white'
                    }`}
                  >
                    {isCenter && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1a1f4b] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                        MOST POPULAR
                      </div>
                    )}

                    <div>
                      <div className="inline-block px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-extrabold tracking-wider text-[#ea580c] uppercase mb-4 shadow-2xs">
                        {tier.level}
                      </div>

                      <h3 className="text-2xl font-black text-[#1a1f4b] mb-3">
                        {tier.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                        {tier.description}
                      </p>

                      <div className="space-y-3 pt-5 border-t border-slate-100 mb-8">
                        {(tier.bullets || []).map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{typeof item === 'string' ? item : item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleOpenEnquire(tier.title)}
                      className="w-full py-3.5 px-4 rounded-xl bg-[#1a1f4b] hover:bg-[#131738] text-white text-xs font-bold tracking-wide shadow-md transition-all active:scale-95 cursor-pointer text-center"
                    >
                      Enroll in {tier.title}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Domain Tracks Available */}
        <section className="py-16 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
              SPECIALIZED DOMAIN TRACKS
            </span>
            <h2 className="text-3xl font-black text-[#1a1f4b] tracking-tight">
              Technology Tracks Covered
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Choose your domain focus during your internship sprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {domainTracks.map((track, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ea580c] font-black text-sm mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#1a1f4b] mb-1">{track.title}</h3>
                  <div className="text-xs font-bold text-[#ea580c] mb-2">{track.tech}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{track.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Includes live cloud deployment &amp; GitHub repository verification</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Institutional Accreditation Strip */}
        <section className="py-12 bg-[#12163b] text-white">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block">
                ACADEMIC ACCREDITATION &amp; COMPLIANCE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Recognized for College In-Plant Training (IPT) &amp; Semester Credits
              </h3>
              <p className="text-xs text-slate-300 max-w-2xl">
                Our internship completion certificates comply with Anna University, Autonomous, and Deemed University guidelines with unique QR-code verification.
              </p>
            </div>

            <button
              onClick={() => handleOpenEnquire('College In-Plant Training')}
              className="btn-interactive px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-xl shadow-md shrink-0 cursor-pointer"
            >
              College Batch Inquiries
            </button>
          </div>
        </section>

        {/* 6. CTA Banner */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 text-center space-y-4 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1f4b] tracking-tight">
              Ready to Build Production Repositories?
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Batches start every Monday across all 9 centers in Tamil Nadu. Reserve your workstation today.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleOpenEnquire('Immediate Internship Batch')}
                className="btn-interactive px-7 py-3.5 bg-[#1a1f4b] hover:bg-[#131738] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md cursor-pointer"
              >
                Apply for Next Monday Cohort
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
          initialProgram={selectedTier}
          onClose={() => setEnquireModalOpen(false)}
        />
      )}

    </div>
  );
}
