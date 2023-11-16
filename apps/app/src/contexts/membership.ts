import { MemberType } from '@/types/types';
import { createContext } from 'react';

type MembershipContextType = {
  membership: MemberType | undefined;
  setMembership: Function;
};

export const MembershipContext = createContext({} as MembershipContextType);
