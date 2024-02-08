import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts';
import { SwissDAOMembership } from '../generated/SwissDAOMembership/SwissDAOMembership';
import { Membership, TokenTransaction } from '../generated/schema';
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

export function fetchTokenTransaction(id: string): TokenTransaction {
  let tokenTransaction = TokenTransaction.load(id);

  if (!tokenTransaction) {
    tokenTransaction = new TokenTransaction(id);
    tokenTransaction.tokenID = BigInt.fromI32(0);
    tokenTransaction.from = '';
    tokenTransaction.to = '';
    tokenTransaction.amount = BigInt.fromI32(0);
    tokenTransaction.txHash = Bytes.fromI32(0);
    tokenTransaction.type = 'NONE';
    tokenTransaction.timestamp = BigInt.fromI32(0);
  }

  return tokenTransaction;
}
