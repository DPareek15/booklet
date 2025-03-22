import type { Metadata } from 'next';
import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/dates/styles.css';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import Navbar from '@/components/Navbar';
import { MainHeader } from '@/components/Dashboard/MainHeader';

dayjs.extend(customParseFormat);

export const metadata: Metadata = {
  title: 'Booklet',
  description: 'A web application for all book readers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="p-0 overflow-x-hidden">
        <MantineProvider>
          <div className="flex flex-row h-full w-full p-0">
            <Navbar />
            <div
              className={`flex flex-col relative top-0 left-[80px] h-full w-[calc(100vw-80px)] p-0 base`}
            >
              <MainHeader />
              {children}
            </div>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
