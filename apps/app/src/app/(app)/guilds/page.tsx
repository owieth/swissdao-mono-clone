'use client';

import { Card, Text, Title } from '@tremor/react';

export default function GuildsPage() {
  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Guilds</Title>
      <Text>A list of all swissDAO Guilds</Text>
      <Card className="mt-6">
        {/* <MembersTable members={members as MemberType[]} /> */}
      </Card>
    </main>
  );
}
