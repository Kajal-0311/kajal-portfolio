import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B9875B]/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-2.5 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-[#75451F] text-white hover:bg-[#54351F] hover:-translate-y-0.5 shadow-[0_4px_16px_rgba(117,69,31,0.22)] hover:shadow-[0_8px_26px_rgba(84,53,31,0.32)] active:translate-y-0',
    ghost:
      'bg-transparent text-[#75451F] border border-[#75451F]/40 hover:border-[#75451F] hover:bg-[#E8DAC5] hover:text-[#54351F] hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-[#E8DAC5] text-[#54351F] border border-[#D2BFA6] hover:border-[#B9875B] hover:bg-[#F2E7D8] hover:text-[#75451F] hover:-translate-y-0.5 active:translate-y-0',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
