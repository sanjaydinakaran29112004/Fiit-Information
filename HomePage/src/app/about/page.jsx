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
  Eye, 
  Rocket, 
  Code2, 
  Monitor, 
  Server, 
  Users, 
  Network, 
  ShieldCheck, 
  Award, 
  GraduationCap, 
  Calendar,
  ExternalLink,
  ChevronRight,
  Terminal,
  Shield,
  X,
  Phone,
  Mail,
  User
} from 'lucide-react';

export default function AboutPage() {
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('About Us Consultation');
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [selectedBioMember, setSelectedBioMember] = useState(null);

  const handleOpenEnquire = (topic = 'General Admission') => {
    setSelectedTopic(topic);
    setEnquireModalOpen(true);
  };

  const handleOpenBio = (member) => {
    setSelectedBioMember(member);
    setBioModalOpen(true);
  };

  // Governing Council - 4 Members with Crystal-Clear HD Images
  const governingCouncil = [
    {
      id: 'ramakrishnan',
      name: 'S. Ramakrishnan',
      role: 'Founder & MD',
      bio: '20+ years in Enterprise Architecture and technical advisory for Fortune 500 digital transformations.',
      domain: 'Systems & Scaling',
      image: '/images/ramakrishnan.jpg',
      experience: 'Ex-Chief Enterprise Architect at Tier-1 IT Consultancy. Advised Fortune 500 banks and healthcare providers on digital cloud transformations.'
    },
    {
      id: 'priya',
      name: 'Dr. Priya Anand',
      role: 'Head of Technology',
      bio: 'Former Staff Architect at Tier-1 Cloud Consultancy. Architected distributed microservices for high-concurrency fintech.',
      domain: 'Cloud & DevOps',
      image: '/images/priya.jpg',
      experience: 'PhD in Distributed Computing from premier institute. Architected high-frequency trading platforms and distributed caching infrastructures.'
    },
    {
      id: 'karthikeyan',
      name: 'M. Karthikeyan',
      role: 'Director of Placements',
      bio: '15+ years orchestrating engineering recruitment pipelines with Indian GCCs and multinational IT services firms.',
      domain: 'Talent Placement',
      image: '/images/karthikeyan.jpg',
      experience: 'Engineered corporate hiring alliances with 150+ product companies, Global Capability Centers (GCCs), and IT services conglomerates.'
    },
    {
      id: 'venkatesh',
      name: 'Venkatesh Rao',
      role: 'Lead AI & ML Mentor',
      bio: 'Specialist in scalable data pipelines, PyTorch deployments, and high-throughput Apache Kafka streaming clusters.',
      domain: 'Applied AI & MLOps',
      image: '/images/venkatesh.jpg',
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

  const campusLocations = [
    'Iyyappanthangal',
    'Kelambakkam',
    'Chengalpattu',
    'Tambaram',
    'Avadi',
    'Redhills',
    'Thiruvannamalai',
    'Vellore',
    'Ambattur'
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fd] text-slate-900 font-sans selection:bg-[#1a1f4b] selection:text-white w-full max-w-full">
      
      {/* 1. Header / Navbar with active about page */}
      <Header activePage="about" onOpenEnquire={handleOpenEnquire} />

      <main className="w-full max-w-full">
        
        {/* Breadcrumb strip */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 w-full">
          <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-slate-500 font-medium">
            <Link 
              href="/" 
              className="hover:text-[#1a1f4b] flex items-center gap-1.5 text-slate-600 font-semibold transition-colors"
            >
              <svg className="w-3.5 h-3.5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#1a1f4b] font-bold">About Us</span>
          </div>
        </div>

        {/* 2. Hero Section */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column Text & Numbers */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"></span>
                <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                  INSTITUTIONAL EXCELLENCE • ESTABLISHED 2012
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#1a1f4b] leading-[1.18] tracking-tight">
                Bridging Academia &amp; Enterprise Software Engineering.
              </h1>

              {/* Subtext Paragraph */}
              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal">
                FIIT Formacion Pvt. Ltd. was established to solve the critical gap between university engineering curriculum and real-world corporate technology expectations. We do not run textbook courses; we incubate industry-ready technical talent through production-tested lab immersion.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/methodology"
                  className="btn-interactive bg-[#1a1f4b] hover:bg-[#12163b] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-sm transition-all"
                >
                  <span>Explore Our Methodology</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => handleOpenEnquire('Corporate Partnerships')}
                  className="bg-white hover:bg-slate-50 text-[#1a1f4b] px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border border-slate-300 shadow-2xs transition-all cursor-pointer"
                >
                  <span>Corporate Partnerships</span>
                  <Building2 className="w-4 h-4 text-slate-700" />
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
                    <div className="text-2xl sm:text-3xl font-black text-[#ea580c]">150+</div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">Hiring Partners</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column Visual Card (Crystal Clear HD Photo) */}
            <div className="lg:col-span-5 relative mt-2 lg:mt-0 w-full">
              <div className="text-xs font-semibold text-slate-500 mb-2 pl-0.5">
                About Us &amp; Corporate Profile
              </div>

              {/* Rounded Frame Card with Ultra-Clear HD Lab Immersion Photo */}
              <div className="relative rounded-2xl overflow-hidden bg-[#1a1f4b] shadow-xl border border-slate-300 group">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
                  <img
                    src="/images/hero-lab.jpg"
                    alt="FIIT Production-Grade Lab Immersion"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* Floating Bottom Card: Production-Grade Labs */}
                <div className="p-4 bg-[#12163b]">
                  <div className="bg-white rounded-xl p-3.5 shadow-md flex items-center gap-3.5 border border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                      <Terminal className="w-5 h-5 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">Production-Grade Labs</h4>
                      <p className="text-xs text-slate-600 mt-0.5 font-medium">
                        Dockerized environments with CI/CD gates from Day 1.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 3. Foundational Pillars Section */}
        <section className="bg-white py-16 border-y border-slate-200">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold tracking-widest text-[#ea580c] uppercase">
                FOUNDATIONAL PILLARS
              </span>
              <h2 className="text-3xl font-black text-[#1a1f4b] mt-1.5 tracking-tight">
                Engineered for Technical Mastery
              </h2>
              <p className="text-sm text-slate-600 mt-2 font-normal">
                We reject superficial rote-learning in favor of deliberate engineering practice, accountability, and architectural thinking.
              </p>
            </div>

            {/* 3 Crisp White Cards on Subtle BG */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Vision */}
              <div className="interactive-card bg-[#f8f9fd] rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-100 text-[#1a1f4b] flex items-center justify-center mb-5">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-[10.5px] font-bold text-[#ea580c] tracking-wider uppercase">
                    INSTITUTIONAL VISION
                  </span>
                  <h3 className="text-lg font-bold text-[#1a1f4b] mt-1.5 mb-2.5">
                    Global Technical Recognition
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    To be India's premier engineering incubation ecosystem, recognized globally for producing capable, self-directed software developers and data engineers with uncompromised integrity.
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80">
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a1f4b]"></span>
                    Target: 100k Practitioners by 2030
                  </span>
                </div>
              </div>

              {/* Card 2: Mission */}
              <div className="interactive-card bg-[#f8f9fd] rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center mb-5">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-[10.5px] font-bold text-[#ea580c] tracking-wider uppercase">
                    CORPORATE MISSION
                  </span>
                  <h3 className="text-lg font-bold text-[#1a1f4b] mt-1.5 mb-2.5">
                    Immediate Day-1 Billability
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    To equip every graduating engineer with terminal-first development rigor, genuine project portfolios, ethical professional conduct, and immediate Day-1 corporate project assignment readiness.
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80">
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]"></span>
                    Full Lifecycle SDLC Mastery
                  </span>
                </div>
              </div>

              {/* Card 3: Axiom */}
              <div className="interactive-card bg-[#f8f9fd] rounded-2xl p-7 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-purple-100 text-indigo-700 flex items-center justify-center mb-5">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10.5px] font-bold text-[#ea580c] tracking-wider uppercase">
                    CORE AXIOM
                  </span>
                  <h3 className="text-lg font-bold text-[#1a1f4b] mt-1.5 mb-2.5">
                    Practicality Over Pedagogy
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    Clean code over memorized syntax. Verified Git commits over paper certificates. Production observability over toy classroom prototypes.
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80">
                  <span className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-700"></span>
                    Zero Synthetic Clones
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 4. The Engineering Shift / The FIIT Contrast Matrix */}
        <section className="py-16 bg-[#f8f9fd]" id="methodology-section">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold tracking-widest text-[#ea580c] uppercase">
                THE ENGINEERING SHIFT
              </span>
              <h2 className="text-3xl font-black text-[#1a1f4b] mt-1.5 tracking-tight">
                The FIIT Contrast
              </h2>
              <p className="text-sm text-slate-600 mt-2 font-normal">
                Compare how our deliberate engineering framework actively diverges from conventional collegiate computer science instruction.
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block rounded-2xl border border-slate-200 overflow-hidden shadow-xs bg-white w-full max-w-full">
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[760px]">
                  <thead>
                    <tr className="bg-[#1a1f4b] text-white">
                      <th className="py-3.5 px-6 text-xs font-bold uppercase tracking-wider w-[22%]">
                        Dimension
                      </th>
                      <th className="py-3.5 px-6 text-xs font-bold text-slate-300 uppercase tracking-wider w-[39%]">
                        Conventional Academics
                      </th>
                      <th className="py-3.5 px-6 text-xs font-bold text-[#ea580c] uppercase tracking-wider w-[39%] bg-[#12163b]">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>FIIT Incubation Framework</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-[13px]">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                        <td className="py-4 px-6 font-bold text-[#1a1f4b] align-top">
                          <div>{row.title}</div>
                          <div className="text-[11px] font-semibold text-slate-400 mt-0.5">{row.subtitle}</div>
                        </td>
                        <td className="py-4 px-6 text-slate-600 align-top leading-relaxed">
                          {row.conventional}
                        </td>
                        <td className="py-4 px-6 font-medium text-slate-900 bg-indigo-50/30 align-top leading-relaxed">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{row.fiit}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4 w-full">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs">
                  <div>
                    <h4 className="text-sm font-bold text-[#1a1f4b]">{row.title}</h4>
                    <p className="text-[11px] text-slate-400 font-medium">{row.subtitle}</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-700 leading-relaxed border border-slate-100">
                    <span className="font-bold text-slate-600 block mb-0.5">Conventional:</span>
                    {row.conventional}
                  </div>

                  <div className="bg-orange-50/50 rounded-xl p-3 text-xs text-slate-900 font-medium leading-relaxed border border-orange-100">
                    <span className="font-bold text-[#ea580c] block mb-0.5">FIIT Incubation:</span>
                    {row.fiit}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 5. Governing Council Section (4 Members with Crystal Clear HD Photos) */}
        <section className="py-16 bg-white border-y border-slate-200 w-full" id="council-section">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
              <div className="max-w-3xl">
                <span className="text-xs font-bold tracking-widest text-[#ea580c] uppercase">
                  GOVERNING COUNCIL
                </span>
                <h2 className="text-3xl font-black text-[#1a1f4b] mt-1.5 tracking-tight">
                  Guided by Industry Practitioners
                </h2>
                <p className="text-sm text-slate-600 mt-2 font-normal">
                  Our curriculum and executive leadership combine enterprise architectural credibility with real software production heritage.
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs self-start md:self-auto">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Industry Active Council</span>
              </div>
            </div>

            {/* 4 Crystal-Clear Leadership Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {governingCouncil.map((member) => (
                <div
                  key={member.id}
                  className="interactive-card bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Photo with external link icon overlay */}
                    <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                        loading="eager"
                      />
                      <button 
                        onClick={() => handleOpenBio(member)}
                        className="absolute top-2.5 right-2.5 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-700 shadow-2xs hover:bg-white hover:text-[#1a1f4b] transition-colors cursor-pointer"
                        title="View Profile Details"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-5">
                      <span className="text-xs font-bold text-[#ea580c]">
                        {member.role}
                      </span>
                      <h3 className="text-base font-extrabold text-[#1a1f4b] mt-1 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span className="truncate mr-2 font-medium">Domain: {member.domain.split('&')[0]}</span>
                    <button 
                      onClick={() => handleOpenBio(member)}
                      className="text-[#1a1f4b] hover:text-[#ea580c] font-bold flex items-center gap-1 shrink-0 cursor-pointer"
                    >
                      <span>Bio</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. Enterprise Facility Standards */}
        <section className="py-16 bg-[#f8f9fd] w-full" id="facilities-section">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold tracking-widest text-[#ea580c] uppercase">
                ENTERPRISE FACILITY STANDARDS
              </span>
              <h2 className="text-3xl font-black text-[#1a1f4b] mt-1.5 tracking-tight">
                Infrastructure Engineered for Enterprise Readiness
              </h2>
              <p className="text-sm text-slate-600 mt-2 font-normal">
                Our physical facilities mimic corporate development environments to remove culture shock on your first day of professional employment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Facility 1 */}
              <div className="interactive-card bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#1a1f4b] mb-4">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1a1f4b] mb-1.5">
                    Multi-Core Linux Workstations
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Dual-monitor development setups running Ubuntu/Debian, NVMe storage, and zero-latency access to private repositories.
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    STANDARD: 32GB RAM / I7 MULTI-CORE
                  </span>
                </div>
              </div>

              {/* Facility 2 */}
              <div className="interactive-card bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-[#ea580c] mb-4">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1a1f4b] mb-1.5">
                    Dedicated Sandbox Clusters
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Internal bare-metal servers hosting Kubernetes clusters, real-time telemetry metrics, and high-throughput databases.
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    SIMULATED CLOUD STACKS
                  </span>
                </div>
              </div>

              {/* Facility 3 */}
              <div className="interactive-card bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-indigo-700 mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1a1f4b] mb-1.5">
                    Collaborative War Rooms
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Agile standup spaces outfitted with magnetic architectural whiteboards and video-conferencing for remote sprint demos.
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    DAILY SCRUM &amp; CODE DEFENSE
                  </span>
                </div>
              </div>

              {/* Facility 4 */}
              <div className="interactive-card bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 mb-4">
                    <Network className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#1a1f4b] mb-1.5">
                    9 Strategic Tech Hubs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Easily accessible campuses across Chennai and Tamil Nadu ensuring zero commuting friction for aspiring software engineers.
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    STANDARDIZED EQUIPMENT ACROSS HUBS
                  </span>
                </div>
              </div>

            </div>

            {/* Active Campus Locations Bar */}
            <div className="mt-8 bg-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 border border-slate-200 shadow-xs" id="branches-section">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider shrink-0">
                ACTIVE CAMPUS LOCATIONS:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-800 w-full">
                {campusLocations.map((loc) => (
                  <Link 
                    key={loc}
                    href="/branches"
                    className="bg-slate-100 hover:bg-[#1a1f4b] hover:text-white px-3 py-1.5 rounded-lg border border-slate-200 transition-colors text-xs cursor-pointer"
                  >
                    {loc}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 7. Quality Assurance Section */}
        <section className="py-16 bg-white border-y border-slate-200 w-full" id="qa-section">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            {/* Outer Container */}
            <div className="bg-[#f8f9fd] rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Col */}
              <div className="lg:col-span-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold tracking-widest text-[#ea580c] uppercase">
                  QUALITY ASSURANCE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1a1f4b] tracking-tight leading-snug">
                  Institutional Integrity &amp; Standards
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Every curriculum module, evaluation gateway, and internship track is benchmarked against national and international software workforce guidelines.
                </p>
              </div>

              {/* Right 2x2 Grid of 4 Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* QA 1 */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center text-[#1a1f4b] shrink-0 mt-0.5">
                      <span className="font-bold text-xs">@</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1a1f4b]">ISO 9001:2015 Certified</h4>
                      <p className="text-[11.5px] text-slate-600 mt-1 leading-relaxed">
                        Standardized technical training protocols, curriculum revision cycles, and lab uptime guarantees.
                      </p>
                    </div>
                  </div>
                </div>

                {/* QA 2 */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-[#ea580c] shrink-0 mt-0.5">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1a1f4b]">Strict Anti-Plagiarism Protocol</h4>
                      <p className="text-[11.5px] text-slate-600 mt-1 leading-relaxed">
                        Automated Git AST code analysis ensures each student writes unique, self-authored software artifacts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* QA 3 */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1a1f4b]">Transparent Placement Audit</h4>
                      <p className="text-[11.5px] text-slate-600 mt-1 leading-relaxed">
                        Verifiable corporate placement registries. Zero false promises, zero non-technical sales gimmicks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* QA 4 */}
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-purple-100 flex items-center justify-center text-indigo-700 shrink-0 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1a1f4b]">University Aligned Frameworks</h4>
                      <p className="text-[11.5px] text-slate-600 mt-1 leading-relaxed">
                        Curricula structured to complement and elevate engineering credits across autonomous institutions.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* 8. Take The Next Step CTA Banner */}
        <section className="bg-[#12163b] py-14 text-white w-full">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="max-w-2xl">
                <span className="text-xs font-extrabold tracking-widest text-[#ea580c] uppercase">
                  TAKE THE NEXT STEP
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5 leading-tight tracking-tight">
                  Ready to Experience Practical Tech Training?
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Schedule an in-person walk-through of our terminal labs, observe an active code review session, and speak with our academic director.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenEnquire('Schedule Campus Visit')}
                  className="btn-interactive bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Schedule Campus Visit</span>
                </button>

                <Link
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 border border-white/20 transition-all cursor-pointer"
                >
                  <span>Contact Admissions</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <StitchFooter onOpenEnquire={handleOpenEnquire} />

      {/* Interactive Admission Enquiry Modal */}
      {enquireModalOpen && (
        <EnquireModal 
          initialProgram={selectedTopic}
          onClose={() => setEnquireModalOpen(false)}
        />
      )}

      {/* Interactive Leadership Bio Modal */}
      {bioModalOpen && selectedBioMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setBioModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-xs">
                <img 
                  src={selectedBioMember.image} 
                  alt={selectedBioMember.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <span className="text-[10px] font-bold text-[#ea580c] uppercase tracking-wider">
                  {selectedBioMember.role}
                </span>
                <h3 className="text-lg font-bold text-[#1a1f4b]">{selectedBioMember.name}</h3>
                <p className="text-xs font-semibold text-indigo-700 mt-0.5">Domain: {selectedBioMember.domain}</p>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-xs text-slate-700 border-t border-slate-100 pt-4 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Executive Leadership &amp; Heritage</h4>
                <p className="text-slate-600">{selectedBioMember.bio}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1">Engineering Impact</h4>
                <p className="text-slate-600">{selectedBioMember.experience}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setBioModalOpen(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
