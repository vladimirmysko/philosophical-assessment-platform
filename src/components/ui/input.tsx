import { type HTMLAttributes, type DetailedHTMLProps, type InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function Input({
  className,
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input
      className={cn(
        'bg-gray-1 border-gray-6 rounded-lg border px-3 py-2 text-sm',
        'ease-in-out-quad transition duration-100',
        'placeholder:text-gray-9',
        'hover:border-gray-7',
        'focus-visible:ring-gray-5 focus-visible:border-gray-8 focus-visible:ring-3 focus-visible:outline-none',
        'disabled:bg-gray-4 disabled:text-gray-8 disabled:border-gray-4 disabled:placeholder:text-gray-8 disabled:cursor-not-allowed',
        className,
      )}
      {...props}
    />
  );
}

export function InputGroup({
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative flex flex-col items-stretch',
        '[&>[data-slot=icon]]:text-gray-11 [&>[data-slot=icon]]:pointer-events-none [&>[data-slot=icon]]:absolute [&>[data-slot=icon]]:top-1/2 [&>[data-slot=icon]]:size-4 [&>[data-slot=icon]]:-translate-y-1/2',
        '[&>[data-slot=icon]:first-child]:left-3 [&>[data-slot=icon]:last-child]:right-3',
        'has-[[data-slot=icon]:first-child]:[&_input]:pl-9 has-[[data-slot=icon]:last-child]:[&_input]:pr-9',
        'has-[input:disabled]:[&_[data-slot=icon]]:text-gray-8',
        className,
      )}
      {...props}
    />
  );
}
