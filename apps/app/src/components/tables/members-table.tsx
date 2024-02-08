'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components//ui/table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { MembershipContext } from '@/contexts/membership';
import {
  ACTIVITY_POINTS_IPFS_URL,
  ATTENDED_EVENTS_IPFS_URL,
  EXPERIENCE_POINTS_IPFS_URL
} from '@/helpers/const';
import { convertIpfsToHttps } from '@/helpers/ipfs';
import { MembershipType } from '@/types/types';
import Link from 'next/link';
import { useContext } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupList,
  AvatarImage,
  AvatarOverflowIndicator
} from '../ui/avatar';

type Props = {
  members: MembershipType[];
  onAttend: (holder: string) => void;
  onIncrease: (holder: string) => void;
};

export function MembersTable({ members, onAttend, onIncrease }: Props) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const { membership } = useContext(MembershipContext);

  const columns: ColumnDef<MembershipType>[] = [
    {
      accessorKey: 'tokenID',
      header: 'Token ID',
      cell: ({ row }) => <div>#{row.original.tokenID}</div>
    },
    {
      accessorKey: 'nickname',
      header: 'Nickname',
      cell: ({ row }) => {
        const label = row.original.nickname;

        return (
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={row.original.profileImageUri} alt="@shadcn" />
              <AvatarFallback>{label}</AvatarFallback>
            </Avatar>
            {label}
          </div>
        );
      }
    },
    {
      accessorKey: 'guilds',
      header: 'Guilds',
      cell: ({ row: { original } }) => (
        <div className="capitalize">
          {original.guilds.length > 0 ? (
            <AvatarGroup limit={3} className="justify-start">
              <AvatarGroupList>
                {original.guilds.map((guild, i) => (
                  <DropdownMenu key={i}>
                    <DropdownMenuTrigger asChild className="cursor-pointer">
                      <Avatar>
                        <AvatarImage
                          src={convertIpfsToHttps(guild.imageUri || '')}
                          alt={guild.name}
                        />
                        <AvatarFallback>{guild.name}</AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      align="end"
                      forceMount
                    >
                      <DropdownMenuItem>
                        <Link
                          href={`/guilds/${guild.id}`}
                          className="flex w-full items-center"
                        >
                          Guild
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ))}
              </AvatarGroupList>
              <AvatarOverflowIndicator />
            </AvatarGroup>
          ) : (
            <p>No Guilds yet.</p>
          )}
        </div>
      )
    },
    {
      accessorKey: 'activityPoints',
      header: 'Activity Points',
      cell: ({ row: { original } }) => {
        const value = original.activityPoints.totalAmount;

        return (
          <div className="flex items-center gap-4">
            {Number(value)}
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={convertIpfsToHttps(ACTIVITY_POINTS_IPFS_URL)}
                alt="AP"
              />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
          </div>
        );
      }
    },
    {
      accessorKey: 'experiencePoints',
      header: 'Experience Points',
      cell: ({ row: { original } }) => {
        const value = original.experiencePoints.totalAmount;

        return (
          <div className="flex items-center gap-4">
            {Number(value)}
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={convertIpfsToHttps(EXPERIENCE_POINTS_IPFS_URL)}
                alt="XP"
              />
              <AvatarFallback>XP</AvatarFallback>
            </Avatar>
          </div>
        );
      }
    },
    {
      accessorKey: 'attendedEvents',
      header: 'Attended Events',
      cell: ({ row: { original } }) => {
        const value = original.attendedEvents.totalAmount;

        return (
          <div className="flex items-center gap-4">
            {Number(value)}
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={convertIpfsToHttps(ATTENDED_EVENTS_IPFS_URL)}
                alt="Events"
              />
              <AvatarFallback>Events</AvatarFallback>
            </Avatar>
          </div>
        );
      }
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const { tokenID, holder } = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={`/members/${tokenID}`}>View profile</Link>
              </DropdownMenuItem>
              {membership?.isAdmin && (
                <>
                  <DropdownMenuItem onClick={() => onAttend(holder)}>
                    Attend Event
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => onIncrease(holder)}>
                    Increase Activity Points
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
    }
  ];

  const table = useReactTable({
    data: members || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters
    }
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter nicknames..."
          value={
            (table.getColumn('nickname')?.getFilterValue() as string) ?? ''
          }
          onChange={event =>
            table.getColumn('nickname')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <div className="text-muted-foreground text-sm">
          {members?.length} Members
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
