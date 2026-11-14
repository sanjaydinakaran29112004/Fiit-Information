import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  Sparkles,
  MessageSquare
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Full Stack MERN / Java',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        program: 'Full Stack MERN / Java',
        message: ''
      });
      alert('Thank you! Your inquiry has been dispatched to FIIT Formacion Avadi Counseling team. We will call you back shortly.');
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-800 text-brand-300 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-400" />
            <span>Visit Avadi Campus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Connect with FIIT Formacion
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Walk in for a free counseling session and live lab demo at our Avadi training center in Chennai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left: Campus Information Cards */}
          <div className="space-y-6">
            
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 font-display">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                <span>Fiit Formacion Private Limited (Headquarters)</span>
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-950 border border-brand-800/60 text-brand-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Registered Campus Address:</strong>
                    <p className="text-slate-400 mt-0.5 leading-relaxed">
                      No. 2360, HIG, 1st Floor, 60 Feet Main Road, TNHB, Avadi, Chennai, Tamil Nadu – 600054.<br />
                      <span className="text-[11px] text-brand-300 font-medium">(Near Housing Board LIC Office & Bus Stand)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800/60 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Admissions & Helpline:</strong>
                    <p className="text-slate-400 mt-0.5">
                      <a href="tel:+917200037575" className="hover:text-emerald-400 text-white font-medium">+91 72000 37575</a> / <a href="tel:+918695577620" className="hover:text-emerald-400 text-white font-medium">+91 86955 77620</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Email Correspondence:</strong>
                    <p className="text-slate-400 mt-0.5">
                      <a href="mailto:info@fiitjobs.com" className="hover:text-cyan-300">info@fiitjobs.com</a> • <a href="mailto:admissions@fiitformacion.com" className="hover:text-cyan-300">admissions@fiitformacion.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-950 border border-amber-800/60 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Center Lab & Counseling Hours:</strong>
                    <p className="text-slate-400 mt-0.5">
                      Monday to Saturday: 08:30 AM – 08:30 PM (IST)<br />
                      Sunday Batches: 09:00 AM – 05:00 PM (IST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Simulator Box */}
            <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-300">Avadi Campus Geographical Pin</span>
                <a 
                  href="https://maps.google.com/?q=FIIT+Avadi+Chennai" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[11px] text-brand-400 hover:underline font-semibold"
                >
                  Open in Google Maps ↗
                </a>
              </div>
              <div className="h-44 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center text-center p-4">
                <MapPin className="w-8 h-8 text-brand-500 mb-2 animate-bounce" />
                <span className="text-xs font-bold text-white">FIIT Formacion Pvt Ltd, Avadi Center</span>
                <span className="text-[11px] text-slate-400 mt-0.5">Opposite TNHB Main Road, Avadi, Chennai</span>
                <span className="text-[10px] text-emerald-400 mt-2 font-mono">13.1155° N, 80.1010° E</span>
              </div>
            </div>

          </div>

          {/* Right: Quick Callback & Inquiry Form */}
          <div className="bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-brand-400" />
                <h3 className="text-lg font-bold text-white font-display">Book a Free Live Demo or Counseling</h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Fill this quick form and our faculty head will coordinate your free demo class slot.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Sanjay Dinakaran"
                    required
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. 7200037575"
                      required
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Email ID</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g. sanjay@entrykode.com"
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Program of Interest</label>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({...formData, program: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-brand-500"
                  >
                    <option value="Full Stack MERN / Java">Full Stack MERN / Java Microservices</option>
                    <option value="Python Data Science & AI">Python Data Science & AI</option>
                    <option value="AWS Cloud & DevOps">AWS Cloud & DevOps</option>
                    <option value="Cisco CCNA Networking">Cisco CCNA Networking</option>
                    <option value="Selenium Automation QA">Selenium Automation QA</option>
                    <option value="Tally Prime with GST">Tally Prime with GST</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Questions or Preferred Timing</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your timing preferences, weekend requirement, or career queries..."
                    className="w-full px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-3 px-4 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-glow transition-all flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <span>Dispatching Callback Request...</span>
                  ) : (
                    <>
                      <span>Submit for Free Callback & Demo Class</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <p className="text-[10px] text-slate-500 text-center mt-4">
              Your contact info is strictly confidential and used solely for FIIT Formacion academic counseling.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
