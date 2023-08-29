'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@tremor/react';
import Image from 'next/image';

const WalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const connected = mounted && account && chain;

        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal}>Connect Wallet</Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} variant="secondary">
                    Wrong network
                  </Button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {account.displayName}

                  <button
                    onClick={openAccountModal}
                    className="flex rounded-full bg-white text-sm hover:opacity-50"
                  >
                    <span className="sr-only">Open user menu</span>
                    <Image
                      className="h-8 w-8 rounded-full"
                      src="https://avatar.vercel.sh/leerob"
                      height={32}
                      width={32}
                      alt="avatar"
                    />
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default WalletButton;
