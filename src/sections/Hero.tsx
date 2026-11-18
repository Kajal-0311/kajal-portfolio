import React from 'react';
import { portfolioData } from '../data/content';
import { Button } from '../components/ui/Button';
import { ConcentricRings } from '../components/ui/ConcentricRings';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaPython } from 'react-icons/fa';
import { SiPytorch } from 'react-icons/si';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden bg-bg-900"
    >
      {/* Background radial ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-accent-2/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small label chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-accent-2 font-mono text-xs tracking-[0.15em] uppercase mb-6 shadow-[0_0_20px_rgba(30,123,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>{portfolioData.profile.name}</span>
              <span className="text-text-muted/60">•</span>
              <span className="text-text-muted text-[11px] font-sans lowercase">vssut burla</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-heading font-bold text-4xl sm:text-6xl lg:text-[64px] leading-[1.08] tracking-[-0.01em] text-text mb-6">
              {portfolioData.profile.heroTitleLine1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-accent-2 drop-shadow-[0_0_35px_rgba(30,123,255,0.4)]">
                {portfolioData.profile.heroTitleLine2}
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-text-muted text-base sm:text-lg max-w-xl leading-relaxed mb-8 font-sans">
              {portfolioData.profile.heroSubcopy}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                icon={<ArrowRight size={18} />}
                className="w-full sm:w-auto"
              >
                Get in Touch
              </Button>
              <Button
                variant="ghost"
                size="lg"
                href={portfolioData.profile.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<Download size={18} />}
                className="w-full sm:w-auto"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Circles */}
            <div className="flex items-center gap-4 pt-4 border-t border-border/60 w-full sm:w-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-text-muted">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text hover:text-white hover:border-accent hover:bg-accent/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(30,123,255,0.4)] transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={portfolioData.profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text hover:text-white hover:border-accent hover:bg-accent/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(30,123,255,0.4)] transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text hover:text-white hover:border-accent hover:bg-accent/20 hover:scale-110 hover:shadow-[0_0_15px_rgba(30,123,255,0.4)] transition-all duration-200"
                  aria-label="Email Kajal"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Kajal's Photo with Concentric Rings & Floating Chips */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              {/* Concentric Rotating Line-Ring Ornament */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="animate-spin-slow">
                  <ConcentricRings size={460} className="scale-90 sm:scale-100" />
                </div>
              </div>

              {/* Floating dark glass decorative orb 1 */}
              <div className="absolute -top-4 right-10 w-14 h-14 rounded-full bg-gradient-to-br from-surface-2 to-surface border border-accent/30 shadow-[0_10px_30px_rgba(30,123,255,0.25)] backdrop-blur-md animate-float-slow pointer-events-none flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-accent-2/60 blur-[2px]" />
              </div>

              {/* Floating dark glass decorative orb 2 */}
              <div className="absolute -bottom-6 left-6 w-16 h-16 rounded-full bg-gradient-to-br from-surface-2 to-surface border border-accent-2/30 shadow-[0_10px_30px_rgba(56,225,255,0.2)] backdrop-blur-md animate-float-delayed pointer-events-none flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-accent/70 blur-[2px]" />
              </div>

              {/* Floating Chip 1: Python */}
              <div className="absolute top-12 -left-4 sm:-left-6 z-20 px-3.5 py-2 rounded-full bg-surface/90 border border-accent/40 shadow-[0_10px_25px_rgba(30,123,255,0.3)] backdrop-blur-md flex items-center gap-2 animate-float-slow">
                <FaPython className="text-[#38E1FF] text-lg" />
                <span className="font-mono text-xs font-semibold text-text">Python 3</span>
              </div>

              {/* Floating Chip 2: RAG */}
              <div className="absolute bottom-12 -right-4 sm:-right-6 z-20 px-3.5 py-2 rounded-full bg-surface/90 border border-accent-2/40 shadow-[0_10px_25px_rgba(56,225,255,0.25)] backdrop-blur-md flex items-center gap-2 animate-float-delayed">
                <SiPytorch className="text-accent text-lg" />
                <span className="font-mono text-xs font-semibold text-text">RAG · LangChain</span>
              </div>

              {/* Central Photo Frame */}
              <div className="relative z-10 w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] rounded-frame overflow-hidden bg-gradient-to-b from-surface-2 to-surface p-1.5 border border-accent/30 shadow-[0_20px_60px_-15px_rgba(30,123,255,0.4)] group">
                <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-bg-800">
                  <img
                    src={portfolioData.profile.avatarUrl}
                    alt="Kajal Mohapatra - AI & ML Engineer"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                    width="320"
                    height="390"
                  />
                  {/* Subtle inner gradient shadow at base of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-900/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Status badge at bottom of photo */}
                  <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 rounded-xl bg-bg-900/80 backdrop-blur-md border border-border flex items-center justify-between text-[11px] font-mono text-text-muted">
                    <span className="flex items-center gap-1.5 text-text">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Available for Internships
                    </span>
                    <span className="text-accent">2026–2027</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
