import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helper?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helper, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label ? (
          <label htmlFor={id} className="input-label">
            {label}
          </label>
        ) : null}
        <input ref={ref} id={id} className={cn('input-field', className)} {...props} />
        {helper ? <p className="text-helper">{helper}</p> : null}
        {error ? <p className="text-error">{error}</p> : null}
      </div>
    );
  },
);
Input.displayName = 'Input';
