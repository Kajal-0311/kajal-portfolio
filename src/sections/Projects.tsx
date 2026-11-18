import React, { useState } from 'react';
import { portfolioData, type Project } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Chip } from '../components/ui/Chip';
import { Reveal } from '../components/ui/Reveal';
import { ProjectThumbnail } from '../components/ProjectThumbnail';
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-bg-800/50 relative overflow-hidden">
      {/* Background radial accent glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <Reveal yOffset={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              label="PORTFOLIO"
              title="FEATURED AI & MACHINE LEARNING PROJECTS"
              highlight="AI & MACHINE LEARNING"
              subtitle="End-to-end intelligent systems: from regression & classification models with Streamlit frontends to fully offline RAG and defence computational imaging."
              className="mb-0"
            />
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-text-muted mt-4 md:mt-0">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Verified Resume Projects</span>
            </div>
          </div>
        </Reveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.projects.map((project: Project, idx: number) => {
            const isExpanded = expandedId === project.id;

            return (
              <Reveal key={project.id} delay={idx * 0.1} yOffset={24}>
                <Card className="flex flex-col h-full !p-5 sm:!p-6 group justify-between">
                  <div>
                    {/* Visual Thumbnail */}
                    <div className="mb-5 overflow-hidden rounded-xl">
                      <ProjectThumbnail projectId={project.id} />
                    </div>

                    {/* Badge + Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      {project.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-accent/15 text-accent border border-accent/25">
                          {project.badge}
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-text-muted">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-text mb-2.5 group-hover:text-accent transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Tagline / 2-line Description */}
                    <p className="text-text-muted text-sm leading-relaxed mb-4 font-sans line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.chips.map((chip) => (
                        <Chip key={chip} variant="default" className="text-[11px] py-0.5 px-2.5">
                          {chip}
                        </Chip>
                      ))}
                    </div>

                    {/* Expandable Architecture & Details Drawer */}
                    {isExpanded && (
                      <div className="my-4 pt-4 border-t border-border/70 text-xs space-y-3 font-sans animate-fadeIn">
                        <div>
                          <span className="font-mono text-accent-2 font-semibold uppercase tracking-wider block mb-1">
                            Challenge / Problem:
                          </span>
                          <p className="text-text-muted leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                          <span className="font-mono text-accent font-semibold uppercase tracking-wider block mb-1">
                            Engineering Approach:
                          </span>
                          <p className="text-text-muted leading-relaxed">{project.approach}</p>
                        </div>
                        <div>
                          <span className="font-mono text-green-400 font-semibold uppercase tracking-wider block mb-1">
                            Deliverable & Result:
                          </span>
                          <p className="text-text-muted leading-relaxed">{project.result}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Action Links & Accordion Toggle */}
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between mt-auto">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-accent transition-colors py-1"
                    >
                      <Layers size={14} className="text-accent" />
                      <span>{isExpanded ? 'Hide Specs' : 'View Specs'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <div className="flex items-center gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-surface-2 border border-border flex items-center justify-center text-text-muted hover:text-white hover:border-accent-2 hover:bg-accent-2/20 transition-all"
                          aria-label={`Demo for ${project.title}`}
                          title="Live Demo / Output"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white hover:bg-accent/80 hover:scale-105 shadow-[0_0_15px_rgba(30,123,255,0.4)] transition-all"
                        aria-label={`GitHub repo for ${project.title}`}
                        title="View GitHub Repository"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Mobile carousel indicator dots */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-8">
          {portfolioData.projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveMobileIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeMobileIdx === i ? 'w-6 bg-accent' : 'w-2 bg-surface-2 border border-border'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
