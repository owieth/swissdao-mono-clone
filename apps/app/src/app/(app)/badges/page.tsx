'use client';

import { MembersTable } from '@/components/members-table/members-table';
import { CONTRACT } from '@/contracts/contracts';
import { MemberType } from '@/types/types';
import { Card, Text, Title } from '@tremor/react';
import { useContractRead } from 'wagmi';

export default function BadgesPage() {
  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Badges</Title>
      <Text>A list of all earnable swissDAO Badges</Text>
      <Card className="mt-6">
        {/* <MembersTable members={members as MemberType[]} /> */}
      </Card>
    </main>
  );
}
