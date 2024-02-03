import { Bytes } from '@graphprotocol/graph-ts';
import {
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../generated/SwissDAOMembership/SwissDAOMembership';
import { fetchGuild, fetchHolder, fetchMembership, fetchToken } from './utils';

export function handleToken(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let token = fetchToken(tokenId.toString());

  const tokenStruct = contract.getTokenStructByTokenId(tokenId);
  const member = fetchHolder(event.address, event.params.to);

  token.imageUri = tokenStruct.imageUri;
  token.name = tokenStruct.name;
  token.description = tokenStruct.description;
  token.attributes = tokenStruct.attributes;

  if (token.id == '1') {
    member.experiencePoints = member.experiencePoints.plus(event.params.value);
  } else if (token.id == '2') {
    member.activityPoints = member.activityPoints.plus(event.params.value);
  } else if (token.id == '3') {
    member.attendedEvents = member.attendedEvents.plus(event.params.value);
  }

  member.save();
  token.save();
}

export function handleGuild(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let guild = fetchGuild(tokenId.toString());

  const holders = guild.holders;

  const holder = fetchHolder(event.address, event.params.to);

  const tokenStruct = contract.getTokenStructByTokenId(tokenId);

  guild.imageUri = tokenStruct.imageUri;
  guild.name = tokenStruct.name;
  guild.description = tokenStruct.description;

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
  membership.joined_At = membershipStruct.joinedAt;
  membership.minted_At = membershipStruct.mintedAt;

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
      handleToken(event);
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
