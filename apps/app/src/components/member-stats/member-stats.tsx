import {
  IdCardIcon,
  LapTimerIcon,
  PersonIcon,
  UpdateIcon
} from '@radix-ui/react-icons';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BadgeType, TokenType } from '@/types/types';

type Props = {
  tokens: TokenType[];
  badges: BadgeType[];
};

export function MembersStats({ tokens, badges }: Props) {
  return (
    <>
      <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Badges</CardTitle>
            <IdCardIcon />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{badges.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Activity Points
            </CardTitle>
            <LapTimerIcon />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tokens[0].totalAmount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Experience Points
            </CardTitle>
            <PersonIcon />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tokens[1].totalAmount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Attended Events
            </CardTitle>
            <UpdateIcon />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tokens[2].totalAmount}</div>
          </CardContent>
        </Card>
      </div>

      {/* <Card>
        <CardHeader>
          <CardTitle>Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart
            className="mt-6"
            data={chartdata}
            index="year"
            categories={['Export Growth Rate', 'Import Growth Rate']}
            colors={['emerald', 'gray']}
            valueFormatter={dataFormatter}
            yAxisWidth={40}
          />
        </CardContent>
      </Card> */}
    </>
  );
}
