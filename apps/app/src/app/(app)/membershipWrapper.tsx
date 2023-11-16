'use client';

import { MembershipContext } from '@/contexts/membership';
import { MembershipType } from '@/types/types';
import { useState } from 'react';

export default function MembershipWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [membership, setMembership] = useState<MembershipType>();

  return (
    <MembershipContext.Provider value={{ membership, setMembership }}>
      {children}
    </MembershipContext.Provider>
  );
}
