'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, User, Mail, Phone, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export function EnquireModal({ isOpen, onClose, defaultTopic = 'General Enquiry' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: defaultTopic,
    campus: 'Iyyappanthangal',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted Successfully!</h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our academic counselor will reach out to you within 2 business hours.
            </p>
            <div className="pt-3">
              <button
                onClick={handleReset}
                className="bg-[#141d4a] text-white px-6 py-2.5 rounded-lg text-xs font-semibold hover:bg-indigo-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[10.5px] font-bold text-[#b45309] uppercase tracking-wider">
                ADMISSION &amp; CAMPUS VISIT
              </span>
              <h3 className="text-xl font-extrabold text-[#090e29] mt-0.5">
                {defaultTopic || 'Enquire for Batch'}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill out the quick form to receive course syllabus, fee structure, and batch schedule.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Karthik Rajan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="karthik@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Preferred Campus Location</label>
                <select
                  value={formData.campus}
                  onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 text-xs bg-white"
                >
                  <option value="Iyyappanthangal">Iyyappanthangal</option>
                  <option value="Kelambakkam">Kelambakkam</option>
                  <option value="Chengalpattu">Chengalpattu</option>
                  <option value="Tambaram">Tambaram</option>
                  <option value="Avadi">Avadi</option>
                  <option value="Redhills">Redhills</option>
                  <option value="Thiruvannamalai">Thiruvannamalai</option>
                  <option value="Vellore">Vellore</option>
                  <option value="Ambattur">Ambattur</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Questions / Specific Goals</label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your background (e.g. final year B.E. CSE, job seeker, working professional)..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#141d4a] hover:bg-indigo-700 text-white font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Submit Admission Enquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero spam guarantee. Your contact details are kept strictly confidential.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export function BioModal({ isOpen, onClose, member }) {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200 shadow-xs">
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div>
            <span className="text-[10px] font-bold text-[#b45309] uppercase tracking-wider">
              {member.role}
            </span>
            <h3 className="text-lg font-bold text-[#090e29]">{member.name}</h3>
            <p className="text-xs font-semibold text-indigo-700 mt-0.5">Domain: {member.domain}</p>
          </div>
        </div>

        <div className="mt-5 space-y-3 text-xs text-slate-700 border-t border-slate-200 pt-4 leading-relaxed">
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Executive Leadership &amp; Heritage</h4>
            <p className="text-slate-600">{member.bio}</p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1">Engineering Impact</h4>
            <p className="text-slate-600">{member.experience}</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
