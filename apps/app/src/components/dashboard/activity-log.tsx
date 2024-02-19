'use client';

import { fetchSubgraph } from '@/api/subgraph';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components//ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import {
  MembershipType,
  TransactionType,
  TransactionTypeEnum
} from '@/types/types';
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
import { ArrowUpRight, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Icons } from '../ui/icons';
import { shortenBytes32 } from '@/helpers/format';

export default function ActivityLog() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const [transactions, setTransactions] = React.useState<TransactionType[]>([]);
  const [isFetching, setIsFetching] = React.useState(false);

  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsFetching(true);

      const { transactions: _transactions } = (await fetchSubgraph(`
        query {
          transactions(orderBy:timestamp, orderDirection:desc) {
            id
            from {
              nickname
              profileImageUri
              holder
            }
            to {
              nickname
              profileImageUri
              holder
            }
            type
            txHash
            timestamp
          }
        }
      `)) as { transactions: TransactionType[] };

      setTransactions(_transactions);
      setIsFetching(false);
    };

    fetchTransactions();

    timerRef.current = setInterval(() => fetchTransactions(), 10000);

    return () => clearTimeout(timerRef.current);
  }, []);

  const columns: ColumnDef<TransactionType>[] = [
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => <div>{row.original.type}</div>
    },
    {
      accessorKey: 'member',
      header: 'Member',
      cell: ({ row }) => {
        let member: MembershipType;

        switch (row.original.type) {
          case TransactionTypeEnum.MEMBERSHIP_MINT:
          case TransactionTypeEnum.MEMBERSHIP_EDIT:
          case TransactionTypeEnum.TOKEN_MINT:
          case TransactionTypeEnum.BADGE_MINT:
          case TransactionTypeEnum.GUILD_JOIN:
            member = row.original.to;
            break;

          case TransactionTypeEnum.MEMBERSHIP_BURN:
          case TransactionTypeEnum.TOKEN_BURN:
          case TransactionTypeEnum.BADGE_BURN:
          case TransactionTypeEnum.GUILD_LEAVE:
            member = row.original.from;
            break;

          default:
            // TODO check
            member = row.original.to;
            break;
        }

        return (
          <div className="flex items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={member.profileImageUri} alt="@shadcn" />
              <AvatarFallback>{member.nickname}</AvatarFallback>
            </Avatar>
            {member.nickname}
          </div>
        );
      }
    },
    {
      accessorKey: 'txHash',
      header: 'Transaction Hash',
      cell: ({ row }) => {
        const { txHash } = row.original;

        return (
          <div className="group">
            <Link
              href={`https://sepolia-optimism.etherscan.io/tx/${txHash}`}
              target="_blank"
              className="flex items-center group-hover:underline"
            >
              {shortenBytes32(txHash)}
              <ArrowUpRight className="size-4 ml-2 shrink-0 opacity-50 group-hover:opacity-100" />
            </Link>
          </div>
        );
      }
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const { tokenID } = row.original;

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
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }
    }
  ];

  const table = useReactTable({
    data: transactions || [],
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
            {isFetching && (
              <div className="flex justify-center">
                <Icons.spinner className="animate-spin" />
              </div>
            )}

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
