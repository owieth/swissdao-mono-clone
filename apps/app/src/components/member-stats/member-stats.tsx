import { LineChart } from '@tremor/react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { MemberType } from '@/types/types';
import {
  IdCardIcon,
  LapTimerIcon,
  PersonIcon,
  UpdateIcon
} from '@radix-ui/react-icons';

const chartdata = [
  {
    year: 1970,
    'Export Growth Rate': 2.04,
    'Import Growth Rate': 1.53
  },
  {
    year: 1971,
    'Export Growth Rate': 1.96,
    'Import Growth Rate': 1.58
  },
  {
    year: 1972,
    'Export Growth Rate': 1.96,
    'Import Growth Rate': 1.61
  },
  {
    year: 1973,
    'Export Growth Rate': 1.93,
    'Import Growth Rate': 1.61
  },
  {
    year: 1974,
    'Export Growth Rate': 1.88,
    'Import Growth Rate': 1.67
  }
  //...
];

const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}%`;

type Props = {
  member: MemberType;
};

export function MemberStats({ member }: Props) {
  return (
    <>
      <div className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Badges</CardTitle>
            <IdCardIcon />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{member.badges.length}</div>
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
            <div className="text-2xl font-bold">
              {member.activityPoints.toString()}
            </div>
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
            <div className="text-2xl font-bold">
              {member.experiencePoints.toString()}
            </div>
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
            <div className="text-2xl font-bold">
              {member.attendedEvents.toString()}
            </div>
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
