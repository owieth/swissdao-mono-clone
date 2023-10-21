import { ALCHEMY_KEY, CONTRACT_ADDRESS_SEPOLIA } from '@/contracts/contracts';
import { ethers } from 'ethers';
import ABI from '../contracts/ABI.json';

export const PROVIDER = new ethers.AlchemyProvider('sepolia', ALCHEMY_KEY);
export const ETHERS_CONTRACT = new ethers.Contract(
  CONTRACT_ADDRESS_SEPOLIA,
  ABI,
  PROVIDER
);
