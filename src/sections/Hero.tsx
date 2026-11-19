import React from 'react';
import { portfolioData } from '../data/content';
import { Button } from '../components/ui/Button';
import { ConcentricRings } from '../components/ui/ConcentricRings';
import { KittyAnimation } from '../components/KittyAnimation';
import { Download, Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaPython } from 'react-icons/fa';
import { SiPytorch } from 'react-icons/si';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-4 sm:pt-28 sm:pb-6 lg:pt-32 lg:pb-8 overflow-hidden bg-[#EDE0CC]"
    >
      {/* Background radial ambient lighting - warm caramel & mocha */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B9875B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[#E8DAC5]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small label chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#F2E7D8] border border-[#D2BFA6] text-[#75451F] font-mono text-[11px] sm:text-xs tracking-[0.12em] sm:tracking-[0.15em] uppercase mb-4 sm:mb-6 shadow-[0_2px_8px_rgba(84,53,31,0.05)]">
              <span className="w-2 h-2 rounded-full bg-[#B9875B] animate-ping" />
              <span className="font-semibold">{portfolioData.profile.name}</span>
              <span className="text-[#806F60]/60">•</span>
              <span className="text-[#806F60] text-[10px] sm:text-[11px] font-sans lowercase">vssut burla</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-heading font-bold text-3xl xs:text-4xl sm:text-6xl lg:text-[64px] leading-[1.1] tracking-[-0.01em] text-[#54351F] mb-4 sm:mb-6">
              {portfolioData.profile.heroTitleLine1}
              <br />
              <span className="text-[#B9875B] drop-shadow-[0_2px_15px_rgba(185,135,91,0.2)]">
                {portfolioData.profile.heroTitleLine2}
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-[#44372E] text-sm sm:text-lg max-w-xl leading-relaxed mb-6 sm:mb-8 font-sans">
              {portfolioData.profile.heroSubcopy}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                icon={<ArrowRight size={18} />}
                className="w-full xs:w-auto justify-center"
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
                className="w-full xs:w-auto justify-center"
              >
                Download Resume
              </Button>
            </div>

            {/* Social Circles */}
            <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-[#D2BFA6]/60 w-full sm:w-auto">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#806F60]">
                Connect:
              </span>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <a
                  href={portfolioData.profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F2E7D8] border border-[#D2BFA6] flex items-center justify-center text-[#75451F] hover:text-white hover:border-[#75451F] hover:bg-[#75451F] hover:scale-110 hover:shadow-[0_4px_12px_rgba(117,69,31,0.25)] transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={17} />
                </a>
                <a
                  href={portfolioData.profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F2E7D8] border border-[#D2BFA6] flex items-center justify-center text-[#75451F] hover:text-white hover:border-[#75451F] hover:bg-[#75451F] hover:scale-110 hover:shadow-[0_4px_12px_rgba(117,69,31,0.25)] transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn size={17} />
                </a>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F2E7D8] border border-[#D2BFA6] flex items-center justify-center text-[#75451F] hover:text-white hover:border-[#75451F] hover:bg-[#75451F] hover:scale-110 hover:shadow-[0_4px_12px_rgba(117,69,31,0.25)] transition-all duration-200"
                  aria-label="Email Kajal"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Kajal's Photo with Concentric Rings & Floating Chips */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] aspect-square flex items-center justify-center">
              {/* Concentric Rotating Line-Ring Ornament (warm caramel & beige) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="animate-spin-slow">
                  <ConcentricRings size={460} className="scale-[0.65] xs:scale-75 sm:scale-90 lg:scale-100" />
                </div>
              </div>

              {/* Floating warm glass decorative orb 1 */}
              <div className="absolute -top-3 right-6 sm:-top-4 sm:right-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#F2E7D8]/85 border border-[#B9875B]/40 shadow-[0_10px_25px_rgba(84,53,31,0.1)] backdrop-blur-md animate-float-slow pointer-events-none flex items-center justify-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#B9875B]/50 blur-[2px]" />
              </div>

              {/* Floating warm glass decorative orb 2 */}
              <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#F2E7D8]/85 border border-[#D2BFA6] shadow-[0_10px_25px_rgba(84,53,31,0.1)] backdrop-blur-md animate-float-delayed pointer-events-none flex items-center justify-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#75451F]/40 blur-[2px]" />
              </div>

              {/* Floating Chip 1: Python */}
              <div className="absolute top-4 -left-1 xs:top-6 xs:-left-3 sm:top-12 sm:-left-6 z-20 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#F2E7D8] border border-[#D2BFA6] shadow-[0_8px_20px_rgba(84,53,31,0.1)] backdrop-blur-md flex items-center gap-1.5 sm:gap-2 animate-float-slow">
                <FaPython className="text-[#75451F] text-sm sm:text-lg" />
                <span className="font-mono text-[10px] sm:text-xs font-semibold text-[#54351F]">Python 3</span>
              </div>

              {/* Floating Chip 2: RAG */}
              <div className="absolute bottom-4 -right-1 xs:bottom-6 xs:-right-3 sm:bottom-12 sm:-right-6 z-20 px-2.5 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#F2E7D8] border border-[#D2BFA6] shadow-[0_8px_20px_rgba(84,53,31,0.1)] backdrop-blur-md flex items-center gap-1.5 sm:gap-2 animate-float-delayed">
                <SiPytorch className="text-[#B9875B] text-sm sm:text-lg" />
                <span className="font-mono text-[10px] sm:text-xs font-semibold text-[#54351F]">RAG · LangChain</span>
              </div>

              {/* Central Photo Frame */}
              <div className="relative z-10 w-[240px] h-[300px] xs:w-[270px] xs:h-[335px] sm:w-[320px] sm:h-[390px] max-w-[85vw] rounded-frame overflow-hidden bg-[#F2E7D8] p-1.5 border border-[#D2BFA6] shadow-[0_20px_50px_-15px_rgba(84,53,31,0.18)] group">
                <div className="w-full h-full rounded-[22px] overflow-hidden relative bg-[#E8DAC5]">
                  <img
                    src={portfolioData.profile.avatarUrl}
                    alt="Kajal Mohapatra - AI & ML Engineer"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                    width="320"
                    height="390"
                  />
                  {/* Subtle warm gradient overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#54351F]/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Status badge at bottom of photo */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 py-1.5 px-2.5 sm:px-3 rounded-xl bg-[#F2E7D8]/92 backdrop-blur-md border border-[#D2BFA6] flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#806F60] shadow-sm">
                    <span className="flex items-center gap-1.5 text-[#54351F] font-medium truncate">
                      <span className="w-2 h-2 rounded-full bg-[#B9875B] animate-pulse flex-shrink-0" />
                      <span className="truncate">Available for Internships</span>
                    </span>
                    <span className="text-[#75451F] font-semibold flex-shrink-0 ml-1">2026–27</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Persian Kittens Section Signature */}
      <KittyAnimation sectionName="Home" />
    </section>
  );
};
