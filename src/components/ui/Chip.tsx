import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'glow';
  className?: string;
  icon?: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'default',
  className = '',
  icon,
}) => {
  const variantStyles = {
    default:
      'bg-surface text-text-muted border-border hover:border-accent/40 hover:text-text hover:shadow-[0_0_15px_rgba(30,123,255,0.2)]',
    accent:
      'bg-accent/10 text-accent border-accent/30 hover:border-accent hover:shadow-[0_0_20px_rgba(30,123,255,0.3)]',
    glow:
      'bg-surface-2 text-accent-2 border-accent-2/30 shadow-[0_0_15px_rgba(56,225,255,0.15)]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs rounded-chip border transition-all duration-200 tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="flex-shrink-0 text-current">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
