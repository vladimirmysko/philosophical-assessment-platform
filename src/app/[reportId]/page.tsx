import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { prisma } from '@/lib/prisma';

import Link from 'next/link';
import { Logo } from '@/components/logo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ reportId: string }>;
}): Promise<Metadata> {
  const { reportId } = await params;

  return {
    title: `Индивидуальный отчёт ${reportId} - Philosophical Assessment Platform`,
    description: `Индивидуальный отчёт ${reportId}`,
  };
}

export default async function ReportPage({ params }: { params: Promise<{ reportId: string }> }) {
  const { reportId } = await params;

  const report = await prisma.report.findUnique({
    where: {
      id: reportId,
    },
  });

  if (!report) {
    notFound();
  }

  return (
    <main className="flex min-h-svh flex-col items-center px-4 py-10">
      <div className="grid w-full max-w-3xl grid-cols-1 gap-14">
        <Link href="/">
          <Logo />
        </Link>

        <h1 className="text-2xl font-semibold tracking-tight">Индивидуальный отчёт</h1>

        {report.finalAssessment ? (
          <>
            <table>
              <thead>
                <tr className="last:[&>th]:border-transparent">
                  <th className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs font-semibold first:w-40 first:pl-0 last:pr-0">
                    Раздел
                  </th>
                  <th className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs font-semibold first:w-40 first:pl-0 last:pr-0">
                    Содержание
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="last:[&>td]:border-transparent">
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    Шапка
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    {report.header}
                  </td>
                </tr>
                <tr className="last:[&>td]:border-transparent">
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    Итоговая оценка
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    {(() => {
                      const totalPoints = Object.values(report).reduce<number>(
                        (sum, value) => (typeof value === 'number' ? sum + value : sum),
                        0,
                      );

                      return `${totalPoints} / 75 (${report.finalAssessment})`;
                    })()}
                  </td>
                </tr>
                <tr className="last:[&>td]:border-transparent">
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    Комментарии
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    {report.comment}
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 className="text-xl font-semibold tracking-tight">Таблица рубрики</h2>

            <table>
              <thead>
                <tr className="last:[&>th]:border-transparent">
                  <th className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs font-semibold first:w-40 first:pl-0 last:pr-0">
                    Критерий
                  </th>
                  <th className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs font-semibold first:w-40 first:pl-0 last:pr-0">
                    Макс. балл
                  </th>
                  <th className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs font-semibold first:w-40 first:pl-0 last:pr-0">
                    Получено
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="last:[&>td]:border-transparent">
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    Глубина понимания
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    20
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    {report.depthOfUnderstanding}
                  </td>
                </tr>
                <tr className="last:[&>td]:border-transparent">
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    Аргументация и логика
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    20
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    {report.argumentationAndLogic}
                  </td>
                </tr>
                <tr className="last:[&>td]:border-transparent">
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    Оригинальность и критика
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    15
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    {report.originalityAndCriticism}
                  </td>
                </tr>
                <tr className="last:[&>td]:border-transparent">
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    Стиль и грамотность
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    10
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    {report.styleAndLiteracy}
                  </td>
                </tr>
                <tr className="last:[&>td]:border-transparent">
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    Формальные требования
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    10
                  </td>
                  <td className="border-gray-6 border-b px-4 py-3 text-left align-top text-xs first:w-40 first:pl-0 last:pr-0">
                    {report.formalRequirements}
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <h2>Отчёт ещё не готов. Пожалуйста, подождите и перезагрузите страницу.</h2>
        )}
      </div>
    </main>
  );
}
