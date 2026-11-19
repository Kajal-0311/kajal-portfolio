import React from 'react';
import { portfolioData } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { StatBox } from '../components/ui/StatBox';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { ConcentricRings } from '../components/ui/ConcentricRings';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#E8DAC5] relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#B9875B]/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Framed photo with ring ornament */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <Reveal yOffset={30}>
              <div className="relative">
                {/* Background Ring Ornament (Caramel & Beige) */}
                <div className="absolute -inset-8 flex items-center justify-center pointer-events-none">
                  <ConcentricRings size={420} className="scale-95 opacity-65" />
                </div>

                {/* Framed Photo Container (rounded-frame = 28px, delicate beige border and soft brown shadow) */}
                <div className="relative z-10 w-[270px] sm:w-[320px] aspect-[4/5] rounded-frame overflow-hidden bg-[#F2E7D8] p-2 border border-[#D2BFA6] shadow-[0_20px_50px_-15px_rgba(84,53,31,0.15)] group">
                  <div className="w-full h-full rounded-[20px] overflow-hidden bg-[#EDE0CC] relative">
                    <img
                      src={portfolioData.profile.avatarUrl}
                      alt="Kajal Mohapatra - About portrait"
                      className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      width="320"
                      height="400"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#54351F]/60 via-transparent to-transparent pointer-events-none" />

                    {/* Bottom floating badge inside frame */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#F2E7D8]/95 backdrop-blur-md border border-[#D2BFA6] shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#75451F] font-semibold">
                        <CheckCircle2 size={14} className="text-[#B9875B]" />
                        <span>B.Tech CSE (AI & ML)</span>
                      </div>
                      <p className="text-[11px] text-[#806F60] mt-0.5">VSSUT Burla, Odisha</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative, Stats, CTA */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <Reveal yOffset={20}>
              <SectionHeading
                label="ABOUT ME"
                title={portfolioData.profile.aboutHeading}
                highlight="AI PRODUCTS"
                className="mb-6"
              />

              <p className="text-[#44372E] text-base sm:text-lg leading-relaxed mb-8 font-sans">
                {portfolioData.profile.aboutSummary}
              </p>

              {/* Stat Boxes (3 across) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
                {portfolioData.stats.map((stat) => (
                  <StatBox
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    subtext={stat.subtext}
                  />
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  icon={<ArrowRight size={16} />}
                >
                  Get in Touch
                </Button>
                <Button
                  variant="ghost"
                  size="md"
                  href="#projects"
                >
                  Explore Projects
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
