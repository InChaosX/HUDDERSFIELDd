import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { TolgeeNextProvider } from '@/tolgee/client';
import { ALL_LOCALES, getStaticData } from '@/tolgee/shared';
import Head from 'next/head'; // Added import for Head component
import Header from '@/components/Das/Header';
import Footer from '@/components/Das/Footer';
import ScrollToTopButton from '@/components/Das/ScrollToTopButton';
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

// export const metadata: Metadata = {
//   title: "Huddersfields",
//   // description: "Elite London Academy",
//   keywords: [
//     "education",
//     "Huddersfield",
//     "university",
//     "academic excellence",
//     "student life",
//   ],

//   description:
//   "Enroll at Huddersfield University and start your journey towards academic excellence. Discover our programs, admissions process, and student life..",
 

//   icons: {

//     icon: "favicon.ico",
//   },
// };

export const metadata: Metadata = {
  title: "Huddersfields",
  description:
    "Enroll at Huddersfield University and start your journey towards academic excellence... Discover our programs, admissions process, and student life...BAC. Moroccan French Other. Submit. Contact Casablanca International Study Centre. Phone: +212 684 230 230; Email: ncuk@londonacademy.ma; Website: ...",

  keywords: [
    "education",
    "Huddersfield",
    "university",
    "academic excellence",
    "student life",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  // Open Graph metadata
  openGraph: {
    title: "Huddersfields - university",
    description:
      "Enroll at Huddersfield University and start your journey towards academic excellence. Discover our programs, admissions process, and student life.",
    type: "website",
    url: "https://www.yourwebsite.com",
    siteName: "Huddersfields",
  },
  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: "@Huddersfields",
    title: "Huddersfields - Elite London Academy",
    description:
      "Enroll at Huddersfield University and start your journey towards academic excellence. Discover our programs, admissions process, and student life.",
  },

  robots: "index, follow",
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
        {/* "education", "Huddersfield", "university", "academic excellence",
        "student life", */}
        <meta
          name="description"
          content="Enroll at Huddersfield University and start your journey towards academic excellence. Discover our programs, admissions process, and student life."
        />
        <meta
          name="keywords"
          content="education, Huddersfield, university , academic excellence"
        />
        {/* <meta name="author" content="Your Name" /> */}
        <meta name="robots" content="index, follow" />
        {/* Add any other metadata tags as needed */}
        {/* Open Graph metadata */}
        <meta property="og:title" content="Huddersfield" />
        <meta
          property="og:description"
          content="Enroll at Huddersfield University and start your journey towards academic excellence. Discover our programs, admissions process, and student life."
        />
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
            <div className="px-1 md:px-0 overflow-hidden">
              {children}
              <Analytics />
            </div>

            <ScrollToTopButton />
            <Footer />
          </TolgeeNextProvider>
        </body>
      </html>
    </>
  );
}
