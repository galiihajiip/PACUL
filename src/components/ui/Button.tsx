import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-pacul-primary text-white hover:opacity-90 rounded-full',
      secondary: 'bg-pacul-light text-pacul-primary hover:bg-opacity-80 rounded-full',
      light: 'bg-white text-pacul-primary border border-pacul-primary hover:bg-gray-50 rounded-full',
      outline: 'border-2 border-pacul-primary text-pacul-primary hover:bg-pacul-primary hover:text-white rounded-full',
      ghost: 'text-pacul-primary hover:bg-pacul-light/20 rounded-xl',
    };

    const sizes = {
      sm: 'px-4 py-1.5 text-sm',
      md: 'px-6 py-2.5 font-medium',
      lg: 'px-8 py-3.5 text-lg font-bold',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
