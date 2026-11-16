import React from 'react';
import { Code, Share2, Layers, Users, FileCheck, Compass } from 'lucide-react';
import { WHY_CHOOSE_CARDS } from '../data/stitchData';

export default function WhyChooseFiit() {
  const iconList = {
    Code: <Code className="w-5 h-5 text-indigo-600" />,
    Share2: <Share2 className="w-5 h-5 text-amber-600" />,
    Layers: <Layers className="w-5 h-5 text-emerald-600" />,
    Users: <Users className="w-5 h-5 text-purple-600" />,
    FileCheck: <FileCheck className="w-5 h-5 text-indigo-600" />,
    Compass: <Compass className="w-5 h-5 text-emerald-600" />
  };

  return (
    <section id="why-choose" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
            THE FIIT ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f4b] tracking-tight">
            Why Choose FIIT?
          </h2>
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
            Engineered from the ground up to eradicate the gap between theoretical graduation and actual technical hiring needs.
          </p>
        </div>

        {/* 6 Cards Grid (3 cols x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#f8f9fd] rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 shadow-xs">
                {iconList[card.icon]}
              </div>

              <h3 className="text-base font-extrabold text-[#1a1f4b] mb-2 tracking-tight group-hover:text-indigo-900 transition-colors">
                <span className="title-hover-underline">{card.title}</span>
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
