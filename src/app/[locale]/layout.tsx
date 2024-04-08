import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { TolgeeNextProvider } from '@/tolgee/client';
import { ALL_LOCALES, getStaticData } from '@/tolgee/shared';
import Header from '@/components/Das/Header';
import Footer from '@/components/Das/Footer';
import ScrollToTopButton from '@/components/Das/ScrollToTopButton';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const locales = await getStaticData(['en', locale]);

  return (
    <html lang={locale}>
      <body>
        <TolgeeNextProvider locale={locale} locales={locales}>
          <Header />
          {children}
          <ScrollToTopButton />
          <Footer />
        </TolgeeNextProvider>
      </body>
    </html>
  );
}
