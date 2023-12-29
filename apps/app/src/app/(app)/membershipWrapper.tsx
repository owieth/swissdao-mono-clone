'use client';

import { MembershipContext } from '@/contexts/membership';
import { CONTRACT } from '@/contracts/contracts';
import { MemberType } from '@/types/types';
import { useEffect, useState } from 'react';
import { useAccount, useContractRead } from 'wagmi';

export default function MembershipWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  const [membership, setMembership] = useState<MemberType>();

  const { address } = useAccount();

  const { data: member } = useContractRead({
    ...CONTRACT,
    functionName: 'getMember',
    args: [address]
  });

  const { data: isAdmin } = useContractRead({
    ...CONTRACT,
    functionName: 'hasRole',
    args: [
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      address
    ]
  });

  useEffect(() => {
    setMembership({ ...(member as MemberType), isAdmin: isAdmin as boolean });
  }, [isAdmin, member]);

  return (
    <MembershipContext.Provider value={{ membership, setMembership }}>
      {children}
    </MembershipContext.Provider>
  );
}
