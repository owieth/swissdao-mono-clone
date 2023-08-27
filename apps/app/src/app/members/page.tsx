import { NOTION_CLIENT } from '@/api/client';
import Search from '@/components/search/search';
import UsersTable from '@/components/table/table';
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

export default async function MembersPage() {
  const users = [
    {
      id: 1,
      name: 'Max Muster',
      username: '@maxmuster',
      email: 'max.muster@gmail.com',
    },
  ];

  const data = await getData();

  console.log(data);

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <Title>Users</Title>
      <Text>A list of all registered Members</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
