import React from 'react';
import { portfolioData, type TimelineItem } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 bg-[#EDE0CC] relative overflow-hidden">
      {/* Decorative radial blur - warm caramel */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#B9875B]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <Reveal yOffset={20}>
          <SectionHeading
            label="BACKGROUND"
            title="EXPERIENCE & ACADEMIC JOURNEY"
            highlight="JOURNEY"
            subtitle="Hands-on defence research at DRDO coupled with rigorous coursework in Artificial Intelligence & Machine Learning at VSSUT Burla."
          />
        </Reveal>

        {/* Vertical Timeline */}
        <div className="relative pl-5 sm:pl-8 border-l-2 border-[#D2BFA6] ml-3 sm:ml-4 space-y-8 sm:space-y-12 max-w-4xl">
          {portfolioData.timeline.map((item: TimelineItem, idx: number) => {
            const isExperience = item.type === 'experience';
            const isPrimary = idx <= 1;

            return (
              <div key={item.id} className="relative group">
                {/* Node dot with caramel indicator & coffee border */}
                <div
                  className={`absolute -left-[30px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isPrimary
                      ? 'bg-[#F2E7D8] border-[#75451F] shadow-[0_0_12px_rgba(185,135,91,0.5)] group-hover:scale-125'
                      : 'bg-[#F2E7D8] border-[#D2BFA6] group-hover:border-[#B9875B]'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isPrimary ? 'bg-[#B9875B] animate-ping' : 'bg-[#806F60]'
                    }`}
                  />
                </div>

                <Reveal delay={idx * 0.08} yOffset={20}>
                  <Card className={`!p-4 sm:!p-6 ${!isPrimary ? 'bg-[#F2E7D8]/80' : ''}`}>
                    {/* Top metadata row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 sm:mb-3">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span
                          className={`py-1 px-2 sm:p-1.5 rounded-lg text-[11px] sm:text-xs flex items-center gap-1 sm:gap-1.5 font-mono ${
                            isExperience
                              ? 'bg-[#E8DAC5] text-[#75451F] border border-[#D2BFA6]'
                              : 'bg-[#E8DAC5] text-[#54351F] border border-[#D2BFA6]'
                          }`}
                        >
                          {isExperience ? <Briefcase size={12} className="sm:w-[13px] sm:h-[13px]" /> : <GraduationCap size={12} className="sm:w-[13px] sm:h-[13px]" />}
                          <span className="capitalize">{item.type}</span>
                        </span>
                        {item.score && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E8DAC5] border border-[#D2BFA6] text-[11px] sm:text-xs font-mono font-bold text-[#54351F]">
                            <Award size={12} className="text-[#B9875B]" />
                            {item.score}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-[#806F60]">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-[#806F60]/80" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Role Title */}
                    <h3 className="font-heading font-bold text-base sm:text-xl text-[#54351F] group-hover:text-[#75451F] transition-colors leading-snug">
                      {item.role}
                    </h3>

                    {/* Organization and Location */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#806F60] mt-1 mb-2.5 sm:mb-3 font-sans">
                      <span className="font-medium text-[#44372E]">{item.organization}</span>
                      <span className="text-[#806F60]/50">•</span>
                      <span className="flex items-center gap-1 text-[#806F60]">
                        <MapPin size={11} />
                        {item.location}
                      </span>
                    </div>

                    {/* Detail bullets */}
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2 border-t border-[#D2BFA6]/50 pt-2.5 sm:pt-3">
                        {item.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[#44372E] leading-relaxed font-sans"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B9875B] mt-1.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
