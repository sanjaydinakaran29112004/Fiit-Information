import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  Briefcase 
} from 'lucide-react';
import { COURSES } from '../data/coursesData';

export default function CareerAdvisorModal({ onClose, onSelectCourse }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    background: '',
    interest: '',
    timeframe: ''
  });

  const [recommendation, setRecommendation] = useState(null);

  const handleSelectAnswer = (key, value) => {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateRecommendation(updated);
    }
  };

  const calculateRecommendation = (finalAnswers) => {
    // Intelligent heuristic logic
    let targetCourseId = 'fs-mern';

    if (finalAnswers.interest === 'data') {
      targetCourseId = 'ai-data-science';
    } else if (finalAnswers.interest === 'cloud') {
      targetCourseId = 'cloud-devops';
    } else if (finalAnswers.interest === 'networking') {
      targetCourseId = 'ccna-networking';
    } else if (finalAnswers.interest === 'finance') {
      targetCourseId = 'tally-gst';
    } else if (finalAnswers.interest === 'qa') {
      targetCourseId = 'qa-testing';
    } else if (finalAnswers.background === 'cs' && finalAnswers.interest === 'web') {
      targetCourseId = 'fs-java';
    } else {
      targetCourseId = 'fs-mern';
    }

    const course = COURSES.find(c => c.id === targetCourseId) || COURSES[0];
    setRecommendation(course);
    setCurrentStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-xl w-full p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-950 border border-brand-700/60 flex items-center justify-center text-brand-400">
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">FIIT AI Career Advisor</h3>
              <p className="text-[11px] text-slate-400">Find the perfect tech track for your background in 60 seconds</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Question 1 */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block">Question 1 of 3</span>
            <h4 className="text-lg font-bold text-white">What is your current education or work background?</h4>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'cs', label: 'B.E / B.Tech (CS / IT / ECE) or BCA / MCA Graduate' },
                { id: 'non-it-eng', label: 'Mechanical / Civil / EEE Engineering seeking IT career' },
                { id: 'arts', label: 'B.Com / BBA / B.Sc (Arts, Science, or Commerce)' },
                { id: 'working', label: 'Working Professional looking to switch to high-paying role' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectAnswer('background', opt.id)}
                  className="w-full text-left p-3.5 rounded-xl bg-slate-950 hover:bg-brand-950/40 border border-slate-800 hover:border-brand-500/50 text-slate-200 hover:text-white transition-all text-xs font-semibold flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question 2 */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block">Question 2 of 3</span>
            <h4 className="text-lg font-bold text-white">Which tech domain excites you the most?</h4>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'web', label: 'Building Web Apps, Websites, & APIs (Full Stack Engineering)' },
                { id: 'data', label: 'Data Science, Machine Learning, Analytics, & AI models' },
                { id: 'cloud', label: 'Cloud Architecture (AWS), Linux, & DevOps CI/CD Automation' },
                { id: 'networking', label: 'Cisco Routers, Network Switching, & Infrastructure (CCNA)' },
                { id: 'qa', label: 'Software Quality Assurance, Bug Hunting, & Selenium Testing' },
                { id: 'finance', label: 'Corporate Accounting, GST E-Filing, & Tally Prime' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectAnswer('interest', opt.id)}
                  className="w-full text-left p-3.5 rounded-xl bg-slate-950 hover:bg-brand-950/40 border border-slate-800 hover:border-brand-500/50 text-slate-200 hover:text-white transition-all text-xs font-semibold flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentStep(1)}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 pt-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Question</span>
            </button>
          </div>
        )}

        {/* Question 3 */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <span className="text-xs font-bold text-brand-400 uppercase tracking-wider block">Question 3 of 3</span>
            <h4 className="text-lg font-bold text-white">How soon do you plan to secure a job or placement?</h4>

            <div className="space-y-2.5 pt-2">
              {[
                { id: 'urgent', label: 'Immediately (Within 2 to 3 months — Fast-Track Placement)' },
                { id: 'standard', label: 'Comprehensive Master Program (4 to 5 months with Capstones)' },
                { id: 'weekend', label: 'Weekend / Evening batches alongside my current job/studies' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectAnswer('timeframe', opt.id)}
                  className="w-full text-left p-3.5 rounded-xl bg-slate-950 hover:bg-brand-950/40 border border-slate-800 hover:border-brand-500/50 text-slate-200 hover:text-white transition-all text-xs font-semibold flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentStep(2)}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 pt-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous Question</span>
            </button>
          </div>
        )}

        {/* Step 4: AI Recommendation Card */}
        {currentStep === 4 && recommendation && (
          <div className="space-y-5 animate-fade-in">
            <div className="text-center p-4 bg-brand-950/60 rounded-xl border border-brand-800">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-800 text-white mb-2 inline-block">
                98% Match for Your Profile
              </span>
              <h4 className="text-xl font-extrabold text-white">{recommendation.title}</h4>
              <p className="text-xs text-brand-300 mt-1">{recommendation.duration} • {recommendation.mode}</p>
            </div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Target Role in MNCs:</span>
                <span className="font-bold text-white">{recommendation.careerRoles[0]}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Expected Salary Band:</span>
                <span className="font-bold text-emerald-400">₹4.8 - ₹9.0 LPA</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Placement Assistance:</span>
                <span className="font-bold text-cyan-400">Guaranteed with FIIT Jobs Cell</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setCurrentStep(1)}
                className="py-2.5 px-4 text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 rounded-xl"
              >
                Retake Quiz
              </button>

              <button
                onClick={() => {
                  onClose();
                  onSelectCourse(recommendation);
                }}
                className="py-2.5 px-6 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-glow transition-all flex items-center gap-1.5"
              >
                <span>View Program Details & Enroll</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
