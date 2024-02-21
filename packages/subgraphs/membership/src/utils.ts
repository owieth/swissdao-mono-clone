import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts';
import { SwissDAOMembership } from '../generated/SwissDAOMembership/SwissDAOMembership';
import { Membership, Transaction } from '../generated/schema';
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

export function fetchTransaction(id: string): Transaction {
  let transaction = Transaction.load(id);

  if (!transaction) {
    transaction = new Transaction(id);
    transaction.tokenID = BigInt.fromI32(0);
    transaction.from = '';
    transaction.to = '';
    transaction.amount = BigInt.fromI32(0);
    transaction.txHash = Bytes.fromI32(0);
    transaction.type = 'NONE';
    transaction.timestamp = BigInt.fromI32(0);
  }

  return transaction;
}
