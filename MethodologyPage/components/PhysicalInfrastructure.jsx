import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { BRANCHES_DATA } from '../data/stitchData';

export default function PhysicalInfrastructure() {
  return (
    <section id="branches" className="py-16 sm:py-24 bg-[#f8f9fd] border-b border-slate-200/80">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
              PHYSICAL INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f4b] tracking-tight">
              Learn with FIIT Across Multiple Locations
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              9 state-of-the-art training centers across Tamil Nadu with high-speed internet and dedicated lab workstations.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 shadow-xs self-start lg:self-end hover:shadow transition-shadow">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>All Centers Active</span>
          </div>
        </div>

        {/* 9 Branches Grid (3 cols x 3 rows) with Interactive Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANCHES_DATA.map((branch, idx) => (
            <div
              key={idx}
              className="interactive-card bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-[#1a1f4b] group-hover:text-indigo-950 transition-colors">
                    <span className="title-hover-underline">{branch.name}</span>
                  </h3>
                  <div className="w-7 h-7 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-100 transition-all">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed min-h-[36px] mb-3">
                  {branch.address}
                </p>

                <p className="text-[11px] font-medium text-slate-500 mb-5">
                  <a href={`tel:${branch.phone}`} className="hover:text-[#ea580c] transition-colors">{branch.phone}</a> • <a href={`mailto:${branch.email}`} className="hover:text-[#ea580c] transition-colors">{branch.email}</a>
                </p>
              </div>

              {/* Get Directions Button with Compass Rotation on Hover */}
              <a
                href={`https://maps.google.com/?q=${branch.mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#ede9fe] hover:bg-[#e0e7ff] text-[#1a1f4b] text-xs font-bold tracking-wide transition-all flex items-center justify-center gap-2 text-center group/btn active:scale-98"
              >
                <Navigation className="w-3.5 h-3.5 text-[#1a1f4b] group-hover/btn:rotate-45 transition-transform duration-300" />
                <span>Get Directions</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
