import { Address, createPublicClient, createWalletClient, http } from 'viem';
import { optimismSepolia } from 'viem/chains';
import abi from './ABI.json';

export const ALCHEMY_KEY = '7CxD2Ho9qFjw7rtvrAj4i371vUHX9lHA';

export const ALCHEMY_URL = `https://opt-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`;

export const PUBLIC_PROVIDER = createPublicClient({
  chain: optimismSepolia,
  transport: http(ALCHEMY_URL)
}) as any;

export const WALLET_PROVIDER = createWalletClient({
  chain: optimismSepolia,
  transport: http(ALCHEMY_URL)
});

export const CONTRACT_ADDRESS_OPTIMISM_SEPOLIA =
  '0xEC997f40a560518DEb69B8287355fdA9f2DFa623';

export const CONTRACT = {
  address: CONTRACT_ADDRESS_OPTIMISM_SEPOLIA as Address,
  abi
};
