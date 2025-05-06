'use client';

import { useTransition, type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export function RefreshButton(
  props: Omit<
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'onClick'
  >,
) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  return (
    <Button
      disabled={isPending}
      onClick={() => startTransition(() => router.refresh())}
      {...props}
    />
  );
}
