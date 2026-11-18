import React from 'react';

interface ConcentricRingsProps {
  className?: string;
  size?: number;
}

export const ConcentricRings: React.FC<ConcentricRingsProps> = ({
  className = '',
  size = 500,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
    >
      <circle cx="250" cy="250" r="100" stroke="#1E7BFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.25" />
      <circle cx="250" cy="250" r="160" stroke="#38E1FF" strokeWidth="1" opacity="0.2" />
      <circle cx="250" cy="250" r="215" stroke="#1E7BFF" strokeWidth="1" strokeDasharray="6 6" opacity="0.18" />
      <circle cx="250" cy="250" r="248" stroke="#1E7BFF" strokeWidth="1" opacity="0.12" />

      {/* Subtle orbital dots */}
      <circle cx="250" cy="90" r="3" fill="#38E1FF" opacity="0.4" />
      <circle cx="410" cy="250" r="4" fill="#1E7BFF" opacity="0.4" />
      <circle cx="100" cy="310" r="3" fill="#38E1FF" opacity="0.3" />
    </svg>
  );
};
