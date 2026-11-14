import React from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  FileText, 
  Terminal, 
  GraduationCap, 
  MapPin, 
  ShieldCheck, 
  Award
} from 'lucide-react';
import { STATS_DATA } from '../data/stitchData';

export default function HeroSection({ onOpenEnquire }) {
  return (
    <section id="hero" className="bg-[#f5f6fc] pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 border-b border-slate-200/70 relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#ffedd5] text-[#c2410c] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shimmer-badge shadow-xs max-w-full overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-ping shrink-0" />
              <span className="truncate">FIIT FORMACION • EMPOWERING FUTURE IT PROFESSIONALS</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-[#1a1f4b] leading-[1.1]">
              Create Your Value.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl font-bold text-[#ea580c] tracking-tight">
              Practical Rigor. Corporate Calibration. Verified Outcomes.
            </p>

            {/* Paragraph */}
            <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl font-normal">
              Build practical skills, develop real-world projects, and prepare yourself for enterprise industry opportunities with FIIT's production-grade engineering labs and mentorship.
            </p>

            {/* Buttons Row with Interactive Hover Effects */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full xs:w-auto">
              <a
                href="#programs"
                className="btn-interactive w-full xs:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#1a1f4b] hover:bg-[#12163b] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md flex items-center justify-center gap-2.5 group text-center"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>

              <button
                onClick={() => onOpenEnquire("Hero Enquire")}
                className="w-full xs:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#1a1f4b] border border-slate-300 hover:border-indigo-300 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-xs flex items-center justify-center gap-2 active:scale-95 group text-center"
              >
                <FileText className="w-4 h-4 text-[#1a1f4b] group-hover:scale-110 transition-transform" />
                <span>Enquire Now</span>
              </button>
            </div>

            {/* 3 Value Checkpoints */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-[11px] sm:text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5 group cursor-default">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#1a1f4b] transition-colors">100% Practical Learning</span>
              </div>
              <div className="flex items-center gap-1.5 group cursor-default">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#1a1f4b] transition-colors">Industry Mentors</span>
              </div>
              <div className="flex items-center gap-1.5 group cursor-default">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-[#1a1f4b] transition-colors">Project-Driven Labs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Overlay Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border-2 sm:border-4 border-white aspect-[4/3] sm:aspect-[16/11] group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="FIIT Engineering Lab" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating Competency Badge at Top Right */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl shadow-lg border border-slate-100 flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform cursor-pointer">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-extrabold text-[#1a1f4b] block leading-none">98.4%</span>
                  <span className="text-[8px] sm:text-[9px] font-medium text-slate-500 block">Practical Competency</span>
                </div>
              </div>

              {/* Floating Live Code Labs Card at Bottom */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-sm p-2.5 sm:p-3.5 rounded-xl shadow-xl border border-slate-100 flex items-center justify-between gap-2 sm:gap-3 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#1a1f4b] flex items-center justify-center text-white shrink-0">
                    <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-[11px] sm:text-xs font-bold text-[#1a1f4b] leading-tight truncate">Live Code Labs</h4>
                    <p className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5 truncate">Real-world production environments</p>
                  </div>
                </div>

                <span className="text-[9px] sm:text-[10px] font-extrabold text-emerald-800 bg-emerald-100 border border-emerald-300 px-1.5 sm:px-2 py-0.5 rounded uppercase tracking-wider whitespace-nowrap shadow-xs shrink-0">
                  INDUSTRY READY
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Stats Strip with Interactive Card Lift */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS_DATA.map((stat, i) => {
            const icons = {
              GraduationCap: <GraduationCap className="w-5 h-5 text-indigo-600" />,
              MapPin: <MapPin className="w-5 h-5 text-amber-600" />,
              Shield: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
              Award: <Award className="w-5 h-5 text-purple-600" />
            };

            return (
              <div 
                key={i} 
                className="interactive-card bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] flex items-start gap-3.5 sm:gap-4 cursor-default group"
              >
                <div className="mt-0.5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {icons[stat.icon]}
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black text-[#1a1f4b] block leading-none tracking-tight group-hover:text-indigo-900 transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-slate-800 block mt-1 group-hover:text-indigo-900 transition-colors">
                    <span className="title-hover-underline">{stat.label}</span>
                  </span>
                  <span className="text-[10.5px] sm:text-[11px] text-slate-400 block mt-0.5">
                    {stat.subtext}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
