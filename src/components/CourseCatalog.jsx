import React, { useState } from 'react';
import { 
  COURSE_CATEGORIES, 
  COURSES 
} from '../data/coursesData';
import { 
  Search, 
  BookOpen, 
  Clock, 
  MapPin, 
  Star, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Layers, 
  Calculator,
  SlidersHorizontal
} from 'lucide-react';

export default function CourseCatalog({ 
  selectedCategory, 
  setSelectedCategory, 
  onSelectCourseForSyllabus, 
  onOpenAdmission,
  onOpenEmiForCourse 
}) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter courses based on category and search query
  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = selectedCategory === "All Programs" || course.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      course.title.toLowerCase().includes(q) ||
      course.category.toLowerCase().includes(q) ||
      course.description.toLowerCase().includes(q) ||
      course.tools.some(t => t.toLowerCase().includes(q));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-16 sm:py-24 bg-slate-900/40 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950/80 border border-brand-800 text-brand-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-brand-400" />
            <span>Job-Oriented Industry Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Explore Certified Technical Programs
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Designed in collaboration with hiring managers from top MNCs. Learn with real capstone projects and classroom labs in Avadi, Chennai.
          </p>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
            {COURSE_CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                  selectedCategory === category
                    ? 'bg-brand-600 text-white shadow-glow'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search React, Python, AWS, CCNA..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-slate-950/60 rounded-2xl border border-slate-800 p-8">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No programs found</h3>
            <p className="text-sm text-slate-400 mt-1">Try searching for other keywords like "MERN", "DevOps", or "Tally".</p>
            <button
              onClick={() => { setSelectedCategory("All Programs"); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-brand-600 text-white rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                className="bg-slate-950/90 rounded-2xl border border-slate-800/80 hover:border-brand-500/50 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-950/40"
              >
                {/* Card Header & Badge */}
                <div className="p-6 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-brand-950 text-brand-300 border border-brand-800/60">
                      {course.category}
                    </span>
                    {course.badge && (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        {course.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors line-clamp-2 leading-snug">
                    {course.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Metadata Row */}
                  <div className="mt-4 pt-3 border-t border-slate-900 grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{course.rating} ({course.reviewsCount} reviews)</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-1.5 text-[11px] text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                      <span className="truncate">{course.mode}</span>
                    </div>
                  </div>

                  {/* Tech stack tools pill tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {course.tools.slice(0, 5).map((tool, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                    {course.tools.length > 5 && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-900 text-slate-500">
                        +{course.tools.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer with Price, EMI, & Buttons */}
                <div className="p-6 pt-4 bg-slate-900/50 border-t border-slate-800/70 mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xs text-slate-400 block">Course Tuition</span>
                      <span className="text-xl font-extrabold text-white">₹{course.fee.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="text-right">
                      <button 
                        onClick={() => onOpenEmiForCourse(course)}
                        className="text-[11px] text-brand-300 hover:text-brand-200 flex items-center gap-1 font-semibold group/emi"
                      >
                        <Calculator className="w-3 h-3 text-brand-400" />
                        <span>EMI from ₹{course.monthlyEmi}/mo</span>
                      </button>
                      <span className="text-[10px] text-slate-500">0% Interest options</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectCourseForSyllabus(course)}
                      className="w-full py-2.5 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all flex items-center justify-center gap-1.5"
                    >
                      <Layers className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Syllabus</span>
                    </button>

                    <button
                      onClick={() => onOpenAdmission(course)}
                      className="w-full py-2.5 px-3 text-xs font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl shadow-md hover:shadow-brand-600/40 transition-all flex items-center justify-center gap-1"
                    >
                      <span>Enroll</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
