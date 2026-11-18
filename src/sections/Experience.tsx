import React from 'react';
import { portfolioData, type TimelineItem } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-bg-800/40 relative overflow-hidden">
      {/* Decorative radial blur */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <Reveal yOffset={20}>
          <SectionHeading
            label="BACKGROUND"
            title="EXPERIENCE & ACADEMIC JOURNEY"
            highlight="JOURNEY"
            subtitle="Hands-on defence research at DRDO coupled with rigorous coursework in Artificial Intelligence & Machine Learning at VSSUT Burla."
          />
        </Reveal>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 ml-2 sm:ml-4 space-y-12 max-w-4xl">
          {portfolioData.timeline.map((item: TimelineItem, idx: number) => {
            const isExperience = item.type === 'experience';
            const isPrimary = idx <= 1;

            return (
              <div key={item.id} className="relative group">
                {/* Node dot with pulsing glow on primary */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isPrimary
                      ? 'bg-bg-900 border-accent shadow-[0_0_15px_rgba(30,123,255,0.7)] group-hover:scale-125'
                      : 'bg-bg-900 border-border group-hover:border-accent-2'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isPrimary ? 'bg-accent animate-ping' : 'bg-text-muted'
                    }`}
                  />
                </div>

                <Reveal delay={idx * 0.08} yOffset={20}>
                  <Card className={`!p-6 ${!isPrimary ? '!p-4 bg-surface/60' : ''}`}>
                    {/* Top metadata row */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`p-1.5 rounded-lg text-xs flex items-center gap-1.5 font-mono ${
                            isExperience
                              ? 'bg-accent/15 text-accent border border-accent/30'
                              : 'bg-accent-2/15 text-accent-2 border border-accent-2/30'
                          }`}
                        >
                          {isExperience ? <Briefcase size={13} /> : <GraduationCap size={13} />}
                          <span className="capitalize">{item.type}</span>
                        </span>
                        {item.score && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface-2 border border-border text-xs font-mono font-bold text-text">
                            <Award size={12} className="text-accent-2" />
                            {item.score}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono text-text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} className="text-text-muted/70" />
                          {item.period}
                        </span>
                      </div>
                    </div>

                    {/* Role Title */}
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-text group-hover:text-accent transition-colors">
                      {item.role}
                    </h3>

                    {/* Organization and Location */}
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-text-muted mt-1 mb-3 font-sans">
                      <span className="font-medium text-text/90">{item.organization}</span>
                      <span className="text-text-muted/40">•</span>
                      <span className="flex items-center gap-1 text-text-muted">
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>

                    {/* Detail bullets */}
                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="mt-3 space-y-2 border-t border-border/50 pt-3">
                        {item.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted leading-relaxed font-sans"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
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
