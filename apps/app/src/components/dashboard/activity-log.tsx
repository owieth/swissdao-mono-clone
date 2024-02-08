import { fetchSubgraph } from '@/api/subgraph';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { TransactionType } from '@/types/types';
import { useState, useEffect } from 'react';

export default function ActivityLog() {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
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
    };

    fetchTransactions();
  }, []);

  return (
    <div className="space-y-8">
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
