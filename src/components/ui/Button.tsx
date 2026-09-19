import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger-subtle';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#df2531]/40 disabled:opacity-50 disabled:cursor-not-allowed select-none font-display tracking-wider';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg gap-2',
    lg: 'text-sm sm:text-base px-6 sm:px-7 py-3 rounded-lg gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-[#df2531] hover:bg-[#c81e29] active:bg-[#b01721] text-white border border-[#df2531]',
    secondary:
      'bg-transparent hover:bg-white/[0.05] active:bg-white/[0.08] text-white/80 hover:text-white border border-white/15 hover:border-white/25',
    outline:
      'bg-transparent hover:bg-white/[0.04] text-white/80 hover:text-white border border-white/10 hover:border-white/20',
    ghost:
      'bg-transparent hover:bg-white/[0.05] text-white/70 hover:text-white',
    'danger-subtle':
      'bg-[#df2531]/10 hover:bg-[#df2531]/20 text-[#df2531] border border-[#df2531]/25',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
