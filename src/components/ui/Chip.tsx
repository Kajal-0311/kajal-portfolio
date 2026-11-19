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
      'bg-[#E8DAC5] text-[#54351F] border-[#D2BFA6] hover:border-[#B9875B] hover:text-[#75451F] hover:bg-[#F2E7D8] hover:shadow-[0_2px_10px_rgba(185,135,91,0.15)]',
    accent:
      'bg-[#F2E7D8] text-[#75451F] border-[#B9875B]/50 hover:border-[#75451F] hover:bg-[#E8DAC5]',
    glow:
      'bg-[#F2E7D8] text-[#75451F] border-[#B9875B] shadow-[0_2px_12px_rgba(185,135,91,0.2)]',
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
