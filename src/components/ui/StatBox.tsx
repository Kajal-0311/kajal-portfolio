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
      className={`relative p-5 sm:p-6 rounded-card bg-surface border border-border hover:border-accent/40 transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(30,123,255,0.2)] ${className}`}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/15 transition-all duration-500 pointer-events-none" />
      <div className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-text tracking-tight flex items-baseline gap-1 group-hover:text-accent-2 transition-colors">
        {value}
      </div>
      <div className="mt-2 text-sm sm:text-base font-medium text-text font-sans">
        {label}
      </div>
      {subtext && (
        <div className="mt-1 text-xs text-text-muted font-mono tracking-tight">
          {subtext}
        </div>
      )}
    </div>
  );
};
