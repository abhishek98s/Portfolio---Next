/** @format */

import type { Metadata } from 'next';
import './globals.scss';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Abhishek Shakya',
  description:
    'Web developer dedicated to building applications that real world problem.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='preload'
          href='src/app/fonts/source-serif-pro/SourceSerifPro-SemiBold.woff'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />

        <link
          rel='preload'
          href='src/app/fonts/source-serif-pro/SourceSerifPro-SemiBold.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </Head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
