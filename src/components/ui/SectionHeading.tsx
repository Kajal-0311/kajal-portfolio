import React from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  highlight,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  // Highlight word(s) in title if provided
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return title;
    }
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-[#B9875B] underline decoration-[#B9875B]/40 underline-offset-8">
          {highlight}
        </span>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  return (
    <div className={`flex flex-col ${alignClasses} mb-12 md:mb-16 ${className}`}>
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DAC5] border border-[#D2BFA6] text-[#75451F] text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4 shadow-[0_2px_8px_rgba(84,53,31,0.05)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#B9875B] animate-pulse" />
        {label}
      </div>

      <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-[-0.01em] text-[#54351F] max-w-3xl">
        {renderTitle()}
      </h2>

      {subtitle && (
        <p className="mt-4 text-[#806F60] text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
