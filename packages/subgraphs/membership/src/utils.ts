import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts';
import { SwissDAOMembership } from '../generated/SwissDAOMembership/SwissDAOMembership';
import { Guild, Membership } from '../generated/schema';

export function fetchMembership(id: string): Membership {
  let membership = Membership.load(id);

  if (!membership) {
    membership = new Membership(id);
    membership.tokenID = BigInt.fromString(id);
    membership.profileImageUri = "";
    membership.nickname = "";
    membership.holder = Bytes.fromHexString("0x0000000000000000000000000000000000000000");
    membership.joined_At = BigInt.fromI32(0);
    membership.minted_At = BigInt.fromI32(0)
    membership.experiencePoints = BigInt.fromI32(0)
    membership.activityPoints = BigInt.fromI32(0)
    membership.attendedEvents = BigInt.fromI32(0);
  }

  return membership;
}

export function fetchGuild(id: string): Guild {
  let guild = Guild.load(id);

  if (!guild) {
    guild = new Guild(id);
    guild.tokenID = BigInt.fromString(id);
    guild.imageUri = '';
    guild.name = '';
    guild.description = '';
    guild.holders = [];
  }

  return guild;
}

export function fetchBalance(
  tokenAddress: Address,
  accountAddress: Address,
  tokenId: BigInt
): BigInt {
  let contract = SwissDAOMembership.bind(tokenAddress);

  return contract.balanceOf(accountAddress, tokenId);
}
