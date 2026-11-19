import React from 'react';
import { portfolioData, type SkillGroup } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Chip } from '../components/ui/Chip';
import { Reveal } from '../components/ui/Reveal';
import { KittyAnimation } from '../components/KittyAnimation';
import { Code2, Brain, Sparkles, Terminal, Database, Activity } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Programming Languages': <Code2 size={18} className="text-[#75451F]" />,
  'ML & Data Science': <Brain size={18} className="text-[#B9875B]" />,
  'Generative AI & RAG': <Sparkles size={18} className="text-[#75451F]" />,
  'Tools & Deployment': <Terminal size={18} className="text-[#B9875B]" />,
  'Databases': <Database size={18} className="text-[#75451F]" />,
  'Computational Research': <Activity size={18} className="text-[#B9875B]" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#E8DAC5] relative overflow-hidden">
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#B9875B]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <Reveal yOffset={20}>
          <SectionHeading
            label="TOOLBOX"
            title="TECHNICAL SKILLS & PROFICIENCIES"
            highlight="SKILLS"
            subtitle="Categorized technical stack based on applied engineering work in machine learning, generative retrieval, and data analysis."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skillGroups.map((group: SkillGroup, idx: number) => (
            <Reveal key={group.category} delay={idx * 0.07} yOffset={20}>
              <Card className="h-full flex flex-col justify-between !p-6 group">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-[#D2BFA6]/60">
                    <div className="w-9 h-9 rounded-lg bg-[#EDE0CC] border border-[#D2BFA6] flex items-center justify-center group-hover:scale-110 group-hover:border-[#B9875B] transition-transform shadow-xs">
                      {categoryIcons[group.category] || <Code2 size={18} className="text-[#75451F]" />}
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#54351F] group-hover:text-[#75451F] transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  {/* Chips Cluster */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Chip
                        key={skill}
                        variant="default"
                        className="py-1 px-3 text-xs font-mono font-medium"
                      >
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D2BFA6]/40 flex items-center justify-between text-[11px] font-mono text-[#806F60]">
                  <span>{group.skills.length} competencies</span>
                  <span className="text-[#75451F] font-semibold">● applied</span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Persian Kittens Section Signature */}
      <KittyAnimation sectionName="Skills" />
    </section>
  );
};
