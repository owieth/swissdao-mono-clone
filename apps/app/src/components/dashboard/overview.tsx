'use client';

import { TokenType } from '@/types/types';
import { valueFormatter } from '@/helpers/format';
import { AreaChart, Card, List, ListItem } from '@tremor/react';

type Props = {
  tokens: TokenType[];
};

export function Overview({ tokens }: Props) {
  //const data = tokens.map((token, _, array) => {
  //   return {
  //     ActivityPoints: 0,
  //     ExperiencePoints: 0,
  //     AttendedEvents: 0,
  //   }
  // });

  const data = [
    {
      date: 'Jan 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    },
    {
      date: 'Feb 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    },
    {
      date: 'Mar 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    },
    {
      date: 'Apr 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    },
    {
      date: 'May 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    },
    {
      date: 'Jun 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    },
    {
      date: 'Jul 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    },
    {
      date: 'Aug 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    },
    {
      date: 'Sep 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    },
    {
      date: 'Oct 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    },
    {
      date: 'Nov 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    },
    {
      date: 'Dec 23',
      ActivityPoints: 0,
      ExperiencePoints: 0,
      AttendedEvents: 0
    }
  ];

  const summary = [
    {
      name: 'Activity Points',
      value: tokens[0].totalAmount
    },
    {
      name: 'Experience Points',
      value: tokens[1].totalAmount
    },
    {
      name: 'Attended Events',
      value: tokens[2].totalAmount
    }
  ];

  const statusColor = {
    ActivityPoints: { color: 'blue', bg: 'bg-blue-500' },
    ExperiencePoints: { color: 'violet', bg: 'bg-violet-500' },
    AttendedEvents: { color: 'violet', bg: 'bg-violet-500' }
  } as {
    [key: string]: {
      color: string;
      bg: string;
    };
  };

  return (
    <>
      <AreaChart
        data={data}
        index="date"
        categories={Object.keys(statusColor)}
        colors={Object.values(statusColor).map(status => status.color) as any}
        valueFormatter={valueFormatter}
        showLegend={false}
        showYAxis={false}
        showGradient={false}
        className="mt-6 h-32"
      />

      <List className="mt-2">
        {summary.map((item, i) => (
          <ListItem key={item.name}>
            <div className="flex items-center space-x-2">
              <span
                className={`h-0.5 w-3 ${Object.values(statusColor)[i].bg}`}
                aria-hidden={true}
              />
              <span>{item.name}</span>
            </div>
            <span className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              {valueFormatter(item.value)}
            </span>
          </ListItem>
        ))}
      </List>
    </>
  );
}
