import React from 'react';
import Link from 'next/link';
import { Compass, Terminal, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { WHAT_WE_OFFER } from '../data/stitchData';

export default function WhatWeOffer({ onSelectAction }) {
  const iconList = [
    <div key="0" className="w-12 h-12 rounded-full bg-[#1a1f4b] flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
      <Compass className="w-5 h-5" />
    </div>,
    <div key="1" className="w-12 h-12 rounded-full bg-[#ea580c] flex items-center justify-center text-white group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
      <Terminal className="w-5 h-5" />
    </div>,
    <div key="2" className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
      <TrendingUp className="w-5 h-5" />
    </div>
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#f8f9fd] border-b border-slate-200/80">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
            OUR EDUCATIONAL ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f4b] tracking-tight">
            What We Offer
          </h2>
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
            Structured pathways mapped for undergraduate students, fresh graduates, and career changers transitioning into modern software roles.
          </p>
        </div>

        {/* 3 Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WHAT_WE_OFFER.map((track, i) => (
            <div 
              key={i}
              className="interactive-card bg-white rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="mb-4">
                  {iconList[i]}
                </div>

                <span className="text-[11px] font-bold text-[#ea580c] tracking-wider uppercase block mb-1">
                  {track.track}
                </span>

                <h3 className="text-xl font-extrabold text-[#1a1f4b] mb-3 group-hover:text-indigo-900 transition-colors">
                  <span className="title-hover-underline">{track.title}</span>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {track.description}
                </p>

                {/* Bullets with Checkmarks */}
                <div className="space-y-3 pt-4 border-t border-slate-100 mb-8">
                  {track.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={track.action === 'courses' ? '/programs/professional' : track.action === 'internships' ? '/programs/internships' : '/placements'}
                className="w-full py-3 px-4 rounded-xl bg-[#ede9fe] hover:bg-[#e0e7ff] text-[#1a1f4b] text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>{track.cta.replace(' →', '')}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
