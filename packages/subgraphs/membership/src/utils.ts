import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts';
import { SwissDAOMembership } from '../generated/SwissDAOMembership/SwissDAOMembership';
import { Guild, Membership, Badge } from '../generated/schema';
import { fetchMembership } from './membership/membership';

export function fetchBadge(id: string): Badge {
  let badge = Badge.load(id);

  if (!badge) {
    badge = new Badge(id);
    badge.tokenID = BigInt.fromString(id);
    badge.imageUri = '';
    badge.name = '';
    badge.description = '';
    badge.attributes = '';
  }

  return badge;
}

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
