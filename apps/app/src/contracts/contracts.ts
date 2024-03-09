import { Address, createPublicClient, createWalletClient, http } from 'viem';
import { optimism, optimismSepolia } from 'viem/chains';
import abi from './ABI.json';

// export const ALCHEMY_KEY = '7CxD2Ho9qFjw7rtvrAj4i371vUHX9lHA';

// export const ALCHEMY_URL = `https://opt-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}`;

export const ALCHEMY_KEY = 'SxI-WKlIE1s_lp7YKyALqToe6blGUef0';

export const ALCHEMY_URL = `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`;

// export const PUBLIC_PROVIDER = createPublicClient({
//   chain: optimismSepolia,
//   transport: http(ALCHEMY_URL)
// }) as any;

// export const WALLET_PROVIDER = createWalletClient({
//   chain: optimismSepolia,
//   transport: http(ALCHEMY_URL)
// });

export const PUBLIC_PROVIDER = createPublicClient({
  chain: optimism,
  transport: http(ALCHEMY_URL)
}) as any;

export const WALLET_PROVIDER = createWalletClient({
  chain: optimism,
  transport: http(ALCHEMY_URL)
});

export const CONTRACT_ADDRESS_OPTIMISM_SEPOLIA =
  '0xD2B43918d9522B6ba8E3cbcfd49E62123661Fd8A';

export const CONTRACT_ADDRESS_OPTIMISM =
  '0xad7298ad5f2dc5dd9c2687edb63baf6ae78a689b';

export const CONTRACT = {
  // address: CONTRACT_ADDRESS_OPTIMISM_SEPOLIA as Address,
  address: CONTRACT_ADDRESS_OPTIMISM as Address,
  abi
};
