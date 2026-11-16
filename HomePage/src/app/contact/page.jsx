'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import StitchFooter from '../../components/StitchFooter';
import EnquireModal from '../../components/EnquireModal';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  ChevronRight, 
  Building2, 
  MessageSquare, 
  Calendar,
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactUsPage() {
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    center: 'Iyyappanthangal (Campus HQ)',
    domain: 'Full Stack Development',
    status: 'Final Year Student',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}
  };

  const handleOpenEnquire = (topic = 'Contact Page Inquiry') => {
    setEnquireModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fd] text-slate-900 font-sans selection:bg-[#1a1f4b] selection:text-white w-full">
      
      {/* 1. Header with active contact */}
      <Header activePage="contact" onOpenEnquire={handleOpenEnquire} />

      <main className="w-full">
        
        {/* Breadcrumb strip */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-[#1a1f4b] flex items-center gap-1 text-slate-600 font-semibold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#1a1f4b] font-bold">Contact Us &amp; Admissions</span>
          </div>
        </div>

        {/* 2. Hero Section */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse"></span>
              <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase">
                DIRECT ADMISSIONS &amp; COUNSELING DESK
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1f4b] tracking-tight leading-tight">
              Let&apos;s Accelerate Your IT Career. <br />
              <span className="text-[#ea580c]">Speak with a Senior Tech Counselor.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Have questions regarding course curricula, batch timings, placement benchmarks, or campus lab facilities? Our technical counselors are available 7 days a week.
            </p>
          </div>
        </section>

        {/* 3. Main Dual-Column Contact & Form Box */}
        <section className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Direct Official Contact Info (Deep Navy) */}
              <div className="lg:col-span-5 bg-[#12163b] text-white p-8 sm:p-12 flex flex-col justify-between space-y-8">
                <div>
                  <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-2">
                    CAMPUS HEADQUARTERS
                  </span>
                  <h3 className="text-2xl font-black text-white tracking-tight">
                    FIIT Formacion Pvt. Ltd.
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Corporate Campus &amp; Central Academic Lab, Mount-Poonamallee High Road, Iyyappanthangal, Chennai, Tamil Nadu - 600056.
                  </p>
                </div>

                {/* Contact Points */}
                <div className="space-y-5 text-xs text-slate-300">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#ea580c] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Admissions Hotline</div>
                      <a href="tel:+919840012345" className="hover:text-orange-400 block mt-0.5 text-xs font-semibold">
                        +91 98400 12345 / +91 72000 37575
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Email Desks</div>
                      <a href="mailto:admissions@fiitformacion.com" className="hover:text-blue-300 block mt-0.5 text-xs">
                        admissions@fiitformacion.com
                      </a>
                      <a href="mailto:placements@fiitformacion.com" className="hover:text-blue-300 block text-[11px] text-slate-400">
                        placements@fiitformacion.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Counseling Hours</div>
                      <div className="mt-0.5 text-xs">Monday – Saturday: 8:30 AM – 7:30 PM</div>
                      <div className="text-[11px] text-slate-400">Sunday: 10:00 AM – 4:00 PM (By Appointment)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">Regional Hubs</div>
                      <div className="mt-0.5 text-xs text-slate-300">
                        9 Centers: Iyyappanthangal, Kelambakkam, Chengalpattu, Tambaram, Avadi, Redhills, Thiruvannamalai, Vellore, Ambattur.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 text-[11px] text-slate-400">
                  Batches start every Monday across all locations. On-site walk-ins welcome with prior appointment.
                </div>
              </div>

              {/* Right Column: Interactive Tech Counseling Booking Form */}
              <div className="lg:col-span-7 p-8 sm:p-12">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="text-xs font-bold text-[#ea580c] uppercase tracking-wider block mb-1">
                        FREE CAREER GUIDANCE
                      </span>
                      <h3 className="text-2xl font-black text-[#1a1f4b] tracking-tight">
                        Book a Free Tech Counseling Session
                      </h3>
                      <p className="text-xs text-slate-600 mt-1">
                        Fill in your details and an executive academic mentor will call you within 15 minutes.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Karthikeyan S."
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#f8f9fd] border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          WhatsApp / Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 98400 12345"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#f8f9fd] border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. karthik@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#f8f9fd] border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Preferred Center Location
                        </label>
                        <select
                          value={formData.center}
                          onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#f8f9fd] border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
                        >
                          <option>Iyyappanthangal (Campus HQ)</option>
                          <option>Kelambakkam (OMR IT Expressway)</option>
                          <option>Chengalpattu (GST Road)</option>
                          <option>Tambaram (Near MEPZ)</option>
                          <option>Avadi (CTH Road)</option>
                          <option>Redhills (North Chennai)</option>
                          <option>Thiruvannamalai (Gandhi Nagar)</option>
                          <option>Vellore (Katpadi Road)</option>
                          <option>Ambattur (Industrial Estate)</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Domain of Interest
                        </label>
                        <select
                          value={formData.domain}
                          onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#f8f9fd] border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
                        >
                          <option>Full Stack Web Development (MERN / MEAN)</option>
                          <option>Java Full Stack Engineering (Spring Boot)</option>
                          <option>Python Programming &amp; Backend</option>
                          <option>Data Analytics &amp; Power BI</option>
                          <option>Data Science &amp; Machine Learning</option>
                          <option>Artificial Intelligence &amp; LLMs</option>
                          <option>Cloud DevOps &amp; Linux</option>
                          <option>Internship Programs (7/15/30 Days)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Current Education / Career Status
                        </label>
                        <select
                          value={formData.status}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#f8f9fd] border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
                        >
                          <option>College Student (1st / 2nd / 3rd Year)</option>
                          <option>Final Year Student (2024 / 2025 Batch)</option>
                          <option>Recent Graduate Seeking First Job</option>
                          <option>Working Professional Switching to IT</option>
                          <option>Non-IT Professional Transitioning</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Specific Questions or Batch Preference (Optional)
                      </label>
                      <textarea
                        rows="3"
                        placeholder="Tell us about your background or specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#f8f9fd] border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-interactive w-full py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Request Free Callback &amp; Course Syllabus</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-[#1a1f4b]">Counseling Request Received!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900">{formData.name}</strong>. A senior academic counselor from our <strong className="text-slate-900">{formData.center}</strong> will reach you at <strong className="text-slate-900">{formData.phone}</strong> within 15 minutes.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-bold text-[#ea580c] underline cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <StitchFooter onOpenEnquire={handleOpenEnquire} />

      {/* Enquire Modal */}
      {enquireModalOpen && (
        <EnquireModal 
          initialProgram="Contact Desk Inquiry"
          onClose={() => setEnquireModalOpen(false)}
        />
      )}

    </div>
  );
}
