'use client';

import { NOTION_CLIENT } from '@/api/client';
import { UsersTable } from '@/components/table/table';
import { CONTRACT } from '@/contracts/contracts';
import { Card, Text, Title } from '@tremor/react';
import { useContractInfiniteReads } from 'wagmi';

async function getData() {
  // const res = await fetch('https://api.example.com/...')
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  //return res.json()

  return await NOTION_CLIENT.users.list({ auth: undefined });
}

export default function MembersPage() {
  const { data: memberships, fetchNextPage } = useContractInfiniteReads({
    cacheKey: 'memberships',
    contracts(param = 1) {
      const args = [param] as const;
      return [{ ...CONTRACT, functionName: 'getTokenStructById', args }] as any;
    },
    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const users = [
    {
      id: 1,
      name: 'Max Muster',
      username: '@maxmuster',
      email: 'max.muster@gmail.com',
    },
  ];

  console.log(memberships);

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Users</Title>
      <Text>A list of all registered Members</Text>
      <Card className="mt-6">
        <UsersTable />
      </Card>
    </main>
  );
}
