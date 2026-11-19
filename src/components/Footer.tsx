import React from 'react';
import { portfolioData } from '../data/content';
import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'What I Do', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#54351F] text-[#F2E7D8] border-t border-[#75451F] pt-12 pb-8 sm:pt-16 sm:pb-12 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-[#75451F]">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#75451F] border border-[#B9875B]/40 flex items-center justify-center font-heading font-bold text-lg text-[#F2E7D8] shadow-[0_4px_14px_rgba(0,0,0,0.2)] flex-shrink-0">
              {portfolioData.profile.logoMark}
            </div>
            <div>
              <span className="font-heading font-bold text-base tracking-wider text-[#F2E7D8] block">
                KAJAL MOHAPATRA
              </span>
              <span className="text-xs font-mono text-[#D2BFA6]">
                {portfolioData.profile.roleTagline}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 text-xs font-medium text-[#D2BFA6]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#B9875B] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#75451F] border border-[#B9875B]/30 flex items-center justify-center text-[#F2E7D8] hover:bg-[#B9875B] hover:text-[#54351F] transition-all flex-shrink-0 cursor-pointer shadow-xs self-end md:self-auto"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Bottom copyright & socials */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D2BFA6]">
          <p className="text-center sm:text-left leading-relaxed">
            © 2026 Kajal Mohapatra. All rights reserved. B.Tech CSE (AI & ML) @ VSSUT Burla.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={portfolioData.profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D2BFA6] hover:text-[#F2E7D8] transition-colors p-1"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={portfolioData.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D2BFA6] hover:text-[#B9875B] transition-colors p-1"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href={`mailto:${portfolioData.profile.email}`}
              className="text-[#B9875B] hover:text-[#F2E7D8] transition-colors text-xs font-sans break-all"
            >
              {portfolioData.profile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
