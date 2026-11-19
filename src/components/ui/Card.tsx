import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-card bg-[#FFF9F1] border border-[#D8C1A8] transition-all duration-300 p-6 md:p-8 overflow-hidden ${
        glow
          ? 'shadow-[0_10px_35px_-8px_rgba(185,135,91,0.22)] border-[#B9875B]/60'
          : 'shadow-[0_10px_30px_-10px_rgba(84,53,31,0.08),0_4px_12px_-2px_rgba(84,53,31,0.04)]'
      } ${
        hoverEffect
          ? 'hover:-translate-y-1.5 hover:border-[#B9875B] hover:shadow-[0_20px_45px_-12px_rgba(84,53,31,0.16),0_8px_18px_-4px_rgba(84,53,31,0.08)]'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
