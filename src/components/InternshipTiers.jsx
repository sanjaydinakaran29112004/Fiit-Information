import React, { useState } from 'react';
import { 
  Code2, 
  Check, 
  FileText, 
  Layers, 
  Database, 
  CheckCircle2, 
  Cloud, 
  Users 
} from 'lucide-react';
import { INTERNSHIP_TIERS } from '../data/stitchData';

export default function InternshipTiers({ onOpenEnquire }) {
  const [activeTier, setActiveTier] = useState(null);

  const badgeColors = {
    orange: "bg-amber-100 text-amber-900 border-amber-200",
    purple: "bg-purple-100 text-purple-900 border-purple-200",
    green: "bg-emerald-100 text-emerald-900 border-emerald-200"
  };

  const renderBulletIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <span className="font-mono font-bold text-slate-400 text-xs tracking-tighter shrink-0 mt-0.5">&lt;&gt;</span>;
      case 'CheckCircle':
        return <Check className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />;
      case 'FileText':
        return <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />;
      case 'Layers':
        return <Layers className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />;
      case 'Database':
        return <Database className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />;
      case 'Cloud':
        return <Cloud className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />;
      case 'Users':
        return <Users className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />;
      default:
        return <Check className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />;
    }
  };

  return (
    <section id="internships" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
            TARGETED PROJECT IMMERSIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f4b] tracking-tight">
            Learn by Doing. Grow by Building.
          </h2>
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
            Structured industrial internship durations designed to give collegiate students and engineers verified, repo-backed proof of capability.
          </p>
        </div>

        {/* 3 Column Cards Grid with Interactive Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {INTERNSHIP_TIERS.map((tier, idx) => {
            const isSelected = activeTier === idx;

            return (
              <div
                key={idx}
                onClick={() => setActiveTier(activeTier === idx ? null : idx)}
                className={`rounded-2xl p-7 border flex flex-col justify-between transition-all duration-300 relative group cursor-pointer ${
                  isSelected
                    ? 'bg-white border-indigo-400 shadow-xl -translate-y-2'
                    : tier.popular
                    ? 'bg-white border-slate-200 shadow-md hover:shadow-xl hover:-translate-y-2'
                    : 'bg-[#f8f9fd] border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:bg-white'
                }`}
              >
                {/* Most Popular Floating Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1a1f4b] text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-full shadow pointer-events-none">
                    MOST POPULAR
                  </div>
                )}

                <div>
                  <span className={`inline-block text-[10.5px] font-bold px-2.5 py-0.5 rounded-md border ${badgeColors[tier.levelType]} mb-3 group-hover:scale-105 transition-transform`}>
                    {tier.level}
                  </span>

                  <h3 className="text-2xl font-black text-[#1a1f4b] mb-3 group-hover:text-indigo-900 transition-colors">
                    <span className="title-hover-underline">{tier.title}</span>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {tier.description}
                  </p>

                  {/* Bullets with matching icons from Screenshot 6 */}
                  <div className="space-y-3 pt-4 border-t border-slate-200/60 mb-8">
                    {tier.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        {renderBulletIcon(b.icon)}
                        <span className="leading-snug">{b.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenEnquire(tier.title);
                  }}
                  className={`btn-interactive w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wide transition-all ${
                    tier.popular
                      ? 'bg-[#1a1f4b] hover:bg-[#12163b] text-white shadow-md active:scale-95'
                      : 'bg-[#ede9fe] hover:bg-[#e0e7ff] text-[#1a1f4b]'
                  }`}
                >
                  Internship Details
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
