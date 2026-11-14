import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone, User, Mail, MapPin } from 'lucide-react';
import { BRANCHES_DATA, PROGRAMS } from '../data/stitchData';

export default function EnquireModal({ initialProgram = '', onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: initialProgram || 'Full Stack Development',
    branch: 'Avadi',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      alert(`Thank you, ${formData.name}! Your enquiry for ${formData.program} has been submitted to FIIT Formacion ${formData.branch} center. Our team will contact you shortly at ${formData.phone}.`);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-5 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-5">
          <div>
            <span className="text-[10px] font-bold text-[#ea580c] uppercase tracking-wider block">
              Admissions Desk
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-[#1a1f4b]">
              Enquire for Admissions & Batches
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Sanjay Dinakaran"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g. 9840012345"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="e.g. candidate@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 mb-1">Interested Program</label>
              <select
                value={formData.program}
                onChange={(e) => setFormData({...formData, program: e.target.value})}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
              >
                {PROGRAMS.map(p => (
                  <option key={p.id} value={p.title}>{p.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">Preferred Branch</label>
              <select
                value={formData.branch}
                onChange={(e) => setFormData({...formData, branch: e.target.value})}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
              >
                {BRANCHES_DATA.map((b, i) => (
                  <option key={i} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">Message or Queries (Optional)</label>
            <textarea
              rows={2}
              placeholder="e.g. Need weekend batch details, hostel accommodation info..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1a1f4b]"
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className="btn-interactive w-full py-3 px-4 rounded-xl bg-[#1a1f4b] hover:bg-[#12163b] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md active:scale-95 text-center mt-2"
          >
            {submitted ? 'Submitting Enquiry...' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </div>
  );
}
