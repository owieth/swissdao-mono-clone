import { BigInt } from '@graphprotocol/graph-ts';

import {
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../generated/SwissDAOMembership/SwissDAOMembership';
import { fetchBalance, fetchGuild, fetchHolder, fetchMembership, fetchToken } from './utils';

export function handleToken(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let token = fetchToken(tokenId.toString());

  const tokenStruct = contract.getTokenStructByTokenId(tokenId);

  token.imageUri = tokenStruct.imageUri;
  token.name = tokenStruct.name;
  token.description = tokenStruct.description;
  token.attributes = tokenStruct.attributes;

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

  //let holder = Membership.load(tokenId.toString() + "-" + );

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
  membership.experiencePoints = fetchBalance(
    event.address,
    membershipStruct.holder,
    BigInt.fromI32(1)
  );
  membership.activityPoints = fetchBalance(
    event.address,
    membershipStruct.holder,
    BigInt.fromI32(2)
  );
  membership.attendedEvents = fetchBalance(
    event.address,
    membershipStruct.holder,
    BigInt.fromI32(3)
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
