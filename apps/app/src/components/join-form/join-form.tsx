'use client';

import { cn } from '@/helpers/utils';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import * as React from 'react';
import { UserNav } from '../dashboard/user-nav';
import { Button } from '../ui/button';
import { Icons } from '../ui/icons';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function JoinForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <ConnectButton.Custom>
        {({ account, chain, openChainModal, openConnectModal, mounted }) => {
          const connected = mounted && account && chain;

          return !connected ? (
            <Button
              variant="outline"
              type="button"
              disabled={isLoading}
              onClick={openConnectModal}
            >
              {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.ethereum className="mr-2 h-4 w-4" />
              )}{' '}
              Wallet
            </Button>
          ) : chain.unsupported ? (
            <Button onClick={openChainModal} variant="secondary">
              Wrong network
            </Button>
          ) : (
            <UserNav />
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
}
