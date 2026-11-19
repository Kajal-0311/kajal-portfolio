import React from 'react';
import { portfolioData, type ServiceItem } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { Brain, Sparkles, BarChart3, Layout, Check } from 'lucide-react';

const iconMap = {
  Brain: Brain,
  Sparkles: Sparkles,
  BarChart3: BarChart3,
  Layout: Layout,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-[#E8DAC5] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#B9875B]/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <Reveal yOffset={20}>
          <SectionHeading
            label="EXPERTISE"
            title="CORE ENGINEERING CAPABILITIES"
            highlight="CAPABILITIES"
            subtitle="Hands-on technical competencies bridging modern machine learning algorithms, generative AI pipelines, and practical software engineering."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {portfolioData.services.map((service: ServiceItem, idx: number) => {
            const Icon = iconMap[service.iconName] || Brain;

            return (
              <Reveal key={service.id} delay={idx * 0.08} yOffset={24}>
                <Card className="flex flex-col h-full justify-between !p-5 sm:!p-6 group">
                  <div>
                    {/* Icon container */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#EDE0CC] border border-[#D2BFA6] flex items-center justify-center text-[#75451F] mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-[#75451F] group-hover:text-white group-hover:border-[#75451F] transition-all duration-300 shadow-xs">
                      <Icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#54351F] mb-2 sm:mb-3 group-hover:text-[#75451F] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#44372E] text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="pt-3.5 sm:pt-4 border-t border-[#D2BFA6]/60 space-y-2 sm:space-y-2.5 mt-auto">
                    {service.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-[#44372E] font-sans">
                        <span className="w-4 h-4 rounded-full bg-[#EDE0CC] border border-[#D2BFA6] flex items-center justify-center text-[#B9875B] flex-shrink-0">
                          <Check size={10} />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
