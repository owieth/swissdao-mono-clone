'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import * as React from 'react';
import { useAccount } from 'wagmi';
import { Button } from '../../ui/button';
import { Icons } from '../../ui/icons';
import { SwiperContext } from '@/contexts/swiper';

export function Connect() {
  const { isConnected } = useAccount();

  const { swiper } = React.useContext(SwiperContext);

  React.useEffect(() => {
    if (isConnected) swiper?.slideNext();
  }, [isConnected, swiper]);

  return (
    <div className="grid gap-6">
      <ConnectButton.Custom>
        {({ account, chain, openChainModal, openConnectModal, mounted }) => {
          const connected = mounted && account && chain;

          return !connected ? (
            <Button variant="outline" type="button" onClick={openConnectModal}>
              <Icons.ethereum className="mr-2 h-4 w-4" /> Wallet
            </Button>
          ) : chain.unsupported ? (
            <Button onClick={openChainModal} variant="secondary">
              Wrong network
            </Button>
          ) : (
            <></>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
}
