import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidEthereumAddress(address: string | any) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}
