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
      <circle cx="250" cy="250" r="100" stroke="#B9875B" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
      <circle cx="250" cy="250" r="160" stroke="#75451F" strokeWidth="1" opacity="0.3" />
      <circle cx="250" cy="250" r="215" stroke="#B9875B" strokeWidth="1" strokeDasharray="6 6" opacity="0.35" />
      <circle cx="250" cy="250" r="248" stroke="#D8C1A8" strokeWidth="1" opacity="0.4" />

      {/* Subtle orbital dots */}
      <circle cx="250" cy="90" r="3.5" fill="#B9875B" opacity="0.6" />
      <circle cx="410" cy="250" r="4.5" fill="#75451F" opacity="0.6" />
      <circle cx="100" cy="310" r="3.5" fill="#B9875B" opacity="0.5" />
    </svg>
  );
};
