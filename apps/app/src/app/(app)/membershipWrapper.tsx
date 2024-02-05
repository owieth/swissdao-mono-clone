'use client';

import { fetchSubgraph } from '@/api/subgraph';
import { MembershipContext } from '@/contexts/membership';
import { MembershipType } from '@/types/types';
import { useCallback, useEffect, useState } from 'react';
import { getAddress } from 'viem';
import { useAccount } from 'wagmi';

export default function MembershipWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  const [membership, setMembership] = useState<MembershipType>();

  const { address } = useAccount();

  const fetchMembership = useCallback(async () => {
    const { memberships } = (await fetchSubgraph(`
        query {
          memberships {
            id
            tokenID
            profileImageUri
            nickname
            holder
            joined_At
            minted_At
            experiencePoints
            activityPoints
            attendedEvents
            isAdmin
          }
        }
      `)) as { memberships: MembershipType[] };

    return memberships.find(({ holder }) => getAddress(holder) === address);
  }, [address]);

  useEffect(() => {
    const fetch = async () => {
      setMembership(await fetchMembership());
    };

    fetch();
  }, [fetchMembership]);

  return (
    <MembershipContext.Provider value={{ membership, setMembership }}>
      {children}
    </MembershipContext.Provider>
  );
}
