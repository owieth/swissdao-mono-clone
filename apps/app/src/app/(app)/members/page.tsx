'use client';

import { NOTION_CLIENT } from '@/api/client';
import { MembersTable } from '@/components/members-table/members-table';
import { Card, Text, Title } from '@tremor/react';

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
  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Users</Title>
      <Text>A list of all registered Members</Text>
      <Card className="mt-6">
        <MembersTable />
      </Card>
    </main>
  );
}
