import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: readonly (string | SelectOption)[];
  error?: string;
  helperText?: string;
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      error,
      helperText,
      id,
      required,
      placeholder = 'Select an option',
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const selectId = id || props.name;

    return (
      <div className="space-y-1.5 text-left w-full">
        <label
          htmlFor={selectId}
          className="block font-mono text-xs uppercase tracking-wider text-white/80"
        >
          {label}
          {required && <span className="text-[#df2531] ml-1">*</span>}
        </label>
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            required={required}
            disabled={disabled}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
            }
            className={`w-full appearance-none rounded-xl border bg-[#08080c] px-4 py-3 text-sm text-white transition-all duration-200 outline-none focus:ring-2 focus:ring-[#df2531]/50 disabled:opacity-50 disabled:cursor-not-allowed ${
              error
                ? 'border-[#df2531]/80 focus:border-[#df2531]'
                : 'border-white/15 hover:border-white/25 focus:border-[#df2531]/60'
            } ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-[#08080c] text-white/40">
                {placeholder}
              </option>
            )}
            {options.map((opt) => {
              const value = typeof opt === 'string' ? opt : opt.value;
              const label = typeof opt === 'string' ? opt : opt.label;
              return (
                <option key={value} value={value} className="bg-[#08080c] text-white py-1">
                  {label}
                </option>
              );
            })}
          </select>
          {/* Custom chevron indicator */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/50">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {error && (
          <p id={`${selectId}-error`} className="font-mono text-xs text-[#df2531] flex items-center gap-1">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={`${selectId}-helper`} className="font-mono text-[11px] text-white/50">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
