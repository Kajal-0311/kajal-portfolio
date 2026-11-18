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
            ? 'bg-bg-900/85 backdrop-blur-md border-b border-border shadow-[0_10px_30px_rgba(5,11,26,0.8)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-accent-2/50 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-heading font-bold text-lg text-white shadow-[0_0_20px_rgba(30,123,255,0.4)] group-hover:shadow-[0_0_30px_rgba(30,123,255,0.7)] group-hover:scale-105 transition-all">
              {portfolioData.profile.logoMark}
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-wider text-text group-hover:text-accent transition-colors">
                KAJAL
              </span>
              <span className="text-[10px] font-mono tracking-widest text-text-muted">
                AI / ML
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2 bg-surface/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-border">
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
                      ? 'text-white font-semibold'
                      : 'text-text-muted hover:text-text hover:bg-surface-2/40'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full shadow-[0_0_10px_#1E7BFF]" />
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
              className="md:hidden p-2 rounded-xl bg-surface border border-border text-text hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-bg-900/95 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col justify-between p-8 pt-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-2">Navigation</p>
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
                className={`flex items-center justify-between text-2xl font-heading font-semibold py-3 border-b border-border/50 transition-colors ${
                  isActive ? 'text-accent' : 'text-text hover:text-accent'
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={18} className={isActive ? 'text-accent' : 'text-text-muted'} />
              </a>
            );
          })}
        </div>

        <div className="pt-6 border-t border-border flex flex-col gap-3">
          <Button
            variant="primary"
            size="md"
            href="#contact"
            className="w-full justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's Talk
          </Button>
          <p className="text-center text-xs text-text-muted font-mono">
            {portfolioData.profile.email}
          </p>
        </div>
      </div>
    </>
  );
};
