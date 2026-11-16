import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/stitchData';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
            AUTHENTIC TRANSFORMATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f4b] tracking-tight">
            Student Testimonials
          </h2>
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
            Read direct accounts of how our hands-on engineering lab methodology altered our students' professional trajectories.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#f8f9fd] rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/70">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <div>
                  <h4 className="text-xs font-extrabold text-[#1a1f4b]">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
