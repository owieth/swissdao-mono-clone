import { fetchSubgraph } from '@/api/subgraph';
import ActivityLog from '@/components/dashboard/activity-log';
import { Overview } from '@/components/dashboard/overview';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { BadgeType, TokenType } from '@/types/types';

async function getData() {
  const { tokens, badges } = await fetchSubgraph(`
    query {
      tokens {
        totalAmount
        transactions {
          amount
          timestamp
        }
      }
      badges {
        id
      }
    }
  `);

  return { tokens, badges } as { tokens: TokenType[]; badges: BadgeType[] };
}

export default async function DashboardPage() {
  const { tokens, badges } = await getData();

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6 lg:p-32 lg:pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              swissDAO - Membership Overview
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Overview tokens={tokens} />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Latest Activity</CardTitle>
                <CardDescription>Latest Activity of the DAO</CardDescription>
              </CardHeader>
              <CardContent>
                <ActivityLog />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
