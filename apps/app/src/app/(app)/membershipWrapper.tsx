'use client';

import { MembershipContext } from '@/contexts/membership';
import { CONTRACT } from '@/contracts/contracts';
import { MemberType, MembershipType } from '@/types/types';
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

  useEffect(() => {
    setMembership(member as MemberType);
  }, [member]);

  return (
    <MembershipContext.Provider value={{ membership, setMembership }}>
      {children}
    </MembershipContext.Provider>
  );
}
