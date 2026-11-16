'use client';

import React, { useState } from 'react';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';
import { PROGRAM_CATEGORIES, PROGRAMS } from '../data/stitchData';

export default function ExplorePrograms({ onOpenEnquire, onOpenSyllabus }) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPrograms = PROGRAMS.filter(p => {
    if (activeTab === "All") return true;
    return p.category === activeTab;
  });

  const badgeColorMap = {
    purple: "bg-purple-100/70 text-purple-800 border-purple-200",
    orange: "bg-amber-100/70 text-amber-900 border-amber-200",
    green: "bg-emerald-100/70 text-emerald-800 border-emerald-200",
    red: "bg-rose-100/70 text-rose-800 border-rose-200"
  };

  return (
    <section id="programs" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Category Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
              CURATED CURRICULA
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f4b] tracking-tight">
              Explore Our Programs
            </h2>
            <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
              Engineered around market-tested technology stacks required by product companies and Tier-1 IT services.
            </p>
          </div>

          {/* Filter Tabs Pills with Smooth Hover Animation */}
          <div className="w-full lg:w-auto max-w-full overflow-x-auto no-scrollbar pb-1 self-start lg:self-end">
            <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#f1f3f9] rounded-xl shadow-inner whitespace-nowrap">
              {PROGRAM_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3.5 sm:px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap active:scale-95 shrink-0 ${
                    activeTab === cat
                      ? 'bg-white text-[#1a1f4b] shadow-sm scale-102'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 9 Course Cards Grid with Interactive Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((course) => (
            <div 
              key={course.id}
              className="interactive-card bg-[#f8f9fd] rounded-2xl p-6 border border-slate-200/80 hover:bg-white flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Top Badge & Code */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <span className={`text-[10.5px] font-bold px-2.5 py-0.5 rounded-md border ${badgeColorMap[course.badgeType]} transition-transform group-hover:scale-105 duration-200`}>
                    {course.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-semibold group-hover:text-slate-600 transition-colors">
                    {course.code}
                  </span>
                </div>

                {/* Title with Subtle Hover Color Shift and Moving Underline */}
                <h3 className="text-lg font-bold text-[#1a1f4b] mb-2 group-hover:text-indigo-900 transition-colors">
                  <span className="title-hover-underline">{course.title}</span>
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed min-h-[50px]">
                  {course.description}
                </p>

                {/* Meta Row */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-slate-600 mb-6">
                  <Clock className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  <span>{course.duration} • {course.mode}</span>
                </div>
              </div>

              {/* Action Buttons Row with Interactive Shine */}
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => onOpenEnquire(course.title)}
                  className="btn-interactive py-2.5 px-3 rounded-lg bg-[#1a1f4b] hover:bg-[#12163b] text-white text-xs font-bold tracking-wide shadow-sm text-center"
                >
                  Enquire Now
                </button>

                <button
                  onClick={() => onOpenSyllabus(course)}
                  className="py-2.5 px-3 rounded-lg bg-[#ede9fe] hover:bg-[#e0e7ff] text-[#1a1f4b] text-xs font-bold tracking-wide transition-all text-center hover:scale-102 active:scale-98 flex items-center justify-center gap-1"
                >
                  <BookOpen className="w-3 h-3 text-indigo-700" />
                  <span>Syllabus</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
