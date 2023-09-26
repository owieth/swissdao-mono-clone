import {
  Address,
  PublicClient,
  createPublicClient,
  createWalletClient,
  http,
} from 'viem';
import { sepolia } from 'viem/chains';
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

export const ALCHEMY_URL = `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`;

export const PUBLIC_PROVIDER = createPublicClient({
  chain: sepolia,
  transport: http(ALCHEMY_URL),
}) as any;

export const WALLET_PROVIDER = createWalletClient({
  chain: sepolia,
  transport: http(ALCHEMY_URL),
});

export const CONTRACT_ADDRESS_SEPOLIA =
  '0x43d6421c8e15b9d9181daa50512620ec95f3cb87';

export const CONTRACT = {
  address: CONTRACT_ADDRESS_SEPOLIA as Address,
  abi,
};
