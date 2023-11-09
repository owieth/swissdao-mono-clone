'use client';

import Listitem from '@/components/listitem/listitem';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Text, Title } from '@tremor/react';

export default function BadgesPage() {
  const BadgeTriggerItem = () => (
    <div className="flex w-full items-center justify-between">
      <Avatar className="h-8 w-8">
        <AvatarImage src={''} alt="@shadcn" />
        <AvatarFallback></AvatarFallback>
      </Avatar>

      <span>Badge Name</span>

      <span>Holders</span>
    </div>
  );

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Badges</Title>
      <Text>A list of all earnable swissDAO Badges</Text>
      <Listitem trigger={<BadgeTriggerItem />}>
        <div>
          <h2>About this Badge</h2>
          <span>Lorem Ipsum</span>

          <h2>About this Badge</h2>
          <span>Lorem Ipsum</span>
        </div>
      </Listitem>
    </main>
  );
}
