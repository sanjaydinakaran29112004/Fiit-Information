import React, { useState } from 'react';
import { 
  Calculator, 
  X, 
  Sparkles, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

export default function EmiCalculator({ initialFee = 38000, onClose, onApplyEmi }) {
  const [totalFee, setTotalFee] = useState(initialFee);
  const [downPayment, setDownPayment] = useState(5000);
  const [tenureMonths, setTenureMonths] = useState(6);

  const financedAmount = Math.max(0, totalFee - downPayment);
  const monthlyEmi = Math.round(financedAmount / tenureMonths);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="relative bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-950 border border-amber-700/60 flex items-center justify-center text-amber-400">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">0% No-Cost EMI Calculator</h3>
              <p className="text-[11px] text-slate-400">Flexible monthly payment schemes via FIIT Formacion</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sliders and Controls */}
        <div className="space-y-5 text-xs text-slate-300">
          
          {/* Total Course Fee Slider */}
          <div>
            <div className="flex justify-between font-semibold mb-1.5">
              <span>Course Program Fee</span>
              <span className="text-white font-bold text-sm">₹{totalFee.toLocaleString('en-IN')}</span>
            </div>
            <input 
              type="range"
              min={15000}
              max={50000}
              step={1000}
              value={totalFee}
              onChange={(e) => setTotalFee(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>₹15,000</span>
              <span>₹50,000</span>
            </div>
          </div>

          {/* Initial Down Payment */}
          <div>
            <div className="flex justify-between font-semibold mb-1.5">
              <span>Initial Down Payment (Scholarship / Token)</span>
              <span className="text-emerald-400 font-bold text-sm">₹{downPayment.toLocaleString('en-IN')}</span>
            </div>
            <input 
              type="range"
              min={0}
              max={20000}
              step={1000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>₹0 (Zero Down Payment)</span>
              <span>₹20,000</span>
            </div>
          </div>

          {/* Tenure Selection */}
          <div>
            <span className="font-semibold block mb-2">Select Installment Duration</span>
            <div className="grid grid-cols-4 gap-2">
              {[3, 6, 9, 12].map(m => (
                <button
                  key={m}
                  onClick={() => setTenureMonths(m)}
                  className={`py-2 px-3 rounded-xl font-bold text-xs transition-colors ${
                    tenureMonths === m
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {m} Months
                </button>
              ))}
            </div>
          </div>

          {/* Calculated EMI Display Box */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center space-y-2">
            <span className="text-slate-400 text-xs block">Estimated Monthly Installment (0% Interest)</span>
            <div className="text-3xl font-extrabold text-amber-400 font-display">
              ₹{monthlyEmi.toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-normal">/ month</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Total Financed Amount: <strong className="text-white">₹{financedAmount.toLocaleString('en-IN')}</strong> across {tenureMonths} equal monthly installments.
            </p>
          </div>

          {/* Trust points */}
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Processing Fees & No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instant Approval on Aadhaar / PAN</span>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={() => {
              onClose();
              onApplyEmi({ totalFee, downPayment, tenureMonths, monthlyEmi });
            }}
            className="w-full py-3 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Proceed with this EMI Plan</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>
      </div>
    </div>
  );
}
