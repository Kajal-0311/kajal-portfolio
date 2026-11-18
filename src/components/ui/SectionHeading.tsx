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
        <span className="text-accent underline decoration-accent/30 underline-offset-8">
          {highlight}
        </span>
        {parts.slice(1).join(highlight)}
      </>
    );
  };

  return (
    <div className={`flex flex-col ${alignClasses} mb-12 md:mb-16 ${className}`}>
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-mono font-medium tracking-[0.15em] uppercase mb-4 shadow-[0_0_15px_rgba(30,123,255,0.15)]">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        {label}
      </div>

      <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight tracking-[-0.01em] text-text max-w-3xl">
        {renderTitle()}
      </h2>

      {subtitle && (
        <p className="mt-4 text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
