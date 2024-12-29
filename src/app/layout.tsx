'use client';

import '@/app/globals.css'; 

import { Web3ModalProvider } from '@/context/Web3ModalProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Web3ModalProvider>
          {children}
        </Web3ModalProvider>
      </body>
    </html>
  );
}
