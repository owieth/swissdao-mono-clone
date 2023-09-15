import 'tailwind-config/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import Web3Wrapper from '../(app)/web3wrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body>
        <Web3Wrapper>
          <main>{children}</main>
        </Web3Wrapper>
      </body>
    </html>
  );
}
