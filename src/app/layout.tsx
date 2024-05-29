import '~/styles/globals.css';

import { type ReactNode } from 'react';
import { Noto_Sans_Thai as NotoSansThai } from 'next/font/google';

import { cn } from '~/libs/utils';
import { TRPCReactProvider } from '~/trpc/react';

const fontSans = NotoSansThai({
  display: 'swap',
  subsets: ['latin', 'thai'],
  weight: ['900', '800', '700', '600', '500', '400', '300'],
  variable: '--font-sans',
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: 'Vacation Club',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
