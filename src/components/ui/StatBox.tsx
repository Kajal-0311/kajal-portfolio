import React from 'react';

interface StatBoxProps {
  value: string;
  label: string;
  subtext?: string;
  className?: string;
}

export const StatBox: React.FC<StatBoxProps> = ({
  value,
  label,
  subtext,
  className = '',
}) => {
  return (
    <div
      className={`relative p-5 sm:p-6 rounded-card bg-[#FFF9F1] border border-[#D8C1A8] hover:border-[#B9875B] transition-all duration-300 group hover:shadow-[0_12px_32px_rgba(84,53,31,0.08)] ${className}`}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-[#B9875B]/8 rounded-full blur-xl group-hover:bg-[#B9875B]/15 transition-all duration-500 pointer-events-none" />
      <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#54351F] tracking-tight flex items-baseline gap-1 group-hover:text-[#75451F] transition-colors">
        {value}
      </div>
      <div className="mt-2 text-sm sm:text-base font-medium text-[#44372E] font-sans">
        {label}
      </div>
      {subtext && (
        <div className="mt-1 text-xs text-[#806F60] font-mono tracking-tight">
          {subtext}
        </div>
      )}
    </div>
  );
};
