import { MembershipType } from '@/types/types';
import { createContext } from 'react';

type MembershipContextType = {
  membership: MembershipType | undefined;
  setMembership: Function;
};

export const MembershipContext = createContext({} as MembershipContextType);
