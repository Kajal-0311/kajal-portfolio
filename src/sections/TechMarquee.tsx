import React from 'react';
import { portfolioData } from '../data/content';
import { 
  SiPython, 
  SiScikitlearn, 
  SiPandas, 
  SiNumpy, 
  SiStreamlit, 
  SiGithub, 
  SiMysql, 
  SiScipy 
} from 'react-icons/si';
import { Database, Cpu, Brain, Layers } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'Python': <SiPython className="text-[#75451F]" />,
  'Scikit-learn': <SiScikitlearn className="text-[#B9875B]" />,
  'Pandas': <SiPandas className="text-[#54351F]" />,
  'NumPy': <SiNumpy className="text-[#75451F]" />,
  'SQL': <Database className="text-[#54351F]" />,
  'LangChain': <Layers className="text-[#B9875B]" />,
  'Ollama': <Cpu className="text-[#75451F]" />,
  'ChromaDB': <Brain className="text-[#B9875B]" />,
  'Streamlit': <SiStreamlit className="text-[#75451F]" />,
  'Git/GitHub': <SiGithub className="text-[#54351F]" />,
  'Llama 3': <Cpu className="text-[#B9875B]" />,
  'SciPy': <SiScipy className="text-[#75451F]" />,
  'Matplotlib': <Brain className="text-[#54351F]" />,
  'MySQL': <SiMysql className="text-[#75451F]" />,
  'Joblib': <SiPython className="text-[#B9875B]" />,
};

export const TechMarquee: React.FC = () => {
  const items = portfolioData.techMarquee;
  // Duplicate for seamless infinite loop
  const marqueeItems = [...items, ...items];

  return (
    <div className="w-full bg-[#E8DAC5] border-y border-[#D2BFA6] py-3.5 sm:py-5 overflow-hidden backdrop-blur-sm relative group">
      {/* Edge gradient masks for smooth fade-in and fade-out */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#E8DAC5] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#E8DAC5] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-4 sm:gap-8 lg:gap-10">
        {marqueeItems.map((tech, idx) => (
          <div
            key={`${tech}-${idx}`}
            className="flex items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#F2E7D8] border border-[#D2BFA6] text-[#54351F] hover:text-[#75451F] hover:border-[#B9875B] hover:bg-[#E8DAC5] hover:shadow-[0_4px_14px_rgba(84,53,31,0.06)] transition-all duration-300 cursor-default group/item"
          >
            <span className="text-base sm:text-lg opacity-85 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all duration-300">
              {iconMap[tech] || <Cpu size={16} className="text-[#75451F]" />}
            </span>
            <span className="font-mono text-xs sm:text-sm font-medium tracking-wide">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
