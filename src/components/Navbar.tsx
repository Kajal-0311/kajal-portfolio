import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/content';
import { Button } from './ui/Button';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'What I Do', href: '#services', id: 'services' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6EF]/92 backdrop-blur-md border-b border-[#D8C1A8]/80 shadow-[0_4px_20px_rgba(84,53,31,0.06)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#B9875B]/50 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-[#75451F] flex items-center justify-center font-heading font-bold text-lg text-[#FAF6EF] shadow-[0_4px_14px_rgba(117,69,31,0.25)] group-hover:bg-[#54351F] group-hover:scale-105 transition-all">
              {portfolioData.profile.logoMark}
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-wider text-[#54351F] group-hover:text-[#75451F] transition-colors">
                KAJAL
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#806F60]">
                AI / ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-[#FFF9F1]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D8C1A8] shadow-[0_2px_10px_rgba(84,53,31,0.04)]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#54351F] font-bold bg-[#EFE3D3]/70'
                      : 'text-[#806F60] hover:text-[#54351F] hover:bg-[#FAF6EF]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#75451F] rounded-full shadow-[0_0_8px_rgba(117,69,31,0.4)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              className="hidden sm:inline-flex"
            >
              Let's Talk
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[#FFF9F1] border border-[#D8C1A8] text-[#54351F] hover:text-[#75451F] focus:outline-none focus:ring-2 focus:ring-[#B9875B]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#FAF6EF]/98 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col justify-between p-8 pt-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#B9875B] mb-2 font-semibold">Navigation</p>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`flex items-center justify-between text-2xl font-heading font-semibold py-3 border-b border-[#D8C1A8]/50 transition-colors ${
                  isActive ? 'text-[#75451F]' : 'text-[#54351F] hover:text-[#75451F]'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={18} className={isActive ? 'text-[#75451F]' : 'text-[#806F60]'} />
              </a>
            );
          })}
        </div>

        <div className="pt-6 border-t border-[#D8C1A8] flex flex-col gap-3">
          <Button
            variant="primary"
            size="md"
            href="#contact"
            className="w-full justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's Talk
          </Button>
          <p className="text-center text-xs text-[#806F60] font-mono">
            {portfolioData.profile.email}
          </p>
        </div>
      </div>
    </>
  );
};
