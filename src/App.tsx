import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsStrip } from './components/MetricsStrip';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-chassis text-ink-primary blueprint-grid">
      {/* Top Lighting Hotspot */}
      <div className="fixed top-0 left-0 w-[50vw] h-[40vh] bg-radial from-white/40 to-transparent pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1 space-y-4">
          <Hero />
          <MetricsStrip />
          <ExperienceTimeline />
          <ProjectsShowcase />
          <SkillsMatrix />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
