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
          className="block text-xs font-medium text-white/75"
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
            className={`w-full rounded-lg border bg-white/[0.02] px-3.5 py-2.5 text-sm text-white placeholder-white/30 transition-colors duration-150 outline-none focus:ring-1 focus:ring-[#df2531]/40 disabled:opacity-50 disabled:cursor-not-allowed ${
              error
                ? 'border-[#df2531]/80 focus:border-[#df2531]'
                : 'border-white/10 hover:border-white/20 focus:border-[#df2531]/70'
            } ${className}`}
            {...props}
          />
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-[#df2531] flex items-center gap-1 mt-1">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${inputId}-helper`} className="text-[11px] text-white/50 leading-normal mt-1">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
