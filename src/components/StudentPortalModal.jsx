import React, { useState, useEffect } from 'react';
import { 
  X, 
  UserCheck, 
  BookOpen, 
  Calendar, 
  Award, 
  CheckCircle, 
  Clock, 
  FileCheck, 
  Download, 
  Trash2, 
  ExternalLink,
  ShieldAlert,
  PlayCircle
} from 'lucide-react';

export default function StudentPortalModal({ onClose }) {
  const [activeTab, setActiveTab] = useState('STUDENT'); // 'STUDENT' or 'ADMIN_LEADS'
  const [admissionsList, setAdmissionsList] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('fiit_admissions') || '[]');
    setAdmissionsList(stored);
  }, []);

  const handleDeleteAdmission = (appId) => {
    const updated = admissionsList.filter(item => item.applicationId !== appId);
    setAdmissionsList(updated);
    localStorage.setItem('fiit_admissions', JSON.stringify(updated));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-700/60 flex items-center justify-center text-cyan-400">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-display">FIIT Campus & Student Portal</h2>
              <p className="text-xs text-slate-400">Learning Management System (LMS) & Admissions Console</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 px-6">
          <button
            onClick={() => setActiveTab('STUDENT')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'STUDENT'
                ? 'border-brand-500 text-brand-300'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Student Learning Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('ADMIN_LEADS')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'ADMIN_LEADS'
                ? 'border-brand-500 text-brand-300'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <FileCheck className="w-4 h-4" />
            <span>Admissions Records ({admissionsList.length})</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-xs">
          
          {/* TAB 1: STUDENT VIEW */}
          {activeTab === 'STUDENT' && (
            <div className="space-y-6">
              
              {/* Profile Card */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center font-bold text-lg text-white">
                    SD
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">Sanjay Dinakaran</h3>
                    <p className="text-[11px] text-slate-400">Roll No: FIIT-2026-AVD-802 | Batch: MERN Full Stack</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold text-[10px]">
                    Active Enrollment
                  </span>
                  <span className="px-2.5 py-1 rounded bg-brand-950 text-brand-300 border border-brand-800 font-bold text-[10px]">
                    Classroom (Avadi Lab)
                  </span>
                </div>
              </div>

              {/* Progress & Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                  <span className="text-slate-400 block mb-1">Class Attendance</span>
                  <span className="text-2xl font-extrabold text-emerald-400">94.8%</span>
                  <span className="text-[10px] text-slate-500 block mt-1">22 of 24 sessions attended</span>
                </div>

                <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                  <span className="text-slate-400 block mb-1">Capstone Projects</span>
                  <span className="text-2xl font-extrabold text-brand-400">4 / 5</span>
                  <span className="text-[10px] text-slate-500 block mt-1">CRM & E-Commerce Approved</span>
                </div>

                <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                  <span className="text-slate-400 block mb-1">Placement Eligibility</span>
                  <span className="text-2xl font-extrabold text-cyan-400">Ready</span>
                  <span className="text-[10px] text-slate-500 block mt-1">FIIT Jobs Fast-Track Tier</span>
                </div>
              </div>

              {/* Next Scheduled Lab Session */}
              <div className="p-4 bg-gradient-to-r from-brand-950/50 to-indigo-950/50 rounded-xl border border-brand-800/40 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider block">Upcoming Lab Session</span>
                  <h4 className="font-bold text-white text-sm mt-0.5">Microservices Deployment on AWS EC2 & Docker</h4>
                  <p className="text-[11px] text-slate-400">Tomorrow, 09:30 AM • Avadi Lab Room 102</p>
                </div>

                <button 
                  onClick={() => alert("Joining live mentor workspace simulator...")}
                  className="py-2 px-3 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold flex items-center gap-1.5 shadow"
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Launch Lab IDE</span>
                </button>
              </div>

              {/* Course Certificates & Downloads */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                <h4 className="font-bold text-white text-xs uppercase tracking-wider">Certificates & Documents</h4>
                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    <div>
                      <span className="font-semibold text-white block">Course Completion Certificate (Provisional)</span>
                      <span className="text-[10px] text-slate-500">Certified by FIIT Formacion Private Limited</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => alert("FIIT Official Certificate downloaded in high-resolution PDF format.")}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: ADMIN ADMISSIONS LEADS CONSOLE */}
          {activeTab === 'ADMIN_LEADS' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm">Real-Time Admission Submissions</h3>
                  <p className="text-[11px] text-slate-400">
                    Live candidate inquiries submitted through this portal (persisted locally).
                  </p>
                </div>
              </div>

              {admissionsList.length === 0 ? (
                <div className="text-center py-12 bg-slate-950 rounded-xl border border-slate-800">
                  <FileCheck className="w-10 h-10 text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-400">No applications registered yet.</p>
                  <p className="text-[11px] text-slate-500 mt-1">Submit an application via "Enroll Now" to view it here live!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {admissionsList.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-white text-sm">{item.studentName}</span>
                          <span className="text-[10px] font-mono text-brand-400 bg-brand-950 px-1.5 py-0.5 rounded border border-brand-800">
                            {item.applicationId}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Program: <strong className="text-slate-300">{item.courseName}</strong> • Phone: <strong className="text-slate-300">{item.phone}</strong>
                        </p>
                        <p className="text-[10px] text-slate-500">
                          {item.batchPreference} • {item.mode} • Submitted: {item.timestamp}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-auto">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-bold">
                          {item.status}
                        </span>
                        <button
                          onClick={() => handleDeleteAdmission(item.applicationId)}
                          className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-slate-900 rounded"
                          title="Remove record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-5 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-xl"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
}
