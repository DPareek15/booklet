import type { Metadata } from 'next';
import './globals.css';
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';

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
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
