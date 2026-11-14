import React from 'react';
import { 
  Briefcase, 
  FileText, 
  Folder, 
  MessageSquare, 
  Code, 
  Bot, 
  Search, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { CAREER_ENGINE_CARDS } from '../data/stitchData';

export default function CareerTransitionEngine() {
  const iconComponents = {
    Briefcase: <Briefcase className="w-5 h-5 text-indigo-600" />,
    FileText: <FileText className="w-5 h-5 text-amber-600" />,
    Folder: <Folder className="w-5 h-5 text-emerald-600" />,
    MessageSquare: <MessageSquare className="w-5 h-5 text-purple-600" />,
    Code: <Code className="w-5 h-5 text-indigo-600" />,
    Bot: <Bot className="w-5 h-5 text-amber-600" />,
    Search: <Search className="w-5 h-5 text-emerald-600" />,
    Users: <Users className="w-5 h-5 text-purple-600" />
  };

  return (
    <section id="prp" className="py-16 sm:py-24 bg-[#f8f9fd] border-b border-slate-200/80">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
            CAREER TRANSITION ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1f4b] tracking-tight">
            Get Ready for the Industry.
          </h2>
          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
            The Placement Readiness Program (PRP) bridges the critical divide between standard academic coursework and corporate expectations.
          </p>
        </div>

        {/* 8 Feature Cards Grid (4 cols x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CAREER_ENGINE_CARDS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                {iconComponents[item.icon]}
              </div>

              <h3 className="text-base font-extrabold text-[#1a1f4b] mb-2 tracking-tight group-hover:text-indigo-900 transition-colors">
                <span className="title-hover-underline">{item.title}</span>
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Ethical Commitment Banner */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-start gap-4 text-xs text-slate-600 max-w-4xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#1a1f4b] font-bold">Ethical Commitment:</strong> FIIT provides comprehensive readiness support and career enablement without misleading 100% placement guarantees. Your employment outcome is a direct function of dedication and skill.
          </p>
        </div>

      </div>
    </section>
  );
}
