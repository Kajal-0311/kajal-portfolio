import React, { useState } from 'react';
import { portfolioData, type Project } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Chip } from '../components/ui/Chip';
import { Reveal } from '../components/ui/Reveal';
import { ProjectThumbnail } from '../components/ProjectThumbnail';
import { KittyAnimation } from '../components/KittyAnimation';
import { ArrowUpRight, ExternalLink, ChevronDown, ChevronUp, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#EDE0CC] relative overflow-hidden">
      {/* Background radial accent glow - warm caramel */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#B9875B]/8 rounded-full blur-[140px] pointer-events-none" />

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
            <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#806F60] mt-4 md:mt-0 bg-[#E8DAC5] px-3.5 py-1.5 rounded-full border border-[#D2BFA6]">
              <span className="w-2 h-2 rounded-full bg-[#B9875B] animate-pulse" />
              <span className="font-medium text-[#54351F]">Verified Resume Projects</span>
            </div>
          </div>
        </Reveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioData.projects.map((project: Project, idx: number) => {
            const isExpanded = expandedId === project.id;

            return (
              <Reveal key={project.id} delay={idx * 0.1} yOffset={24}>
                <Card className="flex flex-col h-full !p-5 sm:!p-6 group justify-between hover:border-[#B9875B] transition-all">
                  <div>
                    {/* Visual Thumbnail */}
                    <div className="mb-5 overflow-hidden rounded-xl">
                      <ProjectThumbnail projectId={project.id} />
                    </div>

                    {/* Badge + Header */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      {project.badge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#E8DAC5] text-[#75451F] border border-[#D2BFA6]">
                          {project.badge}
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-[#806F60]">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#54351F] mb-2.5 group-hover:text-[#75451F] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Tagline / 2-line Description */}
                    <p className="text-[#44372E] text-sm leading-relaxed mb-4 font-sans line-clamp-3">
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
                      <div className="my-4 pt-4 border-t border-[#D2BFA6]/60 text-xs space-y-3 font-sans animate-fadeIn">
                        <div>
                          <span className="font-mono text-[#75451F] font-bold uppercase tracking-wider block mb-1">
                            Challenge / Problem:
                          </span>
                          <p className="text-[#44372E] leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                          <span className="font-mono text-[#B9875B] font-bold uppercase tracking-wider block mb-1">
                            Engineering Approach:
                          </span>
                          <p className="text-[#44372E] leading-relaxed">{project.approach}</p>
                        </div>
                        <div>
                          <span className="font-mono text-[#54351F] font-bold uppercase tracking-wider block mb-1">
                            Deliverable & Result:
                          </span>
                          <p className="text-[#44372E] leading-relaxed">{project.result}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Action Links & Accordion Toggle */}
                  <div className="pt-4 border-t border-[#D2BFA6]/50 flex items-center justify-between mt-auto">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#75451F] hover:text-[#54351F] transition-colors py-1 cursor-pointer font-medium"
                    >
                      <Layers size={14} className="text-[#B9875B]" />
                      <span>{isExpanded ? 'Hide Specs' : 'View Specs'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <div className="flex items-center gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-[#E8DAC5] border border-[#D2BFA6] flex items-center justify-center text-[#75451F] hover:text-[#54351F] hover:border-[#B9875B] hover:bg-[#F2E7D8] transition-all shadow-xs"
                          aria-label={`Demo for ${project.title}`}
                          title="Live Demo / Output"
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-[#75451F] flex items-center justify-center text-white hover:bg-[#54351F] hover:scale-105 shadow-[0_4px_12px_rgba(117,69,31,0.22)] transition-all"
                        aria-label={`GitHub repo for ${project.title}`}
                        title="View GitHub Repository"
                      >
                        <ArrowUpRight size={17} />
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
                activeMobileIdx === i ? 'w-6 bg-[#75451F]' : 'w-2 bg-[#D2BFA6]'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Persian Kittens Section Signature */}
      <KittyAnimation sectionName="Projects" />
    </section>
  );
};
