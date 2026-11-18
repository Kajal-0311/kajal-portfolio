import React from 'react';
import { portfolioData, type CertificationItem, type ActivityItem } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { Award, Users, Calendar, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-bg-800/30 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <Reveal yOffset={20}>
          <SectionHeading
            label="CREDENTIALS & INVOLVEMENT"
            title="CERTIFICATIONS & LEADERSHIP"
            highlight="CERTIFICATIONS"
            subtitle="Verified professional certifications and technical leadership roles in student coding communities."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award size={20} className="text-accent" />
              <h3 className="font-heading font-bold text-xl text-text">
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {portfolioData.certifications.map((cert: CertificationItem, idx: number) => (
                <Reveal key={cert.id} delay={idx * 0.1} yOffset={15}>
                  <Card className="!p-5 group hover:border-accent/40">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {cert.badgeText && (
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-accent/15 text-accent border border-accent/25 mb-2">
                            {cert.badgeText}
                          </span>
                        )}
                        <h4 className="font-heading font-bold text-base sm:text-lg text-text group-hover:text-accent transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-text-muted mt-1 font-sans">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                          <Calendar size={12} />
                          {cert.date}
                        </span>
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-surface-2 text-text-muted hover:text-accent transition-colors"
                            aria-label={`Verify ${cert.title}`}
                            title="Verify Certificate"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Column 2: Technical Leadership & Activities */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Users size={20} className="text-accent-2" />
              <h3 className="font-heading font-bold text-xl text-text">
                Technical Clubs & Activities
              </h3>
            </div>

            <div className="space-y-4">
              {portfolioData.activities.map((act: ActivityItem, idx: number) => (
                <Reveal key={act.id} delay={idx * 0.1} yOffset={15}>
                  <Card className="!p-5 group hover:border-accent-2/40">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-accent-2/15 text-accent-2 border border-accent-2/25">
                        {act.role}
                      </span>
                      <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                        <Calendar size={12} />
                        {act.period}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-base sm:text-lg text-text group-hover:text-accent-2 transition-colors mt-2">
                      {act.club}
                    </h4>

                    <p className="text-xs sm:text-sm text-text-muted mt-2 leading-relaxed font-sans">
                      {act.detail}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
