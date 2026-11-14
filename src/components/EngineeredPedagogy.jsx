import React from 'react';
import { PEDAGOGY_PHASES } from '../data/stitchData';

export default function EngineeredPedagogy() {
  return (
    <section id="methodology" className="py-16 sm:py-24 bg-[#f8f9fd] border-b border-slate-200/80">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
            ENGINEERED PEDAGOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f4b] tracking-tight">
            From Learning to Professional Excellence
          </h2>
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
            Our five-phase learning framework transforms academic theoretical memory into proven technical capability.
          </p>
        </div>

        {/* 5 Phase Cards in a Grid / Flex Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {PEDAGOGY_PHASES.map((p, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-between"
            >
              <div>
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full bg-[#1a1f4b] text-white flex items-center justify-center font-black text-lg mb-4 shadow-sm">
                  {p.num}
                </div>

                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#ea580c] block mb-1">
                  {p.phase}
                </span>

                <h3 className="text-base font-extrabold text-[#1a1f4b] mb-2 tracking-tight">
                  {p.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
