import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { BATCHES } from '../data/batchesData';

export default function BatchSchedule({ onBookSeat }) {
  const [filterMode, setFilterMode] = useState('ALL');

  const filteredBatches = BATCHES.filter(b => {
    if (filterMode === 'CLASSROOM') return b.mode.includes('Classroom') || b.mode.includes('Lab');
    if (filterMode === 'ONLINE') return b.mode.includes('Online');
    if (filterMode === 'WEEKEND') return b.scheduleType.includes('Weekend');
    return true;
  });

  return (
    <section id="batches" className="py-16 sm:py-24 bg-slate-900/40 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-semibold mb-3">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>Timings & Batches</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Upcoming Batch Calendar & Schedules
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Small batch sizes (Max 15 - 20 candidates per batch) for individualized mentor feedback and live lab access.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'ALL', label: 'All Batches' },
              { id: 'CLASSROOM', label: 'Avadi Classroom' },
              { id: 'ONLINE', label: 'Live Online' },
              { id: 'WEEKEND', label: 'Weekend Batches' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilterMode(f.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  filterMode === f.id
                    ? 'bg-cyan-600 text-white shadow'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Batches Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBatches.map(batch => {
            const seatsRemaining = batch.totalSeats - batch.filledSeats;
            const progressPercent = Math.round((batch.filledSeats / batch.totalSeats) * 100);

            return (
              <div 
                key={batch.id}
                className="bg-slate-950/90 rounded-2xl border border-slate-800/80 hover:border-cyan-500/50 p-6 flex flex-col justify-between group transition-all duration-300 card-hover-border"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800/60">
                      Starts: {batch.startDate}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      seatsRemaining <= 3 
                        ? 'bg-red-950/80 text-red-300 border border-red-800/60 animate-pulse' 
                        : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                    }`}>
                      {batch.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {batch.courseName}
                  </h3>

                  <div className="mt-4 space-y-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{batch.timing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{batch.scheduleType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-cyan-200">{batch.mode}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Users className="w-4 h-4 text-slate-500 shrink-0" />
                      <span>Trainer: <strong className="text-slate-300">{batch.instructor}</strong></span>
                    </div>
                  </div>

                  {/* Seat Occupancy Meter */}
                  <div className="mt-5 pt-4 border-t border-slate-900">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-slate-400">Seat Capacity:</span>
                      <span className="font-semibold text-white">
                        {batch.filledSeats} / {batch.totalSeats} Enrolled
                      </span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                      <div 
                        className={`h-full rounded-full ${
                          progressPercent > 80 ? 'bg-gradient-to-r from-amber-500 to-red-500' : 'bg-gradient-to-r from-cyan-500 to-brand-500'
                        }`}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => onBookSeat(batch)}
                    className="w-full py-2.5 px-4 text-xs font-bold text-white bg-slate-900 hover:bg-cyan-600 border border-slate-800 hover:border-cyan-500 rounded-xl transition-all flex items-center justify-center gap-2 group/btn shadow-sm"
                  >
                    <span>Reserve Seat in this Batch</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
