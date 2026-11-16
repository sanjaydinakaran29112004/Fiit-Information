'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import StitchFooter from '../components/StitchFooter';
import EnquireModal from '../components/EnquireModal';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  ChevronRight, 
  AlertCircle, 
  Briefcase, 
  Award, 
  Terminal, 
  Cpu, 
  Layers, 
  Sparkles,
  Building,
  Target,
  FileCheck
} from 'lucide-react';
import { FIIT_EDGE_STAGES } from '../data/stitchData';

export default function FiitEdgePage() {
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [activeStageIndex, setActiveStageIndex] = useState(5); // Default to Paid Intern

  const handleOpenEnquire = (topic = 'FIIT EDGE Inquiry') => {
    setEnquireModalOpen(true);
  };

  const stagesExtended = [
    {
      num: '01',
      title: 'Campaign',
      subtitle: 'Aptitude Outreach',
      phase: 'Candidate Screening',
      desc: 'Extensive outreach across 75+ accredited engineering colleges and university hubs to identify high-potential technical problem-solvers.',
      metrics: 'Top 15% selection ratio from university applicant pools.',
      activities: ['Logical thinking benchmarks', 'Basic coding fundamentals test', 'Analytical problem solving']
    },
    {
      num: '02',
      title: 'Assessment',
      subtitle: 'Baseline Diagnostic',
      phase: 'Skills Profiling',
      desc: 'Rigorous baseline coding diagnostic testing fundamental algorithm comprehension, computational logic, and algorithmic grit.',
      metrics: 'Standardized 90-minute live online and lab diagnostic.',
      activities: ['Syntax proficiency test', 'Control flow & loop structures', 'Debugging live code anomalies']
    },
    {
      num: '03',
      title: 'Identify',
      subtitle: 'Domain Mapping',
      phase: 'Technical Specialization',
      desc: 'Mapping candidates into dedicated specialization tracks: Enterprise Full Stack, Data & AI Engineering, Cloud DevOps, or Core Systems.',
      metrics: '1-on-1 architecture counseling with technical leads.',
      activities: ['Aptitude-domain correlation', 'Personalized career roadmap', 'Prerequisite lab preparation']
    },
    {
      num: '04',
      title: 'Develop',
      subtitle: 'Intensive Labs',
      phase: 'Sprint Immersion',
      desc: '12-16 weeks of production-grade immersion inside dual-monitor labs. Zero textbook theory; 100% terminal-driven development.',
      metrics: '400+ hours of mandatory terminal development.',
      activities: ['Microservices architecture', 'PostgreSQL / MongoDB schema design', 'Docker containerized workflows']
    },
    {
      num: '05',
      title: 'Demonstrate',
      subtitle: 'Live Tech Sprints',
      phase: 'Code Defense',
      desc: 'Candidates deploy end-to-end applications to live cloud servers and defend architecture, security, and scalability decisions.',
      metrics: 'Minimum 2 live public cloud deployments required.',
      activities: ['Live oral architectural defense', 'Peer code review response', 'Load testing & latency profiling']
    },
    {
      num: '06',
      title: 'Paid Intern',
      subtitle: 'Stipend Projects',
      phase: 'Corporate Incubation',
      isHighlight: true,
      desc: 'Top-performing candidates transition into paid corporate client internships, working on production repositories under corporate leads.',
      metrics: 'Monthly performance stipend with client repo access.',
      activities: ['Live client Jira tickets', 'Agile scrum sprint rituals', 'Real pull requests into client repos']
    },
    {
      num: '07',
      title: 'Performance',
      subtitle: 'KPI Validation',
      phase: 'Velocity Benchmarking',
      desc: 'Strict tracking of candidate velocity, code quality gates, test coverage, and documentation standards in real sprint environments.',
      metrics: '95%+ SonarQube quality gate passing requirement.',
      activities: ['Sprint velocity metrics', 'Test-driven development (TDD)', 'Peer collaboration rubrics']
    },
    {
      num: '08',
      title: 'Deploy',
      subtitle: 'Corporate Entry',
      phase: 'Final Onboarding',
      isDeploy: true,
      desc: 'Verified deployment into full-time corporate software engineering roles with partner GCCs and tier-1 tech enterprises.',
      metrics: 'Immediate day-1 billability for corporate hiring partners.',
      activities: ['Corporate HR onboarding', 'Direct team placement', 'Quarterly post-placement check-ins']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0e1338] text-white font-sans selection:bg-[#ea580c] selection:text-white w-full">
      
      {/* 1. Header */}
      <Header activePage="fiit-edge" onOpenEnquire={handleOpenEnquire} />

      <main className="w-full">
        
        {/* Breadcrumb strip */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
            <Link href="/" className="hover:text-white flex items-center gap-1 text-slate-400 font-semibold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-bold">FIIT EDGE Framework</span>
          </div>
        </div>

        {/* 2. Hero Section (Deep Navy Theme Matching Stitch Prototype) */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#ea580c] uppercase tracking-wider">
              <span>PROPRIETARY INCUBATION FRAMEWORK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Don&apos;t Create Trainers. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-white">
                Create Capable Professionals.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              FIIT EDGE is our rigorous multi-stage candidate development pipeline, bridging institutional talent with verified corporate deployment opportunities across top multinational IT enterprises.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleOpenEnquire('FIIT EDGE Screening')}
                className="btn-interactive px-6 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all"
              >
                Apply for FIIT EDGE Evaluation
              </button>
              <Link
                href="/placements"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold rounded-xl border border-white/20 transition-all"
              >
                View Verified Placements
              </Link>
            </div>
          </div>
        </section>

        {/* 3. The 8 Stages Horizontal Pipeline Grid */}
        <section className="py-12 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-1">
              THE 8-STAGE END-TO-END PIPELINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Click Any Stage to Inspect Verification Criteria
            </h2>
          </div>

          {/* 8 Cards Horizontal Responsive Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
            {stagesExtended.map((stage, idx) => {
              const isSelected = activeStageIndex === idx;
              let borderClass = 'border-white/10 bg-white/5 hover:bg-white/10';
              if (stage.isHighlight) {
                borderClass = 'border-purple-400/80 bg-purple-950/40 text-purple-200';
              } else if (stage.isDeploy) {
                borderClass = 'border-emerald-500/80 bg-emerald-950/40 text-emerald-200';
              }

              if (isSelected) {
                borderClass = 'border-[#ea580c] bg-white/15 ring-2 ring-[#ea580c] shadow-lg -translate-y-1';
              }

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-32 ${borderClass}`}
                >
                  <div className="text-[11px] font-mono font-bold text-slate-400">
                    {stage.num}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-black text-white leading-tight">
                      {stage.title}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                      {stage.subtitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stage Details Focus Box */}
          <div className="bg-[#12163b] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-black text-[#ea580c] font-mono">
                    Stage {stagesExtended[activeStageIndex].num}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-slate-300">
                    {stagesExtended[activeStageIndex].phase}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {stagesExtended[activeStageIndex].title} — {stagesExtended[activeStageIndex].subtitle}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {stagesExtended[activeStageIndex].desc}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                    Key Pipeline Activities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {stagesExtended[activeStageIndex].activities.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10 text-xs text-slate-200">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Quality &amp; Gate Metric:
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {stagesExtended[activeStageIndex].metrics}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Corporate Partner Integration:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Corporate hiring panels review candidate artifacts and commit velocity directly from our private GitLab instances.
                  </p>
                </div>

                <button
                  onClick={() => handleOpenEnquire(`FIIT EDGE Stage ${stagesExtended[activeStageIndex].num}`)}
                  className="btn-interactive w-full py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
                >
                  Apply for Evaluation Benchmark
                </button>
              </div>

            </div>
          </div>

          {/* Institutional Notice Strip */}
          <div className="mt-8 bg-[#161c47] border border-white/15 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-white block sm:inline mr-1">Institutional Notice:</strong>
              Paid internship and corporate deployment opportunities depend strictly on entrance selection, eligibility benchmarks, client cohort availability, and individual assessment performance.
            </div>
          </div>

        </section>

        {/* 4. Why Enterprise Employers Prefer FIIT EDGE */}
        <section className="py-16 bg-[#090d29] border-t border-white/10">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                CORPORATE CALIBRATION
              </span>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Why Employers Hire EDGE Graduates
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Zero Onboarding Overhead',
                  desc: 'Graduates enter teams with production git hygiene, pull request experience, and Docker proficiency, eliminating months of corporate retraining.'
                },
                {
                  title: 'Verified Code Repositories',
                  desc: 'Every candidate portfolio is backed by public commits, automated test coverage, and live cloud URLs rather than static resume bullet points.'
                },
                {
                  title: 'High Cultural Calibration',
                  desc: 'Trainees are vetted for professional communication, sprint retrospectives, standups, and defensive architecture reviews before corporate deployment.'
                }
              ].map((adv, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-[#ea580c] mb-4 font-black">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{adv.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA Section */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Take the FIIT EDGE Diagnostic Challenge
            </h2>
            <p className="text-xs sm:text-sm text-orange-100 max-w-xl mx-auto">
              Evaluate your current programming logic against corporate benchmarks. Receive a customized technical roadmap.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleOpenEnquire('FIIT EDGE Diagnostic')}
                className="px-7 py-3.5 bg-[#1a1f4b] hover:bg-[#131738] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all cursor-pointer"
              >
                Register for Baseline Assessment
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
          initialProgram="FIIT EDGE Incubation Framework"
          onClose={() => setEnquireModalOpen(false)}
        />
      )}

    </div>
  );
}


