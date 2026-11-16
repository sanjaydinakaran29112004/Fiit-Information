'use client';

import React, { useState } from 'react';
import { Calendar, PhoneCall } from 'lucide-react';

export default function TechCounselingBanner() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: 'Java Full Stack Development'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert(`Thank you, ${formData.name}! Your free tech counseling slot has been booked with a FIIT senior enterprise mentor. We will call you at ${formData.phone}.`);
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        program: 'Java Full Stack Development'
      });
    }, 800);
  };

  return (
    <section id="counseling" className="py-12 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Rounded Container */}
        <div className="bg-[#1a1f4b] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column: Heading & Trust */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 relative z-10">
            <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-orange-300 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider">
              ACCELERATE YOUR IT TRAJECTORY
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.15]">
              Your IT Career Starts with the Right Skills.
            </h2>

            <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
              Discover the right learning path, build practical experience, and take your next step with FIIT Formacion's industry-immersion labs.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-2 hover:text-orange-300 transition-colors cursor-default">
                <Calendar className="w-4 h-4 text-orange-400 shrink-0" />
                <span>Batches start every Monday</span>
              </div>
              <div className="flex items-center gap-2 hover:text-orange-300 transition-colors">
                <PhoneCall className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="tel:+919840012345" className="hover:underline">
                  +91 98400 12345
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: White Card with Form */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-5 sm:p-8 shadow-2xl relative z-10 border border-slate-100">
            <h3 className="text-base sm:text-lg font-black text-[#1a1f4b] tracking-tight">
              Book a Free Tech Counseling
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1 mb-4 sm:mb-5">
              Speak directly with an enterprise tech mentor.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs bg-[#f0f3fa] border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b] focus:bg-white transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="Mobile Number (+91)"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs bg-[#f0f3fa] border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b] focus:bg-white transition-all"
                />
              </div>

              <div>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({...formData, program: e.target.value})}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs bg-[#f0f3fa] border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b] focus:bg-white transition-all cursor-pointer"
                >
                  <option value="Java Full Stack Development">Java Full Stack Development</option>
                  <option value="Full Stack Development (MERN)">Full Stack Development (MERN)</option>
                  <option value="Python Programming & Frameworks">Python Programming & Frameworks</option>
                  <option value="Data Analytics & BI">Data Analytics & BI</option>
                  <option value="Data Science & ML">Data Science & ML</option>
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Cybersecurity & Ethical Hacking">Cybersecurity & Ethical Hacking</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="btn-interactive w-full py-3 sm:py-3.5 px-4 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-extrabold tracking-wide shadow-md text-center mt-2"
              >
                {submitted ? 'Booking Counseling Slot...' : 'Request Callback & Syllabus'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
