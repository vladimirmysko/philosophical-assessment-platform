'use client';

import {
  useState,
  useActionState,
  useEffect,
  type ChangeEvent,
  type DetailedHTMLProps,
  type FormHTMLAttributes,
} from 'react';

import { cn } from '@/lib/utils';

import { DocumentIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/16/solid';
import { Logo } from '@/components/logo';
import { Label } from '@/components/ui/label';
import { InputGroup, Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { analyzeFileAction } from '@/actions/analyze-file-action';

export function UploadFileForm({
  className,
  ...props
}: Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'children' | 'action'
>) {
  const [state, formAction, pending] = useActionState(analyzeFileAction, undefined);

  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  useEffect(() => {
    console.log('state', state);
  }, [state]);

  return (
    <form action={formAction} className={cn('grid grid-cols-1 gap-10', className)} {...props}>
      <Logo />

      <div className="grid grid-cols-1 gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Загрузите файл</h1>
        <p className="text-gray-11 text-xs">Загрузите работу для проверки в формате PDF.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 gap-2">
          <Label htmlFor="fullName">Имя и фамилия</Label>
          <InputGroup>
            <UserCircleIcon />
            <Input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Иван Иванов"
              disabled={pending}
              required
            />
          </InputGroup>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Label htmlFor="group">Группа</Label>
          <InputGroup>
            <UserGroupIcon />
            <Input
              id="group"
              name="group"
              type="text"
              placeholder="ИС-22"
              disabled={pending}
              required
            />
          </InputGroup>
        </div>

        <Label htmlFor="file" className="relative grid grid-cols-1 gap-2">
          <p className="text-2xs text-gray-12 font-medium">Файл</p>
          <div className="border-gray-6 hover:bg-gray-3 ease-in-out-quad flex items-center gap-2 rounded-lg border border-dashed px-3 py-2 text-sm transition duration-100">
            <DocumentIcon className="text-gray-11 size-4" />
            <span className={cn(file ? 'text-gray-12' : 'text-gray-9')}>
              {file ? file.name : 'Загрузить работу'}
            </span>
          </div>
          <input
            name="file"
            id="file"
            type="file"
            accept="application/pdf"
            className="sr-only"
            disabled={pending}
            required
            onChange={handleFileChange}
          />
        </Label>
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? 'Загрузка...' : 'Проверить работу'}
      </Button>
    </form>
  );
}
