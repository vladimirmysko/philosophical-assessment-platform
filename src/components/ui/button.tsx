import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';

import { cn } from '@/lib/utils';

import { Slot } from 'radix-ui';

export interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  asChild?: boolean;
}

export function Button({ className, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      className={cn(
        'rounded-lg px-4 py-2 text-sm font-medium',
        'ease-in-out-quad transition duration-100',
        'bg-gray-12 text-gray-1',
        'hover:bg-gray-11 active:scale-97',
        'disabled:bg-gray-4 disabled:text-gray-8 disabled:border-gray-4 disabled:placeholder:text-gray-8 disabled:scale-100 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  );
}
