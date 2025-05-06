'use client';

import { type DetailedHTMLProps, type FormHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export function UploadFileForm({
  className,
  ...props
}: Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'children' | 'action'
>) {
  return (
    <form action="" className={cn('grid grid-cols-1 gap-10', className)} {...props}>
      <div className="grid grid-cols-1 gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Загрузите файл</h1>
        <p className="text-gray-11 text-xs">Загрузите работу для проверки в формате PDF.</p>
      </div>
    </form>
  );
}
