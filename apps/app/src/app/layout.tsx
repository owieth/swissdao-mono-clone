import Navbar from '@/components/navbar/navbar';
import '@rainbow-me/rainbowkit/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Web3Wrapper from './web3wrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'swissDAO - App',
  description: 'Crafted by swissDAO',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3Wrapper>
          <Navbar />
          {children}
        </Web3Wrapper>
      </body>
    </html>
  );
}
