'use client';

import { Overview } from '@/components/dashboard/overview';
import { RecentSales } from '@/components/dashboard/recent-sales';
import { MemberStats } from '@/components/member-stats/member-stats';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { CONTRACT } from '@/contracts/contracts';
import { MembershipType } from '@/types/types';
import { useEffect, useState } from 'react';
import { useContractRead } from 'wagmi';

export default function DashboardPage() {
  const [member, setMember] = useState({
    membership: {} as MembershipType,
    activityPoints: BigInt(10),
    experiencePoints: BigInt(10),
    attendedEvents: BigInt(10),
    badges: []
  });

  const {
    data: members,
    isError,
    isLoading
  } = useContractRead({
    ...CONTRACT,
    functionName: 'getAllMembers'
  });

  // console.log(members);
  // console.log(members && (members as MemberType[]).reduce(
  //   (accumulator, currentValue) => accumulator.concat(currentValue.activityPoints), []
  // ));

  useEffect(() => {
    // setMember(members)
  }, [members]);

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              swissDAO - Membership Overview
            </h2>
          </div>
          {member && <MemberStats member={member} />}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
