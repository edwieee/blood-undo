import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, required, className = '', disabled, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="space-y-1.5 text-left w-full">
        <label
          htmlFor={inputId}
          className="block font-mono text-xs uppercase tracking-wider text-white/80"
        >
          {label}
          {required && <span className="text-[#df2531] ml-1">*</span>}
        </label>
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            required={required}
            disabled={disabled}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-200 outline-none focus:ring-2 focus:ring-[#df2531]/50 disabled:opacity-50 disabled:cursor-not-allowed ${
              error
                ? 'border-[#df2531]/80 focus:border-[#df2531]'
                : 'border-white/15 hover:border-white/25 focus:border-[#df2531]/60'
            } ${className}`}
            {...props}
          />
        </div>
        {error && (
          <p id={`${inputId}-error`} className="font-mono text-xs text-[#df2531] flex items-center gap-1">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="font-mono text-[11px] text-white/50">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
