'use client';

import { ALCHEMY_KEY } from '@/contracts/contracts';
import { RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from 'react';
import { optimismSepolia } from 'viem/chains';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

export default function Web3Wrapper({
  children
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  const { chains, publicClient } = configureChains(
    [optimismSepolia],
    [alchemyProvider({ apiKey: ALCHEMY_KEY }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: 'swissDAO - Membership',
    projectId: 'd9177ce16c4d52154c2e5031118d7c5d',
    chains
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
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
