import { Address, BigInt } from '@graphprotocol/graph-ts';
import {
  AddBadge as AddBadgeEvent,
  EditBadge as EditBadgeEvent,
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../../generated/SwissDAOMembership/SwissDAOMembership';
import { Badge } from '../../generated/schema';
import { fetchHolder, fetchTransaction } from '../utils';

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
  let holders = badge.holders;

  badge.imageUri = badgeStruct.imageUri;
  badge.name = badgeStruct.name;
  badge.description = badgeStruct.description;
  badge.attributes = badgeStruct.attributes;

  let transaction = fetchTransaction(event.transaction.hash.toHexString());

  transaction.tokenID = tokenId;
  transaction.amount = event.params.value;
  transaction.txHash = event.transaction.hash;
  transaction.timestamp = event.block.timestamp;

  if (event.params.from == Address.zero()) {
    transaction.type = 'BADGE_MINT';
    transaction.to = fetchHolder(event.address, event.params.to).id;

    holders.push(member.id);

    badge.holders = holders;

    member.save();
  } else if (event.params.to == Address.zero()) {
    transaction.type = 'BADGE_BURN';
    transaction.to = fetchHolder(event.address, event.params.to).id;

    const indexOfHolder = holders.indexOf(member.id);
    holders.splice(indexOfHolder, 1);

    badge.holders = holders;

    member.save();
  }

  transaction.save();
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

  let transaction = fetchTransaction(event.transaction.hash.toHexString());

  transaction.tokenID = tokenId;
  transaction.type = 'BADGE_ADD';
  transaction.txHash = event.transaction.hash;
  transaction.timestamp = event.block.timestamp;
  transaction.save();
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

  let transaction = fetchTransaction(event.transaction.hash.toHexString());

  transaction.tokenID = tokenId;
  transaction.type = 'BADGE_EDIT';
  transaction.txHash = event.transaction.hash;
  transaction.timestamp = event.block.timestamp;
  transaction.save();
}
