'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { EnquireModal, BioModal } from '../components/Modals';
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
  Shield
} from 'lucide-react';

export default function AboutUsPage() {
  const [activeSection, setActiveSection] = useState('about');
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [enquireTopic, setEnquireTopic] = useState('General Enquiry');
  const [bioOpen, setBioOpen] = useState(false);
  const [selectedBioMember, setSelectedBioMember] = useState(null);

  const handleOpenEnquire = (topic = 'General Enquiry') => {
    setEnquireTopic(topic);
    setEnquireOpen(true);
  };

  const handleOpenBio = (member) => {
    setSelectedBioMember(member);
    setBioOpen(true);
  };

  const scrollToTarget = (elementId) => {
    const el = document.getElementById(elementId);
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigate = (id) => {
    setActiveSection(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'about') {
      scrollToTarget('about-section');
    } else if (id === 'methodology') {
      scrollToTarget('methodology-section');
    } else if (id === 'edge') {
      scrollToTarget('facilities-section');
    } else if (id === 'placements') {
      scrollToTarget('council-section');
    } else if (id === 'branches') {
      scrollToTarget('branches-section');
    } else if (id === 'contact') {
      scrollToTarget('footer-section');
    } else if (id === 'programs') {
      scrollToTarget('methodology-section');
    }
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
    <div className="min-h-screen bg-[#f5f6fc] text-slate-900 font-sans selection:bg-[#141d4a] selection:text-white w-full max-w-full">
      
      {/* 1. Header / Navbar */}
      <Navbar 
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenEnquire={handleOpenEnquire}
      />

      <main className="w-full max-w-full">
        
        {/* Breadcrumb strip (Matches Stitch Prototype) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 w-full" id="home-section">
          <div className="flex items-center gap-1.5 text-xs sm:text-[13px] text-slate-600 font-medium">
            <span 
              onClick={() => handleNavigate('home')} 
              className="hover:text-indigo-600 cursor-pointer flex items-center gap-1.5 text-slate-700 font-semibold"
            >
              <svg className="w-3.5 h-3.5 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Home
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">About FIIT</span>
          </div>
        </div>

        {/* 2. Hero Section (Matches Stitch Screenshot 1) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-16 w-full" id="about-section">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column Text & Numbers */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Tag Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-[11px] font-bold text-[#334155] tracking-wider uppercase">
                  INSTITUTIONAL EXCELLENCE • ESTABLISHED 2012
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-black text-[#090e29] leading-[1.16] tracking-tight">
                Bridging Academia &amp; Enterprise Software Engineering.
              </h1>

              {/* Subtext Paragraph */}
              <p className="text-[15px] sm:text-[16.5px] text-[#334155] leading-relaxed font-normal">
                FIIT Formacion Pvt. Ltd. was established to solve the critical gap between university engineering curriculum and real-world corporate technology expectations. We do not run textbook courses; we incubate industry-ready technical talent through production-tested lab immersion.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => handleNavigate('methodology')}
                  className="bg-[#121b4a] hover:bg-[#1a2669] text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  <span>Explore Our Methodology</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleOpenEnquire('Corporate Partnerships')}
                  className="bg-white hover:bg-slate-50 text-[#121b4a] px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 border border-slate-300 shadow-2xs transition-all active:scale-95 cursor-pointer"
                >
                  <span>Corporate Partnerships</span>
                  <Building2 className="w-4 h-4 text-slate-700" />
                </button>
              </div>

              {/* Stats Bar (Crisp White Card on Lavender-Tinted Page BG) */}
              <div className="pt-4">
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-2xs">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0f173b]">12+</div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">Years of Rigor</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0f173b]">25,000+</div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">Engineers Built</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0f173b]">9</div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">TN Tech Hubs</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0f173b]">150+</div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">Hiring Partners</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column Visual Card (Crystal Clear HD Photo) */}
            <div className="lg:col-span-5 relative mt-2 lg:mt-0 w-full">
              <div className="text-xs font-semibold text-slate-600 mb-2 pl-0.5">
                About Us &amp; Corporate Profile
              </div>

              {/* Rounded Frame Card with Ultra-Clear HD Lab Immersion Photo */}
              <div className="relative rounded-2xl overflow-hidden bg-[#141b3d] shadow-xl border border-slate-300 group">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
                  <img
                    src="/images/hero-lab.jpg"
                    alt="FIIT Production-Grade Lab Immersion"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* Floating Bottom Card: Production-Grade Labs */}
                <div className="p-4 bg-[#0e1538]">
                  <div className="bg-white rounded-xl p-3.5 shadow-md flex items-center gap-3.5 border border-slate-100">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
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

        {/* 3. Foundational Pillars Section (Matches Stitch Screenshot 2) */}
        <section className="bg-[#f5f6fc] py-16 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="max-w-3xl mb-10">
              <span className="text-[11px] font-bold tracking-widest text-[#b45309] uppercase">
                FOUNDATIONAL PILLARS
              </span>
              <h2 className="text-3xl font-extrabold text-[#090e29] mt-1.5 tracking-tight">
                Engineered for Technical Mastery
              </h2>
              <p className="text-[15px] text-[#334155] mt-2 font-normal">
                We reject superficial rote-learning in favor of deliberate engineering practice, accountability, and architectural thinking.
              </p>
            </div>

            {/* 3 Crisp White Cards on Lavender Background */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Vision */}
              <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-full bg-[#eef3fd] flex items-center justify-center mb-5 text-[#141d4a]">
                    <Eye className="w-5 h-5" />
                  </div>
                  <span className="text-[10.5px] font-bold text-[#b45309] tracking-wider uppercase">
                    INSTITUTIONAL VISION
                  </span>
                  <h3 className="text-lg font-bold text-[#090e29] mt-1.5 mb-2.5">
                    Global Technical Recognition
                  </h3>
                  <p className="text-[13.5px] text-[#334155] leading-relaxed font-normal">
                    To be India's premier engineering incubation ecosystem, recognized globally for producing capable, self-directed software developers and data engineers with uncompromised integrity.
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80">
                  <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
                    Target: 100k Practitioners by 2030
                  </span>
                </div>
              </div>

              {/* Card 2: Mission */}
              <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-full bg-[#eef3fd] flex items-center justify-center mb-5 text-[#141d4a]">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-[10.5px] font-bold text-[#b45309] tracking-wider uppercase">
                    CORPORATE MISSION
                  </span>
                  <h3 className="text-lg font-bold text-[#090e29] mt-1.5 mb-2.5">
                    Immediate Day-1 Billability
                  </h3>
                  <p className="text-[13.5px] text-[#334155] leading-relaxed font-normal">
                    To equip every graduating engineer with terminal-first development rigor, genuine project portfolios, ethical professional conduct, and immediate Day-1 corporate project assignment readiness.
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80">
                  <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
                    Full Lifecycle SDLC Mastery
                  </span>
                </div>
              </div>

              {/* Card 3: Axiom */}
              <div className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-full bg-[#eef3fd] flex items-center justify-center mb-5 text-[#141d4a]">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10.5px] font-bold text-[#b45309] tracking-wider uppercase">
                    CORE AXIOM
                  </span>
                  <h3 className="text-lg font-bold text-[#090e29] mt-1.5 mb-2.5">
                    Practicality Over Pedagogy
                  </h3>
                  <p className="text-[13.5px] text-[#334155] leading-relaxed font-normal">
                    Clean code over memorized syntax. Verified Git commits over paper certificates. Production observability over toy classroom prototypes.
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80">
                  <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
                    Zero Synthetic Clones
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 4. The Engineering Shift / The FIIT Contrast Matrix (Matches Stitch Screenshot 3) */}
        <section className="py-16 bg-[#f5f6fc] border-t border-slate-200/80" id="methodology-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="max-w-3xl mb-10">
              <span className="text-[11px] font-bold tracking-widest text-[#b45309] uppercase">
                THE ENGINEERING SHIFT
              </span>
              <h2 className="text-3xl font-extrabold text-[#090e29] mt-1.5 tracking-tight">
                The FIIT Contrast
              </h2>
              <p className="text-[15px] text-[#334155] mt-2 font-normal">
                Compare how our deliberate engineering framework actively diverges from conventional collegiate computer science instruction.
              </p>
            </div>

            {/* Desktop Table View (White card on lavender background) */}
            <div className="hidden md:block rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs bg-white w-full max-w-full">
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[760px]">
                  <thead>
                    <tr className="bg-[#f0f3fa] text-slate-800 border-b border-slate-200/90">
                      <th className="py-3.5 px-6 text-sm font-bold text-[#0f173b] w-[22%]">
                        Dimension
                      </th>
                      <th className="py-3.5 px-6 text-sm font-bold text-slate-800 w-[39%]">
                        Conventional Academics
                      </th>
                      <th className="py-3.5 px-6 text-sm font-bold text-indigo-950 w-[39%] bg-[#e9edfa]">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-indigo-700 fill-indigo-100" />
                          <span>FIIT Incubation Framework</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 text-[13.5px]">
                    {comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-4 px-6 font-bold text-[#0f173b] align-top">
                          <div>{row.title}</div>
                          <div className="text-[11.5px] font-semibold text-slate-500 mt-0.5">{row.subtitle}</div>
                        </td>
                        <td className="py-4 px-6 text-slate-700 align-top leading-relaxed">
                          {row.conventional}
                        </td>
                        <td className="py-4 px-6 font-medium text-slate-900 bg-[#f7f9ff] align-top leading-relaxed">
                          {row.fiit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4 w-full">
              <div className="bg-[#eef2fc] rounded-xl px-5 py-3 text-sm font-bold text-[#141d4a] border border-indigo-100">
                Dimension
              </div>

              {comparisonRows.map((row, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 p-5 space-y-3 shadow-2xs">
                  <div>
                    <h4 className="text-sm font-bold text-[#0f173b]">{row.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{row.subtitle}</p>
                  </div>

                  <div className="bg-[#f3f5fd] rounded-xl p-3.5 text-xs text-slate-700 leading-relaxed border border-slate-200/60">
                    <span className="font-bold text-slate-600 block mb-0.5">Conventional:</span>
                    {row.conventional}
                  </div>

                  <div className="bg-[#e9edfb] rounded-xl p-3.5 text-xs text-[#141d4a] font-medium leading-relaxed border border-indigo-100">
                    <span className="font-bold text-indigo-900 block mb-0.5">FIIT Incubation:</span>
                    {row.fiit}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 5. Governing Council Section (Matches Stitch Preview Reference with Crystal Clear HD Photos!) */}
        <section className="py-16 bg-[#f5f6fc] border-t border-slate-200/80 w-full" id="council-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
              <div className="max-w-3xl">
                <span className="text-[11px] font-bold tracking-widest text-[#b45309] uppercase">
                  GOVERNING COUNCIL
                </span>
                <h2 className="text-3xl font-extrabold text-[#090e29] mt-1.5 tracking-tight">
                  Guided by Industry Practitioners
                </h2>
                <p className="text-[15px] text-[#334155] mt-2 font-normal">
                  Our curriculum and executive leadership combine enterprise architectural credibility with real software production heritage.
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 text-xs font-bold text-slate-800 shadow-2xs self-start md:self-auto">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Industry Active Council</span>
              </div>
            </div>

            {/* 4 Crystal-Clear Leadership Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {governingCouncil.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Photo with external link icon overlay */}
                    <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500" 
                        loading="eager"
                      />
                      <button 
                        onClick={() => handleOpenBio(member)}
                        className="absolute top-2.5 right-2.5 w-7 h-7 rounded-md bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-700 shadow-2xs hover:bg-white transition-colors cursor-pointer"
                        title="View Profile Details"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="p-5">
                      <span className="text-xs font-bold text-[#b45309]">
                        {member.role}
                      </span>
                      <h3 className="text-base font-bold text-[#090e29] mt-1 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                    <span className="truncate mr-2 font-medium">Domain: {member.domain.split('&')[0]}</span>
                    <button 
                      onClick={() => handleOpenBio(member)}
                      className="text-[#141d4a] hover:text-indigo-600 font-bold flex items-center gap-1 flex-shrink-0 cursor-pointer"
                    >
                      <span>Bio</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 6. Enterprise Facility Standards (Matches Stitch Screenshot 4 & 5) */}
        <section className="py-16 bg-[#f5f6fc] border-t border-slate-200/80 w-full" id="facilities-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            <div className="max-w-3xl mb-10">
              <span className="text-[11px] font-bold tracking-widest text-[#b45309] uppercase">
                ENTERPRISE FACILITY STANDARDS
              </span>
              <h2 className="text-3xl font-extrabold text-[#090e29] mt-1.5 tracking-tight">
                Infrastructure Engineered for Enterprise Readiness
              </h2>
              <p className="text-[15px] text-[#334155] mt-2 font-normal">
                Our physical facilities mimic corporate development environments to remove culture shock on your first day of professional employment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Facility 1 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#eef3fd] flex items-center justify-center text-[#141d4a] mb-4">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#090e29] mb-1.5">
                    Multi-Core Linux Workstations
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Dual-monitor development setups running Ubuntu/Debian, NVMe storage, and zero-latency access to private repositories.
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200/80">
                  <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                    STANDARD: 32GB RAM / I7 MULTI-CORE
                  </span>
                </div>
              </div>

              {/* Facility 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#eef3fd] flex items-center justify-center text-[#141d4a] mb-4">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#090e29] mb-1.5">
                    Dedicated Sandbox Clusters
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Internal bare-metal servers hosting Kubernetes clusters, real-time telemetry metrics, and high-throughput databases.
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200/80">
                  <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                    SIMULATED CLOUD STACKS
                  </span>
                </div>
              </div>

              {/* Facility 3 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#eef3fd] flex items-center justify-center text-[#141d4a] mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#090e29] mb-1.5">
                    Collaborative War Rooms
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Agile standup spaces outfitted with magnetic architectural whiteboards and video-conferencing for remote sprint demos.
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200/80">
                  <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                    DAILY SCRUM &amp; CODE DEFENSE
                  </span>
                </div>
              </div>

              {/* Facility 4 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#eef3fd] flex items-center justify-center text-[#141d4a] mb-4">
                    <Network className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#090e29] mb-1.5">
                    9 Strategic Tech Hubs
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Easily accessible campuses across Chennai and Tamil Nadu ensuring zero commuting friction for aspiring software engineers.
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-200/80">
                  <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                    STANDARDIZED EQUIPMENT ACROSS HUBS
                  </span>
                </div>
              </div>

            </div>

            {/* Active Campus Locations Bar (Matches Stitch Screenshot 5) */}
            <div className="mt-6 bg-white rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 border border-slate-200/80 shadow-2xs" id="branches-section">
              <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider flex-shrink-0">
                ACTIVE CAMPUS LOCATIONS:
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-slate-800 w-full">
                {campusLocations.map((loc) => (
                  <span 
                    key={loc}
                    onClick={() => handleOpenEnquire(`Visit ${loc} Campus`)}
                    className="bg-[#f1f3fa] px-3 py-1 rounded-lg border border-slate-200 hover:text-indigo-600 hover:border-indigo-300 cursor-pointer transition-colors text-[11.5px] shadow-2xs"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 7. Quality Assurance Section (Matches Stitch Screenshot 5 & 7) */}
        <section className="py-16 bg-[#f5f6fc] border-t border-slate-200/80 w-full" id="qa-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            {/* Outer Pure White Container */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-2xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Col */}
              <div className="lg:col-span-5 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold tracking-widest text-[#b45309] uppercase">
                  QUALITY ASSURANCE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090e29] tracking-tight leading-snug">
                  Institutional Integrity &amp; Standards
                </h2>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
                  Every curriculum module, evaluation gateway, and internship track is benchmarked against national and international software workforce guidelines.
                </p>
              </div>

              {/* Right 2x2 Grid of 4 Soft-Lavender Tinted Cards (#f0f3fa) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* QA 1 */}
                <div className="bg-[#f0f3fa] rounded-2xl p-5 border border-slate-200/60 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100/70 flex items-center justify-center text-indigo-700 flex-shrink-0 mt-0.5">
                      <span className="font-bold text-xs">@</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#090e29]">ISO 9001:2015 Certified</h4>
                      <p className="text-[11.5px] text-slate-600 mt-1 leading-relaxed">
                        Standardized technical training protocols, curriculum revision cycles, and lab uptime guarantees.
                      </p>
                    </div>
                  </div>
                </div>

                {/* QA 2 */}
                <div className="bg-[#f0f3fa] rounded-2xl p-5 border border-slate-200/60 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100/70 flex items-center justify-center text-indigo-700 flex-shrink-0 mt-0.5">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#090e29]">Strict Anti-Plagiarism Protocol</h4>
                      <p className="text-[11.5px] text-slate-600 mt-1 leading-relaxed">
                        Automated Git AST code analysis ensures each student writes unique, self-authored software artifacts.
                      </p>
                    </div>
                  </div>
                </div>

                {/* QA 3 */}
                <div className="bg-[#f0f3fa] rounded-2xl p-5 border border-slate-200/60 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100/70 flex items-center justify-center text-indigo-700 flex-shrink-0 mt-0.5">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#090e29]">Transparent Placement Audit</h4>
                      <p className="text-[11.5px] text-slate-600 mt-1 leading-relaxed">
                        Verifiable corporate placement registries. Zero false promises, zero non-technical sales gimmicks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* QA 4 */}
                <div className="bg-[#f0f3fa] rounded-2xl p-5 border border-slate-200/60 shadow-2xs">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-100/70 flex items-center justify-center text-indigo-700 flex-shrink-0 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#090e29]">University Aligned Frameworks</h4>
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

        {/* 8. Take The Next Step CTA Banner (Matches Stitch Screenshot 7 & 8) */}
        <section className="bg-[#0f173b] py-14 text-white w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="max-w-2xl">
                <span className="text-[11px] font-bold tracking-widest text-[#f59e0b] uppercase">
                  TAKE THE NEXT STEP
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1.5 leading-tight tracking-tight">
                  Ready to Experience Practical Tech Training?
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  Schedule an in-person walk-through of our terminal labs, observe an active code review session, and speak with our academic director.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleOpenEnquire('Schedule Campus Visit')}
                  className="bg-[#f59e0b] hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-lg text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-slate-900" />
                  <span>Schedule Campus Visit</span>
                </button>

                <button
                  onClick={() => handleOpenEnquire('Enquire for Next Cohort')}
                  className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-5 py-3 rounded-lg text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Enquire for Next Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer matching Screenshot 8 */}
      <div id="footer-section" className="w-full max-w-full">
        <Footer 
          onNavigate={handleNavigate}
          onOpenEnquire={handleOpenEnquire}
        />
      </div>

      {/* Interactive Admission Enquiry Modal */}
      <EnquireModal 
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        defaultTopic={enquireTopic}
      />

      {/* Interactive Leadership Bio Modal */}
      <BioModal 
        isOpen={bioOpen}
        onClose={() => setBioOpen(false)}
        member={selectedBioMember}
      />

    </div>
  );
}
