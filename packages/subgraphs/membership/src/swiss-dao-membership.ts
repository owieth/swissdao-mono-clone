import { BigInt } from '@graphprotocol/graph-ts';
import { Guild, Membership, Token } from '../generated/schema';

import {
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent
} from '../generated/SwissDAOMembership/SwissDAOMembership';
import { fetchBalance } from './utils';

export function handleToken(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let token = Token.load(tokenId.toString());

  // TODO need fresh contract
  //const tokenStruct = contract.getTokenStructByTokenId(tokenId);

  if (!token) {
    token = new Token(tokenId.toString());
    token.tokenID = tokenId;
    token.imageUri = 'tokenStruct.imageUri';
    token.name = 'tokenStruct.name';
    token.description = 'tokenStruct.description';
    token.attributes = 'tokenStruct.attributes';
    token.save();
  }
}

export function handleGuild(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let guild = Guild.load(tokenId.toString());

  // TODO need fresh contract
  //const tokenStruct = contract.getTokenStructByTokenId(tokenId);

  const allMembers = contract.getAllMembers();

  //const membersMappedToAddress = allMembers.map((member) => member.membership.holder);

  // const holders = contract.balanceOfBatch(membersMappedToAddress, [tokenId]).filter((balance, i) => contract.balanceOf(allMembers[i].membership.holder, balance) === new BigInt(1));
  //const holders = allMembers.filter((member) => contract.try_balanceOf(member.membership.holder, tokenId).value > new BigInt(1)) as any;

  //const balances = fetchBalance(event.address, membersMappedToAddress[0], tokenId);

  if (!guild) {
    guild = new Guild(tokenId.toString());
    guild.tokenID = tokenId;
    guild.imageUri = 'tokenStruct.imageUri';
    guild.name = 'tokenStruct.name';
    guild.description = 'tokenStruct.description';
    guild.save();
  }

  //let holder = Membership.load(tokenId.toString() + "-" + );
}

export function handleMembership(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);

  const tokenId = event.params.id;

  let membership = Membership.load(tokenId.toString());

  const membershipStruct = contract.getMemberStructByTokenId(tokenId);

  if (!membership) {
    membership = new Membership(tokenId.toString());
    membership.tokenID = tokenId;
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
}

export function handleTransferSingle(event: TransferSingleEvent): void {
  switch (event.params.id.toString().length) {
    case 1:
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
