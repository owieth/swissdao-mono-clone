import { Address, BigInt } from '@graphprotocol/graph-ts';
import { SwissDAOMembership } from '../generated/SwissDAOMembership/SwissDAOMembership';
import { Membership } from '../generated/schema';
import { fetchMembership } from './membership/membership';

export function fetchBalance(
  tokenAddress: Address,
  accountAddress: Address,
  tokenId: BigInt
): BigInt {
  let contract = SwissDAOMembership.bind(tokenAddress);

  return contract.balanceOf(accountAddress, tokenId);
}

export function fetchHolder(
  tokenAddress: Address,
  memberAddress: Address
): Membership {
  let contract = SwissDAOMembership.bind(tokenAddress);

  const member = contract.getMemberStructByAddress(memberAddress);

  return fetchMembership(member.tokenId.toString());
}
