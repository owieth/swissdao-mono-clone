import { Bytes, BigInt, Address } from '@graphprotocol/graph-ts';
import {
  SwissDAOMembership,
  TransferSingle as TransferSingleEvent,
  EditMembership as EditMembershipEvent
} from '../../generated/SwissDAOMembership/SwissDAOMembership';
import { Membership } from '../../generated/schema';

export function fetchMembership(id: string): Membership {
  let membership = Membership.load(id);

  if (!membership) {
    membership = new Membership(id);
    membership.tokenID = BigInt.fromString(id);
    membership.profileImageUri = '';
    membership.nickname = '';
    membership.holder = Bytes.fromHexString(
      '0x0000000000000000000000000000000000000000'
    );
    membership.joinedAt = BigInt.fromI32(0);
    membership.experiencePoints = BigInt.fromI32(0);
    membership.activityPoints = BigInt.fromI32(0);
    membership.attendedEvents = BigInt.fromI32(0);
  }

  return membership;
}

export function handleMembershipTransfer(event: TransferSingleEvent): void {
  const contract = SwissDAOMembership.bind(event.address);
  const tokenId = event.params.id;

  let membership = fetchMembership(tokenId.toString());
  const membershipStruct = contract.getMemberStructByTokenId(tokenId);

  if (event.params.from == Address.zero()) {
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
  } else if (event.params.to == Address.zero()) {
    membership.tokenID = BigInt.fromI32(0);
    membership.nickname = '';
    membership.profileImageUri = '';
    membership.holder = event.params.to;
    membership.joinedAt = BigInt.fromI32(0);
    membership.experiencePoints = BigInt.fromI32(0);
    membership.activityPoints = BigInt.fromI32(0);
    membership.attendedEvents = BigInt.fromI32(0);
    membership.isAdmin = false;
    membership.save();
  }
}

export function handleMembershipEdit(event: EditMembershipEvent): void {
  const tokenId = event.params._membershipId;

  let membership = Membership.load(tokenId.toString());

  if (membership) {
    const contract = SwissDAOMembership.bind(event.address);

    const membershipStruct = contract.getMemberStructByTokenId(tokenId);

    membership.nickname = membershipStruct.nickname;
    membership.profileImageUri = membershipStruct.profileImageUri;
    membership.save();
  }
}
