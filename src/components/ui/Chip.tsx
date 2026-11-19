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
      'bg-[#FAF6EF] text-[#54351F] border-[#D8C1A8] hover:border-[#B9875B] hover:text-[#75451F] hover:bg-[#FFF9F1] hover:shadow-[0_2px_10px_rgba(185,135,91,0.15)]',
    accent:
      'bg-[#EFE3D3] text-[#75451F] border-[#B9875B]/40 hover:border-[#75451F] hover:bg-[#FAF6EF]',
    glow:
      'bg-[#FFF9F1] text-[#75451F] border-[#B9875B] shadow-[0_2px_12px_rgba(185,135,91,0.2)]',
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
