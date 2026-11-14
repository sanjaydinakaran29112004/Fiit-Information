import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen, 
  Calendar, 
  Download, 
  Printer, 
  Award,
  ShieldCheck
} from 'lucide-react';
import { COURSES } from '../data/coursesData';

export default function AdmissionModal({ preSelectedCourse, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: 'Avadi, Chennai',
    courseId: preSelectedCourse ? preSelectedCourse.id : COURSES[0].id,
    batchPreference: 'Weekday Morning (09:30 AM)',
    mode: 'Classroom (Avadi Center)',
    qualification: 'BE / B.Tech (CS / IT / ECE / Mech)',
    careerGoal: 'Fresh IT Placement in MNC',
    comments: ''
  });

  const [receiptData, setReceiptData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMsg('');
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
        setErrorMsg('Please enter your Name, Phone Number, and Email.');
        return;
      }
      if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
        setErrorMsg('Please enter a valid 10-digit mobile number.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const selectedCourseObj = COURSES.find(c => c.id === formData.courseId) || COURSES[0];
      const appNumber = `FIIT-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

      const newReceipt = {
        applicationId: appNumber,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        studentName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        courseName: selectedCourseObj.title,
        duration: selectedCourseObj.duration,
        batchPreference: formData.batchPreference,
        mode: formData.mode,
        fee: selectedCourseObj.fee,
        scholarshipDiscount: 5000,
        netFee: selectedCourseObj.fee - 5000,
        status: 'Confirmed - Counseling Allocated'
      };

      // Save to localStorage
      const existing = JSON.parse(localStorage.getItem('fiit_admissions') || '[]');
      existing.unshift(newReceipt);
      localStorage.setItem('fiit_admissions', JSON.stringify(existing));

      setReceiptData(newReceipt);
      setIsSubmitting(false);
      setStep(4);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Safe fallback
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-slate-900 border border-slate-700/80 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-950 text-brand-300 border border-brand-800">
                Official Admission Desk
              </span>
              <span className="text-xs text-slate-400">FIIT Formacion Pvt Ltd, Avadi</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
              {step === 4 ? 'Admission Application Receipt' : 'Apply for Technical Program'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (Steps 1 to 3) */}
        {step < 4 && (
          <div className="bg-slate-950/40 px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                step >= 1 ? 'bg-brand-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}>1</span>
              <span className={step >= 1 ? 'text-white font-medium' : ''}>Personal Info</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-800" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                step >= 2 ? 'bg-brand-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}>2</span>
              <span className={step >= 2 ? 'text-white font-medium' : ''}>Program & Batch</span>
            </div>
            <div className="w-8 h-0.5 bg-slate-800" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                step >= 3 ? 'bg-brand-600 text-white' : 'bg-slate-800 text-slate-400'
              }`}>3</span>
              <span className={step >= 3 ? 'text-white font-medium' : ''}>Goals & Confirm</span>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-6">
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs rounded-xl">
              {errorMsg}
            </div>
          )}

          {/* STEP 1: Personal Details */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Candidate Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sanjay Dinakaran"
                    required
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    WhatsApp / Contact Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 7200037575"
                      required
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sanjay@entrykode.com"
                      required
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Current City / Chennai Neighborhood
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Avadi / Ambattur / Anna Nagar / Chennai"
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-glow transition-all flex items-center gap-1.5"
                >
                  <span>Continue to Program Selection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Course & Batch Selection */}
          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Program Track *
                </label>
                <select
                  name="courseId"
                  value={formData.courseId}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-brand-500"
                >
                  {COURSES.map(course => (
                    <option key={course.id} value={course.id}>
                      {course.title} — ({course.duration} | ₹{course.fee.toLocaleString('en-IN')})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Preferred Batch Timing
                  </label>
                  <select
                    name="batchPreference"
                    value={formData.batchPreference}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-brand-500"
                  >
                    <option value="Weekday Morning (09:30 AM - 11:30 AM)">Weekday Morning (09:30 AM - 11:30 AM)</option>
                    <option value="Weekday Afternoon (02:00 PM - 04:00 PM)">Weekday Afternoon (02:00 PM - 04:00 PM)</option>
                    <option value="Weekday Evening (06:30 PM - 08:30 PM)">Weekday Evening (06:30 PM - 08:30 PM)</option>
                    <option value="Weekend Batch (Sat & Sun 02:00 PM - 06:00 PM)">Weekend Batch (Sat & Sun 02:00 PM - 06:00 PM)</option>
                    <option value="Fast-Track 1-on-1 Mentorship">Fast-Track 1-on-1 Mentorship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Learning Mode
                  </label>
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-brand-500"
                  >
                    <option value="Classroom Lab (Avadi Center)">Classroom Lab (Avadi Center, Chennai)</option>
                    <option value="Live Interactive Online (Zoom/Meet)">Live Interactive Online (Zoom/Meet)</option>
                    <option value="Hybrid (Classroom + Online Recordings)">Hybrid (Classroom + Online Recordings)</option>
                  </select>
                </div>
              </div>

              <div className="p-3 bg-brand-950/40 rounded-xl border border-brand-800/40 text-xs text-brand-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-400 shrink-0" />
                <span>
                  Early Bird Benefit: Includes ₹5,000 scholarship concession + FIIT Jobs placement cell membership.
                </span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 rounded-xl flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-glow transition-all flex items-center gap-1.5"
                >
                  <span>Continue to Qualification</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Educational Background & Confirmation */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Educational Qualification
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-brand-500"
                >
                  <option value="BE / B.Tech (CS / IT / ECE / EEE)">BE / B.Tech (CS / IT / ECE / EEE)</option>
                  <option value="B.Sc / BCA / MCA (Computer Science)">B.Sc / BCA / MCA (Computer Science)</option>
                  <option value="B.Com / BBA / BA (Arts & Commerce)">B.Com / BBA / BA (Arts & Commerce)</option>
                  <option value="Working IT Professional">Working IT Professional (Upskilling)</option>
                  <option value="Non-IT Professional Seeking Career Switch">Non-IT Professional Seeking Career Switch</option>
                  <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Primary Career Goal
                </label>
                <select
                  name="careerGoal"
                  value={formData.careerGoal}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-brand-500"
                >
                  <option value="Fresh IT Placement in MNC">Fresh IT Placement in MNC (TCS, Zoho, CTS)</option>
                  <option value="Salary Hike & Role Promotion in Current Job">Salary Hike & Role Promotion in Current Job</option>
                  <option value="Career Transition from Non-IT to Software">Career Transition from Non-IT to Software</option>
                  <option value="Freelancing & Client Projects (EntryKode Partner)">Freelancing & Client Projects (EntryKode Partner)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Additional Notes or Questions for Counselor (Optional)
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g. Interested in weekday morning batches, need hostel or PG guidance near Avadi..."
                  className="w-full px-4 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
                />
              </div>

              {/* Terms Check */}
              <div className="flex items-start gap-2 pt-1 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  By submitting, you agree to receive official course counseling and batch schedule details on WhatsApp/Email from FIIT Formacion Avadi.
                </span>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 rounded-xl flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-glow transition-all flex items-center gap-1.5 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Application...</span>
                  ) : (
                    <>
                      <span>Submit Application & Get Receipt</span>
                      <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Official Admission Receipt */}
          {step === 4 && receiptData && (
            <div className="space-y-4">
              <div className="text-center p-4 bg-emerald-950/40 rounded-xl border border-emerald-800/60">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-2 animate-bounce" />
                <h3 className="text-lg font-bold text-white">Application Successfully Submitted!</h3>
                <p className="text-xs text-emerald-300 mt-1">
                  Your seat has been provisionally registered. Senior career counselor will contact you within 2 hours.
                </p>
              </div>

              {/* Printable Receipt Card */}
              <div id="admission-receipt" className="p-5 bg-slate-950 rounded-xl border border-slate-800 text-xs space-y-3 font-mono">
                <div className="flex justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="font-bold text-brand-300 text-sm">FIIT FORMACION PVT LTD</span>
                    <span className="block text-[11px] text-slate-400">Avadi, Chennai - 600054</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block">Application No:</span>
                    <span className="font-bold text-white text-xs">{receiptData.applicationId}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div>
                    <span className="text-slate-500 block">Candidate Name:</span>
                    <span className="font-semibold text-white">{receiptData.studentName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">WhatsApp:</span>
                    <span className="font-semibold text-white">{receiptData.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Registered Program:</span>
                    <span className="font-semibold text-white">{receiptData.courseName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Batch Timing:</span>
                    <span className="font-semibold text-white">{receiptData.batchPreference}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Center Mode:</span>
                    <span className="font-semibold text-white">{receiptData.mode}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Date of Application:</span>
                    <span className="font-semibold text-white">{receiptData.timestamp}</span>
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-slate-300">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Early Bird Net Fee:</span>
                    <span className="text-base font-bold text-emerald-400">₹{receiptData.netFee.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] text-slate-500 line-through ml-2">₹{receiptData.fee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                      {receiptData.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Receipt Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => window.print()}
                  className="py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center gap-1.5 transition-colors"
                >
                  <Printer className="w-4 h-4 text-slate-400" />
                  <span>Print Receipt</span>
                </button>

                <button
                  onClick={onClose}
                  className="py-2.5 px-6 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-glow transition-all"
                >
                  Done & Return to Portal
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
