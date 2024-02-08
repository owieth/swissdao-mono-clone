import { Address, BigInt } from '@graphprotocol/graph-ts';
import {
  AddBadge as AddBadgeEvent,
  EditBadge as EditBadgeEvent,
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../../generated/SwissDAOMembership/SwissDAOMembership';
import { Badge } from '../../generated/schema';
import { fetchHolder, fetchTokenTransaction } from '../utils';

export function fetchBadge(id: string): Badge {
  let badge = Badge.load(id);

  if (!badge) {
    badge = new Badge(id);
    badge.tokenID = BigInt.fromString(id);
    badge.imageUri = '';
    badge.name = '';
    badge.description = '';
    badge.attributes = '';
    badge.holders = [];
  }

  return badge;
}

export function handleBadgeTransfer(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let badge = fetchBadge(tokenId.toString());

  const badgeStruct = contract.getBadgeStructByTokenId(tokenId);
  const member = fetchHolder(event.address, event.params.to);
  const holders = badge.holders;

  badge.imageUri = badgeStruct.imageUri;
  badge.name = badgeStruct.name;
  badge.description = badgeStruct.description;
  badge.attributes = badgeStruct.attributes;

  let tokenTransaction = fetchTokenTransaction(
    event.transaction.hash.toHexString()
  );

  tokenTransaction.tokenID = tokenId;
  tokenTransaction.amount = event.params.value;
  tokenTransaction.txHash = event.transaction.hash;
  tokenTransaction.timestamp = event.block.timestamp;

  if (event.params.from == Address.zero()) {
    tokenTransaction.type = 'BADGE_MINT';
    tokenTransaction.to = fetchHolder(event.address, event.params.to).id;

    holders.push(member.id);

    badge.holders = holders;

    member.save();
  } else if (event.params.to == Address.zero()) {
    tokenTransaction.type = 'BADGE_BURN';
    tokenTransaction.to = fetchHolder(event.address, event.params.to).id;

    const indexOfHolder = holders.indexOf(member.id);

    badge.holders = holders.splice(indexOfHolder, 1);

    member.save();
  }

  tokenTransaction.save();
  badge.save();
}

export function handleBadgeAdd(event: AddBadgeEvent): void {
  const tokenId = event.params._badgeId;

  let badge = fetchBadge(tokenId.toString());

  const contract = SwissDAOMembership.bind(event.address);

  const badgeStruct = contract.getBadgeStructByTokenId(tokenId);

  badge.name = badgeStruct.name;
  badge.description = badgeStruct.description;
  badge.imageUri = badgeStruct.imageUri;
  badge.save();

  let tokenTransaction = fetchTokenTransaction(
    event.transaction.hash.toHexString()
  );

  tokenTransaction.tokenID = tokenId;
  tokenTransaction.type = 'BADGE_ADD';
  tokenTransaction.txHash = event.transaction.hash;
  tokenTransaction.timestamp = event.block.timestamp;
  tokenTransaction.save();
}

export function handleBadgeEdit(event: EditBadgeEvent): void {
  const tokenId = event.params._badgeId;

  let badge = fetchBadge(tokenId.toString());

  const contract = SwissDAOMembership.bind(event.address);

  const badgeStruct = contract.getBadgeStructByTokenId(tokenId);

  badge.name = badgeStruct.name;
  badge.description = badgeStruct.description;
  badge.imageUri = badgeStruct.imageUri;
  badge.save();

  let tokenTransaction = fetchTokenTransaction(
    event.transaction.hash.toHexString()
  );

  tokenTransaction.tokenID = tokenId;
  tokenTransaction.type = 'BADGE_EDIT';
  tokenTransaction.txHash = event.transaction.hash;
  tokenTransaction.timestamp = event.block.timestamp;
  tokenTransaction.save();
}
