import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InstitutionalStandard from './components/InstitutionalStandard';
import WhatWeOffer from './components/WhatWeOffer';
import ExplorePrograms from './components/ExplorePrograms';
import EngineeredPedagogy from './components/EngineeredPedagogy';
import FiitEdgeFramework from './components/FiitEdgeFramework';
import InternshipTiers from './components/InternshipTiers';
import CareerTransitionEngine from './components/CareerTransitionEngine';
import WhyChooseFiit from './components/WhyChooseFiit';
import PhysicalInfrastructure from './components/PhysicalInfrastructure';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import TechCounselingBanner from './components/TechCounselingBanner';
import StitchFooter from './components/StitchFooter';
import EnquireModal from './components/EnquireModal';
import SyllabusModal from './components/SyllabusModal';

export default function App() {
  const [enquireModalOpen, setEnquireModalOpen] = useState(false);
  const [selectedProgramForEnquire, setSelectedProgramForEnquire] = useState('');
  const [selectedProgramForSyllabus, setSelectedProgramForSyllabus] = useState(null);

  const handleOpenEnquire = (programTitle = '') => {
    setSelectedProgramForEnquire(programTitle);
    setEnquireModalOpen(true);
  };

  const handleOpenSyllabus = (program) => {
    setSelectedProgramForSyllabus(program);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-slate-900 font-sans antialiased selection:bg-[#1a1f4b] selection:text-white relative">
      
      {/* Top Navigation Bar */}
      <Header 
        onOpenEnquire={handleOpenEnquire} 
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section + 4 Stats Cards */}
        <HeroSection 
          onOpenEnquire={handleOpenEnquire} 
        />

        {/* 2. Institutional Standard (4 Cards) */}
        <InstitutionalStandard />

        {/* 3. Our Educational Ecosystem - What We Offer (3 Tracks) */}
        <WhatWeOffer 
          onSelectAction={(action) => {}}
        />

        {/* 4. Curated Curricula - Explore Our Programs (9 Cards) */}
        <ExplorePrograms 
          onOpenEnquire={handleOpenEnquire}
          onOpenSyllabus={handleOpenSyllabus}
        />

        {/* 5. Targeted Project Immersions - Internships (Learn by Doing. Grow by Building.) */}
        <InternshipTiers 
          onOpenEnquire={handleOpenEnquire}
        />

        {/* 6. Engineered Pedagogy (6 Phases) */}
        <EngineeredPedagogy />

        {/* 7. Proprietary Incubation Framework - FIIT EDGE (8 Stages) */}
        <FiitEdgeFramework />

        {/* 8. Career Transition Engine - Placement Readiness Program (8 Cards) */}
        <CareerTransitionEngine />

        {/* 9. The FIIT Advantage - Why Choose FIIT? (6 Cards) */}
        <WhyChooseFiit />

        {/* 10. Physical Infrastructure - 9 Centers Across Tamil Nadu */}
        <PhysicalInfrastructure />

        {/* 11. Authentic Transformations - Student Testimonials (3 Cards) */}
        <TestimonialsSection />

        {/* 12. Clear Answers - Frequently Asked Questions */}
        <FaqSection />

        {/* 13. Accelerate Your IT Trajectory - Tech Counseling CTA Box */}
        <TechCounselingBanner />
      </main>

      {/* 14. Deep Navy Footer */}
      <StitchFooter 
        onOpenEnquire={handleOpenEnquire}
      />

      {/* INTERACTIVE MODALS */}
      {enquireModalOpen && (
        <EnquireModal 
          initialProgram={selectedProgramForEnquire}
          onClose={() => setEnquireModalOpen(false)}
        />
      )}

      {selectedProgramForSyllabus && (
        <SyllabusModal 
          program={selectedProgramForSyllabus}
          onClose={() => setSelectedProgramForSyllabus(null)}
          onEnquire={(title) => handleOpenEnquire(title)}
        />
      )}

    </div>
  );
}
