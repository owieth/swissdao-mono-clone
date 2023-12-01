'use client';

import { NOTION_CLIENT } from '@/api/client';
import { MembersTable } from '@/components/tables/members-table';
import { Button } from '@/components/ui/button';
import { MembershipContext } from '@/contexts/membership';
import { CONTRACT } from '@/contracts/contracts';
import { EVENT_INITIAL_COUNTER, GUILD_INITIAL_COUNTER } from '@/helpers/const';
import { MemberType } from '@/types/types';
import { Card, Text, Title } from '@tremor/react';
import Link from 'next/link';
import { useContext } from 'react';
import { useContractRead } from 'wagmi';

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
  const { membership } = useContext(MembershipContext);

  const {
    data: members,
    isError,
    isLoading,
  } = useContractRead({ ...CONTRACT, functionName: 'getAllMembers' });

  return (
    <main className="mx-auto max-w-7xl p-4 md:p-10">
      <div className="flex items-center justify-between">
        <div>
          <Title>Members</Title>
          <Text>A list of all swissDAO Members</Text>
        </div>
        {BigInt(membership?.membership.tokenId || 0) === BigInt(0) && (
          <Button>
            <Link href="/join">Get Membership</Link>
          </Button>
        )}
      </div>
      <Card className="mt-6">
        <MembersTable
          members={(members as MemberType[])?.map(member => {
            return {
              ...member,
              badges: member.badges?.filter(
                badge =>
                  BigInt(badge.tokenId) >= GUILD_INITIAL_COUNTER &&
                  BigInt(badge.tokenId) < EVENT_INITIAL_COUNTER
              ),
            };
          })}
        />
      </Card>
    </main>
  );
}
