import React from 'react';

export type LedColor = 'green' | 'red' | 'amber' | 'blue';

interface LedIndicatorProps {
  color?: LedColor;
  label?: string;
  subLabel?: string;
  pulsing?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LedIndicator: React.FC<LedIndicatorProps> = ({
  color = 'green',
  label,
  subLabel,
  pulsing = true,
  size = 'md',
  className = '',
}) => {
  const colorMap = {
    green: {
      bg: 'bg-emerald-500',
      glow: 'shadow-[0_0_10px_2px_rgba(16,185,129,0.7)]',
      border: 'border-emerald-400/40',
      text: 'text-emerald-700',
    },
    red: {
      bg: 'bg-accent',
      glow: 'shadow-[0_0_10px_2px_rgba(255,71,87,0.7)]',
      border: 'border-accent/40',
      text: 'text-accent',
    },
    amber: {
      bg: 'bg-amber-400',
      glow: 'shadow-[0_0_10px_2px_rgba(251,191,36,0.7)]',
      border: 'border-amber-300/40',
      text: 'text-amber-700',
    },
    blue: {
      bg: 'bg-sky-400',
      glow: 'shadow-[0_0_10px_2px_rgba(56,189,248,0.7)]',
      border: 'border-sky-300/40',
      text: 'text-sky-700',
    },
  };

  const sizeMap = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3.5 h-3.5',
  };

  const current = colorMap[color];

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {/* Recessed LED Bezel */}
      <div className="relative flex items-center justify-center p-0.5 rounded-full bg-chassis shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_1px_#ffffff]">
        <div
          className={`rounded-full ${sizeMap[size]} ${current.bg} ${current.glow} ${
            pulsing ? 'animate-pulse' : ''
          }`}
        />
      </div>

      {(label || subLabel) && (
        <div className="flex flex-col">
          {label && (
            <span className="font-mono text-[11px] font-bold tracking-wider uppercase text-ink-primary drop-shadow-[0_1px_0_#ffffff]">
              {label}
            </span>
          )}
          {subLabel && (
            <span className="font-mono text-[9px] text-ink-muted tracking-wide uppercase">
              {subLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
