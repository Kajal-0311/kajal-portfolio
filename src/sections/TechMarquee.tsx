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
  'Python': <SiPython className="text-[#38E1FF]" />,
  'Scikit-learn': <SiScikitlearn className="text-[#F7931E]" />,
  'Pandas': <SiPandas className="text-[#150458] group-hover:text-accent-2" />,
  'NumPy': <SiNumpy className="text-[#4DABCF]" />,
  'SQL': <Database className="text-[#1E7BFF]" />,
  'LangChain': <Layers className="text-[#2ECC71]" />,
  'Ollama': <Cpu className="text-[#E74C3C]" />,
  'ChromaDB': <Brain className="text-[#9B59B6]" />,
  'Streamlit': <SiStreamlit className="text-[#FF4B4B]" />,
  'Git/GitHub': <SiGithub className="text-text" />,
  'Llama 3': <Cpu className="text-accent-2" />,
  'SciPy': <SiScipy className="text-[#0054A6]" />,
  'Matplotlib': <Brain className="text-[#11557C]" />,
  'MySQL': <SiMysql className="text-[#4479A1]" />,
  'Joblib': <SiPython className="text-accent" />,
};

export const TechMarquee: React.FC = () => {
  const items = portfolioData.techMarquee;
  // Duplicate for seamless infinite loop
  const marqueeItems = [...items, ...items];

  return (
    <div className="w-full bg-bg-800/80 border-y border-border/80 py-5 overflow-hidden backdrop-blur-sm relative group">
      {/* Edge gradient masks for smooth fade-in and fade-out */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-bg-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-bg-900 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-8 sm:gap-12">
        {marqueeItems.map((tech, idx) => (
          <div
            key={`${tech}-${idx}`}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface/50 border border-border/60 text-text-muted hover:text-white hover:border-accent/40 hover:bg-surface-2 transition-all duration-300 cursor-default group/item"
          >
            <span className="text-xl filter grayscale group-hover/item:grayscale-0 transition-all duration-300">
              {iconMap[tech] || <Cpu size={18} className="text-accent" />}
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
