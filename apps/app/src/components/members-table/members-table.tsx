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
  useReactTable,
} from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import * as React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components//ui/table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { MemberType } from '@/types/types';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

type Props = {
  members: MemberType[];
};

export const columns: ColumnDef<MemberType>[] = [
  {
    accessorKey: 'membership.tokenId',
    header: 'Token ID',
  },
  {
    accessorKey: 'membership.nickname',
    header: 'Nickname',
    cell: ({ row }) => {
      const label = row.getValue('membership_nickname') as any;

      return (
        <div className="capitalize">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={row.original.membership.profileImageUri}
              alt="@shadcn"
            />
            <AvatarFallback>{label}</AvatarFallback>
          </Avatar>
          {label}
        </div>
      );
    },
  },
  {
    accessorKey: 'membership.badges',
    header: 'Badges',
    cell: ({ row: { original } }) => (
      <div className="capitalize">
        {original.badges.length > 0 ? (
          original.badges.map((badge, i) => (
            <Avatar className="h-8 w-8" key={i}>
              <AvatarImage
                src="https://avatar.vercel.sh/leerob"
                alt="@shadcn"
              />
              <AvatarFallback>{badge.name}</AvatarFallback>
            </Avatar>
          ))
        ) : (
          <p>No Badges yet.</p>
        )}
      </div>
    ),
  },
  {
    accessorKey: 'membership.activityPoins',
    header: 'Activity Poins',
    cell: ({ row: { original } }) => {
      const value = original.activityPoints;

      return (
        <div className="flex items-center gap-4">
          {Number(value)}
          <Avatar className="h-8 w-8">
            <AvatarImage src={''} alt="@shadcn" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: 'membership.experiencePoints',
    header: 'Experience Poins',
    cell: ({ row: { original } }) => {
      const value = original.experiencePoints;

      return (
        <div className="flex items-center gap-4">
          {Number(value)}
          <Avatar className="h-8 w-8">
            <AvatarImage src={''} alt="@shadcn" />
            <AvatarFallback>XP</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    accessorKey: 'membership.attendedEvents',
    header: 'Attended Events',
    cell: ({ row: { original } }) => {
      const value = original.attendedEvents;

      return (
        <div className="flex items-center gap-4">
          {Number(value)}
          <Avatar className="h-8 w-8">
            <AvatarImage src={''} alt="@shadcn" />
            <AvatarFallback>Events</AvatarFallback>
          </Avatar>
        </div>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const {
        membership: { holder },
      } = row.original;

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
              <Link href={`/members/${holder}`}>View profile</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function MembersTable({ members }: Props) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

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
      columnFilters,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Filter nicknames..."
          value={
            (table
              .getColumn('membership_nickname')
              ?.getFilterValue() as string) ?? ''
          }
          onChange={event =>
            table
              .getColumn('membership_nickname')
              ?.setFilterValue(event.target.value)
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
