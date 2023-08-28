import { Address } from 'viem';
import abi from './ABI.json';

const CONTRACT_ADDRESS_SEPOLIA = '0x3efba2f546a990f5821056a4cb511c88f5757a0d';

export const CONTRACT = {
  address: CONTRACT_ADDRESS_SEPOLIA as Address,
  abi,
};
