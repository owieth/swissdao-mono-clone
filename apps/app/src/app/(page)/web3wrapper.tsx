'use client';

import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from 'react';
import { WagmiConfig, configureChains, createConfig, sepolia } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export default function Web3Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  const { chains, publicClient } = configureChains(
    [sepolia],
    [
      alchemyProvider({ apiKey: 'PZYto3ONWzPMqPW6AV70bOzbofx11rQf' }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: 'swissDAO - Membership',
    projectId: 'd9177ce16c4d52154c2e5031118d7c5d',
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
