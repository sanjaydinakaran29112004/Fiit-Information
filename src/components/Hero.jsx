import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Award, 
  Users, 
  Building2, 
  Star,
  PlayCircle,
  ShieldCheck,
  Zap,
  TrendingUp
} from 'lucide-react';

export default function Hero({ onOpenAdmission, onOpenCareerAdvisor, onSelectCategory }) {
  return (
    <div className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] glow-gradient pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs text-brand-300 shadow-inner backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="font-semibold">FIIT Formacion Pvt Ltd (Est. 2015)</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Govt. Registered IT Training & Placement Center, Avadi</span>
          </div>
        </div>

        {/* Hero Main Heading & Pitch */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-display">
            Master In-Demand Tech Skills. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Secure Your Dream Job in Chennai.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Hands-on project training in <strong className="text-white font-semibold">Full Stack MERN/Java</strong>, <strong className="text-white font-semibold">Python & Data Science</strong>, <strong className="text-white font-semibold">AWS Cloud/DevOps</strong>, and <strong className="text-white font-semibold">Cisco CCNA</strong> with dedicated interview grooming from the <span className="text-emerald-400 font-semibold underline decoration-emerald-500/50">FIIT Jobs Placement Cell</span>.
          </p>

          {/* Quick Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Practical Labs at Avadi</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              <span>ISO 9001:2015 Certified Curriculum</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span>320+ Active Hiring Partners</span>
            </div>
          </div>

          {/* Main Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenAdmission(null)}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-bold text-white bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 rounded-xl shadow-glow hover:shadow-brand-500/60 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenCareerAdvisor}
              className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-500/50 rounded-xl transition-all flex items-center justify-center gap-2.5 backdrop-blur-sm"
            >
              <Sparkles className="w-5 h-5 text-brand-400 animate-pulse" />
              <span>Not Sure? Take 1-Min Career Quiz</span>
            </button>

            <a
              href="#batches"
              className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 hover:bg-slate-900/50 rounded-xl transition-all"
            >
              <PlayCircle className="w-5 h-5 text-cyan-400" />
              <span>View Batch Schedule</span>
            </a>
          </div>

        </div>

        {/* Quick Track Shortcuts */}
        <div className="mt-12 pt-8 border-t border-slate-800/60">
          <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
            Explore High-Growth Tech Tracks in Chennai
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              { label: "MERN Full Stack", category: "Full Stack & Web", hot: true },
              { label: "Java Microservices", category: "Full Stack & Web", hot: false },
              { label: "Python Data Science & AI", category: "Data Science & AI", hot: true },
              { label: "AWS Cloud & DevOps", category: "Cloud & DevOps", hot: true },
              { label: "Cisco CCNA Networking", category: "Networking & Security", hot: false },
              { label: "Selenium QA Testing", category: "Software Testing", hot: false },
              { label: "Tally Prime with GST", category: "Finance & ERP", hot: false }
            ].map((track, i) => (
              <a
                key={i}
                href="#courses"
                onClick={() => onSelectCategory(track.category)}
                className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-brand-500/50 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <span>{track.label}</span>
                {track.hot && (
                  <span className="text-[10px] bg-red-500/20 text-red-300 px-1.5 py-0.2 rounded font-bold">
                    HOT
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Highlighted Stat Cards Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-5 text-center card-hover-border">
            <div className="w-10 h-10 rounded-xl bg-brand-950 border border-brand-800/60 text-brand-400 flex items-center justify-center mx-auto mb-3">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">10,000+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Students Trained Successfully</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-5 text-center card-hover-border">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/60 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">320+</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Hiring Corporate Partners</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-5 text-center card-hover-border">
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/60 text-amber-400 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">14.5 LPA</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Highest Salary Secured</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-5 text-center card-hover-border">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/60 text-cyan-400 flex items-center justify-center mx-auto mb-3">
              <Star className="w-5 h-5 fill-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">4.9 / 5.0</div>
            <div className="text-xs text-slate-400 font-medium mt-1">Google Rating (1,200+ Reviews)</div>
          </div>
        </div>

      </div>
    </div>
  );
}
