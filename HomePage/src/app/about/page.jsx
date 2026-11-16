'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import StitchFooter from '../../components/StitchFooter';
import EnquireModal from '../../components/EnquireModal';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Users, 
  Terminal, 
  GraduationCap, 
  Calendar,
  ExternalLink,
  Code2,
  Sparkles,
  MapPin,
  Clock,
  Briefcase
} from 'lucide-react';

export default function AboutPage() {
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [selectedProgramForEnquire, setSelectedProgramForEnquire] = useState('About Us Consultation');
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpenEnquire = (topic = 'General Admission') => {
    setSelectedProgramForEnquire(topic);
    setEnquireModalOpen(true);
  };

  const handleOpenBio = (member) => {
    setSelectedMember(member);
    setBioModalOpen(true);
  };

  const governingCouncil = [
    {
      id: 'ramakrishnan',
      name: 'S. Ramakrishnan',
      role: 'Founder & Managing Director',
      bio: '20+ years in Enterprise Architecture and technical advisory for Fortune 500 digital transformations.',
      domain: 'Systems & Scaling',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      experience: 'Ex-Chief Enterprise Architect at Tier-1 IT Consultancy. Advised Fortune 500 banks and healthcare providers on digital cloud transformations.'
    },
    {
      id: 'priya',
      name: 'Dr. Priya Anand',
      role: 'Head of Technology & Pedagogy',
      bio: 'Former Staff Architect at Tier-1 Cloud Consultancy. Architected distributed microservices for high-concurrency fintech.',
      domain: 'Cloud & DevOps',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      experience: 'PhD in Distributed Computing from premier institute. Architected high-frequency trading platforms and distributed caching infrastructures.'
    },
    {
      id: 'karthikeyan',
      name: 'M. Karthikeyan',
      role: 'Director of Corporate Alliances',
      bio: '15+ years orchestrating engineering recruitment pipelines with Indian GCCs and multinational IT services firms.',
      domain: 'Talent Placement',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      experience: 'Engineered corporate hiring alliances with 150+ product companies, Global Capability Centers (GCCs), and IT services conglomerates.'
    },
    {
      id: 'venkatesh',
      name: 'Venkatesh Rao',
      role: 'Lead AI & Systems Mentor',
      bio: 'Specialist in scalable data pipelines, PyTorch deployments, and high-throughput Apache Kafka streaming clusters.',
      domain: 'Applied AI & MLOps',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      experience: 'Specialized in real-time streaming architectures, distributed model inference pipelines, and scalable enterprise MLOps.'
    }
  ];

  const comparisonRows = [
    {
      title: 'Learning Format',
      subtitle: 'Methodology & Tooling',
      conventional: 'Passive lecture slides, textbook regurgitation, and pen-and-paper theoretical examinations.',
      fiit: '100% terminal-based coding, Dockerized workspaces, branch-driven development, and pull request reviews.'
    },
    {
      title: 'Instruction Quality',
      subtitle: 'Faculty Credentialing',
      conventional: 'Academic lecturers restricted to legacy static syllabi with little to no recent real-world shipping experience.',
      fiit: 'Practicing corporate technical architects, engineering leads, and DevOps veterans from Tier-1 IT companies.'
    },
    {
      title: 'Portfolio Scope',
      subtitle: 'Code Reality',
      conventional: 'Outdated, shared sample clones (e.g. static Library Management Systems) executed solely on localhost.',
      fiit: 'Scalable multi-tenant microservices, live deployments on AWS/Render, verified GitHub commit timelines.'
    },
    {
      title: 'Code Evaluation',
      subtitle: 'Quality Standards',
      conventional: 'Subjective paper-based scoring focusing on syntactical memorization without runtime performance checks.',
      fiit: 'Timed coding katas, live oral architecture defense, and automated SonarQube / ESLint code quality gates.'
    },
    {
      title: 'Career Outcome',
      subtitle: 'Placement Pipeline',
      conventional: 'Mass campus recruitment drives with generalized aptitude tests and unpredictable bench-sitting.',
      fiit: 'Placement Readiness Program (PRP), direct code portfolio vetting, and curated corporate drives with 150+ partners.'
    }
  ];

  const milestones = [
    { year: '2012', title: 'Inception in Chennai', desc: 'Started with a single boutique high-concurrency lab focused on Java and Linux systems engineering.' },
    { year: '2016', title: 'Enterprise Lab Expansion', desc: 'Introduced cloud virtualization, Full Stack engineering pipelines, and partnered with first 25 corporate hiring firms.' },
    { year: '2020', title: 'FIIT EDGE Pipeline Launch', desc: 'Formulated our proprietary 8-stage incubation framework bridging college graduates into deployment-ready engineers.' },
    { year: '2024', title: '9 TN Hubs & 25,000+ Alumni', desc: 'Expanded across Tamil Nadu with 9 tech hubs, training over 25,000 engineers with verified industry outcomes.' }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fd] text-slate-900 font-sans selection:bg-[#1a1f4b] selection:text-white w-full">
      
      {/* 1. Header with active about tab */}
      <Header activePage="about" onOpenEnquire={handleOpenEnquire} />

      <main className="w-full">
        
        {/* Breadcrumb strip */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1a1f4b] flex items-center gap-1 text-slate-600 font-semibold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#1a1f4b] font-bold">About Us</span>
          </div>
        </div>

        {/* 2. Hero Section */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"></span>
                <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                  INSTITUTIONAL EXCELLENCE • ESTABLISHED 2012
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f4b] leading-tight tracking-tight">
                Bridging Academia &amp; Enterprise Software Engineering.
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                FIIT Formacion Pvt. Ltd. was established to solve the critical gap between university engineering curriculum and real-world corporate technology expectations. We do not run textbook courses; we incubate industry-ready technical talent through production-tested lab immersion.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/methodology"
                  className="btn-interactive bg-[#1a1f4b] hover:bg-[#131738] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all"
                >
                  <span>Explore Our Methodology</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => handleOpenEnquire('Corporate Partnerships')}
                  className="bg-white hover:bg-slate-50 text-[#1a1f4b] px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border border-slate-300 shadow-xs transition-all cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-slate-700" />
                  <span>Corporate Partnerships</span>
                </button>
              </div>

              {/* Stats Bar */}
              <div className="pt-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-xs">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#1a1f4b]">12+</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">Years of Rigor</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#1a1f4b]">25,000+</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">Engineers Built</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#1a1f4b]">9</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">TN Tech Hubs</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#ea580c]">98.4%</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">Practical Competency</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] group">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="FIIT Engineering Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f4b]/90 via-[#1a1f4b]/30 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ea580c] block">
                    FOUNDED ON ENGINEERING DISCIPLINE
                  </span>
                  <p className="text-sm font-bold mt-1">
                    Corporate Calibrated. Faculty with 15+ Yrs Industry Seniority.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. Milestones Timeline */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                OUR JOURNEY &amp; EVOLUTION
              </span>
              <h2 className="text-3xl font-black text-[#1a1f4b] tracking-tight">
                A Decade of Engineering Impact
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div key={idx} className="bg-[#f8f9fd] rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 transition-all">
                  <div className="text-2xl font-black text-[#ea580c] mb-2">{m.year}</div>
                  <h3 className="text-base font-bold text-[#1a1f4b] mb-2">{m.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Governing Council */}
        <section className="py-16 sm:py-20 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                ACADEMIC &amp; CORPORATE LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f4b] tracking-tight">
                Our Governing Council
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Led by practicing architects, enterprise leads, and corporate hiring directors with verified track records in top-tier multinational corporations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {governingCouncil.map((member) => (
              <div 
                key={member.id}
                className="interactive-card bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 relative bg-slate-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-[#1a1f4b]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {member.domain}
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-[#1a1f4b]">{member.name}</h3>
                  <div className="text-xs font-bold text-[#ea580c] mt-0.5">{member.role}</div>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <button
                  onClick={() => handleOpenBio(member)}
                  className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#1a1f4b] hover:text-[#ea580c] flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>View Executive Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Pedagogical Contrast (Conventional vs FIIT) */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                THE FIIT STANDARD
              </span>
              <h2 className="text-3xl font-black text-[#1a1f4b] tracking-tight">
                Conventional Training vs. FIIT Pedagogy
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Why enterprise employers prefer candidates trained under FIIT's engineering-first environment.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
              <div className="grid grid-cols-12 bg-[#1a1f4b] text-white text-xs font-bold py-3.5 px-4 sm:px-6">
                <div className="col-span-4 sm:col-span-3">DIMENSION</div>
                <div className="col-span-4 text-slate-300">CONVENTIONAL TRAINING</div>
                <div className="col-span-4 sm:col-span-5 text-[#ea580c]">FIIT FORMACION LABS</div>
              </div>

              {comparisonRows.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-12 text-xs py-4 px-4 sm:px-6 border-b border-slate-100 items-center ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                  }`}
                >
                  <div className="col-span-4 sm:col-span-3 pr-2">
                    <span className="font-bold text-[#1a1f4b] block">{row.title}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{row.subtitle}</span>
                  </div>
                  <div className="col-span-4 text-slate-600 pr-2">
                    {row.conventional}
                  </div>
                  <div className="col-span-4 sm:col-span-5 font-semibold text-slate-900 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{row.fiit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Call to Action Banner */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-[#12163b] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-extrabold text-[#ea580c] uppercase tracking-wider block">
                PARTNER WITH TAMIL NADU'S PREMIER IT INCUBATOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Ready to Experience Enterprise-Calibrated Training?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect with our academic directors or schedule an on-site visit to inspect our physical dual-monitor labs across 9 locations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => handleOpenEnquire('Book Campus Visit')}
                className="btn-interactive px-6 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md text-center cursor-pointer"
              >
                Schedule Campus Tour
              </button>
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-xl text-center border border-white/20 transition-all cursor-pointer"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <StitchFooter onOpenEnquire={handleOpenEnquire} />

      {/* Enquire Modal */}
      {enquireModalOpen && (
        <EnquireModal 
          initialProgram={selectedProgramForEnquire}
          onClose={() => setEnquireModalOpen(false)}
        />
      )}

      {/* Bio Modal */}
      {bioModalOpen && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative border border-slate-100">
            <div className="flex items-start gap-4">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200"
              />
              <div>
                <h3 className="text-lg font-black text-[#1a1f4b]">{selectedMember.name}</h3>
                <div className="text-xs font-bold text-[#ea580c]">{selectedMember.role}</div>
                <div className="text-[11px] font-semibold text-slate-500 mt-0.5">{selectedMember.domain}</div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-700 space-y-3 leading-relaxed">
              <p>{selectedMember.bio}</p>
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                <span className="font-bold text-[#1a1f4b] block mb-1">Corporate Track Record:</span>
                <p className="text-slate-600">{selectedMember.experience}</p>
              </div>
            </div>

            <button
              onClick={() => setBioModalOpen(false)}
              className="mt-6 w-full py-2.5 bg-[#1a1f4b] hover:bg-[#131738] text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              Close Profile
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
