import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { TolgeeNextProvider } from '@/tolgee/client';
import { ALL_LOCALES, getStaticData } from '@/tolgee/shared';
import Head from 'next/head'; // Added import for Head component
import Header from '@/components/Das/Header';
import Footer from '@/components/Das/Footer';
import ScrollToTopButton from '@/components/Das/ScrollToTopButton';
import { Metadata } from "next";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Huddersfields",
  description: "The official Coding Beauty home page.",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  if (!ALL_LOCALES.includes(locale)) {
    notFound();
  }

  const locales = await getStaticData(['fr', locale]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Huddersfield</title>

        <meta name="description" content="Your page description here" />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />
        {/* Add any other metadata tags as needed */}
        {/* Open Graph metadata */}
        <meta property="og:title" content="Huddersfield" />
        <meta property="og:description" content="Your Open Graph Description" />
        <meta property="og:image" content="URL to Your Open Graph Image" />
        <meta property="og:url" content="URL to Your Page" />
        {/* Additional titles */}
        <meta name="title" content="Huddersfield" />
        <meta name="twitter:title" content="Twitter Title" />
      </Head>
      <html lang={locale}>
        <body>
          <TolgeeNextProvider locale={locale} locales={locales}>

            <Header />
            <div className='px-1 overflow-hidden'>
              {children}
            </div>
            
            <ScrollToTopButton />
            <Footer />
          </TolgeeNextProvider>
        </body>
      </html>
    </>
  );
}
