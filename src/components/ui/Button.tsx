import { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react';
import { cn } from '../../lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: ElementType;
  className?: string;
}

type ButtonProps<T extends ElementType = 'button'> = ButtonOwnProps & Omit<ComponentPropsWithoutRef<T>, 'className'>;

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  outline: 'btn-outline',
  danger: 'btn-danger',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-4 text-base',
};

export const Button = forwardRef<any, ButtonProps>(
  ({ variant = 'primary', size = 'md', as: Component = 'button', className, children, ...props }, ref) => {
    return (
      <Component ref={ref} className={cn('btn', variantStyles[variant], sizeStyles[size], className)} {...props}>
        {children}
      </Component>
    );
  },
);
Button.displayName = 'Button';
