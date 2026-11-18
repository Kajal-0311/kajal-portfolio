import React from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { TechMarquee } from './sections/TechMarquee';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const sectionIds = [
    'home',
    'about',
    'projects',
    'services',
    'experience',
    'skills',
    'certifications',
    'contact',
  ];
  const activeSection = useScrollSpy(sectionIds, 120);

  return (
    <div className="min-h-screen bg-bg-900 text-text font-sans selection:bg-accent selection:text-white">
      {/* Sticky Blurred Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Layout */}
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Services />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
