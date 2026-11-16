'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import StitchFooter from '../components/StitchFooter';
import EnquireModal from '../components/EnquireModal';
import { 
  Terminal, 
  Code2, 
  Layers, 
  FileCode, 
  Presentation, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  ChevronRight, 
  Cpu, 
  GitBranch, 
  ShieldCheck, 
  Clock, 
  Users, 
  Workflow, 
  Laptop, 
  Server, 
  FileText
} from 'lucide-react';
import { PEDAGOGY_PHASES } from '../data/stitchData';

export default function MethodologyPage() {
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState(0);

  const handleOpenEnquire = (topic = 'Methodology Inquiry') => {
    setEnquireModalOpen(true);
  };

  const detailedPhases = [
    {
      step: '01',
      title: 'LEARN',
      name: 'Architecture Deconstruction',
      duration: 'Week 1 - 2',
      badge: 'Foundation',
      desc: 'Structured trainer-led sessions dissecting architectural concepts, algorithmic mental models, and production system blueprints.',
      deliverables: [
        'Component & Data Flow Diagrams',
        'State Management mental models',
        'Algorithmic Complexity (Big O) drills',
        'Linux Terminal & Shell scripting basics'
      ],
      tools: ['Docker', 'Linux Bash', 'Mermaid.js', 'VS Code']
    },
    {
      step: '02',
      title: 'PRACTICE',
      name: 'Intensive Syntax & Coding Drills',
      duration: 'Week 3 - 4',
      badge: 'Muscle Memory',
      desc: 'Intensive hands-on coding exercises, syntax drills, debugging challenges, and time-boxed algorithm katas.',
      deliverables: [
        '50+ Algorithmic Kata challenges',
        'RESTful API error handling routines',
        'Relational Schema normalization',
        'Async programming & event loop mastery'
      ],
      tools: ['Node.js', 'Postman', 'PostgreSQL', 'Jest']
    },
    {
      step: '03',
      title: 'BUILD',
      name: 'Functional Enterprise Applications',
      duration: 'Week 5 - 8',
      badge: 'Production Build',
      desc: 'Applying modern frameworks into real, functional enterprise projects with connected databases, authentication, and background jobs.',
      deliverables: [
        'Multi-tenant SaaS boilerplate',
        'JWT / OAuth2 authentication pipeline',
        'Database migration and ORM seeds',
        'Containerized microservice architecture'
      ],
      tools: ['React', 'Next.js', 'Spring Boot / Express', 'Redis', 'Docker']
    },
    {
      step: '04',
      title: 'DOCUMENT',
      name: 'Technical Writing & Architecture Specs',
      duration: 'Week 9 - 10',
      badge: 'Engineering Hygiene',
      desc: 'Writing clean code comments, architecture diagrams, OpenAPI/Swagger specifications, and professional GitHub READMEs.',
      deliverables: [
        'OpenAPI 3.0 / Swagger Interactive Docs',
        'Enterprise System README with setup scripts',
        'C4 Architecture system diagrams',
        'Git branch protection & commit convention'
      ],
      tools: ['Swagger', 'Markdown', 'Git', 'SonarQube']
    },
    {
      step: '05',
      title: 'PRESENT',
      name: 'Oral Defense & Sprint Demos',
      duration: 'Week 11 - 12',
      badge: 'Peer Review',
      desc: 'Technical sprint demos defending design decisions, schema choices, and trade-offs before senior corporate engineering panels.',
      deliverables: [
        '15-minute live architecture defense',
        'Pull Request (PR) code review response',
        'Load testing & bottleneck profiling',
        'Edge case resilience verification'
      ],
      tools: ['K6', 'GitHub PRs', 'Loom', 'Chrome DevTools']
    },
    {
      step: '06',
      title: 'GROW',
      name: 'Career Acceleration & Industry Readiness',
      duration: 'Week 13+',
      badge: 'Placement Phase',
      desc: 'Professional interview readiness, technical whiteboard challenges, system design rounds, and corporate hiring drives.',
      deliverables: [
        'Verified repo-backed portfolio on GitHub',
        'Live deployed portfolio on Cloud (AWS/Vercel)',
        'System design mock interview clearances',
        'Direct referral to 150+ corporate hiring partners'
      ],
      tools: ['AWS', 'Vercel', 'LinkedIn', 'LeetCode']
    }
  ];

  const dailySchedule = [
    { time: '09:00 AM - 09:30 AM', title: 'Daily Engineering Standup', desc: 'Sync on sprint blockers, git status, and daily development targets with lab peers.' },
    { time: '09:30 AM - 12:30 PM', title: 'Deep Architectural Lecture & Live Coding', desc: 'Trainer-led breakdown of architectural concepts with real-time IDE projection and terminal execution.' },
    { time: '01:30 PM - 04:30 PM', title: 'Lab Immersion & Sprint Building', desc: 'Intensive coding on assigned microservice features, unit testing, and Docker environment setup.' },
    { time: '04:30 PM - 05:30 PM', title: 'Peer PR Review & Code Refactoring', desc: 'Reviewing branch pull requests, identifying anti-patterns, and verifying SonarQube quality gates.' },
    { time: '05:30 PM - 06:30 PM', title: 'Daily Git Push & Automated CI Validation', desc: 'Committing code to personal portfolio repos with passing build tests.' }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fd] text-slate-900 font-sans selection:bg-[#1a1f4b] selection:text-white w-full">
      
      {/* 1. Header */}
      <Header activePage="methodology" onOpenEnquire={handleOpenEnquire} />

      <main className="w-full">
        
        {/* Breadcrumb strip */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1a1f4b] flex items-center gap-1 text-slate-600 font-semibold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#1a1f4b] font-bold">Engineered Pedagogy</span>
          </div>
        </div>

        {/* 2. Hero Section */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"></span>
              <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                ENGINEERED PEDAGOGY • SIX PHASES OF RIGOR
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f4b] tracking-tight leading-tight">
              From Academic Memory to <br className="hidden sm:inline" />
              <span className="text-[#ea580c]">Enterprise Execution.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Conventional institutes deliver lectures. FIIT replicates a modern corporate software sprint environment. Every concept is coded, containerized, documented, defended, and pushed to production.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleOpenEnquire('Methodology Walkthrough')}
                className="btn-interactive px-6 py-3.5 bg-[#1a1f4b] hover:bg-[#131738] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all"
              >
                Experience a Live Lab Session
              </button>
              <Link
                href="/programs/professional"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#1a1f4b] border border-slate-300 text-xs sm:text-sm font-bold rounded-xl transition-all"
              >
                Explore Curricula
              </Link>
            </div>
          </div>
        </section>

        {/* 3. The 6 Phases Detailed Interactive Deep Dive */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                STRUCTURED CANDIDATE LIFECYCLE
              </span>
              <h2 className="text-3xl font-black text-[#1a1f4b] tracking-tight">
                The 6-Phase Learning Framework
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Click any phase below to inspect the weekly milestones, required deliverables, and tooling stack.
              </p>
            </div>

            {/* Horizontal Phase Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
              {detailedPhases.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPhase(idx)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedPhase === idx
                      ? 'bg-[#1a1f4b] text-white border-[#1a1f4b] shadow-md -translate-y-1'
                      : 'bg-[#f8f9fd] text-slate-700 border-slate-200 hover:bg-white'
                  }`}
                >
                  <div className={`text-xs font-bold uppercase tracking-wider ${selectedPhase === idx ? 'text-[#ea580c]' : 'text-slate-400'}`}>
                    PHASE {phase.step}
                  </div>
                  <div className="text-base font-black mt-1 leading-tight">{phase.title}</div>
                  <div className={`text-[11px] mt-1 truncate ${selectedPhase === idx ? 'text-slate-300' : 'text-slate-500'}`}>
                    {phase.badge}
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Phase Feature Display Box */}
            <div className="bg-[#f8f9fd] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1a1f4b] text-white text-xs font-bold">
                    <span>Phase {detailedPhases[selectedPhase].step}</span>
                    <span>•</span>
                    <span className="text-amber-400">{detailedPhases[selectedPhase].duration}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#1a1f4b]">
                    {detailedPhases[selectedPhase].title}: {detailedPhases[selectedPhase].name}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {detailedPhases[selectedPhase].desc}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                      Core Engineering Deliverables:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {detailedPhases[selectedPhase].deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-800 font-medium">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 space-y-5">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Tools &amp; Workspaces Used:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {detailedPhases[selectedPhase].tools.map((tool, tIdx) => (
                        <span key={tIdx} className="px-3 py-1.5 rounded-lg bg-indigo-50 text-[#1a1f4b] text-xs font-bold border border-indigo-100">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Corporate Calibration Benchmark:
                    </span>
                    <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 text-xs text-amber-900 leading-relaxed">
                      Candidates must pass the oral defense and static code quality benchmark before progressing to Phase {parseInt(detailedPhases[selectedPhase].step) + 1}.
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenEnquire(`Phase ${detailedPhases[selectedPhase].step} Curriculum`)}
                    className="w-full py-3 bg-[#1a1f4b] hover:bg-[#131738] text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Download Phase Syllabus</span>
                    <FileText className="w-4 h-4 text-[#ea580c]" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* 4. A Day in the Life of a FIIT Trainee */}
        <section className="py-16 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
              STUDENT EXPERIENCE &amp; LAB DISCIPLINE
            </span>
            <h2 className="text-3xl font-black text-[#1a1f4b] tracking-tight">
              A Day in the Life of a Trainee
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every day is structured like an active engineering sprint at a tier-1 IT product enterprise.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {dailySchedule.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-indigo-300 transition-all"
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#1a1f4b] shrink-0 font-black text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#ea580c] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.time}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#1a1f4b] mt-0.5">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Tooling & Automation Stack */}
        <section className="py-16 bg-[#12163b] text-white">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                PRODUCTION-GRADE TOOLING
              </span>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Tools You Will Master in Our Labs
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                We eliminate localhost illusions. You build inside containerized workspaces with production pipelines.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Docker', role: 'Containerization', icon: <Server className="w-6 h-6 text-blue-400" /> },
                { name: 'Git & GitHub', role: 'Version Control', icon: <GitBranch className="w-6 h-6 text-orange-400" /> },
                { name: 'SonarQube', role: 'Code Quality Gates', icon: <ShieldCheck className="w-6 h-6 text-emerald-400" /> },
                { name: 'Postman / REST', role: 'API Testing & Specs', icon: <Layers className="w-6 h-6 text-amber-400" /> },
                { name: 'Jest / PyTest', role: 'Automated Testing', icon: <FileCode className="w-6 h-6 text-red-400" /> },
                { name: 'Linux Terminal', role: 'Shell Mastery', icon: <Terminal className="w-6 h-6 text-purple-400" /> }
              ].map((tool, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors">
                  <div className="mb-3">{tool.icon}</div>
                  <div className="text-sm font-bold text-white">{tool.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{tool.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA Banner */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 text-center space-y-4 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1a1f4b] tracking-tight">
              Ready to Upgrade Your Engineering Muscle?
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Book a live demo session with our technical leads and witness our terminal-driven lab environment in action.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => handleOpenEnquire('Lab Demo Request')}
                className="btn-interactive px-7 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md cursor-pointer"
              >
                Schedule Free Lab Demo
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
          initialProgram="Engineered Pedagogy Lab Demo"
          onClose={() => setEnquireModalOpen(false)}
        />
      )}

    </div>
  );
}


