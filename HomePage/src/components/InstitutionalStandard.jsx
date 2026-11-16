import React from 'react';
import Link from 'next/link';
import { Terminal, BookOpen, Cpu, User, ArrowRight } from 'lucide-react';
import { INSTITUTIONAL_CARDS } from '../data/stitchData';

export default function InstitutionalStandard() {
  const iconMap = {
    Terminal: <Terminal className="w-5 h-5 text-indigo-600" />,
    BookOpen: <BookOpen className="w-5 h-5 text-amber-600" />,
    Cpu: <Cpu className="w-5 h-5 text-emerald-600" />,
    User: <User className="w-5 h-5 text-purple-600" />
  };

  const bgMap = {
    blue: "bg-indigo-50 border-indigo-100 group-hover:bg-indigo-100/70",
    orange: "bg-amber-50 border-amber-100 group-hover:bg-amber-100/70",
    green: "bg-emerald-50 border-emerald-100 group-hover:bg-emerald-100/70",
    purple: "bg-purple-50 border-purple-100 group-hover:bg-purple-100/70"
  };

  return (
    <section id="institutional" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row with Animated Link Underline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
              INSTITUTIONAL STANDARD
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f4b] tracking-tight leading-tight">
              Building Skills. Creating Professionals.
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              FIIT focuses on practical technical capabilities, professional discipline, project experience, communication skills, and real-world career readiness for next-generation engineers.
            </p>
          </div>

          <Link 
            href="/about" 
            className="link-hover-move text-xs font-bold text-[#1a1f4b] hover:text-[#ea580c] self-start lg:self-end pb-1 group"
          >
            <span>About FIIT Formacion</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid with Smooth Lift & Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTITUTIONAL_CARDS.map((item, idx) => (
            <div 
              key={idx}
              className="interactive-card bg-[#f8f9fd] rounded-2xl p-6 border border-slate-200/70 hover:bg-white cursor-default group"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${bgMap[item.color]} mb-5 transition-colors group-hover:scale-110 group-hover:rotate-3 duration-300`}>
                {iconMap[item.icon]}
              </div>

              <h3 className="text-base font-bold text-[#1a1f4b] mb-2.5 group-hover:text-indigo-900 transition-colors">
                <span className="title-hover-underline">{item.title}</span>
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
