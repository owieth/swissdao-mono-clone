'use client';

import { MembershipContext } from '@/contexts/membership';
import { CONTRACT } from '@/contracts/contracts';
import { MembershipType } from '@/types/types';
import { useAccount, useContractRead } from 'wagmi';
import { useEffect, useState } from 'react';

export default function MembershipWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [membership, setMembership] = useState<MembershipType>();

  const { address } = useAccount();

  const { data: member } = useContractRead({
    ...CONTRACT,
    functionName: 'getMember',
    args: [address],
  });

  useEffect(() => {
    setMembership(member as MembershipType);
  }, [member]);

  return (
    <MembershipContext.Provider value={{ membership, setMembership }}>
      {children}
    </MembershipContext.Provider>
  );
}
