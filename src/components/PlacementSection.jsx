import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Star, 
  Upload, 
  Send, 
  ExternalLink,
  Award,
  Sparkles
} from 'lucide-react';
import { 
  PLACEMENT_STATS, 
  HIRING_PARTNERS, 
  ALUMNI_TESTIMONIALS, 
  LIVE_VACANCIES 
} from '../data/placementsData';

export default function PlacementSection({ onOpenAdmission }) {
  const [selectedVacancy, setSelectedVacancy] = useState(null);
  const [resumeUploaded, setResumeUploaded] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const [candidateName, setCandidateName] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');

  const handleApplyJob = (e) => {
    e.preventDefault();
    setApplySuccess(true);
    setTimeout(() => {
      setSelectedVacancy(null);
      setApplySuccess(false);
      setResumeUploaded(false);
      setCandidateName('');
      setCandidatePhone('');
      alert('Application sent successfully to FIIT Jobs Recruitment Desk! Our placement coordinator will share interview details.');
    }, 1200);
  };

  return (
    <section id="placements" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>FIIT Jobs — Dedicated Recruitment Cell</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            100% Placement Record with Leading MNCs
          </h2>
          <p className="mt-3 text-base text-slate-300">
            From Day 1, we prepare you for real technical rounds, system design discussions, mock HR interviews, and resume shortlisting across 320+ Chennai and Pan-India companies.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-14">
          {PLACEMENT_STATS.map((stat, i) => (
            <div key={i} className="bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-800 text-center card-hover-border">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-display block">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-slate-300 block mt-1">
                {stat.label}
              </span>
              <span className="text-[10px] text-emerald-400 font-medium block mt-1">
                {stat.change}
              </span>
            </div>
          ))}
        </div>

        {/* Hiring Partners Logo Board */}
        <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-8 mb-16">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 text-center mb-6">
            Where Our Alumni Work — Top Corporate Hiring Network
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {HIRING_PARTNERS.map((partner, idx) => (
              <div 
                key={idx}
                className="bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/40 p-4 rounded-xl text-center transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/50 text-emerald-400 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Building2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-xs sm:text-sm group-hover:text-emerald-300 transition-colors">
                  {partner.name}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{partner.role}</p>
                <span className="inline-block mt-2 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                  {partner.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Success Stories Testimonials */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white font-display">Student Placement Spotlights</h3>
              <p className="text-xs text-slate-400 mt-1">Real reviews and offer letters from FIIT Avadi graduates.</p>
            </div>
            <button
              onClick={() => onOpenAdmission(null)}
              className="hidden sm:flex text-xs font-bold text-brand-300 hover:text-white items-center gap-1"
            >
              <span>Join Next Batch</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ALUMNI_TESTIMONIALS.map((alumnus) => (
              <div 
                key={alumnus.id}
                className="bg-slate-950/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between card-hover-border"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={alumnus.image} 
                        alt={alumnus.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-brand-500/50" 
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-white text-sm">{alumnus.name}</h4>
                          {alumnus.verified && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" title="Verified Placement" />
                          )}
                        </div>
                        <p className="text-xs text-slate-400">{alumnus.role} at <span className="text-white font-semibold">{alumnus.company}</span></p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-1 rounded border border-emerald-800/60 block">
                        CTC: {alumnus.package}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{alumnus.quote}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Course: <strong className="text-slate-300">{alumnus.course}</strong></span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live FIIT Jobs Openings Board */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Live Drive Updates</span>
              </span>
              <h3 className="text-2xl font-bold text-white font-display">Active Campus & Client Vacancies</h3>
            </div>
            <span className="text-xs text-slate-400 self-start sm:self-auto bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              Only for registered FIIT students & alumni
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LIVE_VACANCIES.map((vac) => (
              <div 
                key={vac.id}
                className="bg-slate-950/80 p-5 rounded-xl border border-slate-800 hover:border-slate-700 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <div>
                      <h4 className="font-bold text-white text-base">{vac.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{vac.company} • {vac.location}</p>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 whitespace-nowrap">
                      {vac.salary}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 my-3">
                    {vac.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-900 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">{vac.experience} • {vac.posted}</span>
                  <button
                    onClick={() => setSelectedVacancy(vac)}
                    className="py-1.5 px-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors flex items-center gap-1 shadow"
                  >
                    <span>Quick Apply</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quick Job Application Modal */}
      {selectedVacancy && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-1">
              Apply to: {selectedVacancy.title}
            </h3>
            <p className="text-xs text-slate-400 mb-4">{selectedVacancy.company} ({selectedVacancy.salary})</p>

            <form onSubmit={handleApplyJob} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="e.g. Sanjay Dinakaran"
                  required
                  className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white" 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp / Contact Number</label>
                <input 
                  type="tel" 
                  value={candidatePhone}
                  onChange={(e) => setCandidatePhone(e.target.value)}
                  placeholder="e.g. 7200037575"
                  required
                  className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white" 
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Attach Resume (.PDF / .DOCX)</label>
                <div 
                  onClick={() => setResumeUploaded(!resumeUploaded)}
                  className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors ${
                    resumeUploaded ? 'border-emerald-500 bg-emerald-950/30' : 'border-slate-700 hover:border-slate-500 bg-slate-950'
                  }`}
                >
                  <Upload className={`w-6 h-6 mx-auto mb-1 ${resumeUploaded ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span className="text-xs text-slate-300 block">
                    {resumeUploaded ? 'Resume_Sanjay_FIIT.pdf (Uploaded ✓)' : 'Click to simulate uploading resume'}
                  </span>
                  <span className="text-[10px] text-slate-500">Max size 5MB</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedVacancy(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={applySuccess}
                  className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl flex items-center gap-1.5 shadow"
                >
                  {applySuccess ? 'Submitting Application...' : 'Send to Placement Desk'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
