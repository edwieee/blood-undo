import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'red-subtle' | 'neutral' | 'success' | 'warning';
  size?: 'sm' | 'md';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-wider',
  };

  const variantStyles = {
    red: 'bg-[#df2531] text-white font-semibold shadow-[0_0_12px_rgba(223,37,49,0.3)]',
    'red-subtle': 'bg-[#df2531]/15 text-[#ff4b55] border border-[#df2531]/30',
    neutral: 'bg-white/[0.05] text-white/80 border border-white/10',
    success: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    warning: 'bg-amber-500/15 text-amber-400 border border-amber-500/30',
  };

  const dotColors = {
    red: 'bg-white',
    'red-subtle': 'bg-[#df2531]',
    neutral: 'bg-white/60',
    success: 'bg-emerald-400',
    warning: 'bg-amber-400',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-mono uppercase font-medium ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]} shrink-0`}
        />
      )}
      {children}
    </span>
  );
};
