import { fetchSubgraph } from '@/api/subgraph';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TransactionType } from '@/types/types';
import { useState, useEffect, useRef } from 'react';
import { Icons } from '../ui/icons';

export default function ActivityLog() {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [isFetching, setIsFetching] = useState(false);

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

  return (
    <div className="space-y-8">
      {isFetching && (
        <div className="flex justify-center">
          <Icons.spinner className="animate-spin" />
        </div>
      )}

      {transactions.map((transaction, i) => (
        <div className="flex items-center" key={i}>
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={
                transaction.from?.profileImageUri ||
                transaction.to?.profileImageUri
              }
              alt="Avatar"
            />
            <AvatarFallback>
              {transaction.from?.nickname || transaction.to?.nickname}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {transaction.from?.nickname || transaction.to?.nickname}
            </p>
            <p className="text-muted-foreground text-sm">
              {transaction.from?.holder || transaction.to?.holder}
            </p>
          </div>
          <div className="ml-auto font-medium">{transaction.type}</div>
        </div>
      ))}
    </div>
  );
}
