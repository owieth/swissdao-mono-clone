import Search from '@/components/search/search';
import UsersTable from '@/components/table/table';
import { Card, Text, Title } from '@tremor/react';

export default function MembersPage() {
  const users = [
    {
      id: 1,
      name: "Max Muster",
      username: "@maxmuster",
      email: "max.muster@gmail.com",
    }
  ];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>
        A list of all registered Members
      </Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
