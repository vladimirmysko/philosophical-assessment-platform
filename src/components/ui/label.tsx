'use client';

import { cn } from '@/lib/utils';

import { Label as LabelPrimitive } from 'radix-ui';

export function Label({ className, ...props }: LabelPrimitive.LabelProps) {
  return (
    <LabelPrimitive.Root
      className={cn('text-2xs text-gray-12 font-medium', className)}
      {...props}
    />
  );
}
