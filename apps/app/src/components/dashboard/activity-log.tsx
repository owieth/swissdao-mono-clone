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
  Row,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  MoreHorizontal
} from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Icons } from '../ui/icons';
import { shortenBytes32 } from '@/helpers/format';
import { Card } from '../ui/card';

const TransactionLink = ({ txHash }: { txHash: string }) => (
  <div className="group">
    <Link
      href={`https://sepolia-optimism.etherscan.io/tx/${txHash}`}
      target="_blank"
      className="flex items-center group-hover:underline"
    >
      {shortenBytes32(txHash)}
      <ArrowUpRight className="ml-2 size-4 shrink-0 opacity-50 group-hover:opacity-100" />
    </Link>
  </div>
);

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
            {member && (
              <>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={member.profileImageUri} alt="@shadcn" />
                  <AvatarFallback>{member.nickname}</AvatarFallback>
                </Avatar>
                {member.nickname}
              </>
            )}
          </div>
        );
      }
    },
    {
      accessorKey: 'txHash',
      header: 'Transaction Hash',
      cell: ({ row }) => {
        const { txHash } = row.original;

        return <TransactionLink txHash={txHash} />;
      }
    },
    {
      id: 'expander',
      cell: ({ row }) => (
        <Button
          variant="outline"
          size="icon"
          onClick={() => row.toggleExpanded()}
        >
          {row.getIsExpanded() ? (
            <ChevronUp className="h-2 w-2" />
          ) : (
            <ChevronDown className="h-2 w-2" />
          )}
        </Button>
      )
    }
  ];

  const renderRowSubComponent = useCallback(
    ({ row }: { row: Row<TransactionType> }) => (
      <Card className="p-4">
        <h1>Transaction Information</h1>
        <h2>Get more information about this transaction.</h2>

        <div className="flex justify-between">
          <span>Hash</span>
          <TransactionLink txHash={row.original.txHash} />
        </div>

        <div className="flex justify-between">
          <span>Sent At</span>
          <span>
            {new Date(row.original.timestamp * 1000).toLocaleString()}
          </span>
        </div>
      </Card>
    ),
    []
  );

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
                <>
                  <TableRow
                    key={row.id}
                    className={row.getIsExpanded() ? 'border-none' : ''}
                  >
                    {row.getVisibleCells().map(cell => (
                      <>
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      </>
                    ))}
                  </TableRow>

                  <>
                    {row.getIsExpanded() ? (
                      <TableRow>
                        <TableCell colSpan={5}>
                          {renderRowSubComponent({ row })}
                        </TableCell>
                      </TableRow>
                    ) : null}
                  </>
                </>
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
