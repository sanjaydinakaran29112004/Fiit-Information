'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import StitchFooter from '../../../components/StitchFooter';
import EnquireModal from '../../../components/EnquireModal';
import SyllabusModal from '../../../components/SyllabusModal';
import { 
  BookOpen, 
  ArrowRight, 
  CheckCircle, 
  ChevronRight, 
  Clock, 
  Layers, 
  Award, 
  FileText, 
  Search, 
  Terminal, 
  Sparkles,
  Zap,
  Users
} from 'lucide-react';
import { PROGRAM_CATEGORIES, PROGRAMS } from '../../../data/stitchData';

export default function ProfessionalProgramsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [selectedProgramForEnquire, setSelectedProgramForEnquire] = useState('');
  const [selectedProgramForSyllabus, setSelectedProgramForSyllabus] = useState(null);

  const handleOpenEnquire = (programTitle = 'Professional Course') => {
    setSelectedProgramForEnquire(programTitle);
    setEnquireModalOpen(true);
  };

  const handleOpenSyllabus = (program) => {
    setSelectedProgramForSyllabus(program);
  };

  const filteredPrograms = PROGRAMS.filter((prog) => {
    const matchesCategory = activeCategory === 'All' || prog.category === activeCategory;
    const matchesSearch = !searchQuery || 
                          prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (prog.code && prog.code.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (prog.syllabus && prog.syllabus.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8f9fd] text-slate-900 font-sans selection:bg-[#1a1f4b] selection:text-white w-full">
      
      {/* 1. Header with active professional programs */}
      <Header activePage="professional" onOpenEnquire={handleOpenEnquire} />

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
            <span className="text-[#1a1f4b] font-bold">Professional Courses</span>
          </div>
        </div>

        {/* 2. Hero Section */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"></span>
              <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                CURATED ENTERPRISE CURRICULA • 12-16 WEEKS IMMERSION
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f4b] tracking-tight leading-tight">
              Production-Grade Engineering Courses. <br />
              <span className="text-[#ea580c]">Calibrated for Day-1 Billability.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Every course is engineered with corporate hiring leads. You build end-to-end applications, configure cloud infrastructure, and clear technical interview benchmarks.
            </p>
          </div>
        </section>

        {/* 3. Filter Category Tabs + Search Bar */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {PROGRAM_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#1a1f4b] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses, skills, codes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b] transition-all"
              />
            </div>

          </div>
        </section>

        {/* 4. 9 Programs Grid */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => (
              <div 
                key={program.code}
                className="interactive-card bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between group hover:border-indigo-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-[#1a1f4b] text-[11px] font-mono font-extrabold border border-indigo-100">
                      {program.code}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{program.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#1a1f4b] group-hover:text-indigo-900 transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Skills / Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100">
                    <span className="px-2 py-0.5 rounded-md bg-orange-50 text-[#ea580c] text-[10px] font-semibold border border-orange-100">
                      {program.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">
                      {program.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-semibold border border-blue-100">
                      {program.mode}
                    </span>
                  </div>

                  {/* Highlights Bullet */}
                  <div className="mt-4 space-y-1.5 text-[11px] text-slate-700 font-medium">
                    {(program.syllabus || []).slice(0, 2).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleOpenSyllabus(program)}
                    className="py-2.5 px-3 bg-[#ede9fe] hover:bg-[#e0e7ff] text-[#1a1f4b] text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#1a1f4b]" />
                    <span>Syllabus</span>
                  </button>

                  <button
                    onClick={() => handleOpenEnquire(program.title)}
                    className="py-2.5 px-3 bg-[#1a1f4b] hover:bg-[#131738] text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer text-center"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <p className="text-slate-500 text-sm">No courses found matching &quot;{searchQuery}&quot; in {activeCategory}.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-bold text-[#ea580c] underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </section>

        {/* 5. Global Certification Accreditation */}
        <section className="py-16 bg-[#12163b] text-white">
          <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block">
              GLOBAL CERTIFICATION ALIGNMENT
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight">
              Aligned with Industry Benchmark Credentials
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Our curricula prepare candidates to pass globally recognized vendor certifications including AWS Certified Developer, Oracle Certified Java Professional, and Meta Frontend Professional benchmarks.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-3">
              {['AWS Certified Developer', 'Oracle Certified Java SE', 'Meta Certified Frontend', 'PostgreSQL Certified', 'Docker Certified Associate'].map((cert, idx) => (
                <div key={idx} className="bg-white/10 px-4 py-2 rounded-xl text-xs font-bold text-slate-200 border border-white/15">
                  {cert}
                </div>
              ))}
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

      {/* Syllabus Modal */}
      {selectedProgramForSyllabus && (
        <SyllabusModal 
          program={selectedProgramForSyllabus}
          onClose={() => setSelectedProgramForSyllabus(null)}
          onEnquire={(title) => handleOpenEnquire(title)}
        />
      )}

    </div>
  );
}
