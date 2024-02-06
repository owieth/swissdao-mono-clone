import { Address, BigInt } from '@graphprotocol/graph-ts';
import {
  AddBadge as AddBadgeEvent,
  EditBadge as EditBadgeEvent,
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../../generated/SwissDAOMembership/SwissDAOMembership';
import { Badge } from '../../generated/schema';
import { fetchHolder } from '../utils';

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

export function handleBadgeTransfer(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let badge = fetchBadge(tokenId.toString());

  const badgeStruct = contract.getBadgeStructByTokenId(tokenId);
  const member = fetchHolder(event.address, event.params.to);

  badge.imageUri = badgeStruct.imageUri;
  badge.name = badgeStruct.name;
  badge.description = badgeStruct.description;
  badge.attributes = badgeStruct.attributes;

  if (event.params.from == Address.zero()) {
    if (badge.id == '1') {
      member.experiencePoints = member.experiencePoints.plus(
        event.params.value
      );
    } else if (badge.id == '2') {
      member.activityPoints = member.activityPoints.plus(event.params.value);
    } else if (badge.id == '3') {
      member.attendedEvents = member.attendedEvents.plus(event.params.value);
    }
    member.save();
  } else if (event.params.to == Address.zero()) {
    if (badge.id == '1') {
      member.experiencePoints = member.experiencePoints.minus(
        event.params.value
      );
    } else if (badge.id == '2') {
      member.activityPoints = member.activityPoints.minus(event.params.value);
    } else if (badge.id == '3') {
      member.attendedEvents = member.attendedEvents.minus(event.params.value);
    }
    member.save();
  }

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
}
