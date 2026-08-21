import React from 'react';

export type ButtonVariant = 'primary' | 'chassis' | 'ghost' | 'recessed' | 'dark';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface TactileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  isActive?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const TactileButton: React.FC<TactileButtonProps> = ({
  variant = 'chassis',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  target,
  rel,
  download,
  isActive = false,
  fullWidth = false,
  className = '',
  children,
  onClick,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-mono font-bold tracking-wider uppercase select-none transition-all duration-150 ease-mechanical active:translate-y-[2px] disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-[11px] px-3.5 py-2 min-h-[36px] rounded-md gap-1.5',
    md: 'text-xs px-5 py-3 min-h-[44px] md:min-h-[48px] rounded-lg gap-2',
    lg: 'text-sm px-7 py-4 min-h-[52px] md:min-h-[56px] rounded-xl gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-accent text-white border border-white/20 shadow-[4px_4px_10px_rgba(166,50,60,0.4),-3px_-3px_8px_rgba(255,120,130,0.4),inset_0_1px_0_rgba(255,255,255,0.4)] hover:bg-[#ff5263] active:shadow-[inset_4px_4px_8px_rgba(130,20,30,0.6),inset_-2px_-2px_6px_rgba(255,255,255,0.2)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
    chassis:
      'bg-chassis text-ink-primary border border-white/60 shadow-[5px_5px_10px_#babecc,-5px_-5px_10px_#ffffff] hover:text-accent hover:shadow-[7px_7px_14px_#babecc,-7px_-7px_14px_#ffffff] active:shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff]',
    ghost:
      'bg-transparent text-ink-muted hover:text-accent hover:bg-chassis/60 active:shadow-[inset_2px_2px_5px_#babecc,inset_-2px_-2px_5px_#ffffff]',
    recessed: isActive
      ? 'bg-recessed text-accent border border-accent/30 shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff]'
      : 'bg-chassis text-ink-muted border border-transparent shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#ffffff] hover:text-ink-primary hover:border-white/50',
    dark:
      'bg-darkPanel text-white border border-white/10 shadow-[4px_4px_10px_rgba(0,0,0,0.4),-2px_-2px_6px_rgba(255,255,255,0.05)] hover:border-accent/50 hover:text-accent active:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.8),inset_-2px_-2px_4px_rgba(255,255,255,0.1)]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? 'w-full' : ''
  } ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        download={download}
        className={combinedClasses}
        onClick={onClick as any}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
