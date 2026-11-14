'use client';

import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { FIIT_EDGE_STAGES } from '../data/stitchData';

export default function FiitEdgeFramework() {
  const [activeStage, setActiveStage] = useState(null);

  return (
    <section id="fiit-edge" className="py-16 sm:py-24 bg-[#12163b] text-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-md bg-[#ffedd5]/15 border border-[#ea580c]/30 text-[#fdba74] text-[10.5px] font-extrabold tracking-wider uppercase mb-3">
            PROPRIETARY INCUBATION FRAMEWORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white leading-tight">
            Don't Create Trainers. Create Capable Professionals.
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            FIIT EDGE is our rigorous multi-stage candidate development pipeline, bridging institutional talent with verified corporate deployment opportunities.
          </p>
        </div>

        {/* 8 Horizontal Step Cards in a Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 mb-10">
          {FIIT_EDGE_STAGES.map((stage, idx) => {
            const isSelected = activeStage === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveStage(activeStage === idx ? null : idx)}
                className={`rounded-xl p-3 sm:p-3.5 border text-center transition-all duration-300 cursor-pointer select-none ${
                  isSelected
                    ? 'bg-[#3b1f48] border-pink-400 shadow-xl -translate-y-1'
                    : stage.highlight
                    ? 'bg-[#3f273d] border-slate-700/60 hover:border-slate-400 hover:-translate-y-1'
                    : 'bg-[#1b204e] border-slate-700/60 hover:border-slate-400 hover:bg-[#222961] hover:-translate-y-1'
                }`}
              >
                <span className="text-[11px] font-mono font-bold text-slate-400 block mb-1">
                  {stage.step}
                </span>
                <h4 className="text-xs sm:text-sm font-extrabold text-white mb-1 tracking-tight">
                  {stage.name}
                </h4>
                <p className="text-[10px] sm:text-[10.5px] text-slate-400 leading-tight">
                  {stage.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Institutional Notice Card */}
        <div className="bg-[#1b204e]/90 rounded-xl p-4 sm:p-5 border border-slate-700/80 flex items-start gap-3.5 text-xs text-slate-300 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white font-semibold">Institutional Notice:</strong> Paid internship and deployment opportunities depend strictly on entrance selection, eligibility benchmarks, client cohort availability, and individual assessment performance.
          </p>
        </div>

      </div>
    </section>
  );
}
