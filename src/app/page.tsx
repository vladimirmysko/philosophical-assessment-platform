import { UploadFileForm } from '@/components/forms/upload-file-form';

export default function HomePage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-4 py-10">
      <UploadFileForm className="w-full max-w-sm" />
    </main>
  );
}
