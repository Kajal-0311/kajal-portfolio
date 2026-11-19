import React from 'react';
import { portfolioData, type CertificationItem, type ActivityItem } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Reveal } from '../components/ui/Reveal';
import { Award, Users, Calendar, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-28 bg-[#EDE0CC] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <Reveal yOffset={20}>
          <SectionHeading
            label="CREDENTIALS & INVOLVEMENT"
            title="CERTIFICATIONS & LEADERSHIP"
            highlight="CERTIFICATIONS"
            subtitle="Verified professional certifications and technical leadership roles in student coding communities."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Column 1: Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Award size={18} className="text-[#75451F] sm:w-5 sm:h-5" />
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#54351F]">
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {portfolioData.certifications.map((cert: CertificationItem, idx: number) => (
                <Reveal key={cert.id} delay={idx * 0.1} yOffset={15}>
                  <Card className="!p-4 sm:!p-5 group hover:border-[#B9875B]">
                    <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-2.5 sm:gap-3">
                      <div>
                        {cert.badgeText && (
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#E8DAC5] text-[#75451F] border border-[#D2BFA6] mb-1.5 sm:mb-2">
                            {cert.badgeText}
                          </span>
                        )}
                        <h4 className="font-heading font-bold text-sm sm:text-lg text-[#54351F] group-hover:text-[#75451F] transition-colors leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#806F60] mt-1 font-sans">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="flex items-center xs:flex-col xs:items-end justify-between xs:justify-start gap-2 flex-shrink-0 pt-1 xs:pt-0 border-t xs:border-t-0 border-[#D2BFA6]/40">
                        <span className="text-[11px] sm:text-xs font-mono text-[#806F60] flex items-center gap-1">
                          <Calendar size={11} />
                          {cert.date}
                        </span>
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-[#E8DAC5] text-[#75451F] hover:bg-[#75451F] hover:text-white border border-[#D2BFA6] transition-colors shadow-xs"
                            aria-label={`Verify ${cert.title}`}
                            title="Verify Certificate"
                          >
                            <ExternalLink size={13} />
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
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <Users size={18} className="text-[#B9875B] sm:w-5 sm:h-5" />
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#54351F]">
                Technical Clubs & Activities
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {portfolioData.activities.map((act: ActivityItem, idx: number) => (
                <Reveal key={act.id} delay={idx * 0.1} yOffset={15}>
                  <Card className="!p-4 sm:!p-5 group hover:border-[#B9875B]">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#E8DAC5] text-[#75451F] border border-[#D2BFA6]">
                        {act.role}
                      </span>
                      <span className="text-[11px] sm:text-xs font-mono text-[#806F60] flex items-center gap-1">
                        <Calendar size={11} />
                        {act.period}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-sm sm:text-lg text-[#54351F] group-hover:text-[#75451F] transition-colors mt-1.5 sm:mt-2 leading-snug">
                      {act.club}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#44372E] mt-1.5 sm:mt-2 leading-relaxed font-sans">
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
