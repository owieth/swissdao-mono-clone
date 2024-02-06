import { Bytes } from '@graphprotocol/graph-ts';
import {
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent,
  AddBadge as AddBadgeEvent,
  EditBadge as EditBadgeEvent,
  AddGuild as AddGuildEvent,
  EditGuild as EditGuildEvent,
  EditMembership as EditMembershipEvent
} from '../generated/SwissDAOMembership/SwissDAOMembership';
import { fetchGuild, fetchHolder, fetchMembership, fetchBadge } from './utils';

export function handleBadge(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let badge = fetchBadge(tokenId.toString());

  const badgeStruct = contract.getBadgeStructByTokenId(tokenId);
  const member = fetchHolder(event.address, event.params.to);

  badge.imageUri = badgeStruct.imageUri;
  badge.name = badgeStruct.name;
  badge.description = badgeStruct.description;
  badge.attributes = badgeStruct.attributes;

  if (badge.id == '1') {
    member.experiencePoints = member.experiencePoints.plus(event.params.value);
  } else if (badge.id == '2') {
    member.activityPoints = member.activityPoints.plus(event.params.value);
  } else if (badge.id == '3') {
    member.attendedEvents = member.attendedEvents.plus(event.params.value);
  }

  member.save();
  badge.save();
}

export function handleGuild(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let guild = fetchGuild(tokenId.toString());

  const holders = guild.holders;

  const holder = fetchHolder(event.address, event.params.to);

  const badgeStruct = contract.getBadgeStructByTokenId(tokenId);

  guild.imageUri = badgeStruct.imageUri;
  guild.name = badgeStruct.name;
  guild.description = badgeStruct.description;

  holders.push(holder.id);

  guild.holders = holders;

  guild.save();
}

export function handleMembership(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let membership = fetchMembership(tokenId.toString());

  const membershipStruct = contract.getMemberStructByTokenId(tokenId);

  membership.profileImageUri = membershipStruct.profileImageUri;
  membership.nickname = membershipStruct.nickname;
  membership.holder = membershipStruct.holder;
  membership.joinedAt = event.block.timestamp;

  membership.isAdmin = contract.hasRole(
    Bytes.fromHexString(
      '0x0000000000000000000000000000000000000000000000000000000000000000'
    ),
    membershipStruct.holder
  );

  membership.save();
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  switch (event.params.id.toString().length) {
    case 1:
    case 3:
      handleBadge(event);
      break;

    case 2:
      handleGuild(event);
      break;

    case 5:
      handleMembership(event);
      break;

    default:
      break;
  }
}

export function handleAddBadge(event: AddBadgeEvent): void { }

export function handleEditBadge(event: EditBadgeEvent): void { }

export function handleAddGuild(event: AddGuildEvent): void { }

export function handleEditGuild(event: EditGuildEvent): void { }

export function handleEditMembership(event: EditMembershipEvent): void { }
