import React from 'react';
import { X, Clock, CheckCircle2, BookOpen, ArrowRight } from 'lucide-react';

export default function SyllabusModal({ program, onClose, onEnquire }) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full p-5 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-3.5 border-b border-slate-100 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                {program.badge}
              </span>
              <span className="text-xs font-mono font-bold text-slate-400">
                {program.code}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#1a1f4b]">
              {program.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Duration: {program.duration} • Mode: {program.mode}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3.5 mb-6">
          <h4 className="text-xs font-extrabold text-[#1a1f4b] uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#ea580c]" />
            <span>Curriculum Modules</span>
          </h4>

          <div className="space-y-2">
            {program.syllabus.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f8f9fd] border border-slate-200/60 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <button
            onClick={() => {
              alert(`Full brochure for ${program.title} (${program.code}) has been prepared.`);
            }}
            className="w-full sm:w-auto py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold text-center"
          >
            Download PDF
          </button>

          <button
            onClick={() => {
              onClose();
              onEnquire(program.title);
            }}
            className="w-full sm:w-auto py-2.5 px-6 rounded-xl bg-[#1a1f4b] hover:bg-[#12163b] text-white text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-1.5"
          >
            <span>Enquire for this Program</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
