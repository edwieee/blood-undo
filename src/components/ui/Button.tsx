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
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#df2531]/50 disabled:opacity-50 disabled:cursor-not-allowed select-none tracking-wider uppercase font-display';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2',
    lg: 'text-base px-7 py-3.5 rounded-xl gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-[#df2531] hover:bg-[#c21f2a] active:bg-[#a81923] text-white shadow-[0_0_24px_rgba(223,37,49,0.28)] hover:shadow-[0_0_32px_rgba(223,37,49,0.45)] border border-[#df2531]/60',
    secondary:
      'bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 backdrop-blur-md',
    outline:
      'bg-transparent hover:bg-white/[0.05] text-white/90 border border-white/15 hover:border-white/30',
    ghost:
      'bg-transparent hover:bg-white/[0.06] text-white/80 hover:text-white',
    'danger-subtle':
      'bg-[#df2531]/15 hover:bg-[#df2531]/25 text-[#df2531] border border-[#df2531]/30 hover:border-[#df2531]/50',
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
