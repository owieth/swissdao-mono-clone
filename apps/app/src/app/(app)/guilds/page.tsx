'use client';

import Listitem from '@/components/listitem/listitem';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CONTRACT } from '@/contracts/contracts';
import { TokenType } from '@/types/types';
import { Text, Title } from '@tremor/react';
import { useContractRead } from 'wagmi';

export default function BadgesPage() {
  const {
    data: guilds,
    isError,
    isLoading,
  } = useContractRead({ ...CONTRACT, functionName: 'getAllBadges' });

  const BadgeTriggerItem = ({ badge }: { badge: TokenType }) => (
    <div className="flex w-full items-center justify-between">
      <Avatar className="h-8 w-8">
        <AvatarImage src={''} alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
      </Avatar>

      <span>{badge.name}</span>

      <span>Holders</span>
    </div>
  );

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Guilds</Title>
      <Text>A list of all swissDAO Guilds</Text>
      {(guilds as TokenType[])?.map((badge, i) => (
        <Listitem key={i} trigger={<BadgeTriggerItem badge={badge} />}>
          <div>
            <h2>About this Badge</h2>
            <span>Lorem Ipsum</span>

            <h2>About this Badge</h2>
            <span>Lorem Ipsum</span>
          </div>
        </Listitem>
      ))}
    </main>
  );
}
