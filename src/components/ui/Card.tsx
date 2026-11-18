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
      className={`relative rounded-card bg-surface border border-border transition-all duration-300 p-6 md:p-8 overflow-hidden ${
        glow ? 'shadow-card border-accent/25' : 'shadow-[0_10px_30px_rgba(0,0,0,0.3)]'
      } ${
        hoverEffect
          ? 'hover:-translate-y-1.5 hover:border-accent/40 hover:bg-surface-2 hover:shadow-[0_20px_50px_-15px_rgba(30,123,255,0.35)]'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
