import React from 'react';
import { 
  X, 
  Clock, 
  CheckCircle, 
  Award, 
  Briefcase, 
  BookOpen, 
  FileText, 
  Sparkles, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export default function CourseModal({ course, onClose, onEnroll }) {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-slate-900 border border-slate-700/80 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded bg-brand-950 text-brand-300 border border-brand-800">
                {course.category}
              </span>
              <span className="text-xs text-slate-400">Duration: {course.duration}</span>
            </div>
            <h2 className="text-2xl font-bold text-white font-display">
              {course.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
          
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Program Overview</h3>
            <p className="leading-relaxed text-slate-300">
              {course.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Program Highlights & Benefits</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus Modules */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Detailed Curriculum by Industry Standards</span>
            </h3>
            <div className="space-y-3">
              {course.syllabus.map((syl, i) => (
                <div key={i} className="bg-slate-950/50 rounded-xl p-4 border border-slate-800/60">
                  <h4 className="font-semibold text-white text-sm mb-2 text-brand-200">
                    {syl.module}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-400">
                    {syl.topics.map((t, tidx) => (
                      <li key={tidx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Career Roles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
              <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Technologies & Tools Covered</h4>
              <div className="flex flex-wrap gap-1.5">
                {course.tools.map((tool, idx) => (
                  <span key={idx} className="px-2 py-0.5 text-xs rounded bg-slate-900 border border-slate-700 text-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
              <h4 className="text-xs font-bold uppercase text-slate-400 mb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                <span>Eligible Job Roles</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {course.careerRoles.map((role, idx) => (
                  <span key={idx} className="px-2 py-0.5 text-xs rounded bg-emerald-950/60 border border-emerald-800/60 text-emerald-300">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs text-slate-400 block">Total Program Fee</span>
            <span className="text-xl font-bold text-white">₹{course.fee.toLocaleString('en-IN')}</span>
            <span className="text-xs text-slate-500 ml-2">(EMI: ₹{course.monthlyEmi}/month)</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                alert(`Official Curriculum brochure for ${course.title} has been downloaded.`);
              }}
              className="py-2.5 px-4 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-brand-400" />
              <span>Brochure PDF</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onEnroll(course);
              }}
              className="py-2.5 px-6 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-glow transition-all flex items-center gap-1.5"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
