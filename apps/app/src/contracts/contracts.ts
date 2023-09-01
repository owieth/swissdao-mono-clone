import { Address } from 'viem';
import abi from './ABI.json';

export enum TokenState {
  ONBOARDING,
  ACTIVE,
  INACTIVE,
  LABS,
}

export type TokenStruct = {
  mintedAt: number;
  joinedAt: number;
  experiencePoints: number;
  activityPoints: number;
  attendedEvents: number;
  holder: Address;
  profileImageUri: string;
  state: TokenState;
};

export const ALCHEMY_KEY = 'PZYto3ONWzPMqPW6AV70bOzbofx11rQf';

export const CONTRACT_ADDRESS_SEPOLIA =
  '0x3efba2f546a990f5821056a4cb511c88f5757a0d';

export const CONTRACT = {
  address: CONTRACT_ADDRESS_SEPOLIA as Address,
  abi,
};
